import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormBreathCountCensus, rejoinStormBreathCountConsistent, rejoinStormBreathCountTrendRow } from '../../src/lib/rejoinstormbreathcount.mjs'

// the REAL faces the 53-face family window holds (/home/z/faces331 -
// the re-join event sequence's own SIZE the adjacent pairs count
// prices: TWENTY-SIX distinct classes the storm breath count voices).
// The fixtures ride the archive's own join columns byte-faithful (the
// .361 test's own columns the family re-rides, the F524 ceiling face
// the .362 harvest rides, the fixtures named by the CURRENT archive's
// own positional law the drift lesson keeps).

// F509's own full join column - the FLOOR face (22 echoes
// 20 names the single re-join event the ONE gap keeps - the count
// = mass - breadth - 1 = 22 - 20 - 1 = 1 the floor trio's own face)
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

// F519's own full join column - the HELD PAIR's own face (26 echoes
// 20 names the SIX re-join events the FIVE gaps keep - the F519/F520
// fives the arc's own held pair one side prices)
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

// F524's own full join column - the CEILING face (70 echoes 20
// names the FIFTY re-join events the FORTY-NINE gaps keep - the
// count = mass - breadth - 1 = 70 - 20 - 1 = 49 the busiest storm)
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

// F542's own full join column - the LEVEL face (41 echoes 20
// names the 21 re-join events the 20 gaps keep - the count IS the
// breadth 20 = 20 the rarest order the dialog prices)
const REAL_F542 = [
  '[07:13:54] [Server thread/INFO]: YardSurvey joined the game',
  '[07:14:08] [Server thread/INFO]: F1 joined the game',
  '[07:14:10] [Server thread/INFO]: F2 joined the game',
  '[07:14:13] [Server thread/INFO]: F3 joined the game',
  '[07:14:15] [Server thread/INFO]: F4 joined the game',
  '[07:14:18] [Server thread/INFO]: F5 joined the game',
  '[07:14:20] [Server thread/INFO]: F6 joined the game',
  '[07:14:23] [Server thread/INFO]: F7 joined the game',
  '[07:14:25] [Server thread/INFO]: F8 joined the game',
  '[07:14:28] [Server thread/INFO]: F9 joined the game',
  '[07:14:31] [Server thread/INFO]: F10 joined the game',
  '[07:14:34] [Server thread/INFO]: F11 joined the game',
  '[07:14:36] [Server thread/INFO]: F12 joined the game',
  '[07:14:39] [Server thread/INFO]: F13 joined the game',
  '[07:14:41] [Server thread/INFO]: F14 joined the game',
  '[07:14:44] [Server thread/INFO]: F15 joined the game',
  '[07:14:47] [Server thread/INFO]: F16 joined the game',
  '[07:14:50] [Server thread/INFO]: F17 joined the game',
  '[07:14:53] [Server thread/INFO]: F18 joined the game',
  '[07:14:55] [Server thread/INFO]: F19 joined the game',
  '[07:18:14] [Server thread/INFO]: F9 joined the game',
  '[07:20:24] [Server thread/INFO]: F9 joined the game',
  '[07:20:32] [Server thread/INFO]: F9 joined the game',
  '[07:20:45] [Server thread/INFO]: F16 joined the game',
  '[07:20:56] [Server thread/INFO]: F9 joined the game',
  '[07:21:04] [Server thread/INFO]: F9 joined the game',
  '[07:21:08] [Server thread/INFO]: F4 joined the game',
  '[07:21:16] [Server thread/INFO]: F9 joined the game',
  '[07:21:26] [Server thread/INFO]: F9 joined the game',
  '[07:21:34] [Server thread/INFO]: F11 joined the game',
  '[07:21:46] [Server thread/INFO]: F9 joined the game',
  '[07:21:55] [Server thread/INFO]: F9 joined the game',
  '[07:22:11] [Server thread/INFO]: F16 joined the game',
  '[07:22:17] [Server thread/INFO]: F8 joined the game',
  '[07:22:18] [Server thread/INFO]: F16 joined the game',
  '[07:22:36] [Server thread/INFO]: F12 joined the game',
  '[07:22:40] [Server thread/INFO]: F16 joined the game',
  '[07:23:17] [Server thread/INFO]: F8 joined the game',
  '[07:23:20] [Server thread/INFO]: F13 joined the game',
  '[07:23:46] [Server thread/INFO]: F16 joined the game',
  '[07:24:05] [Server thread/INFO]: F3 joined the game'
]

// F554's own full join column - the FRESH face (39 echoes 20
// names the 19 re-join events the 18 gaps keep - the window's own
// tail the newest harvest prices)
const REAL_F554 = [
  '[15:17:34] [Server thread/INFO]: YardSurvey joined the game',
  '[15:17:48] [Server thread/INFO]: F1 joined the game',
  '[15:17:50] [Server thread/INFO]: F2 joined the game',
  '[15:17:53] [Server thread/INFO]: F3 joined the game',
  '[15:17:55] [Server thread/INFO]: F4 joined the game',
  '[15:17:58] [Server thread/INFO]: F5 joined the game',
  '[15:18:01] [Server thread/INFO]: F6 joined the game',
  '[15:18:04] [Server thread/INFO]: F7 joined the game',
  '[15:18:06] [Server thread/INFO]: F8 joined the game',
  '[15:18:09] [Server thread/INFO]: F9 joined the game',
  '[15:18:12] [Server thread/INFO]: F10 joined the game',
  '[15:18:15] [Server thread/INFO]: F11 joined the game',
  '[15:18:18] [Server thread/INFO]: F12 joined the game',
  '[15:18:21] [Server thread/INFO]: F13 joined the game',
  '[15:18:24] [Server thread/INFO]: F14 joined the game',
  '[15:18:27] [Server thread/INFO]: F15 joined the game',
  '[15:18:29] [Server thread/INFO]: F16 joined the game',
  '[15:18:33] [Server thread/INFO]: F17 joined the game',
  '[15:18:35] [Server thread/INFO]: F18 joined the game',
  '[15:18:38] [Server thread/INFO]: F19 joined the game',
  '[15:23:09] [Server thread/INFO]: F19 joined the game',
  '[15:24:44] [Server thread/INFO]: F19 joined the game',
  '[15:25:19] [Server thread/INFO]: F14 joined the game',
  '[15:25:26] [Server thread/INFO]: F13 joined the game',
  '[15:25:31] [Server thread/INFO]: F3 joined the game',
  '[15:25:34] [Server thread/INFO]: F11 joined the game',
  '[15:25:38] [Server thread/INFO]: F13 joined the game',
  '[15:25:46] [Server thread/INFO]: F13 joined the game',
  '[15:25:54] [Server thread/INFO]: F13 joined the game',
  '[15:26:04] [Server thread/INFO]: F13 joined the game',
  '[15:26:16] [Server thread/INFO]: F13 joined the game',
  '[15:26:24] [Server thread/INFO]: F13 joined the game',
  '[15:26:34] [Server thread/INFO]: F13 joined the game',
  '[15:26:45] [Server thread/INFO]: F13 joined the game',
  '[15:26:47] [Server thread/INFO]: F1 joined the game',
  '[15:26:55] [Server thread/INFO]: F13 joined the game',
  '[15:26:58] [Server thread/INFO]: F3 joined the game',
  '[15:27:05] [Server thread/INFO]: F13 joined the game',
  '[15:27:15] [Server thread/INFO]: F16 joined the game'
]

// the REAL FIFTY-THREE-face window arc F501-F554 (the inventory's own
// order the harvest order keeps, the F552 zombie's own number the face
// never rode) - TWENTY-SIX distinct classes no face born-constant: the
// 5 the six-face gravity keeps, the 49 the ceiling face F524 keeps,
// MANY values speak
const REAL_ARC = [18,9,4,9,19,16,5,18,1,5,11,17,3,26,6,12,11,8,5,5,12,26,7,49,15,11,7,4,1,3,7,7,14,8,5,15,32,11,21,13,28,20,13,6,1,27,2,17,8,30,3,5,18]

test('REAL faces byte-exact - the count the size law prices', () => {
  // the floor face: the single re-join event the ONE gap
  assert.equal(rejoinStormBreathCountCensus(REAL_F509).rejoinStormBreathCount, 1)
  // the held pair's own face: the six re-join events the FIVE gaps
  assert.equal(rejoinStormBreathCountCensus(REAL_F519).rejoinStormBreathCount, 5)
  // the ceiling face: the fifty re-join events the FORTY-NINE gaps
  assert.equal(rejoinStormBreathCountCensus(REAL_F524).rejoinStormBreathCount, 49)
  // the LEVEL face: the count IS the breadth 20 = 20
  assert.equal(rejoinStormBreathCountCensus(REAL_F542).rejoinStormBreathCount, 20)
  // the fresh face: the window's own tail 18
  assert.equal(rejoinStormBreathCountCensus(REAL_F554).rejoinStormBreathCount, 18)
  // the non-array the honest null keeps
  assert.equal(rejoinStormBreathCountCensus(null), null)
  assert.equal(rejoinStormBreathCountCensus('no'), null)
  assert.equal(rejoinStormBreathCountCensus(42), null)
})

test('the IDENTITY law - count = mass - breadth - 1 the origin closes', () => {
  // the .346/.347 words' own arithmetic the census re-voices byte-exact
  // (the REAL archive F356-F554 audit GREEN every face the probe keeps)
  const tally = (lines) => {
    const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
    const t = new Map()
    for (const l of lines) { const m = RE.exec(l); if (m) t.set(m[4], (t.get(m[4]) || 0) + 1) }
    return { mass: [...t.values()].reduce((a, n) => a + n, 0), breadth: t.size }
  }
  for (const col of [REAL_F509, REAL_F519, REAL_F524, REAL_F542, REAL_F554]) {
    const { mass, breadth } = tally(col)
    const count = rejoinStormBreathCountCensus(col).rejoinStormBreathCount
    assert.equal(count, Math.max(0, mass - breadth - 1))
  }
  // the ceiling face's own arithmetic re-voiced (70 - 20 - 1 = 49)
  assert.equal(rejoinStormBreathCountCensus(REAL_F524).rejoinStormBreathCount, 70 - 20 - 1)
  // the bound law: count <= mass - 2 every fixture (breadth >= 1)
  for (const col of [REAL_F509, REAL_F519, REAL_F524, REAL_F542, REAL_F554]) {
    const { mass } = tally(col)
    assert.ok(rejoinStormBreathCountCensus(col).rejoinStormBreathCount <= mass - 2)
  }
  // the constructive zero: the one-echo storm the older archive's own
  // zero family keeps (F357's and F381's and F459's and F468's and
  // F474's own one-echo faces the zero rode - the window never rode it
  // the synthetic pin keeps)
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinStormBreathCountCensus(oneEcho), { rejoinStormBreathCount: 0 })
})

test('REAL 53-face window arc byte-exact - 26 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 53)
  assert.equal(classes.size, 26)
  assert.equal(Math.min(...arc), 1) // the floor trio F509 F529 F545 keeps
  assert.equal(Math.max(...arc), 49) // the ceiling face F524 keeps
  // the floor the THREE-face gravity keeps (the single-gap rides
  // F509 F529 F545 - indices 8 28 44)
  assert.equal(arc[8], 1)
  assert.equal(arc[28], 1)
  assert.equal(arc[44], 1)
  // the TWO held pairs the F519/F520 fives and the F531/F532 sevens
  // keep (the .361 champ range arc's own FOUR held pairs the count
  // arc does NOT inherit - the honest naming prices)
  assert.equal(arc[18], 5)
  assert.equal(arc[19], arc[18])
  assert.equal(arc[30], 7)
  assert.equal(arc[31], arc[30])
  // the LEVEL face F542 the count IS the breadth keeps (index 41)
  assert.equal(arc[41], 20)
  // the ceiling face F524 (index 23) and the fresh face F554 (the
  // tail 18) the window's own edges keep
  assert.equal(arc[23], 49)
  assert.equal(arc[52], 18)
  // the multi-count classes the honest arithmetic keeps (5 x6, 11 x4,
  // 7 x4, 1 x3, 3 x3, 8 x3, 18 x3 - ELEVEN values one face each)
  const counts = {}
  for (const v of arc) counts[v] = (counts[v] || 0) + 1
  assert.equal(counts[5], 6)
  assert.equal(counts[11], 4)
  assert.equal(counts[7], 4)
  assert.equal(counts[1], 3)
  assert.equal(counts[3], 3)
  assert.equal(counts[8], 3)
  assert.equal(counts[18], 3)
  assert.equal(Object.values(counts).filter(c => c === 1).length, 11)
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
  // events the tally keeps - the lawful convention the window never
  // rode the synthetic pin keeps)
  const empty = { rejoinStormBreathCount: 0 }
  assert.deepEqual(rejoinStormBreathCountCensus(['x', 'y']), empty)
})

test('fence - every branch the count words own integer law keeps', () => {
  const ok = (n) => ({ rejoinStormBreathCount: n })
  // the all-integer in-range triple the true keeps (the .346 mass
  // word's own count fence the day ceiling the precedent keeps)
  assert.equal(rejoinStormBreathCountConsistent({ back: ok(0), prev: ok(49), cur: ok(86399) }), true)
  // the non-integer the false keeps
  assert.equal(rejoinStormBreathCountConsistent({ back: ok(0.5), prev: ok(0), cur: ok(0) }), false)
  // the negative the false keeps (the count never negative)
  assert.equal(rejoinStormBreathCountConsistent({ back: ok(-1), prev: ok(0), cur: ok(0) }), false)
  // the day-overflow the false keeps
  assert.equal(rejoinStormBreathCountConsistent({ back: ok(86400), prev: ok(0), cur: ok(0) }), false)
  // the string skin the false keeps
  assert.equal(rejoinStormBreathCountConsistent({ back: ok('49'), prev: ok(0), cur: ok(0) }), false)
  // the missing field the false keeps
  assert.equal(rejoinStormBreathCountConsistent({ back: ok(0), prev: ok(0) }), false)
  // the null and the bare the false keeps
  assert.equal(rejoinStormBreathCountConsistent(null), false)
  assert.equal(rejoinStormBreathCountConsistent(0), false)
  assert.equal(rejoinStormBreathCountConsistent({}), false)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const e = (b, p, c) => ({ back: { rejoinStormBreathCount: b }, prev: { rejoinStormBreathCount: p }, cur: { rejoinStormBreathCount: c } })
  // the REAL swell (F503 -> F505): 4 -> 9 (+5) -> 19 (+10)
  const swell = rejoinStormBreathCountTrendRow(e(4, 9, 19))
  assert.match(swell, /storm breath count swell ran two steps deep - 4 -> 9 \(\+5\) -> 19 \(\+10\)/)
  assert.match(swell, /lengthened each face/)
  // the REAL fade (F524 -> F526): 49 -> 15 (-34) -> 11 (-4) - the
  // ceiling face opens the fade
  const fade = rejoinStormBreathCountTrendRow(e(49, 15, 11))
  assert.match(fade, /storm breath count fade ran two steps deep - 49 -> 15 \(-34\) -> 11 \(-4\)/)
  assert.match(fade, /shortened each face/)
  // the REAL swing (F522 -> F524): 26 -> 7 (-19) -> 49 (+42) - the
  // ceiling lands the swing
  const swing = rejoinStormBreathCountTrendRow(e(26, 7, 49))
  assert.match(swing, /storm breath count swing - 26 -> 7 \(-19\) -> 49 \(\+42\)/)
  assert.match(swing, /traded their breath list size/)
  // the REAL held window the archive's own pair keeps (F530 -> F532:
  // 3 -> 7 -> 7 the held second step - the honest silence)
  assert.equal(rejoinStormBreathCountTrendRow(e(3, 7, 7)), null)
  // the tail the sibling seats name (the co-existence by seat law -
  // the .361 champion breath range word the fresh tail keeps)
  const row = rejoinStormBreathCountTrendRow(e(4, 9, 19))
  for (const seat of ['.346 re-join bin', '.347 re-join bots', '.348 re-join peak', '.349 re-join peak name', '.350 re-join span', '.351 champion stretch', '.352 re-join gap', '.353 champion gap', '.354 mean breath', '.355 champion mean breath', '.356 storm median breath', '.357 champion median breath', '.358 storm min breath', '.359 champion min breath', '.360 storm breath range', '.361 champion breath range']) {
    assert.match(row, new RegExp(seat.replace(/\./g, '\\.') + ' word prices'))
  }
  // the fence breach the honest silence keeps
  assert.equal(rejoinStormBreathCountTrendRow(null), null)
  assert.equal(rejoinStormBreathCountTrendRow({ back: { rejoinStormBreathCount: 0.5 }, prev: { rejoinStormBreathCount: 1 }, cur: { rejoinStormBreathCount: 2 } }), null)
})
