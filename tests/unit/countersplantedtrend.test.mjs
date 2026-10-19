/**
 * countersplantedtrend.test.mjs - (v0.976.274) THE COUNTERS PLANTED
 * CELL'S OWN FARM MASS - the counters line's own planted cell the word
 * prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the eight fleet faces'
 * own counters lines):
 *   F478: '... smelted=25 planted=10 torched=2 ...'
 *   F479: '... smelted=4 planted=11 torched=1 ...'
 *   F480: '... smelted=37 planted=11 torched=19 ...'
 *   F481: '... smelted=58 planted=13 torched=8 ...'
 *   F482: '... smelted=2 planted=13 torched=12 ...'
 *   F483: '... smelted=21 planted=9 torched=4 ...'
 *   F484: '... smelted=14 planted=10 torched=5 ...'
 *   F485: '... smelted=1 planted=7 torched=2 ...'
 * the eight-face arc 10 -> 11 -> 11 -> 13 -> 13 -> 9 -> 10 -> 7 no row
 * read - the word takes the seat, the pins ride the faces byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterPlantedCensus, counterPlantedConsistent, counterPlantedTrendRow } from '../../src/lib/countersplantedtrend.mjs'

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
  assert.deepEqual(counterPlantedCensus([F478]), { planted: 10 })
  assert.deepEqual(counterPlantedCensus([F479]), { planted: 11 })
  assert.deepEqual(counterPlantedCensus([F480]), { planted: 11 })
  assert.deepEqual(counterPlantedCensus([F481]), { planted: 13 })
  assert.deepEqual(counterPlantedCensus([F482]), { planted: 13 })
  assert.deepEqual(counterPlantedCensus([F483]), { planted: 9 })
  assert.deepEqual(counterPlantedCensus([F484]), { planted: 10 })
  assert.deepEqual(counterPlantedCensus([F485]), { planted: 7 })
  // the eight lines in one face - LAST-PRINT-WINS, the last print rides
  assert.deepEqual(counterPlantedCensus([F478, F479, F480, F481, F482, F483, F484, F485]), { planted: 7 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(counterPlantedCensus(null), null)
  assert.equal(counterPlantedCensus(undefined), null)
  assert.equal(counterPlantedCensus('bots=19 planted=10'), null)
  assert.equal(counterPlantedCensus(42), null)
  // junk lines - the lawful zero (the never-counted face)
  assert.deepEqual(counterPlantedCensus([]), { planted: 0 })
  assert.deepEqual(counterPlantedCensus(['total chaos, no counters here']), { planted: 0 })
  assert.deepEqual(counterPlantedCensus([null, 42, 'junk', F478]), { planted: 10 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  // the fused tail - the cell ends at whitespace or line end, never mid-token
  const fused = F478.replace('planted=10 torched=2', 'planted=10torched=2')
  assert.deepEqual(counterPlantedCensus([fused]), { planted: 0 })
  // the leading zero - the .248 house law
  const leading = F478.replace('planted=10 ', 'planted=010 ')
  assert.deepEqual(counterPlantedCensus([leading]), { planted: 0 })
  // the negative count
  const negative = F478.replace('planted=10 ', 'planted=-10 ')
  assert.deepEqual(counterPlantedCensus([negative]), { planted: 0 })
  // the pretty spacing - the emitter's own template order byte-exact
  // (the head chain's own single space the template holds)
  const pretty = F478.replace('smelted=25 planted=10', 'smelted=25  planted=10')
  assert.deepEqual(counterPlantedCensus([pretty]), { planted: 0 })
  // the altered order - the head chain's own template
  const altered = F478.replace('planted=10 torched=2', 'torched=2 planted=10')
  assert.deepEqual(counterPlantedCensus([altered]), { planted: 0 })
  // the truncated head - the 'bots=' anchor rides whole
  const truncated = F478.replace('bots=19 spawned=19', 'bots=19')
  assert.deepEqual(counterPlantedCensus([truncated]), { planted: 0 })
  // the bot-tagged prefix - one emitter one shape
  const tagged = '[bot-7] ' + F478
  assert.deepEqual(counterPlantedCensus([tagged]), { planted: 0 })
  // the bare cell without the frame
  assert.deepEqual(counterPlantedCensus(['planted=10']), { planted: 0 })
  // the drifted frame - the smelted cell the head chain holds
  const drifted = F478.replace('smelted=25 planted=10', 'smelted=25')
  assert.deepEqual(counterPlantedCensus([drifted]), { planted: 0 })
  // the zero planted cell itself rides - the zero lawful (the synthetic)
  const zeroFace = F478.replace('planted=10 ', 'planted=0 ')
  assert.deepEqual(counterPlantedCensus([zeroFace]), { planted: 0 })
  // ...and the zero rides WHOLE (not the junk zero): the census returns the zero cell
  const zeroReal = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=0 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
  const read = counterPlantedCensus([zeroReal])
  assert.equal(read.planted, 0)
  assert.equal(counterPlantedConsistent({ back: read, prev: read, cur: read }), true)
})

test('the fence - every branch the fold proves', () => {
  const good = { back: { planted: 13 }, prev: { planted: 9 }, cur: { planted: 10 } }
  assert.equal(counterPlantedConsistent(good), true)
  // the null and the non-object
  assert.equal(counterPlantedConsistent(null), false)
  assert.equal(counterPlantedConsistent(undefined), false)
  assert.equal(counterPlantedConsistent(42), false)
  assert.equal(counterPlantedConsistent([good]), false)
  // the missing face
  assert.equal(counterPlantedConsistent({ back: good.back, prev: good.prev }), false)
  assert.equal(counterPlantedConsistent({ back: null, prev: good.prev, cur: good.cur }), false)
  // the non-integer and the negative cell
  assert.equal(counterPlantedConsistent({ back: { planted: 1.5 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterPlantedConsistent({ back: { planted: -1 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterPlantedConsistent({ back: { planted: NaN }, prev: good.prev, cur: good.cur }), false)
  // extra keys never rejected
  assert.equal(counterPlantedConsistent({ ...good, junk: 'rides' }), true)
  // the zero cells ride - the zero lawful
  assert.equal(counterPlantedConsistent({ back: { planted: 0 }, prev: { planted: 0 }, cur: { planted: 0 } }), true)
})

test('the shapes byte-exact - the REAL six windows the two swings speak', () => {
  const TAIL = "(the smelted word's row keeps the furnace seat (the .269 word - its grammar anchors the planted cell's bytes after its priced cell, its census never prices them), the torched word's row keeps the torch seat (the .261 word), the climbs word's row keeps the scaffold seat (the .270 word), the tools word's row keeps the repair seat (the .271 word), the wet word's row keeps the hazard seat (the .272 word), the fights word's row keeps the combat seat (the .273 word - its grammar anchors the planted cell's bytes in the head chain, its census never prices them) - the farm mass's row alone, co-existence by seat never by duplication)"
  const f = (x) => ({ planted: x })
  // the four REAL held windows - the honest silences
  assert.equal(counterPlantedTrendRow({ back: f(10), prev: f(11), cur: f(11) }), null)
  assert.equal(counterPlantedTrendRow({ back: f(11), prev: f(11), cur: f(13) }), null)
  assert.equal(counterPlantedTrendRow({ back: f(11), prev: f(13), cur: f(13) }), null)
  assert.equal(counterPlantedTrendRow({ back: f(13), prev: f(13), cur: f(9) }), null)
  // the W482-483-484 swing - the real window byte-exact
  assert.equal(counterPlantedTrendRow({ back: f(13), prev: f(9), cur: f(10) }), "the counters planted trend (v0.976.274): the farm weather's own swing - 13 -> 9 (-4) -> 10 (+1) - the fade and the swell traded seats between the faces " + TAIL)
  // the W483-484-485 swing - the real window byte-exact
  assert.equal(counterPlantedTrendRow({ back: f(9), prev: f(10), cur: f(7) }), "the counters planted trend (v0.976.274): the farm weather's own swing - 9 -> 10 (+1) -> 7 (-3) - the fade and the swell traded seats between the faces " + TAIL)
  // the swell shape - the synthetic byte-exact
  const swell = { back: f(5), prev: f(9), cur: f(12) }
  assert.match(counterPlantedTrendRow(swell), /^the counters planted trend \(v0\.976\.274\): the farm weather's own swell ran two steps deep - 5 -> 9 \(\+4\) -> 12 \(\+3\)/)
  // the fade shape - the synthetic byte-exact
  const fade = { back: f(12), prev: f(9), cur: f(5) }
  assert.match(counterPlantedTrendRow(fade), /^the counters planted trend \(v0\.976\.274\): the farm weather's own fade ran two steps deep - 12 -> 9 \(-3\) -> 5 \(-4\)/)
  // the three-face zero - the lawful silence
  const zeros = { back: f(0), prev: f(0), cur: f(0) }
  assert.equal(counterPlantedTrendRow(zeros), null)
  // the fence fails - the null
  assert.equal(counterPlantedTrendRow(null), null)
  assert.equal(counterPlantedTrendRow({ back: { junk: 1 }, prev: { planted: 2 }, cur: { planted: 3 } }), null)
})
