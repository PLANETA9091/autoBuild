// (v0.976.258) THE STORM DUCK'S OWN ARM MASS - the word's own pins.
// The real lines ride byte-exact (the field's own faces: F474 run
// 39160949802, F475 run 39164157313, F476 run 39166656131, F477 run
// 39170522050 - the drain fence's own first face).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { stormDuckCensus, stormDuckConsistent, stormDuckTrendRow } from '../../src/lib/stormducktrend.mjs'

// the REAL face lines (the cached faces' own bytes - all four faces rode
// the zero, the duck never armed the cached arc)
const F474 = 'storm duck: 0 arm(s), 0 walk(s) refused fleet-wide while ducked (v0.143.0 - run58: the storm\'s next-column class is near BY CONSTRUCTION and rode the closed valve\'s near exemption to the 3000M ceiling; a live storm verdict now shuts EVERY goal for 15s and sweeps the in-flight goals, the A* starves within one think window, the worker\'s grace lands the cure instead of the ceiling landing the kill)'
const F475 = F474
const F476 = F474
const F477 = F474
// a LIVING face line (the duck armed - the shape the emitter prints when
// the storm weather prices the pause; the grammar's own swell face)
const LIVE = 'storm duck: 3 arm(s), 41 walk(s) refused fleet-wide while ducked (v0.143.0 - run58: the storm\'s next-column class is near BY CONSTRUCTION and rode the closed valve\'s near exemption to the 3000M ceiling; a live storm verdict now shuts EVERY goal for 15s and sweeps the in-flight goals, the A* starves within one think window, the worker\'s grace lands the cure instead of the ceiling landing the kill)'

test('the real face lines ride byte-exact', () => {
  assert.deepEqual(stormDuckCensus([F474]), { arms: 0, refusals: 0 })
  assert.deepEqual(stormDuckCensus([F475]), { arms: 0, refusals: 0 })
  assert.deepEqual(stormDuckCensus([F476]), { arms: 0, refusals: 0 })
  assert.deepEqual(stormDuckCensus([F477]), { arms: 0, refusals: 0 })
  // the living face (the duck armed - the cells the arms mass prices)
  assert.deepEqual(stormDuckCensus([LIVE]), { arms: 3, refusals: 41 })
})

test('LAST-PRINT-WINS - the last print the freshest state the face held', () => {
  assert.deepEqual(stormDuckCensus([LIVE, F477]), { arms: 0, refusals: 0 })
  assert.deepEqual(stormDuckCensus([F477, LIVE]), { arms: 3, refusals: 41 })
})

test('the lawful zero - the never-ducked face keeps the healthy-looking zeros', () => {
  assert.deepEqual(stormDuckCensus(['bots=19 spawned=19', 'worldmap: 5 positions, 2 chunks scanned, top: sand=7']), { arms: 0, refusals: 0 })
  assert.deepEqual(stormDuckCensus([]), { arms: 0, refusals: 0 })
})

test('the near-miss lanes never ride - the neighbours own their lanes', () => {
  // the runtime's fleet-wide pause prose (jobqueue's own live mouth)
  assert.deepEqual(stormDuckCensus(['storm duck: fleet-wide pathfinder pause 15s left - mine refused (a live storm verdict shut the near exemption; every walk waits out the wind-down)']), { arms: 0, refusals: 0 })
  // the bot-tagged prefix on the report frame itself
  assert.deepEqual(stormDuckCensus([`F2 [F2] ${LIVE}`]), { arms: 0, refusals: 0 })
  // the pretty spacing (the double space the emitter never prints)
  assert.deepEqual(stormDuckCensus(['storm duck: 0  arm(s), 0 walk(s) refused fleet-wide while ducked (v0.143.0 - run58)']), { arms: 0, refusals: 0 })
  // the missing comma
  assert.deepEqual(stormDuckCensus(['storm duck: 0 arm(s) 0 walk(s) refused fleet-wide while ducked (v0.143.0 - run58)']), { arms: 0, refusals: 0 })
  // the missing prose tail
  assert.deepEqual(stormDuckCensus(['storm duck: 0 arm(s), 0 walk(s) refused fleet-wide while ducked']), { arms: 0, refusals: 0 })
  // the altered prose (the emitter never re-versions the tail)
  assert.deepEqual(stormDuckCensus(['storm duck: 0 arm(s), 0 walk(s) refused fleet-wide while ducked (v0.144.0 - run58)']), { arms: 0, refusals: 0 })
  // the truncated tail (the prose cut mid-way)
  assert.deepEqual(stormDuckCensus(['storm duck: 0 arm(s), 0 walk(s) refused fleet-wide while ducked (v0.143.0 - run58: the storm\'s next-column class']), { arms: 0, refusals: 0 })
  // the leading zero (the .248 house law)
  assert.deepEqual(stormDuckCensus(['storm duck: 03 arm(s), 41 walk(s) refused fleet-wide while ducked (v0.143.0 - run58)']), { arms: 0, refusals: 0 })
  assert.deepEqual(stormDuckCensus(['storm duck: 3 arm(s), 041 walk(s) refused fleet-wide while ducked (v0.143.0 - run58)']), { arms: 0, refusals: 0 })
  // the negative count
  assert.deepEqual(stormDuckCensus(['storm duck: -1 arm(s), 41 walk(s) refused fleet-wide while ducked (v0.143.0 - run58)']), { arms: 0, refusals: 0 })
  // the wrong frame entirely (the neighbours keep their seats)
  assert.deepEqual(stormDuckCensus(['storm-duck: 0 arm(s), 0 walk(s) refused fleet-wide while ducked (v0.143.0 - run58)']), { arms: 0, refusals: 0 })
  assert.deepEqual(stormDuckCensus(['alloc valve: 0 close(s) (0 by the worker probe, 0 by the queue-pressure arm, 0 by the funnel probe, 0 by the slow envelope), 0 strike(s), 0 long walks refused, 0 short walks passed while closed, 0 aquifer-gate refusals (v0.105.0 one valve two feeders + the aquifer gate)']), { arms: 0, refusals: 0 })
  assert.deepEqual(stormDuckCensus(['worldmap: 5 positions, 2 chunks scanned, top: sand=7']), { arms: 0, refusals: 0 })
  // the junk inputs
  assert.deepEqual(stormDuckCensus([null, undefined, 42, {}]), { arms: 0, refusals: 0 })
})

test('the census guard - the input itself not an array reads null', () => {
  assert.equal(stormDuckCensus(null), null)
  assert.equal(stormDuckCensus(undefined), null)
  assert.equal(stormDuckCensus(F477), null)
  assert.equal(stormDuckCensus(42), null)
})

test('the fence - every branch', () => {
  const ok = { back: { arms: 1, refusals: 3 }, prev: { arms: 2, refusals: 9 }, cur: { arms: 3, refusals: 41 } }
  assert.equal(stormDuckConsistent(ok), true)
  // the zero lawful - the never-ducked face
  assert.equal(stormDuckConsistent({ back: { arms: 0, refusals: 0 }, prev: { arms: 0, refusals: 0 }, cur: { arms: 0, refusals: 0 } }), true)
  // extra keys never rejected
  assert.equal(stormDuckConsistent({ ...ok, extra: 'rides' }), true)
  // the missing face
  assert.equal(stormDuckConsistent({ back: { arms: 1, refusals: 3 }, prev: { arms: 2, refusals: 9 } }), false)
  // the negative cell
  assert.equal(stormDuckConsistent({ ...ok, cur: { arms: -1, refusals: 41 } }), false)
  // the non-integer cell
  assert.equal(stormDuckConsistent({ ...ok, cur: { arms: 1.5, refusals: 41 } }), false)
  // the junk folds
  assert.equal(stormDuckConsistent(null), false)
  assert.equal(stormDuckConsistent(undefined), false)
  assert.equal(stormDuckConsistent([ok]), false)
  assert.equal(stormDuckConsistent('fold'), false)
})

test('the row shapes - swell/fade/swing byte-exact', () => {
  const swell = stormDuckTrendRow({ back: { arms: 1, refusals: 2 }, prev: { arms: 3, refusals: 9 }, cur: { arms: 7, refusals: 41 } })
  assert.equal(swell, 'the storm duck trend (v0.976.258): the duck weather\'s own swell ran two steps deep - 1 -> 3 (+2) -> 7 (+4) - the arms mass\'s own swell, the refusals rode 2 -> 9 -> 41 (the walk governor\'s own line keeps its own lane, the goal brake\'s own line keeps its lane, the alloc valve\'s own line keeps the valve\'s seat, the runtime\'s fleet-wide pause prose keeps the live mouth - the storm duck\'s row alone, co-existence by seat never by duplication)')
  const fade = stormDuckTrendRow({ back: { arms: 7, refusals: 41 }, prev: { arms: 3, refusals: 9 }, cur: { arms: 1, refusals: 2 } })
  assert.equal(fade, 'the storm duck trend (v0.976.258): the duck weather\'s own fade ran two steps deep - 7 -> 3 (-4) -> 1 (-2) - the arms mass\'s own fade, the refusals rode 41 -> 9 -> 2 (the walk governor\'s own line keeps its own lane, the goal brake\'s own line keeps its lane, the alloc valve\'s own line keeps the valve\'s seat, the runtime\'s fleet-wide pause prose keeps the live mouth - the storm duck\'s row alone, co-existence by seat never by duplication)')
  const swing = stormDuckTrendRow({ back: { arms: 1, refusals: 2 }, prev: { arms: 7, refusals: 41 }, cur: { arms: 3, refusals: 9 } })
  assert.equal(swing, 'the storm duck trend (v0.976.258): the duck weather\'s own swing - 1 -> 7 (+6) -> 3 (-4) - the fade and the swell traded seats between the faces, the refusals rode 2 -> 41 -> 9 (the walk governor\'s own line keeps its own lane, the goal brake\'s own line keeps its lane, the alloc valve\'s own line keeps the valve\'s seat, the runtime\'s fleet-wide pause prose keeps the live mouth - the storm duck\'s row alone, co-existence by seat never by duplication)')
})

test('the honest nulls - the held step and the three-face zero', () => {
  // a held step prices no direction
  assert.equal(stormDuckTrendRow({ back: { arms: 3, refusals: 2 }, prev: { arms: 3, refusals: 9 }, cur: { arms: 7, refusals: 41 } }), null)
  assert.equal(stormDuckTrendRow({ back: { arms: 3, refusals: 2 }, prev: { arms: 7, refusals: 9 }, cur: { arms: 7, refusals: 41 } }), null)
  // the three-face zero - the duck never armed the whole arc
  assert.equal(stormDuckTrendRow({ back: { arms: 0, refusals: 0 }, prev: { arms: 0, refusals: 0 }, cur: { arms: 0, refusals: 0 } }), null)
  // the fence keeps the lie out
  assert.equal(stormDuckTrendRow({ back: { arms: 1, refusals: 2 } }), null)
  assert.equal(stormDuckTrendRow(null), null)
})

test('THE FIELD WINDOW - W475-476-477 the real arc prices the lawful silence', () => {
  // all four cached faces rode the zero - the duck never armed the
  // cached arc (the .255 churn ceiling's own lawful-zero birth the
  // precedent holds; the word waits loaded - the first face the duck
  // arms prices the word's speaking birth)
  const row = stormDuckTrendRow({
    back: stormDuckCensus([F475]),
    prev: stormDuckCensus([F476]),
    cur: stormDuckCensus([F477])
  })
  assert.equal(row, null)
})

test('the emitter grammar - the fleet19 template must stand', () => {
  // the emitter's own template: `storm duck: ${avs.duckArms} arm(s), ${avs.duckRefusals} walk(s) refused fleet-wide while ducked (v0.143.0 - run58: ...)` - the fixed prose tail byte-exact
  const templateLine = (arms, refusals) => `storm duck: ${arms} arm(s), ${refusals} walk(s) refused fleet-wide while ducked (v0.143.0 - run58: the storm\'s next-column class is near BY CONSTRUCTION and rode the closed valve\'s near exemption to the 3000M ceiling; a live storm verdict now shuts EVERY goal for 15s and sweeps the in-flight goals, the A* starves within one think window, the worker\'s grace lands the cure instead of the ceiling landing the kill)`
  const lines = [
    templateLine(0, 0),
    templateLine(1, 3),
    templateLine(3, 41),
    templateLine(12, 300)
  ]
  for (const line of lines) {
    assert.equal(stormDuckCensus([line]) !== null, true, `template line must ride: ${line}`)
  }
})
