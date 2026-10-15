import { test } from 'node:test'
import assert from 'node:assert/strict'
import { budgetTrendRow, budgetTrendConsistent } from '../../src/lib/budgettrend.mjs'
import { commonsLedger } from '../../src/lib/commonsledger.mjs'

test("the budget's own trend (v0.976.93) - the commons ledger's budget book's trend seat, the fence, the word", () => {
  // THE FIELD'S OWN CHAINS - the word born speaking FOURTEEN chains
  // deep (eight swings + three swells + three fades) with the TWO
  // honest silences riding beside: the budget's own count face by
  // face 348=29, 349=30, 350=22, 351=27, 352=27, 353=13, 354=24,
  // 355=28, 356=31, 357=23, 358=20, 359=15, 360=32, 361=26, 362=19,
  // 363=24, 364=26, 365=23 (the ledger's own arithmetic, the
  // book law verified on every priced face: sweeps = delivered +
  // budgetSpent + silentExhaust + ghost + noChest)
  const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the walks' own total mass across the faces, the torch lane's own trend prices the ask's own lane's class count across the walks, the smelt lane's own trend prices the silent leg's own class count across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, this word prices the budget's own class count across the walks, co-existence by seat never by duplication)"
  // THE FIELD'S OWN SILENCES byte-lawful - the face 352 chain the
  // held second step, the face 353 chain the held first step (the
  // two holds the field priced - the bars never invent)
  assert.equal(budgetTrendRow({ back: { budget: 22 }, prev: { budget: 27 }, cur: { budget: 27 } }), null)
  assert.equal(budgetTrendRow({ back: { budget: 27 }, prev: { budget: 27 }, cur: { budget: 13 } }), null)
  // THE FIELD'S OWN SWINGS byte-exact x3 - the face 350 chain, the
  // face 354 chain, the face 360 chain (the field's own widest
  // trade 20 -> 15 (-5) -> 32 (+17))
  const swing1 = budgetTrendRow({ back: { budget: 29 }, prev: { budget: 30 }, cur: { budget: 22 } })
  assert.equal(swing1, "the budget's own trend (v0.976.93): the budget's own swing - 29 -> 30 (+1) -> 22 (-8) - the rise and the fall traded seats between the walks " + TAIL)
  const swing2 = budgetTrendRow({ back: { budget: 27 }, prev: { budget: 13 }, cur: { budget: 24 } })
  assert.equal(swing2, "the budget's own trend (v0.976.93): the budget's own swing - 27 -> 13 (-14) -> 24 (+11) - the rise and the fall traded seats between the walks " + TAIL)
  const swing3 = budgetTrendRow({ back: { budget: 20 }, prev: { budget: 15 }, cur: { budget: 32 } })
  assert.equal(swing3, "the budget's own trend (v0.976.93): the budget's own swing - 20 -> 15 (-5) -> 32 (+17) - the rise and the fall traded seats between the walks " + TAIL)
  // THE FIELD'S OWN SWELLS byte-exact x3 - THE FAMILY'S OWN FIRST
  // FIELD-RIDDEN SWELLS: the face 355/356 chains the double climb
  // (the commons family's own words priced the swell branch
  // un-ridden - the budget's own book breathes in climbs too), the
  // face 364 chain the third rise
  const swell1 = budgetTrendRow({ back: { budget: 13 }, prev: { budget: 24 }, cur: { budget: 28 } })
  assert.equal(swell1, "the budget's own trend (v0.976.93): the budget's rise ran two steps deep - 13 -> 24 (+11) -> 28 (+4) - the budget's own swell " + TAIL)
  const swell2 = budgetTrendRow({ back: { budget: 24 }, prev: { budget: 28 }, cur: { budget: 31 } })
  assert.equal(swell2, "the budget's own trend (v0.976.93): the budget's rise ran two steps deep - 24 -> 28 (+4) -> 31 (+3) - the budget's own swell " + TAIL)
  const swell3 = budgetTrendRow({ back: { budget: 19 }, prev: { budget: 24 }, cur: { budget: 26 } })
  assert.equal(swell3, "the budget's own trend (v0.976.93): the budget's rise ran two steps deep - 19 -> 24 (+5) -> 26 (+2) - the budget's own swell " + TAIL)
  // THE FIELD'S OWN FADES byte-exact x3 - the face 358/359 chains
  // two fades straight, the face 362 chain the third
  const fade1 = budgetTrendRow({ back: { budget: 31 }, prev: { budget: 23 }, cur: { budget: 20 } })
  assert.equal(fade1, "the budget's own trend (v0.976.93): the budget's fall ran two steps deep - 31 -> 23 (-8) -> 20 (-3) - the budget's own fade " + TAIL)
  const fade2 = budgetTrendRow({ back: { budget: 23 }, prev: { budget: 20 }, cur: { budget: 15 } })
  assert.equal(fade2, "the budget's own trend (v0.976.93): the budget's fall ran two steps deep - 23 -> 20 (-3) -> 15 (-5) - the budget's own fade " + TAIL)
  const fade3 = budgetTrendRow({ back: { budget: 32 }, prev: { budget: 26 }, cur: { budget: 19 } })
  assert.equal(fade3, "the budget's own trend (v0.976.93): the budget's fall ran two steps deep - 32 -> 26 (-6) -> 19 (-7) - the budget's own fade " + TAIL)
  // THE HONEST SILENCES - the family's own held law (the bars never
  // invent): the held second step, the held first step, the clean
  // trio, and the held both steps (the zero budget a lawful count
  // the while - the smelt lane's own zero precedent v0.976.90)
  assert.equal(budgetTrendRow({ back: { budget: 1 }, prev: { budget: 2 }, cur: { budget: 2 } }), null)
  assert.equal(budgetTrendRow({ back: { budget: 2 }, prev: { budget: 2 }, cur: { budget: 1 } }), null)
  assert.equal(budgetTrendRow({ back: { budget: 4 }, prev: { budget: 4 }, cur: { budget: 4 } }), null)
  assert.equal(budgetTrendRow({ back: { budget: 0 }, prev: { budget: 0 }, cur: { budget: 0 } }), null)
  // the byte-pin: the trend row never speaks the shape's own verdict
  // words (no return, no repeat, no stay, no run) nor the seats' own
  // verdict word (no owns) nor the dynasty's own (no dynasty, no
  // turn) - co-existence by seat never by duplication; the seat-law
  // tail names the neighbor seats (the sweep's own seat, the chest's
  // own close, the rent's own seat, the dry read's own clock, the
  // tithe's own clock, the starvation's own grand total, the sweeps'
  // own trend, the torch lane's own trend, the smelt lane's own
  // trend, the asks' own trend, the delivered's own trend) - the
  // names ride by law, the neighbor VERDICTS never ride
  for (const row of [swing1, swing2, swing3, swell1, swell2, swell3, fade1, fade2, fade3]) {
    assert.ok(!/\breturn\b|\brepeat\b|\bstay\b|\brun\b|\bowns\b|\bdynasty\b|\bturn\b/.test(row))
  }
  // the fence: the fold must prove itself (the word never rides a
  // lie) - fractional, negative, missing, string, junk folds lie;
  // the ZERO count is lawful (the budget's own zero no fence)
  assert.equal(budgetTrendConsistent({ back: { budget: 1 }, prev: { budget: 3 }, cur: { budget: 0.5 } }), false)
  assert.equal(budgetTrendConsistent({ back: { budget: 1 }, prev: { budget: -1 }, cur: { budget: 0 } }), false)
  assert.equal(budgetTrendConsistent({ back: { budget: 1 }, prev: { budget: 3 } }), false)
  assert.equal(budgetTrendConsistent({ back: { budget: '1' }, prev: { budget: 3 }, cur: { budget: 0 } }), false)
  assert.equal(budgetTrendConsistent(null), false)
  assert.equal(budgetTrendConsistent([]), false)
  assert.equal(budgetTrendConsistent({ back: { budget: 0 }, prev: { budget: 0 }, cur: { budget: 0 } }), true)
  assert.equal(budgetTrendRow({ back: { budget: 1 }, prev: { budget: 3 }, cur: { budget: 0.5 } }), null)
  assert.equal(budgetTrendRow({ back: { budget: '1' }, prev: { budget: 3 }, cur: { budget: 0 } }), null)
  // the one-parser law's own ride through the ledger's own images:
  // three synthetic faces folded by the SAME ledger the wires run
  // (commonsLedger owns the budgetSpent count - the same cell the
  // sweeps line holds: "budget-spent N"; the budget's own close
  // rides the budgetSpent - the anchor line, the budget spent
  // close: one budget sweep a pair): the back face's three budgets,
  // the prev face's one, the cur face's three - the chain 3 -> 1
  // (-2) -> 3 (+2) rides the refill byte-exact (the swing)
  const budgetFace = (n) => Array.from({ length: n }, () => ['F1 fuel commons: the anchor chest is read first', 'F1 fuel commons: budget spent (0/2 units)']).flat()
  const backBudget = commonsLedger(budgetFace(3)).totals.budgetSpent
  const prevBudget = commonsLedger(budgetFace(1)).totals.budgetSpent
  const curBudget = commonsLedger(budgetFace(3)).totals.budgetSpent
  assert.equal(backBudget, 3)
  assert.equal(prevBudget, 1)
  assert.equal(curBudget, 3)
  assert.equal(budgetTrendRow({ back: { budget: backBudget }, prev: { budget: prevBudget }, cur: { budget: curBudget } }),
    "the budget's own trend (v0.976.93): the budget's own swing - 3 -> 1 (-2) -> 3 (+2) - the rise and the fall traded seats between the walks " + TAIL)
  // THE BOOK LAW'S OWN RIDE - the ledger's own arithmetic through
  // the mixed face: the dry sweeps + the budgets + the took - the
  // sweeps hold the sum (delivered + budgetSpent + silentExhaust +
  // ghost + noChest), the close classes never merge
  const dryFace = (n) => Array.from({ length: n }, () => ['F1 fuel commons: the anchor chest is read first', 'F1 fuel commons: no yard chest in range']).flat()
  const tookFace = (n) => Array.from({ length: n }, () => ['F1 fuel commons: the anchor chest is read first', 'F1 fuel commons: took 2 units (2 x coal) from a yard chest']).flat()
  const mixed = commonsLedger([...dryFace(2), ...budgetFace(3), ...tookFace(1)]).totals
  assert.equal(mixed.sweeps, 6)
  assert.equal(mixed.budgetSpent, 3)
  assert.equal(mixed.delivered, 1)
  assert.equal(mixed.sweeps, mixed.delivered + mixed.budgetSpent + mixed.silentExhaust + mixed.ghost + mixed.noChest)
  // THE DELIVERED NEVER JOINS - the yield book's own mass the
  // sibling word prices: the mixed face rides the delivered AND the
  // budget, this word prices the budget alone (the budget's own
  // cell, the took unmoved by it)
  assert.equal(budgetTrendRow({ back: { budget: mixed.budgetSpent }, prev: { budget: 5 }, cur: { budget: 1 } }),
    "the budget's own trend (v0.976.93): the budget's own swing - 3 -> 5 (+2) -> 1 (-4) - the rise and the fall traded seats between the walks " + TAIL)
})
