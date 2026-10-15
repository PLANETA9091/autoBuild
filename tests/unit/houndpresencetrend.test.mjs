import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndPresenceTrendRow, houndPresenceTrendConsistent } from '../../src/lib/houndpresencetrend.mjs'

test("the presence's own trend (v0.976.77) - the hound book's own sixth trend seat, the fence, the word", () => {
  // THE PRESENCE'S OWN SWING byte-exact - the FIELD'S OWN CHAINS the
  // census priced by hand: the FACE 349 chain (347 rode 0, 348 rode
  // 16, 349 rode 0) - the word's own first priced arrow
  const swing1 = houndPresenceTrendRow({ back: { presence: 0 }, prev: { presence: 16 }, cur: { presence: 0 } })
  assert.equal(swing1, "the presence's own trend (v0.976.77): the presence's own swing - 0 -> 16 (+16) -> 0 (-16) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the answer's word prices which class the presence book holds within one face - the presence line prints the face's own answer moments - this word prices the presence's own mass, co-existence by seat never by duplication)")
  // the swing's second lawful ride byte-exact - the FACE 350 chain
  // the field priced (348 rode 16, 349 rode 0, 350 rode 27): the
  // storm's own arithmetic traded the other way
  const swing2 = houndPresenceTrendRow({ back: { presence: 16 }, prev: { presence: 0 }, cur: { presence: 27 } })
  assert.equal(swing2, "the presence's own trend (v0.976.77): the presence's own swing - 16 -> 0 (-16) -> 27 (+27) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the answer's word prices which class the presence book holds within one face - the presence line prints the face's own answer moments - this word prices the presence's own mass, co-existence by seat never by duplication)")
  // the swing's third lawful ride byte-exact - the FACE 351 chain
  // the field priced (349 rode 0, 350 rode 27, 351 rode 10)
  const swing3 = houndPresenceTrendRow({ back: { presence: 0 }, prev: { presence: 27 }, cur: { presence: 10 } })
  assert.equal(swing3, "the presence's own trend (v0.976.77): the presence's own swing - 0 -> 27 (+27) -> 10 (-17) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the answer's word prices which class the presence book holds within one face - the presence line prints the face's own answer moments - this word prices the presence's own mass, co-existence by seat never by duplication)")
  // THE PRESENCE'S OWN FADE byte-exact - THE FIELD'S OWN BIRTH RIDE:
  // the FACE 352 chain the census priced by hand (350 rode 27, 351
  // rode 10, 352 rode 0) - the word born speaking, the wake of 27
  // collapsed to the honest 0 the walk after (the flee hop's own
  // v0.976.74 birth the fade precedent beside it)
  const fade1 = houndPresenceTrendRow({ back: { presence: 27 }, prev: { presence: 10 }, cur: { presence: 0 } })
  assert.equal(fade1, "the presence's own trend (v0.976.77): the presence's fall ran two steps deep - 27 -> 10 (-17) -> 0 (-10) - the presence's own fade (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the answer's word prices which class the presence book holds within one face - the presence line prints the face's own answer moments - this word prices the presence's own mass, co-existence by seat never by duplication)")
  // THE PRESENCE'S OWN SWELL byte-exact - the branch the eight priced
  // faces never rode (the law prices it, the bars never invent it)
  const swell = houndPresenceTrendRow({ back: { presence: 1 }, prev: { presence: 2 }, cur: { presence: 4 } })
  assert.equal(swell, "the presence's own trend (v0.976.77): the presence's rise ran two steps deep - 1 -> 2 (+1) -> 4 (+2) - the presence's own swell (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the answer's word prices which class the presence book holds within one face - the presence line prints the face's own answer moments - this word prices the presence's own mass, co-existence by seat never by duplication)")
  // the fade's second lawful ride byte-exact (a deeper storm the
  // field has not held - the law prices it, the bars never invent)
  const fade2 = houndPresenceTrendRow({ back: { presence: 30 }, prev: { presence: 20 }, cur: { presence: 5 } })
  assert.equal(fade2, "the presence's own trend (v0.976.77): the presence's fall ran two steps deep - 30 -> 20 (-10) -> 5 (-15) - the presence's own fade (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the answer's word prices which class the presence book holds within one face - the presence line prints the face's own answer moments - this word prices the presence's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES - the FIELD'S OWN READ: the FACE 353 chain
  // the held second step 10 -> 0 -> 0, the FACE 354 chain the held
  // first step 0 -> 0 -> 11 (the arrival rode unnamed - the
  // re-verdict's own FACE 350 arrival precedent, the win's own FACE
  // 351 precedent beside it), the clean trio, and the flat repeat
  // (the family's own held law - the bars never invent)
  assert.equal(houndPresenceTrendRow({ back: { presence: 10 }, prev: { presence: 0 }, cur: { presence: 0 } }), null)
  assert.equal(houndPresenceTrendRow({ back: { presence: 0 }, prev: { presence: 0 }, cur: { presence: 11 } }), null)
  assert.equal(houndPresenceTrendRow({ back: { presence: 0 }, prev: { presence: 0 }, cur: { presence: 0 } }), null)
  assert.equal(houndPresenceTrendRow({ back: { presence: 2 }, prev: { presence: 2 }, cur: { presence: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the re-verdict's word, the
  // verdict flip's word, the flee hop's word, the win's word, the
  // kill's word, the answer's word) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, fade1, fade2, swell]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndPresenceTrendConsistent({ back: { presence: 2 }, prev: { presence: 1 }, cur: { presence: 0.5 } }), false)
  assert.equal(houndPresenceTrendConsistent({ back: { presence: 2 }, prev: { presence: -1 }, cur: { presence: 0 } }), false)
  assert.equal(houndPresenceTrendConsistent({ back: { presence: 2 }, prev: { presence: 1 } }), false)
  assert.equal(houndPresenceTrendConsistent({ back: { presence: '2' }, prev: { presence: 1 }, cur: { presence: 0 } }), false)
  assert.equal(houndPresenceTrendConsistent(null), false)
  assert.equal(houndPresenceTrendConsistent([]), false)
  assert.equal(houndPresenceTrendConsistent({ back: { presence: 2 }, prev: { presence: 1 }, cur: { presence: 0 } }), true)
  assert.equal(houndPresenceTrendRow({ back: { presence: 2 }, prev: { presence: 1 }, cur: { presence: 0.5 } }), null)
  assert.equal(houndPresenceTrendRow({ back: { presence: '2' }, prev: { presence: 1 }, cur: { presence: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own chains hand-priced from the real caches
  // (houndCensus owns the presence count - the same cell the presence
  // line and the answer's seat's wires hold): the FACE 353 chain
  // 10 -> 0 -> 0 rides the honest silence, the FACE 354 chain
  // 0 -> 0 -> 11 rides the honest silence, and the FACE 352 chain
  // 27 -> 10 -> 0 rides the field's own fade (the birth ride
  // byte-exact)
  assert.equal(houndPresenceTrendRow({ back: { presence: 10 }, prev: { presence: 0 }, cur: { presence: 0 } }), null)
  assert.equal(houndPresenceTrendRow({ back: { presence: 0 }, prev: { presence: 0 }, cur: { presence: 11 } }), null)
  assert.equal(houndPresenceTrendRow({ back: { presence: 27 }, prev: { presence: 10 }, cur: { presence: 0 } }), fade1)
})
