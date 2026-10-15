import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndFleeDryTrendRow, houndFleeDryTrendConsistent } from '../../src/lib/houndfleedrytrend.mjs'
import { houndCensus } from '../../src/lib/houndcensus.mjs'

test("the dry flee's own trend (v0.976.81) - the hound census's land book's trend seat, the fence, the word", () => {
  // THE DRY FLEE'S OWN SWING byte-exact - THE FIELD'S OWN BIRTH
  // CHAINS: the FACE 349 chain (347 rode 0, 348 rode 2, 349 rode 0),
  // the FACE 350 chain (348 rode 2, 349 rode 0, 350 rode 5), and the
  // FACE 351 chain (349 rode 0, 350 rode 5, 351 rode 0) - the
  // trade's own rhythm the word greeted on its birth ride (THE WORD
  // BORN SPEAKING THREE SWINGS DEEP - the kill's own three-swing
  // birth the precedent, v0.976.76)
  const TAIL = "(the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the presence's word prices the wake's own sum, the wet flee's word prices the wet retreats' own mass, the fight's word prices the courage's own mass - the answer's word prices which class the presence book holds within one face, this word prices the dry flee's own class count across the walks, co-existence by seat never by duplication)"
  const swing1 = houndFleeDryTrendRow({ back: { dry: 0 }, prev: { dry: 2 }, cur: { dry: 0 } })
  assert.equal(swing1, "the dry flee's own trend (v0.976.81): the dry flee's own swing - 0 -> 2 (+2) -> 0 (-2) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = houndFleeDryTrendRow({ back: { dry: 2 }, prev: { dry: 0 }, cur: { dry: 5 } })
  assert.equal(swing2, "the dry flee's own trend (v0.976.81): the dry flee's own swing - 2 -> 0 (-2) -> 5 (+5) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = houndFleeDryTrendRow({ back: { dry: 0 }, prev: { dry: 5 }, cur: { dry: 0 } })
  assert.equal(swing3, "the dry flee's own trend (v0.976.81): the dry flee's own swing - 0 -> 5 (+5) -> 0 (-5) - the rise and the fall traded seats between the walks " + TAIL)
  // THE DRY FLEE'S OWN SWELL byte-exact - the branch the eleven
  // priced faces never rode (the dry flee's own storms trade every
  // walk - the two-rise build the field has not held; the law prices
  // it, the bars never invent it)
  const swell = houndFleeDryTrendRow({ back: { dry: 1 }, prev: { dry: 3 }, cur: { dry: 4 } })
  assert.equal(swell, "the dry flee's own trend (v0.976.81): the dry flee's rise ran two steps deep - 1 -> 3 (+2) -> 4 (+1) - the dry flee's own swell " + TAIL)
  // THE DRY FLEE'S OWN FADE byte-exact - the branch the eleven
  // priced faces never rode (the slow two-fall the field has not
  // held)
  const fade = houndFleeDryTrendRow({ back: { dry: 6 }, prev: { dry: 4 }, cur: { dry: 1 } })
  assert.equal(fade, "the dry flee's own trend (v0.976.81): the dry flee's fall ran two steps deep - 6 -> 4 (-2) -> 1 (-3) - the dry flee's own fade " + TAIL)
  // THE HONEST SILENCES - the FIELD'S OWN READ: the FACE 352 chain
  // the held second step 5 -> 0 -> 0 (the storm's own exit), the
  // FACE 357 chain the held first step 0 -> 0 -> 16 (the arrival
  // rode unnamed - the re-verdict's own FACE 350 precedent), the
  // clean trio 0 -> 0 -> 0, and the held both steps 2 -> 2 -> 2
  // (the family's own held law - the bars never invent)
  assert.equal(houndFleeDryTrendRow({ back: { dry: 5 }, prev: { dry: 0 }, cur: { dry: 0 } }), null)
  assert.equal(houndFleeDryTrendRow({ back: { dry: 0 }, prev: { dry: 0 }, cur: { dry: 16 } }), null)
  assert.equal(houndFleeDryTrendRow({ back: { dry: 0 }, prev: { dry: 0 }, cur: { dry: 0 } }), null)
  assert.equal(houndFleeDryTrendRow({ back: { dry: 2 }, prev: { dry: 2 }, cur: { dry: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the re-verdict's word, the
  // verdict flip's word, the flee hop's word, the win's word, the
  // kill's word, the presence's word) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, swell, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndFleeDryTrendConsistent({ back: { dry: 2 }, prev: { dry: 1 }, cur: { dry: 0.5 } }), false)
  assert.equal(houndFleeDryTrendConsistent({ back: { dry: 2 }, prev: { dry: -1 }, cur: { dry: 0 } }), false)
  assert.equal(houndFleeDryTrendConsistent({ back: { dry: 2 }, prev: { dry: 1 } }), false)
  assert.equal(houndFleeDryTrendConsistent({ back: { dry: '2' }, prev: { dry: 1 }, cur: { dry: 0 } }), false)
  assert.equal(houndFleeDryTrendConsistent(null), false)
  assert.equal(houndFleeDryTrendConsistent([]), false)
  assert.equal(houndFleeDryTrendConsistent({ back: { dry: 2 }, prev: { dry: 1 }, cur: { dry: 0 } }), true)
  assert.equal(houndFleeDryTrendRow({ back: { dry: 2 }, prev: { dry: 1 }, cur: { dry: 0.5 } }), null)
  assert.equal(houndFleeDryTrendRow({ back: { dry: '2' }, prev: { dry: 1 }, cur: { dry: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // three synthetic faces folded by the SAME census the wires run
  // (houndCensus owns the dry count - the same cell the episode
  // detail line holds): the back face's two dry flees, the prev
  // face's honest zero, the cur face's three - the fold's own chain
  // 2 -> 0 -> 3 rides the swing byte-exact
  const backLines = [
    'F3 [F3] combat: fleeing drowned (dist 4.2)',
    'F5 [F5] combat: fleeing drowned (dist 6.8)',
    'F3 [F3] combat: fighting drowned (melee 3.1)'
  ]
  const curLines = [
    'F7 [F7] combat: fleeing drowned (dist 2.4)',
    'F2 [F2] combat: fleeing drowned (dist 5.5)',
    'F9 [F9] combat: fleeing drowned (dist 7.8)'
  ]
  const backDry = houndCensus(backLines).fleeDry
  const prevDry = houndCensus(['F1 [F1] death: drown context (o2-reset F1 y=-61)']).fleeDry
  const curDry = houndCensus(curLines).fleeDry
  assert.equal(backDry, 2)
  assert.equal(prevDry, 0)
  assert.equal(curDry, 3)
  assert.equal(houndFleeDryTrendRow({ back: { dry: backDry }, prev: { dry: prevDry }, cur: { dry: curDry } }),
    "the dry flee's own trend (v0.976.81): the dry flee's own swing - 2 -> 0 (-2) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
})
