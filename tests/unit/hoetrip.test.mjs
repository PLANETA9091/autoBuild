// (v0.976.483) The hoetrip word's own test battery - the till lane's
// honest forms: the junk battery, the floor law, the GROUND GATE
// first, the HOE-SHORT defer, the min law's both-legs arithmetic,
// the no-cap law, the fractional remainder, the no-mutation purity,
// the vanilla pins.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideHoeTrip, HOETRIP_TILLS_PER_HOE, HOETRIP_FARMLAND_PER_TILL } from '../../src/lib/hoetrip.mjs'

test('vanilla pin: one wooden hoe carries fifty-nine till swings', () => {
  assert.equal(HOETRIP_TILLS_PER_HOE, 59)
})

test('vanilla pin: one till mints one farmland (the even exchange)', () => {
  assert.equal(HOETRIP_FARMLAND_PER_TILL, 1)
})

test('junk: NaN hoes refuse', () => {
  const r = decideHoeTrip({ hoesCount: NaN, tillableCount: 2 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.tills, 0)
})

test('junk: Infinity tillable refuse', () => {
  const r = decideHoeTrip({ hoesCount: 1, tillableCount: Infinity })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: boolean hoes refuse (a true count is a flag, never a number)', () => {
  const r = decideHoeTrip({ hoesCount: true, tillableCount: 1 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: string tillable refuse', () => {
  const r = decideHoeTrip({ hoesCount: 1, tillableCount: '3' })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('floor law: negative hoes read as zero (the hoe-short defer)', () => {
  const r = decideHoeTrip({ hoesCount: -2, tillableCount: 3 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'hoe-short')
})

test('floor law: negative tillable reads as zero (the ground keep)', () => {
  const r = decideHoeTrip({ hoesCount: 1, tillableCount: -5 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'no-tillable-ground')
})

test('GROUND GATE: no tillable ground reads the keep (the honest action)', () => {
  const r = decideHoeTrip({ hoesCount: 2, tillableCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'no-tillable-ground')
  assert.equal(r.usesLeft, 118)
})

test('gate order: the ground gate reads BEFORE the hoe-short defer', () => {
  const r = decideHoeTrip({ hoesCount: 0, tillableCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'no-tillable-ground')
})

test('HOE-SHORT: the starving tool leg names the hoecraft word\'s own mint', () => {
  const r = decideHoeTrip({ hoesCount: 0, tillableCount: 3 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'hoe-short')
  assert.equal(r.tills, 0)
  assert.equal(r.tillableLeft, 3)
})

test('min law: the durability leg binds (1 hoe + 100 ground -> 59 tills)', () => {
  const r = decideHoeTrip({ hoesCount: 1, tillableCount: 100 })
  assert.equal(r.action, 'till')
  assert.equal(r.reason, 'ground-and-hoe-afford')
  assert.equal(r.tills, 59)
  assert.equal(r.farmlandYield, 59)
  assert.equal(r.usesLeft, 0)
  assert.equal(r.tillableLeft, 41)
})

test('min law: the ground leg binds (2 hoes + 50 ground -> 50 tills)', () => {
  const r = decideHoeTrip({ hoesCount: 2, tillableCount: 50 })
  assert.equal(r.action, 'till')
  assert.equal(r.tills, 50)
  assert.equal(r.farmlandYield, 50)
  assert.equal(r.usesLeft, 68)
  assert.equal(r.tillableLeft, 0)
})

test('no cap: a ground-rich tool-rich read prices every till both legs afford', () => {
  const r = decideHoeTrip({ hoesCount: 3, tillableCount: 1000 })
  assert.equal(r.action, 'till')
  assert.equal(r.tills, 177)
})

test('fractional census floors honestly with the remainder named', () => {
  const r = decideHoeTrip({ hoesCount: 1, tillableCount: 2.5 })
  assert.equal(r.action, 'till')
  assert.equal(r.tills, 2)
  assert.equal(r.tillableLeft, 0.5)
})

test('no mutation: the pure read leaves the input untouched', () => {
  const input = { hoesCount: 1, tillableCount: 2 }
  const snapshot = JSON.stringify(input)
  decideHoeTrip(input)
  assert.equal(JSON.stringify(input), snapshot)
})
