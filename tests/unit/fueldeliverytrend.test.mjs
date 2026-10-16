// tests/unit/fueldeliverytrend.test.mjs - THE FUEL ANCHOR DELIVERY'S
// OWN TREND's own pin battery (v0.976.167): the field's own chains
// byte-exact (THE FUEL ANCHOR BOOK'S OWN DELIVERY SEAT beside the raw
// docket words - the delivered-overage verdicts and the tithe-bound
// lines and the zero-delivered verdicts and the skip lines and the
// approach lines and the lied-arrival lines and the stands-down lines
// the lane prints, THE CELL'S OWN WEIGHT 195u the thirty-nine faces'
// own total - THE FIRE-0142'S OWN BESIDE-SEAT the .161 word's own
// border naming rode byte-true - THE LIGHTEST NAMED LANE THE FIELD
// HOLDS the honest seat the weight never lies, THE FIELD'S OWN TOP
// THE COUNT 22 the face 354's own top rode once - the top's own
// arrival the swing's own back rode, the +19 the max rise rode TWICE
// two legs, the -22 the max fall rode TWICE two legs - THE PEAK'S OWN
// TRADE TWO WINDOWS, THE FIELD'S OWN FLOOR THE COUNT ZERO rode EIGHT
// faces - THE FIRST DRIED SKIN THE FAMILY HOLDS the zero a lawful
// count), TWENTY-SIX of THIRTY-SEVEN windows speaking (FIFTEEN
// swings, SIX swells, FIVE fades, the ELEVEN honest silences - SIX
// back-to-back pairs - THE NEW MOST-PAIRED BOOK THE FAMILY HOLDS the
// .164's own four pairs the record beside, THE TRIPLE HOLD THE
// FAMILY'S FIRST the faces 370/371/372's own windows), THE TWO-WINDOW ROUND TRIP PAIR
// BACK-TO-BACK (the faces 365/366's own windows), the byte-pin
// battery, the fence battery, the cell's own read, the one-parser
// ride over the REAL fuel anchor delivery lines (the raw mass the
// lane prints; the fuel anchor scan's own lines the .161 word's own
// cell never rides - the scan never delivers, the delivery never
// scans; the spare pick's own lines the .166 word's own cell never
// rides; the camp furnace's own mass the .165 word's own cell never
// rides; the bank's own raw colon mass the .164 word's own cell never
// rides - the lanes never merge; the iron commune's own raw colon
// mass the .163 word's own cell never rides; the sword's own raw
// docket mass the .162 word's own cell never rides; the food commons'
// raw docket mass the .160 word's own cell never rides; the fuel
// commons' own raw docket mass the .159 word's own cell never rides;
// the tunnel verdicts the .158 word's own cell never ride; the food
// trip dockets the .157 word's own cell never ride; the climb-refused
// class the .147 word's own cell never rides; the climb out skins the
// climb-out book's own cells never ride; the walk-lane census cells
// the walk book's own axes never ride; the no-colon junk never
// rides).
import { fuelDeliveries, fuelDeliveryTrendConsistent, fuelDeliveryTrendRow } from '../../src/lib/fueldeliverytrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, this word prices the fuel anchor delivery's own mass across the faces - the fuel anchor delivery's own seat, co-existence by seat never by duplication)"

const HEAD = "the fuel anchor delivery's own trend (v0.976.167)"
const SWING = HEAD + ": the fuel anchor delivery's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the fuel anchor delivery's rise ran two steps deep - "
const SWELL_TAIL = " - the fuel anchor delivery's own swell " + TAIL
const FADE = HEAD + ": the fuel anchor delivery's fall ran two steps deep - "
const FADE_TAIL = " - the fuel anchor delivery's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the delivery
// regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 195u the faces' own total, THE FIELD'S OWN TOP THE COUNT 22
// the face 354's own top rode once (the top's own arrival the
// swing's own back rode), the +19 the max rise rode TWICE two legs
// (the face 354's own window's second leg and the face 355's own
// window's first leg the shared leg), the -22 the max fall rode TWICE
// two legs (THE PEAK'S OWN TRADE TWO WINDOWS - the face 355's own
// window's second leg and the face 356's own window's first leg the
// shared leg), THE FIELD'S OWN FLOOR THE COUNT ZERO rode EIGHT faces
// (the faces 350/355/358/364/366/374/377/378's own floors - THE
// FIRST DRIED SKIN THE FAMILY HOLDS the zero a lawful count).
const P = {}
P[348] = 4
P[349] = 2
P[350] = 0
P[351] = 4
P[352] = 4
P[353] = 3
P[354] = 22
P[355] = 0
P[356] = 3
P[357] = 3
P[358] = 0
P[359] = 1
P[360] = 1
P[361] = 4
P[362] = 7
P[363] = 6
P[364] = 0
P[365] = 6
P[366] = 0
P[367] = 1
P[368] = 6
P[369] = 8
P[370] = 8
P[371] = 8
P[372] = 12
P[373] = 9
P[374] = 0
P[375] = 12
P[376] = 2
P[377] = 0
P[378] = 0
P[379] = 4
P[380] = 5
P[381] = 10
P[382] = 8
P[383] = 4
P[384] = 6
P[385] = 15
P[386] = 7
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 195, 'the cell 195u the witness holds')
const w = (f) => fuelDeliveryTrendRow({ back: { fuelDeliveries: P[f - 2] }, prev: { fuelDeliveries: P[f - 1] }, cur: { fuelDeliveries: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (FIFTEEN swings, SIX swells, FIVE fades, the ELEVEN
// honest silences)
const SWINGS = {
  351: '2 -> 0 (-2) -> 4 (+4)',
  354: '4 -> 3 (-1) -> 22 (+19)',
  355: '3 -> 22 (+19) -> 0 (-22)',
  356: '22 -> 0 (-22) -> 3 (+3)',
  359: '3 -> 0 (-3) -> 1 (+1)',
  363: '4 -> 7 (+3) -> 6 (-1)',
  365: '6 -> 0 (-6) -> 6 (+6)',
  366: '0 -> 6 (+6) -> 0 (-6)',
  367: '6 -> 0 (-6) -> 1 (+1)',
  373: '8 -> 12 (+4) -> 9 (-3)',
  375: '9 -> 0 (-9) -> 12 (+12)',
  376: '0 -> 12 (+12) -> 2 (-10)',
  382: '5 -> 10 (+5) -> 8 (-2)',
  384: '8 -> 4 (-4) -> 6 (+2)',
  386: '6 -> 15 (+9) -> 7 (-8)'
}
const SWELLS = {
  362: '1 -> 4 (+3) -> 7 (+3)',
  368: '0 -> 1 (+1) -> 6 (+5)',
  369: '1 -> 6 (+5) -> 8 (+2)',
  380: '0 -> 4 (+4) -> 5 (+1)',
  381: '4 -> 5 (+1) -> 10 (+5)',
  385: '4 -> 6 (+2) -> 15 (+9)'
}
const FADES = {
  350: '4 -> 2 (-2) -> 0 (-2)',
  364: '7 -> 6 (-1) -> 0 (-6)',
  374: '12 -> 9 (-3) -> 0 (-9)',
  377: '12 -> 2 (-10) -> 0 (-2)',
  383: '10 -> 8 (-2) -> 4 (-4)'
}
const SILENCES = [352, 353, 357, 358, 360, 361, 370, 371, 372, 378, 379]

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
assert.deepEqual(tally, { swing: 15, swell: 6, fade: 5, silence: 11 })

// THE TWO-WINDOW ROUND TRIP PAIR BACK-TO-BACK - the pair trades the
// whole mass two windows straight (the faces 365/366's own windows)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [365, 366], 'the round-trip pair the book rides back-to-back')

// THE HELD LEGS - the six held legs the eleven silences ride (the
// five back-to-back pairs the ONE held leg the two windows share
// every pair, the face 371's own window TWO pairs hold - THE TRIPLE
// HOLD THE FAMILY'S FIRST the faces 370/371/372's own windows the
// count 8 the three windows share)
const heldLegs = []
for (let f = 350; f <= 386; f++) {
  if (P[f] === P[f - 1]) heldLegs.push(f)
}
assert.deepEqual(heldLegs, [352, 357, 360, 370, 371, 378], 'the six held legs the silences ride')
const sharedPairs = []
for (let f = 351; f <= 386; f++) {
  if (SILENCES.includes(f) && SILENCES.includes(f - 1)) sharedPairs.push([f - 1, f])
}
assert.deepEqual(sharedPairs, [[352, 353], [357, 358], [360, 361], [370, 371], [371, 372], [378, 379]], 'the six back-to-back silence pairs - THE NEW MOST-PAIRED BOOK')
assert.equal(P[370], 8 && P[371], 8 && P[372], 8, 'the triple hold the count 8 the three windows share')

// THE EIGHT ZERO FACES - THE FIRST DRIED SKIN THE FAMILY HOLDS (the
// zero a lawful count the smelt lane's own zero precedent v0.976.90
// holds)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.deepEqual(zeroFaces, [350, 355, 358, 364, 366, 374, 377, 378], 'the eight dried skins the honest zeros ride')

// landmark chains byte-exact full literals
// THE FIELD'S OWN OPENER - the face 350's own fade the field's own
// first word rode (the faces 348/349 no window the carrier's own law)
assert.equal(w(350), FADE + '4 -> 2 (-2) -> 0 (-2)' + FADE_TAIL)
// THE TOP'S OWN ARRIVAL (the face 354's own swing the 22 the top's
// own count rode - the trade-then-build the window's own shape - the
// +19 the max rise step's own single bound the same step rode)
assert.equal(w(354), SWING + '4 -> 3 (-1) -> 22 (+19)' + SWING_TAIL)
// THE PEAK'S OWN TRADE TWO WINDOWS (the face 355's own swing the -22
// the max fall step's own single bound rode - the top's own mass the
// drain rode 22 -> 0, the +19 the max rise's own bound the same
// window's first leg rode)
assert.equal(w(355), SWING + '3 -> 22 (+19) -> 0 (-22)' + SWING_TAIL)
// THE REBUILD (the face 356's own swing the -22 the max fall's own
// bound the same window's first leg rode - the shared leg beside)
assert.equal(w(356), SWING + '22 -> 0 (-22) -> 3 (+3)' + SWING_TAIL)
// THE ROUND TRIP PAIR BACK-TO-BACK (the faces 365/366's own windows
// the pair trades the whole mass two windows straight)
assert.equal(w(365), SWING + '6 -> 0 (-6) -> 6 (+6)' + SWING_TAIL)
assert.equal(w(366), SWING + '0 -> 6 (+6) -> 0 (-6)' + SWING_TAIL)
// THE TRIPLE HOLD (the faces 370/371/372's own windows the count 8
// the three windows share - the honest nulls the held law keeps)
assert.equal(w(370), null)
assert.equal(w(371), null)
assert.equal(w(372), null)
// THE LAST SWELL (the face 385's own swell the 15 the rebuild rode)
assert.equal(w(385), SWELL + '4 -> 6 (+2) -> 15 (+9)' + SWELL_TAIL)
// THE LAST WORD (the face 386's own swing the book's own last word)
assert.equal(w(386), SWING + '6 -> 15 (+9) -> 7 (-8)' + SWING_TAIL)

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(fuelDeliveryTrendRow({ back: { fuelDeliveries: 1 }, prev: { fuelDeliveries: 2 }, cur: { fuelDeliveries: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(fuelDeliveryTrendRow({ back: { fuelDeliveries: 3 }, prev: { fuelDeliveries: 2 }, cur: { fuelDeliveries: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(fuelDeliveryTrendRow({ back: { fuelDeliveries: 1 }, prev: { fuelDeliveries: 3 }, cur: { fuelDeliveries: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(fuelDeliveryTrendRow({ back: { fuelDeliveries: 2 }, prev: { fuelDeliveries: 2 }, cur: { fuelDeliveries: 3 } }), null)
assert.equal(fuelDeliveryTrendRow({ back: { fuelDeliveries: 2 }, prev: { fuelDeliveries: 3 }, cur: { fuelDeliveries: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole
assert.equal(fuelDeliveryTrendRow({ back: { fuelDeliveries: 0 }, prev: { fuelDeliveries: 1 }, cur: { fuelDeliveries: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(fuelDeliveryTrendRow({ back: { fuelDeliveries: 0 }, prev: { fuelDeliveries: 0 }, cur: { fuelDeliveries: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(fuelDeliveryTrendRow(null), null)
assert.equal(fuelDeliveryTrendRow(undefined), null)
assert.equal(fuelDeliveryTrendRow('junk'), null)
assert.equal(fuelDeliveryTrendRow(42), null)
assert.equal(fuelDeliveryTrendRow([]), null)
assert.equal(fuelDeliveryTrendRow({}), null)
assert.equal(fuelDeliveryTrendRow({ back: { fuelDeliveries: 1 }, prev: { fuelDeliveries: 2 } }), null)
assert.equal(fuelDeliveryTrendRow({ back: { fuelDeliveries: 1 }, prev: { fuelDeliveries: 2 }, cur: {} }), null)
assert.equal(fuelDeliveryTrendRow({ back: { fuelDeliveries: 'x' }, prev: { fuelDeliveries: 2 }, cur: { fuelDeliveries: 3 } }), null)
assert.equal(fuelDeliveryTrendRow({ back: { fuelDeliveries: 1 }, prev: { fuelDeliveries: 2 }, cur: { fuelDeliveries: -1 } }), null)
assert.equal(fuelDeliveryTrendRow({ back: { fuelDeliveries: 1.5 }, prev: { fuelDeliveries: 2 }, cur: { fuelDeliveries: 3 } }), null)
assert.equal(fuelDeliveryTrendRow({ back: null, prev: { fuelDeliveries: 2 }, cur: { fuelDeliveries: 3 } }), null)
assert.equal(fuelDeliveryTrendRow({ back: { fuelDeliveries: 1 }, prev: [2], cur: { fuelDeliveries: 3 } }), null)
// the extra keys never reject (the fence never overreaches)
assert.equal(fuelDeliveryTrendRow({ back: { fuelDeliveries: 1, extra: 9 }, prev: { fuelDeliveries: 2, junk: 'x' }, cur: { fuelDeliveries: 3, deep: { a: 1 } } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
// the fence's own read
assert.equal(fuelDeliveryTrendConsistent({ back: { fuelDeliveries: 0 }, prev: { fuelDeliveries: 0 }, cur: { fuelDeliveries: 0 } }), true)
assert.equal(fuelDeliveryTrendConsistent({ back: { fuelDeliveries: 5 }, prev: { fuelDeliveries: 9 }, cur: { fuelDeliveries: 2 }, spare: true }), true)
assert.equal(fuelDeliveryTrendConsistent(null), false)
assert.equal(fuelDeliveryTrendConsistent({ back: { fuelDeliveries: 1 }, prev: { fuelDeliveries: 2 }, cur: { fuelDeliveries: NaN } }), false)

// THE CELL'S OWN READ - the real fuel anchor delivery lines ride
// (the raw mass the lane prints - every line the lane prints rides,
// no exclusion the lane needs)
assert.equal(fuelDeliveries([
  'F5 fuel anchor: delivered 2 units over the tithe bound (pocket keeps 6)',
  'F5 fuel anchor: delivered 2 fuel overage (ok)',
  'F5 fuel anchor: 0 delivered at arrival (the vertical gate: the yard stands 40 levels up over 24b lateral - the walk ladder cannot climb) - the final-leg seat retries',
  'F5 fuel anchor: 0 delivered (the vertical gate: the yard stands 40 levels up over 24b lateral - the walk ladder cannot climb) - the legacy scatter carries the tithe'
]), 4)
// the zero-delivered verdicts ride - the legacy scatter's own family
assert.equal(fuelDeliveries([
  'F3 fuel anchor: 0 delivered (anchor beyond reach (d=24) - the open never had it) - the legacy scatter carries the tithe',
  'F3 fuel anchor: 0 delivered (the sub-doom gate: the anchor stands 2 up over 18b lateral - the near window owns the delivery) - the legacy scatter carries the tithe',
  'F3 fuel anchor: 0 delivered (walk failed (No path to the goal!)) - the legacy scatter carries the tithe',
  'F3 fuel anchor: 0 delivered (walk failed (Took to long to decide path to goal!)) - the legacy scatter carries the tithe',
  'F3 fuel anchor: 0 delivered (walk failed (fuel anchor walk: timeout after 30000ms)) - the legacy scatter carries the tithe',
  'F3 fuel anchor: 0 delivered (walk failed (walk governor: bot churned 5 goals without progress - fuel anchor walk refused for 60s)) - the legacy scatter carries the tithe',
  'F3 fuel anchor: 0 delivered (walk failed (walk governor: bot churned 5 goals without progress - fuel anchor walk retry refused for 60s)) - the legacy scatter carries the tithe',
  'F3 fuel anchor: 0 delivered (walk failed (water rescue in progress (fuel anchor walk retry refused))) - the legacy scatter carries the tithe'
]), 8)
// the arrival-seat twins ride
assert.equal(fuelDeliveries([
  'F3 fuel anchor: 0 delivered at arrival (anchor beyond reach (d=24) - the open never had it) - the final-leg seat retries',
  'F3 fuel anchor: 0 delivered at arrival (the sub-doom gate: the anchor stands 2 up over 18b lateral - the near window owns the delivery) - the final-leg seat retries',
  'F3 fuel anchor: 0 delivered at arrival (walk failed (No path to the goal!)) - the final-leg seat retries',
  'F3 fuel anchor: 0 delivered at arrival (walk failed (Took to long to decide path to goal!)) - the final-leg seat retries',
  'F3 fuel anchor: 0 delivered at arrival (walk failed (fuel anchor walk: timeout after 30000ms)) - the final-leg seat retries'
]), 5)
// the approach and the skip and the lied-arrival and the stands-down
// lines ride
assert.equal(fuelDeliveries([
  'F7 fuel anchor: arrival re-approach approach: 2 segment(s) walked in 12.0s, goal now d=9.5 (inside the direct envelope)',
  'F7 fuel anchor: arrival re-approach approach: 1 segment(s) walked in 8.0s, goal now d=25.0 (still outside - the approach clock is spent)',
  'F7 fuel anchor: arrival re-approach approach: the stall side-step (right) stalled too',
  'F4 fuel anchor: delivered 3 fuel overage (arrival seat: ok) - the yard chest eats before the leg spends',
  'F8 fuel anchor: path nudge approach: 2 segment(s) walked in 12.0s, goal now d=9.5 (inside the direct envelope)',
  'F8 fuel anchor: path nudge approach: 1 segment(s) walked in 8.0s, goal now d=25.0 (still outside - the approach clock is spent)',
  'F8 fuel anchor: path nudge closed to d=9.5 - retrying from the new start',
  'F8 fuel anchor: path nudge inside the direct envelope',
  'F9 fuel anchor: skipped - the final leg clock (-1.0s) cannot afford the walk while the pocket holds 8 over the bound',
  'F9 fuel anchor: skipped - the final leg clock (12.0s) cannot afford the walk while the pocket holds 8 over the bound',
  'F9 fuel anchor: the arrival lied (d=24.0 > 24) - one bounded re-approach rides',
  'F9 fuel anchor: the nudge stands down - the slice funds the final leg first (30000ms left)'
]), 12)
// THE FUEL ANCHOR SCAN'S OWN LINES the .161 word's own book never
// rides here - the scan never delivers, the delivery never scans
assert.equal(fuelDeliveries(['F1 fuel anchor scan: the palette read empty x1 - the singular probe rescued the scan (chest at [-120,81,392])']), 0)
assert.equal(fuelDeliveries(['F2 fuel anchor scan returned empty (attempt 1/2) at [-128,64,400] yard d=11 - the palette empty-return class, the singular probe rides first']), 0)
assert.equal(fuelDeliveries(['F2 fuel anchor scan empty x2 - the singular probe found nothing either']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(fuelDeliveries(['F4 bank trip: planned budget 300s']), 0)
assert.equal(fuelDeliveries(['F3 bank trip: deferred (budget exhausted)']), 0)
assert.equal(fuelDeliveries(['F5 final bank deferred: night (tod=18000)']), 0)
assert.equal(fuelDeliveries(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(fuelDeliveries(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(fuelDeliveries(['F5 food commons: chest holds no food']), 0)
assert.equal(fuelDeliveries(['F6 fuel commons: budget spent (0/2 units)']), 0)
assert.equal(fuelDeliveries(['F5 sword: OK (wooden_sword, holds 1)']), 0)
assert.equal(fuelDeliveries(['F8 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here']), 0)
assert.equal(fuelDeliveries(['F6 bank: yard walk arrived in 0s (1 attempt)']), 0)
assert.equal(fuelDeliveries(['F6 camp furnace: no build (machine near)']), 0)
assert.equal(fuelDeliveries(['F9 spare pick: OK (wooden_pickaxe, holds 2)']), 0)
assert.equal(fuelDeliveries(['F9 spare pick due: refill scheduled (sticks 0)']), 0)
// the walk-lane census cells never ride
assert.equal(fuelDeliveries(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
// the climb out skins never ride - the climb-out never delivers
assert.equal(fuelDeliveries(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(fuelDeliveries(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(fuelDeliveries(['F6 fuel anchor OK (delivered)']), 0)
assert.equal(fuelDeliveries(['F6 fuel anchor']), 0)
assert.equal(fuelDeliveries(['fuel anchor: delivered 2 (ok)']), 0)
assert.equal(fuelDeliveries(['F8 fuel anchor-extra: delivered 2 (ok)']), 0)
assert.equal(fuelDeliveries(['F8 fuel anchors: delivered 2 (ok)']), 0)

// the defensive reads
assert.equal(fuelDeliveries(null), 0)
assert.equal(fuelDeliveries(undefined), 0)
assert.equal(fuelDeliveries('junk'), 0)
assert.equal(fuelDeliveries(42), 0)
assert.equal(fuelDeliveries([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 fuel anchor: delivered 2 fuel overage (ok)',
  'F9 fuel anchor: skipped - the final leg clock (12.0s) cannot afford the walk while the pocket holds 8 over the bound',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(fuelDeliveries(lines), 2)
const fold = { back: { fuelDeliveries: fuelDeliveries(lines) }, prev: { fuelDeliveries: 3 }, cur: { fuelDeliveries: 0 } }
assert.equal(fuelDeliveryTrendRow(fold), SWING + '2 -> 3 (+1) -> 0 (-3)' + SWING_TAIL)

console.log('fueldeliverytrend.test: all pins green')
