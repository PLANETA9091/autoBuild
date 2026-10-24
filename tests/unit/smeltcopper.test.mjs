// Tests for the smeltcopper word (src/lib/smeltcopper.mjs).
// The copper economy's own consolidation: the raw poverty priced - the
// smeltraw word's own named future (raw copper + fuel -> ingots,
// vanilla). Pure arithmetic - no mineflayer import, no server, no
// fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideSmeltCopper, SMELTCOPPER_COAL_SMELTS, SMELTCOPPER_RAW_PER_INGOT } from '../../src/lib/smeltcopper.mjs'

test('junk: a non-finite raw count refuses with junk-input', () => {
  const v = decideSmeltCopper({ rawCopperCount: Number.NaN, coalCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.ingotYield, 0)
})

test('junk: a non-finite coal count refuses (both legs policed)', () => {
  const v = decideSmeltCopper({ rawCopperCount: 3, coalCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideSmeltCopper({ rawCopperCount: true, coalCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideSmeltCopper({ rawCopperCount: 3, coalCount: '1' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - raw-empty keeps, never poisons', () => {
  const v = decideSmeltCopper({ rawCopperCount: -2, coalCount: -3 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'raw-empty')
  assert.equal(v.coalLeft, 0)
})

test('keep gate first: raw-empty keeps even coal-rich (the mining trip owns that story)', () => {
  const v = decideSmeltCopper({ rawCopperCount: 0, coalCount: 5 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'raw-empty')
  assert.equal(v.coalLeft, 5)
  assert.equal(v.smelts, 0)
})

test('vanilla pins: one coal smelts eight, one raw -> one ingot', () => {
  assert.equal(SMELTCOPPER_COAL_SMELTS, 8)
  assert.equal(SMELTCOPPER_RAW_PER_INGOT, 1)
})

test('one raw one coal: one honest smelt, the slot burns whole (ceil law)', () => {
  const v = decideSmeltCopper({ rawCopperCount: 1, coalCount: 1 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.reason, 'raw-fuel-affordable')
  assert.equal(v.smelts, 1)
  assert.equal(v.ingotYield, 1)
  assert.equal(v.rawLeft, 0)
  assert.equal(v.coalLeft, 0)
  assert.equal(v.cost, 1)
})

test('eight raw one coal: eight smelts, the fuel law priced (1 coal = 8 smelts)', () => {
  const v = decideSmeltCopper({ rawCopperCount: 8, coalCount: 1 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 8)
  assert.equal(v.ingotYield, 8)
  assert.equal(v.rawLeft, 0)
  assert.equal(v.coalLeft, 0)
})

test('nine raw one coal: the min law honest - fuel bounds the yield, the raw remainder named', () => {
  const v = decideSmeltCopper({ rawCopperCount: 9, coalCount: 1 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 8)
  assert.equal(v.ingotYield, 8)
  assert.equal(v.rawLeft, 1)
  assert.equal(v.coalLeft, 0)
})

test('three raw two coal: the ceiling burns one slot, the coal remainder named', () => {
  const v = decideSmeltCopper({ rawCopperCount: 3, coalCount: 2 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 3)
  assert.equal(v.rawLeft, 0)
  assert.equal(v.coalLeft, 1)
})

test('no cap: forty raw five coal never clamped (forty smelts, the fuel exact)', () => {
  const v = decideSmeltCopper({ rawCopperCount: 40, coalCount: 5 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 40)
  assert.equal(v.ingotYield, 40)
  assert.equal(v.coalLeft, 0)
})

test('defer: raw held but fuel short names the honest shortage (the coal trip re-tasks)', () => {
  const v = decideSmeltCopper({ rawCopperCount: 5, coalCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'fuel-short')
  assert.equal(v.rawLeft, 5)
  assert.equal(v.cost, 1)
})

test('empty pocket: raw-empty and coal-empty keeps with zero leftovers', () => {
  const v = decideSmeltCopper({})
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'raw-empty')
  assert.equal(v.rawLeft, 0)
  assert.equal(v.coalLeft, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { rawCopperCount: 4, coalCount: 1 }
  decideSmeltCopper(input)
  assert.deepEqual(input, { rawCopperCount: 4, coalCount: 1 })
})
