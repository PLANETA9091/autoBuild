// (v0.976.314) FIELDPROOF - the login headcount word's own mirror law:
// the census hand and the raw grep hand the face must agree (the
// census==raw zero-mismatch law the family trusts). Reads the six REAL
// faces' console.log files, counts the login lines both ways, and
// speaks the W1..W4 windows byte-exact the word was born to voice.
import { loginCountCensus, loginCountTrendRow } from '../src/lib/logincounttrend.mjs'
import { readFileSync } from 'node:fs'

const faces = [
  ['F501', process.argv[2]],
  ['F502', process.argv[3]],
  ['F503', process.argv[4]],
  ['F504', process.argv[5]],
  ['F505', process.argv[6]],
  ['F506', process.argv[7]]
]

const censusOf = (p) => loginCountCensus(readFileSync(p, 'utf8').split('\n'))
const rawOf = (p) => readFileSync(p, 'utf8').split('\n')
  .filter((l) => /^\[\d{2}:\d{2}:\d{2}\] \[Server thread\/INFO\]: \S+\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, -?\d+\.\d+\)$/.test(l)).length

let mismatches = 0
const counts = []
for (const [name, p] of faces) {
  if (!p) continue
  const c = censusOf(p)
  const r = rawOf(p)
  const ok = c && c.logins === r
  if (!ok) mismatches++
  counts.push([name, c ? c.logins : null, r])
  console.log(`${name}: census=${c ? c.logins : 'null'} raw=${r} ${ok ? 'MATCH' : 'MISMATCH'}`)
}
// the REAL windows the six-face arc holds (W1..W4 - byte-exact the
// word speaks, four deep the birth holds)
if (counts.length >= 6) {
  const [f1, f2, f3, f4, f5, f6] = counts.map(([, n]) => n)
  for (const [w, b, p, c] of [['W1', f1, f2, f3], ['W2', f2, f3, f4], ['W3', f3, f4, f5], ['W4', f4, f5, f6]]) {
    const row = loginCountTrendRow({ back: { logins: b }, prev: { logins: p }, cur: { logins: c } })
    console.log(`${w}: ${row ? row.slice(0, 140) : 'held/silent'}`)
  }
}
console.log(`FIELDPROOF ${6 - mismatches}/6 census==raw ${mismatches === 0 ? '- zero mismatches' : `- ${mismatches} MISMATCHES`}`)
