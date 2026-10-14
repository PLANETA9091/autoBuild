import { test } from 'node:test'
import assert from 'node:assert/strict'
import { pileTrendRow, pileTrendConsistent } from '../../src/lib/piletrend.mjs'

test("the biggest pile's own trend (v0.976.55) - the pile's own trend, the fence, the word", () => {
  // THE PILE'S OWN SWING byte-exact, the field's own freshest swing:
  // FACE 337 -> 338 -> 339 rode 149 -> 249 -> 158 u (the biggest
  // single drop hand-priced from the real logs, strandedPiles owns
  // the book - the storm's worst pile swelling one walk then easing
  // one walk)
  const swing = pileTrendRow({ back: { peak: 149 }, prev: { peak: 249 }, cur: { peak: 158 } })
  assert.equal(swing, "the biggest pile's own trend (v0.976.55): the pile's own swing - 149 -> 249 (+100) -> 158 (-91)u - the rise and the fall traded seats between the walks (the drain's word prices the drops' own sum, the thirds' word prices the face's own split, the big-pile count prices the big class within one face, the strand's cast prices the WHO - this word prices the biggest single pile's own u, co-existence by seat never by duplication)")
  // the swing's second ride byte-exact, the field's own biggest jump:
  // FACE 332 -> 333 -> 334 rode 55 -> 324 -> 265 (the quiet face's
  // worst collapse jumping to the field's own worst pile, then easing)
  const swing2 = pileTrendRow({ back: { peak: 55 }, prev: { peak: 324 }, cur: { peak: 265 } })
  assert.equal(swing2, "the biggest pile's own trend (v0.976.55): the pile's own swing - 55 -> 324 (+269) -> 265 (-59)u - the rise and the fall traded seats between the walks (the drain's word prices the drops' own sum, the thirds' word prices the face's own split, the big-pile count prices the big class within one face, the strand's cast prices the WHO - this word prices the biggest single pile's own u, co-existence by seat never by duplication)")
  // THE PILE'S OWN FADE - two consecutive falls byte-exact, the
  // field's own first fade: FACE 329 -> 330 -> 331 rode 225 -> 148 ->
  // 72 (the twin drain's own first walk)
  const fade = pileTrendRow({ back: { peak: 225 }, prev: { peak: 148 }, cur: { peak: 72 } })
  assert.equal(fade, "the biggest pile's own trend (v0.976.55): the pile's fall ran two steps deep - 225 -> 148 (-77) -> 72 (-76)u - the pile's own fade (the drain's word prices the drops' own sum, the thirds' word prices the face's own split, the big-pile count prices the big class within one face, the strand's cast prices the WHO - this word prices the biggest single pile's own u, co-existence by seat never by duplication)")
  // the fade's second ride byte-exact, the storm arc's own drain:
  // FACE 333 -> 334 -> 335 rode 324 -> 265 -> 81 (the storm's worst
  // pile draining walk after walk)
  const fade2 = pileTrendRow({ back: { peak: 324 }, prev: { peak: 265 }, cur: { peak: 81 } })
  assert.equal(fade2, "the biggest pile's own trend (v0.976.55): the pile's fall ran two steps deep - 324 -> 265 (-59) -> 81 (-184)u - the pile's own fade (the drain's word prices the drops' own sum, the thirds' word prices the face's own split, the big-pile count prices the big class within one face, the strand's cast prices the WHO - this word prices the biggest single pile's own u, co-existence by seat never by duplication)")
  // THE PILE'S OWN SWELL - two consecutive rises byte-exact, the
  // field's own birth window: FACE 335 -> 336 -> 337 rode 81 -> 145
  // -> 149 (the worst pile creeping back two walks straight)
  const swell = pileTrendRow({ back: { peak: 81 }, prev: { peak: 145 }, cur: { peak: 149 } })
  assert.equal(swell, "the biggest pile's own trend (v0.976.55): the pile's rise ran two steps deep - 81 -> 145 (+64) -> 149 (+4)u - the pile's own swell (the drain's word prices the drops' own sum, the thirds' word prices the face's own split, the big-pile count prices the big class within one face, the strand's cast prices the WHO - this word prices the biggest single pile's own u, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the held step never rode
  // the eleven priced faces, the law prices it: the first step held,
  // the second step held, the whole trio flat
  assert.equal(pileTrendRow({ back: { peak: 200 }, prev: { peak: 200 }, cur: { peak: 100 } }), null)
  assert.equal(pileTrendRow({ back: { peak: 100 }, prev: { peak: 200 }, cur: { peak: 200 } }), null)
  assert.equal(pileTrendRow({ back: { peak: 0 }, prev: { peak: 0 }, cur: { peak: 0 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the cast's own
  // verdict word (no owns) - co-existence by seat never by
  // duplication; the seat-law tail names the neighbor seats (the
  // drain's word, the thirds' word, the big-pile count, the strand's
  // cast) - the names ride by law, the neighbor VERDICTS never ride
  for (const row of [swing, swing2, fade, fade2, swell]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(pileTrendConsistent({ back: { peak: 200 }, prev: { peak: 100 }, cur: { peak: 0.5 } }), false)
  assert.equal(pileTrendConsistent({ back: { peak: 200 }, prev: { peak: -1 }, cur: { peak: 0 } }), false)
  assert.equal(pileTrendConsistent({ back: { peak: 200 }, prev: { peak: 100 } }), false)
  assert.equal(pileTrendConsistent({ back: { peak: '200' }, prev: { peak: 100 }, cur: { peak: 0 } }), false)
  assert.equal(pileTrendConsistent(null), false)
  assert.equal(pileTrendConsistent([]), false)
  assert.equal(pileTrendConsistent({ back: { peak: 200 }, prev: { peak: 100 }, cur: { peak: 0 } }), true)
  assert.equal(pileTrendRow({ back: { peak: 200 }, prev: { peak: 100 }, cur: { peak: 0.5 } }), null)
  assert.equal(pileTrendRow({ back: { peak: '200' }, prev: { peak: 100 }, cur: { peak: 0 } }), null)
  // the sparse law's own ride: a fold whose face carries no massy
  // pile (the census's own null biggest) prices no read - the null
  // never invents a zero
  assert.equal(pileTrendRow({ back: { peak: null }, prev: { peak: 100 }, cur: { peak: 50 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own freshest swing FACE 337/338/339 hand-priced from
  // the real logs (strandedPiles owns the biggest - the same cell the
  // strand row's wire holds): 149 -> 249 -> 158 rides the swing
  // byte-exact
  const fieldRow = pileTrendRow({ back: { peak: 149 }, prev: { peak: 249 }, cur: { peak: 158 } })
  assert.ok(fieldRow === swing)
})
