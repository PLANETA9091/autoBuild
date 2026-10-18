#!/usr/bin/env node
// (v0.976.224 seat hunt) THE ANATOMY SCAN - for the candidate unpriced
// lanes the seat hunt named, prints the full skin anatomy (every
// variant, normalized digits) across the faces - the one-emitter
// one-shape law's own proof the seat's grammar needs.
// usage: node scripts/anatomy-fire1045.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const dir = process.argv[2]
if (!dir) { console.error('usage: node scripts/anatomy-fire1045.mjs <faces-dir>'); process.exit(1) }
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))

const LANES = [
  { name: 'water rescue cluster', test: (l) => /^F\d+ \[[A-Za-z0-9]+\] water: (drowning rescue|rescue blind|rescue released|rescue )/.test(l) },
  { name: 'fuel commons misc skins', test: (l) => /^F\d+ (?:\[[A-Za-z0-9]+\] )?fuel commons: (the anchor|path nudge|envelope|budget)/.test(l) },
  { name: 'digShaft water skins', test: (l) => /^F\d+ (?:\[[A-Za-z0-9]+\] )?digShaft: water/.test(l) },
  { name: 'ticker status block', test: (l) => /^t-\d+s alive=/.test(l) },
  { name: 'mem status line', test: (l) => /^ {3}mem: heap=/.test(l) },
  { name: 'heartbeat b] line', test: (l) => /b\] n=\d+ ts=/.test(l) && !/^F\d+ \[/.test(l) },
]

for (const lane of LANES) {
  const variants = new Map()
  const perFace = []
  let mass = 0
  for (const f of faces) {
    const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
    let s = 0
    for (const l of lines) {
      if (typeof l !== 'string' || !lane.test(l)) continue
      s++
      mass++
      const key = l.replace(/\d+/g, 'N').replace(/\[F[0-9A-Za-z]+\]/, '[F]').slice(0, 110)
      variants.set(key, (variants.get(key) || 0) + 1)
    }
    perFace.push(`${f.slice(4)}=${s}`)
  }
  console.log(`\n=== ${lane.name}: ${mass}u over ${faces.length} faces ===`)
  console.log(perFace.join(' '))
  console.log(`variants (${variants.size}):`)
  ;[...variants.entries()].sort((a, b) => b[1] - a[1]).slice(0, 14).forEach(([k, v]) => console.log(`  ${String(v).padStart(5)}x | ${k}`))
}
