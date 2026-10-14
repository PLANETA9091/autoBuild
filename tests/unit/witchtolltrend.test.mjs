import { test } from 'node:test'
import assert from 'node:assert/strict'
import { witchTollTrendRow, witchTollTrendConsistent } from '../../src/lib/witchtolltrend.mjs'

test("the witch toll's own trend (v0.976.72) - the mob book's fifth class-toll word, the fence, the word", () => {
  // THE WORD BORN ON A SINGLE LONE RIDE the chains never price: the
  // field's own held rides (the counts hand-priced from the real
  // caches, deathKindCensus's own byAttacker.Witch - face 334 rode 1,
  // every face 335 through 350 rode 0, seventeen faces priced): the
  // FACE 336 chain rode 1 -> 0 -> 0 (the lone ride draining unnamed
  // behind a held second step - the honest silence)
  assert.equal(witchTollTrendRow({ back: { witch: 1 }, prev: { witch: 0 }, cur: { witch: 0 } }), null)
  // the clean trio the field's own most common chain
  assert.equal(witchTollTrendRow({ back: { witch: 0 }, prev: { witch: 0 }, cur: { witch: 0 } }), null)
  // THE WITCH TOLL'S OWN SWING: the law prices it, the field never
  // rode it in the priced window (the sibling tolls' own precedent)
  const swing = witchTollTrendRow({ back: { witch: 0 }, prev: { witch: 1 }, cur: { witch: 0 } })
  assert.equal(swing, "the witch toll's own trend (v0.976.72): the witch toll's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration, the spider toll's own word prices the eight-legged killer's own mass - a different book, the killer is not the death - this word prices the witch toll's own mass, co-existence by seat never by duplication)")
  // the swing's mirror ride byte-exact
  const swing2 = witchTollTrendRow({ back: { witch: 1 }, prev: { witch: 0 }, cur: { witch: 1 } })
  assert.equal(swing2, "the witch toll's own trend (v0.976.72): the witch toll's own swing - 1 -> 0 (-1) -> 1 (+1) - the rise and the fall traded seats between the walks (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration, the spider toll's own word prices the eight-legged killer's own mass - a different book, the killer is not the death - this word prices the witch toll's own mass, co-existence by seat never by duplication)")
  // THE WITCH TOLL'S OWN SWELL: the law prices it, the field never
  // rode it in the priced window (the sibling tolls' own precedent)
  const swell = witchTollTrendRow({ back: { witch: 1 }, prev: { witch: 3 }, cur: { witch: 4 } })
  assert.equal(swell, "the witch toll's own trend (v0.976.72): the witch toll's rise ran two steps deep - 1 -> 3 (+2) -> 4 (+1) - the witch toll's own swell (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration, the spider toll's own word prices the eight-legged killer's own mass - a different book, the killer is not the death - this word prices the witch toll's own mass, co-existence by seat never by duplication)")
  // THE WITCH TOLL'S OWN FADE: the law prices it, the field never
  // rode it in the priced window (the sibling tolls' own precedent)
  const fade = witchTollTrendRow({ back: { witch: 2 }, prev: { witch: 1 }, cur: { witch: 0 } })
  assert.equal(fade, "the witch toll's own trend (v0.976.72): the witch toll's fall ran two steps deep - 2 -> 1 (-1) -> 0 (-1) - the witch toll's own fade (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration, the spider toll's own word prices the eight-legged killer's own mass - a different book, the killer is not the death - this word prices the witch toll's own mass, co-existence by seat never by duplication)")
  // the remaining held silences (the family's own held law - the
  // bars never invent)
  assert.equal(witchTollTrendRow({ back: { witch: 2 }, prev: { witch: 2 }, cur: { witch: 5 } }), null)
  assert.equal(witchTollTrendRow({ back: { witch: 5 }, prev: { witch: 5 }, cur: { witch: 2 } }), null)
  assert.equal(witchTollTrendRow({ back: { witch: 3 }, prev: { witch: 3 }, cur: { witch: 3 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seat's own
  // verdict words (no owns, no dynasty, no turn) - co-existence by
  // seat never by duplication; the seat-law tail names the neighbor
  // seats (the attacker seat's word, the riders' word) - the names
  // ride by law, the neighbor VERDICTS never ride
  for (const row of [swing, swing2, swell, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(witchTollTrendConsistent({ back: { witch: 2 }, prev: { witch: 1 }, cur: { witch: 0.5 } }), false)
  assert.equal(witchTollTrendConsistent({ back: { witch: 2 }, prev: { witch: -1 }, cur: { witch: 0 } }), false)
  assert.equal(witchTollTrendConsistent({ back: { witch: 2 }, prev: { witch: 1 } }), false)
  assert.equal(witchTollTrendConsistent({ back: { witch: '2' }, prev: { witch: 1 }, cur: { witch: 0 } }), false)
  assert.equal(witchTollTrendConsistent(null), false)
  assert.equal(witchTollTrendConsistent([]), false)
  assert.equal(witchTollTrendConsistent({ back: { witch: 2 }, prev: { witch: 1 }, cur: { witch: 0 } }), true)
  assert.equal(witchTollTrendRow({ back: { witch: 2 }, prev: { witch: 1 }, cur: { witch: 0.5 } }), null)
  assert.equal(witchTollTrendRow({ back: { witch: '2' }, prev: { witch: 1 }, cur: { witch: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own freshest silence (FACE 349 -> 350 -> 351 would
  // ride 0 -> 0 -> cur - the census's own byAttacker.Witch cells the
  // sibling tolls' wires already hold) rides the honest silence
  assert.equal(witchTollTrendRow({ back: { witch: 0 }, prev: { witch: 0 }, cur: { witch: 0 } }), null)
})
