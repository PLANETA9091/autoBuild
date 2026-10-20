import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loginCeilingCensus, loginCeilingConsistent, loginCeilingTrendRow } from '../../src/lib/loginceilingtrend.mjs'

// the REAL lines the faces carry (run 39319100730 F501, 39327612804
// F502, 39341992087 F505, 39349450602 F506, 39353992759 F507,
// 39356556714 F508 - the byte-exact prints the vanilla server's own
// acceptor spoke; the REAL eight-face ceiling arc the artifacts
// hold: F501 77.0, F502 72.0, F503 72.0, F504 72.0, F505 78.0, F506
// 80.0, F507 71.0, F508 75.0)

test('v0.976.318 census: the REAL lines byte-exact and the ceiling prices', () => {
  // F501's own face - the ceiling line the arc's W4 swell base rides
  const f501 = [
    '[20:40:38] [Server thread/INFO]: F2[/127.0.0.1:53000] logged in with entity id 309 at (-123.5, 77.0, 406.5)'
  ]
  assert.deepEqual(loginCeilingCensus(f501), { maxLoginY: 77 })
  // F502's own face - the short .0 skin the float domain prints
  const f502 = [
    '[21:40:57] [Server thread/INFO]: F1[/127.0.0.1:37050] logged in with entity id 272 at (-130.5, 72.0, 400.5)'
  ]
  assert.deepEqual(loginCeilingCensus(f502), { maxLoginY: 72 })
  // F506's own face - the arc's highest ceiling the W4 swell tops
  const f506 = [
    '[00:57:55] [Server thread/INFO]: F5[/127.0.0.1:51540] logged in with entity id 306 at (-122.5, 80.0, 408.5)'
  ]
  assert.deepEqual(loginCeilingCensus(f506), { maxLoginY: 80 })
  // F508's own face - the newest face the arc's W6 swing rides (run
  // 39356556714, the .313 tree's own fleet)
  const f508 = [
    '[02:15:26] [Server thread/INFO]: F17[/127.0.0.1:43900] logged in with entity id 550 at (-116.5, 75.0, 388.5)'
  ]
  assert.deepEqual(loginCeilingCensus(f508), { maxLoginY: 75 })
  // the MAX hand - the ceiling beats the floor (a lower login never
  // sinks the ceiling, the capture law the sibling hands hold)
  const maxhand = [
    '[20:00:00] [Server thread/INFO]: F7[/127.0.0.1:12345] logged in with entity id 99999 at (0.0, 43.25, 0.0)',
    '[20:00:01] [Server thread/INFO]: F8[/127.0.0.1:65535] logged in with entity id 1 at (0.0, 80.5, 0.0)',
    '[20:00:02] [Server thread/INFO]: F9[/127.0.0.1:11111] logged in with entity id 2 at (0.0, 65.02442408821369, 0.0)'
  ]
  assert.deepEqual(loginCeilingCensus(maxhand), { maxLoginY: 80.5 })
  // the sibling lanes never ride - the lost-connection lines and the
  // join/leave lines the same console wears
  const siblings = [
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:40:21] [Server thread/INFO]: YardSurvey joined the game',
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out'
  ]
  assert.deepEqual(loginCeilingCensus(siblings), { maxLoginY: 0 })
})

test('v0.976.318 census: the junk faces stay honest', () => {
  // the junk face - the lawful zero (the null-sentinel the .304/.306
  // convention holds - the no-login face the zero keeps)
  assert.deepEqual(loginCeilingCensus(['garbage', '', 'no logins here']), { maxLoginY: 0 })
  // the non-array - the honest null
  assert.equal(loginCeilingCensus(null), null)
  assert.equal(loginCeilingCensus('lines'), null)
  assert.equal(loginCeilingCensus(42), null)
  // the non-string members ride past unharmed
  assert.deepEqual(loginCeilingCensus([42, null, undefined, {}]), { maxLoginY: 0 })
})

test('v0.976.318 near-miss skins: thirteen forms the grammar refuses', () => {
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
  assert.deepEqual(loginCeilingCensus([good, ...refuses]), { maxLoginY: 48.2 })
})

test('v0.976.318 fence: the finite number cells every branch', () => {
  // the green fence
  assert.equal(loginCeilingConsistent({ back: { maxLoginY: 77.0 }, prev: { maxLoginY: 72.0 }, cur: { maxLoginY: 78.0 } }), true)
  assert.equal(loginCeilingConsistent({ back: { maxLoginY: 0 }, prev: { maxLoginY: 0 }, cur: { maxLoginY: 0 } }), true)
  // the positive cell - the domain the positives lawful hold
  assert.equal(loginCeilingConsistent({ back: { maxLoginY: 71.0 }, prev: { maxLoginY: 80.0 }, cur: { maxLoginY: 75.0 } }), true)
  // the non-finite cells
  assert.equal(loginCeilingConsistent({ back: { maxLoginY: Infinity }, prev: { maxLoginY: 72.0 }, cur: { maxLoginY: 78.0 } }), false)
  assert.equal(loginCeilingConsistent({ back: { maxLoginY: NaN }, prev: { maxLoginY: 72.0 }, cur: { maxLoginY: 78.0 } }), false)
  // the string cell
  assert.equal(loginCeilingConsistent({ back: { maxLoginY: '77.0' }, prev: { maxLoginY: 72.0 }, cur: { maxLoginY: 78.0 } }), false)
  // the missing faces
  assert.equal(loginCeilingConsistent(null), false)
  assert.equal(loginCeilingConsistent({}), false)
  assert.equal(loginCeilingConsistent({ back: { maxLoginY: 77.0 }, prev: { maxLoginY: 72.0 } }), false)
})

test('v0.976.318 rows: the REAL six windows byte-exact - three speaks three held', () => {
  // W1 - F501 -> F502 -> F503: the second step held - the honest silence
  const w1 = loginCeilingTrendRow({ back: { maxLoginY: 77.0 }, prev: { maxLoginY: 72.0 }, cur: { maxLoginY: 72.0 } })
  assert.equal(w1, null)
  // W2 - F502 -> F503 -> F504: both steps held - the honest silence
  assert.equal(loginCeilingTrendRow({ back: { maxLoginY: 72.0 }, prev: { maxLoginY: 72.0 }, cur: { maxLoginY: 72.0 } }), null)
  // W3 - F503 -> F504 -> F505: the first step held - the honest silence
  assert.equal(loginCeilingTrendRow({ back: { maxLoginY: 72.0 }, prev: { maxLoginY: 72.0 }, cur: { maxLoginY: 78.0 } }), null)
  // W4 - F504 -> F505 -> F506: the swell the climb rides
  const w4 = loginCeilingTrendRow({ back: { maxLoginY: 72.0 }, prev: { maxLoginY: 78.0 }, cur: { maxLoginY: 80.0 } })
  assert.ok(w4.includes('the login ceiling\'s own swell ran two steps deep - 72 -> 78 (+6) -> 80 (+2)'))
  // W5 - F505 -> F506 -> F507: the swing the F507 first-read rides
  const w5 = loginCeilingTrendRow({ back: { maxLoginY: 78.0 }, prev: { maxLoginY: 80.0 }, cur: { maxLoginY: 71.0 } })
  assert.ok(w5.includes('the login ceiling\'s own swing - 78 -> 80 (+2) -> 71 (-9)'))
  // W6 - F506 -> F507 -> F508: the swing the F508 first-read rides
  const w6 = loginCeilingTrendRow({ back: { maxLoginY: 80.0 }, prev: { maxLoginY: 71.0 }, cur: { maxLoginY: 75.0 } })
  assert.ok(w6.includes('the login ceiling\'s own swing - 80 -> 71 (-9) -> 75 (+4)'))
  // the tail co-existence rides every row
  assert.ok(w6.includes('the .317 login floor word keeps the same cell\'s floor seat'))
  assert.ok(w6.includes('the .315 login east word keeps the same line\'s east edge seat'))
  assert.ok(w6.includes('the .316 login west word keeps the same line\'s west edge seat'))
  assert.ok(w6.includes('the .297 entity id word keeps the same login line\'s own entity id peak seat'))
  assert.ok(w6.includes('the .304 echo ceiling word keeps the setblock echo\'s own Y-max seat'))
  assert.ok(w6.includes('the .307 echo floor word keeps the echo\'s own Y-min seat'))
  assert.ok(w6.includes('the .314 login count word keeps the same lines\' count seat'))
  // the synthetic fade branch the all-swell birth never rode (the
  // family's own coverage law)
  const fade = loginCeilingTrendRow({ back: { maxLoginY: 80.0 }, prev: { maxLoginY: 75.0 }, cur: { maxLoginY: 71.0 } })
  assert.ok(fade.includes('the login ceiling\'s own fade ran two steps deep - 80 -> 75 (-5) -> 71 (-4)'))
})

test('v0.976.318 rows: the held law and the three-face zero and the fence fail', () => {
  // the held step prices no direction - the honest silence
  assert.equal(loginCeilingTrendRow({ back: { maxLoginY: 72.0 }, prev: { maxLoginY: 72.0 }, cur: { maxLoginY: 80.0 } }), null)
  assert.equal(loginCeilingTrendRow({ back: { maxLoginY: 78.0 }, prev: { maxLoginY: 71.0 }, cur: { maxLoginY: 71.0 } }), null)
  // the three-face zero - the no-joins mass the family keeps silent
  assert.equal(loginCeilingTrendRow({ back: { maxLoginY: 0 }, prev: { maxLoginY: 0 }, cur: { maxLoginY: 0 } }), null)
  // the fence fail - the non-finite cell the domain never holds
  assert.equal(loginCeilingTrendRow({ back: { maxLoginY: Infinity }, prev: { maxLoginY: 72.0 }, cur: { maxLoginY: 75.0 } }), null)
  // the missing faces
  assert.equal(loginCeilingTrendRow(null), null)
})
