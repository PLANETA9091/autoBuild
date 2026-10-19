// (v0.976.299) THE GC PAUSE YOUNG NORMAL'S OWN KIND MASS - the test
// pins. REAL lines byte-exact: F492's own face (run 39255972997)
// carries '[0.713s][info][gc] GC(0) Pause Young (Normal) (G1
// Evacuation Pause) 71M->16M(1026M) 5.709ms' and the pinned skin
// '[364.077s][info][gc] GC(44) Pause Young (Normal) (G1 Evacuation
// Pause) (Evacuation Failure: Pinned) 867M->276M(1024M) 11.631ms';
// F497's own face (run 39296753535) carries '[1.522s][info][gc]
// GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->16M(1026M)
// 6.230ms'; F496's own face (run 39287423190) carries the pinned
// '[28.213s][info][gc] GC(14) Pause Young (Normal) (G1 Evacuation
// Pause) (Evacuation Failure: Pinned) 725M->172M(1024M) 28.227ms'.
// The REAL six-face arc: F492 77, F493 69, F494 82, F495 63, F496 69,
// F497 56 - FOUR REAL windows FOUR swings zero helds the word born
// speaking four deep; the pinned side-car arc 3/1/1/1/4/0.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { gcPauseNormalCensus, gcPauseNormalConsistent, gcPauseNormalTrendRow } from '../../src/lib/gcpausenormaltrend.mjs'

const REAL_F492 = '[0.713s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->16M(1026M) 5.709ms'
const REAL_F492_PINNED = '[364.077s][info][gc] GC(44) Pause Young (Normal) (G1 Evacuation Pause) (Evacuation Failure: Pinned) 867M->276M(1024M) 11.631ms'
const REAL_F497 = '[1.522s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->16M(1026M) 6.230ms'
const REAL_F496_PINNED = '[28.213s][info][gc] GC(14) Pause Young (Normal) (G1 Evacuation Pause) (Evacuation Failure: Pinned) 725M->172M(1024M) 28.227ms'
const REAL_F493_CS = '[4.735s][info][gc] GC(1) Pause Young (Concurrent Start) (Metadata GC Threshold) 146M->42M(1026M) 15.311ms'
const REAL_F493_MIXED = '[6.766s][info][gc] GC(4) Pause Young (Mixed) (Metadata GC Threshold) 65M->61M(1024M) 23.496ms'

test('v0.976.299 census: the REAL lines byte-exact and the other kinds never ride', () => {
  assert.deepEqual(gcPauseNormalCensus([REAL_F492, REAL_F492_PINNED, REAL_F497, REAL_F496_PINNED]), { normal: 4, pinned: 2 }, 'the REAL skins and the pinned side-car')
  assert.deepEqual(gcPauseNormalCensus([REAL_F493_CS, REAL_F493_MIXED, REAL_F492]), { normal: 1, pinned: 0 }, 'the Concurrent Start and Mixed kinds the grammar refuses')
  const many = Array.from({ length: 130 }, () => REAL_F492)
  assert.equal(gcPauseNormalCensus(many).normal, 130, 'the count never caps (the .232 law)')
})

test('v0.976.299 census: the junk faces stay honest', () => {
  assert.deepEqual(gcPauseNormalCensus([]), { normal: 0, pinned: 0 })
  assert.equal(gcPauseNormalCensus(null), null, 'the .278 convention')
  assert.equal(gcPauseNormalCensus(7), null)
})

test('v0.976.299 near-miss skins: twelve forms the grammar refuses', () => {
  assert.equal(gcPauseNormalCensus(['GC(0) ' + REAL_F492]).normal, 0, 'bot-tagged prefix')
  assert.equal(gcPauseNormalCensus(['[0.713s] [Server thread/INFO]: GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->16M(1026M) 5.709ms']).normal, 0, 'console frame (the .278 words\' lane)')
  assert.equal(gcPauseNormalCensus(['[0.713s][info][gc]  GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->16M(1026M) 5.709ms']).normal, 0, 'pretty spacing')
  assert.equal(gcPauseNormalCensus(['[0.713s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->16M(1026M)']).normal, 0, 'missing duration')
  assert.equal(gcPauseNormalCensus(['[0.713s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->16M(1026M) 5.71ms']).normal, 0, 'two-decimal ms')
  assert.equal(gcPauseNormalCensus(['[0.713s][info][gc] GC(044) Pause Young (Normal) (G1 Evacuation Pause) 71M->16M(1026M) 5.709ms']).normal, 0, 'leading-zero GC number')
  assert.equal(gcPauseNormalCensus(['[0.713s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) -71M->16M(1026M) 5.709ms']).normal, 0, 'negative heap')
  assert.equal(gcPauseNormalCensus(['[0.713s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71->16(1026) 5.709ms']).normal, 0, 'missing M unit')
  assert.equal(gcPauseNormalCensus(['[0.713s][info][gc] GC(0) Pause Full (G1 Evacuation Pause) 71M->16M(1026M) 5.709ms']).normal, 0, 'altered Pause Full verb')
  assert.equal(gcPauseNormalCensus(['[0.713s][info][gc] GC(0) Pause Old (Normal) (G1 Evacuation Pause) 71M->16M(1026M) 5.709ms']).normal, 0, 'altered Young body')
  assert.equal(gcPauseNormalCensus(['[0.713s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->16M(1026M) 5.709ms\r']).normal, 0, 'CR tail')
  assert.equal(gcPauseNormalCensus([' ' + REAL_F492]).normal, 0, 'leading whitespace')
})

test('v0.976.299 fence: every branch prices', () => {
  const ok = { back: { normal: 77, pinned: 3 }, prev: { normal: 69, pinned: 1 }, cur: { normal: 82, pinned: 1 } }
  assert.equal(gcPauseNormalConsistent(ok), true)
  assert.equal(gcPauseNormalConsistent(null), false)
  assert.equal(gcPauseNormalConsistent({}), false)
  assert.equal(gcPauseNormalConsistent({ back: { normal: 1, pinned: 1 }, prev: { normal: 1, pinned: 1 } }), false, 'missing face')
  assert.equal(gcPauseNormalConsistent({ back: { normal: -1, pinned: 1 }, prev: { normal: 1, pinned: 1 }, cur: { normal: 1, pinned: 1 } }), false, 'negative normal')
  assert.equal(gcPauseNormalConsistent({ back: { normal: 1, pinned: 1.5 }, prev: { normal: 1, pinned: 1 }, cur: { normal: 1, pinned: 1 } }), false, 'non-integer pinned')
  assert.equal(gcPauseNormalConsistent({ back: { normal: 1 }, prev: { normal: 1, pinned: 1 }, cur: { normal: 1, pinned: 1 } }), false, 'missing cell')
})

test('v0.976.299 shape: the REAL four windows four swings byte-exact (the birth)', () => {
  const w1 = gcPauseNormalTrendRow({ back: { normal: 77, pinned: 3 }, prev: { normal: 69, pinned: 1 }, cur: { normal: 82, pinned: 1 } })
  assert.match(w1, /the pause young normal's own swing - 77 -> 69 \(-8\) -> 82 \(\+13\) - the young cadence traded between the faces \(the pinned rode 3 -> 1 -> 1\)/)
  assert.match(w1, /the gc pause normal trend \(v0\.976\.299\):/)
  const w2 = gcPauseNormalTrendRow({ back: { normal: 69, pinned: 1 }, prev: { normal: 82, pinned: 1 }, cur: { normal: 63, pinned: 1 } })
  assert.match(w2, /swing - 69 -> 82 \(\+13\) -> 63 \(-19\)/)
  const w3 = gcPauseNormalTrendRow({ back: { normal: 82, pinned: 1 }, prev: { normal: 63, pinned: 1 }, cur: { normal: 69, pinned: 4 } })
  assert.match(w3, /swing - 82 -> 63 \(-19\) -> 69 \(\+6\)/)
  assert.match(w3, /the pinned rode 1 -> 1 -> 4/)
  const w4 = gcPauseNormalTrendRow({ back: { normal: 63, pinned: 1 }, prev: { normal: 69, pinned: 4 }, cur: { normal: 56, pinned: 0 } })
  assert.match(w4, /swing - 63 -> 69 \(\+6\) -> 56 \(-13\)/)
  assert.match(w4, /the pinned rode 1 -> 4 -> 0/)
})

test('v0.976.299 shape: the swell and the fade and the held law and the three-face zero', () => {
  const swell = gcPauseNormalTrendRow({ back: { normal: 60, pinned: 2 }, prev: { normal: 70, pinned: 2 }, cur: { normal: 80, pinned: 2 } })
  assert.match(swell, /the pause young normal's own swell ran two steps deep - 60 -> 70 \(\+10\) -> 80 \(\+10\) - the allocation pressure grew/)
  const fade = gcPauseNormalTrendRow({ back: { normal: 80, pinned: 0 }, prev: { normal: 70, pinned: 0 }, cur: { normal: 60, pinned: 0 } })
  assert.match(fade, /the pause young normal's own fade ran two steps deep - 80 -> 70 \(-10\) -> 60 \(-10\) - the allocation pressure eased/)
  assert.equal(gcPauseNormalTrendRow({ back: { normal: 69, pinned: 1 }, prev: { normal: 69, pinned: 1 }, cur: { normal: 56, pinned: 0 } }), null, 'the held first step')
  assert.equal(gcPauseNormalTrendRow({ back: { normal: 77, pinned: 3 }, prev: { normal: 69, pinned: 1 }, cur: { normal: 69, pinned: 1 } }), null, 'the held second step')
  assert.equal(gcPauseNormalTrendRow({ back: { normal: 0, pinned: 0 }, prev: { normal: 0, pinned: 0 }, cur: { normal: 0, pinned: 0 } }), null, 'the three-face zero')
  assert.equal(gcPauseNormalTrendRow({ back: { normal: 77, pinned: 3 }, prev: { normal: 69, pinned: 1 }, cur: null }), null, 'the fence fail')
})
