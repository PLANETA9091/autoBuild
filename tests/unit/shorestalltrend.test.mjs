import { test } from 'node:test'
import assert from 'node:assert/strict'
import { shoreStallTrendRow, shoreStallTrendConsistent } from '../../src/lib/shorestalltrend.mjs'

test("the shore-stall's own trend (v0.976.58) - the shore-stalled walks' own trend, the fence, the word", () => {
  // THE SHORE-STALL'S OWN SWING byte-exact, the field's own freshest
  // ride: FACE 337 -> 338 -> 339 rode 0 -> 1 -> 0 shore-stalled
  // walk(s) (the counts hand-priced from the real caches,
  // rescueLedger owns the book - the shore stall trading seats
  // between the walks)
  const swing1 = shoreStallTrendRow({ back: { shore: 0 }, prev: { shore: 1 }, cur: { shore: 0 } })
  assert.equal(swing1, "the shore-stall's own trend (v0.976.58): the shore-stall's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the shore-stall's own mass, co-existence by seat never by duplication)")
  // the swing's second ride byte-exact: FACE 336 -> 337 -> 338 rode
  // 2 -> 0 -> 1 (the stall draining then creeping back one walk)
  const swing2 = shoreStallTrendRow({ back: { shore: 2 }, prev: { shore: 0 }, cur: { shore: 1 } })
  assert.equal(swing2, "the shore-stall's own trend (v0.976.58): the shore-stall's own swing - 2 -> 0 (-2) -> 1 (+1) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the shore-stall's own mass, co-existence by seat never by duplication)")
  // the swing's third ride byte-exact: FACE 335 -> 336 -> 337 rode
  // 0 -> 2 -> 0 (the field's own first priced swing)
  const swing3 = shoreStallTrendRow({ back: { shore: 0 }, prev: { shore: 2 }, cur: { shore: 0 } })
  assert.equal(swing3, "the shore-stall's own trend (v0.976.58): the shore-stall's own swing - 0 -> 2 (+2) -> 0 (-2) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the shore-stall's own mass, co-existence by seat never by duplication)")
  // THE SHORE-STALL'S OWN SWELL - two consecutive rises (the branch
  // the eight priced faces never rode - the law prices it, the bars
  // never invent it; the birth run's own direction anchor)
  const swell = shoreStallTrendRow({ back: { shore: 2 }, prev: { shore: 4 }, cur: { shore: 12 } })
  assert.equal(swell, "the shore-stall's own trend (v0.976.58): the shore-stall's rise ran two steps deep - 2 -> 4 (+2) -> 12 (+8) - the shore-stall's own swell (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the shore-stall's own mass, co-existence by seat never by duplication)")
  // THE SHORE-STALL'S OWN FADE - two consecutive falls (the branch
  // the eight priced faces never rode either)
  const fade = shoreStallTrendRow({ back: { shore: 12 }, prev: { shore: 4 }, cur: { shore: 0 } })
  assert.equal(fade, "the shore-stall's own trend (v0.976.58): the shore-stall's fall ran two steps deep - 12 -> 4 (-8) -> 0 (-4) - the shore-stall's own fade (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the shore-stall's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // rides: FACE 338 -> 339 -> 340 rode 1 -> 0 -> 0 (the second step
  // held) and FACE 339 -> 340 -> 341 rode 0 -> 0 -> 12 (the record
  // bill riding unnamed behind a held first step)
  assert.equal(shoreStallTrendRow({ back: { shore: 1 }, prev: { shore: 0 }, cur: { shore: 0 } }), null)
  assert.equal(shoreStallTrendRow({ back: { shore: 0 }, prev: { shore: 0 }, cur: { shore: 12 } }), null)
  assert.equal(shoreStallTrendRow({ back: { shore: 0 }, prev: { shore: 0 }, cur: { shore: 0 } }), null)
  assert.equal(shoreStallTrendRow({ back: { shore: 3 }, prev: { shore: 3 }, cur: { shore: 3 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seat's own
  // verdict word (no owns) - co-existence by seat never by
  // duplication; the seat-law tail names the neighbor seats (the mid
  // seat's word, the mid-episode bill) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, swell, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(shoreStallTrendConsistent({ back: { shore: 2 }, prev: { shore: 1 }, cur: { shore: 0.5 } }), false)
  assert.equal(shoreStallTrendConsistent({ back: { shore: 2 }, prev: { shore: -1 }, cur: { shore: 0 } }), false)
  assert.equal(shoreStallTrendConsistent({ back: { shore: 2 }, prev: { shore: 1 } }), false)
  assert.equal(shoreStallTrendConsistent({ back: { shore: '2' }, prev: { shore: 1 }, cur: { shore: 0 } }), false)
  assert.equal(shoreStallTrendConsistent(null), false)
  assert.equal(shoreStallTrendConsistent([]), false)
  assert.equal(shoreStallTrendConsistent({ back: { shore: 2 }, prev: { shore: 1 }, cur: { shore: 0 } }), true)
  assert.equal(shoreStallTrendRow({ back: { shore: 2 }, prev: { shore: 1 }, cur: { shore: 0.5 } }), null)
  assert.equal(shoreStallTrendRow({ back: { shore: '2' }, prev: { shore: 1 }, cur: { shore: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // the field's own freshest swing FACE 337/338/339 hand-priced from
  // the real caches (rescueLedger owns the shore-stall count - the
  // same cells the mid seat's wire and the bill's bytes hold):
  // 0 -> 1 -> 0 rides the swing byte-exact
  const fieldRow = shoreStallTrendRow({ back: { shore: 0 }, prev: { shore: 1 }, cur: { shore: 0 } })
  assert.ok(fieldRow === swing1)
})
