import { test } from 'node:test'
import assert from 'node:assert/strict'
import { releaseTrendRow, releaseTrendConsistent } from '../../src/lib/releasetrend.mjs'

test("the release's own trend (v0.976.47) - the release's own trend, the fence, the word", () => {
  // THE RELEASE'S OWN SWING byte-exact, the field's own first ride:
  // FACE 325 -> 326 -> 327 rode 12 -> 50 -> 21 release(s) (the counts
  // hand-priced from the real logs, rescueLedger owns the book - the
  // calm era's relief trading seats)
  const swing = releaseTrendRow({ back: { released: 12 }, prev: { released: 50 }, cur: { released: 21 } })
  assert.equal(swing, "the rescue release's own trend (v0.976.47): the release's own swing - 12 -> 50 (+38) -> 21 (-29) - the rise and the fall traded seats between the walks (the arms' word prices the starts' own mass, the ends' bill prices the class's own closes, the echo prices each step one at a time - this word prices the releases' own mass, co-existence by seat never by duplication)")
  // the swing's fourth ride byte-exact, the field's own storm arc:
  // FACE 330 -> 331 -> 332 rode 17 -> 67 -> 48 (the relief swelled
  // with the arms, then traded)
  const swing2 = releaseTrendRow({ back: { released: 17 }, prev: { released: 67 }, cur: { released: 48 } })
  assert.equal(swing2, "the rescue release's own trend (v0.976.47): the release's own swing - 17 -> 67 (+50) -> 48 (-19) - the rise and the fall traded seats between the walks (the arms' word prices the starts' own mass, the ends' bill prices the class's own closes, the echo prices each step one at a time - this word prices the releases' own mass, co-existence by seat never by duplication)")
  // THE RELEASE'S OWN FADE byte-exact, the field's own birth face:
  // FACE 331 -> 332 -> 333 rode 67 -> 48 -> 23 (the branch the eight
  // priced faces never rode woke on the ninth - the storm's relief
  // draining two steps deep)
  const fade = releaseTrendRow({ back: { released: 67 }, prev: { released: 48 }, cur: { released: 23 } })
  assert.equal(fade, "the rescue release's own trend (v0.976.47): the release's fall ran two steps deep - 67 -> 48 (-19) -> 23 (-25) - the release's own fade (the arms' word prices the starts' own mass, the ends' bill prices the class's own closes, the echo prices each step one at a time - this word prices the releases' own mass, co-existence by seat never by duplication)")
  // THE RELEASE'S OWN SWELL - two consecutive rises (the branch the
  // nine priced faces never rode - the law prices it, the bars never
  // invent it)
  const swell = releaseTrendRow({ back: { released: 17 }, prev: { released: 42 }, cur: { released: 67 } })
  assert.equal(swell, "the rescue release's own trend (v0.976.47): the release's rise ran two steps deep - 17 -> 42 (+25) -> 67 (+25) - the release's own swell (the arms' word prices the starts' own mass, the ends' bill prices the class's own closes, the echo prices each step one at a time - this word prices the releases' own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // steps 26 -> 17 -> 17 (FACE 328/329/330, the second step held) and
  // 17 -> 17 -> 67 (FACE 329/330/331, the first step held)
  assert.equal(releaseTrendRow({ back: { released: 26 }, prev: { released: 17 }, cur: { released: 17 } }), null)
  assert.equal(releaseTrendRow({ back: { released: 17 }, prev: { released: 17 }, cur: { released: 67 } }), null)
  assert.equal(releaseTrendRow({ back: { released: 17 }, prev: { released: 17 }, cur: { released: 17 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the bill's own
  // verdict word (no owns) - co-existence by seat never by
  // duplication; the seat-law tail names the neighbor seats (the
  // arms' word, the ends' bill, the echo) - the names ride by law,
  // the neighbor VERDICTS never ride
  for (const row of [swing, swing2, fade, swell]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(releaseTrendConsistent({ back: { released: 2 }, prev: { released: 1 }, cur: { released: 0.5 } }), false)
  assert.equal(releaseTrendConsistent({ back: { released: 2 }, prev: { released: -1 }, cur: { released: 0 } }), false)
  assert.equal(releaseTrendConsistent({ back: { released: 2 }, prev: { released: 1 } }), false)
  assert.equal(releaseTrendConsistent({ back: { released: '2' }, prev: { released: 1 }, cur: { released: 0 } }), false)
  assert.equal(releaseTrendConsistent(null), false)
  assert.equal(releaseTrendConsistent([]), false)
  assert.equal(releaseTrendConsistent({ back: { released: 2 }, prev: { released: 1 }, cur: { released: 0 } }), true)
  assert.equal(releaseTrendRow({ back: { released: 2 }, prev: { released: 1 }, cur: { released: 0.5 } }), null)
  assert.equal(releaseTrendRow({ back: { released: '2' }, prev: { released: 1 }, cur: { released: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // the field's own birth trio FACE 331/332/333 hand-priced from the
  // real logs (rescueLedger owns the released count - the same cells
  // the ends' bill's and the arms' wires hold): 67 -> 48 -> 23 rides
  // the fade byte-exact
  const fieldRow = releaseTrendRow({ back: { released: 67 }, prev: { released: 48 }, cur: { released: 23 } })
  assert.ok(fieldRow === fade)
})
