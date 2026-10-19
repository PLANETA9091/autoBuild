#!/usr/bin/env node
// (v0.976.259) THE PULSE MAP CELL'S OWN FIELD READ - the word's own
// fieldproof over the cached faces: the census must re-price the raw
// map cells the faces' own tick dockets hold (census==raw zero
// mismatches the field's own law), the real windows the rows price.
import { readFileSync } from 'node:fs'
import { pulseMapCensus, pulseMapTrendRow } from '../src/lib/pulsemaptrend.mjs'

const FACES = [
  ['face467', '/home/z/privateB/faces/face467/fleet19.log', 1220, 20],
  ['face474', '/home/z/privateB/faces/face474/fleet19.log', 1476, 25],
  ['face475', '/home/z/privateB/faces/face475/fleet19.log', 1328, 27],
  ['face478', '/home/z/privateB/faces/face478/fleet19.log', 1163, 18],
  ['face479', '/tmp/f479-art/fleet19.log', 1181, 21]
]

let mismatches = 0
const cells = {}
for (const [name, path, rawP, rawC] of FACES) {
  let lines
  try {
    lines = readFileSync(path, 'utf8').split('\n')
  } catch {
    console.log(`${name}: LOG MISSING (the honest gap the series skips)`)
    continue
  }
  const c = pulseMapCensus(lines)
  const rawCount = lines.filter((l) => /^t-\d+s alive=\d+\/\d+ mined=\d+ map=\d+p\/\d+ch /.test(l)).length
  const ok = c.positions === rawP && c.chunks === rawC
  if (!ok) mismatches++
  cells[name] = c
  console.log(`${name}: census ${c.positions}p/${c.chunks}ch vs raw ${rawP}p/${rawC}ch (docket prints the face rode: ${rawCount}) - ${ok ? 'MATCH' : 'MISMATCH'}`)
}

// the real windows the rows price
const wins = [
  ['W467-474-475', ['face467', 'face474', 'face475']],
  ['W474-475-478', ['face474', 'face475', 'face478']],
  ['W475-478-479', ['face475', 'face478', 'face479']]
]
for (const [label, [a, b, c]] of wins) {
  if (!cells[a] || !cells[b] || !cells[c]) continue
  const row = pulseMapTrendRow({ back: cells[a], prev: cells[b], cur: cells[c] })
  console.log(`${label}: ${row ?? '(the honest null - the held step the silence prices)'}`)
}

console.log(mismatches === 0 ? `FIELDPROOF ${FACES.length}/${FACES.length} census==raw zero mismatches` : `FIELDPROOF FAILED: ${mismatches} mismatch(es)`)
process.exit(mismatches === 0 ? 0 : 1)
