// (fire-0243 the :43 stream) the fieldproof - the .385/.388 method the
// fresh seat re-rides: the 75-face archive the census module re-voices
// the REAL_ARC the test embeds byte-exact (the FIELDPROOF), the ten
// REAL columns the test keeps the pins re-voice (the PINCHECK), the
// synthetics the module re-voices (the branch battery), the FRESH
// CROSS the landed seats re-voice (the F577 fourteen-gap face the
// fresh tail the .385 storm ninth and the .383 storm eighth and the
// .388 champ ninth the same list prices). The lightweight arithmetic
// gate - zero fleet wiring, zero server, the CI the suite speaks.
// Usage: node scripts/fire0243-fieldproof.mjs <facesdir> <map.json>
import { readFileSync, existsSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces0243'
const mapFile = process.argv[3] || '/home/z/my-project/dispatch-census-0243.json'
const { rejoinStormTenthBreathCensus } = await import('../src/lib/rejoinstormtenthbreath.mjs')
const { rejoinStormNinthBreathCensus } = await import('../src/lib/rejoinstormninthbreath.mjs')
const { rejoinStormEighthBreathCensus } = await import('../src/lib/rejoinstormeighthbreath.mjs')
const { rejoinChampNinthBreathCensus } = await import('../src/lib/rejoinchampninthbreath.mjs')
const { rejoinChampEighthBreathCensus } = await import('../src/lib/rejoinchampeighthbreath.mjs')
const { rejoinChampSeventhBreathCensus } = await import('../src/lib/rejoinchampseventhbreath.mjs')

// the test file the single source of truth - the REAL_ARC and the
// REAL_* fixtures the test embeds the same lists the checks ride
const testSrc = readFileSync(new URL('../tests/unit/rejoinstormtenthbreath.test.mjs', import.meta.url), 'utf8')
const arcM = testSrc.match(/const REAL_ARC = \[\s*([\d,\s]+?)\s*\]/)
if (!arcM) { console.error('PINCHECK FAIL: REAL_ARC not found in the test'); process.exit(1) }
const REAL_ARC = arcM[1].split(',').map(Number)
const fixtureCols = {}
for (const m of testSrc.matchAll(/const (REAL_F\d+) = \[\n((?: .*\n)+?)\]/g)) {
  fixtureCols[m[1]] = m[2].split('\n').filter(l => l.trim().startsWith('"')).map(l => JSON.parse(l.trim().replace(/,$/, '')))
}

const map = JSON.parse(readFileSync(mapFile, 'utf8')).map

// FIELDPROOF: the 75-face archive the arc re-voices byte-exact
let hits = 0
const drift = []
let i = 0
for (let f = 501; f <= 577; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') continue // the F552 cancelled + the F557 artifact hole the F-order keeps
  const face = `${dir}/face${m.id}.log`
  if (!existsSync(face)) continue
  const got = rejoinStormTenthBreathCensus(readFileSync(face, 'utf8').split('\n')).rejoinStormTenthBreath
  if (got === REAL_ARC[i]) hits++
  else drift.push(`F${f} got ${got} want ${REAL_ARC[i]}`)
  i++
}
console.log(`FIELDPROOF ${hits}/${REAL_ARC.length} byte-exact`, drift.length ? 'DRIFT: ' + JSON.stringify(drift) : '')

// PINCHECK: the test's own embedded columns the module re-voices
const pins = [['F501', 9], ['F508', 1], ['F517', 33], ['F521', 46], ['F524', 6], ['F526', 35], ['F538', 0], ['F556', 5], ['F569', 6], ['F577', 1]]
let pinOK = 0
const pinBad = []
for (const [n, want] of pins) {
  const col = fixtureCols['REAL_' + n]
  if (!col || col.length === 0) { pinBad.push(`F${n} no-fixture`); continue }
  const got = rejoinStormTenthBreathCensus(col).rejoinStormTenthBreath
  if (got === want) pinOK++
  else pinBad.push(`F${n} got ${got} want ${want}`)
}
console.log(`PINCHECK ${pinOK}/10`, pinBad.length ? 'BAD: ' + JSON.stringify(pinBad) : '')

// FRESH CROSS: the F577 fourteen-gap face the landed seats re-voice
// (the .389 storm tenth 1 the fresh seat prices and the .385 storm
// ninth 0 and the .383 storm eighth 23 and the .388 champ ninth 0 and
// the .384 champ eighth 0 and the .379 champ seventh 0 the same face
// the family the fresh tail validates)
const f577 = map.F577 ? `${dir}/face${map.F577.id}.log` : null
if (f577 && existsSync(f577)) {
  const lines = readFileSync(f577, 'utf8').split('\n')
  const crossOK =
    rejoinStormTenthBreathCensus(lines).rejoinStormTenthBreath === 1 &&
    rejoinStormNinthBreathCensus(lines).rejoinStormNinthBreath === 0 &&
    rejoinStormEighthBreathCensus(lines).rejoinStormEighthBreath === 23 &&
    rejoinChampNinthBreathCensus(lines).rejoinChampNinthBreath === 0 &&
    rejoinChampEighthBreathCensus(lines).rejoinChampEighthBreath === 0 &&
    rejoinChampSeventhBreathCensus(lines).rejoinChampSeventhBreath === 0
  console.log('CROSS F577 storm tenth =', rejoinStormTenthBreathCensus(lines).rejoinStormTenthBreath,
    '| storm ninth =', rejoinStormNinthBreathCensus(lines).rejoinStormNinthBreath,
    '| storm eighth =', rejoinStormEighthBreathCensus(lines).rejoinStormEighthBreath,
    '| champ ninth =', rejoinChampNinthBreathCensus(lines).rejoinChampNinthBreath,
    '| champ eighth =', rejoinChampEighthBreathCensus(lines).rejoinChampEighthBreath,
    '| champ seventh =', rejoinChampSeventhBreathCensus(lines).rejoinChampSeventhBreath,
    crossOK ? '(the landed seats the fresh tail validates)' : '(CROSS MISMATCH)')
} else {
  console.log('CROSS F577 face file missing')
}

// SYNTHETICS: the branch battery the module re-voices (the ten-gap
// face the TENTH the list voices, the elder nine-gap face the .385's
// own 510 the ninth priced the tenth the honest zero the distinction
// keeps, the co-reign tie the interleave voices, the same-second pair
// the REAL zero voices, the wrap the day-cyclic the tenth pair
// prices)
const nineGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:20:00] [Server thread/INFO]: F3 joined the game', '[08:32:00] [Server thread/INFO]: F3 joined the game', '[08:40:30] [Server thread/INFO]: F3 joined the game']
const eightGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:20:00] [Server thread/INFO]: F3 joined the game', '[08:32:00] [Server thread/INFO]: F3 joined the game']
const tenGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:20:00] [Server thread/INFO]: F3 joined the game', '[08:32:00] [Server thread/INFO]: F3 joined the game', '[08:40:30] [Server thread/INFO]: F3 joined the game', '[08:50:00] [Server thread/INFO]: F3 joined the game']
const coReign = ['[09:00:00] [Server thread/INFO]: YardSurvey joined the game', '[09:01:00] [Server thread/INFO]: F3 joined the game', '[09:02:00] [Server thread/INFO]: F7 joined the game', '[09:04:00] [Server thread/INFO]: F3 joined the game', '[09:05:00] [Server thread/INFO]: F7 joined the game', '[09:08:00] [Server thread/INFO]: F3 joined the game', '[09:10:00] [Server thread/INFO]: F7 joined the game', '[09:15:00] [Server thread/INFO]: F3 joined the game', '[09:17:00] [Server thread/INFO]: F7 joined the game', '[09:21:00] [Server thread/INFO]: F3 joined the game', '[09:23:00] [Server thread/INFO]: F7 joined the game', '[09:27:00] [Server thread/INFO]: F3 joined the game', '[09:29:00] [Server thread/INFO]: F7 joined the game', '[09:31:00] [Server thread/INFO]: F7 joined the game', '[09:33:00] [Server thread/INFO]: F3 joined the game']
const sameSecond = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game', '[08:10:00] [Server thread/INFO]: F3 joined the game', '[08:11:00] [Server thread/INFO]: F3 joined the game', '[08:11:00] [Server thread/INFO]: F3 joined the game']
const wrap = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[23:59:30] [Server thread/INFO]: F3 joined the game', '[00:01:30] [Server thread/INFO]: F3 joined the game', '[00:05:30] [Server thread/INFO]: F3 joined the game', '[00:07:30] [Server thread/INFO]: F3 joined the game', '[00:11:30] [Server thread/INFO]: F3 joined the game', '[00:17:30] [Server thread/INFO]: F3 joined the game', '[00:21:30] [Server thread/INFO]: F3 joined the game', '[00:25:30] [Server thread/INFO]: F3 joined the game']
const synthWants = [
  ['tenGaps', rejoinStormTenthBreathCensus(tenGaps).rejoinStormTenthBreath, 570],
  ['tenGaps-elder-ninth', rejoinStormNinthBreathCensus(tenGaps).rejoinStormNinthBreath, 510],
  ['nineGaps-tenth-zero', rejoinStormTenthBreathCensus(nineGaps).rejoinStormTenthBreath, 0],
  ['nineGaps-elder-ninth', rejoinStormNinthBreathCensus(nineGaps).rejoinStormNinthBreath, 510],
  ['eightGaps-elder-eighth', rejoinStormEighthBreathCensus(eightGaps).rejoinStormEighthBreath, 720],
  ['coReign', rejoinStormTenthBreathCensus(coReign).rejoinStormTenthBreath, 120],
  ['sameSecond', rejoinStormTenthBreathCensus(sameSecond).rejoinStormTenthBreath, 0],
  ['wrap', rejoinStormTenthBreathCensus(wrap).rejoinStormTenthBreath, 240]
]
let synOK = 0
const synBad = []
for (const [n, got, want] of synthWants) {
  if (got === want) synOK++
  else synBad.push(`${n} got ${got} want ${want}`)
}
console.log(`SYNTHETICS ${synOK}/${synthWants.length}`, synBad.length ? 'BAD: ' + JSON.stringify(synBad) : '')
