#!/usr/bin/env node
// (v0.976.300) fieldread: the gc cleanup census vs raw grep across the
// REAL server-console faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { gcCleanupCensus, gcCleanupTrendRow } from '../src/lib/gccleanuptrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-gccleanup-0300.mjs <server-console.log> [...]'); process.exit(1) }
const reads = faces.map((p) => ({ p, c: gcCleanupCensus(readFileSync(p, 'utf8').split('\n')) }))
let mismatch = 0
for (const r of reads) {
  const rawMax = Number(spawnSync('bash', ['-c', `grep -oE 'Pause Cleanup [0-9]+M->[0-9]+M\\([0-9]+M\\) [0-9.]+ms' '${r.p}' | grep -oE '[0-9.]+ms' | tr -d 'ms' | sort -n | tail -1`], { encoding: 'utf8' }).stdout.trim() || '0')
  const ok = rawMax === r.c.maxCleanupMs
  if (!ok) mismatch++
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${r.p}: census(maxCleanupMs=${r.c.maxCleanupMs}) rawMax=${rawMax}`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
const order = reads
for (let i = 0; i + 2 < order.length; i++) {
  const row = gcCleanupTrendRow({ back: order[i].c, prev: order[i + 1].c, cur: order[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  console.log(`W${i + 1} (${order[i].c.maxCleanupMs} -> ${order[i + 1].c.maxCleanupMs} -> ${order[i + 2].c.maxCleanupMs}): ${kind}`)
}
