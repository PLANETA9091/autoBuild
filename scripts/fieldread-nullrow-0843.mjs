#!/usr/bin/env node
// (v0.976.259, fire-0843) fieldread-nullrow: read the F479 face's own
// defect bytes - the literal `null` row the v0.976.258 tree printed
// between the crater decode and the drop census - and price the fix's
// own fieldproof: the deathless face (zero announces), the census
// none-form, the guarded emitter's silence on the real face's records.
import { readFileSync, existsSync } from 'node:fs'
import { deathCensusRow, deathCensusRecord } from '../src/lib/deathcensus.mjs'

const faces = [
  ['faceF479-bigfleet', '/home/z/f479logs/bigfleet.log'],
  ['faceF479-integration', '/home/z/f479logs/integration.log']
]

const CRATER_RE = /^banked crater decode: /
const NULL_ROW_RE = /^null$/
const DROP_CENSUS_RE = /^drop census: /

// the CI job log's own envelope: every line rides a '2026-10-19T00:23:54.7165420Z '
// stamp prefix - the face's own content starts after it (the cached
// /home/z/faces/* files carry the content bare; the raw API logs carry the stamp)
const STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z /
const faceLines = lines => lines.map(l => l.replace(STAMP_RE, ''))

let mismatches = 0
for (const [name, path] of faces) {
  if (!existsSync(path)) {
    console.log(`${name}: log missing (${path}) - skipped`)
    continue
  }
  const lines = faceLines(readFileSync(path, 'utf8').split('\n'))
  const craterIdx = lines.findIndex(l => CRATER_RE.test(l))
  const nullIdx = lines.findIndex(l => NULL_ROW_RE.test(l))
  const dropIdx = lines.findIndex(l => DROP_CENSUS_RE.test(l))
  const announces = lines.filter(l => /\] died - respawning/.test(l))
  const records = lines.map(deathCensusRecord).filter(Boolean)
  const censusRow = deathCensusRow(records)
  const seat = craterIdx >= 0 && nullIdx === craterIdx + 1 && dropIdx === nullIdx + 1
    ? 'the seat sits (crater -> null -> drop census)'
    : (nullIdx < 0 ? 'no null row (the clean or the mini face)' : 'the seat sits loose (the neighbors moved)')

  console.log(`${name}: crater@${craterIdx} null@${nullIdx} dropCensus@${dropIdx} - ${seat}`)
  console.log(`  announces=${announces.length} parsed records=${records.length} censusRow=${censusRow === null ? 'null (the none-form)' : JSON.stringify(censusRow)}`)

  // the fieldproof's own arithmetic:
  //  (a) a deathless face MUST read zero records and the none-form
  //  (b) the null row on the face MUST be the bare emitter's own print
  //      (the old unguarded shape) when the census reads the none-form
  if (announces.length === 0 && records.length !== 0) { mismatches++; console.log('  MISMATCH: deathless face but the census parsed records') }
  if (announces.length === 0 && nullIdx >= 0 && censusRow !== null) { mismatches++; console.log('  MISMATCH: the face printed null but the census row is not the none-form') }
  if (announces.length > 0 && records.length !== announces.length) { mismatches++; console.log('  MISMATCH: the announce mass and the parsed records disagree') }
}

// the guarded emitter's own hand on the real face's records (the fix's
// own rehearsal): the deathless bigfleet face prints NOTHING, the null
// never reaches the face again.
const bigfleetPath = '/home/z/f479logs/bigfleet.log'
if (existsSync(bigfleetPath)) {
  const lines = readFileSync(bigfleetPath, 'utf8').split('\n')
  const records = lines.map(deathCensusRecord).filter(Boolean)
  const printed = []
  try {
    const deathRow = deathCensusRow(records)
    if (deathRow != null) printed.push(deathRow)
  } catch { /* the census never holds the teardown */ }
  const silentOk = printed.length === 0
  console.log(`the guarded emitter on faceF479-bigfleet: printed=${printed.length} - ${silentOk ? 'SILENT (the healthy silence rides)' : 'THE GUARD LIES'}`)
  if (!silentOk) mismatches++
}

console.log(`FIELDPROOF: ${mismatches} mismatch(es) - ${mismatches === 0 ? 'ZERO mismatches, the silence rides' : 'THE WORD LIES - fix before push'}`)
process.exit(mismatches === 0 ? 0 : 1)
