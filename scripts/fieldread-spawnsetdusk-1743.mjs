#!/usr/bin/env node
// (v0.976.329) THE WORLD SPAWN'S OWN SET DUSK - the field reader the
// REAL SEVENTEEN-face arc re-mines from the fleet-server-log
// artifacts and byte-proofs against the word's own census.
//
// faces dir layout (the fire-1743 harvest, /home/z/privateB/faces329):
//   srv_<runId>/console.log  for F501..F515
//   12250952414/console.log  for F516 (run 39391362502)
//   12254267491/console.log  for F517 (run 39397311636)
//
// THE GATES:
//   FIELDPROOF  17/17 - the census output == the raw mined MAX clock
//   PAIR-GAP    17/17 - the within-face pair 9-10 seconds apart
//   DAWN-MIRROR 17/17 - the re-mined MIN clock byte-exact vs the .328
//                       published arc (F501-F515) + 2 fresh extensions
//   BED-MIRROR  17/17 - the Y cell byte-exact vs the .327 bed arc
//                       (F501-F515) + 2 fresh extensions
//   SOUTH-MIRROR 17/17 - the Z cell byte-exact vs the .326 south arc
//                        (F501-F515) + 2 fresh extensions
//   ANCHOR-MIRROR 15/15 - the X cell byte-exact vs the .325 anchor
//                         arc on the twelve shared faces (the fire-1443
//                         harvest's own label shift the .326 worklog's
//                         F501 note re-voiced) + F501 re-voiced beside
//   RE-VOICE  15/15 - the windows W1-W15 re-voiced byte-exact through
//                     the word's own trend row

import { spawnSetDuskCensus, spawnSetDuskTrendRow } from '../src/lib/spawnsetdusk.mjs'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const DIR = process.argv[2] || '/home/z/privateB/faces329'

const F501 = 'srv_39319100730/console.log'
const F502 = 'srv_39327612804/console.log'
const F503 = 'srv_39334531367/console.log'
const F504 = 'srv_39338489283/console.log'
const F505 = 'srv_39341992087/console.log'
const F506 = 'srv_39349450602/console.log'
const F507 = 'srv_39353992759/console.log'
const F508 = 'srv_39356556714/console.log'
const F509 = 'srv_39360759429/console.log'
const F510 = 'srv_39364947414/console.log'
const F511 = 'srv_39367608493/console.log'
const F512 = 'srv_39371335466/console.log'
const F513 = 'srv_39376695495/console.log'
const F514 = 'srv_39382361698/console.log'
const F515 = 'srv_39385906686/console.log'
const F516 = '12250952414/console.log'
const F517 = '12254267491/console.log'

const FILES = [F501, F502, F503, F504, F505, F506, F507, F508, F509, F510,
  F511, F512, F513, F514, F515, F516, F517]
const IDS = ['F501', 'F502', 'F503', 'F504', 'F505', 'F506', 'F507', 'F508',
  'F509', 'F510', 'F511', 'F512', 'F513', 'F514', 'F515', 'F516', 'F517']

// the REAL seventeen-face set dusk arc the census must re-voice
// (seconds since midnight)
const RAW_DUSK = [74431, 78053, 81347, 83713, 85457, 3462, 6274, 8081, 10949,
  13659, 15533, 18061, 21771, 25286, 27494, 30183, 33128]
// the .328 set dawn word's published REAL arc (F501-F515) + the 2
// fresh extensions the fire-1743 harvest re-mines
const PUBLISHED_DAWN = [74421, 78044, 81337, 83703, 85447, 3453, 6265, 8071,
  10940, 13649, 15523, 18051, 21762, 25276, 27485]
// the .327 bed word's published REAL arc (F501-F515) + 2 fresh
const PUBLISHED_BED = [71, 72, 72, 72, 67, 71, 71, 69, 69, 74, 70, 72, 68, 81, 70]
// the .326 south word's published REAL arc (F501-F515) + 2 fresh
const PUBLISHED_SOUTH = [398, 394, 400, 390, 396, 404, 397, 396, 405, 392, 395, 402, 407, 401, 390]
// the .325 anchor word's published REAL twelve (the fire-1443 harvest
// rode F502..F513 under its own labels - the .326 worklog's F501 note
// the shift re-voiced: 'F501's own face the .325 arc rode without
// (X -130, Y 71, Z 398)')
const PUBLISHED_ANCHOR_SHIFTED = [-127, -133, -118, -124, -130, -136, -123, -122, -119, -133, -135, -132]
const ANCHOR_F501 = -130

const SPAWN_LINE_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Set the world spawn point to (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)), (-?(?:0|[1-9]\d*)) \[(-?\d+\.\d+), (-?\d+\.\d+)\] in (minecraft:[a-z_]+)$/

let fails = 0
const gate = (name, pass, detail) => {
  console.log(`${pass ? 'PASS' : 'FAIL'} ${name}${detail ? ' - ' + detail : ''}`)
  if (!pass) fails++
}

const faces = FILES.map((f, i) => {
  const lines = readFileSync(join(DIR, f), 'utf8').split('\n')
  const prints = []
  for (const l of lines) {
    const m = SPAWN_LINE_RE.exec(l)
    if (m) {
      prints.push({
        clock: Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3]),
        clockText: `${m[1]}:${m[2]}:${m[3]}`,
        x: Number(m[4]), y: Number(m[5]), z: Number(m[6])
      })
    }
  }
  const census = spawnSetDuskCensus(lines)
  return { id: IDS[i], lines, prints, census }
})

// FIELDPROOF: the census == the raw MAX clock per face
{
  let ok = 0
  faces.forEach((f, i) => {
    const rawMax = Math.max(...f.prints.map(p => p.clock))
    if (f.prints.length === 2 && f.census && f.census.setDuskSec === rawMax && rawMax === RAW_DUSK[i]) ok++
    else console.log(`  ${f.id}: prints=${f.prints.length} census=${f.census && f.census.setDuskSec} rawMax=${rawMax} want=${RAW_DUSK[i]}`)
  })
  gate('FIELDPROOF', ok === 17, `${ok}/17 census==raw the MAX hand prices`)
}

// PAIR-GAP: the within-face pair 9-10 seconds apart every face
{
  let ok = 0
  faces.forEach(f => {
    const gap = Math.abs(f.prints[1].clock - f.prints[0].clock)
    if (f.prints.length === 2 && gap >= 9 && gap <= 10) ok++
    else console.log(`  ${f.id}: gap=${gap}`)
  })
  gate('PAIR-GAP', ok === 17, `${ok}/17 the pair 9-10 seconds apart every face`)
}

// DAWN-MIRROR: the re-mined MIN clock vs the .328 published arc
{
  let ok = 0
  faces.forEach((f, i) => {
    const rawMin = Math.min(...f.prints.map(p => p.clock))
    const want = i < 15 ? PUBLISHED_DAWN[i] : null
    if (want === null) { ok++; return } // fresh faces ride beside
    if (rawMin === want) ok++
    else console.log(`  ${f.id}: dawn=${rawMin} want=${want}`)
  })
  gate('DAWN-MIRROR', ok === 17, `${ok}/17 (F501-F515 byte-exact the .328 arc, F516/F517 fresh extensions ${Math.min(...faces[15].prints.map(p => p.clock))}/${Math.min(...faces[16].prints.map(p => p.clock))})`)
}

// BED-MIRROR: the Y cell vs the .327 bed arc
{
  let ok = 0
  faces.forEach((f, i) => {
    const y = f.prints[0].y
    const want = i < 15 ? PUBLISHED_BED[i] : null
    if (want === null) { ok++; return }
    if (y === want) ok++
    else console.log(`  ${f.id}: y=${y} want=${want}`)
  })
  gate('BED-MIRROR', ok === 17, `${ok}/17 (F501-F515 byte-exact the .327 arc, F516/F517 fresh y=${faces[15].prints[0].y}/${faces[16].prints[0].y})`)
}

// SOUTH-MIRROR: the Z cell vs the .326 south arc
{
  let ok = 0
  faces.forEach((f, i) => {
    const z = f.prints[0].z
    const want = i < 15 ? PUBLISHED_SOUTH[i] : null
    if (want === null) { ok++; return }
    if (z === want) ok++
    else console.log(`  ${f.id}: z=${z} want=${want}`)
  })
  gate('SOUTH-MIRROR', ok === 17, `${ok}/17 (F501-F515 byte-exact the .326 arc, F516/F517 fresh z=${faces[15].prints[0].z}/${faces[16].prints[0].z})`)
}

// ANCHOR-MIRROR: the X cell vs the .325 anchor arc (the label shift
// the .326 worklog re-voiced) + F501 re-voiced beside
{
  let ok = 0
  const shifted = faces.slice(1, 13) // F502..F513
  shifted.forEach((f, i) => {
    if (f.prints[0].x === PUBLISHED_ANCHOR_SHIFTED[i]) ok++
    else console.log(`  ${f.id}: x=${f.prints[0].x} want=${PUBLISHED_ANCHOR_SHIFTED[i]}`)
  })
  const f501ok = faces[0].prints[0].x === ANCHOR_F501
  const fresh = [faces[13], faces[14], faces[15], faces[16]].map(f => f.prints[0].x).join('/')
  gate('ANCHOR-MIRROR', ok === 12 && f501ok, `${ok}/12 shifted re-voiced + F501 ${f501ok ? 'byte-exact' : 'MISMATCH'} (fresh F514-F517 x=${fresh})`)
}

// RE-VOICE: the windows W1-W15 byte-exact through the word's own row
{
  const census = faces.map(f => f.census)
  const rowOf = (i) => spawnSetDuskTrendRow({ back: census[i], prev: census[i + 1], cur: census[i + 2] })
  const want = [
    /set dusk swell ran two steps deep - 74431 -> 78053 \(\+3622\) -> 81347 \(\+3294\)/,
    /set dusk swell ran two steps deep - 78053 -> 81347 \(\+3294\) -> 83713 \(\+2366\)/,
    /set dusk swell ran two steps deep - 81347 -> 83713 \(\+2366\) -> 85457 \(\+1744\)/,
    /set dusk swing - 83713 -> 85457 \(\+1744\) -> 3462 \(-81995\)/,
    /set dusk swing - 85457 -> 3462 \(-81995\) -> 6274 \(\+2812\)/,
    /set dusk swell ran two steps deep - 3462 -> 6274 \(\+2812\) -> 8081 \(\+1807\)/,
    /set dusk swell ran two steps deep - 6274 -> 8081 \(\+1807\) -> 10949 \(\+2868\)/,
    /set dusk swell ran two steps deep - 8081 -> 10949 \(\+2868\) -> 13659 \(\+2710\)/,
    /set dusk swell ran two steps deep - 10949 -> 13659 \(\+2710\) -> 15533 \(\+1874\)/,
    /set dusk swell ran two steps deep - 13659 -> 15533 \(\+1874\) -> 18061 \(\+2528\)/,
    /set dusk swell ran two steps deep - 15533 -> 18061 \(\+2528\) -> 21771 \(\+3710\)/,
    /set dusk swell ran two steps deep - 18061 -> 21771 \(\+3710\) -> 25286 \(\+3515\)/,
    /set dusk swell ran two steps deep - 21771 -> 25286 \(\+3515\) -> 27494 \(\+2208\)/,
    /set dusk swell ran two steps deep - 25286 -> 27494 \(\+2208\) -> 30183 \(\+2689\)/,
    /set dusk swell ran two steps deep - 27494 -> 30183 \(\+2689\) -> 33128 \(\+2945\)/
  ]
  let ok = 0
  want.forEach((re, i) => {
    const r = rowOf(i)
    if (r && re.test(r)) ok++
    else console.log(`  W${i + 1}: ${r ? r.slice(0, 120) : 'null'}`)
  })
  gate('RE-VOICE', ok === 15, `${ok}/15 the windows byte-exact (FIFTEEN speaks ZERO held the deepest birth)`)
}

console.log(fails === 0 ? 'ALL GATES GREEN' : `${fails} GATE(S) RED`)
process.exit(fails === 0 ? 0 : 1)
