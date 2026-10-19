/**
 * counterfightstrend.test.mjs - (v0.976.273) THE COUNTERS FIGHTS CELL'S
 * OWN COMBAT MASS - the counters line's own fights cell the word
 * prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the six fleet faces'
 * own counters lines):
 *   F478: '... torched=2 fights=9 kills=4 shelters=0 rescues=16 ...'
 *   F479: '... torched=1 fights=3 kills=2 shelters=0 rescues=32 ...'
 *   F480: '... torched=19 fights=2 kills=1 shelters=0 rescues=28 ...'
 *   F481: '... torched=8 fights=23 kills=1 shelters=0 rescues=37 ...'
 *   F482: '... torched=12 fights=19 kills=5 shelters=1 rescues=30 ...'
 *   F483: '... torched=4 fights=2 kills=0 shelters=0 rescues=40 ...'
 * the six-face arc 9 -> 3 -> 2 -> 23 -> 19 -> 2 no row read - the
 * word takes the seat, the pins ride the faces byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterFightsCensus, counterFightsConsistent, counterFightsTrendRow } from '../../src/lib/counterfightstrend.mjs'

// the REAL face lines byte-exact (the counters lines' own heads)
const F478 = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'
const F481 = 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 recovered=3 reboots=0 upgraded=12 swords=19 alive=19 climbs=34 banked=1511 smelted=58 planted=13 torched=8 fights=23 kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 airGlitches=0 claims=19 claimedHolds=0 wet=3 wt=2'
const F482 = 'bots=19 spawned=19 reconnects=23 kicks=9 tools=18 recovered=2 reboots=1 upgraded=15 swords=17 alive=19 climbs=14 banked=14 smelted=2 planted=13 torched=12 fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0 airGlitches=821 claims=15 claimedHolds=0 wet=3 wt=1'
const F483 = 'bots=19 spawned=19 reconnects=7 kicks=2 tools=17 recovered=3 reboots=0 upgraded=12 swords=17 alive=19 climbs=32 banked=1038 smelted=21 planted=9 torched=4 fights=2 kills=0 shelters=0 rescues=40 pounces=0 pounceLanded=0 airGlitches=232 claims=23 claimedHolds=0 wet=12 wt=2'

test('the REAL faces byte-exact - the census rides all six counters lines', () => {
  assert.deepEqual(counterFightsCensus([F478]), { fights: 9, shelters: 0 })
  assert.deepEqual(counterFightsCensus([F479]), { fights: 3, shelters: 0 })
  assert.deepEqual(counterFightsCensus([F480]), { fights: 2, shelters: 0 })
  assert.deepEqual(counterFightsCensus([F481]), { fights: 23, shelters: 0 })
  assert.deepEqual(counterFightsCensus([F482]), { fights: 19, shelters: 1 })
  assert.deepEqual(counterFightsCensus([F483]), { fights: 2, shelters: 0 })
  // the six lines in one face - LAST-PRINT-WINS, the last print rides
  assert.deepEqual(counterFightsCensus([F478, F479, F480, F481, F482, F483]), { fights: 2, shelters: 0 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(counterFightsCensus(null), null)
  assert.equal(counterFightsCensus(undefined), null)
  assert.equal(counterFightsCensus('bots=19 fights=9'), null)
  assert.equal(counterFightsCensus(42), null)
  // junk lines - the lawful zero (the never-counted face)
  assert.deepEqual(counterFightsCensus([]), { fights: 0, shelters: 0 })
  assert.deepEqual(counterFightsCensus(['total chaos, no counters here']), { fights: 0, shelters: 0 })
  assert.deepEqual(counterFightsCensus([null, 42, 'junk', F478]), { fights: 9, shelters: 0 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  // the fused tail - the cell ends at whitespace or line end, never mid-token
  const fused = F478.replace('fights=9 kills=4', 'fights=9kills=4')
  assert.deepEqual(counterFightsCensus([fused]), { fights: 0, shelters: 0 })
  // the side-car fused tail - the same boundary the shelters cell holds
  const scFused = F478.replace('kills=4 shelters=0', 'kills=4shelters=0')
  assert.deepEqual(counterFightsCensus([scFused]), { fights: 0, shelters: 0 })
  // the leading zero - the .248 house law
  const leading = F478.replace('fights=9 ', 'fights=09 ')
  assert.deepEqual(counterFightsCensus([leading]), { fights: 0, shelters: 0 })
  // the side-car leading zero - the proven pair the grammar holds
  const scLeading = F478.replace('shelters=0 rescues=16', 'shelters=00 rescues=16')
  assert.deepEqual(counterFightsCensus([scLeading]), { fights: 0, shelters: 0 })
  // the negative count
  const negative = F478.replace('fights=9 ', 'fights=-9 ')
  assert.deepEqual(counterFightsCensus([negative]), { fights: 0, shelters: 0 })
  // the pretty spacing - the emitter's own template order byte-exact
  const pretty = F478.replace('fights=9 kills=4', 'fights=9  kills=4')
  assert.deepEqual(counterFightsCensus([pretty]), { fights: 0, shelters: 0 })
  // the altered order - the head chain's own template
  const altered = F478.replace('fights=9 kills=4', 'kills=4 fights=9')
  assert.deepEqual(counterFightsCensus([altered]), { fights: 0, shelters: 0 })
  // the truncated head - the 'bots=' anchor rides whole
  const truncated = F478.replace('bots=19 spawned=19', 'bots=19')
  assert.deepEqual(counterFightsCensus([truncated]), { fights: 0, shelters: 0 })
  // the bot-tagged prefix - one emitter one shape
  const tagged = '[bot-7] ' + F478
  assert.deepEqual(counterFightsCensus([tagged]), { fights: 0, shelters: 0 })
  // the bare cell without the frame
  assert.deepEqual(counterFightsCensus(['fights=9']), { fights: 0, shelters: 0 })
  // the zero shelters cell itself rides - the zero lawful
  assert.deepEqual(counterFightsCensus([F478]), { fights: 9, shelters: 0 })
})

test('the fence - every branch the fold proves', () => {
  const good = { back: { fights: 9, shelters: 0 }, prev: { fights: 3, shelters: 0 }, cur: { fights: 2, shelters: 0 } }
  assert.equal(counterFightsConsistent(good), true)
  // the null and the non-object
  assert.equal(counterFightsConsistent(null), false)
  assert.equal(counterFightsConsistent(undefined), false)
  assert.equal(counterFightsConsistent(42), false)
  assert.equal(counterFightsConsistent([good]), false)
  // the missing face
  assert.equal(counterFightsConsistent({ back: good.back, prev: good.prev }), false)
  assert.equal(counterFightsConsistent({ back: null, prev: good.prev, cur: good.cur }), false)
  // the non-integer and the negative cell
  assert.equal(counterFightsConsistent({ back: { fights: 1.5, shelters: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterFightsConsistent({ back: { fights: -1, shelters: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterFightsConsistent({ back: { fights: 0, shelters: NaN }, prev: good.prev, cur: good.cur }), false)
  // extra keys never rejected
  assert.equal(counterFightsConsistent({ ...good, junk: 'rides' }), true)
  // the zero cells ride - the zero lawful
  assert.equal(counterFightsConsistent({ back: { fights: 0, shelters: 0 }, prev: { fights: 0, shelters: 0 }, cur: { fights: 0, shelters: 0 } }), true)
})

test('the shapes byte-exact - the REAL four windows all speak', () => {
  const TAIL = "(the pounce book keeps the pounce cells' own combat seat (the .264 word), the kills word's row keeps the kill tally's own seat (the .265 word), the rescues word's row keeps the rescue lane (the .266 word), the smelted word's row keeps the furnace seat (the .269 word), the tools word's row keeps the repair seat (the .271 word), the wet word's row keeps the hazard seat (the .272 word) - the combat mass's row alone, co-existence by seat never by duplication)"
  const w478479480 = { back: counterFightsCensus([F478]), prev: counterFightsCensus([F479]), cur: counterFightsCensus([F480]) }
  const w479480481 = { back: counterFightsCensus([F479]), prev: counterFightsCensus([F480]), cur: counterFightsCensus([F481]) }
  const w480481482 = { back: counterFightsCensus([F480]), prev: counterFightsCensus([F481]), cur: counterFightsCensus([F482]) }
  const w481482483 = { back: counterFightsCensus([F481]), prev: counterFightsCensus([F482]), cur: counterFightsCensus([F483]) }
  // the W478-479-480 fade - the real window byte-exact
  assert.equal(counterFightsTrendRow(w478479480), "the counters fights trend (v0.976.273): the combat weather's own fade ran two steps deep - 9 -> 3 (-6) -> 2 (-1) - the combat mass's own fade, the shelters rode 0 -> 0 -> 0 " + TAIL)
  // the W479-480-481 swing - the real window byte-exact
  assert.equal(counterFightsTrendRow(w479480481), "the counters fights trend (v0.976.273): the combat weather's own swing - 3 -> 2 (-1) -> 23 (+21) - the fade and the swell traded seats between the faces, the shelters rode 0 -> 0 -> 0 " + TAIL)
  // the W480-481-482 swing - the real window byte-exact
  assert.equal(counterFightsTrendRow(w480481482), "the counters fights trend (v0.976.273): the combat weather's own swing - 2 -> 23 (+21) -> 19 (-4) - the fade and the swell traded seats between the faces, the shelters rode 0 -> 0 -> 1 " + TAIL)
  // the W481-482-483 fade - the real window byte-exact
  assert.equal(counterFightsTrendRow(w481482483), "the counters fights trend (v0.976.273): the combat weather's own fade ran two steps deep - 23 -> 19 (-4) -> 2 (-17) - the combat mass's own fade, the shelters rode 0 -> 1 -> 0 " + TAIL)
  // the swell shape - the synthetic byte-exact
  const swell = { back: { fights: 5, shelters: 1 }, prev: { fights: 9, shelters: 1 }, cur: { fights: 12, shelters: 1 } }
  assert.match(counterFightsTrendRow(swell), /^the counters fights trend \(v0\.976\.273\): the combat weather's own swell ran two steps deep - 5 -> 9 \(\+4\) -> 12 \(\+3\)/)
  // the held step - the honest silence
  const held = { back: { fights: 5, shelters: 1 }, prev: { fights: 5, shelters: 1 }, cur: { fights: 9, shelters: 1 } }
  assert.equal(counterFightsTrendRow(held), null)
  // the three-face zero - the lawful silence
  const zeros = { back: { fights: 0, shelters: 0 }, prev: { fights: 0, shelters: 0 }, cur: { fights: 0, shelters: 0 } }
  assert.equal(counterFightsTrendRow(zeros), null)
  // the fence fails - the null
  assert.equal(counterFightsTrendRow(null), null)
  assert.equal(counterFightsTrendRow({ back: { fights: 1 }, prev: { fights: 2 }, cur: { fights: 3 } }), null)
})
