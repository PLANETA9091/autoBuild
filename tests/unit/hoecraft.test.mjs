// (v0.976.478) Unit tests for the hoecraft word - the crop lane's
// own ground tool (2 planks-family + 2 sticks -> 1 wooden hoe, vanilla).
import test from 'node:test'
import assert from 'node:assert/strict'
import {
  decideHoecraft,
  HOECRAFT_PLANKS_PER_CRAFT,
  HOECRAFT_STICKS_PER_CRAFT,
  HOES_PER_CRAFT
} from '../../src/lib/hoecraft.mjs'

test('junk planksCount refuses honest', () => {
  const r = decideHoecraft({ planksCount: NaN, stickCount: 4, hoeCount: 0 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.crafts, 0)
})

test('junk stickCount (string) refuses honest', () => {
  const r = decideHoecraft({ planksCount: 6, stickCount: '5', hoeCount: 0 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk hoeCount (boolean) refuses honest', () => {
  const r = decideHoecraft({ planksCount: 6, stickCount: 4, hoeCount: true })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk Infinity refuses honest', () => {
  const r = decideHoecraft({ planksCount: 0, stickCount: Infinity, hoeCount: 0 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('negative counts floor to zero and defer, never throw', () => {
  const r = decideHoecraft({ planksCount: -3, stickCount: -4, hoeCount: -1 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'planks-short')
  assert.equal(r.planksLeft, 0)
  assert.equal(r.sticksLeft, 0)
  assert.equal(r.hoes, 0)
})

test('keep-gate-first: hoe held keeps, legs ride their lefts untouched', () => {
  const r = decideHoecraft({ planksCount: 10, stickCount: 8, hoeCount: 2 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'hoe-held')
  assert.equal(r.planksLeft, 10)
  assert.equal(r.sticksLeft, 8)
  assert.equal(r.hoes, 2)
  assert.equal(r.crafts, 0)
})

test('keep-gate-first wins over empty legs (held beats shortage)', () => {
  const r = decideHoecraft({ planksCount: 0, stickCount: 0, hoeCount: 1 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'hoe-held')
})

test('vanilla pin: constants price the shaped head-and-shaft (2/2/1)', () => {
  assert.equal(HOECRAFT_PLANKS_PER_CRAFT, 2)
  assert.equal(HOECRAFT_STICKS_PER_CRAFT, 2)
  assert.equal(HOES_PER_CRAFT, 1)
})

test('vanilla pin: the exact pair crafts exactly one hoe', () => {
  const r = decideHoecraft({ planksCount: 2, stickCount: 2, hoeCount: 0 })
  assert.equal(r.action, 'craft')
  assert.equal(r.reason, 'planks-sticks-affordable')
  assert.equal(r.crafts, 1)
  assert.equal(r.hoesYield, 1)
  assert.equal(r.planksLeft, 0)
  assert.equal(r.sticksLeft, 0)
})

test('min law: sticks leg binds (4 planks / 2 sticks -> 1 craft, leftovers named)', () => {
  const r = decideHoecraft({ planksCount: 4, stickCount: 2, hoeCount: 0 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 1)
  assert.equal(r.hoesYield, 1)
  assert.equal(r.planksLeft, 2)
  assert.equal(r.sticksLeft, 0)
})

test('min law: planks leg binds (2 planks / 4 sticks -> 1 craft, leftovers named)', () => {
  const r = decideHoecraft({ planksCount: 2, stickCount: 4, hoeCount: 0 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 1)
  assert.equal(r.hoesYield, 1)
  assert.equal(r.planksLeft, 0)
  assert.equal(r.sticksLeft, 2)
})

test('planks-short defer rides named FIRST (the blade leads the shaft)', () => {
  const r = decideHoecraft({ planksCount: 1, stickCount: 0, hoeCount: 0 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'planks-short')
})

test('sticks-short defer rides named (the shaft second, never guessed)', () => {
  const r = decideHoecraft({ planksCount: 2, stickCount: 1, hoeCount: 0 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'sticks-short')
})

test('no-cap: the rich pocket prices every craft the arithmetic affords', () => {
  const r = decideHoecraft({ planksCount: 200, stickCount: 200, hoeCount: 0 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 100)
  assert.equal(r.hoesYield, 100)
  assert.equal(r.planksLeft, 0)
  assert.equal(r.sticksLeft, 0)
})

test('fractional counts floor honestly, the remainder named', () => {
  const r = decideHoecraft({ planksCount: 2.5, stickCount: 2.5, hoeCount: 0 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 1)
  assert.equal(r.hoesYield, 1)
  assert.equal(r.planksLeft, 0.5)
  assert.equal(r.sticksLeft, 0.5)
})

test('empty pocket reads the honest action (defer planks-short, never throws)', () => {
  const r = decideHoecraft({ planksCount: 0, stickCount: 0, hoeCount: 0 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'planks-short')
  assert.equal(r.crafts, 0)
})

test('the pure read mutates nothing', () => {
  const input = { planksCount: 6, stickCount: 4, hoeCount: 0 }
  const snapshot = JSON.stringify(input)
  decideHoecraft(input)
  assert.equal(JSON.stringify(input), snapshot)
})
