// (v0.976.253) THE DRAIN FENCE - the parked runner's own bound's battery.
// THE EVIDENCE (run 39166656131, the F476 face): alive 19/19, banked 1382,
// mined 2383 (3.97 b/s) - the fleet's own best shape - and the job rode RED:
// F5's runner parked past the deadline forever (the settle telemetry's own
// witness: 18/19 settled, 1 parked (F5 414s) at the last print, the pocket
// frozen at 94u from the 23rd second to the watchdog's own mark), the exit
// watchdog (the .233 backstop) fired and hard-exited 12, the workflow's
// pipefail read the 12 - the fence is the cure the face bought. The pins:
// the pure verdict every branch byte-exact (the mark's own closed edge, the
// disabled margin, the junk clocks), the constants (the fence inside the
// watchdog's grace BY CONSTRUCTION - the cross-module law the pin holds),
// both emitters byte-exact (the console line, the report's reason cell, the
// junk nulls), the census parse (the emitter line whole, the forged meter
// refusal - the list must name exactly the fenced count, the near-miss
// lanes' refusal, the junk laws), the fence (every honest branch), the row
// (the fade / the swell / the swing byte-exact, the held step's honest null,
// the three-face zero's lawful null, the junk fold's null), and BOTH wiring
// laws (the fence's fleet wire - the race, the ref'd timer, the fenced
// branch, the green exit; the watchdog's own pins standing untouched - the
// .233 seat keeps its 12, the fence never rides a second one).
import { test } from 'node:test'
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { drainFenceVerdict, DRAIN_FENCE_MARGIN_MS, drainFenceLine, drainFenceReason, drainFenceCensus, drainFenceConsistent, drainFenceRow } from '../../src/lib/drainfence.mjs'
import { EXIT_WATCHDOG_GRACE_MS } from '../../src/lib/exitwatchdog.mjs'

const fleetSrc = readFileSync(new URL('../../testbed/fleet19.mjs', import.meta.url), 'utf8')

test('the constants: the fence rides inside the watchdog grace by construction', () => {
  assert.equal(DRAIN_FENCE_MARGIN_MS, 360000)
  // the design's own bounds: 90s past the end-phase's worst legitimate
  // 270s end, 60s inside the watchdog's own 420s grace - the fence fires
  // first, the watchdog keeps the true-hang class
  assert.ok(DRAIN_FENCE_MARGIN_MS > 270000, 'the fence must outlive the 270s worst legitimate end')
  assert.ok(DRAIN_FENCE_MARGIN_MS < EXIT_WATCHDOG_GRACE_MS, 'the fence must fire inside the watchdog grace')
  assert.equal(EXIT_WATCHDOG_GRACE_MS - DRAIN_FENCE_MARGIN_MS, 60000, 'the 60s headroom the design prices')
})

test('the pure verdict: the mark spent is the fence fire (the F476 class)', () => {
  // the parked face inside the mark: 300s past the deadline, the 360s mark still rides
  const v = drainFenceVerdict({ nowMs: 600000 + 300000, deadlineMs: 600000 })
  assert.equal(v.fire, false)
  assert.equal(v.remainingMs, 60000) // the mark at 360s - 300s spent = 60s left
})

test('the pure verdict: every honest branch rides', () => {
  // inside the mark - the drain still owns the clock
  const a = drainFenceVerdict({ nowMs: 600000 + 359999, deadlineMs: 600000 })
  assert.equal(a.fire, false)
  assert.equal(a.remainingMs, 1)
  // the boundary is the mark's own closed edge: now == deadline + margin fires
  const b = drainFenceVerdict({ nowMs: 600000 + 360000, deadlineMs: 600000 })
  assert.equal(b.fire, true)
  assert.equal(b.remainingMs, 0)
  // one millisecond past the mark fires
  const c = drainFenceVerdict({ nowMs: 600000 + 360001, deadlineMs: 600000 })
  assert.equal(c.fire, true)
  assert.equal(c.remainingMs, 0)
  // long past the mark fires
  assert.equal(drainFenceVerdict({ nowMs: 600000 + 400000, deadlineMs: 600000 }).fire, true)
  // the disabled margin - the legacy shape
  assert.equal(drainFenceVerdict({ nowMs: 999999999, deadlineMs: 0, marginMs: 0 }).fire, false)
  assert.equal(drainFenceVerdict({ nowMs: 999999999, deadlineMs: 0, marginMs: -1 }).fire, false)
  // junk-safe: the unknown clocks never fire
  assert.equal(drainFenceVerdict({}).fire, false)
  assert.equal(drainFenceVerdict({ nowMs: NaN, deadlineMs: 600000 }).fire, false)
  assert.equal(drainFenceVerdict({ nowMs: 700000, deadlineMs: NaN }).fire, false)
  assert.equal(drainFenceVerdict({ nowMs: 700000, deadlineMs: 600000, marginMs: NaN }).fire, false)
})

test('the line emitter: the fenced runners named byte-exact', () => {
  const line = drainFenceLine({ labels: ['F5'], marginSec: 360 })
  assert.equal(line, '[fleet] drain fence: 1 runner(s) fenced at 360s past the deadline (F5) - the drain bounded, the report and the natural exit own the end')
  const multi = drainFenceLine({ labels: ['F4', 'F5', 'F19'], marginSec: 360 })
  assert.equal(multi, '[fleet] drain fence: 3 runner(s) fenced at 360s past the deadline (F4, F5, F19) - the drain bounded, the report and the natural exit own the end')
  // the default margin rides the constant
  assert.match(drainFenceLine({ labels: ['F5'] }), /at 360s past the deadline/)
  // junk never invents a fence
  assert.equal(drainFenceLine({ labels: [] }), null)
  assert.equal(drainFenceLine({ labels: [''] }), null)
  assert.equal(drainFenceLine({}), null)
  assert.equal(drainFenceLine({ labels: 'F5' }), null)
  assert.equal(drainFenceLine({ labels: ['F5'], marginSec: 0 }), null)
  assert.equal(drainFenceLine({ labels: ['F5'], marginSec: -5 }), null)
  assert.equal(drainFenceLine({ labels: ['F5'], marginSec: NaN }), null)
})

test('the reason emitter: the report cell names the fenced class byte-exact', () => {
  const reason = drainFenceReason({ labels: ['F5'], marginSec: 360 })
  assert.equal(reason, 'deadline end - the drain fenced (F5 parked past the 360s margin)')
  const multi = drainFenceReason({ labels: ['F4', 'F5'], marginSec: 360 })
  assert.equal(multi, 'deadline end - the drain fenced (F4, F5 parked past the 360s margin)')
  // the default margin rides the constant
  assert.match(drainFenceReason({ labels: ['F5'] }), /parked past the 360s margin\)$/)
  // junk never invents a reason
  assert.equal(drainFenceReason({ labels: [] }), null)
  assert.equal(drainFenceReason({}), null)
  assert.equal(drainFenceReason({ labels: ['F5'], marginSec: 0 }), null)
})

test('the census: the emitter line rides whole (byte-exact shape)', () => {
  const c = drainFenceCensus([
    '[fleet] runner settle: 18/19 settled, 1 parked (F5 414s) - the drain\'s own per-runner read',
    'exit watchdog: the margin spent (420s past the deadline+420s grace, the runners never drained) - the hard exit owns the process',
    '[fleet] drain fence: 1 runner(s) fenced at 360s past the deadline (F5) - the drain bounded, the report and the natural exit own the end',
    '================ FLEET RESULT (deadline end - the drain fenced (F5 parked past the 360s margin)) ================'
  ])
  assert.deepEqual(c, { fenced: 1, marginSec: 360, labels: 'F5' })
})

test('the census: the multi-runner list rides whole', () => {
  const c = drainFenceCensus([
    '[fleet] drain fence: 3 runner(s) fenced at 360s past the deadline (F4, F5, F19) - the drain bounded, the report and the natural exit own the end'
  ])
  assert.deepEqual(c, { fenced: 3, marginSec: 360, labels: 'F4, F5, F19' })
})

test('the census: the last print owns the snapshot (the last-print-wins law)', () => {
  const c = drainFenceCensus([
    '[fleet] drain fence: 2 runner(s) fenced at 360s past the deadline (F4, F5) - the drain bounded, the report and the natural exit own the end',
    '[fleet] drain fence: 1 runner(s) fenced at 360s past the deadline (F5) - the drain bounded, the report and the natural exit own the end'
  ])
  assert.deepEqual(c, { fenced: 1, marginSec: 360, labels: 'F5' })
})

test('the census: the forged meter never rides (the list must name the count)', () => {
  // the list names two, the cell says one - the forged meter refuses
  assert.deepEqual(drainFenceCensus([
    '[fleet] drain fence: 1 runner(s) fenced at 360s past the deadline (F4, F5) - the drain bounded, the report and the natural exit own the end'
  ]), { fenced: 0, marginSec: 0, labels: '' })
  // the list names none, the cell says one - refuses
  assert.deepEqual(drainFenceCensus([
    '[fleet] drain fence: 1 runner(s) fenced at 360s past the deadline () - the drain bounded, the report and the natural exit own the end'
  ]), { fenced: 0, marginSec: 0, labels: '' })
  // the zero-fenced skin the emitter never prints - refuses
  assert.deepEqual(drainFenceCensus([
    '[fleet] drain fence: 0 runner(s) fenced at 360s past the deadline () - the drain bounded, the report and the natural exit own the end'
  ]), { fenced: 0, marginSec: 0, labels: '' })
  // the zero margin skin refuses
  assert.deepEqual(drainFenceCensus([
    '[fleet] drain fence: 1 runner(s) fenced at 0s past the deadline (F5) - the drain bounded, the report and the natural exit own the end'
  ]), { fenced: 0, marginSec: 0, labels: '' })
})

test('the census: near-misses and junk never ride', () => {
  // the settle telemetry's own line - the .246 seat's lane
  assert.deepEqual(drainFenceCensus(['[fleet] runner settle: 18/19 settled, 1 parked (F7 390s) - the drain\'s own per-runner read']), { fenced: 0, marginSec: 0, labels: '' })
  // the exit watchdog's own verdict line - the .233 seat's lane
  assert.deepEqual(drainFenceCensus(['exit watchdog: the margin spent (420s past the deadline+420s grace, the runners never drained) - the hard exit owns the process']), { fenced: 0, marginSec: 0, labels: '' })
  // the report's own reason cell - the facefate seat's lane
  assert.deepEqual(drainFenceCensus(['================ FLEET RESULT (deadline end - the drain fenced (F5 parked past the 360s margin)) ================']), { fenced: 0, marginSec: 0, labels: '' })
  // the truncated tail never rides
  assert.deepEqual(drainFenceCensus(['[fleet] drain fence: 1 runner(s) fenced at 360s past the deadline (F5)']), { fenced: 0, marginSec: 0, labels: '' })
  assert.deepEqual(drainFenceCensus(['[fleet] drain fence: 1 runner(s) fenced at 360s past the deadline (F5) - the drain bounded']), { fenced: 0, marginSec: 0, labels: '' })
  // the wrong frame never rides
  assert.deepEqual(drainFenceCensus(['[fleet] drain-fence: 1 runner(s) fenced at 360s past the deadline (F5) - the drain bounded, the report and the natural exit own the end']), { fenced: 0, marginSec: 0, labels: '' })
  assert.deepEqual(drainFenceCensus(['[fleet] drain fence: 1 runners fenced at 360s past the deadline (F5) - the drain bounded, the report and the natural exit own the end']), { fenced: 0, marginSec: 0, labels: '' })
  // the altered tail never rides
  assert.deepEqual(drainFenceCensus(['[fleet] drain fence: 1 runner(s) fenced at 360s past the deadline (F5) - the drain bounded, the watchdog owns the end']), { fenced: 0, marginSec: 0, labels: '' })
  // junk-safe: the empty and non-string faces hold the lawful zero, the
  // non-array junk prices null
  assert.deepEqual(drainFenceCensus([]), { fenced: 0, marginSec: 0, labels: '' })
  assert.equal(drainFenceCensus(null), null)
  assert.equal(drainFenceCensus('[fleet] drain fence: 1 runner(s) fenced at 360s past the deadline (F5) - the drain bounded, the report and the natural exit own the end'), null)
  assert.deepEqual(drainFenceCensus([42, {}]), { fenced: 0, marginSec: 0, labels: '' })
})

test('the fence: every honest branch and every junk law rides', () => {
  const face = { fenced: 1, marginSec: 360, labels: 'F5' }
  assert.equal(drainFenceConsistent({ back: face, prev: face, cur: face }), true)
  // zero counts are lawful (the clean-drain face the fence keeps)
  const zero = { fenced: 0, marginSec: 0, labels: '' }
  assert.equal(drainFenceConsistent({ back: zero, prev: zero, cur: zero }), true)
  // mixed faces ride
  assert.equal(drainFenceConsistent({ back: zero, prev: face, cur: zero }), true)
  // extra keys never rejected
  assert.equal(drainFenceConsistent({ back: { ...face, extra: 1 }, prev: face, cur: face }), true)
  // junk never rides
  assert.equal(drainFenceConsistent(null), false)
  assert.equal(drainFenceConsistent(undefined), false)
  assert.equal(drainFenceConsistent([face, face, face]), false)
  assert.equal(drainFenceConsistent({}), false)
  assert.equal(drainFenceConsistent({ back: face, prev: face }), false)
  assert.equal(drainFenceConsistent({ back: null, prev: face, cur: face }), false)
  // the negative count never rides
  assert.equal(drainFenceConsistent({ back: { fenced: -1, marginSec: 360, labels: 'F5' }, prev: face, cur: face }), false)
  // the non-integer count never rides
  assert.equal(drainFenceConsistent({ back: { fenced: 1.5, marginSec: 360, labels: 'F5' }, prev: face, cur: face }), false)
  // the non-string labels never ride
  assert.equal(drainFenceConsistent({ back: { fenced: 1, marginSec: 360, labels: 42 }, prev: face, cur: face }), false)
})

test('the row: the swell rides byte-exact (the fenced mass grows)', () => {
  const zero = { fenced: 0, marginSec: 0, labels: '' }
  const one = { fenced: 1, marginSec: 360, labels: 'F5' }
  const two = { fenced: 2, marginSec: 360, labels: 'F4, F5' }
  const row = drainFenceRow({ back: zero, prev: one, cur: two })
  assert.ok(row && row.startsWith('the drain fence trend (v0.976.253): the fenced mass\'s own swell ran two steps deep - 0 -> 1 (+1) -> 2 (+1) - the never-drain front\'s own grip on the promise seat, the mark rode 0s -> 360s -> 360s, the cur face\'s own fenced list: F4, F5 '), row)
  assert.match(row, /the exit watchdog's own hard-exit backstop keeps the \.233 seat, the settle telemetry's own per-runner read keeps the \.246 seat, the facefate seat prices the report's own reason cell - the drain fence's own row alone, co-existence by seat never by duplication\)$/)
})

test('the row: the fade rides byte-exact (the fenced mass heals)', () => {
  const zero = { fenced: 0, marginSec: 0, labels: '' }
  const one = { fenced: 1, marginSec: 360, labels: 'F5' }
  const two = { fenced: 2, marginSec: 360, labels: 'F4, F5' }
  // the held second step - the honest null
  assert.equal(drainFenceRow({ back: one, prev: one, cur: zero }), null)
  const row2 = drainFenceRow({ back: two, prev: one, cur: zero })
  assert.ok(row2 && row2.startsWith('the drain fence trend (v0.976.253): the fenced mass\'s own fade ran two steps deep - 2 -> 1 (-1) -> 0 (-1) - the parked class\'s own heal, the mark rode 360s -> 360s -> 0s, the cur face\'s own fenced list: none '), row2)
})

test('the row: the swing rides byte-exact (the trade)', () => {
  const zero = { fenced: 0, marginSec: 0, labels: '' }
  const one = { fenced: 1, marginSec: 360, labels: 'F5' }
  const two = { fenced: 2, marginSec: 360, labels: 'F4, F5' }
  const row = drainFenceRow({ back: one, prev: two, cur: one })
  assert.ok(row && row.startsWith('the drain fence trend (v0.976.253): the fenced mass\'s own swing - 1 -> 2 (+1) -> 1 (-1) - the heal and the swell traded seats between the faces, the mark rode 360s -> 360s -> 360s, the cur face\'s own fenced list: F5 '), row)
})

test('the row: the honest nulls ride', () => {
  const zero = { fenced: 0, marginSec: 0, labels: '' }
  const one = { fenced: 1, marginSec: 360, labels: 'F5' }
  const two = { fenced: 2, marginSec: 360, labels: 'F4, F5' }
  // the three-face zero - the lawful silence (the drains ran clean)
  assert.equal(drainFenceRow({ back: zero, prev: zero, cur: zero }), null)
  // a held step - the honest null
  assert.equal(drainFenceRow({ back: zero, prev: one, cur: one }), null)
  assert.equal(drainFenceRow({ back: one, prev: two, cur: two }), null)
  // the junk fold - the null
  assert.equal(drainFenceRow(null), null)
  assert.equal(drainFenceRow({}), null)
  assert.equal(drainFenceRow({ back: one, prev: one }), null)
})

test('the fleet wiring: the fence races every runner seat, the fenced end rides green', () => {
  // the import sits in the top imports block (the repo's own style law)
  assert.match(fleetSrc, /import \{ drainFenceVerdict, DRAIN_FENCE_MARGIN_MS, drainFenceLine, drainFenceReason \} from '\.\.\/src\/lib\/drainfence\.mjs'/)
  // the timer rides the verdict, never a fork of the arithmetic
  assert.match(fleetSrc, /const v = drainFenceVerdict\(\{ nowMs: Date\.now\(\), deadlineMs: deadline \}\)/)
  assert.match(fleetSrc, /setTimeout\(resolve, v\.fire \? 1000 : Math\.max\(1000, v\.remainingMs\)\)/)
  // the race wraps the watched seats
  assert.match(fleetSrc, /const settleFenced = settleWatched\.map\(\(p\) => Promise\.race\(\[/)
  assert.match(fleetSrc, /await Promise\.all\(settleFenced\)/)
  // the fenced branch: the line, the reason cell, the green exit
  assert.match(fleetSrc, /if \(fencedLabels\.length > 0\) console\.log\(drainFenceLine\(\{ labels: fencedLabels \}\)\)/)
  assert.match(fleetSrc, /drainFenceReason\(\{ labels: fencedLabels \}\)/)
  assert.match(fleetSrc, /: `normal end - deadline \$\{SECONDS\}s reached`\)/)
  // the fenced runners named from the settle book the .246 telemetry keeps
  assert.match(fleetSrc, /if \(!runnerSettleAt\.has\(i\)\) fencedLabels\.push\(settleLabels\[i\]\)/)
})

test('the watchdog keeps its seat: the .233 pins stand untouched beside the fence', () => {
  // the watchdog's own wiring the exitwatchdog battery pins - the fence
  // never displaces it
  assert.match(fleetSrc, /const v = exitWatchdogVerdict\(\{ nowMs: Date\.now\(\), deadlineMs: deadline \}\)/)
  assert.match(fleetSrc, /process\.exit\(12\)/)
  assert.match(fleetSrc, /clearTimeout\(exitWatchdogTimer\)/)
  // one exit-12 wire only (the fence rides 0, never a second 12)
  assert.doesNotMatch(fleetSrc, /process\.exit\(12\)[\s\S]*process\.exit\(12\)/)
  // the watchdog's canonical line stands byte-exact
  assert.match(fleetSrc, /exit watchdog: the margin spent \(\$\{Math\.round\(v\.overdueMs \/ 1000\)\}s past the deadline\+\$\{Math\.round\(EXIT_WATCHDOG_GRACE_MS \/ 1000\)\}s grace, the runners never drained\) - the hard exit owns the process/)
})

test('the message grammar: the fence line claims no other lane\'s verdict words', () => {
  const line = '[fleet] drain fence: 1 runner(s) fenced at 360s past the deadline (F5) - the drain bounded, the report and the natural exit own the end'
  // the watchdog's own verdict words never join (the lanes never merge)
  assert.doesNotMatch(line, /the margin spent/)
  assert.doesNotMatch(line, /the runners never drained/)
  assert.doesNotMatch(line, /the hard exit owns the process/)
  // the settle telemetry's own tail never joins
  assert.doesNotMatch(line, /the drain's own per-runner read/)
  // the heap cliff's own words never join
  assert.doesNotMatch(line, /CLIFF REACHED/)
  assert.doesNotMatch(line, /heap watchdog/)
  const reason = 'deadline end - the drain fenced (F5 parked past the 360s margin)'
  // the reason cell claims no other end's words
  assert.doesNotMatch(reason, /normal end/)
  assert.doesNotMatch(reason, /exit watchdog/)
  assert.doesNotMatch(reason, /hard kill/)
  assert.doesNotMatch(reason, /heap/)
  assert.doesNotMatch(reason, /server death/)
})
