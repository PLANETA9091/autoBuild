import { test } from 'node:test'
import assert from 'node:assert/strict'
import { torchLaneTrendRow, torchLaneTrendConsistent } from '../../src/lib/torchlanetrend.mjs'
import { commonsLedger } from '../../src/lib/commonsledger.mjs'

test("the torch lane's own trend (v0.976.89) - the commons ledger's torch lane book's trend seat, the fence, the word", () => {
  // THE TORCH LANE'S OWN SWING byte-exact - THE FIELD'S OWN CHAINS: the
  // FACE 351 chain (349 rode 33, 350 rode 25, 351 rode 35), the FACE
  // 355 chain (353 rode 40, 354 rode 32, 355 rode 45), and the FACE
  // 360 chain (358 rode 37, 359 rode 41, 360 rode 39) - the ask's own
  // ask-and-answer the word greeted on its birth ride (THE WORD BORN
  // SPEAKING EIGHT SWINGS DEEP - the F351..356 six-straight the field
  // held)
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, this word prices the torch lane's own mass across the walks, co-existence by seat never by duplication)"
  const swing1 = torchLaneTrendRow({ back: { laneTorch: 33 }, prev: { laneTorch: 25 }, cur: { laneTorch: 35 } })
  assert.equal(swing1, "the torch lane's own trend (v0.976.89): the torch lane's own swing - 33 -> 25 (-8) -> 35 (+10) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = torchLaneTrendRow({ back: { laneTorch: 40 }, prev: { laneTorch: 32 }, cur: { laneTorch: 45 } })
  assert.equal(swing2, "the torch lane's own trend (v0.976.89): the torch lane's own swing - 40 -> 32 (-8) -> 45 (+13) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = torchLaneTrendRow({ back: { laneTorch: 37 }, prev: { laneTorch: 41 }, cur: { laneTorch: 39 } })
  assert.equal(swing3, "the torch lane's own trend (v0.976.89): the torch lane's own swing - 37 -> 41 (+4) -> 39 (-2) - the rise and the fall traded seats between the walks " + TAIL)
  // THE TORCH LANE'S OWN FADE byte-exact - THE FIELD'S OWN CHAINS:
  // the FACE 350 chain (348 rode 35, 349 rode 33, 350 rode 25) and
  // the FACE 362 chain (360 rode 39, 361 rode 33, 362 rode 31) - the
  // lane's own easing (the F361/F362 pair two fades straight, the
  // sweeps' own two-fade exit v0.976.88 mirrored one book down)
  const fadeField1 = torchLaneTrendRow({ back: { laneTorch: 35 }, prev: { laneTorch: 33 }, cur: { laneTorch: 25 } })
  assert.equal(fadeField1, "the torch lane's own trend (v0.976.89): the torch lane's fall ran two steps deep - 35 -> 33 (-2) -> 25 (-8) - the torch lane's own fade " + TAIL)
  const fadeField2 = torchLaneTrendRow({ back: { laneTorch: 39 }, prev: { laneTorch: 33 }, cur: { laneTorch: 31 } })
  assert.equal(fadeField2, "the torch lane's own trend (v0.976.89): the torch lane's fall ran two steps deep - 39 -> 33 (-6) -> 31 (-2) - the torch lane's own fade " + TAIL)
  // THE TORCH LANE'S OWN SWELL byte-exact - the branch the sixteen
  // priced faces never rode (the lane never built two rises straight
  // - the commons' own ask breathes in trades, the yard's own law
  // mirrored; the law prices it, the bars never invent it)
  const swell = torchLaneTrendRow({ back: { laneTorch: 20 }, prev: { laneTorch: 31 }, cur: { laneTorch: 45 } })
  assert.equal(swell, "the torch lane's own trend (v0.976.89): the torch lane's rise ran two steps deep - 20 -> 31 (+11) -> 45 (+14) - the torch lane's own swell " + TAIL)
  // THE HONEST SILENCES - THE FIELD'S OWN HOLDS RODE THE BIRTH (the
  // family's own first mixed birth): the FACE 358 chain the held
  // second step 38 -> 37 (-1) -> 37 (0), the FACE 359 chain the held
  // first step 37 -> 37 (0) -> 41 (+4), the clean trio 40 -> 40 ->
  // 40, and the held both steps 37 -> 37 -> 37 (the family's own
  // held law - the bars never invent)
  assert.equal(torchLaneTrendRow({ back: { laneTorch: 38 }, prev: { laneTorch: 37 }, cur: { laneTorch: 37 } }), null)
  assert.equal(torchLaneTrendRow({ back: { laneTorch: 37 }, prev: { laneTorch: 37 }, cur: { laneTorch: 41 } }), null)
  assert.equal(torchLaneTrendRow({ back: { laneTorch: 40 }, prev: { laneTorch: 40 }, cur: { laneTorch: 40 } }), null)
  assert.equal(torchLaneTrendRow({ back: { laneTorch: 37 }, prev: { laneTorch: 37 }, cur: { laneTorch: 37 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the sweep's own seat, the chest's
  // own close, the rent's own seat, the dry read's own clock, the
  // tithe's own clock, the starvation's own grand total, the sweeps'
  // own trend) - the names ride by law, the neighbor VERDICTS never
  // ride
  for (const row of [swing1, swing2, swing3, fadeField1, fadeField2, swell]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(torchLaneTrendConsistent({ back: { laneTorch: 33 }, prev: { laneTorch: 25 }, cur: { laneTorch: 0.5 } }), false)
  assert.equal(torchLaneTrendConsistent({ back: { laneTorch: 33 }, prev: { laneTorch: -1 }, cur: { laneTorch: 0 } }), false)
  assert.equal(torchLaneTrendConsistent({ back: { laneTorch: 33 }, prev: { laneTorch: 25 } }), false)
  assert.equal(torchLaneTrendConsistent({ back: { laneTorch: '33' }, prev: { laneTorch: 25 }, cur: { laneTorch: 35 } }), false)
  assert.equal(torchLaneTrendConsistent(null), false)
  assert.equal(torchLaneTrendConsistent([]), false)
  assert.equal(torchLaneTrendConsistent({ back: { laneTorch: 33 }, prev: { laneTorch: 25 }, cur: { laneTorch: 35 } }), true)
  assert.equal(torchLaneTrendRow({ back: { laneTorch: 33 }, prev: { laneTorch: 25 }, cur: { laneTorch: 0.5 } }), null)
  assert.equal(torchLaneTrendRow({ back: { laneTorch: '33' }, prev: { laneTorch: 25 }, cur: { laneTorch: 35 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // three synthetic faces folded by the SAME ledger the wires run
  // (commonsLedger owns the laneTorch count - the same cell the
  // sweeps line holds: "torch lane N"; the ask arms the lane - the
  // ask line, the anchor line, the no-yard close, the ask's own
  // stillDry close (EVERY ask's next torch line is the stillDry -
  // the ledger's own live-verified law): one torch sweep a quartet): the back face's thirty-three torch sweeps, the prev face's
  // twenty-five, the cur face's thirty-five - the chain 33 -> 25 (-8)
  // -> 35 (+10) rides the FACE 351 swing byte-exact
  const torchFace = (n) => Array.from({ length: n }, () => ['F1 [F1] craft torches: pocket coal dry (sticks 1) - the torch-coal resupply asks the commons (2 coal)', 'F1 fuel commons: the anchor chest is read first', 'F1 fuel commons: no yard chest in range', 'F1 [F1] craft torches: skip (no coal: sticks 1 coals 0)']).flat()
  const backTorch = commonsLedger(torchFace(33)).totals.laneTorch
  const prevTorch = commonsLedger(torchFace(25)).totals.laneTorch
  const curTorch = commonsLedger(torchFace(35)).totals.laneTorch
  assert.equal(backTorch, 33)
  assert.equal(prevTorch, 25)
  assert.equal(curTorch, 35)
  assert.equal(torchLaneTrendRow({ back: { laneTorch: backTorch }, prev: { laneTorch: prevTorch }, cur: { laneTorch: curTorch } }),
    "the torch lane's own trend (v0.976.89): the torch lane's own swing - 33 -> 25 (-8) -> 35 (+10) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FOLD'S OWN CHAIN - the field's own FACE 362 ride through the
  // ledger's own images: the back face's thirty-nine, the prev face's
  // thirty-three, the cur face's thirty-one - the fade rides the same
  // byte the field priced
  const foldBack = commonsLedger(torchFace(39)).totals.laneTorch
  const foldPrev = commonsLedger(torchFace(33)).totals.laneTorch
  const foldCur = commonsLedger(torchFace(31)).totals.laneTorch
  assert.equal(torchLaneTrendRow({ back: { laneTorch: foldBack }, prev: { laneTorch: foldPrev }, cur: { laneTorch: foldCur } }),
    "the torch lane's own trend (v0.976.89): the torch lane's fall ran two steps deep - 39 -> 33 (-6) -> 31 (-2) - the torch lane's own fade " + TAIL)
  // THE SMELT LANE NEVER JOINS - a different lane, a different book:
  // the unasked visit (the anchor without the ask) rides the smelt
  // lane's own count, the torch cell unmoved - the word prices the
  // ask's own lane alone
  const smeltFace = (n) => Array.from({ length: n }, () => ['F1 fuel commons: the anchor chest is read first', 'F1 fuel commons: no yard chest in range']).flat()
  const mixed = commonsLedger([...torchFace(2), ...smeltFace(3)]).totals
  assert.equal(mixed.laneTorch, 2)
  assert.equal(mixed.laneSmelt, 3)
  assert.equal(mixed.sweeps, 5)
  assert.equal(torchLaneTrendRow({ back: { laneTorch: mixed.laneTorch }, prev: { laneTorch: 4 }, cur: { laneTorch: 1 } }),
    "the torch lane's own trend (v0.976.89): the torch lane's own swing - 2 -> 4 (+2) -> 1 (-3) - the rise and the fall traded seats between the walks " + TAIL)
})
