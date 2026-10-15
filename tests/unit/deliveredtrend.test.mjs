import { test } from 'node:test'
import assert from 'node:assert/strict'
import { deliveredTrendRow, deliveredTrendConsistent } from '../../src/lib/deliveredtrend.mjs'
import { commonsLedger } from '../../src/lib/commonsledger.mjs'

test("the delivered's own trend (v0.976.92) - the commons ledger's delivery book's trend seat, the fence, the word", () => {
  // THE WORD BORN WHOLE AND SILENT - THE FIELD'S OWN CHAINS: the
  // delivered's own count rode 0 on EVERY priced face (347..364 -
  // the yard's own long dry: the sweeps walk, the chests give
  // nothing back) - every chain the field has held 0 -> 0 -> 0, the
  // honest silence (the family's second all-silent birth, the
  // waterline kill's own v0.976.87 the mirror): the FACE 349 chain
  // (347/348/349 all rode 0), the FACE 354 chain, the FACE 363
  // chain, the FACE 364 chain - THE SILENCE PROOF byte-exact (the
  // dry-shore kill's own precedent v0.976.85: the silent seat ships
  // whole, the storm arrives later)
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, this word prices the delivered's own mass across the walks, co-existence by seat never by duplication)"
  assert.equal(deliveredTrendRow({ back: { delivered: 0 }, prev: { delivered: 0 }, cur: { delivered: 0 } }), null)
  assert.equal(deliveredTrendRow({ back: { delivered: 0 }, prev: { delivered: 0 }, cur: { delivered: 0 } }), null)
  assert.equal(deliveredTrendRow({ back: { delivered: 0 }, prev: { delivered: 0 }, cur: { delivered: 0 } }), null)
  assert.equal(deliveredTrendRow({ back: { delivered: 0 }, prev: { delivered: 0 }, cur: { delivered: 0 } }), null)
  // THE DELIVERED'S OWN SWING byte-exact - the branch the yard's own
  // waking will ride (the field has not held it yet; the law prices
  // it, the bars never invent it): the refill chains the drought's
  // own exit
  const swing1 = deliveredTrendRow({ back: { delivered: 1 }, prev: { delivered: 3 }, cur: { delivered: 2 } })
  assert.equal(swing1, "the delivered's own trend (v0.976.92): the delivered's own swing - 1 -> 3 (+2) -> 2 (-1) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = deliveredTrendRow({ back: { delivered: 2 }, prev: { delivered: 5 }, cur: { delivered: 1 } })
  assert.equal(swing2, "the delivered's own trend (v0.976.92): the delivered's own swing - 2 -> 5 (+3) -> 1 (-4) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = deliveredTrendRow({ back: { delivered: 3 }, prev: { delivered: 1 }, cur: { delivered: 4 } })
  assert.equal(swing3, "the delivered's own trend (v0.976.92): the delivered's own swing - 3 -> 1 (-2) -> 4 (+3) - the rise and the fall traded seats between the walks " + TAIL)
  // THE DELIVERED'S OWN FADE byte-exact - the yield's own easing
  // (the zero-cur lawful: the smelt lane's own zero precedent
  // v0.976.90 - the count zero a lawful count, the family speaks
  // across the zero)
  const fade1 = deliveredTrendRow({ back: { delivered: 4 }, prev: { delivered: 2 }, cur: { delivered: 1 } })
  assert.equal(fade1, "the delivered's own trend (v0.976.92): the delivered's fall ran two steps deep - 4 -> 2 (-2) -> 1 (-1) - the delivered's own fade " + TAIL)
  const fade2 = deliveredTrendRow({ back: { delivered: 5 }, prev: { delivered: 3 }, cur: { delivered: 0 } })
  assert.equal(fade2, "the delivered's own trend (v0.976.92): the delivered's fall ran two steps deep - 5 -> 3 (-2) -> 0 (-3) - the delivered's own fade " + TAIL)
  // THE DELIVERED'S OWN SWELL byte-exact - the branch the eighteen
  // priced faces never rode (the yard never built two rises straight
  // - the yard's own waking has not come yet)
  const swell = deliveredTrendRow({ back: { delivered: 1 }, prev: { delivered: 2 }, cur: { delivered: 4 } })
  assert.equal(swell, "the delivered's own trend (v0.976.92): the delivered's rise ran two steps deep - 1 -> 2 (+1) -> 4 (+2) - the delivered's own swell " + TAIL)
  // THE HONEST SILENCES - the family's own held law (the bars never
  // invent): the held second step 1 -> 2 (+1) -> 2 (0), the held
  // first step 2 -> 2 (0) -> 1 (-1), the clean trio 4 -> 4 -> 4, and
  // the held both steps 3 -> 3 -> 3
  assert.equal(deliveredTrendRow({ back: { delivered: 1 }, prev: { delivered: 2 }, cur: { delivered: 2 } }), null)
  assert.equal(deliveredTrendRow({ back: { delivered: 2 }, prev: { delivered: 2 }, cur: { delivered: 1 } }), null)
  assert.equal(deliveredTrendRow({ back: { delivered: 4 }, prev: { delivered: 4 }, cur: { delivered: 4 } }), null)
  assert.equal(deliveredTrendRow({ back: { delivered: 3 }, prev: { delivered: 3 }, cur: { delivered: 3 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the sweep's own seat, the chest's
  // own close, the rent's own seat, the dry read's own clock, the
  // tithe's own clock, the starvation's own grand total, the sweeps'
  // own trend, the torch lane's own trend, the smelt lane's own
  // trend, the asks' own trend) - the names ride by law, the
  // neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, fade1, fade2, swell]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie;
  // the ZERO count is lawful (the yard's own drought rides - the
  // field's own eighteen-face drought the proof)
  assert.equal(deliveredTrendConsistent({ back: { delivered: 1 }, prev: { delivered: 3 }, cur: { delivered: 0.5 } }), false)
  assert.equal(deliveredTrendConsistent({ back: { delivered: 1 }, prev: { delivered: -1 }, cur: { delivered: 0 } }), false)
  assert.equal(deliveredTrendConsistent({ back: { delivered: 1 }, prev: { delivered: 3 } }), false)
  assert.equal(deliveredTrendConsistent({ back: { delivered: '1' }, prev: { delivered: 3 }, cur: { delivered: 0 } }), false)
  assert.equal(deliveredTrendConsistent(null), false)
  assert.equal(deliveredTrendConsistent([]), false)
  assert.equal(deliveredTrendConsistent({ back: { delivered: 0 }, prev: { delivered: 0 }, cur: { delivered: 0 } }), true)
  assert.equal(deliveredTrendRow({ back: { delivered: 1 }, prev: { delivered: 3 }, cur: { delivered: 0.5 } }), null)
  assert.equal(deliveredTrendRow({ back: { delivered: '1' }, prev: { delivered: 3 }, cur: { delivered: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // three synthetic faces folded by the SAME ledger the wires run
  // (commonsLedger owns the delivered count - the same cell the
  // sweeps line holds: "delivered N (M units)"; the took's own visit
  // rides the delivered - the anchor line, the took close: one
  // delivered sweep a pair): the back face's three tooks, the prev
  // face's one, the cur face's three - the chain 3 -> 1 (-2) -> 3
  // (+2) rides the refill byte-exact (the swing the drought's own
  // exit - the word speaks when the yard wakes)
  const tookFace = (n) => Array.from({ length: n }, () => ['F1 fuel commons: the anchor chest is read first', 'F1 fuel commons: took 2 units (2 x coal) from a yard chest']).flat()
  const backTook = commonsLedger(tookFace(3)).totals.delivered
  const prevTook = commonsLedger(tookFace(1)).totals.delivered
  const curTook = commonsLedger(tookFace(3)).totals.delivered
  assert.equal(backTook, 3)
  assert.equal(prevTook, 1)
  assert.equal(curTook, 3)
  assert.equal(deliveredTrendRow({ back: { delivered: backTook }, prev: { delivered: prevTook }, cur: { delivered: curTook } }),
    "the delivered's own trend (v0.976.92): the delivered's own swing - 3 -> 1 (-2) -> 3 (+2) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FIELD'S OWN DROUGHT RIDE - the silence through the ledger's
  // own images: the dry sweeps (the anchor, the no-yard close) fold
  // delivered 0 on every face - the chain rides the honest silence
  // byte-lawful (the walk's own mass the sweeps' own word prices
  // beside - the cells never merge)
  const dryFace = (n) => Array.from({ length: n }, () => ['F1 fuel commons: the anchor chest is read first', 'F1 fuel commons: no yard chest in range']).flat()
  const droughtBack = commonsLedger(dryFace(2)).totals.delivered
  const droughtPrev = commonsLedger(dryFace(3)).totals.delivered
  const droughtCur = commonsLedger(dryFace(1)).totals.delivered
  assert.equal(droughtBack, 0)
  assert.equal(droughtPrev, 0)
  assert.equal(droughtCur, 0)
  assert.equal(deliveredTrendRow({ back: { delivered: droughtBack }, prev: { delivered: droughtPrev }, cur: { delivered: droughtCur } }), null)
  // THE SWEEP NEVER JOINS - the walk's own mass the sibling word
  // prices: the mixed face (the dry sweeps + the tooks) rides the
  // sweeps AND the delivered, this word prices the delivered alone
  // (the take's own cell, the walk unmoved by it)
  const mixed = commonsLedger([...dryFace(2), ...tookFace(3)]).totals
  assert.equal(mixed.sweeps, 5)
  assert.equal(mixed.delivered, 3)
  assert.equal(mixed.units, 6)
  assert.equal(deliveredTrendRow({ back: { delivered: mixed.delivered }, prev: { delivered: 5 }, cur: { delivered: 1 } }),
    "the delivered's own trend (v0.976.92): the delivered's own swing - 3 -> 5 (+2) -> 1 (-4) - the rise and the fall traded seats between the walks " + TAIL)
})
