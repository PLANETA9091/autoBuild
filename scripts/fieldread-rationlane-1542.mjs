#!/usr/bin/env node
// (v0.976.228 fire 1542) THE RATION LANE CENSUS'S OWN FIELD READ - the
// census's own proof over the faces: rationLaneCount over each face's
// own lines must equal the raw strict-grammar count (the SAME regex
// pair the word holds - one parser, never a fork) - zero mismatches
// the field's own law keeps.
// usage: node scripts/fieldread-rationlane-1542.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { rationLaneCount } from '../src/lib/rationlanetrend.mjs'

const dir = process.argv[2] || 'faces'
if (!statSync(dir, { throwIfNoEntry: false })?.isDirectory()) { console.error('faces dir missing'); process.exit(1) }
const ASK_RE = /^F\d+ \[F\d+\] ration: eating [a-z_]+ \(hunger (?:\?|\d+), hp (?:\?|\d+(?:\.\d+)?), (?:hunger-guard|health-guard|hunger-guard\+health-guard)\)$/
const OUT_RE = /^F\d+ \[F\d+\] ration: (?:ate|failed) [a-z_]+ \(hunger (?:\?|\d+) -> (?:\?|\d+), hp (?:\?|\d+(?:\.\d+)?) -> (?:\?|\d+(?:\.\d+)?)\)$/
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))
let mismatches = 0, total = 0
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  const census = rationLaneCount(lines)
  let raw = 0
  for (const l of lines) { if (typeof l === 'string' && (ASK_RE.test(l) || OUT_RE.test(l))) raw++ }
  total += raw
  if (census !== raw) { mismatches++; console.log('MISMATCH', f, 'census=' + census, 'raw=' + raw) }
}
console.log('field read: ' + faces.length + ' faces, ' + total + 'u, mismatches=' + mismatches)
if (mismatches !== 0) process.exit(1)
console.log('FIELD PROOF ' + faces.length + '/' + faces.length + ' census==raw zero mismatches HOLDS')
