import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndKillTrendRow, houndKillTrendConsistent } from '../../src/lib/houndkilltrend.mjs'

test("the kill's own trend (v0.976.76) - the hound book's own fifth trend seat, the fence, the word", () => {
  // THE KILL'S OWN SWING byte-exact - THE FIELD'S OWN BIRTH RIDE: the
  // FACE 351 chain the census priced by hand (349 rode 0, 350 rode
  // 10, 351 rode 0) - the word born speaking three swings deep, the
  // storm's own arithmetic, the loudest birth ride the trend family
  // ever priced (the win's own v0.976.75 single swing the quiet
  // precedent beside it)
  const swing1 = houndKillTrendRow({ back: { kills: 0 }, prev: { kills: 10 }, cur: { kills: 0 } })
  assert.equal(swing1, "the kill's own trend (v0.976.76): the kill's own swing - 0 -> 10 (+10) -> 0 (-10) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the prey's word prices which bot the kill book holds within one face - the episode detail prints the face's own kills - this word prices the hound's own kill mass, co-existence by seat never by duplication)")
  // the swing's second lawful ride byte-exact: the FIELD'S OWN FACE
  // 349 CHAIN (347 rode 0, 348 rode 1, 349 rode 0) - the small
  // storm the big one grew from
  const swing2 = houndKillTrendRow({ back: { kills: 0 }, prev: { kills: 1 }, cur: { kills: 0 } })
  assert.equal(swing2, "the kill's own trend (v0.976.76): the kill's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the prey's word prices which bot the kill book holds within one face - the episode detail prints the face's own kills - this word prices the hound's own kill mass, co-existence by seat never by duplication)")
  // the swing's third lawful ride byte-exact: the FIELD'S OWN FACE
  // 350 CHAIN (348 rode 1, 349 rode 0, 350 rode 10) - the storm's
  // own opening trade
  const swing3 = houndKillTrendRow({ back: { kills: 1 }, prev: { kills: 0 }, cur: { kills: 10 } })
  assert.equal(swing3, "the kill's own trend (v0.976.76): the kill's own swing - 1 -> 0 (-1) -> 10 (+10) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the prey's word prices which bot the kill book holds within one face - the episode detail prints the face's own kills - this word prices the hound's own kill mass, co-existence by seat never by duplication)")
  // THE KILL'S OWN SWELL byte-exact - the branch the eight priced
  // faces never rode (the hound's own storms snap shut - the slow
  // rise the field has not held; the law prices it, the bars never
  // invent it)
  const swell = houndKillTrendRow({ back: { kills: 1 }, prev: { kills: 3 }, cur: { kills: 5 } })
  assert.equal(swell, "the kill's own trend (v0.976.76): the kill's rise ran two steps deep - 1 -> 3 (+2) -> 5 (+2) - the kill's own swell (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the prey's word prices which bot the kill book holds within one face - the episode detail prints the face's own kills - this word prices the hound's own kill mass, co-existence by seat never by duplication)")
  // THE KILL'S OWN FADE byte-exact - the other branch the eight
  // priced faces never rode (a ten-kill face collapses to zero the
  // walk after - the fade waits)
  const fade = houndKillTrendRow({ back: { kills: 8 }, prev: { kills: 5 }, cur: { kills: 2 } })
  assert.equal(fade, "the kill's own trend (v0.976.76): the kill's fall ran two steps deep - 8 -> 5 (-3) -> 2 (-3) - the kill's own fade (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the prey's word prices which bot the kill book holds within one face - the episode detail prints the face's own kills - this word prices the hound's own kill mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES - the FIELD'S OWN READ: the FACE 353 chain
  // the clean trio 0 -> 0 -> 0, the FACE 354 chain the held first
  // step 0 -> 0 -> 2 (the hound's own wake rode unnamed - the
  // re-verdict's own FACE 350 arrival precedent), the FACE 352 chain
  // the held second step 10 -> 0 -> 0 (the storm's own exit), and
  // the flat repeat (the family's own held law - the bars never
  // invent)
  assert.equal(houndKillTrendRow({ back: { kills: 0 }, prev: { kills: 0 }, cur: { kills: 0 } }), null)
  assert.equal(houndKillTrendRow({ back: { kills: 0 }, prev: { kills: 0 }, cur: { kills: 2 } }), null)
  assert.equal(houndKillTrendRow({ back: { kills: 10 }, prev: { kills: 0 }, cur: { kills: 0 } }), null)
  assert.equal(houndKillTrendRow({ back: { kills: 2 }, prev: { kills: 2 }, cur: { kills: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the re-verdict's word, the
  // verdict flip's word, the flee hop's word, the win's word, the
  // prey's word) - the names ride by law, the neighbor VERDICTS
  // never ride
  for (const row of [swing1, swing2, swing3, swell, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndKillTrendConsistent({ back: { kills: 2 }, prev: { kills: 1 }, cur: { kills: 0.5 } }), false)
  assert.equal(houndKillTrendConsistent({ back: { kills: 2 }, prev: { kills: -1 }, cur: { kills: 0 } }), false)
  assert.equal(houndKillTrendConsistent({ back: { kills: 2 }, prev: { kills: 1 } }), false)
  assert.equal(houndKillTrendConsistent({ back: { kills: '2' }, prev: { kills: 1 }, cur: { kills: 0 } }), false)
  assert.equal(houndKillTrendConsistent(null), false)
  assert.equal(houndKillTrendConsistent([]), false)
  assert.equal(houndKillTrendConsistent({ back: { kills: 2 }, prev: { kills: 1 }, cur: { kills: 0 } }), true)
  assert.equal(houndKillTrendRow({ back: { kills: 2 }, prev: { kills: 1 }, cur: { kills: 0.5 } }), null)
  assert.equal(houndKillTrendRow({ back: { kills: '2' }, prev: { kills: 1 }, cur: { kills: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own chains hand-priced from the real caches
  // (houndCensus owns the kill count - the same cell the episode
  // detail line and the prey seats' wires hold): the FACE 354 chain
  // 0 -> 0 -> 2 rides the honest silence, the FACE 352 chain
  // 10 -> 0 -> 0 rides the honest silence, and the FACE 351 chain
  // 0 -> 10 -> 0 rides the field's own swing (the birth ride
  // byte-exact)
  assert.equal(houndKillTrendRow({ back: { kills: 0 }, prev: { kills: 0 }, cur: { kills: 2 } }), null)
  assert.equal(houndKillTrendRow({ back: { kills: 10 }, prev: { kills: 0 }, cur: { kills: 0 } }), null)
  assert.equal(houndKillTrendRow({ back: { kills: 0 }, prev: { kills: 10 }, cur: { kills: 0 } }), swing1)
})
