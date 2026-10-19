/**
 * counterairglitchestrend.test.mjs - (v0.976.286) THE COUNTERS
 * AIRGLITCHES CELL'S OWN GLITCH MASS - the counters line's own
 * airGlitches cell the word prices, pure.
 *
 * THE REAL FACES (the .285 test's own trusted bytes, the fourteen
 * fleet faces' own counters lines):
 *   airGlitches:  857   0   0   0 821 232   0 945   0 414 627 243 274   0
 *   pounceLanded:   0   0   0   0   0   0   0   0   0   0   0   0   0   0
 * the REAL arc speaks NINE of the twelve windows and the held law's
 * own honest silence TWICE on the REAL faces (W478-479-480 the
 * 857 -> 0 -> 0 held, W480-481-482 the 0 -> 0 -> 821 held) and the
 * three-face zero mass prices nothing (W479-480-481 the REAL zero
 * prairie the lawful silence keeps) - the glitch mass's own
 * volatility the REAL arc holds.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterAirGlitchesCensus, counterAirGlitchesConsistent, counterAirGlitchesTrendRow } from '../../src/lib/counterairglitchestrend.mjs'

// the REAL counters lines byte-exact (the .285 test's own pins hold)
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
  [F478, 857], [F479, 0], [F480, 0], [F481, 0], [F482, 821], [F483, 232], [F484, 0], [F485, 945], [F486, 0], [F487, 414], [F488, 627], [F489, 243], [F490, 274], [F491, 0]
]

test('the REAL faces byte-exact - the census rides all fourteen faces\' glitch mass', () => {
  FACES.forEach(([line, air], i) => {
    assert.deepEqual(counterAirGlitchesCensus([line]), { airGlitches: air, pounceLanded: 0 }, `F${478 + i}`)
  })
  // the law LAST-PRINT-WINS - the counters line speaks once per face,
  // the last print the freshest body the face held
  assert.deepEqual(counterAirGlitchesCensus([F478, F491]), { airGlitches: 0, pounceLanded: 0 })
  assert.deepEqual(counterAirGlitchesCensus([F491, F478]), { airGlitches: 857, pounceLanded: 0 })
  // the whole fourteen-face arc rides as one body too
  assert.deepEqual(counterAirGlitchesCensus(FACES.map((f) => f[0])), { airGlitches: 0, pounceLanded: 0 })
})

test('the junk faces the lawful zero and the honest null', () => {
  assert.deepEqual(counterAirGlitchesCensus([]), { airGlitches: 0, pounceLanded: 0 })
  assert.deepEqual(counterAirGlitchesCensus(['junk', '   ', 'bots=1 spawned=1']), { airGlitches: 0, pounceLanded: 0 })
  assert.equal(counterAirGlitchesCensus(null), null)
  assert.equal(counterAirGlitchesCensus('bots=1 spawned=1 airGlitches=1'), null)
  assert.deepEqual(counterAirGlitchesCensus([42, 7]), { airGlitches: 0, pounceLanded: 0 })
})

test('the near-miss lanes never ride - the grammar refuses the skins', () => {
  const skins = [
    'airGlitches=857', // the bare cell without the frame
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches = 857', // the pretty spacing
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 airGlitches=857 pounceLanded=0', // the altered order
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=0857', // the leading zero
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=-3', // the negative count
    'F478 bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857', // the bot-tagged prefix
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 airGlitches=857', // the drifted template - the pounceLanded cell missing
    'pounceLanded=0 airGlitches=857', // the truncated head
    'bots=x spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857', // the wrong frame
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857claims=33', // the fused tail
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0' // the priced cell missing
  ]
  skins.forEach((skin) => {
    assert.deepEqual(counterAirGlitchesCensus([skin, F478]), { airGlitches: 857, pounceLanded: 0 }, `skin rides not: ${skin.slice(0, 60)}`)
    assert.deepEqual(counterAirGlitchesCensus([skin]), { airGlitches: 0, pounceLanded: 0 }, `skin alone lawful zero: ${skin.slice(0, 60)}`)
  })
})

test('the fence every branch', () => {
  const face = { airGlitches: 857, pounceLanded: 0 }
  assert.equal(counterAirGlitchesConsistent({ back: face, prev: face, cur: face }), true)
  // the zero lawful - the clean-physics face keeps the healthy zero
  const zero = { airGlitches: 0, pounceLanded: 0 }
  assert.equal(counterAirGlitchesConsistent({ back: zero, prev: zero, cur: zero }), true)
  // the falses
  assert.equal(counterAirGlitchesConsistent(null), false)
  assert.equal(counterAirGlitchesConsistent(undefined), false)
  assert.equal(counterAirGlitchesConsistent('fold'), false)
  assert.equal(counterAirGlitchesConsistent([face, face, face]), false)
  assert.equal(counterAirGlitchesConsistent({ back: face }), false)
  assert.equal(counterAirGlitchesConsistent({ back: face, prev: face }), false)
  assert.equal(counterAirGlitchesConsistent({ back: face, prev: face, cur: { airGlitches: 1.5, pounceLanded: 0 } }), false)
  assert.equal(counterAirGlitchesConsistent({ back: face, prev: face, cur: { airGlitches: -1, pounceLanded: 0 } }), false)
  assert.equal(counterAirGlitchesConsistent({ back: face, prev: face, cur: { airGlitches: 1, pounceLanded: -2 } }), false)
  assert.equal(counterAirGlitchesConsistent({ back: face, prev: face, cur: { airGlitches: '857', pounceLanded: 0 } }), false)
  assert.equal(counterAirGlitchesConsistent({ back: face, prev: face, cur: { airGlitches: NaN, pounceLanded: 0 } }), false)
  assert.equal(counterAirGlitchesConsistent({ back: null, prev: face, cur: face }), false)
  assert.equal(counterAirGlitchesConsistent({ back: face, prev: 7, cur: face }), false)
  // extra keys never rejected
  assert.equal(counterAirGlitchesConsistent({ back: { ...face, extra: 1 }, prev: face, cur: face }), true)
})

test('the REAL twelve windows - NINE SPEAK the two REAL helds and the REAL zero prairie the silence prices', () => {
  const of = (airGlitches, pounceLanded) => ({ airGlitches, pounceLanded })
  const fold = (back, prev, cur) => ({ back, prev, cur })
  // W481-482-483: 0 -> 821 -> 232 - the swing - byte-exact the row
  assert.equal(counterAirGlitchesTrendRow(fold(of(0, 0), of(821, 0), of(232, 0))), "the counters airGlitches trend (v0.976.286): the glitch weather's own swing - 0 -> 821 (+821) -> 232 (-589) - the glitch and the calm traded seats between the faces, the pounce hand rode 0 -> 0 -> 0 (the pounce word's row keeps the pounce seats (the .264 word - whose cells ride this same glitch hand as the side-car numbers, the rider never the priced voice), the claims word's row keeps the claims band (the .263 word - whose head chain anchors this cell's bytes), the swords cell the forge word prices (the .285 word), the kicks cell the exclusion word prices (the .284 word), the spawned/banked/smelted cells their words keep (the .277/.276/.269 words) - the glitch mass's row alone, co-existence by seat never by duplication)")
  // W482-483-484: 821 -> 232 -> 0 - the fade - the glitches thinned
  assert.match(counterAirGlitchesTrendRow(fold(of(821, 0), of(232, 0), of(0, 0))), /^the counters airGlitches trend \(v0\.976\.286\): the glitch weather's own fade ran two steps deep - 821 -> 232 \(-589\) -> 0 \(-232\) - the glitches thinned, the pounce hand rode 0 -> 0 -> 0 \(/)
  // W486-487-488: 0 -> 414 -> 627 - the swell - the glitch storm surged
  assert.match(counterAirGlitchesTrendRow(fold(of(0, 0), of(414, 0), of(627, 0))), /^the counters airGlitches trend \(v0\.976\.286\): the glitch weather's own swell ran two steps deep - 0 -> 414 \(\+414\) -> 627 \(\+213\) - the glitch storm surged, the pounce hand rode 0 -> 0 -> 0 \(/)
  // the five more REAL swings the volatility holds - each speaks
  assert.match(counterAirGlitchesTrendRow(fold(of(232, 0), of(0, 0), of(945, 0))), /own swing - 232 -> 0 \(-232\) -> 945 \(\+945\)/, 'W483-484-485')
  assert.match(counterAirGlitchesTrendRow(fold(of(0, 0), of(945, 0), of(0, 0))), /own swing - 0 -> 945 \(\+945\) -> 0 \(-945\)/, 'W484-485-486')
  assert.match(counterAirGlitchesTrendRow(fold(of(945, 0), of(0, 0), of(414, 0))), /own swing - 945 -> 0 \(-945\) -> 414 \(\+414\)/, 'W485-486-487')
  assert.match(counterAirGlitchesTrendRow(fold(of(414, 0), of(627, 0), of(243, 0))), /own swing - 414 -> 627 \(\+213\) -> 243 \(-384\)/, 'W487-488-489')
  assert.match(counterAirGlitchesTrendRow(fold(of(627, 0), of(243, 0), of(274, 0))), /own swing - 627 -> 243 \(-384\) -> 274 \(\+31\)/, 'W488-489-490')
  assert.match(counterAirGlitchesTrendRow(fold(of(243, 0), of(274, 0), of(0, 0))), /own swing - 243 -> 274 \(\+31\) -> 0 \(-274\)/, 'W489-490-491')
  // the two REAL helds - the honest silence prices (the family's own
  // held law)
  assert.equal(counterAirGlitchesTrendRow(fold(of(857, 0), of(0, 0), of(0, 0))), null, 'W478-479-480 the 857 -> 0 -> 0 held')
  assert.equal(counterAirGlitchesTrendRow(fold(of(0, 0), of(0, 0), of(821, 0))), null, 'W480-481-482 the 0 -> 0 -> 821 held')
  // the REAL zero prairie - the three-face zero mass prices nothing
  assert.equal(counterAirGlitchesTrendRow(fold(of(0, 0), of(0, 0), of(0, 0))), null, 'W479-480-481 the REAL zero prairie')
})

test('the synthetic shapes - the fence fail and the side-car rides as a number', () => {
  const of = (airGlitches, pounceLanded) => ({ airGlitches, pounceLanded })
  const fold = (back, prev, cur) => ({ back, prev, cur })
  // the side-car rides as a number never a second word - a non-zero
  // landing hand byte-visible in the row
  const row = counterAirGlitchesTrendRow(fold(of(857, 1), of(0, 2), of(821, 3)))
  assert.match(row, / the pounce hand rode 1 -> 2 -> 3 \(/)
  assert.equal(counterAirGlitchesTrendRow(null), null)
  assert.equal(counterAirGlitchesTrendRow({ back: of(1, 1), prev: of(2, 2), cur: { airGlitches: -1, pounceLanded: 0 } }), null)
  assert.equal(counterAirGlitchesTrendRow({ back: of(1, 1), prev: of(2, 2), cur: of(0.5, 0) }), null)
})
