import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.411) THE FLEETLANE INSTRUMENT - the audit lane's own hygiene pricer's pins.
import {
  fleetAgeMs,
  fleetLaneBusy,
  fleetZombies,
  FLEETLANE_INFLIGHT_STATUSES,
  FLEETLANE_ZOMBIE_FENCE_MS
} from '../../src/lib/fleetlane.mjs'

const T0 = Date.parse('2026-10-23T10:00:00Z')

test('the junk battery returns null (no throw)', () => {
  for (const junk of [null, undefined, 'lane', 42, {}]) {
    assert.equal(fleetLaneBusy(junk), null)
    assert.equal(fleetZombies(junk), null)
  }
  assert.equal(fleetAgeMs(null), null)
  assert.equal(fleetAgeMs('run'), null)
  assert.equal(fleetAgeMs({}), null)
  assert.equal(fleetAgeMs({ created_at: 'not-a-date' }, T0), null)
  assert.equal(fleetAgeMs({ created_at: '' }, T0), null)
})

test('the empty lane keeps the dispatch gate open (not a null verdict - an open gate)', () => {
  const read = fleetLaneBusy([])
  assert.equal(read.busy, false)
  assert.deepEqual(read.riders, [])
})

test('the parallel rider prices busy (the fire-1744 shape: the F594 dispatch in flight)', () => {
  const lane = [
    { id: 39932698871, event: 'workflow_dispatch', status: 'in_progress', head_sha: 'ef99f7f0' },
    { id: 39932500123, event: 'push', status: 'in_progress', head_sha: 'ef99f7f0' }
  ]
  const read = fleetLaneBusy(lane)
  assert.equal(read.busy, true)
  assert.equal(read.riders.length, 1)
  assert.equal(read.riders[0].id, 39932698871)
  assert.equal(read.riders[0].headSha, 'ef99f7f0')
})

test('the push run never closes the lane (the gate prices the FLEET riders only)', () => {
  const lane = [{ id: 39936502607, event: 'push', status: 'in_progress', head_sha: '803a8210' }]
  const read = fleetLaneBusy(lane)
  assert.equal(read.busy, false)
  assert.equal(read.riders.length, 0)
})

test('the queued dispatch rides the lane too (the stall class the faces 42..44 priced)', () => {
  const lane = [{ id: 4242, event: 'workflow_dispatch', status: 'queued', head_sha: 'aaaa0000' }]
  assert.equal(fleetLaneBusy(lane).busy, true)
})

test('the terminal dispatch is transparent (the lane gate re-opens behind it)', () => {
  const lane = [
    { id: 39936368517, event: 'workflow_dispatch', status: 'completed', head_sha: '6abb69d8' }
  ]
  const read = fleetLaneBusy(lane)
  assert.equal(read.busy, false)
})

test('the unknown status string is transparent (never counted, never guessed)', () => {
  const lane = [{ id: 777, event: 'workflow_dispatch', status: 'weird', head_sha: 'bbbb1111' }]
  assert.equal(fleetLaneBusy(lane).busy, false)
  assert.equal(fleetZombies(lane, { nowMs: T0 }).zombies.length, 0)
})

test('the junk entries are skipped (the holes, the nulls, the shapeless)', () => {
  const lane = [null, undefined, 42, 'run', { id: 4243, event: 'workflow_dispatch', status: 'in_progress', head_sha: 'cccc2222' }]
  const read = fleetLaneBusy(lane)
  assert.equal(read.busy, true)
  assert.equal(read.riders.length, 1)
  const z = fleetZombies(lane, { nowMs: T0 })
  assert.equal(z.zombies.length, 0)
})

test('the ancient in-flight run prices a zombie candidate (the BlobNotFound class)', () => {
  const lane = [{ id: 39800000000, event: 'workflow_dispatch', status: 'in_progress', head_sha: 'dddd3333', created_at: '2026-10-23T07:00:00Z' }]
  const z = fleetZombies(lane, { nowMs: T0 })
  assert.equal(z.zombies.length, 1)
  assert.equal(z.zombies[0].id, 39800000000)
  assert.equal(z.zombies[0].ageMs, 3 * 60 * 60 * 1000)
  assert.equal(z.zombies[0].createdAt, '2026-10-23T07:00:00Z')
  assert.equal(z.fenceMs, FLEETLANE_ZOMBIE_FENCE_MS)
})

test('the young in-flight run stays (under the fence, the healthy leg shape)', () => {
  const lane = [{ id: 39941381072, event: 'workflow_dispatch', status: 'in_progress', head_sha: '803a8210', created_at: '2026-10-23T09:57:00Z' }]
  const z = fleetZombies(lane, { nowMs: T0 })
  assert.equal(z.zombies.length, 0)
})

test('the completed run is never a zombie (no matter how ancient)', () => {
  const lane = [{ id: 39700000000, event: 'workflow_dispatch', status: 'completed', head_sha: 'eeee4444', created_at: '2026-10-22T08:00:00Z' }]
  const z = fleetZombies(lane, { nowMs: T0 })
  assert.equal(z.zombies.length, 0)
})

test('the missing or junk timestamp is transparent (no age, no verdict, no guess)', () => {
  const lane = [
    { id: 888, event: 'workflow_dispatch', status: 'in_progress', head_sha: 'ffff5555' },
    { id: 889, event: 'workflow_dispatch', status: 'in_progress', head_sha: 'aaaa6666', created_at: 'garbage' }
  ]
  const z = fleetZombies(lane, { nowMs: T0 })
  assert.equal(z.zombies.length, 0)
})

test('the tighter fence prices the young run a candidate (the caller\'s own fence)', () => {
  const lane = [{ id: 999, event: 'workflow_dispatch', status: 'in_progress', head_sha: 'bbbb7777', created_at: '2026-10-23T09:59:00Z' }]
  const z = fleetZombies(lane, { nowMs: T0, fenceMs: 30 * 1000 })
  assert.equal(z.fenceMs, 30000)
  assert.equal(z.zombies.length, 1)
  assert.equal(z.zombies[0].ageMs, 60000)
})

test('the junk fence stands down to the default (never zero, never negative)', () => {
  const lane = [{ id: 1000, event: 'workflow_dispatch', status: 'queued', head_sha: 'cccc8888', created_at: '2026-10-23T07:00:00Z' }]
  for (const bad of [null, undefined, 0, -5, 'hour', NaN]) {
    const z = fleetZombies(lane, { nowMs: T0, fenceMs: bad })
    assert.equal(z.fenceMs, FLEETLANE_ZOMBIE_FENCE_MS)
    assert.equal(z.zombies.length, 1)
  }
})

test('the negative age floors at zero (a future created_at carries no debt)', () => {
  const age = fleetAgeMs({ created_at: '2026-10-23T11:00:00Z' }, T0)
  assert.equal(age, 0)
})

test('the age read prices the in-flight statuses the lane can name (the constants restated)', () => {
  assert.deepEqual([...FLEETLANE_INFLIGHT_STATUSES].sort(), ['in_progress', 'pending', 'queued'])
  assert.equal(FLEETLANE_ZOMBIE_FENCE_MS, 7200000)
})

test('the pure read mutates nothing (the caller\'s array is the caller\'s own)', () => {
  const lane = [{ id: 1010, event: 'workflow_dispatch', status: 'in_progress', head_sha: 'dddd9999', created_at: '2026-10-23T07:00:00Z' }]
  const before = JSON.stringify(lane)
  fleetLaneBusy(lane)
  fleetZombies(lane, { nowMs: T0 })
  assert.equal(JSON.stringify(lane), before)
})
