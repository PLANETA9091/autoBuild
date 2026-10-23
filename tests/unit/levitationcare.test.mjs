import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.405) THE LEVITATIONCARE WORD - the care lane's sixteenth sibling's pins.
import {
  decideLevitationAction,
  levitationSecondsFromTicks,
  levitationClimbFromAmplifier,
  LEVITATION_ID,
  LEVITATION_WATCH_AT,
  LEVITATION_TICKS_PER_SECOND,
  LEVITATION_CLIMB_PER_LEVEL
} from '../../src/lib/levitationcare.mjs'

test('junk duration refuses honestly (no throw)', () => {
  for (const junk of ['long', NaN, {}, [25]]) {
    const care = decideLevitationAction({ duration: junk })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
    assert.equal(care.climb, null)
  }
})

test('the boolean is junk too (the numeric lane is not the firecare flag shape)', () => {
  for (const b of [true, false]) {
    const care = decideLevitationAction({ duration: b })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
  }
})

test('the missing read keeps silent (never trust a missing bar with a 0)', () => {
  const a = decideLevitationAction({})
  const b = decideLevitationAction({ duration: null })
  for (const care of [a, b]) {
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-bar')
    assert.equal(care.duration, null)
    assert.equal(care.climb, null)
  }
})

test('the true zero is a real reading (the meter hands the fall over)', () => {
  const care = decideLevitationAction({ duration: 0 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'expired')
  assert.equal(care.climb, null)
})

test('the liar negative floors at the expired zero', () => {
  const care = decideLevitationAction({ duration: -40 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'expired')
})

test('the landing-soon band is the danger voice (the soften window NOW)', () => {
  const low = decideLevitationAction({ duration: 1, amplifier: 0 })
  assert.equal(low.action, 'land')
  assert.equal(low.reason, 'landing-soon')
  const edge = decideLevitationAction({ duration: LEVITATION_WATCH_AT, amplifier: 1 })
  assert.equal(edge.action, 'land')
  assert.equal(edge.reason, 'landing-soon')
})

test('the watch line is inclusive at 100 and exclusive at 101', () => {
  assert.equal(decideLevitationAction({ duration: 100 }).action, 'land')
  assert.equal(decideLevitationAction({ duration: 101 }).action, 'watch')
  assert.equal(decideLevitationAction({ duration: 101 }).reason, 'floating')
})

test('the long float rides no cap (the honest longer float)', () => {
  const care = decideLevitationAction({ duration: 20000, amplifier: 9 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'floating')
  assert.equal(care.duration, 20000)
  assert.equal(care.climb, 9)
})

test('the seconds ride the verdict (the countdown the HUD never prints)', () => {
  const a = decideLevitationAction({ duration: 100 })
  assert.equal(a.seconds, 5)
  const b = decideLevitationAction({ duration: 55 })
  assert.equal(b.seconds, 2.75)
})

test('the climb rides only the active float (expired climbs null even with the level)', () => {
  const care = decideLevitationAction({ duration: 0, amplifier: 3 })
  assert.equal(care.action, 'keep')
  assert.equal(care.climb, null)
})

test('the junk amplifier climbs null (never guessed)', () => {
  for (const junk of ['high', NaN, {}]) {
    const care = decideLevitationAction({ duration: 400, amplifier: junk })
    assert.equal(care.action, 'watch')
    assert.equal(care.climb, null)
  }
})

test('the missing amplifier climbs null (the reader may not carry it)', () => {
  const care = decideLevitationAction({ duration: 400 })
  assert.equal(care.action, 'watch')
  assert.equal(care.climb, null)
})

test('the liar negative amplifier floors at the zeroth level', () => {
  assert.equal(levitationClimbFromAmplifier(-2), LEVITATION_CLIMB_PER_LEVEL)
})

test('the seconds translation is honest (junk null, the negative floors at 0)', () => {
  assert.equal(levitationSecondsFromTicks(3000), 150)
  assert.equal(levitationSecondsFromTicks('soon'), null)
  assert.equal(levitationSecondsFromTicks(NaN), null)
  assert.equal(levitationSecondsFromTicks(-100), 0)
})

test('the bounds are honest vanilla (the registry id, the 20-ticks clock, the 0.9 climb)', () => {
  assert.equal(LEVITATION_ID, 25)
  assert.equal(LEVITATION_WATCH_AT, 100)
  assert.equal(LEVITATION_TICKS_PER_SECOND, 20)
  assert.equal(LEVITATION_CLIMB_PER_LEVEL, 0.9)
  assert.equal(levitationClimbFromAmplifier(0), 0.9)
  assert.equal(levitationClimbFromAmplifier(3), 3.6)
})
