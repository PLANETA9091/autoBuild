// Tests for the hazardverdict word (src/lib/hazardverdict.mjs).
// The hazard ledger's own age verdict: the fresh half the water-now
// owns, the ageing half the cured hazard's shadow prices, the expiry
// the bound names. Pure arithmetic.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideHazardVerdict, HAZARDVERDICT_FRESH_DIVISOR } from '../../src/lib/hazardverdict.mjs'
import { WATER_HAZARD_TTL_MS } from '../../src/lib/drowning.mjs'

test('junk: a non-finite age refuses with junk-input', () => {
  const v = decideHazardVerdict({ ageMs: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean number is a flag, never a number (numeric lane law)', () => {
  const v = decideHazardVerdict({ ageMs: 1000, ttlMs: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: a negative age clamps to zero - the fresh law keeps (clock skew never poisons)', () => {
  const v = decideHazardVerdict({ ageMs: -500, ttlMs: 120000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'hazard-fresh')
  assert.equal(v.ageMs, 0)
})

test('floor law: a zero ttl bites at once - the caller\'s own bound names the immediate expiry', () => {
  const v = decideHazardVerdict({ ageMs: 0, ttlMs: 0 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'hazard-expired')
})

test('floor law: a fractional age floors whole (whole milliseconds the clock trades)', () => {
  const v = decideHazardVerdict({ ageMs: 1000.75, ttlMs: 120000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.ageMs, 1000)
})

test('keep: the fresh half - the water is there NOW, the veto\'s trust full', () => {
  const v = decideHazardVerdict({ ageMs: 1000, ttlMs: 120000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'hazard-fresh')
  assert.equal(v.freshMs, 119000)
})

test('keep: the fresh boundary just under the midpoint holds', () => {
  const v = decideHazardVerdict({ ageMs: 59999, ttlMs: 120000 })
  assert.equal(v.action, 'keep')
})

test('defer: the shadow window - the ageing half the cured hazard prices', () => {
  const v = decideHazardVerdict({ ageMs: 90000, ttlMs: 120000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'hazard-ageing')
  assert.equal(v.freshMs, 30000)
})

test('defer: the ageing boundary at the exact midpoint defers', () => {
  const v = decideHazardVerdict({ ageMs: 60000, ttlMs: 120000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'hazard-ageing')
})

test('expire: the bound bites at the ttl - the record never immortalizes', () => {
  const v = decideHazardVerdict({ ageMs: 120000, ttlMs: 120000 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'hazard-expired')
  assert.equal(v.freshMs, 0)
})

test('expire: well past the bound still expires (the release holds)', () => {
  const v = decideHazardVerdict({ ageMs: 300000, ttlMs: 120000 })
  assert.equal(v.action, 'expire')
})

test('ttl law: the default ttl is the ledger\'s own bound (never a second number to drift)', () => {
  const fresh = decideHazardVerdict({ ageMs: 0 })
  assert.equal(fresh.ttlMs, WATER_HAZARD_TTL_MS)
  assert.equal(WATER_HAZARD_TTL_MS, 120000)
  const bitten = decideHazardVerdict({ ageMs: WATER_HAZARD_TTL_MS })
  assert.equal(bitten.action, 'expire')
})

test('tenure law: the death spot\'s own longer tenure the entry\'s bound reads - a longer fresh half rides the same arithmetic', () => {
  // the v0.209.0 death-spot tenure (300s) the record carries: the caller
  // passes the ENTRY'S OWN effective bound, the fresh half stretches to
  // the tenure's own midpoint (150s)
  const fresh = decideHazardVerdict({ ageMs: 140000, ttlMs: 300000 })
  assert.equal(fresh.action, 'keep')
  assert.equal(fresh.freshMs, 160000)
  const shadow = decideHazardVerdict({ ageMs: 150000, ttlMs: 300000 })
  assert.equal(shadow.action, 'defer')
})

test('held law: the read mutates nothing (the frozen input survives)', () => {
  const opts = Object.freeze({ ageMs: 1000, ttlMs: 120000 })
  const v = decideHazardVerdict(opts)
  assert.equal(v.action, 'keep')
  assert.equal(opts.ageMs, 1000)
  assert.equal(opts.ttlMs, 120000)
})

test('constants: the fresh half\'s own divisor exports two', () => {
  assert.equal(HAZARDVERDICT_FRESH_DIVISOR, 2)
})
