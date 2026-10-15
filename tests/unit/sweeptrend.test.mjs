import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sweepTrendRow, sweepTrendConsistent } from '../../src/lib/sweeptrend.mjs'
import { commonsLedger } from '../../src/lib/commonsledger.mjs'

test("the sweeps' own trend (v0.976.88) - the commons ledger's sweep book's trend seat, the fence, the word", () => {
  // THE SWEEPS' OWN SWING byte-exact - THE FIELD'S OWN CHAINS: the
  // FACE 354 chain (352 rode 34, 353 rode 57, 354 rode 32), the FACE
  // 358 chain (356 rode 44, 357 rode 45, 358 rode 43), and the FACE
  // 360 chain (358 rode 43, 359 rode 57, 360 rode 44) - the yard's
  // own ask-and-answer the word greeted on its birth ride (THE WORD
  // BORN SPEAKING TEN SWINGS DEEP - the F351..360 ten-straight the
  // field held)
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, this word prices the sweeps' own mass across the walks, co-existence by seat never by duplication)"
  const swing1 = sweepTrendRow({ back: { sweeps: 34 }, prev: { sweeps: 57 }, cur: { sweeps: 32 } })
  assert.equal(swing1, "the sweeps' own trend (v0.976.88): the sweeps' own swing - 34 -> 57 (+23) -> 32 (-25) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = sweepTrendRow({ back: { sweeps: 44 }, prev: { sweeps: 45 }, cur: { sweeps: 43 } })
  assert.equal(swing2, "the sweeps' own trend (v0.976.88): the sweeps' own swing - 44 -> 45 (+1) -> 43 (-2) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = sweepTrendRow({ back: { sweeps: 43 }, prev: { sweeps: 57 }, cur: { sweeps: 44 } })
  assert.equal(swing3, "the sweeps' own trend (v0.976.88): the sweeps' own swing - 43 -> 57 (+14) -> 44 (-13) - the rise and the fall traded seats between the walks " + TAIL)
  // THE SWEEPS' OWN FADE byte-exact - THE FIELD'S OWN TWO STRAIGHT:
  // the FACE 350 chain (348 rode 44, 349 rode 36, 350 rode 31) and
  // the FACE 362 chain (360 rode 44, 361 rode 36, 362 rode 32) - the
  // yard's own easing closing the word's own birth window (the fade
  // rode three times in the fifteen priced faces, the F361/F362 pair
  // two straight)
  const fadeField1 = sweepTrendRow({ back: { sweeps: 44 }, prev: { sweeps: 36 }, cur: { sweeps: 31 } })
  assert.equal(fadeField1, "the sweeps' own trend (v0.976.88): the sweeps' fall ran two steps deep - 44 -> 36 (-8) -> 31 (-5) - the sweeps' own fade " + TAIL)
  const fadeField2 = sweepTrendRow({ back: { sweeps: 44 }, prev: { sweeps: 36 }, cur: { sweeps: 32 } })
  assert.equal(fadeField2, "the sweeps' own trend (v0.976.88): the sweeps' fall ran two steps deep - 44 -> 36 (-8) -> 32 (-4) - the sweeps' own fade " + TAIL)
  // THE SWEEPS' OWN SWELL byte-exact - the branch the fifteen priced
  // faces never rode (the sweeps never built two rises straight - the
  // yard's own ask breathes in trades; the law prices it, the bars
  // never invent it)
  const swell = sweepTrendRow({ back: { sweeps: 20 }, prev: { sweeps: 31 }, cur: { sweeps: 45 } })
  assert.equal(swell, "the sweeps' own trend (v0.976.88): the sweeps' rise ran two steps deep - 20 -> 31 (+11) -> 45 (+14) - the sweeps' own swell " + TAIL)
  // THE HONEST SILENCES - the held first step 44 -> 44 -> 57 (the
  // arrival rode unnamed - the re-verdict's own FACE 350 precedent),
  // the held second step 57 -> 44 -> 44 (the storm's own exit - the
  // win's own FACE 353 precedent), the clean trio 40 -> 40 -> 40, and
  // the held both steps 44 -> 44 -> 44 (the family's own held law -
  // the bars never invent; the held step never rode the fifteen
  // priced faces either)
  assert.equal(sweepTrendRow({ back: { sweeps: 44 }, prev: { sweeps: 44 }, cur: { sweeps: 57 } }), null)
  assert.equal(sweepTrendRow({ back: { sweeps: 57 }, prev: { sweeps: 44 }, cur: { sweeps: 44 } }), null)
  assert.equal(sweepTrendRow({ back: { sweeps: 40 }, prev: { sweeps: 40 }, cur: { sweeps: 40 } }), null)
  assert.equal(sweepTrendRow({ back: { sweeps: 44 }, prev: { sweeps: 44 }, cur: { sweeps: 44 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the sweep's own seat, the chest's
  // own close, the rent's own seat, the dry read's own clock, the
  // tithe's own clock, the starvation's own grand total) - the names
  // ride by law, the neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, fadeField1, fadeField2, swell]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(sweepTrendConsistent({ back: { sweeps: 44 }, prev: { sweeps: 36 }, cur: { sweeps: 0.5 } }), false)
  assert.equal(sweepTrendConsistent({ back: { sweeps: 44 }, prev: { sweeps: -1 }, cur: { sweeps: 0 } }), false)
  assert.equal(sweepTrendConsistent({ back: { sweeps: 44 }, prev: { sweeps: 36 } }), false)
  assert.equal(sweepTrendConsistent({ back: { sweeps: '44' }, prev: { sweeps: 36 }, cur: { sweeps: 32 } }), false)
  assert.equal(sweepTrendConsistent(null), false)
  assert.equal(sweepTrendConsistent([]), false)
  assert.equal(sweepTrendConsistent({ back: { sweeps: 44 }, prev: { sweeps: 36 }, cur: { sweeps: 32 } }), true)
  assert.equal(sweepTrendRow({ back: { sweeps: 44 }, prev: { sweeps: 36 }, cur: { sweeps: 0.5 } }), null)
  assert.equal(sweepTrendRow({ back: { sweeps: '44' }, prev: { sweeps: 36 }, cur: { sweeps: 32 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // three synthetic faces folded by the SAME ledger the wires run
  // (commonsLedger owns the sweeps count - the same cell the sweeps
  // line holds: "sweeps N"): the back face's three sweeps, the prev
  // face's five, the cur face's two - the chain 3 -> 5 (+2) -> 2 (-3)
  // rides the swing byte-exact
  const commonsFace = (n) => Array.from({ length: n }, () => ['F1 fuel commons: the anchor chest is read first', 'F1 fuel commons: no yard chest in range']).flat()
  const backSweeps = commonsLedger(commonsFace(3)).totals.sweeps
  const prevSweeps = commonsLedger(commonsFace(5)).totals.sweeps
  const curSweeps = commonsLedger(commonsFace(2)).totals.sweeps
  assert.equal(backSweeps, 3)
  assert.equal(prevSweeps, 5)
  assert.equal(curSweeps, 2)
  assert.equal(sweepTrendRow({ back: { sweeps: backSweeps }, prev: { sweeps: prevSweeps }, cur: { sweeps: curSweeps } }),
    "the sweeps' own trend (v0.976.88): the sweeps' own swing - 3 -> 5 (+2) -> 2 (-3) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FOLD'S OWN CHAIN - the field's own FACE 362 ride through the
  // ledger's own images: the back face's forty-four sweeps, the prev
  // face's thirty-six, the cur face's thirty-two - the fade rides the
  // same byte the field priced
  const foldBack = commonsLedger(commonsFace(44)).totals.sweeps
  const foldPrev = commonsLedger(commonsFace(36)).totals.sweeps
  const foldCur = commonsLedger(commonsFace(32)).totals.sweeps
  assert.equal(sweepTrendRow({ back: { sweeps: foldBack }, prev: { sweeps: foldPrev }, cur: { sweeps: foldCur } }),
    "the sweeps' own trend (v0.976.88): the sweeps' fall ran two steps deep - 44 -> 36 (-8) -> 32 (-4) - the sweeps' own fade " + TAIL)
})
