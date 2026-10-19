#!/usr/bin/env node
// (v0.976.294) fieldread: the boot done census vs raw grep across the
// REAL server-console faces - census==raw zero mismatches or the word
// lied. The faces the arc-mine cached: /home/z/facecache/sb-<runid>.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { bootDoneCensus, bootDoneTrendRow } from '../src/lib/bootdonetrend.mjs'

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-bootdone-0043.mjs <server-console.log> ...'); process.exit(1) }
const reads = faces.map((p) => ({ p, c: bootDoneCensus(readFileSync(p, 'utf8').split('\n')) }))
let mismatch = 0
for (const r of reads) {
  const rawLines = Number(spawnSync('grep', ['-cE', '^\\[[0-9:]{8}\\] \\[Server thread/INFO\\]: Done \\([0-9]+\\.[0-9]{3}s\\)! For help, type "help"$', r.p], { encoding: 'utf8' }).stdout.trim() || '0')
  // the exact-integer sum the census rides: integer part * 1000 + the three fraction digits
  const rawExact = Number(spawnSync('bash', ['-c', `grep -oE 'Done \\([0-9]+\\.[0-9]{3}s\\)' '${r.p}' | awk '{gsub(/[^0-9.]/,""); split($0,b,"."); s+=b[1]*1000+b[2]} END{print s+0}'`], { encoding: 'utf8' }).stdout.trim().split('\n').pop() || '0')
  const ok = rawExact === r.c.ms
  if (!ok) mismatch++
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${r.p}: census(ms=${r.c.ms}) rawLines=${rawLines} rawExact=${rawExact}`)
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
const order = reads
for (let i = 0; i + 2 < order.length; i++) {
  const row = bootDoneTrendRow({ back: order[i].c, prev: order[i + 1].c, cur: order[i + 2].c })
  const kind = row ? (row.includes('swing') ? 'SWING' : row.includes('swell') ? 'SWELL' : 'FADE') : 'the honest silence (held or three-face zero)'
  const f = (c) => (c.ms / 1000).toFixed(3)
  console.log(`W${i + 1} (${f(order[i].c)} -> ${f(order[i + 1].c)} -> ${f(order[i + 2].c)}): ${kind}`)
}
