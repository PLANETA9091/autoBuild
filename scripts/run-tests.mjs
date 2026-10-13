#!/usr/bin/env node
// Test runner: runs every test file in its OWN child process with a hard timeout and
// --test-force-exit.
//
// Why not one big `node --test tests/unit`?
//   * a single leaked timer/handle in any module keeps the whole child alive forever
//     (the fly ticker did exactly that: the 15-minute CI job died with no diagnostics)
//   * one hanging file then blocks every file queued behind it
//
// Per-file isolation means a hang is KILLED at the timeout, reported as a failure of
// exactly that file, and the remaining files still run. --test-force-exit (Node 22.5+)
// additionally turns "tests all passed but the process lingers" into a normal exit 0.
//
// FLAKE-RETRY (v0.974.31): the 2-core contention flake's own seat. A unit file can
// fail once under load ("Promise resolution is still pending" - the toolupgrade
// 18.3s class: isolated green 92/92 both with the diff and stash-verified at clean
// HEAD, in-suite red) and the whole job dies on a file that is green on a quiet box.
// One honest retry per unit file: a retry that passes is reported as FLAKE-RETRY in
// the run's own output (the flake is named, never hidden), a file that fails twice
// still fails the suite. Integration stays single-shot: its files run minutes, a
// retry there could double the job's wall.
//
//   node scripts/run-tests.mjs unit         # pure unit tests
//   node scripts/run-tests.mjs integration  # needs a running vanilla server
//   node scripts/run-tests.mjs all
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const what = process.argv[2] || 'unit'

function discover (dir) {
  if (!fs.existsSync(dir)) return []
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...discover(p))
    else if (entry.name.endsWith('.test.mjs')) out.push(p)
  }
  return out
}

const suites = what === 'all' ? ['unit', 'integration'] : [what]
// RUN_TESTS_DIR (v0.974.31): the harness self-test's own seam (tests/unit/
// runtests-harness.test.mjs) - point discovery at a throwaway fixture tree so the
// retry law is exercised as a real child process, not assumed.
const testsDir = process.env.RUN_TESTS_DIR || path.join(root, 'tests')
const files = suites.flatMap(s => discover(path.join(testsDir, s)))

// Per-file hard timeout. The integration suite legitimately runs for minutes (bot fleets
// spawning, gathering wood, crafting tools and mining on a live server), so it gets a
// bigger budget than the pure unit files, which finish in seconds.
const DEFAULT_TIMEOUT_MS = suites.includes('integration') ? 420000 : 120000
const FILE_TIMEOUT_MS = Number(process.env.TEST_FILE_TIMEOUT_MS || DEFAULT_TIMEOUT_MS)

if (!files.length) {
  console.error(`[run-tests] no test files found for "${what}"`)
  process.exit(1)
}
console.log(`[run-tests] ${files.length} test file(s), ${FILE_TIMEOUT_MS / 1000}s hard timeout each:`)
for (const f of files) console.log(`  ${path.relative(root, f)}`)

// --test-force-exit exists from Node 22.5; probe once so older runtimes still work.
// The probe must use a real test FILE: newer Node (24+) rejects `--test` combined with
// `-e` ("either --test or --eval can be used, not both"), which made the old probe
// report "not supported" on runtimes that actually have the flag.
let forceExit = false
try {
  const probeFile = path.join(os.tmpdir(), `probe-force-exit-${process.pid}.test.mjs`)
  fs.writeFileSync(probeFile, "import { test } from 'node:test'\ntest('probe', () => {})\n")
  const probe = spawnSync(process.execPath, ['--test-force-exit', '--test', probeFile], { timeout: 15000 })
  fs.unlinkSync(probeFile)
  forceExit = probe.status === 0
} catch { /* keep forceExit = false */ }
if (!forceExit) console.log('[run-tests] --test-force-exit not supported here, relying on the per-file timeout')

const MAX_ATTEMPTS = suites.includes('integration') ? 1 : 2
let failed = 0
let flakeRetries = 0
for (const f of files) {
  const rel = path.relative(root, f)
  console.log(`\n[run-tests] === ${rel} ===`)
  let ok = false
  let firstFail = ''
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const args = ['--test']
    if (forceExit) args.push('--test-force-exit')
    args.push(f)
    const res = spawnSync(process.execPath, args, { stdio: 'inherit', cwd: root, timeout: FILE_TIMEOUT_MS })
    const timedOut = res.error && res.error.code === 'ETIMEDOUT'
    if (!res.error && res.status === 0) { ok = true; break }
    const why = timedOut
      ? `hung, killed at ${FILE_TIMEOUT_MS / 1000}s`
      : res.error
        ? `failed to spawn: ${res.error.message}`
        : `exit ${res.status}`
    if (attempt === 1) firstFail = why
    if (attempt < MAX_ATTEMPTS) {
      console.error(`[run-tests] attempt 1 FAILED (${why}): ${rel} - one honest retry (the FLAKE-RETRY law)`)
    } else if (firstFail && firstFail !== why) {
      console.error(`[run-tests] FAILED (${why}; attempt 1: ${firstFail}): ${rel}`)
    } else {
      console.error(`[run-tests] FAILED (${why}): ${rel}`)
    }
  }
  if (ok) {
    if (firstFail) {
      flakeRetries++
      console.log(`[run-tests] FLAKE-RETRY: ${rel} green on attempt 2 (attempt 1: ${firstFail}) - the contention flake named, the file's own green stands`)
    } else {
      console.log(`[run-tests] PASSED: ${rel}`)
    }
  } else {
    failed++
  }
}

console.log(`\n[run-tests] ${files.length - failed}/${files.length} file(s) passed${flakeRetries ? ` (${flakeRetries} flake-retry${flakeRetries > 1 ? 's' : ''}, named above)` : ''}`)
process.exit(failed ? 1 : 0)
