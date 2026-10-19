#!/usr/bin/env node
// (v0.976.265, fire-1143) fieldread-kills: read the kills cell's own
// tally mass across the cached faces - the census's own fieldproof
// (census==raw, zero mismatches, the house law) + the W-windows' own
// live read (the family's own three-face arcs).
import { readFileSync, existsSync } from 'node:fs'
import { killsCensus, killsTrendRow } from '../src/lib/killstrend.mjs'

const faces = [
  ['faceF478', '/home/z/f479logs/f478-bigfleet.log'],
  ['faceF479', '/home/z/f479logs/bigfleet.log'],
  ['faceF480', '/home/z/f479logs/f480-bigfleet.log'],
  ['faceF481', '/home/z/f479logs/f481-bigfleet.log'],
  ['faceF482', '/home/z/f479logs/f482-bigfleet.log']
]

// the CI job log's own envelope: every line rides a '2026-10-19T00:23:54.7165420Z '
// stamp prefix - the face's own content starts after it
const STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z /
const faceLines = lines => lines.map(l => l.replace(STAMP_RE, ''))

// the raw kills cell band the emitter prints (the census's own two-cell
// window the fieldread re-reads independently)
const RAW_RE = / kills=(0|[1-9]\d*) shelters=(0|[1-9]\d*)(?=$| )/

let mismatches = 0
const censusCells = []
for (const [name, path] of faces) {
  if (!existsSync(path)) {
    console.log(`${name}: log missing (${path}) - skipped`)
    continue
  }
  const lines = faceLines(readFileSync(path, 'utf8').split('\n'))
  const raw = lines.filter(l => RAW_RE.test(l))
  const c = killsCensus(lines)
  censusCells.push({ name, c, rawCount: raw.length })
  if (raw.length === 0) {
    console.log(`${name}: no counters print - census ${JSON.stringify(c)} (the lawful zero)`)
    continue
  }
  // the counters line speaks once per face - one raw print the census must hold
  const last = raw[raw.length - 1]
  const parts = RAW_RE.exec(last)
  const rawCells = { kills: Number(parts[1]), shelters: Number(parts[2]) }
  const ok = c.kills === rawCells.kills && c.shelters === rawCells.shelters
  if (!ok) mismatches++
  console.log(`${name}: raw ${raw.length} print(s), census ${JSON.stringify(c)}, raw ${JSON.stringify(rawCells)} - ${ok ? 'MATCH' : 'MISMATCH'}`)
}

// the W-windows' own live read (the field's own arc) - the nearest-
// completed law: every face triple the cache holds rides
if (censusCells.length >= 3) {
  for (let i = 0; i + 2 < censusCells.length; i++) {
    const [a, b, c] = [censusCells[i], censusCells[i + 1], censusCells[i + 2]]
    const row = killsTrendRow({ back: a.c, prev: b.c, cur: c.c })
    console.log(`W${a.name.slice(4)}-${b.name.slice(4)}-${c.name.slice(4)} (${a.c.kills} -> ${b.c.kills} -> ${c.c.kills}): ${row ?? 'the honest silence'}`)
  }
}

console.log(`FIELDPROOF: ${censusCells.length} face(s) with the print, ${mismatches} mismatch(es) - ${mismatches === 0 ? 'ZERO mismatches, the word rides' : 'THE WORD LIES - fix before push'}`)
