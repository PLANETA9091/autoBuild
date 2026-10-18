#!/usr/bin/env node
// (v0.976.257, fire-0730) fieldread-sidestep: read the side-step's own
// verdict mass across the cached faces - the census's own fieldproof
// (census==raw, zero mismatches, the house law) + the W-windows' own
// live reads (the family's own three-face arcs - the word's speaking
// birth the real swings price).
import { readFileSync } from 'node:fs'
import { sidestepVerdictCensus, sidestepVerdictTrendRow } from '../src/lib/sidestepverdict.mjs'

const faces = [
  ['face467', '/home/z/privateB/faces/face467/fleet19.log'],
  ['face474', '/home/z/privateB/faces/face474/fleet19.log'],
  ['face475', '/home/z/privateB/faces/face475/fleet19.log'],
  ['face478', '/home/z/privateB/faces/face478/fleet19.log']
]
const RAW_RE = /the stall side-step \((?:right|left)\) (?:moved the start(?: \(d now \d+\.\d\))?|stalled too)$/
const RAW_MOVED_RE = /the stall side-step \((?:right|left)\) moved the start(?: \(d now \d+\.\d\))?$/

let mismatches = 0
const censusCells = []
for (const [name, path] of faces) {
  const lines = readFileSync(path, 'utf8').split('\n')
  const raw = lines.filter(l => RAW_RE.test(l))
  const rawMoved = raw.filter(l => RAW_MOVED_RE.test(l)).length
  const rawStalled = raw.length - rawMoved
  const c = sidestepVerdictCensus(lines)
  censusCells.push(c)
  const ok = c.moved === rawMoved && c.stalled === rawStalled
  if (!ok) mismatches++
  console.log(`${name}: raw ${raw.length} print(s) (${rawMoved} moved / ${rawStalled} stalled), census ${JSON.stringify(c)} - ${ok ? 'MATCH' : 'MISMATCH'}`)
}

// the W-windows' own live reads (the field's own arcs)
const w1 = sidestepVerdictTrendRow({ back: censusCells[0], prev: censusCells[1], cur: censusCells[2] })
const w2 = sidestepVerdictTrendRow({ back: censusCells[1], prev: censusCells[2], cur: censusCells[3] })
console.log(`W467-474-475: ${w1 === null ? 'null (the lawful silence)' : w1}`)
console.log(`W474-475-478: ${w2 === null ? 'null (the lawful silence)' : w2}`)
console.log(`FIELDPROOF: ${faces.length} face(s), ${mismatches} mismatch(es) - ${mismatches === 0 ? 'the house law holds' : 'THE LAW BROKE'}`)
process.exit(mismatches === 0 ? 0 : 1)
