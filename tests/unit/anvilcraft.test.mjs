// Tests for the anvilcraft word (src/lib/anvilcraft.mjs).
// The repair lane's own station: the toolcare word's honest answer -
// 3 iron blocks + 4 iron ingots -> 1 anvil (vanilla), the iron
// economy's THIRTEENTH leg (the sibling tripwirehookcraft word
// v0.976.445 priced the trigger leg the twelfth), the block sub-craft
// (9 ingots -> 1 block) the honest future named. Pure arithmetic - no
// mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideAnvilCraft, ANVILCRAFT_BLOCKS_PER_CRAFT, ANVILCRAFT_INGOTS_PER_CRAFT, ANVILCRAFT_ANVILS_PER_CRAFT } from '../../src/lib/anvilcraft.mjs'

test('junk: a non-finite block count refuses with junk-input', () => {
  const v = decideAnvilCraft({ anvilCount: 0, ironBlockCount: Number.NaN, ironIngotCount: 4 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.anvilsYield, 0)
})

test('junk: a boolean ingot count is a flag, never a number (numeric lane law)', () => {
  const v = decideAnvilCraft({ anvilCount: 0, ironBlockCount: 3, ironIngotCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string-held anvil count refuses', () => {
  const v = decideAnvilCraft({ anvilCount: '1', ironBlockCount: 3, ironIngotCount: 4 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideAnvilCraft({ anvilCount: -1, ironBlockCount: -3, ironIngotCount: -4 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'blocks-short')
  assert.equal(v.blocksLeft, 0)
  assert.equal(v.ingotsLeft, 0)
})

test('keep gate first: a station already held keeps, the station never doubles', () => {
  const v = decideAnvilCraft({ anvilCount: 1, ironBlockCount: 30, ironIngotCount: 30 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'anvil-held')
  assert.equal(v.blocksLeft, 30)
  assert.equal(v.ingotsLeft, 30)
  assert.equal(v.anvils, 1)
})

test('exactly affordable: the vanilla recipe prices one honest craft, zero leftovers', () => {
  const v = decideAnvilCraft({ anvilCount: 0, ironBlockCount: 3, ironIngotCount: 4 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'blocks-ingots-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.anvilsYield, 1)
  assert.equal(v.blocksLeft, 0)
  assert.equal(v.ingotsLeft, 0)
})

test('the block leg binds the yield: six blocks but one ingot quartet -> one craft', () => {
  const v = decideAnvilCraft({ anvilCount: 0, ironBlockCount: 6, ironIngotCount: 4 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.anvilsYield, 1)
  assert.equal(v.blocksLeft, 3)
  assert.equal(v.ingotsLeft, 0)
})

test('the ingot leg binds the yield: eleven ingots but one block trio -> one craft', () => {
  const v = decideAnvilCraft({ anvilCount: 0, ironBlockCount: 3, ironIngotCount: 11 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.anvilsYield, 1)
  assert.equal(v.blocksLeft, 0)
  assert.equal(v.ingotsLeft, 7)
})

test('no cap: a leg-rich pocket prices every craft it affords, the remainders named', () => {
  const v = decideAnvilCraft({ anvilCount: 0, ironBlockCount: 13, ironIngotCount: 18 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 4)
  assert.equal(v.anvilsYield, 4)
  assert.equal(v.blocksLeft, 1)
  assert.equal(v.ingotsLeft, 2)
})

test('blocks-short defers first, the block sub-craft the honest future named', () => {
  const v = decideAnvilCraft({ anvilCount: 0, ironBlockCount: 2, ironIngotCount: 30 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'blocks-short')
})

test('ingots-short defers, the furnacecraft chain\'s own yield named', () => {
  const v = decideAnvilCraft({ anvilCount: 0, ironBlockCount: 30, ironIngotCount: 3 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'ingots-short')
})

test('empty pocket defers honestly (blocks-short the first named leg)', () => {
  const v = decideAnvilCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'blocks-short')
})

test('the vanilla constants ride the exports', () => {
  assert.equal(ANVILCRAFT_BLOCKS_PER_CRAFT, 3)
  assert.equal(ANVILCRAFT_INGOTS_PER_CRAFT, 4)
  assert.equal(ANVILCRAFT_ANVILS_PER_CRAFT, 1)
})

test('the consumer law: the body leg never gates on another lane face', () => {
  // a station-held pocket is the keep lane's story even leg-rich; a
  // station-poor leg-rich pocket crafts regardless of any other lane's
  // census shape - and the cauldron (a different lane's own word,
  // v0.976.443 priced it) never gates here
  const keep = decideAnvilCraft({ anvilCount: 2, ironBlockCount: 30, ironIngotCount: 30 })
  assert.equal(keep.action, 'keep')
  const craft = decideAnvilCraft({ anvilCount: 0, ironBlockCount: 13, ironIngotCount: 18 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 4)
})

test('no mutation: the input object rides untouched', () => {
  const opts = { anvilCount: 0, ironBlockCount: 6, ironIngotCount: 9 }
  decideAnvilCraft(opts)
  assert.deepEqual(opts, { anvilCount: 0, ironBlockCount: 6, ironIngotCount: 9 })
})
