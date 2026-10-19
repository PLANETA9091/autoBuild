/**
 * counterclimbstrend.test.mjs - (v0.976.270) THE COUNTERS CLIMB
 * CELL'S OWN SCAFFOLD MASS - the counters line's own climbs cell the
 * word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the six fleet faces'
 * own counters lines):
 *   F478: '... alive=19 climbs=34 banked=1104 ...'
 *   F479: '... climbs=24 banked=313 ...'
 *   F480: '... climbs=34 banked=1588 ...'
 *   F481: '... climbs=34 banked=1511 ...'
 *   F482: '... climbs=14 banked=14 ...'
 *   F483: '... climbs=32 banked=1038 ...' (run 39200742905)
 * the six-face arc 34 -> 24 -> 34 -> 34 -> 14 -> 32 no row read - the
 * word takes the seat, the pins ride the faces byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterClimbCensus, counterClimbConsistent, counterClimbTrendRow } from '../../src/lib/counterclimbstrend.mjs'

// the REAL face lines byte-exact (the counters lines' own heads)
const F478 = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'
const F481 = 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 recovered=3 reboots=0 upgraded=12 swords=19 alive=19 climbs=34 banked=1511 smelted=58 planted=13 torched=8 fights=23 kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 airGlitches=0 claims=19 claimedHolds=0 wet=3 wt=2'
const F482 = 'bots=19 spawned=19 reconnects=23 kicks=9 tools=18 recovered=2 reboots=1 upgraded=15 swords=17 alive=19 climbs=14 banked=14 smelted=2 planted=13 torched=12 fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0 airGlitches=821 claims=15 claimedHolds=0 wet=3 wt=1'
const F483 = 'bots=19 spawned=19 reconnects=7 kicks=2 tools=17 recovered=3 reboots=0 upgraded=12 swords=17 alive=19 climbs=32 banked=1038 smelted=21 planted=9 torched=4 fights=2 kills=0 shelters=0 rescues=40 pounces=0 pounceLanded=0 airGlitches=232 claims=23 claimedHolds=0 wet=12 wt=2'

const TAIL = "(the smelted word's row keeps the smelted cell's seat (the .269 word, the banked arc its side-car), the upgraded word's row keeps the upgraded cell's seat (the .267 word, the reboots arc its side-car), the reconnect word's row keeps the reconnects cell's seat (the .268 word), the finalbody census keeps the body's bots/alive seat (its grammar anchors the climbs cell's bytes, its census never prices them), the bankcensus module keeps the loot line's own banked/smelted seats, the doom ledger keeps the failed climb cycles' own prose lane (the final bank's own verdict, a different emitter), the surface module keeps the runtime climb hand - the climb mass's row alone, co-existence by seat never by duplication)"

test('the REAL faces byte-exact - the census rides all six counters lines', () => {
  assert.deepEqual(counterClimbCensus([F478]), { climbs: 34, swords: 20 })
  assert.deepEqual(counterClimbCensus([F479]), { climbs: 24, swords: 18 })
  assert.deepEqual(counterClimbCensus([F480]), { climbs: 34, swords: 19 })
  assert.deepEqual(counterClimbCensus([F481]), { climbs: 34, swords: 19 })
  assert.deepEqual(counterClimbCensus([F482]), { climbs: 14, swords: 17 })
  assert.deepEqual(counterClimbCensus([F483]), { climbs: 32, swords: 17 })
  // the six lines in one face - LAST-PRINT-WINS, the last print rides
  assert.deepEqual(counterClimbCensus([F478, F479, F480, F481, F482, F483]), { climbs: 32, swords: 17 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(counterClimbCensus(null), null)
  assert.equal(counterClimbCensus(undefined), null)
  assert.equal(counterClimbCensus('bots=19 climbs=34'), null)
  assert.equal(counterClimbCensus(42), null)
  // junk lines - the lawful zero (the never-counted face)
  assert.deepEqual(counterClimbCensus([]), { climbs: 0, swords: 0 })
  assert.deepEqual(counterClimbCensus(['total chaos, no counters here']), { climbs: 0, swords: 0 })
  assert.deepEqual(counterClimbCensus([null, 42, 'junk', F483]), { climbs: 32, swords: 17 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  // the fused tail - the cell ends at whitespace or line end, never mid-token
  const fused = F483.replace('climbs=32 banked=1038', 'climbs=32banked=1038')
  assert.deepEqual(counterClimbCensus([fused]), { climbs: 0, swords: 0 })
  // the leading zero - the .248 house law
  const leading = F478.replace('climbs=34 ', 'climbs=034 ')
  assert.deepEqual(counterClimbCensus([leading]), { climbs: 0, swords: 0 })
  // the negative count
  const negative = F478.replace('climbs=34 ', 'climbs=-34 ')
  assert.deepEqual(counterClimbCensus([negative]), { climbs: 0, swords: 0 })
  // the pretty spacing - the emitter's own template order byte-exact
  const pretty = F478.replace('alive=19 climbs=34', 'alive=19  climbs=34')
  assert.deepEqual(counterClimbCensus([pretty]), { climbs: 0, swords: 0 })
  // the altered order - the head chain's own template
  const altered = F478.replace('alive=19 climbs=34', 'climbs=34 alive=19')
  assert.deepEqual(counterClimbCensus([altered]), { climbs: 0, swords: 0 })
  // the truncated head - the 'bots=' anchor rides whole
  const truncated = F478.replace('bots=19 spawned=19', 'bots=19')
  assert.deepEqual(counterClimbCensus([truncated]), { climbs: 0, swords: 0 })
  // the bot-tagged prefix - one emitter one shape
  const tagged = '[bot-3] ' + F478
  assert.deepEqual(counterClimbCensus([tagged]), { climbs: 0, swords: 0 })
  // the bare cell without the frame
  assert.deepEqual(counterClimbCensus(['climbs=34']), { climbs: 0, swords: 0 })
  // the zero climbs cell itself rides - the zero lawful
  const zeroed = F483.replace('climbs=32 ', 'climbs=0 ')
  assert.deepEqual(counterClimbCensus([zeroed]), { climbs: 0, swords: 17 })
  // the side-car leading zero rides - the unpriced chain cell's own law
  const sideZero = F483.replace('swords=17 alive=19', 'swords=017 alive=19')
  assert.deepEqual(counterClimbCensus([sideZero]), { climbs: 32, swords: 17 })
})

test('the fence - every branch the fold proves', () => {
  const good = { back: { climbs: 34, swords: 20 }, prev: { climbs: 24, swords: 18 }, cur: { climbs: 34, swords: 19 } }
  assert.equal(counterClimbConsistent(good), true)
  // the null and the non-object
  assert.equal(counterClimbConsistent(null), false)
  assert.equal(counterClimbConsistent(undefined), false)
  assert.equal(counterClimbConsistent(42), false)
  assert.equal(counterClimbConsistent([good]), false)
  // the missing face
  assert.equal(counterClimbConsistent({ back: good.back, prev: good.prev }), false)
  assert.equal(counterClimbConsistent({ back: null, prev: good.prev, cur: good.cur }), false)
  // the non-integer and the negative cell
  assert.equal(counterClimbConsistent({ back: { climbs: 1.5, swords: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterClimbConsistent({ back: { climbs: -1, swords: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterClimbConsistent({ back: { climbs: 0, swords: NaN }, prev: good.prev, cur: good.cur }), false)
  // extra keys never rejected
  assert.equal(counterClimbConsistent({ ...good, junk: 'rides' }), true)
  // the zero cells ride - the zero lawful
  assert.equal(counterClimbConsistent({ back: { climbs: 0, swords: 0 }, prev: { climbs: 0, swords: 0 }, cur: { climbs: 0, swords: 0 } }), true)
})

test('the shapes byte-exact - the REAL windows priced and the honest silences', () => {
  const w478479480 = { back: counterClimbCensus([F478]), prev: counterClimbCensus([F479]), cur: counterClimbCensus([F480]) }
  const w479480481 = { back: counterClimbCensus([F479]), prev: counterClimbCensus([F480]), cur: counterClimbCensus([F481]) }
  const w480481482 = { back: counterClimbCensus([F480]), prev: counterClimbCensus([F481]), cur: counterClimbCensus([F482]) }
  const w481482483 = { back: counterClimbCensus([F481]), prev: counterClimbCensus([F482]), cur: counterClimbCensus([F483]) }
  // the W478-479-480 swing - the real window byte-exact
  assert.equal(counterClimbTrendRow(w478479480), "the counters climb trend (v0.976.270): the climb weather's own swing - 34 -> 24 (-10) -> 34 (+10) - the fade and the swell traded seats between the faces, the swords rode 20 -> 18 -> 19 " + TAIL)
  // the W481-482-483 swing - the real window byte-exact
  assert.equal(counterClimbTrendRow(w481482483), "the counters climb trend (v0.976.270): the climb weather's own swing - 34 -> 14 (-20) -> 32 (+18) - the fade and the swell traded seats between the faces, the swords rode 19 -> 17 -> 17 " + TAIL)
  // the W479-480-481 held second step - the honest silence (the family's own held law)
  assert.equal(counterClimbTrendRow(w479480481), null)
  // the W480-481-482 held first step - the honest silence
  assert.equal(counterClimbTrendRow(w480481482), null)
  // the fade shape - the synthetic byte-exact
  const fade = { back: { climbs: 9, swords: 5 }, prev: { climbs: 5, swords: 5 }, cur: { climbs: 1, swords: 5 } }
  assert.match(counterClimbTrendRow(fade), /^the counters climb trend \(v0\.976\.270\): the climb weather's own fade ran two steps deep - 9 -> 5 \(-4\) -> 1 \(-4\)/)
  // the swell shape - the synthetic byte-exact
  const swell = { back: { climbs: 1, swords: 5 }, prev: { climbs: 5, swords: 5 }, cur: { climbs: 9, swords: 5 } }
  assert.match(counterClimbTrendRow(swell), /^the counters climb trend \(v0\.976\.270\): the climb weather's own swell ran two steps deep - 1 -> 5 \(\+4\) -> 9 \(\+4\)/)
  // the three-face zero - the lawful silence
  const zeros = { back: { climbs: 0, swords: 0 }, prev: { climbs: 0, swords: 0 }, cur: { climbs: 0, swords: 0 } }
  assert.equal(counterClimbTrendRow(zeros), null)
  // the fence fails - the null
  assert.equal(counterClimbTrendRow(null), null)
  assert.equal(counterClimbTrendRow({ back: { climbs: 1 }, prev: { climbs: 2 }, cur: { climbs: 3 } }), null)
})
