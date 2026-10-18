#!/usr/bin/env node
// (v0.976.246, fire-0342) SEAT HUNT over face473 - the fire-1542/0142 method:
// shape-normalize every fleet19 line (digits->N), cluster into families, rank
// by mass, so the heaviest clean unpriced voice surfaces.
// usage: node scripts/seathunt-0342.mjs <face-dir-or-log>
import { readFileSync, statSync } from 'node:fs'

const arg = process.argv[2] || '/home/z/privateB/faces/face473'
let lines
if (statSync(arg).isDirectory()) lines = readFileSync(arg + '/fleet19.log', 'utf8').split('\n')
else lines = readFileSync(arg, 'utf8').split('\n')

const fams = new Map()
for (const l of lines) {
  if (!l || l.length < 8) continue
  const shape = l.replace(/\d+/g, 'N').replace(/\(.*?\)/g, '(...)').replace(/\[.*?\]/g, '[...]').replace(/"[^"]*"/g, '"S"').slice(0, 110)
  if (!fams.has(shape)) fams.set(shape, { mass: 0, sample: l.slice(0, 160) })
  const e = fams.get(shape)
  e.mass++
}
const rows = [...fams.entries()].map(([shape, e]) => ({ shape, mass: e.mass, sample: e.sample }))
  .sort((a, b) => b.mass - a.mass)
console.log(`lines=${lines.length} families=${rows.length}`)
console.log('--- TOP 100 by mass ---')
for (let i = 0; i < Math.min(100, rows.length); i++) {
  const r = rows[i]
  console.log(`${String(i + 1).padStart(3)} ${String(r.mass).padStart(5)}u ${r.shape}`)
  if (r.mass <= 4) console.log(`     sample: ${r.sample}`)
}
console.log('--- singletons+low (mass 1..2, count) ---')
console.log(rows.filter(r => r.mass <= 2).length, 'families <=2u')
