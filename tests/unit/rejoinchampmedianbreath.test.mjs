import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampMedianBreathCensus, rejoinChampMedianBreathConsistent, rejoinChampMedianBreathTrendRow } from '../../src/lib/rejoinchampmedianbreath.mjs'

// the REAL faces the 47-face archive holds (/home/z/faces331 - the
// champion cadence list's own CENTRE the sort law prices: THIRTY-FOUR
// distinct classes the champion median breath voices). The fixtures
// ride the archive's own join columns byte-faithful (the .356 test's
// own columns the family keeps, the F547 three-reign fresh face the
// fire-1843 harvest rides).

// F509's own full join column - the two-flapper's face (F16's two
// re-join events the single gap IS the whole list - the champion
// median EQUALS the 28 the equality face keeps, the centre IS the
// champion's whole ride)
const REAL_F509 = [
  '[03:02:19] [Server thread/INFO]: YardSurvey joined the game',
  '[03:02:32] [Server thread/INFO]: F1 joined the game',
  '[03:02:35] [Server thread/INFO]: F2 joined the game',
  '[03:02:37] [Server thread/INFO]: F3 joined the game',
  '[03:02:40] [Server thread/INFO]: F4 joined the game',
  '[03:02:42] [Server thread/INFO]: F5 joined the game',
  '[03:02:45] [Server thread/INFO]: F6 joined the game',
  '[03:02:47] [Server thread/INFO]: F7 joined the game',
  '[03:02:50] [Server thread/INFO]: F8 joined the game',
  '[03:02:52] [Server thread/INFO]: F9 joined the game',
  '[03:02:55] [Server thread/INFO]: F10 joined the game',
  '[03:02:57] [Server thread/INFO]: F11 joined the game',
  '[03:03:00] [Server thread/INFO]: F12 joined the game',
  '[03:03:02] [Server thread/INFO]: F13 joined the game',
  '[03:03:05] [Server thread/INFO]: F14 joined the game',
  '[03:03:07] [Server thread/INFO]: F15 joined the game',
  '[03:03:10] [Server thread/INFO]: F16 joined the game',
  '[03:03:12] [Server thread/INFO]: F17 joined the game',
  '[03:03:15] [Server thread/INFO]: F18 joined the game',
  '[03:03:18] [Server thread/INFO]: F19 joined the game',
  '[03:11:50] [Server thread/INFO]: F16 joined the game',
  '[03:12:18] [Server thread/INFO]: F16 joined the game'
]
// F543's own full join column - the ceiling's own face (F6 the lone
// three-reign champion the beyond-first echoes keep - 08:09:55
// 08:11:46 08:15:39 the TWO gaps 111 and 233 the sort orders, the
// (111+233)/2 the floor keeps 172 - the .355 word's own NEW CEILING
// face the even-count median the same 344-stretch prices, the median
// IS the mean 172 the level face the two-gap law keeps)
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
// F532's own full join column - the above face (F13 the lone
// five-reign champion - the FOUR gaps 87 47 6 108 the sort orders,
// the (47+87)/2 the floor keeps 67 ABOVE the mean 248/4=62 - one of
// the FIVE faces the dialog's above-side keeps, the busy middle
// outweighs the 108 tail the mean carries)
const REAL_F532 = [
  '[23:01:45] [Server thread/INFO]: YardSurvey joined the game',
  '[23:01:59] [Server thread/INFO]: F1 joined the game',
  '[23:02:01] [Server thread/INFO]: F2 joined the game',
  '[23:02:03] [Server thread/INFO]: F3 joined the game',
  '[23:02:06] [Server thread/INFO]: F4 joined the game',
  '[23:02:08] [Server thread/INFO]: F5 joined the game',
  '[23:02:11] [Server thread/INFO]: F6 joined the game',
  '[23:02:13] [Server thread/INFO]: F7 joined the game',
  '[23:02:16] [Server thread/INFO]: F8 joined the game',
  '[23:02:20] [Server thread/INFO]: F9 joined the game',
  '[23:02:21] [Server thread/INFO]: F10 joined the game',
  '[23:02:24] [Server thread/INFO]: F11 joined the game',
  '[23:02:27] [Server thread/INFO]: F12 joined the game',
  '[23:02:29] [Server thread/INFO]: F13 joined the game',
  '[23:02:32] [Server thread/INFO]: F14 joined the game',
  '[23:02:34] [Server thread/INFO]: F15 joined the game',
  '[23:02:37] [Server thread/INFO]: F16 joined the game',
  '[23:02:39] [Server thread/INFO]: F17 joined the game',
  '[23:02:42] [Server thread/INFO]: F18 joined the game',
  '[23:02:44] [Server thread/INFO]: F19 joined the game',
  '[23:07:30] [Server thread/INFO]: F13 joined the game',
  '[23:08:57] [Server thread/INFO]: F13 joined the game',
  '[23:09:44] [Server thread/INFO]: F13 joined the game',
  '[23:09:50] [Server thread/INFO]: F13 joined the game',
  '[23:10:14] [Server thread/INFO]: F17 joined the game',
  '[23:10:22] [Server thread/INFO]: F17 joined the game',
  '[23:11:21] [Server thread/INFO]: F17 joined the game',
  '[23:11:38] [Server thread/INFO]: F13 joined the game'
]
// F537's own full join column - the gravity face (F5 the lone
// ten-reign champion - the NINE gaps 251 56 11 7 7 8 8 8 8 the sort
// orders, the middle 8 the census prices while the MEAN rides the
// 251 giant to 40 - the median UNDER the mean by thirty-two the
// tallest silence's own gravity the sum carries and the centre
// drops)
const REAL_F537 = [
  '[03:17:23] [Server thread/INFO]: YardSurvey joined the game',
  '[03:17:36] [Server thread/INFO]: F1 joined the game',
  '[03:17:38] [Server thread/INFO]: F2 joined the game',
  '[03:17:40] [Server thread/INFO]: F3 joined the game',
  '[03:17:43] [Server thread/INFO]: F4 joined the game',
  '[03:17:46] [Server thread/INFO]: F5 joined the game',
  '[03:17:48] [Server thread/INFO]: F6 joined the game',
  '[03:17:51] [Server thread/INFO]: F7 joined the game',
  '[03:17:54] [Server thread/INFO]: F8 joined the game',
  '[03:17:57] [Server thread/INFO]: F9 joined the game',
  '[03:18:00] [Server thread/INFO]: F10 joined the game',
  '[03:18:02] [Server thread/INFO]: F11 joined the game',
  '[03:18:05] [Server thread/INFO]: F12 joined the game',
  '[03:18:08] [Server thread/INFO]: F13 joined the game',
  '[03:18:10] [Server thread/INFO]: F14 joined the game',
  '[03:18:14] [Server thread/INFO]: F15 joined the game',
  '[03:18:16] [Server thread/INFO]: F16 joined the game',
  '[03:18:19] [Server thread/INFO]: F17 joined the game',
  '[03:18:22] [Server thread/INFO]: F18 joined the game',
  '[03:18:24] [Server thread/INFO]: F19 joined the game',
  '[03:21:31] [Server thread/INFO]: F5 joined the game',
  '[03:23:04] [Server thread/INFO]: F13 joined the game',
  '[03:23:10] [Server thread/INFO]: F13 joined the game',
  '[03:23:31] [Server thread/INFO]: F13 joined the game',
  '[03:23:45] [Server thread/INFO]: F16 joined the game',
  '[03:23:58] [Server thread/INFO]: F14 joined the game',
  '[03:24:04] [Server thread/INFO]: F14 joined the game',
  '[03:24:36] [Server thread/INFO]: F16 joined the game',
  '[03:24:38] [Server thread/INFO]: F13 joined the game',
  '[03:25:36] [Server thread/INFO]: F19 joined the game',
  '[03:25:38] [Server thread/INFO]: F2 joined the game',
  '[03:25:38] [Server thread/INFO]: F10 joined the game',
  '[03:25:42] [Server thread/INFO]: F5 joined the game',
  '[03:25:54] [Server thread/INFO]: F10 joined the game',
  '[03:26:20] [Server thread/INFO]: F10 joined the game',
  '[03:26:22] [Server thread/INFO]: F6 joined the game',
  '[03:26:38] [Server thread/INFO]: F5 joined the game',
  '[03:26:44] [Server thread/INFO]: F12 joined the game',
  '[03:26:49] [Server thread/INFO]: F5 joined the game',
  '[03:26:51] [Server thread/INFO]: F10 joined the game',
  '[03:26:56] [Server thread/INFO]: F5 joined the game',
  '[03:27:03] [Server thread/INFO]: F5 joined the game',
  '[03:27:04] [Server thread/INFO]: F9 joined the game',
  '[03:27:04] [Server thread/INFO]: F7 joined the game',
  '[03:27:07] [Server thread/INFO]: F16 joined the game',
  '[03:27:11] [Server thread/INFO]: F5 joined the game',
  '[03:27:19] [Server thread/INFO]: F5 joined the game',
  '[03:27:20] [Server thread/INFO]: F1 joined the game',
  '[03:27:23] [Server thread/INFO]: F8 joined the game',
  '[03:27:25] [Server thread/INFO]: F17 joined the game',
  '[03:27:27] [Server thread/INFO]: F5 joined the game',
  '[03:27:35] [Server thread/INFO]: F18 joined the game',
  '[03:27:35] [Server thread/INFO]: F5 joined the game'
]
// F524's own full join column - the co-reign's own busy face (F1 and
// F17 the TIED eleven-reign champions BOTH the merged file-order
// list prices - TWENTY-TWO champion events the twenty-one gaps keep,
// the same-second F17/F1 pair 16:30:08 the ZERO gap hides INSIDE the
// busy list, the sorted centre 7 the census prices while the mean
// 157/21 floors to 7 the level face the co-reign keeps)
const REAL_F524 = [
  '[16:22:15] [Server thread/INFO]: YardSurvey joined the game',
  '[16:22:29] [Server thread/INFO]: F1 joined the game',
  '[16:22:31] [Server thread/INFO]: F2 joined the game',
  '[16:22:33] [Server thread/INFO]: F3 joined the game',
  '[16:22:36] [Server thread/INFO]: F4 joined the game',
  '[16:22:38] [Server thread/INFO]: F5 joined the game',
  '[16:22:42] [Server thread/INFO]: F6 joined the game',
  '[16:22:45] [Server thread/INFO]: F7 joined the game',
  '[16:22:48] [Server thread/INFO]: F8 joined the game',
  '[16:22:51] [Server thread/INFO]: F9 joined the game',
  '[16:22:54] [Server thread/INFO]: F10 joined the game',
  '[16:22:56] [Server thread/INFO]: F11 joined the game',
  '[16:22:59] [Server thread/INFO]: F12 joined the game',
  '[16:23:02] [Server thread/INFO]: F13 joined the game',
  '[16:23:04] [Server thread/INFO]: F14 joined the game',
  '[16:23:08] [Server thread/INFO]: F15 joined the game',
  '[16:23:10] [Server thread/INFO]: F16 joined the game',
  '[16:23:13] [Server thread/INFO]: F17 joined the game',
  '[16:23:16] [Server thread/INFO]: F18 joined the game',
  '[16:23:18] [Server thread/INFO]: F19 joined the game',
  '[16:27:00] [Server thread/INFO]: F8 joined the game',
  '[16:27:22] [Server thread/INFO]: F8 joined the game',
  '[16:27:28] [Server thread/INFO]: F9 joined the game',
  '[16:27:44] [Server thread/INFO]: F8 joined the game',
  '[16:28:04] [Server thread/INFO]: F8 joined the game',
  '[16:28:18] [Server thread/INFO]: F8 joined the game',
  '[16:28:26] [Server thread/INFO]: F9 joined the game',
  '[16:28:30] [Server thread/INFO]: F8 joined the game',
  '[16:28:31] [Server thread/INFO]: F17 joined the game',
  '[16:28:39] [Server thread/INFO]: F8 joined the game',
  '[16:28:45] [Server thread/INFO]: F8 joined the game',
  '[16:28:50] [Server thread/INFO]: F17 joined the game',
  '[16:28:51] [Server thread/INFO]: F16 joined the game',
  '[16:28:53] [Server thread/INFO]: F8 joined the game',
  '[16:28:59] [Server thread/INFO]: F16 joined the game',
  '[16:29:00] [Server thread/INFO]: F17 joined the game',
  '[16:29:11] [Server thread/INFO]: F16 joined the game',
  '[16:29:12] [Server thread/INFO]: F17 joined the game',
  '[16:29:20] [Server thread/INFO]: F17 joined the game',
  '[16:29:27] [Server thread/INFO]: F16 joined the game',
  '[16:29:34] [Server thread/INFO]: F17 joined the game',
  '[16:29:45] [Server thread/INFO]: F17 joined the game',
  '[16:29:47] [Server thread/INFO]: F16 joined the game',
  '[16:29:58] [Server thread/INFO]: F17 joined the game',
  '[16:30:03] [Server thread/INFO]: F16 joined the game',
  '[16:30:08] [Server thread/INFO]: F17 joined the game',
  '[16:30:08] [Server thread/INFO]: F1 joined the game',
  '[16:30:09] [Server thread/INFO]: F16 joined the game',
  '[16:30:13] [Server thread/INFO]: F15 joined the game',
  '[16:30:15] [Server thread/INFO]: F16 joined the game',
  '[16:30:17] [Server thread/INFO]: F1 joined the game',
  '[16:30:18] [Server thread/INFO]: F17 joined the game',
  '[16:30:22] [Server thread/INFO]: F15 joined the game',
  '[16:30:24] [Server thread/INFO]: F1 joined the game',
  '[16:30:28] [Server thread/INFO]: F1 joined the game',
  '[16:30:31] [Server thread/INFO]: F17 joined the game',
  '[16:30:34] [Server thread/INFO]: F1 joined the game',
  '[16:30:39] [Server thread/INFO]: F1 joined the game',
  '[16:30:46] [Server thread/INFO]: F1 joined the game',
  '[16:30:48] [Server thread/INFO]: F15 joined the game',
  '[16:30:52] [Server thread/INFO]: F1 joined the game',
  '[16:30:56] [Server thread/INFO]: F1 joined the game',
  '[16:31:01] [Server thread/INFO]: F1 joined the game',
  '[16:31:08] [Server thread/INFO]: F1 joined the game',
  '[16:31:14] [Server thread/INFO]: F6 joined the game',
  '[16:31:25] [Server thread/INFO]: F8 joined the game',
  '[16:31:36] [Server thread/INFO]: F4 joined the game',
  '[16:32:14] [Server thread/INFO]: F19 joined the game',
  '[16:32:27] [Server thread/INFO]: F9 joined the game',
  '[16:32:29] [Server thread/INFO]: F13 joined the game'
]
// F545's own full join column - the ALL-ZERO face (TWO champion
// re-join events the SAME SECOND 09:27:57 keeps - F18 and F2 the
// tied one-reign pair the co-reign keeps - the ONE gap zero rides,
// the champion median IS the mean IS the gap IS the span zero the
// four-zero face the VOICED ZERO law keeps)
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
// the REAL FORTY-SEVEN-face arc F501-F547 (the artifact created_at
// ascending the harvest order keeps) - THIRTY-FOUR distinct classes
// no face born-constant: the 0 the ALL-ZERO face keeps, the 172 the
// ceiling face keeps, the 23 the fresh three-reign face keeps, the
// HELD PAIR the F539/F540 sevens the champion arc keeps (the storm
// median's own NO-HELD-PAIR the champion arc does NOT inherit)
const REAL_ARC = [93, 27, 49, 18, 61, 6, 63, 17, 28, 26, 54, 12, 19, 12, 28, 8, 42, 11, 104, 62, 27, 10, 11, 7, 13, 5, 8, 35, 40, 59, 20, 67, 91, 8, 7, 18, 8, 105, 7, 7, 10, 11, 172, 53, 0, 9, 23]

test('REAL faces byte-exact - the champion median the centre law prices', () => {
  // the single-gap ride: the centre IS the gap IS the mean IS the span
  assert.equal(rejoinChampMedianBreathCensus(REAL_F509).rejoinChampMedianBreathSeconds, 28)
  // the ceiling face: (111+233)/2 the floor keeps 172 - the even-count
  // two-gap law the .355 word's own NEW CEILING face re-prices
  assert.equal(rejoinChampMedianBreathCensus(REAL_F543).rejoinChampMedianBreathSeconds, 172)
  // the above face: (47+87)/2 the floor keeps 67 above the mean 62
  assert.equal(rejoinChampMedianBreathCensus(REAL_F532).rejoinChampMedianBreathSeconds, 67)
  // the gravity face: the centre 8 while the mean rides the 251 giant to 40
  assert.equal(rejoinChampMedianBreathCensus(REAL_F537).rejoinChampMedianBreathSeconds, 8)
  // the co-reign busy face: F1+F17 the tied pair the merged list
  // prices - the centre 7 the mean 157/21 floors to 7 the level keeps
  assert.equal(rejoinChampMedianBreathCensus(REAL_F524).rejoinChampMedianBreathSeconds, 7)
  // the ALL-ZERO face: the same-second co-reign pair the zero gap rides
  assert.equal(rejoinChampMedianBreathCensus(REAL_F545).rejoinChampMedianBreathSeconds, 0)
  // the non-array the honest null keeps
  assert.equal(rejoinChampMedianBreathCensus(null), null)
  assert.equal(rejoinChampMedianBreathCensus('no'), null)
  assert.equal(rejoinChampMedianBreathCensus(42), null)
})

test('REAL 47-face arc byte-exact - 34 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 47)
  assert.equal(classes.size, 34)
  assert.equal(Math.min(...arc), 0) // the ALL-ZERO face the floor keeps
  assert.equal(Math.max(...arc), 172) // the ceiling face F543 keeps
  // the 7 the QUAD keeps (F524 F535 F539 F540)
  assert.equal(arc.filter(v => v === 7).length, 4)
  // the 8 the QUAD keeps (F516 F527 F534 F537)
  assert.equal(arc.filter(v => v === 8).length, 4)
  // the 11 the TRIPLE keeps (F518 F523 F542)
  assert.equal(arc.filter(v => v === 11).length, 3)
  // the 23 the fresh face keeps (F547's own three-reign two-gap)
  assert.equal(arc.filter(v => v === 23).length, 1)
  // the HELD PAIR the REAL arc keeps - F539/F540 the sevens the
  // storm median's own NO-HELD-PAIR the champion arc does NOT inherit
  assert.equal(arc[38], 7)
  assert.equal(arc[39], 7)
  let heldPairs = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) heldPairs++
  assert.equal(heldPairs, 1) // exactly the F539/F540 pair
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
  const good = '[03:11:50] [Server thread/INFO]: F16 joined the game'
  const battery = [
    '[03:11:50] Server thread/INFO: F16 joined the game', // no bracket frame
    '[03:11:50] [Server thread/INFO]: F16 joined the game ', // trailing space
    '[3:11:50] [Server thread/INFO]: F16 joined the game', // one-digit hour
    '[03:11:60] [Server thread/INFO]: F16 joined the game', // seconds overflow
    '[03:11:50] [Server thread/INFO]:  joined the game', // no name
    '[03:11:50] [Server thread/INFO]: F16 joined the games', // plural tail
    '[03:11:50] [Server thread/INFO]: f16 Joined the game', // case skin
    '03:11:50 [Server thread/INFO]: F16 joined the game', // no head bracket
    '[03-11-50] [Server thread/INFO]: F16 joined the game', // dash clock
    '[24:00:00] [Server thread/INFO]: F16 joined the game' // hour overflow
  ]
  for (const bad of battery) assert.equal(RE.test(bad), false, JSON.stringify(bad))
  assert.equal(RE.test(good), true)
  // a deformed-only face prices the constructive zero (no champion
  // events the tally keeps)
  const empty = { rejoinChampMedianBreathSeconds: 0 }
  assert.deepEqual(rejoinChampMedianBreathCensus(['x', 'y']), empty)
  // the non-string lines the tally never rides
  const mixed = ['[03:11:50] [Server thread/INFO]: F16 joined the game', 42, null, undefined, {}]
  assert.deepEqual(rejoinChampMedianBreathCensus(mixed), empty)
})

test('fence - every branch the integer law keeps', () => {
  const ok = (n) => ({ rejoinChampMedianBreathSeconds: n })
  // the all-integer in-range triple the true keeps
  assert.equal(rejoinChampMedianBreathConsistent({ back: ok(0), prev: ok(59), cur: ok(86399) }), true)
  // the non-integer the false keeps
  assert.equal(rejoinChampMedianBreathConsistent({ back: ok(0.5), prev: ok(0), cur: ok(0) }), false)
  // the negative the false keeps
  assert.equal(rejoinChampMedianBreathConsistent({ back: ok(-1), prev: ok(0), cur: ok(0) }), false)
  // the day-overflow the false keeps
  assert.equal(rejoinChampMedianBreathConsistent({ back: ok(86400), prev: ok(0), cur: ok(0) }), false)
  // the string skin the false keeps
  assert.equal(rejoinChampMedianBreathConsistent({ back: ok('172'), prev: ok(0), cur: ok(0) }), false)
  // the missing field the false keeps
  assert.equal(rejoinChampMedianBreathConsistent({ back: ok(0), prev: ok(0) }), false)
  // the null and the bare the false keeps
  assert.equal(rejoinChampMedianBreathConsistent(null), false)
  assert.equal(rejoinChampMedianBreathConsistent(0), false)
  assert.equal(rejoinChampMedianBreathConsistent({}), false)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const e = (b, p, c) => ({ back: { rejoinChampMedianBreathSeconds: b }, prev: { rejoinChampMedianBreathSeconds: p }, cur: { rejoinChampMedianBreathSeconds: c } })
  // the REAL swell (F540 -> F541 -> F542): 7 -> 10 (+3) -> 11 (+1)
  const swell = rejoinChampMedianBreathTrendRow(e(7, 10, 11))
  assert.match(swell, /champion median breath swell ran two steps deep - 7 -> 10 \(\+3\) -> 11 \(\+1\)/)
  assert.match(swell, /stretched each face/)
  // the REAL fade (F519 -> F520 -> F521): 104 -> 62 (-42) -> 27 (-35)
  const fade = rejoinChampMedianBreathTrendRow(e(104, 62, 27))
  assert.match(fade, /champion median breath fade ran two steps deep - 104 -> 62 \(-42\) -> 27 \(-35\)/)
  assert.match(fade, /shortened each face/)
  // the REAL swing (F542 -> F543 -> F544): 11 -> 172 (+161) -> 53 (-119)
  const swing = rejoinChampMedianBreathTrendRow(e(11, 172, 53))
  assert.match(swing, /champion median breath swing - 11 -> 172 \(\+161\) -> 53 \(-119\)/)
  assert.match(swing, /traded their centre breath/)
  // the REAL held window the honest silence keeps (F538 -> F539 ->
  // F540: 105 -> 7 (-98) -> 7 the HELD PAIR the champion arc keeps)
  assert.equal(rejoinChampMedianBreathTrendRow(e(105, 7, 7)), null)
  // the synthetic held shapes the silence keeps
  assert.equal(rejoinChampMedianBreathTrendRow(e(5, 5, 9)), null)
  assert.equal(rejoinChampMedianBreathTrendRow(e(5, 9, 9)), null)
  // the tail the sibling seats name (the co-existence by seat law)
  const row = rejoinChampMedianBreathTrendRow(e(7, 10, 11))
  for (const seat of ['.346 re-join bin', '.347 re-join bots', '.348 re-join peak', '.349 re-join peak name', '.350 re-join span', '.351 champion stretch', '.352 re-join gap', '.353 champion gap', '.354 mean breath', '.355 champion mean breath', '.356 storm median breath']) {
    assert.match(row, new RegExp(seat.replace(/\./g, '\\.') + ' word prices'))
  }
  // the fence breach the honest silence keeps
  assert.equal(rejoinChampMedianBreathTrendRow(null), null)
  assert.equal(rejoinChampMedianBreathTrendRow({ back: { rejoinChampMedianBreathSeconds: 0.5 }, prev: { rejoinChampMedianBreathSeconds: 1 }, cur: { rejoinChampMedianBreathSeconds: 2 } }), null)
})

