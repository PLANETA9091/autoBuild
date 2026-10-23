import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.413) THE FLEETAUDIT INSTRUMENT - the point-4 audit's one-read pins.
import { fleetAudit } from '../../src/lib/fleetaudit.mjs'

// the fire-1844 pre-dispatch ladder's own all-green shape, newest-first
// (the page the three-condition audit reads BEFORE the fire's own
// dispatch lands - the dispatch itself is a rider and closes the lane)
const GREEN_LADDER = [
  { id: 39941381072, event: 'workflow_dispatch', status: 'completed', conclusion: 'success', head_sha: '803a8210' },
  { id: 39936502607, event: 'push', status: 'completed', conclusion: 'success', head_sha: '803a8210' },
  { id: 39936412509, event: 'push', status: 'completed', conclusion: 'success', head_sha: '6a2cc73e' }
]

test('the junk battery returns null (no throw)', () => {
  for (const junk of [null, undefined, 'ladder', 42, {}]) {
    assert.equal(fleetAudit(junk), null)
  }
})

test('the empty ladder prices the clean audit (the lane unborn, the rate null-carried)', () => {
  const a = fleetAudit([])
  assert.equal(a.clean, true)
  assert.deepEqual(a.reds, [])
  assert.deepEqual(a.zombies, [])
  assert.equal(a.lane.busy, false)
  assert.equal(a.rate.rate, null)
  assert.equal(a.rate.terminal, 0)
})

test('the all-green page prices clean (the pre-dispatch shape, the F596 terminal rides)', () => {
  const a = fleetAudit(GREEN_LADDER)
  assert.equal(a.clean, true)
  assert.deepEqual(a.reds, [])
  assert.deepEqual(a.zombies, [])
  assert.equal(a.lane.busy, false)
  assert.equal(a.rate.terminal, 3)
  assert.equal(a.rate.streak, 3)
  assert.equal(a.rate.rate, 1)
})

test('the storm page prices the red NAMED (the autopsy queue the rate cannot speak)', () => {
  const ladder = [
    { id: 39913461886, event: 'workflow_dispatch', status: 'completed', conclusion: 'success', head_sha: 'd742361a' },
    { id: 39909999111, event: 'workflow_dispatch', status: 'completed', conclusion: 'failure', head_sha: 'b09a543b' }
  ]
  const a = fleetAudit(ladder)
  assert.equal(a.rate.reds, 1)
  assert.deepEqual(a.reds, [{ id: 39909999111, headSha: 'b09a543b', conclusion: 'failure' }])
  assert.equal(a.clean, false)
})

test('the cancelled run is NOT a red (the rerun lever\'s own voice, transparent everywhere)', () => {
  const ladder = [
    { id: 500, event: 'workflow_dispatch', status: 'completed', conclusion: 'cancelled', head_sha: 'aaaa1111' },
    { id: 501, event: 'push', status: 'completed', conclusion: 'success', head_sha: 'aaaa1111' }
  ]
  const a = fleetAudit(ladder)
  assert.deepEqual(a.reds, [])
  assert.equal(a.rate.terminal, 1)
  assert.equal(a.clean, true)
})

test('the zombie prices in the audit (the cancel lever\'s id named, the page unclean)', () => {
  const T0 = Date.parse('2026-10-23T10:00:00Z')
  const ladder = [
    { id: 39800000000, event: 'workflow_dispatch', status: 'in_progress', conclusion: null, head_sha: 'bbbb2222', created_at: '2026-10-23T07:00:00Z' },
    { id: 502, event: 'push', status: 'completed', conclusion: 'success', head_sha: 'cccc3333' }
  ]
  const a = fleetAudit(ladder, { nowMs: T0 })
  assert.equal(a.zombies.length, 1)
  assert.equal(a.zombies[0].id, 39800000000)
  assert.equal(a.fenceMs, 7200000)
  assert.equal(a.clean, false)
})

test('the parallel rider closes the lane (the fire-1744 lane-wait shape, the page unclean)', () => {
  const ladder = [
    { id: 39932698871, event: 'workflow_dispatch', status: 'in_progress', conclusion: null, head_sha: 'ef99f7f0' },
    { id: 503, event: 'push', status: 'completed', conclusion: 'success', head_sha: 'ef99f7f0' }
  ]
  const a = fleetAudit(ladder)
  assert.equal(a.lane.busy, true)
  assert.equal(a.lane.riders[0].id, 39932698871)
  assert.equal(a.clean, false)
})

test('the fence passthrough rides (the tighter fence prices the young run a candidate)', () => {
  const T0 = Date.parse('2026-10-23T10:00:00Z')
  const ladder = [
    { id: 999, event: 'workflow_dispatch', status: 'in_progress', conclusion: null, head_sha: 'dddd4444', created_at: '2026-10-23T09:59:00Z' }
  ]
  const a = fleetAudit(ladder, { nowMs: T0, fenceMs: 30000 })
  assert.equal(a.fenceMs, 30000)
  assert.equal(a.zombies.length, 1)
  assert.equal(a.zombies[0].ageMs, 60000)
})

test('the reds order contract (the input order the caller brought, never re-sorted)', () => {
  const ladder = [
    { id: 700, event: 'push', status: 'completed', conclusion: 'failure', head_sha: 'eeee5555' },
    { id: 701, event: 'workflow_dispatch', status: 'completed', conclusion: 'failure', head_sha: 'ffff6666' }
  ]
  const a = fleetAudit(ladder)
  assert.deepEqual(a.reds.map(r => r.id), [700, 701])
})

test('the junk entries are skipped (the holes, the nulls, the shapeless)', () => {
  const ladder = [
    null,
    undefined,
    42,
    'run',
    { id: 702, event: 'push', status: 'completed', conclusion: 'failure', head_sha: 'aaaa7777' }
  ]
  const a = fleetAudit(ladder)
  assert.equal(a.reds.length, 1)
  assert.equal(a.reds[0].id, 702)
  assert.equal(a.rate.reds, 1)
})

test('the storm-torn ledger rides the rate line through (the F589/F591 shape)', () => {
  const ladder = [
    { id: 592, event: 'workflow_dispatch', status: 'completed', conclusion: 'success', head_sha: 'b09a543b' },
    { id: 591, event: 'workflow_dispatch', status: 'completed', conclusion: 'failure', head_sha: 'd742361a' },
    { id: 590, event: 'workflow_dispatch', status: 'completed', conclusion: 'success', head_sha: '8ab4f7bf' }
  ]
  const a = fleetAudit(ladder)
  assert.equal(a.rate.rate, 2 / 3)
  assert.equal(a.rate.streak, 1)
  assert.equal(a.reds.length, 1)
  assert.equal(a.clean, false)
})

test('the pure read mutates nothing (the caller\'s array is the caller\'s own)', () => {
  const before = JSON.stringify(GREEN_LADDER)
  fleetAudit(GREEN_LADDER)
  assert.equal(JSON.stringify(GREEN_LADDER), before)
})
