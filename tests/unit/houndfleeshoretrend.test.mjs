import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndFleeShoreTrendRow, houndFleeShoreTrendConsistent } from '../../src/lib/houndfleeshoretrend.mjs'
import { houndCensus } from '../../src/lib/houndcensus.mjs'

test("the wet flee's own trend (v0.976.79) - the hound census's shore book's trend seat, the fence, the word", () => {
  // THE WET FLEE'S OWN SWING byte-exact - THE FIELD'S OWN BIRTH
  // CHAINS: the FACE 349 chain (348 rode 5, 349 rode 0), the FACE
  // 350 chain (348 rode 5, 349 rode 0, 350 rode 7), the FACE 351
  // chain (349 rode 0, 350 rode 7, 351 rode 0), and the FACE 355
  // chain (353 rode 0, 354 rode 6, 355 rode 0) - the trade's own
  // rhythm the word greeted on its birth ride
  const TAIL = "(the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side, the presence's word prices the wake's own sum - the answer's word prices which class the presence book holds within one face, this word prices the wet flee's own class count across the walks, co-existence by seat never by duplication)"
  const swing1 = houndFleeShoreTrendRow({ back: { shore: 0 }, prev: { shore: 5 }, cur: { shore: 0 } })
  assert.equal(swing1, "the wet flee's own trend (v0.976.79): the wet flee's own swing - 0 -> 5 (+5) -> 0 (-5) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = houndFleeShoreTrendRow({ back: { shore: 5 }, prev: { shore: 0 }, cur: { shore: 7 } })
  assert.equal(swing2, "the wet flee's own trend (v0.976.79): the wet flee's own swing - 5 -> 0 (-5) -> 7 (+7) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = houndFleeShoreTrendRow({ back: { shore: 0 }, prev: { shore: 7 }, cur: { shore: 0 } })
  assert.equal(swing3, "the wet flee's own trend (v0.976.79): the wet flee's own swing - 0 -> 7 (+7) -> 0 (-7) - the rise and the fall traded seats between the walks " + TAIL)
  const swing4 = houndFleeShoreTrendRow({ back: { shore: 0 }, prev: { shore: 6 }, cur: { shore: 0 } })
  assert.equal(swing4, "the wet flee's own trend (v0.976.79): the wet flee's own swing - 0 -> 6 (+6) -> 0 (-6) - the rise and the fall traded seats between the walks " + TAIL)
  // THE WET FLEE'S OWN SWELL byte-exact - the branch the ten priced
  // faces never rode (the shore's own storms trade every walk - the
  // two-rise build the field has not held; the law prices it, the
  // bars never invent it)
  const swell = houndFleeShoreTrendRow({ back: { shore: 1 }, prev: { shore: 3 }, cur: { shore: 4 } })
  assert.equal(swell, "the wet flee's own trend (v0.976.79): the wet flee's rise ran two steps deep - 1 -> 3 (+2) -> 4 (+1) - the wet flee's own swell " + TAIL)
  // THE WET FLEE'S OWN FADE byte-exact - the branch the ten priced
  // faces never rode (the slow two-fall the field has not held)
  const fade = houndFleeShoreTrendRow({ back: { shore: 6 }, prev: { shore: 4 }, cur: { shore: 1 } })
  assert.equal(fade, "the wet flee's own trend (v0.976.79): the wet flee's fall ran two steps deep - 6 -> 4 (-2) -> 1 (-3) - the wet flee's own fade " + TAIL)
  // THE HONEST SILENCES - the FIELD'S OWN READ: the FACE 352 chain
  // the held exit 7 -> 0 -> 0, the FACE 354 chain the held first
  // step 0 -> 0 -> 6 (the arrival rode unnamed), the FACE 356 chain
  // the held exit 6 -> 0 -> 0, and the FACE 353 chain the clean
  // trio 0 -> 0 -> 0 (the family's own held law - the bars never
  // invent)
  assert.equal(houndFleeShoreTrendRow({ back: { shore: 7 }, prev: { shore: 0 }, cur: { shore: 0 } }), null)
  assert.equal(houndFleeShoreTrendRow({ back: { shore: 0 }, prev: { shore: 0 }, cur: { shore: 6 } }), null)
  assert.equal(houndFleeShoreTrendRow({ back: { shore: 6 }, prev: { shore: 0 }, cur: { shore: 0 } }), null)
  assert.equal(houndFleeShoreTrendRow({ back: { shore: 0 }, prev: { shore: 0 }, cur: { shore: 0 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the re-verdict's word, the
  // verdict flip's word, the flee hop's word, the win's word, the
  // kill's word, the presence's word) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, swing4, swell, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndFleeShoreTrendConsistent({ back: { shore: 2 }, prev: { shore: 1 }, cur: { shore: 0.5 } }), false)
  assert.equal(houndFleeShoreTrendConsistent({ back: { shore: 2 }, prev: { shore: -1 }, cur: { shore: 0 } }), false)
  assert.equal(houndFleeShoreTrendConsistent({ back: { shore: 2 }, prev: { shore: 1 } }), false)
  assert.equal(houndFleeShoreTrendConsistent({ back: { shore: '2' }, prev: { shore: 1 }, cur: { shore: 0 } }), false)
  assert.equal(houndFleeShoreTrendConsistent(null), false)
  assert.equal(houndFleeShoreTrendConsistent([]), false)
  assert.equal(houndFleeShoreTrendConsistent({ back: { shore: 2 }, prev: { shore: 1 }, cur: { shore: 0 } }), true)
  assert.equal(houndFleeShoreTrendRow({ back: { shore: 2 }, prev: { shore: 1 }, cur: { shore: 0.5 } }), null)
  assert.equal(houndFleeShoreTrendRow({ back: { shore: '2' }, prev: { shore: 1 }, cur: { shore: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // three synthetic faces folded by the SAME census the wires run
  // (houndCensus owns the shore count - the same cell the episode
  // detail line holds): the back face's two wet flees, the prev
  // face's honest zero, the cur face's three - the fold's own chain
  // 2 -> 0 -> 3 rides the swing byte-exact
  const backLines = [
    'F3 [F3] combat: flee toward shore (12,-3 step 2) vs drowned (proximity 4.9)',
    'F5 [F5] combat: flee toward shore (-8,4 step 1) vs drowned (sentry 6.2)',
    'F3 [F3] combat: fighting drowned (melee 3.1)'
  ]
  const curLines = [
    'F7 [F7] combat: flee toward shore (3,9 step 3) vs drowned (proximity 2.4)',
    'F2 [F2] combat: flee toward shore (0,-6 step 2) vs drowned (proximity 5.5)',
    'F9 [F9] combat: flee toward shore (14,1 step 1) vs drowned (sentry 7.8)'
  ]
  const backShore = houndCensus(backLines).fleeShore
  const prevShore = houndCensus(['F1 [F1] death: drown context (o2-reset F1 y=-61)']).fleeShore
  const curShore = houndCensus(curLines).fleeShore
  assert.equal(backShore, 2)
  assert.equal(prevShore, 0)
  assert.equal(curShore, 3)
  assert.equal(houndFleeShoreTrendRow({ back: { shore: backShore }, prev: { shore: prevShore }, cur: { shore: curShore } }),
    "the wet flee's own trend (v0.976.79): the wet flee's own swing - 2 -> 0 (-2) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
})
