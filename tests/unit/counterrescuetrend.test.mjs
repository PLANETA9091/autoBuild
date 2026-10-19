/**
 * counterrescuetrend.test.mjs - (v0.976.266) THE COUNTERS RESCUE
 * CELL'S OWN TREADMILL MASS - the counters line's own rescues cell
 * the word prices, pure (the rescue book's own v0.976.36 word keeps
 * the ledger's seat beside - a different cell, a different name).
 *
 * THE REAL FACES (the fieldproof's own bytes, the four fleet faces'
 * own counters lines):
 *   F478: '... fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 ...'
 *   F479: '... kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 ...'
 *   F480: '... kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 ...'
 *   F481: '... kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 ...'
 *   F482: '... fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0 ...'
 * the five-face arc 16 -> 32 -> 28 -> 37 -> 30 no row read - the word
 * takes the seat, the pins ride the faces byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { counterRescueCensus, counterRescueConsistent, counterRescueTrendRow } from '../../src/lib/counterrescuetrend.mjs'

// the REAL face lines byte-exact (the counters lines' own bodies)
const F478 = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2'
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'
const F481 = 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 recovered=3 reboots=0 upgraded=12 swords=19 alive=19 climbs=34 banked=1511 smelted=58 planted=13 torched=8 fights=23 kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 airGlitches=0 claims=19 claimedHolds=0 wet=3 wt=2'
const F482 = 'bots=19 spawned=19 reconnects=23 kicks=9 tools=18 recovered=2 reboots=1 upgraded=15 swords=17 alive=19 climbs=14 banked=14 smelted=2 planted=13 torched=12 fights=19 kills=5 shelters=1 rescues=30 pounces=1 pounceLanded=0 airGlitches=821 claims=15 claimedHolds=0 wet=3 wt=1'

test('the REAL faces byte-exact - the census rides all five counters lines', () => {
  assert.deepEqual(counterRescueCensus([F478]), { rescues: 16, shelters: 0 })
  assert.deepEqual(counterRescueCensus([F479]), { rescues: 32, shelters: 0 })
  assert.deepEqual(counterRescueCensus([F480]), { rescues: 28, shelters: 0 })
  assert.deepEqual(counterRescueCensus([F481]), { rescues: 37, shelters: 0 })
  assert.deepEqual(counterRescueCensus([F482]), { rescues: 30, shelters: 1 })
  // LAST-PRINT-WINS: the counters line speaks once per face, the last print wins
  assert.deepEqual(counterRescueCensus([F478, F479, F480, F481, F482]), { rescues: 30, shelters: 1 })
})

test('the junk faces - the lawful zeros and the null pass', () => {
  assert.deepEqual(counterRescueCensus([]), { rescues: 0, shelters: 0 })
  assert.deepEqual(counterRescueCensus(['junk']), { rescues: 0, shelters: 0 })
  assert.equal(counterRescueCensus(null), null)
  assert.equal(counterRescueCensus('junk'), null)
  assert.equal(counterRescueCensus(undefined), null)
  assert.deepEqual(counterRescueCensus([null, 42, F481]), { rescues: 37, shelters: 0 })
})

test('the near-miss lanes never ride - the grammar refuses the skins', () => {
  assert.deepEqual(counterRescueCensus(['rescues=16']), { rescues: 0, shelters: 0 }) // the 'bots=' head missing
  assert.deepEqual(counterRescueCensus([`[F6] ${F481}`]), { rescues: 0, shelters: 0 }) // the bot-tagged prefix
  assert.deepEqual(counterRescueCensus([F478.replace(' shelters=0 rescues=16', ' shelters=0  rescues=16')]), { rescues: 0, shelters: 0 }) // the pretty spacing
  assert.deepEqual(counterRescueCensus([F478.replace('shelters=0 rescues=16', 'rescues=16 shelters=0')]), { rescues: 0, shelters: 0 }) // the altered order
  assert.deepEqual(counterRescueCensus([F478.replace('rescues=16', 'rescues=016')]), { rescues: 0, shelters: 0 }) // the leading zero (the priced cell - the .248 law)
  assert.deepEqual(counterRescueCensus([F478.replace('kills=4 shelters=0', 'kills=4 shelters')]), { rescues: 0, shelters: 0 }) // the drifted template - the dropped '=0' breaks the head chain
  assert.deepEqual(counterRescueCensus([F478.replace('rescues=16 pounces', 'rescues=16pounces')]), { rescues: 0, shelters: 0 }) // the fused tail skin - the cell ends at whitespace or line end, never mid-token
  assert.deepEqual(counterRescueCensus([F478.replace('rescues=16', 'rescues=-7')]), { rescues: 0, shelters: 0 }) // the negative count
  assert.deepEqual(counterRescueCensus([F478.replace('rescues=16', 'rescues=')]), { rescues: 0, shelters: 0 }) // the truncated cell
  assert.deepEqual(counterRescueCensus([F478.replace(' pounces=2 pounceLanded=0 airGlitches=857 claims=33 claimedHolds=0 wet=2 wt=2', '')]), { rescues: 16, shelters: 0 }) // the tail beyond the band rides (the window, not the whole line)
})

test('the fence - every branch', () => {
  const f = { rescues: 32, shelters: 0 }
  assert.equal(counterRescueConsistent({ back: f, prev: f, cur: f }), true)
  assert.equal(counterRescueConsistent(null), false)
  assert.equal(counterRescueConsistent('junk'), false)
  assert.equal(counterRescueConsistent([f, f, f]), false)
  assert.equal(counterRescueConsistent({ back: f, prev: f }), false)
  assert.equal(counterRescueConsistent({ back: { rescues: 32 }, prev: f, cur: f }), false)
  assert.equal(counterRescueConsistent({ back: { rescues: -1, shelters: 0 }, prev: f, cur: f }), false)
  assert.equal(counterRescueConsistent({ back: { rescues: 1.5, shelters: 0 }, prev: f, cur: f }), false)
  assert.equal(counterRescueConsistent({ back: { rescues: 0, shelters: 0 }, prev: { rescues: 0, shelters: 0 }, cur: { rescues: 0, shelters: 0 } }), true) // the zeros lawful
  assert.equal(counterRescueConsistent({ back: f, prev: f, cur: { rescues: 37, shelters: 0, extra: 'ok' } }), true) // extra keys never rejected
})

test('the shapes byte-exact - the fade, the swell, the swing, the honest silences', () => {
  const TAIL = "(the rescue book's own trend keeps the ledger's unclosed/starts seat (the v0.976.36 word), the still-wet lanes keep their seats (the watertable and wetchurn words price the rescue lines beside), the hound shelter's own lane keeps its seat, the calm rescue's own runtime keeps its seat - the rescue tally's row alone, co-existence by seat never by duplication)"
  // the REAL window W478-479-480: 16 -> 32 (+16) -> 28 (-4) - the swing
  const swing = counterRescueTrendRow({ back: counterRescueCensus([F478]), prev: counterRescueCensus([F479]), cur: counterRescueCensus([F480]) })
  assert.equal(swing, "the counters rescue trend (v0.976.266): the rescue weather's own swing - 16 -> 32 (+16) -> 28 (-4) - the fade and the swell traded seats between the faces, the shelters rode 0 -> 0 -> 0 " + TAIL)
  // the REAL window W479-480-481: 32 -> 28 (-4) -> 37 (+9) - the swing again
  const swing2 = counterRescueTrendRow({ back: counterRescueCensus([F479]), prev: counterRescueCensus([F480]), cur: counterRescueCensus([F481]) })
  assert.equal(swing2, "the counters rescue trend (v0.976.266): the rescue weather's own swing - 32 -> 28 (-4) -> 37 (+9) - the fade and the swell traded seats between the faces, the shelters rode 0 -> 0 -> 0 " + TAIL)
  // the REAL window W480-481-482: 28 -> 37 (+9) -> 30 (-7) - the swing three windows deep, the shelters side-car the first non-zero ride
  const swing3 = counterRescueTrendRow({ back: counterRescueCensus([F480]), prev: counterRescueCensus([F481]), cur: counterRescueCensus([F482]) })
  assert.equal(swing3, "the counters rescue trend (v0.976.266): the rescue weather's own swing - 28 -> 37 (+9) -> 30 (-7) - the fade and the swell traded seats between the faces, the shelters rode 0 -> 0 -> 1 " + TAIL)
  // the swell two steps deep
  const swell = counterRescueTrendRow({ back: { rescues: 2, shelters: 0 }, prev: { rescues: 4, shelters: 1 }, cur: { rescues: 8, shelters: 2 } })
  assert.equal(swell, "the counters rescue trend (v0.976.266): the rescue weather's own swell ran two steps deep - 2 -> 4 (+2) -> 8 (+4) - the rescue mass's own swell, the shelters rode 0 -> 1 -> 2 " + TAIL)
  // the fade two steps deep
  const fade = counterRescueTrendRow({ back: { rescues: 8, shelters: 0 }, prev: { rescues: 4, shelters: 0 }, cur: { rescues: 2, shelters: 0 } })
  assert.equal(fade, "the counters rescue trend (v0.976.266): the rescue weather's own fade ran two steps deep - 8 -> 4 (-4) -> 2 (-2) - the rescue mass's own fade, the shelters rode 0 -> 0 -> 0 " + TAIL)
  // a held step prices no direction - the honest silence
  assert.equal(counterRescueTrendRow({ back: { rescues: 2, shelters: 0 }, prev: { rescues: 2, shelters: 0 }, cur: { rescues: 1, shelters: 0 } }), null)
  assert.equal(counterRescueTrendRow({ back: { rescues: 6, shelters: 0 }, prev: { rescues: 1, shelters: 0 }, cur: { rescues: 1, shelters: 0 } }), null)
  // the three-face zero - the lawful silence
  const z = { rescues: 0, shelters: 0 }
  assert.equal(counterRescueTrendRow({ back: z, prev: z, cur: z }), null)
  // the fence fail - the word never rides a lie
  assert.equal(counterRescueTrendRow(null), null)
  assert.equal(counterRescueTrendRow({ back: { rescues: -1, shelters: 0 }, prev: z, cur: z }), null)
})
