import { test } from 'node:test'
import assert from 'node:assert/strict'
import { houndWaterContextTrendRow, houndWaterContextTrendConsistent } from '../../src/lib/houndwatercontext.mjs'

test("the water context's own trend (v0.976.78) - the hound census's water book's trend seat, the fence, the word", () => {
  // THE WATER CONTEXT'S OWN SWELL byte-exact - THE FIELD'S OWN BIRTH
  // RIDE: the FACE 354 chain the census priced by hand (352 rode 0,
  // 353 rode 1, 354 rode 4) - the water's own storm built two steps
  // deep, the word greeted with an arrow the walk it arrived
  const swell1 = houndWaterContextTrendRow({ back: { contexts: 0 }, prev: { contexts: 1 }, cur: { contexts: 4 } })
  assert.equal(swell1, "the water context's own trend (v0.976.78): the water context's rise ran two steps deep - 0 -> 1 (+1) -> 4 (+3) - the water context's own swell (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side - the kind's word prices the server's own verdict, this word prices the water's own contexts the hound's counts exclude, co-existence by seat never by duplication)")
  // the swell's second lawful ride byte-exact: a deeper build
  const swell2 = houndWaterContextTrendRow({ back: { contexts: 2 }, prev: { contexts: 5 }, cur: { contexts: 6 } })
  assert.equal(swell2, "the water context's own trend (v0.976.78): the water context's rise ran two steps deep - 2 -> 5 (+3) -> 6 (+1) - the water context's own swell (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side - the kind's word prices the server's own verdict, this word prices the water's own contexts the hound's counts exclude, co-existence by seat never by duplication)")
  // THE WATER CONTEXT'S OWN SWING byte-exact - THE FIELD'S OWN
  // CHAINS: the FACE 351 chain (349 rode 1, 350 rode 0, 351 rode 2),
  // the FACE 352 chain (350 rode 0, 351 rode 2, 352 rode 0), and
  // the FACE 355 chain (353 rode 1, 354 rode 4, 355 rode 2) - the
  // storm's own trades and the storm's own relief
  const swing1 = houndWaterContextTrendRow({ back: { contexts: 1 }, prev: { contexts: 0 }, cur: { contexts: 2 } })
  assert.equal(swing1, "the water context's own trend (v0.976.78): the water context's own swing - 1 -> 0 (-1) -> 2 (+2) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side - the kind's word prices the server's own verdict, this word prices the water's own contexts the hound's counts exclude, co-existence by seat never by duplication)")
  const swing2 = houndWaterContextTrendRow({ back: { contexts: 0 }, prev: { contexts: 2 }, cur: { contexts: 0 } })
  assert.equal(swing2, "the water context's own trend (v0.976.78): the water context's own swing - 0 -> 2 (+2) -> 0 (-2) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side - the kind's word prices the server's own verdict, this word prices the water's own contexts the hound's counts exclude, co-existence by seat never by duplication)")
  const swing3 = houndWaterContextTrendRow({ back: { contexts: 1 }, prev: { contexts: 4 }, cur: { contexts: 2 } })
  assert.equal(swing3, "the water context's own trend (v0.976.78): the water context's own swing - 1 -> 4 (+3) -> 2 (-2) - the rise and the fall traded seats between the walks (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side - the kind's word prices the server's own verdict, this word prices the water's own contexts the hound's counts exclude, co-existence by seat never by duplication)")
  // THE WATER CONTEXT'S OWN FADE byte-exact - the branch the nine
  // priced faces never rode (the water's own storms trade and
  // build - the slow two-fall the field has not held; the law
  // prices it, the bars never invent it)
  const fade = houndWaterContextTrendRow({ back: { contexts: 6 }, prev: { contexts: 4 }, cur: { contexts: 1 } })
  assert.equal(fade, "the water context's own trend (v0.976.78): the water context's fall ran two steps deep - 6 -> 4 (-2) -> 1 (-3) - the water context's own fade (the re-verdict's word prices the re-engagements' own mass, the verdict flip's word prices the trades' own shape, the flee hop's word prices the flight's own mass, the win's word prices the fleet's own side of the war, the kill's word prices the hound's own side - the kind's word prices the server's own verdict, this word prices the water's own contexts the hound's counts exclude, co-existence by seat never by duplication)")
  // THE HONEST SILENCES - the FIELD'S OWN READ: the FACE 349 chain
  // the held trio 1 -> 1 -> 1, the FACE 350 chain the held first
  // step 1 -> 1 -> 0 (the clean trio the family's own held law -
  // the bars never invent)
  assert.equal(houndWaterContextTrendRow({ back: { contexts: 1 }, prev: { contexts: 1 }, cur: { contexts: 1 } }), null)
  assert.equal(houndWaterContextTrendRow({ back: { contexts: 1 }, prev: { contexts: 1 }, cur: { contexts: 0 } }), null)
  assert.equal(houndWaterContextTrendRow({ back: { contexts: 0 }, prev: { contexts: 0 }, cur: { contexts: 0 } }), null)
  assert.equal(houndWaterContextTrendRow({ back: { contexts: 3 }, prev: { contexts: 3 }, cur: { contexts: 1 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the re-verdict's word, the
  // verdict flip's word, the flee hop's word, the win's word, the
  // kill's word) - the names ride by law, the neighbor VERDICTS
  // never ride
  for (const row of [swell1, swell2, swing1, swing2, swing3, fade]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(houndWaterContextTrendConsistent({ back: { contexts: 2 }, prev: { contexts: 1 }, cur: { contexts: 0.5 } }), false)
  assert.equal(houndWaterContextTrendConsistent({ back: { contexts: 2 }, prev: { contexts: -1 }, cur: { contexts: 0 } }), false)
  assert.equal(houndWaterContextTrendConsistent({ back: { contexts: 2 }, prev: { contexts: 1 } }), false)
  assert.equal(houndWaterContextTrendConsistent({ back: { contexts: '2' }, prev: { contexts: 1 }, cur: { contexts: 0 } }), false)
  assert.equal(houndWaterContextTrendConsistent(null), false)
  assert.equal(houndWaterContextTrendConsistent([]), false)
  assert.equal(houndWaterContextTrendConsistent({ back: { contexts: 2 }, prev: { contexts: 1 }, cur: { contexts: 0 } }), true)
  assert.equal(houndWaterContextTrendRow({ back: { contexts: 2 }, prev: { contexts: 1 }, cur: { contexts: 0.5 } }), null)
  assert.equal(houndWaterContextTrendRow({ back: { contexts: '2' }, prev: { contexts: 1 }, cur: { contexts: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // the field's own chains hand-priced from the real caches
  // (houndCensus owns the context count - the same cell the episode
  // detail line holds): the FACE 349 chain 1 -> 1 -> 1 rides the
  // honest silence, and the FACE 354 chain 0 -> 1 -> 4 rides the
  // field's own swell (the birth ride byte-exact)
  assert.equal(houndWaterContextTrendRow({ back: { contexts: 1 }, prev: { contexts: 1 }, cur: { contexts: 1 } }), null)
  assert.equal(houndWaterContextTrendRow({ back: { contexts: 0 }, prev: { contexts: 1 }, cur: { contexts: 4 } }), swell1)
})
