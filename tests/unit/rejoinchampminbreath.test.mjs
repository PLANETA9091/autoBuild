import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampMinBreathCensus, rejoinChampMinBreathConsistent, rejoinChampMinBreathTrendRow } from '../../src/lib/rejoinchampminbreath.mjs'

// the REAL faces the 50-face archive holds (/home/z/faces331 - the
// champion cadence list's own FLOOR the shortest adjacent gap prices:
// TWENTY-FOUR distinct classes the champion min breath voices). The
// fixtures ride the archive's own join columns byte-faithful (the
// .358 test's own columns the family keeps, the F543 ceiling face the
// fire-1543-era harvest rides, the fixtures named by the CURRENT
// archive's own positional law the drift lesson keeps).

// F543's own full join column - the CEILING face (F6's three re-join
// events the two gaps 111 and 233 the 344-stretch keeps - the min
// EQUALS the 111 the SHORTER half the floor prices while the .357
// median rides the same stretch to 172 and the .355 mean to 172)
const REAL_F543 = [
  '[08:05:30] [Server thread/INFO]: YardSurvey joined the game',
  '[08:05:44] [Server thread/INFO]: F1 joined the game',
  '[08:05:46] [Server thread/INFO]: F2 joined the game',
  '[08:05:49] [Server thread/INFO]: F3 joined the game',
  '[08:05:52] [Server thread/INFO]: F4 joined the game',
  '[08:05:54] [Server thread/INFO]: F5 joined the game',
  '[08:05:56] [Server thread/INFO]: F6 joined the game',
  '[08:05:59] [Server thread/INFO]: F7 joined the game',
  '[08:06:01] [Server thread/INFO]: F8 joined the game',
  '[08:06:04] [Server thread/INFO]: F9 joined the game',
  '[08:06:08] [Server thread/INFO]: F10 joined the game',
  '[08:06:11] [Server thread/INFO]: F11 joined the game',
  '[08:06:13] [Server thread/INFO]: F12 joined the game',
  '[08:06:15] [Server thread/INFO]: F13 joined the game',
  '[08:06:18] [Server thread/INFO]: F14 joined the game',
  '[08:06:20] [Server thread/INFO]: F15 joined the game',
  '[08:06:23] [Server thread/INFO]: F16 joined the game',
  '[08:06:25] [Server thread/INFO]: F17 joined the game',
  '[08:06:28] [Server thread/INFO]: F18 joined the game',
  '[08:06:31] [Server thread/INFO]: F19 joined the game',
  '[08:09:55] [Server thread/INFO]: F6 joined the game',
  '[08:10:18] [Server thread/INFO]: F5 joined the game',
  '[08:11:19] [Server thread/INFO]: F15 joined the game',
  '[08:11:40] [Server thread/INFO]: F17 joined the game',
  '[08:11:46] [Server thread/INFO]: F6 joined the game',
  '[08:13:30] [Server thread/INFO]: F15 joined the game',
  '[08:13:32] [Server thread/INFO]: F5 joined the game',
  '[08:13:43] [Server thread/INFO]: F8 joined the game',
  '[08:14:10] [Server thread/INFO]: F18 joined the game',
  '[08:14:34] [Server thread/INFO]: F3 joined the game',
  '[08:14:53] [Server thread/INFO]: F14 joined the game',
  '[08:15:31] [Server thread/INFO]: F2 joined the game',
  '[08:15:39] [Server thread/INFO]: F6 joined the game',
  '[08:15:42] [Server thread/INFO]: F8 joined the game'
]
// F545's own full join column - the ALL-ZERO face (F2's and F18's
// co-reign the TWO re-join events the SAME SECOND 09:27:57 keeps -
// the one gap zero rides - the min IS the median IS the mean IS the
// gap IS the stretch IS zero the FIVE-zero face the VOICED ZERO law
// keeps - one of the THREE faces the champion zero gravity prices)
const REAL_F545 = [
  '[09:18:28] [Server thread/INFO]: YardSurvey joined the game',
  '[09:18:41] [Server thread/INFO]: F1 joined the game',
  '[09:18:43] [Server thread/INFO]: F2 joined the game',
  '[09:18:45] [Server thread/INFO]: F3 joined the game',
  '[09:18:48] [Server thread/INFO]: F4 joined the game',
  '[09:18:50] [Server thread/INFO]: F5 joined the game',
  '[09:18:53] [Server thread/INFO]: F6 joined the game',
  '[09:18:55] [Server thread/INFO]: F7 joined the game',
  '[09:18:58] [Server thread/INFO]: F8 joined the game',
  '[09:19:00] [Server thread/INFO]: F9 joined the game',
  '[09:19:03] [Server thread/INFO]: F10 joined the game',
  '[09:19:05] [Server thread/INFO]: F11 joined the game',
  '[09:19:08] [Server thread/INFO]: F12 joined the game',
  '[09:19:10] [Server thread/INFO]: F13 joined the game',
  '[09:19:13] [Server thread/INFO]: F14 joined the game',
  '[09:19:15] [Server thread/INFO]: F15 joined the game',
  '[09:19:18] [Server thread/INFO]: F16 joined the game',
  '[09:19:20] [Server thread/INFO]: F17 joined the game',
  '[09:19:23] [Server thread/INFO]: F18 joined the game',
  '[09:19:26] [Server thread/INFO]: F19 joined the game',
  '[09:27:57] [Server thread/INFO]: F18 joined the game',
  '[09:27:57] [Server thread/INFO]: F2 joined the game'
]
// F549's own full join column - the NINE-REIGN fresh face (NINE
// champions the two-join tie co-reigns - F1 F2 F4 F10 F12 F13 F14
// F18 F19 - the eight gaps TWO same-second pairs keep (F13/F14 the
// 11:59:58 pair, F12/F18 the 12:00:12 pair) - the min 0 the voiced
// zero prices while the median rides (0+0+1+2+2+2+12+310)/2 to 2 and
// the mean 329/8 to 41 - the busy champion list's own gravity the
// floor underprices)
const REAL_F549 = [
  '[11:50:06] [Server thread/INFO]: YardSurvey joined the game',
  '[11:50:21] [Server thread/INFO]: F1 joined the game',
  '[11:50:23] [Server thread/INFO]: F2 joined the game',
  '[11:50:25] [Server thread/INFO]: F3 joined the game',
  '[11:50:28] [Server thread/INFO]: F4 joined the game',
  '[11:50:30] [Server thread/INFO]: F5 joined the game',
  '[11:50:33] [Server thread/INFO]: F6 joined the game',
  '[11:50:35] [Server thread/INFO]: F7 joined the game',
  '[11:50:38] [Server thread/INFO]: F8 joined the game',
  '[11:50:41] [Server thread/INFO]: F9 joined the game',
  '[11:50:43] [Server thread/INFO]: F10 joined the game',
  '[11:50:46] [Server thread/INFO]: F11 joined the game',
  '[11:50:48] [Server thread/INFO]: F12 joined the game',
  '[11:50:51] [Server thread/INFO]: F13 joined the game',
  '[11:50:53] [Server thread/INFO]: F14 joined the game',
  '[11:50:56] [Server thread/INFO]: F15 joined the game',
  '[11:51:00] [Server thread/INFO]: F16 joined the game',
  '[11:51:02] [Server thread/INFO]: F17 joined the game',
  '[11:51:04] [Server thread/INFO]: F18 joined the game',
  '[11:51:07] [Server thread/INFO]: F19 joined the game',
  '[11:54:48] [Server thread/INFO]: F2 joined the game',
  '[11:59:58] [Server thread/INFO]: F14 joined the game',
  '[11:59:58] [Server thread/INFO]: F13 joined the game',
  '[12:00:10] [Server thread/INFO]: F10 joined the game',
  '[12:00:12] [Server thread/INFO]: F12 joined the game',
  '[12:00:12] [Server thread/INFO]: F18 joined the game',
  '[12:00:14] [Server thread/INFO]: F19 joined the game',
  '[12:00:15] [Server thread/INFO]: F1 joined the game',
  '[12:00:17] [Server thread/INFO]: F4 joined the game'
]
// F550's own full join column - the SINGLE-CHAMPION fresh face (F1's
// five re-join events the four gaps 5 5 4 6 the four-flap keeps - the
// min 4 while the storm's own same-second pairs (F19/F11 the 12:32:42
// and 12:33:36 pairs) the .358 word's own zero prices - the champion
// floor ABOVE the storm floor the dialog's own upside the busy
// non-champion pairs never carry)
const REAL_F550 = [
  '[12:24:57] [Server thread/INFO]: YardSurvey joined the game',
  '[12:25:11] [Server thread/INFO]: F1 joined the game',
  '[12:25:13] [Server thread/INFO]: F2 joined the game',
  '[12:25:16] [Server thread/INFO]: F3 joined the game',
  '[12:25:18] [Server thread/INFO]: F4 joined the game',
  '[12:25:21] [Server thread/INFO]: F5 joined the game',
  '[12:25:23] [Server thread/INFO]: F6 joined the game',
  '[12:25:26] [Server thread/INFO]: F7 joined the game',
  '[12:25:28] [Server thread/INFO]: F8 joined the game',
  '[12:25:31] [Server thread/INFO]: F9 joined the game',
  '[12:25:33] [Server thread/INFO]: F10 joined the game',
  '[12:25:36] [Server thread/INFO]: F11 joined the game',
  '[12:25:38] [Server thread/INFO]: F12 joined the game',
  '[12:25:41] [Server thread/INFO]: F13 joined the game',
  '[12:25:43] [Server thread/INFO]: F14 joined the game',
  '[12:25:46] [Server thread/INFO]: F15 joined the game',
  '[12:25:48] [Server thread/INFO]: F16 joined the game',
  '[12:25:51] [Server thread/INFO]: F17 joined the game',
  '[12:25:53] [Server thread/INFO]: F18 joined the game',
  '[12:25:56] [Server thread/INFO]: F19 joined the game',
  '[12:31:08] [Server thread/INFO]: F11 joined the game',
  '[12:32:42] [Server thread/INFO]: F19 joined the game',
  '[12:32:42] [Server thread/INFO]: F11 joined the game',
  '[12:32:52] [Server thread/INFO]: F18 joined the game',
  '[12:32:53] [Server thread/INFO]: F7 joined the game',
  '[12:33:11] [Server thread/INFO]: F9 joined the game',
  '[12:33:36] [Server thread/INFO]: F19 joined the game',
  '[12:33:36] [Server thread/INFO]: F11 joined the game',
  '[12:33:38] [Server thread/INFO]: F2 joined the game',
  '[12:33:51] [Server thread/INFO]: F16 joined the game',
  '[12:33:54] [Server thread/INFO]: F8 joined the game',
  '[12:33:57] [Server thread/INFO]: F14 joined the game',
  '[12:33:58] [Server thread/INFO]: F1 joined the game',
  '[12:33:59] [Server thread/INFO]: F15 joined the game',
  '[12:34:03] [Server thread/INFO]: F1 joined the game',
  '[12:34:08] [Server thread/INFO]: F1 joined the game',
  '[12:34:12] [Server thread/INFO]: F1 joined the game',
  '[12:34:13] [Server thread/INFO]: F5 joined the game',
  '[12:34:15] [Server thread/INFO]: F9 joined the game',
  '[12:34:18] [Server thread/INFO]: F1 joined the game',
  '[12:34:22] [Server thread/INFO]: F17 joined the game',
  '[12:34:28] [Server thread/INFO]: F19 joined the game',
  '[12:34:30] [Server thread/INFO]: F17 joined the game',
  '[12:34:33] [Server thread/INFO]: F6 joined the game',
  '[12:34:34] [Server thread/INFO]: F9 joined the game',
  '[12:34:38] [Server thread/INFO]: F14 joined the game',
  '[12:34:42] [Server thread/INFO]: F11 joined the game',
  '[12:34:54] [Server thread/INFO]: F9 joined the game',
  '[12:34:57] [Server thread/INFO]: F12 joined the game',
  '[12:35:04] [Server thread/INFO]: F10 joined the game',
  '[12:35:06] [Server thread/INFO]: F3 joined the game'
]
// F519's own full join column - the EQUALITY face (F2's two re-join
// events the single 104-second gap IS the whole champion ride - the
// min EQUALS the median EQUALS the mean EQUALS the 104 the ladder
// collapses to a point)
const REAL_F519 = [
  '[10:35:47] [Server thread/INFO]: YardSurvey joined the game',
  '[10:36:00] [Server thread/INFO]: F1 joined the game',
  '[10:36:02] [Server thread/INFO]: F2 joined the game',
  '[10:36:05] [Server thread/INFO]: F3 joined the game',
  '[10:36:07] [Server thread/INFO]: F4 joined the game',
  '[10:36:10] [Server thread/INFO]: F5 joined the game',
  '[10:36:12] [Server thread/INFO]: F6 joined the game',
  '[10:36:15] [Server thread/INFO]: F7 joined the game',
  '[10:36:17] [Server thread/INFO]: F8 joined the game',
  '[10:36:20] [Server thread/INFO]: F9 joined the game',
  '[10:36:22] [Server thread/INFO]: F10 joined the game',
  '[10:36:25] [Server thread/INFO]: F11 joined the game',
  '[10:36:27] [Server thread/INFO]: F12 joined the game',
  '[10:36:30] [Server thread/INFO]: F13 joined the game',
  '[10:36:32] [Server thread/INFO]: F14 joined the game',
  '[10:36:35] [Server thread/INFO]: F15 joined the game',
  '[10:36:38] [Server thread/INFO]: F16 joined the game',
  '[10:36:40] [Server thread/INFO]: F17 joined the game',
  '[10:36:43] [Server thread/INFO]: F18 joined the game',
  '[10:36:45] [Server thread/INFO]: F19 joined the game',
  '[10:44:02] [Server thread/INFO]: F2 joined the game',
  '[10:44:08] [Server thread/INFO]: F13 joined the game',
  '[10:45:30] [Server thread/INFO]: F4 joined the game',
  '[10:45:35] [Server thread/INFO]: F19 joined the game',
  '[10:45:46] [Server thread/INFO]: F2 joined the game',
  '[10:45:59] [Server thread/INFO]: F5 joined the game'
]
// the REAL FIFTY-face arc F501-F550 (the run id ascending the harvest
// order keeps) - TWENTY-FOUR distinct classes no face born-constant:
// the 0 the three-face gravity keeps, the 111 the ceiling face F543
// keeps, MANY values speak
const REAL_ARC = [2, 21, 6, 10, 36, 4, 20, 4, 28, 26, 25, 7, 19, 10, 9, 7, 6, 11, 104, 39, 5, 8, 8, 0, 10, 5, 8, 35, 40, 34, 20, 6, 25, 8, 7, 7, 7, 2, 6, 5, 8, 8, 111, 43, 0, 5, 10, 5, 0, 4]

test('REAL faces byte-exact - the min the floor law prices', () => {
  // the ceiling face: the two-gap 111+233 the SHORTER half prices
  assert.equal(rejoinChampMinBreathCensus(REAL_F543).rejoinChampMinBreathSeconds, 111)
  // the ALL-ZERO face: the co-reign same-second pair the zero gap rides
  assert.equal(rejoinChampMinBreathCensus(REAL_F545).rejoinChampMinBreathSeconds, 0)
  // the NINE-REIGN fresh face: the TWO same-second pairs the zero rides
  assert.equal(rejoinChampMinBreathCensus(REAL_F549).rejoinChampMinBreathSeconds, 0)
  // the SINGLE-CHAMPION fresh face: the four-flap the 4 the floor prices
  assert.equal(rejoinChampMinBreathCensus(REAL_F550).rejoinChampMinBreathSeconds, 4)
  // the equality face: the single 104-second gap the ladder collapses to
  assert.equal(rejoinChampMinBreathCensus(REAL_F519).rejoinChampMinBreathSeconds, 104)
  // the non-array the honest null keeps
  assert.equal(rejoinChampMinBreathCensus(null), null)
  assert.equal(rejoinChampMinBreathCensus('no'), null)
  assert.equal(rejoinChampMinBreathCensus(42), null)
})

test('REAL 50-face arc byte-exact - 24 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 50)
  assert.equal(classes.size, 24)
  assert.equal(Math.min(...arc), 0) // the three-face gravity the floor keeps
  assert.equal(Math.max(...arc), 111) // the ceiling face F543 keeps
  // the 0 the THREE-face gravity keeps (F524's and F545's and F549's
  // same-second pairs the voiced zero prices - the champion min's own
  // LIGHT gravity the .358 word's own fifteen-face the shorter lists
  // never carry)
  assert.equal(arc.filter(v => v === 0).length, 3)
  // the 8 the six-face class keeps
  assert.equal(arc.filter(v => v === 8).length, 6)
  // the 5 and the 7 the fives keep
  assert.equal(arc.filter(v => v === 5).length, 5)
  assert.equal(arc.filter(v => v === 7).length, 5)
  // the held TRIPLE the F535/F536/F537 sevens keep and the TWO eights
  // pairs the F522/F523 and F541/F542 windows hold (the .358 arc's own
  // TWO held pairs the champion arc does NOT inherit - the honest
  // naming the difference prices)
  assert.equal(arc[34], 7)
  assert.equal(arc[35], arc[34])
  assert.equal(arc[36], arc[35])
  assert.equal(arc[21], 8)
  assert.equal(arc[22], arc[21])
  assert.equal(arc[40], 8)
  assert.equal(arc[41], arc[40])
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
  const good = '[08:15:39] [Server thread/INFO]: F6 joined the game'
  const battery = [
    '[08:15:39] Server thread/INFO: F6 joined the game', // no bracket frame
    '[08:15:39] [Server thread/INFO]: F6 joined the game ', // trailing space
    '[8:15:39] [Server thread/INFO]: F6 joined the game', // one-digit hour
    '[08:15:60] [Server thread/INFO]: F6 joined the game', // seconds overflow
    '[08:15:39] [Server thread/INFO]:  joined the game', // no name
    '[08:15:39] [Server thread/INFO]: F6 joined the games', // plural tail
    '[08:15:39] [Server thread/INFO]: f6 Joined the game', // case skin
    '08:15:39 [Server thread/INFO]: F6 joined the game', // no head bracket
    '[08-15-39] [Server thread/INFO]: F6 joined the game', // dash clock
    '[24:00:00] [Server thread/INFO]: F6 joined the game' // hour overflow
  ]
  for (const bad of battery) assert.equal(RE.test(bad), false, JSON.stringify(bad))
  assert.equal(RE.test(good), true)
  // a deformed-only face prices the constructive zero (no champion
  // events the tally keeps - the lawful convention the REAL archive
  // never rode the synthetic pin keeps)
  const empty = { rejoinChampMinBreathSeconds: 0 }
  assert.deepEqual(rejoinChampMinBreathCensus(['x', 'y']), empty)
})

test('fence - every branch the integer law keeps', () => {
  const ok = (n) => ({ rejoinChampMinBreathSeconds: n })
  // the all-integer in-range triple the true keeps
  assert.equal(rejoinChampMinBreathConsistent({ back: ok(0), prev: ok(111), cur: ok(86399) }), true)
  // the non-integer the false keeps
  assert.equal(rejoinChampMinBreathConsistent({ back: ok(0.5), prev: ok(0), cur: ok(0) }), false)
  // the negative the false keeps
  assert.equal(rejoinChampMinBreathConsistent({ back: ok(-1), prev: ok(0), cur: ok(0) }), false)
  // the day-overflow the false keeps
  assert.equal(rejoinChampMinBreathConsistent({ back: ok(86400), prev: ok(0), cur: ok(0) }), false)
  // the string skin the false keeps
  assert.equal(rejoinChampMinBreathConsistent({ back: ok('111'), prev: ok(0), cur: ok(0) }), false)
  // the missing field the false keeps
  assert.equal(rejoinChampMinBreathConsistent({ back: ok(0), prev: ok(0) }), false)
  // the null and the bare the false keeps
  assert.equal(rejoinChampMinBreathConsistent(null), false)
  assert.equal(rejoinChampMinBreathConsistent(0), false)
  assert.equal(rejoinChampMinBreathConsistent({}), false)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const e = (b, p, c) => ({ back: { rejoinChampMinBreathSeconds: b }, prev: { rejoinChampMinBreathSeconds: p }, cur: { rejoinChampMinBreathSeconds: c } })
  // the REAL swell (F503 -> F505): 6 -> 10 (+4) -> 36 (+26)
  const swell = rejoinChampMinBreathTrendRow(e(6, 10, 36))
  assert.match(swell, /champion min breath swell ran two steps deep - 6 -> 10 \(\+4\) -> 36 \(\+26\)/)
  assert.match(swell, /stretched each face/)
  // the REAL fade (F519 -> F521): 104 -> 39 (-65) -> 5 (-34)
  const fade = rejoinChampMinBreathTrendRow(e(104, 39, 5))
  assert.match(fade, /champion min breath fade ran two steps deep - 104 -> 39 \(-65\) -> 5 \(-34\)/)
  assert.match(fade, /shortened each face/)
  // the REAL swing (F548 -> F550 the fresh faces): 5 -> 0 (-5) -> 4 (+4)
  const swing = rejoinChampMinBreathTrendRow(e(5, 0, 4))
  assert.match(swing, /champion min breath swing - 5 -> 0 \(-5\) -> 4 \(\+4\)/)
  assert.match(swing, /traded their floor breath/)
  // the REAL held windows the archive's own held TRIPLE and eights
  // pairs keep (F535 -> F537: 7 -> 7 -> 7 BOTH steps held, F541 ->
  // F543: 8 -> 8 -> 111 the held first step, F522 -> F524: 8 -> 8 -> 0
  // the held first step - the honest silence all keep)
  assert.equal(rejoinChampMinBreathTrendRow(e(7, 7, 7)), null)
  assert.equal(rejoinChampMinBreathTrendRow(e(8, 8, 111)), null)
  assert.equal(rejoinChampMinBreathTrendRow(e(8, 8, 0)), null)
  // the tail the sibling seats name (the co-existence by seat law -
  // the .356 and .357 and .358 words the fresh tail keeps)
  const row = rejoinChampMinBreathTrendRow(e(6, 10, 36))
  for (const seat of ['.346 re-join bin', '.347 re-join bots', '.348 re-join peak', '.349 re-join peak name', '.350 re-join span', '.351 champion stretch', '.352 re-join gap', '.353 champion gap', '.354 mean breath', '.355 champion mean breath', '.356 storm median breath', '.357 champion median breath', '.358 storm min breath']) {
    assert.match(row, new RegExp(seat.replace(/\./g, '\\.') + ' word prices'))
  }
  // the fence breach the honest silence keeps
  assert.equal(rejoinChampMinBreathTrendRow(null), null)
  assert.equal(rejoinChampMinBreathTrendRow({ back: { rejoinChampMinBreathSeconds: 0.5 }, prev: { rejoinChampMinBreathSeconds: 1 }, cur: { rejoinChampMinBreathSeconds: 2 } }), null)
})
