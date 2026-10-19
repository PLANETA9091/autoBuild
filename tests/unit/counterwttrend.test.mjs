/**
 * counterwttrend.test.mjs - (v0.976.288) THE COUNTERS WT CELL'S OWN
 * WATER TABLE MASS - the counters line's own wt cell the word prices,
 * pure.
 *
 * THE REAL FACES (the .285 test's own trusted bytes, the fourteen
 * fleet faces' own counters lines):
 *   wt:  2 2 2 2 1 2 2 2 2 2 1 1 1 3
 *   wet: 2 3 7 3 3 12 5 12 3 10 18 5 11 2
 * the REAL arc speaks ONE of the twelve windows and the held law's
 * own honest silence ELEVEN times on the REAL faces (the W478-479-480
 * through W489-490-491 held prairie the silence prices, the
 * W481-482-483 swing 2 -> 1 -> 2 the one REAL voice) - the water
 * table board's own quiet the REAL arc holds.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterWtCensus, counterWtConsistent, counterWtTrendRow } from '../../src/lib/counterwttrend.mjs'

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
  [F478, 2, 2], [F479, 2, 3], [F480, 2, 7], [F481, 2, 3], [F482, 1, 3], [F483, 2, 12], [F484, 2, 5], [F485, 2, 12], [F486, 2, 3], [F487, 2, 10], [F488, 1, 18], [F489, 1, 5], [F490, 1, 11], [F491, 3, 2]
]

test('the REAL faces byte-exact - the census rides all fourteen faces\' board mass', () => {
  FACES.forEach(([line, wt, wet], i) => {
    assert.deepEqual(counterWtCensus([line]), { wt, wet }, `F${478 + i}`)
  })
  // the law LAST-PRINT-WINS - the counters line speaks once per face,
  // the last print the freshest body the face held
  assert.deepEqual(counterWtCensus([F478, F491]), { wt: 3, wet: 2 })
  assert.deepEqual(counterWtCensus([F491, F478]), { wt: 2, wet: 2 })
  // the whole fourteen-face arc rides as one body too
  assert.deepEqual(counterWtCensus(FACES.map((f) => f[0])), { wt: 3, wet: 2 })
})

test('the junk faces the lawful zero and the honest null', () => {
  assert.deepEqual(counterWtCensus([]), { wt: 0, wet: 0 })
  assert.deepEqual(counterWtCensus(['junk', '   ', 'bots=1 spawned=1']), { wt: 0, wet: 0 })
  assert.equal(counterWtCensus(null), null)
  assert.equal(counterWtCensus('bots=1 spawned=1 wet=1 wt=1'), null)
  assert.deepEqual(counterWtCensus([42, 7]), { wt: 0, wet: 0 })
})

test('the near-miss lanes never ride - the grammar refuses the skins', () => {
  const skins = [
    'wt=2', // the bare cell without the frame
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet = 2 wt=2', // the pretty spacing
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wt=2 wet=2', // the altered order
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=02', // the leading zero
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=-2', // the negative count
    'F478 bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2', // the bot-tagged prefix
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wt=2', // the drifted template - the wet cell missing
    'wet=2 wt=2', // the truncated head
    'bots=x spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2', // the wrong frame
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2 next=1', // the trailing junk the line-end anchor refuses
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2wt=2', // the fused tail
    'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wt=2' // the side-car missing - the wet cell missing
  ]
  skins.forEach((skin) => {
    assert.deepEqual(counterWtCensus([skin, F478]), { wt: 2, wet: 2 }, `skin rides not: ${skin.slice(0, 60)}`)
    assert.deepEqual(counterWtCensus([skin]), { wt: 0, wet: 0 }, `skin alone lawful zero: ${skin.slice(0, 60)}`)
  })
})

test('the fence every branch', () => {
  const face = { wt: 2, wet: 3 }
  assert.equal(counterWtConsistent({ back: face, prev: face, cur: face }), true)
  // the zero lawful - the empty-board face keeps the healthy zero
  const zero = { wt: 0, wet: 0 }
  assert.equal(counterWtConsistent({ back: zero, prev: zero, cur: zero }), true)
  // the falses
  assert.equal(counterWtConsistent(null), false)
  assert.equal(counterWtConsistent(undefined), false)
  assert.equal(counterWtConsistent('fold'), false)
  assert.equal(counterWtConsistent([face, face, face]), false)
  assert.equal(counterWtConsistent({ back: face }), false)
  assert.equal(counterWtConsistent({ back: face, prev: face }), false)
  assert.equal(counterWtConsistent({ back: face, prev: face, cur: { wt: 1.5, wet: 0 } }), false)
  assert.equal(counterWtConsistent({ back: face, prev: face, cur: { wt: -1, wet: 0 } }), false)
  assert.equal(counterWtConsistent({ back: face, prev: face, cur: { wt: 1, wet: -2 } }), false)
  assert.equal(counterWtConsistent({ back: face, prev: face, cur: { wt: '2', wet: 0 } }), false)
  assert.equal(counterWtConsistent({ back: face, prev: face, cur: { wt: NaN, wet: 0 } }), false)
  assert.equal(counterWtConsistent({ back: null, prev: face, cur: face }), false)
  assert.equal(counterWtConsistent({ back: face, prev: 7, cur: face }), false)
  // extra keys never rejected
  assert.equal(counterWtConsistent({ back: { ...face, extra: 1 }, prev: face, cur: face }), true)
})

test('the REAL twelve windows - ONE SPEAKS the eleven REAL helds the honest silence prices', () => {
  const of = (wt, wet) => ({ wt, wet })
  const fold = (back, prev, cur) => ({ back, prev, cur })
  // W481-482-483: 2 -> 1 -> 2 - the swing - byte-exact the row
  assert.equal(counterWtTrendRow(fold(of(2, 3), of(1, 3), of(2, 12))), "the counters wt trend (v0.976.288): the board weather's own swing - 2 -> 1 (-1) -> 2 (+1) - the board and the calm traded seats between the faces, the wet hand rode 3 -> 3 -> 12 (the wet word's row keeps the wet seat (the .272 word - whose side-car rides this same wt hand, the rider never the priced voice), the hazard ledger and the water table board keep their runtime seats (the wet= and wt= cells the same tail band holds), the reboots cell the rollback word prices (the .287 word), the swords cell the forge word prices (the .285 word), the kicks cell the exclusion word prices (the .284 word), the spawned/banked/smelted cells their words keep (the .277/.276/.269 words) - the board mass's row alone, co-existence by seat never by duplication)")
  // the eleven REAL helds - the honest silence prices (the family's
  // own held law - the water table board's own quiet prairie)
  assert.equal(counterWtTrendRow(fold(of(2, 2), of(2, 3), of(2, 7))), null, 'W478-479-480 held')
  assert.equal(counterWtTrendRow(fold(of(2, 3), of(2, 7), of(2, 3))), null, 'W479-480-481 held')
  assert.equal(counterWtTrendRow(fold(of(2, 7), of(2, 3), of(1, 3))), null, 'W480-481-482 held')
  assert.equal(counterWtTrendRow(fold(of(1, 3), of(2, 12), of(2, 5))), null, 'W482-483-484 held')
  assert.equal(counterWtTrendRow(fold(of(2, 12), of(2, 5), of(2, 12))), null, 'W483-484-485 held')
  assert.equal(counterWtTrendRow(fold(of(2, 5), of(2, 12), of(2, 3))), null, 'W484-485-486 held')
  assert.equal(counterWtTrendRow(fold(of(2, 12), of(2, 3), of(2, 10))), null, 'W485-486-487 held')
  assert.equal(counterWtTrendRow(fold(of(2, 3), of(2, 10), of(1, 18))), null, 'W486-487-488 held')
  assert.equal(counterWtTrendRow(fold(of(2, 10), of(1, 18), of(1, 5))), null, 'W487-488-489 held')
  assert.equal(counterWtTrendRow(fold(of(1, 18), of(1, 5), of(1, 11))), null, 'W488-489-490 held')
  assert.equal(counterWtTrendRow(fold(of(1, 5), of(1, 11), of(3, 2))), null, 'W489-490-491 held')
})

test('the synthetic shapes - the fade and the swell and the three-face zero and the fence fail', () => {
  const of = (wt, wet) => ({ wt, wet })
  const fold = (back, prev, cur) => ({ back, prev, cur })
  // the fade - the water table thinned two steps deep
  const fade = counterWtTrendRow(fold(of(5, 4), of(3, 6), of(1, 8)))
  assert.match(fade, /^the counters wt trend \(v0\.976\.288\): the board weather's own fade ran two steps deep - 5 -> 3 \(-2\) -> 1 \(-2\) - the water table thinned, the wet hand rode 4 -> 6 -> 8/)
  // the swell - the water table swelled two steps deep
  const swell = counterWtTrendRow(fold(of(1, 8), of(3, 6), of(5, 4)))
  assert.match(swell, /^the counters wt trend \(v0\.976\.288\): the board weather's own swell ran two steps deep - 1 -> 3 \(\+2\) -> 5 \(\+2\) - the water table swelled, the wet hand rode 8 -> 6 -> 4/)
  // the three-face zero mass prices nothing - the board never
  // emptied the whole arc (the lawful silence)
  assert.equal(counterWtTrendRow(fold(of(0, 0), of(0, 0), of(0, 0))), null)
  // the fence fail - the honest null
  assert.equal(counterWtTrendRow(null), null)
  assert.equal(counterWtTrendRow({ back: of(1, 1), prev: of(2, 2), cur: { wt: -1, wet: 0 } }), null)
  // the side-car rides as a number never a second word - the wet
  // arc inside the swing row byte-visible
  assert.match(counterWtTrendRow(fold(of(2, 5), of(1, 7), of(2, 9))), / the wet hand rode 5 -> 7 -> 9 \(/)
})
