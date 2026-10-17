// tests/unit/smeltdrygambletrend.test.mjs - THE SMELT DRY GAMBLE
// TREND's own pin battery (v0.976.192): the smelt attempt's own
// dry-gamble mass across the faces the F431's own census named first
// (the 'smelt refusal census: no fuel 19, machine unreachable 9, busy
// 3 of 33 refused attempts' the top tax the census names, the F430's
// own no fuel 2 of 17 the lighter mirror behind) - the field's own
// chains byte-exact (THE CELL'S OWN WEIGHT 257u the thirty-nine
// faces' own total, THE FIELD'S OWN TOP THE COUNT 23 rode ONCE the
// face 353's own crest - THE STORM, THE FIELD'S OWN FLOOR THE COUNT
// ZERO rode TWICE the faces 354/364's own floors - THE TWO DROUGHTS,
// THE STORM'S OWN FULL ROUND TRIP the face 354's own window 1 -> 23
// (+22) -> 0 (-23) the spike's own arrival AND exit in ONE window),
// THIRTY-TWO of THIRTY-SEVEN windows speaking (TWENTY-TWO swings, SIX
// swells, FOUR fades, the FIVE honest silences - the PAIR the faces
// 357/358 hold + THE TRIPLE SILENCE RUN the faces 382/383/384's own
// windows the longest drought this book holds), THE FOUR FADES chain
// in twos (the PAIR 361/362 + the PAIR 369/370), THE SIX SWELLS (the
// PAIR 366/367 the drought's own exit + the four solos), THE THREE
// ROUND TRIPS the faces 363/365/368 hold, the bounds' own legs pins
// (the +22 rode TWO legs ONE boundary the boundary 352/353 - THE
// STORM'S OWN CLIMB, the -23 rode TWO legs ONE boundary the boundary
// 353/354 - THE STORM'S OWN DRAIN), the last word the face 386's own
// window the swell (1 -> 3 (+2) -> 9 (+6)), the whole-cache pins (the
// 387u over the fifty-five faces, the face 431's own 37u the newest
// add, the W431 window the swing 4 -> 3 (-1) -> 37 (+34) MY WORD'S
// OWN FIRST LIVE READ the nearest-completed law holds - the absent
// 428 and the cancelled 424 the honest gaps ride, THE WHOLE-CACHE
// TOP THE COUNT 37 rode ONCE the face 431's own crest, the W427
// window the swing, the W387 window the swell the post field holds)
// + the byte-pin battery, the fence battery, the cell's own read, the
// one-parser ride over the REAL smelt dry gamble lines (the bank
// lane's own smelt-hold skip never rides, the fuel commons' own
// verdicts never ride, the smelt refusal census never rides, the bare
// skin never rides - no such emitter voice, the no-shape junk never
// rides - the lanes never merge)
import assert from 'node:assert'
import { smeltDryGambles, smeltDryGambleTrendConsistent, smeltDryGambleTrendRow } from '../../src/lib/smeltdrygambletrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, this word prices the smelt dry gamble mass across the faces - the smelt dry gamble seat, co-existence by seat never by duplication)"

const HEAD = 'the smelt dry gamble trend (v0.976.192)'
const SWING = HEAD + ": the gamble's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the gamble's rise ran two steps deep - "
const SWELL_TAIL = " - the gamble's own swell " + TAIL
const FADE = HEAD + ": the gamble's fall ran two steps deep - "
const FADE_TAIL = " - the gamble's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the smelt dry
// gamble RE's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S
// OWN WEIGHT 257u the faces' own total, THE FIELD'S OWN TOP THE
// COUNT 23 rode ONCE (the face 353's own crest - THE STORM), THE
// FIELD'S OWN FLOOR THE COUNT ZERO rode TWICE (the faces 354/364's
// own floors - THE TWO DROUGHTS)
const P = {}
P[348] = 10
P[349] = 3
P[350] = 6
P[351] = 7
P[352] = 1
P[353] = 23
P[354] = 0
P[355] = 7
P[356] = 9
P[357] = 9
P[358] = 8
P[359] = 20
P[360] = 5
P[361] = 3
P[362] = 2
P[363] = 3
P[364] = 0
P[365] = 3
P[366] = 6
P[367] = 8
P[368] = 6
P[369] = 4
P[370] = 2
P[371] = 7
P[372] = 11
P[373] = 2
P[374] = 10
P[375] = 7
P[376] = 11
P[377] = 6
P[378] = 15
P[379] = 2
P[380] = 16
P[381] = 4
P[382] = 4
P[383] = 4
P[384] = 1
P[385] = 3
P[386] = 9

const w = (f, T = P) => smeltDryGambleTrendRow({ back: { smeltDryGambles: T[f - 2] }, prev: { smeltDryGambles: T[f - 1] }, cur: { smeltDryGambles: T[f] } })

// THE CELL'S OWN WEIGHT 257u
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 257, 'the birth field 257u the thirty-nine faces ride')

function tallyWindow (f, T = P) {
  const first = T[f - 1] - T[f - 2]
  const second = T[f] - T[f - 1]
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}
const tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) tally[tallyWindow(f)]++
assert.deepEqual(tally, { swing: 22, swell: 6, fade: 4, silence: 5 }, 'THIRTY-TWO of THIRTY-SEVEN windows speaking - the honest spread rides')

// THE SWELLS - the SIX swells the faces 351/356/366/367/372/386 hold
// (the PAIR 366/367 the drought's own exit + the four solo seats)
const SWELLS = {
  351: '3 -> 6 (+3) -> 7 (+1)',
  356: '0 -> 7 (+7) -> 9 (+2)',
  366: '0 -> 3 (+3) -> 6 (+3)',
  367: '3 -> 6 (+3) -> 8 (+2)',
  372: '2 -> 7 (+5) -> 11 (+4)',
  386: '1 -> 3 (+2) -> 9 (+6)'
}
// THE FADES - the FOUR fades chain in twos (the PAIR 361/362 the
// storm drain's own echo + the PAIR 369/370 the descent's own pair)
const FADES = {
  361: '20 -> 5 (-15) -> 3 (-2)',
  362: '5 -> 3 (-2) -> 2 (-1)',
  369: '8 -> 6 (-2) -> 4 (-2)',
  370: '6 -> 4 (-2) -> 2 (-2)'
}
// THE SWINGS - the TWENTY-TWO swings the honest churn rides
const SWINGS = {
  350: '10 -> 3 (-7) -> 6 (+3)',
  352: '6 -> 7 (+1) -> 1 (-6)',
  353: '7 -> 1 (-6) -> 23 (+22)',
  354: '1 -> 23 (+22) -> 0 (-23)',
  355: '23 -> 0 (-23) -> 7 (+7)',
  359: '9 -> 8 (-1) -> 20 (+12)',
  360: '8 -> 20 (+12) -> 5 (-15)',
  363: '3 -> 2 (-1) -> 3 (+1)',
  364: '2 -> 3 (+1) -> 0 (-3)',
  365: '3 -> 0 (-3) -> 3 (+3)',
  368: '6 -> 8 (+2) -> 6 (-2)',
  371: '4 -> 2 (-2) -> 7 (+5)',
  373: '7 -> 11 (+4) -> 2 (-9)',
  374: '11 -> 2 (-9) -> 10 (+8)',
  375: '2 -> 10 (+8) -> 7 (-3)',
  376: '10 -> 7 (-3) -> 11 (+4)',
  377: '7 -> 11 (+4) -> 6 (-5)',
  378: '11 -> 6 (-5) -> 15 (+9)',
  379: '6 -> 15 (+9) -> 2 (-13)',
  380: '15 -> 2 (-13) -> 16 (+14)',
  381: '2 -> 16 (+14) -> 4 (-12)',
  385: '4 -> 1 (-3) -> 3 (+2)'
}
assert.equal(tally.swing, 22, 'TWENTY-TWO swings the honest churn rides')
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, `the swell F${f} the arc rides`)
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, `the fade F${f} the arc rides`)
}
for (const [f, arc] of Object.entries(SWINGS)) {
  assert.equal(w(Number(f)), SWING + arc + SWING_TAIL, `the swing F${f} the arc rides`)
}
for (const f of [357, 358, 382, 383, 384]) {
  assert.equal(w(f), null, `the silence F${f} the held law keeps - the row never invents`)
}

// THE SILENCE SEATS - the PAIR the faces 357/358 hold (the shared
// face 358 the count 9 the pair's own seat) + THE TRIPLE SILENCE RUN
// the faces 382/383/384's own windows the longest drought this book
// holds (the plateau 16 -> 4 -> 4 -> 4 -> 1 the breath's own rest)
const silenceRun = []
let run = []
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f) === 'silence') run.push(f)
  else { if (run.length > silenceRun.length) silenceRun.splice(0, silenceRun.length, ...run); run = [] }
}
if (run.length > silenceRun.length) silenceRun.splice(0, silenceRun.length, ...run)
assert.deepEqual(silenceRun, [382, 383, 384], 'the longest silence run the faces 382/383/384 hold - the TRIPLE the plateau rides')
assert.equal(P[357], 9, 'the shared face 357 the count 9 the pair 357/358 rides')

// THE FADES CHAIN IN TWOS - the PAIR 361/362 + the PAIR 369/370 (no
// triple the spread rides)
const fadeRuns = []
run = []
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f) === 'fade') run.push(f)
  else { if (run.length) fadeRuns.push(run); run = [] }
}
if (run.length) fadeRuns.push(run)
assert.deepEqual(fadeRuns, [[361, 362], [369, 370]], 'the FOUR fades chain in twos - the two pairs the honest spread rides')

// THE SWELL PAIR - the faces 366/367 hold the only back-to-back
// swell chain (the drought's own exit the recovery climb prices)
const swellRuns = []
run = []
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f) === 'swell') run.push(f)
  else { if (run.length) swellRuns.push(run); run = [] }
}
if (run.length) swellRuns.push(run)
assert.deepEqual(swellRuns, [[351], [356], [366, 367], [372], [386]], 'the SIX swells hold ONE pair (366/367) + four solos')

// THE THREE ROUND TRIPS - the faces 363/365/368 hold (3 -> 2 (-1) ->
// 3 (+1), 3 -> 0 (-3) -> 3 (+3), 6 -> 8 (+2) -> 6 (-2) - the swings'
// own mirrors the raw hop's zero the mirror beside)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [363, 365, 368], 'the THREE round trips the faces 363/365/368 hold')

// THE TOP THE COUNT 23 - rode ONCE the face 353's own crest holds
// (THE STORM the book holds)
assert.equal(Math.max(...Object.values(P)), 23, 'the birth top the count 23 the storm rides')
let topRode = 0
const topFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 23) { topRode++; topFaces.push(f) } }
assert.equal(topRode, 1, 'the top rode ONCE the crest holds')
assert.deepEqual(topFaces, [353], "the face 353 the storm's own seat rides")

// THE TWO DROUGHTS - the zero rode TWICE (the faces 354/364's own
// floors hold)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.deepEqual(zeroFaces, [354, 364], 'THE TWO DROUGHTS the faces 354/364 hold - the zero rode TWICE')
assert.equal(Math.min(...Object.values(P)), 0, 'the birth floor the count zero the honest floor rides')

// THE STORM'S OWN FULL ROUND TRIP - the face 354's own window the
// spike's own arrival AND exit in ONE window
assert.equal(w(354), SWING + '1 -> 23 (+22) -> 0 (-23)' + SWING_TAIL, "the storm's own full round trip the face 354's own window holds")

// THE BOUNDS - the +22 the max rise rode TWO legs ONE boundary (the
// boundary 352/353 - THE STORM'S OWN CLIMB the crest 23 the climb
// prices), the -23 the max fall rode TWO legs ONE boundary (the
// boundary 353/354 - THE STORM'S OWN DRAIN the fall from the crest)
const steps = []
for (let f = 350; f <= 386; f++) { steps.push(P[f - 1] - P[f - 2]); steps.push(P[f] - P[f - 1]) }
assert.equal(Math.max(...steps), 22, 'the birth max rise +22 the bound holds')
assert.equal(Math.min(...steps), -23, 'the birth max fall -23 the bound holds')
assert.equal(steps.filter(s => s === 22).length, 2, "the +22 rode TWO legs ONE boundary the storm's own climb holds")
assert.equal(steps.filter(s => s === -23).length, 2, "the -23 rode TWO legs ONE boundary the storm's own drain holds")
assert.equal(P[353] - P[352], 22, "the storm's own climb the boundary 352/353 rides - the crest 23 the climb prices")
assert.equal(P[354] - P[353], -23, "the storm's own drain the boundary 353/354 rides - the fall from the crest the drain prices")

// THE LAST WORD - the face 386's own window the swell (the birth
// closer the tail rides out on)
assert.equal(w(386), SWELL + '1 -> 3 (+2) -> 9 (+6)' + SWELL_TAIL, 'the last word the swell rides')

// THE WHOLE-CACHE SEAT 387u - the face 431's own 37u the newest add
// rides (the W431 window the swing the nearest-completed law holds -
// the absent 428 and the cancelled 424 the honest gaps ride; the
// W427 window the swing the mirror beside; the W387 window the swell
// the post field holds; the face 347's own 4u the pre-field face
// beside)
const E = {}
E[347] = 4
E[387] = 15
E[388] = 3
E[389] = 5
E[417] = 3
E[418] = 13
E[420] = 13
E[421] = 6
E[422] = 7
E[423] = 1
E[425] = 6
E[426] = 3
E[427] = 7
E[429] = 4
E[430] = 3
E[431] = 37
let postSum = 0
for (const f of [387, 388, 389, 417, 418, 420, 421, 422, 423, 425, 426, 427, 429, 430, 431]) postSum += E[f]
assert.equal(257 + E[347] + postSum, 387, "the whole-cache 387u the face 431's own 37u the newest add rides")
const ALL = { ...P, ...E }
const allVals = Object.values(ALL)
assert.equal(Math.max(...allVals), 37, 'THE WHOLE-CACHE TOP THE COUNT 37 the face 431 rides')
const wholeTopFaces = Object.keys(ALL).filter(f => ALL[f] === 37)
assert.deepEqual(wholeTopFaces, ['431'], "the face 431 the whole-cache storm's own seat rides")
const ew = (f, T) => smeltDryGambleTrendRow({ back: { smeltDryGambles: T[f - 2] }, prev: { smeltDryGambles: T[f - 1] }, cur: { smeltDryGambles: T[f] } })
// the W431 window the swing 4 -> 3 (-1) -> 37 (+34) MY WORD'S OWN
// FIRST LIVE READ - the nearest-completed law holds
assert.equal(ew(431, E), SWING + '4 -> 3 (-1) -> 37 (+34)' + SWING_TAIL, "the W431 window the swing rides - MY WORD'S OWN FIRST LIVE READ the nearest-completed law holds")
// the W427 window the swing 6 -> 3 (-3) -> 7 (+4) the mirror beside
assert.equal(ew(427, E), SWING + '6 -> 3 (-3) -> 7 (+4)' + SWING_TAIL, 'the W427 window the swing rides')
// the W422 window the swing 13 -> 6 (-7) -> 7 (+1) the mirror beside
assert.equal(ew(422, E), SWING + '13 -> 6 (-7) -> 7 (+1)' + SWING_TAIL, 'the W422 window the swing rides')
// the W423 window the swing 6 -> 7 (+1) -> 1 (-6) the mirror beside
assert.equal(ew(423, E), SWING + '6 -> 7 (+1) -> 1 (-6)' + SWING_TAIL, 'the W423 window the swing rides')
// the W387 window the swell 3 -> 9 (+6) -> 15 (+6) the post field
// holds (the faces 385/386 the birth field's own tail rides - the
// merged table the window's own seat prices)
assert.equal(ew(387, ALL), SWELL + '3 -> 9 (+6) -> 15 (+6)' + SWELL_TAIL, 'the W387 window the swell rides')
// the W388 window the swing 9 -> 15 (+6) -> 3 (-12) the mirror beside
assert.equal(ew(388, ALL), SWING + '9 -> 15 (+6) -> 3 (-12)' + SWING_TAIL, 'the W388 window the swing rides')
// the W389 window the swing 15 -> 3 (-12) -> 5 (+2) the mirror beside
assert.equal(ew(389, ALL), SWING + '15 -> 3 (-12) -> 5 (+2)' + SWING_TAIL, 'the W389 window the swing rides')

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(smeltDryGambleTrendRow({ back: { smeltDryGambles: 1 }, prev: { smeltDryGambles: 2 }, cur: { smeltDryGambles: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(smeltDryGambleTrendRow({ back: { smeltDryGambles: 3 }, prev: { smeltDryGambles: 2 }, cur: { smeltDryGambles: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(smeltDryGambleTrendRow({ back: { smeltDryGambles: 1 }, prev: { smeltDryGambles: 3 }, cur: { smeltDryGambles: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(smeltDryGambleTrendRow({ back: { smeltDryGambles: 2 }, prev: { smeltDryGambles: 2 }, cur: { smeltDryGambles: 3 } }), null)
assert.equal(smeltDryGambleTrendRow({ back: { smeltDryGambles: 2 }, prev: { smeltDryGambles: 3 }, cur: { smeltDryGambles: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole (the two
// droughts the zero seats price)
assert.equal(smeltDryGambleTrendRow({ back: { smeltDryGambles: 0 }, prev: { smeltDryGambles: 1 }, cur: { smeltDryGambles: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(smeltDryGambleTrendRow({ back: { smeltDryGambles: 0 }, prev: { smeltDryGambles: 0 }, cur: { smeltDryGambles: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(smeltDryGambleTrendRow(null), null)
assert.equal(smeltDryGambleTrendRow(undefined), null)
assert.equal(smeltDryGambleTrendRow('junk'), null)
assert.equal(smeltDryGambleTrendRow(42), null)
assert.equal(smeltDryGambleTrendRow([]), null)
assert.equal(smeltDryGambleTrendRow({}), null)
assert.equal(smeltDryGambleTrendRow({ back: { smeltDryGambles: 1 }, prev: { smeltDryGambles: 2 } }), null)
assert.equal(smeltDryGambleTrendRow({ back: { smeltDryGambles: 1 }, cur: { smeltDryGambles: 2 } }), null)
assert.equal(smeltDryGambleTrendRow({ prev: { smeltDryGambles: 1 }, cur: { smeltDryGambles: 2 } }), null)
assert.equal(smeltDryGambleTrendRow({ back: { smeltDryGambles: 1 }, prev: { smeltDryGambles: 2 }, cur: { smeltDryGambles: -1 } }), null)
assert.equal(smeltDryGambleTrendRow({ back: { smeltDryGambles: 1.5 }, prev: { smeltDryGambles: 2 }, cur: { smeltDryGambles: 3 } }), null)
assert.equal(smeltDryGambleTrendRow({ back: { other: 1 }, prev: { smeltDryGambles: 2 }, cur: { smeltDryGambles: 3 } }), null)
assert.equal(smeltDryGambleTrendConsistent({ back: { smeltDryGambles: 0 }, prev: { smeltDryGambles: 0 }, cur: { smeltDryGambles: 0 } }), true)
assert.equal(smeltDryGambleTrendConsistent({ back: { smeltDryGambles: 5 }, prev: { smeltDryGambles: 9 }, cur: { smeltDryGambles: 2 }, spare: true }), true)
assert.equal(smeltDryGambleTrendConsistent(null), false)
assert.equal(smeltDryGambleTrendConsistent(undefined), false)
assert.equal(smeltDryGambleTrendConsistent('junk'), false)
assert.equal(smeltDryGambleTrendConsistent([]), false)
assert.equal(smeltDryGambleTrendConsistent({ back: { smeltDryGambles: 1 }, prev: { smeltDryGambles: 2 }, cur: { smeltDryGambles: NaN } }), false)

// THE CELL'S OWN READ - the real smelt dry gamble lines ride (the
// BRACKET voice the smelt attempt prints only - every line the shape
// prints rides, the item token never splits - the line's own count
// rides whole whatever the item's name)
assert.equal(smeltDryGambles([
  '[F6] smelt: pocket and commons dry on sand - one machine gamble (the live rows decide)',
  '[F8] smelt: pocket and commons dry on cobblestone - one machine gamble (the live rows decide)',
  '[F8] smelt: pocket and commons dry on oak_log - one machine gamble (the live rows decide)',
  '[F9] smelt: pocket and commons dry on birch_log - one machine gamble (the live rows decide)'
]), 4)
assert.equal(smeltDryGambles([
  '[F19] smelt: pocket and commons dry on oak_log - one machine gamble (the live rows decide)'
]), 1)
// the item token never splits - the underscore and the space items
// the same shape's own skins ride
assert.equal(smeltDryGambles([
  '[F11] smelt: pocket and commons dry on birch_log - one machine gamble (the live rows decide)',
  '[F10] smelt: pocket and commons dry on oak_log - one machine gamble (the live rows decide)'
]), 2)
// THE BANK LANE'S OWN SMELT-HOLD SKIP never rides - the pocket-side
// drought a different lane (the bank colon's own book prices beside)
assert.equal(smeltDryGambles(['F9 bank: smelt hold skipped - no fuel in pocket (coal 0)']), 0)
// THE FUEL COMMONS' OWN VERDICTS never ride - the commons-side
// drought a different lane (the docket's own book prices beside)
assert.equal(smeltDryGambles(['F9 fuel commons: chest holds no fuel at [-152,65,407]']), 0)
assert.equal(smeltDryGambles(['F4 fuel commons: the last mile stands down (d=15.0 beyond the gate at 10 - the walk that cannot arrive should never rent the clock)']), 0)
assert.equal(smeltDryGambles(['F9 fuel commons: the anchor chest is read first']), 0)
// THE SMELT REFUSAL CENSUS never rides - the one-per-run census row
// the ledger's own book prices beside
assert.equal(smeltDryGambles(['smelt refusal census: no fuel 19, machine unreachable 9, busy 3 of 33 refused attempts - the smelt chain names its tax']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(smeltDryGambles(['[F1] sweep deferred (the lanes hold) - the 12s cooldown outlives the census clock (2 machine(s) untried, the next pass owns them)']), 0)
assert.equal(smeltDryGambles(['F3 [F3] raw hop failed: raw walk stalled after 2035ms (d=6.6) - pathfinder retry']), 0)
assert.equal(smeltDryGambles(['F14 final bank budget: flow-priced 300676s (fleet bankable pocket 2088u (raw 2533u) at 0.0u/s needs 300676s) - clamped to 300s (the kill margin)']), 0)
assert.equal(smeltDryGambles(['write-off whys: night carries 690u of 1052u (65.6%) - the dark holds the walks - the dusk bank is the front']), 0)
// the bare skin never rides - no such emitter voice (the smelt
// attempt prints the bracket form only - zero untagged lines the
// whole cache holds)
assert.equal(smeltDryGambles(['F6 smelt: pocket and commons dry on sand - one machine gamble (the live rows decide)']), 0)
// the no-shape junk line never rides - the shape's own proof the RE
// demands
assert.equal(smeltDryGambles(['[F6] smelt: pocket and commons dry on sand - one machine gamble']), 0)
assert.equal(smeltDryGambles(['[F6] smelt: pocket and commons dry on sand']), 0)
assert.equal(smeltDryGambles(['[F6] smelt: pocket and commons dry']), 0)
assert.equal(smeltDryGambles(['[F6] smelt: pocket and commons dry on sand - one machine gamble (the live rows decide now)']), 0)
assert.equal(smeltDryGambles(['[F6] smelt: pocket dry on sand - one machine gamble (the live rows decide)']), 0)
assert.equal(smeltDryGambles(['[F6] smelt: pocket and commons full on sand - one machine gamble (the live rows decide)']), 0)

// the defensive reads
assert.equal(smeltDryGambles(null), 0)
assert.equal(smeltDryGambles(undefined), 0)
assert.equal(smeltDryGambles('junk'), 0)
assert.equal(smeltDryGambles(42), 0)
assert.equal(smeltDryGambles([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  '[F6] smelt: pocket and commons dry on sand - one machine gamble (the live rows decide)',
  '[F8] smelt: pocket and commons dry on cobblestone - one machine gamble (the live rows decide)',
  '[F8] smelt: pocket and commons dry on oak_log - one machine gamble (the live rows decide)',
  '[F9] smelt: pocket and commons dry on birch_log - one machine gamble (the live rows decide)',
  '[F19] smelt: pocket and commons dry on oak_log - one machine gamble (the live rows decide)'
]
assert.equal(smeltDryGambles(lines), 5)
const fold = { back: { smeltDryGambles: smeltDryGambles(lines) }, prev: { smeltDryGambles: 3 }, cur: { smeltDryGambles: 37 } }
assert.equal(smeltDryGambleTrendRow(fold), SWING + '5 -> 3 (-2) -> 37 (+34)' + SWING_TAIL)

console.log('smeltdrygambletrend.test: all pins green')
