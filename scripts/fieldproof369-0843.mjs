// (v0.976.369 fire-0843) FIELDPROOF - the REAL module census re-voices
// the 61-face archive arc BYTE-EXACT (the fire-0743 method the field
// proof keeps), the synthetics the branches price.
// Usage: node scripts/fieldproof369-0843.mjs <facesdir> <map.json>
import { readFileSync } from 'fs'
import { rejoinChampThirdBreathCensus } from '/home/z/privateB/src/lib/rejoinchampthirdbreath.mjs'
const dir = process.argv[2] || '/home/z/faces331'
const map = JSON.parse(readFileSync(process.argv[3] || '/tmp/dispatch-census.json')).map
const ARC = [93,27,0,14,61,6,20,5,0,0,25,29,0,12,9,8,6,0,0,0,26,13,0,12,10,6,8,0,0,67,0,6,0,8,0,61,11,2,7,5,11,24,0,0,0,7,0,6,12,4,0,0,8,0,4,72,0,13,0,25,13]
let hit = 0; let face = 0; const bad = []
for (let f = 501; f <= 563; f++) {
  if (f === 552 || f === 557) continue
  const m = map['F' + f]
  const slot = f <= 551 ? f - 501 : (f <= 556 ? f - 502 : f - 503)
  let lines
  try { lines = readFileSync(`${dir}/face${m.id}.log`, 'utf8').split('\n') } catch { bad.push(`F${f} NOFILE`); continue }
  face++
  const got = rejoinChampThirdBreathCensus(lines).rejoinChampThirdBreath
  if (got === ARC[slot]) hit++
  else bad.push(`F${f} got ${got} want ${ARC[slot]}`)
}
console.log(`FIELDPROOF the REAL module census: ${hit}/${face} byte-exact`)
if (bad.length) console.log('BAD:', bad.join(' ; '))
// the synthetics the branches price (the node -e arithmetic the gates
// keep - the module the values re-voices)
const s = (arr) => rejoinChampThirdBreathCensus(arr).rejoinChampThirdBreath
const synth = [
  ['oneEcho', s(['[04:00:00] [Server thread/INFO]: YardSurvey joined the game']), 0],
  ['singleGap', s(['[04:00:00] [Server thread/INFO]: YardSurvey joined the game', '[04:01:00] [Server thread/INFO]: F3 joined the game', '[04:09:00] [Server thread/INFO]: F3 joined the game']), 0],
  ['twoGaps', s(['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']), 0],
  ['threeGaps', s(['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game']), 300],
  ['coReign', s(['[09:00:00] [Server thread/INFO]: YardSurvey joined the game', '[09:01:00] [Server thread/INFO]: F3 joined the game', '[09:02:00] [Server thread/INFO]: F7 joined the game', '[09:04:00] [Server thread/INFO]: F3 joined the game', '[09:07:00] [Server thread/INFO]: F7 joined the game', '[09:08:00] [Server thread/INFO]: F3 joined the game', '[09:14:00] [Server thread/INFO]: F7 joined the game']), 360],
  ['wrap', s(['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[23:59:30] [Server thread/INFO]: F3 joined the game', '[00:01:30] [Server thread/INFO]: F3 joined the game']), 120]
]
let sOK = 0
for (const [name, got, want] of synth) {
  const pass = got === want
  if (pass) sOK++
  console.log(`  ${name}: ${got} want ${want} ${pass ? 'OK' : 'MISMATCH'}`)
}
console.log(hit === face && sOK === synth.length ? 'FIELDPROOF GREEN' : 'FIELDPROOF FAILED')
