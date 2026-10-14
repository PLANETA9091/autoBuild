import { test } from 'node:test'
import assert from 'node:assert/strict'
import { zombieTollTrendRow, zombieTollTrendConsistent } from '../../src/lib/zombietolltrend.mjs'

test("the zombie toll's own trend (v0.976.64) - the mob book's first class-toll word, the fence, the word", () => {
  // THE ZOMBIE TOLL'S OWN SWELL byte-exact, the field's own birth
  // window: FACE 337 -> 338 -> 339 rode 1 -> 3 -> 4 zombie kill(s)
  // (the counts hand-priced from the real caches, deathKindCensus's
  // own byAttacker.Zombie - the night's own levy climbing two walks
  // straight)
  const swell = zombieTollTrendRow({ back: { zombie: 1 }, prev: { zombie: 3 }, cur: { zombie: 4 } })
  assert.equal(swell, "the zombie toll's own trend (v0.976.64): the zombie toll's rise ran two steps deep - 1 -> 3 (+2) -> 4 (+1) - the zombie toll's own swell (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration - this word prices the zombie toll's own mass, co-existence by seat never by duplication)")
  // THE ZOMBIE TOLL'S OWN SWING byte-exact, the field's own three
  // rides: FACE 336 -> 337 -> 338 rode 3 -> 1 -> 3, FACE 338 -> 339
  // -> 340 rode 3 -> 4 -> 0, FACE 341 -> 342 -> 343 rode 0 -> 1 -> 0
  const swing1 = zombieTollTrendRow({ back: { zombie: 3 }, prev: { zombie: 1 }, cur: { zombie: 3 } })
  assert.equal(swing1, "the zombie toll's own trend (v0.976.64): the zombie toll's own swing - 3 -> 1 (-2) -> 3 (+2) - the rise and the fall traded seats between the walks (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration - this word prices the zombie toll's own mass, co-existence by seat never by duplication)")
  const swing2 = zombieTollTrendRow({ back: { zombie: 3 }, prev: { zombie: 4 }, cur: { zombie: 0 } })
  assert.equal(swing2, "the zombie toll's own trend (v0.976.64): the zombie toll's own swing - 3 -> 4 (+1) -> 0 (-4) - the rise and the fall traded seats between the walks (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration - this word prices the zombie toll's own mass, co-existence by seat never by duplication)")
  const swing3 = zombieTollTrendRow({ back: { zombie: 0 }, prev: { zombie: 1 }, cur: { zombie: 0 } })
  assert.equal(swing3, "the zombie toll's own trend (v0.976.64): the zombie toll's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration - this word prices the zombie toll's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // rides: FACE 334 -> 335 -> 336 rode 9 -> 3 -> 3 (the crowd's own
  // crash riding unnamed behind a held second step), FACE 335 -> 336
  // -> 337 rode 3 -> 3 -> 1 (a held first step), FACE 339 -> 340 ->
  // 341 rode 4 -> 0 -> 0, FACE 340 -> 341 -> 342 rode 0 -> 0 -> 1,
  // FACE 342 -> 343 -> 344 rode 1 -> 0 -> 0, FACE 343 -> 344 -> 345
  // rode 0 -> 0 -> 0 (the clean trio)
  assert.equal(zombieTollTrendRow({ back: { zombie: 9 }, prev: { zombie: 3 }, cur: { zombie: 3 } }), null)
  assert.equal(zombieTollTrendRow({ back: { zombie: 3 }, prev: { zombie: 3 }, cur: { zombie: 1 } }), null)
  assert.equal(zombieTollTrendRow({ back: { zombie: 4 }, prev: { zombie: 0 }, cur: { zombie: 0 } }), null)
  assert.equal(zombieTollTrendRow({ back: { zombie: 0 }, prev: { zombie: 0 }, cur: { zombie: 1 } }), null)
  assert.equal(zombieTollTrendRow({ back: { zombie: 1 }, prev: { zombie: 0 }, cur: { zombie: 0 } }), null)
  assert.equal(zombieTollTrendRow({ back: { zombie: 0 }, prev: { zombie: 0 }, cur: { zombie: 0 } }), null)
  assert.equal(zombieTollTrendRow({ back: { zombie: 2 }, prev: { zombie: 2 }, cur: { zombie: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seat's own
  // verdict words (no owns, no dynasty, no turn) - co-existence by
  // seat never by duplication; the seat-law tail names the neighbor
  // seats (the attacker seat's word, the riders' word) - the names
  // ride by law, the neighbor VERDICTS never ride
  for (const row of [swell, swing1, swing2, swing3]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(zombieTollTrendConsistent({ back: { zombie: 2 }, prev: { zombie: 1 }, cur: { zombie: 0.5 } }), false)
  assert.equal(zombieTollTrendConsistent({ back: { zombie: 2 }, prev: { zombie: -1 }, cur: { zombie: 0 } }), false)
  assert.equal(zombieTollTrendConsistent({ back: { zombie: 2 }, prev: { zombie: 1 } }), false)
  assert.equal(zombieTollTrendConsistent({ back: { zombie: '2' }, prev: { zombie: 1 }, cur: { zombie: 0 } }), false)
  assert.equal(zombieTollTrendConsistent(null), false)
  assert.equal(zombieTollTrendConsistent([]), false)
  assert.equal(zombieTollTrendConsistent({ back: { zombie: 2 }, prev: { zombie: 1 }, cur: { zombie: 0 } }), true)
  assert.equal(zombieTollTrendRow({ back: { zombie: 2 }, prev: { zombie: 1 }, cur: { zombie: 0.5 } }), null)
  assert.equal(zombieTollTrendRow({ back: { zombie: '2' }, prev: { zombie: 1 }, cur: { zombie: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own swell FACE 337/338/339 hand-priced from the real
  // caches (deathKindCensus owns the buckets - the same cells the
  // attacker seat's and the riders' wires hold): 1 -> 3 -> 4 rides
  // the swell byte-exact
  const fieldRow = zombieTollTrendRow({ back: { zombie: 1 }, prev: { zombie: 3 }, cur: { zombie: 4 } })
  assert.ok(fieldRow === swell)
})
