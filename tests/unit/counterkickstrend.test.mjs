/**
 * counterkickstrend.test.mjs - (v0.976.284) THE COUNTERS KICKS CELL'S
 * OWN EXCLUSION MASS - the counters line's own kicks cell the word
 * prices, pure.
 *
 * THE REAL FACES (the .277 test's own trusted bytes, the eight fleet
 * faces' own counters lines):
 *   kicks:       0  12   1   1   9   2   0   6
 *   reconnects:  1  20  14   5  23   7   8  13
 * the REAL arc speaks FOUR of the six windows and the held law's own
 * honest silence TWICE on the REAL faces (W479-480-481 the 12 -> 1 ->
 * 1 held, W480-481-482 the 1 -> 1 -> 9 held).
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterKicksCensus, counterKicksConsistent, counterKicksTrendRow } from '../../src/lib/counterkickstrend.mjs'

// the REAL counters lines byte-exact (the .277 test's own pins hold)
const F478 = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'
const F481 = 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 recovered=3 reboots=0 upgraded=12 swords=19 alive=19 climbs=34 banked=1511 smelted=58 planted=13 torched=8 fights=23 kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 airGlitches=0 claims=19 claimedHolds=0 wet=3 wt=2'
const F482 = 'bots=19 spawned=19 reconnects=23 kicks=9 tools=18 recovered=2 reboots=1 upgraded=15 swords=17 alive=19 climbs=14 banked=14 smelted=2 planted=13 torched=12 fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0 airGlitches=821 claims=15 claimedHolds=0 wet=3 wt=1'
const F483 = 'bots=19 spawned=19 reconnects=7 kicks=2 tools=17 recovered=3 reboots=0 upgraded=12 swords=17 alive=19 climbs=32 banked=1038 smelted=21 planted=9 torched=4 fights=2 kills=0 shelters=0 rescues=40 pounces=0 pounceLanded=0 airGlitches=232 claims=23 claimedHolds=0 wet=12 wt=2'
const F484 = 'bots=19 spawned=19 reconnects=8 kicks=0 tools=19 recovered=0 reboots=0 upgraded=13 swords=16 alive=19 climbs=24 banked=455 smelted=14 planted=10 torched=5 fights=13 kills=5 shelters=0 rescues=41 pounces=1 pounceLanded=0 airGlitches=0 claims=16 claimedHolds=0 wet=5 wt=2'
const F485 = 'bots=19 spawned=19 reconnects=13 kicks=6 tools=18 recovered=2 reboots=1 upgraded=12 swords=16 alive=19 climbs=30 banked=470 smelted=1 planted=7 torched=2 fights=40 kills=7 shelters=2 rescues=36 pounces=2 pounceLanded=0 airGlitches=945 claims=21 claimedHolds=0 wet=12 wt=2'
const FACES = [
  [F478, 0, 1], [F479, 12, 20], [F480, 1, 14], [F481, 1, 5],
  [F482, 9, 23], [F483, 2, 7], [F484, 0, 8], [F485, 6, 13]
]

test('the REAL faces byte-exact - the census rides all eight faces\' exclusion mass', () => {
  FACES.forEach(([line, kicks, reconnects], i) => {
    assert.deepEqual(counterKicksCensus([line]), { kicks, reconnects }, `F${478 + i}`)
  })
  // the law LAST-PRINT-WINS - the counters line speaks once per face,
  // the last print the freshest body the face held
  assert.deepEqual(counterKicksCensus([F478, F485]), { kicks: 6, reconnects: 13 })
  assert.deepEqual(counterKicksCensus([F485, F478]), { kicks: 0, reconnects: 1 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(counterKicksCensus(null), null)
  assert.equal(counterKicksCensus(undefined), null)
  assert.equal(counterKicksCensus(42), null)
  assert.equal(counterKicksCensus(F478), null)
  // the junk faces - the lawful zero (the face with no counters line)
  assert.deepEqual(counterKicksCensus([]), { kicks: 0, reconnects: 0 })
  assert.deepEqual(counterKicksCensus(['total chaos, no counters here']), { kicks: 0, reconnects: 0 })
  // the junk line never poisons - the strict lines alone ride
  assert.deepEqual(counterKicksCensus([null, 42, 'junk', F485]), { kicks: 6, reconnects: 13 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  const Z = { kicks: 0, reconnects: 0 }
  // the fused tail - the cell ends at whitespace or line end, never
  // mid-token
  assert.deepEqual(counterKicksCensus(['bots=19 spawned=19 reconnects=1 kicks=0junk']), Z)
  // the leading zero - the .248 house law
  assert.deepEqual(counterKicksCensus(['bots=19 spawned=19 reconnects=1 kicks=012']), Z)
  // the negative count
  assert.deepEqual(counterKicksCensus(['bots=19 spawned=19 reconnects=1 kicks=-1']), Z)
  // the pretty spacing - the template's own single spaces
  assert.deepEqual(counterKicksCensus(['bots=19  spawned=19  reconnects=1  kicks=0']), Z)
  assert.deepEqual(counterKicksCensus(['bots=19 spawned=19 reconnects=1  kicks=0']), Z)
  // the altered order - the emitter's own template order
  assert.deepEqual(counterKicksCensus(['spawned=19 bots=19 reconnects=1 kicks=0']), Z)
  assert.deepEqual(counterKicksCensus(['bots=19 reconnects=1 spawned=19 kicks=0']), Z)
  // the truncated head - the 'bots=' anchor rides whole
  assert.deepEqual(counterKicksCensus(['spawned=19 reconnects=1 kicks=0']), Z)
  assert.deepEqual(counterKicksCensus(['ots=19 spawned=19 reconnects=1 kicks=0']), Z)
  // the bare cell without the frame
  assert.deepEqual(counterKicksCensus(['kicks=0']), Z)
  // the bot-tagged prefix - one emitter one shape
  assert.deepEqual(counterKicksCensus(['[bot-7] bots=19 spawned=19 reconnects=1 kicks=0']), Z)
  // the drifted frame - the spawn/reconnect cells the chain holds
  assert.deepEqual(counterKicksCensus(['bots=19 reconnects=1 kicks=0 tools=17']), Z)
  // the zero got itself rides - the zero lawful (the F478/F484 faces)
  assert.deepEqual(counterKicksCensus([F478]), { kicks: 0, reconnects: 1 })
})

test('the fence - every branch the fold proves', () => {
  const f = (k, r) => ({ kicks: k, reconnects: r })
  assert.equal(counterKicksConsistent({ back: f(0, 1), prev: f(12, 20), cur: f(1, 14) }), true)
  // the null and the non-object
  assert.equal(counterKicksConsistent(null), false)
  assert.equal(counterKicksConsistent(undefined), false)
  assert.equal(counterKicksConsistent(42), false)
  assert.equal(counterKicksConsistent([f(0, 1)]), false)
  // the missing face
  assert.equal(counterKicksConsistent({ back: f(0, 1), prev: f(12, 20) }), false)
  assert.equal(counterKicksConsistent({ back: null, prev: f(12, 20), cur: f(1, 14) }), false)
  // the non-integer and the negative cell
  assert.equal(counterKicksConsistent({ back: f(1.5, 1), prev: f(12, 20), cur: f(1, 14) }), false)
  assert.equal(counterKicksConsistent({ back: f(-1, 1), prev: f(12, 20), cur: f(1, 14) }), false)
  assert.equal(counterKicksConsistent({ back: f(NaN, 1), prev: f(12, 20), cur: f(1, 14) }), false)
  assert.equal(counterKicksConsistent({ back: f(0, 1), prev: f(12, 20), cur: f(1, Infinity) }), false)
  // the zero cells ride - the zero lawful
  assert.equal(counterKicksConsistent({ back: f(0, 0), prev: f(0, 0), cur: f(0, 0) }), true)
  // extra keys never rejected
  assert.equal(counterKicksConsistent({ back: f(0, 1), prev: f(12, 20), cur: f(1, 14), junk: 'rides' }), true)
})

test('the shapes byte-exact - the REAL six windows four speak, the helds the silence prices', () => {
  const HEAD = /^the counters kicks trend \(v0\.976\.284\): the kick weather's own/
  // the REAL six windows byte-exact - W1 the swing, W2/W3 the REAL
  // helds the honest silence prices, W4 the swing, W5 the fade, W6
  // the swing
  assert.match(counterKicksTrendRow({ back: { kicks: 0, reconnects: 1 }, prev: { kicks: 12, reconnects: 20 }, cur: { kicks: 1, reconnects: 14 } }), /^the counters kicks trend \(v0\.976\.284\): the kick weather's own swing - 0 -> 12 \(\+12\) -> 1 \(-11\)/)
  assert.equal(counterKicksTrendRow({ back: { kicks: 12, reconnects: 20 }, prev: { kicks: 1, reconnects: 14 }, cur: { kicks: 1, reconnects: 5 } }), null)
  assert.equal(counterKicksTrendRow({ back: { kicks: 1, reconnects: 14 }, prev: { kicks: 1, reconnects: 5 }, cur: { kicks: 9, reconnects: 23 } }), null)
  assert.match(counterKicksTrendRow({ back: { kicks: 1, reconnects: 5 }, prev: { kicks: 9, reconnects: 23 }, cur: { kicks: 2, reconnects: 7 } }), /^the counters kicks trend \(v0\.976\.284\): the kick weather's own swing - 1 -> 9 \(\+8\) -> 2 \(-7\)/)
  assert.match(counterKicksTrendRow({ back: { kicks: 9, reconnects: 23 }, prev: { kicks: 2, reconnects: 7 }, cur: { kicks: 0, reconnects: 8 } }), /^the counters kicks trend \(v0\.976\.284\): the kick weather's own fade ran two steps deep - 9 -> 2 \(-7\) -> 0 \(-2\)/)
  assert.match(counterKicksTrendRow({ back: { kicks: 2, reconnects: 7 }, prev: { kicks: 0, reconnects: 8 }, cur: { kicks: 6, reconnects: 13 } }), /^the counters kicks trend \(v0\.976\.284\): the kick weather's own swing - 2 -> 0 \(-2\) -> 6 \(\+6\)/)
  // every speaking row opens the same head the family holds
  for (const w of [[0, 12, 1], [1, 9, 2], [9, 2, 0], [2, 0, 6]]) {
    assert.match(counterKicksTrendRow({ back: { kicks: w[0], reconnects: 1 }, prev: { kicks: w[1], reconnects: 2 }, cur: { kicks: w[2], reconnects: 3 } }), HEAD)
  }
  // the side-car rides - the reconnections arc the row holds as
  // numbers never a second word
  const row = counterKicksTrendRow({ back: { kicks: 0, reconnects: 1 }, prev: { kicks: 12, reconnects: 20 }, cur: { kicks: 1, reconnects: 14 } })
  assert.match(row, /the reconnections rode 1 -> 20 -> 14/)
  // the tail co-existence - the .268 rider named first (the rider
  // never the priced voice), the kick lanes beside
  assert.match(row, /the reconnect word's row keeps the churn seat \(the \.268 word - whose side-car rides this same kicks hand, the rider never the priced voice\)/)
  assert.match(row, /the kick bill's own lanes keep the kick data's separate emitters \(the v0\.717 bill and the v0\.730 kinds and the v0\.908 witness and the v0\.906 kindless words/)
  assert.match(row, /the recovered cell the cure word prices \(the \.283 word\)/)
  assert.match(row, /co-existence by seat never by duplication\)$/)
  // the swell shape - the synthetic byte-exact (the kick storm)
  assert.match(counterKicksTrendRow({ back: { kicks: 1, reconnects: 1 }, prev: { kicks: 5, reconnects: 2 }, cur: { kicks: 9, reconnects: 3 } }), /^the counters kicks trend \(v0\.976\.284\): the kick weather's own swell ran two steps deep - 1 -> 5 \(\+4\) -> 9 \(\+4\)/)
  // the three-face zero mass - the family's own shape keeps the
  // silence (the server never kicked the whole arc)
  assert.equal(counterKicksTrendRow({ back: { kicks: 0, reconnects: 1 }, prev: { kicks: 0, reconnects: 2 }, cur: { kicks: 0, reconnects: 3 } }), null)
  // the fence fails - the null
  assert.equal(counterKicksTrendRow(null), null)
  assert.equal(counterKicksTrendRow({ back: { kicks: -1, reconnects: 1 }, prev: { kicks: 2, reconnects: 2 }, cur: { kicks: 3, reconnects: 3 } }), null)
})
// the seats never merge - the .268 word's row rides the kicks hand as
// its own side-car (the rider never the priced voice), the kick
// bill/kinds/witness/kindless lanes keep their separate emitters, the
// recovered and spawned/banked/smelted cells their words keep - the
// exclusion mass's row alone rides here.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.
