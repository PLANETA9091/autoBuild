import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loginFloorCensus, loginFloorConsistent, loginFloorTrendRow } from '../../src/lib/loginfloortrend.mjs'

// the REAL lines the faces carry (run 39319100730 F501, 39327612804
// F502, 39338489283 F504, 39356556714 F508 - the byte-exact prints
// the vanilla server's own acceptor spoke; the REAL eight-face
// floor arc the artifacts hold: F501 43.7531999805212, F502 43.0,
// F503 47.2, F504 47.187201392047754, F505 43.0, F506 45.2, F507
// 46.2, F508 46.0)

test('v0.976.317 census: the REAL lines byte-exact and the floor prices', () => {
  // F501's own face - the floor line the arc's W1 swing rides
  const f501 = [
    '[20:50:26] [Server thread/INFO]: F6[/127.0.0.1:47898] logged in with entity id 4154 at (-131.49961560785792, 43.7531999805212, 438.3)'
  ]
  assert.deepEqual(loginFloorCensus(f501), { minLoginY: 43.7531999805212 })
  // F502's own face - the short .0 skin the float domain prints
  const f502 = [
    '[21:50:45] [Server thread/INFO]: F15[/127.0.0.1:34386] logged in with entity id 4039 at (-106.3, 43.0, 369.7)'
  ]
  assert.deepEqual(loginFloorCensus(f502), { minLoginY: 43 })
  // F504's own face - the long-float skin the domain honestly carries
  const f504 = [
    '[23:21:22] [Server thread/INFO]: F12[/127.0.0.1:50482] logged in with entity id 2801 at (-121.3, 47.187201392047754, 402.7)'
  ]
  assert.deepEqual(loginFloorCensus(f504), { minLoginY: 47.187201392047754 })
  // F508's own face - the newest face the arc's W6 swing rides (run
  // 39356556714, the .313 tree's own fleet)
  const f508 = [
    '[02:22:13] [Server thread/INFO]: F14[/127.0.0.1:54836] logged in with entity id 2716 at (-118.7, 46.0, 397.5)'
  ]
  assert.deepEqual(loginFloorCensus(f508), { minLoginY: 46 })
  // the MIN hand - the floor beats the ceiling (a higher login never
  // swells the floor, the capture law the sibling hands hold)
  const minhand = [
    '[20:00:00] [Server thread/INFO]: F7[/127.0.0.1:12345] logged in with entity id 99999 at (0.0, 80.5, 0.0)',
    '[20:00:01] [Server thread/INFO]: F8[/127.0.0.1:65535] logged in with entity id 1 at (0.0, 43.25, 0.0)',
    '[20:00:02] [Server thread/INFO]: F9[/127.0.0.1:11111] logged in with entity id 2 at (0.0, 65.02442408821369, 0.0)'
  ]
  assert.deepEqual(loginFloorCensus(minhand), { minLoginY: 43.25 })
  // the sibling lanes never ride - the lost-connection lines and the
  // join/leave lines the same console wears
  const siblings = [
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:40:21] [Server thread/INFO]: YardSurvey joined the game',
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out'
  ]
  assert.deepEqual(loginFloorCensus(siblings), { minLoginY: 0 })
})

test('v0.976.317 census: the junk faces stay honest', () => {
  // the junk face - the lawful zero (the null-sentinel the .307/.309
  // convention holds - the no-login face the zero keeps)
  assert.deepEqual(loginFloorCensus(['garbage', '', 'no logins here']), { minLoginY: 0 })
  // the non-array - the honest null
  assert.equal(loginFloorCensus(null), null)
  assert.equal(loginFloorCensus('lines'), null)
  assert.equal(loginFloorCensus(42), null)
  // the non-string members ride past unharmed
  assert.deepEqual(loginFloorCensus([42, null, undefined, {}]), { minLoginY: 0 })
})

test('v0.976.317 near-miss skins: thirteen forms the grammar refuses', () => {
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
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48, 410.3)',
    // the leading whitespace
    ' [21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the trailing junk
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3) extra',
    // the CR tail
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)\r'
  ]
  assert.deepEqual(loginFloorCensus([good, ...refuses]), { minLoginY: 48.2 })
})

test('v0.976.317 fence: the finite number cells every branch', () => {
  // the green fence
  assert.equal(loginFloorConsistent({ back: { minLoginY: 43.75 }, prev: { minLoginY: 43.0 }, cur: { minLoginY: 47.2 } }), true)
  assert.equal(loginFloorConsistent({ back: { minLoginY: 0 }, prev: { minLoginY: 0 }, cur: { minLoginY: 0 } }), true)
  // the positive cell - the domain the positives lawful hold
  assert.equal(loginFloorConsistent({ back: { minLoginY: 46.0 }, prev: { minLoginY: 45.2 }, cur: { minLoginY: 47.2 } }), true)
  // the non-finite cells
  assert.equal(loginFloorConsistent({ back: { minLoginY: Infinity }, prev: { minLoginY: 43.0 }, cur: { minLoginY: 47.2 } }), false)
  assert.equal(loginFloorConsistent({ back: { minLoginY: NaN }, prev: { minLoginY: 43.0 }, cur: { minLoginY: 47.2 } }), false)
  // the string cell
  assert.equal(loginFloorConsistent({ back: { minLoginY: '43.0' }, prev: { minLoginY: 43.0 }, cur: { minLoginY: 47.2 } }), false)
  // the missing faces
  assert.equal(loginFloorConsistent(null), false)
  assert.equal(loginFloorConsistent({}), false)
  assert.equal(loginFloorConsistent({ back: { minLoginY: 43.75 }, prev: { minLoginY: 43.0 } }), false)
})

test('v0.976.317 rows: the REAL six windows byte-exact - born speaking six deep', () => {
  // W1 - F501 -> F502 -> F503: the swing
  const w1 = loginFloorTrendRow({ back: { minLoginY: 43.7531999805212 }, prev: { minLoginY: 43.0 }, cur: { minLoginY: 47.2 } })
  assert.ok(w1.includes('the login floor\'s own swing - 43.7531999805212 -> 43 (-0.7531999805212024) -> 47.2 (+4.200000000000003)'))
  // W2 - F502 -> F503 -> F504: the swing
  const w2 = loginFloorTrendRow({ back: { minLoginY: 43.0 }, prev: { minLoginY: 47.2 }, cur: { minLoginY: 47.187201392047754 } })
  assert.ok(w2.includes('the login floor\'s own swing - 43 -> 47.2 (+4.200000000000003) -> 47.187201392047754 (-0.01279860795224863)'))
  // W3 - F503 -> F504 -> F505: the fade
  const w3 = loginFloorTrendRow({ back: { minLoginY: 47.2 }, prev: { minLoginY: 47.187201392047754 }, cur: { minLoginY: 43.0 } })
  assert.ok(w3.includes('the login floor\'s own fade ran two steps deep - 47.2 -> 47.187201392047754 (-0.01279860795224863) -> 43 (-4.187201392047754)'))
  // W4 - F504 -> F505 -> F506: the swing
  const w4 = loginFloorTrendRow({ back: { minLoginY: 47.187201392047754 }, prev: { minLoginY: 43.0 }, cur: { minLoginY: 45.2 } })
  assert.ok(w4.includes('the login floor\'s own swing - 47.187201392047754 -> 43 (-4.187201392047754) -> 45.2 (+2.200000000000003)'))
  // W5 - F505 -> F506 -> F507: the swell the F507 first-read rides
  const w5 = loginFloorTrendRow({ back: { minLoginY: 43.0 }, prev: { minLoginY: 45.2 }, cur: { minLoginY: 46.2 } })
  assert.ok(w5.includes('the login floor\'s own swell ran two steps deep - 43 -> 45.2 (+2.200000000000003) -> 46.2 (+1)'))
  // W6 - F506 -> F507 -> F508: the swing the F508 first-read rides
  const w6 = loginFloorTrendRow({ back: { minLoginY: 45.2 }, prev: { minLoginY: 46.2 }, cur: { minLoginY: 46.0 } })
  assert.ok(w6.includes('the login floor\'s own swing - 45.2 -> 46.2 (+1) -> 46 (-0.20000000000000284)'))
  // the tail co-existence rides every row
  assert.ok(w6.includes('the .315 login east word keeps the same line\'s east edge seat'))
  assert.ok(w6.includes('the .316 login west word keeps the same cell\'s west edge seat'))
  assert.ok(w6.includes('the .297 entity id word keeps the same login line\'s own entity id peak seat'))
  assert.ok(w6.includes('the .304 echo ceiling word keeps the setblock echo\'s own Y-max seat'))
  assert.ok(w6.includes('the .307 echo floor word keeps the echo\'s own Y-min seat'))
  assert.ok(w6.includes('the .314 login count word keeps the same lines\' count seat'))
  // the Y ceiling hand rides unread beside (the .304 mirror's own
  // pair law names for a future word)
  assert.ok(w6.includes('the Y ceiling hand rides unread beside'))
})

test('v0.976.317 rows: the held law and the three-face zero and the fence fail', () => {
  // the held step prices no direction - the honest silence
  assert.equal(loginFloorTrendRow({ back: { minLoginY: 43.0 }, prev: { minLoginY: 43.0 }, cur: { minLoginY: 46.2 } }), null)
  assert.equal(loginFloorTrendRow({ back: { minLoginY: 43.75 }, prev: { minLoginY: 43.0 }, cur: { minLoginY: 43.0 } }), null)
  // the three-face zero - the no-joins mass the family keeps silent
  assert.equal(loginFloorTrendRow({ back: { minLoginY: 0 }, prev: { minLoginY: 0 }, cur: { minLoginY: 0 } }), null)
  // the fence fail - the non-finite cell the domain never holds
  assert.equal(loginFloorTrendRow({ back: { minLoginY: Infinity }, prev: { minLoginY: 43.0 }, cur: { minLoginY: 46.0 } }), null)
  // the missing faces
  assert.equal(loginFloorTrendRow(null), null)
})
