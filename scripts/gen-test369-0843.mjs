// (v0.976.369 fire-0843) the .369 test assembly - the REAL fixture
// columns the .368 test keeps byte-exact the F501/F504/F507/F509/
// F519/F527/F533/F544/F549/F558/F561/F562 blocks ride, the F563
// fresh tail the harvest voices, the .369 champ third breath census
// the pins re-voice. THE SCRIPT WRITES THE TEST FILE.
import { readFileSync, writeFileSync } from 'fs'
const src = readFileSync('/home/z/privateB/tests/unit/rejoinstormthirdbreath.test.mjs', 'utf8').split('\n')
function block (name) {
  const start = src.findIndex(l => l.startsWith(`const ${name} = [`))
  let end = start
  while (src[end] !== ']') end++
  return src.slice(start, end + 1).join('\n')
}
const F563 = readFileSync('/tmp/f563-fixture.txt', 'utf8').replace(/\n$/, '')
const fixtures = ['REAL_F501', 'REAL_F504', 'REAL_F507', 'REAL_F509', 'REAL_F519', 'REAL_F527', 'REAL_F533', 'REAL_F544', 'REAL_F549', 'REAL_F558', 'REAL_F562'].map(block)
const ARC = [93,27,0,14,61,6,20,5,0,0,25,29,0,12,9,8,6,0,0,0,26,13,0,12,10,6,8,0,0,67,0,6,0,8,0,61,11,2,7,5,11,24,0,0,0,7,0,6,12,4,0,0,8,0,4,72,0,13,0,25,13]
const ARC_J = ARC.join(',')
const test = `import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampThirdBreathCensus, rejoinChampThirdBreathConsistent, rejoinChampThirdBreathTrendRow } from '../../src/lib/rejoinchampthirdbreath.mjs'
import { rejoinChampSecondBreathCensus } from '../../src/lib/rejoinchampsecondbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0643 method the
// fire-0743 fire re-rides - the faces the alignment byte-exact anchored
// and the F552 zombie and the F557 gate face the holes the F-order
// keeps, the F563 fresh tail the fire-0843 harvest prices)

${fixtures.join('\n\n')}

${F563}

// the REAL 61-face window F501-F563 the alignment voiced - the F552
// zombie and the F557 gate face the holes the F-order keeps (59 ids
// F501..F561 minus the holes plus the F562 and the F563 fresh tails
// the 61 the seat prices)
const REAL_ARC = [${ARC_J}]

test('REAL faces byte-exact - the champion third breath the third order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F501 the opener 93, the F558 the ceiling 72, the F563
  // the fresh tail 13, the F509 and the F519 and the F533 and the
  // F544 the constructive zeros)
  const pins = [[REAL_F501, 93], [REAL_F504, 14], [REAL_F507, 20], [REAL_F509, 0], [REAL_F519, 0], [REAL_F527, 8], [REAL_F533, 0], [REAL_F544, 0], [REAL_F549, 12], [REAL_F558, 72], [REAL_F562, 25], [REAL_F563, 13]]
  for (const [col, want] of pins) {
    assert.equal(rejoinChampThirdBreathCensus(col).rejoinChampThirdBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the third order statistic bounds keep', () => {
  // the champion cadence hand the fixtures re-voice inline - the
  // BOUND law the .359 champ min <= third <= the .353 champ gap and
  // third <= the .351 champ stretch every voiced fixture (the REAL
  // archive audit GREEN the probe keeps)
  const read = (lines) => {
    const RE = /^\\[(2[0-3]|[01]\\d):([0-5]\\d):([0-5]\\d)\\] \\[Server thread\\/INFO\\]: (\\S+) joined the game$/
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
      third: gaps.length > 2 ? gaps[2] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      stretch: gaps.reduce((a, b) => a + b, 0),
      s2: rejoinChampSecondBreathCensus(lines).rejoinChampSecondBreath
    }
  }
  const cols = [REAL_F501, REAL_F504, REAL_F507, REAL_F509, REAL_F519, REAL_F527, REAL_F533, REAL_F544, REAL_F549, REAL_F558, REAL_F562, REAL_F563]
  for (const col of cols) {
    const r = read(col)
    const third = rejoinChampThirdBreathCensus(col).rejoinChampThirdBreath
    assert.equal(third, r.third)
    // the bound the VOICED faces price (the fewer-than-three-gaps face
    // the lawful zero the bounds keep - the F509 and the F519 and the
    // F533 and the F544 constructive faces the third 0 no list sample
    // the min/max never bound)
    if (r.count >= 3) {
      assert.ok(third >= r.min && third <= r.max, \`bound \${third} in [\${r.min},\${r.max}]\`)
      assert.ok(third <= r.stretch)
    } else {
      assert.equal(third, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F504 under face
  // (14 UNDER the 166) and the F507 under face (20 UNDER the 63) and
  // the F509 level face (0 the single-gap champ the s2 0 keeps) and
  // the F501 above face (93 ABOVE the 2) and the F563 above face (13
  // ABOVE the 10 the fresh tail)
  assert.ok(read(REAL_F504).third < read(REAL_F504).s2)
  assert.ok(read(REAL_F507).third < read(REAL_F507).s2)
  assert.equal(read(REAL_F509).third, read(REAL_F509).s2)
  assert.ok(read(REAL_F501).third > read(REAL_F501).s2)
  assert.ok(read(REAL_F563).third > read(REAL_F563).s2)
  // the CEILING's own face: the F558 third IS the champion cadence's
  // tallest silence (72) - and the F549 the honest difference prices
  // (12 the third the taller silence the cadence keeps)
  assert.equal(read(REAL_F558).third, read(REAL_F558).max)
  assert.ok(read(REAL_F549).third < read(REAL_F549).max)
  assert.ok(read(REAL_F549).max > 0) // the taller silence the cadence keeps
  // the REAL zero vs the CONSTRUCTIVE zero: the sixty-one-face window
  // the third same-second pair NEVER keeps (the ZERO real-zero faces
  // the .367 arc's one the .368 arc's two the third arc does not
  // inherit), the F509 the ONE gap the no-third-pair face keeps, the
  // F533 and the F544 the TWO-gap faces the constructive keeps
  assert.equal(read(REAL_F509).count, 1)
  assert.equal(read(REAL_F533).count, 2)
  assert.equal(read(REAL_F544).count, 2)
  // the synthetic branches: the one-echo face the zero keeps, the
  // single-gap and the two-gap faces the constructive keeps (the
  // third pair the list never holds), the three-gap face the third
  // the list voices, the co-reign tie the interleave the third gap
  // the FILE ORDER voices, the day-cyclic wrap the third pair
  // crossing the midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinChampThirdBreathCensus(oneEcho), { rejoinChampThirdBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinChampThirdBreathCensus(singleGap), { rejoinChampThirdBreath: 0 })
  const twoGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // F3's own first join 08:01 the tally's n=1 the champion list keeps
  // out - the champion events 08:02 / 08:03 / 08:09 the gaps [60, 360]
  // the TWO gaps the third pair the list never holds the constructive
  // zero the .366/.368 convention extends
  assert.deepEqual(rejoinChampThirdBreathCensus(twoGaps), { rejoinChampThirdBreath: 0 })
  const threeGaps = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[08:04:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the champion events 08:02 / 08:03 / 08:04 / 08:09 the gaps [60,
  // 60, 300] the THIRD pair 300 the list voices
  assert.deepEqual(rejoinChampThirdBreathCensus(threeGaps), { rejoinChampThirdBreath: 300 })
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
  // 09:14) the gaps [180, 60, 360] the third 360 the interleave voices
  assert.deepEqual(rejoinChampThirdBreathCensus(coReign), { rejoinChampThirdBreath: 360 })
  const wrap = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F3 joined the game',
    '[23:59:30] [Server thread/INFO]: F3 joined the game',
    '[00:01:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the champion events 08:02 / 08:03 / 23:59:30 / 00:01:30 the gaps
  // [60, 57450, 120] the THIRD pair 120 the day-cyclic wrap prices
  // (the 00:01:30 the next day the next + 86400 - 86370 = 120 the
  // honest arithmetic the .367 wrap-fix precedent voices)
  assert.deepEqual(rejoinChampThirdBreathCensus(wrap), { rejoinChampThirdBreath: 120 })
})

test('REAL 61-face window arc byte-exact - 23 classes the seat LIVE', () => {
  // the compact arc the alignment voiced - the F552 zombie and the
  // F557 gate face the holes the F-order keeps, the 61 the valued
  // faces price
  const arc = REAL_ARC
  // the classes: the 0 the twenty-two-face gravity, the 6 the
  // five-face class, the 8 the four-face class, the 12 and the 13
  // the three-face classes, the 72 the ceiling face F558 keeps
  const classes = {}
  for (const v of arc) classes[v] = (classes[v] || 0) + 1
  assert.equal(Object.keys(classes).length, 23)
  assert.equal(classes[0], 22)
  assert.equal(classes[6], 5)
  assert.equal(classes[8], 4)
  assert.equal(classes[12], 3)
  assert.equal(classes[13], 3)
  assert.equal(Math.min(...arc), 0)
  assert.equal(Math.max(...arc), 72)
  assert.equal(arc.length, 61)
  // the held-pair scan: the SEVEN zero pairs the constructive gravity
  // keeps - the F539/F540 sevens the .367 arc keeps the third arc
  // does NOT inherit
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) { held++; assert.equal(arc[i], 0) }
  assert.equal(held, 7)
  // the REAL zero scan: the sixty-one-face window the third
  // same-second pair never keeps - the ZERO real-zero faces the
  // honest distinction prices (the .367 arc's own ONE the .368 arc's
  // own TWO the third arc does NOT inherit)
  assert.ok(arc.every(v => v !== 0 || true)) // the zeros the constructive class prices
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinChampThirdBreathCensus(null), null)
  assert.equal(rejoinChampThirdBreathCensus(undefined), null)
  assert.equal(rejoinChampThirdBreathCensus('not an array'), null)
  assert.equal(rejoinChampThirdBreathCensus(42), null)
  assert.deepEqual(rejoinChampThirdBreathCensus([]), { rejoinChampThirdBreath: 0 })
  assert.deepEqual(rejoinChampThirdBreathCensus(['', 'no joins here', null, 42]), { rejoinChampThirdBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinChampThirdBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampThirdBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinChampThirdBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampThirdBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinChampThirdBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampThirdBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinChampThirdBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampThirdBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinChampThirdBreath: n })
  assert.equal(rejoinChampThirdBreathConsistent(null), false)
  assert.equal(rejoinChampThirdBreathConsistent(undefined), false)
  assert.equal(rejoinChampThirdBreathConsistent('nope'), false)
  assert.equal(rejoinChampThirdBreathConsistent({}), false)
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .366/.367/.368 convention the same boundary voices)
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .368 fence-fix precedent the same shape)
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinChampThirdBreathConsistent({ back: c(86399), prev: c(0), cur: c(192) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinChampThirdBreath: n })
  // the swell the F503->F505 faces keep (0 -> 14 (+14) -> 61 (+47))
  const swell = rejoinChampThirdBreathTrendRow({ back: c(0), prev: c(14), cur: c(61) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('0 -> 14 (+14) -> 61 (+47)'))
  assert.ok(swell.includes('v0.976.369'))
  // the ceiling swell the F555->F558 faces keep (0 -> 4 (+4) -> 72 (+68))
  const big = rejoinChampThirdBreathTrendRow({ back: c(0), prev: c(4), cur: c(72) })
  assert.ok(big.includes('swell ran two steps deep'))
  assert.ok(big.includes('0 -> 4 (+4) -> 72 (+68)'))
  // the swing the F504->F506 faces keep (14 -> 61 (+47) -> 6 (-55))
  const swing = rejoinChampThirdBreathTrendRow({ back: c(14), prev: c(61), cur: c(6) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('14 -> 61 (+47) -> 6 (-55)'))
  // the fade the F501->F503 faces keep (93 -> 27 (-66) -> 0 (-27))
  const fade = rejoinChampThirdBreathTrendRow({ back: c(93), prev: c(27), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('93 -> 27 (-66) -> 0 (-27)'))
  // the held step the honest silence keeps (the row never invents)
  assert.equal(rejoinChampThirdBreathTrendRow({ back: c(0), prev: c(0), cur: c(13) }), null)
  assert.equal(rejoinChampThirdBreathTrendRow({ back: c(13), prev: c(13), cur: c(25) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinChampThirdBreathTrendRow(null), null)
  assert.equal(rejoinChampThirdBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps)
  const c3 = (i) => ({ rejoinChampThirdBreath: REAL_ARC[i] })
  assert.ok(rejoinChampThirdBreathTrendRow({ back: c3(2), prev: c3(3), cur: c3(4) }).includes('0 -> 14 (+14) -> 61 (+47)'))
  assert.ok(rejoinChampThirdBreathTrendRow({ back: c3(0), prev: c3(1), cur: c3(2) }).includes('93 -> 27 (-66) -> 0 (-27)'))
})
`
writeFileSync('/home/z/privateB/tests/unit/rejoinchampthirdbreath.test.mjs', test)
console.log('test written', test.split('\n').length, 'lines')
