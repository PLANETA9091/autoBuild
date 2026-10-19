#!/usr/bin/env node
// (v0.976.301) fieldread: the gc Pause Mixed census vs raw grep across the
// REAL server-console faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { gcPauseMixedCensus, gcPauseMixedTrendRow } from '../src/lib/gcpausemixedtrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-gpmixed-0330.mjs <server-console.log> [...]'); process.exit(1) }
const reads = faces.map((p) => ({ p, c: gcPauseMixedCensus(readFileSync(p, 'utf8').split('\n')) }))
let mismatch = 0
for (const r of reads) {
  const rawMax = Number(spawnSync('bash', ['-c', `grep -oE 'Pause Young \\(Prepare Mixed\\) \\([^)]*\\)[^(]*\\([0-9]+M\\) [0-9.]+ms' '${r.p}' | grep -oE '[0-9.]+ms' | tr -d 'ms' | sort -n | tail -1`], { encoding: 'utf8' }).stdout.trim() || '0')
  const ok = rawMax === r.c.maxMixedMs
  if (!ok) mismatch++
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${r.p}: census(maxMixedMs=${r.c.maxMixedMs}) rawMax=${rawMax}`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
const order = reads
for (let i = 0; i + 2 < order.length; i++) {
  const row = gcPauseMixedTrendRow({ back: order[i].c, prev: order[i + 1].c, cur: order[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  console.log(`W${i + 1} (${order[i].c.maxMixedMs} -> ${order[i + 1].c.maxMixedMs} -> ${order[i + 2].c.maxMixedMs}): ${kind}`)
}
