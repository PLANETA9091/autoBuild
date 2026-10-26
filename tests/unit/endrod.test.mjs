// (v0.976.491) Unit tests for the end rod mint word (src/lib/endrod.mjs).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  decideEndRod,
  END_RODS_PER_CRAFT,
  END_ROD_POPPED_PER_CRAFT,
  END_ROD_BLAZEROD_PER_CRAFT
} from '../../src/lib/endrod.mjs'

test('junk battery: string poppedCount refuses, never throws', () => {
  const r = decideEndRod({ poppedCount: 'two', blazeRodCount: 1 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.crafts, 0)
})

test('junk battery: NaN blazeRodCount refuses', () => {
  const r = decideEndRod({ poppedCount: 2, blazeRodCount: NaN })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk battery: boolean blazeRodCount refuses (a flag is never a count)', () => {
  const r = decideEndRod({ poppedCount: 2, blazeRodCount: true })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('empty call reads the honest default: no pocket read keeps pop-short', () => {
  const r = decideEndRod()
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'pop-short')
})

test('floor law: negative popped clamps to zero and keeps pop-short', () => {
  const r = decideEndRod({ poppedCount: -3, blazeRodCount: 5 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'pop-short')
  assert.equal(r.poppedLeft, 0)
})

test('floor law: negative blazeRod reads as zero and defers rod-short', () => {
  const r = decideEndRod({ poppedCount: 3, blazeRodCount: -2 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'rod-short')
})

test('pop-short gate reads first: rod-rich pocket keeps, never defers', () => {
  const r = decideEndRod({ poppedCount: 0, blazeRodCount: 9 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'pop-short')
})

test('rod-short: popped waits pocketed, the crossing owns the rod story', () => {
  const r = decideEndRod({ poppedCount: 3, blazeRodCount: 0 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'rod-short')
})

test('rod-short beats nothing: the shortage names the crossing honestly', () => {
  const r = decideEndRod({ poppedCount: 5, blazeRodCount: 0 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'rod-short')
})

test('pair law: the min binds both legs, the surplus rod named', () => {
  const r = decideEndRod({ poppedCount: 2, blazeRodCount: 3 })
  assert.equal(r.action, 'craft')
  assert.equal(r.reason, 'pair-affords')
  assert.equal(r.crafts, 2)
  assert.equal(r.rodsYield, 8)
  assert.equal(r.poppedLeft, 0)
  assert.equal(r.blazeRodsLeft, 1)
})

test('pair law: the surplus popped named the other way', () => {
  const r = decideEndRod({ poppedCount: 5, blazeRodCount: 1 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 1)
  assert.equal(r.rodsYield, 4)
  assert.equal(r.poppedLeft, 4)
  assert.equal(r.blazeRodsLeft, 0)
})

test('rod law constants pin the vanilla recipe (1 popped + 1 rod -> 4 rods)', () => {
  assert.equal(END_RODS_PER_CRAFT, 4)
  assert.equal(END_ROD_POPPED_PER_CRAFT, 1)
  assert.equal(END_ROD_BLAZEROD_PER_CRAFT, 1)
})

test('one pair one craft: the exact unit mints the exact four', () => {
  const r = decideEndRod({ poppedCount: 1, blazeRodCount: 1 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 1)
  assert.equal(r.rodsYield, 4)
  assert.equal(r.poppedLeft, 0)
  assert.equal(r.blazeRodsLeft, 0)
})

test('no cap: a pair-rich pocket prices every mint it affords (200 pairs -> 800)', () => {
  const r = decideEndRod({ poppedCount: 200, blazeRodCount: 200 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 200)
  assert.equal(r.rodsYield, 800)
})

test('fractional census floors honestly (2.5 popped + 1.5 rods mint one pair)', () => {
  const r = decideEndRod({ poppedCount: 2.5, blazeRodCount: 1.5 })
  assert.equal(r.action, 'craft')
  assert.equal(r.crafts, 1)
  assert.equal(r.rodsYield, 4)
  assert.equal(r.poppedLeft, 1)
  assert.equal(r.blazeRodsLeft, 0)
})

test('the pure read mutates nothing', () => {
  const opts = { poppedCount: 3, blazeRodCount: 2 }
  const before = JSON.stringify(opts)
  decideEndRod(opts)
  assert.equal(JSON.stringify(opts), before)
})
