import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndOtherTrendRow, houndOtherTrendConsistent } from '../../src/lib/houndothertrend.mjs'
import { houndCensus } from '../../src/lib/houndcensus.mjs'

test("the other's own trend (v0.976.83) - the hound census's residual book's trend seat, the fence, the word", () => {
  // THE OTHER'S OWN SWING byte-exact - THE FIELD'S OWN BIRTH CHAINS:
  // the FACE 349 chain (347 rode 0, 348 rode 7, 349 rode 0), the
  // FACE 350 chain (348 rode 7, 349 rode 0, 350 rode 7), the FACE
  // 351 chain (349 rode 0, 350 rode 7, 351 rode 6), and the FACE 355
  // chain (353 rode 0, 354 rode 2, 355 rode 0) - the trade's own
  // rhythm the word greeted on its birth ride
  const TAIL = "(the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the presence's word prices the wake's own sum, the wet flee's word prices the wet retreats' own mass, the fight's word prices the courage's own mass, the dry flee's word prices the dry retreats' own mass, the shelter's word prices the seal answers' own mass - the answer's word prices which class the presence book holds within one face, this word prices the residual class's own count across the walks, co-existence by seat never by duplication)"
  const swing1 = houndOtherTrendRow({ back: { other: 0 }, prev: { other: 7 }, cur: { other: 0 } })
  assert.equal(swing1, "the other's own trend (v0.976.83): the other's own swing - 0 -> 7 (+7) -> 0 (-7) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = houndOtherTrendRow({ back: { other: 7 }, prev: { other: 0 }, cur: { other: 7 } })
  assert.equal(swing2, "the other's own trend (v0.976.83): the other's own swing - 7 -> 0 (-7) -> 7 (+7) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = houndOtherTrendRow({ back: { other: 0 }, prev: { other: 7 }, cur: { other: 6 } })
  assert.equal(swing3, "the other's own trend (v0.976.83): the other's own swing - 0 -> 7 (+7) -> 6 (-1) - the rise and the fall traded seats between the walks " + TAIL)
  const swing4 = houndOtherTrendRow({ back: { other: 0 }, prev: { other: 2 }, cur: { other: 0 } })
  assert.equal(swing4, "the other's own trend (v0.976.83): the other's own swing - 0 -> 2 (+2) -> 0 (-2) - the rise and the fall traded seats between the walks " + TAIL)
  // THE OTHER'S OWN FADE byte-exact - THE FIELD'S OWN FACE 352 CHAIN
  // 7 -> 6 -> 0 (the fade's own ride the birth spoke) + the synthetic
  // branch (the law prices it, the bars never invent it)
  const fade1 = houndOtherTrendRow({ back: { other: 7 }, prev: { other: 6 }, cur: { other: 0 } })
  assert.equal(fade1, "the other's own trend (v0.976.83): the other's fall ran two steps deep - 7 -> 6 (-1) -> 0 (-6) - the other's own fade " + TAIL)
  const fade2 = houndOtherTrendRow({ back: { other: 6 }, prev: { other: 4 }, cur: { other: 1 } })
  assert.equal(fade2, "the other's own trend (v0.976.83): the other's fall ran two steps deep - 6 -> 4 (-2) -> 1 (-3) - the other's own fade " + TAIL)
  // THE OTHER'S OWN SWELL byte-exact - THE FIELD'S OWN FACE 357 CHAIN
  // 0 -> 4 -> 20 (the wake's own storm the swell greeted) + the
  // synthetic branch
  const swell1 = houndOtherTrendRow({ back: { other: 0 }, prev: { other: 4 }, cur: { other: 20 } })
  assert.equal(swell1, "the other's own trend (v0.976.83): the other's rise ran two steps deep - 0 -> 4 (+4) -> 20 (+16) - the other's own swell " + TAIL)
  const swell2 = houndOtherTrendRow({ back: { other: 1 }, prev: { other: 3 }, cur: { other: 4 } })
  assert.equal(swell2, "the other's own trend (v0.976.83): the other's rise ran two steps deep - 1 -> 3 (+2) -> 4 (+1) - the other's own swell " + TAIL)
  // THE HONEST SILENCES - the FIELD'S OWN READ: the FACE 353 chain
  // the held second step 6 -> 0 -> 0 (the storm's own exit), the
  // FACE 354 chain the held first step 0 -> 0 -> 2 (the arrival rode
  // unnamed), the clean trio 0 -> 0 -> 0, and the held both steps
  // 2 -> 2 -> 2 (the family's own held law - the bars never invent)
  assert.equal(houndOtherTrendRow({ back: { other: 6 }, prev: { other: 0 }, cur: { other: 0 } }), null)
  assert.equal(houndOtherTrendRow({ back: { other: 0 }, prev: { other: 0 }, cur: { other: 2 } }), null)
  assert.equal(houndOtherTrendRow({ back: { other: 0 }, prev: { other: 0 }, cur: { other: 0 } }), null)
  assert.equal(houndOtherTrendRow({ back: { other: 2 }, prev: { other: 2 }, cur: { other: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, swing4, fade1, fade2, swell1, swell2]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndOtherTrendConsistent({ back: { other: 2 }, prev: { other: 1 }, cur: { other: 0.5 } }), false)
  assert.equal(houndOtherTrendConsistent({ back: { other: 2 }, prev: { other: -1 }, cur: { other: 0 } }), false)
  assert.equal(houndOtherTrendConsistent({ back: { other: 2 }, prev: { other: 1 } }), false)
  assert.equal(houndOtherTrendConsistent({ back: { other: '2' }, prev: { other: 1 }, cur: { other: 0 } }), false)
  assert.equal(houndOtherTrendConsistent(null), false)
  assert.equal(houndOtherTrendConsistent([]), false)
  assert.equal(houndOtherTrendConsistent({ back: { other: 2 }, prev: { other: 1 }, cur: { other: 0 } }), true)
  assert.equal(houndOtherTrendRow({ back: { other: 2 }, prev: { other: 1 }, cur: { other: 0.5 } }), null)
  assert.equal(houndOtherTrendRow({ back: { other: '2' }, prev: { other: 1 }, cur: { other: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // three synthetic faces folded by the SAME census the wires run
  // (houndCensus owns the remainder count - the same cell the
  // episode detail line holds): the back face's two unclassed
  // answers, the prev face's honest zero, the cur face's three - the
  // fold's own chain 2 -> 0 -> 3 rides the swing byte-exact
  const backLines = [
    'F3 [F3] combat: shelter wall miss (open field: no diggable wall, ring next, drowned@6.5)',
    'F5 [F5] combat: shelter wall miss (open field: no diggable wall, ring next, drowned@4.2)',
    'F3 [F3] combat: fighting drowned (melee 3.1)'
  ]
  const curLines = [
    'F7 [F7] combat: shelter wall miss (open field: no diggable wall, ring next, drowned@2.4)',
    'F2 [F2] combat: shelter wall miss (open field: no diggable wall, ring next, drowned@5.5)',
    'F9 [F9] combat: shelter wall miss (open field: no diggable wall, ring next, drowned@7.8)'
  ]
  const backOther = houndCensus(backLines).other
  const prevOther = houndCensus(['F1 [F1] death: drown context (o2-reset F1 y=-61)']).other
  const curOther = houndCensus(curLines).other
  assert.equal(backOther, 2)
  assert.equal(prevOther, 0)
  assert.equal(curOther, 3)
  assert.equal(houndOtherTrendRow({ back: { other: backOther }, prev: { other: prevOther }, cur: { other: curOther } }),
    "the other's own trend (v0.976.83): the other's own swing - 2 -> 0 (-2) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
})
