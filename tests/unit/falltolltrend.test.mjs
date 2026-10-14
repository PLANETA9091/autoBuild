import { test } from 'node:test'
import assert from 'node:assert/strict'
import { fallTollTrendRow, fallTollTrendConsistent } from '../../src/lib/falltolltrend.mjs'

test("the fall toll's own trend (v0.976.63) - the fall kind's own trend, the fence, the word", () => {
  // THE FALL TOLL'S OWN FADE byte-exact, the field's own birth ride:
  // FACE 338 -> 339 -> 340 rode 3 -> 1 -> 0 fall death(s) (the counts
  // hand-priced from the real caches, deathKindCensus owns the book -
  // the branch's own birth, the branch the drown toll never rode)
  const fade = fallTollTrendRow({ back: { fall: 3 }, prev: { fall: 1 }, cur: { fall: 0 } })
  assert.equal(fade, "the fall toll's own trend (v0.976.63): the fall toll's fall ran two steps deep - 3 -> 1 (-2) -> 0 (-1) - the fall toll's own fade (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the fall toll's own mass, co-existence by seat never by duplication)")
  // THE FALL TOLL'S OWN SWELL byte-exact, the field's own birth
  // window: FACE 340 -> 341 -> 342 rode 0 -> 1 -> 2 (the toll's own
  // climb out of the clean face)
  const swell = fallTollTrendRow({ back: { fall: 0 }, prev: { fall: 1 }, cur: { fall: 2 } })
  assert.equal(swell, "the fall toll's own trend (v0.976.63): the fall toll's rise ran two steps deep - 0 -> 1 (+1) -> 2 (+1) - the fall toll's own swell (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the fall toll's own mass, co-existence by seat never by duplication)")
  // THE FALL TOLL'S OWN SWING byte-exact, the field's own three rides:
  // FACE 337 -> 338 -> 339 rode 0 -> 3 -> 1, FACE 339 -> 340 -> 341
  // rode 1 -> 0 -> 1, FACE 341 -> 342 -> 343 rode 1 -> 2 -> 0
  const swing1 = fallTollTrendRow({ back: { fall: 0 }, prev: { fall: 3 }, cur: { fall: 1 } })
  assert.equal(swing1, "the fall toll's own trend (v0.976.63): the fall toll's own swing - 0 -> 3 (+3) -> 1 (-2) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the fall toll's own mass, co-existence by seat never by duplication)")
  const swing2 = fallTollTrendRow({ back: { fall: 1 }, prev: { fall: 0 }, cur: { fall: 1 } })
  assert.equal(swing2, "the fall toll's own trend (v0.976.63): the fall toll's own swing - 1 -> 0 (-1) -> 1 (+1) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the fall toll's own mass, co-existence by seat never by duplication)")
  const swing3 = fallTollTrendRow({ back: { fall: 1 }, prev: { fall: 2 }, cur: { fall: 0 } })
  assert.equal(swing3, "the fall toll's own trend (v0.976.63): the fall toll's own swing - 1 -> 2 (+1) -> 0 (-2) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the fall toll's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // rides: FACE 336 -> 337 -> 338 rode 0 -> 0 -> 3 (the storm's own
  // arrival riding unnamed behind a held first step), FACE 342 ->
  // 343 -> 344 rode 2 -> 0 -> 0 (the second step held), FACE 335 ->
  // 336 -> 337 rode 0 -> 0 -> 0 (the clean trio)
  assert.equal(fallTollTrendRow({ back: { fall: 0 }, prev: { fall: 0 }, cur: { fall: 3 } }), null)
  assert.equal(fallTollTrendRow({ back: { fall: 2 }, prev: { fall: 0 }, cur: { fall: 0 } }), null)
  assert.equal(fallTollTrendRow({ back: { fall: 0 }, prev: { fall: 0 }, cur: { fall: 0 } }), null)
  assert.equal(fallTollTrendRow({ back: { fall: 2 }, prev: { fall: 2 }, cur: { fall: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the head's own
  // verdict words (no dynasty, no turn) - co-existence by seat never
  // by duplication; the seat-law tail names the neighbor seats (the
  // kind's word, the siege's word) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [fade, swell, swing1, swing2, swing3]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(fallTollTrendConsistent({ back: { fall: 2 }, prev: { fall: 1 }, cur: { fall: 0.5 } }), false)
  assert.equal(fallTollTrendConsistent({ back: { fall: 2 }, prev: { fall: -1 }, cur: { fall: 0 } }), false)
  assert.equal(fallTollTrendConsistent({ back: { fall: 2 }, prev: { fall: 1 } }), false)
  assert.equal(fallTollTrendConsistent({ back: { fall: '2' }, prev: { fall: 1 }, cur: { fall: 0 } }), false)
  assert.equal(fallTollTrendConsistent(null), false)
  assert.equal(fallTollTrendConsistent([]), false)
  assert.equal(fallTollTrendConsistent({ back: { fall: 2 }, prev: { fall: 1 }, cur: { fall: 0 } }), true)
  assert.equal(fallTollTrendRow({ back: { fall: 2 }, prev: { fall: 1 }, cur: { fall: 0.5 } }), null)
  assert.equal(fallTollTrendRow({ back: { fall: '2' }, prev: { fall: 1 }, cur: { fall: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own fade FACE 338/339/340 hand-priced from the real
  // caches (deathKindCensus owns the buckets - the same cells the
  // kind trend's, the siege's and the class tolls' wires hold):
  // 3 -> 1 -> 0 rides the fade byte-exact
  const fieldRow = fallTollTrendRow({ back: { fall: 3 }, prev: { fall: 1 }, cur: { fall: 0 } })
  assert.ok(fieldRow === fade)
})
