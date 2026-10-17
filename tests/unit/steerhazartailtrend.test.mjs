// tests/unit/steerhazartailtrend.test.mjs - THE STEER HAZARD TAIL'S
// OWN TREND's own pin battery (v0.976.179): the steer book's own tail
// seat the fire-0942's own sweep named beside the tier seat the .178
// word prices - the field's own chains byte-exact (THE CELL'S OWN
// WEIGHT 290u the thirty-nine faces' own total - the whole-field seat
// 485u the fifty-eight faces hold, THE FIELD'S OWN TOP THE COUNT 24
// the face 378's own top rode once, the +24 the birth max rise rode
// TWICE two legs (the boundary 377/378 the two windows share - THE
// CRATER'S OWN CLIMB), the -17 the birth max fall rode TWICE two legs
// (the boundary 378/379 the two windows share), THE FIELD'S OWN FLOOR
// THE COUNT ZERO rode ONE face (the face 377's own drought - THE
// DRIED SKIN THE BIRTH FIELD HOLDS the tier defer's own floor-1 the
// same face keeps the .178's own mirror beside)), THIRTY-FIVE of
// THIRTY-SEVEN windows speaking (TWENTY-TWO swings, SIX swells, SEVEN
// fades, the TWO honest silences - the one two-silence run the
// mirrored hold pair the birth field holds), THE TWO ONE-WINDOW ROUND
// TRIPS THE WHOLE FIELD HOLDS EVERY ONE MIRRORED (the opener the face
// 350's own window the book born trading + the face 414's own window
// the live stretch's own trade the whole field's own heaviest), THE
// ONE THREE-SWELL RUN the faces 357..359's own windows hold, THE TWO
// TWO-FADE RUNS the faces 354/355 and 382/383's own windows hold, the
// byte-pin battery, the fence battery, the cell's own read, the
// one-parser ride over the REAL steer hazard tail lines (the
// single-ore skin the mass rides - the walked-past ledger's own tail
// speaks; the steer siblings' own lines the tier defer's and the
// hazard defer's own cells never ride - the steer family never
// merges; the tunnel lane's own steering prose never rides; the
// tagged skin never rides; the no-colon junk never rides).
import { steerHazardTails, steerHazardTailTrendConsistent, steerHazardTailTrendRow } from '../../src/lib/steerhazartailtrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, this word prices the steer hazard tail's own mass across the faces - the steer book's own hazard-tail seat, co-existence by seat never by duplication)"

const HEAD = "the steer hazard tail's own trend (v0.976.179)"
const SWING = HEAD + ": the steer hazard tail's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the steer hazard tail's rise ran two steps deep - "
const SWELL_TAIL = " - the steer hazard tail's own swell " + TAIL
const FADE = HEAD + ": the steer hazard tail's fall ran two steps deep - "
const FADE_TAIL = " - the steer hazard tail's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the steer hazard
// tail RE's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 290u the faces' own total, THE FIELD'S OWN TOP THE COUNT 24
// the face 378's own top rode once, the +24 the birth max rise rode
// TWICE two legs (the boundary 377/378 the two windows share - THE
// CRATER'S OWN CLIMB), the -17 the birth max fall rode TWICE two legs
// (the boundary 378/379 the two windows share), THE FIELD'S OWN FLOOR
// THE COUNT ZERO rode ONE face (the face 377's own drought - THE
// DRIED SKIN THE BIRTH FIELD HOLDS).
const P = {}
P[348] = 1
P[349] = 12
P[350] = 1
P[351] = 5
P[352] = 10
P[353] = 9
P[354] = 8
P[355] = 3
P[356] = 5
P[357] = 9
P[358] = 11
P[359] = 15
P[360] = 5
P[361] = 6
P[362] = 15
P[363] = 8
P[364] = 5
P[365] = 10
P[366] = 9
P[367] = 3
P[368] = 6
P[369] = 4
P[370] = 4
P[371] = 11
P[372] = 1
P[373] = 7
P[374] = 3
P[375] = 1
P[376] = 7
P[377] = 0
P[378] = 24
P[379] = 7
P[380] = 21
P[381] = 10
P[382] = 8
P[383] = 1
P[384] = 10
P[385] = 11
P[386] = 4
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 290, 'the cell 290u the hand-off holds - THE STEER BOOK\'S OWN TAIL SEAT')
const w = (f) => steerHazardTailTrendRow({ back: { steerHazardTails: P[f - 2] }, prev: { steerHazardTails: P[f - 1] }, cur: { steerHazardTails: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (TWENTY-TWO swings, SIX swells, SEVEN fades, the TWO
// honest silences)
const SWINGS = {
  350: '1 -> 12 (+11) -> 1 (-11)',
  351: '12 -> 1 (-11) -> 5 (+4)',
  353: '5 -> 10 (+5) -> 9 (-1)',
  356: '8 -> 3 (-5) -> 5 (+2)',
  360: '11 -> 15 (+4) -> 5 (-10)',
  361: '15 -> 5 (-10) -> 6 (+1)',
  363: '6 -> 15 (+9) -> 8 (-7)',
  365: '8 -> 5 (-3) -> 10 (+5)',
  366: '5 -> 10 (+5) -> 9 (-1)',
  368: '9 -> 3 (-6) -> 6 (+3)',
  369: '3 -> 6 (+3) -> 4 (-2)',
  372: '4 -> 11 (+7) -> 1 (-10)',
  373: '11 -> 1 (-10) -> 7 (+6)',
  374: '1 -> 7 (+6) -> 3 (-4)',
  376: '3 -> 1 (-2) -> 7 (+6)',
  377: '1 -> 7 (+6) -> 0 (-7)',
  378: '7 -> 0 (-7) -> 24 (+24)',
  379: '0 -> 24 (+24) -> 7 (-17)',
  380: '24 -> 7 (-17) -> 21 (+14)',
  381: '7 -> 21 (+14) -> 10 (-11)',
  384: '8 -> 1 (-7) -> 10 (+9)',
  386: '10 -> 11 (+1) -> 4 (-7)'
}
const SWELLS = {
  352: '1 -> 5 (+4) -> 10 (+5)',
  357: '3 -> 5 (+2) -> 9 (+4)',
  358: '5 -> 9 (+4) -> 11 (+2)',
  359: '9 -> 11 (+2) -> 15 (+4)',
  362: '5 -> 6 (+1) -> 15 (+9)',
  385: '1 -> 10 (+9) -> 11 (+1)'
}
const FADES = {
  354: '10 -> 9 (-1) -> 8 (-1)',
  355: '9 -> 8 (-1) -> 3 (-5)',
  364: '15 -> 8 (-7) -> 5 (-3)',
  367: '10 -> 9 (-1) -> 3 (-6)',
  375: '7 -> 3 (-4) -> 1 (-2)',
  382: '21 -> 10 (-11) -> 8 (-2)',
  383: '10 -> 8 (-2) -> 1 (-7)'
}
const SILENCES = [370, 371]

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
function tallyWindow (f, table) {
  const first = table[f - 1] - table[f - 2]
  const second = table[f] - table[f - 1]
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}
const tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) tally[tallyWindow(f, P)]++
assert.deepEqual(tally, { swing: 22, swell: 6, fade: 7, silence: 2 }, 'the tail book\'s own breath the tally holds')

// THE ONE TWO-SILENCE RUN THE MIRRORED HOLD PAIR - the faces 370/371's
// own windows (the boundary 370/371 the one held leg the pair shares)
assert.equal(tallyWindow(370, P), 'silence')
assert.equal(tallyWindow(371, P), 'silence')
const sharedPairs = []
for (let f = 351; f <= 386; f++) {
  if (SILENCES.includes(f) && SILENCES.includes(f - 1)) sharedPairs.push([f - 1, f])
}
assert.deepEqual(sharedPairs, [[370, 371]], 'the one back-to-back silence pair the birth field holds')
const mirroredPairs = sharedPairs.filter(([a]) => P[a] === P[a - 1])
assert.deepEqual(mirroredPairs, [[370, 371]], 'the one mirrored hold pair - the shared leg the pair rides')

// THE ONE THREE-SWELL RUN - the faces 357..359's own windows (the
// staircase the climb rides); the two solo swells the isolated seats
for (const f of [357, 358, 359]) assert.equal(tallyWindow(f, P), 'swell', `the staircase F${f} the run rides`)
assert.equal(tallyWindow(356, P), 'swing', 'the staircase the neighbour before never a swell')
assert.equal(tallyWindow(360, P), 'swing', 'the staircase the neighbour after never a swell')
assert.equal(tallyWindow(352, P), 'swell', 'the solo swell 352 rides')
assert.equal(tallyWindow(385, P), 'swell', 'the solo swell 385 rides')
assert.equal(tallyWindow(351, P), 'swing', 'the solo swell 352 the neighbour before never a swell')
assert.equal(tallyWindow(353, P), 'swing', 'the solo swell 352 the neighbour after never a swell')
assert.equal(tallyWindow(384, P), 'swing', 'the solo swell 385 the neighbour before never a swell')
assert.equal(tallyWindow(386, P), 'swing', 'the solo swell 385 the neighbour after never a swell')

// THE TWO TWO-FADE RUNS - the faces 354/355 and 382/383's own windows
assert.equal(tallyWindow(354, P), 'fade')
assert.equal(tallyWindow(355, P), 'fade')
assert.equal(tallyWindow(382, P), 'fade')
assert.equal(tallyWindow(383, P), 'fade')
// the solo fades never touch a neighbour
for (const f of [364, 367, 375]) {
  assert.notEqual(tallyWindow(f - 1, P), 'fade', `the fade F${f} the neighbour before never a fade`)
  assert.notEqual(tallyWindow(f + 1, P), 'fade', `the fade F${f} the neighbour after never a fade`)
}

// THE TWO ONE-WINDOW ROUND TRIPS THE WHOLE FIELD HOLDS EVERY ONE
// MIRRORED - the opener the face 350's own window (1 -> 12 (+11) ->
// 1 (-11)) and the face 414's own window (2 -> 26 (+24) -> 2 (-24))
// the live stretch's own trade the heaviest holds
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [350], 'the birth field holds the one round trip - the opener the book born trading')
assert.equal(w(350), SWING + '1 -> 12 (+11) -> 1 (-11)' + SWING_TAIL, 'the opener\'s mirrored round trip the swing rides')
assert.equal(Math.abs(P[349] - P[348]), Math.abs(P[350] - P[349]), 'the opener the same size both legs the mirror rides')

// THE OPENER THE BOOK BORN TRADING (the .178's own honest silence the
// mirror beside - the siblings' own openers disagree)
assert.equal(P[348], 1, 'the opener\'s back the 1 the crater\'s own edge holds')
assert.equal(P[350], 1, 'the opener\'s cur the 1 the round trip\'s own return holds')

// THE CRATER'S OWN ARC - the face 377's own drought the floor 0 the
// +24 the max rise's own climb the top 24 the same face rides (the
// drain the -17 the next window holds)
assert.deepEqual([P[376], P[377], P[378], P[379]], [7, 0, 24, 7], 'the crater\'s own arc 7 -> 0 -> 24 -> 7')
assert.equal(w(377), SWING + '1 -> 7 (+6) -> 0 (-7)' + SWING_TAIL, 'the crater\'s own arrival the swing rides')
assert.equal(w(378), SWING + '7 -> 0 (-7) -> 24 (+24)' + SWING_TAIL, 'the crater\'s own climb the swing rides')
assert.equal(w(379), SWING + '0 -> 24 (+24) -> 7 (-17)' + SWING_TAIL, 'the top\'s own drain the swing rides')

// THE TOP'S OWN ARRIVAL - the face 378's own top the count 24 (the
// whole birth field's own top the crater's own climb rides)
assert.equal(Math.max(...Object.values(P)), 24, 'the birth top the count 24 the field holds')
assert.equal(P[378], 24, 'the top the count 24 the face 378 holds')

// THE DRIED SKIN THE BIRTH FIELD HOLDS - the face 377's own zero (the
// tier defer's own floor-1 the same face keeps THE SKIN NEVER DRIED
// the .178's own mirror beside - the sibling faces' own mirror)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.deepEqual(zeroFaces, [377], 'the one zero face the birth field holds - the face 377\'s own drought')

// THE BOUNDS - the +24 the birth max rise rode TWICE two legs (the
// face 378's own window's first leg and the face 379's own window's
// first leg the shared leg - the boundary 377/378), the -17 the birth
// max fall rode TWICE two legs (the face 379's own window's second
// leg and the face 380's own window's first leg the shared leg - the
// boundary 378/379)
const steps = []
for (let f = 350; f <= 386; f++) { steps.push(P[f - 1] - P[f - 2]); steps.push(P[f] - P[f - 1]) }
assert.equal(Math.max(...steps), 24, 'the birth max rise +24 the bound holds')
assert.equal(Math.min(...steps), -17, 'the birth max fall -17 the bound holds')
assert.equal(steps.filter(s => s === 24).length, 2, 'the +24 rode TWICE the boundary 377/378 the two legs share')
assert.equal(steps.filter(s => s === -17).length, 2, 'the -17 rode TWICE the boundary 378/379 the two legs share')

// THE LAST WORD - the face 386's own window the swing
assert.equal(w(386), SWING + '10 -> 11 (+1) -> 4 (-7)' + SWING_TAIL)

// THE LIVE STRETCH'S OWN READ - the sixteen faces 401..416 the
// windows W403..W416 FOURTEEN windows EIGHT swings ONE swell TWO
// fades THREE silences - the live 150u the stretch holds
const L = {}
L[401] = 10
L[402] = 7
L[403] = 1
L[404] = 10
L[405] = 9
L[406] = 0
L[407] = 0
L[408] = 0
L[409] = 20
L[410] = 3
L[411] = 9
L[412] = 2
L[413] = 26
L[414] = 2
L[415] = 8
L[416] = 43
let liveSum = 0
for (let f = 401; f <= 416; f++) liveSum += L[f]
assert.equal(liveSum, 150, 'the live stretch 150u the sixteen faces hold')
const lw = (f) => steerHazardTailTrendRow({ back: { steerHazardTails: L[f - 2] }, prev: { steerHazardTails: L[f - 1] }, cur: { steerHazardTails: L[f] } })
const liveTally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 403; f <= 416; f++) liveTally[tallyWindow(f, L)]++
assert.deepEqual(liveTally, { swing: 8, swell: 1, fade: 2, silence: 3 }, 'the live stretch\'s own breath the fourteen windows hold')
// the live fades the two (the faces 403/406's own windows)
assert.equal(lw(403), FADE + '10 -> 7 (-3) -> 1 (-6)' + FADE_TAIL)
assert.equal(lw(406), FADE + '10 -> 9 (-1) -> 0 (-9)' + FADE_TAIL)
// the live swell the lone one (the face 416's own window - the +35
// the whole field's own top the same leg rides)
assert.equal(lw(416), SWELL + '2 -> 8 (+6) -> 43 (+35)' + SWELL_TAIL)
// THE THREE-SILENCE RUN THE DRIED STRETCH - the faces W407..W409's
// own windows (the zeros the faces 406/407/408 keep - THREE
// CONSECUTIVE ZERO FACES the dried skin the stretch rides whole)
for (const f of [407, 408, 409]) assert.equal(lw(f), null, `the dried stretch F${f} the honest null rides`)
assert.deepEqual([L[406], L[407], L[408]], [0, 0, 0], 'the three consecutive zero faces the dried stretch holds')
const liveSilenceRun = []
for (let f = 403; f <= 416; f++) { if (tallyWindow(f, L) === 'silence') liveSilenceRun.push(f) }
assert.deepEqual(liveSilenceRun, [407, 408, 409], 'the three-silence run the dried stretch holds')
// the live swings the eight
assert.equal(lw(404), SWING + '7 -> 1 (-6) -> 10 (+9)' + SWING_TAIL)
assert.equal(lw(414), SWING + '2 -> 26 (+24) -> 2 (-24)' + SWING_TAIL, 'the live round trip the trade rides')
// THE LIVE ROUND TRIP - the face 414's own window the mirrored trade
const liveRoundTrips = []
for (let f = 403; f <= 416; f++) {
  if (L[f - 2] === L[f] && !(L[f - 1] === L[f - 2] || L[f] === L[f - 1])) liveRoundTrips.push(f)
}
assert.deepEqual(liveRoundTrips, [414], 'the live stretch holds the one round trip - the face 414\'s own trade')
assert.equal(Math.abs(L[413] - L[412]), Math.abs(L[414] - L[413]), 'the live trade the same size both legs the mirror rides')
// the live bounds - the +35 the live max rise rode ONCE (the face
// 416's own window's second leg - the whole field's own top the same
// leg rides), the -24 the live max fall rode TWICE two legs (the face
// 414's own window's second leg and the face 415's own window's first
// leg the shared leg - the boundary 413/414)
const liveSteps = []
for (let f = 403; f <= 416; f++) { liveSteps.push(L[f - 1] - L[f - 2]); liveSteps.push(L[f] - L[f - 1]) }
assert.equal(Math.max(...liveSteps), 35, 'the live max rise +35 the bound holds')
assert.equal(Math.min(...liveSteps), -24, 'the live max fall -24 the bound holds')
assert.equal(liveSteps.filter(s => s === 35).length, 1, 'the +35 rode ONCE the top\'s own arrival rides')
assert.equal(liveSteps.filter(s => s === -24).length, 2, 'the -24 rode TWICE the boundary 413/414 the two legs share')
assert.equal(L[416], 43, 'the live top the count 43 the face 416 holds')
assert.equal(L[406], 0, 'the live floor the count 0 the faces 406/407/408 hold')

// THE WHOLE-FIELD SEAT - the fifty-five faces' own total 440u (the
// birth 290u + the live 150u); the cached field's own three newest
// faces (417=16, 418=20, 420=9) add 45u more - 485u the fifty-eight
// faces hold; the whole-field max rise the live's own +35 rides, the
// whole-field max fall the live's own -24 the heavier rides
assert.equal(fieldSum + liveSum, 440, 'the whole-field seat 440u the fifty-five faces hold')
assert.equal(440 + 16 + 20 + 9, 485, 'the cached field\'s own seat 485u the fifty-eight faces the three newest add')
assert.equal(Math.max(...steps, ...liveSteps), 35, 'the whole-field max rise the live\'s own +35 holds')
assert.equal(Math.min(...steps, ...liveSteps), -24, 'the whole-field max fall the live\'s own -24 the heavier rides')
assert.equal(Math.max(...steps), 24, 'the birth\'s own +24 the crater\'s own climb the record beside')
assert.equal(Math.min(...steps), -17, 'the birth\'s own -17 the top\'s own drain the lighter beside')

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(steerHazardTailTrendRow({ back: { steerHazardTails: 1 }, prev: { steerHazardTails: 2 }, cur: { steerHazardTails: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(steerHazardTailTrendRow({ back: { steerHazardTails: 3 }, prev: { steerHazardTails: 2 }, cur: { steerHazardTails: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(steerHazardTailTrendRow({ back: { steerHazardTails: 1 }, prev: { steerHazardTails: 3 }, cur: { steerHazardTails: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(steerHazardTailTrendRow({ back: { steerHazardTails: 2 }, prev: { steerHazardTails: 2 }, cur: { steerHazardTails: 3 } }), null)
assert.equal(steerHazardTailTrendRow({ back: { steerHazardTails: 2 }, prev: { steerHazardTails: 3 }, cur: { steerHazardTails: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole (the dried
// stretch's own zeros the whole field's own lawful counts)
assert.equal(steerHazardTailTrendRow({ back: { steerHazardTails: 0 }, prev: { steerHazardTails: 1 }, cur: { steerHazardTails: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(steerHazardTailTrendRow({ back: { steerHazardTails: 0 }, prev: { steerHazardTails: 0 }, cur: { steerHazardTails: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(steerHazardTailTrendRow(null), null)
assert.equal(steerHazardTailTrendRow(undefined), null)
assert.equal(steerHazardTailTrendRow('junk'), null)
assert.equal(steerHazardTailTrendRow(42), null)
assert.equal(steerHazardTailTrendRow([]), null)
assert.equal(steerHazardTailTrendRow({}), null)
assert.equal(steerHazardTailTrendRow({ back: { steerHazardTails: 1 }, prev: { steerHazardTails: 2 } }), null)
assert.equal(steerHazardTailTrendRow({ back: { steerHazardTails: 1 }, cur: { steerHazardTails: 2 } }), null)
assert.equal(steerHazardTailTrendRow({ prev: { steerHazardTails: 1 }, cur: { steerHazardTails: 2 } }), null)
assert.equal(steerHazardTailTrendRow({ back: { steerHazardTails: 1 }, prev: { steerHazardTails: 2 }, cur: { steerHazardTails: -1 } }), null)
assert.equal(steerHazardTailTrendRow({ back: { steerHazardTails: 1.5 }, prev: { steerHazardTails: 2 }, cur: { steerHazardTails: 3 } }), null)
assert.equal(steerHazardTailTrendRow({ back: { other: 1 }, prev: { steerHazardTails: 2 }, cur: { steerHazardTails: 3 } }), null)
assert.equal(steerHazardTailTrendConsistent({ back: { steerHazardTails: 0 }, prev: { steerHazardTails: 0 }, cur: { steerHazardTails: 0 } }), true)
assert.equal(steerHazardTailTrendConsistent({ back: { steerHazardTails: 5 }, prev: { steerHazardTails: 9 }, cur: { steerHazardTails: 2 }, spare: true }), true)
assert.equal(steerHazardTailTrendConsistent(null), false)
assert.equal(steerHazardTailTrendConsistent(undefined), false)
assert.equal(steerHazardTailTrendConsistent('junk'), false)
assert.equal(steerHazardTailTrendConsistent([]), false)
assert.equal(steerHazardTailTrendConsistent({ back: { steerHazardTails: 1 }, prev: { steerHazardTails: 2 }, cur: { steerHazardTails: NaN } }), false)

// THE CELL'S OWN READ - the real steer hazard tail lines ride (the
// raw mass the lane prints - every line the lane prints rides, no
// exclusion the lane needs; the single-ore skin the mass rides - the
// walked-past ledger's own tail speaks)
assert.equal(steerHazardTails([
  'F4 steer hazard tail: copper_ore@-114,58,403 walked past the ledger (d 8.7) - nothing clean within reach (the tail keeps the option)',
  'F5 steer hazard tail: copper_ore@-114,58,403 walked past the ledger (d 8.5) - nothing clean within reach (the tail keeps the option)',
  'F17 steer hazard tail: coal_ore@-123,60,389 walked past the ledger (d 4.6) - nothing clean within reach (the tail keeps the option)'
]), 3)
assert.equal(steerHazardTails([
  'F2 steer hazard tail: iron_ore@-142,56,419 walked past the ledger (d 4.3) - nothing clean within reach (the tail keeps the option)'
]), 1)
// THE STEER SIBLINGS' OWN LINES never ride - the steer family never
// merges (the tier defer's own cell the .178 word prices and the
// hazard defer's own cell the held-behind sibling prices)
assert.equal(steerHazardTails(['F10 steer tier defer: iron_ore, copper_ore deferred - the pick cannot harvest the drops (the tail keeps the option, the upgrade rung restores the lead)']), 0)
assert.equal(steerHazardTails(['F12 steer hazard defer: iron_ore@-98,42,408 held behind the ledger (d 14.6) - the clean veins led (a death is a cost the deficit cannot repay, the tail keeps the option)']), 0)
// the tunnel lane's own steering prose never rides - a different
// lane's words the family never prices
assert.equal(steerHazardTails(['F15 tunnel: steering coal_ore @ 10.1b (axis x+, cross 2.6688520572349717, ore detour)']), 0)
assert.equal(steerHazardTails(['F15 tunnel: 0 blocks (branch mine at the floor, steered, ore detour) [names gate crafting_table]']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(steerHazardTails(['F4 bank trip: planned budget 300s']), 0)
assert.equal(steerHazardTails(['F5 final bank deferred: night (tod=18000)']), 0)
assert.equal(steerHazardTails(['F23 bank fallback: none (nothing to deposit)']), 0)
assert.equal(steerHazardTails(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
assert.equal(steerHazardTails(['F3 climb out (tool recovery): OK +8 levels (7 steps, 2 dug, 21s)']), 0)
// the tagged skin never rides - the emitter's own voice the bare
// prefix holds (the lane prints bare only, the zero tagged lines the
// whole field holds)
assert.equal(steerHazardTails(['F12 [F12] steer hazard tail: copper_ore@-114,58,403 walked past the ledger (d 8.5) - nothing clean within reach (the tail keeps the option)']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(steerHazardTails(['F6 steer hazard tail copper_ore@-114,58,403 walked past the ledger']), 0)
assert.equal(steerHazardTails(['F6 steer hazard tail']), 0)
assert.equal(steerHazardTails(['steer hazard tail: copper_ore@-114,58,403 walked past the ledger']), 0)
assert.equal(steerHazardTails(['F8 steer hazard tails: copper_ore@-114,58,403 walked past the ledger']), 0)
assert.equal(steerHazardTails(['F8 steer hazard tail-extra: copper_ore@-114,58,403 walked past the ledger']), 0)

// the defensive reads
assert.equal(steerHazardTails(null), 0)
assert.equal(steerHazardTails(undefined), 0)
assert.equal(steerHazardTails('junk'), 0)
assert.equal(steerHazardTails(42), 0)
assert.equal(steerHazardTails([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 steer hazard tail: coal_ore@-122,58,384 walked past the ledger (d 5.2) - nothing clean within reach (the tail keeps the option)',
  'F9 steer hazard tail: iron_ore@-128,56,409 walked past the ledger (d 10.5) - nothing clean within reach (the tail keeps the option)',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(steerHazardTails(lines), 2)
const fold = { back: { steerHazardTails: steerHazardTails(lines) }, prev: { steerHazardTails: 16 }, cur: { steerHazardTails: 8 } }
assert.equal(steerHazardTailTrendRow(fold), SWING + '2 -> 16 (+14) -> 8 (-8)' + SWING_TAIL)

console.log('steerhazartailtrend.test: all pins green')
