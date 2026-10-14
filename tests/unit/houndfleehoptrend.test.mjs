import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndFleeHopTrendRow, houndFleeHopTrendConsistent } from '../../src/lib/houndfleehoptrend.mjs'

test("the flee hop's own trend (v0.976.74) - the hound book's own third trend seat, the fence, the word", () => {
  // THE FLEE HOP'S OWN FADE byte-exact - THE FIELD'S OWN BIRTH RIDE:
  // the FACE 352 chain the census priced by hand (350 rode 4, 351
  // rode 3, 352 rode 0) - the word born speaking, the second hound
  // word the field greeted with an arrow (the verdict flip's own
  // v0.976.73 birth the swell precedent beside it)
  const fade1 = houndFleeHopTrendRow({ back: { hops: 4 }, prev: { hops: 3 }, cur: { hops: 0 } })
  assert.equal(fade1, "the flee hop's own trend (v0.976.74): the flee hop's fall ran two steps deep - 4 -> 3 (-1) -> 0 (-3) - the flee hop's own fade (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the answer's word prices the presence book's own classes - the episode detail prints the face's own hops - this word prices the flee hops' own mass, co-existence by seat never by duplication)")
  // the fade's second lawful ride byte-exact: two falls deeper
  const fade2 = houndFleeHopTrendRow({ back: { hops: 5 }, prev: { hops: 2 }, cur: { hops: 0 } })
  assert.equal(fade2, "the flee hop's own trend (v0.976.74): the flee hop's fall ran two steps deep - 5 -> 2 (-3) -> 0 (-2) - the flee hop's own fade (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the answer's word prices the presence book's own classes - the episode detail prints the face's own hops - this word prices the flee hops' own mass, co-existence by seat never by duplication)")
  // THE FLEE HOP'S OWN SWING byte-exact - THE FIELD'S OWN CHAINS: the
  // FACE 349 chain the census priced by hand (347 rode 0, 348 rode 1,
  // 349 rode 0) and the FACE 350 chain (348 rode 1, 349 rode 0, 350
  // rode 4) - the rise and the fall trading seats between the walks
  const swing1 = houndFleeHopTrendRow({ back: { hops: 0 }, prev: { hops: 1 }, cur: { hops: 0 } })
  assert.equal(swing1, "the flee hop's own trend (v0.976.74): the flee hop's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the answer's word prices the presence book's own classes - the episode detail prints the face's own hops - this word prices the flee hops' own mass, co-existence by seat never by duplication)")
  const swing2 = houndFleeHopTrendRow({ back: { hops: 1 }, prev: { hops: 0 }, cur: { hops: 4 } })
  assert.equal(swing2, "the flee hop's own trend (v0.976.74): the flee hop's own swing - 1 -> 0 (-1) -> 4 (+4) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the answer's word prices the presence book's own classes - the episode detail prints the face's own hops - this word prices the flee hops' own mass, co-existence by seat never by duplication)")
  // THE FLEE HOP'S OWN SWELL byte-exact - the branch the six priced
  // faces never rode (the law prices it, the bars never invent it)
  const swell = houndFleeHopTrendRow({ back: { hops: 1 }, prev: { hops: 3 }, cur: { hops: 5 } })
  assert.equal(swell, "the flee hop's own trend (v0.976.74): the flee hop's rise ran two steps deep - 1 -> 3 (+2) -> 5 (+2) - the flee hop's own swell (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the answer's word prices the presence book's own classes - the episode detail prints the face's own hops - this word prices the flee hops' own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES - the FIELD'S OWN READ: the FACE 347 chain
  // the clean trio 0 -> 0 -> 0, the held first step 0 -> 0 -> 1, the
  // held second steps (the family's own held law - the bars never
  // invent)
  assert.equal(houndFleeHopTrendRow({ back: { hops: 0 }, prev: { hops: 0 }, cur: { hops: 0 } }), null)
  assert.equal(houndFleeHopTrendRow({ back: { hops: 0 }, prev: { hops: 0 }, cur: { hops: 1 } }), null)
  assert.equal(houndFleeHopTrendRow({ back: { hops: 1 }, prev: { hops: 2 }, cur: { hops: 2 } }), null)
  assert.equal(houndFleeHopTrendRow({ back: { hops: 4 }, prev: { hops: 3 }, cur: { hops: 3 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the re-verdict's word, the
  // verdict flip's word, the answer's word) - the names ride by law,
  // the neighbor VERDICTS never ride
  for (const row of [fade1, fade2, swing1, swing2, swell]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndFleeHopTrendConsistent({ back: { hops: 2 }, prev: { hops: 1 }, cur: { hops: 0.5 } }), false)
  assert.equal(houndFleeHopTrendConsistent({ back: { hops: 2 }, prev: { hops: -1 }, cur: { hops: 0 } }), false)
  assert.equal(houndFleeHopTrendConsistent({ back: { hops: 2 }, prev: { hops: 1 } }), false)
  assert.equal(houndFleeHopTrendConsistent({ back: { hops: '2' }, prev: { hops: 1 }, cur: { hops: 0 } }), false)
  assert.equal(houndFleeHopTrendConsistent(null), false)
  assert.equal(houndFleeHopTrendConsistent([]), false)
  assert.equal(houndFleeHopTrendConsistent({ back: { hops: 2 }, prev: { hops: 1 }, cur: { hops: 0 } }), true)
  assert.equal(houndFleeHopTrendRow({ back: { hops: 2 }, prev: { hops: 1 }, cur: { hops: 0.5 } }), null)
  assert.equal(houndFleeHopTrendRow({ back: { hops: '2' }, prev: { hops: 1 }, cur: { hops: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own chains hand-priced from the real caches
  // (houndCensus owns the hop count - the same cell the episode
  // detail line and the hound seats' wires hold): the FACE 347 chain
  // 0 -> 0 -> 0 rides the honest silence, the FACE 351 chain 0 -> 4
  // -> 3 rides the field's own swing, and the FACE 352 chain 4 -> 3
  // -> 0 rides the field's own fade (the birth ride byte-exact)
  assert.equal(houndFleeHopTrendRow({ back: { hops: 0 }, prev: { hops: 0 }, cur: { hops: 0 } }), null)
  assert.equal(houndFleeHopTrendRow({ back: { hops: 0 }, prev: { hops: 4 }, cur: { hops: 3 } }), swing1.replace('0 -> 1 (+1) -> 0 (-1)', '0 -> 4 (+4) -> 3 (-1)'))
  assert.equal(houndFleeHopTrendRow({ back: { hops: 4 }, prev: { hops: 3 }, cur: { hops: 0 } }), fade1)
})
