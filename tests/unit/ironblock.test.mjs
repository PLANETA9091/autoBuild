// Tests for the ironblock word (src/lib/ironblock.mjs).
// The iron ingot's own pack: the raw -> ingot -> block chain's own
// storage leg (the goldblock word's sister metal). Pure arithmetic -
// no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideIronBlock, IRONBLOCK_INGOT_PER_BLOCK, IRONBLOCK_BLOCKS_PER_CRAFT } from '../../src/lib/ironblock.mjs'
import { decideSmeltRaw } from '../../src/lib/smeltraw.mjs'
import { decideGoldBlock, GOLDBLOCK_INGOT_PER_BLOCK } from '../../src/lib/goldblock.mjs'

test('junk: a non-finite ingot count refuses with junk-input', () => {
  const v = decideIronBlock({ ingotCount: Number.NaN, blocksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.blocksYield, 0)
})

test('junk: a non-finite blocks count refuses (both legs policed)', () => {
  const v = decideIronBlock({ ingotCount: 9, blocksCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideIronBlock({ ingotCount: true, blocksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - ingot-empty keeps, never poisons', () => {
  const v = decideIronBlock({ ingotCount: -4, blocksCount: -1 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'ingot-empty')
  assert.equal(v.ingotLeft, 0)
  assert.equal(v.blocks, 0)
})

test('keep gate: the ingot lane empty keeps - the smeltraw lane owns that story', () => {
  const v = decideIronBlock({ ingotCount: 0, blocksCount: 2 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'ingot-empty')
  assert.equal(v.blocksYield, 0)
  assert.equal(v.blocks, 2) // the held blocks ride untouched
})

test('defer: ingots held but short of the nine name the honest shortage', () => {
  const v = decideIronBlock({ ingotCount: 8, blocksCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'ingot-short')
  assert.equal(v.ingotLeft, 8)
  assert.equal(v.blocksYield, 0)
})

test('craft exact unit: nine ingots -> one block, the remainder named', () => {
  const v = decideIronBlock({ ingotCount: 9, blocksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'ingot-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.blocksYield, 1)
  assert.equal(v.ingotLeft, 0)
})

test('craft multi: eighteen ingots -> two blocks', () => {
  const v = decideIronBlock({ ingotCount: 18, blocksCount: 0 })
  assert.equal(v.crafts, 2)
  assert.equal(v.blocksYield, 2)
  assert.equal(v.ingotLeft, 0)
})

test('craft remainder: ten ingots -> one block + one named', () => {
  const v = decideIronBlock({ ingotCount: 10, blocksCount: 0 })
  assert.equal(v.crafts, 1)
  assert.equal(v.blocksYield, 1)
  assert.equal(v.ingotLeft, 1)
})

test('no cap: a bulk pocket packs every block it affords', () => {
  const v = decideIronBlock({ ingotCount: 117, blocksCount: 0 })
  assert.equal(v.crafts, 13)
  assert.equal(v.blocksYield, 13)
  assert.equal(v.ingotLeft, 0) // 117 = 13*9
})

test('fractional floors honestly with the remainder named in the ingotLeft', () => {
  const v = decideIronBlock({ ingotCount: 9.5, blocksCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.ingotLeft, 0.5)
})

test('the chain pins: smeltraw mints the ingot this word packs; the gold sister reads the same nine', () => {
  // the melt mints the ingots the pack spends (the chain's own handover)
  const raw = decideSmeltRaw({ rawIronCount: 27, coalCount: 8 })
  assert.equal(raw.action, 'smelt')
  const v = decideIronBlock({ ingotCount: raw.ingotYield ?? 27, blocksCount: 0 })
  assert.equal(v.blocksYield, 3)
  // the sister metal's own even hand: both packs read the same nine
  assert.equal(IRONBLOCK_INGOT_PER_BLOCK, 9)
  assert.equal(GOLDBLOCK_INGOT_PER_BLOCK, 9)
})

test('no mutation: the pure read leaves the caller\'s census untouched', () => {
  const pocket = { ingotCount: 27, blocksCount: 1 }
  decideIronBlock(pocket)
  assert.deepEqual(pocket, { ingotCount: 27, blocksCount: 1 })
})

test('constants: the vanilla pack ratios exported honestly', () => {
  assert.equal(IRONBLOCK_INGOT_PER_BLOCK, 9)
  assert.equal(IRONBLOCK_BLOCKS_PER_CRAFT, 1)
})
