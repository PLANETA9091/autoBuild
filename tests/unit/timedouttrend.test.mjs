import { test } from 'node:test'
import assert from 'node:assert/strict'
import { timedoutCensus, timedoutConsistent, timedoutTrendRow } from '../../src/lib/timedouttrend.mjs'

// the REAL lines the faces carry (39319100730 F501, 39341992087 F505 -
// the byte-exact prints the vanilla server's own timed-out handler
// spoke; the nine-face arc the census hand mined: F496 39287423190,
// F497 39296753535, F498 39303149973, F499 39309831696, F500
// 39314160850, F501 17, F502 39327612804, F504 39338489283, F505 17 -
// the F503 face 39334531367 the sibling set's own skip holds,
// byte-verified 0)

test('v0.976.311 census: the REAL lines byte-exact and the timed out prices', () => {
  // F501's own face - the mix face the sibling reason shares (the
  // Disconnected bytes the .310 word prices, the count never rides them)
  const f501 = [
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out',
    '[20:46:41] [Server thread/INFO]: F9 lost connection: Timed out',
    '[20:46:43] [Server thread/INFO]: F15 lost connection: Timed out',
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:46:43] [Server thread/INFO]: F10 lost connection: Timed out',
    '[20:45:17] [Server thread/INFO]: F1 lost connection: Disconnected',
    '[20:46:45] [Server thread/INFO]: F16 lost connection: Timed out',
    '[20:46:46] [Server thread/INFO]: F5 lost connection: Timed out'
  ]
  assert.deepEqual(timedoutCensus(f501), { timedouts: 6 })
  // F505's own face - the re-voice the variant cell's law holds (the
  // fire-0743 condition: the F505+ face re-voices the lane)
  const f505 = [
    '[23:50:45] [Server thread/INFO]: F5 lost connection: Timed out',
    '[23:50:46] [Server thread/INFO]: F11 lost connection: Timed out',
    '[23:50:48] [Server thread/INFO]: F6 lost connection: Timed out'
  ]
  assert.deepEqual(timedoutCensus(f505), { timedouts: 3 })
  // the dup reason clause never rides - the dupclock word's own class
  const dupMix = [
    '[21:24:36] [Server thread/INFO]: F3 lost connection: You logged in from another location',
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out'
  ]
  assert.deepEqual(timedoutCensus(dupMix), { timedouts: 1 })
  // the count rides whole - the .232 count law (the count never caps)
  const many = []
  for (let i = 0; i < 17; i++) many.push('[20:46:41] [Server thread/INFO]: F' + ((i % 19) + 1) + ' lost connection: Timed out')
  assert.deepEqual(timedoutCensus(many), { timedouts: 17 })
  // the sibling lanes never ride - death and fill and refusal lines
  const siblings = [
    '[21:45:39] [Server thread/INFO]: F13 died',
    '[21:45:40] [Server thread/INFO]: Successfully filled 1537 block(s)',
    '[21:45:41] [Server thread/INFO]: Could not set the block',
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out'
  ]
  assert.deepEqual(timedoutCensus(siblings), { timedouts: 1 })
})

test('v0.976.311 census: the junk faces stay honest', () => {
  assert.equal(timedoutCensus(null), null)
  assert.equal(timedoutCensus('junk'), null)
  assert.equal(timedoutCensus(42), null)
  assert.deepEqual(timedoutCensus([]), { timedouts: 0 })
  assert.deepEqual(timedoutCensus(['total junk', '']), { timedouts: 0 })
  assert.deepEqual(timedoutCensus([null, 7, undefined]), { timedouts: 0 })
})

test('v0.976.311 near-miss skins: twelve forms the grammar refuses', () => {
  const refuses = [
    // the Disconnected sibling clause - the .310 word's own seat
    '[21:45:39] [Server thread/INFO]: F13 lost connection: Disconnected',
    // the bot-tagged prefix - the fleet log's own skin, the server
    // console never wears it
    '[F1] [20:46:41] F3 lost connection: Timed out',
    // the dup reason clause - the dupclock word's own seat
    '[21:24:36] [Server thread/INFO]: F3 lost connection: You logged in from another location',
    // the WARN frame
    '[20:46:41] [Server thread/WARN]: F3 lost connection: Timed out',
    // the pretty spacing
    '[20:46:41] [Server thread/INFO]: F3  lost connection: Timed out',
    // the missing reason clause
    '[20:46:41] [Server thread/INFO]: F3 lost connection',
    // the plural body the grammar never prices
    '[20:46:41] [Server thread/INFO]: F3 lost connections: Timed out',
    // the altered verb
    '[20:46:41] [Server thread/INFO]: F3 lost a connection: Timed out',
    // the leading whitespace
    ' [20:46:41] [Server thread/INFO]: F3 lost connection: Timed out',
    // the trailing junk
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out done',
    // the CR tail
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out\r',
    // the one-digit hour skin
    '[8:46:41] [Server thread/INFO]: F3 lost connection: Timed out'
  ]
  for (const line of refuses) {
    assert.deepEqual(timedoutCensus([line]), { timedouts: 0 }, `refused: ${line}`)
  }
})

test('v0.976.311 fence: every branch on the non-negative domain', () => {
  const good = { back: { timedouts: 0 }, prev: { timedouts: 17 }, cur: { timedouts: 0 } }
  assert.equal(timedoutConsistent(good), true)
  // the zero face the loss-free log holds - the fence keeps it
  assert.equal(timedoutConsistent({ back: { timedouts: 0 }, prev: { timedouts: 0 }, cur: { timedouts: 0 } }), true)
  assert.equal(timedoutConsistent(null), false)
  assert.equal(timedoutConsistent('junk'), false)
  assert.equal(timedoutConsistent({}), false)
  assert.equal(timedoutConsistent({ back: { timedouts: 0 }, prev: { timedouts: 17 } }), false)
  // the negative count the count law never holds
  assert.equal(timedoutConsistent({ back: { timedouts: -1 }, prev: { timedouts: 17 }, cur: { timedouts: 0 } }), false)
  assert.equal(timedoutConsistent({ back: { timedouts: 0.5 }, prev: { timedouts: 17 }, cur: { timedouts: 0 } }), false)
  assert.equal(timedoutConsistent({ back: { timedouts: '0' }, prev: { timedouts: 17 }, cur: { timedouts: 0 } }), false)
})

test('v0.976.311 row: the REAL W5 swing byte-exact and the synthetic branches', () => {
  // the REAL W5 swing the arc's birth window holds (F500 0 -> F501 17
  // -> F502 0 - the only speaking window the nine-face arc carries)
  const w5 = timedoutTrendRow({ back: { timedouts: 0 }, prev: { timedouts: 17 }, cur: { timedouts: 0 } })
  assert.equal(w5, "the server trend (v0.976.311): the lost connection's own Timed out swing - 0 -> 17 (+17) -> 0 (-17) - the server traded its stalled drops between the faces, (the .310 disconnect word keeps the Disconnected reason seat (the same frame's own sibling hand - the reason class the merge fold held split the same lane, co-existence by reason clause never by duplication), the rescue timeout word (v0.976.69) keeps the fleet log's own budget-expiry seat (the still-wet walks' own burn - a different book the timeout name family holds), the dupclock word keeps the churn lane's own duplicate-loss seat (its v0.741.0 echo fold counts the non-dup bytes as one merge mass - this word prices the Timed out reason alone), the deathcause word keeps the death lane (its lost-connection guard a refusal never a price), the kick bill keeps the fleet log's own event cells, the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the deathcause module keeps the join/leave lines - the timed out row alone, co-existence by seat never by duplication)")
  // the fade and swell branches the arc's one-swing birth never rode -
  // the synthetic faces the branch law prices
  const fade = timedoutTrendRow({ back: { timedouts: 30 }, prev: { timedouts: 20 }, cur: { timedouts: 10 } })
  assert.match(fade, /Timed out fade ran two steps deep - 30 -> 20 \(-10\) -> 10 \(-10\) - the server timed its clients out less each face/)
  const swell = timedoutTrendRow({ back: { timedouts: 10 }, prev: { timedouts: 20 }, cur: { timedouts: 31 } })
  assert.match(swell, /Timed out swell ran two steps deep - 10 -> 20 \(\+10\) -> 31 \(\+11\) - the server timed its clients out more each face/)
})

test('v0.976.311 row: the held law and the three-face zero and the fence fail', () => {
  // the REAL W4 held step - the honest silence (F499 0 -> F500 0 ->
  // F501 17 - the swell the first step never speaks)
  assert.equal(timedoutTrendRow({ back: { timedouts: 0 }, prev: { timedouts: 0 }, cur: { timedouts: 17 } }), null)
  // the REAL W6 held step - the honest silence (F501 17 -> F502 0 ->
  // F504 0)
  assert.equal(timedoutTrendRow({ back: { timedouts: 17 }, prev: { timedouts: 0 }, cur: { timedouts: 0 } }), null)
  // the REAL W7 held step - the honest silence (F502 0 -> F504 0 ->
  // F505 17 - the re-voice the first step never speaks)
  assert.equal(timedoutTrendRow({ back: { timedouts: 0 }, prev: { timedouts: 0 }, cur: { timedouts: 17 } }), null)
  // the three-face zero - the lawful silence (the W1-W3 windows the
  // zeros hold)
  assert.equal(timedoutTrendRow({ back: { timedouts: 0 }, prev: { timedouts: 0 }, cur: { timedouts: 0 } }), null)
  // the fence fail - the honest null
  assert.equal(timedoutTrendRow(null), null)
  assert.equal(timedoutTrendRow({ back: { timedouts: 0.5 }, prev: { timedouts: 17 }, cur: { timedouts: 0 } }), null)
  assert.equal(timedoutTrendRow({ back: { timedouts: -1 }, prev: { timedouts: 17 }, cur: { timedouts: 0 } }), null)
})
