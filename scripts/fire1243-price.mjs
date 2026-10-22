// (v0.976.371 fire-1243) the .371 pricing - the champ FOURTH breath
// laws the 63-face window F501-F565 prices (the F552 cancelled and
// the F557 artifact hole the F-order keeps). The census re-rides the
// .369 champ hand (the champion set the tallest beyond-first count
// keeps, the TIE co-reigns) the FOURTH gap the order statistic picks.
// Usage: node scripts/fire1243-price.mjs <facesdir> <map.json>
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'fs'
import { execFileSync } from 'child_process'

const dir = process.argv[2] || '/home/z/faces331'
const map = JSON.parse(readFileSync(process.argv[3] || '/tmp/dispatch-census-1243.json')).map

const JOIN_ECHO_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/

function champGaps (lines) {
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
  return { gaps, tally, champs }
}

// the compact F-order face list (the holes the F-order keeps)
const faces = []
for (let f = 501; f <= 565; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') { console.error(`# F${f} ${m.conclusion} (hole)`); continue }
  const p = `${dir}/face${m.id}.log`
  if (!existsSync(p)) { console.error(`# F${f} ${m.id} artifact hole`); continue }
  const size = Number(execFileSync('stat', ['-c', '%s', p]).toString().trim())
  if (!size) { console.error(`# F${f} empty (hole)`); continue }
  const lines = readFileSync(p, 'utf8').split('\n')
  const { gaps } = champGaps(lines)
  faces.push({ F: f, id: m.id, gaps })
}
console.error(`# window: ${faces.length} faces (F501..F565 minus the holes)`)

// the .371 arc: the champ FOURTH gap (index three; the constructive zero the fewer-than-four-gaps face keeps)
const arc = faces.map(x => x.gaps.length > 3 ? x.gaps[3] : 0)
const third = faces.map(x => x.gaps.length > 2 ? x.gaps[2] : 0) // the .369 dialog side
const second = faces.map(x => x.gaps.length > 1 ? x.gaps[1] : 0) // the .367 naming side
const gmin = faces.map(x => x.gaps.length ? Math.min(...x.gaps) : 0) // the .359 bound
const gmax = faces.map(x => x.gaps.length ? Math.max(...x.gaps) : 0) // the .353 bound
const stretch = faces.map(x => x.gaps.length ? x.gaps[x.gaps.length - 1] - x.gaps[0] : 0) // the .351 bound (approx the stretch law voices - the REAL stretch the first/last events keep, the gaps' own span the sum prices)

console.log('=== the .371 champ FOURTH arc (F-order, hole-aware) ===')
faces.forEach((x, i) => console.log(`F${x.F}\tfourth=${arc[i]}\tthird=${third[i]}\tsecond=${second[i]}\tmin=${gmin[i]}\tmax=${gmax[i]}\tgapsum=${x.gaps.reduce((a, b) => a + b, 0)}\tgapCount=${x.gaps.length}`))

// the laws
let constructive = 0, realZero = 0
const under = [], level = [], above = []
const ceiling = []
let boundBad = 0
faces.forEach((x, i) => {
  const v = arc[i]
  if (x.gaps.length <= 3) constructive++
  else if (v === 0) realZero++
  if (x.gaps.length >= 4) {
    // the BOUND law: the .359 champ min <= fourth <= the .353 champ gap, fourth <= the stretch-sum
    const sum = x.gaps.reduce((a, b) => a + b, 0)
    if (!(gmin[i] <= v && v <= gmax[i] && v <= sum)) { boundBad++; console.error(`# BOUND BAD F${x.F} min=${gmin[i]} v=${v} max=${gmax[i]} sum=${sum}`) }
    if (v === Math.max(...x.gaps)) ceiling.push(`F${x.F}(${v})`)
  }
  if (v < third[i]) under.push(`F${x.F}(${v}<${third[i]})`)
  else if (v === third[i]) level.push(`F${x.F}(${v})`)
  else above.push(`F${x.F}(${v}>${third[i]})`)
})
console.log('=== the laws ===')
console.log('constructive (<4 gaps):', constructive, constructive ? '(faces: ' + faces.filter((x, i) => x.gaps.length <= 3).map(x => `F${x.F}`).join(',') + ')' : '')
console.log('REAL zero (>=4 gaps, fourth 0):', realZero, realZero ? '(faces: ' + faces.filter((x, i) => x.gaps.length >= 4 && arc[i] === 0).map(x => `F${x.F}`).join(',') + ')' : '')
console.log('BOUND bad:', boundBad)
console.log('DIALOG vs .369 champ third: UNDER', under.length, 'LEVEL', level.length, 'ABOVE', above.length)
console.log('  under:', under.slice(0, 8).join(' '), '...')
console.log('  level:', level.join(' '))
console.log('  above:', above.slice(0, 8).join(' '), '...')
console.log('CEILING (fourth = the cadence tallest):', ceiling.length, ceiling.join(' '))
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
// the REAL windows (the trendRow pins) - the first swell/swing/fade the arc keeps
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
writeFileSync('/tmp/fire1243-arc.json', JSON.stringify({ faces: faces.map(x => x.F), ids: faces.map(x => x.id), arc, third, second }, null, 1))
console.log('arc written /tmp/fire1243-arc.json')
