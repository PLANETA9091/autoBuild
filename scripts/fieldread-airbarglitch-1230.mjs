#!/usr/bin/env node
// (v0.976.222 seat) the air-bar glitch field read - the ignored cell
// face by face over the honest window (the faces the artifact fetches
// re-spoke), the windows and the bounds the tests pin byte-exact.
// usage: node scripts/fieldread-airbarglitch-1230.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { airBarGlitchCount } from '../src/lib/airbarglitchtrend.mjs'

const dir = process.argv[2]
if (!dir) { console.error('usage: node scripts/fieldread-airbarglitch-1230.mjs <faces-dir>'); process.exit(1) }
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))
const T = {}
let rawMismatch = 0
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  const census = airBarGlitchCount(lines)
  const raw = lines.filter(l => typeof l === 'string' && /^F\d+ (?:\[[A-Za-z0-9]+\] )?water: air-bar glitch ignored \(oxygen 0 on dry land at \[-?\d+,-?\d+,-?\d+\], \d+ total\)$/.test(l)).length
  if (census !== raw) { rawMismatch++; console.log(`${f}: MISMATCH census=${census} raw=${raw}`) }
  T[Number(f.slice(4))] = census
}
const order = Object.keys(T).map(Number).sort((a, b) => a - b)
let mass = 0, speak = 0
for (const f of order) { mass += T[f]; if (T[f] > 0) speak++ }
console.log(`field: ${order.length} faces, mass ${mass}u, speaking ${speak}/${order.length}, census==raw mismatches ${rawMismatch}`)
console.log(`series: ${order.map(f => `${f}=${T[f]}`).join(' ')}`)
console.log('windows:')
for (let i = 2; i < order.length; i++) {
  const a = T[order[i - 2]], b = T[order[i - 1]], c = T[order[i]]
  const d1 = b - a, d2 = c - b
  const shape = d1 === 0 || d2 === 0 ? 'silence' : d1 > 0 && d2 > 0 ? 'swell' : d1 < 0 && d2 < 0 ? 'fade' : 'swing'
  console.log(`W${order[i]}: ${a} -> ${b} (${d1 >= 0 ? '+' : ''}${d1}) -> ${c} (${d2 >= 0 ? '+' : ''}${d2}) ${shape}`)
}
let maxRise = null, maxFall = null
for (let i = 1; i < order.length; i++) {
  const d = T[order[i]] - T[order[i - 1]]
  if (maxRise === null || d > maxRise.d) maxRise = { d, b: `${order[i - 1]}/${order[i]}` }
  if (maxFall === null || d < maxFall.d) maxFall = { d, b: `${order[i - 1]}/${order[i]}` }
}
console.log(`max rise ${maxRise.d} at ${maxRise.b}; max fall ${maxFall.d} at ${maxFall.b}`)
console.log(`top ${Math.max(...order.map(f => T[f]))}, floor ${Math.min(...order.map(f => T[f]))}`)
