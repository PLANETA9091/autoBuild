// (fire-0443 the :43 stream) the .391-seat pricing - the storm
// TENTH-breath method the ELEVENTH seat re-rides: the 77-face window
// F501-F579 the census map prices (the F552 cancelled and the F557
// artifact hole the F-order keeps, the F578 and the F579 the terminal
// SUCCESS faces the fresh tails price). The census re-rides the storm
// hand (every 'joined the game' echo the face voices the census reads
// in file order, the name's own join tally the bin keeps, the
// beyond-first echoes the storm's re-join events ride - the FILE
// ORDER the .362 word keeps, the adjacent pairs the gaps measure, the
// day-cyclic wrap the .350 word holds) the ELEVENTH gap the order
// statistic picks (index ten; the fewer-than-eleven-gaps face the
// constructive zero keeps).
// Usage: node scripts/fire0443-price.mjs <facesdir> <map.json>
import { readFileSync, existsSync } from 'fs'

const dir = process.argv[2] || '/home/z/faces0443'
const map = JSON.parse(readFileSync(process.argv[3] || '/home/z/my-project/dispatch-census-0443.json')).map

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
for (let f = 501; f <= 579; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') { console.error(`# F${f} ${m.conclusion || m.status} (hole)`); continue }
  const p = `${dir}/face${m.id}.log`
  if (!existsSync(p)) { console.error(`# F${f} ${m.id} artifact hole`); continue }
  const lines = readFileSync(p, 'utf8').split('\n')
  const { gaps, evts } = stormGaps(lines)
  faces.push({ F: f, id: m.id, gaps, evts })
}
console.error(`# window: ${faces.length} faces (F501..F579 minus the holes)`)

// the .391-seat arc: the storm ELEVENTH gap (index ten; the constructive zero the fewer-than-eleven-gaps face keeps)
const arc = faces.map(x => x.gaps.length > 10 ? x.gaps[10] : 0)
const tenth = faces.map(x => x.gaps.length > 9 ? x.gaps[9] : 0) // the .389 dialog side
const smin = faces.map(x => x.gaps.length ? Math.min(...x.gaps) : 0) // the .358 bound
const smax = faces.map(x => x.gaps.length ? Math.max(...x.gaps) : 0) // the .352 bound
const gapsum = faces.map(x => x.gaps.reduce((a, b) => a + b, 0)) // the span sum-law bound

console.log('=== the storm ELEVENTH arc (F-order, hole-aware) ===')
faces.forEach((x, i) => console.log(`F${x.F}\televenth=${arc[i]}\ttenth=${tenth[i]}\tsmin=${smin[i]}\tsmax=${smax[i]}\tgapsum=${gapsum[i]}\tgapCount=${x.gaps.length}\tevts=${x.evts}`))

// the laws
const realIdx = faces.map((x, i) => x.gaps.length > 10 ? i : -1).filter(i => i >= 0)
const conIdx = faces.map((x, i) => x.gaps.length <= 10 ? i : -1).filter(i => i >= 0)
console.log('=== LAWS ===')
console.log('REAL voiced:', realIdx.length, '| CONSTRUCTIVE (fewer-than-eleven-gaps):', conIdx.length)
console.log('CONSTRUCTIVE faces:', JSON.stringify(conIdx.map(i => 'F' + faces[i].F)))
console.log('REAL zero faces:', JSON.stringify(realIdx.filter(i => arc[i] === 0).map(i => 'F' + faces[i].F)))
console.log('CEILING faces (eleventh===max, voiced):', JSON.stringify(realIdx.filter(i => arc[i] === smax[i] && arc[i] > 0).map(i => `F${faces[i].F}=${arc[i]}`)))
const voicedSorted = [...realIdx].sort((a, b) => arc[b] - arc[a])
console.log('top voiced:', JSON.stringify(voicedSorted.slice(0, 8).map(i => `F${faces[i].F}=${arc[i]}(max ${smax[i]})`)))
const classes = {}
for (const i of realIdx) classes[arc[i]] = (classes[arc[i]] || 0) + 1
console.log('REAL classes:', JSON.stringify(Object.entries(classes).sort((a, b) => Number(a[0]) - Number(b[0])).map(([v, n]) => `${v}x${n}`)))
const held = []
for (let k = 1; k < faces.length; k++) {
  const i = k; const j = k - 1
  if (arc[i] === arc[j] && faces[i].gaps.length > 10 && faces[j].gaps.length > 10 && arc[i] > 0) held.push(`F${faces[j].F}/F${faces[i].F}=${arc[i]}`)
  else if (arc[i] === arc[j] && arc[i] === 0) held.push(`F${faces[j].F}/F${faces[i].F}=0(${faces[j].gaps.length > 10 ? 'REAL' : 'cons'}/${faces[i].gaps.length > 10 ? 'REAL' : 'cons'})`)
}
console.log('held pairs (adjacent equal):', JSON.stringify(held))
let boundBad = []
for (const i of realIdx) {
  if (!(smin[i] <= arc[i] && arc[i] <= smax[i] && arc[i] <= gapsum[i])) boundBad.push('F' + faces[i].F)
}
console.log('BOUND audit (REAL):', boundBad.length === 0 ? 'GREEN all ' + realIdx.length : 'BAD ' + JSON.stringify(boundBad))
let under = 0, level = 0, above = 0
const underEx = [], levelEx = [], aboveEx = []
for (let i = 0; i < faces.length; i++) {
  if (arc[i] < tenth[i]) { under++; if (underEx.length < 30) underEx.push(`F${faces[i].F}:${arc[i]}<${tenth[i]}`) }
  else if (arc[i] === tenth[i]) { level++; if (levelEx.length < 30) levelEx.push(`F${faces[i].F}:${arc[i]}=${tenth[i]}`) }
  else { above++; if (aboveEx.length < 30) aboveEx.push(`F${faces[i].F}:${arc[i]}>${tenth[i]}`) }
}
console.log(`DIALOG vs the .389 storm tenth: under ${under} level ${level} above ${above}`)
console.log('under ex:', JSON.stringify(underEx))
console.log('level ex:', JSON.stringify(levelEx))
console.log('above ex:', JSON.stringify(aboveEx))
const tail = faces[faces.length - 1]
console.log('FRESH TAIL F' + tail.F, 'eleventh', arc[arc.length - 1], 'gaps', JSON.stringify(tail.gaps), 'evts', tail.evts, 'kind', tail.gaps.length > 10 ? 'REAL' : 'CONSTRUCTIVE')
// the REAL arc the test embeds (the FIELDPROOF the same list re-voices)
console.log('REAL_ARC = [' + arc.join(',') + ']')
// the trend windows (the triads the test prices - the F-number indexes)
const byF = Object.fromEntries(faces.map((x, i) => ['F' + x.F, arc[i]]))
const win = (a, b, c) => JSON.stringify([byF['F' + a], byF['F' + b], byF['F' + c]])
for (const t of [[503, 504, 505], [518, 519, 520], [540, 541, 542], [563, 564, 565], [564, 565, 566], [565, 566, 567], [566, 567, 568], [567, 568, 569], [568, 569, 570], [569, 570, 571], [570, 571, 572], [571, 572, 573], [572, 573, 574], [573, 574, 575], [574, 575, 576], [575, 576, 577], [576, 577, 578], [577, 578, 579]]) {
  console.log('window F' + t[0] + '->F' + t[2], win(t[0], t[1], t[2]))
}
// the pin candidates: the interesting voiced faces for the test columns
console.log('voiced pin candidates:', JSON.stringify(realIdx.slice(-20).map(i => `F${faces[i].F}=${arc[i]}`)))
