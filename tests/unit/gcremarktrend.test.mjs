// (v0.976.298) THE METADATA REMARK'S OWN STOP-THE-WORLD MASS - the
// test pins. REAL lines byte-exact: F496's own face (run 39287423190)
// carries '[2.806s][info][gc] GC(2) Pause Remark 44M->44M(1024M)
// 2.607ms'; the REAL five-face arc: F492 18.769, F493 24.999, F494
// 30.663, F495 29.774, F496 37.890 - W1 the swell 18.769 -> 24.999 ->
// 30.663, W2 the swing 24.999 -> 30.663 -> 29.774, W3 the swing
// 30.663 -> 29.774 -> 37.890 - THREE REAL WINDOWS THREE SPEAKS.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { gcRemarkCensus, gcRemarkConsistent, gcRemarkTrendRow } from '../../src/lib/gcremarktrend.mjs'

const REAL_L = '[2.806s][info][gc] GC(2) Pause Remark 44M->44M(1024M) 2.607ms'
const REAL_MAX_L = '[2.806s][info][gc] GC(2) Pause Remark 44M->44M(1024M) 18.769ms'
const REAL_CLEANUP = '[3.102s][info][gc] GC(3) Pause Cleanup 52M->52M(1024M) 1.914ms'
const REAL_YOUNG = '[992.319s][info][gc] GC(84) Pause Young (Normal) (G1 Evacuation Pause) 901M->328M(1024M) 52.923ms'

test('v0.976.298 census: the REAL lines byte-exact and the peak prices', () => {
  assert.deepEqual(gcRemarkCensus([REAL_L, REAL_MAX_L]), { maxRemarkMs: 18.769 }, 'the peak wins (the F492 face)')
  assert.deepEqual(gcRemarkCensus([REAL_MAX_L, '[2.806s][info][gc] GC(2) Pause Remark 44M->44M(1024M) 37.890ms']), { maxRemarkMs: 37.890 }, 'the F496 peak the F492 peak outranks')
})

test('v0.976.298 census: the junk faces stay honest', () => {
  assert.deepEqual(gcRemarkCensus([]), { maxRemarkMs: 0 }, 'the remark-free face the lawful zero')
  assert.equal(gcRemarkCensus(null), null, 'the .278 convention')
  assert.equal(gcRemarkCensus(7), null)
})

test('v0.976.298 near-miss skins: twelve forms the grammar refuses', () => {
  assert.equal(gcRemarkCensus(['F4 ' + REAL_L]).maxRemarkMs, 0, 'bot-tagged prefix')
  assert.equal(gcRemarkCensus([REAL_CLEANUP]).maxRemarkMs, 0, 'the Cleanup sibling this word never prices')
  assert.equal(gcRemarkCensus([REAL_YOUNG]).maxRemarkMs, 0, 'the Young kind the .289 word prices')
  assert.equal(gcRemarkCensus(['[2.806s][info][gc] GC(2) Pause Remark 44.0M->44M(1024M) 2.607ms']).maxRemarkMs, 0, 'float heap')
  assert.equal(gcRemarkCensus(['[2.806s][info][gc] GC(2) Pause Remark 44M->44M(1024M) 2.607']).maxRemarkMs, 0, 'missing unit')
  assert.equal(gcRemarkCensus(['[2.806s][info][gc] GC(2) Pause Remark 2.607ms']).maxRemarkMs, 0, 'missing heap trio')
  assert.equal(gcRemarkCensus(['[2.806s][info][gc] GC(2) Pause Remarks 44M->44M(1024M) 2.607ms']).maxRemarkMs, 0, 'altered verb')
  assert.equal(gcRemarkCensus(['[2.806s][info][gc] GC(02) Pause Remark 44M->44M(1024M) 2.607ms']).maxRemarkMs, 0, 'leading-zero GC num')
  assert.equal(gcRemarkCensus([' [2.806s][info][gc] GC(2) Pause Remark 44M->44M(1024M) 2.607ms']).maxRemarkMs, 0, 'leading whitespace')
  assert.equal(gcRemarkCensus([REAL_L + ' ok']).maxRemarkMs, 0, 'trailing junk')
  assert.equal(gcRemarkCensus([REAL_L + '\r']).maxRemarkMs, 0, 'CR tail')
  assert.equal(gcRemarkCensus(['[2.806s][info][gc]  GC(2) Pause Remark 44M->44M(1024M) 2.607ms']).maxRemarkMs, 0, 'pretty spacing')
})

test('v0.976.298 fence: every branch prices', () => {
  const ok = { back: { maxRemarkMs: 18.769 }, prev: { maxRemarkMs: 24.999 }, cur: { maxRemarkMs: 30.663 } }
  assert.equal(gcRemarkConsistent(ok), true, 'the REAL decimals the JVM prints the fence accepts (the .289 maxPause law)')
  assert.equal(gcRemarkConsistent(null), false)
  assert.equal(gcRemarkConsistent({}), false)
  assert.equal(gcRemarkConsistent({ back: { maxRemarkMs: 1 }, prev: { maxRemarkMs: 1 } }), false, 'missing face')
  assert.equal(gcRemarkConsistent({ back: { maxRemarkMs: -1 }, prev: { maxRemarkMs: 1 }, cur: { maxRemarkMs: 1 } }), false, 'negative')
  assert.equal(gcRemarkConsistent({ back: { maxRemarkMs: '18.769' }, prev: { maxRemarkMs: 1 }, cur: { maxRemarkMs: 1 } }), false, 'string not number')
  assert.equal(gcRemarkConsistent({ back: { maxRemarkMs: Infinity }, prev: { maxRemarkMs: 1 }, cur: { maxRemarkMs: 1 } }), false, 'infinite')
})

test('v0.976.298 shape: the REAL W1 swell byte-exact (18.769 -> 24.999 -> 30.663)', () => {
  const row = gcRemarkTrendRow({ back: { maxRemarkMs: 18.769 }, prev: { maxRemarkMs: 24.999 }, cur: { maxRemarkMs: 30.663 } })
  assert.match(row, /the metadata remark's own swell ran two steps deep - 18\.769 -> 24\.999 \(\+6\.230\) -> 30\.663 \(\+5\.664\) ms - the class-loading's own price climbed/)
  assert.match(row, /the server gc trend \(v0\.976\.298\):/)
})

test('v0.976.298 shape: the fade and the swing and the held law and the three-face zero', () => {
  const fade = gcRemarkTrendRow({ back: { maxRemarkMs: 50 }, prev: { maxRemarkMs: 40 }, cur: { maxRemarkMs: 30 } })
  assert.match(fade, /the metadata remark's own fade ran two steps deep - 50\.000 -> 40\.000 \(-10\.000\) -> 30\.000 \(-10\.000\) ms - the class-loading's own relief/)
  const swing = gcRemarkTrendRow({ back: { maxRemarkMs: 30.663 }, prev: { maxRemarkMs: 29.774 }, cur: { maxRemarkMs: 37.890 } })
  assert.match(swing, /the metadata remark's own swing - 30\.663 -> 29\.774 \(-0\.889\) -> 37\.890 \(\+8\.116\) ms - the class-loading's own price traded between the faces/)
  assert.equal(gcRemarkTrendRow({ back: { maxRemarkMs: 10 }, prev: { maxRemarkMs: 10 }, cur: { maxRemarkMs: 20 } }), null, 'the held first step')
  assert.equal(gcRemarkTrendRow({ back: { maxRemarkMs: 10 }, prev: { maxRemarkMs: 20 }, cur: { maxRemarkMs: 20 } }), null, 'the held second step')
  assert.equal(gcRemarkTrendRow({ back: { maxRemarkMs: 0 }, prev: { maxRemarkMs: 0 }, cur: { maxRemarkMs: 0 } }), null, 'the three-face zero')
  assert.equal(gcRemarkTrendRow({ back: { maxRemarkMs: 1 }, prev: { maxRemarkMs: 2 }, cur: null }), null, 'the fence fail')
})
