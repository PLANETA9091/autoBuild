/**
 * gcheapreclaimtrend.test.mjs - (v0.976.289) THE GC HEAP'S OWN
 * RECLAIM MASS - the JVM's own [gc] pause lines' heap cells the word
 * prices, pure.
 *
 * THE REAL BYTES (the .281 test's own trusted pins, the seven REAL
 * [gc] lines the six faces' openers and peaks hold):
 *   L1 71M->17M(1026M)  L2 792M->234M(1024M)  L3 477M->85M(1024M)
 *   L4 677M->135M(1024M) L5 146M->42M(1024M)  L6 835M->258M(1024M)
 *   L7 869M->299M(1024M)
 * the reclaim the lane sums whole (the from-minus-to delta the every
 * pause claws back), the cap the LAST-PRINT-WINS law holds, the
 * pause count the .281 word's own priced voice the side-car rides.
 * The REAL per-face arc the first field face reads (the fleet logs
 * the reset sandbox lost - the family's own committed witness the
 * pins hold, the decompose fold the REAL sum reads then).
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { gcHeapCensus, gcHeapConsistent, gcHeapTrendRow } from '../../src/lib/gcheapreclaimtrend.mjs'

// the REAL [gc] lines byte-exact (the .281 test's own pins hold)
const L1 = '[1.664s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->17M(1026M) 6.563ms'
const L2 = '[41.833s][info][gc] GC(20) Pause Young (Prepare Mixed) (G1 Evacuation Pause) 792M->234M(1024M) 38.077ms'
const L3 = '[6.101s][info][gc] GC(7) Pause Young (Prepare Mixed) (Metadata GC Threshold) 477M->85M(1024M) 56.751ms'
const L4 = '[11.174s][info][gc] GC(12) Pause Young (Mixed) (G1 Evacuation Pause) 677M->135M(1024M) 42.072ms'
const L5 = '[5.038s][info][gc] GC(1) Pause Young (Concurrent Start) (Metadata GC Threshold) 146M->42M(1024M) 12.892ms'
const L6 = '[93.386s][info][gc] GC(23) Pause Young (Normal) (G1 Evacuation Pause) (Evacuation Failure: Pinned) 835M->258M(1024M) 21.453ms'
const L7 = '[403.549s][info][gc] GC(43) Pause Young (Normal) (G1 Evacuation Pause) (Evacuation Failure: Pinned) 869M->299M(1024M) 25.654ms'

test('the REAL lines byte-exact - the census rides the heap cells', () => {
  assert.deepEqual(gcHeapCensus([L1]), { reclaim: 54, cap: 1026, pauses: 1 })
  assert.deepEqual(gcHeapCensus([L2]), { reclaim: 558, cap: 1024, pauses: 1 })
  assert.deepEqual(gcHeapCensus([L3]), { reclaim: 392, cap: 1024, pauses: 1 })
  assert.deepEqual(gcHeapCensus([L4]), { reclaim: 542, cap: 1024, pauses: 1 })
  assert.deepEqual(gcHeapCensus([L5]), { reclaim: 104, cap: 1024, pauses: 1 })
  assert.deepEqual(gcHeapCensus([L6]), { reclaim: 577, cap: 1024, pauses: 1 })
  assert.deepEqual(gcHeapCensus([L7]), { reclaim: 570, cap: 1024, pauses: 1 })
  // the reclaim the lane sums whole - one line one pause, the deltas
  // add; the cap the LAST-PRINT-WINS law holds
  assert.deepEqual(gcHeapCensus([L1, L2]), { reclaim: 612, cap: 1024, pauses: 2 })
  assert.deepEqual(gcHeapCensus([L2, L1]), { reclaim: 612, cap: 1026, pauses: 2 })
  assert.deepEqual(gcHeapCensus([L1, L3, L6]), { reclaim: 1023, cap: 1024, pauses: 3 })
})

test('the junk faces the lawful zero and the honest null', () => {
  assert.deepEqual(gcHeapCensus([]), { reclaim: 0, cap: 0, pauses: 0 })
  assert.deepEqual(gcHeapCensus(['junk', '   ']), { reclaim: 0, cap: 0, pauses: 0 })
  assert.equal(gcHeapCensus(null), null)
  assert.equal(gcHeapCensus('[1.664s][info][gc] GC(0) Pause Young (Normal) 71M->17M(1026M) 6.563ms'), null)
  assert.deepEqual(gcHeapCensus([42, 7]), { reclaim: 0, cap: 0, pauses: 0 })
  // the other pause lanes never ride - the old collector's own
  // dialect and the concurrent cycle line (the .281 test's own
  // refusal skins hold)
  const full = '[2.110s][info][gc] GC(9) Pause Full (G1 Compaction Pause) 500M->100M(1024M) 120.000ms'
  const cycle = '[5.038s][info][gc] GC(2) Concurrent Mark Cycle 146M->42M(1024M) 12.892ms'
  assert.deepEqual(gcHeapCensus([full, cycle]), { reclaim: 0, cap: 0, pauses: 0 })
  assert.deepEqual(gcHeapCensus([full, L1]), { reclaim: 54, cap: 1026, pauses: 1 })
})

test('the near-miss lanes never ride - the grammar refuses the skins', () => {
  const skins = [
    '[1.664s][info][gc] GC(00) Pause Young (Normal) (G1 Evacuation Pause) 71M->17M(1026M) 6.563ms', // the leading zero
    '[1.664s] [info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->17M(1026M) 6.563ms', // the pretty spacing
    'F478 [1.664s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->17M(1026M) 6.563ms', // the bot-tagged prefix
    '[1.664s][info][gc] GC(0) Pause Young (Normal) 71M->17M(1026M) 6.563ms', // the truncated head - the cause paren missing
    '[1.664s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->17M(1026M) 6.563ms extra', // the fused tail
    '[1.664s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71.5M->17M(1026M) 6.563ms', // the float heap
    '[1.664s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) -71M->17M(1026M) 6.563ms', // the negative heap
    '[1.664s][info][gc] GC(0) Pause Young (G1 Evacuation Pause) (Normal) 71M->17M(1026M) 6.563ms', // the altered order
    '[1.664s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) (Evacuation Failure: Pinned) (More) 71M->17M(1026M) 6.563ms', // the triple cause parens
    '[1.664s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->17M(1026M)', // the missing ms tail
    '[1.664s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->17M(1026M) 6.563ms trailing=1' // the trailing junk
  ]
  skins.forEach((skin) => {
    assert.deepEqual(gcHeapCensus([skin, L1]), { reclaim: 54, cap: 1026, pauses: 1 }, `skin rides not: ${skin.slice(0, 60)}`)
    assert.deepEqual(gcHeapCensus([skin]), { reclaim: 0, cap: 0, pauses: 0 }, `skin alone lawful zero: ${skin.slice(0, 60)}`)
  })
})

test('the fence every branch', () => {
  const face = { reclaim: 612, cap: 1024, pauses: 2 }
  assert.equal(gcHeapConsistent({ back: face, prev: face, cur: face }), true)
  // the zero lawful - the gc-quiet face keeps the healthy zero
  const zero = { reclaim: 0, cap: 0, pauses: 0 }
  assert.equal(gcHeapConsistent({ back: zero, prev: zero, cur: zero }), true)
  // the falses
  assert.equal(gcHeapConsistent(null), false)
  assert.equal(gcHeapConsistent(undefined), false)
  assert.equal(gcHeapConsistent('fold'), false)
  assert.equal(gcHeapConsistent([face, face, face]), false)
  assert.equal(gcHeapConsistent({ back: face }), false)
  assert.equal(gcHeapConsistent({ back: face, prev: face }), false)
  assert.equal(gcHeapConsistent({ back: face, prev: face, cur: { reclaim: 1.5, cap: 1024, pauses: 1 } }), false)
  assert.equal(gcHeapConsistent({ back: face, prev: face, cur: { reclaim: -1, cap: 1024, pauses: 1 } }), false)
  assert.equal(gcHeapConsistent({ back: face, prev: face, cur: { reclaim: 1, cap: -2, pauses: 1 } }), false)
  assert.equal(gcHeapConsistent({ back: face, prev: face, cur: { reclaim: 1, cap: 1024, pauses: -1 } }), false)
  assert.equal(gcHeapConsistent({ back: face, prev: face, cur: { reclaim: '612', cap: 1024, pauses: 1 } }), false)
  assert.equal(gcHeapConsistent({ back: face, prev: face, cur: { reclaim: NaN, cap: 1024, pauses: 1 } }), false)
  assert.equal(gcHeapConsistent({ back: null, prev: face, cur: face }), false)
  assert.equal(gcHeapConsistent({ back: face, prev: 7, cur: face }), false)
  // extra keys never rejected
  assert.equal(gcHeapConsistent({ back: { ...face, extra: 1 }, prev: face, cur: face }), true)
})

test('the synthetic shapes - the fade and the swell and the swing byte-exact', () => {
  const of = (reclaim, cap, pauses) => ({ reclaim, cap, pauses })
  const fold = (back, prev, cur) => ({ back, prev, cur })
  // the swing - byte-exact the row
  assert.equal(gcHeapTrendRow(fold(of(4200, 1024, 90), of(3900, 1024, 71), of(4300, 1024, 83))), "the gc heap trend (v0.976.289): the reclaim weather's own swing - 4200 -> 3900 (-300) -> 4300 (+400) - the claw and the calm traded seats between the faces, the cap rode 1024 -> 1024 -> 1024, the pause hand rode 90 -> 71 -> 83 (the pause word's row keeps the pause mass's seat (the .281 word - whose census rides this same [gc] lane and never prices the heap cells, the bytes its grammar rode unread), the advancement word keeps the server console's own broadcast lane (the .278 word - a different emitter the [gc] lane never shares), the kickbill module keeps the login churn cast, the bootstrap word keeps the launch line's own seat (the .279 word), the counters family keeps the counters line's own seats (the .261-.288 band) - the reclaim mass's row alone, co-existence by seat never by duplication)")
  // the fade - the heap breathes easier two steps deep
  assert.match(gcHeapTrendRow(fold(of(4300, 1024, 91), of(4100, 1024, 71), of(3900, 1024, 69))), /^the gc heap trend \(v0\.976\.289\): the reclaim weather's own fade ran two steps deep - 4300 -> 4100 \(-200\) -> 3900 \(-200\) - the heap breathes easier, the cap rode 1024 -> 1024 -> 1024, the pause hand rode 91 -> 71 -> 69/)
  // the swell - the churn surged two steps deep
  assert.match(gcHeapTrendRow(fold(of(3900, 1024, 69), of(4100, 1024, 77), of(4300, 1024, 83))), /^the gc heap trend \(v0\.976\.289\): the reclaim weather's own swell ran two steps deep - 3900 -> 4100 \(\+200\) -> 4300 \(\+200\) - the churn surged, the cap rode 1024 -> 1024 -> 1024, the pause hand rode 69 -> 77 -> 83/)
})

test('the held law and the three-face zero and the fence fail', () => {
  const of = (reclaim, cap, pauses) => ({ reclaim, cap, pauses })
  const fold = (back, prev, cur) => ({ back, prev, cur })
  // a held step is no direction - the honest silence
  assert.equal(gcHeapTrendRow(fold(of(4200, 1024, 90), of(3900, 1024, 71), of(3900, 1024, 83))), null)
  assert.equal(gcHeapTrendRow(fold(of(4200, 1024, 90), of(4200, 1024, 71), of(4300, 1024, 83))), null)
  // the three-face zero mass prices nothing - the JVM never
  // reclaimed the whole arc (the gc-quiet prairie the lawful silence
  // keeps)
  assert.equal(gcHeapTrendRow(fold(of(0, 0, 0), of(0, 0, 0), of(0, 0, 0))), null)
  // the fence fail - the honest null
  assert.equal(gcHeapTrendRow(null), null)
  assert.equal(gcHeapTrendRow({ back: of(1, 1, 1), prev: of(2, 2, 2), cur: { reclaim: -1, cap: 1, pauses: 1 } }), null)
  // the side-cars ride as numbers never second words
  assert.match(gcHeapTrendRow(fold(of(4200, 1026, 90), of(3900, 1024, 71), of(4300, 1024, 83))), / the cap rode 1026 -> 1024 -> 1024, the pause hand rode 90 -> 71 -> 83 \(/)
})
