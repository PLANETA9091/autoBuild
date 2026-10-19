#!/usr/bin/env node
// (v0.976.309) fieldread: the setblock echo west census vs raw grep across the
// REAL server-console faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { echoWestCensus, echoWestTrendRow } from '../src/lib/echowesttrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-echowest-0700.mjs <server-console.log> [...]'); process.exit(1) }
const reads = faces.map((p) => ({ p, c: echoWestCensus(readFileSync(p, 'utf8').split('\n')) }))
let mismatch = 0
for (const r of reads) {
  const rawMin = Number(spawnSync('bash', ['-c', `grep -oE 'Changed the block at -?[0-9]+, [0-9]+, [0-9]+$' '${r.p}' | sed 's/Changed the block at //' | awk -F', ' '{print $1}' | sort -n | head -1`], { encoding: 'utf8' }).stdout.trim() || '0')
  const ok = rawMin === r.c.minEchoX
  if (!ok) mismatch++
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${r.p}: census(minEchoX=${r.c.minEchoX}) rawMin=${rawMin}`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
const order = reads
for (let i = 0; i + 2 < order.length; i++) {
  const row = echoWestTrendRow({ back: order[i].c, prev: order[i + 1].c, cur: order[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  console.log(`W${i + 1} (${order[i].c.minEchoX} -> ${order[i + 1].c.minEchoX} -> ${order[i + 2].c.minEchoX}): ${kind}`)
}
