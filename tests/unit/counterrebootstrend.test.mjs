/**
 * counterrebootstrend.test.mjs - (v0.976.287) THE COUNTERS REBOOTS
 * CELL'S OWN ROLLBACK MASS - the counters line's own reboots cell the
 * word prices, pure.
 *
 * THE REAL FACES (the family's own trusted bytes - the .285/.284/.283
 * tests' pins hold F478..F491, the F492 face the fleet19-log artifact
 * of run 39255972997 rides - the fifteen fleet faces' own counters
 * lines):
 *   reboots:  0  0  1  0  1  0  0  1  0  3  0  0  1  1  1
 *   upgraded: 19 14 17 12 15 12 13 12 13 12  7  9  8 13 16
 * the REAL arc speaks SIX of the thirteen windows and the held law's
 * own honest silence SEVEN on the REAL faces - every speak a swing
 * (the rollback cell's own flip-flop the JVM reboots ride: the REAL
 * faces never walked two steps one way), the W2/W3/W4 and W7/W8/W9
 * trades the byte-exact pins hold, the W490-491-492 the flat face
 * the silence prices.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterRebootsCensus, counterRebootsConsistent, counterRebootsTrendRow } from '../../src/lib/counterrebootstrend.mjs'

// the REAL counters lines byte-exact (the .285/.284/.283 tests' pins
// hold F478..F491; the F492 face the fleet19-log artifact of run
// 39255972997 - the family's own committed witness rides)
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
const F492 = 'bots=19 spawned=19 reconnects=11 kicks=2 tools=16 recovered=5 reboots=1 upgraded=16 swords=18 alive=19 climbs=34 banked=1146 smelted=9 planted=21 torched=11 fights=14 kills=4 shelters=0 rescues=33 pounces=1 pounceLanded=0 airGlitches=21 claims=19 claimedHolds=0 wet=2 wt=1'
const FACES = [
  [F478, 0, 19], [F479, 0, 14], [F480, 1, 17], [F481, 0, 12],
  [F482, 1, 15], [F483, 0, 12], [F484, 0, 13], [F485, 1, 12],
  [F486, 0, 13], [F487, 3, 12], [F488, 0, 7], [F489, 0, 9],
  [F490, 1, 8], [F491, 1, 13], [F492, 1, 16]
]

test('the REAL faces byte-exact - the census rides all fifteen faces\' rollback mass', () => {
  FACES.forEach(([line, reboots, upgraded], i) => {
    assert.deepEqual(counterRebootsCensus([line]), { reboots, upgraded }, `F${478 + i}`)
  })
  // the law LAST-PRINT-WINS - the counters line speaks once per face,
  // the last print the freshest body the face held
  assert.deepEqual(counterRebootsCensus([F478, F492]), { reboots: 1, upgraded: 16 })
  assert.deepEqual(counterRebootsCensus([F492, F478]), { reboots: 0, upgraded: 19 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(counterRebootsCensus(null), null)
  assert.equal(counterRebootsCensus(undefined), null)
  assert.equal(counterRebootsCensus(42), null)
  assert.equal(counterRebootsCensus(F478), null)
  // the junk faces - the lawful zero (the face with no counters line)
  assert.deepEqual(counterRebootsCensus([]), { reboots: 0, upgraded: 0 })
  assert.deepEqual(counterRebootsCensus(['total chaos, no counters here']), { reboots: 0, upgraded: 0 })
  // the junk line never poisons - the strict lines alone ride
  assert.deepEqual(counterRebootsCensus([null, 42, 'junk', F492]), { reboots: 1, upgraded: 16 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  const Z = { reboots: 0, upgraded: 0 }
  // the fused tail - the cell ends at whitespace or line end, never
  // mid-token
  assert.deepEqual(counterRebootsCensus([F492.replace('upgraded=16 swords', 'upgraded=16swords')]), Z)
  // the leading zero - the .248 house law and the .285 word's own
  // all-cells strictness (the priced cell and the chain and the
  // side-car alike)
  assert.deepEqual(counterRebootsCensus([F478.replace('reboots=0 upgraded', 'reboots=01 upgraded')]), Z)
  assert.deepEqual(counterRebootsCensus([F492.replace('reboots=1', 'reboots=01')]), Z)
  assert.deepEqual(counterRebootsCensus([F492.replace('upgraded=16', 'upgraded=016')]), Z)
  assert.deepEqual(counterRebootsCensus([F492.replace('recovered=5', 'recovered=05')]), Z)
  // the negative count
  assert.deepEqual(counterRebootsCensus([F492.replace('reboots=1', 'reboots=-1')]), Z)
  // the pretty spacing - the template's own single spaces
  assert.deepEqual(counterRebootsCensus([F492.replace('reboots=1 upgraded', 'reboots=1  upgraded')]), Z)
  assert.deepEqual(counterRebootsCensus([F492.replace('bots=19 spawned=19', 'bots=19  spawned=19')]), Z)
  // the altered order - the emitter's own template order
  assert.deepEqual(counterRebootsCensus([F492.replace('reboots=1 upgraded=16', 'upgraded=16 reboots=1')]), Z)
  // the truncated head - the 'bots=' anchor rides whole
  assert.deepEqual(counterRebootsCensus(['spawned=19 recovered=5 reboots=1 upgraded=16']), Z)
  assert.deepEqual(counterRebootsCensus(['ots=19 spawned=19 recovered=5 reboots=1 upgraded=16']), Z)
  // the bare cell without the frame
  assert.deepEqual(counterRebootsCensus(['reboots=1']), Z)
  // the bot-tagged prefix - one emitter one shape
  assert.deepEqual(counterRebootsCensus(['[bot-7] ' + F492]), Z)
  // the drifted frame - the recovered cell the chain holds
  assert.deepEqual(counterRebootsCensus([F492.replace('recovered=5 ', '')]), Z)
  // the wrong emitter - the resurrect budget's own watchdog prose
  // never rides (the 'SERVER DEATH WATCHDOG' lines a different lane
  // the family keeps)
  assert.deepEqual(counterRebootsCensus(['[fleet] SERVER DEATH WATCHDOG: world tick died - rebooting the JVM']), Z)
  // the zero lawful - the never-rebooting face keeps the healthy zero
  assert.deepEqual(counterRebootsCensus([F492.replace('reboots=1', 'reboots=0')]), { reboots: 0, upgraded: 16 })
})

test('the fence - every branch the fold proves', () => {
  const f = (r, u) => ({ reboots: r, upgraded: u })
  assert.equal(counterRebootsConsistent({ back: f(0, 19), prev: f(1, 17), cur: f(0, 12) }), true)
  // the null and the non-object
  assert.equal(counterRebootsConsistent(null), false)
  assert.equal(counterRebootsConsistent(undefined), false)
  assert.equal(counterRebootsConsistent(42), false)
  assert.equal(counterRebootsConsistent([f(0, 19)]), false)
  // the missing face
  assert.equal(counterRebootsConsistent({ back: f(0, 19), prev: f(1, 17) }), false)
  assert.equal(counterRebootsConsistent({ back: null, prev: f(1, 17), cur: f(0, 12) }), false)
  // the non-integer and the negative cell
  assert.equal(counterRebootsConsistent({ back: f(0.5, 19), prev: f(1, 17), cur: f(0, 12) }), false)
  assert.equal(counterRebootsConsistent({ back: f(-1, 19), prev: f(1, 17), cur: f(0, 12) }), false)
  assert.equal(counterRebootsConsistent({ back: f(NaN, 19), prev: f(1, 17), cur: f(0, 12) }), false)
  assert.equal(counterRebootsConsistent({ back: f(0, 19), prev: f(1, 17), cur: f(0, Infinity) }), false)
  // the zero cells ride - the zero lawful
  assert.equal(counterRebootsConsistent({ back: f(0, 0), prev: f(0, 0), cur: f(0, 0) }), true)
  // extra keys never rejected
  assert.equal(counterRebootsConsistent({ back: f(0, 19), prev: f(1, 17), cur: f(0, 12), junk: 'rides' }), true)
})

test('the shapes byte-exact - the REAL thirteen windows six speak, the flip-flop the swings price', () => {
  const HEAD = /^the counters reboots trend \(v0\.976\.287\): the rollback weather's own/
  const row = (b, p, c, bu, pu, cu) => counterRebootsTrendRow({ back: { reboots: b, upgraded: bu }, prev: { reboots: p, upgraded: pu }, cur: { reboots: c, upgraded: cu } })
  // the REAL thirteen windows byte-exact - W1 the held, W2/W3/W4 the
  // flips the swings price, W5/W6 the helds, W7 the flip, W8/W9 the
  // storm trades, W10..W13 the helds (the late flat arc the silence
  // prices)
  assert.equal(row(0, 0, 1, 19, 14, 17), null)
  assert.match(row(0, 1, 0, 14, 17, 12), /^the counters reboots trend \(v0\.976\.287\): the rollback weather's own swing - 0 -> 1 \(\+1\) -> 0 \(-1\)/)
  assert.match(row(1, 0, 1, 17, 12, 15), /^the counters reboots trend \(v0\.976\.287\): the rollback weather's own swing - 1 -> 0 \(-1\) -> 1 \(\+1\)/)
  assert.match(row(0, 1, 0, 12, 15, 12), /^the counters reboots trend \(v0\.976\.287\): the rollback weather's own swing - 0 -> 1 \(\+1\) -> 0 \(-1\)/)
  assert.equal(row(1, 0, 0, 15, 12, 13), null)
  assert.equal(row(0, 0, 1, 12, 13, 12), null)
  assert.match(row(0, 1, 0, 13, 12, 13), /^the counters reboots trend \(v0\.976\.287\): the rollback weather's own swing - 0 -> 1 \(\+1\) -> 0 \(-1\)/)
  assert.match(row(1, 0, 3, 12, 13, 12), /^the counters reboots trend \(v0\.976\.287\): the rollback weather's own swing - 1 -> 0 \(-1\) -> 3 \(\+3\)/)
  assert.match(row(0, 3, 0, 13, 12, 7), /^the counters reboots trend \(v0\.976\.287\): the rollback weather's own swing - 0 -> 3 \(\+3\) -> 0 \(-3\)/)
  assert.equal(row(3, 0, 0, 12, 7, 9), null)
  assert.equal(row(0, 0, 1, 7, 9, 8), null)
  assert.equal(row(0, 1, 1, 9, 8, 13), null)
  assert.equal(row(1, 1, 1, 8, 13, 16), null)
  // every speaking row opens the same head the family holds
  for (const w of [[0, 1, 0], [1, 0, 1], [1, 0, 3], [0, 3, 0]]) {
    assert.match(row(w[0], w[1], w[2], 1, 2, 3), HEAD)
  }
  // the side-car rides - the upgrades arc the row holds as numbers
  // never a second word
  const speak = row(0, 1, 0, 14, 17, 12)
  assert.match(speak, /the upgrades rode 14 -> 17 -> 12/)
  const storm = row(0, 3, 0, 13, 12, 7)
  assert.match(storm, /the upgrades rode 13 -> 12 -> 7/)
  // the tail co-existence - the .267 rider named first (the rider
  // never the priced voice), the .285 smith cell and the resurrect
  // budget beside
  assert.match(speak, /the upgraded word's row keeps the upgraded cell's seat \(the \.267 word - whose side-car rides this same reboots hand, the rider keeps the ride, the seat the \.287 word takes\)/)
  assert.match(speak, /the swords word's row keeps the swords cell's seat \(the \.285 word - whose head chain anchors these same reboots bytes, the forge cells the family keeps\)/)
  assert.match(speak, /the resurrect budget keeps the JVM restart economics lane \(the v0\.56\.0 word's own runway book - the 'SERVER DEATH WATCHDOG' prose a different emitter the tally never rides\)/)
  assert.match(speak, /co-existence by seat never by duplication\)$/)
  // the swell and the fade shapes - the synthetic byte-exact (the
  // REAL faces never walked two steps one way - the rollback cell's
  // own flip-flop character the synthetic shapes alone hold)
  assert.match(row(1, 3, 5, 1, 2, 3), /^the counters reboots trend \(v0\.976\.287\): the rollback weather's own swell ran two steps deep - 1 -> 3 \(\+2\) -> 5 \(\+2\)/)
  assert.match(row(5, 3, 1, 1, 2, 3), /^the counters reboots trend \(v0\.976\.287\): the rollback weather's own fade ran two steps deep - 5 -> 3 \(-2\) -> 1 \(-2\)/)
  // the three-face zero mass - the family's own shape keeps the
  // silence (the fleet never rebooted the whole arc)
  assert.equal(counterRebootsTrendRow({ back: { reboots: 0, upgraded: 1 }, prev: { reboots: 0, upgraded: 2 }, cur: { reboots: 0, upgraded: 3 } }), null)
  // the fence fails - the null
  assert.equal(counterRebootsTrendRow(null), null)
  assert.equal(counterRebootsTrendRow({ back: { reboots: -1, upgraded: 1 }, prev: { reboots: 2, upgraded: 2 }, cur: { reboots: 3, upgraded: 3 } }), null)
})
// the seats never merge - the .267 word's row rides the reboots hand
// as its own side-car (the rider never the priced voice), the .285
// swords word's head chain anchors the same bytes, the resurrect
// budget keeps its own economics lane - the rollback mass's row alone
// rides here.
// CENSUS GUARD: zero fleet wiring, zero new fleet log lines - the
// word rides the reader's fold over the lines the fleet already
// emits.
