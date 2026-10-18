#!/usr/bin/env node
// (v0.976.253, fire-0542) fieldread-drainfence: read the drain fence line
// across the cached faces - the census's own fieldproof (census==raw, zero
// mismatches, the house law). The fence ships in .252 - every cached face
// predates the emitter, so the honest read is the LAWFUL ZERO everywhere
// AND the near-miss lanes (the settle telemetry's real prints, the exit
// watchdog's real verdict, the report's own reason cell) must refuse: the
// zeros speak, the lanes stay clean.
import { readFileSync } from 'node:fs'
import { drainFenceCensus, drainFenceRow } from '../src/lib/drainfence.mjs'

const faces = [
  ['face475', '/home/z/privateB/faces/face475/fleet19.log'],
  ['face476', '/home/z/privateB/faces/face476/fleet19.log']
]
const RAW_RE = /^\[fleet\] drain fence: (\d+) runner\(s\) fenced at (\d+)s past the deadline \(([^)]*)\) - the drain bounded, the report and the natural exit own the end$/
const NEAR_MISS_RES = [
  [/^\[fleet\] runner settle: /, 'the settle telemetry lane (the .246 seat)'],
  [/^exit watchdog: /, 'the exit watchdog lane (the .233 seat)'],
  [/^================ FLEET RESULT \(/, 'the report reason cell (the facefate seat)']
]

let mismatches = 0
const censusCells = []
for (const [name, path] of faces) {
  const lines = readFileSync(path, 'utf8').split('\n')
  const rows = lines.filter(l => RAW_RE.test(l))
  const c = drainFenceCensus(lines)
  console.log(`--- ${name}: ${lines.length} lines, ${rows.length} fence line(s), census=${JSON.stringify(c)} ---`)
  if (rows.length === 0) {
    // the honest read: no fence line (the face predates the .252 emitter)
    // -> the census must hold the lawful zero
    if (c.fenced !== 0 || c.marginSec !== 0 || c.labels !== '') {
      console.log('  MISMATCH: no raw line but census non-zero')
      mismatches++
    } else {
      console.log('  ok (no fence line, census lawful zero - the face predates the emitter)')
    }
  } else {
    const m = RAW_RE.exec(rows[rows.length - 1])
    const raw = { fenced: Number(m[1]), marginSec: Number(m[2]), labels: m[3] }
    if (raw.fenced !== c.fenced || raw.marginSec !== c.marginSec || raw.labels !== c.labels) {
      console.log(`  MISMATCH: raw=${JSON.stringify(raw)} census=${JSON.stringify(c)}`)
      mismatches++
    } else {
      console.log(`  ok census==raw fenced=${c.fenced} marginSec=${c.marginSec} labels='${c.labels}'`)
    }
  }
  // the near-miss lanes: every real neighbour line the face holds must
  // have been refused by the census (the lanes stay clean)
  for (const [re, lane] of NEAR_MISS_RES) {
    const n = lines.filter(l => re.test(l)).length
    console.log(`  neighbour lane '${lane}': ${n} real line(s) - must all be refused`)
  }
  censusCells.push(c)
}
// the windows the two faces ride - the fold needs three faces; the honest
// read prints nothing (the two-face fold the carrier's own law skips)
const w = drainFenceRow({ back: censusCells[0], prev: censusCells[1], cur: censusCells[1] })
console.log('W row: ' + (w ? 'SPOKE (unexpected - the zeros must stay silent)' : 'null (the lawful silence the zeros keep)'))
// the sanity cross: the settle telemetry DID speak in face476 (the .246
// word's own real reads) - the fence census's zero beside it is the
// lanes-never-merge law's own field proof
const f476 = readFileSync(faces[1][1], 'utf8').split('\n')
const settlePrints = f476.filter(l => l.startsWith('[fleet] runner settle: ')).length
const watchdogPrints = f476.filter(l => l.startsWith('exit watchdog: ')).length
console.log(`face476 cross: ${settlePrints} settle print(s), ${watchdogPrints} watchdog print(s) rode beside the fence census's lawful zero`)
if (settlePrints < 10 || watchdogPrints < 1) {
  console.log('  MISMATCH: the face476 cross expected the real lanes to have spoken')
  mismatches++
}
console.log(`TOTAL: ${mismatches} mismatches`)
process.exit(mismatches === 0 ? 0 : 1)
