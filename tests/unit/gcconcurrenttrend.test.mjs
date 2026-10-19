/**
 * gcconcurrenttrend.test.mjs - (v0.976.290) THE GC CONCURRENT CYCLE'S
 * OWN BACKGROUND MASS - the garbage collector's own background lines
 * the word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the seventeen
 * server-console faces' own concurrent cycle lines, run
 * 39174346168 .. 39268802792 - the .287/.288 family face set the
 * extra dispatch run 39218040553 the .281 test's own thirteen-face
 * arc rode the current convention skips):
 *   F478: 4 cycles, peak 278.052ms   F487: 4 cycles, peak 607.517ms
 *   F479: 4 cycles, peak 286.618ms   F488: 4 cycles, peak 737.98ms
 *   F480: 4 cycles, peak 299.443ms   F489: 5 cycles, peak 605.636ms
 *   F481: 4 cycles, peak 383.957ms   F490: 4 cycles, peak 665.843ms
 *   F482: 4 cycles, peak 545.355ms   F491: 4 cycles, peak 484.958ms
 *   F483: 4 cycles, peak 480.71ms    F492: 4 cycles, peak 341.536ms
 *   F484: 4 cycles, peak 624.111ms   F493: 4 cycles, peak 546.388ms
 *   F485: 4 cycles, peak 855.236ms   F494: 4 cycles, peak 580.477ms
 *   F486: 4 cycles, peak 659.255ms
 * the seventeen-face peak arc no row read - FIFTEEN real windows,
 * FIFTEEN speaks (five swells, two fades, eight swings - zero held),
 * the family's strongest birth - the word takes the seat, the
 * fieldproof rides the full faces
 * (scripts/fieldread-concurrent-2243.mjs), the pins ride the REAL
 * lines byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { gcConcurrentCensus, gcConcurrentConsistent, gcConcurrentTrendRow } from '../../src/lib/gcconcurrenttrend.mjs'

// the REAL lines byte-exact (the JVM's own [gc] lane - the F478 face's
// own four pairs, run 39174346168)
const S1 = '[3.176s][info][gc] GC(2) Concurrent Mark Cycle'
const E1 = '[3.200s][info][gc] GC(2) Concurrent Mark Cycle 24.305ms'
const S2 = '[4.464s][info][gc] GC(6) Concurrent Mark Cycle'
const E2 = '[4.506s][info][gc] GC(6) Concurrent Mark Cycle 41.778ms'
const S3 = '[6.071s][info][gc] GC(10) Concurrent Mark Cycle'
const E3 = '[6.185s][info][gc] GC(10) Concurrent Mark Cycle 113.847ms'
const S4 = '[37.539s][info][gc] GC(19) Concurrent Mark Cycle'
const E4 = '[37.817s][info][gc] GC(19) Concurrent Mark Cycle 278.052ms'
// the F485 face's own peak line - the arc's own summit (run 39208857636)
const F485E = '[42.939s][info][gc] GC(18) Concurrent Mark Cycle 855.236ms'
// the F489 face's own five-cycle body - the lone beat (run 39230056077)
const F489E = [
  '[2.411s][info][gc] GC(2) Concurrent Mark Cycle 27.345ms',
  '[4.178s][info][gc] GC(6) Concurrent Mark Cycle 49.884ms',
  '[6.265s][info][gc] GC(10) Concurrent Mark Cycle 157.302ms',
  '[39.559s][info][gc] GC(18) Concurrent Mark Cycle 605.636ms',
  '[966.199s][info][gc] GC(81) Concurrent Mark Cycle 334.764ms',
]
// the F492 face's own trough - the arc's own floor (run 39255972997)
const F492E = '[35.839s][info][gc] GC(19) Concurrent Mark Cycle 341.536ms'
// the F494 face's own body - the freshest face (run 39268802792)
const F494E = [
  '[8.951s][info][gc] GC(2) Concurrent Mark Cycle 30.151ms',
  '[10.501s][info][gc] GC(6) Concurrent Mark Cycle 52.143ms',
  '[12.211s][info][gc] GC(10) Concurrent Mark Cycle 125.407ms',
  '[43.884s][info][gc] GC(18) Concurrent Mark Cycle 580.477ms',
]

test('the REAL lines byte-exact - the census holds the peak and counts the completions', () => {
  // one pair one completed cycle (the .232 census law, the .278 precedent)
  assert.deepEqual(gcConcurrentCensus([S1, E1]), { peak: 24.305, cycles: 1 })
  // the F478 face's own four pairs - the starts never price (the
  // double-count skin the completion-only census refuses)
  assert.deepEqual(gcConcurrentCensus([S1, E1, S2, E2, S3, E3, S4, E4]), { peak: 278.052, cycles: 4 })
  // the starts alone price nothing - the begun-but-uncompleted cycle
  // is not the completed mass
  assert.deepEqual(gcConcurrentCensus([S1, S2, S3, S4]), { peak: 0, cycles: 0 })
  // the F485 face's own summit line
  assert.deepEqual(gcConcurrentCensus([F485E]), { peak: 855.236, cycles: 1 })
  // the F489 face's own five-cycle body - the lone beat the arc rides
  assert.deepEqual(gcConcurrentCensus(F489E), { peak: 605.636, cycles: 5 })
  // the F492 face's own trough line
  assert.deepEqual(gcConcurrentCensus([F492E]), { peak: 341.536, cycles: 1 })
  // the F494 face's own body - the freshest face
  assert.deepEqual(gcConcurrentCensus(F494E), { peak: 580.477, cycles: 4 })
  // the order never matters - the peak is the max, the count the sum
  assert.deepEqual(gcConcurrentCensus([E4, E1, E3, E2]), { peak: 278.052, cycles: 4 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(gcConcurrentCensus(null), null)
  assert.equal(gcConcurrentCensus(undefined), null)
  assert.equal(gcConcurrentCensus(E1), null)
  assert.equal(gcConcurrentCensus(42), null)
  // junk lines - the lawful zero (the concurrent-quiet face)
  assert.deepEqual(gcConcurrentCensus([]), { peak: 0, cycles: 0 })
  assert.deepEqual(gcConcurrentCensus(['total chaos, no gc lines here']), { peak: 0, cycles: 0 })
  assert.deepEqual(gcConcurrentCensus([null, 42, 'junk', E1]), { peak: 24.305, cycles: 1 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  const zero = { peak: 0, cycles: 0 }
  // the Pause Young line - the .281 lane's own seat
  const young = '[2.110s][info][gc] GC(0) Pause Young (Normal) (G1 Evacuation Pause) 71M->16M(1026M) 6.981ms'
  assert.deepEqual(gcConcurrentCensus([young]), zero)
  // the Pause Full line - the old collector's own dialect
  const full = '[2.110s][info][gc] GC(9) Pause Full (G1 Compaction Pause) 500M->100M(1024M) 120.000ms'
  assert.deepEqual(gcConcurrentCensus([full]), zero)
  // the CMS dialect - the wrong collector's own words
  const cms = '[5.038s][info][gc] GC(2) Concurrent Mark Sweep 24.305ms'
  assert.deepEqual(gcConcurrentCensus([cms]), zero)
  // the bare start line - the begun-but-uncompleted cycle (the
  // double-count skin)
  assert.deepEqual(gcConcurrentCensus([S1]), zero)
  // the leading-zero GC number - the proven integer cell
  const leadingZero = '[3.200s][info][gc] GC(02) Concurrent Mark Cycle 24.305ms'
  assert.deepEqual(gcConcurrentCensus([leadingZero]), zero)
  // the pretty spacing - the emitter's own template byte-exact
  const pretty = '[3.200s] [info][gc] GC(2) Concurrent Mark Cycle 24.305ms'
  assert.deepEqual(gcConcurrentCensus([pretty]), zero)
  // the bot-tagged prefix - one emitter one shape
  assert.deepEqual(gcConcurrentCensus(['x ' + E1]), zero)
  // the truncated head - the channel the anchor rides whole
  const truncated = '[3.200s] GC(2) Concurrent Mark Cycle 24.305ms'
  assert.deepEqual(gcConcurrentCensus([truncated]), zero)
  // the integer ms tail - the JVM's own resolution prints the fraction
  const intMs = '[3.200s][info][gc] GC(2) Concurrent Mark Cycle 24ms'
  assert.deepEqual(gcConcurrentCensus([intMs]), zero)
  // the negative ms - no sign the cells carry
  const negative = '[3.200s][info][gc] GC(2) Concurrent Mark Cycle -24.305ms'
  assert.deepEqual(gcConcurrentCensus([negative]), zero)
  // the fused tail - the trailing junk skin the grammar refuses
  const fused = '[3.200s][info][gc] GC(2) Concurrent Mark Cycle 24.305ms extra'
  assert.deepEqual(gcConcurrentCensus([fused]), zero)
  // the altered order - the emitter's own template
  const altered = '[3.200s][info][gc] GC(2) Concurrent Cycle Mark 24.305ms'
  assert.deepEqual(gcConcurrentCensus([altered]), zero)
  // the wrong channel byte
  const wrongChannel = '[3.200s][info][debug][gc] GC(2) Concurrent Mark Cycle 24.305ms'
  assert.deepEqual(gcConcurrentCensus([wrongChannel]), zero)
  // the bare prose without the frame
  assert.deepEqual(gcConcurrentCensus(['GC(2) Concurrent Mark Cycle 24.305ms']), zero)
})

test('the fence - every branch the fold proves', () => {
  const good = { back: { peak: 278.052, cycles: 4 }, prev: { peak: 286.618, cycles: 4 }, cur: { peak: 299.443, cycles: 4 } }
  assert.equal(gcConcurrentConsistent(good), true)
  // the null and the non-object
  assert.equal(gcConcurrentConsistent(null), false)
  assert.equal(gcConcurrentConsistent(undefined), false)
  assert.equal(gcConcurrentConsistent(42), false)
  assert.equal(gcConcurrentConsistent([good]), false)
  // the missing face
  assert.equal(gcConcurrentConsistent({ back: good.back, prev: good.prev }), false)
  assert.equal(gcConcurrentConsistent({ back: null, prev: good.prev, cur: good.cur }), false)
  // the non-integer and the negative cycles cell
  assert.equal(gcConcurrentConsistent({ back: { peak: 278.052, cycles: 1.5 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(gcConcurrentConsistent({ back: { peak: 278.052, cycles: -1 }, prev: good.prev, cur: good.cur }), false)
  // the negative and the non-number peak - the float the fence holds
  assert.equal(gcConcurrentConsistent({ back: { peak: -0.5, cycles: 1 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(gcConcurrentConsistent({ back: { peak: '278.052', cycles: 4 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(gcConcurrentConsistent({ back: { peak: NaN, cycles: 4 }, prev: good.prev, cur: good.cur }), false)
  // the pair-agreement law - a completed cycle carries its duration,
  // a peak without a completed cycle the fence refuses
  assert.equal(gcConcurrentConsistent({ back: { peak: 0, cycles: 4 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(gcConcurrentConsistent({ back: { peak: 278.052, cycles: 0 }, prev: good.prev, cur: good.cur }), false)
  // extra keys never rejected
  assert.equal(gcConcurrentConsistent({ ...good, junk: 'rides' }), true)
  // the zero cells ride - the zero lawful
  assert.equal(gcConcurrentConsistent({ back: { peak: 0, cycles: 0 }, prev: { peak: 0, cycles: 0 }, cur: { peak: 0, cycles: 0 } }), true)
})

test('the shapes byte-exact - the REAL fifteen windows price fifteen, zero held', () => {
  const TAIL = "(the .281 pause word keeps the stop-the-world lane's own seat (the [gc] pause lines this concurrent lane never shares), the .289 heap word keeps the same pause lines' own reclaim mass (a different cell the pause lines ride), the .278 advancement word keeps the server console's own broadcast lane (a different emitter), the kickbill module keeps the login churn cast (the join/left the same console carries, a different emitter again), the bootstrap word keeps the launch line's own seat (the .279 word - the fleet's own stdout), the counterstrend family keeps the counters line's own seats (the .261-.288 band) - the concurrent mass's row alone, co-existence by seat never by duplication)"
  const f = (peak, cycles) => ({ peak, cycles })
  const w = (a, b, c) => ({ back: f(...a), prev: f(...b), cur: f(...c) })
  // the W478-479-480 swell - the real window byte-exact (278.052 -> 286.618 -> 299.443)
  assert.equal(gcConcurrentTrendRow(w([278.052, 4], [286.618, 4], [299.443, 4])), "the gc concurrent trend (v0.976.290): the concurrent weather's own swell ran two steps deep - 278.052ms -> 286.618ms (+8.566) -> 299.443ms (+12.825) - the concurrent mass's own swell, the longest mark cycle rode 286.618ms -> 299.443ms, the cycles rode 4 -> 4 -> 4 " + TAIL)
  // the W481-482-483... the W480-481-482 swell (299.443 -> 383.957 -> 545.355)
  assert.equal(gcConcurrentTrendRow(w([299.443, 4], [383.957, 4], [545.355, 4])), "the gc concurrent trend (v0.976.290): the concurrent weather's own swell ran two steps deep - 299.443ms -> 383.957ms (+84.514) -> 545.355ms (+161.398) - the concurrent mass's own swell, the longest mark cycle rode 383.957ms -> 545.355ms, the cycles rode 4 -> 4 -> 4 " + TAIL)
  // the W482-483-484... the W481-482-483 swing (383.957 -> 545.355 -> 480.71)
  assert.equal(gcConcurrentTrendRow(w([383.957, 4], [545.355, 4], [480.71, 4])), "the gc concurrent trend (v0.976.290): the concurrent weather's own swing - 383.957ms -> 545.355ms (+161.398) -> 480.710ms (-64.645) - the fade and the swell traded seats between the faces, the longest mark cycle rode 545.355ms -> 480.710ms, the cycles rode 4 -> 4 -> 4 " + TAIL)
  // the W484-485-486... the W483-484-485 swell (480.71 -> 624.111 -> 855.236)
  assert.equal(gcConcurrentTrendRow(w([480.71, 4], [624.111, 4], [855.236, 4])), "the gc concurrent trend (v0.976.290): the concurrent weather's own swell ran two steps deep - 480.710ms -> 624.111ms (+143.401) -> 855.236ms (+231.125) - the concurrent mass's own swell, the longest mark cycle rode 624.111ms -> 855.236ms, the cycles rode 4 -> 4 -> 4 " + TAIL)
  // the W484-485-486 swing (624.111 -> 855.236 -> 659.255)
  const swing484 = gcConcurrentTrendRow(w([624.111, 4], [855.236, 4], [659.255, 4]))
  assert.ok(swing484.includes("the concurrent weather's own swing - 624.111ms -> 855.236ms (+231.125) -> 659.255ms (-195.981)"))
  assert.ok(swing484.includes('the longest mark cycle rode 855.236ms -> 659.255ms'))
  // the W485-486-487 fade - the real window byte-exact (855.236 -> 659.255 -> 607.517)
  assert.equal(gcConcurrentTrendRow(w([855.236, 4], [659.255, 4], [607.517, 4])), "the gc concurrent trend (v0.976.290): the concurrent weather's own fade ran two steps deep - 855.236ms -> 659.255ms (-195.981) -> 607.517ms (-51.738) - the concurrent mass's own fade, the longest mark cycle rode 659.255ms -> 607.517ms, the cycles rode 4 -> 4 -> 4 " + TAIL)
  // the W486-487-488 swing (659.255 -> 607.517 -> 737.98)
  assert.ok(gcConcurrentTrendRow(w([659.255, 4], [607.517, 4], [737.98, 4])).includes('own swing - 659.255ms -> 607.517ms (-51.738) -> 737.980ms (+130.463)'))
  // the W487-488-489 swing (607.517 -> 737.98 -> 605.636)
  assert.ok(gcConcurrentTrendRow(w([607.517, 4], [737.98, 4], [605.636, 5])).includes('own swing - 607.517ms -> 737.980ms (+130.463) -> 605.636ms (-132.344)'))
  // the W488-489-490 swing - the cycles' own lone beat rides (737.98 -> 605.636 -> 665.843, the cycles 4 -> 5 -> 4)
  const beat = gcConcurrentTrendRow(w([737.98, 4], [605.636, 5], [665.843, 4]))
  assert.ok(beat.includes('own swing - 737.980ms -> 605.636ms (-132.344) -> 665.843ms (+60.207)'))
  assert.ok(beat.includes('the cycles rode 4 -> 5 -> 4'))
  // the W489-490-491 swing (605.636 -> 665.843 -> 484.958)
  assert.ok(gcConcurrentTrendRow(w([605.636, 5], [665.843, 4], [484.958, 4])).includes('own swing - 605.636ms -> 665.843ms (+60.207) -> 484.958ms (-180.885)'))
  // the W490-491-492 fade - the real window byte-exact (665.843 -> 484.958 -> 341.536)
  assert.equal(gcConcurrentTrendRow(w([665.843, 4], [484.958, 4], [341.536, 4])), "the gc concurrent trend (v0.976.290): the concurrent weather's own fade ran two steps deep - 665.843ms -> 484.958ms (-180.885) -> 341.536ms (-143.422) - the concurrent mass's own fade, the longest mark cycle rode 484.958ms -> 341.536ms, the cycles rode 4 -> 4 -> 4 " + TAIL)
  // the W491-492-493 swing (484.958 -> 341.536 -> 546.388)
  assert.ok(gcConcurrentTrendRow(w([484.958, 4], [341.536, 4], [546.388, 4])).includes('own swing - 484.958ms -> 341.536ms (-143.422) -> 546.388ms (+204.852)'))
  // the W492-493-494 swell - the freshest window byte-exact (341.536 -> 546.388 -> 580.477)
  assert.equal(gcConcurrentTrendRow(w([341.536, 4], [546.388, 4], [580.477, 4])), "the gc concurrent trend (v0.976.290): the concurrent weather's own swell ran two steps deep - 341.536ms -> 546.388ms (+204.852) -> 580.477ms (+34.089) - the concurrent mass's own swell, the longest mark cycle rode 546.388ms -> 580.477ms, the cycles rode 4 -> 4 -> 4 " + TAIL)
  // the remaining REAL windows ride the W479 and W482 shapes (286.618 -> 299.443 -> 383.957; 545.355 -> 480.71 -> 624.111)
  assert.ok(gcConcurrentTrendRow(w([286.618, 4], [299.443, 4], [383.957, 4])).includes("own swell ran two steps deep - 286.618ms -> 299.443ms (+12.825) -> 383.957ms (+84.514)"))
  assert.ok(gcConcurrentTrendRow(w([545.355, 4], [480.71, 4], [624.111, 4])).includes('own swing - 545.355ms -> 480.710ms (-64.645) -> 624.111ms (+143.401)'))
  // the synthetic held step - the honest silence (the family's own held law)
  assert.equal(gcConcurrentTrendRow(w([278.052, 4], [278.052, 4], [300, 4])), null)
  assert.equal(gcConcurrentTrendRow(w([278.052, 4], [300, 4], [300, 4])), null)
  // the three-face zero - the lawful silence (the JVM never ran a cycle)
  const zeros = { back: { peak: 0, cycles: 0 }, prev: { peak: 0, cycles: 0 }, cur: { peak: 0, cycles: 0 } }
  assert.equal(gcConcurrentTrendRow(zeros), null)
  // the fence fails - the null
  assert.equal(gcConcurrentTrendRow(null), null)
  assert.equal(gcConcurrentTrendRow({ back: { peak: 1 }, prev: { peak: 2 }, cur: { peak: 3 } }), null)
})
