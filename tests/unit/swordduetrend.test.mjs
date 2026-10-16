// tests/unit/swordduetrend.test.mjs - THE SWORD DUE'S OWN TREND's own
// pin battery (v0.976.169): the field's own chains byte-exact (THE
// SWORD DUE BOOK'S OWN BESIDE-SEAT beside the raw docket words - the
// planks-available verdicts and the cobble-available verdicts the
// lane prints, THE CELL'S OWN WEIGHT 761u the faces' own total - THE
// .162'S OWN BORDER NAMING rode byte-true the sword's whole mass
// 2458u the raw docket seat the primary shape the due sibling 761u
// this word prices, THE FIELD'S OWN TOP THE COUNT 26 the face 359's
// own top rode once - the +9 the max rise rode TWICE two legs the
// shared leg (the faces 378/379's own windows the 23 the count the
// same), the -6 the max fall rode ONCE (the face 379's own window's
// second leg - THE MAX RISE AND THE MAX FALL THE BACK-TO-BACK STEP),
// THE FIELD'S OWN FLOOR THE COUNT 14 rode THREE faces (the faces
// 348/350/377's own floors), ZERO FACES NONE - THE SKIN NEVER
// DRIED), THIRTY-THREE of THIRTY-SEVEN windows speaking (TWENTY-SIX
// swings, SIX swells, THE LONE FADE - THE ONE-FADE BOOK THE FAMILY'S
// FIRST, the FOUR honest silences), THE FOUR-SILENCE RUN the faces
// 366/367/368/369's own windows hold (the .168's own run mirrored
// window-for-window - THE SECOND FOUR-WINDOW SILENT RUN THE FAMILY
// HOLDS the count 22 the 366/367 pair's own held leg, the count 20
// the 368/369 pair's own held leg the run keeps), THE ONE-WINDOW
// ROUND TRIPS SIX (the faces 350/353/357/373/374/386's own windows -
// THE MOST ROUND-TRIP BOOK THE FAMILY HOLDS, THE ADJACENT PAIR the
// faces 373/374's own windows the mirrored trade), the byte-pin
// battery, the fence battery, the cell's own read, the one-parser
// ride over the REAL sword due lines (the raw mass the lane prints;
// the sword docket's own lane the .162 word's own cell never rides -
// the toolupgrade.mjs's own sword step the craft's own emitter; the
// spare pick due's own mass the .168 word's own cell never rides; the
// spare pick colon's own lines the .166 word's own cell never ride;
// the camp furnace's own mass the .165 word's own cell never rides;
// the bank's own raw colon mass the .164 word's own cell never
// rides; the iron commune's own raw colon mass the .163 word's own
// cell never rides; the fuel anchor delivery's own mass the .167
// word's own cell never rides; the fuel anchor scan's own mass the
// .161 word's own cell never rides; the food commons' raw docket
// mass the .160 word's own cell never rides; the fuel commons' own
// raw docket mass the .159 word's own cell never rides; the tunnel
// verdicts the .158 word's own cell never ride; the food trip
// dockets the .157 word's own cell never ride; the climb-refused
// class the .147 word's own cell never rides; the climb out skins
// the climb-out book's own cells never ride; the walk-lane census
// cells the walk book's own axes never ride; the no-colon junk never
// rides).
import { swordDues, swordDueTrendConsistent, swordDueTrendRow } from '../../src/lib/swordduetrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, this word prices the sword due's own mass across the faces - the sword due's own seat, co-existence by seat never by duplication)"

const HEAD = "the sword due's own trend (v0.976.169)"
const SWING = HEAD + ": the sword due's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the sword due's rise ran two steps deep - "
const SWELL_TAIL = " - the sword due's own swell " + TAIL
const FADE = HEAD + ": the sword due's fall ran two steps deep - "
const FADE_TAIL = " - the sword due's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the sword due
// regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 761u the faces' own total, THE FIELD'S OWN TOP THE COUNT 26
// the face 359's own top rode once (the top's own arrival the
// swell's own back rode), the +9 the max rise rode TWICE two legs
// (the 23 the faces 378/379's own count the same), the -6 the max
// fall rode ONCE (the face 379's own window's second leg), THE
// FIELD'S OWN FLOOR THE COUNT 14 rode THREE faces (348/350/377) -
// ZERO FACES NONE - THE SKIN NEVER DRIED - THIRTY-THREE of
// THIRTY-SEVEN windows speaking (TWENTY-SIX swings, SIX swells, THE
// LONE FADE, the FOUR honest silences).
const P = {}
P[348] = 14
P[349] = 19
P[350] = 14
P[351] = 21
P[352] = 16
P[353] = 21
P[354] = 20
P[355] = 22
P[356] = 18
P[357] = 22
P[358] = 23
P[359] = 26
P[360] = 21
P[361] = 17
P[362] = 18
P[363] = 20
P[364] = 15
P[365] = 22
P[366] = 22
P[367] = 20
P[368] = 20
P[369] = 21
P[370] = 19
P[371] = 20
P[372] = 17
P[373] = 20
P[374] = 17
P[375] = 18
P[376] = 19
P[377] = 14
P[378] = 23
P[379] = 17
P[380] = 20
P[381] = 21
P[382] = 23
P[383] = 20
P[384] = 22
P[385] = 17
P[386] = 22
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 761, 'the cell 761u the witness holds')
const w = (f) => swordDueTrendRow({ back: { swordDues: P[f - 2] }, prev: { swordDues: P[f - 1] }, cur: { swordDues: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (TWENTY-SIX swings, SIX swells, THE LONE FADE, the
// FOUR honest silences)
const SWINGS = {
  350: '14 -> 19 (+5) -> 14 (-5)',
  351: '19 -> 14 (-5) -> 21 (+7)',
  352: '14 -> 21 (+7) -> 16 (-5)',
  353: '21 -> 16 (-5) -> 21 (+5)',
  354: '16 -> 21 (+5) -> 20 (-1)',
  355: '21 -> 20 (-1) -> 22 (+2)',
  356: '20 -> 22 (+2) -> 18 (-4)',
  357: '22 -> 18 (-4) -> 22 (+4)',
  360: '23 -> 26 (+3) -> 21 (-5)',
  362: '21 -> 17 (-4) -> 18 (+1)',
  364: '18 -> 20 (+2) -> 15 (-5)',
  365: '20 -> 15 (-5) -> 22 (+7)',
  370: '20 -> 21 (+1) -> 19 (-2)',
  371: '21 -> 19 (-2) -> 20 (+1)',
  372: '19 -> 20 (+1) -> 17 (-3)',
  373: '20 -> 17 (-3) -> 20 (+3)',
  374: '17 -> 20 (+3) -> 17 (-3)',
  375: '20 -> 17 (-3) -> 18 (+1)',
  377: '18 -> 19 (+1) -> 14 (-5)',
  378: '19 -> 14 (-5) -> 23 (+9)',
  379: '14 -> 23 (+9) -> 17 (-6)',
  380: '23 -> 17 (-6) -> 20 (+3)',
  383: '21 -> 23 (+2) -> 20 (-3)',
  384: '23 -> 20 (-3) -> 22 (+2)',
  385: '20 -> 22 (+2) -> 17 (-5)',
  386: '22 -> 17 (-5) -> 22 (+5)'
}
const SWELLS = {
  358: '18 -> 22 (+4) -> 23 (+1)',
  359: '22 -> 23 (+1) -> 26 (+3)',
  363: '17 -> 18 (+1) -> 20 (+2)',
  376: '17 -> 18 (+1) -> 19 (+1)',
  381: '17 -> 20 (+3) -> 21 (+1)',
  382: '20 -> 21 (+1) -> 23 (+2)'
}
const FADES = {
  361: '26 -> 21 (-5) -> 17 (-4)'
}
const SILENCES = [366, 367, 368, 369]

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
assert.deepEqual(tally, { swing: 26, swell: 6, fade: 1, silence: 4 })

// THE LONE FADE - THE ONE-FADE BOOK THE FAMILY'S FIRST (the face
// 361's own window the top's own drain two steps deep - the -5 rode
// TWICE two legs the 21 the faces 360/361's own count the same)
{
  const first = P[360] - P[359], second = P[361] - P[360]
  assert.ok(first < 0 && second < 0, 'F361 the lone fade')
}
assert.equal(P[360], 21, 'the 21 the 360/361 pair shares')

// THE ONE-WINDOW ROUND TRIPS SIX - the book trades one window deep
// SIX times (the faces 350/353/357/373/374/386's own windows - THE
// MOST ROUND-TRIP BOOK THE FAMILY HOLDS the .166's own three the
// record beside)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f]) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [350, 353, 357, 373, 374, 386], 'the six round trips the book rides')
// THE ADJACENT PAIR the faces 373/374's own windows - the mirrored
// trade the whole field between
assert.equal(P[373], 20, 'the pair the 20 returns to')
assert.equal(P[374], 17, 'the pair the 17 trades to')

// THE FOUR-SILENCE RUN - the .168's own run mirrored
// window-for-window (THE SECOND FOUR-WINDOW SILENT RUN THE FAMILY
// HOLDS - the count 22 the 366/367 pair's own held leg, the count 20
// the 368/369 pair's own held leg the run keeps)
for (const f of [366, 367, 368, 369]) {
  const first = P[f - 1] - P[f - 2], second = P[f] - P[f - 1]
  assert.ok(first === 0 || second === 0, "F" + f + " the run's own silence")
}
assert.equal(P[366], 22, 'the 22 the 366/367 pair shares')
assert.equal(P[367], 20, 'the 20 the 367 drops to')
assert.equal(P[368], 20, 'the 20 the 368/369 pair shares')

// THE MAX RISE AND THE MAX FALL THE BACK-TO-BACK STEP (the +9 rode
// TWICE two legs the 23 the faces 378/379's own count the same, the
// -6 the face 379's own window's second leg)
assert.equal(P[378], 23, 'the 23 the shared count')
assert.equal(P[379], 17, 'the -6 the face 379 lands at')

// landmark chains byte-exact full literals
// THE FIELD'S OWN OPENER the face 350's own round-trip swing the
// field's own first word rode (the faces 348/349 no window the
// carrier's own law)
assert.equal(w(350), SWING + '14 -> 19 (+5) -> 14 (-5)' + SWING_TAIL)
// THE TOP'S OWN ARRIVAL the swell's own back rode (the 26 the face
// 359's own top)
assert.equal(w(359), SWELL + '22 -> 23 (+1) -> 26 (+3)' + SWELL_TAIL)
// THE LONE FADE the top's own drain (the face 361's own window)
assert.equal(w(361), FADE + '26 -> 21 (-5) -> 17 (-4)' + FADE_TAIL)
// THE MAX RISE'S OWN BOUND the window's second leg rode (the +9 the
// face 378's own window)
assert.equal(w(378), SWING + '19 -> 14 (-5) -> 23 (+9)' + SWING_TAIL)
// THE MAX FALL'S OWN BOUND the window's second leg rode (the -6 the
// face 379's own window - the +9 the two windows share the first leg
// rode)
assert.equal(w(379), SWING + '14 -> 23 (+9) -> 17 (-6)' + SWING_TAIL)
// THE FLOOR'S OWN ARRIVAL (the 14 the face 377's own floor - the max
// rise's own launch the crater's own rim)
assert.equal(w(377), SWING + '18 -> 19 (+1) -> 14 (-5)' + SWING_TAIL)
// THE ADJACENT ROUND TRIP PAIR (the faces 373/374's own windows the
// mirrored trade)
assert.equal(w(373), SWING + '20 -> 17 (-3) -> 20 (+3)' + SWING_TAIL)
assert.equal(w(374), SWING + '17 -> 20 (+3) -> 17 (-3)' + SWING_TAIL)
// THE BACK-TO-BACK SWELL PAIRS (the faces 358/359 and the faces
// 381/382's own windows)
assert.equal(w(358), SWELL + '18 -> 22 (+4) -> 23 (+1)' + SWELL_TAIL)
assert.equal(w(382), SWELL + '20 -> 21 (+1) -> 23 (+2)' + SWELL_TAIL)
// THE HONEST SILENCES FOUR (the held steps priced no direction)
for (const f of SILENCES) assert.equal(w(f), null, 'F' + f + ' held -> null')
// THE LAST WORD (the face 386's own round-trip swing the book's own
// last)
assert.equal(w(386), SWING + '22 -> 17 (-5) -> 22 (+5)' + SWING_TAIL)

// the whole book byte-exact - every window the field's own chain
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// THE BYTE-PIN BATTERY - the family's own banned words the row never
// speaks (byte-pin no return no repeat no stay no run no owns no
// dynasty no turn)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  for (const [f, arc] of Object.entries(SWINGS)) assert.doesNotMatch(SWING + arc + SWING_TAIL, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  for (const [f, arc] of Object.entries(SWELLS)) assert.doesNotMatch(SWELL + arc + SWELL_TAIL, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  for (const [f, arc] of Object.entries(FADES)) assert.doesNotMatch(FADE + arc + FADE_TAIL, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
}

// THE FENCE BATTERY - the fold must prove itself or price nothing
assert.equal(swordDueTrendConsistent(null), false)
assert.equal(swordDueTrendConsistent(undefined), false)
assert.equal(swordDueTrendConsistent('cell'), false)
assert.equal(swordDueTrendConsistent([]), false)
assert.equal(swordDueTrendConsistent({ back: { swordDues: 0 }, prev: { swordDues: 0 } }), false)
assert.equal(swordDueTrendConsistent({ back: { swordDues: 0 }, prev: { swordDues: 0 }, cur: { swordDues: 0 } }), true)
assert.equal(swordDueTrendConsistent({ back: { swordDues: -1 }, prev: { swordDues: 0 }, cur: { swordDues: 0 } }), false)
assert.equal(swordDueTrendConsistent({ back: { swordDues: 1.5 }, prev: { swordDues: 0 }, cur: { swordDues: 0 } }), false)
assert.equal(swordDueTrendConsistent({ back: { swordDues: '3' }, prev: { swordDues: 0 }, cur: { swordDues: 0 } }), false)
assert.equal(swordDueTrendConsistent({ back: null, prev: { swordDues: 0 }, cur: { swordDues: 0 } }), false)
// the fence never rejects extra keys
assert.equal(swordDueTrendConsistent({ back: { swordDues: 0, busy: 1 }, prev: { swordDues: 2, busy: 1 }, cur: { swordDues: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(swordDueTrendRow(null), null)
assert.equal(swordDueTrendRow('x'), null)
assert.equal(swordDueTrendRow({ back: { swordDues: 1 }, prev: { swordDues: 1 }, cur: { swordDues: 1 } }), null)
assert.equal(swordDueTrendRow({ back: { swordDues: 1 }, prev: { swordDues: 0 }, cur: { swordDues: 0 } }), null)

// THE CELL'S OWN READ - swordDues rides the REAL sword due lines (the
// planks-available verdicts and the cobble-available verdicts the
// field rode - every line the lane prints rides, no exclusion the
// lane needs)
assert.equal(swordDues([
  'F5 sword due: planks available',
  'F9 sword due: cobble available'
]), 2)
// THE SWORD DOCKET'S OWN LANE the .162 word's own cell never rides -
// the toolupgrade.mjs's own sword step the craft's own emitter
assert.equal(swordDues(['F5 sword: OK (wooden_sword, holds 1)']), 0)
// THE SPARE PICK DUE'S OWN LANE the .168 word's own cell never rides
assert.equal(swordDues(['F5 spare pick due: spare (planks available)']), 0)
// THE SPARE PICK COLON'S OWN LANE the .166 word's own cell never rides
assert.equal(swordDues(['F5 spare pick: OK (wooden_pickaxe, holds 2)']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(swordDues(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(swordDues(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(swordDues(['F5 food commons: chest holds no food']), 0)
assert.equal(swordDues(['F6 fuel commons: budget spent (0/2 units)']), 0)
assert.equal(swordDues(['F4 bank trip: planned budget 300s']), 0)
assert.equal(swordDues(['F7 wood trip: 0 (climb refused)']), 0)
assert.equal(swordDues(['F8 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here']), 0)
assert.equal(swordDues(['F1 fuel anchor scan: the palette read empty x1 - the singular probe rescued the scan (chest at [-120,81,392])']), 0)
assert.equal(swordDues(['F3 fuel anchor: delivered 2 fuel overage (ok)']), 0)
assert.equal(swordDues(['F7 bank: yard walk arrived in 0s (1 attempt)']), 0)
assert.equal(swordDues(['F2 camp furnace: no build (machine near)']), 0)
// the walk-lane census cells never ride
assert.equal(swordDues(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
// the climb out skins never ride - the climb-out never schedules (the
// climb-out book's own cells)
assert.equal(swordDues(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(swordDues(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(swordDues(['F6 sword due planks available']), 0)
assert.equal(swordDues(['F6 sword due']), 0)
assert.equal(swordDues(['sword due: planks available']), 0)
assert.equal(swordDues(['F8 sword due-extra: 1 units']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 sword due: planks available',
  'F13 sword due: cobble available',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(swordDues(lines), 2)
const fold = { back: { swordDues: swordDues(lines) }, prev: { swordDues: 22 }, cur: { swordDues: 26 } }
assert.equal(swordDueTrendRow(fold), SWELL + '2 -> 22 (+20) -> 26 (+4)' + SWELL_TAIL)

console.log('swordduetrend.test: all pins green')
