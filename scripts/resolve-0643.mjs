#!/usr/bin/env node
// (fire-0643) resolve the .255 double-version race's decompose.mjs conflicts
// keep-both (the .238/.244/.248/.251 precedent): their churnceiling import +
// fold AND my sentryperbottrend import + fold, both stand.
import { readFileSync, writeFileSync } from 'node:fs'

const p = '/home/z/privateB/scripts/fleet-mining/decompose.mjs'
const lines = readFileSync(p, 'utf8').split('\n')

const out = []
let zone = 0 // 0 = outside, 1 = import hunk, 2 = fold hunk
for (let i = 0; i < lines.length; i++) {
  const l = lines[i]
  if (l.startsWith('<<<<<<<')) { zone++; continue }
  if (l.startsWith('=======') && zone) { if (zone === 2) out.push('}') ; continue } // close their fold block before mine rides
  if (l.startsWith('>>>>>>>')) { zone = 0; continue }
  out.push(l)
}
writeFileSync(p, out.join('\n'))
console.log(`resolved: ${zone === 0 ? 'all hunks clean' : 'UNRESOLVED MARKERS LEFT'}`)
console.log('imports:', out.filter(x => x.includes('churnceilingtrend')).length, 'churnceiling +', out.filter(x => x.includes('sentryperbottrend')).length, 'sentryperbot')
console.log('folds:', out.filter(x => x.includes('const ccc =')).length, 'ccc +', out.filter(x => x.includes('const spbTrend =')).length, 'spb')
