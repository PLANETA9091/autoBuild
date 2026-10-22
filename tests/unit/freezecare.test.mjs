import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.397) THE FREEZECARE WORD - the care lane's eighth sibling's pins.
import { decideFreezeAction, frostPercentFromTicks, FREEZE_DANGER_AT, FREEZE_WATCH_AT, FREEZE_TICKS_PER_SECOND, FROST_DAMAGE_INTERVAL_TICKS } from '../../src/lib/freezecare.mjs'

test('junk frozen refuses honestly (no throw)', () => {
  const care = decideFreezeAction({ frozen: NaN })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'junk-input')
  assert.equal(care.frozen, 0)
})

test('missing bar keeps silent (never trust a missing bar with a 0)', () => {
  for (const missing of [undefined, null]) {
    const care = decideFreezeAction({ frozen: missing })
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-bar')
    assert.equal(care.frozen, null)
  }
})

test('frozen clamps to the counter bounds (above the cap the liar read rides the cap)', () => {
  assert.equal(decideFreezeAction({ frozen: -5 }).frozen, 0)
  assert.equal(decideFreezeAction({ frozen: -5 }).action, 'keep')
  assert.equal(decideFreezeAction({ frozen: 200 }).frozen, 140)
  assert.equal(decideFreezeAction({ frozen: 200 }).action, 'thaw')
})

test('a real zero is a real reading (unfrozen, not silence)', () => {
  const care = decideFreezeAction({ frozen: 0 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'unfrozen')
  assert.equal(care.frozen, 0)
})

test('watch band watches (the seal forming)', () => {
  const care = decideFreezeAction({ frozen: 90 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'watch-band')
})

test('watch boundary is inclusive (69 keeps, 70 watches)', () => {
  assert.equal(decideFreezeAction({ frozen: 69 }).action, 'keep')
  assert.equal(decideFreezeAction({ frozen: 70 }).action, 'watch')
})

test('danger band thaws (danger outranks the watch band)', () => {
  const care = decideFreezeAction({ frozen: 140 })
  assert.equal(care.action, 'thaw')
  assert.equal(care.reason, 'frozen-solid')
})

test('danger boundary is inclusive (139 watches, 140 thaws)', () => {
  assert.equal(decideFreezeAction({ frozen: 139 }).action, 'watch')
  assert.equal(decideFreezeAction({ frozen: 140 }).action, 'thaw')
})

test('frost percent arithmetic: ceil half-steps, 140 = the whole seal', () => {
  assert.equal(frostPercentFromTicks(0), 0)
  assert.equal(frostPercentFromTicks(70), 50)
  assert.equal(frostPercentFromTicks(1), 1)
  assert.equal(frostPercentFromTicks(140), 100)
  assert.equal(frostPercentFromTicks(NaN), 0)
})

test('frost percent clamps to the display bounds', () => {
  assert.equal(frostPercentFromTicks(-50), 0)
  assert.equal(frostPercentFromTicks(300), 100)
})

test('the word carries percent in every verdict', () => {
  assert.equal(decideFreezeAction({ frozen: 70 }).percent, 50)
  assert.equal(decideFreezeAction({ frozen: 35 }).percent, 25)
  assert.equal(decideFreezeAction({ frozen: 140 }).percent, 100)
})

test('the bounds are honest vanilla (watch under danger = cap, the 20-ticks clock, the 2s bite)', () => {
  assert.ok(FREEZE_WATCH_AT > 0 && FREEZE_WATCH_AT < FREEZE_DANGER_AT)
  assert.equal(FREEZE_DANGER_AT, 140)
  assert.equal(FREEZE_TICKS_PER_SECOND, 20)
  assert.equal(FROST_DAMAGE_INTERVAL_TICKS, 40)
})
