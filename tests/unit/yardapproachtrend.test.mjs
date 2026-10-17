// tests/unit/yardapproachtrend.test.mjs - THE YARD APPROACH'S OWN
// TREND's own pin battery (v0.976.175): the field's own chains
// byte-exact (THE WALK LANE'S OWN APPROACH SEAT beside the raw lane
// words - the skipped verdicts and the attempt verdicts and the
// nudge's own nested prose and the failed skins the lane prints,
// THE CELL'S OWN WEIGHT 244u the thirty-nine faces' own total - the
// fire-0630's own named estimate 310u rode, the strict RE's own
// arithmetic 244u the weight the field holds, THE FIELD'S OWN TOP
// THE COUNT 20 the face 354's own top rode once - THE BOUNDS' OWN
// ARRIVAL the +16 the max rise the bound and the top the same
// window holds, the -15 the max fall rode TWICE two legs the shared
// leg - THE LAST WORD'S OWN TRADE, THE FIELD'S OWN FLOOR THE COUNT
// ZERO rode FOUR faces - the dried skin four faces deep), THIRTY-
// THREE of THIRTY-SEVEN windows speaking (TWENTY-TWO swings - THE
// SWING-HEAVIEST BOOK THE FAMILY HOLDS, SEVEN swells, FOUR fades,
// the FOUR honest silences - THE MIRRORED HOLD PAIRS TWO the faces
// 357/358 and 367/368's own windows, THE FOUR-SWELL RUN the faces
// 381/382/383/384's own windows the staircase, THE THREE ONE-WINDOW
// ROUND TRIPS the faces 353/361/364's own windows), the byte-pin
// battery, the fence battery, the cell's own read, the one-parser
// ride over the REAL yard approach lines (the raw mass the lane
// prints; the bank fallback's own lines the .173 word's own cell
// never rides - the lanes never merge; the final bank's own lines
// the .172 word's own cell never rides; the bank colon's own lines
// the .164 word's own cell never rides; the death carry's own lines
// the .174 word's own cell never rides; the reloot's own lines the
// .171 word's own cell never rides; the deposit chain's own lines
// never ride; the climb out skins the climb-out book's own cells
// never ride; the walk-lane census cells the walk book's own axes
// never ride; the no-colon junk never rides).
import { yardApproaches, yardApproachTrendConsistent, yardApproachTrendRow } from '../../src/lib/yardapproachtrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, this word prices the yard approach's own mass across the faces - the yard approach's own seat, co-existence by seat never by duplication)"

const HEAD = "the yard approach's own trend (v0.976.175)"
const SWING = HEAD + ": the yard approach's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the yard approach's rise ran two steps deep - "
const SWELL_TAIL = " - the yard approach's own swell " + TAIL
const FADE = HEAD + ": the yard approach's fall ran two steps deep - "
const FADE_TAIL = " - the yard approach's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the approach
// regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 244u the faces' own total, THE FIELD'S OWN TOP THE COUNT
// 20 the face 354's own top rode once, THE FIELD'S OWN FLOOR THE
// COUNT ZERO rode FOUR faces (the dried skin four faces deep).
const P = {}
P[348] = 7
P[349] = 8
P[350] = 1
P[351] = 4
P[352] = 0
P[353] = 4
P[354] = 20
P[355] = 12
P[356] = 0
P[357] = 0
P[358] = 1
P[359] = 4
P[360] = 3
P[361] = 4
P[362] = 9
P[363] = 7
P[364] = 9
P[365] = 8
P[366] = 2
P[367] = 2
P[368] = 13
P[369] = 3
P[370] = 10
P[371] = 2
P[372] = 12
P[373] = 8
P[374] = 1
P[375] = 7
P[376] = 0
P[377] = 14
P[378] = 6
P[379] = 4
P[380] = 5
P[381] = 6
P[382] = 8
P[383] = 11
P[384] = 17
P[385] = 2
P[386] = 10
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 244, 'the cell 244u the field holds')
const w = (f) => yardApproachTrendRow({ back: { yardApproaches: P[f - 2] }, prev: { yardApproaches: P[f - 1] }, cur: { yardApproaches: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (TWENTY-TWO swings, SEVEN swells, FOUR fades, the
// FOUR honest silences)
const SWINGS = {
  350: '7 -> 8 (+1) -> 1 (-7)',
  351: '8 -> 1 (-7) -> 4 (+3)',
  352: '1 -> 4 (+3) -> 0 (-4)',
  353: '4 -> 0 (-4) -> 4 (+4)',
  355: '4 -> 20 (+16) -> 12 (-8)',
  360: '1 -> 4 (+3) -> 3 (-1)',
  361: '4 -> 3 (-1) -> 4 (+1)',
  363: '4 -> 9 (+5) -> 7 (-2)',
  364: '9 -> 7 (-2) -> 9 (+2)',
  365: '7 -> 9 (+2) -> 8 (-1)',
  369: '2 -> 13 (+11) -> 3 (-10)',
  370: '13 -> 3 (-10) -> 10 (+7)',
  371: '3 -> 10 (+7) -> 2 (-8)',
  372: '10 -> 2 (-8) -> 12 (+10)',
  373: '2 -> 12 (+10) -> 8 (-4)',
  375: '8 -> 1 (-7) -> 7 (+6)',
  376: '1 -> 7 (+6) -> 0 (-7)',
  377: '7 -> 0 (-7) -> 14 (+14)',
  378: '0 -> 14 (+14) -> 6 (-8)',
  380: '6 -> 4 (-2) -> 5 (+1)',
  385: '11 -> 17 (+6) -> 2 (-15)',
  386: '17 -> 2 (-15) -> 10 (+8)'
}
const SWELLS = {
  354: '0 -> 4 (+4) -> 20 (+16)',
  359: '0 -> 1 (+1) -> 4 (+3)',
  362: '3 -> 4 (+1) -> 9 (+5)',
  381: '4 -> 5 (+1) -> 6 (+1)',
  382: '5 -> 6 (+1) -> 8 (+2)',
  383: '6 -> 8 (+2) -> 11 (+3)',
  384: '8 -> 11 (+3) -> 17 (+6)'
}
const FADES = {
  356: '20 -> 12 (-8) -> 0 (-12)',
  366: '9 -> 8 (-1) -> 2 (-6)',
  374: '12 -> 8 (-4) -> 1 (-7)',
  379: '14 -> 6 (-8) -> 4 (-2)'
}
const SILENCES = [357, 358, 367, 368]

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
assert.deepEqual(tally, { swing: 22, swell: 7, fade: 4, silence: 4 })

// THE THREE ONE-WINDOW ROUND TRIPS - the mirrored bounds the book
// rides whole (the faces 353/361/364's own windows)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [353, 361, 364], 'the three round trips the book rides - the mirrored bounds')

// THE TWO HELD BOUNDARIES - the mirrored hold pairs the silences
// share (the boundaries 356/357 and 366/367 the pairs ride)
const heldLegs = []
for (let f = 349; f <= 386; f++) {
  if (P[f] === P[f - 1]) heldLegs.push(f)
}
assert.deepEqual(heldLegs, [357, 367], 'the two held boundaries the pairs share')
// THE FIRST PAIR the faces 357/358's own windows (the boundary
// 356/357 the two silences share - the crater's own floor the count
// 0 the pair holds)
assert.equal(P[356], 0, 'the first pair the count 0 the boundary holds')
assert.equal(P[357], 0, 'the first pair the count 0 the boundary holds')
assert.equal(w(357), null, 'the first pair the second leg the held step rides')
assert.equal(w(358), null, 'the first pair the first leg the held step rides')
// THE SECOND PAIR the faces 367/368's own windows (the boundary
// 366/367 the two silences share - the count 2 the pair holds)
assert.equal(P[366], 2, 'the second pair the count 2 the boundary holds')
assert.equal(P[367], 2, 'the second pair the count 2 the boundary holds')
assert.equal(w(367), null, 'the second pair the second leg the held step rides')
assert.equal(w(368), null, 'the second pair the first leg the held step rides')

// THE FOUR-SWELL RUN the faces 381/382/383/384's own windows - the
// staircase the chain keeps
assert.deepEqual(Object.keys(SWELLS).map(Number).filter(f => f >= 381), [381, 382, 383, 384], 'the four-swell run')

// THE ZERO FACES - the dried skin four faces deep (the faces
// 352/356/357/376's own zeros)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.deepEqual(zeroFaces, [352, 356, 357, 376], 'zero faces four the dried skin rides')

// THE MAX RISE AND THE MAX FALL - the bounds the field holds
assert.equal(P[354] - P[353], 16, 'the max rise the +16 the bound rides once')
assert.equal(P[385] - P[384], -15, 'the max fall the -15 the shared leg rides')
assert.equal(P[386] - P[385], 8, 'the last word the second leg the recovery rides')
assert.equal(P[377] - P[376], 14, 'the second-heaviest rise the +14 the rebuild rides')
assert.equal(P[378] - P[377], -8, 'the rebuild the payback the trade rides')

// landmark chains byte-exact full literals
// THE FIELD'S OWN OPENER - the face 350's own window the swing the
// field's own first word rode (the faces 348/349 no window the
// carrier's own law)
assert.equal(w(350), SWING + '7 -> 8 (+1) -> 1 (-7)' + SWING_TAIL)
// THE TOP'S OWN ARRIVAL THE BOUNDS' OWN WINDOW (the face 354's own
// window the +16 the max rise's own bound the second leg the top
// beside)
assert.equal(Math.max(...Object.values(P)), 20, 'the top the count 20 the field holds')
assert.equal(w(354), SWELL + '0 -> 4 (+4) -> 20 (+16)' + SWELL_TAIL)
// THE TOP'S OWN DRAIN (the face 356's own fade the -12 the shared
// leg the crater's own floor the zero's own arrival)
assert.equal(w(356), FADE + '20 -> 12 (-8) -> 0 (-12)' + FADE_TAIL)
// THE MAX FALL'S OWN BOUND (the face 385's own window the -15 the
// second leg, the face 386's own window the same the shared leg)
assert.equal(w(385), SWING + '11 -> 17 (+6) -> 2 (-15)' + SWING_TAIL)
// THE LAST WORD (the face 386's own swing the -15 the first leg the
// last word holds)
assert.equal(w(386), SWING + '17 -> 2 (-15) -> 10 (+8)' + SWING_TAIL)
// THE FLOOR'S OWN REBUILD (the face 377's own swing the +14 the
// crater's own floor the rebuild's own bound)
assert.equal(w(377), SWING + '7 -> 0 (-7) -> 14 (+14)' + SWING_TAIL)
// THE SPIKE'S OWN TRADE (the face 369's own swing the +11 the build
// the -10 the payback)
assert.equal(w(369), SWING + '2 -> 13 (+11) -> 3 (-10)' + SWING_TAIL)
// THE ROUND TRIPS (the faces 353/364's own windows the mirrored
// bounds)
assert.equal(w(353), SWING + '4 -> 0 (-4) -> 4 (+4)' + SWING_TAIL)
assert.equal(w(364), SWING + '9 -> 7 (-2) -> 9 (+2)' + SWING_TAIL)
// THE FOUR-SWELL RUN (the faces 381/382/383/384's own windows the
// staircase the chain keeps)
assert.equal(w(381), SWELL + '4 -> 5 (+1) -> 6 (+1)' + SWELL_TAIL)
assert.equal(w(382), SWELL + '5 -> 6 (+1) -> 8 (+2)' + SWELL_TAIL)
assert.equal(w(383), SWELL + '6 -> 8 (+2) -> 11 (+3)' + SWELL_TAIL)
assert.equal(w(384), SWELL + '8 -> 11 (+3) -> 17 (+6)' + SWELL_TAIL)
// THE MIRRORED HOLD PAIRS (the silences the held law keeps)
assert.equal(w(357), null)
assert.equal(w(358), null)
assert.equal(w(367), null)
assert.equal(w(368), null)

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(yardApproachTrendRow({ back: { yardApproaches: 1 }, prev: { yardApproaches: 2 }, cur: { yardApproaches: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(yardApproachTrendRow({ back: { yardApproaches: 3 }, prev: { yardApproaches: 2 }, cur: { yardApproaches: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(yardApproachTrendRow({ back: { yardApproaches: 1 }, prev: { yardApproaches: 3 }, cur: { yardApproaches: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(yardApproachTrendRow({ back: { yardApproaches: 2 }, prev: { yardApproaches: 2 }, cur: { yardApproaches: 3 } }), null)
assert.equal(yardApproachTrendRow({ back: { yardApproaches: 2 }, prev: { yardApproaches: 3 }, cur: { yardApproaches: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole
assert.equal(yardApproachTrendRow({ back: { yardApproaches: 0 }, prev: { yardApproaches: 1 }, cur: { yardApproaches: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(yardApproachTrendRow({ back: { yardApproaches: 0 }, prev: { yardApproaches: 0 }, cur: { yardApproaches: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(yardApproachTrendRow(null), null)
assert.equal(yardApproachTrendRow(undefined), null)
assert.equal(yardApproachTrendRow('junk'), null)
assert.equal(yardApproachTrendRow(42), null)
assert.equal(yardApproachTrendRow([]), null)
assert.equal(yardApproachTrendRow({}), null)
assert.equal(yardApproachTrendRow({ back: { yardApproaches: 1 }, prev: { yardApproaches: 2 } }), null)
assert.equal(yardApproachTrendRow({ back: { yardApproaches: 1 }, prev: { yardApproaches: 2 }, cur: {} }), null)
assert.equal(yardApproachTrendRow({ back: { yardApproaches: 'x' }, prev: { yardApproaches: 2 }, cur: { yardApproaches: 3 } }), null)
assert.equal(yardApproachTrendRow({ back: { yardApproaches: 1 }, prev: { yardApproaches: 2 }, cur: { yardApproaches: -1 } }), null)
assert.equal(yardApproachTrendRow({ back: { yardApproaches: 1.5 }, prev: { yardApproaches: 2 }, cur: { yardApproaches: 3 } }), null)
assert.equal(yardApproachTrendRow({ back: null, prev: { yardApproaches: 2 }, cur: { yardApproaches: 3 } }), null)
assert.equal(yardApproachTrendRow({ back: { yardApproaches: 1 }, prev: [2], cur: { yardApproaches: 3 } }), null)
// the extra keys never reject (the fence never overreaches)
assert.equal(yardApproachTrendRow({ back: { yardApproaches: 1, extra: 9 }, prev: { yardApproaches: 2, junk: 'x' }, cur: { yardApproaches: 3, deep: { a: 1 } } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
// the fence's own read
assert.equal(yardApproachTrendConsistent({ back: { yardApproaches: 0 }, prev: { yardApproaches: 0 }, cur: { yardApproaches: 0 } }), true)
assert.equal(yardApproachTrendConsistent({ back: { yardApproaches: 5 }, prev: { yardApproaches: 9 }, cur: { yardApproaches: 2 }, spare: true }), true)
assert.equal(yardApproachTrendConsistent(null), false)
assert.equal(yardApproachTrendConsistent({ back: { yardApproaches: 1 }, prev: { yardApproaches: 2 }, cur: { yardApproaches: NaN } }), false)

// THE CELL'S OWN READ - the real yard approach lines ride (the raw
// mass the lane prints - every line the lane prints rides, no
// exclusion the lane needs; the skipped verdicts and the attempt
// verdicts and the nudge's own prose and the failed skins all ride)
assert.equal(yardApproaches([
  'F17 yard approach: skipped (budget exhausted)',
  'F6 yard approach: direct (attempt 2)',
  'F3 yard approach: failed (walk timeout after 15000ms) - the direct ladder runs from here'
]), 3)
assert.equal(yardApproaches([
  'F12 yard approach: the nudge rode one segment (15.2s), the goal now d=18',
  'F9 yard approach: chest unreachable (No path to the goal!) (attempt 1)'
]), 2)
// THE BANK FALLBACK'S OWN LINES the .173 word's own cell never rides
// here - the lanes never merge
assert.equal(yardApproaches(['F6 bank fallback: none (nothing to deposit)']), 0)
// THE FINAL BANK'S OWN LINES the .172 word's own cell never rides
assert.equal(yardApproaches(['F1 final bank: 0 (still underground after 1 climb attempt - the chain from the shaft bottom is doomed walks)']), 0)
assert.equal(yardApproaches(['F7 final bank: +234']), 0)
// THE BANK COLON'S OWN LINES the .164 word's own cell never rides
assert.equal(yardApproaches(['F18 bank: smelt hold skipped - no fuel in pocket (coal 2)']), 0)
// THE DEATH CARRY'S OWN LINES the .174 word's own cell never rides
assert.equal(yardApproaches(['F8 death carry: the un-attempted stake rides the rebuild (stake ~35u, age 42s) - the lane re-arms on the fresh pass']), 0)
// THE RELOOT'S OWN LINES the .171 word's own cell never rides
assert.equal(yardApproaches(['F3 reloot: walking to the own death spot [-100,64,300]']), 0)
// THE DEPOSIT CHAIN'S OWN LINES never ride
assert.equal(yardApproaches(['F5 deposit: 12 oak_log deposited (chest at yard)']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(yardApproaches(['F7 recovery brake: 1 consecutive failures - next attempt in 45s']), 0)
assert.equal(yardApproaches(['F5 sword: OK (wooden_sword, holds 1)']), 0)
assert.equal(yardApproaches(['F8 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here']), 0)
assert.equal(yardApproaches(['F6 camp furnace: no build (machine near)']), 0)
assert.equal(yardApproaches(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(yardApproaches(['F6 bank trip: planned budget 204s']), 0)
assert.equal(yardApproaches(['F6 pre-position bank: 0 (chest unreachable (No path to the goal!))']), 0)
// the walk-lane census cells never ride
assert.equal(yardApproaches(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
// the climb out skins never ride - the climb-out never approaches
assert.equal(yardApproaches(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(yardApproaches(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(yardApproaches(['F6 yard approach 0 (nothing)']), 0)
assert.equal(yardApproaches(['F6 yard approach']), 0)
assert.equal(yardApproaches(['yard approach: direct (attempt 1)']), 0)
assert.equal(yardApproaches(['F8 yard approaches: 3']), 0)
assert.equal(yardApproaches(['F8 yard approach-extra: direct']), 0)

// the defensive reads
assert.equal(yardApproaches(null), 0)
assert.equal(yardApproaches(undefined), 0)
assert.equal(yardApproaches('junk'), 0)
assert.equal(yardApproaches(42), 0)
assert.equal(yardApproaches([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F17 yard approach: skipped (budget exhausted)',
  'F6 yard approach: direct (attempt 2)',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(yardApproaches(lines), 2)
const fold = { back: { yardApproaches: yardApproaches(lines) }, prev: { yardApproaches: 5 }, cur: { yardApproaches: 2 } }
assert.equal(yardApproachTrendRow(fold), SWING + '2 -> 5 (+3) -> 2 (-3)' + SWING_TAIL)

console.log('yardapproachtrend.test: all pins green')
