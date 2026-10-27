// Tests for the lowchestverdict word (src/lib/lowchestverdict.mjs).
// The low-chest registry's own age verdict: the fresh half the
// just-seen owns, the ageing half the band's own cure prices, the
// expiry the bound names. Pure arithmetic.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideLowchestVerdict, LOWCHESTVERDICT_FRESH_DIVISOR } from '../../src/lib/lowchestverdict.mjs'
import { LOW_CHEST_TTL_MS } from '../../src/lib/fuelbank.mjs'
import { COMMONS_EMPTY_TTL_MS } from '../../src/lib/fuelbank.mjs'

test('junk: a non-finite age refuses with junk-input', () => {
  const v = decideLowchestVerdict({ ageMs: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean number is a flag, never a number (numeric lane law)', () => {
  const v = decideLowchestVerdict({ ageMs: 1000, ttlMs: false })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: a negative age clamps to zero - the fresh law keeps (clock skew never poisons)', () => {
  const v = decideLowchestVerdict({ ageMs: -500, ttlMs: 600000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'lowchest-fresh')
  assert.equal(v.ageMs, 0)
})

test('floor law: a zero ttl bites at once - the caller\'s own bound names the immediate expiry', () => {
  const v = decideLowchestVerdict({ ageMs: 0, ttlMs: 0 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'lowchest-expired')
})

test('floor law: a fractional age floors whole (whole milliseconds the clock trades)', () => {
  const v = decideLowchestVerdict({ ageMs: 1000.75, ttlMs: 600000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.ageMs, 1000)
})

test('keep: the fresh half - the chest JUST confirmed at depth, the preference\'s trust full', () => {
  const v = decideLowchestVerdict({ ageMs: 1000, ttlMs: 600000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'lowchest-fresh')
  assert.equal(v.freshMs, 599000)
})

test('keep: the fresh boundary just under the midpoint holds', () => {
  const v = decideLowchestVerdict({ ageMs: 299999, ttlMs: 600000 })
  assert.equal(v.action, 'keep')
})

test('defer: the shadow window - the ageing half the band\'s own cure prices (the fuel may have already moved there)', () => {
  const v = decideLowchestVerdict({ ageMs: 450000, ttlMs: 600000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'lowchest-ageing')
  assert.equal(v.freshMs, 150000)
})

test('defer: the ageing boundary at the exact midpoint defers', () => {
  const v = decideLowchestVerdict({ ageMs: 300000, ttlMs: 600000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'lowchest-ageing')
})

test('expire: the bound bites at the ttl - the record never immortalizes', () => {
  const v = decideLowchestVerdict({ ageMs: 600000, ttlMs: 600000 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'lowchest-expired')
  assert.equal(v.freshMs, 0)
})

test('expire: well past the bound still expires (the release holds)', () => {
  const v = decideLowchestVerdict({ ageMs: 700000, ttlMs: 600000 })
  assert.equal(v.action, 'expire')
})

test('ttl law: the default ttl is the ledger\'s own founding bound (never a second number to drift)', () => {
  const fresh = decideLowchestVerdict({ ageMs: 0 })
  assert.equal(fresh.ttlMs, LOW_CHEST_TTL_MS)
  assert.equal(LOW_CHEST_TTL_MS, 600000)
  const bitten = decideLowchestVerdict({ ageMs: LOW_CHEST_TTL_MS })
  assert.equal(bitten.action, 'expire')
})

test('tenure law: the family\'s writes mint the ledger default ONLY - no repeat half-life, no timeout split (the twin\'s own window never this ledger\'s bound)', () => {
  // the empty chest's own window (COMMONS_EMPTY_TTL_MS = 90000) is
  // the SIBLING lane's bound, never this registry's: the depth
  // confirmations' one window the two call sites mint. A caller may
  // pass the entry's own bound (the dial the TENURE LAW names) -
  // the law reads it, the default never drifts.
  assert.equal(COMMONS_EMPTY_TTL_MS, 90000)
  const fresh = decideLowchestVerdict({ ageMs: 59999, ttlMs: 120000 })
  assert.equal(fresh.action, 'keep')
  assert.equal(fresh.freshMs, 60001)
  const shadow = decideLowchestVerdict({ ageMs: 60000, ttlMs: 120000 })
  assert.equal(shadow.action, 'defer')
})

test('held law: the read mutates nothing (the frozen input survives)', () => {
  const opts = Object.freeze({ ageMs: 1000, ttlMs: 600000 })
  const v = decideLowchestVerdict(opts)
  assert.equal(v.action, 'keep')
  assert.equal(opts.ageMs, 1000)
  assert.equal(opts.ttlMs, 600000)
})

test('constants: the fresh half\'s own divisor exports two', () => {
  assert.equal(LOWCHESTVERDICT_FRESH_DIVISOR, 2)
})
