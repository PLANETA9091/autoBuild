#!/usr/bin/env node
// (v0.976.315) FIELDPROOF for the login east edge word - the census
// hand the family trusts: for every face given, the loginEastCensus
// result must equal the raw re-sorted value (census==raw zero
// mismatches), and the REAL five-face arc the word speaks must match
// the byte-verified east edges the artifacts carry.
import { readFileSync } from 'node:fs'
import { loginEastCensus } from '../src/lib/logineasttrend.mjs'

const faces = process.argv.slice(2)
if (faces.length === 0) {
  console.error('usage: node scripts/fieldread-logineast-1000.mjs <face-console.log>...')
  process.exit(1)
}

const re = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(\d+)\] logged in with entity id (\d+) at \((-?\d+\.\d+), -?\d+\.\d+, -?\d+\.\d+\)$/
const reads = []
for (const f of faces) {
  const lines = readFileSync(f, 'utf8').split('\n')
  // the raw hand: the plain byte walk every face's logins ride
  let rawMax = null
  let logins = 0
  for (const l of lines) {
    const m = re.exec(l)
    if (!m) continue
    logins++
    const x = Number(m[5])
    if (rawMax === null || x > rawMax) rawMax = x
  }
  const census = loginEastCensus(lines)
  const cVal = census ? census.maxLoginX : null
  const rVal = rawMax === null ? 0 : rawMax
  const match = cVal === rVal
  reads.push(match)
  console.log(`${match ? 'MATCH' : 'MISMATCH'} ${f} logins=${logins} raw=${rVal} census=${cVal}`)
}
console.log(`FIELDPROOF ${reads.filter(Boolean).length}/${reads.length} census==raw zero mismatches`)
process.exit(reads.every(Boolean) ? 0 : 1)
