#!/usr/bin/env node
// (v0.976.293) fieldread: the boot prep census vs raw grep across the
// REAL server-console faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { bootPrepCensus, bootPrepTrendRow } from '../src/lib/bootpreptrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-bootprep-0030.mjs <server-console.log> [more ...]'); process.exit(1) }
const reads = faces.map((p) => ({ p, c: bootPrepCensus(readFileSync(p, 'utf8').split('\n')) }))
let mismatch = 0
for (const r of reads) {
  const raw = Number(spawnSync('grep', ['-cE', '^\\[[0-9:]{8}\\] \\[Server thread/INFO\\]: Time elapsed: (0|[1-9][0-9]*) ms$', r.p], { encoding: 'utf8' }).stdout.trim() || '0')
  const rawSum = Number(spawnSync('bash', ['-c', `grep -oE 'Time elapsed: [0-9]+ ms' '${r.p}' | awk '{s+=$3} END{print s+0}'`], { encoding: 'utf8' }).stdout.trim() || '0')
  const ok = rawSum === r.c.prep
  if (!ok) mismatch++
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${r.p}: census(prep=${r.c.prep}) rawLines=${raw} rawSum=${rawSum}`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
const order = reads
for (let i = 0; i + 2 < order.length; i++) {
  const row = bootPrepTrendRow({ back: order[i].c, prev: order[i + 1].c, cur: order[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  console.log(`W${i + 1} (${order[i].c.prep} -> ${order[i + 1].c.prep} -> ${order[i + 2].c.prep}): ${kind}`)
}
