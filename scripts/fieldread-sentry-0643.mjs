#!/usr/bin/env node
// (v0.976.256, fire-0643) fieldread-sentry-per-bot: read the sentry
// attribution row's mass across the cached faces - the census's own
// fieldproof (census==raw, zero mismatches, the house law) + the
// FLEET RESULT cross-check (the r sum IS the rescues cell, the g sum
// IS the airGlitches cell) + the W-window's own live read (the
// family's own three-face arc).
import { readFileSync } from 'node:fs'
import { sentryPerBotCensus, sentryPerBotTrendRow } from '../src/lib/sentryperbottrend.mjs'

const faces = [
  ['face474', '/home/z/faces/face474/fleet19.log'],
  ['face475', '/home/z/faces/face475/fleet19.log'],
  ['face476', '/home/z/faces/face476/fleet19.log'],
  ['face477', '/home/z/faces/face477/fleet19.log']
]
const RAW_RE = /^sentry per-bot: .+ \| (0|[1-9]\d*) g0\/r0$/
const RESCUES_RE = /rescues=(\d+)/
const GLITCHES_RE = /airGlitches=(\d+)/

let mismatches = 0
let facesWithLine = 0
const censusCells = []
for (const [name, path] of faces) {
  const lines = readFileSync(path, 'utf8').split('\n')
  const raw = lines.filter(l => RAW_RE.test(l))
  const c = sentryPerBotCensus(lines)
  censusCells.push(c)
  if (raw.length === 0) {
    console.log(`${name}: no sentry per-bot print - census ${JSON.stringify(c)} (the lawful zero)`)
    continue
  }
  facesWithLine++
  // the LAST raw print the census must hold (LAST-PRINT-WINS)
  const last = raw[raw.length - 1]
  const parts = RAW_RE.exec(last)
  const body = /^sentry per-bot: (.+) \| /.exec(last)[1].split(' ')
  let named = 0, g = 0, r = 0
  for (let i = 0; i < body.length; i += 2) {
    const cm = /^g(\d+)\/r(\d+)$/.exec(body[i + 1])
    named++
    g += Number(cm[1])
    r += Number(cm[2])
  }
  const rawCells = { named, silent: Number(parts[1]), g, r }
  const ok = c.named === rawCells.named && c.silent === rawCells.silent && c.g === rawCells.g && c.r === rawCells.r
  // the FLEET RESULT cross-check (the row IS the fleet's own counters)
  const fr = lines.find(l => RESCUES_RE.test(l) && GLITCHES_RE.test(l))
  const rescues = fr ? Number(RESCUES_RE.exec(fr)[1]) : null
  const glitches = fr ? Number(GLITCHES_RE.exec(fr)[1]) : null
  const cross = rescues === c.r && glitches === c.g
  if (!ok || !cross) mismatches++
  console.log(`${name}: raw ${raw.length} print(s), census ${JSON.stringify(c)}, raw ${JSON.stringify(rawCells)} - ${ok ? 'MATCH' : 'MISMATCH'}; cross rescues=${rescues} airGlitches=${glitches} - ${cross ? 'EQUAL' : 'UNEQUAL'}`)
}

// the W-window's own live read (the field's own arc) - the nearest-
// completed law: cur=face477, prev=face476, back=face475
const row = sentryPerBotTrendRow({
  back: censusCells[1],
  prev: censusCells[2],
  cur: censusCells[3]
})
console.log(`W475-476-477 (475->476->477): ${row ?? 'the honest silence'}`)

console.log(`FIELDPROOF: ${facesWithLine} face(s) with the print, ${mismatches} mismatch(es) - ${mismatches === 0 ? 'ZERO mismatches, the word rides' : 'THE WORD LIES - fix before push'}`)
process.exit(mismatches === 0 ? 0 : 1)
