// (fire-0443 the :43 stream) the test fixture generator - the ten REAL
// pin columns the archive keeps byte-exact, the test file the pins
// embed. Usage: node scripts/gen-test-0443.mjs > tests/unit/rejoinstormeleventhbreath.test.mjs
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-0443.json')).map
const dir = '/home/z/faces0443'
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const PINS = ['F501', 'F508', 'F511', 'F521', 'F536', 'F548', 'F558', 'F564', 'F577', 'F579']
const cols = {}
for (const f of PINS) {
  const id = map[f].id
  const lines = readFileSync(`${dir}/face${id}.log`, 'utf8').split('\n')
  cols[f] = lines.filter(l => JOIN_ECHO_RE.test(l))
  console.error(`# ${f} id=${id} join-echoes=${cols[f].length}`)
}
// the eleventh arc re-check per pin (the byte-exact the generator voices)
const stormGaps = (lines) => {
  const tally = new Map()
  const revts = []
  for (const l of lines) {
    const m = JOIN_ECHO_RE.exec(l)
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
  return gaps
}
const WANTS = { F501: 13, F508: 0, F511: 27, F521: 6, F536: 52, F548: 0, F558: 43, F564: 48, F577: 16, F579: 7 }
for (const f of PINS) {
  const gaps = stormGaps(cols[f])
  const eleventh = gaps.length > 10 ? gaps[10] : 0
  if (eleventh !== WANTS[f]) { console.error(`# PIN MISMATCH ${f}: got ${eleventh} want ${WANTS[f]}`); process.exit(1) }
  console.error(`# ${f} eleventh=${eleventh} gapCount=${gaps.length} OK`)
}
const REAL_ARC = [13,0,0,0,7,6,0,0,0,0,27,8,0,2,0,8,9,0,0,0,6,2,0,5,3,10,0,0,0,0,0,0,12,0,0,52,0,2,3,9,21,9,38,0,0,8,0,0,0,3,0,0,8,0,1,43,0,2,0,0,2,48,22,0,0,0,8,0,0,4,0,0,5,0,16,0,7]

let out = ''
out += `import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinStormEleventhBreathCensus, rejoinStormEleventhBreathConsistent, rejoinStormEleventhBreathTrendRow } from '../../src/lib/rejoinstormeleventhbreath.mjs'
import { rejoinStormTenthBreathCensus } from '../../src/lib/rejoinstormtenthbreath.mjs'
import { rejoinStormNinthBreathCensus } from '../../src/lib/rejoinstormninthbreath.mjs'

// the REAL columns the rebuilt archive keeps (the fire-0843 method the
// fire-1243/1343/1543/1743/1843/1943/2043/2143/2243/2343/0143/0243/0343
// fires re-ride - the faces the alignment byte-exact anchored and the
// F-map the census slide the NINETEEN anchors lock the same ids
// price: F1 = 37403158305 one hit, the F552 cancelled and the F557
// artifact hole the holes the F-order keeps)
`
for (const f of PINS) {
  out += `\nconst REAL_${f} = [\n`
  for (const l of cols[f]) out += `  ${JSON.stringify(l)},\n`
  out += `]\n`
}
out += `
const REAL_ARC = [
${REAL_ARC.join(',')}
]

test('REAL faces byte-exact - the storm eleventh breath the eleventh order statistic prices', () => {
  // the columns the archive voices - the census the value byte-exact
  // keeps (the F501 the above face the 13 above the 9 the window's own
  // opener prices, the F508 the REAL ZERO the fourteen-gap storm the
  // eleventh pair the same second prices, the F511 the LEVEL face the
  // 27=27 the REAL same-tempo keeps, the F521 the under face the 6
  // under the 46 the window's own TALLEST tenth the deepest under
  // prices, the F536 the above face the 52 above the 7 the window's
  // own TALLEST voiced value prices, the F548 the REAL ZERO the
  // seventeen-gap storm the eleventh pair the same second the elder
  // tenth-zero face inherits, the F558 the above face the 43 above the
  // 7 the second-tallest prices, the F564 the CEILING face the 48 the
  // max 48 the EQUALITY prices, the F577 the elder tail the 16 above
  // the 1 the REAL fourteen-gap cadence keeps, the F579 the fresh tail
  // the 7 under the 9 the REAL eleven-gap cadence the fire-0443 ledger
  // keeps)
  const pins = [[REAL_F501, 13], [REAL_F508, 0], [REAL_F511, 27], [REAL_F521, 6], [REAL_F536, 52], [REAL_F548, 0], [REAL_F558, 43], [REAL_F564, 48], [REAL_F577, 16], [REAL_F579, 7]]
  for (const [col, want] of pins) {
    assert.equal(rejoinStormEleventhBreathCensus(col).rejoinStormEleventhBreath, want)
  }
})

test('the BOUND + DIALOG + CEILING laws - the edges the eleventh order statistic bounds keep', () => {
  // the storm cadence hand the fixtures re-voice inline - the BOUND
  // law the .358 storm min <= eleventh <= the .352 re-join gap and
  // eleventh <= the .350 span's own sum-law every voiced fixture (the
  // REAL archive audit GREEN the probe keeps)
  const read = (lines) => {
    const RE = /^\\[(2[0-3]|[01]\\d):([0-5]\\d):([0-5]\\d)\\] \\[Server thread\\/INFO\\]: (\\S+) joined the game$/
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
      eleventh: gaps.length > 10 ? gaps[10] : 0,
      count: gaps.length,
      min: gaps.length ? Math.min(...gaps) : 0,
      max: gaps.length ? Math.max(...gaps) : 0,
      gapsum: gaps.reduce((a, b) => a + b, 0),
      tenth: rejoinStormTenthBreathCensus(lines).rejoinStormTenthBreath
    }
  }
  const cols = [REAL_F501, REAL_F508, REAL_F511, REAL_F521, REAL_F536, REAL_F548, REAL_F558, REAL_F564, REAL_F577, REAL_F579]
  for (const col of cols) {
    const r = read(col)
    const eleventh = rejoinStormEleventhBreathCensus(col).rejoinStormEleventhBreath
    assert.equal(eleventh, r.eleventh)
    // the bound the VOICED faces price (the fewer-than-eleven-gaps face
    // the lawful zero the bounds keep - the no-list-sample face the
    // min/max never bound)
    if (r.count >= 11) {
      assert.ok(eleventh >= r.min && eleventh <= r.max, \`bound \${eleventh} in [\${r.min},\${r.max}]\`)
      assert.ok(eleventh <= r.gapsum)
    } else {
      assert.equal(eleventh, 0)
    }
  }
  // the DIALOG's own edges the fixtures voice: the F501 above face (13
  // ABOVE the 9 the window's own opener prices) and the F508 under
  // face (0 UNDER the 1 the REAL zero the under-dialog prices) and
  // the F511 level face (27 LEVEL the 27 the REAL same-tempo keeps)
  // and the F521 under face (6 UNDER the 46 the deepest under prices)
  // and the F536 above face (52 ABOVE the 7 the TALLEST voiced prices)
  // the F548 under face (0 UNDER the 1 the elder tenth-zero face the
  // mixed under-dialog prices) and the F558 above face (43 ABOVE the
  // 7) and the F564 above face (48 ABOVE the 28 the CEILING face the
  // above-dialog prices) and the F577 above face (16 ABOVE the 1) and
  // the F579 under face (7 UNDER the 9 the fresh tail keeps) - no
  // constant order the honest seat prices
  assert.ok(read(REAL_F501).eleventh > read(REAL_F501).tenth)
  assert.ok(read(REAL_F508).eleventh < read(REAL_F508).tenth)
  assert.equal(read(REAL_F511).eleventh, read(REAL_F511).tenth)
  assert.ok(read(REAL_F521).eleventh < read(REAL_F521).tenth)
  assert.ok(read(REAL_F536).eleventh > read(REAL_F536).tenth)
  assert.ok(read(REAL_F548).eleventh < read(REAL_F548).tenth)
  assert.ok(read(REAL_F558).eleventh > read(REAL_F558).tenth)
  assert.ok(read(REAL_F564).eleventh > read(REAL_F564).tenth)
  assert.ok(read(REAL_F577).eleventh > read(REAL_F577).tenth)
  assert.ok(read(REAL_F579).eleventh < read(REAL_F579).tenth)
  // the CEILING's own face the fixtures voice: the F564's own 48 the
  // max 48 the EQUALITY the ceiling prices (the .389 arc's own NO
  // ceiling-face the eleventh DOES price the F564 the ONE) - the
  // F536's own 52 the TALLEST voiced the own max 61 the below prices,
  // the F558's own 43 the own max 59 the below keeps, the F543's own
  // 38 the own max 104 the below keeps
  assert.equal(read(REAL_F564).eleventh, read(REAL_F564).max)
  assert.ok(read(REAL_F536).eleventh < read(REAL_F536).max)
  assert.ok(read(REAL_F558).eleventh < read(REAL_F558).max)
})

test('synthetics - the branch battery the fewer-than-eleven-gaps convention keeps', () => {
  // the synthetics the branch battery keeps - the one-echo face the
  // lawful zero keeps, the single-gap through the ten-gap faces the
  // fewer-than-eleven-gaps convention prices (the ELEVENTH pair the
  // list never holds - the .372/.374/.376/.383/.385/.389 convention
  // extends, the ten-gap face the .389's own tenth the elder seat
  // voiced the eleventh the honest zero the distinction keeps), the
  // eleven-gap face the ELEVENTH the list voices, the co-reign tie
  // the interleave the eleventh gap the FILE ORDER voices, the
  // sub-peak pair the storm list still rides (the storm hand every
  // name's own re-joins the tally keeps - the peak filter the
  // champion hand alone prices), the same-second eleventh pair the
  // REAL zero the list voices, the day-cyclic wrap the eleventh pair
  // crossing the midnight cell prices
  const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
  assert.deepEqual(rejoinStormEleventhBreathCensus(oneEcho), { rejoinStormEleventhBreath: 0 })
  const singleGap = [
    '[04:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[04:01:00] [Server thread/INFO]: F3 joined the game',
    '[04:09:00] [Server thread/INFO]: F3 joined the game'
  ]
  assert.deepEqual(rejoinStormEleventhBreathCensus(singleGap), { rejoinStormEleventhBreath: 0 })
`
// the ladder faces twoGaps..tenGaps - re-joins 08:02.. minute steps then the kick
const ladder = []
for (let k = 2; k <= 7; k++) {
  const evts = []
  for (let m = 2; m <= k + 1; m++) evts.push(`[08:0${m}:00] [Server thread/INFO]: F3 joined the game`)
  evts.push('[08:09:00] [Server thread/INFO]: F3 joined the game')
  ladder.push({ k, evts, note: `the storm events 08:02 through 08:0${k + 1} and 08:09 the gaps [${Array(k - 1).fill(60).concat([(8 - k) * 60]).join(', ')}] the ${k === 2 ? 'TWO' : k === 3 ? 'THREE' : k === 4 ? 'FOUR' : k === 5 ? 'FIVE' : k === 6 ? 'SIX' : 'SEVEN'} gaps the ELEVENTH pair the list never holds - the constructive zero the .372 convention extends` })
}
// eightGaps..tenGaps: re-joins 08:02..08:(k+1) uniform
for (let k = 8; k <= 10; k++) {
  const evts = []
  for (let m = 2; m <= k + 2; m++) evts.push(`[08:${String(m).padStart(2, '0')}:00] [Server thread/INFO]: F3 joined the game`)
  ladder.push({ k, evts, note: `the storm events 08:02 through 08:${String(k + 2).padStart(2, '0')} the gaps [${Array(k).fill(60).join(', ')}] the ${k === 8 ? 'EIGHT' : k === 9 ? 'NINE' : 'TEN'} gaps the ELEVENTH pair ${k === 10 ? 'no list holds - the constructive zero the ten-gap convention extends' : 'the list never holds - the constructive zero extends'}` })
}
for (const { k, evts, note } of ladder) {
  const name = k === 2 ? 'twoGaps' : k === 3 ? 'threeGaps' : k === 4 ? 'fourGaps' : k === 5 ? 'fiveGaps' : k === 6 ? 'sixGaps' : k === 7 ? 'sevenGaps' : k === 8 ? 'eightGaps' : k === 9 ? 'nineGaps' : 'tenGaps'
  out += `  const ${name} = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
${evts.map(e => `    ${JSON.stringify(e)}`).join(',\n')}
  ]
  // ${note}
  assert.deepEqual(rejoinStormEleventhBreathCensus(${name}), { rejoinStormEleventhBreath: 0 })
`
}
out += `  // the elder tenth the tenGaps face the 60 the same list the seats
  // price (the .389's own ten-gap convention the eleventh the honest
  // zero the distinction keeps)
  assert.equal(rejoinStormTenthBreathCensus(tenGaps).rejoinStormTenthBreath, 60)
  const elevenGaps = [
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
    '[08:13:00] [Server thread/INFO]: F3 joined the game',
    '[08:26:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the storm events 08:02 through 08:11 and 08:13 and 08:26 the gaps
  // [60, 60, 60, 60, 60, 60, 60, 60, 60, 120, 780] the ELEVEN gaps
  // the ELEVENTH pair 780 the list voices (the tenth 120 the elder
  // seat the same face prices)
  assert.deepEqual(rejoinStormEleventhBreathCensus(elevenGaps), { rejoinStormEleventhBreath: 780 })
  assert.equal(rejoinStormTenthBreathCensus(elevenGaps).rejoinStormTenthBreath, 120)
  const coReign = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:01:00] [Server thread/INFO]: F7 joined the game',
    '[08:02:00] [Server thread/INFO]: F3 joined the game',
    '[08:03:00] [Server thread/INFO]: F7 joined the game',
    '[08:05:00] [Server thread/INFO]: F3 joined the game',
    '[08:09:00] [Server thread/INFO]: F7 joined the game',
    '[08:14:00] [Server thread/INFO]: F3 joined the game',
    '[08:20:00] [Server thread/INFO]: F7 joined the game',
    '[08:27:00] [Server thread/INFO]: F3 joined the game',
    '[08:35:00] [Server thread/INFO]: F7 joined the game',
    '[08:44:00] [Server thread/INFO]: F3 joined the game',
    '[08:54:00] [Server thread/INFO]: F7 joined the game',
    '[09:05:00] [Server thread/INFO]: F3 joined the game',
    '[09:17:00] [Server thread/INFO]: F7 joined the game'
  ]
  // the co-reign tie the interleave the eleventh gap the FILE ORDER
  // voices (the re-join events F3 08:02 / F7 08:03 / F3 08:05 / F7
  // 08:09 / F3 08:14 / F7 08:20 / F3 08:27 / F7 08:35 / F3 08:44 / F7
  // 08:54 / F3 09:05 / F7 09:17 the gaps [60, 120, 240, 300, 360,
  // 420, 480, 540, 600, 660, 720] the ELEVENTH pair 720 the list
  // voices - the F3/F7 the co-reign tally the beyond-first echoes the
  // storm list rides)
  assert.deepEqual(rejoinStormEleventhBreathCensus(coReign), { rejoinStormEleventhBreath: 720 })
  const subPeak = [
    '[08:00:00] [Server thread/INFO]: YardSurvey joined the game',
    '[08:00:30] [Server thread/INFO]: F9 joined the game',
    '[08:01:00] [Server thread/INFO]: F3 joined the game',
    '[08:01:00] [Server thread/INFO]: F9 joined the game',
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
    '[08:13:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the sub-peak pair the storm list still rides (the F9's own single
  // re-join the F3's own march the FILE ORDER interleaves - the F9's
  // own first join 08:00:30 the beyond-first echo 08:01 rides - the
  // re-join events F9 08:01 / F3 08:02 through 08:11 and 08:13 the
  // gaps [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 120] the ELEVENTH
  // pair 120 the list voices - the peak filter the champion hand alone
  // prices)
  assert.deepEqual(rejoinStormEleventhBreathCensus(subPeak), { rejoinStormEleventhBreath: 120 })
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
    '[08:12:00] [Server thread/INFO]: F3 joined the game',
    '[08:12:00] [Server thread/INFO]: F3 joined the game'
  ]
  // the same-second ELEVENTH pair the list voices - the storm events
  // 08:02 through 08:12 and 08:12 the pairs [60, 60, 60, 60, 60, 60,
  // 60, 60, 60, 60, 0] the ELEVENTH pair 0 the same second prices
  // (the REAL zero the voiced face the F508/F537/F548/F566's own law
  // the synthetic re-voices - the elder tenth 60 the same list the
  // seats price)
  assert.deepEqual(rejoinStormEleventhBreathCensus(sameSecond), { rejoinStormEleventhBreath: 0 })
  assert.equal(rejoinStormTenthBreathCensus(sameSecond).rejoinStormTenthBreath, 60)
  const wrap = [
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
    '[23:59:30] [Server thread/INFO]: F3 joined the game',
    '[00:01:30] [Server thread/INFO]: F3 joined the game'
  ]
  // the day-cyclic wrap the ELEVENTH pair crosses the midnight cell
  // (the storm events 08:02 through 08:11 and 23:59:30 and 00:01:30
  // the gaps [60, 60, 60, 60, 60, 60, 60, 60, 60, 56910, 120] -
  // 86370 - 29460 = 56910 the tenth pair rides, 90 + 86400 - 86370 =
  // 120 the ELEVENTH the list voices)
  assert.deepEqual(rejoinStormEleventhBreathCensus(wrap), { rejoinStormEleventhBreath: 120 })
})

test('refusal battery - the strict frame the deformed lines never ride', () => {
  // the census the strict frame keeps - the deformed lines the skip
  // rides, the honest zero the no-join face keeps
  assert.equal(rejoinStormEleventhBreathCensus(null), null)
  assert.equal(rejoinStormEleventhBreathCensus(undefined), null)
  assert.equal(rejoinStormEleventhBreathCensus('not an array'), null)
  assert.equal(rejoinStormEleventhBreathCensus(42), null)
  assert.deepEqual(rejoinStormEleventhBreathCensus([]), { rejoinStormEleventhBreath: 0 })
  assert.deepEqual(rejoinStormEleventhBreathCensus(['', 'no joins here', null, 42]), { rejoinStormEleventhBreath: 0 })
  // the malformed clock cells the strict frame never rides
  assert.deepEqual(rejoinStormEleventhBreathCensus([
    '[24:00:00] [Server thread/INFO]: F3 joined the game', // the hour 24 the day never keeps
    '[12:60:00] [Server thread/INFO]: F3 joined the game', // the minute 60 the clock never keeps
    '[12:00:60] [Server thread/INFO]: F3 joined the game', // the second 60 the clock never keeps
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormEleventhBreath: 0 })
  // the non-join lanes the lane law keeps out
  assert.deepEqual(rejoinStormEleventhBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 left the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the team', // the near-join the frame never rides
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormEleventhBreath: 0 })
  // the kernel prefix the deformed line the skip keeps
  assert.deepEqual(rejoinStormEleventhBreathCensus([
    'kernel: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormEleventhBreath: 0 })
  // the multi-line join the trailing spaces the strict frame never rides
  assert.deepEqual(rejoinStormEleventhBreathCensus([
    '[12:00:00] [Server thread/INFO]: F3 joined the game ',
    '[12:00:00] [Server thread/INFO]: F3 joined the game',
    '[12:00:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinStormEleventhBreath: 0 })
})

test('fence - every branch the gap words own integer law keeps', () => {
  const c = (n) => ({ rejoinStormEleventhBreath: n })
  assert.equal(rejoinStormEleventhBreathConsistent(null), false)
  assert.equal(rejoinStormEleventhBreathConsistent(undefined), false)
  assert.equal(rejoinStormEleventhBreathConsistent('nope'), false)
  assert.equal(rejoinStormEleventhBreathConsistent({}), false)
  assert.equal(rejoinStormEleventhBreathConsistent({ back: c(0), prev: c(0) }), false) // the cur missing
  assert.equal(rejoinStormEleventhBreathConsistent({ back: c(-1), prev: c(0), cur: c(0) }), false) // the negative the fence never rides
  assert.equal(rejoinStormEleventhBreathConsistent({ back: c(0), prev: c(86399), cur: c(0) }), true) // the day ceiling 86399 the fence keeps (the .368 fence-fix lesson the same boundary voices)
  assert.equal(rejoinStormEleventhBreathConsistent({ back: c(0), prev: c(86400), cur: c(0) }), false) // past the day the fence declines (the fence 0..86399 the module voices - the .366/.367/.368/.370/.372/.374/.376/.379/.383/.385/.389/.390 lines the same shape)
  assert.equal(rejoinStormEleventhBreathConsistent({ back: c(0), prev: c(86401), cur: c(0) }), false) // past the day the fence declines
  assert.equal(rejoinStormEleventhBreathConsistent({ back: c(0), prev: c(1.5), cur: c(0) }), false) // the fraction the integer law never rides
  assert.equal(rejoinStormEleventhBreathConsistent({ back: c(0), prev: c(0), cur: c(0) }), true)
  assert.equal(rejoinStormEleventhBreathConsistent({ back: c(86399), prev: c(0), cur: c(59) }), true)
})

test('REAL windows + tail - the two-step shape the archive keeps', () => {
  const c = (n) => ({ rejoinStormEleventhBreath: n })
  // the swell the F538->F540 faces keep (2 -> 3 (+1) -> 9 (+6) the
  // two-step swell the fresh window prices)
  const swell = rejoinStormEleventhBreathTrendRow({ back: c(2), prev: c(3), cur: c(9) })
  assert.ok(swell.includes('swell ran two steps deep'))
  assert.ok(swell.includes('2 -> 3 (+1) -> 9 (+6)'))
  assert.ok(swell.includes('v0.976.392'))
  // the fade the F511->F513 faces keep (27 -> 8 (-19) -> 0 (-8) the
  // two-step fade the fresh window prices)
  const fade = rejoinStormEleventhBreathTrendRow({ back: c(27), prev: c(8), cur: c(0) })
  assert.ok(fade.includes('fade ran two steps deep'))
  assert.ok(fade.includes('27 -> 8 (-19) -> 0 (-8)'))
  // the swing the F540->F542 faces keep (9 -> 21 (+12) -> 9 (-12))
  const swing = rejoinStormEleventhBreathTrendRow({ back: c(9), prev: c(21), cur: c(9) })
  assert.ok(swing.includes('swing'))
  assert.ok(swing.includes('9 -> 21 (+12) -> 9 (-12)'))
  // the second swing the F563->F565 faces keep (2 -> 48 (+46) -> 22 (-26))
  const swing2 = rejoinStormEleventhBreathTrendRow({ back: c(2), prev: c(48), cur: c(22) })
  assert.ok(swing2.includes('swing'))
  assert.ok(swing2.includes('2 -> 48 (+46) -> 22 (-26)'))
  // the held step the honest silence keeps (the row never invents -
  // the F502/F503/F504 and the F573/F574/F575 zeros the arc keeps)
  assert.equal(rejoinStormEleventhBreathTrendRow({ back: c(1), prev: c(0), cur: c(0) }), null)
  assert.equal(rejoinStormEleventhBreathTrendRow({ back: c(10), prev: c(0), cur: c(0) }), null)
  // the deformed triples the fence declines
  assert.equal(rejoinStormEleventhBreathTrendRow(null), null)
  assert.equal(rejoinStormEleventhBreathTrendRow({ back: c(-5), prev: c(0), cur: c(0) }), null)
  // the REAL arc's own windows the rows re-voice (the census the same
  // values the arc keeps - the indexes the TRUE F-numbers price: the
  // F511/F512/F513 the c3(10/11/12), the F538/F539/F540 the
  // c3(37/38/39), the F540/F541/F542 the c3(39/40/41), the
  // F563/F564/F565 the c3(60/61/62), the F564/F565/F566 the
  // c3(61/62/63), the F575/F576/F577 the c3(72/73/74), the
  // F577/F578/F579 the c3(74/75/76) - the fire-1243 off-by-one
  // lesson the same hand keeps)
  const c3 = (i) => ({ rejoinStormEleventhBreath: REAL_ARC[i] })
  assert.ok(rejoinStormEleventhBreathTrendRow({ back: c3(10), prev: c3(11), cur: c3(12) }).includes('27 -> 8 (-19) -> 0 (-8)'))
  assert.ok(rejoinStormEleventhBreathTrendRow({ back: c3(37), prev: c3(38), cur: c3(39) }).includes('2 -> 3 (+1) -> 9 (+6)'))
  assert.ok(rejoinStormEleventhBreathTrendRow({ back: c3(39), prev: c3(40), cur: c3(41) }).includes('9 -> 21 (+12) -> 9 (-12)'))
  assert.ok(rejoinStormEleventhBreathTrendRow({ back: c3(60), prev: c3(61), cur: c3(62) }).includes('2 -> 48 (+46) -> 22 (-26)'))
  assert.ok(rejoinStormEleventhBreathTrendRow({ back: c3(61), prev: c3(62), cur: c3(63) }).includes('48 -> 22 (-26) -> 0 (-22)'))
  assert.ok(rejoinStormEleventhBreathTrendRow({ back: c3(72), prev: c3(73), cur: c3(74) }).includes('5 -> 0 (-5) -> 16 (+16)'))
  assert.ok(rejoinStormEleventhBreathTrendRow({ back: c3(74), prev: c3(75), cur: c3(76) }).includes('16 -> 0 (-16) -> 7 (+7)'))
  assert.equal(rejoinStormEleventhBreathTrendRow({ back: c3(1), prev: c3(2), cur: c3(3) }), null)
  assert.equal(rejoinStormEleventhBreathTrendRow({ back: c3(70), prev: c3(71), cur: c3(72) }), null)
})

test('REAL 77-face window arc byte-exact - 21 classes the seat LIVE', () => {
  // the arc the fieldproof re-voices from the archive itself - the
  // pin the same list byte-exact keeps
  const arc = REAL_ARC
  const classes = new Set(arc)
  assert.equal(arc.length, 77)
  assert.equal(classes.size, 21)
  assert.equal(Math.min(...arc), 0) // the FOUR-face honest absence keeps (the F508 and the F537 and the F548 and the F566 the same-second pairs price - the constructive zeros the fewer-than-eleven-gaps faces the lawful zero the bounds keep)
  assert.equal(Math.max(...arc), 52) // the tallest voiced value F536 keeps
  // the zero faces the honest distinction prices (the REAL zero FOUR
  // faces the window keeps - the F508's own fourteen-gap and the
  // F537's own fifteen-gap and the F548's own seventeen-gap and the
  // F566's own twelve-gap storms the eleventh pair the same second
  // price, the .389 arc's own ONE the F538 the elder zero the
  // eleventh does NOT inherit the F538's own 2 the above-dialog
  // prices)
  assert.equal(arc[0], 13) // the F501 the above-dialog the 13 > 9 prices
  assert.equal(arc[7], 0) // the F508 the REAL ZERO the same-second pair keeps
  assert.equal(arc[10], 27) // the F511 the LEVEL face the REAL same-tempo keeps
  assert.equal(arc[35], 52) // the F536 the window's own TALLEST voiced value
  assert.equal(arc[37], 2) // the F538 the above face the elder zero the NOT-inherit keeps
  assert.equal(arc[42], 38) // the F543 the third-tallest the below keeps
  assert.equal(arc[55], 43) // the F558 the second-tallest the above face keeps
  assert.equal(arc[61], 48) // the F564 the CEILING face the EQUALITY keeps
  assert.equal(arc[63], 0) // the F566 the REAL ZERO the same-second pair keeps
  assert.equal(arc[74], 16) // the F577 the elder tail the above face the REAL fourteen-gap cadence keeps
  assert.equal(arc[75], 0) // the F578 the constructive tail the nine-gap cadence keeps
  assert.equal(arc[76], 7) // the F579 fresh tail the under face the REAL eleven-gap cadence keeps
  // the held law: TWENTY-TWO held pairs the 77-face window keeps - the
  // SEVENTEEN constructive-zero pairs and the FIVE mixed pairs the
  // zero-boundary keeps (the F507/F508 and the F508/F509 and the
  // F547/F548 and the F548/F549 and the F566/F567 the mixed pairs
  // keep) - NO REAL held pair the honest break the seats price
  let held = 0
  for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) held++
  assert.equal(held, 22)
  // the multi-class law: the mode candidate the honest probe DECLINED
  // - the 2 and the 8 the co-gravity FIVE-face classes the honest
  // probe declines (no single-value pull the seat prices)
  const tally = new Map()
  for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
  assert.equal(tally.get(0), 42) // the THIRTY-EIGHT constructive zeros + the FOUR REAL zeros the honest classes keep
  assert.equal(tally.get(1), 1)
  assert.equal(tally.get(2), 5)
  assert.equal(tally.get(3), 3)
  assert.equal(tally.get(4), 1)
  assert.equal(tally.get(5), 2)
  assert.equal(tally.get(6), 2)
  assert.equal(tally.get(7), 2)
  assert.equal(tally.get(8), 5)
  assert.equal(tally.get(9), 3)
  assert.equal(tally.get(10), 1)
  assert.equal(tally.get(12), 1)
  assert.equal(tally.get(13), 1)
  assert.equal(tally.get(16), 1)
  assert.equal(tally.get(21), 1)
  assert.equal(tally.get(22), 1)
  assert.equal(tally.get(27), 1)
  assert.equal(tally.get(38), 1)
  assert.equal(tally.get(43), 1)
  assert.equal(tally.get(48), 1)
  assert.equal(tally.get(52), 1)
})
`
process.stdout.write(out)
