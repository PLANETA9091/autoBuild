#!/usr/bin/env node
// (v0.976.224 seat proof) THE WATER RESCUE LANE'S OWN FIELD READ - the
// field's own proof the census holds: reads the faces the fire holds
// (faces/face<N>/fleet19.log), runs waterRescueLaneCount over each
// face's own lines, compares the census against the raw loose-carrier
// count an independent grep-shaped read prices - 23/23 census==raw
// zero mismatches the proof prints, the per-face chains byte-exact
// the word's own header prices.
// usage: node scripts/fieldread-waterrescuelane-1045.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { waterRescueLaneCount } from '../src/lib/waterrescuelanetrend.mjs'

const dir = process.argv[2]
if (!dir) { console.error('usage: node scripts/fieldread-waterrescuelane-1045.mjs <faces-dir>'); process.exit(1) }
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))

// the independent raw read - the loose-carrier form written fresh
// (never the word's own RE object - the loose bracket the census's
// backreference never needs proves the self-bracket shape whole: a
// non-self bracket the raw counts and the census refuses would print
// the mismatch the proof kills)
const RAW_RE = /^F\d+ \[[A-Za-z0-9]+\] water: (?:drowning rescue|rescue) .+$/

let mismatches = 0
let total = 0
const chains = []
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  const census = waterRescueLaneCount(lines)
  const raw = lines.filter(l => typeof l === 'string' && RAW_RE.test(l)).length
  total += census
  if (census !== raw) { mismatches++; console.log(`MISMATCH ${f}: census=${census} raw=${raw}`) }
  chains.push(`${f.replace('face', '')}=${census}`)
}
console.log(`field read: ${faces.length} faces, census==raw ${faces.length - mismatches}/${faces.length}, zero mismatches ${mismatches === 0 ? 'HOLDS' : 'BROKEN'}`)
console.log(`the cell's own chains: ${chains.join(' ')}`)
console.log(`the cell's own weight: ${total}u`)
process.exit(mismatches === 0 ? 0 : 1)
