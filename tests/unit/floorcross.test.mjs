import { test } from 'node:test'
import assert from 'node:assert/strict'
import { floorCrossRow, floorCrossConsistent } from '../../src/lib/floorcross.mjs'

test("the floor's own crossing (v0.976.30) - the fold, the fence, the word", () => {
  // the FACE 322 / FACE 323 reads' own shapes byte-exact: the
  // thin-approach became the silent cross - FACE 322's lens rode the
  // margin +23M under the 450M floor (peak 427M), then FACE 323's
  // lens rode -32M past (peak 482M) - the waterline stepped over the
  // valve's own line between the walks while the valve's own voice
  // stayed silent (0 closure(s) prior, 0 this face)
  const face322 = { marginValveM: 23, valveFloorM: 450, valveClosures: 0 }
  const face323 = { marginValveM: -32, valveFloorM: 450, valveClosures: 0 }
  assert.equal(floorCrossConsistent({ prev: face322, cur: face323 }), true)
  const row1 = floorCrossRow({ prev: face322, cur: face323 })
  assert.ok(row1.includes("the floor's own crossing (v0.976.30): the margin's own step crossed the valve's own floor between the walks"))
  assert.ok(row1.includes("- this face's 32M past rode against the prior face's 23M under - the waterline stepped over the valve's own 450M line (the valve's own voice: 0 closure(s) prior, 0 this face)"))
  // the retreat branch: past -> under prices the step back (the
  // lens's own boundary law rides - a margin exactly at zero is the
  // arm's own seat, never under)
  const row2 = floorCrossRow({ prev: { marginValveM: -32, valveFloorM: 450, valveClosures: 2 }, cur: { marginValveM: 23, valveFloorM: 450, valveClosures: 0 } })
  assert.ok(row2.includes("the margin's own step retreated behind the valve's own floor between the walks"))
  assert.ok(row2.includes("- this face's 23M under rode against the prior face's 32M past - the waterline stepped back behind the valve's own 450M line (the valve's own voice: 2 closure(s) prior, 0 this face)"))
  // a held UNDER side prices the honest silence
  assert.equal(floorCrossRow({ prev: { marginValveM: 23, valveFloorM: 450, valveClosures: 0 }, cur: { marginValveM: 5, valveFloorM: 450, valveClosures: 0 } }), null)
  // a held PAST side prices the honest silence too
  assert.equal(floorCrossRow({ prev: { marginValveM: -32, valveFloorM: 450, valveClosures: 0 }, cur: { marginValveM: -1, valveFloorM: 450, valveClosures: 0 } }), null)
  // the boundary law: a margin exactly at zero is the PAST side (the
  // lens counts peak >= floor as the arm's own seat) - under -> zero
  // prices the crossing, zero -> under prices the retreat
  const row3 = floorCrossRow({ prev: { marginValveM: 1, valveFloorM: 450, valveClosures: 0 }, cur: { marginValveM: 0, valveFloorM: 450, valveClosures: 0 } })
  assert.ok(row3.includes("the margin's own step crossed the valve's own floor"))
  const row4 = floorCrossRow({ prev: { marginValveM: 0, valveFloorM: 450, valveClosures: 0 }, cur: { marginValveM: 1, valveFloorM: 450, valveClosures: 0 } })
  assert.ok(row4.includes("the margin's own step retreated behind the valve's own floor"))
  // the floors must hold still - a moved floor is the config's own
  // story, never the waterline's own step
  assert.equal(floorCrossRow({ prev: face322, cur: { marginValveM: -32, valveFloorM: 600, valveClosures: 0 } }), null)
  // a gauge-less lens prices no step
  assert.equal(floorCrossRow({ prev: { marginValveM: null, valveFloorM: 450, valveClosures: 0 }, cur: face323 }), null)
  assert.equal(floorCrossRow({ prev: face322, cur: { marginValveM: null, valveFloorM: 450, valveClosures: 0 } }), null)
  // the junk seats
  assert.equal(floorCrossRow(null), null)
  assert.equal(floorCrossRow('junk'), null)
  assert.equal(floorCrossRow(undefined), null)
  assert.equal(floorCrossRow({ prev: face322 }), null)
  assert.equal(floorCrossRow({ prev: 'junk', cur: face323 }), null)
  assert.equal(floorCrossRow({ prev: [23], cur: face323 }), null)
  assert.equal(floorCrossRow({ prev: face322, cur: 42 }), null)
  assert.equal(floorCrossConsistent(null), false)
  assert.equal(floorCrossConsistent(42), false)
  assert.equal(floorCrossConsistent([-32]), false)
  assert.equal(floorCrossConsistent({ prev: face322 }), false)
})

test("the floor's own crossing fence (v0.976.30) - the image, the margin, the lie", () => {
  const base = { prev: { marginValveM: 23, valveFloorM: 450, valveClosures: 0 }, cur: { marginValveM: -32, valveFloorM: 450, valveClosures: 0 } }
  assert.equal(floorCrossConsistent(base), true)
  // the honest zeros: a zero margin is a legal integer shape (the
  // arm's own seat - the fence prices the image, the row prices the
  // branch)
  assert.equal(floorCrossConsistent({ prev: { marginValveM: 0, valveFloorM: 450, valveClosures: 0 }, cur: { marginValveM: 0, valveFloorM: 450, valveClosures: 0 } }), true)
  // the margin rides an integer of any sign (either face)
  assert.equal(floorCrossConsistent({ ...base, prev: { ...base.prev, marginValveM: 1.5 } }), false, 'a fractional margin lies')
  assert.equal(floorCrossConsistent({ ...base, cur: { ...base.cur, marginValveM: null } }), false, 'a missing margin lies')
  // the floor rides a positive integer (either face)
  assert.equal(floorCrossConsistent({ ...base, prev: { ...base.prev, valveFloorM: 1.5 } }), false, 'a fractional floor lies')
  assert.equal(floorCrossConsistent({ ...base, cur: { ...base.cur, valveFloorM: 0 } }), false, 'a zero floor lies')
  assert.equal(floorCrossConsistent({ ...base, cur: { ...base.cur, valveFloorM: -450 } }), false, 'a negative floor lies')
  assert.equal(floorCrossConsistent({ ...base, prev: { ...base.prev, valveFloorM: null } }), false, 'a missing floor lies')
  // the valve count rides a non-negative integer (either face)
  assert.equal(floorCrossConsistent({ ...base, prev: { ...base.prev, valveClosures: 1.5 } }), false, 'a fractional valve count lies')
  assert.equal(floorCrossConsistent({ ...base, cur: { ...base.cur, valveClosures: -1 } }), false, 'a negative valve count lies')
  assert.equal(floorCrossConsistent({ ...base, cur: { ...base.cur, valveClosures: null } }), false, 'a missing valve count lies')
  // the floors must agree across the pair
  assert.equal(floorCrossConsistent({ prev: { marginValveM: 23, valveFloorM: 450, valveClosures: 0 }, cur: { marginValveM: -32, valveFloorM: 600, valveClosures: 0 } }), false, 'a moved floor lies (the config\'s own story)')
})
