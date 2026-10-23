// Tests for the furnacecraft word (src/lib/furnacecraft.mjs).
// The smelt chain's first leg priced: the furnace the pocket could craft.
// Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideFurnaceCraft, FURNACECRAFT_COBBLESTONE_PER_FURNACE } from '../../src/lib/furnacecraft.mjs'

test('junk: a non-finite stone count refuses with junk-input', () => {
  const v = decideFurnaceCraft({ stoneCount: Number.NaN, furnaceCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.furnaces, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideFurnaceCraft({ stoneCount: 3, furnaceCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideFurnaceCraft({ stoneCount: '5', furnaceCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideFurnaceCraft({ stoneCount: -9, furnaceCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'stone-short')
  assert.equal(v.stone, 0)
})

test('keep: a furnace already held is the smelt lane story (the pieces-held twin)', () => {
  const v = decideFurnaceCraft({ stoneCount: 3, furnaceCount: 1 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'furnace-held')
  assert.equal(v.furnaces, 0)
  assert.equal(v.cost, 0)
})

test('keep gate first: one held furnace beats forty stones (the downstream lane owns the story)', () => {
  const v = decideFurnaceCraft({ stoneCount: 40, furnaceCount: 1 })
  assert.equal(v.action, 'keep')
})

test('craft: exactly eight stones price one furnace (the vanilla constant)', () => {
  const v = decideFurnaceCraft({ stoneCount: 8, furnaceCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'stone-affordable')
  assert.equal(v.stone, 8)
  assert.equal(v.furnaces, 1)
  assert.equal(v.surplus, 0)
  assert.equal(v.cost, FURNACECRAFT_COBBLESTONE_PER_FURNACE)
})

test('craft: the remainder is named, never rounded into a lie (9 -> 1 furnace + 1 surplus)', () => {
  const v = decideFurnaceCraft({ stoneCount: 9, furnaceCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.furnaces, 1)
  assert.equal(v.surplus, 1)
})

test('craft: sixteen stones price two furnaces', () => {
  const v = decideFurnaceCraft({ stoneCount: 16, furnaceCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.furnaces, 2)
  assert.equal(v.surplus, 0)
})

test('no cap: a stone-rich pocket prices every furnace it affords (100 -> 12 + 4)', () => {
  const v = decideFurnaceCraft({ stoneCount: 100, furnaceCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.furnaces, 12)
  assert.equal(v.surplus, 4)
})

test('defer: stone-short is the honest dead end (7 stones, no furnace)', () => {
  const v = decideFurnaceCraft({ stoneCount: 7, furnaceCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'stone-short')
  assert.equal(v.furnaces, 0)
  assert.equal(v.cost, FURNACECRAFT_COBBLESTONE_PER_FURNACE)
})

test('defer: the empty pocket defers, never crafts a guessed furnace', () => {
  const v = decideFurnaceCraft({ stoneCount: 0, furnaceCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'stone-short')
})

test('the vanilla constant is eight stone-tier pieces per furnace', () => {
  assert.equal(FURNACECRAFT_COBBLESTONE_PER_FURNACE, 8)
})

test('the pure read mutates nothing (the caller\'s opts survive)', () => {
  const opts = { stoneCount: 24, furnaceCount: 0 }
  decideFurnaceCraft(opts)
  assert.deepEqual(opts, { stoneCount: 24, furnaceCount: 0 })
})

test('undefined opts defers silently (the default pocket is empty)', () => {
  const v = decideFurnaceCraft()
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'stone-short')
})
