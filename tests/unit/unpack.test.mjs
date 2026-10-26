// Tests for the unpack word (src/lib/unpack.mjs).
// The storage lane's own mirror: one block -> nine units, the
// decompression the pack family's four nine->one words never told
// (the coalblock word's own prose named it: 'the unpack never
// burns'). Pure arithmetic.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideUnpackBlock, UNPACK_UNITS_PER_BLOCK, UNPACK_BLOCKS_PER_CRAFT } from '../../src/lib/unpack.mjs'
import { decideCoalBlock, COALBLOCK_COAL_PER_BLOCK } from '../../src/lib/coalblock.mjs'
import { decideCopperBlock, COPPERBLOCK_INGOT_PER_BLOCK } from '../../src/lib/copperblock.mjs'
import { decideIronBlock, IRONBLOCK_INGOT_PER_BLOCK } from '../../src/lib/ironblock.mjs'
import { decideGoldBlock, GOLDBLOCK_INGOT_PER_BLOCK } from '../../src/lib/goldblock.mjs'

test('junk: a non-finite need refuses with junk-input', () => {
  const v = decideUnpackBlock({ unitsNeeded: Number.NaN, blocksCount: 2 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.unitsYield, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideUnpackBlock({ unitsNeeded: 1, blocksCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - block-empty keeps, never poisons', () => {
  const v = decideUnpackBlock({ unitsNeeded: -4, blocksCount: -1 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'block-empty')
  assert.equal(v.blocksLeft, 0)
  assert.equal(v.unitsNeeded, 0)
})

test('keep: the block lane empty reads first - the unpack\'s own silence', () => {
  const v = decideUnpackBlock({ unitsNeeded: 9, blocksCount: 0 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'block-empty')
  assert.equal(v.crafts, 0)
  assert.equal(v.unitsYield, 0)
  assert.equal(v.unitsNeeded, 9)
})

test('keep: the hunger un-named - the blocks ride packed (need-empty)', () => {
  const v = decideUnpackBlock({ unitsNeeded: 0, blocksCount: 5 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'need-empty')
  assert.equal(v.blocksLeft, 5)
  assert.equal(v.unitsYield, 0)
})

test('defer: the hunger outruns the blocks - the honest shortage', () => {
  const v = decideUnpackBlock({ unitsNeeded: 27, blocksCount: 2 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'block-short')
  assert.equal(v.crafts, 0)
  assert.equal(v.unitsYield, 0)
  assert.equal(v.blocksLeft, 2)
  assert.equal(v.unitsNeeded, 27)
})

test('defer boundary: the ceil law defers the 19-hunger on two blocks (the 18-affording pocket still stars the named need)', () => {
  const v = decideUnpackBlock({ unitsNeeded: 19, blocksCount: 2 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'block-short')
})

test('unpack: the exact nine - one block mints nine units', () => {
  const v = decideUnpackBlock({ unitsNeeded: 9, blocksCount: 1 })
  assert.equal(v.action, 'unpack')
  assert.equal(v.reason, 'need-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.unitsYield, 9)
  assert.equal(v.blocksSpent, 1)
  assert.equal(v.blocksLeft, 0)
})

test('unpack: the surplus named whole - a four-unit hunger unpacks one block', () => {
  const v = decideUnpackBlock({ unitsNeeded: 4, blocksCount: 3 })
  assert.equal(v.action, 'unpack')
  assert.equal(v.crafts, 1)
  assert.equal(v.unitsYield, 9)
  assert.equal(v.blocksSpent, 1)
  assert.equal(v.blocksLeft, 2)
})

test('no cap: a hunger-rich pocket unpacks every block the need prices', () => {
  const v = decideUnpackBlock({ unitsNeeded: 99, blocksCount: 11 })
  assert.equal(v.action, 'unpack')
  assert.equal(v.crafts, 11)
  assert.equal(v.unitsYield, 99)
  assert.equal(v.blocksLeft, 0)
})

test('fractional need floors honestly - whole units the lane trades', () => {
  const v = decideUnpackBlock({ unitsNeeded: 9.75, blocksCount: 1 })
  assert.equal(v.action, 'unpack')
  assert.equal(v.unitsNeeded, 9)
  assert.equal(v.crafts, 1)
  assert.equal(v.unitsYield, 9)
})

test('chain law: the storage lane\'s own round-trip pins - pack nine -> one, unpack one -> nine', () => {
  const packed = decideCoalBlock({ coalCount: 9, blocksCount: 0 })
  assert.equal(packed.action, 'craft')
  assert.equal(packed.blocksYield, 1)
  const unpacked = decideUnpackBlock({ unitsNeeded: 9, blocksCount: packed.blocksYield })
  assert.equal(unpacked.action, 'unpack')
  assert.equal(unpacked.unitsYield, 9)
})

test('five-same-nine pin: the four pack words and the unpack word all read nine', () => {
  assert.equal(GOLDBLOCK_INGOT_PER_BLOCK, 9)
  assert.equal(IRONBLOCK_INGOT_PER_BLOCK, 9)
  assert.equal(COPPERBLOCK_INGOT_PER_BLOCK, 9)
  assert.equal(COALBLOCK_COAL_PER_BLOCK, 9)
  assert.equal(UNPACK_UNITS_PER_BLOCK, 9)
})

test('held law: the read mutates nothing (the frozen input survives)', () => {
  const opts = Object.freeze({ unitsNeeded: 18, blocksCount: 2 })
  const v = decideUnpackBlock(opts)
  assert.equal(v.action, 'unpack')
  assert.equal(opts.unitsNeeded, 18)
  assert.equal(opts.blocksCount, 2)
})

test('constants: the vanilla unpack price exports', () => {
  assert.equal(UNPACK_UNITS_PER_BLOCK, 9)
  assert.equal(UNPACK_BLOCKS_PER_CRAFT, 1)
})
