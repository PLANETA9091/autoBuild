import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  liarLadderReachBook,
  liarLadderReachConsistent,
  liarLadderReachRow,
  liarLadderReachOwnerRow,
} from '../../src/lib/liarladder.mjs'
import { glitchStreakCap, GLITCH_ABANDON_PAGES } from '../../src/lib/drowning.mjs'

test("the liar ladder's own reach (v0.976.10) - FACE 308's own shape byte-exact", () => {
  // FACE 308 = 38446472656's own sequence: F17 ratcheted #1..#2 and
  // abandoned; F13 ratcheted #1..#2, abandoned, and kept counting to
  // #4 - the stand-down retires the lane, the confirmations keep
  // pricing the class's own evidence
  const lines = [
    '[F17] water: liar ladder ratchets - confirmed no-op glitch page #1, the next override needs 16 fresh critical-on-dry reads',
    '[F17] water: liar ladder ratchets - confirmed no-op glitch page #2, the next override needs 24 fresh critical-on-dry reads',
    '[F17] water: liar ladder abandons the glitch class - 2 confirmed no-op pages, the streak lane stands down (wet contact or a wet rescue re-arms)',
    '[F13] water: liar ladder ratchets - confirmed no-op glitch page #1, the next override needs 16 fresh critical-on-dry reads',
    '[F13] water: liar ladder ratchets - confirmed no-op glitch page #2, the next override needs 24 fresh critical-on-dry reads',
    '[F13] water: liar ladder abandons the glitch class - 2 confirmed no-op pages, the streak lane stands down (wet contact or a wet rescue re-arms)',
    '[F13] water: liar ladder ratchets - confirmed no-op glitch page #3, the next override needs 32 fresh critical-on-dry reads',
    '[F13] water: liar ladder ratchets - confirmed no-op glitch page #4, the next override needs 40 fresh critical-on-dry reads',
  ]
  const b = liarLadderReachBook(lines)
  assert.equal(b.ratchets, 6)
  assert.equal(b.reach, 4)
  assert.equal(b.capAtReach, glitchStreakCap(4))
  assert.equal(b.capAtReach, 40)
  assert.equal(b.abandons, 2)
  assert.equal(b.abandonPages, 4)
  assert.equal(b.resets, 0)
  assert.equal(b.unattributed, 0)
  assert.deepEqual(b.perBot, { F17: { pages: 2, deepest: 2 }, F13: { pages: 4, deepest: 4 } })
  assert.equal(liarLadderReachConsistent(b), true)
  const row = liarLadderReachRow(b)
  assert.ok(row.includes("(the liar ladder's own reach (v0.976.10): 6 ratchet(s), the deepest rung #4 - the next override's own bar 40 fresh critical-on-dry read(s)"))
  assert.ok(row.includes('the class stood down 2 time(s)'))
  assert.ok(row.includes('the re-arms 0'))
})

test("the liar ladder's own reach - the single rung and the honest silence", () => {
  // the single rung: one ratchet, no stand-down - the patience held
  const b1 = liarLadderReachBook([
    'noise line',
    '[F6] water: liar ladder ratchets - confirmed no-op glitch page #1, the next override needs 16 fresh critical-on-dry reads',
  ])
  assert.equal(b1.ratchets, 1)
  assert.equal(b1.reach, 1)
  assert.equal(b1.capAtReach, 16)
  assert.equal(liarLadderReachConsistent(b1), true)
  const row1 = liarLadderReachRow(b1)
  assert.ok(row1.includes('the deepest rung #1 - the next override\'s own bar 16 fresh critical-on-dry read(s) - the patience held, no stand-down, the re-arms 0'))
  // the honest silence: no ratchet rode - the row prices nothing
  const b2 = liarLadderReachBook(['[F6] water: rescue complete in 4.2s', ''])
  assert.deepEqual(b2, { ratchets: 0, reach: 0, capAtReach: 0, abandons: 0, abandonPages: 0, resets: 0, unattributed: 0, perBot: {} })
  assert.equal(liarLadderReachConsistent(b2), true)
  assert.equal(liarLadderReachRow(b2), null)
  // the whole-log form reads the same fold
  const whole = [
    '[F6] water: liar ladder ratchets - confirmed no-op glitch page #1, the next override needs 16 fresh critical-on-dry reads',
    'noise line',
  ]
  assert.deepEqual(liarLadderReachBook(whole.join('\n')), liarLadderReachBook(whole))
})

test("the liar ladder's own reach fence - the reach, the bar, the stand-down", () => {
  const base = { ratchets: 6, reach: 4, capAtReach: 40, abandons: 2, abandonPages: 4, resets: 0, unattributed: 0, perBot: { F13: { pages: 4, deepest: 4 }, F17: { pages: 2, deepest: 2 } } }
  assert.equal(liarLadderReachConsistent(base), true)
  // the reach never outruns the ratchets (a page-#N needs N confirmations)
  const overReach = { ...base, reach: 7 }
  assert.equal(liarLadderReachConsistent(overReach), false, 'a reach past the ratchet count lies')
  // the bar at the reach is the formula's own word
  const badCap = { ...base, capAtReach: 32 }
  assert.equal(liarLadderReachConsistent(badCap), false, 'a bar not matching glitchStreakCap(reach) lies')
  // the stand-down pins the reach at the page bound
  const lowAbandonReach = { ...base, reach: 1, capAtReach: 16 }
  assert.equal(liarLadderReachConsistent(lowAbandonReach), false, 'an abandon with no bot reaching the page bound lies')
  // every abandon owns its own pages
  const thinAbandonPages = { ...base, abandonPages: 2 }
  assert.equal(liarLadderReachConsistent(thinAbandonPages), false, 'an abandon line always carries its own confirmed-page count')
  // the empty fold names no reach
  const emptyWithReach = { ...base, ratchets: 0 }
  assert.equal(liarLadderReachConsistent(emptyWithReach), false)
  // the missing byte prices nothing
  const missing = { ...base, reach: undefined }
  assert.equal(liarLadderReachConsistent(missing), false)
  // the junk fold prices nothing
  assert.equal(liarLadderReachConsistent(null), false)
  assert.equal(liarLadderReachConsistent('junk'), false)
  assert.equal(liarLadderReachRow(null), null)
  // the bound constant rides the fleet's own law
  assert.equal(GLITCH_ABANDON_PAGES, 2)
})

test("the reach's own streak (v0.976.16) - FACE 312's own shape byte-exact", () => {
  // FACE 312 = 38466304299's own sequence, generated legal (a page-#N
  // needs N confirmations in its own streak): F9 ratcheted to the
  // deepest rung #92 (92 pages), F1 rode 64 pages to #58 (two streaks -
  // the re-arm re-climbs), F17 one page to #1 - the read priced the
  // owner by hand: the deepest rung #92 rode F9's own streak
  const lines = []
  for (let i = 1; i <= 92; i++) lines.push(`F9 [F9] water: liar ladder ratchets - confirmed no-op glitch page #${i}, the next override needs 40 fresh critical-on-dry reads`)
  for (let i = 1; i <= 58; i++) lines.push(`F1 [F1] water: liar ladder ratchets - confirmed no-op glitch page #${i}, the next override needs 40 fresh critical-on-dry reads`)
  for (let i = 1; i <= 6; i++) lines.push(`F1 [F1] water: liar ladder ratchets - confirmed no-op glitch page #${i}, the next override needs 40 fresh critical-on-dry reads`)
  lines.push('F17 [F17] water: liar ladder ratchets - confirmed no-op glitch page #1, the next override needs 16 fresh critical-on-dry reads')
  const b = liarLadderReachBook(lines)
  assert.equal(b.ratchets, 157)
  assert.equal(b.reach, 92)
  assert.equal(b.unattributed, 0)
  assert.deepEqual(b.perBot, { F9: { pages: 92, deepest: 92 }, F1: { pages: 64, deepest: 58 }, F17: { pages: 1, deepest: 1 } })
  assert.equal(liarLadderReachConsistent(b), true)
  const row = liarLadderReachOwnerRow(b)
  assert.ok(row.includes("(the reach's own streak (v0.976.16): F9 owns the deepest rung #92 - 92 of 157 ratchet(s) (58.6%) - THE REACH'S OWN SEAT"))
})

test("the reach's own streak - the tie's own law and the honest silence", () => {
  // the tie: two bots share the deepest rung - no solo streak owns it
  // (generated legal: each bot's own #4 needs four confirmations)
  const tieLines = []
  for (let i = 1; i <= 4; i++) tieLines.push(`[F1] water: liar ladder ratchets - confirmed no-op glitch page #${i}, the next override needs 40 fresh critical-on-dry reads`)
  for (let i = 1; i <= 4; i++) tieLines.push(`[F2] water: liar ladder ratchets - confirmed no-op glitch page #${i}, the next override needs 40 fresh critical-on-dry reads`)
  const tie = liarLadderReachBook(tieLines)
  assert.equal(tie.ratchets, 8)
  assert.equal(tie.reach, 4)
  assert.equal(liarLadderReachConsistent(tie), true)
  assert.ok(liarLadderReachOwnerRow(tie).includes('the tie\'s own law held - no solo streak owns the deepest rung #4 (2 bot(s) tied) - the tie\'s own silence'))
  // the honest silence: no ratchet rode - the owner word prices nothing
  const silent = liarLadderReachBook(['[F6] water: rescue complete in 4.2s'])
  assert.equal(liarLadderReachOwnerRow(silent), null)
  // the honest unpriced seat: the reach rode an unattributed line
  // (legal: the reach never outruns the ratchets)
  const unattr = {
    ratchets: 3, reach: 3, capAtReach: glitchStreakCap(3), abandons: 0, abandonPages: 0, resets: 0,
    unattributed: 1, perBot: { F1: { pages: 2, deepest: 2 } },
  }
  assert.equal(liarLadderReachConsistent(unattr), true)
  assert.ok(liarLadderReachOwnerRow(unattr).includes("the deepest rung's own streak rode unnamed - 1 unattributed page(s) (the honest unpriced seat)"))
})

test("the reach's own streak fence - the image, the deepest, the ownership", () => {
  const base = { ratchets: 6, reach: 4, capAtReach: 40, abandons: 0, abandonPages: 0, resets: 0, unattributed: 0, perBot: { F13: { pages: 4, deepest: 4 }, F17: { pages: 2, deepest: 2 } } }
  assert.equal(liarLadderReachConsistent(base), true)
  // the image law: every ratchet accounted (attributed + unattributed)
  const badImage = { ...base, unattributed: 1 }
  assert.equal(liarLadderReachConsistent(badImage), false, 'pages the image cannot account lie')
  // the deepest never outruns the reach
  const overDeepest = { ...base, perBot: { F13: { pages: 4, deepest: 6 }, F17: { pages: 2, deepest: 2 } } }
  assert.equal(liarLadderReachConsistent(overDeepest), false, 'a deepest past the reach lies')
  // the ownership law: all pages attributed and no bot owns the reach
  const unowned = { ...base, reach: 5, capAtReach: glitchStreakCap(5) }
  assert.equal(liarLadderReachConsistent(unowned), false, 'an unowned reach with zero unattributed pages lies')
  // the thin page prices nothing
  const thinPages = { ...base, perBot: { F13: { pages: 0, deepest: 4 }, F17: { pages: 2, deepest: 2 } } }
  assert.equal(liarLadderReachConsistent(thinPages), false)
  // a non-bot key prices nothing
  const badKey = { ...base, perBot: { X1: { pages: 4, deepest: 4 }, F17: { pages: 2, deepest: 2 } } }
  assert.equal(liarLadderReachConsistent(badKey), false)
  // the missing streak byte prices nothing
  assert.equal(liarLadderReachConsistent({ ...base, perBot: undefined }), false)
  assert.equal(liarLadderReachConsistent({ ...base, unattributed: undefined }), false)
  // the junk owner row prices nothing
  assert.equal(liarLadderReachOwnerRow(null), null)
  assert.equal(liarLadderReachOwnerRow('junk'), null)
})

test("the liar ladder's own reach - junk-safe and the lie prices nothing", () => {
  assert.equal(liarLadderReachBook(null), null)
  assert.equal(liarLadderReachBook(undefined), null)
  assert.equal(liarLadderReachBook(42), null)
  // a ratchet keyword line without a parseable page counts but breaks
  // the reach law - the whole fold prices nothing (the lie's own
  // contrapositive is absolute)
  const b = liarLadderReachBook(['[F6] water: liar ladder ratchets - corrupted page'])
  assert.equal(b.ratchets, 1)
  assert.equal(b.reach, 0)
  assert.equal(liarLadderReachConsistent(b), false)
  assert.equal(liarLadderReachRow(b), null)
})
