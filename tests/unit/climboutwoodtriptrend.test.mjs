// tests/unit/climboutwoodtriptrend.test.mjs - THE CLIMB-OUT BOOK'S
// OWN WOOD TRIP TREND's own pin battery (v0.976.155): the field's
// own chains byte-exact (THE CLIMB-OUT BOOK'S OWN THIRD SKIN - the
// bank's 729u the heaviest the climb-out bank word's own cell
// beside, the trip's 619u the second the climb-out trip word's own
// cell beside, THE CELL'S OWN WEIGHT 114u the faces' own total
// byte-true the bank word's own naming rode, THE FIELD'S OWN TOP THE
// COUNT 13 the face 357's own top rode once - the top's own arrival
// the swing's own back rode (2 -> 0 (-2) -> 13 (+13) the
// drought-and-surcharge the window's own shape - no silent arrival
// the bank's own face 356 beside), the +13 the face 357's own
// window's second leg the max rise step's own single bound (the 0 ->
// 13 the surcharge), the -9 the face 358's own window's second leg
// the max fall step's own bound (the 13 -> 4 the drain), THE FIELD'S
// OWN FLOOR THE COUNT 0 the faces 356/371/384's own floors rode
// THREE - THE SKIN DRIED THRICE), THIRTY-THREE of THIRTY-SEVEN
// windows speaking (TWENTY-SEVEN swings, THREE swells, THREE fades,
// the FOUR honest silences - the face 350's own full hold and the
// half-holds the faces 351/352/353's own windows the honest silences
// keep), THE SIX ONE-WINDOW ROUND TRIPS THE BOOK RIDES SIX (the
// faces 360/361/367/376/380/382's own windows - the trip's own book
// rode TWO beside, the bank's own TWO beside), the byte-pin battery,
// the fence battery, the cell's own read, the one-parser ride over
// the REAL wood trip climb-out lines (the 'climb out (wood trip):'
// verdicts the fleet19's own skin prints; the bank/trip/food
// trip/tool recovery climb-out skins never ride; the docket's own
// 'F<n> trip:' verdicts the tripclimbrefused word's own cell never
// rides; the strict 'tool recovery:' emissions a different cell -
// the cells never merge; the no-colon junk never rides).
import { climbOutWoodTrips, climbOutWoodTripTrendConsistent, climbOutWoodTripTrendRow } from '../../src/lib/climboutwoodtriptrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, this word prices the climb-out book's own wood-trip skin mass across the faces - the climb-out book's own wood-trip seat, co-existence by seat never by duplication)"

const HEAD = "the climb-out wood trip's own trend (v0.976.155)"
const SWING = HEAD + ": the climb-out wood trip's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the climb-out wood trip's rise ran two steps deep - "
const SWELL_TAIL = " - the climb-out wood trip's own swell " + TAIL
const FADE = HEAD + ": the climb-out wood trip's fall ran two steps deep - "
const FADE_TAIL = " - the climb-out wood trip's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the climb-out
// wood trip regex's own arithmetic, THIRTY-NINE faces deep) - THE
// CELL'S OWN WEIGHT 114u the faces' own total (THE CLIMB-OUT BOOK'S
// OWN THIRD SKIN byte-true the bank word's own naming rode), THE
// FIELD'S OWN TOP THE COUNT 13 the face 357's own top rode once (the
// top's own arrival the swing's own back rode - no silent arrival),
// the +13 the face 357's own window's second leg (the 0 -> 13 the
// surcharge), the -9 the face 358's own window's second leg (the 13
// -> 4 the drain), THE FIELD'S OWN FLOOR THE COUNT 0 the faces
// 356/371/384's own floors rode THREE - THE SKIN DRIED THRICE -
// THIRTY-THREE of THIRTY-SEVEN windows speaking (TWENTY-SEVEN
// swings, THREE swells, THREE fades, the FOUR honest silences).
const P = {}
P[348] = 1
P[349] = 1
P[350] = 1
P[351] = 2
P[352] = 2
P[353] = 3
P[354] = 4
P[355] = 2
P[356] = 0
P[357] = 13
P[358] = 4
P[359] = 3
P[360] = 4
P[361] = 3
P[362] = 5
P[363] = 2
P[364] = 4
P[365] = 1
P[366] = 3
P[367] = 1
P[368] = 4
P[369] = 2
P[370] = 3
P[371] = 0
P[372] = 1
P[373] = 5
P[374] = 2
P[375] = 3
P[376] = 2
P[377] = 4
P[378] = 3
P[379] = 7
P[380] = 3
P[381] = 1
P[382] = 3
P[383] = 4
P[384] = 0
P[385] = 5
P[386] = 3
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 114, 'the cell 114u the witness holds')
const w = (f) => climbOutWoodTripTrendRow({ back: { climbOutWoodTrips: P[f - 2] }, prev: { climbOutWoodTrips: P[f - 1] }, cur: { climbOutWoodTrips: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (twenty-seven swings, three swells, three fades,
// the four held windows the honest silences keep - THE SIX
// ONE-WINDOW ROUND TRIPS the faces 360/361/367/376/380/382's own
// windows ride)
const SWINGS = {
  355: '3 -> 4 (+1) -> 2 (-2)',
  357: '2 -> 0 (-2) -> 13 (+13)',
  358: '0 -> 13 (+13) -> 4 (-9)',
  360: '4 -> 3 (-1) -> 4 (+1)',
  361: '3 -> 4 (+1) -> 3 (-1)',
  362: '4 -> 3 (-1) -> 5 (+2)',
  363: '3 -> 5 (+2) -> 2 (-3)',
  364: '5 -> 2 (-3) -> 4 (+2)',
  365: '2 -> 4 (+2) -> 1 (-3)',
  366: '4 -> 1 (-3) -> 3 (+2)',
  367: '1 -> 3 (+2) -> 1 (-2)',
  368: '3 -> 1 (-2) -> 4 (+3)',
  369: '1 -> 4 (+3) -> 2 (-2)',
  370: '4 -> 2 (-2) -> 3 (+1)',
  371: '2 -> 3 (+1) -> 0 (-3)',
  372: '3 -> 0 (-3) -> 1 (+1)',
  374: '1 -> 5 (+4) -> 2 (-3)',
  375: '5 -> 2 (-3) -> 3 (+1)',
  376: '2 -> 3 (+1) -> 2 (-1)',
  377: '3 -> 2 (-1) -> 4 (+2)',
  378: '2 -> 4 (+2) -> 3 (-1)',
  379: '4 -> 3 (-1) -> 7 (+4)',
  380: '3 -> 7 (+4) -> 3 (-4)',
  382: '3 -> 1 (-2) -> 3 (+2)',
  384: '3 -> 4 (+1) -> 0 (-4)',
  385: '4 -> 0 (-4) -> 5 (+5)',
  386: '0 -> 5 (+5) -> 3 (-2)'
}
const SWELLS = {
  354: '2 -> 3 (+1) -> 4 (+1)',
  373: '0 -> 1 (+1) -> 5 (+4)',
  383: '1 -> 3 (+2) -> 4 (+1)'
}
const FADES = {
  356: '4 -> 2 (-2) -> 0 (-2)',
  359: '13 -> 4 (-9) -> 3 (-1)',
  381: '7 -> 3 (-4) -> 1 (-2)'
}
const SILENCES = [350, 351, 352, 353]

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
assert.deepEqual(tally, { swing: 27, swell: 3, fade: 3, silence: 4 })

// landmark chains byte-exact full literals
// THE FACE 357 WINDOW THE MAX RISE STEP'S OWN SINGLE BOUND (+13 the
// 0 -> 13 the surcharge) AND THE TOP'S OWN ARRIVAL the swing's own
// back rode (2 -> 0 (-2) -> 13 (+13) the drought-and-surcharge - no
// silent arrival the bank's own face 356 beside)
assert.equal(w(357), SWING + '2 -> 0 (-2) -> 13 (+13)' + SWING_TAIL)
// THE FACE 358 WINDOW THE MAX FALL STEP'S OWN BOUND (-9 the 13 -> 4
// the drain)
assert.equal(w(358), SWING + '0 -> 13 (+13) -> 4 (-9)' + SWING_TAIL)
// THE SIX ONE-WINDOW ROUND TRIPS byte-exact (the book's own six -
// the trip's own two beside, the bank's own two beside)
assert.equal(w(360), SWING + '4 -> 3 (-1) -> 4 (+1)' + SWING_TAIL)
assert.equal(w(361), SWING + '3 -> 4 (+1) -> 3 (-1)' + SWING_TAIL)
assert.equal(w(367), SWING + '1 -> 3 (+2) -> 1 (-2)' + SWING_TAIL)
assert.equal(w(376), SWING + '2 -> 3 (+1) -> 2 (-1)' + SWING_TAIL)
assert.equal(w(380), SWING + '3 -> 7 (+4) -> 3 (-4)' + SWING_TAIL)
assert.equal(w(382), SWING + '3 -> 1 (-2) -> 3 (+2)' + SWING_TAIL)
// THE FACE 383 WINDOW THE LAST SWELL (the 1 -> 4 the two-step
// ladder's own crown the faces 354/373 beside)
assert.equal(w(383), SWELL + '1 -> 3 (+2) -> 4 (+1)' + SWELL_TAIL)
// THE FACE 381 WINDOW THE LAST FADE (the 7 -> 1 the drain-and-fade)
assert.equal(w(381), FADE + '7 -> 3 (-4) -> 1 (-2)' + FADE_TAIL)
// THE FACE 350 WINDOW THE FULL HOLD (1 -> 1 -> 1 the honest silence
// keeps) AND THE HALF-HOLDS THE FACES 351/352/353'S OWN WINDOWS THE
// HONEST SILENCES KEEP
assert.equal(w(350), null)
assert.equal(w(351), null)
assert.equal(w(352), null)
assert.equal(w(353), null)

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
assert.equal(climbOutWoodTripTrendConsistent(null), false)
assert.equal(climbOutWoodTripTrendConsistent(undefined), false)
assert.equal(climbOutWoodTripTrendConsistent('cell'), false)
assert.equal(climbOutWoodTripTrendConsistent([]), false)
assert.equal(climbOutWoodTripTrendConsistent({ back: { climbOutWoodTrips: 0 }, prev: { climbOutWoodTrips: 0 } }), false)
assert.equal(climbOutWoodTripTrendConsistent({ back: { climbOutWoodTrips: 0 }, prev: { climbOutWoodTrips: 0 }, cur: { climbOutWoodTrips: 0 } }), true)
assert.equal(climbOutWoodTripTrendConsistent({ back: { climbOutWoodTrips: -1 }, prev: { climbOutWoodTrips: 0 }, cur: { climbOutWoodTrips: 0 } }), false)
assert.equal(climbOutWoodTripTrendConsistent({ back: { climbOutWoodTrips: 1.5 }, prev: { climbOutWoodTrips: 0 }, cur: { climbOutWoodTrips: 0 } }), false)
assert.equal(climbOutWoodTripTrendConsistent({ back: { climbOutWoodTrips: '3' }, prev: { climbOutWoodTrips: 0 }, cur: { climbOutWoodTrips: 0 } }), false)
assert.equal(climbOutWoodTripTrendConsistent({ back: null, prev: { climbOutWoodTrips: 0 }, cur: { climbOutWoodTrips: 0 } }), false)
// the fence never rejects extra keys
assert.equal(climbOutWoodTripTrendConsistent({ back: { climbOutWoodTrips: 0, busy: 1 }, prev: { climbOutWoodTrips: 2, busy: 1 }, cur: { climbOutWoodTrips: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(climbOutWoodTripTrendRow(null), null)
assert.equal(climbOutWoodTripTrendRow('x'), null)
assert.equal(climbOutWoodTripTrendRow({ back: { climbOutWoodTrips: 1 }, prev: { climbOutWoodTrips: 1 }, cur: { climbOutWoodTrips: 1 } }), null)
assert.equal(climbOutWoodTripTrendRow({ back: { climbOutWoodTrips: 1 }, prev: { climbOutWoodTrips: 0 }, cur: { climbOutWoodTrips: 0 } }), null)

// THE CELL'S OWN READ - climbOutWoodTrips rides the REAL wood trip
// climb-out lines
assert.equal(climbOutWoodTrips([
  'F5 climb out (wood trip): OK +10 levels (9 steps, 20 dug, 24s)',
  'F6 climb out (wood trip): failed - stopped',
  'F4 climb out (wood trip): OK +10 levels (9 steps, 20 dug, 25s)',
  'F7 climb out (wood trip): failed - stalled',
  'F3 climb out (wood trip): failed - rescue owns the bot',
  'F9 climb out (wood trip): failed - low-o2 (traversed 4)',
  'F5 climb out (wood trip): failed - wet wall',
  'F8 climb out (wood trip): failed - timeout'
]), 8)
// the other climb-out skins never ride - the cells never merge
assert.equal(climbOutWoodTrips(['F4 climb out (bank): OK +6 levels (5 steps, 9 dug, 10s)']), 0)
assert.equal(climbOutWoodTrips(['F4 climb out (tool recovery): failed - stalled']), 0)
assert.equal(climbOutWoodTrips(['F2 climb out (trip): OK +2 levels (2 steps, 4 dug, 4s)']), 0)
assert.equal(climbOutWoodTrips(['F7 climb out (food trip): failed - stalled']), 0)
// the docket's own 'F<n> trip:' verdicts never ride - the docket
// never climbs (the tripclimbrefused word's own cell v0.976.147)
assert.equal(climbOutWoodTrips(['F5 trip: 0 (climb refused - pre-position climb fenced)']), 0)
assert.equal(climbOutWoodTrips(['F12 trip: 6 (delivered)']), 0)
// the strict 'tool recovery:' emissions never ride - a different
// cell (the toolrecovery.mjs module's own book)
assert.equal(climbOutWoodTrips(['F2 tool recovery: no pickaxe - spare-pick craft first']), 0)
assert.equal(climbOutWoodTrips(['F2 tool recovery: surfaced - the wood leg gathers where trees grow']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(climbOutWoodTrips(['F5 climb out (wood trip) failed - stalled']), 0)
assert.equal(climbOutWoodTrips(['F6 climb out (wood trip)']), 0)
assert.equal(climbOutWoodTrips(['climb out (wood trip): failed - stalled']), 0)
assert.equal(climbOutWoodTrips(['F8 climbout (wood trip): failed']), 0)
assert.equal(climbOutWoodTrips(['F9 climb out (wood trip-extra): failed - stalled']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F6 climb out (wood trip): OK +6 levels (5 steps, 9 dug, 10s)',
  'F4 climb out (wood trip): failed - stalled'
]
assert.equal(climbOutWoodTrips(lines), 2)
const fold = { back: { climbOutWoodTrips: climbOutWoodTrips(lines) }, prev: { climbOutWoodTrips: 5 }, cur: { climbOutWoodTrips: 9 } }
assert.equal(climbOutWoodTripTrendRow(fold), SWELL + '2 -> 5 (+3) -> 9 (+4)' + SWELL_TAIL)

console.log('climboutwoodtriptrend.test: all pins green')
