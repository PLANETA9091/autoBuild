import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loginWestCensus, loginWestConsistent, loginWestTrendRow } from '../../src/lib/loginwesttrend.mjs'

// the REAL lines the faces carry (run 39319100730 F501, 39341992087
// F505, 39349450602 F506, 39353992759 F507, 39356556714 F508 - the
// byte-exact prints the vanilla server's own acceptor spoke; the REAL
// eight-face west-edge arc the artifacts hold: F501
// -173.34762934529394, F502 -145.7, F503 -157.07857451117061, F504
// -125.7, F505 -195.63148831977773, F506 -149.7, F507
// -156.54694911648963, F508 -143.13065092268548)

test('v0.976.316 census: the REAL lines byte-exact and the floor prices', () => {
  // F501's own face - the west-edge line the arc's W1 swing rides
  const f501 = [
    '[20:49:49] [Server thread/INFO]: F12[/127.0.0.1:49058] logged in with entity id 4016 at (-173.34762934529394, 65.02442408821369, 416.06112547909356)'
  ]
  assert.deepEqual(loginWestCensus(f501), { minLoginX: -173.34762934529394 })
  // F505's own face - the deepest west the arc holds (the W3/W4 speak)
  const f505 = [
    '[23:52:14] [Server thread/INFO]: F9[/127.0.0.1:54010] logged in with entity id 4122 at (-195.63148831977773, 62.53584062504456, 423.51144015304646)'
  ]
  assert.deepEqual(loginWestCensus(f505), { minLoginX: -195.63148831977773 })
  // F506's own face - the short-coord skin the float domain prints
  const f506 = [
    '[01:03:06] [Server thread/INFO]: F12[/127.0.0.1:44926] logged in with entity id 2621 at (-149.7, 59.2, 399.7)'
  ]
  assert.deepEqual(loginWestCensus(f506), { minLoginX: -149.7 })
  // F508's own face - the newest face the arc's W6 swing rides (run
  // 39356556714, the .313 tree's own fleet)
  const f508 = [
    '[02:24:04] [Server thread/INFO]: F2[/127.0.0.1:36504] logged in with entity id 3241 at (-143.13065092268548, 61.0, 404.3)'
  ]
  assert.deepEqual(loginWestCensus(f508), { minLoginX: -143.13065092268548 })
  // the MIN hand - the floor beats the ceiling (a bigger east login
  // never swells the west edge, the capture law the sibling hands hold)
  const minhand = [
    '[20:00:00] [Server thread/INFO]: F7[/127.0.0.1:12345] logged in with entity id 99999 at (-10.5, 64.0, 0.0)',
    '[20:00:01] [Server thread/INFO]: F8[/127.0.0.1:65535] logged in with entity id 1 at (-200.25, 64.0, 0.0)',
    '[20:00:02] [Server thread/INFO]: F9[/127.0.0.1:11111] logged in with entity id 2 at (-95.3, 64.0, 0.0)'
  ]
  assert.deepEqual(loginWestCensus(minhand), { minLoginX: -200.25 })
  // the sibling lanes never ride - the lost-connection lines and the
  // join/leave lines the same console wears
  const siblings = [
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:40:21] [Server thread/INFO]: YardSurvey joined the game',
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out'
  ]
  assert.deepEqual(loginWestCensus(siblings), { minLoginX: 0 })
})

test('v0.976.316 census: the junk faces stay honest', () => {
  // the junk face - the lawful zero (the null-sentinel the .309/.315
  // convention holds - the no-login face the zero keeps)
  assert.deepEqual(loginWestCensus(['garbage', '', 'no logins here']), { minLoginX: 0 })
  // the non-array - the honest null
  assert.equal(loginWestCensus(null), null)
  assert.equal(loginWestCensus('lines'), null)
  assert.equal(loginWestCensus(42), null)
  // the non-string members ride past unharmed
  assert.deepEqual(loginWestCensus([42, null, undefined, {}]), { minLoginX: 0 })
})

test('v0.976.316 near-miss skins: thirteen forms the grammar refuses', () => {
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
    // the integer coord - no decimal point, the float domain the
    // .315 sibling's own skin the grammar refuses
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138, 48.2, 410.3)',
    // the leading whitespace
    ' [21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the trailing junk
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3) extra',
    // the CR tail
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)\r'
  ]
  assert.deepEqual(loginWestCensus([good, ...refuses]), { minLoginX: -138.7 })
})

test('v0.976.316 fence: the finite number cells every branch', () => {
  // the green fence
  assert.equal(loginWestConsistent({ back: { minLoginX: -173.3 }, prev: { minLoginX: -145.7 }, cur: { minLoginX: -157.0 } }), true)
  assert.equal(loginWestConsistent({ back: { minLoginX: 0 }, prev: { minLoginX: 0 }, cur: { minLoginX: 0 } }), true)
  // the negative cell - the signed domain the negatives lawful hold
  assert.equal(loginWestConsistent({ back: { minLoginX: -195.6 }, prev: { minLoginX: -145.7 }, cur: { minLoginX: -157.0 } }), true)
  // the non-finite cells
  assert.equal(loginWestConsistent({ back: { minLoginX: Infinity }, prev: { minLoginX: -145.7 }, cur: { minLoginX: -157.0 } }), false)
  assert.equal(loginWestConsistent({ back: { minLoginX: NaN }, prev: { minLoginX: -145.7 }, cur: { minLoginX: -157.0 } }), false)
  // the string cell
  assert.equal(loginWestConsistent({ back: { minLoginX: '-173.3' }, prev: { minLoginX: -145.7 }, cur: { minLoginX: -157.0 } }), false)
  // the missing faces
  assert.equal(loginWestConsistent(null), false)
  assert.equal(loginWestConsistent({}), false)
  assert.equal(loginWestConsistent({ back: { minLoginX: -173.3 }, prev: { minLoginX: -145.7 } }), false)
})

test('v0.976.316 rows: the REAL six windows byte-exact - born speaking six deep', () => {
  // W1 - F501 -> F502 -> F503: the swing
  const w1 = loginWestTrendRow({ back: { minLoginX: -173.34762934529394 }, prev: { minLoginX: -145.7 }, cur: { minLoginX: -157.07857451117061 } })
  assert.ok(w1.includes("the login west edge's own swing - -173.34762934529394 -> -145.7 (+27.64762934529395) -> -157.07857451117061 (-11.378574511170626)"))
  // W2 - F502 -> F503 -> F504: the swing
  const w2 = loginWestTrendRow({ back: { minLoginX: -145.7 }, prev: { minLoginX: -157.07857451117061 }, cur: { minLoginX: -125.7 } })
  assert.ok(w2.includes("the login west edge's own swing - -145.7 -> -157.07857451117061 (-11.378574511170626) -> -125.7 (+31.378574511170612)"))
  // W3 - F503 -> F504 -> F505: the swing
  const w3 = loginWestTrendRow({ back: { minLoginX: -157.07857451117061 }, prev: { minLoginX: -125.7 }, cur: { minLoginX: -195.63148831977773 } })
  assert.ok(w3.includes("the login west edge's own swing - -157.07857451117061 -> -125.7 (+31.378574511170612) -> -195.63148831977773 (-69.93148831977773)"))
  // W4 - F504 -> F505 -> F506: the swing
  const w4 = loginWestTrendRow({ back: { minLoginX: -125.7 }, prev: { minLoginX: -195.63148831977773 }, cur: { minLoginX: -149.7 } })
  assert.ok(w4.includes("the login west edge's own swing - -125.7 -> -195.63148831977773 (-69.93148831977773) -> -149.7 (+45.93148831977774)"))
  // W5 - F505 -> F506 -> F507: the swing the F507 first-read rides
  const w5 = loginWestTrendRow({ back: { minLoginX: -195.63148831977773 }, prev: { minLoginX: -149.7 }, cur: { minLoginX: -156.54694911648963 } })
  assert.ok(w5.includes("the login west edge's own swing - -195.63148831977773 -> -149.7 (+45.93148831977774) -> -156.54694911648963 (-6.84694911648964)"))
  // W6 - F506 -> F507 -> F508: the swing the F508 first-read rides
  const w6 = loginWestTrendRow({ back: { minLoginX: -149.7 }, prev: { minLoginX: -156.54694911648963 }, cur: { minLoginX: -143.13065092268548 } })
  assert.ok(w6.includes("the login west edge's own swing - -149.7 -> -156.54694911648963 (-6.84694911648964) -> -143.13065092268548 (+13.416298193804153)"))
  // the tail co-existence rides every row
  assert.ok(w6.includes('the .315 login east word keeps the same cell\'s east edge seat'))
  assert.ok(w6.includes('the .297 entity id word keeps the same login line\'s own entity id peak seat'))
  assert.ok(w6.includes('the .306 echo east word keeps the setblock echo\'s own X-max seat'))
  assert.ok(w6.includes('the .309 echo west word keeps the echo\'s own X-min seat'))
  assert.ok(w6.includes('the .314 login count word keeps the same lines\' count seat'))
  // the synthetic fade and swell branches the all-swing birth never
  // rode (the family's own coverage law)
  const fade = loginWestTrendRow({ back: { minLoginX: -100.0 }, prev: { minLoginX: -120.0 }, cur: { minLoginX: -140.0 } })
  assert.ok(fade.includes("the login west edge's own fade ran two steps deep - -100 -> -120 (-20) -> -140 (-20)"))
  const swell = loginWestTrendRow({ back: { minLoginX: -140.0 }, prev: { minLoginX: -120.0 }, cur: { minLoginX: -100.0 } })
  assert.ok(swell.includes("the login west edge's own swell ran two steps deep - -140 -> -120 (+20) -> -100 (+20)"))
})

test('v0.976.316 rows: the held law and the three-face zero and the fence fail', () => {
  // the held step prices no direction - the honest silence
  assert.equal(loginWestTrendRow({ back: { minLoginX: -145.7 }, prev: { minLoginX: -145.7 }, cur: { minLoginX: -195.6 } }), null)
  assert.equal(loginWestTrendRow({ back: { minLoginX: -173.3 }, prev: { minLoginX: -145.7 }, cur: { minLoginX: -145.7 } }), null)
  // the three-face zero - the no-joins mass the family keeps silent
  assert.equal(loginWestTrendRow({ back: { minLoginX: 0 }, prev: { minLoginX: 0 }, cur: { minLoginX: 0 } }), null)
  // the fence fail - the non-finite cell the domain never holds
  assert.equal(loginWestTrendRow({ back: { minLoginX: Infinity }, prev: { minLoginX: -145.7 }, cur: { minLoginX: -195.6 } }), null)
  // the missing faces
  assert.equal(loginWestTrendRow(null), null)
})
