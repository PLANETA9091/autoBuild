// Tests for the claimrelease word (src/lib/claimrelease.mjs).
// The release leg the claims word's own prose reserved ('the
// release the walk's own end'): the walk's end returns the claim,
// the free stock the maptarget's arithmetic reads grows back.
// Pure arithmetic.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideClaimRelease, CLAIMS_PER_WALK } from '../../src/lib/claimrelease.mjs'
import { MAPTARGET_BOTS_PER_TARGET } from '../../src/lib/maptarget.mjs'

test('junk: a non-finite claim count refuses with junk-input', () => {
  const v = decideClaimRelease({ claimsCount: Number.NaN, hasWalkEnded: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.released, 0)
})

test('junk: a boolean claim count is a flag, never a number (numeric lane law)', () => {
  const v = decideClaimRelease({ claimsCount: true, hasWalkEnded: true })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a non-boolean walk-end flag is a caller bug (the flag\'s own lane)', () => {
  const v = decideClaimRelease({ claimsCount: 2, hasWalkEnded: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: a negative hold floors to zero - the empty ledger\'s own keep', () => {
  const v = decideClaimRelease({ claimsCount: -4, hasWalkEnded: true })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'ledger-empty')
  assert.equal(v.claims, 0)
})

test('floor law: a fractional hold floors whole (whole claims the ledger trades)', () => {
  const v = decideClaimRelease({ claimsCount: 2.75, hasWalkEnded: true })
  assert.equal(v.action, 'release')
  assert.equal(v.claims, 2)
  assert.equal(v.claimsLeft, 1)
})

test('keep: the empty ledger stays silent - nothing held, nothing released', () => {
  const v = decideClaimRelease({ claimsCount: 0, hasWalkEnded: true })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'ledger-empty')
  assert.equal(v.released, 0)
})

test('defer: the mid-flight brake - the claim rides the walk it owns', () => {
  const v = decideClaimRelease({ claimsCount: 3, hasWalkEnded: false })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'walk-in-flight')
  assert.equal(v.released, 0)
  assert.equal(v.claimsLeft, 3)
})

test('release: the walk\'s own end returns the claim (the free-return law)', () => {
  const v = decideClaimRelease({ claimsCount: 1, hasWalkEnded: true })
  assert.equal(v.action, 'release')
  assert.equal(v.reason, 'claim-released')
  assert.equal(v.released, 1)
  assert.equal(v.claimsLeft, 0)
})

test('release: the surplus hold rides named - the release mints its one, the rest stay held', () => {
  const v = decideClaimRelease({ claimsCount: 5, hasWalkEnded: true })
  assert.equal(v.action, 'release')
  assert.equal(v.released, 1)
  assert.equal(v.claimsLeft, 4)
})

test('mirror law: one walk one claim - the assignment\'s own two legs (the pin)', () => {
  assert.equal(CLAIMS_PER_WALK, 1)
  assert.equal(MAPTARGET_BOTS_PER_TARGET, 1)
  assert.equal(CLAIMS_PER_WALK, MAPTARGET_BOTS_PER_TARGET)
})

test('held law: the read mutates nothing (the frozen input survives)', () => {
  const opts = Object.freeze({ claimsCount: 2, hasWalkEnded: true })
  const v = decideClaimRelease(opts)
  assert.equal(v.action, 'release')
  assert.equal(opts.claimsCount, 2)
  assert.equal(opts.hasWalkEnded, true)
})

test('constants: the walk\'s own release price exports one', () => {
  assert.equal(CLAIMS_PER_WALK, 1)
})
