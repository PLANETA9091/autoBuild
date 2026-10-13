import { test } from 'node:test'
import assert from 'node:assert/strict'
import { giantWhenRow, giantWhenConsistent, giantTailRow, giantTailConsistent } from '../../src/lib/giantwhen.mjs'

test("the giant's own when (v0.976.17) - the fold, the fence, the word", () => {
  // the FACE 313 = 38472967646 read's own shape byte-exact: the rail
  // rode 21..1001s and the 57526ms stall rode ts=501s - the mid third
  // (thirdS = 1001/3 = 333.67, 501 < 667.33) - THE GIANT'S OWN NOON
  const face313 = { giantTsS: 501, maxMainLateMs: 57526, firstTsS: 21, lastTsS: 1001, freezes: 0 }
  assert.equal(giantWhenConsistent(face313), true)
  const row1 = giantWhenRow(face313)
  assert.ok(row1.includes("the giant's own when (v0.976.17): the 57526ms stall rode the stream's own mid third (ts 501 of the rail's 21..1001s)"))
  assert.ok(row1.includes("THE GIANT'S OWN NOON: the thread's own freeze rode the walk's own middle"))
  // the dawn lane: the stall rode the face's own opening
  const dawn = giantWhenRow({ giantTsS: 100, maxMainLateMs: 6000, firstTsS: 20, lastTsS: 1000, freezes: 0 })
  assert.ok(dawn.includes("the stream's own early third (ts 100 of the rail's 20..1000s)"))
  assert.ok(dawn.includes("THE GIANT'S OWN DAWN: the thread's own freeze rode the face's own opening"))
  // the dusk lane: the stall rode the stream's own end
  const dusk = giantWhenRow({ giantTsS: 700, maxMainLateMs: 24000, firstTsS: 20, lastTsS: 1000, freezes: 0 })
  assert.ok(dusk.includes("the stream's own late third (ts 700 of the rail's 20..1000s)"))
  assert.ok(dusk.includes("THE GIANT'S OWN DUSK: the thread's own freeze rode the stream's own end"))
  // the boundary rides the later third (the one-formula law): 333 of
  // 0..1000 is early (333 < 333.33), 334 is mid; 666 is mid, 667 is late
  const thirdS = 1000 / 3
  assert.ok(giantWhenRow({ giantTsS: 333, maxMainLateMs: 5000, firstTsS: 0, lastTsS: 1000, freezes: 0 }).includes('early'), `333 < ${thirdS} is early`)
  assert.ok(giantWhenRow({ giantTsS: 334, maxMainLateMs: 5000, firstTsS: 0, lastTsS: 1000, freezes: 0 }).includes('mid'))
  assert.ok(giantWhenRow({ giantTsS: 666, maxMainLateMs: 5000, firstTsS: 0, lastTsS: 1000, freezes: 0 }).includes('mid'))
  assert.ok(giantWhenRow({ giantTsS: 667, maxMainLateMs: 5000, firstTsS: 0, lastTsS: 1000, freezes: 0 }).includes('late'))
  // the honest silences: no giant address (the seat never rode), no
  // clock, or the ring dumped (the freeze row owns the story)
  assert.equal(giantWhenRow({ giantTsS: null, maxMainLateMs: null, firstTsS: 21, lastTsS: 1001, freezes: 0 }), null)
  assert.equal(giantWhenRow({ giantTsS: 501, maxMainLateMs: 57526, firstTsS: 21, lastTsS: 1001, freezes: 1 }), null)
  assert.equal(giantWhenRow({ giantTsS: null, maxMainLateMs: null, firstTsS: null, lastTsS: null, freezes: 0 }), null)
  // the junk seats
  assert.equal(giantWhenRow(null), null)
  assert.equal(giantWhenRow('junk'), null)
  assert.equal(giantWhenRow(undefined), null)
  assert.equal(giantWhenConsistent(null), false)
  assert.equal(giantWhenConsistent(42), false)
  assert.equal(giantWhenConsistent([501]), false)
})

test("the giant's own when fence (v0.976.17) - the image, the address, the lie", () => {
  const base = { giantTsS: 501, maxMainLateMs: 57526, firstTsS: 21, lastTsS: 1001, freezes: 0 }
  assert.equal(giantWhenConsistent(base), true)
  // the honest zeros: no beats rode - the empty clock prices the empty book
  assert.equal(giantWhenConsistent({ giantTsS: null, maxMainLateMs: null, firstTsS: null, lastTsS: null, freezes: 0 }), true)
  // the ts rides a non-negative integer
  assert.equal(giantWhenConsistent({ ...base, giantTsS: 1.5 }), false, 'a fractional address lies')
  assert.equal(giantWhenConsistent({ ...base, giantTsS: -1 }), false, 'a negative address lies')
  // the stall's own size rides the pair law: the address and the size
  // are set by the same branch - one without the other lies
  assert.equal(giantWhenConsistent({ ...base, maxMainLateMs: null }), false, 'an address without its size lies')
  assert.equal(giantWhenConsistent({ ...base, giantTsS: null }), false, 'a size without its address lies')
  // the clock's own image: no first beat prices no last beat
  assert.equal(giantWhenConsistent({ ...base, firstTsS: null }), false, 'a clock without its first beat lies')
  assert.equal(giantWhenConsistent({ ...base, lastTsS: null }), false, 'a first beat without its last lies')
  assert.equal(giantWhenConsistent({ ...base, lastTsS: 0 }), false, 'a zero clock prices no lane')
  assert.equal(giantWhenConsistent({ ...base, lastTsS: 1.5 }), false, 'a fractional clock lies')
  // the bookends never regress
  assert.equal(giantWhenConsistent({ ...base, firstTsS: 1001, lastTsS: 21 }), false, 'a regressing clock lies')
  // the stall never outruns the stream that priced it
  assert.equal(giantWhenConsistent({ ...base, giantTsS: 1002 }), false, 'an address past the clock lies')
  // the freeze count rides a non-negative integer
  assert.equal(giantWhenConsistent({ ...base, freezes: 1.5 }), false, 'a fractional freeze count lies')
  assert.equal(giantWhenConsistent({ ...base, freezes: -1 }), false, 'a negative freeze count lies')
  assert.equal(giantWhenConsistent({ ...base, freezes: null }), false, 'a missing freeze count lies')
})

test("the giant's own tail (v0.976.20) - the fold, the fence, the word", () => {
  // the FACE 313 = 38472967646 read's own shape byte-exact: the giant
  // rode 57526ms at ts=501 and the first gauge after (ts=521) rode
  // mainLate 598ms - the loop drained and rode on
  const face313 = { giantTsS: 501, maxMainLateMs: 57526, postGiantTsS: 521, postGiantMainLateMs: 598, freezes: 0 }
  assert.equal(giantTailConsistent(face313), true)
  const row1 = giantTailRow(face313)
  assert.ok(row1.includes("the giant's own tail (v0.976.20): the gauge after the giant (ts 521s) rode mainLate 598ms"))
  assert.ok(row1.includes('the loop drained and rode on past the 57526ms stall'))
  // the FACE 314 shape: the 75368ms giant's own tail rode 333ms - the
  // second drain byte, the same lane
  const face314 = giantTailRow({ giantTsS: 501, maxMainLateMs: 75368, postGiantTsS: 521, postGiantMainLateMs: 333, freezes: 0 })
  assert.ok(face314.includes('rode mainLate 333ms - the loop drained and rode on past the 75368ms stall'))
  // the shadow seat: the stall bled past the threshold again
  const shadow = giantTailRow({ giantTsS: 501, maxMainLateMs: 9000, postGiantTsS: 521, postGiantMainLateMs: 6000, freezes: 0 })
  assert.ok(shadow.includes('THE GIANT\'S OWN SHADOW: the stall bled past the 5000ms threshold again (the giant rode 9000ms)'))
  // the honest silences: no giant, no gauge after (the giant rode the
  // last gauge), the ring dumped
  assert.equal(giantTailRow({ giantTsS: null, maxMainLateMs: null, postGiantTsS: null, postGiantMainLateMs: null, freezes: 0 }), null)
  assert.equal(giantTailRow({ giantTsS: 501, maxMainLateMs: 57526, postGiantTsS: null, postGiantMainLateMs: null, freezes: 0 }), null)
  assert.equal(giantTailRow({ giantTsS: 501, maxMainLateMs: 57526, postGiantTsS: 521, postGiantMainLateMs: 598, freezes: 1 }), null)
  // the junk seats
  assert.equal(giantTailRow(null), null)
  assert.equal(giantTailRow('junk'), null)
  assert.equal(giantTailRow(undefined), null)
  assert.equal(giantTailConsistent(null), false)
  assert.equal(giantTailConsistent(42), false)
})

test("the giant's own tail fence (v0.976.20) - the image, the order, the reset", () => {
  const base = { giantTsS: 501, maxMainLateMs: 57526, postGiantTsS: 521, postGiantMainLateMs: 598, freezes: 0 }
  assert.equal(giantTailConsistent(base), true)
  // the honest zeros: a seatless face prices the tailless book
  assert.equal(giantTailConsistent({ giantTsS: null, maxMainLateMs: null, postGiantTsS: null, postGiantMainLateMs: null, freezes: 0 }), true)
  // the tail rides its own pair law: the address and the drain byte are
  // set by the same branch - one without the other lies
  assert.equal(giantTailConsistent({ ...base, postGiantMainLateMs: null }), false, 'a tail address without its drain byte lies')
  assert.equal(giantTailConsistent({ ...base, postGiantTsS: null }), false, 'a drain byte without its address lies')
  // the tail never rides before (or on) the seat it tails
  assert.equal(giantTailConsistent({ ...base, postGiantTsS: 501 }), false, 'a tail on the seat itself lies')
  assert.equal(giantTailConsistent({ ...base, postGiantTsS: 481 }), false, 'a tail before the seat lies')
  // no seat prices no tail
  assert.equal(giantTailConsistent({ giantTsS: null, maxMainLateMs: null, postGiantTsS: 521, postGiantMainLateMs: 598, freezes: 0 }), false, 'a tail without a seat lies')
  // the seat rides its own pair law
  assert.equal(giantTailConsistent({ ...base, maxMainLateMs: null }), false, 'an address without its size lies')
  assert.equal(giantTailConsistent({ ...base, giantTsS: null }), false, 'a size without its address lies')
  // the fractional and negative lies
  assert.equal(giantTailConsistent({ ...base, postGiantMainLateMs: 1.5 }), false, 'a fractional drain byte lies')
  assert.equal(giantTailConsistent({ ...base, postGiantMainLateMs: -1 }), false, 'a negative drain byte lies')
  assert.equal(giantTailConsistent({ ...base, postGiantTsS: 1.5 }), false, 'a fractional tail address lies')
  assert.equal(giantTailConsistent({ ...base, freezes: 1.5 }), false, 'a fractional freeze count lies')
  assert.equal(giantTailConsistent({ ...base, freezes: null }), false, 'a missing freeze count lies')
  assert.equal(giantTailConsistent({ ...base, giantTsS: -1 }), false, 'a negative address lies')
})
