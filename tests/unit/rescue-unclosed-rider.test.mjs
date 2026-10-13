import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rescueUnclosedRider, rescueUnclosedRiderConsistent, rescueUnclosedRiderRow } from '../../src/lib/rescue-ledger.mjs'

test("the unclosed starts' own rider (v0.976.15) - the fold, the fence, the word", () => {
  // the FACE 312 = 38466304299 read's own shape byte-exact: the three
  // unclosed starts rode F15, F16, F17 - x1 each, the spread's own mix
  // (the fold prices the bots the book held)
  const face312 = [
    'F15 [F15] water: drowning rescue start (drowning, oxygen 1)',
    'F16 [F16] water: drowning rescue start (drowning, oxygen 13)',
    'F17 [F17] water: drowning rescue start (drowning, oxygen 15)'
  ]
  const e1 = rescueUnclosedRider(face312)
  assert.equal(e1.count, 3)
  assert.deepEqual(e1.perBot, { F15: 1, F16: 1, F17: 1 })
  assert.equal(e1.unpriced, 0)
  assert.equal(rescueUnclosedRiderConsistent(e1), true)
  const row1 = rescueUnclosedRiderRow(e1)
  assert.ok(row1.includes("the unclosed starts' own riders (v0.976.15): no solo bot owns the book - F15 x1 + F16 x1 own 2 of 3 unclosed start(s) (66.7%)"))
  assert.ok(row1.includes("THE WALK'S OWN SPREAD"))
  // the solo seat: one bot's own client owns the book whole - even 1 of 1
  // names the seat (the explosion book's own attacker law)
  const solo = rescueUnclosedRider([
    'F9 [F9] water: drowning rescue start (drowning, oxygen 14)',
    'F9 [F9] water: drowning rescue start (drowning, oxygen 8)',
    'F9 [F9] water: drowning rescue start (drowning, oxygen 2)'
  ])
  assert.equal(solo.count, 3)
  assert.deepEqual(solo.perBot, { F9: 3 })
  assert.equal(rescueUnclosedRiderConsistent(solo), true)
  const rowS = rescueUnclosedRiderRow(solo)
  assert.ok(rowS.includes("the unclosed starts' own rider (v0.976.15): F9 owns 3 of 3 unclosed start(s) (100.0%)"))
  assert.ok(rowS.includes("THE WALK'S OWN SEAT"))
  const oneOfOne = rescueUnclosedRider(['F12 [F12] water: drowning rescue start (drowning, oxygen 9)'])
  assert.equal(oneOfOne.count, 1)
  const row1of1 = rescueUnclosedRiderRow(oneOfOne)
  assert.ok(row1of1.includes('F12 owns 1 of 1 unclosed start(s) (100.0%)'))
  // the honest silence: no unclosed starts - the word prices nothing
  const e2 = rescueUnclosedRider([])
  assert.equal(e2.count, 0)
  assert.deepEqual(e2.perBot, {})
  assert.equal(e2.unpriced, 0)
  assert.equal(rescueUnclosedRiderConsistent(e2), true)
  assert.equal(rescueUnclosedRiderRow(e2), null)
  // the honest unpriced seat: a start line without the leading bot tag
  // rides the unpriced count (the ledger's own botOf law - the fold
  // prices what rode, never invents)
  const e3 = rescueUnclosedRider([
    'F10 [F10] water: drowning rescue start (drowning, oxygen 13)',
    '[F18] water: drowning rescue start (drowning, oxygen 7)'
  ])
  assert.equal(e3.count, 1)
  assert.deepEqual(e3.perBot, { F10: 1 })
  assert.equal(e3.unpriced, 1)
  assert.equal(rescueUnclosedRiderConsistent(e3), true)
  const row3 = rescueUnclosedRiderRow(e3)
  assert.ok(row3.includes('F10 owns 1 of 1'))
  // the junk seats
  assert.equal(rescueUnclosedRider(null), null)
  assert.equal(rescueUnclosedRider('junk'), null)
  assert.equal(rescueUnclosedRider([42]), null)
  assert.equal(rescueUnclosedRiderRow(null), null)
  assert.equal(rescueUnclosedRiderRow('junk'), null)
  assert.equal(rescueUnclosedRiderRow({ count: 0, perBot: {}, unpriced: 0 }), null)
})

test("the unclosed starts' own rider fence (v0.976.15) - the image, the bot shape, the lie", () => {
  const base = { count: 3, perBot: { F15: 1, F16: 1, F17: 1 }, unpriced: 0 }
  assert.equal(rescueUnclosedRiderConsistent(base), true)
  // the honest zeros: a startless fold prices the empty book
  assert.equal(rescueUnclosedRiderConsistent({ count: 0, perBot: {}, unpriced: 2 }), true)
  // the bot tag rides the F-shape
  assert.equal(rescueUnclosedRiderConsistent({ count: 1, perBot: { X15: 1 }, unpriced: 0 }), false, 'a non-F bot tag lies')
  assert.equal(rescueUnclosedRiderConsistent({ count: 1, perBot: { F: 1 }, unpriced: 0 }), false, 'a bare F tag lies')
  // the counts ride positive integers
  assert.equal(rescueUnclosedRiderConsistent({ count: 1, perBot: { F15: 0 }, unpriced: 0 }), false, 'a zero count lies')
  assert.equal(rescueUnclosedRiderConsistent({ count: 1, perBot: { F15: -1 }, unpriced: 0 }), false, 'a negative count lies')
  assert.equal(rescueUnclosedRiderConsistent({ count: 1, perBot: { F15: 1.5 }, unpriced: 0 }), false, 'a fractional count lies')
  // the fold's own image: the counts recount the priced starts exactly
  assert.equal(rescueUnclosedRiderConsistent({ count: 2, perBot: { F15: 1 }, unpriced: 0 }), false, 'an under-count lies')
  assert.equal(rescueUnclosedRiderConsistent({ count: 1, perBot: { F15: 2 }, unpriced: 0 }), false, 'an over-count lies')
  // a startless fold with a priced bot lies
  assert.equal(rescueUnclosedRiderConsistent({ count: 0, perBot: { F15: 1 }, unpriced: 0 }), false, 'a startless priced bot lies')
  // the negative unpriced seat lies
  assert.equal(rescueUnclosedRiderConsistent({ count: 1, perBot: { F15: 1 }, unpriced: -1 }), false)
  // the junk folds
  assert.equal(rescueUnclosedRiderConsistent(null), false)
  assert.equal(rescueUnclosedRiderConsistent('junk'), false)
  assert.equal(rescueUnclosedRiderConsistent([1, 2]), false)
  assert.equal(rescueUnclosedRiderConsistent({ count: 1, unpriced: 0 }), false, 'a missing perBot cell lies')
  assert.equal(rescueUnclosedRiderConsistent({ count: 1, perBot: [1], unpriced: 0 }), false, 'an array perBot lies')
})
