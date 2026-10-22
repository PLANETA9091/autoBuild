// (fire-2243 the :43 stream) the .384-seat pricing - the champ
// EIGHTH breath laws the 71-face window F501-F573 prices (the F552
// cancelled and the F557 artifact hole the F-order keeps). The census
// re-rides the champion hand (the name's own join tally the bin
// keeps, the champions the beyond-first count equals the tallest the
// TIE the co-reign keeps, the champions' own beyond-first echoes the
// champion events the FILE ORDER keeps, the adjacent pairs the gaps
// measure) the EIGHTH gap the order statistic picks (index seven; the
// fewer-than-eight-gaps face the constructive zero keeps).
// Usage: node scripts/fire2243-price.mjs <facesdir> <map.json>
import { readFileSync, existsSync } from 'fs'

const dir = process.argv[2] || '/home/z/faces2243'
const map = JSON.parse(readFileSync(process.argv[3] || '/home/z/my-project/dispatch-census-2243.json')).map

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

function champGaps (lines) {
  const tally = new Map()
  const evts = [] // every echo the file order keeps ({name, second, tally})
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = JOIN_ECHO_RE.exec(l)
    if (!m) continue
    const n = (tally.get(m[4]) || 0) + 1
    tally.set(m[4], n)
    evts.push({ name: m[4], s: Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]), n })
  }
  let peak = 0
  for (const n of tally.values()) if (n > 1) peak = Math.max(peak, n - 1) // the tallest column
  const champs = new Set()
  for (const [name, n] of tally) if (n > 1 && n - 1 === peak) champs.add(name) // the TIE co-reigns
  const cevts = evts.filter(e => e.n > 1 && champs.has(e.name)) // the champion events the FILE ORDER keeps
  const gaps = []
  for (let i = 1; i < cevts.length; i++) {
    const cur = cevts[i - 1].s
    const nxt = cevts[i].s
    gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur) // the day-cyclic wrap
  }
  return { gaps, evts: cevts.length }
}

// the compact F-order face list (the holes the F-order keeps)
const faces = []
for (let f = 501; f <= 573; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') { console.error(`# F${f} ${m.conclusion || m.status} (hole)`); continue }
  const p = `${dir}/face${m.id}.log`
  if (!existsSync(p)) { console.error(`# F${f} ${m.id} artifact hole`); continue }
  const lines = readFileSync(p, 'utf8').split('\n')
  const { gaps, evts } = champGaps(lines)
  faces.push({ F: f, id: m.id, gaps, evts })
}
console.error(`# window: ${faces.length} faces (F501..F573 minus the holes)`)

// the .384-seat arc: the champ EIGHTH gap (index seven; the constructive zero the fewer-than-eight-gaps face keeps)
const arc = faces.map(x => x.gaps.length > 7 ? x.gaps[7] : 0)
const seventh = faces.map(x => x.gaps.length > 6 ? x.gaps[6] : 0) // the .379 dialog side
const gmin = faces.map(x => x.gaps.length ? Math.min(...x.gaps) : 0) // the .359 bound
const gmax = faces.map(x => x.gaps.length ? Math.max(...x.gaps) : 0) // the .353 bound
const gapsum = faces.map(x => x.gaps.reduce((a, b) => a + b, 0)) // the stretch-sum bound

console.log('=== the champ EIGHTH arc (F-order, hole-aware) ===')
faces.forEach((x, i) => console.log(`F${x.F}\teighth=${arc[i]}\tseventh=${seventh[i]}\tmin=${gmin[i]}\tmax=${gmax[i]}\tgapsum=${gapsum[i]}\tgapCount=${x.gaps.length}\tevts=${x.evts}`))

// the laws
const realIdx = faces.map((x, i) => x.gaps.length > 7 ? i : -1).filter(i => i >= 0)
const conIdx = faces.map((x, i) => x.gaps.length <= 7 ? i : -1).filter(i => i >= 0)
console.log('=== LAWS ===')
console.log('REAL voiced:', realIdx.length, '| CONSTRUCTIVE (fewer-than-eight-gaps):', conIdx.length, JSON.stringify(conIdx.map(i => 'F' + faces[i].F)))
console.log('REAL zero faces:', JSON.stringify(realIdx.filter(i => arc[i] === 0).map(i => 'F' + faces[i].F)))
console.log('CEILING faces (eighth===max, voiced):', JSON.stringify(realIdx.filter(i => arc[i] === gmax[i] && arc[i] > 0).map(i => `F${faces[i].F}=${arc[i]}`)))
const classes = {}
for (const i of realIdx) classes[arc[i]] = (classes[arc[i]] || 0) + 1
console.log('REAL classes:', JSON.stringify(Object.entries(classes).sort((a, b) => Number(a[0]) - Number(b[0])).map(([v, n]) => `${v}x${n}`)))
const held = []
for (let k = 1; k < faces.length; k++) {
  const i = k; const j = k - 1
  if (arc[i] === arc[j] && faces[i].gaps.length > 7 && faces[j].gaps.length > 7 && arc[i] > 0) held.push(`F${faces[j].F}/F${faces[i].F}=${arc[i]}`)
  else if (arc[i] === arc[j] && arc[i] === 0) held.push(`F${faces[j].F}/F${faces[i].F}=0(${faces[j].gaps.length > 7 ? 'REAL' : 'cons'}/${faces[i].gaps.length > 7 ? 'REAL' : 'cons'})`)
}
console.log('held pairs (adjacent equal):', JSON.stringify(held))
let boundBad = []
for (const i of realIdx) {
  if (!(gmin[i] <= arc[i] && arc[i] <= gmax[i] && arc[i] <= gapsum[i])) boundBad.push('F' + faces[i].F)
}
console.log('BOUND audit (REAL):', boundBad.length === 0 ? 'GREEN all ' + realIdx.length : 'BAD ' + JSON.stringify(boundBad))
let under = 0, level = 0, above = 0
const underEx = [], levelEx = [], aboveEx = []
for (let i = 0; i < faces.length; i++) {
  if (arc[i] < seventh[i]) { under++; if (underEx.length < 10) underEx.push(`F${faces[i].F}:${arc[i]}<${seventh[i]}`) }
  else if (arc[i] === seventh[i]) { level++; if (levelEx.length < 10) levelEx.push(`F${faces[i].F}:${arc[i]}=${seventh[i]}`) }
  else { above++; if (aboveEx.length < 10) aboveEx.push(`F${faces[i].F}:${arc[i]}>${seventh[i]}`) }
}
console.log(`DIALOG vs the .379 champ seventh: under ${under} level ${level} above ${above}`)
console.log('under ex:', JSON.stringify(underEx), 'level ex:', JSON.stringify(levelEx), 'above ex:', JSON.stringify(aboveEx))
const tail = faces[faces.length - 1]
console.log('FRESH TAIL F' + tail.F, 'eighth', arc[arc.length - 1], 'gaps', JSON.stringify(tail.gaps), 'evts', tail.evts, 'kind', tail.gaps.length > 7 ? 'REAL' : 'CONSTRUCTIVE')
// the REAL arc the test embeds (the FIELDPROOF the same list re-voices)
console.log('REAL_ARC = [' + arc.join(',') + ']')
// the trend windows (the triads the test prices - the F-number indexes)
const byF = Object.fromEntries(faces.map((x, i) => ['F' + x.F, arc[i]]))
const win = (a, b, c) => JSON.stringify([byF['F' + a], byF['F' + b], byF['F' + c]])
for (const t of [[503, 504, 505], [518, 519, 520], [540, 541, 542], [566, 567, 568], [567, 568, 569], [568, 569, 570], [569, 570, 571], [570, 571, 572], [571, 572, 573]]) {
  console.log('window F' + t[0] + '->F' + t[2], win(t[0], t[1], t[2]))
}
// the pin candidates: the interesting voiced faces for the test columns
console.log('voiced pin candidates:', JSON.stringify(realIdx.slice(-14).map(i => `F${faces[i].F}=${arc[i]}`)))
