// (v0.976.317) FIELDPROOF - the login floor word's own mirror law:
// the census hand and the raw sed/sort hand the face must agree (the
// census==raw zero-mismatch law the family trusts). Reads the eight
// REAL faces' console.log files, takes the Y floor both ways, and
// speaks the W1..W6 windows byte-exact the word was born to voice.
import { loginFloorCensus, loginFloorTrendRow } from '../src/lib/loginfloortrend.mjs'
import { readFileSync } from 'node:fs'

const faces = [
  ['F501', process.argv[2]],
  ['F502', process.argv[3]],
  ['F503', process.argv[4]],
  ['F504', process.argv[5]],
  ['F505', process.argv[6]],
  ['F506', process.argv[7]],
  ['F507', process.argv[8]],
  ['F508', process.argv[9]]
]

const LOGIN_RE = /^\[\d{2}:\d{2}:\d{2}\] \[Server thread\/INFO\]: \S+\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, (-?\d+\.\d+), -?\d+\.\d+\)$/
const censusOf = (p) => loginFloorCensus(readFileSync(p, 'utf8').split('\n'))
const rawOf = (p) => {
  let min = null
  for (const l of readFileSync(p, 'utf8').split('\n')) {
    const m = LOGIN_RE.exec(l)
    if (!m) continue
    const y = Number(m[3])
    if (min === null || y < min) min = y
  }
  return min === null ? 0 : min
}

let mismatches = 0
const counts = []
for (const [name, p] of faces) {
  if (!p) continue
  const c = censusOf(p)
  const r = rawOf(p)
  const ok = c && c.minLoginY === r
  if (!ok) mismatches++
  counts.push([name, c ? c.minLoginY : null, r])
  console.log(`${name}: census=${c ? c.minLoginY : 'null'} raw=${r} ${ok ? 'MATCH' : 'MISMATCH'}`)
}
// the REAL windows the eight-face arc holds (W1..W6 - byte-exact the
// word speaks, six deep the birth holds)
if (counts.length >= 8) {
  const v = counts.map(([, n]) => n)
  for (let i = 0; i < 6; i++) {
    const row = loginFloorTrendRow({ back: { minLoginY: v[i] }, prev: { minLoginY: v[i + 1] }, cur: { minLoginY: v[i + 2] } })
    console.log(`W${i + 1}: ${row ? row.slice(0, 150) : 'held/silent'}`)
  }
}
console.log(`FIELDPROOF ${8 - mismatches}/8 census==raw zero mismatches`)
process.exit(mismatches === 0 ? 0 : 1)
