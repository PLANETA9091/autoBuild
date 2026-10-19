#!/usr/bin/env node
// (v0.976.297) fieldread: the login entity id census vs raw grep across the
// REAL server-console faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { entityIdCensus, entityIdTrendRow } from '../src/lib/entityidtrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-entityid-0200.mjs <server-console.log> [...]'); process.exit(1) }
const RAW_RE = '^[0-9:]{8}\\] \\[Server thread/INFO\\]: [^ ]+\\[/[0-9.]+:[0-9]+\\] logged in with entity id (0|[1-9][0-9]*) at \\(-?[0-9]+\\.[0-9]+, -?[0-9]+\\.[0-9]+, -?[0-9]+\\.[0-9]+\\)$'
const reads = faces.map((p) => ({ p, c: entityIdCensus(readFileSync(p, 'utf8').split('\n')) }))
let mismatch = 0
for (const r of reads) {
  const rawMax = Number(spawnSync('bash', ['-c', `grep -oE 'logged in with entity id [0-9]+' '${r.p}' | awk '{print $6}' | sort -n | tail -1`], { encoding: 'utf8' }).stdout.trim() || '0')
  const ok = rawMax === r.c.maxEntityId
  if (!ok) mismatch++
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${r.p}: census(maxEntityId=${r.c.maxEntityId}) rawMax=${rawMax}`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
const order = reads
for (let i = 0; i + 2 < order.length; i++) {
  const row = entityIdTrendRow({ back: order[i].c, prev: order[i + 1].c, cur: order[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  console.log(`W${i + 1} (${order[i].c.maxEntityId} -> ${order[i + 1].c.maxEntityId} -> ${order[i + 2].c.maxEntityId}): ${kind}`)
}
