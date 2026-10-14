import { test } from 'node:test'
import assert from 'node:assert/strict'
import { relogTrendRow, relogTrendConsistent } from '../../src/lib/relogtrend.mjs'

test("the relog book's own trend (v0.976.42) - the voice's own shape, the fence, the word", () => {
  // THE FADE'S OWN RUN byte-exact, the field's own arithmetic: FACE
  // 325 -> 326 -> 327 rode 4 -> 3 -> 2 relog(s) (the counts hand-priced
  // from the real logs, the frozen census owns the book)
  const fade = relogTrendRow({ back: { relogs: 4 }, prev: { relogs: 3 }, cur: { relogs: 2 } })
  assert.equal(fade, "the relog book's own trend (v0.976.42): the voice's fall ran two steps deep - 4 -> 3 (-1) -> 2 (-1) - the fade's own run (the echo prices each recurrence one at a time - the run is the pair's own shape)")
  // the second fade's own ride: FACE 324 -> 325 -> 326 rode 9 -> 4 -> 3
  const fade2 = relogTrendRow({ back: { relogs: 9 }, prev: { relogs: 4 }, cur: { relogs: 3 } })
  assert.ok(fade2.includes("the relog book's own trend (v0.976.42): the voice's fall ran two steps deep - 9 -> 4 (-5) -> 3 (-1) - the fade's own run"))
  // THE SWELL'S OWN RUN - two consecutive rises (the branch the seven
  // spoken faces never rode - the law prices it, the bars never
  // invent it)
  const swell = relogTrendRow({ back: { relogs: 2 }, prev: { relogs: 5 }, cur: { relogs: 8 } })
  assert.equal(swell, "the relog book's own trend (v0.976.42): the voice's rise ran two steps deep - 2 -> 5 (+3) -> 8 (+3) - the swell's own run (the echo prices each recurrence one at a time - the run is the pair's own shape)")
  // THE VOICE'S OWN SWING byte-exact: the field's own ride FACE 323 ->
  // 324 -> 325 rode 6 -> 9 -> 4 (the rise traded seats with the fall)
  const swing = relogTrendRow({ back: { relogs: 6 }, prev: { relogs: 9 }, cur: { relogs: 4 } })
  assert.equal(swing, "the relog book's own trend (v0.976.42): the voice's own swing - 6 -> 9 (+3) -> 4 (-5) - the rise and the fall traded seats between the walks (the echo prices each recurrence one at a time - the alternation is the pair's own shape)")
  // the reverse swing rides the same word either way (the
  // alternation is one shape)
  const swing2 = relogTrendRow({ back: { relogs: 9 }, prev: { relogs: 4 }, cur: { relogs: 7 } })
  assert.ok(swing2.includes('the voice\'s own swing - 9 -> 4 (-5) -> 7 (+3)'))
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // trios: FACE 326 -> 327 -> 328 rode 3 -> 2 -> 2, FACE 327 -> 328 ->
  // 329 rode 2 -> 2 -> 5
  assert.equal(relogTrendRow({ back: { relogs: 3 }, prev: { relogs: 2 }, cur: { relogs: 2 } }), null)
  assert.equal(relogTrendRow({ back: { relogs: 2 }, prev: { relogs: 2 }, cur: { relogs: 5 } }), null)
  // the byte-pin: the trend row never speaks the echo's own words
  // (no return, no repeat - co-existence by seat never by
  // duplication)
  for (const row of [fade, fade2, swell, swing, swing2]) {
    assert.ok(!/return|repeat/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(relogTrendConsistent({ back: { relogs: 4 }, prev: { relogs: 3 }, cur: { relogs: 2.5 } }), false)
  assert.equal(relogTrendConsistent({ back: { relogs: 4 }, prev: { relogs: -1 }, cur: { relogs: 2 } }), false)
  assert.equal(relogTrendConsistent({ back: { relogs: 4 }, prev: { relogs: 3 } }), false)
  assert.equal(relogTrendConsistent({ back: { relogs: '4' }, prev: { relogs: 3 }, cur: { relogs: 2 } }), false)
  assert.equal(relogTrendConsistent(null), false)
  assert.equal(relogTrendConsistent([]), false)
  assert.equal(relogTrendConsistent({ back: { relogs: 4 }, prev: { relogs: 3 }, cur: { relogs: 2 } }), true)
  assert.equal(relogTrendRow({ back: { relogs: 4 }, prev: { relogs: 3 }, cur: { relogs: 2.5 } }), null)
  assert.equal(relogTrendRow({ back: { relogs: '4' }, prev: { relogs: 3 }, cur: { relogs: 2 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own trio FACE 325/326/327 hand-priced from the real
  // logs (frozenCensus owns the count - the same image the echo's
  // wire holds): 4 -> 3 -> 2 rides the fade's own run byte-exact
  const fieldRow = relogTrendRow({ back: { relogs: 4 }, prev: { relogs: 3 }, cur: { relogs: 2 } })
  assert.ok(fieldRow === fade)
})
