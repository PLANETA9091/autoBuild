import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormBreathRangeCensus, rejoinStormBreathRangeConsistent, rejoinStormBreathRangeTrendRow } from '../../src/lib/rejoinstormbreathrange.mjs'

// the REAL faces the 51-face archive holds (/home/z/faces331 - the
// cadence list's own SPREAD the tallest-minus-shortest difference
// prices: FORTY-ONE distinct classes the storm breath range voices).
// The fixtures ride the archive's own join columns byte-faithful (the
// .358 test's own columns the family re-rides, the F549 ceiling face
// the .359 harvest rides, the fixtures named by the CURRENT archive's
// own positional law the drift lesson keeps).

// F509's own full join column - the SINGLE-GAP ZERO face (F16's two
// re-join events the one 28-second gap IS the whole storm - the
// tallest IS the shortest the range ZERO prices)
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
// F529's own full join column - the SECOND SINGLE-GAP ZERO face (F11's
// and F16's co-reign the one 40-second gap IS the whole storm - the
// range ZERO the ceiling-equality face keeps)
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
// F545's own full join column - the ALL-ZERO face (F18's and F2's
// co-reign the TWO re-join events the SAME SECOND 09:27:57 keeps - the
// one gap zero the range IS the min IS the median IS the mean IS the
// max IS zero the SIX-zero face)
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
// F521's own full join column - the BUSY TWELVE-GAP face (the re-join
// events the 56 29 5 35 27 26 34 5 28 46 6 38 gaps keep - the min 5
// the max 56 the range 51 the dialog's own ABOVE face prices while
// the median rides 28)
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
// F530's own full join column - the ANTI-CHAIN face's own UNDER dialog
// (FOUR re-join events the 34 59 67 gaps keep - the min 34 the max 67
// the range 33 while the median rides 59 ABOVE - the .358 word's own
// above-side face the range's own UNDER side the same face prices)
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
// F549's own full join column - the CEILING face (the NINE-reign
// storm's own eight gaps the 310 giant and the two zeros keep - the
// min 0 the max 310 the range EQUALS the max the ceiling law prices,
// the .358 word's own storm-min zero the same face rides)
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
// the REAL FIFTY-ONE-face arc F501-F551 (the run id ascending the
// harvest order keeps) - FORTY-ONE distinct classes no face
// born-constant: the 0 the three-face gravity keeps, the 310 the
// ceiling face F549 keeps, MANY values speak
const REAL_ARC = [137, 86, 113, 63, 107, 147, 127, 64, 0, 140, 81, 127, 96, 41, 57, 170, 67, 143, 77, 27, 51, 56, 33, 38, 115, 41, 110, 76, 0, 33, 133, 81, 117, 34, 60, 60, 93, 105, 94, 152, 89, 129, 102, 188, 0, 67, 27, 106, 310, 94, 65]

test('REAL faces byte-exact - the range the spread law prices', () => {
  // the single-gap storms: the tallest IS the shortest the range zero
  assert.equal(rejoinStormBreathRangeCensus(REAL_F509).rejoinStormBreathRangeSeconds, 0)
  assert.equal(rejoinStormBreathRangeCensus(REAL_F529).rejoinStormBreathRangeSeconds, 0)
  // the ALL-ZERO face: the same-second pair the zero keeps
  assert.equal(rejoinStormBreathRangeCensus(REAL_F545).rejoinStormBreathRangeSeconds, 0)
  // the busy twelve-gap face: min 5 max 56 the range 51
  assert.equal(rejoinStormBreathRangeCensus(REAL_F521).rejoinStormBreathRangeSeconds, 51)
  // the anti-chain face's UNDER dialog: range 33 while the median rides 59
  assert.equal(rejoinStormBreathRangeCensus(REAL_F530).rejoinStormBreathRangeSeconds, 33)
  // the ceiling face: the 310 giant the min-zero pairs the range = the max
  assert.equal(rejoinStormBreathRangeCensus(REAL_F549).rejoinStormBreathRangeSeconds, 310)
  // the non-array the honest null keeps
  assert.equal(rejoinStormBreathRangeCensus(null), null)
  assert.equal(rejoinStormBreathRangeCensus('no'), null)
  assert.equal(rejoinStormBreathRangeCensus(42), null)
})

test('REAL 51-face arc byte-exact - 41 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 51)
  assert.equal(classes.size, 41)
  assert.equal(Math.min(...arc), 0) // the three-face gravity the floor keeps
  assert.equal(Math.max(...arc), 310) // the ceiling face F549 keeps
  // the 0 the THREE-face gravity keeps (the single-gap storms the
  // equality trio rides - F509 F529 F545)
  assert.equal(arc.filter(v => v === 0).length, 3)
  // the held pair the F535/F536 sixties keep (the .359 arc's own held
  // TRIPLE the range arc does NOT inherit - the honest naming prices)
  assert.equal(arc[34], 60)
  assert.equal(arc[35], arc[34])
  // the singles dominate the arc (THIRTY-TWO values one face each the
  // spread's own width voices - the 0 the three-face class and the
  // EIGHT pairs the 27 33 41 60 67 81 94 127 keep, the FORTY-ONE
  // classes the 41 - 9 multi-count = 32 singletons prices)
  const counts = {}
  for (const v of arc) counts[v] = (counts[v] || 0) + 1
  assert.equal(Object.values(counts).filter(c => c === 1).length, 32)
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
  const good = '[11:59:58] [Server thread/INFO]: F14 joined the game'
  const battery = [
    '[11:59:58] Server thread/INFO: F14 joined the game', // no bracket frame
    '[11:59:58] [Server thread/INFO]: F14 joined the game ', // trailing space
    '[11:59:58] [Server thread/INFO]: F14 joined the game\t', // trailing tab skin
    '[1:59:58] [Server thread/INFO]: F14 joined the game', // one-digit hour
    '[11:59:60] [Server thread/INFO]: F14 joined the game', // seconds overflow
    '[11:59:58] [Server thread/INFO]:  joined the game', // no name
    '[11:59:58] [Server thread/INFO]: F14 joined the games', // plural tail
    '[11:59:58] [Server thread/INFO]: f14 Joined the game', // case skin
    '11:59:58 [Server thread/INFO]: F14 joined the game', // no head bracket
    '[11-59-58] [Server thread/INFO]: F14 joined the game', // dash clock
    '[24:00:00] [Server thread/INFO]: F14 joined the game' // hour overflow
  ]
  for (const bad of battery) assert.equal(RE.test(bad), false, JSON.stringify(bad))
  assert.equal(RE.test(good), true)
  // a deformed-only face prices the constructive zero (no re-join
  // events the tally keeps - the lawful convention the REAL archive
  // never rode the synthetic pin keeps)
  const empty = { rejoinStormBreathRangeSeconds: 0 }
  assert.deepEqual(rejoinStormBreathRangeCensus(['x', 'y']), empty)
})

test('fence - every branch the integer law keeps', () => {
  const ok = (n) => ({ rejoinStormBreathRangeSeconds: n })
  // the all-integer in-range triple the true keeps
  assert.equal(rejoinStormBreathRangeConsistent({ back: ok(0), prev: ok(310), cur: ok(86399) }), true)
  // the non-integer the false keeps
  assert.equal(rejoinStormBreathRangeConsistent({ back: ok(0.5), prev: ok(0), cur: ok(0) }), false)
  // the negative the false keeps
  assert.equal(rejoinStormBreathRangeConsistent({ back: ok(-1), prev: ok(0), cur: ok(0) }), false)
  // the day-overflow the false keeps
  assert.equal(rejoinStormBreathRangeConsistent({ back: ok(86400), prev: ok(0), cur: ok(0) }), false)
  // the string skin the false keeps
  assert.equal(rejoinStormBreathRangeConsistent({ back: ok('310'), prev: ok(0), cur: ok(0) }), false)
  // the missing field the false keeps
  assert.equal(rejoinStormBreathRangeConsistent({ back: ok(0), prev: ok(0) }), false)
  // the null and the bare the false keeps
  assert.equal(rejoinStormBreathRangeConsistent(null), false)
  assert.equal(rejoinStormBreathRangeConsistent(0), false)
  assert.equal(rejoinStormBreathRangeConsistent({}), false)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const e = (b, p, c) => ({ back: { rejoinStormBreathRangeSeconds: b }, prev: { rejoinStormBreathRangeSeconds: p }, cur: { rejoinStormBreathRangeSeconds: c } })
  // the REAL swell (F547 -> F549 the ceiling rides): 27 -> 106 (+79) -> 310 (+204)
  const swell = rejoinStormBreathRangeTrendRow(e(27, 106, 310))
  assert.match(swell, /storm breath range swell ran two steps deep - 27 -> 106 \(\+79\) -> 310 \(\+204\)/)
  assert.match(swell, /stretched each face/)
  // the REAL fade (F549 -> F551 the fresh faces): 310 -> 94 (-216) -> 65 (-29)
  const fade = rejoinStormBreathRangeTrendRow(e(310, 94, 65))
  assert.match(fade, /storm breath range fade ran two steps deep - 310 -> 94 \(-216\) -> 65 \(-29\)/)
  assert.match(fade, /narrowed each face/)
  // the REAL swing (F503 -> F505): 113 -> 63 (-50) -> 107 (+44)
  const swing = rejoinStormBreathRangeTrendRow(e(113, 63, 107))
  assert.match(swing, /storm breath range swing - 113 -> 63 \(-50\) -> 107 \(\+44\)/)
  assert.match(swing, /traded their breath width/)
  // the REAL held window the archive's own held pair keeps (F535 ->
  // F537: 60 -> 60 -> 93 the held first step - the honest silence)
  assert.equal(rejoinStormBreathRangeTrendRow(e(60, 60, 93)), null)
  // the tail the sibling seats name (the co-existence by seat law -
  // the .358 and .359 words the fresh tail keeps)
  const row = rejoinStormBreathRangeTrendRow(e(27, 106, 310))
  for (const seat of ['.346 re-join bin', '.347 re-join bots', '.348 re-join peak', '.349 re-join peak name', '.350 re-join span', '.351 champion stretch', '.352 re-join gap', '.353 champion gap', '.354 mean breath', '.355 champion mean breath', '.356 storm median breath', '.357 champion median breath', '.358 storm min breath', '.359 champion min breath']) {
    assert.match(row, new RegExp(seat.replace(/\./g, '\\.') + ' word prices'))
  }
  // the fence breach the honest silence keeps
  assert.equal(rejoinStormBreathRangeTrendRow(null), null)
  assert.equal(rejoinStormBreathRangeTrendRow({ back: { rejoinStormBreathRangeSeconds: 0.5 }, prev: { rejoinStormBreathRangeSeconds: 1 }, cur: { rejoinStormBreathRangeSeconds: 2 } }), null)
})
