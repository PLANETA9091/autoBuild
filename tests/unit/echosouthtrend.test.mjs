import { test } from 'node:test'
import assert from 'node:assert/strict'
import { echoSouthCensus, echoSouthConsistent, echoSouthTrendRow } from '../../src/lib/echosouthtrend.mjs'

// the REAL lines the faces carry (run 39292950372-adjacent F496 and
// F497, run 39303149973 F498, run 39309831696 F499, run 39314160850
// F500, run 39319100730 F501, run 39327612804 F502 - the byte-exact
// prints the vanilla server's own setblock handler spoke)

test('v0.976.308 census: the REAL lines byte-exact and the south edge prices', () => {
  // F498's own face - the south edge 414 the arc's W3 swing rides
  // (the 152 echoes' furthest Z the face held)
  const f498 = [
    '[18:44:05] [Server thread/INFO]: Changed the block at -139, 81, 414',
    '[18:44:06] [Server thread/INFO]: Changed the block at -121, 77, 386'
  ]
  assert.deepEqual(echoSouthCensus(f498), { maxEchoZ: 414 })
  // F499's own face - the south edge 422 the W4 fade-side face rides
  const f499 = [
    '[19:32:14] [Server thread/INFO]: Changed the block at -154, 71, 422',
    '[19:32:15] [Server thread/INFO]: Changed the block at -128, 77, 394'
  ]
  assert.deepEqual(echoSouthCensus(f499), { maxEchoZ: 422 })
  // F496's own face - the south edge 423 the W1 swing's back face holds
  const f496 = [
    '[16:57:27] [Server thread/INFO]: Changed the block at -153, 71, 423',
    '[16:57:28] [Server thread/INFO]: Changed the block at -109, 75, 395'
  ]
  assert.deepEqual(echoSouthCensus(f496), { maxEchoZ: 423 })
  // F502's own face - the south edge 408 the arc's tail the W5 swing rides
  const f502 = [
    '[21:40:53] [Server thread/INFO]: Changed the block at -147, 72, 408',
    '[21:40:44] [Server thread/INFO]: Changed the block at -121, 77, 386'
  ]
  assert.deepEqual(echoSouthCensus(f502), { maxEchoZ: 408 })
  // the sibling lanes never ride - the fill and refusal lines the
  // .292/.296 words' own seats keep
  const siblings = [
    '[18:44:05] [Server thread/INFO]: Successfully filled 1537 block(s)',
    '[18:44:06] [Server thread/INFO]: Could not set the block',
    '[18:44:07] [Server thread/INFO]: Changed the block at -121, 77, 386'
  ]
  assert.deepEqual(echoSouthCensus(siblings), { maxEchoZ: 386 })
})

test('v0.976.308 census: the junk faces stay honest', () => {
  assert.equal(echoSouthCensus(null), null)
  assert.equal(echoSouthCensus('junk'), null)
  assert.equal(echoSouthCensus(42), null)
  assert.deepEqual(echoSouthCensus([]), { maxEchoZ: 0 })
  assert.deepEqual(echoSouthCensus(['total junk', '']), { maxEchoZ: 0 })
  assert.deepEqual(echoSouthCensus([null, 7, undefined]), { maxEchoZ: 0 })
})

test('v0.976.308 near-miss skins: twelve forms the grammar refuses', () => {
  const refuses = [
    // the bot-tagged prefix the fleet's own chatter wears
    '[F1] [18:44:05] Changed the block at -139, 81, 414',
    // the WARN frame the .295 desync word's own lane
    '[18:44:05] [Server thread/WARN]: Changed the block at -139, 81, 414',
    // the pretty spacing
    '[18:44:05] [Server thread/INFO]: Changed the block at -139,  81, 414',
    // the plural body the grammar never prices
    '[18:44:05] [Server thread/INFO]: Changed the blocks at -139, 81, 414',
    // the altered verb
    '[18:44:05] [Server thread/INFO]: Changed a block at -139, 81, 414',
    // the missing coord cell
    '[18:44:05] [Server thread/INFO]: Changed the block at -139, 81',
    // the float coord
    '[18:44:05] [Server thread/INFO]: Changed the block at -139, 81, 414.5',
    // the leading-zero coord (the .248 house law)
    '[18:44:05] [Server thread/INFO]: Changed the block at -139, 81, 0414',
    // the plus coord (the .248 house law)
    '[18:44:05] [Server thread/INFO]: Changed the block at -139, 81, +414',
    // the leading whitespace
    ' [18:44:05] [Server thread/INFO]: Changed the block at -139, 81, 414',
    // the trailing junk
    '[18:44:05] [Server thread/INFO]: Changed the block at -139, 81, 414 done',
    // the CR tail
    '[18:44:05] [Server thread/INFO]: Changed the block at -139, 81, 414\r'
  ]
  for (const line of refuses) {
    assert.deepEqual(echoSouthCensus([line]), { maxEchoZ: 0 }, `refused: ${line}`)
  }
})

test('v0.976.308 fence: every branch on the signed domain', () => {
  const good = { back: { maxEchoZ: 414 }, prev: { maxEchoZ: 422 }, cur: { maxEchoZ: 408 } }
  assert.equal(echoSouthConsistent(good), true)
  // the negative faces the world's own coords hold - the .295 coord
  // law's own signed domain (a south edge below the origin the law
  // never refuses)
  assert.equal(echoSouthConsistent({ back: { maxEchoZ: -64 }, prev: { maxEchoZ: 0 }, cur: { maxEchoZ: 408 } }), true)
  assert.equal(echoSouthConsistent(null), false)
  assert.equal(echoSouthConsistent('junk'), false)
  assert.equal(echoSouthConsistent({}), false)
  assert.equal(echoSouthConsistent({ back: { maxEchoZ: 414 }, prev: { maxEchoZ: 422 } }), false)
  assert.equal(echoSouthConsistent({ back: { maxEchoZ: 414.5 }, prev: { maxEchoZ: 422 }, cur: { maxEchoZ: 408 } }), false)
  assert.equal(echoSouthConsistent({ back: { maxEchoZ: '414' }, prev: { maxEchoZ: 422 }, cur: { maxEchoZ: 408 } }), false)
})

test('v0.976.308 row: the REAL W3 swing byte-exact and the W1 swing', () => {
  // the REAL W3 swing the arc's middle holds (F498 414 -> F499 422 ->
  // F500 408 - the widest trade the five windows hold)
  const w3 = echoSouthTrendRow({ back: { maxEchoZ: 414 }, prev: { maxEchoZ: 422 }, cur: { maxEchoZ: 408 } })
  assert.equal(w3, "the server trend (v0.976.308): the setblock echo's own south edge swing - 414 -> 422 (+8) -> 408 (-14) - the builders traded between the faces, (the .305 echoedge word keeps the same echo envelope's north edge seat (the Z minimum - the south edge's own sibling hand the same Z cell holds), the .304 echoheight word keeps the same envelope's Y ceiling seat and the echoes count side-car, the .306 echoeast word keeps the same envelope's east edge seat (the X maximum), the .307 echofloor word keeps the same envelope's floor seat (the Y minimum), the .292 fill word keeps the 'Successfully filled' volume lane and the .296 refusal word keeps the 'Could not set the block' lane and the .295 desync word keeps the destroy mismatch seat, the .278 advancement word keeps the same console's own achievement seat, the .281/.289/.290 gc words keep the [gc] band, the deathcause module keeps the join/leave/death lines - the echo south edge's row alone, co-existence by seat never by duplication)")
  // the REAL W1 swing the arc's own birth window holds (F496 423 ->
  // F497 424 -> F498 414)
  const w1 = echoSouthTrendRow({ back: { maxEchoZ: 423 }, prev: { maxEchoZ: 424 }, cur: { maxEchoZ: 414 } })
  assert.match(w1, /south edge swing - 423 -> 424 \(\+1\) -> 414 \(-10\)/)
  // the REAL W5 swing the arc's tail holds (F500 408 -> F501 412 ->
  // F502 408)
  const w5 = echoSouthTrendRow({ back: { maxEchoZ: 408 }, prev: { maxEchoZ: 412 }, cur: { maxEchoZ: 408 } })
  assert.match(w5, /south edge swing - 408 -> 412 \(\+4\) -> 408 \(-4\)/)
  // the fade and swell branches the arc's all-swing birth never rode -
  // the synthetic faces the branch law prices (a two-step withdraw
  // north the fade names, a two-step press south the swell names)
  const fade = echoSouthTrendRow({ back: { maxEchoZ: 420 }, prev: { maxEchoZ: 415 }, cur: { maxEchoZ: 410 } })
  assert.match(fade, /south edge fade ran two steps deep - 420 -> 415 \(-5\) -> 410 \(-5\) - the builders withdrew north/)
  const swell = echoSouthTrendRow({ back: { maxEchoZ: 400 }, prev: { maxEchoZ: 410 }, cur: { maxEchoZ: 421 } })
  assert.match(swell, /south edge swell ran two steps deep - 400 -> 410 \(\+10\) -> 421 \(\+11\) - the builders pressed south/)
})

test('v0.976.308 row: the held law and the three-face zero and the fence fail', () => {
  // the held step - the honest silence (the family's own held law;
  // the REAL five windows never held - every window traded)
  assert.equal(echoSouthTrendRow({ back: { maxEchoZ: 414 }, prev: { maxEchoZ: 414 }, cur: { maxEchoZ: 422 } }), null)
  assert.equal(echoSouthTrendRow({ back: { maxEchoZ: 422 }, prev: { maxEchoZ: 408 }, cur: { maxEchoZ: 408 } }), null)
  // the three-face zero - the lawful silence (the zeros never invent)
  assert.equal(echoSouthTrendRow({ back: { maxEchoZ: 0 }, prev: { maxEchoZ: 0 }, cur: { maxEchoZ: 0 } }), null)
  // the fence fail - the honest null
  assert.equal(echoSouthTrendRow(null), null)
  assert.equal(echoSouthTrendRow({ back: { maxEchoZ: 414.5 }, prev: { maxEchoZ: 422 }, cur: { maxEchoZ: 408 } }), null)
  // the REAL W2 swing the arc's second window holds (F497 424 ->
  // F498 414 -> F499 422)
  const w2 = echoSouthTrendRow({ back: { maxEchoZ: 424 }, prev: { maxEchoZ: 414 }, cur: { maxEchoZ: 422 } })
  assert.match(w2, /south edge swing - 424 -> 414 \(-10\) -> 422 \(\+8\)/)
  // the REAL W4 swing the arc's fourth window holds (F499 422 ->
  // F500 408 -> F501 412)
  const w4 = echoSouthTrendRow({ back: { maxEchoZ: 422 }, prev: { maxEchoZ: 408 }, cur: { maxEchoZ: 412 } })
  assert.match(w4, /south edge swing - 422 -> 408 \(-14\) -> 412 \(\+4\)/)
})
