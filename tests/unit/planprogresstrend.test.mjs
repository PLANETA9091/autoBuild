// (v0.976.238) THE PLAN PROGRESS TREND - the materials plan's own completion
// census's battery. THE EVIDENCE (the F466 and the F467 faces, runs
// 39126831061 and 39131684179): the final report printed 'plan progress:
// 1/31 resources complete' and 'plan progress: 2/31 resources complete' and
// no book owned the line - the family reserved the seat by name (the
// deficits row's own lane, the plan top's own lane, the map trip's own lane
// each refuse the line) and the seat stood empty. The pins: the census parse
// byte-exact (the F466 line whole, the F467 line whole, the near-miss lanes'
// refusal), the fence (every honest branch, the junk laws), the row (the
// climb / the retreat / the swing byte-exact, the held step's honest null,
// the junk fold's null), and the emitter grammar (the fleet19 template the
// word parses is the line the fleet prints - the deliberate-miss law: a
// near-miss census voice never rides).
import { test } from 'node:test'
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { planProgressOfCensus, planProgressTrendConsistent, planProgressTrendRow } from '../../src/lib/planprogresstrend.mjs'

test('the census: the F466 line rides whole (byte-exact shape)', () => {
  const lines = [
    'F9 final bank: 0 (nothing to deposit)',
    'plan top: sand 157926/0 (0.0%) gravel 149380/0 (0.0%) ink_sac 31860/0 (0.0%) deepslate 27420/0 (0.0%) andesite 10725/0 (0.0%)',
    'plan progress: 1/31 resources complete',
    'bank arm census: 2 bot(s) never armed a bank pass - their end pockets carried 0u - the arms\' silence is the face\'s own read'
  ]
  const c = planProgressOfCensus(lines)
  assert.deepEqual(c, { done: 1, total: 31 })
})

test('the census: the F467 line rides whole (the plan\'s own +1 the face read)', () => {
  const c = planProgressOfCensus([
    'plan progress: 2/31 resources complete'
  ])
  assert.deepEqual(c, { done: 2, total: 31 })
})

test('the census: the last print wins, junk and near-misses never ride', () => {
  // the last census the face holds is the read (the report block prints
  // once, the parse stays honest whatever the fold's own direction)
  const two = planProgressOfCensus([
    'plan progress: 1/31 resources complete',
    'plan progress: 2/31 resources complete'
  ])
  assert.equal(two.done, 2)
  // the plan top rows are the plantop seat's own lane - never ride here
  assert.equal(planProgressOfCensus(['plan top: sand 157926/0 (0.0%) gravel 149380/0 (0.0%)']), null)
  // the map trip lines are the maptrip lens's own lane - never ride here
  assert.equal(planProgressOfCensus(['F4 map trip: gravel']), null)
  assert.equal(planProgressOfCensus(['F7 map trip skipped: cannot leave the shaft']), null)
  // the deficits rows are the deficitrow seat's own lane - never ride here
  assert.equal(planProgressOfCensus(['   deficits: 157926/0 (0.0%) 149380/0 (0.0%)']), null)
  // the materials plan header prose never rides (the header is not the census)
  assert.equal(planProgressOfCensus(['materials plan: 31 resources the base needs']), null)
  // a done/total with the wrong tail never rides (the strict grammar's own fence)
  assert.equal(planProgressOfCensus(['plan progress: 2/31']), null)
  assert.equal(planProgressOfCensus(['plan progress: 2/31 resources']), null)
  assert.equal(planProgressOfCensus(['plan progress: 2/31 resources complete now']), null)
  // junk-safe: the empty and non-array faces price null (the lawful no-read)
  assert.equal(planProgressOfCensus([]), null)
  assert.equal(planProgressOfCensus(null), null)
  assert.equal(planProgressOfCensus('plan progress: 2/31 resources complete'), null)
  assert.equal(planProgressOfCensus([42, {}]), null)
})

test('the fence: every honest branch and every junk law rides', () => {
  const face = { done: 2, total: 31 }
  assert.equal(planProgressTrendConsistent({ back: face, prev: face, cur: face }), true)
  // zero counts are lawful (the drought run's own zero the fence keeps)
  assert.equal(planProgressTrendConsistent({ back: { done: 0, total: 31 }, prev: { done: 0, total: 31 }, cur: { done: 0, total: 31 } }), true)
  // extra keys never rejected (the family's own extra-keys law)
  assert.equal(planProgressTrendConsistent({ back: { ...face, note: 'x' }, prev: face, cur: face }), true)
  // the junk laws: the null face, the missing face, the non-integer, the negative
  assert.equal(planProgressTrendConsistent(null), false)
  assert.equal(planProgressTrendConsistent({}), false)
  assert.equal(planProgressTrendConsistent({ back: face, prev: face }), false)
  assert.equal(planProgressTrendConsistent({ back: face, prev: { done: 1.5, total: 31 }, cur: face }), false)
  assert.equal(planProgressTrendConsistent({ back: face, prev: { done: -1, total: 31 }, cur: face }), false)
  assert.equal(planProgressTrendConsistent({ back: 'x', prev: face, cur: face }), false)
  assert.equal(planProgressTrendConsistent([face, face, face]), false)
})

test('the row: the climb and the retreat byte-exact', () => {
  const climb = planProgressTrendRow({ back: { done: 0, total: 31 }, prev: { done: 1, total: 31 }, cur: { done: 2, total: 31 } })
  assert.equal(climb, 'the plan progress trend (v0.976.238): the plan\'s own climb ran two steps deep - 0 -> 1 (+1) -> 2 (+1) - the resources\' own completion, the board\'s own scope 31 -> 31 -> 31 (the plan top\'s own seat prices the per-resource board, the maptrip lens prices the trip lane\'s own launches and skips, the deficits row\'s own trend prices the deficit mass, the bankcensus\'s own seat prices the banking side - the completion census alone, co-existence by seat never by duplication)')
  const retreat = planProgressTrendRow({ back: { done: 5, total: 31 }, prev: { done: 3, total: 31 }, cur: { done: 2, total: 31 } })
  assert.equal(retreat, 'the plan progress trend (v0.976.238): the plan\'s own retreat ran two steps deep - 5 -> 3 (-2) -> 2 (-1) - the resources\' own fade, the board\'s own scope 31 -> 31 -> 31 (the plan top\'s own seat prices the per-resource board, the maptrip lens prices the trip lane\'s own launches and skips, the deficits row\'s own trend prices the deficit mass, the bankcensus\'s own seat prices the banking side - the completion census alone, co-existence by seat never by duplication)')
})

test('the row: the swing rides, the held step is the honest null', () => {
  const swing = planProgressTrendRow({ back: { done: 4, total: 31 }, prev: { done: 2, total: 31 }, cur: { done: 3, total: 31 } })
  assert.ok(swing.startsWith('the plan progress trend (v0.976.238): the plan\'s own swing - 4 -> 2 (-2) -> 3 (+1) - the climb and the retreat traded seats between the faces'))
  // a held step prices no direction (the family's own held law)
  assert.equal(planProgressTrendRow({ back: { done: 2, total: 31 }, prev: { done: 2, total: 31 }, cur: { done: 3, total: 31 } }), null)
  assert.equal(planProgressTrendRow({ back: { done: 2, total: 31 }, prev: { done: 3, total: 31 }, cur: { done: 3, total: 31 } }), null)
  // the junk fold prices null (the fence's own law the row inherits)
  assert.equal(planProgressTrendRow(null), null)
  assert.equal(planProgressTrendRow({}), null)
})

test('the emitter grammar: the fleet19 template the word parses rides the fleet\'s own print', () => {
  // the word parses the line the fleet ALREADY prints (the census guard's
  // own law: zero fleet wiring, zero new fleet log lines) - the emitter's
  // own shape the fleet19 source holds must stay the grammar the census
  // parses (the deliberate-miss law: the parse never forks a second voice)
  const fleetSrc = readFileSync(new URL('../../testbed/fleet19.mjs', import.meta.url), 'utf8')
  assert.ok(fleetSrc.includes('plan progress: ${'), 'the fleet19 plan progress emitter the word parses must stand')
  assert.ok(fleetSrc.includes('} resources complete`'), 'the completion tail the strict grammar anchors must stand')
})
