import { test } from 'node:test'
import assert from 'node:assert/strict'
import { ghostTrendRow, ghostTrendConsistent } from '../../src/lib/ghosttrend.mjs'
import { commonsLedger } from '../../src/lib/commonsledger.mjs'

test("the ghost's own trend (v0.976.95) - the commons ledger's ghost book's trend seat, the fence, the word", () => {
  // THE FIELD'S OWN FADES byte-exact: the FACE 350 chain the lie's own
  // drain (348 rode 4, 349 rode 1, 350 rode 0) and the FACE 359 chain
  // the book's own quiet (357 rode 2, 358 rode 1, 359 rode 0)
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, this word prices the ghost's own mass across the walks, co-existence by seat never by duplication)"
  const fade1 = ghostTrendRow({ back: { ghost: 4 }, prev: { ghost: 1 }, cur: { ghost: 0 } })
  assert.equal(fade1, "the ghost's own trend (v0.976.95): the ghost's fall ran two steps deep - 4 -> 1 (-3) -> 0 (-1) - the ghost's own fade " + TAIL)
  const fade2 = ghostTrendRow({ back: { ghost: 2 }, prev: { ghost: 1 }, cur: { ghost: 0 } })
  assert.equal(fade2, "the ghost's own trend (v0.976.95): the ghost's fall ran two steps deep - 2 -> 1 (-1) -> 0 (-1) - the ghost's own fade " + TAIL)
  // THE FIELD'S OWN SWINGS byte-exact: the FACE 354 chain (352 rode 0,
  // 353 rode 1, 354 rode 0), the FACE 355 chain the lie's own return
  // one walk later (353 rode 1, 354 rode 0, 355 rode 1), the FACE 358
  // chain the book's own top (356 rode 1, 357 rode 2, 358 rode 1), and
  // THE FACE 367 CHAIN the flicker's own latest ride (365 rode 0,
  // 366 rode 1, 367 rode 0)
  const swing1 = ghostTrendRow({ back: { ghost: 0 }, prev: { ghost: 1 }, cur: { ghost: 0 } })
  assert.equal(swing1, "the ghost's own trend (v0.976.95): the ghost's own swing - 0 -> 1 (+1) -> 0 (-1) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = ghostTrendRow({ back: { ghost: 1 }, prev: { ghost: 0 }, cur: { ghost: 1 } })
  assert.equal(swing2, "the ghost's own trend (v0.976.95): the ghost's own swing - 1 -> 0 (-1) -> 1 (+1) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = ghostTrendRow({ back: { ghost: 1 }, prev: { ghost: 2 }, cur: { ghost: 1 } })
  assert.equal(swing3, "the ghost's own trend (v0.976.95): the ghost's own swing - 1 -> 2 (+1) -> 1 (-1) - the rise and the fall traded seats between the walks " + TAIL)
  const swing4 = ghostTrendRow({ back: { ghost: 0 }, prev: { ghost: 1 }, cur: { ghost: 0 } })
  assert.equal(swing4, swing1)
  // THE SWELL - the branch the twenty priced faces never rode (the
  // ghost's own lies trade one face at a time, the clicks never
  // built): the law prices it, the bars never invent it
  const swell1 = ghostTrendRow({ back: { ghost: 0 }, prev: { ghost: 2 }, cur: { ghost: 5 } })
  assert.equal(swell1, "the ghost's own trend (v0.976.95): the ghost's rise ran two steps deep - 0 -> 2 (+2) -> 5 (+3) - the ghost's own swell " + TAIL)
  // THE FIELD'S OWN HONEST SILENCES - the field rode them EIGHT
  // times: the held second step 1 -> 0 (-1) -> 0 (0) (the FACE 351
  // chain), the clean trio 0 -> 0 -> 0 (the FACE 352/365 chains), the
  // held first step 0 -> 0 (0) -> 1 (+1) (the FACE 353/366 chains -
  // the arrival rode unnamed), the held second step 0 -> 1 (+1) ->
  // 1 (0) (the FACE 356 chain), the held first step 1 -> 1 (0) ->
  // 2 (+2) (the FACE 357 chain), and the held second step 1 -> 0 (-1)
  // -> 0 (0) (the FACE 364 chain)
  assert.equal(ghostTrendRow({ back: { ghost: 1 }, prev: { ghost: 0 }, cur: { ghost: 0 } }), null)
  assert.equal(ghostTrendRow({ back: { ghost: 0 }, prev: { ghost: 0 }, cur: { ghost: 0 } }), null)
  assert.equal(ghostTrendRow({ back: { ghost: 0 }, prev: { ghost: 0 }, cur: { ghost: 1 } }), null)
  assert.equal(ghostTrendRow({ back: { ghost: 0 }, prev: { ghost: 1 }, cur: { ghost: 1 } }), null)
  assert.equal(ghostTrendRow({ back: { ghost: 1 }, prev: { ghost: 1 }, cur: { ghost: 2 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the sweep's own seat, the chest's
  // own close, the rent's own seat, the dry read's own clock, the
  // tithe's own clock, the starvation's own grand total, the sweeps'
  // own trend, the torch lane's own trend, the smelt lane's own
  // trend, the asks' own trend, the delivered's own trend, the
  // budget's own trend, the exhaust's own trend) - the names ride by
  // law, the neighbor VERDICTS never ride
  for (const row of [fade1, fade2, swing1, swing2, swing3, swell1]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie;
  // the ZERO count is lawful (the ghost's own zero rides - the
  // field's own thirteen zero faces the proof)
  assert.equal(ghostTrendConsistent({ back: { ghost: 1 }, prev: { ghost: 3 }, cur: { ghost: 0.5 } }), false)
  assert.equal(ghostTrendConsistent({ back: { ghost: 1 }, prev: { ghost: -1 }, cur: { ghost: 0 } }), false)
  assert.equal(ghostTrendConsistent({ back: { ghost: 1 }, prev: { ghost: 3 } }), false)
  assert.equal(ghostTrendConsistent({ back: { ghost: '1' }, prev: { ghost: 3 }, cur: { ghost: 0 } }), false)
  assert.equal(ghostTrendConsistent(null), false)
  assert.equal(ghostTrendConsistent([]), false)
  assert.equal(ghostTrendConsistent({ back: { ghost: 0 }, prev: { ghost: 0 }, cur: { ghost: 0 } }), true)
  assert.equal(ghostTrendRow({ back: { ghost: 1 }, prev: { ghost: 3 }, cur: { ghost: 0.5 } }), null)
  assert.equal(ghostTrendRow({ back: { ghost: '1' }, prev: { ghost: 3 }, cur: { ghost: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // three synthetic faces folded by the SAME ledger the wires run
  // (commonsLedger owns the ghost count - the same cell the sweeps
  // line holds: "ghost N"; the lie's own close rides the twice-lied
  // clicks: 'the clicks lied twice - nothing landed in the pocket
  // (ghost clicks)' - the walk closed as the lie's own ghost; the
  // anchor read opens the sweep the lie closes - the close class
  // never rides without the walk): the back face's two lies, the
  // prev face's one, the cur face's two - the chain 2 -> 1 (-1) ->
  // 2 (+1) rides the trade byte-exact (the lie's own flicker)
  const ghostFace = (n) => Array.from({ length: n }, () => ['F1 fuel commons: the anchor chest is read first', 'F1 fuel commons: the clicks lied twice - nothing landed in the pocket (ghost clicks)']).flat()
  const backGhost = commonsLedger(ghostFace(2)).totals.ghost
  const prevGhost = commonsLedger(ghostFace(1)).totals.ghost
  const curGhost = commonsLedger(ghostFace(2)).totals.ghost
  assert.equal(backGhost, 2)
  assert.equal(prevGhost, 1)
  assert.equal(curGhost, 2)
  assert.equal(ghostTrendRow({ back: { ghost: backGhost }, prev: { ghost: prevGhost }, cur: { ghost: curGhost } }),
    "the ghost's own trend (v0.976.95): the ghost's own swing - 2 -> 1 (-1) -> 2 (+1) - the rise and the fall traded seats between the walks " + TAIL)
  // THE EXHAUST NEVER JOINS - the tail book the exhaust's own word
  // v0.976.94 prices: the mixed face (the open echo + the lie's own
  // close) rides the silentExhaust AND the ghost, this word prices
  // the ghost alone (the lie's own cell, the tail unmoved by it)
  const mixed = commonsLedger(['F1 fuel commons: the anchor chest is read first', 'F1 fuel commons: the clicks lied twice - nothing landed in the pocket (ghost clicks)', 'F1 fuel commons: the anchor chest is read first']).totals
  assert.equal(mixed.silentExhaust, 1)
  assert.equal(mixed.ghost, 1)
  assert.equal(mixed.sweeps, 2)
  assert.equal(ghostTrendRow({ back: { ghost: mixed.ghost }, prev: { ghost: 3 }, cur: { ghost: 1 } }),
    "the ghost's own trend (v0.976.95): the ghost's own swing - 1 -> 3 (+2) -> 1 (-2) - the rise and the fall traded seats between the walks " + TAIL)
})
