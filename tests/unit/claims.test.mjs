// (v0.976.489) The claims word's own test battery - the ledger lane's
// honest forms: the junk battery (the counts' and the flag's own), the
// floor law, the NO-TARGET keep, the CAP-HELD defer (the family's
// third hard ceiling), the take's own arithmetic, the fractional
// remainder, the no-mutation purity, the vanilla-family pin.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideClaim, CLAIMS_LEDGER_CAP } from '../../src/lib/claims.mjs'

test('vanilla-family pin: the ledger holds twenty-four (the filter\'s own bound)', () => {
  assert.equal(CLAIMS_LEDGER_CAP, 24)
})

test('junk: NaN claims refuse', () => {
  const r = decideClaim({ claimsCount: NaN, hasTarget: true })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.claimsLeft, 0)
})

test('junk: Infinity cap refuse', () => {
  const r = decideClaim({ claimsCount: 1, capCount: Infinity })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: boolean claims refuse (a true count is a flag, never a number)', () => {
  const r = decideClaim({ claimsCount: true })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: a string target flag refuses (a string target is a lie)', () => {
  const r = decideClaim({ claimsCount: 1, hasTarget: 'yes' })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('floor law: negative claims read as zero (the take stands)', () => {
  const r = decideClaim({ claimsCount: -3 })
  assert.equal(r.action, 'take')
  assert.equal(r.reason, 'target-free')
  assert.equal(r.claimsLeft, CLAIMS_LEDGER_CAP - 1)
})

test('floor law: negative cap reads as zero (the cap-held defer)', () => {
  const r = decideClaim({ claimsCount: 1, capCount: -1 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'cap-held')
})

test('THE NO-TARGET KEEP: the hold without the target is the empty lie', () => {
  const r = decideClaim({ claimsCount: 5, hasTarget: false })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'no-target')
  assert.equal(r.claimsLeft, 0)
})

test('take: the free ledger mints the claim (the margin named)', () => {
  const r = decideClaim({ claimsCount: 3 })
  assert.equal(r.action, 'take')
  assert.equal(r.reason, 'target-free')
  assert.equal(r.claimsLeft, CLAIMS_LEDGER_CAP - 4)
})

test('boundary: the 23rd claim takes (one seat left)', () => {
  const r = decideClaim({ claimsCount: 23 })
  assert.equal(r.action, 'take')
  assert.equal(r.claimsLeft, 0)
})

test('THE CAP-HELD DEFER: the 24th seat refused (the family\'s third ceiling)', () => {
  const r = decideClaim({ claimsCount: 24 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'cap-held')
  assert.equal(r.claimsLeft, 0)
})

test('THE CAP LAW: the caller owns the dial (a lifted cap reads honest)', () => {
  const r = decideClaim({ claimsCount: 30, capCount: 32 })
  assert.equal(r.action, 'take')
  assert.equal(r.claimsLeft, 1)
})

test('fractional claims floor honestly with the remainder named', () => {
  const r = decideClaim({ claimsCount: 2.5 })
  assert.equal(r.action, 'take')
  assert.equal(r.claimsLeft, CLAIMS_LEDGER_CAP - 3)
})

test('no mutation: the pure read leaves the input untouched', () => {
  const input = { claimsCount: 4, capCount: 24, hasTarget: true }
  const snapshot = JSON.stringify(input)
  decideClaim(input)
  assert.equal(JSON.stringify(input), snapshot)
})

test('empty call: the default read is the honest take (the ask rides)', () => {
  const r = decideClaim({})
  assert.equal(r.action, 'take')
  assert.equal(r.reason, 'target-free')
})
