import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.417) THE FLEETSTORM INSTRUMENT - the storm cadence's pins.
import { fleetStormCadence } from '../../src/lib/fleetstorm.mjs'

const d = (id, conclusion) => ({ id, event: 'workflow_dispatch', status: 'completed', conclusion })
const p = (id, conclusion) => ({ id, event: 'push', status: 'completed', conclusion })

test('the junk battery prices null (never a guessed verdict)', () => {
  for (const junk of [null, undefined, 'runs', 42, {}, true]) {
    assert.equal(fleetStormCadence(junk), null)
  }
})

test('the junk entries are skipped, never guessed', () => {
  const c = fleetStormCadence([null, 'x', 42, d(1, 'failure'), {}, []])
  assert.equal(c.stormCount, 1)
  assert.equal(c.sinceLast, 0)
  assert.deepEqual(c.gaps, [])
})

test('the empty lane is the unborn (stormCount 0, sinceLast null, not a guessed zero)', () => {
  const c = fleetStormCadence([])
  assert.equal(c.stormCount, 0)
  assert.deepEqual(c.gaps, [])
  assert.equal(c.sinceLast, null)
})

test('the push-only lane never storms (the push legs are the tree own face, not beats)', () => {
  const c = fleetStormCadence([p(1, 'failure'), p(2, 'failure'), p(3, 'success')])
  assert.equal(c.stormCount, 0)
  assert.equal(c.sinceLast, null)
})

test('the push reds between dispatch beats do not count (the dispatch rhythm only)', () => {
  const c = fleetStormCadence([p(9, 'failure'), d(1, 'success'), p(8, 'failure'), d(2, 'failure')])
  assert.equal(c.stormCount, 1)
  assert.equal(c.sinceLast, 1) // the storm is beat 1 - the clean dispatch above it carries beat 0, the push reds ride nothing
})

test('the newest dispatch IS the storm (sinceLast 0, the beat index zero)', () => {
  const c = fleetStormCadence([d(1, 'failure'), p(2, 'success'), d(3, 'success')])
  assert.equal(c.stormCount, 1)
  assert.equal(c.sinceLast, 0)
})

test('the beats since the newest storm speak (the storm older, the clean beats after)', () => {
  const c = fleetStormCadence([d(1, 'success'), p(2, 'success'), d(3, 'success'), d(4, 'failure')])
  assert.equal(c.stormCount, 1)
  assert.equal(c.sinceLast, 2)
  assert.deepEqual(c.gaps, [])
})

test('the single storm has no gap (gaps empty, the recurrence needs two faces)', () => {
  const c = fleetStormCadence([d(1, 'success'), d(2, 'failure'), d(3, 'success')])
  assert.deepEqual(c.gaps, [])
})

test('the two storms price the recurrence (the F589-to-F591 shape: one clean beat between)', () => {
  const c = fleetStormCadence([d(1, 'failure'), d(2, 'success'), d(3, 'failure')])
  assert.equal(c.stormCount, 2)
  assert.deepEqual(c.gaps, [2])
  assert.equal(c.sinceLast, 0)
})

test('the three storms price two gaps in the walk own order (never re-sorted)', () => {
  const c = fleetStormCadence([d(1, 'failure'), d(2, 'success'), d(3, 'success'), d(4, 'failure'), d(5, 'success'), d(6, 'failure')])
  assert.equal(c.stormCount, 3)
  assert.deepEqual(c.gaps, [3, 2])
  assert.equal(c.sinceLast, 0)
})

test('the cancelled run is a beat but never a storm (the concurrency own kill)', () => {
  const c = fleetStormCadence([d(1, 'failure'), d(2, 'cancelled'), d(3, 'failure')])
  assert.equal(c.stormCount, 2)
  assert.deepEqual(c.gaps, [2])
  assert.equal(c.sinceLast, 0)
})

test('the terminal dispatch is still a beat (the pulse carrier rule: in_progress rides too)', () => {
  const c = fleetStormCadence([d(1, 'success'), { id: 2, event: 'workflow_dispatch', status: 'in_progress', conclusion: null }, d(3, 'failure')])
  assert.equal(c.stormCount, 1)
  assert.equal(c.sinceLast, 2)
})

test('the no-storm lane after clean beats prices null sinceLast (the unborn law keeps)', () => {
  const c = fleetStormCadence([d(1, 'success'), d(2, 'success'), d(3, 'timed_out')])
  assert.equal(c.stormCount, 0)
  assert.equal(c.sinceLast, null)
})

test('the pure read mutates nothing (the caller array is the caller own)', () => {
  const runs = [d(1, 'failure'), p(2, 'success'), d(3, 'success')]
  const before = JSON.stringify(runs)
  fleetStormCadence(runs)
  assert.equal(JSON.stringify(runs), before)
})

test('no cap: a long storm ledger prices an honest longer gap list', () => {
  const runs = []
  for (let i = 0; i < 12; i++) runs.push(d(i, i % 4 === 0 ? 'failure' : 'success')) // storms at beats 0,4,8
  const c = fleetStormCadence(runs)
  assert.equal(c.stormCount, 3)
  assert.deepEqual(c.gaps, [4, 4])
  assert.equal(c.sinceLast, 0)
})
