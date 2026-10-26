// (v0.976.490) Unit tests for the chorus trip word (src/lib/chorus.mjs).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  decideChorusTrip,
  CHORUS_FRUIT_MAX_PER_PLANT,
  CHORUS_FRUIT_DROP_CHANCE,
  CHORUS_PURPUR_POPPED
} from '../../src/lib/chorus.mjs'

test('junk battery: string plantsCount refuses, never throws', () => {
  const r = decideChorusTrip({ plantsCount: 'seven', fruitsCount: 0, poppedCount: 0 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.plantsToBreak, 0)
})

test('junk battery: NaN poppedCount refuses', () => {
  const r = decideChorusTrip({ plantsCount: 5, fruitsCount: 0, poppedCount: NaN })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk battery: boolean fruitsCount refuses (a flag is never a count)', () => {
  const r = decideChorusTrip({ plantsCount: 5, fruitsCount: true, poppedCount: 0 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('empty call reads the honest default: no garden read keeps', () => {
  const r = decideChorusTrip()
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'garden-empty')
})

test('floor law: negative plants clamp to zero and keep garden-empty', () => {
  const r = decideChorusTrip({ plantsCount: -3, fruitsCount: 4, poppedCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'garden-empty')
  assert.equal(r.plantsLeft, 0)
})

test('floor law: negative popped reads as zero, break path affords', () => {
  const r = decideChorusTrip({ plantsCount: 5, fruitsCount: 0, poppedCount: -2 })
  assert.equal(r.action, 'break')
  assert.equal(r.reason, 'plants-afford')
  assert.equal(r.plantsToBreak, 5)
})

test('garden gate reads first: raw fruit and zero plants keep garden-empty, never defer', () => {
  const r = decideChorusTrip({ plantsCount: 0, fruitsCount: 9, poppedCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'garden-empty')
})

test('stock law: the purpur unit held keeps stock-full (four popped)', () => {
  const r = decideChorusTrip({ plantsCount: 10, fruitsCount: 0, poppedCount: 4 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'stock-full')
})

test('stock law: surplus popped keeps too, the unit the coin not the count', () => {
  const r = decideChorusTrip({ plantsCount: 10, fruitsCount: 7, poppedCount: 9 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'stock-full')
})

test('stock law: raw fruit is the feed never the unit (popped 0 fruit 4 still owes)', () => {
  const r = decideChorusTrip({ plantsCount: 10, fruitsCount: 4, poppedCount: 0 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'pop-owed')
})

test('pop-owed: raw fruit rides while the popped coin runs short', () => {
  const r = decideChorusTrip({ plantsCount: 10, fruitsCount: 2, poppedCount: 1 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'pop-owed')
})

test('pop-owed beats break: the furnace turns the raw before the world pays more', () => {
  const r = decideChorusTrip({ plantsCount: 200, fruitsCount: 1, poppedCount: 0 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'pop-owed')
})

test('break arithmetic: garden affords, pocket holds no raw', () => {
  const r = decideChorusTrip({ plantsCount: 5, fruitsCount: 0, poppedCount: 3 })
  assert.equal(r.action, 'break')
  assert.equal(r.reason, 'plants-afford')
  assert.equal(r.plantsToBreak, 5)
  assert.equal(r.plantsLeft, 0)
})

test('coin law: fruitMin reads the tails zero, fruitMax the upper face (one per block)', () => {
  const r = decideChorusTrip({ plantsCount: 5, fruitsCount: 0, poppedCount: 0 })
  assert.equal(r.fruitMin, 0)
  assert.equal(r.fruitMax, 5 * CHORUS_FRUIT_MAX_PER_PLANT)
  assert.equal(CHORUS_FRUIT_MAX_PER_PLANT, 1)
  assert.equal(CHORUS_FRUIT_DROP_CHANCE, 0.5)
})

test('no cap: a garden-rich census prices every chop it affords', () => {
  const r = decideChorusTrip({ plantsCount: 200, fruitsCount: 0, poppedCount: 0 })
  assert.equal(r.action, 'break')
  assert.equal(r.plantsToBreak, 200)
  assert.equal(r.fruitMax, 200)
})

test('fractional census floors honestly (2.5 plants chop 2)', () => {
  const r = decideChorusTrip({ plantsCount: 2.5, fruitsCount: 0, poppedCount: 0 })
  assert.equal(r.action, 'break')
  assert.equal(r.plantsToBreak, 2)
  assert.equal(r.fruitMax, 2)
})

test('the pure read mutates nothing', () => {
  const opts = { plantsCount: 5, fruitsCount: 1, poppedCount: 1 }
  const before = JSON.stringify(opts)
  decideChorusTrip(opts)
  assert.equal(JSON.stringify(opts), before)
})
