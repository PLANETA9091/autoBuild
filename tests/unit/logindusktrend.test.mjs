import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loginDuskCensus, loginDuskConsistent, loginDuskTrendRow } from '../../src/lib/logindusktrend.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own acceptor spoke; the REAL eleven-face dusk arc the
// artifacts hold - seconds since midnight: F501 75026, F502 78656,
// F503 81949, F504 84295, F505 86054, F506 4065, F507 6873, F508
// 8671, F509 11538, F510 14259, F511 16129; the dawn values the same
// faces hold match the .321 word's REAL arc byte-exact - 74421/78043/
// 81336/83703/85447/3453/6264/8071/10939/13649/15523 - the mining
// pipeline the family trusts; the dusk speakers the faces hold -
// F6/F3/F5/F12/F17/F8/F8/F1/F16/F5/F6 - no single bot owns the dusk
// seat, the dawn's YardSurvey monopoly the exception does not extend)

test('v0.976.322 census: the REAL lines byte-exact and the dusk prices', () => {
  // F501's own face - the dusk the arc's W1 swell base rides
  const f501 = [
    '[20:50:26] [Server thread/INFO]: F6[/127.0.0.1:47898] logged in with entity id 4154 at (-131.49961560785792, 43.7531999805212, 438.3)'
  ]
  assert.deepEqual(loginDuskCensus(f501), { duskSec: 75026 })
  // F506's own face - the leading-zero hour the emitter's own shape
  // rides (the midnight-wrap face, 01:07:45 the day boundary crossed)
  const f506 = [
    '[01:07:45] [Server thread/INFO]: F8[/127.0.0.1:49894] logged in with entity id 4726 at (-115.4999999999999, 71.0, 411.5)'
  ]
  assert.deepEqual(loginDuskCensus(f506), { duskSec: 4065 })
  // F510's own face - the newest-but-one face (run 39364947414, the
  // .317 tree's own fleet)
  const f510 = [
    '[03:57:39] [Server thread/INFO]: F5[/127.0.0.1:36394] logged in with entity id 4191 at (-126.31215918709069, 60.0, 388.94045642569006)'
  ]
  assert.deepEqual(loginDuskCensus(f510), { duskSec: 14259 })
  // F511's own face - the newest face the arc's W9 swell rides (the
  // .318 tree's own fleet, run 39367608493) - the dawn AND the dusk
  // the same face holds, the MAX hand the dusk keeps
  const f511 = [
    '[04:18:43] [Server thread/INFO]: YardSurvey[/127.0.0.1:50936] logged in with entity id 17 at (-132.5, 69.0, 395.5)',
    '[04:28:49] [Server thread/INFO]: F6[/127.0.0.1:36628] logged in with entity id 4539 at (-150.3, 68.0, 400.7)'
  ]
  assert.deepEqual(loginDuskCensus(f511), { duskSec: 16129 })
  // the MAX hand - the dusk beats the dawn (a later login always
  // lifts the dusk, an earlier one never sinks it - the capture law
  // the sibling hands hold)
  const maxhand = [
    '[20:00:10] [Server thread/INFO]: F7[/127.0.0.1:12345] logged in with entity id 99999 at (0.0, 64.0, 350.25)',
    '[09:15:59] [Server thread/INFO]: F8[/127.0.0.1:65535] logged in with entity id 1 at (0.0, 64.0, 500.5)',
    '[23:59:59] [Server thread/INFO]: F9[/127.0.0.1:11111] logged in with entity id 2 at (0.0, 64.0, 439.7)'
  ]
  assert.deepEqual(loginDuskCensus(maxhand), { duskSec: 86399 })
  // the sibling lanes never ride - the lost-connection lines and the
  // join/leave lines the same console wears
  const siblings = [
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:40:21] [Server thread/INFO]: YardSurvey joined the game',
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out'
  ]
  assert.deepEqual(loginDuskCensus(siblings), { duskSec: 0 })
})

test('v0.976.322 census: the junk faces stay honest', () => {
  // the junk face - the lawful zero (the null-sentinel the .304/.306
  // convention holds - the no-login face the zero keeps)
  assert.deepEqual(loginDuskCensus(['garbage', '', 'no logins here']), { duskSec: 0 })
  // the non-array - the honest null
  assert.equal(loginDuskCensus(null), null)
  assert.equal(loginDuskCensus('lines'), null)
  assert.equal(loginDuskCensus(42), null)
  // the non-string members ride past unharmed
  assert.deepEqual(loginDuskCensus([42, null, undefined, {}]), { duskSec: 0 })
})

test('v0.976.322 near-miss skins: nineteen forms the grammar refuses', () => {
  const good = '[21:50:56] [Server thread/INFO]: F3[/127.0.0.1:38926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)'
  const refuses = [
    // the bot-tagged prefix - the fleet log's own skin, the server
    // console never wears it
    '[F3] [21:50:56] F3[/127.0.0.1:38926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the WARN frame
    '[21:50:56] [Server thread/WARN]: F3[/127.0.0.1:38926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the pretty spacing
    '[21:50:56] [Server thread/INFO]:  F3[/127.0.0.1:38926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the plural body
    '[21:50:56] [Server thread/INFO]: F3[/127.0.0.1:38926] logged in with entity ids 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the altered verb
    '[21:50:56] [Server thread/INFO]: F3[/127.0.0.1:38926] logged on with entity id 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the missing port cell
    '[21:50:56] [Server thread/INFO]: F3[/127.0.0.1] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the float port
    '[21:50:56] [Server thread/INFO]: F3[/127.0.0.1:38926.5] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the leading-zero port - the .248 house law
    '[21:50:56] [Server thread/INFO]: F3[/127.0.0.1:038926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the plus port
    '[21:50:56] [Server thread/INFO]: F3[/127.0.0.1:+38926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the integer coord - no decimal point, the float domain the
    // .315 sibling's own skin the grammar refuses
    '[21:50:56] [Server thread/INFO]: F3[/127.0.0.1:38926] logged in with entity id 4111 at (-131.5, 63.0, 397)',
    // the leading whitespace
    ' [21:50:56] [Server thread/INFO]: F3[/127.0.0.1:38926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the trailing junk
    '[21:50:56] [Server thread/INFO]: F3[/127.0.0.1:38926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775) extra',
    // the CR tail
    '[21:50:56] [Server thread/INFO]: F3[/127.0.0.1:38926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)\r',
    // the 1-digit hour clock - the zero-padded fixed field the
    // emitter always prints
    '[1:54:33] [Server thread/INFO]: F3[/127.0.0.1:38926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the overflow hour clock - 24 the clock domain never holds
    '[24:00:00] [Server thread/INFO]: F3[/127.0.0.1:38926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the overflow minute clock
    '[21:60:56] [Server thread/INFO]: F3[/127.0.0.1:38926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the overflow second clock
    '[21:50:60] [Server thread/INFO]: F3[/127.0.0.1:38926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the dash-separator clock
    '[21-50-56] [Server thread/INFO]: F3[/127.0.0.1:38926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)',
    // the missing-seconds clock
    '[21:50] [Server thread/INFO]: F3[/127.0.0.1:38926] logged in with entity id 4111 at (-131.5, 63.0, 397.40840290568775)'
  ]
  assert.deepEqual(loginDuskCensus([good, ...refuses]), { duskSec: 78656 })
})

test('v0.976.322 fence: the integer clock cells every branch', () => {
  // the green fence - the REAL dusk cells the faces hold
  assert.equal(loginDuskConsistent({ back: { duskSec: 75026 }, prev: { duskSec: 78656 }, cur: { duskSec: 81949 } }), true)
  // the zero face - the no-login mass the fence lawfully keeps
  assert.equal(loginDuskConsistent({ back: { duskSec: 0 }, prev: { duskSec: 0 }, cur: { duskSec: 0 } }), true)
  // the domain ceiling - 86399 (23:59:59) the last second the day holds
  assert.equal(loginDuskConsistent({ back: { duskSec: 86399 }, prev: { duskSec: 4065 }, cur: { duskSec: 16129 } }), true)
  // the ceiling breach - 86400 the clock domain refuses
  assert.equal(loginDuskConsistent({ back: { duskSec: 86400 }, prev: { duskSec: 4065 }, cur: { duskSec: 16129 } }), false)
  // the negative cell - the seconds-since-midnight domain never holds
  assert.equal(loginDuskConsistent({ back: { duskSec: -1 }, prev: { duskSec: 4065 }, cur: { duskSec: 16129 } }), false)
  // the non-integer cell - the integer law the .311/.314 fence holds
  assert.equal(loginDuskConsistent({ back: { duskSec: 75026.5 }, prev: { duskSec: 4065 }, cur: { duskSec: 16129 } }), false)
  // the non-finite cells
  assert.equal(loginDuskConsistent({ back: { duskSec: Infinity }, prev: { duskSec: 4065 }, cur: { duskSec: 16129 } }), false)
  assert.equal(loginDuskConsistent({ back: { duskSec: NaN }, prev: { duskSec: 4065 }, cur: { duskSec: 16129 } }), false)
  // the string cell
  assert.equal(loginDuskConsistent({ back: { duskSec: '75026' }, prev: { duskSec: 4065 }, cur: { duskSec: 16129 } }), false)
  // the missing faces
  assert.equal(loginDuskConsistent(null), false)
  assert.equal(loginDuskConsistent({}), false)
  assert.equal(loginDuskConsistent({ back: { duskSec: 75026 }, prev: { duskSec: 4065 } }), false)
})

test('v0.976.322 rows: the REAL nine windows byte-exact - born speaking nine deep', () => {
  // W1 - F501 -> F502 -> F503: the swell
  const w1 = loginDuskTrendRow({ back: { duskSec: 75026 }, prev: { duskSec: 78656 }, cur: { duskSec: 81949 } })
  assert.ok(w1.includes('the login dusk\'s own swell ran two steps deep - 75026 -> 78656 (+3630) -> 81949 (+3293)'))
  // W2 - F502 -> F503 -> F504: the swell
  const w2 = loginDuskTrendRow({ back: { duskSec: 78656 }, prev: { duskSec: 81949 }, cur: { duskSec: 84295 } })
  assert.ok(w2.includes('the login dusk\'s own swell ran two steps deep - 78656 -> 81949 (+3293) -> 84295 (+2346)'))
  // W3 - F503 -> F504 -> F505: the swell
  const w3 = loginDuskTrendRow({ back: { duskSec: 81949 }, prev: { duskSec: 84295 }, cur: { duskSec: 86054 } })
  assert.ok(w3.includes('the login dusk\'s own swell ran two steps deep - 81949 -> 84295 (+2346) -> 86054 (+1759)'))
  // W4 - F504 -> F505 -> F506: the swing the midnight wrap rides
  const w4 = loginDuskTrendRow({ back: { duskSec: 84295 }, prev: { duskSec: 86054 }, cur: { duskSec: 4065 } })
  assert.ok(w4.includes('the login dusk\'s own swing - 84295 -> 86054 (+1759) -> 4065 (-81989)'))
  // W5 - F505 -> F506 -> F507: the swing the wrap completes
  const w5 = loginDuskTrendRow({ back: { duskSec: 86054 }, prev: { duskSec: 4065 }, cur: { duskSec: 6873 } })
  assert.ok(w5.includes('the login dusk\'s own swing - 86054 -> 4065 (-81989) -> 6873 (+2808)'))
  // W6 - F506 -> F507 -> F508: the swell
  const w6 = loginDuskTrendRow({ back: { duskSec: 4065 }, prev: { duskSec: 6873 }, cur: { duskSec: 8671 } })
  assert.ok(w6.includes('the login dusk\'s own swell ran two steps deep - 4065 -> 6873 (+2808) -> 8671 (+1798)'))
  // W7 - F507 -> F508 -> F509: the swell
  const w7 = loginDuskTrendRow({ back: { duskSec: 6873 }, prev: { duskSec: 8671 }, cur: { duskSec: 11538 } })
  assert.ok(w7.includes('the login dusk\'s own swell ran two steps deep - 6873 -> 8671 (+1798) -> 11538 (+2867)'))
  // W8 - F508 -> F509 -> F510: the swell
  const w8 = loginDuskTrendRow({ back: { duskSec: 8671 }, prev: { duskSec: 11538 }, cur: { duskSec: 14259 } })
  assert.ok(w8.includes('the login dusk\'s own swell ran two steps deep - 8671 -> 11538 (+2867) -> 14259 (+2721)'))
  // W9 - F509 -> F510 -> F511: the swell the F511 first-read rides
  const w9 = loginDuskTrendRow({ back: { duskSec: 11538 }, prev: { duskSec: 14259 }, cur: { duskSec: 16129 } })
  assert.ok(w9.includes('the login dusk\'s own swell ran two steps deep - 11538 -> 14259 (+2721) -> 16129 (+1870)'))
  // the tail co-existence rides every row - the dawn priced beside
  assert.ok(w9.includes('the login dawn hand keeps the same cell\'s earlier-edge seat priced beside'))
  assert.ok(w9.includes('the .320 login south word keeps the same line\'s south seat'))
  assert.ok(w9.includes('the .319 login north word keeps the same cell\'s north seat'))
  assert.ok(w9.includes('the .317 login floor word keeps the same line\'s floor seat'))
  assert.ok(w9.includes('the .318 login ceiling word keeps the same cell\'s ceiling seat'))
  assert.ok(w9.includes('the .315 login east word keeps the same line\'s east edge seat'))
  assert.ok(w9.includes('the .316 login west word keeps the same line\'s west edge seat'))
  assert.ok(w9.includes('the .297 entity id word keeps the same login line\'s own entity id peak seat'))
  assert.ok(w9.includes('the .305 echo north word keeps the setblock echo\'s own Z-min seat'))
  assert.ok(w9.includes('the .314 login count word keeps the same lines\' count seat'))
})

test('v0.976.322 rows: the held law and the three-face zero and the fence fail', () => {
  // the held step prices no direction - the honest silence (the
  // all-trading birth never rode a held step)
  assert.equal(loginDuskTrendRow({ back: { duskSec: 78656 }, prev: { duskSec: 78656 }, cur: { duskSec: 4065 } }), null)
  assert.equal(loginDuskTrendRow({ back: { duskSec: 86054 }, prev: { duskSec: 4065 }, cur: { duskSec: 4065 } }), null)
  // the three-face zero - the no-joins mass the family keeps silent
  assert.equal(loginDuskTrendRow({ back: { duskSec: 0 }, prev: { duskSec: 0 }, cur: { duskSec: 0 } }), null)
  // the fence fail - the ceiling breach the domain never holds
  assert.equal(loginDuskTrendRow({ back: { duskSec: 86400 }, prev: { duskSec: 4065 }, cur: { duskSec: 16129 } }), null)
  // the missing faces
  assert.equal(loginDuskTrendRow(null), null)
})
