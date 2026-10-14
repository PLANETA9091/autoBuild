import { test } from 'node:test'
import assert from 'node:assert/strict'
import { drainTrendRow, drainTrendConsistent } from '../../src/lib/draintrend.mjs'

test("the drain's own trend (v0.976.53) - the drain's own trend, the fence, the word", () => {
  // THE DRAIN'S OWN SWING byte-exact, the field's own freshest swing:
  // FACE 336 -> 337 -> 338 rode 436 -> 196 -> 643 u lost (the counts
  // hand-priced from the real logs, sealDeathCensus owns the book -
  // the storm's own loss easing one walk then refilling one walk)
  const swing = drainTrendRow({ back: { lost: 436 }, prev: { lost: 196 }, cur: { lost: 643 } })
  assert.equal(swing, "the drain's own trend (v0.976.53): the drain's own swing - 436 -> 196 (-240) -> 643 (+447)u - the rise and the fall traded seats between the walks (the siege's word prices the deaths' own mass, the thirds' word prices the face's own split, the stranded piles' word prices the mass that stayed - this word prices the drops' own u, co-existence by seat never by duplication)")
  // the swing's second ride byte-exact, the field's own storm arc:
  // FACE 334 -> 335 -> 336 rode 968 -> 284 -> 436 (the storm's own
  // 968u draining one walk later then returning)
  const swing2 = drainTrendRow({ back: { lost: 968 }, prev: { lost: 284 }, cur: { lost: 436 } })
  assert.equal(swing2, "the drain's own trend (v0.976.53): the drain's own swing - 968 -> 284 (-684) -> 436 (+152)u - the rise and the fall traded seats between the walks (the siege's word prices the deaths' own mass, the thirds' word prices the face's own split, the stranded piles' word prices the mass that stayed - this word prices the drops' own u, co-existence by seat never by duplication)")
  // THE DRAIN'S OWN FADE - two consecutive falls byte-exact, the
  // field's own first fade: FACE 327 -> 328 -> 329 rode 407 -> 374 ->
  // 326 (the storm's drops draining walk after walk)
  const fade = drainTrendRow({ back: { lost: 407 }, prev: { lost: 374 }, cur: { lost: 326 } })
  assert.equal(fade, "the drain's own trend (v0.976.53): the drain's fall ran two steps deep - 407 -> 374 (-33) -> 326 (-48)u - the drain's own fade (the siege's word prices the deaths' own mass, the thirds' word prices the face's own split, the stranded piles' word prices the mass that stayed - this word prices the drops' own u, co-existence by seat never by duplication)")
  // the fade's second ride byte-exact, the field's own tail arc:
  // FACE 330 -> 331 -> 332 rode 264 -> 190 -> 178 (the long drain's
  // own tail two faces before the clean)
  const fade2 = drainTrendRow({ back: { lost: 264 }, prev: { lost: 190 }, cur: { lost: 178 } })
  assert.equal(fade2, "the drain's own trend (v0.976.53): the drain's fall ran two steps deep - 264 -> 190 (-74) -> 178 (-12)u - the drain's own fade (the siege's word prices the deaths' own mass, the thirds' word prices the face's own split, the stranded piles' word prices the mass that stayed - this word prices the drops' own u, co-existence by seat never by duplication)")
  // THE DRAIN'S OWN SWELL - two consecutive rises (the branch the
  // thirteen priced faces never rode - the law prices it, the bars
  // never invent it)
  const swell = drainTrendRow({ back: { lost: 116 }, prev: { lost: 407 }, cur: { lost: 900 } })
  assert.equal(swell, "the drain's own trend (v0.976.53): the drain's rise ran two steps deep - 116 -> 407 (+291) -> 900 (+493)u - the drain's own swell (the siege's word prices the deaths' own mass, the thirds' word prices the face's own split, the stranded piles' word prices the mass that stayed - this word prices the drops' own u, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the held step never rode
  // the thirteen priced faces, the law prices it: the first step
  // held, the second step held, the whole trio flat, the clean trio
  assert.equal(drainTrendRow({ back: { lost: 200 }, prev: { lost: 200 }, cur: { lost: 100 } }), null)
  assert.equal(drainTrendRow({ back: { lost: 100 }, prev: { lost: 200 }, cur: { lost: 200 } }), null)
  assert.equal(drainTrendRow({ back: { lost: 0 }, prev: { lost: 0 }, cur: { lost: 0 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the bill's own
  // verdict word (no owns) - co-existence by seat never by
  // duplication; the seat-law tail names the neighbor seats (the
  // siege's word, the thirds' word, the stranded piles' word) - the
  // names ride by law, the neighbor VERDICTS never ride
  for (const row of [swing, swing2, fade, fade2, swell]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(drainTrendConsistent({ back: { lost: 200 }, prev: { lost: 100 }, cur: { lost: 0.5 } }), false)
  assert.equal(drainTrendConsistent({ back: { lost: 200 }, prev: { lost: -1 }, cur: { lost: 0 } }), false)
  assert.equal(drainTrendConsistent({ back: { lost: 200 }, prev: { lost: 100 } }), false)
  assert.equal(drainTrendConsistent({ back: { lost: '200' }, prev: { lost: 100 }, cur: { lost: 0 } }), false)
  assert.equal(drainTrendConsistent(null), false)
  assert.equal(drainTrendConsistent([]), false)
  assert.equal(drainTrendConsistent({ back: { lost: 200 }, prev: { lost: 100 }, cur: { lost: 0 } }), true)
  assert.equal(drainTrendRow({ back: { lost: 200 }, prev: { lost: 100 }, cur: { lost: 0.5 } }), null)
  assert.equal(drainTrendRow({ back: { lost: '200' }, prev: { lost: 100 }, cur: { lost: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own freshest swing FACE 336/337/338 hand-priced from
  // the real logs (sealDeathCensus owns the lostTotal - the same
  // cells the thirds' word's, the clock's and the seal watch's wires
  // hold): 436 -> 196 -> 643 rides the swing byte-exact
  const fieldRow = drainTrendRow({ back: { lost: 436 }, prev: { lost: 196 }, cur: { lost: 643 } })
  assert.ok(fieldRow === swing)
})
