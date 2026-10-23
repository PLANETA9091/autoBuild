import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.403) THE FALLCARE WORD - the care lane's fourteenth sibling's pins.
import { decideFallAction, fallDamageFrom, FALL_HURT_AT, FALL_DAMAGE_OFFSET, FALL_DEADLY_AT } from '../../src/lib/fallcare.mjs'

test('junk fallDistance refuses honestly (no throw)', () => {
  for (const junk of [NaN, 'high', {}, Symbol('x')]) {
    const care = decideFallAction({ fallDistance: junk })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
    assert.equal(care.fallDistance, 0)
  }
})

test('the boolean junk refuses too (the numeric lane is not the flag\'s own shape)', () => {
  const care = decideFallAction({ fallDistance: true })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'junk-input')
})

test('missing bar keeps silent (never trust a missing bar with a 0)', () => {
  for (const missing of [undefined, null]) {
    const care = decideFallAction({ fallDistance: missing })
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-bar')
    assert.equal(care.fallDistance, null)
    assert.equal(care.damage, null)
  }
})

test('a real zero is a real reading (grounded, not silence)', () => {
  const care = decideFallAction({ fallDistance: 0 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'grounded')
  assert.equal(care.fallDistance, 0)
  assert.equal(care.damage, 0)
})

test('the liar negative floors at the free fall (the meter never owes altitude)', () => {
  const care = decideFallAction({ fallDistance: -5 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'grounded')
  assert.equal(care.fallDistance, 0)
})

test('the grace band stays silent (under the third block the vanilla prices free)', () => {
  const care = decideFallAction({ fallDistance: 2.5 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'low')
  assert.equal(care.damage, 0)
})

test('the grace boundary is inclusive (3 keeps, 3.1 watches)', () => {
  assert.equal(decideFallAction({ fallDistance: 3 }).action, 'keep')
  assert.equal(decideFallAction({ fallDistance: 3 }).damage, 0)
  const past = decideFallAction({ fallDistance: 3.1 })
  assert.equal(past.action, 'watch')
  assert.equal(past.reason, 'fall-band')
  assert.equal(past.damage, 1)
})

test('the watch band prices the half-hearts (the landing will cost)', () => {
  const care = decideFallAction({ fallDistance: 6 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'fall-band')
  assert.equal(care.damage, 3)
})

test('the deadly boundary is inclusive (22.9 watches, 23 lands)', () => {
  assert.equal(decideFallAction({ fallDistance: 22.9 }).action, 'watch')
  const care = decideFallAction({ fallDistance: 23 })
  assert.equal(care.action, 'land')
  assert.equal(care.reason, 'soften')
  assert.equal(care.damage, 20)
})

test('no ceiling (a high read is an honest longer fall)', () => {
  const care = decideFallAction({ fallDistance: 40 })
  assert.equal(care.action, 'land')
  assert.equal(care.fallDistance, 40)
  assert.equal(care.damage, 37)
})

test('the damage arithmetic is the vanilla ceil past the offset', () => {
  assert.equal(fallDamageFrom(3), 0)
  assert.equal(fallDamageFrom(4), 1)
  assert.equal(fallDamageFrom(4.2), 2)
  assert.equal(fallDamageFrom(6), 3)
  assert.equal(fallDamageFrom(23), 20)
})

test('fallDamageFrom reads null on junk (never a silent 0)', () => {
  assert.equal(fallDamageFrom(NaN), null)
  assert.equal(fallDamageFrom('fall'), null)
  assert.equal(fallDamageFrom(true), null)
})

test('fallDamageFrom floors the liar negative at the free fall', () => {
  assert.equal(fallDamageFrom(-5), 0)
  assert.equal(fallDamageFrom(-0.5), 0)
})

test('the bounds are honest vanilla (the grace, the offset, the deadly line)', () => {
  assert.ok(FALL_HURT_AT > 0 && FALL_HURT_AT < FALL_DEADLY_AT)
  assert.equal(FALL_HURT_AT, 3)
  assert.equal(FALL_DAMAGE_OFFSET, 3)
  assert.equal(FALL_DEADLY_AT, 23)
  assert.equal(Math.ceil(FALL_DEADLY_AT - FALL_DAMAGE_OFFSET), 20)
})
