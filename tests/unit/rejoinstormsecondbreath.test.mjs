import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormSecondBreathCensus, rejoinStormSecondBreathConsistent, rejoinStormSecondBreathTrendRow } from '../../src/lib/rejoinstormsecondbreath.mjs'

// the REAL faces the 58-face family window holds (the archive the
// NAME law keeps - the fleet-server-log face the console.log inside
// the zip the face is) - the storm cadence list's own SECOND GAP the
// adjacent pair at index one prices. The fixture columns the .364 and
// the .365 tests embed re-ride byte-faithful: the second breath the
// COLUMNS' own arithmetic prices and the archive's own census the
// SAME numbers voices (F509's constructive 0 and F519's 82 and
// F527's 8 and F549's real zero and F558's 59 and the fresh F560's 7
// the probe's own window keeps - no drift the storm census prices).

// F509's own full join column - the CONSTRUCTIVE face (22 echoes 20
// names - the F16's own TWO re-join events the ONE storm gap keeps -
// the fewer-than-two-gaps face the second breath the constructive
// zero keeps: the .364 word's own floor trio the FIRST breath voiced,
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

// F519's own full join column - the ABOVE-DIALOG face (26 echoes 20
// names - the five-gap storm the second breath 82 ABOVE the median 11
// keeps - the runner-up IS the max the ceiling law's own face prices)
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
// the seven-gap storm the second breath 8 the median 8 the level
// keeps: the storm's own zero face the second breath the level rides)
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

// F549's own full join column - the REAL ZERO face (29 echoes 20
// names - the eight-gap storm the second gap ZERO the F14 and the F13
// the SAME SECOND 11:59:58 pair the second adjacent pair keeps - the
// real zero the same-second second arrival prices, the count 8 the
// voiced storm the constructive branch never rides)
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

// F558's own full join column - the CEILING face (38 echoes 20 names
// - the seventeen-gap storm the second breath 59 the storm's own
// TALLEST silence the runner-up IS keeps - the ceiling law's own face
// the above-dialog 59 above the median 9 rides)
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

// F560's own full join column - the FRESH face (39 echoes 20 names -
// the eighteen-gap storm the second breath 7 ABOVE the median 6 the
// F14 eleven-reign the fresh tail prices - the F560 dispatch the
// .364 tree face the window's own tail keeps)
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

// the REAL FIFTY-EIGHT-face window arc F501-F560 (the inventory's own
// order the harvest order keeps, the F552 zombie's own number the
// face never rode, the F557 gate face the window keeps OUT - the
// small fleet's own regime the integration leg rides) - THIRTY-FOUR
// distinct classes no face born-constant (the prev window F501-F559
// the same THIRTY-FOUR): the 0 the seven-face gravity keeps (the
// constructive four and the real zero three the pair keeps), the 170
// the ceiling face F516 keeps, the 7 the fresh tail F560 pairs the
// F535 keeps, MANY values speak
const REAL_ARC = [5,21,6,23,25,9,63,64,0,38,5,0,99,2,23,170,6,47,82,56,29,19,23,6,8,38,8,95,0,59,20,47,117,8,7,18,6,4,95,37,89,8,61,4,0,33,37,5,0,0,71,108,35,86,5,59,0,7]

test('REAL faces byte-exact - the second breath the runner-up prices', () => {
  // the constructive face: the ONE storm gap the second pair no list
  // holds the constructive zero keeps
  assert.equal(rejoinStormSecondBreathCensus(REAL_F509).rejoinStormSecondBreath, 0)
  // the above-dialog face: the five-gap storm the runner-up 82
  assert.equal(rejoinStormSecondBreathCensus(REAL_F519).rejoinStormSecondBreath, 82)
  // the level face: the seven-gap storm the second 8 the median 8
  assert.equal(rejoinStormSecondBreathCensus(REAL_F527).rejoinStormSecondBreath, 8)
  // the REAL zero face: the F14 and the F13 the SAME SECOND 11:59:58
  // the second adjacent pair zero the eight-gap storm voices
  assert.equal(rejoinStormSecondBreathCensus(REAL_F549).rejoinStormSecondBreath, 0)
  // the ceiling face: the seventeen-gap storm the runner-up 59 IS
  // the max
  assert.equal(rejoinStormSecondBreathCensus(REAL_F558).rejoinStormSecondBreath, 59)
  // the fresh face: the eighteen-gap storm the second breath 7
  assert.equal(rejoinStormSecondBreathCensus(REAL_F560).rejoinStormSecondBreath, 7)
  // the non-array the honest null keeps
  assert.equal(rejoinStormSecondBreathCensus(null), null)
  assert.equal(rejoinStormSecondBreathCensus('no'), null)
  assert.equal(rejoinStormSecondBreathCensus(42), null)
})

test('the BOUND + DIALOG + CEILING laws - the edges the runner-up bounds keep', () => {
  // the storm cadence hand the fixtures re-voice inline - the BOUND
  // law the .358 storm min <= second <= the .352 re-join gap and
  // second <= the .350 span every voiced fixture (the REAL archive
  // audit GREEN the probe keeps)
  const read = (lines) => {
    const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
    const tally = new Map()
    const revts = []
    for (const l of lines) {
      const m = RE.exec(l)
      if (!m) continue
      const n = (tally.get(m[4]) || 0) + 1
      tally.set(m[4], n)
      if (n > 1) revts.push(Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]))
    }
    const gaps = []
    for (let i = 1; i < revts.length; i++) {
      const cur = revts[i - 1]
      const nxt = revts[i]
      gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur)
    }
    return {
      second: gaps.length > 1 ? gaps[1] : 0,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      span: gaps.reduce((a, b) => a + b, 0),
      med: (() => { if (!gaps.length) return 0; const s = [...gaps].sort((a, b) => a - b); const m = Math.floor(s.length / 2); return s.length % 2 ? s[m] : Math.floor((s[m - 1] + s[m]) / 2) })()
    }
  }
  for (const col of [REAL_F509, REAL_F519, REAL_F527, REAL_F549, REAL_F558, REAL_F560]) {
    const r = read(col)
    const second = rejoinStormSecondBreathCensus(col).rejoinStormSecondBreath
    assert.equal(second, r.second)
    assert.ok(second >= r.min && second <= r.max, `bound ${second} in [${r.min},${r.max}]`)
    assert.ok(second <= r.span)
  }
  // the DIALOG's own edges the fixtures voice: the F509 under face
  // (the constructive 0 UNDER the 28) and the F527 level face (the
  // second IS the median 8) and the F519 above face (82 ABOVE the 11)
  // and the F560 above face (7 ABOVE the 6 the fresh tail)
  assert.ok(read(REAL_F509).second < read(REAL_F509).med)
  assert.equal(read(REAL_F527).second, read(REAL_F527).med)
  assert.ok(read(REAL_F519).second > read(REAL_F519).med)
  assert.ok(read(REAL_F560).second > read(REAL_F560).med)
  // the CEILING's own faces: the F558 runner-up IS the storm's
  // tallest silence (59) and the F519 the 82 ceiling rides
  assert.equal(read(REAL_F558).second, read(REAL_F558).max)
  assert.equal(read(REAL_F519).second, read(REAL_F519).max)
  // the constructive zero vs the REAL zero: the F509 the ONE gap the
  // no-second-pair face keeps, the F549 the eight-gap storm the
  // same-second second pair the zero the list voices
  assert.equal(read(REAL_F509).second, 0)
  assert.ok(read(REAL_F509).max > 0) // the 28 giant the first gap keeps
  assert.equal(read(REAL_F549).second, 0)
  assert.equal(read(REAL_F549).max, 310) // the 310 giant the first gap keeps
  // the synthetic branches: the one-echo face the zero keeps, the
  // single-re-join face the ONE gap the constructive keeps, the
  // two-gap face the second gap the list voices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinStormSecondBreathCensus(oneEcho), { rejoinStormSecondBreath: 0 })
  const singleEvent = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinStormSecondBreathCensus(singleEvent), { rejoinStormSecondBreath: 0 })
  const twoGaps = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:02:00] [Server thread/INFO]: F3 joined the game',
    '[04:02:30] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinStormSecondBreathCensus(twoGaps), { rejoinStormSecondBreath: 30 }) // the 60 then the 30 the second pair keeps
})

test('REAL 58-face window arc byte-exact - 34 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 58)
  assert.equal(classes.size, 34)
  assert.equal(Math.min(...arc), 0) // the SEVEN-face zero keeps (the constructive four F509/F529/F545/F559 + the real three F512/F549/F550)
  assert.equal(Math.max(...arc), 170) // the ceiling face F516 keeps
  // the zero faces the honest distinction prices (F509 index 8 the
  // constructive single-gap, F512 index 11 the real seventeen-gap
  // pair, F549 index 48 and F550 index 49 the held zeros, F559 index
  // 56 the one-echo tail)
  assert.equal(arc[8], 0)
  assert.equal(arc[11], 0)
  assert.equal(arc[48], 0)
  assert.equal(arc[49], 0)
  assert.equal(arc[56], 0)
  // the ceiling face F516 (index 15 the 170) and the above-dialog
  // faces (F519 index 18 the 82, F558 index 55 the 59) and the level
  // F527 (index 26 the 8) and the fresh tail F560 (index 57 the 7)
  assert.equal(arc[15], 170)
  assert.equal(arc[18], 82)
  assert.equal(arc[55], 59)
  assert.equal(arc[26], 8)
  assert.equal(arc[57], 7)
  // the ONE held pair the F549/F550 zeros keep (indices 48/49 - the
  // .364 storm arc's held pair the F534/F535 eights the second arc
  // does NOT inherit)
  assert.equal(arc[48], 0)
  assert.equal(arc[49], 0)
  // the multi-count classes the honest arithmetic keeps (0 x7, 5/6/8
  // x4, 23 x3, 4/7/37/38/47/59/95 x2 - the twenty-two singletons the
  // rest)
  const counts = {}
  for (const v of arc) counts[v] = (counts[v] || 0) + 1
  assert.equal(counts[0], 7)
  assert.equal(counts[5], 4)
  assert.equal(counts[6], 4)
  assert.equal(counts[8], 4)
  assert.equal(counts[23], 3)
  assert.equal(counts[4], 2)
  assert.equal(counts[7], 2)
  assert.equal(counts[37], 2)
  assert.equal(counts[38], 2)
  assert.equal(counts[47], 2)
  assert.equal(counts[59], 2)
  assert.equal(counts[95], 2)
  assert.equal(counts[170], 1)
  assert.equal(counts[82], 1)
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
  const empty = { rejoinStormSecondBreath: 0 }
  assert.deepEqual(rejoinStormSecondBreathCensus(['x', 'y']), empty)
})

test('fence - every branch the gap words own integer law keeps', () => {
  const ok = (n) => ({ rejoinStormSecondBreath: n })
  // the all-integer in-range triple the true keeps (the .352 re-join
  // gap word's own fence the day ceiling the precedent keeps)
  assert.equal(rejoinStormSecondBreathConsistent({ back: ok(0), prev: ok(170), cur: ok(86399) }), true)
  // the non-integer the false keeps
  assert.equal(rejoinStormSecondBreathConsistent({ back: ok(0.5), prev: ok(0), cur: ok(0) }), false)
  // the negative the false keeps (the gap never negative)
  assert.equal(rejoinStormSecondBreathConsistent({ back: ok(-1), prev: ok(0), cur: ok(0) }), false)
  // the day-overflow the false keeps
  assert.equal(rejoinStormSecondBreathConsistent({ back: ok(86400), prev: ok(0), cur: ok(0) }), false)
  // the string skin the false keeps
  assert.equal(rejoinStormSecondBreathConsistent({ back: ok('170'), prev: ok(0), cur: ok(0) }), false)
  // the missing field the false keeps
  assert.equal(rejoinStormSecondBreathConsistent({ back: ok(0), prev: ok(0) }), false)
  // the null and the bare the false keeps
  assert.equal(rejoinStormSecondBreathConsistent(null), false)
  assert.equal(rejoinStormSecondBreathConsistent(0), false)
  assert.equal(rejoinStormSecondBreathConsistent({}), false)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const e = (b, p, c) => ({ back: { rejoinStormSecondBreath: b }, prev: { rejoinStormSecondBreath: p }, cur: { rejoinStormSecondBreath: c } })
  // the REAL swell (F517 -> F519): 6 -> 47 (+41) -> 82 (+35)
  const swell = rejoinStormSecondBreathTrendRow(e(6, 47, 82))
  assert.match(swell, /storm second breath swell ran two steps deep - 6 -> 47 \(\+41\) -> 82 \(\+35\)/)
  assert.match(swell, /lengthened each face/)
  // the REAL fade (F519 -> F521): 82 -> 56 (-26) -> 29 (-27)
  const fade = rejoinStormSecondBreathTrendRow(e(82, 56, 29))
  assert.match(fade, /storm second breath fade ran two steps deep - 82 -> 56 \(-26\) -> 29 \(-27\)/)
  assert.match(fade, /shortened each face/)
  // the REAL swing (F507 -> F509): 63 -> 64 (+1) -> 0 (-64) - the
  // constructive zero's own swing the window prices
  const swing = rejoinStormSecondBreathTrendRow(e(63, 64, 0))
  assert.match(swing, /storm second breath swing - 63 -> 64 \(\+1\) -> 0 \(-64\)/)
  assert.match(swing, /traded its second breath/)
  // the REAL held window the archive's own pair keeps (F548 -> F550:
  // 5 -> 0 -> 0 the held second step - the honest silence)
  assert.equal(rejoinStormSecondBreathTrendRow(e(5, 0, 0)), null)
  // the tail the sibling seats name (the co-existence by seat law -
  // the .365 champion first breath word the fresh sibling keeps)
  const row = rejoinStormSecondBreathTrendRow(e(6, 47, 82))
  for (const seat of ['.346 re-join bin', '.347 re-join bots', '.348 re-join peak', '.349 re-join peak name', '.350 re-join span', '.351 champion stretch', '.352 re-join gap', '.353 champion gap', '.354 mean breath', '.355 champion mean breath', '.356 storm median breath', '.357 champion median breath', '.358 storm min breath', '.359 champion min breath', '.360 storm breath range', '.361 champion breath range', '.362 storm breath count', '.363 champion breath count', '.364 storm first breath', '.365 champion first breath']) {
    assert.match(row, new RegExp(seat.replace(/\./g, '\\.') + ' word prices'))
  }
  // the fence breach the honest silence keeps
  assert.equal(rejoinStormSecondBreathTrendRow(null), null)
  assert.equal(rejoinStormSecondBreathTrendRow({ back: { rejoinStormSecondBreath: 0.5 }, prev: { rejoinStormSecondBreath: 1 }, cur: { rejoinStormSecondBreath: 2 } }), null)
})
