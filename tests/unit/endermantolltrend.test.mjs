import { test } from 'node:test'
import assert from 'node:assert/strict'
import { endermanTollTrendRow, endermanTollTrendConsistent } from '../../src/lib/endermantolltrend.mjs'
import { deathKindCensus } from '../../src/lib/deathkinds.mjs'

test("the enderman toll's own trend (v0.976.113) - the mob book's sixth class-toll word, the fence, the word", () => {
  // THE FIELD'S OWN CHAINS - byte-exact from the sixty-one priced
  // faces (the cache's own shelf 319..379: every face rode 0 until
  // THE FACE 378 THE FIELD'S OWN FIRST ENDERMAN KILL rode 1 - F7
  // slain by Enderman at [-173,65,430] - and the FACE 379 paid it
  // back riding 0; the FACE 378 chain 0 -> 0 -> 1 the record's own
  // arrival behind a held first step, THE FACE 379 CHAIN THE WORD'S
  // OWN LIVE WINDOW 0 -> 1 -> 0 THE SWING - the word born speaking)
  const TAIL = "(the seat's word names the mob book's own killer, the riders' word prices the crowd's own concentration, the witch toll's own word prices the fifth class toll's own mass - a different book, the killer is not the death - this word prices the enderman toll's own mass, co-existence by seat never by duplication)"
  // the honest silences - the field's own held chains (the clean
  // trio the shelf's own sixty-zero faces rode, the arrival chain
  // 0 -> 0 -> 1 the FACE 378 chain the record's own ride unnamed
  // behind a held first step, the held exit 1 -> 0 -> 0 the witch
  // toll's own lone-ride mirror, the flat holds)
  assert.equal(endermanTollTrendRow({ back: { enderman: 0 }, prev: { enderman: 0 }, cur: { enderman: 0 } }), null)
  assert.equal(endermanTollTrendRow({ back: { enderman: 0 }, prev: { enderman: 0 }, cur: { enderman: 1 } }), null)
  assert.equal(endermanTollTrendRow({ back: { enderman: 1 }, prev: { enderman: 0 }, cur: { enderman: 0 } }), null)
  assert.equal(endermanTollTrendRow({ back: { enderman: 2 }, prev: { enderman: 2 }, cur: { enderman: 2 } }), null)
  assert.equal(endermanTollTrendRow({ back: { enderman: 3 }, prev: { enderman: 3 }, cur: { enderman: 0 } }), null)
  // THE SWING byte-exact - THE FACE 379 CHAIN THE WORD'S OWN LIVE
  // WINDOW 0 -> 1 (+1) -> 0 (-1) - the lone kill traded back the
  // very next walk (the word born speaking on its own first read)
  const swing1 = endermanTollTrendRow({ back: { enderman: 0 }, prev: { enderman: 1 }, cur: { enderman: 0 } })
  assert.equal(swing1, "the enderman toll's own trend (v0.976.113): the enderman toll's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks " + TAIL)
  // THE SWING byte-exact - the law's own shape at a mass the field
  // has not held (the trade's own bigger coinage)
  const swing2 = endermanTollTrendRow({ back: { enderman: 2 }, prev: { enderman: 5 }, cur: { enderman: 1 } })
  assert.equal(swing2, "the enderman toll's own trend (v0.976.113): the enderman toll's own swing - 2 -> 5 (+3) -> 1 (-4) - the rise and the fall traded seats between the walks " + TAIL)
  // THE SWELL byte-exact - the shape the field has not held (the
  // swell never rode the sixty-one faces the census priced: the
  // teleporter's own tolls trade one kill at a time, the build never
  // came)
  const swell1 = endermanTollTrendRow({ back: { enderman: 0 }, prev: { enderman: 1 }, cur: { enderman: 3 } })
  assert.equal(swell1, "the enderman toll's own trend (v0.976.113): the enderman toll's rise ran two steps deep - 0 -> 1 (+1) -> 3 (+2) - the enderman toll's own swell " + TAIL)
  // THE FADE byte-exact - the shape the field has not held (the
  // fade's own two-step run the tolls never rode)
  const fade1 = endermanTollTrendRow({ back: { enderman: 3 }, prev: { enderman: 2 }, cur: { enderman: 0 } })
  assert.equal(fade1, "the enderman toll's own trend (v0.976.113): the enderman toll's fall ran two steps deep - 3 -> 2 (-1) -> 0 (-2) - the enderman toll's own fade " + TAIL)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict words (no owns, no dynasty, no turn) - co-existence by
  // seat never by duplication
  for (const row of [swing1, swing2, swell1, fade1]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(endermanTollTrendConsistent({ back: { enderman: 2 }, prev: { enderman: 1 }, cur: { enderman: 0.5 } }), false)
  assert.equal(endermanTollTrendConsistent({ back: { enderman: 2 }, prev: { enderman: -1 }, cur: { enderman: 0 } }), false)
  assert.equal(endermanTollTrendConsistent({ back: { enderman: 2 }, prev: { enderman: 1 } }), false)
  assert.equal(endermanTollTrendConsistent({ back: { enderman: '2' }, prev: { enderman: 1 }, cur: { enderman: 0 } }), false)
  assert.equal(endermanTollTrendConsistent(null), false)
  assert.equal(endermanTollTrendConsistent([]), false)
  assert.equal(endermanTollTrendConsistent({ back: { enderman: 2 }, prev: { enderman: 1 }, cur: { enderman: 0 } }), true)
  assert.equal(endermanTollTrendRow({ back: { enderman: 2 }, prev: { enderman: 1 }, cur: { enderman: 0.5 } }), null)
  assert.equal(endermanTollTrendRow({ back: { enderman: '2' }, prev: { enderman: 1 }, cur: { enderman: 0 } }), null)
  // the one-parser law's own ride through the census's own images:
  // three synthetic faces folded by the SAME census the wires run -
  // the first face carries the FACE 378 kill line's own byte (F7
  // slain by Enderman, kind=mob by Enderman), the second the trade's
  // own payback (the empty book rides the lawful zero), the third
  // the mob book's own crowd where the enderman stays silent - the
  // cell the census's own byAttacker.Enderman
  const faceA = [
    'F7 [F7] died - respawning (cause: server: was slain by Enderman [kind=mob by Enderman] | inferred: enderman@1.8 (0s before death at [-173,65,430]) [the inference corroborates the server verdict])'
  ]
  const faceB = [
    'F7 [F7] died - respawning (cause: server: was slain by Zombie [kind=mob by Zombie] | inferred: zombie@0.8 (0s before death at [-128,64,436]) [the inference corroborates the server verdict])'
  ]
  const faceC = [
    'F7 [F7] died - respawning (cause: server: was slain by Enderman [kind=mob by Enderman] | inferred: enderman@1.8 (0s before death at [-173,65,430]) [the inference corroborates the server verdict])',
    'F9 [F9] died - respawning (cause: server: was slain by Enderman [kind=mob by Enderman] | inferred: enderman@2.2 (0s before death at [-171,64,428]) [the inference corroborates the server verdict])'
  ]
  const fold = (back, prev, cur) => endermanTollTrendRow({
    back: { enderman: deathKindCensus(back).byAttacker.Enderman || 0 },
    prev: { enderman: deathKindCensus(prev).byAttacker.Enderman || 0 },
    cur: { enderman: deathKindCensus(cur).byAttacker.Enderman || 0 }
  })
  // the census cells byte-exact: faceA rides 1 (the field's own
  // first), faceB rides 0 (the empty book's lawful zero - the
  // Zombie's line never joins the enderman's book), faceC rides 2
  assert.equal(deathKindCensus(faceA).byAttacker.Enderman || 0, 1)
  assert.equal(deathKindCensus(faceB).byAttacker.Enderman || 0, 0)
  assert.equal(deathKindCensus(faceC).byAttacker.Enderman || 0, 2)
  // the ride: faceB -> faceA -> faceB = 0 -> 1 -> 0 THE SWING byte
  // (the FACE 379 chain the census's own arithmetic rode)
  assert.equal(fold(faceB, faceA, faceB), swing1)
  // the ride: faceA -> faceB -> faceC = 1 -> 0 -> 2 the swing's own
  // second coinage (the law's own shape, the census's own cells)
  const ride2 = fold(faceA, faceB, faceC)
  assert.equal(ride2, "the enderman toll's own trend (v0.976.113): the enderman toll's own swing - 1 -> 0 (-1) -> 2 (+2) - the rise and the fall traded seats between the walks " + TAIL)
  // the clean trio through the census: faceB x3 the lawful silence
  assert.equal(fold(faceB, faceB, faceB), null)
})
