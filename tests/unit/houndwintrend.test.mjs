import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndWinTrendRow, houndWinTrendConsistent } from '../../src/lib/houndwintrend.mjs'

test("the win's own trend (v0.976.75) - the hound book's own fourth trend seat, the fence, the word", () => {
  // THE WIN'S OWN SWING byte-exact - THE FIELD'S OWN BIRTH RIDE: the
  // FACE 352 chain the census priced by hand (350 rode 0, 351 rode
  // 1, 352 rode 0) - the word born speaking, the third hound trend
  // word the field greeted with an arrow (the verdict flip's own
  // v0.976.73 birth the swell precedent, the flee hop's own
  // v0.976.74 birth the fade precedent beside it)
  const swing1 = houndWinTrendRow({ back: { wins: 0 }, prev: { wins: 1 }, cur: { wins: 0 } })
  assert.equal(swing1, "the win's own trend (v0.976.75): the win's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the bane's word prices which bot the win book holds within one face - the episode detail prints the face's own wins - this word prices the wins' own mass, co-existence by seat never by duplication)")
  // the swing's second lawful ride byte-exact: two wins traded the
  // other way (a rise from two, a deeper fall after)
  const swing2 = houndWinTrendRow({ back: { wins: 2 }, prev: { wins: 0 }, cur: { wins: 3 } })
  assert.equal(swing2, "the win's own trend (v0.976.75): the win's own swing - 2 -> 0 (-2) -> 3 (+3) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the bane's word prices which bot the win book holds within one face - the episode detail prints the face's own wins - this word prices the wins' own mass, co-existence by seat never by duplication)")
  // THE WIN'S OWN SWELL byte-exact - the branch the seven priced
  // faces never rode (the law prices it, the bars never invent it)
  const swell = houndWinTrendRow({ back: { wins: 1 }, prev: { wins: 2 }, cur: { wins: 4 } })
  assert.equal(swell, "the win's own trend (v0.976.75): the win's rise ran two steps deep - 1 -> 2 (+1) -> 4 (+2) - the win's own swell (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the bane's word prices which bot the win book holds within one face - the episode detail prints the face's own wins - this word prices the wins' own mass, co-existence by seat never by duplication)")
  // THE WIN'S OWN FADE byte-exact - the other branch the seven
  // priced faces never rode (a face holds few wins - the fade waits)
  const fade = houndWinTrendRow({ back: { wins: 3 }, prev: { wins: 2 }, cur: { wins: 0 } })
  assert.equal(fade, "the win's own trend (v0.976.75): the win's fall ran two steps deep - 3 -> 2 (-1) -> 0 (-2) - the win's own fade (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the bane's word prices which bot the win book holds within one face - the episode detail prints the face's own wins - this word prices the wins' own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES - the FIELD'S OWN READ: the FACE 347 chain
  // the clean trio 0 -> 0 -> 0, the FACE 351 chain the held first
  // step 0 -> 0 -> 1 (the arrival rode unnamed - the re-verdict's
  // own FACE 350 arrival precedent), the FACE 353 chain the held
  // second step 1 -> 0 -> 0, and the flat repeat (the family's own
  // held law - the bars never invent)
  assert.equal(houndWinTrendRow({ back: { wins: 0 }, prev: { wins: 0 }, cur: { wins: 0 } }), null)
  assert.equal(houndWinTrendRow({ back: { wins: 0 }, prev: { wins: 0 }, cur: { wins: 1 } }), null)
  assert.equal(houndWinTrendRow({ back: { wins: 1 }, prev: { wins: 0 }, cur: { wins: 0 } }), null)
  assert.equal(houndWinTrendRow({ back: { wins: 2 }, prev: { wins: 2 }, cur: { wins: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the re-verdict's word, the
  // verdict flip's word, the flee hop's word, the bane's word) - the
  // names ride by law, the neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swell, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndWinTrendConsistent({ back: { wins: 2 }, prev: { wins: 1 }, cur: { wins: 0.5 } }), false)
  assert.equal(houndWinTrendConsistent({ back: { wins: 2 }, prev: { wins: -1 }, cur: { wins: 0 } }), false)
  assert.equal(houndWinTrendConsistent({ back: { wins: 2 }, prev: { wins: 1 } }), false)
  assert.equal(houndWinTrendConsistent({ back: { wins: '2' }, prev: { wins: 1 }, cur: { wins: 0 } }), false)
  assert.equal(houndWinTrendConsistent(null), false)
  assert.equal(houndWinTrendConsistent([]), false)
  assert.equal(houndWinTrendConsistent({ back: { wins: 2 }, prev: { wins: 1 }, cur: { wins: 0 } }), true)
  assert.equal(houndWinTrendRow({ back: { wins: 2 }, prev: { wins: 1 }, cur: { wins: 0.5 } }), null)
  assert.equal(houndWinTrendRow({ back: { wins: '2' }, prev: { wins: 1 }, cur: { wins: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own chains hand-priced from the real caches
  // (houndCensus owns the win count - the same cell the bane seats'
  // wires hold): the FACE 351 chain 0 -> 0 -> 1 rides the honest
  // silence, the FACE 353 chain 1 -> 0 -> 0 rides the honest
  // silence, and the FACE 352 chain 0 -> 1 -> 0 rides the field's
  // own swing (the birth ride byte-exact)
  assert.equal(houndWinTrendRow({ back: { wins: 0 }, prev: { wins: 0 }, cur: { wins: 1 } }), null)
  assert.equal(houndWinTrendRow({ back: { wins: 1 }, prev: { wins: 0 }, cur: { wins: 0 } }), null)
  assert.equal(houndWinTrendRow({ back: { wins: 0 }, prev: { wins: 1 }, cur: { wins: 0 } }), swing1)
})
