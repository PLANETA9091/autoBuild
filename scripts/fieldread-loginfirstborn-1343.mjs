// fire-1343 FIELDPROOF - the firstborn word's own field read
// (1) census==raw mirror law: the module census on every REAL face's
//     console.log equals the raw re-count this harvest holds
// (2) W1/W2/W8/W9 re-voiced byte-exact through the module's own row
// (3) the six held windows keep the honest silence
// (4) the firstborn line the dawn line's own twin: the dawn cross-check
import { loginFirstbornCensus, loginFirstbornTrendRow } from '/home/z/privateB/src/lib/loginfirstborntrend.mjs'
import { readFileSync } from 'node:fs'

const faces = ['f501','f502','f503','f504','f505','f506','f507','f508','f509','f510','f511','f512']
const RAW = [17, 9, 25, 9, 9, 17, 17, 17, 25, 9, 17, 17]
const DAWN_CLOCKS = ['20:40:21','21:40:43','22:35:36','23:15:03','23:44:07','00:57:33','01:44:24','02:14:31','03:02:19','03:47:29','04:18:43','05:00:51']

const census = faces.map(f => loginFirstbornCensus(readFileSync(`/home/z/faces322/${f}/console.log`, 'utf8').split('\n')))
let mismatches = 0
for (let i = 0; i < faces.length; i++) {
  const got = census[i].firstbornId
  const ok = got === RAW[i]
  if (!ok) mismatches++
  console.log(`${faces[i]}: census=${got} raw=${RAW[i]} ${ok ? 'MIRROR-OK' : 'MISMATCH!'}`)
}
console.log(`FIELDPROOF ${faces.length - mismatches}/${faces.length} census==raw`)

// the firstborn line the dawn line's own twin - the speaker's clock
// re-read from the faces matches the .321 dawn arc byte-exact
const RE = /\[([0-5]\d):/ // placeholder, real check below
let twins = 0
for (let i = 0; i < faces.length; i++) {
  const lines = readFileSync(`/home/z/faces322/${faces[i]}/console.log`, 'utf8').split('\n')
  let twinClock = null
  for (const l of lines) {
    const m = /^\[(\d{2}:\d{2}:\d{2})\] \[Server thread\/INFO\]: (\S+)\[\/[\d.]+:(0|[1-9]\d*)\] logged in with entity id (0|[1-9]\d*) at \(-?\d+\.\d+, -?\d+\.\d+, -?\d+\.\d+\)$/.exec(l)
    if (m && Number(m[4]) === RAW[i] && twinClock === null) twinClock = m[1]
  }
  if (twinClock === DAWN_CLOCKS[i]) twins++
  else console.log(`${faces[i]}: twin MISMATCH got ${twinClock} want ${DAWN_CLOCKS[i]}`)
}
console.log(`DAWN-TWIN ${twins}/${faces.length} firstborn-line-clock == dawn-arc byte-exact`)

// W1/W2/W8/W9 re-voice + the six held windows the silence keeps
const SPEAKS = [
  [0, 1, 2, 'the login firstborn\'s own swing - 17 -> 9 (-8) -> 25 (+16)'],
  [1, 2, 3, 'the login firstborn\'s own swing - 9 -> 25 (+16) -> 9 (-16)'],
  [7, 8, 9, 'the login firstborn\'s own swing - 17 -> 25 (+8) -> 9 (-16)'],
  [8, 9, 10, 'the login firstborn\'s own swing - 25 -> 9 (-16) -> 17 (+8)']
]
let voices = 0
for (const [b, p, c, phrase] of SPEAKS) {
  const row = loginFirstbornTrendRow({ back: census[b], prev: census[p], cur: census[c] })
  const ok = row !== null && row.includes(phrase)
  if (ok) voices++
  console.log(`W${b + 1}: ${ok ? 'VOICE-OK' : 'SILENT-OR-MISMATCH!'}`)
}
console.log(`RE-VOICE ${voices}/4 speaks byte-exact`)

// the held windows (W3/W4/W5/W6/W7/W10) the honest silence
const HELDS = [[2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7], [6, 7, 8], [9, 10, 11]]
let silences = 0
for (const [b, p, c] of HELDS) {
  if (loginFirstbornTrendRow({ back: census[b], prev: census[p], cur: census[c] }) === null) silences++
}
console.log(`HELD-SILENCE ${silences}/6 held windows the lawful null keeps`)
