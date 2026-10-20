import { test } from 'node:test'
import assert from 'node:assert/strict'
import { fleetRideCensus, fleetRideConsistent, fleetRideTrendRow } from '../../src/lib/fleetride.mjs'

// the REAL faces the artifacts hold (the byte-exact boot finish and
// loss lane the vanilla server voiced; the done stamps and durations
// the .330 word's own REAL lines byte-keep, the dusk stamps the .333
// word's arc prices - the name cells and the duration cells ride
// shape only the .330/.333 convention keeps, the clock cells the
// byte-verified stamps ride). the REAL nineteen-face ride arc the
// two edge arcs derive - dusk - done, wrap-aware, seconds:
// F501 911, F502 920, F503 958, F504 846, F505 983 (the wrap face:
// the Done 23:43:57 = 85437, the dusk 00:00:20 = 20 the next day's
// first seconds), F506 813, F507 884, F508 853, F509 788, F510 825,
// F511 982, F512 862, F513 972, F514 978, F515 582 (the honest
// band's own floor - the class-union proof face the shortest ride),
// F516 984 (the ceiling), F517 724, F518 719, F519 982

const REAL = {
  // F501's own face - the boot's own finish to the lane's own closing
  // breath: 75321 - 74410 = 911 (the mid-run churn losses the dawn
  // and the burst the span swallows whole)
  f501: ['[20:40:10] [Server thread/INFO]: Done (4.801s)! For help, type "help"',
    '[20:40:34] [Server thread/INFO]: YardSurvey lost connection: Disconnected',
    '[20:45:17] [Server thread/INFO]: F1 lost connection: Disconnected',
    '[20:55:21] [Server thread/INFO]: F6 lost connection: Disconnected'],
  f505: ['[23:43:57] [Server thread/INFO]: Done (2.883s)! For help, type "help"',
    '[00:00:20] [Server thread/INFO]: F3 lost connection: Timed out'],
  f506: ['[00:57:24] [Server thread/INFO]: Done (3.569s)! For help, type "help"',
    '[01:10:57] [Server thread/INFO]: F8 lost connection: Disconnected'],
  // F515's own face - the class-union proof face and the honest
  // band's own floor: the Done 07:37:52 = 27472, the dusk 07:47:34 =
  // 28054 (the Timed out skin the lane's own last breath rode) - 582
  f515: ['[07:37:52] [Server thread/INFO]: Done (4.696s)! For help, type "help"',
    '[07:46:18] [Server thread/INFO]: F13 lost connection: Disconnected',
    '[07:47:34] [Server thread/INFO]: F19 lost connection: Timed out'],
  f519: ['[10:35:38] [Server thread/INFO]: Done (3.111s)! For help, type "help"',
    '[10:52:00] [Server thread/INFO]: F4 lost connection: Disconnected']
}

test('v0.976.338 census: the REAL faces byte-exact and the ride prices', () => {
  // F501's own face - the whole ride the boot-finish edge opens
  assert.deepEqual(fleetRideCensus(REAL.f501), { fleetRideSec: 911 })
  // F505's own face - the WRAP face the day boundary keeps: the dusk
  // 00:00:20 the next day's first seconds - 20 + 86400 - 85437 = 983
  assert.deepEqual(fleetRideCensus(REAL.f505), { fleetRideSec: 983 })
  // F506's own face - the leading-zero-hour faces the clock grammar keeps
  assert.deepEqual(fleetRideCensus(REAL.f506), { fleetRideSec: 813 })
  // F515's own face - the class-union face and the honest band's own floor
  assert.deepEqual(fleetRideCensus(REAL.f515), { fleetRideSec: 582 })
  // the fresh extension face
  assert.deepEqual(fleetRideCensus(REAL.f519), { fleetRideSec: 982 })
  // the LAST laws both hands keep - the mid-face reboot face (two
  // Done prints the LAST the done hand keeps; the churn losses the
  // dusk the LAST print prices)
  const reboot = [
    '[10:00:00] [Server thread/INFO]: Done (3.000s)! For help, type "help"',
    '[10:01:00] [Server thread/INFO]: F2 lost connection: Disconnected',
    '[10:02:00] [Server thread/INFO]: Done (4.000s)! For help, type "help"',
    '[10:16:40] [Server thread/INFO]: F5 lost connection: Disconnected'
  ]
  assert.deepEqual(fleetRideCensus(reboot), { fleetRideSec: 880 })
  // the partial phase's own zero - the face missing either edge
  // prices the ride zero honest (the phase never half-read)
  assert.deepEqual(fleetRideCensus(['[20:40:10] [Server thread/INFO]: Done (4.801s)! For help, type "help"']), { fleetRideSec: 0 })
  assert.deepEqual(fleetRideCensus(['[20:55:21] [Server thread/INFO]: F6 lost connection: Disconnected']), { fleetRideSec: 0 })
  // the sibling lanes never ride - the boot conversation's own lines
  // the .332/.331/.330/.293 words keep, this word silent on
  const siblings = [
    '[20:40:05] [Server thread/INFO]: Starting minecraft server version 26.2',
    '[20:40:06] [Server thread/INFO]: Selecting global world spawn...',
    '[20:40:34] [Server thread/INFO]: YardSurvey joined the game',
    '[20:40:34] [Server thread/INFO]: YardSurvey left the game'
  ]
  assert.deepEqual(fleetRideCensus(siblings), { fleetRideSec: 0 })
})

test('v0.976.338 census: the junk faces keep the honest shapes', () => {
  assert.deepEqual(fleetRideCensus(['junk', '', '[00:00:00] [Server thread/INFO]: nada']), { fleetRideSec: 0 })
  assert.equal(fleetRideCensus(null), null)
  assert.equal(fleetRideCensus(undefined), null)
  assert.equal(fleetRideCensus(42), null)
  assert.deepEqual(fleetRideCensus([42, null, ...REAL.f501]), { fleetRideSec: 911 })
})

test('v0.976.338 grammar: the near-miss skins never ride', () => {
  const refuse = (s) => assert.deepEqual(fleetRideCensus([s]), { fleetRideSec: 0 })
  // the Done lane's near-miss skins (the .330 emitter's own refusals)
  refuse('[20:40:10] [Server thread/WARN]: Done (4.801s)! For help, type "help"')
  refuse('[20:40:10] [Server thread/INFO]: Done (4.801s)! For help, type "help')
  refuse('[20:40:10] [Server thread/INFO]: Done (4.8s)! For help, type "help"')
  refuse('[20:40:10] [Server thread/INFO]: Done (4.8010s)! For help, type "help"')
  refuse('[20:40:10] [Server thread/INFO]: Done 4.801s! For help, type "help"')
  refuse('[20:40:10] [Server thread/INFO]: done (4.801s)! For help, type "help"')
  // the dusk lane's near-miss skins (the .333 emitter's own refusals)
  refuse('[20:55:21] [Server thread/WARN]: F6 lost connection: Disconnected')
  refuse('[20:55:21] [Server thread/INFO]: F6 lost connection: Kicked')
  refuse('[20:55:21] [Server thread/INFO]: F6 lost connections: Disconnected')
  refuse('[20:55:21] [Server thread/INFO]: F6 left the game')
  // the clock skins both lanes refuse
  refuse('[20:40:1] [Server thread/INFO]: Done (4.801s)! For help, type "help"')
  refuse('[20:55:60] [Server thread/INFO]: F6 lost connection: Disconnected')
})

test('v0.976.338 fence: every branch keeps', () => {
  const ok = (b, p, c) => fleetRideConsistent({ back: { fleetRideSec: b }, prev: { fleetRideSec: p }, cur: { fleetRideSec: c } })
  assert.equal(ok(0, 100, 86399), true)
  assert.equal(ok(911, 920, 958), true)
  assert.equal(ok(0, 0, 0), true)
  assert.equal(ok(86399.5, 100, 100), false)
  assert.equal(ok(-1, 100, 100), false)
  assert.equal(ok(86400, 100, 100), false)
  assert.equal(ok('x', 100, 100), false)
  assert.equal(fleetRideConsistent({ back: { fleetRideSec: 1 }, prev: { fleetRideSec: 2 } }), false)
  assert.equal(fleetRideConsistent(null), false)
  assert.equal(fleetRideConsistent(42), false)
})

test('v0.976.338 trend: the REAL nineteen-face ride arc re-voiced byte-exact', () => {
  // the REAL ride arc the two byte-verified edge arcs derive
  // (F501-F519, dusk - done wrap-aware, seconds)
  const ARC = [911, 920, 958, 846, 983, 813, 884, 853, 788, 825, 982, 862, 972, 978, 582, 984, 724, 719, 982]
  const WINDOWS = [
    ['911 -> 920 (+9) -> 958 (+38)', 'swell'],
    ['920 -> 958 (+38) -> 846 (-112)', 'swing'],
    ['958 -> 846 (-112) -> 983 (+137)', 'swing'],
    ['846 -> 983 (+137) -> 813 (-170)', 'swing'],
    ['983 -> 813 (-170) -> 884 (+71)', 'swing'],
    ['813 -> 884 (+71) -> 853 (-31)', 'swing'],
    ['884 -> 853 (-31) -> 788 (-65)', 'fade'],
    ['853 -> 788 (-65) -> 825 (+37)', 'swing'],
    ['788 -> 825 (+37) -> 982 (+157)', 'swell'],
    ['825 -> 982 (+157) -> 862 (-120)', 'swing'],
    ['982 -> 862 (-120) -> 972 (+110)', 'swing'],
    ['862 -> 972 (+110) -> 978 (+6)', 'swell'],
    ['972 -> 978 (+6) -> 582 (-396)', 'swing'],
    ['978 -> 582 (-396) -> 984 (+402)', 'swing'],
    ['582 -> 984 (+402) -> 724 (-260)', 'swing'],
    ['984 -> 724 (-260) -> 719 (-5)', 'fade'],
    ['724 -> 719 (-5) -> 982 (+263)', 'swing']
  ]
  let speaks = 0
  for (let i = 0; i + 2 < ARC.length; i++) {
    const row = fleetRideTrendRow({ back: { fleetRideSec: ARC[i] }, prev: { fleetRideSec: ARC[i + 1] }, cur: { fleetRideSec: ARC[i + 2] } })
    assert.notEqual(row, null, `window ${i + 1} held - the arc never holds`)
    assert.ok(row.includes(WINDOWS[i][0]), `window ${i + 1} arc byte-exact: ${row}`)
    assert.ok(row.includes(WINDOWS[i][1]), `window ${i + 1} the ${WINDOWS[i][1]} shape`)
    speaks++
  }
  assert.equal(speaks, 17, 'SEVENTEEN REAL WINDOWS SEVENTEEN SPEAKS ZERO HELD')
  // the held law - a held step the honest silence
  assert.equal(fleetRideTrendRow({ back: { fleetRideSec: 911 }, prev: { fleetRideSec: 911 }, cur: { fleetRideSec: 920 } }), null)
  assert.equal(fleetRideTrendRow({ back: { fleetRideSec: 911 }, prev: { fleetRideSec: 920 }, cur: { fleetRideSec: 920 } }), null)
  // the three-face zero - the lawful silence
  assert.equal(fleetRideTrendRow({ back: { fleetRideSec: 0 }, prev: { fleetRideSec: 0 }, cur: { fleetRideSec: 0 } }), null)
  // the tail co-existence - every seat named the family keeps
  const tail = fleetRideTrendRow({ back: { fleetRideSec: 911 }, prev: { fleetRideSec: 920 }, cur: { fleetRideSec: 958 } })
  assert.ok(tail.includes('co-existence by seat never by duplication'))
  assert.ok(tail.includes('.330 boot done clock word'), 'the done input seat named')
  assert.ok(tail.includes('.333 fleet closing clock word'), 'the dusk input seat named')
  assert.ok(tail.includes('.335 loss width word'), 'the inner span piece named')
  assert.ok(tail.includes('.337 boot quiet word'), 'the outer span piece named')
  assert.ok(tail.includes('ride = the quiet'), 'the span algebra named')
  assert.ok(tail.includes('.310 disconnect word'), 'the class counts named')
  assert.ok(tail.includes('DONE-PRECEDES'), 'the ordering gate named')
  assert.ok(tail.includes('v0.976.338'), 'the version rides')
})
