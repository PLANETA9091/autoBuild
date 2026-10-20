import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loginEastCensus, loginEastConsistent, loginEastTrendRow } from '../../src/lib/logineasttrend.mjs'

// the REAL east-edge lines the faces carry (run 39319100730 F501,
// 39327612804 F502, 39334531367 F503, 39338489283 F504, 39341992087
// F505 - each face's logins re-sorted on the X cell, the east edge
// read byte-exact from the fleet-server-log artifacts - the X cell
// the four sibling births rode shape-only)

test('v0.976.315 census: the REAL east-edge lines byte-exact and the edge prices', () => {
  // F501's own face - the arc's W1 back (39 logins, east to -95.3)
  const f501 = [
    '[20:47:46] [Server thread/INFO]: F19[/127.0.0.1:33168] logged in with entity id 3417 at (-110.53468971052328, 50.0, 412.3)',
    '[20:49:19] [Server thread/INFO]: F11[/127.0.0.1:58954] logged in with entity id 3874 at (-149.03768012666592, 59.17675927506424, 401.5442795786802)',
    '[20:48:50] [Server thread/INFO]: F3[/127.0.0.1:42304] logged in with entity id 3714 at (-95.3, 58.121599998474125, 439.3)'
  ]
  assert.deepEqual(loginEastCensus(f501), { maxLoginX: -95.3 })
  // F503's own face - the W1/W2 hinge (the calm face the furthest
  // west edge the arc holds)
  const f503 = [
    '[22:35:50] [Server thread/INFO]: F1[/127.0.0.1:34166] logged in with entity id 271 at (-139.5, 72.0, 403.5)',
    '[22:44:16] [Server thread/INFO]: F5[/127.0.0.1:59334] logged in with entity id 3411 at (-128.38464769374113, 52.0, 397.7)',
    '[22:42:11] [Server thread/INFO]: F15[/127.0.0.1:51204] logged in with entity id 2685 at (-111.3, 47.2, 387.40643534050946)'
  ]
  assert.deepEqual(loginEastCensus(f503), { maxLoginX: -111.3 })
  // F505's own face - the arc's W3 cur (40 logins pressed furthest
  // east)
  const f505 = [
    '[23:53:51] [Server thread/INFO]: F19[/127.0.0.1:33136] logged in with entity id 4517 at (-92.7, 55.0, 409.7)',
    '[23:44:55] [Server thread/INFO]: F15[/127.0.0.1:59934] logged in with entity id 432 at (-121.5, 78.0, 401.5)',
    '[23:58:00] [Server thread/INFO]: F18[/127.0.0.1:48088] logged in with entity id 3954 at (-80.7, 62.035, 372.3391921667998)'
  ]
  assert.deepEqual(loginEastCensus(f505), { maxLoginX: -80.7 })
  // the capture law - the entity id and port never ride the X cell
  // (the bigger counters the sibling cells hold, the coord wins)
  const capture = [
    '[20:00:00] [Server thread/INFO]: F7[/127.0.0.1:12345] logged in with entity id 99999 at (-100.5, 64.0, 0.0)'
  ]
  assert.deepEqual(loginEastCensus(capture), { maxLoginX: -100.5 })
  // the sibling lanes never ride - disconnect and join/leave and dup
  // and fill lines the same console wears
  const siblings = [
    '[21:45:39] [Server thread/INFO]: F13 lost connection: Disconnected',
    '[21:45:40] [Server thread/INFO]: YardSurvey left the game',
    '[21:45:41] [Server thread/INFO]: F3 lost connection: You logged in from another location',
    '[21:45:42] [Server thread/INFO]: Successfully filled 1537 block(s)',
    '[23:58:00] [Server thread/INFO]: F18[/127.0.0.1:48088] logged in with entity id 3954 at (-80.7, 62.035, 372.3391921667998)'
  ]
  assert.deepEqual(loginEastCensus(siblings), { maxLoginX: -80.7 })
})

test('v0.976.315 census: the junk faces stay honest', () => {
  assert.equal(loginEastCensus(null), null)
  assert.equal(loginEastCensus('junk'), null)
  assert.equal(loginEastCensus(42), null)
  assert.deepEqual(loginEastCensus([]), { maxLoginX: 0 })
  assert.deepEqual(loginEastCensus(['total junk', '']), { maxLoginX: 0 })
  assert.deepEqual(loginEastCensus([null, 7, undefined]), { maxLoginX: 0 })
})

test('v0.976.315 grammar: the near-miss skins refused', () => {
  // the east edge never rides a skin - every near-miss the lawful
  // zero keeps (the 12-skin law the .312 birth holds plus the
  // integer-coord skin the float domain's own decimal point refuses)
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
    '[21:45:39] [Server thread/INFO]: F5[/127.0.0.1:40000] logged in with entity id 5 at (0, 64.0, 0.0)', // integer coord - no decimal point
    ' [21:45:39] [Server thread/INFO]: F5[/127.0.0.1:40000] logged in with entity id 5 at (0.0, 64.0, 0.0)', // leading whitespace
    '[21:45:39] [Server thread/INFO]: F5[/127.0.0.1:40000] logged in with entity id 5 at (0.0, 64.0, 0.0) junk', // trailing junk
    '[21:45:39] [Server thread/INFO]: F5[/127.0.0.1:40000] logged in with entity id 5 at (0.0, 64.0, 0.0)\r' // CR tail
  ]
  assert.deepEqual(loginEastCensus(skins), { maxLoginX: 0 })
  // the byte-exact REAL line still rides beside the refused skins
  const mixed = [...skins, '[23:58:00] [Server thread/INFO]: F18[/127.0.0.1:48088] logged in with entity id 3954 at (-80.7, 62.035, 372.3391921667998)']
  assert.deepEqual(loginEastCensus(mixed), { maxLoginX: -80.7 })
})

test('v0.976.315 fence: the finite number cells only (signed float domain)', () => {
  const ok = { back: { maxLoginX: -95.3 }, prev: { maxLoginX: -111.3 }, cur: { maxLoginX: -80.7 } }
  assert.equal(loginEastConsistent(ok), true)
  assert.equal(loginEastConsistent(null), false)
  assert.equal(loginEastConsistent('junk'), false)
  assert.equal(loginEastConsistent({}), false)
  assert.equal(loginEastConsistent({ back: { maxLoginX: NaN }, prev: { maxLoginX: 1 }, cur: { maxLoginX: 1 } }), false)
  assert.equal(loginEastConsistent({ back: { maxLoginX: Infinity }, prev: { maxLoginX: 1 }, cur: { maxLoginX: 1 } }), false)
  assert.equal(loginEastConsistent({ back: { maxLoginX: '1' }, prev: { maxLoginX: 1 }, cur: { maxLoginX: 1 } }), false)
  assert.equal(loginEastConsistent({ back: { maxLoginX: 1 }, prev: { maxLoginX: 1 } }), false)
  assert.equal(loginEastConsistent({ back: { maxLoginX: 0 }, prev: { maxLoginX: 0 }, cur: { maxLoginX: 0 } }), true)
})

test('v0.976.315 row: the REAL W1/W2/W3 three speaks byte-exact', () => {
  // W1 the fade (F501 -> F502 -> F503)
  const w1 = loginEastTrendRow({ back: { maxLoginX: -95.3 }, prev: { maxLoginX: -106.3 }, cur: { maxLoginX: -111.3 } })
  assert.ok(w1.startsWith("the server login east trend (v0.976.315): the login east edge's own fade ran two steps deep - -95.3 -> -106.3 (-11) -> -111.3 (-5) - the return positions withdrew west"))
  // W2 the swing (F502 -> F503 -> F504)
  const w2 = loginEastTrendRow({ back: { maxLoginX: -106.3 }, prev: { maxLoginX: -111.3 }, cur: { maxLoginX: -89.3 } })
  assert.ok(w2.startsWith("the server login east trend (v0.976.315): the login east edge's own swing - -106.3 -> -111.3 (-5) -> -89.3 (+22) - the return positions traded between the faces"))
  // W3 the swell (F503 -> F504 -> F505) - the float tail the domain
  // honestly carries
  const w3 = loginEastTrendRow({ back: { maxLoginX: -111.3 }, prev: { maxLoginX: -89.3 }, cur: { maxLoginX: -80.7 } })
  assert.ok(w3.startsWith("the server login east trend (v0.976.315): the login east edge's own swell ran two steps deep - -111.3 -> -89.3 (+22) -> -80.7 (+8.599999999999994) - the return positions pressed east"))
  // the tail co-existence - the four sibling seats named
  assert.ok(w1.includes('the .297 entity id word keeps the same login line\'s own entity id peak seat'))
  assert.ok(w1.includes('the .312 login port word keeps the same line\'s socket peak seat'))
  assert.ok(w1.includes('the .313 login min port word keeps the same line\'s socket floor seat'))
  assert.ok(w1.includes('the .314 login count word keeps the same lines\' count seat'))
  assert.ok(w1.includes('the .306 echo east word keeps the setblock echo\'s own X-max seat'))
  // the synthetic held step - the honest silence (the family's own law)
  assert.equal(loginEastTrendRow({ back: { maxLoginX: -95.3 }, prev: { maxLoginX: -95.3 }, cur: { maxLoginX: -80.7 } }), null)
  assert.equal(loginEastTrendRow({ back: { maxLoginX: -95.3 }, prev: { maxLoginX: -106.3 }, cur: { maxLoginX: -106.3 } }), null)
  // the three-face zero - the lawful silence
  assert.equal(loginEastTrendRow({ back: { maxLoginX: 0 }, prev: { maxLoginX: 0 }, cur: { maxLoginX: 0 } }), null)
  // the broken fence - the honest silence
  assert.equal(loginEastTrendRow(null), null)
  assert.equal(loginEastTrendRow({ back: { maxLoginX: NaN }, prev: { maxLoginX: 1 }, cur: { maxLoginX: 1 } }), null)
})
