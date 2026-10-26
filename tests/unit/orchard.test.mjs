// (v0.976.484) The orchard word's own test battery - the grove lane's
// honest forms: the junk battery, the floor law, the two keeps (the
// GROVE KEEP and the GROVE LAW), the keep-gate-first order, the
// break's own arithmetic, the no-cap law, the fractional remainder,
// the CHANCE LAW's never-minted yield, the no-mutation purity, the
// vanilla pin.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideOrchardTrip, ORCHARD_PASSES_PER_LEAF } from '../../src/lib/orchard.mjs'

test('vanilla pin: one oak leaf in reach earns its own break pass', () => {
  assert.equal(ORCHARD_PASSES_PER_LEAF, 1)
})

test('junk: NaN apples refuse', () => {
  const r = decideOrchardTrip({ applesCount: NaN, leavesCount: 2 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.passes, 0)
})

test('junk: Infinity leaves refuse', () => {
  const r = decideOrchardTrip({ applesCount: 0, leavesCount: Infinity })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: boolean apples refuse (a true count is a flag, never a number)', () => {
  const r = decideOrchardTrip({ applesCount: true, leavesCount: 1 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: string leaves refuse', () => {
  const r = decideOrchardTrip({ applesCount: 0, leavesCount: '3' })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('floor law: negative apples read as zero (the break stands)', () => {
  const r = decideOrchardTrip({ applesCount: -2, leavesCount: 3 })
  assert.equal(r.action, 'break')
  assert.equal(r.passes, 3)
})

test('floor law: negative leaves read as zero (the grove-empty keep)', () => {
  const r = decideOrchardTrip({ applesCount: 0, leavesCount: -5 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'grove-empty')
})

test('GROVE KEEP: the pocket apple held reads the keep (the honest action)', () => {
  const r = decideOrchardTrip({ applesCount: 1, leavesCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'apple-held')
  assert.equal(r.applesLeft, 1)
})

test('keep-gate-first: the held apple beats the grove\'s own promise', () => {
  const r = decideOrchardTrip({ applesCount: 2, leavesCount: 4 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'apple-held')
  assert.equal(r.passes, 0)
  assert.equal(r.leavesLeft, 4)
})

test('GROVE LAW: the bare grove reads the keep, never a defer', () => {
  const r = decideOrchardTrip({ applesCount: 0, leavesCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'grove-empty')
  assert.equal(r.passes, 0)
})

test('break: the stocked grove and the bare pocket earn the walk', () => {
  const r = decideOrchardTrip({ applesCount: 0, leavesCount: 3 })
  assert.equal(r.action, 'break')
  assert.equal(r.reason, 'leaves-in-reach')
  assert.equal(r.passes, 3)
  assert.equal(r.leavesLeft, 0)
  assert.equal(r.applesLeft, 0)
})

test('no cap: a grove-rich census prices every pass it affords', () => {
  const r = decideOrchardTrip({ applesCount: 0, leavesCount: 200 })
  assert.equal(r.action, 'break')
  assert.equal(r.passes, 200)
})

test('fractional census floors honestly with the remainder named', () => {
  const r = decideOrchardTrip({ applesCount: 0, leavesCount: 2.5 })
  assert.equal(r.action, 'break')
  assert.equal(r.passes, 2)
  assert.equal(r.leavesLeft, 0.5)
})

test('THE CHANCE LAW: the apple yield never minted (the grove\'s own dice)', () => {
  const r = decideOrchardTrip({ applesCount: 0, leavesCount: 5 })
  assert.equal(r.action, 'break')
  assert.equal(r.applesLeft, 0)
})

test('no mutation: the pure read leaves the input untouched', () => {
  const input = { applesCount: 0, leavesCount: 2 }
  const snapshot = JSON.stringify(input)
  decideOrchardTrip(input)
  assert.equal(JSON.stringify(input), snapshot)
})

test('empty pocket, one oak leaf: the honest break read stands', () => {
  const r = decideOrchardTrip({})
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'grove-empty')
  const s = decideOrchardTrip({ leavesCount: 1 })
  assert.equal(s.action, 'break')
  assert.equal(s.passes, 1)
})
