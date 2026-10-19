/**
 * claimstrend.test.mjs - (v0.976.263) THE CLAIMS CELL'S OWN HOLD MASS -
 * the counters line's own claims cell the word prices, pure.
 *
 * THE REAL FACES (the fieldproof's own bytes):
 *   F478: '... airGlitches=0 claims=33 claimedHolds=0 wet=3 wt=2'
 *   F479: '... claims=17 claimedHolds=0 ...'
 *   F480: '... claims=23 claimedHolds=0 ...'
 *   F481: '... claims=19 claimedHolds=0 wet=3 wt=2'
 * the four-face arc 33 -> 17 -> 23 -> 19 no row read - the word takes
 * the seat, the pins ride the faces byte-exact.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { claimsCensus, claimsConsistent, claimsTrendRow } from '../../src/lib/claimstrend.mjs'

// the REAL face lines byte-exact (the counters lines' own bodies)
const F478 = 'bots=19 spawned=19 reconnects=1 kicks=0 tools=17 recovered=4 reboots=0 upgraded=19 swords=20 alive=19 climbs=34 banked=1104 smelted=25 planted=10 torched=2 fights=9 kills=4 shelters=0 rescues=16 pounces=0 pounceLanded=0 airGlitches=0 claims=33 claimedHolds=0 wet=3 wt=2'
const F479 = 'bots=19 spawned=19 reconnects=20 kicks=12 tools=19 recovered=0 reboots=0 upgraded=14 swords=18 alive=19 climbs=24 banked=313 smelted=4 planted=11 torched=1 fights=3 kills=2 shelters=0 rescues=32 pounces=6 pounceLanded=0 airGlitches=0 claims=17 claimedHolds=0 wet=3 wt=2'
const F480 = 'bots=19 spawned=19 reconnects=14 kicks=1 tools=18 recovered=2 reboots=1 upgraded=17 swords=19 alive=19 climbs=34 banked=1588 smelted=37 planted=11 torched=19 fights=2 kills=1 shelters=0 rescues=28 pounces=1 pounceLanded=0 airGlitches=0 claims=23 claimedHolds=0 wet=7 wt=2'
const F481 = 'bots=19 spawned=19 reconnects=5 kicks=1 tools=16 recovered=3 reboots=0 upgraded=12 swords=19 alive=19 climbs=34 banked=1511 smelted=58 planted=13 torched=8 fights=23 kills=1 shelters=0 rescues=37 pounces=0 pounceLanded=0 airGlitches=0 claims=19 claimedHolds=0 wet=3 wt=2'

test('the REAL faces byte-exact - the census rides all four counters lines', () => {
  assert.deepEqual(claimsCensus([F478]), { claims: 33, claimedHolds: 0 })
  assert.deepEqual(claimsCensus([F479]), { claims: 17, claimedHolds: 0 })
  assert.deepEqual(claimsCensus([F480]), { claims: 23, claimedHolds: 0 })
  assert.deepEqual(claimsCensus([F481]), { claims: 19, claimedHolds: 0 })
  // LAST-PRINT-WINS: the counters line speaks once per face, the last print wins
  assert.deepEqual(claimsCensus([F478, F479, F480, F481]), { claims: 19, claimedHolds: 0 })
})

test('the junk faces - the lawful zeros and the null pass', () => {
  assert.deepEqual(claimsCensus([]), { claims: 0, claimedHolds: 0 })
  assert.deepEqual(claimsCensus(['junk']), { claims: 0, claimedHolds: 0 })
  assert.equal(claimsCensus(null), null)
  assert.equal(claimsCensus('junk'), null)
  assert.equal(claimsCensus(undefined), null)
  assert.deepEqual(claimsCensus([null, 42, F481]), { claims: 19, claimedHolds: 0 })
})

test('the near-miss lanes never ride - the grammar refuses the skins', () => {
  assert.deepEqual(claimsCensus(['claims=19 claimedHolds=0']), { claims: 0, claimedHolds: 0 }) // the 'bots=' head missing
  assert.deepEqual(claimsCensus([F481.replace(' airGlitches=0 claims=19', ' airGlitches=0  claims=19')]), { claims: 0, claimedHolds: 0 }) // the pretty spacing
  assert.deepEqual(claimsCensus([F481.replace('claims=19 claimedHolds=0', 'claimedHolds=0 claims=19')]), { claims: 0, claimedHolds: 0 }) // the altered order
  assert.deepEqual(claimsCensus([F481.replace('claims=19', 'claims=019')]), { claims: 0, claimedHolds: 0 }) // the leading zero (the priced cell)
  assert.deepEqual(claimsCensus([F481.replace('claimedHolds=0', 'claimedHolds=00')]), { claims: 0, claimedHolds: 0 }) // the leading zero (the side-car - the tail boundary the grammar holds)
  assert.deepEqual(claimsCensus([F481.replace('claimedHolds=0 wet', 'claimedHolds=0x wet')]), { claims: 0, claimedHolds: 0 }) // the fused tail skin - the cell ends at whitespace or line end, never mid-token
  assert.deepEqual(claimsCensus([F481.replace('claims=19', 'claims=-7')]), { claims: 0, claimedHolds: 0 }) // the negative count
  assert.deepEqual(claimsCensus([F481.replace('claims=19', 'claims=')]), { claims: 0, claimedHolds: 0 }) // the truncated cell
  assert.deepEqual(claimsCensus([F481.replace('claims=19 claimedHolds=0 wet=3 wt=2', 'claims=19 claimedHolds=0')]), { claims: 19, claimedHolds: 0 }) // the tail beyond the band rides (the window, not the whole line)
})

test('the fence - every branch', () => {
  const f = { claims: 17, claimedHolds: 0 }
  assert.equal(claimsConsistent({ back: f, prev: f, cur: f }), true)
  assert.equal(claimsConsistent(null), false)
  assert.equal(claimsConsistent('junk'), false)
  assert.equal(claimsConsistent([f, f, f]), false)
  assert.equal(claimsConsistent({ back: f, prev: f }), false)
  assert.equal(claimsConsistent({ back: { claims: 17 }, prev: f, cur: f }), false)
  assert.equal(claimsConsistent({ back: { claims: -1, claimedHolds: 0 }, prev: f, cur: f }), false)
  assert.equal(claimsConsistent({ back: { claims: 1.5, claimedHolds: 0 }, prev: f, cur: f }), false)
  assert.equal(claimsConsistent({ back: { claims: 0, claimedHolds: 0 }, prev: { claims: 0, claimedHolds: 0 }, cur: { claims: 0, claimedHolds: 0 } }), true) // the zeros lawful
  assert.equal(claimsConsistent({ back: f, prev: f, cur: { claims: 19, claimedHolds: 0, extra: 'ok' } }), true) // extra keys never rejected
})

test('the shapes byte-exact - the fade, the swell, the swing, the honest silences', () => {
  const TAIL = "(the ClaimBoard's own runtime keeps the registry's seat, the torched word's own row keeps the counters frame's first cell seat (the .261 word), the hound shelter's own lane keeps its seat - the claims mass's row alone, co-existence by seat never by duplication)"
  // the swell two steps deep
  assert.equal(
    claimsTrendRow({ back: { claims: 5, claimedHolds: 0 }, prev: { claims: 9, claimedHolds: 1 }, cur: { claims: 23, claimedHolds: 0 } }),
    `the claims trend (v0.976.263): the hold weather's own swell ran two steps deep - 5 -> 9 (+4) -> 23 (+14) - the claims mass's own swell, the claimedHolds rode 0 -> 1 -> 0 ${TAIL}`
  )
  // the fade two steps deep
  assert.equal(
    claimsTrendRow({ back: { claims: 33, claimedHolds: 0 }, prev: { claims: 25, claimedHolds: 0 }, cur: { claims: 6, claimedHolds: 0 } }),
    `the claims trend (v0.976.263): the hold weather's own fade ran two steps deep - 33 -> 25 (-8) -> 6 (-19) - the claims mass's own fade, the claimedHolds rode 0 -> 0 -> 0 ${TAIL}`
  )
  // the swing
  assert.equal(
    claimsTrendRow({ back: { claims: 33, claimedHolds: 0 }, prev: { claims: 17, claimedHolds: 0 }, cur: { claims: 23, claimedHolds: 0 } }),
    `the claims trend (v0.976.263): the hold weather's own swing - 33 -> 17 (-16) -> 23 (+6) - the fade and the swell traded seats between the faces, the claimedHolds rode 0 -> 0 -> 0 ${TAIL}`
  )
  // a held step - the honest silence
  assert.equal(claimsTrendRow({ back: { claims: 9, claimedHolds: 0 }, prev: { claims: 9, claimedHolds: 0 }, cur: { claims: 3, claimedHolds: 0 } }), null)
  assert.equal(claimsTrendRow({ back: { claims: 9, claimedHolds: 0 }, prev: { claims: 3, claimedHolds: 0 }, cur: { claims: 3, claimedHolds: 0 } }), null)
  // the three-face zero - the lawful silence (the fleet never claimed)
  assert.equal(claimsTrendRow({ back: { claims: 0, claimedHolds: 0 }, prev: { claims: 0, claimedHolds: 0 }, cur: { claims: 0, claimedHolds: 0 } }), null)
  // the fence failing - the null pass
  assert.equal(claimsTrendRow(null), null)
  assert.equal(claimsTrendRow({ back: { claims: 0, claimedHolds: -1 }, prev: { claims: 0, claimedHolds: 0 }, cur: { claims: 0, claimedHolds: 0 } }), null)
})

test('the REAL windows - W478-479-480 and W479-480-481 both price the swing', () => {
  const c478 = claimsCensus([F478])
  const c479 = claimsCensus([F479])
  const c480 = claimsCensus([F480])
  const c481 = claimsCensus([F481])
  // W478-479-480: 33 -> 17 (-16) -> 23 (+6) - the swing
  const w1 = claimsTrendRow({ back: c478, prev: c479, cur: c480 })
  assert.equal(w1.includes('the hold weather\'s own swing - 33 -> 17 (-16) -> 23 (+6)'), true)
  // W479-480-481: 17 -> 23 (+6) -> 19 (-4) - the swing again
  const w2 = claimsTrendRow({ back: c479, prev: c480, cur: c481 })
  assert.equal(w2.includes('the hold weather\'s own swing - 17 -> 23 (+6) -> 19 (-4)'), true)
  // the claimedHolds arc the lawful zero keeps
  assert.equal(w1.includes('the claimedHolds rode 0 -> 0 -> 0'), true)
  assert.equal(w2.includes('the claimedHolds rode 0 -> 0 -> 0'), true)
})
