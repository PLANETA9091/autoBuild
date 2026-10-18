#!/usr/bin/env node
// (v0.976.255, fire-0630) fieldread-churnceiling: read the fleet churn
// ceiling's burst mass across the cached faces - the census's own
// fieldproof (census==raw, zero mismatches, the house law) + the
// W-window's own live read (the family's own three-face arc - the
// cached corpus's own zeros the ceiling's closed valve keeps).
import { readFileSync } from 'node:fs'
import { churnCeilingCensus, churnCeilingTrendRow } from '../src/lib/churnceilingtrend.mjs'

const faces = [
  ['face467', '/home/z/privateB/faces/face467/fleet19.log'],
  ['face474', '/home/z/privateB/faces/face474/fleet19.log'],
  ['face475', '/home/z/privateB/faces/face475/fleet19.log']
]
const RAW_RE = /^fleet churn ceiling: (0|[1-9]\d*) open\(s\), (0|[1-9]\d*) aggregate re-issues refused \(v0\.77\.0 - the per-bot limit leaves the fleet-wide burst unbounded\)$/

let mismatches = 0
let facesWithLine = 0
const censusCells = []
for (const [name, path] of faces) {
  const lines = readFileSync(path, 'utf8').split('\n')
  const raw = lines.filter(l => RAW_RE.test(l))
  const c = churnCeilingCensus(lines)
  censusCells.push(c)
  if (raw.length === 0) {
    console.log(`${name}: no fleet churn ceiling print - census ${JSON.stringify(c)} (the lawful zero)`)
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
const row = churnCeilingTrendRow({
  back: censusCells[0],
  prev: censusCells[1],
  cur: censusCells[2]
})
console.log(`W467-474-475: ${row === null ? 'null (the lawful silence - the ceiling never fired the whole arc)' : row}`)
console.log(`FIELDPROOF: ${facesWithLine} face(s) with the print, ${mismatches} mismatch(es) - ${mismatches === 0 ? 'the house law holds' : 'THE LAW BROKE'}`)
process.exit(mismatches === 0 ? 0 : 1)
