// tests/unit/climboutfoodtriptrend.test.mjs - THE CLIMB-OUT BOOK'S
// OWN FOOD TRIP TREND's own pin battery (v0.976.156): the field's
// own chains byte-exact (THE CLIMB-OUT BOOK'S OWN FOURTH SKIN - the
// bank's 729u the heaviest the climb-out bank word's own cell
// beside, the trip's 619u the second the climb-out trip word's own
// cell beside, the wood trip's 114u the third the climb-out wood
// trip word's own cell beside, THE CELL'S OWN WEIGHT 73u the faces'
// own total byte-true the bank word's own naming rode, THE FIELD'S
// OWN TOP THE COUNT 6 the face 385's own top rode once, the +6 the
// face 385's own window's second leg the max rise step's own single
// bound (the 0 -> 6 the surcharge), the -5 the face 386's own
// window's second leg the max fall step's own bound (the 6 -> 1 the
// drain), THE FIELD'S OWN FLOOR THE COUNT 0 the ELEVEN zero faces'
// own floors rode - THE SKIN DRIED ELEVEN TIMES - the tool
// recovery's own drought-eleven the mirror beside, the wood trip's
// own thrice-dried book beside, the trip skin's own never-dried book
// the contrast), SIXTEEN of THIRTY-SEVEN windows speaking (SIXTEEN
// swings, ONE swell, FIVE fades, the FIFTEEN honest silences) - THE
// SILENT-HEAVIEST BOOK THE FAMILY HOLDS (the tool recovery's own
// fourteen-silence book the mirror beside), THE ONE SWELL BORN OF
// ZERO (the face 361's own window the tool recovery's own swells all
// born of zero the mirror beside), THE THREE ONE-WINDOW ROUND TRIPS
// THE BOOK RIDES THREE (the faces 352/358/382's own windows - the
// trip's own two beside, the bank's own two beside, the wood trip's
// own six beside), the byte-pin battery, the fence battery, the
// cell's own read, the one-parser ride over the REAL food trip
// climb-out lines (the 'climb out (food trip):' verdicts the
// fleet19's own skin prints; the bank/trip/wood trip/tool recovery
// climb-out skins never ride; the docket's own 'F<n> food trip:'
// verdicts (the famine and the plate lines) a different cell never
// rides - the docket never climbs; the docket's own 'F<n> trip:'
// verdicts the tripclimbrefused word's own cell never rides; the
// strict 'tool recovery:' emissions a different cell - the cells
// never merge; the no-colon junk never rides).
import { climbOutFoodTrips, climbOutFoodTripTrendConsistent, climbOutFoodTripTrendRow } from '../../src/lib/climboutfoodtriptrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, this word prices the climb-out book's own food-trip skin mass across the faces - the climb-out book's own food-trip seat, co-existence by seat never by duplication)"

const HEAD = "the climb-out food trip's own trend (v0.976.156)"
const SWING = HEAD + ": the climb-out food trip's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the climb-out food trip's rise ran two steps deep - "
const SWELL_TAIL = " - the climb-out food trip's own swell " + TAIL
const FADE = HEAD + ": the climb-out food trip's fall ran two steps deep - "
const FADE_TAIL = " - the climb-out food trip's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the climb-out
// food trip regex's own arithmetic, THIRTY-NINE faces deep) - THE
// CELL'S OWN WEIGHT 73u the faces' own total (THE CLIMB-OUT BOOK'S
// OWN FOURTH SKIN byte-true the bank word's own naming rode), THE
// FIELD'S OWN TOP THE COUNT 6 the face 385's own top rode once, the
// +6 the face 385's own window's second leg (the 0 -> 6 the
// surcharge), the -5 the face 386's own window's second leg (the 6
// -> 1 the drain), THE FIELD'S OWN FLOOR THE COUNT 0 the ELEVEN
// zero faces' own floors rode (the faces
// 353/356/358/359/367/370/371/372/375/381/384's own floors) - THE
// SKIN DRIED ELEVEN TIMES - SIXTEEN of THIRTY-SEVEN windows speaking
// (SIXTEEN swings, ONE swell, FIVE fades, the FIFTEEN honest
// silences) - THE SILENT-HEAVIEST BOOK THE FAMILY HOLDS.
const P = {}
P[348] = 1
P[349] = 5
P[350] = 2
P[351] = 3
P[352] = 2
P[353] = 0
P[354] = 4
P[355] = 2
P[356] = 0
P[357] = 3
P[358] = 0
P[359] = 0
P[360] = 1
P[361] = 4
P[362] = 4
P[363] = 3
P[364] = 1
P[365] = 2
P[366] = 2
P[367] = 0
P[368] = 4
P[369] = 1
P[370] = 0
P[371] = 0
P[372] = 0
P[373] = 4
P[374] = 4
P[375] = 0
P[376] = 3
P[377] = 1
P[378] = 1
P[379] = 3
P[380] = 2
P[381] = 0
P[382] = 2
P[383] = 2
P[384] = 0
P[385] = 6
P[386] = 1
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 73, 'the cell 73u the witness holds')
const w = (f) => climbOutFoodTripTrendRow({ back: { climbOutFoodTrips: P[f - 2] }, prev: { climbOutFoodTrips: P[f - 1] }, cur: { climbOutFoodTrips: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (sixteen swings, one swell, five fades, the fifteen
// held windows the honest silences keep - THE THREE ONE-WINDOW ROUND
// TRIPS the faces 352/358/382's own windows ride)
const SWINGS = {
  350: '1 -> 5 (+4) -> 2 (-3)',
  351: '5 -> 2 (-3) -> 3 (+1)',
  352: '2 -> 3 (+1) -> 2 (-1)',
  354: '2 -> 0 (-2) -> 4 (+4)',
  355: '0 -> 4 (+4) -> 2 (-2)',
  357: '2 -> 0 (-2) -> 3 (+3)',
  358: '0 -> 3 (+3) -> 0 (-3)',
  365: '3 -> 1 (-2) -> 2 (+1)',
  368: '2 -> 0 (-2) -> 4 (+4)',
  369: '0 -> 4 (+4) -> 1 (-3)',
  376: '4 -> 0 (-4) -> 3 (+3)',
  377: '0 -> 3 (+3) -> 1 (-2)',
  380: '1 -> 3 (+2) -> 2 (-1)',
  382: '2 -> 0 (-2) -> 2 (+2)',
  385: '2 -> 0 (-2) -> 6 (+6)',
  386: '0 -> 6 (+6) -> 1 (-5)'
}
const SWELLS = {
  361: '0 -> 1 (+1) -> 4 (+3)'
}
const FADES = {
  353: '3 -> 2 (-1) -> 0 (-2)',
  356: '4 -> 2 (-2) -> 0 (-2)',
  364: '4 -> 3 (-1) -> 1 (-2)',
  370: '4 -> 1 (-3) -> 0 (-1)',
  381: '3 -> 2 (-1) -> 0 (-2)'
}
const SILENCES = [359, 360, 362, 363, 366, 367, 371, 372, 373, 374, 375, 378, 379, 383, 384]

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
assert.deepEqual(tally, { swing: 16, swell: 1, fade: 5, silence: 15 })

// landmark chains byte-exact full literals
// THE FACE 385 WINDOW THE TOP'S OWN CELL AND THE MAX RISE STEP'S OWN
// SINGLE BOUND (+6 the 0 -> 6 the surcharge) - the top rode once
assert.equal(w(385), SWING + '2 -> 0 (-2) -> 6 (+6)' + SWING_TAIL)
// THE FACE 386 WINDOW THE MAX FALL STEP'S OWN BOUND (-5 the 6 -> 1
// the drain)
assert.equal(w(386), SWING + '0 -> 6 (+6) -> 1 (-5)' + SWING_TAIL)
// THE THREE ONE-WINDOW ROUND TRIPS byte-exact (the book's own three
// - the trip's own two beside, the bank's own two beside, the wood
// trip's own six beside)
assert.equal(w(352), SWING + '2 -> 3 (+1) -> 2 (-1)' + SWING_TAIL)
assert.equal(w(358), SWING + '0 -> 3 (+3) -> 0 (-3)' + SWING_TAIL)
assert.equal(w(382), SWING + '2 -> 0 (-2) -> 2 (+2)' + SWING_TAIL)
// THE FACE 361 WINDOW THE ONE SWELL BORN OF ZERO (the 0 -> 1 -> 4
// the tool recovery's own swells all born of zero the mirror beside)
assert.equal(w(361), SWELL + '0 -> 1 (+1) -> 4 (+3)' + SWELL_TAIL)
// THE FIVE FADES byte-exact (the drain's own five seats)
assert.equal(w(353), FADE + '3 -> 2 (-1) -> 0 (-2)' + FADE_TAIL)
assert.equal(w(356), FADE + '4 -> 2 (-2) -> 0 (-2)' + FADE_TAIL)
assert.equal(w(364), FADE + '4 -> 3 (-1) -> 1 (-2)' + FADE_TAIL)
assert.equal(w(370), FADE + '4 -> 1 (-3) -> 0 (-1)' + FADE_TAIL)
assert.equal(w(381), FADE + '3 -> 2 (-1) -> 0 (-2)' + FADE_TAIL)
// THE ELEVEN ZERO FACES' OWN WINDOWS THE HONEST SILENCES KEEP - THE
// SKIN DRIED ELEVEN TIMES
assert.equal(w(359), null)
assert.equal(w(360), null)
assert.equal(w(362), null)
assert.equal(w(363), null)
assert.equal(w(366), null)
assert.equal(w(367), null)
assert.equal(w(371), null)
assert.equal(w(372), null)
assert.equal(w(373), null)
assert.equal(w(374), null)
assert.equal(w(375), null)
assert.equal(w(378), null)
assert.equal(w(379), null)
assert.equal(w(383), null)
assert.equal(w(384), null)

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
assert.equal(climbOutFoodTripTrendConsistent(null), false)
assert.equal(climbOutFoodTripTrendConsistent(undefined), false)
assert.equal(climbOutFoodTripTrendConsistent('cell'), false)
assert.equal(climbOutFoodTripTrendConsistent([]), false)
assert.equal(climbOutFoodTripTrendConsistent({ back: { climbOutFoodTrips: 0 }, prev: { climbOutFoodTrips: 0 } }), false)
assert.equal(climbOutFoodTripTrendConsistent({ back: { climbOutFoodTrips: 0 }, prev: { climbOutFoodTrips: 0 }, cur: { climbOutFoodTrips: 0 } }), true)
assert.equal(climbOutFoodTripTrendConsistent({ back: { climbOutFoodTrips: -1 }, prev: { climbOutFoodTrips: 0 }, cur: { climbOutFoodTrips: 0 } }), false)
assert.equal(climbOutFoodTripTrendConsistent({ back: { climbOutFoodTrips: 1.5 }, prev: { climbOutFoodTrips: 0 }, cur: { climbOutFoodTrips: 0 } }), false)
assert.equal(climbOutFoodTripTrendConsistent({ back: { climbOutFoodTrips: '3' }, prev: { climbOutFoodTrips: 0 }, cur: { climbOutFoodTrips: 0 } }), false)
assert.equal(climbOutFoodTripTrendConsistent({ back: null, prev: { climbOutFoodTrips: 0 }, cur: { climbOutFoodTrips: 0 } }), false)
// the fence never rejects extra keys
assert.equal(climbOutFoodTripTrendConsistent({ back: { climbOutFoodTrips: 0, busy: 1 }, prev: { climbOutFoodTrips: 2, busy: 1 }, cur: { climbOutFoodTrips: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(climbOutFoodTripTrendRow(null), null)
assert.equal(climbOutFoodTripTrendRow('x'), null)
assert.equal(climbOutFoodTripTrendRow({ back: { climbOutFoodTrips: 1 }, prev: { climbOutFoodTrips: 1 }, cur: { climbOutFoodTrips: 1 } }), null)
assert.equal(climbOutFoodTripTrendRow({ back: { climbOutFoodTrips: 1 }, prev: { climbOutFoodTrips: 0 }, cur: { climbOutFoodTrips: 0 } }), null)

// THE CELL'S OWN READ - climbOutFoodTrips rides the REAL food trip
// climb-out lines (the face 385's own six the top's own cell the
// raw log's own lines)
assert.equal(climbOutFoodTrips([
  'F18 climb out (food trip): failed - stalled',
  'F3 climb out (food trip): OK +11 levels (10 steps, 28 dug, 28s)',
  'F12 climb out (food trip): failed - low-o2',
  'F19 climb out (food trip): OK +10 levels (9 steps, 26 dug, 25s)',
  'F16 climb out (food trip): OK +8 levels (7 steps, 14 dug, 18s)',
  'F13 climb out (food trip): failed - timeout'
]), 6)
// the other climb-out skins never ride - the cells never merge
assert.equal(climbOutFoodTrips(['F4 climb out (bank): OK +6 levels (5 steps, 9 dug, 10s)']), 0)
assert.equal(climbOutFoodTrips(['F4 climb out (tool recovery): failed - stalled']), 0)
assert.equal(climbOutFoodTrips(['F2 climb out (trip): OK +2 levels (2 steps, 4 dug, 4s)']), 0)
assert.equal(climbOutFoodTrips(['F6 climb out (wood trip): OK +6 levels (5 steps, 9 dug, 10s)']), 0)
// the docket's own 'F<n> food trip:' verdicts never ride - the
// docket never climbs (the famine and the plate lines the field's
// own raw lines - a different shape, a different book)
assert.equal(climbOutFoodTrips(['F6 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(climbOutFoodTrips(['F6 food trip: 0 (commons empty) - the plate rides to the next bank trip']), 0)
assert.equal(climbOutFoodTrips(['F9 food trip: 0 (no chest reached) - the plate rides to the next bank trip']), 0)
// the docket's own 'F<n> trip:' verdicts never ride - the docket
// never climbs (the tripclimbrefused word's own cell v0.976.147)
assert.equal(climbOutFoodTrips(['F5 trip: 0 (climb refused - pre-position climb fenced)']), 0)
assert.equal(climbOutFoodTrips(['F12 trip: 6 (delivered)']), 0)
// the strict 'tool recovery:' emissions never ride - a different
// cell (the toolrecovery.mjs module's own book)
assert.equal(climbOutFoodTrips(['F2 tool recovery: no pickaxe - spare-pick craft first']), 0)
assert.equal(climbOutFoodTrips(['F2 tool recovery: surfaced - the wood leg gathers where trees grow']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(climbOutFoodTrips(['F5 climb out (food trip) failed - stalled']), 0)
assert.equal(climbOutFoodTrips(['F6 climb out (food trip)']), 0)
assert.equal(climbOutFoodTrips(['climb out (food trip): failed - stalled']), 0)
assert.equal(climbOutFoodTrips(['F8 climbout (food trip): failed']), 0)
assert.equal(climbOutFoodTrips(['F9 climb out (food trip-extra): failed - stalled']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F6 climb out (food trip): OK +6 levels (5 steps, 9 dug, 10s)',
  'F4 climb out (food trip): failed - stalled'
]
assert.equal(climbOutFoodTrips(lines), 2)
const fold = { back: { climbOutFoodTrips: climbOutFoodTrips(lines) }, prev: { climbOutFoodTrips: 5 }, cur: { climbOutFoodTrips: 9 } }
assert.equal(climbOutFoodTripTrendRow(fold), SWELL + '2 -> 5 (+3) -> 9 (+4)' + SWELL_TAIL)

console.log('climboutfoodtriptrend.test: all pins green')
