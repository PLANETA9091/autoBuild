// (v0.976.302) THE NORMAL PAUSE'S OWN PEAK MASS - the test pins. REAL
// lines byte-exact: F498's own face (run 39303149973) carries
// '[32.053s][info][gc] GC(13) Pause Young (Normal) (G1 Evacuation
// Pause) 702M->154M(1024M) 65.071ms'; F496's own face carries
// '[39.557s][info][gc] GC(16) Pause Young (Normal) (G1 Evacuation
// Pause) 760M->206M(1024M) 53.098ms'; the REAL six-face max arc: F492
// 32.390, F493 45.357, F494 40.283, F495 30.474, F496 53.098, F498
// 65.071 - W1 the swing 32.390 -> 45.357 -> 40.283, W2 the fade
// 45.357 -> 40.283 -> 30.474, W3 the swing 40.283 -> 30.474 -> 53.098,
// W4 the swell 30.474 -> 53.098 -> 65.071 - FOUR REAL WINDOWS FOUR
// SPEAKS.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { gcNormalPeakCensus, gcNormalPeakConsistent, gcNormalPeakTrendRow } from '../../src/lib/gcnormalpeaktrend.mjs'

const REAL_L = '[32.053s][info][gc] GC(13) Pause Young (Normal) (G1 Evacuation Pause) 702M->154M(1024M) 65.071ms'
const REAL_MAX_L = '[39.557s][info][gc] GC(16) Pause Young (Normal) (G1 Evacuation Pause) 760M->206M(1024M) 53.098ms'
const REAL_PINNED = '[992.319s][info][gc] GC(84) Pause Young (Normal) (G1 Evacuation Pause) (Evacuation Failure: Pinned) 901M->328M(1024M) 52.923ms'
const REAL_MIXED = '[13.700s][info][gc] GC(7) Pause Young (Prepare Mixed) (Metadata GC Threshold) 476M->86M(1024M) 47.796ms'
const REAL_REMARK = '[2.806s][info][gc] GC(2) Pause Remark 44M->44M(1024M) 2.607ms'

test('v0.976.302 census: the REAL lines byte-exact and the peak prices', () => {
  assert.deepEqual(gcNormalPeakCensus([REAL_MAX_L, REAL_L]), { maxNormalMs: 65.071 }, 'the peak wins (the F498 face)')
  assert.deepEqual(gcNormalPeakCensus([REAL_L, '[992.319s][info][gc] GC(84) Pause Young (Normal) (G1 Evacuation Pause) (Evacuation Failure: Pinned) 901M->328M(1024M) 70.000ms']), { maxNormalMs: 70.000 }, 'the pinned skin rides the same peak (the .299 census counts both skins)')
})

test('v0.976.302 census: the junk faces stay honest', () => {
  assert.deepEqual(gcNormalPeakCensus([]), { maxNormalMs: 0 }, 'the normal-free face the lawful zero')
  assert.equal(gcNormalPeakCensus(null), null, 'the .278 convention')
  assert.equal(gcNormalPeakCensus(7), null)
})

test('v0.976.302 near-miss skins: twelve forms the grammar refuses', () => {
  assert.equal(gcNormalPeakCensus(['F4 ' + REAL_L]).maxNormalMs, 0, 'bot-tagged prefix')
  assert.equal(gcNormalPeakCensus([REAL_MIXED]).maxNormalMs, 0, 'the Prepare Mixed kind the .301 word prices')
  assert.equal(gcNormalPeakCensus([REAL_REMARK]).maxNormalMs, 0, 'the Remark sibling the .298 word prices')
  assert.equal(gcNormalPeakCensus(['[32.053s][info][gc] GC(13) Pause Young (Concurrent Start) (Metadata GC Threshold) 702M->154M(1024M) 65.071ms']).maxNormalMs, 0, 'the Concurrent Start kind')
  assert.equal(gcNormalPeakCensus(['[32.053s][info][gc] GC(13) Pause Young (Mixed) (Metadata GC Threshold) 702M->154M(1024M) 65.071ms']).maxNormalMs, 0, 'the Mixed kind')
  assert.equal(gcNormalPeakCensus(['[32.053s][info][gc] GC(13) Pause Young (Normal) (G1 Evacuation Pause) 702.0M->154M(1024M) 65.071ms']).maxNormalMs, 0, 'float heap')
  assert.equal(gcNormalPeakCensus(['[32.053s][info][gc] GC(13) Pause Young (Normal) (G1 Evacuation Pause) 702M->154M(1024M) 65.071']).maxNormalMs, 0, 'missing unit')
  assert.equal(gcNormalPeakCensus(['[32.053s][info][gc] GC(13) Pause Young (Normal) 702M->154M(1024M) 65.071ms']).maxNormalMs, 0, 'missing cause parens the .289 law requires')
  assert.equal(gcNormalPeakCensus(['[32.053s][info][gc] GC(013) Pause Young (Normal) (G1 Evacuation Pause) 702M->154M(1024M) 65.071ms']).maxNormalMs, 0, 'leading-zero GC num the .248 house law refuses')
  assert.equal(gcNormalPeakCensus([' [32.053s][info][gc] GC(13) Pause Young (Normal) (G1 Evacuation Pause) 702M->154M(1024M) 65.071ms']).maxNormalMs, 0, 'leading whitespace')
  assert.equal(gcNormalPeakCensus([REAL_L + ' ok']).maxNormalMs, 0, 'trailing junk')
  assert.equal(gcNormalPeakCensus([REAL_L + '\r']).maxNormalMs, 0, 'CR tail')
})

test('v0.976.302 fence: every branch prices', () => {
  const ok = { back: { maxNormalMs: 32.390 }, prev: { maxNormalMs: 45.357 }, cur: { maxNormalMs: 40.283 } }
  assert.equal(gcNormalPeakConsistent(ok), true, 'the REAL decimals the JVM prints the fence accepts (the .289 maxPause law)')
  assert.equal(gcNormalPeakConsistent(null), false)
  assert.equal(gcNormalPeakConsistent({}), false)
  assert.equal(gcNormalPeakConsistent({ back: { maxNormalMs: 1 }, prev: { maxNormalMs: 1 } }), false, 'missing face')
  assert.equal(gcNormalPeakConsistent({ back: { maxNormalMs: -1 }, prev: { maxNormalMs: 1 }, cur: { maxNormalMs: 1 } }), false, 'negative')
  assert.equal(gcNormalPeakConsistent({ back: { maxNormalMs: '32.390' }, prev: { maxNormalMs: 1 }, cur: { maxNormalMs: 1 } }), false, 'string not number')
  assert.equal(gcNormalPeakConsistent({ back: { maxNormalMs: Infinity }, prev: { maxNormalMs: 1 }, cur: { maxNormalMs: 1 } }), false, 'infinite')
})

test('v0.976.302 shape: the REAL W4 swell byte-exact (30.474 -> 53.098 -> 65.071)', () => {
  const row = gcNormalPeakTrendRow({ back: { maxNormalMs: 30.474 }, prev: { maxNormalMs: 53.098 }, cur: { maxNormalMs: 65.071 } })
  assert.match(row, /the normal pause's own peak swell ran two steps deep - 30\.474 -> 53\.098 \(\+22\.624\) -> 65\.071 \(\+11\.973\) ms - the evacuation's own price climbed/)
  assert.match(row, /the server gc trend \(v0\.976\.302\):/)
})

test('v0.976.302 shape: the fade and the swing and the held law and the three-face zero', () => {
  const swing = gcNormalPeakTrendRow({ back: { maxNormalMs: 40.283 }, prev: { maxNormalMs: 30.474 }, cur: { maxNormalMs: 53.098 } })
  assert.match(swing, /the normal pause's own peak swing - 40\.283 -> 30\.474 \(-9\.809\) -> 53\.098 \(\+22\.624\) ms - the evacuation's own price traded between the faces/)
  const fade = gcNormalPeakTrendRow({ back: { maxNormalMs: 45.357 }, prev: { maxNormalMs: 40.283 }, cur: { maxNormalMs: 30.474 } })
  assert.match(fade, /the normal pause's own peak fade ran two steps deep - 45\.357 -> 40\.283 \(-5\.074\) -> 30\.474 \(-9\.809\) ms - the evacuation's own relief/)
  assert.equal(gcNormalPeakTrendRow({ back: { maxNormalMs: 32.390 }, prev: { maxNormalMs: 32.390 }, cur: { maxNormalMs: 45.357 } }), null, 'the held first step')
  assert.equal(gcNormalPeakTrendRow({ back: { maxNormalMs: 32.390 }, prev: { maxNormalMs: 45.357 }, cur: { maxNormalMs: 45.357 } }), null, 'the held second step')
  assert.equal(gcNormalPeakTrendRow({ back: { maxNormalMs: 0 }, prev: { maxNormalMs: 0 }, cur: { maxNormalMs: 0 } }), null, 'the three-face zero')
  assert.equal(gcNormalPeakTrendRow({ back: { maxNormalMs: 1 }, prev: { maxNormalMs: 2 }, cur: null }), null, 'the fence fail')
})
