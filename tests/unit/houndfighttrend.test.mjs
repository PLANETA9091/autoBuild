import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndFightTrendRow, houndFightTrendConsistent } from '../../src/lib/houndfighttrend.mjs'

test("the fight's own trend (v0.976.80) - the hound census's fight book's trend seat, the fence, the word", () => {
  // THE FIGHT'S OWN SWELL byte-exact - THE FIELD'S OWN BIRTH RIDE:
  // the FACE 351 chain the census priced by hand (349 rode 0,
  // 350 rode 2, 351 rode 4) - the stand-and-fight's own courage
  // built two steps deep, the word born speaking on the branch the
  // presence's own word never rode (the sum's own arithmetic traded
  // every walk, the class's own courage built)
  const swell1 = houndFightTrendRow({ back: { fight: 0 }, prev: { fight: 2 }, cur: { fight: 4 } })
  assert.equal(swell1, "the fight's own trend (v0.976.80): the fight's rise ran two steps deep - 0 -> 2 (+2) -> 4 (+2) - the fight's own swell (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the presence's word prices the wake's own sum, the wet flee's word prices the water retreat's own count - the answer's word prices which class the presence book holds within one face, this word prices the stand-and-fight's own class count across the walks, co-existence by seat never by duplication)")
  // the swell's second lawful ride byte-exact: a deeper build
  const swell2 = houndFightTrendRow({ back: { fight: 1 }, prev: { fight: 3 }, cur: { fight: 7 } })
  assert.equal(swell2, "the fight's own trend (v0.976.80): the fight's rise ran two steps deep - 1 -> 3 (+2) -> 7 (+4) - the fight's own swell (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the presence's word prices the wake's own sum, the wet flee's word prices the water retreat's own count - the answer's word prices which class the presence book holds within one face, this word prices the stand-and-fight's own class count across the walks, co-existence by seat never by duplication)")
  // THE FIGHT'S OWN SWING byte-exact - THE FIELD'S OWN CHAINS: the
  // FACE 352 chain (350 rode 2, 351 rode 4, 352 rode 0 - the
  // storm's own exit), the FACE 355 chain (353 rode 0, 354 rode 3,
  // 355 rode 0), and the FACE 356 chain (354 rode 3, 355 rode 0,
  // 356 rode 2 - the hound's own return, the courage traded back)
  const swing1 = houndFightTrendRow({ back: { fight: 2 }, prev: { fight: 4 }, cur: { fight: 0 } })
  assert.equal(swing1, "the fight's own trend (v0.976.80): the fight's own swing - 2 -> 4 (+2) -> 0 (-4) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the presence's word prices the wake's own sum, the wet flee's word prices the water retreat's own count - the answer's word prices which class the presence book holds within one face, this word prices the stand-and-fight's own class count across the walks, co-existence by seat never by duplication)")
  const swing2 = houndFightTrendRow({ back: { fight: 0 }, prev: { fight: 3 }, cur: { fight: 0 } })
  assert.equal(swing2, "the fight's own trend (v0.976.80): the fight's own swing - 0 -> 3 (+3) -> 0 (-3) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the presence's word prices the wake's own sum, the wet flee's word prices the water retreat's own count - the answer's word prices which class the presence book holds within one face, this word prices the stand-and-fight's own class count across the walks, co-existence by seat never by duplication)")
  const swing3 = houndFightTrendRow({ back: { fight: 3 }, prev: { fight: 0 }, cur: { fight: 2 } })
  assert.equal(swing3, "the fight's own trend (v0.976.80): the fight's own swing - 3 -> 0 (-3) -> 2 (+2) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the presence's word prices the wake's own sum, the wet flee's word prices the water retreat's own count - the answer's word prices which class the presence book holds within one face, this word prices the stand-and-fight's own class count across the walks, co-existence by seat never by duplication)")
  // THE FIGHT'S OWN FADE byte-exact - the branch the ten priced
  // faces never rode (the courage's storms build and break - the
  // slow two-fall the field has not held; the law prices it, the
  // bars never invent it)
  const fade = houndFightTrendRow({ back: { fight: 7 }, prev: { fight: 4 }, cur: { fight: 1 } })
  assert.equal(fade, "the fight's own trend (v0.976.80): the fight's fall ran two steps deep - 7 -> 4 (-3) -> 1 (-3) - the fight's own fade (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the presence's word prices the wake's own sum, the wet flee's word prices the water retreat's own count - the answer's word prices which class the presence book holds within one face, this word prices the stand-and-fight's own class count across the walks, co-existence by seat never by duplication)")
  // THE HONEST SILENCES - the FIELD'S OWN READ: the FACE 349 chain
  // the clean trio 0 -> 0 -> 0, the FACE 350 chain the held first
  // step 0 -> 0 -> 2 (the arrival rode unnamed), the FACE 353 chain
  // the held second step 4 -> 0 -> 0 (the storm's own exit held),
  // the FACE 354 chain the held first step 0 -> 0 -> 3 (the
  // arrival rode unnamed again - the clean trios the family's own
  // held law - the bars never invent)
  assert.equal(houndFightTrendRow({ back: { fight: 0 }, prev: { fight: 0 }, cur: { fight: 0 } }), null)
  assert.equal(houndFightTrendRow({ back: { fight: 0 }, prev: { fight: 0 }, cur: { fight: 2 } }), null)
  assert.equal(houndFightTrendRow({ back: { fight: 4 }, prev: { fight: 0 }, cur: { fight: 0 } }), null)
  assert.equal(houndFightTrendRow({ back: { fight: 0 }, prev: { fight: 0 }, cur: { fight: 3 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the re-verdict's word, the
  // verdict flip's word, the flee hop's word, the win's word, the
  // kill's word, the presence's word, the wet flee's word) - the
  // names ride by law, the neighbor VERDICTS never ride
  for (const row of [swell1, swell2, swing1, swing2, swing3, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndFightTrendConsistent({ back: { fight: 2 }, prev: { fight: 1 }, cur: { fight: 0.5 } }), false)
  assert.equal(houndFightTrendConsistent({ back: { fight: 2 }, prev: { fight: -1 }, cur: { fight: 0 } }), false)
  assert.equal(houndFightTrendConsistent({ back: { fight: 2 }, prev: { fight: 1 } }), false)
  assert.equal(houndFightTrendConsistent({ back: { fight: '2' }, prev: { fight: 1 }, cur: { fight: 0 } }), false)
  assert.equal(houndFightTrendConsistent(null), false)
  assert.equal(houndFightTrendConsistent([]), false)
  assert.equal(houndFightTrendConsistent({ back: { fight: 2 }, prev: { fight: 1 }, cur: { fight: 0 } }), true)
  assert.equal(houndFightTrendRow({ back: { fight: 2 }, prev: { fight: 1 }, cur: { fight: 0.5 } }), null)
  assert.equal(houndFightTrendRow({ back: { fight: '2' }, prev: { fight: 1 }, cur: { fight: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own chains hand-priced from the real caches
  // (houndCensus owns the fight count - the same cell the presence
  // line holds): the FACE 349 chain 0 -> 0 -> 0 rides the honest
  // silence, and the FACE 351 chain 0 -> 2 -> 4 rides the field's
  // own swell (the birth ride byte-exact)
  assert.equal(houndFightTrendRow({ back: { fight: 0 }, prev: { fight: 0 }, cur: { fight: 0 } }), null)
  assert.equal(houndFightTrendRow({ back: { fight: 0 }, prev: { fight: 2 }, cur: { fight: 4 } }), swell1)
})
