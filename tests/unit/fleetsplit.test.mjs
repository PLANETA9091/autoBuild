import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.414) THE FLEETSPLIT INSTRUMENT - the storm signature's pins.
import { fleetJobSplit } from '../../src/lib/fleetsplit.mjs'

// the fire-1544 autopsy's own shape: F591 the wood-trip storm
const STORM = [
  { id: 811, name: 'Unit tests (no server needed) (node 22)', status: 'completed', conclusion: 'success' },
  { id: 812, name: 'Unit tests (no server needed) (node 24)', status: 'completed', conclusion: 'success' },
  { id: 813, name: 'Integration (vanilla 26.2 server + fleet)', status: 'completed', conclusion: 'success' },
  { id: 814, name: 'Big fleet run (19 bots, optional)', status: 'completed', conclusion: 'failure' }
]

test('the junk battery returns null (no throw)', () => {
  for (const junk of [null, undefined, 'jobs', 42, {}]) {
    assert.equal(fleetJobSplit(junk), null)
  }
})

test('the empty jobs array prices the silent split (no storm face the data cannot carry)', () => {
  const s = fleetJobSplit([])
  assert.equal(s.stormFace, false)
  assert.equal(s.fleet.total, 0)
  assert.equal(s.shards.total, 0)
  assert.equal(s.integration.total, 0)
  assert.equal(s.unknown.total, 0)
})

test('the fire-1544 storm shape prices the signature (the fleet job only, the gates held)', () => {
  const s = fleetJobSplit(STORM)
  assert.equal(s.stormFace, true)
  assert.equal(s.fleet.failures, 1)
  assert.deepEqual(s.fleet.failedIds, [814])
  assert.equal(s.shards.successes, 2)
  assert.equal(s.shards.failures, 0)
  assert.equal(s.integration.successes, 1)
  assert.equal(s.integration.failures, 0)
})

test('the real red prices no storm face (a failing shard broke the gate, the tree itself is red)', () => {
  const jobs = STORM.map(j => ({ ...j }))
  jobs[0].conclusion = 'failure'
  const s = fleetJobSplit(jobs)
  assert.equal(s.stormFace, false)
  assert.equal(s.shards.failures, 1)
  assert.deepEqual(s.shards.failedIds, [811])
})

test('the integration failure prices no storm face (the gate itself spoke red)', () => {
  const jobs = STORM.map(j => ({ ...j }))
  jobs[2].conclusion = 'failure'
  const s = fleetJobSplit(jobs)
  assert.equal(s.stormFace, false)
  assert.equal(s.integration.failures, 1)
  assert.deepEqual(s.integration.failedIds, [813])
})

test('the all-green dispatch prices no storm face (the fleet leg held, no red to classify)', () => {
  const jobs = STORM.map(j => ({ ...j, conclusion: 'success' }))
  const s = fleetJobSplit(jobs)
  assert.equal(s.stormFace, false)
  assert.equal(s.fleet.successes, 1)
  assert.deepEqual(s.fleet.failedIds, [])
})

test('the cancelled fleet job is transparent (the rerun lever\'s own voice, no storm face)', () => {
  const jobs = STORM.map(j => ({ ...j }))
  jobs[3].conclusion = 'cancelled'
  const s = fleetJobSplit(jobs)
  assert.equal(s.stormFace, false)
  assert.equal(s.fleet.failures, 0)
  assert.equal(s.fleet.successes, 0)
  assert.equal(s.fleet.total, 1)
})

test('the in-flight job counts in the lane total only (the honest unborn)', () => {
  const jobs = [{ id: 900, name: 'Big fleet run (19 bots, optional)', status: 'in_progress', conclusion: null }]
  const s = fleetJobSplit(jobs)
  assert.equal(s.fleet.total, 1)
  assert.equal(s.fleet.failures, 0)
  assert.equal(s.fleet.successes, 0)
  assert.equal(s.stormFace, false)
})

test('the gate-spoke law (a fleet failure against zero green gates is the honest unknown)', () => {
  const jobs = [
    { id: 901, name: 'Unit tests (no server needed) (node 22)', status: 'completed', conclusion: 'failure' },
    { id: 902, name: 'Big fleet run (19 bots, optional)', status: 'completed', conclusion: 'failure' }
  ]
  const s = fleetJobSplit(jobs)
  assert.equal(s.fleet.failures, 1)
  assert.equal(s.shards.failures, 1)
  assert.equal(s.stormFace, false)
})

test('the gate-spoke law needs a gate that SPOKE (zero terminal gates, no guessed signature)', () => {
  const jobs = [
    { id: 903, name: 'Unit tests (no server needed) (node 22)', status: 'in_progress', conclusion: null },
    { id: 904, name: 'Big fleet run (19 bots, optional)', status: 'completed', conclusion: 'failure' }
  ]
  const s = fleetJobSplit(jobs)
  assert.equal(s.fleet.failures, 1)
  assert.equal(s.shards.failures, 0)
  assert.equal(s.shards.successes, 0)
  assert.equal(s.stormFace, false)
})

test('the unknown lane never guesses (a job no named lane owns lands unknown)', () => {
  const jobs = [
    ...STORM,
    { id: 905, name: 'Deploy the docs', status: 'completed', conclusion: 'success' }
  ]
  const s = fleetJobSplit(jobs)
  assert.equal(s.unknown.total, 1)
  assert.equal(s.shards.total, 2)
  assert.equal(s.stormFace, true)
})

test('the junk entries are skipped (the holes, the nulls, the shapeless, the nameless)', () => {
  const jobs = [
    null,
    undefined,
    42,
    'job',
    { id: 906, status: 'completed', conclusion: 'success' },
    ...STORM
  ]
  const s = fleetJobSplit(jobs)
  assert.equal(s.unknown.total, 1)
  assert.equal(s.stormFace, true)
})

test('the mixed shard conclusions price the honest no (one spoke green, one spoke red)', () => {
  const jobs = STORM.map(j => ({ ...j }))
  jobs[1].conclusion = 'failure'
  jobs[0].conclusion = 'success'
  const s = fleetJobSplit(jobs)
  assert.equal(s.stormFace, false)
  assert.equal(s.shards.successes, 1)
  assert.equal(s.shards.failures, 1)
})

test('the pure read mutates nothing (the caller\'s array is the caller\'s own)', () => {
  const before = JSON.stringify(STORM)
  fleetJobSplit(STORM)
  assert.equal(JSON.stringify(STORM), before)
})
