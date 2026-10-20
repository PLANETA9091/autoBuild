#!/usr/bin/env node
// (v0.976.334) THE FIELD READ - the fire-2330 round's own twenty-one-face
// proof: the .334 loss dawn word priced against the REAL
// fleet-server-log faces (F501-F521, the artifacts the CI runs hold).
// GATES:
//   FIELDPROOF        - census == rawFirst == LEDGER every face (21/21)
//   DAWN-BEFORE-DUSK  - the first loss never follows the last loss, wrap-aware (21/21 - the .333 CLOSING-FOLLOWS gate's mirror side)
//   FOLLOWS-OPEN      - the first loss LINE never precedes the boot opening LINE (index-based, wrap-immune) (21/21)
//   DUSK-MIRROR       - the re-mined closing clocks byte-agree the .333 arc (21/21 incl. F505's wrap face)
//   FIRST-BREATH      - the first loss print is YardSurvey's own drop every face (21/21)
//   RE-VOICE          - the NINETEEN windows byte-exact (W1-W19)
import { readFileSync } from 'node:fs'
import { fleetLossDawnCensus, fleetLossDawnTrendRow } from '../src/lib/fleetlossdawn.mjs'

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
// the LEDGER - the loss dawns the artifacts hold (the beside-value
// pin law: the neighbour values recorded from the seat audit read)
const LEDGER = [74434, 78055, 81349, 83716, 85459, 3465, 6276, 8083, 10951, 13662,
  15535, 18063, 21774, 25288, 27497, 30185, 33130, 36222, 38159, 42165, 48774]
// the .333 published closing arc (commit 4e603d43, byte-verified fire-2230)
const DUSK_333 = [75321, 78952, 82284, 84537, 20, 4257, 7140, 8913, 11718, 14463,
  16495, 18904, 22723, 26241, 28054, 31146, 33830, 36919, 39120, 42849, 49548]

const lossRe = /^\[(2[0-3]|[01]\d):([0-5]\d):([0-5]\d)\] \[Server thread\/INFO\]: (\S+) lost connection: (Disconnected|Timed out)$/
const openRe = /^\[\d{2}:\d{2}:\d{2}\] \[Server thread\/INFO\]: Starting minecraft server version \d+\.\d+$/
const sec = (h, m, s) => Number(h) * 3600 + Number(m) * 60 + Number(s)

let fieldproof = 0, dawnBefore = 0, followsOpen = 0, duskMirror = 0, firstBreath = 0
const rawFirst = [], censusFirst = []

for (const f of FACES) {
  const lines = readFileSync(`/home/z/faces334/F0${f.slice(1)}/console.log`, 'utf8').split('\n')
  const losses = [] // {s, i, name}
  let openIdx = -1
  for (let i = 0; i < lines.length; i++) {
    if (openIdx < 0 && openRe.exec(lines[i])) openIdx = i
    const m = lossRe.exec(lines[i])
    if (m) losses.push({ s: sec(m[1], m[2], m[3]), i, name: m[4] })
  }
  const i = FACES.indexOf(f)
  const first = losses.length ? losses[0].s : 0
  const last = losses.length ? losses[losses.length - 1].s : 0
  rawFirst.push(first)
  const c = fleetLossDawnCensus(lines)
  censusFirst.push(c.lossDawnSec)
  if (c.lossDawnSec === first && first === LEDGER[i]) fieldproof++
  // wrap-aware: the face crossing midnight rides the dusk into the
  // next day's small numbers (F505: dawn 85459, dusk 20) - the dawn
  // never follows the dusk in REAL time the wrap keeps
  if (first <= last || last < 3600) dawnBefore++
  if (losses.length && openIdx >= 0 && losses[0].i > openIdx) followsOpen++
  if (last === DUSK_333[i]) duskMirror++
  if (losses.length && losses[0].name === 'YardSurvey') firstBreath++
}
console.log('FIELDPROOF       ', fieldproof + '/21', fieldproof === 21 ? 'PASS' : 'FAIL')
console.log('DAWN-BEFORE-DUSK ', dawnBefore + '/21', dawnBefore === 21 ? 'PASS' : 'FAIL (wrap-aware)')
console.log('FOLLOWS-OPEN     ', followsOpen + '/21', followsOpen === 21 ? 'PASS' : 'FAIL')
console.log('DUSK-MIRROR      ', duskMirror + '/21', duskMirror === 21 ? 'PASS' : 'FAIL')
console.log('FIRST-BREATH     ', firstBreath + '/21', firstBreath === 21 ? 'PASS' : 'FAIL')

const WINDOWS = [
  '74434 -> 78055 (+3621) -> 81349 (+3294)', '78055 -> 81349 (+3294) -> 83716 (+2367)',
  '81349 -> 83716 (+2367) -> 85459 (+1743)', '83716 -> 85459 (+1743) -> 3465 (-81994)',
  '85459 -> 3465 (-81994) -> 6276 (+2811)', '3465 -> 6276 (+2811) -> 8083 (+1807)',
  '6276 -> 8083 (+1807) -> 10951 (+2868)', '8083 -> 10951 (+2868) -> 13662 (+2711)',
  '10951 -> 13662 (+2711) -> 15535 (+1873)', '13662 -> 15535 (+1873) -> 18063 (+2528)',
  '15535 -> 18063 (+2528) -> 21774 (+3711)', '18063 -> 21774 (+3711) -> 25288 (+3514)',
  '21774 -> 25288 (+3514) -> 27497 (+2209)', '25288 -> 27497 (+2209) -> 30185 (+2688)',
  '27497 -> 30185 (+2688) -> 33130 (+2945)', '30185 -> 33130 (+2945) -> 36222 (+3092)',
  '33130 -> 36222 (+3092) -> 38159 (+1937)', '36222 -> 38159 (+1937) -> 42165 (+4006)',
  '38159 -> 42165 (+4006) -> 48774 (+6609)'
]
let revoice = 0
for (let i = 0; i + 2 < LEDGER.length; i++) {
  const row = fleetLossDawnTrendRow({ back: { lossDawnSec: LEDGER[i] }, prev: { lossDawnSec: LEDGER[i + 1] }, cur: { lossDawnSec: LEDGER[i + 2] } })
  if (row && row.includes(WINDOWS[i])) revoice++
}
console.log('RE-VOICE         ', revoice + '/19', revoice === 19 ? 'PASS' : 'FAIL')

// the decompose fold smoke - the LAST three faces the fold prices
const rows = LEDGER.slice(-3).map(v => ({ lossDawnSec: v }))
const foldRow = fleetLossDawnTrendRow({ back: rows[0], prev: rows[1], cur: rows[2] })
console.log('\nFOLD SMOKE (W19):', foldRow ? foldRow.split(' - ')[1].slice(0, 60) + '...' : 'null')
const allPass = fieldproof === 21 && dawnBefore === 21 && followsOpen === 21 &&
  duskMirror === 21 && firstBreath === 21 && revoice === 19
console.log('\nALL GATES:', allPass ? 'GREEN - the word speaks twenty-one faces deep' : 'RED')
process.exit(allPass ? 0 : 1)
