import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndReverdictTrendRow, houndReverdictTrendConsistent } from '../../src/lib/houndreverdicttrend.mjs'

test("the hound re-verdict's own trend (v0.976.71) - the hound book's own first trend seat, the fence, the word", () => {
  // THE HOUND RE-VERDICT'S OWN SWELL byte-exact - the law's own price,
  // the branch the five priced faces never rode (the field held its
  // silence the whole span - the zombie toll's own first-fold
  // precedent the word's own birthright; the law prices the branch,
  // the bars never invent the arrow)
  const swell1 = houndReverdictTrendRow({ back: { verdicts: 0 }, prev: { verdicts: 2 }, cur: { verdicts: 3 } })
  assert.equal(swell1, "the hound re-verdict's own trend (v0.976.71): the hound re-verdict's rise ran two steps deep - 0 -> 2 (+2) -> 3 (+1) - the hound re-verdict's own swell (the answer's word prices the presence book's own classes, the pressure's word prices the magnets' own mix, the bane's word prices the defeats' own wins, the episode detail prices the face's own hops and flips - this word prices the hound re-verdicts' own mass, co-existence by seat never by duplication)")
  // the swell's second lawful ride byte-exact: two rises deeper
  const swell2 = houndReverdictTrendRow({ back: { verdicts: 2 }, prev: { verdicts: 5 }, cur: { verdicts: 9 } })
  assert.equal(swell2, "the hound re-verdict's own trend (v0.976.71): the hound re-verdict's rise ran two steps deep - 2 -> 5 (+3) -> 9 (+4) - the hound re-verdict's own swell (the answer's word prices the presence book's own classes, the pressure's word prices the magnets' own mix, the bane's word prices the defeats' own wins, the episode detail prices the face's own hops and flips - this word prices the hound re-verdicts' own mass, co-existence by seat never by duplication)")
  // THE HOUND RE-VERDICT'S OWN SWING byte-exact - the rise and the
  // fall trading seats (the branch the five priced faces never rode -
  // the law prices it, the bars never invent it)
  const swing = houndReverdictTrendRow({ back: { verdicts: 3 }, prev: { verdicts: 0 }, cur: { verdicts: 4 } })
  assert.equal(swing, "the hound re-verdict's own trend (v0.976.71): the hound re-verdict's own swing - 3 -> 0 (-3) -> 4 (+4) - the rise and the fall traded seats between the walks (the answer's word prices the presence book's own classes, the pressure's word prices the magnets' own mix, the bane's word prices the defeats' own wins, the episode detail prices the face's own hops and flips - this word prices the hound re-verdicts' own mass, co-existence by seat never by duplication)")
  // THE HOUND RE-VERDICT'S OWN FADE - two consecutive falls (the
  // branch the five priced faces never rode - the law prices it, the
  // bars never invent it)
  const fade = houndReverdictTrendRow({ back: { verdicts: 9 }, prev: { verdicts: 4 }, cur: { verdicts: 1 } })
  assert.equal(fade, "the hound re-verdict's own trend (v0.976.71): the hound re-verdict's fall ran two steps deep - 9 -> 4 (-5) -> 1 (-3) - the hound re-verdict's own fade (the answer's word prices the presence book's own classes, the pressure's word prices the magnets' own mix, the bane's word prices the defeats' own wins, the episode detail prices the face's own hops and flips - this word prices the hound re-verdicts' own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES - the FIELD'S OWN READ: the five priced faces
  // (347 through 351) rode 0, 0, 0, 3, 3 - the FACE 349 chain the
  // clean trio 0 -> 0 -> 0, the FACE 350 chain the arrival riding
  // unnamed behind a held first step 0 -> 0 -> 3, the FACE 351 chain
  // the held step 0 -> 3 -> 3 (the word born silent - the zombie
  // toll's own first-fold precedent held; the family's own held law
  // - the bars never invent)
  assert.equal(houndReverdictTrendRow({ back: { verdicts: 0 }, prev: { verdicts: 0 }, cur: { verdicts: 0 } }), null)
  assert.equal(houndReverdictTrendRow({ back: { verdicts: 0 }, prev: { verdicts: 0 }, cur: { verdicts: 3 } }), null)
  assert.equal(houndReverdictTrendRow({ back: { verdicts: 0 }, prev: { verdicts: 3 }, cur: { verdicts: 3 } }), null)
  assert.equal(houndReverdictTrendRow({ back: { verdicts: 2 }, prev: { verdicts: 2 }, cur: { verdicts: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the answer's word, the pressure's
  // word, the bane's word, the episode detail) - the names ride by
  // law, the neighbor VERDICTS never ride
  for (const row of [swell1, swell2, swing, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndReverdictTrendConsistent({ back: { verdicts: 2 }, prev: { verdicts: 1 }, cur: { verdicts: 0.5 } }), false)
  assert.equal(houndReverdictTrendConsistent({ back: { verdicts: 2 }, prev: { verdicts: -1 }, cur: { verdicts: 0 } }), false)
  assert.equal(houndReverdictTrendConsistent({ back: { verdicts: 2 }, prev: { verdicts: 1 } }), false)
  assert.equal(houndReverdictTrendConsistent({ back: { verdicts: '2' }, prev: { verdicts: 1 }, cur: { verdicts: 0 } }), false)
  assert.equal(houndReverdictTrendConsistent(null), false)
  assert.equal(houndReverdictTrendConsistent([]), false)
  assert.equal(houndReverdictTrendConsistent({ back: { verdicts: 2 }, prev: { verdicts: 1 }, cur: { verdicts: 0 } }), true)
  assert.equal(houndReverdictTrendRow({ back: { verdicts: 2 }, prev: { verdicts: 1 }, cur: { verdicts: 0.5 } }), null)
  assert.equal(houndReverdictTrendRow({ back: { verdicts: '2' }, prev: { verdicts: 1 }, cur: { verdicts: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own chains hand-priced from the real caches
  // (houndCensus owns the re-engagement count - the same cell the
  // episode detail line and the hound seats' wires hold): the FACE
  // 349 chain 0 -> 0 -> 0 and the FACE 350 chain 0 -> 0 -> 3 and the
  // FACE 351 chain 0 -> 3 -> 3 all ride the honest silence
  assert.equal(houndReverdictTrendRow({ back: { verdicts: 0 }, prev: { verdicts: 0 }, cur: { verdicts: 0 } }), null)
  assert.equal(houndReverdictTrendRow({ back: { verdicts: 0 }, prev: { verdicts: 0 }, cur: { verdicts: 3 } }), null)
  assert.equal(houndReverdictTrendRow({ back: { verdicts: 0 }, prev: { verdicts: 3 }, cur: { verdicts: 3 } }), null)
})
