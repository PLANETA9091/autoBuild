import { test } from 'node:test'
import assert from 'node:assert/strict'
import { blindLiveTrendRow, blindLiveTrendConsistent } from '../../src/lib/blindlivetrend.mjs'

test("the blind-live's own trend (v0.976.56) - the blind-live's own trend, the fence, the word", () => {
  // THE BLIND-LIVE'S OWN SWING byte-exact, the field's own swings:
  // FACE 334 -> 335 -> 336 rode 14 -> 17 -> 16 blind-live stretch(es)
  // (the counts hand-priced from the real caches, rescueLedger owns
  // the book - the blind stretch trading seats between the walks)
  const swing = blindLiveTrendRow({ back: { blind: 14 }, prev: { blind: 17 }, cur: { blind: 16 } })
  assert.equal(swing, "the blind-live's own trend (v0.976.56): the blind-live's own swing - 14 -> 17 (+3) -> 16 (-1) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own counts - this word prices the blind-live's own mass, co-existence by seat never by duplication)")
  // the swing's freshest ride byte-exact: FACE 337 -> 338 -> 339 rode
  // 26 -> 25 -> 29 (the stretch easing one walk and returning deeper)
  const swing2 = blindLiveTrendRow({ back: { blind: 26 }, prev: { blind: 25 }, cur: { blind: 29 } })
  assert.equal(swing2, "the blind-live's own trend (v0.976.56): the blind-live's own swing - 26 -> 25 (-1) -> 29 (+4) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own counts - this word prices the blind-live's own mass, co-existence by seat never by duplication)")
  // THE BLIND-LIVE'S OWN SWELL byte-exact, the field's own birth
  // window: FACE 338 -> 339 -> 340 rode 25 -> 29 -> 49 (the blind
  // stretch swelling two walks straight into the face 340 storm)
  const swell = blindLiveTrendRow({ back: { blind: 25 }, prev: { blind: 29 }, cur: { blind: 49 } })
  assert.equal(swell, "the blind-live's own trend (v0.976.56): the blind-live's rise ran two steps deep - 25 -> 29 (+4) -> 49 (+20) - the blind-live's own swell (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own counts - this word prices the blind-live's own mass, co-existence by seat never by duplication)")
  // THE BLIND-LIVE'S OWN FADE - two consecutive falls (the branch the
  // seven priced faces never rode - the law prices it, the bars never
  // invent it)
  const fade = blindLiveTrendRow({ back: { blind: 49 }, prev: { blind: 29 }, cur: { blind: 25 } })
  assert.equal(fade, "the blind-live's own trend (v0.976.56): the blind-live's fall ran two steps deep - 49 -> 29 (-20) -> 25 (-4) - the blind-live's own fade (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own counts - this word prices the blind-live's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the held steps the seven
  // priced faces never rode (every step moved) but the law prices
  assert.equal(blindLiveTrendRow({ back: { blind: 16 }, prev: { blind: 16 }, cur: { blind: 26 } }), null)
  assert.equal(blindLiveTrendRow({ back: { blind: 17 }, prev: { blind: 16 }, cur: { blind: 16 } }), null)
  assert.equal(blindLiveTrendRow({ back: { blind: 0 }, prev: { blind: 0 }, cur: { blind: 0 } }), null)
  assert.equal(blindLiveTrendRow({ back: { blind: 3 }, prev: { blind: 3 }, cur: { blind: 3 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seat's own
  // verdict word (no owns) - co-existence by seat never by
  // duplication; the seat-law tail names the neighbor seats (the mid
  // seat's word, the mid-episode bill) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing, swing2, swell, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(blindLiveTrendConsistent({ back: { blind: 2 }, prev: { blind: 1 }, cur: { blind: 0.5 } }), false)
  assert.equal(blindLiveTrendConsistent({ back: { blind: 2 }, prev: { blind: -1 }, cur: { blind: 0 } }), false)
  assert.equal(blindLiveTrendConsistent({ back: { blind: 2 }, prev: { blind: 1 } }), false)
  assert.equal(blindLiveTrendConsistent({ back: { blind: '2' }, prev: { blind: 1 }, cur: { blind: 0 } }), false)
  assert.equal(blindLiveTrendConsistent(null), false)
  assert.equal(blindLiveTrendConsistent([]), false)
  assert.equal(blindLiveTrendConsistent({ back: { blind: 2 }, prev: { blind: 1 }, cur: { blind: 0 } }), true)
  assert.equal(blindLiveTrendRow({ back: { blind: 2 }, prev: { blind: 1 }, cur: { blind: 0.5 } }), null)
  assert.equal(blindLiveTrendRow({ back: { blind: '2' }, prev: { blind: 1 }, cur: { blind: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // the field's own birth swell FACE 338/339/340 hand-priced from the
  // real caches (rescueLedger owns the blind-live count - the same
  // cells the mid seat's wire holds): 25 -> 29 -> 49 rides the swell
  // byte-exact
  const fieldRow = blindLiveTrendRow({ back: { blind: 25 }, prev: { blind: 29 }, cur: { blind: 49 } })
  assert.ok(fieldRow === swell)
})
