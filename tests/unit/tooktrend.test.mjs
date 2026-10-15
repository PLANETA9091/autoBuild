// tests/unit/tooktrend.test.mjs - THE TOOK'S OWN TREND's own pin
// battery (v0.976.112): the field's own chains byte-exact, the
// honest silences, the byte-pin battery, the fence battery, the
// book's own read, the one-parser ride through the SMELT_TOOK_RE
// grammar's own arithmetic.
import { tookOfLedger, tookTrendConsistent, tookTrendRow } from '../../src/lib/tooktrend.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, this word prices the took's own census across the walks, co-existence by seat never by duplication)"

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..378 (the
// ledger's own arithmetic: 15, 14, 6, 2, 0, 13, 7, 43, 19, 20, 13,
// 13, 19, 34, 4, 1, 11, 18, 27, 10, 18, 7, 10, 18, 21, 7, 29, 5,
// 22, 9, 9 - the count left zero ONCE the face 352 drought the
// smelt ledger's own whole-ledger drought the five books' one-face
// exit rode together, THE FIELD'S OWN TOP 43 THE FACE 355 COUNT)
// - the word born speaking TWENTY-SIX chains deep (seventeen swings
// + four fades + five swells) with the THREE honest silences beside
// (the F359/F360 held pair and the F378 live window).
const P = { 348: 15, 349: 14, 350: 6, 351: 2, 352: 0, 353: 13, 354: 7, 355: 43, 356: 19, 357: 20, 358: 13, 359: 13, 360: 19, 361: 34, 362: 4, 363: 1, 364: 11, 365: 18, 366: 27, 367: 10, 368: 18, 369: 7, 370: 10, 371: 18, 372: 21, 373: 7, 374: 29, 375: 5, 376: 22, 377: 9, 378: 9 }
const w = (f) => tookTrendRow({ back: { tooks: P[f - 2] }, prev: { tooks: P[f - 1] }, cur: { tooks: P[f] } })
const chains = {}
for (let f = 350; f <= 378; f++) chains[f] = w(f)

// THE WORD'S OWN BIRTH RIDE - the FACE 350 CHAIN THE FADE
assert.equal(chains[350], "the took's own trend (v0.976.112): the took's fall ran two steps deep - 15 -> 14 (-1) -> 6 (-8) - the took's own fade " + TAIL)
assert.equal(chains[351], "the took's own trend (v0.976.112): the took's fall ran two steps deep - 14 -> 6 (-8) -> 2 (-4) - the took's own fade " + TAIL)
// the drought's own floor - the FACE 352 CHAIN THE FADE (the zero a
// lawful count)
assert.equal(chains[352], "the took's own trend (v0.976.112): the took's fall ran two steps deep - 6 -> 2 (-4) -> 0 (-2) - the took's own fade " + TAIL)
// the drought's own exit - the FACE 353 CHAIN THE SWING
assert.equal(chains[353], "the took's own trend (v0.976.112): the took's own swing - 2 -> 0 (-2) -> 13 (+13) - the rise and the fall traded seats between the walks " + TAIL)
// the swings - the FACE 354..358 chains (the haul's own flicker the
// top's own payback - the +36 the field's own biggest single step)
assert.equal(chains[354], "the took's own trend (v0.976.112): the took's own swing - 0 -> 13 (+13) -> 7 (-6) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[355], "the took's own trend (v0.976.112): the took's own swing - 13 -> 7 (-6) -> 43 (+36) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[356], "the took's own trend (v0.976.112): the took's own swing - 7 -> 43 (+36) -> 19 (-24) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[357], "the took's own trend (v0.976.112): the took's own swing - 43 -> 19 (-24) -> 20 (+1) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[358], "the took's own trend (v0.976.112): the took's own swing - 19 -> 20 (+1) -> 13 (-7) - the rise and the fall traded seats between the walks " + TAIL)
// THE HONEST SILENCE LAW - the FACE 359/360 held pair (20 -> 13
// (-7) -> 13 (0), 13 -> 13 (0) -> 19 (+6)) and the FACE 378 LIVE
// WINDOW (22 -> 9 (-13) -> 9 (0))
assert.equal(chains[359], null)
assert.equal(chains[360], null)
assert.equal(chains[378], null)
// THE SWELLS - the FACE 361 chain (the build's own start), the FACE
// 365/366 chains (the build ran three faces deep 1 -> 11 -> 18 ->
// 27), the FACE 371/372 chains (the refill's own build)
assert.equal(chains[361], "the took's own trend (v0.976.112): the took's rise ran two steps deep - 13 -> 19 (+6) -> 34 (+15) - the took's own swell " + TAIL)
assert.equal(chains[365], "the took's own trend (v0.976.112): the took's rise ran two steps deep - 1 -> 11 (+10) -> 18 (+7) - the took's own swell " + TAIL)
assert.equal(chains[366], "the took's own trend (v0.976.112): the took's rise ran two steps deep - 11 -> 18 (+7) -> 27 (+9) - the took's own swell " + TAIL)
assert.equal(chains[371], "the took's own trend (v0.976.112): the took's rise ran two steps deep - 7 -> 10 (+3) -> 18 (+8) - the took's own swell " + TAIL)
assert.equal(chains[372], "the took's own trend (v0.976.112): the took's rise ran two steps deep - 10 -> 18 (+8) -> 21 (+3) - the took's own swell " + TAIL)
// the remaining swings - the build's own exit and the flicker rides
// (the F362/364 chains and the F367..370 chains and the
// F373..377 chains - the top's own trade the widest -24)
assert.equal(chains[362], "the took's own trend (v0.976.112): the took's own swing - 19 -> 34 (+15) -> 4 (-30) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[363], "the took's own trend (v0.976.112): the took's fall ran two steps deep - 34 -> 4 (-30) -> 1 (-3) - the took's own fade " + TAIL)
assert.equal(chains[364], "the took's own trend (v0.976.112): the took's own swing - 4 -> 1 (-3) -> 11 (+10) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[367], "the took's own trend (v0.976.112): the took's own swing - 18 -> 27 (+9) -> 10 (-17) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[368], "the took's own trend (v0.976.112): the took's own swing - 27 -> 10 (-17) -> 18 (+8) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[369], "the took's own trend (v0.976.112): the took's own swing - 10 -> 18 (+8) -> 7 (-11) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[370], "the took's own trend (v0.976.112): the took's own swing - 18 -> 7 (-11) -> 10 (+3) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[373], "the took's own trend (v0.976.112): the took's own swing - 18 -> 21 (+3) -> 7 (-14) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[374], "the took's own trend (v0.976.112): the took's own swing - 21 -> 7 (-14) -> 29 (+22) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[375], "the took's own trend (v0.976.112): the took's own swing - 7 -> 29 (+22) -> 5 (-24) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[376], "the took's own trend (v0.976.112): the took's own swing - 29 -> 5 (-24) -> 22 (+17) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[377], "the took's own trend (v0.976.112): the took's own swing - 5 -> 22 (+17) -> 9 (-13) - the rise and the fall traded seats between the walks " + TAIL)
// THE TALLY - twenty-six speaking + three honest silences = the
// twenty-nine windows the field priced
const speaking = Object.values(chains).filter(r => r !== null)
assert.equal(speaking.length, 26)
assert.equal(speaking.filter(r => r.includes('the took\'s own swing')).length, 17)
assert.equal(speaking.filter(r => r.includes('the took\'s own fade')).length, 4)
assert.equal(speaking.filter(r => r.includes('the took\'s own swell')).length, 5)

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
assert.equal(tookTrendRow(null), null)
assert.equal(tookTrendRow(undefined), null)
assert.equal(tookTrendRow('tooks'), null)
assert.equal(tookTrendRow([1, 2, 3]), null)
assert.equal(tookTrendRow({ back: { tooks: 1.5 }, prev: { tooks: 0 }, cur: { tooks: 0 } }), null)
assert.equal(tookTrendRow({ back: { tooks: -1 }, prev: { tooks: 0 }, cur: { tooks: 0 } }), null)
assert.equal(tookTrendRow({ back: { tooks: 1 }, prev: { tooks: '2' }, cur: { tooks: 0 } }), null)
assert.equal(tookTrendRow({ back: { tooks: 1 }, prev: { tooks: 2 } }), null)
assert.equal(tookTrendRow({ back: null, prev: { tooks: 2 }, cur: { tooks: 0 } }), null)
assert.equal(tookTrendConsistent({ back: { tooks: 0 }, prev: { tooks: 0 }, cur: { tooks: 0 } }), true)
assert.equal(tookTrendConsistent({ back: { tooks: 0 }, prev: { tooks: 0 }, cur: { tooks: 0.5 } }), false)
// the family fence never rejects extra keys - the extra key rides
assert.equal(tookTrendConsistent({ back: { tooks: 1, extra: true }, prev: { tooks: 2, extra: true }, cur: { tooks: 3, extra: true } }), true)
assert.equal(tookTrendRow({ back: { tooks: 1, extra: true }, prev: { tooks: 2, extra: true }, cur: { tooks: 4, extra: true } }), "the took's own trend (v0.976.112): the took's rise ran two steps deep - 1 -> 2 (+1) -> 4 (+2) - the took's own swell " + TAIL)

// THE BOOK'S OWN READ - the ledger's own tooks count (the
// withdrawal book beside the start book and the yield book - the
// SAME ledger's own cell); unknown shapes read zero
assert.equal(tookOfLedger({ tooks: 43 }), 43)
assert.equal(tookOfLedger({ tooks: 0 }), 0)
assert.equal(tookOfLedger({}), 0)
assert.equal(tookOfLedger(null), 0)
assert.equal(tookOfLedger(undefined), 0)
assert.equal(tookOfLedger({ tooks: -3 }), 0)

// ONE-PARSER RIDE - the SAME smeltLedger images the fleet reader
// holds: the TOOK grammar's own arithmetic (the withdrawals' own
// count sums - the SAME cell the ledger's own fold holds); the
// batch's own cell never joins the took's book (one parser, one
// cell per book)
const led = smeltLedger([
  '[F9] took 1 x stone (1/1)',
  '[F2] took 1 x copper_ingot (1/4)',
  '[F2] took 1 x copper_ingot (2/4)',
  '[F2] took 1 x copper_ingot (3/4)'
])
assert.equal(led.tooks, 4)
assert.equal(tookOfLedger(led), 4)
assert.equal(tookTrendRow({ back: { tooks: 6 }, prev: { tooks: 4 }, cur: { tooks: tookOfLedger(led) } }), null)
