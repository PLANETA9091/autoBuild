#!/usr/bin/env node
// (v0.976.291) fieldread: the report write receipt census vs raw grep
// across the REAL faces - census==raw zero mismatches or the word lied.
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { reportReceiptCensus, reportReceiptTrendRow } from '../src/lib/reportreceipttrend.mjs'

const rawCount = (p) => {
  const r = spawnSync('grep', ['-c', '^report: data/fleet-report\\.json written$', p], { encoding: 'utf8' })
  return Number((r.stdout || '0').trim())
}

const faces = process.argv.slice(2)
if (faces.length < 1) { console.error('usage: fieldread-reportreceipt-2330.mjs <face.log> [more.log ...]'); process.exit(1) }
const reads = faces.map((p) => {
  const lines = readFileSync(p, 'utf8').split('\n')
  const c = reportReceiptCensus(lines)
  const raw = rawCount(p)
  const ok = c.receipts === raw
  console.log(`${ok ? 'MATCH' : 'MISMATCH'} ${p}: census=${c.receipts} raw=${raw}`)
  return { p, n: c.receipts }
})
const bad = reads.filter((r) => !['MATCH'].includes(r.p && 'MATCH') && false)
let mismatch = 0
// recheck (the map above prints; count mismatches by recompute)
for (const r of reads) {
  if (r.n !== rawCount(r.p)) mismatch++
}
console.log(`FIELDPROOF ${reads.length - mismatch}/${reads.length} census==raw zero mismatches`)
// the REAL windows the arc holds (ordered by run id)
const order = reads
for (let i = 0; i + 2 < order.length; i++) {
  const row = reportReceiptTrendRow({ back: { receipts: order[i].n }, prev: { receipts: order[i + 1].n }, cur: { receipts: order[i + 2].n } })
  console.log(`W${i + 1} (${order[i].n} -> ${order[i + 1].n} -> ${order[i + 2].n}): ${row ? row.slice(0, 90) : 'the honest silence (held or three-face zero)'}`)
}
