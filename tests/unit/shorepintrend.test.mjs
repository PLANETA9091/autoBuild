import { test } from 'node:test'
import assert from 'node:assert/strict'
import { shorePinTrendRow, shorePinTrendConsistent } from '../../src/lib/shorepintrend.mjs'

test("the shore-pin's own trend (v0.976.59) - the shore-pinned walks' own trend, the fence, the word", () => {
  // THE SHORE-PIN'S OWN SWING byte-exact, the field's own rides - the
  // pin traded seats every walk the seven priced faces rode (the
  // counts hand-priced from the real caches, rescueLedger owns the
  // book): FACE 337 -> 338 -> 339 rode 27 -> 15 -> 22 (the pin
  // storm's own 27 easing and returning)
  const swing1 = shorePinTrendRow({ back: { pin: 27 }, prev: { pin: 15 }, cur: { pin: 22 } })
  assert.equal(swing1, "the shore-pin's own trend (v0.976.59): the shore-pin's own swing - 27 -> 15 (-12) -> 22 (+7) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the riders row prices the face's own crowd - this word prices the shore-pin's own mass, co-existence by seat never by duplication)")
  // the swing's middle rides byte-exact: 15 -> 22 -> 18 and 22 -> 18
  // -> 42 (the face 341 pin storm's own birth run)
  const swing2 = shorePinTrendRow({ back: { pin: 15 }, prev: { pin: 22 }, cur: { pin: 18 } })
  assert.equal(swing2, "the shore-pin's own trend (v0.976.59): the shore-pin's own swing - 15 -> 22 (+7) -> 18 (-4) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the riders row prices the face's own crowd - this word prices the shore-pin's own mass, co-existence by seat never by duplication)")
  const swing3 = shorePinTrendRow({ back: { pin: 22 }, prev: { pin: 18 }, cur: { pin: 42 } })
  assert.equal(swing3, "the shore-pin's own trend (v0.976.59): the shore-pin's own swing - 22 -> 18 (-4) -> 42 (+24) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the riders row prices the face's own crowd - this word prices the shore-pin's own mass, co-existence by seat never by duplication)")
  // the field's own freshest ride byte-exact: FACE 341 -> 342 -> 343
  // rode 42 -> 7 -> 25 (the storm's 42 draining to the quiet face's 7
  // and refilling one walk later)
  const swing4 = shorePinTrendRow({ back: { pin: 42 }, prev: { pin: 7 }, cur: { pin: 25 } })
  assert.equal(swing4, "the shore-pin's own trend (v0.976.59): the shore-pin's own swing - 42 -> 7 (-35) -> 25 (+18) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the riders row prices the face's own crowd - this word prices the shore-pin's own mass, co-existence by seat never by duplication)")
  // THE SHORE-PIN'S OWN SWELL - two consecutive rises (the branch the
  // seven priced faces never rode - the law prices it, the bars never
  // invent it)
  const swell = shorePinTrendRow({ back: { pin: 7 }, prev: { pin: 25 }, cur: { pin: 44 } })
  assert.equal(swell, "the shore-pin's own trend (v0.976.59): the shore-pin's rise ran two steps deep - 7 -> 25 (+18) -> 44 (+19) - the shore-pin's own swell (the mid seat's word prices the face's own owner, the riders row prices the face's own crowd - this word prices the shore-pin's own mass, co-existence by seat never by duplication)")
  // THE SHORE-PIN'S OWN FADE - two consecutive falls (the branch the
  // seven priced faces never rode)
  const fade = shorePinTrendRow({ back: { pin: 42 }, prev: { pin: 25 }, cur: { pin: 9 } })
  assert.equal(fade, "the shore-pin's own trend (v0.976.59): the shore-pin's fall ran two steps deep - 42 -> 25 (-17) -> 9 (-16) - the shore-pin's own fade (the mid seat's word prices the face's own owner, the riders row prices the face's own crowd - this word prices the shore-pin's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the held steps the seven
  // priced faces never rode (every step moved) but the law prices
  assert.equal(shorePinTrendRow({ back: { pin: 18 }, prev: { pin: 18 }, cur: { pin: 42 } }), null)
  assert.equal(shorePinTrendRow({ back: { pin: 42 }, prev: { pin: 7 }, cur: { pin: 7 } }), null)
  assert.equal(shorePinTrendRow({ back: { pin: 0 }, prev: { pin: 0 }, cur: { pin: 0 } }), null)
  assert.equal(shorePinTrendRow({ back: { pin: 3 }, prev: { pin: 3 }, cur: { pin: 3 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seat's own
  // verdict word (no owns) - co-existence by seat never by
  // duplication; the seat-law tail names the neighbor seats (the mid
  // seat's word, the riders row) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, swing4, swell, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(shorePinTrendConsistent({ back: { pin: 2 }, prev: { pin: 1 }, cur: { pin: 0.5 } }), false)
  assert.equal(shorePinTrendConsistent({ back: { pin: 2 }, prev: { pin: -1 }, cur: { pin: 0 } }), false)
  assert.equal(shorePinTrendConsistent({ back: { pin: 2 }, prev: { pin: 1 } }), false)
  assert.equal(shorePinTrendConsistent({ back: { pin: '2' }, prev: { pin: 1 }, cur: { pin: 0 } }), false)
  assert.equal(shorePinTrendConsistent(null), false)
  assert.equal(shorePinTrendConsistent([]), false)
  assert.equal(shorePinTrendConsistent({ back: { pin: 2 }, prev: { pin: 1 }, cur: { pin: 0 } }), true)
  assert.equal(shorePinTrendRow({ back: { pin: 2 }, prev: { pin: 1 }, cur: { pin: 0.5 } }), null)
  assert.equal(shorePinTrendRow({ back: { pin: '2' }, prev: { pin: 1 }, cur: { pin: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // the field's own freshest swing FACE 341/342/343 hand-priced from
  // the real caches (rescueLedger owns the shore-pin count - the same
  // cells the mid seat's wire and the riders row hold): 42 -> 7 -> 25
  // rides the swing byte-exact
  const fieldRow = shorePinTrendRow({ back: { pin: 42 }, prev: { pin: 7 }, cur: { pin: 25 } })
  assert.ok(fieldRow === swing4)
})
