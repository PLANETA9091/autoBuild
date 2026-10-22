// (v0.976.369 fire-0843) the fixture dump - the F563 fresh tail the
// join echoes the face voices, PLUS the pin pre-check the champ third
// census the twelve fixture columns re-voices (the pre-push honest
// gate the pincheck discipline keeps).
// Usage: node scripts/dump-fixtures-0843.mjs <facesdir> <map.json>
import { readFileSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces331'
const map = JSON.parse(readFileSync(process.argv[3] || '/tmp/dispatch-census.json')).map
const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
function champThird (lines) {
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
  return { third: gaps.length > 2 ? gaps[2] : 0, gapN: gaps.length, gaps }
}
const faces = { F563: 39697292378 }
for (const [f, id] of Object.entries(faces)) {
  const lines = readFileSync(`${dir}/face${id}.log`, 'utf8').split('\n')
  const joins = lines.filter(l => RE.test(l))
  console.log(`// REAL_${f} (face${id}.log) - ${joins.length} join echoes`)
  console.log(`const REAL_${f} = [`)
  for (const j of joins) console.log(`  "${j}",`)
  console.log(']')
  const r = champThird(joins)
  console.log(`// ${f} champ third = ${r.third} (gapN ${r.gapN}, gaps ${JSON.stringify(r.gaps)})`)
}
// the pin pre-check: the twelve fixture columns the .368 test keeps +
// the F563 fresh - the champ third the census re-voices (the pins the
// test will voice)
const PIN_WANT = { F501: 93, F504: 14, F507: 20, F509: 0, F519: 0, F527: 8, F533: 0, F544: 0, F549: 12, F558: 72, F562: 25, F563: 13 }
const PINS = { F501: 39319100730, F504: 39338489283, F507: 39353992759, F509: 39360759429, F519: 39403303154, F527: 39475545027, F533: 39504304407, F544: 39556124099, F549: 39593093613, F558: 39647271577, F562: 39690488199, F563: 39697292378 }
// F558 is the artifact hole face 39647271577? the hole the F-order
// keeps - the F558 face id the map prices:
const m = JSON.parse(readFileSync(process.argv[3])).map
let ok = true
for (const [f, want] of Object.entries(PIN_WANT)) {
  const id = m[f].id
  let joins
  try {
    const lines = readFileSync(`${dir}/face${id}.log`, 'utf8').split('\n')
    joins = lines.filter(l => RE.test(l))
  } catch { console.log(`${f} HOLE (the F-order keeps)`); continue }
  const r = champThird(joins)
  const pass = r.third === want
  if (!pass) ok = false
  console.log(`${f} face${id}: census ${r.third} want ${want} ${pass ? 'OK' : 'MISMATCH'} (gapN ${r.gapN})`)
}
console.log(ok ? 'PIN PRE-CHECK GREEN' : 'PIN PRE-CHECK FAILED')
