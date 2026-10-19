/**
 * upgradedtrend.test.mjs - (v0.976.267) THE UPGRADED CELL'S OWN SMITH
 * MASS - the counters line's own upgraded cell the word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the five fleet faces'
 * own counters lines):
 *   F478: '... reboots=0 upgraded=19 swords=20 alive=19 ...'
 *   F479: '... reboots=0 upgraded=14 swords=18 ...'
 *   F480: '... reboots=1 upgraded=17 swords=19 ...'
 *   F481: '... reboots=0 upgraded=12 swords=19 ...'
 *   F482: '... reboots=1 upgraded=15 swords=17 ...'
 * the five-face arc 19 -> 14 -> 17 -> 12 -> 15 no row read - the word
 * takes the seat, the pins ride the faces byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterUpgradeCensus, counterUpgradeConsistent, counterUpgradeTrendRow } from '../../src/lib/countersupgradedtrend.mjs'

// the REAL face lines byte-exact (the counters lines' own bodies)
const F478 = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'
const F481 = 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 recovered=3 reboots=0 upgraded=12 swords=19 alive=19 climbs=34 banked=1511 smelted=58 planted=13 torched=8 fights=23 kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 airGlitches=0 claims=19 claimedHolds=0 wet=3 wt=2'
const F482 = 'bots=19 spawned=19 reconnects=23 kicks=9 tools=18 recovered=2 reboots=1 upgraded=15 swords=17 alive=19 climbs=14 banked=14 smelted=2 planted=13 torched=12 fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0 airGlitches=821 claims=15 claimedHolds=0 wet=3 wt=1'

test('the REAL faces byte-exact - the census rides all five counters lines', () => {
  assert.deepEqual(counterUpgradeCensus([F478]), { upgraded: 19, reboots: 0 })
  assert.deepEqual(counterUpgradeCensus([F479]), { upgraded: 14, reboots: 0 })
  assert.deepEqual(counterUpgradeCensus([F480]), { upgraded: 17, reboots: 1 })
  assert.deepEqual(counterUpgradeCensus([F481]), { upgraded: 12, reboots: 0 })
  assert.deepEqual(counterUpgradeCensus([F482]), { upgraded: 15, reboots: 1 })
  // LAST-PRINT-WINS: the counters line speaks once per face, the last print wins
  assert.deepEqual(counterUpgradeCensus([F478, F479, F480, F481, F482]), { upgraded: 15, reboots: 1 })
})

test('the junk faces - the lawful zeros and the null pass', () => {
  assert.deepEqual(counterUpgradeCensus([]), { upgraded: 0, reboots: 0 })
  assert.deepEqual(counterUpgradeCensus(['junk']), { upgraded: 0, reboots: 0 })
  assert.equal(counterUpgradeCensus(null), null)
  assert.equal(counterUpgradeCensus('junk'), null)
  assert.equal(counterUpgradeCensus(undefined), null)
  assert.deepEqual(counterUpgradeCensus([null, 42, F482]), { upgraded: 15, reboots: 1 })
})

test('the near-miss lanes never ride - the grammar refuses the skins', () => {
  assert.deepEqual(counterUpgradeCensus(['upgraded=19']), { upgraded: 0, reboots: 0 }) // the 'bots=' head missing
  assert.deepEqual(counterUpgradeCensus([`[F6] ${F482}`]), { upgraded: 0, reboots: 0 }) // the bot-tagged prefix
  assert.deepEqual(counterUpgradeCensus([F478.replace(' reboots=0 upgraded=19', ' reboots=0  upgraded=19')]), { upgraded: 0, reboots: 0 }) // the pretty spacing
  assert.deepEqual(counterUpgradeCensus([F478.replace('reboots=0 upgraded=19', 'upgraded=19 reboots=0')]), { upgraded: 0, reboots: 0 }) // the altered order
  assert.deepEqual(counterUpgradeCensus([F478.replace('upgraded=19', 'upgraded=019')]), { upgraded: 0, reboots: 0 }) // the leading zero (the priced cell - the .248 law)
  assert.deepEqual(counterUpgradeCensus([F478.replace('reboots=0 upgraded', 'reboots=0upgraded')]), { upgraded: 0, reboots: 0 }) // the fused head skin - the chain breaks
  assert.deepEqual(counterUpgradeCensus([F478.replace('upgraded=19', 'upgraded=-7')]), { upgraded: 0, reboots: 0 }) // the negative count
  assert.deepEqual(counterUpgradeCensus([F478.replace('upgraded=19', 'upgraded=')]), { upgraded: 0, reboots: 0 }) // the truncated cell
  assert.deepEqual(counterUpgradeCensus([F478.replace(' swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2', '')]), { upgraded: 19, reboots: 0 }) // the tail beyond the band rides (the window, not the whole line)
})

test('the fence - every branch', () => {
  const f = { upgraded: 14, reboots: 0 }
  assert.equal(counterUpgradeConsistent({ back: f, prev: f, cur: f }), true)
  assert.equal(counterUpgradeConsistent(null), false)
  assert.equal(counterUpgradeConsistent('junk'), false)
  assert.equal(counterUpgradeConsistent([f, f, f]), false)
  assert.equal(counterUpgradeConsistent({ back: f, prev: f }), false)
  assert.equal(counterUpgradeConsistent({ back: { upgraded: 14 }, prev: f, cur: f }), false)
  assert.equal(counterUpgradeConsistent({ back: { upgraded: -1, reboots: 0 }, prev: f, cur: f }), false)
  assert.equal(counterUpgradeConsistent({ back: { upgraded: 1.5, reboots: 0 }, prev: f, cur: f }), false)
  assert.equal(counterUpgradeConsistent({ back: { upgraded: 0, reboots: 0 }, prev: { upgraded: 0, reboots: 0 }, cur: { upgraded: 0, reboots: 0 } }), true) // the zeros lawful
  assert.equal(counterUpgradeConsistent({ back: f, prev: f, cur: { upgraded: 15, reboots: 1, extra: 'ok' } }), true) // extra keys never rejected
})

test('the shapes byte-exact - the fade, the swell, the swing, the honest silences', () => {
  const TAIL = "(the toolupgrade machinery keeps the smith chain's own runtime seat, the finalbody census keeps the body's bots/alive seat, the kills cell's own seat keeps its lane (the .265 word), the rescues cell's own seat keeps its lane (the .266 word) - the upgrade mass's row alone, co-existence by seat never by duplication)"
  // the REAL window W478-479-480: 19 -> 14 (-5) -> 17 (+3) - the swing
  const swing = counterUpgradeTrendRow({ back: counterUpgradeCensus([F478]), prev: counterUpgradeCensus([F479]), cur: counterUpgradeCensus([F480]) })
  assert.equal(swing, "the counters upgrade trend (v0.976.267): the smith weather's own swing - 19 -> 14 (-5) -> 17 (+3) - the fade and the swell traded seats between the faces, the reboots rode 0 -> 0 -> 1 " + TAIL)
  // the REAL window W479-480-481: 14 -> 17 (+3) -> 12 (-5) - the swing again
  const swing2 = counterUpgradeTrendRow({ back: counterUpgradeCensus([F479]), prev: counterUpgradeCensus([F480]), cur: counterUpgradeCensus([F481]) })
  assert.equal(swing2, "the counters upgrade trend (v0.976.267): the smith weather's own swing - 14 -> 17 (+3) -> 12 (-5) - the fade and the swell traded seats between the faces, the reboots rode 0 -> 1 -> 0 " + TAIL)
  // the REAL window W480-481-482: 17 -> 12 (-5) -> 15 (+3) - the swing three windows deep
  const swing3 = counterUpgradeTrendRow({ back: counterUpgradeCensus([F480]), prev: counterUpgradeCensus([F481]), cur: counterUpgradeCensus([F482]) })
  assert.equal(swing3, "the counters upgrade trend (v0.976.267): the smith weather's own swing - 17 -> 12 (-5) -> 15 (+3) - the fade and the swell traded seats between the faces, the reboots rode 1 -> 0 -> 1 " + TAIL)
  // the swell two steps deep
  const swell = counterUpgradeTrendRow({ back: { upgraded: 2, reboots: 0 }, prev: { upgraded: 4, reboots: 1 }, cur: { upgraded: 8, reboots: 0 } })
  assert.equal(swell, "the counters upgrade trend (v0.976.267): the smith weather's own swell ran two steps deep - 2 -> 4 (+2) -> 8 (+4) - the upgrade mass's own swell, the reboots rode 0 -> 1 -> 0 " + TAIL)
  // the fade two steps deep
  const fade = counterUpgradeTrendRow({ back: { upgraded: 8, reboots: 0 }, prev: { upgraded: 4, reboots: 0 }, cur: { upgraded: 2, reboots: 0 } })
  assert.equal(fade, "the counters upgrade trend (v0.976.267): the smith weather's own fade ran two steps deep - 8 -> 4 (-4) -> 2 (-2) - the upgrade mass's own fade, the reboots rode 0 -> 0 -> 0 " + TAIL)
  // a held step prices no direction - the honest silence
  assert.equal(counterUpgradeTrendRow({ back: { upgraded: 2, reboots: 0 }, prev: { upgraded: 2, reboots: 0 }, cur: { upgraded: 1, reboots: 0 } }), null)
  // the three-face zero - the lawful silence
  const z = { upgraded: 0, reboots: 0 }
  assert.equal(counterUpgradeTrendRow({ back: z, prev: z, cur: z }), null)
  // the fence fail - the word never rides a lie
  assert.equal(counterUpgradeTrendRow(null), null)
  assert.equal(counterUpgradeTrendRow({ back: { upgraded: -1, reboots: 0 }, prev: z, cur: z }), null)
})
