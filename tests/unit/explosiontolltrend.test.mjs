import { test } from 'node:test'
import assert from 'node:assert/strict'
import { explosionTollTrendRow, explosionTollTrendConsistent } from '../../src/lib/explosiontolltrend.mjs'

test("the explosion toll's own trend (v0.976.65) - the explosion kind's own trend, the fence, the word", () => {
  // THE EXPLOSION TOLL'S OWN SWING byte-exact, the field's own four
  // rides - the swing owns this book's every directional ride (four
  // of four): FACE 336 -> 337 -> 338 rode 0 -> 1 -> 0, FACE 341 ->
  // 342 -> 343 rode 0 -> 2 -> 0, FACE 342 -> 343 -> 344 rode 2 -> 0
  // -> 1, FACE 343 -> 344 -> 345 rode 0 -> 1 -> 0 (the counts
  // hand-priced from the real caches, deathKindCensus owns the book)
  const swing1 = explosionTollTrendRow({ back: { explosion: 0 }, prev: { explosion: 1 }, cur: { explosion: 0 } })
  assert.equal(swing1, "the explosion toll's own trend (v0.976.65): the explosion toll's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the explosion toll's own mass, co-existence by seat never by duplication)")
  const swing2 = explosionTollTrendRow({ back: { explosion: 0 }, prev: { explosion: 2 }, cur: { explosion: 0 } })
  assert.equal(swing2, "the explosion toll's own trend (v0.976.65): the explosion toll's own swing - 0 -> 2 (+2) -> 0 (-2) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the explosion toll's own mass, co-existence by seat never by duplication)")
  const swing3 = explosionTollTrendRow({ back: { explosion: 2 }, prev: { explosion: 0 }, cur: { explosion: 1 } })
  assert.equal(swing3, "the explosion toll's own trend (v0.976.65): the explosion toll's own swing - 2 -> 0 (-2) -> 1 (+1) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the explosion toll's own mass, co-existence by seat never by duplication)")
  const swing4 = explosionTollTrendRow({ back: { explosion: 0 }, prev: { explosion: 1 }, cur: { explosion: 0 } })
  assert.equal(swing4, swing1)
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own seven
  // held rides: FACE 335 -> 336 -> 337 rode 0 -> 0 -> 1 (the held
  // first step), FACE 334 -> 335 -> 336 rode 1 -> 0 -> 0 (the held
  // second step), FACE 338 -> 339 -> 340 rode 1 -> 0 -> 0, FACE 340
  // -> 341 -> 342 rode 0 -> 0 -> 2 (the record's own arrival riding
  // unnamed behind a held first step), FACE 336 -> 337 -> 338 rode
  // 0 -> 0 -> 0 and FACE 337 -> 338 -> 339 rode 0 -> 0 -> 0 (the
  // clean trios), FACE 344 -> 345 -> 346 rode 1 -> 0 -> 0 (the storm
  // face's own held exit - the fleet died to the freeze-storm
  // euthanasia before the first death landed)
  assert.equal(explosionTollTrendRow({ back: { explosion: 0 }, prev: { explosion: 0 }, cur: { explosion: 1 } }), null)
  assert.equal(explosionTollTrendRow({ back: { explosion: 1 }, prev: { explosion: 0 }, cur: { explosion: 0 } }), null)
  assert.equal(explosionTollTrendRow({ back: { explosion: 0 }, prev: { explosion: 0 }, cur: { explosion: 2 } }), null)
  assert.equal(explosionTollTrendRow({ back: { explosion: 0 }, prev: { explosion: 0 }, cur: { explosion: 0 } }), null)
  assert.equal(explosionTollTrendRow({ back: { explosion: 2 }, prev: { explosion: 2 }, cur: { explosion: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the head's own
  // verdict words (no dynasty, no turn) - co-existence by seat never
  // by duplication; the seat-law tail names the neighbor seats (the
  // kind's word, the siege's word) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(explosionTollTrendConsistent({ back: { explosion: 2 }, prev: { explosion: 1 }, cur: { explosion: 0.5 } }), false)
  assert.equal(explosionTollTrendConsistent({ back: { explosion: 2 }, prev: { explosion: -1 }, cur: { explosion: 0 } }), false)
  assert.equal(explosionTollTrendConsistent({ back: { explosion: 2 }, prev: { explosion: 1 } }), false)
  assert.equal(explosionTollTrendConsistent({ back: { explosion: '2' }, prev: { explosion: 1 }, cur: { explosion: 0 } }), false)
  assert.equal(explosionTollTrendConsistent(null), false)
  assert.equal(explosionTollTrendConsistent([]), false)
  assert.equal(explosionTollTrendConsistent({ back: { explosion: 2 }, prev: { explosion: 0 }, cur: { explosion: 1 } }), true)
  assert.equal(explosionTollTrendRow({ back: { explosion: 2 }, prev: { explosion: 1 }, cur: { explosion: 0.5 } }), null)
  assert.equal(explosionTollTrendRow({ back: { explosion: '2' }, prev: { explosion: 1 }, cur: { explosion: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own swing FACE 342/343/344 hand-priced from the real
  // caches (deathKindCensus owns the buckets - the same cells the
  // kind trend's, the siege's, the echo's and the class tolls' wires
  // hold): 2 -> 0 -> 1 rides the swing byte-exact
  const fieldRow = explosionTollTrendRow({ back: { explosion: 2 }, prev: { explosion: 0 }, cur: { explosion: 1 } })
  assert.ok(fieldRow === swing3)
})
