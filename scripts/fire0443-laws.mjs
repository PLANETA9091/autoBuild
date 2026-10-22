// (fire-0443) the dialog-level real/cons split + the fresh-tail cadence reads
import { readFileSync } from 'fs'
const map = JSON.parse(readFileSync('/home/z/my-project/dispatch-census-0443.json')).map
const RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) joined the game$/
const arc = [13,0,0,0,7,6,0,0,0,0,27,8,0,2,0,8,9,0,0,0,6,2,0,5,3,10,0,0,0,0,0,0,12,0,0,52,0,2,3,9,21,9,38,0,0,8,0,0,0,3,0,0,8,0,1,43,0,2,0,0,2,48,22,0,0,0,8,0,0,4,0,0,5,0,16,0,7]
const tenthArc = [9,0,0,0,16,7,0,1,0,0,27,11,0,4,0,2,33,0,0,0,46,2,0,6,22,35,0,0,0,0,0,0,23,0,0,7,2,0,10,3,39,12,19,0,0,2,0,1,0,3,0,0,12,0,5,7,0,5,1,0,8,28,29,5,0,0,6,0,0,8,0,0,9,0,1]
function stormGaps (lines) {
  const tally = new Map()
  const revts = []
  for (const l of lines) {
    if (typeof l !== 'string') continue
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
  return gaps
}
const lr = []
let lc = 0
let fi = 0
for (let f = 501; f <= 579; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') continue
  const i = fi++
  if (arc[i] === tenthArc[i]) {
    const gaps = stormGaps(readFileSync('/home/z/faces0443/face' + m.id + '.log', 'utf8').split('\n'))
    if (gaps.length > 10) lr.push(`F${f}:${arc[i]}`)
    else lc++
  }
}
console.log('REAL level faces:', JSON.stringify(lr))
console.log('cons level count:', lc)
// the fresh tails' cadences byte-exact
for (const f of [577, 578, 579]) {
  const m = map['F' + f]
  if (!m || m.conclusion !== 'success') continue
  const gaps = stormGaps(readFileSync('/home/z/faces0443/face' + m.id + '.log', 'utf8').split('\n'))
  console.log(`F${f} gaps[${gaps.length}]:`, JSON.stringify(gaps), 'eleventh:', gaps.length > 10 ? gaps[10] : 0, 'tenth:', gaps.length > 9 ? gaps[9] : 0)
}
