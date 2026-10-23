import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.399) THE FIRECARE WORD - the care lane's tenth sibling's pins.
import { decideFireAction, burnSecondsFromTicks, FIRE_DOUSE_AT, FIRE_WATCH_AT, FIRE_TICKS_PER_SECOND, FIRE_DAMAGE_INTERVAL_TICKS } from '../../src/lib/firecare.mjs'

test('junk fireTicks refuses honestly (no throw)', () => {
  for (const junk of [NaN, 'hot', {}, Symbol('x')]) {
    const care = decideFireAction({ fireTicks: junk })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
    assert.equal(care.fireTicks, 0)
  }
})

test('missing bar keeps silent (never trust a missing bar with a 0)', () => {
  for (const missing of [undefined, null]) {
    const care = decideFireAction({ fireTicks: missing })
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-bar')
    assert.equal(care.fireTicks, null)
    assert.equal(care.seconds, 0)
  }
})

test('the empty read keeps silent too (no ticks and no flag)', () => {
  const care = decideFireAction({})
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'no-bar')
})

test('the binary flag alone speaks (burning with the length unknown assumes the worst)', () => {
  const care = decideFireAction({ onFire: true })
  assert.equal(care.action, 'douse')
  assert.equal(care.reason, 'on-fire-binary')
  assert.equal(care.fireTicks, null)
})

test('the binary false is the extinguished reading (not silence)', () => {
  const care = decideFireAction({ onFire: false })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'extinguished')
  assert.equal(care.fireTicks, 0)
})

test('the boolean direct read rides the same verdicts (the mineflayer flag shape)', () => {
  const burning = decideFireAction({ fireTicks: true })
  assert.equal(burning.action, 'douse')
  assert.equal(burning.reason, 'on-fire-binary')
  const cold = decideFireAction({ fireTicks: false })
  assert.equal(cold.action, 'keep')
  assert.equal(cold.reason, 'extinguished')
})

test('the ticks outrank the flag (a real clock is never downgraded to the binary)', () => {
  const care = decideFireAction({ fireTicks: 150, onFire: true })
  assert.equal(care.action, 'douse')
  assert.equal(care.reason, 'burning-hard')
  assert.equal(care.fireTicks, 150)
})

test('a real zero is a real reading (extinguished, not silence)', () => {
  const care = decideFireAction({ fireTicks: 0 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'extinguished')
  assert.equal(care.fireTicks, 0)
})

test('the floor clamp only (a negative read is the liar read, the high read is an honest longer burn)', () => {
  const below = decideFireAction({ fireTicks: -5 })
  assert.equal(below.fireTicks, 0)
  assert.equal(below.action, 'keep')
  assert.equal(below.reason, 'extinguished')
  const lava = decideFireAction({ fireTicks: 300 })
  assert.equal(lava.action, 'douse')
  assert.equal(lava.fireTicks, 300)
})

test('dying embers stay silent (under the watch band)', () => {
  const care = decideFireAction({ fireTicks: 10 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'dying-embers')
  assert.equal(care.seconds, 0.5)
})

test('watch boundary is inclusive (19 keeps, 20 watches)', () => {
  assert.equal(decideFireAction({ fireTicks: 19 }).action, 'keep')
  assert.equal(decideFireAction({ fireTicks: 20 }).action, 'watch')
  assert.equal(decideFireAction({ fireTicks: 20 }).reason, 'watch-band')
})

test('douse boundary is inclusive (99 watches, 100 douses)', () => {
  assert.equal(decideFireAction({ fireTicks: 99 }).action, 'watch')
  const care = decideFireAction({ fireTicks: 100 })
  assert.equal(care.action, 'douse')
  assert.equal(care.reason, 'burning-hard')
  assert.equal(care.seconds, 5)
})

test('the word carries seconds in every tick verdict (the vanilla 20-ticks clock)', () => {
  assert.equal(decideFireAction({ fireTicks: 160 }).seconds, 8)
  assert.equal(decideFireAction({ fireTicks: 300 }).seconds, 15)
  assert.equal(decideFireAction({ fireTicks: 99 }).seconds, 4.95)
})

test('burnSecondsFromTicks translates the clock (junk reads null, never a silent 0)', () => {
  assert.equal(burnSecondsFromTicks(100), 5)
  assert.equal(burnSecondsFromTicks(0), 0)
  assert.equal(burnSecondsFromTicks(-40), -2)
  assert.equal(burnSecondsFromTicks(NaN), null)
  assert.equal(burnSecondsFromTicks('fire'), null)
})

test('the bounds are honest vanilla (watch under douse, the 20-ticks clock, the 1s bite)', () => {
  assert.ok(FIRE_WATCH_AT > 0 && FIRE_WATCH_AT < FIRE_DOUSE_AT)
  assert.equal(FIRE_DOUSE_AT, 100)
  assert.equal(FIRE_TICKS_PER_SECOND, 20)
  assert.equal(FIRE_DAMAGE_INTERVAL_TICKS, 20)
})
