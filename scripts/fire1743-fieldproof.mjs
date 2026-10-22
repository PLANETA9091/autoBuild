// (v0.976.374 fire-1743) the fieldproof - the .372/.373 method the
// fresh seat re-rides: the 66-face archive the census module re-voices
// the REAL_ARC the test embeds byte-exact (the FIELDPROOF), the ten
// REAL columns the test keeps the pins re-voice (the PINCHECK), the
// synthetics the module re-voices (the branch battery). The lightweight
// arithmetic gate - zero fleet wiring, zero server, the CI the suite
// speaks.
// Usage: node scripts/fire1743-fieldproof.mjs <facesdir> <map.json>
import { readFileSync, existsSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces1743'
const mapFile = process.argv[3] || '/home/z/my-project/dispatch-census-1743.json'
const { rejoinStormSixthBreathCensus, rejoinStormSixthBreathConsistent } = await import('../src/lib/rejoinstormsixthbreath.mjs')

// the test file the single source of truth - the REAL_ARC and the
// REAL_* fixtures the test embeds the same lists the checks ride
const testSrc = readFileSync(new URL('../tests/unit/rejoinstormsixthbreath.test.mjs', import.meta.url), 'utf8')
const arcM = testSrc.match(/const REAL_ARC = \[([\d,]+)\]/)
if (!arcM) { console.error('PINCHECK FAIL: REAL_ARC not found in the test'); process.exit(1) }
const REAL_ARC = arcM[1].split(',').map(Number)
const fixtureCols = {}
for (const m of testSrc.matchAll(/const (REAL_F\d+) = \[\n((?: .*\n)+?)\]/g)) {
  fixtureCols[m[1]] = m[2].split('\n').filter(l => l.trim().startsWith('"')).map(l => JSON.parse(l.trim().replace(/,$/, '')))
}

const map = JSON.parse(readFileSync(mapFile, 'utf8')).map
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
function stormSixth (lines) {
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
  return { sixth: gaps.length > 5 ? gaps[5] : 0 }
}

// FIELDPROOF: the 66-face archive the arc re-voices byte-exact
let hits = 0
const drift = []
let i = 0
for (let f = 501; f <= 568; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') continue // the F552 cancelled + the F557 artifact hole the F-order keeps
  const face = `${dir}/face${m.id}.log`
  if (!existsSync(face)) continue
  const got = stormSixth(readFileSync(face, 'utf8').split('\n')).sixth
  if (got === REAL_ARC[i]) hits++
  else drift.push(`F${f} got ${got} want ${REAL_ARC[i]}`)
  i++
}
console.log(`FIELDPROOF ${hits}/${REAL_ARC.length} byte-exact`, drift.length ? 'DRIFT: ' + JSON.stringify(drift) : '')

// PINCHECK: the test's own embedded columns the module re-voices
const pins = [['F501', 0], ['F502', 10], ['F504', 6], ['F532', 59], ['F534', 41], ['F549', 2], ['F561', 57], ['F563', 8], ['F567', 34], ['F568', 3]]
let pinOK = 0
const pinBad = []
for (const [n, want] of pins) {
  const col = fixtureCols['REAL_' + n]
  if (!col || col.length === 0) { pinBad.push(`F${n} no-fixture`); continue }
  const got = rejoinStormSixthBreathCensus(col).rejoinStormSixthBreath
  if (got === want) pinOK++
  else pinBad.push(`F${n} got ${got} want ${want}`)
}
console.log(`PINCHECK ${pinOK}/10`, pinBad.length ? 'BAD: ' + JSON.stringify(pinBad) : '')

// SYNTHETICS: the branch battery the module re-voices
const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
const singleGap = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game', '[04:01:00] [Server thread/INFO]: F3 joined the game', '[04:09:00] [Server thread/INFO]: F3 joined the game']
const twoGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const threeGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const fourGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const fiveGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const sixGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const coReign = ['[09:00:00] [Server thread/INFO]: YardSurvey joined the game', '[09:01:00] [Server thread/INFO]: F3 joined the game', '[09:02:00] [Server thread/INFO]: F7 joined the game', '[09:04:00] [Server thread/INFO]: F3 joined the game', '[09:07:00] [Server thread/INFO]: F7 joined the game', '[09:08:00] [Server thread/INFO]: F3 joined the game', '[09:14:00] [Server thread/INFO]: F7 joined the game', '[09:15:00] [Server thread/INFO]: F3 joined the game', '[09:21:00] [Server thread/INFO]: F7 joined the game', '[09:27:00] [Server thread/INFO]: F3 joined the game']
const wrap = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[23:59:30] [Server thread/INFO]: F3 joined the game', '[00:01:30] [Server thread/INFO]: F3 joined the game', '[00:05:30] [Server thread/INFO]: F3 joined the game', '[00:07:30] [Server thread/INFO]: F3 joined the game']
const synthWants = [
  ['oneEcho', rejoinStormSixthBreathCensus(oneEcho).rejoinStormSixthBreath, 0],
  ['singleGap', rejoinStormSixthBreathCensus(singleGap).rejoinStormSixthBreath, 0],
  ['twoGaps', rejoinStormSixthBreathCensus(twoGaps).rejoinStormSixthBreath, 0],
  ['threeGaps', rejoinStormSixthBreathCensus(threeGaps).rejoinStormSixthBreath, 0],
  ['fourGaps', rejoinStormSixthBreathCensus(fourGaps).rejoinStormSixthBreath, 0],
  ['fiveGaps', rejoinStormSixthBreathCensus(fiveGaps).rejoinStormSixthBreath, 0],
  ['sixGaps', rejoinStormSixthBreathCensus(sixGaps).rejoinStormSixthBreath, 120],
  ['coReign', rejoinStormSixthBreathCensus(coReign).rejoinStormSixthBreath, 360],
  ['wrap', rejoinStormSixthBreathCensus(wrap).rejoinStormSixthBreath, 120],
  ['null', rejoinStormSixthBreathCensus(null), null],
  ['empty', rejoinStormSixthBreathCensus([]).rejoinStormSixthBreath, 0],
  ['fenceHi', rejoinStormSixthBreathConsistent({ back: { rejoinStormSixthBreath: 0 }, prev: { rejoinStormSixthBreath: 86399 }, cur: { rejoinStormSixthBreath: 0 } }), true],
  ['fenceOver', rejoinStormSixthBreathConsistent({ back: { rejoinStormSixthBreath: 0 }, prev: { rejoinStormSixthBreath: 86400 }, cur: { rejoinStormSixthBreath: 0 } }), false]
]
let synOK = 0
const synBad = []
for (const [name, got, want] of synthWants) {
  if (got === want) synOK++
  else synBad.push(`${name} got ${got} want ${want}`)
}
console.log(`SYNTHETICS ${synOK}/${synthWants.length}`, synBad.length ? 'BAD: ' + JSON.stringify(synBad) : '')
if (hits === REAL_ARC.length && pinOK === 10 && synOK === synthWants.length) console.log('FIELDPROOF ALL GREEN')
else { console.error('FIELDPROOF RED'); process.exit(1) }
