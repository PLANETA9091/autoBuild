// fire-1443 FIELDPROOF - the spawn anchor word's own field read
// (1) census==raw mirror law: the module census on every REAL face's
//     console.log equals the raw re-read this harvest holds
// (2) PAIR-AGREE: the within-face pair's X byte-identical every face
// (3) DONE-FOLLOWS: the last spawn clock rides after the boot's own
//     Done line every face (the anchor the boot conversation seeds)
// (4) W1..W10 re-voiced byte-exact through the module's own row
// (5) the Y/Z neighbours printed beside (the next words' evidence)
import { spawnAnchorCensus, spawnAnchorTrendRow } from '/home/z/privateB/src/lib/spawnanchortrend.mjs'
import { readFileSync } from 'node:fs'

const faces = ['f502','f503','f504','f505','f506','f507','f508','f509','f510','f511','f512','f513']
const RAW = [-127, -133, -118, -124, -130, -136, -123, -122, -119, -133, -135, -132]

const census = faces.map(f => spawnAnchorCensus(readFileSync(`/home/z/faces323/faces/${f}/console.log`, 'utf8').split('\n')))
let mismatches = 0
for (let i = 0; i < faces.length; i++) {
  const got = census[i].spawnX
  const ok = got === RAW[i]
  if (!ok) mismatches++
  console.log(`${faces[i]}: census=${got} raw=${RAW[i]} ${ok ? 'MIRROR-OK' : 'MISMATCH!'}`)
}
console.log(`FIELDPROOF ${faces.length - mismatches}/${faces.length} census==raw`)

// the within-face pair's X byte-identical - the census hand the pair
// agreement trusts
const SPAWN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Set the world spawn point to (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)) \[(-?\d+\.\d+), (-?\d+\.\d+)\] in (minecraft:[a-z_]+)$/
let agrees = 0
const yArc = []
const zArc = []
for (let i = 0; i < faces.length; i++) {
  const lines = readFileSync(`/home/z/faces323/faces/${faces[i]}/console.log`, 'utf8').split('\n')
  const hits = lines.map(l => SPAWN_RE.exec(l)).filter(Boolean)
  const xs = new Set(hits.map(m => m[4]))
  if (xs.size === 1) agrees++
  else console.log(`${faces[i]}: PAIR DISAGREE ${[...xs].join('/')}`)
  yArc.push(hits[hits.length - 1][5])
  zArc.push(hits[hits.length - 1][6])
}
console.log(`PAIR-AGREE ${agrees}/${faces.length} within-face X byte-identical`)
console.log(`Y-NEIGHBOURS: ${yArc.join('/')}  Z-NEIGHBOURS: ${zArc.join('/')} (the next words' named-never-priced evidence)`)

// the last spawn clock rides after the boot's own Done line every face
const DONE_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: Done \([\d.]+s\)! For help, type "help"$/
const hm = (s) => s.split(':').map(Number)
let follows = 0
for (let i = 0; i < faces.length; i++) {
  const lines = readFileSync(`/home/z/faces323/faces/${faces[i]}/console.log`, 'utf8').split('\n')
  const spawns = lines.map(l => SPAWN_RE.exec(l)).filter(Boolean)
  const dones = lines.map(l => DONE_RE.exec(l)).filter(Boolean)
  const lastSpawn = spawns[spawns.length - 1]
  const lastDone = dones[dones.length - 1]
  const sT = hm(lastSpawn[0].slice(1, 9)).reduce((a, v) => a * 60 + v, 0)
  const dT = lastDone ? hm(lastDone[1]).reduce((a, v) => a * 60 + v, 0) : -1
  if (sT > dT) follows++
  else console.log(`${faces[i]}: FOLLOWS FAIL spawn=${lastSpawn[0].slice(1, 9)} done=${lastDone ? lastDone[1] : 'none'}`)
}
console.log(`DONE-FOLLOWS ${follows}/${faces.length} last-spawn-clock after last-Done-clock`)

// W1..W10 re-voiced byte-exact through the module's own row
const WINDOWS = [
  'anchor swing - -127 -> -133 (-6) -> -118 (+15)',
  'anchor swing - -133 -> -118 (+15) -> -124 (-6)',
  'anchor fade ran two steps deep - -118 -> -124 (-6) -> -130 (-6)',
  'anchor fade ran two steps deep - -124 -> -130 (-6) -> -136 (-6)',
  'anchor swing - -130 -> -136 (-6) -> -123 (+13)',
  'anchor swell ran two steps deep - -136 -> -123 (+13) -> -122 (+1)',
  'anchor swell ran two steps deep - -123 -> -122 (+1) -> -119 (+3)',
  'anchor swing - -122 -> -119 (+3) -> -133 (-14)',
  'anchor fade ran two steps deep - -119 -> -133 (-14) -> -135 (-2)',
  'anchor swing - -133 -> -135 (-2) -> -132 (+3)'
]
let voices = 0
for (let w = 0; w < WINDOWS.length; w++) {
  const row = spawnAnchorTrendRow({ back: census[w], prev: census[w + 1], cur: census[w + 2] })
  const ok = row !== null && row.includes(WINDOWS[w])
  if (ok) voices++
  console.log(`W${w + 1}: ${ok ? 'VOICE-OK' : 'SILENT-OR-MISMATCH!'}`)
}
console.log(`RE-VOICE ${voices}/${WINDOWS.length} speaks byte-exact (ten real windows ten speaks zero held - born speaking ten deep)`)
