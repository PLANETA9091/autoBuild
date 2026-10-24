// Tests for the doorcraft word (src/lib/doorcraft.mjs).
// The planks' shelter consumer: the door poverty priced - the night cycle's
// shelter leg the pocket already affords. Pure arithmetic - no mineflayer
// import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideDoorCraft, DOORCRAFT_PLANKS_PER_CRAFT, DOORCRAFT_DOORS_PER_CRAFT } from '../../src/lib/doorcraft.mjs'

test('junk: a non-finite plank count refuses with junk-input', () => {
  const v = decideDoorCraft({ doorCount: 0, planksCount: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.doorsYield, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideDoorCraft({ doorCount: 1, planksCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideDoorCraft({ doorCount: '2', planksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideDoorCraft({ doorCount: -2, planksCount: -12 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.planksSurplus, 0)
})

test('keep gate first: a door already held keeps, the shelter lane owns that story', () => {
  const v = decideDoorCraft({ doorCount: 1, planksCount: 40 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'door-held')
  assert.equal(v.planksSurplus, 40)
})

test('exactly six planks: one honest craft, zero surplus', () => {
  const v = decideDoorCraft({ doorCount: 0, planksCount: 6 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'planks-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.doorsYield, 3)
  assert.equal(v.planksSurplus, 0)
  assert.equal(v.cost, 6)
})

test('fourteen planks: two crafts + the two-plank remainder named, never rounded into a lie', () => {
  const v = decideDoorCraft({ doorCount: 0, planksCount: 14 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.doorsYield, 6)
  assert.equal(v.planksSurplus, 2)
})

test('no cap: sixty planks price every craft the pocket affords (ten crafts)', () => {
  const v = decideDoorCraft({ doorCount: 0, planksCount: 60 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.doorsYield, 30)
  assert.equal(v.planksSurplus, 0)
})

test('five planks: the honest shortage defers, the one craft floor price named', () => {
  const v = decideDoorCraft({ doorCount: 0, planksCount: 5 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.cost, 6)
})

test('empty pocket defers honestly', () => {
  const v = decideDoorCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.planksSurplus, 0)
})

test('the vanilla constants ride the exports', () => {
  assert.equal(DOORCRAFT_PLANKS_PER_CRAFT, 6)
  assert.equal(DOORCRAFT_DOORS_PER_CRAFT, 3)
})

test('the consumer law: the shelter leg never gates on another lane face', () => {
  // a door-held pocket is the keep lane's story even plank-rich; a
  // door-poor plank-rich pocket crafts regardless of any other lane's
  // census shape
  const keep = decideDoorCraft({ doorCount: 2, planksCount: 64 })
  assert.equal(keep.action, 'keep')
  const craft = decideDoorCraft({ doorCount: 0, planksCount: 64 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 10)
})

test('undefined defaults ride the zero floor (no throw on bare call)', () => {
  const v = decideDoorCraft({ doorCount: undefined, planksCount: undefined })
  assert.equal(v.action, 'defer')
})

test('no mutation: the input object rides untouched', () => {
  const opts = { doorCount: 0, planksCount: 12 }
  decideDoorCraft(opts)
  assert.deepEqual(opts, { doorCount: 0, planksCount: 12 })
})
