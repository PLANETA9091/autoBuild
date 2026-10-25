// Tests for the nuggetcraft word (src/lib/nuggetcraft.mjs).
// The split lane's own future: the goldencarrot word's own named
// supply priced - 1 gold ingot -> 9 gold nuggets, vanilla (the
// shapeless split, the craft free, the fire never rides). Pure
// arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideNuggetCraft, NUGGETCRAFT_INGOT_PER_SPLIT, NUGGETCRAFT_NUGGET_PER_SPLIT } from '../../src/lib/nuggetcraft.mjs'

test('junk: a non-finite ingot count refuses with junk-input', () => {
  const v = decideNuggetCraft({ ingotCount: Number.NaN, nuggetCount: 5 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.nuggetYield, 0)
})

test('junk: a non-finite nugget count refuses (both legs policed)', () => {
  const v = decideNuggetCraft({ ingotCount: 2, nuggetCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideNuggetCraft({ ingotCount: true, nuggetCount: 5 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideNuggetCraft({ ingotCount: 2, nuggetCount: '5' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - ingot-empty keeps, never poisons', () => {
  const v = decideNuggetCraft({ ingotCount: -3, nuggetCount: -9 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'ingot-empty')
  assert.equal(v.nuggetLeft, 0)
  assert.equal(v.splits, 0)
})

test('keep gate first: ingot-empty keeps even nugget-rich (the supply word owns its silence)', () => {
  const v = decideNuggetCraft({ ingotCount: 0, nuggetCount: 72 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'ingot-empty')
  assert.equal(v.nuggetLeft, 72)
  assert.equal(v.splits, 0)
})

test('vanilla pins: one ingot mints nine nuggets', () => {
  assert.equal(NUGGETCRAFT_INGOT_PER_SPLIT, 1)
  assert.equal(NUGGETCRAFT_NUGGET_PER_SPLIT, 9)
})

test('one ingot: one honest split, nine nuggets, the ingot spent', () => {
  const v = decideNuggetCraft({ ingotCount: 1, nuggetCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'ingot-affordable')
  assert.equal(v.splits, 1)
  assert.equal(v.nuggetYield, 9)
  assert.equal(v.ingotLeft, 0)
  assert.equal(v.nuggetLeft, 0)
})

test('two ingots: two splits, eighteen nuggets (the ratio exact)', () => {
  const v = decideNuggetCraft({ ingotCount: 2, nuggetCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.splits, 2)
  assert.equal(v.nuggetYield, 18)
  assert.equal(v.ingotLeft, 0)
})

test('held nuggets ride through: the yield never silently merged into the pocket', () => {
  const v = decideNuggetCraft({ ingotCount: 2, nuggetCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.splits, 2)
  assert.equal(v.nuggetYield, 18)
  assert.equal(v.nuggetLeft, 3)
})

test('no cap: forty ingots never clamped (forty splits, the 360 exact)', () => {
  const v = decideNuggetCraft({ ingotCount: 40, nuggetCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.splits, 40)
  assert.equal(v.nuggetYield, 360)
  assert.equal(v.ingotLeft, 0)
})

test('fractional ingot floors to the honest integer, the remainder named', () => {
  const v = decideNuggetCraft({ ingotCount: 2.5, nuggetCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.splits, 2)
  assert.equal(v.nuggetYield, 18)
  assert.equal(v.ingotLeft, 0.5)
})

test('empty pocket: ingot-empty and nugget-empty keeps with zero leftovers', () => {
  const v = decideNuggetCraft({})
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'ingot-empty')
  assert.equal(v.ingotLeft, 0)
  assert.equal(v.nuggetLeft, 0)
  assert.equal(v.splits, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { ingotCount: 4, nuggetCount: 1 }
  decideNuggetCraft(input)
  assert.deepEqual(input, { ingotCount: 4, nuggetCount: 1 })
})

test('one-leg law: no defer exists - the craft-free split prices past the empty gate only', () => {
  // the one-leg law's own reading: with the ingot affordable the word
  // crafts - no fuel leg, no honest shortage lives past the empty gate
  const v = decideNuggetCraft({ ingotCount: 7, nuggetCount: 100 })
  assert.equal(v.action, 'craft')
  assert.equal(v.splits, 7)
  assert.equal(v.nuggetYield, 63)
  assert.equal(v.nuggetLeft, 100)
  assert.equal(v.ingotLeft, 0)
})
