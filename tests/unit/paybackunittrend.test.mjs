// tests/unit/paybackunittrend.test.mjs - THE PAYBACK UNIT'S OWN
// TREND's own pin battery (v0.976.115): the field's own chains
// byte-exact, the honest silences, the byte-pin battery, the fence
// battery, the book's own read, the one-parser ride through the
// ledger's own shadow arithmetic (the units ride beside the chains
// they answer - the invariant clipDebt = clipDebtReannounced +
// clipDebtOpen the book's own hold).
import { paybackUnitsOfLedger, paybackUnitTrendConsistent, paybackUnitTrendRow } from '../../src/lib/paybackunittrend.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, this word prices the payback's own size across the walks, co-existence by seat never by duplication)"

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..380 (the
// ledger's own arithmetic: 10, 11, 4, 2, 0, 13, 16, 52, 18, 18, 9,
// 16, 16, 33, 4, 1, 7, 20, 29, 14, 15, 8, 8, 11, 18, 6, 20, 48, 22,
// 16, 5, 9, 11 - the count left zero ONCE the face 352 the smelt
// ledger's own whole-ledger drought the six books' one-face exit
// rode together, THE FIELD'S OWN TOP 52 THE FACE 355 COUNT the +36
// the field's own biggest single step) - the word born speaking
// THIRTY-ONE windows deep (thirteen swings + five fades + seven
// swells) with the SIX honest silences beside.
const P = { 348: 10, 349: 11, 350: 4, 351: 2, 352: 0, 353: 13, 354: 16, 355: 52, 356: 18, 357: 18, 358: 9, 359: 16, 360: 16, 361: 33, 362: 4, 363: 1, 364: 7, 365: 20, 366: 29, 367: 14, 368: 15, 369: 8, 370: 8, 371: 11, 372: 18, 373: 6, 374: 20, 375: 48, 376: 22, 377: 16, 378: 5, 379: 9, 380: 11 }
const w = (f) => paybackUnitTrendRow({ back: { paybackUnits: P[f - 2] }, prev: { paybackUnits: P[f - 1] }, cur: { paybackUnits: P[f] } })
const chains = {}
for (let f = 350; f <= 380; f++) chains[f] = w(f)

// the FACE 350 chain the swing
assert.equal(chains[350], "the payback unit's own trend (v0.976.115): the payback unit's own swing - 10 -> 11 (+1) -> 4 (-7) - the rise and the fall traded seats between the walks " + TAIL)
// the drought's own slide - the FACE 351/352 chains the fades (the
// zero a lawful count)
assert.equal(chains[351], "the payback unit's own trend (v0.976.115): the payback unit's fall ran two steps deep - 11 -> 4 (-7) -> 2 (-2) - the payback unit's own fade " + TAIL)
assert.equal(chains[352], "the payback unit's own trend (v0.976.115): the payback unit's fall ran two steps deep - 4 -> 2 (-2) -> 0 (-2) - the payback unit's own fade " + TAIL)
// the drought's own exit - the FACE 353 chain the swing
assert.equal(chains[353], "the payback unit's own trend (v0.976.115): the payback unit's own swing - 2 -> 0 (-2) -> 13 (+13) - the rise and the fall traded seats between the walks " + TAIL)
// THE SWELLS - the FACE 354/355 chains (the build's own peak, the
// +36 the field's own biggest single step)
assert.equal(chains[354], "the payback unit's own trend (v0.976.115): the payback unit's rise ran two steps deep - 0 -> 13 (+13) -> 16 (+3) - the payback unit's own swell " + TAIL)
assert.equal(chains[355], "the payback unit's own trend (v0.976.115): the payback unit's rise ran two steps deep - 13 -> 16 (+3) -> 52 (+36) - the payback unit's own swell " + TAIL)
// the round trip - the FACE 356 chain the swing
assert.equal(chains[356], "the payback unit's own trend (v0.976.115): the payback unit's own swing - 16 -> 52 (+36) -> 18 (-34) - the rise and the fall traded seats between the walks " + TAIL)
// the summit's own wait - the FACE 357/358 held pair
assert.equal(chains[357], null)
assert.equal(chains[358], null)
// the shadow's own flicker - the FACE 359 chain the swing
assert.equal(chains[359], "the payback unit's own trend (v0.976.115): the payback unit's own swing - 18 -> 9 (-9) -> 16 (+7) - the rise and the fall traded seats between the walks " + TAIL)
// the held pair - the FACE 360/361 (the build's own wait)
assert.equal(chains[360], null)
assert.equal(chains[361], null)
// the build's own exit - the FACE 362 chain the swing, the FACE 363
// chain the fade
assert.equal(chains[362], "the payback unit's own trend (v0.976.115): the payback unit's own swing - 16 -> 33 (+17) -> 4 (-29) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[363], "the payback unit's own trend (v0.976.115): the payback unit's fall ran two steps deep - 33 -> 4 (-29) -> 1 (-3) - the payback unit's own fade " + TAIL)
// the rebuild's own build - the FACE 364 chain the swing, THE FACE
// 365/366 CHAINS THE SWELLS
assert.equal(chains[364], "the payback unit's own trend (v0.976.115): the payback unit's own swing - 4 -> 1 (-3) -> 7 (+6) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[365], "the payback unit's own trend (v0.976.115): the payback unit's rise ran two steps deep - 1 -> 7 (+6) -> 20 (+13) - the payback unit's own swell " + TAIL)
assert.equal(chains[366], "the payback unit's own trend (v0.976.115): the payback unit's rise ran two steps deep - 7 -> 20 (+13) -> 29 (+9) - the payback unit's own swell " + TAIL)
// the flicker - the FACE 367..369 chains the swings
assert.equal(chains[367], "the payback unit's own trend (v0.976.115): the payback unit's own swing - 20 -> 29 (+9) -> 14 (-15) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[368], "the payback unit's own trend (v0.976.115): the payback unit's own swing - 29 -> 14 (-15) -> 15 (+1) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[369], "the payback unit's own trend (v0.976.115): the payback unit's own swing - 14 -> 15 (+1) -> 8 (-7) - the rise and the fall traded seats between the walks " + TAIL)
// the held pair - the FACE 370/371
assert.equal(chains[370], null)
assert.equal(chains[371], null)
// the FACE 372 chain the swell
assert.equal(chains[372], "the payback unit's own trend (v0.976.115): the payback unit's rise ran two steps deep - 8 -> 11 (+3) -> 18 (+7) - the payback unit's own swell " + TAIL)
// the trade - the FACE 373/374 chains the swings
assert.equal(chains[373], "the payback unit's own trend (v0.976.115): the payback unit's own swing - 11 -> 18 (+7) -> 6 (-12) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[374], "the payback unit's own trend (v0.976.115): the payback unit's own swing - 18 -> 6 (-12) -> 20 (+14) - the rise and the fall traded seats between the walks " + TAIL)
// THE SECOND RALLY - the FACE 375 chain the swell
assert.equal(chains[375], "the payback unit's own trend (v0.976.115): the payback unit's rise ran two steps deep - 6 -> 20 (+14) -> 48 (+28) - the payback unit's own swell " + TAIL)
// the FACE 376 chain the swing
assert.equal(chains[376], "the payback unit's own trend (v0.976.115): the payback unit's own swing - 20 -> 48 (+28) -> 22 (-26) - the rise and the fall traded seats between the walks " + TAIL)
// the rally's own drain - the FACE 377/378 chains the fades
assert.equal(chains[377], "the payback unit's own trend (v0.976.115): the payback unit's fall ran two steps deep - 48 -> 22 (-26) -> 16 (-6) - the payback unit's own fade " + TAIL)
assert.equal(chains[378], "the payback unit's own trend (v0.976.115): the payback unit's fall ran two steps deep - 22 -> 16 (-6) -> 5 (-11) - the payback unit's own fade " + TAIL)
// the FACE 379 chain the swing
assert.equal(chains[379], "the payback unit's own trend (v0.976.115): the payback unit's own swing - 16 -> 5 (-11) -> 9 (+4) - the rise and the fall traded seats between the walks " + TAIL)
// THE WORD'S OWN LIVE WINDOW - the FACE 380 CHAIN THE SWELL 5 -> 9
// (+4) -> 11 (+2)
assert.equal(chains[380], "the payback unit's own trend (v0.976.115): the payback unit's rise ran two steps deep - 5 -> 9 (+4) -> 11 (+2) - the payback unit's own swell " + TAIL)
// THE TALLY - twenty-five speaking + six honest silences = the
// thirty-one windows the field priced
const speaking = Object.values(chains).filter(r => r !== null)
assert.equal(speaking.length, 25)
assert.equal(speaking.filter(r => r.includes("the payback unit's own swing")).length, 13)
assert.equal(speaking.filter(r => r.includes("the payback unit's own fade")).length, 5)
assert.equal(speaking.filter(r => r.includes("the payback unit's own swell")).length, 7)

// THE BYTE-PIN BATTERY - the trend row never speaks the shape's own
// verdict words (no return, no repeat, no stay, no run) nor the
// seats' own verdict word (no owns) nor the dynasty's own (no
// dynasty, no turn) - across every branch
for (const row of speaking) {
  assert.ok(!row.includes('return'))
  assert.ok(!row.includes('repeat'))
  assert.ok(!row.includes('stay'))
  assert.ok(!row.includes('run '))
  assert.ok(!row.includes('owns '))
  assert.ok(!row.includes('dynasty'))
  assert.ok(!row.includes('turn'))
  assert.ok(row.includes('co-existence by seat never by duplication'))
}

// THE FENCE BATTERY - a fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie); the ZERO
// count is lawful (the smelt lane's own zero precedent v0.976.90 -
// the field's own face 352 the proof); the family fence never
// rejects extra keys
assert.equal(paybackUnitTrendRow(null), null)
assert.equal(paybackUnitTrendRow(undefined), null)
assert.equal(paybackUnitTrendRow('paybackUnits'), null)
assert.equal(paybackUnitTrendRow([1, 2, 3]), null)
assert.equal(paybackUnitTrendRow({ back: { paybackUnits: 1.5 }, prev: { paybackUnits: 0 }, cur: { paybackUnits: 0 } }), null)
assert.equal(paybackUnitTrendRow({ back: { paybackUnits: -1 }, prev: { paybackUnits: 0 }, cur: { paybackUnits: 0 } }), null)
assert.equal(paybackUnitTrendRow({ back: { paybackUnits: 1 }, prev: { paybackUnits: '2' }, cur: { paybackUnits: 0 } }), null)
assert.equal(paybackUnitTrendRow({ back: { paybackUnits: 1 }, prev: { paybackUnits: 2 } }), null)
assert.equal(paybackUnitTrendRow({ back: null, prev: { paybackUnits: 2 }, cur: { paybackUnits: 0 } }), null)
assert.equal(paybackUnitTrendConsistent({ back: { paybackUnits: 0 }, prev: { paybackUnits: 0 }, cur: { paybackUnits: 0 } }), true)
assert.equal(paybackUnitTrendConsistent({ back: { paybackUnits: 0 }, prev: { paybackUnits: 0 }, cur: { paybackUnits: 0.5 } }), false)
// the family fence never rejects extra keys - the extra key rides
assert.equal(paybackUnitTrendConsistent({ back: { paybackUnits: 1, extra: true }, prev: { paybackUnits: 2, extra: true }, cur: { paybackUnits: 3, extra: true } }), true)
assert.equal(paybackUnitTrendRow({ back: { paybackUnits: 1, extra: true }, prev: { paybackUnits: 2, extra: true }, cur: { paybackUnits: 4, extra: true } }), "the payback unit's own trend (v0.976.115): the payback unit's rise ran two steps deep - 1 -> 2 (+1) -> 4 (+2) - the payback unit's own swell " + TAIL)

// THE BOOK'S OWN READ - the ledger's own paybackUnits count (the
// answer book's size cell beside the chains' census - the SAME
// ledger's own cell); unknown shapes read zero
assert.equal(paybackUnitsOfLedger({ paybackUnits: 52 }), 52)
assert.equal(paybackUnitsOfLedger({ paybackUnits: 0 }), 0)
assert.equal(paybackUnitsOfLedger({}), 0)
assert.equal(paybackUnitsOfLedger(null), 0)
assert.equal(paybackUnitsOfLedger(undefined), 0)
assert.equal(paybackUnitsOfLedger({ paybackUnits: -3 }), 0)

// ONE-PARSER RIDE - the SAME smeltLedger images the fleet reader
// holds: the shadow's own arithmetic (the clip's promise the
// answer's own verification - a clip line whose later START the
// same bot+item answers IS the promised return; the units ride
// beside the chain they answer - the answering START's own N the
// units the re-smelt announced; the invariant clipDebt =
// clipDebtReannounced + clipDebtOpen the book's own hold; a START
// before any clip mints nothing - the order is the law)
const led = smeltLedger([
  '[F2] smelting 8 x sand in a furnace (fuel: 4 x coal)',
  '[F2] fuel clips the batch: 3 x coal completes 5 of 8 x sand',
  '[F2] smelting 3 x sand in a furnace (fuel: 2 x coal)'
])
assert.equal(led.paybackChains, 1)
assert.equal(led.paybackUnits, 3)
assert.equal(led.clipDebt, 3)
assert.equal(led.clipDebtReannounced, 3)
assert.equal(led.clipDebtOpen, 0)
assert.equal(paybackUnitsOfLedger(led), 3)
assert.equal(paybackUnitTrendRow({ back: { paybackUnits: 48 }, prev: { paybackUnits: 22 }, cur: { paybackUnits: paybackUnitsOfLedger(led) } }), "the payback unit's own trend (v0.976.115): the payback unit's fall ran two steps deep - 48 -> 22 (-26) -> 3 (-19) - the payback unit's own fade " + TAIL)
// the order is the law - a START before any clip mints nothing
const early = smeltLedger([
  '[F2] smelting 3 x sand in a furnace (fuel: 2 x coal)',
  '[F2] smelting 8 x sand in a furnace (fuel: 4 x coal)',
  '[F2] fuel clips the batch: 3 x coal completes 5 of 8 x sand'
])
assert.equal(early.paybackChains, 0)
assert.equal(early.paybackUnits, 0)
assert.equal(paybackUnitsOfLedger(early), 0)
