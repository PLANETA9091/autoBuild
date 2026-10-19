#!/usr/bin/env node
// (v0.976.296) fieldread: the setblock refusal census vs raw grep across the
// REAL server-console faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { setblockRefusalCensus, setblockRefusalTrendRow } from '../src/lib/setblockrefusaltrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-setblockrefusal-0143.mjs <server-console.log> [...]'); process.exit(1) }
const reads = faces.map((p) => ({ p, c: setblockRefusalCensus(readFileSync(p, 'utf8').split('\n')) }))
let mismatch = 0
for (const r of reads) {
  const raw = Number(spawnSync('grep', ['-cE', '^\\[[0-9:]{8}\\] \\[Server thread/INFO\\]: Could not set the block$', r.p], { encoding: 'utf8' }).stdout.trim() || '0')
  const ok = raw === r.c.refusals
  if (!ok) mismatch++
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${r.p}: census(refusals=${r.c.refusals}) rawLines=${raw}`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
const order = reads
for (let i = 0; i + 2 < order.length; i++) {
  const row = setblockRefusalTrendRow({ back: order[i].c, prev: order[i + 1].c, cur: order[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  console.log(`W${i + 1} (${order[i].c.refusals} -> ${order[i + 1].c.refusals} -> ${order[i + 2].c.refusals}): ${kind}`)
}
