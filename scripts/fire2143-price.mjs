// (fire-2143 the :43 stream) the .383-seat pricing - the storm
// EIGHTH breath laws the 70-face window F501-F572 prices (the F552
// cancelled and the F557 artifact hole the F-order keeps). The census
// re-rides the storm hand (the beyond-first echoes the FILE ORDER
// keeps, the adjacent pairs the gaps measure) the EIGHTH gap the
// order statistic picks (index seven; the fewer-than-eight-gaps face
// the constructive zero keeps). Usage: node scripts/fire2143-price.mjs <facesdir> <map.json>
import { readFileSync, existsSync } from 'fs'

const dir = process.argv[2] || '/home/z/faces2143'
const map = JSON.parse(readFileSync(process.argv[3] || '/home/z/my-project/dispatch-census-2143.json')).map

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

function stormGaps (lines) {
  const tally = new Map()
  const revts = [] // the re-join events (beyond each name's first) the FILE ORDER keeps
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
    gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur) // the day-cyclic wrap
  }
  return { gaps, evts: revts.length }
}

// the compact F-order face list (the holes the F-order keeps)
const faces = []
for (let f = 501; f <= 572; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') { console.error(`# F${f} ${m.conclusion || m.status} (hole)`); continue }
  const p = `${dir}/face${m.id}.log`
  if (!existsSync(p)) { console.error(`# F${f} ${m.id} artifact hole`); continue }
  const lines = readFileSync(p, 'utf8').split('\n')
  const { gaps, evts } = stormGaps(lines)
  faces.push({ F: f, id: m.id, gaps, evts })
}
console.error(`# window: ${faces.length} faces (F501..F572 minus the holes)`)

// the .383-seat arc: the storm EIGHTH gap (index seven; the constructive zero the fewer-than-eight-gaps face keeps)
const arc = faces.map(x => x.gaps.length > 7 ? x.gaps[7] : 0)
const seventh = faces.map(x => x.gaps.length > 6 ? x.gaps[6] : 0) // the .376 dialog side
const gmin = faces.map(x => x.gaps.length ? Math.min(...x.gaps) : 0) // the .358 bound
const gmax = faces.map(x => x.gaps.length ? Math.max(...x.gaps) : 0) // the .352 bound
const gapsum = faces.map(x => x.gaps.reduce((a, b) => a + b, 0)) // the stretch-sum bound

console.log('=== the storm EIGHTH arc (F-order, hole-aware) ===')
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
  if (arc[i] < seventh[i]) { under++; if (underEx.length < 8) underEx.push(`F${faces[i].F}:${arc[i]}<${seventh[i]}`) }
  else if (arc[i] === seventh[i]) { level++; if (levelEx.length < 8) levelEx.push(`F${faces[i].F}:${arc[i]}=${seventh[i]}`) }
  else { above++; if (aboveEx.length < 8) aboveEx.push(`F${faces[i].F}:${arc[i]}>${seventh[i]}`) }
}
console.log(`DIALOG vs the .376 storm seventh: under ${under} level ${level} above ${above}`)
console.log('under ex:', JSON.stringify(underEx), 'level ex:', JSON.stringify(levelEx), 'above ex:', JSON.stringify(aboveEx))
const tail = faces[faces.length - 1]
console.log('FRESH TAIL F' + tail.F, 'eighth', arc[arc.length - 1], 'gaps', JSON.stringify(tail.gaps), 'evts', tail.evts, 'kind', tail.gaps.length > 7 ? 'REAL' : 'CONSTRUCTIVE')
// the REAL arc the test embeds (the FIELDPROOF the same list re-voices)
console.log('REAL_ARC = [' + arc.join(',') + ']')
// the trend windows (the triads the test prices - the F-number indexes)
const byF = Object.fromEntries(faces.map((x, i) => ['F' + x.F, arc[i]]))
const win = (a, b, c) => JSON.stringify([byF['F' + a], byF['F' + b], byF['F' + c]])
for (const t of [[503, 504, 505], [518, 519, 520], [540, 541, 542], [566, 567, 568], [567, 568, 569], [568, 569, 570], [569, 570, 571], [570, 571, 572]]) {
  console.log('window F' + t[0] + '->F' + t[2], win(t[0], t[1], t[2]))
}
// the pin candidates: the interesting voiced faces for the test columns
console.log('voiced pin candidates:', JSON.stringify(realIdx.slice(-12).map(i => `F${faces[i].F}=${arc[i]}`)))
