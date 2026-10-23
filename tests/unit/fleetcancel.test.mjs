import test from 'node:test'
import assert from 'node:assert/strict'
// (v0.976.418) THE FLEETCANCEL INSTRUMENT - the cancel lever's decision seat's pins.
import { fleetCancelWanted } from '../../src/lib/fleetcancel.mjs'

// the zombie page's own shape: the fleetlane sibling's verdict
// (fleetZombies' own arithmetic, the fence + the in-flight class)
const ZOMBIE_VERDICT = {
  fenceMs: 7200000,
  zombies: [
    { id: 39988253366, headSha: 'd1c280bb', status: 'in_progress', ageMs: 9000000, createdAt: '2026-10-23T16:37:00Z' }
  ]
}

test('the junk battery prices null (the lever never fires on data it cannot read)', () => {
  for (const junk of [null, undefined, 'verdict', 42, [], {}, { fenceMs: 7200000 }, { zombies: 'ladder' }]) {
    assert.equal(fleetCancelWanted(junk), null)
  }
})

test('the zombie shape prices wanted (the hostage-free law, the addresses named)', () => {
  const v = fleetCancelWanted(ZOMBIE_VERDICT)
  assert.equal(v.wanted, true)
  assert.equal(v.reason, 'zombie-fence')
  assert.deepEqual(v.runIds, [39988253366])
})

test('the empty fence prices not-wanted (no zombies, the lever stays seated)', () => {
  const v = fleetCancelWanted({ fenceMs: 7200000, zombies: [] })
  assert.equal(v.wanted, false)
  assert.equal(v.reason, null)
  assert.deepEqual(v.runIds, [])
})

test('the multiple zombies ride in the caller\'s order (the walk never re-sorts)', () => {
  const v = fleetCancelWanted({
    zombies: [
      { id: 39980000001, status: 'in_progress', ageMs: 8000000 },
      { id: 39980000002, status: 'queued', ageMs: 9500000 },
      { id: 39980000003, status: 'pending', ageMs: 10000000 }
    ]
  })
  assert.equal(v.wanted, true)
  assert.deepEqual(v.runIds, [39980000001, 39980000002, 39980000003])
})

test('the junk entries inside the zombies are skipped (the POST an undefined id would fire is no POST)', () => {
  const v = fleetCancelWanted({
    zombies: [null, undefined, 42, 'run', { id: 'not-a-number' }, { id: 39981033303.5 }, { id: 39988253366, status: 'in_progress' }]
  })
  assert.deepEqual(v.runIds, [39988253366])
  assert.equal(v.wanted, true)
})

test('the all-junk page prices not-wanted (a zombie class with no honest id names no POST)', () => {
  const v = fleetCancelWanted({
    zombies: [null, { headSha: 'd1c280bb' }, { id: '39988253366' }]
  })
  assert.equal(v.wanted, false)
  assert.equal(v.reason, null)
  assert.deepEqual(v.runIds, [])
})

test('the string id is junk (the digital channel\'s own law - the id is an integer, never a string)', () => {
  const v = fleetCancelWanted({ zombies: [{ id: '39988253366' }, { id: 700 }] })
  assert.deepEqual(v.runIds, [700])
})

test('the big F-run id rides intact (the integer channel has no cap)', () => {
  const v = fleetCancelWanted({ zombies: [{ id: 39981033303, status: 'in_progress' }] })
  assert.deepEqual(v.runIds, [39981033303])
})

test('the ids ride whatever the wanted boolean speaks (the verdict carries only the decision\'s own keys)', () => {
  const v = fleetCancelWanted(ZOMBIE_VERDICT)
  assert.deepEqual(Object.keys(v).sort(), ['reason', 'runIds', 'wanted'])
})

test('the pure read mutates nothing (the verdict is the caller\'s own)', () => {
  const before = JSON.stringify(ZOMBIE_VERDICT)
  fleetCancelWanted(ZOMBIE_VERDICT)
  assert.equal(JSON.stringify(ZOMBIE_VERDICT), before)
})
