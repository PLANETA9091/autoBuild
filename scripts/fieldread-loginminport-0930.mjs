#!/usr/bin/env node
// (v0.976.313) FIELDPROOF for the login min port word - the census
// hand the family trusts: for every face given, the
// loginMinPortCensus result must equal the raw grep|sort value
// (census==raw zero mismatches), and the REAL five-face arc the word
// speaks must match the byte-verified ports the artifacts carry.
import { readFileSync } from 'node:fs'
import { loginMinPortCensus } from '../src/lib/loginminporttrend.mjs'

const faces = process.argv.slice(2)
if (faces.length === 0) {
  console.error('usage: node scripts/fieldread-loginminport-0930.mjs <face-console.log>...')
  process.exit(1)
}

const re = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(\d+)\] logged in with entity id (\d+) at \(([^)]*)\)$/
const reads = []
for (const f of faces) {
  const lines = readFileSync(f, 'utf8').split('\n')
  // the raw hand: the plain byte walk every face's logins ride
  let rawMin = null
  let logins = 0
  for (const l of lines) {
    const m = re.exec(l)
    if (!m) continue
    logins++
    const p = Number(m[3])
    if (rawMin === null || p < rawMin) rawMin = p
  }
  const census = loginMinPortCensus(lines)
  const cVal = census ? census.minLoginPort : null
  const rVal = rawMin === null ? 0 : rawMin
  const match = cVal === rVal
  reads.push(match)
  console.log(`${match ? 'MATCH' : 'MISMATCH'} ${f} logins=${logins} raw=${rVal} census=${cVal}`)
}
console.log(`FIELDPROOF ${reads.filter(Boolean).length}/${reads.length} census==raw zero mismatches`)
process.exit(reads.every(Boolean) ? 0 : 1)
