#!/usr/bin/env node
// (v0.976.234, fire-2042) THE FINAL CLIMB LANE FIELD READ - the field
// proof: the strict grammar the real faces re-spoke, census == raw
// zero mismatches (the .232's own field method, the fire-1542 walk
// the family holds). usage:
//   node scripts/fieldread-finalclimb-2042.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { finalClimbLaneCount } from '../src/lib/finalclimblanetrend.mjs'

const dir = process.argv[2] || '/home/z/my-project/faces/window455_466'
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))
if (!faces.length) { console.error('no faces in ' + dir); process.exit(1) }
let mismatches = 0
const series = []
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  const raw = lines.filter(l => typeof l === 'string' && /^F\d+ final climb: .+$/.test(l)).length
  const census = finalClimbLaneCount(lines)
  const ok = raw === census
  if (!ok) mismatches++
  series.push([Number(f.slice(4)), census])
  console.log(`${f}: raw=${raw} census=${census} ${ok ? 'HOLDS' : '*** MISMATCH ***'}`)
}
const total = series.reduce((s, [, v]) => s + v, 0)
console.log(`field proof: ${faces.length - mismatches}/${faces.length} census==raw zero mismatches - TOTAL ${total}u`)
const skins = new Map()
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  for (const l of lines) {
    const m = typeof l === 'string' && l.match(/^F\d+ final climb: (.+)$/)
    if (m) {
      const skin = m[1].replace(/\d+/g, 'N').replace(/\(.*\)/, '(...)').replace(/\[.*\]/, '[...]')
      skins.set(skin, (skins.get(skin) || 0) + 1)
    }
  }
}
console.log('skins:', [...skins.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} x${v}`).join(', '))
