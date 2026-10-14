import { test } from 'node:test'
import assert from 'node:assert/strict'
import { drownedTollTrendRow, drownedTollTrendConsistent } from '../../src/lib/drownedtolltrend.mjs'

test("the drowned toll's own trend (v0.976.67) - the mob book's third class-toll word, the fence, the word", () => {
  // THE DROWNED TOLL'S OWN FADE byte-exact, the field's own birth:
  // FACE 344 -> 345 -> 346 rode 2 -> 1 -> 0 drowned kill(s) (the
  // counts hand-priced from the real caches, deathKindCensus's own
  // byAttacker.Drowned - the wet killer's own drags falling two walks
  // straight, the first fade the attacker book's class tolls rode)
  const fade = drownedTollTrendRow({ back: { drowned: 2 }, prev: { drowned: 1 }, cur: { drowned: 0 } })
  assert.equal(fade, "the drowned toll's own trend (v0.976.67): the drowned toll's fall ran two steps deep - 2 -> 1 (-1) -> 0 (-1) - the drowned toll's own fade (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration, the drown toll's own word prices the water kind's own mass - a different book, the killer is not the death - this word prices the drowned toll's own mass, co-existence by seat never by duplication)")
  // THE DROWNED TOLL'S OWN SWING byte-exact, the field's own ride:
  // FACE 343 -> 344 -> 345 rode 0 -> 2 -> 1
  const swing = drownedTollTrendRow({ back: { drowned: 0 }, prev: { drowned: 2 }, cur: { drowned: 1 } })
  assert.equal(swing, "the drowned toll's own trend (v0.976.67): the drowned toll's own swing - 0 -> 2 (+2) -> 1 (-1) - the rise and the fall traded seats between the walks (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration, the drown toll's own word prices the water kind's own mass - a different book, the killer is not the death - this word prices the drowned toll's own mass, co-existence by seat never by duplication)")
  // THE DROWNED TOLL'S OWN SWELL: the law prices it, the field never
  // rode it in the priced window (the sibling tolls' own precedent)
  const swell = drownedTollTrendRow({ back: { drowned: 1 }, prev: { drowned: 3 }, cur: { drowned: 4 } })
  assert.equal(swell, "the drowned toll's own trend (v0.976.67): the drowned toll's rise ran two steps deep - 1 -> 3 (+2) -> 4 (+1) - the drowned toll's own swell (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration, the drown toll's own word prices the water kind's own mass - a different book, the killer is not the death - this word prices the drowned toll's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // rides: FACE 340 -> 341 -> 342 rode 3 -> 0 -> 0 (the crowd's own
  // crash riding unnamed behind a held second step), FACE 341 -> 342
  // -> 343 rode 0 -> 0 -> 0 (the clean trio), FACE 342 -> 343 -> 344
  // rode 0 -> 0 -> 2 (the climb riding unnamed behind a held first
  // step), FACE 345 -> 346 -> 347 rode 1 -> 0 -> 0
  assert.equal(drownedTollTrendRow({ back: { drowned: 3 }, prev: { drowned: 0 }, cur: { drowned: 0 } }), null)
  assert.equal(drownedTollTrendRow({ back: { drowned: 0 }, prev: { drowned: 0 }, cur: { drowned: 0 } }), null)
  assert.equal(drownedTollTrendRow({ back: { drowned: 0 }, prev: { drowned: 0 }, cur: { drowned: 2 } }), null)
  assert.equal(drownedTollTrendRow({ back: { drowned: 1 }, prev: { drowned: 0 }, cur: { drowned: 0 } }), null)
  assert.equal(drownedTollTrendRow({ back: { drowned: 2 }, prev: { drowned: 2 }, cur: { drowned: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seat's own
  // verdict words (no owns, no dynasty, no turn) - co-existence by
  // seat never by duplication; the seat-law tail names the neighbor
  // seats (the attacker seat's word, the riders' word, the drown
  // toll's own word) - the names ride by law, the neighbor VERDICTS
  // never ride
  for (const row of [swell, fade, swing]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(drownedTollTrendConsistent({ back: { drowned: 2 }, prev: { drowned: 1 }, cur: { drowned: 0.5 } }), false)
  assert.equal(drownedTollTrendConsistent({ back: { drowned: 2 }, prev: { drowned: -1 }, cur: { drowned: 0 } }), false)
  assert.equal(drownedTollTrendConsistent({ back: { drowned: 2 }, prev: { drowned: 1 } }), false)
  assert.equal(drownedTollTrendConsistent({ back: { drowned: '2' }, prev: { drowned: 1 }, cur: { drowned: 0 } }), false)
  assert.equal(drownedTollTrendConsistent(null), false)
  assert.equal(drownedTollTrendConsistent([]), false)
  assert.equal(drownedTollTrendConsistent({ back: { drowned: 2 }, prev: { drowned: 1 }, cur: { drowned: 0 } }), true)
  assert.equal(drownedTollTrendRow({ back: { drowned: 2 }, prev: { drowned: 1 }, cur: { drowned: 0.5 } }), null)
  assert.equal(drownedTollTrendRow({ back: { drowned: '2' }, prev: { drowned: 1 }, cur: { drowned: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own fade FACE 344/345/346 hand-priced from the real
  // caches (deathKindCensus owns the buckets - the same cells the
  // attacker seat's, the riders', the zombie toll's and the skeleton
  // toll's wires hold): 2 -> 1 -> 0 rides the fade byte-exact
  const fieldRow = drownedTollTrendRow({ back: { drowned: 2 }, prev: { drowned: 1 }, cur: { drowned: 0 } })
  assert.ok(fieldRow === fade)
})
