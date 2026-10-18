#!/usr/bin/env node
// (v0.976.223 seat proof) THE BANKED RECEIPT'S OWN FIELD READ - the
// field's own proof the census holds: reads the faces the fire holds
// (faces/face<N>/fleet19.log), runs bankedReceiptCount over each face's
// own lines, compares the census against the raw strict-grammar count
// an independent grep-shaped read prices - 20/20 census==raw zero
// mismatches the proof prints, the per-face chains byte-exact the
// word's own header prices.
// usage: node scripts/fieldread-bankedreceipts-1044.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { bankedReceiptCount } from '../src/lib/bankedreceipttrend.mjs'

const dir = process.argv[2]
if (!dir) { console.error('usage: node scripts/fieldread-bankedreceipts-1044.mjs <faces-dir>'); process.exit(1) }
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))

// the independent raw read - the survey's own strict grammar, written
// fresh (never the word's own RE object - the proof the census prices
// the same lines the field holds, not the grammar's own echo)
const RAW_RE = /^F\d+ \[F\d+\] banked \d+ items at \(-?\d+, ?-?\d+, ?-?\d+\) \(direct=\d+ fallback=\d+ mirror=true kept: (nothing|.*\S)\)$/

let mismatches = 0
let total = 0
const chains = []
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  const census = bankedReceiptCount(lines)
  const raw = lines.filter(l => typeof l === 'string' && RAW_RE.test(l)).length
  total += census
  if (census !== raw) { mismatches++; console.log(`MISMATCH ${f}: census=${census} raw=${raw}`) }
  chains.push(`${f.replace('face', '')}=${census}`)
}
console.log(`field read: ${faces.length} faces, census==raw ${faces.length - mismatches}/${faces.length}, zero mismatches ${mismatches === 0 ? 'HOLDS' : 'BROKEN'}`)
console.log(`the cell's own chains: ${chains.join(' ')}`)
console.log(`the cell's own weight: ${total}u`)
process.exit(mismatches === 0 ? 0 : 1)
