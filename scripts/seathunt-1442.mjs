#!/usr/bin/env node
// (v0.976.226 seat hunt, fire 1442) THE FIRE-1442 SEAT HUNT - the
// fire-1045 method hardened: every top family's sample lines probed
// against (1) every *Count census export, (2) a distinctive literal
// grep across src/lib (the trend words hold the lane grammar) - a
// family a literal or a census prices is PRICED, a family neither
// prices is UNPRICED - the heaviest clean unpriced voice names the
// seat the next word takes.
// usage: node scripts/seathunt-1442.mjs <faces-dir> [topN]
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { execFileSync } from 'node:child_process'

const dir = process.argv[2]
const topN = Number(process.argv[3] || 80)
if (!dir) { console.error('usage: node scripts/seathunt-1442.mjs <faces-dir> [topN]'); process.exit(1) }
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
    const key = m.split(/\s+/).slice(0, 3).join(' ')
    if (!fams.has(key)) fams.set(key, { mass: 0, faces: new Set(), samples: [] })
    const e = fams.get(key)
    e.mass++
    e.faces.add(f)
    if (e.samples.length < 8) e.samples.push(raw)
  }
}

// 2. every *Count census export
const libDir = join(process.cwd(), 'src', 'lib')
const censuses = []
let importFails = 0
for (const f of readdirSync(libDir).filter(n => n.endsWith('.mjs')).sort()) {
  try {
    const mod = await import('file://' + join(libDir, f))
    for (const name of Object.keys(mod)) {
      if (/Count$/.test(name) && typeof mod[name] === 'function') {
        censuses.push({ file: f, name, fn: mod[name] })
      }
    }
  } catch { importFails++ }
}

// 3. the literal probe: pick the longest plain-words run from a
// sample body, grep src/lib for it - a hit prices the family
const STOP = new Set(['the', 'and', 'for', 'but', 'not', 'with', 'from', 'that', 'this', 'after', 'before', 'into', 'over', 'under'])
function probeLiteral (sample) {
  const body = sample.replace(/^F\d+ \[[A-Za-z0-9]+\] /, '').replace(/^F\d+ /, '')
  const words = body.split(/\s+/).map(w => w.replace(/[^A-Za-z_:/().-]/g, '')).filter(Boolean)
  for (let len = 5; len >= 3; len--) {
    for (let i = 0; i + len <= words.length; i++) {
      const lit = words.slice(i, i + len).join(' ')
      if ([...lit.split(/\s+/)].some(w => STOP.has(w.toLowerCase()))) continue
      if (lit.length < 12) continue
      try {
        const out = execFileSync('rg', ['-l', '-F', lit, 'src/lib'], { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] })
        if (out.trim()) return { lit, files: out.trim().split('\n').slice(0, 4) }
      } catch { /* no hit */ }
    }
  }
  return null
}

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
  r.priced = [...owners]
  if (!r.priced.length) {
    const lit = probeLiteral(r.samples[0] || '')
    if (lit) r.priced = [`lit:${lit.files[0]}`]
  }
}
console.log(`seat hunt: ${faces.length} faces, ${fams.size} families, ${totalLines} lines, ${censuses.length} censuses, ${importFails} import fails`)
console.log('--- UNPRICED ranking (heaviest clean voices first) ---')
const unp = rows.filter(r => !r.priced.length)
for (const r of unp) {
  console.log(`${String(r.mass).padStart(6)}u ${String(r.fc).padStart(3)}f  ${r.k}`)
  console.log(`        s0: ${(r.samples[0] || '').slice(0, 150)}`)
  if (r.samples[1]) console.log(`        s1: ${(r.samples[1] || '').slice(0, 150)}`)
}
console.log('--- top-30 families overview (priced tags) ---')
for (const r of rows.slice(0, 30)) {
  console.log(`${String(r.mass).padStart(6)}u ${String(r.fc).padStart(3)}f  ${r.k.padEnd(38)} ${r.priced.length ? 'priced: ' + r.priced.join(',') : '*** UNPRICED ***'}`)
}
