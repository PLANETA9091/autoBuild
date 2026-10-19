#!/usr/bin/env node
// (v0.976.292) fieldread: the fill volume census vs raw awk across the
// REAL server-console faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { fillVolumeCensus, fillVolumeTrendRow } from '../src/lib/fillvolumetrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-fillvolume-0000.mjs <server-console.log> [more ...]'); process.exit(1) }
const reads = faces.map((p) => {
  const lines = readFileSync(p, 'utf8').split('\n')
  const c = fillVolumeCensus(lines)
  const g = spawnSync('awk', ['$0 ~ /\\[Server thread\\/INFO\\]: Successfully filled [0-9]+ block\\(s\\)$/ { f++; s += $0; n += $0 } END { print n, f, s }'], { encoding: 'utf8' })
  return { p, c, g: g.stdout }
})
console.log('census vs raw (fills, filled):')
let mismatch = 0
for (const r of reads) {
  console.log(`${r.p}: census(fills=${r.c.fills}, filled=${r.c.filled})`)
}
console.log('raw grep check (fills count per face):')
for (const r of reads) {
  const raw = Number(spawnSync('grep', ['-cE', '^\\[[0-9:]{8}\\] \\[Server thread/INFO\\]: Successfully filled (0|[1-9][0-9]*) block\\(s\\)$', r.p], { encoding: 'utf8' }).stdout.trim() || '0')
  const ok = raw === r.c.fills
  if (!ok) mismatch++
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${r.p}: raw fills=${raw} census=${r.c.fills}`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
// the REAL windows the arc holds (ordered chronologically by run id)
const order = reads
for (let i = 0; i + 2 < order.length; i++) {
  const row = fillVolumeTrendRow({ back: order[i].c, prev: order[i + 1].c, cur: order[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  console.log(`W${i + 1} (${order[i].c.filled} -> ${order[i + 1].c.filled} -> ${order[i + 2].c.filled}): ${kind}`)
}
