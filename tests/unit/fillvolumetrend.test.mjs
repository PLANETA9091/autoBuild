// (v0.976.292) THE SERVER FILL'S OWN VOLUME MASS - the test pins.
// REAL lines byte-exact: F494's own face (run 39268802792) carries the
// fill lines ('[14:42:43] [Server thread/INFO]: Successfully filled
// 1537 block(s)' and '...53 block(s)' and '...6 block(s)'); the REAL
// seven-face arc: run36284626465 1810/12, run36286821015 2503/12,
// run36289053811 1815/12, run36292057377 2362/12, F492 2259/11, F493
// 1840/11, F494 2236/11 - FIVE REAL WINDOWS FIVE SPEAKS (W1 swing
// 1810 -> 2503 -> 1815, W2 swing 2503 -> 1815 -> 2362, W3 swing 1815
// -> 2362 -> 2259, W4 fade 2362 -> 2259 -> 1840, W5 swing 2259 ->
// 1840 -> 2236).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { fillVolumeCensus, fillVolumeConsistent, fillVolumeTrendRow } from '../../src/lib/fillvolumetrend.mjs'

// the REAL lines byte-exact (the F494 face's own console)
const REAL_L1 = '[14:42:43] [Server thread/INFO]: Successfully filled 1537 block(s)'
const REAL_L3 = '[14:42:43] [Server thread/INFO]: Successfully filled 53 block(s)'
const REAL_L11 = '[14:42:43] [Server thread/INFO]: Successfully filled 6 block(s)'

test('v0.976.292 census: the REAL lines byte-exact and the lane sums whole', () => {
  assert.deepEqual(fillVolumeCensus([REAL_L1, REAL_L3, REAL_L11]), { filled: 1596, fills: 3 })
  assert.deepEqual(fillVolumeCensus([REAL_L1, 'plan progress: 1/31 resources complete', REAL_L3]), { filled: 1590, fills: 2 })
})

test('v0.976.292 census: the junk faces stay honest', () => {
  assert.deepEqual(fillVolumeCensus([]), { filled: 0, fills: 0 })
  assert.equal(fillVolumeCensus(null), null, 'the .278 convention')
  assert.equal(fillVolumeCensus('no'), null)
})

test('v0.976.292 near-miss skins: twelve forms the grammar refuses', () => {
  assert.equal(fillVolumeCensus(['F4 [14:42:43] [Server thread/INFO]: Successfully filled 12 block(s)']).filled, 0, 'bot-tagged prefix')
  assert.equal(fillVolumeCensus(['[14:42:43] [Server thread/INFO]: Successfully filled  12 block(s)']).filled, 0, 'pretty spacing')
  assert.equal(fillVolumeCensus(['[14:42:43] [Server thread/INFO]: Successfully filled 1 block']).filled, 0, 'singular skin')
  assert.equal(fillVolumeCensus(['[14:42:43] [Server thread/INFO]: Successfully filled 12']).filled, 0, 'missing tail')
  assert.equal(fillVolumeCensus(['[14:42:43] [Server thread/INFO]: Successfully cleared 12 block(s)']).filled, 0, 'altered verb')
  assert.equal(fillVolumeCensus(['[14:42:43] [Server thread/INFO]: Successfully filled 012 block(s)']).filled, 0, 'leading zero')
  assert.equal(fillVolumeCensus(['[14:42:43] [Server thread/INFO]: Successfully filled -12 block(s)']).filled, 0, 'negative')
  assert.equal(fillVolumeCensus(['[14:42:43] [Server thread/INFO]: Successfully filled 12.5 block(s)']).filled, 0, 'float')
  assert.equal(fillVolumeCensus([' [14:42:43] [Server thread/INFO]: Successfully filled 12 block(s)']).filled, 0, 'leading whitespace')
  assert.equal(fillVolumeCensus(['[14:42:43] [Server thread/INFO]: Successfully filled 12 block(s) ok']).filled, 0, 'trailing junk')
  assert.equal(fillVolumeCensus(['[14:42:43] [Server thread/INFO]: Successfully fills 12 block(s)']).filled, 0, 'plural head')
  assert.equal(fillVolumeCensus(['[14:42:43] [Server thread/INFO]: Successfully filled 12 block(s)\r']).filled, 0, 'CR tail')
})

test('v0.976.292 fence: every branch prices', () => {
  const ok = { back: { filled: 1810, fills: 12 }, prev: { filled: 2503, fills: 12 }, cur: { filled: 1815, fills: 12 } }
  assert.equal(fillVolumeConsistent(ok), true)
  assert.equal(fillVolumeConsistent(null), false)
  assert.equal(fillVolumeConsistent({}), false)
  assert.equal(fillVolumeConsistent({ back: { filled: 1, fills: 1 }, prev: { filled: 1 }, cur: { filled: 1, fills: 1 } }), false, 'missing cell')
  assert.equal(fillVolumeConsistent({ back: { filled: -1, fills: 1 }, prev: { filled: 1, fills: 1 }, cur: { filled: 1, fills: 1 } }), false, 'negative')
  assert.equal(fillVolumeConsistent({ back: { filled: 1.5, fills: 1 }, prev: { filled: 1, fills: 1 }, cur: { filled: 1, fills: 1 } }), false, 'non-integer')
})

test('v0.976.292 shape: the REAL W1 swing byte-exact (1810 -> 2503 -> 1815)', () => {
  const row = fillVolumeTrendRow({ back: { filled: 1810, fills: 12 }, prev: { filled: 2503, fills: 12 }, cur: { filled: 1815, fills: 12 } })
  assert.match(row, /the builders' own swing - 1810 -> 2503 \(\+693\) -> 1815 \(-688\) - the volume traded between the faces, the fills hand rode 12 -> 12 -> 12/)
  assert.match(row, /the server fill trend \(v0\.976\.292\):/)
})

test('v0.976.292 shape: the REAL W4 fade byte-exact (2362 -> 2259 -> 1840)', () => {
  const row = fillVolumeTrendRow({ back: { filled: 2362, fills: 12 }, prev: { filled: 2259, fills: 11 }, cur: { filled: 1840, fills: 11 } })
  assert.match(row, /the builders' own fade ran two steps deep - 2362 -> 2259 \(-103\) -> 1840 \(-419\) - the volume thinned, the fills hand rode 12 -> 11 -> 11/)
})

test('v0.976.292 shape: the swell and the held law and the three-face zero and the fence fail', () => {
  const swell = fillVolumeTrendRow({ back: { filled: 100, fills: 1 }, prev: { filled: 200, fills: 2 }, cur: { filled: 400, fills: 3 } })
  assert.match(swell, /the builders' own swell ran two steps deep - 100 -> 200 \(\+100\) -> 400 \(\+200\) - the volume surged/)
  assert.equal(fillVolumeTrendRow({ back: { filled: 1810, fills: 12 }, prev: { filled: 1810, fills: 12 }, cur: { filled: 1810, fills: 12 } }), null, 'the REAL equal-volume prairie the silence prices')
  assert.equal(fillVolumeTrendRow({ back: { filled: 0, fills: 0 }, prev: { filled: 0, fills: 0 }, cur: { filled: 0, fills: 0 } }), null, 'the three-face zero')
  assert.equal(fillVolumeTrendRow({ back: { filled: 100, fills: 1 }, prev: { filled: 100, fills: 1 }, cur: { filled: 200, fills: 2 } }), null, 'the held first step')
  assert.equal(fillVolumeTrendRow({ back: { filled: 100, fills: 1 }, prev: { filled: 200, fills: 2 }, cur: null }), null, 'the fence fail')
})
