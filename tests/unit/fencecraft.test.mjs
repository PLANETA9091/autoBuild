// Tests for the fencecraft word (src/lib/fencecraft.mjs).
// The pocket's pen consumer: the fence poverty priced - the yard wall the
// wood the pocket already carries affords. Pure arithmetic - no mineflayer
// import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideFenceCraft, FENCECRAFT_PLANKS_PER_CRAFT, FENCECRAFT_STICKS_PER_CRAFT, FENCECRAFT_FENCES_PER_CRAFT } from '../../src/lib/fencecraft.mjs'

test('junk: a non-finite plank count refuses with junk-input', () => {
  const v = decideFenceCraft({ fenceCount: 0, planksCount: Number.NaN, stickCount: 2 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.fencesYield, 0)
})

test('junk: a boolean stick count is a flag, never a number (numeric lane law)', () => {
  const v = decideFenceCraft({ fenceCount: 0, planksCount: 4, stickCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string fence count refuses', () => {
  const v = decideFenceCraft({ fenceCount: '1', planksCount: 4, stickCount: 2 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideFenceCraft({ fenceCount: -3, planksCount: -40, stickCount: -2 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
  assert.equal(v.plankLeft, 0)
  assert.equal(v.stickLeft, 0)
})

test('keep gate first: a fence already held keeps, the pen lane owns that story', () => {
  const v = decideFenceCraft({ fenceCount: 1, planksCount: 40, stickCount: 20 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'fence-held')
  assert.equal(v.plankLeft, 40)
  assert.equal(v.stickLeft, 20)
})

test('exactly four planks and two sticks: one honest craft, zero leftovers', () => {
  const v = decideFenceCraft({ fenceCount: 0, planksCount: 4, stickCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'stick-planks-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.fencesYield, 3)
  assert.equal(v.plankLeft, 0)
  assert.equal(v.stickLeft, 0)
})

test('the shorter leg prices the yield: eight planks but two sticks -> one craft', () => {
  const v = decideFenceCraft({ fenceCount: 0, planksCount: 8, stickCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.fencesYield, 3)
  assert.equal(v.plankLeft, 4)
  assert.equal(v.stickLeft, 0)
})

test('nine planks and five sticks: two crafts + BOTH leftovers named', () => {
  const v = decideFenceCraft({ fenceCount: 0, planksCount: 9, stickCount: 5 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.fencesYield, 6)
  assert.equal(v.plankLeft, 1)
  assert.equal(v.stickLeft, 1)
})

test('no cap: forty planks and twenty sticks price every craft the pocket affords', () => {
  const v = decideFenceCraft({ fenceCount: 0, planksCount: 40, stickCount: 20 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.fencesYield, 30)
  assert.equal(v.plankLeft, 0)
  assert.equal(v.stickLeft, 0)
})

test('sticks-short defers, the stickcraft chain\'s own leg named first', () => {
  const v = decideFenceCraft({ fenceCount: 0, planksCount: 40, stickCount: 1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
})

test('planks-short defers, the plankcraft chain\'s own leg named', () => {
  const v = decideFenceCraft({ fenceCount: 0, planksCount: 3, stickCount: 20 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
})

test('empty pocket defers honestly (sticks-short the first named leg)', () => {
  const v = decideFenceCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
})

test('the vanilla constants ride the exports', () => {
  assert.equal(FENCECRAFT_PLANKS_PER_CRAFT, 4)
  assert.equal(FENCECRAFT_STICKS_PER_CRAFT, 2)
  assert.equal(FENCECRAFT_FENCES_PER_CRAFT, 3)
})

test('the consumer law: the pen leg never gates on another lane face', () => {
  // a fence-held pocket is the keep lane's story even leg-rich; a
  // fence-poor leg-rich pocket crafts regardless of any other lane's
  // census shape
  const keep = decideFenceCraft({ fenceCount: 2, planksCount: 40, stickCount: 20 })
  assert.equal(keep.action, 'keep')
  const craft = decideFenceCraft({ fenceCount: 0, planksCount: 40, stickCount: 20 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 10)
})

test('no mutation: the input object rides untouched', () => {
  const opts = { fenceCount: 0, planksCount: 9, stickCount: 5 }
  decideFenceCraft(opts)
  assert.deepEqual(opts, { fenceCount: 0, planksCount: 9, stickCount: 5 })
})
