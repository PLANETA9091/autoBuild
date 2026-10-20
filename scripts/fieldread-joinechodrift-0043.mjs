#!/usr/bin/env node
// fire-0043 fieldread - THE JOIN ECHO'S OWN SECOND (v0.976.336)
// the REAL TWENTY-FOUR-face validation: the module census re-walked
// against the raw pairing audit the harvest byte-verified.
//   FIELDPROOF    - the module census == the raw drift mass every face
//   PAIR-BASELINE - the same-second mass 804 the 806 pairs ride
//   ECHO-FOLLOWS  - the echo never precedes its login (drifts all +1)
//   DAWN-DECLINE  - the echo dawn byte-equals the login dawn 24/24
//   DUSK-DECLINE  - the echo dusk byte-equals the login dusk 24/24
//   DRIFT-ARC     - the 24-face drift arc byte-exact the LEDGER keeps
//   RE-VOICE      - the trend row windows byte-exact (one speak the
//                   W17 swing keeps, twenty-one held)
import { readFileSync } from 'node:fs'
import { joinEchoDriftCensus, joinEchoDriftTrendRow } from '../src/lib/joinechodrift.mjs'

const DIR = '/home/z/faces335'
const RUNS = { F501: 4349, F502: 4354, F503: 4360, F504: 4363, F505: 4369, F506: 4373, F507: 4378, F508: 4380, F509: 4385, F510: 4390, F511: 4393, F512: 4398, F513: 4402, F514: 4406, F515: 4409, F516: 4412, F517: 4416, F518: 4420, F519: 4422, F520: 4425, F521: 4429, F522: 4433, F523: 4437, F524: 4441 }
const FACES = Object.keys(RUNS)
const DRIFT_LEDGER = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
const sec = (h, m, s) => Number(h) * 3600 + Number(m) * 60 + Number(s)
const CLOCK = /^\[(\d{2}):(\d{2}):(\d{2})\] \[Server thread\/INFO\]: /
const JOIN_BODY = /^(\S+) joined the game$/
const LOGIN_BODY = /^(\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, -?\d+\.\d+\)$/

const raw = []
for (const f of FACES) {
  const lines = readFileSync(`${DIR}/face${RUNS[f]}.log`, 'utf8').split('\n')
  const lastLogin = new Map()
  let pairs = 0, sameSec = 0, drift = 0, follow = 0, total = 0
  let echoDawn = null, echoDusk = null
  for (const l of lines) {
    const m = l.match(CLOCK)
    if (!m) continue
    const c = sec(m[1], m[2], m[3])
    const body = l.slice(m[0].length)
    let mm = body.match(LOGIN_BODY)
    if (mm) { lastLogin.set(mm[1], c); continue }
    mm = body.match(JOIN_BODY)
    if (mm) {
      total++
      if (echoDawn === null) echoDawn = c
      echoDusk = c
      const name = mm[1]
      if (lastLogin.has(name)) {
        pairs++
        const lc = lastLogin.get(name)
        if (lc === c) sameSec++
        else { drift++; if (c > lc) follow++ }
      } else drift++
    }
  }
  raw.push({ f, total, pairs, sameSec, drift, follow, echoDawn, echoDusk })
}

let fieldproof = 0, arcOk = 0, dawnOk = 0, duskOk = 0
let loginDawn = null, loginDusk = null
const loginDawnArc = [], loginDuskArc = []
for (let i = 0; i < FACES.length; i++) {
  const f = FACES[i]
  const lines = readFileSync(`${DIR}/face${RUNS[f]}.log`, 'utf8').split('\n')
  const censuses = joinEchoDriftCensus(lines)
  if (censuses && censuses.joinEchoDrift === raw[i].drift && censuses.joinEchoCount === raw[i].total) fieldproof++
  if (censuses && censuses.joinEchoDrift === DRIFT_LEDGER[i]) arcOk++
  // the login dawn/dusk the .321/.322 arcs keep (first/last login clocks)
  const lds = []
  for (const l of lines) {
    const m = l.match(CLOCK)
    if (!m) continue
    if (LOGIN_BODY.test(l.slice(m[0].length))) lds.push(sec(m[1], m[2], m[3]))
  }
  loginDawn = lds[0]
  loginDusk = lds[lds.length - 1]
  loginDawnArc.push(loginDawn)
  loginDuskArc.push(loginDusk)
  if (raw[i].echoDawn === loginDawn) dawnOk++
  if (raw[i].echoDusk === loginDusk) duskOk++
}

const totalPairs = raw.reduce((a, r) => a + r.pairs, 0)
const totalSame = raw.reduce((a, r) => a + r.sameSec, 0)
const totalDrift = raw.reduce((a, r) => a + r.drift, 0)
const totalFollow = raw.reduce((a, r) => a + r.follow, 0)

console.log('face  pairs same drift echoDawn loginDawn echoDusk loginDusk')
FACES.forEach((f, i) => {
  const r = raw[i]
  console.log(f, `${r.pairs}`.padStart(5), `${r.sameSec}`.padStart(4), `${r.drift}`.padStart(5), ' ', r.echoDawn, ' ', loginDawnArc[i], ' ', r.echoDusk, ' ', loginDuskArc[i], raw[i].drift !== DRIFT_LEDGER[i] ? ' <-- ARC MISMATCH' : '')
})

console.log('\nFIELDPROOF        ', fieldproof + '/24', fieldproof === 24 ? 'PASS' : 'FAIL')
console.log('PAIR-BASELINE     ', `${totalSame}/${totalPairs} same-second (drift ${totalDrift})`, totalSame === 804 && totalPairs === 806 ? 'PASS' : 'FAIL')
console.log('ECHO-FOLLOWS      ', `${totalFollow}/${totalDrift || 1} drifts later (0 earlier)`, totalFollow === totalDrift && totalDrift === 2 ? 'PASS' : 'FAIL')
console.log('DAWN-DECLINE      ', dawnOk + '/24', dawnOk === 24 ? 'PASS' : 'FAIL')
console.log('DUSK-DECLINE      ', duskOk + '/24', duskOk === 24 ? 'PASS' : 'FAIL')
console.log('DRIFT-ARC         ', arcOk + '/24', arcOk === 24 ? 'PASS' : 'FAIL')

// RE-VOICE - the trend row windows byte-exact
const COUNTS = raw.map(r => r.total)
let rows = 0, speaks = 0, rowOk = 0
for (let i = 0; i + 2 < FACES.length; i++) {
  rows++
  const row = joinEchoDriftTrendRow({
    back: { joinEchoCount: COUNTS[i], joinEchoDrift: raw[i].drift },
    prev: { joinEchoCount: COUNTS[i + 1], joinEchoDrift: raw[i + 1].drift },
    cur: { joinEchoCount: COUNTS[i + 2], joinEchoDrift: raw[i + 2].drift }
  })
  const d0 = raw[i].drift; const d1 = raw[i + 1].drift; const d2 = raw[i + 2].drift
  const expectSpeak = !(d0 === 0 && d1 === 0 && d2 === 0) && !((d1 - d0) === 0 || (d2 - d1) === 0)
  if (expectSpeak) {
    speaks++
    if (row && row.includes(`- ${d0} -> ${d1} (${d1 - d0 >= 0 ? '+' : ''}${d1 - d0}) -> ${d2} (${d2 - d1 >= 0 ? '+' : ''}${d2 - d1})`)) rowOk++
  } else if (row === null) rowOk++
}
console.log('RE-VOICE          ', `${rowOk}/${rows} (speaks ${speaks})`, rowOk === rows ? 'PASS' : 'FAIL')
console.log('\nALL GATES', fieldproof === 24 && totalSame === 804 && totalPairs === 806 && totalFollow === totalDrift && totalDrift === 2 && dawnOk === 24 && duskOk === 24 && arcOk === 24 && rowOk === rows ? 'GREEN' : 'RED')
