#!/usr/bin/env node
// (v0.976.310) fieldread: the disconnect census vs raw grep across the
// REAL server-console faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { disconnectCensus, disconnectTrendRow } from '../src/lib/disconnecttrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-disconnect-0743.mjs <server-console.log> [...]'); process.exit(1) }
const reads = faces.map((p) => ({ p, c: disconnectCensus(readFileSync(p, 'utf8').split('\n')) }))
let mismatch = 0
for (const r of reads) {
  const rawN = Number(spawnSync('bash', ['-c', `grep -cE '^\\[[0-9]{2}:[0-9]{2}:[0-9]{2}\\] \\[Server thread/INFO\\]: \\S+ lost connection: Disconnected$' '${r.p}'`], { encoding: 'utf8' }).stdout.trim() || '0')
  const ok = rawN === r.c.disconnects
  if (!ok) mismatch++
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${r.p}: census(disconnects=${r.c.disconnects}) rawN=${rawN}`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
const order = reads
for (let i = 0; i + 2 < order.length; i++) {
  const row = disconnectTrendRow({ back: order[i].c, prev: order[i + 1].c, cur: order[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  console.log(`W${i + 1} (${order[i].c.disconnects} -> ${order[i + 1].c.disconnects} -> ${order[i + 2].c.disconnects}): ${kind}`)
}
