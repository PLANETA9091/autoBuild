import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampSecondBreathCensus, rejoinChampSecondBreathConsistent, rejoinChampSecondBreathTrendRow } from '../../src/lib/rejoinchampsecondbreath.mjs'

// the REAL faces the 59-face family window holds (the archive the
// NAME law keeps - the fleet-server-log face the console.log inside
// the zip the face is) - the champion cadence list's own SECOND GAP
// the adjacent pair at index one prices. The fixture columns the .365
// and the .366 tests embed re-ride byte-faithful: the second breath
// the COLUMNS' own arithmetic prices and the archive's own census the
// SAME numbers voices (F509's constructive 0 and F527's level 8 and
// F549's real zero and F558's 42 and the fresh F560's 10 and the
// fresh tail F561's 57 the probe's own window keeps - no drift the
// champion census prices).

// F509's own full join column - the CONSTRUCTIVE face (22 echoes 20
// names - the F16's own TWO re-join events the ONE champ gap keeps -
// the fewer-than-two-gaps face the second breath the constructive
// zero keeps: the .365 word's own floor face the FIRST breath voiced,
// the SECOND breath the no-second-pair face rides)
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

// F519's own full join column - the CONSTRUCTIVE face (26 echoes 20
// names - the F2's own double re-join the ONE champ gap keeps - the
// first breath 104 the whole list the constructive second rides: the
// single re-joiner the champion the one-gap face the zero keeps)
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

// F527's own full join column - the LEVEL face (28 echoes 20 names -
// the F14's own five-join reign the THREE champ gaps [125, 8, 8] keep
// - the second breath 8 the median 8 the level rides: the same
// second's own triple the storm word's zero face the champ level
// prices)
const REAL_F527 = [
  '[18:49:49] [Server thread/INFO]: YardSurvey joined the game',
  '[18:50:03] [Server thread/INFO]: F1 joined the game',
  '[18:50:05] [Server thread/INFO]: F2 joined the game',
  '[18:50:07] [Server thread/INFO]: F3 joined the game',
  '[18:50:10] [Server thread/INFO]: F4 joined the game',
  '[18:50:13] [Server thread/INFO]: F5 joined the game',
  '[18:50:16] [Server thread/INFO]: F6 joined the game',
  '[18:50:19] [Server thread/INFO]: F7 joined the game',
  '[18:50:22] [Server thread/INFO]: F8 joined the game',
  '[18:50:25] [Server thread/INFO]: F9 joined the game',
  '[18:50:28] [Server thread/INFO]: F10 joined the game',
  '[18:50:31] [Server thread/INFO]: F11 joined the game',
  '[18:50:34] [Server thread/INFO]: F12 joined the game',
  '[18:50:38] [Server thread/INFO]: F13 joined the game',
  '[18:50:40] [Server thread/INFO]: F14 joined the game',
  '[18:50:43] [Server thread/INFO]: F15 joined the game',
  '[18:50:46] [Server thread/INFO]: F16 joined the game',
  '[18:50:49] [Server thread/INFO]: F17 joined the game',
  '[18:50:52] [Server thread/INFO]: F18 joined the game',
  '[18:50:55] [Server thread/INFO]: F19 joined the game',
  '[18:57:38] [Server thread/INFO]: F12 joined the game',
  '[18:57:38] [Server thread/INFO]: F14 joined the game',
  '[18:57:46] [Server thread/INFO]: F7 joined the game',
  '[18:57:50] [Server thread/INFO]: F10 joined the game',
  '[18:59:40] [Server thread/INFO]: F18 joined the game',
  '[18:59:43] [Server thread/INFO]: F14 joined the game',
  '[18:59:51] [Server thread/INFO]: F14 joined the game',
  '[18:59:59] [Server thread/INFO]: F14 joined the game'
]

// F545's own full join column - the CONSTRUCTIVE face (22 echoes 20
// names - the F18 and the F2 the SAME SECOND 09:27:57 pair the ONE
// champ gap the zero keeps - the same-second arrival the opening pair
// the SECOND pair no list holds the constructive branch rides)
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

// F549's own full join column - the REAL ZERO face (29 echoes 20
// names - the NINE-name co-reign the whole-storm face keeps - the
// champ cadence EIGHT gaps the second gap ZERO the F14 and the F13
// the SAME SECOND 11:59:58 the second adjacent pair keeps - the real
// zero the same-second second arrival prices, the count 8 the voiced
// champ cadence the constructive branch never rides)
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

// F558's own full join column - the ABOVE face (38 echoes 20 names -
// the F1 and the F11 the THREE-apiece tie co-reign keeps - the champ
// cadence FIVE gaps the second breath 42 ABOVE the median 15 the
// above-dialog the window prices)
const REAL_F558 = [
  '[18:40:50] [Server thread/INFO]: YardSurvey joined the game',
  '[18:41:04] [Server thread/INFO]: F1 joined the game',
  '[18:41:06] [Server thread/INFO]: F2 joined the game',
  '[18:41:08] [Server thread/INFO]: F3 joined the game',
  '[18:41:11] [Server thread/INFO]: F4 joined the game',
  '[18:41:13] [Server thread/INFO]: F5 joined the game',
  '[18:41:16] [Server thread/INFO]: F6 joined the game',
  '[18:41:18] [Server thread/INFO]: F7 joined the game',
  '[18:41:21] [Server thread/INFO]: F8 joined the game',
  '[18:41:24] [Server thread/INFO]: F9 joined the game',
  '[18:41:26] [Server thread/INFO]: F10 joined the game',
  '[18:41:29] [Server thread/INFO]: F11 joined the game',
  '[18:41:32] [Server thread/INFO]: F12 joined the game',
  '[18:41:35] [Server thread/INFO]: F13 joined the game',
  '[18:41:38] [Server thread/INFO]: F14 joined the game',
  '[18:41:40] [Server thread/INFO]: F15 joined the game',
  '[18:41:43] [Server thread/INFO]: F16 joined the game',
  '[18:41:45] [Server thread/INFO]: F17 joined the game',
  '[18:41:48] [Server thread/INFO]: F18 joined the game',
  '[18:41:51] [Server thread/INFO]: F19 joined the game',
  '[18:47:15] [Server thread/INFO]: F6 joined the game',
  '[18:47:32] [Server thread/INFO]: F14 joined the game',
  '[18:48:31] [Server thread/INFO]: F1 joined the game',
  '[18:48:41] [Server thread/INFO]: F11 joined the game',
  '[18:48:49] [Server thread/INFO]: F8 joined the game',
  '[18:48:58] [Server thread/INFO]: F10 joined the game',
  '[18:49:09] [Server thread/INFO]: F10 joined the game',
  '[18:49:21] [Server thread/INFO]: F19 joined the game',
  '[18:49:23] [Server thread/INFO]: F1 joined the game',
  '[18:49:24] [Server thread/INFO]: F14 joined the game',
  '[18:49:31] [Server thread/INFO]: F18 joined the game',
  '[18:50:14] [Server thread/INFO]: F13 joined the game',
  '[18:50:20] [Server thread/INFO]: F9 joined the game',
  '[18:50:22] [Server thread/INFO]: F16 joined the game',
  '[18:50:35] [Server thread/INFO]: F1 joined the game',
  '[18:50:39] [Server thread/INFO]: F11 joined the game',
  '[18:50:54] [Server thread/INFO]: F11 joined the game',
  '[18:50:57] [Server thread/INFO]: F7 joined the game'
]

// F559's own full join column - the NO-PAIR face (21 echoes 20 names
// - the F19's own single re-join the ONE champion event the no-pair
// face keeps - the fresh tail the window's FIRST no-pair rider the
// champ list its own single echo no gap to pair the constructive
// keeps)
const REAL_F559 = [
  '[19:23:54] [Server thread/INFO]: YardSurvey joined the game',
  '[19:24:07] [Server thread/INFO]: F1 joined the game',
  '[19:24:10] [Server thread/INFO]: F2 joined the game',
  '[19:24:12] [Server thread/INFO]: F3 joined the game',
  '[19:24:15] [Server thread/INFO]: F4 joined the game',
  '[19:24:17] [Server thread/INFO]: F5 joined the game',
  '[19:24:20] [Server thread/INFO]: F6 joined the game',
  '[19:24:22] [Server thread/INFO]: F7 joined the game',
  '[19:24:25] [Server thread/INFO]: F8 joined the game',
  '[19:24:27] [Server thread/INFO]: F9 joined the game',
  '[19:24:30] [Server thread/INFO]: F10 joined the game',
  '[19:24:32] [Server thread/INFO]: F11 joined the game',
  '[19:24:35] [Server thread/INFO]: F12 joined the game',
  '[19:24:38] [Server thread/INFO]: F13 joined the game',
  '[19:24:40] [Server thread/INFO]: F14 joined the game',
  '[19:24:42] [Server thread/INFO]: F15 joined the game',
  '[19:24:45] [Server thread/INFO]: F16 joined the game',
  '[19:24:47] [Server thread/INFO]: F17 joined the game',
  '[19:24:51] [Server thread/INFO]: F18 joined the game',
  '[19:24:54] [Server thread/INFO]: F19 joined the game',
  '[19:33:40] [Server thread/INFO]: F19 joined the game'
]

// F560's own full join column - the FRESH face (39 echoes 20 names -
// the F14 eleven-reign the TEN champ gaps the second breath 10 ABOVE
// the median 7 the fresh window's above-dialog the tail prices - the
// F560 dispatch the .364 tree face the window's own tail keeps)
const REAL_F560 = [
  '[20:07:56] [Server thread/INFO]: YardSurvey joined the game',
  '[20:08:11] [Server thread/INFO]: F1 joined the game',
  '[20:08:13] [Server thread/INFO]: F2 joined the game',
  '[20:08:15] [Server thread/INFO]: F3 joined the game',
  '[20:08:18] [Server thread/INFO]: F4 joined the game',
  '[20:08:20] [Server thread/INFO]: F5 joined the game',
  '[20:08:24] [Server thread/INFO]: F6 joined the game',
  '[20:08:26] [Server thread/INFO]: F7 joined the game',
  '[20:08:28] [Server thread/INFO]: F8 joined the game',
  '[20:08:31] [Server thread/INFO]: F9 joined the game',
  '[20:08:33] [Server thread/INFO]: F10 joined the game',
  '[20:08:36] [Server thread/INFO]: F11 joined the game',
  '[20:08:39] [Server thread/INFO]: F12 joined the game',
  '[20:08:42] [Server thread/INFO]: F13 joined the game',
  '[20:08:44] [Server thread/INFO]: F14 joined the game',
  '[20:08:46] [Server thread/INFO]: F15 joined the game',
  '[20:08:49] [Server thread/INFO]: F16 joined the game',
  '[20:08:52] [Server thread/INFO]: F17 joined the game',
  '[20:08:54] [Server thread/INFO]: F18 joined the game',
  '[20:08:58] [Server thread/INFO]: F19 joined the game',
  '[20:12:50] [Server thread/INFO]: F3 joined the game',
  '[20:15:30] [Server thread/INFO]: F14 joined the game',
  '[20:15:37] [Server thread/INFO]: F14 joined the game',
  '[20:15:47] [Server thread/INFO]: F14 joined the game',
  '[20:16:00] [Server thread/INFO]: F14 joined the game',
  '[20:16:06] [Server thread/INFO]: F14 joined the game',
  '[20:16:13] [Server thread/INFO]: F14 joined the game',
  '[20:16:19] [Server thread/INFO]: F14 joined the game',
  '[20:16:29] [Server thread/INFO]: F14 joined the game',
  '[20:16:35] [Server thread/INFO]: F14 joined the game',
  '[20:16:40] [Server thread/INFO]: F14 joined the game',
  '[20:16:42] [Server thread/INFO]: F13 joined the game',
  '[20:16:48] [Server thread/INFO]: F13 joined the game',
  '[20:16:52] [Server thread/INFO]: F14 joined the game',
  '[20:16:54] [Server thread/INFO]: F13 joined the game',
  '[20:17:00] [Server thread/INFO]: F13 joined the game',
  '[20:17:37] [Server thread/INFO]: F16 joined the game',
  '[20:18:09] [Server thread/INFO]: F5 joined the game',
  '[20:18:10] [Server thread/INFO]: F1 joined the game'
]

// F561's own full join column - the FRESH TAIL face (31 echoes 20
// names - the F19's own triple re-join the TWO champ gaps [6, 57]
// keep - the second breath 57 ABOVE the median 31 the runner-up IS
// the cadence's tallest the fresh tail prices - the F561 dispatch the
// .366 tree face the window's own newest harvest keeps)
const REAL_F561 = [
  '[21:35:20] [Server thread/INFO]: YardSurvey joined the game',
  '[21:35:34] [Server thread/INFO]: F1 joined the game',
  '[21:35:36] [Server thread/INFO]: F2 joined the game',
  '[21:35:38] [Server thread/INFO]: F3 joined the game',
  '[21:35:41] [Server thread/INFO]: F4 joined the game',
  '[21:35:43] [Server thread/INFO]: F5 joined the game',
  '[21:35:46] [Server thread/INFO]: F6 joined the game',
  '[21:35:49] [Server thread/INFO]: F7 joined the game',
  '[21:35:51] [Server thread/INFO]: F8 joined the game',
  '[21:35:54] [Server thread/INFO]: F9 joined the game',
  '[21:35:56] [Server thread/INFO]: F10 joined the game',
  '[21:35:59] [Server thread/INFO]: F11 joined the game',
  '[21:36:01] [Server thread/INFO]: F12 joined the game',
  '[21:36:04] [Server thread/INFO]: F13 joined the game',
  '[21:36:06] [Server thread/INFO]: F14 joined the game',
  '[21:36:09] [Server thread/INFO]: F15 joined the game',
  '[21:36:11] [Server thread/INFO]: F16 joined the game',
  '[21:36:14] [Server thread/INFO]: F17 joined the game',
  '[21:36:16] [Server thread/INFO]: F18 joined the game',
  '[21:36:19] [Server thread/INFO]: F19 joined the game',
  '[21:41:26] [Server thread/INFO]: F3 joined the game',
  '[21:41:55] [Server thread/INFO]: F17 joined the game',
  '[21:42:00] [Server thread/INFO]: F9 joined the game',
  '[21:43:53] [Server thread/INFO]: F7 joined the game',
  '[21:44:15] [Server thread/INFO]: F19 joined the game',
  '[21:44:21] [Server thread/INFO]: F19 joined the game',
  '[21:45:18] [Server thread/INFO]: F19 joined the game',
  '[21:45:19] [Server thread/INFO]: F1 joined the game',
  '[21:45:25] [Server thread/INFO]: F4 joined the game',
  '[21:45:25] [Server thread/INFO]: F12 joined the game',
  '[21:45:26] [Server thread/INFO]: F2 joined the game'
]

// the REAL FIFTY-NINE-face window arc F501-F561 (the inventory's own
// order the harvest order keeps, the F552 zombie's own number the
// face never rode, the F557 gate face the window keeps OUT - the
// small fleet's own regime the integration leg rides) - THIRTY-FOUR
// distinct classes no face born-constant (the prev window F501-F560
// the fresh tail's own class unpriced keeps THIRTY-THREE): the 0 the
// TWELVE-face gravity keeps (the constructive eleven and the real one
// F549 the pair keeps), the 233 the ceiling face F543 keeps, the 57
// the fresh tail F561 keeps, MANY values speak
const REAL_ARC = [2,139,93,166,132,7,63,64,0,0,100,7,0,11,78,10,122,0,0,85,27,8,14,10,13,15,8,0,0,59,0,47,158,8,7,49,56,109,7,7,10,8,233,63,0,6,37,5,0,5,0,22,8,106,5,42,0,10,57]

test('REAL faces byte-exact - the champion second breath the runner-up prices', () => {
  // the constructive faces: the ONE champ gap the second pair no list
  // holds the constructive zero keeps (F509's F16 single gap, F519's
  // F2 one-gap reign, F545's same-second opening pair)
  assert.equal(rejoinChampSecondBreathCensus(REAL_F509).rejoinChampSecondBreath, 0)
  assert.equal(rejoinChampSecondBreathCensus(REAL_F519).rejoinChampSecondBreath, 0)
  assert.equal(rejoinChampSecondBreathCensus(REAL_F545).rejoinChampSecondBreath, 0)
  // the level face: the F14 triple-reign the three champ gaps [125, 8,
  // 8] the second 8 the median 8
  assert.equal(rejoinChampSecondBreathCensus(REAL_F527).rejoinChampSecondBreath, 8)
  // the REAL zero face: the nine-name co-reign the F14 and the F13 the
  // SAME SECOND 11:59:58 the second adjacent pair zero the eight-gap
  // champ cadence voices
  assert.equal(rejoinChampSecondBreathCensus(REAL_F549).rejoinChampSecondBreath, 0)
  // the above face: the F1/F11 co-reign the second 42 above the median 15
  assert.equal(rejoinChampSecondBreathCensus(REAL_F558).rejoinChampSecondBreath, 42)
  // the no-pair face: the F19's own single re-join the ONE champion
  // event the no list holds
  assert.equal(rejoinChampSecondBreathCensus(REAL_F559).rejoinChampSecondBreath, 0)
  // the fresh faces: the F14 eleven-reign the second 10 and the F19
  // two-gap cadence the second 57 the fresh tail keeps
  assert.equal(rejoinChampSecondBreathCensus(REAL_F560).rejoinChampSecondBreath, 10)
  assert.equal(rejoinChampSecondBreathCensus(REAL_F561).rejoinChampSecondBreath, 57)
  // the non-array the honest null keeps
  assert.equal(rejoinChampSecondBreathCensus(null), null)
  assert.equal(rejoinChampSecondBreathCensus('no'), null)
  assert.equal(rejoinChampSecondBreathCensus(42), null)
})

test('the BOUND + DIALOG + CEILING laws - the edges the champion runner-up bounds keep', () => {
  // the champion cadence hand the fixtures re-voice inline - the BOUND
  // law the .359 champion min <= second <= the .353 champion gap and
  // second <= the .351 champion stretch every voiced fixture (the REAL
  // archive audit GREEN the probe keeps)
  const read = (lines) => {
    const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
    const tally = new Map()
    const evts = []
    for (const l of lines) {
      const m = RE.exec(l)
      if (!m) continue
      const n = (tally.get(m[4]) || 0) + 1
      tally.set(m[4], n)
      evts.push({ name: m[4], s: Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]), n })
    }
    let peak = 0
    for (const n of tally.values()) if (n > 1) peak = Math.max(peak, n - 1)
    const champs = new Set()
    for (const [name, n] of tally) if (n > 1 && n - 1 === peak) champs.add(name)
    const cevts = evts.filter(e => e.n > 1 && champs.has(e.name))
    const gaps = []
    for (let i = 1; i < cevts.length; i++) {
      const cur = cevts[i - 1].s
      const nxt = cevts[i].s
      gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur)
    }
    return {
      second: gaps.length > 1 ? gaps[1] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: gaps.reduce((a, b) => a + b, 0),
      med: (() => { if (!gaps.length) return 0; const s = [...gaps].sort((a, b) => a - b); const m = Math.floor(s.length / 2); return s.length % 2 ? s[m] : Math.floor((s[m - 1] + s[m]) / 2) })()
    }
  }
  for (const col of [REAL_F509, REAL_F519, REAL_F527, REAL_F545, REAL_F549, REAL_F558, REAL_F559, REAL_F560, REAL_F561]) {
    const r = read(col)
    const second = rejoinChampSecondBreathCensus(col).rejoinChampSecondBreath
    assert.equal(second, r.second)
    // the bound the VOICED faces price (the fewer-than-two-gaps face
    // the lawful zero the bounds keep - the F509 constructive face
    // the second 0 no list sample the min/max never bound)
    if (r.count >= 2) {
      assert.ok(second >= r.min && second <= r.max, `bound ${second} in [${r.min},${r.max}]`)
      assert.ok(second <= r.stretch)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F509 under face
  // (the constructive 0 UNDER the 28) and the F527 level face (the
  // second IS the median 8) and the F558 above face (42 ABOVE the 15)
  // and the F561 above face (57 ABOVE the 31 the fresh tail)
  assert.ok(read(REAL_F509).second < read(REAL_F509).med)
  assert.equal(read(REAL_F527).second, read(REAL_F527).med)
  assert.ok(read(REAL_F558).second > read(REAL_F558).med)
  assert.ok(read(REAL_F561).second > read(REAL_F561).med)
  // the CEILING's own face: the F561 runner-up IS the champion
  // cadence's tallest silence (57) - and the F549 the REAL zero the
  // max 310 the ceiling never rides the honest difference prices
  assert.equal(read(REAL_F561).second, read(REAL_F561).max)
  assert.equal(read(REAL_F549).second, 0)
  assert.ok(read(REAL_F549).max > 0) // the 310 giant the opening keeps
  // the REAL zero vs the CONSTRUCTIVE zero: the F549 the eight-gap
  // champ cadence the same-second second pair the zero the list
  // voices, the F545 the ONE gap the no-second-pair face keeps, the
  // F559 the ONE champion event the no-pair face keeps
  assert.equal(read(REAL_F549).count, 8)
  assert.equal(read(REAL_F545).count, 1)
  assert.equal(read(REAL_F559).count, 0)
  // the synthetic branches: the one-echo face the zero keeps, the
  // single-champ-event face the ONE gap the constructive keeps, the
  // co-reign tie the interleave the second gap the FILE ORDER voices,
  // the two-gap face the second gap the list voices, the day-cyclic
  // wrap the second pair crossing the midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinChampSecondBreathCensus(oneEcho), { rejoinChampSecondBreath: 0 })
  const singleChampEvent = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinChampSecondBreathCensus(singleChampEvent), { rejoinChampSecondBreath: 0 })
  const coReign = [
    '[09:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[09:01:00] [Server thread/INFO]: F3 joined the game',
    '[09:02:00] [Server thread/INFO]: F7 joined the game',
    '[09:04:00] [Server thread/INFO]: F3 joined the game',
    '[09:07:00] [Server thread/INFO]: F7 joined the game',
    '[09:08:00] [Server thread/INFO]: F3 joined the game',
    '[09:14:00] [Server thread/INFO]: F7 joined the game'
  ]
  // F3's and F7's own treble apiece the tie co-reign keeps - the champ
  // events the FILE ORDER rides (F3 09:04 / F7 09:07 / F3 09:08 / F7
  // 09:14) the gaps [180, 60, 360] the second 60 the interleave voices
  assert.deepEqual(rejoinChampSecondBreathCensus(coReign), { rejoinChampSecondBreath: 60 })
  const twoChampGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:45] [Server thread/INFO]: F3 joined the game',
    '[08:06:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the champ list keeps
  // out - the champ events 08:02 / 08:02:45 / 08:06 the gaps [45, 195]
  // the second pair 195 the list voices
  assert.deepEqual(rejoinChampSecondBreathCensus(twoChampGaps), { rejoinChampSecondBreath: 195 })
  const wrap = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[23:59:30] [Server thread/INFO]: F3 joined the game',
    '[00:01:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the day-cyclic wrap the .350 precedent keeps - the second pair
  // crosses the midnight cell (5490 + 86400 - 86370 = 5520) the list
  // voices
  assert.deepEqual(rejoinChampSecondBreathCensus(wrap), { rejoinChampSecondBreath: 5520 })
})

test('REAL 59-face window arc byte-exact - 34 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 59)
  assert.equal(classes.size, 34)
  assert.equal(Math.min(...arc), 0) // the TWELVE-face zero keeps (the constructive eleven + the real one F549)
  assert.equal(Math.max(...arc), 233) // the ceiling face F543 keeps
  // the zero faces the honest distinction prices (F509 index 8 the
  // constructive single-gap, F519 index 18 the one-gap reign, F545
  // index 44 the same-second opening pair, F549 index 48 the REAL
  // same-second second pair, F559 index 56 the no-pair tail, F513
  // index 12 the one-gap face)
  assert.equal(arc[8], 0)
  assert.equal(arc[18], 0)
  assert.equal(arc[44], 0)
  assert.equal(arc[48], 0)
  assert.equal(arc[56], 0)
  assert.equal(arc[12], 0)
  // the ceiling face F543 (index 42 the 233) and the above-dialog
  // faces (F558 index 55 the 42, F561 index 58 the 57) and the level
  // F527 (index 26 the 8) and the fresh F560 (index 57 the 10)
  assert.equal(arc[42], 233)
  assert.equal(arc[55], 42)
  assert.equal(arc[58], 57)
  assert.equal(arc[26], 8)
  assert.equal(arc[57], 10)
  // the FOUR held pairs the honest arithmetic keeps (indices 8/9 the
  // F509/F510 zeros, 17/18 the F518/F519 zeros, 27/28 the F528/F529
  // zeros, 39/40 the F539/F540 sevens - the .365 first arc's ONE held
  // pair the F534/F535 eights the second arc does NOT inherit)
  assert.equal(arc[8], 0)
  assert.equal(arc[9], 0)
  assert.equal(arc[17], 0)
  assert.equal(arc[18], 0)
  assert.equal(arc[27], 0)
  assert.equal(arc[28], 0)
  assert.equal(arc[38], 7)
  assert.equal(arc[39], 7)
  // the multi-count classes the honest arithmetic keeps (0 x12, 7/8
  // x5, 10 x4, 5 x3, 63 x2 - the twenty-eight singletons the rest)
  const counts = {}
  for (const v of arc) counts[v] = (counts[v] || 0) + 1
  assert.equal(counts[0], 12)
  assert.equal(counts[7], 5)
  assert.equal(counts[8], 5)
  assert.equal(counts[10], 4)
  assert.equal(counts[5], 3)
  assert.equal(counts[63], 2)
  assert.equal(counts[233], 1)
  assert.equal(counts[57], 1)
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
  // events the tally keeps - the lawful convention the synthetic pin
  // keeps)
  const empty = { rejoinChampSecondBreath: 0 }
  assert.deepEqual(rejoinChampSecondBreathCensus(['x', 'y']), empty)
})

test('fence - every branch the gap words own integer law keeps', () => {
  const ok = (n) => ({ rejoinChampSecondBreath: n })
  // the all-integer in-range triple the true keeps (the .352 re-join
  // gap word's own fence the day ceiling the precedent keeps)
  assert.equal(rejoinChampSecondBreathConsistent({ back: ok(0), prev: ok(233), cur: ok(86399) }), true)
  // the non-integer the false keeps
  assert.equal(rejoinChampSecondBreathConsistent({ back: ok(0.5), prev: ok(0), cur: ok(0) }), false)
  // the negative the false keeps (the gap never negative)
  assert.equal(rejoinChampSecondBreathConsistent({ back: ok(-1), prev: ok(0), cur: ok(0) }), false)
  // the day-overflow the false keeps
  assert.equal(rejoinChampSecondBreathConsistent({ back: ok(86400), prev: ok(0), cur: ok(0) }), false)
  // the string skin the false keeps
  assert.equal(rejoinChampSecondBreathConsistent({ back: ok('233'), prev: ok(0), cur: ok(0) }), false)
  // the missing field the false keeps
  assert.equal(rejoinChampSecondBreathConsistent({ back: ok(0), prev: ok(0) }), false)
  // the null and the bare the false keeps
  assert.equal(rejoinChampSecondBreathConsistent(null), false)
  assert.equal(rejoinChampSecondBreathConsistent(0), false)
  assert.equal(rejoinChampSecondBreathConsistent({}), false)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const e = (b, p, c) => ({ back: { rejoinChampSecondBreath: b }, prev: { rejoinChampSecondBreath: p }, cur: { rejoinChampSecondBreath: c } })
  // the REAL swell (F506 -> F508): 7 -> 63 (+56) -> 64 (+1)
  const swell = rejoinChampSecondBreathTrendRow(e(7, 63, 64))
  assert.match(swell, /champion second breath swell ran two steps deep - 7 -> 63 \(\+56\) -> 64 \(\+1\)/)
  assert.match(swell, /lengthened each face/)
  // the REAL fade (F504 -> F506): 166 -> 132 (-34) -> 7 (-125)
  const fade = rejoinChampSecondBreathTrendRow(e(166, 132, 7))
  assert.match(fade, /champion second breath fade ran two steps deep - 166 -> 132 \(-34\) -> 7 \(-125\)/)
  assert.match(fade, /shortened each face/)
  // the REAL swing (F501 -> F503): 2 -> 139 (+137) -> 93 (-46)
  const swing = rejoinChampSecondBreathTrendRow(e(2, 139, 93))
  assert.match(swing, /champion second breath swing - 2 -> 139 \(\+137\) -> 93 \(-46\)/)
  assert.match(swing, /traded their second breath/)
  // the REAL held window the archive's own pair keeps (F508 -> F510:
  // 64 -> 0 -> 0 the held second step - the honest silence)
  assert.equal(rejoinChampSecondBreathTrendRow(e(64, 0, 0)), null)
  // the tail the sibling seats name (the co-existence by seat law -
  // the .366 storm second breath word the fresh sibling keeps)
  const row = rejoinChampSecondBreathTrendRow(e(7, 63, 64))
  for (const seat of ['.346 re-join bin', '.347 re-join bots', '.348 re-join peak', '.349 re-join peak name', '.350 re-join span', '.351 champion stretch', '.352 re-join gap', '.353 champion gap', '.354 mean breath', '.355 champion mean breath', '.356 storm median breath', '.357 champion median breath', '.358 storm min breath', '.359 champion min breath', '.360 storm breath range', '.361 champion breath range', '.362 storm breath count', '.363 champion breath count', '.364 storm first breath', '.365 champion first breath', '.366 storm second breath']) {
    assert.match(row, new RegExp(seat.replace(/\./g, '\\.') + ' word prices'))
  }
  // the fence breach the honest silence keeps
  assert.equal(rejoinChampSecondBreathTrendRow(null), null)
  assert.equal(rejoinChampSecondBreathTrendRow({ back: { rejoinChampSecondBreath: 0.5 }, prev: { rejoinChampSecondBreath: 1 }, cur: { rejoinChampSecondBreath: 2 } }), null)
})
