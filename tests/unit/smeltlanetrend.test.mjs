import { test } from 'node:test'
import assert from 'node:assert/strict'
import { smeltLaneTrendRow, smeltLaneTrendConsistent } from '../../src/lib/smeltlanetrend.mjs'
import { commonsLedger } from '../../src/lib/commonsledger.mjs'

test("the smelt lane's own trend (v0.976.90) - the commons ledger's smelt lane book's trend seat, the fence, the word", () => {
  // THE SMELT LANE'S OWN SWING byte-exact - THE FIELD'S OWN CHAINS:
  // the FACE 354 chain the swing ACROSS THE LANE'S OWN DROUGHT
  // (352 rode 1, 353 rode 17, 354 rode 0 - the count zero a lawful
  // count, the kill's own zero-face precedent), the FACE 359 chain
  // (357 rode 8, 358 rode 6, 359 rode 16), and the FACE 363 chain
  // the lane's own refill (361 rode 3, 362 rode 1, 363 rode 3) -
  // the word greeted all three on its birth ride (THE WORD BORN
  // SPEAKING NINE SWINGS DEEP)
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, this word prices the unasked visit's own lane's mass across the walks, co-existence by seat never by duplication)"
  const swing1 = smeltLaneTrendRow({ back: { laneSmelt: 1 }, prev: { laneSmelt: 17 }, cur: { laneSmelt: 0 } })
  assert.equal(swing1, "the smelt lane's own trend (v0.976.90): the smelt lane's own swing - 1 -> 17 (+16) -> 0 (-17) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = smeltLaneTrendRow({ back: { laneSmelt: 8 }, prev: { laneSmelt: 6 }, cur: { laneSmelt: 16 } })
  assert.equal(swing2, "the smelt lane's own trend (v0.976.90): the smelt lane's own swing - 8 -> 6 (-2) -> 16 (+10) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = smeltLaneTrendRow({ back: { laneSmelt: 3 }, prev: { laneSmelt: 1 }, cur: { laneSmelt: 3 } })
  assert.equal(swing3, "the smelt lane's own trend (v0.976.90): the smelt lane's own swing - 3 -> 1 (-2) -> 3 (+2) - the rise and the fall traded seats between the walks " + TAIL)
  // THE SMELT LANE'S OWN FADE byte-exact - THE FIELD'S OWN TWO
  // STRAIGHT: the FACE 361 chain (359 rode 16, 360 rode 5, 361 rode
  // 3) and the FACE 362 chain (360 rode 5, 361 rode 3, 362 rode 1) -
  // the lane's own easing closing the word's own birth window (the
  // torch lane's own two-fade exit v0.976.89 mirrored one lane over)
  const fadeField1 = smeltLaneTrendRow({ back: { laneSmelt: 16 }, prev: { laneSmelt: 5 }, cur: { laneSmelt: 3 } })
  assert.equal(fadeField1, "the smelt lane's own trend (v0.976.90): the smelt lane's fall ran two steps deep - 16 -> 5 (-11) -> 3 (-2) - the smelt lane's own fade " + TAIL)
  const fadeField2 = smeltLaneTrendRow({ back: { laneSmelt: 5 }, prev: { laneSmelt: 3 }, cur: { laneSmelt: 1 } })
  assert.equal(fadeField2, "the smelt lane's own trend (v0.976.90): the smelt lane's fall ran two steps deep - 5 -> 3 (-2) -> 1 (-2) - the smelt lane's own fade " + TAIL)
  // THE SMELT LANE'S OWN SWELL byte-exact - the branch the seventeen
  // priced faces never rode (the lane never built two rises straight
  // - the unasked visits breathe in trades; the law prices it, the
  // bars never invent it)
  const swell = smeltLaneTrendRow({ back: { laneSmelt: 2 }, prev: { laneSmelt: 5 }, cur: { laneSmelt: 9 } })
  assert.equal(swell, "the smelt lane's own trend (v0.976.90): the smelt lane's rise ran two steps deep - 2 -> 5 (+3) -> 9 (+4) - the smelt lane's own swell " + TAIL)
  // THE HONEST SILENCES - THE FIELD'S OWN FOUR HOLDS RODE THE BIRTH
  // (the family's own most-held birth): the FACE 351 chain the held
  // second step 3 -> 6 (+3) -> 6 (0), the FACE 352 chain the held
  // first step 6 -> 6 (0) -> 1 (-5), the FACE 356 chain the held
  // second step 0 -> 6 (+6) -> 6 (0), the FACE 357 chain the held
  // first step 6 -> 6 (0) -> 8 (+2), the clean trio 4 -> 4 -> 4, and
  // the held both steps 6 -> 6 -> 6 (the family's own held law - the
  // bars never invent)
  assert.equal(smeltLaneTrendRow({ back: { laneSmelt: 3 }, prev: { laneSmelt: 6 }, cur: { laneSmelt: 6 } }), null)
  assert.equal(smeltLaneTrendRow({ back: { laneSmelt: 6 }, prev: { laneSmelt: 6 }, cur: { laneSmelt: 1 } }), null)
  assert.equal(smeltLaneTrendRow({ back: { laneSmelt: 0 }, prev: { laneSmelt: 6 }, cur: { laneSmelt: 6 } }), null)
  assert.equal(smeltLaneTrendRow({ back: { laneSmelt: 6 }, prev: { laneSmelt: 6 }, cur: { laneSmelt: 8 } }), null)
  assert.equal(smeltLaneTrendRow({ back: { laneSmelt: 4 }, prev: { laneSmelt: 4 }, cur: { laneSmelt: 4 } }), null)
  assert.equal(smeltLaneTrendRow({ back: { laneSmelt: 6 }, prev: { laneSmelt: 6 }, cur: { laneSmelt: 6 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the sweep's own seat, the chest's
  // own close, the rent's own seat, the dry read's own clock, the
  // tithe's own clock, the starvation's own grand total, the sweeps'
  // own trend, the torch lane's own trend) - the names ride by law,
  // the neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, fadeField1, fadeField2, swell]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie;
  // the ZERO count is lawful (the lane's own drought rides - the
  // FACE 354/355 chains the field's own proof)
  assert.equal(smeltLaneTrendConsistent({ back: { laneSmelt: 1 }, prev: { laneSmelt: 17 }, cur: { laneSmelt: 0.5 } }), false)
  assert.equal(smeltLaneTrendConsistent({ back: { laneSmelt: 1 }, prev: { laneSmelt: -1 }, cur: { laneSmelt: 0 } }), false)
  assert.equal(smeltLaneTrendConsistent({ back: { laneSmelt: 1 }, prev: { laneSmelt: 17 } }), false)
  assert.equal(smeltLaneTrendConsistent({ back: { laneSmelt: '1' }, prev: { laneSmelt: 17 }, cur: { laneSmelt: 0 } }), false)
  assert.equal(smeltLaneTrendConsistent(null), false)
  assert.equal(smeltLaneTrendConsistent([]), false)
  assert.equal(smeltLaneTrendConsistent({ back: { laneSmelt: 1 }, prev: { laneSmelt: 17 }, cur: { laneSmelt: 0 } }), true)
  assert.equal(smeltLaneTrendRow({ back: { laneSmelt: 1 }, prev: { laneSmelt: 17 }, cur: { laneSmelt: 0.5 } }), null)
  assert.equal(smeltLaneTrendRow({ back: { laneSmelt: '1' }, prev: { laneSmelt: 17 }, cur: { laneSmelt: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // three synthetic faces folded by the SAME ledger the wires run
  // (commonsLedger owns the laneSmelt count - the same cell the
  // sweeps line holds: "smelt lane N"; the UNASKED visit rides the
  // smelt lane - the anchor line, the no-yard close: one smelt sweep
  // a pair, no ask line anywhere): the back face's three smelt
  // sweeps, the prev face's one, the cur face's three - the chain
  // 3 -> 1 (-2) -> 3 (+2) rides the FACE 363 refill byte-exact
  const smeltFace = (n) => Array.from({ length: n }, () => ['F1 fuel commons: the anchor chest is read first', 'F1 fuel commons: no yard chest in range']).flat()
  const backSmelt = commonsLedger(smeltFace(3)).totals.laneSmelt
  const prevSmelt = commonsLedger(smeltFace(1)).totals.laneSmelt
  const curSmelt = commonsLedger(smeltFace(3)).totals.laneSmelt
  assert.equal(backSmelt, 3)
  assert.equal(prevSmelt, 1)
  assert.equal(curSmelt, 3)
  assert.equal(smeltLaneTrendRow({ back: { laneSmelt: backSmelt }, prev: { laneSmelt: prevSmelt }, cur: { laneSmelt: curSmelt } }),
    "the smelt lane's own trend (v0.976.90): the smelt lane's own swing - 3 -> 1 (-2) -> 3 (+2) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FOLD'S OWN CHAIN - the field's own FACE 362 ride through the
  // ledger's own images: the back face's five, the prev face's
  // three, the cur face's one - the fade rides the same byte the
  // field priced
  const foldBack = commonsLedger(smeltFace(5)).totals.laneSmelt
  const foldPrev = commonsLedger(smeltFace(3)).totals.laneSmelt
  const foldCur = commonsLedger(smeltFace(1)).totals.laneSmelt
  assert.equal(smeltLaneTrendRow({ back: { laneSmelt: foldBack }, prev: { laneSmelt: foldPrev }, cur: { laneSmelt: foldCur } }),
    "the smelt lane's own trend (v0.976.90): the smelt lane's fall ran two steps deep - 5 -> 3 (-2) -> 1 (-2) - the smelt lane's own fade " + TAIL)
  // THE TORCH LANE NEVER JOINS - the ask's own lane the sibling word
  // prices: the armed visit (the ask line, the anchor, the no-yard
  // close, the ask's own stillDry close) rides the torch count, the
  // smelt cell unmoved - this word prices the unasked visit's own
  // lane alone
  const torchFace = (n) => Array.from({ length: n }, () => ['F1 [F1] craft torches: pocket coal dry (sticks 1) - the torch-coal resupply asks the commons (2 coal)', 'F1 fuel commons: the anchor chest is read first', 'F1 fuel commons: no yard chest in range', 'F1 [F1] craft torches: skip (no coal: sticks 1 coals 0)']).flat()
  const mixed = commonsLedger([...smeltFace(2), ...torchFace(3)]).totals
  assert.equal(mixed.laneSmelt, 2)
  assert.equal(mixed.laneTorch, 3)
  assert.equal(mixed.sweeps, 5)
  assert.equal(smeltLaneTrendRow({ back: { laneSmelt: mixed.laneSmelt }, prev: { laneSmelt: 5 }, cur: { laneSmelt: 1 } }),
    "the smelt lane's own trend (v0.976.90): the smelt lane's own swing - 2 -> 5 (+3) -> 1 (-4) - the rise and the fall traded seats between the walks " + TAIL)
})
