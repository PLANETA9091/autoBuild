import { test } from 'node:test'
import assert from 'node:assert/strict'
import { valveEchoRow, valveEchoConsistent } from '../../src/lib/valveecho.mjs'

test("the valve's own echo (v0.976.24) - the fold, the fence, the word", () => {
  // the FACE 317 / FACE 318 = 38496821547 reads' own shapes byte-exact:
  // the valve rode 0 CLOSED / 0 OPEN three faces deep (315, 316, 317),
  // then FACE 318's own valve SPOKE 2 closure(s) by the queue-pressure
  // arm with both opens riding back - the voice RETURNING after the
  // silence while the waterline's own step (+1M) rode the creep's word
  const face317 = { closures: 0, opens: 0 }
  const face318 = { closures: 2, opens: 2 }
  assert.equal(valveEchoConsistent({ prev: face317, cur: face318 }), true)
  const row1 = valveEchoRow({ prev: face317, cur: face318 })
  assert.ok(row1.includes("the valve's own echo (v0.976.24): this face's valve spoke 2 closure(s) 2 open(s) against the prior face's silence"))
  assert.ok(row1.includes('- the valve\'s own voice returning (the waterline\'s own step rides the creep\'s word, causation never guessed)'))
  // the REPEAT: a spoke-after-spoke face prices the voice's own repeat
  // (co-existence reported, causation never guessed)
  const row2 = valveEchoRow({ prev: { closures: 1, opens: 1 }, cur: { closures: 2, opens: 2 } })
  assert.ok(row2.includes("the valve's own echo (v0.976.24): this face's valve spoke 2 closure(s) 2 open(s) against the prior face's 1 closure(s) 1 open(s)"))
  assert.ok(row2.includes("- the valve's own voice repeating (co-existence reported, causation never guessed)"))
  // opens alone are a voice: a face whose valve only OPENED (the
  // census's own edge - opens ride the same voice image) also speaks
  const row3 = valveEchoRow({ prev: face317, cur: { closures: 0, opens: 1 } })
  assert.ok(row3 !== null)
  assert.ok(row3.includes('spoke 0 closure(s) 1 open(s) against the prior face\'s silence'))
  // the honest silences: a SILENT face prices no echo (the voice's
  // rest is not the subject - the voice is) - FACE 317 -> 316's own
  // double silence prices the null, and a silent cur against a spoken
  // prev prices the same null
  assert.equal(valveEchoRow({ prev: face317, cur: { closures: 0, opens: 0 } }), null)
  assert.equal(valveEchoRow({ prev: face318, cur: face317 }), null)
  // the junk seats
  assert.equal(valveEchoRow(null), null)
  assert.equal(valveEchoRow('junk'), null)
  assert.equal(valveEchoRow(undefined), null)
  assert.equal(valveEchoRow({ prev: face317 }), null)
  assert.equal(valveEchoRow({ prev: 'junk', cur: face318 }), null)
  assert.equal(valveEchoRow({ prev: [0], cur: face318 }), null)
  assert.equal(valveEchoRow({ prev: face317, cur: 42 }), null)
  assert.equal(valveEchoConsistent(null), false)
  assert.equal(valveEchoConsistent(42), false)
  assert.equal(valveEchoConsistent([2]), false)
  assert.equal(valveEchoConsistent({ prev: face317 }), false)
})

test("the valve's own echo fence (v0.976.24) - the voice, the count, the lie", () => {
  const base = { prev: { closures: 0, opens: 0 }, cur: { closures: 2, opens: 2 } }
  assert.equal(valveEchoConsistent(base), true)
  // the honest zeros: a zero voice is a legal integer shape (the fence
  // prices the image, the row prices the silence)
  assert.equal(valveEchoConsistent({ prev: { closures: 0, opens: 0 }, cur: { closures: 0, opens: 0 } }), true)
  // the closures count rides a non-negative integer (either face)
  assert.equal(valveEchoConsistent({ ...base, prev: { ...base.prev, closures: 1.5 } }), false, 'a fractional closure count lies')
  assert.equal(valveEchoConsistent({ ...base, cur: { ...base.cur, closures: -1 } }), false, 'a negative closure count lies')
  assert.equal(valveEchoConsistent({ ...base, prev: { ...base.prev, closures: null } }), false, 'a missing closure count lies')
  // the opens count rides a non-negative integer (either face)
  assert.equal(valveEchoConsistent({ ...base, prev: { ...base.prev, opens: 0.5 } }), false, 'a fractional open count lies')
  assert.equal(valveEchoConsistent({ ...base, cur: { ...base.cur, opens: -2 } }), false, 'a negative open count lies')
  assert.equal(valveEchoConsistent({ ...base, cur: { ...base.cur, opens: null } }), false, 'a missing open count lies')
})
