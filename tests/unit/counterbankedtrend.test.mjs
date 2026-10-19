/**
 * counterbankedtrend.test.mjs - (v0.976.276) THE COUNTERS BANKED CELL'S
 * OWN BANK MASS - the counters line's own banked cell the word
 * prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the ten fleet faces'
 * own counters lines):
 *   F478: '... climbs=34 banked=1104 smelted=25 planted=10 ...'
 *   F479: '... banked=313 smelted=4 planted=11 ...'
 *   F480: '... banked=1588 smelted=37 planted=11 ...'
 *   F481: '... banked=1511 smelted=58 planted=13 ...'
 *   F482: '... banked=14 smelted=2 planted=13 ...'
 *   F483: '... banked=1038 smelted=21 planted=9 ...'
 *   F484: '... banked=455 smelted=14 planted=10 ...'
 *   F485: '... banked=470 smelted=1 planted=7 ...'
 *   F486: '... banked=399 smelted=8 planted=13 ...'
 *   F487: '... banked=0 smelted=0 planted=12 ...'
 * the ten-face arc 1104 -> 313 -> 1588 -> 1511 -> 14 -> 1038 -> 455 ->
 * 470 -> 399 -> 0 no row read - the word takes the seat, the pins ride
 * the faces byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterBankedCensus, counterBankedConsistent, counterBankedTrendRow } from '../../src/lib/counterbankedtrend.mjs'

// the REAL face lines byte-exact (the counters lines' own heads)
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

test('the REAL faces byte-exact - the census rides all ten counters lines', () => {
  assert.deepEqual(counterBankedCensus([F478]), { banked: 1104 })
  assert.deepEqual(counterBankedCensus([F479]), { banked: 313 })
  assert.deepEqual(counterBankedCensus([F480]), { banked: 1588 })
  assert.deepEqual(counterBankedCensus([F481]), { banked: 1511 })
  assert.deepEqual(counterBankedCensus([F482]), { banked: 14 })
  assert.deepEqual(counterBankedCensus([F483]), { banked: 1038 })
  assert.deepEqual(counterBankedCensus([F484]), { banked: 455 })
  assert.deepEqual(counterBankedCensus([F485]), { banked: 470 })
  assert.deepEqual(counterBankedCensus([F486]), { banked: 399 })
  assert.deepEqual(counterBankedCensus([F487]), { banked: 0 })
  // the ten lines in one face - LAST-PRINT-WINS, the last print rides
  assert.deepEqual(counterBankedCensus([F478, F479, F480, F481, F482, F483, F484, F485, F486, F487]), { banked: 0 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(counterBankedCensus(null), null)
  assert.equal(counterBankedCensus(undefined), null)
  assert.equal(counterBankedCensus('bots=19 banked=1104'), null)
  assert.equal(counterBankedCensus(42), null)
  // junk lines - the lawful zero (the never-banked face)
  assert.deepEqual(counterBankedCensus([]), { banked: 0 })
  assert.deepEqual(counterBankedCensus(['total chaos, no counters here']), { banked: 0 })
  assert.deepEqual(counterBankedCensus([null, 42, 'junk', F478]), { banked: 1104 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  // the fused tail - the cell ends at whitespace or line end, never mid-token
  const fused = F478.replace('banked=1104 smelted=25', 'banked=1104smelted=25')
  assert.deepEqual(counterBankedCensus([fused]), { banked: 0 })
  // the leading zero - the .248 house law
  const leading = F478.replace('banked=1104 ', 'banked=01104 ')
  assert.deepEqual(counterBankedCensus([leading]), { banked: 0 })
  // the negative count
  const negative = F478.replace('banked=1104 ', 'banked=-1104 ')
  assert.deepEqual(counterBankedCensus([negative]), { banked: 0 })
  // the pretty spacing - the emitter's own template order byte-exact
  const pretty = F478.replace('climbs=34 banked=1104', 'climbs=34  banked=1104')
  assert.deepEqual(counterBankedCensus([pretty]), { banked: 0 })
  // the altered order - the head chain's own template
  const altered = F478.replace('banked=1104 smelted=25', 'smelted=25 banked=1104')
  assert.deepEqual(counterBankedCensus([altered]), { banked: 0 })
  // the truncated head - the 'bots=' anchor rides whole
  const truncated = F478.replace('bots=19 spawned=19', 'bots=19')
  assert.deepEqual(counterBankedCensus([truncated]), { banked: 0 })
  // the bot-tagged prefix - one emitter one shape
  const tagged = '[bot-7] ' + F478
  assert.deepEqual(counterBankedCensus([tagged]), { banked: 0 })
  // the bare cell without the frame
  assert.deepEqual(counterBankedCensus(['banked=1104']), { banked: 0 })
  // the zero banked cell itself rides - the zero lawful (the emptied bank)
  assert.deepEqual(counterBankedCensus([F487]), { banked: 0 })
})

test('the fence - every branch the fold proves', () => {
  const good = { back: { banked: 1104 }, prev: { banked: 313 }, cur: { banked: 1588 } }
  assert.equal(counterBankedConsistent(good), true)
  // the null and the non-object
  assert.equal(counterBankedConsistent(null), false)
  assert.equal(counterBankedConsistent(undefined), false)
  assert.equal(counterBankedConsistent(42), false)
  assert.equal(counterBankedConsistent([good]), false)
  // the missing face
  assert.equal(counterBankedConsistent({ back: good.back, prev: good.prev }), false)
  assert.equal(counterBankedConsistent({ back: null, prev: good.prev, cur: good.cur }), false)
  // the non-integer and the negative cell
  assert.equal(counterBankedConsistent({ back: { banked: 1.5 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterBankedConsistent({ back: { banked: -1 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterBankedConsistent({ back: { banked: NaN }, prev: good.prev, cur: good.cur }), false)
  // extra keys never rejected
  assert.equal(counterBankedConsistent({ ...good, junk: 'rides' }), true)
  // the zero cells ride - the zero lawful
  assert.equal(counterBankedConsistent({ back: { banked: 0 }, prev: { banked: 0 }, cur: { banked: 0 } }), true)
})

test('the shapes byte-exact - the REAL eight windows all speak', () => {
  const TAIL = "(the smelted word's row keeps the furnace seat and rides the banked hand as its own side-car (the .269 word - the deposit hand the furnace row holds, the rider never the priced voice), the planted word's row keeps the farm seat (the .274 word - its grammar anchors the banked cell's bytes in the head chain, its census never prices them), the alive word's row keeps the survival seat (the .275 word - the finalbody census's own beside lane the face ends beside), the climbs word's row keeps the scaffold seat (the .270 word), the torched word's row keeps the torch seat (the .261 word), the tools word's row keeps the repair seat (the .271 word), the wet word's row keeps the hazard seat (the .272 word), the fights word's row keeps the combat seat (the .273 word), the bankcensus module keeps the loot line's own banked/smelted seats, the bankedreceipttrend word keeps the deposit receipt's own lane (the v0.976.223 seat), the bankdocket and bankdrain modules keep the final bank's own lane, the maptrip module keeps the trip lane's own parse, the pocketline census keeps the within-face seat, the fuelbank module keeps the fuel lane - the bank mass's row alone, co-existence by seat never by duplication)"
  const w = (a, b, c) => ({ back: counterBankedCensus([a]), prev: counterBankedCensus([b]), cur: counterBankedCensus([c]) })
  // the W478-479-480 swing - the real window byte-exact
  assert.equal(counterBankedTrendRow(w(F478, F479, F480)), "the counters banked trend (v0.976.276): the bank weather's own swing - 1104 -> 313 (-791) -> 1588 (+1275) - the fade and the swell traded seats between the faces " + TAIL)
  // the W479-480-481 swing - the real window byte-exact
  assert.equal(counterBankedTrendRow(w(F479, F480, F481)), "the counters banked trend (v0.976.276): the bank weather's own swing - 313 -> 1588 (+1275) -> 1511 (-77) - the fade and the swell traded seats between the faces " + TAIL)
  // the W480-481-482 fade - the real window byte-exact
  assert.equal(counterBankedTrendRow(w(F480, F481, F482)), "the counters banked trend (v0.976.276): the bank weather's own fade ran two steps deep - 1588 -> 1511 (-77) -> 14 (-1497) - the bank mass's own fade " + TAIL)
  // the W481-482-483 swing - the real window byte-exact
  assert.equal(counterBankedTrendRow(w(F481, F482, F483)), "the counters banked trend (v0.976.276): the bank weather's own swing - 1511 -> 14 (-1497) -> 1038 (+1024) - the fade and the swell traded seats between the faces " + TAIL)
  // the W482-483-484 swing - the real window byte-exact
  assert.equal(counterBankedTrendRow(w(F482, F483, F484)), "the counters banked trend (v0.976.276): the bank weather's own swing - 14 -> 1038 (+1024) -> 455 (-583) - the fade and the swell traded seats between the faces " + TAIL)
  // the W483-484-485 swing - the real window byte-exact
  assert.equal(counterBankedTrendRow(w(F483, F484, F485)), "the counters banked trend (v0.976.276): the bank weather's own swing - 1038 -> 455 (-583) -> 470 (+15) - the fade and the swell traded seats between the faces " + TAIL)
  // the W484-485-486 swing - the real window byte-exact
  assert.equal(counterBankedTrendRow(w(F484, F485, F486)), "the counters banked trend (v0.976.276): the bank weather's own swing - 455 -> 470 (+15) -> 399 (-71) - the fade and the swell traded seats between the faces " + TAIL)
  // the W485-486-487 fade - the real window byte-exact (the bank emptied)
  assert.equal(counterBankedTrendRow(w(F485, F486, F487)), "the counters banked trend (v0.976.276): the bank weather's own fade ran two steps deep - 470 -> 399 (-71) -> 0 (-399) - the bank mass's own fade " + TAIL)
  // the swell shape - the synthetic byte-exact
  const swell = { back: { banked: 14 }, prev: { banked: 1038 }, cur: { banked: 1511 } }
  assert.match(counterBankedTrendRow(swell), /^the counters banked trend \(v0\.976\.276\): the bank weather's own swell ran two steps deep - 14 -> 1038 \(\+1024\) -> 1511 \(\+473\)/)
  // the held step - the honest silence
  const held = { back: { banked: 5 }, prev: { banked: 5 }, cur: { banked: 9 } }
  assert.equal(counterBankedTrendRow(held), null)
  // the three-face zero - the lawful silence (the bank never held)
  const zeros = { back: { banked: 0 }, prev: { banked: 0 }, cur: { banked: 0 } }
  assert.equal(counterBankedTrendRow(zeros), null)
  // the fence fails - the null (the missing banked cell never rides)
  assert.equal(counterBankedTrendRow(null), null)
  assert.equal(counterBankedTrendRow({ back: { planted: 1 }, prev: { banked: 2 }, cur: { banked: 3 } }), null)
})
