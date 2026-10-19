#!/usr/bin/env node
// (v0.976.281) THE JVM GC'S OWN PAUSE MASS - the fieldproof: the
// thirteen REAL server-console faces' own logs the census re-reads,
// the raw cells the grep lane independently re-prices, the two reads
// must agree face by face (census == raw, zero mismatches) - then the
// REAL eleven three-face windows the word itself prices live.
// Usage: node scripts/fieldread-gcpause-1743.mjs <f478> <f479> <f480> <f481> <f482> <f483> <f484> <f485> <f486> <f487> <f487b> <f488> <f489>
import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { gcPauseCensus, gcPauseTrendRow } from '../src/lib/gcpausetrend.mjs'

// the CI log's own envelope - each line rides the runner's own UTC stamp
// prefix, the face's own content starts after it (the family's own strip)
const STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z /
const stripStamp = (lines) => lines.map((l) => l.replace(STAMP_RE, ''))

const faces = process.argv.slice(2)
if (faces.length !== 13) {
  console.error('need thirteen server-console face logs: F478 F479 F480 F481 F482 F483 F484 F485 F486 F487 F487b F488 F489')
  process.exit(1)
}
const names = ['F478', 'F479', 'F480', 'F481', 'F482', 'F483', 'F484', 'F485', 'F486', 'F487', 'F487b', 'F488', 'F489']
const linesOf = faces.map((p) => stripStamp(readFileSync(p, 'utf8').split('\n')))
let mismatch = 0
const cells = []
for (let i = 0; i < 13; i++) {
  const c = gcPauseCensus(linesOf[i])
  // the raw re-read: the face's own pause lines the grep lane
  // independently re-counts (the strict shape the shell prices)
  const raw = Number(execSync(
    `grep -cE '^\\[[0-9]+\\.[0-9]{3}s\\]\\[info\\]\\[gc\\] GC\\([0-9]+\\) Pause Young \\((Normal|Concurrent Start|Mixed|Prepare Mixed)\\) \\([^)]*\\)( \\([^)]+\\))? [0-9]+M->[0-9]+M\\([0-9]+M\\) [0-9]+\\.[0-9]+ms$' ${faces[i]} || true`
  ).toString().trim() || '0')
  const ok = c !== null && c.pauses === raw
  if (!ok) mismatch++
  cells.push(c)
  console.log(`${names[i]}: census=${c ? `pauses=${c.pauses} kinds=${c.kinds} maxPause=${c.maxPause.toFixed(3)} maxGcNum=${c.maxGcNum}` : 'null'} raw=${raw} ${ok ? 'OK' : 'MISMATCH'}`)
}
console.log(`FIELDPROOF ${13 - mismatch}/13 census==raw ${mismatch === 0 ? 'zero mismatches' : `${mismatch} MISMATCHES`}`)
// the REAL eleven three-face windows - the word born speaking
let speaks = 0
for (let i = 0; i + 2 < 13; i++) {
  const row = gcPauseTrendRow({ back: cells[i], prev: cells[i + 1], cur: cells[i + 2] })
  if (row) {
    speaks++
    console.log(`W${names[i]}-${names[i + 1]}-${names[i + 2]}: ${row.slice(0, 120)}...`)
  } else {
    console.log(`W${names[i]}-${names[i + 1]}-${names[i + 2]}: null (the held step / the lawful silence)`)
  }
}
console.log(`THE REAL WINDOWS: ${speaks}/11 speak ${speaks === 11 ? '- THE WORD BORN SPEAKING ON ALL ELEVEN REAL WINDOWS (the family strongest birth)' : ''}`)
if (mismatch > 0) process.exit(1)
