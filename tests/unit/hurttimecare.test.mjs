import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.406) THE HURTTIMECARE WORD - the care lane's seventeenth sibling's pins.
import {
  decideHurtTimeAction,
  hurtSecondsFromTicks,
  HURTTIME_WINDOW_TICKS,
  HURTTIME_TICKS_PER_SECOND
} from '../../src/lib/hurttimecare.mjs'

test('junk hurtTime refuses honestly (no throw)', () => {
  for (const junk of ['bit', NaN, {}, [10]]) {
    const care = decideHurtTimeAction({ hurtTime: junk })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
  }
})

test('the boolean is junk too (the numeric lane is not the firecare flag shape)', () => {
  for (const b of [true, false]) {
    const care = decideHurtTimeAction({ hurtTime: b })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
  }
})

test('the missing read keeps silent (never trust a missing bar with a 0)', () => {
  const a = decideHurtTimeAction({})
  const b = decideHurtTimeAction({ hurtTime: null })
  for (const care of [a, b]) {
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-bar')
    assert.equal(care.hurtTime, null)
  }
})

test('the true zero is a real reading (the window spent, the next bite pays full)', () => {
  const care = decideHurtTimeAction({ hurtTime: 0 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'exposed')
  assert.equal(care.seconds, 0)
})

test('the liar negative floors at the exposed zero', () => {
  const care = decideHurtTimeAction({ hurtTime: -5 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'exposed')
})

test('the window rides while the clock runs (the free armor)', () => {
  const care = decideHurtTimeAction({ hurtTime: 10 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'hurt-window')
  assert.equal(care.hurtTime, 10)
})

test('the window edge (1 tick still rides, the honest floor above the zero)', () => {
  const care = decideHurtTimeAction({ hurtTime: 1 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'hurt-window')
})

test('the high read rides no cap (the honest longer window)', () => {
  const care = decideHurtTimeAction({ hurtTime: 50 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'hurt-window')
  assert.equal(care.hurtTime, 50)
  assert.equal(care.seconds, 2.5)
})

test('the seconds ride the verdict (the clock the HUD never prints)', () => {
  assert.equal(decideHurtTimeAction({ hurtTime: 10 }).seconds, 0.5)
  assert.equal(decideHurtTimeAction({ hurtTime: 7 }).seconds, 0.35)
})

test('the seconds translation is honest (junk null, the negative floors at 0)', () => {
  assert.equal(hurtSecondsFromTicks(10), 0.5)
  assert.equal(hurtSecondsFromTicks('soon'), null)
  assert.equal(hurtSecondsFromTicks(NaN), null)
  assert.equal(hurtSecondsFromTicks(-10), 0)
})

test('the verdicts carry no invented physics (the window width is the only yardstick)', () => {
  const care = decideHurtTimeAction({ hurtTime: HURTTIME_WINDOW_TICKS })
  assert.equal(care.hurtTime, 10)
  assert.equal(care.seconds, 0.5)
})

test('the bounds are honest vanilla (the 10-tick window, the 20-ticks clock)', () => {
  assert.equal(HURTTIME_WINDOW_TICKS, 10)
  assert.equal(HURTTIME_TICKS_PER_SECOND, 20)
  assert.equal(HURTTIME_WINDOW_TICKS / HURTTIME_TICKS_PER_SECOND, 0.5)
})
