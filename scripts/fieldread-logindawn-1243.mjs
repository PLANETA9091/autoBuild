// (v0.976.321) FIELDPROOF - the login dawn word's own mirror law: the
// census hand and the raw re-parse hand the face must agree (the
// census==raw zero-mismatch law the family trusts). Reads the eleven
// REAL faces' console.log files, takes the dawn (earliest accepted
// login's clock, seconds since midnight) both ways, and speaks the
// W1..W9 windows byte-exact the word was born to voice.
import { loginDawnCensus, loginDawnTrendRow } from '../src/lib/logindawntrend.mjs'
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
  ['F510', process.argv[11]],
  ['F511', process.argv[12]]
]

const LOGIN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: \S+\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, -?\d+\.\d+\)$/
const censusOf = (p) => loginDawnCensus(readFileSync(p, 'utf8').split('\n'))
const rawOf = (p) => {
  let dawn = null
  for (const l of readFileSync(p, 'utf8').split('\n')) {
    const m = LOGIN_RE.exec(l)
    if (!m) continue
    const sec = Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])
    if (dawn === null || sec < dawn) dawn = sec
  }
  return dawn === null ? 0 : dawn
}

let mismatches = 0
const counts = []
for (const [name, p] of faces) {
  if (!p) continue
  const c = censusOf(p)
  const r = rawOf(p)
  const ok = c && c.dawnSec === r
  if (!ok) mismatches++
  counts.push([name, c ? c.dawnSec : null, r])
  console.log(`${name}: census=${c ? c.dawnSec : 'null'} raw=${r} ${ok ? 'MATCH' : 'MISMATCH'}`)
}
// the REAL windows the eleven-face arc holds (W1..W9 - byte-exact the
// word speaks, nine deep the birth holds)
if (counts.length >= 11) {
  const v = counts.map(([, n]) => n)
  for (let i = 0; i < 9; i++) {
    const row = loginDawnTrendRow({ back: { dawnSec: v[i] }, prev: { dawnSec: v[i + 1] }, cur: { dawnSec: v[i + 2] } })
    console.log(`W${i + 1}: ${row ? row.slice(0, 130) : 'held/silent'}`)
  }
}
console.log(`FIELDPROOF ${11 - mismatches}/11 census==raw zero mismatches`)
process.exit(mismatches === 0 ? 0 : 1)
