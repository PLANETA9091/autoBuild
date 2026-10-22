// (v0.976.374 fire-1743) the .374 pricing - the storm SIXTH breath
// laws the 66-face window F501-F568 prices (the F552 cancelled and
// the F557 artifact hole the F-order keeps). The census re-rides the
// storm hand (the beyond-first echoes the FILE ORDER keeps, the
// adjacent pairs the gaps measure) the SIXTH gap the order statistic
// picks (index five; the fewer-than-six-gaps face the constructive
// zero keeps). Usage: node scripts/fire1743-price.mjs <facesdir> <map.json>
import { readFileSync, existsSync, readdirSync } from 'fs'

const dir = process.argv[2] || '/home/z/faces1743'
const map = JSON.parse(readFileSync(process.argv[3] || '/home/z/my-project/dispatch-census-1743.json')).map

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
for (let f = 501; f <= 568; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') { console.error(`# F${f} ${m.conclusion || m.status} (hole)`); continue }
  const p = `${dir}/face${m.id}.log`
  if (!existsSync(p)) { console.error(`# F${f} ${m.id} artifact hole`); continue }
  const lines = readFileSync(p, 'utf8').split('\n')
  const { gaps, evts } = stormGaps(lines)
  faces.push({ F: f, id: m.id, gaps, evts })
}
console.error(`# window: ${faces.length} faces (F501..F568 minus the holes)`)

// the .374 arc: the storm SIXTH gap (index five; the constructive zero the fewer-than-six-gaps face keeps)
const arc = faces.map(x => x.gaps.length > 5 ? x.gaps[5] : 0)
const fifth = faces.map(x => x.gaps.length > 4 ? x.gaps[4] : 0) // the .372 dialog side
const gmin = faces.map(x => x.gaps.length ? Math.min(...x.gaps) : 0) // the .358 bound
const gmax = faces.map(x => x.gaps.length ? Math.max(...x.gaps) : 0) // the .352 bound
const gapsum = faces.map(x => x.gaps.reduce((a, b) => a + b, 0)) // the stretch-sum bound

console.log('=== the .374 storm SIXTH arc (F-order, hole-aware) ===')
faces.forEach((x, i) => console.log(`F${x.F}\tsixth=${arc[i]}\tfifth=${fifth[i]}\tmin=${gmin[i]}\tmax=${gmax[i]}\tgapsum=${gapsum[i]}\tgapCount=${x.gaps.length}\tevts=${x.evts}`))

// the laws
const realIdx = faces.map((x, i) => x.gaps.length > 5 ? i : -1).filter(i => i >= 0)
const conIdx = faces.map((x, i) => x.gaps.length <= 5 ? i : -1).filter(i => i >= 0)
console.log('=== LAWS ===')
console.log('REAL voiced:', realIdx.length, '| CONSTRUCTIVE (fewer-than-six-gaps):', conIdx.length, JSON.stringify(conIdx.map(i => 'F' + faces[i].F)))
console.log('REAL zero faces:', JSON.stringify(realIdx.filter(i => arc[i] === 0).map(i => 'F' + faces[i].F)))
console.log('CEILING faces (sixth===max, voiced):', JSON.stringify(realIdx.filter(i => arc[i] === gmax[i] && arc[i] > 0).map(i => `F${faces[i].F}=${arc[i]}`)))
const classes = {}
for (const i of realIdx) classes[arc[i]] = (classes[arc[i]] || 0) + 1
console.log('REAL classes:', JSON.stringify(Object.entries(classes).sort((a, b) => Number(a[0]) - Number(b[0])).map(([v, n]) => `${v}x${n}`)))
const held = []
for (let k = 1; k < faces.length; k++) {
  const i = k; const j = k - 1
  if (arc[i] === arc[j] && faces[i].gaps.length > 5 && faces[j].gaps.length > 5 && arc[i] > 0) held.push(`F${faces[j].F}/F${faces[i].F}=${arc[i]}`)
  else if (arc[i] === arc[j] && arc[i] === 0) held.push(`F${faces[j].F}/F${faces[i].F}=0(${faces[j].gaps.length > 5 ? 'REAL' : 'cons'}/${faces[i].gaps.length > 5 ? 'REAL' : 'cons'})`)
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
  if (arc[i] < fifth[i]) { under++; if (underEx.length < 6) underEx.push(`F${faces[i].F}:${arc[i]}<${fifth[i]}`) }
  else if (arc[i] === fifth[i]) { level++; if (levelEx.length < 6) levelEx.push(`F${faces[i].F}:${arc[i]}=${fifth[i]}`) }
  else { above++; if (aboveEx.length < 6) aboveEx.push(`F${faces[i].F}:${arc[i]}>${fifth[i]}`) }
}
console.log(`DIALOG vs the .372 storm fifth: under ${under} level ${level} above ${above}`)
console.log('under ex:', JSON.stringify(underEx), 'level ex:', JSON.stringify(levelEx), 'above ex:', JSON.stringify(aboveEx))
const tail = faces[faces.length - 1]
console.log('FRESH TAIL F' + tail.F, 'sixth', arc[arc.length - 1], 'gaps', JSON.stringify(tail.gaps), 'evts', tail.evts, 'kind', tail.gaps.length > 5 ? 'REAL' : 'CONSTRUCTIVE')
// the REAL arc the test embeds (the FIELDPROOF the same list re-voices)
console.log('REAL_ARC = [' + arc.join(',') + ']')
// the trend windows (the triads the test prices)
const byF = Object.fromEntries(faces.map((x, i) => ['F' + x.F, arc[i]]))
const win = (a, b, c) => JSON.stringify([byF['F' + a], byF['F' + b], byF['F' + c]])
console.log('windows: F503->F505', win(503, 504, 505), '| F518->F520', win(518, 519, 520), '| F540->F542', win(540, 541, 542), '| F566->F568', win(566, 567, 568))
