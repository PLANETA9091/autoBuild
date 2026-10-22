// (fire-2243 the :43 stream) the fieldproof - the .382/.383 method the
// fresh seat re-rides: the 71-face archive the census module re-voices
// the REAL_ARC the test embeds byte-exact (the FIELDPROOF), the ten
// REAL columns the test keeps the pins re-voice (the PINCHECK), the
// synthetics the module re-voices (the branch battery), the FRESH
// CROSS the landed seats re-voice (the F573 all-zero face the .378
// storm seventh and the .379 champ seventh and the .383 storm eighth
// and the fresh champ eighth the same list prices). The lightweight
// arithmetic gate - zero fleet wiring, zero server, the CI the suite
// speaks.
// Usage: node scripts/fire2243-fieldproof.mjs <facesdir> <map.json>
import { readFileSync, existsSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces2243'
const mapFile = process.argv[3] || '/home/z/my-project/dispatch-census-2243.json'
const { rejoinChampEighthBreathCensus } = await import('../src/lib/rejoinchampeighthbreath.mjs')
const { rejoinChampSeventhBreathCensus } = await import('../src/lib/rejoinchampseventhbreath.mjs')
const { rejoinStormEighthBreathCensus } = await import('../src/lib/rejoinstormeighthbreath.mjs')
const { rejoinStormSeventhBreathCensus } = await import('../src/lib/rejoinstormseventhbreath.mjs')

// the test file the single source of truth - the REAL_ARC and the
// REAL_* fixtures the test embeds the same lists the checks ride
const testSrc = readFileSync(new URL('../tests/unit/rejoinchampeighthbreath.test.mjs', import.meta.url), 'utf8')
const arcM = testSrc.match(/const REAL_ARC = \[([\d,]+)\]/)
if (!arcM) { console.error('PINCHECK FAIL: REAL_ARC not found in the test'); process.exit(1) }
const REAL_ARC = arcM[1].split(',').map(Number)
const fixtureCols = {}
for (const m of testSrc.matchAll(/const (REAL_F\d+) = \[\n((?: .*\n)+?)\]/g)) {
  fixtureCols[m[1]] = m[2].split('\n').filter(l => l.trim().startsWith('"')).map(l => JSON.parse(l.trim().replace(/,$/, '')))
}

const map = JSON.parse(readFileSync(mapFile, 'utf8')).map
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
function champEighth (lines) {
  const tally = new Map()
  const evts = []
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = JOIN_ECHO_RE.exec(l)
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
  return { eighth: gaps.length > 7 ? gaps[7] : 0 }
}

// FIELDPROOF: the 71-face archive the arc re-voices byte-exact
let hits = 0
const drift = []
let i = 0
for (let f = 501; f <= 573; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') continue // the F552 cancelled + the F557 artifact hole the F-order keeps
  const face = `${dir}/face${m.id}.log`
  if (!existsSync(face)) continue
  const got = champEighth(readFileSync(face, 'utf8').split('\n')).eighth
  if (got === REAL_ARC[i]) hits++
  else drift.push(`F${f} got ${got} want ${REAL_ARC[i]}`)
  i++
}
console.log(`FIELDPROOF ${hits}/${REAL_ARC.length} byte-exact`, drift.length ? 'DRIFT: ' + JSON.stringify(drift) : '')

// PINCHECK: the test's own embedded columns the module re-voices
const pins = [['F506', 6], ['F508', 57], ['F512', 12], ['F514', 13], ['F524', 10], ['F537', 8], ['F549', 2], ['F556', 5], ['F563', 10], ['F573', 0]]
let pinOK = 0
const pinBad = []
for (const [n, want] of pins) {
  const col = fixtureCols['REAL_' + n]
  if (!col || col.length === 0) { pinBad.push(`F${n} no-fixture`); continue }
  const got = rejoinChampEighthBreathCensus(col).rejoinChampEighthBreath
  if (got === want) pinOK++
  else pinBad.push(`F${n} got ${got} want ${want}`)
}
console.log(`PINCHECK ${pinOK}/10`, pinBad.length ? 'BAD: ' + JSON.stringify(pinBad) : '')

// FRESH CROSS: the F573 all-zero face the landed seats re-voice (the
// .378 storm seventh 0 and the .379 champ seventh 0 and the .383 storm
// eighth 0 and the fresh champ eighth 0 the same face the family the
// fresh tail validates)
const f573 = `${dir}/face39792306239.log`
if (existsSync(f573)) {
  const lines = readFileSync(f573, 'utf8').split('\n')
  const crossOK =
    rejoinChampEighthBreathCensus(lines).rejoinChampEighthBreath === 0 &&
    rejoinChampSeventhBreathCensus(lines).rejoinChampSeventhBreath === 0 &&
    rejoinStormEighthBreathCensus(lines).rejoinStormEighthBreath === 0 &&
    rejoinStormSeventhBreathCensus(lines).rejoinStormSeventhBreath === 0
  console.log('CROSS F573 champ eighth =', rejoinChampEighthBreathCensus(lines).rejoinChampEighthBreath,
    '| champ seventh =', rejoinChampSeventhBreathCensus(lines).rejoinChampSeventhBreath,
    '| storm eighth =', rejoinStormEighthBreathCensus(lines).rejoinStormEighthBreath,
    '| storm seventh =', rejoinStormSeventhBreathCensus(lines).rejoinStormSeventhBreath,
    crossOK ? '(the landed seats the fresh tail validates)' : '(CROSS MISMATCH)')
} else {
  console.log('CROSS F573 face file missing')
}

// SYNTHETICS: the branch battery the module re-voices
const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
const singleGap = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game', '[04:01:00] [Server thread/INFO]: F3 joined the game', '[04:09:00] [Server thread/INFO]: F3 joined the game']
const twoGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const threeGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const fourGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const fiveGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const sixGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const sevenGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:20:00] [Server thread/INFO]: F3 joined the game']
const eightGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:20:00] [Server thread/INFO]: F3 joined the game', '[08:32:00] [Server thread/INFO]: F3 joined the game']
const coReign = ['[09:00:00] [Server thread/INFO]: YardSurvey joined the game', '[09:01:00] [Server thread/INFO]: F3 joined the game', '[09:02:00] [Server thread/INFO]: F7 joined the game', '[09:04:00] [Server thread/INFO]: F3 joined the game', '[09:05:00] [Server thread/INFO]: F7 joined the game', '[09:08:00] [Server thread/INFO]: F3 joined the game', '[09:10:00] [Server thread/INFO]: F7 joined the game', '[09:15:00] [Server thread/INFO]: F3 joined the game', '[09:17:00] [Server thread/INFO]: F7 joined the game', '[09:21:00] [Server thread/INFO]: F3 joined the game', '[09:23:00] [Server thread/INFO]: F7 joined the game', '[09:27:00] [Server thread/INFO]: F3 joined the game', '[09:29:00] [Server thread/INFO]: F7 joined the game']
const coReignSub = ['[09:00:00] [Server thread/INFO]: YardSurvey joined the game', '[09:01:00] [Server thread/INFO]: F3 joined the game', '[09:02:00] [Server thread/INFO]: F7 joined the game', '[09:04:00] [Server thread/INFO]: F3 joined the game', '[09:07:00] [Server thread/INFO]: F7 joined the game', '[09:08:00] [Server thread/INFO]: F3 joined the game', '[09:14:00] [Server thread/INFO]: F7 joined the game', '[09:15:00] [Server thread/INFO]: F3 joined the game', '[09:21:00] [Server thread/INFO]: F7 joined the game', '[09:27:00] [Server thread/INFO]: F3 joined the game']
const wrap = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[23:59:30] [Server thread/INFO]: F3 joined the game', '[00:01:30] [Server thread/INFO]: F3 joined the game', '[00:05:30] [Server thread/INFO]: F3 joined the game', '[00:07:30] [Server thread/INFO]: F3 joined the game', '[00:11:30] [Server thread/INFO]: F3 joined the game']
const wrap8 = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[23:59:30] [Server thread/INFO]: F3 joined the game', '[00:01:30] [Server thread/INFO]: F3 joined the game', '[00:05:30] [Server thread/INFO]: F3 joined the game', '[00:07:30] [Server thread/INFO]: F3 joined the game', '[00:11:30] [Server thread/INFO]: F3 joined the game', '[00:17:30] [Server thread/INFO]: F3 joined the game']
const synthWants = [
  ['oneEcho', rejoinChampEighthBreathCensus(oneEcho).rejoinChampEighthBreath, 0],
  ['singleGap', rejoinChampEighthBreathCensus(singleGap).rejoinChampEighthBreath, 0],
  ['twoGaps', rejoinChampEighthBreathCensus(twoGaps).rejoinChampEighthBreath, 0],
  ['threeGaps', rejoinChampEighthBreathCensus(threeGaps).rejoinChampEighthBreath, 0],
  ['fourGaps', rejoinChampEighthBreathCensus(fourGaps).rejoinChampEighthBreath, 0],
  ['fiveGaps', rejoinChampEighthBreathCensus(fiveGaps).rejoinChampEighthBreath, 0],
  ['sixGaps', rejoinChampEighthBreathCensus(sixGaps).rejoinChampEighthBreath, 0],
  ['sevenGaps', rejoinChampEighthBreathCensus(sevenGaps).rejoinChampEighthBreath, 0],
  ['eightGaps', rejoinChampEighthBreathCensus(eightGaps).rejoinChampEighthBreath, 720],
  ['coReign', rejoinChampEighthBreathCensus(coReign).rejoinChampEighthBreath, 240],
  ['coReignSub', rejoinChampEighthBreathCensus(coReignSub).rejoinChampEighthBreath, 0],
  ['wrap', rejoinChampEighthBreathCensus(wrap).rejoinChampEighthBreath, 0],
  ['wrap8', rejoinChampEighthBreathCensus(wrap8).rejoinChampEighthBreath, 360]
]
let synOK = 0
const synBad = []
for (const [n, got, want] of synthWants) {
  if (got === want) synOK++
  else synBad.push(`${n} got ${got} want ${want}`)
}
console.log(`SYNTHETICS ${synOK}/${synthWants.length}`, synBad.length ? 'BAD: ' + JSON.stringify(synBad) : '')
