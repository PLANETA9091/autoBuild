// Tests for the fullchestverdict word (src/lib/fullchestverdict.mjs).
// The full-chest ledger's own age verdict: the fresh half the
// just-full owns, the ageing half the chest's own cure prices,
// the expiry the bound names. Pure arithmetic.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideFullchestVerdict, FULLCHESTVERDICT_FRESH_DIVISOR } from '../../src/lib/fullchestverdict.mjs'
import { FULL_CHEST_TTL_MS } from '../../src/lib/deposit.mjs'

test('junk: a non-finite age refuses with junk-input', () => {
  const v = decideFullchestVerdict({ ageMs: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean number is a flag, never a number (numeric lane law)', () => {
  const v = decideFullchestVerdict({ ageMs: 1000, ttlMs: false })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: a negative age clamps to zero - the fresh law keeps (clock skew never poisons)', () => {
  const v = decideFullchestVerdict({ ageMs: -500, ttlMs: 180000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'fullchest-fresh')
  assert.equal(v.ageMs, 0)
})

test('floor law: a zero ttl bites at once - the caller\'s own bound names the immediate expiry', () => {
  const v = decideFullchestVerdict({ ageMs: 0, ttlMs: 0 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'fullchest-expired')
})

test('floor law: a fractional age floors whole (whole milliseconds the clock trades)', () => {
  const v = decideFullchestVerdict({ ageMs: 1000.75, ttlMs: 180000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.ageMs, 1000)
})

test('keep: the fresh half - the chest JUST proved full, the skip\'s trust full', () => {
  const v = decideFullchestVerdict({ ageMs: 1000, ttlMs: 180000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'fullchest-fresh')
  assert.equal(v.freshMs, 179000)
})

test('keep: the fresh boundary just under the midpoint holds', () => {
  const v = decideFullchestVerdict({ ageMs: 89999, ttlMs: 180000 })
  assert.equal(v.action, 'keep')
})

test('defer: the shadow window - the ageing half the chest\'s own cure prices (the lanes drain, the room may open)', () => {
  const v = decideFullchestVerdict({ ageMs: 120000, ttlMs: 180000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'fullchest-ageing')
  assert.equal(v.freshMs, 60000)
})

test('defer: the ageing boundary at the exact midpoint defers', () => {
  const v = decideFullchestVerdict({ ageMs: 90000, ttlMs: 180000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'fullchest-ageing')
})

test('expire: the bound bites at the ttl - the record never immortalizes', () => {
  const v = decideFullchestVerdict({ ageMs: 180000, ttlMs: 180000 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'fullchest-expired')
  assert.equal(v.freshMs, 0)
})

test('expire: well past the bound still expires (the release holds)', () => {
  const v = decideFullchestVerdict({ ageMs: 400000, ttlMs: 180000 })
  assert.equal(v.action, 'expire')
})

test('ttl law: the default ttl is the ledger\'s own bound (never a second number to drift)', () => {
  const fresh = decideFullchestVerdict({ ageMs: 0 })
  assert.equal(fresh.ttlMs, FULL_CHEST_TTL_MS)
  assert.equal(FULL_CHEST_TTL_MS, 180000)
  const bitten = decideFullchestVerdict({ ageMs: FULL_CHEST_TTL_MS })
  assert.equal(bitten.action, 'expire')
})

test('tenure law: the entry\'s own bound rides - a shorter entry ttl stretches to that tenure\'s own midpoint (the v0.70.0 cell, the family\'s one default)', () => {
  // the recordNoPath shape gives every entry its own ttl cell; the
  // family's own writes mint the ledger default ONLY (no escalation,
  // no timeout split), but the law stays the entry's own - the
  // caller's dial reads: a 60s entry's fresh half is 30s.
  const fresh = decideFullchestVerdict({ ageMs: 29000, ttlMs: 60000 })
  assert.equal(fresh.action, 'keep')
  assert.equal(fresh.freshMs, 31000)
  const shadow = decideFullchestVerdict({ ageMs: 30000, ttlMs: 60000 })
  assert.equal(shadow.action, 'defer')
})

test('held law: the read mutates nothing (the frozen input survives)', () => {
  const opts = Object.freeze({ ageMs: 1000, ttlMs: 180000 })
  const v = decideFullchestVerdict(opts)
  assert.equal(v.action, 'keep')
  assert.equal(opts.ageMs, 1000)
  assert.equal(opts.ttlMs, 180000)
})

test('constants: the fresh half\'s own divisor exports two', () => {
  assert.equal(FULLCHESTVERDICT_FRESH_DIVISOR, 2)
})
