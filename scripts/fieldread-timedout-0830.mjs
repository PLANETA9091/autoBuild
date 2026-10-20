#!/usr/bin/env node
// (v0.976.311) FIELDPROOF for THE LOST CONNECTION'S OWN TIMEOUT MASS:
// census==raw (spawnSync grep) zero mismatches across the nine REAL
// faces + the window shapes the birth speaks byte-exact.
//   node scripts/fieldread-timeout-0830.mjs
import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { timedoutCensus, timedoutTrendRow } from '../src/lib/timedouttrend.mjs'

const FACES = [
  ['F496', '/home/z/my-project/echofaces/srv-39287423190/console.log'],
  ['F497', '/tmp/faces/F497/console.log'],
  ['F498', '/home/z/my-project/echofaces/srv-39303149973/console.log'],
  ['F499', '/tmp/faces/F499/console.log'],
  ['F500', '/home/z/my-project/echofaces/srv-39314160850/console.log'],
  ['F501', '/tmp/faces/F501/console.log'],
  ['F502', '/tmp/faces/F502/console.log'],
  ['F504', '/tmp/faces/F504/console.log'],
  ['F505', '/tmp/f505art/console.log']
]

const GREP = /lost connection: Timed out/g
let mismatches = 0
const arc = []
for (const [name, path] of FACES) {
  const text = readFileSync(path, 'utf8')
  const lines = text.split('\n')
  const raw = (text.match(GREP) || []).length
  const c = timedoutCensus(lines)
  const got = c ? c.timedouts : null
  const ok = got === raw
  if (!ok) mismatches++
  arc.push(got)
  console.log(`${name} census=${got} raw=${raw} ${ok ? 'MATCH' : 'MISMATCH'}`)
}
console.log(`census==raw: ${FACES.length - mismatches}/${FACES.length} zero mismatches`)
console.log(`the REAL nine-face arc: ${arc.join('/')}`)

// the seven windows the face chain holds (W1-W7 over F496..F502,F504,F505)
const faces = arc
let speaks = 0
for (let i = 0; i + 2 < faces.length; i++) {
  const [b, p, c] = [faces[i], faces[i + 1], faces[i + 2]]
  const row = timedoutTrendRow({ back: { timedouts: b }, prev: { timedouts: p }, cur: { timedouts: c } })
  const w = `W${i + 1}`
  if (row) {
    speaks++
    console.log(`${w} SPEAK: ${row.split(', (the')[0]}`)
  } else {
    const why = (b === 0 && p === 0 && c === 0) ? 'three-face zero' : 'held step'
    console.log(`${w} silence (${why})`)
  }
}
console.log(`windows: ${speaks} speak(s)`)

// the birth's own byte-exact proof: W5 the only speaking window
const w5 = timedoutTrendRow({ back: { timedouts: 0 }, prev: { timedouts: 17 }, cur: { timedouts: 0 } })
const expectedHead = 'the server trend (v0.976.311): the lost connection\'s own Timed out swing - 0 -> 17 (+17) -> 0 (-17) - the server traded its stalled drops between the faces'
console.log(`W5 byte-exact head: ${w5 && w5.startsWith(expectedHead) ? 'MATCH' : 'MISMATCH'}`)
const allGreen = mismatches === 0 && speaks === 1 && w5 && w5.startsWith(expectedHead)
console.log(`FIELDPROOF ${allGreen ? 'GREEN' : 'RED'}`)
process.exit(allGreen ? 0 : 1)
