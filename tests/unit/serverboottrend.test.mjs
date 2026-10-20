import { test } from 'node:test'
import assert from 'node:assert/strict'
import { serverBootCensus, serverBootConsistent, serverBootTrendRow } from '../../src/lib/serverboottrend.mjs'

// the REAL lines the faces carry (the byte-exact prints the vanilla
// server's own boot spoke; the REAL thirteen-face boot arc the
// artifacts hold - seconds: F501 4.801, F502 4.869, F503 4.807, F504
// 4.715, F505 2.883, F506 3.569, F507 2.836, F508 4.596, F509 3.145,
// F510 4.93, F511 2.855, F512 3.716, F513 4.8; the headcounts the
// same faces hold match the .314 word's REAL arc byte-exact
// (39/30/25/30/40/37/26/39/22/26/32/38, the F513 24 first-read
// beside), the dawns match the .321 arc, the dusks match the .322
// arc, the firstborns match the .323 arc - one boot per face across
// all thirteen, the mining pipeline the family trusts)

test('v0.976.324 census: the REAL lines byte-exact and the boot prices', () => {
  // F501's own face - the boot the arc's W1 swing base rides
  const f501 = [
    '[20:40:10] [Server thread/INFO]: Done (4.801s)! For help, type "help"'
  ]
  assert.deepEqual(serverBootCensus(f501), { maxBootSec: 4.801 })
  // F505's own face - the fast boot the W3 fade tail rides
  const f505 = [
    '[23:43:57] [Server thread/INFO]: Done (2.883s)! For help, type "help"'
  ]
  assert.deepEqual(serverBootCensus(f505), { maxBootSec: 2.883 })
  // F510's own face - the slowest boot the arc holds (the .317 tree's
  // own fleet, run 39364947414)
  const f510 = [
    '[03:47:18] [Server thread/INFO]: Done (4.930s)! For help, type "help"'
  ]
  assert.deepEqual(serverBootCensus(f510), { maxBootSec: 4.93 })
  // F513's own face - the newest face the arc's W11 swell tail rides
  // (the .321 tree's own fleet, run 39376695495)
  const f513 = [
    '[06:02:31] [Server thread/INFO]: Done (4.800s)! For help, type "help"'
  ]
  assert.deepEqual(serverBootCensus(f513), { maxBootSec: 4.8 })
  // the MAX hand - the slowest boot wins (a faster boot never sinks
  // the census, a slower one always lifts it - the capture law the
  // sibling hands hold)
  const maxhand = [
    '[06:02:31] [Server thread/INFO]: Done (2.883s)! For help, type "help"',
    '[06:05:12] [Server thread/INFO]: Done (4.801s)! For help, type "help"'
  ]
  assert.deepEqual(serverBootCensus(maxhand), { maxBootSec: 4.801 })
  // the sibling lanes never ride - the login lines and the join/leave
  // lines and the saving-chunks lines the same console wears
  const siblings = [
    '[06:02:26] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[06:02:31] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:overworld',
    '[20:40:21] [Server thread/INFO]: YardSurvey joined the game',
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected'
  ]
  assert.deepEqual(serverBootCensus(siblings), { maxBootSec: 0 })
})

test('v0.976.324 census: the junk faces stay honest', () => {
  // the junk face - the lawful zero (the null-sentinel the .304/.306
  // convention holds - the no-boot face the zero keeps)
  assert.deepEqual(serverBootCensus(['garbage', '', 'no boots here']), { maxBootSec: 0 })
  // the non-array - the honest null
  assert.equal(serverBootCensus(null), null)
  assert.equal(serverBootCensus('lines'), null)
  assert.equal(serverBootCensus(42), null)
  // the non-string members ride past unharmed
  assert.deepEqual(serverBootCensus([42, null, undefined, {}]), { maxBootSec: 0 })
})

test('v0.976.324 near-miss skins: nineteen forms the grammar refuses', () => {
  const good = '[21:47:05] [Server thread/INFO]: Done (4.869s)! For help, type "help"'
  const refuses = [
    // the bot-tagged prefix - the fleet log's own skin, the server
    // console never wears it
    '[Server] [21:47:05] [Server thread/INFO]: Done (4.869s)! For help, type "help"',
    // the WARN frame
    '[21:47:05] [Server thread/WARN]: Done (4.869s)! For help, type "help"',
    // the pretty spacing
    '[21:47:05] [Server thread/INFO]:  Done (4.869s)! For help, type "help"',
    // the two-decimal duration - the three-digit resolution the
    // emitter always prints
    '[21:47:05] [Server thread/INFO]: Done (4.87s)! For help, type "help"',
    // the one-decimal duration
    '[21:47:05] [Server thread/INFO]: Done (4.9s)! For help, type "help"',
    // the integer duration
    '[21:47:05] [Server thread/INFO]: Done (5s)! For help, type "help"',
    // the leading-zero integer part - the .248 house law
    '[21:47:05] [Server thread/INFO]: Done (04.869s)! For help, type "help"',
    // the missing parens
    '[21:47:05] [Server thread/INFO]: Done 4.869s! For help, type "help"',
    // the missing unit
    '[21:47:05] [Server thread/INFO]: Done (4.869)! For help, type "help"',
    // the missing bang
    '[21:47:05] [Server thread/INFO]: Done (4.869s) For help, type "help"',
    // the unquoted help tail
    '[21:47:05] [Server thread/INFO]: Done (4.869s)! For help, type help',
    // the altered help tail
    '[21:47:05] [Server thread/INFO]: Done (4.869s)! For help, type "commands"',
    // the negative duration - the duration domain never holds
    '[21:47:05] [Server thread/INFO]: Done (-1.200s)! For help, type "help"',
    // the leading whitespace
    ' [21:47:05] [Server thread/INFO]: Done (4.869s)! For help, type "help"',
    // the trailing junk
    '[21:47:05] [Server thread/INFO]: Done (4.869s)! For help, type "help" extra',
    // the CR tail
    '[21:47:05] [Server thread/INFO]: Done (4.869s)! For help, type "help"\r',
    // the overflow hour clock - 24 the clock domain never holds
    '[24:00:00] [Server thread/INFO]: Done (4.869s)! For help, type "help"',
    // the dash-separator clock
    '[21-47-05] [Server thread/INFO]: Done (4.869s)! For help, type "help"',
    // the missing-seconds clock
    '[21:47] [Server thread/INFO]: Done (4.869s)! For help, type "help"'
  ]
  assert.deepEqual(serverBootCensus([good, ...refuses]), { maxBootSec: 4.869 })
})

test('v0.976.324 fence: the non-negative duration cells every branch', () => {
  // the green fence - the REAL boot cells the faces hold
  assert.equal(serverBootConsistent({ back: { maxBootSec: 4.801 }, prev: { maxBootSec: 4.869 }, cur: { maxBootSec: 4.807 } }), true)
  // the zero face - the no-boot mass the fence lawfully keeps
  assert.equal(serverBootConsistent({ back: { maxBootSec: 0 }, prev: { maxBootSec: 0 }, cur: { maxBootSec: 0 } }), true)
  // the negative cell - the duration domain never holds
  assert.equal(serverBootConsistent({ back: { maxBootSec: -1.2 }, prev: { maxBootSec: 2.883 }, cur: { maxBootSec: 4.8 } }), false)
  // the non-finite cells
  assert.equal(serverBootConsistent({ back: { maxBootSec: Infinity }, prev: { maxBootSec: 2.883 }, cur: { maxBootSec: 4.8 } }), false)
  assert.equal(serverBootConsistent({ back: { maxBootSec: NaN }, prev: { maxBootSec: 2.883 }, cur: { maxBootSec: 4.8 } }), false)
  // the string cell
  assert.equal(serverBootConsistent({ back: { maxBootSec: '4.801' }, prev: { maxBootSec: 2.883 }, cur: { maxBootSec: 4.8 } }), false)
  // the missing faces
  assert.equal(serverBootConsistent(null), false)
  assert.equal(serverBootConsistent({}), false)
  assert.equal(serverBootConsistent({ back: { maxBootSec: 4.801 }, prev: { maxBootSec: 2.883 } }), false)
})

test('v0.976.324 rows: the REAL eleven windows byte-exact - born speaking eleven deep', () => {
  // W1 - F501 -> F502 -> F503: the swing
  const w1 = serverBootTrendRow({ back: { maxBootSec: 4.801 }, prev: { maxBootSec: 4.869 }, cur: { maxBootSec: 4.807 } })
  assert.ok(w1.includes('the server\'s own boot swing - 4.801 -> 4.869 (+0.06799999999999962) -> 4.807 (-0.06199999999999939)'))
  // W2 - F502 -> F503 -> F504: the fade
  const w2 = serverBootTrendRow({ back: { maxBootSec: 4.869 }, prev: { maxBootSec: 4.807 }, cur: { maxBootSec: 4.715 } })
  assert.ok(w2.includes('the server\'s own boot fade ran two steps deep - 4.869 -> 4.807 (-0.06199999999999939) -> 4.715 (-0.09200000000000053)'))
  // W3 - F503 -> F504 -> F505: the fade the fast-boot drop rides
  const w3 = serverBootTrendRow({ back: { maxBootSec: 4.807 }, prev: { maxBootSec: 4.715 }, cur: { maxBootSec: 2.883 } })
  assert.ok(w3.includes('the server\'s own boot fade ran two steps deep - 4.807 -> 4.715 (-0.09200000000000053) -> 2.883 (-1.8319999999999999)'))
  // W4 - F504 -> F505 -> F506: the swing
  const w4 = serverBootTrendRow({ back: { maxBootSec: 4.715 }, prev: { maxBootSec: 2.883 }, cur: { maxBootSec: 3.569 } })
  assert.ok(w4.includes('the server\'s own boot swing - 4.715 -> 2.883 (-1.8319999999999999) -> 3.569 (+0.6859999999999999)'))
  // W5 - F505 -> F506 -> F507: the swing
  const w5 = serverBootTrendRow({ back: { maxBootSec: 2.883 }, prev: { maxBootSec: 3.569 }, cur: { maxBootSec: 2.836 } })
  assert.ok(w5.includes('the server\'s own boot swing - 2.883 -> 3.569 (+0.6859999999999999) -> 2.836 (-0.7330000000000001)'))
  // W6 - F506 -> F507 -> F508: the swing
  const w6 = serverBootTrendRow({ back: { maxBootSec: 3.569 }, prev: { maxBootSec: 2.836 }, cur: { maxBootSec: 4.596 } })
  assert.ok(w6.includes('the server\'s own boot swing - 3.569 -> 2.836 (-0.7330000000000001) -> 4.596 (+1.7600000000000002)'))
  // W7 - F507 -> F508 -> F509: the swing
  const w7 = serverBootTrendRow({ back: { maxBootSec: 2.836 }, prev: { maxBootSec: 4.596 }, cur: { maxBootSec: 3.145 } })
  assert.ok(w7.includes('the server\'s own boot swing - 2.836 -> 4.596 (+1.7600000000000002) -> 3.145 (-1.451)'))
  // W8 - F508 -> F509 -> F510: the swing
  const w8 = serverBootTrendRow({ back: { maxBootSec: 4.596 }, prev: { maxBootSec: 3.145 }, cur: { maxBootSec: 4.93 } })
  assert.ok(w8.includes('the server\'s own boot swing - 4.596 -> 3.145 (-1.451) -> 4.93 (+1.7849999999999997)'))
  // W9 - F509 -> F510 -> F511: the swing
  const w9 = serverBootTrendRow({ back: { maxBootSec: 3.145 }, prev: { maxBootSec: 4.93 }, cur: { maxBootSec: 2.855 } })
  assert.ok(w9.includes('the server\'s own boot swing - 3.145 -> 4.93 (+1.7849999999999997) -> 2.855 (-2.0749999999999997)'))
  // W10 - F510 -> F511 -> F512: the swing
  const w10 = serverBootTrendRow({ back: { maxBootSec: 4.93 }, prev: { maxBootSec: 2.855 }, cur: { maxBootSec: 3.716 } })
  assert.ok(w10.includes('the server\'s own boot swing - 4.93 -> 2.855 (-2.0749999999999997) -> 3.716 (+0.8610000000000002)'))
  // W11 - F511 -> F512 -> F513: the swell the F513 first-read rides
  const w11 = serverBootTrendRow({ back: { maxBootSec: 2.855 }, prev: { maxBootSec: 3.716 }, cur: { maxBootSec: 4.8 } })
  assert.ok(w11.includes('the server\'s own boot swell ran two steps deep - 2.855 -> 3.716 (+0.8610000000000002) -> 4.8 (+1.0839999999999996)'))
  // the tail co-existence rides every row
  assert.ok(w11.includes('the boot count lane keeps the same emitter\'s own count seat unread'))
  assert.ok(w11.includes("the 'Starting minecraft server version' cell keeps the boot's own version seat unread"))
  assert.ok(w11.includes('the .323 firstborn word keeps the same cell\'s MIN hand'))
  assert.ok(w11.includes('the .302 gc normal-peak word keeps the gc band\'s own Normal duration seat'))
  assert.ok(w11.includes('the .321 login dawn word keeps the same line\'s clock MIN hand'))
  assert.ok(w11.includes('the .322 dusk word keeps the same cell\'s MAX hand'))
  assert.ok(w11.includes('the .314 login count word keeps the same lines\' count seat'))
  assert.ok(w11.includes('the .278 advancement word keeps the same console\'s own achievement seat'))
})

test('v0.976.324 rows: the held law and the three-face zero and the fence fail', () => {
  // the held step prices no direction - the honest silence (the
  // all-trading birth never rode a held step)
  assert.equal(serverBootTrendRow({ back: { maxBootSec: 4.869 }, prev: { maxBootSec: 4.869 }, cur: { maxBootSec: 2.883 } }), null)
  assert.equal(serverBootTrendRow({ back: { maxBootSec: 2.883 }, prev: { maxBootSec: 2.855 }, cur: { maxBootSec: 2.855 } }), null)
  // the three-face zero - the no-boot mass the family keeps silent
  assert.equal(serverBootTrendRow({ back: { maxBootSec: 0 }, prev: { maxBootSec: 0 }, cur: { maxBootSec: 0 } }), null)
  // the fence fail - the negative cell the domain never holds
  assert.equal(serverBootTrendRow({ back: { maxBootSec: -1.2 }, prev: { maxBootSec: 2.883 }, cur: { maxBootSec: 4.8 } }), null)
  // the missing faces
  assert.equal(serverBootTrendRow(null), null)
})
