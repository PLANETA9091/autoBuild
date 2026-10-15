import { test } from 'node:test'
import assert from 'node:assert/strict'
import { exhaustTrendRow, exhaustTrendConsistent } from '../../src/lib/exhausttrend.mjs'
import { commonsLedger } from '../../src/lib/commonsledger.mjs'

test("the exhaust's own trend (v0.976.94) - the commons ledger's exhaust book's trend seat, the fence, the word", () => {
  // THE FAMILY'S OWN ALL-SPEAKING BIRTH SEVENTEEN DEEP - no held step
  // ever rode the nineteen priced faces. THE FIELD'S OWN SWELLS
  // byte-exact: the FACE 351 chain (349 rode 5, 350 rode 9, 351 rode
  // 14), the FACE 359 chain the two-face build's own top (357 rode
  // 20, 358 rode 22, 359 rode 42), and THE FACE 366 CHAIN THE WORD'S
  // OWN BIRTH RIDE the exhaust's own two-face build (364 rode 3,
  // 365 rode 13, 366 rode 18 - the yard's own refill face the
  // exhaust climbs)
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, this word prices the exhaust's own mass across the walks, co-existence by seat never by duplication)"
  const swell1 = exhaustTrendRow({ back: { silentExhaust: 5 }, prev: { silentExhaust: 9 }, cur: { silentExhaust: 14 } })
  assert.equal(swell1, "the exhaust's own trend (v0.976.94): the exhaust's rise ran two steps deep - 5 -> 9 (+4) -> 14 (+5) - the exhaust's own swell " + TAIL)
  const swell2 = exhaustTrendRow({ back: { silentExhaust: 20 }, prev: { silentExhaust: 22 }, cur: { silentExhaust: 42 } })
  assert.equal(swell2, "the exhaust's own trend (v0.976.94): the exhaust's rise ran two steps deep - 20 -> 22 (+2) -> 42 (+20) - the exhaust's own swell " + TAIL)
  const swell3 = exhaustTrendRow({ back: { silentExhaust: 3 }, prev: { silentExhaust: 13 }, cur: { silentExhaust: 18 } })
  assert.equal(swell3, "the exhaust's own trend (v0.976.94): the exhaust's rise ran two steps deep - 3 -> 13 (+10) -> 18 (+5) - the exhaust's own swell " + TAIL)
  // THE FIELD'S OWN FADES byte-exact: the FACE 361 chain the build's
  // own release (359 rode 42, 360 rode 11, 361 rode 10) and the FACE
  // 364 chain the exhaust's own floor (362 rode 12, 363 rode 9,
  // 364 rode 3)
  const fade1 = exhaustTrendRow({ back: { silentExhaust: 42 }, prev: { silentExhaust: 11 }, cur: { silentExhaust: 10 } })
  assert.equal(fade1, "the exhaust's own trend (v0.976.94): the exhaust's fall ran two steps deep - 42 -> 11 (-31) -> 10 (-1) - the exhaust's own fade " + TAIL)
  const fade2 = exhaustTrendRow({ back: { silentExhaust: 12 }, prev: { silentExhaust: 9 }, cur: { silentExhaust: 3 } })
  assert.equal(fade2, "the exhaust's own trend (v0.976.94): the exhaust's fall ran two steps deep - 12 -> 9 (-3) -> 3 (-6) - the exhaust's own fade " + TAIL)
  // THE FIELD'S OWN SWINGS byte-exact: the FACE 350 chain (348 rode
  // 11, 349 rode 5, 350 rode 9), the FACE 353 chain the storm's own
  // arrival (351 rode 14, 352 rode 7, 353 rode 41), the FACE 354
  // chain the storm's own exit (352 rode 7, 353 rode 41, 354 rode
  // 8), and the FACE 360 chain the build's own widest release (358
  // rode 22, 359 rode 42, 360 rode 11)
  const swing1 = exhaustTrendRow({ back: { silentExhaust: 11 }, prev: { silentExhaust: 5 }, cur: { silentExhaust: 9 } })
  assert.equal(swing1, "the exhaust's own trend (v0.976.94): the exhaust's own swing - 11 -> 5 (-6) -> 9 (+4) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = exhaustTrendRow({ back: { silentExhaust: 14 }, prev: { silentExhaust: 7 }, cur: { silentExhaust: 41 } })
  assert.equal(swing2, "the exhaust's own trend (v0.976.94): the exhaust's own swing - 14 -> 7 (-7) -> 41 (+34) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = exhaustTrendRow({ back: { silentExhaust: 7 }, prev: { silentExhaust: 41 }, cur: { silentExhaust: 8 } })
  assert.equal(swing3, "the exhaust's own trend (v0.976.94): the exhaust's own swing - 7 -> 41 (+34) -> 8 (-33) - the rise and the fall traded seats between the walks " + TAIL)
  const swing4 = exhaustTrendRow({ back: { silentExhaust: 22 }, prev: { silentExhaust: 42 }, cur: { silentExhaust: 11 } })
  assert.equal(swing4, "the exhaust's own trend (v0.976.94): the exhaust's own swing - 22 -> 42 (+20) -> 11 (-31) - the rise and the fall traded seats between the walks " + TAIL)
  // THE HONEST SILENCES - the field never rode them (the exhaust
  // never held) but the law prices them (the bars never invent):
  // the held second step 1 -> 2 (+1) -> 2 (0), the held first step
  // 2 -> 2 (0) -> 1 (-1), the clean trio 4 -> 4 -> 4, and the held
  // both steps 3 -> 3 -> 3
  assert.equal(exhaustTrendRow({ back: { silentExhaust: 1 }, prev: { silentExhaust: 2 }, cur: { silentExhaust: 2 } }), null)
  assert.equal(exhaustTrendRow({ back: { silentExhaust: 2 }, prev: { silentExhaust: 2 }, cur: { silentExhaust: 1 } }), null)
  assert.equal(exhaustTrendRow({ back: { silentExhaust: 4 }, prev: { silentExhaust: 4 }, cur: { silentExhaust: 4 } }), null)
  assert.equal(exhaustTrendRow({ back: { silentExhaust: 3 }, prev: { silentExhaust: 3 }, cur: { silentExhaust: 3 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the sweep's own seat, the chest's
  // own close, the rent's own seat, the dry read's own clock, the
  // tithe's own clock, the starvation's own grand total, the sweeps'
  // own trend, the torch lane's own trend, the smelt lane's own
  // trend, the asks' own trend, the delivered's own trend, the
  // budget's own trend) - the names ride by law, the neighbor
  // VERDICTS never ride
  for (const row of [swell1, swell2, swell3, fade1, fade2, swing1, swing2, swing3, swing4]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie;
  // the ZERO count is lawful (the exhaust's own zero rides - the
  // smelt lane's own zero precedent v0.976.90)
  assert.equal(exhaustTrendConsistent({ back: { silentExhaust: 1 }, prev: { silentExhaust: 3 }, cur: { silentExhaust: 0.5 } }), false)
  assert.equal(exhaustTrendConsistent({ back: { silentExhaust: 1 }, prev: { silentExhaust: -1 }, cur: { silentExhaust: 0 } }), false)
  assert.equal(exhaustTrendConsistent({ back: { silentExhaust: 1 }, prev: { silentExhaust: 3 } }), false)
  assert.equal(exhaustTrendConsistent({ back: { silentExhaust: '1' }, prev: { silentExhaust: 3 }, cur: { silentExhaust: 0 } }), false)
  assert.equal(exhaustTrendConsistent(null), false)
  assert.equal(exhaustTrendConsistent([]), false)
  assert.equal(exhaustTrendConsistent({ back: { silentExhaust: 0 }, prev: { silentExhaust: 0 }, cur: { silentExhaust: 0 } }), true)
  assert.equal(exhaustTrendRow({ back: { silentExhaust: 1 }, prev: { silentExhaust: 3 }, cur: { silentExhaust: 0.5 } }), null)
  assert.equal(exhaustTrendRow({ back: { silentExhaust: '1' }, prev: { silentExhaust: 3 }, cur: { silentExhaust: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // three synthetic faces folded by the SAME ledger the wires run
  // (commonsLedger owns the silentExhaust count - the same cell the
  // sweeps line holds: "silent-exhaust N"; the walk's own unclosed
  // echo rides the exhaust - the anchor line with no close before
  // the log's tail: the tail's honest open): the back face's three
  // echoes, the prev face's one, the cur face's three - the chain
  // 3 -> 1 (-2) -> 3 (+2) rides the trade byte-exact (the swing the
  // tails' own breath)
  const exhaustFace = (n) => Array.from({ length: n }, () => 'F1 fuel commons: the anchor chest is read first')
  const backExhaust = commonsLedger(exhaustFace(3)).totals.silentExhaust
  const prevExhaust = commonsLedger(exhaustFace(1)).totals.silentExhaust
  const curExhaust = commonsLedger(exhaustFace(3)).totals.silentExhaust
  assert.equal(backExhaust, 3)
  assert.equal(prevExhaust, 1)
  assert.equal(curExhaust, 3)
  assert.equal(exhaustTrendRow({ back: { silentExhaust: backExhaust }, prev: { silentExhaust: prevExhaust }, cur: { silentExhaust: curExhaust } }),
    "the exhaust's own trend (v0.976.94): the exhaust's own swing - 3 -> 1 (-2) -> 3 (+2) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FIELD'S OWN BIRTH RIDE through the ledger's own images: the
  // back face's two, the prev face's five, the cur face's seven -
  // the swell rides the FACE 366 birth byte-exact (the exhaust's own
  // two-face build)
  const foldBack = commonsLedger(exhaustFace(2)).totals.silentExhaust
  const foldPrev = commonsLedger(exhaustFace(5)).totals.silentExhaust
  const foldCur = commonsLedger(exhaustFace(7)).totals.silentExhaust
  assert.equal(exhaustTrendRow({ back: { silentExhaust: foldBack }, prev: { silentExhaust: foldPrev }, cur: { silentExhaust: foldCur } }),
    "the exhaust's own trend (v0.976.94): the exhaust's rise ran two steps deep - 2 -> 5 (+3) -> 7 (+2) - the exhaust's own swell " + TAIL)
  // THE BUDGET NEVER JOINS - the wall book the budget's own word
  // v0.976.93 prices: the mixed face (the closed walls + the open
  // echo) rides the budgetSpent AND the silentExhaust, this word
  // prices the exhaust alone (the tail's own cell, the wall unmoved
  // by it)
  const mixed = commonsLedger(['F1 fuel commons: the anchor chest is read first', 'F1 fuel commons: budget spent (0/2 units)', 'F1 fuel commons: the anchor chest is read first']).totals
  assert.equal(mixed.budgetSpent, 1)
  assert.equal(mixed.silentExhaust, 1)
  assert.equal(mixed.sweeps, 2)
  assert.equal(exhaustTrendRow({ back: { silentExhaust: mixed.silentExhaust }, prev: { silentExhaust: 4 }, cur: { silentExhaust: 1 } }),
    "the exhaust's own trend (v0.976.94): the exhaust's own swing - 1 -> 4 (+3) -> 1 (-3) - the rise and the fall traded seats between the walks " + TAIL)
})
