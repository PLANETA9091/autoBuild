// Tests for the netherwart word (src/lib/netherwart.mjs).
// The crop lane's own first priced leg: the sow priced (1 nether wart
// + 1 soul sand -> 1 planted wart, vanilla). Pure arithmetic - no
// mineflayer import, no server, no fleet.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideNetherWart, NETHERWART_WART_PER_SOW, NETHERWART_SOULSAND_PER_SOW } from '../../src/lib/netherwart.mjs'

test('junk: a non-finite wart count refuses with junk-input', () => {
  const v = decideNetherWart({ wartCount: Number.NaN, soulsandCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
  assert.equal(v.sows, 0)
})

test('junk: a non-finite soulsand count refuses (both legs policed)', () => {
  const v = decideNetherWart({ wartCount: 0, soulsandCount: Number.POSITIVE_INFINITY })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a boolean count is a flag, never a number (numeric lane law)', () => {
  const v = decideNetherWart({ wartCount: true, soulsandCount: 1 })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('junk: a string count refuses', () => {
  const v = decideNetherWart({ wartCount: 1, soulsandCount: '4' })
  assert.equal(v.action, 'refuse')
  assert.equal(v.reason, 'junk-input')
})

test('floor law: negative counts floor to zero - the empty ground keeps, never poisons', () => {
  const v = decideNetherWart({ wartCount: -3, soulsandCount: -7 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'soulsand-empty')
  assert.equal(v.wartLeft, 0)
  assert.equal(v.soulsandLeft, 0)
})

test('keep-gate-first: the sand-empty keeps even a wart-rich pocket (the ground law)', () => {
  const v = decideNetherWart({ wartCount: 40, soulsandCount: 0 })
  assert.equal(v.action, 'keep')
  assert.equal(v.reason, 'soulsand-empty')
  assert.equal(v.sows, 0)
  assert.equal(v.wartLeft, 40, 'the warts ride wartLeft untouched')
})

test('vanilla pin: the wart cost one sow carries is exactly 1', () => {
  assert.equal(NETHERWART_WART_PER_SOW, 1)
})

test('vanilla pin: the ground cost one sow carries is exactly 1', () => {
  assert.equal(NETHERWART_SOULSAND_PER_SOW, 1)
})

test('exact vanilla sow: one wart and one sand price one plot', () => {
  const v = decideNetherWart({ wartCount: 1, soulsandCount: 1 })
  assert.equal(v.action, 'sow')
  assert.equal(v.reason, 'wart-soulsand-affordable')
  assert.equal(v.sows, 1)
  assert.equal(v.wartLeft, 0)
  assert.equal(v.soulsandLeft, 0)
})

test('min law: 3 warts / 2 sand -> 2 sows (the ground the rarer leg)', () => {
  const v = decideNetherWart({ wartCount: 3, soulsandCount: 2 })
  assert.equal(v.action, 'sow')
  assert.equal(v.sows, 2)
  assert.equal(v.wartLeft, 1)
  assert.equal(v.soulsandLeft, 0)
})

test('min law: 5 warts / 1 sand -> 1 sow (the leftovers named, never guessed)', () => {
  const v = decideNetherWart({ wartCount: 5, soulsandCount: 1 })
  assert.equal(v.action, 'sow')
  assert.equal(v.sows, 1)
  assert.equal(v.wartLeft, 4)
  assert.equal(v.soulsandLeft, 0)
})

test('no cap: a wart-rich sand-rich pocket prices every sow it affords', () => {
  const v = decideNetherWart({ wartCount: 40, soulsandCount: 80 })
  assert.equal(v.action, 'sow')
  assert.equal(v.sows, 40)
  assert.equal(v.wartLeft, 0)
  assert.equal(v.soulsandLeft, 40)
})

test('defer: the seed-empty defers wart-short - the ground rides untouched', () => {
  const v = decideNetherWart({ wartCount: 0, soulsandCount: 5 })
  assert.equal(v.action, 'defer')
  assert.equal(v.reason, 'wart-short')
  assert.equal(v.sows, 0)
  assert.equal(v.soulsandLeft, 5, 'the ground the word never spends on a guessed sow')
})

test('floor law: a fractional census floors to the honest integer (the remainder named)', () => {
  const v = decideNetherWart({ wartCount: 2.5, soulsandCount: 5.5 })
  assert.equal(v.action, 'sow')
  assert.equal(v.sows, 2)
  assert.equal(v.wartLeft, 0.5, 'the half wart the honest leftover')
  assert.equal(v.soulsandLeft, 3.5)
})

test('pure read: the word mutates nothing - two calls read the same pocket', () => {
  const pocket = { wartCount: 4, soulsandCount: 6 }
  const a = decideNetherWart(pocket)
  const b = decideNetherWart(pocket)
  assert.deepEqual(a, b)
  assert.equal(pocket.wartCount, 4)
  assert.equal(pocket.soulsandCount, 6)
})
