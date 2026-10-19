import { test } from 'node:test'
import assert from 'node:assert/strict'
import { disconnectCensus, disconnectConsistent, disconnectTrendRow } from '../../src/lib/disconnecttrend.mjs'

// the REAL lines the faces carry (runs 39292950372-adjacent F496-F497,
// 39303149973 F498, 39309831696 F499, 39314160850 F500, 39319100730
// F501, 39327612804 F502, 39338489283 F504 - the byte-exact prints the
// vanilla server's own disconnect handler spoke)

test('v0.976.310 census: the REAL lines byte-exact and the disconnect prices', () => {
  // F502's own face - the drop line the arc's W5 swing rides
  const f502 = [
    '[21:45:39] [Server thread/INFO]: F13 lost connection: Disconnected',
    '[21:40:55] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[21:45:52] [Server thread/INFO]: F2 lost connection: Disconnected'
  ]
  assert.deepEqual(disconnectCensus(f502), { disconnects: 3 })
  // F501's own face - the mix face the sibling reason shares (the
  // Timed out bytes the merge fold blends, the count never rides them)
  const f501 = [
    '[20:45:17] [Server thread/INFO]: F1 lost connection: Disconnected',
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out',
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected'
  ]
  assert.deepEqual(disconnectCensus(f501), { disconnects: 2 })
  // the dup reason clause never rides - the dupclock word's own class
  const dupMix = [
    '[21:24:36] [Server thread/INFO]: F3 lost connection: You logged in from another location',
    '[21:45:39] [Server thread/INFO]: F13 lost connection: Disconnected'
  ]
  assert.deepEqual(disconnectCensus(dupMix), { disconnects: 1 })
  // the count rides whole - the .232 count law (the count never caps)
  const many = []
  for (let i = 0; i < 52; i++) many.push('[18:44:07] [Server thread/INFO]: F' + ((i % 19) + 1) + ' lost connection: Disconnected')
  assert.deepEqual(disconnectCensus(many), { disconnects: 52 })
  // the sibling lanes never ride - death and fill and refusal lines
  const siblings = [
    '[21:45:39] [Server thread/INFO]: F13 died',
    '[21:45:40] [Server thread/INFO]: Successfully filled 1537 block(s)',
    '[21:45:41] [Server thread/INFO]: Could not set the block',
    '[21:45:39] [Server thread/INFO]: F13 lost connection: Disconnected'
  ]
  assert.deepEqual(disconnectCensus(siblings), { disconnects: 1 })
})

test('v0.976.310 census: the junk faces stay honest', () => {
  assert.equal(disconnectCensus(null), null)
  assert.equal(disconnectCensus('junk'), null)
  assert.equal(disconnectCensus(42), null)
  assert.deepEqual(disconnectCensus([]), { disconnects: 0 })
  assert.deepEqual(disconnectCensus(['total junk', '']), { disconnects: 0 })
  assert.deepEqual(disconnectCensus([null, 7, undefined]), { disconnects: 0 })
})

test('v0.976.310 near-miss skins: twelve forms the grammar refuses', () => {
  const refuses = [
    // the bot-tagged prefix - the fleet log's own skin, the server
    // console never wears it
    '[F1] [21:45:39] F13 lost connection: Disconnected',
    // the dup reason clause - the dupclock word's own seat
    '[21:24:36] [Server thread/INFO]: F3 lost connection: You logged in from another location',
    // the Timed out sibling reason - the merge fold's own remaining bytes
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out',
    // the WARN frame
    '[21:45:39] [Server thread/WARN]: F13 lost connection: Disconnected',
    // the pretty spacing
    '[21:45:39] [Server thread/INFO]: F13  lost connection: Disconnected',
    // the missing reason clause
    '[21:45:39] [Server thread/INFO]: F13 lost connection',
    // the plural body the grammar never prices
    '[21:45:39] [Server thread/INFO]: F13 lost connections: Disconnected',
    // the altered verb
    '[21:45:39] [Server thread/INFO]: F13 lost a connection: Disconnected',
    // the leading whitespace
    ' [21:45:39] [Server thread/INFO]: F13 lost connection: Disconnected',
    // the trailing junk
    '[21:45:39] [Server thread/INFO]: F13 lost connection: Disconnected done',
    // the CR tail
    '[21:45:39] [Server thread/INFO]: F13 lost connection: Disconnected\r',
    // the one-digit hour skin
    '[7:45:39] [Server thread/INFO]: F13 lost connection: Disconnected'
  ]
  for (const line of refuses) {
    assert.deepEqual(disconnectCensus([line]), { disconnects: 0 }, `refused: ${line}`)
  }
})

test('v0.976.310 fence: every branch on the non-negative domain', () => {
  const good = { back: { disconnects: 27 }, prev: { disconnects: 23 }, cur: { disconnects: 52 } }
  assert.equal(disconnectConsistent(good), true)
  // the zero face the loss-free log holds - the fence keeps it
  assert.equal(disconnectConsistent({ back: { disconnects: 0 }, prev: { disconnects: 0 }, cur: { disconnects: 30 } }), true)
  assert.equal(disconnectConsistent(null), false)
  assert.equal(disconnectConsistent('junk'), false)
  assert.equal(disconnectConsistent({}), false)
  assert.equal(disconnectConsistent({ back: { disconnects: 27 }, prev: { disconnects: 23 } }), false)
  // the negative count the count law never holds
  assert.equal(disconnectConsistent({ back: { disconnects: -1 }, prev: { disconnects: 23 }, cur: { disconnects: 52 } }), false)
  assert.equal(disconnectConsistent({ back: { disconnects: 27.5 }, prev: { disconnects: 23 }, cur: { disconnects: 52 } }), false)
  assert.equal(disconnectConsistent({ back: { disconnects: '27' }, prev: { disconnects: 23 }, cur: { disconnects: 52 } }), false)
})

test('v0.976.310 row: the REAL W1 swing byte-exact and the W3 swing', () => {
  // the REAL W1 swing the arc's birth window holds (F496 27 -> F497
  // 23 -> F498 52 - the widest trade the seven windows hold)
  const w1 = disconnectTrendRow({ back: { disconnects: 27 }, prev: { disconnects: 23 }, cur: { disconnects: 52 } })
  assert.equal(w1, "the server trend (v0.976.310): the lost connection's own disconnect swing - 27 -> 23 (-4) -> 52 (+29) - the server traded its drops between the faces, (the dupclock word keeps the churn lane's own duplicate-loss seat (its v0.741.0 echo fold counts the non-dup bytes as one merge mass - otherLosses, the echo byBot, the midrun and shutdown split - this word prices the Disconnected reason alone, co-existence by reason class never by duplication), the deathcause word keeps the death lane (its lost-connection guard a refusal never a price), the kick bill keeps the fleet log's own event cells, the 'Timed out' sibling reason keeps the merge fold's own remaining bytes (F501's face rode 17 - a lane the tail names and never prices), the .278 advancement word keeps the same console's own achievement seat, the gc band keeps the [gc] lane, the deathcause module keeps the join/leave lines - the disconnect's row alone, co-existence by seat never by duplication)")
  // the REAL W3 swing the arc's middle holds (F498 52 -> F499 24 ->
  // F500 29)
  const w3 = disconnectTrendRow({ back: { disconnects: 52 }, prev: { disconnects: 24 }, cur: { disconnects: 29 } })
  assert.match(w3, /disconnect swing - 52 -> 24 \(-28\) -> 29 \(\+5\)/)
  // the REAL W5 swing the arc's tail holds (F500 29 -> F501 22 ->
  // F502 30)
  const w5 = disconnectTrendRow({ back: { disconnects: 29 }, prev: { disconnects: 22 }, cur: { disconnects: 30 } })
  assert.match(w5, /disconnect swing - 29 -> 22 \(-7\) -> 30 \(\+8\)/)
  // the fade and swell branches the arc's all-swing-and-held birth
  // never rode - the synthetic faces the branch law prices
  const fade = disconnectTrendRow({ back: { disconnects: 40 }, prev: { disconnects: 30 }, cur: { disconnects: 20 } })
  assert.match(fade, /disconnect fade ran two steps deep - 40 -> 30 \(-10\) -> 20 \(-10\) - the server held its clients/)
  const swell = disconnectTrendRow({ back: { disconnects: 20 }, prev: { disconnects: 30 }, cur: { disconnects: 41 } })
  assert.match(swell, /disconnect swell ran two steps deep - 20 -> 30 \(\+10\) -> 41 \(\+11\) - the server dropped more each face/)
})

test('v0.976.310 row: the held law and the three-face zero and the fence fail', () => {
  // the REAL W6 held step - the honest silence (F501 22 -> F502 30 ->
  // F504 30 - the tail the arc holds)
  assert.equal(disconnectTrendRow({ back: { disconnects: 22 }, prev: { disconnects: 30 }, cur: { disconnects: 30 } }), null)
  // the held step the synthetic faces hold - the family's own held law
  assert.equal(disconnectTrendRow({ back: { disconnects: 27 }, prev: { disconnects: 27 }, cur: { disconnects: 52 } }), null)
  // the three-face zero - the lawful silence (the zeros never invent)
  assert.equal(disconnectTrendRow({ back: { disconnects: 0 }, prev: { disconnects: 0 }, cur: { disconnects: 0 } }), null)
  // the fence fail - the honest null
  assert.equal(disconnectTrendRow(null), null)
  assert.equal(disconnectTrendRow({ back: { disconnects: 27.5 }, prev: { disconnects: 23 }, cur: { disconnects: 52 } }), null)
  assert.equal(disconnectTrendRow({ back: { disconnects: -1 }, prev: { disconnects: 23 }, cur: { disconnects: 52 } }), null)
})
