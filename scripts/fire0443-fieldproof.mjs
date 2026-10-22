// (fire-0443 the :43 stream) the fieldproof - the .389/.390 method the
// fresh seat re-rides: the 77-face archive the census module re-voices
// the REAL_ARC the test embeds byte-exact (the FIELDPROOF), the ten
// REAL columns the test keeps the pins re-voice (the PINCHECK), the
// synthetics the module re-voices (the branch battery), the FRESH
// CROSS the landed seats re-voice (the F579 eleven-gap storm face the
// fresh tail the .391 storm eleventh and the .389 storm tenth and the
// .385 storm ninth and the .383 storm eighth and the .390 champ tenth
// and the .388 champ ninth and the .384 champ eighth the same face
// prices). The lightweight arithmetic gate - zero fleet wiring, zero
// server, the CI the suite speaks.
// Usage: node scripts/fire0443-fieldproof.mjs <facesdir> <map.json>
import { readFileSync, existsSync } from 'fs'
const dir = process.argv[2] || '/home/z/faces0443'
const mapFile = process.argv[3] || '/home/z/my-project/dispatch-census-0443.json'
const { rejoinStormEleventhBreathCensus } = await import('../src/lib/rejoinstormeleventhbreath.mjs')
const { rejoinStormTenthBreathCensus } = await import('../src/lib/rejoinstormtenthbreath.mjs')
const { rejoinStormNinthBreathCensus } = await import('../src/lib/rejoinstormninthbreath.mjs')
const { rejoinStormEighthBreathCensus } = await import('../src/lib/rejoinstormeighthbreath.mjs')
const { rejoinChampTenthBreathCensus } = await import('../src/lib/rejoinchamptenthbreath.mjs')
const { rejoinChampNinthBreathCensus } = await import('../src/lib/rejoinchampninthbreath.mjs')
const { rejoinChampEighthBreathCensus } = await import('../src/lib/rejoinchampeighthbreath.mjs')

// the test file the single source of truth - the REAL_ARC and the
// REAL_* fixtures the test embeds the same lists the checks ride
const testSrc = readFileSync(new URL('../tests/unit/rejoinstormeleventhbreath.test.mjs', import.meta.url), 'utf8')
const arcM = testSrc.match(/const REAL_ARC = \[\s*([\d,\s]+?)\s*\]/)
if (!arcM) { console.error('PINCHECK FAIL: REAL_ARC not found in the test'); process.exit(1) }
const REAL_ARC = arcM[1].split(',').map(Number)
const fixtureCols = {}
for (const m of testSrc.matchAll(/const (REAL_F\d+) = \[\n((?: .*\n)+?)\]/g)) {
  fixtureCols[m[1]] = m[2].split('\n').filter(l => l.trim().startsWith('"')).map(l => JSON.parse(l.trim().replace(/,$/, '')))
}

const map = JSON.parse(readFileSync(mapFile, 'utf8')).map

// FIELDPROOF: the 77-face archive the arc re-voices byte-exact
let hits = 0
const drift = []
let i = 0
for (let f = 501; f <= 579; f++) {
  const m = map['F' + f]
  if (!m) continue
  if (m.conclusion !== 'success') continue // the F552 cancelled + the F557 artifact hole the F-order keeps
  const face = `${dir}/face${m.id}.log`
  if (!existsSync(face)) continue
  const got = rejoinStormEleventhBreathCensus(readFileSync(face, 'utf8').split('\n')).rejoinStormEleventhBreath
  if (got === REAL_ARC[i]) hits++
  else drift.push(`F${f} got ${got} want ${REAL_ARC[i]}`)
  i++
}
console.log(`FIELDPROOF: ${hits}/${i} faces byte-exact`)
if (hits !== i || i !== 77) { console.error('FIELDPROOF FAIL:', JSON.stringify(drift.slice(0, 10))); process.exit(1) }

// PINCHECK: the ten REAL columns the test embeds the census re-voices
const PINS = { REAL_F501: 13, REAL_F508: 0, REAL_F511: 27, REAL_F521: 6, REAL_F536: 52, REAL_F548: 0, REAL_F558: 43, REAL_F564: 48, REAL_F577: 16, REAL_F579: 7 }
let pinHits = 0
for (const [name, want] of Object.entries(PINS)) {
  const col = fixtureCols[name]
  if (!col) { console.error(`PINCHECK FAIL: ${name} fixture missing`); process.exit(1) }
  const got = rejoinStormEleventhBreathCensus(col).rejoinStormEleventhBreath
  if (got === want) pinHits++
  else { console.error(`PINCHECK FAIL: ${name} got ${got} want ${want}`); process.exit(1) }
}
console.log(`PINCHECK: ${pinHits}/${Object.keys(PINS).length} pins byte-exact`)

// SYNTHETICS: the branch battery the module re-voices (the fewer-than-
// eleven-gaps convention the ladder keeps, the eleven-gap face the
// ELEVENTH voices, the co-reign interleave the FILE ORDER keeps, the
// sub-peak pair the storm list rides, the same-second pair the REAL
// zero prices, the wrap the midnight crossing prices)
const synth = (evts) => rejoinStormEleventhBreathCensus(evts).rejoinStormEleventhBreath
const S = []
const synthChecks = [
  [['[04:00:00] [Server thread/INFO]: YardSurvey joined the game'], 0],
  [['[04:00:00] [Server thread/INFO]: YardSurvey joined the game', '[04:01:00] [Server thread/INFO]: F3 joined the game', '[04:09:00] [Server thread/INFO]: F3 joined the game'], 0],
  [['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game'], 0],
  [['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game'], 0],
  [['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game'], 0],
  [['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game'], 0],
  [['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game'], 0],
  [['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game', '[08:10:00] [Server thread/INFO]: F3 joined the game'], 0],
  [['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game', '[08:10:00] [Server thread/INFO]: F3 joined the game', '[08:11:00] [Server thread/INFO]: F3 joined the game'], 0],
  [['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game', '[08:10:00] [Server thread/INFO]: F3 joined the game', '[08:11:00] [Server thread/INFO]: F3 joined the game', '[08:12:00] [Server thread/INFO]: F3 joined the game'], 0],
  [['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game', '[08:10:00] [Server thread/INFO]: F3 joined the game', '[08:11:00] [Server thread/INFO]: F3 joined the game', '[08:13:00] [Server thread/INFO]: F3 joined the game', '[08:26:00] [Server thread/INFO]: F3 joined the game'], 780],
  [['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:01:00] [Server thread/INFO]: F7 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F7 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F7 joined the game', '[08:14:00] [Server thread/INFO]: F3 joined the game', '[08:20:00] [Server thread/INFO]: F7 joined the game', '[08:27:00] [Server thread/INFO]: F3 joined the game', '[08:35:00] [Server thread/INFO]: F7 joined the game', '[08:44:00] [Server thread/INFO]: F3 joined the game', '[08:54:00] [Server thread/INFO]: F7 joined the game', '[09:05:00] [Server thread/INFO]: F3 joined the game', '[09:17:00] [Server thread/INFO]: F7 joined the game'], 720],
  [['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:00:30] [Server thread/INFO]: F9 joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:01:00] [Server thread/INFO]: F9 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game', '[08:10:00] [Server thread/INFO]: F3 joined the game', '[08:11:00] [Server thread/INFO]: F3 joined the game', '[08:13:00] [Server thread/INFO]: F3 joined the game'], 120],
  [['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game', '[08:10:00] [Server thread/INFO]: F3 joined the game', '[08:11:00] [Server thread/INFO]: F3 joined the game', '[08:12:00] [Server thread/INFO]: F3 joined the game', '[08:12:00] [Server thread/INFO]: F3 joined the game'], 0],
  [['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:06:00] [Server thread/INFO]: F3 joined the game', '[08:07:00] [Server thread/INFO]: F3 joined the game', '[08:08:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game', '[08:10:00] [Server thread/INFO]: F3 joined the game', '[08:11:00] [Server thread/INFO]: F3 joined the game', '[23:59:30] [Server thread/INFO]: F3 joined the game', '[00:01:30] [Server thread/INFO]: F3 joined the game'], 120]
]
let synHits = 0
for (const [evts, want] of synthChecks) {
  if (synth(evts) === want) synHits++
  else { console.error('SYNTHETICS FAIL: got', synth(evts), 'want', want, JSON.stringify(evts.slice(0, 3))); process.exit(1) }
}
console.log(`SYNTHETICS: ${synHits}/${synthChecks.length} faces byte-exact`)

// CROSS: the F579 fresh tail the landed seats re-voice (the same face
// the sibling seats price - the archive the neighbours keep)
const f579 = map.F579
if (f579 && f579.conclusion === 'success' && existsSync(`${dir}/face${f579.id}.log`)) {
  const lines = readFileSync(`${dir}/face${f579.id}.log`, 'utf8').split('\n')
  const reads = {
    stormEleventh: rejoinStormEleventhBreathCensus(lines).rejoinStormEleventhBreath,
    stormTenth: rejoinStormTenthBreathCensus(lines).rejoinStormTenthBreath,
    stormNinth: rejoinStormNinthBreathCensus(lines).rejoinStormNinthBreath,
    stormEighth: rejoinStormEighthBreathCensus(lines).rejoinStormEighthBreath,
    champTenth: rejoinChampTenthBreathCensus(lines).rejoinChampTenthBreath,
    champNinth: rejoinChampNinthBreathCensus(lines).rejoinChampNinthBreath,
    champEighth: rejoinChampEighthBreathCensus(lines).rejoinChampEighthBreath
  }
  console.log('CROSS F579:', JSON.stringify(reads))
  const wants = { stormEleventh: 7, stormTenth: 9, stormNinth: 23, stormEighth: 6, champTenth: 0, champNinth: 0, champEighth: 0 }
  for (const [k, w] of Object.entries(wants)) {
    if (reads[k] !== w) { console.error(`CROSS FAIL: F579 ${k} got ${reads[k]} want ${w}`); process.exit(1) }
  }
  console.log('CROSS: the F579 fresh tail the landed seats re-voice GREEN')
} else {
  console.log('CROSS: F579 face unavailable (the next fire re-rides)')
}
