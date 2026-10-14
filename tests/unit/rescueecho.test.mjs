import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rescueEchoRow, rescueEchoConsistent } from '../../src/lib/rescueecho.mjs'

test("the rescue book's own echo (v0.976.25) - the fold, the fence, the word", () => {
  // the FACE 317 / FACE 318 = 38493190499 reads' own shapes byte-exact:
  // FACE 317's book rode clean (11 starts, 0 unclosed), then FACE
  // 318's book SPOKE 1 unclosed start (F11) of 29 - the scar RETURNING
  // after the clean book (the fire 0900 read named it in the field)
  const face317 = { unclosed: 0, starts: 11 }
  const face318 = { unclosed: 1, starts: 29 }
  assert.equal(rescueEchoConsistent({ prev: face317, cur: face318 }), true)
  const row1 = rescueEchoRow({ prev: face317, cur: face318 })
  assert.ok(row1.includes("the rescue book's own echo (v0.976.25): this face's 1 unclosed start(s) of 29 start(s) against the prior face's clean book"))
  assert.ok(row1.includes("- the scar returning (the unclosed starts' own words keep their seats)"))
  // the word's FIRST field read hand-priced deeper: FACE 315's clean
  // book (33 starts, 0 unclosed), then FACE 316's book SPOKE 4
  // unclosed of 116 - the same RETURN shape, the second field ride
  const row2 = rescueEchoRow({ prev: { unclosed: 0, starts: 33 }, cur: { unclosed: 4, starts: 116 } })
  assert.ok(row2.includes("this face's 4 unclosed start(s) of 116 start(s) against the prior face's clean book"))
  // the REPEAT: a scar-after-scar face prices the book's own churn
  const row3 = rescueEchoRow({ prev: { unclosed: 2, starts: 40 }, cur: { unclosed: 3, starts: 50 } })
  assert.ok(row3.includes("this face's 3 unclosed start(s) of 50 start(s) against the prior face's 2 unclosed of 40 start(s)"))
  assert.ok(row3.includes("- the scar repeating (the book's own churn riding both faces)"))
  // the honest silences: a CLEAN face prices no echo (the clean book
  // is not the subject - the scar is) - FACE 317 -> 316's own pair and
  // FACE 319 -> 318's own pair price the null, and a clean cur against
  // a scarred prev prices the same null
  assert.equal(rescueEchoRow({ prev: face318, cur: face317 }), null)
  assert.equal(rescueEchoRow({ prev: face317, cur: { unclosed: 0, starts: 33 } }), null)
  // the junk seats
  assert.equal(rescueEchoRow(null), null)
  assert.equal(rescueEchoRow('junk'), null)
  assert.equal(rescueEchoRow(undefined), null)
  assert.equal(rescueEchoRow({ prev: face317 }), null)
  assert.equal(rescueEchoRow({ prev: 'junk', cur: face318 }), null)
  assert.equal(rescueEchoRow({ prev: [0], cur: face318 }), null)
  assert.equal(rescueEchoRow({ prev: face317, cur: 42 }), null)
  assert.equal(rescueEchoConsistent(null), false)
  assert.equal(rescueEchoConsistent(42), false)
  assert.equal(rescueEchoConsistent([1]), false)
  assert.equal(rescueEchoConsistent({ prev: face317 }), false)
})

test("the rescue book's own echo fence (v0.976.25) - the book, the count, the lie", () => {
  const base = { prev: { unclosed: 0, starts: 11 }, cur: { unclosed: 1, starts: 29 } }
  assert.equal(rescueEchoConsistent(base), true)
  // the honest zeros: a zero book is a legal integer shape (the fence
  // prices the image, the row prices the silence)
  assert.equal(rescueEchoConsistent({ prev: { unclosed: 0, starts: 0 }, cur: { unclosed: 0, starts: 0 } }), true)
  // the unclosed count rides a non-negative integer (either face)
  assert.equal(rescueEchoConsistent({ ...base, prev: { ...base.prev, unclosed: 1.5 } }), false, 'a fractional unclosed count lies')
  assert.equal(rescueEchoConsistent({ ...base, cur: { ...base.cur, unclosed: -1 } }), false, 'a negative unclosed count lies')
  assert.equal(rescueEchoConsistent({ ...base, prev: { ...base.prev, unclosed: null } }), false, 'a missing unclosed count lies')
  // the starts count rides a non-negative integer (either face)
  assert.equal(rescueEchoConsistent({ ...base, prev: { ...base.prev, starts: 0.5 } }), false, 'a fractional starts count lies')
  assert.equal(rescueEchoConsistent({ ...base, cur: { ...base.cur, starts: -3 } }), false, 'a negative starts count lies')
  assert.equal(rescueEchoConsistent({ ...base, cur: { ...base.cur, starts: null } }), false, 'a missing starts count lies')
})
