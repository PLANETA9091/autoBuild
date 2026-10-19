/**
 * countersmeltedtrend.test.mjs - (v0.976.269) THE COUNTERS SMELTED
 * CELL'S OWN FURNACE MASS - the counters line's own smelted cell the
 * word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the five fleet faces'
 * own counters lines):
 *   F478: '... climbs=34 banked=1104 smelted=25 planted=10 ...'
 *   F479: '... climbs=24 banked=313 smelted=4 planted=11 ...'
 *   F480: '... climbs=34 banked=1588 smelted=37 planted=11 ...'
 *   F481: '... climbs=34 banked=1511 smelted=58 planted=13 ...'
 *   F482: '... climbs=14 banked=14 smelted=2 planted=13 ...'
 * the five-face arc 25 -> 4 -> 37 -> 58 -> 2 no row read - the word
 * takes the seat, the pins ride the faces byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterSmeltedCensus, counterSmeltedConsistent, counterSmeltedTrendRow } from '../../src/lib/countersmeltedtrend.mjs'

// the REAL face lines byte-exact (the counters lines' own heads)
const F478 = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'
const F481 = 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 recovered=3 reboots=0 upgraded=12 swords=19 alive=19 climbs=34 banked=1511 smelted=58 planted=13 torched=8 fights=23 kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 airGlitches=0 claims=19 claimedHolds=0 wet=3 wt=2'
const F482 = 'bots=19 spawned=19 reconnects=23 kicks=9 tools=18 recovered=2 reboots=1 upgraded=15 swords=17 alive=19 climbs=14 banked=14 smelted=2 planted=13 torched=12 fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0 airGlitches=821 claims=15 claimedHolds=0 wet=3 wt=1'

test('the REAL faces byte-exact - the census rides all five counters lines', () => {
  assert.deepEqual(counterSmeltedCensus([F478]), { smelted: 25, banked: 1104 })
  assert.deepEqual(counterSmeltedCensus([F479]), { smelted: 4, banked: 313 })
  assert.deepEqual(counterSmeltedCensus([F480]), { smelted: 37, banked: 1588 })
  assert.deepEqual(counterSmeltedCensus([F481]), { smelted: 58, banked: 1511 })
  assert.deepEqual(counterSmeltedCensus([F482]), { smelted: 2, banked: 14 })
  // the five lines in one face - LAST-PRINT-WINS, the last print rides
  assert.deepEqual(counterSmeltedCensus([F478, F479, F480, F481, F482]), { smelted: 2, banked: 14 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(counterSmeltedCensus(null), null)
  assert.equal(counterSmeltedCensus(undefined), null)
  assert.equal(counterSmeltedCensus('bots=19 smelted=25'), null)
  assert.equal(counterSmeltedCensus(42), null)
  // junk lines - the lawful zero (the never-counted face)
  assert.deepEqual(counterSmeltedCensus([]), { smelted: 0, banked: 0 })
  assert.deepEqual(counterSmeltedCensus(['total chaos, no counters here']), { smelted: 0, banked: 0 })
  assert.deepEqual(counterSmeltedCensus([null, 42, 'junk', F478]), { smelted: 25, banked: 1104 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  // the fused tail - the cell ends at whitespace or line end, never mid-token
  const fused = F482.replace('smelted=2 planted=13', 'smelted=2planted=13')
  assert.deepEqual(counterSmeltedCensus([fused]), { smelted: 0, banked: 0 })
  // the leading zero - the .248 house law
  const leading = F478.replace('smelted=25 ', 'smelted=025 ')
  assert.deepEqual(counterSmeltedCensus([leading]), { smelted: 0, banked: 0 })
  // the negative count
  const negative = F478.replace('smelted=25 ', 'smelted=-25 ')
  assert.deepEqual(counterSmeltedCensus([negative]), { smelted: 0, banked: 0 })
  // the pretty spacing - the emitter's own template order byte-exact
  const pretty = F478.replace('banked=1104 smelted=25', 'banked=1104  smelted=25')
  assert.deepEqual(counterSmeltedCensus([pretty]), { smelted: 0, banked: 0 })
  // the altered order - the head chain's own template
  const altered = F478.replace('smelted=25 planted=10', 'planted=10 smelted=25')
  assert.deepEqual(counterSmeltedCensus([altered]), { smelted: 0, banked: 0 })
  // the truncated head - the 'bots=' anchor rides whole
  const truncated = F478.replace('bots=19 spawned=19', 'bots=19')
  assert.deepEqual(counterSmeltedCensus([truncated]), { smelted: 0, banked: 0 })
  // the bot-tagged prefix - one emitter one shape
  const tagged = '[bot-3] ' + F478
  assert.deepEqual(counterSmeltedCensus([tagged]), { smelted: 0, banked: 0 })
  // the bare cell without the frame
  assert.deepEqual(counterSmeltedCensus(['smelted=25']), { smelted: 0, banked: 0 })
  // the zero smelted cell itself rides - the zero lawful
  const zeroed = F479.replace('smelted=4 ', 'smelted=0 ')
  assert.deepEqual(counterSmeltedCensus([zeroed]), { smelted: 0, banked: 313 })
})

test('the fence - every branch the fold proves', () => {
  const good = { back: { smelted: 25, banked: 1104 }, prev: { smelted: 4, banked: 313 }, cur: { smelted: 37, banked: 1588 } }
  assert.equal(counterSmeltedConsistent(good), true)
  // the null and the non-object
  assert.equal(counterSmeltedConsistent(null), false)
  assert.equal(counterSmeltedConsistent(undefined), false)
  assert.equal(counterSmeltedConsistent(42), false)
  assert.equal(counterSmeltedConsistent([good]), false)
  // the missing face
  assert.equal(counterSmeltedConsistent({ back: good.back, prev: good.prev }), false)
  assert.equal(counterSmeltedConsistent({ back: null, prev: good.prev, cur: good.cur }), false)
  // the non-integer and the negative cell
  assert.equal(counterSmeltedConsistent({ back: { smelted: 1.5, banked: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterSmeltedConsistent({ back: { smelted: -1, banked: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterSmeltedConsistent({ back: { smelted: 0, banked: NaN }, prev: good.prev, cur: good.cur }), false)
  // extra keys never rejected
  assert.equal(counterSmeltedConsistent({ ...good, junk: 'rides' }), true)
  // the zero cells ride - the zero lawful
  assert.equal(counterSmeltedConsistent({ back: { smelted: 0, banked: 0 }, prev: { smelted: 0, banked: 0 }, cur: { smelted: 0, banked: 0 } }), true)
})

test('the shapes byte-exact - the REAL three windows all speak', () => {
  const w478479480 = { back: counterSmeltedCensus([F478]), prev: counterSmeltedCensus([F479]), cur: counterSmeltedCensus([F480]) }
  const w479480481 = { back: counterSmeltedCensus([F479]), prev: counterSmeltedCensus([F480]), cur: counterSmeltedCensus([F481]) }
  const w480481482 = { back: counterSmeltedCensus([F480]), prev: counterSmeltedCensus([F481]), cur: counterSmeltedCensus([F482]) }
  // the W478-479-480 swing - the real window byte-exact
  assert.equal(counterSmeltedTrendRow(w478479480), "the counters smelt trend (v0.976.269): the furnace weather's own swing - 25 -> 4 (-21) -> 37 (+33) - the fade and the swell traded seats between the faces, the banked rode 1104 -> 313 -> 1588 (the bankcensus module keeps the loot line's own banked/smelted seats, the maptrip module keeps the trip lane's own parse, the pocketline census keeps the within-face seat, the fuelbank module keeps the fuel lane, the reconnect word's row keeps the kicks side-car's seat (the .268 word) - the furnace mass's row alone, co-existence by seat never by duplication)")
  // the W479-480-481 swell - the real window byte-exact
  assert.equal(counterSmeltedTrendRow(w479480481), "the counters smelt trend (v0.976.269): the furnace weather's own swell ran two steps deep - 4 -> 37 (+33) -> 58 (+21) - the furnace mass's own swell, the banked rode 313 -> 1588 -> 1511 (the bankcensus module keeps the loot line's own banked/smelted seats, the maptrip module keeps the trip lane's own parse, the pocketline census keeps the within-face seat, the fuelbank module keeps the fuel lane, the reconnect word's row keeps the kicks side-car's seat (the .268 word) - the furnace mass's row alone, co-existence by seat never by duplication)")
  // the W480-481-482 swing - the real window byte-exact
  assert.equal(counterSmeltedTrendRow(w480481482), "the counters smelt trend (v0.976.269): the furnace weather's own swing - 37 -> 58 (+21) -> 2 (-56) - the fade and the swell traded seats between the faces, the banked rode 1588 -> 1511 -> 14 (the bankcensus module keeps the loot line's own banked/smelted seats, the maptrip module keeps the trip lane's own parse, the pocketline census keeps the within-face seat, the fuelbank module keeps the fuel lane, the reconnect word's row keeps the kicks side-car's seat (the .268 word) - the furnace mass's row alone, co-existence by seat never by duplication)")
  // the fade shape - the synthetic byte-exact
  const fade = { back: { smelted: 9, banked: 5 }, prev: { smelted: 5, banked: 5 }, cur: { smelted: 1, banked: 5 } }
  assert.match(counterSmeltedTrendRow(fade), /^the counters smelt trend \(v0\.976\.269\): the furnace weather's own fade ran two steps deep - 9 -> 5 \(-4\) -> 1 \(-4\)/)
  // the held step - the honest silence
  const held = { back: { smelted: 5, banked: 5 }, prev: { smelted: 5, banked: 5 }, cur: { smelted: 9, banked: 5 } }
  assert.equal(counterSmeltedTrendRow(held), null)
  // the three-face zero - the lawful silence
  const zeros = { back: { smelted: 0, banked: 0 }, prev: { smelted: 0, banked: 0 }, cur: { smelted: 0, banked: 0 } }
  assert.equal(counterSmeltedTrendRow(zeros), null)
  // the fence fails - the null
  assert.equal(counterSmeltedTrendRow(null), null)
  assert.equal(counterSmeltedTrendRow({ back: { smelted: 1 }, prev: { smelted: 2 }, cur: { smelted: 3 } }), null)
})
