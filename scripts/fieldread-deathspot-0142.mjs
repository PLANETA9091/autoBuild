#!/usr/bin/env node
// (v0.976.244, fire-0142) THE DEATH SPOT MEMORIZE FIELD READ - the field
// proof: the strict grammar the real faces re-spoke, census == raw
// zero mismatches (the .238's own field method, the fire-1542 walk the
// family holds). usage:
//   node scripts/fieldread-deathspot-0142.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { deathSpotMemorizeCensus } from '../src/lib/deathspotmemorizetrend.mjs'

const dir = process.argv[2] || '/home/z/my-project/faces/window455_469'
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))
if (!faces.length) { console.error('no faces in ' + dir); process.exit(1) }
let mismatches = 0
const series = []
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  const raw = lines.filter(l => typeof l === 'string' && /^(F\d+) \[\1\] water: death spot memorized as a hazard at \[-?\d+,-?\d+,-?\d+\] \(\d+ live, fleet-wide\)$/.test(l)).length
  const c = deathSpotMemorizeCensus(lines)
  const ok = c !== null && raw === c.memorizes
  if (!ok) mismatches++
  series.push([Number(f.slice(4)), c ? c.memorizes : -1, c ? c.live : -1, c ? c.peak : -1])
  console.log(`${f}: raw=${raw} census=${c ? c.memorizes : 'null'} live=${c ? c.live : '-'} peak=${c ? c.peak : '-'} ${ok ? 'HOLDS' : '*** MISMATCH ***'}`)
}
const total = series.reduce((s, [, v]) => s + v, 0)
console.log(`field proof: ${faces.length - mismatches}/${faces.length} census==raw zero mismatches - TOTAL ${total}u`)
console.log('series:', series.map(([f, m, l, p]) => `${f}=${m}(${l}/${p})`).join(' '))
