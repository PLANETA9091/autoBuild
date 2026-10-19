// (v0.976.301) THE PREPARE MIXED PAUSE'S OWN PRICE MASS - the test
// pins. REAL lines byte-exact: F498's own face (run 39303149973)
// carries '[13.700s][info][gc] GC(7) Pause Young (Prepare Mixed)
// (Metadata GC Threshold) 476M->86M(1024M) 47.796ms' and F492's own
// face carries '[4.848s][info][gc] GC(7) Pause Young (Prepare Mixed)
// (Metadata GC Threshold) 477M->86M(1024M) 31.401ms'; the REAL
// six-face max arc: F492 31.401, F493 38.346, F494 47.508, F495 39.874,
// F496 53.468, F498 47.796 - W1 the swell 31.401 -> 38.346 -> 47.508,
// W2 the swing 38.346 -> 47.508 -> 39.874, W3 the swing 47.508 ->
// 39.874 -> 53.468, W4 the swing 39.874 -> 53.468 -> 47.796 - FOUR
// REAL WINDOWS FOUR SPEAKS.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { gcPauseMixedCensus, gcPauseMixedConsistent, gcPauseMixedTrendRow } from '../../src/lib/gcpausemixedtrend.mjs'

const REAL_L = '[13.700s][info][gc] GC(7) Pause Young (Prepare Mixed) (Metadata GC Threshold) 476M->86M(1024M) 47.796ms'
const REAL_MAX_L = '[4.848s][info][gc] GC(7) Pause Young (Prepare Mixed) (Metadata GC Threshold) 477M->86M(1024M) 31.401ms'
const REAL_F498_MAX = '[16.693s][info][gc] GC(11) Pause Young (Prepare Mixed) (G1 Evacuation Pause) 677M->112M(1024M) 39.778ms'
const REAL_NORMAL = '[992.319s][info][gc] GC(84) Pause Young (Normal) (G1 Evacuation Pause) 901M->328M(1024M) 52.923ms'
const REAL_REMARK = '[2.806s][info][gc] GC(2) Pause Remark 44M->44M(1024M) 2.607ms'

test('v0.976.301 census: the REAL lines byte-exact and the peak prices', () => {
  assert.deepEqual(gcPauseMixedCensus([REAL_L, REAL_MAX_L]), { maxMixedMs: 47.796 }, 'the peak wins (the F498 face)')
  assert.deepEqual(gcPauseMixedCensus([REAL_F498_MAX, '[52.035s][info][gc] GC(19) Pause Young (Prepare Mixed) (G1 Evacuation Pause) 793M->225M(1024M) 53.468ms']), { maxMixedMs: 53.468 }, 'the F496 peak the F498 peak outranks')
})

test('v0.976.301 census: the junk faces stay honest', () => {
  assert.deepEqual(gcPauseMixedCensus([]), { maxMixedMs: 0 }, 'the mixed-free face the lawful zero')
  assert.equal(gcPauseMixedCensus(null), null, 'the .278 convention')
  assert.equal(gcPauseMixedCensus(7), null)
})

test('v0.976.301 near-miss skins: twelve forms the grammar refuses', () => {
  assert.equal(gcPauseMixedCensus(['F4 ' + REAL_L]).maxMixedMs, 0, 'bot-tagged prefix')
  assert.equal(gcPauseMixedCensus([REAL_NORMAL]).maxMixedMs, 0, 'the Normal kind the .299 word prices')
  assert.equal(gcPauseMixedCensus([REAL_REMARK]).maxMixedMs, 0, 'the Remark sibling the .298 word prices')
  assert.equal(gcPauseMixedCensus(['[13.700s][info][gc] GC(7) Pause Young (Concurrent Start) (Metadata GC Threshold) 476M->86M(1024M) 47.796ms']).maxMixedMs, 0, 'the Concurrent Start kind')
  assert.equal(gcPauseMixedCensus(['[13.700s][info][gc] GC(7) Pause Young (Mixed) (Metadata GC Threshold) 476M->86M(1024M) 47.796ms']).maxMixedMs, 0, 'the Mixed kind')
  assert.equal(gcPauseMixedCensus(['[13.700s][info][gc] GC(7) Pause Young (Prepare Mixed) (Metadata GC Threshold) 476.0M->86M(1024M) 47.796ms']).maxMixedMs, 0, 'float heap')
  assert.equal(gcPauseMixedCensus(['[13.700s][info][gc] GC(7) Pause Young (Prepare Mixed) (Metadata GC Threshold) 476M->86M(1024M) 47.796']).maxMixedMs, 0, 'missing unit')
  assert.equal(gcPauseMixedCensus(['[13.700s][info][gc] GC(7) Pause Young (Prepare Mixed) 476M->86M(1024M) 47.796ms']).maxMixedMs, 0, 'missing cause parens the .289 law requires')
  assert.equal(gcPauseMixedCensus(['[13.700s][info][gc] GC(07) Pause Young (Prepare Mixed) (Metadata GC Threshold) 476M->86M(1024M) 47.796ms']).maxMixedMs, 0, 'leading-zero GC num the .248 house law refuses')
  assert.equal(gcPauseMixedCensus([' [13.700s][info][gc] GC(7) Pause Young (Prepare Mixed) (Metadata GC Threshold) 476M->86M(1024M) 47.796ms']).maxMixedMs, 0, 'leading whitespace')
  assert.equal(gcPauseMixedCensus([REAL_L + ' ok']).maxMixedMs, 0, 'trailing junk')
  assert.equal(gcPauseMixedCensus([REAL_L + '\r']).maxMixedMs, 0, 'CR tail')
})

test('v0.976.301 fence: every branch prices', () => {
  const ok = { back: { maxMixedMs: 31.401 }, prev: { maxMixedMs: 38.346 }, cur: { maxMixedMs: 47.508 } }
  assert.equal(gcPauseMixedConsistent(ok), true, 'the REAL decimals the JVM prints the fence accepts (the .289 maxPause law)')
  assert.equal(gcPauseMixedConsistent(null), false)
  assert.equal(gcPauseMixedConsistent({}), false)
  assert.equal(gcPauseMixedConsistent({ back: { maxMixedMs: 1 }, prev: { maxMixedMs: 1 } }), false, 'missing face')
  assert.equal(gcPauseMixedConsistent({ back: { maxMixedMs: -1 }, prev: { maxMixedMs: 1 }, cur: { maxMixedMs: 1 } }), false, 'negative')
  assert.equal(gcPauseMixedConsistent({ back: { maxMixedMs: '31.401' }, prev: { maxMixedMs: 1 }, cur: { maxMixedMs: 1 } }), false, 'string not number')
  assert.equal(gcPauseMixedConsistent({ back: { maxMixedMs: Infinity }, prev: { maxMixedMs: 1 }, cur: { maxMixedMs: 1 } }), false, 'infinite')
})

test('v0.976.301 shape: the REAL W1 swell byte-exact (31.401 -> 38.346 -> 47.508)', () => {
  const row = gcPauseMixedTrendRow({ back: { maxMixedMs: 31.401 }, prev: { maxMixedMs: 38.346 }, cur: { maxMixedMs: 47.508 } })
  assert.match(row, /the prepare mixed pause's own swell ran two steps deep - 31\.401 -> 38\.346 \(\+6\.945\) -> 47\.508 \(\+9\.162\) ms - the old-gen preparation's own price climbed/)
  assert.match(row, /the server gc trend \(v0\.976\.301\):/)
})

test('v0.976.301 shape: the fade and the swing and the held law and the three-face zero', () => {
  const swing = gcPauseMixedTrendRow({ back: { maxMixedMs: 47.508 }, prev: { maxMixedMs: 39.874 }, cur: { maxMixedMs: 53.468 } })
  assert.match(swing, /the prepare mixed pause's own swing - 47\.508 -> 39\.874 \(-7\.634\) -> 53\.468 \(\+13\.594\) ms - the old-gen preparation's own price traded between the faces/)
  const fade = gcPauseMixedTrendRow({ back: { maxMixedMs: 50 }, prev: { maxMixedMs: 40 }, cur: { maxMixedMs: 30 } })
  assert.match(fade, /the prepare mixed pause's own fade ran two steps deep - 50\.000 -> 40\.000 \(-10\.000\) -> 30\.000 \(-10\.000\) ms - the old-gen preparation's own relief/)
  assert.equal(gcPauseMixedTrendRow({ back: { maxMixedMs: 31.401 }, prev: { maxMixedMs: 31.401 }, cur: { maxMixedMs: 38.346 } }), null, 'the held first step')
  assert.equal(gcPauseMixedTrendRow({ back: { maxMixedMs: 31.401 }, prev: { maxMixedMs: 38.346 }, cur: { maxMixedMs: 38.346 } }), null, 'the held second step')
  assert.equal(gcPauseMixedTrendRow({ back: { maxMixedMs: 0 }, prev: { maxMixedMs: 0 }, cur: { maxMixedMs: 0 } }), null, 'the three-face zero')
  assert.equal(gcPauseMixedTrendRow({ back: { maxMixedMs: 1 }, prev: { maxMixedMs: 2 }, cur: null }), null, 'the fence fail')
})
