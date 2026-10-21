import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampBreathCountCensus, rejoinChampBreathCountConsistent, rejoinChampBreathCountTrendRow } from '../../src/lib/rejoinchampbreathcount.mjs'

// the REAL faces the 55-face family window holds (the archive the
// NAME law keeps - the fleet-server-log face the console.log inside
// the zip the face is) - the champion cadence list's own SIZE the
// adjacent pairs count prices. The fixture columns the .362 test
// embeds re-ride byte-faithful: the champ count the COLUMNS' own
// arithmetic prices and the archive's own census the SAME numbers
// voices (F509's 1 and F519's 1 and F524's 21 and F542's 8 and
// F554's 10 the probe's own window keeps - no drift the champ
// census prices).

// F509's own full join column - the FLOOR face (22 echoes 20 names
// the sole champion F16's own TWO re-join events the ONE champion
// gap keeps - the count 1 the single-gap law's own face the .361
// range zero the count one the same face voices)
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
// 20 names - the F2's own DOUBLE re-join the sole champion keeps,
// the 104-second single gap the .361 range zero's own face the
// count one the same reign prices)
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
// names - the TWO-name tie co-reign the F1 and the F17 the tallest
// columns' eleven-beyond-first apiece the TWENTY-TWO champion
// events the TWENTY-ONE gaps keep - the both counts' own ceiling
// the same face prices: the storm's 49 the champ's 21)
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

// F542's own full join column - the DIALOG face (41 echoes 20 names
// - the F9's own NINE re-join events the sole champion keeps - the
// champion count 8 UNDER the storm's 20 the under-dialog the family
// window's own gravity keeps)
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

// F554's own full join column - the FRESH face (39 echoes 20 names
// - the F13's own ELEVEN re-join events the sole champion keeps -
// the champion count 10 the window's own tail the newest harvest
// prices)
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

// the REAL FIFTY-FIVE-face window arc F501-F556 (the inventory's own
// order the harvest order keeps, the F552 zombie's own number the
// face never rode) - ELEVEN distinct classes no face born-constant:
// the 3 the eleven-face gravity keeps, the 21 the ceiling face F524
// keeps, MANY values speak
const REAL_ARC = [3,3,2,4,3,10,3,9,1,1,5,9,1,10,3,5,3,1,1,2,5,6,2,21,3,4,3,1,1,3,1,4,2,4,2,9,9,3,5,3,7,8,2,2,1,10,2,4,8,4,1,2,10,2,10]

test('REAL faces byte-exact - the champ count the size law prices', () => {
  // the floor face: the sole champion's own two re-join events the
  // ONE champion gap
  assert.equal(rejoinChampBreathCountCensus(REAL_F509).rejoinChampBreathCount, 1)
  // the held pair's own face: the F2 double re-join the 104-second
  // single gap the champion cadence keeps
  assert.equal(rejoinChampBreathCountCensus(REAL_F519).rejoinChampBreathCount, 1)
  // the ceiling face: the TWO-name tie co-reign the twenty-two
  // champion events the TWENTY-ONE gaps
  assert.equal(rejoinChampBreathCountCensus(REAL_F524).rejoinChampBreathCount, 21)
  // the dialog face: the F9 nine-reign the champion count 8
  assert.equal(rejoinChampBreathCountCensus(REAL_F542).rejoinChampBreathCount, 8)
  // the fresh face: the F13 eleven-reign the window's own tail 10
  assert.equal(rejoinChampBreathCountCensus(REAL_F554).rejoinChampBreathCount, 10)
  // the non-array the honest null keeps
  assert.equal(rejoinChampBreathCountCensus(null), null)
  assert.equal(rejoinChampBreathCountCensus('no'), null)
  assert.equal(rejoinChampBreathCountCensus(42), null)
})

test('the IDENTITY + SUBSEQUENCE laws - the champion events the origin closes', () => {
  // the champion events the champion names' own beyond-first echoes
  // the FILE ORDER keeps - the count the events minus the one (the
  // REAL archive F357-F556 audit GREEN every face the probe keeps)
  const read = (lines) => {
    const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
    const tally = new Map()
    const evts = []
    for (const l of lines) {
      const m = RE.exec(l)
      if (!m) continue
      const n = (tally.get(m[4]) || 0) + 1
      tally.set(m[4], n)
      evts.push({ name: m[4], n })
    }
    let peak = 0
    for (const n of tally.values()) if (n > 1) peak = Math.max(peak, n - 1)
    const champs = new Set([...tally].filter(([, n]) => n > 1 && n - 1 === peak).map(([n]) => n))
    return { mass: evts.length, breadth: tally.size, champEvents: evts.filter(e => e.n > 1 && champs.has(e.name)).length }
  }
  for (const col of [REAL_F509, REAL_F519, REAL_F524, REAL_F542, REAL_F554]) {
    const { champEvents } = read(col)
    const count = rejoinChampBreathCountCensus(col).rejoinChampBreathCount
    assert.equal(count, Math.max(0, champEvents - 1))
  }
  // the ceiling face's own arithmetic re-voiced (the F1 and the F17
  // the eleven-beyond-first apiece the twenty-two events the 21)
  assert.equal(rejoinChampBreathCountCensus(REAL_F524).rejoinChampBreathCount, 22 - 1)
  // the SUBSEQUENCE law: the champion count <= the storm count every
  // fixture (the champion events the storm's own events' subsequence
  // the pairs one fewer each keeps - the .362 word's own count the
  // ceiling the champ never exceeds)
  const storm = (mass, breadth) => Math.max(0, mass - breadth - 1)
  for (const col of [REAL_F509, REAL_F519, REAL_F524, REAL_F542, REAL_F554]) {
    const { mass, breadth } = read(col)
    assert.ok(rejoinChampBreathCountCensus(col).rejoinChampBreathCount <= storm(mass, breadth))
  }
  // the dialog's own edges the fixtures voice: the F509 LEVEL face
  // (the champion count IS the storm's 1 the whole-one-echo-storm
  // co-reign keeps) and the F524 under face (21 UNDER the 49)
  assert.equal(rejoinChampBreathCountCensus(REAL_F509).rejoinChampBreathCount, storm(22, 20))
  assert.ok(rejoinChampBreathCountCensus(REAL_F524).rejoinChampBreathCount < storm(70, 20))
  // the constructive zero: the single champion echo no pair to pair
  // (the one-echo storm the both words' own zero family keeps - the
  // F357's and F381's and F459's and F468's and F474's own faces the
  // zero rode - the window never rode it the synthetic pin keeps)
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinChampBreathCountCensus(oneEcho), { rejoinChampBreathCount: 0 })
  const singleChampEcho = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game',
    '[04:20:00] [Server thread/INFO]: F7 joined the game'
  ]
  assert.deepEqual(rejoinChampBreathCountCensus(singleChampEcho), { rejoinChampBreathCount: 0 })
})

test('REAL 55-face window arc byte-exact - 11 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 55)
  assert.equal(classes.size, 11)
  assert.equal(Math.min(...arc), 1) // the TEN-face floor keeps
  assert.equal(Math.max(...arc), 21) // the ceiling face F524 keeps
  // the floor the TEN-face gravity keeps (the single-gap rides
  // F509 F510 F513 F518 F519 F528 F529 F531 F545 F551 - indices
  // 8 9 12 17 18 27 28 30 44 50 - the .361 range zero's own ten
  // the count's floor the same faces voice)
  for (const i of [8, 9, 12, 17, 18, 27, 28, 30, 44, 50]) assert.equal(arc[i], 1)
  // the SIX held pairs the F501/F502 threes and the F509/F510 and
  // F518/F519 and F528/F529 ones and the F536/F537 nines and the
  // F543/F544 twos keep (the .362 storm count arc's own TWO held
  // pairs the champ arc does NOT inherit - the honest naming prices)
  assert.equal(arc[0], 3); assert.equal(arc[1], arc[0])
  assert.equal(arc[8], 1); assert.equal(arc[9], arc[8])
  assert.equal(arc[17], 1); assert.equal(arc[18], arc[17])
  assert.equal(arc[27], 1); assert.equal(arc[28], arc[27])
  assert.equal(arc[35], 9); assert.equal(arc[36], arc[35])
  assert.equal(arc[42], 2); assert.equal(arc[43], arc[42])
  // the ceiling face F524 (index 23) and the fresh tails (F554 the
  // 10, F555 the 2, F556 the 10) the window's own edges keep
  assert.equal(arc[23], 21)
  assert.equal(arc[52], 10)
  assert.equal(arc[53], 2)
  assert.equal(arc[54], 10)
  // the multi-count classes the honest arithmetic keeps (3 x11,
  // 1 x10, 2 x10, 10 x5, 4 x6, 5 x4, 9 x4, 8 x2 - the 6 and the 7
  // and the 21 one face each)
  const counts = {}
  for (const v of arc) counts[v] = (counts[v] || 0) + 1
  assert.equal(counts[3], 11)
  assert.equal(counts[1], 10)
  assert.equal(counts[2], 10)
  assert.equal(counts[4], 6)
  assert.equal(counts[5], 4)
  assert.equal(counts[9], 4)
  assert.equal(counts[10], 5)
  assert.equal(counts[8], 2)
  assert.equal(counts[6], 1)
  assert.equal(counts[7], 1)
  assert.equal(counts[21], 1)
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
  // a deformed-only face prices the constructive zero (no champion
  // events the tally keeps - the lawful convention the window never
  // rode the synthetic pin keeps)
  const empty = { rejoinChampBreathCount: 0 }
  assert.deepEqual(rejoinChampBreathCountCensus(['x', 'y']), empty)
})

test('fence - every branch the count words own integer law keeps', () => {
  const ok = (n) => ({ rejoinChampBreathCount: n })
  // the all-integer in-range triple the true keeps (the .346 mass
  // word's own count fence the day ceiling the precedent keeps)
  assert.equal(rejoinChampBreathCountConsistent({ back: ok(0), prev: ok(21), cur: ok(86399) }), true)
  // the non-integer the false keeps
  assert.equal(rejoinChampBreathCountConsistent({ back: ok(0.5), prev: ok(0), cur: ok(0) }), false)
  // the negative the false keeps (the count never negative)
  assert.equal(rejoinChampBreathCountConsistent({ back: ok(-1), prev: ok(0), cur: ok(0) }), false)
  // the day-overflow the false keeps
  assert.equal(rejoinChampBreathCountConsistent({ back: ok(86400), prev: ok(0), cur: ok(0) }), false)
  // the string skin the false keeps
  assert.equal(rejoinChampBreathCountConsistent({ back: ok('21'), prev: ok(0), cur: ok(0) }), false)
  // the missing field the false keeps
  assert.equal(rejoinChampBreathCountConsistent({ back: ok(0), prev: ok(0) }), false)
  // the null and the bare the false keeps
  assert.equal(rejoinChampBreathCountConsistent(null), false)
  assert.equal(rejoinChampBreathCountConsistent(0), false)
  assert.equal(rejoinChampBreathCountConsistent({}), false)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const e = (b, p, c) => ({ back: { rejoinChampBreathCount: b }, prev: { rejoinChampBreathCount: p }, cur: { rejoinChampBreathCount: c } })
  // the REAL swell (F519 -> F521): 1 -> 2 (+1) -> 5 (+3)
  const swell = rejoinChampBreathCountTrendRow(e(1, 2, 5))
  assert.match(swell, /champion breath count swell ran two steps deep - 1 -> 2 \(\+1\) -> 5 \(\+3\)/)
  assert.match(swell, /lengthened each face/)
  // the REAL fade (F549 -> F551): 8 -> 4 (-4) -> 1 (-3)
  const fade = rejoinChampBreathCountTrendRow(e(8, 4, 1))
  assert.match(fade, /champion breath count fade ran two steps deep - 8 -> 4 \(-4\) -> 1 \(-3\)/)
  assert.match(fade, /shortened each face/)
  // the REAL swing (F554 -> F556): 10 -> 2 (-8) -> 10 (+8) - the
  // fresh tail the newest harvest prices
  const swing = rejoinChampBreathCountTrendRow(e(10, 2, 10))
  assert.match(swing, /champion breath count swing - 10 -> 2 \(-8\) -> 10 \(\+8\)/)
  assert.match(swing, /traded their breath list size/)
  // the REAL held window the archive's own pair keeps (F508 -> F510:
  // 9 -> 1 -> 1 the held second step - the honest silence)
  assert.equal(rejoinChampBreathCountTrendRow(e(9, 1, 1)), null)
  // the tail the sibling seats name (the co-existence by seat law -
  // the .362 storm breath count word the fresh tail keeps)
  const row = rejoinChampBreathCountTrendRow(e(1, 2, 5))
  for (const seat of ['.346 re-join bin', '.347 re-join bots', '.348 re-join peak', '.349 re-join peak name', '.350 re-join span', '.351 champion stretch', '.352 re-join gap', '.353 champion gap', '.354 mean breath', '.355 champion mean breath', '.356 storm median breath', '.357 champion median breath', '.358 storm min breath', '.359 champion min breath', '.360 storm breath range', '.361 champion breath range', '.362 storm breath count']) {
    assert.match(row, new RegExp(seat.replace(/\./g, '\\.') + ' word prices'))
  }
  // the fence breach the honest silence keeps
  assert.equal(rejoinChampBreathCountTrendRow(null), null)
  assert.equal(rejoinChampBreathCountTrendRow({ back: { rejoinChampBreathCount: 0.5 }, prev: { rejoinChampBreathCount: 1 }, cur: { rejoinChampBreathCount: 2 } }), null)
})
