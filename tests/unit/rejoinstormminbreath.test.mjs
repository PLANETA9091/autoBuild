import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormMinBreathCensus, rejoinStormMinBreathConsistent, rejoinStormMinBreathTrendRow } from '../../src/lib/rejoinstormminbreath.mjs'

// the REAL faces the 48-face archive holds (/home/z/faces331 - the
// cadence list's own FLOOR the shortest adjacent gap prices:
// FOURTEEN distinct classes the storm min breath voices). The
// fixtures ride the archive's own join columns byte-faithful (the
// .356 test's own columns the family keeps, the F529 ceiling
// equality face the fire-1743-era harvest rides, the fixtures named
// by the CURRENT archive's own positional law the drift lesson
// keeps).

// F509's own full join column - the two-flapper's face (F16's two
// re-join events the single gap IS the whole list - the min EQUALS
// the 28 the FIVE-way equality face keeps: min IS median IS mean IS
// gap IS span the ladder collapses to a point)
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
// F529's own full join column - the CEILING EQUALITY face (F11's and
// F16's two re-join events the single 40-second gap IS the whole
// storm - the min EQUALS the 40 the arc's own ceiling the equality
// rides: the whole storm one forty-second silence, the min's own
// ceiling AND its own equality face in one)
const REAL_F529 = [
  '[20:02:14] [Server thread/INFO]: YardSurvey joined the game',
  '[20:02:28] [Server thread/INFO]: F1 joined the game',
  '[20:02:30] [Server thread/INFO]: F2 joined the game',
  '[20:02:33] [Server thread/INFO]: F3 joined the game',
  '[20:02:35] [Server thread/INFO]: F4 joined the game',
  '[20:02:38] [Server thread/INFO]: F5 joined the game',
  '[20:02:40] [Server thread/INFO]: F6 joined the game',
  '[20:02:43] [Server thread/INFO]: F7 joined the game',
  '[20:02:45] [Server thread/INFO]: F8 joined the game',
  '[20:02:48] [Server thread/INFO]: F9 joined the game',
  '[20:02:50] [Server thread/INFO]: F10 joined the game',
  '[20:02:53] [Server thread/INFO]: F11 joined the game',
  '[20:02:55] [Server thread/INFO]: F12 joined the game',
  '[20:02:58] [Server thread/INFO]: F13 joined the game',
  '[20:03:01] [Server thread/INFO]: F14 joined the game',
  '[20:03:04] [Server thread/INFO]: F15 joined the game',
  '[20:03:07] [Server thread/INFO]: F16 joined the game',
  '[20:03:10] [Server thread/INFO]: F17 joined the game',
  '[20:03:11] [Server thread/INFO]: F18 joined the game',
  '[20:03:15] [Server thread/INFO]: F19 joined the game',
  '[20:11:46] [Server thread/INFO]: F11 joined the game',
  '[20:12:26] [Server thread/INFO]: F16 joined the game'
]
// F530's own full join column - the ANTI-CHAIN face (FOUR re-join
// events the 34 59 67 the list keeps - the min 34, the mean 53, the
// centre 59 ABOVE the mean - the naive chain min <= median <= mean
// the face BREAKS, the floor law bounds each sibling DIRECTLY the
// per-sibling arithmetic keeps)
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
// F521's own full join column - the busy tail's dialog face
// (THIRTEEN re-join events the min 5 the floor prices while the mean
// rides 335/12 to 27 and the centre (28+29)/2 to 28 - the min under
// BOTH the dialog's own gravity the floor keeps)
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
// F545's own full join column - the ALL-ZERO face (TWO re-join
// events the SAME SECOND 09:27:57 keeps - F18 and F2 the one gap
// zero rides - the min IS the median IS the mean IS the gap IS the
// span IS zero the FIVE-zero face the VOICED ZERO law keeps - one
// of the FIFTEEN faces the zero gravity prices)
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
// the REAL FORTY-EIGHT-face arc F501-F548 (the run id ascending the
// harvest order keeps) - FOURTEEN distinct classes no face
// born-constant: the 0 the fifteen-face gravity keeps, the 40 the
// ceiling face F529 keeps, MANY values speak
const REAL_ARC = [0, 2, 6, 4, 0, 1, 7, 0, 28, 4, 5, 0, 3, 1, 5, 0, 3, 1, 5, 29, 5, 0, 3, 0, 2, 1, 0, 19, 40, 34, 0, 6, 0, 7, 1, 1, 0, 0, 1, 2, 0, 1, 2, 4, 0, 1, 10, 0]

test('REAL faces byte-exact - the min the floor law prices', () => {
  // the single-gap storm: the ladder collapses to a point (the
  // FIVE-way equality 28=28=28=28=28)
  assert.equal(rejoinStormMinBreathCensus(REAL_F509).rejoinStormMinBreathSeconds, 28)
  // the ceiling equality face: the whole storm one 40-second silence
  assert.equal(rejoinStormMinBreathCensus(REAL_F529).rejoinStormMinBreathSeconds, 40)
  // the anti-chain face: min 34 while the centre 59 rides ABOVE the mean 53
  assert.equal(rejoinStormMinBreathCensus(REAL_F530).rejoinStormMinBreathSeconds, 34)
  // the busy tail face: the min 5 under BOTH the mean 27 and the centre 28
  assert.equal(rejoinStormMinBreathCensus(REAL_F521).rejoinStormMinBreathSeconds, 5)
  // the ALL-ZERO face: the same-second pair the zero gap rides
  assert.equal(rejoinStormMinBreathCensus(REAL_F545).rejoinStormMinBreathSeconds, 0)
  // the non-array the honest null keeps
  assert.equal(rejoinStormMinBreathCensus(null), null)
  assert.equal(rejoinStormMinBreathCensus('no'), null)
  assert.equal(rejoinStormMinBreathCensus(42), null)
})

test('REAL 48-face arc byte-exact - 14 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 48)
  assert.equal(classes.size, 14)
  assert.equal(Math.min(...arc), 0) // the fifteen-face gravity the floor keeps
  assert.equal(Math.max(...arc), 40) // the ceiling face F529 keeps
  // the 0 the FIFTEEN-face gravity keeps (the voiced-zero faces the
  // same-second pairs voice - the min's own signature)
  assert.equal(arc.filter(v => v === 0).length, 15)
  // the 1 the nine-face class keeps
  assert.equal(arc.filter(v => v === 1).length, 9)
  // the 2 and the 5 the quads keep
  assert.equal(arc.filter(v => v === 2).length, 4)
  assert.equal(arc.filter(v => v === 5).length, 4)
  // the TWO held pairs the REAL arc keeps (F535/F536 the 1=1,
  // F537/F538 the 0=0 - the .356 arc's own NO-HELD-PAIR the min arc
  // does NOT inherit, the honest naming the difference prices)
  assert.equal(arc[35], arc[34])
  assert.equal(arc[37], arc[36])
  assert.equal(arc[34], 1)
  assert.equal(arc[36], 0)
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
  // events the tally keeps - the lawful convention the REAL archive
  // never rode the synthetic pin keeps)
  const empty = { rejoinStormMinBreathSeconds: 0 }
  assert.deepEqual(rejoinStormMinBreathCensus(['x', 'y']), empty)
})

test('fence - every branch the integer law keeps', () => {
  const ok = (n) => ({ rejoinStormMinBreathSeconds: n })
  // the all-integer in-range triple the true keeps
  assert.equal(rejoinStormMinBreathConsistent({ back: ok(0), prev: ok(40), cur: ok(86399) }), true)
  // the non-integer the false keeps
  assert.equal(rejoinStormMinBreathConsistent({ back: ok(0.5), prev: ok(0), cur: ok(0) }), false)
  // the negative the false keeps
  assert.equal(rejoinStormMinBreathConsistent({ back: ok(-1), prev: ok(0), cur: ok(0) }), false)
  // the day-overflow the false keeps
  assert.equal(rejoinStormMinBreathConsistent({ back: ok(86400), prev: ok(0), cur: ok(0) }), false)
  // the string skin the false keeps
  assert.equal(rejoinStormMinBreathConsistent({ back: ok('40'), prev: ok(0), cur: ok(0) }), false)
  // the missing field the false keeps
  assert.equal(rejoinStormMinBreathConsistent({ back: ok(0), prev: ok(0) }), false)
  // the null and the bare the false keeps
  assert.equal(rejoinStormMinBreathConsistent(null), false)
  assert.equal(rejoinStormMinBreathConsistent(0), false)
  assert.equal(rejoinStormMinBreathConsistent({}), false)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const e = (b, p, c) => ({ back: { rejoinStormMinBreathSeconds: b }, prev: { rejoinStormMinBreathSeconds: p }, cur: { rejoinStormMinBreathSeconds: c } })
  // the REAL swell (F501 -> F502 -> F503): 0 -> 2 (+2) -> 6 (+4)
  const swell = rejoinStormMinBreathTrendRow(e(0, 2, 6))
  assert.match(swell, /min breath swell ran two steps deep - 0 -> 2 \(\+2\) -> 6 \(\+4\)/)
  assert.match(swell, /stretched each face/)
  // the REAL fade (F520 -> F521 -> F522): 29 -> 5 (-24) -> 0 (-5)
  const fade = rejoinStormMinBreathTrendRow(e(29, 5, 0))
  assert.match(fade, /min breath fade ran two steps deep - 29 -> 5 \(-24\) -> 0 \(-5\)/)
  assert.match(fade, /shortened each face/)
  // the REAL swing (F530 -> F531 -> F532): 34 -> 0 (-34) -> 6 (+6)
  const swing = rejoinStormMinBreathTrendRow(e(34, 0, 6))
  assert.match(swing, /min breath swing - 34 -> 0 \(-34\) -> 6 \(\+6\)/)
  assert.match(swing, /traded their floor breath/)
  // the REAL held windows the archive's own TWO held pairs keep
  // (F535 -> F537: 1 -> 1 -> 0 the held first step, F537 -> F539:
  // 0 -> 0 -> 1 the held first step - the honest silence both keep)
  assert.equal(rejoinStormMinBreathTrendRow(e(1, 1, 0)), null)
  assert.equal(rejoinStormMinBreathTrendRow(e(0, 0, 1)), null)
  // the tail the sibling seats name (the co-existence by seat law -
  // the .356 and .357 median words the fresh tail keeps)
  const row = rejoinStormMinBreathTrendRow(e(0, 2, 6))
  for (const seat of ['.346 re-join bin', '.347 re-join bots', '.348 re-join peak', '.349 re-join peak name', '.350 re-join span', '.351 champion stretch', '.352 re-join gap', '.353 champion gap', '.354 mean breath', '.355 champion mean breath', '.356 storm median breath', '.357 champion median breath']) {
    assert.match(row, new RegExp(seat.replace(/\./g, '\\.') + ' word prices'))
  }
  // the fence breach the honest silence keeps
  assert.equal(rejoinStormMinBreathTrendRow(null), null)
  assert.equal(rejoinStormMinBreathTrendRow({ back: { rejoinStormMinBreathSeconds: 0.5 }, prev: { rejoinStormMinBreathSeconds: 1 }, cur: { rejoinStormMinBreathSeconds: 2 } }), null)
})
