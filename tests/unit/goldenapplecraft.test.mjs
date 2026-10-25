// Tests for the goldenapple word (src/lib/goldenapplecraft.mjs).
// The food lane's own future: the smeltgold word's CONSUMER LAW's own
// named form priced - 8 gold ingots + 1 apple -> 1 golden apple,
// vanilla. Pure arithmetic - no mineflayer import, no server, no
// fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideGoldenAppleCraft, GOLDENAPPLE_GOLD_PER_CRAFT, GOLDENAPPLE_APPLE_PER_CRAFT, GOLDENAPPLE_PER_CRAFT } from '../../src/lib/goldenapplecraft.mjs'

test('junk: a non-finite golden count refuses with junk-input', () => {
  const v = decideGoldenAppleCraft({ goldenAppleCount: Number.NaN, goldIngotCount: 8, appleCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.goldenYield, 0)
})

test('junk: a non-finite gold count refuses (all legs policed)', () => {
  const v = decideGoldenAppleCraft({ goldenAppleCount: 0, goldIngotCount: Number.POSITIVE_INFINITY, appleCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideGoldenAppleCraft({ goldenAppleCount: 0, goldIngotCount: 8, appleCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideGoldenAppleCraft({ goldenAppleCount: 0, goldIngotCount: '8', appleCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - gold-short defers, never poisons', () => {
  const v = decideGoldenAppleCraft({ goldenAppleCount: -1, goldIngotCount: -8, appleCount: -2 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'gold-short')
  assert.equal(v.goldLeft, 0)
  assert.equal(v.appleLeft, 0)
  assert.equal(v.golden, 0)
})

test('keep gate first: golden-held keeps even ingot-rich (the food form never doubles)', () => {
  const v = decideGoldenAppleCraft({ goldenAppleCount: 1, goldIngotCount: 64, appleCount: 9 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'golden-held')
  assert.equal(v.goldLeft, 64)
  assert.equal(v.appleLeft, 9)
  assert.equal(v.crafts, 0)
})

test('vanilla pins: eight ingots wrap one apple, one golden rides out', () => {
  assert.equal(GOLDENAPPLE_GOLD_PER_CRAFT, 8)
  assert.equal(GOLDENAPPLE_APPLE_PER_CRAFT, 1)
  assert.equal(GOLDENAPPLE_PER_CRAFT, 1)
})

test('eight gold one apple: one honest craft, the leftovers zero', () => {
  const v = decideGoldenAppleCraft({ goldenAppleCount: 0, goldIngotCount: 8, appleCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'gold-apple-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.goldenYield, 1)
  assert.equal(v.goldLeft, 0)
  assert.equal(v.appleLeft, 0)
})

test('sixteen gold two apples: two crafts, the min law honest both legs', () => {
  const v = decideGoldenAppleCraft({ goldenAppleCount: 0, goldIngotCount: 16, appleCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.goldenYield, 2)
  assert.equal(v.goldLeft, 0)
  assert.equal(v.appleLeft, 0)
})

test('fifteen gold two apples: the min law binds - the gold leg starves the yield, leftovers named', () => {
  const v = decideGoldenAppleCraft({ goldenAppleCount: 0, goldIngotCount: 15, appleCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.goldenYield, 1)
  assert.equal(v.goldLeft, 7)
  assert.equal(v.appleLeft, 1)
})

test('no cap: eighty gold ten apples never clamped (ten crafts, the wrap exact)', () => {
  const v = decideGoldenAppleCraft({ goldenAppleCount: 0, goldIngotCount: 80, appleCount: 10 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.goldenYield, 10)
  assert.equal(v.goldLeft, 0)
  assert.equal(v.appleLeft, 0)
})

test('defer: gold-short names the honest shortage (the smeltgold lane re-tasks the melt)', () => {
  const v = decideGoldenAppleCraft({ goldenAppleCount: 0, goldIngotCount: 7, appleCount: 5 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'gold-short')
  assert.equal(v.goldLeft, 7)
  assert.equal(v.appleLeft, 5)
  assert.equal(v.crafts, 0)
})

test('defer: apple-short names the orchard trip (the oak leaves own that story)', () => {
  const v = decideGoldenAppleCraft({ goldenAppleCount: 0, goldIngotCount: 24, appleCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'apple-short')
  assert.equal(v.goldLeft, 24)
  assert.equal(v.crafts, 0)
})

test('empty pocket: golden-empty and legs empty defers the honest gold-short, zero leftovers', () => {
  const v = decideGoldenAppleCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'gold-short')
  assert.equal(v.goldLeft, 0)
  assert.equal(v.appleLeft, 0)
  assert.equal(v.golden, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { goldenAppleCount: 0, goldIngotCount: 16, appleCount: 2 }
  decideGoldenAppleCraft(input)
  assert.deepEqual(input, { goldenAppleCount: 0, goldIngotCount: 16, appleCount: 2 })
})
