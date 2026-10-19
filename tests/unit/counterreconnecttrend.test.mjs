/**
 * counterreconnecttrend.test.mjs - (v0.976.268) THE COUNTERS RECONNECT
 * CELL'S OWN CHURN MASS - the counters line's own reconnects cell the
 * word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the five fleet faces'
 * own counters lines):
 *   F478: 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 ...'
 *   F479: 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 ...'
 *   F480: 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 ...'
 *   F481: 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 ...'
 *   F482: 'bots=19 spawned=19 reconnects=23 kicks=9 tools=18 ...'
 * the five-face arc 1 -> 20 -> 14 -> 5 -> 23 no row read - the word
 * takes the seat, the pins ride the faces byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterReconnectCensus, counterReconnectConsistent, counterReconnectTrendRow } from '../../src/lib/counterreconnecttrend.mjs'

// the REAL face lines byte-exact (the counters lines' own heads)
const F478 = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'
const F481 = 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 recovered=3 reboots=0 upgraded=12 swords=19 alive=19 climbs=34 banked=1511 smelted=58 planted=13 torched=8 fights=23 kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 airGlitches=0 claims=19 claimedHolds=0 wet=3 wt=2'
const F482 = 'bots=19 spawned=19 reconnects=23 kicks=9 tools=18 recovered=2 reboots=1 upgraded=15 swords=17 alive=19 climbs=14 banked=14 smelted=2 planted=13 torched=12 fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0 airGlitches=821 claims=15 claimedHolds=0 wet=3 wt=1'

test('the REAL faces byte-exact - the census rides all five counters lines', () => {
  assert.deepEqual(counterReconnectCensus([F478]), { reconnects: 1, kicks: 0 })
  assert.deepEqual(counterReconnectCensus([F479]), { reconnects: 20, kicks: 12 })
  assert.deepEqual(counterReconnectCensus([F480]), { reconnects: 14, kicks: 1 })
  assert.deepEqual(counterReconnectCensus([F481]), { reconnects: 5, kicks: 1 })
  assert.deepEqual(counterReconnectCensus([F482]), { reconnects: 23, kicks: 9 })
  // LAST-PRINT-WINS: the counters line speaks once per face, the last print wins
  assert.deepEqual(counterReconnectCensus([F478, F479, F480, F481, F482]), { reconnects: 23, kicks: 9 })
})

test('the junk faces - the lawful zeros and the null pass', () => {
  assert.deepEqual(counterReconnectCensus([]), { reconnects: 0, kicks: 0 })
  assert.deepEqual(counterReconnectCensus(['junk']), { reconnects: 0, kicks: 0 })
  assert.equal(counterReconnectCensus(null), null)
  assert.equal(counterReconnectCensus('junk'), null)
  assert.equal(counterReconnectCensus(undefined), null)
  assert.deepEqual(counterReconnectCensus([null, 42, F482]), { reconnects: 23, kicks: 9 })
})

test('the near-miss lanes never ride - the grammar refuses the skins', () => {
  assert.deepEqual(counterReconnectCensus(['reconnects=23 kicks=9']), { reconnects: 0, kicks: 0 }) // the 'bots=' head missing
  assert.deepEqual(counterReconnectCensus([`[F6] ${F482}`]), { reconnects: 0, kicks: 0 }) // the bot-tagged prefix
  assert.deepEqual(counterReconnectCensus([F482.replace(' spawned=19 reconnects=23', ' spawned=19  reconnects=23')]), { reconnects: 0, kicks: 0 }) // the pretty spacing
  assert.deepEqual(counterReconnectCensus([F482.replace('reconnects=23 kicks=9', 'kicks=9 reconnects=23')]), { reconnects: 0, kicks: 0 }) // the altered order
  assert.deepEqual(counterReconnectCensus([F482.replace('reconnects=23', 'reconnects=023')]), { reconnects: 0, kicks: 0 }) // the leading zero (the priced cell)
  assert.deepEqual(counterReconnectCensus([F482.replace('kicks=9', 'kicks=09')]), { reconnects: 0, kicks: 0 }) // the leading zero (the side-car)
  assert.deepEqual(counterReconnectCensus([F482.replace('reconnects=23 kicks=9', 'reconnects=23kicks=9')]), { reconnects: 0, kicks: 0 }) // the fused tail skin
  assert.deepEqual(counterReconnectCensus([F482.replace('reconnects=23', 'reconnects=-7')]), { reconnects: 0, kicks: 0 }) // the negative count
  assert.deepEqual(counterReconnectCensus([F482.replace('reconnects=23', 'reconnects=')]), { reconnects: 0, kicks: 0 }) // the truncated cell
  assert.deepEqual(counterReconnectCensus([F482.replace('kicks=9 tools=18', 'kicks=9tools=18')]), { reconnects: 0, kicks: 0 }) // the fused tail beyond the band
  assert.deepEqual(counterReconnectCensus([F482.replace(' tools=18 recovered=2 reboots=1 upgraded=15 swords=17 alive=19 climbs=14 banked=14 smelted=2 planted=13 torched=12 fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0 airGlitches=821 claims=15 claimedHolds=0 wet=3 wt=1', '')]), { reconnects: 23, kicks: 9 }) // the tail beyond the band rides
})

test('the fence - every branch', () => {
  const f = { reconnects: 23, kicks: 9 }
  assert.equal(counterReconnectConsistent({ back: f, prev: f, cur: f }), true)
  assert.equal(counterReconnectConsistent(null), false)
  assert.equal(counterReconnectConsistent('junk'), false)
  assert.equal(counterReconnectConsistent([f, f, f]), false)
  assert.equal(counterReconnectConsistent({ back: f, prev: f }), false)
  assert.equal(counterReconnectConsistent({ back: { reconnects: 23 }, prev: f, cur: f }), false)
  assert.equal(counterReconnectConsistent({ back: { reconnects: -1, kicks: 0 }, prev: f, cur: f }), false)
  assert.equal(counterReconnectConsistent({ back: { reconnects: 1.5, kicks: 0 }, prev: f, cur: f }), false)
  assert.equal(counterReconnectConsistent({ back: { reconnects: 0, kicks: 0 }, prev: { reconnects: 0, kicks: 0 }, cur: { reconnects: 0, kicks: 0 } }), true) // the zeros lawful
  assert.equal(counterReconnectConsistent({ back: f, prev: f, cur: { reconnects: 1, kicks: 0, extra: 'ok' } }), true) // extra keys never rejected
})

test('the shapes byte-exact - the swing, the fade, the swell, the honest silences', () => {
  const TAIL = "(the pocketline census's own local/spread row keeps the within-face seat, the reconnectretrytrend word keeps the retry lane's seat, the statcarry module keeps the carry lane, the upgraded word's row keeps the reboots side-car's seat (the .267 word) - the churn mass's row alone, co-existence by seat never by duplication)"
  // the REAL window W478-479-480: 1 -> 20 (+19) -> 14 (-6) - the swing (the word's own birth window)
  const swing = counterReconnectTrendRow({ back: counterReconnectCensus([F478]), prev: counterReconnectCensus([F479]), cur: counterReconnectCensus([F480]) })
  assert.equal(swing, "the reconnect trend (v0.976.268): the churn weather's own swing - 1 -> 20 (+19) -> 14 (-6) - the fade and the swell traded seats between the faces, the kicks rode 0 -> 12 -> 1 " + TAIL)
  // the REAL window W479-480-481: 20 -> 14 (-6) -> 5 (-9) - the fade
  const fade = counterReconnectTrendRow({ back: counterReconnectCensus([F479]), prev: counterReconnectCensus([F480]), cur: counterReconnectCensus([F481]) })
  assert.equal(fade, "the reconnect trend (v0.976.268): the churn weather's own fade ran two steps deep - 20 -> 14 (-6) -> 5 (-9) - the churn mass's own fade, the kicks rode 12 -> 1 -> 1 " + TAIL)
  // the REAL window W480-481-482: 14 -> 5 (-9) -> 23 (+18) - the swing (the storm's churn the F482 face paid)
  const swing2 = counterReconnectTrendRow({ back: counterReconnectCensus([F480]), prev: counterReconnectCensus([F481]), cur: counterReconnectCensus([F482]) })
  assert.equal(swing2, "the reconnect trend (v0.976.268): the churn weather's own swing - 14 -> 5 (-9) -> 23 (+18) - the fade and the swell traded seats between the faces, the kicks rode 1 -> 1 -> 9 " + TAIL)
  // the swell two steps deep
  const swell = counterReconnectTrendRow({ back: { reconnects: 1, kicks: 0 }, prev: { reconnects: 5, kicks: 1 }, cur: { reconnects: 14, kicks: 1 } })
  assert.equal(swell, "the reconnect trend (v0.976.268): the churn weather's own swell ran two steps deep - 1 -> 5 (+4) -> 14 (+9) - the churn mass's own swell, the kicks rode 0 -> 1 -> 1 " + TAIL)
  // a held step prices no direction - the honest silence (the synthetic holds)
  assert.equal(counterReconnectTrendRow({ back: { reconnects: 2, kicks: 0 }, prev: { reconnects: 2, kicks: 0 }, cur: { reconnects: 1, kicks: 0 } }), null)
  assert.equal(counterReconnectTrendRow({ back: { reconnects: 6, kicks: 0 }, prev: { reconnects: 1, kicks: 0 }, cur: { reconnects: 1, kicks: 0 } }), null)
  // the three-face zero - the lawful silence
  const z = { reconnects: 0, kicks: 0 }
  assert.equal(counterReconnectTrendRow({ back: z, prev: z, cur: z }), null)
  // the fence fail - the word never rides a lie
  assert.equal(counterReconnectTrendRow(null), null)
  assert.equal(counterReconnectTrendRow({ back: { reconnects: -1, kicks: 0 }, prev: z, cur: z }), null)
})
