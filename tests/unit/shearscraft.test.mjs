// Tests for the shearscraft word (src/lib/shearscraft.mjs).
// The iron's shepherd consumer: the shears poverty priced - the wool
// economy's own hands the pocket already affords. Pure arithmetic - no
// mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideShearsCraft, SHEARSCRAFT_IRON_PER_CRAFT, SHEARSCRAFT_SHEARS_PER_CRAFT } from '../../src/lib/shearscraft.mjs'

test('junk: a non-finite iron count refuses with junk-input', () => {
  const v = decideShearsCraft({ shearsCount: 0, ironIngotCount: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.shearsYield, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideShearsCraft({ shearsCount: 1, ironIngotCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideShearsCraft({ shearsCount: '2', ironIngotCount: 0 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideShearsCraft({ shearsCount: -1, ironIngotCount: -4 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.ironSurplus, 0)
})

test('keep gate first: shears already held keeps, the shepherd lane owns that story', () => {
  const v = decideShearsCraft({ shearsCount: 1, ironIngotCount: 40 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'shears-held')
  assert.equal(v.ironSurplus, 40)
})

test('exactly two iron: one honest craft, zero surplus', () => {
  const v = decideShearsCraft({ shearsCount: 0, ironIngotCount: 2 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'iron-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.shearsYield, 1)
  assert.equal(v.ironSurplus, 0)
  assert.equal(v.cost, 2)
})

test('seven iron: three crafts + the one-iron remainder named, never rounded into a lie', () => {
  const v = decideShearsCraft({ shearsCount: 0, ironIngotCount: 7 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 3)
  assert.equal(v.shearsYield, 3)
  assert.equal(v.ironSurplus, 1)
})

test('no cap: sixty iron price every craft the pocket affords (thirty crafts)', () => {
  const v = decideShearsCraft({ shearsCount: 0, ironIngotCount: 60 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 30)
  assert.equal(v.shearsYield, 30)
  assert.equal(v.ironSurplus, 0)
})

test('one iron: the honest shortage defers, the one craft floor price named', () => {
  const v = decideShearsCraft({ shearsCount: 0, ironIngotCount: 1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.cost, 2)
})

test('empty pocket defers honestly', () => {
  const v = decideShearsCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'iron-short')
  assert.equal(v.ironSurplus, 0)
})

test('the vanilla constants ride the exports', () => {
  assert.equal(SHEARSCRAFT_IRON_PER_CRAFT, 2)
  assert.equal(SHEARSCRAFT_SHEARS_PER_CRAFT, 1)
})

test('the consumer law: the shepherd leg never gates on another lane face', () => {
  // a shears-held pocket is the keep lane's story even iron-rich; a
  // shears-poor iron-rich pocket crafts regardless of any other lane's
  // census shape
  const keep = decideShearsCraft({ shearsCount: 2, ironIngotCount: 64 })
  assert.equal(keep.action, 'keep')
  const craft = decideShearsCraft({ shearsCount: 0, ironIngotCount: 64 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 32)
})

test('undefined defaults ride the zero floor (no throw on bare call)', () => {
  const v = decideShearsCraft({ shearsCount: undefined, ironIngotCount: undefined })
  assert.equal(v.action, 'defer')
})

test('no mutation: the input object rides untouched', () => {
  const opts = { shearsCount: 0, ironIngotCount: 5 }
  decideShearsCraft(opts)
  assert.deepEqual(opts, { shearsCount: 0, ironIngotCount: 5 })
})
