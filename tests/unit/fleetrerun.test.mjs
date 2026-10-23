import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.415) THE FLEETRERUN INSTRUMENT - the lever's decision seat's pins.
import { fleetRerunWanted } from '../../src/lib/fleetrerun.mjs'

// the fire-1544 red page's own shape: F591 the wood-trip storm
const STORM_AUDIT = {
  reds: [{ id: 39913461886, headSha: 'd742361a', conclusion: 'failure' }],
  clean: false
}
const STORM_SPLIT = {
  fleet: { total: 1, failures: 1, successes: 0, failedIds: [814] },
  shards: { total: 2, failures: 0, successes: 2, failedIds: [] },
  integration: { total: 1, failures: 0, successes: 1, failedIds: [] },
  stormFace: true
}

test('the junk battery prices null (the lever never fires on data it cannot read)', () => {
  for (const junk of [null, undefined, 'audit', 42]) {
    assert.equal(fleetRerunWanted(junk, STORM_SPLIT), null)
    assert.equal(fleetRerunWanted(STORM_AUDIT, junk), null)
  }
  assert.equal(fleetRerunWanted({}, STORM_SPLIT), null)
  assert.equal(fleetRerunWanted({ reds: 'ladder' }, STORM_SPLIT), null)
})

test('the storm shape prices wanted (the precedent\'s own law, the addresses named)', () => {
  const v = fleetRerunWanted(STORM_AUDIT, STORM_SPLIT)
  assert.equal(v.wanted, true)
  assert.equal(v.reason, 'storm-face')
  assert.deepEqual(v.redIds, [39913461886])
  assert.deepEqual(v.jobIds, [814])
})

test('the clean page prices not-wanted (no reds, the lever stays seated)', () => {
  const v = fleetRerunWanted({ reds: [], clean: true }, STORM_SPLIT)
  assert.equal(v.wanted, false)
  assert.equal(v.reason, null)
  assert.deepEqual(v.redIds, [])
})

test('the real red prices not-wanted (the code broke its own gate, the fix lands first)', () => {
  const v = fleetRerunWanted(STORM_AUDIT, { ...STORM_SPLIT, stormFace: false })
  assert.equal(v.wanted, false)
  assert.equal(v.reason, null)
  assert.deepEqual(v.redIds, [39913461886])
  assert.deepEqual(v.jobIds, [814])
})

test('the ids ride even when not wanted (the autopsy queue keeps its addresses)', () => {
  const v = fleetRerunWanted({ reds: [{ id: 700, headSha: 'aaaa1111', conclusion: 'failure' }] }, { stormFace: false })
  assert.equal(v.wanted, false)
  assert.deepEqual(v.redIds, [700])
  assert.deepEqual(v.jobIds, [])
})

test('the multiple reds price both addresses (the queue the lever walks)', () => {
  const v = fleetRerunWanted({
    reds: [
      { id: 700, headSha: 'aaaa1111', conclusion: 'failure' },
      { id: 701, headSha: 'bbbb2222', conclusion: 'failure' }
    ]
  }, STORM_SPLIT)
  assert.equal(v.wanted, true)
  assert.deepEqual(v.redIds, [700, 701])
})

test('the junk entries inside the reds are skipped (the POST an undefined id would fire is no POST)', () => {
  const v = fleetRerunWanted({
    reds: [null, undefined, 42, 'run', { id: 'not-a-number' }, { id: 702, headSha: 'cccc3333', conclusion: 'failure' }]
  }, STORM_SPLIT)
  assert.deepEqual(v.redIds, [702])
  assert.equal(v.wanted, true)
})

test('the junk jobIds are filtered (the log download an undefined id would walk is no walk)', () => {
  const v = fleetRerunWanted(STORM_AUDIT, {
    stormFace: true,
    fleet: { failedIds: [null, 'job', 814] }
  })
  assert.deepEqual(v.jobIds, [814])
  assert.equal(v.wanted, true)
})

test('the missing fleet lane reads an empty job queue (no guess, no walk)', () => {
  const v = fleetRerunWanted(STORM_AUDIT, { stormFace: true })
  assert.deepEqual(v.jobIds, [])
  assert.equal(v.wanted, true)
})

test('the pure read mutates nothing (both inputs are the caller\'s own)', () => {
  const auditBefore = JSON.stringify(STORM_AUDIT)
  const splitBefore = JSON.stringify(STORM_SPLIT)
  fleetRerunWanted(STORM_AUDIT, STORM_SPLIT)
  assert.equal(JSON.stringify(STORM_AUDIT), auditBefore)
  assert.equal(JSON.stringify(STORM_SPLIT), splitBefore)
})
