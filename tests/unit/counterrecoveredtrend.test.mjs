/**
 * counterrecoveredtrend.test.mjs - (v0.976.283) THE COUNTERS
 * RECOVERED CELL'S OWN CURE MASS - the counters line's own recovered
 * cell the word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the six fleet faces'
 * own counters lines):
 *   F485: '... tools=18 recovered=2 ...' (run 39208857636)
 *   F486: '... recovered=3 ...' (run 39211822338)
 *   F487: '... recovered=3 ...' (run 39214842713)
 *   F488: '... recovered=1 ...' (run 39222677292)
 *   F489: '... recovered=4 ...' (run 39230056077)
 *   F490: '... recovered=7 ...' (run 39241011047)
 * the six-face arc 2 -> 3 -> 3 -> 1 -> 4 -> 7 no row read - the
 * word takes the seat, the pins ride the faces byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterRecoveredCensus, counterRecoveredConsistent, counterRecoveredTrendRow } from '../../src/lib/counterrecoveredtrend.mjs'

// the REAL face lines byte-exact (the counters lines' own heads)
const F485 = 'bots=19 spawned=19 reconnects=13 kicks=6 tools=18 recovered=2 reboots=1 upgraded=12 swords=16 alive=19 climbs=30 banked=470 smelted=1 planted=7 torched=2 fights=40 kills=7 shelters=2 rescues=36 pounces=2 pounceLanded=0 airGlitches=945 claims=21 claimedHolds=0 wet=12 wt=2'
const F486 = 'bots=19 spawned=19 reconnects=14 kicks=3 tools=18 recovered=3 reboots=0 upgraded=13 swords=20 alive=19 climbs=26 banked=399 smelted=8 planted=13 torched=8 fights=6 kills=1 shelters=1 rescues=20 pounces=7 pounceLanded=0 airGlitches=0 claims=18 claimedHolds=0 wet=3 wt=2'
const F487 = 'bots=19 spawned=19 reconnects=19 kicks=2 tools=16 recovered=3 reboots=3 upgraded=12 swords=15 alive=19 climbs=22 banked=0 smelted=0 planted=12 torched=5 fights=12 kills=1 shelters=0 rescues=121 pounces=3 pounceLanded=0 airGlitches=414 claims=15 claimedHolds=0 wet=10 wt=2'
const F488 = 'bots=19 spawned=19 reconnects=15 kicks=0 tools=17 recovered=1 reboots=0 upgraded=7 swords=12 alive=19 climbs=21 banked=344 smelted=13 planted=14 torched=2 fights=34 kills=1 shelters=10 rescues=38 pounces=3 pounceLanded=0 airGlitches=627 claims=9 claimedHolds=0 wet=18 wt=1'
const F489 = 'bots=19 spawned=19 reconnects=33 kicks=10 tools=16 recovered=4 reboots=0 upgraded=9 swords=18 alive=19 climbs=14 banked=952 smelted=5 planted=12 torched=2 fights=18 kills=3 shelters=4 rescues=51 pounces=4 pounceLanded=0 airGlitches=243 claims=1 claimedHolds=0 wet=5 wt=1'
const F490 = 'bots=19 spawned=19 reconnects=12 kicks=1 tools=15 recovered=7 reboots=1 upgraded=8 swords=12 alive=19 climbs=34 banked=1001 smelted=25 planted=21 torched=2 fights=29 kills=2 shelters=5 rescues=179 pounces=2 pounceLanded=0 airGlitches=274 claims=17 claimedHolds=0 wet=11 wt=1'

const TAIL = "(the tools word's row keeps the tools cell's seat (the .271 word, the recovered arc its side-car - the rider keeps the ride, the seat the .283 word takes), the upgraded word's row keeps the upgraded cell's seat (the .267 word, the reboots arc its side-car), the climb word's row keeps the climbs cell's seat (the .270 word, the swords arc its side-car), the recovery-narrative words keep the 'tool recovery:' emitter's own verdict and brake and climb-out lanes (a different emitter the tally never rides), the kickbill module keeps the console's join/left churn cast (a different emitter again), the counters family keeps the counters line's own seats - the cure mass's row alone, co-existence by seat never by duplication)"

test('the REAL faces byte-exact - the census rides all six counters lines', () => {
  assert.deepEqual(counterRecoveredCensus([F485]), { recovered: 2, kicks: 6 })
  assert.deepEqual(counterRecoveredCensus([F486]), { recovered: 3, kicks: 3 })
  assert.deepEqual(counterRecoveredCensus([F487]), { recovered: 3, kicks: 2 })
  assert.deepEqual(counterRecoveredCensus([F488]), { recovered: 1, kicks: 0 })
  assert.deepEqual(counterRecoveredCensus([F489]), { recovered: 4, kicks: 10 })
  assert.deepEqual(counterRecoveredCensus([F490]), { recovered: 7, kicks: 1 })
  // the six lines in one face - LAST-PRINT-WINS, the last print rides
  assert.deepEqual(counterRecoveredCensus([F485, F486, F487, F488, F489, F490]), { recovered: 7, kicks: 1 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(counterRecoveredCensus(null), null)
  assert.equal(counterRecoveredCensus(undefined), null)
  assert.equal(counterRecoveredCensus('bots=19 recovered=7'), null)
  assert.equal(counterRecoveredCensus(42), null)
  // junk lines - the lawful zero (the never-counted face)
  assert.deepEqual(counterRecoveredCensus([]), { recovered: 0, kicks: 0 })
  assert.deepEqual(counterRecoveredCensus(['total chaos, no counters here']), { recovered: 0, kicks: 0 })
  assert.deepEqual(counterRecoveredCensus([null, 42, 'junk', F490]), { recovered: 7, kicks: 1 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  // the fused tail - the cell ends at whitespace or line end, never mid-token
  const fused = F490.replace('recovered=7 reboots=1', 'recovered=7reboots=1')
  assert.deepEqual(counterRecoveredCensus([fused]), { recovered: 0, kicks: 0 })
  // the leading zero - the .248 house law
  const leading = F490.replace('recovered=7 reboots=1', 'recovered=07 reboots=1')
  assert.deepEqual(counterRecoveredCensus([leading]), { recovered: 0, kicks: 0 })
  // the negative count
  const negative = F490.replace('recovered=7 reboots=1', 'recovered=-7 reboots=1')
  assert.deepEqual(counterRecoveredCensus([negative]), { recovered: 0, kicks: 0 })
  // the pretty spacing - the emitter's own template order byte-exact
  const pretty = F490.replace('tools=15 recovered=7', 'tools=15  recovered=7')
  assert.deepEqual(counterRecoveredCensus([pretty]), { recovered: 0, kicks: 0 })
  // the altered order - the head chain's own template
  const altered = F490.replace('tools=15 recovered=7', 'recovered=7 tools=15')
  assert.deepEqual(counterRecoveredCensus([altered]), { recovered: 0, kicks: 0 })
  // the truncated head - the 'bots=' anchor rides whole
  const truncated = F490.replace('bots=19 spawned=19', 'bots=19')
  assert.deepEqual(counterRecoveredCensus([truncated]), { recovered: 0, kicks: 0 })
  // the bot-tagged prefix - one emitter one shape
  const tagged = '[bot-3] ' + F490
  assert.deepEqual(counterRecoveredCensus([tagged]), { recovered: 0, kicks: 0 })
  // the bare cell without the frame
  assert.deepEqual(counterRecoveredCensus(['recovered=7']), { recovered: 0, kicks: 0 })
  // the zero recovered cell itself rides - the zero lawful
  const zeroed = F488.replace('recovered=1 reboots=0', 'recovered=0 reboots=0')
  assert.deepEqual(counterRecoveredCensus([zeroed]), { recovered: 0, kicks: 0 })
  // the side-car leading zero rides - the unpriced chain cell's own law
  const sideZero = F490.replace('kicks=1 tools=15', 'kicks=06 tools=15')
  assert.deepEqual(counterRecoveredCensus([sideZero]), { recovered: 7, kicks: 6 })
})

test('the fence - every branch the fold proves', () => {
  const good = { back: { recovered: 3, kicks: 2 }, prev: { recovered: 1, kicks: 0 }, cur: { recovered: 4, kicks: 10 } }
  assert.equal(counterRecoveredConsistent(good), true)
  // the null and the non-object
  assert.equal(counterRecoveredConsistent(null), false)
  assert.equal(counterRecoveredConsistent(undefined), false)
  assert.equal(counterRecoveredConsistent(42), false)
  assert.equal(counterRecoveredConsistent([good]), false)
  // the missing face
  assert.equal(counterRecoveredConsistent({ back: good.back, prev: good.prev }), false)
  assert.equal(counterRecoveredConsistent({ back: null, prev: good.prev, cur: good.cur }), false)
  // the non-integer and the negative cell
  assert.equal(counterRecoveredConsistent({ back: { recovered: 1.5, kicks: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterRecoveredConsistent({ back: { recovered: -1, kicks: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterRecoveredConsistent({ back: { recovered: 0, kicks: NaN }, prev: good.prev, cur: good.cur }), false)
  // extra keys never rejected
  assert.equal(counterRecoveredConsistent({ ...good, junk: 'rides' }), true)
  // the zero cells ride - the zero lawful
  assert.equal(counterRecoveredConsistent({ back: { recovered: 0, kicks: 0 }, prev: { recovered: 0, kicks: 0 }, cur: { recovered: 0, kicks: 0 } }), true)
})

test('the shapes byte-exact - the REAL windows priced and the honest silences', () => {
  const w485486487 = { back: counterRecoveredCensus([F485]), prev: counterRecoveredCensus([F486]), cur: counterRecoveredCensus([F487]) }
  const w486487488 = { back: counterRecoveredCensus([F486]), prev: counterRecoveredCensus([F487]), cur: counterRecoveredCensus([F488]) }
  const w487488489 = { back: counterRecoveredCensus([F487]), prev: counterRecoveredCensus([F488]), cur: counterRecoveredCensus([F489]) }
  const w488489490 = { back: counterRecoveredCensus([F488]), prev: counterRecoveredCensus([F489]), cur: counterRecoveredCensus([F490]) }
  // the W487-488-489 swing - the real window byte-exact
  assert.equal(counterRecoveredTrendRow(w487488489), "the counters recovered trend (v0.976.283): the recovery weather's own swing - 3 -> 1 (-2) -> 4 (+3) - the fade and the swell traded seats between the faces, the kicks rode 2 -> 0 -> 10 " + TAIL)
  // the W488-489-490 swell - the real window byte-exact (the birth face speaks)
  assert.equal(counterRecoveredTrendRow(w488489490), "the counters recovered trend (v0.976.283): the recovery weather's own swell ran two steps deep - 1 -> 4 (+3) -> 7 (+3) - the cure mass's own swell, the kicks rode 0 -> 10 -> 1 " + TAIL)
  // the W485-486-487 held second step - the honest silence (the family's own held law)
  assert.equal(counterRecoveredTrendRow(w485486487), null)
  // the W486-487-488 held first step - the honest silence
  assert.equal(counterRecoveredTrendRow(w486487488), null)
  // the fade shape - the synthetic byte-exact
  const fade = { back: { recovered: 9, kicks: 5 }, prev: { recovered: 5, kicks: 5 }, cur: { recovered: 1, kicks: 5 } }
  assert.match(counterRecoveredTrendRow(fade), /^the counters recovered trend \(v0\.976\.283\): the recovery weather's own fade ran two steps deep - 9 -> 5 \(-4\) -> 1 \(-4\)/)
  // the swell shape - the synthetic byte-exact
  const swell = { back: { recovered: 1, kicks: 5 }, prev: { recovered: 5, kicks: 5 }, cur: { recovered: 9, kicks: 5 } }
  assert.match(counterRecoveredTrendRow(swell), /^the counters recovered trend \(v0\.976\.283\): the recovery weather's own swell ran two steps deep - 1 -> 5 \(\+4\) -> 9 \(\+4\)/)
  // the three-face zero - the lawful silence
  const zeros = { back: { recovered: 0, kicks: 0 }, prev: { recovered: 0, kicks: 0 }, cur: { recovered: 0, kicks: 0 } }
  assert.equal(counterRecoveredTrendRow(zeros), null)
  // the fence fails - the null
  assert.equal(counterRecoveredTrendRow(null), null)
  assert.equal(counterRecoveredTrendRow({ back: { recovered: 1 }, prev: { recovered: 2 }, cur: { recovered: 3 } }), null)
})
