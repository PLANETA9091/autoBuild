import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampTenthBreathCensus, rejoinChampTenthBreathConsistent, rejoinChampTenthBreathTrendRow } from '../../src/lib/rejoinchamptenthbreath.mjs'
import { rejoinChampNinthBreathCensus } from '../../src/lib/rejoinchampninthbreath.mjs'
import { rejoinChampEighthBreathCensus } from '../../src/lib/rejoinchampeighthbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1243/1343/1543/1743/1843/1943/2043/2143/2243/2343/0143/0243/0343
// fires re-ride - the faces the alignment byte-exact anchored and the
// F-map the census slide the EIGHTEEN anchors lock the same ids
// price: F1 = 37403158305 one hit, the F552 cancelled and the F557
// artifact hole the holes the F-order keeps)

const REAL_F506 = [
/*__REAL_F506__*/
]

const REAL_F514 = [
/*__REAL_F514__*/
]

const REAL_F524 = [
/*__REAL_F524__*/
]

const REAL_F546 = [
/*__REAL_F546__*/
]

const REAL_F554 = [
/*__REAL_F554__*/
]

const REAL_F556 = [
/*__REAL_F556__*/
]

const REAL_F560 = [
/*__REAL_F560__*/
]

const REAL_F566 = [
/*__REAL_F566__*/
]

const REAL_F575 = [
/*__REAL_F575__*/
]

const REAL_F578 = [
/*__REAL_F578__*/
]

const REAL_ARC = [
/*__REAL_ARC__*/
]

test('REAL faces byte-exact - the champion tenth breath the tenth order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F506 the above face the 6 above the 5 the window's own
  // early riser prices, the F514 the under face the 12 under the 13
  // keeps, the F524 the above face the 9 above the 0 the elder zero
  // face the above-dialog prices, the F546 the under face the 10
  // under the 11 keeps, the F554 the LEVEL face the 10=10 the REAL
  // same-tempo keeps, the F556 the LEVEL face the 6=6 the CEILING the
  // own max 6 the seat prices, the F560 the above face the 12 above
  // the 5 keeps, the F566 the above face the 10 above the 9 keeps,
  // the F575 the above face the 7 above the 5 the elder REAL tail
  // keeps, the F578 the fresh tail the constructive zero the
  // three-gap champ cadence [25, 48, 60] the fire-0343 ledger keeps)
  const pins = [[REAL_F506, 6], [REAL_F514, 12], [REAL_F524, 9], [REAL_F546, 10], [REAL_F554, 10], [REAL_F556, 6], [REAL_F560, 12], [REAL_F566, 10], [REAL_F575, 7], [REAL_F578, 0]]
  for (const [col, want] of pins) {
    assert.equal(rejoinChampTenthBreathCensus(col).rejoinChampTenthBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the tenth order statistic bounds keep', () => {
  // the champion cadence hand the fixtures re-voice inline - the BOUND
  // law the .359 champ min <= tenth <= the .353 champ gap and tenth
  // <= the .351 champ stretch's own sum-law every voiced fixture (the
  // REAL archive audit GREEN the probe keeps)
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
      tenth: gaps.length > 9 ? gaps[9] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      gapsum: gaps.reduce((a, b) => a + b, 0),
      ninth: rejoinChampNinthBreathCensus(lines).rejoinChampNinthBreath
    }
  }
  const cols = [REAL_F506, REAL_F514, REAL_F524, REAL_F546, REAL_F554, REAL_F556, REAL_F560, REAL_F566, REAL_F575, REAL_F578]
  for (const col of cols) {
    const r = read(col)
    const tenth = rejoinChampTenthBreathCensus(col).rejoinChampTenthBreath
    assert.equal(tenth, r.tenth)
    // the bound the VOICED faces price (the fewer-than-ten-gaps face
    // the lawful zero the bounds keep - the no-list-sample face the
    // min/max never bound)
    if (r.count >= 10) {
      assert.ok(tenth >= r.min && tenth <= r.max, `bound ${tenth} in [${r.min},${r.max}]`)
      assert.ok(tenth <= r.gapsum)
    } else {
      assert.equal(tenth, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F506 above face (6
  // ABOVE the 5 the early riser prices) and the F514 under face (12
  // UNDER the 13) and the F524 above face (9 ABOVE the 0 the elder
  // zero face the above-dialog prices) and the F546 under face (10
  // UNDER the 11) and the F554 level face (10 LEVEL the 10 the REAL
  // same-tempo keeps) and the F556 level face (6 LEVEL the 6 the
  // CEILING the own max 6 keeps) and the F560 above face (12 ABOVE
  // the 5) and the F566 above face (10 ABOVE the 9) and the F575
  // above face (7 ABOVE the 5 the elder REAL tail keeps) - no
  // constant order the honest seat prices
  assert.ok(read(REAL_F506).tenth > read(REAL_F506).ninth)
  assert.ok(read(REAL_F514).tenth < read(REAL_F514).ninth)
  assert.ok(read(REAL_F524).tenth > read(REAL_F524).ninth)
  assert.ok(read(REAL_F546).tenth < read(REAL_F546).ninth)
  assert.equal(read(REAL_F554).tenth, read(REAL_F554).ninth)
  assert.equal(read(REAL_F556).tenth, read(REAL_F556).ninth)
  assert.ok(read(REAL_F560).tenth > read(REAL_F560).ninth)
  assert.ok(read(REAL_F566).tenth > read(REAL_F566).ninth)
  assert.ok(read(REAL_F575).tenth > read(REAL_F575).ninth)
  // the CEILING's own face the fixtures voice: the F556's own 6 the
  // max 6 the EQUALITY the window prices (the .388 champ ninth's own
  // ONE the F556 the seat DOES inherit, the same face both seats
  // ceiling) - the F560's own 12 the own max 13 the below prices, the
  // F514's own 12 the own max 15 the below keeps, the F575's own 7
  // the own max 26 the below keeps
  assert.equal(read(REAL_F556).tenth, read(REAL_F556).max)
  assert.ok(read(REAL_F560).tenth < read(REAL_F560).max)
  assert.ok(read(REAL_F514).tenth < read(REAL_F514).max)
  assert.ok(read(REAL_F575).tenth < read(REAL_F575).max)
  // the synthetics the branch battery keeps - the one-echo face the
  // lawful zero keeps, the single-gap through the nine-gap faces the
  // fewer-than-ten-gaps convention prices (the TENTH pair the list
  // never holds - the .372/.374/.376/.379/.383/.385/.388 convention
  // extends, the eight-gap face the .384's own 720 the elder seat
  // voiced the tenth arc never rides, the nine-gap face the .388's
  // own 510 the elder seat priced the tenth the honest zero the
  // distinction keeps), the ten-gap face the TENTH the list voices,
  // the co-reign tie the interleave the tenth gap the FILE ORDER
  // voices, the sub-peak pair the champion list declines (the peak
  // filter the champion hand alone prices - the storm hand the sub
  // rides the honest distinction the seats price), the same-second
  // tenth pair the REAL zero the list voices, the day-cyclic wrap the
  // tenth pair crossing the midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinChampTenthBreathCensus(oneEcho), { rejoinChampTenthBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinChampTenthBreathCensus(singleGap), { rejoinChampTenthBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champion events 08:02 / 08:03 / 08:09 the gaps [60, 360] the
  // TWO gaps the TENTH pair the list never holds the constructive
  // zero the .372 convention extends
  assert.deepEqual(rejoinChampTenthBreathCensus(twoGaps), { rejoinChampTenthBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champion events 08:02 through 08:09 the gaps [60, 60, 300]
  // the THREE gaps the TENTH pair the list never holds - the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinChampTenthBreathCensus(threeGaps), { rejoinChampTenthBreath: 0 })
  const fourGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champion events 08:02 through 08:09 the gaps [60, 60, 60,
  // 240] the FOUR gaps the TENTH pair the list never holds - the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinChampTenthBreathCensus(fourGaps), { rejoinChampTenthBreath: 0 })
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
  // the champion events 08:02 through 08:09 the gaps [60, 60, 60, 60,
  // 180] the FIVE gaps the TENTH pair the list never holds - the
  // constructive zero the .372 convention extends
  assert.deepEqual(rejoinChampTenthBreathCensus(fiveGaps), { rejoinChampTenthBreath: 0 })
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
  // 60, 120] the SIX gaps the TENTH pair the list never holds - the
  // constructive zero (the same face the .375's own sixth 120 the
  // elder seat voiced the tenth arc never rides - the honest
  // distinction the seats price)
  assert.deepEqual(rejoinChampTenthBreathCensus(sixGaps), { rejoinChampTenthBreath: 0 })
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
  // the champion events 08:02 through 08:20 the gaps [60, 60, 60, 60,
  // 60, 60, 720] the SEVEN gaps the TENTH pair the list never holds
  // - the constructive zero (the same face the .379's own seventh 720
  // the elder seat voiced the honest distinction the seats price)
  assert.deepEqual(rejoinChampTenthBreathCensus(sevenGaps), { rejoinChampTenthBreath: 0 })
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
  // the champion events 08:02 through 08:32 the gaps [60, 60, 60, 60,
  // 60, 60, 720, 720] the EIGHT gaps the TENTH pair the list never
  // holds - the constructive zero (the same face the .384's own
  // eighth 720 the elder seat priced the tenth the honest distinction
  // the seats price)
  assert.deepEqual(rejoinChampTenthBreathCensus(eightGaps), { rejoinChampTenthBreath: 0 })
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
  // the champion events 08:02 through 08:40:30 the gaps [60, 60, 60,
  // 60, 60, 60, 720, 720, 510] the NINE gaps the TENTH pair the list
  // never holds - the constructive zero (the same face the .388's own
  // ninth 510 the elder seat priced the tenth the honest distinction
  // the seats price)
  assert.deepEqual(rejoinChampTenthBreathCensus(nineGaps), { rejoinChampTenthBreath: 0 })
  assert.equal(rejoinChampNinthBreathCensus(nineGaps).rejoinChampNinthBreath, 510)
  const tenGaps = [
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
    '[08:40:30] [Server thread/INFO]: F3 joined the game',
    '[08:50:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champion events 08:02 through 08:50 the gaps [60, 60, 60, 60,
  // 60, 60, 720, 720, 510, 570] the TENTH pair 570 the list voices
  // (the 08:50 event the cadence keeps - the elder nine-gap face's
  // own 510 the ninth seat priced the tenth 570 the fresh seat
  // prices)
  assert.deepEqual(rejoinChampTenthBreathCensus(tenGaps), { rejoinChampTenthBreath: 570 })
  assert.equal(rejoinChampNinthBreathCensus(tenGaps).rejoinChampNinthBreath, 510)
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
  // the champion hand the TIE co-reign keeps (F3's six beyond-first
  // and the F7's six the peak the tally prices) - the champion events
  // the FILE ORDER rides (F3 09:04 / F7 09:05 / F3 09:08 / F7 09:10 /
  // F3 09:15 / F7 09:17 / F3 09:21 / F7 09:23 / F3 09:27 / F7 09:29 /
  // F7 09:31 / F3 09:33) the gaps [60, 180, 120, 300, 120, 240, 120,
  // 240, 120, 120, 120] the TENTH 120 the interleave voices (the
  // elder ninth 120 the same list the seats price)
  assert.deepEqual(rejoinChampTenthBreathCensus(coReign), { rejoinChampTenthBreath: 120 })
  assert.equal(rejoinChampNinthBreathCensus(coReign).rejoinChampNinthBreath, 120)
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
  // the champion list the PEAK filter rides (F3's four beyond-first
  // the tallest column the champion alone keeps, the F7's three the
  // sub-peak the list declines - the storm hand the sub rides the
  // honest distinction the seats price) - the champion events 09:04 /
  // 09:08 / 09:15 / 09:27 the gaps [240, 420, 720] the THREE gaps the
  // TENTH pair the list never holds the constructive zero the branch
  // keeps
  assert.deepEqual(rejoinChampTenthBreathCensus(coReignSub), { rejoinChampTenthBreath: 0 })
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
    '[08:11:00] [Server thread/INFO]: F3 joined the game',
    '[08:11:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the same-second TENTH pair the F538 face's own shape the list
  // voices - the champion events 08:02 through 08:11 the pairs [60,
  // 60, 60, 60, 60, 60, 60, 60, 60, 0] the TENTH pair 0 the same
  // second prices (the REAL zero the voiced face the F538's own law
  // the synthetic re-voices - the elder ninth 60 the same list the
  // seats price)
  assert.deepEqual(rejoinChampTenthBreathCensus(sameSecond), { rejoinChampTenthBreath: 0 })
  assert.equal(rejoinChampNinthBreathCensus(sameSecond).rejoinChampNinthBreath, 60)
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
    '[00:21:30] [Server thread/INFO]: F3 joined the game',
    '[00:25:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the day-cyclic wrap the TENTH pair crosses the midnight cell
  // (the champion events 08:02 / 08:03 / 08:04 / 23:59:30 / 00:01:30 /
  // 00:05:30 / 00:07:30 / 00:11:30 / 00:17:30 / 00:21:30 / 00:25:30
  // the gaps [60, 60, 57330, 120, 240, 120, 240, 360, 240, 240] -
  // 86370 - 29040 = 57330 the third pair rides, 90 + 86400 - 86370 =
  // 120 the fourth rides, 330 - 90 = 240 the fifth rides, 450 - 330
  // = 120 the sixth rides, 690 - 450 = 240 the seventh rides, 1050 -
  // 690 = 360 the eighth rides, 1290 - 1050 = 240 the ninth rides,
  // 1530 - 1290 = 240 the tenth the list voices)
  assert.deepEqual(rejoinChampTenthBreathCensus(wrap), { rejoinChampTenthBreath: 240 })
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinChampTenthBreathCensus(null), null)
  assert.equal(rejoinChampTenthBreathCensus(undefined), null)
  assert.equal(rejoinChampTenthBreathCensus('not an array'), null)
  assert.equal(rejoinChampTenthBreathCensus(42), null)
  assert.deepEqual(rejoinChampTenthBreathCensus([]), { rejoinChampTenthBreath: 0 })
  assert.deepEqual(rejoinChampTenthBreathCensus(['', 'no joins here', null, 42]), { rejoinChampTenthBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinChampTenthBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampTenthBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinChampTenthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampTenthBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinChampTenthBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampTenthBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinChampTenthBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampTenthBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinChampTenthBreath: n })
  assert.equal(rejoinChampTenthBreathConsistent(null), false)
  assert.equal(rejoinChampTenthBreathConsistent(undefined), false)
  assert.equal(rejoinChampTenthBreathConsistent('nope'), false)
  assert.equal(rejoinChampTenthBreathConsistent({}), false)
  assert.equal(rejoinChampTenthBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinChampTenthBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinChampTenthBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinChampTenthBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366/.367/.368/.370/.372/.374/.376/.379/.383/.385/.388/.389 lines the same shape)
  assert.equal(rejoinChampTenthBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinChampTenthBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinChampTenthBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinChampTenthBreathConsistent({ back: c(86399), prev: c(0), cur: c(59) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinChampTenthBreath: n })
  // the swell the synthetic faces keep (1 -> 5 (+4) -> 12 (+7))
  const swell = rejoinChampTenthBreathTrendRow({ back: c(1), prev: c(5), cur: c(12) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('1 -> 5 (+4) -> 12 (+7)'))
  assert.ok(swell.includes('v0.976.390'))
  // the fade the synthetic faces keep (16 -> 8 (-8) -> 0 (-8) the
  // two-step fade the fresh seat prices)
  const fade = rejoinChampTenthBreathTrendRow({ back: c(16), prev: c(8), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('16 -> 8 (-8) -> 0 (-8)'))
  // the swing the synthetic faces keep (0 -> 5 (+5) -> 0 (-5))
  const swing = rejoinChampTenthBreathTrendRow({ back: c(0), prev: c(5), cur: c(0) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('0 -> 5 (+5) -> 0 (-5)'))
  // the second swing the synthetic faces keep (10 -> 0 (-10) -> 6 (+6))
  const swing2 = rejoinChampTenthBreathTrendRow({ back: c(10), prev: c(0), cur: c(6) })
  assert.ok(swing2.includes('swing'))
  assert.ok(swing2.includes('10 -> 0 (-10) -> 6 (+6)'))
  // the held step the honest silence keeps (the row never invents -
  // the cons zero pairs the arc keeps)
  assert.equal(rejoinChampTenthBreathTrendRow({ back: c(1), prev: c(0), cur: c(0) }), null)
  assert.equal(rejoinChampTenthBreathTrendRow({ back: c(10), prev: c(0), cur: c(0) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinChampTenthBreathTrendRow(null), null)
  assert.equal(rejoinChampTenthBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps - the indexes the TRUE F-numbers price: the
  // F505/F506/F507 the c3(4/5/6), the F565/F566/F567 the
  // c3(62/63/64), the F574/F575/F576 the c3(71/72/73), the
  // F576/F577/F578 the c3(73/74/75), the F564/F565/F566 the
  // c3(61/62/63) - the fire-1243 off-by-one lesson the same hand
  // keeps)
  const c3 = (i) => ({ rejoinChampTenthBreath: REAL_ARC[i] })
  assert.ok(rejoinChampTenthBreathTrendRow({ back: c3(4), prev: c3(5), cur: c3(6) }).includes('0 -> 6 (+6) -> 0 (-6)'))
  assert.ok(rejoinChampTenthBreathTrendRow({ back: c3(62), prev: c3(63), cur: c3(64) }).includes('0 -> 10 (+10) -> 0 (-10)'))
  assert.ok(rejoinChampTenthBreathTrendRow({ back: c3(71), prev: c3(72), cur: c3(73) }).includes('0 -> 7 (+7) -> 0 (-7)'))
  assert.equal(rejoinChampTenthBreathTrendRow({ back: c3(73), prev: c3(74), cur: c3(75) }), null)
  assert.equal(rejoinChampTenthBreathTrendRow({ back: c3(61), prev: c3(62), cur: c3(63) }), null)
})

test('REAL 76-face window arc byte-exact - 6 classes the seat LIVE', () => {
  // the arc the fieldproof re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 76)
  assert.equal(classes.size, 6)
  assert.equal(Math.min(...arc), 0) // the constructive zeros the fewer-than-ten-gaps faces the lawful zero keeps (NO REAL zero face the window prices - the .388 arc's own ONE the F524 the elder zero the tenth does NOT inherit)
  assert.equal(Math.max(...arc), 12) // the tallest voiced value the F514 and the F560 keep
  // the voiced faces the honest distinction prices (the FIVE real
  // classes the 76-face window keeps - the 6 and the 12 the TWO-face
  // classes, the 7 and the 9 the singletons, the 10 the THREE-face
  // class)
  assert.equal(arc[0], 0) // the F501 the constructive zero the window's opener keeps
  assert.equal(arc[5], 6) // the F506 the above face the 6 > 5 prices
  assert.equal(arc[13], 12) // the F514 the under face the 12 < 13 keeps
  assert.equal(arc[23], 9) // the F524 the above face the 9 > 0 the elder zero keeps
  assert.equal(arc[45], 10) // the F546 the under face the 10 < 11 keeps
  assert.equal(arc[52], 10) // the F554 the LEVEL face the 10=10 keeps
  assert.equal(arc[54], 6) // the F556 the LEVEL face the 6=6 the CEILING the own max 6 keeps
  assert.equal(arc[57], 12) // the F560 the above face the 12 > 5 keeps
  assert.equal(arc[63], 10) // the F566 the above face the 10 > 9 keeps
  assert.equal(arc[72], 7) // the F575 the above face the 7 > 5 the elder REAL tail keeps
  assert.equal(arc[75], 0) // the F578 fresh tail the constructive zero the three-gap cadence keeps
  // the held law: FIFTY-SEVEN held pairs the 76-face window keeps -
  // the constructive-zero pairs ALL the branch keeps - NO REAL held
  // pair and NO mixed pair the honest break the seats price
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) held++
  assert.equal(held, 57)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - no tie-degenerate gravity the window prices (the 10 the
  // THREE-face class the honest probe declines - no single-value pull
  // the seat prices)
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 67)
  assert.equal(tally.get(6), 2)
  assert.equal(tally.get(7), 1)
  assert.equal(tally.get(9), 1)
  assert.equal(tally.get(10), 3)
  assert.equal(tally.get(12), 2)
})
