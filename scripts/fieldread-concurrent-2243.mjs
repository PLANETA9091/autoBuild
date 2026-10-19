#!/usr/bin/env node
// (v0.976.290) FIELDPROOF - the gc concurrent word's own field read:
// the seventeen REAL server-console faces the arc rides
// (/home/z/gcarc/<face>-<run>/server.log, the mining cache
// scripts/gc-arc-mine-2243.mjs laid), the census against the raw
// re-parse (the mirror law - census==raw or the fire fails), the
// fifteen REAL windows re-priced against the expected shapes.
import { readFileSync, existsSync } from 'node:fs'
import { gcConcurrentCensus, gcConcurrentTrendRow } from '../src/lib/gcconcurrenttrend.mjs'

// the family's own face set (the .287/.288 convention - the extra
// dispatch run 39218040553 the current face set skips)
const FACES = [
  ['F478', '39174346168'], ['F479', '39178460638'], ['F480', '39184044983'],
  ['F481', '39188700500'], ['F482', '39193658512'], ['F483', '39200742905'],
  ['F484', '39206031566'], ['F485', '39208857636'], ['F486', '39211822338'],
  ['F487', '39214842713'], ['F488', '39222677292'], ['F489', '39230056077'],
  ['F490', '39241011047'], ['F491', '39250996033'], ['F492', '39255972997'],
  ['F493', '39260942274'], ['F494', '39268802792'],
]
// the expected REAL window shapes (peak arc, two-step)
const EXPECTED = ['swell', 'swell', 'swell', 'swing', 'swing', 'swell', 'swing', 'fade', 'swing', 'swing', 'swing', 'swing', 'fade', 'swing', 'swell']
const RAW_END_RE = /^\[\d+\.\d{3}s\]\[info\]\[gc\] GC\(\d+\) Concurrent Mark Cycle (\d+\.\d+)ms$/

let bad = 0
const faces = []
for (const [label, run] of FACES) {
  const p = `/home/z/gcarc/${label}-${run}/server.log`
  if (!existsSync(p)) { console.error(`FAIL ${label}: no cached face at ${p}`); bad++; continue }
  const lines = readFileSync(p, 'utf8').split('\n')
  const c = gcConcurrentCensus(lines)
  // the raw re-parse - the mirror law (an independent hand counts)
  let rawPeak = 0
  let rawCycles = 0
  for (const l of lines) {
    const m = RAW_END_RE.exec(l)
    if (!m) continue
    rawCycles++
    const ms = Number(m[1])
    if (ms > rawPeak) rawPeak = ms
  }
  const ok = c && c.peak === rawPeak && c.cycles === rawCycles
  if (!ok) { console.error(`FAIL ${label}: census ${JSON.stringify(c)} != raw peak=${rawPeak} cycles=${rawCycles}`); bad++ }
  faces.push({ label, run, ...c })
  console.log(`${label} (${run}): peak=${c.peak} cycles=${c.cycles} ${ok ? 'OK' : 'MISMATCH'}`)
}
// the REAL windows re-priced
let w = 0
let spoke = 0
for (let i = 0; i + 2 < faces.length; i++) {
  const row = gcConcurrentTrendRow({ back: faces[i], prev: faces[i + 1], cur: faces[i + 2] })
  const name = `W${FACES[i][0]}-${FACES[i + 1][0]}-${FACES[i + 2][0]}`
  if (!row) { console.error(`FAIL ${name}: silent, expected ${EXPECTED[w]}`); bad++; w++; continue }
  const shape = row.includes('own swell ran two steps deep') ? 'swell' : row.includes('own fade ran two steps deep') ? 'fade' : row.includes('own swing') ? 'swing' : '?'
  const ok = shape === EXPECTED[w]
  if (!ok) { console.error(`FAIL ${name}: priced ${shape}, expected ${EXPECTED[w]}`); bad++ } else spoke++
  console.log(`${name}: ${shape} ${ok ? 'OK' : 'MISMATCH'} - ${row.slice(0, 120)}...`)
  w++
}
if (w !== EXPECTED.length) { console.error(`FAIL: window count ${w} != expected ${EXPECTED.length}`); bad++ }
console.log(`FIELDPROOF ${faces.length}/${FACES.length} faces census==raw, ${spoke}/${EXPECTED.length} windows re-priced, ${bad} failures`)
process.exit(bad ? 1 : 0)
