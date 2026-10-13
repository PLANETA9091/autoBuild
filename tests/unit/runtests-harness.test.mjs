// Tests for the test harness itself (scripts/run-tests.mjs) - the FLAKE-RETRY law
// (v0.974.31). The 2-core contention flake's own price: a unit file can fail once
// under load ("Promise resolution is still pending" - the toolupgrade 18.3s class,
// isolated green 92/92) and the whole job died on a file that is green on a quiet
// box. The harness now retries a failed unit file ONCE; the retry passing is named
// FLAKE-RETRY in the run's own output (the flake is named, never hidden), a file
// that fails twice still fails.
//
// The exercise is REAL: each test spawns run-tests.mjs as a child process pointed
// at a throwaway fixture tree via the RUN_TESTS_DIR seam, with fixture files that
// count their attempts in a tmpdir state file. No repo test file is touched.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const RUN_TESTS = path.join(root, 'scripts', 'run-tests.mjs')

// A fixture tree <dir>/flakecheck with one flaky .test.mjs whose behavior is driven
// by an attempts counter file: attempt 1 fails, later attempts pass.
function writeFlakyFixture (dir, { failEveryTime = false } = {}) {
  const counter = path.join(dir, 'attempts.txt')
  fs.writeFileSync(counter, '0')
  fs.mkdirSync(path.join(dir, 'flakecheck'), { recursive: true })
  const body = `
import { test } from 'node:test'
import fs from 'node:fs'
const counter = ${JSON.stringify(counter)}
const n = Number(fs.readFileSync(counter, 'utf8')) + 1
fs.writeFileSync(counter, String(n))
test('the contention flake seat', () => {
  if (n === 1 || ${failEveryTime}) throw new Error('attempt-1 load flake (fixture)')
})
`
  fs.writeFileSync(path.join(dir, 'flakecheck', 'flaky.test.mjs'), body)
  return counter
}

function runHarness (dir) {
  // The self-test itself runs under node --test: NODE_TEST_CONTEXT=child-v8 rides
  // process.env into the harness and into the harness's own children, where the
  // nested runner materializes NOTHING (the fixture's counter stays 0, the run
  // exits 0 - the silent-pass lie, reproduced and named). Strip the runner context
  // at this seam so the harness's children are judge for themselves.
  const env = { ...process.env, RUN_TESTS_DIR: dir }
  delete env.NODE_TEST_CONTEXT
  return spawnSync(process.execPath, [RUN_TESTS, 'flakecheck'], {
    env,
    encoding: 'utf8',
    timeout: 60000
  })
}

test('FLAKE-RETRY: a unit file that fails once under load and passes on the retry counts green, named honestly', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'runtests-flake-ok-'))
  try {
    const counter = writeFlakyFixture(dir)
    const res = runHarness(dir)
    assert.equal(res.status, 0, `harness exit: ${res.status}\nstdout: ${res.stdout}\nstderr: ${res.stderr}`)
    // the flake is NAMED in the harness's own output - never hidden
    assert.match(res.stdout, /FLAKE-RETRY: .*flaky\.test\.mjs green on attempt 2/)
    assert.match(res.stdout, /attempt 1: exit 1/)
    assert.match(res.stdout, /1 flake-retry, named above/)
    assert.match(res.stdout, /1\/1 file\(s\) passed/)
    // the file really ran twice - the retry is a real re-run, not an assumption
    assert.equal(fs.readFileSync(counter, 'utf8'), '2')
  } finally {
    fs.rmSync(dir, { recursive: true, force: true })
  }
})

test('FLAKE-RETRY: a file that fails twice still fails the suite (the honest red stands)', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'runtests-flake-red-'))
  try {
    const counter = writeFlakyFixture(dir, { failEveryTime: true })
    const res = runHarness(dir)
    assert.equal(res.status, 1, `harness exit: ${res.status}\nstdout: ${res.stdout}\nstderr: ${res.stderr}`)
    assert.match(res.stderr, /FAILED \(exit 1\): .*flaky\.test\.mjs/)
    assert.doesNotMatch(res.stdout, /FLAKE-RETRY/)
    assert.match(res.stdout, /0\/1 file\(s\) passed/)
    // both attempts really ran, then the suite stopped
    assert.equal(fs.readFileSync(counter, 'utf8'), '2')
  } finally {
    fs.rmSync(dir, { recursive: true, force: true })
  }
})
