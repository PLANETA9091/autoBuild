// (v0.976.257) THE SIDE-STEP'S OWN VERDICT MASS - the word's own pins.
// The real lines ride byte-exact (the field's own faces: F467 run
// 39131684179, F474 run 39160949802, F475 run 39164157313, F478 run
// 39174346168 the fire-0630 dispatch's own face - the moved=20 swell
// the fleet's own burst priced).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sidestepVerdictCensus, sidestepVerdictConsistent, sidestepVerdictTrendRow } from '../../src/lib/sidestepverdict.mjs'

// the REAL face lines (the cached faces' own bytes)
const F467 = [
  'F5 fuel commons: path nudge approach: the stall side-step (right) moved the start (d now 6.6)',
  'F19 fuel commons: path nudge approach: the stall side-step (right) stalled too',
  'F3 fuel commons: path nudge approach: the stall side-step (right) stalled too'
]
const F474 = [
  'F18 yard approach: approach: the stall side-step (right) moved the start (d now 34.6)',
  'F18 yard approach: approach: the stall side-step (left) moved the start (d now 35.9)',
  'F18 [F18] approach: the stall side-step (right) moved the start (d now 29.9)'
]
const F475 = [
  'F7 fuel commons: path nudge approach: the stall side-step (right) stalled too',
  'F19 [F19] approach: the stall side-step (right) moved the start (d now 42.3)',
  'F16 [F16] approach: the stall side-step (right) moved the start (d now 32.1)',
  'F16 [F16] approach: the stall side-step (left) stalled too'
]
const F478_MOVED = 'F1 fuel commons: path nudge approach: the stall side-step (right) moved the start (d now 6.0)'
const F478_STALLED = 'F6 [F6] approach: the stall side-step (left) stalled too'

test('the real face lines ride byte-exact', () => {
  assert.deepEqual(sidestepVerdictCensus(F467), { moved: 1, stalled: 2 })
  assert.deepEqual(sidestepVerdictCensus(F474), { moved: 3, stalled: 0 })
  assert.deepEqual(sidestepVerdictCensus(F475), { moved: 2, stalled: 2 })
  // the F478 burst face (the moved=20 swell the field priced)
  const f478 = [...Array(20)].map((_, i) => F478_MOVED.replace('(d now 6.0)', `(d now ${(5 + i * 0.1).toFixed(1)})`)).concat([F478_STALLED])
  assert.deepEqual(sidestepVerdictCensus(f478), { moved: 20, stalled: 1 })
})

test('THE MASS SUMS EVERY SUMMARY - each side-step a vote, no last-print-wins', () => {
  // the same face holding three prints - all three ride
  assert.deepEqual(sidestepVerdictCensus([F478_MOVED, F478_STALLED, F478_MOVED]), { moved: 2, stalled: 1 })
  // order never matters (the mass, not the last print)
  assert.deepEqual(sidestepVerdictCensus([F478_STALLED, F478_MOVED]), { moved: 1, stalled: 1 })
})

test('the lawful zero - the never-stepped face keeps the healthy-looking zeros', () => {
  assert.deepEqual(sidestepVerdictCensus(['bots=19 spawned=19', 'worldmap: 5 positions, 2 chunks scanned, top: sand=7']), { moved: 0, stalled: 0 })
  assert.deepEqual(sidestepVerdictCensus([]), { moved: 0, stalled: 0 })
})

test('the near-miss lanes never ride - the neighbours own their lanes', () => {
  // the walk summary lane (the .250 word's own seat)
  assert.deepEqual(sidestepVerdictCensus(['F6 [F6] approach: 1 segment(s) walked in 11.4s, goal now d=21.5 (inside the direct envelope)']), { moved: 0, stalled: 0 })
  // the walk governor's own line (the .254 word's frame)
  assert.deepEqual(sidestepVerdictCensus(['walk governor: 17 stall(s) opened, 238 churn re-issues refused (v0.74.0 churn breaker - goals queued+done with zero progress during the run68-class storms)']), { moved: 0, stalled: 0 })
  // the truncated tail
  assert.deepEqual(sidestepVerdictCensus(['F6 [F6] approach: the stall side-step (right) stalled to']), { moved: 0, stalled: 0 })
  // the integer-d skin (the emitter prints toFixed(1) only)
  assert.deepEqual(sidestepVerdictCensus(['F6 [F6] approach: the stall side-step (right) moved the start (d now 6)']), { moved: 0, stalled: 0 })
  // the two-decimal skin
  assert.deepEqual(sidestepVerdictCensus(['F6 [F6] approach: the stall side-step (right) moved the start (d now 6.05)']), { moved: 0, stalled: 0 })
  // the missing-digit skin
  assert.deepEqual(sidestepVerdictCensus(['F6 [F6] approach: the stall side-step (right) moved the start (d now .6)']), { moved: 0, stalled: 0 })
  // the trailing junk after the tail
  assert.deepEqual(sidestepVerdictCensus(['F6 [F6] approach: the stall side-step (right) moved the start (d now 6.0) extra']), { moved: 0, stalled: 0 })
  assert.deepEqual(sidestepVerdictCensus(['F6 [F6] approach: the stall side-step (right) stalled too early']), { moved: 0, stalled: 0 })
  // the wrong side casing
  assert.deepEqual(sidestepVerdictCensus(['F6 [F6] approach: the stall side-step (Right) moved the start (d now 6.0)']), { moved: 0, stalled: 0 })
  // the missing closing paren
  assert.deepEqual(sidestepVerdictCensus(['F6 [F6] approach: the stall side-step (right moved the start (d now 6.0)']), { moved: 0, stalled: 0 })
  // the altered verdict prose
  assert.deepEqual(sidestepVerdictCensus(['F6 [F6] approach: the stall side-step (right) moved the begins (d now 6.0)']), { moved: 0, stalled: 0 })
  // the missing side-step anchor entirely
  assert.deepEqual(sidestepVerdictCensus(['F6 [F6] approach: moved the start (d now 6.0)']), { moved: 0, stalled: 0 })
  // the wrong frame entirely
  assert.deepEqual(sidestepVerdictCensus(['worldmap: 5 positions, 2 chunks scanned, top: sand=7']), { moved: 0, stalled: 0 })
  // the junk inputs
  assert.deepEqual(sidestepVerdictCensus([null, undefined, 42, {}]), { moved: 0, stalled: 0 })
})

test('the census guard - the input itself not an array reads null', () => {
  assert.equal(sidestepVerdictCensus(null), null)
  assert.equal(sidestepVerdictCensus(undefined), null)
  assert.equal(sidestepVerdictCensus(F478_MOVED), null)
  assert.equal(sidestepVerdictCensus(42), null)
})

test('the fence - every branch', () => {
  const ok = { back: { moved: 1, stalled: 1 }, prev: { moved: 2, stalled: 2 }, cur: { moved: 3, stalled: 3 } }
  assert.equal(sidestepVerdictConsistent(ok), true)
  // the zero lawful - the never-stepped face
  assert.equal(sidestepVerdictConsistent({ back: { moved: 0, stalled: 0 }, prev: { moved: 0, stalled: 0 }, cur: { moved: 0, stalled: 0 } }), true)
  // extra keys never rejected
  assert.equal(sidestepVerdictConsistent({ ...ok, extra: 'rides' }), true)
  // the missing face
  assert.equal(sidestepVerdictConsistent({ back: { moved: 1, stalled: 1 }, prev: { moved: 2, stalled: 2 } }), false)
  // the negative cell
  assert.equal(sidestepVerdictConsistent({ ...ok, cur: { moved: -1, stalled: 3 } }), false)
  // the non-integer cell
  assert.equal(sidestepVerdictConsistent({ ...ok, cur: { moved: 1.5, stalled: 3 } }), false)
  // the junk folds
  assert.equal(sidestepVerdictConsistent(null), false)
  assert.equal(sidestepVerdictConsistent(undefined), false)
  assert.equal(sidestepVerdictConsistent([ok]), false)
  assert.equal(sidestepVerdictConsistent('fold'), false)
})

test('the row shapes - swell/fade/swing byte-exact', () => {
  const swell = sidestepVerdictTrendRow({ back: { moved: 1, stalled: 2 }, prev: { moved: 3, stalled: 0 }, cur: { moved: 10, stalled: 1 } })
  assert.equal(swell, "the side-step verdict trend (v0.976.257): the side-step weather's own swell ran two steps deep - 1 -> 3 (+2) -> 10 (+7) - the moved mass's own swell, the stalls rode 2 -> 0 -> 1 (the approach walk's own summary row keeps its own lane, the yard approach's own frame keeps its seat, the walk nudge's own trend keeps its cell - the side-step verdict row alone, co-existence by seat never by duplication)")
  const fade = sidestepVerdictTrendRow({ back: { moved: 10, stalled: 1 }, prev: { moved: 3, stalled: 0 }, cur: { moved: 1, stalled: 2 } })
  assert.equal(fade, "the side-step verdict trend (v0.976.257): the side-step weather's own fade ran two steps deep - 10 -> 3 (-7) -> 1 (-2) - the moved mass's own fade, the stalls rode 1 -> 0 -> 2 (the approach walk's own summary row keeps its own lane, the yard approach's own frame keeps its seat, the walk nudge's own trend keeps its cell - the side-step verdict row alone, co-existence by seat never by duplication)")
  const swing = sidestepVerdictTrendRow({ back: { moved: 1, stalled: 2 }, prev: { moved: 10, stalled: 3 }, cur: { moved: 3, stalled: 1 } })
  assert.equal(swing, "the side-step verdict trend (v0.976.257): the moved mass's own swing - 1 -> 10 (+9) -> 3 (-7) - the fade and the swell traded seats between the faces, the stalls rode 2 -> 3 -> 1 (the approach walk's own summary row keeps its own lane, the yard approach's own frame keeps its seat, the walk nudge's own trend keeps its cell - the side-step verdict row alone, co-existence by seat never by duplication)")
})

test('the honest nulls - the held step and the three-face zero', () => {
  // a held step prices no direction
  assert.equal(sidestepVerdictTrendRow({ back: { moved: 3, stalled: 1 }, prev: { moved: 3, stalled: 2 }, cur: { moved: 10, stalled: 3 } }), null)
  assert.equal(sidestepVerdictTrendRow({ back: { moved: 3, stalled: 1 }, prev: { moved: 10, stalled: 2 }, cur: { moved: 10, stalled: 3 } }), null)
  // the three-face zero - the lane never rode the whole arc
  assert.equal(sidestepVerdictTrendRow({ back: { moved: 0, stalled: 0 }, prev: { moved: 0, stalled: 0 }, cur: { moved: 0, stalled: 0 } }), null)
  // the fence keeps the lie out
  assert.equal(sidestepVerdictTrendRow({ back: { moved: 1, stalled: 1 } }), null)
  assert.equal(sidestepVerdictTrendRow(null), null)
})

test('THE FIELD WINDOW - W467-474-475 and W474-475-478 the real arcs price the swings, THE WORD BORN SPEAKING', () => {
  // the first window: moved 1 -> 3 (+2) -> 2 (-1) - the swing
  const w1 = sidestepVerdictTrendRow({ back: sidestepVerdictCensus(F467), prev: sidestepVerdictCensus(F474), cur: sidestepVerdictCensus(F475) })
  assert.equal(w1, "the side-step verdict trend (v0.976.257): the moved mass's own swing - 1 -> 3 (+2) -> 2 (-1) - the fade and the swell traded seats between the faces, the stalls rode 2 -> 0 -> 2 (the approach walk's own summary row keeps its own lane, the yard approach's own frame keeps its seat, the walk nudge's own trend keeps its cell - the side-step verdict row alone, co-existence by seat never by duplication)")
  // the second window: moved 3 -> 2 (-1) -> 20 (+18) - the swing the F478 burst prices
  const f478 = [...Array(20)].map((_, i) => F478_MOVED.replace('(d now 6.0)', `(d now ${(5 + i * 0.1).toFixed(1)})`)).concat([F478_STALLED])
  const w2 = sidestepVerdictTrendRow({ back: sidestepVerdictCensus(F474), prev: sidestepVerdictCensus(F475), cur: sidestepVerdictCensus(f478) })
  assert.equal(w2, "the side-step verdict trend (v0.976.257): the moved mass's own swing - 3 -> 2 (-1) -> 20 (+18) - the fade and the swell traded seats between the faces, the stalls rode 0 -> 2 -> 1 (the approach walk's own summary row keeps its own lane, the yard approach's own frame keeps its seat, the walk nudge's own trend keeps its cell - the side-step verdict row alone, co-existence by seat never by duplication)")
})

test('the emitter grammar - the approach.mjs template must stand', () => {
  // the emitters' own templates (src/lib/approach.mjs:340/344):
  //   `approach: the stall side-step (${sideName}) moved the start${Number.isFinite(d) ? ` (d now ${d.toFixed(1)})` : ''}`
  //   `approach: the stall side-step (${sideName}) stalled too`
  const movedLine = (side, d) => d == null
    ? `F1 fuel commons: path nudge approach: the stall side-step (${side}) moved the start`
    : `F1 fuel commons: path nudge approach: the stall side-step (${side}) moved the start (d now ${d.toFixed(1)})`
  const stalledLine = (side) => `F1 fuel commons: path nudge approach: the stall side-step (${side}) stalled too`
  for (const line of [movedLine('right', 6.0), movedLine('left', 35.9), movedLine('right', null), stalledLine('right'), stalledLine('left')]) {
    assert.equal(sidestepVerdictCensus([line]) !== null, true, `template line must ride: ${line}`)
  }
  assert.deepEqual(sidestepVerdictCensus([movedLine('left', 35.9)]), { moved: 1, stalled: 0 })
  assert.deepEqual(sidestepVerdictCensus([movedLine('right', null)]), { moved: 1, stalled: 0 })
  assert.deepEqual(sidestepVerdictCensus([stalledLine('left')]), { moved: 0, stalled: 1 })
})
