// tests/unit/walknudgetrend.test.mjs - THE SMELT MACHINE WALK'S OWN
// NUDGE TREND's own pin battery (v0.976.195): the smelt attempt's own
// walk-leg mass across the faces the F432's own census named (the
// smelt refusal census 'machine unreachable 4, cannot open 2, no fuel
// 1 of 7 refused attempts' the healed chain prices beside) - the
// field's own chains byte-exact (THE CELL'S OWN WEIGHT 1016u the
// thirty-nine faces' own total, THE FIELD'S OWN TOP THE COUNT 66 rode
// ONCE the face 368's own crest - THE STORM, THE FIELD'S OWN FLOOR
// THE COUNT ZERO rode ONCE the face 359's own floor - THE ONE
// DROUGHT), THIRTY-FIVE of THIRTY-SEVEN windows speaking (TWENTY
// swings, THREE swells, TWELVE fades, the TWO honest silences - THE
// PAIR the faces 374/375 hold), THE TWIN SIX-SWING RUNS the faces
// 360..365 and 368..373 hold - THE RECORD THE BOOK RIDES, THE TWIN
// TRIPLE FADE RUNS the faces 357..359 and 384..386 hold, THE ZERO
// ROUND TRIPS the book holds, the bounds' own legs pins (the +61 rode
// ONE leg ONE boundary the boundary 359/360 - THE DROUGHT'S OWN
// CLIMB, the -56 rode ONE leg ONE boundary the boundary 368/369 -
// THE STORM'S OWN DRAIN), the last word the face 386's own window the
// fade (26 -> 23 (-3) -> 13 (-10)), the whole-cache pins (the 1346u
// over the fifty-six faces, the face 432's own 22u the newest add,
// the W432 window the swing 16 -> 0 (-16) -> 22 (+22) MY WORD'S OWN
// FIRST LIVE READ the nearest-completed law holds - the absent
// 419/424/428 the honest gaps ride, THE WHOLE-CACHE TOP THE COUNT 72
// rode ONCE the face 418's own crest - THE WHOLE-CACHE STORM, the
// +66/-66 the weight-66 mirror the gap-crossing round trip the W417
// window holds, THE WHOLE-CACHE FLOOR THE ZERO rode TWICE the faces
// 359/431's own droughts), THE FOUR SKINS the read prices whole (the
// approach skin, the inside skin, the closed skin, the stall
// side-step skin - the verdict tails never split), the byte-pin /
// fence / extra-key / junk / read batteries (the fuel commons lane's
// own path nudge lines never ride - the nudgebook's own cell, the
// lanes never merge)
import assert from 'node:assert'
import { walkNudges, walkNudgeTrendConsistent, walkNudgeTrendRow } from '../../src/lib/walknudgetrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, this word prices the walk nudge's own mass across the faces - the smelt machine walk's own nudge seat, co-existence by seat never by duplication)"

const HEAD = 'the walk nudge trend (v0.976.195)'
const SWING = HEAD + ": the nudge's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the nudge's rise ran two steps deep - "
const SWELL_TAIL = " - the nudge's own swell " + TAIL
const FADE = HEAD + ": the nudge's fall ran two steps deep - "
const FADE_TAIL = " - the nudge's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the walk nudge
// RE's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 1016u the faces' own total, THE FIELD'S OWN TOP THE COUNT 66
// rode ONCE (the face 368's own crest - THE STORM), THE FIELD'S OWN
// FLOOR THE COUNT ZERO rode ONCE (the face 359's own floor - THE ONE
// DROUGHT)
const P = {}
P[348] = 13
P[349] = 11
P[350] = 4
P[351] = 25
P[352] = 24
P[353] = 15
P[354] = 32
P[355] = 53
P[356] = 35
P[357] = 16
P[358] = 2
P[359] = 0
P[360] = 61
P[361] = 12
P[362] = 23
P[363] = 20
P[364] = 48
P[365] = 24
P[366] = 12
P[367] = 6
P[368] = 66
P[369] = 10
P[370] = 40
P[371] = 30
P[372] = 54
P[373] = 40
P[374] = 40
P[375] = 13
P[376] = 6
P[377] = 36
P[378] = 46
P[379] = 26
P[380] = 8
P[381] = 36
P[382] = 38
P[383] = 29
P[384] = 26
P[385] = 23
P[386] = 13
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 1016, "the cell 1016u the hand-off holds - THE SMELT MACHINE WALK'S OWN NUDGE SEAT rides")
assert.equal(P[368], 66, "THE STORM the face 368's own 66 the crest rides - the top rode ONCE")
assert.equal(P[359], 0, "THE ONE DROUGHT the face 359's own zero the floor rides")
const w = (f) => walkNudgeTrendRow({ back: { walkNudges: P[f - 2] }, prev: { walkNudges: P[f - 1] }, cur: { walkNudges: P[f] } })

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
// classification (TWENTY swings, THREE swells, TWELVE fades, the TWO
// honest silences - THIRTY-FIVE of THIRTY-SEVEN speaking)
const SWELLS = {
  355: '15 -> 32 (+17) -> 53 (+21)',
  378: '6 -> 36 (+30) -> 46 (+10)',
  382: '8 -> 36 (+28) -> 38 (+2)'
}
const FADES = {
  350: '13 -> 11 (-2) -> 4 (-7)',
  353: '25 -> 24 (-1) -> 15 (-9)',
  357: '53 -> 35 (-18) -> 16 (-19)',
  358: '35 -> 16 (-19) -> 2 (-14)',
  359: '16 -> 2 (-14) -> 0 (-2)',
  366: '48 -> 24 (-24) -> 12 (-12)',
  367: '24 -> 12 (-12) -> 6 (-6)',
  376: '40 -> 13 (-27) -> 6 (-7)',
  380: '46 -> 26 (-20) -> 8 (-18)',
  384: '38 -> 29 (-9) -> 26 (-3)',
  385: '29 -> 26 (-3) -> 23 (-3)',
  386: '26 -> 23 (-3) -> 13 (-10)'
}
const SWINGS = {
  351: '11 -> 4 (-7) -> 25 (+21)',
  352: '4 -> 25 (+21) -> 24 (-1)',
  354: '24 -> 15 (-9) -> 32 (+17)',
  356: '32 -> 53 (+21) -> 35 (-18)',
  360: '2 -> 0 (-2) -> 61 (+61)',
  361: '0 -> 61 (+61) -> 12 (-49)',
  362: '61 -> 12 (-49) -> 23 (+11)',
  363: '12 -> 23 (+11) -> 20 (-3)',
  364: '23 -> 20 (-3) -> 48 (+28)',
  365: '20 -> 48 (+28) -> 24 (-24)',
  368: '12 -> 6 (-6) -> 66 (+60)',
  369: '6 -> 66 (+60) -> 10 (-56)',
  370: '66 -> 10 (-56) -> 40 (+30)',
  371: '10 -> 40 (+30) -> 30 (-10)',
  372: '40 -> 30 (-10) -> 54 (+24)',
  373: '30 -> 54 (+24) -> 40 (-14)',
  377: '13 -> 6 (-7) -> 36 (+30)',
  379: '36 -> 46 (+10) -> 26 (-20)',
  381: '26 -> 8 (-18) -> 36 (+28)',
  383: '36 -> 38 (+2) -> 29 (-9)'
}
const tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) tally[tallyWindow(f, P)]++
assert.deepEqual(tally, { swing: 20, swell: 3, fade: 12, silence: 2 }, "the birth field's own breath the THIRTY-SEVEN windows hold - THIRTY-FIVE speaking")
assert.equal(tally.swing, 20, 'TWENTY swings the machine walks\u2019 own churn rides')
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, `the swell F${f} the arc rides`)
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, `the fade F${f} the arc rides`)
}
for (const [f, arc] of Object.entries(SWINGS)) {
  assert.equal(w(Number(f)), SWING + arc + SWING_TAIL, `the swing F${f} the arc rides`)
}
for (const f of [374, 375]) {
  assert.equal(w(f), null, `the silence F${f} the held law keeps - the row never invents`)
}

// THE TWIN SIX-SWING RUNS - the faces 360..365 and 368..373's own
// windows (the swings chain six deep twice - THE RECORD THE BOOK
// RIDES, the pair 351/352 and the six solos 354/356/377/379/381/383
// the seats beside)
const swingRuns = []
let run = []
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f, P) === 'swing') run.push(f)
  else { if (run.length) swingRuns.push(run.slice()); run = [] }
}
if (run.length) swingRuns.push(run.slice())
const longest = Math.max(...swingRuns.map(r => r.length))
assert.equal(longest, 6, 'the longest swing run six deep the record rides')
assert.deepEqual(swingRuns.filter(r => r.length === longest), [[360, 361, 362, 363, 364, 365], [368, 369, 370, 371, 372, 373]], 'THE TWIN SIX-SWING RUNS the faces 360..365 and 368..373 hold - THE RECORD THE BOOK RIDES')
assert.deepEqual(swingRuns.find(r => r.length === 2), [351, 352], 'the swing PAIR the faces 351/352 hold')

// THE TWIN TRIPLE FADE RUNS - the faces 357..359 and 384..386's own
// windows (the fades chain three deep twice), the PAIR 366/367 beside,
// the four solo fades 350/353/376/380 beside
const fadeRuns = []
run = []
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f, P) === 'fade') run.push(f)
  else { if (run.length) fadeRuns.push(run.slice()); run = [] }
}
if (run.length) fadeRuns.push(run.slice())
assert.deepEqual(fadeRuns.filter(r => r.length === 3), [[357, 358, 359], [384, 385, 386]], 'THE TWIN TRIPLE FADE RUNS the faces 357..359 and 384..386 hold - the tail\u2019s own triple the closer rides')
assert.deepEqual(fadeRuns.find(r => r.length === 2), [366, 367], 'the fade PAIR the faces 366/367 hold')
assert.equal(fadeRuns.filter(r => r.length === 1).length, 4, 'the four solo fades 350/353/376/380 the seats beside')

// the THREE swell solos never chain (the zero back-to-back swell
// pairs the honest spread rides)
assert.equal(tallyWindow(356, P), 'swing', 'the swell 355 never chains forward the honest spread rides')
assert.equal(tallyWindow(379, P), 'swing', 'the swell 378 never chains forward the honest spread rides')
assert.equal(tallyWindow(383, P), 'swing', 'the swell 382 never chains forward the honest spread rides')

// THE ZERO ROUND TRIPS - the swings never mirrored the book holds
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  const a = P[f - 2], b = P[f - 1], c = P[f]
  const first = b - a, second = c - b
  if (first !== 0 && second !== 0 && first === -second) roundTrips.push([f, first, second])
}
assert.deepEqual(roundTrips, [], 'THE ZERO ROUND TRIPS the book holds - the swings never mirrored')

// THE BOUNDS' OWN LEGS - the +61 the max rise rode ONE leg ONE
// boundary (the boundary 359/360 - THE DROUGHT'S OWN CLIMB the floor
// 0 the climb prices), the -56 the max fall rode ONE leg ONE boundary
// (the boundary 368/369 - THE STORM'S OWN DRAIN the top paid
// near-whole 66 -> 10)
let maxRise = -Infinity; let maxFall = Infinity
const riseLegs = []; const fallLegs = []
for (let f = 350; f <= 386; f++) {
  const second = P[f] - P[f - 1]
  if (second > maxRise) maxRise = second
  if (second < maxFall) maxFall = second
}
for (let f = 350; f <= 386; f++) {
  const second = P[f] - P[f - 1]
  if (second === maxRise) riseLegs.push(f - 1 + '/' + f)
  if (second === maxFall) fallLegs.push(f - 1 + '/' + f)
}
assert.equal(maxRise, 61, 'the max rise +61 the drought climb prices')
assert.deepEqual(riseLegs, ['359/360'], 'the +61 rode ONE leg ONE boundary the boundary 359/360 - THE DROUGHT\'S OWN CLIMB')
assert.equal(w(360).includes('2 -> 0 (-2) -> 61 (+61)'), true, 'the climb\u2019s own window 358/359/360 rides')
assert.equal(maxFall, -56, 'the max fall -56 the storm drain prices')
assert.deepEqual(fallLegs, ['368/369'], 'the -56 rode ONE leg ONE boundary the boundary 368/369 - THE STORM\'S OWN DRAIN the top paid near-whole 66 -> 10')

// THE LAST WORD - the face 386's own window the fade (26 -> 23 (-3) ->
// 13 (-10) - the tail's own triple rides out on)
assert.equal(w(386), FADE + '26 -> 23 (-3) -> 13 (-10)' + FADE_TAIL, 'the last word the fade the tail rides out on')

// THE WHOLE-CACHE SEAT - 1346u the fifty-six faces the cache holds
// (the birth 1016u the thirty-nine faces, the face 347's own 16u the
// pre-field face, the post field 62u the three faces 387..389 beside,
// the newest 252u the thirteen faces 417..432 beside; the absent
// 419/424/428 the honest gaps ride)
const Q = {}
Q[347] = 16
Q[348] = 13
Q[349] = 11
Q[350] = 4
Q[351] = 25
Q[352] = 24
Q[353] = 15
Q[354] = 32
Q[355] = 53
Q[356] = 35
Q[357] = 16
Q[358] = 2
Q[359] = 0
Q[360] = 61
Q[361] = 12
Q[362] = 23
Q[363] = 20
Q[364] = 48
Q[365] = 24
Q[366] = 12
Q[367] = 6
Q[368] = 66
Q[369] = 10
Q[370] = 40
Q[371] = 30
Q[372] = 54
Q[373] = 40
Q[374] = 40
Q[375] = 13
Q[376] = 6
Q[377] = 36
Q[378] = 46
Q[379] = 26
Q[380] = 8
Q[381] = 36
Q[382] = 38
Q[383] = 29
Q[384] = 26
Q[385] = 23
Q[386] = 13
Q[387] = 16
Q[388] = 29
Q[389] = 17
Q[417] = 6
Q[418] = 72
Q[420] = 6
Q[421] = 11
Q[422] = 38
Q[423] = 16
Q[425] = 20
Q[426] = 8
Q[427] = 31
Q[429] = 6
Q[430] = 16
Q[431] = 0
Q[432] = 22
let cacheSum = 0
for (const k of Object.keys(Q)) cacheSum += Q[k]
assert.equal(Object.keys(Q).length, 56, 'the fifty-six faces the cache holds - the absent 419/424/428 the honest gaps ride')
assert.equal(cacheSum, 1346, 'the whole-cache seat 1346u the hand-off holds')
assert.equal(Q[418], 72, "THE WHOLE-CACHE STORM the face 418's own 72 the crest rides - the top rode ONCE above the birth's own 66")
assert.equal(Q[431], 0, "THE WHOLE-CACHE FLOOR the zero rode TWICE - the faces 359/431's own droughts, MY WORD'S OWN NEWEST DROUGHT the F431 face holds")
assert.equal(Q[432], 22, "the face 432's own 22u the newest add rides")

// THE POST WINDOWS - the nearest-completed law holds (the absent
// 419/424/428 the honest gaps ride - the W420/W422/W426 windows the
// gaps the rides hold)
const W = (a, b, c) => walkNudgeTrendRow({ back: { walkNudges: Q[a] }, prev: { walkNudges: Q[b] }, cur: { walkNudges: Q[c] } })
assert.equal(W(347, 348, 349), FADE + '16 -> 13 (-3) -> 11 (-2)' + FADE_TAIL, 'the pre-field window 347/348/349 the fade rides')
assert.equal(W(385, 386, 387), SWING + '23 -> 13 (-10) -> 16 (+3)' + SWING_TAIL, 'the W387 window the swing rides')
assert.equal(W(386, 387, 388), SWELL + '13 -> 16 (+3) -> 29 (+13)' + SWELL_TAIL, 'the W388 window the swell rides')
assert.equal(W(387, 388, 389), SWING + '16 -> 29 (+13) -> 17 (-12)' + SWING_TAIL, 'the W389 window the swing rides')
assert.equal(W(388, 389, 417), FADE + '29 -> 17 (-12) -> 6 (-11)' + FADE_TAIL, 'the W417 window the fade rides')
assert.equal(W(389, 417, 418), SWING + '17 -> 6 (-11) -> 72 (+66)' + SWING_TAIL, "THE WHOLE-CACHE STORM's own climb the W418 window rides")
assert.equal(W(417, 418, 420), SWING + '6 -> 72 (+66) -> 6 (-66)' + SWING_TAIL, 'THE ROUND TRIP ACROSS THE GAP the weight-66 mirror the W420 window holds - the biggest two-way trade the book rides, the absent 419 the honest gap rides')
assert.equal(W(418, 420, 421), SWING + '72 -> 6 (-66) -> 11 (+5)' + SWING_TAIL, 'the storm\u2019s own drain the W421 window rides')
assert.equal(W(420, 421, 422), SWELL + '6 -> 11 (+5) -> 38 (+27)' + SWELL_TAIL, 'the W422 window the swell rides')
assert.equal(W(421, 422, 423), SWING + '11 -> 38 (+27) -> 16 (-22)' + SWING_TAIL, 'the W423 window the swing rides')
assert.equal(W(422, 423, 425), SWING + '38 -> 16 (-22) -> 20 (+4)' + SWING_TAIL, 'the W425 window the swing the gap 424 the ride holds')
assert.equal(W(423, 425, 426), SWING + '16 -> 20 (+4) -> 8 (-12)' + SWING_TAIL, 'the W426 window the swing rides')
assert.equal(W(425, 426, 427), SWING + '20 -> 8 (-12) -> 31 (+23)' + SWING_TAIL, 'the W427 window the swing rides')
assert.equal(W(426, 427, 429), SWING + '8 -> 31 (+23) -> 6 (-25)' + SWING_TAIL, 'the W429 window the swing the gap 428 the ride holds')
assert.equal(W(427, 429, 430), SWING + '31 -> 6 (-25) -> 16 (+10)' + SWING_TAIL, 'the W430 window the swing rides')
assert.equal(W(429, 430, 431), SWING + '6 -> 16 (+10) -> 0 (-16)' + SWING_TAIL, "THE NEWEST DROUGHT's own drain the W431 window rides - the healthy fleet's own honest zero")
assert.equal(W(430, 431, 432), SWING + '16 -> 0 (-16) -> 22 (+22)' + SWING_TAIL, "MY WORD'S OWN FIRST LIVE READ - the W432 window the swing the recovery climb prices")

// THE FOUR SKINS the read prices whole - the one-parser ride over the
// REAL nudge lines (the verdict tails never split, the line's own
// count rides whole whatever the verdict's name)
const APPROACH = '[F6] walk nudge: approach: 2 segment(s) walked in 20.1s, goal now d=19.2 (inside the direct envelope)'
const INSIDE = '[F6] walk nudge: inside the direct envelope'
const CLOSED = '[F1] walk nudge: closed to d=28.9 - retrying the machine from the new start'
const OUTSIDE = '[F1] walk nudge: approach: 3 segment(s) walked in 22.4s, goal now d=28.9 (still outside - the approach clock is spent)'
const SIDESTEP = '[F3] walk nudge: approach: the stall side-step (right) moved the start (d now 41.1)'
assert.equal(walkNudges([APPROACH]), 1, 'the approach skin rides byte-true')
assert.equal(walkNudges([INSIDE]), 1, 'the inside skin rides byte-true')
assert.equal(walkNudges([CLOSED]), 1, 'the closed skin rides byte-true')
assert.equal(walkNudges([OUTSIDE]), 1, 'the still-outside skin rides byte-true')
assert.equal(walkNudges([SIDESTEP]), 1, 'the stall side-step skin rides byte-true')
assert.equal(walkNudges([APPROACH, INSIDE, CLOSED, OUTSIDE, SIDESTEP]), 5, 'the mass sums whole the skins ride')
assert.equal(walkNudges([]), 0, 'the empty lines the zero rides')
assert.equal(walkNudges(undefined), 0, 'the undefined lines the zero rides - the fence never lies')
assert.equal(walkNudges(['no lines here', 42, null]), 0, 'the junk lines the zero rides')

// THE LANES NEVER MERGE - the one-parser claims (the fuel commons
// lane's own path nudge lines the nudgebook's own cell prices never
// ride - the single-tag anatomy a different lane, the nudge approach
// verdicts census row never rides, the pre-position walk-home
// announcements the bankcensus's own lane never rides, the torn line
// never rides - the grammar strict)
assert.equal(walkNudges(['F2 fuel commons: path nudge approach: 1 segment(s) walked in 12.8s, goal now d=9.9 (inside the direct envelope)']), 0, 'the fuel commons nudge never rides - the nudgebook\u2019s own cell the lanes never merge')
assert.equal(walkNudges(['nudge approach verdicts: 34 per-bot: F8=5 F6=4 F1=3']), 0, 'the census row never rides')
assert.equal(walkNudges(['F13 pre-position: 29b from yard, t-224s - walking home']), 0, 'the pre-position announcement never rides - the bankcensus\u2019s own lane')
assert.equal(walkNudges(['F6 pre-position bank: 0 (chest unreachable (Took to long to decide path to goal!))']), 0, 'the bank zero never rides - the bankfail\u2019s own cell')
assert.equal(walkNudges(['[F6] walk nudge:']), 0, 'the torn line never rides - the grammar strict')
assert.equal(walkNudges(['F6 [F6] walk nudge: inside the direct envelope']), 0, 'the double-prefix form never rides - no such emitter voice, the bracket form the only one')

// THE FENCE BATTERY - the fold must prove itself (the fence law: the
// word never rides a lie); extra keys never rejected (the fence never
// invents exclusions)
assert.equal(walkNudgeTrendRow(null), null, 'the null fold the fence refuses')
assert.equal(walkNudgeTrendRow(undefined), null, 'the undefined fold the fence refuses')
assert.equal(walkNudgeTrendRow('junk'), null, 'the junk fold the fence refuses')
assert.equal(walkNudgeTrendRow([]), null, 'the array fold the fence refuses')
assert.equal(walkNudgeTrendRow({}), null, 'the empty fold the fence refuses')
assert.equal(walkNudgeTrendRow({ back: { walkNudges: 1 }, prev: { walkNudges: 2 } }), null, 'the missing face the fence refuses')
assert.equal(walkNudgeTrendRow({ back: { walkNudges: 1 }, prev: { walkNudges: 2 }, cur: { walkNudges: 1.5 } }), null, 'the non-integer the fence refuses')
assert.equal(walkNudgeTrendRow({ back: { walkNudges: 1 }, prev: { walkNudges: 2 }, cur: { walkNudges: -1 } }), null, 'the negative the fence refuses')
assert.equal(walkNudgeTrendRow({ back: { walkNudges: '1' }, prev: { walkNudges: 2 }, cur: { walkNudges: 3 } }), null, 'the string count the fence refuses')
assert.equal(walkNudgeTrendConsistent({ back: { walkNudges: 0 }, prev: { walkNudges: 0 }, cur: { walkNudges: 0 } }), true, 'the zero fold rides - the drought\u2019s own honest zero the lawful count')
assert.equal(walkNudgeTrendRow({ back: { walkNudges: 0, extra: 'x' }, prev: { walkNudges: 5, extra: 'y' }, cur: { walkNudges: 9, extra: 'z' } }), SWELL + '0 -> 5 (+5) -> 9 (+4)' + SWELL_TAIL, 'the extra keys never rejected - the fence never invents exclusions')

// THE BYTE-PIN BATTERY - the row never speaks the shape's own verdict
// words nor the seats' own verdict word nor the dynasty's own
// (co-existence by seat never by duplication)
const voices = [
  walkNudgeTrendRow({ back: { walkNudges: 1 }, prev: { walkNudges: 2 }, cur: { walkNudges: 3 } }),
  walkNudgeTrendRow({ back: { walkNudges: 3 }, prev: { walkNudges: 2 }, cur: { walkNudges: 1 } }),
  walkNudgeTrendRow({ back: { walkNudges: 1 }, prev: { walkNudges: 3 }, cur: { walkNudges: 2 } }),
]
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  for (const v of voices) {
    assert.equal(v.includes(banned), false, `the byte-pin holds - the ${banned} word never rides the row`)
  }
}
for (const v of voices) {
  assert.equal(v.endsWith('co-existence by seat never by duplication)'), true, 'the tail\u2019s own close the byte rides')
  assert.equal(v.includes("the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces"), true, 'the newest sibling the tail names - the fuel commons\u2019 own dry grain trend beside')
  assert.equal(v.includes("this word prices the walk nudge's own mass across the faces - the smelt machine walk's own nudge seat"), true, 'the word\u2019s own naming the tail holds')
}

console.log('walknudgetrend: all pins green')
