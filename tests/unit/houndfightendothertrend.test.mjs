import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndFightEndOtherTrendRow, houndFightEndOtherTrendConsistent } from '../../src/lib/houndfightendothertrend.mjs'
import { houndCensus } from '../../src/lib/houndcensus.mjs'

test("the other exit's own trend (v0.976.86) - the hound census's courage book's ending seat, the fence, the word", () => {
  // THE OTHER EXIT'S OWN SWING byte-exact - THE FIELD'S OWN CHAINS:
  // THE FACE 358 CHAIN (356 rode 1, 357 rode 4, 358 rode 1), THE
  // FACE 360 CHAIN (358 rode 1, 359 rode 0, 360 rode 3), and THE
  // FACE 361 CHAIN (359 rode 0, 360 rode 3, 361 rode 0)
  const TAIL = "(the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the presence's word prices the wake's own sum, the wet flee's word prices the wet retreats' own mass, the fight's word prices the courage's own mass, the dry flee's word prices the dry retreats' own mass, the shelter's word prices the seal answers' own mass, the other's word prices the wake's own remainder, the water kill's word prices the water venue's own mass, the dry-shore kill's word prices the dry-shore venue's own mass - the fight's word prices the courage's own openings across the walks, this word prices the courage's own other endings across the walks, co-existence by seat never by duplication)"
  const swing1 = houndFightEndOtherTrendRow({ back: { ends: 1 }, prev: { ends: 4 }, cur: { ends: 1 } })
  assert.equal(swing1, "the other exit's own trend (v0.976.86): the fight's other exit's own swing - 1 -> 4 (+3) -> 1 (-3) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = houndFightEndOtherTrendRow({ back: { ends: 1 }, prev: { ends: 0 }, cur: { ends: 3 } })
  assert.equal(swing2, "the other exit's own trend (v0.976.86): the fight's other exit's own swing - 1 -> 0 (-1) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = houndFightEndOtherTrendRow({ back: { ends: 0 }, prev: { ends: 3 }, cur: { ends: 0 } })
  assert.equal(swing3, "the other exit's own trend (v0.976.86): the fight's other exit's own swing - 0 -> 3 (+3) -> 0 (-3) - the rise and the fall traded seats between the walks " + TAIL)
  // THE OTHER EXIT'S OWN SWELL byte-exact - THE FIELD'S OWN FACE 357
  // CHAIN THE WORD'S OWN BIRTH RIDE 0 -> 1 -> 4 (the other exits
  // built two steps deep) + the synthetic branch (the law prices it,
  // the bars never invent it)
  const swell1 = houndFightEndOtherTrendRow({ back: { ends: 0 }, prev: { ends: 1 }, cur: { ends: 4 } })
  assert.equal(swell1, "the other exit's own trend (v0.976.86): the fight's other exit's rise ran two steps deep - 0 -> 1 (+1) -> 4 (+3) - the fight's other exit's own swell " + TAIL)
  const swell2 = houndFightEndOtherTrendRow({ back: { ends: 1 }, prev: { ends: 3 }, cur: { ends: 4 } })
  assert.equal(swell2, "the other exit's own trend (v0.976.86): the fight's other exit's rise ran two steps deep - 1 -> 3 (+2) -> 4 (+1) - the fight's other exit's own swell " + TAIL)
  // THE OTHER EXIT'S OWN FADE byte-exact - THE FIELD'S OWN FACE 359
  // CHAIN THE FADE'S OWN RIDE 4 -> 1 -> 0 (the other exits' own
  // relief the word was born to price) + the synthetic branch
  const fade1 = houndFightEndOtherTrendRow({ back: { ends: 4 }, prev: { ends: 1 }, cur: { ends: 0 } })
  assert.equal(fade1, "the other exit's own trend (v0.976.86): the fight's other exit's fall ran two steps deep - 4 -> 1 (-3) -> 0 (-1) - the fight's other exit's own fade " + TAIL)
  const fade2 = houndFightEndOtherTrendRow({ back: { ends: 6 }, prev: { ends: 4 }, cur: { ends: 1 } })
  assert.equal(fade2, "the other exit's own trend (v0.976.86): the fight's other exit's fall ran two steps deep - 6 -> 4 (-2) -> 1 (-3) - the fight's other exit's own fade " + TAIL)
  // THE HONEST SILENCES - the FIELD'S OWN READ: the FACE 350 chain
  // the held first step 0 -> 0 -> 1 (the arrival rode unnamed), the
  // FACE 352 chain the held second step 1 -> 1 -> 0, the FACE 349
  // chain the clean trio 0 -> 0 -> 0, and the held both steps
  // 2 -> 2 -> 2 (the family's own held law - the bars never invent)
  assert.equal(houndFightEndOtherTrendRow({ back: { ends: 0 }, prev: { ends: 0 }, cur: { ends: 1 } }), null)
  assert.equal(houndFightEndOtherTrendRow({ back: { ends: 1 }, prev: { ends: 1 }, cur: { ends: 0 } }), null)
  assert.equal(houndFightEndOtherTrendRow({ back: { ends: 0 }, prev: { ends: 0 }, cur: { ends: 0 } }), null)
  assert.equal(houndFightEndOtherTrendRow({ back: { ends: 2 }, prev: { ends: 2 }, cur: { ends: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, swell1, swell2, fade1, fade2]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndFightEndOtherTrendConsistent({ back: { ends: 2 }, prev: { ends: 1 }, cur: { ends: 0.5 } }), false)
  assert.equal(houndFightEndOtherTrendConsistent({ back: { ends: 2 }, prev: { ends: -1 }, cur: { ends: 0 } }), false)
  assert.equal(houndFightEndOtherTrendConsistent({ back: { ends: 2 }, prev: { ends: 1 } }), false)
  assert.equal(houndFightEndOtherTrendConsistent({ back: { ends: '2' }, prev: { ends: 1 }, cur: { ends: 0 } }), false)
  assert.equal(houndFightEndOtherTrendConsistent(null), false)
  assert.equal(houndFightEndOtherTrendConsistent([]), false)
  assert.equal(houndFightEndOtherTrendConsistent({ back: { ends: 2 }, prev: { ends: 1 }, cur: { ends: 0 } }), true)
  assert.equal(houndFightEndOtherTrendRow({ back: { ends: 2 }, prev: { ends: 1 }, cur: { ends: 0.5 } }), null)
  assert.equal(houndFightEndOtherTrendRow({ back: { ends: '2' }, prev: { ends: 1 }, cur: { ends: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // three synthetic faces folded by the SAME census the wires run
  // (houndCensus owns the other-exit count - the same cell the hound
  // episode line holds: "other fight exits: N"): the back face's two
  // other exits (the mob-down end never joins - the victories' own
  // book), the prev face's honest zero, the cur face's three - the
  // fold's own chain 2 -> 0 -> 3 rides the swing byte-exact (the
  // fight-end line rides alone - the death anchor never joins)
  const otherEnd = (id) => `F${id} [F${id}] combat: fight ended vs drowned (deadline, hp 17.3 -> 20.0, swings 6, weapon wooden_sword, 6 rounds)`
  const mobDown = (id) => `F${id} [F${id}] combat: fight ended vs drowned (mob down, hp 17.3 -> 0.0, swings 6, weapon wooden_sword, 6 rounds)`
  const backLines = [otherEnd(3), otherEnd(5), mobDown(9)]
  const curLines = [otherEnd(7), otherEnd(2), otherEnd(8)]
  const backEnds = houndCensus(backLines).fightEndsOther
  const prevEnds = houndCensus(['F1 [F1] death: drown context (o2-reset F1 y=-61)']).fightEndsOther
  const curEnds = houndCensus(curLines).fightEndsOther
  assert.equal(backEnds, 2)
  assert.equal(prevEnds, 0)
  assert.equal(curEnds, 3)
  assert.equal(houndFightEndOtherTrendRow({ back: { ends: backEnds }, prev: { ends: prevEnds }, cur: { ends: curEnds } }),
    "the other exit's own trend (v0.976.86): the fight's other exit's own swing - 2 -> 0 (-2) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
})
