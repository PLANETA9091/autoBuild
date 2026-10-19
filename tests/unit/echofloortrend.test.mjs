import { test } from 'node:test'
import assert from 'node:assert/strict'
import { echoFloorCensus, echoFloorConsistent, echoFloorTrendRow } from '../../src/lib/echofloortrend.mjs'

// the REAL lines the faces carry (run 39255972997 F492, run 39260942274
// F493, run 39281865630 F495, run 39314160850 F500 - the byte-exact
// prints the vanilla server's own setblock handler spoke)

test('v0.976.307 census: the REAL lines byte-exact and the floor prices', () => {
  // F492's own face - the floor line the arc's first face held
  // (Y 72 the minimum the 152 echoes reached, the ceiling 77 the
  // .304 word's own hand never this word's price)
  const f492 = [
    '[13:11:22] [Server thread/INFO]: Changed the block at -139, 72, 388',
    '[13:11:13] [Server thread/INFO]: Changed the block at -101, 77, 392',
    '[13:11:14] [Server thread/INFO]: Changed the block at -120, 74, 395'
  ]
  assert.deepEqual(echoFloorCensus(f492), { minEchoY: 72 })
  // F493's own face - the floor 79 the arc's own deepest birth the
  // swell W4 rides
  const f493 = [
    '[13:46:55] [Server thread/INFO]: Changed the block at -141, 79, 390',
    '[13:46:56] [Server thread/INFO]: Changed the block at -128, 81, 395'
  ]
  assert.deepEqual(echoFloorCensus(f493), { minEchoY: 79 })
  // F495's own face - the floor 70 the signed domain's own depth
  const f495 = [
    '[16:11:30] [Server thread/INFO]: Changed the block at -147, 70, 398',
    '[16:11:21] [Server thread/INFO]: Changed the block at -109, 75, 402'
  ]
  assert.deepEqual(echoFloorCensus(f495), { minEchoY: 70 })
  // F500's own face - the floor 70 the arc's tail the swing W5 rides
  const f500 = [
    '[20:02:01] [Server thread/INFO]: Changed the block at -145, 70, 382',
    '[20:02:02] [Server thread/INFO]: Changed the block at -107, 75, 380'
  ]
  assert.deepEqual(echoFloorCensus(f500), { minEchoY: 70 })
  // the sibling lanes never ride - the fill and refusal lines the
  // .292/.296 words' own seats keep
  const siblings = [
    '[13:11:22] [Server thread/INFO]: Successfully filled 1537 block(s)',
    '[13:11:23] [Server thread/INFO]: Could not set the block',
    '[13:11:24] [Server thread/INFO]: Changed the block at -101, 77, 392'
  ]
  assert.deepEqual(echoFloorCensus(siblings), { minEchoY: 77 })
})

test('v0.976.307 census: the junk faces stay honest', () => {
  assert.equal(echoFloorCensus(null), null)
  assert.equal(echoFloorCensus('junk'), null)
  assert.equal(echoFloorCensus(42), null)
  assert.deepEqual(echoFloorCensus([]), { minEchoY: 0 })
  assert.deepEqual(echoFloorCensus(['total junk', '']), { minEchoY: 0 })
  assert.deepEqual(echoFloorCensus([null, 7, undefined]), { minEchoY: 0 })
})

test('v0.976.307 near-miss skins: twelve forms the grammar refuses', () => {
  const refuses = [
    // the bot-tagged prefix the fleet's own chatter wears
    '[F1] [13:11:22] Changed the block at -139, 72, 388',
    // the WARN frame the .295 desync word's own lane
    '[13:11:22] [Server thread/WARN]: Changed the block at -139, 72, 388',
    // the pretty spacing
    '[13:11:22] [Server thread/INFO]: Changed the block at -139,  72, 388',
    // the plural body the grammar never prices
    '[13:11:22] [Server thread/INFO]: Changed the blocks at -139, 72, 388',
    // the altered verb
    '[13:11:22] [Server thread/INFO]: Changed a block at -139, 72, 388',
    // the missing coord cell
    '[13:11:22] [Server thread/INFO]: Changed the block at -139, 72',
    // the float coord
    '[13:11:22] [Server thread/INFO]: Changed the block at -139, 72.5, 388',
    // the leading-zero coord (the .248 house law)
    '[13:11:22] [Server thread/INFO]: Changed the block at -139, 072, 388',
    // the plus coord (the .248 house law)
    '[13:11:22] [Server thread/INFO]: Changed the block at -139, +72, 388',
    // the leading whitespace
    ' [13:11:22] [Server thread/INFO]: Changed the block at -139, 72, 388',
    // the trailing junk
    '[13:11:22] [Server thread/INFO]: Changed the block at -139, 72, 388 done',
    // the CR tail
    '[13:11:22] [Server thread/INFO]: Changed the block at -139, 72, 388\r'
  ]
  for (const line of refuses) {
    assert.deepEqual(echoFloorCensus([line]), { minEchoY: 0 }, `refused: ${line}`)
  }
})

test('v0.976.307 fence: every branch on the signed domain', () => {
  const good = { back: { minEchoY: 72 }, prev: { minEchoY: 79 }, cur: { minEchoY: 73 } }
  assert.equal(echoFloorConsistent(good), true)
  // the negative faces the world's own depth coords hold - the .295
  // coord law's own signed domain
  assert.equal(echoFloorConsistent({ back: { minEchoY: -64 }, prev: { minEchoY: 0 }, cur: { minEchoY: 70 } }), true)
  assert.equal(echoFloorConsistent(null), false)
  assert.equal(echoFloorConsistent('junk'), false)
  assert.equal(echoFloorConsistent({}), false)
  assert.equal(echoFloorConsistent({ back: { minEchoY: 72 }, prev: { minEchoY: 79 } }), false)
  assert.equal(echoFloorConsistent({ back: { minEchoY: 72.5 }, prev: { minEchoY: 79 }, cur: { minEchoY: 73 } }), false)
  assert.equal(echoFloorConsistent({ back: { minEchoY: '72' }, prev: { minEchoY: 79 }, cur: { minEchoY: 73 } }), false)
})

test('v0.976.307 row: the REAL W5 swing byte-exact and the W2 fade', () => {
  // the REAL W5 swing the arc's tail holds (F496 71 -> F498 81 -> F500
  // 70 - the deepest birth the four-swing family holds)
  const w5 = echoFloorTrendRow({ back: { minEchoY: 71 }, prev: { minEchoY: 81 }, cur: { minEchoY: 70 } })
  assert.equal(w5, "the server trend (v0.976.307): the setblock echo's own floor swing - 71 -> 81 (+10) -> 70 (-11) - the builders traded between the faces, (the .304 echoheight word keeps the same echo envelope's Y ceiling seat and the echoes count side-car - the floor's own sibling above (its census returns the Y maximum, never the floor), the .305 echoedge word keeps the same envelope's north edge seat (the Z minimum), the .306 echoeast word keeps the same envelope's east edge seat (the X maximum), the .292 fill word keeps the 'Successfully filled' volume lane and the .296 refusal word keeps the 'Could not set the block' lane and the .295 desync word keeps the destroy mismatch seat, the .278 advancement word keeps the same console's own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the deathcause module keeps the join/leave/death lines - the echo floor's row alone, co-existence by seat never by duplication)")
  // the REAL W2 fade the arc's second window holds (F493 79 -> F494
  // 73 -> F495 70)
  const w2 = echoFloorTrendRow({ back: { minEchoY: 79 }, prev: { minEchoY: 73 }, cur: { minEchoY: 70 } })
  assert.match(w2, /floor fade ran two steps deep - 79 -> 73 \(-6\) -> 70 \(-3\) - the builders climbed off the floor/)
  // the REAL W4 swell (F495 70 -> F496 71 -> F498 81)
  const w4 = echoFloorTrendRow({ back: { minEchoY: 70 }, prev: { minEchoY: 71 }, cur: { minEchoY: 81 } })
  assert.match(w4, /floor swell ran two steps deep - 70 -> 71 \(\+1\) -> 81 \(\+10\) - the builders dug beneath the floor/)
})

test('v0.976.307 row: the held law and the three-face zero and the fence fail', () => {
  // the held step - the honest silence (the family's own held law)
  assert.equal(echoFloorTrendRow({ back: { minEchoY: 72 }, prev: { minEchoY: 72 }, cur: { minEchoY: 73 } }), null)
  assert.equal(echoFloorTrendRow({ back: { minEchoY: 72 }, prev: { minEchoY: 73 }, cur: { minEchoY: 73 } }), null)
  // the three-face zero - the lawful silence (the zeros never invent)
  assert.equal(echoFloorTrendRow({ back: { minEchoY: 0 }, prev: { minEchoY: 0 }, cur: { minEchoY: 0 } }), null)
  // the fence fail - the honest null
  assert.equal(echoFloorTrendRow(null), null)
  assert.equal(echoFloorTrendRow({ back: { minEchoY: 72.5 }, prev: { minEchoY: 79 }, cur: { minEchoY: 73 } }), null)
  // the W1 swing the arc's own birth window holds (F492 72 -> F493
  // 79 -> F494 73)
  const w1 = echoFloorTrendRow({ back: { minEchoY: 72 }, prev: { minEchoY: 79 }, cur: { minEchoY: 73 } })
  assert.match(w1, /floor swing - 72 -> 79 \(\+7\) -> 73 \(-6\)/)
})
