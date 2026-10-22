import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.395) THE XPCARE WORD - the care lane's sixth sibling's pins.
import { decideXpAction, orbsOnDeath, XP_ORBS_PER_LEVEL, XP_ORB_CAP, XP_BANK_AT, XP_WATCH_AT } from '../../src/lib/xpcare.mjs'

test('junk level refuses honestly (no throw)', () => {
  for (const junk of [NaN, Infinity, -Infinity, '12', {}, true]) {
    const care = decideXpAction({ level: junk })
    assert.equal(care.action, 'refuse')
    assert.equal(care.reason, 'junk-input')
    assert.equal(care.level, null)
    assert.equal(care.orbs, null)
  }
})

test('missing bar keeps silent (never trust a missing bar with a 0)', () => {
  for (const missing of [undefined, null]) {
    const care = decideXpAction({ level: missing })
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'no-bar')
    assert.equal(care.level, null)
    assert.equal(care.orbs, null)
  }
})

test('negative level clamps to the bar floor', () => {
  const care = decideXpAction({ level: -3 })
  assert.equal(care.level, 0)
  assert.equal(care.action, 'keep')
  assert.equal(care.reason, 'lean')
  assert.equal(care.orbs, 0)
})

test('fractional levels floor (the bar shows whole levels)', () => {
  assert.equal(decideXpAction({ level: 2.7 }).level, 2)
  assert.equal(decideXpAction({ level: 2.7 }).action, 'keep')
  assert.equal(decideXpAction({ level: 29.9 }).level, 29)
  assert.equal(decideXpAction({ level: 29.9 }).action, 'watch')
})

test('lean band keeps silent below the watch band', () => {
  for (const l of [0, 1, 5, 9]) {
    const care = decideXpAction({ level: l })
    assert.equal(care.action, 'keep')
    assert.equal(care.reason, 'lean')
  }
})

test('watch boundary is inclusive (10 watches, 9 keeps)', () => {
  const care = decideXpAction({ level: 10 })
  assert.equal(care.action, 'watch')
  assert.equal(care.reason, 'watch-band')
  assert.equal(decideXpAction({ level: 9 }).action, 'keep')
})

test('bank boundary is inclusive (30 banks, 29 watches; danger outranks)', () => {
  const care = decideXpAction({ level: 30 })
  assert.equal(care.action, 'bank')
  assert.equal(care.reason, 'rich-at-risk')
  assert.equal(decideXpAction({ level: 29 }).action, 'watch')
})

test('the verdict carries the death orbs (the cap prices the rich bar)', () => {
  assert.equal(decideXpAction({ level: 30 }).orbs, 100)
  assert.equal(decideXpAction({ level: 10 }).orbs, 70)
  assert.equal(decideXpAction({ level: 5 }).orbs, 35)
})

test('orbsOnDeath rides the vanilla rate (7 per level)', () => {
  assert.equal(orbsOnDeath(0), 0)
  assert.equal(orbsOnDeath(1), 7)
  assert.equal(orbsOnDeath(10), 70)
  assert.equal(orbsOnDeath(14), 98)
})

test('orbsOnDeath caps at the vanilla 100 (the high level the cap prices)', () => {
  assert.equal(orbsOnDeath(15), 100)
  assert.equal(orbsOnDeath(30), 100)
  assert.equal(orbsOnDeath(100), 100)
})

test('orbsOnDeath honest on junk and negatives', () => {
  for (const junk of [NaN, Infinity, 'x', null, undefined, {}]) {
    assert.equal(orbsOnDeath(junk), null)
  }
  assert.equal(orbsOnDeath(-5), 0)
  assert.equal(orbsOnDeath(2.9), 14)
})

test('the constants are the vanilla law the word prices', () => {
  assert.equal(XP_ORBS_PER_LEVEL, 7)
  assert.equal(XP_ORB_CAP, 100)
  assert.equal(XP_BANK_AT, 30)
  assert.equal(XP_WATCH_AT, 10)
  assert.ok(Number.isInteger(XP_ORBS_PER_LEVEL) && Number.isInteger(XP_ORB_CAP))
  assert.ok(XP_WATCH_AT < XP_BANK_AT)
  assert.ok(XP_BANK_AT * XP_ORBS_PER_LEVEL > XP_ORB_CAP) // the cap binds above the bank band
})
