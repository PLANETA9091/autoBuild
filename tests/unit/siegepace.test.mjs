import { test } from 'node:test'
import assert from 'node:assert/strict'
import { siegePaceRow, siegePaceConsistent } from '../../src/lib/siegepace.mjs'

test("the siege's own pace (v0.976.32) - the fold, the fence, the word", () => {
  // the FACE 323 / FACE 324 reads' own shapes byte-exact: the siege's
  // own pressure more than doubled between the walks - FACE 323's
  // clock rode 0.58 deaths/min (7 deaths over 720s), then FACE 324's
  // rode 1.22 (11 deaths over 540s) - the surge the max burst alone
  // underpriced
  const face323 = { deaths: 7, spanS: 720, pace: 0.58 }
  const face324 = { deaths: 11, spanS: 540, pace: 1.22 }
  assert.equal(siegePaceConsistent({ prev: face323, cur: face324 }), true)
  const row1 = siegePaceRow({ prev: face323, cur: face324 })
  assert.ok(row1.includes("the siege's own pace (v0.976.32): this face's 1.22 deaths/min rode above the prior face's 0.58 - the siege's own pressure grew between the walks"))
  assert.ok(row1.includes('(11 death(s) over 540s vs 7 over 720s - the sustained siege the max burst misses)'))
  // the ebb branch: a fallen pace prices the pressure eased
  const row2 = siegePaceRow({ prev: face324, cur: face323 })
  assert.ok(row2.includes("the siege's own pace (v0.976.32): this face's 0.58 deaths/min rode below the prior face's 1.22 - the siege's own pressure eased between the walks"))
  assert.ok(row2.includes('(7 death(s) over 720s vs 11 over 540s - the sustained siege the max burst misses)'))
  // a held pace prices the honest silence (the hold is no step's
  // subject)
  assert.equal(siegePaceRow({ prev: face323, cur: { deaths: 5, spanS: 520, pace: 0.58 } }), null)
  // the sparse clock prices no step (fewer than two timed deaths - no
  // span, no density: pace null either side)
  assert.equal(siegePaceRow({ prev: { deaths: 1, spanS: 0, pace: null }, cur: face324 }), null)
  assert.equal(siegePaceRow({ prev: face323, cur: { deaths: 0, spanS: 0, pace: null } }), null)
  // the junk seats
  assert.equal(siegePaceRow(null), null)
  assert.equal(siegePaceRow('junk'), null)
  assert.equal(siegePaceRow(undefined), null)
  assert.equal(siegePaceRow({ prev: face323 }), null)
  assert.equal(siegePaceRow({ prev: 'junk', cur: face324 }), null)
  assert.equal(siegePaceRow({ prev: [7], cur: face324 }), null)
  assert.equal(siegePaceRow({ prev: face323, cur: 42 }), null)
  assert.equal(siegePaceConsistent(null), false)
  assert.equal(siegePaceConsistent(42), false)
  assert.equal(siegePaceConsistent([11]), false)
  assert.equal(siegePaceConsistent({ prev: face323 }), false)
})

test("the siege's own pace fence (v0.976.32) - the image, the density, the lie", () => {
  const base = { prev: { deaths: 7, spanS: 720, pace: 0.58 }, cur: { deaths: 11, spanS: 540, pace: 1.22 } }
  assert.equal(siegePaceConsistent(base), true)
  // the honest zeros: a zero-death clock is a legal integer shape
  // (the fence prices the image, the row prices the silence)
  assert.equal(siegePaceConsistent({ prev: { deaths: 0, spanS: 0, pace: null }, cur: { deaths: 0, spanS: 0, pace: null } }), true)
  // the deaths ride a non-negative integer (either face)
  assert.equal(siegePaceConsistent({ ...base, prev: { ...base.prev, deaths: 1.5 } }), false, 'a fractional death count lies')
  assert.equal(siegePaceConsistent({ ...base, cur: { ...base.cur, deaths: -1 } }), false, 'a negative death count lies')
  assert.equal(siegePaceConsistent({ ...base, cur: { ...base.cur, deaths: null } }), false, 'a missing death count lies')
  // the span rides a non-negative integer (either face)
  assert.equal(siegePaceConsistent({ ...base, prev: { ...base.prev, spanS: 1.5 } }), false, 'a fractional span lies')
  assert.equal(siegePaceConsistent({ ...base, cur: { ...base.cur, spanS: -540 } }), false, 'a negative span lies')
  // the pair law: the pace is the deaths' own density over the span -
  // null exactly when the span cannot price, the cells' own
  // arithmetic when it can
  assert.equal(siegePaceConsistent({ ...base, prev: { ...base.prev, spanS: 0 } }), false, 'a priced pace over a dead span lies')
  assert.equal(siegePaceConsistent({ ...base, cur: { ...base.cur, spanS: 600 } }), false, 'a pace that disagrees with its own cells lies')
  assert.equal(siegePaceConsistent({ ...base, cur: { ...base.cur, pace: null } }), false, 'a null pace over a live span lies')
  assert.equal(siegePaceConsistent({ ...base, prev: { ...base.prev, pace: 7 / 12 } }), false, 'an unrounded pace lies (the census\'s own 2dp law)')
  // the pace rides a finite non-negative number (either face)
  assert.equal(siegePaceConsistent({ ...base, cur: { ...base.cur, pace: NaN } }), false, 'a NaN pace lies')
  assert.equal(siegePaceConsistent({ ...base, cur: { ...base.cur, pace: -1.22 } }), false, 'a negative pace lies')
  assert.equal(siegePaceConsistent({ ...base, prev: { ...base.prev, pace: '0.58' } }), false, 'a string pace lies')
})
