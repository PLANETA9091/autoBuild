import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spiderTollTrendRow, spiderTollTrendConsistent } from '../../src/lib/spidertolltrend.mjs'

test("the spider toll's own trend (v0.976.68) - the mob book's fourth class-toll word, the fence, the word", () => {
  // THE SPIDER TOLL'S OWN SWING byte-exact, the field's own rides:
  // FACE 338 -> 339 -> 340 rode 0 -> 1 -> 0 spider kill(s) (the
  // counts hand-priced from the real caches, deathKindCensus's own
  // byAttacker.Spider - every directional ride the spider book's
  // toll ever took was a trade, four of four)
  const swing = spiderTollTrendRow({ back: { spider: 0 }, prev: { spider: 1 }, cur: { spider: 0 } })
  assert.equal(swing, "the spider toll's own trend (v0.976.68): the spider toll's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration, the mob toll's own word prices the mob kind's own mass - a different book, the killer is not the death - this word prices the spider toll's own mass, co-existence by seat never by duplication)")
  // THE SPIDER TOLL'S OWN SWING byte-exact, the field's own mirror
  // ride: FACE 341 -> 342 -> 343 rode 1 -> 0 -> 1
  const swing2 = spiderTollTrendRow({ back: { spider: 1 }, prev: { spider: 0 }, cur: { spider: 1 } })
  assert.equal(swing2, "the spider toll's own trend (v0.976.68): the spider toll's own swing - 1 -> 0 (-1) -> 1 (+1) - the rise and the fall traded seats between the walks (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration, the mob toll's own word prices the mob kind's own mass - a different book, the killer is not the death - this word prices the spider toll's own mass, co-existence by seat never by duplication)")
  // THE SPIDER TOLL'S OWN SWELL: the law prices it, the field never
  // rode it in the priced window (the sibling tolls' own precedent)
  const swell = spiderTollTrendRow({ back: { spider: 1 }, prev: { spider: 3 }, cur: { spider: 4 } })
  assert.equal(swell, "the spider toll's own trend (v0.976.68): the spider toll's rise ran two steps deep - 1 -> 3 (+2) -> 4 (+1) - the spider toll's own swell (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration, the mob toll's own word prices the mob kind's own mass - a different book, the killer is not the death - this word prices the spider toll's own mass, co-existence by seat never by duplication)")
  // THE SPIDER TOLL'S OWN FADE: the law prices it, the field never
  // rode it in the priced window (the sibling tolls' own precedent)
  const fade = spiderTollTrendRow({ back: { spider: 2 }, prev: { spider: 1 }, cur: { spider: 0 } })
  assert.equal(fade, "the spider toll's own trend (v0.976.68): the spider toll's fall ran two steps deep - 2 -> 1 (-1) -> 0 (-1) - the spider toll's own fade (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration, the mob toll's own word prices the mob kind's own mass - a different book, the killer is not the death - this word prices the spider toll's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // rides: FACE 342 -> 343 -> 344 rode 0 -> 1 -> 1 (the climb riding
  // unnamed behind a held second step), FACE 343 -> 344 -> 345 rode
  // 1 -> 1 -> 0, FACE 344 -> 345 -> 346 rode 1 -> 0 -> 0, FACE 345
  // -> 346 -> 347 rode 0 -> 0 -> 0 (the clean trio)
  assert.equal(spiderTollTrendRow({ back: { spider: 0 }, prev: { spider: 1 }, cur: { spider: 1 } }), null)
  assert.equal(spiderTollTrendRow({ back: { spider: 1 }, prev: { spider: 1 }, cur: { spider: 0 } }), null)
  assert.equal(spiderTollTrendRow({ back: { spider: 1 }, prev: { spider: 0 }, cur: { spider: 0 } }), null)
  assert.equal(spiderTollTrendRow({ back: { spider: 0 }, prev: { spider: 0 }, cur: { spider: 0 } }), null)
  assert.equal(spiderTollTrendRow({ back: { spider: 2 }, prev: { spider: 2 }, cur: { spider: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seat's own
  // verdict words (no owns, no dynasty, no turn) - co-existence by
  // seat never by duplication; the seat-law tail names the neighbor
  // seats (the attacker seat's word, the riders' word, the mob
  // toll's own word) - the names ride by law, the neighbor VERDICTS
  // never ride
  for (const row of [swell, fade, swing, swing2]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(spiderTollTrendConsistent({ back: { spider: 2 }, prev: { spider: 1 }, cur: { spider: 0.5 } }), false)
  assert.equal(spiderTollTrendConsistent({ back: { spider: 2 }, prev: { spider: -1 }, cur: { spider: 0 } }), false)
  assert.equal(spiderTollTrendConsistent({ back: { spider: 2 }, prev: { spider: 1 } }), false)
  assert.equal(spiderTollTrendConsistent({ back: { spider: '2' }, prev: { spider: 1 }, cur: { spider: 0 } }), false)
  assert.equal(spiderTollTrendConsistent(null), false)
  assert.equal(spiderTollTrendConsistent([]), false)
  assert.equal(spiderTollTrendConsistent({ back: { spider: 2 }, prev: { spider: 1 }, cur: { spider: 0 } }), true)
  assert.equal(spiderTollTrendRow({ back: { spider: 2 }, prev: { spider: 1 }, cur: { spider: 0.5 } }), null)
  assert.equal(spiderTollTrendRow({ back: { spider: '2' }, prev: { spider: 1 }, cur: { spider: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own swing FACE 340/341 chains hand-priced from the
  // real caches (deathKindCensus owns the buckets - the same cells
  // the attacker seat's, the riders', the zombie toll's, the
  // skeleton toll's and the drowned toll's wires hold): 0 -> 1 -> 0
  // rides the swing byte-exact
  const fieldRow = spiderTollTrendRow({ back: { spider: 0 }, prev: { spider: 1 }, cur: { spider: 0 } })
  assert.ok(fieldRow === swing)
})
