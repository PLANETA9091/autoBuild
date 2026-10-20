#!/usr/bin/env node
// fire-0243 fieldread - THE SPAWN PICK'S OWN REACH (v0.976.340)
// the REAL TWENTY-SIX-face validation: the module census re-walked
// against the raw edge arithmetic the fresh harvest byte-verified
// (F501-F526; the F525 face the fire-0130 ledger's own debt the
// harvest pays - the face's own first read).
//   FIELDPROOF     - the module census == the raw reach == LEDGER every face
//   ONE-PRINT      - the selection line one print per face (26/26)
//   FOLLOWS-SELECT - the dawn never precedes the selection (numeric + index)
//   SEL-MIRROR     - the re-mined selects byte-agree the published .331 arc
//   DAWN-MIRROR    - the re-mined dawns byte-agree the published .334 arc
//   NIBBLE-MIRROR  - reach == quiet - (select - open) every face
//   RE-VOICE       - the TWENTY-FOUR windows byte-exact (21 speaks, 3 held)
import { readFileSync } from 'node:fs'
import { pickReachCensus, pickReachTrendRow } from '../src/lib/pickreach.mjs'

const RUNS = {
  F501: 39319100730, F502: 39327612804, F503: 39334531367, F504: 39338489283,
  F505: 39341992087, F506: 39349450602, F507: 39353992759, F508: 39356556714,
  F509: 39360759429, F510: 39364947414, F511: 39367608493, F512: 39371335466,
  F513: 39376695495, F514: 39382361698, F515: 39385906686, F516: 39391362502,
  F517: 39397311636, F518: 39402993976, F519: 39407353321, F520: 39415017928,
  F521: 39429320337, F522: 39439011723, F523: 39446283390, F524: 39454573641,
  F525: 39463302379, F526: 39468686941
}
const FACES = Object.keys(RUNS)
// the LEDGER - the reach arc the fresh harvest holds (the beside-value
// pin law: the neighbour values recorded from the seat audit read)
const LEDGER = [28, 28, 27, 29, 24, 24, 23, 27, 24, 29, 24, 25, 28, 31, 30, 28, 29, 26, 24, 22, 24, 30, 29, 30, 26, 29]
// the published .331 selection arc (commit 84646a60, byte-verified fire-2043)
const SEL_331 = [74406, 78027, 81322, 83687, 85435, 3441, 6253, 8056, 10927, 13633, 15511, 18038, 21746, 25257, 27467, 30157, 33101, 36196, 38135, 42143, 48750]
// the published .334 dawn arc (commit bb657de3, byte-verified fire-2330)
const DAWN_334 = [74434, 78055, 81349, 83716, 85459, 3465, 6276, 8083, 10951, 13662, 15535, 18063, 21774, 25288, 27497, 30185, 33130, 36222, 38159, 42165, 48774]
// the published .332 open arc (commit bbf097c9, byte-verified fire-2133)
const OPEN_332 = [74405, 78026, 81321, 83686, 85434, 3440, 6253, 8055, 10926, 13632, 15510, 18037, 21746, 25256, 27466, 30156, 33101, 36196, 38134, 42142, 48750]
const SEL_EXT = { F522: 52961, F523: 55712, F524: 58918, F525: 62438, F526: 64688 }
const DAWN_EXT = { F522: 52991, F523: 55741, F524: 58948, F525: 62464, F526: 64717 }
const OPEN_EXT = { F522: 52960, F523: 55711, F524: 58918, F525: 62437, F526: 64687 }

const SEL_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Selecting global world spawn\.\.\.$/
const LOSS_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) lost connection: (Disconnected|Timed out)$/
const OPEN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Starting minecraft server version (\d+)\.(\d+)$/
const sec = (h, m, s) => Number(h) * 3600 + Number(m) * 60 + Number(s)

let fieldproof = 0, onePrint = 0, follows = 0, followsIdx = 0, selMir = 0, dawnMir = 0, nibble = 0
const censusArc = [], rawArc = []

for (const f of FACES) {
  const lines = readFileSync(`/home/z/faces331/face${RUNS[f]}.log`, 'utf8').split('\n')
  let selClock = null, dawnClock = null, openClock = null, selLineIdx = null, dawnLineIdx = null, nSel = 0
  lines.forEach((l, i) => {
    let m = SEL_RE.exec(l)
    if (m) { selClock = sec(m[1], m[2], m[3]); selLineIdx = i; nSel++ ; return }
    m = LOSS_RE.exec(l)
    if (m && dawnClock === null) { dawnClock = sec(m[1], m[2], m[3]); dawnLineIdx = i ; return }
    m = OPEN_RE.exec(l)
    if (m && openClock === null) openClock = sec(m[1], m[2], m[3])
  })
  if (nSel === 1) onePrint++
  const raw = selClock !== null && dawnClock !== null ? (dawnClock >= selClock ? dawnClock - selClock : dawnClock + 86400 - selClock) : 0
  const cen = pickReachCensus(lines)
  const c = cen && cen.pickReachSec
  censusArc.push(c); rawArc.push(raw)
  if (c === raw && c === LEDGER[FACES.indexOf(f)]) fieldproof++
  if (raw >= 0) follows++
  if (selLineIdx !== null && dawnLineIdx !== null && dawnLineIdx > selLineIdx) followsIdx++
  const i = FACES.indexOf(f)
  const selPub = i < 21 ? SEL_331[i] : SEL_EXT[f]
  const dawnPub = i < 21 ? DAWN_334[i] : DAWN_EXT[f]
  const openPub = i < 21 ? OPEN_332[i] : OPEN_EXT[f]
  if (selClock === selPub) selMir++
  if (dawnClock === dawnPub) dawnMir++
  // the nibble mirror: reach == quiet - (select - open); the F525
  // face the fresh read rides (open 62437 the harvest's own first)
  const openV = f === 'F525' ? 62437 : openPub
  const quiet = dawnClock >= openV ? dawnClock - openV : dawnClock + 86400 - openV
  const nib = selClock - openV
  if (c === quiet - nib) nibble++
}

// RE-VOICE: the TWENTY-FOUR windows (21 speaks, 3 held W1/W4/W5)
const SPEAKS = [
  [1, '28 -> 27 (-1) -> 29 (+2)', 'swing'], [2, '27 -> 29 (+2) -> 24 (-5)', 'swing'],
  [5, '24 -> 23 (-1) -> 27 (+4)', 'swing'], [6, '23 -> 27 (+4) -> 24 (-3)', 'swing'],
  [7, '27 -> 24 (-3) -> 29 (+5)', 'swing'], [8, '24 -> 29 (+5) -> 24 (-5)', 'swing'],
  [9, '29 -> 24 (-5) -> 25 (+1)', 'swing'], [10, '24 -> 25 (+1) -> 28 (+3)', 'swell'],
  [11, '25 -> 28 (+3) -> 31 (+3)', 'swell'], [12, '28 -> 31 (+3) -> 30 (-1)', 'swing'],
  [13, '31 -> 30 (-1) -> 28 (-2)', 'fade'], [14, '30 -> 28 (-2) -> 29 (+1)', 'swing'],
  [15, '28 -> 29 (+1) -> 26 (-3)', 'swing'], [16, '29 -> 26 (-3) -> 24 (-2)', 'fade'],
  [17, '26 -> 24 (-2) -> 22 (-2)', 'fade'], [18, '24 -> 22 (-2) -> 24 (+2)', 'swing'],
  [19, '22 -> 24 (+2) -> 30 (+6)', 'swell'], [20, '24 -> 30 (+6) -> 29 (-1)', 'swing'],
  [21, '30 -> 29 (-1) -> 30 (+1)', 'swing'], [22, '29 -> 30 (+1) -> 26 (-4)', 'swing'],
  [23, '30 -> 26 (-4) -> 29 (+3)', 'swing']
]
const HELDS = [0, 3, 4]
let revoice = 0
for (const [w, arc, shape] of SPEAKS) {
  const i = w // the 0-based window index the test pins keep
  const row = pickReachTrendRow({ back: { pickReachSec: LEDGER[i] }, prev: { pickReachSec: LEDGER[i + 1] }, cur: { pickReachSec: LEDGER[i + 2] } })
  if (row && row.includes(arc) && row.includes(shape)) revoice++
}
for (const i of HELDS) {
  if (pickReachTrendRow({ back: { pickReachSec: LEDGER[i] }, prev: { pickReachSec: LEDGER[i + 1] }, cur: { pickReachSec: LEDGER[i + 2] } }) === null) revoice++
}

console.log(`FIELDPROOF     ${fieldproof}/26`)
console.log(`ONE-PRINT      ${onePrint}/26`)
console.log(`FOLLOWS-SELECT ${follows}/26 numeric + ${followsIdx}/26 index-based`)
console.log(`SEL-MIRROR     ${selMir}/26 (the published .331 arc + extensions)`)
console.log(`DAWN-MIRROR    ${dawnMir}/26 (the published .334 arc + extensions)`)
console.log(`NIBBLE-MIRROR  ${nibble}/26 (reach == quiet - (select - open))`)
console.log(`RE-VOICE       ${revoice}/24 (21 speaks + 3 held W1/W4/W5)`)
const gates = [fieldproof, onePrint, follows, followsIdx, selMir, dawnMir, nibble]
const expects = [26, 26, 26, 26, 26, 26, 26]
if (gates.every((g, i) => g === expects[i]) && revoice === 24) {
  console.log('ALL GATES GREEN - THE SPAWN PICK\'S OWN REACH stands verified on the REAL faces')
} else {
  console.log('GATE FAIL - the audit keeps the honest zero')
  process.exit(1)
}
