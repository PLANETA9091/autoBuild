#!/usr/bin/env node
// (v0.976.332) THE FIELD READ - the fire-2133 round's own twenty-one-face
// proof: the .332 opening clock word priced against the REAL
// fleet-server-log faces (F501-F521, the artifacts the CI runs hold).
// GATES:
//   FIELDPROOF        - census == rawMax == LEDGER every face (21/21)
//   ONE-PRINT         - exactly one announcement print per face (21/21)
//   OPENING-PRECEDES  - the opening second never follows the selection second (21/21 - the .331 gate's mirror side)
//   SEL-MIRROR        - the re-mined selection clocks byte-agree the .331 arc (21/21 incl. F520/F521 extensions)
//   DONE-MIRROR       - the re-mined Done clocks byte-agree the .330 arc (21/21 incl. 42145/48753)
//   BURST-MIRROR      - the opening burst siblings (Loading properties / Generating keypair / Starting Minecraft server on) byte-equal the announcement second (21/21)
//   RE-VOICE          - the NINETEEN windows byte-exact (W1-W19)
import { readFileSync } from 'node:fs'
import { bootOpenClockCensus, bootOpenClockTrendRow } from '../src/lib/bootopenclock.mjs'

const FACES = ['F501', 'F502', 'F503', 'F504', 'F505', 'F506', 'F507', 'F508', 'F509', 'F510',
  'F511', 'F512', 'F513', 'F514', 'F515', 'F516', 'F517', 'F518', 'F519', 'F520', 'F521']
const RUNS = {
  F501: 39319100730, F502: 39327612804, F503: 39334531367, F504: 39338489283,
  F505: 39341992087, F506: 39349450602, F507: 39353992759, F508: 39356556714,
  F509: 39360759429, F510: 39364947414, F511: 39367608493, F512: 39371335466,
  F513: 39376695495, F514: 39382361698, F515: 39385906686, F516: 39391362502,
  F517: 39397311636, F518: 39402993976, F519: 39407353321, F520: 39415017928,
  F521: 39429320337
}
// the LEDGER - the opening clocks the artifacts hold (the beside-value
// pin law: the neighbour values recorded from the seat audit read)
const LEDGER = [74405, 78026, 81321, 83686, 85434, 3440, 6253, 8055, 10926, 13632,
  15510, 18037, 21746, 25256, 27466, 30156, 33101, 36196, 38134, 42142, 48750]
// the .331 published selection arc (worklog fire-2043 + F521's own face 48750)
const SEL_331 = [74406, 78027, 81322, 83687, 85435, 3441, 6253, 8056, 10927, 13633,
  15511, 18038, 21746, 25257, 27467, 30157, 33101, 36196, 38135, 42143, 48750]
// the .330 published Done arc (worklog 62c34f67 + F520 42145 + F521 48753)
const DONE_330 = [74410, 78032, 81326, 83691, 85437, 3444, 6256, 8060, 10930, 13638,
  15513, 18042, 21751, 25263, 27472, 30162, 33106, 36200, 38138, 42145, 48753]

const openRe = /^\[(\d{2}):(\d{2}):(\d{2})\] \[Server thread\/INFO\]: Starting minecraft server version \d+\.\d+$/
const selRe = /^\[(\d{2}):(\d{2}):(\d{2})\] \[Server thread\/INFO\]: Selecting global world spawn\.\.\.$/
const doneRe = /^\[(\d{2}):(\d{2}):(\d{2})\] \[Server thread\/INFO\]: Done \((\d+\.\d{3})s\)! For help, type "help"$/
const propRe = /^\[(\d{2}):(\d{2}):(\d{2})\] \[Server thread\/INFO\]: Loading properties$/
const gkRe = /^\[(\d{2}):(\d{2}):(\d{2})\] \[Server thread\/INFO\]: Generating keypair$/
const onRe = /^\[(\d{2}):(\d{2}):(\d{2})\] \[Server thread\/INFO\]: Starting Minecraft server on \*:25565$/
const sec = (h, m, s) => Number(h) * 3600 + Number(m) * 60 + Number(s)

let fieldproof = 0, oneprint = 0, precedes = 0, selMirror = 0, doneMirror = 0, burstMirror = 0
const rawOpen = [], rawSel = [], rawDone = [], censusOpen = []

for (const f of FACES) {
  const lines = readFileSync(`/home/z/faces331/${f}/console.log`, 'utf8').split('\n')
  const open = [], sel = [], done = [], prop = [], gk = [], on = []
  for (const l of lines) {
    let m = openRe.exec(l)
    if (m) { open.push(sec(m[1], m[2], m[3])); continue }
    m = selRe.exec(l)
    if (m) { sel.push(sec(m[1], m[2], m[3])); continue }
    m = doneRe.exec(l)
    if (m) { done.push(sec(m[1], m[2], m[3])); continue }
    m = propRe.exec(l)
    if (m) { prop.push(sec(m[1], m[2], m[3])); continue }
    m = gkRe.exec(l)
    if (m) { gk.push(sec(m[1], m[2], m[3])); continue }
    m = onRe.exec(l)
    if (m) { on.push(sec(m[1], m[2], m[3])) }
  }
  const i = FACES.indexOf(f)
  const openMax = open.length ? open[open.length - 1] : 0
  rawOpen.push(openMax)
  rawSel.push(sel.length ? sel[sel.length - 1] : 0)
  rawDone.push(done.length ? done[done.length - 1] : 0)
  const c = bootOpenClockCensus(lines)
  censusOpen.push(c.openClockSec)
  if (c.openClockSec === openMax && openMax === LEDGER[i]) fieldproof++
  if (open.length === 1) oneprint++
  if (openMax <= rawSel[i]) precedes++
  if (rawSel[i] === SEL_331[i]) selMirror++
  if (rawDone[i] === DONE_330[i]) doneMirror++
  // the burst-identity: every burst sibling byte-equals the announcement second
  if (prop.length && gk.length && on.length &&
    prop[prop.length - 1] === openMax && gk[gk.length - 1] === openMax && on[on.length - 1] === openMax) burstMirror++
}

console.log('face  run         openRaw census rawSel  selPub  rawDone donePub open<=sel burst')
FACES.forEach((f, i) => {
  console.log(f, RUNS[f], ' ', rawOpen[i], censusOpen[i], ' ', rawSel[i], SEL_331[i], ' ', rawDone[i], DONE_330[i], rawOpen[i] <= rawSel[i] ? 'YES' : 'NO',
    rawOpen[i] === rawSel[i] ? 'SAME' : 'one-earlier')
})

console.log('\nFIELDPROOF        ', fieldproof + '/21', fieldproof === 21 ? 'PASS' : 'FAIL')
console.log('ONE-PRINT         ', oneprint + '/21', oneprint === 21 ? 'PASS' : 'FAIL')
console.log('OPENING-PRECEDES  ', precedes + '/21', precedes === 21 ? 'PASS' : 'FAIL')
console.log('SEL-MIRROR        ', selMirror + '/21', selMirror === 21 ? 'PASS' : 'FAIL')
console.log('DONE-MIRROR       ', doneMirror + '/21', doneMirror === 21 ? 'PASS' : 'FAIL')
console.log('BURST-MIRROR      ', burstMirror + '/21', burstMirror === 21 ? 'PASS' : 'FAIL')

// RE-VOICE - the NINETEEN windows byte-exact
const WINDOWS = [
  '74405 -> 78026 (+3621) -> 81321 (+3295)', '78026 -> 81321 (+3295) -> 83686 (+2365)',
  '81321 -> 83686 (+2365) -> 85434 (+1748)', '83686 -> 85434 (+1748) -> 3440 (-81994)',
  '85434 -> 3440 (-81994) -> 6253 (+2813)', '3440 -> 6253 (+2813) -> 8055 (+1802)',
  '6253 -> 8055 (+1802) -> 10926 (+2871)', '8055 -> 10926 (+2871) -> 13632 (+2706)',
  '10926 -> 13632 (+2706) -> 15510 (+1878)', '13632 -> 15510 (+1878) -> 18037 (+2527)',
  '15510 -> 18037 (+2527) -> 21746 (+3709)', '18037 -> 21746 (+3709) -> 25256 (+3510)',
  '21746 -> 25256 (+3510) -> 27466 (+2210)', '25256 -> 27466 (+2210) -> 30156 (+2690)',
  '27466 -> 30156 (+2690) -> 33101 (+2945)', '30156 -> 33101 (+2945) -> 36196 (+3095)',
  '33101 -> 36196 (+3095) -> 38134 (+1938)', '36196 -> 38134 (+1938) -> 42142 (+4008)',
  '38134 -> 42142 (+4008) -> 48750 (+6608)'
]
let revoice = 0
for (let i = 0; i + 2 < LEDGER.length; i++) {
  const row = bootOpenClockTrendRow({ back: { openClockSec: LEDGER[i] }, prev: { openClockSec: LEDGER[i + 1] }, cur: { openClockSec: LEDGER[i + 2] } })
  if (row && row.includes(WINDOWS[i])) revoice++
}
console.log('RE-VOICE          ', revoice + '/19', revoice === 19 ? 'PASS' : 'FAIL')

// the decompose fold smoke - the LAST three faces the fold prices
const rows = LEDGER.slice(-3).map(v => ({ openClockSec: v }))
const foldRow = bootOpenClockTrendRow({ back: rows[0], prev: rows[1], cur: rows[2] })
console.log('\nFOLD SMOKE (W19):', foldRow ? foldRow.split(' - ')[1].slice(0, 60) + '...' : 'null')
const allPass = fieldproof === 21 && oneprint === 21 && precedes === 21 && selMirror === 21 &&
  doneMirror === 21 && burstMirror === 21 && revoice === 19
console.log('\nALL GATES:', allPass ? 'GREEN - the word speaks twenty-one faces deep' : 'RED')
process.exit(allPass ? 0 : 1)
