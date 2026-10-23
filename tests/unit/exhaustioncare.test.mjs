import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.402) THE EXHAUSTIONCARE WORD - the care lane's thirteenth sibling's pins.
import { decideExhaustionAction, tollProgressFromExhaustion, EXHAUSTION_TOLL_AT, EXHAUSTION_WATCH_AT } from '../../src/lib/exhaustioncare.mjs'

test('junk exhaustion refuses honestly (no throw)', () => {
  for (const junk of [NaN, 'sprint', {}, Symbol('x')]) {
    const care = decideExhaustionAction({ exhaustion: junk })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
    assert.equal(care.exhaustion, 0)
  }
})

test('the boolean is junk too (the numeric lane is not the firecare flag shape)', () => {
  const care = decideExhaustionAction({ exhaustion: true })
  assert.equal(care.action, 'refuse')
  assert.equal(care.reason, 'junk-input')
})

test('missing bar keeps silent (never trust a missing bar with a 0)', () => {
  for (const missing of [undefined, null]) {
    const care = decideExhaustionAction({ exhaustion: missing })
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-bar')
    assert.equal(care.exhaustion, null)
    assert.equal(care.progress, null)
  }
})

test('the empty read keeps silent too', () => {
  const care = decideExhaustionAction({})
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'no-bar')
})

test('the negative liar read floors at the clean zero', () => {
  const care = decideExhaustionAction({ exhaustion: -0.5 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'lean')
  assert.equal(care.exhaustion, 0)
  assert.equal(care.progress, 0)
})

test('the real zero rides the lean silence (the game breathing)', () => {
  const care = decideExhaustionAction({ exhaustion: 0 })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'lean')
  assert.equal(care.exhaustion, 0)
  assert.equal(care.progress, 0)
})

test('the sprint-jump dozen fills the meter half (2 -> pre-toll)', () => {
  const care = decideExhaustionAction({ exhaustion: 2 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'pre-toll')
  assert.equal(care.progress, 0.5)
})

test('the watch boundary is inclusive (1.9 leans, 2 speaks)', () => {
  assert.equal(decideExhaustionAction({ exhaustion: 1.9 }).reason, 'lean')
  const care = decideExhaustionAction({ exhaustion: 2.0 })
  assert.equal(care.reason, 'pre-toll')
})

test('the toll bites at the 4.0 line (the drain law fires)', () => {
  const care = decideExhaustionAction({ exhaustion: 4 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'toll-bites')
  assert.equal(care.progress, 1)
})

test('the toll boundary (3.9 pre-toll, 4.0 toll-bites)', () => {
  assert.equal(decideExhaustionAction({ exhaustion: 3.9 }).reason, 'pre-toll')
  assert.equal(decideExhaustionAction({ exhaustion: 4.0 }).reason, 'toll-bites')
})

test('the over-full read rides the no cap (an honest over-1 accumulation)', () => {
  const care = decideExhaustionAction({ exhaustion: 4.5 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'toll-bites')
  assert.equal(care.exhaustion, 4.5)
  assert.equal(care.progress, 1.125)
})

test('the progress translation: junk null, liar zero, the fractions honest', () => {
  assert.equal(tollProgressFromExhaustion('x'), null)
  assert.equal(tollProgressFromExhaustion(NaN), null)
  assert.equal(tollProgressFromExhaustion(undefined), null)
  assert.equal(tollProgressFromExhaustion(-1), 0)
  assert.equal(tollProgressFromExhaustion(2), 0.5)
  assert.equal(tollProgressFromExhaustion(4.5), 1.125)
})

test('the verdict carries the progress (the caller reads without re-deriving)', () => {
  const care = decideExhaustionAction({ exhaustion: 3 })
  assert.equal(care.progress, 0.75)
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'pre-toll')
})

test('the vanilla constants hold', () => {
  assert.equal(EXHAUSTION_TOLL_AT, 4)
  assert.equal(EXHAUSTION_WATCH_AT, 2)
})
