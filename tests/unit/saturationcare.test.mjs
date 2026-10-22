import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.398) THE SATURATIONCARE WORD - the care lane's ninth sibling's pins.
import { decideSaturationAction, saturationCap, SATURATION_MAX, EXHAUSTION_PER_POINT } from '../../src/lib/saturationcare.mjs'

test('junk saturation refuses honestly (no throw)', () => {
  const care = decideSaturationAction({ saturation: NaN, hunger: 20 })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'junk-input')
  assert.equal(care.saturation, 0)
})

test('missing hidden bar keeps silent (never trust a missing bar with a 0)', () => {
  for (const missing of [undefined, null]) {
    const care = decideSaturationAction({ saturation: missing, hunger: 20 })
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-bar')
    assert.equal(care.saturation, null)
  }
})

test('saturation clamps to the bar bounds', () => {
  assert.equal(decideSaturationAction({ saturation: -3, hunger: 20 }).saturation, 0)
  assert.equal(decideSaturationAction({ saturation: -3, hunger: 20 }).action, 'lean')
  assert.equal(decideSaturationAction({ saturation: 25, hunger: 20 }).saturation, 20)
  assert.equal(decideSaturationAction({ saturation: 25, hunger: 20 }).action, 'keep')
})

test('the lean floor speaks (the only voice the word carries)', () => {
  const care = decideSaturationAction({ saturation: 0, hunger: 18 })
  assert.equal(care.action, 'lean')
  assert.equal(care.reason, 'reserve-spent')
})

test('the reserve held stays silent (the buffer needs no line)', () => {
  const care = decideSaturationAction({ saturation: 5, hunger: 20 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'reserved')
})

test('the floor boundary is inclusive (0.0 leans, 0.5 reserves)', () => {
  assert.equal(decideSaturationAction({ saturation: 0, hunger: 20 }).action, 'lean')
  assert.equal(decideSaturationAction({ saturation: 0.5, hunger: 20 }).action, 'keep')
})

test('saturationCap follows the vanilla clamp (never above the hunger it hides)', () => {
  assert.equal(saturationCap(10), 10)
  assert.equal(saturationCap(20), 20)
  assert.equal(saturationCap(7), 7)
})

test('saturationCap junk-safe (the ceiling the bounds keep, no throw)', () => {
  assert.equal(saturationCap(NaN), 20)
  assert.equal(saturationCap(undefined), 20)
  assert.equal(saturationCap(-5), 0)
})

test('the verdict carries the cap in every form', () => {
  assert.equal(decideSaturationAction({ saturation: 0, hunger: 12 }).cap, 12)
  assert.equal(decideSaturationAction({ saturation: 5, hunger: 12 }).cap, 12)
  assert.equal(decideSaturationAction({ saturation: NaN, hunger: 12 }).cap, 12)
  assert.equal(decideSaturationAction({ saturation: null, hunger: 12 }).cap, 12)
})

test('hunger clamps into the cap law (negative hunger caps at 0)', () => {
  assert.equal(saturationCap(-3), 0)
  assert.equal(saturationCap(30), 20)
})

test('the bounds are honest vanilla (the ceiling 20, the 4.0 exhaustion drain)', () => {
  assert.equal(SATURATION_MAX, 20)
  assert.equal(EXHAUSTION_PER_POINT, 4)
  assert.ok(SATURATION_MAX > 0 && EXHAUSTION_PER_POINT > 0)
})
