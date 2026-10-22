// (v0.976.373 fire-1543) the champ FIFTH breath arc pricing - the
// .371 champ fourth method the index four the seat re-prices: the
// 65-face window F501..F567 the census map prices, the champion
// cadence the adjacent pairs measure, the FIFTH gap the list's own
// index-four order statistic keeps (the fewer-than-five-gaps face
// the constructive zero the family convention keeps).
// Usage: node scripts/fire1543-price.mjs <facesdir> <map.json>
import { readFileSync, readdirSync, existsSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces1543'
const mapFile = process.argv[3] || '/home/z/my-project/dispatch-census-1543.json'
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
  return { champs: [...champs], cevts, gaps, stretch: cevts.length >= 2 ? cevts[cevts.length - 1].s - cevts[0].s : 0 }
}

const rows = []
for (let f = 501; f <= 567; f++) {
  const m = map['F' + f]
  if (!m) continue
  const face = `${dir}/face${m.id}.log`
  if (!existsSync(face)) continue
  const lines = readFileSync(face, 'utf8').split('\n')
  const c = champCensus(lines)
  const fifth = c.gaps.length > 4 ? c.gaps[4] : 0
  const fourth = c.gaps.length > 3 ? c.gaps[3] : 0
  const maxGap = c.gaps.length ? Math.max(...c.gaps) : 0
  const minGap = c.gaps.length ? Math.min(...c.gaps) : 0
  rows.push({
    f, id: m.id, fifth, fourth, gapCount: c.gaps.length, gaps: c.gaps,
    maxGap, minGap, stretch: c.stretch, champs: c.champs.join('/'),
    kind: c.gaps.length > 4 ? 'REAL' : 'CONSTRUCTIVE'
  })
}
console.log('faces priced:', rows.length)
console.log('=== per-face (f, fifth, fourth, gapCount, maxGap, minGap, stretch, kind, champs) ===')
for (const r of rows) console.log(`F${r.f} ${r.fifth} ${r.fourth} ${r.gapCount} ${r.maxGap} ${r.minGap} ${r.stretch} ${r.kind} ${r.champs}`)
// the laws
const real = rows.filter(r => r.kind === 'REAL')
const con = rows.filter(r => r.kind === 'CONSTRUCTIVE')
console.log('=== LAWS ===')
console.log('REAL voiced:', real.length, '| CONSTRUCTIVE:', con.length)
console.log('REAL zero faces:', JSON.stringify(real.filter(r => r.fifth === 0).map(r => 'F' + r.f)))
console.log('CEILING faces (fifth===maxGap):', JSON.stringify(real.filter(r => r.fifth === r.maxGap && r.fifth > 0).map(r => `F${r.f}=${r.fifth}`)))
const classes = {}
for (const r of rows) classes[r.fifth] = (classes[r.fifth] || 0) + 1
console.log('classes:', JSON.stringify(Object.entries(classes).sort((a, b) => a[0] - b[0]).map(([v, n]) => `${v}x${n}`)))
const held = []
for (let i = 1; i < rows.length; i++) {
  if (rows[i].fifth === rows[i - 1].fifth && rows[i].kind === 'REAL' && rows[i - 1].kind === 'REAL' && rows[i].fifth > 0) {
    held.push(`F${rows[i - 1].f}/F${rows[i].f}=${rows[i].fifth}`)
  } else if (rows[i].fifth === rows[i - 1].fifth && rows[i].fifth === 0) {
    held.push(`F${rows[i - 1].f}/F${rows[i].f}=0(${rows[i - 1].kind.slice(0, 4)}/${rows[i].kind.slice(0, 4)})`)
  }
}
console.log('held pairs (adjacent equal):', JSON.stringify(held))
// bound law: min <= fifth <= maxGap, fifth <= stretch (voiced REAL faces)
let boundBad = []
for (const r of real) {
  if (!(r.minGap <= r.fifth && r.fifth <= r.maxGap && r.fifth <= r.stretch)) boundBad.push('F' + r.f)
}
console.log('BOUND audit (REAL):', boundBad.length === 0 ? 'GREEN all ' + real.length : 'BAD ' + JSON.stringify(boundBad))
// dialog law vs the champ fourth (.371)
let under = 0, level = 0, above = 0
const aboveList = [], underList = [], levelList = []
for (const r of rows) {
  if (r.fifth < r.fourth) { under++; if (underList.length < 6) underList.push(`F${r.f}:${r.fifth}<${r.fourth}`) }
  else if (r.fifth === r.fourth) { level++; if (levelList.length < 6) levelList.push(`F${r.f}:${r.fifth}=${r.fourth}`) }
  else { above++; if (aboveList.length < 6) aboveList.push(`F${r.f}:${r.fifth}>${r.fourth}`) }
}
console.log(`DIALOG vs champ fourth: under ${under} level ${level} above ${above}`)
console.log('under ex:', JSON.stringify(underList), 'level ex:', JSON.stringify(levelList), 'above ex:', JSON.stringify(aboveList))
// the fresh tail
const tail = rows[rows.length - 1]
console.log('FRESH TAIL F' + tail.f, 'fifth', tail.fifth, 'gaps', JSON.stringify(tail.gaps), 'champs', tail.champs, 'kind', tail.kind)
// windows for the trend test (fifth arc triads)
const byF = Object.fromEntries(rows.map(r => ['F' + r.f, r]))
const win = (a, b, c) => [byF['F' + a], byF['F' + b], byF['F' + c]].map(r => r.fifth)
console.log('windows: F501-F503', win(501, 502, 503), '| F530-F532', win(530, 531, 532), '| F564-F566', win(564, 565, 566), '| F565-F567', win(565, 566, 567))
