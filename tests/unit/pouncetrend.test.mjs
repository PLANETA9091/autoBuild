/**
 * pouncetrend.test.mjs - (v0.976.264) THE POUNCE CELL'S OWN AIR MASS -
 * the counters line's own pounce cells the word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes, the four fleet faces'
 * own counters lines):
 *   F478: '... rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
 *   F479: '... rescues=32 pounces=6 pounceLanded=0 ...'
 *   F480: '... rescues=28 pounces=1 pounceLanded=0 ...'
 *   F481: '... rescues=37 pounces=0 pounceLanded=0 ...'
 * the four-face arc 2 -> 6 -> 1 -> 0 no row read - the word takes the
 * seat, the pins ride the faces byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { pounceCensus, pounceConsistent, pounceTrendRow } from '../../src/lib/pouncetrend.mjs'

// the REAL face lines byte-exact (the counters lines' own bodies)
const F478 = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'
const F481 = 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 recovered=3 reboots=0 upgraded=12 swords=19 alive=19 climbs=34 banked=1511 smelted=58 planted=13 torched=8 fights=23 kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 airGlitches=0 claims=19 claimedHolds=0 wet=3 wt=2'

test('the REAL faces byte-exact - the census rides all four counters lines', () => {
  assert.deepEqual(pounceCensus([F478]), { pounces: 2, pounceLanded: 0 })
  assert.deepEqual(pounceCensus([F479]), { pounces: 6, pounceLanded: 0 })
  assert.deepEqual(pounceCensus([F480]), { pounces: 1, pounceLanded: 0 })
  assert.deepEqual(pounceCensus([F481]), { pounces: 0, pounceLanded: 0 })
  // LAST-PRINT-WINS: the counters line speaks once per face, the last print wins
  assert.deepEqual(pounceCensus([F478, F479, F480, F481]), { pounces: 0, pounceLanded: 0 })
})

test('the junk faces - the lawful zeros and the null pass', () => {
  assert.deepEqual(pounceCensus([]), { pounces: 0, pounceLanded: 0 })
  assert.deepEqual(pounceCensus(['junk']), { pounces: 0, pounceLanded: 0 })
  assert.equal(pounceCensus(null), null)
  assert.equal(pounceCensus('junk'), null)
  assert.equal(pounceCensus(undefined), null)
  assert.deepEqual(pounceCensus([null, 42, F481]), { pounces: 0, pounceLanded: 0 })
})

test('the near-miss lanes never ride - the grammar refuses the skins', () => {
  assert.deepEqual(pounceCensus(['pounces=2 pounceLanded=0']), { pounces: 0, pounceLanded: 0 }) // the 'bots=' head missing
  assert.deepEqual(pounceCensus([`[F6] ${F481}`]), { pounces: 0, pounceLanded: 0 }) // the bot-tagged prefix
  assert.deepEqual(pounceCensus([F478.replace(' rescues=16 pounces=2', ' rescues=16  pounces=2')]), { pounces: 0, pounceLanded: 0 }) // the pretty spacing
  assert.deepEqual(pounceCensus([F478.replace('pounces=2 pounceLanded=0', 'pounceLanded=0 pounces=2')]), { pounces: 0, pounceLanded: 0 }) // the altered order
  assert.deepEqual(pounceCensus([F478.replace('pounces=2', 'pounces=02')]), { pounces: 0, pounceLanded: 0 }) // the leading zero (the priced cell)
  assert.deepEqual(pounceCensus([F478.replace('pounceLanded=0', 'pounceLanded=00')]), { pounces: 0, pounceLanded: 0 }) // the leading zero (the side-car)
  assert.deepEqual(pounceCensus([F478.replace('pounceLanded=0 airGlitches', 'pounceLanded=0airGlitches')]), { pounces: 0, pounceLanded: 0 }) // the fused tail skin - the cell ends at whitespace or line end, never mid-token
  assert.deepEqual(pounceCensus([F478.replace('pounces=2', 'pounces=-7')]), { pounces: 0, pounceLanded: 0 }) // the negative count
  assert.deepEqual(pounceCensus([F478.replace('pounces=2', 'pounces=')]), { pounces: 0, pounceLanded: 0 }) // the truncated cell
  assert.deepEqual(pounceCensus([F478.replace(' airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2', '')]), { pounces: 2, pounceLanded: 0 }) // the tail beyond the band rides (the window, not the whole line)
})

test('the fence - every branch', () => {
  const f = { pounces: 6, pounceLanded: 0 }
  assert.equal(pounceConsistent({ back: f, prev: f, cur: f }), true)
  assert.equal(pounceConsistent(null), false)
  assert.equal(pounceConsistent('junk'), false)
  assert.equal(pounceConsistent([f, f, f]), false)
  assert.equal(pounceConsistent({ back: f, prev: f }), false)
  assert.equal(pounceConsistent({ back: { pounces: 6 }, prev: f, cur: f }), false)
  assert.equal(pounceConsistent({ back: { pounces: -1, pounceLanded: 0 }, prev: f, cur: f }), false)
  assert.equal(pounceConsistent({ back: { pounces: 1.5, pounceLanded: 0 }, prev: f, cur: f }), false)
  assert.equal(pounceConsistent({ back: { pounces: 0, pounceLanded: 0 }, prev: { pounces: 0, pounceLanded: 0 }, cur: { pounces: 0, pounceLanded: 0 } }), true) // the zeros lawful
  assert.equal(pounceConsistent({ back: f, prev: f, cur: { pounces: 1, pounceLanded: 0, extra: 'ok' } }), true) // extra keys never rejected
})

test('the shapes byte-exact - the fade, the swell, the swing, the honest silences', () => {
  const TAIL = "(the climb book's own pounce lane keeps the probe's seat, the torched word's own row keeps the counters frame's first cell seat (the .261 word), the claims band keeps its seat (the .263 word) - the pounce mass's row alone, co-existence by seat never by duplication)"
  // the REAL window W478-479-480: 2 -> 6 (+4) -> 1 (-5) - the swing
  const swing = pounceTrendRow({ back: pounceCensus([F478]), prev: pounceCensus([F479]), cur: pounceCensus([F480]) })
  assert.equal(swing, "the pounce trend (v0.976.264): the air weather's own swing - 2 -> 6 (+4) -> 1 (-5) - the fade and the swell traded seats between the faces, the pounceLanded rode 0 -> 0 -> 0 " + TAIL)
  // the REAL window W479-480-481: 6 -> 1 (-5) -> 0 (-1) - the fade
  const fade = pounceTrendRow({ back: pounceCensus([F479]), prev: pounceCensus([F480]), cur: pounceCensus([F481]) })
  assert.equal(fade, "the pounce trend (v0.976.264): the air weather's own fade ran two steps deep - 6 -> 1 (-5) -> 0 (-1) - the pounce mass's own fade, the pounceLanded rode 0 -> 0 -> 0 " + TAIL)
  // the swell two steps deep
  const swell = pounceTrendRow({ back: { pounces: 2, pounceLanded: 0 }, prev: { pounces: 4, pounceLanded: 1 }, cur: { pounces: 8, pounceLanded: 2 } })
  assert.equal(swell, "the pounce trend (v0.976.264): the air weather's own swell ran two steps deep - 2 -> 4 (+2) -> 8 (+4) - the pounce mass's own swell, the pounceLanded rode 0 -> 1 -> 2 " + TAIL)
  // a held step prices no direction - the honest silence
  assert.equal(pounceTrendRow({ back: { pounces: 2, pounceLanded: 0 }, prev: { pounces: 2, pounceLanded: 0 }, cur: { pounces: 1, pounceLanded: 0 } }), null)
  assert.equal(pounceTrendRow({ back: { pounces: 6, pounceLanded: 0 }, prev: { pounces: 1, pounceLanded: 0 }, cur: { pounces: 1, pounceLanded: 0 } }), null)
  // the three-face zero - the lawful silence
  const z = { pounces: 0, pounceLanded: 0 }
  assert.equal(pounceTrendRow({ back: z, prev: z, cur: z }), null)
  // the fence fail - the word never rides a lie
  assert.equal(pounceTrendRow(null), null)
  assert.equal(pounceTrendRow({ back: { pounces: -1, pounceLanded: 0 }, prev: z, cur: z }), null)
})
