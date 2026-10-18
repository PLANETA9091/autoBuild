#!/usr/bin/env node
// (v0.976.224 seat hunt) THE WATER GUARD'S OWN ANATOMY - every 'water: '
// skin across the faces, normalized, with the priced cells named beside:
// the lanes-never-merge boundary the new word's grammar needs.
// usage: node scripts/waterguard-fire1045.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const dir = process.argv[2]
if (!dir) { console.error('usage: node scripts/waterguard-fire1045.mjs <faces-dir>'); process.exit(1) }
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))

const skins = new Map()
let total = 0
let rescueMass = 0
const rescuePerFace = []
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  let rs = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const m = l.match(/^F\d+ \[[A-Za-z0-9]+\] water: (\S+(?: \S+)?)/)
    if (!m) continue
    total++
    const skin = m[1].replace(/\d+/g, 'N')
    skins.set(skin, (skins.get(skin) || 0) + 1)
    if (/^F\d+ \[[A-Za-z0-9]+\] water: (drowning rescue|rescue)\b/.test(l)) rs++
  }
  rescuePerFace.push(`${f.slice(4)}=${rs}`)
}
console.log(`water guard total: ${total}u over ${faces.length} faces`)
console.log('--- every skin (mass desc) ---')
;[...skins.entries()].sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`${String(v).padStart(6)}x  water: ${k}`))
console.log('--- the rescue lane per face ---')
console.log(rescuePerFace.join(' '))
console.log(`rescue lane total: ${rescuePerFace.reduce((a, p) => a + Number(p.split('=')[1]), 0)}u`)
