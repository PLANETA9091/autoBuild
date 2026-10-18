#!/usr/bin/env node
// (v0.976.251, fire-0442) fieldread-pickaxe-tiers-end: read the pickaxe
// tiers end line across the cached faces - the census's own fieldproof
// (census==raw, zero mismatches, the house law).
import { readFileSync } from 'node:fs'
import { pickaxeTiersEndCensus, pickaxeTiersEndRow } from '../src/lib/pickaxetiersend.mjs'

const faces = [
  ['face466', '/home/z/privateB/faces/face466/fleet19.log'],
  ['face467', '/home/z/privateB/faces/face467/fleet19.log'],
  ['face468', '/home/z/privateB/faces/face468/fleet19.log'],
  ['face474', '/home/z/privateB/faces/face474/fleet19.log']
]
const RAW_RE = /^pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=(\d+) stone=(\d+) iron=(\d+)$/

let mismatches = 0
let facesWithLine = 0
const censusCells = []
for (const [name, path] of faces) {
  const lines = readFileSync(path, 'utf8').split('\n')
  const rows = lines.filter(l => RAW_RE.test(l))
  const c = pickaxeTiersEndCensus(lines)
  console.log(`--- ${name}: ${rows.length} line(s), census=${JSON.stringify(c)} ---`)
  if (rows.length === 0) {
    // the honest read: no line -> the census must hold the zeros
    if (c.wooden !== 0 || c.stone !== 0 || c.iron !== 0) {
      console.log('  MISMATCH: no raw line but census non-zero')
      mismatches++
    } else {
      console.log('  ok (no line, census lawful zero)')
    }
    censusCells.push(null)
    continue
  }
  facesWithLine++
  // the raw side: parse the LAST line (LAST-PRINT-WINS the census holds)
  const m = RAW_RE.exec(rows[rows.length - 1])
  const raw = { wooden: Number(m[1]), stone: Number(m[2]), iron: Number(m[3]) }
  if (raw.wooden !== c.wooden || raw.stone !== c.stone || raw.iron !== c.iron) {
    console.log(`  MISMATCH: raw=${JSON.stringify(raw)} census=${JSON.stringify(c)}`)
    mismatches++
  } else {
    console.log(`  ok census==raw wooden=${c.wooden} stone=${c.stone} iron=${c.iron} total=${c.wooden + c.stone + c.iron}`)
  }
  censusCells.push(c)
  if (name === 'face474') console.log('FULL474=' + rows[rows.length - 1])
  if (name === 'face466') console.log('FULL466=' + rows[rows.length - 1])
  if (name === 'face467') console.log('FULL467=' + rows[rows.length - 1])
  if (name === 'face468') console.log('FULL468=' + rows[rows.length - 1])
}
// the windows the four faces ride (the honest one-step windows print
// nothing - the fold needs three faces; W466 speaks the swing)
const w466 = pickaxeTiersEndRow({ back: censusCells[0], prev: censusCells[1], cur: censusCells[2] })
console.log('W466 row: ' + (w466 ? w466.slice(0, 150) + '...' : 'null (held)'))
console.log(`TOTAL: ${facesWithLine}/${faces.length} faces spoke, ${mismatches} mismatches`)
process.exit(mismatches === 0 ? 0 : 1)
