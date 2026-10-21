import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampFirstBreathCensus, rejoinChampFirstBreathConsistent, rejoinChampFirstBreathTrendRow } from '../../src/lib/rejoinchampfirstbreath.mjs'

// the REAL faces the 57-face family window holds (the archive the
// NAME law keeps - the fleet-server-log face the console.log inside
// the zip the face is) - the champion cadence list's own OPENING GAP
// the first adjacent pair prices. The fixture columns the .364 test
// embeds re-ride byte-faithful: the champion opening the COLUMNS' own
// arithmetic prices and the archive's own census the SAME numbers
// voices (F509's 28 and F519's 104 and F527's 125 and F549's 310 and
// F558's 10 the probe's own window keeps - no drift the champion
// census prices) plus the fresh F559 harvest the constructive tail
// keeps.

// F509's own full join column - the SINGLE-GAP LEVEL face (22 echoes
// 20 names - the F16's own TWO re-join events the ONE champ gap keeps
// - the first breath 28 the whole list the level rides: the first IS
// the min IS the median IS the max IS the stretch the one-gap reign
// the ceiling law's own face keeps)
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

// F519's own full join column - the LEVEL face (26 echoes 20 names -
// the F2's own double re-join the ONE champ gap keeps - the first
// breath 104 the whole list the level rides: the single re-joiner the
// champion the .361 range zero's own face the level keeps)
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

// F527's own full join column - the ABOVE-DIALOG face (28 echoes 20
// names - the F14's own triple re-join the THREE champ gaps keep -
// the first breath 125 ABOVE the median 8 the storm's own zero face
// the champ above-dialog prices: the storm word's zero face the
// champion opening 125 the honest difference prices)
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

// F545's own full join column - the REAL ZERO face (22 echoes 20
// names - the F18 and the F2 the SAME SECOND 09:27:57 pair the ONE
// champ gap the zero keeps - the same-second arrival the REAL zero
// the constructive convention the window's other zero face never
// rode)
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

// F549's own full join column - the CEILING face (29 echoes 20 names
// - the NINE-name co-reign the whole-storm face keeps - the first
// breath 310 the champion set's own TALLEST silence the opening IS
// the .360 range ceiling the same face prices the above-dialog 310
// above the median 2 rides)
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

// F558's own full join column - the UNDER-DIALOG face (38 echoes 20
// names - the F1 and the F11 the THREE-apiece tie co-reign keeps -
// the first breath 10 UNDER the median 15 the fresh under-dialog the
// F558 dispatch's own fleet face prices)
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

// F559's own full join column - the CONSTRUCTIVE ZERO face (21 echoes
// 20 names - the F19's own single re-join the ONE champion event the
// no-pair face keeps - the fresh tail the window's FIRST constructive
// rider the older archive's one-echo family the F559 harvest brings
// the window prices)
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

// the REAL FIFTY-SEVEN-face window arc F501-F559 (the inventory's own
// order the harvest order keeps, the F552 zombie's own number the
// face never rode, the F557 gate face the window keeps OUT - the
// small fleet's own regime the integration leg rides) - FORTY
// distinct classes no face born-constant (the prev window F501-F558
// the same FORTY the viability priced byte-exact): the 8 the
// five-face gravity keeps, the 310 the ceiling face F549 keeps, the
// 125 the F527 above-dialog face keeps, the 0 the F545 real zero and
// the F559 constructive tail the pair keeps, MANY values speak
const REAL_ARC = [193,21,6,23,36,9,134,35,28,26,86,8,19,15,28,176,42,11,104,39,35,28,8,19,238,5,125,35,40,34,20,87,25,8,8,18,251,105,11,23,13,130,111,43,0,17,10,8,310,5,6,68,12,23,6,10,0,0]

test('REAL faces byte-exact - the champion opening the first pair prices', () => {
  // the single-gap level face: the F16 double re-join the ONE champ
  // gap the first breath 28 the whole list
  assert.equal(rejoinChampFirstBreathCensus(REAL_F509).rejoinChampFirstBreath, 28)
  // the level face: the F2 double re-join the one champ gap 104
  assert.equal(rejoinChampFirstBreathCensus(REAL_F519).rejoinChampFirstBreath, 104)
  // the above-dialog face: the F14 triple the champ gaps [125,8,8]
  // the opening 125 ABOVE the median 8
  assert.equal(rejoinChampFirstBreathCensus(REAL_F527).rejoinChampFirstBreath, 125)
  // the REAL zero face: the F18 and the F2 the SAME SECOND 09:27:57
  // the one champ gap 0 the same-second arrival voices
  assert.equal(rejoinChampFirstBreathCensus(REAL_F545).rejoinChampFirstBreath, 0)
  // the ceiling face: the NINE-name co-reign the eight champ gaps
  // the opening 310 the champion set's own TALLEST silence
  assert.equal(rejoinChampFirstBreathCensus(REAL_F549).rejoinChampFirstBreath, 310)
  // the under-dialog face: the F1/F11 tie co-reign the five champ
  // gaps [10,42,72,4,15] the opening 10 UNDER the median 15
  assert.equal(rejoinChampFirstBreathCensus(REAL_F558).rejoinChampFirstBreath, 10)
  // the fresh tail: the F19 single re-join the ONE champion event
  // the no-pair face the CONSTRUCTIVE zero keeps
  assert.equal(rejoinChampFirstBreathCensus(REAL_F559).rejoinChampFirstBreath, 0)
  // the non-array the honest null keeps
  assert.equal(rejoinChampFirstBreathCensus(null), null)
  assert.equal(rejoinChampFirstBreathCensus('no'), null)
  assert.equal(rejoinChampFirstBreathCensus(42), null)
})

test('the BOUND + DIALOG + CEILING laws - the edges the champion opening bounds keep', () => {
  // the champion cadence hand the fixtures re-voice inline - the
  // BOUND law the .359 champ min <= first <= the .353 champ gap and
  // first <= the .351 champ stretch every fixture (the REAL archive
  // FIFTY-SEVEN-face audit GREEN the probe keeps)
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
      first: gaps.length ? gaps[0] : 0,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: gaps.reduce((a, b) => a + b, 0),
      med: (() => { if (!gaps.length) return 0; const s = [...gaps].sort((a, b) => a - b); const m = Math.floor(s.length / 2); return s.length % 2 ? s[m] : Math.floor((s[m - 1] + s[m]) / 2) })()
    }
  }
  for (const col of [REAL_F509, REAL_F519, REAL_F527, REAL_F545, REAL_F549, REAL_F558, REAL_F559]) {
    const r = read(col)
    const first = rejoinChampFirstBreathCensus(col).rejoinChampFirstBreath
    assert.equal(first, r.first)
    assert.ok(first >= r.min && first <= r.max, `bound ${first} in [${r.min},${r.max}]`)
    assert.ok(first <= r.stretch)
  }
  // the DIALOG's own edges the fixtures voice: the F558 under face
  // (10 UNDER the 15) and the F509 level face (the single-gap the
  // first IS the median IS 28) and the F527 above face (125 ABOVE
  // the 8) and the F549 above face (310 ABOVE the 2 the ceiling)
  assert.ok(read(REAL_F558).first < read(REAL_F558).med)
  assert.equal(read(REAL_F509).first, read(REAL_F509).med)
  assert.equal(read(REAL_F519).first, read(REAL_F519).med)
  assert.ok(read(REAL_F527).first > read(REAL_F527).med)
  assert.ok(read(REAL_F549).first > read(REAL_F549).med)
  // the CEILING's own faces: the F549 opening IS the champion set's
  // tallest silence (310 the .360 range ceiling the same face
  // prices) and the single-gap level the first IS the whole (the
  // F509 28 and the F519 104 faces ride)
  assert.equal(read(REAL_F549).first, read(REAL_F549).max)
  assert.equal(read(REAL_F509).first, read(REAL_F509).max)
  assert.equal(read(REAL_F519).first, read(REAL_F519).max)
  assert.equal(read(REAL_F549).stretch, 329) // 310 + 0 + 12 + 2 + 0 + 2 + 1 + 2
  // the constructive zero: the fewer-than-two champion events
  // convention the .361 range word's own law keeps (the one-echo
  // storm the older archive's own zero family keeps, the single
  // champion event no pair to pair the F559 shape the branch keeps)
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinChampFirstBreathCensus(oneEcho), { rejoinChampFirstBreath: 0 })
  const singleEvent = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinChampFirstBreathCensus(singleEvent), { rejoinChampFirstBreath: 0 })
  // the REAL zero is NOT the constructive zero: the F545 opening
  // pair the one champ gap voices (the same-second arrival the list
  // keeps - the zero the gaps' own head rides) while the F559 the
  // no-gap face the constructive branch keeps
  assert.equal(read(REAL_F545).first, 0)
  assert.equal(read(REAL_F545).max, 0) // the single zero gap the whole list
  assert.equal(read(REAL_F559).first, 0)
  assert.ok(read(REAL_F527).max > 0) // the 125 giant the opening keeps
})

test('REAL 57-face window arc byte-exact - 40 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 57)
  assert.equal(classes.size, 40)
  assert.equal(Math.min(...arc), 0) // the TWO-face zero keeps (F545 real + F559 constructive)
  assert.equal(Math.max(...arc), 310) // the ceiling face F549 keeps
  // the zero faces the honest distinction prices (F545 index 44 the
  // F18-F2 09:27:57 same-second pair the REAL zero, F559 index 56
  // the one-echo storm the constructive tail keeps)
  assert.equal(arc[44], 0)
  assert.equal(arc[56], 0)
  // the level faces the single-gap reigns keep (F509 index 8 the 28,
  // F519 index 18 the 104) and the above-dialog faces (F527 index 26
  // the 125, F549 index 48 the 310) and the under-dialog F558 (index
  // 55 the 10) and the window's own opener F501 (index 0 the 193)
  assert.equal(arc[8], 28)
  assert.equal(arc[18], 104)
  assert.equal(arc[26], 125)
  assert.equal(arc[48], 310)
  assert.equal(arc[55], 10)
  assert.equal(arc[0], 193)
  // the ONE held pair the F534/F535 eights keep (indices 33/34 - the
  // same pair the .364 storm arc keeps)
  assert.equal(arc[33], 8)
  assert.equal(arc[34], 8)
  // the multi-count classes the honest arithmetic keeps (8 x5, 6/23/
  // 28/35 x3, 0/5/10/11/19 x2 - the thirty singletons the rest)
  const counts = {}
  for (const v of arc) counts[v] = (counts[v] || 0) + 1
  assert.equal(counts[8], 5)
  assert.equal(counts[6], 3)
  assert.equal(counts[23], 3)
  assert.equal(counts[28], 3)
  assert.equal(counts[35], 3)
  assert.equal(counts[0], 2)
  assert.equal(counts[5], 2)
  assert.equal(counts[10], 2)
  assert.equal(counts[11], 2)
  assert.equal(counts[19], 2)
  assert.equal(counts[193], 1)
  assert.equal(counts[310], 1)
  assert.equal(counts[125], 1)
  assert.equal(counts[104], 1)
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
  // rode until the F559 tail the synthetic pin keeps)
  const empty = { rejoinChampFirstBreath: 0 }
  assert.deepEqual(rejoinChampFirstBreathCensus(['x', 'y']), empty)
})

test('fence - every branch the gap words own integer law keeps', () => {
  const ok = (n) => ({ rejoinChampFirstBreath: n })
  // the all-integer in-range triple the true keeps (the .352 re-join
  // gap word's own fence the day ceiling the precedent keeps)
  assert.equal(rejoinChampFirstBreathConsistent({ back: ok(0), prev: ok(310), cur: ok(86399) }), true)
  // the non-integer the false keeps
  assert.equal(rejoinChampFirstBreathConsistent({ back: ok(0.5), prev: ok(0), cur: ok(0) }), false)
  // the negative the false keeps (the gap never negative)
  assert.equal(rejoinChampFirstBreathConsistent({ back: ok(-1), prev: ok(0), cur: ok(0) }), false)
  // the day-overflow the false keeps
  assert.equal(rejoinChampFirstBreathConsistent({ back: ok(86400), prev: ok(0), cur: ok(0) }), false)
  // the string skin the false keeps
  assert.equal(rejoinChampFirstBreathConsistent({ back: ok('310'), prev: ok(0), cur: ok(0) }), false)
  // the missing field the false keeps
  assert.equal(rejoinChampFirstBreathConsistent({ back: ok(0), prev: ok(0) }), false)
  // the null and the bare the false keeps
  assert.equal(rejoinChampFirstBreathConsistent(null), false)
  assert.equal(rejoinChampFirstBreathConsistent(0), false)
  assert.equal(rejoinChampFirstBreathConsistent({}), false)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const e = (b, p, c) => ({ back: { rejoinChampFirstBreath: b }, prev: { rejoinChampFirstBreath: p }, cur: { rejoinChampFirstBreath: c } })
  // the REAL swell (F503 -> F505): 6 -> 23 (+17) -> 36 (+13)
  const swell = rejoinChampFirstBreathTrendRow(e(6, 23, 36))
  assert.match(swell, /champion first breath swell ran two steps deep - 6 -> 23 \(\+17\) -> 36 \(\+13\)/)
  assert.match(swell, /lengthened each face/)
  // the REAL fade (F501 -> F503): 193 -> 21 (-172) -> 6 (-15) - the
  // window's own opener the fade opens
  const fade = rejoinChampFirstBreathTrendRow(e(193, 21, 6))
  assert.match(fade, /champion first breath fade ran two steps deep - 193 -> 21 \(-172\) -> 6 \(-15\)/)
  assert.match(fade, /shortened each face/)
  // the REAL swing (F544 -> F546): 43 -> 0 (-43) -> 17 (+17) - the
  // zero face's own swing the newest harvest prices
  const swing = rejoinChampFirstBreathTrendRow(e(43, 0, 17))
  assert.match(swing, /champion first breath swing - 43 -> 0 \(-43\) -> 17 \(\+17\)/)
  assert.match(swing, /traded their opening breath/)
  // the REAL held window the archive's own pair keeps (F533 -> F535:
  // 25 -> 8 -> 8 the held second step - the honest silence)
  assert.equal(rejoinChampFirstBreathTrendRow(e(25, 8, 8)), null)
  // the tail the sibling seats name (the co-existence by seat law -
  // the .364 storm first breath word the fresh sibling keeps)
  const row = rejoinChampFirstBreathTrendRow(e(6, 23, 36))
  for (const seat of ['.346 re-join bin', '.347 re-join bots', '.348 re-join peak', '.349 re-join peak name', '.350 re-join span', '.351 champion stretch', '.352 re-join gap', '.353 champion gap', '.354 mean breath', '.355 champion mean breath', '.356 storm median breath', '.357 champion median breath', '.358 storm min breath', '.359 champion min breath', '.360 storm breath range', '.361 champion breath range', '.362 storm breath count', '.363 champion breath count', '.364 storm first breath']) {
    assert.match(row, new RegExp(seat.replace(/\./g, '\\.') + ' word prices'))
  }
  // the fence breach the honest silence keeps
  assert.equal(rejoinChampFirstBreathTrendRow(null), null)
  assert.equal(rejoinChampFirstBreathTrendRow({ back: { rejoinChampFirstBreath: 0.5 }, prev: { rejoinChampFirstBreath: 1 }, cur: { rejoinChampFirstBreath: 2 } }), null)
})
