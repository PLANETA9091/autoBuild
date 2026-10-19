/**
 * gcpausetrend.test.mjs - (v0.976.281) THE JVM GC'S OWN PAUSE MASS -
 * the garbage collector's own stop-the-world lines the word prices,
 * pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the thirteen
 * server-console faces' own gc lines, run 39174346168 .. 39230056077):
 *   F478: 91 pauses, 4 kinds, max 38.077ms   F484: 79 pauses, max 47.012ms
 *   F479: 71 pauses, 4 kinds, max 56.751ms   F485: 88 pauses, max 45.649ms
 *   F480: 83 pauses, 4 kinds, max 42.072ms   F486: 77 pauses, max 51.543ms
 *   F481: 82 pauses, 4 kinds, max 38.504ms   F487: 87 pauses, max 47.597ms
 *   F482: 77 pauses, 4 kinds, max 60.949ms   F488a: 78 pauses, max 44.945ms
 *   F483: 76 pauses, 4 kinds, max 48.398ms   F488: 69 pauses, max 50.940ms
 *                                            F489: 79 pauses, max 57.262ms
 * the thirteen-face arc 91 -> 71 -> 83 -> 82 -> 77 -> 76 -> 79 -> 88
 * -> 77 -> 87 -> 78 -> 69 -> 79 no row read - ELEVEN real windows,
 * ELEVEN speaks (four fades, three swells, four swings - zero held),
 * the family's strongest birth - the word takes the seat, the
 * fieldproof rides the full faces
 * (scripts/fieldread-gcpause-1743.mjs), the pins ride the REAL lines
 * byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { gcPauseCensus, gcPauseConsistent, gcPauseTrendRow } from '../../src/lib/gcpausetrend.mjs'

// the REAL lines byte-exact (the JVM's own [gc] lane)
const L1 = '[1.664s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->17M(1026M) 6.563ms'
const L2 = '[41.833s][info][gc] GC(20) Pause Young (Prepare Mixed) (G1 Evacuation Pause) 792M->234M(1024M) 38.077ms'
const L3 = '[6.101s][info][gc] GC(7) Pause Young (Prepare Mixed) (Metadata GC Threshold) 477M->85M(1024M) 56.751ms'
const L4 = '[11.174s][info][gc] GC(12) Pause Young (Mixed) (G1 Evacuation Pause) 677M->135M(1024M) 42.072ms'
const L5 = '[5.038s][info][gc] GC(1) Pause Young (Concurrent Start) (Metadata GC Threshold) 146M->42M(1024M) 12.892ms'
// the emitter's own optional second cause paren - the Evacuation
// Failure: Pinned the F489 face's own pinned objects carry (the
// thirteen faces' thirteen such lines the grammar admits - the
// bootstrap word's own scout-tail precedent, the emitter's own
// optional byte)
const L6 = '[93.386s][info][gc] GC(23) Pause Young (Normal) (G1 Evacuation Pause) (Evacuation Failure: Pinned) 835M->258M(1024M) 21.453ms'
const L7 = '[403.549s][info][gc] GC(43) Pause Young (Normal) (G1 Evacuation Pause) (Evacuation Failure: Pinned) 869M->299M(1024M) 25.654ms'

test('the REAL lines byte-exact - the census sums the lane whole', () => {
  // one line one pause (the .232 census law, the .278 precedent)
  assert.deepEqual(gcPauseCensus([L1]), { pauses: 1, kinds: 1, maxPause: 6.563, maxGcNum: 0 })
  // the four kinds the thirteen faces earned - the breadth hand rides
  assert.deepEqual(gcPauseCensus([L1, L2, L3, L4, L5]), { pauses: 5, kinds: 4, maxPause: 56.751, maxGcNum: 20 })
  // the optional second cause paren rides - the emitter's own byte
  assert.deepEqual(gcPauseCensus([L6]), { pauses: 1, kinds: 1, maxPause: 21.453, maxGcNum: 23 })
  assert.deepEqual(gcPauseCensus([L1, L6, L7]), { pauses: 3, kinds: 1, maxPause: 25.654, maxGcNum: 43 })
  // the order never matters - the sum is the lane's own law
  assert.deepEqual(gcPauseCensus([L5, L3, L1]), { pauses: 3, kinds: 3, maxPause: 56.751, maxGcNum: 7 })
  // the F478 first line byte-exact - the face's own opener
  const f478 = gcPauseCensus([L1, L2])
  assert.equal(f478.pauses, 2)
  assert.equal(f478.maxPause, 38.077)
  assert.equal(f478.maxGcNum, 20)
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(gcPauseCensus(null), null)
  assert.equal(gcPauseCensus(undefined), null)
  assert.equal(gcPauseCensus(L1), null)
  assert.equal(gcPauseCensus(42), null)
  // junk lines - the lawful zero (the gc-quiet face)
  assert.deepEqual(gcPauseCensus([]), { pauses: 0, kinds: 0, maxPause: 0, maxGcNum: 0 })
  assert.deepEqual(gcPauseCensus(['total chaos, no gc lines here']), { pauses: 0, kinds: 0, maxPause: 0, maxGcNum: 0 })
  assert.deepEqual(gcPauseCensus([null, 42, 'junk', L1]), { pauses: 1, kinds: 1, maxPause: 6.563, maxGcNum: 0 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  const zero = { pauses: 0, kinds: 0, maxPause: 0, maxGcNum: 0 }
  // the Pause Full line - the old collector's own dialect
  const full = '[2.110s][info][gc] GC(9) Pause Full (G1 Compaction Pause) 500M->100M(1024M) 120.000ms'
  assert.deepEqual(gcPauseCensus([full]), zero)
  // the concurrent cycle line - the young pause never prints
  const cycle = '[5.038s][info][gc] GC(2) Concurrent Mark Cycle 146M->42M(1024M) 12.892ms'
  assert.deepEqual(gcPauseCensus([cycle]), zero)
  // the leading-zero GC number - the proven integer cell
  const leadingZero = '[1.664s][info][gc] GC(00) Pause Young (Normal) (G1 Evacuation Pause) 71M->17M(1026M) 6.563ms'
  assert.deepEqual(gcPauseCensus([leadingZero]), zero)
  // the pretty spacing - the emitter's own template byte-exact
  const pretty = '[1.664s] [info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->17M(1026M) 6.563ms'
  assert.deepEqual(gcPauseCensus([pretty]), zero)
  // the bot-tagged prefix - one emitter one shape
  const tagged = 'x ' + L1
  assert.deepEqual(gcPauseCensus([tagged]), zero)
  // the truncated head - the timestamp the anchor rides whole
  const truncated = '[1.664s][info][gc] GC(0) Pause Young (Normal) 71M->17M(1026M) 6.563ms'
  assert.deepEqual(gcPauseCensus([truncated]), zero)
  // the missing ms tail - the fused-tail skin the grammar refuses
  const fused = '[1.664s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->17M(1026M) 6.563ms extra'
  assert.deepEqual(gcPauseCensus([fused]), zero)
  // the float heap - the three-sided byte the integers hold
  const floatHeap = '[1.664s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71.5M->17M(1026M) 6.563ms'
  assert.deepEqual(gcPauseCensus([floatHeap]), zero)
  // the negative heap - no sign the cells carry
  const negative = '[1.664s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) -71M->17M(1026M) 6.563ms'
  assert.deepEqual(gcPauseCensus([negative]), zero)
  // the altered order - the emitter's own template
  const altered = '[1.664s][info][gc] GC(0) Pause Young (G1 Evacuation Pause) (Normal) 71M->17M(1026M) 6.563ms'
  assert.deepEqual(gcPauseCensus([altered]), zero)
  // the three cause parens - the optional byte once, never twice
  const triple = '[1.664s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) (Evacuation Failure: Pinned) (More) 71M->17M(1026M) 6.563ms'
  assert.deepEqual(gcPauseCensus([triple]), zero)
  // the missing pause duration
  const noMs = '[1.664s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->17M(1026M)'
  assert.deepEqual(gcPauseCensus([noMs]), zero)
  // the wrong channel byte
  const wrongChannel = '[1.664s][info][debug][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->17M(1026M) 6.563ms'
  assert.deepEqual(gcPauseCensus([wrongChannel]), zero)
  // the bare prose without the frame
  assert.deepEqual(gcPauseCensus(['GC(0) Pause Young (Normal)']), zero)
})

test('the fence - every branch the fold proves', () => {
  const good = { back: { pauses: 91, kinds: 4, maxPause: 38.077, maxGcNum: 94 }, prev: { pauses: 71, kinds: 4, maxPause: 56.751, maxGcNum: 74 }, cur: { pauses: 83, kinds: 4, maxPause: 42.072, maxGcNum: 86 } }
  assert.equal(gcPauseConsistent(good), true)
  // the null and the non-object
  assert.equal(gcPauseConsistent(null), false)
  assert.equal(gcPauseConsistent(undefined), false)
  assert.equal(gcPauseConsistent(42), false)
  assert.equal(gcPauseConsistent([good]), false)
  // the missing face
  assert.equal(gcPauseConsistent({ back: good.back, prev: good.prev }), false)
  assert.equal(gcPauseConsistent({ back: null, prev: good.prev, cur: good.cur }), false)
  // the non-integer and the negative integer cells
  assert.equal(gcPauseConsistent({ back: { pauses: 1.5, kinds: 4, maxPause: 38.077, maxGcNum: 94 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(gcPauseConsistent({ back: { pauses: -1, kinds: 4, maxPause: 38.077, maxGcNum: 94 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(gcPauseConsistent({ back: { pauses: 91, kinds: -4, maxPause: 38.077, maxGcNum: 94 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(gcPauseConsistent({ back: { pauses: 91, kinds: 4, maxPause: 38.077, maxGcNum: -94 }, prev: good.prev, cur: good.cur }), false)
  // the negative and the non-number maxPause - the float the fence holds
  assert.equal(gcPauseConsistent({ back: { pauses: 91, kinds: 4, maxPause: -0.5, maxGcNum: 94 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(gcPauseConsistent({ back: { pauses: 91, kinds: 4, maxPause: '38.077', maxGcNum: 94 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(gcPauseConsistent({ back: { pauses: 91, kinds: 4, maxPause: NaN, maxGcNum: 94 }, prev: good.prev, cur: good.cur }), false)
  // extra keys never rejected
  assert.equal(gcPauseConsistent({ ...good, junk: 'rides' }), true)
  // the zero cells ride - the zero lawful
  assert.equal(gcPauseConsistent({ back: { pauses: 0, kinds: 0, maxPause: 0, maxGcNum: 0 }, prev: { pauses: 0, kinds: 0, maxPause: 0, maxGcNum: 0 }, cur: { pauses: 0, kinds: 0, maxPause: 0, maxGcNum: 0 } }), true)
})

test('the shapes byte-exact - the REAL eleven windows price eleven, zero held', () => {
  const TAIL = "(the .278 advancement word keeps the server console's own broadcast lane (a different emitter - the [Server thread/INFO] frame this [gc] lane never shares), the kickbill module keeps the login churn cast (the join/left the same console carries, a different emitter again), the deathcause module's chat-exclusion list keeps the gc lines its own silence, the bootstrap word keeps the launch line's own seat (the .279 word - the fleet's own stdout), the counterstrend family keeps the counters line's own seats (the .261-.277 band) - the pause mass's row alone, co-existence by seat never by duplication)"
  const f = (p, mp) => ({ pauses: p, kinds: 4, maxPause: mp, maxGcNum: 90 })
  const w = (a, b, c) => ({ back: f(...a), prev: f(...b), cur: f(...c) })
  // the W478-479-480 swing - the real window byte-exact (91 -> 71 -> 83)
  assert.equal(gcPauseTrendRow(w([91, 38.077], [71, 56.751], [83, 42.072])), "the gc pauses trend (v0.976.281): the gc weather's own swing - 91 -> 71 (-20) -> 83 (+12) - the fade and the swell traded seats between the faces, the longest stop-the-world rode 56.751ms -> 42.072ms, the kinds rode 4 -> 4 -> 4 " + TAIL)
  // the W479-480-481 swing - the real window byte-exact (71 -> 83 -> 82)
  assert.equal(gcPauseTrendRow(w([71, 56.751], [83, 42.072], [82, 38.504])), "the gc pauses trend (v0.976.281): the gc weather's own swing - 71 -> 83 (+12) -> 82 (-1) - the fade and the swell traded seats between the faces, the longest stop-the-world rode 42.072ms -> 38.504ms, the kinds rode 4 -> 4 -> 4 " + TAIL)
  // the W480-481-482 fade - the real window byte-exact (83 -> 82 -> 77)
  assert.equal(gcPauseTrendRow(w([83, 42.072], [82, 38.504], [77, 60.949])), "the gc pauses trend (v0.976.281): the gc weather's own fade ran two steps deep - 83 -> 82 (-1) -> 77 (-5) - the pause mass's own fade, the longest stop-the-world rode 38.504ms -> 60.949ms, the kinds rode 4 -> 4 -> 4 " + TAIL)
  // the W481-482-483 fade - the real window byte-exact (82 -> 77 -> 76)
  assert.equal(gcPauseTrendRow(w([82, 38.504], [77, 60.949], [76, 48.398])), "the gc pauses trend (v0.976.281): the gc weather's own fade ran two steps deep - 82 -> 77 (-5) -> 76 (-1) - the pause mass's own fade, the longest stop-the-world rode 60.949ms -> 48.398ms, the kinds rode 4 -> 4 -> 4 " + TAIL)
  // the W482-483-484 swing - the real window byte-exact (77 -> 76 -> 79)
  assert.equal(gcPauseTrendRow(w([77, 60.949], [76, 48.398], [79, 47.012])), "the gc pauses trend (v0.976.281): the gc weather's own swing - 77 -> 76 (-1) -> 79 (+3) - the fade and the swell traded seats between the faces, the longest stop-the-world rode 48.398ms -> 47.012ms, the kinds rode 4 -> 4 -> 4 " + TAIL)
  // the W483-484-485 swell - the real window byte-exact (76 -> 79 -> 88)
  assert.equal(gcPauseTrendRow(w([76, 48.398], [79, 47.012], [88, 45.649])), "the gc pauses trend (v0.976.281): the gc weather's own swell ran two steps deep - 76 -> 79 (+3) -> 88 (+9) - the pause mass's own swell, the longest stop-the-world rode 47.012ms -> 45.649ms, the kinds rode 4 -> 4 -> 4 " + TAIL)
  // the W484-485-486 swing - the real window byte-exact (79 -> 88 -> 77)
  assert.equal(gcPauseTrendRow(w([79, 47.012], [88, 45.649], [77, 51.543])), "the gc pauses trend (v0.976.281): the gc weather's own swing - 79 -> 88 (+9) -> 77 (-11) - the fade and the swell traded seats between the faces, the longest stop-the-world rode 45.649ms -> 51.543ms, the kinds rode 4 -> 4 -> 4 " + TAIL)
  // the W485-486-487 swing - the real window byte-exact (88 -> 77 -> 87)
  assert.equal(gcPauseTrendRow(w([88, 45.649], [77, 51.543], [87, 47.597])), "the gc pauses trend (v0.976.281): the gc weather's own swing - 88 -> 77 (-11) -> 87 (+10) - the fade and the swell traded seats between the faces, the longest stop-the-world rode 51.543ms -> 47.597ms, the kinds rode 4 -> 4 -> 4 " + TAIL)
  // the W486-487-488a swing - the real window byte-exact (77 -> 87 -> 78)
  assert.equal(gcPauseTrendRow(w([77, 51.543], [87, 47.597], [78, 44.945])), "the gc pauses trend (v0.976.281): the gc weather's own swing - 77 -> 87 (+10) -> 78 (-9) - the fade and the swell traded seats between the faces, the longest stop-the-world rode 47.597ms -> 44.945ms, the kinds rode 4 -> 4 -> 4 " + TAIL)
  // the W487-488a-488 fade - the real window byte-exact (87 -> 78 -> 69)
  assert.equal(gcPauseTrendRow(w([87, 47.597], [78, 44.945], [69, 50.94])), "the gc pauses trend (v0.976.281): the gc weather's own fade ran two steps deep - 87 -> 78 (-9) -> 69 (-9) - the pause mass's own fade, the longest stop-the-world rode 44.945ms -> 50.940ms, the kinds rode 4 -> 4 -> 4 " + TAIL)
  // the W488a-488-489 swing - the real window byte-exact (78 -> 69 -> 79)
  assert.equal(gcPauseTrendRow(w([78, 44.945], [69, 50.94], [79, 57.262])), "the gc pauses trend (v0.976.281): the gc weather's own swing - 78 -> 69 (-9) -> 79 (+10) - the fade and the swell traded seats between the faces, the longest stop-the-world rode 50.940ms -> 57.262ms, the kinds rode 4 -> 4 -> 4 " + TAIL)
  // the synthetic held step - the honest silence (the family's own held law)
  assert.equal(gcPauseTrendRow(w([90, 38], [90, 38], [85, 38])), null)
  assert.equal(gcPauseTrendRow(w([85, 38], [90, 38], [90, 38])), null)
  // the three-face zero - the lawful silence (the JVM never paused)
  const zeros = { back: { pauses: 0, kinds: 0, maxPause: 0, maxGcNum: 0 }, prev: { pauses: 0, kinds: 0, maxPause: 0, maxGcNum: 0 }, cur: { pauses: 0, kinds: 0, maxPause: 0, maxGcNum: 0 } }
  assert.equal(gcPauseTrendRow(zeros), null)
  // the fence fails - the null
  assert.equal(gcPauseTrendRow(null), null)
  assert.equal(gcPauseTrendRow({ back: { pauses: 1 }, prev: { pauses: 2 }, cur: { pauses: 3 } }), null)
})
