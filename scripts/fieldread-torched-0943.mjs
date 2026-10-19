#!/usr/bin/env node
// (v0.976.261, fire-0943) fieldread-torched: read the torched cell's
// own night-light mass across the cached faces - the census's own
// fieldproof (census==raw, zero mismatches, the house law) + the
// pair's own real read (the two-face arc the sandbox holds).
import { readFileSync, existsSync } from 'node:fs'
import { torchedCensus, torchedTrendRow } from '../src/lib/torchedtrend.mjs'

const faces = [
  ['faceF479', '/home/z/f479logs/bigfleet.log'],
  ['faceF480', '/home/z/f479logs/f480-bigfleet.log']
]

// the CI job log's own envelope: every line rides a '2026-10-19T00:23:54.7165420Z '
// stamp prefix - the face's own content starts after it (the cached
// /home/z/faces/* files carry the content bare; the raw API logs carry the stamp)
const STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z /
const faceLines = lines => lines.map(l => l.replace(STAMP_RE, ''))

// the raw counters cell band the emitter prints (the census's own
// three-cell window the fieldread re-reads independently)
const RAW_RE = / planted=(0|[1-9]\d*) torched=(0|[1-9]\d*) fights=(0|[1-9]\d*) /

let mismatches = 0
const censusCells = []
for (const [name, path] of faces) {
  if (!existsSync(path)) {
    console.log(`${name}: log missing (${path}) - skipped`)
    continue
  }
  const lines = faceLines(readFileSync(path, 'utf8').split('\n'))
  const raw = lines.filter(l => RAW_RE.test(l))
  const c = torchedCensus(lines)
  censusCells.push({ name, c, rawCount: raw.length })
  if (raw.length === 0) {
    console.log(`${name}: no counters print - census ${JSON.stringify(c)} (the lawful zero)`)
    continue
  }
  // the counters line speaks once per face - one raw print the census must hold
  const last = raw[raw.length - 1]
  const parts = RAW_RE.exec(last)
  const rawCells = { planted: Number(parts[1]), torched: Number(parts[2]) }
  const ok = c.planted === rawCells.planted && c.torched === rawCells.torched
  if (!ok) mismatches++
  console.log(`${name}: raw ${raw.length} print(s), census ${JSON.stringify(c)}, raw ${JSON.stringify(rawCells)} - ${ok ? 'MATCH' : 'MISMATCH'}`)
}

// the pair's own real read (the two-face arc the sandbox holds): the
// swell the pair prices (F479's 1 -> F480's 19), the three-face W-window
// waits for the next fire's cached two-back face (the carrier's own null
// pass - no synthetic back ever rides the field read)
if (censusCells.length === 2) {
  const [f479, f480] = censusCells
  const up = f480.c.torched - f479.c.torched
  console.log(`the pair's own arc: torched ${f479.c.torched} -> ${f480.c.torched} (${up >= 0 ? '+' : ''}${up}) - ${up > 0 ? 'the night light armed' : up < 0 ? 'the night light rested' : 'the light held'}`)
  console.log(`W-window: the two-back face (F478) has no cached log in this sandbox - the row read rides the next fire's cached faces (the carrier's own null pass)`)
}

console.log(`FIELDPROOF: ${censusCells.length} face(s) with the print, ${mismatches} mismatch(es) - ${mismatches === 0 ? 'ZERO mismatches, the word rides' : 'THE WORD LIES - fix before push'}`)
process.exit(mismatches === 0 ? 0 : 1)
