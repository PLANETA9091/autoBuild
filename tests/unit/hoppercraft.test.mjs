// Tests for the hoppercraft word (src/lib/hoppercraft.mjs).
// The cargo lane's own word: the mouth poverty priced - the transport
// line's third word (the track v0.976.437, the cart v0.976.438, this
// word's receiver). Pure arithmetic - no mineflayer import, no server,
// no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideHopperCraft, HOPPERCRAFT_IRON_PER_CRAFT, HOPPERCRAFT_CHESTS_PER_CRAFT, HOPPERCRAFT_HOPPERS_PER_CRAFT } from '../../src/lib/hoppercraft.mjs'

test('junk: a non-finite iron count refuses with junk-input', () => {
  const v = decideHopperCraft({ hopperCount: 0, ironIngotCount: Number.NaN, chestCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.hoppersYield, 0)
})

test('junk: a boolean chest count is a flag, never a number (numeric lane law)', () => {
  const v = decideHopperCraft({ hopperCount: 0, ironIngotCount: 5, chestCount: false })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string hopper count refuses', () => {
  const v = decideHopperCraft({ hopperCount: '1', ironIngotCount: 5, chestCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideHopperCraft({ hopperCount: -1, ironIngotCount: -5, chestCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.ironLeft, 0)
  assert.equal(v.chestLeft, 0)
})

test('keep gate first: hoppers already held keep, the cargo lane owns that story', () => {
  const v = decideHopperCraft({ hopperCount: 2, ironIngotCount: 30, chestCount: 5 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'hopper-held')
  assert.equal(v.ironLeft, 30)
  assert.equal(v.chestLeft, 5)
  assert.equal(v.hoppers, 2)
})

test('exactly five iron and one chest: one honest craft, zero leftovers', () => {
  const v = decideHopperCraft({ hopperCount: 0, ironIngotCount: 5, chestCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'iron-chest-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.hoppersYield, 1)
  assert.equal(v.ironLeft, 0)
  assert.equal(v.chestLeft, 0)
})

test('the shorter leg prices the yield: twenty-five iron but one chest -> one craft', () => {
  const v = decideHopperCraft({ hopperCount: 0, ironIngotCount: 25, chestCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.hoppersYield, 1)
  assert.equal(v.ironLeft, 20)
  assert.equal(v.chestLeft, 0)
})

test('twelve iron and two chests: two crafts + the iron remainder named', () => {
  const v = decideHopperCraft({ hopperCount: 0, ironIngotCount: 12, chestCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.hoppersYield, 2)
  assert.equal(v.ironLeft, 2)
  assert.equal(v.chestLeft, 0)
})

test('no cap: sixty iron and ten chests price every craft the pocket affords', () => {
  const v = decideHopperCraft({ hopperCount: 0, ironIngotCount: 60, chestCount: 10 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.hoppersYield, 10)
  assert.equal(v.ironLeft, 10)
  assert.equal(v.chestLeft, 0)
})

test('iron-short defers, the word\'s own base metal named first (the smelt trip)', () => {
  const v = decideHopperCraft({ hopperCount: 0, ironIngotCount: 4, chestCount: 10 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('chest-short defers, the chestcraft chain\'s own box named', () => {
  const v = decideHopperCraft({ hopperCount: 0, ironIngotCount: 60, chestCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'chest-short')
})

test('empty pocket defers honestly (iron-short the first named leg)', () => {
  const v = decideHopperCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('the vanilla constants ride the exports', () => {
  assert.equal(HOPPERCRAFT_IRON_PER_CRAFT, 5)
  assert.equal(HOPPERCRAFT_CHESTS_PER_CRAFT, 1)
  assert.equal(HOPPERCRAFT_HOPPERS_PER_CRAFT, 1)
})

test('the consumer law: the mouth leg never gates on another lane face', () => {
  // a hopper-held pocket is the keep lane's story even leg-rich; a
  // hopper-poor leg-rich pocket crafts regardless of any other lane's
  // census shape - and the hopper_minecart is the CARRIER lane's own
  // census (the family law never adopts another lane's kin)
  const keep = decideHopperCraft({ hopperCount: 4, ironIngotCount: 60, chestCount: 10 })
  assert.equal(keep.action, 'keep')
  const craft = decideHopperCraft({ hopperCount: 0, ironIngotCount: 60, chestCount: 10 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 10)
})

test('no mutation: the input object rides untouched', () => {
  const opts = { hopperCount: 0, ironIngotCount: 12, chestCount: 2 }
  decideHopperCraft(opts)
  assert.deepEqual(opts, { hopperCount: 0, ironIngotCount: 12, chestCount: 2 })
})
