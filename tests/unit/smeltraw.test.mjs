// Tests for the smeltraw word (src/lib/smeltraw.mjs).
// The fire lane's own consolidation: the raw poverty priced - the
// furnacecraft word's own successor leg (raw iron + fuel -> ingots,
// vanilla). Pure arithmetic - no mineflayer import, no server, no
// fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideSmeltRaw, SMELTRAW_COAL_SMELTS, SMELTRAW_RAW_PER_INGOT } from '../../src/lib/smeltraw.mjs'

test('junk: a non-finite raw count refuses with junk-input', () => {
  const v = decideSmeltRaw({ rawIronCount: Number.NaN, coalCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.ingotYield, 0)
})

test('junk: a non-finite coal count refuses (both legs policed)', () => {
  const v = decideSmeltRaw({ rawIronCount: 3, coalCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideSmeltRaw({ rawIronCount: true, coalCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideSmeltRaw({ rawIronCount: 3, coalCount: '1' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - raw-empty keeps, never poisons', () => {
  const v = decideSmeltRaw({ rawIronCount: -2, coalCount: -3 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'raw-empty')
  assert.equal(v.coalLeft, 0)
})

test('keep gate first: raw-empty keeps even coal-rich (the mining trip owns that story)', () => {
  const v = decideSmeltRaw({ rawIronCount: 0, coalCount: 5 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'raw-empty')
  assert.equal(v.coalLeft, 5)
  assert.equal(v.smelts, 0)
})

test('vanilla pins: one coal smelts eight, one raw -> one ingot', () => {
  assert.equal(SMELTRAW_COAL_SMELTS, 8)
  assert.equal(SMELTRAW_RAW_PER_INGOT, 1)
})

test('one raw one coal: one honest smelt, the slot burns whole (ceil law)', () => {
  const v = decideSmeltRaw({ rawIronCount: 1, coalCount: 1 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.reason, 'raw-fuel-affordable')
  assert.equal(v.smelts, 1)
  assert.equal(v.ingotYield, 1)
  assert.equal(v.rawLeft, 0)
  assert.equal(v.coalLeft, 0)
  assert.equal(v.cost, 1)
})

test('eight raw one coal: eight smelts, the fuel law priced (1 coal = 8 smelts)', () => {
  const v = decideSmeltRaw({ rawIronCount: 8, coalCount: 1 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 8)
  assert.equal(v.ingotYield, 8)
  assert.equal(v.rawLeft, 0)
  assert.equal(v.coalLeft, 0)
})

test('nine raw one coal: the min law honest - fuel bounds the yield, the raw remainder named', () => {
  const v = decideSmeltRaw({ rawIronCount: 9, coalCount: 1 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 8)
  assert.equal(v.ingotYield, 8)
  assert.equal(v.rawLeft, 1)
  assert.equal(v.coalLeft, 0)
})

test('three raw two coal: the ceiling burns one slot, the coal remainder named', () => {
  const v = decideSmeltRaw({ rawIronCount: 3, coalCount: 2 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 3)
  assert.equal(v.rawLeft, 0)
  assert.equal(v.coalLeft, 1)
})

test('no cap: forty raw five coal never clamped (forty smelts, the fuel exact)', () => {
  const v = decideSmeltRaw({ rawIronCount: 40, coalCount: 5 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 40)
  assert.equal(v.ingotYield, 40)
  assert.equal(v.coalLeft, 0)
})

test('defer: raw held but fuel short names the honest shortage (the coal trip re-tasks)', () => {
  const v = decideSmeltRaw({ rawIronCount: 5, coalCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'fuel-short')
  assert.equal(v.rawLeft, 5)
  assert.equal(v.cost, 1)
})

test('empty pocket: raw-empty and coal-empty keeps with zero leftovers', () => {
  const v = decideSmeltRaw({})
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'raw-empty')
  assert.equal(v.rawLeft, 0)
  assert.equal(v.coalLeft, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { rawIronCount: 4, coalCount: 1 }
  decideSmeltRaw(input)
  assert.deepEqual(input, { rawIronCount: 4, coalCount: 1 })
})
