import { test } from 'node:test'
import assert from 'node:assert/strict'
import { echoWestCensus, echoWestConsistent, echoWestTrendRow } from '../../src/lib/echowesttrend.mjs'

// the REAL lines the faces carry (run 39255972997 F492, run 39260942274
// F493, run 39281865630 F495, run 39287423190 F496, run 39314160850
// F500 - the byte-exact prints the vanilla server's own setblock
// handler spoke)

test('v0.976.309 census: the REAL lines byte-exact and the floor prices', () => {
  // F492's own face - the west edge line the arc's first face held
  // (X -149 the minimum the 152 echoes reached, the east edge -101
  // the .306 word's own hand never this word's price)
  const f492 = [
    '[13:11:22] [Server thread/INFO]: Changed the block at -149, 77, 392',
    '[13:11:13] [Server thread/INFO]: Changed the block at -101, 77, 392',
    '[13:11:14] [Server thread/INFO]: Changed the block at -120, 74, 395'
  ]
  assert.deepEqual(echoWestCensus(f492), { minEchoX: -149 })
  // F493's own face - the west edge -151
  const f493 = [
    '[13:46:55] [Server thread/INFO]: Changed the block at -151, 84, 394',
    '[13:46:56] [Server thread/INFO]: Changed the block at -103, 79, 390'
  ]
  assert.deepEqual(echoWestCensus(f493), { minEchoX: -151 })
  // F495's own face - the west edge -157 the arc's own deepest west
  // (the .306 word's own test pinned this line's east-hand sibling)
  const f495 = [
    '[16:11:30] [Server thread/INFO]: Changed the block at -157, 75, 402',
    '[16:11:21] [Server thread/INFO]: Changed the block at -109, 75, 402'
  ]
  assert.deepEqual(echoWestCensus(f495), { minEchoX: -157 })
  // F496's own face - the west edge -157 the held W4 rides
  const f496 = [
    '[16:57:27] [Server thread/INFO]: Changed the block at -157, 76, 401',
    '[16:57:28] [Server thread/INFO]: Changed the block at -109, 71, 395'
  ]
  assert.deepEqual(echoWestCensus(f496), { minEchoX: -157 })
  // F500's own face - the west edge -155 the swing W5's tail
  const f500 = [
    '[20:02:01] [Server thread/INFO]: Changed the block at -155, 75, 386',
    '[20:02:02] [Server thread/INFO]: Changed the block at -107, 70, 382'
  ]
  assert.deepEqual(echoWestCensus(f500), { minEchoX: -155 })
  // the sibling lanes never ride - the fill and refusal lines the
  // .292/.296 words' own seats keep
  const siblings = [
    '[13:11:22] [Server thread/INFO]: Successfully filled 1537 block(s)',
    '[13:11:23] [Server thread/INFO]: Could not set the block',
    '[13:11:24] [Server thread/INFO]: Changed the block at -101, 77, 392'
  ]
  assert.deepEqual(echoWestCensus(siblings), { minEchoX: -101 })
})

test('v0.976.309 census: the junk faces stay honest', () => {
  assert.equal(echoWestCensus(null), null)
  assert.equal(echoWestCensus('junk'), null)
  assert.equal(echoWestCensus(42), null)
  assert.deepEqual(echoWestCensus([]), { minEchoX: 0 })
  assert.deepEqual(echoWestCensus(['total junk', '']), { minEchoX: 0 })
  assert.deepEqual(echoWestCensus([null, 7, undefined]), { minEchoX: 0 })
})

test('v0.976.309 near-miss skins: twelve forms the grammar refuses', () => {
  const refuses = [
    // the bot-tagged prefix the fleet's own chatter wears
    '[F1] [13:11:22] Changed the block at -149, 77, 392',
    // the WARN frame the .295 desync word's own lane
    '[13:11:22] [Server thread/WARN]: Changed the block at -149, 77, 392',
    // the pretty spacing
    '[13:11:22] [Server thread/INFO]: Changed the block at -149,  77, 392',
    // the plural body the grammar never prices
    '[13:11:22] [Server thread/INFO]: Changed the blocks at -149, 77, 392',
    // the altered verb
    '[13:11:22] [Server thread/INFO]: Changed a block at -149, 77, 392',
    // the missing coord cell
    '[13:11:22] [Server thread/INFO]: Changed the block at -149, 77',
    // the float coord
    '[13:11:22] [Server thread/INFO]: Changed the block at -149.5, 77, 392',
    // the leading-zero coord (the .248 house law)
    '[13:11:22] [Server thread/INFO]: Changed the block at -049, 77, 392',
    // the plus coord (the .248 house law)
    '[13:11:22] [Server thread/INFO]: Changed the block at +149, 77, 392',
    // the leading whitespace
    ' [13:11:22] [Server thread/INFO]: Changed the block at -149, 77, 392',
    // the trailing junk
    '[13:11:22] [Server thread/INFO]: Changed the block at -149, 77, 392 done',
    // the CR tail
    '[13:11:22] [Server thread/INFO]: Changed the block at -149, 77, 392\r'
  ]
  for (const line of refuses) {
    assert.deepEqual(echoWestCensus([line]), { minEchoX: 0 }, `refused: ${line}`)
  }
})

test('v0.976.309 fence: every branch on the signed domain', () => {
  const good = { back: { minEchoX: -149 }, prev: { minEchoX: -151 }, cur: { minEchoX: -152 } }
  assert.equal(echoWestConsistent(good), true)
  // the positive faces the world's own east-of-origin coords hold
  assert.equal(echoWestConsistent({ back: { minEchoX: 0 }, prev: { minEchoX: 5 }, cur: { minEchoX: 12 } }), true)
  assert.equal(echoWestConsistent(null), false)
  assert.equal(echoWestConsistent('junk'), false)
  assert.equal(echoWestConsistent({}), false)
  assert.equal(echoWestConsistent({ back: { minEchoX: -149 }, prev: { minEchoX: -151 } }), false)
  assert.equal(echoWestConsistent({ back: { minEchoX: -149.5 }, prev: { minEchoX: -151 }, cur: { minEchoX: -152 } }), false)
  assert.equal(echoWestConsistent({ back: { minEchoX: '-149' }, prev: { minEchoX: -151 }, cur: { minEchoX: -152 } }), false)
})

test('v0.976.309 row: the REAL W5 swing byte-exact and the W1 fade', () => {
  // the REAL W5 swing the arc's tail holds (F496 -157 -> F498 -143 ->
  // F500 -155 - the .306 word's own east-edge W5 the mirror rides)
  const w5 = echoWestTrendRow({ back: { minEchoX: -157 }, prev: { minEchoX: -143 }, cur: { minEchoX: -155 } })
  assert.equal(w5, "the server trend (v0.976.309): the setblock echo's own west edge swing - -157 -> -143 (+14) -> -155 (-12) - the builders traded between the faces, (the .306 echoeast word keeps the same echo envelope's east edge seat - the west edge's own mirror sibling hand (its census returns the X maximum, never the floor), the .304 echoheight word keeps the same envelope's Y ceiling seat and the echoes count side-car, the .307 echofloor word keeps the same envelope's Y floor seat, the .305 echoedge word keeps the same envelope's north edge seat (the Z minimum), the .308 echosouth word keeps the same envelope's south edge seat (the Z maximum), the .292 fill word keeps the 'Successfully filled' volume lane and the .296 refusal word keeps the 'Could not set the block' lane and the .295 desync word keeps the destroy mismatch seat, the .278 advancement word keeps the same console's own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the deathcause module keeps the join/leave/death lines - the echo west edge's row alone, co-existence by seat never by duplication)")
  // the REAL W1 fade the arc's own birth window holds (F492 -149 ->
  // F493 -151 -> F494 -152)
  const w1 = echoWestTrendRow({ back: { minEchoX: -149 }, prev: { minEchoX: -151 }, cur: { minEchoX: -152 } })
  assert.match(w1, /west edge fade ran two steps deep - -149 -> -151 \(-2\) -> -152 \(-1\) - the builders withdrew west/)
  // the W2 fade (F493 -151 -> F494 -152 -> F495 -157)
  const w2 = echoWestTrendRow({ back: { minEchoX: -151 }, prev: { minEchoX: -152 }, cur: { minEchoX: -157 } })
  assert.match(w2, /west edge fade ran two steps deep - -151 -> -152 \(-1\) -> -157 \(-5\)/)
})

test('v0.976.309 row: the held law and the three-face zero and the fence fail', () => {
  // the REAL held steps the arc holds (W3 -152 -> -157 -> -157 and
  // W4 -157 -> -157 -> -143) - the honest silence (the family's own
  // held law)
  assert.equal(echoWestTrendRow({ back: { minEchoX: -152 }, prev: { minEchoX: -157 }, cur: { minEchoX: -157 } }), null)
  assert.equal(echoWestTrendRow({ back: { minEchoX: -157 }, prev: { minEchoX: -157 }, cur: { minEchoX: -143 } }), null)
  // the three-face zero - the lawful silence (the zeros never invent)
  assert.equal(echoWestTrendRow({ back: { minEchoX: 0 }, prev: { minEchoX: 0 }, cur: { minEchoX: 0 } }), null)
  // the fence fail - the honest null
  assert.equal(echoWestTrendRow(null), null)
  assert.equal(echoWestTrendRow({ back: { minEchoX: -149.5 }, prev: { minEchoX: -151 }, cur: { minEchoX: -152 } }), null)
})
