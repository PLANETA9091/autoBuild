// (v0.905.0) THE SUBMERGED HOSTILE'S OWN DEMOTION - submergedHostileDemotes,
// the face-185 read's own cure. Face 185 (38069268290, the v0.903.0 join's
// first field read) priced the priority law's hole: drown->mob owned 1 of 1
// sensor-blind confusions (100.0%) - F6's 'creeper@15.7' read CONTRADICTS
// against the server's own 'drowned' while the context held 'o2 reset(-1),
// feet water, head water' (the EXACT shape the join cures). The dead
// sensor's hostile is a proximity witness, not a verdict. The demotion
// fires ONLY on the exact ambiguous shape; junk judges nothing.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { submergedHostileDemotes, lastHarmName } from '../../src/lib/deathcause.mjs'

test('THE FACE-185 SHAPE: the dead-sensor proximity hostile demotes on the stale+submerged ambiguity', () => {
  assert.equal(submergedHostileDemotes({ hostile: 'creeper@15.7', drowning: false, o2InDomain: false, headWater: true }), true)
})

test('a live-bar submerged bot keeps the hostile (a real underwater mob kill is not this class)', () => {
  assert.equal(submergedHostileDemotes({ hostile: 'zombie@2', drowning: false, o2InDomain: true, headWater: true }), false)
})

test('a real bar-zero drowner never demotes (the oxygen seat owns it upstream)', () => {
  assert.equal(submergedHostileDemotes({ hostile: 'drowned@3', drowning: true, o2InDomain: false, headWater: true }), false)
})

test('a dry or unprobed head keeps the hostile (the water context must hold the proof)', () => {
  assert.equal(submergedHostileDemotes({ hostile: 'skeleton@8', drowning: false, o2InDomain: false, headWater: false }), false)
  assert.equal(submergedHostileDemotes({ hostile: 'skeleton@8', drowning: false, o2InDomain: false, headWater: null }), false)
})

test('junk hostile shapes demote nothing (the name law holds)', () => {
  for (const hostile of [null, undefined, 42, {}, [], true, '']) {
    assert.equal(submergedHostileDemotes({ hostile, drowning: false, o2InDomain: false, headWater: true }), false, `hostile=${JSON.stringify(hostile)}`)
  }
})

test('junk probes judge nothing (non-boolean o2InDomain/headWater read the legacy keep)', () => {
  for (const o2InDomain of [null, undefined, 'no', 1]) {
    assert.equal(submergedHostileDemotes({ hostile: 'creeper@15.7', drowning: false, o2InDomain, headWater: true }), false, `o2InDomain=${String(o2InDomain)}`)
  }
  for (const headWater of [null, undefined, 'yes', 0]) {
    assert.equal(submergedHostileDemotes({ hostile: 'creeper@15.7', drowning: false, o2InDomain: false, headWater }), false, `headWater=${String(headWater)}`)
  }
})

test('THE CENSUS GUARD - zero new vocabulary: the demoted read lands in the existing submerged-stale-o2 class', () => {
  // the site nulls the hostile name, the composer reads the existing branch
  assert.deepEqual(lastHarmName({ hostile: null, drowning: false, headWater: true }), { name: 'drowning', why: 'submerged-stale-o2' })
  // the untouched legacy rows byte for byte: the hostile seat, the real zero, the dry fall
  assert.deepEqual(lastHarmName({ hostile: 'zombie@2', drowning: true, headWater: null }), { name: 'zombie@2', why: 'hostile' })
  assert.deepEqual(lastHarmName({ hostile: null, drowning: true, headWater: null }), { name: 'drowning', why: 'oxygen' })
  assert.deepEqual(lastHarmName({ hostile: null, drowning: false, headWater: false }), { name: 'fall/env', why: 'gravity-fallback' })
})
