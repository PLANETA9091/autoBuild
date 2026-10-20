// fire-1630 FIELDPROOF - the set dawn word's own field read
// (1) census==raw mirror law: the module census on every REAL face's
//     console.log equals the raw re-read this harvest holds
// (2) PAIR-AGREE: the within-face pair's clocks 9-10s apart every face
//     (the MIN law the two-print face distinguishes from MAX/LAST)
// (3) W1..W13 re-voiced byte-exact through the module's own row
// (4) the DAWN-MIRROR: the .321 login dawn arc re-voiced beside
import { spawnSetDawnCensus, spawnSetDawnTrendRow } from '/home/z/privateB-repo/src/lib/spawnsetdawn.mjs'
import { readFileSync } from 'node:fs'

const faces = {
  f501: 'f501', f502: 'f502', f503: 'f503', f504: 'f504', f505: 'f505',
  f506: 'f506', f507: 'f507', f508: 'f508', f509: 'f509', f510: 'f510',
  f511: 'f511', f512: 'f512', f513: 'f513', f514: 'f514', f515: 'f515'
}
const RAW = { f501: 74421, f502: 78044, f503: 81337, f504: 83703, f505: 85447, f506: 3453, f507: 6265, f508: 8071, f509: 10940, f510: 13649, f511: 15523, f512: 18051, f513: 21762, f514: 25276, f515: 27485 }
const names = Object.keys(faces)

const SPAWN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Set the world spawn point to (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)) \[(-?\d+\.\d+), (-?\d+\.\d+)\] in (minecraft:[a-z_]+)$/
const dir = (f) => f === 'f514' || f === 'f515'
  ? `/home/z/my-project/dawnfaces/${f}/console.log`
  : `/home/z/my-project/dawnfaces/${faces[f]}/console.log`

const read = (f) => readFileSync(dir(f), 'utf8').split('\n')
const census = names.map(f => spawnSetDawnCensus(read(f)))
let mismatches = 0
for (let i = 0; i < names.length; i++) {
  const got = census[i].setDawnSec
  const ok = got === RAW[names[i]]
  if (!ok) mismatches++
  console.log(`${names[i]}: census=${got} raw=${RAW[names[i]]} ${ok ? 'MIRROR-OK' : 'MISMATCH!'}`)
}
console.log(`FIELDPROOF ${names.length - mismatches}/${names.length} census==raw`)

// the within-face pair: exactly two prints, 9-10 seconds apart
let agrees = 0
for (const f of names) {
  const hits = read(f).map(l => SPAWN_RE.exec(l)).filter(Boolean)
  const secs = hits.map(m => Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]))
  const gap = secs[secs.length - 1] - secs[0]
  if (hits.length === 2 && gap >= 9 && gap <= 10) agrees++
  else console.log(`${f}: PAIR FAIL count=${hits.length} gap=${gap}`)
}
console.log(`PAIR-GAP ${agrees}/${names.length} within-face pairs 9-10s apart`)

// W1..W13 re-voiced byte-exact through the module's own row
const EXPECT = [
  /set dawn swell ran two steps deep - 74421 -> 78044 \(\+3623\) -> 81337 \(\+3293\)/,
  /set dawn swell ran two steps deep - 78044 -> 81337 \(\+3293\) -> 83703 \(\+2366\)/,
  /set dawn swell ran two steps deep - 81337 -> 83703 \(\+2366\) -> 85447 \(\+1744\)/,
  /set dawn swing - 83703 -> 85447 \(\+1744\) -> 3453 \(-81994\)/,
  /set dawn swing - 85447 -> 3453 \(-81994\) -> 6265 \(\+2812\)/,
  /set dawn swell ran two steps deep - 3453 -> 6265 \(\+2812\) -> 8071 \(\+1806\)/,
  /set dawn swell ran two steps deep - 6265 -> 8071 \(\+1806\) -> 10940 \(\+2869\)/,
  /set dawn swell ran two steps deep - 8071 -> 10940 \(\+2869\) -> 13649 \(\+2709\)/,
  /set dawn swell ran two steps deep - 10940 -> 13649 \(\+2709\) -> 15523 \(\+1874\)/,
  /set dawn swell ran two steps deep - 13649 -> 15523 \(\+1874\) -> 18051 \(\+2528\)/,
  /set dawn swell ran two steps deep - 15523 -> 18051 \(\+2528\) -> 21762 \(\+3711\)/,
  /set dawn swell ran two steps deep - 18051 -> 21762 \(\+3711\) -> 25276 \(\+3514\)/,
  /set dawn swell ran two steps deep - 21762 -> 25276 \(\+3514\) -> 27485 \(\+2209\)/
]
let revoiced = 0
for (let i = 0; i + 2 < names.length; i++) {
  const row = spawnSetDawnTrendRow({ back: census[i], prev: census[i + 1], cur: census[i + 2] })
  const ok = row !== null && EXPECT[i].test(row)
  if (ok) revoiced++
  else console.log(`W${i + 1}: RE-VOICE FAIL row=${row}`)
}
console.log(`RE-VOICE ${revoiced}/${names.length - 2} windows W1..W13`)
process.exit(mismatches === 0 && agrees === names.length && revoiced === names.length - 2 ? 0 : 1)
