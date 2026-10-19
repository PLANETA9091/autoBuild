#!/usr/bin/env node
// (v0.976.303) fieldread: the setblock echo height census vs raw grep across
// the REAL server-console faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { echoHeightCensus, echoHeightTrendRow } from '../src/lib/echoheighttrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-echoheight-0430.mjs <server-console.log> [...]'); process.exit(1) }
const reads = faces.map((p) => ({ p, c: echoHeightCensus(readFileSync(p, 'utf8').split('\n')) }))
let mismatch = 0
for (const r of reads) {
  const rawMax = Number(spawnSync('bash', ['-c', `grep -oE 'Changed the block at -?[0-9]+, [0-9]+, -?[0-9]+' '${r.p}' | grep -oE ', [0-9]+, ' | tr -d ', ' | sort -n | tail -1`], { encoding: 'utf8' }).stdout.trim() || '0')
  const rawCount = Number(spawnSync('bash', ['-c', `grep -c 'Changed the block at' '${r.p}'`], { encoding: 'utf8' }).stdout.trim() || '0')
  const okMax = rawMax === r.c.maxEchoY
  const okCount = rawCount === r.c.echoes
  if (!okMax || !okCount) mismatch++
  console.log(`${okMax && okCount ? 'MATCH' : 'MISMATCH'} ${r.p}: census(maxEchoY=${r.c.maxEchoY}, echoes=${r.c.echoes}) rawMax=${rawMax} rawCount=${rawCount}`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
for (let i = 0; i + 2 < reads.length; i++) {
  const row = echoHeightTrendRow({ back: reads[i].c, prev: reads[i + 1].c, cur: reads[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  console.log(`W${i + 1} (${reads[i].c.maxEchoY} -> ${reads[i + 1].c.maxEchoY} -> ${reads[i + 2].c.maxEchoY}): ${kind}`)
}
