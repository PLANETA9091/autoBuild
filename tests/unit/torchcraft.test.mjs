// Tests for the torchcraft word (src/lib/torchcraft.mjs).
// The light economy's first word: the torches the pocket could craft.
// Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideTorchCraft, TORCHCRAFT_TORCHES_PER_CRAFT, TORCHCRAFT_COAL_PER_CRAFT, TORCHCRAFT_STICK_PER_CRAFT } from '../../src/lib/torchcraft.mjs'

test('junk: a non-finite coal count refuses with junk-input', () => {
  const v = decideTorchCraft({ coalCount: Number.NaN, stickCount: 1, torchCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.crafts, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideTorchCraft({ coalCount: 3, stickCount: true, torchCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideTorchCraft({ coalCount: '5', stickCount: 1, torchCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideTorchCraft({ coalCount: -4, stickCount: -2, torchCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'coal-short')
  assert.equal(v.coal, 0)
  assert.equal(v.sticks, 0)
})

test('keep: torches already held is the light lane story (the pieces-held twin)', () => {
  const v = decideTorchCraft({ coalCount: 2, stickCount: 3, torchCount: 1 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'torches-held')
  assert.equal(v.torches, 1)
  assert.equal(v.crafts, 0)
})

test('keep gate first: one held torch beats a rich pocket (the downstream lane owns the story)', () => {
  const v = decideTorchCraft({ coalCount: 30, stickCount: 30, torchCount: 1 })
  assert.equal(v.action, 'keep')
})

test('craft: one coal and one stick yield four torches (the vanilla constant)', () => {
  const v = decideTorchCraft({ coalCount: 1, stickCount: 1, torchCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'coal-stick-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.torchesYield, TORCHCRAFT_TORCHES_PER_CRAFT)
  assert.equal(v.coalLeft, 0)
  assert.equal(v.stickLeft, 0)
})

test('craft: the shorter leg prices the crafts (5 coal 2 sticks -> 2 crafts, the leftovers named)', () => {
  const v = decideTorchCraft({ coalCount: 5, stickCount: 2, torchCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.torchesYield, 8)
  assert.equal(v.coalLeft, 3)
  assert.equal(v.stickLeft, 0)
})

test('no cap: a fuel-rich pocket prices every pair it affords (20+20 -> 20 crafts 80 torches)', () => {
  const v = decideTorchCraft({ coalCount: 20, stickCount: 20, torchCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 20)
  assert.equal(v.torchesYield, 80)
})

test('defer sticks-short names the stickcraft chain own leg (coal rich, sticks none)', () => {
  const v = decideTorchCraft({ coalCount: 3, stickCount: 0, torchCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
  assert.equal(v.crafts, 0)
})

test('defer coal-short names the charcoal rung seat (sticks rich, coal none)', () => {
  const v = decideTorchCraft({ coalCount: 0, stickCount: 5, torchCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'coal-short')
  assert.equal(v.crafts, 0)
})

test('defer: the empty pocket defers coal-short (the first missing leg named)', () => {
  const v = decideTorchCraft({ coalCount: 0, stickCount: 0, torchCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'coal-short')
})

test('the vanilla constants price the recipe honestly (4 torches, 1 coal, 1 stick)', () => {
  assert.equal(TORCHCRAFT_TORCHES_PER_CRAFT, 4)
  assert.equal(TORCHCRAFT_COAL_PER_CRAFT, 1)
  assert.equal(TORCHCRAFT_STICK_PER_CRAFT, 1)
})

test('the pure read mutates nothing (the caller\'s opts survive)', () => {
  const opts = { coalCount: 4, stickCount: 2, torchCount: 0 }
  decideTorchCraft(opts)
  assert.deepEqual(opts, { coalCount: 4, stickCount: 2, torchCount: 0 })
})

test('undefined opts defers silently (the default pocket is empty)', () => {
  const v = decideTorchCraft()
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'coal-short')
})
