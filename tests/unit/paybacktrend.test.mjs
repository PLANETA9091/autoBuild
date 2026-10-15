// tests/unit/paybacktrend.test.mjs - THE PAYBACK'S OWN TREND's own
// pin battery (v0.976.114): the field's own chains byte-exact, the
// honest silences, the byte-pin battery, the fence battery, the
// book's own read, the one-parser ride through the ledger's own
// shadow arithmetic (the invariant clipDebt = clipDebtReannounced
// + clipDebtOpen the book's own hold).
import { paybackOfLedger, paybackTrendConsistent, paybackTrendRow } from '../../src/lib/paybacktrend.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, this word prices the payback's own census across the walks, co-existence by seat never by duplication)"

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..379 (the
// ledger's own arithmetic: 5, 6, 2, 2, 0, 6, 4, 24, 8, 7, 5, 6, 11,
// 14, 3, 1, 1, 7, 12, 4, 11, 3, 2, 8, 8, 5, 10, 5, 6, 6, 4, 2 - the
// count left zero ONCE the face 352 the smelt ledger's own
// whole-ledger drought the six books' one-face exit rode together,
// THE FIELD'S OWN TOP 24 THE FACE 355 COUNT) - the word born
// speaking TWENTY-TWO chains deep (fourteen swings + five fades +
// three swells) with the EIGHT honest silences beside.
const P = { 348: 5, 349: 6, 350: 2, 351: 2, 352: 0, 353: 6, 354: 4, 355: 24, 356: 8, 357: 7, 358: 5, 359: 6, 360: 11, 361: 14, 362: 3, 363: 1, 364: 1, 365: 7, 366: 12, 367: 4, 368: 11, 369: 3, 370: 2, 371: 8, 372: 8, 373: 5, 374: 10, 375: 5, 376: 6, 377: 6, 378: 4, 379: 2 }
const w = (f) => paybackTrendRow({ back: { paybackChains: P[f - 2] }, prev: { paybackChains: P[f - 1] }, cur: { paybackChains: P[f] } })
const chains = {}
for (let f = 350; f <= 379; f++) chains[f] = w(f)

// THE WORD'S OWN BIRTH RIDE - the FACE 350 CHAIN THE SWING
assert.equal(chains[350], "the payback's own trend (v0.976.114): the payback's own swing - 5 -> 6 (+1) -> 2 (-4) - the rise and the fall traded seats between the walks " + TAIL)
// THE HONEST SILENCE LAW - the FACE 351/352 held pair (the drought's
// own floor the zero a lawful count)
assert.equal(chains[351], null)
assert.equal(chains[352], null)
// the drought's own exit - the FACE 353 CHAIN THE SWING
assert.equal(chains[353], "the payback's own trend (v0.976.114): the payback's own swing - 2 -> 0 (-2) -> 6 (+6) - the rise and the fall traded seats between the walks " + TAIL)
// the rally's own round trip - the FACE 354..356 chains (the +20 the
// field's own biggest single step)
assert.equal(chains[354], "the payback's own trend (v0.976.114): the payback's own swing - 0 -> 6 (+6) -> 4 (-2) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[355], "the payback's own trend (v0.976.114): the payback's own swing - 6 -> 4 (-2) -> 24 (+20) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[356], "the payback's own trend (v0.976.114): the payback's own swing - 4 -> 24 (+20) -> 8 (-16) - the rise and the fall traded seats between the walks " + TAIL)
// the rally's own drain - the FACE 357/358 chains the fades
assert.equal(chains[357], "the payback's own trend (v0.976.114): the payback's fall ran two steps deep - 24 -> 8 (-16) -> 7 (-1) - the payback's own fade " + TAIL)
assert.equal(chains[358], "the payback's own trend (v0.976.114): the payback's fall ran two steps deep - 8 -> 7 (-1) -> 5 (-2) - the payback's own fade " + TAIL)
// THE SWELLS - the FACE 360/361 chains (the build ran three faces
// deep 5 -> 6 -> 11 -> 14) and the FACE 366 chain (the rebuild)
assert.equal(chains[360], "the payback's own trend (v0.976.114): the payback's rise ran two steps deep - 5 -> 6 (+1) -> 11 (+5) - the payback's own swell " + TAIL)
assert.equal(chains[361], "the payback's own trend (v0.976.114): the payback's rise ran two steps deep - 6 -> 11 (+5) -> 14 (+3) - the payback's own swell " + TAIL)
assert.equal(chains[366], "the payback's own trend (v0.976.114): the payback's rise ran two steps deep - 1 -> 7 (+6) -> 12 (+5) - the payback's own swell " + TAIL)
// the build's own exit - the FACE 362 chain the swing, the FACE 363
// chain the fade
assert.equal(chains[362], "the payback's own trend (v0.976.114): the payback's own swing - 11 -> 14 (+3) -> 3 (-11) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[363], "the payback's own trend (v0.976.114): the payback's fall ran two steps deep - 14 -> 3 (-11) -> 1 (-2) - the payback's own fade " + TAIL)
// the floor's own wait - the FACE 364/365 held pair
assert.equal(chains[364], null)
assert.equal(chains[365], null)
// the shadow's own flicker - the FACE 367..371 chains
assert.equal(chains[367], "the payback's own trend (v0.976.114): the payback's own swing - 7 -> 12 (+5) -> 4 (-8) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[368], "the payback's own trend (v0.976.114): the payback's own swing - 12 -> 4 (-8) -> 11 (+7) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[369], "the payback's own trend (v0.976.114): the payback's own swing - 4 -> 11 (+7) -> 3 (-8) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[370], "the payback's own trend (v0.976.114): the payback's fall ran two steps deep - 11 -> 3 (-8) -> 2 (-1) - the payback's own fade " + TAIL)
assert.equal(chains[371], "the payback's own trend (v0.976.114): the payback's own swing - 3 -> 2 (-1) -> 8 (+6) - the rise and the fall traded seats between the walks " + TAIL)
// the summit's own wait - the FACE 372/373 held pair
assert.equal(chains[372], null)
assert.equal(chains[373], null)
// the trade's own flicker - the FACE 374..376 chains
assert.equal(chains[374], "the payback's own trend (v0.976.114): the payback's own swing - 8 -> 5 (-3) -> 10 (+5) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[375], "the payback's own trend (v0.976.114): the payback's own swing - 5 -> 10 (+5) -> 5 (-5) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[376], "the payback's own trend (v0.976.114): the payback's own swing - 10 -> 5 (-5) -> 6 (+1) - the rise and the fall traded seats between the walks " + TAIL)
// the clean waits - the FACE 377/378 held pair
assert.equal(chains[377], null)
assert.equal(chains[378], null)
// THE WORD'S OWN LIVE WINDOW - the FACE 379 CHAIN THE FADE 6 -> 4
// (-2) -> 2 (-2)
assert.equal(chains[379], "the payback's own trend (v0.976.114): the payback's fall ran two steps deep - 6 -> 4 (-2) -> 2 (-2) - the payback's own fade " + TAIL)
// THE TALLY - twenty-two speaking + eight honest silences = the
// thirty windows the field priced
const speaking = Object.values(chains).filter(r => r !== null)
assert.equal(speaking.length, 22)
assert.equal(speaking.filter(r => r.includes("the payback's own swing")).length, 14)
assert.equal(speaking.filter(r => r.includes("the payback's own fade")).length, 5)
assert.equal(speaking.filter(r => r.includes("the payback's own swell")).length, 3)

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
assert.equal(paybackTrendRow(null), null)
assert.equal(paybackTrendRow(undefined), null)
assert.equal(paybackTrendRow('payback'), null)
assert.equal(paybackTrendRow([1, 2, 3]), null)
assert.equal(paybackTrendRow({ back: { paybackChains: 1.5 }, prev: { paybackChains: 0 }, cur: { paybackChains: 0 } }), null)
assert.equal(paybackTrendRow({ back: { paybackChains: -1 }, prev: { paybackChains: 0 }, cur: { paybackChains: 0 } }), null)
assert.equal(paybackTrendRow({ back: { paybackChains: 1 }, prev: { paybackChains: '2' }, cur: { paybackChains: 0 } }), null)
assert.equal(paybackTrendRow({ back: { paybackChains: 1 }, prev: { paybackChains: 2 } }), null)
assert.equal(paybackTrendRow({ back: null, prev: { paybackChains: 2 }, cur: { paybackChains: 0 } }), null)
assert.equal(paybackTrendConsistent({ back: { paybackChains: 0 }, prev: { paybackChains: 0 }, cur: { paybackChains: 0 } }), true)
assert.equal(paybackTrendConsistent({ back: { paybackChains: 0 }, prev: { paybackChains: 0 }, cur: { paybackChains: 0.5 } }), false)
// the family fence never rejects extra keys - the extra key rides
assert.equal(paybackTrendConsistent({ back: { paybackChains: 1, extra: true }, prev: { paybackChains: 2, extra: true }, cur: { paybackChains: 3, extra: true } }), true)
assert.equal(paybackTrendRow({ back: { paybackChains: 1, extra: true }, prev: { paybackChains: 2, extra: true }, cur: { paybackChains: 4, extra: true } }), "the payback's own trend (v0.976.114): the payback's rise ran two steps deep - 1 -> 2 (+1) -> 4 (+2) - the payback's own swell " + TAIL)

// THE BOOK'S OWN READ - the ledger's own paybackChains count (the
// answer book beside the start book and the yield book - the SAME
// ledger's own cell); unknown shapes read zero
assert.equal(paybackOfLedger({ paybackChains: 24 }), 24)
assert.equal(paybackOfLedger({ paybackChains: 0 }), 0)
assert.equal(paybackOfLedger({}), 0)
assert.equal(paybackOfLedger(null), 0)
assert.equal(paybackOfLedger(undefined), 0)
assert.equal(paybackOfLedger({ paybackChains: -3 }), 0)

// ONE-PARSER RIDE - the SAME smeltLedger images the fleet reader
// holds: the shadow's own arithmetic (the clip's promise the
// answer's own verification - a clip line whose later START the
// same bot+item answers IS the promised return; the invariant
// clipDebt = clipDebtReannounced + clipDebtOpen the book's own
// hold; a START before any clip mints nothing - the order is the
// law)
const led = smeltLedger([
  '[F2] smelting 8 x sand in a furnace (fuel: 4 x coal)',
  '[F2] fuel clips the batch: 3 x coal completes 5 of 8 x sand',
  '[F2] smelting 3 x sand in a furnace (fuel: 2 x coal)'
])
assert.equal(led.paybackChains, 1)
assert.equal(led.clipDebt, 3)
assert.equal(led.clipDebtReannounced, 3)
assert.equal(led.clipDebtOpen, 0)
assert.equal(paybackOfLedger(led), 1)
assert.equal(paybackTrendRow({ back: { paybackChains: 5 }, prev: { paybackChains: 2 }, cur: { paybackChains: paybackOfLedger(led) } }), "the payback's own trend (v0.976.114): the payback's fall ran two steps deep - 5 -> 2 (-3) -> 1 (-1) - the payback's own fade " + TAIL)
// the order is the law - a START before any clip mints nothing
const early = smeltLedger([
  '[F2] smelting 3 x sand in a furnace (fuel: 2 x coal)',
  '[F2] smelting 8 x sand in a furnace (fuel: 4 x coal)',
  '[F2] fuel clips the batch: 3 x coal completes 5 of 8 x sand'
])
assert.equal(early.paybackChains, 0)
assert.equal(paybackOfLedger(early), 0)
