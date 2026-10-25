// Tests for the tintedglasscraft word (src/lib/tintedglasscraft.mjs).
// The light-blocking form: 4 amethyst shards + 1 glass -> 2 tinted
// glass (vanilla). Pure arithmetic - no mineflayer import, no server,
// no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideTintedGlassCraft, TINTEDGLASS_SHARD_PER_CRAFT, TINTEDGLASS_GLASS_PER_CRAFT, TINTEDGLASS_TINTED_PER_CRAFT } from '../../src/lib/tintedglasscraft.mjs'

test('junk: a non-finite tinted count refuses with junk-input', () => {
  const v = decideTintedGlassCraft({ tintedCount: Number.NaN, shardCount: 4, glassCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.tintedYield, 0)
})

test('junk: a non-finite shard count refuses (all legs policed)', () => {
  const v = decideTintedGlassCraft({ tintedCount: 0, shardCount: Number.POSITIVE_INFINITY, glassCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideTintedGlassCraft({ tintedCount: false, shardCount: 4, glassCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideTintedGlassCraft({ tintedCount: 0, shardCount: 4, glassCount: '1' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - shard-short defers, never poisons', () => {
  const v = decideTintedGlassCraft({ tintedCount: -2, shardCount: -4, glassCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'shard-short')
  assert.equal(v.shardLeft, 0)
  assert.equal(v.glassLeft, 0)
})

test('keep gate first: a tinted form held keeps even shard-rich (the build form never doubles)', () => {
  const v = decideTintedGlassCraft({ tintedCount: 1, shardCount: 99, glassCount: 9 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'tinted-held')
  assert.equal(v.shardLeft, 99)
  assert.equal(v.glassLeft, 9)
  assert.equal(v.crafts, 0)
  assert.equal(v.tintedYield, 0)
})

test('vanilla pins: four shards and one glass price the form, two the craft yields', () => {
  assert.equal(TINTEDGLASS_SHARD_PER_CRAFT, 4)
  assert.equal(TINTEDGLASS_GLASS_PER_CRAFT, 1)
  assert.equal(TINTEDGLASS_TINTED_PER_CRAFT, 2)
})

test('exactly four shards one glass: one honest craft, the light law doubled, leftovers zero', () => {
  const v = decideTintedGlassCraft({ tintedCount: 0, shardCount: 4, glassCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'shard-glass-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.tintedYield, 2)
  assert.equal(v.shardLeft, 0)
  assert.equal(v.glassLeft, 0)
})

test('eight shards one glass: the min law honest - glass bounds the yield, the shard remainder named', () => {
  const v = decideTintedGlassCraft({ tintedCount: 0, shardCount: 8, glassCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.tintedYield, 2)
  assert.equal(v.shardLeft, 4)
  assert.equal(v.glassLeft, 0)
})

test('nine shards two glass: two crafts the floor law honest (the yield never inflated)', () => {
  const v = decideTintedGlassCraft({ tintedCount: 0, shardCount: 9, glassCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.tintedYield, 4)
  assert.equal(v.shardLeft, 1)
  assert.equal(v.glassLeft, 0)
})

test('the shorter leg prices: four shards three glass - one craft, the glass leftover named', () => {
  const v = decideTintedGlassCraft({ tintedCount: 0, shardCount: 4, glassCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.tintedYield, 2)
  assert.equal(v.shardLeft, 0)
  assert.equal(v.glassLeft, 2)
})

test('no cap: forty shards ten glass never clamped (ten crafts, twenty forms)', () => {
  const v = decideTintedGlassCraft({ tintedCount: 0, shardCount: 40, glassCount: 10 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.tintedYield, 20)
  assert.equal(v.shardLeft, 0)
  assert.equal(v.glassLeft, 0)
})

test('defer: shard-short names the rarer leg first (the geode trip owns that story)', () => {
  const v = decideTintedGlassCraft({ tintedCount: 0, shardCount: 3, glassCount: 5 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'shard-short')
  assert.equal(v.shardLeft, 3)
  assert.equal(v.crafts, 0)
})

test('defer: glass-short names the melt leg (the smeltglass lane re-tasks)', () => {
  const v = decideTintedGlassCraft({ tintedCount: 0, shardCount: 8, glassCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'glass-short')
  assert.equal(v.glassLeft, 0)
  assert.equal(v.shardLeft, 8)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { tintedCount: 0, shardCount: 4, glassCount: 1 }
  decideTintedGlassCraft(input)
  assert.deepEqual(input, { tintedCount: 0, shardCount: 4, glassCount: 1 })
})
