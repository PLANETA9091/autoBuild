import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.409) THE SACKCARE WORD - the care lane's twentieth sibling's pins.
import {
  decideSackAction,
  freeSlotsFromSack,
  SACKCARE_INVENTORY_SLOTS,
  SACKCARE_CHEST_PRESS_AT
} from '../../src/lib/sackcare.mjs'

test('junk sack count refuses honestly (no throw)', () => {
  for (const junk of ['full', NaN, {}, [36]]) {
    const care = decideSackAction({ slotsUsed: junk })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
    assert.equal(care.freeSlots, null)
  }
})

test('the boolean is junk too (the numeric lane is not the firecare flag shape)', () => {
  for (const b of [true, false]) {
    const care = decideSackAction({ slotsUsed: b })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
  }
})

test('the missing read keeps silent (never trust a missing bar with a 0)', () => {
  const a = decideSackAction({})
  const b = decideSackAction({ slotsUsed: null })
  for (const care of [a, b]) {
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-bar')
    assert.equal(care.slotsUsed, null)
    assert.equal(care.freeSlots, null)
  }
})

test('the liar negative read floors into the empty sack (the floor law)', () => {
  const care = decideSackAction({ slotsUsed: -3 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'sack-empty')
  assert.equal(care.slotsUsed, 0)
  assert.equal(care.freeSlots, 36)
})

test('the true zero speaks the empty sack (a real reading, not the silence)', () => {
  const care = decideSackAction({ slotsUsed: 0 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'sack-empty')
  assert.equal(care.slotsUsed, 0)
  assert.equal(care.freeSlots, SACKCARE_INVENTORY_SLOTS)
})

test('the roomy pocket keeps silent (the honest alive, the drops land)', () => {
  const care = decideSackAction({ slotsUsed: 10 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'roomy')
  assert.equal(care.freeSlots, 26)
})

test('the pressure line opens at 27 exact (the CHEST_SLOTS sibling own number)', () => {
  const a = decideSackAction({ slotsUsed: 26 })
  assert.equal(a.action, 'keep')
  assert.equal(a.reason, 'roomy')
  const b = decideSackAction({ slotsUsed: SACKCARE_CHEST_PRESS_AT })
  assert.equal(b.action, 'watch')
  assert.equal(b.reason, 'sack-pressed')
  assert.equal(b.freeSlots, 9)
})

test('the last free seat still watches (35 watches, one seat left)', () => {
  const care = decideSackAction({ slotsUsed: 35 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'sack-pressed')
  assert.equal(care.freeSlots, 1)
})

test('the rim 36 exact refuses (the capacity inclusive, the next pickup has no seat)', () => {
  const care = decideSackAction({ slotsUsed: SACKCARE_INVENTORY_SLOTS })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'sack-full')
  assert.equal(care.freeSlots, 0)
})

test('the over-capacity read prices live (the desynced window, no cap, no clamp of the log line)', () => {
  const care = decideSackAction({ slotsUsed: 40 })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'sack-full')
  assert.equal(care.slotsUsed, 40)
  assert.equal(care.freeSlots, 0)
})

test('the free seats translation (junk null never a silent 0, the alive floors)', () => {
  assert.equal(freeSlotsFromSack('x'), null)
  assert.equal(freeSlotsFromSack(NaN), null)
  assert.equal(freeSlotsFromSack(null), null)
  assert.equal(freeSlotsFromSack(0), 36)
  assert.equal(freeSlotsFromSack(36), 0)
  assert.equal(freeSlotsFromSack(40), 0)
  assert.equal(freeSlotsFromSack(-5), 41) // the raw translation floors the FREE side only - the banded verdict floors the used side first, the translation stays raw arithmetic
})

test('the raw translation never goes negative (the honest floor law)', () => {
  for (const used of [0, 10, 27, 36, 40, 400]) {
    const free = freeSlotsFromSack(used)
    assert.ok(free >= 0)
  }
})

test('the constants stand alone (the vanilla seats, the chest sibling restated)', () => {
  assert.equal(SACKCARE_INVENTORY_SLOTS, 36)
  assert.equal(SACKCARE_CHEST_PRESS_AT, 27)
})

test('the bands never fight the deposit lane (consult-only verdicts, no mover verbs)', () => {
  for (const used of [0, 10, 27, 35, 36, 40]) {
    const care = decideSackAction({ slotsUsed: used })
    assert.ok(['keep', 'watch', 'refuse'].includes(care.action))
  }
})
