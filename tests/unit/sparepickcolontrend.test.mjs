// tests/unit/sparepickcolontrend.test.mjs - THE SPARE PICK'S OWN
// COLON TREND's own pin battery (v0.976.166): the field's own chains
// byte-exact (THE SPARE PICK BOOK'S OWN COLON SEAT beside the raw
// docket words - the craft verdicts and the skip verdicts and the
// no-table lines the lane prints, THE CELL'S OWN WEIGHT 959u the
// faces' own total - THE WHOLE MASS 1747u the colon seat 959u the
// due sibling 788u the beside-seat the next carrier prices, THE
// FIELD'S OWN TOP THE COUNT 35 the face 359's own top rode once -
// the +14 the max rise step's own single bound the same step rode,
// the -12 the max fall step's own single bound rode ONCE, THE
// FIELD'S OWN FLOOR THE COUNT 17 the face 364's own floor rode once
// - the four-fade run's own last leg, ZERO FACES NONE - THE SKIN
// NEVER DRIED), THIRTY-FIVE of THIRTY-SEVEN windows speaking
// (TWENTY-TWO swings, FIVE swells, EIGHT fades, the TWO honest
// silences - the back-to-back pair the faces 356/357's own windows
// hold), THE FOUR-FADE RUN the faces 361/362/363/364's own windows
// hold (the top's own mass the five-step drain rode), THE ONE-WINDOW
// ROUND TRIPS THREE (the faces 351/367/378's own windows), the
// byte-pin battery, the fence battery, the cell's own read, the
// one-parser ride over the REAL spare pick lines (the raw mass the
// lane prints; the spare pick due's own lane the beside-seat never
// rides - the refill scheduler's own lines the lane's own name the
// space the shape demands; the sword's raw docket mass the .162
// word's own cell never rides; the sword due's own lane never rides;
// the camp furnace's own mass the .165 word's own cell never rides;
// the bank's own raw colon mass the .164 word's own cell never
// rides; the iron commune's own raw colon mass the .163 word's own
// cell never rides; the fuel anchor scan's own mass the .161 word's
// own cell never rides; the food commons' raw docket mass the .160
// word's own cell never rides; the fuel commons' own raw docket mass
// the .159 word's own cell never rides; the tunnel verdicts the .158
// word's own cell never ride; the food trip dockets the .157 word's
// own cell never ride; the climb-refused class the .147 word's own
// cell never rides; the climb out skins the climb-out book's own
// cells never ride; the walk-lane census cells the walk book's own
// axes never ride; the no-colon junk never rides).
import { sparePickColons, sparePickColonTrendConsistent, sparePickColonTrendRow } from '../../src/lib/sparepickcolontrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, this word prices the spare pick's own colon mass across the faces - the spare pick's own colon seat, co-existence by seat never by duplication)"

const HEAD = "the spare pick's own trend (v0.976.166)"
const SWING = HEAD + ": the spare pick's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the spare pick's rise ran two steps deep - "
const SWELL_TAIL = " - the spare pick's own swell " + TAIL
const FADE = HEAD + ": the spare pick's fall ran two steps deep - "
const FADE_TAIL = " - the spare pick's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the spare pick
// regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 959u the faces' own total, THE FIELD'S OWN TOP THE COUNT 35
// the face 359's own top rode once (the top's own arrival the
// swell's own back rode - the +14 the max rise the same step rode),
// the -12 the max fall rode ONCE (the face 383's own window's second
// leg), THE FIELD'S OWN FLOOR THE COUNT 17 the face 364's own floor
// rode once - ZERO FACES NONE - THE SKIN NEVER DRIED - THIRTY-FIVE
// of THIRTY-SEVEN windows speaking (TWENTY-TWO swings, FIVE swells,
// EIGHT fades, the TWO honest silences the back-to-back pair).
const P = {}
P[348] = 24
P[349] = 25
P[350] = 23
P[351] = 25
P[352] = 24
P[353] = 23
P[354] = 21
P[355] = 26
P[356] = 26
P[357] = 19
P[358] = 21
P[359] = 35
P[360] = 28
P[361] = 24
P[362] = 23
P[363] = 22
P[364] = 17
P[365] = 24
P[366] = 29
P[367] = 24
P[368] = 27
P[369] = 18
P[370] = 25
P[371] = 22
P[372] = 28
P[373] = 25
P[374] = 20
P[375] = 22
P[376] = 26
P[377] = 32
P[378] = 26
P[379] = 20
P[380] = 32
P[381] = 27
P[382] = 31
P[383] = 19
P[384] = 26
P[385] = 27
P[386] = 23
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 959, 'the cell 959u the witness holds')
const w = (f) => sparePickColonTrendRow({ back: { sparePickColons: P[f - 2] }, prev: { sparePickColons: P[f - 1] }, cur: { sparePickColons: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (twenty-two swings, FIVE swells, EIGHT fades, the
// TWO honest silences - the back-to-back pair the faces 356/357's
// own windows hold)
const SWINGS = {
  350: '24 -> 25 (+1) -> 23 (-2)',
  351: '25 -> 23 (-2) -> 25 (+2)',
  352: '23 -> 25 (+2) -> 24 (-1)',
  355: '23 -> 21 (-2) -> 26 (+5)',
  358: '26 -> 19 (-7) -> 21 (+2)',
  360: '21 -> 35 (+14) -> 28 (-7)',
  365: '22 -> 17 (-5) -> 24 (+7)',
  367: '24 -> 29 (+5) -> 24 (-5)',
  368: '29 -> 24 (-5) -> 27 (+3)',
  369: '24 -> 27 (+3) -> 18 (-9)',
  370: '27 -> 18 (-9) -> 25 (+7)',
  371: '18 -> 25 (+7) -> 22 (-3)',
  372: '25 -> 22 (-3) -> 28 (+6)',
  373: '22 -> 28 (+6) -> 25 (-3)',
  375: '25 -> 20 (-5) -> 22 (+2)',
  378: '26 -> 32 (+6) -> 26 (-6)',
  380: '26 -> 20 (-6) -> 32 (+12)',
  381: '20 -> 32 (+12) -> 27 (-5)',
  382: '32 -> 27 (-5) -> 31 (+4)',
  383: '27 -> 31 (+4) -> 19 (-12)',
  384: '31 -> 19 (-12) -> 26 (+7)',
  386: '26 -> 27 (+1) -> 23 (-4)'
}
const SWELLS = {
  359: '19 -> 21 (+2) -> 35 (+14)',
  366: '17 -> 24 (+7) -> 29 (+5)',
  376: '20 -> 22 (+2) -> 26 (+4)',
  377: '22 -> 26 (+4) -> 32 (+6)',
  385: '19 -> 26 (+7) -> 27 (+1)'
}
const FADES = {
  353: '25 -> 24 (-1) -> 23 (-1)',
  354: '24 -> 23 (-1) -> 21 (-2)',
  361: '35 -> 28 (-7) -> 24 (-4)',
  362: '28 -> 24 (-4) -> 23 (-1)',
  363: '24 -> 23 (-1) -> 22 (-1)',
  364: '23 -> 22 (-1) -> 17 (-5)',
  374: '28 -> 25 (-3) -> 20 (-5)',
  379: '32 -> 26 (-6) -> 20 (-6)'
}
const SILENCES = [356, 357]

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
assert.deepEqual(tally, { swing: 22, swell: 5, fade: 8, silence: 2 })

// THE ONE-WINDOW ROUND TRIPS THREE - the book trades one window deep
// three times (the faces 351/367/378's own windows - the family's
// own round-trip books the climb-out food trip's own three and the
// food trip docket's own three the mirror beside)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f]) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [351, 367, 378], 'the three round trips the book rides')

// THE FOUR-FADE RUN - the top's own mass the five-step drain rode
// (35 -> 28 -> 24 -> 23 -> 22 -> 17 the faces 361/362/363/364's own
// windows hold - the field's own longest drain the book's own shape)
const fadeRun = [361, 362, 363, 364]
for (const f of fadeRun) {
  const first = P[f - 1] - P[f - 2], second = P[f] - P[f - 1]
  assert.ok(first < 0 && second < 0, "F" + f + " the run's own fade")
}

// landmark chains byte-exact full literals
// THE FIELD'S OWN OPENER - the face 350's own swing the field's own
// first word rode (the faces 348/349 no window the carrier's own
// law)
assert.equal(w(350), SWING + '24 -> 25 (+1) -> 23 (-2)' + SWING_TAIL)
// THE TOP'S OWN ARRIVAL the swell's own back rode (the 35 the face
// 359's own top - the +14 the max rise step's own single bound the
// same step rode)
assert.equal(w(359), SWELL + '19 -> 21 (+2) -> 35 (+14)' + SWELL_TAIL)
// THE FLOOR'S OWN ARRIVAL the four-fade run's own last leg rode
// (the 17 the face 364's own floor)
assert.equal(w(364), FADE + '23 -> 22 (-1) -> 17 (-5)' + FADE_TAIL)
// THE FLOOR'S OWN TRADE the rebuild the face 365's own window rode
assert.equal(w(365), SWING + '22 -> 17 (-5) -> 24 (+7)' + SWING_TAIL)
// THE FIRST ROUND TRIP (the face 351's own window)
assert.equal(w(351), SWING + '25 -> 23 (-2) -> 25 (+2)' + SWING_TAIL)
// THE SECOND ROUND TRIP (the face 367's own window)
assert.equal(w(367), SWING + '24 -> 29 (+5) -> 24 (-5)' + SWING_TAIL)
// THE THIRD ROUND TRIP (the face 378's own window)
assert.equal(w(378), SWING + '26 -> 32 (+6) -> 26 (-6)' + SWING_TAIL)
// THE MAX FALL'S OWN BOUND the window's second leg rode (the -12
// the face 383's own window)
assert.equal(w(383), SWING + '27 -> 31 (+4) -> 19 (-12)' + SWING_TAIL)
// THE HONEST SILENCES THE BACK-TO-BACK PAIR (the faces 356/357's
// own windows the held steps priced no direction)
assert.equal(w(356), null, 'F356 held (+0) -> null')
assert.equal(w(357), null, 'F357 held (+0) -> null')
// THE LAST SWELL (the face 385's own window the book's own last
// build)
assert.equal(w(385), SWELL + '19 -> 26 (+7) -> 27 (+1)' + SWELL_TAIL)
// THE LAST WORD (the face 386's own swing the book's own last)
assert.equal(w(386), SWING + '26 -> 27 (+1) -> 23 (-4)' + SWING_TAIL)

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
assert.equal(sparePickColonTrendConsistent(null), false)
assert.equal(sparePickColonTrendConsistent(undefined), false)
assert.equal(sparePickColonTrendConsistent('cell'), false)
assert.equal(sparePickColonTrendConsistent([]), false)
assert.equal(sparePickColonTrendConsistent({ back: { sparePickColons: 0 }, prev: { sparePickColons: 0 } }), false)
assert.equal(sparePickColonTrendConsistent({ back: { sparePickColons: 0 }, prev: { sparePickColons: 0 }, cur: { sparePickColons: 0 } }), true)
assert.equal(sparePickColonTrendConsistent({ back: { sparePickColons: -1 }, prev: { sparePickColons: 0 }, cur: { sparePickColons: 0 } }), false)
assert.equal(sparePickColonTrendConsistent({ back: { sparePickColons: 1.5 }, prev: { sparePickColons: 0 }, cur: { sparePickColons: 0 } }), false)
assert.equal(sparePickColonTrendConsistent({ back: { sparePickColons: '3' }, prev: { sparePickColons: 0 }, cur: { sparePickColons: 0 } }), false)
assert.equal(sparePickColonTrendConsistent({ back: null, prev: { sparePickColons: 0 }, cur: { sparePickColons: 0 } }), false)
// the fence never rejects extra keys
assert.equal(sparePickColonTrendConsistent({ back: { sparePickColons: 0, busy: 1 }, prev: { sparePickColons: 2, busy: 1 }, cur: { sparePickColons: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(sparePickColonTrendRow(null), null)
assert.equal(sparePickColonTrendRow('x'), null)
assert.equal(sparePickColonTrendRow({ back: { sparePickColons: 1 }, prev: { sparePickColons: 1 }, cur: { sparePickColons: 1 } }), null)
assert.equal(sparePickColonTrendRow({ back: { sparePickColons: 1 }, prev: { sparePickColons: 0 }, cur: { sparePickColons: 0 } }), null)

// THE CELL'S OWN READ - sparePickColons rides the REAL spare pick
// lines (the craft verdicts and the skip verdicts and the no-table
// lines the field rode - every line the lane prints rides, no
// exclusion the lane needs)
assert.equal(sparePickColons([
  'F5 spare pick: OK (wooden_pickaxe, holds 2)',
  'F13 spare pick: skip (no sticks and no planks for sticks)',
  'F10 spare pick: no table reachable or placeable'
]), 3)
// THE SPARE PICK DUE'S OWN LANE the beside-seat never rides - the
// refill scheduler's own lines the lane's own name the space the
// shape demands (the whole mass 1747u the due sibling 788u the next
// carrier prices)
assert.equal(sparePickColons(['F5 spare pick due: spare (planks available)']), 0)
assert.equal(sparePickColons(['F9 spare pick due: refill paused (the pocket holds the pick)']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(sparePickColons(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(sparePickColons(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(sparePickColons(['F5 food commons: chest holds no food']), 0)
assert.equal(sparePickColons(['F6 fuel commons: budget spent (0/2 units)']), 0)
assert.equal(sparePickColons(['F4 bank trip: planned budget 300s']), 0)
assert.equal(sparePickColons(['F7 wood trip: 0 (climb refused)']), 0)
assert.equal(sparePickColons(['F5 sword: OK (wooden_sword, holds 1)']), 0)
assert.equal(sparePickColons(['F7 sword due: planks available']), 0)
assert.equal(sparePickColons(['F8 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here']), 0)
assert.equal(sparePickColons(['F1 fuel anchor scan: the palette read empty x1 - the singular probe rescued the scan (chest at [-120,81,392])']), 0)
assert.equal(sparePickColons(['F7 bank: yard walk arrived in 0s (1 attempt)']), 0)
assert.equal(sparePickColons(['F2 camp furnace: no build (machine near)']), 0)
// the walk-lane census cells never ride
assert.equal(sparePickColons(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
// the climb out skins never ride - the climb-out never picks (the
// climb-out book's own cells)
assert.equal(sparePickColons(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(sparePickColons(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(sparePickColons(['F6 spare pick OK (wooden_pickaxe)']), 0)
assert.equal(sparePickColons(['F6 spare pick']), 0)
assert.equal(sparePickColons(['spare pick: OK (wooden_pickaxe)']), 0)
assert.equal(sparePickColons(['F8 spare pick-extra: 1 units']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 spare pick: OK (wooden_pickaxe, holds 2)',
  'F13 spare pick: skip (no sticks and no planks for sticks)',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(sparePickColons(lines), 2)
const fold = { back: { sparePickColons: sparePickColons(lines) }, prev: { sparePickColons: 21 }, cur: { sparePickColons: 35 } }
assert.equal(sparePickColonTrendRow(fold), SWELL + '2 -> 21 (+19) -> 35 (+14)' + SWELL_TAIL)

console.log('sparepickcolontrend.test: all pins green')
