// Tests for the hay block word (src/lib/hayblock.mjs).
// The crop lane's own storage: the pack priced (9 wheat -> 1 hay
// block, vanilla). Pure arithmetic - no mineflayer import, no server,
// no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideHayBlock, HAYBLOCK_WHEAT_PER_BLOCK, HAYBLOCK_BLOCKS_PER_CRAFT } from '../../src/lib/hayblock.mjs'

test('junk: a non-finite wheat count refuses with junk-input', () => {
  const v = decideHayBlock({ wheatCount: Number.NaN, blocksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.blocksYield, 0)
})

test('junk: a non-finite blocks count refuses (both legs policed)', () => {
  const v = decideHayBlock({ wheatCount: 9, blocksCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideHayBlock({ wheatCount: true, blocksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideHayBlock({ wheatCount: 9, blocksCount: '1' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - the empty pocket keeps, never poisons', () => {
  const v = decideHayBlock({ wheatCount: -9, blocksCount: -1 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'wheat-empty')
  assert.equal(v.wheatLeft, 0)
  assert.equal(v.blocks, 0)
})

test('keep-gate-first: the wheat-empty pocket keeps even a block-rich stock (the pack never guesses the harvest)', () => {
  const v = decideHayBlock({ wheatCount: 0, blocksCount: 3 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'wheat-empty')
  assert.equal(v.crafts, 0)
  assert.equal(v.wheatLeft, 0)
  assert.equal(v.blocks, 3, 'the held blocks ride untouched')
})

test('vanilla pin: the wheat cost one block packs is exactly 9', () => {
  assert.equal(HAYBLOCK_WHEAT_PER_BLOCK, 9)
})

test('vanilla pin: the block yield one pack produces is exactly 1', () => {
  assert.equal(HAYBLOCK_BLOCKS_PER_CRAFT, 1)
})

test('exact vanilla pack: nine wheat price one block', () => {
  const v = decideHayBlock({ wheatCount: 9, blocksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'wheat-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.blocksYield, 1)
  assert.equal(v.wheatLeft, 0)
  assert.equal(v.blocks, 0)
})

test('the nine-tithe law: 20 wheat -> 2 blocks, the two-wheat remainder named', () => {
  const v = decideHayBlock({ wheatCount: 20, blocksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.blocksYield, 2)
  assert.equal(v.wheatLeft, 2)
})

test('no cap: a wheat-rich pocket packs every block it affords', () => {
  const v = decideHayBlock({ wheatCount: 90, blocksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.blocksYield, 10)
  assert.equal(v.wheatLeft, 0)
})

test('defer: the partial tithe never spends - eight wheat ride wheatLeft named', () => {
  const v = decideHayBlock({ wheatCount: 8, blocksCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'wheat-short')
  assert.equal(v.crafts, 0)
  assert.equal(v.wheatLeft, 8, 'the short side never lies about the pocket')
  assert.equal(v.blocks, 0)
})

test('the pack-never-stops law: the hay held never gates the bulk (the storage never doubles a meal)', () => {
  const v = decideHayBlock({ wheatCount: 10, blocksCount: 5 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'wheat-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.blocksYield, 1)
  assert.equal(v.wheatLeft, 1)
  assert.equal(v.blocks, 5, 'the held blocks ride untouched')
})

test('floor law: a fractional census floors to the honest integer (the remainder named)', () => {
  const v = decideHayBlock({ wheatCount: 9.5, blocksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.wheatLeft, 0.5, 'the half wheat the binary-exact leftover')
})

test('pure read: the word mutates nothing - two calls read the same pocket', () => {
  const pocket = { wheatCount: 18, blocksCount: 0 }
  const a = decideHayBlock(pocket)
  const b = decideHayBlock(pocket)
  assert.deepEqual(a, b)
  assert.equal(pocket.wheatCount, 18)
  assert.equal(pocket.blocksCount, 0)
})
