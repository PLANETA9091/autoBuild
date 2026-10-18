// (v0.976.254) THE WALK GOVERNOR'S OWN STALL MASS - the word's own pins.
// The real lines ride byte-exact (the field's own faces: F467 run
// 39131684179, F474 run 39160949802, F475 the fire-0530 read's own face).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { walkGovernorStallCensus, walkGovernorStallConsistent, walkGovernorStallTrendRow } from '../../src/lib/walkgovernorstalltrend.mjs'

// the REAL face lines (the cached faces' own bytes)
const F467 = 'walk governor: 4 stall(s) opened, 136 churn re-issues refused (v0.74.0 churn breaker - goals queued+done with zero progress during the run68-class storms)'
const F474 = 'walk governor: 10 stall(s) opened, 94 churn re-issues refused (v0.74.0 churn breaker - goals queued+done with zero progress during the run68-class storms)'
const F475 = 'walk governor: 17 stall(s) opened, 238 churn re-issues refused (v0.74.0 churn breaker - goals queued+done with zero progress during the run68-class storms)'

test('the real face lines ride byte-exact', () => {
  assert.deepEqual(walkGovernorStallCensus([F467]), { opens: 4, refusals: 136 })
  assert.deepEqual(walkGovernorStallCensus([F474]), { opens: 10, refusals: 94 })
  assert.deepEqual(walkGovernorStallCensus([F475]), { opens: 17, refusals: 238 })
  // the zero face (the governor never fired)
  assert.deepEqual(walkGovernorStallCensus(['walk governor: 0 stall(s) opened, 0 churn re-issues refused (v0.74.0 churn breaker - goals queued+done with zero progress during the run68-class storms)']), { opens: 0, refusals: 0 })
})

test('LAST-PRINT-WINS - the last print the freshest state the face held', () => {
  assert.deepEqual(walkGovernorStallCensus([F474, F475]), { opens: 17, refusals: 238 })
  assert.deepEqual(walkGovernorStallCensus([F475, F474]), { opens: 10, refusals: 94 })
})

test('the lawful zero - the never-fired face keeps the healthy-looking zeros', () => {
  assert.deepEqual(walkGovernorStallCensus(['bots=19 spawned=19', 'worldmap: 5 positions, 2 chunks scanned, top: sand=7']), { opens: 0, refusals: 0 })
  assert.deepEqual(walkGovernorStallCensus([]), { opens: 0, refusals: 0 })
})

test('the near-miss lanes never ride - the neighbours own their lanes', () => {
  // the fleet churn ceiling's own line (the sibling report frame)
  assert.deepEqual(walkGovernorStallCensus(['fleet churn ceiling: 0 open(s), 0 aggregate re-issues refused (v0.77.0 - the per-bot limit leaves the fleet-wide burst unbounded)']), { opens: 0, refusals: 0 })
  // the bot-tagged churn prose the runtime prints live
  assert.deepEqual(walkGovernorStallCensus(['F6 [F6] walk governor: bot churned 4 goals without progress - food commons']), { opens: 0, refusals: 0 })
  // the sweep's machine-unreachable governor-refusal skin (the .128 word's cell)
  assert.deepEqual(walkGovernorStallCensus(['F6 sweep: 0 collected - machine unreachable (walk governor: bot churned 3 goals without progress) x1']), { opens: 0, refusals: 0 })
  // the bot-tagged prefix on the report frame itself
  assert.deepEqual(walkGovernorStallCensus(['F6 [F6] walk governor: 4 stall(s) opened, 136 churn re-issues refused (v0.74.0 churn breaker - goals queued+done with zero progress during the run68-class storms)']), { opens: 0, refusals: 0 })
  // the altered prose tail
  assert.deepEqual(walkGovernorStallCensus(['walk governor: 4 stall(s) opened, 136 churn re-issues refused (v0.74.0 churn breaker - goals queued+done with zero progress during the run68-class storm)']), { opens: 0, refusals: 0 })
  // the missing prose tail
  assert.deepEqual(walkGovernorStallCensus(['walk governor: 4 stall(s) opened, 136 churn re-issues refused']), { opens: 0, refusals: 0 })
  // the missing comma frame
  assert.deepEqual(walkGovernorStallCensus(['walk governor: 4 stall(s) opened 136 churn re-issues refused (v0.74.0 churn breaker - goals queued+done with zero progress during the run68-class storms)']), { opens: 0, refusals: 0 })
  // the leading zero (the .248 house law)
  assert.deepEqual(walkGovernorStallCensus(['walk governor: 04 stall(s) opened, 136 churn re-issues refused (v0.74.0 churn breaker - goals queued+done with zero progress during the run68-class storms)']), { opens: 0, refusals: 0 })
  // the negative count
  assert.deepEqual(walkGovernorStallCensus(['walk governor: -4 stall(s) opened, 136 churn re-issues refused (v0.74.0 churn breaker - goals queued+done with zero progress during the run68-class storms)']), { opens: 0, refusals: 0 })
  // the altered cell prose
  assert.deepEqual(walkGovernorStallCensus(['walk governor: 4 stalls opened, 136 churn re-issues refused (v0.74.0 churn breaker - goals queued+done with zero progress during the run68-class storms)']), { opens: 0, refusals: 0 })
  // the wrong frame entirely
  assert.deepEqual(walkGovernorStallCensus(['worldmap: 5 positions, 2 chunks scanned, top: sand=7']), { opens: 0, refusals: 0 })
  // the junk inputs
  assert.deepEqual(walkGovernorStallCensus([null, undefined, 42, {}]), { opens: 0, refusals: 0 })
})

test('the census guard - the input itself not an array reads null', () => {
  assert.equal(walkGovernorStallCensus(null), null)
  assert.equal(walkGovernorStallCensus(undefined), null)
  assert.equal(walkGovernorStallCensus(F467), null)
  assert.equal(walkGovernorStallCensus(42), null)
})

test('the fence - every branch', () => {
  const ok = { back: { opens: 1, refusals: 1 }, prev: { opens: 2, refusals: 2 }, cur: { opens: 3, refusals: 3 } }
  assert.equal(walkGovernorStallConsistent(ok), true)
  // the zero lawful - the never-fired face
  assert.equal(walkGovernorStallConsistent({ back: { opens: 0, refusals: 0 }, prev: { opens: 0, refusals: 0 }, cur: { opens: 0, refusals: 0 } }), true)
  // extra keys never rejected
  assert.equal(walkGovernorStallConsistent({ ...ok, extra: 'rides' }), true)
  // the missing face
  assert.equal(walkGovernorStallConsistent({ back: { opens: 1, refusals: 1 }, prev: { opens: 2, refusals: 2 } }), false)
  // the negative cell
  assert.equal(walkGovernorStallConsistent({ ...ok, cur: { opens: -1, refusals: 3 } }), false)
  // the non-integer cell
  assert.equal(walkGovernorStallConsistent({ ...ok, cur: { opens: 1.5, refusals: 3 } }), false)
  // the junk folds
  assert.equal(walkGovernorStallConsistent(null), false)
  assert.equal(walkGovernorStallConsistent(undefined), false)
  assert.equal(walkGovernorStallConsistent([ok]), false)
  assert.equal(walkGovernorStallConsistent('fold'), false)
})

test('the row shapes - swell/fade/swing byte-exact', () => {
  const swell = walkGovernorStallTrendRow({ back: { opens: 4, refusals: 136 }, prev: { opens: 10, refusals: 94 }, cur: { opens: 17, refusals: 238 } })
  assert.equal(swell, "the walk governor stall trend (v0.976.254): the stall weather's own swell ran two steps deep - 4 -> 10 (+6) -> 17 (+7) - the opens mass's own swell, the refusals rode 136 -> 94 -> 238 (the fleet churn ceiling's own line keeps its own lane, the bot-tagged churn prose keeps its lane, the sweep's machine-unreachable governor-refusal skin keeps the .128 word's cell, the walk-lane's own governor-refusal trend keeps the .140 word's seat - the walk governor's stall row alone, co-existence by seat never by duplication)")
  const fade = walkGovernorStallTrendRow({ back: { opens: 17, refusals: 238 }, prev: { opens: 10, refusals: 94 }, cur: { opens: 4, refusals: 136 } })
  assert.equal(fade, "the walk governor stall trend (v0.976.254): the stall weather's own fade ran two steps deep - 17 -> 10 (-7) -> 4 (-6) - the opens mass's own fade, the refusals rode 238 -> 94 -> 136 (the fleet churn ceiling's own line keeps its own lane, the bot-tagged churn prose keeps its lane, the sweep's machine-unreachable governor-refusal skin keeps the .128 word's cell, the walk-lane's own governor-refusal trend keeps the .140 word's seat - the walk governor's stall row alone, co-existence by seat never by duplication)")
  const swing = walkGovernorStallTrendRow({ back: { opens: 4, refusals: 136 }, prev: { opens: 17, refusals: 94 }, cur: { opens: 10, refusals: 238 } })
  assert.equal(swing, "the walk governor stall trend (v0.976.254): the opens mass's own swing - 4 -> 17 (+13) -> 10 (-7) - the fade and the swell traded seats between the faces, the refusals rode 136 -> 94 -> 238 (the fleet churn ceiling's own line keeps its own lane, the bot-tagged churn prose keeps its lane, the sweep's machine-unreachable governor-refusal skin keeps the .128 word's cell, the walk-lane's own governor-refusal trend keeps the .140 word's seat - the walk governor's stall row alone, co-existence by seat never by duplication)")
})

test('the honest nulls - the held step and the three-face zero', () => {
  // a held step prices no direction
  assert.equal(walkGovernorStallTrendRow({ back: { opens: 4, refusals: 1 }, prev: { opens: 4, refusals: 2 }, cur: { opens: 17, refusals: 3 } }), null)
  assert.equal(walkGovernorStallTrendRow({ back: { opens: 4, refusals: 1 }, prev: { opens: 17, refusals: 2 }, cur: { opens: 17, refusals: 3 } }), null)
  // the three-face zero - the governor never fired the whole arc
  assert.equal(walkGovernorStallTrendRow({ back: { opens: 0, refusals: 0 }, prev: { opens: 0, refusals: 0 }, cur: { opens: 0, refusals: 0 } }), null)
  // the fence keeps the lie out
  assert.equal(walkGovernorStallTrendRow({ back: { opens: 1, refusals: 1 } }), null)
  assert.equal(walkGovernorStallTrendRow(null), null)
})

test('THE FIELD WINDOW - W474 the real arc 467->474->475 prices the swell', () => {
  const row = walkGovernorStallTrendRow({
    back: walkGovernorStallCensus([F467]),
    prev: walkGovernorStallCensus([F474]),
    cur: walkGovernorStallCensus([F475])
  })
  assert.equal(row, "the walk governor stall trend (v0.976.254): the stall weather's own swell ran two steps deep - 4 -> 10 (+6) -> 17 (+7) - the opens mass's own swell, the refusals rode 136 -> 94 -> 238 (the fleet churn ceiling's own line keeps its own lane, the bot-tagged churn prose keeps its lane, the sweep's machine-unreachable governor-refusal skin keeps the .128 word's cell, the walk-lane's own governor-refusal trend keeps the .140 word's seat - the walk governor's stall row alone, co-existence by seat never by duplication)")
})

test('the emitter grammar - the fleet19 template must stand', () => {
  // the emitter's own template: `walk governor: ${wgs.opens} stall(s) opened, ${wgs.refusals} churn re-issues refused (v0.74.0 churn breaker - goals queued+done with zero progress during the run68-class storms)`
  const templateLine = (o, r) => `walk governor: ${o} stall(s) opened, ${r} churn re-issues refused (v0.74.0 churn breaker - goals queued+done with zero progress during the run68-class storms)`
  for (const line of [templateLine(0, 0), templateLine(4, 136), templateLine(10, 94), templateLine(17, 238)]) {
    assert.equal(walkGovernorStallCensus([line]) !== null, true, `template line must ride: ${line}`)
  }
})
