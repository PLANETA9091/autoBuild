import { test } from 'node:test'
import assert from 'node:assert/strict'
import { timeoutTrendRow, timeoutTrendConsistent } from '../../src/lib/timeouttrend.mjs'

test("the rescue timeout's own trend (v0.976.69) - the ends family's unnamed seat, the fence, the word", () => {
  // THE TIMEOUT'S OWN SWING byte-exact, the field's own ride:
  // FACE 343 -> 344 -> 345 rode 0 -> 3 -> 1 timeout end(s) (the
  // counts hand-priced from the real caches, rescueLedger's own
  // totals.timeout - the storm's own budget burn arriving and
  // draining between the walks)
  const swing = timeoutTrendRow({ back: { timeout: 0 }, prev: { timeout: 3 }, cur: { timeout: 1 } })
  assert.equal(swing, "the rescue timeout's own trend (v0.976.69): the timeout's own swing - 0 -> 3 (+3) -> 1 (-2) - the rise and the fall traded seats between the walks (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the landings' word prices the delivered ends' own mass, the dead ends' word prices the fallen walks' own mass, the frozen ends' word prices the standdowns' own mass - this word prices the still-wet expiries' own mass, co-existence by seat never by duplication)")
  // THE TIMEOUT'S OWN FADE byte-exact, the branch's own birth:
  // FACE 344 -> 345 -> 346 rode 3 -> 1 -> 0 (the storm's burn
  // draining two walks straight - the first fade the unnamed
  // counters' family rode)
  const fade = timeoutTrendRow({ back: { timeout: 3 }, prev: { timeout: 1 }, cur: { timeout: 0 } })
  assert.equal(fade, "the rescue timeout's own trend (v0.976.69): the timeout's fall ran two steps deep - 3 -> 1 (-2) -> 0 (-1) - the timeout's own fade (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the landings' word prices the delivered ends' own mass, the dead ends' word prices the fallen walks' own mass, the frozen ends' word prices the standdowns' own mass - this word prices the still-wet expiries' own mass, co-existence by seat never by duplication)")
  // THE TIMEOUT'S OWN SWING, the field's second ride: FACE 338 ->
  // 339 -> 340 rode 0 -> 1 -> 0 (the budget's own arrival and
  // release one walk apart)
  const swing2 = timeoutTrendRow({ back: { timeout: 0 }, prev: { timeout: 1 }, cur: { timeout: 0 } })
  assert.equal(swing2, "the rescue timeout's own trend (v0.976.69): the timeout's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the landings' word prices the delivered ends' own mass, the dead ends' word prices the fallen walks' own mass, the frozen ends' word prices the standdowns' own mass - this word prices the still-wet expiries' own mass, co-existence by seat never by duplication)")
  // THE TIMEOUT'S OWN SWELL: the law prices it, the field never rode
  // it in the priced window (the ends family's own precedent)
  const swell = timeoutTrendRow({ back: { timeout: 1 }, prev: { timeout: 2 }, cur: { timeout: 4 } })
  assert.equal(swell, "the rescue timeout's own trend (v0.976.69): the timeout's rise ran two steps deep - 1 -> 2 (+1) -> 4 (+2) - the timeout's own swell (the arms' word prices the begins' own mass, the release's word prices the exits' own mass, the landings' word prices the delivered ends' own mass, the dead ends' word prices the fallen walks' own mass, the frozen ends' word prices the standdowns' own mass - this word prices the still-wet expiries' own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // rides: FACE 339 -> 340 -> 341 rode 1 -> 0 -> 0 (the burn's own
  // exit riding unnamed behind a held second step), the clean trios
  // FACE 341/342/343 chains rode 0 -> 0 -> 0, FACE 342 -> 343 -> 344
  // rode 0 -> 0 -> 3 (the storm's own arrival riding unnamed behind
  // a held first step), FACE 346 -> 347 -> 348 rode 0 -> 0 -> 0
  assert.equal(timeoutTrendRow({ back: { timeout: 1 }, prev: { timeout: 0 }, cur: { timeout: 0 } }), null)
  assert.equal(timeoutTrendRow({ back: { timeout: 0 }, prev: { timeout: 0 }, cur: { timeout: 0 } }), null)
  assert.equal(timeoutTrendRow({ back: { timeout: 0 }, prev: { timeout: 0 }, cur: { timeout: 3 } }), null)
  assert.equal(timeoutTrendRow({ back: { timeout: 2 }, prev: { timeout: 2 }, cur: { timeout: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the bill's own
  // verdict word (no owns) - co-existence by seat never by
  // duplication; the seat-law tail names the neighbor seats (the
  // arms' word, the release's word, the landings' word, the dead
  // ends' word, the frozen ends' word) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swell, fade, swing, swing2]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(timeoutTrendConsistent({ back: { timeout: 1 }, prev: { timeout: 3 }, cur: { timeout: 0.5 } }), false)
  assert.equal(timeoutTrendConsistent({ back: { timeout: 1 }, prev: { timeout: -1 }, cur: { timeout: 0 } }), false)
  assert.equal(timeoutTrendConsistent({ back: { timeout: 1 }, prev: { timeout: 3 } }), false)
  assert.equal(timeoutTrendConsistent({ back: { timeout: '1' }, prev: { timeout: 3 }, cur: { timeout: 0 } }), false)
  assert.equal(timeoutTrendConsistent(null), false)
  assert.equal(timeoutTrendConsistent([]), false)
  assert.equal(timeoutTrendConsistent({ back: { timeout: 1 }, prev: { timeout: 3 }, cur: { timeout: 0 } }), true)
  assert.equal(timeoutTrendRow({ back: { timeout: 1 }, prev: { timeout: 3 }, cur: { timeout: 0.5 } }), null)
  assert.equal(timeoutTrendRow({ back: { timeout: '1' }, prev: { timeout: 3 }, cur: { timeout: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // the field's own fade FACE 344/345/346 hand-priced from the real
  // caches (rescueLedger owns the timeout count - the same cells the
  // ends' bill's, the arms', the release's, the landings', the dead
  // ends' and the frozen ends' wires hold): 3 -> 1 -> 0 rides the
  // fade byte-exact
  const fieldRow = timeoutTrendRow({ back: { timeout: 3 }, prev: { timeout: 1 }, cur: { timeout: 0 } })
  assert.ok(fieldRow === fade)
})
