// (v0.976.486) The geode word's own test battery - the amethyst
// supply lane's honest forms: the junk battery, the floor law, the
// GEODE-EMPTY GATE (the keep, never a defer), the gate order (the
// geode beats the pick-short), the PICK-SHORT defer's named mint,
// the break's own arithmetic, the CLUSTER LAW's deterministic four,
// the no-cap law, the fractional remainder, the no-mutation purity,
// the vanilla pin.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { decideGeodeTrip, GEODE_SHARDS_PER_CLUSTER, GEODE_CLUSTERS_PER_BREAK } from '../../src/lib/geode.mjs'

test('vanilla pin: one mature cluster breaks into four shards', () => {
  assert.equal(GEODE_SHARDS_PER_CLUSTER, 4)
  assert.equal(GEODE_CLUSTERS_PER_BREAK, 1)
})

test('junk: NaN clusters refuse', () => {
  const r = decideGeodeTrip({ clustersCount: NaN, picksCount: 1 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
  assert.equal(r.breaks, 0)
})

test('junk: Infinity picks refuse', () => {
  const r = decideGeodeTrip({ clustersCount: 2, picksCount: Infinity })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: boolean clusters refuse (a true count is a flag, never a number)', () => {
  const r = decideGeodeTrip({ clustersCount: true, picksCount: 1 })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('junk: string picks refuse', () => {
  const r = decideGeodeTrip({ clustersCount: 2, picksCount: '1' })
  assert.equal(r.action, 'refuse')
  assert.equal(r.reason, 'junk-input')
})

test('floor law: negative clusters read as zero (the geode-empty keep)', () => {
  const r = decideGeodeTrip({ clustersCount: -4, picksCount: 2 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'geode-empty')
})

test('floor law: negative picks read as zero (the pick-short defer)', () => {
  const r = decideGeodeTrip({ clustersCount: 3, picksCount: -1 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'pick-short')
})

test('GEODE-EMPTY GATE: no cluster in reach reads the keep, never a defer', () => {
  const r = decideGeodeTrip({ clustersCount: 0, picksCount: 2 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'geode-empty')
  assert.equal(r.breaks, 0)
})

test('gate order: the geode gate beats the pick-short (the world reads first)', () => {
  const r = decideGeodeTrip({ clustersCount: 0, picksCount: 0 })
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'geode-empty')
})

test('PICK-SHORT: the bare pocket defers with the toolcraft mint named', () => {
  const r = decideGeodeTrip({ clustersCount: 5, picksCount: 0 })
  assert.equal(r.action, 'defer')
  assert.equal(r.reason, 'pick-short')
  assert.equal(r.breaks, 0)
  assert.equal(r.clustersLeft, 5)
})

test('break: the stocked geode and the pocket pick earn the walk', () => {
  const r = decideGeodeTrip({ clustersCount: 3, picksCount: 1 })
  assert.equal(r.action, 'break')
  assert.equal(r.reason, 'clusters-and-pick-afford')
  assert.equal(r.breaks, 3)
  assert.equal(r.shardsYield, 12)
  assert.equal(r.clustersLeft, 0)
})

test('THE CLUSTER LAW: one cluster prices its own deterministic four', () => {
  const r = decideGeodeTrip({ clustersCount: 1, picksCount: 1 })
  assert.equal(r.action, 'break')
  assert.equal(r.breaks, 1)
  assert.equal(r.shardsYield, 4)
})

test('no cap: a geode-rich census prices every break it affords', () => {
  const r = decideGeodeTrip({ clustersCount: 200, picksCount: 1 })
  assert.equal(r.action, 'break')
  assert.equal(r.breaks, 200)
  assert.equal(r.shardsYield, 800)
})

test('fractional census floors honestly with the remainder named', () => {
  const r = decideGeodeTrip({ clustersCount: 2.5, picksCount: 1 })
  assert.equal(r.action, 'break')
  assert.equal(r.breaks, 2)
  assert.equal(r.shardsYield, 8)
  assert.equal(r.clustersLeft, 0.5)
})

test('no mutation: the pure read leaves the input untouched', () => {
  const input = { clustersCount: 4, picksCount: 1 }
  const snapshot = JSON.stringify(input)
  decideGeodeTrip(input)
  assert.equal(JSON.stringify(input), snapshot)
})

test('empty call: the honest geode-empty read stands', () => {
  const r = decideGeodeTrip({})
  assert.equal(r.action, 'keep')
  assert.equal(r.reason, 'geode-empty')
  const s = decideGeodeTrip({ picksCount: 1 })
  assert.equal(s.action, 'keep')
  assert.equal(s.reason, 'geode-empty')
})
