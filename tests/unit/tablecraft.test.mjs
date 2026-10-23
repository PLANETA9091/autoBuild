// Tests for the tablecraft word (src/lib/tablecraft.mjs).
// The craft economy's base word: the seat the pocket could craft itself.
// Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideTableCraft, TABLECRAFT_PLANKS_PER_TABLE } from '../../src/lib/tablecraft.mjs'

test('junk: a non-finite plank count refuses with junk-input', () => {
  const v = decideTableCraft({ planksCount: Number.NaN, tableCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.tables, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideTableCraft({ planksCount: 3, tableCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideTableCraft({ planksCount: '5', tableCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideTableCraft({ planksCount: -8, tableCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.planks, 0)
})

test('keep: a table in the pocket is the craft seat story (the pieces-held twin)', () => {
  const v = decideTableCraft({ planksCount: 3, tableCount: 1 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'table-held')
  assert.equal(v.tables, 0)
  assert.equal(v.cost, 0)
})

test('keep gate first: one held table beats a rich pocket (the downstream lane owns the story)', () => {
  const v = decideTableCraft({ planksCount: 40, tableCount: 1 })
  assert.equal(v.action, 'keep')
})

test('craft: exactly four planks price one table (the vanilla constant)', () => {
  const v = decideTableCraft({ planksCount: 4, tableCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'planks-affordable')
  assert.equal(v.planks, 4)
  assert.equal(v.tables, 1)
  assert.equal(v.surplus, 0)
  assert.equal(v.cost, TABLECRAFT_PLANKS_PER_TABLE)
})

test('craft: the remainder is named, never rounded into a lie (5 -> 1 table + 1 surplus)', () => {
  const v = decideTableCraft({ planksCount: 5, tableCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.tables, 1)
  assert.equal(v.surplus, 1)
})

test('craft: twelve planks price three tables', () => {
  const v = decideTableCraft({ planksCount: 12, tableCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.tables, 3)
  assert.equal(v.surplus, 0)
})

test('no cap: a plank-rich pocket prices every table it affords (38 -> 9 + 2)', () => {
  const v = decideTableCraft({ planksCount: 38, tableCount: 0 })
  assert.equal(v.action, 'craft')
  assert.equal(v.tables, 9)
  assert.equal(v.surplus, 2)
})

test('defer: planks-short is the honest dead end (3 planks, no table)', () => {
  const v = decideTableCraft({ planksCount: 3, tableCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.tables, 0)
  assert.equal(v.cost, TABLECRAFT_PLANKS_PER_TABLE)
})

test('defer: the empty pocket defers, never crafts a guessed table', () => {
  const v = decideTableCraft({ planksCount: 0, tableCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
})

test('the vanilla constant is four planks per table', () => {
  assert.equal(TABLECRAFT_PLANKS_PER_TABLE, 4)
})

test('the pure read mutates nothing (the caller\'s opts survive)', () => {
  const opts = { planksCount: 24, tableCount: 0 }
  decideTableCraft(opts)
  assert.deepEqual(opts, { planksCount: 24, tableCount: 0 })
})

test('undefined opts defers silently (the default pocket is empty)', () => {
  const v = decideTableCraft()
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
})
