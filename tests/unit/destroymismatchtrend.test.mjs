// (v0.976.295) THE SERVER'S OWN DESYNC COMPLAINT MASS - the test pins.
// REAL lines byte-exact: F496's own face (run 39287423190) carries
// '[17:02:44] [Server thread/WARN]: Mismatch in destroy block pos:
// BlockPos{x=-117, y=68, z=416} BlockPos{x=-116, y=64, z=422}'; the
// REAL five-face arc: F492 2, F493 0, F494 0, F495 1, F496 2 - W1 the
// 2 -> 0 -> 0 held silence, W2 the 0 -> 0 -> 1 held silence, W3 the
// 0 -> 1 -> 2 the REAL swell the word born speaking.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { destroyMismatchCensus, destroyMismatchConsistent, destroyMismatchTrendRow } from '../../src/lib/destroymismatchtrend.mjs'

const REAL_L = '[17:02:44] [Server thread/WARN]: Mismatch in destroy block pos: BlockPos{x=-117, y=68, z=416} BlockPos{x=-116, y=64, z=422}'
const REAL_L2 = '[17:05:44] [Server thread/WARN]: Mismatch in destroy block pos: BlockPos{x=-112, y=67, z=409} BlockPos{x=-112, y=66, z=409}'
const REAL_F492 = '[13:19:50] [Server thread/WARN]: Mismatch in destroy block pos: BlockPos{x=-128, y=71, z=387} BlockPos{x=-124, y=63, z=388}'

test('v0.976.295 census: the REAL lines byte-exact and the lane counts whole', () => {
  assert.deepEqual(destroyMismatchCensus([REAL_L, REAL_L2]), { mismatches: 2 }, 'the REAL F496 face')
  assert.deepEqual(destroyMismatchCensus(['noise', REAL_F492, REAL_L]), { mismatches: 2 }, 'the count never caps (the .232 law)')
})

test('v0.976.295 census: the junk faces stay honest', () => {
  assert.deepEqual(destroyMismatchCensus([]), { mismatches: 0 })
  assert.equal(destroyMismatchCensus(null), null, 'the .278 convention')
  assert.equal(destroyMismatchCensus(7), null)
})

test('v0.976.295 near-miss skins: twelve forms the grammar refuses', () => {
  assert.equal(destroyMismatchCensus(['F4 ' + REAL_L]).mismatches, 0, 'bot-tagged prefix')
  assert.equal(destroyMismatchCensus(['[17:02:44] [Server thread/INFO]: Mismatch in destroy block pos: BlockPos{x=-117, y=68, z=416} BlockPos{x=-116, y=64, z=422}']).mismatches, 0, 'INFO frame')
  assert.equal(destroyMismatchCensus(['[17:02:44] [Server thread/WARN]: Mismatch in destroy block pos:  BlockPos{x=-117, y=68, z=416} BlockPos{x=-116, y=64, z=422}']).mismatches, 0, 'pretty spacing')
  assert.equal(destroyMismatchCensus(['[17:02:44] [Server thread/WARN]: Mismatch in destroy block pos: BlockPos{x=-117, y=68, z=416}']).mismatches, 0, 'single BlockPos')
  assert.equal(destroyMismatchCensus(['[17:02:44] [Server thread/WARN]: Mismatch in destroy block position: BlockPos{x=-117, y=68, z=416} BlockPos{x=-116, y=64, z=422}']).mismatches, 0, 'altered verb')
  assert.equal(destroyMismatchCensus(['[17:02:44] [Server thread/WARN]: Mismatch in destroy block pos: BlockPos{x=-117.0, y=68, z=416} BlockPos{x=-116, y=64, z=422}']).mismatches, 0, 'float coord')
  assert.equal(destroyMismatchCensus(['[17:02:44] [Server thread/WARN]: Mismatch in destroy block pos: BlockPos{x=-117, y=068, z=416} BlockPos{x=-116, y=64, z=422}']).mismatches, 0, 'leading-zero coord')
  assert.equal(destroyMismatchCensus(['[17:02:44] [Server thread/WARN]: Mismatch in destroy block pos: BlockPos{x=+117, y=68, z=416} BlockPos{x=-116, y=64, z=422}']).mismatches, 0, 'plus coord')
  assert.equal(destroyMismatchCensus([' ' + REAL_L]).mismatches, 0, 'leading whitespace')
  assert.equal(destroyMismatchCensus([REAL_L + ' ok']).mismatches, 0, 'trailing junk')
  assert.equal(destroyMismatchCensus(['[17:02:44] [Server thread/WARN]: Mismatch in destroy block pos BlockPos{x=-117, y=68, z=416} BlockPos{x=-116, y=64, z=422}']).mismatches, 0, 'missing colon')
  assert.equal(destroyMismatchCensus([REAL_L + '\r']).mismatches, 0, 'CR tail')
})

test('v0.976.295 fence: every branch prices', () => {
  const ok = { back: { mismatches: 2 }, prev: { mismatches: 0 }, cur: { mismatches: 2 } }
  assert.equal(destroyMismatchConsistent(ok), true)
  assert.equal(destroyMismatchConsistent(null), false)
  assert.equal(destroyMismatchConsistent({}), false)
  assert.equal(destroyMismatchConsistent({ back: { mismatches: 1 }, prev: { mismatches: 1 } }), false, 'missing face')
  assert.equal(destroyMismatchConsistent({ back: { mismatches: -1 }, prev: { mismatches: 1 }, cur: { mismatches: 1 } }), false, 'negative')
  assert.equal(destroyMismatchConsistent({ back: { mismatches: 1.5 }, prev: { mismatches: 1 }, cur: { mismatches: 1 } }), false, 'non-integer')
})

test('v0.976.295 shape: the REAL W3 swell byte-exact (0 -> 1 -> 2)', () => {
  const row = destroyMismatchTrendRow({ back: { mismatches: 0 }, prev: { mismatches: 1 }, cur: { mismatches: 2 } })
  assert.match(row, /the destroy mismatch's own swell ran two steps deep - 0 -> 1 \(\+1\) -> 2 \(\+1\) - the dig desync grew/)
  assert.match(row, /the server desync trend \(v0\.976\.294\):/)
})

test('v0.976.295 shape: the swing and the fade and the held law and the three-face zero', () => {
  const swing = destroyMismatchTrendRow({ back: { mismatches: 3 }, prev: { mismatches: 0 }, cur: { mismatches: 1 } })
  assert.match(swing, /the destroy mismatch's own swing - 3 -> 0 \(-3\) -> 1 \(\+1\) - the desync traded between the faces/)
  const fade = destroyMismatchTrendRow({ back: { mismatches: 3 }, prev: { mismatches: 2 }, cur: { mismatches: 1 } })
  assert.match(fade, /the destroy mismatch's own fade ran two steps deep - 3 -> 2 \(-1\) -> 1 \(-1\) - the dig packets fell back in line/)
  assert.equal(destroyMismatchTrendRow({ back: { mismatches: 2 }, prev: { mismatches: 0 }, cur: { mismatches: 0 } }), null, 'the REAL W1 the held law keeps silent (2 -> 0 -> 0)')
  assert.equal(destroyMismatchTrendRow({ back: { mismatches: 0 }, prev: { mismatches: 0 }, cur: { mismatches: 1 } }), null, 'the REAL W2 the held first step keeps silent (0 -> 0 -> 1)')
  assert.equal(destroyMismatchTrendRow({ back: { mismatches: 0 }, prev: { mismatches: 0 }, cur: { mismatches: 0 } }), null, 'the three-face zero')
  assert.equal(destroyMismatchTrendRow({ back: { mismatches: 1 }, prev: { mismatches: 1 }, cur: { mismatches: 2 } }), null, 'the held first step')
  assert.equal(destroyMismatchTrendRow({ back: { mismatches: 1 }, prev: { mismatches: 2 }, cur: null }), null, 'the fence fail')
})
