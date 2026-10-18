#!/usr/bin/env node
// (v0.976.253, fire-0542) pincheck-drainfence: the neighbours' own fleet19
// wiring pins re-verified against the edited source (the light arithmetic
// check the local law prices - the real test battery rides CI).
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
const src = readFileSync('/home/z/privateB/testbed/fleet19.mjs', 'utf8')
let fails = 0
const t = (name, fn) => { try { fn(); console.log(`  ok ${name}`) } catch (e) { fails++; console.log(`  FAIL ${name}: ${e?.message ?? e}`) } }

console.log('--- the exitwatchdog battery\'s wiring pins (must stand untouched) ---')
t('the import line', () => assert.match(src, /import \{ exitWatchdogVerdict, EXIT_WATCHDOG_GRACE_MS \} from '\.\.\/src\/lib\/exitwatchdog\.mjs'/))
t('the timer rides the verdict', () => {
  assert.match(src, /const v = exitWatchdogVerdict\(\{ nowMs: Date\.now\(\), deadlineMs: deadline \}\)/)
  assert.match(src, /if \(!v\.exit\) return/)
})
t('the canonical line + the exit 12', () => {
  assert.match(src, /exit watchdog: the margin spent \(\$\{Math\.round\(v\.overdueMs \/ 1000\)\}s past the deadline\+\$\{Math\.round\(EXIT_WATCHDOG_GRACE_MS \/ 1000\)\}s grace, the runners never drained\) - the hard exit owns the process/)
  assert.match(src, /printFinalReport\('exit watchdog - the margin spent, the runners never drained'\)/)
  assert.match(src, /process\.exit\(12\)/)
  assert.doesNotMatch(src, /process\.exit\(12\)[\s\S]*process\.exit\(12\)/)
})
t('the natural-end clearTimeout', () => assert.match(src, /clearTimeout\(exitWatchdogTimer\)/))

console.log('--- the runnersettlecensus battery\'s emitter pin (must stand untouched) ---')
t('the settle telemetry emitter line', () => {
  assert.ok(src.includes("[fleet] runner settle: ${settleWatched.length - parked.length}/${settleWatched.length} settled, ${parked.length} parked (${detail}) - the drain's own per-runner read"))
})

console.log('--- the finalbodycensus report-order neighbours (the report block intact) ---')
t('the loot ledger / crater / mass decode order', () => {
  const ledgerIdx = src.indexOf('loot ledger: mined=')
  const craterIdx = src.indexOf('banked crater decode:')
  const massIdx = src.indexOf('unaccounted mass decode:')
  assert.ok(massIdx > craterIdx && craterIdx > ledgerIdx)
})
t('the pickaxe tiers line stands', () => {
  assert.ok(src.includes('pickaxe tiers at end: ${PICK_TIERS.join(\',\')}'))
})

console.log('--- the fence\'s own wire (the .252 word rides) ---')
t('the fence import', () => assert.match(src, /import \{ drainFenceVerdict, DRAIN_FENCE_MARGIN_MS, drainFenceLine, drainFenceReason \} from '\.\.\/src\/lib\/drainfence\.mjs'/))
t('the race + the await', () => {
  assert.match(src, /const settleFenced = settleWatched\.map\(\(p\) => Promise\.race\(\[/)
  assert.match(src, /await Promise\.all\(settleFenced\)/)
})
t('the fenced branch + the green exit', () => {
  assert.match(src, /if \(fencedLabels\.length > 0\) console\.log\(drainFenceLine\(\{ labels: fencedLabels \}\)\)/)
  assert.match(src, /drainFenceReason\(\{ labels: fencedLabels \}\)/)
  assert.match(src, /: `normal end - deadline \$\{SECONDS\}s reached`\)/)
  assert.match(src, /process\.exit\(0\)/)
})
console.log(fails === 0 ? 'PINCHECK PASS: the neighbours\' pins stand, the fence rides' : `PINCHECK FAIL: ${fails}`)
process.exit(fails === 0 ? 0 : 1)
