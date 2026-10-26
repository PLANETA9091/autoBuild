// Tests for the nopathverdict word (src/lib/nopathverdict.mjs).
// The no-path ledger's own age verdict: the fresh half the
// just-refused owns, the ageing half the re-terrain's cure prices,
// the expiry the bound names. Pure arithmetic.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideNopathVerdict, NOPATHVERDICT_FRESH_DIVISOR } from '../../src/lib/nopathverdict.mjs'
import { NOPATH_TTL_MS, NOPATH_TIMEOUT_TTL_MS } from '../../src/lib/nopath.mjs'

test('junk: a non-finite age refuses with junk-input', () => {
  const v = decideNopathVerdict({ ageMs: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean number is a flag, never a number (numeric lane law)', () => {
  const v = decideNopathVerdict({ ageMs: 1000, ttlMs: false })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: a negative age clamps to zero - the fresh law keeps (clock skew never poisons)', () => {
  const v = decideNopathVerdict({ ageMs: -500, ttlMs: 90000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'nopath-fresh')
  assert.equal(v.ageMs, 0)
})

test('floor law: a zero ttl bites at once - the caller\'s own bound names the immediate expiry', () => {
  const v = decideNopathVerdict({ ageMs: 0, ttlMs: 0 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'nopath-expired')
})

test('floor law: a fractional age floors whole (whole milliseconds the clock trades)', () => {
  const v = decideNopathVerdict({ ageMs: 1000.75, ttlMs: 90000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.ageMs, 1000)
})

test('keep: the fresh half - the terrain JUST refused, the skip\'s trust full', () => {
  const v = decideNopathVerdict({ ageMs: 1000, ttlMs: 90000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'nopath-fresh')
  assert.equal(v.freshMs, 89000)
})

test('keep: the fresh boundary just under the midpoint holds', () => {
  const v = decideNopathVerdict({ ageMs: 44999, ttlMs: 90000 })
  assert.equal(v.action, 'keep')
})

test('defer: the shadow window - the ageing half the re-terrain\'s cure prices', () => {
  const v = decideNopathVerdict({ ageMs: 60000, ttlMs: 90000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'nopath-ageing')
  assert.equal(v.freshMs, 30000)
})

test('defer: the ageing boundary at the exact midpoint defers', () => {
  const v = decideNopathVerdict({ ageMs: 45000, ttlMs: 90000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'nopath-ageing')
})

test('expire: the bound bites at the ttl - the record never immortalizes', () => {
  const v = decideNopathVerdict({ ageMs: 90000, ttlMs: 90000 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'nopath-expired')
  assert.equal(v.freshMs, 0)
})

test('expire: well past the bound still expires (the release holds)', () => {
  const v = decideNopathVerdict({ ageMs: 300000, ttlMs: 90000 })
  assert.equal(v.action, 'expire')
})

test('ttl law: the default ttl is the ledger\'s own bound (never a second number to drift)', () => {
  const fresh = decideNopathVerdict({ ageMs: 0 })
  assert.equal(fresh.ttlMs, NOPATH_TTL_MS)
  assert.equal(NOPATH_TTL_MS, 90000)
  const bitten = decideNopathVerdict({ ageMs: NOPATH_TTL_MS })
  assert.equal(bitten.action, 'expire')
})

test('tenure law: the timeout verdict\'s own 45s half window the entry\'s bound reads - a shorter fresh half rides the same arithmetic', () => {
  // the v0.70.0 per-entry lifetime: the timeout verdict lives HALF as long
  // (a stalled main thread can time out a reachable chest - weaker
  // evidence). The caller passes the ENTRY'S OWN effective bound, the
  // fresh half stretches to that tenure's own midpoint (22.5s).
  assert.equal(NOPATH_TIMEOUT_TTL_MS, 45000)
  const fresh = decideNopathVerdict({ ageMs: 22000, ttlMs: NOPATH_TIMEOUT_TTL_MS })
  assert.equal(fresh.action, 'keep')
  assert.equal(fresh.freshMs, 23000)
  const shadow = decideNopathVerdict({ ageMs: 22500, ttlMs: NOPATH_TIMEOUT_TTL_MS })
  assert.equal(shadow.action, 'defer')
})

test('held law: the read mutates nothing (the frozen input survives)', () => {
  const opts = Object.freeze({ ageMs: 1000, ttlMs: 90000 })
  const v = decideNopathVerdict(opts)
  assert.equal(v.action, 'keep')
  assert.equal(opts.ageMs, 1000)
  assert.equal(opts.ttlMs, 90000)
})

test('constants: the fresh half\'s own divisor exports two', () => {
  assert.equal(NOPATHVERDICT_FRESH_DIVISOR, 2)
})
