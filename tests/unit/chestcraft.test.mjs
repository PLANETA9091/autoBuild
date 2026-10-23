// Tests for the chestcraft word (src/lib/chestcraft.mjs).
// The wood chain's storage consumer: the chest poverty priced - the task's
// own named lane (the chest logic). Pure arithmetic - no mineflayer import,
// no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideChestCraft, CHESTCRAFT_PLANKS_PER_CHEST, CHESTCRAFT_CHESTS_PER_CRAFT } from '../../src/lib/chestcraft.mjs'

test('junk: a non-finite plank count refuses with junk-input', () => {
  const v = decideChestCraft({ chestCount: 0, planksCount: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.chestYield, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideChestCraft({ chestCount: 1, planksCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideChestCraft({ chestCount: '2', planksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideChestCraft({ chestCount: -2, planksCount: -10 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.planksSurplus, 0)
})

test('keep: a chest already held is the storage lane story (the pieces-held twin)', () => {
  const v = decideChestCraft({ chestCount: 1, planksCount: 3 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'chest-held')
  assert.equal(v.chestYield, 0)
  assert.equal(v.cost, 0)
})

test('keep gate first: one chest beats sixty-four planks (the downstream lane owns the story)', () => {
  const v = decideChestCraft({ chestCount: 1, planksCount: 64 })
  assert.equal(v.action, 'keep')
})

test('craft: eight planks yield one chest (the vanilla constant)', () => {
  const v = decideChestCraft({ chestCount: 0, planksCount: 8 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'planks-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.chestYield, 1)
  assert.equal(v.planksSurplus, 0)
  assert.equal(v.cost, 8)
})

test('craft: the surplus priced, never rounded into a lie (17 planks -> 2 chests + 1 plank)', () => {
  const v = decideChestCraft({ chestCount: 0, planksCount: 17 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.chestYield, 2)
  assert.equal(v.planksSurplus, 1)
})

test('no cap: a plank-rich pocket prices every chest it affords (64 planks -> 8 chests)', () => {
  const v = decideChestCraft({ chestCount: 0, planksCount: 64 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 8)
  assert.equal(v.chestYield, 8)
  assert.equal(v.planksSurplus, 0)
})

test('defer: seven planks is one plank short of one craft (the floor price named)', () => {
  const v = decideChestCraft({ chestCount: 0, planksCount: 7 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.planksSurplus, 7)
  assert.equal(v.cost, 8)
})

test('defer: the empty pocket defers honestly (never a guessed craft)', () => {
  const v = decideChestCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.chestYield, 0)
})

test('the vanilla constants exported', () => {
  assert.equal(CHESTCRAFT_PLANKS_PER_CHEST, 8)
  assert.equal(CHESTCRAFT_CHESTS_PER_CRAFT, 1)
})

test('the consumer law: sticks the bot does not want do not chain here (a separate lane)', () => {
  // the wood chain legs (tool/stick/plank) never gate the storage consumer:
  // the pocket's planks price the chest directly, no stick/tool face consulted
  const v = decideChestCraft({ chestCount: 0, planksCount: 16 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
})

test('no mutation: the caller\'s pocket object rides unchanged', () => {
  const opts = { chestCount: 0, planksCount: 9 }
  const before = { ...opts }
  decideChestCraft(opts)
  assert.deepEqual(opts, before)
})
