#!/usr/bin/env node
// (v0.976.303) fieldread: the gc concurrent start peak census vs raw grep across the
// REAL server-console faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { gcConcurrentStartCensus, gcConcurrentStartTrendRow } from '../src/lib/gcconcurrentstarttrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-gcstartpeak-0443.mjs <server-console.log> [...]'); process.exit(1) }
const reads = faces.map((p) => ({ p, c: gcConcurrentStartCensus(readFileSync(p, 'utf8').split('\n')) }))
let mismatch = 0
for (const r of reads) {
  const rawMax = Number(spawnSync('bash', ['-c', `sed 's/ (Evacuation Failure: Pinned)//' '${r.p}' | grep -oE 'Pause Young \\(Concurrent Start\\) \\([^)]*\\)[^(]*\\([0-9]+M\\) [0-9.]+ms' | grep -oE '[0-9.]+ms' | tr -d 'ms' | sort -n | tail -1`], { encoding: 'utf8' }).stdout.trim() || '0')
  const rawPinned = Number(spawnSync('bash', ['-c', `grep -cE 'Pause Young \\(Concurrent Start\\).*Evacuation Failure: Pinned' '${r.p}' || true`], { encoding: 'utf8' }).stdout.trim() || '0')
  const ok = rawMax === r.c.maxCStartMs && rawPinned === r.c.pinned
  if (!ok) mismatch++
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${r.p}: census(maxCStartMs=${r.c.maxCStartMs}, pinned=${r.c.pinned}) rawMax=${rawMax} rawPinned=${rawPinned}`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
const order = reads
for (let i = 0; i + 2 < order.length; i++) {
  const row = gcConcurrentStartTrendRow({ back: order[i].c, prev: order[i + 1].c, cur: order[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  console.log(`W${i + 1} (${order[i].c.maxCStartMs} -> ${order[i + 1].c.maxCStartMs} -> ${order[i + 2].c.maxCStartMs}): ${kind}`)
}
