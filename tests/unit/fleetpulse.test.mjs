import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.416) THE FLEETPULSE INSTRUMENT - the lane's own heartbeat's pins.
import { fleetPulse, FLEETPULSE_STALE_MS } from '../../src/lib/fleetpulse.mjs'

const T0 = Date.parse('2026-10-23T10:00:00Z')

test('the junk battery returns null (no throw)', () => {
  for (const junk of [null, undefined, 'ladder', 42, {}]) {
    assert.equal(fleetPulse(junk), null)
  }
})

test('the push-only lane prices the unborn pulse (found false, not a null verdict)', () => {
  const lane = [
    { id: 501, event: 'push', status: 'completed', conclusion: 'success', head_sha: 'aaaa1111', created_at: '2026-10-23T09:00:00Z' }
  ]
  const p = fleetPulse(lane, { nowMs: T0 })
  assert.equal(p.found, false)
  assert.equal(p.runId, null)
  assert.equal(p.ageMs, null)
  assert.equal(p.fresh, null)
})

test('the fresh beat prices (the F601-era shape: dispatched minutes ago)', () => {
  const lane = [
    { id: 39981033303, event: 'workflow_dispatch', status: 'queued', conclusion: null, head_sha: '847dfe91', created_at: '2026-10-23T09:47:00Z' },
    { id: 502, event: 'push', status: 'completed', conclusion: 'success', head_sha: '847dfe91', created_at: '2026-10-23T09:48:00Z' }
  ]
  const p = fleetPulse(lane, { nowMs: T0 })
  assert.equal(p.found, true)
  assert.equal(p.runId, 39981033303)
  assert.equal(p.ageMs, 13 * 60 * 1000)
  assert.equal(p.fresh, true)
  assert.equal(p.staleMs, FLEETPULSE_STALE_MS)
})

test('the stale beat prices (the missed-fire class: the cron dead hours)', () => {
  const lane = [
    { id: 39900000000, event: 'workflow_dispatch', status: 'completed', conclusion: 'success', head_sha: 'bbbb2222', created_at: '2026-10-23T07:00:00Z' }
  ]
  const p = fleetPulse(lane, { nowMs: T0 })
  assert.equal(p.found, true)
  assert.equal(p.ageMs, 3 * 60 * 60 * 1000)
  assert.equal(p.fresh, false)
})

test('the terminal dispatch still carries the beat (the pulse reads WHEN, not whether)', () => {
  const lane = [
    { id: 39955746349, event: 'workflow_dispatch', status: 'completed', conclusion: 'success', head_sha: '99159f93', created_at: '2026-10-23T09:45:32Z' }
  ]
  const p = fleetPulse(lane, { nowMs: T0 })
  assert.equal(p.found, true)
  assert.equal(p.runId, 39955746349)
  assert.equal(p.fresh, true)
})

test('the empty lane prices the unborn pulse (not a null verdict)', () => {
  const p = fleetPulse([], { nowMs: T0 })
  assert.equal(p.found, false)
  assert.equal(p.staleMs, FLEETPULSE_STALE_MS)
})

test('the no-age dispatch prices found without a verdict (the honest unknown, never a guessed fresh)', () => {
  const lane = [
    { id: 600, event: 'workflow_dispatch', status: 'in_progress', conclusion: null, head_sha: 'cccc3333' },
    { id: 601, event: 'workflow_dispatch', status: 'completed', conclusion: 'success', head_sha: 'dddd4444', created_at: '2026-10-23T09:00:00Z' }
  ]
  const p = fleetPulse(lane, { nowMs: T0 })
  assert.equal(p.found, true)
  assert.equal(p.runId, 600)
  assert.equal(p.ageMs, null)
  assert.equal(p.fresh, null)
})

test('the no-age newest dispatch does NOT fall through to the older beat (the newest is the beat)', () => {
  const lane = [
    { id: 600, event: 'workflow_dispatch', status: 'completed', conclusion: 'success', head_sha: 'cccc3333', created_at: 'garbage' }
  ]
  const p = fleetPulse(lane, { nowMs: T0 })
  assert.equal(p.found, true)
  assert.equal(p.ageMs, null)
  assert.equal(p.fresh, null)
})

test('the custom fence prices (the caller\'s own staleMs)', () => {
  const lane = [
    { id: 700, event: 'workflow_dispatch', status: 'completed', conclusion: 'success', head_sha: 'eeee5555', created_at: '2026-10-23T09:55:00Z' }
  ]
  const p = fleetPulse(lane, { nowMs: T0, staleMs: 4 * 60 * 1000 })
  assert.equal(p.staleMs, 240000)
  assert.equal(p.fresh, false)
})

test('the junk fence stands down to the default (never zero, never negative)', () => {
  const lane = [
    { id: 701, event: 'workflow_dispatch', status: 'completed', conclusion: 'success', head_sha: 'ffff6666', created_at: '2026-10-23T07:00:00Z' }
  ]
  for (const bad of [null, undefined, 0, -5, 'hour', NaN]) {
    const p = fleetPulse(lane, { nowMs: T0, staleMs: bad })
    assert.equal(p.staleMs, FLEETPULSE_STALE_MS)
    assert.equal(p.fresh, false)
  }
})

test('the future created_at floors at zero (a beat from the future carries no debt)', () => {
  const lane = [
    { id: 800, event: 'workflow_dispatch', status: 'queued', conclusion: null, head_sha: 'aaaa7777', created_at: '2026-10-23T11:00:00Z' }
  ]
  const p = fleetPulse(lane, { nowMs: T0 })
  assert.equal(p.ageMs, 0)
  assert.equal(p.fresh, true)
})

test('the junk entries are skipped (the holes, the nulls, the shapeless)', () => {
  const lane = [
    null,
    undefined,
    42,
    'run',
    { id: 801, event: 'workflow_dispatch', status: 'completed', conclusion: 'success', head_sha: 'bbbb8888', created_at: '2026-10-23T09:50:00Z' }
  ]
  const p = fleetPulse(lane, { nowMs: T0 })
  assert.equal(p.found, true)
  assert.equal(p.runId, 801)
  assert.equal(p.fresh, true)
})

test('the pure read mutates nothing (the caller\'s array is the caller\'s own)', () => {
  const lane = [
    { id: 39981033303, event: 'workflow_dispatch', status: 'queued', conclusion: null, head_sha: '847dfe91', created_at: '2026-10-23T09:47:00Z' }
  ]
  const before = JSON.stringify(lane)
  fleetPulse(lane, { nowMs: T0 })
  assert.equal(JSON.stringify(lane), before)
})
