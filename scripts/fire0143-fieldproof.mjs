// (fire-0143 the :43 stream) the fieldproof - the .384/.385 method the
// fresh seat re-rides: the 73-face archive the census module re-voices
// the REAL_ARC the test embeds byte-exact (the FIELDPROOF), the ten
// REAL columns the test keeps the pins re-voice (the PINCHECK), the
// synthetics the module re-voices (the branch battery), the FRESH
// CROSS the landed seats re-voice (the F575 ten-gap face the .384
// champ eighth and the .385 storm ninth and the fresh champ ninth the
// same list prices). The lightweight arithmetic gate - zero fleet
// wiring, zero server, the CI the suite speaks.
// Usage: node scripts/fire0143-fieldproof.mjs <facesdir> <map.json>
import { readFileSync, existsSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces0143'
const mapFile = process.argv[3] || '/home/z/my-project/dispatch-census-0143.json'
const { rejoinChampNinthBreathCensus } = await import('../src/lib/rejoinchampninthbreath.mjs')
const { rejoinChampEighthBreathCensus } = await import('../src/lib/rejoinchampeighthbreath.mjs')
const { rejoinStormNinthBreathCensus } = await import('../src/lib/rejoinstormninthbreath.mjs')
const { rejoinStormEighthBreathCensus } = await import('../src/lib/rejoinstormeighthbreath.mjs')
const { rejoinChampSeventhBreathCensus } = await import('../src/lib/rejoinchampseventhbreath.mjs')

// the test file the single source of truth - the REAL_ARC and the
// REAL_* fixtures the test embeds the same lists the checks ride
const testSrc = readFileSync(new URL('../tests/unit/rejoinchampninthbreath.test.mjs', import.meta.url), 'utf8')
const arcM = testSrc.match(/const REAL_ARC = \[\s*([\d,\s]+?)\s*\]/)
if (!arcM) { console.error('PINCHECK FAIL: REAL_ARC not found in the test'); process.exit(1) }
const REAL_ARC = arcM[1].split(',').map(Number)
const fixtureCols = {}
for (const m of testSrc.matchAll(/const (REAL_F\d+) = \[\n((?: .*\n)+?)\]/g)) {
  fixtureCols[m[1]] = m[2].split('\n').filter(l => l.trim().startsWith('"')).map(l => JSON.parse(l.trim().replace(/,$/, '')))
}

const map = JSON.parse(readFileSync(mapFile, 'utf8')).map

// FIELDPROOF: the 73-face archive the arc re-voices byte-exact
let hits = 0
const drift = []
let i = 0
for (let f = 501; f <= 576; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') continue // the F552 cancelled + the F557 artifact hole + the F576 in-flight the F-order keeps
  const face = `${dir}/face${m.id}.log`
  if (!existsSync(face)) continue
  const got = rejoinChampNinthBreathCensus(readFileSync(face, 'utf8').split('\n')).rejoinChampNinthBreath
  if (got === REAL_ARC[i]) hits++
  else drift.push(`F${f} got ${got} want ${REAL_ARC[i]}`)
  i++
}
console.log(`FIELDPROOF ${hits}/${REAL_ARC.length} byte-exact`, drift.length ? 'DRIFT: ' + JSON.stringify(drift) : '')

// PINCHECK: the test's own embedded columns the module re-voices
const pins = [['F506', 5], ['F508', 12], ['F512', 12], ['F514', 13], ['F524', 0], ['F536', 16], ['F546', 11], ['F556', 6], ['F569', 11], ['F575', 5]]
let pinOK = 0
const pinBad = []
for (const [n, want] of pins) {
  const col = fixtureCols['REAL_' + n]
  if (!col || col.length === 0) { pinBad.push(`F${n} no-fixture`); continue }
  const got = rejoinChampNinthBreathCensus(col).rejoinChampNinthBreath
  if (got === want) pinOK++
  else pinBad.push(`F${n} got ${got} want ${want}`)
}
console.log(`PINCHECK ${pinOK}/10`, pinBad.length ? 'BAD: ' + JSON.stringify(pinBad) : '')

// FRESH CROSS: the F575 ten-gap face the landed seats re-voice (the
// .384 champ eighth 5 and the .385 storm ninth 1 and the fresh champ
// ninth 5 the same face the family the fresh tail validates)
const f575 = map.F575 ? `${dir}/face${map.F575.id}.log` : null
if (f575 && existsSync(f575)) {
  const lines = readFileSync(f575, 'utf8').split('\n')
  const crossOK =
    rejoinChampNinthBreathCensus(lines).rejoinChampNinthBreath === 5 &&
    rejoinChampEighthBreathCensus(lines).rejoinChampEighthBreath === 5 &&
    rejoinStormNinthBreathCensus(lines).rejoinStormNinthBreath === 1 &&
    rejoinStormEighthBreathCensus(lines).rejoinStormEighthBreath === 9 &&
    rejoinChampSeventhBreathCensus(lines).rejoinChampSeventhBreath === 6
  console.log('CROSS F575 champ ninth =', rejoinChampNinthBreathCensus(lines).rejoinChampNinthBreath,
    '| champ eighth =', rejoinChampEighthBreathCensus(lines).rejoinChampEighthBreath,
    '| storm ninth =', rejoinStormNinthBreathCensus(lines).rejoinStormNinthBreath,
    '| storm eighth =', rejoinStormEighthBreathCensus(lines).rejoinStormEighthBreath,
    '| champ seventh =', rejoinChampSeventhBreathCensus(lines).rejoinChampSeventhBreath,
    crossOK ? '(the landed seats the fresh tail validates)' : '(CROSS MISMATCH)')
} else {
  console.log('CROSS F575 face file missing')
}

// SYNTHETICS: the branch battery the module re-voices (the nine-gap
// face the NINTH the list voices, the elder eight-gap face the .384's
// own 720 the eighth priced the ninth the honest zero the distinction
// keeps, the co-reign tie the interleave voices, the same-second pair
// the REAL zero voices, the wrap the day-cyclic the ninth pair prices)
const nineGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:20:00] [Server thread/INFO]: F3 joined the game', '[08:32:00] [Server thread/INFO]: F3 joined the game', '[08:40:30] [Server thread/INFO]: F3 joined the game']
const eightGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:20:00] [Server thread/INFO]: F3 joined the game', '[08:32:00] [Server thread/INFO]: F3 joined the game']
const coReign = ['[09:00:00] [Server thread/INFO]: YardSurvey joined the game', '[09:01:00] [Server thread/INFO]: F3 joined the game', '[09:02:00] [Server thread/INFO]: F7 joined the game', '[09:04:00] [Server thread/INFO]: F3 joined the game', '[09:05:00] [Server thread/INFO]: F7 joined the game', '[09:08:00] [Server thread/INFO]: F3 joined the game', '[09:10:00] [Server thread/INFO]: F7 joined the game', '[09:15:00] [Server thread/INFO]: F3 joined the game', '[09:17:00] [Server thread/INFO]: F7 joined the game', '[09:21:00] [Server thread/INFO]: F3 joined the game', '[09:23:00] [Server thread/INFO]: F7 joined the game', '[09:27:00] [Server thread/INFO]: F3 joined the game', '[09:29:00] [Server thread/INFO]: F7 joined the game', '[09:31:00] [Server thread/INFO]: F7 joined the game', '[09:33:00] [Server thread/INFO]: F3 joined the game']
const sameSecond = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game', '[08:10:00] [Server thread/INFO]: F3 joined the game', '[08:10:00] [Server thread/INFO]: F3 joined the game']
const wrap = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[23:59:30] [Server thread/INFO]: F3 joined the game', '[00:01:30] [Server thread/INFO]: F3 joined the game', '[00:05:30] [Server thread/INFO]: F3 joined the game', '[00:07:30] [Server thread/INFO]: F3 joined the game', '[00:11:30] [Server thread/INFO]: F3 joined the game', '[00:17:30] [Server thread/INFO]: F3 joined the game', '[00:21:30] [Server thread/INFO]: F3 joined the game']
const synthWants = [
  ['nineGaps', rejoinChampNinthBreathCensus(nineGaps).rejoinChampNinthBreath, 510],
  ['eightGaps-ninth-zero', rejoinChampNinthBreathCensus(eightGaps).rejoinChampNinthBreath, 0],
  ['eightGaps-elder-eighth', rejoinChampEighthBreathCensus(eightGaps).rejoinChampEighthBreath, 720],
  ['coReign', rejoinChampNinthBreathCensus(coReign).rejoinChampNinthBreath, 120],
  ['sameSecond', rejoinChampNinthBreathCensus(sameSecond).rejoinChampNinthBreath, 0],
  ['wrap', rejoinChampNinthBreathCensus(wrap).rejoinChampNinthBreath, 240]
]
let synOK = 0
const synBad = []
for (const [n, got, want] of synthWants) {
  if (got === want) synOK++
  else synBad.push(`${n} got ${got} want ${want}`)
}
console.log(`SYNTHETICS ${synOK}/${synthWants.length}`, synBad.length ? 'BAD: ' + JSON.stringify(synBad) : '')
