import { test } from 'node:test'
import assert from 'node:assert/strict'
import { suffocateTollTrendRow, suffocateTollTrendConsistent } from '../../src/lib/suffocatetolltrend.mjs'

test("the suffocate toll's own trend (v0.976.117) - the suffocate kind's own trend, the fence, the word", () => {
  // THE SUFFOCATE TOLL'S OWN SWING byte-exact, the field's own three
  // rides - the swing owns this book's every directional ride (three
  // of three), THE SAME TRADE THREE TIMES (the wall's one death
  // traded back the very next walk): FACE 370 -> 371 -> 372 rode
  // 0 -> 1 -> 0, FACE 373 -> 374 -> 375 rode 0 -> 1 -> 0, FACE 379
  // -> 380 -> 381 rode 0 -> 1 -> 0 (the counts hand-priced from the
  // real caches, deathKindCensus owns the book - thirty-six faces
  // deep: 348..370 rode the drought's own zero, 371/374/380/383 rode
  // 1, the rest rode 0)
  const swing1 = suffocateTollTrendRow({ back: { suffocate: 0 }, prev: { suffocate: 1 }, cur: { suffocate: 0 } })
  assert.equal(swing1, "the suffocate toll's own trend (v0.976.117): the suffocate toll's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the suffocate toll's own mass, co-existence by seat never by duplication)")
  const swing2 = suffocateTollTrendRow({ back: { suffocate: 0 }, prev: { suffocate: 1 }, cur: { suffocate: 0 } })
  assert.equal(swing2, swing1)
  const swing3 = suffocateTollTrendRow({ back: { suffocate: 0 }, prev: { suffocate: 1 }, cur: { suffocate: 0 } })
  assert.equal(swing3, swing1)
  // THE WORD'S OWN BIRTH SHAPE: the FACE 384 window the word's own
  // first read rides (382/383/384 = 0, 1, ?) - first = +1, the word
  // born speaking on its own first read's window (the creeper toll's
  // own v0.976.111 birth the word's own birthright, the enderman
  // toll's own v0.976.113 the proof's own spoke); the swell's own
  // seat the field never rode - the law prices it anyway (the wall's
  // own repeat 0 -> 1 -> 1 would be the branch's own first ride)
  const swellNeverRode = suffocateTollTrendRow({ back: { suffocate: 0 }, prev: { suffocate: 1 }, cur: { suffocate: 2 } })
  assert.equal(swellNeverRode, "the suffocate toll's own trend (v0.976.117): the suffocate toll's rise ran two steps deep - 0 -> 1 (+1) -> 2 (+1) - the suffocate toll's own swell (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the suffocate toll's own mass, co-existence by seat never by duplication)")
  const fadeNeverRode = suffocateTollTrendRow({ back: { suffocate: 2 }, prev: { suffocate: 1 }, cur: { suffocate: 0 } })
  assert.equal(fadeNeverRode, "the suffocate toll's own trend (v0.976.117): the suffocate toll's fall ran two steps deep - 2 -> 1 (-1) -> 0 (-1) - the suffocate toll's own fade (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the suffocate toll's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own
  // thirty-one held rides: the record's own arrivals riding unnamed
  // behind a held first step - 0 -> 0 -> 1 on the FACE 371 chain,
  // the FACE 374 chain, the FACE 380 chain and the FACE 383 chain -
  // and the held exits 1 -> 0 -> 0 on the FACE 373 chain, the FACE
  // 376 chain and the FACE 382 chain, and the drought's own clean
  // trios (the faces 348..370 windows)
  assert.equal(suffocateTollTrendRow({ back: { suffocate: 0 }, prev: { suffocate: 0 }, cur: { suffocate: 1 } }), null)
  assert.equal(suffocateTollTrendRow({ back: { suffocate: 1 }, prev: { suffocate: 0 }, cur: { suffocate: 0 } }), null)
  assert.equal(suffocateTollTrendRow({ back: { suffocate: 0 }, prev: { suffocate: 0 }, cur: { suffocate: 0 } }), null)
  assert.equal(suffocateTollTrendRow({ back: { suffocate: 2 }, prev: { suffocate: 2 }, cur: { suffocate: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the head's own
  // verdict words (no dynasty, no turn) - co-existence by seat never
  // by duplication; the seat-law tail names the neighbor seats (the
  // kind's word, the siege's word) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing1, swellNeverRode, fadeNeverRode]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(suffocateTollTrendConsistent({ back: { suffocate: 2 }, prev: { suffocate: 1 }, cur: { suffocate: 0.5 } }), false)
  assert.equal(suffocateTollTrendConsistent({ back: { suffocate: 2 }, prev: { suffocate: -1 }, cur: { suffocate: 0 } }), false)
  assert.equal(suffocateTollTrendConsistent({ back: { suffocate: 2 }, prev: { suffocate: 1 } }), false)
  assert.equal(suffocateTollTrendConsistent({ back: { suffocate: '2' }, prev: { suffocate: 1 }, cur: { suffocate: 0 } }), false)
  assert.equal(suffocateTollTrendConsistent(null), false)
  assert.equal(suffocateTollTrendConsistent([]), false)
  assert.equal(suffocateTollTrendConsistent({ back: { suffocate: 0 }, prev: { suffocate: 1 }, cur: { suffocate: 0 } }), true)
  assert.equal(suffocateTollTrendRow({ back: { suffocate: 2 }, prev: { suffocate: 1 }, cur: { suffocate: 0.5 } }), null)
  assert.equal(suffocateTollTrendRow({ back: { suffocate: '2' }, prev: { suffocate: 1 }, cur: { suffocate: 0 } }), null)
  // the fence's own extra-key ride: the fold may carry the census's
  // whole byKind image beside the cell (the caller's own shape - the
  // fence never rejects extra keys)
  assert.equal(suffocateTollTrendConsistent({ back: { suffocate: 0, fall: 2 }, prev: { suffocate: 1, drown: 3 }, cur: { suffocate: 0, mob: 9 } }), true)
  // the one-parser law's own ride through the census's own images:
  // the field's own swing FACE 380/381/382 -> the census's own
  // byKind.suffocate cells (deathKindCensus owns the buckets - the
  // same cells the kind trend's, the siege's, the echo's and the
  // class tolls' wires hold): 1 -> 0 -> 0 rides the held exit's
  // silence, and the FACE 382/383 shelf 0 -> 1 rides the trade's own
  // first step
  const heldExit = suffocateTollTrendRow({ back: { suffocate: 1 }, prev: { suffocate: 0 }, cur: { suffocate: 0 } })
  assert.equal(heldExit, null)
})
