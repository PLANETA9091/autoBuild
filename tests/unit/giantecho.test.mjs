import { test } from 'node:test'
import assert from 'node:assert/strict'
import { giantEchoRow, giantEchoConsistent } from '../../src/lib/giantecho.mjs'

test("the giant's own echo (v0.976.19) - the fold, the fence, the word", () => {
  // the FACE 313 = 38472967646 / FACE 314 = 38480563295 reads' own
  // shapes byte-exact: both giants rode the same gauge address ts=501s
  // (313's 57526ms NOON, 314's 75368ms DUSK) - the seat's own echo the
  // reader hand-priced across the back-to-back faces
  const face313 = { giantTsS: 501, maxMainLateMs: 57526, freezes: 0 }
  const face314 = { giantTsS: 501, maxMainLateMs: 75368, freezes: 0 }
  assert.equal(giantEchoConsistent({ prev: face313, cur: face314 }), true)
  const row1 = giantEchoRow({ prev: face313, cur: face314 })
  assert.ok(row1.includes("the giant's own echo (v0.976.19): the ts=501s seat rode twice back-to-back"))
  assert.ok(row1.includes("the prior face's 57526ms giant and this face's 75368ms giant share the same gauge address"))
  // the mirror direction echoes too (the addresses match both ways)
  const row2 = giantEchoRow({ prev: face314, cur: face313 })
  assert.ok(row2.includes('the prior face\'s 75368ms giant and this face\'s 57526ms giant share the same gauge address'))
  // the honest silences: the addresses mismatched (the seat rode once
  // - no echo to price)
  assert.equal(giantEchoRow({ prev: { giantTsS: 501, maxMainLateMs: 57526, freezes: 0 }, cur: { giantTsS: 641, maxMainLateMs: 24795, freezes: 0 } }), null)
  // a seatless face prices no echo (the pair never rode)
  assert.equal(giantEchoRow({ prev: { giantTsS: null, maxMainLateMs: null, freezes: 0 }, cur: face314 }), null)
  assert.equal(giantEchoRow({ prev: face313, cur: { giantTsS: null, maxMainLateMs: null, freezes: 0 } }), null)
  // a dumped face prices no echo (the freeze row owns the story -
  // either face)
  assert.equal(giantEchoRow({ prev: { ...face313, freezes: 1 }, cur: face314 }), null)
  assert.equal(giantEchoRow({ prev: face313, cur: { ...face314, freezes: 2 } }), null)
  // the junk seats
  assert.equal(giantEchoRow(null), null)
  assert.equal(giantEchoRow('junk'), null)
  assert.equal(giantEchoRow(undefined), null)
  assert.equal(giantEchoRow({ prev: face313 }), null)
  assert.equal(giantEchoRow({ prev: 'junk', cur: face314 }), null)
  assert.equal(giantEchoRow({ prev: [501], cur: face314 }), null)
  assert.equal(giantEchoRow({ prev: face313, cur: 42 }), null)
  assert.equal(giantEchoConsistent(null), false)
  assert.equal(giantEchoConsistent(42), false)
  assert.equal(giantEchoConsistent([501]), false)
  assert.equal(giantEchoConsistent({ prev: face313 }), false)
})

test("the giant's own echo fence (v0.976.19) - the image, the pair, the lie", () => {
  const base = { prev: { giantTsS: 501, maxMainLateMs: 57526, freezes: 0 }, cur: { giantTsS: 501, maxMainLateMs: 75368, freezes: 0 } }
  assert.equal(giantEchoConsistent(base), true)
  // the honest zeros: both faces seatless - a consistent empty book
  // (the row prices the honest silence, the fence prices the image)
  assert.equal(giantEchoConsistent({ prev: { giantTsS: null, maxMainLateMs: null, freezes: 0 }, cur: { giantTsS: null, maxMainLateMs: null, freezes: 0 } }), true)
  // the ts rides a non-negative integer (either face)
  assert.equal(giantEchoConsistent({ ...base, prev: { ...base.prev, giantTsS: 1.5 } }), false, 'a fractional address lies')
  assert.equal(giantEchoConsistent({ ...base, cur: { ...base.cur, giantTsS: -1 } }), false, 'a negative address lies')
  // the pair law: the address and the size are set by the same branch
  // - one without the other lies (either face)
  assert.equal(giantEchoConsistent({ ...base, prev: { ...base.prev, maxMainLateMs: null } }), false, 'an address without its size lies')
  assert.equal(giantEchoConsistent({ ...base, prev: { ...base.prev, giantTsS: null } }), false, 'a size without its address lies')
  assert.equal(giantEchoConsistent({ ...base, cur: { ...base.cur, maxMainLateMs: null } }), false, 'the cur pair splits the same way')
  assert.equal(giantEchoConsistent({ ...base, cur: { ...base.cur, giantTsS: null } }), false, 'the cur pair splits both ways')
  // the freeze count rides a non-negative integer (either face)
  assert.equal(giantEchoConsistent({ ...base, prev: { ...base.prev, freezes: 1.5 } }), false, 'a fractional freeze count lies')
  assert.equal(giantEchoConsistent({ ...base, cur: { ...base.cur, freezes: -1 } }), false, 'a negative freeze count lies')
  assert.equal(giantEchoConsistent({ ...base, prev: { ...base.prev, freezes: null } }), false, 'a missing freeze count lies')
})
