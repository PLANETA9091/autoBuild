// (v0.976.369 fire-0843) THE .369 SEAT PROBE - THE CHAMPION'S OWN
// THIRD BREATH: the champion cadence list's own THIRD GAP the
// adjacent pair at index two prices. The probe the REAL modules the
// window re-voices: the .369 candidate arc, the constructive law
// (the fewer-than-three-gaps face the lawful zero), the real zero
// law, the bound law (.359 champ min <= third <= .353 champ gap,
// third <= .351 champ stretch), the dialog law vs the .367 champ
// second breath, the ceiling law, the held pairs, the classes.
// Usage: node scripts/probe369-0843.mjs <facesdir> <map.json>
import { readFileSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces331'
const map = JSON.parse(readFileSync(process.argv[3] || '/tmp/dispatch-census.json')).map
const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
function champGaps (lines) {
  const tally = new Map(); const evts = []
  for (const l of lines) {
    const m = RE.exec(l)
    if (!m) continue
    const n = (tally.get(m[4]) || 0) + 1
    tally.set(m[4], n)
    evts.push({ name: m[4], s: Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]), n })
  }
  let peak = 0
  for (const n of tally.values()) if (n > 1) peak = Math.max(peak, n - 1)
  const champs = new Set()
  for (const [name, n] of tally) if (n > 1 && n - 1 === peak) champs.add(name)
  const ce = evts.filter(e => e.n > 1 && champs.has(e.name))
  const gaps = []
  for (let i = 1; i < ce.length; i++) {
    const cur = ce[i - 1].s; const nxt = ce[i].s
    gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur)
  }
  return { gaps, champs: champs.size, cevts: ce.length }
}
const arc = [] // the compact 60 (F501..F563 the holes the F-order keeps)
const detail = []
for (let f = 501; f <= 563; f++) {
  if (f === 552 || f === 557) { detail.push(`F${f} HOLE`); continue }
  const m = map['F' + f]
  let lines
  try { lines = readFileSync(`${dir}/face${m.id}.log`, 'utf8').split('\n') } catch { detail.push(`F${f} NOFILE`); continue }
  const { gaps, champs, cevts } = champGaps(lines)
  const third = gaps.length > 2 ? gaps[2] : 0
  arc.push(third)
  const min = gaps.length ? Math.min(...gaps) : null
  const max = gaps.length ? Math.max(...gaps) : null
  detail.push({ f, third, gapN: gaps.length, min, max, champN: champs, cevts, gaps: gaps.slice(0, 9) })
}
console.log('ARC (compact, n=' + arc.length + '):', JSON.stringify(arc))
// the laws
const classes = {}
for (const v of arc) classes[v] = (classes[v] || 0) + 1
console.log('CLASSES:', Object.keys(classes).length, JSON.stringify(classes))
let held = 0; const heldPairs = []
for (let i = 1; i < arc.length; i++) if (arc[i] === arc[i - 1]) { held++; heldPairs.push(arc[i]) }
console.log('HELD pairs:', held, JSON.stringify(heldPairs))
let constructive = 0; let realZero = 0
for (const d of detail) {
  if (typeof d !== 'object') continue
  if (d.gapN < 3) constructive++
  else if (d.third === 0) realZero++
}
console.log('CONSTRUCTIVE (gapN<3 -> 0):', constructive, '; REAL ZERO (gapN>=3 third=0):', realZero)
// the fresh tail: F563's own gaps
const f563 = detail.find(d => typeof d === 'object' && d.f === 563)
console.log('F563 fresh:', JSON.stringify(f563))
// the ceiling faces (third IS the tallest champ gap)
const ceiling = detail.filter(d => typeof d === 'object' && d.max === d.third && d.gapN >= 3)
console.log('CEILING faces:', ceiling.length, JSON.stringify(ceiling.map(d => `F${d.f}=${d.third}`)))
