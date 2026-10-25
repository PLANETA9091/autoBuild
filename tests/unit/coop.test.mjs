// (v0.976.481) The coop word's own test battery - the egg lane's
// honest forms: the junk battery, the floor law, the two keeps (the
// MORNING LAW and the PEN LAW), the keep-gate-first order, the
// gather's own arithmetic, the no-cap law, the fractional remainder,
// the no-mutation purity, the vanilla pin.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideCoopRun, COOP_RUNS_PER_CHICKEN } from '../../src/lib/coop.mjs'

test('vanilla pin: one chicken in reach earns its own collect pass', () => {
  assert.equal(COOP_RUNS_PER_CHICKEN, 1)
})

test('junk: NaN eggs refuse', () => {
  const r = decideCoopRun({ eggsCount: NaN, chickenCount: 2 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.runs, 0)
})

test('junk: Infinity chickens refuse', () => {
  const r = decideCoopRun({ eggsCount: 0, chickenCount: Infinity })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: boolean eggs refuse (a true count is a flag, never a number)', () => {
  const r = decideCoopRun({ eggsCount: true, chickenCount: 1 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: string chickens refuse', () => {
  const r = decideCoopRun({ eggsCount: 0, chickenCount: '3' })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('floor law: negative eggs read as zero (gather stands)', () => {
  const r = decideCoopRun({ eggsCount: -2, chickenCount: 3 })
  assert.equal(r.action, 'gather')
  assert.equal(r.runs, 3)
})

test('floor law: negative chickens read as zero (the pen-empty keep)', () => {
  const r = decideCoopRun({ eggsCount: 0, chickenCount: -5 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'pen-empty')
})

test('MORNING LAW: the egg held reads the keep (the honest action)', () => {
  const r = decideCoopRun({ eggsCount: 1, chickenCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'egg-held')
  assert.equal(r.eggsLeft, 1)
})

test('keep-gate-first: the held egg beats the pen\'s own promise', () => {
  const r = decideCoopRun({ eggsCount: 2, chickenCount: 4 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'egg-held')
  assert.equal(r.runs, 0)
  assert.equal(r.chickensLeft, 4)
})

test('PEN LAW: the empty pen reads the keep, never a defer', () => {
  const r = decideCoopRun({ eggsCount: 0, chickenCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'pen-empty')
  assert.equal(r.runs, 0)
})

test('gather: the stocked pen and the empty pocket earn the walk', () => {
  const r = decideCoopRun({ eggsCount: 0, chickenCount: 3 })
  assert.equal(r.action, 'gather')
  assert.equal(r.reason, 'chickens-in-reach')
  assert.equal(r.runs, 3)
  assert.equal(r.chickensLeft, 0)
  assert.equal(r.eggsLeft, 0)
})

test('no cap: a pen-rich census prices every pass it affords', () => {
  const r = decideCoopRun({ eggsCount: 0, chickenCount: 200 })
  assert.equal(r.action, 'gather')
  assert.equal(r.runs, 200)
})

test('fractional census floors honestly with the remainder named', () => {
  const r = decideCoopRun({ eggsCount: 0, chickenCount: 2.5 })
  assert.equal(r.action, 'gather')
  assert.equal(r.runs, 2)
  assert.equal(r.chickensLeft, 0.5)
})

test('THE GATHER LAW: the egg yield never minted (the world\'s clock lays)', () => {
  const r = decideCoopRun({ eggsCount: 0, chickenCount: 5 })
  assert.equal(r.action, 'gather')
  assert.equal(r.eggsLeft, 0)
})

test('no mutation: the pure read leaves the input untouched', () => {
  const input = { eggsCount: 0, chickenCount: 2 }
  const snapshot = JSON.stringify(input)
  decideCoopRun(input)
  assert.equal(JSON.stringify(input), snapshot)
})

test('empty pocket, stocked pen: the honest gather read stands', () => {
  const r = decideCoopRun({})
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'pen-empty')
  const s = decideCoopRun({ chickenCount: 1 })
  assert.equal(s.action, 'gather')
  assert.equal(s.runs, 1)
})
