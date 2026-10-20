// fire-1543 FIELDPROOF - the spawn bed word's own field read
// (1) census==raw mirror law: the module census on every REAL face's
//     console.log equals the raw re-read this harvest holds
// (2) PAIR-AGREE: the within-face pair's Y byte-identical every face
//     (the X and Z neighbours printed beside - the sibling words' seats)
// (3) ANCHOR-MIRROR: the X the .325 word's REAL arc byte-exact beside
// (4) SOUTH-MIRROR: the Z the .326 word's REAL arc byte-exact beside
// (5) DONE-FOLLOWS: the last spawn clock rides after the boot's own
//     Done line every face (the bed the boot conversation seeds)
// (6) W1..W13 re-voiced through the module's own row (six speaks
//     byte-exact, seven held the lawful silence)
import { spawnBedCensus, spawnBedTrendRow } from '/home/z/privateB/src/lib/spawnbedtrend.mjs'
import { readFileSync } from 'node:fs'

const faces = ['f501', 'f502', 'f503', 'f504', 'f505', 'f506', 'f507', 'f508', 'f509', 'f510', 'f511', 'f512', 'f513', 'f514', 'f515']
const RAWY = [71, 72, 72, 72, 67, 71, 71, 69, 69, 74, 70, 72, 68, 81, 70]
// the .325 anchor word's own REAL X arc (the sibling hand the mirror re-voices)
const RAWX = [-130, -127, -133, -118, -124, -130, -136, -123, -122, -119, -133, -135, -132, -120, -123]
// the .326 south word's own REAL Z arc (the sibling hand the mirror re-voices)
const RAWZ = [398, 394, 400, 390, 396, 404, 397, 396, 405, 392, 395, 402, 407, 401, 390]

const SPAWN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Set the world spawn point to (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)) \[(-?\d+\.\d+), (-?\d+\.\d+)\] in (minecraft:[a-z_]+)$/
const DONE_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Done \(\d+\.\d+s\)! For help, type "help"$/
const secs = (h, m, s) => Number(h) * 3600 + Number(m) * 60 + Number(s)

const census = faces.map(f => spawnBedCensus(readFileSync(`/home/z/privateB/faces326/${f}/console.log`, 'utf8').split('\n')))
let mismatches = 0
for (let i = 0; i < faces.length; i++) {
  const got = census[i].spawnY
  const ok = got === RAWY[i]
  if (!ok) mismatches++
  console.log(`${faces[i]}: census=${got} raw=${RAWY[i]} ${ok ? 'MIRROR-OK' : 'MISMATCH!'}`)
}
console.log(`FIELDPROOF ${faces.length - mismatches}/${faces.length} census==raw`)

// the within-face pair's Y byte-identical - the census hand the pair
// agreement trusts (the X and Z neighbours the sibling words price)
let agrees = 0
const xArc = []
const zArc = []
for (let i = 0; i < faces.length; i++) {
  const lines = readFileSync(`/home/z/privateB/faces326/${faces[i]}/console.log`, 'utf8').split('\n')
  const hits = lines.map(l => SPAWN_RE.exec(l)).filter(Boolean)
  const ys = new Set(hits.map(m => m[5]))
  if (ys.size === 1) agrees++
  else console.log(`${faces[i]}: PAIR DISAGREE ${[...ys].join('/')}`)
  const last = hits[hits.length - 1]
  xArc.push(Number(last[4]))
  zArc.push(Number(last[6]))
}
console.log(`PAIR-AGREE ${agrees}/${faces.length} within-face Y byte-identical`)

// the sibling hands the mirror re-voices - the .325 X arc and the .326
// Z arc byte-exact every face
let xok = 0
let zok = 0
for (let i = 0; i < faces.length; i++) {
  if (xArc[i] === RAWX[i]) xok++
  else console.log(`${faces[i]}: X MIRROR MISMATCH census-side=${xArc[i]} published=${RAWX[i]}`)
  if (zArc[i] === RAWZ[i]) zok++
  else console.log(`${faces[i]}: Z MIRROR MISMATCH census-side=${zArc[i]} published=${RAWZ[i]}`)
}
console.log(`ANCHOR-MIRROR ${xok}/${faces.length} the .325 X arc byte-exact`)
console.log(`SOUTH-MIRROR ${zok}/${faces.length} the .326 Z arc byte-exact`)

// the last spawn clock rides after the boot's own Done line every face
let follows = 0
for (let i = 0; i < faces.length; i++) {
  const lines = readFileSync(`/home/z/privateB/faces326/${faces[i]}/console.log`, 'utf8').split('\n')
  let doneAt = -1
  let spawnAt = -1
  for (const l of lines) {
    const d = DONE_RE.exec(l)
    if (d) doneAt = secs(d[1], d[2], d[3])
    const s = SPAWN_RE.exec(l)
    if (s) spawnAt = secs(s[1], s[2], s[3])
  }
  if (doneAt >= 0 && spawnAt >= doneAt) follows++
  else console.log(`${faces[i]}: DONE-FOLLOWS FAIL done=${doneAt} lastSpawn=${spawnAt}`)
}
console.log(`DONE-FOLLOWS ${follows}/${faces.length} the last spawn clock after the boot's own Done`)

// the speaking windows W4/W9/W10/W11/W12/W13 re-voiced byte-exact and
// the held windows W1/W2/W3/W5/W6/W7/W8 the lawful silence keeps
const SPEAK = [
  ['W4', 3, 4, 5, "the world spawn's own bed swing - 72 -> 67 (-5) -> 71 (+4)"],
  ['W9', 8, 9, 10, "the world spawn's own bed swing - 69 -> 74 (+5) -> 70 (-4)"],
  ['W10', 9, 10, 11, "the world spawn's own bed swing - 74 -> 70 (-4) -> 72 (+2)"],
  ['W11', 10, 11, 12, "the world spawn's own bed swing - 70 -> 72 (+2) -> 68 (-4)"],
  ['W12', 11, 12, 13, "the world spawn's own bed swing - 72 -> 68 (-4) -> 81 (+13)"],
  ['W13', 12, 13, 14, "the world spawn's own bed swing - 68 -> 81 (+13) -> 70 (-11)"]
]
let spoke = 0
for (const [name, bi, pi, ci, want] of SPEAK) {
  const row = spawnBedTrendRow({ back: census[bi], prev: census[pi], cur: census[ci] })
  const ok = row !== null && row.includes(want)
  if (ok) spoke++
  else console.log(`${name}: RE-VOICE FAIL want="${want}" got="${row === null ? 'null' : 'differs'}"`)
}
const HELD = [
  ['W1', 0, 1, 2], ['W2', 1, 2, 3], ['W3', 2, 3, 4],
  ['W5', 4, 5, 6], ['W6', 5, 6, 7], ['W7', 6, 7, 8], ['W8', 7, 8, 9]
]
let heldOk = 0
for (const [name, bi, pi, ci] of HELD) {
  const row = spawnBedTrendRow({ back: census[bi], prev: census[pi], cur: census[ci] })
  if (row === null) heldOk++
  else console.log(`${name}: HELD-SILENCE FAIL row spoke: "${row.slice(0, 80)}..."`)
}
console.log(`RE-VOICE ${spoke}/${SPEAK.length} speaks byte-exact`)
console.log(`HELD-SILENCE ${heldOk}/${HELD.length} held windows the lawful null keeps`)
