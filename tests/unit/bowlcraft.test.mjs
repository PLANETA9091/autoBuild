// Tests for the bowlcraft word (src/lib/bowlcraft.mjs).
// The planks' dish consumer: the bowl poverty priced - the food lane's
// first craft word the pocket already affords. Pure arithmetic - no
// mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideBowlCraft, BOWLCRAFT_PLANKS_PER_CRAFT, BOWLCRAFT_BOWLS_PER_CRAFT } from '../../src/lib/bowlcraft.mjs'

test('junk: a non-finite plank count refuses with junk-input', () => {
  const v = decideBowlCraft({ bowlCount: 0, planksCount: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.bowlsYield, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideBowlCraft({ bowlCount: 1, planksCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideBowlCraft({ bowlCount: '2', planksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideBowlCraft({ bowlCount: -2, planksCount: -12 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.planksSurplus, 0)
})

test('keep gate first: a bowl already held keeps, the dish lane owns that story', () => {
  const v = decideBowlCraft({ bowlCount: 1, planksCount: 40 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'bowl-held')
  assert.equal(v.planksSurplus, 40)
})

test('exactly three planks: one honest craft, zero surplus', () => {
  const v = decideBowlCraft({ bowlCount: 0, planksCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'planks-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.bowlsYield, 4)
  assert.equal(v.planksSurplus, 0)
  assert.equal(v.cost, 3)
})

test('eleven planks: three crafts + the two-plank remainder named, never rounded into a lie', () => {
  const v = decideBowlCraft({ bowlCount: 0, planksCount: 11 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 3)
  assert.equal(v.bowlsYield, 12)
  assert.equal(v.planksSurplus, 2)
})

test('no cap: sixty planks price every craft the pocket affords (twenty crafts)', () => {
  const v = decideBowlCraft({ bowlCount: 0, planksCount: 60 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 20)
  assert.equal(v.bowlsYield, 80)
  assert.equal(v.planksSurplus, 0)
})

test('two planks: the honest shortage defers, the one craft floor price named', () => {
  const v = decideBowlCraft({ bowlCount: 0, planksCount: 2 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.cost, 3)
})

test('empty pocket defers honestly', () => {
  const v = decideBowlCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.planksSurplus, 0)
})

test('the vanilla constants ride the exports', () => {
  assert.equal(BOWLCRAFT_PLANKS_PER_CRAFT, 3)
  assert.equal(BOWLCRAFT_BOWLS_PER_CRAFT, 4)
})

test('the consumer law: the dish leg never gates on another lane face', () => {
  // a bowl-held pocket is the keep lane's story even plank-rich; a
  // bowl-poor plank-rich pocket crafts regardless of any other lane's
  // census shape
  const keep = decideBowlCraft({ bowlCount: 2, planksCount: 64 })
  assert.equal(keep.action, 'keep')
  const craft = decideBowlCraft({ bowlCount: 0, planksCount: 64 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 21)
})

test('undefined defaults ride the zero floor (no throw on bare call)', () => {
  const v = decideBowlCraft({ bowlCount: undefined, planksCount: undefined })
  assert.equal(v.action, 'defer')
})

test('no mutation: the input object rides untouched', () => {
  const opts = { bowlCount: 0, planksCount: 7 }
  decideBowlCraft(opts)
  assert.deepEqual(opts, { bowlCount: 0, planksCount: 7 })
})
