// (v0.976.304) THE SETBLOCK SUCCESS ECHO'S OWN HEIGHT MASS - the test
// pins. REAL lines byte-exact: F492's own face carries '[13:11:13]
// [Server thread/INFO]: Changed the block at -125, 77, 408'; F498's
// own face carries '[18:43:55] [Server thread/INFO]: Changed the block
// at -119, 86, 408'; F493's own face carries '[13:46:45] [Server
// thread/INFO]: Changed the block at -127, 84, 410'; the REAL
// seven-face max-Y arc: F492 77, F493 84, F494 78, F495 75, F496 76,
// F498 86, F500 75 (the echoes side-car flat 152 across all seven) -
// W1 the swing 77 -> 84 -> 78, W2 the fade 84 -> 78 -> 75, W3 the
// swing 78 -> 75 -> 76, W4 the swell 75 -> 76 -> 86 - FOUR REAL
// WINDOWS FOUR SPEAKS.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { echoHeightCensus, echoHeightConsistent, echoHeightTrendRow } from '../../src/lib/echoheighttrend.mjs'

const REAL_L = '[13:11:13] [Server thread/INFO]: Changed the block at -125, 77, 408'
const REAL_MAX_L = '[18:43:55] [Server thread/INFO]: Changed the block at -119, 86, 408'
const REAL_NEG_Z = '[13:46:45] [Server thread/INFO]: Changed the block at -127, 84, -410'
const REAL_FILL = '[14:42:43] [Server thread/INFO]: Successfully filled 1537 block(s)'
const REAL_REFUSAL = '[16:57:27] [Server thread/INFO]: Could not set the block'
const REAL_MISMATCH = '[17:02:44] [Server thread/WARN]: Mismatch in destroy block pos: BlockPos{x=-117, y=68, z=416} BlockPos{x=-116, y=64, z=422}'

test('v0.976.304 census: the REAL lines byte-exact and the height prices', () => {
  assert.deepEqual(echoHeightCensus([REAL_L, REAL_MAX_L]), { maxEchoY: 86, echoes: 2 }, 'the ceiling wins (the F498 face)')
  assert.deepEqual(echoHeightCensus([REAL_NEG_Z]), { maxEchoY: 84, echoes: 1 }, 'the negative Z the coord law rides (the .295 signed law)')
  assert.equal(echoHeightCensus([REAL_L, '[18:43:55] [Server thread/INFO]: Changed the block at 512, 90, 408']).maxEchoY, 90, 'the positive X the same signed law rides')
})

test('v0.976.304 census: the junk faces stay honest', () => {
  assert.deepEqual(echoHeightCensus([]), { maxEchoY: 0, echoes: 0 }, 'the echo-free face the lawful zero')
  assert.equal(echoHeightCensus(null), null, 'the .278 convention')
  assert.equal(echoHeightCensus(7), null)
})

test('v0.976.304 near-miss skins: twelve forms the grammar refuses', () => {
  assert.equal(echoHeightCensus(['F4 ' + REAL_L]).maxEchoY, 0, 'bot-tagged prefix')
  assert.equal(echoHeightCensus(['[13:11:13] [Server thread/WARN]: Changed the block at -125, 77, 408']).maxEchoY, 0, 'WARN frame the .295 lane rides')
  assert.equal(echoHeightCensus(['[13:11:13] [Server thread/INFO]: Changed the block at -125,  77, 408']).maxEchoY, 0, 'pretty spacing')
  assert.equal(echoHeightCensus(['[13:11:13] [Server thread/INFO]: Changed the blocks at -125, 77, 408']).maxEchoY, 0, 'plural body')
  assert.equal(echoHeightCensus(['[13:11:13] [Server thread/INFO]: Modified the block at -125, 77, 408']).maxEchoY, 0, 'altered verb')
  assert.equal(echoHeightCensus(['[13:11:13] [Server thread/INFO]: Changed the block at -125, 77']).maxEchoY, 0, 'missing coord cell')
  assert.equal(echoHeightCensus(['[13:11:13] [Server thread/INFO]: Changed the block at -125, 77.0, 408']).maxEchoY, 0, 'float coord')
  assert.equal(echoHeightCensus(['[13:11:13] [Server thread/INFO]: Changed the block at -125, 077, 408']).maxEchoY, 0, 'leading-zero coord the .248 house law refuses')
  assert.equal(echoHeightCensus(['[13:11:13] [Server thread/INFO]: Changed the block at -125, +77, 408']).maxEchoY, 0, 'plus coord')
  assert.equal(echoHeightCensus([' ' + REAL_L]).maxEchoY, 0, 'leading whitespace')
  assert.equal(echoHeightCensus([REAL_L + ' ok']).maxEchoY, 0, 'trailing junk')
  assert.equal(echoHeightCensus([REAL_L + '\r']).maxEchoY, 0, 'CR tail')
  assert.equal(echoHeightCensus([REAL_FILL]).echoes, 0, 'the fill sibling the .292 word prices')
  assert.equal(echoHeightCensus([REAL_REFUSAL]).echoes, 0, 'the refusal sibling the .296 word prices')
  assert.equal(echoHeightCensus([REAL_MISMATCH]).echoes, 0, 'the mismatch sibling the .295 word prices')
})

test('v0.976.304 fence: every branch prices', () => {
  const ok = { back: { maxEchoY: 77, echoes: 152 }, prev: { maxEchoY: 84, echoes: 152 }, cur: { maxEchoY: 78, echoes: 152 } }
  assert.equal(echoHeightConsistent(ok), true, 'the REAL integers the faces print the fence accepts')
  assert.equal(echoHeightConsistent(null), false)
  assert.equal(echoHeightConsistent({}), false)
  assert.equal(echoHeightConsistent({ back: { maxEchoY: 1, echoes: 1 }, prev: { maxEchoY: 1, echoes: 1 } }), false, 'missing face')
  assert.equal(echoHeightConsistent({ back: { maxEchoY: -1, echoes: 1 }, prev: { maxEchoY: 1, echoes: 1 }, cur: { maxEchoY: 1, echoes: 1 } }), false, 'negative')
  assert.equal(echoHeightConsistent({ back: { maxEchoY: 1.5, echoes: 1 }, prev: { maxEchoY: 1, echoes: 1 }, cur: { maxEchoY: 1, echoes: 1 } }), false, 'float not integer')
  assert.equal(echoHeightConsistent({ back: { maxEchoY: '77', echoes: 1 }, prev: { maxEchoY: 1, echoes: 1 }, cur: { maxEchoY: 1, echoes: 1 } }), false, 'string not number')
  assert.equal(echoHeightConsistent({ back: { maxEchoY: Infinity, echoes: 1 }, prev: { maxEchoY: 1, echoes: 1 }, cur: { maxEchoY: 1, echoes: 1 } }), false, 'infinite')
  assert.equal(echoHeightConsistent({ back: { maxEchoY: 1 }, prev: { maxEchoY: 1, echoes: 1 }, cur: { maxEchoY: 1, echoes: 1 } }), false, 'missing side-car cell')
})

test('v0.976.304 shape: the REAL W4 swell byte-exact (75 -> 76 -> 86)', () => {
  const row = echoHeightTrendRow({ back: { maxEchoY: 75, echoes: 152 }, prev: { maxEchoY: 76, echoes: 152 }, cur: { maxEchoY: 86, echoes: 152 } })
  assert.match(row, /the setblock echo's own height swell ran two steps deep - 75 -> 76 \(\+1\) -> 86 \(\+10\) - the builders climbed/)
  assert.match(row, /the server trend \(v0\.976\.304\):/)
  assert.match(row, /the \.292 fill word keeps the 'Successfully filled' volume lane/)
})

test('v0.976.304 shape: the fade and the swing and the held law and the three-face zero', () => {
  const swing = echoHeightTrendRow({ back: { maxEchoY: 78, echoes: 152 }, prev: { maxEchoY: 75, echoes: 152 }, cur: { maxEchoY: 76, echoes: 152 } })
  assert.match(swing, /the setblock echo's own height swing - 78 -> 75 \(-3\) -> 76 \(\+1\) - the builders traded between the faces/)
  const fade = echoHeightTrendRow({ back: { maxEchoY: 84, echoes: 152 }, prev: { maxEchoY: 78, echoes: 152 }, cur: { maxEchoY: 75, echoes: 152 } })
  assert.match(fade, /the setblock echo's own height fade ran two steps deep - 84 -> 78 \(-6\) -> 75 \(-3\) - the builders settled lower/)
  assert.equal(echoHeightTrendRow({ back: { maxEchoY: 77, echoes: 152 }, prev: { maxEchoY: 77, echoes: 152 }, cur: { maxEchoY: 84, echoes: 152 } }), null, 'the held first step')
  assert.equal(echoHeightTrendRow({ back: { maxEchoY: 77, echoes: 152 }, prev: { maxEchoY: 84, echoes: 152 }, cur: { maxEchoY: 84, echoes: 152 } }), null, 'the held second step')
  assert.equal(echoHeightTrendRow({ back: { maxEchoY: 0, echoes: 0 }, prev: { maxEchoY: 0, echoes: 0 }, cur: { maxEchoY: 0, echoes: 0 } }), null, 'the three-face zero')
  assert.equal(echoHeightTrendRow({ back: { maxEchoY: 1, echoes: 1 }, prev: { maxEchoY: 2, echoes: 1 }, cur: null }), null, 'the fence fail')
})
