#!/usr/bin/env node
// (v0.976.258, fire-0743) fieldread-stormduck: read the storm duck's
// own arm mass across the cached faces - the census's own fieldproof
// (census==raw, zero mismatches, the house law) + the W-window's own
// live read (the family's own three-face arc).
import { readFileSync } from 'node:fs'
import { stormDuckCensus, stormDuckTrendRow } from '../src/lib/stormducktrend.mjs'

const faces = [
  ['face474', '/home/z/faces/face474/fleet19.log'],
  ['face475', '/home/z/faces/face475/fleet19.log'],
  ['face476', '/home/z/faces/face476/fleet19.log'],
  ['face477', '/home/z/faces/face477/fleet19.log']
]
const RAW_RE = /^storm duck: (0|[1-9]\d*) arm\(s\), (0|[1-9]\d*) walk\(s\) refused fleet-wide while ducked \(v0\.143\.0/

let mismatches = 0
let facesWithLine = 0
const censusCells = []
for (const [name, path] of faces) {
  const lines = readFileSync(path, 'utf8').split('\n')
  const raw = lines.filter(l => RAW_RE.test(l))
  const c = stormDuckCensus(lines)
  censusCells.push(c)
  if (raw.length === 0) {
    console.log(`${name}: no storm duck print - census ${JSON.stringify(c)} (the lawful zero)`)
    continue
  }
  facesWithLine++
  // the LAST raw print the census must hold (LAST-PRINT-WINS)
  const last = raw[raw.length - 1]
  const parts = RAW_RE.exec(last)
  const rawCells = { arms: Number(parts[1]), refusals: Number(parts[2]) }
  const ok = c.arms === rawCells.arms && c.refusals === rawCells.refusals
  if (!ok) mismatches++
  console.log(`${name}: raw ${raw.length} print(s), census ${JSON.stringify(c)}, raw ${JSON.stringify(rawCells)} - ${ok ? 'MATCH' : 'MISMATCH'}`)
}

// the W-window's own live read (the field's own arc) - the nearest-
// completed law: cur=face477, prev=face476, back=face475
const row = stormDuckTrendRow({
  back: censusCells[1],
  prev: censusCells[2],
  cur: censusCells[3]
})
console.log(`W475-476-477 (475->476->477): ${row ?? 'the honest silence'}`)

console.log(`FIELDPROOF: ${facesWithLine} face(s) with the print, ${mismatches} mismatch(es) - ${mismatches === 0 ? 'ZERO mismatches, the word rides' : 'THE WORD LIES - fix before push'}`)
process.exit(mismatches === 0 ? 0 : 1)
