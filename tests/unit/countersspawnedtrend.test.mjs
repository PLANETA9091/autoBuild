/**
 * countersspawnedtrend.test.mjs - (v0.976.277) THE COUNTERS SPAWNED
 * CELL'S OWN BOOTSTRAP MASS - the counters line's own spawned cell the
 * word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the eight fleet faces'
 * own counters lines):
 *   F478: 'bots=19 spawned=19 reconnects=1 kicks=0 ...'
 *   F479: 'bots=19 spawned=19 reconnects=20 kicks=12 ...'
 *   F480: 'bots=19 spawned=19 reconnects=14 ...'
 *   F481: 'bots=19 spawned=19 ...'
 *   F482: 'bots=19 spawned=19 ...'
 *   F483: 'bots=19 spawned=19 ...'
 *   F484: 'bots=19 spawned=19 ...'
 *   F485: 'bots=19 spawned=19 ...'
 * the eight-face arc 19 -> 19 -> 19 -> 19 -> 19 -> 19 -> 19 -> 19 no
 * row read - the word takes the seat, the pins ride the faces
 * byte-exact, the birth the held law's own honest silence prices.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterSpawnedCensus, counterSpawnedConsistent, counterSpawnedTrendRow } from '../../src/lib/countersspawnedtrend.mjs'

// the REAL face lines byte-exact (the counters lines' own heads)
const F478 = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'
const F481 = 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 recovered=3 reboots=0 upgraded=12 swords=19 alive=19 climbs=34 banked=1511 smelted=58 planted=13 torched=8 fights=23 kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 airGlitches=0 claims=19 claimedHolds=0 wet=3 wt=2'
const F482 = 'bots=19 spawned=19 reconnects=23 kicks=9 tools=18 recovered=2 reboots=1 upgraded=15 swords=17 alive=19 climbs=14 banked=14 smelted=2 planted=13 torched=12 fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0 airGlitches=821 claims=15 claimedHolds=0 wet=3 wt=1'
const F483 = 'bots=19 spawned=19 reconnects=7 kicks=2 tools=17 recovered=3 reboots=0 upgraded=12 swords=17 alive=19 climbs=32 banked=1038 smelted=21 planted=9 torched=4 fights=2 kills=0 shelters=0 rescues=40 pounces=0 pounceLanded=0 airGlitches=232 claims=23 claimedHolds=0 wet=12 wt=2'
const F484 = 'bots=19 spawned=19 reconnects=8 kicks=0 tools=19 recovered=0 reboots=0 upgraded=13 swords=16 alive=19 climbs=24 banked=455 smelted=14 planted=10 torched=5 fights=13 kills=5 shelters=0 rescues=41 pounces=1 pounceLanded=0 airGlitches=0 claims=16 claimedHolds=0 wet=5 wt=2'
const F485 = 'bots=19 spawned=19 reconnects=13 kicks=6 tools=18 recovered=2 reboots=1 upgraded=12 swords=16 alive=19 climbs=30 banked=470 smelted=1 planted=7 torched=2 fights=40 kills=7 shelters=2 rescues=36 pounces=2 pounceLanded=0 airGlitches=945 claims=21 claimedHolds=0 wet=12 wt=2'

test('the REAL faces byte-exact - the census rides all eight counters lines', () => {
  assert.deepEqual(counterSpawnedCensus([F478]), { spawned: 19, bots: 19 })
  assert.deepEqual(counterSpawnedCensus([F479]), { spawned: 19, bots: 19 })
  assert.deepEqual(counterSpawnedCensus([F480]), { spawned: 19, bots: 19 })
  assert.deepEqual(counterSpawnedCensus([F481]), { spawned: 19, bots: 19 })
  assert.deepEqual(counterSpawnedCensus([F482]), { spawned: 19, bots: 19 })
  assert.deepEqual(counterSpawnedCensus([F483]), { spawned: 19, bots: 19 })
  assert.deepEqual(counterSpawnedCensus([F484]), { spawned: 19, bots: 19 })
  assert.deepEqual(counterSpawnedCensus([F485]), { spawned: 19, bots: 19 })
  // the eight lines in one face - LAST-PRINT-WINS, the last print rides
  assert.deepEqual(counterSpawnedCensus([F478, F479, F480, F481, F482, F483, F484, F485]), { spawned: 19, bots: 19 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(counterSpawnedCensus(null), null)
  assert.equal(counterSpawnedCensus(undefined), null)
  assert.equal(counterSpawnedCensus('bots=19 spawned=19'), null)
  assert.equal(counterSpawnedCensus(42), null)
  // junk lines - the lawful zero (the never-counted face)
  assert.deepEqual(counterSpawnedCensus([]), { spawned: 0, bots: 0 })
  assert.deepEqual(counterSpawnedCensus(['total chaos, no counters here']), { spawned: 0, bots: 0 })
  assert.deepEqual(counterSpawnedCensus([null, 42, 'junk', F478]), { spawned: 19, bots: 19 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  // the fused tail - the cell ends at whitespace or line end, never mid-token
  const fused = F478.replace('spawned=19 reconnects=1', 'spawned=19reconnects=1')
  assert.deepEqual(counterSpawnedCensus([fused]), { spawned: 0, bots: 0 })
  // the leading zero - the .248 house law
  const leading = F478.replace('spawned=19 ', 'spawned=019 ')
  assert.deepEqual(counterSpawnedCensus([leading]), { spawned: 0, bots: 0 })
  // the negative count
  const negative = F478.replace('spawned=19 ', 'spawned=-19 ')
  assert.deepEqual(counterSpawnedCensus([negative]), { spawned: 0, bots: 0 })
  // the pretty spacing - the emitter's own template order byte-exact
  // (the head chain's own single space the template holds)
  const pretty = F478.replace('bots=19 spawned=19', 'bots=19  spawned=19')
  assert.deepEqual(counterSpawnedCensus([pretty]), { spawned: 0, bots: 0 })
  // the altered order - the head chain's own template
  const altered = F478.replace('bots=19 spawned=19 reconnects=1', 'spawned=19 bots=19 reconnects=1')
  assert.deepEqual(counterSpawnedCensus([altered]), { spawned: 0, bots: 0 })
  // the truncated head - the 'bots=' anchor rides whole
  const truncated = F478.replace('bots=19 spawned=19', 'spawned=19')
  assert.deepEqual(counterSpawnedCensus([truncated]), { spawned: 0, bots: 0 })
  // the bot-tagged prefix - one emitter one shape
  const tagged = '[bot-7] ' + F478
  assert.deepEqual(counterSpawnedCensus([tagged]), { spawned: 0, bots: 0 })
  // the bare cell without the frame
  assert.deepEqual(counterSpawnedCensus(['spawned=19']), { spawned: 0, bots: 0 })
  // the drifted frame - the bots cell the head chain holds
  const drifted = F478.replace('bots=19 spawned=19', 'bots=19')
  assert.deepEqual(counterSpawnedCensus([drifted]), { spawned: 0, bots: 0 })
  // the zero spawned cell itself rides - the zero lawful (the
  // never-spawning face the grammar prices)
  const zeroReal = F478.replace('spawned=19 reconnects=1', 'spawned=0 reconnects=1')
  const read = counterSpawnedCensus([zeroReal])
  assert.equal(read.spawned, 0)
  assert.equal(counterSpawnedConsistent({ back: read, prev: read, cur: read }), true)
})

test('the fence - every branch the fold proves', () => {
  const good = { back: { spawned: 19, bots: 19 }, prev: { spawned: 18, bots: 19 }, cur: { spawned: 17, bots: 19 } }
  assert.equal(counterSpawnedConsistent(good), true)
  // the null and the non-object
  assert.equal(counterSpawnedConsistent(null), false)
  assert.equal(counterSpawnedConsistent(undefined), false)
  assert.equal(counterSpawnedConsistent(42), false)
  assert.equal(counterSpawnedConsistent([good]), false)
  // the missing face
  assert.equal(counterSpawnedConsistent({ back: good.back, prev: good.prev }), false)
  assert.equal(counterSpawnedConsistent({ back: null, prev: good.prev, cur: good.cur }), false)
  // the non-integer and the negative cell
  assert.equal(counterSpawnedConsistent({ back: { spawned: 1.5, bots: 19 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterSpawnedConsistent({ back: { spawned: -1, bots: 19 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterSpawnedConsistent({ back: { spawned: NaN, bots: 19 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterSpawnedConsistent({ back: { spawned: 19, bots: 1.5 }, prev: good.prev, cur: good.cur }), false)
  // extra keys never rejected
  assert.equal(counterSpawnedConsistent({ ...good, junk: 'rides' }), true)
  // the zero cells ride - the zero lawful
  assert.equal(counterSpawnedConsistent({ back: { spawned: 0, bots: 0 }, prev: { spawned: 0, bots: 0 }, cur: { spawned: 0, bots: 0 } }), true)
})

test('the shapes byte-exact - the REAL six windows the honest silences, the synthetic arcs the machinery proves', () => {
  const TAIL = "(the finalbody census's row keeps the body line's own bots/alive cells' seat - a different emitter's lane the face ends beside, the doom ledger's row keeps the deaths' own prose lane, the reconnect word's row keeps the churn seat (the .268 word - its grammar anchors the spawned cell's bytes in the head chain, its census never prices them), the tools word's row keeps the repair seat (the .271 word), the wet word's row keeps the hazard seat (the .272 word), the fights word's row keeps the combat seat (the .273 word), the planted word's row keeps the farm seat (the .274 word), the alive word's row keeps the survival seat (the .275 word) - the bootstrap mass's row alone, co-existence by seat never by duplication)"
  const f = (x, y) => ({ spawned: x, bots: y })
  // the six REAL windows - the whole arc rode 19, every window the
  // held law's own honest silence prices
  assert.equal(counterSpawnedTrendRow({ back: f(19, 19), prev: f(19, 19), cur: f(19, 19) }), null)
  // the fade shape - the synthetic byte-exact (the day a spawn failed)
  const fade = { back: f(19, 19), prev: f(18, 19), cur: f(17, 19) }
  assert.match(counterSpawnedTrendRow(fade), /^the counters spawned trend \(v0\.976\.277\): the bootstrap weather's own fade ran two steps deep - 19 -> 18 \(-1\) -> 17 \(-1\)/)
  assert.match(counterSpawnedTrendRow(fade), /the bootstrap mass's own fade, the bots rode 19 -> 19 -> 19 \(the finalbody census's row keeps the body line's own bots\/alive cells' seat/)
  // the swell shape - the synthetic byte-exact (the fleet the config grew)
  const swell = { back: f(17, 19), prev: f(18, 19), cur: f(19, 19) }
  assert.match(counterSpawnedTrendRow(swell), /^the counters spawned trend \(v0\.976\.277\): the bootstrap weather's own swell ran two steps deep - 17 -> 18 \(\+1\) -> 19 \(\+1\)/)
  // the swing shape - the synthetic byte-exact (the trade)
  const swing = { back: f(19, 19), prev: f(18, 19), cur: f(19, 19) }
  assert.match(counterSpawnedTrendRow(swing), /^the counters spawned trend \(v0\.976\.277\): the bootstrap weather's own swing - 19 -> 18 \(-1\) -> 19 \(\+1\)/)
  assert.match(counterSpawnedTrendRow(swing), /the fade and the swell traded seats between the faces, the bots rode 19 -> 19 -> 19/)
  // the three-face zero - the family's own shape keeps the silence
  const zeros = { back: f(0, 0), prev: f(0, 0), cur: f(0, 0) }
  assert.equal(counterSpawnedTrendRow(zeros), null)
  // the fence fails - the null
  assert.equal(counterSpawnedTrendRow(null), null)
  assert.equal(counterSpawnedTrendRow({ back: { junk: 1 }, prev: { spawned: 2, bots: 3 }, cur: { spawned: 3, bots: 3 } }), null)
})
