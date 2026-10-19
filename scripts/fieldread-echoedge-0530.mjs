#!/usr/bin/env node
// (v0.976.305) fieldread: the setblock echo edge census vs raw grep across the
// REAL server-console faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { echoEdgeCensus, echoEdgeTrendRow } from '../src/lib/echoedgetrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-echoedge-0530.mjs <server-console.log> [...]'); process.exit(1) }
const reads = faces.map((p) => ({ p, c: echoEdgeCensus(readFileSync(p, 'utf8').split('\n')) }))
let mismatch = 0
for (const r of reads) {
  const rawMin = Number(spawnSync('bash', ['-c', `grep -oE 'Changed the block at -?[0-9]+, [0-9]+, -?[0-9]+' '${r.p}' | grep -oE '[0-9]+$' | sort -n | head -1`], { encoding: 'utf8' }).stdout.trim() || '0')
  const ok = rawMin === r.c.minEchoZ
  if (!ok) mismatch++
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${r.p}: census(minEchoZ=${r.c.minEchoZ}) rawMin=${rawMin}`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
for (let i = 0; i + 2 < reads.length; i++) {
  const row = echoEdgeTrendRow({ back: reads[i].c, prev: reads[i + 1].c, cur: reads[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  console.log(`W${i + 1} (${reads[i].c.minEchoZ} -> ${reads[i + 1].c.minEchoZ} -> ${reads[i + 2].c.minEchoZ}): ${kind}`)
}
