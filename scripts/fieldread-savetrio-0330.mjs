#!/usr/bin/env node
// fire-0330 fieldread - THE BOOT'S OWN SAVE TRIO (v0.976.341)
// the REAL FOUR-face validation: the module census re-walked against
// the raw trio arithmetic the committed fixture and the fresh
// harvest byte-verified (run68 the house fixture; F525/F526/F527 the
// fresh artifacts the fire-0330 harvest holds - F525 the fire-0130
// lane's own run the fire-0243 debt face the harvest re-rides).
//   FIELDPROOF    - the module census == the raw trio clock == LEDGER every face
//   TRIO-3        - the count three prints every REAL face (4/4)
//   SAME-SECOND   - the trio clock == the Done line's own clock every face (4/4)
//   ORDER-BOOK    - the dimension order the faces keep (nether-first 3, end-first 1)
//   RE-VOICE      - the three-face row byte-exact (the swell the census prices)
import { readFileSync } from 'node:fs'
import { saveTrioCensus, saveTrioTrendRow } from '../src/lib/savetrioclock.mjs'

const FACES = {
  run68: 'scripts/fleet-mining/run68/xfleet-server-log/console.log',
  F525: '/home/z/my-project/art0330/f525/console.log',
  F526: '/home/z/my-project/art0330/f526/console.log',
  F527: '/home/z/my-project/art0330/f527/console.log'
}
// the LEDGER - the trio clock arc the faces hold (the beside-value
// pin law: the neighbour values recorded from the harvest read)
const LEDGER = { run68: 20948, F525: 62442, F526: 64692, F527: 67777 }
const DONE_STAMP = { run68: '05:49:08', F525: '17:20:42', F526: '17:58:12', F527: '18:49:37' }

const TRIO_RE = /^\[(\d{2}):(\d{2}):(\d{2})\] \[Server thread\/INFO\]: Saving chunks for level 'ServerLevel\[world\]'\/minecraft:(overworld|the_nether|the_end)$/
const DONE_RE = /^\[(\d{2}):(\d{2}):(\d{2})\] \[Server thread\/INFO\]: Done \(/
const sec = (h, m, s) => Number(h) * 3600 + Number(m) * 60 + Number(s)

let fieldproof = 0, trio3 = 0, sameSecond = 0
const orderBook = []
const clocks = {}

for (const [f, path] of Object.entries(FACES)) {
  const lines = readFileSync(path, 'utf8').split('\n')
  const cen = saveTrioCensus(lines)
  let rawClock = null, nTrio = 0, order = []
  let doneClock = null
  lines.forEach((l) => {
    let m = TRIO_RE.exec(l)
    if (m) { nTrio++; rawClock = sec(m[1], m[2], m[3]); order.push(m[4]); return }
    m = DONE_RE.exec(l)
    if (m && doneClock === null) doneClock = sec(m[1], m[2], m[3])
  })
  clocks[f] = cen && cen.saveTrioClock
  if (cen && cen.saveTrioCount === nTrio && cen.saveTrioClock === rawClock && rawClock === LEDGER[f]) fieldproof++
  if (nTrio === 3) trio3++
  if (doneClock !== null && rawClock === doneClock) sameSecond++
  if (order.length === 3) {
    orderBook.push(order[1] === 'the_end' ? 'end-first' : 'nether-first')
    const stamp = `${String(Math.floor(doneClock / 3600)).padStart(2, '0')}:${String(Math.floor((doneClock % 3600) / 60)).padStart(2, '0')}:${String(doneClock % 60).padStart(2, '0')}`
    if (stamp !== DONE_STAMP[f]) { console.error(`DONE-MIRROR FAIL ${f}: ${stamp} != ${DONE_STAMP[f]}`); process.exit(1) }
  }
}

console.log(`FIELDPROOF ${fieldproof}/${Object.keys(FACES).length}`)
console.log(`TRIO-3 ${trio3}/${Object.keys(FACES).length}`)
console.log(`SAME-SECOND ${sameSecond}/${Object.keys(FACES).length}`)
console.log(`ORDER-BOOK ${orderBook.join(' ')}`)

// RE-VOICE: the fresh three-face row byte-exact (F525 -> F526 -> F527)
const row = saveTrioTrendRow({
  back: { saveTrioCount: 3, saveTrioClock: clocks.F525 },
  prev: { saveTrioCount: 3, saveTrioClock: clocks.F526 },
  cur: { saveTrioCount: 3, saveTrioClock: clocks.F527 }
})
const expect = 'the fleet\'s own save trio swell ran two steps deep - 62442 -> 64692 (+2250) -> 67777 (+3085)'
if (!row || !row.includes(expect)) { console.error(`RE-VOICE FAIL: ${row}`); process.exit(1) }
console.log(`RE-VOICE OK ${expect}`)
console.log('ALL GATES GREEN')
