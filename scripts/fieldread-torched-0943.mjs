#!/usr/bin/env node
// (v0.976.261, fire-0943) fieldread-torched: read the torched cell's
// own night-light mass across the cached faces - the census's own
// fieldproof (census==raw, zero mismatches, the house law) + the
// pair's own real read (the two-face arc the sandbox holds).
import { readFileSync, existsSync } from 'node:fs'
import { torchedCensus, torchedTrendRow } from '../src/lib/torchedtrend.mjs'

const faces = [
  ['faceF478', '/home/z/f479logs/f478-bigfleet.log'],
  ['faceF479', '/home/z/f479logs/bigfleet.log'],
  ['faceF480', '/home/z/f479logs/f480-bigfleet.log'],
  ['faceF481', '/home/z/f479logs/f481-bigfleet.log']
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

// the W-window's own live read (the field's own arc) - the nearest-
// completed law: cur=faceF480, prev=faceF479, back=faceF478 (the F478
// log the artifact fetch re-spoke - the two-back face the sandbox
// cache gained this fire)
if (censusCells.length >= 3) {
  // the nearest-completed window rides every face triple the cache holds
  for (let i = 0; i + 2 < censusCells.length; i++) {
    const [a, b, c] = [censusCells[i], censusCells[i + 1], censusCells[i + 2]]
    const row = torchedTrendRow({ back: a.c, prev: b.c, cur: c.c })
    console.log(`W${a.name.slice(4)}-${b.name.slice(4)}-${c.name.slice(4)} (${a.c.torched} -> ${b.c.torched} -> ${c.c.torched}): ${row ?? 'the honest silence'}`)
  }
}

console.log(`FIELDPROOF: ${censusCells.length} face(s) with the print, ${mismatches} mismatch(es) - ${mismatches === 0 ? 'ZERO mismatches, the word rides' : 'THE WORD LIES - fix before push'}`)
process.exit(mismatches === 0 ? 0 : 1)
