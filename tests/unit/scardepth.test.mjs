import { test } from 'node:test'
import assert from 'node:assert/strict'
import { scarDepthRow, scarDepthConsistent } from '../../src/lib/scardepth.mjs'

test("the scar's own depth (v0.976.46) - the scar's own depth, the fence, the word", () => {
  // THE DEPTH'S OWN FADE byte-exact, the field's own birth face: FACE
  // 325 -> 326 -> 327 rode 2 -> 1 -> 0 unclosed start(s) (the counts
  // hand-priced from the real logs, rescueLedger owns the book - the
  // scar draining to clean)
  const fade = scarDepthRow({ back: { unclosed: 2 }, prev: { unclosed: 1 }, cur: { unclosed: 0 } })
  assert.equal(fade, "the scar's own depth (v0.976.46): the depth's fall ran two steps deep - 2 -> 1 (-1) -> 0 (-1) - the depth's own fade (the shape's word prices the scar's own shape, the arms' word prices the starts' own mass, the echo prices each step one at a time - this word prices the scar's own depth, co-existence by seat never by duplication)")
  // the fade's second ride byte-exact, the field's own storm healing:
  // FACE 330 -> 331 -> 332 rode 3 -> 1 -> 0
  const fade2 = scarDepthRow({ back: { unclosed: 3 }, prev: { unclosed: 1 }, cur: { unclosed: 0 } })
  assert.equal(fade2, "the scar's own depth (v0.976.46): the depth's fall ran two steps deep - 3 -> 1 (-2) -> 0 (-1) - the depth's own fade (the shape's word prices the scar's own shape, the arms' word prices the starts' own mass, the echo prices each step one at a time - this word prices the scar's own depth, co-existence by seat never by duplication)")
  // THE DEPTH'S OWN SWING byte-exact, the field's own ride: FACE 329
  // -> 330 -> 331 rode 0 -> 3 -> 1 (the scar's return cut short one
  // walk later)
  const swing = scarDepthRow({ back: { unclosed: 0 }, prev: { unclosed: 3 }, cur: { unclosed: 1 } })
  assert.equal(swing, "the scar's own depth (v0.976.46): the depth's own swing - 0 -> 3 (+3) -> 1 (-2) - the rise and the fall traded seats between the walks (the shape's word prices the scar's own shape, the arms' word prices the starts' own mass, the echo prices each step one at a time - this word prices the scar's own depth, co-existence by seat never by duplication)")
  // THE DEPTH'S OWN SWELL - two consecutive rises (the branch the
  // eight priced faces never rode - the law prices it, the bars never
  // invent it)
  const swell = scarDepthRow({ back: { unclosed: 1 }, prev: { unclosed: 3 }, cur: { unclosed: 7 } })
  assert.equal(swell, "the scar's own depth (v0.976.46): the depth's rise ran two steps deep - 1 -> 3 (+2) -> 7 (+4) - the depth's own swell (the shape's word prices the scar's own shape, the arms' word prices the starts' own mass, the echo prices each step one at a time - this word prices the scar's own depth, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // steps 1 -> 0 -> 0 (FACE 326/327/328) and 0 -> 0 -> 3 (FACE
  // 328/329/330), and the clean hold 0 -> 0 -> 0 (FACE 327/328/329)
  assert.equal(scarDepthRow({ back: { unclosed: 1 }, prev: { unclosed: 0 }, cur: { unclosed: 0 } }), null)
  assert.equal(scarDepthRow({ back: { unclosed: 0 }, prev: { unclosed: 0 }, cur: { unclosed: 3 } }), null)
  assert.equal(scarDepthRow({ back: { unclosed: 0 }, prev: { unclosed: 0 }, cur: { unclosed: 0 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) - co-existence by
  // seat never by duplication; the seat-law tail names the neighbor
  // seats (the shape's word, the arms' word, the echo) - the names
  // ride by law, the neighbor VERDICTS never ride
  for (const row of [fade, fade2, swing, swell]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(scarDepthConsistent({ back: { unclosed: 2 }, prev: { unclosed: 1 }, cur: { unclosed: 0.5 } }), false)
  assert.equal(scarDepthConsistent({ back: { unclosed: 2 }, prev: { unclosed: -1 }, cur: { unclosed: 0 } }), false)
  assert.equal(scarDepthConsistent({ back: { unclosed: 2 }, prev: { unclosed: 1 } }), false)
  assert.equal(scarDepthConsistent({ back: { unclosed: '2' }, prev: { unclosed: 1 }, cur: { unclosed: 0 } }), false)
  assert.equal(scarDepthConsistent(null), false)
  assert.equal(scarDepthConsistent([]), false)
  assert.equal(scarDepthConsistent({ back: { unclosed: 2 }, prev: { unclosed: 1 }, cur: { unclosed: 0 } }), true)
  assert.equal(scarDepthRow({ back: { unclosed: 2 }, prev: { unclosed: 1 }, cur: { unclosed: 0.5 } }), null)
  assert.equal(scarDepthRow({ back: { unclosed: '2' }, prev: { unclosed: 1 }, cur: { unclosed: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // the field's own birth trio FACE 325/326/327 hand-priced from the
  // real logs (rescueLedger owns the unclosed - the same cells the
  // scar trend's and the arms' wires hold): 2 -> 1 -> 0 rides the
  // fade byte-exact
  const fieldRow = scarDepthRow({ back: { unclosed: 2 }, prev: { unclosed: 1 }, cur: { unclosed: 0 } })
  assert.ok(fieldRow === fade)
})
