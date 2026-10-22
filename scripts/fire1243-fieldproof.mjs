// (v0.976.371 fire-1243) the FIELDPROOF + PINCHECK - the module census
// re-voices the 63-face archive arc byte-exact (the fieldread the
// pricing script the same census keeps) and the embedded fixtures the
// test file keeps re-voice (the pincheck the census arithmetic rides
// - light node arithmetic only, no MC server, no fleet, no test
// runner).
import { readFileSync, existsSync } from 'fs'
import { execFileSync } from 'child_process'
import { rejoinChampFourthBreathCensus } from '/home/z/privateB/src/lib/rejoinchampfourthbreath.mjs'
import { rejoinChampThirdBreathCensus } from '/home/z/privateB/src/lib/rejoinchampthirdbreath.mjs'

const map = JSON.parse(readFileSync('/tmp/dispatch-census-1243.json')).map
const expected = JSON.parse(readFileSync('/tmp/fire1243-arc.json'))

// FIELDPROOF: the module census re-voices the 63-face arc byte-exact
let ok = 0, bad = 0
const arc = []
for (let i = 0; i < expected.faces.length; i++) {
  const F = expected.faces[i]
  const id = expected.ids[i]
  const p = `/home/z/faces331/face${id}.log`
  if (!existsSync(p)) { console.log(`FIELDPROOF F${F} MISSING`); bad++; continue }
  const v = rejoinChampFourthBreathCensus(readFileSync(p, 'utf8').split('\n')).rejoinChampFourthBreath
  arc.push(v)
  if (v === expected.arc[i]) ok++
  else { bad++; console.log(`FIELDPROOF F${F} MISMATCH module=${v} priced=${expected.arc[i]}`) }
}
console.log(`FIELDPROOF ${ok}/${expected.faces.length} byte-exact, bad=${bad}`)

// the arc the test file embeds re-voices the same list byte-exact
const testSrc = readFileSync('/home/z/privateB/tests/unit/rejoinchampfourthbreath.test.mjs', 'utf8')
const m = testSrc.match(/const REAL_ARC = \[([^\]]+)\]/)
const testArc = m[1].split(',').map(s => Number(s.trim()))
let arcOk = 0
for (let i = 0; i < arc.length; i++) if (testArc[i] === arc[i]) arcOk++
console.log(`ARC-EMBED ${arcOk}/${arc.length} byte-exact, len=${testArc.length}`)

// PINCHECK: the embedded REAL fixtures re-voice (the census over the
// test file's own fixture arrays)
const fixtureFaces = [['REAL_F501', 0], ['REAL_F504', 10], ['REAL_F509', 0], ['REAL_F516', 7], ['REAL_F532', 108], ['REAL_F548', 181], ['REAL_F558', 4], ['REAL_F559', 0], ['REAL_F563', 9], ['REAL_F565', 9]]
let pinOk = 0
for (const [name, want] of fixtureFaces) {
  const fm = testSrc.match(new RegExp('const ' + name + ' = \\[([\\s\\S]*?)\\n\\]'))
  if (!fm) { console.log(`PINCHECK ${name} NOT FOUND`); continue }
  const lines = [...fm[1].matchAll(/"([^"]+)"/g)].map(x => x[1])
  const v = rejoinChampFourthBreathCensus(lines).rejoinChampFourthBreath
  const t = rejoinChampThirdBreathCensus(lines).rejoinChampThirdBreath
  if (v === want) pinOk++
  else console.log(`PINCHECK ${name} MISMATCH module=${v} want=${want}`)
}
console.log(`PINCHECK ${pinOk}/${fixtureFaces.length} GREEN`)

// SYNTHETICS: the constructive branch + the wrap + the co-reign
const synth = []
const mk = (arr) => arr
const oneEcho = mk(['[04:00:00] [Server thread/INFO]: YardSurvey joined the game'])
synth.push(['oneEcho', rejoinChampFourthBreathCensus(oneEcho).rejoinChampFourthBreath, 0])
const singleGap = mk(['[04:00:00] [Server thread/INFO]: YardSurvey joined the game', '[04:01:00] [Server thread/INFO]: F3 joined the game', '[04:09:00] [Server thread/INFO]: F3 joined the game'])
synth.push(['singleGap', rejoinChampFourthBreathCensus(singleGap).rejoinChampFourthBreath, 0])
const twoGaps = mk(['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game'])
synth.push(['twoGaps', rejoinChampFourthBreathCensus(twoGaps).rejoinChampFourthBreath, 0])
const threeGaps = mk(['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game'])
synth.push(['threeGaps', rejoinChampFourthBreathCensus(threeGaps).rejoinChampFourthBreath, 0])
const fourGaps = mk(['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[08:05:00] [Server thread/INFO]: F3 joined the game', '[08:09:00] [Server thread/INFO]: F3 joined the game'])
synth.push(['fourGaps', rejoinChampFourthBreathCensus(fourGaps).rejoinChampFourthBreath, 240])
const coReign = mk(['[09:00:00] [Server thread/INFO]: YardSurvey joined the game', '[09:01:00] [Server thread/INFO]: F3 joined the game', '[09:02:00] [Server thread/INFO]: F7 joined the game', '[09:04:00] [Server thread/INFO]: F3 joined the game', '[09:07:00] [Server thread/INFO]: F7 joined the game', '[09:08:00] [Server thread/INFO]: F3 joined the game', '[09:14:00] [Server thread/INFO]: F7 joined the game', '[09:26:00] [Server thread/INFO]: F3 joined the game', '[09:27:00] [Server thread/INFO]: F7 joined the game'])
synth.push(['coReign', rejoinChampFourthBreathCensus(coReign).rejoinChampFourthBreath, 720])
const wrap = mk(['[08:00:00] [Server thread/INFO]: YardSurvey joined the game', '[08:01:00] [Server thread/INFO]: F3 joined the game', '[08:02:00] [Server thread/INFO]: F3 joined the game', '[08:03:00] [Server thread/INFO]: F3 joined the game', '[08:04:00] [Server thread/INFO]: F3 joined the game', '[23:59:30] [Server thread/INFO]: F3 joined the game', '[00:01:30] [Server thread/INFO]: F3 joined the game'])
synth.push(['wrap', rejoinChampFourthBreathCensus(wrap).rejoinChampFourthBreath, 120])
let sOk = 0
for (const [name, got, want] of synth) {
  if (got === want) sOk++
  else console.log(`SYNTH ${name} MISMATCH got=${got} want=${want}`)
}
console.log(`SYNTHETICS ${sOk}/${synth.length} GREEN`)
