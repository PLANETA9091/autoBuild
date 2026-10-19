/**
 * finalcollectedtrend.test.mjs - (v0.976.280) THE FINAL COLLECTED
 * LINES' OWN GATHERED MASS - the final report's own per-material
 * collected lines the word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the eight fleet faces'
 * own collected lines):
 *   F478: 75+12+428+204 = 719   F479: 38+7+377+653 = 1075
 *   F480: 60+4+415+568 = 1047   F481: 90+0+426+128 = 644
 *   F482: 102+6+139+432 = 679   F483: 61+9+198+230 = 498
 *   F484: 48+9+343+453 = 853    F485: 11+6+111+299 = 427
 * the eight-face arc 719 -> 1075 -> 1047 -> 644 -> 679 -> 498 -> 853
 * -> 427 - the word takes the seat, the pins ride the faces
 * byte-exact, the birth speaks five of the six real windows.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { finalCollectedCensus, finalCollectedConsistent, finalCollectedTrendRow } from '../../src/lib/finalcollectedtrend.mjs'

// the REAL face lines byte-exact (the collected lines' own shapes -
// the required tail the emitter's own optional byte holds, the bare
// form the no-required material rides, the zero got the F481 gravel
// line's own lawful zero)
const F478 = [
  '  sand          collected      75 (0.047% of 157,926)',
  '  gravel        collected      12 (0.008% of 149,380)',
  '  dirt          collected     428',
  '  stone         collected     204 (3.047% of 6,695)'
]
const F479 = [
  '  sand          collected      38 (0.024% of 157,926)',
  '  gravel        collected       7 (0.005% of 149,380)',
  '  dirt          collected     377',
  '  stone         collected     653 (9.754% of 6,695)'
]
const F480 = [
  '  sand          collected      60 (0.038% of 157,926)',
  '  gravel        collected       4 (0.003% of 149,380)',
  '  dirt          collected     415',
  '  stone         collected     568 (8.484% of 6,695)'
]
const F481 = [
  '  sand          collected      90 (0.057% of 157,926)',
  '  gravel        collected       0 (0.000% of 149,380)',
  '  dirt          collected     426',
  '  stone         collected     128 (1.912% of 6,695)'
]
const F482 = [
  '  sand          collected     102 (0.065% of 157,926)',
  '  gravel        collected       6 (0.004% of 149,380)',
  '  dirt          collected     139',
  '  stone         collected     432 (6.453% of 6,695)'
]
const F483 = [
  '  sand          collected      61 (0.039% of 157,926)',
  '  gravel        collected       9 (0.006% of 149,380)',
  '  dirt          collected     198',
  '  stone         collected     230 (3.435% of 6,695)'
]
const F484 = [
  '  sand          collected      48 (0.030% of 157,926)',
  '  gravel        collected       9 (0.006% of 149,380)',
  '  dirt          collected     343',
  '  stone         collected     453 (6.766% of 6,695)'
]
const F485 = [
  '  sand          collected      11 (0.007% of 157,926)',
  '  gravel        collected       6 (0.004% of 149,380)',
  '  dirt          collected     111',
  '  stone         collected     299 (4.466% of 6,695)'
]

test('the REAL faces byte-exact - the census rides all eight faces\' gathered mass', () => {
  assert.deepEqual(finalCollectedCensus(F478), { total: 719, materials: 4 })
  assert.deepEqual(finalCollectedCensus(F479), { total: 1075, materials: 4 })
  assert.deepEqual(finalCollectedCensus(F480), { total: 1047, materials: 4 })
  assert.deepEqual(finalCollectedCensus(F481), { total: 644, materials: 4 })
  assert.deepEqual(finalCollectedCensus(F482), { total: 679, materials: 4 })
  assert.deepEqual(finalCollectedCensus(F483), { total: 498, materials: 4 })
  assert.deepEqual(finalCollectedCensus(F484), { total: 853, materials: 4 })
  assert.deepEqual(finalCollectedCensus(F485), { total: 427, materials: 4 })
  // the MULTI-PRINT LAW - every line its own seat, the sum the face's
  // own mass (the eight faces in one fold ride the last face's sum
  // only through the fold the caller builds, the census itself the
  // caller's own per-face call prices)
  assert.deepEqual(finalCollectedCensus([...F478, ...F485]), { total: 719 + 427, materials: 8 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(finalCollectedCensus(null), null)
  assert.equal(finalCollectedCensus(undefined), null)
  assert.equal(finalCollectedCensus('  sand          collected      75'), null)
  assert.equal(finalCollectedCensus(42), null)
  // junk lines - the lawful zero (the never-gathered face)
  assert.deepEqual(finalCollectedCensus([]), { total: 0, materials: 0 })
  assert.deepEqual(finalCollectedCensus(['total chaos, no gather here']), { total: 0, materials: 0 })
  // the junk line never poisons the sum - the strict lines alone ride
  assert.deepEqual(finalCollectedCensus([null, 42, 'junk', ...F485]), { total: 427, materials: 4 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  const Z = { total: 0, materials: 0 }
  // the fused tail - the line ends at the line end, never mid-token
  assert.deepEqual(finalCollectedCensus(['  sand          collected      11junk']), Z)
  // the leading zero - the .248 house law
  assert.deepEqual(finalCollectedCensus(['  sand          collected     011']), Z)
  // the negative count
  assert.deepEqual(finalCollectedCensus(['  sand          collected     -11']), Z)
  // the pretty spacing - the emitter's own column math byte-exact
  // (the name gap 14 minus the name's own length)
  assert.deepEqual(finalCollectedCensus(['  sand           collected      11']), Z)
  // the missing two-space prefix - the report block's own indent
  assert.deepEqual(finalCollectedCensus([' sand          collected      11']), Z)
  // the bot-tagged prefix - one emitter one shape
  assert.deepEqual(finalCollectedCensus(['[bot-7]   sand          collected      11']), Z)
  // the bare cell without the frame
  assert.deepEqual(finalCollectedCensus(['collected      11']), Z)
  // the wrong frame - the gather verb the template holds
  assert.deepEqual(finalCollectedCensus(['  sand          gathered      11']), Z)
  // the drifted template - the 'collected' prose the line rides
  assert.deepEqual(finalCollectedCensus(['  sand          collect      11']), Z)
  // the comma-less required skin - the toLocaleString's own grouping
  assert.deepEqual(finalCollectedCensus(['  sand          collected      11 (0.007% of 157926)']), Z)
  // the fused percent skin - the ' (' tail the template holds
  assert.deepEqual(finalCollectedCensus(['  sand          collected      11(0.007% of 157,926)']), Z)
  // the two-decimal percent skin - the toFixed's own three-decimal shape
  assert.deepEqual(finalCollectedCensus(['  sand          collected      11 (0.07% of 157,926)']), Z)
  // the gap the column math refuses - the got gap 8 minus the got's
  // own length (a hand-wide gap the emitter never prints)
  assert.deepEqual(finalCollectedCensus(['  sand          collected        11']), Z)
  // the zero got itself rides - the zero lawful (the F481 gravel
  // line's own shape)
  assert.deepEqual(finalCollectedCensus(['  gravel        collected       0 (0.000% of 149,380)']), { total: 0, materials: 1 })
})

test('the fence - every branch the fold proves', () => {
  const good = { back: { total: 719, materials: 4 }, prev: { total: 1075, materials: 4 }, cur: { total: 1047, materials: 4 } }
  assert.equal(finalCollectedConsistent(good), true)
  // the null and the non-object
  assert.equal(finalCollectedConsistent(null), false)
  assert.equal(finalCollectedConsistent(undefined), false)
  assert.equal(finalCollectedConsistent(42), false)
  assert.equal(finalCollectedConsistent([good]), false)
  // the missing face
  assert.equal(finalCollectedConsistent({ back: good.back, prev: good.prev }), false)
  assert.equal(finalCollectedConsistent({ back: null, prev: good.prev, cur: good.cur }), false)
  // the non-integer and the negative cell
  assert.equal(finalCollectedConsistent({ back: { total: 1.5, materials: 4 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(finalCollectedConsistent({ back: { total: -1, materials: 4 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(finalCollectedConsistent({ back: { total: NaN, materials: 4 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(finalCollectedConsistent({ back: { total: 719, materials: 1.5 }, prev: good.prev, cur: good.cur }), false)
  // the tally and the sum never disagree - the materials-zero face
  // must hold the zero total
  assert.equal(finalCollectedConsistent({ back: { total: 5, materials: 0 }, prev: good.prev, cur: good.cur }), false)
  // the all-zero-got face rides - the zero total with the materials
  // tally the lawful gather (the face the dig hand closed empty)
  assert.equal(finalCollectedConsistent({ back: { total: 0, materials: 4 }, prev: good.prev, cur: good.cur }), true)
  // extra keys never rejected
  assert.equal(finalCollectedConsistent({ ...good, junk: 'rides' }), true)
  // the zero cells ride - the zero lawful
  assert.equal(finalCollectedConsistent({ back: { total: 0, materials: 0 }, prev: { total: 0, materials: 0 }, cur: { total: 0, materials: 0 } }), true)
})

test('the shapes byte-exact - the REAL six windows the birth speaks five, the synthetic arcs the machinery proves', () => {
  const TAIL = "(the materials dump word's row keeps the byName JSON's own stockpile seat (the .248 word - a different emitter's lane, the demand side's own bottom ledger never the gathered display), the plan progress word's row keeps the completion fraction's seat, the sweep collected lane's row keeps the smelt sweep's own verdict seat (the .232 word - a different collected), the counters banked/smelted rows keep the counters line's own cells (the .276/.269 words), the bootstrap targets row keeps the launch line's own assignment seat (the .279 word) - the gathered mass's row alone, co-existence by seat never by duplication)"
  const f = (x, y) => ({ total: x, materials: y })
  // the REAL six windows byte-exact - the birth speaks five (the
  // swing-rich arc), the fade window the sixth rides
  assert.match(finalCollectedTrendRow({ back: f(719, 4), prev: f(1075, 4), cur: f(1047, 4) }), /^the final collected trend \(v0\.976\.280\): the gather weather's own swing - 719 -> 1075 \(\+356\) -> 1047 \(-28\)/)
  assert.match(finalCollectedTrendRow({ back: f(1075, 4), prev: f(1047, 4), cur: f(644, 4) }), /^the final collected trend \(v0\.976\.280\): the gather weather's own fade ran two steps deep - 1075 -> 1047 \(-28\) -> 644 \(-403\)/)
  assert.match(finalCollectedTrendRow({ back: f(1047, 4), prev: f(644, 4), cur: f(679, 4) }), /^the final collected trend \(v0\.976\.280\): the gather weather's own swing - 1047 -> 644 \(-403\) -> 679 \(\+35\)/)
  assert.match(finalCollectedTrendRow({ back: f(644, 4), prev: f(679, 4), cur: f(498, 4) }), /^the final collected trend \(v0\.976\.280\): the gather weather's own swing - 644 -> 679 \(\+35\) -> 498 \(-181\)/)
  assert.match(finalCollectedTrendRow({ back: f(679, 4), prev: f(498, 4), cur: f(853, 4) }), /^the final collected trend \(v0\.976\.280\): the gather weather's own swing - 679 -> 498 \(-181\) -> 853 \(\+355\)/)
  assert.match(finalCollectedTrendRow({ back: f(498, 4), prev: f(853, 4), cur: f(427, 4) }), /^the final collected trend \(v0\.976\.280\): the gather weather's own swing - 498 -> 853 \(\+355\) -> 427 \(-426\)/)
  assert.match(finalCollectedTrendRow({ back: f(719, 4), prev: f(1075, 4), cur: f(1047, 4) }), /the fade and the swell traded seats between the faces, the materials rode 4 -> 4 -> 4 \(the materials dump word's row keeps/)
  // the swell shape - the synthetic byte-exact (the dig hand surged)
  const swell = { back: f(400, 4), prev: f(500, 4), cur: f(600, 4) }
  assert.match(finalCollectedTrendRow(swell), /^the final collected trend \(v0\.976\.280\): the gather weather's own swell ran two steps deep - 400 -> 500 \(\+100\) -> 600 \(\+100\)/)
  // the materials side-car's own arc rides (the config the report grew)
  const mats = { back: { total: 400, materials: 4 }, prev: { total: 500, materials: 5 }, cur: { total: 600, materials: 6 } }
  assert.match(finalCollectedTrendRow(mats), /the materials rode 4 -> 5 -> 6/)
  // the three-face zero - the family's own shape keeps the silence
  const zeros = { back: f(0, 0), prev: f(0, 0), cur: f(0, 0) }
  assert.equal(finalCollectedTrendRow(zeros), null)
  // the fence fails - the null
  assert.equal(finalCollectedTrendRow(null), null)
  assert.equal(finalCollectedTrendRow({ back: { junk: 1 }, prev: { total: 2, materials: 3 }, cur: { total: 3, materials: 3 } }), null)
})
// zero the family's own shape keeps silent - the never-gathered face
// the lawful zero prices; the seats never merge - the materials dump
// row and the plan progress row and the sweep collected row and the
// counters banked/smelted rows and the bootstrap targets row keep
// their lanes, the gathered mass's row alone rides here.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the word
// rides the reader's fold over the lines the fleet already emits.
