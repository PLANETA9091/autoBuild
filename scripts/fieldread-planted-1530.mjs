#!/usr/bin/env node
// (v0.976.274) THE COUNTERS PLANTED CELL'S OWN FARM MASS - the
// fieldproof: the eight REAL fleet faces' own logs the census re-reads,
// the raw cells the regex independently re-prices, the two reads must
// agree face by face (census == raw, zero mismatches) - then the REAL
// six three-face windows the word itself prices live.
// Usage: node scripts/fieldread-planted-1530.mjs <f478> <f479> <f480> <f481> <f482> <f483> <f484> <f485>
import { readFileSync } from 'node:fs'
import { counterPlantedCensus, counterPlantedTrendRow } from '../src/lib/countersplantedtrend.mjs'

const RAW_RE = / planted=(0|[1-9]\d*)(?=$| )/ // the independent re-read (the census's own priced cell, a second lane the agreement prices)
// the CI log's own envelope - each line rides the runner's own UTC stamp
// prefix, the face's own content starts after it (the family's own strip)
const STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z /
const stripStamp = (lines) => lines.map((l) => l.replace(STAMP_RE, ''))

const faces = process.argv.slice(2)
if (faces.length !== 8) {
  console.error('need eight face logs: F478 F479 F480 F481 F482 F483 F484 F485')
  process.exit(1)
}
const names = ['F478', 'F479', 'F480', 'F481', 'F482', 'F483', 'F484', 'F485']
const linesOf = faces.map((p) => stripStamp(readFileSync(p, 'utf8').split('\n')))
let mismatch = 0
const cells = []
for (let i = 0; i < 8; i++) {
  const c = counterPlantedCensus(linesOf[i])
  // the raw re-read: the LAST counters-shaped line's own planted cell
  let raw = null
  for (const l of linesOf[i]) {
    if (typeof l !== 'string') continue
    if (!/^bots=\d+ spawned=\d+/.test(l)) continue
    const m = RAW_RE.exec(l)
    if (m) raw = { planted: Number(m[1]) }
  }
  const ok = c !== null && raw !== null && c.planted === raw.planted
  if (!ok) mismatch++
  cells.push(c)
  console.log(`${names[i]}: census=${c ? `planted=${c.planted}` : 'null'} raw=${raw ? raw.planted : 'null'} ${ok ? 'OK' : 'MISMATCH'}`)
}
console.log(`FIELDPROOF ${8 - mismatch}/8 census==raw ${mismatch === 0 ? 'zero mismatches' : `${mismatch} MISMATCHES`}`)
// the REAL six three-face windows - the word born speaking
for (let i = 0; i + 2 < 8; i++) {
  const row = counterPlantedTrendRow({ back: cells[i], prev: cells[i + 1], cur: cells[i + 2] })
  console.log(`W${names[i]}-${names[i + 1]}-${names[i + 2]}: ${row === null ? '(null - the honest silence)' : row.slice(0, 118)}`)
}
