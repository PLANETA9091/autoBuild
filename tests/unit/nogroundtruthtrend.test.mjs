import { test } from 'node:test'
import assert from 'node:assert/strict'
import { noGroundTruthTrendRow, noGroundTruthTrendConsistent } from '../../src/lib/nogroundtruthtrend.mjs'

test("the no-ground-truth's own trend (v0.976.57) - the survey-blind walks' own trend, the fence, the word", () => {
  // THE NO-GROUND-TRUTH'S OWN SWELL byte-exact, the field's own birth
  // run: FACE 337 -> 338 -> 339 rode 9 -> 16 -> 18 survey-blind walk(s)
  // (the counts hand-priced from the real caches, rescueLedger owns
  // the book - the survey-blind mass swelling two walks straight)
  const swell1 = noGroundTruthTrendRow({ back: { nogt: 9 }, prev: { nogt: 16 }, cur: { nogt: 18 } })
  assert.equal(swell1, "the no-ground-truth's own trend (v0.976.57): the no-ground-truth's rise ran two steps deep - 9 -> 16 (+7) -> 18 (+2) - the no-ground-truth's own swell (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the no-ground-truth's own mass, co-existence by seat never by duplication)")
  // the swell's second ride byte-exact: FACE 338 -> 339 -> 340 rode
  // 16 -> 18 -> 22 (the survey-blind mass swelling four walks straight)
  const swell2 = noGroundTruthTrendRow({ back: { nogt: 16 }, prev: { nogt: 18 }, cur: { nogt: 22 } })
  assert.equal(swell2, "the no-ground-truth's own trend (v0.976.57): the no-ground-truth's rise ran two steps deep - 16 -> 18 (+2) -> 22 (+4) - the no-ground-truth's own swell (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the no-ground-truth's own mass, co-existence by seat never by duplication)")
  // THE NO-GROUND-TRUTH'S OWN SWING byte-exact, the field's own
  // freshest ride: FACE 339 -> 340 -> 341 rode 18 -> 22 -> 8 (the
  // field's own biggest drop - the mass draining fourteen seats one
  // walk after its own peak)
  const swing = noGroundTruthTrendRow({ back: { nogt: 18 }, prev: { nogt: 22 }, cur: { nogt: 8 } })
  assert.equal(swing, "the no-ground-truth's own trend (v0.976.57): the no-ground-truth's own swing - 18 -> 22 (+4) -> 8 (-14) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the no-ground-truth's own mass, co-existence by seat never by duplication)")
  // THE NO-GROUND-TRUTH'S OWN FADE - two consecutive falls (the branch
  // the five priced faces never rode - the law prices it, the bars
  // never invent it)
  const fade = noGroundTruthTrendRow({ back: { nogt: 22 }, prev: { nogt: 8 }, cur: { nogt: 3 } })
  assert.equal(fade, "the no-ground-truth's own trend (v0.976.57): the no-ground-truth's fall ran two steps deep - 22 -> 8 (-14) -> 3 (-5) - the no-ground-truth's own fade (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the no-ground-truth's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the held steps the five
  // priced faces never rode (every step moved) but the law prices
  assert.equal(noGroundTruthTrendRow({ back: { nogt: 22 }, prev: { nogt: 8 }, cur: { nogt: 8 } }), null)
  assert.equal(noGroundTruthTrendRow({ back: { nogt: 9 }, prev: { nogt: 9 }, cur: { nogt: 16 } }), null)
  assert.equal(noGroundTruthTrendRow({ back: { nogt: 0 }, prev: { nogt: 0 }, cur: { nogt: 0 } }), null)
  assert.equal(noGroundTruthTrendRow({ back: { nogt: 3 }, prev: { nogt: 3 }, cur: { nogt: 3 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seat's own
  // verdict word (no owns) - co-existence by seat never by
  // duplication; the seat-law tail names the neighbor seats (the mid
  // seat's word, the mid-episode bill) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swell1, swell2, swing, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(noGroundTruthTrendConsistent({ back: { nogt: 2 }, prev: { nogt: 1 }, cur: { nogt: 0.5 } }), false)
  assert.equal(noGroundTruthTrendConsistent({ back: { nogt: 2 }, prev: { nogt: -1 }, cur: { nogt: 0 } }), false)
  assert.equal(noGroundTruthTrendConsistent({ back: { nogt: 2 }, prev: { nogt: 1 } }), false)
  assert.equal(noGroundTruthTrendConsistent({ back: { nogt: '2' }, prev: { nogt: 1 }, cur: { nogt: 0 } }), false)
  assert.equal(noGroundTruthTrendConsistent(null), false)
  assert.equal(noGroundTruthTrendConsistent([]), false)
  assert.equal(noGroundTruthTrendConsistent({ back: { nogt: 2 }, prev: { nogt: 1 }, cur: { nogt: 0 } }), true)
  assert.equal(noGroundTruthTrendRow({ back: { nogt: 2 }, prev: { nogt: 1 }, cur: { nogt: 0.5 } }), null)
  assert.equal(noGroundTruthTrendRow({ back: { nogt: '2' }, prev: { nogt: 1 }, cur: { nogt: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // the field's own freshest swing FACE 339/340/341 hand-priced from
  // the real caches (rescueLedger owns the no-ground-truth count -
  // the same cells the mid seat's wire and the bill's bytes hold):
  // 18 -> 22 -> 8 rides the swing byte-exact
  const fieldRow = noGroundTruthTrendRow({ back: { nogt: 18 }, prev: { nogt: 22 }, cur: { nogt: 8 } })
  assert.ok(fieldRow === swing)
})
