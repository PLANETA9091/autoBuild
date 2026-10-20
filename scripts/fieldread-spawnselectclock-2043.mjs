#!/usr/bin/env node
// (v0.976.331) THE FIELD READ - the fire-2043 round's own twenty-face
// proof: the .331 selection clock word priced against the REAL
// fleet-server-log faces (F501-F520, the artifacts the CI runs hold).
// GATES:
//   FIELDPROOF        - census == rawMax == LEDGER every face (20/20)
//   ONE-PRINT         - exactly one 'Selecting global world spawn...' print per face (20/20)
//   SELECTION-PRECEDES- the selection second precedes the Done completion second every face (20/20 - the phase law, the .330 gate's mirror side)
//   DONE-MIRROR       - the re-mined Done clocks byte-agree the .330 published arc F501-F519 + F520 extends (20/20)
//   SETDAWN-MIRROR    - the re-mined set dawn clocks byte-agree the .328 published arc F501-F519 (19/19)
//   PREP-MS-MIRROR    - the re-mined prep ms cells byte-agree the .293 lane's own face prints (20/20 recorded)
//   RE-VOICE          - the EIGHTEEN windows byte-exact (W1-W18)
import { readFileSync } from 'node:fs'
import { spawnSelectClockCensus, spawnSelectClockTrendRow } from '../src/lib/spawnselectclock.mjs'

const FACES = ['F501', 'F502', 'F503', 'F504', 'F505', 'F506', 'F507', 'F508', 'F509', 'F510',
  'F511', 'F512', 'F513', 'F514', 'F515', 'F516', 'F517', 'F518', 'F519', 'F520']
const RUNS = {
  F501: 39319100730, F502: 39327612804, F503: 39334531367, F504: 39338489283,
  F505: 39341992087, F506: 39349450602, F507: 39353992759, F508: 39356556714,
  F509: 39360759429, F510: 39364947414, F511: 39367608493, F512: 39371335466,
  F513: 39376695495, F514: 39382361698, F515: 39385906686, F516: 39391362502,
  F517: 39397311636, F518: 39402993976, F519: 39407353321, F520: 39415017928
}
// the LEDGER - the selection clocks the artifacts hold (the beside-value
// pin law: the neighbour values recorded from the seat audit read)
const LEDGER = [74406, 78027, 81322, 83687, 85435, 3441, 6253, 8056, 10927, 13633,
  15511, 18038, 21746, 25257, 27467, 30157, 33101, 36196, 38135, 42143]
// the .330 published Done arc (worklog 62c34f67 + F520's own face 42145)
const DONE_330 = [74410, 78032, 81326, 83691, 85437, 3444, 6256, 8060, 10930, 13638,
  15513, 18042, 21751, 25263, 27472, 30162, 33106, 36200, 38138, 42145]
// the .328 published set dawn arc (worklog fire-1743)
const DAWN_328 = [74421, 78044, 81337, 83703, 85447, 3453, 6265, 8071, 10940, 13649,
  15523, 18051, 21762, 25276, 27485, 30173, 33118, 36210, 38148]

const selRe = /^\[(\d{2}):(\d{2}):(\d{2})\] \[Server thread\/INFO\]: Selecting global world spawn\.\.\.$/
const doneRe = /^\[(\d{2}):(\d{2}):(\d{2})\] \[Server thread\/INFO\]: Done \((\d+\.\d{3})s\)! For help, type "help"$/
const dawnRe = /^\[(\d{2}):(\d{2}):(\d{2})\] \[Server thread\/INFO\]: Set the world spawn point to -?\d+, -?\d+, -?\d+ \[-?\d+\.\d+, -?\d+\.\d+\] in minecraft:[a-z_]+$/
const prepRe = /^\[(\d{2}):(\d{2}):(\d{2})\] \[Server thread\/INFO\]: Time elapsed: (\d+) ms$/
const sec = (h, m, s) => Number(h) * 3600 + Number(m) * 60 + Number(s)

let fieldproof = 0, oneprint = 0, precedes = 0, doneMirror = 0, dawnMirror = 0
const rawSel = [], rawDone = [], rawDawn = [], rawPrep = []
const censusSel = []

for (const f of FACES) {
  const lines = readFileSync(`/home/z/faces331/${f}/console.log`, 'utf8').split('\n')
  const sel = [], done = [], dawn = [], prep = []
  for (const l of lines) {
    let m = selRe.exec(l)
    if (m) { sel.push(sec(m[1], m[2], m[3])); continue }
    m = doneRe.exec(l)
    if (m) { done.push(sec(m[1], m[2], m[3])); continue }
    m = dawnRe.exec(l)
    if (m) { dawn.push(sec(m[1], m[2], m[3])); continue }
    m = prepRe.exec(l)
    if (m) { prep.push(Number(m[4])) }
  }
  const i = FACES.indexOf(f)
  const selMax = sel.length ? sel[sel.length - 1] : 0
  rawSel.push(selMax); rawDone.push(done.length ? done[done.length - 1] : 0)
  rawDawn.push(dawn.length ? dawn[dawn.length - 1] : 0); rawPrep.push(prep.length ? prep[prep.length - 1] : 0)
  const c = spawnSelectClockCensus(lines)
  censusSel.push(c.selectClockSec)
  if (c.selectClockSec === selMax && selMax === LEDGER[i]) fieldproof++
  if (sel.length === 1) oneprint++
  if (selMax > 0 && done.length && selMax < done[done.length - 1]) precedes++
  if (done.length && done[done.length - 1] === DONE_330[i]) doneMirror++
  if (i < 19 && dawn.length && dawn[0] === DAWN_328[i]) dawnMirror++ // the FIRST print - the dawn hand the .328 arc prices (the dusk the LAST keeps)
}

console.log('face  run         selRaw  census  doneRaw  donePub  sel<done')
FACES.forEach((f, i) => {
  console.log(f, RUNS[f], ' ', rawSel[i], ' ', censusSel[i], ' ', rawDone[i], ' ', DONE_330[i], ' ', rawSel[i] < rawDone[i] ? 'YES' : 'NO')
})

console.log('\nFIELDPROOF        ', fieldproof + '/20', fieldproof === 20 ? 'PASS' : 'FAIL')
console.log('ONE-PRINT         ', oneprint + '/20', oneprint === 20 ? 'PASS' : 'FAIL')
console.log('SELECTION-PRECEDES', precedes + '/20', precedes === 20 ? 'PASS' : 'FAIL')
console.log('DONE-MIRROR       ', doneMirror + '/20', doneMirror === 20 ? 'PASS' : 'FAIL')
console.log('SETDAWN-MIRROR    ', dawnMirror + '/19', dawnMirror === 19 ? 'PASS' : 'FAIL')

// PREP-MS-MIRROR - the .293 lane's own prints recorded (the seat audit's own read)
const PREP_LEDGER = [4535, 4576, 4545, 4481, 2727, 3224, 2685, 4338, 2996, 4675,
  2681, 3538, 4551, 6190, 4483, 4544, 4672, 3635, 2906, 2603]
const prepMirror = rawPrep.every((v, i) => v === PREP_LEDGER[i])
console.log('PREP-MS-MIRROR    ', prepMirror ? '20/20 PASS' : 'FAIL ' + rawPrep.join('/'))

// RE-VOICE - the EIGHTEEN windows byte-exact
const WINDOWS = [
  '74406 -> 78027 (+3621) -> 81322 (+3295)', '78027 -> 81322 (+3295) -> 83687 (+2365)',
  '81322 -> 83687 (+2365) -> 85435 (+1748)', '83687 -> 85435 (+1748) -> 3441 (-81994)',
  '85435 -> 3441 (-81994) -> 6253 (+2812)', '3441 -> 6253 (+2812) -> 8056 (+1803)',
  '6253 -> 8056 (+1803) -> 10927 (+2871)', '8056 -> 10927 (+2871) -> 13633 (+2706)',
  '10927 -> 13633 (+2706) -> 15511 (+1878)', '13633 -> 15511 (+1878) -> 18038 (+2527)',
  '15511 -> 18038 (+2527) -> 21746 (+3708)', '18038 -> 21746 (+3708) -> 25257 (+3511)',
  '21746 -> 25257 (+3511) -> 27467 (+2210)', '25257 -> 27467 (+2210) -> 30157 (+2690)',
  '27467 -> 30157 (+2690) -> 33101 (+2944)', '30157 -> 33101 (+2944) -> 36196 (+3095)',
  '33101 -> 36196 (+3095) -> 38135 (+1939)', '36196 -> 38135 (+1939) -> 42143 (+4008)'
]
let revoice = 0
for (let i = 0; i + 2 < LEDGER.length; i++) {
  const row = spawnSelectClockTrendRow({ back: { selectClockSec: LEDGER[i] }, prev: { selectClockSec: LEDGER[i + 1] }, cur: { selectClockSec: LEDGER[i + 2] } })
  if (row && row.includes(WINDOWS[i])) revoice++
}
console.log('RE-VOICE          ', revoice + '/18', revoice === 18 ? 'PASS' : 'FAIL')

// the decompose fold smoke - the LAST three faces the fold prices
const rows = []
for (let i = LEDGER.length - 3; i < LEDGER.length; i++) rows.push({ selectClockSec: LEDGER[i] })
const foldRow = spawnSelectClockTrendRow({ back: rows[0], prev: rows[1], cur: rows[2] })
console.log('\nFOLD SMOKE (W18):', foldRow ? foldRow.split(' - ')[1].slice(0, 60) + '...' : 'null')
const allPass = fieldproof === 20 && oneprint === 20 && precedes === 20 && doneMirror === 20 &&
  dawnMirror === 19 && prepMirror && revoice === 18
console.log('\nALL GATES:', allPass ? 'GREEN - the word speaks twenty faces deep' : 'RED')
process.exit(allPass ? 0 : 1)
