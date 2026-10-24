// Tests for the minecartcraft word (src/lib/minecartcraft.mjs).
// The iron's carrier consumer: the cart poverty priced - the transport
// lane's own rider the pocket already affords. Pure arithmetic - no
// mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideMinecartCraft, MINECARTCRAFT_IRON_PER_CRAFT, MINECARTCRAFT_MINECARTS_PER_CRAFT } from '../../src/lib/minecartcraft.mjs'

test('junk: a non-finite iron count refuses with junk-input', () => {
  const v = decideMinecartCraft({ minecartCount: 0, ironIngotCount: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.minecartsYield, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideMinecartCraft({ minecartCount: 1, ironIngotCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideMinecartCraft({ minecartCount: '2', ironIngotCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideMinecartCraft({ minecartCount: -1, ironIngotCount: -5 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.ironSurplus, 0)
})

test('keep gate first: a plain minecart held keeps, the carrier lane owns that story', () => {
  const v = decideMinecartCraft({ minecartCount: 1, ironIngotCount: 40 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'minecart-held')
  assert.equal(v.ironSurplus, 40)
})

test('the family census law: every *_minecart variant keeps too, the census never splits', () => {
  for (const name of ['chest_minecart', 'furnace_minecart', 'hopper_minecart', 'tnt_minecart']) {
    // the census sums the family BEFORE the word: a variant in the
    // census is a held cart - the word itself sees one number
    const v = decideMinecartCraft({ minecartCount: 2, ironIngotCount: 10 })
    assert.equal(v.action, 'keep')
    void name
  }
})

test('exactly five iron: one honest craft, zero surplus', () => {
  const v = decideMinecartCraft({ minecartCount: 0, ironIngotCount: 5 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'iron-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.minecartsYield, 1)
  assert.equal(v.ironSurplus, 0)
  assert.equal(v.cost, 5)
})

test('twelve iron: two crafts + the two-iron remainder named, never rounded into a lie', () => {
  const v = decideMinecartCraft({ minecartCount: 0, ironIngotCount: 12 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.minecartsYield, 2)
  assert.equal(v.ironSurplus, 2)
})

test('no cap: sixty iron price every craft the pocket affords (twelve crafts)', () => {
  const v = decideMinecartCraft({ minecartCount: 0, ironIngotCount: 60 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 12)
  assert.equal(v.minecartsYield, 12)
  assert.equal(v.ironSurplus, 0)
})

test('four iron: the honest shortage defers, the one craft floor price named', () => {
  const v = decideMinecartCraft({ minecartCount: 0, ironIngotCount: 4 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.cost, 5)
})

test('empty pocket defers honestly', () => {
  const v = decideMinecartCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.ironSurplus, 0)
})

test('the vanilla constants ride the exports', () => {
  assert.equal(MINECARTCRAFT_IRON_PER_CRAFT, 5)
  assert.equal(MINECARTCRAFT_MINECARTS_PER_CRAFT, 1)
})

test('the consumer law: the carrier leg never gates on another lane face', () => {
  // a cart-held pocket is the keep lane's story even iron-rich; a
  // cart-poor iron-rich pocket crafts regardless of any other lane's
  // census shape
  const keep = decideMinecartCraft({ minecartCount: 3, ironIngotCount: 64 })
  assert.equal(keep.action, 'keep')
  const craft = decideMinecartCraft({ minecartCount: 0, ironIngotCount: 64 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 12)
})

test('undefined defaults ride the zero floor (no throw on bare call)', () => {
  const v = decideMinecartCraft({ minecartCount: undefined, ironIngotCount: undefined })
  assert.equal(v.action, 'defer')
})

test('no mutation: the input object rides untouched', () => {
  const opts = { minecartCount: 0, ironIngotCount: 9 }
  decideMinecartCraft(opts)
  assert.deepEqual(opts, { minecartCount: 0, ironIngotCount: 9 })
})
