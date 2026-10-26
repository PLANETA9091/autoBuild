// Tests for the maprotate word (src/lib/maprotate.mjs).
// The WorldMap assignment's own rotation: the slot the ask takes
// across time - the across-time spread the maptarget word's own
// instant count never priced. Pure arithmetic.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideMapRotate, MAPROTATE_HEAD_SLOT } from '../../src/lib/maprotate.mjs'

test('junk: a non-finite cursor refuses with junk-input', () => {
  const v = decideMapRotate({ asksCount: Number.NaN, freeCount: 5 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.slot, 0)
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideMapRotate({ asksCount: 3, freeCount: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - the clamp never poisons (the dry stock defers)', () => {
  const v = decideMapRotate({ asksCount: -3, freeCount: -8 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'free-dry')
  assert.equal(v.asks, 0)
  assert.equal(v.free, 0)
})

test('floor law: a fractional cursor floors whole (whole asks the lane trades)', () => {
  const v = decideMapRotate({ asksCount: 7.5, freeCount: 3 })
  assert.equal(v.action, 'rotate')
  assert.equal(v.asks, 7)
  assert.equal(v.slot, 1)
})

test('defer: the free stock dry names the maptarget word\'s own all-claimed story', () => {
  const v = decideMapRotate({ asksCount: 4, freeCount: 0 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'free-dry')
  assert.equal(v.slot, 0)
  assert.equal(v.ringPeriod, 0)
})

test('keep: the head law - cursor zero on a live ring stands silent', () => {
  const v = decideMapRotate({ asksCount: 0, freeCount: 5 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'head-stands')
  assert.equal(v.slot, MAPROTATE_HEAD_SLOT)
  assert.equal(v.ringPeriod, 5)
})

test('keep: the ring closes - cursor free lands the head again (the period pin)', () => {
  const v = decideMapRotate({ asksCount: 5, freeCount: 5 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'head-stands')
  assert.equal(v.slot, 0)
})

test('rotate: the past-head ask takes the slot the map\'s own hand never names', () => {
  const v = decideMapRotate({ asksCount: 1, freeCount: 3 })
  assert.equal(v.action, 'rotate')
  assert.equal(v.reason, 'ring-rotates')
  assert.equal(v.slot, 1)
  assert.equal(v.ringPeriod, 3)
})

test('rotate: the second past-head ask rides the ring further (slot two of three)', () => {
  const v = decideMapRotate({ asksCount: 2, freeCount: 3 })
  assert.equal(v.action, 'rotate')
  assert.equal(v.slot, 2)
})

test('fairness pin: free consecutive asks touch every free slot exactly once', () => {
  const free = 4
  const seen = new Set()
  for (let asks = 0; asks < free; asks++) {
    const v = decideMapRotate({ asksCount: asks, freeCount: free })
    seen.add(v.slot)
    assert.equal(v.ringPeriod, free)
  }
  assert.equal(seen.size, free)
  assert.deepEqual([...seen].sort((a, b) => a - b), [0, 1, 2, 3])
})

test('fairness pin: ask free wraps the ring back to the head (the cycle closes)', () => {
  const v = decideMapRotate({ asksCount: 4, freeCount: 4 })
  assert.equal(v.action, 'keep')
  assert.equal(v.slot, 0)
})

test('held law: the read mutates nothing (the frozen input survives)', () => {
  const opts = Object.freeze({ asksCount: 6, freeCount: 4 })
  const v = decideMapRotate(opts)
  assert.equal(v.action, 'rotate')
  assert.equal(opts.asksCount, 6)
  assert.equal(opts.freeCount, 4)
})

test('constants: the ring\'s own head slot exports zero', () => {
  assert.equal(MAPROTATE_HEAD_SLOT, 0)
})
