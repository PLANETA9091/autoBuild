// Tests for the coalblock word (src/lib/coalblock.mjs).
// The fuel's own pack: nine coal -> one coal block, the fourth pack
// (the goldblock/ironblock/copperblock words' kin, the smelt
// family's own fuel unit's storage form). Pure arithmetic.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideCoalBlock, COALBLOCK_COAL_PER_BLOCK, COALBLOCK_BLOCKS_PER_CRAFT } from '../../src/lib/coalblock.mjs'
import { decideSmeltChorus, SMELTCHORUS_COAL_SMELTS } from '../../src/lib/smeltchorus.mjs'
import { decideCopperBlock, COPPERBLOCK_INGOT_PER_BLOCK } from '../../src/lib/copperblock.mjs'
import { decideIronBlock, IRONBLOCK_INGOT_PER_BLOCK } from '../../src/lib/ironblock.mjs'
import { decideGoldBlock, GOLDBLOCK_INGOT_PER_BLOCK } from '../../src/lib/goldblock.mjs'

test('junk: a non-finite coal count refuses with junk-input', () => {
  const v = decideCoalBlock({ coalCount: Number.NaN, blocksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.blocksYield, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideCoalBlock({ coalCount: true, blocksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - coal-empty keeps, never poisons', () => {
  const v = decideCoalBlock({ coalCount: -9, blocksCount: -1 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'coal-empty')
  assert.equal(v.blocks, 0)
})

test('keep gate: the coal lane empty keeps - the mining lane owns that story', () => {
  const v = decideCoalBlock({ coalCount: 0, blocksCount: 4 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'coal-empty')
  assert.equal(v.blocks, 4) // the held blocks ride untouched
})

test('defer: coal held but short of the nine names the honest shortage', () => {
  const v = decideCoalBlock({ coalCount: 7, blocksCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'coal-short')
  assert.equal(v.coalLeft, 7)
  assert.equal(v.blocksYield, 0)
})

test('craft exact unit: nine coal -> one block, the remainder named', () => {
  const v = decideCoalBlock({ coalCount: 9, blocksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'coal-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.blocksYield, 1)
  assert.equal(v.coalLeft, 0)
})

test('craft remainder: twelve coal -> one block + three named', () => {
  const v = decideCoalBlock({ coalCount: 12, blocksCount: 0 })
  assert.equal(v.crafts, 1)
  assert.equal(v.blocksYield, 1)
  assert.equal(v.coalLeft, 3)
})

test('no cap: a bulk pocket packs every block it affords', () => {
  const v = decideCoalBlock({ coalCount: 99, blocksCount: 0 })
  assert.equal(v.crafts, 11)
  assert.equal(v.blocksYield, 11)
  assert.equal(v.coalLeft, 0)
})

test('fractional floors honestly with the remainder named in the coalLeft', () => {
  const v = decideCoalBlock({ coalCount: 9.75, blocksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.coalLeft, 0.75)
})

test('the chain pins: the fuel law\'s own unit packs; the four packs read the same nine', () => {
  // the fuel law the burn prices (one coal smelts eight), the pack the storage
  const sc = decideSmeltChorus({ fruitCount: 8, coalCount: 1 })
  assert.equal(sc.action, 'smelt')
  assert.equal(SMELTCHORUS_COAL_SMELTS, 8)
  // the pack family's own even hand: all four pack words read the same nine
  assert.equal(COALBLOCK_COAL_PER_BLOCK, 9)
  assert.equal(COPPERBLOCK_INGOT_PER_BLOCK, 9)
  assert.equal(IRONBLOCK_INGOT_PER_BLOCK, 9)
  assert.equal(GOLDBLOCK_INGOT_PER_BLOCK, 9)
})

test('no mutation: the pure read leaves the caller\'s census untouched', () => {
  const pocket = { coalCount: 27, blocksCount: 1 }
  decideCoalBlock(pocket)
  assert.deepEqual(pocket, { coalCount: 27, blocksCount: 1 })
})

test('constants: the vanilla pack ratios exported honestly', () => {
  assert.equal(COALBLOCK_COAL_PER_BLOCK, 9)
  assert.equal(COALBLOCK_BLOCKS_PER_CRAFT, 1)
})
