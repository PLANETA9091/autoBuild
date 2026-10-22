// (v0.976.372 fire-1343) the .372 pricing - the storm FIFTH breath
// laws the 64-face window F501-F566 prices (the F552 cancelled and
// the F557 artifact hole the F-order keeps). The census re-rides the
// .370 storm hand (the beyond-first echoes the FILE ORDER keeps, the
// adjacent pairs the gaps measure) the FIFTH gap the order statistic
// picks. Usage: node scripts/fire1343-price.mjs <facesdir> <map.json>
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { execFileSync } from 'child_process'

const dir = process.argv[2] || '/home/z/faces331'
const map = JSON.parse(readFileSync(process.argv[3] || '/home/z/my-project/dispatch-census-1343.json')).map

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
  return { gaps, tally }
}

// the compact F-order face list (the holes the F-order keeps)
const faces = []
for (let f = 501; f <= 566; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') { console.error(`# F${f} ${m.conclusion} (hole)`); continue }
  const p = `${dir}/face${m.id}.log`
  if (!existsSync(p)) { console.error(`# F${f} ${m.id} artifact hole`); continue }
  const size = Number(execFileSync('stat', ['-c', '%s', p]).toString().trim())
  if (!size) { console.error(`# F${f} empty (hole)`); continue }
  const lines = readFileSync(p, 'utf8').split('\n')
  const { gaps } = stormGaps(lines)
  faces.push({ F: f, id: m.id, gaps })
}
console.error(`# window: ${faces.length} faces (F501..F566 minus the holes)`)

// the .372 arc: the storm FIFTH gap (index four; the constructive zero the fewer-than-five-gaps face keeps)
const arc = faces.map(x => x.gaps.length > 4 ? x.gaps[4] : 0)
const fourth = faces.map(x => x.gaps.length > 3 ? x.gaps[3] : 0) // the .370 dialog side
const third = faces.map(x => x.gaps.length > 2 ? x.gaps[2] : 0) // the .368 naming side
const gmin = faces.map(x => x.gaps.length ? Math.min(...x.gaps) : 0) // the .358 bound
const gmax = faces.map(x => x.gaps.length ? Math.max(...x.gaps) : 0) // the .352 bound
const gapsum = faces.map(x => x.gaps.reduce((a, b) => a + b, 0)) // the stretch-sum bound

console.log('=== the .372 storm FIFTH arc (F-order, hole-aware) ===')
faces.forEach((x, i) => console.log(`F${x.F}\tfifth=${arc[i]}\tfourth=${fourth[i]}\tthird=${third[i]}\tmin=${gmin[i]}\tmax=${gmax[i]}\tgapsum=${gapsum[i]}\tgapCount=${x.gaps.length}`))

// the laws
let constructive = 0, realZero = 0
const under = [], level = [], above = []
const ceiling = []
let boundBad = 0
faces.forEach((x, i) => {
  const v = arc[i]
  if (x.gaps.length <= 4) constructive++
  else if (v === 0) realZero++
  if (x.gaps.length >= 5) {
    // the BOUND law: the .358 storm min <= fifth <= the .352 re-join gap, fifth <= the stretch-sum
    if (!(gmin[i] <= v && v <= gmax[i] && v <= gapsum[i])) { boundBad++; console.error(`# BOUND BAD F${x.F} min=${gmin[i]} v=${v} max=${gmax[i]} sum=${gapsum[i]}`) }
    if (v === Math.max(...x.gaps)) ceiling.push(`F${x.F}(${v})`)
  }
  if (v < fourth[i]) under.push(`F${x.F}(${v}<${fourth[i]})`)
  else if (v === fourth[i]) level.push(`F${x.F}(${v})`)
  else above.push(`F${x.F}(${v}>${fourth[i]})`)
})
console.log('=== the laws ===')
console.log('constructive (<5 gaps):', constructive, constructive ? '(faces: ' + faces.filter((x, i) => x.gaps.length <= 4).map(x => `F${x.F}`).join(',') + ')' : '')
console.log('REAL zero (>=5 gaps, fifth 0):', realZero, realZero ? '(faces: ' + faces.filter((x, i) => x.gaps.length >= 5 && arc[i] === 0).map(x => `F${x.F}`).join(',') + ')' : '')
console.log('BOUND bad:', boundBad)
console.log('DIALOG vs .370 storm fourth: UNDER', under.length, 'LEVEL', level.length, 'ABOVE', above.length)
console.log('  under:', under.slice(0, 10).join(' '))
console.log('  level:', level.join(' '))
console.log('  above:', above.slice(0, 10).join(' '))
console.log('CEILING (fifth = the cadence tallest):', ceiling.length, ceiling.join(' '))
// the HELD pairs (the compact arc adjacency the F-order prices)
const held = []
for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) held.push(`${faces[i - 1].F}/${faces[i].F}(${arc[i]})`)
console.log('HELD pairs:', held.length, held.join(' '))
// the classes
const tally = new Map()
for (const v of arc) tally.set(v, (tally.get(v) || 0) + 1)
const classes = [...tally.entries()].sort((a, b) => a[0] - b[0])
console.log('CLASSES:', classes.length, 'min', Math.min(...arc), 'max', Math.max(...arc))
console.log('  tally:', classes.map(([v, n]) => `${v}x${n}`).join(' '))
// the REAL windows (the trendRow pins) - the swell/crash/fade the arc keeps
console.log('=== the window probes (the trendRow pins) ===')
for (let i = 1; i < arc.length - 1; i++) {
  const a = arc[i - 1], b = arc[i], c = arc[i + 1]
  if (b > a && c > b && b - a >= 3) console.log(`swell @F${faces[i].F}: ${a} -> ${b} (+${b - a}) -> ${c} (+${c - b})`)
}
for (let i = 1; i < arc.length - 1; i++) {
  const a = arc[i - 1], b = arc[i], c = arc[i + 1]
  if (a > 0 && b === 0 && c > 0) console.log(`crash @F${faces[i].F}: ${a} -> ${b} (-${a}) -> ${c} (+${c})`)
}
for (let i = 1; i < arc.length - 1; i++) {
  const a = arc[i - 1], b = arc[i], c = arc[i + 1]
  if (b < a && c < b && a - b >= 20) console.log(`fade @F${faces[i].F}: ${a} -> ${b} (-${a - b}) -> ${c} (-${b - c})`)
}
// the fresh tail voice: F566's own storm cadence
const tail = faces[faces.length - 1]
console.log('=== the FRESH TAIL ===')
console.log(`F${tail.F} gapCount=${tail.gaps.length} cadence=[${tail.gaps.join(', ')}] fifth=${arc[arc.length - 1]}`)
writeFileSync('/home/z/my-project/fire1343-arc.json', JSON.stringify({ faces: faces.map(x => x.F), ids: faces.map(x => x.id), arc, fourth }, null, 1))
console.log('arc written /home/z/my-project/fire1343-arc.json')
