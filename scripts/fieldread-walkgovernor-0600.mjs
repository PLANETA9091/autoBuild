#!/usr/bin/env node
// (v0.976.254, fire-0600) fieldread-walkgovernor-stall: read the walk
// governor's stall mass across the cached faces - the census's own
// fieldproof (census==raw, zero mismatches, the house law) + the
// W-window's own live read (the family's own three-face arc).
import { readFileSync } from 'node:fs'
import { walkGovernorStallCensus, walkGovernorStallTrendRow } from '../src/lib/walkgovernorstalltrend.mjs'

const faces = [
  ['face467', '/home/z/privateB/faces/face467/fleet19.log'],
  ['face474', '/home/z/privateB/faces/face474/fleet19.log'],
  ['face475', '/home/z/privateB/faces/face475/fleet19.log']
]
const RAW_RE = /^walk governor: (0|[1-9]\d*) stall\(s\) opened, (0|[1-9]\d*) churn re-issues refused \(v0\.74\.0 churn breaker - goals queued\+done with zero progress during the run68-class storms\)$/

let mismatches = 0
let facesWithLine = 0
const censusCells = []
for (const [name, path] of faces) {
  const lines = readFileSync(path, 'utf8').split('\n')
  const raw = lines.filter(l => RAW_RE.test(l))
  const c = walkGovernorStallCensus(lines)
  censusCells.push(c)
  if (raw.length === 0) {
    console.log(`${name}: no walk governor print - census ${JSON.stringify(c)} (the lawful zero)`)
    continue
  }
  facesWithLine++
  // the LAST raw print the census must hold (LAST-PRINT-WINS)
  const m = RAW_RE.exec(raw[raw.length - 1])
  const rawCells = { opens: Number(m[1]), refusals: Number(m[2]) }
  const ok = c.opens === rawCells.opens && c.refusals === rawCells.refusals
  if (!ok) mismatches++
  console.log(`${name}: raw ${raw.length} print(s), last raw ${JSON.stringify(rawCells)}, census ${JSON.stringify(c)} - ${ok ? 'MATCH' : 'MISMATCH'}`)
}

// the W-window's own live read (the field's own arc)
const row = walkGovernorStallTrendRow({
  back: censusCells[0],
  prev: censusCells[1],
  cur: censusCells[2]
})
console.log(`W467-474-475 (467->474->475): ${row ?? 'the honest silence'}`)

console.log(`FIELDPROOF: ${facesWithLine} face(s) with the print, ${mismatches} mismatch(es) - ${mismatches === 0 ? 'ZERO mismatches, the word rides' : 'THE WORD LIES - fix before push'}`)
process.exit(mismatches === 0 ? 0 : 1)
