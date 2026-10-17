// tests/unit/reconnectretrytrend.test.mjs - THE LINK-STABILITY FRONT'S
// OWN RECONNECT RETRY TREND's own pin battery (v0.976.185): the retry
// lane's own mass across the faces the fire-1233's own NEXT FIRE
// named first - the link-stability front the census's own evidence
// rides - the field's own chains byte-exact (THE CELL'S OWN WEIGHT
// 508u the thirty-nine faces' own total - the third-heaviest skin
// the docket book holds, THE FIELD'S OWN TOP THE COUNT 59 rode ONCE
// the face 354's own crest - THE CHURN'S OWN CREST, THE FIELD'S OWN
// FLOOR THE COUNT ZERO rode ONCE the face 364's own floor - THE SKIN
// DRIED ONCE the least-dried book the family holds), THIRTY-THREE of
// THIRTY-SEVEN windows speaking (NINETEEN swings, SEVEN swells,
// SEVEN fades, the FOUR honest silences - the one silence run the
// faces 360..363 hold), THE TRIPLE BACK-TO-BACK SWELL PAIR RUN the
// faces 350/351, 357/358, 378/379 hold (the bprep's own ONE pair the
// record beside, THREE the new record) - the TWO BACK-TO-BACK FADE
// PAIRS the faces 375/376, 381/382 hold, THE TRIPLE BACK-TO-BACK
// ROUND-TRIP RUN the faces 383/384/385's own windows every one
// mirrored (the bfcu's own triple the family record beside), the
// bounds' own legs pins (the +49 rode TWICE two legs ONE boundary
// the crest's own climb, the -56 rode TWICE two legs ONE boundary -
// THE CRATER'S OWN DRAIN the crest 59 the floor 3), the last word
// the face 386's own window the swing (8 -> 12 (+4) -> 5 (-7)), the
// whole-cache pins (the 642u, the face 425's own 19u the newest add
// - the F425's own census the reconnects 19 the read byte-true
// holds, the W425 window the swing 18 -> 36 (+18) -> 19 (-17), the
// face 423's own 36u the drown storm's own face beside), the
// byte-pin battery, the fence battery, the cell's own read, the
// one-parser ride over the REAL retry lines (the water relog lines
// never ride, the kick lines never ride, the stats-line reconnects=
// never rides, the census row never rides, the tagged skin never
// rides, the no-colon junk never rides - the lanes never merge)
import assert from 'node:assert'
import { reconnectRetries, reconnectRetryTrendConsistent, reconnectRetryTrendRow } from '../../src/lib/reconnectretrytrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, this word prices the reconnect retry mass across the faces - the link-stability front's own retry seat, co-existence by seat never by duplication)"

const HEAD = 'the reconnect retry trend (v0.976.185)'
const SWING = HEAD + ": the retry's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the retry's rise ran two steps deep - "
const SWELL_TAIL = " - the retry's own swell " + TAIL
const FADE = HEAD + ": the retry's fall ran two steps deep - "
const FADE_TAIL = " - the retry's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the retry RE's
// own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN WEIGHT
// 508u the faces' own total, THE FIELD'S OWN TOP THE COUNT 59 rode
// ONCE (the face 354's own crest - THE CHURN'S OWN CREST), THE
// FIELD'S OWN FLOOR THE COUNT ZERO rode ONCE (the face 364's own
// floor - THE SKIN DRIED ONCE the least-dried book the family holds)
const P = {}
P[348] = 3
P[349] = 4
P[350] = 9
P[351] = 28
P[352] = 13
P[353] = 10
P[354] = 59
P[355] = 3
P[356] = 4
P[357] = 15
P[358] = 20
P[359] = 5
P[360] = 5
P[361] = 16
P[362] = 16
P[363] = 3
P[364] = 0
P[365] = 22
P[366] = 31
P[367] = 13
P[368] = 9
P[369] = 14
P[370] = 12
P[371] = 15
P[372] = 11
P[373] = 22
P[374] = 10
P[375] = 8
P[376] = 5
P[377] = 9
P[378] = 16
P[379] = 24
P[380] = 17
P[381] = 12
P[382] = 8
P[383] = 12
P[384] = 8
P[385] = 12
P[386] = 5
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 508, "the cell 508u the hand-off holds - THE LINK-STABILITY FRONT'S OWN RETRY SEAT the third-heaviest skin rides")
const w = (f) => reconnectRetryTrendRow({ back: { reconnectRetries: P[f - 2] }, prev: { reconnectRetries: P[f - 1] }, cur: { reconnectRetries: P[f] } })

// the window's own shape - ONE SHAPE ONE WORD (the branch law: the
// bars never invent - a held step no direction, the honest silence)
const tallyWindow = (f, T) => {
  const a = T[f - 2], b = T[f - 1], c = T[f]
  const first = b - a, second = c - b
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (NINETEEN swings, SEVEN swells, SEVEN fades, the
// FOUR honest silences - THIRTY-THREE of THIRTY-SEVEN speaking the
// widest breath the link book holds)
const SWELLS = {
  350: '3 -> 4 (+1) -> 9 (+5)',
  351: '4 -> 9 (+5) -> 28 (+19)',
  357: '3 -> 4 (+1) -> 15 (+11)',
  358: '4 -> 15 (+11) -> 20 (+5)',
  366: '0 -> 22 (+22) -> 31 (+9)',
  378: '5 -> 9 (+4) -> 16 (+7)',
  379: '9 -> 16 (+7) -> 24 (+8)'
}
const FADES = {
  353: '28 -> 13 (-15) -> 10 (-3)',
  364: '16 -> 3 (-13) -> 0 (-3)',
  368: '31 -> 13 (-18) -> 9 (-4)',
  375: '22 -> 10 (-12) -> 8 (-2)',
  376: '10 -> 8 (-2) -> 5 (-3)',
  381: '24 -> 17 (-7) -> 12 (-5)',
  382: '17 -> 12 (-5) -> 8 (-4)'
}
const SWINGS = {
  352: '9 -> 28 (+19) -> 13 (-15)',
  354: '13 -> 10 (-3) -> 59 (+49)',
  355: '10 -> 59 (+49) -> 3 (-56)',
  356: '59 -> 3 (-56) -> 4 (+1)',
  359: '15 -> 20 (+5) -> 5 (-15)',
  365: '3 -> 0 (-3) -> 22 (+22)',
  367: '22 -> 31 (+9) -> 13 (-18)',
  369: '13 -> 9 (-4) -> 14 (+5)',
  370: '9 -> 14 (+5) -> 12 (-2)',
  371: '14 -> 12 (-2) -> 15 (+3)',
  372: '12 -> 15 (+3) -> 11 (-4)',
  373: '15 -> 11 (-4) -> 22 (+11)',
  374: '11 -> 22 (+11) -> 10 (-12)',
  377: '8 -> 5 (-3) -> 9 (+4)',
  380: '16 -> 24 (+8) -> 17 (-7)',
  383: '12 -> 8 (-4) -> 12 (+4)',
  384: '8 -> 12 (+4) -> 8 (-4)',
  385: '12 -> 8 (-4) -> 12 (+4)',
  386: '8 -> 12 (+4) -> 5 (-7)'
}
const tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) tally[tallyWindow(f, P)]++
assert.deepEqual(tally, { swing: 19, swell: 7, fade: 7, silence: 4 }, "the birth field's own breath the THIRTY-SEVEN windows hold - THIRTY-THREE speaking the widest breath the link book rides")
assert.equal(tally.swing, 19, 'NINETEEN swings the churn\u2019s own mass rides')
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, `the swell F${f} the arc rides`)
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, `the fade F${f} the arc rides`)
}
for (const [f, arc] of Object.entries(SWINGS)) {
  assert.equal(w(Number(f)), SWING + arc + SWING_TAIL, `the swing F${f} the arc rides`)
}
for (const f of [360, 361, 362, 363]) {
  assert.equal(w(f), null, `the silence F${f} the held law keeps - the row never invents`)
}

// THE ONE SILENCE RUN - the faces 360..363's own four the longest
// drought the book holds (the dried books' own heaviest runs the
// family records beside)
const silenceRun = []
let run = []
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f, P) === 'silence') run.push(f)
  else { if (run.length > silenceRun.length) silenceRun.splice(0, silenceRun.length, ...run); run = [] }
}
if (run.length > silenceRun.length) silenceRun.splice(0, silenceRun.length, ...run)
assert.deepEqual(silenceRun, [360, 361, 362, 363], 'the ONE silence run the faces 360..363 hold - the longest drought the book rides')

// THE TRIPLE BACK-TO-BACK SWELL PAIR RUN - the faces 350/351,
// 357/358, 378/379's own windows the trio of pairs rides (the
// bprep's own ONE pair the record beside, THREE the new record the
// book holds) - and the TWO BACK-TO-BACK FADE PAIRS the faces
// 375/376, 381/382 hold (the drought's own staircase rides)
const swellPairs = []
for (let f = 351; f <= 386; f++) {
  if (tallyWindow(f, P) === 'swell' && tallyWindow(f - 1, P) === 'swell') swellPairs.push([f - 1, f])
}
assert.deepEqual(swellPairs, [[350, 351], [357, 358], [378, 379]], 'the TRIPLE back-to-back swell pair run the book holds - the new record rides')
const fadePairs = []
for (let f = 351; f <= 386; f++) {
  if (tallyWindow(f, P) === 'fade' && tallyWindow(f - 1, P) === 'fade') fadePairs.push([f - 1, f])
}
assert.deepEqual(fadePairs, [[375, 376], [381, 382]], 'the TWO back-to-back fade pairs the drought\u2019s own staircase rides')

// THE TRIPLE BACK-TO-BACK ROUND-TRIP RUN - the faces 383/384/385's
// own windows every one mirrored (the bfcu's own triple the family
// record beside - the same weight the record rides)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [383, 384, 385], 'the birth field holds the THREE round trips - the triple run the tail rides')
for (let i = 1; i < roundTrips.length; i++) {
  assert.equal(roundTrips[i] - roundTrips[i - 1], 1, 'the round trips back-to-back the run rides - no gap the trio holds')
}
for (const f of roundTrips) {
  assert.equal(Math.abs(P[f - 1] - P[f - 2]), Math.abs(P[f] - P[f - 1]), `the round trip F${f} the same size both legs the mirror rides`)
}
assert.equal(w(383), SWING + '12 -> 8 (-4) -> 12 (+4)' + SWING_TAIL, 'the run\u2019s own opener the swing rides')
assert.equal(w(384), SWING + '8 -> 12 (+4) -> 8 (-4)' + SWING_TAIL, 'the mirrored middle the swing rides')
assert.equal(w(385), SWING + '12 -> 8 (-4) -> 12 (+4)' + SWING_TAIL, 'the run\u2019s own landing the swing rides')

// THE TOP THE COUNT 59 - rode ONCE the face 354's own crest holds
// (THE CHURN'S OWN CREST the link-stability book holds)
assert.equal(Math.max(...Object.values(P)), 59, 'the birth top the count 59 the churn crest rides')
let topRode = 0
const topFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 59) { topRode++; topFaces.push(f) } }
assert.equal(topRode, 1, 'the top rode ONCE the one crest holds')
assert.deepEqual(topFaces, [354], 'the face 354 the crest\u2019s own seat rides')

// THE SKIN DRIED ONCE - the zero face the face 364's own floor holds
// (the least-dried book the family holds: the bfcu's own
// thirty-seven the heaviest drought record beside)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.equal(zeroFaces.length, 1, 'THE SKIN DRIED ONCE the one zero face rides')
assert.deepEqual(zeroFaces, [364], 'the face 364 the floor\u2019s own seat rides')

// THE BOUNDS - the +49 the max rise rode TWICE two legs ONE boundary
// (the boundary 353/354 the windows 354/355 share - THE CREST'S OWN
// CLIMB), the -56 the max fall rode TWICE two legs ONE boundary (the
// boundary 354/355 the windows 355/356 share - THE CRATER'S OWN
// DRAIN the crest 59 the floor 3)
const steps = []
for (let f = 350; f <= 386; f++) { steps.push(P[f - 1] - P[f - 2]); steps.push(P[f] - P[f - 1]) }
assert.equal(Math.max(...steps), 49, 'the birth max rise +49 the bound holds')
assert.equal(Math.min(...steps), -56, 'the birth max fall -56 the bound holds')
assert.equal(steps.filter(s => s === 49).length, 2, 'the +49 rode TWICE two legs the crest\u2019s own climb holds')
assert.equal(steps.filter(s => s === -56).length, 2, 'the -56 rode TWICE two legs the crater\u2019s own drain holds')
assert.equal(P[354] - P[353], 49, 'the crest\u2019s own climb the boundary 353/354 rides')
assert.equal(P[355] - P[354], -56, 'the crater\u2019s own drain the boundary 354/355 rides - the crest 59 the floor 3')

// THE LAST WORD - the face 386's own window the swing (the bfcu's
// own honest silence the sibling mirror beside - the siblings' own
// last words disagree)
assert.equal(w(386), SWING + '8 -> 12 (+4) -> 5 (-7)' + SWING_TAIL, 'the last word the swing rides')

// THE WHOLE-CACHE SEAT 642u - the face 425's own 19u the newest add
// rides (the F425's own census the reconnects 19 the read byte-true
// holds; the face 423's own 36u the drown storm's own face the
// second-newest beside; the W425 window the swing the post field
// holds)
const E = {}
E[387] = 6
E[388] = 1
E[389] = 14
E[417] = 10
E[418] = 13
E[420] = 9
E[421] = 8
E[422] = 18
E[423] = 36
E[425] = 19
let postSum = 0
for (const f of [387, 388, 389, 417, 418, 420, 421, 422, 423, 425]) postSum += E[f]
assert.equal(508 + postSum, 642, "the whole-cache 642u the face 425's own 19u the newest add rides")
assert.equal(E[425], 19, "the face 425's own 19u the F425 census byte-true rides - the reconnects 19 the read holds")
assert.equal(E[423], 36, "the face 423's own 36u the drown storm's own face rides - the reconnects 36 the census holds")
const ew = (f, T) => reconnectRetryTrendRow({ back: { reconnectRetries: T[f - 2] }, prev: { reconnectRetries: T[f - 1] }, cur: { reconnectRetries: T[f] } })
// the W425 window the nearest-completed law holds (the face 424 the
// honest gap rides - the cancelled run no face) - the triple built
// whole: back 422, prev 423, cur 425
assert.equal(reconnectRetryTrendRow({ back: { reconnectRetries: E[422] }, prev: { reconnectRetries: E[423] }, cur: { reconnectRetries: E[425] } }), SWING + '18 -> 36 (+18) -> 19 (-17)' + SWING_TAIL, 'the W425 window the swing rides - the newest face\u2019s own read the nearest-completed law holds')
assert.equal(ew(389, E), SWING + '6 -> 1 (-5) -> 14 (+13)' + SWING_TAIL, 'the W389 window the swing rides')

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(reconnectRetryTrendRow({ back: { reconnectRetries: 1 }, prev: { reconnectRetries: 2 }, cur: { reconnectRetries: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(reconnectRetryTrendRow({ back: { reconnectRetries: 3 }, prev: { reconnectRetries: 2 }, cur: { reconnectRetries: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(reconnectRetryTrendRow({ back: { reconnectRetries: 1 }, prev: { reconnectRetries: 3 }, cur: { reconnectRetries: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(reconnectRetryTrendRow({ back: { reconnectRetries: 2 }, prev: { reconnectRetries: 2 }, cur: { reconnectRetries: 3 } }), null)
assert.equal(reconnectRetryTrendRow({ back: { reconnectRetries: 2 }, prev: { reconnectRetries: 3 }, cur: { reconnectRetries: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole (the
// face-364 floor the whole field's own lawful count)
assert.equal(reconnectRetryTrendRow({ back: { reconnectRetries: 0 }, prev: { reconnectRetries: 1 }, cur: { reconnectRetries: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(reconnectRetryTrendRow({ back: { reconnectRetries: 0 }, prev: { reconnectRetries: 0 }, cur: { reconnectRetries: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(reconnectRetryTrendRow(null), null)
assert.equal(reconnectRetryTrendRow(undefined), null)
assert.equal(reconnectRetryTrendRow('junk'), null)
assert.equal(reconnectRetryTrendRow(42), null)
assert.equal(reconnectRetryTrendRow([]), null)
assert.equal(reconnectRetryTrendRow({}), null)
assert.equal(reconnectRetryTrendRow({ back: { reconnectRetries: 1 }, prev: { reconnectRetries: 2 } }), null)
assert.equal(reconnectRetryTrendRow({ back: { reconnectRetries: 1 }, cur: { reconnectRetries: 2 } }), null)
assert.equal(reconnectRetryTrendRow({ prev: { reconnectRetries: 1 }, cur: { reconnectRetries: 2 } }), null)
assert.equal(reconnectRetryTrendRow({ back: { reconnectRetries: 1 }, prev: { reconnectRetries: 2 }, cur: { reconnectRetries: -1 } }), null)
assert.equal(reconnectRetryTrendRow({ back: { reconnectRetries: 1.5 }, prev: { reconnectRetries: 2 }, cur: { reconnectRetries: 3 } }), null)
assert.equal(reconnectRetryTrendRow({ back: { other: 1 }, prev: { reconnectRetries: 2 }, cur: { reconnectRetries: 3 } }), null)
assert.equal(reconnectRetryTrendConsistent({ back: { reconnectRetries: 0 }, prev: { reconnectRetries: 0 }, cur: { reconnectRetries: 0 } }), true)
assert.equal(reconnectRetryTrendConsistent({ back: { reconnectRetries: 5 }, prev: { reconnectRetries: 9 }, cur: { reconnectRetries: 2 }, spare: true }), true)
assert.equal(reconnectRetryTrendConsistent(null), false)
assert.equal(reconnectRetryTrendConsistent(undefined), false)
assert.equal(reconnectRetryTrendConsistent('junk'), false)
assert.equal(reconnectRetryTrendConsistent([]), false)
assert.equal(reconnectRetryTrendConsistent({ back: { reconnectRetries: 1 }, prev: { reconnectRetries: 2 }, cur: { reconnectRetries: NaN } }), false)

// THE CELL'S OWN READ - the real retry lines ride (the raw mass the
// lane prints - every line the shape prints rides, no exclusion the
// shape needs; the why's own skin the parens hold)
assert.equal(reconnectRetries([
  'F1 retry #1 in 4.2s ()',
  'F10 retry #1 in 5.7s ()',
  'F14 retry #1 in 3.6s ()'
]), 3)
assert.equal(reconnectRetries([
  'F13 retry #3 in 12.8s (read timeout)'
]), 1)
// THE WATER BOOK'S OWN FROZEN-CLIENT RELOG lines never ride - the
// lanes never merge (the water lane's own seat)
assert.equal(reconnectRetries(['F8 water: frozen client relog (#1 consecutive)']), 0)
// the kick lines never ride - the kickbill's and the kickwitness's
// own cells
assert.equal(reconnectRetries(['F5 kicked: You died!']), 0)
assert.equal(reconnectRetries(['F5 kick witnessed: timeout']), 0)
// the stats line's own reconnects= fleet number never rides - the
// census's own row the pocketline prices per bot
assert.equal(reconnectRetries(['bots=19 spawned=19 reconnects=19 kicks=4 alive=19']), 0)
// the tail line never rides
assert.equal(reconnectRetries(['kicks handled: 4 (reconnect attempts: 19)']), 0)
// the census row never rides
assert.equal(reconnectRetries(['reconnect census: local - F1 carries 12 of 19 reconnects (63.2%) - one link owns the churn']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(reconnectRetries(['F5 final bank: 3 stacks deposited']), 0)
assert.equal(reconnectRetries(['F2 bank: deposit done (128 items)']), 0)
assert.equal(reconnectRetries(['F5 climb out (pre-position): OK +2 levels']), 0)
assert.equal(reconnectRetries(['F5 steer hazard defer: coal_ore@-123,60,389 held behind the ledger (d 4) - the clean veins led (a death is a cost the deficit cannot repay, the tail keeps the option)']), 0)
// the tagged skin never rides - the emitter's own voice the bare
// prefix holds (the lane prints bare only)
assert.equal(reconnectRetries(['F12 [F12] retry #1 in 4.2s ()']), 0)
// the no-shape junk line never rides - the shape's own proof the RE
// demands
assert.equal(reconnectRetries(['F6 retry in 4.2s ()']), 0)
assert.equal(reconnectRetries(['F6 retry #1 in 4s ()']), 0)
assert.equal(reconnectRetries(['F6 retry #1 4.2s']), 0)
assert.equal(reconnectRetries(['F6 retries #1 in 4.2s ()']), 0)
assert.equal(reconnectRetries(['F6 retry #one in 4.2s ()']), 0)
assert.equal(reconnectRetries(['retry #1 in 4.2s ()']), 0)
assert.equal(reconnectRetries(['F6 retry']), 0)

// the defensive reads
assert.equal(reconnectRetries(null), 0)
assert.equal(reconnectRetries(undefined), 0)
assert.equal(reconnectRetries('junk'), 0)
assert.equal(reconnectRetries(42), 0)
assert.equal(reconnectRetries([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F1 retry #1 in 4.2s ()',
  'F10 retry #1 in 5.7s ()',
  'F14 retry #1 in 3.6s ()',
  'F1 retry #1 in 3.9s ()',
  'F1 retry #1 in 4.5s ()'
]
assert.equal(reconnectRetries(lines), 5)
const fold = { back: { reconnectRetries: reconnectRetries(lines) }, prev: { reconnectRetries: 1 }, cur: { reconnectRetries: 0 } }
assert.equal(reconnectRetryTrendRow(fold), FADE + '5 -> 1 (-4) -> 0 (-1)' + FADE_TAIL)

console.log('reconnectretrytrend.test: all pins green')
