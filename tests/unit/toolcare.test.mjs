// (v0.976.377) decideToolAction - the one-word tool care decision.
// All pure arithmetic: no clock, no RNG, every assertion exact.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideToolAction } from '../../src/lib/toolcare.mjs'

test('a healthy tool above the threshold keeps working', () => {
  assert.deepEqual(
    decideToolAction({ durability: 150, maxDurability: 250 }),
    { action: 'keep', reason: 'healthy', fraction: 0.6 }
  )
  assert.equal(decideToolAction({ durability: 250, maxDurability: 250 }).action, 'keep')
})

test('a worn tool with enough material repairs, at the exact threshold too', () => {
  // 37/250 = 0.148 <= 0.15 default threshold, material covers the unit cost
  assert.deepEqual(
    decideToolAction({ durability: 37, maxDurability: 250, materialCount: 1 }),
    { action: 'repair', reason: 'worn-repairable', fraction: 37 / 250 }
  )
  // boundary: exactly 0.15 with exactly one unit - repair, not defer
  assert.equal(
    decideToolAction({ durability: 15, maxDurability: 100, materialCount: 1 }).action,
    'repair'
  )
})

test('a worn tool short on material defers instead of repairing', () => {
  assert.deepEqual(
    decideToolAction({ durability: 10, maxDurability: 100, materialCount: 0 }),
    { action: 'defer', reason: 'worn-no-material', fraction: 0.1 }
  )
  // material below the unit cost defers as well (2 held, 3 needed)
  assert.equal(
    decideToolAction({ durability: 10, maxDurability: 100, materialCount: 2, repairUnitCost: 3 }).action,
    'defer'
  )
})

test('a dead tool swaps to the spare, or refuses honestly without one', () => {
  assert.deepEqual(
    decideToolAction({ durability: 0, maxDurability: 250, spareCount: 1 }),
    { action: 'replace', reason: 'broken-spare', fraction: 0 }
  )
  assert.deepEqual(
    decideToolAction({ durability: 0, maxDurability: 250, spareCount: 0 }),
    { action: 'refuse', reason: 'broken-no-spare', fraction: 0 }
  )
})

test('junk inputs refuse without throwing - the caller bug degrades to a word', () => {
  for (const bad of [
    {},
    { durability: NaN, maxDurability: 250 },
    { durability: 10, maxDurability: 0 },
    { durability: 10, maxDurability: -5 },
    { durability: Infinity, maxDurability: 250 },
    { durability: 'many', maxDurability: 250 }
  ]) {
    const d = decideToolAction(bad)
    assert.equal(d.action, 'refuse', JSON.stringify(bad))
    assert.equal(d.reason, 'junk-input')
    assert.equal(d.fraction, 0)
  }
})

test('an over-reported durability clamps to max - the honest fraction wins', () => {
  const d = decideToolAction({ durability: 999, maxDurability: 250 })
  assert.equal(d.action, 'keep')
  assert.equal(d.fraction, 1)
})

test('negative durability behaves as dead, not junk - the clamp catches it', () => {
  assert.equal(
    decideToolAction({ durability: -3, maxDurability: 250, spareCount: 2 }).action,
    'replace'
  )
  assert.equal(
    decideToolAction({ durability: -3, maxDurability: 250 }).action,
    'refuse'
  )
})

test('threshold options are honoured and sanitised', () => {
  // a custom repairAt=0.5 pulls a half-worn tool into the repair branch
  assert.equal(
    decideToolAction({ durability: 50, maxDurability: 100, materialCount: 1, repairAt: 0.5 }).action,
    'repair'
  )
  // junk repairAt falls back to the default 0.15: 50/100 = 0.5 > 0.15 keeps
  assert.equal(
    decideToolAction({ durability: 50, maxDurability: 100, materialCount: 1, repairAt: NaN }).action,
    'keep'
  )
  // junk repairUnitCost falls back to 1: one material unit still repairs
  assert.equal(
    decideToolAction({ durability: 5, maxDurability: 100, materialCount: 1, repairUnitCost: -2 }).action,
    'repair'
  )
})
