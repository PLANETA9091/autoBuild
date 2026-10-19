#!/usr/bin/env node
// (v0.976.280) THE FINAL COLLECTED LINES' OWN GATHERED MASS - the
// fieldproof: the eight REAL fleet faces' own logs the census re-reads,
// the raw cells a second regex lane independently re-prices, the two
// reads must agree face by face (census == raw, zero mismatches) - then
// the REAL six three-face windows the word itself prices live (the
// birth speaks five of the six - the swing-rich arc).
// Usage: node scripts/fieldread-finalcollected-1730.mjs <f478> <f479> <f480> <f481> <f482> <f483> <f484> <f485>
import { readFileSync } from 'node:fs'
import { finalCollectedCensus, finalCollectedTrendRow } from '../src/lib/finalcollectedtrend.mjs'

// the independent re-read (the census's own priced cell, a second lane
// the agreement prices): the collected lines' own got cells, the raw
// sum the loose re-scan implies
const RAW_RE = /  ([a-z_]+) +collected +(\d+)(?: \(\d+\.\d{3}% of [\d,]+\))?$/
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
  const c = finalCollectedCensus(linesOf[i])
  // the raw re-read: the loose scan's own sum the report's collect
  // lines imply (a second lane the strict census must agree with)
  let raw = { total: 0, materials: 0 }
  for (const l of linesOf[i]) {
    if (typeof l !== 'string') continue
    const m = RAW_RE.exec(l)
    if (m) { raw.total += Number(m[2]); raw.materials += 1 }
  }
  const ok = c !== null && c.total === raw.total && c.materials === raw.materials
  if (!ok) mismatch++
  cells.push(c)
  console.log(`${names[i]}: census=${c ? `total=${c.total} materials=${c.materials}` : 'null'} raw=${raw.total}/${raw.materials} ${ok ? 'OK' : 'MISMATCH'}`)
}
console.log(`FIELDPROOF ${8 - mismatch}/8 census==raw ${mismatch === 0 ? 'zero mismatches' : `${mismatch} MISMATCHES`}`)
// the REAL six three-face windows - the birth speaks five of the six
for (let i = 0; i + 2 < 8; i++) {
  const row = finalCollectedTrendRow({ back: cells[i], prev: cells[i + 1], cur: cells[i + 2] })
  console.log(`W${names[i]}-${names[i + 1]}-${names[i + 2]}: ${row === null ? '(null - the honest silence)' : row.slice(0, 118)}`)
}
