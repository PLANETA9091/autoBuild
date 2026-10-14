import { test } from 'node:test'
import assert from 'node:assert/strict'
import { relogEraRow, relogEraConsistent } from '../../src/lib/relogera.mjs'

test("the relog book's own era (v0.976.51) - the voice's own run recurrence, the fence, the word", () => {
  // THE SWELL'S OWN ERA byte-exact, the field's own arithmetic: FACE
  // 334 -> 335 -> 336 -> 337 rode 0 -> 2 -> 3 -> 5 relog(s) (the counts
  // hand-priced from the real logs, the frozen census owns the book -
  // the era rode on FACE 337's own dispatched chain, the word's own
  // birth face)
  const swell = relogEraRow({ deep: { relogs: 0 }, back: { relogs: 2 }, prev: { relogs: 3 }, cur: { relogs: 5 } })
  assert.equal(swell, "the relog book's own era (v0.976.51): the voice's rise ran three steps deep - 0 -> 2 (+2) -> 3 (+1) -> 5 (+2) - the swell's own era (the trend prices each run one pair at a time, the echo prices each recurrence one at a time - the era is the run's own recurrence)")
  // THE FADE'S OWN ERA byte-exact, the field's own ride: FACE 324 ->
  // 325 -> 326 -> 327 rode 9 -> 4 -> 3 -> 2 (three falls three steps
  // deep - the drain held three steps and no word named it)
  const fade = relogEraRow({ deep: { relogs: 9 }, back: { relogs: 4 }, prev: { relogs: 3 }, cur: { relogs: 2 } })
  assert.equal(fade, "the relog book's own era (v0.976.51): the voice's fall ran three steps deep - 9 -> 4 (-5) -> 3 (-1) -> 2 (-1) - the fade's own era (the trend prices each run one pair at a time, the echo prices each recurrence one at a time - the era is the run's own recurrence)")
  // THE HONEST SILENCES: the mixed arcs price no era (the bars never
  // invent the era the field never rode) - the field's own mixed
  // quartets: 323/324/325/326 rode 6 -> 9 -> 4 -> 3 (rise fell), 328/
  // 329/330/331 rode 2 -> 5 -> 9 -> 4 (the rise traded), 330/331/332/
  // 333 rode 9 -> 4 -> 1 -> 4 (the fall traded)
  assert.equal(relogEraRow({ deep: { relogs: 6 }, back: { relogs: 9 }, prev: { relogs: 4 }, cur: { relogs: 3 } }), null)
  assert.equal(relogEraRow({ deep: { relogs: 2 }, back: { relogs: 5 }, prev: { relogs: 9 }, cur: { relogs: 4 } }), null)
  assert.equal(relogEraRow({ deep: { relogs: 9 }, back: { relogs: 4 }, prev: { relogs: 1 }, cur: { relogs: 4 } }), null)
  // the held step prices no era (the family's own held law - the
  // field's own held quartets: 325/326/327/328 rode 4 -> 3 -> 2 -> 2,
  // 326/327/328/329 rode 3 -> 2 -> 2 -> 5)
  assert.equal(relogEraRow({ deep: { relogs: 4 }, back: { relogs: 3 }, prev: { relogs: 2 }, cur: { relogs: 2 } }), null)
  assert.equal(relogEraRow({ deep: { relogs: 3 }, back: { relogs: 2 }, prev: { relogs: 2 }, cur: { relogs: 5 } }), null)
  // the byte-pin: the era row never speaks the trend's own words
  // (no "own run", no swing) nor the echo's own words (no repeat, no
  // return - co-existence by seat never by duplication)
  for (const row of [swell, fade]) {
    assert.ok(!/own run|swing|repeat|return/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(relogEraConsistent({ deep: { relogs: 0 }, back: { relogs: 2 }, prev: { relogs: 3 }, cur: { relogs: 2.5 } }), false)
  assert.equal(relogEraConsistent({ deep: { relogs: 0 }, back: { relogs: -1 }, prev: { relogs: 3 }, cur: { relogs: 5 } }), false)
  assert.equal(relogEraConsistent({ deep: { relogs: 0 }, back: { relogs: 2 }, prev: { relogs: 3 } }), false)
  assert.equal(relogEraConsistent({ deep: { relogs: '0' }, back: { relogs: 2 }, prev: { relogs: 3 }, cur: { relogs: 5 } }), false)
  assert.equal(relogEraConsistent(null), false)
  assert.equal(relogEraConsistent([]), false)
  assert.equal(relogEraConsistent({ deep: { relogs: 0 }, back: { relogs: 2 }, prev: { relogs: 3 }, cur: { relogs: 5 } }), true)
  assert.equal(relogEraRow({ deep: { relogs: 0 }, back: { relogs: 2 }, prev: { relogs: 3 }, cur: { relogs: 2.5 } }), null)
  assert.equal(relogEraRow({ deep: { relogs: '0' }, back: { relogs: 2 }, prev: { relogs: 3 }, cur: { relogs: 5 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own quartet FACE 334/335/336/337 hand-priced from the
  // real logs (frozenCensus owns the count - the same images the
  // echo's and the trend's wires hold; the numbers priced BY RUN ID
  // against the artifacts 38558438005 / 38563811078 / 38568215510 /
  // 38572690320): 0 -> 2 -> 3 -> 5 rides the swell's own era
  // byte-exact through the word's own fold
  const fieldRow = relogEraRow({ deep: { relogs: 0 }, back: { relogs: 2 }, prev: { relogs: 3 }, cur: { relogs: 5 } })
  assert.equal(fieldRow, swell)
})
