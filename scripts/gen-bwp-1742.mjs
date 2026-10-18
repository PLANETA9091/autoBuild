#!/usr/bin/env node
// (v0.976.230, fire-1742) THE BANK WALK PATH EVENT GENERATOR - the
// gen-pocketdump method the tail byte-level inherits: the .229 tail
// the literal rides, the sibling's own ending the newest seat
// re-names. usage: node scripts/gen-bwp-1742.mjs
import { readFileSync, writeFileSync } from 'node:fs'

const src = readFileSync('src/lib/pocketdumptrend.mjs', 'utf8')
const m = src.match(/const tail = "(\(the sweep's own seat[^"]+\))"/)
if (!m) { console.error('tail literal not found'); process.exit(1) }
const oldTail = m[1]
const POCKET_END = ", this word prices the pocket dump's own mass across the faces - the pocket dump seat, co-existence by seat never by duplication)"
if (!oldTail.endsWith(POCKET_END)) { console.error('tail ending drifted'); process.exit(1) }
const NEW_TAIL = oldTail.slice(0, -POCKET_END.length) +
  ", the pocket dump's own trend prices the pocket dump's own mass across the faces, " +
  "this word prices the bank walk path event's own mass across the faces - the bank walk path event seat, co-existence by seat never by duplication)"

// the self-check: the new word's own literal the module already holds
// must equal the chain's own derivation byte for byte (the .229's own
// law - the generator proves the tail chain, the module holds it)
const mine = readFileSync('src/lib/bankwalkpatheventtrend.mjs', 'utf8')
const mm = mine.match(/const tail = "(\(the sweep's own seat[^"]+\))"/)
if (!mm) { console.error('new tail literal not found'); process.exit(1) }
if (mm[1] !== NEW_TAIL) {
  console.error('TAIL MISMATCH: the module literal and the chain derivation drift')
  process.exit(1)
}
console.log('tail chain byte-true: the .229 ending re-named, the new seat rides (' + (NEW_TAIL.length) + ' bytes)')
