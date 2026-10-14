import { test } from 'node:test'
import assert from 'node:assert/strict'
import { groundDeepRow, groundDeepConsistent, groundDeep } from '../../src/lib/grounddeep.mjs'

// the field's own ground images (deathGrounds over the cached logs,
// byte-exact): FACE 317's drowned shore, FACE 318's single, FACE
// 319's single, FACE 320's single
const face317 = {
  combatDeaths: 10,
  blind: 0,
  grounds: [
    { x: -143, z: 395, n: 5, killers: { Drowned: 5 } },
    { x: -148, z: 410, n: 3, killers: { Drowned: 3 } },
    { x: -168, z: 410, n: 1, killers: { Drowned: 1 } },
    { x: -128, z: 397, n: 1, killers: { Drowned: 1 } }
  ]
}
const face318 = { combatDeaths: 1, blind: 0, grounds: [{ x: -102, z: 363, n: 1, killers: { Drowned: 1 } }] }
const face319 = { combatDeaths: 1, blind: 0, grounds: [{ x: -127, z: 436, n: 1, killers: { Creeper: 1 } }] }
const face320 = { combatDeaths: 1, blind: 0, grounds: [{ x: -137, z: 391, n: 1, killers: { Drowned: 1 } }] }

test("the ground's own deep echo (v0.976.26) - the fold, the fence, the word", () => {
  // the FACE 317 -> 318 -> 319 -> 320 reads' own shape byte-exact:
  // FACE 320's single [-137,391] missed the adjacent face (-127,436:
  // dz 45) and the two-back face (-102,363: dx 35) both, yet rode
  // FACE 317's own [-143,395] x5 at dx 6 / dz 4 - the SAME Drowned
  // shore taking the drowners across three walks
  const e = { cur: face320, priors: [face319, face318, face317] }
  assert.equal(groundDeepConsistent(e), true)
  const row1 = groundDeepRow(e)
  assert.ok(row1.includes("the ground's own deep echo (v0.976.26): 1 of this face's 1 ground(s) rode the older faces' ground(s) past the gap"))
  assert.ok(row1.includes("this face's [-137,391] x1 (Drowned:1) rode the 3-back face's [-143,395] x5 (Drowned:5) across 2 gap face(s)"))
  assert.ok(row1.includes("- the nest's own ground recurring across the skipped walks (the adjacent face's own miss priced the honest silence, the deep ride is the subject)"))
  // the branch law: a ground the ADJACENT face already carries
  // belongs to the one-face echo - never re-priced here (even when an
  // older face's ground rides the radius too: this cur ground rides
  // the synthesized adjacent face's [-140,395] AND FACE 317's
  // [-143,395] - the one-face echo owns it, the deep fold prices the
  // honest null)
  const branch = groundDeepRow({
    cur: { combatDeaths: 2, blind: 0, grounds: [{ x: -140, z: 393, n: 1, killers: { Drowned: 1 } }] },
    priors: [{ combatDeaths: 1, blind: 0, grounds: [{ x: -140, z: 395, n: 1, killers: { Creeper: 1 } }] }, face317]
  })
  assert.equal(branch, null, 'the adjacent match belongs to the one-face echo')
  // the nearest-first law: a ground riding TWO older faces' radius
  // prices the nearest older face (the first-fit across the priors'
  // own order)
  const near = groundDeepRow({
    cur: { combatDeaths: 1, blind: 0, grounds: [{ x: -143, z: 396, n: 1, killers: { Drowned: 1 } }] },
    priors: [face318, face317, face317]
  })
  assert.ok(near.includes('rode the 2-back face\'s [-143,395] x5 (Drowned:5) across 1 gap face(s)'))
  // the ground is a region: two cur grounds may ride ONE prior
  // ground (the relation never consumes) - both pairs priced
  const region = groundDeep({
    cur: { combatDeaths: 2, blind: 0, grounds: [{ x: -140, z: 393, n: 1, killers: { Drowned: 1 } }, { x: -146, z: 397, n: 1, killers: { Drowned: 1 } }] },
    priors: [face318, face317]
  })
  assert.equal(region.pairs.length, 2)
  assert.equal(region.ofGrounds, 2)
  // the honest silences: a single prior prices no read (the deep echo
  // needs the adjacent face AND at least one older face), a
  // groundless this-face prices no echo, a no-match fold prices the
  // honest silence
  assert.equal(groundDeepRow({ cur: face320, priors: [face319] }), null)
  assert.equal(groundDeepRow({ cur: { combatDeaths: 0, blind: 0, grounds: [] }, priors: [face319, face318, face317] }), null)
  assert.equal(groundDeepRow({ cur: { combatDeaths: 1, blind: 0, grounds: [{ x: 500, z: 500, n: 1, killers: { Creeper: 1 } }] }, priors: [face319, face318, face317] }), null)
  // the junk seats
  assert.equal(groundDeepRow(null), null)
  assert.equal(groundDeepRow('junk'), null)
  assert.equal(groundDeepRow(undefined), null)
  assert.equal(groundDeepRow({ cur: face320 }), null)
  assert.equal(groundDeepRow({ cur: face320, priors: [] }), null)
  assert.equal(groundDeepConsistent(null), false)
  assert.equal(groundDeepConsistent(42), false)
  assert.equal(groundDeepConsistent({ cur: face320, priors: 'junk' }), false)
  assert.equal(groundDeepConsistent({ cur: face320, priors: [] }), false)
  assert.equal(groundDeepConsistent({ cur: face320, priors: [face319, 'junk'] }), false)
})

test("the ground's own deep echo fence (v0.976.26) - the image, the place, the lie", () => {
  const base = { cur: face320, priors: [face319, face318] }
  assert.equal(groundDeepConsistent(base), true)
  // a single prior is a legal fence shape (the fence prices the
  // images, the fold prices the depth)
  assert.equal(groundDeepConsistent({ cur: face320, priors: [face319] }), true)
  // the place rides integers (either image)
  assert.equal(groundDeepConsistent({ ...base, cur: { ...base.cur, grounds: [{ x: -1.5, z: 391, n: 1, killers: { Drowned: 1 } }] } }), false, 'a fractional place lies')
  assert.equal(groundDeepConsistent({ ...base, priors: [face319, { ...face318, grounds: [{ x: -102, z: 363, n: 0, killers: { Drowned: 1 } }] }] }), false, 'a zero count lies')
  // the killers' tallies ride positive integers (an empty tally is the
  // census's own legal shape - the display never invents a voice)
  assert.equal(groundDeepConsistent({ ...base, cur: { ...base.cur, grounds: [{ x: -137, z: 391, n: 1, killers: { Drowned: 0 } }] } }), false, 'a zero tally voice lies')
  assert.equal(groundDeepConsistent({ ...base, cur: { ...base.cur, grounds: [{ x: -137, z: 391, n: 1, killers: { Drowned: 1 } }] }, priors: [face319, { ...face318, grounds: [{ x: -102, z: 363, n: 1, killers: {} }] }] }), true, 'an empty tally is the census\'s own legal shape')
  assert.equal(groundDeepConsistent({ ...base, priors: [face319, { ...face318, grounds: [{ x: -102, z: 363, n: 1, killers: 'junk' }] }] }), false, 'a string tally lies')
  // the counters ride non-negative integers
  assert.equal(groundDeepConsistent({ ...base, cur: { ...base.cur, combatDeaths: -1 } }), false, 'a negative death count lies')
  assert.equal(groundDeepConsistent({ ...base, priors: [face319, { ...face318, blind: 1.5 }] }), false, 'a fractional blind count lies')
  assert.equal(groundDeepConsistent({ ...base, cur: { ...base.cur, grounds: 'junk' } }), false, 'a string grounds rides the lie')
})
