// tests/unit/sweepdefertrend.test.mjs - THE SWEEP LANE'S OWN DEFER
// TREND's own pin battery (v0.976.190): the sweep lane's own defer
// mass across the faces the F429's own census named first (the smelt
// refusal census: cannot open 3, machine unreachable 2 of 5 - the
// smelt chain names its tax; the F427's own machine unreachable 18
// no fuel 5 of 23 the heavier mirror behind) - the field's own
// chains byte-exact (THE CELL'S OWN WEIGHT 46u the thirty-nine
// faces' own total, THE FIELD'S OWN TOP THE COUNT 6 rode TWICE the
// faces 372/380's own crests - THE DOUBLE STORM, THE FIELD'S OWN
// FLOOR THE COUNT ZERO rode FIFTEEN times - THE FIFTEEN DROUGHTS),
// TWENTY-ONE of THIRTY-SEVEN windows speaking (EIGHTEEN swings, the
// ONE swell, the TWO fades - THE MIRRORED FADE PAIR the faces
// 374/382 hold every one identical, the SIXTEEN honest silences -
// THE SEVEN-SILENCE RUN the faces 362..368 hold the longest drought
// this book rides), THE EIGHT ROUND TRIPS the faces
// 351/352/353/355/369/373/383/384 hold - THE ROUND-TRIP RECORD THE
// FAMILY HOLDS (the .188's own four the mirror beside - the TRIPLE
// back-to-back run the faces 351/352/353 hold every one mirrored,
// the PAIR 383/384, the three solo seats), the bounds' own legs pins (the +6 rode TWO legs ONE
// boundary the boundary 379/380 - THE STORM'S OWN CLIMB, the -5 rode
// FOUR legs TWO boundaries the boundaries 372/373 and 380/381 - THE
// STORMS' OWN DRAINS the crest 6 the floor 1), the last word the
// face 386's own window the honest silence (0 -> 2 (+2) -> 2 (0)),
// the whole-cache pins (the 60u, the face 429's own 0u the newest
// add, the W429 window the round trip 0 -> 3 (+3) -> 0 (-3) MY
// WORD'S OWN FIRST LIVE READ the nearest-completed law holds - the
// absent 428 the honest gap rides, the W427 window the swing 3 -> 0
// (-3) -> 3 (+3), the W388/W389 windows the swings) + the byte-pin
// battery, the fence battery, the cell's own read, the one-parser
// ride over the REAL defer lines (the sweep verdicts the walkfail's
// own book prices never ride, the walk-fail bucket prose never
// rides, the bare skin never rides - no such emitter voice, the
// no-colon junk never rides - the lanes never merge)
import assert from 'node:assert'
import { sweepDefers, sweepDeferTrendConsistent, sweepDeferTrendRow } from '../../src/lib/sweepdefertrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, this word prices the sweep defer mass across the faces - the sweep lane's own defer seat, co-existence by seat never by duplication)"

const HEAD = 'the sweep defer trend (v0.976.190)'
const SWING = HEAD + ": the defer's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the defer's rise ran two steps deep - "
const SWELL_TAIL = " - the defer's own swell " + TAIL
const FADE = HEAD + ": the defer's fall ran two steps deep - "
const FADE_TAIL = " - the defer's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the defer RE's
// own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN WEIGHT
// 46u the faces' own total, THE FIELD'S OWN TOP THE COUNT 6 rode
// TWICE (the faces 372/380's own crests - THE DOUBLE STORM), THE
// FIELD'S OWN FLOOR THE COUNT ZERO rode FIFTEEN times (THE FIFTEEN
// DROUGHTS)
const P = {}
P[348] = 1
P[349] = 0
P[350] = 2
P[351] = 0
P[352] = 2
P[353] = 0
P[354] = 1
P[355] = 0
P[356] = 2
P[357] = 1
P[358] = 1
P[359] = 0
P[360] = 3
P[361] = 2
P[362] = 2
P[363] = 1
P[364] = 1
P[365] = 0
P[366] = 0
P[367] = 0
P[368] = 3
P[369] = 0
P[370] = 0
P[371] = 1
P[372] = 6
P[373] = 1
P[374] = 0
P[375] = 0
P[376] = 2
P[377] = 1
P[378] = 1
P[379] = 0
P[380] = 6
P[381] = 1
P[382] = 0
P[383] = 1
P[384] = 0
P[385] = 2
P[386] = 2
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 46, "the cell 46u the hand-off holds - THE SWEEP LANE'S OWN DEFER SEAT rides")
const w = (f) => sweepDeferTrendRow({ back: { sweepDefers: P[f - 2] }, prev: { sweepDefers: P[f - 1] }, cur: { sweepDefers: P[f] } })

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
// classification (EIGHTEEN swings, the ONE swell, the TWO fades, the
// SIXTEEN honest silences - TWENTY-ONE of THIRTY-SEVEN speaking)
const SWELLS = {
  372: '0 -> 1 (+1) -> 6 (+5)'
}
const FADES = {
  374: '6 -> 1 (-5) -> 0 (-1)',
  382: '6 -> 1 (-5) -> 0 (-1)'
}
const SWINGS = {
  350: '1 -> 0 (-1) -> 2 (+2)',
  351: '0 -> 2 (+2) -> 0 (-2)',
  352: '2 -> 0 (-2) -> 2 (+2)',
  353: '0 -> 2 (+2) -> 0 (-2)',
  354: '2 -> 0 (-2) -> 1 (+1)',
  355: '0 -> 1 (+1) -> 0 (-1)',
  356: '1 -> 0 (-1) -> 2 (+2)',
  357: '0 -> 2 (+2) -> 1 (-1)',
  360: '1 -> 0 (-1) -> 3 (+3)',
  361: '0 -> 3 (+3) -> 2 (-1)',
  369: '0 -> 3 (+3) -> 0 (-3)',
  373: '1 -> 6 (+5) -> 1 (-5)',
  377: '0 -> 2 (+2) -> 1 (-1)',
  380: '1 -> 0 (-1) -> 6 (+6)',
  381: '0 -> 6 (+6) -> 1 (-5)',
  383: '1 -> 0 (-1) -> 1 (+1)',
  384: '0 -> 1 (+1) -> 0 (-1)',
  385: '1 -> 0 (-1) -> 2 (+2)'
}
const tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) tally[tallyWindow(f, P)]++
assert.deepEqual(tally, { swing: 18, swell: 1, fade: 2, silence: 16 }, "the birth field's own breath the THIRTY-SEVEN windows hold - TWENTY-ONE speaking")
assert.equal(tally.swing, 18, 'EIGHTEEN swings the defer\u2019s own churn rides')
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, `the swell F${f} the arc rides`)
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, `the fade F${f} the arc rides`)
}
for (const [f, arc] of Object.entries(SWINGS)) {
  assert.equal(w(Number(f)), SWING + arc + SWING_TAIL, `the swing F${f} the arc rides`)
}
for (const f of [358, 359, 362, 363, 364, 365, 366, 367, 368, 370, 371, 375, 376, 378, 379, 386]) {
  assert.equal(w(f), null, `the silence F${f} the held law keeps - the row never invents`)
}

// THE MIRRORED FADE PAIR - the faces 374/382's own windows every one
// identical (6 -> 1 (-5) -> 0 (-1) twice - the storms' own drain the
// mirror rides)
assert.equal(FADES[374], FADES[382], 'the TWO fades every one identical the mirrored pair rides')

// THE SEVEN-SILENCE RUN - the faces 362..368's own windows the
// longest drought this book holds (the drought's own spine rides)
const silenceRun = []
let run = []
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f, P) === 'silence') run.push(f)
  else { if (run.length > silenceRun.length) silenceRun.splice(0, silenceRun.length, ...run); run = [] }
}
if (run.length > silenceRun.length) silenceRun.splice(0, silenceRun.length, ...run)
assert.deepEqual(silenceRun, [362, 363, 364, 365, 366, 367, 368], 'the SEVEN-SILENCE run the faces 362..368 hold - the longest drought the book rides')

// THE EIGHT ROUND TRIPS - the faces 351/352/353/355/369/373/383/384's
// own windows the mirrored legs ride - THE ROUND-TRIP RECORD THE
// FAMILY HOLDS (the .188's own four the mirror beside - the TRIPLE
// back-to-back run the faces 351/352/353 hold every one mirrored,
// the PAIR 383/384, the three solo seats)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [351, 352, 353, 355, 369, 373, 383, 384], 'the birth field holds the EIGHT round trips - THE ROUND-TRIP RECORD THE FAMILY HOLDS')
// THE TRIPLE BACK-TO-BACK ROUND-TRIP RUN the faces 351/352/353's own
// windows every one mirrored (the alternation's own chain 0-2-0 /
// 2-0-2 / 0-2-0 the rr's own triple the mirror beside) - the PAIR
// the faces 383/384 hold - the three solo seats 355/369/373 beside
assert.deepEqual(roundTrips.slice(0, 3), [351, 352, 353], 'the TRIPLE back-to-back round-trip run the faces 351/352/353 hold every one mirrored')
assert.equal(roundTrips[7] - roundTrips[6], 1, 'the PAIR 383/384 back-to-back the mirrored pair rides')
assert.deepEqual(roundTrips.slice(3, 6), [355, 369, 373], 'the three solo seats the spread holds')
for (const f of roundTrips) {
  assert.equal(Math.abs(P[f - 1] - P[f - 2]), Math.abs(P[f] - P[f - 1]), `the round trip F${f} the same size both legs the mirror rides`)
}

// THE TOP THE COUNT 6 - rode TWICE the faces 372/380's own crests
// hold (THE DOUBLE STORM the book holds)
assert.equal(Math.max(...Object.values(P)), 6, 'the birth top the count 6 the double storm rides')
let topRode = 0
const topFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 6) { topRode++; topFaces.push(f) } }
assert.equal(topRode, 2, 'the top rode TWICE the two crests hold')
assert.deepEqual(topFaces, [372, 380], 'the faces 372/380 the crests\u2019 own seats ride')

// THE FIFTEEN DROUGHTS - the zero faces the fifteen floors hold
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.equal(zeroFaces.length, 15, 'THE FIFTEEN DROUGHTS the fifteen zero faces ride')
assert.deepEqual(zeroFaces, [349, 351, 353, 355, 359, 365, 366, 367, 369, 370, 374, 375, 379, 382, 384], 'the fifteen floors\u2019 own seats ride')

// THE BOUNDS - the +6 the max rise rode TWO legs ONE boundary (the
// boundary 379/380 - THE STORM'S OWN CLIMB), the -5 the max fall
// rode FOUR legs TWO boundaries (the boundaries 372/373 and 380/381
// - THE STORMS' OWN DRAINS the crest 6 the floor 1)
const steps = []
for (let f = 350; f <= 386; f++) { steps.push(P[f - 1] - P[f - 2]); steps.push(P[f] - P[f - 1]) }
assert.equal(Math.max(...steps), 6, 'the birth max rise +6 the bound holds')
assert.equal(Math.min(...steps), -5, 'the birth max fall -5 the bound holds')
assert.equal(steps.filter(s => s === 6).length, 2, 'the +6 rode TWO legs ONE boundary the storm\u2019s own climb holds')
assert.equal(steps.filter(s => s === -5).length, 4, 'the -5 rode FOUR legs TWO boundaries the storms\u2019 own drains hold')
assert.equal(P[380] - P[379], 6, 'the storm\u2019s own climb the boundary 379/380 rides')
assert.equal(P[373] - P[372], -5, 'the first storm drain the boundary 372/373 rides')
assert.equal(P[381] - P[380], -5, 'the second storm drain the boundary 380/381 rides - the crest 6 the floor 1')

// THE LAST WORD - the face 386's own window the honest silence (the
// held second leg the row never invents)
assert.equal(w(386), null, 'the last word the honest silence rides')

// THE WHOLE-CACHE SEAT 60u - the face 429's own 0u the newest add
// rides (the W429 window the round trip the nearest-completed law
// holds - the absent 428 the honest gap rides; the W427 window the
// swing the mirror beside; the W388/W389 windows the swings the post
// field holds)
const E = {}
E[347] = 0
E[386] = 2
E[387] = 1
E[388] = 3
E[389] = 0
E[417] = 0
E[418] = 2
E[420] = 0
E[421] = 0
E[422] = 1
E[423] = 1
E[425] = 3
E[426] = 0
E[427] = 3
E[429] = 0
let postSum = 0
for (const f of [387, 388, 389, 417, 418, 420, 421, 422, 423, 425, 426, 427, 429]) postSum += E[f]
assert.equal(46 + postSum, 60, "the whole-cache 60u the face 429's own 0u the newest add rides")
assert.equal(E[427], 3, "the face 427's own 3u the read byte-true holds")
assert.equal(E[425], 3, "the face 425's own 3u the mirror beside rides")
const ew = (f, T) => sweepDeferTrendRow({ back: { sweepDefers: T[f - 2] }, prev: { sweepDefers: T[f - 1] }, cur: { sweepDefers: T[f] } })
assert.equal(ew(388, E), SWING + '2 -> 1 (-1) -> 3 (+2)' + SWING_TAIL, 'the W388 window the swing rides')
assert.equal(ew(389, E), SWING + '1 -> 3 (+2) -> 0 (-3)' + SWING_TAIL, 'the W389 window the swing rides')
// the W427 window the swing 3 -> 0 (-3) -> 3 (+3) the mirror rides
assert.equal(ew(427, E), SWING + '3 -> 0 (-3) -> 3 (+3)' + SWING_TAIL, 'the W427 window the swing rides')
// the W429 window the nearest-completed law holds (the absent 428 the
// honest gap rides - no face no read) - the triple built whole: back
// 426, prev 427, cur 429
assert.equal(sweepDeferTrendRow({ back: { sweepDefers: E[426] }, prev: { sweepDefers: E[427] }, cur: { sweepDefers: E[429] } }), SWING + '0 -> 3 (+3) -> 0 (-3)' + SWING_TAIL, 'the W429 window the round trip rides - MY WORD\u2019S OWN FIRST LIVE READ the nearest-completed law holds')

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(sweepDeferTrendRow({ back: { sweepDefers: 1 }, prev: { sweepDefers: 2 }, cur: { sweepDefers: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(sweepDeferTrendRow({ back: { sweepDefers: 3 }, prev: { sweepDefers: 2 }, cur: { sweepDefers: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(sweepDeferTrendRow({ back: { sweepDefers: 1 }, prev: { sweepDefers: 3 }, cur: { sweepDefers: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(sweepDeferTrendRow({ back: { sweepDefers: 2 }, prev: { sweepDefers: 2 }, cur: { sweepDefers: 3 } }), null)
assert.equal(sweepDeferTrendRow({ back: { sweepDefers: 2 }, prev: { sweepDefers: 3 }, cur: { sweepDefers: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole (the
// fifteen droughts' own floors the whole field's own lawful counts)
assert.equal(sweepDeferTrendRow({ back: { sweepDefers: 0 }, prev: { sweepDefers: 1 }, cur: { sweepDefers: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(sweepDeferTrendRow({ back: { sweepDefers: 0 }, prev: { sweepDefers: 0 }, cur: { sweepDefers: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(sweepDeferTrendRow(null), null)
assert.equal(sweepDeferTrendRow(undefined), null)
assert.equal(sweepDeferTrendRow('junk'), null)
assert.equal(sweepDeferTrendRow(42), null)
assert.equal(sweepDeferTrendRow([]), null)
assert.equal(sweepDeferTrendRow({}), null)
assert.equal(sweepDeferTrendRow({ back: { sweepDefers: 1 }, prev: { sweepDefers: 2 } }), null)
assert.equal(sweepDeferTrendRow({ back: { sweepDefers: 1 }, cur: { sweepDefers: 2 } }), null)
assert.equal(sweepDeferTrendRow({ prev: { sweepDefers: 1 }, cur: { sweepDefers: 2 } }), null)
assert.equal(sweepDeferTrendRow({ back: { sweepDefers: 1 }, prev: { sweepDefers: 2 }, cur: { sweepDefers: -1 } }), null)
assert.equal(sweepDeferTrendRow({ back: { sweepDefers: 1.5 }, prev: { sweepDefers: 2 }, cur: { sweepDefers: 3 } }), null)
assert.equal(sweepDeferTrendRow({ back: { other: 1 }, prev: { sweepDefers: 2 }, cur: { sweepDefers: 3 } }), null)
assert.equal(sweepDeferTrendConsistent({ back: { sweepDefers: 0 }, prev: { sweepDefers: 0 }, cur: { sweepDefers: 0 } }), true)
assert.equal(sweepDeferTrendConsistent({ back: { sweepDefers: 5 }, prev: { sweepDefers: 9 }, cur: { sweepDefers: 2 }, spare: true }), true)
assert.equal(sweepDeferTrendConsistent(null), false)
assert.equal(sweepDeferTrendConsistent(undefined), false)
assert.equal(sweepDeferTrendConsistent('junk'), false)
assert.equal(sweepDeferTrendConsistent([]), false)
assert.equal(sweepDeferTrendConsistent({ back: { sweepDefers: 1 }, prev: { sweepDefers: 2 }, cur: { sweepDefers: NaN } }), false)

// THE CELL'S OWN READ - the real defer lines ride (the bracket voice
// the sweep lane prints only - every line the shape prints rides, no
// exclusion the shape needs)
assert.equal(sweepDefers([
  '[F1] sweep deferred (the lanes hold) - the 12s cooldown outlives the census clock (2 machine(s) untried, the next pass owns them)',
  '[F7] sweep deferred (the lanes hold) - the 12s cooldown outlives the census clock (1 machine(s) untried, the next pass owns them)',
  '[F13] sweep deferred (the lanes hold) - the 12s cooldown outlives the census clock (3 machine(s) untried, the next pass owns them)'
]), 3)
assert.equal(sweepDefers([
  '[F10] sweep deferred (the lanes hold) - the 12s cooldown outlives the census clock (4 machine(s) untried, the next pass owns them)'
]), 1)
// THE SWEEP VERDICTS the walkfail's own book prices never ride - the
// verdict lane's own seat (the lanes never merge)
assert.equal(sweepDefers(['F3 sweep: 0 collected - cannot open (open furnace (sweep): timeout after 5000ms) x1']), 0)
assert.equal(sweepDefers(['F5 sweep: 0 collected - machine unreachable (walk to a machine (sweep): timeout after 14873ms) x1']), 0)
// the walk-fail bucket prose never rides (the bucket lens the
// walkfail's own book prices beside)
assert.equal(sweepDefers(["the walk-fail's own anatomy: sweep deferred (the lanes hold) x1"]), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(sweepDefers(['F14 final bank budget: flow-priced 300676s (fleet bankable pocket 2088u (raw 2533u) at 0.0u/s needs 300676s) - clamped to 300s (the kill margin)']), 0)
assert.equal(sweepDefers(['F6 [F6] climb wet-wall yield: 4 wet rotations vs 0 dry at y=33 - no dry bearing owns this column, the fence reserve returns to the chain']), 0)
// the bare skin never rides - no such emitter voice (the sweep lane
// prints the bracket form only - zero untagged lines the whole cache
// holds)
assert.equal(sweepDefers(['F6 sweep deferred (the lanes hold) - the 12s cooldown outlives the census clock']), 0)
// the no-shape junk line never rides - the shape's own proof the RE
// demands
assert.equal(sweepDefers(['[F6] sweep deferred the lanes hold - the 12s cooldown']), 0)
assert.equal(sweepDefers(['[F6] sweep defers: (the lanes hold)']), 0)
assert.equal(sweepDefers(['[F6] sweep deferred: (the lanes hold)']), 0)
assert.equal(sweepDefers(['[F6] sweep deferred (the lanes hold']), 0)
assert.equal(sweepDefers(['sweep deferred (the lanes hold) - the 12s cooldown outlives the census clock']), 0)

// the defensive reads
assert.equal(sweepDefers(null), 0)
assert.equal(sweepDefers(undefined), 0)
assert.equal(sweepDefers('junk'), 0)
assert.equal(sweepDefers(42), 0)
assert.equal(sweepDefers([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  '[F1] sweep deferred (the lanes hold) - the 12s cooldown outlives the census clock (2 machine(s) untried, the next pass owns them)',
  '[F7] sweep deferred (the lanes hold) - the 12s cooldown outlives the census clock (1 machine(s) untried, the next pass owns them)',
  '[F13] sweep deferred (the lanes hold) - the 12s cooldown outlives the census clock (3 machine(s) untried, the next pass owns them)',
  '[F10] sweep deferred (the lanes hold) - the 12s cooldown outlives the census clock (4 machine(s) untried, the next pass owns them)',
  '[F19] sweep deferred (the lanes hold) - the 12s cooldown outlives the census clock (2 machine(s) untried, the next pass owns them)'
]
assert.equal(sweepDefers(lines), 5)
const fold = { back: { sweepDefers: sweepDefers(lines) }, prev: { sweepDefers: 1 }, cur: { sweepDefers: 0 } }
assert.equal(sweepDeferTrendRow(fold), FADE + '5 -> 1 (-4) -> 0 (-1)' + FADE_TAIL)

console.log('sweepdefertrend.test: all pins green')
