// Tests for the fletchercraft word (src/lib/fletchercraft.mjs).
// The fletcher lane's own word: the volley poverty priced - the
// family's FIRST THREE-LEG word (the shorter of three legs prices the
// yield). Pure arithmetic - no mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideFletcherCraft, FLETCHERCRAFT_FLINT_PER_CRAFT, FLETCHERCRAFT_STICKS_PER_CRAFT, FLETCHERCRAFT_FEATHERS_PER_CRAFT, FLETCHERCRAFT_ARROWS_PER_CRAFT } from '../../src/lib/fletchercraft.mjs'

test('junk: a non-finite flint count refuses with junk-input', () => {
  const v = decideFletcherCraft({ arrowCount: 0, flintCount: Number.NaN, stickCount: 1, featherCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.arrowsYield, 0)
})

test('junk: a boolean stick count is a flag, never a number (numeric lane law)', () => {
  const v = decideFletcherCraft({ arrowCount: 0, flintCount: 1, stickCount: false, featherCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string arrow count refuses', () => {
  const v = decideFletcherCraft({ arrowCount: '1', flintCount: 1, stickCount: 1, featherCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero, never poison the arithmetic', () => {
  const v = decideFletcherCraft({ arrowCount: -1, flintCount: -1, stickCount: -1, featherCount: -1 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'flint-short')
  assert.equal(v.flintLeft, 0)
  assert.equal(v.stickLeft, 0)
  assert.equal(v.featherLeft, 0)
})

test('keep gate first: arrows already held keep, the fletcher lane owns that story', () => {
  const v = decideFletcherCraft({ arrowCount: 16, flintCount: 10, stickCount: 10, featherCount: 10 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'arrow-held')
  assert.equal(v.flintLeft, 10)
  assert.equal(v.stickLeft, 10)
  assert.equal(v.featherLeft, 10)
  assert.equal(v.arrows, 16)
})

test('exactly one of each leg: one honest craft, four arrows, zero leftovers', () => {
  const v = decideFletcherCraft({ arrowCount: 0, flintCount: 1, stickCount: 1, featherCount: 1 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'flint-stick-feather-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.arrowsYield, 4)
  assert.equal(v.flintLeft, 0)
  assert.equal(v.stickLeft, 0)
  assert.equal(v.featherLeft, 0)
})

test('the shorter of THREE legs prices the yield: ten flint but one stick -> one craft', () => {
  const v = decideFletcherCraft({ arrowCount: 0, flintCount: 10, stickCount: 1, featherCount: 5 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 1)
  assert.equal(v.arrowsYield, 4)
  assert.equal(v.flintLeft, 9)
  assert.equal(v.stickLeft, 0)
  assert.equal(v.featherLeft, 4)
})

test('nine flint two sticks three feathers: two crafts + every leftover named', () => {
  const v = decideFletcherCraft({ arrowCount: 0, flintCount: 9, stickCount: 2, featherCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.arrowsYield, 8)
  assert.equal(v.flintLeft, 7)
  assert.equal(v.stickLeft, 0)
  assert.equal(v.featherLeft, 1)
})

test('no cap: sixty flint ten sticks twenty feathers price every craft the pocket affords', () => {
  const v = decideFletcherCraft({ arrowCount: 0, flintCount: 60, stickCount: 10, featherCount: 20 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.arrowsYield, 40)
  assert.equal(v.flintLeft, 50)
  assert.equal(v.stickLeft, 0)
  assert.equal(v.featherLeft, 10)
})

test('flint-short defers, the word\'s own base stone named first (the gravel trip)', () => {
  const v = decideFletcherCraft({ arrowCount: 0, flintCount: 0, stickCount: 10, featherCount: 10 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'flint-short')
})

test('sticks-short defers, the stickcraft chain\'s own shaft named', () => {
  const v = decideFletcherCraft({ arrowCount: 0, flintCount: 10, stickCount: 0, featherCount: 10 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'sticks-short')
})

test('feathers-short defers, the herd\'s own yield named (the chicken trip)', () => {
  const v = decideFletcherCraft({ arrowCount: 0, flintCount: 10, stickCount: 10, featherCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'feathers-short')
})

test('empty pocket defers honestly (flint-short the first named leg)', () => {
  const v = decideFletcherCraft({})
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'flint-short')
})

test('the vanilla constants ride the exports', () => {
  assert.equal(FLETCHERCRAFT_FLINT_PER_CRAFT, 1)
  assert.equal(FLETCHERCRAFT_STICKS_PER_CRAFT, 1)
  assert.equal(FLETCHERCRAFT_FEATHERS_PER_CRAFT, 1)
  assert.equal(FLETCHERCRAFT_ARROWS_PER_CRAFT, 4)
})

test('the consumer law: the volley leg never gates on another lane face', () => {
  // an arrow-held pocket is the keep lane's story even leg-rich; an
  // arrow-poor leg-rich pocket crafts regardless of any other lane's
  // census shape - the spark lane's flint, the rail lane's stick, none
  // gates here
  const keep = decideFletcherCraft({ arrowCount: 32, flintCount: 60, stickCount: 10, featherCount: 20 })
  assert.equal(keep.action, 'keep')
  const craft = decideFletcherCraft({ arrowCount: 0, flintCount: 60, stickCount: 10, featherCount: 20 })
  assert.equal(craft.action, 'craft')
  assert.equal(craft.crafts, 10)
})

test('no mutation: the input object rides untouched', () => {
  const opts = { arrowCount: 0, flintCount: 9, stickCount: 2, featherCount: 3 }
  decideFletcherCraft(opts)
  assert.deepEqual(opts, { arrowCount: 0, flintCount: 9, stickCount: 2, featherCount: 3 })
})
