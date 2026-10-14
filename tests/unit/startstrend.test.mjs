import { test } from 'node:test'
import assert from 'node:assert/strict'
import { startsTrendRow, startsTrendConsistent } from '../../src/lib/startstrend.mjs'

test("the rescue starts' own trend (v0.976.45) - the starts' own mass, the fence, the word", () => {
  // THE ARMS' OWN SWELL byte-exact, the field's own arithmetic: FACE
  // 329 -> 330 -> 331 rode 29 -> 42 -> 82 start(s) (the counts
  // hand-priced from the real logs, rescueLedger owns the book)
  const swell = startsTrendRow({ back: { starts: 29 }, prev: { starts: 42 }, cur: { starts: 82 } })
  assert.equal(swell, "the rescue starts' own trend (v0.976.45): the arms' rise ran two steps deep - 29 -> 42 (+13) -> 82 (+40) - the arms' own swell (the scar's word prices the book's own scar, the clock prices the face's own thirds - this word prices the starts' own mass, co-existence by seat never by duplication)")
  // THE STARTS' OWN SWING byte-exact, the field's own ride FACE 328 ->
  // 329 -> 330 rode 38 -> 29 -> 42 (the rise traded seats with the
  // fall)
  const swing = startsTrendRow({ back: { starts: 38 }, prev: { starts: 29 }, cur: { starts: 42 } })
  assert.equal(swing, "the rescue starts' own trend (v0.976.45): the starts' own swing - 38 -> 29 (-9) -> 42 (+13) - the rise and the fall traded seats between the walks (the scar's word prices the book's own scar, the clock prices the face's own thirds - this word prices the starts' own mass, co-existence by seat never by duplication)")
  // the reverse swing rides the same word either way (the
  // alternation is one shape): FACE 325 -> 326 -> 327 rode 44 -> 63 -> 34
  const swing2 = startsTrendRow({ back: { starts: 44 }, prev: { starts: 63 }, cur: { starts: 34 } })
  assert.ok(swing2.includes('the starts\' own swing - 44 -> 63 (+19) -> 34 (-29)'))
  // THE ARMS' OWN FADE - two consecutive falls (the branch the seven
  // priced faces never rode - the law prices it, the bars never
  // invent it)
  const fade = startsTrendRow({ back: { starts: 63 }, prev: { starts: 44 }, cur: { starts: 29 } })
  assert.equal(fade, "the rescue starts' own trend (v0.976.45): the arms' fall ran two steps deep - 63 -> 44 (-19) -> 29 (-15) - the arms' own fade (the scar's word prices the book's own scar, the clock prices the face's own thirds - this word prices the starts' own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the held step never rode
  // the seven priced faces, the law prices the silence either way
  assert.equal(startsTrendRow({ back: { starts: 42 }, prev: { starts: 42 }, cur: { starts: 82 } }), null)
  assert.equal(startsTrendRow({ back: { starts: 42 }, prev: { starts: 82 }, cur: { starts: 82 } }), null)
  // the byte-pin: the trend row never speaks the scar's own verdict
  // words (no return, no repeat, no stay) - co-existence by seat
  // never by duplication; the seat-law tail names the neighbor seats
  // (the scar's word, the clock's thirds) - the names ride by law,
  // the neighbor VERDICTS never ride
  for (const row of [swell, swing, swing2, fade]) {
    assert.ok(!/return|repeat|stay/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(startsTrendConsistent({ back: { starts: 29 }, prev: { starts: 42 }, cur: { starts: 82.5 } }), false)
  assert.equal(startsTrendConsistent({ back: { starts: 29 }, prev: { starts: -1 }, cur: { starts: 82 } }), false)
  assert.equal(startsTrendConsistent({ back: { starts: 29 }, prev: { starts: 42 } }), false)
  assert.equal(startsTrendConsistent({ back: { starts: '29' }, prev: { starts: 42 }, cur: { starts: 82 } }), false)
  assert.equal(startsTrendConsistent(null), false)
  assert.equal(startsTrendConsistent([]), false)
  assert.equal(startsTrendConsistent({ back: { starts: 29 }, prev: { starts: 42 }, cur: { starts: 82 } }), true)
  assert.equal(startsTrendRow({ back: { starts: 29 }, prev: { starts: 42 }, cur: { starts: 82.5 } }), null)
  assert.equal(startsTrendRow({ back: { starts: '29' }, prev: { starts: 42 }, cur: { starts: 82 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // the field's own trio FACE 329/330/331 hand-priced from the real
  // logs (rescueLedger owns the starts - the same cells the scar
  // trend's wire holds): 29 -> 42 -> 82 rides the swell byte-exact
  const fieldRow = startsTrendRow({ back: { starts: 29 }, prev: { starts: 42 }, cur: { starts: 82 } })
  assert.ok(fieldRow === swell)
})
