/**
 * counterstoolstrend.test.mjs - (v0.976.271) THE COUNTERS TOOLS CELL'S
 * OWN REPAIR MASS - the counters line's own tools cell the word prices,
 * pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the six fleet faces'
 * own counters lines):
 *   F478: '... kicks=0 tools=17 recovered=4 reboots=0 ...'
 *   F479: '... kicks=12 tools=19 recovered=0 reboots=0 ...'
 *   F480: '... kicks=1 tools=18 recovered=2 reboots=1 ...'
 *   F481: '... kicks=1 tools=16 recovered=3 reboots=0 ...'
 *   F482: '... kicks=9 tools=18 recovered=2 reboots=1 ...'
 *   F483: '... kicks=2 tools=17 recovered=3 reboots=0 ...'
 * the six-face arc 17 -> 19 -> 18 -> 16 -> 18 -> 17 no row read - the
 * word takes the seat, the pins ride the faces byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterToolsCensus, counterToolsConsistent, counterToolsTrendRow } from '../../src/lib/counterstoolstrend.mjs'

// the REAL face lines byte-exact (the counters lines' own heads)
const F478 = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'
const F481 = 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 recovered=3 reboots=0 upgraded=12 swords=19 alive=19 climbs=34 banked=1511 smelted=58 planted=13 torched=8 fights=23 kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 airGlitches=0 claims=19 claimedHolds=0 wet=3 wt=2'
const F482 = 'bots=19 spawned=19 reconnects=23 kicks=9 tools=18 recovered=2 reboots=1 upgraded=15 swords=17 alive=19 climbs=14 banked=14 smelted=2 planted=13 torched=12 fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0 airGlitches=821 claims=15 claimedHolds=0 wet=3 wt=1'
const F483 = 'bots=19 spawned=19 reconnects=7 kicks=2 tools=17 recovered=3 reboots=0 upgraded=12 swords=17 alive=19 climbs=32 banked=1038 smelted=21 planted=9 torched=4 fights=2 kills=0 shelters=0 rescues=40 pounces=0 pounceLanded=0 airGlitches=232 claims=23 claimedHolds=0 wet=12 wt=2'

test('the REAL faces byte-exact - the census rides all six counters lines', () => {
  assert.deepEqual(counterToolsCensus([F478]), { tools: 17, recovered: 4 })
  assert.deepEqual(counterToolsCensus([F479]), { tools: 19, recovered: 0 })
  assert.deepEqual(counterToolsCensus([F480]), { tools: 18, recovered: 2 })
  assert.deepEqual(counterToolsCensus([F481]), { tools: 16, recovered: 3 })
  assert.deepEqual(counterToolsCensus([F482]), { tools: 18, recovered: 2 })
  assert.deepEqual(counterToolsCensus([F483]), { tools: 17, recovered: 3 })
  // the six lines in one face - LAST-PRINT-WINS, the last print rides
  assert.deepEqual(counterToolsCensus([F478, F479, F480, F481, F482, F483]), { tools: 17, recovered: 3 })
})

test('the junk faces - the lawful zero and the honest null', () => {
  // non-array input - the honest null
  assert.equal(counterToolsCensus(null), null)
  assert.equal(counterToolsCensus(undefined), null)
  assert.equal(counterToolsCensus('bots=19 tools=17'), null)
  assert.equal(counterToolsCensus(42), null)
  // junk lines - the lawful zero (the never-counted face)
  assert.deepEqual(counterToolsCensus([]), { tools: 0, recovered: 0 })
  assert.deepEqual(counterToolsCensus(['total chaos, no counters here']), { tools: 0, recovered: 0 })
  assert.deepEqual(counterToolsCensus([null, 42, 'junk', F478]), { tools: 17, recovered: 4 })
})

test('the near-miss lanes never ride - the strict grammar refuses every skin', () => {
  // the fused tail - the cell ends at whitespace or line end, never mid-token
  const fused = F478.replace('recovered=4 reboots=0', 'recovered=4reboots=0')
  assert.deepEqual(counterToolsCensus([fused]), { tools: 0, recovered: 0 })
  // the leading zero - the .248 house law
  const leading = F478.replace('tools=17 ', 'tools=017 ')
  assert.deepEqual(counterToolsCensus([leading]), { tools: 0, recovered: 0 })
  // the side-car leading zero - the proven pair the grammar holds
  const scLeading = F478.replace('recovered=4 ', 'recovered=04 ')
  assert.deepEqual(counterToolsCensus([scLeading]), { tools: 0, recovered: 0 })
  // the negative count
  const negative = F478.replace('tools=17 ', 'tools=-17 ')
  assert.deepEqual(counterToolsCensus([negative]), { tools: 0, recovered: 0 })
  // the pretty spacing - the emitter's own template order byte-exact
  const pretty = F478.replace('tools=17 recovered=4', 'tools=17  recovered=4')
  assert.deepEqual(counterToolsCensus([pretty]), { tools: 0, recovered: 0 })
  // the altered order - the head chain's own template
  const altered = F478.replace('tools=17 recovered=4', 'recovered=4 tools=17')
  assert.deepEqual(counterToolsCensus([altered]), { tools: 0, recovered: 0 })
  // the truncated head - the 'bots=' anchor rides whole
  const truncated = F478.replace('bots=19 spawned=19', 'bots=19')
  assert.deepEqual(counterToolsCensus([truncated]), { tools: 0, recovered: 0 })
  // the bot-tagged prefix - one emitter one shape
  const tagged = '[bot-7] ' + F478
  assert.deepEqual(counterToolsCensus([tagged]), { tools: 0, recovered: 0 })
  // the bare cell without the frame
  assert.deepEqual(counterToolsCensus(['tools=17']), { tools: 0, recovered: 0 })
  // the zero recovered cell itself rides - the zero lawful
  assert.deepEqual(counterToolsCensus([F479]), { tools: 19, recovered: 0 })
})

test('the fence - every branch the fold proves', () => {
  const good = { back: { tools: 17, recovered: 4 }, prev: { tools: 19, recovered: 0 }, cur: { tools: 18, recovered: 2 } }
  assert.equal(counterToolsConsistent(good), true)
  // the null and the non-object
  assert.equal(counterToolsConsistent(null), false)
  assert.equal(counterToolsConsistent(undefined), false)
  assert.equal(counterToolsConsistent(42), false)
  assert.equal(counterToolsConsistent([good]), false)
  // the missing face
  assert.equal(counterToolsConsistent({ back: good.back, prev: good.prev }), false)
  assert.equal(counterToolsConsistent({ back: null, prev: good.prev, cur: good.cur }), false)
  // the non-integer and the negative cell
  assert.equal(counterToolsConsistent({ back: { tools: 1.5, recovered: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterToolsConsistent({ back: { tools: -1, recovered: 0 }, prev: good.prev, cur: good.cur }), false)
  assert.equal(counterToolsConsistent({ back: { tools: 0, recovered: NaN }, prev: good.prev, cur: good.cur }), false)
  // extra keys never rejected
  assert.equal(counterToolsConsistent({ ...good, junk: 'rides' }), true)
  // the zero cells ride - the zero lawful
  assert.equal(counterToolsConsistent({ back: { tools: 0, recovered: 0 }, prev: { tools: 0, recovered: 0 }, cur: { tools: 0, recovered: 0 } }), true)
})

test('the shapes byte-exact - the REAL four windows all speak', () => {
  const w478479480 = { back: counterToolsCensus([F478]), prev: counterToolsCensus([F479]), cur: counterToolsCensus([F480]) }
  const w479480481 = { back: counterToolsCensus([F479]), prev: counterToolsCensus([F480]), cur: counterToolsCensus([F481]) }
  const w480481482 = { back: counterToolsCensus([F480]), prev: counterToolsCensus([F481]), cur: counterToolsCensus([F482]) }
  const w481482483 = { back: counterToolsCensus([F481]), prev: counterToolsCensus([F482]), cur: counterToolsCensus([F483]) }
  // the W478-479-480 swing - the real window byte-exact
  assert.equal(counterToolsTrendRow(w478479480), "the counters tools trend (v0.976.271): the repair weather's own swing - 17 -> 19 (+2) -> 18 (-1) - the fade and the swell traded seats between the faces, the recovered rode 4 -> 0 -> 2 (the toolupgrade machinery keeps the smith chain's own runtime seat, the upgradecensus module keeps the tool ladder's own harvest seat (the v0.465.0 word), the statcarry module keeps the death's own stat carry lane, the upgraded word's row keeps the upgraded cell's seat (the .267 word), the climbs word's row keeps the scaffold seat (the .270 word) - the repair mass's row alone, co-existence by seat never by duplication)")
  // the W479-480-481 fade - the real window byte-exact
  assert.equal(counterToolsTrendRow(w479480481), "the counters tools trend (v0.976.271): the repair weather's own fade ran two steps deep - 19 -> 18 (-1) -> 16 (-2) - the repair mass's own fade, the recovered rode 0 -> 2 -> 3 (the toolupgrade machinery keeps the smith chain's own runtime seat, the upgradecensus module keeps the tool ladder's own harvest seat (the v0.465.0 word), the statcarry module keeps the death's own stat carry lane, the upgraded word's row keeps the upgraded cell's seat (the .267 word), the climbs word's row keeps the scaffold seat (the .270 word) - the repair mass's row alone, co-existence by seat never by duplication)")
  // the W480-481-482 swing - the real window byte-exact
  assert.equal(counterToolsTrendRow(w480481482), "the counters tools trend (v0.976.271): the repair weather's own swing - 18 -> 16 (-2) -> 18 (+2) - the fade and the swell traded seats between the faces, the recovered rode 2 -> 3 -> 2 (the toolupgrade machinery keeps the smith chain's own runtime seat, the upgradecensus module keeps the tool ladder's own harvest seat (the v0.465.0 word), the statcarry module keeps the death's own stat carry lane, the upgraded word's row keeps the upgraded cell's seat (the .267 word), the climbs word's row keeps the scaffold seat (the .270 word) - the repair mass's row alone, co-existence by seat never by duplication)")
  // the W481-482-483 swing - the real window byte-exact
  assert.equal(counterToolsTrendRow(w481482483), "the counters tools trend (v0.976.271): the repair weather's own swing - 16 -> 18 (+2) -> 17 (-1) - the fade and the swell traded seats between the faces, the recovered rode 3 -> 2 -> 3 (the toolupgrade machinery keeps the smith chain's own runtime seat, the upgradecensus module keeps the tool ladder's own harvest seat (the v0.465.0 word), the statcarry module keeps the death's own stat carry lane, the upgraded word's row keeps the upgraded cell's seat (the .267 word), the climbs word's row keeps the scaffold seat (the .270 word) - the repair mass's row alone, co-existence by seat never by duplication)")
  // the swell shape - the synthetic byte-exact
  const swell = { back: { tools: 5, recovered: 1 }, prev: { tools: 9, recovered: 1 }, cur: { tools: 12, recovered: 1 } }
  assert.match(counterToolsTrendRow(swell), /^the counters tools trend \(v0\.976\.271\): the repair weather's own swell ran two steps deep - 5 -> 9 \(\+4\) -> 12 \(\+3\)/)
  // the held step - the honest silence
  const held = { back: { tools: 5, recovered: 1 }, prev: { tools: 5, recovered: 1 }, cur: { tools: 9, recovered: 1 } }
  assert.equal(counterToolsTrendRow(held), null)
  // the three-face zero - the lawful silence
  const zeros = { back: { tools: 0, recovered: 0 }, prev: { tools: 0, recovered: 0 }, cur: { tools: 0, recovered: 0 } }
  assert.equal(counterToolsTrendRow(zeros), null)
  // the fence fails - the null
  assert.equal(counterToolsTrendRow(null), null)
  assert.equal(counterToolsTrendRow({ back: { tools: 1 }, prev: { tools: 2 }, cur: { tools: 3 } }), null)
})
