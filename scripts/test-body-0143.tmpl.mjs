import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampNinthBreathCensus, rejoinChampNinthBreathConsistent, rejoinChampNinthBreathTrendRow } from '../../src/lib/rejoinchampninthbreath.mjs'
import { rejoinChampEighthBreathCensus } from '../../src/lib/rejoinchampeighthbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1243/1343/1543/1743/1843/1943/2043/2143/2243/2343 fires re-ride
// - the faces the alignment byte-exact anchored and the F-map the
// census slide the SIXTEEN anchors lock the same ids price: F1 =
// 37403158305 one hit, the F552 cancelled and the F557 artifact hole
// and the F576 in-flight the holes the F-order keeps)

const REAL_F506 = [
/*__REAL_F506__*/
]

const REAL_F508 = [
/*__REAL_F508__*/
]

const REAL_F512 = [
/*__REAL_F512__*/
]

const REAL_F514 = [
/*__REAL_F514__*/
]

const REAL_F524 = [
/*__REAL_F524__*/
]

const REAL_F536 = [
/*__REAL_F536__*/
]

const REAL_F546 = [
/*__REAL_F546__*/
]

const REAL_F556 = [
/*__REAL_F556__*/
]

const REAL_F569 = [
/*__REAL_F569__*/
]

const REAL_F575 = [
/*__REAL_F575__*/
]

const REAL_ARC = [
/*__REAL_ARC__*/
]

test('REAL faces byte-exact - the champ ninth breath the ninth order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F506 the under face the 5 under the 6 prices, the F508
  // the under face the 12 under the 57 the elder tallest prices, the
  // F512 the LEVEL face the 12=12 the REAL same-tempo keeps, the F514
  // the LEVEL face the 13=13 keeps, the F524 the REAL ZERO the
  // twenty-one-gap cadence the ninth pair the same second prices, the
  // F536 the window's own TALLEST voiced 16 the above-dialog prices,
  // the F546 the above face the 11 above the 8 keeps, the F556 the
  // CEILING face the 6 the max 6 prices, the F569 the elder REAL tail
  // the LEVEL 11=11 the nine-gap cadence keeps, the F575 the fresh
  // tail the LEVEL 5=5 the REAL ten-gap cadence the fire-0143 ledger
  // keeps)
  const pins = [[REAL_F506, 5], [REAL_F508, 12], [REAL_F512, 12], [REAL_F514, 13], [REAL_F524, 0], [REAL_F536, 16], [REAL_F546, 11], [REAL_F556, 6], [REAL_F569, 11], [REAL_F575, 5]]
  for (const [col, want] of pins) {
    assert.equal(rejoinChampNinthBreathCensus(col).rejoinChampNinthBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the ninth order statistic bounds keep', () => {
  // the champion cadence hand the fixtures re-voice inline - the BOUND
  // law the .359 champ min <= ninth <= the .353 champ gap and ninth
  // <= the .351 champ stretch every voiced fixture (the REAL archive
  // audit GREEN the probe keeps)
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
      ninth: gaps.length > 8 ? gaps[8] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: cevts.length >= 2 ? cevts[cevts.length - 1].s - cevts[0].s : 0,
      eighth: rejoinChampEighthBreathCensus(lines).rejoinChampEighthBreath
    }
  }
  const cols = [REAL_F506, REAL_F508, REAL_F512, REAL_F514, REAL_F524, REAL_F536, REAL_F546, REAL_F556, REAL_F569, REAL_F575]
  for (const col of cols) {
    const r = read(col)
    const ninth = rejoinChampNinthBreathCensus(col).rejoinChampNinthBreath
    assert.equal(ninth, r.ninth)
    // the bound the VOICED faces price (the fewer-than-nine-gaps face
    // the lawful zero the bounds keep - the no-list-sample face the
    // min/max never bound)
    if (r.count >= 9) {
      assert.ok(ninth >= r.min && ninth <= r.max, `bound ${ninth} in [${r.min},${r.max}]`)
      assert.ok(ninth <= r.stretch)
    } else {
      assert.equal(ninth, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F506 under face (5
  // UNDER the 6) and the F508 under face (12 UNDER the 57 the elder
  // tallest the deepest under prices) and the F524 under face (0 UNDER
  // the 10 the REAL zero the under keeps) and the F536 above face (16
  // ABOVE the 9 the window's own TALLEST voiced value the
  // above-dialog prices) and the F546 above face (11 ABOVE the 8) and
  // the F556 above face (6 ABOVE the 5) and the F512 level face (12
  // LEVEL the 12) and the F514 level face (13 LEVEL the 13) and the
  // F569 level face (11 LEVEL the 11) and the F575 level face (5 LEVEL
  // the 5 the fresh tail the REAL same-tempo keeps) - no constant
  // order the honest seat prices
  assert.ok(read(REAL_F506).ninth < read(REAL_F506).eighth)
  assert.ok(read(REAL_F508).ninth < read(REAL_F508).eighth)
  assert.ok(read(REAL_F524).ninth < read(REAL_F524).eighth)
  assert.ok(read(REAL_F536).ninth > read(REAL_F536).eighth)
  assert.ok(read(REAL_F546).ninth > read(REAL_F546).eighth)
  assert.ok(read(REAL_F556).ninth > read(REAL_F556).eighth)
  assert.equal(read(REAL_F512).ninth, read(REAL_F512).eighth)
  assert.equal(read(REAL_F514).ninth, read(REAL_F514).eighth)
  assert.equal(read(REAL_F569).ninth, read(REAL_F569).eighth)
  assert.equal(read(REAL_F575).ninth, read(REAL_F575).eighth)
  // the CEILING's own edge the fixture voices: the F556's own 6 the
  // cadence's own tallest silence the same face prices (the .384
  // arc's own NO ceiling the ninth DOES inherit) - and the BELOW-max
  // distinction the F536's own 16 the own max 61 the below prices
  // (the window's own TALLEST voiced value the below keeps), the
  // F569's own 11 the own max 169 the deepest below prices, the
  // F514's own 13 the own max 15 the second-tallest the below keeps,
  // the F508's own 12 the own max 64 the third-tallest the below
  // keeps
  assert.equal(read(REAL_F556).ninth, read(REAL_F556).max)
  assert.ok(read(REAL_F536).ninth < read(REAL_F536).max)
  assert.ok(read(REAL_F569).ninth < read(REAL_F569).max)
  assert.ok(read(REAL_F514).ninth < read(REAL_F514).max)
  assert.ok(read(REAL_F508).ninth < read(REAL_F508).max)
  // the synthetics the branch battery keeps - the one-echo face the
  // lawful zero keeps, the single-gap through the eight-gap faces the
  // fewer-than-nine-gaps convention prices (the NINTH pair the list
  // never holds - the .372/.374/.376/.379/.384 convention extends,
  // the eight-gap face the .384's own 720 the elder seat voiced the
  // ninth arc never rides), the nine-gap face the NINTH the list
  // voices, the co-reign tie the interleave the ninth gap the FILE
  // ORDER voices, the sub-peak name the champ list never rides, the
  // same-second ninth pair the REAL zero the list voices, the
  // day-cyclic wrap the ninth pair crossing the midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinChampNinthBreathCensus(oneEcho), { rejoinChampNinthBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinChampNinthBreathCensus(singleGap), { rejoinChampNinthBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the champ list keeps
  // out - the champ events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the NINTH pair the list never holds the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinChampNinthBreathCensus(twoGaps), { rejoinChampNinthBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champ events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60, 60,
  // 300] the THREE gaps the NINTH pair the list never holds - the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinChampNinthBreathCensus(threeGaps), { rejoinChampNinthBreath: 0 })
  const fourGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champ events 08:02 / 08:03 / 08:04 / 08:05 / 08:09 the gaps
  // [60, 60, 60, 240] the FOUR gaps the NINTH pair the list never
  // holds - the constructive zero the .372 convention extends
  assert.deepEqual(rejoinChampNinthBreathCensus(fourGaps), { rejoinChampNinthBreath: 0 })
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
  // the champ events 08:02 / 08:03 / 08:04 / 08:05 / 08:06 / 08:09
  // the gaps [60, 60, 60, 60, 180] the FIVE gaps the NINTH pair
  // the list never holds - the constructive zero the .372 convention
  // extends
  assert.deepEqual(rejoinChampNinthBreathCensus(fiveGaps), { rejoinChampNinthBreath: 0 })
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
  // the champ events 08:02 / 08:03 / 08:04 / 08:05 / 08:06 / 08:07 /
  // 08:09 the gaps [60, 60, 60, 60, 60, 120] the SIX gaps the NINTH
  // pair the list never holds - the constructive zero (the same face
  // the .375's own sixth 120 the elder seat voiced the ninth arc
  // never rides - the honest distinction the seats price)
  assert.deepEqual(rejoinChampNinthBreathCensus(sixGaps), { rejoinChampNinthBreath: 0 })
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
    '[08:20:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champ events 08:02 through 08:20 the gaps [60, 60, 60, 60,
  // 60, 60, 720] the SEVEN gaps the NINTH pair the list never holds
  // - the constructive zero (the same face the .379's own seventh 720
  // the elder seat voiced the honest distinction the seats price)
  assert.deepEqual(rejoinChampNinthBreathCensus(sevenGaps), { rejoinChampNinthBreath: 0 })
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
    '[08:20:00] [Server thread/INFO]: F3 joined the game',
    '[08:32:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champ events 08:02 through 08:32 the gaps [60, 60, 60, 60,
  // 60, 60, 720, 720] the EIGHT gaps the NINTH pair the list never
  // holds - the constructive zero (the same face the .384's own
  // eighth 720 the elder seat priced the ninth the honest distinction
  // the seats price)
  assert.deepEqual(rejoinChampNinthBreathCensus(eightGaps), { rejoinChampNinthBreath: 0 })
  assert.equal(rejoinChampEighthBreathCensus(eightGaps).rejoinChampEighthBreath, 720)
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
    '[08:20:00] [Server thread/INFO]: F3 joined the game',
    '[08:32:00] [Server thread/INFO]: F3 joined the game',
    '[08:40:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the champ events 08:02 through 08:40:30 the gaps [60, 60, 60, 60,
  // 60, 60, 720, 720, 510] the NINTH pair 510 the list voices (the
  // 08:40:30 event the cadence keeps - the elder eight-gap face's own
  // 720 the eighth seat priced the ninth 510 the fresh seat prices)
  assert.deepEqual(rejoinChampNinthBreathCensus(nineGaps), { rejoinChampNinthBreath: 510 })
  const coReign = [
    '[09:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[09:01:00] [Server thread/INFO]: F3 joined the game',
    '[09:02:00] [Server thread/INFO]: F7 joined the game',
    '[09:04:00] [Server thread/INFO]: F3 joined the game',
    '[09:05:00] [Server thread/INFO]: F7 joined the game',
    '[09:08:00] [Server thread/INFO]: F3 joined the game',
    '[09:10:00] [Server thread/INFO]: F7 joined the game',
    '[09:15:00] [Server thread/INFO]: F3 joined the game',
    '[09:17:00] [Server thread/INFO]: F7 joined the game',
    '[09:21:00] [Server thread/INFO]: F3 joined the game',
    '[09:23:00] [Server thread/INFO]: F7 joined the game',
    '[09:27:00] [Server thread/INFO]: F3 joined the game',
    '[09:29:00] [Server thread/INFO]: F7 joined the game',
    '[09:31:00] [Server thread/INFO]: F7 joined the game',
    '[09:33:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's and F7's own co-reign the tie keeps - the champ events the
  // FILE ORDER rides (F3 09:04 / F7 09:05 / F3 09:08 / F7 09:10 / F3
  // 09:15 / F7 09:17 / F3 09:21 / F7 09:23 / F3 09:27 / F7 09:29 /
  // F7 09:31 / F3 09:33) the gaps [60, 180, 120, 300, 120, 240, 120,
  // 240, 120, 120, 120] the NINTH 120 the interleave voices (the
  // elder eight-gap face the eighth 240 the .384 seat priced the
  // ninth extends)
  assert.deepEqual(rejoinChampNinthBreathCensus(coReign), { rejoinChampNinthBreath: 120 })
  assert.equal(rejoinChampEighthBreathCensus(coReign).rejoinChampEighthBreath, 240)
  const coReignSub = [
    '[09:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[09:01:00] [Server thread/INFO]: F3 joined the game',
    '[09:02:00] [Server thread/INFO]: F7 joined the game',
    '[09:04:00] [Server thread/INFO]: F3 joined the game',
    '[09:07:00] [Server thread/INFO]: F7 joined the game',
    '[09:08:00] [Server thread/INFO]: F3 joined the game',
    '[09:14:00] [Server thread/INFO]: F7 joined the game',
    '[09:15:00] [Server thread/INFO]: F3 joined the game',
    '[09:21:00] [Server thread/INFO]: F7 joined the game',
    '[09:27:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the sub-peak name the champ list never rides - the F7's own three
  // beyond-first the F3's four the peak prices (the co-reign the tie
  // never holds) - the champ events F3's own four re-joins the gaps
  // [240, 420, 720] the THREE gaps the NINTH pair the list never
  // holds the constructive zero the branch keeps
  assert.deepEqual(rejoinChampNinthBreathCensus(coReignSub), { rejoinChampNinthBreath: 0 })
  const sameSecond = [
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
    '[08:10:00] [Server thread/INFO]: F3 joined the game',
    '[08:10:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the same-second NINTH pair the F524 face's own shape the list
  // voices - the champ events 08:02 through 08:10 the pairs [60, 60,
  // 60, 60, 60, 60, 60, 60, 0] the NINTH pair 0 the same second
  // prices (the REAL zero the voiced face the F524's own law the
  // synthetic re-voices)
  assert.deepEqual(rejoinChampNinthBreathCensus(sameSecond), { rejoinChampNinthBreath: 0 })
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
    '[00:11:30] [Server thread/INFO]: F3 joined the game',
    '[00:17:30] [Server thread/INFO]: F3 joined the game',
    '[00:21:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the day-cyclic wrap the NINTH pair crosses the midnight cell
  // (the champ events 08:02 / 08:03 / 08:04 / 23:59:30 / 00:01:30 /
  // 00:05:30 / 00:07:30 / 00:11:30 / 00:17:30 / 00:21:30 the gaps
  // [60, 60, 57330, 120, 240, 120, 240, 360, 240] - 86370 - 29040 =
  // 57330 the third pair rides, 90 + 86400 - 86370 = 120 the fourth
  // rides, 330 - 90 = 240 the fifth rides, 450 - 330 = 120 the sixth
  // rides, 690 - 450 = 240 the seventh rides, 1050 - 690 = 360 the
  // eighth rides, 1290 - 1050 = 240 the ninth the list voices)
  assert.deepEqual(rejoinChampNinthBreathCensus(wrap), { rejoinChampNinthBreath: 240 })
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinChampNinthBreathCensus(null), null)
  assert.equal(rejoinChampNinthBreathCensus(undefined), null)
  assert.equal(rejoinChampNinthBreathCensus('not an array'), null)
  assert.equal(rejoinChampNinthBreathCensus(42), null)
  assert.deepEqual(rejoinChampNinthBreathCensus([]), { rejoinChampNinthBreath: 0 })
  assert.deepEqual(rejoinChampNinthBreathCensus(['', 'no joins here', null, 42]), { rejoinChampNinthBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinChampNinthBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampNinthBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinChampNinthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampNinthBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinChampNinthBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampNinthBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinChampNinthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampNinthBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinChampNinthBreath: n })
  assert.equal(rejoinChampNinthBreathConsistent(null), false)
  assert.equal(rejoinChampNinthBreathConsistent(undefined), false)
  assert.equal(rejoinChampNinthBreathConsistent('nope'), false)
  assert.equal(rejoinChampNinthBreathConsistent({}), false)
  assert.equal(rejoinChampNinthBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinChampNinthBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinChampNinthBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinChampNinthBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366/.367/.368/.370/.372/.374/.376/.379/.384 lines the same shape)
  assert.equal(rejoinChampNinthBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinChampNinthBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinChampNinthBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinChampNinthBreathConsistent({ back: c(86399), prev: c(0), cur: c(59) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinChampNinthBreath: n })
  // the swell the synthetic faces keep (1 -> 5 (+4) -> 12 (+7))
  const swell = rejoinChampNinthBreathTrendRow({ back: c(1), prev: c(5), cur: c(12) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('1 -> 5 (+4) -> 12 (+7)'))
  assert.ok(swell.includes('v0.976.388'))
  // the fade the F536->F538 faces keep (16 -> 8 (-8) -> 0 (-8)
  // the two-step fade the fresh window prices)
  const fade = rejoinChampNinthBreathTrendRow({ back: c(16), prev: c(8), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('16 -> 8 (-8) -> 0 (-8)'))
  // the swing the F505->F507 faces keep (0 -> 5 (+5) -> 0 (-5))
  const swing = rejoinChampNinthBreathTrendRow({ back: c(0), prev: c(5), cur: c(0) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('0 -> 5 (+5) -> 0 (-5)'))
  // the second swing the F554->F556 faces keep (10 -> 0 (-10) -> 6 (+6))
  const swing2 = rejoinChampNinthBreathTrendRow({ back: c(10), prev: c(0), cur: c(6) })
  assert.ok(swing2.includes('swing'))
  assert.ok(swing2.includes('10 -> 0 (-10) -> 6 (+6)'))
  // the held step the honest silence keeps (the row never invents -
  // the F570/F571/F572 and the F573/F574 zeros the arc keeps)
  assert.equal(rejoinChampNinthBreathTrendRow({ back: c(1), prev: c(0), cur: c(0) }), null)
  assert.equal(rejoinChampNinthBreathTrendRow({ back: c(10), prev: c(0), cur: c(0) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinChampNinthBreathTrendRow(null), null)
  assert.equal(rejoinChampNinthBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps - the indexes the TRUE F-numbers price: the
  // F506/F507/F508 the c3(5/6/7), the F535/F536/F537 the
  // c3(34/35/36), the F536/F537/F538 the c3(35/36/37), the
  // F553/F554/F555 the c3(51/52/53), the F554/F555/F556 the
  // c3(52/53/54), the F568/F569/F570 the c3(65/66/67) - the
  // fire-1243 off-by-one lesson the same hand keeps)
  const c3 = (i) => ({ rejoinChampNinthBreath: REAL_ARC[i] })
  assert.ok(rejoinChampNinthBreathTrendRow({ back: c3(5), prev: c3(6), cur: c3(7) }).includes('5 -> 0 (-5) -> 12 (+12)'))
  assert.ok(rejoinChampNinthBreathTrendRow({ back: c3(34), prev: c3(35), cur: c3(36) }).includes('0 -> 16 (+16) -> 8 (-8)'))
  assert.ok(rejoinChampNinthBreathTrendRow({ back: c3(35), prev: c3(36), cur: c3(37) }).includes('16 -> 8 (-8) -> 0 (-8)'))
  assert.ok(rejoinChampNinthBreathTrendRow({ back: c3(51), prev: c3(52), cur: c3(53) }).includes('0 -> 10 (+10) -> 0 (-10)'))
  assert.ok(rejoinChampNinthBreathTrendRow({ back: c3(52), prev: c3(53), cur: c3(54) }).includes('10 -> 0 (-10) -> 6 (+6)'))
  assert.ok(rejoinChampNinthBreathTrendRow({ back: c3(65), prev: c3(66), cur: c3(67) }).includes('0 -> 11 (+11) -> 0 (-11)'))
  assert.equal(rejoinChampNinthBreathTrendRow({ back: c3(0), prev: c3(1), cur: c3(2) }), null)
})

test('REAL 73-face window arc byte-exact - 10 classes the seat LIVE', () => {
  // the arc the fieldproof re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 73)
  assert.equal(classes.size, 10)
  assert.equal(Math.min(...arc), 0) // the FIFTY-NINE-face gravity keeps (the constructive fifty-eight the ONE REAL zero the F524 the zero class prices)
  assert.equal(Math.max(...arc), 16) // the tallest voiced value F536 keeps
  // the zero faces the honest distinction prices (the REAL zero ONE
  // face the window keeps - the F524's own twenty-one-gap cadence the
  // ninth pair the same second prices, the .384 arc's own NO-face
  // absence the ninth DOES inherit)
  assert.equal(arc[5], 5) // the F506 the under-dialog the 5 < 6 prices
  assert.equal(arc[7], 12) // the F508 the under face the deepest under keeps
  assert.equal(arc[11], 12) // the F512 the LEVEL face keeps
  assert.equal(arc[13], 13) // the F514 the second-tallest voiced
  assert.equal(arc[23], 0) // the F524 the REAL ZERO the same-second pair keeps
  assert.equal(arc[35], 16) // the F536 the window's own TALLEST voiced value
  assert.equal(arc[36], 8) // the F537 the LEVEL face keeps
  assert.equal(arc[45], 11) // the F546 the above face keeps
  assert.equal(arc[52], 10) // the F554 the under face keeps
  assert.equal(arc[54], 6) // the F556 the CEILING face keeps
  assert.equal(arc[57], 5) // the F560 the under face keeps
  assert.equal(arc[60], 10) // the F563 the LEVEL face keeps
  assert.equal(arc[63], 9) // the F566 the under face keeps
  assert.equal(arc[66], 11) // the F569 the elder REAL tail the LEVEL keeps
  assert.equal(arc[71], 0) // the F574 the constructive keeps
  assert.equal(arc[72], 5) // the F575 fresh tail the LEVEL face the REAL ten-gap cadence keeps
  // the held law: FORTY-SIX held pairs the 73-face window keeps - the
  // FORTY-FOUR constructive-zero pairs and the TWO mixed pairs (the
  // F523/F524 and the F524/F525 the constructive/REAL zero the
  // hole-aware adjacency the F-order keeps - the NO REAL voiced held
  // pair the honest absence the champion hand prices - every voiced
  // face the neighbours the honest break the seats price)
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) held++
  assert.equal(held, 46)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - the fifty-eight-face zero the tie-degenerate gravity the
  // family prices
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 59)
  assert.equal(tally.get(5), 3)
  assert.equal(tally.get(10), 2)
  assert.equal(tally.get(11), 2)
  assert.equal(tally.get(12), 2)
  assert.equal(tally.get(6), 1)
  assert.equal(tally.get(8), 1)
  assert.equal(tally.get(9), 1)
  assert.equal(tally.get(13), 1)
  assert.equal(tally.get(16), 1)
})
