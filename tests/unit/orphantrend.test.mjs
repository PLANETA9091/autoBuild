import { test } from 'node:test'
import assert from 'node:assert/strict'
import { orphanTrendRow, orphanTrendConsistent } from '../../src/lib/orphantrend.mjs'

test("the orphans' own trend (v0.976.54) - the orphans' own trend, the fence, the word", () => {
  // THE ORPHANS' OWN SWING byte-exact, the field's own swing:
  // FACE 337 -> 338 -> 339 rode 1 -> 3 -> 1 orphan end(s) (the counts
  // hand-priced from the real caches, rescueLedger owns the book - the
  // pair the face 338 swell raised draining back to a clean face one
  // walk later)
  const swing = orphanTrendRow({ back: { orphans: 1 }, prev: { orphans: 3 }, cur: { orphans: 1 } })
  assert.equal(swing, "the orphans' own trend (v0.976.54): the orphans' own swing - 1 -> 3 (+2) -> 1 (-2) - the rise and the fall traded seats between the walks (the owner's word prices the face's own seat, the scar's word prices the unclosed depth - this word prices the orphans' own count, co-existence by seat never by duplication)")
  // THE ORPHANS' OWN SWELL byte-exact, the field's own birth window:
  // FACE 336 -> 337 -> 338 rode 0 -> 1 -> 3 (the orphan ends arriving
  // two walks straight after three clean faces)
  const swell = orphanTrendRow({ back: { orphans: 0 }, prev: { orphans: 1 }, cur: { orphans: 3 } })
  assert.equal(swell, "the orphans' own trend (v0.976.54): the orphans' rise ran two steps deep - 0 -> 1 (+1) -> 3 (+2) - the orphans' own swell (the owner's word prices the face's own seat, the scar's word prices the unclosed depth - this word prices the orphans' own count, co-existence by seat never by duplication)")
  // THE ORPHANS' OWN FADE - two consecutive falls (the branch the six
  // priced faces never rode - the law prices it, the bars never
  // invent it)
  const fade = orphanTrendRow({ back: { orphans: 3 }, prev: { orphans: 2 }, cur: { orphans: 0 } })
  assert.equal(fade, "the orphans' own trend (v0.976.54): the orphans' fall ran two steps deep - 3 -> 2 (-1) -> 0 (-2) - the orphans' own fade (the owner's word prices the face's own seat, the scar's word prices the unclosed depth - this word prices the orphans' own count, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // steps 0 -> 0 -> 0 (FACE 334/335/336, the whole arc clean) and
  // 0 -> 0 -> 1 (FACE 335/336/337, the first step held)
  assert.equal(orphanTrendRow({ back: { orphans: 0 }, prev: { orphans: 0 }, cur: { orphans: 0 } }), null)
  assert.equal(orphanTrendRow({ back: { orphans: 0 }, prev: { orphans: 0 }, cur: { orphans: 1 } }), null)
  assert.equal(orphanTrendRow({ back: { orphans: 1 }, prev: { orphans: 1 }, cur: { orphans: 0 } }), null)
  assert.equal(orphanTrendRow({ back: { orphans: 1 }, prev: { orphans: 0 }, cur: { orphans: 0 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the owner's own
  // verdict word (no owns) - co-existence by seat never by
  // duplication; the seat-law tail names the neighbor seats (the
  // owner's word, the scar's word) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing, swell, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(orphanTrendConsistent({ back: { orphans: 2 }, prev: { orphans: 1 }, cur: { orphans: 0.5 } }), false)
  assert.equal(orphanTrendConsistent({ back: { orphans: 2 }, prev: { orphans: -1 }, cur: { orphans: 0 } }), false)
  assert.equal(orphanTrendConsistent({ back: { orphans: 2 }, prev: { orphans: 1 } }), false)
  assert.equal(orphanTrendConsistent({ back: { orphans: '2' }, prev: { orphans: 1 }, cur: { orphans: 0 } }), false)
  assert.equal(orphanTrendConsistent(null), false)
  assert.equal(orphanTrendConsistent([]), false)
  assert.equal(orphanTrendConsistent({ back: { orphans: 2 }, prev: { orphans: 1 }, cur: { orphans: 0 } }), true)
  assert.equal(orphanTrendRow({ back: { orphans: 2 }, prev: { orphans: 1 }, cur: { orphans: 0.5 } }), null)
  assert.equal(orphanTrendRow({ back: { orphans: '2' }, prev: { orphans: 1 }, cur: { orphans: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // the field's own swing FACE 337/338/339 hand-priced from the real
  // caches (rescueLedger owns the orphan count - the same cells the
  // owner's word's, the scar's word's and the starts' wires hold):
  // 1 -> 3 -> 1 rides the swing byte-exact
  const fieldRow = orphanTrendRow({ back: { orphans: 1 }, prev: { orphans: 3 }, cur: { orphans: 1 } })
  assert.ok(fieldRow === swing)
})
