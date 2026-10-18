#!/usr/bin/env node
// (v0.976.223 seat hunt) THE BANKED RECEIPT'S OWN SHAPE SURVEY - reads the
// faces the fire holds (faces/face<N>/fleet19.log), classifies every
// 'banked' mention against the receipt's own strict grammar
// ('F<n> [F<n>] banked N items at (x,y,z) (direct=N fallback=N mirror=true
// kept: <list|nothing>)' - deposit.mjs's own positive receipt, ONE emitter),
// prints the strict count per face and every non-strict variant - the
// one-shape law's own proof the seat's grammar prices.
// usage: node scripts/bankedsurvey-fire1044.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const dir = process.argv[2]
if (!dir) { console.error('usage: node scripts/bankedsurvey-fire1044.mjs <faces-dir>'); process.exit(1) }
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))

// the receipt's own strict grammar - the emitter's ONE shape
// (deposit.mjs: 'banked ${deposited} items at ${chest.position.floored()}
// (direct=${directMoves} fallback=${directFalls} mirror=true kept: ...)')
// floored() prints 'x, y, z' (comma-space the Vec3's own join)
const STRICT = /^F\d+ \[F\d+\] banked (\d+) items at \((-?\d+), ?(-?\d+), ?(-?\d+)\) \(direct=(\d+) fallback=(\d+) mirror=true kept: (nothing|.*\S)\)$/

let strict = 0
let loose = 0
const variants = new Map()
const perFace = []
const items = new Map()
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  let s = 0
  for (const l of lines) {
    if (typeof l !== 'string' || !l.includes('banked')) continue
    const m = l.match(STRICT)
    if (m) {
      s++
      strict++
      items.set(m[7].split(',')[0].trim(), (items.get(m[7].split(',')[0].trim()) || 0) + 1)
    } else {
      loose++
      const key = l.slice(0, 90)
      variants.set(key, (variants.get(key) || 0) + 1)
    }
  }
  perFace.push(`${f}=${s}`)
}
console.log(`strict receipts: ${strict}  non-strict 'banked' mentions: ${loose}`)
console.log(perFace.join(' '))
console.log('--- kept-first-item top 12 ---')
;[...items.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12).forEach(([k, v]) => console.log(`${v}x ${k}`))
console.log('--- variant samples (top 14) ---')
;[...variants.entries()].sort((a, b) => b[1] - a[1]).slice(0, 14).forEach(([k, v]) => console.log(`${v}x | ${k}`))
