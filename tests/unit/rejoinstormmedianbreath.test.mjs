import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormMedianBreathCensus, rejoinStormMedianBreathConsistent, rejoinStormMedianBreathTrendRow } from '../../src/lib/rejoinstormmedianbreath.mjs'

// the REAL faces the 45-face archive holds (/home/z/faces331 - the
// cadence list's own CENTRE the sort law prices: TWENTY-THREE distinct
// classes the storm median breath voices). The fixtures ride the
// archive's own join columns byte-faithful (the .355 test's own
// columns the family keeps, the F545 ALL-ZERO fresh face the
// fire-1743 harvest rides).

// F509's own full join column - the two-flapper's face (F16's two
// re-join events the single gap IS the whole list - the median
// EQUALS the 28 the equality face keeps, the centre IS the storm)
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
// F531's own full join column - the kidnapping's own face (EIGHT
// re-join events the busy tail keeps - the 0 0 1 2 20 20 133 the
// sort orders, the centre 2 the census prices while the MEAN rides
// the 133 giant to 25 - the median UNDER the mean by twenty-three
// the tallest silence's own gravity the sum carries and the centre
// drops)
const REAL_F531 = [
  '[21:58:51] [Server thread/INFO]: YardSurvey joined the game',
  '[21:59:06] [Server thread/INFO]: F1 joined the game',
  '[21:59:08] [Server thread/INFO]: F2 joined the game',
  '[21:59:10] [Server thread/INFO]: F3 joined the game',
  '[21:59:13] [Server thread/INFO]: F4 joined the game',
  '[21:59:15] [Server thread/INFO]: F5 joined the game',
  '[21:59:18] [Server thread/INFO]: F6 joined the game',
  '[21:59:21] [Server thread/INFO]: F7 joined the game',
  '[21:59:23] [Server thread/INFO]: F8 joined the game',
  '[21:59:25] [Server thread/INFO]: F9 joined the game',
  '[21:59:28] [Server thread/INFO]: F10 joined the game',
  '[21:59:31] [Server thread/INFO]: F11 joined the game',
  '[21:59:34] [Server thread/INFO]: F12 joined the game',
  '[21:59:36] [Server thread/INFO]: F13 joined the game',
  '[21:59:39] [Server thread/INFO]: F14 joined the game',
  '[21:59:41] [Server thread/INFO]: F15 joined the game',
  '[21:59:45] [Server thread/INFO]: F16 joined the game',
  '[21:59:46] [Server thread/INFO]: F17 joined the game',
  '[21:59:50] [Server thread/INFO]: F18 joined the game',
  '[21:59:52] [Server thread/INFO]: F19 joined the game',
  '[22:06:07] [Server thread/INFO]: F15 joined the game',
  '[22:06:27] [Server thread/INFO]: F13 joined the game',
  '[22:06:47] [Server thread/INFO]: F13 joined the game',
  '[22:09:00] [Server thread/INFO]: F14 joined the game',
  '[22:09:01] [Server thread/INFO]: F3 joined the game',
  '[22:09:01] [Server thread/INFO]: F11 joined the game',
  '[22:09:03] [Server thread/INFO]: F4 joined the game',
  '[22:09:03] [Server thread/INFO]: F7 joined the game'
]
// F530's own full join column - the ceiling's own face (FOUR re-join
// events the 34 59 67 the list keeps, the centre 59 the census
// prices - the WHOLE arc's ceiling the fresh word keeps - while the
// mean rides 160/3 to 53 BELOW the centre - one of the TWO faces the
// dialog's above-side keeps)
const REAL_F530 = [
  '[21:06:47] [Server thread/INFO]: YardSurvey joined the game',
  '[21:06:59] [Server thread/INFO]: F1 joined the game',
  '[21:07:02] [Server thread/INFO]: F2 joined the game',
  '[21:07:04] [Server thread/INFO]: F3 joined the game',
  '[21:07:07] [Server thread/INFO]: F4 joined the game',
  '[21:07:09] [Server thread/INFO]: F5 joined the game',
  '[21:07:12] [Server thread/INFO]: F6 joined the game',
  '[21:07:14] [Server thread/INFO]: F7 joined the game',
  '[21:07:17] [Server thread/INFO]: F8 joined the game',
  '[21:07:19] [Server thread/INFO]: F9 joined the game',
  '[21:07:22] [Server thread/INFO]: F10 joined the game',
  '[21:07:24] [Server thread/INFO]: F11 joined the game',
  '[21:07:27] [Server thread/INFO]: F12 joined the game',
  '[21:07:29] [Server thread/INFO]: F13 joined the game',
  '[21:07:32] [Server thread/INFO]: F14 joined the game',
  '[21:07:34] [Server thread/INFO]: F15 joined the game',
  '[21:07:37] [Server thread/INFO]: F16 joined the game',
  '[21:07:39] [Server thread/INFO]: F17 joined the game',
  '[21:07:42] [Server thread/INFO]: F18 joined the game',
  '[21:07:44] [Server thread/INFO]: F19 joined the game',
  '[21:13:40] [Server thread/INFO]: F14 joined the game',
  '[21:14:14] [Server thread/INFO]: F10 joined the game',
  '[21:15:13] [Server thread/INFO]: F15 joined the game',
  '[21:16:20] [Server thread/INFO]: F17 joined the game'
]
// F521's own full join column - the ABOVE face (THIRTEEN re-join
// events the F19 seven-flap column keeps - the 5 5 6 26 27 28 29 34
// 35 38 46 56 the even sort orders, the two centres 28 and 29 the
// floored half-sum prices 28 while the mean rides 335/12 to 27 BELOW
// the centre - the busy majority outweighs the tail the dialog's
// above-side keeps)
const REAL_F521 = [
  '[13:32:42] [Server thread/INFO]: YardSurvey joined the game',
  '[13:32:55] [Server thread/INFO]: F1 joined the game',
  '[13:32:57] [Server thread/INFO]: F2 joined the game',
  '[13:33:00] [Server thread/INFO]: F3 joined the game',
  '[13:33:02] [Server thread/INFO]: F4 joined the game',
  '[13:33:05] [Server thread/INFO]: F5 joined the game',
  '[13:33:08] [Server thread/INFO]: F6 joined the game',
  '[13:33:10] [Server thread/INFO]: F7 joined the game',
  '[13:33:13] [Server thread/INFO]: F8 joined the game',
  '[13:33:15] [Server thread/INFO]: F9 joined the game',
  '[13:33:18] [Server thread/INFO]: F10 joined the game',
  '[13:33:20] [Server thread/INFO]: F11 joined the game',
  '[13:33:23] [Server thread/INFO]: F12 joined the game',
  '[13:33:25] [Server thread/INFO]: F13 joined the game',
  '[13:33:28] [Server thread/INFO]: F14 joined the game',
  '[13:33:30] [Server thread/INFO]: F15 joined the game',
  '[13:33:33] [Server thread/INFO]: F16 joined the game',
  '[13:33:35] [Server thread/INFO]: F17 joined the game',
  '[13:33:38] [Server thread/INFO]: F18 joined the game',
  '[13:33:40] [Server thread/INFO]: F19 joined the game',
  '[13:36:29] [Server thread/INFO]: F18 joined the game',
  '[13:37:25] [Server thread/INFO]: F18 joined the game',
  '[13:37:54] [Server thread/INFO]: F18 joined the game',
  '[13:37:59] [Server thread/INFO]: F19 joined the game',
  '[13:38:34] [Server thread/INFO]: F19 joined the game',
  '[13:39:01] [Server thread/INFO]: F19 joined the game',
  '[13:39:27] [Server thread/INFO]: F19 joined the game',
  '[13:40:01] [Server thread/INFO]: F19 joined the game',
  '[13:40:06] [Server thread/INFO]: F19 joined the game',
  '[13:40:34] [Server thread/INFO]: F15 joined the game',
  '[13:41:20] [Server thread/INFO]: F5 joined the game',
  '[13:41:26] [Server thread/INFO]: F5 joined the game',
  '[13:42:04] [Server thread/INFO]: F18 joined the game'
]
// F524's own full join column - the F17 six-flap face (NINE re-join
// events the 7 8 8 8 14 20 21 41 the even sort orders, the two
// centres 8 and 14 the floored half-sum prices 11 - the MEAN rides
// 127/8 to 15 ABOVE the centre - the forty-one tail the mean carries
// and the centre drops)
const REAL_F524 = [
  '[00:59:28] [Server thread/INFO]: YardSurvey joined the game',
  '[00:59:41] [Server thread/INFO]: F1 joined the game',
  '[00:59:43] [Server thread/INFO]: F2 joined the game',
  '[00:59:46] [Server thread/INFO]: F3 joined the game',
  '[00:59:48] [Server thread/INFO]: F4 joined the game',
  '[00:59:51] [Server thread/INFO]: F5 joined the game',
  '[00:59:53] [Server thread/INFO]: F6 joined the game',
  '[00:59:56] [Server thread/INFO]: F7 joined the game',
  '[00:59:58] [Server thread/INFO]: F8 joined the game',
  '[01:00:01] [Server thread/INFO]: F9 joined the game',
  '[01:00:03] [Server thread/INFO]: F10 joined the game',
  '[01:00:06] [Server thread/INFO]: F11 joined the game',
  '[01:00:08] [Server thread/INFO]: F12 joined the game',
  '[01:00:11] [Server thread/INFO]: F13 joined the game',
  '[01:00:13] [Server thread/INFO]: F14 joined the game',
  '[01:00:16] [Server thread/INFO]: F15 joined the game',
  '[01:00:18] [Server thread/INFO]: F16 joined the game',
  '[01:00:21] [Server thread/INFO]: F17 joined the game',
  '[01:00:23] [Server thread/INFO]: F18 joined the game',
  '[01:00:26] [Server thread/INFO]: F19 joined the game',
  '[01:07:30] [Server thread/INFO]: F17 joined the game',
  '[01:07:38] [Server thread/INFO]: F17 joined the game',
  '[01:07:46] [Server thread/INFO]: F17 joined the game',
  '[01:07:54] [Server thread/INFO]: F17 joined the game',
  '[01:08:08] [Server thread/INFO]: F17 joined the game',
  '[01:08:28] [Server thread/INFO]: F9 joined the game',
  '[01:09:09] [Server thread/INFO]: F15 joined the game',
  '[01:09:30] [Server thread/INFO]: F19 joined the game',
  '[01:09:37] [Server thread/INFO]: F10 joined the game'
]
// F545's own full join column - the ALL-ZERO face (TWO re-join
// events the SAME SECOND 09:27:57 keeps - F18 and F2 the one gap
// zero rides - the median IS the mean IS the span IS zero the
// four-zero face the VOICED ZERO law keeps - the zero the census's
// own arithmetic prices, the zero gap a lawful reading)
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
// the REAL FORTY-SIX-face arc F501-F546 (the artifact created_at
// ascending the harvest order keeps) - TWENTY-THREE distinct classes
// no face born-constant: the 0 the ALL-ZERO face keeps, the 2 the
// triple, the 59 the ceiling face keeps, MANY values speak
const REAL_ARC = [7, 21, 46, 14, 7, 6, 45, 7, 28, 14, 21, 9, 19, 7, 8, 6, 21, 12, 11, 39, 28, 8, 14, 5, 10, 6, 8, 35, 40, 59, 2, 24, 2, 11, 8, 10, 5, 2, 7, 12, 4, 9, 21, 38, 0, 6]

test('REAL faces byte-exact - the median the centre law prices', () => {
  // the single-gap storm: the centre IS the gap IS the mean IS the span
  assert.equal(rejoinStormMedianBreathCensus(REAL_F509).rejoinStormMedianBreathSeconds, 28)
  // the kidnapping face: centre 2 while the mean rides the 133 giant to 25
  assert.equal(rejoinStormMedianBreathCensus(REAL_F531).rejoinStormMedianBreathSeconds, 2)
  // the ceiling face: centre 59 above the mean 53
  assert.equal(rejoinStormMedianBreathCensus(REAL_F530).rejoinStormMedianBreathSeconds, 59)
  // the above face: (28+29)/2 the floor keeps 28 above the mean 27
  assert.equal(rejoinStormMedianBreathCensus(REAL_F521).rejoinStormMedianBreathSeconds, 28)
  // the F17 six-flap face: (8+14)/2 the floor keeps 11 below the mean 15
  assert.equal(rejoinStormMedianBreathCensus(REAL_F524).rejoinStormMedianBreathSeconds, 11)
  // the ALL-ZERO face: the same-second pair the zero gap rides
  assert.equal(rejoinStormMedianBreathCensus(REAL_F545).rejoinStormMedianBreathSeconds, 0)
  // the non-array the honest null keeps
  assert.equal(rejoinStormMedianBreathCensus(null), null)
  assert.equal(rejoinStormMedianBreathCensus('no'), null)
  assert.equal(rejoinStormMedianBreathCensus(42), null)
})

test('REAL 45-face arc byte-exact - 23 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 46)
  assert.equal(classes.size, 23)
  assert.equal(Math.min(...arc), 0) // the ALL-ZERO face the floor keeps
  assert.equal(Math.max(...arc), 59) // the ceiling face F530 keeps
  // the 2 the triple keeps (three faces the busy centre rides)
  assert.equal(arc.filter(v => v === 2).length, 3)
  // the 7 the QUINT keeps (five faces - idx0 idx4 idx7 idx13 idx38
  // the honest re-count the first pin's four the arithmetic taught)
  assert.equal(arc.filter(v => v === 7).length, 5)
  // no held pair the REAL arc keeps (the honest naming law)
  for (let i = 1; i < arc.length; i++) assert.notEqual(arc[i], arc[i - 1])
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
  // a deformed-only face prices the constructive zero (no re-join
  // events the tally keeps)
  const empty = { rejoinStormMedianBreathSeconds: 0 }
  assert.deepEqual(rejoinStormMedianBreathCensus(['x', 'y']), empty)
})

test('fence - every branch the integer law keeps', () => {
  const ok = (n) => ({ rejoinStormMedianBreathSeconds: n })
  // the all-integer in-range triple the true keeps
  assert.equal(rejoinStormMedianBreathConsistent({ back: ok(0), prev: ok(59), cur: ok(86399) }), true)
  // the non-integer the false keeps
  assert.equal(rejoinStormMedianBreathConsistent({ back: ok(0.5), prev: ok(0), cur: ok(0) }), false)
  // the negative the false keeps
  assert.equal(rejoinStormMedianBreathConsistent({ back: ok(-1), prev: ok(0), cur: ok(0) }), false)
  // the day-overflow the false keeps
  assert.equal(rejoinStormMedianBreathConsistent({ back: ok(86400), prev: ok(0), cur: ok(0) }), false)
  // the string skin the false keeps
  assert.equal(rejoinStormMedianBreathConsistent({ back: ok('104'), prev: ok(0), cur: ok(0) }), false)
  // the missing field the false keeps
  assert.equal(rejoinStormMedianBreathConsistent({ back: ok(0), prev: ok(0) }), false)
  // the null and the bare the false keeps
  assert.equal(rejoinStormMedianBreathConsistent(null), false)
  assert.equal(rejoinStormMedianBreathConsistent(0), false)
  assert.equal(rejoinStormMedianBreathConsistent({}), false)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const e = (b, p, c) => ({ back: { rejoinStormMedianBreathSeconds: b }, prev: { rejoinStormMedianBreathSeconds: p }, cur: { rejoinStormMedianBreathSeconds: c } })
  // the REAL swell (F501 -> F502 -> F503): 7 -> 21 (+14) -> 46 (+25)
  const swell = rejoinStormMedianBreathTrendRow(e(7, 21, 46))
  assert.match(swell, /median breath swell ran two steps deep - 7 -> 21 \(\+14\) -> 46 \(\+25\)/)
  assert.match(swell, /stretched each face/)
  // the REAL fade (F520 -> F521 -> F522): 39 -> 28 (-11) -> 8 (-20)
  const fade = rejoinStormMedianBreathTrendRow(e(39, 28, 8))
  assert.match(fade, /median breath fade ran two steps deep - 39 -> 28 \(-11\) -> 8 \(-20\)/)
  assert.match(fade, /shortened each face/)
  // the REAL swing (F530 -> F531 -> F532): 59 -> 2 (-57) -> 24 (+22)
  const swing = rejoinStormMedianBreathTrendRow(e(59, 2, 24))
  assert.match(swing, /median breath swing - 59 -> 2 \(-57\) -> 24 \(\+22\)/)
  assert.match(swing, /traded their centre breath/)
  // the held step the honest silence keeps (the synthetic shape the
  // REAL arc's own NO-HELD-PAIR law the naming keeps)
  assert.equal(rejoinStormMedianBreathTrendRow(e(5, 5, 9)), null)
  assert.equal(rejoinStormMedianBreathTrendRow(e(5, 9, 9)), null)
  // the tail the sibling seats name (the co-existence by seat law)
  const row = rejoinStormMedianBreathTrendRow(e(7, 21, 46))
  for (const seat of ['.346 re-join bin', '.347 re-join bots', '.348 re-join peak', '.349 re-join peak name', '.350 re-join span', '.351 champion stretch', '.352 re-join gap', '.353 champion gap', '.354 mean breath', '.355 champion mean breath']) {
    assert.match(row, new RegExp(seat.replace(/\./g, '\\.') + ' word prices'))
  }
  // the fence breach the honest silence keeps
  assert.equal(rejoinStormMedianBreathTrendRow(null), null)
  assert.equal(rejoinStormMedianBreathTrendRow({ back: { rejoinStormMedianBreathSeconds: 0.5 }, prev: { rejoinStormMedianBreathSeconds: 1 }, cur: { rejoinStormMedianBreathSeconds: 2 } }), null)
})
