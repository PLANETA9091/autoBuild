#!/usr/bin/env node
// (v0.976.282) THE MATERIAL CELL'S OWN GATHERED MASS - the fieldproof:
// the eight REAL fleet faces' own logs the cell census re-reads, the
// raw cells a second regex lane independently re-prices per material,
// the two reads must agree cell by cell (census == raw, zero
// mismatches, 32 cells) - then the REAL six three-face windows the
// word itself prices live (the sand birth speaks six of the six, the
// gravel helds the honest silence twice).
// Usage: node scripts/fieldread-materialcell-1800.mjs <f478> <f479> <f480> <f481> <f482> <f483> <f484> <f485>
import { readFileSync } from 'node:fs'
import { materialCellCensus, materialCellTrendRow } from '../src/lib/materialcelltrend.mjs'

// the independent re-read (the census's own priced cell, a second lane
// the agreement prices): the named material's own got cell, the raw
// last print the loose re-scan implies
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
const materials = ['sand', 'gravel', 'dirt', 'stone']
const linesOf = faces.map((p) => stripStamp(readFileSync(p, 'utf8').split('\n')))
let mismatch = 0
const cells = []
for (let i = 0; i < 8; i++) {
  const faceCells = {}
  for (const nm of materials) {
    const c = materialCellCensus(linesOf[i], nm)
    // the raw re-read: the loose scan's own last print for the named
    // material (a second lane the strict census must agree with)
    let raw = 0
    for (const l of linesOf[i]) {
      if (typeof l !== 'string') continue
      const m = RAW_RE.exec(l)
      if (m && m[1] === nm) raw = Number(m[2])
    }
    const ok = c !== null && c === raw
    if (!ok) mismatch++
    faceCells[nm] = c
  }
  cells.push(faceCells)
  console.log(`${names[i]}: ${materials.map((nm) => `${nm}=${faceCells[nm]}`).join(' ')}`)
}
console.log(`FIELDPROOF ${32 - mismatch}/32 census==raw ${mismatch === 0 ? 'zero mismatches' : `${mismatch} MISMATCHES`}`)
// the REAL six three-face windows - the sand birth (six of six speak)
for (let i = 0; i + 2 < 8; i++) {
  const row = materialCellTrendRow('sand', { back: cells[i].sand, prev: cells[i + 1].sand, cur: cells[i + 2].sand })
  console.log(`W${names[i]}-${names[i + 1]}-${names[i + 2]} sand: ${row === null ? '(null - the honest silence)' : row.slice(0, 118)}`)
}
// the REAL gravel windows - the held law's own honest silence twice
for (let i = 0; i + 2 < 8; i++) {
  const row = materialCellTrendRow('gravel', { back: cells[i].gravel, prev: cells[i + 1].gravel, cur: cells[i + 2].gravel })
  console.log(`W${names[i]}-${names[i + 1]}-${names[i + 2]} gravel: ${row === null ? '(null - the honest silence)' : row.slice(0, 118)}`)
}
