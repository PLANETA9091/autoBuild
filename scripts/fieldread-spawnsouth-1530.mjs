// fire-1530 FIELDPROOF - the spawn south word's own field read
// (1) census==raw mirror law: the module census on every REAL face's
//     console.log equals the raw re-read this harvest holds
// (2) PAIR-AGREE: the within-face pair's Z byte-identical every face
// (3) W1..W11 re-voiced byte-exact through the module's own row
// (4) the X/Y neighbours printed beside (the next words' evidence)
import { spawnSouthCensus, spawnSouthTrendRow } from '/home/z/privateB-repo/src/lib/spawnsouthtrend.mjs'
import { readFileSync } from 'node:fs'

const faces = {
  f501: '12220643212', f502: '12224039257', f503: '12227820868',
  f504: '12229107341', f505: '12230392489', f506: '12233069047',
  f507: '12235452098', f508: '12236034781', f509: '12238650283',
  f510: '12239821660', f511: '12241062816', f512: '12242174613',
  f513: '12244832379'
}
const RAW = { f501: 398, f502: 394, f503: 400, f504: 390, f505: 396, f506: 404, f507: 397, f508: 396, f509: 405, f510: 392, f511: 395, f512: 402, f513: 407 }
const names = Object.keys(faces)

const SPAWN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Set the world spawn point to (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)) \[(-?\d+\.\d+), (-?\d+\.\d+)\] in (minecraft:[a-z_]+)$/

const read = (n) => readFileSync(`/home/z/my-project/bootfaces/${faces[n]}/console.log`, 'utf8').split('\n')
const census = names.map(n => spawnSouthCensus(read(n)))
let mismatches = 0
for (let i = 0; i < names.length; i++) {
  const got = census[i].spawnZMax
  const ok = got === RAW[names[i]]
  if (!ok) mismatches++
  console.log(`${names[i]}: census=${got} raw=${RAW[names[i]]} ${ok ? 'MIRROR-OK' : 'MISMATCH!'}`)
}
console.log(`FIELDPROOF ${names.length - mismatches}/${names.length} census==raw`)

let agrees = 0
const xArc = []
const yArc = []
for (const n of names) {
  const hits = read(n).map(l => SPAWN_RE.exec(l)).filter(Boolean)
  const zs = new Set(hits.map(m => m[6]))
  if (zs.size === 1) agrees++
  else console.log(`${n}: PAIR DISAGREE ${[...zs].join('/')}`)
  xArc.push(hits[hits.length - 1][4])
  yArc.push(hits[hits.length - 1][5])
}
console.log(`PAIR-AGREE ${agrees}/${names.length} within-face Z byte-identical`)
console.log(`X-NEIGHBOURS: ${xArc.join('/')}  Y-NEIGHBOURS: ${yArc.join('/')} (the priced and next-word evidence)`)

// W1..W11 re-voiced byte-exact through the module's own row
const EXPECT = [
  /bed swing - 398 -> 394 \(-4\) -> 400 \(\+6\)/,
  /bed swing - 394 -> 400 \(\+6\) -> 390 \(-10\)/,
  /bed swing - 400 -> 390 \(-10\) -> 396 \(\+6\)/,
  /bed swell ran two steps deep - 390 -> 396 \(\+6\) -> 404 \(\+8\)/,
  /bed swing - 396 -> 404 \(\+8\) -> 397 \(-7\)/,
  /bed fade ran two steps deep - 404 -> 397 \(-7\) -> 396 \(-1\)/,
  /bed swing - 397 -> 396 \(-1\) -> 405 \(\+9\)/,
  /bed swing - 396 -> 405 \(\+9\) -> 392 \(-13\)/,
  /bed swing - 405 -> 392 \(-13\) -> 395 \(\+3\)/,
  /bed swell ran two steps deep - 392 -> 395 \(\+3\) -> 402 \(\+7\)/,
  /bed swell ran two steps deep - 395 -> 402 \(\+7\) -> 407 \(\+5\)/
]
let revoiced = 0
for (let i = 0; i + 2 < names.length; i++) {
  const row = spawnSouthTrendRow({ back: census[i], prev: census[i + 1], cur: census[i + 2] })
  const ok = row !== null && EXPECT[i].test(row)
  if (ok) revoiced++
  else console.log(`W${i + 1}: RE-VOICE FAIL row=${row}`)
}
console.log(`RE-VOICE ${revoiced}/${names.length - 2} windows W1..W11`)
process.exit(mismatches === 0 && agrees === names.length && revoiced === names.length - 2 ? 0 : 1)
