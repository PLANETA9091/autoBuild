// Tests for the eyeofender word (src/lib/eyeofender.mjs).
// The end lane's own craft: the blazefuel word's POWDER LAW named it,
// this word prices it (1 ender pearl + 1 blaze powder -> 1 eye of
// ender, vanilla). Pure arithmetic - no mineflayer import, no server,
// no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideEyeOfEnder, EYEOFENDER_PEARL_PER_CRAFT, EYEOFENDER_POWDER_PER_CRAFT, EYEOFENDER_EYES_PER_CRAFT } from '../../src/lib/eyeofender.mjs'

test('junk: a non-finite eye count refuses with junk-input', () => {
  const v = decideEyeOfEnder({ eyeCount: Number.NaN, pearlCount: 1, powderCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.eyesYield, 0)
})

test('junk: a non-finite pearl count refuses (all three legs policed)', () => {
  const v = decideEyeOfEnder({ eyeCount: 0, pearlCount: Number.POSITIVE_INFINITY, powderCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideEyeOfEnder({ eyeCount: 0, pearlCount: 1, powderCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideEyeOfEnder({ eyeCount: '0', pearlCount: 1, powderCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - pearl-short defers, never poisons', () => {
  const v = decideEyeOfEnder({ eyeCount: -1, pearlCount: -7, powderCount: -3 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'pearl-short')
  assert.equal(v.pearlsLeft, 0)
  assert.equal(v.powderLeft, 0)
})

test('keep gate first: an eye held keeps even a rich pocket (the end instrument never doubles)', () => {
  const v = decideEyeOfEnder({ eyeCount: 1, pearlCount: 99, powderCount: 42 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'eye-held')
  assert.equal(v.pearlsLeft, 99)
  assert.equal(v.powderLeft, 42)
  assert.equal(v.crafts, 0)
  assert.equal(v.eyesYield, 0)
})

test('vanilla pins: one pearl and one powder price the eye, one eye the craft yields', () => {
  assert.equal(EYEOFENDER_PEARL_PER_CRAFT, 1)
  assert.equal(EYEOFENDER_POWDER_PER_CRAFT, 1)
  assert.equal(EYEOFENDER_EYES_PER_CRAFT, 1)
})

test('exactly one pearl one powder: one honest craft, the leftovers zero', () => {
  const v = decideEyeOfEnder({ eyeCount: 0, pearlCount: 1, powderCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'pearl-powder-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.eyesYield, 1)
  assert.equal(v.pearlsLeft, 0)
  assert.equal(v.powderLeft, 0)
  assert.equal(v.eyes, 0)
})

test('three pearls two powders: the min law binds BOTH legs - two crafts, one pearl rides', () => {
  const v = decideEyeOfEnder({ eyeCount: 0, pearlCount: 3, powderCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.eyesYield, 2)
  assert.equal(v.pearlsLeft, 1)
  assert.equal(v.powderLeft, 0)
})

test('min law: five pearls one powder prices one eye (the powder the ceiling leg)', () => {
  const v = decideEyeOfEnder({ eyeCount: 0, pearlCount: 5, powderCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.pearlsLeft, 4)
  assert.equal(v.powderLeft, 0)
})

test('no cap: a pearl-rich powder-rich pocket prices every eye it affords', () => {
  const v = decideEyeOfEnder({ eyeCount: 0, pearlCount: 40, powderCount: 80 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 40)
  assert.equal(v.eyesYield, 40)
  assert.equal(v.powderLeft, 40)
})

test('defer: pearl-short names the rare leg first (the enderman crossing owns that story)', () => {
  const v = decideEyeOfEnder({ eyeCount: 0, pearlCount: 0, powderCount: 9 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'pearl-short')
  assert.equal(v.powderLeft, 9)
  assert.equal(v.crafts, 0)
  assert.equal(v.eyesYield, 0)
})

test('defer: powder-short names the split leg (the blazefuel word re-tasks)', () => {
  const v = decideEyeOfEnder({ eyeCount: 0, pearlCount: 2, powderCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'powder-short')
  assert.equal(v.pearlsLeft, 2)
  assert.equal(v.crafts, 0)
  assert.equal(v.eyesYield, 0)
})

test('empty pocket: eye-empty pearl-empty powder-empty defers pearl-short (the rarer leg priced first)', () => {
  const v = decideEyeOfEnder({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'pearl-short')
  assert.equal(v.pearlsLeft, 0)
  assert.equal(v.powderLeft, 0)
  assert.equal(v.eyes, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { eyeCount: 0, pearlCount: 1, powderCount: 1 }
  decideEyeOfEnder(input)
  assert.deepEqual(input, { eyeCount: 0, pearlCount: 1, powderCount: 1 })
})
