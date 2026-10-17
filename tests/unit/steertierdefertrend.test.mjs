// tests/unit/steertierdefertrend.test.mjs - THE STEER TIER DEFER'S
// OWN TREND's own pin battery (v0.976.178): the steer book's own tier
// seat the fire-0942's own sweep named - the field's own chains
// byte-exact (THE CELL'S OWN WEIGHT 436u the thirty-nine faces' own
// total - the whole-field seat 655u the fifty-five faces hold, THE
// FIELD'S OWN TOP THE COUNT 20 the face 358's own top rode once, the
// +12 the birth max rise rode TWICE two legs (the boundary 350/351
// the two windows share), the -10 the birth max fall rode TWICE two
// legs (the boundary 376/377 the two windows share), THE FIELD'S OWN
// FLOOR THE COUNT 1 rode
// ONE face (the face 377's own drought), ZERO FACES NONE - THE SKIN
// NEVER DRIED), THIRTY-TWO of THIRTY-SEVEN windows speaking (TWENTY-
// FIVE swings - THE SWING-HEAVIEST BOOK THE FAMILY HOLDS the yard
// approach's own twenty-two the record .175 held, THREE swells, FOUR
// fades, the FIVE honest silences - the two two-silence runs the
// mirrored hold pairs the birth field holds), THE TEN-SWING RUN THE
// FAMILY'S LONGEST the faces 377..386's own windows hold, THE TWO
// BACK-TO-BACK FADE RUNS the faces 360/361 and 369/370's own windows
// hold, THE THREE SWELLS THE ISOLATED ONES (the faces 358/367/376's
// own windows), ZERO ONE-WINDOW ROUND TRIPS THE WHOLE FIELD HOLDS -
// THE HONEST ZERO, the byte-pin battery, the fence battery, the
// cell's own read, the one-parser ride over the REAL steer tier
// defer lines (the ore rosters the mass never splits - the pair the
// standard roster rides, the single-ore skin the lighter rosters
// hold, the three-ore roster the full census rides; the steer
// siblings' own lines the hazard tail's and the hazard defer's own
// cells never ride - the steer family never merges; the tunnel lane's
// own steering prose never rides; the tagged skin never rides; the
// no-colon junk never rides).
import { steerTierDefers, steerTierDeferTrendConsistent, steerTierDeferTrendRow } from '../../src/lib/steertierdefertrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, this word prices the steer tier defer's own mass across the faces - the steer book's own tier-defer seat, co-existence by seat never by duplication)"

const HEAD = "the steer tier defer's own trend (v0.976.178)"
const SWING = HEAD + ": the steer tier defer's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the steer tier defer's rise ran two steps deep - "
const SWELL_TAIL = " - the steer tier defer's own swell " + TAIL
const FADE = HEAD + ": the steer tier defer's fall ran two steps deep - "
const FADE_TAIL = " - the steer tier defer's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the steer tier
// defer RE's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 436u the faces' own total, THE FIELD'S OWN TOP THE COUNT 20
// the face 358's own top rode once, the +12 the birth max rise rode
// TWICE two legs (the boundary 350/351 the two windows share), the
// -10 the birth max fall rode TWICE two legs (the boundary 376/377
// the two windows share), THE
// FIELD'S OWN FLOOR THE COUNT 1 rode ONE face (the face 377's own
// drought), ZERO FACES NONE - THE SKIN NEVER DRIED.
const P = {}
P[348] = 10
P[349] = 10
P[350] = 4
P[351] = 16
P[352] = 13
P[353] = 17
P[354] = 11
P[355] = 16
P[356] = 8
P[357] = 14
P[358] = 20
P[359] = 16
P[360] = 12
P[361] = 6
P[362] = 11
P[363] = 9
P[364] = 9
P[365] = 8
P[366] = 12
P[367] = 17
P[368] = 14
P[369] = 13
P[370] = 10
P[371] = 12
P[372] = 11
P[373] = 11
P[374] = 8
P[375] = 10
P[376] = 11
P[377] = 1
P[378] = 9
P[379] = 7
P[380] = 16
P[381] = 11
P[382] = 17
P[383] = 9
P[384] = 13
P[385] = 6
P[386] = 8
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 436, 'the cell 436u the hand-off holds - THE STEER BOOK\'S OWN TIER SEAT')
const w = (f) => steerTierDeferTrendRow({ back: { steerTierDefers: P[f - 2] }, prev: { steerTierDefers: P[f - 1] }, cur: { steerTierDefers: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (TWENTY-FIVE swings, THREE swells, FOUR fades, the
// FIVE honest silences - THE SWING-HEAVIEST BOOK THE FAMILY HOLDS)
const SWINGS = {
  351: '10 -> 4 (-6) -> 16 (+12)',
  352: '4 -> 16 (+12) -> 13 (-3)',
  353: '16 -> 13 (-3) -> 17 (+4)',
  354: '13 -> 17 (+4) -> 11 (-6)',
  355: '17 -> 11 (-6) -> 16 (+5)',
  356: '11 -> 16 (+5) -> 8 (-8)',
  357: '16 -> 8 (-8) -> 14 (+6)',
  359: '14 -> 20 (+6) -> 16 (-4)',
  362: '12 -> 6 (-6) -> 11 (+5)',
  363: '6 -> 11 (+5) -> 9 (-2)',
  366: '9 -> 8 (-1) -> 12 (+4)',
  368: '12 -> 17 (+5) -> 14 (-3)',
  371: '13 -> 10 (-3) -> 12 (+2)',
  372: '10 -> 12 (+2) -> 11 (-1)',
  375: '11 -> 8 (-3) -> 10 (+2)',
  377: '10 -> 11 (+1) -> 1 (-10)',
  378: '11 -> 1 (-10) -> 9 (+8)',
  379: '1 -> 9 (+8) -> 7 (-2)',
  380: '9 -> 7 (-2) -> 16 (+9)',
  381: '7 -> 16 (+9) -> 11 (-5)',
  382: '16 -> 11 (-5) -> 17 (+6)',
  383: '11 -> 17 (+6) -> 9 (-8)',
  384: '17 -> 9 (-8) -> 13 (+4)',
  385: '9 -> 13 (+4) -> 6 (-7)',
  386: '13 -> 6 (-7) -> 8 (+2)'
}
const SWELLS = {
  358: '8 -> 14 (+6) -> 20 (+6)',
  367: '8 -> 12 (+4) -> 17 (+5)',
  376: '8 -> 10 (+2) -> 11 (+1)'
}
const FADES = {
  360: '20 -> 16 (-4) -> 12 (-4)',
  361: '16 -> 12 (-4) -> 6 (-6)',
  369: '17 -> 14 (-3) -> 13 (-1)',
  370: '14 -> 13 (-1) -> 10 (-3)'
}
const SILENCES = [350, 364, 365, 373, 374]

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
assert.deepEqual(tally, { swing: 25, swell: 3, fade: 4, silence: 5 }, 'THE SWING-HEAVIEST BOOK THE FAMILY HOLDS - twenty-five the yard approach\'s own twenty-two the record beside')

// THE TEN-SWING RUN THE FAMILY'S LONGEST - the faces 377..386's own
// windows (the birth field's whole back half rides swings)
const swingRun = []
for (let f = 377; f <= 386; f++) swingRun.push(tallyWindow(f))
function tallyWindow (f) {
  const first = P[f - 1] - P[f - 2]
  const second = P[f] - P[f - 1]
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}
assert.deepEqual(swingRun, ['swing', 'swing', 'swing', 'swing', 'swing', 'swing', 'swing', 'swing', 'swing', 'swing'], 'the ten-swing run the family\'s longest')
// no longer swing run exists - the face 351..357's own seven the
// second run holds (the swell 358 breaks the first)
assert.equal(tallyWindow(358), 'swell', 'the swell 358 breaks the seven-swing run')
assert.equal(tallyWindow(376), 'swell', 'the swell 376 breaks before the ten-swing run')

// THE TWO BACK-TO-BACK FADE RUNS - the faces 360/361 and 369/370's
// own windows (the drains the pairs ride - the .176's own two fades
// the pair not adjacent the mirror beside, here BOTH pairs adjacent)
assert.equal(tallyWindow(360), 'fade')
assert.equal(tallyWindow(361), 'fade')
assert.equal(tallyWindow(369), 'fade')
assert.equal(tallyWindow(370), 'fade')

// THE THREE SWELLS THE ISOLATED ONES - no swell touches its
// neighbour (the faces 358/367/376's own windows)
for (const f of [358, 367, 376]) {
  const before = tallyWindow(f - 1)
  const after = f + 1 <= 386 ? tallyWindow(f + 1) : 'end'
  assert.notEqual(before, 'swell', `the swell F${f} the neighbour before never a swell`)
  assert.notEqual(after, 'swell', `the swell F${f} the neighbour after never a swell`)
}

// ZERO ONE-WINDOW ROUND TRIPS THE WHOLE FIELD HOLDS - THE HONEST
// ZERO (the tool upgrade due's own two the .176's own trades beside)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [], 'zero round trips the honest zero rides')

// THE TWO MIRRORED HOLD PAIRS the birth field holds - the boundaries
// 363/364 and 372/373 the shared leg each pair rides
const sharedPairs = []
for (let f = 351; f <= 386; f++) {
  if (SILENCES.includes(f) && SILENCES.includes(f - 1)) sharedPairs.push([f - 1, f])
}
assert.deepEqual(sharedPairs, [[364, 365], [373, 374]], 'the two back-to-back silence pairs the birth field holds')
const mirroredPairs = sharedPairs.filter(([a]) => P[a] === P[a - 1])
assert.deepEqual(mirroredPairs, [[364, 365], [373, 374]], 'the two mirrored hold pairs - every run the pair the shared leg rides')

// THE OPENER - the face 350's own window THE HONEST SILENCE the book
// born silent holds (the first leg the held 10 rides - the .176's
// own swell-pair opener the mirror beside)
assert.equal(w(350), null)
assert.equal(P[349], P[348], 'the opener\'s held leg the 10 -> 10 the silence the truth rides')

// THE DROUGHT'S OWN ARC - the face 377's own floor 1 the -10 the max
// fall's own arrival rides (the rebuild the +8 the next window holds)
assert.deepEqual([P[376], P[377], P[378]], [11, 1, 9], 'the drought\'s own arc 11 -> 1 -> 9')
assert.equal(w(377), SWING + '10 -> 11 (+1) -> 1 (-10)' + SWING_TAIL, 'the max fall\'s own arrival the swing rides')
assert.equal(w(378), SWING + '11 -> 1 (-10) -> 9 (+8)' + SWING_TAIL, 'the rebuild the swing rides')

// THE TOP'S OWN ARRIVAL - the face 358's own swell the +6/+6 the two
// legs the top rides (the whole field's own top the count 20)
assert.deepEqual([P[356], P[357], P[358]], [8, 14, 20], 'the swell\'s own climb 8 -> 14 -> 20')
assert.equal(Math.max(...Object.values(P)), 20, 'the top the count 20 the field holds')
assert.equal(w(358), SWELL + '8 -> 14 (+6) -> 20 (+6)' + SWELL_TAIL, 'the top\'s own arrival the swell rides')
assert.equal(w(359), SWING + '14 -> 20 (+6) -> 16 (-4)' + SWING_TAIL, 'the top\'s own drain the swing rides')

// THE BOUNDS - the +12 the birth max rise rode TWICE two legs (the
// face 351's own window's second leg and the face 352's own window's
// first leg the shared leg - the boundary 350/351), the -10 the
// birth max fall rode TWICE two legs (the face 377's own window's
// second leg and the face 378's own window's first leg the shared
// leg - the boundary 376/377)
const steps = []
for (let f = 350; f <= 386; f++) { steps.push(P[f - 1] - P[f - 2]); steps.push(P[f] - P[f - 1]) }
assert.equal(Math.max(...steps), 12, 'the birth max rise +12 the bound holds')
assert.equal(Math.min(...steps), -10, 'the birth max fall -10 the bound holds')
assert.equal(steps.filter(s => s === 12).length, 2, 'the +12 rode TWICE the boundary 350/351 the two legs share')
assert.equal(steps.filter(s => s === -10).length, 2, 'the -10 rode TWICE the boundary 376/377 the two legs share')

// THE ZERO FACES NONE - THE SKIN NEVER DRIED (the tier defer never
// dries - the pick's own tier debt the law always speaks)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.deepEqual(zeroFaces, [], 'zero faces none the skin never dried')

// THE LAST WORD - the face 386's own window the swing (the birth
// field's own trade the run's own tail holds)
assert.equal(w(386), SWING + '13 -> 6 (-7) -> 8 (+2)' + SWING_TAIL)

// THE LIVE STRETCH'S OWN READ - the sixteen faces 401..416 the
// windows W403..W416 FOURTEEN windows SEVEN swings ONE swell TWO
// fades FOUR silences - the live 219u the stretch holds
const L = {}
L[401] = 18
L[402] = 17
L[403] = 15
L[404] = 19
L[405] = 12
L[406] = 10
L[407] = 17
L[408] = 7
L[409] = 12
L[410] = 16
L[411] = 16
L[412] = 11
L[413] = 14
L[414] = 10
L[415] = 10
L[416] = 15
let liveSum = 0
for (let f = 401; f <= 416; f++) liveSum += L[f]
assert.equal(liveSum, 219, 'the live stretch 219u the sixteen faces hold')
const lw = (f) => steerTierDeferTrendRow({ back: { steerTierDefers: L[f - 2] }, prev: { steerTierDefers: L[f - 1] }, cur: { steerTierDefers: L[f] } })
const liveTally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 403; f <= 416; f++) {
  const first = L[f - 1] - L[f - 2]
  const second = L[f] - L[f - 1]
  if (first === 0 || second === 0) { liveTally.silence++; continue }
  if (first > 0 && second > 0) liveTally.swell++
  else if (first < 0 && second < 0) liveTally.fade++
  else liveTally.swing++
}
assert.deepEqual(liveTally, { swing: 7, swell: 1, fade: 2, silence: 4 }, 'the live stretch\'s own breath the fourteen windows hold')
// the live fades the two (the faces 403/406's own windows)
assert.equal(lw(403), FADE + '18 -> 17 (-1) -> 15 (-2)' + FADE_TAIL)
assert.equal(lw(406), FADE + '19 -> 12 (-7) -> 10 (-2)' + FADE_TAIL)
// the live swell the lone one (the face 410's own window)
assert.equal(lw(410), SWELL + '7 -> 12 (+5) -> 16 (+4)' + SWELL_TAIL)
// the live silences the four - THE TWO MIRRORED HOLD PAIRS the live
// field holds (the boundaries 410/411 and 414/415 the shared leg
// each pair rides)
assert.equal(lw(411), null)
assert.equal(lw(412), null)
assert.equal(lw(415), null)
assert.equal(lw(416), null)
assert.equal(L[411] === L[410], true, 'the 410/411 boundary the shared leg the pair rides')
assert.equal(L[415] === L[414], true, 'the 414/415 boundary the shared leg the pair rides')
// the live bounds - the +7 the live max rise rode TWICE two legs
// (the boundary 407/408 the two windows share), the -10 the live max
// fall rode TWICE two legs (the boundary 408/409 the two windows
// share - THE BIRTH MAX FALL'S OWN MIRROR the same bound the two
// fields ride)
const liveSteps = []
for (let f = 403; f <= 416; f++) { liveSteps.push(L[f - 1] - L[f - 2]); liveSteps.push(L[f] - L[f - 1]) }
assert.equal(Math.max(...liveSteps), 7, 'the live max rise +7 the bound holds')
assert.equal(Math.min(...liveSteps), -10, 'the live max fall -10 the bound holds')
assert.equal(liveSteps.filter(s => s === 7).length, 2, 'the +7 rode TWICE the boundary 407/408 the two legs share')
assert.equal(liveSteps.filter(s => s === -10).length, 2, 'the -10 rode TWICE the boundary 408/409 the two legs share')
assert.equal(L[404], 19, 'the live top the count 19 the face 404 holds')
assert.equal(L[408], 7, 'the live floor the count 7 the face 408 holds')

// THE WHOLE-FIELD SEAT - the fifty-five faces' own total 655u (the
// birth 436u + the live 219u), the whole-field bounds the birth's
// own +12 the max rise rides, the -10 the max fall FOUR legs TWO
// boundaries the whole field holds (the birth 376/377 + the live
// 408/409 pair the shared legs each boundary rides)
assert.equal(fieldSum + liveSum, 655, 'the whole-field seat 655u the fifty-five faces hold')
assert.equal(steps.filter(s => s === -10).length + liveSteps.filter(s => s === -10).length, 4, 'the -10 rode FOUR legs TWO boundaries the whole field holds')
assert.equal(Math.max(...steps), 12, 'the whole-field max rise the birth\'s own +12 holds')

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(steerTierDeferTrendRow({ back: { steerTierDefers: 1 }, prev: { steerTierDefers: 2 }, cur: { steerTierDefers: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(steerTierDeferTrendRow({ back: { steerTierDefers: 3 }, prev: { steerTierDefers: 2 }, cur: { steerTierDefers: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(steerTierDeferTrendRow({ back: { steerTierDefers: 1 }, prev: { steerTierDefers: 3 }, cur: { steerTierDefers: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(steerTierDeferTrendRow({ back: { steerTierDefers: 2 }, prev: { steerTierDefers: 2 }, cur: { steerTierDefers: 3 } }), null)
assert.equal(steerTierDeferTrendRow({ back: { steerTierDefers: 2 }, prev: { steerTierDefers: 3 }, cur: { steerTierDefers: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole
assert.equal(steerTierDeferTrendRow({ back: { steerTierDefers: 0 }, prev: { steerTierDefers: 1 }, cur: { steerTierDefers: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(steerTierDeferTrendRow({ back: { steerTierDefers: 0 }, prev: { steerTierDefers: 0 }, cur: { steerTierDefers: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(steerTierDeferTrendRow(null), null)
assert.equal(steerTierDeferTrendRow(undefined), null)
assert.equal(steerTierDeferTrendRow('junk'), null)
assert.equal(steerTierDeferTrendRow(42), null)
assert.equal(steerTierDeferTrendRow([]), null)
assert.equal(steerTierDeferTrendRow({}), null)
assert.equal(steerTierDeferTrendRow({ back: { steerTierDefers: 1 }, prev: { steerTierDefers: 2 } }), null)
assert.equal(steerTierDeferTrendRow({ back: { steerTierDefers: 1 }, cur: { steerTierDefers: 2 } }), null)
assert.equal(steerTierDeferTrendRow({ prev: { steerTierDefers: 1 }, cur: { steerTierDefers: 2 } }), null)
assert.equal(steerTierDeferTrendRow({ back: { steerTierDefers: 1 }, prev: { steerTierDefers: 2 }, cur: { steerTierDefers: -1 } }), null)
assert.equal(steerTierDeferTrendRow({ back: { steerTierDefers: 1.5 }, prev: { steerTierDefers: 2 }, cur: { steerTierDefers: 3 } }), null)
assert.equal(steerTierDeferTrendRow({ back: { other: 1 }, prev: { steerTierDefers: 2 }, cur: { steerTierDefers: 3 } }), null)
assert.equal(steerTierDeferTrendConsistent({ back: { steerTierDefers: 0 }, prev: { steerTierDefers: 0 }, cur: { steerTierDefers: 0 } }), true)
assert.equal(steerTierDeferTrendConsistent({ back: { steerTierDefers: 5 }, prev: { steerTierDefers: 9 }, cur: { steerTierDefers: 2 }, spare: true }), true)
assert.equal(steerTierDeferTrendConsistent(null), false)
assert.equal(steerTierDeferTrendConsistent(undefined), false)
assert.equal(steerTierDeferTrendConsistent('junk'), false)
assert.equal(steerTierDeferTrendConsistent([]), false)
assert.equal(steerTierDeferTrendConsistent({ back: { steerTierDefers: 1 }, prev: { steerTierDefers: 2 }, cur: { steerTierDefers: NaN } }), false)

// THE CELL'S OWN READ - the real steer tier defer lines ride (the
// raw mass the lane prints - every line the lane prints rides, no
// exclusion the lane needs; the ore rosters the mass never splits -
// the pair the standard roster rides, the single-ore skin the
// lighter rosters hold, the three-ore roster the full census rides)
assert.equal(steerTierDefers([
  'F10 steer tier defer: iron_ore, copper_ore deferred - the pick cannot harvest the drops (the tail keeps the option, the upgrade rung restores the lead)',
  'F6 steer tier defer: iron_ore, copper_ore deferred - the pick cannot harvest the drops (the tail keeps the option, the upgrade rung restores the lead)',
  'F3 steer tier defer: iron_ore, copper_ore deferred - the pick cannot harvest the drops (the tail keeps the option, the upgrade rung restores the lead)'
]), 3)
assert.equal(steerTierDefers([
  'F7 steer tier defer: coal_ore deferred - the pick cannot harvest the drops (the tail keeps the option, the upgrade rung restores the lead)'
]), 1)
assert.equal(steerTierDefers([
  'F9 steer tier defer: coal_ore, iron_ore, copper_ore deferred - the pick cannot harvest the drops (the tail keeps the option, the upgrade rung restores the lead)'
]), 1)
// THE STEER SIBLINGS' OWN LINES never ride - the steer family never
// merges (the hazard tail's own cell and the hazard defer's own cell
// the sibling seats price)
assert.equal(steerTierDefers(['F2 steer hazard tail: copper_ore@-114,58,403 walked past the ledger (d 8.5) - nothing clean within reach (the tail keeps the option)']), 0)
assert.equal(steerTierDefers(['F12 steer hazard defer: iron_ore@-98,42,408 held behind the ledger (d 14.6) - the clean veins led (a death is a cost the deficit cannot repay, the tail keeps the option)']), 0)
// the tunnel lane's own steering prose never rides - a different
// lane's words the family never prices
assert.equal(steerTierDefers(['F15 tunnel: steering coal_ore @ 10.1b (axis x+, cross 2.6688520572349717, ore detour)']), 0)
assert.equal(steerTierDefers(['F15 tunnel: 0 blocks (branch mine at the floor, steered, ore detour) [names gate crafting_table]']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(steerTierDefers(['F4 bank trip: planned budget 300s']), 0)
assert.equal(steerTierDefers(['F5 final bank deferred: night (tod=18000)']), 0)
assert.equal(steerTierDefers(['F23 bank fallback: none (nothing to deposit)']), 0)
assert.equal(steerTierDefers(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
assert.equal(steerTierDefers(['F3 climb out (tool recovery): OK +8 levels (7 steps, 2 dug, 21s)']), 0)
// the tagged skin never rides - the emitter's own voice the bare
// prefix holds (the lane prints bare only, the zero tagged lines the
// whole field holds)
assert.equal(steerTierDefers(['F12 [F12] steer tier defer: iron_ore, copper_ore deferred']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(steerTierDefers(['F6 steer tier defer iron_ore, copper_ore deferred']), 0)
assert.equal(steerTierDefers(['F6 steer tier defer']), 0)
assert.equal(steerTierDefers(['steer tier defer: iron_ore deferred']), 0)
assert.equal(steerTierDefers(['F8 steer tier defers: iron_ore deferred']), 0)
assert.equal(steerTierDefers(['F8 steer tier defer-extra: iron_ore deferred']), 0)

// the defensive reads
assert.equal(steerTierDefers(null), 0)
assert.equal(steerTierDefers(undefined), 0)
assert.equal(steerTierDefers('junk'), 0)
assert.equal(steerTierDefers(42), 0)
assert.equal(steerTierDefers([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 steer tier defer: iron_ore, copper_ore deferred - the pick cannot harvest the drops (the tail keeps the option, the upgrade rung restores the lead)',
  'F9 steer tier defer: coal_ore deferred - the pick cannot harvest the drops (the tail keeps the option, the upgrade rung restores the lead)',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(steerTierDefers(lines), 2)
const fold = { back: { steerTierDefers: steerTierDefers(lines) }, prev: { steerTierDefers: 16 }, cur: { steerTierDefers: 8 } }
assert.equal(steerTierDeferTrendRow(fold), SWING + '2 -> 16 (+14) -> 8 (-8)' + SWING_TAIL)

console.log('steertierdefertrend.test: all pins green')
