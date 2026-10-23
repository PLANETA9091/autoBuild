import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.410) THE FLEETLEDGER INSTRUMENT - the reporting lane's own rate pricer's pins.
import {
  fleetRate,
  fleetStreak
} from '../../src/lib/fleetledger.mjs'

test('the junk battery returns null (no throw)', () => {
  for (const junk of [null, undefined, 'ledger', 42, {}]) {
    assert.equal(fleetRate(junk), null)
    assert.equal(fleetStreak(junk), null)
  }
})

test('the empty ledger keeps the rate null (never a verdict the data cannot carry)', () => {
  const verdict = fleetRate([])
  assert.equal(verdict.rate, null)
  assert.equal(verdict.terminal, 0)
  assert.equal(verdict.streak, 0)
  assert.equal(verdict.reds, 0)
})

test('the ten-green streak prices (the F579-F588 shape: rate 1, streak 10)', () => {
  const ledger = Array.from({ length: 10 }, (_, i) => ({ id: 590 - i, conclusion: 'success' }))
  const verdict = fleetRate(ledger)
  assert.equal(verdict.rate, 1)
  assert.equal(verdict.streak, 10)
  assert.equal(verdict.reds, 0)
  assert.equal(verdict.terminal, 10)
  assert.equal(verdict.successes, 10)
})

test('the storm-torn ledger prices (the newest resample success, the failure behind it)', () => {
  const ledger = [
    { id: 591, conclusion: 'success' },
    { id: 590, conclusion: 'success' },
    { id: 589, conclusion: 'failure' },
    { id: 588, conclusion: 'success' }
  ]
  const verdict = fleetRate(ledger)
  assert.equal(verdict.rate, 0.75)
  assert.equal(verdict.streak, 2)
  assert.equal(verdict.reds, 1)
})

test('the non-terminal entries are transparent (the queued rides between, the streak unbroken)', () => {
  const ledger = [
    { id: 592, conclusion: null },
    { id: 591, conclusion: 'success' },
    { id: 590, conclusion: 'in_progress' },
    { id: 589, conclusion: 'success' }
  ]
  const verdict = fleetRate(ledger)
  assert.equal(verdict.streak, 2)
  assert.equal(verdict.terminal, 2)
  assert.equal(verdict.rate, 1)
})

test('the first terminal failure at the head prices the honest zero streak', () => {
  const ledger = [
    { id: 592, conclusion: 'failure' },
    { id: 591, conclusion: 'success' },
    { id: 590, conclusion: 'success' }
  ]
  const verdict = fleetRate(ledger)
  assert.equal(verdict.streak, 0)
  assert.equal(verdict.reds, 1)
  assert.equal(verdict.rate, 2 / 3)
})

test('the cancelled run is transparent (the cancel lever never breaks the streak)', () => {
  const ledger = [
    { id: 593, conclusion: 'cancelled' },
    { id: 592, conclusion: 'success' },
    { id: 591, conclusion: 'success' }
  ]
  const verdict = fleetRate(ledger)
  assert.equal(verdict.streak, 2)
  assert.equal(verdict.terminal, 2)
})

test('the junk entries are skipped (the holes never guessed)', () => {
  const ledger = [
    null,
    { conclusion: 42 },
    { id: 591, conclusion: 'success' },
    'run',
    { id: 590, conclusion: 'success' }
  ]
  const verdict = fleetRate(ledger)
  assert.equal(verdict.terminal, 2)
  assert.equal(verdict.streak, 2)
})

test('the order is the caller contract (the reversed array prices the reversed streak)', () => {
  const newestFirst = [
    { id: 591, conclusion: 'success' },
    { id: 590, conclusion: 'failure' }
  ]
  const oldestFirst = [
    { id: 590, conclusion: 'failure' },
    { id: 591, conclusion: 'success' }
  ]
  assert.equal(fleetStreak(newestFirst), 1)
  assert.equal(fleetStreak(oldestFirst), 0)
  assert.equal(fleetRate(newestFirst).rate, 0.5)
  assert.equal(fleetRate(oldestFirst).rate, 0.5)
})

test('the streak shortcut rides the verdict (the worklog noun)', () => {
  const ledger = Array.from({ length: 9 }, (_, i) => ({ id: 588 - i, conclusion: 'success' }))
  assert.equal(fleetStreak(ledger), 9)
  assert.equal(fleetRate(ledger).rate, 1)
})

test('the instrument mutates nothing (the pure read)', () => {
  const ledger = [{ id: 591, conclusion: 'success' }, { id: 590, conclusion: 'failure' }]
  const before = JSON.stringify(ledger)
  fleetRate(ledger)
  assert.equal(JSON.stringify(ledger), before)
})
