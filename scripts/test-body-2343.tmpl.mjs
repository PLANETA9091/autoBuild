import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormNinthBreathCensus, rejoinStormNinthBreathConsistent, rejoinStormNinthBreathTrendRow } from '../../src/lib/rejoinstormninthbreath.mjs'
import { rejoinStormEighthBreathCensus } from '../../src/lib/rejoinstormeighthbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1243/1343/1543/1743/1843/1943/2043/2143/2243 fires re-ride - the
// faces the alignment byte-exact anchored and the F-map the census
// slide the FOURTEEN anchors lock the same ids price: F1 =
// 37403158305 one hit, the F552 cancelled and the F557 artifact hole
// the holes the F-order keeps)

const REAL_F501 = [
/*__REAL_F501__*/
]

const REAL_F508 = [
/*__REAL_F508__*/
]

const REAL_F517 = [
/*__REAL_F517__*/
]

const REAL_F521 = [
/*__REAL_F521__*/
]

const REAL_F526 = [
/*__REAL_F526__*/
]

const REAL_F537 = [
/*__REAL_F537__*/
]

const REAL_F550 = [
/*__REAL_F550__*/
]

const REAL_F556 = [
/*__REAL_F556__*/
]

const REAL_F564 = [
/*__REAL_F564__*/
]

const REAL_F572 = [
/*__REAL_F572__*/
]

const REAL_ARC = [
/*__REAL_ARC__*/
]

test('REAL faces byte-exact - the storm ninth breath the ninth order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F501 the opener the REAL 7 the above-dialog prices, the
  // F508 the third-tallest 57, the F517 the ceiling 70, the F521 the
  // 28 the above face, the F526 the level face the 5=5, the F537 the
  // second-tallest 58, the F550 the 13 the above-dialog, the F556 the
  // held pair the one keeps, the F564 the 13 the above-dialog, the
  // F572 the elder tail the REAL 6 the fire-2143 ledger keeps)
  const pins = [[REAL_F501, 7], [REAL_F508, 57], [REAL_F517, 70], [REAL_F521, 28], [REAL_F526, 5], [REAL_F537, 58], [REAL_F550, 13], [REAL_F556, 1], [REAL_F564, 13], [REAL_F572, 6]]
  for (const [col, want] of pins) {
    assert.equal(rejoinStormNinthBreathCensus(col).rejoinStormNinthBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the ninth order statistic bounds keep', () => {
  // the storm hand the fixtures re-voice inline - the BOUND law the
  // .358 storm min <= ninth <= the .352 re-join gap and ninth <= the
  // .350 span's own sum-law every voiced fixture (the REAL archive
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
      ninth: gaps.length > 8 ? gaps[8] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      gapsum: gaps.reduce((a, b) => a + b, 0),
      eighth: rejoinStormEighthBreathCensus(lines).rejoinStormEighthBreath
    }
  }
  const cols = [REAL_F501, REAL_F508, REAL_F517, REAL_F521, REAL_F526, REAL_F537, REAL_F550, REAL_F556, REAL_F564, REAL_F572]
  for (const col of cols) {
    const r = read(col)
    const ninth = rejoinStormNinthBreathCensus(col).rejoinStormNinthBreath
    assert.equal(ninth, r.ninth)
    // the bound the VOICED faces price (the fewer-than-nine-gaps face
    // the lawful zero the bounds keep - the no-list-sample face the
    // min/max never bound)
    if (r.count >= 9) {
      assert.ok(ninth >= r.min && ninth <= r.max, `bound ${ninth} in [${r.min},${r.max}]`)
      assert.ok(ninth <= r.gapsum)
    } else {
      assert.equal(ninth, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F508 above face
  // (57 ABOVE the 32) and the F514-style under face the F517 column
  // prices (70 ABOVE the 6 the ceiling face) and the F526's own level
  // the module prices - no constant order the honest seat prices
  const above = read(REAL_F508)
  assert.ok(above.ninth > above.eighth) // the F508 57 > 32
  const ceiling = read(REAL_F517)
  assert.ok(ceiling.ninth > ceiling.eighth) // the F517 70 > 6 the ceiling
  const fresh = read(REAL_F572)
  assert.ok(fresh.ninth > fresh.eighth) // the F572 6 > 0 the elder tail
  assert.equal(rejoinStormNinthBreathCensus(REAL_F526).rejoinStormNinthBreath, 5)
  assert.equal(rejoinStormNinthBreathCensus(REAL_F556).rejoinStormNinthBreath, 1)
  assert.equal(rejoinStormNinthBreathCensus(REAL_F564).rejoinStormNinthBreath, 13)
  // the CEILING's own edge the fixture voices: the F517's own 70 the
  // cadence's own tallest silence the same face prices - and the
  // BELOW-max distinction the F537's own 58 the own max 93 the below
  // prices (the second-tallest the below keeps), the F508's own 57
  // the own max 64 the below prices (the third-tallest keeps)
  assert.equal(read(REAL_F517).ninth, read(REAL_F517).max)
  assert.ok(read(REAL_F537).ninth < read(REAL_F537).max)
  assert.ok(read(REAL_F508).ninth < read(REAL_F508).max)
  // the synthetics the branch battery keeps - the one-echo face the
  // lawful zero keeps, the single-gap through the eight-gap faces the
  // fewer-than-nine-gaps convention prices (the NINTH pair the
  // list never holds - the .372/.374/.376/.383 convention extends,
  // the eight-gap face the .383's own 90 the elder seat voiced the
  // ninth arc never rides), the nine-gap face the NINTH the list
  // voices, the co-reign tie the interleave the ninth gap the FILE
  // ORDER voices, the day-cyclic wrap the ninth pair crossing the
  // midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinStormNinthBreathCensus(oneEcho), { rejoinStormNinthBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinStormNinthBreathCensus(singleGap), { rejoinStormNinthBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the storm list keeps
  // out - the storm events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the NINTH pair the list never holds the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinStormNinthBreathCensus(twoGaps), { rejoinStormNinthBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60, 60,
  // 300] the THREE gaps the NINTH pair the list never holds - the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinStormNinthBreathCensus(threeGaps), { rejoinStormNinthBreath: 0 })
  const fourGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 / 08:03 / 08:04 / 08:05 / 08:09 the gaps
  // [60, 60, 60, 240] the FOUR gaps the NINTH pair the list never
  // holds - the constructive zero the .372 convention extends
  assert.deepEqual(rejoinStormNinthBreathCensus(fourGaps), { rejoinStormNinthBreath: 0 })
  const fiveGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:06:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 / 08:03 / 08:04 / 08:05 / 08:06 / 08:09
  // the gaps [60, 60, 60, 60, 180] the FIVE gaps the NINTH pair
  // the list never holds - the constructive zero the .372 convention
  // extends
  assert.deepEqual(rejoinStormNinthBreathCensus(fiveGaps), { rejoinStormNinthBreath: 0 })
  const sixGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:06:00] [Server thread/INFO]: F3 joined the game',
    '[08:07:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 / 08:03 / 08:04 / 08:05 / 08:06 / 08:07 /
  // 08:09 the gaps [60, 60, 60, 60, 60, 180] the SIX gaps the
  // NINTH pair the list never holds - the constructive zero the
  // .372 convention extends (the same face the .374's own 180 the
  // sixth seat priced the ninth arc never rides - the honest
  // distinction the seats price)
  assert.deepEqual(rejoinStormNinthBreathCensus(sixGaps), { rejoinStormNinthBreath: 0 })
  const sevenGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:06:00] [Server thread/INFO]: F3 joined the game',
    '[08:07:00] [Server thread/INFO]: F3 joined the game',
    '[08:08:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 through 08:09 the gaps [60, 60, 60, 60,
  // 60, 60, 60] the SEVEN gaps the NINTH pair the list never holds
  // - the constructive zero (the same face the .376's own seventh 60
  // the elder seat voiced the honest distinction the seats price)
  assert.deepEqual(rejoinStormNinthBreathCensus(sevenGaps), { rejoinStormNinthBreath: 0 })
  const eightGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:06:00] [Server thread/INFO]: F3 joined the game',
    '[08:07:00] [Server thread/INFO]: F3 joined the game',
    '[08:08:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game',
    '[08:10:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 through 08:10:30 the gaps [60, 60, 60,
  // 60, 60, 60, 60, 90] the EIGHT gaps the NINTH pair the list
  // never holds - the constructive zero (the same face the .383's
  // own eighth 90 the elder seat priced the ninth the honest
  // distinction the seats price)
  assert.deepEqual(rejoinStormNinthBreathCensus(eightGaps), { rejoinStormNinthBreath: 0 })
  const nineGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:06:00] [Server thread/INFO]: F3 joined the game',
    '[08:07:00] [Server thread/INFO]: F3 joined the game',
    '[08:08:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game',
    '[08:10:30] [Server thread/INFO]: F3 joined the game',
    '[08:14:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 through 08:14 the gaps [60, 60, 60, 60,
  // 60, 60, 60, 90, 210] the NINTH pair 210 the list voices (the
  // 08:14:00 event the cadence keeps - the elder eight-gap face's
  // own 90 the eighth seat priced the ninth 210 the fresh seat
  // prices)
  assert.deepEqual(rejoinStormNinthBreathCensus(nineGaps), { rejoinStormNinthBreath: 210 })
  const coReign = [
    '[09:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[09:01:00] [Server thread/INFO]: F3 joined the game',
    '[09:02:00] [Server thread/INFO]: F7 joined the game',
    '[09:04:00] [Server thread/INFO]: F3 joined the game',
    '[09:07:00] [Server thread/INFO]: F7 joined the game',
    '[09:08:00] [Server thread/INFO]: F3 joined the game',
    '[09:14:00] [Server thread/INFO]: F7 joined the game',
    '[09:15:00] [Server thread/INFO]: F3 joined the game',
    '[09:21:00] [Server thread/INFO]: F7 joined the game',
    '[09:27:00] [Server thread/INFO]: F3 joined the game',
    '[09:34:00] [Server thread/INFO]: F7 joined the game',
    '[09:41:00] [Server thread/INFO]: F3 joined the game',
    '[09:47:00] [Server thread/INFO]: F7 joined the game'
  ]
  // F3's and F7's own co-reign the tie keeps - the storm events the
  // FILE ORDER rides (F3 09:04 / F7 09:07 / F3 09:08 / F7 09:14 / F3
  // 09:15 / F7 09:21 / F3 09:27 / F7 09:34 / F3 09:41 / F7 09:47)
  // the gaps [180, 60, 360, 60, 360, 360, 420, 420, 360] the NINTH
  // 360 the interleave voices (the elder eight-gap face the eighth
  // 420 the .383 seat priced the ninth extends)
  assert.deepEqual(rejoinStormNinthBreathCensus(coReign), { rejoinStormNinthBreath: 360 })
  const wrap = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[23:59:30] [Server thread/INFO]: F3 joined the game',
    '[00:01:30] [Server thread/INFO]: F3 joined the game',
    '[00:05:30] [Server thread/INFO]: F3 joined the game',
    '[00:07:30] [Server thread/INFO]: F3 joined the game',
    '[00:09:30] [Server thread/INFO]: F3 joined the game',
    '[00:11:30] [Server thread/INFO]: F3 joined the game',
    '[00:13:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the day-cyclic wrap the .350 precedent keeps - the NINTH pair
  // crosses the midnight cell (the storm events 08:02 / 08:03 /
  // 08:04 / 23:59:30 / 00:01:30 / 00:05:30 / 00:07:30 / 00:09:30 /
  // 00:11:30 / 00:13:30 the gaps [60, 60, 57330, 120, 240, 120, 120,
  // 120, 120] - 86370 - 29040 = 57330 the third pair rides, 90 +
  // 86400 - 86370 = 120 the fourth rides, 330 - 90 = 240 the fifth
  // rides, 450 - 330 = 120 the sixth rides, 570 - 450 = 120 the
  // seventh rides, 690 - 570 = 120 the eighth rides, 810 - 690 = 120
  // the ninth the list voices)
  assert.deepEqual(rejoinStormNinthBreathCensus(wrap), { rejoinStormNinthBreath: 120 })
})

test('REAL 72-face window arc byte-exact - 21 classes the seat LIVE', () => {
  // the arc the fieldproof re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 72)
  assert.equal(classes.size, 21)
  assert.equal(Math.min(...arc), 0) // the FIVE-face honest absence keeps (the REAL zeros the same-second pairs price)
  assert.equal(Math.max(...arc), 70) // the tallest voiced value F517 keeps
  // the zero faces the honest distinction prices (the REAL zero FIVE
  // faces the window keeps - the .383 arc's own NO-face absence the
  // ninth does NOT inherit: the F533 and the F538 and the F541 and
  // the F548 and the F561 the ninth pairs the same second the
  // cadence prices)
  assert.equal(arc[0], 7) // the F501 opener the REAL above-dialog the 7 > 6 prices
  assert.equal(arc[1], 9) // the F502 keeps
  assert.equal(arc[2], 0) // the F503 constructive four-gap
  assert.equal(arc[3], 10) // the F504 the under-dialog keeps
  assert.equal(arc[7], 57) // the F508 the third-tallest voiced
  assert.equal(arc[13], 17) // the F514 the under-dialog keeps
  assert.equal(arc[16], 70) // the F517 the ceiling-face the tallest
  assert.equal(arc[20], 28) // the F521 keeps
  assert.equal(arc[25], 5) // the F526 the level face keeps
  assert.equal(arc[36], 58) // the F537 the second-tallest keeps
  assert.equal(arc[41], 8) // the F542 keeps
  assert.equal(arc[49], 13) // the F550 keeps
  assert.equal(arc[54], 1) // the F556 the held pair keeps
  assert.equal(arc[61], 13) // the F564 keeps
  assert.equal(arc[69], 6) // the F572 the elder tail
  assert.equal(arc[70], 0) // the F573 the constructive elder tail
  assert.equal(arc[71], 0) // the F574 fresh tail the constructive
  // the held law: TWENTY held pairs the 72-face window keeps - the
  // FOURTEEN constructive-zero pairs and the FIVE mixed pairs (the
  // F532/F533 and the F533/F534 and the F547/F548 and the F548/F549
  // and the F561/F562 the constructive/REAL zeros keep) and the ONE
  // REAL pair the F556/F558 ones (the hole-aware adjacency the
  // F-order keeps - the .383 arc's own TWELVE the ninth does NOT
  // inherit: the F564/F565 ones the ninth 13/8 the honest break)
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) held++
  assert.equal(held, 20)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - no tie-degenerate gravity the window prices
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 38) // the THIRTY-EIGHT-face gravity the whole zero class prices (the THIRTY-THREE constructive + the FIVE REAL zeros)
  assert.equal(tally.get(1), 3)
  assert.equal(tally.get(5), 4)
  assert.equal(tally.get(6), 3)
  assert.equal(tally.get(7), 2)
  assert.equal(tally.get(8), 3)
  assert.equal(tally.get(10), 2)
  assert.equal(tally.get(13), 2)
  assert.equal(tally.get(17), 2)
  assert.equal(tally.get(24), 2)
  assert.equal(tally.get(70), 1)
  assert.equal(tally.get(58), 1)
  assert.equal(tally.get(57), 1)
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinStormNinthBreathCensus(null), null)
  assert.equal(rejoinStormNinthBreathCensus(undefined), null)
  assert.equal(rejoinStormNinthBreathCensus('not an array'), null)
  assert.equal(rejoinStormNinthBreathCensus(42), null)
  assert.deepEqual(rejoinStormNinthBreathCensus([]), { rejoinStormNinthBreath: 0 })
  assert.deepEqual(rejoinStormNinthBreathCensus(['', 'no joins here', null, 42]), { rejoinStormNinthBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinStormNinthBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormNinthBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinStormNinthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormNinthBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinStormNinthBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormNinthBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinStormNinthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormNinthBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinStormNinthBreath: n })
  assert.equal(rejoinStormNinthBreathConsistent(null), false)
  assert.equal(rejoinStormNinthBreathConsistent(undefined), false)
  assert.equal(rejoinStormNinthBreathConsistent('nope'), false)
  assert.equal(rejoinStormNinthBreathConsistent({}), false)
  assert.equal(rejoinStormNinthBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinStormNinthBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinStormNinthBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinStormNinthBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366/.367/.368/.370/.372/.374/.376/.383 lines the same shape)
  assert.equal(rejoinStormNinthBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinStormNinthBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinStormNinthBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinStormNinthBreathConsistent({ back: c(86399), prev: c(0), cur: c(59) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinStormNinthBreath: n })
  // the swell the F538->F540 faces keep (0 -> 1 (+1) -> 24 (+23))
  const swell = rejoinStormNinthBreathTrendRow({ back: c(0), prev: c(1), cur: c(24) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('0 -> 1 (+1) -> 24 (+23)'))
  assert.ok(swell.includes('v0.976.385'))
  // the fade the F521->F523 faces keep (28 -> 5 (-23) -> 0 (-5)
  // the two-step fade the fresh window prices)
  const fade = rejoinStormNinthBreathTrendRow({ back: c(28), prev: c(5), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('28 -> 5 (-23) -> 0 (-5)'))
  // the swing the F503->F505 faces keep (0 -> 10 (+10) -> 5 (-5))
  const swing = rejoinStormNinthBreathTrendRow({ back: c(0), prev: c(10), cur: c(5) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('0 -> 10 (+10) -> 5 (-5)'))
  // the second swing the F540->F542 faces keep (24 -> 0 (-24) -> 8 (+8))
  const swing2 = rejoinStormNinthBreathTrendRow({ back: c(24), prev: c(0), cur: c(8) })
  assert.ok(swing2.includes('swing'))
  assert.ok(swing2.includes('24 -> 0 (-24) -> 8 (+8)'))
  // the held step the honest silence keeps (the row never invents -
  // the F518/F519/F520 and the F572/F573/F574 zeros the arc keeps)
  assert.equal(rejoinStormNinthBreathTrendRow({ back: c(0), prev: c(0), cur: c(0) }), null)
  assert.equal(rejoinStormNinthBreathTrendRow({ back: c(6), prev: c(0), cur: c(0) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinStormNinthBreathTrendRow(null), null)
  assert.equal(rejoinStormNinthBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps - the indexes the TRUE F-numbers price: the
  // F538/F539/F540 the c3(37/38/39), the F521/F522/F523 the
  // c3(20/21/22), the F503/F504/F505 the c3(2/3/4), the
  // F540/F541/F542 the c3(39/40/41) - the fire-1243 off-by-one
  // lesson the same hand keeps)
  const c3 = (i) => ({ rejoinStormNinthBreath: REAL_ARC[i] })
  assert.ok(rejoinStormNinthBreathTrendRow({ back: c3(37), prev: c3(38), cur: c3(39) }).includes('0 -> 1 (+1) -> 24 (+23)'))
  assert.ok(rejoinStormNinthBreathTrendRow({ back: c3(20), prev: c3(21), cur: c3(22) }).includes('28 -> 5 (-23) -> 0 (-5)'))
  assert.ok(rejoinStormNinthBreathTrendRow({ back: c3(2), prev: c3(3), cur: c3(4) }).includes('0 -> 10 (+10) -> 5 (-5)'))
  assert.ok(rejoinStormNinthBreathTrendRow({ back: c3(39), prev: c3(40), cur: c3(41) }).includes('24 -> 0 (-24) -> 8 (+8)'))
})
