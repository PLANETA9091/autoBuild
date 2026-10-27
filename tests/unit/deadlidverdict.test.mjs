// Tests for the deadlidverdict word (src/lib/deadlidverdict.mjs).
// The dead-lid ledger's own age verdict: the fresh half the
// just-dead owns, the ageing half the lid's own cure prices,
// the expiry the bound names. Pure arithmetic.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideDeadlidVerdict, DEADLIDVERDICT_FRESH_DIVISOR } from '../../src/lib/deadlidverdict.mjs'
import { CHEST_DOOM_TTL_MS } from '../../src/lib/deposit.mjs'
import { NOPATH_REPEAT_TTL_MS } from '../../src/lib/nopath.mjs'

test('junk: a non-finite age refuses with junk-input', () => {
  const v = decideDeadlidVerdict({ ageMs: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean number is a flag, never a number (numeric lane law)', () => {
  const v = decideDeadlidVerdict({ ageMs: 1000, ttlMs: false })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: a negative age clamps to zero - the fresh law keeps (clock skew never poisons)', () => {
  const v = decideDeadlidVerdict({ ageMs: -500, ttlMs: 15000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'deadlid-fresh')
  assert.equal(v.ageMs, 0)
})

test('floor law: a zero ttl bites at once - the caller\'s own bound names the immediate expiry', () => {
  const v = decideDeadlidVerdict({ ageMs: 0, ttlMs: 0 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'deadlid-expired')
})

test('floor law: a fractional age floors whole (whole milliseconds the clock trades)', () => {
  const v = decideDeadlidVerdict({ ageMs: 1000.75, ttlMs: 15000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.ageMs, 1000)
})

test('keep: the fresh half - the lid JUST died, the skip\'s trust full', () => {
  const v = decideDeadlidVerdict({ ageMs: 1000, ttlMs: 15000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'deadlid-fresh')
  assert.equal(v.freshMs, 14000)
})

test('keep: the fresh boundary just under the midpoint holds', () => {
  const v = decideDeadlidVerdict({ ageMs: 7499, ttlMs: 15000 })
  assert.equal(v.action, 'keep')
})

test('defer: the shadow window - the ageing half the lid\'s own cure prices (a fresh attempt may open what the stale attempt lost)', () => {
  const v = decideDeadlidVerdict({ ageMs: 10000, ttlMs: 15000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'deadlid-ageing')
  assert.equal(v.freshMs, 5000)
})

test('defer: the ageing boundary at the exact midpoint defers', () => {
  const v = decideDeadlidVerdict({ ageMs: 7500, ttlMs: 15000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'deadlid-ageing')
})

test('expire: the bound bites at the ttl - the record never immortalizes', () => {
  const v = decideDeadlidVerdict({ ageMs: 15000, ttlMs: 15000 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'deadlid-expired')
  assert.equal(v.freshMs, 0)
})

test('expire: well past the bound still expires (the release holds)', () => {
  const v = decideDeadlidVerdict({ ageMs: 60000, ttlMs: 15000 })
  assert.equal(v.action, 'expire')
})

test('ttl law: the default ttl is the ledger\'s own founding bound (never a second number to drift)', () => {
  const fresh = decideDeadlidVerdict({ ageMs: 0 })
  assert.equal(fresh.ttlMs, CHEST_DOOM_TTL_MS)
  assert.equal(CHEST_DOOM_TTL_MS, 15000)
  const bitten = decideDeadlidVerdict({ ageMs: CHEST_DOOM_TTL_MS })
  assert.equal(bitten.action, 'expire')
})

test('tenure law: the repeat\'s own 90s half-life the entry\'s bound reads - the weaker evidence the longer the trust', () => {
  // the v0.70.0 per-entry lifetime + the v0.863.0 half-life law: a
  // REPEAT death (a cell whose prior verdict expired and died AGAIN)
  // rides the 90s half-life - the fresh half stretches to that
  // tenure's own midpoint (45s).
  assert.equal(NOPATH_REPEAT_TTL_MS, 90000)
  const fresh = decideDeadlidVerdict({ ageMs: 44000, ttlMs: NOPATH_REPEAT_TTL_MS })
  assert.equal(fresh.action, 'keep')
  assert.equal(fresh.freshMs, 46000)
  const shadow = decideDeadlidVerdict({ ageMs: 45000, ttlMs: NOPATH_REPEAT_TTL_MS })
  assert.equal(shadow.action, 'defer')
})

test('held law: the read mutates nothing (the frozen input survives)', () => {
  const opts = Object.freeze({ ageMs: 1000, ttlMs: 15000 })
  const v = decideDeadlidVerdict(opts)
  assert.equal(v.action, 'keep')
  assert.equal(opts.ageMs, 1000)
  assert.equal(opts.ttlMs, 15000)
})

test('constants: the fresh half\'s own divisor exports two', () => {
  assert.equal(DEADLIDVERDICT_FRESH_DIVISOR, 2)
})
