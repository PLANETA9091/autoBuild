// Tests for the charcoal word (src/lib/charcoal.mjs).
// The renewable fuel's own leg: the mint decision the fuelbank's
// own prose reserved ('charcoal the renewable one - a future
// dedicated leg') and never spent. Pure arithmetic.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideCharcoal, CHARCOAL_LOG_PER_CHARCOAL, CHARCOAL_FUEL_CEILING } from '../../src/lib/charcoal.mjs'
import { FUEL_YIELD } from '../../src/lib/smelting.mjs'

test('junk: a non-finite log count refuses with junk-input', () => {
  const v = decideCharcoal({ logCount: Number.NaN, fuelCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.charcoalYield, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideCharcoal({ logCount: 4, fuelCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - log-empty keeps, never poisons', () => {
  const v = decideCharcoal({ logCount: -3, fuelCount: -8 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'log-empty')
  assert.equal(v.logsLeft, 0)
  assert.equal(v.fuelCount, 0)
})

test('keep: the log lane empty reads first - the mint\'s own silence', () => {
  const v = decideCharcoal({ logCount: 0, fuelCount: 3 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'log-empty')
  assert.equal(v.smelts, 0)
  assert.equal(v.charcoalYield, 0)
  assert.equal(v.fuelCount, 3)
})

test('defer: the fuel lane rich - the SLOT LAW\'s own brake (a full burn slot never mints)', () => {
  const v = decideCharcoal({ logCount: 10, fuelCount: 8 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'fuel-rich')
  assert.equal(v.smelts, 0)
  assert.equal(v.charcoalYield, 0)
  assert.equal(v.logsLeft, 10)
})

test('defer boundary: the ceiling reads eight - nine fuel units defer too', () => {
  const v = decideCharcoal({ logCount: 10, fuelCount: 9 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'fuel-rich')
})

test('smelt: the lean lane - the deficit the ceiling names (fuel 3, mint 5)', () => {
  const v = decideCharcoal({ logCount: 10, fuelCount: 3 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.reason, 'fuel-lean')
  assert.equal(v.smelts, 5)
  assert.equal(v.charcoalYield, 5)
  assert.equal(v.logsLeft, 5)
})

test('smelt: the exact fill - the mint lands the pocket on the ceiling', () => {
  const v = decideCharcoal({ logCount: 5, fuelCount: 3 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 5)
  assert.equal(v.charcoalYield, 5)
  assert.equal(v.logsLeft, 0)
  assert.equal(3 + v.charcoalYield, CHARCOAL_FUEL_CEILING)
})

test('smelt: the log-short pocket mints what it affords - the partial mint never deferred', () => {
  const v = decideCharcoal({ logCount: 2, fuelCount: 0 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.reason, 'fuel-lean')
  assert.equal(v.smelts, 2)
  assert.equal(v.charcoalYield, 2)
  assert.equal(v.logsLeft, 0)
})

test('no overshoot: the mint never exceeds the deficit (the slot\'s own bound)', () => {
  const v = decideCharcoal({ logCount: 99, fuelCount: 1 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 7)
  assert.equal(v.charcoalYield, 7)
  assert.equal(v.logsLeft, 92)
})

test('fractional logs floor honestly - whole logs the furnace trades', () => {
  const v = decideCharcoal({ logCount: 7.5, fuelCount: 0 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 7)
  assert.equal(v.charcoalYield, 7)
})

test('renewable law: the charcoal is the COAL\'s own twin - both burn eight (the FUEL_YIELD pin)', () => {
  assert.equal(FUEL_YIELD.charcoal, 8)
  assert.equal(FUEL_YIELD.coal, 8)
  assert.equal(CHARCOAL_FUEL_CEILING, FUEL_YIELD.charcoal)
})

test('held law: the read mutates nothing (the frozen input survives)', () => {
  const opts = Object.freeze({ logCount: 6, fuelCount: 2 })
  const v = decideCharcoal(opts)
  assert.equal(v.action, 'smelt')
  assert.equal(opts.logCount, 6)
  assert.equal(opts.fuelCount, 2)
})

test('constants: the vanilla mint price and the slot ceiling export', () => {
  assert.equal(CHARCOAL_LOG_PER_CHARCOAL, 1)
  assert.equal(CHARCOAL_FUEL_CEILING, 8)
})
