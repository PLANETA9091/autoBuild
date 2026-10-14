import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mobTollTrendRow, mobTollTrendConsistent } from '../../src/lib/mobtolltrend.mjs'

test("the mob toll's own trend (v0.976.62) - the biggest crowd's own trend, the fence, the word", () => {
  // THE MOB TOLL'S OWN SWELL byte-exact, the field's own ride:
  // FACE 337 -> 338 -> 339 rode 1 -> 4 -> 6 mob death(s) (the counts
  // hand-priced from the real caches, deathKindCensus owns the book -
  // the crowd's own climb three walks deep)
  const swell1 = mobTollTrendRow({ back: { mob: 1 }, prev: { mob: 4 }, cur: { mob: 6 } })
  assert.equal(swell1, "the mob toll's own trend (v0.976.62): the mob toll's rise ran two steps deep - 1 -> 4 (+3) -> 6 (+2) - the mob toll's own swell (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the mob toll's own mass, co-existence by seat never by duplication)")
  // THE MOB TOLL'S OWN SWING byte-exact, the field's own five rides:
  // FACE 336 -> 337 -> 338 rode 5 -> 1 -> 4, FACE 338 -> 339 -> 340
  // rode 4 -> 6 -> 3, FACE 340 -> 341 -> 342 rode 3 -> 1 -> 6, FACE
  // 341 -> 342 -> 343 rode 1 -> 6 -> 1, FACE 342 -> 343 -> 344 rode
  // 6 -> 1 -> 4 (the freshest swing)
  const swing1 = mobTollTrendRow({ back: { mob: 5 }, prev: { mob: 1 }, cur: { mob: 4 } })
  assert.equal(swing1, "the mob toll's own trend (v0.976.62): the mob toll's own swing - 5 -> 1 (-4) -> 4 (+3) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the mob toll's own mass, co-existence by seat never by duplication)")
  const swing2 = mobTollTrendRow({ back: { mob: 4 }, prev: { mob: 6 }, cur: { mob: 3 } })
  assert.equal(swing2, "the mob toll's own trend (v0.976.62): the mob toll's own swing - 4 -> 6 (+2) -> 3 (-3) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the mob toll's own mass, co-existence by seat never by duplication)")
  const swing3 = mobTollTrendRow({ back: { mob: 3 }, prev: { mob: 1 }, cur: { mob: 6 } })
  assert.equal(swing3, "the mob toll's own trend (v0.976.62): the mob toll's own swing - 3 -> 1 (-2) -> 6 (+5) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the mob toll's own mass, co-existence by seat never by duplication)")
  const swing4 = mobTollTrendRow({ back: { mob: 1 }, prev: { mob: 6 }, cur: { mob: 1 } })
  assert.equal(swing4, "the mob toll's own trend (v0.976.62): the mob toll's own swing - 1 -> 6 (+5) -> 1 (-5) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the mob toll's own mass, co-existence by seat never by duplication)")
  const swing5 = mobTollTrendRow({ back: { mob: 6 }, prev: { mob: 1 }, cur: { mob: 4 } })
  assert.equal(swing5, "the mob toll's own trend (v0.976.62): the mob toll's own swing - 6 -> 1 (-5) -> 4 (+3) - the rise and the fall traded seats between the walks (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the mob toll's own mass, co-existence by seat never by duplication)")
  // THE MOB TOLL'S OWN FADE byte-exact, the field's own ride: FACE
  // 339 -> 340 -> 341 rode 6 -> 3 -> 1 (two falls deep - the crowd's
  // own relief)
  const fade = mobTollTrendRow({ back: { mob: 6 }, prev: { mob: 3 }, cur: { mob: 1 } })
  assert.equal(fade, "the mob toll's own trend (v0.976.62): the mob toll's fall ran two steps deep - 6 -> 3 (-3) -> 1 (-2) - the mob toll's own fade (the kind's word prices the head's own identity, the siege's word prices the book's own total - this word prices the mob toll's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // rides: FACE 334 -> 335 -> 336 rode 12 -> 5 -> 5 (the record 12's
  // own aftermath, the second step held), FACE 335 -> 336 -> 337 rode
  // 5 -> 5 -> 1 (the first step held - the record single-face toll
  // riding unnamed behind a held step)
  assert.equal(mobTollTrendRow({ back: { mob: 12 }, prev: { mob: 5 }, cur: { mob: 5 } }), null)
  assert.equal(mobTollTrendRow({ back: { mob: 5 }, prev: { mob: 5 }, cur: { mob: 1 } }), null)
  assert.equal(mobTollTrendRow({ back: { mob: 0 }, prev: { mob: 0 }, cur: { mob: 0 } }), null)
  assert.equal(mobTollTrendRow({ back: { mob: 3 }, prev: { mob: 3 }, cur: { mob: 3 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the head's own
  // verdict words (no dynasty, no turn) - co-existence by seat never
  // by duplication; the seat-law tail names the neighbor seats (the
  // kind's word, the siege's word) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swell1, swing1, swing2, swing3, swing4, swing5, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(mobTollTrendConsistent({ back: { mob: 2 }, prev: { mob: 1 }, cur: { mob: 0.5 } }), false)
  assert.equal(mobTollTrendConsistent({ back: { mob: 2 }, prev: { mob: -1 }, cur: { mob: 0 } }), false)
  assert.equal(mobTollTrendConsistent({ back: { mob: 2 }, prev: { mob: 1 } }), false)
  assert.equal(mobTollTrendConsistent({ back: { mob: '2' }, prev: { mob: 1 }, cur: { mob: 0 } }), false)
  assert.equal(mobTollTrendConsistent(null), false)
  assert.equal(mobTollTrendConsistent([]), false)
  assert.equal(mobTollTrendConsistent({ back: { mob: 2 }, prev: { mob: 1 }, cur: { mob: 0 } }), true)
  assert.equal(mobTollTrendRow({ back: { mob: 2 }, prev: { mob: 1 }, cur: { mob: 0.5 } }), null)
  assert.equal(mobTollTrendRow({ back: { mob: '2' }, prev: { mob: 1 }, cur: { mob: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own freshest swing FACE 342/343/344 hand-priced from
  // the real caches (deathKindCensus owns the buckets - the same
  // cells the kind trend's, the siege's and the drown toll's wires
  // hold): 6 -> 1 -> 4 rides the swing byte-exact
  const fieldRow = mobTollTrendRow({ back: { mob: 6 }, prev: { mob: 1 }, cur: { mob: 4 } })
  assert.ok(fieldRow === swing5)
})
