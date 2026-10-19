/**
 * killstrend.test.mjs - (v0.976.265) THE KILLS CELL'S OWN TALLY MASS -
 * the counters line's own kills cell the word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the five fleet faces'
 * own counters lines):
 *   F478: '... fights=9 kills=4 shelters=0 rescues=16 ...'
 *   F479: '... fights=3 kills=2 shelters=0 ...'
 *   F480: '... fights=2 kills=1 shelters=0 ...'
 *   F481: '... fights=23 kills=1 shelters=0 ...'
 *   F482: '... fights=19 kills=5 shelters=1 ...' (run 39193658512)
 * the five-face arc 4 -> 2 -> 1 -> 1 -> 5 no row read - the word takes
 * the seat, the pins ride the faces byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { killsCensus, killsConsistent, killsTrendRow } from '../../src/lib/killstrend.mjs'

// the REAL face lines byte-exact (the counters lines' own bodies)
const F478 = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'
const F481 = 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 recovered=3 reboots=0 upgraded=12 swords=19 alive=19 climbs=34 banked=1511 smelted=58 planted=13 torched=8 fights=23 kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 airGlitches=0 claims=19 claimedHolds=0 wet=3 wt=2'
const F482 = 'bots=19 spawned=19 reconnects=23 kicks=9 tools=18 recovered=2 reboots=1 upgraded=15 swords=17 alive=19 climbs=14 banked=14 smelted=2 planted=13 torched=12 fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0 airGlitches=821 claims=15 claimedHolds=0 wet=3 wt=1'

test('the REAL faces byte-exact - the census rides all five counters lines', () => {
  assert.deepEqual(killsCensus([F478]), { kills: 4, shelters: 0 })
  assert.deepEqual(killsCensus([F479]), { kills: 2, shelters: 0 })
  assert.deepEqual(killsCensus([F480]), { kills: 1, shelters: 0 })
  assert.deepEqual(killsCensus([F481]), { kills: 1, shelters: 0 })
  assert.deepEqual(killsCensus([F482]), { kills: 5, shelters: 1 })
  // LAST-PRINT-WINS: the counters line speaks once per face, the last print wins
  assert.deepEqual(killsCensus([F478, F479, F480, F481, F482]), { kills: 5, shelters: 1 })
})

test('the junk faces - the lawful zeros and the null pass', () => {
  assert.deepEqual(killsCensus([]), { kills: 0, shelters: 0 })
  assert.deepEqual(killsCensus(['junk']), { kills: 0, shelters: 0 })
  assert.equal(killsCensus(null), null)
  assert.equal(killsCensus('junk'), null)
  assert.equal(killsCensus(undefined), null)
  assert.deepEqual(killsCensus([null, 42, F482]), { kills: 5, shelters: 1 })
})

test('the near-miss lanes never ride - the grammar refuses the skins', () => {
  assert.deepEqual(killsCensus(['kills=5 shelters=1']), { kills: 0, shelters: 0 }) // the 'bots=' head missing
  assert.deepEqual(killsCensus([`[F6] ${F482}`]), { kills: 0, shelters: 0 }) // the bot-tagged prefix
  assert.deepEqual(killsCensus([F478.replace(' fights=9 kills=4', ' fights=9  kills=4')]), { kills: 0, shelters: 0 }) // the pretty spacing
  assert.deepEqual(killsCensus([F478.replace('fights=9 kills=4', 'kills=4 fights=9')]), { kills: 0, shelters: 0 }) // the altered order
  assert.deepEqual(killsCensus([F478.replace('kills=4', 'kills=04')]), { kills: 0, shelters: 0 }) // the leading zero (the priced cell)
  assert.deepEqual(killsCensus([F478.replace('shelters=0', 'shelters=00')]), { kills: 0, shelters: 0 }) // the leading zero (the side-car)
  assert.deepEqual(killsCensus([F478.replace('kills=4 shelters=0', 'kills=4shelters=0')]), { kills: 0, shelters: 0 }) // the fused tail skin - the cell ends at whitespace or line end, never mid-token
  assert.deepEqual(killsCensus([F478.replace('kills=4', 'kills=-7')]), { kills: 0, shelters: 0 }) // the negative count
  assert.deepEqual(killsCensus([F478.replace('kills=4', 'kills=')]), { kills: 0, shelters: 0 }) // the truncated cell
  assert.deepEqual(killsCensus([F478.replace('shelters=0 rescues=16', 'shelters=0rescues=16')]), { kills: 0, shelters: 0 }) // the fused tail beyond the band
  assert.deepEqual(killsCensus([F478.replace(' rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2', '')]), { kills: 4, shelters: 0 }) // the tail beyond the band rides (the window, not the whole line)
})

test('the fence - every branch', () => {
  const f = { kills: 5, shelters: 1 }
  assert.equal(killsConsistent({ back: f, prev: f, cur: f }), true)
  assert.equal(killsConsistent(null), false)
  assert.equal(killsConsistent('junk'), false)
  assert.equal(killsConsistent([f, f, f]), false)
  assert.equal(killsConsistent({ back: f, prev: f }), false)
  assert.equal(killsConsistent({ back: { kills: 5 }, prev: f, cur: f }), false)
  assert.equal(killsConsistent({ back: { kills: -1, shelters: 0 }, prev: f, cur: f }), false)
  assert.equal(killsConsistent({ back: { kills: 1.5, shelters: 0 }, prev: f, cur: f }), false)
  assert.equal(killsConsistent({ back: { kills: 0, shelters: 0 }, prev: { kills: 0, shelters: 0 }, cur: { kills: 0, shelters: 0 } }), true) // the zeros lawful
  assert.equal(killsConsistent({ back: f, prev: f, cur: { kills: 1, shelters: 0, extra: 'ok' } }), true) // extra keys never rejected
})

test('the shapes byte-exact - the fade, the swell, the swing, the honest silences', () => {
  const TAIL = "(the fight ledger's episode lane keeps the fights cell's seat, the hound shelter's lane keeps the shelters cell's runtime seat, the death census keeps the death mass's own row, the torched word's row keeps the counters frame's torched cell seat (the .261 word), the claims band keeps its seat (the .263 word), the pounce cells keep their seat (the .264 word) - the kills mass's row alone, co-existence by seat never by duplication)"
  // the REAL window W478-479-480: 4 -> 2 (-2) -> 1 (-1) - the fade (the word's own birth window)
  const fade = killsTrendRow({ back: killsCensus([F478]), prev: killsCensus([F479]), cur: killsCensus([F480]) })
  assert.equal(fade, "the kills trend (v0.976.265): the tally weather's own fade ran two steps deep - 4 -> 2 (-2) -> 1 (-1) - the kills mass's own fade, the shelters rode 0 -> 0 -> 0 " + TAIL)
  // the REAL window W479-480-481: 2 -> 1 (-1) -> 1 (0) - the held step the honest silence
  assert.equal(killsTrendRow({ back: killsCensus([F479]), prev: killsCensus([F480]), cur: killsCensus([F481]) }), null)
  // the REAL window W480-481-482: 1 -> 1 (0) -> 5 (+4) - the held step the honest silence (the storm's tally the next window prices)
  assert.equal(killsTrendRow({ back: killsCensus([F480]), prev: killsCensus([F481]), cur: killsCensus([F482]) }), null)
  // the swell two steps deep
  const swell = killsTrendRow({ back: { kills: 1, shelters: 0 }, prev: { kills: 3, shelters: 0 }, cur: { kills: 6, shelters: 1 } })
  assert.equal(swell, "the kills trend (v0.976.265): the tally weather's own swell ran two steps deep - 1 -> 3 (+2) -> 6 (+3) - the kills mass's own swell, the shelters rode 0 -> 0 -> 1 " + TAIL)
  // the swing - the fade and the swell traded seats
  const swing = killsTrendRow({ back: { kills: 4, shelters: 0 }, prev: { kills: 8, shelters: 0 }, cur: { kills: 2, shelters: 1 } })
  assert.equal(swing, "the kills trend (v0.976.265): the tally weather's own swing - 4 -> 8 (+4) -> 2 (-6) - the fade and the swell traded seats between the faces, the shelters rode 0 -> 0 -> 1 " + TAIL)
  // a held step prices no direction - the honest silence (the synthetic holds)
  assert.equal(killsTrendRow({ back: { kills: 2, shelters: 0 }, prev: { kills: 2, shelters: 0 }, cur: { kills: 1, shelters: 0 } }), null)
  assert.equal(killsTrendRow({ back: { kills: 6, shelters: 0 }, prev: { kills: 1, shelters: 0 }, cur: { kills: 1, shelters: 0 } }), null)
  // the three-face zero - the lawful silence
  const z = { kills: 0, shelters: 0 }
  assert.equal(killsTrendRow({ back: z, prev: z, cur: z }), null)
  // the fence fail - the word never rides a lie
  assert.equal(killsTrendRow(null), null)
  assert.equal(killsTrendRow({ back: { kills: -1, shelters: 0 }, prev: z, cur: z }), null)
})
