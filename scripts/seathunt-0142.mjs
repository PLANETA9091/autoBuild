#!/usr/bin/env node
// (v0.976.241, fire-0142) SEAT HUNT over window455_469 - the fire-1542/2042
// method: shape-normalize every fleet19 line (digits->N), cluster into
// families, rank by mass, so the heaviest clean unpriced voice surfaces.
// usage: node scripts/seathunt-0142.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const dir = process.argv[2] || '/home/z/my-project/faces/window455_469'
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))
if (!faces.length) { console.error('no faces in ' + dir); process.exit(1) }

const fams = new Map() // shape -> {mass, faces:Set, emitterSample, skinSample}
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  for (const l of lines) {
    if (!l || l.length < 8) continue
    // strip the leading timestamp/level noise mineflayer prints
    const shape = l.replace(/\d+/g, 'N').replace(/\(.*?\)/g, '(...)').replace(/\[.*?\]/g, '[...]').replace(/"[^"]*"/g, '"S"').slice(0, 110)
    if (!fams.has(shape)) fams.set(shape, { mass: 0, faces: new Set(), sample: l.slice(0, 160) })
    const e = fams.get(shape)
    e.mass++
    e.faces.add(f)
  }
}
const rows = [...fams.entries()].map(([shape, e]) => ({ shape, mass: e.mass, nfaces: e.faces.size, sample: e.sample }))
  .sort((a, b) => b.mass - a.mass)
console.log(`faces=${faces.length} families=${rows.length}`)
console.log('--- TOP 80 by mass ---')
for (let i = 0; i < Math.min(80, rows.length); i++) {
  const r = rows[i]
  console.log(`${String(i + 1).padStart(3)} ${String(r.mass).padStart(5)}u/${String(r.nfaces).padStart(2)}f ${r.shape}`)
}
console.log('--- singletons+low (mass 1..2, count) ---')
console.log(rows.filter(r => r.mass <= 2).length, 'families <=2u')
