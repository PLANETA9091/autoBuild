// tests/unit/foodtripdockettrend.test.mjs - THE DOCKET'S OWN FOOD
// TRIP TREND's own pin battery (v0.976.157): the field's own chains
// byte-exact (THE DOCKET BOOK'S OWN FOOD-TRIP SEAT beside the
// climb-out book's own words - the famine lines and the plate lines
// the docket prints, THE CELL'S OWN WEIGHT 144u the faces' own
// total, THE FIELD'S OWN TOP THE COUNT 13 the face 349's own top
// rode once - NO WINDOW HOLDS the top's own arrival (the field's own
// first step the 2 -> 13 the +11 the max rise step's own single
// bound rode OUTSIDE the windows - the first two faces no window the
// family's own carrier law), the -8 the max fall step's own bound
// rode TWICE (the face 350's own window's second leg the 13 -> 5 the
// drain rode first, the face 386's own window's second leg the 11 ->
// 3 the mirror -8 beside), THE FIELD'S OWN FLOOR THE COUNT 0 the
// faces 353/358/370/372/381's own floors rode FIVE - THE SKIN DRIED
// FIVE), TWENTY-FOUR of THIRTY-SEVEN windows speaking (TWENTY swings,
// ONE swell, THREE fades, the THIRTEEN honest silences - the face
// 377's own full hold and the half-holds the faces 362/363/366/367/
// 374/375/376/378/380/381/384/385's own windows the honest silences
// keep), THE THREE ONE-WINDOW ROUND TRIPS THE BOOK RIDES THREE (the
// faces 365/372/382's own windows), the byte-pin battery, the fence
// battery, the cell's own read, the one-parser ride over the REAL
// docket lines (the 'food trip:' verdicts the fleet19's own docket
// prints; the climb-refused class '0 (climb refused)' the docket's
// own trip climb-refused word's own cell (v0.976.147) never rides -
// the cells never merge; the climb out (food trip) skin the
// climb-out book's own cell (v0.976.156) never rides - the climb-out
// never dockets; the bank trip grant lines the banktriptrend.mjs
// module's own book never rides; the no-colon junk never rides).
import { foodTripDockets, foodTripDocketTrendConsistent, foodTripDocketTrendRow } from '../../src/lib/foodtripdockettrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, this word prices the docket's own food trip verdict mass across the faces - the docket's own food-trip seat, co-existence by seat never by duplication)"

const HEAD = "the food trip docket's own trend (v0.976.157)"
const SWING = HEAD + ": the food trip docket's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the food trip docket's rise ran two steps deep - "
const SWELL_TAIL = " - the food trip docket's own swell " + TAIL
const FADE = HEAD + ": the food trip docket's fall ran two steps deep - "
const FADE_TAIL = " - the food trip docket's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the food trip
// docket regex's own arithmetic, THIRTY-NINE faces deep) - THE
// CELL'S OWN WEIGHT 144u the faces' own total, THE FIELD'S OWN TOP
// THE COUNT 13 the face 349's own top rode once (NO WINDOW HOLDS the
// arrival - the first step outside the windows), the -8 the max fall
// rode TWICE (the face 350's window's second leg first, the face
// 386's second leg the mirror beside), THE FIELD'S OWN FLOOR THE
// COUNT 0 the faces 353/358/370/372/381's own floors rode FIVE -
// THE SKIN DRIED FIVE - TWENTY-FOUR of THIRTY-SEVEN windows speaking
// (TWENTY swings, ONE swell, THREE fades, the THIRTEEN honest
// silences).
const P = {}
P[348] = 2
P[349] = 13
P[350] = 5
P[351] = 6
P[352] = 4
P[353] = 0
P[354] = 5
P[355] = 4
P[356] = 6
P[357] = 7
P[358] = 0
P[359] = 2
P[360] = 1
P[361] = 5
P[362] = 5
P[363] = 3
P[364] = 1
P[365] = 3
P[366] = 3
P[367] = 2
P[368] = 6
P[369] = 1
P[370] = 0
P[371] = 2
P[372] = 0
P[373] = 9
P[374] = 9
P[375] = 4
P[376] = 4
P[377] = 4
P[378] = 1
P[379] = 3
P[380] = 3
P[381] = 0
P[382] = 3
P[383] = 2
P[384] = 2
P[385] = 11
P[386] = 3
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 144, 'the cell 144u the witness holds')
const w = (f) => foodTripDocketTrendRow({ back: { foodTripDockets: P[f - 2] }, prev: { foodTripDockets: P[f - 1] }, cur: { foodTripDockets: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (twenty swings, one swell, three fades, the
// thirteen held windows the honest silences keep - THE THREE
// ONE-WINDOW ROUND TRIPS the faces 365/372/382's own windows ride)
const SWINGS = {
  350: '2 -> 13 (+11) -> 5 (-8)',
  351: '13 -> 5 (-8) -> 6 (+1)',
  352: '5 -> 6 (+1) -> 4 (-2)',
  354: '4 -> 0 (-4) -> 5 (+5)',
  355: '0 -> 5 (+5) -> 4 (-1)',
  356: '5 -> 4 (-1) -> 6 (+2)',
  358: '6 -> 7 (+1) -> 0 (-7)',
  359: '7 -> 0 (-7) -> 2 (+2)',
  360: '0 -> 2 (+2) -> 1 (-1)',
  361: '2 -> 1 (-1) -> 5 (+4)',
  365: '3 -> 1 (-2) -> 3 (+2)',
  368: '3 -> 2 (-1) -> 6 (+4)',
  369: '2 -> 6 (+4) -> 1 (-5)',
  371: '1 -> 0 (-1) -> 2 (+2)',
  372: '0 -> 2 (+2) -> 0 (-2)',
  373: '2 -> 0 (-2) -> 9 (+9)',
  379: '4 -> 1 (-3) -> 3 (+2)',
  382: '3 -> 0 (-3) -> 3 (+3)',
  383: '0 -> 3 (+3) -> 2 (-1)',
  386: '2 -> 11 (+9) -> 3 (-8)'
}
const SWELLS = {
  357: '4 -> 6 (+2) -> 7 (+1)'
}
const FADES = {
  353: '6 -> 4 (-2) -> 0 (-4)',
  364: '5 -> 3 (-2) -> 1 (-2)',
  370: '6 -> 1 (-5) -> 0 (-1)'
}
const SILENCES = [362, 363, 366, 367, 374, 375, 376, 377, 378, 380, 381, 384, 385]

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
assert.deepEqual(tally, { swing: 20, swell: 1, fade: 3, silence: 13 })

// landmark chains byte-exact full literals
// THE FIELD'S OWN TOP NO WINDOW HOLDS - the +11 the face 349's own
// step the max rise step's own single bound rode OUTSIDE the windows
// (the first two faces no window the carrier's own law) - the face
// 350's own window the FIRST the field speaks (the 13 -> 5 the drain
// the max fall's own bound rode first)
assert.equal(w(350), SWING + '2 -> 13 (+11) -> 5 (-8)' + SWING_TAIL)
// THE FACE 386 WINDOW THE MIRROR -8 (the 11 -> 3 the drain the max
// fall's own bound rode TWICE - the face 350's own -8 the first
// beside) AND THE FACE 385'S OWN +9 THE FACE 386'S WINDOW'S FIRST
// LEG (the 2 -> 11 the surcharge the field's own second-heaviest
// step rode INSIDE a window - no window held the +11 the +9 the
// windows' own heaviest leg beside)
assert.equal(w(386), SWING + '2 -> 11 (+9) -> 3 (-8)' + SWING_TAIL)
// THE THREE ONE-WINDOW ROUND TRIPS byte-exact (the book's own three
// - the climb-out food trip's own three beside, the trip's own two
// beside, the bank's own two beside)
assert.equal(w(365), SWING + '3 -> 1 (-2) -> 3 (+2)' + SWING_TAIL)
assert.equal(w(372), SWING + '0 -> 2 (+2) -> 0 (-2)' + SWING_TAIL)
assert.equal(w(382), SWING + '3 -> 0 (-3) -> 3 (+3)' + SWING_TAIL)
// THE FACE 357 WINDOW THE LAST SWELL AND THE ONLY ONE (the 4 -> 7
// the two-step ladder's own single ride)
assert.equal(w(357), SWELL + '4 -> 6 (+2) -> 7 (+1)' + SWELL_TAIL)
// THE FACE 370 WINDOW THE LAST FADE (the 6 -> 0 the drain-and-fade
// the faces 353/364 beside)
assert.equal(w(370), FADE + '6 -> 1 (-5) -> 0 (-1)' + FADE_TAIL)
// THE FACE 377 WINDOW THE FULL HOLD (4 -> 4 -> 4 the honest silence
// keeps) AND THE HALF-HOLDS THE FACES 362/363/366/367/374/375/376/
// 378/380/381/384/385'S OWN WINDOWS THE HONEST SILENCES KEEP
assert.equal(w(377), null)
assert.equal(w(362), null)
assert.equal(w(363), null)
assert.equal(w(366), null)
assert.equal(w(367), null)
assert.equal(w(374), null)
assert.equal(w(375), null)
assert.equal(w(376), null)
assert.equal(w(378), null)
assert.equal(w(380), null)
assert.equal(w(381), null)
assert.equal(w(384), null)
assert.equal(w(385), null)

// the whole book byte-exact - every window the field's own chain
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)
for (const f of SILENCES) assert.equal(w(f), null, 'F' + f + ' held -> null')

// THE BYTE-PIN BATTERY - the family's own banned words the row never
// speaks (byte-pin no return no repeat no stay no run no owns no
// dynasty no turn)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  for (const [f, arc] of Object.entries(SWINGS)) assert.doesNotMatch(SWING + arc + SWING_TAIL, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  for (const [f, arc] of Object.entries(SWELLS)) assert.doesNotMatch(SWELL + arc + SWELL_TAIL, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  for (const [f, arc] of Object.entries(FADES)) assert.doesNotMatch(FADE + arc + FADE_TAIL, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
}

// THE FENCE BATTERY - the fold must prove itself or price nothing
assert.equal(foodTripDocketTrendConsistent(null), false)
assert.equal(foodTripDocketTrendConsistent(undefined), false)
assert.equal(foodTripDocketTrendConsistent('cell'), false)
assert.equal(foodTripDocketTrendConsistent([]), false)
assert.equal(foodTripDocketTrendConsistent({ back: { foodTripDockets: 0 }, prev: { foodTripDockets: 0 } }), false)
assert.equal(foodTripDocketTrendConsistent({ back: { foodTripDockets: 0 }, prev: { foodTripDockets: 0 }, cur: { foodTripDockets: 0 } }), true)
assert.equal(foodTripDocketTrendConsistent({ back: { foodTripDockets: -1 }, prev: { foodTripDockets: 0 }, cur: { foodTripDockets: 0 } }), false)
assert.equal(foodTripDocketTrendConsistent({ back: { foodTripDockets: 1.5 }, prev: { foodTripDockets: 0 }, cur: { foodTripDockets: 0 } }), false)
assert.equal(foodTripDocketTrendConsistent({ back: { foodTripDockets: '3' }, prev: { foodTripDockets: 0 }, cur: { foodTripDockets: 0 } }), false)
assert.equal(foodTripDocketTrendConsistent({ back: null, prev: { foodTripDockets: 0 }, cur: { foodTripDockets: 0 } }), false)
// the fence never rejects extra keys
assert.equal(foodTripDocketTrendConsistent({ back: { foodTripDockets: 0, busy: 1 }, prev: { foodTripDockets: 2, busy: 1 }, cur: { foodTripDockets: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(foodTripDocketTrendRow(null), null)
assert.equal(foodTripDocketTrendRow('x'), null)
assert.equal(foodTripDocketTrendRow({ back: { foodTripDockets: 1 }, prev: { foodTripDockets: 1 }, cur: { foodTripDockets: 1 } }), null)
assert.equal(foodTripDocketTrendRow({ back: { foodTripDockets: 1 }, prev: { foodTripDockets: 0 }, cur: { foodTripDockets: 0 } }), null)

// THE CELL'S OWN READ - foodTripDockets rides the REAL docket lines
// (the face 405's own famine and plate lines the sample rode)
assert.equal(foodTripDockets([
  'F3 food trip: famine (hunger 17, plate 0) - the commons walk',
  'F3 food trip: 0 (no chest reached) - the plate rides to the next bank trip',
  'F12 food trip: famine (hunger 17, plate 0) - the commons walk',
  'F15 food trip: 0 (commons empty) - the plate rides to the next bank trip',
  'F9 food trip: famine (hunger 18, plate 1) - the commons walk'
]), 5)
// the climb-refused class never rides - the .147 word's own cell, the
// cells never merge (the exclusion by the byte-exact shape)
assert.equal(foodTripDockets(['F12 food trip: 0 (climb refused)']), 0)
assert.equal(foodTripDockets([
  'F3 food trip: famine (hunger 17, plate 0) - the commons walk',
  'F3 food trip: 0 (climb refused)',
  'F3 food trip: 0 (no chest reached) - the plate rides to the next bank trip'
]), 2)
// the other lanes' docket lines never ride - the lanes never merge
assert.equal(foodTripDockets(['F4 bank trip: 0 (climb refused)']), 0)
assert.equal(foodTripDockets(['F5 bank trip: planned budget 300s']), 0)
assert.equal(foodTripDockets(['F7 wood trip: 0 (climb refused)']), 0)
// the climb-out (food trip) skin never rides - the climb-out never
// dockets (the climb-out book's own cell v0.976.156)
assert.equal(foodTripDockets(['F3 climb out (food trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(foodTripDockets(['F12 climb out (food trip): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(foodTripDockets(['F5 food trip 0 (climb refused)']), 0)
assert.equal(foodTripDockets(['F6 food trip']), 0)
assert.equal(foodTripDockets(['food trip: famine (hunger 17, plate 0)']), 0)
assert.equal(foodTripDockets(['F8 foodtrip: famine (hunger 17, plate 0)']), 0)
assert.equal(foodTripDockets(['F9 food trip-extra: famine (hunger 17, plate 0)']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F6 food trip: famine (hunger 17, plate 0) - the commons walk',
  'F4 food trip: 0 (commons empty) - the plate rides to the next bank trip',
  'F2 food trip: 0 (climb refused)'
]
assert.equal(foodTripDockets(lines), 2)
const fold = { back: { foodTripDockets: foodTripDockets(lines) }, prev: { foodTripDockets: 5 }, cur: { foodTripDockets: 9 } }
assert.equal(foodTripDocketTrendRow(fold), SWELL + '2 -> 5 (+3) -> 9 (+4)' + SWELL_TAIL)

console.log('foodtripdockettrend.test: all pins green')
