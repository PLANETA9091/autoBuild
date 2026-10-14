import { test } from 'node:test'
import assert from 'node:assert/strict'
import { transitStallTrendRow, transitStallTrendConsistent } from '../../src/lib/transitstalltrend.mjs'

test("the transit-stall's own trend (v0.976.60) - the transit-stalled walks' own trend, the fence, the word", () => {
  // THE TRANSIT-STALL'S OWN SWING byte-exact, the field's own freshest
  // ride: FACE 341 -> 342 -> 343 rode 3 -> 0 -> 3 transit-stalled
  // walk(s) (the counts hand-priced from the real caches,
  // rescueLedger owns the book - the quiet face's own drain and the
  // refill one walk later)
  const swing1 = transitStallTrendRow({ back: { transit: 3 }, prev: { transit: 0 }, cur: { transit: 3 } })
  assert.equal(swing1, "the transit-stall's own trend (v0.976.60): the transit-stall's own swing - 3 -> 0 (-3) -> 3 (+3) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the transit-stall's own mass, co-existence by seat never by duplication)")
  // the swing's second ride byte-exact: FACE 340 -> 341 -> 342 rode
  // 0 -> 3 -> 0 (the stall's own arrival and the quiet face's drain)
  const swing2 = transitStallTrendRow({ back: { transit: 0 }, prev: { transit: 3 }, cur: { transit: 0 } })
  assert.equal(swing2, "the transit-stall's own trend (v0.976.60): the transit-stall's own swing - 0 -> 3 (+3) -> 0 (-3) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the transit-stall's own mass, co-existence by seat never by duplication)")
  // the swing's third ride byte-exact: FACE 337 -> 338 -> 339 rode
  // 0 -> 5 -> 0 (the field's own biggest transit bill draining back
  // to a clean face one walk later)
  const swing3 = transitStallTrendRow({ back: { transit: 0 }, prev: { transit: 5 }, cur: { transit: 0 } })
  assert.equal(swing3, "the transit-stall's own trend (v0.976.60): the transit-stall's own swing - 0 -> 5 (+5) -> 0 (-5) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the transit-stall's own mass, co-existence by seat never by duplication)")
  // the swing's fourth ride byte-exact: FACE 336 -> 337 -> 338 rode
  // 1 -> 0 -> 5 (the clean face's own drain and the storm's refill)
  const swing4 = transitStallTrendRow({ back: { transit: 1 }, prev: { transit: 0 }, cur: { transit: 5 } })
  assert.equal(swing4, "the transit-stall's own trend (v0.976.60): the transit-stall's own swing - 1 -> 0 (-1) -> 5 (+5) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the transit-stall's own mass, co-existence by seat never by duplication)")
  // THE TRANSIT-STALL'S OWN SWELL - two consecutive rises (the branch
  // the ten priced faces never rode - the law prices it, the bars
  // never invent it; the birth run's own direction anchor)
  const swell = transitStallTrendRow({ back: { transit: 0 }, prev: { transit: 3 }, cur: { transit: 9 } })
  assert.equal(swell, "the transit-stall's own trend (v0.976.60): the transit-stall's rise ran two steps deep - 0 -> 3 (+3) -> 9 (+6) - the transit-stall's own swell (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the transit-stall's own mass, co-existence by seat never by duplication)")
  // THE TRANSIT-STALL'S OWN FADE - two consecutive falls (the branch
  // the ten priced faces never rode either)
  const fade = transitStallTrendRow({ back: { transit: 9 }, prev: { transit: 3 }, cur: { transit: 0 } })
  assert.equal(fade, "the transit-stall's own trend (v0.976.60): the transit-stall's fall ran two steps deep - 9 -> 3 (-6) -> 0 (-3) - the transit-stall's own fade (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the transit-stall's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // rides: FACE 335 -> 336 -> 337 rode 1 -> 1 -> 0 (the first step
  // held), FACE 338 -> 339 -> 340 rode 5 -> 0 -> 0 (the second step
  // held), FACE 339 -> 340 -> 341 rode 0 -> 0 -> 3 (the record's own
  // arrival riding unnamed behind a held first step)
  assert.equal(transitStallTrendRow({ back: { transit: 1 }, prev: { transit: 1 }, cur: { transit: 0 } }), null)
  assert.equal(transitStallTrendRow({ back: { transit: 5 }, prev: { transit: 0 }, cur: { transit: 0 } }), null)
  assert.equal(transitStallTrendRow({ back: { transit: 0 }, prev: { transit: 0 }, cur: { transit: 3 } }), null)
  assert.equal(transitStallTrendRow({ back: { transit: 0 }, prev: { transit: 0 }, cur: { transit: 0 } }), null)
  assert.equal(transitStallTrendRow({ back: { transit: 3 }, prev: { transit: 3 }, cur: { transit: 3 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seat's own
  // verdict word (no owns) - co-existence by seat never by
  // duplication; the seat-law tail names the neighbor seats (the mid
  // seat's word, the mid-episode bill) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, swing4, swell, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(transitStallTrendConsistent({ back: { transit: 2 }, prev: { transit: 1 }, cur: { transit: 0.5 } }), false)
  assert.equal(transitStallTrendConsistent({ back: { transit: 2 }, prev: { transit: -1 }, cur: { transit: 0 } }), false)
  assert.equal(transitStallTrendConsistent({ back: { transit: 2 }, prev: { transit: 1 } }), false)
  assert.equal(transitStallTrendConsistent({ back: { transit: '2' }, prev: { transit: 1 }, cur: { transit: 0 } }), false)
  assert.equal(transitStallTrendConsistent(null), false)
  assert.equal(transitStallTrendConsistent([]), false)
  assert.equal(transitStallTrendConsistent({ back: { transit: 2 }, prev: { transit: 1 }, cur: { transit: 0 } }), true)
  assert.equal(transitStallTrendRow({ back: { transit: 2 }, prev: { transit: 1 }, cur: { transit: 0.5 } }), null)
  assert.equal(transitStallTrendRow({ back: { transit: '2' }, prev: { transit: 1 }, cur: { transit: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // the field's own freshest swing FACE 341/342/343 hand-priced from
  // the real caches (rescueLedger owns the transit-stall count - the
  // same cells the mid seat's wire and the bill's bytes hold):
  // 3 -> 0 -> 3 rides the swing byte-exact
  const fieldRow = transitStallTrendRow({ back: { transit: 3 }, prev: { transit: 0 }, cur: { transit: 3 } })
  assert.ok(fieldRow === swing1)
})
