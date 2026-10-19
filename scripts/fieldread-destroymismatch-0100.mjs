#!/usr/bin/env node
// (v0.976.295) fieldread: the destroy mismatch census vs raw grep across the
// REAL server-console faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { destroyMismatchCensus, destroyMismatchTrendRow } from '../src/lib/destroymismatchtrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-destroymismatch-0100.mjs <server-console.log> [...]'); process.exit(1) }
const reads = faces.map((p) => ({ p, c: destroyMismatchCensus(readFileSync(p, 'utf8').split('\n')) }))
let mismatch = 0
for (const r of reads) {
  const raw = Number(spawnSync('grep', ['-cE', '^\\[[0-9:]{8}\\] \\[Server thread/WARN\\]: Mismatch in destroy block pos: BlockPos\\{x=-?(0|[1-9][0-9]*), y=-?(0|[1-9][0-9]*), z=-?(0|[1-9][0-9]*)\\} BlockPos\\{x=-?(0|[1-9][0-9]*), y=-?(0|[1-9][0-9]*), z=-?(0|[1-9][0-9]*)\\}$', r.p], { encoding: 'utf8' }).stdout.trim() || '0')
  const ok = raw === r.c.mismatches
  if (!ok) mismatch++
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${r.p}: census(mismatches=${r.c.mismatches}) rawLines=${raw}`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
const order = reads
for (let i = 0; i + 2 < order.length; i++) {
  const row = destroyMismatchTrendRow({ back: order[i].c, prev: order[i + 1].c, cur: order[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  console.log(`W${i + 1} (${order[i].c.mismatches} -> ${order[i + 1].c.mismatches} -> ${order[i + 2].c.mismatches}): ${kind}`)
}
