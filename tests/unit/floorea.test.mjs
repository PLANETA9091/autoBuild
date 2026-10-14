import { test } from 'node:test'
import assert from 'node:assert/strict'
import { floorEraRow, floorEraConsistent } from '../../src/lib/floorea.mjs'

const face = (marginValveM, valveFloorM = 450, valveClosures = 0) => ({ marginValveM, valveFloorM, valveClosures })

test("the floor's own side era (v0.976.48) - the floor's own side era, the fence, the word", () => {
  // THE UNDER'S OWN ERA byte-exact, the field's own first walk: FACE
  // 319 -> 320 -> 321 -> 322 rode 20 -> 50 -> 59 -> 23 under (the
  // counts hand-priced from the real logs, valveMarginJoin owns the
  // lens - the side held four faces deep)
  const era1 = floorEraRow({ deep: face(20), back: face(50), prev: face(59), cur: face(23) })
  assert.equal(era1, "the floor's own side era (v0.976.48): the under ran three steps deep - 20M under -> 50M under -> 59M under -> 23M under - the under's own era (the crossing prices the step, the echo prices the side's own recurrence, the trend prices the pair's own shape - this word prices the side's own run, co-existence by seat never by duplication)")
  // the era's second ride byte-exact, the word's own birth window:
  // FACE 326 -> 327 -> 328 -> 329 rode 45 -> 41 -> 33 -> 11 under
  const era2 = floorEraRow({ deep: face(45), back: face(41), prev: face(33), cur: face(11) })
  assert.equal(era2, "the floor's own side era (v0.976.48): the under ran three steps deep - 45M under -> 41M under -> 33M under -> 11M under - the under's own era (the crossing prices the step, the echo prices the side's own recurrence, the trend prices the pair's own shape - this word prices the side's own run, co-existence by seat never by duplication)")
  // the era's third ride byte-exact, the field's own freshest chain
  // (the word's own birth face): FACE 331 -> 332 -> 333 -> 334 rode
  // 50 -> 41 -> 34 -> 30 under (the storm's under returning and
  // holding)
  const era3 = floorEraRow({ deep: face(50), back: face(41), prev: face(34), cur: face(30) })
  assert.equal(era3, "the floor's own side era (v0.976.48): the under ran three steps deep - 50M under -> 41M under -> 34M under -> 30M under - the under's own era (the crossing prices the step, the echo prices the side's own recurrence, the trend prices the pair's own shape - this word prices the side's own run, co-existence by seat never by duplication)")
  // THE PAST'S OWN ERA - the branch the sixteen priced faces never
  // rode (the past's own persistence the field never held one walk,
  // let alone three steps - the law prices it, the bars never invent
  // it)
  const past = floorEraRow({ deep: face(-45), back: face(-40), prev: face(-32), cur: face(-12) })
  assert.equal(past, "the floor's own side era (v0.976.48): the past ran three steps deep - 45M past -> 40M past -> 32M past -> 12M past - the past's own era (the crossing prices the step, the echo prices the side's own recurrence, the trend prices the pair's own shape - this word prices the side's own run, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the field's own mixed arcs price no era (the
  // side change rode - the bars never invent) - the field's own
  // windows 327/328/329/330 (41, 33, 11, -74 - the leave broke the
  // hold), 329/330/331/332 (11, -74, 50, 41 - the bounce), and
  // 330/331/332/333 (-74, 50, 41, 34 - the return)
  assert.equal(floorEraRow({ deep: face(41), back: face(33), prev: face(11), cur: face(-74) }), null)
  assert.equal(floorEraRow({ deep: face(11), back: face(-74), prev: face(50), cur: face(41) }), null)
  assert.equal(floorEraRow({ deep: face(-74), back: face(50), prev: face(41), cur: face(34) }), null)
  // the byte-pin: the era row never speaks the trend's own verdict
  // words (no hold, no settle, no leave, no bounce, no pass) nor the
  // echo's own words (no return, no repeat, no release, no rest) -
  // the seat-law tail names the neighbor seats, the names ride by
  // law, the neighbor VERDICTS never ride
  for (const row of [era1, era2, era3, past]) {
    assert.ok(!/\bhold\b|\bsettle\b|\bleave\b|\bbounce\b|\bpass\b|\breturn\b|\brepeat\b|\brelease\b|\brest\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - a moved floor prices nothing across the whole quartet (the
  // floor fiction lesson), fractional, negative-closure, missing and
  // junk folds lie
  assert.equal(floorEraConsistent({ deep: face(20), back: face(50), prev: face(59, 451), cur: face(23) }), false)
  assert.equal(floorEraConsistent({ deep: face(20), back: face(50.5), prev: face(59), cur: face(23) }), false)
  assert.equal(floorEraConsistent({ deep: face(20), back: face(50), prev: face(59), cur: face(23, 450, -1) }), false)
  assert.equal(floorEraConsistent({ deep: face(20), back: face(50), prev: face(59) }), false)
  assert.equal(floorEraConsistent({ deep: face('20'), back: face(50), prev: face(59), cur: face(23) }), false)
  assert.equal(floorEraConsistent(null), false)
  assert.equal(floorEraConsistent([]), false)
  assert.equal(floorEraConsistent({ deep: face(20), back: face(50), prev: face(59), cur: face(23) }), true)
  assert.equal(floorEraRow({ deep: face(20), back: face(50), prev: face(59, 451), cur: face(23) }), null)
  // the one-parser law's own ride through the lens's own images: the
  // field's own freshest chain FACE 331/332/333/334 hand-priced from
  // the real logs (valveMarginJoin owns the margin - the same cells
  // the crossing's, the echo's and the trend's wires hold): 50 -> 41
  // -> 34 -> 30 rides the under's own era byte-exact
  const fieldRow = floorEraRow({ deep: face(50), back: face(41), prev: face(34), cur: face(30) })
  assert.ok(fieldRow === era3)
})
