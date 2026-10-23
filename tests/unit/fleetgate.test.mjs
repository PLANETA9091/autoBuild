import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.412) THE FLEETGATE INSTRUMENT - the dispatch gate's two conditions' pins.
import {
  fleetRunById,
  fleetGateAt
} from '../../src/lib/fleetgate.mjs'

// the fire-1844 ladder's own shape, newest-first (the CI API's own order)
const LADDER = [
  { id: 39948425628, event: 'workflow_dispatch', status: 'in_progress', conclusion: null, head_sha: '22fb5965aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
  { id: 39942260088, event: 'push', status: 'completed', conclusion: 'success', head_sha: '22fb5965aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
  { id: 39941381072, event: 'workflow_dispatch', status: 'completed', conclusion: 'success', head_sha: '803a8210bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb' },
  { id: 39936502607, event: 'push', status: 'completed', conclusion: 'success', head_sha: '803a8210bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb' }
]

test('the junk battery returns null (no throw)', () => {
  for (const junk of [null, undefined, 'ladder', 42, {}]) {
    assert.equal(fleetRunById(junk, 42), null)
    assert.equal(fleetGateAt(junk, '22fb5965'), null)
  }
  for (const junkId of [null, undefined, '39948425628', 42.5, NaN]) {
    assert.equal(fleetRunById(LADDER, junkId), null)
  }
  for (const junkSha of [null, undefined, 42, '']) {
    assert.equal(fleetGateAt(LADDER, junkSha), null)
  }
})

test('the F-number read prices the terminal SUCCESS (the first condition\'s own voice)', () => {
  const v = fleetRunById(LADDER, 39941381072)
  assert.equal(v.success, true)
  assert.equal(v.terminal, true)
  assert.equal(v.event, 'workflow_dispatch')
  assert.equal(v.headSha, '803a8210bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
  assert.equal(v.conclusion, 'success')
})

test('the in-flight F-number prices success false terminal false (the honest unborn)', () => {
  const v = fleetRunById(LADDER, 39948425628)
  assert.equal(v.success, false)
  assert.equal(v.terminal, false)
  assert.equal(v.status, 'in_progress')
  assert.equal(v.conclusion, null)
})

test('the cancelled run prices completed but NOT terminal (the rerun lever\'s own voice)', () => {
  const ladder = [{ id: 500, event: 'workflow_dispatch', status: 'completed', conclusion: 'cancelled', head_sha: 'cccc3333' }]
  const v = fleetRunById(ladder, 500)
  assert.equal(v.terminal, false)
  assert.equal(v.success, false)
  assert.equal(v.status, 'completed')
})

test('the unknown id reads null (the gate that has not spoken speaks nothing)', () => {
  assert.equal(fleetRunById(LADDER, 1), null)
  assert.equal(fleetRunById([], 39941381072), null)
})

test('the junk entries are skipped (the holes, the nulls, the shapeless)', () => {
  const ladder = [null, undefined, 42, 'run', { id: 39941381072, event: 'push', status: 'completed', conclusion: 'failure', head_sha: 'dddd4444' }]
  const v = fleetRunById(ladder, 39941381072)
  assert.equal(v.conclusion, 'failure')
  assert.equal(fleetGateAt(ladder, 'dddd4444').conclusion, 'failure')
})

test('the landing gate read prices the push run at the sha (the second condition\'s own voice)', () => {
  const v = fleetGateAt(LADDER, '22fb5965')
  assert.equal(v.id, 39942260088)
  assert.equal(v.event, 'push')
  assert.equal(v.success, true)
  assert.equal(v.terminal, true)
})

test('the gate read skips the dispatch shapes (the F-run rides the same head, the gate stays the push leg)', () => {
  // at 803a8210 the dispatch (39941381072) is NEWER than the push gate (39936502607);
  // the newest-first walk meets the dispatch first - the gate law skips it
  const v = fleetGateAt(LADDER, '803a8210')
  assert.equal(v.id, 39936502607)
  assert.equal(v.event, 'push')
})

test('the dispatch-only sha reads null (no push leg, no gate spoke)', () => {
  const ladder = [{ id: 600, event: 'workflow_dispatch', status: 'completed', conclusion: 'success', head_sha: 'eeee5555' }]
  assert.equal(fleetGateAt(ladder, 'eeee5555'), null)
})

test('the short sha prefix prices the full head (the ladder speaks the 8-char form)', () => {
  const v = fleetGateAt(LADDER, '803a8210')
  assert.equal(v.headSha.startsWith('803a8210'), true)
})

test('the no-runs-at-sha reads null (the word not landed, the gate unborn)', () => {
  assert.equal(fleetGateAt(LADDER, 'ffff7777'), null)
})

test('the first match in the input order wins (the order the caller contract, never re-sorted)', () => {
  const ladder = [
    { id: 700, event: 'push', status: 'completed', conclusion: 'failure', head_sha: 'aaaa1111' },
    { id: 701, event: 'push', status: 'completed', conclusion: 'success', head_sha: 'aaaa1111' }
  ]
  assert.equal(fleetGateAt(ladder, 'aaaa1111').id, 700)
  const flipped = [
    { id: 701, event: 'push', status: 'completed', conclusion: 'success', head_sha: 'aaaa1111' },
    { id: 700, event: 'push', status: 'completed', conclusion: 'failure', head_sha: 'aaaa1111' }
  ]
  assert.equal(fleetGateAt(flipped, 'aaaa1111').id, 701)
  assert.equal(fleetRunById(ladder, 700).id, 700)
  assert.equal(fleetRunById(flipped, 700).id, 700)
})

test('the headless run is transparent (a push with no sha carries no gate)', () => {
  const ladder = [{ id: 800, event: 'push', status: 'completed', conclusion: 'success', head_sha: null }]
  assert.equal(fleetGateAt(ladder, 'aaaa1111'), null)
})

test('the pure read mutates nothing (the caller\'s array is the caller\'s own)', () => {
  const before = JSON.stringify(LADDER)
  fleetRunById(LADDER, 39941381072)
  fleetGateAt(LADDER, '22fb5965')
  assert.equal(JSON.stringify(LADDER), before)
})
