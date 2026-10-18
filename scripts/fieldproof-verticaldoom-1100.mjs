#!/usr/bin/env node
// (v0.976.220) THE VERTICAL DOOM SKIP'S OWN TREND - the field proof.
// Reads the faces the fire holds (a dir of F<n>/fleet19.log), counts
// the doom-skip family raw (the loose includes check) and census (the
// word's own strict RE), asserts census==raw per face, prints the
// windows. The honest reduced window the sandbox wipe prices - the
// faces the artifact fetches re-spoke.
// usage: node scripts/fieldproof-verticaldoom-1100.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { verticalDoomSkipCount } from '../src/lib/verticaldoomskiptrend.mjs'

const dir = process.argv[2]
if (!dir) { console.error('usage: node scripts/fieldproof-verticaldoom-1100.mjs <faces-dir>'); process.exit(1) }
const faces = readdirSync(dir).filter(d => /^F\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)))
const T = {}
let checks = 0, mismatches = 0
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  const raw = lines.filter(l => typeof l === 'string' && l.includes('vertical doom') && l.includes('chest skip')).length
  const census = verticalDoomSkipCount(lines)
  if (census !== raw) { mismatches++; console.log(`${f}: MISMATCH census=${census} raw=${raw}`) } else { checks++; console.log(`${f}: census==raw==${census}`) }
  T[Number(f.slice(1))] = census
}
const order = Object.keys(T).map(Number).sort((a, b) => a - b)
console.log(`field proof: ${checks}/${faces.length} census==raw zero mismatches`)
let mass = 0
for (let i = 1; i < order.length; i++) mass += T[order[i]]
console.log(`THE FIELD ${T[order[0]] + order.slice(1).reduce((s, f) => s + T[f], 0)}u the ${faces.length} faces' own total`)
for (let i = 2; i < order.length; i++) {
  const a = T[order[i - 2]], b = T[order[i - 1]], c = T[order[i]]
  const d1 = b - a, d2 = c - b
  const shape = d1 === 0 || d2 === 0 ? 'silence' : d1 > 0 && d2 > 0 ? 'swell' : d1 < 0 && d2 < 0 ? 'fade' : 'swing'
  console.log(`W${order[i]}: ${a} -> ${b} (${d1 >= 0 ? '+' : ''}${d1}) -> ${c} (${d2 >= 0 ? '+' : ''}${d2}) ${shape}`)
}
process.exit(mismatches ? 1 : 0)
