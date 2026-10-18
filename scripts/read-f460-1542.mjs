#!/usr/bin/env node
// (fire 1542) THE F460 WHOLE READ - the face's own vital lines + the
// words' own windows (mine: pwh .226, wrl .224; theirs: llr .227,
// fno .225, brt .223, vdt .220, abg .222, tst .215, bvt .221) over
// the fresh face460 + the neighbors - the first live fleet prints
// the round prices.
// usage: node scripts/read-f460-1542.mjs <faces-dir>
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { prePositionWalkHomeCount } from '../src/lib/prepositionwalkhometrend.mjs'
import { waterRescueLaneCount } from '../src/lib/waterrescuelanetrend.mjs'
import { liarLadderReachBook } from '../src/lib/liarladder.mjs'
import { furnaceNoWalkOpenCount } from '../src/lib/furnacenowalkopentrend.mjs'
import { bankedReceiptCount } from '../src/lib/bankedreceipttrend.mjs'
import { verticalDoomSkipCount } from '../src/lib/verticaldoomskiptrend.mjs'
import { airBarGlitchCount } from '../src/lib/airbarglitchtrend.mjs'
import { tunnelSteeringCount } from '../src/lib/tunnelsteeringtrend.mjs'

const dir = process.argv[2] || 'faces'
if (!statSync(dir, { throwIfNoEntry: false })?.isDirectory()) { console.error('faces dir missing'); process.exit(1) }
const faces = readdirSync(dir).filter(d => /^face\d+$/.test(d) && statSync(join(dir, d)).isDirectory()).sort((a, b) => Number(a.slice(4)) - Number(b.slice(4)))

// the vital-line families (the whole read)
const VITALS = [
  ['NORMAL END', /report: data\/fleet-report\.json written/],
  ['alive', /^F\d+ alive: (\d+)\/(\d+)/],
  ['mined', /^F\d+ mined: (\d+)/],
  ['banked', /^F\d+ banked: (\d+)/],
  ['smelted', /^F\d+ smelted: (\d+)/],
  ['deaths', /^F\d+ deaths?: (\d+)/],
  ['reconnect', /reconnect/i],
  ['kick', /^F\d+ kick/i],
  ['rescue', /rescue/i],
  ['air glitch', /air glitch/i],
  ['plan progress', /plan progress: (\d+)\/(\d+)/],
]

for (const f of faces.slice(-3)) {
  const lines = readFileSync(join(dir, f, 'fleet19.log'), 'utf8').split('\n')
  console.log(`===== ${f} (${lines.length} lines) =====`)
  const vit = {}
  for (const l of lines) {
    if (typeof l !== 'string') continue
    for (const [name, re] of VITALS) {
      const m = l.match(re)
      if (m) { (vit[name] ||= []).push(m[0].slice(0, 100)) }
    }
  }
  for (const [name] of VITALS) {
    const arr = vit[name] || []
    if (!arr.length) continue
    if (name === 'reconnect' || name === 'rescue' || name === 'air glitch' || name === 'kick') {
      console.log(`  ${name}: ${arr.length} lines; last: ${arr[arr.length - 1]}`)
    } else {
      console.log(`  ${name}: ${arr[arr.length - 1]}`)
    }
  }
  // the words' own per-face cells (the windows)
  const cell = {
    pwh: prePositionWalkHomeCount(lines),
    wrl: waterRescueLaneCount(lines),
    fno: furnaceNoWalkOpenCount(lines),
    brt: bankedReceiptCount(lines),
    vdt: verticalDoomSkipCount(lines),
    abg: airBarGlitchCount(lines),
    tst: tunnelSteeringCount(lines),
  }
  // llr needs the book API - the reach book holds the ratchets cell
  let llr = '-'
  try { llr = liarLadderReachBook(lines).ratchets } catch (e) { llr = 'ERR:' + e.message.slice(0, 40) }
  console.log('  CELLS', JSON.stringify({ ...cell, llr }))
}
console.log('read done: ' + faces.length + ' faces cached')
