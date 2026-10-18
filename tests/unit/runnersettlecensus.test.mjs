// (v0.976.246) THE RUNNER SETTLE TELEMETRY'S OWN PARKED MASS - the word's
// own pins. THE SEAT THIS TIME IS THE FLEET'S OWN WIRING: the never-drain
// class's named OPEN FRONT (the per-runner settle telemetry the runtime
// front names - the fleet-wiring word, the bigger seat) - the commit both
// wires the emitter (testbed/fleet19.mjs's settle telemetry, one call
// site, the drain's own per-runner read past the deadline) and takes the
// pricing seat. The F469 face's watchdog verdict held the parked anatomy
// only as a fleet sum - THIS emitter names the parked runners.
// The pins: the census parse byte-exact (the emitter's own line whole,
// the last-print-wins law, the forged-fraction refusal, the near-miss
// lanes' refusal, the junk laws), the fence (every honest branch, the
// junk laws), the row (the heal / the swell / the swing byte-exact, the
// held step's honest null, the three-face zero's lawful null, the junk
// fold's null) and the emitter grammar (the fleet19 template the word
// parses is the line the fleet prints - the deliberate-miss law: a
// near-miss census voice never rides).
import { test } from 'node:test'
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { runnerSettleCensus, runnerSettleCensusConsistent, runnerSettleCensusRow } from '../../src/lib/runnersettlecensus.mjs'

const TAIL = "(the exit watchdog's own verdict the runtime's own backstop holds, the boards' live cells the .241 seat prices, the doom residue's live cell the .242 seat prices, the body's alive cell the .243 seat prices, the death-spot memorize's mass the .244 seat prices, the climb run-up's mass the .245 seat prices - the never-drain front's own per-runner witness row alone, co-existence by seat never by duplication)"

test('the census: the emitter line rides whole (byte-exact shape)', () => {
  const c = runnerSettleCensus([
    'F7 [F7] no-path ledger: chest at [-129,81,418] cached for the fleet (8 live, ttl 15s, timeout verdict)',
    '[fleet] runner settle: 18/19 settled, 1 parked (F7 390s) - the drain\'s own per-runner read',
    'exit watchdog: the margin spent (420s past the deadline+420s grace, the runners never drained) - the hard exit owns the process'
  ])
  assert.deepEqual(c, { settled: 18, total: 19, parked: 1, detail: 'F7 390s' })
})

test('the census: the multi-runner detail rides whole (the comma list)', () => {
  const c = runnerSettleCensus([
    '[fleet] runner settle: 14/19 settled, 5 parked (F5 41s, F12 12s, scout 8s) - the drain\'s own per-runner read'
  ])
  assert.deepEqual(c, { settled: 14, total: 19, parked: 5, detail: 'F5 41s, F12 12s, scout 8s' })
})

test('the census: the last print owns the snapshot (the last-print-wins law)', () => {
  const c = runnerSettleCensus([
    '[fleet] runner settle: 1/19 settled, 18 parked (F1 30s, F2 30s) - the drain\'s own per-runner read',
    '[fleet] runner settle: 12/19 settled, 7 parked (F5 90s, F9 90s) - the drain\'s own per-runner read',
    '[fleet] runner settle: 18/19 settled, 1 parked (F7 150s) - the drain\'s own per-runner read'
  ])
  assert.deepEqual(c, { settled: 18, total: 19, parked: 1, detail: 'F7 150s' })
})

test('the census: near-misses and junk never ride', () => {
  // the zero-parked skin the emitter never prints (the clean read keeps
  // its silence) - a forged zero-parked line never rides
  assert.deepEqual(runnerSettleCensus(['[fleet] runner settle: 19/19 settled, 0 parked () - the drain\'s own per-runner read']), { settled: 0, total: 0, parked: 0, detail: '' })
  // the forged fraction the emitter's own arithmetic refuses (the settled
  // plus the parked must sum to the total)
  assert.deepEqual(runnerSettleCensus(['[fleet] runner settle: 5/19 settled, 9 parked (F5 41s) - the drain\'s own per-runner read']), { settled: 0, total: 0, parked: 0, detail: '' })
  // the '[fleet] partial:' kill row - a different lane
  assert.deepEqual(runnerSettleCensus(['[fleet] partial: alive=12 settled=0']), { settled: 0, total: 0, parked: 0, detail: '' })
  // the exit watchdog's own verdict line - a different lane
  assert.deepEqual(runnerSettleCensus(['exit watchdog: the margin spent (420s past the deadline+420s grace, the runners never drained) - the hard exit owns the process']), { settled: 0, total: 0, parked: 0, detail: '' })
  // the boards' ledger lines - the .241 seat's own lanes
  assert.deepEqual(runnerSettleCensus(['no-path ledger: 3 live verdict(s) at end phase']), { settled: 0, total: 0, parked: 0, detail: '' })
  // the truncated tail never rides (the strict grammar's own fence)
  assert.deepEqual(runnerSettleCensus(['[fleet] runner settle: 18/19 settled, 1 parked (F7 390s)']), { settled: 0, total: 0, parked: 0, detail: '' })
  assert.deepEqual(runnerSettleCensus(['[fleet] runner settle: 18/19 settled, 1 parked (F7 390s) - the drain\'s own read']), { settled: 0, total: 0, parked: 0, detail: '' })
  // the wrong frame never rides
  assert.deepEqual(runnerSettleCensus(['[fleet] runners settle: 18/19 settled, 1 parked (F7 390s) - the drain\'s own per-runner read']), { settled: 0, total: 0, parked: 0, detail: '' })
  // junk-safe: the empty and non-string faces hold the lawful zero, the
  // non-array junk prices null (the family's own law the census rides)
  assert.deepEqual(runnerSettleCensus([]), { settled: 0, total: 0, parked: 0, detail: '' })
  assert.equal(runnerSettleCensus(null), null)
  assert.equal(runnerSettleCensus('[fleet] runner settle: 18/19 settled, 1 parked (F7 390s) - the drain\'s own per-runner read'), null)
  assert.deepEqual(runnerSettleCensus([42, {}]), { settled: 0, total: 0, parked: 0, detail: '' })
})

test('the fence: every honest branch and every junk law rides', () => {
  const face = { settled: 18, total: 19, parked: 1, detail: 'F7 390s' }
  assert.equal(runnerSettleCensusConsistent({ back: face, prev: face, cur: face }), true)
  // zero counts are lawful (the clean-drain face the fence keeps)
  assert.equal(runnerSettleCensusConsistent({ back: { settled: 0, total: 0, parked: 0, detail: '' }, prev: { settled: 0, total: 0, parked: 0, detail: '' }, cur: { settled: 0, total: 0, parked: 0, detail: '' } }), true)
  // extra keys never rejected (the family's own extra-keys law)
  assert.equal(runnerSettleCensusConsistent({ back: { ...face, note: 'x' }, prev: face, cur: face }), true)
  // the junk laws: the null face, the missing face, the non-integer, the negative
  assert.equal(runnerSettleCensusConsistent(null), false)
  assert.equal(runnerSettleCensusConsistent({}), false)
  assert.equal(runnerSettleCensusConsistent({ back: face, prev: face }), false)
  assert.equal(runnerSettleCensusConsistent({ back: face, prev: { settled: 1.5, total: 0, parked: 0, detail: '' }, cur: face }), false)
  assert.equal(runnerSettleCensusConsistent({ back: face, prev: { settled: -1, total: 0, parked: 0, detail: '' }, cur: face }), false)
  assert.equal(runnerSettleCensusConsistent({ back: 'x', prev: face, cur: face }), false)
  assert.equal(runnerSettleCensusConsistent([face, face, face]), false)
})

test('the row: the heal and the swell byte-exact', () => {
  const heal = runnerSettleCensusRow({ back: { settled: 1, total: 19, parked: 18, detail: 'F1 30s' }, prev: { settled: 12, total: 19, parked: 7, detail: 'F5 90s' }, cur: { settled: 18, total: 19, parked: 1, detail: 'F7 150s' } })
  assert.equal(heal, 'the runner settle trend (v0.976.246): the drain\'s own heal ran two steps deep - 18 -> 7 (-11) -> 1 (-6) - the parked mass\'s own fade, the settled read rode 1/19 -> 12/19 -> 18/19, the cur face\'s own parked list: F7 150s ' + TAIL)
  const swell = runnerSettleCensusRow({ back: { settled: 18, total: 19, parked: 1, detail: 'F7 30s' }, prev: { settled: 12, total: 19, parked: 7, detail: 'F5 90s' }, cur: { settled: 1, total: 19, parked: 18, detail: 'F1 150s' } })
  assert.equal(swell, 'the runner settle trend (v0.976.246): the parked mass\'s own swell ran two steps deep - 1 -> 7 (+6) -> 18 (+11) - the never-drain front\'s own grip, the settled read rode 18/19 -> 12/19 -> 1/19, the cur face\'s own parked list: F1 150s ' + TAIL)
})

test('the row: the swing rides, the held step is the honest null', () => {
  const swing = runnerSettleCensusRow({ back: { settled: 18, total: 19, parked: 1, detail: 'F7 30s' }, prev: { settled: 1, total: 19, parked: 18, detail: 'F1 90s' }, cur: { settled: 12, total: 19, parked: 7, detail: 'F5 150s' } })
  assert.equal(swing, 'the runner settle trend (v0.976.246): the parked mass\'s own swing - 1 -> 18 (+17) -> 7 (-11) - the heal and the swell traded seats between the faces, the settled read rode 18/19 -> 1/19 -> 12/19, the cur face\'s own parked list: F5 150s ' + TAIL)
  // a held step prices no direction (the family's own held law)
  assert.equal(runnerSettleCensusRow({ back: { settled: 1, total: 19, parked: 18, detail: 'F1 30s' }, prev: { settled: 12, total: 19, parked: 7, detail: 'F5 90s' }, cur: { settled: 12, total: 19, parked: 7, detail: 'F5 150s' } }), null)
  assert.equal(runnerSettleCensusRow({ back: { settled: 12, total: 19, parked: 7, detail: 'F5 30s' }, prev: { settled: 12, total: 19, parked: 7, detail: 'F5 90s' }, cur: { settled: 18, total: 19, parked: 1, detail: 'F7 150s' } }), null)
  // the three-face zero parked mass prices nothing (the drains ran clean)
  assert.equal(runnerSettleCensusRow({ back: { settled: 0, total: 0, parked: 0, detail: '' }, prev: { settled: 0, total: 0, parked: 0, detail: '' }, cur: { settled: 0, total: 0, parked: 0, detail: '' } }), null)
  // the junk fold prices null (the fence's own law the row inherits)
  assert.equal(runnerSettleCensusRow(null), null)
  assert.equal(runnerSettleCensusRow({}), null)
})

test('the F469-class face the word\'s own read re-speaks (the watchdog anatomy)', () => {
  // the never-drain face's own anatomy the telemetry now names: the drain
  // speaks its 30s cadence, the last print holds the parked runner the
  // F469 verdict rode unnamed (the fleet-sum 'runners never drained' the
  // watchdog printed, the per-runner read the cure names)
  const lines = [
    '[fleet] runner settle: 1/19 settled, 18 parked (F1 30s, F2 30s, F3 30s) - the drain\'s own per-runner read',
    '[fleet] runner settle: 12/19 settled, 7 parked (F5 90s, F9 90s) - the drain\'s own per-runner read',
    '[fleet] runner settle: 18/19 settled, 1 parked (F7 390s) - the drain\'s own per-runner read',
    'exit watchdog: the margin spent (420s past the deadline+420s grace, the runners never drained) - the hard exit owns the process'
  ]
  const c = runnerSettleCensus(lines)
  assert.deepEqual(c, { settled: 18, total: 19, parked: 1, detail: 'F7 390s' })
  // the parked mass held into the next face the honest null prices (the
  // F469 -> the F470-class never-drain repeat the arc prices nothing on)
  const row = runnerSettleCensusRow({ back: { settled: 12, total: 19, parked: 7, detail: 'F5 90s' }, prev: c, cur: c })
  assert.ok(row === null, 'the held step the honest null prices')
})

test('the emitter grammar: the fleet19 template the word parses rides the fleet\'s own print', () => {
  // the word parses the line the fleet prints from THIS commit on (the
  // wiring's own seat) - the emitter's own shape the fleet19 source holds
  // must stay the grammar the census parses (the deliberate-miss law: the
  // parse never forks a second voice)
  const fleetSrc = readFileSync(new URL('../../testbed/fleet19.mjs', import.meta.url), 'utf8')
  assert.ok(fleetSrc.includes('[fleet] runner settle: ${settleWatched.length - parked.length}/${settleWatched.length} settled, ${parked.length} parked (${detail}) - the drain\'s own per-runner read'), 'the fleet19 settle telemetry emitter the word parses must stand')
})
