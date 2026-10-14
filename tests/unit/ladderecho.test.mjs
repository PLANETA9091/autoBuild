import { test } from 'node:test'
import assert from 'node:assert/strict'
import { ladderEchoRow, ladderEchoConsistent, reachOwner } from '../../src/lib/ladderecho.mjs'
import { glitchStreakCap } from '../../src/lib/drowning.mjs'

test("the ladder's own streak echo (v0.976.35) - the fold, the fence, the word", () => {
  // the field's own books, hand-copied from the real reads (the census
  // owns the fold - the tests pin the law's own shape, the real logs
  // ride decompose itself)
  // FACE 324's own book: F6 owned 11 of 11 = 100.0%, the deepest rung #11
  const face324 = { ratchets: 11, reach: 11, capAtReach: glitchStreakCap(11), abandons: 0, abandonPages: 0, resets: 0, unattributed: 0, perBot: { F6: { pages: 11, deepest: 11 } } }
  // FACE 312's own book (the lib header's own read): the deepest rung
  // #92 rode F9's own streak 92 of 157, F1 64 to #58, F17 1 to #1
  const face312 = { ratchets: 157, reach: 92, capAtReach: glitchStreakCap(92), abandons: 0, abandonPages: 0, resets: 0, unattributed: 0, perBot: { F9: { pages: 92, deepest: 92 }, F1: { pages: 64, deepest: 58 }, F17: { pages: 1, deepest: 1 } } }
  // FACE 325's own book: the tie's own law held (no solo streak owns
  // the reach) - two bots tied at the deepest rung #2 of 5 ratchets
  const face325 = { ratchets: 5, reach: 2, capAtReach: glitchStreakCap(2), abandons: 0, abandonPages: 0, resets: 0, unattributed: 0, perBot: { F14: { pages: 3, deepest: 2 }, F6: { pages: 2, deepest: 2 } } }
  // the quiet ladder's own book (FACE 323's own shape: no ratchet rode)
  const quiet = { ratchets: 0, reach: 0, capAtReach: 0, abandons: 0, abandonPages: 0, resets: 0, unattributed: 0, perBot: {} }
  // the owner atom: the named seat, the tie's silence, the quiet
  // ladder's silence
  assert.deepEqual(reachOwner(face324), { bot: 'F6', pages: 11, deepest: 11, reach: 11, ratchets: 11 })
  assert.deepEqual(reachOwner(face312), { bot: 'F9', pages: 92, deepest: 92, reach: 92, ratchets: 157 })
  assert.equal(reachOwner(face325), null)
  assert.equal(reachOwner(quiet), null)
  assert.equal(reachOwner(null), null)
  // the TURN's own shape byte-exact: the field's own arithmetic - FACE
  // 312's F9 rode #92 of 157, FACE 324's F6 rode #11 of 11 - the
  // seat's own trade priced by the law (the consecutive-face ride
  // awaits the field)
  const turn = ladderEchoRow({ prevBook: face324, curBook: face312 })
  assert.ok(turn.includes("the ladder's own streak echo (v0.976.35): F9 took the reach's seat F6 rode - the deepest rung's own owner traded between the walks (#11 prior, #92 this face)"))
  assert.ok(turn.includes("- the streak's own turn (no dynasty rode unnamed)"))
  // the DYNASTY's own shape byte-exact: the same streak owning the
  // deepest rung both faces (the law's own shape - the field ride
  // awaits)
  const dynasty = ladderEchoRow({ prevBook: face324, curBook: { ratchets: 8, reach: 8, capAtReach: glitchStreakCap(8), abandons: 0, abandonPages: 0, resets: 0, unattributed: 0, perBot: { F6: { pages: 8, deepest: 8 } } } })
  assert.ok(dynasty.includes("the ladder's own streak echo (v0.976.35): F6's own reach repeated - the deepest rung rode the same streak again (#11 prior, #8 this face, 8 of 8 ratchet(s))"))
  assert.ok(dynasty.includes("- the streak's own dynasty holding (the reach's seat never traded)"))
  // the honest silences: the tie owns nothing either face, the quiet
  // ladder owns no streak (the real field's own shapes: 324 -> 325 the
  // seat emptied into the tie, 323 -> 324 the streak's birth)
  assert.equal(ladderEchoRow({ prevBook: face324, curBook: face325 }), null)
  assert.equal(ladderEchoRow({ prevBook: quiet, curBook: face324 }), null)
  assert.equal(ladderEchoRow({ prevBook: face324, curBook: quiet }), null)
  // the unnamed share names nothing (the honest unpriced seat)
  const unnamed = { ratchets: 4, reach: 4, capAtReach: glitchStreakCap(4), abandons: 0, abandonPages: 0, resets: 0, unattributed: 4, perBot: {} }
  assert.equal(reachOwner(unnamed), null)
  assert.equal(ladderEchoRow({ prevBook: face324, curBook: unnamed }), null)
  // the fence: the fold must prove itself (the family's own law
  // imported whole - an inconsistent book prices nothing)
  assert.equal(ladderEchoConsistent({ prevBook: face324, curBook: face312 }), true)
  assert.equal(ladderEchoConsistent({ prevBook: face324, curBook: { ratchets: 5, reach: 9, capAtReach: glitchStreakCap(9), abandons: 0, abandonPages: 0, resets: 0, unattributed: 0, perBot: {} } }), false)
  assert.equal(ladderEchoConsistent(null), false)
  assert.equal(ladderEchoConsistent({ prevBook: null, curBook: face324 }), false)
  assert.equal(ladderEchoRow({ prevBook: null, curBook: face324 }), null)
  assert.equal(ladderEchoRow({ prevBook: face324, curBook: null }), null)
})
