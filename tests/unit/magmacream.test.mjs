// Tests for the magmacream word (src/lib/magmacream.mjs).
// The brewing front's own fifth leg: the blaze economy's third demand
// leg priced (1 slime ball + 1 blaze powder -> 1 magma cream,
// vanilla). Pure arithmetic - no mineflayer import, no server, no
// fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideMagmaCream, MAGMACREAM_SLIME_PER_CRAFT, MAGMACREAM_POWDER_PER_CRAFT, MAGMACREAM_CREAMS_PER_CRAFT } from '../../src/lib/magmacream.mjs'

test('junk: a non-finite cream count refuses with junk-input', () => {
  const v = decideMagmaCream({ creamCount: Number.NaN, slimeBallCount: 1, powderCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.creamsYield, 0)
})

test('junk: a non-finite slime count refuses (all three legs policed)', () => {
  const v = decideMagmaCream({ creamCount: 0, slimeBallCount: Number.POSITIVE_INFINITY, powderCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideMagmaCream({ creamCount: 0, slimeBallCount: 1, powderCount: false })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideMagmaCream({ creamCount: 0, slimeBallCount: '1', powderCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - slime-short defers, never poisons', () => {
  const v = decideMagmaCream({ creamCount: -1, slimeBallCount: -7, powderCount: -3 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'slime-short')
  assert.equal(v.slimeLeft, 0)
  assert.equal(v.powderLeft, 0)
})

test('keep gate first: a cream held keeps even a rich pocket (the golden form never doubles)', () => {
  const v = decideMagmaCream({ creamCount: 1, slimeBallCount: 99, powderCount: 42 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'cream-held')
  assert.equal(v.slimeLeft, 99)
  assert.equal(v.powderLeft, 42)
  assert.equal(v.crafts, 0)
  assert.equal(v.creamsYield, 0)
})

test('vanilla pins: one slime ball and one powder price the cream, one cream the craft yields', () => {
  assert.equal(MAGMACREAM_SLIME_PER_CRAFT, 1)
  assert.equal(MAGMACREAM_POWDER_PER_CRAFT, 1)
  assert.equal(MAGMACREAM_CREAMS_PER_CRAFT, 1)
})

test('exactly one slime one powder: one honest craft, the leftovers zero', () => {
  const v = decideMagmaCream({ creamCount: 0, slimeBallCount: 1, powderCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'slime-powder-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.creamsYield, 1)
  assert.equal(v.slimeLeft, 0)
  assert.equal(v.powderLeft, 0)
  assert.equal(v.creams, 0)
})

test('three slimes two powders: the min law binds BOTH legs - two crafts, one slime rides', () => {
  const v = decideMagmaCream({ creamCount: 0, slimeBallCount: 3, powderCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.creamsYield, 2)
  assert.equal(v.slimeLeft, 1)
  assert.equal(v.powderLeft, 0)
})

test('min law: five slimes one powder prices one cream (the powder the ceiling leg)', () => {
  const v = decideMagmaCream({ creamCount: 0, slimeBallCount: 5, powderCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.slimeLeft, 4)
  assert.equal(v.powderLeft, 0)
})

test('no cap: a slime-rich powder-rich pocket prices every cream it affords', () => {
  const v = decideMagmaCream({ creamCount: 0, slimeBallCount: 40, powderCount: 80 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 40)
  assert.equal(v.creamsYield, 40)
  assert.equal(v.powderLeft, 40)
})

test('defer: slime-short names the rare leg first (the slime crossing owns that story)', () => {
  const v = decideMagmaCream({ creamCount: 0, slimeBallCount: 0, powderCount: 9 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'slime-short')
  assert.equal(v.powderLeft, 9)
  assert.equal(v.crafts, 0)
  assert.equal(v.creamsYield, 0)
})

test('defer: powder-short names the split leg (the blazefuel word re-tasks)', () => {
  const v = decideMagmaCream({ creamCount: 0, slimeBallCount: 2, powderCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'powder-short')
  assert.equal(v.slimeLeft, 2)
  assert.equal(v.crafts, 0)
  assert.equal(v.creamsYield, 0)
})

test('empty pocket: cream-empty slime-empty powder-empty defers slime-short (the rarer leg priced first)', () => {
  const v = decideMagmaCream({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'slime-short')
  assert.equal(v.slimeLeft, 0)
  assert.equal(v.powderLeft, 0)
  assert.equal(v.creams, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { creamCount: 0, slimeBallCount: 1, powderCount: 1 }
  decideMagmaCream(input)
  assert.deepEqual(input, { creamCount: 0, slimeBallCount: 1, powderCount: 1 })
})
