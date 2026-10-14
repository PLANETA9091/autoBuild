import { test } from 'node:test'
import assert from 'node:assert/strict'
import { skeletonTollTrendRow, skeletonTollTrendConsistent } from '../../src/lib/skeletontolltrend.mjs'

test("the skeleton toll's own trend (v0.976.66) - the mob book's second class-toll word, the fence, the word", () => {
  // THE SKELETON TOLL'S OWN SWING byte-exact, the field's own three
  // rides: FACE 341 -> 342 -> 343 rode 0 -> 5 -> 0 (the record
  // trading both seats back), FACE 342 -> 343 -> 344 rode 5 -> 0 -> 1
  // (the crash then the single arrow), FACE 343 -> 344 -> 345 rode
  // 0 -> 1 -> 0 (the counts hand-priced from the real caches,
  // deathKindCensus's own byAttacker.Skeleton - the arrows trading
  // seats between the walks)
  const swing1 = skeletonTollTrendRow({ back: { skeleton: 0 }, prev: { skeleton: 5 }, cur: { skeleton: 0 } })
  assert.equal(swing1, "the skeleton toll's own trend (v0.976.66): the skeleton toll's own swing - 0 -> 5 (+5) -> 0 (-5) - the rise and the fall traded seats between the walks (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration - this word prices the skeleton toll's own mass, co-existence by seat never by duplication)")
  const swing2 = skeletonTollTrendRow({ back: { skeleton: 5 }, prev: { skeleton: 0 }, cur: { skeleton: 1 } })
  assert.equal(swing2, "the skeleton toll's own trend (v0.976.66): the skeleton toll's own swing - 5 -> 0 (-5) -> 1 (+1) - the rise and the fall traded seats between the walks (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration - this word prices the skeleton toll's own mass, co-existence by seat never by duplication)")
  const swing3 = skeletonTollTrendRow({ back: { skeleton: 0 }, prev: { skeleton: 1 }, cur: { skeleton: 0 } })
  assert.equal(swing3, "the skeleton toll's own trend (v0.976.66): the skeleton toll's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration - this word prices the skeleton toll's own mass, co-existence by seat never by duplication)")
  // THE SKELETON TOLL'S OWN SWELL and FADE: the law prices them, the
  // field never rode them in the priced window (the arrows come in
  // trades, never in runs - the zombie toll's own fade precedent)
  const swell = skeletonTollTrendRow({ back: { skeleton: 1 }, prev: { skeleton: 3 }, cur: { skeleton: 4 } })
  assert.equal(swell, "the skeleton toll's own trend (v0.976.66): the skeleton toll's rise ran two steps deep - 1 -> 3 (+2) -> 4 (+1) - the skeleton toll's own swell (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration - this word prices the skeleton toll's own mass, co-existence by seat never by duplication)")
  const fade = skeletonTollTrendRow({ back: { skeleton: 4 }, prev: { skeleton: 3 }, cur: { skeleton: 1 } })
  assert.equal(fade, "the skeleton toll's own trend (v0.976.66): the skeleton toll's fall ran two steps deep - 4 -> 3 (-1) -> 1 (-2) - the skeleton toll's own fade (the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration - this word prices the skeleton toll's own mass, co-existence by seat never by duplication)")
  // THE HONEST SILENCES: the held step prices no trend (the family's
  // own held law - the bars never invent) - the field's own held
  // rides: FACE 340 -> 341 -> 342 rode 0 -> 0 -> 5 (the record's own
  // arrival riding unnamed behind a held first step), FACE 344 ->
  // 345 -> 346 rode 1 -> 0 -> 0 (the storm face's own held exit)
  assert.equal(skeletonTollTrendRow({ back: { skeleton: 0 }, prev: { skeleton: 0 }, cur: { skeleton: 5 } }), null)
  assert.equal(skeletonTollTrendRow({ back: { skeleton: 1 }, prev: { skeleton: 0 }, cur: { skeleton: 0 } }), null)
  assert.equal(skeletonTollTrendRow({ back: { skeleton: 0 }, prev: { skeleton: 0 }, cur: { skeleton: 0 } }), null)
  assert.equal(skeletonTollTrendRow({ back: { skeleton: 2 }, prev: { skeleton: 2 }, cur: { skeleton: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seat's own
  // verdict words (no owns, no dynasty, no turn) - co-existence by
  // seat never by duplication; the seat-law tail names the neighbor
  // seats (the attacker seat's word, the riders' word) - the names
  // ride by law, the neighbor VERDICTS never ride
  for (const row of [swell, fade, swing1, swing2, swing3]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(skeletonTollTrendConsistent({ back: { skeleton: 2 }, prev: { skeleton: 1 }, cur: { skeleton: 0.5 } }), false)
  assert.equal(skeletonTollTrendConsistent({ back: { skeleton: 2 }, prev: { skeleton: -1 }, cur: { skeleton: 0 } }), false)
  assert.equal(skeletonTollTrendConsistent({ back: { skeleton: 2 }, prev: { skeleton: 1 } }), false)
  assert.equal(skeletonTollTrendConsistent({ back: { skeleton: '2' }, prev: { skeleton: 1 }, cur: { skeleton: 0 } }), false)
  assert.equal(skeletonTollTrendConsistent(null), false)
  assert.equal(skeletonTollTrendConsistent([]), false)
  assert.equal(skeletonTollTrendConsistent({ back: { skeleton: 2 }, prev: { skeleton: 1 }, cur: { skeleton: 0 } }), true)
  assert.equal(skeletonTollTrendRow({ back: { skeleton: 2 }, prev: { skeleton: 1 }, cur: { skeleton: 0.5 } }), null)
  assert.equal(skeletonTollTrendRow({ back: { skeleton: '2' }, prev: { skeleton: 1 }, cur: { skeleton: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own swing FACE 341/342/343 hand-priced from the real
  // caches (deathKindCensus owns the buckets - the same cells the
  // attacker seat's, the riders' and the zombie toll's wires hold):
  // 0 -> 5 -> 0 rides the swing byte-exact
  const fieldRow = skeletonTollTrendRow({ back: { skeleton: 0 }, prev: { skeleton: 5 }, cur: { skeleton: 0 } })
  assert.ok(fieldRow === swing1)
})
