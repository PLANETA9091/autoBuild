// Tests for the repaircraft word (src/lib/repaircraft.mjs).
// The station gate between the toolcare word's intent and the anvil
// act: the wear priced (v0.976.377), the station priced (v0.976.446),
// now the act between them. Pure arithmetic - no mineflayer import,
// no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideRepairCraft, REPAIRCRAFT_ANVILS_REQUIRED, REPAIRCRAFT_MATERIAL_PER_REPAIR } from '../../src/lib/repaircraft.mjs'

test('junk: a non-finite material count refuses with junk-input', () => {
  const v = decideRepairCraft({ wornCount: 1, anvilCount: 1, materialCount: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.repairs, 0)
})

test('junk: a non-finite anvil count refuses (all legs policed)', () => {
  const v = decideRepairCraft({ wornCount: 1, anvilCount: Number.POSITIVE_INFINITY, materialCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideRepairCraft({ wornCount: true, anvilCount: 1, materialCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideRepairCraft({ wornCount: '2', anvilCount: 1, materialCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideRepairCraft({ wornCount: -3, anvilCount: -1, materialCount: -9 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'tool-healthy')
  assert.equal(v.materialLeft, 0)
})

test('keep gate first: no worn tool keeps, the toolcare word owns the healthy story', () => {
  const v = decideRepairCraft({ wornCount: 0, anvilCount: 1, materialCount: 40 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'tool-healthy')
  assert.equal(v.anvilsLeft, 1)
  assert.equal(v.materialLeft, 40)
})

test('anvil-short defer outranks material-short (the station leg first)', () => {
  const v = decideRepairCraft({ wornCount: 1, anvilCount: 0, materialCount: 9 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'anvil-short')
  assert.equal(v.wornLeft, 1)
})

test('material-short defer names the ingot leg (the smelt chain re-tasks)', () => {
  const v = decideRepairCraft({ wornCount: 1, anvilCount: 1, materialCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'material-short')
})

test('exact one worn one anvil one ingot: one honest repair', () => {
  const v = decideRepairCraft({ wornCount: 1, anvilCount: 1, materialCount: 1 })
  assert.equal(v.action, 'repair')
  assert.equal(v.reason, 'anvil-material-affordable')
  assert.equal(v.repairs, 1)
  assert.equal(v.materialLeft, 0)
  assert.equal(v.anvilsLeft, 1)
  assert.equal(v.wornLeft, 0)
})

test('station never consumed: three repairs ride the same one anvil through', () => {
  const v = decideRepairCraft({ wornCount: 3, anvilCount: 1, materialCount: 3 })
  assert.equal(v.action, 'repair')
  assert.equal(v.repairs, 3)
  assert.equal(v.anvilsLeft, 1)
})

test('material binds: three worn but two ingots price two repairs, one worn left named', () => {
  const v = decideRepairCraft({ wornCount: 3, anvilCount: 1, materialCount: 2 })
  assert.equal(v.action, 'repair')
  assert.equal(v.repairs, 2)
  assert.equal(v.wornLeft, 1)
  assert.equal(v.materialLeft, 0)
})

test('no cap: ten worn ten ingots price ten repairs (never clamped)', () => {
  const v = decideRepairCraft({ wornCount: 10, anvilCount: 2, materialCount: 10 })
  assert.equal(v.action, 'repair')
  assert.equal(v.repairs, 10)
  assert.equal(v.wornLeft, 0)
  assert.equal(v.materialLeft, 0)
})

test('vanilla constants pin: the station required one, the unit cost one', () => {
  assert.equal(REPAIRCRAFT_ANVILS_REQUIRED, 1)
  assert.equal(REPAIRCRAFT_MATERIAL_PER_REPAIR, 1)
})

test('custom unit cost: two material per repair halves the list honestly', () => {
  const v = decideRepairCraft({ wornCount: 4, anvilCount: 1, materialCount: 6, materialPerRepair: 2 })
  assert.equal(v.action, 'repair')
  assert.equal(v.repairs, 3)
  assert.equal(v.materialLeft, 0)
  assert.equal(v.wornLeft, 1)
})

test('bare pocket: worn tool held, nothing else defers anvil-short', () => {
  const v = decideRepairCraft({ wornCount: 1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'anvil-short')
  assert.equal(v.repairs, 0)
})

test('no mutation: the input object rides through untouched', () => {
  const input = { wornCount: 1, anvilCount: 1, materialCount: 4 }
  decideRepairCraft(input)
  assert.deepEqual(input, { wornCount: 1, anvilCount: 1, materialCount: 4 })
})
