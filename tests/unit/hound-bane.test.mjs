// (v0.929.0) THE BANE'S OWN SEAT - the hound defeat book's bot axis joins
// the seat law family. Tests feed the face-197 (38104329348) and face-196
// (38099550811) verbatim defeat cells, the boundary law, the junk
// battery, and the decompose wiring pin (the CENSUS GUARD law).
import { houndBaneSeat, houndBaneSeatRow, houndBaneRiders, houndBaneRidersRow } from '../../src/lib/houndcensus.mjs'
import fs from 'node:fs'
import assert from 'node:assert'
import { test } from 'node:test'

// Face 197's own verbatim defeat cells (the decompose print's own
// numbers: 'hound defeats (the fleet won - mob down): 2 per-bot: F12=1
// F16=1' - the two-way tie, the storm-has-no-seat field witness).
const FACE197 = { F12: 1, F16: 1 }
// Face 196's own verbatim defeat book (the solo face: one defeat, F16).
const FACE196 = { F16: 1 }

test("the strict-majority seat shape (the fold reads the census's own cells)", () => {
  // F16 owns 3 of 4 - above half, the seat's own face.
  const seat = houndBaneSeat({ fightsWonByBot: { F16: 3, F12: 1 } })
  assert.deepEqual(seat, { bot: 'F16', owns: 3, ofDefeats: 4, shareOfDefeats: 0.75 })
})

test('the seat row byte-exact', () => {
  assert.equal(
    houndBaneSeatRow(houndBaneSeat({ fightsWonByBot: { F16: 3, F12: 1 } })),
    "the defeat book's own bane (v0.929.0): F16 owns 3 of 4 hound defeat(s) (75.0%) - THE BANE'S OWN SEAT: one bot's own wins own the hound's defeat book - the fleet's own answer prices the hound the raw split rode unnamed"
  )
})

test("the boundary law on face 197's own verbatim book: the two-way tie owns nothing", () => {
  assert.equal(houndBaneSeat({ fightsWonByBot: FACE197 }), null) // F12 x1 + F16 x1 of 2 - exactly half each
  // The spread's own tie: the top's mass meets the rest exactly.
  assert.equal(houndBaneSeat({ fightsWonByBot: { F12: 2, F16: 1, F3: 1 } }), null) // 2 vs 2
  assert.equal(houndBaneSeat({ fightsWonByBot: { F16: 3, F12: 3, F4: 1 } }), null) // 3 vs 4
})

test("the solo face on face 196's own verbatim book: one bot owns the whole defeat book (100%)", () => {
  const seat = houndBaneSeat({ fightsWonByBot: FACE196 })
  assert.deepEqual(seat, { bot: 'F16', owns: 1, ofDefeats: 1, shareOfDefeats: 1 })
})

test("the byte law: the riders rank counts desc, equal counts ride the bot's own byte asc; a two-way tie never seats", () => {
  // The equal-count tie: byte asc breaks it (F12 < F16 - the census's own
  // insertion order never owns the ranking).
  const duet = houndBaneRiders({ fightsWonByBot: { F16: 3, F12: 3, F4: 1 } })
  assert.equal(duet.leader, 'F12')
  assert.equal(duet.runner, 'F16')
  assert.equal(duet.duet, true)
  // The seat's own scan never seats a two-way tie: the pair's own mass
  // always meets or beats the top (the storm-has-no-seat law).
  assert.equal(houndBaneSeat({ fightsWonByBot: { F16: 3, F12: 3, F4: 1 } }), null)
})

test('the honest silences: the empty and junk books read the null', () => {
  assert.equal(houndBaneSeat(null), null)
  assert.equal(houndBaneSeat(undefined), null)
  assert.equal(houndBaneSeat('junk'), null)
  assert.equal(houndBaneSeat({}), null)
  assert.equal(houndBaneSeat({ fightsWonByBot: null }), null)
  assert.equal(houndBaneSeat({ fightsWonByBot: {} }), null)
  assert.equal(houndBaneSeat({ fightsWonByBot: { junk: 5, X1: 2 } }), null) // every bot key malformed
  assert.equal(houndBaneSeat({ fightsWonByBot: { F16: 0 } }), null) // a zero-sum book
})

test("the junk-cell law: malformed keys and non-finite cells are skipped, the real cells still tally", () => {
  // F16 2 wins + F12 1 win = 3; the junk rows and cells ride out.
  const seat = houndBaneSeat({ fightsWonByBot: { F16: 2, junk: 5, X1: 1, F12: 1, lonely: 'junk' } })
  assert.deepEqual(seat, { bot: 'F16', owns: 2, ofDefeats: 3, shareOfDefeats: 0.667 })
})

test('the branch law: the riders speak only when the seat rode silent', () => {
  assert.equal(houndBaneRiders({ fightsWonByBot: { F16: 3, F12: 1 } }), null) // the solo bot owns 75% - the seat's own face
  const riders = houndBaneRiders({ fightsWonByBot: FACE197 }) // the tie - the riders' own face
  assert.equal(riders.leader, 'F12')
  assert.equal(riders.runner, 'F16')
  assert.equal(riders.duet, true)
  assert.equal(riders.pairOwns, 2)
  assert.equal(riders.ofDefeats, 2)
})

test("the riders' row byte-exact on face 197's own verbatim tie", () => {
  assert.equal(
    houndBaneRidersRow(houndBaneRiders({ fightsWonByBot: FACE197 })),
    "the defeat book's own bane (v0.929.0): no solo bot owns the majority - F12 x1 + F16 x1 own 2 of 2 hound defeat(s) (100.0%) - THE BANE'S OWN MIX: the seat's tie law held, the banes are the shape - the bots' own wins price the hound the solo law refused to seat"
  )
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(houndBaneSeatRow(null), null)
  assert.equal(houndBaneSeatRow(undefined), null)
  assert.equal(houndBaneSeatRow('junk'), null)
  assert.equal(houndBaneSeatRow({}), null)
  assert.equal(houndBaneSeatRow({ bot: '', owns: 1, ofDefeats: 1, shareOfDefeats: 1 }), null)
  assert.equal(houndBaneSeatRow({ bot: 'F16', owns: 0, ofDefeats: 5, shareOfDefeats: 0 }), null)
  assert.equal(houndBaneSeatRow({ bot: 'F16', owns: 9, ofDefeats: 5, shareOfDefeats: 1.8 }), null) // owns > ofDefeats
  assert.equal(houndBaneRidersRow(null), null)
  assert.equal(houndBaneRidersRow(undefined), null)
  assert.equal(houndBaneRidersRow('junk'), null)
  assert.equal(houndBaneRidersRow({}), null)
  assert.equal(houndBaneRidersRow({ leader: 'F12', leaderOwns: 1, runner: '', runnerOwns: 1, pairOwns: 2, ofDefeats: 2, shareOfDefeats: 1 }), null)
  assert.equal(houndBaneRidersRow({ leader: 'F12', leaderOwns: 1, runner: 'F16', runnerOwns: 1, pairOwns: 3, ofDefeats: 2, shareOfDefeats: 1.5 }), null) // pairOwns > ofDefeats
})

test("WIRING: the defeat book's bane seat rides decompose beside the hound defeats per-bot print (v0.929.0)", () => {
  const src = fs.readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes('houndBaneSeat, houndBaneSeatRow, houndBaneRiders, houndBaneRidersRow'), 'the seat joins the decompose import band')
  const defeatsAt = src.indexOf('hound defeats (the fleet won - mob down):')
  const baneAt = src.indexOf('houndBaneSeat(hound)')
  const episodeAt = src.indexOf('hound episode detail:')
  assert.ok(defeatsAt > 0 && baneAt > defeatsAt, 'the bane rides beside the defeats print, never before it')
  assert.ok(episodeAt > baneAt, 'the bane block rides before the episode detail print')
  const preyAt = src.indexOf('houndPreySeat(hound)')
  assert.ok(preyAt > 0 && preyAt < baneAt, 'the prey axis (the mirror) prints in the same block above the bane')
})
