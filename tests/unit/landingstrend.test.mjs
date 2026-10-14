import { test } from 'node:test'
import assert from 'node:assert/strict'
import { landingsTrendRow, landingsTrendConsistent } from '../../src/lib/landingstrend.mjs'

test("the rescue landings' own trend (v0.976.49) - the landings' own trend, the fence, the word", () => {
  // THE LANDINGS' OWN FADE byte-exact, the field's own birth face:
  // FACE 333 -> 334 -> 335 rode 5 -> 3 -> 1 complete end(s) (the
  // counts hand-priced from the real logs, rescueLedger owns the
  // book - the storm's landings draining two steps deep)
  const fade = landingsTrendRow({ back: { complete: 5 }, prev: { complete: 3 }, cur: { complete: 1 } })
  assert.equal(fade, "the rescue landings' own trend (v0.976.49): the landings' fall ran two steps deep - 5 -> 3 (-2) -> 1 (-2) - the landings' own fade (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the ends' bill prices the class's own closes - this word prices the landings' own mass, co-existence by seat never by duplication)")
  // the fade's second ride byte-exact, the field's own calm drain:
  // FACE 332 -> 333 -> 334 rode 11 -> 5 -> 3
  const fade2 = landingsTrendRow({ back: { complete: 11 }, prev: { complete: 5 }, cur: { complete: 3 } })
  assert.equal(fade2, "the rescue landings' own trend (v0.976.49): the landings' fall ran two steps deep - 11 -> 5 (-6) -> 3 (-2) - the landings' own fade (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the ends' bill prices the class's own closes - this word prices the landings' own mass, co-existence by seat never by duplication)")
  // the fade's third ride byte-exact, the field's own first walk:
  // FACE 329 -> 330 -> 331 rode 7 -> 5 -> 4
  const fade3 = landingsTrendRow({ back: { complete: 7 }, prev: { complete: 5 }, cur: { complete: 4 } })
  assert.equal(fade3, "the rescue landings' own trend (v0.976.49): the landings' fall ran two steps deep - 7 -> 5 (-2) -> 4 (-1) - the landings' own fade (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the ends' bill prices the class's own closes - this word prices the landings' own mass, co-existence by seat never by duplication)")
  // THE LANDINGS' OWN SWING byte-exact, the field's own storm arc:
  // FACE 331 -> 332 -> 333 rode 4 -> 11 -> 5 (the storm's landings
  // swelling and trading)
  const swing = landingsTrendRow({ back: { complete: 4 }, prev: { complete: 11 }, cur: { complete: 5 } })
  assert.equal(swing, "the rescue landings' own trend (v0.976.49): the landings' own swing - 4 -> 11 (+7) -> 5 (-6) - the rise and the fall traded seats between the walks (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the ends' bill prices the class's own closes - this word prices the landings' own mass, co-existence by seat never by duplication)")
  // THE LANDINGS' OWN SWELL - two consecutive rises (the branch the
  // ten priced faces never rode - the law prices it, the bars never
  // invent it)
  const swell = landingsTrendRow({ back: { complete: 4 }, prev: { complete: 7 }, cur: { complete: 11 } })
  assert.equal(swell, "the rescue landings' own trend (v0.976.49): the landings' rise ran two steps deep - 4 -> 7 (+3) -> 11 (+4) - the landings' own swell (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the ends' bill prices the class's own closes - this word prices the landings' own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // steps 11 -> 7 -> 7 (FACE 327/328/329, the second step held) and
  // 7 -> 7 -> 5 (FACE 328/329/330, the first step held)
  assert.equal(landingsTrendRow({ back: { complete: 11 }, prev: { complete: 7 }, cur: { complete: 7 } }), null)
  assert.equal(landingsTrendRow({ back: { complete: 7 }, prev: { complete: 7 }, cur: { complete: 5 } }), null)
  assert.equal(landingsTrendRow({ back: { complete: 7 }, prev: { complete: 7 }, cur: { complete: 7 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the bill's own
  // verdict word (no owns) - co-existence by seat never by
  // duplication; the seat-law tail names the neighbor seats (the
  // arms' word, the release's word, the ends' bill, the echo) - the
  // names ride by law, the neighbor VERDICTS never ride
  for (const row of [fade, fade2, fade3, swing, swell]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(landingsTrendConsistent({ back: { complete: 2 }, prev: { complete: 1 }, cur: { complete: 0.5 } }), false)
  assert.equal(landingsTrendConsistent({ back: { complete: 2 }, prev: { complete: -1 }, cur: { complete: 0 } }), false)
  assert.equal(landingsTrendConsistent({ back: { complete: 2 }, prev: { complete: 1 } }), false)
  assert.equal(landingsTrendConsistent({ back: { complete: '2' }, prev: { complete: 1 }, cur: { complete: 0 } }), false)
  assert.equal(landingsTrendConsistent(null), false)
  assert.equal(landingsTrendConsistent([]), false)
  assert.equal(landingsTrendConsistent({ back: { complete: 2 }, prev: { complete: 1 }, cur: { complete: 0 } }), true)
  assert.equal(landingsTrendRow({ back: { complete: 2 }, prev: { complete: 1 }, cur: { complete: 0.5 } }), null)
  assert.equal(landingsTrendRow({ back: { complete: '2' }, prev: { complete: 1 }, cur: { complete: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // the field's own birth trio FACE 333/334/335 hand-priced from the
  // real logs (rescueLedger owns the complete count - the same cells
  // the ends' bill's, the arms' and the release's wires hold):
  // 5 -> 3 -> 1 rides the fade byte-exact
  const fieldRow = landingsTrendRow({ back: { complete: 5 }, prev: { complete: 3 }, cur: { complete: 1 } })
  assert.ok(fieldRow === fade)
})
