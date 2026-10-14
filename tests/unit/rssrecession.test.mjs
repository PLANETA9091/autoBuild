import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rssRecessionRow, rssRecessionConsistent } from '../../src/lib/rssrecession.mjs'

test("the rss's own recession (v0.976.28) - the fold, the fence, the word", () => {
  // the FACE 320 / FACE 321 reads' own shapes byte-exact: the climb
  // gave back its gain and went below the pre-climb floor - FACE
  // 320's 399M rode 34M below FACE 319's 433M, then FACE 321's 391M
  // rode 8M below FACE 320's 399M - two consecutive falls (the creep's
  // word priced both the honest null, the rise is its subject)
  const face320 = { peakM: 399, valveClosures: 0 }
  const face321 = { peakM: 391, valveClosures: 1 }
  assert.equal(rssRecessionConsistent({ prev: face320, cur: face321 }), true)
  const row1 = rssRecessionRow({ prev: face320, cur: face321 })
  assert.ok(row1.includes("the rss's own recession (v0.976.28): this face's peak 391M rode 8M below the prior face's 399M peak"))
  assert.ok(row1.includes("- the waterline fell between the walks (the recovery is the fall's own name - the rise belongs to the creep's word; the valve's own voice: 0 closure(s) prior, 1 this face)"))
  // the word's FIRST field read: FACE 320's own -34M fall (the climb's
  // whole gain given back in one face)
  const row2 = rssRecessionRow({ prev: { peakM: 433, valveClosures: 0 }, cur: face320 })
  assert.ok(row2.includes("this face's peak 399M rode 34M below the prior face's 433M peak"))
  // the branch law: a RISEN waterline prices the honest silence (the
  // rise belongs to the creep's word, v0.976.21) - the FACE 319
  // <- FACE 318 rise pair's own read (428 -> 433)
  assert.equal(rssRecessionRow({ prev: { peakM: 428, valveClosures: 2 }, cur: { peakM: 433, valveClosures: 0 } }), null)
  // a HELD waterline prices the honest silence too (the hold is
  // neither word's subject)
  assert.equal(rssRecessionRow({ prev: face320, cur: { peakM: 399, valveClosures: 0 } }), null)
  // a peakless face prices no recession
  assert.equal(rssRecessionRow({ prev: { peakM: null, valveClosures: 0 }, cur: face321 }), null)
  assert.equal(rssRecessionRow({ prev: face320, cur: { peakM: null, valveClosures: 0 } }), null)
  // the junk seats
  assert.equal(rssRecessionRow(null), null)
  assert.equal(rssRecessionRow('junk'), null)
  assert.equal(rssRecessionRow(undefined), null)
  assert.equal(rssRecessionRow({ prev: face320 }), null)
  assert.equal(rssRecessionRow({ prev: 'junk', cur: face321 }), null)
  assert.equal(rssRecessionRow({ prev: [399], cur: face321 }), null)
  assert.equal(rssRecessionRow({ prev: face320, cur: 42 }), null)
  assert.equal(rssRecessionConsistent(null), false)
  assert.equal(rssRecessionConsistent(42), false)
  assert.equal(rssRecessionConsistent([391]), false)
  assert.equal(rssRecessionConsistent({ prev: face320 }), false)
})

test("the rss's own recession fence (v0.976.28) - the image, the peak, the lie", () => {
  const base = { prev: { peakM: 399, valveClosures: 0 }, cur: { peakM: 391, valveClosures: 1 } }
  assert.equal(rssRecessionConsistent(base), true)
  // the honest zeros: a zero peak is a legal integer shape (the fence
  // prices the image, the row prices the silence)
  assert.equal(rssRecessionConsistent({ prev: { peakM: 0, valveClosures: 0 }, cur: { peakM: 0, valveClosures: 0 } }), true)
  // the peak rides a non-negative integer (either face)
  assert.equal(rssRecessionConsistent({ ...base, prev: { ...base.prev, peakM: 1.5 } }), false, 'a fractional peak lies')
  assert.equal(rssRecessionConsistent({ ...base, cur: { ...base.cur, peakM: -1 } }), false, 'a negative peak lies')
  assert.equal(rssRecessionConsistent({ ...base, prev: { ...base.prev, peakM: null } }), false, 'a missing peak lies (the fence prices the image)')
  // the valve count rides a non-negative integer (either face)
  assert.equal(rssRecessionConsistent({ ...base, prev: { ...base.prev, valveClosures: 1.5 } }), false, 'a fractional valve count lies')
  assert.equal(rssRecessionConsistent({ ...base, cur: { ...base.cur, valveClosures: -1 } }), false, 'a negative valve count lies')
  assert.equal(rssRecessionConsistent({ ...base, cur: { ...base.cur, valveClosures: null } }), false, 'a missing valve count lies')
})
