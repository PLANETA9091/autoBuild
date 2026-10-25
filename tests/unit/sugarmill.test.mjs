// (v0.976.480) Unit tests for the sugarmill word - the sweetener's
// own mint (1 sugar cane -> 1 sugar, vanilla).
import test from 'node:test'
import assert from 'node:assert/strict'
import {
  decideSugarmill,
  SUGARMILL_CANE_PER_CRAFT,
  SUGARS_PER_CRAFT
} from '../../src/lib/sugarmill.mjs'

test('junk caneCount refuses honest', () => {
  const r = decideSugarmill({ caneCount: NaN, sugarCount: 0 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.crafts, 0)
})

test('junk sugarCount (string) refuses honest', () => {
  const r = decideSugarmill({ caneCount: 5, sugarCount: '2' })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk caneCount (boolean) refuses honest', () => {
  const r = decideSugarmill({ caneCount: true, sugarCount: 0 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk Infinity refuses honest', () => {
  const r = decideSugarmill({ caneCount: Infinity, sugarCount: 0 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('negative counts floor to zero and defer, never throw', () => {
  const r = decideSugarmill({ caneCount: -3, sugarCount: -1 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'cane-short')
  assert.equal(r.caneLeft, 0)
  assert.equal(r.sugar, 0)
})

test('keep-gate-first: sugar held keeps, the cane rides its own count', () => {
  const r = decideSugarmill({ caneCount: 7, sugarCount: 2 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'sugar-held')
  assert.equal(r.sugar, 2)
  assert.equal(r.cane, 7)
  assert.equal(r.caneLeft, 7)
  assert.equal(r.crafts, 0)
})

test('keep-gate-first wins over empty cane (held beats shortage)', () => {
  const r = decideSugarmill({ caneCount: 0, sugarCount: 1 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'sugar-held')
})

test('vanilla pin: constants price the peel (1/1)', () => {
  assert.equal(SUGARMILL_CANE_PER_CRAFT, 1)
  assert.equal(SUGARS_PER_CRAFT, 1)
})

test('vanilla pin: the exact stalk peels into exactly one sugar', () => {
  const r = decideSugarmill({ caneCount: 1, sugarCount: 0 })
  assert.equal(r.action, 'craft')
  assert.equal(r.reason, 'cane-affordable')
  assert.equal(r.crafts, 1)
  assert.equal(r.sugarsYield, 1)
  assert.equal(r.caneLeft, 0)
})

test('one-leg law: the mill has no second leg to bind', () => {
  const r = decideSugarmill({ caneCount: 9, sugarCount: 0 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 9)
  assert.equal(r.sugarsYield, 9)
  assert.equal(r.caneLeft, 0)
})

test('cane-short defer rides named (the waterline crop, never guessed)', () => {
  const r = decideSugarmill({ caneCount: 0, sugarCount: 0 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'cane-short')
})

test('no-cap: the rich pocket prices every craft the arithmetic affords', () => {
  const r = decideSugarmill({ caneCount: 200, sugarCount: 0 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 200)
  assert.equal(r.sugarsYield, 200)
  assert.equal(r.caneLeft, 0)
})

test('fractional counts floor honestly, the remainder named', () => {
  const r = decideSugarmill({ caneCount: 2.5, sugarCount: 0 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 2)
  assert.equal(r.sugarsYield, 2)
  assert.equal(r.caneLeft, 0.5)
})

test('empty pocket reads the honest action (defer cane-short, never throws)', () => {
  const r = decideSugarmill({})
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'cane-short')
  assert.equal(r.crafts, 0)
})

test('the pure read mutates nothing', () => {
  const input = { caneCount: 5, sugarCount: 0 }
  const snapshot = JSON.stringify(input)
  decideSugarmill(input)
  assert.equal(JSON.stringify(input), snapshot)
})
