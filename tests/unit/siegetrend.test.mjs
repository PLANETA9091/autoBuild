import { test } from 'node:test'
import assert from 'node:assert/strict'
import { siegeTrendRow, siegeTrendConsistent } from '../../src/lib/siegetrend.mjs'

test("the siege's own trend (v0.976.44) - the book's own magnitude, the fence, the word", () => {
  // THE SWELL'S OWN RUN byte-exact, the field's own arithmetic: FACE
  // 326 -> 327 -> 328 rode 1 -> 4 -> 7 death(s) (the counts
  // hand-priced from the real logs, deathKindCensus owns the book)
  const swell = siegeTrendRow({ back: { deaths: 1 }, prev: { deaths: 4 }, cur: { deaths: 7 } })
  assert.equal(swell, "the siege's own trend (v0.976.44): the book's rise ran two steps deep - 1 -> 4 (+3) -> 7 (+3) - the siege's own swell (the kind's word prices the head's own seat, the pace prices the sustained rate - this word prices the book's own magnitude, co-existence by seat never by duplication)")
  // THE SIEGE'S OWN SWING byte-exact, the field's own ride FACE 325 ->
  // 326 -> 327 rode 9 -> 1 -> 4 (the rise traded seats with the fall)
  const swing = siegeTrendRow({ back: { deaths: 9 }, prev: { deaths: 1 }, cur: { deaths: 4 } })
  assert.equal(swing, "the siege's own trend (v0.976.44): the siege's own swing - 9 -> 1 (-8) -> 4 (+3) - the rise and the fall traded seats between the walks (the kind's word prices the head's own seat, the pace prices the sustained rate - this word prices the book's own magnitude, co-existence by seat never by duplication)")
  // the reverse swing rides the same word either way (the
  // alternation is one shape): FACE 327 -> 328 -> 329 rode 4 -> 7 -> 4
  const swing2 = siegeTrendRow({ back: { deaths: 4 }, prev: { deaths: 7 }, cur: { deaths: 4 } })
  assert.ok(swing2.includes('the siege\'s own swing - 4 -> 7 (+3) -> 4 (-3)'))
  // THE FADE'S OWN RUN - two consecutive falls (the branch the six
  // priced faces never rode - the law prices it, the bars never
  // invent it)
  const fade = siegeTrendRow({ back: { deaths: 7 }, prev: { deaths: 4 }, cur: { deaths: 2 } })
  assert.equal(fade, "the siege's own trend (v0.976.44): the book's fall ran two steps deep - 7 -> 4 (-3) -> 2 (-2) - the siege's own fade (the kind's word prices the head's own seat, the pace prices the sustained rate - this word prices the book's own magnitude, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // trio: FACE 328 -> 329 -> 330 rode 7 -> 4 -> 4
  assert.equal(siegeTrendRow({ back: { deaths: 7 }, prev: { deaths: 4 }, cur: { deaths: 4 } }), null)
  // the byte-pin: the trend row never speaks the kind's own words
  // (no dynasty, no churn, no turn) nor the pace's own units
  // (never deaths/min - co-existence by seat never by duplication)
  for (const row of [swell, swing, swing2, fade]) {
    assert.ok(!/dynasty|churn|turn|deaths\/min/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(siegeTrendConsistent({ back: { deaths: 1 }, prev: { deaths: 4 }, cur: { deaths: 7.5 } }), false)
  assert.equal(siegeTrendConsistent({ back: { deaths: 1 }, prev: { deaths: -1 }, cur: { deaths: 7 } }), false)
  assert.equal(siegeTrendConsistent({ back: { deaths: 1 }, prev: { deaths: 4 } }), false)
  assert.equal(siegeTrendConsistent({ back: { deaths: '1' }, prev: { deaths: 4 }, cur: { deaths: 7 } }), false)
  assert.equal(siegeTrendConsistent(null), false)
  assert.equal(siegeTrendConsistent([]), false)
  assert.equal(siegeTrendConsistent({ back: { deaths: 1 }, prev: { deaths: 4 }, cur: { deaths: 7 } }), true)
  assert.equal(siegeTrendRow({ back: { deaths: 1 }, prev: { deaths: 4 }, cur: { deaths: 7.5 } }), null)
  assert.equal(siegeTrendRow({ back: { deaths: '1' }, prev: { deaths: 4 }, cur: { deaths: 7 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own trio FACE 326/327/328 hand-priced from the real
  // logs (deathKindCensus owns the total - the same cells the kind
  // trend's wire holds): 1 -> 4 -> 7 rides the swell byte-exact
  const fieldRow = siegeTrendRow({ back: { deaths: 1 }, prev: { deaths: 4 }, cur: { deaths: 7 } })
  assert.ok(fieldRow === swell)
})
