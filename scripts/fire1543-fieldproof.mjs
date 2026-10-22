// (v0.976.373 fire-1543) the fieldproof - the .371/.372 method the
// fresh seat re-rides: the 65-face archive the census module re-voices
// the REAL_ARC the test embeds byte-exact (the FIELDPROOF), the ten
// REAL columns the test keeps the pins re-voice (the PINCHECK), the
// synthetics the module re-voices (the branch battery). The lightweight
// arithmetic gate - zero fleet wiring, zero server, the CI the suite
// speaks.
// Usage: node scripts/fire1543-fieldproof.mjs <facesdir> <map.json>
import { readFileSync, existsSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces1543'
const mapFile = process.argv[3] || '/home/z/my-project/dispatch-census-1543.json'
const { rejoinChampFifthBreathCensus, rejoinChampFifthBreathConsistent } = await import('../src/lib/rejoinchampfifthbreath.mjs')

// the test file the single source of truth - the REAL_ARC and the
// REAL_* fixtures the test embeds the same lists the checks ride
const testSrc = readFileSync(new URL('../tests/unit/rejoinchampfifthbreath.test.mjs', import.meta.url), 'utf8')
const arcM = testSrc.match(/const REAL_ARC = \[([\d,]+)\]/)
if (!arcM) { console.error('PINCHECK FAIL: REAL_ARC not found in the test'); process.exit(1) }
const REAL_ARC = arcM[1].split(',').map(Number)
const fixtureCols = {}
for (const m of testSrc.matchAll(/const (REAL_F\d+) = \[\n((?: .*\n)+?)\]/g)) {
  fixtureCols[m[1]] = m[2].split('\n').filter(l => l.trim().startsWith('"')).map(l => JSON.parse(l.trim().replace(/,$/, '')))
}

const map = JSON.parse(readFileSync(mapFile, 'utf8')).map
const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
function champCensus (lines) {
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
  return { fifth: gaps.length > 4 ? gaps[4] : 0 }
}

// FIELDPROOF: the 65-face archive the arc re-voices byte-exact
let hits = 0
const drift = []
let i = 0
for (let f = 501; f <= 567; f++) {
  const m = map['F' + f]
  if (!m) continue
  const face = `${dir}/face${m.id}.log`
  if (!existsSync(face)) continue
  const got = champCensus(readFileSync(face, 'utf8').split('\n')).fifth
  if (got === REAL_ARC[i]) hits++
  else drift.push(`F${f} got ${got} want ${REAL_ARC[i]}`)
  i++
}
console.log(`FIELDPROOF ${hits}/${REAL_ARC.length} byte-exact`, drift.length ? 'DRIFT: ' + JSON.stringify(drift) : '')

// PINCHECK: the test's own embedded columns the module re-voices
const pins = [['F501', 0], ['F509', 0], ['F511', 54], ['F524', 14], ['F532', 0], ['F548', 0], ['F549', 0], ['F554', 12], ['F565', 52], ['F567', 0]]
let pinOK = 0
const pinBad = []
for (const [n, want] of pins) {
  const col = fixtureCols['REAL_' + n]
  if (!col || col.length === 0) { pinBad.push(`F${n} no-fixture`); continue }
  const got = rejoinChampFifthBreathCensus(col).rejoinChampFifthBreath
  if (got === want) pinOK++
  else pinBad.push(`F${n} got ${got} want ${want}`)
}
console.log(`PINCHECK ${pinOK}/10`, pinBad.length ? 'BAD: ' + JSON.stringify(pinBad) : '')

// SYNTHETICS: the branch battery the module re-voices
const oneEcho = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']
const singleGap = ['[04:00:00] [Server thread/INFO]: YardSurvey joined the game', '[04:01:00] [Server thread/INFO]: F3 joined the game', '[04:09:00] [Server thread/INFO]: F3 joined the game']
const fiveGaps = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']
const coReign = ['[09:00:00] [Server thread/INFO]: YardSurvey joined the game', '[09:01:00] [Server thread/INFO]: F3 joined the game', '[09:02:00] [Server thread/INFO]: F7 joined the game', '[09:04:00] [Server thread/INFO]: F3 joined the game', '[09:07:00] [Server thread/INFO]: F7 joined the game', '[09:08:00] [Server thread/INFO]: F3 joined the game', '[09:14:00] [Server thread/INFO]: F7 joined the game', '[09:15:00] [Server thread/INFO]: F3 joined the game', '[09:21:00] [Server thread/INFO]: F7 joined the game']
const wrap = ['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[23:59:30] [Server thread/INFO]: F3 joined the game', '[00:01:30] [Server thread/INFO]: F3 joined the game', '[00:05:30] [Server thread/INFO]: F3 joined the game']
const synthWants = [
  ['oneEcho', rejoinChampFifthBreathCensus(oneEcho).rejoinChampFifthBreath, 0],
  ['singleGap', rejoinChampFifthBreathCensus(singleGap).rejoinChampFifthBreath, 0],
  ['fiveGaps', rejoinChampFifthBreathCensus(fiveGaps).rejoinChampFifthBreath, 180],
  ['coReign', rejoinChampFifthBreathCensus(coReign).rejoinChampFifthBreath, 360],
  ['wrap', rejoinChampFifthBreathCensus(wrap).rejoinChampFifthBreath, 240],
  ['null', rejoinChampFifthBreathCensus(null), null],
  ['empty', rejoinChampFifthBreathCensus([]).rejoinChampFifthBreath, 0],
  ['fenceHi', rejoinChampFifthBreathConsistent({ back: { rejoinChampFifthBreath: 0 }, prev: { rejoinChampFifthBreath: 86399 }, cur: { rejoinChampFifthBreath: 0 } }), true],
  ['fenceOver', rejoinChampFifthBreathConsistent({ back: { rejoinChampFifthBreath: 0 }, prev: { rejoinChampFifthBreath: 86400 }, cur: { rejoinChampFifthBreath: 0 } }), false]
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
