#!/usr/bin/env node
// (v0.976.221 seat hunt) THE FIELD'S OWN LANE SCAN - reads the faces the
// fire holds (faces/face<N>/fleet19.log), normalizes each line into a
// prefix family (strip the F<n> [F<n>] carrier, digits -> N, first
// tokens the family key), counts the mass across the faces, prints the
// heaviest families with face coverage - the field's own scan names the
// seat the next word prices.
// usage: node scripts/lanescan-<fire>.mjs <faces-dir> [topN] [tokens]
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const dir = process.argv[2]
const topN = Number(process.argv[3] || 40)
const tokens = Number(process.argv[4] || 3)
if (!dir) { console.error('usage: node scripts/lanescan-<fire>.mjs <faces-dir> [topN] [tokens]'); process.exit(1) }
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))

const fams = new Map()
let totalLines = 0
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  const seen = new Set()
  for (const raw of lines) {
    if (typeof raw !== 'string' || !raw.trim()) continue
    totalLines++
    // strip the carrier: 'F<n> [F<n>] ' or 'F<n> '
    let m = raw.replace(/^F\d+ \[[A-Za-z0-9]+\] /, '').replace(/^F\d+ /, '')
    // normalize digits -> N
    m = m.replace(/\d+/g, 'N')
    // family key: first `tokens` whitespace tokens
    const key = m.split(/\s+/).slice(0, tokens).join(' ')
    if (!fams.has(key)) fams.set(key, { mass: 0, faces: new Set(), sample: raw.slice(0, 160) })
    const e = fams.get(key)
    e.mass++
    e.faces.add(f)
    seen.add(key)
  }
}
const rows = [...fams.entries()].map(([k, v]) => ({ k, mass: v.mass, fc: v.faces.size, sample: v.sample }))
  .sort((a, b) => b.mass - a.mass)
console.log(`lane scan: ${faces.length} faces, ${fams.size} families, ${totalLines} lines`)
console.log(`top ${Math.min(topN, rows.length)} families (mass, face-coverage, key, sample):`)
for (const r of rows.slice(0, topN)) {
  console.log(`${String(r.mass).padStart(6)}u ${String(r.fc).padStart(3)}f  ${r.k}   | ${r.sample}`)
}
