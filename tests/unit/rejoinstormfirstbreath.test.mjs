import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormFirstBreathCensus, rejoinStormFirstBreathConsistent, rejoinStormFirstBreathTrendRow } from '../../src/lib/rejoinstormfirstbreath.mjs'

// the REAL faces the 56-face family window holds (the archive the
// NAME law keeps - the fleet-server-log face the console.log inside
// the zip the face is) - the storm cadence list's own OPENING GAP the
// first adjacent pair prices. The fixture columns the .363 test
// embeds re-ride byte-faithful: the first breath the COLUMNS' own
// arithmetic prices and the archive's own census the SAME numbers
// voices (F509's 28 and F519's 6 and F527's 0 and F549's 310 and
// F558's 17 the probe's own window keeps - no drift the storm census
// prices).

// F509's own full join column - the SINGLE-GAP LEVEL face (22 echoes
// 20 names - the F16's own TWO re-join events the ONE storm gap keeps
// - the first breath 28 the whole list the level rides: the first IS
// the min IS the median IS the max IS the span the one-gap storm the
// .362 word's own floor trio keeps)
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

// F519's own full join column - the UNDER-DIALOG face (26 echoes 20
// names - the five-gap storm the first breath 6 UNDER the median 11
// keeps - the opening the calmest breath the storm's own list voices
// the under-dialog the family window's own gravity keeps)
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

// F527's own full join column - the ZERO face (28 echoes 20 names -
// the storm's own first TWO re-join events the SAME SECOND keeps: the
// F12 and the F14 the 18:57:38 pair the opening breath 0 the eight-gap
// storm voices - the REAL zero the same-second arrival the
// constructive zero the older archive's one-echo storms rode the
// window never rode)
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

// F549's own full join column - the CEILING face (29 echoes 20 names
// - the eight-gap storm the first breath 310 the storm's own TALLEST
// silence the opening IS keeps - the .360 range ceiling the same face
// prices the ceiling law's own face the above-dialog 310 above the
// median 2 rides)
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

// F558's own full join column - the FRESH face (38 echoes 20 names -
// the seventeen-gap storm the first breath 17 the window's own tail
// the newest harvest prices - the above-dialog 17 above the median 9
// the F558 dispatch's own fleet face keeps)
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

// the REAL FIFTY-SIX-face window arc F501-F558 (the inventory's own
// order the harvest order keeps, the F552 zombie's own number the
// face never rode, the F557 gate face the window keeps OUT - the
// small fleet's own regime the integration leg rides) - FORTY-ONE
// distinct classes no face born-constant: the 6 the five-face gravity
// keeps, the 310 the ceiling face F549 keeps, the 17 the fresh tail
// F558 keeps, MANY values speak
const REAL_ARC = [137,54,119,23,36,148,134,35,28,144,86,127,19,8,5,51,42,144,6,39,56,27,3,22,5,42,0,35,40,34,20,87,25,8,8,6,93,14,52,12,6,130,23,34,0,68,10,8,310,94,6,7,95,23,6,17]

test('REAL faces byte-exact - the first breath the opening law prices', () => {
  // the single-gap level face: the F16 double re-join the ONE storm
  // gap the first breath 28 the whole list
  assert.equal(rejoinStormFirstBreathCensus(REAL_F509).rejoinStormFirstBreath, 28)
  // the under-dialog face: the five-gap storm the opening 6 UNDER the
  // median 11
  assert.equal(rejoinStormFirstBreathCensus(REAL_F519).rejoinStormFirstBreath, 6)
  // the zero face: the F12 and the F14 the SAME SECOND 18:57:38 the
  // opening breath 0 the eight-gap storm voices
  assert.equal(rejoinStormFirstBreathCensus(REAL_F527).rejoinStormFirstBreath, 0)
  // the ceiling face: the eight-gap storm the opening 310 the
  // storm's own TALLEST silence the opening IS
  assert.equal(rejoinStormFirstBreathCensus(REAL_F549).rejoinStormFirstBreath, 310)
  // the fresh face: the seventeen-gap storm the window's own tail 17
  assert.equal(rejoinStormFirstBreathCensus(REAL_F558).rejoinStormFirstBreath, 17)
  // the non-array the honest null keeps
  assert.equal(rejoinStormFirstBreathCensus(null), null)
  assert.equal(rejoinStormFirstBreathCensus('no'), null)
  assert.equal(rejoinStormFirstBreathCensus(42), null)
})

test('the BOUND + DIALOG + CEILING laws - the edges the opening bounds keep', () => {
  // the storm cadence hand the fixtures re-voice inline - the BOUND
  // law the .358 storm min <= first <= the .352 re-join gap and
  // first <= the .350 span every fixture (the REAL archive FIFTY-SIX
  // -face audit GREEN the probe keeps)
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
      first: gaps.length ? gaps[0] : 0,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      span: gaps.reduce((a, b) => a + b, 0),
      med: (() => { if (!gaps.length) return 0; const s = [...gaps].sort((a, b) => a - b); const m = Math.floor(s.length / 2); return s.length % 2 ? s[m] : Math.floor((s[m - 1] + s[m]) / 2) })()
    }
  }
  for (const col of [REAL_F509, REAL_F519, REAL_F527, REAL_F549, REAL_F558]) {
    const r = read(col)
    const first = rejoinStormFirstBreathCensus(col).rejoinStormFirstBreath
    assert.equal(first, r.first)
    assert.ok(first >= r.min && first <= r.max, `bound ${first} in [${r.min},${r.max}]`)
    assert.ok(first <= r.span)
  }
  // the DIALOG's own edges the fixtures voice: the F519 under face
  // (6 UNDER the 11) and the F509 level face (the single-gap the
  // first IS the median IS 28) and the F549 above face (310 ABOVE
  // the 2 the ceiling)
  assert.ok(read(REAL_F519).first < read(REAL_F519).med)
  assert.equal(read(REAL_F509).first, read(REAL_F509).med)
  assert.ok(read(REAL_F549).first > read(REAL_F549).med)
  // the CEILING's own face: the F549 opening IS the storm's tallest
  // silence (the .360 range ceiling the same face prices) and the
  // F509 single-gap the level keeps (the one-gap storm the first IS
  // the whole)
  assert.equal(read(REAL_F549).first, read(REAL_F549).max)
  assert.equal(read(REAL_F509).first, read(REAL_F509).max)
  assert.equal(read(REAL_F509).first, read(REAL_F509).span)
  // the constructive zero: the fewer-than-two-events convention the
  // .361 range word's own law keeps (the one-echo storm the older
  // archive's own zero family keeps, the single re-join event no
  // pair to pair the same branch the window never rode)
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinStormFirstBreathCensus(oneEcho), { rejoinStormFirstBreath: 0 })
  const singleEvent = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinStormFirstBreathCensus(singleEvent), { rejoinStormFirstBreath: 0 })
  // the REAL zero is NOT the constructive zero: the F527 opening
  // pair the eight-gap storm voices (the same-second arrival the
  // list keeps - the zero the gaps' own head rides)
  const f527 = read(REAL_F527)
  assert.equal(f527.first, 0)
  assert.ok(f527.max > 0) // the 110 giant the tail keeps
})

test('REAL 56-face window arc byte-exact - 41 classes the seat LIVE', () => {
  // the arc the fieldread re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 56)
  assert.equal(classes.size, 41)
  assert.equal(Math.min(...arc), 0) // the TWO-face zero keeps (F527 F545)
  assert.equal(Math.max(...arc), 310) // the ceiling face F549 keeps
  // the zero faces the same-second arrival prices (F527 index 26 the
  // F12-F14 18:57:38 pair, F545 index 44 the F18-F2 09:27:57 pair
  // the .360 all-zero co-reign face keeps)
  assert.equal(arc[26], 0)
  assert.equal(arc[44], 0)
  // the single-gap trio the level rides (F509 index 8 the 28, F529
  // index 28 the 40, F545 index 44 the 0 - the .362 word's own floor
  // trio the same faces voice)
  assert.equal(arc[8], 28)
  assert.equal(arc[28], 40)
  // the ceiling face F549 (index 48) and the window's own opener
  // F501 (index 0 the 137 the ceiling order keeps) and the fresh
  // tail F558 (index 55 the 17)
  assert.equal(arc[48], 310)
  assert.equal(arc[0], 137)
  assert.equal(arc[55], 17)
  // the ONE held pair the F534/F535 eights keep (indices 33/34 - the
  // .362 storm count arc's own TWO held pairs the first-breath arc
  // does NOT inherit)
  assert.equal(arc[33], 8)
  assert.equal(arc[34], 8)
  // the multi-count classes the honest arithmetic keeps (6 x5, 8 x4,
  // 23 x3, 0/5/35/144/42/34 x2 - the thirty-two singletons the rest)
  const counts = {}
  for (const v of arc) counts[v] = (counts[v] || 0) + 1
  assert.equal(counts[6], 5)
  assert.equal(counts[8], 4)
  assert.equal(counts[23], 3)
  assert.equal(counts[0], 2)
  assert.equal(counts[5], 2)
  assert.equal(counts[35], 2)
  assert.equal(counts[144], 2)
  assert.equal(counts[42], 2)
  assert.equal(counts[34], 2)
  assert.equal(counts[137], 1)
  assert.equal(counts[310], 1)
  assert.equal(counts[17], 1)
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
  const empty = { rejoinStormFirstBreath: 0 }
  assert.deepEqual(rejoinStormFirstBreathCensus(['x', 'y']), empty)
})

test('fence - every branch the gap words own integer law keeps', () => {
  const ok = (n) => ({ rejoinStormFirstBreath: n })
  // the all-integer in-range triple the true keeps (the .352 re-join
  // gap word's own fence the day ceiling the precedent keeps)
  assert.equal(rejoinStormFirstBreathConsistent({ back: ok(0), prev: ok(310), cur: ok(86399) }), true)
  // the non-integer the false keeps
  assert.equal(rejoinStormFirstBreathConsistent({ back: ok(0.5), prev: ok(0), cur: ok(0) }), false)
  // the negative the false keeps (the gap never negative)
  assert.equal(rejoinStormFirstBreathConsistent({ back: ok(-1), prev: ok(0), cur: ok(0) }), false)
  // the day-overflow the false keeps
  assert.equal(rejoinStormFirstBreathConsistent({ back: ok(86400), prev: ok(0), cur: ok(0) }), false)
  // the string skin the false keeps
  assert.equal(rejoinStormFirstBreathConsistent({ back: ok('310'), prev: ok(0), cur: ok(0) }), false)
  // the missing field the false keeps
  assert.equal(rejoinStormFirstBreathConsistent({ back: ok(0), prev: ok(0) }), false)
  // the null and the bare the false keeps
  assert.equal(rejoinStormFirstBreathConsistent(null), false)
  assert.equal(rejoinStormFirstBreathConsistent(0), false)
  assert.equal(rejoinStormFirstBreathConsistent({}), false)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const e = (b, p, c) => ({ back: { rejoinStormFirstBreath: b }, prev: { rejoinStormFirstBreath: p }, cur: { rejoinStormFirstBreath: c } })
  // the REAL swell (F519 -> F521): 6 -> 39 (+33) -> 56 (+17)
  const swell = rejoinStormFirstBreathTrendRow(e(6, 39, 56))
  assert.match(swell, /storm first breath swell ran two steps deep - 6 -> 39 \(\+33\) -> 56 \(\+17\)/)
  assert.match(swell, /lengthened each face/)
  // the REAL fade (F521 -> F523): 56 -> 27 (-29) -> 3 (-24)
  const fade = rejoinStormFirstBreathTrendRow(e(56, 27, 3))
  assert.match(fade, /storm first breath fade ran two steps deep - 56 -> 27 \(-29\) -> 3 \(-24\)/)
  assert.match(fade, /shortened each face/)
  // the REAL swing (F545 -> F547): 0 -> 68 (+68) -> 10 (-58) - the
  // zero face's own swing the newest harvest prices
  const swing = rejoinStormFirstBreathTrendRow(e(0, 68, 10))
  assert.match(swing, /storm first breath swing - 0 -> 68 \(\+68\) -> 10 \(-58\)/)
  assert.match(swing, /traded its opening breath/)
  // the REAL held window the archive's own pair keeps (F533 -> F535:
  // 25 -> 8 -> 8 the held second step - the honest silence)
  assert.equal(rejoinStormFirstBreathTrendRow(e(25, 8, 8)), null)
  // the tail the sibling seats name (the co-existence by seat law -
  // the .363 champion breath count word the fresh tail keeps)
  const row = rejoinStormFirstBreathTrendRow(e(6, 39, 56))
  for (const seat of ['.346 re-join bin', '.347 re-join bots', '.348 re-join peak', '.349 re-join peak name', '.350 re-join span', '.351 champion stretch', '.352 re-join gap', '.353 champion gap', '.354 mean breath', '.355 champion mean breath', '.356 storm median breath', '.357 champion median breath', '.358 storm min breath', '.359 champion min breath', '.360 storm breath range', '.361 champion breath range', '.362 storm breath count', '.363 champion breath count']) {
    assert.match(row, new RegExp(seat.replace(/\./g, '\\.') + ' word prices'))
  }
  // the fence breach the honest silence keeps
  assert.equal(rejoinStormFirstBreathTrendRow(null), null)
  assert.equal(rejoinStormFirstBreathTrendRow({ back: { rejoinStormFirstBreath: 0.5 }, prev: { rejoinStormFirstBreath: 1 }, cur: { rejoinStormFirstBreath: 2 } }), null)
})
