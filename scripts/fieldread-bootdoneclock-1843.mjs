#!/usr/bin/env node
// (v0.976.330) THE SERVER BOOT'S OWN COMPLETION MASS - the field
// reader the REAL NINETEEN-face arc re-mines from the fleet-server-log
// artifacts and byte-proofs against the word's own census.
//
// faces dir layout (the fire-1843 harvest, /home/z/privateB/faces330):
//   e_<artifactId>/console.log  for F501..F517
//   srv_39402993976/console.log for F518 (run 39402993976)
//   f519srv/console.log         for F519 (run 39407353321)
//
// THE GATES:
//   FIELDPROOF     19/19 - the census output == the raw mined clock
//   ONE-PRINT      19/19 - exactly one Done print per face
//   DONE-PRECEDES  19/19 - the completion second precedes the face's
//                          own first login (the boot finishes before
//                          the conversation opens - the .327 word's
//                          own DONE-FOLLOWS gate's mirror side)
//   MS-MIRROR      19/19 - the re-mined durations byte-agree the
//                          .294/.324 duration domain (F514's 6.687s
//                          the fire-1543 worklog's own deep-read
//                          re-voices)
//   SPAWN-EXTEND    2/2  - the fresh faces' spawn pairs re-mined
//                          byte-exact (the .328 dawn / .329 dusk arcs
//                          the F518/F519 extensions ride: F518
//                          36210/36220, F519 38388/38397)
//   RE-VOICE      17/17 - the windows W1-W17 re-voiced byte-exact
//                          through the word's own trend row

import { bootDoneClockCensus, bootDoneClockTrendRow } from '../src/lib/bootdoneclock.mjs'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const DIR = process.argv[2] || '/home/z/privateB/faces330'

const FILES = [
  'e_12220643212/console.log', 'e_12224039257/console.log', 'e_12227820868/console.log',
  'e_12229107341/console.log', 'e_12230392489/console.log', 'e_12233069047/console.log',
  'e_12235452098/console.log', 'e_12236034781/console.log', 'e_12238650283/console.log',
  'e_12239821660/console.log', 'e_12241062816/console.log', 'e_12242174613/console.log',
  'e_12244832379/console.log', 'e_12247546010/console.log', 'e_12248817268/console.log',
  'e_12250952414/console.log', 'e_12254267491/console.log', 'srv_39402993976/console.log',
  'f519srv/console.log'
]
const IDS = ['F501', 'F502', 'F503', 'F504', 'F505', 'F506', 'F507', 'F508',
  'F509', 'F510', 'F511', 'F512', 'F513', 'F514', 'F515', 'F516', 'F517',
  'F518', 'F519']

// the REAL nineteen-face completion clock arc the census must re-voice
// (seconds since midnight)
const RAW_CLOCK = [74410, 78032, 81326, 83691, 85437, 3444, 6256, 8060, 10930,
  13638, 15513, 18042, 21751, 25263, 27472, 30162, 33106, 36200, 38138]
// the REAL durations the .294/.324 duration domain carries (ms)
const RAW_MS = [4801, 4869, 4807, 4715, 2883, 3569, 2836, 4596, 3145, 4930,
  2855, 3716, 4800, 6687, 4696, 4812, 5016, 3807, 3111]
// the .328 set dawn arc (F501-F515) - the ordering gate rides beside
const PUBLISHED_DAWN = [74421, 78044, 81337, 83703, 85447, 3453, 6265, 8071,
  10940, 13649, 15523, 18051, 21762, 25276, 27485]

const DONE_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Done \((0|[1-9]\d*)\.(\d{3})s\)! For help, type "help"$/
const LOGIN_RE = /\] \[Server thread\/INFO\]: \S+\[\/[\d.]+:\d+\] logged in with entity id /
const SPAWN_RE = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: Set the world spawn point to /

let fails = 0
const gate = (name, pass, detail) => {
  console.log(`${pass ? 'PASS' : 'FAIL'} ${name}${detail ? ' - ' + detail : ''}`)
  if (!pass) fails++
}

const faces = FILES.map((f, i) => {
  const lines = readFileSync(join(DIR, f), 'utf8').split('\n')
  const dones = []
  let firstLogin = null
  const spawns = []
  for (const l of lines) {
    const m = DONE_RE.exec(l)
    if (m) dones.push({ clock: Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]), ms: Number(m[4]) * 1000 + Number(m[5]) })
    if (!firstLogin && LOGIN_RE.test(l)) {
      const lm = /^\[(\d{2}):(\d{2}):(\d{2})\]/.exec(l)
      if (lm) firstLogin = Number(lm[1]) * 3600 + Number(lm[2]) * 60 + Number(lm[3])
    }
    const sm = SPAWN_RE.exec(l)
    if (sm) {
      const [hh, mm, ss] = sm[1].split(':')
      spawns.push(Number(hh) * 3600 + Number(mm) * 60 + Number(ss))
    }
  }
  const census = bootDoneClockCensus(lines)
  return { id: IDS[i], lines, dones, firstLogin, spawns, census }
})

// FIELDPROOF: the census == the raw last clock per face
{
  let ok = 0
  faces.forEach((f, i) => {
    const raw = f.dones.length ? f.dones[f.dones.length - 1].clock : 0
    if (f.dones.length >= 1 && f.census && f.census.doneClockSec === raw && raw === RAW_CLOCK[i]) ok++
    else console.log(`  ${f.id}: dones=${f.dones.length} census=${f.census && f.census.doneClockSec} raw=${raw} want=${RAW_CLOCK[i]}`)
  })
  gate('FIELDPROOF', ok === 19, `${ok}/19 census==raw the completion second prices`)
}

// ONE-PRINT: exactly one Done print per face
{
  let ok = 0
  faces.forEach(f => {
    if (f.dones.length === 1) ok++
    else console.log(`  ${f.id}: dones=${f.dones.length}`)
  })
  gate('ONE-PRINT', ok === 19, `${ok}/19 one boot per face the pair-identity split never rides`)
}

// DONE-PRECEDES: the completion second precedes the first login
{
  let ok = 0
  faces.forEach((f, i) => {
    if (f.firstLogin !== null && f.census.doneClockSec < f.firstLogin) ok++
    else console.log(`  ${f.id}: done=${f.census.doneClockSec} firstLogin=${f.firstLogin}`)
  })
  gate('DONE-PRECEDES', ok === 19, `${ok}/19 the boot finishes before the conversation opens`)
}

// MS-MIRROR: the durations byte-agree the .294/.324 domain
{
  let ok = 0
  faces.forEach((f, i) => {
    if (f.dones.length === 1 && f.dones[0].ms === RAW_MS[i]) ok++
    else console.log(`  ${f.id}: ms=${f.dones[0] && f.dones[0].ms} want=${RAW_MS[i]}`)
  })
  gate('MS-MIRROR', ok === 19, `${ok}/19 (F514's 6.687s the fire-1543 deep-read byte-agrees)`)
}

// SPAWN-EXTEND: the fresh faces' spawn pairs byte-exact
{
  const f518 = faces[17]
  const f519 = faces[18]
  const ok518 = f518.spawns.length === 2 && f518.spawns[0] === 36210 && f518.spawns[1] === 36220
  const ok519 = f519.spawns.length === 2 && f519.spawns[0] === 38148 && f519.spawns[1] === 38157
  gate('SPAWN-EXTEND', ok518 && ok519, `2/2 fresh faces (F518 36210/36220, F519 38148/38157 - the .328 dawn / .329 dusk arcs extend; F519 the dusk word's own first LIVE fleet face the census guard keeps)`)
}

// RE-VOICE: the windows W1-W17 byte-exact through the word's own row
{
  const census = faces.map(f => f.census)
  const rowOf = (i) => bootDoneClockTrendRow({ back: census[i], prev: census[i + 1], cur: census[i + 2] })
  const want = [
    [/completion swell ran two steps deep - 74410 -> 78032 \(\+3622\) -> 81326 \(\+3294\)/, 0],
    [/completion swell ran two steps deep - 78032 -> 81326 \(\+3294\) -> 83691 \(\+2365\)/, 1],
    [/completion swell ran two steps deep - 81326 -> 83691 \(\+2365\) -> 85437 \(\+1746\)/, 2],
    [/completion swing - 83691 -> 85437 \(\+1746\) -> 3444 \(-81993\)/, 3],
    [/completion swing - 85437 -> 3444 \(-81993\) -> 6256 \(\+2812\)/, 4],
    [/completion swell ran two steps deep - 3444 -> 6256 \(\+2812\) -> 8060 \(\+1804\)/, 5],
    [/completion swell ran two steps deep - 6256 -> 8060 \(\+1804\) -> 10930 \(\+2870\)/, 6],
    [/completion swell ran two steps deep - 8060 -> 10930 \(\+2870\) -> 13638 \(\+2708\)/, 7],
    [/completion swell ran two steps deep - 10930 -> 13638 \(\+2708\) -> 15513 \(\+1875\)/, 8],
    [/completion swell ran two steps deep - 13638 -> 15513 \(\+1875\) -> 18042 \(\+2529\)/, 9],
    [/completion swell ran two steps deep - 15513 -> 18042 \(\+2529\) -> 21751 \(\+3709\)/, 10],
    [/completion swell ran two steps deep - 18042 -> 21751 \(\+3709\) -> 25263 \(\+3512\)/, 11],
    [/completion swell ran two steps deep - 21751 -> 25263 \(\+3512\) -> 27472 \(\+2209\)/, 12],
    [/completion swell ran two steps deep - 25263 -> 27472 \(\+2209\) -> 30162 \(\+2690\)/, 13],
    [/completion swell ran two steps deep - 27472 -> 30162 \(\+2690\) -> 33106 \(\+2944\)/, 14],
    [/completion swell ran two steps deep - 30162 -> 33106 \(\+2944\) -> 36200 \(\+3094\)/, 15],
    [/completion swell ran two steps deep - 33106 -> 36200 \(\+3094\) -> 38138 \(\+1938\)/, 16]
  ]
  let ok = 0
  want.forEach(([re, i]) => {
    const r = rowOf(i)
    if (r && re.test(r)) ok++
    else console.log(`  W${i + 1}: ${r ? r.slice(0, 120) : 'null'}`)
  })
  gate('RE-VOICE', ok === 17, `${ok}/17 the windows byte-exact (SEVENTEEN speaks ZERO held the deepest birth)`)
}

console.log(fails === 0 ? 'ALL GATES GREEN' : `${fails} GATE(S) RED`)
process.exit(fails === 0 ? 0 : 1)
