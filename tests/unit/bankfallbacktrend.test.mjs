// tests/unit/bankfallbacktrend.test.mjs - THE BANK FALLBACK'S OWN
// TREND's own pin battery (v0.976.173): the field's own chains
// byte-exact (THE BANK CHAIN'S OWN FALLBACK SEAT beside the raw lane
// words - the 'none (nothing to deposit)' zeros the empty pocket's
// own voice and the 'none (budget exhausted)' refusals and the
// 'none (chest unreachable (...))' skins the lane prints, THE CELL'S
// OWN WEIGHT 189u the thirty-nine faces' own total - the final
// bank's own 736u the heavier seat beside, THE FIELD'S OWN TOP THE
// COUNT 10 the face 368's own top rode once - THE SWELL'S OWN
// LANDING, the +8 the max rise rode TWICE two legs the shared leg -
// THE BACK-TO-BACK SWELL PAIR the faces 367/368's own windows, the
// -5 the max fall rode TWO shared legs BOTH the round trips' own
// first legs (the boundaries 357/358 and 378/379 the window pairs
// share - the F359 and F380 round trips the bound the round trips
// hold), THE FIELD'S OWN FLOOR THE COUNT ZERO rode ONE face - THE
// SKIN DRIED ONCE the face 365's own drought), TWENTY-NINE of
// THIRTY-SEVEN windows speaking (SEVENTEEN swings, SEVEN swells,
// FIVE fades, the EIGHT honest silences - THE THREE-SILENCE RUN the
// faces 362/363/364's own windows the count 4 the three faces keep
// incl. THE FULL HOLD the face 363's own window both legs, the
// MIRRORED HOLD PAIR the faces 354/355's own windows, the SECOND
// PAIR the faces 382/383's own windows, THE OPENER the face 350's
// own window), the byte-pin battery, the fence battery, the cell's
// own read, the one-parser ride over the REAL bank fallback lines
// (the raw mass the lane prints; the final bank's own lines the
// .172 word's own cell never rides - the lanes never merge; the
// deferred sibling's own lines the .148 word's own cell never
// rides; the bank colon's own lines the .164 word's own cell never
// rides; the budget shape the bankcensus's own cell never rides;
// the bank trip's own lines the grant trend's own seat never
// rides; the pre-position sibling's own lines never ride; the
// reloot's own lines the .171 word's own cell never rides; the
// recovery brake's own lines the .170 word's own cell never rides;
// the camp furnace's own mass the .165 word's own cell never
// rides; the iron commune's own raw colon mass the .163 word's own
// cell never rides; the climb out skins the climb-out book's own
// cells never ride; the walk-lane census cells the walk book's own
// axes never ride; the no-colon junk never rides).
import { bankFallbacks, bankFallbackTrendConsistent, bankFallbackTrendRow } from '../../src/lib/bankfallbacktrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, this word prices the bank fallback's own mass across the faces - the bank fallback's own seat, co-existence by seat never by duplication)"

const HEAD = "the bank fallback's own trend (v0.976.173)"
const SWING = HEAD + ": the bank fallback's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the bank fallback's rise ran two steps deep - "
const SWELL_TAIL = " - the bank fallback's own swell " + TAIL
const FADE = HEAD + ": the bank fallback's fall ran two steps deep - "
const FADE_TAIL = " - the bank fallback's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the fallback
// regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 189u the faces' own total, THE FIELD'S OWN TOP THE COUNT
// 10 the face 368's own top rode once, THE FIELD'S OWN FLOOR THE
// COUNT ZERO rode ONE face (the face 365's own drought - THE SKIN
// DRIED ONCE).
const P = {}
P[348] = 4
P[349] = 4
P[350] = 3
P[351] = 4
P[352] = 6
P[353] = 5
P[354] = 5
P[355] = 3
P[356] = 9
P[357] = 8
P[358] = 3
P[359] = 8
P[360] = 5
P[361] = 4
P[362] = 4
P[363] = 4
P[364] = 1
P[365] = 0
P[366] = 1
P[367] = 9
P[368] = 10
P[369] = 6
P[370] = 2
P[371] = 4
P[372] = 5
P[373] = 6
P[374] = 7
P[375] = 3
P[376] = 5
P[377] = 8
P[378] = 7
P[379] = 2
P[380] = 7
P[381] = 3
P[382] = 3
P[383] = 6
P[384] = 3
P[385] = 8
P[386] = 4
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 189, 'the cell 189u the field holds')
const w = (f) => bankFallbackTrendRow({ back: { bankFallbacks: P[f - 2] }, prev: { bankFallbacks: P[f - 1] }, cur: { bankFallbacks: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (SEVENTEEN swings, SEVEN swells, FIVE fades, the
// EIGHT honest silences)
const SWINGS = {
  351: '4 -> 3 (-1) -> 4 (+1)',
  353: '4 -> 6 (+2) -> 5 (-1)',
  356: '5 -> 3 (-2) -> 9 (+6)',
  357: '3 -> 9 (+6) -> 8 (-1)',
  359: '8 -> 3 (-5) -> 8 (+5)',
  360: '3 -> 8 (+5) -> 5 (-3)',
  366: '1 -> 0 (-1) -> 1 (+1)',
  369: '9 -> 10 (+1) -> 6 (-4)',
  371: '6 -> 2 (-4) -> 4 (+2)',
  375: '6 -> 7 (+1) -> 3 (-4)',
  376: '7 -> 3 (-4) -> 5 (+2)',
  378: '5 -> 8 (+3) -> 7 (-1)',
  380: '7 -> 2 (-5) -> 7 (+5)',
  381: '2 -> 7 (+5) -> 3 (-4)',
  384: '3 -> 6 (+3) -> 3 (-3)',
  385: '6 -> 3 (-3) -> 8 (+5)',
  386: '3 -> 8 (+5) -> 4 (-4)'
}
const SWELLS = {
  352: '3 -> 4 (+1) -> 6 (+2)',
  367: '0 -> 1 (+1) -> 9 (+8)',
  368: '1 -> 9 (+8) -> 10 (+1)',
  372: '2 -> 4 (+2) -> 5 (+1)',
  373: '4 -> 5 (+1) -> 6 (+1)',
  374: '5 -> 6 (+1) -> 7 (+1)',
  377: '3 -> 5 (+2) -> 8 (+3)'
}
const FADES = {
  358: '9 -> 8 (-1) -> 3 (-5)',
  361: '8 -> 5 (-3) -> 4 (-1)',
  365: '4 -> 1 (-3) -> 0 (-1)',
  370: '10 -> 6 (-4) -> 2 (-4)',
  379: '8 -> 7 (-1) -> 2 (-5)'
}
const SILENCES = [350, 354, 355, 362, 363, 364, 382, 383]

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
assert.deepEqual(tally, { swing: 17, swell: 7, fade: 5, silence: 8 })

// THE FIVE ONE-WINDOW ROUND TRIPS - the mirrored bounds the book
// rides whole (the faces 351/359/366/380/384's own windows)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [351, 359, 366, 380, 384], 'the five round trips the book rides - the mirrored bounds')

// THE FIVE HELD BOUNDARIES - the silences' own shared legs (the
// boundaries 349, 353/354, 361/362, 362/363, 381/382 the pairs
// ride; the 362/363 pair back-to-back the three-silence run holds)
const heldLegs = []
for (let f = 349; f <= 386; f++) {
  if (P[f] === P[f - 1]) heldLegs.push(f)
}
assert.deepEqual(heldLegs, [349, 354, 362, 363, 382], 'the five held boundaries the silences share')

// THE THREE-SILENCE RUN - the faces 362/363/364's own windows the
// count 4 the three faces keep (the FULL HOLD the face 363's own
// window both legs the honest stillness rides whole)
assert.deepEqual([362, 363, 364], SILENCES.slice(3, 6), 'the three-silence run the family holds')
assert.equal(P[361], 4, 'the held count the three faces keep')
assert.equal(P[362], 4, 'the held count the three faces keep')
assert.equal(P[363], 4, 'the held count the three faces keep')
assert.equal(w(363), null, 'the full hold both legs the honest null rides')
// THE MIRRORED HOLD PAIR the faces 354/355's own windows (the
// boundary 353/354 the two silences share)
assert.equal(P[353], 5, 'the mirrored hold the count 5 the pair rides')
assert.equal(P[354], 5, 'the mirrored hold the count 5 the pair rides')
assert.equal(w(354), null, 'the mirrored pair the second leg the held step rides')
assert.equal(w(355), null, 'the mirrored pair the first leg the held step rides')
// THE SECOND PAIR the faces 382/383's own windows (the boundary
// 381/382 the two silences share)
assert.equal(P[381], 3, 'the second pair the count 3 the pair rides')
assert.equal(P[382], 3, 'the second pair the count 3 the pair rides')
assert.equal(w(382), null, 'the second pair the second leg the held step rides')
assert.equal(w(383), null, 'the second pair the first leg the held step rides')

// THE BACK-TO-BACK SWELL PAIR the faces 367/368's own windows - the
// +8 the max rise's own bound the shared leg the pair rides
assert.equal(P[367] - P[366], 8, 'the max rise the +8 the bound rides')
assert.equal(P[368] - P[367], 1, 'the top the landing leg rides')
// THE MAX FALL'S OWN BOUND the -5 rode TWO shared legs BOTH the
// round trips' own first legs (the boundaries 357/358 and 378/379)
assert.equal(P[358] - P[357], -5, 'the max fall the -5 the first shared leg rides')
assert.equal(P[379] - P[378], -5, 'the max fall the -5 the second shared leg rides')
// THE THREE-SWELL RUN the faces 372/373/374's own windows - the +1
// legs chain the staircase
assert.deepEqual(Object.keys(SWELLS).map(Number).filter(f => f >= 372 && f <= 374), [372, 373, 374], 'the three-swell run')

// THE ZERO FACE - THE SKIN DRIED ONCE (the face 365's own drought
// the fade's own landing, the face 366's own swing the drought's
// own edge the recovery's own word)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.deepEqual(zeroFaces, [365], 'zero faces one the skin dried once - the face 365 the drought')

// landmark chains byte-exact full literals
// THE FIELD'S OWN OPENER - the face 350's own window the silence
// the field's own first word rode (the faces 348/349 no window the
// carrier's own law)
assert.equal(w(350), null)
// THE TOP'S OWN ARRIVAL THE SWELL'S OWN LANDING (the face 368's own
// window the +8 the shared leg the first, the +1 the landing)
assert.equal(Math.max(...Object.values(P)), 10, 'the top the count 10 the field holds')
assert.equal(w(368), SWELL + '1 -> 9 (+8) -> 10 (+1)' + SWELL_TAIL)
// THE MAX RISE'S OWN BOUND (the face 367's own window the +8 the
// second leg the climb)
assert.equal(w(367), SWELL + '0 -> 1 (+1) -> 9 (+8)' + SWELL_TAIL)
// THE MAX FALL'S OWN BOUND THE ROUND TRIPS (the face 359's own
// window the -5 the first leg the round trip holds, the face 380's
// own window the same)
assert.equal(w(359), SWING + '8 -> 3 (-5) -> 8 (+5)' + SWING_TAIL)
assert.equal(w(380), SWING + '7 -> 2 (-5) -> 7 (+5)' + SWING_TAIL)
// THE FLOOR'S OWN ARRIVAL (the face 365's own fade the drought the
// count 0 the face rides)
assert.equal(Math.min(...Object.values(P)), 0, 'the floor the count 0 the field holds')
assert.equal(w(365), FADE + '4 -> 1 (-3) -> 0 (-1)' + FADE_TAIL)
// THE DROUGHT'S OWN EDGE (the face 366's own swing the zero the
// round trip's own floor touches)
assert.equal(w(366), SWING + '1 -> 0 (-1) -> 1 (+1)' + SWING_TAIL)
// THE ROUND TRIPS (the faces 351/384's own windows the mirrored
// bounds the small trades)
assert.equal(w(351), SWING + '4 -> 3 (-1) -> 4 (+1)' + SWING_TAIL)
assert.equal(w(384), SWING + '3 -> 6 (+3) -> 3 (-3)' + SWING_TAIL)
// THE THREE-SWELL RUN (the faces 372/373/374's own windows the
// staircase the chain keeps)
assert.equal(w(372), SWELL + '2 -> 4 (+2) -> 5 (+1)' + SWELL_TAIL)
assert.equal(w(373), SWELL + '4 -> 5 (+1) -> 6 (+1)' + SWELL_TAIL)
assert.equal(w(374), SWELL + '5 -> 6 (+1) -> 7 (+1)' + SWELL_TAIL)
// THE FULL HOLD PAIR (the faces 362/364's own windows the held law
// keeps - the three-silence run's own arms)
assert.equal(w(362), null)
assert.equal(w(364), null)
// THE LAST WORD (the face 386's own swing the book's own last word)
assert.equal(w(386), SWING + '3 -> 8 (+5) -> 4 (-4)' + SWING_TAIL)

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(bankFallbackTrendRow({ back: { bankFallbacks: 1 }, prev: { bankFallbacks: 2 }, cur: { bankFallbacks: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(bankFallbackTrendRow({ back: { bankFallbacks: 3 }, prev: { bankFallbacks: 2 }, cur: { bankFallbacks: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(bankFallbackTrendRow({ back: { bankFallbacks: 1 }, prev: { bankFallbacks: 3 }, cur: { bankFallbacks: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(bankFallbackTrendRow({ back: { bankFallbacks: 2 }, prev: { bankFallbacks: 2 }, cur: { bankFallbacks: 3 } }), null)
assert.equal(bankFallbackTrendRow({ back: { bankFallbacks: 2 }, prev: { bankFallbacks: 3 }, cur: { bankFallbacks: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole
assert.equal(bankFallbackTrendRow({ back: { bankFallbacks: 0 }, prev: { bankFallbacks: 1 }, cur: { bankFallbacks: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(bankFallbackTrendRow({ back: { bankFallbacks: 0 }, prev: { bankFallbacks: 0 }, cur: { bankFallbacks: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(bankFallbackTrendRow(null), null)
assert.equal(bankFallbackTrendRow(undefined), null)
assert.equal(bankFallbackTrendRow('junk'), null)
assert.equal(bankFallbackTrendRow(42), null)
assert.equal(bankFallbackTrendRow([]), null)
assert.equal(bankFallbackTrendRow({}), null)
assert.equal(bankFallbackTrendRow({ back: { bankFallbacks: 1 }, prev: { bankFallbacks: 2 } }), null)
assert.equal(bankFallbackTrendRow({ back: { bankFallbacks: 1 }, prev: { bankFallbacks: 2 }, cur: {} }), null)
assert.equal(bankFallbackTrendRow({ back: { bankFallbacks: 'x' }, prev: { bankFallbacks: 2 }, cur: { bankFallbacks: 3 } }), null)
assert.equal(bankFallbackTrendRow({ back: { bankFallbacks: 1 }, prev: { bankFallbacks: 2 }, cur: { bankFallbacks: -1 } }), null)
assert.equal(bankFallbackTrendRow({ back: { bankFallbacks: 1.5 }, prev: { bankFallbacks: 2 }, cur: { bankFallbacks: 3 } }), null)
assert.equal(bankFallbackTrendRow({ back: null, prev: { bankFallbacks: 2 }, cur: { bankFallbacks: 3 } }), null)
assert.equal(bankFallbackTrendRow({ back: { bankFallbacks: 1 }, prev: [2], cur: { bankFallbacks: 3 } }), null)
// the extra keys never reject (the fence never overreaches)
assert.equal(bankFallbackTrendRow({ back: { bankFallbacks: 1, extra: 9 }, prev: { bankFallbacks: 2, junk: 'x' }, cur: { bankFallbacks: 3, deep: { a: 1 } } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
// the fence's own read
assert.equal(bankFallbackTrendConsistent({ back: { bankFallbacks: 0 }, prev: { bankFallbacks: 0 }, cur: { bankFallbacks: 0 } }), true)
assert.equal(bankFallbackTrendConsistent({ back: { bankFallbacks: 5 }, prev: { bankFallbacks: 9 }, cur: { bankFallbacks: 2 }, spare: true }), true)
assert.equal(bankFallbackTrendConsistent(null), false)
assert.equal(bankFallbackTrendConsistent({ back: { bankFallbacks: 1 }, prev: { bankFallbacks: 2 }, cur: { bankFallbacks: NaN } }), false)

// THE CELL'S OWN READ - the real bank fallback lines ride (the raw
// mass the lane prints - every line the lane prints rides, no
// exclusion the lane needs; the empty pocket's own zeros and the
// budget refusals and the chest unreachable skins all ride)
assert.equal(bankFallbacks([
  'F9 bank fallback: none (budget exhausted)',
  'F16 bank fallback: none (nothing to deposit)',
  'F13 bank fallback: none (chest unreachable (budget exhausted (walk floor)))'
]), 3)
// THE FINAL BANK'S OWN LINES the .172 word's own book never rides
// here - the lanes never merge (the raw sibling the .172 word's own
// cell holds, the fallback seat this word prices)
assert.equal(bankFallbacks(['F1 final bank: 0 (still underground after 1 climb attempt - the chain from the shaft bottom is doomed walks)']), 0)
assert.equal(bankFallbacks(['F7 final bank: +234']), 0)
// THE DEFERRED SIBLING'S OWN LINES the .148 word's own cell never rides
assert.equal(bankFallbacks(['F13 final bank deferred: night (tod=12840) - the pocket rides out the dark alive (the v0.140.1 night hold)']), 0)
// THE BANK COLON'S OWN LINES the .164 word's own cell never rides
assert.equal(bankFallbacks(['F18 bank: smelt hold skipped - no fuel in pocket (coal 2)']), 0)
assert.equal(bankFallbacks(['F6 bank: yard walk arrived in 0s (1 attempt)']), 0)
// THE BUDGET SHAPE the bankcensus's own cell never rides
assert.equal(bankFallbacks(['F6 final bank budget: flow-priced 240s (fleet pocket 2172u at 1.5u/s needs 1448s) - the static 240s covered only the fast flows']), 0)
// THE BANK TRIP'S OWN LINES the grant trend's own seat never rides
assert.equal(bankFallbacks(['F6 bank trip: planned budget 204s']), 0)
// THE PRE-POSITION SIBLING'S OWN LINES never ride
assert.equal(bankFallbacks(['F6 pre-position bank: 0 (chest unreachable (No path to the goal!))']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(bankFallbacks(['F3 reloot: walking to the own death spot [-100,64,300]']), 0)
assert.equal(bankFallbacks(['F5 reloot: write-off']), 0)
assert.equal(bankFallbacks(['F7 recovery brake: 1 consecutive failures - next attempt in 45s']), 0)
assert.equal(bankFallbacks(['F5 sword: OK (wooden_sword, holds 1)']), 0)
assert.equal(bankFallbacks(['F5 sword due: refill scheduled (holds 0)']), 0)
assert.equal(bankFallbacks(['F8 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here']), 0)
assert.equal(bankFallbacks(['F6 camp furnace: no build (machine near)']), 0)
assert.equal(bankFallbacks(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(bankFallbacks(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(bankFallbacks(['F6 fuel commons: budget spent (0/2 units)']), 0)
// the walk-lane census cells never ride
assert.equal(bankFallbacks(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
// the climb out skins never ride - the climb-out never falls back
assert.equal(bankFallbacks(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(bankFallbacks(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(bankFallbacks(['F6 bank fallback 0 (nothing to deposit)']), 0)
assert.equal(bankFallbacks(['F6 bank fallback']), 0)
assert.equal(bankFallbacks(['bank fallback: none (nothing to deposit)']), 0)
assert.equal(bankFallbacks(['F8 bank fallback-extra: none (nothing to deposit)']), 0)
assert.equal(bankFallbacks(['F8 bank fallbacks: none (nothing to deposit)']), 0)
assert.equal(bankFallbacks(['F8 bank fallback deferred: none']), 0)

// the defensive reads
assert.equal(bankFallbacks(null), 0)
assert.equal(bankFallbacks(undefined), 0)
assert.equal(bankFallbacks('junk'), 0)
assert.equal(bankFallbacks(42), 0)
assert.equal(bankFallbacks([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F9 bank fallback: none (budget exhausted)',
  'F16 bank fallback: none (nothing to deposit)',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(bankFallbacks(lines), 2)
const fold = { back: { bankFallbacks: bankFallbacks(lines) }, prev: { bankFallbacks: 4 }, cur: { bankFallbacks: 1 } }
assert.equal(bankFallbackTrendRow(fold), SWING + '2 -> 4 (+2) -> 1 (-3)' + SWING_TAIL)

console.log('bankfallbacktrend.test: all pins green')
