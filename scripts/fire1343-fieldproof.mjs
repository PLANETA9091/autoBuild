// (v0.976.372 fire-1343) the fieldread - the REAL module census
// re-voices the 64-face archive arc byte-exact (the fire-1243 method
// re-rides). Usage: node scripts/fire1343-fieldproof.mjs <facesdir> <map.json>
import { readFileSync, existsSync } from 'fs'
import { execFileSync } from 'child_process'
import { rejoinStormFifthBreathCensus } from '../src/lib/rejoinstormfifthbreath.mjs'

const dir = process.argv[2] || '/home/z/faces331'
const map = JSON.parse(readFileSync(process.argv[3] || '/home/z/my-project/dispatch-census-1343.json')).map
const ARC = [8,88,0,6,17,1,7,4,0,8,59,8,0,3,8,2,3,69,13,50,27,8,8,14,18,11,3,0,0,0,0,8,1,20,1,61,13,89,15,154,16,8,104,10,0,3,0,27,0,18,0,8,3,0,5,9,0,6,6,7,7,0,30,0]

let hit = 0, miss = 0
const F = []
for (let f = 501; f <= 566; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') continue
  const p = `${dir}/face${m.id}.log`
  if (!existsSync(p)) continue
  const size = Number(execFileSync('stat', ['-c', '%s', p]).toString().trim())
  if (!size) continue
  const lines = readFileSync(p, 'utf8').split('\n')
  const got = rejoinStormFifthBreathCensus(lines).rejoinStormFifthBreath
  const want = ARC[F.length]
  F.push(`F${f}`)
  if (got === want) hit++
  else { miss++; console.error(`# MISMATCH F${f} got=${got} want=${want}`) }
}
console.log(`FIELDPROOF: ${hit}/${F.length} faces byte-exact (miss ${miss})`)
console.log('faces:', F.length, 'first', F[0], 'last', F[F.length - 1])
if (miss > 0) process.exit(1)
