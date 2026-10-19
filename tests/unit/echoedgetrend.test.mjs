// (v0.976.305) THE SETBLOCK ECHO'S OWN NORTH EDGE MASS - the test
// pins. REAL lines byte-exact: F492's own face carries '[13:11:22]
// [Server thread/INFO]: Changed the block at -109, 73, 386'; F500's
// own face carries '[20:02:01] [Server thread/INFO]: Changed the
// block at -115, 71, 380'; F495's own face carries '[16:11:30]
// [Server thread/INFO]: Changed the block at -117, 71, 396'; the REAL
// seven-face minZ arc: F492 386, F493 388, F494 389, F495 396, F496
// 395, F498 386, F500 380 - W1 the swell 386 -> 388 -> 389, W2 the
// swell 388 -> 389 -> 396, W3 the swing 389 -> 396 -> 395, W4 the
// fade 396 -> 395 -> 386, W5 the fade 395 -> 386 -> 380 - FIVE REAL
// WINDOWS FIVE SPEAKS.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { echoEdgeCensus, echoEdgeConsistent, echoEdgeTrendRow } from '../../src/lib/echoedgetrend.mjs'

const REAL_L = '[13:11:22] [Server thread/INFO]: Changed the block at -109, 73, 386'
const REAL_EDGE_L = '[20:02:01] [Server thread/INFO]: Changed the block at -115, 71, 380'
const REAL_SOUTH_L = '[16:11:30] [Server thread/INFO]: Changed the block at -117, 71, 396'
const REAL_FILL = '[14:42:43] [Server thread/INFO]: Successfully filled 1537 block(s)'
const REAL_REFUSAL = '[16:57:27] [Server thread/INFO]: Could not set the block'
const REAL_MISMATCH = '[17:02:44] [Server thread/WARN]: Mismatch in destroy block pos: BlockPos{x=-117, y=68, z=416} BlockPos{x=-116, y=64, z=422}'

test('v0.976.305 census: the REAL lines byte-exact and the edge prices', () => {
  assert.deepEqual(echoEdgeCensus([REAL_L, REAL_SOUTH_L, REAL_EDGE_L]), { minEchoZ: 380 }, 'the north edge wins (the F500 face)')
  assert.deepEqual(echoEdgeCensus([REAL_L]), { minEchoZ: 386 }, 'the single line its own edge')
  assert.equal(echoEdgeCensus(['[13:11:22] [Server thread/INFO]: Changed the block at 512, 90, -410']).minEchoZ, -410, 'the negative Z the coord law rides (the .295 signed law)')
})

test('v0.976.305 census: the junk faces stay honest', () => {
  assert.deepEqual(echoEdgeCensus([]), { minEchoZ: 0 }, 'the echo-free face the lawful zero')
  assert.equal(echoEdgeCensus(null), null, 'the .278 convention')
  assert.equal(echoEdgeCensus(7), null)
})

test('v0.976.305 near-miss skins: twelve forms the grammar refuses', () => {
  assert.equal(echoEdgeCensus(['F4 ' + REAL_L]).minEchoZ, 0, 'bot-tagged prefix')
  assert.equal(echoEdgeCensus(['[13:11:22] [Server thread/WARN]: Changed the block at -109, 73, 386']).minEchoZ, 0, 'WARN frame the .295 lane rides')
  assert.equal(echoEdgeCensus(['[13:11:22] [Server thread/INFO]: Changed the block at -109,  73, 386']).minEchoZ, 0, 'pretty spacing')
  assert.equal(echoEdgeCensus(['[13:11:22] [Server thread/INFO]: Changed the blocks at -109, 73, 386']).minEchoZ, 0, 'plural body')
  assert.equal(echoEdgeCensus(['[13:11:22] [Server thread/INFO]: Modified the block at -109, 73, 386']).minEchoZ, 0, 'altered verb')
  assert.equal(echoEdgeCensus(['[13:11:22] [Server thread/INFO]: Changed the block at -109, 73']).minEchoZ, 0, 'missing coord cell')
  assert.equal(echoEdgeCensus(['[13:11:22] [Server thread/INFO]: Changed the block at -109, 73, 386.0']).minEchoZ, 0, 'float coord')
  assert.equal(echoEdgeCensus(['[13:11:22] [Server thread/INFO]: Changed the block at -109, 073, 386']).minEchoZ, 0, 'leading-zero coord the .248 house law refuses')
  assert.equal(echoEdgeCensus(['[13:11:22] [Server thread/INFO]: Changed the block at -109, +73, 386']).minEchoZ, 0, 'plus coord')
  assert.equal(echoEdgeCensus([' ' + REAL_L]).minEchoZ, 0, 'leading whitespace')
  assert.equal(echoEdgeCensus([REAL_L + ' ok']).minEchoZ, 0, 'trailing junk')
  assert.equal(echoEdgeCensus([REAL_L + '\r']).minEchoZ, 0, 'CR tail')
  assert.equal(echoEdgeCensus([REAL_FILL]).minEchoZ, 0, 'the fill sibling the .292 word prices')
  assert.equal(echoEdgeCensus([REAL_REFUSAL]).minEchoZ, 0, 'the refusal sibling the .296 word prices')
  assert.equal(echoEdgeCensus([REAL_MISMATCH]).minEchoZ, 0, 'the mismatch sibling the .295 word prices')
})

test('v0.976.305 fence: every branch prices', () => {
  const ok = { back: { minEchoZ: 386 }, prev: { minEchoZ: 388 }, cur: { minEchoZ: 389 } }
  assert.equal(echoEdgeConsistent(ok), true, 'the REAL integers the faces print the fence accepts')
  assert.equal(echoEdgeConsistent(null), false)
  assert.equal(echoEdgeConsistent({}), false)
  assert.equal(echoEdgeConsistent({ back: { minEchoZ: 1 }, prev: { minEchoZ: 1 } }), false, 'missing face')
  assert.equal(echoEdgeConsistent({ back: { minEchoZ: -1 }, prev: { minEchoZ: 1 }, cur: { minEchoZ: 1 } }), false, 'negative')
  assert.equal(echoEdgeConsistent({ back: { minEchoZ: 1.5 }, prev: { minEchoZ: 1 }, cur: { minEchoZ: 1 } }), false, 'float not integer')
  assert.equal(echoEdgeConsistent({ back: { minEchoZ: '386' }, prev: { minEchoZ: 1 }, cur: { minEchoZ: 1 } }), false, 'string not number')
  assert.equal(echoEdgeConsistent({ back: { minEchoZ: Infinity }, prev: { minEchoZ: 1 }, cur: { minEchoZ: 1 } }), false, 'infinite')
})

test('v0.976.305 shape: the REAL W2 swell byte-exact (388 -> 389 -> 396)', () => {
  const row = echoEdgeTrendRow({ back: { minEchoZ: 388 }, prev: { minEchoZ: 389 }, cur: { minEchoZ: 396 } })
  assert.match(row, /the setblock echo's own north edge swell ran two steps deep - 388 -> 389 \(\+1\) -> 396 \(\+7\) - the builders pressed north/)
  assert.match(row, /the server trend \(v0\.976\.305\):/)
  assert.match(row, /the \.304 echoheight word keeps the same echo envelope's Y ceiling seat/)
})

test('v0.976.305 shape: the fade and the swing and the held law and the three-face zero', () => {
  const swing = echoEdgeTrendRow({ back: { minEchoZ: 389 }, prev: { minEchoZ: 396 }, cur: { minEchoZ: 395 } })
  assert.match(swing, /the setblock echo's own north edge swing - 389 -> 396 \(\+7\) -> 395 \(-1\) - the builders traded between the faces/)
  const fade = echoEdgeTrendRow({ back: { minEchoZ: 396 }, prev: { minEchoZ: 395 }, cur: { minEchoZ: 386 } })
  assert.match(fade, /the setblock echo's own north edge fade ran two steps deep - 396 -> 395 \(-1\) -> 386 \(-9\) - the builders withdrew south/)
  assert.equal(echoEdgeTrendRow({ back: { minEchoZ: 386 }, prev: { minEchoZ: 386 }, cur: { minEchoZ: 388 } }), null, 'the held first step')
  assert.equal(echoEdgeTrendRow({ back: { minEchoZ: 386 }, prev: { minEchoZ: 388 }, cur: { minEchoZ: 388 } }), null, 'the held second step')
  assert.equal(echoEdgeTrendRow({ back: { minEchoZ: 0 }, prev: { minEchoZ: 0 }, cur: { minEchoZ: 0 } }), null, 'the three-face zero')
  assert.equal(echoEdgeTrendRow({ back: { minEchoZ: 1 }, prev: { minEchoZ: 2 }, cur: null }), null, 'the fence fail')
})
