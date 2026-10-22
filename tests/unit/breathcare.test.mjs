import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.394) THE BREATHCARE WORD - the care lane's fifth sibling's pins.
import { decideBreathAction, bubblesFromOxygen, BREATH_SURFACE_AT, BREATH_WATCH_AT, BREATH_TICKS_PER_POINT } from '../../src/lib/breathcare.mjs'

test('junk oxygen refuses honestly (no throw)', () => {
  const care = decideBreathAction({ oxygen: NaN })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'junk-input')
  assert.equal(care.oxygen, 0)
})

test('missing bar keeps silent (never trust a missing bar with a 0)', () => {
  for (const missing of [undefined, null]) {
    const care = decideBreathAction({ oxygen: missing })
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-bar')
    assert.equal(care.oxygen, null)
  }
})

test('oxygen clamps to the bar bounds', () => {
  assert.equal(decideBreathAction({ oxygen: -3 }).oxygen, 0)
  assert.equal(decideBreathAction({ oxygen: 25 }).oxygen, 20)
  assert.equal(decideBreathAction({ oxygen: 25 }).action, 'keep')
})

test('critical band surfaces (danger outranks the watch band)', () => {
  const care = decideBreathAction({ oxygen: 4, trust: 'wet' })
  assert.equal(care.action, 'surface')
  assert.equal(care.reason, 'critical-air')
})

test('critical boundary is inclusive (6 surfaces, 7 watches)', () => {
  assert.equal(decideBreathAction({ oxygen: 6 }).action, 'surface')
  assert.equal(decideBreathAction({ oxygen: 7 }).action, 'watch')
})

test('watch boundary is inclusive (12 watches, 13 keeps)', () => {
  const care = decideBreathAction({ oxygen: 12 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'watch-band')
  assert.equal(decideBreathAction({ oxygen: 13 }).action, 'keep')
  assert.equal(decideBreathAction({ oxygen: 13 }).reason, 'breathing')
})

test('dry trust silences the glitch bar (the water guard owns the liar seat)', () => {
  const care = decideBreathAction({ oxygen: 0, trust: 'dry' })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'dry-bar')
  assert.equal(decideBreathAction({ oxygen: 3, trust: 'dry' }).reason, 'dry-bar')
})

test('dry trust with a healthy bar stays plain breathing (no dry word)', () => {
  const care = decideBreathAction({ oxygen: 20, trust: 'dry' })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'breathing')
})

test('unknown and null trust judge nothing (the bar is believed)', () => {
  assert.equal(decideBreathAction({ oxygen: 0, trust: 'unknown' }).action, 'surface')
  assert.equal(decideBreathAction({ oxygen: 2, trust: null }).action, 'surface')
  assert.equal(decideBreathAction({ oxygen: 0 }).action, 'surface')
})

test('bubbles arithmetic: ceil half-bubbles, each bubble 2 points', () => {
  assert.equal(bubblesFromOxygen(20), 10)
  assert.equal(bubblesFromOxygen(15), 8)
  assert.equal(bubblesFromOxygen(1), 1)
  assert.equal(bubblesFromOxygen(0), 0)
  assert.equal(bubblesFromOxygen(NaN), 0)
})

test('bubbles clamp to the display bounds', () => {
  assert.equal(bubblesFromOxygen(-5), 0)
  assert.equal(bubblesFromOxygen(300), 10)
})

test('the word carries bubbles in every verdict', () => {
  assert.equal(decideBreathAction({ oxygen: 5 }).bubbles, 3)
  assert.equal(decideBreathAction({ oxygen: 12 }).bubbles, 6)
  assert.equal(decideBreathAction({ oxygen: 20 }).bubbles, 10)
})

test('the bounds are honest vanilla (surface under watch, both in-bar, 15 ticks/point)', () => {
  assert.ok(BREATH_SURFACE_AT >= 0 && BREATH_SURFACE_AT < BREATH_WATCH_AT)
  assert.ok(BREATH_WATCH_AT > 0 && BREATH_WATCH_AT < 20)
  assert.equal(BREATH_TICKS_PER_POINT, 15)
})
