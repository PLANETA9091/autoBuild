// tests/unit/toolupgradeduetrend.test.mjs - THE TOOL UPGRADE DUE'S OWN
// TREND's own pin battery (v0.976.176): the field's own chains
// byte-exact (THE TOOL ECONOMY'S OWN DUE SEAT beside the raw lane
// words - the cobble-available verdicts and the worn verdicts and the
// tier debt verdicts the lane prints, THE CELL'S OWN WEIGHT 547u the
// thirty-nine faces' own total - THE DUE FAMILY'S OWN LIGHTEST SEAT
// (the spare pick due's own 788u the .168 word's own cell the heavier
// due sibling, the sword due's own 761u the .162 word's own cell the
// second), THE FIELD'S OWN TOP THE COUNT 21 the face 365's own top
// rode once, the +10 the birth max rise rode TWICE two legs (the
// boundary 364/365 the two windows share), the -9 the max fall rode
// TWICE two legs (the boundary 365/366 the two windows share) - THE
// BOUNDS' OWN ARC the three-window climb-drain 11 -> 21 -> 12, THE
// FIELD'S OWN FLOOR THE COUNT 7 rode TWO faces whole field (the face
// 352's own birth floor, the face 408's own live floor), ZERO FACES
// NONE - THE SKIN NEVER DRIED), TWENTY-SIX of THIRTY-SEVEN windows
// speaking (NINETEEN swings, FIVE swells, TWO fades, the ELEVEN
// honest silences - THE FIVE-SILENCE RUN THE DUE FAMILY'S LONGEST
// the faces 371/372/373/374/375's own windows the plateau 15/16 five
// faces deep - the spare pick due's own four-window silent run the
// .168's own family record beside, FIVE the new record), THE SIX
// MIRRORED HOLD PAIRS the silences ride (the boundaries 360/361,
// 366/367, 370/371, 372/373, 373/374, 383/384 the pairs share - the
// moved boundary the face 372/373's own pair the -1 drift beside),
// THE BACK-TO-BACK SWELL PAIR THE OPENER HOLDS (the faces 350/351's
// own windows the book born swelling), THE TWO FADES THE PAIR NOT
// ADJACENT (the faces 360/364's own windows), THE TWO ONE-WINDOW
// ROUND TRIPS (the faces 380/386's own windows - the face 386's own
// 18 -> 15 (-3) -> 18 (+3) THE LAST WORDS OWN TRADE the round trip
// the bookends hold), THE LIVE STRETCH'S OWN READ (the sixteen faces
// 401..416's own windows W403..W416 FOURTEEN windows TEN swings,
// THREE swells, ONE fade, ZERO silences - THE ZERO-SILENCE LIVE
// STRETCH, the +11 the whole-field max rise the boundary 408/409 the
// two windows share, the face 403's own round trip the live field's
// own trade), the byte-pin battery, the fence battery, the cell's
// own read, the one-parser ride over the REAL tool upgrade due lines
// (the raw mass the lane prints; the verdict lane's own lines the
// upgradecensus's own VERDICT_RE cell never rides - THE ANCHOR LAW
// keeps the due lines out of the verdict book the lanes never merge;
// the commune variant a different lane never rides; the spare pick
// due's own lines the .168 word's own cell never ride; the sword
// due's own lines the .162 word's own cell never ride; the spare
// pick colon's own lines the .166 word's own cell never ride; the
// climb out skins the climb-out book's own cells never ride; the
// walk-lane census cells the walk book's own axes never ride; the
// no-colon junk never rides).
import { toolUpgradeDues, toolUpgradeDueTrendConsistent, toolUpgradeDueTrendRow } from '../../src/lib/toolupgradeduetrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, this word prices the tool upgrade due's own mass across the faces - the tool upgrade due's own seat, co-existence by seat never by duplication)"

const HEAD = "the tool upgrade due's own trend (v0.976.176)"
const SWING = HEAD + ": the tool upgrade due's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the tool upgrade due's rise ran two steps deep - "
const SWELL_TAIL = " - the tool upgrade due's own swell " + TAIL
const FADE = HEAD + ": the tool upgrade due's fall ran two steps deep - "
const FADE_TAIL = " - the tool upgrade due's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the due regex's
// own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN WEIGHT
// 547u the faces' own total, THE FIELD'S OWN TOP THE COUNT 21 the
// face 365's own top rode once, the +10 the birth max rise rode TWICE
// two legs (the shared boundary 364/365), the -9 the max fall rode
// TWICE two legs (the shared boundary 365/366), THE FIELD'S OWN
// FLOOR THE COUNT 7 rode ONE birth face (the face 352's own floor;
// the face 408's own live floor the whole field's second), ZERO
// FACES NONE - THE SKIN NEVER DRIED.
const P = {}
P[348] = 9
P[349] = 12
P[350] = 13
P[351] = 14
P[352] = 7
P[353] = 15
P[354] = 12
P[355] = 13
P[356] = 17
P[357] = 15
P[358] = 19
P[359] = 16
P[360] = 13
P[361] = 13
P[362] = 15
P[363] = 12
P[364] = 11
P[365] = 21
P[366] = 12
P[367] = 12
P[368] = 10
P[369] = 13
P[370] = 16
P[371] = 16
P[372] = 15
P[373] = 15
P[374] = 15
P[375] = 11
P[376] = 14
P[377] = 12
P[378] = 13
P[379] = 17
P[380] = 13
P[381] = 16
P[382] = 11
P[383] = 18
P[384] = 18
P[385] = 15
P[386] = 18
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 547, 'the cell 547u the hand-off holds - THE DUE FAMILY\'S OWN LIGHTEST SEAT')
const w = (f) => toolUpgradeDueTrendRow({ back: { toolUpgradeDues: P[f - 2] }, prev: { toolUpgradeDues: P[f - 1] }, cur: { toolUpgradeDues: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (NINETEEN swings, FIVE swells, TWO fades, the
// ELEVEN honest silences)
const SWINGS = {
  352: '13 -> 14 (+1) -> 7 (-7)',
  353: '14 -> 7 (-7) -> 15 (+8)',
  354: '7 -> 15 (+8) -> 12 (-3)',
  355: '15 -> 12 (-3) -> 13 (+1)',
  357: '13 -> 17 (+4) -> 15 (-2)',
  358: '17 -> 15 (-2) -> 19 (+4)',
  359: '15 -> 19 (+4) -> 16 (-3)',
  363: '13 -> 15 (+2) -> 12 (-3)',
  365: '12 -> 11 (-1) -> 21 (+10)',
  366: '11 -> 21 (+10) -> 12 (-9)',
  369: '12 -> 10 (-2) -> 13 (+3)',
  376: '15 -> 11 (-4) -> 14 (+3)',
  377: '11 -> 14 (+3) -> 12 (-2)',
  378: '14 -> 12 (-2) -> 13 (+1)',
  380: '13 -> 17 (+4) -> 13 (-4)',
  381: '17 -> 13 (-4) -> 16 (+3)',
  382: '13 -> 16 (+3) -> 11 (-5)',
  383: '16 -> 11 (-5) -> 18 (+7)',
  386: '18 -> 15 (-3) -> 18 (+3)'
}
const SWELLS = {
  350: '9 -> 12 (+3) -> 13 (+1)',
  351: '12 -> 13 (+1) -> 14 (+1)',
  356: '12 -> 13 (+1) -> 17 (+4)',
  370: '10 -> 13 (+3) -> 16 (+3)',
  379: '12 -> 13 (+1) -> 17 (+4)'
}
const FADES = {
  360: '19 -> 16 (-3) -> 13 (-3)',
  364: '15 -> 12 (-3) -> 11 (-1)'
}
const SILENCES = [361, 362, 367, 368, 371, 372, 373, 374, 375, 384, 385]

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
assert.deepEqual(tally, { swing: 19, swell: 5, fade: 2, silence: 11 })

// THE TWO ONE-WINDOW ROUND TRIPS - the faces 380/386's own windows
// (the face 386's own trade THE LAST WORD the bookends hold)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [380, 386], 'the two round trips the book rides - the last word the round trip holds')

// THE SIX HELD LEGS the eleven silences ride
const heldLegs = []
for (let f = 350; f <= 386; f++) {
  if (P[f] === P[f - 1]) heldLegs.push(f)
}
assert.deepEqual(heldLegs, [361, 367, 371, 373, 374, 384], 'the six held legs the silences ride')

// THE SEVEN BACK-TO-BACK SILENCE PAIRS - six the mirrored hold the
// two windows share, the face 372/373's own pair the moved boundary
// beside (the -1 step the run's own drift rides)
const sharedPairs = []
for (let f = 351; f <= 386; f++) {
  if (SILENCES.includes(f) && SILENCES.includes(f - 1)) sharedPairs.push([f - 1, f])
}
assert.deepEqual(sharedPairs, [[361, 362], [367, 368], [371, 372], [372, 373], [373, 374], [374, 375], [384, 385]], 'the seven back-to-back silence pairs')
const mirroredPairs = sharedPairs.filter(([a]) => P[a] === P[a - 1])
assert.deepEqual(mirroredPairs, [[361, 362], [367, 368], [371, 372], [373, 374], [374, 375], [384, 385]], 'the six mirrored hold pairs - THE MOST-MIRRORED BOOK THE DUE FAMILY HOLDS')
assert.equal(P[371] === P[372] + 1 && P[372] === P[373], true, 'the face 372/373 pair the moved boundary -1 the run drift rides')

// THE FIVE-WINDOW SILENT RUN THE DUE FAMILY'S LONGEST - the faces
// 371/372/373/374/375's own windows the plateau the run holds (the
// spare pick due's own four-window silent run the .168's own family
// record beside, FIVE the new record)
assert.deepEqual(SILENCES.slice(4, 9), [371, 372, 373, 374, 375], 'the five-window silent run the family\'s longest')
assert.deepEqual([P[369], P[370], P[371], P[372], P[373], P[374], P[375]], [13, 16, 16, 15, 15, 15, 11], 'the run 13 -> 16 -> 16 -> 15 -> 15 -> 15 -> 11 the plateau the drift rides')

// THE BOUNDS' OWN ARC - the +10 the birth max rise rode TWICE two
// legs (the boundary 364/365 the two windows share), the -9 the max
// fall rode TWICE two legs (the boundary 365/366 the two windows
// share) - the three-window climb-drain 11 -> 21 -> 12 the birth
// field's own widest trade
const steps = []
for (let f = 350; f <= 386; f++) { steps.push(P[f - 1] - P[f - 2]); steps.push(P[f] - P[f - 1]) }
assert.equal(Math.max(...steps), 10, 'the birth max rise +10 the bound holds')
assert.equal(Math.min(...steps), -9, 'the birth max fall -9 the bound holds')
assert.deepEqual([P[364], P[365], P[366]], [11, 21, 12], 'the bounds\' own arc 11 -> 21 -> 12')

// THE ZERO FACES NONE - THE SKIN NEVER DRIED (the due never dries
// the fleet's own refill law holds)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.deepEqual(zeroFaces, [], 'zero faces none the skin never dried')

// landmark chains byte-exact full literals
// THE OPENER - the face 350's own window the swell the book born
// swelling (the faces 348/349 no window the carrier's own law)
assert.equal(w(350), SWELL + '9 -> 12 (+3) -> 13 (+1)' + SWELL_TAIL)
// THE BACK-TO-BACK SWELL PAIR THE OPENER HOLDS (the face 351's own
// window the second swell the run rides)
assert.equal(w(351), SWELL + '12 -> 13 (+1) -> 14 (+1)' + SWELL_TAIL)
assert.equal(Math.max(...Object.values(P)), 21, 'the top the count 21 the field holds')
// THE TOP'S OWN ARRIVAL THE BOUNDS' OWN ARC (the face 365's own
// swing the +10 the max rise's own bound the top's own arrival the
// same window holds, the -9 the max fall the next window rides)
assert.equal(w(365), SWING + '12 -> 11 (-1) -> 21 (+10)' + SWING_TAIL)
assert.equal(w(366), SWING + '11 -> 21 (+10) -> 12 (-9)' + SWING_TAIL)
// THE FIVE-WINDOW SILENT RUN (the faces 371..375's own windows the
// honest nulls the held law keeps)
assert.equal(w(371), null)
assert.equal(w(372), null)
assert.equal(w(373), null)
assert.equal(w(374), null)
assert.equal(w(375), null)
// THE ROUND TRIPS (the faces 380/386's own windows - the last word
// the round trip the bookends hold)
assert.equal(w(380), SWING + '13 -> 17 (+4) -> 13 (-4)' + SWING_TAIL)
assert.equal(w(386), SWING + '18 -> 15 (-3) -> 18 (+3)' + SWING_TAIL)
// THE LAST WORD the book's own trade the mirror beside
assert.equal(w(385), null)

// THE LIVE STRETCH'S OWN READ - the sixteen faces 401..416 the
// windows W403..W416 FOURTEEN windows TEN swings THREE swells ONE
// fade ZERO silences - THE ZERO-SILENCE LIVE STRETCH
const L = {}
L[401] = 10
L[402] = 14
L[403] = 10
L[404] = 18
L[405] = 15
L[406] = 13
L[407] = 14
L[408] = 7
L[409] = 18
L[410] = 19
L[411] = 11
L[412] = 12
L[413] = 14
L[414] = 17
L[415] = 9
L[416] = 12
let liveSum = 0
for (let f = 401; f <= 416; f++) liveSum += L[f]
assert.equal(liveSum, 213, 'the live stretch 213u the sixteen faces hold')
const lw = (f) => toolUpgradeDueTrendRow({ back: { toolUpgradeDues: L[f - 2] }, prev: { toolUpgradeDues: L[f - 1] }, cur: { toolUpgradeDues: L[f] } })
const liveTally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 403; f <= 416; f++) {
  const first = L[f - 1] - L[f - 2]
  const second = L[f] - L[f - 1]
  if (first === 0 || second === 0) { liveTally.silence++; continue }
  if (first > 0 && second > 0) liveTally.swell++
  else if (first < 0 && second < 0) liveTally.fade++
  else liveTally.swing++
}
assert.deepEqual(liveTally, { swing: 10, swell: 3, fade: 1, silence: 0 }, 'THE ZERO-SILENCE LIVE STRETCH the whole live read speaks')
// THE LIVE ROUND TRIP the live field's own trade (the face 403's own
// 10 -> 14 (+4) -> 10 (-4) the mirrored bounds)
assert.equal(lw(403), SWING + '10 -> 14 (+4) -> 10 (-4)' + SWING_TAIL)
// THE LIVE FADE the live field's lone fade (the face 406's own
// 18 -> 15 (-3) -> 13 (-2))
assert.equal(lw(406), FADE + '18 -> 15 (-3) -> 13 (-2)' + FADE_TAIL)
// THE WHOLE-FIELD MAX RISE +11 the live stretch's own bound (the
// boundary 408/409 the two windows share)
const liveSteps = []
for (let f = 403; f <= 416; f++) { liveSteps.push(L[f - 1] - L[f - 2]); liveSteps.push(L[f] - L[f - 1]) }
assert.equal(Math.max(...liveSteps), 11, 'the whole-field max rise +11 the live bound holds')
assert.equal(L[408], 7, 'the face 408\'s own 7 the floor\'s second face')

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(toolUpgradeDueTrendRow({ back: { toolUpgradeDues: 1 }, prev: { toolUpgradeDues: 2 }, cur: { toolUpgradeDues: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(toolUpgradeDueTrendRow({ back: { toolUpgradeDues: 3 }, prev: { toolUpgradeDues: 2 }, cur: { toolUpgradeDues: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(toolUpgradeDueTrendRow({ back: { toolUpgradeDues: 1 }, prev: { toolUpgradeDues: 3 }, cur: { toolUpgradeDues: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(toolUpgradeDueTrendRow({ back: { toolUpgradeDues: 2 }, prev: { toolUpgradeDues: 2 }, cur: { toolUpgradeDues: 3 } }), null)
assert.equal(toolUpgradeDueTrendRow({ back: { toolUpgradeDues: 2 }, prev: { toolUpgradeDues: 3 }, cur: { toolUpgradeDues: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole
assert.equal(toolUpgradeDueTrendRow({ back: { toolUpgradeDues: 0 }, prev: { toolUpgradeDues: 1 }, cur: { toolUpgradeDues: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(toolUpgradeDueTrendRow({ back: { toolUpgradeDues: 0 }, prev: { toolUpgradeDues: 0 }, cur: { toolUpgradeDues: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(toolUpgradeDueTrendRow(null), null)
assert.equal(toolUpgradeDueTrendRow(undefined), null)
assert.equal(toolUpgradeDueTrendRow('junk'), null)
assert.equal(toolUpgradeDueTrendRow(42), null)
assert.equal(toolUpgradeDueTrendRow([]), null)
assert.equal(toolUpgradeDueTrendRow({}), null)
assert.equal(toolUpgradeDueTrendRow({ back: { toolUpgradeDues: 1 }, prev: { toolUpgradeDues: 2 } }), null)
assert.equal(toolUpgradeDueTrendRow({ back: { toolUpgradeDues: 1 }, prev: { toolUpgradeDues: 2 }, cur: {} }), null)
assert.equal(toolUpgradeDueTrendRow({ back: { toolUpgradeDues: 'x' }, prev: { toolUpgradeDues: 2 }, cur: { toolUpgradeDues: 3 } }), null)
assert.equal(toolUpgradeDueTrendRow({ back: { toolUpgradeDues: 1 }, prev: { toolUpgradeDues: 2 }, cur: { toolUpgradeDues: -1 } }), null)
assert.equal(toolUpgradeDueTrendRow({ back: { toolUpgradeDues: 1.5 }, prev: { toolUpgradeDues: 2 }, cur: { toolUpgradeDues: 3 } }), null)
assert.equal(toolUpgradeDueTrendRow({ back: null, prev: { toolUpgradeDues: 2 }, cur: { toolUpgradeDues: 3 } }), null)
assert.equal(toolUpgradeDueTrendRow({ back: { toolUpgradeDues: 1 }, prev: [2], cur: { toolUpgradeDues: 3 } }), null)
// the extra keys never reject (the fence never overreaches)
assert.equal(toolUpgradeDueTrendRow({ back: { toolUpgradeDues: 1, extra: 9 }, prev: { toolUpgradeDues: 2, junk: 'x' }, cur: { toolUpgradeDues: 3, deep: { a: 1 } } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
// the fence's own read
assert.equal(toolUpgradeDueTrendConsistent({ back: { toolUpgradeDues: 0 }, prev: { toolUpgradeDues: 0 }, cur: { toolUpgradeDues: 0 } }), true)
assert.equal(toolUpgradeDueTrendConsistent({ back: { toolUpgradeDues: 5 }, prev: { toolUpgradeDues: 9 }, cur: { toolUpgradeDues: 2 }, spare: true }), true)
assert.equal(toolUpgradeDueTrendConsistent(null), false)
assert.equal(toolUpgradeDueTrendConsistent({ back: { toolUpgradeDues: 1 }, prev: { toolUpgradeDues: 2 }, cur: { toolUpgradeDues: NaN } }), false)

// THE CELL'S OWN READ - the real tool upgrade due lines ride (the
// raw mass the lane prints - every line the lane prints rides, no
// exclusion the lane needs; the denominators 131 and 59 both ride -
// the emitter prints the wear as data, the mass never splits)
assert.equal(toolUpgradeDues([
  'F12 tool upgrade due: cobble available -> stone_pickaxe',
  'F15 tool upgrade due: cobble available -> stone_pickaxe',
  'F14 tool upgrade due: cobble available -> stone_pickaxe'
]), 3)
assert.equal(toolUpgradeDues([
  'F15 tool upgrade due: worn (left=4/131) -> stone_pickaxe',
  'F9 tool upgrade due: worn (left=11/131) -> wooden_pickaxe',
  'F3 tool upgrade due: worn (left=2/59) -> stone_pickaxe'
]), 3)
assert.equal(toolUpgradeDues([
  'F12 tool upgrade due: tier debt 10u held in the ground (the vein pays for the pick) -> stone_pickaxe'
]), 1)
// THE VERDICT LANE'S OWN LINES the upgradecensus's own VERDICT_RE
// cell never rides here - THE ANCHOR LAW keeps the due lines out of
// the verdict book, the due seat this word prices (the lanes never
// merge)
assert.equal(toolUpgradeDues(['F12 tool upgrade: OK -> stone_pickaxe (kit: stone_pickaxe)']), 0)
assert.equal(toolUpgradeDues(['F13 tool upgrade: failed -> none (no table material)']), 0)
assert.equal(toolUpgradeDues(['F2 tool upgrade: worn -> stone_pickaxe (left=5/131)']), 0)
assert.equal(toolUpgradeDues(['F13 tool upgrade (commune): OK -> stone_pickaxe (kit: stone_pickaxe)']), 0)
// the due siblings' own lines never ride - the due family never
// merges (the .168's own border the precedent rode)
assert.equal(toolUpgradeDues(['F8 spare pick due: spare (cobble available)']), 0)
assert.equal(toolUpgradeDues(['F8 spare pick due: spare (planks available)']), 0)
assert.equal(toolUpgradeDues(['F5 sword due: refill scheduled (holds 0)']), 0)
assert.equal(toolUpgradeDues(['F5 sword due: worn (left=3/131)']), 0)
assert.equal(toolUpgradeDues(['F8 spare pick: OK (wooden_pickaxe, holds 2)']), 0)
assert.equal(toolUpgradeDues(['F1 spare pick: skip (no pickaxe materials (need 3 ingots / 3 cobble / 3 planks of ONE type))']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(toolUpgradeDues(['F4 bank trip: planned budget 300s']), 0)
assert.equal(toolUpgradeDues(['F5 final bank deferred: night (tod=18000)']), 0)
assert.equal(toolUpgradeDues(['F6 bank: yard walk arrived in 0s (1 attempt)']), 0)
assert.equal(toolUpgradeDues(['F5 sword: OK (wooden_sword, holds 1)']), 0)
assert.equal(toolUpgradeDues(['F6 camp furnace: no build (machine near)']), 0)
assert.equal(toolUpgradeDues(['F5 fuel anchor: delivered 2 fuel overage (ok)']), 0)
// the walk-lane census cells never ride
assert.equal(toolUpgradeDues(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
// the climb out skins never ride - the climb-out never upgrades
assert.equal(toolUpgradeDues(['F3 climb out (tool recovery): OK +8 levels (7 steps, 2 dug, 21s)']), 0)
assert.equal(toolUpgradeDues(['F12 climb out (bank): failed - wet wall']), 0)
// the tagged skin never rides - the emitter's own voice the bare
// prefix holds (the lane prints bare only, the zero tagged lines the
// whole field holds)
assert.equal(toolUpgradeDues(['F12 [F12] tool upgrade due: cobble available -> stone_pickaxe']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(toolUpgradeDues(['F6 tool upgrade due cobble available -> stone_pickaxe']), 0)
assert.equal(toolUpgradeDues(['F6 tool upgrade due']), 0)
assert.equal(toolUpgradeDues(['tool upgrade due: cobble available -> stone_pickaxe']), 0)
assert.equal(toolUpgradeDues(['F8 tool upgrade due-extra: cobble available -> stone_pickaxe']), 0)
assert.equal(toolUpgradeDues(['F8 tool upgrade dues: cobble available -> stone_pickaxe']), 0)

// the defensive reads
assert.equal(toolUpgradeDues(null), 0)
assert.equal(toolUpgradeDues(undefined), 0)
assert.equal(toolUpgradeDues('junk'), 0)
assert.equal(toolUpgradeDues(42), 0)
assert.equal(toolUpgradeDues([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 tool upgrade due: cobble available -> stone_pickaxe',
  'F9 tool upgrade due: worn (left=4/131) -> stone_pickaxe',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(toolUpgradeDues(lines), 2)
const fold = { back: { toolUpgradeDues: toolUpgradeDues(lines) }, prev: { toolUpgradeDues: 15 }, cur: { toolUpgradeDues: 7 } }
assert.equal(toolUpgradeDueTrendRow(fold), SWING + '2 -> 15 (+13) -> 7 (-8)' + SWING_TAIL)

console.log('toolupgradeduetrend.test: all pins green')
