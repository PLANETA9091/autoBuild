import { test } from 'node:test'
import assert from 'node:assert/strict'
import { loginDawnCensus, loginDawnConsistent, loginDawnTrendRow } from '../../src/lib/logindawntrend.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own acceptor spoke; the REAL eleven-face dawn arc the
// artifacts hold - seconds since midnight: F501 74421, F502 78043,
// F503 81336, F504 83703, F505 85447, F506 3453, F507 6264, F508
// 8071, F509 10939, F510 13649, F511 15523; the headcounts the same
// faces hold match the .314 word's REAL arc byte-exact - 39/30/25/
// 30/40/37/26/39/22/26, the F511 32 first-read beside)

test('v0.976.321 census: the REAL lines byte-exact and the dawn prices', () => {
  // F501's own face - the dawn the arc's W1 swell base rides
  const f501 = [
    '[20:40:21] [Server thread/INFO]: YardSurvey[/127.0.0.1:48142] logged in with entity id 17 at (-129.5, 70.0, 398.5)'
  ]
  assert.deepEqual(loginDawnCensus(f501), { dawnSec: 74421 })
  // F506's own face - the leading-zero hour the emitter's own shape
  // rides (the midnight-wrap face, 00:57:33 the day boundary crossed)
  const f506 = [
    '[00:57:33] [Server thread/INFO]: YardSurvey[/127.0.0.1:52858] logged in with entity id 17 at (-129.5, 68.0, 404.5)'
  ]
  assert.deepEqual(loginDawnCensus(f506), { dawnSec: 3453 })
  // F510's own face - the newest-but-one face (run 39364947414, the
  // .317 tree's own fleet)
  const f510 = [
    '[03:47:29] [Server thread/INFO]: YardSurvey[/127.0.0.1:44544] logged in with entity id 9 at (-118.5, 64.0, 392.5)'
  ]
  assert.deepEqual(loginDawnCensus(f510), { dawnSec: 13649 })
  // F511's own face - the newest face the arc's W9 swell rides (the
  // .318 tree's own fleet, run 39367608493) - the dawn AND the dusk
  // the same face holds, the MIN hand the dawn keeps
  const f511 = [
    '[04:18:43] [Server thread/INFO]: YardSurvey[/127.0.0.1:50936] logged in with entity id 17 at (-132.5, 69.0, 395.5)',
    '[04:28:49] [Server thread/INFO]: F6[/127.0.0.1:36628] logged in with entity id 4539 at (-150.3, 68.0, 400.7)'
  ]
  assert.deepEqual(loginDawnCensus(f511), { dawnSec: 15523 })
  // the MIN hand - the dawn beats the dusk (a later first login never
  // lifts the dawn, an earlier one always sinks it - the capture law
  // the sibling hands hold)
  const minhand = [
    '[20:00:10] [Server thread/INFO]: F7[/127.0.0.1:12345] logged in with entity id 99999 at (0.0, 64.0, 350.25)',
    '[09:15:59] [Server thread/INFO]: F8[/127.0.0.1:65535] logged in with entity id 1 at (0.0, 64.0, 500.5)',
    '[23:59:59] [Server thread/INFO]: F9[/127.0.0.1:11111] logged in with entity id 2 at (0.0, 64.0, 439.7)'
  ]
  assert.deepEqual(loginDawnCensus(minhand), { dawnSec: 33359 })
  // the sibling lanes never ride - the lost-connection lines and the
  // join/leave lines the same console wears
  const siblings = [
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:40:21] [Server thread/INFO]: YardSurvey joined the game',
    '[20:46:41] [Server thread/INFO]: F3 lost connection: Timed out'
  ]
  assert.deepEqual(loginDawnCensus(siblings), { dawnSec: 0 })
})

test('v0.976.321 census: the junk faces stay honest', () => {
  // the junk face - the lawful zero (the null-sentinel the .304/.306
  // convention holds - the no-login face the zero keeps)
  assert.deepEqual(loginDawnCensus(['garbage', '', 'no logins here']), { dawnSec: 0 })
  // the non-array - the honest null
  assert.equal(loginDawnCensus(null), null)
  assert.equal(loginDawnCensus('lines'), null)
  assert.equal(loginDawnCensus(42), null)
  // the non-string members ride past unharmed
  assert.deepEqual(loginDawnCensus([42, null, undefined, {}]), { dawnSec: 0 })
})

test('v0.976.321 near-miss skins: nineteen forms the grammar refuses', () => {
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
    '[21:47:59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)\r',
    // the 1-digit hour clock - the zero-padded fixed field the
    // emitter always prints
    '[9:33:21] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the overflow hour clock - 24 the clock domain never holds
    '[24:00:00] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the overflow minute clock
    '[21:60:21] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the overflow second clock
    '[21:47:60] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the dash-separator clock
    '[21-47-59] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)',
    // the missing-seconds clock
    '[21:47] [Server thread/INFO]: F2[/127.0.0.1:58868] logged in with entity id 3026 at (-138.7, 48.2, 410.3)'
  ]
  assert.deepEqual(loginDawnCensus([good, ...refuses]), { dawnSec: 78479 })
})

test('v0.976.321 fence: the integer clock cells every branch', () => {
  // the green fence - the REAL dawn cells the faces hold
  assert.equal(loginDawnConsistent({ back: { dawnSec: 74421 }, prev: { dawnSec: 78043 }, cur: { dawnSec: 81336 } }), true)
  // the zero face - the no-login mass the fence lawfully keeps
  assert.equal(loginDawnConsistent({ back: { dawnSec: 0 }, prev: { dawnSec: 0 }, cur: { dawnSec: 0 } }), true)
  // the domain ceiling - 86399 (23:59:59) the last second the day holds
  assert.equal(loginDawnConsistent({ back: { dawnSec: 86399 }, prev: { dawnSec: 3453 }, cur: { dawnSec: 15523 } }), true)
  // the ceiling breach - 86400 the clock domain refuses
  assert.equal(loginDawnConsistent({ back: { dawnSec: 86400 }, prev: { dawnSec: 3453 }, cur: { dawnSec: 15523 } }), false)
  // the negative cell - the seconds-since-midnight domain never holds
  assert.equal(loginDawnConsistent({ back: { dawnSec: -1 }, prev: { dawnSec: 3453 }, cur: { dawnSec: 15523 } }), false)
  // the non-integer cell - the integer law the .311/.314 fence holds
  assert.equal(loginDawnConsistent({ back: { dawnSec: 74421.5 }, prev: { dawnSec: 3453 }, cur: { dawnSec: 15523 } }), false)
  // the non-finite cells
  assert.equal(loginDawnConsistent({ back: { dawnSec: Infinity }, prev: { dawnSec: 3453 }, cur: { dawnSec: 15523 } }), false)
  assert.equal(loginDawnConsistent({ back: { dawnSec: NaN }, prev: { dawnSec: 3453 }, cur: { dawnSec: 15523 } }), false)
  // the string cell
  assert.equal(loginDawnConsistent({ back: { dawnSec: '74421' }, prev: { dawnSec: 3453 }, cur: { dawnSec: 15523 } }), false)
  // the missing faces
  assert.equal(loginDawnConsistent(null), false)
  assert.equal(loginDawnConsistent({}), false)
  assert.equal(loginDawnConsistent({ back: { dawnSec: 74421 }, prev: { dawnSec: 3453 } }), false)
})

test('v0.976.321 rows: the REAL nine windows byte-exact - born speaking nine deep', () => {
  // W1 - F501 -> F502 -> F503: the swell
  const w1 = loginDawnTrendRow({ back: { dawnSec: 74421 }, prev: { dawnSec: 78043 }, cur: { dawnSec: 81336 } })
  assert.ok(w1.includes('the login dawn\'s own swell ran two steps deep - 74421 -> 78043 (+3622) -> 81336 (+3293)'))
  // W2 - F502 -> F503 -> F504: the swell
  const w2 = loginDawnTrendRow({ back: { dawnSec: 78043 }, prev: { dawnSec: 81336 }, cur: { dawnSec: 83703 } })
  assert.ok(w2.includes('the login dawn\'s own swell ran two steps deep - 78043 -> 81336 (+3293) -> 83703 (+2367)'))
  // W3 - F503 -> F504 -> F505: the swell
  const w3 = loginDawnTrendRow({ back: { dawnSec: 81336 }, prev: { dawnSec: 83703 }, cur: { dawnSec: 85447 } })
  assert.ok(w3.includes('the login dawn\'s own swell ran two steps deep - 81336 -> 83703 (+2367) -> 85447 (+1744)'))
  // W4 - F504 -> F505 -> F506: the swing the midnight wrap rides
  const w4 = loginDawnTrendRow({ back: { dawnSec: 83703 }, prev: { dawnSec: 85447 }, cur: { dawnSec: 3453 } })
  assert.ok(w4.includes('the login dawn\'s own swing - 83703 -> 85447 (+1744) -> 3453 (-81994)'))
  // W5 - F505 -> F506 -> F507: the swing the wrap completes
  const w5 = loginDawnTrendRow({ back: { dawnSec: 85447 }, prev: { dawnSec: 3453 }, cur: { dawnSec: 6264 } })
  assert.ok(w5.includes('the login dawn\'s own swing - 85447 -> 3453 (-81994) -> 6264 (+2811)'))
  // W6 - F506 -> F507 -> F508: the swell
  const w6 = loginDawnTrendRow({ back: { dawnSec: 3453 }, prev: { dawnSec: 6264 }, cur: { dawnSec: 8071 } })
  assert.ok(w6.includes('the login dawn\'s own swell ran two steps deep - 3453 -> 6264 (+2811) -> 8071 (+1807)'))
  // W7 - F507 -> F508 -> F509: the swell
  const w7 = loginDawnTrendRow({ back: { dawnSec: 6264 }, prev: { dawnSec: 8071 }, cur: { dawnSec: 10939 } })
  assert.ok(w7.includes('the login dawn\'s own swell ran two steps deep - 6264 -> 8071 (+1807) -> 10939 (+2868)'))
  // W8 - F508 -> F509 -> F510: the swell
  const w8 = loginDawnTrendRow({ back: { dawnSec: 8071 }, prev: { dawnSec: 10939 }, cur: { dawnSec: 13649 } })
  assert.ok(w8.includes('the login dawn\'s own swell ran two steps deep - 8071 -> 10939 (+2868) -> 13649 (+2710)'))
  // W9 - F509 -> F510 -> F511: the swell the F511 first-read rides
  const w9 = loginDawnTrendRow({ back: { dawnSec: 10939 }, prev: { dawnSec: 13649 }, cur: { dawnSec: 15523 } })
  assert.ok(w9.includes('the login dawn\'s own swell ran two steps deep - 10939 -> 13649 (+2710) -> 15523 (+1874)'))
  // the tail co-existence rides every row
  assert.ok(w9.includes('the login dusk hand keeps the same cell\'s later-edge seat unread'))
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

test('v0.976.321 rows: the held law and the three-face zero and the fence fail', () => {
  // the held step prices no direction - the honest silence (the
  // all-trading birth never rode a held step)
  assert.equal(loginDawnTrendRow({ back: { dawnSec: 78043 }, prev: { dawnSec: 78043 }, cur: { dawnSec: 3453 } }), null)
  assert.equal(loginDawnTrendRow({ back: { dawnSec: 85447 }, prev: { dawnSec: 3453 }, cur: { dawnSec: 3453 } }), null)
  // the three-face zero - the no-joins mass the family keeps silent
  assert.equal(loginDawnTrendRow({ back: { dawnSec: 0 }, prev: { dawnSec: 0 }, cur: { dawnSec: 0 } }), null)
  // the fence fail - the ceiling breach the domain never holds
  assert.equal(loginDawnTrendRow({ back: { dawnSec: 86400 }, prev: { dawnSec: 3453 }, cur: { dawnSec: 15523 } }), null)
  // the missing faces
  assert.equal(loginDawnTrendRow(null), null)
})
