import { test } from 'node:test'
import assert from 'node:assert/strict'
import { asksTrendRow, asksTrendConsistent } from '../../src/lib/askstrend.mjs'
import { commonsLedger } from '../../src/lib/commonsledger.mjs'

test("the asks' own trend (v0.976.91) - the commons ledger's request book's trend seat, the fence, the word", () => {
  // THE ASKS' OWN SWING byte-exact - THE FIELD'S OWN CHAINS: the
  // FACE 349 chain (347 rode 32, 348 rode 36, 349 rode 35), the FACE
  // 354 chain (352 rode 33, 353 rode 42, 354 rode 34), and the FACE
  // 360 chain (358 rode 37, 359 rode 41, 360 rode 39) - the pockets'
  // own hunger the word greeted on its birth ride (nine swings rode
  // the seventeen priced faces)
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the walks' own total mass across the faces, the torch lane's own trend prices the ask's own lane's class count across the walks, the smelt lane's own trend prices the silent leg's own class count across the walks, this word prices the asks' own count across the walks, co-existence by seat never by duplication)"
  const swing1 = asksTrendRow({ back: { asks: 32 }, prev: { asks: 36 }, cur: { asks: 35 } })
  assert.equal(swing1, "the asks' own trend (v0.976.91): the asks' own swing - 32 -> 36 (+4) -> 35 (-1) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = asksTrendRow({ back: { asks: 33 }, prev: { asks: 42 }, cur: { asks: 34 } })
  assert.equal(swing2, "the asks' own trend (v0.976.91): the asks' own swing - 33 -> 42 (+9) -> 34 (-8) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = asksTrendRow({ back: { asks: 37 }, prev: { asks: 41 }, cur: { asks: 39 } })
  assert.equal(swing3, "the asks' own trend (v0.976.91): the asks' own swing - 37 -> 41 (+4) -> 39 (-2) - the rise and the fall traded seats between the walks " + TAIL)
  // THE ASKS' OWN FADE byte-exact - THE FIELD'S OWN CHAINS: the FACE
  // 350 chain (348 rode 36, 349 rode 35, 350 rode 25), the FACE 361
  // chain (359 rode 41, 360 rode 39, 361 rode 33), and the FACE 362
  // chain (360 rode 39, 361 rode 33, 362 rode 31) - the pockets' own
  // easing closing the birth window
  const fadeField1 = asksTrendRow({ back: { asks: 36 }, prev: { asks: 35 }, cur: { asks: 25 } })
  assert.equal(fadeField1, "the asks' own trend (v0.976.91): the asks' fall ran two steps deep - 36 -> 35 (-1) -> 25 (-10) - the asks' own fade " + TAIL)
  const fadeField2 = asksTrendRow({ back: { asks: 41 }, prev: { asks: 39 }, cur: { asks: 33 } })
  assert.equal(fadeField2, "the asks' own trend (v0.976.91): the asks' fall ran two steps deep - 41 -> 39 (-2) -> 33 (-6) - the asks' own fade " + TAIL)
  const fadeField3 = asksTrendRow({ back: { asks: 39 }, prev: { asks: 33 }, cur: { asks: 31 } })
  assert.equal(fadeField3, "the asks' own trend (v0.976.91): the asks' fall ran two steps deep - 39 -> 33 (-6) -> 31 (-2) - the asks' own fade " + TAIL)
  // THE ASKS' OWN SWELL byte-exact - the branch the seventeen priced
  // faces never rode (the asks never built two rises straight - the
  // pockets' own hunger breathes in trades; the law prices it, the
  // bars never invent it; the values the field held on other faces
  // ride the shape: the 25's own trough, the 36's own climb, the 45's
  // own crest)
  const swell = asksTrendRow({ back: { asks: 25 }, prev: { asks: 36 }, cur: { asks: 45 } })
  assert.equal(swell, "the asks' own trend (v0.976.91): the asks' rise ran two steps deep - 25 -> 36 (+11) -> 45 (+9) - the asks' own swell " + TAIL)
  // THE HONEST SILENCES - the field's own THREE holds: the FACE 357
  // chain the held second step 45 -> 38 (-7) -> 38 (0), the FACE 358
  // chain the held first step 38 -> 38 (0) -> 37 (-1), and THE FACE
  // 363 CHAIN - THE WORD'S OWN BIRTH RIDE - the held second step 33
  // -> 31 (-2) -> 31 (0) (the ask's own settle closing the two
  // fades' own window; the re-verdict's own FACE 350 arrival the
  // precedent), plus the clean trio 38 -> 38 -> 38 and the held both
  // steps (the family's own held law - the bars never invent)
  assert.equal(asksTrendRow({ back: { asks: 45 }, prev: { asks: 38 }, cur: { asks: 38 } }), null)
  assert.equal(asksTrendRow({ back: { asks: 38 }, prev: { asks: 38 }, cur: { asks: 37 } }), null)
  assert.equal(asksTrendRow({ back: { asks: 33 }, prev: { asks: 31 }, cur: { asks: 31 } }), null)
  assert.equal(asksTrendRow({ back: { asks: 38 }, prev: { asks: 38 }, cur: { asks: 38 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the sweep's own seat, the chest's
  // own close, the rent's own seat, the dry read's own clock, the
  // tithe's own clock, the starvation's own grand total, the sweeps'
  // own trend, the torch lane's own trend, the smelt lane's own
  // trend) - the names ride by law, the neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, fadeField1, fadeField2, fadeField3, swell]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie
  assert.equal(asksTrendConsistent({ back: { asks: 33 }, prev: { asks: 31 }, cur: { asks: 0.5 } }), false)
  assert.equal(asksTrendConsistent({ back: { asks: 33 }, prev: { asks: -1 }, cur: { asks: 31 } }), false)
  assert.equal(asksTrendConsistent({ back: { asks: 33 }, prev: { asks: 31 } }), false)
  assert.equal(asksTrendConsistent({ back: { asks: '33' }, prev: { asks: 31 }, cur: { asks: 31 } }), false)
  assert.equal(asksTrendConsistent(null), false)
  assert.equal(asksTrendConsistent([]), false)
  assert.equal(asksTrendConsistent({ back: { asks: 33 }, prev: { asks: 31 }, cur: { asks: 31 } }), true)
  assert.equal(asksTrendConsistent({ back: { asks: 0 }, prev: { asks: 0 }, cur: { asks: 0 } }), true)
  assert.equal(asksTrendRow({ back: { asks: 33 }, prev: { asks: 31 }, cur: { asks: 0.5 } }), null)
  assert.equal(asksTrendRow({ back: { asks: '33' }, prev: { asks: 31 }, cur: { asks: 31 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // three synthetic faces folded by the SAME ledger the wires run
  // (commonsLedger owns the asks count - the SAME cell the summary
  // line holds: "asks N"): the back face's three asks, the prev
  // face's five, the cur face's two - the chain 3 -> 5 (+2) -> 2 (-3)
  // rides the swing byte-exact
  const askFace = (n) => Array.from({ length: n }, () => 'F1 [F1] craft torches: pocket coal dry (sticks 6) - the torch-coal resupply asks the commons (2 coal)')
  const backAsks = commonsLedger(askFace(3)).totals.asks
  const prevAsks = commonsLedger(askFace(5)).totals.asks
  const curAsks = commonsLedger(askFace(2)).totals.asks
  assert.equal(backAsks, 3)
  assert.equal(prevAsks, 5)
  assert.equal(curAsks, 2)
  assert.equal(asksTrendRow({ back: { asks: backAsks }, prev: { asks: prevAsks }, cur: { asks: curAsks } }),
    "the asks' own trend (v0.976.91): the asks' own swing - 3 -> 5 (+2) -> 2 (-3) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FOLD'S OWN CHAIN - the field's own FACE 363 birth ride
  // through the ledger's own images: the back face's thirty-three
  // asks, the prev face's thirty-one, the cur face's thirty-one -
  // the held second step rides the honest silence byte-lawful (the
  // word born on the silence the field held)
  const foldBack = commonsLedger(askFace(33)).totals.asks
  const foldPrev = commonsLedger(askFace(31)).totals.asks
  const foldCur = commonsLedger(askFace(31)).totals.asks
  assert.equal(asksTrendRow({ back: { asks: foldBack }, prev: { asks: foldPrev }, cur: { asks: foldCur } }), null)
  // THE CONSTANT'S OWN LAW - the ask's own sizing rides two units per
  // ask on every priced face (the askCoal held exactly 2x the asks:
  // the count is the book's own mass, the units never join)
  const sized = commonsLedger(askFace(4)).totals
  assert.equal(sized.asks, 4)
  assert.equal(sized.askCoal, 8)
})
