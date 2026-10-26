// Tests for the intentverdict word (src/lib/intentverdict.mjs).
// The intent board's own age verdict: the fresh half the walk
// mid-flight owns, the ageing half the lost clear's shadow prices,
// the expiry the crash-safety bound names. Pure arithmetic.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideIntentVerdict, INTENTVERDICT_FRESH_DIVISOR } from '../../src/lib/intentverdict.mjs'
import { WALK_INTENT_TTL_MS } from '../../src/lib/walkintent.mjs'

test('junk: a non-finite age refuses with junk-input', () => {
  const v = decideIntentVerdict({ ageMs: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean number is a flag, never a number (numeric lane law)', () => {
  const v = decideIntentVerdict({ ageMs: 1000, ttlMs: false })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: a negative age clamps to zero - the fresh law keeps (clock skew never poisons)', () => {
  const v = decideIntentVerdict({ ageMs: -500, ttlMs: 90000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'intent-fresh')
  assert.equal(v.ageMs, 0)
})

test('floor law: a zero ttl bites at once - the caller\'s own bound names the immediate expiry', () => {
  const v = decideIntentVerdict({ ageMs: 0, ttlMs: 0 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'intent-expired')
})

test('floor law: a fractional age floors whole (whole milliseconds the clock trades)', () => {
  const v = decideIntentVerdict({ ageMs: 1000.75, ttlMs: 90000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.ageMs, 1000)
})

test('keep: the fresh half - the walk mid-flight, the trust full', () => {
  const v = decideIntentVerdict({ ageMs: 1000, ttlMs: 90000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'intent-fresh')
  assert.equal(v.freshMs, 89000)
})

test('keep: the fresh boundary just under the midpoint holds', () => {
  const v = decideIntentVerdict({ ageMs: 44999, ttlMs: 90000 })
  assert.equal(v.action, 'keep')
})

test('defer: the shadow window - the ageing half the lost clear prices', () => {
  const v = decideIntentVerdict({ ageMs: 60000, ttlMs: 90000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'intent-ageing')
  assert.equal(v.freshMs, 30000)
})

test('defer: the ageing boundary at the exact midpoint defers', () => {
  const v = decideIntentVerdict({ ageMs: 45000, ttlMs: 90000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'intent-ageing')
})

test('expire: the bound bites at the ttl - the lost clear never immortalizes', () => {
  const v = decideIntentVerdict({ ageMs: 90000, ttlMs: 90000 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'intent-expired')
  assert.equal(v.freshMs, 0)
})

test('expire: well past the bound still expires (the release holds)', () => {
  const v = decideIntentVerdict({ ageMs: 300000, ttlMs: 90000 })
  assert.equal(v.action, 'expire')
})

test('ttl law: the default ttl is the board\'s own bound (never a second number to drift)', () => {
  const fresh = decideIntentVerdict({ ageMs: 0 })
  assert.equal(fresh.ttlMs, WALK_INTENT_TTL_MS)
  assert.equal(WALK_INTENT_TTL_MS, 90000)
  const bitten = decideIntentVerdict({ ageMs: WALK_INTENT_TTL_MS })
  assert.equal(bitten.action, 'expire')
})

test('held law: the read mutates nothing (the frozen input survives)', () => {
  const opts = Object.freeze({ ageMs: 1000, ttlMs: 90000 })
  const v = decideIntentVerdict(opts)
  assert.equal(v.action, 'keep')
  assert.equal(opts.ageMs, 1000)
  assert.equal(opts.ttlMs, 90000)
})

test('constants: the fresh half\'s own divisor exports two', () => {
  assert.equal(INTENTVERDICT_FRESH_DIVISOR, 2)
})
