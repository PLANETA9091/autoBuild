// Tests for the smeltchorus word (src/lib/smeltchorus.mjs).
// The end chain's own fire priced: the fruit -> popped -> block ->
// slab chain's own middle leg (the stock law's popped the furnace
// mints). Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideSmeltChorus, SMELTCHORUS_COAL_SMELTS, SMELTCHORUS_FRUIT_PER_POPPED } from '../../src/lib/smeltchorus.mjs'
import { decideChorusTrip, CHORUS_PURPUR_POPPED } from '../../src/lib/chorus.mjs'
import { decidePurpur, PURPUR_POPPED_PER_BLOCK } from '../../src/lib/purpur.mjs'
import { decidePurpurSlab } from '../../src/lib/purpurslab.mjs'

test('junk: a non-finite fruit count refuses with junk-input', () => {
  const v = decideSmeltChorus({ fruitCount: Number.NaN, coalCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.poppedYield, 0)
})

test('junk: a non-finite coal count refuses (both legs policed)', () => {
  const v = decideSmeltChorus({ fruitCount: 3, coalCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideSmeltChorus({ fruitCount: true, coalCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideSmeltChorus({ fruitCount: 3, coalCount: '1' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - fruit-empty keeps, never poisons', () => {
  const v = decideSmeltChorus({ fruitCount: -2, coalCount: -3 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'chorus-empty')
  assert.equal(v.fruitLeft, 0)
  assert.equal(v.coalLeft, 0)
})

test('keep gate: the fruit lane empty keeps - the chorus trip owns that story', () => {
  const v = decideSmeltChorus({ fruitCount: 0, coalCount: 4 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'chorus-empty')
  assert.equal(v.poppedYield, 0)
  assert.equal(v.coalLeft, 4)
})

test('defer: fruit held but fuel short names the one coal floor price', () => {
  const v = decideSmeltChorus({ fruitCount: 4, coalCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'fuel-short')
  assert.equal(v.poppedYield, 0)
  assert.equal(v.fruitLeft, 4)
  assert.equal(v.cost, 1)
})

test('smelt exact unit: one fruit one coal -> one popped, the whole coal slot spent', () => {
  const v = decideSmeltChorus({ fruitCount: 1, coalCount: 1 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.reason, 'fruit-fuel-affordable')
  assert.equal(v.smelts, 1)
  assert.equal(v.poppedYield, 1)
  assert.equal(v.fruitLeft, 0)
  assert.equal(v.coalLeft, 0)
})

test('smelt fruit-bound: the stock law\'s own four -> four popped on one coal', () => {
  const v = decideSmeltChorus({ fruitCount: 4, coalCount: 1 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 4)
  assert.equal(v.poppedYield, 4)
  assert.equal(v.fruitLeft, 0)
  assert.equal(v.coalLeft, 0) // ceil(4/8)=1, the whole slot burns
})

test('smelt fuel-bound: one coal caps at eight smelts, the fruit remainder named', () => {
  const v = decideSmeltChorus({ fruitCount: 20, coalCount: 1 })
  assert.equal(v.smelts, 8)
  assert.equal(v.poppedYield, 8)
  assert.equal(v.fruitLeft, 12)
  assert.equal(v.coalLeft, 0)
})

test('smelt multi-coal: two coals smelt sixteen, the fire shared never the pocket split', () => {
  const v = decideSmeltChorus({ fruitCount: 20, coalCount: 2 })
  assert.equal(v.smelts, 16)
  assert.equal(v.poppedYield, 16)
  assert.equal(v.fruitLeft, 4)
  assert.equal(v.coalLeft, 0)
})

test('smelt partial last burn: the ceiling spends the slot, the spare coal survives', () => {
  const v = decideSmeltChorus({ fruitCount: 5, coalCount: 2 })
  assert.equal(v.smelts, 5)
  assert.equal(v.coalLeft, 1) // ceil(5/8)=1 slot spent, one coal left
})

test('no cap: a fruit-rich fuel-rich pocket prices every melt it affords', () => {
  const v = decideSmeltChorus({ fruitCount: 200, coalCount: 30 })
  assert.equal(v.smelts, 200)
  assert.equal(v.poppedYield, 200)
  assert.equal(v.fruitLeft, 0)
  assert.equal(v.coalLeft, 5) // ceil(200/8)=25 spent
})

test('fractional floors honestly with the remainder named in the fruitLeft', () => {
  const v = decideSmeltChorus({ fruitCount: 4.5, coalCount: 1 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 4)
  assert.equal(v.poppedYield, 4)
  assert.equal(v.fruitLeft, 0.5)
})

test('the four words\' coins chain: fruit -> popped -> block -> slab end to end', () => {
  // the melt mints the stock law's own four popped
  const sc = decideSmeltChorus({ fruitCount: 12, coalCount: 12 })
  assert.equal(sc.action, 'smelt')
  assert.equal(sc.poppedYield, 12)
  // the square mints the blocks (four popped -> one block, x3)
  const pp = decidePurpur({ poppedCount: sc.poppedYield })
  assert.equal(PURPUR_POPPED_PER_BLOCK, 4)
  assert.equal(pp.action, 'craft')
  assert.equal(pp.blocks, 3)
  // the masonry spends the blocks (three -> six)
  const ps = decidePurpurSlab({ purpurBlockCount: pp.blocks })
  assert.equal(ps.action, 'craft')
  assert.equal(ps.slabs, 6)
  // the stock law the trip keeps reads the same four the melt feeds
  assert.equal(CHORUS_PURPUR_POPPED, 4)
})

test('no mutation: the pure read leaves the caller\'s census untouched', () => {
  const pocket = { fruitCount: 9, coalCount: 2 }
  decideSmeltChorus(pocket)
  assert.deepEqual(pocket, { fruitCount: 9, coalCount: 2 })
})

test('constants: the vanilla ratios exported honestly', () => {
  assert.equal(SMELTCHORUS_COAL_SMELTS, 8)
  assert.equal(SMELTCHORUS_FRUIT_PER_POPPED, 1)
})
