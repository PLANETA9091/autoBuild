#!/usr/bin/env node
// (v0.976.273) THE COUNTERS FIGHTS CELL'S OWN COMBAT MASS - the
// fieldproof: the six REAL fleet faces' own logs the census re-reads,
// the raw cells the regex independently re-prices, the two reads must
// agree face by face (census == raw, zero mismatches) - then the REAL
// four three-face windows the word itself prices live.
// Usage: node scripts/fieldread-fights-1500.mjs <f478> <f479> <f480> <f481> <f482> <f483>
import { readFileSync } from 'node:fs'
import { counterFightsCensus, counterFightsTrendRow } from '../src/lib/counterfightstrend.mjs'

const RAW_RE = / fights=(0|[1-9]\d*) kills=(\d+) shelters=(0|[1-9]\d*)(?=$| )/ // the independent re-read (the census's own priced pair, a second lane the agreement prices)
// the CI log's own envelope - each line rides the runner's own UTC stamp
// prefix, the face's own content starts after it (the family's own strip)
const STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z /
const stripStamp = (lines) => lines.map((l) => l.replace(STAMP_RE, ''))

const faces = process.argv.slice(2)
if (faces.length !== 6) {
  console.error('need six face logs: F478 F479 F480 F481 F482 F483')
  process.exit(1)
}
const names = ['F478', 'F479', 'F480', 'F481', 'F482', 'F483']
const linesOf = faces.map((p) => stripStamp(readFileSync(p, 'utf8').split('\n')))
let mismatch = 0
const cells = []
for (let i = 0; i < 6; i++) {
  const c = counterFightsCensus(linesOf[i])
  // the raw re-read: the LAST counters-shaped line's own fights pair
  let raw = null
  for (const l of linesOf[i]) {
    if (typeof l !== 'string') continue
    if (!/^bots=\d+ spawned=\d+/.test(l)) continue
    const m = RAW_RE.exec(l)
    if (m) raw = { fights: Number(m[1]), shelters: Number(m[3]) }
  }
  const ok = c !== null && raw !== null && c.fights === raw.fights && c.shelters === raw.shelters
  if (!ok) mismatch++
  cells.push(c)
  console.log(`${names[i]}: census=${c ? `fights=${c.fights} shelters=${c.shelters}` : 'null'} raw=${raw ? `${raw.fights}/${raw.shelters}` : 'null'} ${ok ? 'OK' : 'MISMATCH'}`)
}
console.log(`FIELDPROOF ${6 - mismatch}/6 census==raw ${mismatch === 0 ? 'zero mismatches' : `${mismatch} MISMATCHES`}`)
// the REAL four three-face windows - the word born speaking
for (let i = 0; i + 2 < 6; i++) {
  const row = counterFightsTrendRow({ back: cells[i], prev: cells[i + 1], cur: cells[i + 2] })
  console.log(`W${names[i]}-${names[i + 1]}-${names[i + 2]}: ${row === null ? '(null - the honest silence)' : row.slice(0, 118)}`)
}
