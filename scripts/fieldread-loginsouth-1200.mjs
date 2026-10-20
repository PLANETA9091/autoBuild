// (v0.976.320) FIELDPROOF - the login south edge word's own mirror
// law: the census hand and the raw sed/sort hand the face must agree
// (the census==raw zero-mismatch law the family trusts). Reads the
// ten REAL faces' console.log files, takes the Z ceiling both ways,
// and speaks the W1..W8 windows byte-exact the word was born to
// voice.
import { loginSouthCensus, loginSouthTrendRow } from '../src/lib/loginsouthtrend.mjs'
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
const censusOf = (p) => loginSouthCensus(readFileSync(p, 'utf8').split('\n'))
const rawOf = (p) => {
  let max = null
  for (const l of readFileSync(p, 'utf8').split('\n')) {
    const m = LOGIN_RE.exec(l)
    if (!m) continue
    const z = Number(m[3])
    if (max === null || z > max) max = z
  }
  return max === null ? 0 : max
}

let mismatches = 0
const counts = []
for (const [name, p] of faces) {
  if (!p) continue
  const c = censusOf(p)
  const r = rawOf(p)
  const ok = c && c.maxLoginZ === r
  if (!ok) mismatches++
  counts.push([name, c ? c.maxLoginZ : null, r])
  console.log(`${name}: census=${c ? c.maxLoginZ : 'null'} raw=${r} ${ok ? 'MATCH' : 'MISMATCH'}`)
}
// the REAL windows the ten-face arc holds (W1..W8 - byte-exact the
// word speaks, eight deep the birth holds)
if (counts.length >= 10) {
  const v = counts.map(([, n]) => n)
  for (let i = 0; i < 8; i++) {
    const row = loginSouthTrendRow({ back: { maxLoginZ: v[i] }, prev: { maxLoginZ: v[i + 1] }, cur: { maxLoginZ: v[i + 2] } })
    console.log(`W${i + 1}: ${row ? row.slice(0, 150) : 'held/silent'}`)
  }
}
console.log(`FIELDPROOF ${10 - mismatches}/10 census==raw zero mismatches`)
process.exit(mismatches === 0 ? 0 : 1)
