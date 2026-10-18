#!/usr/bin/env node
// (v0.976.226 fire 1442) THE WALK-HOME CENSUS'S OWN FIELD READ - the
// census's own proof over the faces: prePositionWalkHomeCount over
// each face's own lines must equal the raw strict-grammar count (the
// SAME regex the word holds - one parser, never a fork) - zero
// mismatches the field's own law keeps.
// usage: node scripts/fieldread-prepositionwalkhome-1442.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { prePositionWalkHomeCount } from '../src/lib/prepositionwalkhometrend.mjs'

const dir = process.argv[2] || 'faces'
if (!statSync(dir, { throwIfNoEntry: false })?.isDirectory()) { console.error('faces dir missing'); process.exit(1) }
const WALK_HOME_RE = /^F\d+ pre-position: \d+b from yard, t-\d+s - walking home$/
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))
let mismatches = 0, total = 0
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  const census = prePositionWalkHomeCount(lines)
  let raw = 0
  for (const l of lines) { if (typeof l === 'string' && WALK_HOME_RE.test(l)) raw++ }
  total += raw
  if (census !== raw) { mismatches++; console.log('MISMATCH', f, 'census=' + census, 'raw=' + raw) }
}
console.log('field read: ' + faces.length + ' faces, ' + total + 'u, mismatches=' + mismatches)
if (mismatches !== 0) process.exit(1)
console.log('FIELD PROOF ' + faces.length + '/' + faces.length + ' census==raw zero mismatches HOLDS')
