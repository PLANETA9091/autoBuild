// (v0.976.233) THE EXIT WATCHDOG - the hard-exit backstop's battery.
// THE EVIDENCE (run 39122045949, the F465 face): the Big fleet job died at
// its own 40-minute timeout, the fleet process outlived the 600s deadline by
// 25+ minutes - ONE never-settling await parked its runner past
// `await Promise.all(runners)` forever, the report never printed. The
// watchdog: an independent timer at deadline + the 420s margin the fleet19
// end-phase arithmetic names; on fire it prints the report the hang would
// bury and hard-exits 12. The pins: the pure verdict every branch byte-exact
// (the boundary the margin's own closed edge, the disabled grace, the junk
// clock), the constants, the fleet wiring (the import, the timer, the
// canonical line, the exit code, the natural-end clearTimeout), and the
// message grammar (the deliberate-miss law - the line claims no other lane's
// verdict words).
import { test } from 'node:test'
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { exitWatchdogVerdict, EXIT_WATCHDOG_GRACE_MS } from '../../src/lib/exitwatchdog.mjs'

const fleetSrc = readFileSync(new URL('../../testbed/fleet19.mjs', import.meta.url), 'utf8')

test('the constants: the grace rides the fleet19 margin arithmetic (420s)', () => {
  assert.equal(EXIT_WATCHDOG_GRACE_MS, 420000)
  // the design's own bound: the worst legitimate end rides 270s past the
  // deadline - the watchdog's grace must leave the headroom the comment names
  assert.ok(EXIT_WATCHDOG_GRACE_MS > 270000, 'the grace must outlive the 270s worst legitimate end')
})

test('the pure verdict: the margin spent is the hard exit (the F465 class)', () => {
  // the hang face: 25+ minutes past the deadline - the watchdog fired long before
  const v = exitWatchdogVerdict({ nowMs: 600000 + 1500000, deadlineMs: 600000 }) // 1500s past the deadline
  assert.equal(v.exit, true)
  assert.equal(v.overdueMs, 1080000) // 1500s - 420s grace = 1080s overdue
})

test('the pure verdict: every honest branch rides', () => {
  // inside the grace - the end-phase still owns the clock
  const a = exitWatchdogVerdict({ nowMs: 600000 + 269999, deadlineMs: 600000 })
  assert.equal(a.exit, false)
  assert.equal(a.remainingMs, 150001)
  // the boundary is the margin's own closed edge: now == deadline + grace exits
  const b = exitWatchdogVerdict({ nowMs: 600000 + 420000, deadlineMs: 600000 })
  assert.equal(b.exit, true)
  assert.equal(b.overdueMs, 0)
  // one millisecond short rides
  assert.equal(exitWatchdogVerdict({ nowMs: 600000 + 419999, deadlineMs: 600000 }).exit, false)
  // the disabled grace - the legacy shape
  assert.equal(exitWatchdogVerdict({ nowMs: 999999999, deadlineMs: 0, graceMs: 0 }).exit, false)
  assert.equal(exitWatchdogVerdict({ nowMs: 999999999, deadlineMs: 0, graceMs: -1 }).exit, false)
  // junk-safe: the unknown clocks never fire
  assert.equal(exitWatchdogVerdict({}).exit, false)
  assert.equal(exitWatchdogVerdict({ nowMs: NaN, deadlineMs: 600000 }).exit, false)
  assert.equal(exitWatchdogVerdict({ nowMs: 700000, deadlineMs: NaN }).exit, false)
  assert.equal(exitWatchdogVerdict({ nowMs: 700000, deadlineMs: 600000, graceMs: NaN }).exit, false)
})

test('the fleet wiring: the watchdog rides the deadline plus the grace, hard-exits 12', () => {
  // the import sits in the top imports block (the repo's own style law)
  assert.match(fleetSrc, /import \{ exitWatchdogVerdict, EXIT_WATCHDOG_GRACE_MS \} from '\.\.\/src\/lib\/exitwatchdog\.mjs'/)
  // the timer rides the verdict, never a fork of the arithmetic
  assert.match(fleetSrc, /const v = exitWatchdogVerdict\(\{ nowMs: Date\.now\(\), deadlineMs: deadline \}\)/)
  assert.match(fleetSrc, /if \(!v\.exit\) return/)
  // the canonical line - the отказ form riding the fleet's own console
  assert.match(fleetSrc, /exit watchdog: the margin spent \(\$\{Math\.round\(v\.overdueMs \/ 1000\)\}s past the deadline\+\$\{Math\.round\(EXIT_WATCHDOG_GRACE_MS \/ 1000\)\}s grace, the runners never drained\) - the hard exit owns the process/)
  // the SAME report the normal end rides, then the distinct exit code
  assert.match(fleetSrc, /printFinalReport\('exit watchdog - the margin spent, the runners never drained'\)/)
  assert.match(fleetSrc, /process\.exit\(12\)/)
  // the natural end kills the timer mid-flight - the race the design prices
  assert.match(fleetSrc, /clearTimeout\(exitWatchdogTimer\)/)
  // the exit codes stay tellable: 12 the watchdog's own, 13 the heap cliff, 14 the login lane, 0 the natural end
  assert.doesNotMatch(fleetSrc, /process\.exit\(12\)[\s\S]*process\.exit\(12\)/) // one wire, never a second
})

test('the message grammar: the line claims no other lane\'s verdict words', () => {
  const line = 'exit watchdog: the margin spent (1080s past the deadline+420s grace, the runners never drained) - the hard exit owns the process'
  // the heap cliff's own cell never joins (the lanes never merge)
  assert.doesNotMatch(line, /CLIFF REACHED/)
  assert.doesNotMatch(line, /heap watchdog/)
  // the login lane's own exit (14) never rides the watchdog's line
  assert.doesNotMatch(line, /exit 14|code 14/)
})
