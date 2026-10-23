import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.401) THE POTIONCARE WORD - the care lane's twelfth sibling's pins.
import { decidePotionAction, harmfulOf, POTION_DRAIN_IDS, POTION_AFFLICT_IDS, POTION_NAME_BY_ID } from '../../src/lib/potioncare.mjs'

test('junk shelf refuses honestly (no throw)', () => {
  for (const junk of ['bottled', 5, true]) {
    const care = decidePotionAction({ effects: junk })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
    assert.equal(care.count, 0)
  }
})

test('missing shelf keeps silent (never trust a missing bar with a 0)', () => {
  for (const missing of [undefined, null]) {
    const care = decidePotionAction({ effects: missing })
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-bar')
    assert.equal(care.worst, null)
  }
})

test('an empty shelf is a real reading (clean, not silence)', () => {
  const care = decidePotionAction({ effects: {} })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'clean')
  assert.deepEqual(care.harmful, [])
})

test('the positive half stays silent (speed and haste are not the word\'s grief)', () => {
  const care = decidePotionAction({ effects: { 1: { id: 1, duration: 400 }, 10: { id: 10, duration: 100 } } })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'clean')
})

test('the map shelf scans (the mineflayer id -> effect shape)', () => {
  const care = decidePotionAction({ effects: { 19: { id: 19, duration: 200, amplifier: 0 } } })
  assert.equal(care.action, 'treat')
  assert.equal(care.reason, 'draining')
  assert.equal(care.worst.name, 'poison')
  assert.equal(care.count, 1)
})

test('the array shelf scans too (the plain list shape)', () => {
  const care = decidePotionAction({ effects: [{ id: 15, duration: 90, amplifier: 0 }] })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'afflicted')
  assert.equal(care.worst.name, 'blindness')
})

test('the wither is the drain the word treats (no armor stops it)', () => {
  const care = decidePotionAction({ effects: { 20: { id: 20, duration: 300, amplifier: 1 } } })
  assert.equal(care.action, 'treat')
  assert.equal(care.reason, 'draining')
  assert.equal(care.worst.name, 'wither')
  assert.equal(care.worst.amplifier, 1)
})

test('the worst ride is the longest clock (duration outranks, not the id)', () => {
  const care = decidePotionAction({ effects: [{ id: 19, duration: 100 }, { id: 20, duration: 40 }] })
  assert.equal(care.worst.name, 'poison')
  assert.equal(care.harmful[0].duration, 100)
  assert.equal(care.harmful[1].name, 'wither')
})

test('the drain outranks the afflict (danger first, the family law)', () => {
  const care = decidePotionAction({ effects: [{ id: 15, duration: 900 }, { id: 19, duration: 10 }] })
  assert.equal(care.action, 'treat')
  assert.equal(care.reason, 'draining')
  assert.equal(care.count, 2)
})

test('the expired and the uncountable stay off the shelf (duration 0 or missing is not a ride)', () => {
  const care = decidePotionAction({ effects: [{ id: 19, duration: 0 }, { id: 20 }, { id: 15, duration: NaN }] })
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'clean')
})

test('the individual junk slots are skipped, never guessed (the map\'s own holes)', () => {
  const care = decidePotionAction({ effects: [null, 'hole', { id: 'junk', duration: 5 }, { id: 20, duration: 60 }] })
  assert.equal(care.action, 'treat')
  assert.equal(care.count, 1)
  assert.equal(care.worst.name, 'wither')
})

test('the verdict carries the whole harmful shelf (longest first)', () => {
  const care = decidePotionAction({ effects: [{ id: 2, duration: 50 }, { id: 4, duration: 70 }, { id: 15, duration: 30 }] })
  assert.deepEqual(care.harmful.map(h => h.name), ['mining-fatigue', 'slowness', 'blindness'])
  assert.equal(care.count, 3)
})

test('harmfulOf reads null on the junk container (never a silent list)', () => {
  assert.equal(harmfulOf(null), null)
  assert.equal(harmfulOf('x'), null)
  assert.equal(harmfulOf(5), null)
  assert.deepEqual(harmfulOf([]), [])
})

test('the bounds are honest vanilla (the drain set, the afflict set, the names)', () => {
  assert.deepEqual([...POTION_DRAIN_IDS].sort((a, b) => a - b), [7, 17, 19, 20])
  assert.ok(POTION_AFFLICT_IDS.has(24))
  assert.equal(POTION_NAME_BY_ID[20], 'wither')
  assert.equal(POTION_NAME_BY_ID[19], 'poison')
  assert.equal(POTION_NAME_BY_ID[32], 'darkness')
})
