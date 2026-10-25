// Tests for the bread word (src/lib/bread.mjs).
// The crop lane's own table: the bake priced (3 wheat -> 1 bread,
// vanilla). Pure arithmetic - no mineflayer import, no server, no
// fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideBread, BREAD_WHEAT_PER_CRAFT, BREAD_BREADS_PER_CRAFT } from '../../src/lib/bread.mjs'

test('junk: a non-finite bread count refuses with junk-input', () => {
  const v = decideBread({ breadCount: Number.NaN, wheatCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.breadsYield, 0)
})

test('junk: a non-finite wheat count refuses (both legs policed)', () => {
  const v = decideBread({ breadCount: 0, wheatCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideBread({ breadCount: false, wheatCount: 3 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideBread({ breadCount: 0, wheatCount: '9' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - wheat-short defers, never poisons', () => {
  const v = decideBread({ breadCount: -1, wheatCount: -9 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'wheat-short')
  assert.equal(v.wheatLeft, 0)
  assert.equal(v.breads, 0)
})

test('keep-gate-first: the bread held keeps even a wheat-rich pocket (the staple never doubles)', () => {
  const v = decideBread({ breadCount: 1, wheatCount: 9 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'bread-held')
  assert.equal(v.crafts, 0)
  assert.equal(v.wheatLeft, 9, 'the wheat rides wheatLeft untouched')
  assert.equal(v.breads, 1)
})

test('vanilla pin: the wheat cost one bread carries is exactly 3', () => {
  assert.equal(BREAD_WHEAT_PER_CRAFT, 3)
})

test('vanilla pin: the bread yield one craft produces is exactly 1', () => {
  assert.equal(BREAD_BREADS_PER_CRAFT, 1)
})

test('exact vanilla bake: three wheat price one loaf', () => {
  const v = decideBread({ breadCount: 0, wheatCount: 3 })
  assert.equal(v.action, 'craft')
  assert.equal(v.reason, 'wheat-affordable')
  assert.equal(v.crafts, 1)
  assert.equal(v.breadsYield, 1)
  assert.equal(v.wheatLeft, 0)
  assert.equal(v.breads, 0)
})

test('the three-tithe law: 7 wheat -> 2 loaves, the one-wheat remainder named', () => {
  const v = decideBread({ breadCount: 0, wheatCount: 7 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.breadsYield, 2)
  assert.equal(v.wheatLeft, 1)
})

test('no cap: a wheat-rich pocket prices every loaf it affords', () => {
  const v = decideBread({ breadCount: 0, wheatCount: 30 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 10)
  assert.equal(v.breadsYield, 10)
  assert.equal(v.wheatLeft, 0)
})

test('defer: the partial tithe never spends - two wheat ride wheatLeft named', () => {
  const v = decideBread({ breadCount: 0, wheatCount: 2 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'wheat-short')
  assert.equal(v.crafts, 0)
  assert.equal(v.wheatLeft, 2, 'the short side never lies about the pocket')
  assert.equal(v.breads, 0)
})

test('defer: the empty pocket defers wheat-short honestly', () => {
  const v = decideBread({ breadCount: 0, wheatCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'wheat-short')
  assert.equal(v.wheatLeft, 0)
})

test('floor law: a fractional census floors to the honest integer (the remainder named)', () => {
  const v = decideBread({ breadCount: 0, wheatCount: 7.5 })
  assert.equal(v.action, 'craft')
  assert.equal(v.crafts, 2)
  assert.equal(v.wheatLeft, 1.5, 'the half wheat the honest leftover')
})

test('pure read: the word mutates nothing - two calls read the same pocket', () => {
  const pocket = { breadCount: 0, wheatCount: 6 }
  const a = decideBread(pocket)
  const b = decideBread(pocket)
  assert.deepEqual(a, b)
  assert.equal(pocket.breadCount, 0)
  assert.equal(pocket.wheatCount, 6)
})
