// Tests for the blazefuel word (src/lib/blazefuel.mjs).
// The brewing front's own fuel leg: the brewstand word's ROD LAW's
// own named future priced - 1 blaze rod -> 2 blaze powders, vanilla
// (the shapeless split, the craft free, the fire never rides). Pure
// arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideBlazeFuel, BLAZEFUEL_ROD_PER_SPLIT, BLAZEFUEL_POWDER_PER_SPLIT } from '../../src/lib/blazefuel.mjs'

test('junk: a non-finite rod count refuses with junk-input', () => {
  const v = decideBlazeFuel({ rodCount: Number.NaN, powderCount: 5 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.powderYield, 0)
})

test('junk: a non-finite powder count refuses (both legs policed)', () => {
  const v = decideBlazeFuel({ rodCount: 2, powderCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideBlazeFuel({ rodCount: true, powderCount: 5 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideBlazeFuel({ rodCount: 2, powderCount: '5' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - rod-empty keeps, never poisons', () => {
  const v = decideBlazeFuel({ rodCount: -3, powderCount: -9 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'rod-empty')
  assert.equal(v.powderLeft, 0)
  assert.equal(v.splits, 0)
})

test('keep gate first: rod-empty keeps even powder-rich (the supply word owns its silence)', () => {
  const v = decideBlazeFuel({ rodCount: 0, powderCount: 72 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'rod-empty')
  assert.equal(v.powderLeft, 72)
  assert.equal(v.splits, 0)
})

test('vanilla pins: one rod mints two powders', () => {
  assert.equal(BLAZEFUEL_ROD_PER_SPLIT, 1)
  assert.equal(BLAZEFUEL_POWDER_PER_SPLIT, 2)
})

test('one rod: one honest split, two powders, the rod spent', () => {
  const v = decideBlazeFuel({ rodCount: 1, powderCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'rod-affordable')
  assert.equal(v.splits, 1)
  assert.equal(v.powderYield, 2)
  assert.equal(v.rodLeft, 0)
  assert.equal(v.powderLeft, 0)
})

test('two rods: two splits, four powders (the ratio exact)', () => {
  const v = decideBlazeFuel({ rodCount: 2, powderCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.splits, 2)
  assert.equal(v.powderYield, 4)
  assert.equal(v.rodLeft, 0)
})

test('held powders ride through: the yield never silently merged into the pocket', () => {
  const v = decideBlazeFuel({ rodCount: 2, powderCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.splits, 2)
  assert.equal(v.powderYield, 4)
  assert.equal(v.powderLeft, 3)
})

test('no cap: forty rods never clamped (forty splits, the eighty exact)', () => {
  const v = decideBlazeFuel({ rodCount: 40, powderCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.splits, 40)
  assert.equal(v.powderYield, 80)
  assert.equal(v.rodLeft, 0)
})

test('fractional rod floors to the honest integer, the remainder named', () => {
  const v = decideBlazeFuel({ rodCount: 2.5, powderCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.splits, 2)
  assert.equal(v.powderYield, 4)
  assert.equal(v.rodLeft, 0.5)
})

test('empty pocket: rod-empty and powder-empty keeps with zero leftovers', () => {
  const v = decideBlazeFuel({})
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'rod-empty')
  assert.equal(v.rodLeft, 0)
  assert.equal(v.powderLeft, 0)
  assert.equal(v.splits, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { rodCount: 4, powderCount: 1 }
  decideBlazeFuel(input)
  assert.deepEqual(input, { rodCount: 4, powderCount: 1 })
})

test('one-leg law: no defer exists - the free split prices past the empty gate only', () => {
  // the one-leg law's own reading: with the rod affordable the word
  // crafts - no fuel leg, no honest shortage lives past the empty gate
  const v = decideBlazeFuel({ rodCount: 7, powderCount: 100 })
  assert.equal(v.action, 'craft')
  assert.equal(v.splits, 7)
  assert.equal(v.powderYield, 14)
  assert.equal(v.powderLeft, 100)
  assert.equal(v.rodLeft, 0)
})
