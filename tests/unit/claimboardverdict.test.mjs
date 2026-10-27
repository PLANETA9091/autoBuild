// Tests for the claimboardverdict word (src/lib/claimboardverdict.mjs).
// The claim board's own age verdict: the fresh half the just-took
// owns, the ageing half the rent's own cure prices, the expiry the
// bound names. Pure arithmetic.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideClaimboardVerdict, CLAIMBOARDVERDICT_FRESH_DIVISOR } from '../../src/lib/claimboardverdict.mjs'
import { CLAIM_TTL_MS } from '../../src/fleet/claims.mjs'
import { LOW_CHEST_TTL_MS } from '../../src/lib/fuelbank.mjs'

test('junk: a non-finite age refuses with junk-input', () => {
  const v = decideClaimboardVerdict({ ageMs: Number.NaN })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean number is a flag, never a number (numeric lane law)', () => {
  const v = decideClaimboardVerdict({ ageMs: 1000, ttlMs: false })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: a negative age clamps to zero - the fresh law keeps (clock skew never poisons)', () => {
  const v = decideClaimboardVerdict({ ageMs: -500, ttlMs: 120000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'claimboard-fresh')
  assert.equal(v.ageMs, 0)
})

test('floor law: a zero ttl bites at once - the caller\'s own bound names the immediate expiry', () => {
  const v = decideClaimboardVerdict({ ageMs: 0, ttlMs: 0 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'claimboard-expired')
})

test('floor law: a fractional age floors whole (whole milliseconds the clock trades)', () => {
  const v = decideClaimboardVerdict({ ageMs: 1000.75, ttlMs: 120000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.ageMs, 1000)
})

test('keep fresh: an age under the midpoint keeps (the occupancy\'s trust full)', () => {
  const v = decideClaimboardVerdict({ ageMs: 59999, ttlMs: 120000 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'claimboard-fresh')
  assert.equal(v.freshMs, 60001)
})

test('fresh boundary: age 59999 keeps, the midpoint itself defers (the half law\'s own edge)', () => {
  const fresh = decideClaimboardVerdict({ ageMs: 59999, ttlMs: 120000 })
  assert.equal(fresh.action, 'keep')
  const edge = decideClaimboardVerdict({ ageMs: 60000, ttlMs: 120000 })
  assert.equal(edge.action, 'defer')
  assert.equal(edge.reason, 'claimboard-ageing')
})

test('defer shadow: the ageing half defers (the holder may be dead, the release in flight)', () => {
  const v = decideClaimboardVerdict({ ageMs: 90000, ttlMs: 120000 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'claimboard-ageing')
  assert.equal(v.freshMs, 30000)
})

test('ageing boundary: age 119999 defers, the bound itself expires (the ttl law\'s own edge)', () => {
  const edge = decideClaimboardVerdict({ ageMs: 119999, ttlMs: 120000 })
  assert.equal(edge.action, 'defer')
  const bite = decideClaimboardVerdict({ ageMs: 120000, ttlMs: 120000 })
  assert.equal(bite.action, 'expire')
  assert.equal(bite.reason, 'claimboard-expired')
})

test('expire bound: the ttl\'s own bite (the board\'s own lazy prune the read already runs)', () => {
  const v = decideClaimboardVerdict({ ageMs: 120000, ttlMs: 120000 })
  assert.equal(v.action, 'expire')
  assert.equal(v.freshMs, 0)
})

test('expire well-past: an age far beyond the bound still names the expiry (never a crash)', () => {
  const v = decideClaimboardVerdict({ ageMs: 700000, ttlMs: 120000 })
  assert.equal(v.action, 'expire')
  assert.equal(v.reason, 'claimboard-expired')
})

test('TTL pin: the default reads the ledger\'s own founding bound (CLAIM_TTL_MS = 120000, never a second number to drift)', () => {
  assert.equal(CLAIM_TTL_MS, 120000)
  const v = decideClaimboardVerdict({ ageMs: 119999 })
  assert.equal(v.action, 'defer')
  assert.equal(v.ttlMs, 120000)
  const bite = decideClaimboardVerdict({ ageMs: 120000 })
  assert.equal(bite.action, 'expire')
})

test('tenure law: the family\'s writes mint the ledger default ONLY - no repeat half-life, no timeout split (the twin\'s own window never this board\'s bound)', () => {
  // the low chest's own window (LOW_CHEST_TTL_MS = 600000) is the
  // SIBLING lane's bound, never this board's: the trips' one window
  // the board's own constructor dial mints. A caller may pass the
  // entry's own bound (the dial the TENURE LAW names) - the law
  // reads it, the default never drifts.
  assert.equal(LOW_CHEST_TTL_MS, 600000)
  const fresh = decideClaimboardVerdict({ ageMs: 299999, ttlMs: 600000 })
  assert.equal(fresh.action, 'keep')
  assert.equal(fresh.freshMs, 300001)
  const shadow = decideClaimboardVerdict({ ageMs: 300000, ttlMs: 600000 })
  assert.equal(shadow.action, 'defer')
})

test('held law: the read mutates nothing (the frozen input survives)', () => {
  const opts = Object.freeze({ ageMs: 1000, ttlMs: 120000 })
  const v = decideClaimboardVerdict(opts)
  assert.equal(v.action, 'keep')
  assert.equal(opts.ageMs, 1000)
  assert.equal(opts.ttlMs, 120000)
})

test('constants: the fresh half\'s own divisor exports two', () => {
  assert.equal(CLAIMBOARDVERDICT_FRESH_DIVISOR, 2)
})
