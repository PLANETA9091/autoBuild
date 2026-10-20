#!/usr/bin/env node
// fire-0600 fieldread-tacsorder: the multi-gate audit over the REAL
// 30-face archive (the storage order cell the faces voiced, the
// world-first law the archive keeps, the count born-constant the
// audit declines, the drift faces the clock's own variance keeps).
//   node fieldread-tacsorder-0600.mjs
import { readFileSync, readdirSync } from 'node:fs'
import { tacsOrderCensus } from '/home/z/privateB-repo/src/lib/tacsorder.mjs'

const DIR = '/home/z/faces331'
const files = readdirSync(DIR).filter(f => /^face\d+\.log$/.test(f)).sort()
const RUN2F = { 39319100730:'F501',39327612804:'F502',39334531367:'F503',39338489283:'F504',39341992087:'F505',39349450602:'F506',39353992759:'F507',39356556714:'F508',39360759429:'F509',39364947414:'F510',39367608493:'F511',39371335466:'F512',39376695495:'F513',39382361698:'F514',39385906686:'F515',39391362502:'F516',39397311636:'F517',39402993976:'F518',39407353321:'F519',39415017928:'F520',39429320337:'F521',39439011723:'F522',39446283390:'F523',39454573641:'F524',39463302379:'F525',39468686941:'F526',39475545027:'F527',39481559762:'F528',39486313273:'F529',39496061839:'F530' }
const clock = l => { const m = /^\[(\d{2}):(\d{2}):(\d{2})\]/.exec(l); return m ? Number(m[1])*3600 + Number(m[2])*60 + Number(m[3]) : null }
const TACS_RAW = /^\[\d{2}:\d{2}:\d{2}\] \[Server thread\/INFO\]: ThreadedAnvilChunkStorage \((world|DIM1|DIM-1)\): All chunks are saved$/
const DONE_RAW = /^\[\d{2}:\d{2}:\d{2}\] \[Server thread\/INFO\]: Done \(\d+\.\d{3}s\)! For help, type "help"$/

let fieldproof = 0, trio3 = 0, sameSecond = 0, mirror = 0, worldFirst = 0, drift = 0
const orders = new Set()
const arc = []
for (const f of files) {
  const run = Number(f.replace(/^face|\.log$/g, ''))
  const lines = readFileSync(`${DIR}/${f}`, 'utf8').split('\n')
  const raw = lines.filter(l => TACS_RAW.test(l)).map(l => TACS_RAW.exec(l)[1])
  const done = lines.find(l => DONE_RAW.test(l))
  const cen = tacsOrderCensus(lines)
  // FIELDPROOF: the census read the face at all (no partial face the archive rode)
  if (cen && cen.tacsDim1Middle !== null) fieldproof++
  // TRIO-3: every face the full trio rode (the count born-constant the audit declines)
  if (raw.length === 3) trio3++
  // SAME-SECOND: the echo's own second vs the Done line's own second
  // (the FOUR drift faces the family variance keeps - the drift cell
  // the ledger's own next seat)
  const tacsClocks = [...new Set(lines.filter(l => TACS_RAW.test(l)).map(clock))]
  if (done && tacsClocks.length === 1) {
    if (tacsClocks[0] === clock(done)) sameSecond++
    else drift++
  }
  // ORDER-MIRROR: the independent raw read byte-agrees the census
  if (raw.length === 3 && cen) {
    const mid = raw[1]
    if ((mid === 'DIM1' ? 1 : 0) === cen.tacsDim1Middle) mirror++
  }
  // the world-first law + the order classes the faces voiced
  if (raw.length === 3) {
    if (raw[0] === 'world') worldFirst++
    orders.add(raw.join('>'))
  }
  arc.push([RUN2F[run], cen ? cen.tacsDim1Middle : 'MISS'])
}
console.log(`FIELDPROOF ${fieldproof}/${files.length}`)
console.log(`TRIO-3 ${trio3}/${files.length}`)
console.log(`SAME-SECOND ${sameSecond}/${files.length} (drift ${drift} faces the +1s class keeps)`)
console.log(`ORDER-MIRROR ${mirror}/${files.length}`)
console.log(`WORLD-FIRST ${worldFirst}/${files.length}`)
console.log(`ORDER-CLASSES ${[...orders].join(' | ')} (${orders.size} distinct)`)
console.log(`ARC ${arc.map(([f, v]) => `${f}:${v}`).join(' ')}`)
const ones = arc.filter(([, v]) => v === 1).length
console.log(`DUAL ${ones} dim1Middle / ${arc.length - ones} dim-1Middle - BOTH SPEAK ${ones > 0 && ones < arc.length ? 'YES' : 'NO'}`)
console.log(arc.length === 30 && fieldproof === 30 && trio3 === 30 && mirror === 30 && worldFirst === 30 && orders.size === 2 ? 'ALL GATES GREEN' : 'GATE FAIL')
