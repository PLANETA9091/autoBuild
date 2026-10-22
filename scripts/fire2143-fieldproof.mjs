// (fire-2143 the :43 stream) the fieldproof - the .378/.382 method the
// fresh seat re-rides: the 70-face archive the census module re-voices
// the REAL_ARC the test embeds byte-exact (the FIELDPROOF), the ten
// REAL columns the test keeps the pins re-voice (the PINCHECK), the
// synthetics the module re-voices (the branch battery), the FRESH
// CROSS the landed seats re-voice (the .376 storm seventh and the
// .379 champ seventh and the .375 champ sixth the F572 fresh tail the
// same list prices). The lightweight arithmetic gate - zero fleet
// wiring, zero server, the CI the suite speaks.
// Usage: node scripts/fire2143-fieldproof.mjs <facesdir> <map.json>
import { readFileSync, existsSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces2143'
const mapFile = process.argv[3] || '/home/z/my-project/dispatch-census-2143.json'
const { rejoinStormEighthBreathCensus } = await import('../src/lib/rejoinstormeighthbreath.mjs')
const { rejoinStormSeventhBreathCensus } = await import('../src/lib/rejoinstormseventhbreath.mjs')
const { rejoinChampSeventhBreathCensus } = await import('../src/lib/rejoinchampseventhbreath.mjs')
const { rejoinChampSixthBreathCensus } = await import('../src/lib/rejoinchampsixthbreath.mjs')

// the test file the single source of truth - the REAL_ARC and the
// REAL_* fixtures the test embeds the same lists the checks ride
const testSrc = readFileSync(new URL('../tests/unit/rejoinstormeighthbreath.test.mjs', import.meta.url), 'utf8')
const arcM = testSrc.match(/const REAL_ARC = \[([\d,]+)\]/)
if (!arcM) { console.error('PINCHECK FAIL: REAL_ARC not found in the test'); process.exit(1) }
const REAL_ARC = arcM[1].split(',').map(Number)
const fixtureCols = {}
for (const m of testSrc.matchAll(/const (REAL_F\d+) = \[\n((?: .*\n)+?)\]/g)) {
  fixtureCols[m[1]] = m[2].split('\n').filter(l => l.trim().startsWith('"')).map(l => JSON.parse(l.trim().replace(/,$/, '')))
}

const map = JSON.parse(readFileSync(mapFile, 'utf8')).map
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
function stormEighth (lines) {
  const tally = new Map()
  const revts = []
  for (const l of lines) {
    if (typeof l !== 'string') continue
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
  return { eighth: gaps.length > 7 ? gaps[7] : 0 }
}

// FIELDPROOF: the 70-face archive the arc re-voices byte-exact
let hits = 0
const drift = []
let i = 0
for (let f = 501; f <= 572; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') continue // the F552 cancelled + the F557 artifact hole the F-order keeps
  const face = `${dir}/face${m.id}.log`
  if (!existsSync(face)) continue
  const got = stormEighth(readFileSync(face, 'utf8').split('\n')).eighth
  if (got === REAL_ARC[i]) hits++
  else drift.push(`F${f} got ${got} want ${REAL_ARC[i]}`)
  i++
}
console.log(`FIELDPROOF ${hits}/${REAL_ARC.length} byte-exact`, drift.length ? 'DRIFT: ' + JSON.stringify(drift) : '')

// PINCHECK: the test's own embedded columns the module re-voices
const pins = [['F501', 6], ['F508', 32], ['F514', 42], ['F524', 1], ['F542', 10], ['F549', 2], ['F550', 2], ['F563', 17], ['F569', 10], ['F572', 2]]
let pinOK = 0
const pinBad = []
for (const [n, want] of pins) {
  const col = fixtureCols['REAL_' + n]
  if (!col || col.length === 0) { pinBad.push(`F${n} no-fixture`); continue }
  const got = rejoinStormEighthBreathCensus(col).rejoinStormEighthBreath
  if (got === want) pinOK++
  else pinBad.push(`F${n} got ${got} want ${want}`)
}
console.log(`PINCHECK ${pinOK}/10`, pinBad.length ? 'BAD: ' + JSON.stringify(pinBad) : '')

// FRESH CROSS: the F572 fresh tail the landed seats re-voice (the
// .376 storm seventh 1 and the .379 champ seventh 0 and the .375 champ
// sixth 50 the same face the family the fresh tail validates)
const f572 = `${dir}/face39783708748.log`
if (existsSync(f572)) {
  const lines = readFileSync(f572, 'utf8').split('\n')
  const crossOK =
    rejoinStormEighthBreathCensus(lines).rejoinStormEighthBreath === 2 &&
    rejoinStormSeventhBreathCensus(lines).rejoinStormSeventhBreath === 1 &&
    rejoinChampSeventhBreathCensus(lines).rejoinChampSeventhBreath === 0 &&
    rejoinChampSixthBreathCensus(lines).rejoinChampSixthBreath === 50
  console.log('CROSS F572 storm eighth =', rejoinStormEighthBreathCensus(lines).rejoinStormEighthBreath,
    '| storm seventh =', rejoinStormSeventhBreathCensus(lines).rejoinStormSeventhBreath,
    '| champ seventh =', rejoinChampSeventhBreathCensus(lines).rejoinChampSeventhBreath,
    '| champ sixth =', rejoinChampSixthBreathCensus(lines).rejoinChampSixthBreath,
    crossOK ? '(the landed seats the fresh tail validates)' : '(CROSS MISMATCH)')
} else {
  console.log('CROSS F572 face file missing')
}

// SYNTHETICS: the branch battery the module re-voices
const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
const singleGap = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game', '[04:01:00] [Server thread/INFO]: F3 joined the game', '[04:09:00] [Server thread/INFO]: F3 joined the game']
const twoGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const threeGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const fourGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const fiveGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const sixGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const sevenGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const eightGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game', '[08:10:30] [Server thread/INFO]: F3 joined the game']
const coReign = ['[09:00:00] [Server thread/INFO]: YardSurvey joined the game', '[09:01:00] [Server thread/INFO]: F3 joined the game', '[09:02:00] [Server thread/INFO]: F7 joined the game', '[09:04:00] [Server thread/INFO]: F3 joined the game', '[09:07:00] [Server thread/INFO]: F7 joined the game', '[09:08:00] [Server thread/INFO]: F3 joined the game', '[09:14:00] [Server thread/INFO]: F7 joined the game', '[09:15:00] [Server thread/INFO]: F3 joined the game', '[09:21:00] [Server thread/INFO]: F7 joined the game', '[09:27:00] [Server thread/INFO]: F3 joined the game', '[09:34:00] [Server thread/INFO]: F7 joined the game', '[09:41:00] [Server thread/INFO]: F3 joined the game']
const wrap = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[23:59:30] [Server thread/INFO]: F3 joined the game', '[00:01:30] [Server thread/INFO]: F3 joined the game', '[00:05:30] [Server thread/INFO]: F3 joined the game', '[00:07:30] [Server thread/INFO]: F3 joined the game', '[00:09:30] [Server thread/INFO]: F3 joined the game', '[00:11:30] [Server thread/INFO]: F3 joined the game']
const synthWants = [
  ['oneEcho', rejoinStormEighthBreathCensus(oneEcho).rejoinStormEighthBreath, 0],
  ['singleGap', rejoinStormEighthBreathCensus(singleGap).rejoinStormEighthBreath, 0],
  ['twoGaps', rejoinStormEighthBreathCensus(twoGaps).rejoinStormEighthBreath, 0],
  ['threeGaps', rejoinStormEighthBreathCensus(threeGaps).rejoinStormEighthBreath, 0],
  ['fourGaps', rejoinStormEighthBreathCensus(fourGaps).rejoinStormEighthBreath, 0],
  ['fiveGaps', rejoinStormEighthBreathCensus(fiveGaps).rejoinStormEighthBreath, 0],
  ['sixGaps', rejoinStormEighthBreathCensus(sixGaps).rejoinStormEighthBreath, 0],
  ['sevenGaps', rejoinStormEighthBreathCensus(sevenGaps).rejoinStormEighthBreath, 0],
  ['eightGaps', rejoinStormEighthBreathCensus(eightGaps).rejoinStormEighthBreath, 90],
  ['coReign', rejoinStormEighthBreathCensus(coReign).rejoinStormEighthBreath, 420],
  ['wrap', rejoinStormEighthBreathCensus(wrap).rejoinStormEighthBreath, 120]
]
let synOK = 0
const synBad = []
for (const [n, got, want] of synthWants) {
  if (got === want) synOK++
  else synBad.push(`${n} got ${got} want ${want}`)
}
console.log(`SYNTHETICS ${synOK}/${synthWants.length}`, synBad.length ? 'BAD: ' + JSON.stringify(synBad) : '')
