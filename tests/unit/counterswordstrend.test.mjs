/**
 * counterswordstrend.test.mjs - (v0.976.285) THE COUNTERS SWORDS
 * CELL'S OWN FORGE MASS - the counters line's own swords cell the
 * word prices, pure.
 *
 * THE REAL FACES (the family's own trusted bytes - the .284/.283
 * tests' pins hold F478..F490, the F491 face the fleet19-log
 * artifact of run 39250996033 rides - the fourteen fleet faces' own
 * counters lines):
 *   swords:   20  18  19  19  17  17  16  16  20  15  12  18  12  16
 *   upgraded: 19  14  17  12  15  12  13  12  13  12   7   9   8  13
 * the REAL arc speaks SIX of the twelve windows and the held law's
 * own honest silence SIX on the REAL faces (W479-480-481 through
 * W484-485-486 the six-window held prairie the silence prices), the
 * late arc the storm the five straight speaks ride (W485 the swing,
 * W486 the fade, W487-W489 the swings).
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterSwordsCensus, counterSwordsConsistent, counterSwordsTrendRow } from '../../src/lib/counterswordstrend.mjs'

// the REAL counters lines byte-exact (the .284/.283 tests' pins hold
// F478..F490; the F491 face the fleet19-log artifact of run
// 39250996033 - the family's own committed witness rides)
const F478 = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'
const F481 = 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 recovered=3 reboots=0 upgraded=12 swords=19 alive=19 climbs=34 banked=1511 smelted=58 planted=13 torched=8 fights=23 kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 airGlitches=0 claims=19 claimedHolds=0 wet=3 wt=2'
const F482 = 'bots=19 spawned=19 reconnects=23 kicks=9 tools=18 recovered=2 reboots=1 upgraded=15 swords=17 alive=19 climbs=14 banked=14 smelted=2 planted=13 torched=12 fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0 airGlitches=821 claims=15 claimedHolds=0 wet=3 wt=1'
const F483 = 'bots=19 spawned=19 reconnects=7 kicks=2 tools=17 recovered=3 reboots=0 upgraded=12 swords=17 alive=19 climbs=32 banked=1038 smelted=21 planted=9 torched=4 fights=2 kills=0 shelters=0 rescues=40 pounces=0 pounceLanded=0 airGlitches=232 claims=23 claimedHolds=0 wet=12 wt=2'
const F484 = 'bots=19 spawned=19 reconnects=8 kicks=0 tools=19 recovered=0 reboots=0 upgraded=13 swords=16 alive=19 climbs=24 banked=455 smelted=14 planted=10 torched=5 fights=13 kills=5 shelters=0 rescues=41 pounces=1 pounceLanded=0 airGlitches=0 claims=16 claimedHolds=0 wet=5 wt=2'
const F485 = 'bots=19 spawned=19 reconnects=13 kicks=6 tools=18 recovered=2 reboots=1 upgraded=12 swords=16 alive=19 climbs=30 banked=470 smelted=1 planted=7 torched=2 fights=40 kills=7 shelters=2 rescues=36 pounces=2 pounceLanded=0 airGlitches=945 claims=21 claimedHolds=0 wet=12 wt=2'
const F486 = 'bots=19 spawned=19 reconnects=14 kicks=3 tools=18 recovered=3 reboots=0 upgraded=13 swords=20 alive=19 climbs=26 banked=399 smelted=8 planted=13 torched=8 fights=6 kills=1 shelters=1 rescues=20 pounces=7 pounceLanded=0 airGlitches=0 claims=18 claimedHolds=0 wet=3 wt=2'
const F487 = 'bots=19 spawned=19 reconnects=19 kicks=2 tools=16 recovered=3 reboots=3 upgraded=12 swords=15 alive=19 climbs=22 banked=0 smelted=0 planted=12 torched=5 fights=12 kills=1 shelters=0 rescues=121 pounces=3 pounceLanded=0 airGlitches=414 claims=15 claimedHolds=0 wet=10 wt=2'
const F488 = 'bots=19 spawned=19 reconnects=15 kicks=0 tools=17 recovered=1 reboots=0 upgraded=7 swords=12 alive=19 climbs=21 banked=344 smelted=13 planted=14 torched=2 fights=34 kills=1 shelters=10 rescues=38 pounces=3 pounceLanded=0 airGlitches=627 claims=9 claimedHolds=0 wet=18 wt=1'
const F489 = 'bots=19 spawned=19 reconnects=33 kicks=10 tools=16 recovered=4 reboots=0 upgraded=9 swords=18 alive=19 climbs=14 banked=952 smelted=5 planted=12 torched=2 fights=18 kills=3 shelters=4 rescues=51 pounces=4 pounceLanded=0 airGlitches=243 claims=1 claimedHolds=0 wet=5 wt=1'
const F490 = 'bots=19 spawned=19 reconnects=12 kicks=1 tools=15 recovered=7 reboots=1 upgraded=8 swords=12 alive=19 climbs=34 banked=1001 smelted=25 planted=21 torched=2 fights=29 kills=2 shelters=5 rescues=179 pounces=2 pounceLanded=0 airGlitches=274 claims=17 claimedHolds=0 wet=11 wt=1'
const F491 = 'bots=19 spawned=19 reconnects=11 kicks=3 tools=17 recovered=1 reboots=1 upgraded=13 swords=16 alive=19 climbs=24 banked=623 smelted=11 planted=10 torched=2 fights=5 kills=3 shelters=0 rescues=13 pounces=0 pounceLanded=0 airGlitches=0 claims=13 claimedHolds=0 wet=2 wt=3'
const FACES = [
  [F478, 20, 19], [F479, 18, 14], [F480, 19, 17], [F481, 19, 12],
  [F482, 17, 15], [F483, 17, 12], [F484, 16, 13], [F485, 16, 12],
  [F486, 20, 13], [F487, 15, 12], [F488, 12, 7], [F489, 18, 9],
  [F490, 12, 8], [F491, 16, 13]
]

test('the REAL faces byte-exact - the census rides all fourteen faces\' forge mass', () => {
  FACES.forEach(([line, swords, upgraded], i) => {
    assert.deepEqual(counterSwordsCensus([line]), { swords, upgraded }, `F${478 + i}`)
  })
  // the law LAST-PRINT-WINS - the counters line speaks once per face,
  // the last print the freshest body the face held
  assert.deepEqual(counterSwordsCensus([F478, F491]), { swords: 16, upgraded: 13 })
  assert.deepEqual(counterSwordsCensus([F491, F478]), { swords: 20, upgraded: 19 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(counterSwordsCensus(null), null)
  assert.equal(counterSwordsCensus(undefined), null)
  assert.equal(counterSwordsCensus(42), null)
  assert.equal(counterSwordsCensus(F478), null)
  // the junk faces - the lawful zero (the face with no counters line)
  assert.deepEqual(counterSwordsCensus([]), { swords: 0, upgraded: 0 })
  assert.deepEqual(counterSwordsCensus(['total chaos, no counters here']), { swords: 0, upgraded: 0 })
  // the junk line never poisons - the strict lines alone ride
  assert.deepEqual(counterSwordsCensus([null, 42, 'junk', F491]), { swords: 16, upgraded: 13 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  const Z = { swords: 0, upgraded: 0 }
  // the fused tail - the cell ends at whitespace or line end, never
  // mid-token
  assert.deepEqual(counterSwordsCensus([F478.replace('swords=20 alive', 'swords=20alive')]), Z)
  // the leading zero - the .248 house law (the priced cell and the
  // head chain's own cells alike)
  assert.deepEqual(counterSwordsCensus([F478.replace('swords=20', 'swords=016')]), Z)
  assert.deepEqual(counterSwordsCensus([F478.replace('upgraded=19', 'upgraded=019')]), Z)
  // the negative count
  assert.deepEqual(counterSwordsCensus([F478.replace('swords=20', 'swords=-1')]), Z)
  // the pretty spacing - the template's own single spaces
  assert.deepEqual(counterSwordsCensus([F478.replace('upgraded=19 swords=20', 'upgraded=19  swords=20')]), Z)
  assert.deepEqual(counterSwordsCensus([F478.replace('bots=19 spawned=19', 'bots=19  spawned=19')]), Z)
  // the altered order - the emitter's own template order
  assert.deepEqual(counterSwordsCensus([F478.replace('upgraded=19 swords=20', 'swords=20 upgraded=19')]), Z)
  // the truncated head - the 'bots=' anchor rides whole
  assert.deepEqual(counterSwordsCensus(['spawned=19 reboots=0 upgraded=19 swords=20']), Z)
  assert.deepEqual(counterSwordsCensus(['ots=19 spawned=19 reboots=0 upgraded=19 swords=20']), Z)
  // the bare cell without the frame
  assert.deepEqual(counterSwordsCensus(['swords=20']), Z)
  // the bot-tagged prefix - one emitter one shape
  assert.deepEqual(counterSwordsCensus(['[bot-7] ' + F478]), Z)
  // the drifted frame - the reboots cell the chain holds
  assert.deepEqual(counterSwordsCensus([F478.replace('reboots=0 ', '')]), Z)
  // the wrong emitter - the .162 word's own raw docket lane never
  // rides (the 'F<n> sword:' lines a different lane the family keeps)
  assert.deepEqual(counterSwordsCensus(['F1 sword: OK (wooden_sword, holds 1)']), Z)
  assert.deepEqual(counterSwordsCensus(['F2 sword: failed (no table)']), Z)
  // the zero lawful - the bladeless face keeps the healthy zero
  assert.deepEqual(counterSwordsCensus([F478.replace('swords=20', 'swords=0')]), { swords: 0, upgraded: 19 })
})

test('the fence - every branch the fold proves', () => {
  const f = (s, u) => ({ swords: s, upgraded: u })
  assert.equal(counterSwordsConsistent({ back: f(20, 19), prev: f(18, 14), cur: f(19, 17) }), true)
  // the null and the non-object
  assert.equal(counterSwordsConsistent(null), false)
  assert.equal(counterSwordsConsistent(undefined), false)
  assert.equal(counterSwordsConsistent(42), false)
  assert.equal(counterSwordsConsistent([f(20, 19)]), false)
  // the missing face
  assert.equal(counterSwordsConsistent({ back: f(20, 19), prev: f(18, 14) }), false)
  assert.equal(counterSwordsConsistent({ back: null, prev: f(18, 14), cur: f(19, 17) }), false)
  // the non-integer and the negative cell
  assert.equal(counterSwordsConsistent({ back: f(20.5, 19), prev: f(18, 14), cur: f(19, 17) }), false)
  assert.equal(counterSwordsConsistent({ back: f(-1, 19), prev: f(18, 14), cur: f(19, 17) }), false)
  assert.equal(counterSwordsConsistent({ back: f(NaN, 19), prev: f(18, 14), cur: f(19, 17) }), false)
  assert.equal(counterSwordsConsistent({ back: f(20, 19), prev: f(18, 14), cur: f(19, Infinity) }), false)
  // the zero cells ride - the zero lawful
  assert.equal(counterSwordsConsistent({ back: f(0, 0), prev: f(0, 0), cur: f(0, 0) }), true)
  // extra keys never rejected
  assert.equal(counterSwordsConsistent({ back: f(20, 19), prev: f(18, 14), cur: f(19, 17), junk: 'rides' }), true)
})

test('the shapes byte-exact - the REAL twelve windows six speak, the held prairie the silence prices', () => {
  const HEAD = /^the counters swords trend \(v0\.976\.285\): the sword weather's own/
  const row = (b, p, c, bu, pu, cu) => counterSwordsTrendRow({ back: { swords: b, upgraded: bu }, prev: { swords: p, upgraded: pu }, cur: { swords: c, upgraded: cu } })
  // the REAL twelve windows byte-exact - W1 the swing, W2..W7 the
  // REAL held prairie the honest silence prices, W8 the swing, W9 the
  // fade, W10-W12 the swings
  assert.match(row(20, 18, 19, 19, 14, 17), /^the counters swords trend \(v0\.976\.285\): the sword weather's own swing - 20 -> 18 \(-2\) -> 19 \(\+1\)/)
  assert.equal(row(18, 19, 19, 14, 17, 12), null)
  assert.equal(row(19, 19, 17, 17, 12, 15), null)
  assert.equal(row(19, 17, 17, 12, 15, 12), null)
  assert.equal(row(17, 17, 16, 15, 12, 13), null)
  assert.equal(row(17, 16, 16, 12, 13, 12), null)
  assert.equal(row(16, 16, 20, 13, 12, 13), null)
  assert.match(row(16, 20, 15, 12, 13, 12), /^the counters swords trend \(v0\.976\.285\): the sword weather's own swing - 16 -> 20 \(\+4\) -> 15 \(-5\)/)
  assert.match(row(20, 15, 12, 13, 12, 7), /^the counters swords trend \(v0\.976\.285\): the sword weather's own fade ran two steps deep - 20 -> 15 \(-5\) -> 12 \(-3\)/)
  assert.match(row(15, 12, 18, 12, 7, 9), /^the counters swords trend \(v0\.976\.285\): the sword weather's own swing - 15 -> 12 \(-3\) -> 18 \(\+6\)/)
  assert.match(row(12, 18, 12, 7, 9, 8), /^the counters swords trend \(v0\.976\.285\): the sword weather's own swing - 12 -> 18 \(\+6\) -> 12 \(-6\)/)
  assert.match(row(18, 12, 16, 9, 8, 13), /^the counters swords trend \(v0\.976\.285\): the sword weather's own swing - 18 -> 12 \(-6\) -> 16 \(\+4\)/)
  // every speaking row opens the same head the family holds
  for (const w of [[20, 18, 19], [16, 20, 15], [20, 15, 12], [15, 12, 18], [12, 18, 12], [18, 12, 16]]) {
    assert.match(row(w[0], w[1], w[2], 1, 2, 3), HEAD)
  }
  // the side-car rides - the upgrades arc the row holds as numbers
  // never a second word
  const speak = row(20, 18, 19, 19, 14, 17)
  assert.match(speak, /the upgrades rode 19 -> 14 -> 17/)
  // the tail co-existence - the .270 rider named first (the rider
  // never the priced voice), the docket lane and the family beside
  assert.match(speak, /the climb word's row keeps the scaffold seat \(the \.270 word - whose side-car rides this same swords hand, the rider never the priced voice\)/)
  assert.match(speak, /the sword's own raw docket lane keeps the sword data's separate emitter \(the \.162 word - the 'F<n> sword:' lines, a different lane never the counters cell\)/)
  assert.match(speak, /the upgrade cell the upgraded word prices \(the \.267 word\)/)
  assert.match(speak, /the recovered and the kicks cells the cure and the exclusion words price \(the \.283 and the \.284 words\)/)
  assert.match(speak, /co-existence by seat never by duplication\)$/)
  // the swell shape - the synthetic byte-exact (the blade storm)
  assert.match(row(3, 5, 9, 1, 2, 3), /^the counters swords trend \(v0\.976\.285\): the sword weather's own swell ran two steps deep - 3 -> 5 \(\+2\) -> 9 \(\+4\)/)
  // the three-face zero mass - the family's own shape keeps the
  // silence (the forge never shaped the whole arc)
  assert.equal(counterSwordsTrendRow({ back: { swords: 0, upgraded: 1 }, prev: { swords: 0, upgraded: 2 }, cur: { swords: 0, upgraded: 3 } }), null)
  // the fence fails - the null
  assert.equal(counterSwordsTrendRow(null), null)
  assert.equal(counterSwordsTrendRow({ back: { swords: -1, upgraded: 1 }, prev: { swords: 2, upgraded: 2 }, cur: { swords: 3, upgraded: 3 } }), null)
})
// the seats never merge - the .270 word's row rides the swords hand as
// its own side-car (the rider never the priced voice), the .162 raw
// docket lane keeps its separate emitter, the upgrade/recovered/kicks
// cells their words keep - the forge mass's row alone rides here.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.
