// (fire-2043 the :43 stream) the .379-seat pricing - the champ
// SEVENTH breath laws the 69-face window F501-F571 prices (the F552
// cancelled and the F557 artifact hole the F-order keeps). The census
// re-rides the champ hand (the champion cadence the tally picks, the
// adjacent pairs the gaps measure) the SEVENTH gap the order statistic
// picks (index six; the fewer-than-seven-gaps face the constructive
// zero keeps). Usage: node scripts/fire2043-price.mjs <facesdir> <map.json>
import { readFileSync, existsSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces2043'
const mapFile = process.argv[3] || '/home/z/my-project/dispatch-census-2043.json'
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
for (let f = 501; f <= 571; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') { console.error(`# F${f} ${m.conclusion || m.status} (hole)`); continue }
  const face = `${dir}/face${m.id}.log`
  if (!existsSync(face)) { console.error(`# F${f} ${m.id} artifact hole`); continue }
  const lines = readFileSync(face, 'utf8').split('\n')
  const c = champCensus(lines)
  const seventh = c.gaps.length > 6 ? c.gaps[6] : 0
  const sixth = c.gaps.length > 5 ? c.gaps[5] : 0
  const maxGap = c.gaps.length ? Math.max(...c.gaps) : 0
  const minGap = c.gaps.length ? Math.min(...c.gaps) : 0
  rows.push({
    f, id: m.id, seventh, sixth, gapCount: c.gaps.length, gaps: c.gaps,
    maxGap, minGap, stretch: c.stretch, champs: c.champs.join('/'),
    kind: c.gaps.length > 6 ? 'REAL' : 'CONSTRUCTIVE'
  })
}
console.log('faces priced:', rows.length)
console.log('=== per-face (f, seventh, sixth, gapCount, maxGap, minGap, stretch, kind, champs) ===')
for (const r of rows) console.log(`F${r.f} ${r.seventh} ${r.sixth} ${r.gapCount} ${r.maxGap} ${r.minGap} ${r.stretch} ${r.kind} ${r.champs}`)
// the laws
const real = rows.filter(r => r.kind === 'REAL')
const con = rows.filter(r => r.kind === 'CONSTRUCTIVE')
console.log('=== LAWS ===')
console.log('REAL voiced:', real.length, '| CONSTRUCTIVE (fewer-than-seven-gaps):', con.length)
console.log('constructive faces:', JSON.stringify(con.map(r => 'F' + r.f)))
console.log('REAL zero faces:', JSON.stringify(real.filter(r => r.seventh === 0).map(r => 'F' + r.f)))
console.log('CEILING faces (seventh===maxGap, voiced):', JSON.stringify(real.filter(r => r.seventh === r.maxGap && r.seventh > 0).map(r => `F${r.f}=${r.seventh}`)))
const classes = {}
for (const r of real) classes[r.seventh] = (classes[r.seventh] || 0) + 1
console.log('REAL classes:', JSON.stringify(Object.entries(classes).sort((a, b) => Number(a[0]) - Number(b[0])).map(([v, n]) => `${v}x${n}`)))
const voiced = real.map(r => r.seventh)
console.log('REAL tallest voiced:', Math.max(...voiced), '| second-tallest:', [...new Set(voiced)].sort((a, b) => b - a)[1])
const held = []
for (let i = 1; i < rows.length; i++) {
  if (rows[i].seventh === rows[i - 1].seventh && rows[i].kind === 'REAL' && rows[i - 1].kind === 'REAL' && rows[i].seventh > 0) {
    held.push(`F${rows[i - 1].f}/F${rows[i].f}=${rows[i].seventh}`)
  } else if (rows[i].seventh === rows[i - 1].seventh && rows[i].seventh === 0) {
    held.push(`F${rows[i - 1].f}/F${rows[i].f}=0(${rows[i - 1].kind.slice(0, 4)}/${rows[i].kind.slice(0, 4)})`)
  }
}
console.log('held pairs (adjacent equal):', JSON.stringify(held))
// bound law: min <= seventh <= maxGap, seventh <= stretch (voiced REAL faces)
let boundBad = []
for (const r of real) {
  if (!(r.minGap <= r.seventh && r.seventh <= r.maxGap && r.seventh <= r.stretch)) boundBad.push('F' + r.f)
}
console.log('BOUND audit (REAL):', boundBad.length === 0 ? 'GREEN all ' + real.length : 'BAD ' + JSON.stringify(boundBad))
// dialog law vs the champ sixth (.375)
let under = 0, level = 0, above = 0
const aboveList = [], underList = [], levelList = []
for (const r of rows) {
  if (r.seventh < r.sixth) { under++; if (underList.length < 8) underList.push(`F${r.f}:${r.seventh}<${r.sixth}`) }
  else if (r.seventh === r.sixth) { level++; if (levelList.length < 8) levelList.push(`F${r.f}:${r.seventh}=${r.sixth}`) }
  else { above++; if (aboveList.length < 8) aboveList.push(`F${r.f}:${r.seventh}>${r.sixth}`) }
}
console.log(`DIALOG vs the .375 champ sixth: under ${under} level ${level} above ${above}`)
console.log('under ex:', JSON.stringify(underList), 'level ex:', JSON.stringify(levelList), 'above ex:', JSON.stringify(aboveList))
// the fresh tail
const tail = rows[rows.length - 1]
console.log(`FRESH TAIL: F${tail.f} seventh=${tail.seventh} (${tail.kind}) gapCount=${tail.gapCount} gaps=${JSON.stringify(tail.gaps)} champs=${tail.champs}`)
