import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndShelterTrendRow, houndShelterTrendConsistent } from '../../src/lib/houndsheltertrend.mjs'
import { houndCensus } from '../../src/lib/houndcensus.mjs'

test("the shelter's own trend (v0.976.82) - the hound census's shelter book's trend seat, the fence, the word", () => {
  // THE SHELTER'S OWN SWING byte-exact - THE FIELD'S OWN BIRTH
  // CHAINS: the FACE 349 chain (347 rode 0, 348 rode 2, 349 rode 0),
  // the FACE 350 chain (348 rode 2, 349 rode 0, 350 rode 6), and the
  // FACE 351 chain (349 rode 0, 350 rode 6, 351 rode 0) - the
  // trade's own rhythm the word greeted on its birth ride (THE WORD
  // BORN SPEAKING THREE SWINGS DEEP - the kill's own three-swing
  // birth the precedent, v0.976.76)
  const TAIL = "(the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the presence's word prices the wake's own sum, the wet flee's word prices the wet retreats' own mass, the fight's word prices the courage's own mass, the dry flee's word prices the dry retreats' own mass - the answer's word prices which class the presence book holds within one face, this word prices the shelter's own class count across the walks, co-existence by seat never by duplication)"
  const swing1 = houndShelterTrendRow({ back: { shelter: 0 }, prev: { shelter: 2 }, cur: { shelter: 0 } })
  assert.equal(swing1, "the shelter's own trend (v0.976.82): the shelter's own swing - 0 -> 2 (+2) -> 0 (-2) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = houndShelterTrendRow({ back: { shelter: 2 }, prev: { shelter: 0 }, cur: { shelter: 6 } })
  assert.equal(swing2, "the shelter's own trend (v0.976.82): the shelter's own swing - 2 -> 0 (-2) -> 6 (+6) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = houndShelterTrendRow({ back: { shelter: 0 }, prev: { shelter: 6 }, cur: { shelter: 0 } })
  assert.equal(swing3, "the shelter's own trend (v0.976.82): the shelter's own swing - 0 -> 6 (+6) -> 0 (-6) - the rise and the fall traded seats between the walks " + TAIL)
  // THE SHELTER'S OWN SWELL byte-exact - THE FIELD'S OWN FACE 358
  // CHAIN (356 rode 0, 357 rode 8, 358 rode 12): the walls built two
  // steps deep, the branch the presence's own word never rode (the
  // sum's own arithmetic traded that same walk, the walls' own build
  // ran beneath it) - the word born on the proof rides the swell
  const swellField = houndShelterTrendRow({ back: { shelter: 0 }, prev: { shelter: 8 }, cur: { shelter: 12 } })
  assert.equal(swellField, "the shelter's own trend (v0.976.82): the shelter's rise ran two steps deep - 0 -> 8 (+8) -> 12 (+4) - the shelter's own swell " + TAIL)
  // the law's own generic swell (the shape priced beyond the field's
  // own image)
  const swell = houndShelterTrendRow({ back: { shelter: 2 }, prev: { shelter: 5 }, cur: { shelter: 9 } })
  assert.equal(swell, "the shelter's own trend (v0.976.82): the shelter's rise ran two steps deep - 2 -> 5 (+3) -> 9 (+4) - the shelter's own swell " + TAIL)
  // THE SHELTER'S OWN FADE byte-exact - the branch the twelve priced
  // faces never rode (the walls build and break in storms - the slow
  // two-fall the field has not held; the law prices it, the bars
  // never invent it)
  const fade = houndShelterTrendRow({ back: { shelter: 9 }, prev: { shelter: 5 }, cur: { shelter: 2 } })
  assert.equal(fade, "the shelter's own trend (v0.976.82): the shelter's fall ran two steps deep - 9 -> 5 (-4) -> 2 (-3) - the shelter's own fade " + TAIL)
  // THE HONEST SILENCES - the FIELD'S OWN READ: the FACE 352 chain
  // the held second step 6 -> 0 -> 0 (the storm's own exit), the
  // FACE 357 chain the held first step 0 -> 0 -> 8 (the arrival
  // rode unnamed - the re-verdict's own FACE 350 precedent), the
  // clean trio 0 -> 0 -> 0 (the FACE 353/354/355/356 chains), and
  // the held both steps 2 -> 2 -> 2 (the family's own held law - the
  // bars never invent)
  assert.equal(houndShelterTrendRow({ back: { shelter: 6 }, prev: { shelter: 0 }, cur: { shelter: 0 } }), null)
  assert.equal(houndShelterTrendRow({ back: { shelter: 0 }, prev: { shelter: 0 }, cur: { shelter: 8 } }), null)
  assert.equal(houndShelterTrendRow({ back: { shelter: 0 }, prev: { shelter: 0 }, cur: { shelter: 0 } }), null)
  assert.equal(houndShelterTrendRow({ back: { shelter: 2 }, prev: { shelter: 2 }, cur: { shelter: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the re-verdict's word, the
  // verdict flip's word, the flee hop's word, the win's word, the
  // kill's word, the presence's word, the wet flee's word, the
  // fight's word, the dry flee's word) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, swellField, swell, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndShelterTrendConsistent({ back: { shelter: 2 }, prev: { shelter: 1 }, cur: { shelter: 0.5 } }), false)
  assert.equal(houndShelterTrendConsistent({ back: { shelter: 2 }, prev: { shelter: -1 }, cur: { shelter: 0 } }), false)
  assert.equal(houndShelterTrendConsistent({ back: { shelter: 2 }, prev: { shelter: 1 } }), false)
  assert.equal(houndShelterTrendConsistent({ back: { shelter: '2' }, prev: { shelter: 1 }, cur: { shelter: 0 } }), false)
  assert.equal(houndShelterTrendConsistent(null), false)
  assert.equal(houndShelterTrendConsistent([]), false)
  assert.equal(houndShelterTrendConsistent({ back: { shelter: 2 }, prev: { shelter: 1 }, cur: { shelter: 0 } }), true)
  assert.equal(houndShelterTrendRow({ back: { shelter: 2 }, prev: { shelter: 1 }, cur: { shelter: 0.5 } }), null)
  assert.equal(houndShelterTrendRow({ back: { shelter: '2' }, prev: { shelter: 1 }, cur: { shelter: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // three synthetic faces folded by the SAME census the wires run
  // (houndCensus owns the shelter count - the same cell the presence
  // line holds): the back face's two seal answers (the try and the
  // sheltering), the prev face's honest zero, the cur face's three
  // (the try, the ring try, the sheltering) - the fold's own chain
  // 2 -> 0 -> 3 rides the swing byte-exact
  const backLines = [
    'F3 [F3] combat: shelter try vs drowned (dist 4.2, proximity)',
    'F5 [F5] combat: sheltering from drowned (arrow wall, cells 2/8, proximity)',
    'F3 [F3] combat: fighting drowned (melee 3.1)'
  ]
  const curLines = [
    'F7 [F7] combat: shelter try vs drowned (dist 2.4, proximity pre-fight)',
    'F2 [F2] combat: shelter ring try vs drowned (dist 5.5, -z+z+x-x first, arrow wall, proximity)',
    'F9 [F9] combat: sheltering from drowned (arrow wall, cells 3/8, proximity)'
  ]
  const backShelter = houndCensus(backLines).shelter
  const prevShelter = houndCensus(['F1 [F1] death: drown context (o2-reset F1 y=-61)']).shelter
  const curShelter = houndCensus(curLines).shelter
  assert.equal(backShelter, 2)
  assert.equal(prevShelter, 0)
  assert.equal(curShelter, 3)
  assert.equal(houndShelterTrendRow({ back: { shelter: backShelter }, prev: { shelter: prevShelter }, cur: { shelter: curShelter } }),
    "the shelter's own trend (v0.976.82): the shelter's own swing - 2 -> 0 (-2) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
})
