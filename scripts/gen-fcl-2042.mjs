#!/usr/bin/env node
// (v0.976.234, fire-2042) THE FINAL CLIMB LANE GENERATOR - the
// gen-scl method the tail byte-level inherits: the .232 tail the
// literal rides, the sibling's own ending the newest seat re-names
// (the .231/.233 feature seats hold no tail entry - the chain the
// scl ending keeps). usage: node scripts/gen-fcl-2042.mjs
import { readFileSync } from 'node:fs'

const src = readFileSync('src/lib/sweepcollectedlanetrend.mjs', 'utf8')
const m = src.match(/const tail = "(\(the sweep's own seat[^"]+\))"/)
if (!m) { console.error('tail literal not found'); process.exit(1) }
const oldTail = m[1]
const SCL_END = ", this word prices the sweep collected lane's own mass across the faces - the sweep collected lane seat, co-existence by seat never by duplication)"
if (!oldTail.endsWith(SCL_END)) { console.error('tail ending drifted'); process.exit(1) }
const NEW_TAIL = oldTail.slice(0, -SCL_END.length) +
  ", the sweep collected lane's own trend prices the sweep collected lane's own mass across the faces, " +
  "this word prices the final climb lane's own mass across the faces - the final climb lane seat, co-existence by seat never by duplication)"

// the self-check: the new word's own literal the module already holds
// must equal the chain's own derivation byte for byte (the .232's own
// law - the generator proves the tail chain, the module holds it)
const mine = readFileSync('src/lib/finalclimblanetrend.mjs', 'utf8')
const mm = mine.match(/const tail = "(\(the sweep's own seat[^"]+\))"/)
if (!mm) { console.error('new tail literal not found'); process.exit(1) }
if (mm[1] !== NEW_TAIL) {
  console.error('TAIL MISMATCH: the module literal and the chain derivation drift')
  process.exit(1)
}
console.log('tail chain byte-true: the .232 ending re-named, the new seat rides (' + (NEW_TAIL.length) + ' bytes)')
