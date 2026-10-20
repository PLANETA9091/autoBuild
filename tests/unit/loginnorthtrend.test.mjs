import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loginNorthCensus, loginNorthConsistent, loginNorthTrendRow } from '../../src/lib/loginnorthtrend.mjs'

// the REAL lines the faces carry (run 39319100730 F501, 39327612804
// F502, 39349450602 F506-tree F505, 39356556714 F508, 39360759429
// F509, 39364947414 F510 - the byte-exact prints the vanilla server's
// own acceptor spoke; the REAL ten-face north arc the artifacts hold:
// F501 367.3, F502 369.7, F503 387.40643534050946, F504
// 370.49016791070585, F505 371.5, F506 391.5003579676622, F507 387.5,
// F508 377.4998057557638, F509 364.3695904441215, F510 351.3)

test('v0.976.319 census: the REAL lines byte-exact and the north prices', () => {
  // F501's own face - the north line the arc's W1 swell rides
  const f501 = [
    '[20:50:07] [Server thread/INFO]: F17[/127.0.0.1:47016] logged in with entity id 4064 at (-113.50084909676028, 49.0, 367.3)'
  ]
  assert.deepEqual(loginNorthCensus(f501), { minLoginZ: 367.3 })
  // F502's own face - the short-coord skin the domain prints
  const f502 = [
    '[21:50:18] [Server thread/INFO]: F15[/127.0.0.1:43752] logged in with entity id 3920 at (-106.3, 44.2, 369.7)'
  ]
  assert.deepEqual(loginNorthCensus(f502), { minLoginZ: 369.7 })
  // F505's own face - the long-float Y skin the shape-only cell rides
  const f505 = [
    '[23:52:11] [Server thread/INFO]: F13[/127.0.0.1:53994] logged in with entity id 4071 at (-121.5, 61.25280794675731, 371.5)'
  ]
  assert.deepEqual(loginNorthCensus(f505), { minLoginZ: 371.5 })
  // F508's own face - the long-float Z skin the north hand captures
  const f508 = [
    '[02:24:02] [Server thread/INFO]: F8[/127.0.0.1:36472] logged in with entity id 3231 at (-97.60304291827654, 68.0, 377.4998057557638)'
  ]
  assert.deepEqual(loginNorthCensus(f508), { minLoginZ: 377.4998057557638 })
  // F509's own face - the arc's ninth read (run 39360759429, the .315
  // tree's own fleet) the W7 fade rides
  const f509 = [
    '[03:12:18] [Server thread/INFO]: F16[/127.0.0.1:39284] logged in with entity id 4851 at (-108.24942136202331, 62.31490163824339, 364.3695904441215)'
  ]
  assert.deepEqual(loginNorthCensus(f509), { minLoginZ: 364.3695904441215 })
  // F510's own face - the arc's newest read (run 39364947414, the
  // .317 tree's own fleet) the W8 fade rides
  const f510 = [
    '[03:54:11] [Server thread/INFO]: F16[/127.0.0.1:33006] logged in with entity id 3117 at (-116.49985428820928, 57.23104873106691, 351.3)'
  ]
  assert.deepEqual(loginNorthCensus(f510), { minLoginZ: 351.3 })
  // the MIN hand - the north beats the south (a higher-Z login never
  // swells the north, the capture law the sibling hands hold)
  const minhand = [
    '[20:00:00] [Server thread/INFO]: F7[/127.0.0.1:12345] logged in with entity id 99999 at (0.0, 43.25, 439.7)',
    '[20:00:01] [Server thread/INFO]: F8[/127.0.0.1:65535] logged in with entity id 1 at (0.0, 80.5, 367.25)',
    '[20:00:02] [Server thread/INFO]: F9[/127.0.0.1:11111] logged in with entity id 2 at (0.0, 65.02442408821369, 438.3)'
  ]
  assert.deepEqual(loginNorthCensus(minhand), { minLoginZ: 367.25 })
  // the sibling lanes never ride - the lost-connection lines and the
  // join/leave lines the same console wears
  const siblings = [
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:40:21] [Server thread/INFO]: YardSurvey joined the game',
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out'
  ]
  assert.deepEqual(loginNorthCensus(siblings), { minLoginZ: 0 })
})

test('v0.976.319 census: the junk faces stay honest', () => {
  // the junk face - the lawful zero (the null-sentinel the .307/.309
  // convention holds - the no-login face the zero keeps)
  assert.deepEqual(loginNorthCensus(['garbage', '', 'no logins here']), { minLoginZ: 0 })
  // the non-array - the honest null
  assert.equal(loginNorthCensus(null), null)
  assert.equal(loginNorthCensus('lines'), null)
  assert.equal(loginNorthCensus(42), null)
  // the non-string members ride past unharmed
  assert.deepEqual(loginNorthCensus([42, null, undefined, {}]), { minLoginZ: 0 })
})

test('v0.976.319 near-miss skins: thirteen forms the grammar refuses', () => {
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
  assert.deepEqual(loginNorthCensus([good, ...refuses]), { minLoginZ: 410.3 })
})

test('v0.976.319 fence: the finite number cells every branch', () => {
  // the green fence
  assert.equal(loginNorthConsistent({ back: { minLoginZ: 367.3 }, prev: { minLoginZ: 369.7 }, cur: { minLoginZ: 387.40643534050946 } }), true)
  assert.equal(loginNorthConsistent({ back: { minLoginZ: 0 }, prev: { minLoginZ: 0 }, cur: { minLoginZ: 0 } }), true)
  // the positive cell - the domain the positives lawful hold
  assert.equal(loginNorthConsistent({ back: { minLoginZ: 391.5 }, prev: { minLoginZ: 387.5 }, cur: { minLoginZ: 377.5 } }), true)
  // the non-finite cells
  assert.equal(loginNorthConsistent({ back: { minLoginZ: Infinity }, prev: { minLoginZ: 369.7 }, cur: { minLoginZ: 387.5 } }), false)
  assert.equal(loginNorthConsistent({ back: { minLoginZ: NaN }, prev: { minLoginZ: 369.7 }, cur: { minLoginZ: 387.5 } }), false)
  // the string cell
  assert.equal(loginNorthConsistent({ back: { minLoginZ: '367.3' }, prev: { minLoginZ: 369.7 }, cur: { minLoginZ: 387.5 } }), false)
  // the missing faces
  assert.equal(loginNorthConsistent(null), false)
  assert.equal(loginNorthConsistent({}), false)
  assert.equal(loginNorthConsistent({ back: { minLoginZ: 367.3 }, prev: { minLoginZ: 369.7 } }), false)
})

test('v0.976.319 rows: the REAL eight windows byte-exact - born speaking eight deep', () => {
  // W1 - F501 -> F502 -> F503: the swell
  const w1 = loginNorthTrendRow({ back: { minLoginZ: 367.3 }, prev: { minLoginZ: 369.7 }, cur: { minLoginZ: 387.40643534050946 } })
  assert.ok(w1.includes('the login north\'s own swell ran two steps deep - 367.3 -> 369.7 (+2.3999999999999773) -> 387.40643534050946 (+17.706435340509472)'))
  // W2 - F502 -> F503 -> F504: the swing
  const w2 = loginNorthTrendRow({ back: { minLoginZ: 369.7 }, prev: { minLoginZ: 387.40643534050946 }, cur: { minLoginZ: 370.49016791070585 } })
  assert.ok(w2.includes('the login north\'s own swing - 369.7 -> 387.40643534050946 (+17.706435340509472) -> 370.49016791070585 (-16.91626742980361)'))
  // W3 - F503 -> F504 -> F505: the swing
  const w3 = loginNorthTrendRow({ back: { minLoginZ: 387.40643534050946 }, prev: { minLoginZ: 370.49016791070585 }, cur: { minLoginZ: 371.5 } })
  assert.ok(w3.includes('the login north\'s own swing - 387.40643534050946 -> 370.49016791070585 (-16.91626742980361) -> 371.5 (+1.0098320892941501)'))
  // W4 - F504 -> F505 -> F506: the swell
  const w4 = loginNorthTrendRow({ back: { minLoginZ: 370.49016791070585 }, prev: { minLoginZ: 371.5 }, cur: { minLoginZ: 391.5003579676622 } })
  assert.ok(w4.includes('the login north\'s own swell ran two steps deep - 370.49016791070585 -> 371.5 (+1.0098320892941501) -> 391.5003579676622 (+20.000357967662183)'))
  // W5 - F505 -> F506 -> F507: the swing
  const w5 = loginNorthTrendRow({ back: { minLoginZ: 371.5 }, prev: { minLoginZ: 391.5003579676622 }, cur: { minLoginZ: 387.5 } })
  assert.ok(w5.includes('the login north\'s own swing - 371.5 -> 391.5003579676622 (+20.000357967662183) -> 387.5 (-4.0003579676621825)'))
  // W6 - F506 -> F507 -> F508: the fade
  const w6 = loginNorthTrendRow({ back: { minLoginZ: 391.5003579676622 }, prev: { minLoginZ: 387.5 }, cur: { minLoginZ: 377.4998057557638 } })
  assert.ok(w6.includes('the login north\'s own fade ran two steps deep - 391.5003579676622 -> 387.5 (-4.0003579676621825) -> 377.4998057557638 (-10.000194244236184)'))
  // W7 - F507 -> F508 -> F509: the fade the F509 first-read rides
  const w7 = loginNorthTrendRow({ back: { minLoginZ: 387.5 }, prev: { minLoginZ: 377.4998057557638 }, cur: { minLoginZ: 364.3695904441215 } })
  assert.ok(w7.includes('the login north\'s own fade ran two steps deep - 387.5 -> 377.4998057557638 (-10.000194244236184) -> 364.3695904441215 (-13.130215311642303)'))
  // W8 - F508 -> F509 -> F510: the fade the F510 first-read rides
  const w8 = loginNorthTrendRow({ back: { minLoginZ: 377.4998057557638 }, prev: { minLoginZ: 364.3695904441215 }, cur: { minLoginZ: 351.3 } })
  assert.ok(w8.includes('the login north\'s own fade ran two steps deep - 377.4998057557638 -> 364.3695904441215 (-13.130215311642303) -> 351.3 (-13.069590444121502)'))
  // the tail co-existence rides every row
  assert.ok(w8.includes('the .318 login ceiling word keeps the same line\'s Y cell\'s ceiling seat'))
  assert.ok(w8.includes('the .317 login floor word keeps the same cell\'s floor seat'))
  assert.ok(w8.includes('the .315 login east word keeps the same line\'s east edge seat'))
  assert.ok(w8.includes('the .316 login west word keeps the same cell\'s west edge seat'))
  assert.ok(w8.includes('the .297 entity id word keeps the same login line\'s own entity id peak seat'))
  assert.ok(w8.includes('the .305 echo north word keeps the setblock echo\'s own Z-min seat'))
  assert.ok(w8.includes('the .308 echo south word keeps the echo\'s own Z-max seat'))
  assert.ok(w8.includes('the .314 login count word keeps the same lines\' count seat'))
  // the Z south hand rides unread beside (the .308 mirror's own pair
  // law names for a future word)
  assert.ok(w8.includes('the Z south hand rides unread beside'))
})

test('v0.976.319 rows: the held law and the three-face zero and the fence fail', () => {
  // the held step prices no direction - the honest silence (the
  // synthetic branches the birth arc never rode - the real eight
  // windows all traded)
  assert.equal(loginNorthTrendRow({ back: { minLoginZ: 367.3 }, prev: { minLoginZ: 367.3 }, cur: { minLoginZ: 369.7 } }), null)
  assert.equal(loginNorthTrendRow({ back: { minLoginZ: 369.7 }, prev: { minLoginZ: 367.3 }, cur: { minLoginZ: 367.3 } }), null)
  // the three-face zero - the no-joins mass the family keeps silent
  assert.equal(loginNorthTrendRow({ back: { minLoginZ: 0 }, prev: { minLoginZ: 0 }, cur: { minLoginZ: 0 } }), null)
  // the fence fail - the non-finite cell the domain never holds
  assert.equal(loginNorthTrendRow({ back: { minLoginZ: Infinity }, prev: { minLoginZ: 367.3 }, cur: { minLoginZ: 351.3 } }), null)
  // the missing faces
  assert.equal(loginNorthTrendRow(null), null)
})
