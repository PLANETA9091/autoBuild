// (v0.926.0) THE PREY'S OWN SEAT - the hound kill book's bot axis joins
// the seat law family. Tests feed the face-196 (38102148275) verbatim
// prey cells, the boundary law, the junk battery, and the decompose
// wiring pin (the CENSUS GUARD law).
import { houndPreySeat, houndPreySeatRow, houndPreyRiders, houndPreyRidersRow } from '../../src/lib/houndcensus.mjs'
import fs from 'node:fs'
import assert from 'node:assert'
import { test } from 'node:test'

// Face 196's own verbatim prey cells (the decompose print's own numbers:
// drowned-kill per-bot F18=6 F15=3 F13=3 F2=1 F16=1 F17=1 F8=1 F4=1 F1=1
// = 18 hound kills across 9 bots, the top at 33.3%).
const FACE196 = { F18: 6, F15: 3, F13: 3, F2: 1, F16: 1, F17: 1, F8: 1, F4: 1, F1: 1 }

test("the strict-majority seat shape (the fold reads the census's own cells)", () => {
  // F18 owns 7 of 12 - above half, the seat's own face.
  const seat = houndPreySeat({ killsByBot: { F18: 7, F15: 3, F13: 2 } })
  assert.deepEqual(seat, { bot: 'F18', owns: 7, ofKills: 12, shareOfKills: 0.583 })
})

test('the seat row byte-exact', () => {
  assert.equal(
    houndPreySeatRow(houndPreySeat({ killsByBot: { F18: 7, F15: 3, F13: 2 } })),
    "the kill book's own prey (v0.926.0): F18 owns 7 of 12 hound kill(s) (58.3%) - THE PREY'S OWN SEAT: one bot's own deaths own the hound's kill book - the prey's own front prices the pressure the raw split rode unnamed"
  )
})

test("the boundary law on face 196's own verbatim book: the top at a third owns nothing (the tie law)", () => {
  assert.equal(houndPreySeat({ killsByBot: FACE196 }), null) // F18 x6 of 18 - no majority
  // The spread's own tie: the top's mass meets the rest exactly.
  assert.equal(houndPreySeat({ killsByBot: { F18: 3, F15: 3 } }), null)
  assert.equal(houndPreySeat({ killsByBot: { F18: 4, F15: 3, F13: 1 } }), null) // 4 vs 4
})

test('the solo face: one bot owns the whole kill book (100%)', () => {
  // Face 195's own verbatim book: the hound won once (F16 the prey).
  const seat = houndPreySeat({ killsByBot: { F16: 1 } })
  assert.deepEqual(seat, { bot: 'F16', owns: 1, ofKills: 1, shareOfKills: 1 })
})

test("the byte law: the riders rank counts desc, equal counts ride the bot's own byte asc; a two-way tie never seats", () => {
  // The seat stays silent (5 of 11 owns no majority) - the riders' own face.
  const riders = houndPreyRiders({ killsByBot: { F15: 5, F13: 4, F2: 2 } })
  assert.equal(riders.leader, 'F15')
  assert.equal(riders.runner, 'F13')
  assert.equal(riders.duet, false)
  // The equal-count tie: byte asc breaks it (F13 < F15 - the census's own
  // insertion order never owns the ranking).
  const duet = houndPreyRiders({ killsByBot: { F15: 3, F13: 3, F2: 1 } })
  assert.equal(duet.leader, 'F13')
  assert.equal(duet.runner, 'F15')
  assert.equal(duet.duet, true)
  // The seat's own scan never seats a two-way tie: the pair's own mass
  // always meets or beats the top (the storm-has-no-seat law).
  assert.equal(houndPreySeat({ killsByBot: { F15: 3, F13: 3, F2: 1 } }), null)
})

test('the honest silences: the empty and junk books read the null', () => {
  assert.equal(houndPreySeat(null), null)
  assert.equal(houndPreySeat(undefined), null)
  assert.equal(houndPreySeat('junk'), null)
  assert.equal(houndPreySeat({}), null)
  assert.equal(houndPreySeat({ killsByBot: null }), null)
  assert.equal(houndPreySeat({ killsByBot: {} }), null)
  assert.equal(houndPreySeat({ killsByBot: { junk: 5, X1: 2 } }), null) // every bot key malformed
  assert.equal(houndPreySeat({ killsByBot: { F18: 0 } }), null) // a zero-sum book
})

test("the junk-cell law: malformed keys and non-finite cells are skipped, the real cells still tally", () => {
  // F18 4 kills + F15 1 kill = 5; the junk rows and cells ride out.
  const seat = houndPreySeat({ killsByBot: { F18: 4, junk: 9, X1: 2, F15: 1, lonely: 'junk' } })
  assert.deepEqual(seat, { bot: 'F18', owns: 4, ofKills: 5, shareOfKills: 0.8 })
})

test('the branch law: the riders speak only when the seat rode silent', () => {
  assert.equal(houndPreyRiders({ killsByBot: { F18: 7, F15: 3, F13: 2 } }), null) // the solo bot owns 58.3% - the seat's own face
  const riders = houndPreyRiders({ killsByBot: FACE196 }) // the spread - the riders' own face
  assert.equal(riders.leader, 'F18')
  assert.equal(riders.runner, 'F13') // the byte law: F13 < F15 at the equal 3
  assert.equal(riders.duet, false)
  assert.equal(riders.pairOwns, 9)
  assert.equal(riders.ofKills, 18)
  assert.equal(houndPreyRiders({ killsByBot: { F16: 1 } }), null) // the solo face - the seat's own
})

test("the riders row byte-exact (face 196's own spread face)", () => {
  assert.equal(
    houndPreyRidersRow(houndPreyRiders({ killsByBot: FACE196 })),
    "the kill book's own prey (v0.926.0): no solo bot owns the majority - F18 x6 + F13 x3 own 9 of 18 hound kill(s) (50.0%) - THE PREY'S OWN MIX: the seat's tie law held, the hunted are the shape - the bots' own deaths price the prey the solo law refused to seat"
  )
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(houndPreySeatRow(null), null)
  assert.equal(houndPreySeatRow(undefined), null)
  assert.equal(houndPreySeatRow('junk'), null)
  assert.equal(houndPreySeatRow({}), null)
  assert.equal(houndPreySeatRow({ bot: '', owns: 5, ofKills: 5, shareOfKills: 1 }), null)
  assert.equal(houndPreySeatRow({ bot: 'F18', owns: 0, ofKills: 5, shareOfKills: 0 }), null)
  assert.equal(houndPreySeatRow({ bot: 'F18', owns: 9, ofKills: 5, shareOfKills: 1.8 }), null) // owns > ofKills
  assert.equal(houndPreyRidersRow(null), null)
  assert.equal(houndPreyRidersRow(undefined), null)
  assert.equal(houndPreyRidersRow('junk'), null)
  assert.equal(houndPreyRidersRow({}), null)
  assert.equal(houndPreyRidersRow({ leader: 'F18', leaderOwns: 6, runner: '', runnerOwns: 3, pairOwns: 9, ofKills: 18, shareOfKills: 0.5 }), null)
  assert.equal(houndPreyRidersRow({ leader: 'F18', leaderOwns: 6, runner: 'F13', runnerOwns: 3, pairOwns: 21, ofKills: 18, shareOfKills: 1.16 }), null) // pairOwns > ofKills
})

test("WIRING: the kill book's prey seat rides decompose beside the drowned-kill per-bot print (v0.926.0)", () => {
  const src = fs.readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes('houndPreySeat, houndPreySeatRow, houndPreyRiders, houndPreyRidersRow'), 'the seat joins the decompose import band')
  const perBotAt = src.indexOf("'  drowned-kill per-bot:'")
  const seatAt = src.indexOf('houndPreySeat(hound)')
  assert.ok(perBotAt > 0 && seatAt > perBotAt, 'the seat rides beside the per-bot print, never before it')
  const v791 = src.indexOf("(v0.791.0) THE HOUND KILL'S OWN ARENA")
  assert.ok(v791 > 0, 'the arena seat (the kill book\'s own axis) prints in the same block - the prey axis rides its own sibling\'s scope')
})
