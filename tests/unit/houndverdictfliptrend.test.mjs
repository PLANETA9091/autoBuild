import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndVerdictFlipTrendRow, houndVerdictFlipTrendConsistent } from '../../src/lib/houndverdictfliptrend.mjs'

test("the verdict flip's own trend (v0.976.73) - the hound book's own second trend seat, the fence, the word", () => {
  // THE VERDICT FLIP'S OWN SWELL byte-exact - THE FIELD'S OWN BIRTH
  // RIDE: the FACE 351 chain the census priced by hand (349 rode 0,
  // 350 rode 1, 351 rode 2) - the word born speaking, the first hound
  // word the field greeted with an arrow (the re-verdict's own
  // v0.976.71 birth the held-step precedent beside it)
  const swell1 = houndVerdictFlipTrendRow({ back: { flips: 0 }, prev: { flips: 1 }, cur: { flips: 2 } })
  assert.equal(swell1, "the verdict flip's own trend (v0.976.73): the verdict flip's rise ran two steps deep - 0 -> 1 (+1) -> 2 (+1) - the verdict flip's own swell (the re-verdict's word prices the re-engagements' own mass, the answer's word prices the presence book's own classes, the pressure's word prices the magnets' own mix - this word prices the verdict flips' own mass, co-existence by seat never by duplication)")
  // the swell's second lawful ride byte-exact: two rises deeper
  const swell2 = houndVerdictFlipTrendRow({ back: { flips: 1 }, prev: { flips: 3 }, cur: { flips: 5 } })
  assert.equal(swell2, "the verdict flip's own trend (v0.976.73): the verdict flip's rise ran two steps deep - 1 -> 3 (+2) -> 5 (+2) - the verdict flip's own swell (the re-verdict's word prices the re-engagements' own mass, the answer's word prices the presence book's own classes, the pressure's word prices the magnets' own mix - this word prices the verdict flips' own mass, co-existence by seat never by duplication)")
  // THE VERDICT FLIP'S OWN SWING byte-exact - the rise and the fall
  // trading seats (the branch the five priced faces never rode - the
  // law prices it, the bars never invent it)
  const swing = houndVerdictFlipTrendRow({ back: { flips: 2 }, prev: { flips: 0 }, cur: { flips: 3 } })
  assert.equal(swing, "the verdict flip's own trend (v0.976.73): the verdict flip's own swing - 2 -> 0 (-2) -> 3 (+3) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the answer's word prices the presence book's own classes, the pressure's word prices the magnets' own mix - this word prices the verdict flips' own mass, co-existence by seat never by duplication)")
  // THE VERDICT FLIP'S OWN FADE - two consecutive falls (the branch
  // the five priced faces never rode - the law prices it, the bars
  // never invent it)
  const fade = houndVerdictFlipTrendRow({ back: { flips: 5 }, prev: { flips: 2 }, cur: { flips: 0 } })
  assert.equal(fade, "the verdict flip's own trend (v0.976.73): the verdict flip's fall ran two steps deep - 5 -> 2 (-3) -> 0 (-2) - the verdict flip's own fade (the re-verdict's word prices the re-engagements' own mass, the answer's word prices the presence book's own classes, the pressure's word prices the magnets' own mix - this word prices the verdict flips' own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES - the FIELD'S OWN READ: the five priced faces
  // (347 through 351) rode 0, 0, 0, 1, 2 - the FACE 349 chain the
  // clean trio 0 -> 0 -> 0, the FACE 350 chain the arrival riding
  // unnamed behind a held first step 0 -> 0 -> 1 (the family's own
  // held law - the bars never invent)
  assert.equal(houndVerdictFlipTrendRow({ back: { flips: 0 }, prev: { flips: 0 }, cur: { flips: 0 } }), null)
  assert.equal(houndVerdictFlipTrendRow({ back: { flips: 0 }, prev: { flips: 0 }, cur: { flips: 1 } }), null)
  assert.equal(houndVerdictFlipTrendRow({ back: { flips: 2 }, prev: { flips: 2 }, cur: { flips: 2 } }), null)
  assert.equal(houndVerdictFlipTrendRow({ back: { flips: 1 }, prev: { flips: 2 }, cur: { flips: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the re-verdict's word, the
  // answer's word, the pressure's word) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swell1, swell2, swing, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndVerdictFlipTrendConsistent({ back: { flips: 2 }, prev: { flips: 1 }, cur: { flips: 0.5 } }), false)
  assert.equal(houndVerdictFlipTrendConsistent({ back: { flips: 2 }, prev: { flips: -1 }, cur: { flips: 0 } }), false)
  assert.equal(houndVerdictFlipTrendConsistent({ back: { flips: 2 }, prev: { flips: 1 } }), false)
  assert.equal(houndVerdictFlipTrendConsistent({ back: { flips: '2' }, prev: { flips: 1 }, cur: { flips: 0 } }), false)
  assert.equal(houndVerdictFlipTrendConsistent(null), false)
  assert.equal(houndVerdictFlipTrendConsistent([]), false)
  assert.equal(houndVerdictFlipTrendConsistent({ back: { flips: 2 }, prev: { flips: 1 }, cur: { flips: 0 } }), true)
  assert.equal(houndVerdictFlipTrendRow({ back: { flips: 2 }, prev: { flips: 1 }, cur: { flips: 0.5 } }), null)
  assert.equal(houndVerdictFlipTrendRow({ back: { flips: '2' }, prev: { flips: 1 }, cur: { flips: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own chains hand-priced from the real caches
  // (houndCensus owns the flip count - the same cell the episode
  // detail line and the hound seats' wires hold): the FACE 349 chain
  // 0 -> 0 -> 0 and the FACE 350 chain 0 -> 0 -> 1 ride the honest
  // silence, and the FACE 351 chain 0 -> 1 -> 2 rides the field's own
  // swell (the birth ride byte-exact)
  assert.equal(houndVerdictFlipTrendRow({ back: { flips: 0 }, prev: { flips: 0 }, cur: { flips: 0 } }), null)
  assert.equal(houndVerdictFlipTrendRow({ back: { flips: 0 }, prev: { flips: 0 }, cur: { flips: 1 } }), null)
  assert.equal(houndVerdictFlipTrendRow({ back: { flips: 0 }, prev: { flips: 1 }, cur: { flips: 2 } }), swell1)
})
