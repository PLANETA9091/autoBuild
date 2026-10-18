#!/usr/bin/env node
// (fire 1542) THE RATION LANE'S OWN SERIES - the strict grammar's own
// per-face counts over the cached faces (436..460): the ask shape and
// the outcome shape the ration gate prints, the lane's own mass the
// census prices. Derives the book (windows, top, floor, bounds, round
// trips) the word's own header pins byte-exact.
// usage: node scripts/derive-1542.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const dir = process.argv[2] || 'faces'
const ASK_RE = /^F\d+ \[F\d+\] ration: eating [a-z_]+ \(hunger (?:\?|\d+), hp (?:\?|\d+(?:\.\d+)?), (?:hunger-guard|health-guard|hunger-guard\+health-guard)\)$/
const OUT_RE = /^F\d+ \[F\d+\] ration: (?:ate|failed) [a-z_]+ \(hunger (?:\?|\d+) -> (?:\?|\d+), hp (?:\?|\d+(?:\.\d+)?) -> (?:\?|\d+(?:\.\d+)?)\)$/

const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))
const series = []
let strictAsk = 0, strictOut = 0, looseAsk = 0, looseOut = 0
for (const f of faces) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  let c = 0
  for (const l of lines) {
    if (typeof l !== 'string') continue
    if (l.includes('ration: ')) {
      if (l.includes('ration: eating')) { looseAsk++; if (ASK_RE.test(l)) { strictAsk++; c++ } }
      else if (/ration: (ate|failed) /.test(l)) { looseOut++; if (OUT_RE.test(l)) { strictOut++; c++ } }
    }
  }
  series.push([Number(f.slice(4)), c])
}
console.log('per-face series (face,count):')
for (const [f, c] of series) console.log(`  ${f}: ${c}`)
console.log('TOTAL lane mass:', series.reduce((s, [, c]) => s + c, 0), 'u /', series.length, 'f')
console.log('strict ask:', strictAsk, 'strict out:', strictOut, '| loose ask:', looseAsk, 'loose out:', looseOut)

// the book: windows over triples (W<curFace>), shape classes
const book = []
for (let i = 1; i < series.length - 1; i++) {
  const [f0, v0] = series[i - 1]
  const [, v1] = series[i]
  const [f2, v2] = series[i + 1]
  const a = v1 - v0, b = v2 - v1
  let shape = 'swing'
  if (a === 0 || b === 0) shape = 'silence'
  else if (a > 0 && b > 0) shape = 'swell'
  else if (a < 0 && b < 0) shape = 'fade'
  book.push({ w: f2, v0, v1, v2, a, b, shape })
}
const counts = { swell: 0, fade: 0, swing: 0, silence: 0 }
for (const w of book) counts[w.shape]++
console.log(`book: ${book.length} windows (${counts.swing} swings, ${counts.swell} swells, ${counts.fade} fades, ${counts.silence} silences)`)
for (const w of book) console.log(`  W${w.w} ${w.shape} ${w.v0} -> ${w.v1} (${w.a >= 0 ? '+' : ''}${w.a}) -> ${w.v2} (${w.b >= 0 ? '+' : ''}${w.b})`)

// top/floor
let top = series[0], floor = series[0]
for (const s of series) { if (s[1] > top[1]) top = s; if (s[1] < floor[1]) floor = s }
const topFaces = series.filter(([, c]) => c === top[1]).map(([f]) => f)
const floorFaces = series.filter(([, c]) => c === floor[1]).map(([f]) => f)
console.log('TOP', top[1], '@faces', topFaces.join(','), '| FLOOR', floor[1], '@faces', floorFaces.join(','))

// bounds + round trips
let maxRise = 0, maxFall = 0, rises = [], falls = []
for (const w of book) {
  if (w.a > 0) rises.push({ leg: w.a, b: `${w.w - 2}/${w.w - 1}` })
  if (w.a < 0) falls.push({ leg: w.a, b: `${w.w - 2}/${w.w - 1}` })
  if (w.b > 0) rises.push({ leg: w.b, b: `${w.w - 1}/${w.w}` })
  if (w.b < 0) falls.push({ leg: w.b, b: `${w.w - 1}/${w.w}` })
}
maxRise = Math.max(...rises.map(r => r.leg), 0)
maxFall = Math.min(...falls.map(r => r.leg), 0)
const rt = book.filter(w => w.a * w.b < 0 && Math.abs(w.a) === Math.abs(w.b)).map(w => w.w)
console.log('bounds: +' + maxRise, 'x' + rises.filter(r => r.leg === maxRise).length, 'leg(s) @', rises.filter(r => r.leg === maxRise).map(r => r.b).join('+'), '|', maxFall, 'x' + falls.filter(r => r.leg === maxFall).length, 'leg(s) @', falls.filter(r => r.leg === maxFall).map(r => r.b).join('+'))
console.log('round trips (|a|==|b| traded):', rt.length ? rt.join(',') : 'NONE')
