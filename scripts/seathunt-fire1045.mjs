#!/usr/bin/env node
// (v0.976.224 seat hunt) THE FIRE-1045 SEAT HUNT - reads the faces the
// fire holds, builds the lane-scan family map, then probes every
// src/lib/*trend.mjs census (*Count export) against each family's own
// sample lines: a family some census counts is PRICED, a family no
// census counts is UNPRICED - the heaviest clean unpriced voice names
// the seat the next word takes (the fire-1043/1044 walk's own method).
// usage: node scripts/seathunt-fire1045.mjs <faces-dir> [topN] [tokens]
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const dir = process.argv[2]
const topN = Number(process.argv[3] || 60)
const tokens = Number(process.argv[4] || 3)
if (!dir) { console.error('usage: node scripts/seathunt-fire1045.mjs <faces-dir> [topN] [tokens]'); process.exit(1) }
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))

// 1. the family map (the lanescan's own normalization)
const fams = new Map()
let totalLines = 0
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  for (const raw of lines) {
    if (typeof raw !== 'string' || !raw.trim()) continue
    totalLines++
    let m = raw.replace(/^F\d+ \[[A-Za-z0-9]+\] /, '').replace(/^F\d+ /, '')
    m = m.replace(/\d+/g, 'N')
    const key = m.split(/\s+/).slice(0, tokens).join(' ')
    if (!fams.has(key)) fams.set(key, { mass: 0, faces: new Set(), samples: [] })
    const e = fams.get(key)
    e.mass++
    e.faces.add(f)
    if (e.samples.length < 6) e.samples.push(raw)
  }
}

// 2. load every trend census (the one-parser law's own inventory)
const libDir = join(process.cwd(), 'src', 'lib')
const censuses = []
for (const f of readdirSync(libDir).filter(n => n.endsWith('.mjs')).sort()) {
  try {
    const mod = await import('file://' + join(libDir, f))
    for (const name of Object.keys(mod)) {
      if (/Count$/.test(name) && typeof mod[name] === 'function') {
        censuses.push({ file: f, name, fn: mod[name] })
      }
    }
  } catch { /* a module the browser env holds - skip */ }
}

// 3. probe: which census counts each family (sample up to 120 lines)
const rows = [...fams.entries()].map(([k, v]) => ({ k, mass: v.mass, fc: v.faces.size, samples: v.samples }))
  .sort((a, b) => b.mass - a.mass)
  .slice(0, topN)
for (const r of rows) {
  const probe = r.samples.slice(0, 120)
  const owners = []
  for (const c of censuses) {
    let hits = 0
    try { hits = c.fn(probe) || 0 } catch { hits = 0 }
    if (hits > 0) owners.push(c.name)
  }
  r.priced = owners
}
console.log(`seat hunt: ${faces.length} faces, ${fams.size} families, ${totalLines} lines, ${censuses.length} censuses loaded`)
console.log('--- top families: mass, face-coverage, PRICED-BY / UNPRICED ---')
for (const r of rows) {
  const tag = r.priced.length ? `priced: ${r.priced.join(',')}` : '*** UNPRICED ***'
  console.log(`${String(r.mass).padStart(6)}u ${String(r.fc).padStart(3)}f  ${r.k.padEnd(38)} ${tag}`)
}
console.log('--- UNPRICED ranking (heaviest clean voices first) ---')
const unp = rows.filter(r => !r.priced.length)
for (const r of unp) {
  console.log(`${String(r.mass).padStart(6)}u ${String(r.fc).padStart(3)}f  ${r.k}`)
  console.log(`        sample: ${r.samples[0] ? r.samples[0].slice(0, 150) : ''}`)
}
