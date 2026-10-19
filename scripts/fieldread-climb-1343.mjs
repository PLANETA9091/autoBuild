#!/usr/bin/env node
// (v0.976.270) FIELDPROOF - the counters climb cell's own scaffold
// mass the field's own proof prices: the six fleet faces' own logs the
// census re-reads, the census==raw the strict grammar re-spokes, the
// REAL windows the word re-prices. The face paths ride argv (the
// F478..F483 bigfleet job logs, any order). The CI log timestamp
// envelope ('2026-10-19T00:23:54.7165420Z ') stripped on read - the
// fieldread-nullrow-0843 lesson the family keeps.

import { readFileSync } from 'node:fs'
import { counterClimbCensus, counterClimbTrendRow } from '../src/lib/counterclimbstrend.mjs'

const STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z /
const RAW_RE = /climbs=(\d+) banked=(\d+)/

const faces = process.argv.slice(2)
if (faces.length < 3) {
  console.error('usage: node scripts/fieldread-climb-1343.mjs <face478.log> <face479.log> ... <face483.log>')
  process.exit(2)
}

let mismatches = 0
const censuses = []
for (const path of faces) {
  const lines = readFileSync(path, 'utf8').split('\n').map((l) => l.replace(STAMP_RE, ''))
  const census = counterClimbCensus(lines)
  // the raw read: the LAST counters line's own climbs cell, the
  // census's own LAST-PRINT-WINS the mirror law
  let raw = null
  for (const l of lines) {
    const m = RAW_RE.exec(l)
    if (m && /bots=\d+ spawned=\d+/.test(l)) raw = { climbs: Number(m[1]), swords: Number(l.match(/swords=(\d+)/)[1]) }
  }
  const ok = census && raw && census.climbs === raw.climbs && census.swords === raw.swords
  if (!ok) mismatches++
  censuses.push(census)
  console.log(`FIELDPROOF ${path.split('/').pop()}: census=${JSON.stringify(census)} raw=${JSON.stringify(raw)} ${ok ? 'OK' : 'MISMATCH'}`)
}

// the REAL windows the word re-prices (the family's own shape law)
const w = (i) => ({ back: censuses[i], prev: censuses[i + 1], cur: censuses[i + 2] })
const names = ['W478-479-480', 'W479-480-481', 'W480-481-482', 'W481-482-483']
for (let i = 0; i + 2 < censuses.length; i++) {
  const row = counterClimbTrendRow(w(i))
  console.log(`${names[i] || `W+${i}`}: ${row === null ? 'null (the honest silence / the lawful zero)' : row}`)
}

console.log(mismatches === 0 ? `FIELDPROOF ${censuses.length}/${censuses.length} census==raw ZERO mismatches` : `FIELDPROOF FAILED: ${mismatches} mismatches`)
process.exit(mismatches === 0 ? 0 : 1)
