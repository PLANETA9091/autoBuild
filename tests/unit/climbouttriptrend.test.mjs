// tests/unit/climbouttriptrend.test.mjs - THE CLIMB-OUT BOOK'S OWN
// TRIP TREND's own pin battery (v0.976.154): the field's own chains
// byte-exact (THE CLIMB-OUT BOOK'S OWN SECOND SKIN - the bank's 729u
// the heaviest the climb-out bank word's own cell beside, THE CELL'S
// OWN WEIGHT 619u the faces' own total byte-true the bank word's own
// naming rode, THE FIELD'S OWN TOP the count 22 the face 382's own
// top rode once - the top's own arrival the swing's own back rode
// (19 -> 11 (-8) -> 22 (+11) the drain-and-surcharge the window's
// own shape - no silent arrival the bank's own face 356 beside), the
// +11 the face 382's own window's second leg the max rise step's own
// single bound (the 11 -> 22 the surcharge), the -8 the face 379's
// own window's second leg the max fall step's own bound (the 18 ->
// 10 the drain), THE FIELD'S OWN FLOOR THE COUNT 7 the face 350's
// own floor rode once, THE ZERO FACES NONE - THE TRIP SKIN NEVER
// DRIED), TWENTY-NINE of THIRTY-SEVEN windows speaking (TWENTY-THREE
// swings, FOUR swells, TWO fades, the EIGHT honest silences - the
// half-holds the honest silences keep), THE TWO ONE-WINDOW ROUND
// TRIPS THE SECOND BOOK RIDES TWO (the face 351's own window the
// floor's own trade, the face 359's own window - the climb-out
// bank's own book rode TWO beside), the byte-pin battery, the fence
// battery, the cell's own read, the one-parser ride over the REAL
// trip climb-out lines (the 'climb out (trip):' verdicts the
// fleet19's own skin prints; the bank/wood trip/food trip/tool
// recovery climb-out skins never ride; the docket's own 'F<n> trip:'
// verdicts the tripclimbrefused word's own cell never rides; the
// strict 'tool recovery:' emissions a different cell - the cells
// never merge; the no-colon junk never rides).
import { climbOutTrips, climbOutTripTrendConsistent, climbOutTripTrendRow } from '../../src/lib/climbouttriptrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, this word prices the climb-out book's own trip skin mass across the faces - the climb-out book's own trip seat, co-existence by seat never by duplication)"

const HEAD = "the climb-out trip's own trend (v0.976.154)"
const SWING = HEAD + ": the climb-out trip's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the climb-out trip's rise ran two steps deep - "
const SWELL_TAIL = " - the climb-out trip's own swell " + TAIL
const FADE = HEAD + ": the climb-out trip's fall ran two steps deep - "
const FADE_TAIL = " - the climb-out trip's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the climb-out
// trip regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S
// OWN WEIGHT 619u the faces' own total (THE CLIMB-OUT BOOK'S OWN
// SECOND SKIN byte-true the bank word's own naming rode), THE FIELD'S
// OWN TOP the count 22 the face 382's own top rode once (the top's
// own arrival the swing's own back rode - no silent arrival), the
// +11 the face 382's own window's second leg (the 11 -> 22 the
// surcharge), the -8 the face 379's own window's second leg (the 18
// -> 10 the drain), THE FIELD'S OWN FLOOR THE COUNT 7 the face 350's
// own floor rode once, THE ZERO FACES NONE - THE TRIP SKIN NEVER
// DRIED - TWENTY-NINE of THIRTY-SEVEN windows speaking (TWENTY-THREE
// swings, FOUR swells, TWO fades, the EIGHT honest silences).
const P = {}
P[348] = 13
P[349] = 14
P[350] = 7
P[351] = 14
P[352] = 16
P[353] = 18
P[354] = 21
P[355] = 16
P[356] = 16
P[357] = 16
P[358] = 18
P[359] = 16
P[360] = 19
P[361] = 18
P[362] = 20
P[363] = 21
P[364] = 16
P[365] = 15
P[366] = 17
P[367] = 13
P[368] = 18
P[369] = 14
P[370] = 17
P[371] = 17
P[372] = 16
P[373] = 18
P[374] = 14
P[375] = 11
P[376] = 11
P[377] = 11
P[378] = 18
P[379] = 10
P[380] = 19
P[381] = 11
P[382] = 22
P[383] = 16
P[384] = 19
P[385] = 15
P[386] = 18
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 619, 'the cell 619u the witness holds')
const w = (f) => climbOutTripTrendRow({ back: { climbOutTrips: P[f - 2] }, prev: { climbOutTrips: P[f - 1] }, cur: { climbOutTrips: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (twenty-three swings, four swells, two fades, the
// eight held windows the honest silences keep - THE TWO ONE-WINDOW
// ROUND TRIPS the faces 351/359's own windows ride)
const SWINGS = {
  350: '13 -> 14 (+1) -> 7 (-7)',
  351: '14 -> 7 (-7) -> 14 (+7)',
  355: '18 -> 21 (+3) -> 16 (-5)',
  359: '16 -> 18 (+2) -> 16 (-2)',
  360: '18 -> 16 (-2) -> 19 (+3)',
  361: '16 -> 19 (+3) -> 18 (-1)',
  362: '19 -> 18 (-1) -> 20 (+2)',
  364: '20 -> 21 (+1) -> 16 (-5)',
  366: '16 -> 15 (-1) -> 17 (+2)',
  367: '15 -> 17 (+2) -> 13 (-4)',
  368: '17 -> 13 (-4) -> 18 (+5)',
  369: '13 -> 18 (+5) -> 14 (-4)',
  370: '18 -> 14 (-4) -> 17 (+3)',
  373: '17 -> 16 (-1) -> 18 (+2)',
  374: '16 -> 18 (+2) -> 14 (-4)',
  379: '11 -> 18 (+7) -> 10 (-8)',
  380: '18 -> 10 (-8) -> 19 (+9)',
  381: '10 -> 19 (+9) -> 11 (-8)',
  382: '19 -> 11 (-8) -> 22 (+11)',
  383: '11 -> 22 (+11) -> 16 (-6)',
  384: '22 -> 16 (-6) -> 19 (+3)',
  385: '16 -> 19 (+3) -> 15 (-4)',
  386: '19 -> 15 (-4) -> 18 (+3)'
}
const SWELLS = {
  352: '7 -> 14 (+7) -> 16 (+2)',
  353: '14 -> 16 (+2) -> 18 (+2)',
  354: '16 -> 18 (+2) -> 21 (+3)',
  363: '18 -> 20 (+2) -> 21 (+1)'
}
const FADES = {
  365: '21 -> 16 (-5) -> 15 (-1)',
  375: '18 -> 14 (-4) -> 11 (-3)'
}
const SILENCES = [356, 357, 358, 371, 372, 376, 377, 378]

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
assert.deepEqual(tally, { swing: 23, swell: 4, fade: 2, silence: 8 })

// landmark chains byte-exact full literals
// THE FACE 382 WINDOW THE MAX RISE STEP'S OWN SINGLE BOUND (+11 the
// 11 -> 22 the surcharge) AND THE TOP'S OWN ARRIVAL the swing's own
// back rode (19 -> 11 (-8) -> 22 (+11) the drain-and-surcharge - no
// silent arrival the bank's own face 356 beside)
assert.equal(w(382), SWING + '19 -> 11 (-8) -> 22 (+11)' + SWING_TAIL)
// THE FACE 379 WINDOW THE MAX FALL STEP'S OWN BOUND (-8 the 18 -> 10
// the drain)
assert.equal(w(379), SWING + '11 -> 18 (+7) -> 10 (-8)' + SWING_TAIL)
// THE FACE 351 WINDOW THE FIRST ONE-WINDOW ROUND TRIP (14 -> 7 -> 14
// the floor's own trade both bounds one window deep)
assert.equal(w(351), SWING + '14 -> 7 (-7) -> 14 (+7)' + SWING_TAIL)
// THE FACE 359 WINDOW THE SECOND ONE-WINDOW ROUND TRIP (16 -> 18 ->
// 16 - the book's own two the bank's own two beside)
assert.equal(w(359), SWING + '16 -> 18 (+2) -> 16 (-2)' + SWING_TAIL)
// THE FACE 363 WINDOW THE LAST SWELL (the 18 -> 21 the three-step
// ladder's own crown the faces 352/353/354 beside)
assert.equal(w(363), SWELL + '18 -> 20 (+2) -> 21 (+1)' + SWELL_TAIL)
// THE FACE 375 WINDOW THE LAST FADE (the 18 -> 11 the drain-and-fade)
assert.equal(w(375), FADE + '18 -> 14 (-4) -> 11 (-3)' + FADE_TAIL)
// THE FACE 357 WINDOW THE FULL HOLD (16 -> 16 -> 16 the honest
// silence keeps)
assert.equal(w(357), null)

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
assert.equal(climbOutTripTrendConsistent(null), false)
assert.equal(climbOutTripTrendConsistent(undefined), false)
assert.equal(climbOutTripTrendConsistent('cell'), false)
assert.equal(climbOutTripTrendConsistent([]), false)
assert.equal(climbOutTripTrendConsistent({ back: { climbOutTrips: 0 }, prev: { climbOutTrips: 0 } }), false)
assert.equal(climbOutTripTrendConsistent({ back: { climbOutTrips: 0 }, prev: { climbOutTrips: 0 }, cur: { climbOutTrips: 0 } }), true)
assert.equal(climbOutTripTrendConsistent({ back: { climbOutTrips: -1 }, prev: { climbOutTrips: 0 }, cur: { climbOutTrips: 0 } }), false)
assert.equal(climbOutTripTrendConsistent({ back: { climbOutTrips: 1.5 }, prev: { climbOutTrips: 0 }, cur: { climbOutTrips: 0 } }), false)
assert.equal(climbOutTripTrendConsistent({ back: { climbOutTrips: '3' }, prev: { climbOutTrips: 0 }, cur: { climbOutTrips: 0 } }), false)
assert.equal(climbOutTripTrendConsistent({ back: null, prev: { climbOutTrips: 0 }, cur: { climbOutTrips: 0 } }), false)
// the fence never rejects extra keys
assert.equal(climbOutTripTrendConsistent({ back: { climbOutTrips: 0, busy: 1 }, prev: { climbOutTrips: 2, busy: 1 }, cur: { climbOutTrips: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(climbOutTripTrendRow(null), null)
assert.equal(climbOutTripTrendRow('x'), null)
assert.equal(climbOutTripTrendRow({ back: { climbOutTrips: 1 }, prev: { climbOutTrips: 1 }, cur: { climbOutTrips: 1 } }), null)
assert.equal(climbOutTripTrendRow({ back: { climbOutTrips: 1 }, prev: { climbOutTrips: 0 }, cur: { climbOutTrips: 0 } }), null)

// THE CELL'S OWN READ - climbOutTrips rides the REAL trip climb-out
// lines
assert.equal(climbOutTrips([
  'F2 climb out (trip): OK +2 levels (2 steps, 4 dug, 4s)',
  'F6 climb out (trip): failed - stopped',
  'F4 climb out (trip): OK +10 levels (9 steps, 20 dug, 25s)',
  'F7 climb out (trip): failed - stalled',
  'F3 climb out (trip): failed - rescue owns the bot',
  'F9 climb out (trip): failed - low-o2 (traversed 4)',
  'F5 climb out (trip): failed - wet wall',
  'F8 climb out (trip): failed - timeout'
]), 8)
// the other climb-out skins never ride - the cells never merge
assert.equal(climbOutTrips(['F4 climb out (bank): OK +6 levels (5 steps, 9 dug, 10s)']), 0)
assert.equal(climbOutTrips(['F4 climb out (tool recovery): failed - stalled']), 0)
assert.equal(climbOutTrips(['F5 climb out (wood trip): OK +10 levels (9 steps, 20 dug, 24s)']), 0)
assert.equal(climbOutTrips(['F7 climb out (food trip): failed - stalled']), 0)
// the docket's own 'F<n> trip:' verdicts never ride - the docket
// never climbs (the tripclimbrefused word's own cell v0.976.147)
assert.equal(climbOutTrips(['F5 trip: 0 (climb refused - pre-position climb fenced)']), 0)
assert.equal(climbOutTrips(['F12 trip: 6 (delivered)']), 0)
// the strict 'tool recovery:' emissions never ride - a different
// cell (the toolrecovery.mjs module's own book)
assert.equal(climbOutTrips(['F2 tool recovery: no pickaxe - spare-pick craft first']), 0)
assert.equal(climbOutTrips(['F2 tool recovery: surfaced - the wood leg gathers where trees grow']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(climbOutTrips(['F5 climb out (trip) failed - stalled']), 0)
assert.equal(climbOutTrips(['F6 climb out (trip)']), 0)
assert.equal(climbOutTrips(['climb out (trip): failed - stalled']), 0)
assert.equal(climbOutTrips(['F8 climbout (trip): failed']), 0)
assert.equal(climbOutTrips(['F9 climb out (trip-extra): failed - stalled']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F6 climb out (trip): OK +6 levels (5 steps, 9 dug, 10s)',
  'F4 climb out (trip): failed - stalled'
]
assert.equal(climbOutTrips(lines), 2)
const fold = { back: { climbOutTrips: climbOutTrips(lines) }, prev: { climbOutTrips: 11 }, cur: { climbOutTrips: 22 } }
assert.equal(climbOutTripTrendRow(fold), SWELL + '2 -> 11 (+9) -> 22 (+11)' + SWELL_TAIL)

console.log('climbouttriptrend.test: all pins green')
