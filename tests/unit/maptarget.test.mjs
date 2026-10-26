// (v0.976.488) The maptarget word's own test battery - the assignment
// lane's honest forms: the junk battery, the floor law, the ZERO-CLASH
// LAW's ceiling, the min law's both bindings, the free-stock clamp,
// the two honest drynesses (the MAP-EMPTY and the ALL-CLAIMED), the
// no-mutation purity, the vanilla pin.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideMapTarget, MAPTARGET_BOTS_PER_TARGET } from '../../src/lib/maptarget.mjs'

test('vanilla pin: one target one bot (the zero-clash unit)', () => {
  assert.equal(MAPTARGET_BOTS_PER_TARGET, 1)
})

test('junk: NaN bots refuse', () => {
  const r = decideMapTarget({ botsCount: NaN, targetsCount: 2 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.assigned, 0)
})

test('junk: Infinity targets refuse', () => {
  const r = decideMapTarget({ botsCount: 1, targetsCount: Infinity })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: boolean claims refuse (a true count is a flag, never a number)', () => {
  const r = decideMapTarget({ botsCount: 1, targetsCount: 2, claimsCount: true })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: string bots refuse', () => {
  const r = decideMapTarget({ botsCount: '3', targetsCount: 2 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('floor law: negative bots read as zero (the no-bots keep)', () => {
  const r = decideMapTarget({ botsCount: -2, targetsCount: 3 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'no-bots')
})

test('floor law: negative claims read as zero (the assignment stands)', () => {
  const r = decideMapTarget({ botsCount: 2, targetsCount: 3, claimsCount: -1 })
  assert.equal(r.action, 'assign')
  assert.equal(r.assigned, 2)
})

test('THE FREE-STOCK LAW: a lying claim census never poisons the clamp', () => {
  const r = decideMapTarget({ botsCount: 2, targetsCount: 1, claimsCount: 5 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'all-claimed')
  assert.equal(r.targetsLeft, 0)
})

test('keep: nobody asks - nobody assigned (the map\'s own silence)', () => {
  const r = decideMapTarget({ botsCount: 0, targetsCount: 4 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'no-bots')
  assert.equal(r.assigned, 0)
})

test('THE MAP-EMPTY DEFER: the bare map names the maptrip word\'s own scan', () => {
  const r = decideMapTarget({ botsCount: 2, targetsCount: 0 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'map-empty')
  assert.equal(r.botsLeft, 2)
})

test('THE ALL-CLAIMED DEFER: the claims\' own hold names the walk it releases', () => {
  const r = decideMapTarget({ botsCount: 2, targetsCount: 3, claimsCount: 3 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'all-claimed')
  assert.equal(r.assigned, 0)
})

test('assign: the free stock affords the spread', () => {
  const r = decideMapTarget({ botsCount: 2, targetsCount: 5, claimsCount: 1 })
  assert.equal(r.action, 'assign')
  assert.equal(r.reason, 'targets-afford')
  assert.equal(r.assigned, 2)
  assert.equal(r.botsLeft, 0)
  assert.equal(r.targetsLeft, 2)
})

test('THE MIN LAW: the surplus bots named (bots beyond the free stock)', () => {
  const r = decideMapTarget({ botsCount: 4, targetsCount: 2 })
  assert.equal(r.action, 'assign')
  assert.equal(r.assigned, 2)
  assert.equal(r.botsLeft, 2)
  assert.equal(r.targetsLeft, 0)
})

test('THE ZERO-CLASH LAW: assigned never exceeds the free stock', () => {
  const r = decideMapTarget({ botsCount: 10, targetsCount: 3, claimsCount: 2 })
  assert.equal(r.action, 'assign')
  assert.equal(r.assigned, 1)
  assert.equal(r.targetsLeft, 0)
  assert.equal(r.botsLeft, 9)
})

test('fractional census floors honestly with the remainder named', () => {
  const r = decideMapTarget({ botsCount: 2.5, targetsCount: 2 })
  assert.equal(r.action, 'assign')
  assert.equal(r.assigned, 2)
  assert.equal(r.botsLeft, 0.5)
})

test('no mutation: the pure read leaves the input untouched', () => {
  const input = { botsCount: 2, targetsCount: 3 }
  const snapshot = JSON.stringify(input)
  decideMapTarget(input)
  assert.equal(JSON.stringify(input), snapshot)
})

test('empty call: the ask-less read is the honest keep', () => {
  const r = decideMapTarget({})
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'no-bots')
})
