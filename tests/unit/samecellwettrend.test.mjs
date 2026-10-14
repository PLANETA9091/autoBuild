import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sameCellWetTrendRow, sameCellWetTrendConsistent } from '../../src/lib/samecellwettrend.mjs'

test("the same-cell wet's own trend (v0.976.70) - the repeat wet page standdowns' own trend, the fence, the word", () => {
  // THE SAME-CELL WET'S OWN SWELL byte-exact - the law's own price,
  // the branch the sixteen priced faces never rode (the field held
  // its silence 0 -> 0 -> 0 the whole span - the zombie toll's own
  // first-fold precedent the word's own birthright; the law prices
  // the branch, the bars never invent the arrow)
  const swell1 = sameCellWetTrendRow({ back: { cell: 2 }, prev: { cell: 5 }, cur: { cell: 9 } })
  assert.equal(swell1, "the same-cell wet's own trend (v0.976.70): the same-cell wet's rise ran two steps deep - 2 -> 5 (+3) -> 9 (+4) - the same-cell wet's own swell (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the same-cell wet's own mass, co-existence by seat never by duplication)")
  // the swell's second lawful ride byte-exact: two rises deeper
  const swell2 = sameCellWetTrendRow({ back: { cell: 5 }, prev: { cell: 9 }, cur: { cell: 14 } })
  assert.equal(swell2, "the same-cell wet's own trend (v0.976.70): the same-cell wet's rise ran two steps deep - 5 -> 9 (+4) -> 14 (+5) - the same-cell wet's own swell (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the same-cell wet's own mass, co-existence by seat never by duplication)")
  // THE SAME-CELL WET'S OWN SWING byte-exact - the rise and the fall
  // trading seats (the branch the sixteen priced faces never rode -
  // the law prices it, the bars never invent it)
  const swing = sameCellWetTrendRow({ back: { cell: 9 }, prev: { cell: 14 }, cur: { cell: 4 } })
  assert.equal(swing, "the same-cell wet's own trend (v0.976.70): the same-cell wet's own swing - 9 -> 14 (+5) -> 4 (-10) - the rise and the fall traded seats between the walks (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the same-cell wet's own mass, co-existence by seat never by duplication)")
  // THE SAME-CELL WET'S OWN FADE - two consecutive falls (the branch
  // the sixteen priced faces never rode - the law prices it, the
  // bars never invent it)
  const fade = sameCellWetTrendRow({ back: { cell: 14 }, prev: { cell: 4 }, cur: { cell: 1 } })
  assert.equal(fade, "the same-cell wet's own trend (v0.976.70): the same-cell wet's fall ran two steps deep - 14 -> 4 (-10) -> 1 (-3) - the same-cell wet's own fade (the mid seat's word prices the face's own owner, the mid-episode bill prices the face's own five counters - this word prices the same-cell wet's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES - the FIELD'S OWN READ: the sixteen priced
  // faces (334 through 349) every face rode 0, every chain the
  // honest silence 0 -> 0 -> 0 (the word born silent - the zombie
  // toll's own first-fold precedent held; the family's own held law
  // - the bars never invent)
  assert.equal(sameCellWetTrendRow({ back: { cell: 0 }, prev: { cell: 0 }, cur: { cell: 0 } }), null)
  assert.equal(sameCellWetTrendRow({ back: { cell: 2 }, prev: { cell: 2 }, cur: { cell: 5 } }), null)
  assert.equal(sameCellWetTrendRow({ back: { cell: 9 }, prev: { cell: 4 }, cur: { cell: 4 } }), null)
  assert.equal(sameCellWetTrendRow({ back: { cell: 3 }, prev: { cell: 3 }, cur: { cell: 3 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seat's own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the census
  // label's own token never rides the row (the name law: the log's
  // own seat phrase names the word, the bill prints the census name
  // beside the row) - the seat-law tail names the neighbor seats
  // (the mid seat's word, the mid-episode bill) - the names ride by
  // law, the neighbor VERDICTS never ride
  for (const row of [swell1, swell2, swing, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(sameCellWetTrendConsistent({ back: { cell: 2 }, prev: { cell: 1 }, cur: { cell: 0.5 } }), false)
  assert.equal(sameCellWetTrendConsistent({ back: { cell: 2 }, prev: { cell: -1 }, cur: { cell: 0 } }), false)
  assert.equal(sameCellWetTrendConsistent({ back: { cell: 2 }, prev: { cell: 1 } }), false)
  assert.equal(sameCellWetTrendConsistent({ back: { cell: '2' }, prev: { cell: 1 }, cur: { cell: 0 } }), false)
  assert.equal(sameCellWetTrendConsistent(null), false)
  assert.equal(sameCellWetTrendConsistent([]), false)
  assert.equal(sameCellWetTrendConsistent({ back: { cell: 2 }, prev: { cell: 1 }, cur: { cell: 0 } }), true)
  assert.equal(sameCellWetTrendRow({ back: { cell: 2 }, prev: { cell: 1 }, cur: { cell: 0.5 } }), null)
  assert.equal(sameCellWetTrendRow({ back: { cell: '2' }, prev: { cell: 1 }, cur: { cell: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // the field's own silence - face 349's chain (347 -> 348 -> 349)
  // hand-priced from the real caches (rescueLedger owns the repeat
  // wet page standdown count - the same cells the mid seat's wire
  // and the bill's bytes hold): 0 -> 0 -> 0 rides the honest silence
  const fieldRow = sameCellWetTrendRow({ back: { cell: 0 }, prev: { cell: 0 }, cur: { cell: 0 } })
  assert.equal(fieldRow, null)
})
