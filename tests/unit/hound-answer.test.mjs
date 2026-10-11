// (v0.925.0) THE ANSWER'S OWN SEAT - the hound presence book joins the
// seat law family. Tests feed the face-195 (38094958336) verbatim answer
// cells, the fold law (the subset and the episode books stay out), the
// boundary law, the junk battery, and the decompose wiring pin (the
// CENSUS GUARD law).
import { houndAnswerSeat, houndAnswerSeatRow, houndAnswerRiders, houndAnswerRidersRow } from '../../src/lib/houndcensus.mjs'
import fs from 'node:fs'
import assert from 'node:assert'
import { test } from 'node:test'

// Face 195's own verbatim answer cells (the decompose print's own
// numbers: fight 15 / flee-dry 3 / shelter 5 / flee-shore 1 / other 15 =
// 39 answer moments, the top is a two-way tie).
const FACE195 = { fight: 15, fleeDry: 3, shelter: 5, fleeShore: 1, shoreNoCell: 0, other: 15 }

test("the strict-majority seat shape (the fold reads the census's own cells)", () => {
  const seat = houndAnswerSeat({ fight: 20, fleeDry: 3, shelter: 5, fleeShore: 1, other: 10 })
  assert.deepEqual(seat, { cls: 'fight', owns: 20, ofMoments: 39, shareOfMoments: 0.513 })
})

test('the seat row byte-exact', () => {
  assert.equal(
    houndAnswerSeatRow(houndAnswerSeat({ fight: 20, fleeDry: 3, shelter: 5, fleeShore: 1, other: 10 })),
    "the answer book's own class (v0.925.0): fight owns 20 of 39 answer moment(s) (51.3%) - THE ANSWER'S OWN SEAT: one answer's own moments own the hound book - the class's own front prices the pressure the raw split rode unnamed"
  )
})

test("the boundary law on face 195's own verbatim book: a class at the tie owns nothing", () => {
  assert.equal(houndAnswerSeat(FACE195), null) // fight 15 = other 15 of 39 - the tie owns nothing
  // The spread's own tie: the top's mass meets the rest exactly.
  assert.equal(houndAnswerSeat({ fight: 10, other: 6, shelter: 4 }), null) // 10 vs 10
})

test('the solo face: one class owns the whole answer book (100%)', () => {
  const seat = houndAnswerSeat({ fight: 7 })
  assert.deepEqual(seat, { cls: 'fight', owns: 7, ofMoments: 7, shareOfMoments: 1 })
})

test("the byte law: the riders rank counts desc, equal counts ride the class's own byte asc; a two-way tie never seats", () => {
  // The seat stays silent (9 of 20 owns no majority) - the riders' own face.
  const riders = houndAnswerRiders({ fight: 9, shelter: 6, fleeDry: 5 })
  assert.equal(riders.leader, 'fight')
  assert.equal(riders.runner, 'shelter')
  assert.equal(riders.duet, false)
  // The equal-count tie: byte asc breaks it (fight < fleeDry < fleeShore < other < shelter < shoreNoCell).
  const duet = houndAnswerRiders({ other: 8, fight: 8, shelter: 3 })
  assert.equal(duet.leader, 'fight')
  assert.equal(duet.runner, 'other')
  assert.equal(duet.duet, true)
  // The seat's own scan never seats a two-way tie: the pair's own mass
  // always meets or beats the top (the storm-has-no-seat law).
  assert.equal(houndAnswerSeat({ other: 8, fight: 8, shelter: 3 }), null)
})

test('the honest silences: the empty and junk books read the null', () => {
  assert.equal(houndAnswerSeat(null), null)
  assert.equal(houndAnswerSeat(undefined), null)
  assert.equal(houndAnswerSeat('junk'), null)
  assert.equal(houndAnswerSeat([]), null)
  assert.equal(houndAnswerSeat({}), null)
  assert.equal(houndAnswerSeat({ fight: 0, other: 0 }), null) // a zero-sum book
})

test("the junk-cell law: non-finite and non-positive cells are skipped, the real cells still tally", () => {
  const seat = houndAnswerSeat({ fight: 5, other: Number.NaN, shelter: -1, fleeDry: 'junk', fleeShore: 3, shoreNoCell: 0 })
  assert.deepEqual(seat, { cls: 'fight', owns: 5, ofMoments: 8, shareOfMoments: 0.625 })
})

test('the fold law: the subset skin and the episode books never join the presence book', () => {
  // fleeShorePlain is fleeShore's own skin (the subset, not a class); the
  // episode books (fightsWon, fightEndsOther, fleeHops, verdictFlips,
  // reVerdicts, kills) carry their own rows and never enter presence.
  const seat = houndAnswerSeat({ fight: 3, fleeShore: 2, fleeShorePlain: 2, fightsWon: 9, fightEndsOther: 4, fleeHops: 6, verdictFlips: 5, reVerdicts: 2, kills: 1, presence: 5 })
  assert.deepEqual(seat, { cls: 'fight', owns: 3, ofMoments: 5, shareOfMoments: 0.6 })
})

test('the branch law: the riders speak only when the seat rode silent', () => {
  assert.equal(houndAnswerRiders({ fight: 20, fleeDry: 3, shelter: 5, fleeShore: 1, other: 10 }), null) // the solo class owns 51.3% - the seat's own face
  const riders = houndAnswerRiders(FACE195) // the tie - the riders' own face
  assert.equal(riders.leader, 'fight') // the byte law: equal counts, byte asc
  assert.equal(riders.runner, 'other')
  assert.equal(riders.duet, true)
  assert.equal(riders.pairOwns, 30)
  assert.equal(riders.ofMoments, 39)
  assert.equal(houndAnswerRiders({ fight: 4 }), null) // the solo face - the seat's own
})

test("the riders row byte-exact (face 195's own tie face)", () => {
  assert.equal(
    houndAnswerRidersRow(houndAnswerRiders(FACE195)),
    "the answer book's own riders (v0.925.0): no solo answer owns the majority - fight x15 + other x15 own 30 of 39 answer moment(s) (76.9%) - THE ANSWER'S OWN MIX: the seat's tie law held, the answers are the shape - the classes' own spread prices the pressure the solo law refused to seat"
  )
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(houndAnswerSeatRow(null), null)
  assert.equal(houndAnswerSeatRow(undefined), null)
  assert.equal(houndAnswerSeatRow('junk'), null)
  assert.equal(houndAnswerSeatRow({}), null)
  assert.equal(houndAnswerSeatRow({ cls: '', owns: 5, ofMoments: 5, shareOfMoments: 1 }), null)
  assert.equal(houndAnswerSeatRow({ cls: 'fight', owns: 0, ofMoments: 5, shareOfMoments: 0 }), null)
  assert.equal(houndAnswerSeatRow({ cls: 'fight', owns: 9, ofMoments: 5, shareOfMoments: 1.8 }), null) // owns > ofMoments
  assert.equal(houndAnswerRidersRow(null), null)
  assert.equal(houndAnswerRidersRow(undefined), null)
  assert.equal(houndAnswerRidersRow('junk'), null)
  assert.equal(houndAnswerRidersRow({}), null)
  assert.equal(houndAnswerRidersRow({ leader: 'fight', leaderOwns: 15, runner: '', runnerOwns: 15, pairOwns: 30, ofMoments: 39, shareOfMoments: 0.769 }), null)
  assert.equal(houndAnswerRidersRow({ leader: 'fight', leaderOwns: 15, runner: 'other', runnerOwns: 15, pairOwns: 45, ofMoments: 39, shareOfMoments: 1.15 }), null) // pairOwns > ofMoments
})

test("WIRING: the answer book's seat rides decompose beside the v0.433.0 presence print (v0.925.0)", () => {
  const src = fs.readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes('houndAnswerSeat, houndAnswerSeatRow, houndAnswerRiders, houndAnswerRidersRow'), 'the seat joins the decompose import band')
  const presenceAt = src.indexOf('hound presence (any form)')
  const seatAt = src.indexOf('houndAnswerSeat(hound)')
  assert.ok(presenceAt > 0 && seatAt > presenceAt, 'the seat rides beside the presence print, never before it')
  const v791 = src.indexOf("(v0.791.0) THE HOUND KILL'S OWN ARENA")
  assert.ok(v791 > 0 && seatAt < v791, 'the answer seat rides the presence block (the answer axis, before the kill book\'s own arena)')
})
