import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.393) THE HEALTHCARE WORD - the care lane's fourth sibling's pins.
import { decideHealthAction, HEALTHCARE_RETREAT_AT, HEALTHCARE_REGEN_FOOD } from '../../src/lib/healthcare.mjs'

test('junk health refuses honestly (no throw)', () => {
  const care = decideHealthAction({ health: NaN, food: 20 })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'junk-input')
})

test('health clamps to the bar bounds', () => {
  assert.equal(decideHealthAction({ health: -3, food: 20 }).health, 0)
  assert.equal(decideHealthAction({ health: 25, food: 20 }).health, 20)
  assert.equal(decideHealthAction({ health: 25, food: 20 }).action, 'keep')
})

test('critical band retreats (danger outranks the regen band)', () => {
  const care = decideHealthAction({ health: 5, food: 20 })
  assert.equal(care.action, 'retreat')
  assert.equal(care.reason, 'critical-health')
})

test('critical boundary is inclusive (6 retreats, 7 above prices the food gate)', () => {
  assert.equal(decideHealthAction({ health: 6, food: 20 }).action, 'retreat')
  assert.equal(decideHealthAction({ health: 7, food: 10 }).action, 'defer')
})

test('regen band: hurt + food pays the vanilla gate -> regen', () => {
  const care = decideHealthAction({ health: 15, food: 18 })
  assert.deepEqual(care, { action: 'regen', reason: 'regen-band', health: 15, food: 18 })
  assert.equal(decideHealthAction({ health: 15, food: 20 }).action, 'regen')
})

test('regen boundary: food 17 defers, food 18 regens', () => {
  assert.equal(decideHealthAction({ health: 15, food: 17 }).action, 'defer')
  assert.equal(decideHealthAction({ health: 15, food: 18 }).action, 'regen')
})

test('hurt + food gate closed -> defer', () => {
  const care = decideHealthAction({ health: 19, food: 10 })
  assert.deepEqual(care, { action: 'defer', reason: 'hurt-no-regen', health: 19, food: 10 })
})

test('full bar keeps (the caller stays silent)', () => {
  const care = decideHealthAction({ health: 20, food: 10 })
  assert.deepEqual(care, { action: 'keep', reason: 'healthy', health: 20, food: 10 })
})

test('food reads lenient (non-finite food prices 0, no throw)', () => {
  const care = decideHealthAction({ health: 15, food: NaN })
  assert.equal(care.food, 0)
  assert.equal(care.action, 'defer')
})

test('fractional food floors', () => {
  const care = decideHealthAction({ health: 15, food: 18.9 })
  assert.equal(care.food, 18)
  assert.equal(care.action, 'regen')
})

test('the bounds are honest vanilla (critical below the regen gate, both in-bar)', () => {
  assert.ok(HEALTHCARE_RETREAT_AT >= 0 && HEALTHCARE_RETREAT_AT < HEALTHCARE_REGEN_FOOD)
  assert.ok(HEALTHCARE_REGEN_FOOD > 0 && HEALTHCARE_REGEN_FOOD <= 20)
})
