// (v0.976.487) The sleep word's own test battery - the night census's
// honest forms: the junk battery (the count's and the flags' own), the
// floor law, the DAY GATE (the keep, never a defer), the THUNDER LAW,
// the BED-SHORT defer, the sleep's own arithmetic, the UNITS LAW's
// hard ceiling, the no-mutation purity, the vanilla pin.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideSleep, SLEEP_NIGHTS_SKIPPED, SLEEP_RESPAWN_RESETS } from '../../src/lib/sleep.mjs'

test('vanilla pin: one sleep skips one dark and overwrites the spawn once', () => {
  assert.equal(SLEEP_NIGHTS_SKIPPED, 1)
  assert.equal(SLEEP_RESPAWN_RESETS, 1)
})

test('junk: NaN beds refuse', () => {
  const r = decideSleep({ bedsCount: NaN, isNight: true })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.nightsSkipped, 0)
})

test('junk: Infinity beds refuse', () => {
  const r = decideSleep({ bedsCount: Infinity, isNight: true })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: boolean beds refuse (a true count is a flag, never a number)', () => {
  const r = decideSleep({ bedsCount: true, isNight: true })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: string beds refuse', () => {
  const r = decideSleep({ bedsCount: '2', isNight: true })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: a string clock flag refuses (a string clock is a lie)', () => {
  const r = decideSleep({ bedsCount: 1, isNight: 'yes' })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('floor law: negative beds read as zero (the bed-short defer)', () => {
  const r = decideSleep({ bedsCount: -2, isNight: true })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'bed-short')
})

test('THE DAY GATE: noon with a bed reads the keep, never a defer', () => {
  const r = decideSleep({ bedsCount: 1, isNight: false, isThunder: false })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'day-waits')
  assert.equal(r.bedsLeft, 1)
})

test('the clock gate first: noon without a bed reads the day keep (no mint demanded)', () => {
  const r = decideSleep({ bedsCount: 0, isNight: false })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'day-waits')
})

test('sleep: the night and the bed earn the dark skip', () => {
  const r = decideSleep({ bedsCount: 1, isNight: true })
  assert.equal(r.action, 'sleep')
  assert.equal(r.reason, 'dark-and-bedded')
  assert.equal(r.nightsSkipped, 1)
  assert.equal(r.respawnResets, 1)
  assert.equal(r.bedsLeft, 1)
})

test('THE THUNDER LAW: the storm\'s own noon is the sleep-legal dark', () => {
  const r = decideSleep({ bedsCount: 1, isNight: false, isThunder: true })
  assert.equal(r.action, 'sleep')
  assert.equal(r.reason, 'dark-and-bedded')
})

test('the thunder dark without a bed defers to the bedcraft mint', () => {
  const r = decideSleep({ bedsCount: 0, isNight: false, isThunder: true })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'bed-short')
})

test('THE UNITS LAW: the three-bed pocket sleeps the same ONE night', () => {
  const r = decideSleep({ bedsCount: 3, isNight: true })
  assert.equal(r.action, 'sleep')
  assert.equal(r.nightsSkipped, 1)
  assert.equal(r.respawnResets, 1)
  assert.equal(r.bedsLeft, 3)
})

test('no mutation: the pure read leaves the input untouched', () => {
  const input = { bedsCount: 2, isNight: true }
  const snapshot = JSON.stringify(input)
  decideSleep(input)
  assert.equal(JSON.stringify(input), snapshot)
})

test('empty call: the clock-less read is the day keep (the honest default)', () => {
  const r = decideSleep({})
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'day-waits')
})
