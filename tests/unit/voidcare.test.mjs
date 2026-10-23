import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.408) THE VOIDCARE WORD - the care lane's nineteenth sibling's pins.
import {
  decideVoidAction,
  depthBelowFloor,
  VOID_FLOOR_Y
} from '../../src/lib/voidcare.mjs'

test('junk altitude refuses honestly (no throw)', () => {
  for (const junk of ['up', NaN, {}, [-70]]) {
    const care = decideVoidAction({ y: junk })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
  }
})

test('the boolean is junk too (the numeric lane is not the firecare flag shape)', () => {
  for (const b of [true, false]) {
    const care = decideVoidAction({ y: b })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
  }
})

test('the missing read keeps silent (never trust a missing bar with a 0)', () => {
  const a = decideVoidAction({})
  const b = decideVoidAction({ y: null })
  for (const care of [a, b]) {
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-bar')
    assert.equal(care.y, null)
  }
})

test('the surface bot keeps silent (the honest alive, the world-bound)', () => {
  const care = decideVoidAction({ y: 64 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'world-bound')
  assert.equal(care.depth, 0)
})

test('the diamond band keeps silent (the deeps are legitimate dig territory the word never defers)', () => {
  const care = decideVoidAction({ y: -59 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'world-bound')
  assert.equal(care.depth, 0)
})

test('the rim exact is the last alive tick (y=-64 keeps, the damage region is below)', () => {
  const care = decideVoidAction({ y: VOID_FLOOR_Y })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'world-bound')
  assert.equal(care.depth, 0)
})

test('the first void tick speaks (y=-64.5, the depth the fall has paid)', () => {
  const care = decideVoidAction({ y: -64.5 })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'out-of-world')
  assert.equal(care.depth, 0.5)
})

test('the census first sample priced live (the F12 fall to -90 is depth 26)', () => {
  const care = decideVoidAction({ y: -90 })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'out-of-world')
  assert.equal(care.y, -90)
  assert.equal(care.depth, 26)
})

test('the census second sample priced live (the F3 fall to -148 is depth 84)', () => {
  const care = decideVoidAction({ y: -148 })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'out-of-world')
  assert.equal(care.depth, 84)
})

test('the deep fall rides no cap (a deeper fall is an honest longer ride)', () => {
  const care = decideVoidAction({ y: -1024 })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'out-of-world')
  assert.equal(care.depth, 960)
})

test('the depth translation is honest (junk null, the alive floors at 0)', () => {
  assert.equal(depthBelowFloor(-70), 6)
  assert.equal(depthBelowFloor(64), 0)
  assert.equal(depthBelowFloor(-64), 0)
  assert.equal(depthBelowFloor('down'), null)
  assert.equal(depthBelowFloor(NaN), null)
})

test('the verdicts carry no invented physics (the floor line the only yardstick)', () => {
  const care = decideVoidAction({ y: -100 })
  assert.equal(care.depth, VOID_FLOOR_Y - (-100))
  assert.equal(VOID_FLOOR_Y, -64)
})
