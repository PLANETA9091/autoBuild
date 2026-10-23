import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.407) THE NIGHTCARE WORD - the care lane's eighteenth sibling's pins.
import {
  decideNightAction,
  normalizeDayTick,
  nightBudgetSecondsFromTick,
  NIGHTCARE_DAY_TICKS,
  NIGHTCARE_DUSK_FENCE_TICKS,
  NIGHTCARE_DAWN_FENCE_TICKS,
  NIGHTCARE_SKY_MARGIN_TICKS,
  NIGHTCARE_TICKS_PER_SECOND
} from '../../src/lib/nightcare.mjs'

test('junk clock refuses honestly (no throw)', () => {
  for (const junk of ['noon', NaN, {}, [12000]]) {
    const care = decideNightAction({ timeOfDay: junk })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
  }
})

test('the boolean is junk too (the numeric lane is not the firecare flag shape)', () => {
  for (const b of [true, false]) {
    const care = decideNightAction({ timeOfDay: b })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
  }
})

test('the missing read keeps silent (never trust a missing bar with a 0)', () => {
  const a = decideNightAction({})
  const b = decideNightAction({ timeOfDay: null })
  for (const care of [a, b]) {
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-bar')
    assert.equal(care.timeOfDay, null)
  }
})

test('the wrap law (the ring has no liar tail - the cyclical clock lands every integer)', () => {
  assert.equal(normalizeDayTick(25000), 1000)
  assert.equal(normalizeDayTick(-1200), 22800)
  assert.equal(normalizeDayTick(0), 0)
  assert.equal(normalizeDayTick(24000), 0)
  assert.equal(normalizeDayTick('soon'), null)
  assert.equal(normalizeDayTick(NaN), null)
})

test('the liar negative is a true ring position (a -1200 read IS 22800 tonight)', () => {
  const care = decideNightAction({ timeOfDay: -1200 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'dawn-soon')
  assert.equal(care.timeOfDay, 22800)
  assert.equal(care.seconds, 40)
})

test('the overfull read is tomorrow morning (25000 wraps to 1000)', () => {
  const care = decideNightAction({ timeOfDay: 25000 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'daylight')
  assert.equal(care.timeOfDay, 1000)
})

test('the morning tail after the dawn fence is day again (the wrap prices it)', () => {
  const care = decideNightAction({ timeOfDay: 23700 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'daylight')
  assert.equal(care.timeOfDay, 23700)
  assert.equal(care.seconds, 635)
})

test('the sunrise zero is real daylight (the full walk budget rides)', () => {
  const care = decideNightAction({ timeOfDay: 0 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'daylight')
  assert.equal(care.seconds, 620)
})

test('the dusk fence start is night already (the walks die at 12400)', () => {
  const care = decideNightAction({ timeOfDay: NIGHTCARE_DUSK_FENCE_TICKS })
  assert.equal(care.action, 'defer')
  assert.equal(care.reason, 'night-hold')
  assert.equal(care.seconds, 560)
})

test('the dawn fence end is day again (the fence the holds end at)', () => {
  const care = decideNightAction({ timeOfDay: NIGHTCARE_DAWN_FENCE_TICKS })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'daylight')
  assert.equal(care.timeOfDay, 23600)
  assert.equal(care.seconds, 640)
})

test('dusk-soon speaks the shadow (the walk started now dies in the window)', () => {
  const care = decideNightAction({ timeOfDay: 12000 })
  assert.equal(care.action, 'defer')
  assert.equal(care.reason, 'dusk-soon')
  assert.equal(care.seconds, 20)
})

test('the margin edge is inclusive (1200 ticks the last daylight band, 1200.5 the sky)', () => {
  const edge = decideNightAction({ timeOfDay: NIGHTCARE_DUSK_FENCE_TICKS - NIGHTCARE_SKY_MARGIN_TICKS })
  assert.equal(edge.reason, 'dusk-soon')
  const sky = decideNightAction({ timeOfDay: NIGHTCARE_DUSK_FENCE_TICKS - NIGHTCARE_SKY_MARGIN_TICKS - 0.5 })
  assert.equal(sky.reason, 'daylight')
})

test('dawn-soon speaks the payoff (the hold the dawn repays)', () => {
  const care = decideNightAction({ timeOfDay: 23000 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'dawn-soon')
  assert.equal(care.seconds, 30)
})

test('night-hold rides deep in the window (the digs in, the walks wait)', () => {
  const care = decideNightAction({ timeOfDay: 15000 })
  assert.equal(care.action, 'defer')
  assert.equal(care.reason, 'night-hold')
  assert.equal(care.seconds, 430)
})

test('the seconds translation is honest (junk null, the floor the belt wears)', () => {
  assert.equal(nightBudgetSecondsFromTick(0), 620)
  assert.equal(nightBudgetSecondsFromTick(15000), 430)
  assert.equal(nightBudgetSecondsFromTick('soon'), null)
  assert.equal(nightBudgetSecondsFromTick(NaN), null)
})

test('the verdicts carry no invented physics (the fence lines the only yardsticks)', () => {
  const care = decideNightAction({ timeOfDay: NIGHTCARE_DUSK_FENCE_TICKS })
  assert.equal(care.seconds, (NIGHTCARE_DAWN_FENCE_TICKS - NIGHTCARE_DUSK_FENCE_TICKS) / NIGHTCARE_TICKS_PER_SECOND)
  const morning = decideNightAction({ timeOfDay: NIGHTCARE_DAWN_FENCE_TICKS })
  const morningBudget = (NIGHTCARE_DAY_TICKS - NIGHTCARE_DAWN_FENCE_TICKS) + NIGHTCARE_DUSK_FENCE_TICKS
  assert.equal(morning.seconds, morningBudget / NIGHTCARE_TICKS_PER_SECOND)
})

test('the bounds are honest vanilla (the wrap, the fences, the margin, the clock)', () => {
  assert.equal(NIGHTCARE_DAY_TICKS, 24000)
  assert.equal(NIGHTCARE_DUSK_FENCE_TICKS, 12400)
  assert.equal(NIGHTCARE_DAWN_FENCE_TICKS, 23600)
  assert.equal(NIGHTCARE_SKY_MARGIN_TICKS, 1200)
  assert.equal(NIGHTCARE_TICKS_PER_SECOND, 20)
})
