#!/usr/bin/env node
// fire-0630 fieldread-tacsdrift: the multi-gate audit over the REAL
// 30-face archive (/home/z/faces331, fire-0600's own harvest) plus
// the F531 fresh face (fire-0630's own artifact read) - the drift
// cell the .344 ledger names (the echo's own second vs the Done
// line's own second).
//   node fieldread-tacsdrift-0630.mjs
import { readFileSync, readdirSync } from 'node:fs'
import { tacsDriftCensus } from '/home/z/privateB-repo/src/lib/tacsdrift.mjs'

const DIR = '/home/z/faces331'
const files = readdirSync(DIR).filter(f => /^face\d+\.log$/.test(f)).sort()
const RUN2F = { 39319100730:'F501',39327612804:'F502',39334531367:'F503',39338489283:'F504',39341992087:'F505',39349450602:'F506',39353992759:'F507',39356556714:'F508',39360759429:'F509',39364947414:'F510',39367608493:'F511',39371335466:'F512',39376695495:'F513',39382361698:'F514',39385906686:'F515',39391362502:'F516',39397311636:'F517',39402993976:'F518',39407353321:'F519',39415017928:'F520',39429320337:'F521',39439011723:'F522',39446283390:'F523',39454573641:'F524',39463302379:'F525',39468686941:'F526',39475545027:'F527',39481559762:'F528',39486313273:'F529',39496061839:'F530' }
const TACS_RAW = /^\[\d{2}:\d{2}:\d{2}\] \[Server thread\/INFO\]: ThreadedAnvilChunkStorage \((world|DIM1|DIM-1)\): All chunks are saved$/
const DONE_RAW = /^\[\d{2}:\d{2}:\d{2}\] \[Server thread\/INFO\]: Done \(\d+\.\d{3}s\)! For help, type "help"$/
const clock = l => { const m = /^\[(\d{2}):(\d{2}):(\d{2})\]/.exec(l); return m ? Number(m[1])*3600 + Number(m[2])*60 + Number(m[3]) : null }

let fieldproof = 0, rawMirror = 0
const arc = []
for (const f of files) {
  const run = Number(f.replace(/^face|\.log$/g, ''))
  const lines = readFileSync(`${DIR}/${f}`, 'utf8').split('\n')
  const cen = tacsDriftCensus(lines)
  // FIELDPROOF: the census read the face at all (never null - the
  // 30 faces every one keeps the Done clock and the one-second echo)
  if (cen && cen.tacsDrift !== null) fieldproof++
  // RAW-MIRROR: the independent raw read byte-agrees the census
  const done = lines.find(l => DONE_RAW.test(l))
  const tacsSecs = [...new Set(lines.filter(l => TACS_RAW.test(l)).map(clock))]
  if (done && tacsSecs.length === 1 && cen) {
    if ((tacsSecs[0] === clock(done) ? 0 : 1) === cen.tacsDrift) rawMirror++
  }
  arc.push([RUN2F[run], cen ? cen.tacsDrift : 'MISS'])
}
console.log(`FIELDPROOF ${fieldproof}/${files.length}`)
console.log(`RAW-MIRROR ${rawMirror}/${files.length}`)
console.log(`ARC ${arc.map(([f, v]) => `${f}:${v}`).join(' ')}`)
const ones = arc.filter(([, v]) => v === 1).length
const driftFaces = arc.filter(([, v]) => v === 1).map(([f]) => f).join('/')
console.log(`DUAL ${ones} drift / ${arc.length - ones} same-second - BOTH SPEAK ${ones > 0 && ones < arc.length ? 'YES' : 'NO'} (drift faces: ${driftFaces})`)
// the F531 fresh face - fire-0630's own artifact read (the trio-order
// word's first fleet face, the nether-middle class)
const f531 = tacsDriftCensus(readFileSync('/tmp/f531/console.log', 'utf8').split('\n'))
console.log(`F531-FRESH ${JSON.stringify(f531)} (Done 21:58:39 / echo 21:58:39 the same-second class keeps)`)
console.log(arc.length === 30 && fieldproof === 30 && rawMirror === 30 && ones === 4 && f531.tacsDrift === 0 ? 'ALL GATES GREEN' : 'GATE FAIL')
