import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loginCountCensus, loginCountConsistent, loginCountTrendRow } from '../../src/lib/logincounttrend.mjs'

// the REAL lines the faces carry (run 39319100730 F501, 39334531367
// F503, 39341992087 F505, 39349450602 F506 - the byte-exact prints the
// vanilla server's own acceptor spoke; the REAL six-face headcount arc
// the artifacts hold: F501 39, F502 30, F503 25, F504 30, F505 40,
// F506 37)

test('v0.976.314 census: the REAL lines byte-exact and the count prices', () => {
  // F501's own face - the first two joins the arc's W1 fade rides
  const f501 = [
    '[20:40:21] [Server thread/INFO]: YardSurvey[/127.0.0.1:48142] logged in with entity id 17 at (-129.5, 70.0, 398.5)',
    '[20:40:36] [Server thread/INFO]: F1[/127.0.0.1:52996] logged in with entity id 265 at (-123.5, 71.0, 389.5)'
  ]
  assert.deepEqual(loginCountCensus(f501), { logins: 2 })
  // F505's own face - the 40-login headcount face the W3 swell speaks
  // (the whole console re-counted 40 - the fieldproof mirror holds)
  const f505 = [
    '[23:44:07] [Server thread/INFO]: YardSurvey[/127.0.0.1:57116] logged in with entity id 9 at (-123.5, 66.0, 396.5)'
  ]
  assert.deepEqual(loginCountCensus(f505), { logins: 1 })
  // F506's own face - the newest face the arc's W4 swing rides (run
  // 39349450602, the .310 tree's own fleet)
  const f506 = [
    '[00:57:33] [Server thread/INFO]: YardSurvey[/127.0.0.1:52858] logged in with entity id 17 at (-129.5, 68.0, 404.5)'
  ]
  assert.deepEqual(loginCountCensus(f506), { logins: 1 })
  // F503's own face - the long-float coord skin the shape-only cells hold
  const f503 = [
    '[22:45:49] [Server thread/INFO]: F5[/127.0.0.1:39688] logged in with entity id 3759 at (-157.07857451117061, 64.0, 402.50089067465956)'
  ]
  assert.deepEqual(loginCountCensus(f503), { logins: 1 })
  // the capture law - the entity id and the port never ride the count
  // (the shape-only cells hold their bytes, the count hand alone
  // prices - a bigger entity id never swells the headcount)
  const capture = [
    '[20:00:00] [Server thread/INFO]: F7[/127.0.0.1:12345] logged in with entity id 99999 at (0.0, 64.0, 0.0)',
    '[20:00:01] [Server thread/INFO]: F8[/127.0.0.1:65535] logged in with entity id 1 at (0.0, 64.0, 0.0)'
  ]
  assert.deepEqual(loginCountCensus(capture), { logins: 2 })
  // the sibling lanes never ride - the lost-connection lines and the
  // join/leave lines the same console wears (the .310/.311 loss seats
  // and the deathcause join/leave lane never swell the headcount)
  const siblings = [
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:40:21] [Server thread/INFO]: YardSurvey joined the game',
    '[20:40:34] [Server thread/INFO]: YardSurvey left the game',
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out'
  ]
  assert.deepEqual(loginCountCensus(siblings), { logins: 0 })
})

test('v0.976.314 census: the junk faces stay honest', () => {
  // the junk face - the lawful zero (the count never nulls on junk,
  // the .311 Timed out count's own precedent holds)
  assert.deepEqual(loginCountCensus(['garbage', '', 'no logins here']), { logins: 0 })
  // the non-array - the honest null
  assert.equal(loginCountCensus(null), null)
  assert.equal(loginCountCensus('lines'), null)
  assert.equal(loginCountCensus(42), null)
  // the non-string members ride past unharmed
  assert.deepEqual(loginCountCensus([42, null, undefined, {}]), { logins: 0 })
})

test('v0.976.314 near-miss skins: twelve forms the grammar refuses', () => {
  const good = '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)'
  const refuses = [
    // the bot-tagged prefix - the fleet log's own skin, the server
    // console never wears it
    '[F2] [21:47:59] F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the WARN frame
    '[21:47:59] [Server thread/WARN]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the pretty spacing
    '[21:47:59] [Server thread/INFO]:  F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the plural body
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity ids 3026 at (-138.7, 48.2, 410.3)',
    // the altered verb
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged on with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the missing port cell
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the float port
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868.5] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the leading-zero port - the .248 house law
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:058868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the plus port
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:+58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the leading whitespace
    ' [21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the trailing junk
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3) extra',
    // the CR tail
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)\r'
  ]
  assert.deepEqual(loginCountCensus([good, ...refuses]), { logins: 1 })
})

test('v0.976.314 fence: the non-negative integer cells every branch', () => {
  // the green fence
  assert.equal(loginCountConsistent({ back: { logins: 39 }, prev: { logins: 30 }, cur: { logins: 25 } }), true)
  assert.equal(loginCountConsistent({ back: { logins: 0 }, prev: { logins: 0 }, cur: { logins: 0 } }), true)
  // the negative cell
  assert.equal(loginCountConsistent({ back: { logins: -1 }, prev: { logins: 30 }, cur: { logins: 25 } }), false)
  // the float cell
  assert.equal(loginCountConsistent({ back: { logins: 39.5 }, prev: { logins: 30 }, cur: { logins: 25 } }), false)
  // the string cell
  assert.equal(loginCountConsistent({ back: { logins: '39' }, prev: { logins: 30 }, cur: { logins: 25 } }), false)
  // the missing faces
  assert.equal(loginCountConsistent(null), false)
  assert.equal(loginCountConsistent({}), false)
  assert.equal(loginCountConsistent({ back: { logins: 39 }, prev: { logins: 30 } }), false)
})

test('v0.976.314 rows: the REAL four windows byte-exact - born speaking four deep', () => {
  // W1 - F501 -> F502 -> F503: the fade the fold will speak
  const w1 = loginCountTrendRow({ back: { logins: 39 }, prev: { logins: 30 }, cur: { logins: 25 } })
  assert.ok(w1.includes("the login headcount's own fade ran two steps deep - 39 -> 30 (-9) -> 25 (-5)"))
  // W2 - F502 -> F503 -> F504: the swing
  const w2 = loginCountTrendRow({ back: { logins: 30 }, prev: { logins: 25 }, cur: { logins: 30 } })
  assert.ok(w2.includes("the login headcount's own swing - 30 -> 25 (-5) -> 30 (+5)"))
  // W3 - F503 -> F504 -> F505: the swell
  const w3 = loginCountTrendRow({ back: { logins: 25 }, prev: { logins: 30 }, cur: { logins: 40 } })
  assert.ok(w3.includes("the login headcount's own swell ran two steps deep - 25 -> 30 (+5) -> 40 (+10)"))
  // W4 - F504 -> F505 -> F506: the swing the newest face rides
  const w4 = loginCountTrendRow({ back: { logins: 30 }, prev: { logins: 40 }, cur: { logins: 37 } })
  assert.ok(w4.includes("the login headcount's own swing - 30 -> 40 (+10) -> 37 (-3)"))
  // the tail co-existence rides every row
  assert.ok(w4.includes('the .312 port word keeps the same lines\' MAX socket seat'))
  assert.ok(w4.includes('the .313 min port word keeps the MIN seat'))
  assert.ok(w4.includes('the .297 entity id word keeps the same line\'s entity counter cell'))
  assert.ok(w4.includes('the deathcause module keeps the join/leave lines'))
  assert.ok(w4.includes('the .310 disconnect word keeps the loss lane\'s own reason counts'))
  assert.ok(w4.includes('the .311 timed out word keeps the stalled-drop seat'))
})

test('v0.976.314 rows: the held law and the three-face zero and the fence fail', () => {
  // the held step prices no direction - the honest silence
  assert.equal(loginCountTrendRow({ back: { logins: 30 }, prev: { logins: 30 }, cur: { logins: 40 } }), null)
  assert.equal(loginCountTrendRow({ back: { logins: 39 }, prev: { logins: 30 }, cur: { logins: 30 } }), null)
  // the three-face zero - the no-joins mass the family keeps silent
  assert.equal(loginCountTrendRow({ back: { logins: 0 }, prev: { logins: 0 }, cur: { logins: 0 } }), null)
  // the fence fail - the negative cell the count domain never holds
  assert.equal(loginCountTrendRow({ back: { logins: -3 }, prev: { logins: 30 }, cur: { logins: 40 } }), null)
  // the missing faces
  assert.equal(loginCountTrendRow(null), null)
})
