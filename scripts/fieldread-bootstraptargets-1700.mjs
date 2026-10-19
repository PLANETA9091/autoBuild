#!/usr/bin/env node
// (v0.976.279) THE BOOTSTRAP TARGETS LINE'S OWN ASSIGNMENT MASS - the
// fieldproof: the eight REAL fleet faces' own logs the census re-reads,
// the raw cells a second regex lane independently re-prices, the two
// reads must agree face by face (census == raw, zero mismatches) - then
// the REAL six three-face windows the word itself prices live (the
// whole arc rode 4 - the birth the held law's own honest silence
// prices).
// Usage: node scripts/fieldread-bootstraptargets-1700.mjs <f478> <f479> <f480> <f481> <f482> <f483> <f484> <f485>
import { readFileSync } from 'node:fs'
import { bootstrapTargetsCensus, bootstrapTargetsTrendRow } from '../src/lib/bootstraptargetstrend.mjs'

// the independent re-read (the census's own priced cell, a second lane
// the agreement prices): the launch line's own targets list, the raw
// count the comma-space join implies
const RAW_RE = /^launching (0|[1-9]\d*) bots for (0|[1-9]\d*)s -> targets ([a-z_]+(?:, [a-z_]+)*)(?: \(\+1 ground scout\))?(?=$| )/
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
  const c = bootstrapTargetsCensus(linesOf[i])
  // the raw re-read: the LAST launch-shaped line's own targets cell
  let raw = null
  for (const l of linesOf[i]) {
    if (typeof l !== 'string') continue
    const m = RAW_RE.exec(l)
    if (m) raw = { targetCount: m[3].split(', ').length, bots: Number(m[1]), seconds: Number(m[2]) }
  }
  const ok = c !== null && raw !== null && c.targetCount === raw.targetCount && c.bots === raw.bots && c.seconds === raw.seconds
  if (!ok) mismatch++
  cells.push(c)
  console.log(`${names[i]}: census=${c ? `targets=${c.targetCount} bots=${c.bots} secs=${c.seconds} scout=${c.scout}` : 'null'} raw=${raw ? raw.targetCount : 'null'} ${ok ? 'OK' : 'MISMATCH'}`)
}
console.log(`FIELDPROOF ${8 - mismatch}/8 census==raw ${mismatch === 0 ? 'zero mismatches' : `${mismatch} MISMATCHES`}`)
// the REAL six three-face windows - the word born in the held law's
// own honest silence (the whole arc rode 4)
for (let i = 0; i + 2 < 8; i++) {
  const row = bootstrapTargetsTrendRow({ back: cells[i], prev: cells[i + 1], cur: cells[i + 2] })
  console.log(`W${names[i]}-${names[i + 1]}-${names[i + 2]}: ${row === null ? '(null - the honest silence)' : row.slice(0, 118)}`)
}
