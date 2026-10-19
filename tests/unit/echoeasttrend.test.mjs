import { test } from 'node:test'
import assert from 'node:assert/strict'
import { echoEastCensus, echoEastConsistent, echoEastTrendRow } from '../../src/lib/echoeasttrend.mjs'

// the REAL lines the faces carry (run 39255972997 F492, run 39281865630
// F495, run 39303149973 F498 - the byte-exact prints the vanilla
// server's own setblock handler spoke)

test('v0.976.306 census: the REAL lines byte-exact and the east edge prices', () => {
  // F492's own face - the east edge line the arc's first face held
  // (X -101 the maximum the 152 echoes reached, the min -149 the west
  // hand never this word's price)
  const f492 = [
    '[13:11:13] [Server thread/INFO]: Changed the block at -101, 77, 392',
    '[13:11:13] [Server thread/INFO]: Changed the block at -149, 73, 386',
    '[13:11:14] [Server thread/INFO]: Changed the block at -120, 74, 395'
  ]
  assert.deepEqual(echoEastCensus(f492), { maxEchoX: -101 })
  // F495's own face - the east edge -109 the west edge -157 the same
  // face's envelope holds (the span 48 the constant the sibling law
  // rides)
  const f495 = [
    '[16:11:21] [Server thread/INFO]: Changed the block at -109, 75, 402',
    '[16:11:30] [Server thread/INFO]: Changed the block at -157, 75, 402',
    '[16:11:22] [Server thread/INFO]: Changed the block at -130, 76, 410'
  ]
  assert.deepEqual(echoEastCensus(f495), { maxEchoX: -109 })
  // F498's own face - the east edge -95 the arc's own swing peak
  const f498 = [
    '[18:43:55] [Server thread/INFO]: Changed the block at -95, 86, 392',
    '[18:43:56] [Server thread/INFO]: Changed the block at -143, 82, 386'
  ]
  assert.deepEqual(echoEastCensus(f498), { maxEchoX: -95 })
  // the sibling lanes never ride - the fill and refusal lines the
  // .292/.296 words' own seats keep
  const siblings = [
    '[13:11:22] [Server thread/INFO]: Successfully filled 1537 block(s)',
    '[13:11:23] [Server thread/INFO]: Could not set the block',
    '[13:11:24] [Server thread/INFO]: Changed the block at -101, 77, 392'
  ]
  assert.deepEqual(echoEastCensus(siblings), { maxEchoX: -101 })
})

test('v0.976.306 census: the junk faces stay honest', () => {
  assert.equal(echoEastCensus(null), null)
  assert.equal(echoEastCensus('junk'), null)
  assert.equal(echoEastCensus(42), null)
  assert.deepEqual(echoEastCensus([]), { maxEchoX: 0 })
  assert.deepEqual(echoEastCensus(['total junk', '']), { maxEchoX: 0 })
  assert.deepEqual(echoEastCensus([null, 7, undefined]), { maxEchoX: 0 })
})

test('v0.976.306 near-miss skins: twelve forms the grammar refuses', () => {
  const refuses = [
    // the bot-tagged prefix the fleet's own chatter wears
    '[F1] [13:11:22] Changed the block at -101, 77, 392',
    // the WARN frame the .295 desync word's own lane
    '[13:11:22] [Server thread/WARN]: Changed the block at -101, 77, 392',
    // the pretty spacing
    '[13:11:22] [Server thread/INFO]: Changed the block at -101,  77, 392',
    // the plural body
    '[13:11:22] [Server thread/INFO]: Changed the blocks at -101, 77, 392',
    // the altered verb
    '[13:11:22] [Server thread/INFO]: Placed the block at -101, 77, 392',
    // the missing coord cell
    '[13:11:22] [Server thread/INFO]: Changed the block at -101, 77',
    // the float coord
    '[13:11:22] [Server thread/INFO]: Changed the block at -101.5, 77, 392',
    // the leading-zero coord
    '[13:11:22] [Server thread/INFO]: Changed the block at -101, 077, 392',
    // the plus coord
    '[13:11:22] [Server thread/INFO]: Changed the block at +95, 77, 392',
    // the leading whitespace
    ' [13:11:22] [Server thread/INFO]: Changed the block at -101, 77, 392',
    // the trailing junk
    '[13:11:22] [Server thread/INFO]: Changed the block at -101, 77, 392 junk',
    // the CR tail
    '[13:11:22] [Server thread/INFO]: Changed the block at -101, 77, 392\r'
  ]
  for (const l of refuses) {
    assert.deepEqual(echoEastCensus([l]), { maxEchoX: 0 }, `refused: ${l}`)
  }
})

test('v0.976.306 fence: every branch prices', () => {
  const face = { maxEchoX: -101 }
  assert.equal(echoEastConsistent(null), false)
  assert.equal(echoEastConsistent('junk'), false)
  assert.equal(echoEastConsistent({ back: face, prev: face }), false)
  assert.equal(echoEastConsistent({ back: face, prev: face, cur: face }), true)
  assert.equal(echoEastConsistent({ back: { maxEchoX: -1.5 }, prev: face, cur: face }), false)
  assert.equal(echoEastConsistent({ back: { maxEchoX: Infinity }, prev: face, cur: face }), false)
  assert.equal(echoEastConsistent({ back: face, prev: { maxEchoX: NaN }, cur: face }), false)
  assert.equal(echoEastConsistent({ back: face, prev: face, cur: { maxEchoX: 0 } }), true)
  assert.equal(echoEastConsistent({ back: face, prev: face, cur: { maxEchoX: -95 } }), true)
})

test('v0.976.306 shape: the REAL W5 swing byte-exact (-109 -> -95 -> -107)', () => {
  const f495 = { maxEchoX: -109 }
  const f498 = { maxEchoX: -95 }
  const f500 = { maxEchoX: -107 }
  assert.equal(
    echoEastTrendRow({ back: f495, prev: f498, cur: f500 }),
    'the server trend (v0.976.306): the setblock echo\'s own east edge swing - -109 -> -95 (+14) -> -107 (-12) - the builders traded between the faces, (the .305 echoedge word keeps the same echo envelope\'s north edge seat (its census returns the Z minimum - the X edge never its price), the .304 echoheight word keeps the same envelope\'s Y ceiling seat and the echoes count side-car, the .292 fill word keeps the \'Successfully filled\' volume lane and the .296 refusal word keeps the \'Could not set the block\' lane and the .295 desync word keeps the destroy mismatch seat, the .278 advancement word keeps the same console\'s own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the deathcause module keeps the join/leave/death lines - the echo east edge\'s row alone, co-existence by seat never by duplication)'
  )
  // the W1 fade byte-exact (-101 -> -103 -> -104)
  const w1 = echoEastTrendRow({ back: { maxEchoX: -101 }, prev: { maxEchoX: -103 }, cur: { maxEchoX: -104 } })
  assert.ok(w1.includes('the setblock echo\'s own east edge fade ran two steps deep - -101 -> -103 (-2) -> -104 (-1) - the builders withdrew west'))
})

test('v0.976.306 shape: the swell and the held law and the three-face zero', () => {
  const tail = "the .305 echoedge word keeps the same echo envelope's north edge seat"
  // the synthesized swell byte-exact
  const swell = echoEastTrendRow({ back: { maxEchoX: -109 }, prev: { maxEchoX: -100 }, cur: { maxEchoX: -95 } })
  assert.ok(swell.startsWith('the server trend (v0.976.306): the setblock echo\'s own east edge swell ran two steps deep - -109 -> -100 (+9) -> -95 (+5) - the builders pressed east'))
  assert.ok(swell.includes(tail))
  // the held step - the honest silence (the REAL W3/W4 the arc holds)
  assert.equal(echoEastTrendRow({ back: { maxEchoX: -109 }, prev: { maxEchoX: -109 }, cur: { maxEchoX: -95 } }), null)
  assert.equal(echoEastTrendRow({ back: { maxEchoX: -104 }, prev: { maxEchoX: -109 }, cur: { maxEchoX: -109 } }), null)
  // the three-face zero - the lawful silence keeps
  assert.equal(echoEastTrendRow({ back: { maxEchoX: 0 }, prev: { maxEchoX: 0 }, cur: { maxEchoX: 0 } }), null)
  // the fence fail - the honest null
  assert.equal(echoEastTrendRow(null), null)
  assert.equal(echoEastTrendRow({ back: { maxEchoX: -1.5 }, prev: { maxEchoX: -100 }, cur: { maxEchoX: -95 } }), null)
})
