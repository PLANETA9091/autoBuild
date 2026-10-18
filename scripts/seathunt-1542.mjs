#!/usr/bin/env node
// (v0.976.228 seat hunt, fire 1542) THE FIRE-1542 SEAT HUNT - the
// fire-1442 method extended: (1) the stale-probe OWNER_OVERRIDES map
// (the families a probe misses because the owner holds no plain-words
// literal: waterpass .202, maptrip's pulse header, plantoptrend,
// memhb, the launcher's own b] tick), (2) the literal grep widened to
// tests/ too, (3) the overview widened to top-70.
// usage: node scripts/seathunt-1542.mjs <faces-dir> [topN]
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { execFileSync } from 'node:child_process'

const dir = process.argv[2]
const topN = Number(process.argv[3] || 80)
if (!dir) { console.error('usage: node scripts/seathunt-1542.mjs <faces-dir> [topN]'); process.exit(1) }
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))

// 1. the family map (the lanescan's own normalization)
const fams = new Map()
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  for (const raw of lines) {
    if (typeof raw !== 'string' || !raw.trim()) continue
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
for (const f of readdirSync(libDir).filter(n => n.endsWith('.mjs')).sort()) {
  try {
    const mod = await import('file://' + join(libDir, f))
    for (const name of Object.keys(mod)) {
      if (/Count$/.test(name) && typeof mod[name] === 'function') {
        censuses.push({ file: f, name, fn: mod[name] })
      }
    }
  } catch { /* the import-fail lane prices itself honest */ }
}

// 3. the literal probe widened: src/lib AND tests/
function probeLiteral (sample) {
  const body = sample.replace(/^F\d+ \[[A-Za-z0-9]+\] /, '').replace(/^F\d+ /, '')
  const words = body.split(/\s+/).map(w => w.replace(/[^A-Za-z_:/().-]/g, '')).filter(Boolean)
  for (let len = 5; len >= 3; len--) {
    for (let i = 0; i + len <= words.length; i++) {
      const frag = words.slice(i, i + len).join(' ')
      if (!/[a-z]{4}/.test(frag)) continue
      try {
        const hits = execFileSync('grep', ['-rl', '--include=*.mjs', '-F', frag, 'src/lib', 'tests'], { encoding: 'utf8', timeout: 20000 })
        if (hits.trim()) return { frag, files: hits.trim().split('\n').slice(0, 3) }
      } catch { /* no hit */ }
    }
  }
  return null
}

// 4. the known stale-probe owners (the families the literal probe
// misses because the owner's grammar lives in a regex, a fold or a
// different-shaped emitter line)
const OWNER_OVERRIDES = new Map([
  ['water: pass N', 'lit:src/lib/waterpasstrend.mjs (.202)'],
  ['t-Ns alive=N/N mined=N', 'lit:src/lib/maptrip.mjs (PULSE_HEADER_RE)'],
  [' deficits: N/N', 'lit:src/lib/plantoptrend.mjs'],
  [' plan top:', 'lit:src/lib/plantoptrend.mjs'],
  [' mem: heap=NM/NM', 'lit:src/lib/memhb.mjs'],
  ['b] n=N ts=Ns', 'CHECK: allocvalve.mjs watches mainLate'],
])

const rows = [...fams.entries()].map(([k, e]) => ({ k, ...e })).sort((a, b) => b.mass - a.mass).slice(0, topN)
for (const r of rows) {
  // census probe
  const owners = []
  for (const c of censuses) {
    try {
      if (typeof c.fn === 'function') {
        const n = c.fn(r.samples)
        if (Number(n) > 0) owners.push(c.name)
      }
    } catch { /* a census may demand its own shape */ }
  }
  r.priced = [...owners]
  if (!r.priced.length) {
    const ov = OWNER_OVERRIDES.get(r.k)
    const lit = probeLiteral(r.samples[0])
    if (ov) r.priced = [ov]
    else if (lit) r.priced = [`lit:${lit.files[0]}`]
  }
}

console.log('--- UNPRICED ranking (heaviest clean voices first) ---')
const unp = rows.filter(r => !r.priced.length)
for (const r of unp) {
  console.log(`  ${r.mass}u ${r.faces.size}f  ${r.k}`)
  console.log(`        s0: ${r.samples[0].slice(0, 150)}`)
}
console.log('--- overview (top ' + topN + ') ---')
for (const r of rows) {
  console.log(`${String(r.mass).padStart(6)}u ${String(r.faces.size).padStart(3)}f  ${r.k.padEnd(38)} ${r.priced.length ? 'priced: ' + r.priced.join(',') : '*** UNPRICED ***'}`)
}
