// Tests for the gold block word (src/lib/goldblock.mjs).
// The gold economy's own storage: the pack priced (9 gold ingots ->
// 1 gold block, vanilla). Pure arithmetic - no mineflayer import, no
// server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideGoldBlock, GOLDBLOCK_INGOT_PER_BLOCK, GOLDBLOCK_BLOCKS_PER_CRAFT } from '../../src/lib/goldblock.mjs'

test('junk: a non-finite ingot count refuses with junk-input', () => {
  const v = decideGoldBlock({ ingotCount: Number.NaN, blocksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.blocksYield, 0)
})

test('junk: a non-finite blocks count refuses (both legs policed)', () => {
  const v = decideGoldBlock({ ingotCount: 9, blocksCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideGoldBlock({ ingotCount: true, blocksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideGoldBlock({ ingotCount: 9, blocksCount: '1' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - the empty pocket keeps, never poisons', () => {
  const v = decideGoldBlock({ ingotCount: -9, blocksCount: -1 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'ingot-empty')
  assert.equal(v.ingotLeft, 0)
  assert.equal(v.blocks, 0)
})

test('keep-gate-first: the ingot-empty pocket keeps even a block-rich stock (the pack never guesses the melt)', () => {
  const v = decideGoldBlock({ ingotCount: 0, blocksCount: 3 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'ingot-empty')
  assert.equal(v.crafts, 0)
  assert.equal(v.ingotLeft, 0)
  assert.equal(v.blocks, 3, 'the held blocks ride untouched')
})

test('vanilla pin: the ingot cost one block packs is exactly 9', () => {
  assert.equal(GOLDBLOCK_INGOT_PER_BLOCK, 9)
})

test('vanilla pin: the block yield one pack produces is exactly 1', () => {
  assert.equal(GOLDBLOCK_BLOCKS_PER_CRAFT, 1)
})

test('exact vanilla pack: nine ingots price one block', () => {
  const v = decideGoldBlock({ ingotCount: 9, blocksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'ingot-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.blocksYield, 1)
  assert.equal(v.ingotLeft, 0)
  assert.equal(v.blocks, 0)
})

test('the nine-tithe law: 20 ingots -> 2 blocks, the two-ingot remainder named', () => {
  const v = decideGoldBlock({ ingotCount: 20, blocksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.blocksYield, 2)
  assert.equal(v.ingotLeft, 2)
})

test('no cap: an ingot-rich pocket packs every block it affords', () => {
  const v = decideGoldBlock({ ingotCount: 90, blocksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.blocksYield, 10)
  assert.equal(v.ingotLeft, 0)
})

test('defer: the partial tithe never spends - eight ingots ride ingotLeft named', () => {
  const v = decideGoldBlock({ ingotCount: 8, blocksCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'ingot-short')
  assert.equal(v.crafts, 0)
  assert.equal(v.ingotLeft, 8, 'the short side never lies about the pocket')
  assert.equal(v.blocks, 0)
})

test('the pack-never-stops law: the gold held never gates the bulk (the storage never doubles a wrap)', () => {
  const v = decideGoldBlock({ ingotCount: 10, blocksCount: 5 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'ingot-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.blocksYield, 1)
  assert.equal(v.ingotLeft, 1)
  assert.equal(v.blocks, 5, 'the held blocks ride untouched')
})

test('floor law: a fractional census floors to the honest integer (the remainder named)', () => {
  const v = decideGoldBlock({ ingotCount: 9.5, blocksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.ingotLeft, 0.5, 'the half ingot the binary-exact leftover')
})

test('pure read: the word mutates nothing - two calls read the same pocket', () => {
  const pocket = { ingotCount: 18, blocksCount: 0 }
  const a = decideGoldBlock(pocket)
  const b = decideGoldBlock(pocket)
  assert.deepEqual(a, b)
  assert.equal(pocket.ingotCount, 18)
  assert.equal(pocket.blocksCount, 0)
})
