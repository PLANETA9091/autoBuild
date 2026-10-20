#!/usr/bin/env node
// (v0.976.312) fieldread: the login port census vs raw grep across the
// REAL server-console faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { loginPortCensus, loginPortTrendRow } from '../src/lib/loginporttrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-loginport-0843.mjs <server-console.log> [...]'); process.exit(1) }
const reads = faces.map((p) => ({ p, c: loginPortCensus(readFileSync(p, 'utf8').split('\n')) }))
let mismatch = 0
for (const r of reads) {
  const rawMax = Number(spawnSync('bash', ['-c', `grep -E '^\\[[0-9]{2}:[0-9]{2}:[0-9]{2}\\] \\[Server thread/INFO\\]: \\S+\\[/[0-9.]+:[0-9]+\\] logged in with entity id [0-9]+ at \\(' '${r.p}' | sed -E 's/^\\[[0-9:]+\\] \\[Server thread\\/INFO\\]: \\S+\\[\\/[^:]*:([0-9]+)\\].*/\\1/' | sort -n | tail -1`], { encoding: 'utf8' }).stdout.trim() || '0')
  const ok = rawMax === r.c.maxLoginPort
  if (!ok) mismatch++
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${r.p}: census(maxLoginPort=${r.c.maxLoginPort}) rawMax=${rawMax}`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
const order = reads
for (let i = 0; i + 2 < order.length; i++) {
  const row = loginPortTrendRow({ back: order[i].c, prev: order[i + 1].c, cur: order[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  console.log(`W${i + 1} (${order[i].c.maxLoginPort} -> ${order[i + 1].c.maxLoginPort} -> ${order[i + 2].c.maxLoginPort}): ${kind}`)
}
