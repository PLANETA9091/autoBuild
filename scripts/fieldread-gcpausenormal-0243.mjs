#!/usr/bin/env node
// (v0.976.298) fieldread: the pause young normal census vs raw grep across the
// REAL server-console faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { gcPauseNormalCensus, gcPauseNormalTrendRow } from '../src/lib/gcpausenormaltrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-gcpausenormal-0243.mjs <server-console.log> [...]'); process.exit(1) }
const NORMAL_GREP = '^\\[[0-9]+\\.[0-9]{3}s\\]\\[info\\]\\[gc\\] GC\\([0-9]+\\) Pause Young \\(Normal\\) \\([^)]*\\)( \\([^)]+\\))? [0-9]+M->[0-9]+M\\([0-9]+M\\) [0-9]+\\.[0-9]+ms$'
const PINNED_GREP = '^\\[[0-9]+\\.[0-9]{3}s\\]\\[info\\]\\[gc\\] GC\\([0-9]+\\) Pause Young \\(Normal\\) \\([^)]*\\) \\(Evacuation Failure: Pinned\\) [0-9]+M->[0-9]+M\\([0-9]+M\\) [0-9]+\\.[0-9]+ms$'
const reads = faces.map((p) => ({ p, c: gcPauseNormalCensus(readFileSync(p, 'utf8').split('\n')) }))
let mismatch = 0
for (const r of reads) {
  const rawN = Number(spawnSync('grep', ['-cE', NORMAL_GREP, r.p], { encoding: 'utf8' }).stdout.trim() || '0')
  const rawP = Number(spawnSync('grep', ['-cE', PINNED_GREP, r.p], { encoding: 'utf8' }).stdout.trim() || '0')
  const ok = rawN === r.c.normal && rawP === r.c.pinned
  if (!ok) mismatch++
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${r.p}: census(normal=${r.c.normal},pinned=${r.c.pinned}) rawLines(normal=${rawN},pinned=${rawP})`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
const order = reads
for (let i = 0; i + 2 < order.length; i++) {
  const row = gcPauseNormalTrendRow({ back: order[i].c, prev: order[i + 1].c, cur: order[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  console.log(`W${i + 1} (${order[i].c.normal} -> ${order[i + 1].c.normal} -> ${order[i + 2].c.normal}): ${kind}`)
}
