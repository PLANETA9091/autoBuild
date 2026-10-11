// (v0.928.0) THE MAGNET'S OWN SEAT - the hound presence book's bot axis
// joins the seat law family. Tests feed the face-196 (38099550811)
// verbatim per-bot presence cells, the boundary law, the junk battery,
// and the decompose wiring pin (the CENSUS GUARD law).
import { houndPressureSeat, houndPressureSeatRow, houndPressureRiders, houndPressureRidersRow } from '../../src/lib/houndcensus.mjs'
import fs from 'node:fs'
import assert from 'node:assert'
import { test } from 'node:test'

// Face 196's own verbatim per-bot presence cells (the decompose print's
// own numbers: '... per-bot: F15=23 F18=17 F13=17 F3=12 F16=7 F4=6 F1=5
// F2=3' = 90 answer moments across 8 bots, the top at 25.6%).
const FACE196 = { F15: 23, F18: 17, F13: 17, F3: 12, F16: 7, F4: 6, F1: 5, F2: 3 }

test("the strict-majority seat shape (the fold reads the census's own cells)", () => {
  // F15 owns 23 of 40 - above half, the seat's own face.
  const seat = houndPressureSeat({ presenceByBot: { F15: 23, F18: 17 } })
  assert.deepEqual(seat, { bot: 'F15', owns: 23, ofMoments: 40, shareOfMoments: 0.575 })
})

test('the seat row byte-exact', () => {
  assert.equal(
    houndPressureSeatRow(houndPressureSeat({ presenceByBot: { F15: 23, F18: 17 } })),
    "the pressure book's own bot (v0.928.0): F15 owns 23 of 40 hound moment(s) (57.5%) - THE MAGNET'S OWN SEAT: one bot's own touches own the hound book - the magnet's own front prices the pressure the raw split rode unnamed"
  )
})

test("the boundary law on face 196's own verbatim book: the top at a quarter owns nothing (the tie law)", () => {
  assert.equal(houndPressureSeat({ presenceByBot: FACE196 }), null) // F15 x23 of 90 - no majority
  // The spread's own tie: the top's mass meets the rest exactly.
  assert.equal(houndPressureSeat({ presenceByBot: { F15: 3, F13: 3 } }), null)
  assert.equal(houndPressureSeat({ presenceByBot: { F15: 4, F13: 3, F2: 1 } }), null) // 4 vs 4
})

test('the solo face: one bot owns the whole pressure book (100%)', () => {
  const seat = houndPressureSeat({ presenceByBot: { F16: 1 } })
  assert.deepEqual(seat, { bot: 'F16', owns: 1, ofMoments: 1, shareOfMoments: 1 })
})

test("the byte law: the riders rank counts desc, equal counts ride the bot's own byte asc; a two-way tie never seats", () => {
  // The equal-count tie: byte asc breaks it (F13 < F18 - the census's own
  // insertion order never owns the ranking).
  const duet = houndPressureRiders({ presenceByBot: { F18: 17, F13: 17, F15: 5 } })
  assert.equal(duet.leader, 'F13')
  assert.equal(duet.runner, 'F18')
  assert.equal(duet.duet, true)
  // The seat's own scan never seats a two-way tie: the pair's own mass
  // always meets or beats the top (the storm-has-no-seat law).
  assert.equal(houndPressureSeat({ presenceByBot: { F15: 3, F13: 3, F2: 1 } }), null)
})

test('the honest silences: the empty and junk books read the null', () => {
  assert.equal(houndPressureSeat(null), null)
  assert.equal(houndPressureSeat(undefined), null)
  assert.equal(houndPressureSeat('junk'), null)
  assert.equal(houndPressureSeat({}), null)
  assert.equal(houndPressureSeat({ presenceByBot: null }), null)
  assert.equal(houndPressureSeat({ presenceByBot: {} }), null)
  assert.equal(houndPressureSeat({ presenceByBot: { junk: 5, X1: 2 } }), null) // every bot key malformed
  assert.equal(houndPressureSeat({ presenceByBot: { F15: 0 } }), null) // a zero-sum book
})

test("the junk-cell law: malformed keys and non-finite cells are skipped, the real cells still tally", () => {
  // F15 4 moments + F13 1 moment = 5; the junk rows and cells ride out.
  const seat = houndPressureSeat({ presenceByBot: { F15: 4, junk: 9, X1: 2, F13: 1, lonely: 'junk' } })
  assert.deepEqual(seat, { bot: 'F15', owns: 4, ofMoments: 5, shareOfMoments: 0.8 })
})

test('the branch law: the riders speak only when the seat rode silent', () => {
  assert.equal(houndPressureRiders({ presenceByBot: { F15: 23, F18: 17 } }), null) // the solo bot owns 57.5% - the seat's own face
  const riders = houndPressureRiders({ presenceByBot: FACE196 }) // the spread - the riders' own face
  assert.equal(riders.leader, 'F15')
  assert.equal(riders.runner, 'F13') // the byte law: F13 < F18 at the equal 17
  assert.equal(riders.duet, false)
  assert.equal(riders.pairOwns, 40)
  assert.equal(riders.ofMoments, 90)
})

test("the riders' row byte-exact on face 196's own verbatim spread", () => {
  assert.equal(
    houndPressureRidersRow(houndPressureRiders({ presenceByBot: FACE196 })),
    "the pressure book's own riders (v0.928.0): no solo bot owns the majority - F15 x23 + F13 x17 own 40 of 90 hound moment(s) (44.4%) - THE MAGNET'S OWN MIX: the seat's tie law held, the magnets are the shape - the bots' own touches price the pressure the solo law refused to seat"
  )
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(houndPressureSeatRow(null), null)
  assert.equal(houndPressureSeatRow(undefined), null)
  assert.equal(houndPressureSeatRow('junk'), null)
  assert.equal(houndPressureSeatRow({}), null)
  assert.equal(houndPressureSeatRow({ bot: '', owns: 5, ofMoments: 5, shareOfMoments: 1 }), null)
  assert.equal(houndPressureSeatRow({ bot: 'F15', owns: 0, ofMoments: 5, shareOfMoments: 0 }), null)
  assert.equal(houndPressureSeatRow({ bot: 'F15', owns: 9, ofMoments: 5, shareOfMoments: 1.8 }), null) // owns > ofMoments
  assert.equal(houndPressureRidersRow(null), null)
  assert.equal(houndPressureRidersRow(undefined), null)
  assert.equal(houndPressureRidersRow('junk'), null)
  assert.equal(houndPressureRidersRow({}), null)
  assert.equal(houndPressureRidersRow({ leader: 'F15', leaderOwns: 23, runner: '', runnerOwns: 17, pairOwns: 40, ofMoments: 90, shareOfMoments: 0.444 }), null)
  assert.equal(houndPressureRidersRow({ leader: 'F15', leaderOwns: 23, runner: 'F13', runnerOwns: 17, pairOwns: 91, ofMoments: 90, shareOfMoments: 1.011 }), null) // pairOwns > ofMoments
})

test("WIRING: the pressure book's seat rides decompose beside the answer seat's own block (v0.928.0)", () => {
  const src = fs.readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes('houndPressureSeat, houndPressureSeatRow, houndPressureRiders, houndPressureRidersRow'), 'the seat joins the decompose import band')
  const answerAt = src.indexOf('houndAnswerSeat(hound)')
  const pressureAt = src.indexOf('houndPressureSeat(hound)')
  const preyAt = src.indexOf('houndPreySeat(hound)')
  assert.ok(answerAt > 0 && pressureAt > answerAt && preyAt > pressureAt, "the pressure axis rides after the answer axis and before the kill book's own prey axis")
})
