import { test } from 'node:test'
import assert from 'node:assert/strict'
import { drownTollTrendRow, drownTollTrendConsistent } from '../../src/lib/drowntolltrend.mjs'

test("the drown toll's own trend (v0.976.61) - the namesake kind's own trend, the fence, the word", () => {
  // THE DROWN TOLL'S OWN SWELL byte-exact, the field's own freshest
  // ride: FACE 342 -> 343 -> 344 rode 0 -> 1 -> 4 drown death(s) (the
  // counts hand-priced from the real caches, deathKindCensus owns the
  // book - the toll's own record climb out of the clean faces)
  const swell1 = drownTollTrendRow({ back: { drown: 0 }, prev: { drown: 1 }, cur: { drown: 4 } })
  assert.equal(swell1, "the drown toll's own trend (v0.976.61): the drown toll's rise ran two steps deep - 0 -> 1 (+1) -> 4 (+3) - the drown toll's own swell (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the drown toll's own mass, co-existence by seat never by duplication)")
  // the swell's second ride byte-exact: FACE 338 -> 339 -> 340 rode
  // 2 -> 3 -> 4 (the toll climbing three walks straight 2 -> 3 -> 4)
  const swell2 = drownTollTrendRow({ back: { drown: 2 }, prev: { drown: 3 }, cur: { drown: 4 } })
  assert.equal(swell2, "the drown toll's own trend (v0.976.61): the drown toll's rise ran two steps deep - 2 -> 3 (+1) -> 4 (+1) - the drown toll's own swell (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the drown toll's own mass, co-existence by seat never by duplication)")
  // the swell's third ride byte-exact: FACE 337 -> 338 -> 339 rode
  // 0 -> 2 -> 3 (the word's own birth window)
  const swell3 = drownTollTrendRow({ back: { drown: 0 }, prev: { drown: 2 }, cur: { drown: 3 } })
  assert.equal(swell3, "the drown toll's own trend (v0.976.61): the drown toll's rise ran two steps deep - 0 -> 2 (+2) -> 3 (+1) - the drown toll's own swell (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the drown toll's own mass, co-existence by seat never by duplication)")
  // THE DROWN TOLL'S OWN SWING byte-exact, the field's own rides:
  // FACE 335 -> 336 -> 337 rode 1 -> 3 -> 0, FACE 336 -> 337 -> 338
  // rode 3 -> 0 -> 2, FACE 339 -> 340 -> 341 rode 3 -> 4 -> 0 (the
  // clean face's own relief)
  const swing1 = drownTollTrendRow({ back: { drown: 1 }, prev: { drown: 3 }, cur: { drown: 0 } })
  assert.equal(swing1, "the drown toll's own trend (v0.976.61): the drown toll's own swing - 1 -> 3 (+2) -> 0 (-3) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the drown toll's own mass, co-existence by seat never by duplication)")
  const swing2 = drownTollTrendRow({ back: { drown: 3 }, prev: { drown: 0 }, cur: { drown: 2 } })
  assert.equal(swing2, "the drown toll's own trend (v0.976.61): the drown toll's own swing - 3 -> 0 (-3) -> 2 (+2) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the drown toll's own mass, co-existence by seat never by duplication)")
  const swing3 = drownTollTrendRow({ back: { drown: 3 }, prev: { drown: 4 }, cur: { drown: 0 } })
  assert.equal(swing3, "the drown toll's own trend (v0.976.61): the drown toll's own swing - 3 -> 4 (+1) -> 0 (-4) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the drown toll's own mass, co-existence by seat never by duplication)")
  // THE DROWN TOLL'S OWN FADE - two consecutive falls (the branch the
  // eleven priced faces never rode - the law prices it, the bars
  // never invent it)
  const fade = drownTollTrendRow({ back: { drown: 4 }, prev: { drown: 2 }, cur: { drown: 0 } })
  assert.equal(fade, "the drown toll's own trend (v0.976.61): the drown toll's fall ran two steps deep - 4 -> 2 (-2) -> 0 (-2) - the drown toll's own fade (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the drown toll's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // rides: FACE 334 -> 335 -> 336 rode 1 -> 1 -> 3 (the first step
  // held), FACE 340 -> 341 -> 342 rode 4 -> 0 -> 0 (the second step
  // held), FACE 341 -> 342 -> 343 rode 0 -> 0 -> 1 (the toll's return
  // riding unnamed behind a held first step)
  assert.equal(drownTollTrendRow({ back: { drown: 1 }, prev: { drown: 1 }, cur: { drown: 3 } }), null)
  assert.equal(drownTollTrendRow({ back: { drown: 4 }, prev: { drown: 0 }, cur: { drown: 0 } }), null)
  assert.equal(drownTollTrendRow({ back: { drown: 0 }, prev: { drown: 0 }, cur: { drown: 1 } }), null)
  assert.equal(drownTollTrendRow({ back: { drown: 0 }, prev: { drown: 0 }, cur: { drown: 0 } }), null)
  assert.equal(drownTollTrendRow({ back: { drown: 2 }, prev: { drown: 2 }, cur: { drown: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the head's own
  // verdict words (no dynasty, no turn) - co-existence by seat never
  // by duplication; the seat-law tail names the neighbor seats (the
  // kind's word, the siege's word) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swell1, swell2, swell3, swing1, swing2, swing3, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(drownTollTrendConsistent({ back: { drown: 2 }, prev: { drown: 1 }, cur: { drown: 0.5 } }), false)
  assert.equal(drownTollTrendConsistent({ back: { drown: 2 }, prev: { drown: -1 }, cur: { drown: 0 } }), false)
  assert.equal(drownTollTrendConsistent({ back: { drown: 2 }, prev: { drown: 1 } }), false)
  assert.equal(drownTollTrendConsistent({ back: { drown: '2' }, prev: { drown: 1 }, cur: { drown: 0 } }), false)
  assert.equal(drownTollTrendConsistent(null), false)
  assert.equal(drownTollTrendConsistent([]), false)
  assert.equal(drownTollTrendConsistent({ back: { drown: 2 }, prev: { drown: 1 }, cur: { drown: 0 } }), true)
  assert.equal(drownTollTrendRow({ back: { drown: 2 }, prev: { drown: 1 }, cur: { drown: 0.5 } }), null)
  assert.equal(drownTollTrendRow({ back: { drown: '2' }, prev: { drown: 1 }, cur: { drown: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own freshest swell FACE 342/343/344 hand-priced from
  // the real caches (deathKindCensus owns the buckets - the same
  // cells the kind trend's and the siege's wires hold):
  // 0 -> 1 -> 4 rides the swell byte-exact
  const fieldRow = drownTollTrendRow({ back: { drown: 0 }, prev: { drown: 1 }, cur: { drown: 4 } })
  assert.ok(fieldRow === swell1)
})
