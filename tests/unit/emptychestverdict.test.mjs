// Tests for the emptychestverdict word (src/lib/emptychestverdict.mjs).
// The empty-chest commons ledger's own age verdict: the fresh half
// the just-empty owns, the ageing half the tithe's own cure prices,
// the expiry the bound names. Pure arithmetic.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideEmptychestVerdict, EMPTYCHESTVERDICT_FRESH_DIVISOR } from '../../src/lib/emptychestverdict.mjs'
import { COMMONS_EMPTY_TTL_MS } from '../../src/lib/fuelbank.mjs'
import { FULL_CHEST_TTL_MS } from '../../src/lib/deposit.mjs'

test('junk: a non-finite age refuses with junk-input', () => {
  const v = decideEmptychestVerdict({ ageMs: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean number is a flag, never a number (numeric lane law)', () => {
  const v = decideEmptychestVerdict({ ageMs: 1000, ttlMs: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: a negative age clamps to zero - the fresh law keeps (clock skew never poisons)', () => {
  const v = decideEmptychestVerdict({ ageMs: -500, ttlMs: 90000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'emptychest-fresh')
  assert.equal(v.ageMs, 0)
})

test('floor law: a zero ttl bites at once - the caller\'s own bound names the immediate expiry', () => {
  const v = decideEmptychestVerdict({ ageMs: 0, ttlMs: 0 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'emptychest-expired')
})

test('floor law: a fractional age floors whole (whole milliseconds the clock trades)', () => {
  const v = decideEmptychestVerdict({ ageMs: 1000.75, ttlMs: 90000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.ageMs, 1000)
})

test('keep: the fresh half - the chest JUST proved empty, the skip\'s trust full', () => {
  const v = decideEmptychestVerdict({ ageMs: 1000, ttlMs: 90000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'emptychest-fresh')
  assert.equal(v.freshMs, 89000)
})

test('keep: the fresh boundary just under the midpoint holds', () => {
  const v = decideEmptychestVerdict({ ageMs: 44999, ttlMs: 90000 })
  assert.equal(v.action, 'keep')
})

test('defer: the shadow window - the ageing half the empty\'s own cure prices (the tithe may have landed beyond the radius)', () => {
  const v = decideEmptychestVerdict({ ageMs: 60000, ttlMs: 90000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'emptychest-ageing')
  assert.equal(v.freshMs, 30000)
})

test('defer: the ageing boundary at the exact midpoint defers', () => {
  const v = decideEmptychestVerdict({ ageMs: 45000, ttlMs: 90000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'emptychest-ageing')
})

test('expire: the bound bites at the ttl - the record never immortalizes', () => {
  const v = decideEmptychestVerdict({ ageMs: 90000, ttlMs: 90000 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'emptychest-expired')
  assert.equal(v.freshMs, 0)
})

test('expire: well past the bound still expires (the release holds)', () => {
  const v = decideEmptychestVerdict({ ageMs: 400000, ttlMs: 90000 })
  assert.equal(v.action, 'expire')
})

test('ttl law: the default ttl is the ledger\'s own founding bound (never a second number to drift)', () => {
  const fresh = decideEmptychestVerdict({ ageMs: 0 })
  assert.equal(fresh.ttlMs, COMMONS_EMPTY_TTL_MS)
  assert.equal(COMMONS_EMPTY_TTL_MS, 90000)
  const bitten = decideEmptychestVerdict({ ageMs: COMMONS_EMPTY_TTL_MS })
  assert.equal(bitten.action, 'expire')
})

test('tenure law: the family\'s writes mint the ledger default ONLY - no repeat half-life, no timeout split (the twin\'s own purity the full chest holds)', () => {
  // the full chest's own window (FULL_CHEST_TTL_MS = 180000) is the
  // TWIN's bound, never this ledger's: the empty's one window the
  // ask path mints. A caller may pass the entry's own bound (the
  // dial the TENURE LAW names) - the law reads it, the default
  // never drifts.
  assert.equal(FULL_CHEST_TTL_MS, 180000)
  const fresh = decideEmptychestVerdict({ ageMs: 29999, ttlMs: 60000 })
  assert.equal(fresh.action, 'keep')
  assert.equal(fresh.freshMs, 30001)
  const shadow = decideEmptychestVerdict({ ageMs: 30000, ttlMs: 60000 })
  assert.equal(shadow.action, 'defer')
})

test('held law: the read mutates nothing (the frozen input survives)', () => {
  const opts = Object.freeze({ ageMs: 1000, ttlMs: 90000 })
  const v = decideEmptychestVerdict(opts)
  assert.equal(v.action, 'keep')
  assert.equal(opts.ageMs, 1000)
  assert.equal(opts.ttlMs, 90000)
})

test('constants: the fresh half\'s own divisor exports two', () => {
  assert.equal(EMPTYCHESTVERDICT_FRESH_DIVISOR, 2)
})
