import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.391) THE FOODCARE WORD - the care lane's third sibling's pins.
import { decideFoodAction, pickFoodStateFromInventory, FOODCARE_FOODS } from '../../src/lib/foodcare.mjs'

test('junk hunger refuses honestly (no throw)', () => {
  const care = decideFoodAction({ hunger: NaN, foodCount: 3 })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'junk-input')
})

test('junk eatAt refuses honestly (out of the bar bounds)', () => {
  assert.equal(decideFoodAction({ hunger: 10, eatAt: 25 }).action, 'refuse')
  assert.equal(decideFoodAction({ hunger: 10, eatAt: -1 }).action, 'refuse')
})

test('satisfied bot keeps (the caller stays silent)', () => {
  const care = decideFoodAction({ hunger: 20, foodCount: 3 })
  assert.deepEqual(care, { action: 'keep', reason: 'satisfied', hunger: 20, foodCount: 3 })
})

test('hungry + pockets pay -> eat', () => {
  const care = decideFoodAction({ hunger: 12, foodCount: 2 })
  assert.deepEqual(care, { action: 'eat', reason: 'hungry-eatable', hunger: 12, foodCount: 2 })
})

test('hungry + pockets empty -> defer', () => {
  const care = decideFoodAction({ hunger: 12, foodCount: 0 })
  assert.deepEqual(care, { action: 'defer', reason: 'hungry-no-food', hunger: 12, foodCount: 0 })
})

test('hunger clamps to the bar bounds', () => {
  assert.equal(decideFoodAction({ hunger: -5, foodCount: 1 }).hunger, 0)
  assert.equal(decideFoodAction({ hunger: 30, foodCount: 1 }).hunger, 20)
  assert.equal(decideFoodAction({ hunger: 30, foodCount: 1 }).action, 'keep')
})

test('threshold boundary is inclusive (hunger === eatAt eats)', () => {
  const care = decideFoodAction({ hunger: 14, eatAt: 14, foodCount: 1 })
  assert.equal(care.action, 'eat')
})

test('fractional foodCount floors', () => {
  const care = decideFoodAction({ hunger: 10, foodCount: 2.7 })
  assert.equal(care.foodCount, 2)
  assert.equal(care.action, 'eat')
})

test('bridge reads a mixed inventory (foods count, junk ignored)', () => {
  const inv = [
    { name: 'iron_pickaxe', count: 1 },
    { name: 'bread', count: 3 },
    { name: 'cooked_beef', count: 2 },
    { name: 'stone', count: 64 },
    { name: 'golden_carrot', count: 1 },
    { name: 'cobweb', count: 7 }
  ]
  const st = pickFoodStateFromInventory(inv)
  assert.equal(st.foodCount, 6)
  assert.equal(st.bestFood, 'cooked_beef')
  assert.equal(st.bestNutrition, 8)
})

test('bridge accepts the mineflayer function shape', () => {
  const st = pickFoodStateFromInventory(() => [{ name: 'apple', count: 2 }])
  assert.equal(st.foodCount, 2)
  assert.equal(st.bestFood, 'apple')
})

test('bridge reads junk input as the honest empty', () => {
  for (const junk of [undefined, null, 42, 'bread', {}]) {
    const st = pickFoodStateFromInventory(junk)
    assert.deepEqual(st, { foodCount: 0, bestFood: null, bestNutrition: 0 })
  }
})

test('the food table is honest vanilla (integers within the bar bounds)', () => {
  for (const [name, nut] of Object.entries(FOODCARE_FOODS)) {
    assert.ok(Number.isInteger(nut), `${name} nutrition must be an integer`)
    assert.ok(nut >= 1 && nut <= 20, `${name} nutrition ${nut} outside the hunger bar bounds`)
  }
})
