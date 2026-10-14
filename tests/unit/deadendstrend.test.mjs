import { test } from 'node:test'
import assert from 'node:assert/strict'
import { deadEndsTrendRow, deadEndsTrendConsistent } from '../../src/lib/deadendstrend.mjs'

test("the rescue dead ends' own trend (v0.976.50) - the dead ends' own trend, the fence, the word", () => {
  // THE DEAD ENDS' OWN SWING byte-exact, the field's own first swing:
  // FACE 332 -> 333 -> 334 rode 1 -> 0 -> 1 dead end(s) (the counts
  // hand-priced from the real logs, rescueLedger owns the book - the
  // fallen walk draining to a clean face and returning one step later)
  const swing = deadEndsTrendRow({ back: { dead: 1 }, prev: { dead: 0 }, cur: { dead: 1 } })
  assert.equal(swing, "the rescue dead ends' own trend (v0.976.50): the dead ends' own swing - 1 -> 0 (-1) -> 1 (+1) - the rise and the fall traded seats between the walks (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the landings' word prices the delivered ends' own mass, the ends' bill prices the class's own closes - this word prices the dead ends' own mass, co-existence by seat never by duplication)")
  // the swing's second ride byte-exact, the field's own mirror arc:
  // FACE 333 -> 334 -> 335 rode 0 -> 1 -> 0 (the walk returning one
  // step, then draining again)
  const swing2 = deadEndsTrendRow({ back: { dead: 0 }, prev: { dead: 1 }, cur: { dead: 0 } })
  assert.equal(swing2, "the rescue dead ends' own trend (v0.976.50): the dead ends' own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the landings' word prices the delivered ends' own mass, the ends' bill prices the class's own closes - this word prices the dead ends' own mass, co-existence by seat never by duplication)")
  // THE DEAD ENDS' OWN SWELL - two consecutive rises (the branch the
  // seven priced faces never rode - the law prices it, the bars never
  // invent it)
  const swell = deadEndsTrendRow({ back: { dead: 1 }, prev: { dead: 2 }, cur: { dead: 4 } })
  assert.equal(swell, "the rescue dead ends' own trend (v0.976.50): the dead ends' rise ran two steps deep - 1 -> 2 (+1) -> 4 (+2) - the dead ends' own swell (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the landings' word prices the delivered ends' own mass, the ends' bill prices the class's own closes - this word prices the dead ends' own mass, co-existence by seat never by duplication)")
  // THE DEAD ENDS' OWN FADE - two consecutive falls (the branch the
  // seven priced faces never rode - the law prices it, the bars never
  // invent it)
  const fade = deadEndsTrendRow({ back: { dead: 4 }, prev: { dead: 2 }, cur: { dead: 1 } })
  assert.equal(fade, "the rescue dead ends' own trend (v0.976.50): the dead ends' fall ran two steps deep - 4 -> 2 (-2) -> 1 (-1) - the dead ends' own fade (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the landings' word prices the delivered ends' own mass, the ends' bill prices the class's own closes - this word prices the dead ends' own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // steps 2 -> 1 -> 1 (FACE 330/331/332, the second step held),
  // 1 -> 1 -> 0 (FACE 331/332/333, the first step held) and
  // 1 -> 0 -> 0 (FACE 334/335/336, the second step held)
  assert.equal(deadEndsTrendRow({ back: { dead: 2 }, prev: { dead: 1 }, cur: { dead: 1 } }), null)
  assert.equal(deadEndsTrendRow({ back: { dead: 1 }, prev: { dead: 1 }, cur: { dead: 0 } }), null)
  assert.equal(deadEndsTrendRow({ back: { dead: 1 }, prev: { dead: 0 }, cur: { dead: 0 } }), null)
  assert.equal(deadEndsTrendRow({ back: { dead: 0 }, prev: { dead: 0 }, cur: { dead: 0 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the bill's own
  // verdict word (no owns) - co-existence by seat never by
  // duplication; the seat-law tail names the neighbor seats (the
  // arms' word, the release's word, the landings' word, the ends'
  // bill) - the names ride by law, the neighbor VERDICTS never ride
  for (const row of [swing, swing2, swell, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(deadEndsTrendConsistent({ back: { dead: 2 }, prev: { dead: 1 }, cur: { dead: 0.5 } }), false)
  assert.equal(deadEndsTrendConsistent({ back: { dead: 2 }, prev: { dead: -1 }, cur: { dead: 0 } }), false)
  assert.equal(deadEndsTrendConsistent({ back: { dead: 2 }, prev: { dead: 1 } }), false)
  assert.equal(deadEndsTrendConsistent({ back: { dead: '2' }, prev: { dead: 1 }, cur: { dead: 0 } }), false)
  assert.equal(deadEndsTrendConsistent(null), false)
  assert.equal(deadEndsTrendConsistent([]), false)
  assert.equal(deadEndsTrendConsistent({ back: { dead: 2 }, prev: { dead: 1 }, cur: { dead: 0 } }), true)
  assert.equal(deadEndsTrendRow({ back: { dead: 2 }, prev: { dead: 1 }, cur: { dead: 0.5 } }), null)
  assert.equal(deadEndsTrendRow({ back: { dead: '2' }, prev: { dead: 1 }, cur: { dead: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // the field's own first swing FACE 332/333/334 hand-priced from the
  // real logs (rescueLedger owns the dead count - the same cells the
  // ends' bill's, the arms', the release's and the landings' wires
  // hold): 1 -> 0 -> 1 rides the swing byte-exact
  const fieldRow = deadEndsTrendRow({ back: { dead: 1 }, prev: { dead: 0 }, cur: { dead: 1 } })
  assert.ok(fieldRow === swing)
})
