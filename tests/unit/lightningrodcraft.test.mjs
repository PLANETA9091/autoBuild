// Tests for the lightningrodcraft word (src/lib/lightningrodcraft.mjs).
// The storm lane's own future: the smeltcopper word's CONSUMER LAW
// named it, this word prices it (3 copper ingots -> 1 lightning rod,
// vanilla). Pure arithmetic - no mineflayer import, no server, no
// fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideLightningRodCraft, LIGHTNINGROD_COPPER_PER_CRAFT, LIGHTNINGROD_RODS_PER_CRAFT } from '../../src/lib/lightningrodcraft.mjs'

test('junk: a non-finite rod count refuses with junk-input', () => {
  const v = decideLightningRodCraft({ rodCount: Number.NaN, copperIngotCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.rodsYield, 0)
})

test('junk: a non-finite copper count refuses (both legs policed)', () => {
  const v = decideLightningRodCraft({ rodCount: 0, copperIngotCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideLightningRodCraft({ rodCount: true, copperIngotCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideLightningRodCraft({ rodCount: 0, copperIngotCount: '3' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - copper-short defers, never poisons', () => {
  const v = decideLightningRodCraft({ rodCount: -1, copperIngotCount: -7 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'copper-short')
  assert.equal(v.copperLeft, 0)
})

test('keep gate first: a rod held keeps even copper-rich (the storm instrument never doubles)', () => {
  const v = decideLightningRodCraft({ rodCount: 1, copperIngotCount: 99 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'rod-held')
  assert.equal(v.copperLeft, 99)
  assert.equal(v.crafts, 0)
  assert.equal(v.rodsYield, 0)
})

test('vanilla pins: three copper price the rod, one rod the craft yields', () => {
  assert.equal(LIGHTNINGROD_COPPER_PER_CRAFT, 3)
  assert.equal(LIGHTNINGROD_RODS_PER_CRAFT, 1)
})

test('exactly three copper: one honest craft, the leftover zero', () => {
  const v = decideLightningRodCraft({ rodCount: 0, copperIngotCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'copper-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.rodsYield, 1)
  assert.equal(v.copperLeft, 0)
})

test('four copper: the floor law - three price the rod, one named leftover', () => {
  const v = decideLightningRodCraft({ rodCount: 0, copperIngotCount: 4 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.rodsYield, 1)
  assert.equal(v.copperLeft, 1)
})

test('nine copper: three crafts the floor law honest (the yield never inflated)', () => {
  const v = decideLightningRodCraft({ rodCount: 0, copperIngotCount: 9 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 3)
  assert.equal(v.rodsYield, 3)
  assert.equal(v.copperLeft, 0)
})

test('no cap: thirty copper never clamped (ten rods, the pocket exact)', () => {
  const v = decideLightningRodCraft({ rodCount: 0, copperIngotCount: 30 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.rodsYield, 10)
  assert.equal(v.copperLeft, 0)
})

test('defer: copper-short names the three-ingot floor price (the smelt trip re-tasks)', () => {
  const v = decideLightningRodCraft({ rodCount: 0, copperIngotCount: 2 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'copper-short')
  assert.equal(v.copperLeft, 2)
  assert.equal(v.crafts, 0)
  assert.equal(v.rodsYield, 0)
})

test('empty pocket: rod-empty and copper-empty defers with zero leftovers', () => {
  const v = decideLightningRodCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'copper-short')
  assert.equal(v.copperLeft, 0)
  assert.equal(v.rods, 0)
})

test('consumer law: the smeltcopper word\'s named future priced - the craft reason names affordability and the yield stays 1:1', () => {
  const v = decideLightningRodCraft({ rodCount: 0, copperIngotCount: 6 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'copper-affordable')
  assert.equal(v.rodsYield, v.crafts * LIGHTNINGROD_RODS_PER_CRAFT)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { rodCount: 0, copperIngotCount: 3 }
  decideLightningRodCraft(input)
  assert.deepEqual(input, { rodCount: 0, copperIngotCount: 3 })
})
