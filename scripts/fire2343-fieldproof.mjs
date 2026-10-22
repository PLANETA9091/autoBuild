// (fire-2343 the :43 stream) the fieldproof - the .383/.384 method the
// fresh seat re-rides: the 72-face archive the census module re-voices
// the REAL_ARC the test embeds byte-exact (the FIELDPROOF), the ten
// REAL columns the test keeps the pins re-voice (the PINCHECK), the
// synthetics the module re-voices (the branch battery), the FRESH
// CROSS the landed seats re-voice (the F574 two-gap face the .376
// storm seventh and the .383 storm eighth and the .384 champ eighth
// and the fresh storm ninth the same list prices). The lightweight
// arithmetic gate - zero fleet wiring, zero server, the CI the suite
// speaks.
// Usage: node scripts/fire2343-fieldproof.mjs <facesdir> <map.json>
import { readFileSync, existsSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces2343'
const mapFile = process.argv[3] || '/home/z/my-project/dispatch-census-2343.json'
const { rejoinStormNinthBreathCensus } = await import('../src/lib/rejoinstormninthbreath.mjs')
const { rejoinStormEighthBreathCensus } = await import('../src/lib/rejoinstormeighthbreath.mjs')
const { rejoinChampEighthBreathCensus } = await import('../src/lib/rejoinchampeighthbreath.mjs')
const { rejoinChampSeventhBreathCensus } = await import('../src/lib/rejoinchampseventhbreath.mjs')
const { rejoinStormSeventhBreathCensus } = await import('../src/lib/rejoinstormseventhbreath.mjs')

// the test file the single source of truth - the REAL_ARC and the
// REAL_* fixtures the test embeds the same lists the checks ride
const testSrc = readFileSync(new URL('../tests/unit/rejoinstormninthbreath.test.mjs', import.meta.url), 'utf8')
const arcM = testSrc.match(/const REAL_ARC = \[\s*([\d,\s]+?)\s*\]/)
if (!arcM) { console.error('PINCHECK FAIL: REAL_ARC not found in the test'); process.exit(1) }
const REAL_ARC = arcM[1].split(',').map(Number)
const fixtureCols = {}
for (const m of testSrc.matchAll(/const (REAL_F\d+) = \[\n((?: .*\n)+?)\]/g)) {
  fixtureCols[m[1]] = m[2].split('\n').filter(l => l.trim().startsWith('"')).map(l => JSON.parse(l.trim().replace(/,$/, '')))
}

const map = JSON.parse(readFileSync(mapFile, 'utf8')).map

// FIELDPROOF: the 72-face archive the arc re-voices byte-exact
let hits = 0
const drift = []
let i = 0
for (let f = 501; f <= 574; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') continue // the F552 cancelled + the F557 artifact hole the F-order keeps
  const face = `${dir}/face${m.id}.log`
  if (!existsSync(face)) continue
  const got = rejoinStormNinthBreathCensus(readFileSync(face, 'utf8').split('\n')).rejoinStormNinthBreath
  if (got === REAL_ARC[i]) hits++
  else drift.push(`F${f} got ${got} want ${REAL_ARC[i]}`)
  i++
}
console.log(`FIELDPROOF ${hits}/${REAL_ARC.length} byte-exact`, drift.length ? 'DRIFT: ' + JSON.stringify(drift) : '')

// PINCHECK: the test's own embedded columns the module re-voices
const pins = [['F501', 7], ['F508', 57], ['F517', 70], ['F521', 28], ['F526', 5], ['F537', 58], ['F550', 13], ['F556', 1], ['F564', 13], ['F572', 6]]
let pinOK = 0
const pinBad = []
for (const [n, want] of pins) {
  const col = fixtureCols['REAL_' + n]
  if (!col || col.length === 0) { pinBad.push(`F${n} no-fixture`); continue }
  const got = rejoinStormNinthBreathCensus(col).rejoinStormNinthBreath
  if (got === want) pinOK++
  else pinBad.push(`F${n} got ${got} want ${want}`)
}
console.log(`PINCHECK ${pinOK}/10`, pinBad.length ? 'BAD: ' + JSON.stringify(pinBad) : '')

// FRESH CROSS: the F574 two-gap face the landed seats re-voice (the
// .376 storm seventh 0 and the .383 storm eighth 0 and the .384 champ
// eighth 0 and the fresh storm ninth 0 the same face the family the
// fresh tail validates)
const f574 = map.F574 ? `${dir}/face${map.F574.id}.log` : null
if (f574 && existsSync(f574)) {
  const lines = readFileSync(f574, 'utf8').split('\n')
  const crossOK =
    rejoinStormNinthBreathCensus(lines).rejoinStormNinthBreath === 0 &&
    rejoinStormEighthBreathCensus(lines).rejoinStormEighthBreath === 0 &&
    rejoinChampEighthBreathCensus(lines).rejoinChampEighthBreath === 0 &&
    rejoinChampSeventhBreathCensus(lines).rejoinChampSeventhBreath === 0 &&
    rejoinStormSeventhBreathCensus(lines).rejoinStormSeventhBreath === 0
  console.log('CROSS F574 storm ninth =', rejoinStormNinthBreathCensus(lines).rejoinStormNinthBreath,
    '| storm eighth =', rejoinStormEighthBreathCensus(lines).rejoinStormEighthBreath,
    '| champ eighth =', rejoinChampEighthBreathCensus(lines).rejoinChampEighthBreath,
    '| champ seventh =', rejoinChampSeventhBreathCensus(lines).rejoinChampSeventhBreath,
    '| storm seventh =', rejoinStormSeventhBreathCensus(lines).rejoinStormSeventhBreath,
    crossOK ? '(the landed seats the fresh tail validates)' : '(CROSS MISMATCH)')
} else {
  console.log('CROSS F574 face file missing')
}

// SYNTHETICS: the branch battery the module re-voices (the nine-gap
// face the NINTH the list voices, the elder eight-gap face the .383's
// own 90 the eighth priced the ninth the honest zero the distinction
// keeps, the co-reign tie the interleave voices, the wrap the
// day-cyclic the ninth pair prices)
const nineGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game', '[08:10:30] [Server thread/INFO]: F3 joined the game', '[08:14:00] [Server thread/INFO]: F3 joined the game']
const eightGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game', '[08:10:30] [Server thread/INFO]: F3 joined the game']
const coReign = ['[09:00:00] [Server thread/INFO]: YardSurvey joined the game', '[09:01:00] [Server thread/INFO]: F3 joined the game', '[09:02:00] [Server thread/INFO]: F7 joined the game', '[09:04:00] [Server thread/INFO]: F3 joined the game', '[09:07:00] [Server thread/INFO]: F7 joined the game', '[09:08:00] [Server thread/INFO]: F3 joined the game', '[09:14:00] [Server thread/INFO]: F7 joined the game', '[09:15:00] [Server thread/INFO]: F3 joined the game', '[09:21:00] [Server thread/INFO]: F7 joined the game', '[09:27:00] [Server thread/INFO]: F3 joined the game', '[09:34:00] [Server thread/INFO]: F7 joined the game', '[09:41:00] [Server thread/INFO]: F3 joined the game', '[09:47:00] [Server thread/INFO]: F7 joined the game']
const wrap = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[23:59:30] [Server thread/INFO]: F3 joined the game', '[00:01:30] [Server thread/INFO]: F3 joined the game', '[00:05:30] [Server thread/INFO]: F3 joined the game', '[00:07:30] [Server thread/INFO]: F3 joined the game', '[00:09:30] [Server thread/INFO]: F3 joined the game', '[00:11:30] [Server thread/INFO]: F3 joined the game', '[00:13:30] [Server thread/INFO]: F3 joined the game']
const synthWants = [
  ['nineGaps', rejoinStormNinthBreathCensus(nineGaps).rejoinStormNinthBreath, 210],
  ['eightGaps-ninth-zero', rejoinStormNinthBreathCensus(eightGaps).rejoinStormNinthBreath, 0],
  ['eightGaps-elder-eighth', rejoinStormEighthBreathCensus(eightGaps).rejoinStormEighthBreath, 90],
  ['coReign', rejoinStormNinthBreathCensus(coReign).rejoinStormNinthBreath, 360],
  ['wrap', rejoinStormNinthBreathCensus(wrap).rejoinStormNinthBreath, 120]
]
let synOK = 0
const synBad = []
for (const [n, got, want] of synthWants) {
  if (got === want) synOK++
  else synBad.push(`${n} got ${got} want ${want}`)
}
console.log(`SYNTHETICS ${synOK}/${synthWants.length}`, synBad.length ? 'BAD: ' + JSON.stringify(synBad) : '')
