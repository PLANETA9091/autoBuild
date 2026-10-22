// (v0.976.375 fire-1843) the champ SIXTH breath arc pricing - the
// .373 champ fifth method the index five the seat re-prices: the
// 67-face window F501..F569 the census map prices (the F552 cancelled
// and the F557 artifact hole the F-order keeps, the F570 in flight the
// terminal phase re-rides), the champion cadence the adjacent pairs
// measure, the SIXTH gap the list's own index-five order statistic
// keeps (the fewer-than-six-gaps face the constructive zero the
// family convention keeps).
// Usage: node scripts/fire1843-price.mjs <facesdir> <map.json>
import { readFileSync, existsSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces1843'
const mapFile = process.argv[3] || '/home/z/my-project/dispatch-census-1843.json'
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
for (let f = 501; f <= 569; f++) {
  const m = map['F' + f]
  if (!m) continue
  const face = `${dir}/face${m.id}.log`
  if (!existsSync(face)) continue
  const lines = readFileSync(face, 'utf8').split('\n')
  const c = champCensus(lines)
  const sixth = c.gaps.length > 5 ? c.gaps[5] : 0
  const fifth = c.gaps.length > 4 ? c.gaps[4] : 0
  const maxGap = c.gaps.length ? Math.max(...c.gaps) : 0
  const minGap = c.gaps.length ? Math.min(...c.gaps) : 0
  rows.push({
    f, id: m.id, sixth, fifth, gapCount: c.gaps.length, gaps: c.gaps,
    maxGap, minGap, stretch: c.stretch, champs: c.champs.join('/'),
    kind: c.gaps.length > 5 ? 'REAL' : 'CONSTRUCTIVE'
  })
}
console.log('faces priced:', rows.length)
console.log('=== per-face (f, sixth, fifth, gapCount, maxGap, minGap, stretch, kind, champs) ===')
for (const r of rows) console.log(`F${r.f} ${r.sixth} ${r.fifth} ${r.gapCount} ${r.maxGap} ${r.minGap} ${r.stretch} ${r.kind} ${r.champs}`)
// the laws
const real = rows.filter(r => r.kind === 'REAL')
const con = rows.filter(r => r.kind === 'CONSTRUCTIVE')
console.log('=== LAWS ===')
console.log('REAL voiced:', real.length, '| CONSTRUCTIVE (fewer-than-six-gaps):', con.length)
console.log('constructive faces:', JSON.stringify(con.map(r => 'F' + r.f)))
console.log('REAL zero faces:', JSON.stringify(real.filter(r => r.sixth === 0).map(r => 'F' + r.f)))
console.log('CEILING faces (sixth===maxGap, voiced):', JSON.stringify(real.filter(r => r.sixth === r.maxGap && r.sixth > 0).map(r => `F${r.f}=${r.sixth}`)))
const classes = {}
for (const r of rows) classes[r.sixth] = (classes[r.sixth] || 0) + 1
console.log('classes:', JSON.stringify(Object.entries(classes).sort((a, b) => Number(a[0]) - Number(b[0])).map(([v, n]) => `${v}x${n}`)))
const voiced = rows.map(r => r.sixth).filter((v, i) => rows[i].kind === 'REAL')
console.log('REAL tallest voiced:', Math.max(...voiced), '| second-tallest:', [...new Set(voiced)].sort((a, b) => b - a)[1])
const held = []
for (let i = 1; i < rows.length; i++) {
  if (rows[i].sixth === rows[i - 1].sixth && rows[i].kind === 'REAL' && rows[i - 1].kind === 'REAL' && rows[i].sixth > 0) {
    held.push(`F${rows[i - 1].f}/F${rows[i].f}=${rows[i].sixth}`)
  } else if (rows[i].sixth === rows[i - 1].sixth && rows[i].sixth === 0) {
    held.push(`F${rows[i - 1].f}/F${rows[i].f}=0(${rows[i - 1].kind.slice(0, 4)}/${rows[i].kind.slice(0, 4)})`)
  }
}
console.log('held pairs (adjacent equal):', JSON.stringify(held))
// bound law: min <= sixth <= maxGap, sixth <= stretch (voiced REAL faces)
let boundBad = []
for (const r of real) {
  if (!(r.minGap <= r.sixth && r.sixth <= r.maxGap && r.sixth <= r.stretch)) boundBad.push('F' + r.f)
}
console.log('BOUND audit (REAL):', boundBad.length === 0 ? 'GREEN all ' + real.length : 'BAD ' + JSON.stringify(boundBad))
// dialog law vs the champ fifth (.373)
let under = 0, level = 0, above = 0
const aboveList = [], underList = [], levelList = []
for (const r of rows) {
  if (r.sixth < r.fifth) { under++; if (underList.length < 8) underList.push(`F${r.f}:${r.sixth}<${r.fifth}`) }
  else if (r.sixth === r.fifth) { level++; if (levelList.length < 8) levelList.push(`F${r.f}:${r.sixth}=${r.fifth}`) }
  else { above++; if (aboveList.length < 8) aboveList.push(`F${r.f}:${r.sixth}>${r.fifth}`) }
}
console.log(`DIALOG vs the .373 champ fifth: under ${under} level ${level} above ${above}`)
console.log('under ex:', JSON.stringify(underList), 'level ex:', JSON.stringify(levelList), 'above ex:', JSON.stringify(aboveList))
// the fresh tail
const tail = rows[rows.length - 1]
console.log('FRESH TAIL F' + tail.f, 'sixth', tail.sixth, 'fifth', tail.fifth, 'gaps', JSON.stringify(tail.gaps), 'champs', tail.champs, 'kind', tail.kind)
// the REAL arc the test embeds (the FIELDPROOF the same list re-voices)
console.log('REAL_ARC = [' + rows.map(r => r.sixth).join(',') + ']')
// windows for the trend test (sixth arc triads)
const byF = Object.fromEntries(rows.map(r => ['F' + r.f, r]))
const win = (a, b, c) => [byF['F' + a], byF['F' + b], byF['F' + c]].map(r => r.sixth)
console.log('windows: F513-F515', win(513, 514, 515), '| F562-F564', win(562, 563, 564), '| F564-F566', win(564, 565, 566), '| F566-F568', win(566, 567, 568), '| F567-F569', win(567, 568, 569))
