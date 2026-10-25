// Tests for the wheatsow word (src/lib/wheatsow.mjs).
// The crop lane's own replant: the sow priced (1 wheat seed + 1
// farmland -> 1 planted wheat, vanilla). Pure arithmetic - no
// mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideWheatSow, WHEATSOW_SEEDS_PER_SOW, WHEATSOW_FARMLAND_PER_SOW } from '../../src/lib/wheatsow.mjs'

test('junk: a non-finite seeds count refuses with junk-input', () => {
  const v = decideWheatSow({ seedsCount: Number.NaN, farmlandCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.sows, 0)
})

test('junk: a non-finite farmland count refuses (both legs policed)', () => {
  const v = decideWheatSow({ seedsCount: 0, farmlandCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideWheatSow({ seedsCount: true, farmlandCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideWheatSow({ seedsCount: 1, farmlandCount: '4' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - the empty ground keeps, never poisons', () => {
  const v = decideWheatSow({ seedsCount: -3, farmlandCount: -7 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'farmland-empty')
  assert.equal(v.seedsLeft, 0)
  assert.equal(v.farmlandLeft, 0)
})

test('keep-gate-first: the farmland-empty keeps even a seed-rich pocket (the ground law)', () => {
  const v = decideWheatSow({ seedsCount: 40, farmlandCount: 0 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'farmland-empty')
  assert.equal(v.sows, 0)
  assert.equal(v.seedsLeft, 40, 'the seeds ride seedsLeft untouched')
})

test('vanilla pin: the seed cost one sow carries is exactly 1', () => {
  assert.equal(WHEATSOW_SEEDS_PER_SOW, 1)
})

test('vanilla pin: the ground cost one sow carries is exactly 1', () => {
  assert.equal(WHEATSOW_FARMLAND_PER_SOW, 1)
})

test('exact vanilla sow: one seed and one tile price one plot', () => {
  const v = decideWheatSow({ seedsCount: 1, farmlandCount: 1 })
  assert.equal(v.action, 'sow')
  assert.equal(v.reason, 'seeds-farmland-affordable')
  assert.equal(v.sows, 1)
  assert.equal(v.seedsLeft, 0)
  assert.equal(v.farmlandLeft, 0)
})

test('min law: 3 seeds / 2 tiles -> 2 sows (the ground the rarer leg)', () => {
  const v = decideWheatSow({ seedsCount: 3, farmlandCount: 2 })
  assert.equal(v.action, 'sow')
  assert.equal(v.sows, 2)
  assert.equal(v.seedsLeft, 1)
  assert.equal(v.farmlandLeft, 0)
})

test('min law: 5 seeds / 1 tile -> 1 sow (the leftovers named, never guessed)', () => {
  const v = decideWheatSow({ seedsCount: 5, farmlandCount: 1 })
  assert.equal(v.action, 'sow')
  assert.equal(v.sows, 1)
  assert.equal(v.seedsLeft, 4)
  assert.equal(v.farmlandLeft, 0)
})

test('no cap: a seed-rich tile-rich read prices every sow it affords', () => {
  const v = decideWheatSow({ seedsCount: 40, farmlandCount: 80 })
  assert.equal(v.action, 'sow')
  assert.equal(v.sows, 40)
  assert.equal(v.seedsLeft, 0)
  assert.equal(v.farmlandLeft, 40)
})

test('defer: the seed-empty defers seeds-short - the ground rides untouched', () => {
  const v = decideWheatSow({ seedsCount: 0, farmlandCount: 5 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'seeds-short')
  assert.equal(v.sows, 0)
  assert.equal(v.farmlandLeft, 5, 'the ground the word never spends on a guessed sow')
})

test('floor law: a fractional census floors to the honest integer (the remainder named)', () => {
  const v = decideWheatSow({ seedsCount: 2.5, farmlandCount: 5.5 })
  assert.equal(v.action, 'sow')
  assert.equal(v.sows, 2)
  assert.equal(v.seedsLeft, 0.5, 'the half seed the honest leftover')
  assert.equal(v.farmlandLeft, 3.5)
})

test('pure read: the word mutates nothing - two calls read the same pocket', () => {
  const pocket = { seedsCount: 4, farmlandCount: 6 }
  const a = decideWheatSow(pocket)
  const b = decideWheatSow(pocket)
  assert.deepEqual(a, b)
  assert.equal(pocket.seedsCount, 4)
  assert.equal(pocket.farmlandCount, 6)
})
