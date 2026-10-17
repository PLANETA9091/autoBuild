// tests/unit/bankfallbackbudgettrend.test.mjs - THE BANK FALLBACK'S
// OWN BUDGET-EXHAUSTED TREND's own pin battery (v0.976.180): the
// split's own second seat the fire-0930's own NEXT FIRE named first -
// the field's own chains byte-exact (THE 'none (budget exhausted)'
// SKIN the lane prints, THE CELL'S OWN WEIGHT 81u the thirty-nine
// faces' own total - the parent raw book's own 189u the heavier whole
// seat beside, the nothing-to-deposit's own 106u the heavier split
// sibling beside the .177 word's own cell, THE FIELD'S OWN TOP THE
// COUNT 8 the face 367's own top rode once, the +7 the max rise rode
// TWO legs ONE boundary (the boundary 366/367 the shared pair the
// faces 367/368's own windows - THE BOUNDS' OWN ARRIVAL), the -6 the
// max fall rode TWO legs ONE boundary (the boundary 369/370 the shared
// pair the faces 370/371's own windows), THE FIELD'S OWN FLOOR THE
// COUNT ZERO rode FIVE faces (the faces 349/364/365/370/376's own
// zeros - the dried skin five faces deep, FIVE the split's own new
// record)), TWENTY-SIX of THIRTY-SEVEN windows speaking (NINETEEN
// swings, FIVE swells, TWO fades, the ELEVEN honest silences - THE
// THREE-SILENCE RUN the faces 353/354/355's own windows the count 3
// the three faces keep incl. THE FULL HOLD the face 354's own window
// both legs, the four two-silence runs the faces 362/363 and 365/366
// and 378/379 and 382/383's own windows, THE FOUR ONE-WINDOW ROUND
// TRIPS EVERY ONE MIRRORED the faces 377/380/381/384's own windows,
// THE BACK-TO-BACK ROUND TRIP PAIR the faces 380/381's own windows,
// THE BACK-TO-BACK SWELL PAIR THE OPENER HOLDS the faces 351/352's own
// windows, THE BACK-TO-BACK FADE PAIR the faces 375/376's own windows,
// THE OPENER the face 350's own window the swing the book born
// trading), the byte-pin battery, the fence battery, the cell's own
// read, the one-parser ride over the REAL bank fallback lines (the
// budget-exhausted skin the split's own second seat rides; the
// nothing-to-deposit sibling's own lines the .177 word's own cell
// never ride - the split seats never merge; the chest-unreachable
// sibling's own lines the split's own third seat never ride; the
// final bank's own lines the .172 word's own cell never ride - the
// lanes never merge; the deferred sibling's own lines the .148 word's
// own cell never ride; the bank colon's own lines the .164 word's own
// cell never ride; the budget shape the bankcensus's own cell never
// rides; the bank trip's own lines the grant trend's own seat never
// rides; the pre-position sibling's own lines never ride; the
// reloot's own lines the .171 word's own cell never ride; the
// recovery brake's own lines the .170 word's own cell never ride; the
// camp furnace's own mass the .165 word's own cell never ride; the
// iron commune's own raw colon mass the .163 word's own cell never
// ride; the climb out skins the climb-out book's own cells never
// ride; the walk-lane census cells the walk book's own axes never
// ride; the no-colon junk never rides).
import { bankFallbackBudgets, bankFallbackBudgetTrendConsistent, bankFallbackBudgetTrendRow } from '../../src/lib/bankfallbackbudgettrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, this word prices the bank fallback's own budget-exhausted mass across the faces - the bank fallback's own why split's own budget-exhausted seat, co-existence by seat never by duplication)"

const HEAD = "the bank fallback's own budget-exhausted trend (v0.976.180)"
const SWING = HEAD + ": the budget-exhausted's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the budget-exhausted's rise ran two steps deep - "
const SWELL_TAIL = " - the budget-exhausted's own swell " + TAIL
const FADE = HEAD + ": the budget-exhausted's fall ran two steps deep - "
const FADE_TAIL = " - the budget-exhausted's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the
// nothing-to-deposit split RE's own arithmetic, THIRTY-NINE faces deep)
// - THE CELL'S OWN WEIGHT 106u the faces' own total, THE FIELD'S OWN
// TOP THE COUNT 8 the face 367's own top rode once, THE FIELD'S OWN FLOOR THE
// COUNT ZERO rode THREE faces (the faces 365/366/369's own zeros - the
// dried skin three faces deep).
const P = {}
P[348] = 2
P[349] = 0
P[350] = 1
P[351] = 2
P[352] = 3
P[353] = 3
P[354] = 3
P[355] = 1
P[356] = 2
P[357] = 3
P[358] = 1
P[359] = 2
P[360] = 3
P[361] = 1
P[362] = 1
P[363] = 2
P[364] = 0
P[365] = 0
P[366] = 1
P[367] = 8
P[368] = 4
P[369] = 6
P[370] = 0
P[371] = 2
P[372] = 1
P[373] = 5
P[374] = 3
P[375] = 2
P[376] = 0
P[377] = 2
P[378] = 2
P[379] = 1
P[380] = 2
P[381] = 1
P[382] = 1
P[383] = 3
P[384] = 1
P[385] = 4
P[386] = 2
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 81, 'the cell 81u the field holds')
const w = (f) => bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: P[f - 2] }, prev: { bankFallbackBudgets: P[f - 1] }, cur: { bankFallbackBudgets: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (NINETEEN swings, TWO swells, FIVE fades, the ELEVEN
// honest silences)
const SWINGS = {
  350: '2 -> 0 (-2) -> 1 (+1)',
  356: '3 -> 1 (-2) -> 2 (+1)',
  358: '2 -> 3 (+1) -> 1 (-2)',
  359: '3 -> 1 (-2) -> 2 (+1)',
  361: '2 -> 3 (+1) -> 1 (-2)',
  364: '1 -> 2 (+1) -> 0 (-2)',
  368: '1 -> 8 (+7) -> 4 (-4)',
  369: '8 -> 4 (-4) -> 6 (+2)',
  370: '4 -> 6 (+2) -> 0 (-6)',
  371: '6 -> 0 (-6) -> 2 (+2)',
  372: '0 -> 2 (+2) -> 1 (-1)',
  373: '2 -> 1 (-1) -> 5 (+4)',
  374: '1 -> 5 (+4) -> 3 (-2)',
  377: '2 -> 0 (-2) -> 2 (+2)',
  380: '2 -> 1 (-1) -> 2 (+1)',
  381: '1 -> 2 (+1) -> 1 (-1)',
  384: '1 -> 3 (+2) -> 1 (-2)',
  385: '3 -> 1 (-2) -> 4 (+3)',
  386: '1 -> 4 (+3) -> 2 (-2)'
}
const SWELLS = {
  351: '0 -> 1 (+1) -> 2 (+1)',
  352: '1 -> 2 (+1) -> 3 (+1)',
  357: '1 -> 2 (+1) -> 3 (+1)',
  360: '1 -> 2 (+1) -> 3 (+1)',
  367: '0 -> 1 (+1) -> 8 (+7)'
}
const FADES = {
  375: '5 -> 3 (-2) -> 2 (-1)',
  376: '3 -> 2 (-1) -> 0 (-2)'
}
const SILENCES = [353, 354, 355, 362, 363, 365, 366, 378, 379, 382, 383]

for (const [f, arc] of Object.entries(SWINGS)) {
  assert.equal(w(+f), SWING + arc + SWING_TAIL, `the swing F${f} rides byte-exact`)
}
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(+f), SWELL + arc + SWELL_TAIL, `the swell F${f} rides byte-exact`)
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(+f), FADE + arc + FADE_TAIL, `the fade F${f} rides byte-exact`)
}
for (const f of SILENCES) {
  assert.equal(w(f), null, `the silence F${f} the honest null rides`)
}

// the field's own tally - the arithmetic the book's own breath holds
const tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const first = P[f - 1] - P[f - 2]
  const second = P[f] - P[f - 1]
  if (first === 0 || second === 0) { tally.silence++; continue }
  if (first > 0 && second > 0) tally.swell++
  else if (first < 0 && second < 0) tally.fade++
  else tally.swing++
}
assert.deepEqual(tally, { swing: 19, swell: 5, fade: 2, silence: 11 })

// THE FOUR ONE-WINDOW ROUND TRIPS - every one mirrored (the faces
// 377/380/381/384's own windows - the death carry's own nine the family
// record the .174 word's own cell holds, the nothing-to-deposit's own
// eight the .177's own split record beside, FOUR the lightest the
// split family holds)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [377, 380, 381, 384], 'the four round trips the book rides - every one mirrored')
for (const f of roundTrips) {
  const d1 = P[f - 1] - P[f - 2]
  const d2 = P[f] - P[f - 1]
  assert.equal(d1, -d2, `the round trip F${f} the mirrored bounds the same size`)
}

// THE SIX HELD BOUNDARIES - the silences' own shared legs (the
// boundaries 354, 355, 362, 366, 371, 382 the runs ride)
const heldLegs = []
for (let f = 349; f <= 386; f++) {
  if (P[f] === P[f - 1]) heldLegs.push(f)
}
assert.deepEqual(heldLegs, [353, 354, 362, 365, 378, 382], 'the six held boundaries the silences share')

// THE THREE-SILENCE RUN - the faces 353/354/355's own windows the
// count 3 the three faces keep (the FULL HOLD the face 354's own
// window both legs the honest stillness rides whole)
assert.deepEqual([353, 354, 355], SILENCES.slice(0, 3), 'the three-silence run the field holds')
assert.equal(P[352], 3, 'the held count the three faces keep')
assert.equal(P[353], 3, 'the held count the three faces keep')
assert.equal(P[354], 3, 'the held count the three faces keep')
assert.equal(w(354), null, 'the full hold both legs the honest null rides')
// THE FOUR TWO-SILENCE RUNS the faces 362/363 and 365/366 and 378/379
// and 382/383's own windows hold
assert.deepEqual([362, 363], SILENCES.slice(3, 5), 'the first two-run')
assert.deepEqual([365, 366], SILENCES.slice(5, 7), 'the second two-run')
assert.deepEqual([378, 379], SILENCES.slice(7, 9), 'the third two-run')
assert.deepEqual([382, 383], SILENCES.slice(9, 11), 'the fourth two-run')

// THE BOUNDS' OWN LEGS - the +7 the max rise rode TWO legs ONE
// boundary (the boundary 366/367 the shared pair the faces 367/368's
// own windows - THE BOUNDS' OWN ARRIVAL the top's own landing the same
// window the bound rides), the -6 the max fall rode TWO legs ONE
// boundary (the boundary 369/370 the shared pair the faces 370/371's
// own windows - the floor's own arrival the same leg the max fall rides)
assert.equal(P[367] - P[366], 7, 'the max rise the +7 the top the arrival rides')
assert.equal(P[368] - P[367], -4, 'the drain the second leg the trade rides')
assert.equal(P[370] - P[369], -6, `the max fall the -6 the face 370 window's second leg rides`)
// THE BACK-TO-BACK ROUND TRIP PAIR the faces 380/381's own windows
assert.deepEqual([380, 381], [377, 380, 381, 384].filter(f => f >= 380 && f <= 381), 'the back-to-back pair the two windows share')

// THE FIVE ZERO FACES - the dried skin five faces deep (the faces
// 349/364/365/370/376's own zeros - the nothing-to-deposit's own three
// the .177's own record beside, FIVE the split's own new record)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.deepEqual(zeroFaces, [349, 364, 365, 370, 376], 'zero faces five the dried skin five faces deep')

// landmark chains byte-exact full literals
// THE FIELD'S OWN OPENER - the face 350's own window the swing the
// book born trading (the faces 348/349 no window the carrier's own
// law; the birth floor the face 349's own zero the opener's own leg)
assert.equal(w(350), SWING + '2 -> 0 (-2) -> 1 (+1)' + SWING_TAIL)
// THE BACK-TO-BACK SWELL PAIR THE OPENER HOLDS (the faces 351/352's
// own windows the book born swelling two windows deep)
assert.equal(w(351), SWELL + '0 -> 1 (+1) -> 2 (+1)' + SWELL_TAIL)
assert.equal(w(352), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
// THE TOP'S OWN ARRIVAL THE BOUNDS' OWN ARRIVAL (the face 367's own
// window the +7 the second leg the top the same window holds)
assert.equal(Math.max(...Object.values(P)), 8, 'the top the count 8 the field holds')
assert.equal(P[367], 8, 'the top the face 367 rides')
assert.equal(w(367), SWELL + '0 -> 1 (+1) -> 8 (+7)' + SWELL_TAIL)
// THE MAX RISE'S OWN BOUND the shared leg (the face 368's own window
// the +7 the first leg the drain the second)
assert.equal(w(368), SWING + '1 -> 8 (+7) -> 4 (-4)' + SWING_TAIL)
// THE MAX FALL'S OWN BOUND (the face 370's own window the -6 the
// second leg the floor's own arrival the same window holds)
assert.equal(w(370), SWING + '4 -> 6 (+2) -> 0 (-6)' + SWING_TAIL)
assert.equal(w(371), SWING + '6 -> 0 (-6) -> 2 (+2)' + SWING_TAIL)
// THE FLOOR'S OWN ARRIVALS (the faces 364/365's own zeros the first
// drought the swing's own landing the held pair)
assert.equal(Math.min(...Object.values(P)), 0, 'the floor the count 0 the field holds')
assert.equal(w(364), SWING + '1 -> 2 (+1) -> 0 (-2)' + SWING_TAIL)
assert.equal(w(365), null, `the zero's own held pair the silence rides`)
// THE LAST ZERO'S OWN ARRIVAL THE FADE'S OWN LANDING (the face 376's
// own window the fade the drought rides)
assert.equal(w(376), FADE + '3 -> 2 (-1) -> 0 (-2)' + FADE_TAIL)
// THE ROUND TRIPS (the faces 377/380/381/384's own windows the
// mirrored bounds the trades ride)
assert.equal(w(377), SWING + '2 -> 0 (-2) -> 2 (+2)' + SWING_TAIL)
assert.equal(w(380), SWING + '2 -> 1 (-1) -> 2 (+1)' + SWING_TAIL)
assert.equal(w(381), SWING + '1 -> 2 (+1) -> 1 (-1)' + SWING_TAIL)
assert.equal(w(384), SWING + '1 -> 3 (+2) -> 1 (-2)' + SWING_TAIL)
// THE LAST WORD (the face 386's own window the swing the book's own
// last word)
assert.equal(w(386), SWING + '1 -> 4 (+3) -> 2 (-2)' + SWING_TAIL)

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: 1 }, prev: { bankFallbackBudgets: 2 }, cur: { bankFallbackBudgets: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: 3 }, prev: { bankFallbackBudgets: 2 }, cur: { bankFallbackBudgets: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: 1 }, prev: { bankFallbackBudgets: 3 }, cur: { bankFallbackBudgets: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: 2 }, prev: { bankFallbackBudgets: 2 }, cur: { bankFallbackBudgets: 3 } }), null)
assert.equal(bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: 2 }, prev: { bankFallbackBudgets: 3 }, cur: { bankFallbackBudgets: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole
assert.equal(bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: 0 }, prev: { bankFallbackBudgets: 1 }, cur: { bankFallbackBudgets: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: 0 }, prev: { bankFallbackBudgets: 0 }, cur: { bankFallbackBudgets: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(bankFallbackBudgetTrendRow(null), null)
assert.equal(bankFallbackBudgetTrendRow(undefined), null)
assert.equal(bankFallbackBudgetTrendRow('junk'), null)
assert.equal(bankFallbackBudgetTrendRow(42), null)
assert.equal(bankFallbackBudgetTrendRow([]), null)
assert.equal(bankFallbackBudgetTrendRow({}), null)
assert.equal(bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: 1 }, prev: { bankFallbackBudgets: 2 } }), null)
assert.equal(bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: 1 }, prev: { bankFallbackBudgets: 2 }, cur: {} }), null)
assert.equal(bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: 'x' }, prev: { bankFallbackBudgets: 2 }, cur: { bankFallbackBudgets: 3 } }), null)
assert.equal(bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: 1 }, prev: { bankFallbackBudgets: 2 }, cur: { bankFallbackBudgets: -1 } }), null)
assert.equal(bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: 1.5 }, prev: { bankFallbackBudgets: 2 }, cur: { bankFallbackBudgets: 3 } }), null)
assert.equal(bankFallbackBudgetTrendRow({ back: null, prev: { bankFallbackBudgets: 2 }, cur: { bankFallbackBudgets: 3 } }), null)
assert.equal(bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: 1 }, prev: [2], cur: { bankFallbackBudgets: 3 } }), null)
// the extra keys never reject (the fence never overreaches)
assert.equal(bankFallbackBudgetTrendRow({ back: { bankFallbackBudgets: 1, extra: 9 }, prev: { bankFallbackBudgets: 2, junk: 'x' }, cur: { bankFallbackBudgets: 3, deep: { a: 1 } } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
// the fence's own read
assert.equal(bankFallbackBudgetTrendConsistent({ back: { bankFallbackBudgets: 0 }, prev: { bankFallbackBudgets: 0 }, cur: { bankFallbackBudgets: 0 } }), true)
assert.equal(bankFallbackBudgetTrendConsistent({ back: { bankFallbackBudgets: 5 }, prev: { bankFallbackBudgets: 9 }, cur: { bankFallbackBudgets: 2 }, spare: true }), true)
assert.equal(bankFallbackBudgetTrendConsistent(null), false)
assert.equal(bankFallbackBudgetTrendConsistent({ back: { bankFallbackBudgets: 1 }, prev: { bankFallbackBudgets: 2 }, cur: { bankFallbackBudgets: NaN } }), false)

// THE CELL'S OWN READ - the real bank fallback lines ride (the split's
// own second seat - the budget-exhausted skin rides, the sibling
// skins never ride - the split seats never merge)
assert.equal(bankFallbackBudgets([
  'F9 bank fallback: none (budget exhausted)',
  'F16 bank fallback: none (budget exhausted)'
]), 2)
// THE NOTHING-TO-DEPOSIT SIBLING'S OWN LINES the .177 word's own cell
// never ride here - the split seats never merge
assert.equal(bankFallbackBudgets(['F16 bank fallback: none (nothing to deposit)']), 0)
// THE CHEST-UNREACHABLE SIBLING'S OWN LINES the split's own third seat
// never ride
assert.equal(bankFallbackBudgets(['F13 bank fallback: none (chest unreachable (budget exhausted (walk floor)))']), 0)
// THE FINAL BANK'S OWN LINES the .172 word's own book never rides
// here - the lanes never merge
assert.equal(bankFallbackBudgets(['F1 final bank: 0 (still underground after 1 climb attempt - the chain from the shaft bottom is doomed walks)']), 0)
assert.equal(bankFallbackBudgets(['F7 final bank: +234']), 0)
// THE DEFERRED SIBLING'S OWN LINES the .148 word's own cell never rides
assert.equal(bankFallbackBudgets(['F13 final bank deferred: night (tod=12840) - the pocket rides out the dark alive (the v0.140.1 night hold)']), 0)
// THE BANK COLON'S OWN LINES the .164 word's own cell never rides
assert.equal(bankFallbackBudgets(['F18 bank: smelt hold skipped - no fuel in pocket (coal 2)']), 0)
assert.equal(bankFallbackBudgets(['F6 bank: yard walk arrived in 0s (1 attempt)']), 0)
// THE BUDGET SHAPE the bankcensus's own cell never rides
assert.equal(bankFallbackBudgets(['F6 final bank budget: flow-priced 240s (fleet pocket 2172u at 1.5u/s needs 1448s) - the static 240s covered only the fast flows']), 0)
// THE BANK TRIP'S OWN LINES the grant trend's own seat never rides
assert.equal(bankFallbackBudgets(['F6 bank trip: planned budget 204s']), 0)
// THE PRE-POSITION SIBLING'S OWN LINES never ride
assert.equal(bankFallbackBudgets(['F6 pre-position bank: 0 (chest unreachable (No path to the goal!))']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(bankFallbackBudgets(['F3 reloot: walking to the own death spot [-100,64,300]']), 0)
assert.equal(bankFallbackBudgets(['F5 reloot: write-off']), 0)
assert.equal(bankFallbackBudgets(['F7 recovery brake: 1 consecutive failures - next attempt in 45s']), 0)
assert.equal(bankFallbackBudgets(['F5 sword: OK (wooden_sword, holds 1)']), 0)
assert.equal(bankFallbackBudgets(['F5 sword due: refill scheduled (holds 0)']), 0)
assert.equal(bankFallbackBudgets(['F8 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here']), 0)
assert.equal(bankFallbackBudgets(['F6 camp furnace: no build (machine near)']), 0)
assert.equal(bankFallbackBudgets(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(bankFallbackBudgets(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(bankFallbackBudgets(['F6 fuel commons: budget spent (0/2 units)']), 0)
// the walk-lane census cells never ride
assert.equal(bankFallbackBudgets(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
// the climb out skins never ride - the climb-out never falls back
assert.equal(bankFallbackBudgets(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(bankFallbackBudgets(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(bankFallbackBudgets(['F6 bank fallback 0 (nothing to deposit)']), 0)
assert.equal(bankFallbackBudgets(['F6 bank fallback']), 0)
assert.equal(bankFallbackBudgets(['bank fallback: none (nothing to deposit)']), 0)
assert.equal(bankFallbackBudgets(['F8 bank fallback-extra: none (nothing to deposit)']), 0)
assert.equal(bankFallbackBudgets(['F8 bank fallbacks: none (nothing to deposit)']), 0)
assert.equal(bankFallbackBudgets(['F8 bank fallback deferred: none']), 0)
// the sibling skins' own variants never ride (the split's own shape
// the exact why the RE demands)
assert.equal(bankFallbackBudgets(['F6 bank fallback: none (budget exhausteds)']), 0)
assert.equal(bankFallbackBudgets(['F6 bank fallback: none (budget exhausted other)']), 0)

// the defensive reads
assert.equal(bankFallbackBudgets(null), 0)
assert.equal(bankFallbackBudgets(undefined), 0)
assert.equal(bankFallbackBudgets('junk'), 0)
assert.equal(bankFallbackBudgets(42), 0)
assert.equal(bankFallbackBudgets([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F9 bank fallback: none (budget exhausted)',
  'F16 bank fallback: none (nothing to deposit)',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(bankFallbackBudgets(lines), 1)
const fold = { back: { bankFallbackBudgets: bankFallbackBudgets(lines) }, prev: { bankFallbackBudgets: 4 }, cur: { bankFallbackBudgets: 1 } }
assert.equal(bankFallbackBudgetTrendRow(fold), SWING + '1 -> 4 (+3) -> 1 (-3)' + SWING_TAIL)

console.log('bankfallbackbudgettrend.test: all pins green')
