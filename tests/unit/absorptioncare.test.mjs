import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.400) THE ABSORPTIONCARE WORD - the care lane's eleventh sibling's pins.
import { decideAbsorptionAction, absorptionHearts, ABSORPTION_GOLDEN_APPLE, ABSORPTION_ENCHANTED_GOLDEN_APPLE, ABSORPTION_SHIELD_AT } from '../../src/lib/absorptioncare.mjs'

test('junk absorption refuses honestly (no throw)', () => {
  for (const junk of [NaN, 'golden', {}, Symbol('x')]) {
    const care = decideAbsorptionAction({ absorption: junk })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
    assert.equal(care.absorption, 0)
  }
})

test('the boolean is junk too (the numeric lane is not the firecare flag shape)', () => {
  const care = decideAbsorptionAction({ absorption: true })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'junk-input')
})

test('missing bar keeps silent (never trust a missing bar with a 0)', () => {
  for (const missing of [undefined, null]) {
    const care = decideAbsorptionAction({ absorption: missing })
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-bar')
    assert.equal(care.absorption, null)
    assert.equal(care.hearts, null)
  }
})

test('the empty read keeps silent too', () => {
  const care = decideAbsorptionAction({})
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'no-bar')
})

test('the negative liar read floors at the unshielded zero', () => {
  const care = decideAbsorptionAction({ absorption: -3 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'unshielded')
  assert.equal(care.absorption, 0)
  assert.equal(care.hearts, 0)
})

test('the true zero is the real reading (not the silence)', () => {
  const care = decideAbsorptionAction({ absorption: 0 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'unshielded')
  assert.equal(care.absorption, 0)
  assert.equal(care.hearts, 0)
})

test('the thin shield speaks (under the 2-golden-heart line)', () => {
  const care = decideAbsorptionAction({ absorption: 3 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'thin-shield')
  assert.equal(care.absorption, 3)
  assert.equal(care.hearts, 1.5)
})

test('the shield boundary is inclusive (4 = the line, the buffer has mass)', () => {
  const care = decideAbsorptionAction({ absorption: 4 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'shielded')
  assert.equal(care.hearts, 2)
})

test('the golden apple rides the thin band (Absorption I = 2 points)', () => {
  const care = decideAbsorptionAction({ absorption: ABSORPTION_GOLDEN_APPLE })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'thin-shield')
  assert.equal(care.hearts, 1)
})

test('the enchanted apple keeps silent (Absorption IV = 8 points)', () => {
  const care = decideAbsorptionAction({ absorption: ABSORPTION_ENCHANTED_GOLDEN_APPLE })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'shielded')
  assert.equal(care.hearts, 4)
})

test('the high read rides the no cap (an honest longer shield)', () => {
  const care = decideAbsorptionAction({ absorption: 12 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'shielded')
  assert.equal(care.absorption, 12)
  assert.equal(care.hearts, 6)
})

test('the hearts translation: junk null, liar zero, the halves honest', () => {
  assert.equal(absorptionHearts('x'), null)
  assert.equal(absorptionHearts(NaN), null)
  assert.equal(absorptionHearts(undefined), null)
  assert.equal(absorptionHearts(-2), 0)
  assert.equal(absorptionHearts(8), 4)
  assert.equal(absorptionHearts(3), 1.5)
})

test('the verdict carries the hearts (the caller reads without re-deriving)', () => {
  const care = decideAbsorptionAction({ absorption: 1 })
  assert.equal(care.hearts, 0.5)
  assert.equal(care.action, 'watch')
})

test('the vanilla constants hold', () => {
  assert.equal(ABSORPTION_GOLDEN_APPLE, 2)
  assert.equal(ABSORPTION_ENCHANTED_GOLDEN_APPLE, 8)
  assert.equal(ABSORPTION_SHIELD_AT, 4)
})
