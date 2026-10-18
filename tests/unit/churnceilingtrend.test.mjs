// (v0.976.255) THE FLEET CHURN CEILING'S OWN BURST MASS - the word's own
// pins. The real lines ride byte-exact (the field's own faces: F467 run
// 39131684179, F474 run 39160949802, F475 the fire-0530 read's own face
// - every cached face rode the zero, the ceiling stayed closed).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { churnCeilingCensus, churnCeilingConsistent, churnCeilingTrendRow } from '../../src/lib/churnceilingtrend.mjs'

// the REAL face lines (the cached faces' own bytes)
const F467 = 'fleet churn ceiling: 0 open(s), 0 aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounded)'
const F474 = 'fleet churn ceiling: 0 open(s), 0 aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounded)'
const F475 = 'fleet churn ceiling: 0 open(s), 0 aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounded)'

test('the real face lines ride byte-exact', () => {
  assert.deepEqual(churnCeilingCensus([F467]), { opens: 0, refusals: 0 })
  assert.deepEqual(churnCeilingCensus([F474]), { opens: 0, refusals: 0 })
  assert.deepEqual(churnCeilingCensus([F475]), { opens: 0, refusals: 0 })
  // the fired face (the ceiling opened - the emitter's own template holds)
  assert.deepEqual(churnCeilingCensus(['fleet churn ceiling: 3 open(s), 41 aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounded)']), { opens: 3, refusals: 41 })
})

test('LAST-PRINT-WINS - the last print the freshest state the face held', () => {
  assert.deepEqual(churnCeilingCensus([F467, 'fleet churn ceiling: 2 open(s), 17 aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounded)']), { opens: 2, refusals: 17 })
  assert.deepEqual(churnCeilingCensus(['fleet churn ceiling: 2 open(s), 17 aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounded)', F474]), { opens: 0, refusals: 0 })
})

test('the lawful zero - the never-fired face keeps the healthy-looking zeros', () => {
  assert.deepEqual(churnCeilingCensus(['bots=19 spawned=19', 'worldmap: 5 positions, 2 chunks scanned, top: sand=7']), { opens: 0, refusals: 0 })
  assert.deepEqual(churnCeilingCensus([]), { opens: 0, refusals: 0 })
})

test('the near-miss lanes never ride - the neighbours own their lanes', () => {
  // the runtime's zero-progress refusal prose (jobqueue's own live mouth)
  assert.deepEqual(churnCeilingCensus(['fleet churn ceiling: 4 zero-progress walks fleet-wide - mine near bank refused for 30s']), { opens: 0, refusals: 0 })
  // the walk governor's own line (the .254 word's sibling frame)
  assert.deepEqual(churnCeilingCensus(['walk governor: 17 stall(s) opened, 238 churn re-issues refused (v0.74.0 churn breaker - goals queued+done with zero progress during the run68-class storms)']), { opens: 0, refusals: 0 })
  // the goal brake's own line (the fleet cells the sibling line carries)
  assert.deepEqual(churnCeilingCensus(['goal brake: 1 burst open(s), 2 re-issues refused, 3 fleet-ceiling open(s), 4 fleet refusals (v0.143.0 - the re-issue CADENCE is the storm\'s rate knob)']), { opens: 0, refusals: 0 })
  // the bot-tagged prefix on the report frame itself
  assert.deepEqual(churnCeilingCensus(['F6 [F6] fleet churn ceiling: 0 open(s), 0 aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounded)']), { opens: 0, refusals: 0 })
  // the altered prose tail
  assert.deepEqual(churnCeilingCensus(['fleet churn ceiling: 0 open(s), 0 aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbound)']), { opens: 0, refusals: 0 })
  // the missing prose tail
  assert.deepEqual(churnCeilingCensus(['fleet churn ceiling: 0 open(s), 0 aggregate re-issues refused']), { opens: 0, refusals: 0 })
  // the missing comma frame
  assert.deepEqual(churnCeilingCensus(['fleet churn ceiling: 0 open(s) 0 aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounded)']), { opens: 0, refusals: 0 })
  // the leading zero (the .248 house law)
  assert.deepEqual(churnCeilingCensus(['fleet churn ceiling: 03 open(s), 41 aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounded)']), { opens: 0, refusals: 0 })
  // the negative count
  assert.deepEqual(churnCeilingCensus(['fleet churn ceiling: -3 open(s), 41 aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounded)']), { opens: 0, refusals: 0 })
  // the altered cell prose
  assert.deepEqual(churnCeilingCensus(['fleet churn ceiling: 3 opens, 41 aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounded)']), { opens: 0, refusals: 0 })
  // the truncated tail
  assert.deepEqual(churnCeilingCensus(['fleet churn ceiling: 3 open(s), 41 aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounde']), { opens: 0, refusals: 0 })
  // the wrong frame entirely
  assert.deepEqual(churnCeilingCensus(['worldmap: 5 positions, 2 chunks scanned, top: sand=7']), { opens: 0, refusals: 0 })
  // the junk inputs
  assert.deepEqual(churnCeilingCensus([null, undefined, 42, {}]), { opens: 0, refusals: 0 })
})

test('the census guard - the input itself not an array reads null', () => {
  assert.equal(churnCeilingCensus(null), null)
  assert.equal(churnCeilingCensus(undefined), null)
  assert.equal(churnCeilingCensus(F467), null)
  assert.equal(churnCeilingCensus(42), null)
})

test('the fence - every branch', () => {
  const ok = { back: { opens: 1, refusals: 1 }, prev: { opens: 2, refusals: 2 }, cur: { opens: 3, refusals: 3 } }
  assert.equal(churnCeilingConsistent(ok), true)
  // the zero lawful - the never-fired face
  assert.equal(churnCeilingConsistent({ back: { opens: 0, refusals: 0 }, prev: { opens: 0, refusals: 0 }, cur: { opens: 0, refusals: 0 } }), true)
  // extra keys never rejected
  assert.equal(churnCeilingConsistent({ ...ok, extra: 'rides' }), true)
  // the missing face
  assert.equal(churnCeilingConsistent({ back: { opens: 1, refusals: 1 }, prev: { opens: 2, refusals: 2 } }), false)
  // the negative cell
  assert.equal(churnCeilingConsistent({ ...ok, cur: { opens: -1, refusals: 3 } }), false)
  // the non-integer cell
  assert.equal(churnCeilingConsistent({ ...ok, cur: { opens: 1.5, refusals: 3 } }), false)
  // the junk folds
  assert.equal(churnCeilingConsistent(null), false)
  assert.equal(churnCeilingConsistent(undefined), false)
  assert.equal(churnCeilingConsistent([ok]), false)
  assert.equal(churnCeilingConsistent('fold'), false)
})

test('the row shapes - swell/fade/swing byte-exact', () => {
  const swell = churnCeilingTrendRow({ back: { opens: 1, refusals: 9 }, prev: { opens: 3, refusals: 17 }, cur: { opens: 7, refusals: 41 } })
  assert.equal(swell, "the fleet churn ceiling trend (v0.976.255): the burst weather's own swell ran two steps deep - 1 -> 3 (+2) -> 7 (+4) - the opens mass's own swell, the refusals rode 9 -> 17 -> 41 (the walk governor's own line keeps its own lane, the goal brake's own line keeps its lane, the runtime's zero-progress refusal prose keeps the live lane - the fleet churn ceiling's row alone, co-existence by seat never by duplication)")
  const fade = churnCeilingTrendRow({ back: { opens: 7, refusals: 41 }, prev: { opens: 3, refusals: 17 }, cur: { opens: 1, refusals: 9 } })
  assert.equal(fade, "the fleet churn ceiling trend (v0.976.255): the burst weather's own fade ran two steps deep - 7 -> 3 (-4) -> 1 (-2) - the opens mass's own fade, the refusals rode 41 -> 17 -> 9 (the walk governor's own line keeps its own lane, the goal brake's own line keeps its lane, the runtime's zero-progress refusal prose keeps the live lane - the fleet churn ceiling's row alone, co-existence by seat never by duplication)")
  const swing = churnCeilingTrendRow({ back: { opens: 1, refusals: 9 }, prev: { opens: 7, refusals: 17 }, cur: { opens: 3, refusals: 41 } })
  assert.equal(swing, "the fleet churn ceiling trend (v0.976.255): the opens mass's own swing - 1 -> 7 (+6) -> 3 (-4) - the fade and the swell traded seats between the faces, the refusals rode 9 -> 17 -> 41 (the walk governor's own line keeps its own lane, the goal brake's own line keeps its lane, the runtime's zero-progress refusal prose keeps the live lane - the fleet churn ceiling's row alone, co-existence by seat never by duplication)")
})

test('the honest nulls - the held step and the three-face zero', () => {
  // a held step prices no direction
  assert.equal(churnCeilingTrendRow({ back: { opens: 3, refusals: 1 }, prev: { opens: 3, refusals: 2 }, cur: { opens: 7, refusals: 3 } }), null)
  assert.equal(churnCeilingTrendRow({ back: { opens: 3, refusals: 1 }, prev: { opens: 7, refusals: 2 }, cur: { opens: 7, refusals: 3 } }), null)
  // the three-face zero - the ceiling never fired the whole arc (the
  // cached corpus's own truth)
  assert.equal(churnCeilingTrendRow({ back: { opens: 0, refusals: 0 }, prev: { opens: 0, refusals: 0 }, cur: { opens: 0, refusals: 0 } }), null)
  // the fence keeps the lie out
  assert.equal(churnCeilingTrendRow({ back: { opens: 1, refusals: 1 } }), null)
  assert.equal(churnCeilingTrendRow(null), null)
})

test('THE FIELD WINDOW - W467-474-475 the real arc prices the lawful silence', () => {
  // every cached face rode the zero - the ceiling stayed closed the
  // whole arc (the per-bot governor held the lane alone); the census
  // holds the zeros, the row prices nothing - the honest read
  const census = { back: churnCeilingCensus([F467]), prev: churnCeilingCensus([F474]), cur: churnCeilingCensus([F475]) }
  assert.deepEqual(census, { back: { opens: 0, refusals: 0 }, prev: { opens: 0, refusals: 0 }, cur: { opens: 0, refusals: 0 } })
  assert.equal(churnCeilingTrendRow(census), null)
})

test('the emitter grammar - the fleet19 template must stand', () => {
  // the emitter's own template: `fleet churn ceiling: ${wgs.fleetOpens} open(s), ${wgs.fleetRefusals} aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounded)`
  const templateLine = (o, r) => `fleet churn ceiling: ${o} open(s), ${r} aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounded)`
  for (const line of [templateLine(0, 0), templateLine(1, 9), templateLine(3, 17), templateLine(7, 41)]) {
    assert.equal(churnCeilingCensus([line]) !== null, true, `template line must ride: ${line}`)
  }
})
