#!/usr/bin/env node
// (v0.976.287) FIELDPROOF - the counters reboots cell's own rollback
// mass the field's own proof prices: the fleet faces' own logs the
// census re-reads, the census==raw the strict grammar re-spokes, the
// REAL windows the word re-prices. The face paths ride argv (any
// order the caller hands - the arc order the faces' own F-numbers
// hold). The CI log timestamp envelope ('2026-10-19T13:27:00.0000000Z
// ') stripped on read - the fieldread-nullrow-0843 lesson the family
// keeps. The F492 face rides the fleet19-log artifact of run
// 39255972997; the F478..F491 faces the family's own committed pins
// witness when the CI logs the reset sandbox lost (the .277/.285
// precedent).

import { readFileSync } from 'node:fs'
import { counterRebootsCensus, counterRebootsTrendRow } from '../src/lib/counterrebootstrend.mjs'

const STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z /
const RAW_RE = /reboots=(\d+) upgraded=(\d+)/

const faces = process.argv.slice(2)
if (faces.length < 1) {
  console.error('usage: node scripts/fieldread-reboots-2143.mjs <face478.log> <face479.log> ... (arc order)')
  process.exit(2)
}

let mismatches = 0
const censuses = []
for (const path of faces) {
  const lines = readFileSync(path, 'utf8').split('\n').map((l) => l.replace(STAMP_RE, ''))
  const census = counterRebootsCensus(lines)
  // the raw read: the LAST counters line's own reboots cell, the
  // census's own LAST-PRINT-WINS the mirror law
  let raw = null
  for (const l of lines) {
    const m = RAW_RE.exec(l)
    if (m && /bots=\d+ spawned=\d+/.test(l)) raw = { reboots: Number(m[1]), upgraded: Number(m[2]) }
  }
  const ok = census && raw && census.reboots === raw.reboots && census.upgraded === raw.upgraded
  if (!ok) mismatches++
  censuses.push(census)
  console.log(`FIELDPROOF ${path.split('/').pop()}: census=${JSON.stringify(census)} raw=${JSON.stringify(raw)} ${ok ? 'OK' : 'MISMATCH'}`)
}

// the REAL windows the word re-prices (the family's own shape law)
const w = (i) => ({ back: censuses[i], prev: censuses[i + 1], cur: censuses[i + 2] })
for (let i = 0; i + 2 < censuses.length; i++) {
  const row = counterRebootsTrendRow(w(i))
  console.log(`W+${i}: ${row === null ? 'null (the honest silence / the lawful zero)' : row}`)
}

console.log(mismatches === 0 ? `FIELDPROOF ${censuses.length}/${censuses.length} census==raw ZERO mismatches` : `FIELDPROOF FAILED: ${mismatches} mismatches`)
process.exit(mismatches === 0 ? 0 : 1)
