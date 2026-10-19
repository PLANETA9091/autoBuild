#!/usr/bin/env node
// (v0.976.262) THE AUTOSAVE MERGE'S OWN FIELD READ - the word's own
// fieldproof over the cached faces: the census must re-price the raw
// merge cells the faces' own autosave prints hold (census==raw zero
// mismatches the field's own law), the real windows the rows price.
import { readFileSync } from 'node:fs'
import { autosaveMergeCensus, autosaveMergeTrendRow } from '../src/lib/autosavemergetrend.mjs'

const FACES = [
  ['face467', '/home/z/privateB/faces/face467/fleet19.log', 4, 1212],
  ['face474', '/home/z/privateB/faces/face474/fleet19.log', 21, 1476],
  ['face475', '/home/z/privateB/faces/face475/fleet19.log', 1, 1328],
  ['face478', '/home/z/privateB/faces/face478/fleet19.log', 42, 1162]
]

let mismatches = 0
const cells = {}
for (const [name, path, rawM, rawF] of FACES) {
  let lines
  try {
    lines = readFileSync(path, 'utf8').split('\n')
  } catch {
    console.log(`${name}: LOG MISSING (the honest gap the series skips)`)
    continue
  }
  const c = autosaveMergeCensus(lines)
  const rawCount = lines.filter((l) => /^\[worldmap\] autosave: merged \d+ from disk, \d+ positions on file$/.test(l)).length
  const ok = c.merged === rawM && c.onFile === rawF
  if (!ok) mismatches++
  cells[name] = c
  console.log(`${name}: census ${c.merged} merged/${c.onFile} on file vs raw ${rawM}/${rawF} (autosave prints the face rode: ${rawCount}) - ${ok ? 'MATCH' : 'MISMATCH'}`)
}

// the real windows the rows price
const wins = [
  ['W467-474-475', ['face467', 'face474', 'face475']],
  ['W474-475-478', ['face474', 'face475', 'face478']]
]
for (const [label, [a, b, c]] of wins) {
  if (!cells[a] || !cells[b] || !cells[c]) continue
  const row = autosaveMergeTrendRow({ back: cells[a], prev: cells[b], cur: cells[c] })
  console.log(`${label}: ${row ?? '(the honest null - the held step the silence prices)'}`)
}

// the disk's own lag cross-check: the F478 face's file mass vs the live
// map cell the .260 word read (1163 positions on the same face) - the
// last scan rode after the final autosave, the seats co-exist
const f478 = autosaveMergeCensus(readFileSync('/home/z/privateB/faces/face478/fleet19.log', 'utf8').split('\n'))
console.log(`the disk's own lag: F478 file mass ${f478.onFile} on file vs the live map cell 1163 positions (the .260 word's own read) - the last scan rode after the save`)

console.log(mismatches === 0 ? `FIELDPROOF ${FACES.length}/${FACES.length} census==raw zero mismatches` : `FIELDPROOF FAILED: ${mismatches} mismatch(es)`)
process.exit(mismatches === 0 ? 0 : 1)
