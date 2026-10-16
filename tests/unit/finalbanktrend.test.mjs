// tests/unit/finalbanktrend.test.mjs - THE FINAL BANK'S OWN TREND's
// own pin battery (v0.976.172): the field's own chains byte-exact
// (THE END-PHASE BANK CHAIN'S OWN RAW SEAT beside the raw lane words
// - the zero verdicts with the climb's own prose and the delivered
// verdicts and the stagger arms and the doom latch's own re-arms the
// lane prints, THE CELL'S OWN WEIGHT 736u the thirty-nine faces' own
// total - the sword due's own 761u the seat beside, THE FIELD'S OWN
// TOP THE COUNT 62 the face 354's own top rode once - THE CRATER'S
// OWN RIM, the +50 the max rise rode TWICE two legs the shared leg,
// the -56 the max fall rode TWICE two legs the shared leg - THE MAX
// RISE AND THE MAX FALL THE BACK-TO-BACK STEPS the craters' own pair,
// THE FIELD'S OWN FLOOR THE COUNT 4 rode TWO faces, ZERO FACES NONE
// - THE SKIN NEVER DRIED), THIRTY-FIVE of THIRTY-SEVEN windows
// speaking (TWENTY-TWO swings, SIX swells, SEVEN fades, the TWO
// honest silences - THE MIRRORED HOLD the same step the two silences
// share, THE FOUR-FADE RUN THE SECOND THE FAMILY HOLDS the faces
// 379/380/381/382's own windows, THE BACK-TO-BACK SWELL PAIR the
// faces 357/358's own windows the +7 the shared leg, THE BOUNDS' OWN
// WINDOW the face 355's own window both bounds one window deep, THE
// ONE-WINDOW ROUND TRIP the face 352's own window the mirrored
// bounds), the byte-pin battery, the fence battery, the cell's own
// read, the one-parser ride over the REAL final bank lines (the raw
// mass the lane prints; the deferred sibling's own lines the .148
// word's own cell never rides - the lanes never merge; the bank
// colon's own lines the .164 word's own cell never rides; the budget
// shape the bankcensus's own cell never rides; the bank fallback's
// own lane never rides; the pre-position sibling's own lines never
// ride; the fuel anchor delivery's own lines the .167 word's own cell
// never rides; the spare pick due's own lines the .168 word's own
// cell never rides; the sword due's own lines the .169 word's own
// cell never rides; the recovery brake's own lines the .170 word's
// own cell never rides; the reloot's own lines the .171 word's own
// cell never rides; the camp furnace's own mass the .165 word's
// own cell never rides; the iron commune's own raw colon mass the
// .163 word's own cell never rides; the sword's own raw docket mass
// the .162 word's own cell never rides; the fuel anchor scan's own
// mass the .161 word's own cell never rides; the food commons' raw
// docket mass the .160 word's own cell never rides; the fuel commons'
// own raw docket mass the .159 word's own cell never rides; the
// tunnel verdicts the .158 word's own cell never ride; the food trip
// dockets the .157 word's own cell never ride; the climb-refused
// class the .147 word's own cell never rides; the climb out skins the
// climb-out book's own cells never ride; the walk-lane census cells
// the walk book's own axes never ride; the no-colon junk never
// rides).
import { finalBanks, finalBankTrendConsistent, finalBankTrendRow } from '../../src/lib/finalbanktrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, this word prices the final bank's own mass across the faces - the final bank's own seat, co-existence by seat never by duplication)"

const HEAD = "the final bank's own trend (v0.976.172)"
const SWING = HEAD + ": the final bank's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the final bank's rise ran two steps deep - "
const SWELL_TAIL = " - the final bank's own swell " + TAIL
const FADE = HEAD + ": the final bank's fall ran two steps deep - "
const FADE_TAIL = " - the final bank's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the final bank
// regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 736u the faces' own total, THE FIELD'S OWN TOP THE COUNT 62
// the face 354's own top rode once - THE CRATER'S OWN RIM, the +50
// the max rise rode TWICE two legs (the face 354's own window's
// second leg and the face 355's own window's first leg the shared
// leg), the -56 the max fall rode TWICE two legs (the face 355's own
// window's second leg and the face 356's own window's first leg the
// shared leg) - THE MAX RISE AND THE MAX FALL THE BACK-TO-BACK STEPS,
// THE FIELD'S OWN FLOOR THE COUNT 4 rode TWO faces, ZERO FACES NONE
// - THE SKIN NEVER DRIED.
const P = {}
P[348] = 8
P[349] = 4
P[350] = 14
P[351] = 26
P[352] = 14
P[353] = 12
P[354] = 62
P[355] = 6
P[356] = 8
P[357] = 15
P[358] = 21
P[359] = 12
P[360] = 33
P[361] = 20
P[362] = 20
P[363] = 6
P[364] = 4
P[365] = 16
P[366] = 41
P[367] = 15
P[368] = 22
P[369] = 11
P[370] = 9
P[371] = 16
P[372] = 33
P[373] = 29
P[374] = 36
P[375] = 9
P[376] = 12
P[377] = 30
P[378] = 28
P[379] = 25
P[380] = 16
P[381] = 12
P[382] = 7
P[383] = 30
P[384] = 11
P[385] = 31
P[386] = 12
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 736, 'the cell 736u the field holds')
const w = (f) => finalBankTrendRow({ back: { finalBanks: P[f - 2] }, prev: { finalBanks: P[f - 1] }, cur: { finalBanks: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (TWENTY-TWO swings, SIX swells, SEVEN fades, the TWO
// honest silences)
const SWINGS = {
  350: '8 -> 4 (-4) -> 14 (+10)',
  352: '14 -> 26 (+12) -> 14 (-12)',
  354: '14 -> 12 (-2) -> 62 (+50)',
  355: '12 -> 62 (+50) -> 6 (-56)',
  356: '62 -> 6 (-56) -> 8 (+2)',
  359: '15 -> 21 (+6) -> 12 (-9)',
  360: '21 -> 12 (-9) -> 33 (+21)',
  361: '12 -> 33 (+21) -> 20 (-13)',
  365: '6 -> 4 (-2) -> 16 (+12)',
  367: '16 -> 41 (+25) -> 15 (-26)',
  368: '41 -> 15 (-26) -> 22 (+7)',
  369: '15 -> 22 (+7) -> 11 (-11)',
  371: '11 -> 9 (-2) -> 16 (+7)',
  373: '16 -> 33 (+17) -> 29 (-4)',
  374: '33 -> 29 (-4) -> 36 (+7)',
  375: '29 -> 36 (+7) -> 9 (-27)',
  376: '36 -> 9 (-27) -> 12 (+3)',
  378: '12 -> 30 (+18) -> 28 (-2)',
  383: '12 -> 7 (-5) -> 30 (+23)',
  384: '7 -> 30 (+23) -> 11 (-19)',
  385: '30 -> 11 (-19) -> 31 (+20)',
  386: '11 -> 31 (+20) -> 12 (-19)'
}
const SWELLS = {
  351: '4 -> 14 (+10) -> 26 (+12)',
  357: '6 -> 8 (+2) -> 15 (+7)',
  358: '8 -> 15 (+7) -> 21 (+6)',
  366: '4 -> 16 (+12) -> 41 (+25)',
  372: '9 -> 16 (+7) -> 33 (+17)',
  377: '9 -> 12 (+3) -> 30 (+18)'
}
const FADES = {
  353: '26 -> 14 (-12) -> 12 (-2)',
  364: '20 -> 6 (-14) -> 4 (-2)',
  370: '22 -> 11 (-11) -> 9 (-2)',
  379: '30 -> 28 (-2) -> 25 (-3)',
  380: '28 -> 25 (-3) -> 16 (-9)',
  381: '25 -> 16 (-9) -> 12 (-4)',
  382: '16 -> 12 (-4) -> 7 (-5)'
}
const SILENCES = [362, 363]

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
assert.deepEqual(tally, { swing: 22, swell: 6, fade: 7, silence: 2 })

// THE ONE-WINDOW ROUND TRIP - the face 352's own window the mirrored
// bounds (+12 the climb, -12 the return the same size)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [352], 'the one round trip the book rides - the mirrored bounds')

// THE MIRRORED HOLD - the one held boundary the two silences share
// (the boundary 361->362 the count 20/20 both silences ride)
const heldLegs = []
for (let f = 350; f <= 386; f++) {
  if (P[f] === P[f - 1]) heldLegs.push(f)
}
assert.deepEqual(heldLegs, [362], 'the one held boundary the two silences share')
assert.equal(w(362), null, 'the mirrored pair the second leg the held step rides')
assert.equal(w(363), null, 'the mirrored pair the first leg the held step rides')
assert.equal(P[361], 20, 'the held boundary the count 20 the pair rides')
assert.equal(P[362], 20, 'the held boundary the count 20 the pair rides')

// THE FOUR-FADE RUN THE SECOND THE FAMILY HOLDS - the faces
// 379/380/381/382's own windows the held legs chain the run rides
assert.deepEqual(Object.keys(FADES).map(Number).filter(f => f >= 379), [379, 380, 381, 382], 'the four-fade run')
// the back-to-back swell pair 357/358 the +7 the shared leg
assert.equal(P[357] - P[356], 7, 'the swell pair the +7 the shared leg rides')
assert.equal(P[358] - P[357], 6, 'the swell pair the second leg the build rides')

// THE ZERO FACES NONE - THE SKIN NEVER DRIED (the final bank never
// dries the fleet's own chain law holds)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.deepEqual(zeroFaces, [], 'zero faces none the skin never dried')

// landmark chains byte-exact full literals
// THE FIELD'S OWN OPENER - the face 350's own swing the field's own
// first word rode (the faces 348/349 no window the carrier's own law)
assert.equal(w(350), SWING + '8 -> 4 (-4) -> 14 (+10)' + SWING_TAIL)
// THE TOP'S OWN ARRIVAL THE SWING'S OWN SECOND LEG (the face 354's
// own window the +50 the max rise's own bound the top beside)
assert.equal(Math.max(...Object.values(P)), 62, 'the top the count 62 the field holds')
assert.equal(w(354), SWING + '14 -> 12 (-2) -> 62 (+50)' + SWING_TAIL)
// THE BOUNDS' OWN WINDOW (the face 355's own window both bounds one
// window deep - the +50 the first leg the arrival, the -56 the second
// leg the crater's own drain)
assert.equal(w(355), SWING + '12 -> 62 (+50) -> 6 (-56)' + SWING_TAIL)
// THE MAX FALL'S OWN BOUND TWICE TWO LEGS (the face 356's own swing's
// first leg the shared leg the crater's own floor rode)
assert.equal(w(356), SWING + '62 -> 6 (-56) -> 8 (+2)' + SWING_TAIL)
// THE ROUND TRIP (the face 352's own window - the mirrored bounds)
assert.equal(w(352), SWING + '14 -> 26 (+12) -> 14 (-12)' + SWING_TAIL)
// THE FLOOR'S OWN ARRIVAL (the face 364's own fade the floor the
// count 4 the faces 349/364's own pair)
assert.equal(Math.min(...Object.values(P)), 4, 'the floor the count 4 the field holds')
assert.equal(w(364), FADE + '20 -> 6 (-14) -> 4 (-2)' + FADE_TAIL)
// THE FOUR-FADE RUN (the faces 379/380/381/382's own windows the
// honest fades the chain keeps)
assert.equal(w(379), FADE + '30 -> 28 (-2) -> 25 (-3)' + FADE_TAIL)
assert.equal(w(380), FADE + '28 -> 25 (-3) -> 16 (-9)' + FADE_TAIL)
assert.equal(w(381), FADE + '25 -> 16 (-9) -> 12 (-4)' + FADE_TAIL)
assert.equal(w(382), FADE + '16 -> 12 (-4) -> 7 (-5)' + FADE_TAIL)
// THE MIRRORED SILENCE PAIR (the faces 362/363's own windows the held
// law keeps - the same boundary both silences ride)
assert.equal(w(362), null)
assert.equal(w(363), null)
// THE LAST WORD (the face 386's own swing the book's own last word)
assert.equal(w(386), SWING + '11 -> 31 (+20) -> 12 (-19)' + SWING_TAIL)

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(finalBankTrendRow({ back: { finalBanks: 1 }, prev: { finalBanks: 2 }, cur: { finalBanks: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(finalBankTrendRow({ back: { finalBanks: 3 }, prev: { finalBanks: 2 }, cur: { finalBanks: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(finalBankTrendRow({ back: { finalBanks: 1 }, prev: { finalBanks: 3 }, cur: { finalBanks: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(finalBankTrendRow({ back: { finalBanks: 2 }, prev: { finalBanks: 2 }, cur: { finalBanks: 3 } }), null)
assert.equal(finalBankTrendRow({ back: { finalBanks: 2 }, prev: { finalBanks: 3 }, cur: { finalBanks: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole
assert.equal(finalBankTrendRow({ back: { finalBanks: 0 }, prev: { finalBanks: 1 }, cur: { finalBanks: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(finalBankTrendRow({ back: { finalBanks: 0 }, prev: { finalBanks: 0 }, cur: { finalBanks: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(finalBankTrendRow(null), null)
assert.equal(finalBankTrendRow(undefined), null)
assert.equal(finalBankTrendRow('junk'), null)
assert.equal(finalBankTrendRow(42), null)
assert.equal(finalBankTrendRow([]), null)
assert.equal(finalBankTrendRow({}), null)
assert.equal(finalBankTrendRow({ back: { finalBanks: 1 }, prev: { finalBanks: 2 } }), null)
assert.equal(finalBankTrendRow({ back: { finalBanks: 1 }, prev: { finalBanks: 2 }, cur: {} }), null)
assert.equal(finalBankTrendRow({ back: { finalBanks: 'x' }, prev: { finalBanks: 2 }, cur: { finalBanks: 3 } }), null)
assert.equal(finalBankTrendRow({ back: { finalBanks: 1 }, prev: { finalBanks: 2 }, cur: { finalBanks: -1 } }), null)
assert.equal(finalBankTrendRow({ back: { finalBanks: 1.5 }, prev: { finalBanks: 2 }, cur: { finalBanks: 3 } }), null)
assert.equal(finalBankTrendRow({ back: null, prev: { finalBanks: 2 }, cur: { finalBanks: 3 } }), null)
assert.equal(finalBankTrendRow({ back: { finalBanks: 1 }, prev: [2], cur: { finalBanks: 3 } }), null)
// the extra keys never reject (the fence never overreaches)
assert.equal(finalBankTrendRow({ back: { finalBanks: 1, extra: 9 }, prev: { finalBanks: 2, junk: 'x' }, cur: { finalBanks: 3, deep: { a: 1 } } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
// the fence's own read
assert.equal(finalBankTrendConsistent({ back: { finalBanks: 0 }, prev: { finalBanks: 0 }, cur: { finalBanks: 0 } }), true)
assert.equal(finalBankTrendConsistent({ back: { finalBanks: 5 }, prev: { finalBanks: 9 }, cur: { finalBanks: 2 }, spare: true }), true)
assert.equal(finalBankTrendConsistent(null), false)
assert.equal(finalBankTrendConsistent({ back: { finalBanks: 1 }, prev: { finalBanks: 2 }, cur: { finalBanks: NaN } }), false)

// THE CELL'S OWN READ - the real final bank lines ride (the raw mass
// the lane prints - every line the lane prints rides, no exclusion
// the lane needs; the climb's own prose zeros and the delivered
// verdicts and the stagger arms and the doom latch's own re-arms all
// ride)
assert.equal(finalBanks([
  'F1 final bank: 0 (still underground after 1 climb attempt - the chain from the shaft bottom is doomed walks)',
  'F16 final bank: 0 (dooms-latched after 2 failed shaft-bottom climb cycles - the chain is refused, the clock mines on)',
  'F1 final bank: the doom latch re-arms once (2 failed shaft-bottom climb cycles, the 120s cooldown paid) - one more cycle rides, the next failure re-latches'
]), 3)
assert.equal(finalBanks([
  'F7 final bank: +234',
  'F2 final bank: staggered +56s',
  'F9 final bank: 0 (chest unreachable (No path to the goal!))'
]), 3)
// THE DEFERRED SIBLING'S OWN LINES the .148 word's own book never
// rides here - the lanes never merge (the defer seat the .148 word's
// own cell holds, the raw seat this word prices)
assert.equal(finalBanks(['F13 final bank deferred: night (tod=12840) - the pocket rides out the dark alive (the v0.140.1 night hold)']), 0)
// THE BANK COLON'S OWN LINES the .164 word's own cell never rides
assert.equal(finalBanks(['F6 bank: yard walk arrived in 0s (1 attempt)']), 0)
assert.equal(finalBanks(['F9 bank: chest unreachable (Took to long to decide path to goal!) (7 blocks from yard) - walking back']), 0)
// THE BUDGET SHAPE the bankcensus's own cell never rides
assert.equal(finalBanks(['F6 final bank budget: flow-priced 240s (fleet pocket 2172u at 1.5u/s needs 1448s) - the static 240s covered only the fast flows']), 0)
// THE BANK FALLBACK'S OWN LANE never rides
assert.equal(finalBanks(['F6 bank fallback: none (nothing to deposit)']), 0)
// THE PRE-POSITION SIBLING'S OWN LINES never ride
assert.equal(finalBanks(['F6 pre-position bank: 0 (chest unreachable (No path to the goal!))']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(finalBanks(['F4 bank trip: planned budget 300s']), 0)
assert.equal(finalBanks(['F5 sword: OK (wooden_sword, holds 1)']), 0)
assert.equal(finalBanks(['F5 sword due: refill scheduled (holds 0)']), 0)
assert.equal(finalBanks(['F8 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here']), 0)
assert.equal(finalBanks(['F6 camp furnace: no build (machine near)']), 0)
assert.equal(finalBanks(['F5 fuel anchor: delivered 2 fuel overage (ok)']), 0)
assert.equal(finalBanks(['F1 fuel anchor scan: the palette read empty x1 - the singular probe rescued the scan (chest at [-120,81,392])']), 0)
assert.equal(finalBanks(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(finalBanks(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(finalBanks(['F5 food commons: chest holds no food']), 0)
assert.equal(finalBanks(['F6 fuel commons: budget spent (0/2 units)']), 0)
assert.equal(finalBanks(['F5 spare pick: OK (wooden_pickaxe, holds 2)']), 0)
assert.equal(finalBanks(['F8 spare pick due: spare (planks available)']), 0)
assert.equal(finalBanks(['F7 recovery brake: 1 consecutive failures - next attempt in 45s']), 0)
assert.equal(finalBanks(['F3 reloot: walking to the own death spot [-100,64,300]']), 0)
assert.equal(finalBanks(['F5 reloot: write-off']), 0)
// the walk-lane census cells never ride
assert.equal(finalBanks(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
// the climb out skins never ride - the climb-out never banks
assert.equal(finalBanks(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(finalBanks(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(finalBanks(['F6 final bank 0 (still underground)']), 0)
assert.equal(finalBanks(['F6 final bank']), 0)
assert.equal(finalBanks(['final bank: +234']), 0)
assert.equal(finalBanks(['F8 final bank-extra: +234']), 0)
assert.equal(finalBanks(['F8 final banks: +234']), 0)
assert.equal(finalBanks(['F8 final bank deferred: night (tod=18000)']), 0)

// the defensive reads
assert.equal(finalBanks(null), 0)
assert.equal(finalBanks(undefined), 0)
assert.equal(finalBanks('junk'), 0)
assert.equal(finalBanks(42), 0)
assert.equal(finalBanks([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 final bank: +234',
  'F9 final bank: 0 (chest unreachable (No path to the goal!))',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(finalBanks(lines), 2)
const fold = { back: { finalBanks: finalBanks(lines) }, prev: { finalBanks: 20 }, cur: { finalBanks: 6 } }
assert.equal(finalBankTrendRow(fold), SWING + '2 -> 20 (+18) -> 6 (-14)' + SWING_TAIL)

console.log('finalbanktrend.test: all pins green')
