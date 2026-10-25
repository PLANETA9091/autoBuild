// Tests for the spyglasscraft word (src/lib/spyglasscraft.mjs).
// The amethyst lane's own future: the lightningrod word's SPYGLASS
// LAW named it, this word prices it (2 copper ingots + 1 amethyst
// shard -> 1 spyglass, vanilla). Pure arithmetic - no mineflayer
// import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideSpyglassCraft, SPYGLASS_COPPER_PER_CRAFT, SPYGLASS_SHARD_PER_CRAFT, SPYGLASS_SPYGLASSES_PER_CRAFT } from '../../src/lib/spyglasscraft.mjs'

test('junk: a non-finite spyglass count refuses with junk-input', () => {
  const v = decideSpyglassCraft({ spyglassCount: Number.NaN, copperIngotCount: 2, shardCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.spyglassesYield, 0)
})

test('junk: a non-finite shard count refuses (all three legs policed)', () => {
  const v = decideSpyglassCraft({ spyglassCount: 0, copperIngotCount: 2, shardCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideSpyglassCraft({ spyglassCount: 0, copperIngotCount: true, shardCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideSpyglassCraft({ spyglassCount: 0, copperIngotCount: 2, shardCount: '1' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - shard-short defers, never poisons', () => {
  const v = decideSpyglassCraft({ spyglassCount: -1, copperIngotCount: -7, shardCount: -3 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'shard-short')
  assert.equal(v.copperLeft, 0)
  assert.equal(v.shardLeft, 0)
})

test('keep gate first: a spyglass held keeps even a rich pocket (the watch instrument never doubles)', () => {
  const v = decideSpyglassCraft({ spyglassCount: 1, copperIngotCount: 99, shardCount: 42 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'spyglass-held')
  assert.equal(v.copperLeft, 99)
  assert.equal(v.shardLeft, 42)
  assert.equal(v.crafts, 0)
  assert.equal(v.spyglassesYield, 0)
})

test('vanilla pins: two copper and one shard price the tube, one spyglass the craft yields', () => {
  assert.equal(SPYGLASS_COPPER_PER_CRAFT, 2)
  assert.equal(SPYGLASS_SHARD_PER_CRAFT, 1)
  assert.equal(SPYGLASS_SPYGLASSES_PER_CRAFT, 1)
})

test('exactly two copper one shard: one honest craft, the leftovers zero', () => {
  const v = decideSpyglassCraft({ spyglassCount: 0, copperIngotCount: 2, shardCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'copper-shard-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.spyglassesYield, 1)
  assert.equal(v.copperLeft, 0)
  assert.equal(v.shardLeft, 0)
})

test('four copper one shard: the floor law - two ingots price the tube, the copper leftover named', () => {
  const v = decideSpyglassCraft({ spyglassCount: 0, copperIngotCount: 4, shardCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.spyglassesYield, 1)
  assert.equal(v.copperLeft, 2)
  assert.equal(v.shardLeft, 0)
})

test('the min law binds BOTH legs: thirty copper one shard crafts one - the rarer leg the ceiling, the copper never clamped', () => {
  const v = decideSpyglassCraft({ spyglassCount: 0, copperIngotCount: 30, shardCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.spyglassesYield, 1)
  assert.equal(v.copperLeft, 28)
  assert.equal(v.shardLeft, 0)
})

test('the min law both afford: six copper three shards craft three (the yield 1:1, never inflated)', () => {
  const v = decideSpyglassCraft({ spyglassCount: 0, copperIngotCount: 6, shardCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 3)
  assert.equal(v.spyglassesYield, 3)
  assert.equal(v.copperLeft, 0)
  assert.equal(v.shardLeft, 0)
})

test('defer: shard-short names the starving leg (the amethyst trip re-tasks)', () => {
  const v = decideSpyglassCraft({ spyglassCount: 0, copperIngotCount: 8, shardCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'shard-short')
  assert.equal(v.copperLeft, 8)
  assert.equal(v.crafts, 0)
  assert.equal(v.spyglassesYield, 0)
})

test('defer: copper-short names the two-ingot floor price (the smelt trip re-tasks)', () => {
  const v = decideSpyglassCraft({ spyglassCount: 0, copperIngotCount: 1, shardCount: 5 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'copper-short')
  assert.equal(v.shardLeft, 5)
  assert.equal(v.crafts, 0)
  assert.equal(v.spyglassesYield, 0)
})

test('empty pocket: spyglass-empty copper-empty shard-empty defers shard-short (the rarer leg priced first)', () => {
  const v = decideSpyglassCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'shard-short')
  assert.equal(v.copperLeft, 0)
  assert.equal(v.shardLeft, 0)
  assert.equal(v.spyglasses, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { spyglassCount: 0, copperIngotCount: 2, shardCount: 1 }
  decideSpyglassCraft(input)
  assert.deepEqual(input, { spyglassCount: 0, copperIngotCount: 2, shardCount: 1 })
})
