import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.404) THE TOTEMCARE WORD - the care lane's fifteenth sibling's pins.
import { decideTotemAction, TOTEM_NAME } from '../../src/lib/totemcare.mjs'

test('junk offhand refuses honestly (no throw)', () => {
  for (const junk of ['stone', 5, true]) {
    const care = decideTotemAction({ offhand: junk })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
    assert.equal(care.name, null)
  }
})

test('the missing read keeps silent (never trust a missing bar with a 0)', () => {
  const care = decideTotemAction({})
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'no-bar')
  assert.equal(care.name, null)
})

test('the true empty is a real reading (the second life ABSENT, not silence)', () => {
  const care = decideTotemAction({ offhand: null })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'empty-offhand')
})

test('the totem armed stays silent (the death the cheat honors once)', () => {
  const care = decideTotemAction({ offhand: { name: 'totem_of_undying', count: 1 } })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'totem-armed')
  assert.equal(care.name, 'totem_of_undying')
})

test('the spent slot speaks (the offhand on something else)', () => {
  const care = decideTotemAction({ offhand: { name: 'shield' } })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'no-totem')
  assert.equal(care.name, 'shield')
})

test('the unreadable name rides the worst assumption (never the silence)', () => {
  const care = decideTotemAction({ offhand: {} })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'no-totem')
  assert.equal(care.name, null)
})

test('the name comparison is exact (the registry name the death check reads)', () => {
  assert.equal(decideTotemAction({ offhand: { name: 'Totem_of_Undying' } }).action, 'watch')
  assert.equal(decideTotemAction({ offhand: { name: 'totem' } }).action, 'watch')
  assert.equal(decideTotemAction({ offhand: { name: TOTEM_NAME } }).action, 'keep')
})

test('the bounds are honest vanilla (the registry name)', () => {
  assert.equal(TOTEM_NAME, 'totem_of_undying')
})
