// Tests for the cauldroncraft word (src/lib/cauldroncraft.mjs).
// The boil lane's own word: the boil poverty priced - the iron
// economy's tenth leg (the pick, the armor, the shield, the shears,
// the bucket, the rail, the cart, the mouth, the spark, this word's
// pot). Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideCauldronCraft, CAULDRONCRAFT_IRON_PER_CRAFT, CAULDRONCRAFT_CAULDRONS_PER_CRAFT } from '../../src/lib/cauldroncraft.mjs'

test('junk: a non-finite iron count refuses with junk-input', () => {
  const v = decideCauldronCraft({ cauldronCount: 0, ironIngotCount: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.cauldronsYield, 0)
})

test('junk: a boolean iron count is a flag, never a number (numeric lane law)', () => {
  const v = decideCauldronCraft({ cauldronCount: 0, ironIngotCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string held count refuses', () => {
  const v = decideCauldronCraft({ cauldronCount: '1', ironIngotCount: 7 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideCauldronCraft({ cauldronCount: -1, ironIngotCount: -7 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.ironSurplus, 0)
})

test('keep gate first: a pot already held keeps, the boil lane owns that story', () => {
  const v = decideCauldronCraft({ cauldronCount: 1, ironIngotCount: 70 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'cauldron-held')
  assert.equal(v.ironSurplus, 70)
  assert.equal(v.cauldronsYield, 0)
})

test('exactly seven iron: one honest craft, zero surplus', () => {
  const v = decideCauldronCraft({ cauldronCount: 0, ironIngotCount: 7 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'iron-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.cauldronsYield, 1)
  assert.equal(v.ironSurplus, 0)
  assert.equal(v.cost, 7)
})

test('eight iron: one craft + the remainder named (one ingot rides)', () => {
  const v = decideCauldronCraft({ cauldronCount: 0, ironIngotCount: 8 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.cauldronsYield, 1)
  assert.equal(v.ironSurplus, 1)
})

test('no cap: seventy iron price every pot the pocket affords', () => {
  const v = decideCauldronCraft({ cauldronCount: 0, ironIngotCount: 70 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.cauldronsYield, 10)
  assert.equal(v.ironSurplus, 0)
})

test('six iron defers, the honest floor price named (the smelt trip)', () => {
  const v = decideCauldronCraft({ cauldronCount: 0, ironIngotCount: 6 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.cost, 7)
})

test('empty pocket defers honestly', () => {
  const v = decideCauldronCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
})

test('the vanilla constants ride the exports', () => {
  assert.equal(CAULDRONCRAFT_IRON_PER_CRAFT, 7)
  assert.equal(CAULDRONCRAFT_CAULDRONS_PER_CRAFT, 1)
})

test('the consumer law: the boil leg never gates on another lane face', () => {
  // a pot-held pocket is the keep lane's story even iron-rich; a
  // pot-poor iron-rich pocket crafts regardless of any other lane's
  // census shape - and the potion lane (its own future, the honest
  // word not yet priced) never gates here
  const keep = decideCauldronCraft({ cauldronCount: 2, ironIngotCount: 70 })
  assert.equal(keep.action, 'keep')
  const craft = decideCauldronCraft({ cauldronCount: 0, ironIngotCount: 70 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 10)
})

test('the cauldron family law: the pot is a singleton, no item kin split', () => {
  // the caller's census never rides water/lava/powder_snow states into
  // the count - the word prices exactly what the caller hands it, the
  // same iron-rich shape prices identically whatever the contents story
  const a = decideCauldronCraft({ cauldronCount: 0, ironIngotCount: 14 })
  const b = decideCauldronCraft({ cauldronCount: 0, ironIngotCount: 14 })
  assert.deepEqual(a, b)
  assert.equal(a.crafts, 2)
})

test('no mutation: the input object rides untouched', () => {
  const opts = { cauldronCount: 0, ironIngotCount: 8 }
  decideCauldronCraft(opts)
  assert.deepEqual(opts, { cauldronCount: 0, ironIngotCount: 8 })
})
