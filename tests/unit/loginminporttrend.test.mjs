import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loginMinPortCensus, loginMinPortConsistent, loginMinPortTrendRow } from '../../src/lib/loginminporttrend.mjs'

// the REAL min-port lines the faces carry (run 39319100730 F501,
// 39327612804 F502, 39334531367 F503, 39338489283 F504, 39341992087
// F505 - each face's own logins re-sorted, the floor socket read
// byte-exact from the fleet-server-log artifacts - the MIN hand the
// .312 tail named: F19 spoke F501's and F505's floors, F10 F502's,
// F1 F503's, YardSurvey F504's)

test('v0.976.313 census: the REAL min-port lines byte-exact and the floor prices', () => {
  // F501's own face - the arc's W1 back (39 logins floored at 33168)
  const f501 = [
    '[20:47:46] [Server thread/INFO]: F19[/127.0.0.1:33168] logged in with entity id 3417 at (-110.53468971052328, 50.0, 412.3)',
    '[20:49:19] [Server thread/INFO]: F11[/127.0.0.1:58954] logged in with entity id 3874 at (-149.03768012666592, 59.17675927506424, 401.5442795786802)'
  ]
  assert.deepEqual(loginMinPortCensus(f501), { minLoginPort: 33168 })
  // F502's own face - the W1 middle step
  const f502 = [
    '[21:41:20] [Server thread/INFO]: F10[/127.0.0.1:33720] logged in with entity id 366 at (-136.5, 72.0, 401.5)',
    '[21:44:10] [Server thread/INFO]: F12[/127.0.0.1:49058] logged in with entity id 4016 at (-173.34762934529394, 65.02442408821369, 416.06112547909356)'
  ]
  assert.deepEqual(loginMinPortCensus(f502), { minLoginPort: 33720 })
  // F503's own face - the W1/W2 hinge
  const f503 = [
    '[22:35:50] [Server thread/INFO]: F1[/127.0.0.1:34166] logged in with entity id 271 at (-139.5, 72.0, 403.5)'
  ]
  assert.deepEqual(loginMinPortCensus(f503), { minLoginPort: 34166 })
  // F504's own face - the W2 cur (the YardSurvey floor the family's
  // own name domain holds)
  const f504 = [
    '[23:15:03] [Server thread/INFO]: YardSurvey[/127.0.0.1:33176] logged in with entity id 9 at (-117.5, 65.0, 390.5)',
    '[23:22:08] [Server thread/INFO]: F1[/127.0.0.1:56186] logged in with entity id 3113 at (-89.3, 61.038117287424, 370.49016791070585)'
  ]
  assert.deepEqual(loginMinPortCensus(f504), { minLoginPort: 33176 })
  // F505's own face - the arc's W3 cur (40 logins floored at 33136)
  const f505 = [
    '[23:53:51] [Server thread/INFO]: F19[/127.0.0.1:33136] logged in with entity id 4517 at (-92.7, 55.0, 409.7)',
    '[23:44:55] [Server thread/INFO]: F15[/127.0.0.1:59934] logged in with entity id 432 at (-121.5, 78.0, 401.5)'
  ]
  assert.deepEqual(loginMinPortCensus(f505), { minLoginPort: 33136 })
  // the capture law - the entity id never rides the port cell (the
  // bigger counter the shape-only cell holds, the floor port wins)
  const capture = [
    '[20:00:00] [Server thread/INFO]: F7[/127.0.0.1:12345] logged in with entity id 99999 at (0.0, 64.0, 0.0)'
  ]
  assert.deepEqual(loginMinPortCensus(capture), { minLoginPort: 12345 })
  // the sibling lanes never ride - disconnect and join/leave and dup
  // and fill lines the same console wears
  const siblings = [
    '[21:45:39] [Server thread/INFO]: F13 lost connection: Disconnected',
    '[21:45:40] [Server thread/INFO]: YardSurvey left the game',
    '[21:45:41] [Server thread/INFO]: F3 lost connection: You logged in from another location',
    '[21:45:42] [Server thread/INFO]: Successfully filled 1537 block(s)',
    '[23:53:51] [Server thread/INFO]: F19[/127.0.0.1:33136] logged in with entity id 4517 at (-92.7, 55.0, 409.7)'
  ]
  assert.deepEqual(loginMinPortCensus(siblings), { minLoginPort: 33136 })
})

test('v0.976.313 census: the junk faces stay honest', () => {
  assert.equal(loginMinPortCensus(null), null)
  assert.equal(loginMinPortCensus('junk'), null)
  assert.equal(loginMinPortCensus(42), null)
  assert.deepEqual(loginMinPortCensus([]), { minLoginPort: 0 })
  assert.deepEqual(loginMinPortCensus(['total junk', '']), { minLoginPort: 0 })
  assert.deepEqual(loginMinPortCensus([null, 7, undefined]), { minLoginPort: 0 })
})

test('v0.976.313 grammar: the 12 near-miss skins refused', () => {
  // the min never rides a skin - every near-miss the lawful zero keeps
  const skins = [
    '[21:45:39] [Bot thread/INFO]: F5[/127.0.0.1:40000] logged in with entity id 5 at (0.0, 64.0, 0.0)', // bot-tagged prefix
    '[WARN] [Server thread/INFO]: F5[/127.0.0.1:40000] logged in with entity id 5 at (0.0, 64.0, 0.0)', // WARN frame
    '[21:45:39] [Server thread/INFO]: F5 [/127.0.0.1:40000] logged in with entity id 5 at (0.0, 64.0, 0.0)', // pretty spacing
    '[21:45:39] [Server thread/INFO]: F5[/127.0.0.1:40000] logged in with entity ids 5 at (0.0, 64.0, 0.0)', // plural body
    '[21:45:39] [Server thread/INFO]: F5[/127.0.0.1:40000] was logged in with entity id 5 at (0.0, 64.0, 0.0)', // altered verb
    '[21:45:39] [Server thread/INFO]: F5 logged in with entity id 5 at (0.0, 64.0, 0.0)', // missing port cell
    '[21:45:39] [Server thread/INFO]: F5[/127.0.0.1:40000.5] logged in with entity id 5 at (0.0, 64.0, 0.0)', // float port
    '[21:45:39] [Server thread/INFO]: F5[/127.0.0.1:040000] logged in with entity id 5 at (0.0, 64.0, 0.0)', // leading-zero port
    '[21:45:39] [Server thread/INFO]: F5[/127.0.0.1:+40000] logged in with entity id 5 at (0.0, 64.0, 0.0)', // plus port
    ' [21:45:39] [Server thread/INFO]: F5[/127.0.0.1:40000] logged in with entity id 5 at (0.0, 64.0, 0.0)', // leading whitespace
    '[21:45:39] [Server thread/INFO]: F5[/127.0.0.1:40000] logged in with entity id 5 at (0.0, 64.0, 0.0) junk', // trailing junk
    '[21:45:39] [Server thread/INFO]: F5[/127.0.0.1:40000] logged in with entity id 5 at (0.0, 64.0, 0.0)\r' // CR tail
  ]
  assert.deepEqual(loginMinPortCensus(skins), { minLoginPort: 0 })
  // the byte-exact REAL line still rides beside the refused skins
  const mixed = [...skins, '[23:53:51] [Server thread/INFO]: F19[/127.0.0.1:33136] logged in with entity id 4517 at (-92.7, 55.0, 409.7)']
  assert.deepEqual(loginMinPortCensus(mixed), { minLoginPort: 33136 })
})

test('v0.976.313 fence: the non-negative integer cells only', () => {
  const ok = { back: { minLoginPort: 33168 }, prev: { minLoginPort: 34166 }, cur: { minLoginPort: 33136 } }
  assert.equal(loginMinPortConsistent(ok), true)
  assert.equal(loginMinPortConsistent(null), false)
  assert.equal(loginMinPortConsistent('junk'), false)
  assert.equal(loginMinPortConsistent({}), false)
  assert.equal(loginMinPortConsistent({ back: { minLoginPort: -1 }, prev: { minLoginPort: 1 }, cur: { minLoginPort: 1 } }), false)
  assert.equal(loginMinPortConsistent({ back: { minLoginPort: 1.5 }, prev: { minLoginPort: 1 }, cur: { minLoginPort: 1 } }), false)
  assert.equal(loginMinPortConsistent({ back: { minLoginPort: '1' }, prev: { minLoginPort: 1 }, cur: { minLoginPort: 1 } }), false)
  assert.equal(loginMinPortConsistent({ back: { minLoginPort: 1 }, prev: { minLoginPort: 1 } }), false)
  assert.equal(loginMinPortConsistent({ back: { minLoginPort: 0 }, prev: { minLoginPort: 0 }, cur: { minLoginPort: 0 } }), true)
})

test('v0.976.313 row: the REAL W1/W2/W3 three speaks byte-exact', () => {
  // W1 the swell (F501 -> F502 -> F503)
  assert.equal(
    loginMinPortTrendRow({ back: { minLoginPort: 33168 }, prev: { minLoginPort: 33720 }, cur: { minLoginPort: 34166 } }),
    'the server login min port trend (v0.976.313): the min port\'s own swell ran two steps deep - 33168 -> 33720 (+552) -> 34166 (+446) - the kernel\'s floor sockets crowded, (the .312 login port word keeps the same cell\'s own MAX seat - the sibling hand above (its census returns the ephemeral peak, never the floor - the SAME-CELL DIFFERENT-HAND LAW the .304/.307 Y pair and the .306/.309 X pair hold), the .297 entity id word keeps the same login line\'s own entity id cell (the same-line different-cell hand the same bracket pair holds), the deathcause module keeps the join/leave lines, the dupclock book keeps the duplicate-loss churn, the .310 disconnect word keeps the loss lane\'s own Disconnected counts, the .311 timed out word keeps the Timed out sibling hand, the kick bill keeps the fleet log\'s own event cells, the .278 advancement word keeps the same console\'s own achievement seat, the gc band keeps the [gc] lane, the .292 fill word keeps the fill echo lane - the login min port mass\'s row alone, co-existence by seat never by duplication)'
  )
  // W2 the swing (F502 -> F503 -> F504)
  const w2 = loginMinPortTrendRow({ back: { minLoginPort: 33720 }, prev: { minLoginPort: 34166 }, cur: { minLoginPort: 33176 } })
  assert.ok(w2.startsWith('the server login min port trend (v0.976.313): the min port\'s own swing - 33720 -> 34166 (+446) -> 33176 (-990) - the kernel traded its floor sockets between the faces'))
  // W3 the fade (F503 -> F504 -> F505)
  const w3 = loginMinPortTrendRow({ back: { minLoginPort: 34166 }, prev: { minLoginPort: 33176 }, cur: { minLoginPort: 33136 } })
  assert.ok(w3.startsWith('the server login min port trend (v0.976.313): the min port\'s own fade ran two steps deep - 34166 -> 33176 (-990) -> 33136 (-40) - the kernel\'s floor sockets receded'))
  // the synthetic held step - the honest silence (the family's own law)
  assert.equal(loginMinPortTrendRow({ back: { minLoginPort: 33168 }, prev: { minLoginPort: 33168 }, cur: { minLoginPort: 33136 } }), null)
  assert.equal(loginMinPortTrendRow({ back: { minLoginPort: 33168 }, prev: { minLoginPort: 33720 }, cur: { minLoginPort: 33720 } }), null)
  // the three-face zero - the lawful silence
  assert.equal(loginMinPortTrendRow({ back: { minLoginPort: 0 }, prev: { minLoginPort: 0 }, cur: { minLoginPort: 0 } }), null)
  // the broken fence - the honest silence
  assert.equal(loginMinPortTrendRow(null), null)
  assert.equal(loginMinPortTrendRow({ back: { minLoginPort: -5 }, prev: { minLoginPort: 1 }, cur: { minLoginPort: 1 } }), null)
})
