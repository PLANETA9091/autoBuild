#!/usr/bin/env node
// fire-0543 fieldread-trioorder: the multi-gate audit over the REAL
// 30-face archive (the order cell the faces voiced, the .341 law the
// whole archive re-keeps).
//   node fieldread-trioorder-0543.mjs
import { readFileSync, readdirSync } from 'node:fs'
import { trioOrderCensus } from '/home/z/privateB/src/lib/trioorder.mjs'

const DIR = '/home/z/faces331'
const files = readdirSync(DIR).filter(f => /^face\d+\.log$/.test(f)).sort()
const RUN2F = { 39319100730:'F501',39327612804:'F502',39334531367:'F503',39338489283:'F504',39341992087:'F505',39349450602:'F506',39353992759:'F507',39356556714:'F508',39360759429:'F509',39364947414:'F510',39367608493:'F511',39371335466:'F512',39376695495:'F513',39382361698:'F514',39385906686:'F515',39391362502:'F516',39397311636:'F517',39402993976:'F518',39407353321:'F519',39415017928:'F520',39429320337:'F521',39439011723:'F522',39446283390:'F523',39454573641:'F524',39463302379:'F525',39468686941:'F526',39475545027:'F527',39481559762:'F528',39486313273:'F529',39496061839:'F530' }
const clock = l => { const m = /^\[(\d{2}):(\d{2}):(\d{2})\]/.exec(l); return m ? Number(m[1])*3600 + Number(m[2])*60 + Number(m[3]) : null }
const TRIO_RAW = /^\[\d{2}:\d{2}:\d{2}\] \[Server thread\/INFO\]: Saving chunks for level 'ServerLevel\[world\]'\/minecraft:(overworld|the_nether|the_end)$/

let fieldproof = 0, trio3 = 0, sameSecond = 0, mirror = 0, overworldFirst = 0
const orders = new Set()
const arc = []
for (const f of files) {
  const run = Number(f.replace(/^face|\.log$/g, ''))
  const lines = readFileSync(`${DIR}/${f}`, 'utf8').split('\n')
  const raw = lines.filter(l => TRIO_RAW.test(l)).map(l => TRIO_RAW.exec(l)[1])
  const done = lines.find(l => /^\[\d{2}:\d{2}:\d{2}\] \[Server thread\/INFO\]: Done \(\d+\.\d{3}s\)! For help, type "help"$/.test(l))
  const cen = trioOrderCensus(lines)
  // FIELDPROOF: the census read the face at all
  if (cen && cen.trioEndMiddle !== null) fieldproof++
  // TRIO-3: every face the full trio rode
  if (raw.length === 3) trio3++
  // SAME-SECOND: the .341 law the whole archive re-keeps
  const trioClocks = [...new Set(lines.filter(l => TRIO_RAW.test(l)).map(clock))]
  if (done && trioClocks.length === 1 && trioClocks[0] === clock(done)) sameSecond++
  // ORDER-MIRROR: the independent raw read byte-agrees the census
  if (raw.length === 3 && cen) {
    const mid = raw[1]
    if ((mid === 'the_end' ? 1 : 0) === cen.trioEndMiddle) mirror++
  }
  // the overworld-first law + the order classes the faces voiced
  if (raw.length === 3) {
    if (raw[0] === 'overworld') overworldFirst++
    orders.add(raw.join('>'))
  }
  arc.push([RUN2F[run], cen ? cen.trioEndMiddle : 'MISS'])
}
console.log(`FIELDPROOF ${fieldproof}/${files.length}`)
console.log(`TRIO-3 ${trio3}/${files.length}`)
console.log(`SAME-SECOND ${sameSecond}/${files.length}`)
console.log(`ORDER-MIRROR ${mirror}/${files.length}`)
console.log(`OVERWORLD-FIRST ${overworldFirst}/${files.length}`)
console.log(`ORDER-CLASSES ${[...orders].join(' | ')} (${orders.size} distinct)`)
console.log(`ARC ${arc.map(([f, v]) => `${f}:${v}`).join(' ')}`)
const ones = arc.filter(([, v]) => v === 1).length
console.log(`DUAL ${ones} endMiddle / ${arc.length - ones} netherMiddle - BOTH SPEAK ${ones > 0 && ones < arc.length ? 'YES' : 'NO'}`)
console.log(arc.length === 30 && fieldproof === 30 && trio3 === 30 && sameSecond === 30 && mirror === 30 && overworldFirst === 30 && orders.size === 2 ? 'ALL GATES GREEN' : 'GATE FAIL')
