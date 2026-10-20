// (v0.976.318) FIELDPROOF - the login ceiling word's own mirror law:
// the census hand and the raw sed/sort hand the face must agree (the
// census==raw zero-mismatch law the family trusts). Reads the eight
// REAL faces' console.log files, takes the Y ceiling both ways, and
// speaks the W1..W6 windows byte-exact the word was born to voice.
import { loginCeilingCensus, loginCeilingTrendRow } from '../src/lib/loginceilingtrend.mjs'
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
const censusOf = (p) => loginCeilingCensus(readFileSync(p, 'utf8').split('\n'))
const rawOf = (p) => {
  let max = null
  for (const l of readFileSync(p, 'utf8').split('\n')) {
    const m = LOGIN_RE.exec(l)
    if (!m) continue
    const y = Number(m[3])
    if (max === null || y > max) max = y
  }
  return max === null ? 0 : max
}

let mismatches = 0
const counts = []
for (const [name, p] of faces) {
  if (!p) continue
  const c = censusOf(p)
  const r = rawOf(p)
  const ok = c && c.maxLoginY === r
  if (!ok) mismatches++
  counts.push([name, c ? c.maxLoginY : null, r])
  console.log(`${name}: census=${c ? c.maxLoginY : 'null'} raw=${r} ${ok ? 'MATCH' : 'MISMATCH'}`)
}
// the REAL windows the eight-face arc holds (W1..W6 - the three held
// silences and the three speaks the word was born to voice)
if (counts.length >= 8) {
  const v = counts.map(([, n]) => n)
  for (let i = 0; i < 6; i++) {
    const row = loginCeilingTrendRow({ back: { maxLoginY: v[i] }, prev: { maxLoginY: v[i + 1] }, cur: { maxLoginY: v[i + 2] } })
    console.log(`W${i + 1}: ${row ? row.slice(0, 150) : 'held/silent'}`)
  }
}
console.log(`FIELDPROOF ${8 - mismatches}/8 census==raw zero mismatches`)
process.exit(mismatches === 0 ? 0 : 1)
