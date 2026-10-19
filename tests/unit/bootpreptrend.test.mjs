// (v0.976.293) THE SERVER BOOT'S OWN PREP MASS - the test pins.
// REAL lines byte-exact: F494's own face (run 39268802792) carries
// '[14:42:22] [Server thread/INFO]: Time elapsed: 3927 ms'; the REAL
// seven-face arc: run36284626465 4433, run36286821015 3067,
// run36289053811 4629, run36292057377 4471, F492 3628, F493 4570,
// F494 3927 - FIVE REAL WINDOWS FIVE SPEAKS (W1 swing 4433 -> 3067 ->
// 4629, W2 swing 3067 -> 4629 -> 4471, W3 fade 4629 -> 4471 -> 3628,
// W4 swing 4471 -> 3628 -> 4570, W5 swing 3628 -> 4570 -> 3927).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { bootPrepCensus, bootPrepConsistent, bootPrepTrendRow } from '../../src/lib/bootpreptrend.mjs'

const REAL_L = '[14:42:22] [Server thread/INFO]: Time elapsed: 3927 ms'
const REAL_L2 = '[14:42:22] [Server thread/INFO]: Time elapsed: 4433 ms'

test('v0.976.293 census: the REAL lines byte-exact and the lane sums whole', () => {
  assert.deepEqual(bootPrepCensus([REAL_L]), { prep: 3927 })
  assert.deepEqual(bootPrepCensus(['[14:42:22] [Server thread/INFO]: Preparing spawn area: 4%', REAL_L, REAL_L2]), { prep: 8360 }, 'a mid-face reboot both boots price (the .232 sum law)')
})

test('v0.976.293 census: the junk faces stay honest', () => {
  assert.deepEqual(bootPrepCensus([]), { prep: 0 })
  assert.equal(bootPrepCensus(null), null, 'the .278 convention')
  assert.equal(bootPrepCensus(7), null)
})

test('v0.976.293 near-miss skins: twelve forms the grammar refuses', () => {
  assert.equal(bootPrepCensus(['F4 [14:42:22] [Server thread/INFO]: Time elapsed: 3927 ms']).prep, 0, 'bot-tagged prefix')
  assert.equal(bootPrepCensus(['[14:42:22] [Server thread/INFO]: Time elapsed:  3927 ms']).prep, 0, 'pretty spacing')
  assert.equal(bootPrepCensus(['[14:42:22] [Server thread/INFO]: Time elapsed: 3927']).prep, 0, 'missing unit')
  assert.equal(bootPrepCensus(['[14:42:22] [Server thread/INFO]: Time elapsed: 4.2s']).prep, 0, 'altered unit')
  assert.equal(bootPrepCensus(['[14:42:22] [Server thread/INFO]: Time elapsed: 3927.0 ms']).prep, 0, 'float')
  assert.equal(bootPrepCensus(['[14:42:22] [Server thread/INFO]: Time elapsed: 03927 ms']).prep, 0, 'leading zero')
  assert.equal(bootPrepCensus(['[14:42:22] [Server thread/INFO]: Time elapsed: -3927 ms']).prep, 0, 'negative')
  assert.equal(bootPrepCensus([' [14:42:22] [Server thread/INFO]: Time elapsed: 3927 ms']).prep, 0, 'leading whitespace')
  assert.equal(bootPrepCensus(['[14:42:22] [Server thread/INFO]: Time elapsed: 3927 ms ok']).prep, 0, 'trailing junk')
  assert.equal(bootPrepCensus(['[14:42:22] [Server thread/INFO]: Times elapsed: 3927 ms']).prep, 0, 'plural head')
  assert.equal(bootPrepCensus(['[14:42:22] [Server thread/INFO]: Time elapsed: 3927 ms\r']).prep, 0, 'CR tail')
  assert.equal(bootPrepCensus(['[14:42:22] [Server thread/INFO]: Time elapsed: 3927 ms!']).prep, 0, 'punct tail')
})

test('v0.976.293 fence: every branch prices', () => {
  const ok = { back: { prep: 4433 }, prev: { prep: 3067 }, cur: { prep: 4629 } }
  assert.equal(bootPrepConsistent(ok), true)
  assert.equal(bootPrepConsistent(null), false)
  assert.equal(bootPrepConsistent({}), false)
  assert.equal(bootPrepConsistent({ back: { prep: 1 }, prev: { prep: 1 } }), false, 'missing face')
  assert.equal(bootPrepConsistent({ back: { prep: -1 }, prev: { prep: 1 }, cur: { prep: 1 } }), false, 'negative')
  assert.equal(bootPrepConsistent({ back: { prep: 1.5 }, prev: { prep: 1 }, cur: { prep: 1 } }), false, 'non-integer')
})

test('v0.976.293 shape: the REAL W1 swing byte-exact (4433 -> 3067 -> 4629)', () => {
  const row = bootPrepTrendRow({ back: { prep: 4433 }, prev: { prep: 3067 }, cur: { prep: 4629 } })
  assert.match(row, /the boot prep's own swing - 4433 -> 3067 \(-1366\) -> 4629 \(\+1562\) ms - the readiness traded between the faces/)
  assert.match(row, /the server boot trend \(v0\.976\.293\):/)
})

test('v0.976.293 shape: the REAL W3 fade byte-exact (4629 -> 4471 -> 3628)', () => {
  const row = bootPrepTrendRow({ back: { prep: 4629 }, prev: { prep: 4471 }, cur: { prep: 3628 } })
  assert.match(row, /the boot prep's own fade ran two steps deep - 4629 -> 4471 \(-158\) -> 3628 \(-843\) ms - the world readied faster/)
})

test('v0.976.293 shape: the swell and the held law and the three-face zero and the fence fail', () => {
  const swell = bootPrepTrendRow({ back: { prep: 1000 }, prev: { prep: 2000 }, cur: { prep: 3000 } })
  assert.match(swell, /the boot prep's own swell ran two steps deep - 1000 -> 2000 \(\+1000\) -> 3000 \(\+1000\) ms - the world readied slower/)
  assert.equal(bootPrepTrendRow({ back: { prep: 4000 }, prev: { prep: 4000 }, cur: { prep: 4000 } }), null, 'the REAL equal-duration prairie the silence prices')
  assert.equal(bootPrepTrendRow({ back: { prep: 0 }, prev: { prep: 0 }, cur: { prep: 0 } }), null, 'the three-face zero')
  assert.equal(bootPrepTrendRow({ back: { prep: 1000 }, prev: { prep: 1000 }, cur: { prep: 2000 } }), null, 'the held first step')
  assert.equal(bootPrepTrendRow({ back: { prep: 1000 }, prev: { prep: 2000 }, cur: null }), null, 'the fence fail')
})
