// (v0.976.319) FIELDPROOF - the login north word's own mirror law:
// the census hand and the raw sed/sort hand the face must agree (the
// census==raw zero-mismatch law the family trusts). Reads the ten
// REAL faces' console.log files, takes the Z north both ways, and
// speaks the W1..W8 windows byte-exact the word was born to voice
// (eight speaks zero helds the record birth holds).
import { loginNorthCensus, loginNorthTrendRow } from '../src/lib/loginnorthtrend.mjs'
import { readFileSync } from 'node:fs'

const faces = [
  ['F501', process.argv[2]],
  ['F502', process.argv[3]],
  ['F503', process.argv[4]],
  ['F504', process.argv[5]],
  ['F505', process.argv[6]],
  ['F506', process.argv[7]],
  ['F507', process.argv[8]],
  ['F508', process.argv[9]],
  ['F509', process.argv[10]],
  ['F510', process.argv[11]]
]

const LOGIN_RE = /^\[\d{2}:\d{2}:\d{2}\] \[Server thread\/INFO\]: \S+\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, (-?\d+\.\d+)\)$/
const censusOf = (p) => loginNorthCensus(readFileSync(p, 'utf8').split('\n'))
const rawOf = (p) => {
  let min = null
  for (const l of readFileSync(p, 'utf8').split('\n')) {
    const m = LOGIN_RE.exec(l)
    if (!m) continue
    const z = Number(m[3])
    if (min === null || z < min) min = z
  }
  return min === null ? 0 : min
}

let mismatches = 0
const counts = []
for (const [name, p] of faces) {
  if (!p) continue
  const c = censusOf(p)
  const r = rawOf(p)
  const ok = c && c.minLoginZ === r
  if (!ok) mismatches++
  counts.push([name, c ? c.minLoginZ : null, r])
  console.log(`${name}: census=${c ? c.minLoginZ : 'null'} raw=${r} ${ok ? 'MATCH' : 'MISMATCH'}`)
}
// the REAL windows the ten-face arc holds (W1..W8 - byte-exact the
// word speaks, eight speaks zero helds the birth holds)
if (counts.length >= 10) {
  const v = counts.map(([, n]) => n)
  for (let i = 0; i < 8; i++) {
    const row = loginNorthTrendRow({ back: { minLoginZ: v[i] }, prev: { minLoginZ: v[i + 1] }, cur: { minLoginZ: v[i + 2] } })
    console.log(`W${i + 1}: ${row ? row.slice(0, 150) : 'held/silent'}`)
  }
}
console.log(`FIELDPROOF ${10 - mismatches}/10 census==raw zero mismatches`)
process.exit(mismatches === 0 ? 0 : 1)
