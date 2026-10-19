// (v0.976.300) THE METADATA CLEANUP'S OWN STOP-THE-WORLD MASS - the
// test pins. REAL lines byte-exact: F496's own face (run 39287423190)
// carries '[2.809s][info][gc] GC(2) Pause Cleanup 45M->45M(1024M)
// 0.019ms'; F498's own face (run 39303149973) carries '[14.011s]
// [info][gc] GC(10) Pause Cleanup 103M->103M(1024M) 0.047ms'; the REAL
// six-face max arc: F492 0.043, F493 0.043, F494 0.047, F495 0.055,
// F496 0.050, F498 0.047 - W2 the swell 0.043 -> 0.047 -> 0.055, W3
// the swing 0.047 -> 0.055 -> 0.050, W4 the fade 0.055 -> 0.050 ->
// 0.047 - REAL WINDOWS REAL SPEAKS.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { gcCleanupCensus, gcCleanupConsistent, gcCleanupTrendRow } from '../../src/lib/gccleanuptrend.mjs'

const REAL_L = '[2.809s][info][gc] GC(2) Pause Cleanup 45M->45M(1024M) 0.019ms'
const REAL_MAX_L = '[35.839s][info][gc] GC(19) Pause Cleanup 267M->267M(1024M) 0.043ms'
const REAL_F498_MAX = '[14.011s][info][gc] GC(10) Pause Cleanup 103M->103M(1024M) 0.047ms'
const REAL_REMARK = '[2.806s][info][gc] GC(2) Pause Remark 44M->44M(1024M) 2.607ms'
const REAL_YOUNG = '[992.319s][info][gc] GC(84) Pause Young (Normal) (G1 Evacuation Pause) 901M->328M(1024M) 52.923ms'

test('v0.976.300 census: the REAL lines byte-exact and the peak prices', () => {
  assert.deepEqual(gcCleanupCensus([REAL_L, REAL_MAX_L]), { maxCleanupMs: 0.043 }, 'the peak wins (the F492 face)')
  assert.deepEqual(gcCleanupCensus([REAL_MAX_L, REAL_F498_MAX]), { maxCleanupMs: 0.047 }, 'the F498 peak the F492 peak outranks')
})

test('v0.976.300 census: the junk faces stay honest', () => {
  assert.deepEqual(gcCleanupCensus([]), { maxCleanupMs: 0 }, 'the cleanup-free face the lawful zero')
  assert.equal(gcCleanupCensus(null), null, 'the .278 convention')
  assert.equal(gcCleanupCensus(7), null)
})

test('v0.976.300 near-miss skins: twelve forms the grammar refuses', () => {
  assert.equal(gcCleanupCensus(['F4 ' + REAL_L]).maxCleanupMs, 0, 'bot-tagged prefix')
  assert.equal(gcCleanupCensus([REAL_REMARK]).maxCleanupMs, 0, 'the Remark sibling this word never prices')
  assert.equal(gcCleanupCensus([REAL_YOUNG]).maxCleanupMs, 0, 'the Young kind the .289 word prices')
  assert.equal(gcCleanupCensus(['[2.809s][info][gc] GC(2) Pause Cleanup 45.0M->45M(1024M) 0.019ms']).maxCleanupMs, 0, 'float heap')
  assert.equal(gcCleanupCensus(['[2.809s][info][gc] GC(2) Pause Cleanup 45M->45M(1024M) 0.019']).maxCleanupMs, 0, 'missing unit')
  assert.equal(gcCleanupCensus(['[2.809s][info][gc] GC(2) Pause Cleanup 0.019ms']).maxCleanupMs, 0, 'missing heap trio')
  assert.equal(gcCleanupCensus(['[2.809s][info][gc] GC(2) Pause Cleanups 45M->45M(1024M) 0.019ms']).maxCleanupMs, 0, 'altered verb')
  assert.equal(gcCleanupCensus(['[2.809s][info][gc] GC(02) Pause Cleanup 45M->45M(1024M) 0.019ms']).maxCleanupMs, 0, 'leading-zero GC num')
  assert.equal(gcCleanupCensus([' [2.809s][info][gc] GC(2) Pause Cleanup 45M->45M(1024M) 0.019ms']).maxCleanupMs, 0, 'leading whitespace')
  assert.equal(gcCleanupCensus([REAL_L + ' ok']).maxCleanupMs, 0, 'trailing junk')
  assert.equal(gcCleanupCensus([REAL_L + '\r']).maxCleanupMs, 0, 'CR tail')
  assert.equal(gcCleanupCensus(['[2.809s][info][gc]  GC(2) Pause Cleanup 45M->45M(1024M) 0.019ms']).maxCleanupMs, 0, 'pretty spacing')
})

test('v0.976.300 fence: every branch prices', () => {
  const ok = { back: { maxCleanupMs: 0.043 }, prev: { maxCleanupMs: 0.047 }, cur: { maxCleanupMs: 0.055 } }
  assert.equal(gcCleanupConsistent(ok), true, 'the REAL decimals the JVM prints the fence accepts (the .289 maxPause law)')
  assert.equal(gcCleanupConsistent(null), false)
  assert.equal(gcCleanupConsistent({}), false)
  assert.equal(gcCleanupConsistent({ back: { maxCleanupMs: 1 }, prev: { maxCleanupMs: 1 } }), false, 'missing face')
  assert.equal(gcCleanupConsistent({ back: { maxCleanupMs: -1 }, prev: { maxCleanupMs: 1 }, cur: { maxCleanupMs: 1 } }), false, 'negative')
  assert.equal(gcCleanupConsistent({ back: { maxCleanupMs: '0.043' }, prev: { maxCleanupMs: 1 }, cur: { maxCleanupMs: 1 } }), false, 'string not number')
  assert.equal(gcCleanupConsistent({ back: { maxCleanupMs: Infinity }, prev: { maxCleanupMs: 1 }, cur: { maxCleanupMs: 1 } }), false, 'infinite')
})

test('v0.976.300 shape: the REAL W2 swell byte-exact (0.043 -> 0.047 -> 0.055)', () => {
  const row = gcCleanupTrendRow({ back: { maxCleanupMs: 0.043 }, prev: { maxCleanupMs: 0.047 }, cur: { maxCleanupMs: 0.055 } })
  assert.match(row, /the metadata cleanup's own swell ran two steps deep - 0\.043 -> 0\.047 \(\+0\.004\) -> 0\.055 \(\+0\.008\) ms - the cycle's own wrap-up price climbed/)
  assert.match(row, /the server gc trend \(v0\.976\.300\):/)
})

test('v0.976.300 shape: the fade and the swing and the held law and the three-face zero', () => {
  const fade = gcCleanupTrendRow({ back: { maxCleanupMs: 0.055 }, prev: { maxCleanupMs: 0.050 }, cur: { maxCleanupMs: 0.047 } })
  assert.match(fade, /the metadata cleanup's own fade ran two steps deep - 0\.055 -> 0\.050 \(-0\.005\) -> 0\.047 \(-0\.003\) ms - the cycle's own wrap-up relief/)
  const swing = gcCleanupTrendRow({ back: { maxCleanupMs: 0.047 }, prev: { maxCleanupMs: 0.055 }, cur: { maxCleanupMs: 0.050 } })
  assert.match(swing, /the metadata cleanup's own swing - 0\.047 -> 0\.055 \(\+0\.008\) -> 0\.050 \(-0\.005\) ms - the cycle's own wrap-up price traded between the faces/)
  assert.equal(gcCleanupTrendRow({ back: { maxCleanupMs: 0.043 }, prev: { maxCleanupMs: 0.043 }, cur: { maxCleanupMs: 0.047 } }), null, 'the held first step (the REAL W1 shape)')
  assert.equal(gcCleanupTrendRow({ back: { maxCleanupMs: 0.050 }, prev: { maxCleanupMs: 0.047 }, cur: { maxCleanupMs: 0.047 } }), null, 'the held second step')
  assert.equal(gcCleanupTrendRow({ back: { maxCleanupMs: 0 }, prev: { maxCleanupMs: 0 }, cur: { maxCleanupMs: 0 } }), null, 'the three-face zero')
  assert.equal(gcCleanupTrendRow({ back: { maxCleanupMs: 1 }, prev: { maxCleanupMs: 2 }, cur: null }), null, 'the fence fail')
})
