// Tests for the waterfill word (src/lib/waterfill.mjs).
// The brewing front's own middle leg: the glassbottlecraft word prices
// what the GLASS becomes, this word prices what the BOTTLE becomes
// (1 glass bottle + a water source -> 1 water bottle, vanilla). Pure
// arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideWaterFill, WATERFILL_BOTTLE_PER_FILL, WATERFILL_WATER_PER_FILL } from '../../src/lib/waterfill.mjs'

test('junk: a non-finite bottle count refuses with junk-input', () => {
  const v = decideWaterFill({ bottleCount: Number.NaN, waterBottleCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.waterYield, 0)
})

test('junk: a non-finite stock count refuses (both legs policed)', () => {
  const v = decideWaterFill({ bottleCount: 1, waterBottleCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideWaterFill({ bottleCount: true, waterBottleCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideWaterFill({ bottleCount: 1, waterBottleCount: '3' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - the honest keep, never poisons', () => {
  const v = decideWaterFill({ bottleCount: -2, waterBottleCount: -7 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'bottle-empty')
  assert.equal(v.waterBottleLeft, 0)
})

test('keep gate first: the bottle lane empty keeps even stock-rich (the fill lane silent, the glassbottlecraft lane owns the story)', () => {
  const v = decideWaterFill({ bottleCount: 0, waterBottleCount: 9 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'bottle-empty')
  assert.equal(v.waterBottleLeft, 9)
  assert.equal(v.fills, 0)
  assert.equal(v.waterYield, 0)
})

test('vanilla pins: one bottle rides one fill, one water bottle the fill yields', () => {
  assert.equal(WATERFILL_BOTTLE_PER_FILL, 1)
  assert.equal(WATERFILL_WATER_PER_FILL, 1)
})

test('exactly one bottle: one honest fill, the leftover zero', () => {
  const v = decideWaterFill({ bottleCount: 1, waterBottleCount: 0 })
  assert.equal(v.action, 'fill')
  assert.equal(v.reason, 'bottles-affordable')
  assert.equal(v.fills, 1)
  assert.equal(v.waterYield, 1)
  assert.equal(v.bottleLeft, 0)
  assert.equal(v.waterBottleLeft, 0)
})

test('four bottles: four fills the floor law honest (the yield 1:1, never inflated)', () => {
  const v = decideWaterFill({ bottleCount: 4, waterBottleCount: 0 })
  assert.equal(v.action, 'fill')
  assert.equal(v.fills, 4)
  assert.equal(v.waterYield, 4)
  assert.equal(v.bottleLeft, 0)
})

test('no cap: thirty bottles never clamped (thirty fills, the pocket exact)', () => {
  const v = decideWaterFill({ bottleCount: 30, waterBottleCount: 0 })
  assert.equal(v.action, 'fill')
  assert.equal(v.fills, 30)
  assert.equal(v.waterYield, 30)
  assert.equal(v.bottleLeft, 0)
})

test('fractional census floors to the honest integer, the remainder named', () => {
  const v = decideWaterFill({ bottleCount: 2.5, waterBottleCount: 0 })
  assert.equal(v.action, 'fill')
  assert.equal(v.fills, 2)
  assert.equal(v.waterYield, 2)
  assert.equal(v.bottleLeft, 0.5)
})

test('the wrap never crosses: the fill yield rides waterYield, the held stock rides waterBottleLeft untouched', () => {
  const v = decideWaterFill({ bottleCount: 2, waterBottleCount: 3 })
  assert.equal(v.action, 'fill')
  assert.equal(v.fills, 2)
  assert.equal(v.waterYield, 2)
  assert.equal(v.waterBottleLeft, 3)
  assert.equal(v.bottleLeft, 0)
})

test('empty pocket: the keep gate prices the EMPTY lane honestly (the .461 heal read FIRST)', () => {
  const v = decideWaterFill({})
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'bottle-empty')
  assert.equal(v.fills, 0)
  assert.equal(v.waterYield, 0)
  assert.equal(v.waterBottleLeft, 0)
})

test('chain law: the glassbottlecraft word prices what the GLASS becomes, this word what the BOTTLE becomes (the fill reason names affordability)', () => {
  const v = decideWaterFill({ bottleCount: 3, waterBottleCount: 1 })
  assert.equal(v.action, 'fill')
  assert.equal(v.reason, 'bottles-affordable')
  assert.equal(v.waterYield, v.fills * WATERFILL_WATER_PER_FILL)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { bottleCount: 2, waterBottleCount: 3 }
  decideWaterFill(input)
  assert.deepEqual(input, { bottleCount: 2, waterBottleCount: 3 })
})
