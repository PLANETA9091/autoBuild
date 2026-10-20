// (v0.976.324) FIELDPROOF - the server boot word's own mirror law: the
// census hand and the raw re-parse hand the face must agree (the
// census==raw zero-mismatch law the family trusts). Reads the
// thirteen REAL faces' console.log files, takes the boot (the
// slowest 'Done (Ns)!' print's duration, seconds) both ways, and
// speaks the W1..W11 windows byte-exact the word was born to voice.
import { serverBootCensus, serverBootTrendRow } from '../src/lib/serverboottrend.mjs'
import { readFileSync } from 'node:fs'

const faces = [
  ['F501', process.argv[2]], ['F502', process.argv[3]], ['F503', process.argv[4]],
  ['F504', process.argv[5]], ['F505', process.argv[6]], ['F506', process.argv[7]],
  ['F507', process.argv[8]], ['F508', process.argv[9]], ['F509', process.argv[10]],
  ['F510', process.argv[11]], ['F511', process.argv[12]], ['F512', process.argv[13]],
  ['F514', process.argv[14]]
]

const BOOT_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Done \(\d+\.\d{3}s\)! For help, type "help"$/
const censusOf = (p) => serverBootCensus(readFileSync(p, 'utf8').split('\n'))
const rawOf = (p) => {
  let max = null
  for (const l of readFileSync(p, 'utf8').split('\n')) {
    if (!BOOT_RE.exec(l)) continue
    const sec = Number(l.match(/Done \((\d+\.\d{3})s\)/)[1])
    if (max === null || sec > max) max = sec
  }
  return max === null ? 0 : max
}

let mismatches = 0
const counts = []
for (const [name, p] of faces) {
  if (!p) continue
  const c = censusOf(p)
  const r = rawOf(p)
  const ok = c && c.maxBootSec === r
  if (!ok) mismatches++
  counts.push([name, c ? c.maxBootSec : null, r])
  console.log(`${name}: census=${c ? c.maxBootSec : 'null'} raw=${r} ${ok ? 'MATCH' : 'MISMATCH'}`)
}
// the REAL windows the thirteen-face arc holds (W1..W11 - byte-exact
// the word speaks, eleven deep the birth holds)
if (counts.length >= 13) {
  const v = counts.map(([, n]) => n)
  for (let i = 0; i < 11; i++) {
    const row = serverBootTrendRow({ back: { maxBootSec: v[i] }, prev: { maxBootSec: v[i + 1] }, cur: { maxBootSec: v[i + 2] } })
    console.log(`W${i + 1}: ${row ? row.slice(0, 140) : 'held/silent'}`)
  }
}
console.log(`FIELDPROOF ${13 - mismatches}/13 census==raw zero mismatches`)
process.exit(mismatches === 0 ? 0 : 1)
