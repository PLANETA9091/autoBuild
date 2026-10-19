#!/usr/bin/env node
// (v0.976.283) FIELDPROOF - the counters recovered cell's own cure
// mass the field's own proof prices: the six fleet faces' own logs the
// census re-reads, the census==raw the strict grammar re-spokes, the
// REAL windows the word re-prices. The face paths ride argv (the
// F485..F490 bigfleet/fleet19 job logs, any order). The CI log
// timestamp envelope ('2026-10-19T11:21:11.1146429Z ') stripped on
// read - the fieldread-nullrow-0843 lesson the family keeps.

import { readFileSync } from 'node:fs'
import { counterRecoveredCensus, counterRecoveredTrendRow } from '../src/lib/counterrecoveredtrend.mjs'

const STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z /
const RAW_RE = /recovered=(\d+) reboots=(\d+)/

const faces = process.argv.slice(2)
if (faces.length < 3) {
  console.error('usage: node scripts/fieldread-recovered-1943.mjs <face485.log> <face486.log> ... <face490.log>')
  process.exit(2)
}

let mismatches = 0
const censuses = []
for (const path of faces) {
  const lines = readFileSync(path, 'utf8').split('\n').map((l) => l.replace(STAMP_RE, ''))
  const census = counterRecoveredCensus(lines)
  // the raw read: the LAST counters line's own recovered cell, the
  // census's own LAST-PRINT-WINS the mirror law
  let raw = null
  for (const l of lines) {
    const m = RAW_RE.exec(l)
    if (m && /bots=\d+ spawned=\d+/.test(l)) raw = { recovered: Number(m[1]), kicks: Number(l.match(/kicks=(\d+)/)[1]) }
  }
  const ok = census && raw && census.recovered === raw.recovered && census.kicks === raw.kicks
  if (!ok) mismatches++
  censuses.push(census)
  console.log(`FIELDPROOF ${path.split('/').pop()}: census=${JSON.stringify(census)} raw=${JSON.stringify(raw)} ${ok ? 'OK' : 'MISMATCH'}`)
}

// the REAL windows the word re-prices (the family's own shape law)
const w = (i) => ({ back: censuses[i], prev: censuses[i + 1], cur: censuses[i + 2] })
for (let i = 0; i + 2 < censuses.length; i++) {
  const row = counterRecoveredTrendRow(w(i))
  console.log(`W+${i}: ${row === null ? 'null (the honest silence / the lawful zero)' : row}`)
}

console.log(mismatches === 0 ? `FIELDPROOF ${censuses.length}/${censuses.length} census==raw ZERO mismatches` : `FIELDPROOF FAILED: ${mismatches} mismatches`)
process.exit(mismatches === 0 ? 0 : 1)
