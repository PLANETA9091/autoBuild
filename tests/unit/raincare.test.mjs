import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.396) THE RAINCARE WORD - the care lane's seventh sibling's pins.
import { decideRainAction, burnBlockedBy, WEATHER_CLEAR, WEATHER_RAIN, WEATHER_THUNDER } from '../../src/lib/raincare.mjs'

test('junk state refuses honestly (no throw)', () => {
  for (const junk of [NaN, Infinity, -Infinity, '1', {}, true]) {
    const care = decideRainAction({ rainState: junk })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
    assert.equal(care.rainState, null)
  }
  const care = decideRainAction({ rainState: 0, thunderState: NaN })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'junk-input')
})

test('missing report keeps silent (never trust a missing bar with a 0)', () => {
  for (const missing of [undefined, null]) {
    const care = decideRainAction({ rainState: missing, thunderState: missing })
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-report')
    assert.equal(care.rainState, null)
    assert.equal(care.burnBlocked, null)
  }
})

test('one-sided read judges on the side provided (the other reads clear)', () => {
  const care = decideRainAction({ rainState: 1 })
  assert.equal(care.action, 'shelter-extends')
  assert.equal(care.thunderState, 0)
})

test('clear sky keeps silent', () => {
  const care = decideRainAction({ rainState: 0, thunderState: 0 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'clear-sky')
  assert.equal(care.burnBlocked, false)
})

test('rain band extends the shelter (the dawn the rain delays)', () => {
  const care = decideRainAction({ rainState: 1, thunderState: 0 })
  assert.equal(care.action, 'shelter-extends')
  assert.equal(care.reason, 'burn-suppressed')
  assert.equal(care.burnBlocked, true)
})

test('thunder band outranks the rain band (danger first)', () => {
  const care = decideRainAction({ rainState: 1, thunderState: 2 })
  assert.equal(care.action, 'thunder')
  assert.equal(care.reason, 'storm-danger')
  assert.equal(care.burnBlocked, true)
})

test('band boundary is inclusive (1 rains, 0 keeps; 2 thunders, 1 rains)', () => {
  assert.equal(decideRainAction({ rainState: 0, thunderState: 0 }).action, 'keep')
  assert.equal(decideRainAction({ rainState: 1, thunderState: 0 }).action, 'shelter-extends')
  assert.equal(decideRainAction({ rainState: 1, thunderState: 1 }).action, 'shelter-extends')
  assert.equal(decideRainAction({ rainState: 1, thunderState: 2 }).action, 'thunder')
})

test('states clamp to the 0..2 band the packet carries', () => {
  assert.equal(decideRainAction({ rainState: -3, thunderState: 0 }).rainState, 0)
  assert.equal(decideRainAction({ rainState: 7, thunderState: 0 }).rainState, 2)
  assert.equal(decideRainAction({ rainState: 7, thunderState: 0 }).action, 'shelter-extends')
  assert.equal(decideRainAction({ rainState: 0, thunderState: 9 }).action, 'thunder')
})

test('fractional states floor (the packet sends whole states)', () => {
  assert.equal(decideRainAction({ rainState: 1.9, thunderState: 0 }).rainState, 1)
  assert.equal(decideRainAction({ rainState: 0.9, thunderState: 0 }).action, 'keep')
})

test('burnBlockedBy rides the vanilla law (rain suppresses the undead burn)', () => {
  assert.equal(burnBlockedBy(0), false)
  assert.equal(burnBlockedBy(1), true)
  assert.equal(burnBlockedBy(2), true)
})

test('burnBlockedBy honest on junk and out-of-band reads', () => {
  for (const junk of [NaN, Infinity, 'x', {}, null, undefined]) {
    assert.equal(burnBlockedBy(junk), null)
  }
  assert.equal(burnBlockedBy(-1), false)
  assert.equal(burnBlockedBy(9), true)
})

test('the constants are the vanilla weather law the word prices', () => {
  assert.equal(WEATHER_CLEAR, 0)
  assert.equal(WEATHER_RAIN, 1)
  assert.equal(WEATHER_THUNDER, 2)
  assert.ok(WEATHER_CLEAR < WEATHER_RAIN && WEATHER_RAIN < WEATHER_THUNDER)
})
