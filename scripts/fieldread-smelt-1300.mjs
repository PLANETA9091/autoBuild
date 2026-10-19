#!/usr/bin/env node
// (v0.976.269) THE COUNTERS SMELTED CELL'S OWN FURNACE MASS - the
// fieldproof: the five REAL fleet faces' own logs the census re-reads,
// the raw cells the regex independently re-prices, the two reads must
// agree face by face (census == raw, zero mismatches) - then the REAL
// three-face windows the word itself prices live.
// Usage: node scripts/fieldread-smelt-1300.mjs <f478.log> <f479.log> <f480.log> <f481.log> <f482.log>
import { readFileSync } from 'node:fs'
import { counterSmeltedCensus, counterSmeltedTrendRow } from '../src/lib/countersmeltedtrend.mjs'

const RAW_RE = / smelted=(0|[1-9]\d*)(?=$| )/ // the independent re-read (the census's own priced cell, a second lane the agreement prices)
// the CI log's own envelope - each line rides the runner's own UTC stamp
// prefix, the face's own content starts after it (the family's own strip)
const STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z /
const stripStamp = (lines) => lines.map((l) => l.replace(STAMP_RE, ''))

const faces = process.argv.slice(2)
if (faces.length !== 5) {
  console.error('need five face logs: F478 F479 F480 F481 F482')
  process.exit(1)
}
const names = ['F478', 'F479', 'F480', 'F481', 'F482']
const linesOf = faces.map((p) => stripStamp(readFileSync(p, 'utf8').split('\n')))
let mismatch = 0
const cells = []
for (let i = 0; i < 5; i++) {
  const c = counterSmeltedCensus(linesOf[i])
  // the raw re-read: the LAST counters-shaped line's own smelted cell
  let raw = null
  for (const l of linesOf[i]) {
    if (typeof l !== 'string') continue
    if (!/^bots=\d+ spawned=\d+/.test(l)) continue
    const m = RAW_RE.exec(l)
    if (m) raw = Number(m[1])
  }
  const ok = c !== null && raw !== null && c.smelted === raw
  if (!ok) mismatch++
  cells.push(c)
  console.log(`${names[i]}: census=${c ? `smelted=${c.smelted} banked=${c.banked}` : 'null'} raw=${raw} ${ok ? 'OK' : 'MISMATCH'}`)
}
console.log(`FIELDPROOF ${5 - mismatch}/5 census==raw ${mismatch === 0 ? 'zero mismatches' : `${mismatch} MISMATCHES`}`)
// the REAL three-face windows - the word born speaking
for (let i = 0; i + 2 < 5; i++) {
  const row = counterSmeltedTrendRow({ back: cells[i], prev: cells[i + 1], cur: cells[i + 2] })
  console.log(`W${names[i]}-${names[i + 1]}-${names[i + 2]}: ${row === null ? '(null - the honest silence)' : row.slice(0, 120)}`)
}
