import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rescueUnclosedBlind, rescueUnclosedBlindConsistent, rescueUnclosedBlindRow } from '../../src/lib/rescueblind.mjs'
import { ARM_O2_RE } from '../../src/lib/o2arm.mjs'

test("the unclosed starts' own blind (v0.976.22) - the fold, the fence, the word", () => {
  // the FACE 316 = 38487495082 read's own shape byte-exact: F17's
  // unclosed start rode 'oxygen -1' - the emitter's own grammar names
  // the byte (ARM_O2_RE '(-1|\d+)', the arm's own law: the blind skin
  // rides -1, the sensor's own death before the arm) while the airs'
  // own fork (\d+) priced it unnamed
  const face316Book = [
    'F17 [F17] water: drowning rescue start (drowning, oxygen -1)',
    'F15 [F15] water: drowning rescue start (drowning, oxygen 4)',
    'F12 [F12] water: drowning rescue start (drowning, oxygen 5)',
    'F1 [F1] water: drowning rescue start (drowning, oxygen 4)'
  ]
  assert.equal(ARM_O2_RE.exec(face316Book[0])[2], '-1', 'the emitter grammar reads the blind byte whole')
  const f316 = rescueUnclosedBlind(face316Book)
  assert.equal(rescueUnclosedBlindConsistent(f316), true)
  assert.equal(f316.blind, 1)
  assert.equal(f316.unmatchable, 0)
  const row1 = rescueUnclosedBlindRow(f316)
  assert.ok(row1.includes("the unclosed starts' own blind (v0.976.22): 1 unclosed start(s) rode the -1 air byte"))
  assert.ok(row1.includes("the emitter's own grammar names the blind skin: the sensor's own death before the arm"))
  // the airs belong to the airs' own words - the blind counts nothing
  // of them (the all-airs book prices the honest zero row)
  const allAirs = rescueUnclosedBlind([
    'F15 [F15] water: drowning rescue start (drowning, oxygen 4)',
    'F12 [F12] water: drowning rescue start (drowning, oxygen 5)'
  ])
  assert.equal(allAirs.blind, 0)
  assert.equal(allAirs.unmatchable, 0)
  assert.equal(rescueUnclosedBlindRow(allAirs), null)
  // the honest zero: a blindless book prices the honest silence
  assert.equal(rescueUnclosedBlindRow({ blind: 0, unmatchable: 2 }), null)
  // the fallback line the emitter's grammar cannot read rides the
  // unmatchable count (the honest junk the fold refuses to name)
  const withJunk = rescueUnclosedBlind(face316Book.concat(['(start line unavailable)', 'junk line']))
  assert.equal(withJunk.blind, 1)
  assert.equal(withJunk.unmatchable, 2)
  // every line blind - the plural word
  const allBlind = rescueUnclosedBlind([
    'F17 [F17] water: drowning rescue start (drowning, oxygen -1)',
    'F9 [F9] water: drowning rescue start (drowning, oxygen -1)'
  ])
  assert.equal(allBlind.blind, 2)
  assert.ok(rescueUnclosedBlindRow(allBlind).includes('2 unclosed start(s) rode the -1 air byte'))
  // the junk seats
  assert.equal(rescueUnclosedBlind(null), null)
  assert.equal(rescueUnclosedBlind(undefined), null)
  assert.equal(rescueUnclosedBlind('junk'), null)
  assert.equal(rescueUnclosedBlind([42]), null)
  assert.equal(rescueUnclosedBlindRow(null), null)
  assert.equal(rescueUnclosedBlindRow('junk'), null)
  assert.equal(rescueUnclosedBlindRow(undefined), null)
  assert.equal(rescueUnclosedBlindRow({ blind: 1 }), null)
  assert.equal(rescueUnclosedBlindRow({ unmatchable: 0 }), null)
  assert.equal(rescueUnclosedBlindRow([1]), null)
  assert.equal(rescueUnclosedBlindConsistent(null), false)
  assert.equal(rescueUnclosedBlindConsistent(42), false)
  assert.equal(rescueUnclosedBlindConsistent([0]), false)
})

test("the unclosed starts' own blind fence (v0.976.22) - the image, the count, the lie", () => {
  const base = { blind: 1, unmatchable: 0 }
  assert.equal(rescueUnclosedBlindConsistent(base), true)
  // the honest zeros: a clean empty book prices the honest image
  assert.equal(rescueUnclosedBlindConsistent({ blind: 0, unmatchable: 0 }), true)
  // the blind count rides a non-negative integer
  assert.equal(rescueUnclosedBlindConsistent({ ...base, blind: 1.5 }), false, 'a fractional blind count lies')
  assert.equal(rescueUnclosedBlindConsistent({ ...base, blind: -1 }), false, 'a negative blind count lies')
  // the unmatchable count rides a non-negative integer
  assert.equal(rescueUnclosedBlindConsistent({ ...base, unmatchable: 2.5 }), false, 'a fractional unmatchable count lies')
  assert.equal(rescueUnclosedBlindConsistent({ ...base, unmatchable: -2 }), false, 'a negative unmatchable count lies')
  assert.equal(rescueUnclosedBlindConsistent({ ...base, blind: null }), false, 'a missing blind count lies')
  assert.equal(rescueUnclosedBlindConsistent({ ...base, unmatchable: null }), false, 'a missing unmatchable count lies')
})
