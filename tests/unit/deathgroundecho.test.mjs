import { test } from 'node:test'
import assert from 'node:assert/strict'
import { deathGroundEcho, deathGroundEchoRow, deathGroundEchoConsistent } from '../../src/lib/deathgroundecho.mjs'

test("the ground's own echo (v0.976.23) - the fold, the fence, the word", () => {
  // the FACE 316 = 38487495082 / FACE 317 = 38490523477 reads' own
  // shapes byte-exact: the shore that killed across the back-to-back
  // faces - 316's zombie ground [-135,397] x1 and 317's drowned
  // grounds [-143,395] x5 + [-128,397] x1 both riding its +-12 radius
  // (the nest's own ground the reads hand-priced before the word
  // existed)
  const face316 = {
    combatDeaths: 6, blind: 0,
    grounds: [
      { x: -158, z: 447, n: 1, killers: { Creeper: 1 } },
      { x: -140, z: 430, n: 1, killers: { Skeleton: 1 } },
      { x: -135, z: 397, n: 1, killers: { Zombie: 1 } },
      { x: -122, z: 422, n: 1, killers: { Creeper: 1 } },
      { x: -92, z: 418, n: 1, killers: { Skeleton: 1 } },
      { x: -62, z: 366, n: 1, killers: { Drowned: 1 } }
    ]
  }
  const face317 = {
    combatDeaths: 10, blind: 0,
    grounds: [
      { x: -143, z: 395, n: 5, killers: { Drowned: 5 } },
      { x: -148, z: 410, n: 3, killers: { Drowned: 3 } },
      { x: -168, z: 410, n: 1, killers: { Drowned: 1 } },
      { x: -128, z: 397, n: 1, killers: { Drowned: 1 } }
    ]
  }
  assert.equal(deathGroundEchoConsistent({ prev: face316, cur: face317 }), true)
  // the fold's own pairs: the two drowned grounds rode the zombie's
  // shore, the nest harvest's own geometry across the walks
  const fold = deathGroundEcho({ prev: face316, cur: face317 })
  assert.equal(fold.pairs.length, 2)
  assert.equal(fold.ofGrounds, 4)
  assert.equal(fold.pairs[0].cur.x, -143)
  assert.equal(fold.pairs[0].prev.x, -135)
  assert.equal(fold.pairs[1].cur.x, -128)
  // the word byte-exact: the census's own display key, the tally's own
  // voice, the region law named
  const row1 = deathGroundEchoRow({ prev: face316, cur: face317 })
  assert.ok(row1.includes("the ground's own echo (v0.976.23): 2 of this face's 4 ground(s) rode the prior face's ground(s)"))
  assert.ok(row1.includes("this face's [-143,395] x5 (Drowned:5) rode the prior face's [-135,397] x1 (Zombie:1)"))
  assert.ok(row1.includes("this face's [-128,397] x1 (Drowned:1) rode the prior face's [-135,397] x1 (Zombie:1)"))
  assert.ok(row1.includes("the nest's own ground recurring across the walks (the killers' own voices may swap - the ground is the subject)"))
  // the mirror direction echoes too (the radius is symmetric)
  const row2 = deathGroundEchoRow({ prev: face317, cur: face316 })
  assert.ok(row2.includes("this face's [-135,397] x1 (Zombie:1) rode the prior face's [-143,395] x5 (Drowned:5)"))
  // the radius's own edge: the FACE 315 -> 316 pair's own shape - 315's
  // drowned ground [-149,418] and 316's skeleton ground [-140,430] ride
  // dx 9, dz exactly 12 - the <= boundary holds, the echo prices (the
  // boundary the reader hand-checked twice before trusting)
  const face315 = {
    combatDeaths: 4, blind: 0,
    grounds: [
      { x: -149, z: 418, n: 1, killers: { Drowned: 1 } },
      { x: -117, z: 435, n: 1, killers: { Creeper: 1 } },
      { x: -112, z: 363, n: 1, killers: { Drowned: 1 } },
      { x: -87, z: 404, n: 1, killers: { Skeleton: 1 } }
    ]
  }
  const row315to316 = deathGroundEchoRow({ prev: face315, cur: face316 })
  assert.ok(row315to316 !== null)
  assert.ok(row315to316.includes("this face's [-140,430] x1 (Skeleton:1) rode the prior face's [-149,418] x1 (Drowned:1)"))
  // the honest silence: the FACE 314 -> 315 pair's own shape (one shore
  // ground against four, the nearest dz 18 past the radius - no echo to
  // price, the fresh ground is the shape)
  const face314 = {
    combatDeaths: 1, blind: 0,
    grounds: [{ x: -167, z: 409, n: 1, killers: { Drowned: 1 } }]
  }
  assert.equal(deathGroundEchoRow({ prev: face314, cur: face315 }), null)
  // a groundless face either side prices no echo (the blind book owns
  // no ground)
  const groundless = { combatDeaths: 2, blind: 2, grounds: [] }
  assert.equal(deathGroundEchoRow({ prev: groundless, cur: face317 }), null)
  assert.equal(deathGroundEchoRow({ prev: face316, cur: groundless }), null)
  // the junk seats
  assert.equal(deathGroundEchoRow(null), null)
  assert.equal(deathGroundEchoRow('junk'), null)
  assert.equal(deathGroundEchoRow(undefined), null)
  assert.equal(deathGroundEchoRow({ prev: face316 }), null)
  assert.equal(deathGroundEchoRow({ prev: 'junk', cur: face317 }), null)
  assert.equal(deathGroundEchoRow({ prev: [12], cur: face317 }), null)
  assert.equal(deathGroundEchoRow({ prev: face316, cur: 42 }), null)
  assert.equal(deathGroundEchoConsistent(null), false)
  assert.equal(deathGroundEchoConsistent(42), false)
  assert.equal(deathGroundEchoConsistent([12]), false)
  assert.equal(deathGroundEchoConsistent({ prev: face316 }), false)
})

test("the ground's own echo fence (v0.976.23) - the image, the cell, the lie", () => {
  const base = {
    prev: { combatDeaths: 6, blind: 0, grounds: [{ x: -135, z: 397, n: 1, killers: { Zombie: 1 } }] },
    cur: { combatDeaths: 10, blind: 0, grounds: [{ x: -143, z: 395, n: 5, killers: { Drowned: 5 } }] }
  }
  assert.equal(deathGroundEchoConsistent(base), true)
  // the honest zeros: both faces combatless - a consistent empty book
  // (the row prices the honest silence, the fence prices the image)
  assert.equal(deathGroundEchoConsistent({ prev: { combatDeaths: 0, blind: 0, grounds: [] }, cur: { combatDeaths: 0, blind: 0, grounds: [] } }), true)
  // the counts ride non-negative integers (either face)
  assert.equal(deathGroundEchoConsistent({ ...base, prev: { ...base.prev, combatDeaths: 1.5 } }), false, 'a fractional death count lies')
  assert.equal(deathGroundEchoConsistent({ ...base, cur: { ...base.cur, blind: -1 } }), false, 'a negative blind count lies')
  assert.equal(deathGroundEchoConsistent({ ...base, prev: { ...base.prev, combatDeaths: null } }), false, 'a missing death count lies')
  // the grounds ride an array (either face)
  assert.equal(deathGroundEchoConsistent({ ...base, cur: { ...base.cur, grounds: 'junk' } }), false, 'a string grounds rides no book')
  // the cell's own law: the place finite, the count a positive integer,
  // the tally an object of positive integers
  assert.equal(deathGroundEchoConsistent({ ...base, cur: { ...base.cur, grounds: [{ x: -143.5, z: 395, n: 5, killers: {} }] } }), false, 'a fractional place lies')
  assert.equal(deathGroundEchoConsistent({ ...base, cur: { ...base.cur, grounds: [{ x: -143, z: 395, n: 0, killers: {} }] } }), false, 'a zero count lies')
  assert.equal(deathGroundEchoConsistent({ ...base, cur: { ...base.cur, grounds: [{ x: -143, z: 395, n: 5, killers: null }] } }), false, 'a missing tally lies')
  assert.equal(deathGroundEchoConsistent({ ...base, cur: { ...base.cur, grounds: [{ x: -143, z: 395, n: 5, killers: { Drowned: 0 } }] } }), false, 'a zero killer voice lies')
  assert.equal(deathGroundEchoConsistent({ ...base, cur: { ...base.cur, grounds: [{ x: -143, z: 395, n: 5, killers: { Drowned: 1.5 } }] } }), false, 'a fractional killer voice lies')
})
