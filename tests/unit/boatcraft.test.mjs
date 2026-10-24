// Tests for the boatcraft word (src/lib/boatcraft.mjs).
// The planks' water consumer: the boat poverty priced - the ground-mode
// fleet's water leg the pocket already affords. Pure arithmetic - no
// mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideBoatCraft, BOATCRAFT_PLANKS_PER_BOAT, BOATCRAFT_BOATS_PER_CRAFT } from '../../src/lib/boatcraft.mjs'

test('junk: a non-finite plank count refuses with junk-input', () => {
  const v = decideBoatCraft({ boatCount: 0, planksCount: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.boatsYield, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideBoatCraft({ boatCount: 1, planksCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideBoatCraft({ boatCount: '2', planksCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideBoatCraft({ boatCount: -1, planksCount: -9 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.planksSurplus, 0)
})

test('keep gate first: a boat already held keeps, the water lane owns that story', () => {
  const v = decideBoatCraft({ boatCount: 1, planksCount: 30 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'boat-held')
  assert.equal(v.planksSurplus, 30)
})

test('exactly five planks: one honest craft, zero surplus', () => {
  const v = decideBoatCraft({ boatCount: 0, planksCount: 5 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'planks-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.boatsYield, 1)
  assert.equal(v.planksSurplus, 0)
  assert.equal(v.cost, 5)
})

test('twelve planks: two crafts + the two-plank remainder named, never rounded into a lie', () => {
  const v = decideBoatCraft({ boatCount: 0, planksCount: 12 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.boatsYield, 2)
  assert.equal(v.planksSurplus, 2)
})

test('no cap: fifty planks price every craft the pocket affords (ten crafts)', () => {
  const v = decideBoatCraft({ boatCount: 0, planksCount: 50 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.boatsYield, 10)
  assert.equal(v.planksSurplus, 0)
})

test('four planks: the honest shortage defers, the one craft floor price named', () => {
  const v = decideBoatCraft({ boatCount: 0, planksCount: 4 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.cost, 5)
})

test('empty pocket defers honestly', () => {
  const v = decideBoatCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'planks-short')
  assert.equal(v.planksSurplus, 0)
})

test('the vanilla constants ride the exports', () => {
  assert.equal(BOATCRAFT_PLANKS_PER_BOAT, 5)
  assert.equal(BOATCRAFT_BOATS_PER_CRAFT, 1)
})

test('the consumer law: the water leg never gates on another lane face', () => {
  // a boat-held pocket is the keep lane's story even plank-rich; a
  // boat-poor plank-rich pocket crafts regardless of any other lane's
  // census shape
  const keep = decideBoatCraft({ boatCount: 3, planksCount: 45 })
  assert.equal(keep.action, 'keep')
  const craft = decideBoatCraft({ boatCount: 0, planksCount: 45 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 9)
})

test('undefined defaults ride the zero floor (no throw on bare call)', () => {
  const v = decideBoatCraft({ boatCount: undefined, planksCount: undefined })
  assert.equal(v.action, 'defer')
})

test('no mutation: the input object rides untouched', () => {
  const opts = { boatCount: 0, planksCount: 7 }
  decideBoatCraft(opts)
  assert.deepEqual(opts, { boatCount: 0, planksCount: 7 })
})
