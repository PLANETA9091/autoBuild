#!/usr/bin/env node
// (v0.976.252, fire-0530) fieldread-worldmap-tail: read the worldmap
// tail's end mass across the cached faces - the census's own fieldproof
// (census==raw, zero mismatches, the house law) + the W-window's own
// live read (the family's own three-face arc).
import { readFileSync } from 'node:fs'
import { worldmapTailCensus, worldmapTailTrendRow } from '../src/lib/worldmaptailtrend.mjs'

const faces = [
  ['face467', '/home/z/privateB/faces/face467/fleet19.log'],
  ['face474', '/home/z/privateB/faces/face474/fleet19.log'],
  ['face475', '/home/z/privateB/faces/face475/fleet19.log']
]
const RAW_RE = /^worldmap: (0|[1-9]\d*) positions, (0|[1-9]\d*) chunks scanned, top: [a-z_]+=(0|[1-9]\d*)( [a-z_]+=(0|[1-9]\d*))*$/

let mismatches = 0
let facesWithLine = 0
const censusCells = []
for (const [name, path] of faces) {
  const lines = readFileSync(path, 'utf8').split('\n')
  const raw = lines.filter(l => RAW_RE.test(l))
  const c = worldmapTailCensus(lines)
  censusCells.push(c)
  if (raw.length === 0) {
    console.log(`${name}: no worldmap tail print - census ${JSON.stringify(c)} (the lawful zero)`)
    continue
  }
  facesWithLine++
  // the LAST raw print the census must hold (LAST-PRINT-WINS)
  const m = RAW_RE.exec(raw[raw.length - 1])
  const rawCells = { positions: Number(m[1]), chunks: Number(m[2]) }
  const ok = c.positions === rawCells.positions && c.chunks === rawCells.chunks
  if (!ok) mismatches++
  console.log(`${name}: raw ${raw.length} print(s), last raw ${JSON.stringify(rawCells)}, census ${JSON.stringify(c)} - ${ok ? 'MATCH' : 'MISMATCH'}`)
}

// the W-window's own live read (the field's own arc)
const row = worldmapTailTrendRow({
  back: censusCells[0],
  prev: censusCells[1],
  cur: censusCells[2]
})
console.log(`W467-474-475 (467->474->475): ${row ?? 'the honest silence'}`)

console.log(`FIELDPROOF: ${facesWithLine} face(s) with the print, ${mismatches} mismatch(es) - ${mismatches === 0 ? 'ZERO mismatches, the word rides' : 'THE WORD LIES - fix before push'}`)
process.exit(mismatches === 0 ? 0 : 1)
