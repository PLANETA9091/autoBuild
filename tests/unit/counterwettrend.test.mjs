/**
 * counterwettrend.test.mjs - (v0.976.272) THE COUNTERS WET CELL'S OWN
 * HAZARD MASS - the counters line's own wet cell the word prices,
 * pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the eight fleet faces'
 * own counters lines):
 *   F478: '... claimedHolds=0 wet=2 wt=2'
 *   F479: '... wet=3 wt=2'
 *   F480: '... wet=7 wt=2'
 *   F481: '... wet=3 wt=2'
 *   F482: '... wet=3 wt=1'
 *   F483: '... wet=12 wt=2' (run 39200742905)
 *   F484: '... wet=5 wt=2' (run 39206031566)
 *   F485: '... wet=12 wt=2' (run 39208857636)
 * the eight-face arc 2 -> 3 -> 7 -> 3 -> 3 -> 12 -> 5 -> 12 no row
 * read - the word takes the seat, the pins ride the faces byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterWetCensus, counterWetConsistent, counterWetTrendRow } from '../../src/lib/counterwettrend.mjs'

// the REAL face lines byte-exact (the counters lines' own heads)
const F478 = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'
const F481 = 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 recovered=3 reboots=0 upgraded=12 swords=19 alive=19 climbs=34 banked=1511 smelted=58 planted=13 torched=8 fights=23 kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 airGlitches=0 claims=19 claimedHolds=0 wet=3 wt=2'
const F482 = 'bots=19 spawned=19 reconnects=23 kicks=9 tools=18 recovered=2 reboots=1 upgraded=15 swords=17 alive=19 climbs=14 banked=14 smelted=2 planted=13 torched=12 fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0 airGlitches=821 claims=15 claimedHolds=0 wet=3 wt=1'
const F483 = 'bots=19 spawned=19 reconnects=7 kicks=2 tools=17 recovered=3 reboots=0 upgraded=12 swords=17 alive=19 climbs=32 banked=1038 smelted=21 planted=9 torched=4 fights=2 kills=0 shelters=0 rescues=40 pounces=0 pounceLanded=0 airGlitches=232 claims=23 claimedHolds=0 wet=12 wt=2'
const F484 = 'bots=19 spawned=19 reconnects=8 kicks=0 tools=19 recovered=0 reboots=0 upgraded=13 swords=16 alive=19 climbs=24 banked=455 smelted=14 planted=10 torched=5 fights=13 kills=5 shelters=0 rescues=41 pounces=1 pounceLanded=0 airGlitches=0 claims=16 claimedHolds=0 wet=5 wt=2'
const F485 = 'bots=19 spawned=19 reconnects=13 kicks=6 tools=18 recovered=2 reboots=1 upgraded=12 swords=16 alive=19 climbs=30 banked=470 smelted=1 planted=7 torched=2 fights=40 kills=7 shelters=2 rescues=36 pounces=2 pounceLanded=0 airGlitches=945 claims=21 claimedHolds=0 wet=12 wt=2'

const TAIL = "(the samecellwettrend word keeps the repeat-wet standdown's own lane (the v0.976.70 seat - a different mass the mid-event lines price), the wetchurn module keeps the still-wet rescue lines' own lane, the watertable module keeps the water-table board's own lane, the storm verdict word keeps the storm row's own wetGlitches cell (the exclusion feed - a different emitter), the climbwetescapetrend and wetwallyieldtrend words keep their own lanes, the .266 counterrescue word's row keeps the rescues cell's seat beside, the smelted word's row (the .269 word) and the climbs word's row (the .270 word) and the tools word's row (the .271 word) keep their cells - the wet mass's row alone, co-existence by seat never by duplication)"

test('the REAL faces byte-exact - the census rides all eight counters lines', () => {
  assert.deepEqual(counterWetCensus([F478]), { wet: 2, wt: 2 })
  assert.deepEqual(counterWetCensus([F479]), { wet: 3, wt: 2 })
  assert.deepEqual(counterWetCensus([F480]), { wet: 7, wt: 2 })
  assert.deepEqual(counterWetCensus([F481]), { wet: 3, wt: 2 })
  assert.deepEqual(counterWetCensus([F482]), { wet: 3, wt: 1 })
  assert.deepEqual(counterWetCensus([F483]), { wet: 12, wt: 2 })
  assert.deepEqual(counterWetCensus([F484]), { wet: 5, wt: 2 })
  assert.deepEqual(counterWetCensus([F485]), { wet: 12, wt: 2 })
  // the eight lines in one face - LAST-PRINT-WINS, the last print rides
  assert.deepEqual(counterWetCensus([F478, F479, F480, F481, F482, F483, F484, F485]), { wet: 12, wt: 2 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(counterWetCensus(null), null)
  assert.equal(counterWetCensus(undefined), null)
  assert.equal(counterWetCensus('bots=19 wet=2'), null)
  assert.equal(counterWetCensus(42), null)
  // junk lines - the lawful zero (the never-counted face)
  assert.deepEqual(counterWetCensus([]), { wet: 0, wt: 0 })
  assert.deepEqual(counterWetCensus(['total chaos, no counters here']), { wet: 0, wt: 0 })
  assert.deepEqual(counterWetCensus([null, 42, 'junk', F485]), { wet: 12, wt: 2 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  // the fused tail - the cell ends at whitespace or line end, never mid-token
  const fused = F485.replace('wet=12 wt=2', 'wet=12wt=2')
  assert.deepEqual(counterWetCensus([fused]), { wet: 0, wt: 0 })
  // the leading zero - the .248 house law
  const leading = F483.replace('wet=12 wt=2', 'wet=012 wt=2')
  assert.deepEqual(counterWetCensus([leading]), { wet: 0, wt: 0 })
  // the negative count
  const negative = F483.replace('wet=12 wt=2', 'wet=-12 wt=2')
  assert.deepEqual(counterWetCensus([negative]), { wet: 0, wt: 0 })
  // the pretty spacing - the emitter's own template order byte-exact
  const pretty = F483.replace('claimedHolds=0 wet=12', 'claimedHolds=0  wet=12')
  assert.deepEqual(counterWetCensus([pretty]), { wet: 0, wt: 0 })
  // the altered order - the head chain's own template
  const altered = F483.replace('wet=12 wt=2', 'wt=2 wet=12')
  assert.deepEqual(counterWetCensus([altered]), { wet: 0, wt: 0 })
  // the truncated head - the 'bots=' anchor rides whole
  const truncated = F478.replace('bots=19 spawned=19', 'bots=19')
  assert.deepEqual(counterWetCensus([truncated]), { wet: 0, wt: 0 })
  // the bot-tagged prefix - one emitter one shape
  const tagged = '[bot-3] ' + F478
  assert.deepEqual(counterWetCensus([tagged]), { wet: 0, wt: 0 })
  // the bare cell without the frame
  assert.deepEqual(counterWetCensus(['wet=12 wt=2']), { wet: 0, wt: 0 })
  // the missing wt cell - the drifted template the grammar refuses
  const missingWt = F483.replace(' wet=12 wt=2', ' wet=12')
  assert.deepEqual(counterWetCensus([missingWt]), { wet: 0, wt: 0 })
  // the zero wet cell itself rides - the zero lawful (the dry face)
  const zeroed = F483.replace('wet=12 wt=2', 'wet=0 wt=2')
  assert.deepEqual(counterWetCensus([zeroed]), { wet: 0, wt: 2 })
  // the side-car leading zero rides - the unpriced chain cell's own law
  const sideZero = F483.replace('wet=12 wt=2', 'wet=12 wt=02')
  assert.deepEqual(counterWetCensus([sideZero]), { wet: 12, wt: 2 })
})

test('the fence - every branch the fold proves', () => {
  const good = { back: { wet: 2, wt: 2 }, prev: { wet: 3, wt: 2 }, cur: { wet: 7, wt: 2 } }
  assert.equal(counterWetConsistent(good), true)
  // the null and the non-object
  assert.equal(counterWetConsistent(null), false)
  assert.equal(counterWetConsistent(undefined), false)
  assert.equal(counterWetConsistent(42), false)
  assert.equal(counterWetConsistent([good]), false)
  // the missing face
  assert.equal(counterWetConsistent({ back: good.back, prev: good.prev }), false)
  assert.equal(counterWetConsistent({ back: null, prev: good.prev, cur: good.cur }), false)
  // the non-integer and the negative cell
  assert.equal(counterWetConsistent({ back: { wet: 1.5, wt: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterWetConsistent({ back: { wet: -1, wt: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterWetConsistent({ back: { wet: 0, wt: NaN }, prev: good.prev, cur: good.cur }), false)
  // extra keys never rejected
  assert.equal(counterWetConsistent({ ...good, junk: 'rides' }), true)
  // the zero cells ride - the zero lawful
  assert.equal(counterWetConsistent({ back: { wet: 0, wt: 0 }, prev: { wet: 0, wt: 0 }, cur: { wet: 0, wt: 0 } }), true)
})

test('the shapes byte-exact - the REAL windows priced and the honest silences', () => {
  const w478479480 = { back: counterWetCensus([F478]), prev: counterWetCensus([F479]), cur: counterWetCensus([F480]) }
  const w479480481 = { back: counterWetCensus([F479]), prev: counterWetCensus([F480]), cur: counterWetCensus([F481]) }
  const w480481482 = { back: counterWetCensus([F480]), prev: counterWetCensus([F481]), cur: counterWetCensus([F482]) }
  const w481482483 = { back: counterWetCensus([F481]), prev: counterWetCensus([F482]), cur: counterWetCensus([F483]) }
  const w482483484 = { back: counterWetCensus([F482]), prev: counterWetCensus([F483]), cur: counterWetCensus([F484]) }
  const w483484485 = { back: counterWetCensus([F483]), prev: counterWetCensus([F484]), cur: counterWetCensus([F485]) }
  // the W478-479-480 swell - the real window byte-exact
  assert.equal(counterWetTrendRow(w478479480), "the counters wet trend (v0.976.272): the wet weather's own swell ran two steps deep - 2 -> 3 (+1) -> 7 (+4) - the hazard mass's own swell, the wt rode 2 -> 2 -> 2 " + TAIL)
  // the W479-480-481 swing - the real window byte-exact
  assert.equal(counterWetTrendRow(w479480481), "the counters wet trend (v0.976.272): the wet weather's own swing - 3 -> 7 (+4) -> 3 (-4) - the fade and the swell traded seats between the faces, the wt rode 2 -> 2 -> 2 " + TAIL)
  // the W480-481-482 held second step - the honest silence (the family's own held law)
  assert.equal(counterWetTrendRow(w480481482), null)
  // the W481-482-483 held first step - the honest silence
  assert.equal(counterWetTrendRow(w481482483), null)
  // the W482-483-484 swing - the real window byte-exact
  assert.equal(counterWetTrendRow(w482483484), "the counters wet trend (v0.976.272): the wet weather's own swing - 3 -> 12 (+9) -> 5 (-7) - the fade and the swell traded seats between the faces, the wt rode 1 -> 2 -> 2 " + TAIL)
  // the W483-484-485 swing - the real window byte-exact
  assert.equal(counterWetTrendRow(w483484485), "the counters wet trend (v0.976.272): the wet weather's own swing - 12 -> 5 (-7) -> 12 (+7) - the fade and the swell traded seats between the faces, the wt rode 2 -> 2 -> 2 " + TAIL)
  // the fade shape - the synthetic byte-exact
  const fade = { back: { wet: 9, wt: 5 }, prev: { wet: 5, wt: 5 }, cur: { wet: 1, wt: 5 } }
  assert.match(counterWetTrendRow(fade), /^the counters wet trend \(v0\.976\.272\): the wet weather's own fade ran two steps deep - 9 -> 5 \(-4\) -> 1 \(-4\)/)
  // the swell shape - the synthetic byte-exact
  const swell = { back: { wet: 1, wt: 5 }, prev: { wet: 5, wt: 5 }, cur: { wet: 9, wt: 5 } }
  assert.match(counterWetTrendRow(swell), /^the counters wet trend \(v0\.976\.272\): the wet weather's own swell ran two steps deep - 1 -> 5 \(\+4\) -> 9 \(\+4\)/)
  // the three-face zero - the lawful silence
  const zeros = { back: { wet: 0, wt: 0 }, prev: { wet: 0, wt: 0 }, cur: { wet: 0, wt: 0 } }
  assert.equal(counterWetTrendRow(zeros), null)
  // the fence fails - the null
  assert.equal(counterWetTrendRow(null), null)
  assert.equal(counterWetTrendRow({ back: { wet: 1 }, prev: { wet: 2 }, cur: { wet: 3 } }), null)
})
