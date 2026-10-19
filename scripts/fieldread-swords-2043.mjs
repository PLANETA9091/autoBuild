#!/usr/bin/env node
// (v0.976.285) FIELDPROOF - the counters swords cell's own forge
// mass the field's own proof prices: the fleet faces' own logs the
// census re-reads, the census==raw the strict grammar re-spokes, the
// REAL windows the word re-prices. The face paths ride argv (any
// order the caller hands - the arc order the faces' own F-numbers
// hold). The CI log timestamp envelope ('2026-10-19T11:21:11.1146429Z
// ') stripped on read - the fieldread-nullrow-0843 lesson the family
// keeps. The F491 face rides the fleet19-log artifact of run
// 39250996033; the F478..F490 faces the family's own committed pins
// witness when the CI logs the reset sandbox lost (the .277
// precedent).

import { readFileSync } from 'node:fs'
import { counterSwordsCensus, counterSwordsTrendRow } from '../src/lib/counterswordstrend.mjs'

const STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z /
const RAW_RE = /upgraded=(\d+) swords=(\d+)/

const faces = process.argv.slice(2)
if (faces.length < 1) {
  console.error('usage: node scripts/fieldread-swords-2043.mjs <face478.log> <face479.log> ... (arc order)')
  process.exit(2)
}

let mismatches = 0
const censuses = []
for (const path of faces) {
  const lines = readFileSync(path, 'utf8').split('\n').map((l) => l.replace(STAMP_RE, ''))
  const census = counterSwordsCensus(lines)
  // the raw read: the LAST counters line's own swords cell, the
  // census's own LAST-PRINT-WINS the mirror law
  let raw = null
  for (const l of lines) {
    const m = RAW_RE.exec(l)
    if (m && /bots=\d+ spawned=\d+/.test(l)) raw = { swords: Number(m[2]), upgraded: Number(m[1]) }
  }
  const ok = census && raw && census.swords === raw.swords && census.upgraded === raw.upgraded
  if (!ok) mismatches++
  censuses.push(census)
  console.log(`FIELDPROOF ${path.split('/').pop()}: census=${JSON.stringify(census)} raw=${JSON.stringify(raw)} ${ok ? 'OK' : 'MISMATCH'}`)
}

// the REAL windows the word re-prices (the family's own shape law)
const w = (i) => ({ back: censuses[i], prev: censuses[i + 1], cur: censuses[i + 2] })
for (let i = 0; i + 2 < censuses.length; i++) {
  const row = counterSwordsTrendRow(w(i))
  console.log(`W+${i}: ${row === null ? 'null (the honest silence / the lawful zero)' : row}`)
}

console.log(mismatches === 0 ? `FIELDPROOF ${censuses.length}/${censuses.length} census==raw ZERO mismatches` : `FIELDPROOF FAILED: ${mismatches} mismatches`)
process.exit(mismatches === 0 ? 0 : 1)
