// tests/unit/steerhazarddefertrend.test.mjs - THE STEER HAZARD
// DEFER'S OWN TREND's own pin battery (v0.976.181): the steer book's
// own held-behind seat the fire-0942's own pricing named - THE
// FAMILY'S OWN LAST UNPRICED SEAT the completion rides - the field's
// own chains byte-exact (THE CELL'S OWN WEIGHT 315u the thirty-nine
// faces' own total - the whole-field seat 491u the fifty-nine faces
// hold, THE FIELD'S OWN TOP THE COUNT 26 the face 359's own top rode
// once, the +22 the birth max rise rode TWICE two legs (the boundary
// 377/378 the two windows share - THE CRATER'S OWN CLIMB), the -17
// the birth max fall rode TWICE two legs (the boundary 378/379 the
// two windows share - THE TAIL'S OWN -17 THE SAME BOUND THE SIBLING
// MIRRORS), THE CRATER'S OWN ARC 11 -> 1 (-10) -> 23 (+22) -> 6 (-17)
// the face 377's own floor-1 THE SKIN NEVER DRIED the tier defer's
// own mirror beside, THE FIELD'S OWN FLOORS THE COUNT ZERO rode TWO
// faces (the faces 373/383's own zeros - THE SCATTERED ZEROS THE
// BIRTH FIELD HOLDS the .177's own scattered mirror beside)),
// THIRTY-ONE of THIRTY-SEVEN windows speaking (TWENTY-ONE swings,
// FIVE swells, FIVE fades, the SIX honest silences - THE FOUR-SILENCE
// OPENER RUN THE BOOK BORN SILENT + the one mirrored hold pair the
// birth field holds), THE TWO ONE-WINDOW ROUND TRIPS EVERY ONE
// MIRRORED (the face 364's own window + the face 367's own window the
// churn's own heart holds), THE TWO TWO-SWELL RUNS the faces 354/355
// and 375/376's own windows hold, THE ONE TWO-FADE RUN the faces
// 372/373's own windows hold, THE SIX-SWING RUN the faces 366..371's
// own windows hold, THE NINE-SWING RUN THE CRATER'S OWN YARD the
// faces 377..385's own windows hold, the byte-pin battery, the fence
// battery, the cell's own read, the one-parser ride over the REAL
// steer hazard defer lines (the single-ore skin the mass rides - the
// held-behind ledger's own defer speaks; the steer siblings' own
// lines the tier defer's and the hazard tail's own cells never ride -
// the steer family never merges)
import assert from 'node:assert'
import { steerHazardDefers, steerHazardDeferTrendConsistent, steerHazardDeferTrendRow } from '../../src/lib/steerhazarddefertrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, this word prices the steer hazard defer's own mass across the faces - the steer book's own hazard-defer seat, co-existence by seat never by duplication)"

const HEAD = "the steer hazard defer's own trend (v0.976.181)"
const SWING = HEAD + ": the steer hazard defer's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the steer hazard defer's rise ran two steps deep - "
const SWELL_TAIL = " - the steer hazard defer's own swell " + TAIL
const FADE = HEAD + ": the steer hazard defer's fall ran two steps deep - "
const FADE_TAIL = " - the steer hazard defer's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the steer hazard
// defer RE's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 315u the faces' own total, THE FIELD'S OWN TOP THE COUNT 26
// the face 359's own top rode once, the +22 the birth max rise rode
// TWICE two legs (the boundary 377/378 the two windows share - THE
// CRATER'S OWN CLIMB), the -17 the birth max fall rode TWICE two legs
// (the boundary 378/379 the two windows share), THE CRATER'S OWN ARC
// the faces 377..379's own counts ride whole, THE FIELD'S OWN FLOORS
// THE COUNT ZERO rode TWO faces (the faces 373/383's own zeros).
const P = {}
P[348] = 4
P[349] = 3
P[350] = 3
P[351] = 3
P[352] = 3
P[353] = 7
P[354] = 9
P[355] = 14
P[356] = 4
P[357] = 9
P[358] = 9
P[359] = 26
P[360] = 14
P[361] = 3
P[362] = 8
P[363] = 10
P[364] = 8
P[365] = 7
P[366] = 11
P[367] = 7
P[368] = 12
P[369] = 5
P[370] = 10
P[371] = 9
P[372] = 8
P[373] = 0
P[374] = 4
P[375] = 7
P[376] = 11
P[377] = 1
P[378] = 23
P[379] = 6
P[380] = 12
P[381] = 1
P[382] = 13
P[383] = 0
P[384] = 14
P[385] = 11
P[386] = 6
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 315, 'the cell 315u the hand-off holds - THE STEER BOOK\'S OWN HELD-BEHIND SEAT')
const w = (f) => steerHazardDeferTrendRow({ back: { steerHazardDefers: P[f - 2] }, prev: { steerHazardDefers: P[f - 1] }, cur: { steerHazardDefers: P[f] } })

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
// classification (TWENTY-ONE swings, FIVE swells, FIVE fades, the SIX
// honest silences)
const SWINGS = {
  356: '9 -> 14 (+5) -> 4 (-10)',
  357: '14 -> 4 (-10) -> 9 (+5)',
  360: '9 -> 26 (+17) -> 14 (-12)',
  362: '14 -> 3 (-11) -> 8 (+5)',
  364: '8 -> 10 (+2) -> 8 (-2)',
  366: '8 -> 7 (-1) -> 11 (+4)',
  367: '7 -> 11 (+4) -> 7 (-4)',
  368: '11 -> 7 (-4) -> 12 (+5)',
  369: '7 -> 12 (+5) -> 5 (-7)',
  370: '12 -> 5 (-7) -> 10 (+5)',
  371: '5 -> 10 (+5) -> 9 (-1)',
  374: '8 -> 0 (-8) -> 4 (+4)',
  377: '7 -> 11 (+4) -> 1 (-10)',
  378: '11 -> 1 (-10) -> 23 (+22)',
  379: '1 -> 23 (+22) -> 6 (-17)',
  380: '23 -> 6 (-17) -> 12 (+6)',
  381: '6 -> 12 (+6) -> 1 (-11)',
  382: '12 -> 1 (-11) -> 13 (+12)',
  383: '1 -> 13 (+12) -> 0 (-13)',
  384: '13 -> 0 (-13) -> 14 (+14)',
  385: '0 -> 14 (+14) -> 11 (-3)'
}
const SWELLS = {
  354: '3 -> 7 (+4) -> 9 (+2)',
  355: '7 -> 9 (+2) -> 14 (+5)',
  363: '3 -> 8 (+5) -> 10 (+2)',
  375: '0 -> 4 (+4) -> 7 (+3)',
  376: '4 -> 7 (+3) -> 11 (+4)'
}
const FADES = {
  361: '26 -> 14 (-12) -> 3 (-11)',
  365: '10 -> 8 (-2) -> 7 (-1)',
  372: '10 -> 9 (-1) -> 8 (-1)',
  373: '9 -> 8 (-1) -> 0 (-8)',
  386: '14 -> 11 (-3) -> 6 (-5)'
}
const SILENCES = [350, 351, 352, 353, 358, 359]
const tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) tally[tallyWindow(f, P)]++
assert.deepEqual(tally, { swing: 21, swell: 5, fade: 5, silence: 6 }, 'the birth field\'s own breath the THIRTY-SEVEN windows hold - THIRTY-ONE speaking')
for (const [f, arc] of Object.entries(SWINGS)) {
  assert.equal(w(Number(f)), SWING + arc + SWING_TAIL, `the swing F${f} the arc rides`)
}
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, `the swell F${f} the arc rides`)
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, `the fade F${f} the arc rides`)
}
for (const f of SILENCES) {
  assert.equal(w(f), null, `the silence F${f} the held law keeps - the row never invents`)
}

// THE TOP THE COUNT 26 - the face 359's own top rode once (the whole
// family's own heaviest single face the four books hold)
assert.equal(Math.max(...Object.values(P)), 26, 'the birth top the count 26 the field holds')
assert.equal(P[359], 26, 'the top the count 26 the face 359 holds')
let topRode = 0
for (let f = 348; f <= 386; f++) { if (P[f] === 26) topRode++ }
assert.equal(topRode, 1, 'the top rode ONCE the face 359\'s own crest holds')

// THE SCATTERED ZEROS THE BIRTH FIELD HOLDS - the faces 373/383's own
// zeros (the .177's own scattered mirror beside: the two zeros TEN
// faces apart no run the zeros never touch the neighbour's own
// windows hold)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.deepEqual(zeroFaces, [373, 383], 'the TWO zero faces the birth field holds - the scattered skin rides')
assert.equal(zeroFaces[1] - zeroFaces[0], 10, 'the two zeros TEN faces apart the scattered mirror rides')
for (const f of zeroFaces) {
  assert.notEqual(tallyWindow(f, P), 'swell', `the zero face F${f} the neighbour window never a swell`)
}

// THE FOUR-SILENCE OPENER RUN THE BOOK BORN SILENT - the faces
// 350..353's own windows hold (the .178's own honest silence the
// opener mirror beside - the siblings' own openers disagree: the tail
// born trading, the defer born silent the family's own second silent
// opener)
for (let f = 350; f <= 353; f++) {
  assert.equal(tallyWindow(f, P), 'silence', `the silence F${f} the opener run rides`)
}
assert.notEqual(tallyWindow(354, P), 'silence', 'the swell F354 the neighbour after never a silence - the run never exceeds FOUR')
// the opener the face 350's own window THE HONEST SILENCE (the second
// leg the held 3 rides)
assert.equal(w(350), null, 'the opener\'s honest silence the book born silent holds')
assert.deepEqual([P[348], P[349], P[350]], [4, 3, 3], 'the opener\'s own faces the held second leg rides')

// THE ONE TWO-SILENCE RUN THE MIRRORED HOLD PAIR - the faces 358/359's
// own windows hold (the boundary 357/358 the one held leg the pair
// shares - the two silences the one held leg each pair shares)
assert.equal(tallyWindow(358, P), 'silence', 'the hold pair\'s first face the silence rides')
assert.equal(tallyWindow(359, P), 'silence', 'the hold pair\'s second face the silence rides')
assert.deepEqual([P[357], P[358], P[359]], [9, 9, 26], 'the held leg 9 -> 9 the boundary 357/358 the pair shares')
assert.notEqual(tallyWindow(357, P), 'silence', 'the swing F357 the neighbour before never a silence')
assert.notEqual(tallyWindow(360, P), 'silence', 'the swing F360 the neighbour after never a silence')

// THE TWO TWO-SWELL RUNS - the faces 354/355 and 375/376's own windows
// hold (the climbs the pairs ride; the solo swell the face 363's own
// window the isolated seat beside)
for (const f of [354, 355, 375, 376]) {
  assert.equal(tallyWindow(f, P), 'swell', `the swell F${f} the pair runs ride`)
}
assert.equal(tallyWindow(363, P), 'swell', 'the solo swell F363 the isolated seat rides')
for (const f of [353, 356, 374, 377]) {
  assert.notEqual(tallyWindow(f, P), 'swell', `the window F${f} the neighbour never a swell`)
}

// THE ONE TWO-FADE RUN - the faces 372/373's own windows hold (the
// drain the pair rides - the drought face 373's own zero the run's own
// landing holds; the three solo fades the faces 361/365/386's own
// windows the isolated seats beside)
for (const f of [372, 373]) {
  assert.equal(tallyWindow(f, P), 'fade', `the fade F${f} the pair run rides`)
}
for (const f of [361, 365, 386]) {
  assert.equal(tallyWindow(f, P), 'fade', `the solo fade F${f} the isolated seat rides`)
}
for (const f of [371, 374]) {
  assert.notEqual(tallyWindow(f, P), 'fade', `the window F${f} the neighbour never a fade`)
}

// THE SIX-SWING RUN - the faces 366..371's own windows hold (the churn
// the six windows trade - the .178's own ten-swing run the family's
// own longest the record beside)
for (let f = 366; f <= 371; f++) {
  assert.equal(tallyWindow(f, P), 'swing', `the swing F${f} the six-run rides`)
}
assert.notEqual(tallyWindow(365, P), 'swing', 'the fade F365 the neighbour before never a swing - the run never exceeds SIX')
assert.notEqual(tallyWindow(372, P), 'swing', 'the fade F372 the neighbour after never a swing')

// THE NINE-SWING RUN THE CRATER'S OWN YARD - the faces 377..385's own
// windows hold (the birth field's own back half rides swings - the
// crater's own climb and drain the run rides whole)
for (let f = 377; f <= 385; f++) {
  assert.equal(tallyWindow(f, P), 'swing', `the swing F${f} the nine-run rides`)
}
assert.notEqual(tallyWindow(376, P), 'swing', 'the swell F376 the neighbour before never a swing')
assert.notEqual(tallyWindow(386, P), 'swing', 'the fade F386 the neighbour after never a swing')

// THE TWO ONE-WINDOW ROUND TRIPS EVERY ONE MIRRORED - the face 364's
// own window (8 -> 10 (+2) -> 8 (-2)) and the face 367's own window
// (7 -> 11 (+4) -> 7 (-4)) the churn's own heart holds (the tail's own
// two round trips the .179's own mirror beside: the opener born
// trading there, here both round trips the mid-field holds)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [364, 367], 'the birth field holds the TWO round trips - the churn\'s own heart the mirrored trades')
assert.equal(w(364), SWING + '8 -> 10 (+2) -> 8 (-2)' + SWING_TAIL, 'the lighter round trip the swing rides')
assert.equal(w(367), SWING + '7 -> 11 (+4) -> 7 (-4)' + SWING_TAIL, 'the heavier round trip the swing rides')
for (const f of roundTrips) {
  assert.equal(Math.abs(P[f - 1] - P[f - 2]), Math.abs(P[f] - P[f - 1]), `the round trip F${f} the same size both legs the mirror rides`)
}

// THE CRATER'S OWN ARC - the face 377's own floor-1 THE SKIN NEVER
// DRIED (the tier defer's own floor-1 the same face keeps the .178's
// own mirror beside - two of the family keep the floor-1 the same face
// holds, the tail's own zero the dried skin the .179's own drought
// rides)
assert.deepEqual([P[376], P[377], P[378], P[379]], [11, 1, 23, 6], 'the crater\'s own arc 11 -> 1 (-10) -> 23 (+22) -> 6 (-17)')
assert.equal(w(377), SWING + '7 -> 11 (+4) -> 1 (-10)' + SWING_TAIL, 'the crater\'s own arrival the swing rides')
assert.equal(w(378), SWING + '11 -> 1 (-10) -> 23 (+22)' + SWING_TAIL, 'the crater\'s own climb the swing rides')
assert.equal(w(379), SWING + '1 -> 23 (+22) -> 6 (-17)' + SWING_TAIL, 'the top\'s own drain the swing rides')
assert.equal(P[377], 1, 'the face 377\'s own floor-1 the skin never dried the family\'s own mirror holds')

// THE BOUNDS - the +22 the birth max rise rode TWICE two legs (the
// boundary 377/378 the two windows share - THE CRATER'S OWN CLIMB the
// tail's own +24 the same boundary the .179's own climb the sibling
// faces' own mirror rides), the -17 the birth max fall rode TWICE two
// legs (the boundary 378/379 the two windows share - THE TAIL'S OWN
// -17 THE SAME BOUND THE SIBLING MIRRORS)
const steps = []
for (let f = 350; f <= 386; f++) { steps.push(P[f - 1] - P[f - 2]); steps.push(P[f] - P[f - 1]) }
assert.equal(Math.max(...steps), 22, 'the birth max rise +22 the bound holds')
assert.equal(Math.min(...steps), -17, 'the birth max fall -17 the bound holds')
assert.equal(steps.filter(s => s === 22).length, 2, 'the +22 rode TWICE the boundary 377/378 the two legs share')
assert.equal(steps.filter(s => s === -17).length, 2, 'the -17 rode TWICE the boundary 378/379 the two legs share')
assert.equal(steps.filter(s => s === 17).length, 2, 'the +17 rode TWICE the boundary 358/359 the two legs share')
assert.equal(steps.filter(s => s === -13).length, 2, 'the -13 rode TWICE the boundary 382/383 the two legs share')

// THE LAST WORD - the face 386's own window the fade (the tail's own
// last word the swing the .179's own mirror beside: the siblings' own
// last words disagree)
assert.equal(w(386), FADE + '14 -> 11 (-3) -> 6 (-5)' + FADE_TAIL)

// THE LIVE STRETCH'S OWN READ - the sixteen faces 401..416 the
// windows W403..W416 FOURTEEN windows EIGHT swings ONE swell THREE
// fades TWO silences - the live 133u the stretch holds
const L = {}
L[401] = 17
L[402] = 10
L[403] = 1
L[404] = 20
L[405] = 10
L[406] = 3
L[407] = 1
L[408] = 1
L[409] = 12
L[410] = 8
L[411] = 16
L[412] = 7
L[413] = 14
L[414] = 2
L[415] = 4
L[416] = 7
let liveSum = 0
for (let f = 401; f <= 416; f++) liveSum += L[f]
assert.equal(liveSum, 133, 'the live stretch 133u the sixteen faces hold')
const lw = (f) => steerHazardDeferTrendRow({ back: { steerHazardDefers: L[f - 2] }, prev: { steerHazardDefers: L[f - 1] }, cur: { steerHazardDefers: L[f] } })
const liveTally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 403; f <= 416; f++) liveTally[tallyWindow(f, L)]++
assert.deepEqual(liveTally, { swing: 8, swell: 1, fade: 3, silence: 2 }, 'the live stretch\'s own breath the fourteen windows hold')
// the live fades the three (the faces 403/406/407's own windows)
assert.equal(lw(403), FADE + '17 -> 10 (-7) -> 1 (-9)' + FADE_TAIL)
assert.equal(lw(406), FADE + '20 -> 10 (-10) -> 3 (-7)' + FADE_TAIL)
assert.equal(lw(407), FADE + '10 -> 3 (-7) -> 1 (-2)' + FADE_TAIL)
// the live swell the lone one (the face 416's own window - the last
// live word the swell rides)
assert.equal(lw(416), SWELL + '2 -> 4 (+2) -> 7 (+3)' + SWELL_TAIL)
// THE ONE MIRRORED HOLD PAIR the live stretch holds - the faces
// 408/409's own windows (the boundary 407/408 the one held leg the
// pair shares)
assert.equal(lw(408), null, 'the live hold pair\'s first face the silence rides')
assert.equal(lw(409), null, 'the live hold pair\'s second face the silence rides')
assert.deepEqual([L[407], L[408], L[409]], [1, 1, 12], 'the held leg 1 -> 1 the boundary 407/408 the pair shares')

// THE LIVE BOUNDS - the +19 the live max rise rode TWICE two legs (the
// boundary 403/404 the two windows share), the -12 the live max fall
// rode TWICE two legs (the boundary 413/414 the two windows share -
// THE TAIL'S OWN LIVE BOUNDARY the .179's own -24 the same boundary
// the sibling's own mirror the family's own law rides)
const liveSteps = []
for (let f = 403; f <= 416; f++) { liveSteps.push(L[f - 1] - L[f - 2]); liveSteps.push(L[f] - L[f - 1]) }
assert.equal(Math.max(...liveSteps), 19, 'the live max rise +19 the bound holds')
assert.equal(Math.min(...liveSteps), -12, 'the live max fall -12 the bound holds')
assert.equal(liveSteps.filter(s => s === 19).length, 2, 'the +19 rode TWICE the boundary 403/404 the two legs share')
assert.equal(liveSteps.filter(s => s === -12).length, 2, 'the -12 rode TWICE the boundary 413/414 the two legs share')

// THE LIVE TOP THE COUNT 20 - the face 404's own top holds (the tail's
// own live top 43 the face 416 the .179's own record beside - the
// defer's own 20 the lighter crest rides)
assert.equal(Math.max(...Object.values(L)), 20, 'the live top the count 20 the stretch holds')
assert.equal(L[404], 20, 'the live top the count 20 the face 404 holds')
// THE LIVE FLOOR THE COUNT 1 - the faces 403/407/408's own floors hold
// (ZERO FACES NONE the live stretch keeps - THE SKIN NEVER DRIED the
// live law holds, the tail's own three-zero dried stretch the .179's
// own mirror beside)
const liveZeros = []
for (let f = 401; f <= 416; f++) { if (L[f] === 0) liveZeros.push(f) }
assert.deepEqual(liveZeros, [], 'ZERO zero faces the live stretch keeps - the skin never dried the live law holds')
const liveFloorFaces = []
for (let f = 401; f <= 416; f++) { if (L[f] === 1) liveFloorFaces.push(f) }
assert.deepEqual(liveFloorFaces, [403, 407, 408], 'the live floor 1 the THREE faces hold')

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(steerHazardDeferTrendRow({ back: { steerHazardDefers: 1 }, prev: { steerHazardDefers: 2 }, cur: { steerHazardDefers: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(steerHazardDeferTrendRow({ back: { steerHazardDefers: 3 }, prev: { steerHazardDefers: 2 }, cur: { steerHazardDefers: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(steerHazardDeferTrendRow({ back: { steerHazardDefers: 1 }, prev: { steerHazardDefers: 3 }, cur: { steerHazardDefers: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(steerHazardDeferTrendRow({ back: { steerHazardDefers: 2 }, prev: { steerHazardDefers: 2 }, cur: { steerHazardDefers: 3 } }), null)
assert.equal(steerHazardDeferTrendRow({ back: { steerHazardDefers: 2 }, prev: { steerHazardDefers: 3 }, cur: { steerHazardDefers: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole (the
// scattered zeros the whole field's own lawful counts)
assert.equal(steerHazardDeferTrendRow({ back: { steerHazardDefers: 0 }, prev: { steerHazardDefers: 1 }, cur: { steerHazardDefers: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(steerHazardDeferTrendRow({ back: { steerHazardDefers: 0 }, prev: { steerHazardDefers: 0 }, cur: { steerHazardDefers: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(steerHazardDeferTrendRow(null), null)
assert.equal(steerHazardDeferTrendRow(undefined), null)
assert.equal(steerHazardDeferTrendRow('junk'), null)
assert.equal(steerHazardDeferTrendRow(42), null)
assert.equal(steerHazardDeferTrendRow([]), null)
assert.equal(steerHazardDeferTrendRow({}), null)
assert.equal(steerHazardDeferTrendRow({ back: { steerHazardDefers: 1 }, prev: { steerHazardDefers: 2 } }), null)
assert.equal(steerHazardDeferTrendRow({ back: { steerHazardDefers: 1 }, cur: { steerHazardDefers: 2 } }), null)
assert.equal(steerHazardDeferTrendRow({ prev: { steerHazardDefers: 1 }, cur: { steerHazardDefers: 2 } }), null)
assert.equal(steerHazardDeferTrendRow({ back: { steerHazardDefers: 1 }, prev: { steerHazardDefers: 2 }, cur: { steerHazardDefers: -1 } }), null)
assert.equal(steerHazardDeferTrendRow({ back: { steerHazardDefers: 1.5 }, prev: { steerHazardDefers: 2 }, cur: { steerHazardDefers: 3 } }), null)
assert.equal(steerHazardDeferTrendRow({ back: { other: 1 }, prev: { steerHazardDefers: 2 }, cur: { steerHazardDefers: 3 } }), null)
assert.equal(steerHazardDeferTrendConsistent({ back: { steerHazardDefers: 0 }, prev: { steerHazardDefers: 0 }, cur: { steerHazardDefers: 0 } }), true)
assert.equal(steerHazardDeferTrendConsistent({ back: { steerHazardDefers: 5 }, prev: { steerHazardDefers: 9 }, cur: { steerHazardDefers: 2 }, spare: true }), true)
assert.equal(steerHazardDeferTrendConsistent(null), false)
assert.equal(steerHazardDeferTrendConsistent(undefined), false)
assert.equal(steerHazardDeferTrendConsistent('junk'), false)
assert.equal(steerHazardDeferTrendConsistent([]), false)
assert.equal(steerHazardDeferTrendConsistent({ back: { steerHazardDefers: 1 }, prev: { steerHazardDefers: 2 }, cur: { steerHazardDefers: NaN } }), false)

// THE CELL'S OWN READ - the real steer hazard defer lines ride (the
// raw mass the lane prints - every line the lane prints rides, no
// exclusion the lane needs; the single-ore skin the mass rides - the
// held-behind ledger's own defer speaks)
assert.equal(steerHazardDefers([
  'F15 steer hazard defer: coal_ore@-123,60,389 held behind the ledger (d 4) - the clean veins led (a death is a cost the deficit cannot repay, the tail keeps the option)',
  'F11 steer hazard defer: coal_ore@-120,45,389 held behind the ledger (d 2.3) - the clean veins led (a death is a cost the deficit cannot repay, the tail keeps the option)',
  'F16 steer hazard defer: coal_ore@-122,59,388 held behind the ledger (d 4.9) - the clean veins led (a death is a cost the deficit cannot repay, the tail keeps the option)'
]), 3)
assert.equal(steerHazardDefers([
  'F6 steer hazard defer: coal_ore@-130,47,408 held behind the ledger (d 5.9) - the clean veins led (a death is a cost the deficit cannot repay, the tail keeps the option)'
]), 1)
// THE STEER SIBLINGS' OWN LINES never ride - the steer family never
// merges (the tier defer's own cell the .178 word prices and the
// hazard tail's own cell the .179 word prices)
assert.equal(steerHazardDefers(['F10 steer tier defer: iron_ore, copper_ore deferred - the pick cannot harvest the drops (the tail keeps the option, the upgrade rung restores the lead)']), 0)
assert.equal(steerHazardDefers(['F4 steer hazard tail: copper_ore@-114,58,403 walked past the ledger (d 8.7) - nothing clean within reach (the tail keeps the option)']), 0)
// the tunnel lane's own steering prose never rides - a different
// lane's words the family never prices
assert.equal(steerHazardDefers(['F15 tunnel: steering coal_ore @ 10.1b (axis x+, cross 2.6688520572349717, ore detour)']), 0)
assert.equal(steerHazardDefers(['F15 tunnel: 0 blocks (branch mine at the floor, steered, ore detour) [names gate crafting_table]']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(steerHazardDefers(['F4 bank trip: planned budget 300s']), 0)
assert.equal(steerHazardDefers(['F5 final bank deferred: night (tod=18000)']), 0)
assert.equal(steerHazardDefers(['F23 bank fallback: none (nothing to deposit)']), 0)
assert.equal(steerHazardDefers(['F23 bank fallback: none (budget exhausted)']), 0)
assert.equal(steerHazardDefers(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
assert.equal(steerHazardDefers(['F3 climb out (tool recovery): OK +8 levels (7 steps, 2 dug, 21s)']), 0)
// the tagged skin never rides - the emitter's own voice the bare
// prefix holds (the lane prints bare only, the zero tagged lines the
// whole field holds)
assert.equal(steerHazardDefers(['F12 [F12] steer hazard defer: coal_ore@-123,60,389 held behind the ledger (d 4) - the clean veins led (a death is a cost the deficit cannot repay, the tail keeps the option)']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(steerHazardDefers(['F6 steer hazard defer coal_ore@-123,60,389 held behind the ledger']), 0)
assert.equal(steerHazardDefers(['F6 steer hazard defer']), 0)
assert.equal(steerHazardDefers(['steer hazard defer: coal_ore@-123,60,389 held behind the ledger']), 0)
assert.equal(steerHazardDefers(['F8 steer hazard defers: coal_ore@-123,60,389 held behind the ledger']), 0)
assert.equal(steerHazardDefers(['F8 steer hazard defer-extra: coal_ore@-123,60,389 held behind the ledger']), 0)

// the defensive reads
assert.equal(steerHazardDefers(null), 0)
assert.equal(steerHazardDefers(undefined), 0)
assert.equal(steerHazardDefers('junk'), 0)
assert.equal(steerHazardDefers(42), 0)
assert.equal(steerHazardDefers([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 steer hazard defer: iron_ore@-98,42,408 held behind the ledger (d 14.6) - the clean veins led (a death is a cost the deficit cannot repay, the tail keeps the option)',
  'F9 steer hazard defer: coal_ore@-120,45,389 held behind the ledger (d 2.3) - the clean veins led (a death is a cost the deficit cannot repay, the tail keeps the option)',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(steerHazardDefers(lines), 2)
const fold = { back: { steerHazardDefers: steerHazardDefers(lines) }, prev: { steerHazardDefers: 16 }, cur: { steerHazardDefers: 8 } }
assert.equal(steerHazardDeferTrendRow(fold), SWING + '2 -> 16 (+14) -> 8 (-8)' + SWING_TAIL)

console.log('steerhazarddefertrend.test: all pins green')
