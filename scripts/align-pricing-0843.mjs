// (v0.976.369 fire-0843) the archive alignment - the harvested faces
// the .367 champ-second REAL_ARC (59) AND the .368 storm-third
// REAL_ARC (60) BOTH re-voice the double anchor the fire-0743 method
// re-rides; the F563 face the fresh column prices.
// Usage: node scripts/align-pricing-0843.mjs <facesdir> <map.json>
import { readdirSync, readFileSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces331'
const map = JSON.parse(readFileSync(process.argv[3] || '/tmp/dispatch-census.json')).map
const CHAMP_SECOND_ARC = [2,139,93,166,132,7,63,64,0,0,100,7,0,11,78,10,122,0,0,85,27,8,14,10,13,15,8,0,0,59,0,47,158,8,7,49,56,109,7,7,10,8,233,63,0,6,37,5,0,5,0,22,8,106,5,42,0,10,57]
const STORM_THIRD_ARC = [0,25,10,67,107,7,20,5,0,14,15,9,3,6,8,4,18,7,5,29,5,56,21,16,117,5,4,19,0,67,133,6,0,8,61,1,21,105,20,18,3,13,21,192,0,24,0,6,12,10,15,68,7,20,4,10,0,10,113,25]
// the champion second breath census (the .367 module the inline ride)
const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
function champSecond (lines) {
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
  const cevts = evts.filter(e => e.n > 1 && champs.has(e.name))
  const gaps = []
  for (let i = 1; i < cevts.length; i++) {
    const cur = cevts[i - 1].s; const nxt = cevts[i].s
    gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur)
  }
  return gaps.length > 1 ? gaps[1] : 0
}
function stormThird (lines) {
  const tally = new Map()
  const revts = [] // the re-join events (beyond each name's first) the FILE ORDER keeps
  for (const l of lines) {
    const m = RE.exec(l)
    if (!m) continue
    const n = (tally.get(m[4]) || 0) + 1
    tally.set(m[4], n)
    if (n > 1) revts.push(Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]))
  }
  const gaps = []
  for (let i = 1; i < revts.length; i++) {
    const cur = revts[i - 1]; const nxt = revts[i]
    gaps.push(nxt >= cur ? nxt - cur : nxt + 86400 - cur)
  }
  return gaps.length > 2 ? gaps[2] : 0
}
// the compact arc slot - the holes F552 (the zombie) and F557 (the
// artifact hole) the F-order keeps, the arc the valued faces only
function arcSlot (f) {
  if (f <= 551) return f - 501
  if (f === 552 || f === 557) return -1
  if (f <= 556) return f - 502
  return f - 503
}
const files = readdirSync(dir).filter(f => f.startsWith('face') && f.endsWith('.log'))
console.log('faces on disk:', files.length)
let csHit = 0; let csFace = 0; let stHit = 0; let stFace = 0
const fresh = []
for (let f = 501; f <= 563; f++) {
  const m = map['F' + f]
  if (!m) continue
  const p = `${dir}/face${m.id}.log`
  let lines = null
  try { lines = readFileSync(p, 'utf8').split('\n') } catch { /* the hole the F-order keeps */ }
  const slot = arcSlot(f)
  if (f <= 561 && slot >= 0) {
    if (lines) { csFace++; if (champSecond(lines) === CHAMP_SECOND_ARC[slot]) csHit++ }
  }
  if (f <= 562 && slot >= 0) {
    if (lines) { stFace++; if (stormThird(lines) === STORM_THIRD_ARC[slot]) stHit++ }
  }
  if (f === 563 && lines) {
    fresh.push('F563 champSecond=' + champSecond(lines), 'F563 stormThird=' + stormThird(lines))
  }
}
console.log(`CHAMP SECOND arc: ${csHit}/${csFace} byte-exact (the 59-face window F501-F561)`)
console.log(`STORM THIRD arc:  ${stHit}/${stFace} byte-exact (the 60-face window F501-F562)`)
console.log('fresh:', fresh.join(' ; '))
