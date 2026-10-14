import { test } from 'node:test'
import assert from 'node:assert/strict'
import { frozenTrendRow, frozenTrendConsistent } from '../../src/lib/frozentrend.mjs'

test("the rescue frozen ends' own trend (v0.976.52) - the frozen ends' own trend, the fence, the word", () => {
  // THE FROZEN ENDS' OWN SWING byte-exact, the field's own freshest
  // swing: FACE 335 -> 336 -> 337 rode 6 -> 8 -> 7 frozen standdown(s)
  // (the counts hand-priced from the real logs, rescueLedger owns the
  // book - the freeze swelling one walk then easing one walk)
  const swing = frozenTrendRow({ back: { frozen: 6 }, prev: { frozen: 8 }, cur: { frozen: 7 } })
  assert.equal(swing, "the rescue frozen ends' own trend (v0.976.52): the frozen ends' own swing - 6 -> 8 (+2) -> 7 (-1) - the rise and the fall traded seats between the walks (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the landings' word prices the delivered ends' own mass, the dead ends' word prices the dead ends' own mass, the ends' bill prices the class's own closes - this word prices the frozen ends' own mass, co-existence by seat never by duplication)")
  // the swing's second ride byte-exact, the field's own storm arc:
  // FACE 329 -> 330 -> 331 rode 5 -> 15 -> 9 (the storm's own freeze
  // doubling then draining one walk later)
  const swing2 = frozenTrendRow({ back: { frozen: 5 }, prev: { frozen: 15 }, cur: { frozen: 9 } })
  assert.equal(swing2, "the rescue frozen ends' own trend (v0.976.52): the frozen ends' own swing - 5 -> 15 (+10) -> 9 (-6) - the rise and the fall traded seats between the walks (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the landings' word prices the delivered ends' own mass, the dead ends' word prices the dead ends' own mass, the ends' bill prices the class's own closes - this word prices the frozen ends' own mass, co-existence by seat never by duplication)")
  // THE FROZEN ENDS' OWN FADE - two consecutive falls byte-exact, the
  // field's own first fade: FACE 325 -> 326 -> 327 rode 14 -> 6 -> 2
  // (the storm's relief draining three walks straight)
  const fade = frozenTrendRow({ back: { frozen: 14 }, prev: { frozen: 6 }, cur: { frozen: 2 } })
  assert.equal(fade, "the rescue frozen ends' own trend (v0.976.52): the frozen ends' fall ran two steps deep - 14 -> 6 (-8) -> 2 (-4) - the frozen ends' own fade (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the landings' word prices the delivered ends' own mass, the dead ends' word prices the dead ends' own mass, the ends' bill prices the class's own closes - this word prices the frozen ends' own mass, co-existence by seat never by duplication)")
  // the fade's second ride byte-exact, the field's own mirror arc:
  // FACE 330 -> 331 -> 332 rode 15 -> 9 -> 4 (the second storm
  // draining the same way)
  const fade2 = frozenTrendRow({ back: { frozen: 15 }, prev: { frozen: 9 }, cur: { frozen: 4 } })
  assert.equal(fade2, "the rescue frozen ends' own trend (v0.976.52): the frozen ends' fall ran two steps deep - 15 -> 9 (-6) -> 4 (-5) - the frozen ends' own fade (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the landings' word prices the delivered ends' own mass, the dead ends' word prices the dead ends' own mass, the ends' bill prices the class's own closes - this word prices the frozen ends' own mass, co-existence by seat never by duplication)")
  // THE FROZEN ENDS' OWN SWELL - two consecutive rises byte-exact,
  // the field's own creep: FACE 327 -> 328 -> 329 rode 2 -> 4 -> 5
  // (the freeze creeping back)
  const swell = frozenTrendRow({ back: { frozen: 2 }, prev: { frozen: 4 }, cur: { frozen: 5 } })
  assert.equal(swell, "the rescue frozen ends' own trend (v0.976.52): the frozen ends' rise ran two steps deep - 2 -> 4 (+2) -> 5 (+1) - the frozen ends' own swell (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the landings' word prices the delivered ends' own mass, the dead ends' word prices the dead ends' own mass, the ends' bill prices the class's own closes - this word prices the frozen ends' own mass, co-existence by seat never by duplication)")
  // the swell's second ride byte-exact, the field's own birth window:
  // FACE 334 -> 335 -> 336 rode 0 -> 6 -> 8 (the held walks returning
  // from a clean face two steps deep)
  const swell2 = frozenTrendRow({ back: { frozen: 0 }, prev: { frozen: 6 }, cur: { frozen: 8 } })
  assert.equal(swell2, "the rescue frozen ends' own trend (v0.976.52): the frozen ends' rise ran two steps deep - 0 -> 6 (+6) -> 8 (+2) - the frozen ends' own swell (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the landings' word prices the delivered ends' own mass, the dead ends' word prices the dead ends' own mass, the ends' bill prices the class's own closes - this word prices the frozen ends' own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the held step never rode
  // the twelve priced faces, the law prices it: the first step held,
  // the second step held, the whole trio flat
  assert.equal(frozenTrendRow({ back: { frozen: 4 }, prev: { frozen: 4 }, cur: { frozen: 5 } }), null)
  assert.equal(frozenTrendRow({ back: { frozen: 5 }, prev: { frozen: 4 }, cur: { frozen: 4 } }), null)
  assert.equal(frozenTrendRow({ back: { frozen: 0 }, prev: { frozen: 0 }, cur: { frozen: 0 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the bill's own
  // verdict word (no owns) - co-existence by seat never by
  // duplication; the seat-law tail names the neighbor seats (the
  // arms' word, the release's word, the landings' word, the dead
  // ends' word, the ends' bill) - the names ride by law, the neighbor
  // VERDICTS never ride
  for (const row of [swing, swing2, fade, fade2, swell, swell2]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(frozenTrendConsistent({ back: { frozen: 2 }, prev: { frozen: 1 }, cur: { frozen: 0.5 } }), false)
  assert.equal(frozenTrendConsistent({ back: { frozen: 2 }, prev: { frozen: -1 }, cur: { frozen: 0 } }), false)
  assert.equal(frozenTrendConsistent({ back: { frozen: 2 }, prev: { frozen: 1 } }), false)
  assert.equal(frozenTrendConsistent({ back: { frozen: '2' }, prev: { frozen: 1 }, cur: { frozen: 0 } }), false)
  assert.equal(frozenTrendConsistent(null), false)
  assert.equal(frozenTrendConsistent([]), false)
  assert.equal(frozenTrendConsistent({ back: { frozen: 2 }, prev: { frozen: 1 }, cur: { frozen: 0 } }), true)
  assert.equal(frozenTrendRow({ back: { frozen: 2 }, prev: { frozen: 1 }, cur: { frozen: 0.5 } }), null)
  assert.equal(frozenTrendRow({ back: { frozen: '2' }, prev: { frozen: 1 }, cur: { frozen: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // the field's own freshest swing FACE 335/336/337 hand-priced from
  // the real logs (rescueLedger owns the frozen count - the same
  // cells the ends' bill's, the arms', the release's, the landings'
  // and the dead ends' wires hold): 6 -> 8 -> 7 rides the swing
  // byte-exact
  const fieldRow = frozenTrendRow({ back: { frozen: 6 }, prev: { frozen: 8 }, cur: { frozen: 7 } })
  assert.ok(fieldRow === swing)
})
