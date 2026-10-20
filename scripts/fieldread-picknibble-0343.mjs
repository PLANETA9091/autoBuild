#!/usr/bin/env node
// fire-0343 fieldread - the picknibble word's own multi-gate validation
// over the REAL artifacts (F501-F528, the harvest the ledger keeps).
//   node scripts/fieldread-picknibble-0343.mjs
// Gates:
//   FIELDPROOF      the census re-voices all 28 faces' nibbles (22x1 / 6x0)
//   ONE-PRINT       opens=1 sels=1 per face 28/28 (the LAST==FIRST equivalence)
//   OPENING-PRECEDES  open <= select numeric 28/28 (the nibble never negative)
//   OPEN-MIRROR     the open hands byte-agree the published .332 arc + extensions
//   SEL-MIRROR      the select hands byte-agree the published .331 arc + extensions
//   NIBBLE-MIRROR   quiet - nibble == reach per face (the .337/.340 identity live)
//   RE-VOICE        the trend row windows re-voiced (4 speaks / 22 helds)
import { readFileSync, existsSync } from 'node:fs'
import { pickNibbleCensus, pickNibbleConsistent, pickNibbleTrendRow } from '../src/lib/picknibble.mjs'

const RUNS = {
  F501: 39319100730, F502: 39327612804, F503: 39334531367, F504: 39338489283,
  F505: 39341992087, F506: 39349450602, F507: 39353992759, F508: 39356556714,
  F509: 39360759429, F510: 39364947414, F511: 39367608493, F512: 39371335466,
  F513: 39376695495, F514: 39382361698, F515: 39385906686, F516: 39391362502,
  F517: 39397311636, F518: 39402993976, F519: 39407353321, F520: 39415017928,
  F521: 39429320337, F522: 39439011723, F523: 39446283390, F524: 39454573641,
  F525: 39463302379, F526: 39468686941, F527: 39475545027, F528: 39481559762
}
const OPEN_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Starting minecraft server version (\d+)\.(\d+)$/
const SEL_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: Selecting global world spawn\.\.\.$/
const LOSS_RE = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: \S+ lost connection: (Disconnected|Timed out)$/
const toSec = (m) => Number(m[1]) * 3600 + Number(m[2]) * 60 + Number(m[3])

// the published arcs the commit messages hold (the .332 open arc
// F501-F521 + extensions, the .331 select arc F501-F521 + extensions)
const OPEN_ARC = [74405, 78026, 81321, 83686, 85434, 3440, 6253, 8055, 10926, 13632, 15510, 18037, 21746, 25256, 27466, 30156, 33101, 36196, 38134, 42142, 48750, 52960, 55711, 58918, 62437, 64687, 67771, 70032]
const SEL_ARC = [74406, 78027, 81322, 83687, 85435, 3441, 6253, 8056, 10927, 13633, 15511, 18038, 21746, 25257, 27467, 30157, 33101, 36196, 38135, 42143, 48750, 52961, 55712, 58918, 62438, 64688, 67772, 70033]
const NIBBLE_ARC = [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1]
// the .340 reach arc F501-F526 + the F527 (29) / F528 (25) extensions
const REACH_ARC = [28, 28, 27, 29, 24, 24, 23, 27, 24, 29, 24, 25, 28, 31, 30, 28, 29, 26, 24, 22, 24, 30, 29, 30, 26, 29, 29, 25]

const faces = []
for (const [f, run] of Object.entries(RUNS)) {
  const p = `/home/z/faces331/face${run}.log`
  if (!existsSync(p)) { console.log(`${f} NOCACHE`); process.exit(1) }
  const lines = readFileSync(p, 'utf8').split('\n')
  let open = null, sel = null, dawn = null
  let openN = 0, selN = 0
  let openFirst = null, selFirst = null
  for (const l of lines) {
    if (typeof l !== 'string') continue
    const o = OPEN_RE.exec(l)
    if (o) { if (openFirst === null) openFirst = toSec(o); open = toSec(o); openN++ }
    const s = SEL_RE.exec(l)
    if (s) { if (selFirst === null) selFirst = toSec(s); sel = toSec(s); selN++ }
    const d = LOSS_RE.exec(l)
    if (d && dawn === null) dawn = toSec(d)
  }
  faces.push({ f, lines, census: pickNibbleCensus(lines), open, sel, dawn, openN, selN, openFirst, selFirst })
}

let fails = 0
const gate = (name, ok, detail) => {
  console.log(`${ok ? 'PASS' : 'FAIL'} ${name} ${detail}`)
  if (!ok) fails++
}

// FIELDPROOF
{
  const priced = faces.map(x => x.census.pickNibbleSec)
  const ok = priced.length === 28 && JSON.stringify(priced) === JSON.stringify(NIBBLE_ARC)
  gate('FIELDPROOF', ok, `28 faces priced ${priced.filter(v => v === 1).length}x1 / ${priced.filter(v => v === 0).length}x0`)
}
// ONE-PRINT
{
  const ok = faces.every(x => x.openN === 1 && x.selN === 1) &&
    faces.every(x => x.open === x.openFirst && x.sel === x.selFirst)
  gate('ONE-PRINT', ok, '28/28 opens=1 sels=1, LAST==FIRST both hands')
}
// OPENING-PRECEDES
{
  const okNum = faces.every(x => x.open <= x.sel)
  const okNib = faces.every(x => x.census.pickNibbleSec >= 0)
  gate('OPENING-PRECEDES', okNum && okNib, `numeric 28/28, nibble >= 0 28/28`)
}
// OPEN-MIRROR
{
  const hands = faces.map(x => x.open)
  const ok = JSON.stringify(hands) === JSON.stringify(OPEN_ARC)
  gate('OPEN-MIRROR', ok, `28 hands vs published .332 arc+ext ${ok ? 'byte-agree' : 'MISMATCH'}`)
}
// SEL-MIRROR
{
  const hands = faces.map(x => x.sel)
  const ok = JSON.stringify(hands) === JSON.stringify(SEL_ARC)
  gate('SEL-MIRROR', ok, `28 hands vs published .331 arc+ext ${ok ? 'byte-agree' : 'MISMATCH'}`)
}
// NIBBLE-MIRROR: quiet - nibble == reach per face (quiet = dawn - open)
{
  let checked = 0, agree = 0
  for (let i = 0; i < faces.length; i++) {
    const x = faces[i]
    if (x.dawn === null) continue
    const quiet = x.dawn >= x.open ? x.dawn - x.open : x.dawn + 86400 - x.open
    const reach = REACH_ARC[i]
    if (quiet - x.census.pickNibbleSec === reach) agree++
    checked++
  }
  gate('NIBBLE-MIRROR', agree === 28 && checked === 28, `quiet - nibble == reach ${agree}/${checked}`)
}
// RE-VOICE: the trend windows (26 windows, 4 speaks W6/W12/W20/W23)
{
  let speaks = 0, helds = 0
  const speakIdx = []
  for (let i = 0; i < 26; i++) {
    const row = pickNibbleTrendRow({ back: { pickNibbleSec: NIBBLE_ARC[i] }, prev: { pickNibbleSec: NIBBLE_ARC[i + 1] }, cur: { pickNibbleSec: NIBBLE_ARC[i + 2] } })
    if (row === null) helds++
    else { speaks++; speakIdx.push(i + 1) }
  }
  const ok = speaks === 4 && helds === 22 && JSON.stringify(speakIdx) === JSON.stringify([6, 12, 20, 23])
  // the fence the whole arc consistent
  const fenceOk = NIBBLE_ARC.every(v => pickNibbleConsistent({ back: { pickNibbleSec: v }, prev: { pickNibbleSec: v }, cur: { pickNibbleSec: v } }))
  gate('RE-VOICE', ok && fenceOk, `26 windows ${speaks} speaks (W${speakIdx.join('/W')}) ${helds} helds, fence ok=${fenceOk}`)
}

console.log(fails === 0 ? 'ALL GATES GREEN' : `${fails} GATES RED`)
process.exit(fails === 0 ? 0 : 1)
