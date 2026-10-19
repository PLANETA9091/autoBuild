#!/usr/bin/env node
// (v0.976.278) THE SERVER ADVANCEMENT'S OWN ACHIEVEMENT MASS - the
// fieldproof: the ten REAL server-console faces' own logs the census
// re-reads, the raw cells the regex independently re-prices, the two
// reads must agree face by face (census == raw, zero mismatches) -
// then the REAL eight three-face windows the word itself prices live.
// Usage: node scripts/fieldread-advancement-1643.mjs <f478> <f479> <f480> <f481> <f482> <f483> <f484> <f485> <f486> <f487>
import { readFileSync } from 'node:fs'
import { advancementCensus, advancementTrendRow } from '../src/lib/advancementtrend.mjs'

const RAW_RE = /: (F\d+) has made the advancement \[([A-Za-z ]+)\]$/ // the independent re-read (a second lane the agreement prices)
// the CI log's own envelope - each line rides the runner's own UTC stamp
// prefix, the face's own content starts after it (the family's own strip)
const STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z /
const stripStamp = (lines) => lines.map((l) => l.replace(STAMP_RE, ''))

const faces = process.argv.slice(2)
if (faces.length !== 10) {
  console.error('need ten server-console face logs: F478 F479 F480 F481 F482 F483 F484 F485 F486 F487')
  process.exit(1)
}
const names = ['F478', 'F479', 'F480', 'F481', 'F482', 'F483', 'F484', 'F485', 'F486', 'F487']
const linesOf = faces.map((p) => stripStamp(readFileSync(p, 'utf8').split('\n')))
let mismatch = 0
const cells = []
for (let i = 0; i < 10; i++) {
  const c = advancementCensus(linesOf[i])
  // the raw re-read: the face's own advancement lines the independent
  // lane re-counts (the sum and the distinct breadth)
  let rawAdv = 0
  let rawNames = 0
  const seen = new Set()
  for (const l of linesOf[i]) {
    if (typeof l !== 'string') continue
    const m = RAW_RE.exec(l)
    if (!m) continue
    if (!/^\[\d{2}:\d{2}:\d{2}\] \[Server thread\/INFO\]/.test(l)) continue
    rawAdv += 1
    seen.add(m[2])
  }
  rawNames = seen.size
  const ok = c !== null && c.advancements === rawAdv && c.names === rawNames
  if (!ok) mismatch++
  cells.push(c)
  console.log(`${names[i]}: census=${c ? `advancements=${c.advancements} names=${c.names}` : 'null'} raw=${rawAdv}/${rawNames} ${ok ? 'OK' : 'MISMATCH'}`)
}
console.log(`FIELDPROOF ${10 - mismatch}/10 census==raw ${mismatch === 0 ? 'zero mismatches' : `${mismatch} MISMATCHES`}`)
// the REAL eight three-face windows - the word born speaking
for (let i = 0; i + 2 < 10; i++) {
  const row = advancementTrendRow({ back: cells[i], prev: cells[i + 1], cur: cells[i + 2] })
  console.log(`W${names[i]}-${names[i + 1]}-${names[i + 2]}: ${row === null ? '(null - the honest silence)' : row.slice(0, 118)}`)
}
