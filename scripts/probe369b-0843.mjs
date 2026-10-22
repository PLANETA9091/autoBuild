// (v0.976.369 fire-0843) the probe part 2 - the dialog law vs the
// .367 champ second breath arc, the bound law the REAL modules the
// audit re-rides (.351 champ stretch / .353 champ gap / .359 champ
// min breath), the trend windows the arc keeps.
// Usage: node scripts/probe369b-0843.mjs <facesdir> <map.json>
import { readFileSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces331'
const map = JSON.parse(readFileSync(process.argv[3] || '/tmp/dispatch-census.json')).map
const { rejoinChampStretchConsistent, } = await import('/home/z/privateB/src/lib/rejoinchampstretch.mjs').catch(() => ({ rejoinChampStretchConsistent: null }))
const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const CHAMP_SECOND_ARC = [2,139,93,166,132,7,63,64,0,0,100,7,0,11,78,10,122,0,0,85,27,8,14,10,13,15,8,0,0,59,0,47,158,8,7,49,56,109,7,7,10,8,233,63,0,6,37,5,0,5,0,22,8,106,5,42,0,10,57]
function champCensus (lines) {
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
  // the .351 stretch: the champion set's own dawn-to-dusk (the first
  // champ event to the last, the day-cyclic wrap the .350 word keeps)
  let stretch = 0
  if (ce.length >= 2) {
    const first = ce[0].s; const last = ce[ce.length - 1].s
    stretch = last >= first ? last - first : last + 86400 - first
  }
  return { gaps, stretch }
}
const arc = []; const rows = []
for (let f = 501; f <= 563; f++) {
  if (f === 552 || f === 557) continue
  const m = map['F' + f]
  const lines = readFileSync(`${dir}/face${m.id}.log`, 'utf8').split('\n')
  const { gaps, stretch } = champCensus(lines)
  const third = gaps.length > 2 ? gaps[2] : 0
  arc.push(third)
  rows.push({ f, third, gapN: gaps.length, min: gaps.length ? Math.min(...gaps) : null, max: gaps.length ? Math.max(...gaps) : null, stretch })
}
// the DIALOG law vs the .367 champ second arc (the 59 shared slots)
let under = 0; let level = 0; let above = 0
const underEx = []; const levelEx = []; const aboveEx = []
for (let i = 0; i < CHAMP_SECOND_ARC.length; i++) {
  const t = arc[i]; const s = CHAMP_SECOND_ARC[i]
  if (t < s) { under++; if (underEx.length < 3) underEx.push(`slot${i} t${t}<s${s}`) }
  else if (t === s) { level++; if (levelEx.length < 3) levelEx.push(`slot${i} t${t}=s${s}`) }
  else { above++; if (aboveEx.length < 3) aboveEx.push(`slot${i} t${t}>s${s}`) }
}
console.log(`DIALOG vs .367 champ second: UNDER ${under} LEVEL ${level} ABOVE ${above}`)
console.log('  under ex:', underEx.join(','), '| level ex:', levelEx.join(','), '| above ex:', aboveEx.join(','))
// the BOUND law audit: min <= third <= max (the .353 champ gap) and
// third <= stretch (the .351 champ stretch) on the voiced faces
let boundOK = 0; let boundBad = []
for (const r of rows) {
  if (r.gapN < 3) continue
  if (r.min <= r.third && r.third <= r.max && r.third <= r.stretch) boundOK++
  else boundBad.push(`F${r.f} min${r.min} third${r.third} max${r.max} stretch${r.stretch}`)
}
console.log('BOUND audit:', boundOK, 'voiced faces GREEN ; bad:', JSON.stringify(boundBad))
// the trend windows (two-step shapes, no held step)
const swells = []; const fades = []; const swings = []
for (let i = 2; i < arc.length; i++) {
  const b = arc[i - 2]; const p = arc[i - 1]; const c = arc[i]
  const d1 = p - b; const d2 = c - p
  if (d1 === 0 || d2 === 0) continue
  const w = `F${rows[i - 2].f}->F${rows[i].f} ${b}->${p}(${d1 >= 0 ? '+' : ''}${d1})->${c}(${d2 >= 0 ? '+' : ''}${d2})`
  if (d1 > 0 && d2 > 0) swells.push(w)
  else if (d1 < 0 && d2 < 0) fades.push(w)
  else swings.push(w)
}
console.log('SWELLS:', swells.slice(0, 6).join(' ; '))
console.log('FADES:', fades.slice(0, 6).join(' ; '))
console.log('SWINGS:', swings.slice(0, 8).join(' ; '))
