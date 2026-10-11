// (v0.923.0) THE STICKY BOOK'S OWN SEAT - the rescue ends' bot axis joins
// the seat law family. Tests feed the face-195 (38094958336) verbatim
// sticky cells, the fold law (the clean closes stay out), the boundary
// law, the junk battery, and the decompose wiring pin (the CENSUS GUARD
// law).
import { stickySeat, stickySeatRow, stickyRiders, stickyRidersRow } from '../../src/lib/stickyseat.mjs'
import fs from 'node:fs'
import assert from 'node:assert'
import { test } from 'node:test'

// Face 195's own verbatim per-bot sticky cells (the decompose print's own
// numbers: F11{frozenStanddown=3} F10{frozenStanddown=1} F6{timeout=2} -
// 6 sticky ends over 3 bots, F11 at exactly half).
const FACE195 = { F11: { starts: 3, frozenStanddown: 3 }, F10: { starts: 1, frozenStanddown: 1 }, F6: { starts: 18, complete: 7, completeStandingWet: 4, released: 5, timeout: 2 } }

test("the strict-majority seat shape (the fold reads the ledger's own cells, the clean closes stay out)", () => {
  // F6 owns 3 sticky ends (frozen 2 + timeout 1), F11 owns 1; the clean
  // closes (complete 7 / standing-wet / released 5) and starts never join.
  const seat = stickySeat({ F6: { starts: 8, frozenStanddown: 2, timeout: 1, complete: 7, released: 5 }, F11: { frozenStanddown: 1 } })
  assert.deepEqual(seat, { bot: 'F6', owns: 3, ofSticky: 4, shareOfSticky: 0.75 })
})

test('the seat row byte-exact', () => {
  assert.equal(
    stickySeatRow(stickySeat({ F6: { starts: 8, frozenStanddown: 2, timeout: 1, complete: 7, released: 5 }, F11: { frozenStanddown: 1 } })),
    "the sticky book's own bot (v0.923.0): F6 owns 3 of 4 sticky end(s) (75.0%) - THE STICKY BOOK'S OWN SEAT: one bot's own frozen and timed-out closes own the sticky book - the reconnect lane's own front prices the bot the raw split rode unnamed"
  )
})

test("the boundary law on face 195's own verbatim book: a bot at exactly half owns nothing (the tie law)", () => {
  assert.equal(stickySeat(FACE195), null) // F11 x3 of 6 - the tie owns nothing
  // The spread's own tie: 3 vs 3 reads the null too.
  assert.equal(stickySeat({ F11: { frozenStanddown: 3 }, F6: { timeout: 3 } }), null)
})

test('the solo face: one bot owns the whole sticky book (100%)', () => {
  const seat = stickySeat({ F11: { starts: 3, frozenStanddown: 4 } })
  assert.deepEqual(seat, { bot: 'F11', owns: 4, ofSticky: 4, shareOfSticky: 1 })
})

test("the byte law: the riders rank counts desc, equal counts ride the bot's own byte asc; a two-way tie never seats", () => {
  // The seat stays silent (4 of 9 owns no majority) - the riders' own face.
  const riders = stickyRiders({ F14: { frozenStanddown: 4 }, F9: { timeout: 3 }, F1: { dead: 2 } })
  assert.equal(riders.leader, 'F14')
  assert.equal(riders.runner, 'F9')
  assert.equal(riders.duet, false)
  // The equal-count tie: byte asc breaks it (F14 < F9).
  const duet = stickyRiders({ F9: { frozenStanddown: 4 }, F14: { timeout: 4 }, F1: { dead: 1 } })
  assert.equal(duet.leader, 'F14')
  assert.equal(duet.runner, 'F9')
  assert.equal(duet.duet, true)
  // The seat's own scan never seats a two-way tie: the pair's own mass
  // always meets or beats the top (the storm-has-no-seat law).
  assert.equal(stickySeat({ F14: { frozenStanddown: 4 }, F9: { timeout: 4 }, F1: { dead: 1 } }), null)
})

test('the honest silences: the empty and junk books read the null', () => {
  assert.equal(stickySeat(null), null)
  assert.equal(stickySeat(undefined), null)
  assert.equal(stickySeat('junk'), null)
  assert.equal(stickySeat([]), null)
  assert.equal(stickySeat({}), null)
  assert.equal(stickySeat({ F11: { starts: 5, complete: 2, released: 3 } }), null) // a zero sticky book
  assert.equal(stickySeat({ junk: 5, 'X1': { frozenStanddown: 2 } }), null) // every bot key malformed
})

test("the junk-row law: malformed keys, non-object rows and non-finite cells are skipped, the real cells still tally", () => {
  // F11 3 sticky + F6 2 sticky (the junk rows and cells ride out) = 5.
  const seat = stickySeat({ F11: { frozenStanddown: 3 }, junk: { timeout: 9 }, X1: { dead: 2 }, F6: { timeout: 2, botGone: -1, abortedError: Number.NaN }, lonely: 'junk' })
  assert.deepEqual(seat, { bot: 'F11', owns: 3, ofSticky: 5, shareOfSticky: 0.6 })
})

test('the branch law: the riders speak only when the seat rode silent', () => {
  assert.equal(stickyRiders({ F6: { starts: 8, frozenStanddown: 2, timeout: 1, complete: 7, released: 5 }, F11: { frozenStanddown: 1 } }), null) // the solo bot owns 75% - the seat's own face
  const riders = stickyRiders(FACE195) // the tie - the riders' own face
  assert.equal(riders.leader, 'F11')
  assert.equal(riders.runner, 'F6')
  assert.equal(riders.duet, false)
  assert.equal(riders.pairN, 5)
  assert.equal(riders.ofSticky, 6)
  assert.equal(stickyRiders({ F11: { frozenStanddown: 4 } }), null) // the solo face - the seat's own
})

test("the riders row byte-exact (face 195's own tie face)", () => {
  assert.equal(
    stickyRidersRow(stickyRiders(FACE195)),
    "the sticky book's own riders (v0.923.0): no solo bot owns the majority - F11 x3 + F6 x2 own 5 of 6 sticky end(s) (83.3%) - THE STICKY'S OWN MIX: the seat's tie law held, the bots are the shape - the sticky ends' own spread prices the churn the solo law refused to seat"
  )
})

test('the fold law: only the five sticky classes count - the clean closes, starts and unclosed never join the book', () => {
  // F6 carries 2 sticky ends beside a heavy clean book; F9 carries 1.
  const seat = stickySeat({ F6: { starts: 20, frozenStanddown: 2, complete: 9, completeStandingWet: 3, released: 9, unclosed: 1 }, F9: { timeout: 1 } })
  assert.deepEqual(seat, { bot: 'F6', owns: 2, ofSticky: 3, shareOfSticky: 0.667 })
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(stickySeatRow(null), null)
  assert.equal(stickySeatRow(undefined), null)
  assert.equal(stickySeatRow('junk'), null)
  assert.equal(stickySeatRow({}), null)
  assert.equal(stickySeatRow({ bot: '', owns: 5, ofSticky: 5, shareOfSticky: 1 }), null)
  assert.equal(stickySeatRow({ bot: 'F6', owns: 0, ofSticky: 5, shareOfSticky: 0 }), null)
  assert.equal(stickySeatRow({ bot: 'F6', owns: 9, ofSticky: 5, shareOfSticky: 1.8 }), null) // owns > ofSticky
  assert.equal(stickyRidersRow(null), null)
  assert.equal(stickyRidersRow(undefined), null)
  assert.equal(stickyRidersRow('junk'), null)
  assert.equal(stickyRidersRow({}), null)
  assert.equal(stickyRidersRow({ leader: 'F11', leaderN: 3, runner: '', runnerN: 2, pairN: 5, ofSticky: 6, shareOfSticky: 0.833 }), null)
  assert.equal(stickyRidersRow({ leader: 'F11', leaderN: 3, runner: 'F6', runnerN: 2, pairN: 9, ofSticky: 6, shareOfSticky: 1.5 }), null) // pairN > ofSticky
})

test("WIRING: the sticky book's seat rides decompose beside the per-bot ends print (v0.923.0)", () => {
  const src = fs.readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes('stickySeat, stickySeatRow, stickyRiders, stickyRidersRow'), 'the seat joins the decompose import band')
  const perBotAt = src.indexOf("'  per-bot ends:'")
  const seatAt = src.indexOf('stickySeat(ledger.perBot)')
  assert.ok(perBotAt > 0 && seatAt > perBotAt, 'the seat rides beside the per-bot ends print, never before it')
  const v780 = src.indexOf('rescueEndBill(ledger.totals)')
  assert.ok(v780 > 0 && v780 < perBotAt, 'the ends bill rides the same ledger block (the bot axis rides the class bill\'s own scope)')
})
