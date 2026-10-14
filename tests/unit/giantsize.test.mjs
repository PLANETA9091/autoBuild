import { test } from 'node:test'
import assert from 'node:assert/strict'
import { giantSizeRow, giantSizeConsistent } from '../../src/lib/giantsize.mjs'

test("the giant's own size (v0.976.33) - the fold, the fence, the word", () => {
  // the FACE 313 / FACE 314 reads' own shapes byte-exact: the stall's
  // own depth GREW between the walks - FACE 313's giant rode 57526ms,
  // then FACE 314's rode 75368ms - 17842ms deeper (the record's own
  // step)
  const face313 = { giantMs: 57526, freezes: 0 }
  const face314 = { giantMs: 75368, freezes: 0 }
  assert.equal(giantSizeConsistent({ prev: face313, cur: face314 }), true)
  const row1 = giantSizeRow({ prev: face313, cur: face314 })
  assert.ok(row1.includes("the giant's own size (v0.976.33): this face's 75368ms giant rode 17842ms deeper than the prior face's 57526ms giant - the giant's own depth grew between the walks"))
  assert.ok(row1.includes("(the seat's own where is the echo's word, the lane's own when is the when's word - the size is this word's subject)"))
  // the ease branch: FACE 323's 45012ms giant rode shallower than FACE
  // 314's 75368ms record (the field's own later step, priced synthetically)
  const row2 = giantSizeRow({ prev: face314, cur: { giantMs: 45012, freezes: 0 } })
  assert.ok(row2.includes("the giant's own size (v0.976.33): this face's 45012ms giant rode 30356ms shallower than the prior face's 75368ms giant - the giant's own depth eased between the walks"))
  // a held size prices the honest silence (the hold is no step's
  // subject)
  assert.equal(giantSizeRow({ prev: face314, cur: { giantMs: 75368, freezes: 0 } }), null)
  // the sparse giant book: a max under the ring's own threshold is no
  // giant's size - a giant against no giant steps nothing (FACE 324's
  // 1681ms face owns no giant)
  assert.equal(giantSizeRow({ prev: { giantMs: 1681, freezes: 0 }, cur: { giantMs: 75350, freezes: 0 } }), null)
  assert.equal(giantSizeRow({ prev: face313, cur: { giantMs: 1681, freezes: 0 } }), null)
  // the family's own seat law: a face the ring dumped has no giant's
  // seat - the freeze row owns the story, the size rides nothing
  assert.equal(giantSizeRow({ prev: face313, cur: { giantMs: 75350, freezes: 1 } }), null)
  assert.equal(giantSizeRow({ prev: { giantMs: 57526, freezes: 2 }, cur: face314 }), null)
  // the junk seats
  assert.equal(giantSizeRow(null), null)
  assert.equal(giantSizeRow('junk'), null)
  assert.equal(giantSizeRow(undefined), null)
  assert.equal(giantSizeRow({ prev: face313 }), null)
  assert.equal(giantSizeRow({ prev: 'junk', cur: face314 }), null)
  assert.equal(giantSizeRow({ prev: [57526], cur: face314 }), null)
  assert.equal(giantSizeRow({ prev: face313, cur: 42 }), null)
  assert.equal(giantSizeConsistent(null), false)
  assert.equal(giantSizeConsistent(42), false)
  assert.equal(giantSizeConsistent([75368]), false)
  assert.equal(giantSizeConsistent({ prev: face313 }), false)
})

test("the giant's own size fence (v0.976.33) - the image, the threshold, the lie", () => {
  const base = { prev: { giantMs: 57526, freezes: 0 }, cur: { giantMs: 75368, freezes: 0 } }
  assert.equal(giantSizeConsistent(base), true)
  // the honest zeros: a zero max is a legal integer shape (the fence
  // prices the image, the row prices the threshold's silence)
  assert.equal(giantSizeConsistent({ prev: { giantMs: 0, freezes: 0 }, cur: { giantMs: 0, freezes: 0 } }), true)
  // the giantMs rides a non-negative integer (either face)
  assert.equal(giantSizeConsistent({ ...base, prev: { ...base.prev, giantMs: 1.5 } }), false, 'a fractional giant lies')
  assert.equal(giantSizeConsistent({ ...base, cur: { ...base.cur, giantMs: -1 } }), false, 'a negative giant lies')
  assert.equal(giantSizeConsistent({ ...base, cur: { ...base.cur, giantMs: null } }), false, 'a missing giant lies')
  // the freezes ride a non-negative integer (either face)
  assert.equal(giantSizeConsistent({ ...base, prev: { ...base.prev, freezes: 1.5 } }), false, 'a fractional freeze count lies')
  assert.equal(giantSizeConsistent({ ...base, cur: { ...base.cur, freezes: -1 } }), false, 'a negative freeze count lies')
  assert.equal(giantSizeConsistent({ ...base, cur: { ...base.cur, freezes: null } }), false, 'a missing freeze count lies')
})
