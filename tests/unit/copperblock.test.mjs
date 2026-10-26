// Tests for the copperblock word (src/lib/copperblock.mjs).
// The copper ingot's own pack: the raw -> ingot -> block chain's own
// storage leg, the third metal (the goldblock and ironblock words'
// kin). Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideCopperBlock, COPPERBLOCK_INGOT_PER_BLOCK, COPPERBLOCK_BLOCKS_PER_CRAFT } from '../../src/lib/copperblock.mjs'
import { decideSmeltCopper } from '../../src/lib/smeltcopper.mjs'
import { decideIronBlock, IRONBLOCK_INGOT_PER_BLOCK } from '../../src/lib/ironblock.mjs'
import { decideGoldBlock, GOLDBLOCK_INGOT_PER_BLOCK } from '../../src/lib/goldblock.mjs'

test('junk: a non-finite ingot count refuses with junk-input', () => {
  const v = decideCopperBlock({ ingotCount: Number.NaN, blocksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.blocksYield, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideCopperBlock({ ingotCount: false, blocksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - ingot-empty keeps, never poisons', () => {
  const v = decideCopperBlock({ ingotCount: -9, blocksCount: -2 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'ingot-empty')
  assert.equal(v.blocks, 0)
})

test('keep gate: the ingot lane empty keeps - the smeltcopper lane owns that story', () => {
  const v = decideCopperBlock({ ingotCount: 0, blocksCount: 3 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'ingot-empty')
  assert.equal(v.blocks, 3) // the held blocks ride untouched
})

test('defer: ingots held but short of the nine name the honest shortage', () => {
  const v = decideCopperBlock({ ingotCount: 5, blocksCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'ingot-short')
  assert.equal(v.ingotLeft, 5)
  assert.equal(v.blocksYield, 0)
})

test('craft exact unit: nine ingots -> one block, the remainder named', () => {
  const v = decideCopperBlock({ ingotCount: 9, blocksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'ingot-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.blocksYield, 1)
  assert.equal(v.ingotLeft, 0)
})

test('craft remainder: eleven ingots -> one block + two named', () => {
  const v = decideCopperBlock({ ingotCount: 11, blocksCount: 0 })
  assert.equal(v.crafts, 1)
  assert.equal(v.blocksYield, 1)
  assert.equal(v.ingotLeft, 2)
})

test('no cap: a bulk pocket packs every block it affords', () => {
  const v = decideCopperBlock({ ingotCount: 108, blocksCount: 0 })
  assert.equal(v.crafts, 12)
  assert.equal(v.blocksYield, 12)
  assert.equal(v.ingotLeft, 0)
})

test('fractional floors honestly with the remainder named in the ingotLeft', () => {
  const v = decideCopperBlock({ ingotCount: 18.25, blocksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.ingotLeft, 0.25)
})

test('the chain pins: smeltcopper mints the ingot this word packs; the three metals read the same nine', () => {
  // the melt mints the ingots the pack spends (the chain's own handover)
  const raw = decideSmeltCopper({ rawCopperCount: 45, coalCount: 8 })
  assert.equal(raw.action, 'smelt')
  const v = decideCopperBlock({ ingotCount: raw.ingotYield, blocksCount: 0 })
  assert.equal(v.blocksYield, 5)
  // the pack family's own even hand: all three pack words read the same nine
  assert.equal(COPPERBLOCK_INGOT_PER_BLOCK, 9)
  assert.equal(IRONBLOCK_INGOT_PER_BLOCK, 9)
  assert.equal(GOLDBLOCK_INGOT_PER_BLOCK, 9)
})

test('no mutation: the pure read leaves the caller\'s census untouched', () => {
  const pocket = { ingotCount: 45, blocksCount: 2 }
  decideCopperBlock(pocket)
  assert.deepEqual(pocket, { ingotCount: 45, blocksCount: 2 })
})

test('constants: the vanilla pack ratios exported honestly', () => {
  assert.equal(COPPERBLOCK_INGOT_PER_BLOCK, 9)
  assert.equal(COPPERBLOCK_BLOCKS_PER_CRAFT, 1)
})
