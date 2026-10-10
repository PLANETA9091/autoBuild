// The water context's own join (v0.903.0) - the blind sensor's own cure.
//
// Measured background (face 183): the rescue's fifth visit broke the zero -
// 3 drown-kind deaths among 100 rescue starts (175: 61/0, 178: 51/0, 180:
// 56/0, 181: 34/0 were four consecutive zero-faces) - and ALL THREE rode the
// dead sensor: the misread direction drown->fall owned 3 of 3 sensor-blind
// confusions (v0.844.0's own 100.0% seat), each context holding the proof the
// inferrer never read ('o2 reset(-1), feet water, head water', two with the
// rescue leg RUNNING). The v0.844.0 row named the front: 'the direction's own
// front prices the blind sensor the raw split rode unnamed'. The law: the
// hostile name wins first, a REAL bar-zero drowns (the v0.64.0 domain gate),
// a submerged head with a stale bar drowns (this join), and a head-in-air
// fallback stays the honest gravity read - the v0.64.0 air-fall wound stays
// closed (a fall death needs air; water breaks every fall).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { lastHarmName, inferenceVerdict } from '../../src/lib/deathcause.mjs'
import { isWaterName } from '../../src/lib/drowning.mjs'

test('the hostile name wins first (the nearest-hostile scan owns its seat)', () => {
  assert.deepEqual(lastHarmName({ hostile: 'Drowned', drowning: true, headWater: true }), { name: 'Drowned', why: 'hostile' })
})

test('a REAL bar-zero drowns (the v0.64.0 domain gate upstream)', () => {
  assert.deepEqual(lastHarmName({ hostile: null, drowning: true, headWater: null }), { name: 'drowning', why: 'oxygen' })
})

test('THE FACE-183 SHAPE: a stale bar (-1) with the head submerged drowns', () => {
  // the exact sensor-dead shape: o2 reset(-1) leaves the domain, the bot
  // hp-drops submerged - the join reads the head cell the inferrer never did
  assert.deepEqual(lastHarmName({ hostile: null, drowning: false, headWater: true }), { name: 'drowning', why: 'submerged-stale-o2' })
})

test('the v0.64.0 wound stays closed: a head-in-air fallback stays the gravity read', () => {
  // the reset-window air fall: stale bar, dry head - the honest fall/env
  assert.deepEqual(lastHarmName({ hostile: null, drowning: false, headWater: false }), { name: 'fall/env', why: 'gravity-fallback' })
})

test('junk probes judge nothing (null headWater never drowns)', () => {
  // an unloaded chunk / a thrown probe reads null - the gravity fallback,
  // never a drowning claim the sensor cannot own (the v0.104.0 waterlog law)
  assert.deepEqual(lastHarmName({ hostile: null, drowning: false, headWater: null }), { name: 'fall/env', why: 'gravity-fallback' })
})

test('junk hostile shapes never win (non-string, empty)', () => {
  assert.deepEqual(lastHarmName({ hostile: 7, drowning: false, headWater: true }), { name: 'drowning', why: 'submerged-stale-o2' })
  assert.deepEqual(lastHarmName({ hostile: '', drowning: false, headWater: false }), { name: 'fall/env', why: 'gravity-fallback' })
  assert.deepEqual(lastHarmName({}), { name: 'fall/env', why: 'gravity-fallback' })
})

test('the head probe composes the boolean the join reads (isWaterName + the waterlog flag)', () => {
  // the wiring's own composition - the same law the airBarTrust/rescue share
  const headWater = (wr) => isWaterName(wr.head) || wr.headWaterlogged === true
  assert.equal(headWater({ head: 'water', headWaterlogged: false }), true)
  assert.equal(headWater({ head: 'oak_stairs', headWaterlogged: true }), true) // the v0.104.0 flag
  assert.equal(headWater({ head: 'air', headWaterlogged: false }), false)
  assert.equal(headWater({ head: null, headWaterlogged: false }), false)
})

test('THE CENSUS GUARD: the cured name rides the verdict law it always had', () => {
  // 'drowning' was ALWAYS a known hint (the v0.136.0 law) - the cured rows
  // now corroborate instead of riding the drown->fall blind class
  assert.equal(inferenceVerdict({ kind: 'drown' }, 'drowning'), 'corroborates')
  // the blind class keeps its own law: the fall/env hint on a drown death
  // reads blind, never contradicts (the v0.218.0 noise-by-construction row)
  assert.equal(inferenceVerdict({ kind: 'drown' }, 'fall/env'), 'blind')
})

test('the misread direction the cure retires (the face-183 audit shape)', () => {
  // face 183's three rows: kind=drown | inferred fall/env - the direction
  // v0.844.0 priced. With the join, the SAME deaths infer 'drowning' - the
  // direction's own front is consumed (the drown->fall class starves)
  assert.notEqual(inferenceVerdict({ kind: 'drown' }, 'drowning'), 'blind')
})
