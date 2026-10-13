import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rescueUnclosedOxygen, rescueUnclosedOxygenConsistent, rescueUnclosedOxygenRow } from '../../src/lib/rescue-ledger.mjs'

test("the unclosed starts' own oxygen (v0.976.14) - the fold, the fence, the word", () => {
  // the FACE 311 = 38466304299 read's own shape byte-exact: the two
  // unclosed starts rode oxygen 13 and oxygen 12 - the fold prices the
  // air the seat held
  const face311 = [
    '[F10] water: drowning rescue start (drowning, oxygen 13)',
    '[F15] water: drowning rescue start (drowning, oxygen 12)'
  ]
  const e1 = rescueUnclosedOxygen(face311)
  assert.equal(e1.count, 2)
  assert.equal(e1.min, 12)
  assert.equal(e1.max, 13)
  assert.equal(e1.sum, 25)
  assert.equal(e1.unpriced, 0)
  assert.equal(rescueUnclosedOxygenConsistent(e1), true)
  const row1 = rescueUnclosedOxygenRow(e1)
  assert.ok(row1.includes("the unclosed starts' own oxygen (v0.976.14): 2 unclosed start(s) rode oxygen 12..13 - the air the seat held when the walk never answered"))
  assert.ok(!row1.includes('rode the air unnamed'))
  // the honest silence: no unclosed starts - the word prices nothing
  const e2 = rescueUnclosedOxygen([])
  assert.equal(e2.count, 0)
  assert.equal(rescueUnclosedOxygenConsistent(e2), true)
  assert.equal(rescueUnclosedOxygenRow(e2), null)
  // the honest unpriced seat: a start line without the air byte rides
  // the unpriced count (the fold prices what rode, never invents)
  const e3 = rescueUnclosedOxygen([
    '[F10] water: drowning rescue start (drowning, oxygen 13)',
    '[F18] water: drowning rescue start (drowning, oxygen unknown)'
  ])
  assert.equal(e3.count, 1)
  assert.equal(e3.min, 13)
  assert.equal(e3.max, 13)
  assert.equal(e3.unpriced, 1)
  assert.equal(rescueUnclosedOxygenConsistent(e3), true)
  const row3 = rescueUnclosedOxygenRow(e3)
  assert.ok(row3.includes('1 unclosed start(s) rode oxygen 13..13'))
  assert.ok(row3.includes('1 start line(s) rode the air unnamed'))
  // the junk seats
  assert.equal(rescueUnclosedOxygen(null), null)
  assert.equal(rescueUnclosedOxygen('junk'), null)
  assert.equal(rescueUnclosedOxygen([42]), null)
  assert.equal(rescueUnclosedOxygenRow(null), null)
})

test("the unclosed starts' own oxygen fence (v0.976.14) - the image, the honest zeros, the lie", () => {
  const base = { count: 2, min: 12, max: 13, sum: 25, unpriced: 0 }
  assert.equal(rescueUnclosedOxygenConsistent(base), true)
  // the honest zeros: a startless fold prices min/max null, sum 0
  const zeros = { count: 0, min: null, max: null, sum: 0, unpriced: 1 }
  assert.equal(rescueUnclosedOxygenConsistent(zeros), true)
  // the fold's own image: zeros with a priced min lie
  const badZeros = { count: 0, min: 12, max: null, sum: 0, unpriced: 0 }
  assert.equal(rescueUnclosedOxygenConsistent(badZeros), false)
  // the air rides positive integers
  const badAir = { ...base, min: 0 }
  assert.equal(rescueUnclosedOxygenConsistent(badAir), false, 'oxygen 0 miscounts the air')
  // the max never under the min
  const badMax = { ...base, max: 11 }
  assert.equal(rescueUnclosedOxygenConsistent(badMax), false)
  // the sum rides the counts' own bounds
  const badSum = { ...base, sum: 5 }
  assert.equal(rescueUnclosedOxygenConsistent(badSum), false, 'the sum under the counts own floor lies')
  // the missing byte rides no row
  const missing = { ...base, count: undefined }
  assert.equal(rescueUnclosedOxygenConsistent(missing), false)
  // the junk folds
  assert.equal(rescueUnclosedOxygenConsistent(null), false)
  assert.equal(rescueUnclosedOxygenConsistent('junk'), false)
  assert.equal(rescueUnclosedOxygenConsistent([base]), false)
})
