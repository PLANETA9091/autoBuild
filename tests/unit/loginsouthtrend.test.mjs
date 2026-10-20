import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loginSouthCensus, loginSouthConsistent, loginSouthTrendRow } from '../../src/lib/loginsouthtrend.mjs'

// the REAL lines the faces carry (run 39319100730 F501, 39327612804
// F502, 39334531367 F503, 39360759429 F509, 39364947414 F510 - the
// byte-exact prints the vanilla server's own acceptor spoke; the
// REAL ten-face south arc the artifacts hold: F501 439.7, F502
// 410.3, F503 409.5, F504 406.7, F505 432.7, F506
// 420.17018125938336, F507 408.67004669518434, F508 413.3, F509
// 415.5, F510 402.5)

test('v0.976.320 census: the REAL lines byte-exact and the south prices', () => {
  // F501's own face - the south line the arc's W1 fade base rides
  const f501 = [
    '[20:48:57] [Server thread/INFO]: F8[/127.0.0.1:36726] logged in with entity id 3764 at (-122.49999930994368, 62.7967356006687, 439.7)'
  ]
  assert.deepEqual(loginSouthCensus(f501), { maxLoginZ: 439.7 })
  // F506's own face - the long-float skin the domain honestly carries
  const f506 = [
    '[01:05:34] [Server thread/INFO]: F1[/127.0.0.1:48448] logged in with entity id 3992 at (-113.18476689240512, 65.0, 420.17018125938336)'
  ]
  assert.deepEqual(loginSouthCensus(f506), { maxLoginZ: 420.17018125938336 })
  // F509's own face - the newest-but-one face (run 39360759429, the
  // .315 tree's own fleet)
  const f509 = [
    '[03:02:42] [Server thread/INFO]: F5[/127.0.0.1:37448] logged in with entity id 329 at (-119.5, 69.0, 415.5)'
  ]
  assert.deepEqual(loginSouthCensus(f509), { maxLoginZ: 415.5 })
  // F510's own face - the newest face the arc's W8 swing rides (run
  // 39364947414, the .317 tree's own fleet)
  const f510 = [
    '[03:48:08] [Server thread/INFO]: F11[/127.0.0.1:46104] logged in with entity id 346 at (-114.5, 74.0, 402.5)'
  ]
  assert.deepEqual(loginSouthCensus(f510), { maxLoginZ: 402.5 })
  // the MAX hand - the south beats the north (a further-north login
  // never sinks the south edge, the capture law the sibling hands hold)
  const maxhand = [
    '[20:00:00] [Server thread/INFO]: F7[/127.0.0.1:12345] logged in with entity id 99999 at (0.0, 64.0, 350.25)',
    '[20:00:01] [Server thread/INFO]: F8[/127.0.0.1:65535] logged in with entity id 1 at (0.0, 64.0, 500.5)',
    '[20:00:02] [Server thread/INFO]: F9[/127.0.0.1:11111] logged in with entity id 2 at (0.0, 64.0, 439.7)'
  ]
  assert.deepEqual(loginSouthCensus(maxhand), { maxLoginZ: 500.5 })
  // the sibling lanes never ride - the lost-connection lines and the
  // join/leave lines the same console wears
  const siblings = [
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:40:21] [Server thread/INFO]: YardSurvey joined the game',
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out'
  ]
  assert.deepEqual(loginSouthCensus(siblings), { maxLoginZ: 0 })
})

test('v0.976.320 census: the junk faces stay honest', () => {
  // the junk face - the lawful zero (the null-sentinel the .304/.306
  // convention holds - the no-login face the zero keeps)
  assert.deepEqual(loginSouthCensus(['garbage', '', 'no logins here']), { maxLoginZ: 0 })
  // the non-array - the honest null
  assert.equal(loginSouthCensus(null), null)
  assert.equal(loginSouthCensus('lines'), null)
  assert.equal(loginSouthCensus(42), null)
  // the non-string members ride past unharmed
  assert.deepEqual(loginSouthCensus([42, null, undefined, {}]), { maxLoginZ: 0 })
})

test('v0.976.320 near-miss skins: thirteen forms the grammar refuses', () => {
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
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410)',
    // the leading whitespace
    ' [21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the trailing junk
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3) extra',
    // the CR tail
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)\r'
  ]
  assert.deepEqual(loginSouthCensus([good, ...refuses]), { maxLoginZ: 410.3 })
})

test('v0.976.320 fence: the finite number cells every branch', () => {
  // the green fence
  assert.equal(loginSouthConsistent({ back: { maxLoginZ: 439.7 }, prev: { maxLoginZ: 410.3 }, cur: { maxLoginZ: 409.5 } }), true)
  assert.equal(loginSouthConsistent({ back: { maxLoginZ: 0 }, prev: { maxLoginZ: 0 }, cur: { maxLoginZ: 0 } }), true)
  // the positive cell - the domain the positives lawful hold
  assert.equal(loginSouthConsistent({ back: { maxLoginZ: 415.5 }, prev: { maxLoginZ: 402.5 }, cur: { maxLoginZ: 439.7 } }), true)
  // the non-finite cells
  assert.equal(loginSouthConsistent({ back: { maxLoginZ: Infinity }, prev: { maxLoginZ: 410.3 }, cur: { maxLoginZ: 409.5 } }), false)
  assert.equal(loginSouthConsistent({ back: { maxLoginZ: NaN }, prev: { maxLoginZ: 410.3 }, cur: { maxLoginZ: 409.5 } }), false)
  // the string cell
  assert.equal(loginSouthConsistent({ back: { maxLoginZ: '439.7' }, prev: { maxLoginZ: 410.3 }, cur: { maxLoginZ: 409.5 } }), false)
  // the missing faces
  assert.equal(loginSouthConsistent(null), false)
  assert.equal(loginSouthConsistent({}), false)
  assert.equal(loginSouthConsistent({ back: { maxLoginZ: 439.7 }, prev: { maxLoginZ: 410.3 } }), false)
})

test('v0.976.320 rows: the REAL eight windows byte-exact - born speaking eight deep', () => {
  // W1 - F501 -> F502 -> F503: the fade
  const w1 = loginSouthTrendRow({ back: { maxLoginZ: 439.7 }, prev: { maxLoginZ: 410.3 }, cur: { maxLoginZ: 409.5 } })
  assert.ok(w1.includes('the login south edge\'s own fade ran two steps deep - 439.7 -> 410.3 (-29.399999999999977) -> 409.5 (-0.8000000000000114)'))
  // W2 - F502 -> F503 -> F504: the fade
  const w2 = loginSouthTrendRow({ back: { maxLoginZ: 410.3 }, prev: { maxLoginZ: 409.5 }, cur: { maxLoginZ: 406.7 } })
  assert.ok(w2.includes('the login south edge\'s own fade ran two steps deep - 410.3 -> 409.5 (-0.8000000000000114) -> 406.7 (-2.8000000000000114)'))
  // W3 - F503 -> F504 -> F505: the swing
  const w3 = loginSouthTrendRow({ back: { maxLoginZ: 409.5 }, prev: { maxLoginZ: 406.7 }, cur: { maxLoginZ: 432.7 } })
  assert.ok(w3.includes('the login south edge\'s own swing - 409.5 -> 406.7 (-2.8000000000000114) -> 432.7 (+26)'))
  // W4 - F504 -> F505 -> F506: the swing
  const w4 = loginSouthTrendRow({ back: { maxLoginZ: 406.7 }, prev: { maxLoginZ: 432.7 }, cur: { maxLoginZ: 420.17018125938336 } })
  assert.ok(w4.includes('the login south edge\'s own swing - 406.7 -> 432.7 (+26) -> 420.17018125938336 (-12.529818740616633)'))
  // W5 - F505 -> F506 -> F507: the fade
  const w5 = loginSouthTrendRow({ back: { maxLoginZ: 432.7 }, prev: { maxLoginZ: 420.17018125938336 }, cur: { maxLoginZ: 408.67004669518434 } })
  assert.ok(w5.includes('the login south edge\'s own fade ran two steps deep - 432.7 -> 420.17018125938336 (-12.529818740616633) -> 408.67004669518434 (-11.500134564199016)'))
  // W6 - F506 -> F507 -> F508: the swing
  const w6 = loginSouthTrendRow({ back: { maxLoginZ: 420.17018125938336 }, prev: { maxLoginZ: 408.67004669518434 }, cur: { maxLoginZ: 413.3 } })
  assert.ok(w6.includes('the login south edge\'s own swing - 420.17018125938336 -> 408.67004669518434 (-11.500134564199016) -> 413.3 (+4.629953304815672)'))
  // W7 - F507 -> F508 -> F509: the swell the F509 first-read rides
  const w7 = loginSouthTrendRow({ back: { maxLoginZ: 408.67004669518434 }, prev: { maxLoginZ: 413.3 }, cur: { maxLoginZ: 415.5 } })
  assert.ok(w7.includes('the login south edge\'s own swell ran two steps deep - 408.67004669518434 -> 413.3 (+4.629953304815672) -> 415.5 (+2.1999999999999886)'))
  // W8 - F508 -> F509 -> F510: the swing the F510 first-read rides
  const w8 = loginSouthTrendRow({ back: { maxLoginZ: 413.3 }, prev: { maxLoginZ: 415.5 }, cur: { maxLoginZ: 402.5 } })
  assert.ok(w8.includes('the login south edge\'s own swing - 413.3 -> 415.5 (+2.1999999999999886) -> 402.5 (-13)'))
  // the tail co-existence rides every row
  assert.ok(w8.includes('the .319 login north word keeps the same cell\'s north seat'))
  assert.ok(w8.includes('the .317 login floor word keeps the same line\'s floor seat'))
  assert.ok(w8.includes('the .318 login ceiling word keeps the same cell\'s ceiling seat'))
  assert.ok(w8.includes('the .315 login east word keeps the same line\'s east edge seat'))
  assert.ok(w8.includes('the .316 login west word keeps the same line\'s west edge seat'))
  assert.ok(w8.includes('the .297 entity id word keeps the same login line\'s own entity id peak seat'))
  assert.ok(w8.includes('the .305 echo north word keeps the setblock echo\'s own Z-min seat'))
  assert.ok(w8.includes('the .308 echo south word keeps the echo\'s own Z-max seat'))
  assert.ok(w8.includes('the .314 login count word keeps the same lines\' count seat'))
})

test('v0.976.320 rows: the held law and the three-face zero and the fence fail', () => {
  // the held step prices no direction - the honest silence (the
  // all-trading birth never rode a held step)
  assert.equal(loginSouthTrendRow({ back: { maxLoginZ: 410.3 }, prev: { maxLoginZ: 410.3 }, cur: { maxLoginZ: 406.7 } }), null)
  assert.equal(loginSouthTrendRow({ back: { maxLoginZ: 415.5 }, prev: { maxLoginZ: 402.5 }, cur: { maxLoginZ: 402.5 } }), null)
  // the three-face zero - the no-joins mass the family keeps silent
  assert.equal(loginSouthTrendRow({ back: { maxLoginZ: 0 }, prev: { maxLoginZ: 0 }, cur: { maxLoginZ: 0 } }), null)
  // the fence fail - the non-finite cell the domain never holds
  assert.equal(loginSouthTrendRow({ back: { maxLoginZ: Infinity }, prev: { maxLoginZ: 410.3 }, cur: { maxLoginZ: 402.5 } }), null)
  // the missing faces
  assert.equal(loginSouthTrendRow(null), null)
})
