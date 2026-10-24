// Tests for the smeltglass word (src/lib/smeltglass.mjs).
// The glass economy's middle leg: the melt priced - the sand→glass→
// bottle chain's own closure (the glassbottlecraft word's defer named
// this). Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideSmeltGlass, SMELTGLASS_COAL_SMELTS, SMELTGLASS_SAND_PER_GLASS } from '../../src/lib/smeltglass.mjs'

test('junk: a non-finite sand count refuses with junk-input', () => {
  const v = decideSmeltGlass({ sandCount: Number.NaN, coalCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.glassYield, 0)
})

test('junk: a non-finite coal count refuses (both legs policed)', () => {
  const v = decideSmeltGlass({ sandCount: 3, coalCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideSmeltGlass({ sandCount: true, coalCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideSmeltGlass({ sandCount: 3, coalCount: '1' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - sand-empty keeps, never poisons', () => {
  const v = decideSmeltGlass({ sandCount: -2, coalCount: -3 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'sand-empty')
  assert.equal(v.coalLeft, 0)
})

test('keep gate first: sand-empty keeps even coal-rich (the sand trip owns that story)', () => {
  const v = decideSmeltGlass({ sandCount: 0, coalCount: 5 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'sand-empty')
  assert.equal(v.coalLeft, 5)
  assert.equal(v.smelts, 0)
})

test('vanilla pins: one coal smelts eight, one sand -> one glass', () => {
  assert.equal(SMELTGLASS_COAL_SMELTS, 8)
  assert.equal(SMELTGLASS_SAND_PER_GLASS, 1)
})

test('one sand one coal: one honest melt, the slot burns whole (ceil law)', () => {
  const v = decideSmeltGlass({ sandCount: 1, coalCount: 1 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.reason, 'sand-fuel-affordable')
  assert.equal(v.smelts, 1)
  assert.equal(v.glassYield, 1)
  assert.equal(v.sandLeft, 0)
  assert.equal(v.coalLeft, 0)
  assert.equal(v.cost, 1)
})

test('eight sand one coal: eight melts, the fuel law priced (1 coal = 8 smelts)', () => {
  const v = decideSmeltGlass({ sandCount: 8, coalCount: 1 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 8)
  assert.equal(v.glassYield, 8)
  assert.equal(v.sandLeft, 0)
  assert.equal(v.coalLeft, 0)
})

test('nine sand one coal: the min law honest - fuel bounds the yield, the sand remainder named', () => {
  const v = decideSmeltGlass({ sandCount: 9, coalCount: 1 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 8)
  assert.equal(v.glassYield, 8)
  assert.equal(v.sandLeft, 1)
  assert.equal(v.coalLeft, 0)
})

test('three sand two coal: the ceiling burns one slot, the coal remainder named', () => {
  const v = decideSmeltGlass({ sandCount: 3, coalCount: 2 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 3)
  assert.equal(v.sandLeft, 0)
  assert.equal(v.coalLeft, 1)
})

test('no cap: forty sand five coal never clamped (forty melts, the fuel exact)', () => {
  const v = decideSmeltGlass({ sandCount: 40, coalCount: 5 })
  assert.equal(v.action, 'smelt')
  assert.equal(v.smelts, 40)
  assert.equal(v.glassYield, 40)
  assert.equal(v.coalLeft, 0)
})

test('defer: sand held but fuel short names the honest shortage (the coal trip re-tasks)', () => {
  const v = decideSmeltGlass({ sandCount: 5, coalCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'fuel-short')
  assert.equal(v.sandLeft, 5)
  assert.equal(v.cost, 1)
})

test('empty pocket: sand-empty and coal-empty keeps with zero leftovers', () => {
  const v = decideSmeltGlass({})
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'sand-empty')
  assert.equal(v.sandLeft, 0)
  assert.equal(v.coalLeft, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { sandCount: 4, coalCount: 1 }
  decideSmeltGlass(input)
  assert.deepEqual(input, { sandCount: 4, coalCount: 1 })
})
