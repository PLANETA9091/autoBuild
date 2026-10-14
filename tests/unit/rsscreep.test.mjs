import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rssCreepRow, rssCreepConsistent } from '../../src/lib/rsscreep.mjs'

test("the rss's own creep (v0.976.21) - the fold, the fence, the word", () => {
  // the FACE 313 = 38472967646 / FACE 314 = 38480563295 reads' own
  // shapes byte-exact: the waterline rose 511M -> 546M between the
  // back-to-back faces while the valve never spoke - the hand-priced
  // creep the fire 0700 read named (500 -> 511 -> 546M three faces)
  const face313 = { peakM: 511, valveClosures: 0 }
  const face314 = { peakM: 546, valveClosures: 0 }
  assert.equal(rssCreepConsistent({ prev: face313, cur: face314 }), true)
  const row1 = rssCreepRow({ prev: face313, cur: face314 })
  assert.ok(row1.includes("the rss's own creep (v0.976.21): this face's peak 546M rode 35M above the prior face's 511M peak"))
  assert.ok(row1.includes('the waterline rose between the walks (the valve\'s own voice: 0 closure(s) prior, 0 this face)'))
  // the valve's voice rides as context bytes: a face the valve priced
  // names the closures, the creep priced regardless (co-existence
  // reported, causation never guessed)
  const row2 = rssCreepRow({ prev: { peakM: 500, valveClosures: 2 }, cur: { peakM: 546, valveClosures: 1 } })
  assert.ok(row2.includes("this face's peak 546M rode 46M above the prior face's 500M peak"))
  assert.ok(row2.includes("the valve's own voice: 2 closure(s) prior, 1 this face"))
  // the honest silences: the waterline held or fell (the creep is the
  // RISE) - FACE 315's own 399M read prices the fall's honest null
  assert.equal(rssCreepRow({ prev: face314, cur: { peakM: 399, valveClosures: 0 } }), null)
  assert.equal(rssCreepRow({ prev: face313, cur: { peakM: 511, valveClosures: 0 } }), null)
  // a peakless face prices no creep
  assert.equal(rssCreepRow({ prev: { peakM: null, valveClosures: 0 }, cur: face314 }), null)
  assert.equal(rssCreepRow({ prev: face313, cur: { peakM: null, valveClosures: 0 } }), null)
  // the junk seats
  assert.equal(rssCreepRow(null), null)
  assert.equal(rssCreepRow('junk'), null)
  assert.equal(rssCreepRow(undefined), null)
  assert.equal(rssCreepRow({ prev: face313 }), null)
  assert.equal(rssCreepRow({ prev: 'junk', cur: face314 }), null)
  assert.equal(rssCreepRow({ prev: [511], cur: face314 }), null)
  assert.equal(rssCreepRow({ prev: face313, cur: 42 }), null)
  assert.equal(rssCreepConsistent(null), false)
  assert.equal(rssCreepConsistent(42), false)
  assert.equal(rssCreepConsistent([511]), false)
  assert.equal(rssCreepConsistent({ prev: face313 }), false)
})

test("the rss's own creep fence (v0.976.21) - the image, the peak, the lie", () => {
  const base = { prev: { peakM: 511, valveClosures: 0 }, cur: { peakM: 546, valveClosures: 0 } }
  assert.equal(rssCreepConsistent(base), true)
  // the honest zeros: a zero peak is a legal integer shape (the fence
  // prices the image, the row prices the silence)
  assert.equal(rssCreepConsistent({ prev: { peakM: 0, valveClosures: 0 }, cur: { peakM: 0, valveClosures: 0 } }), true)
  // the peak rides a non-negative integer (either face)
  assert.equal(rssCreepConsistent({ ...base, prev: { ...base.prev, peakM: 1.5 } }), false, 'a fractional peak lies')
  assert.equal(rssCreepConsistent({ ...base, cur: { ...base.cur, peakM: -1 } }), false, 'a negative peak lies')
  assert.equal(rssCreepConsistent({ ...base, prev: { ...base.prev, peakM: null } }), false, 'a missing peak lies (the fence prices the image)')
  assert.equal(rssCreepConsistent({ ...base, cur: { ...base.cur, peakM: null } }), false, 'the cur peak lies the same way')
  // the valve count rides a non-negative integer (either face)
  assert.equal(rssCreepConsistent({ ...base, prev: { ...base.prev, valveClosures: 1.5 } }), false, 'a fractional valve count lies')
  assert.equal(rssCreepConsistent({ ...base, cur: { ...base.cur, valveClosures: -1 } }), false, 'a negative valve count lies')
  assert.equal(rssCreepConsistent({ ...base, prev: { ...base.prev, valveClosures: null } }), false, 'a missing valve count lies')
})
