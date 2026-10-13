import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  liarLadderReachBook,
  liarLadderReachConsistent,
  liarLadderReachRow,
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
  assert.deepEqual(b2, { ratchets: 0, reach: 0, capAtReach: 0, abandons: 0, abandonPages: 0, resets: 0 })
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
  const base = { ratchets: 6, reach: 4, capAtReach: 40, abandons: 2, abandonPages: 4, resets: 0 }
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
