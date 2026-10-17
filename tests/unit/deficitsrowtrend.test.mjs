// tests/unit/deficitsrowtrend.test.mjs - THE DEFICITS ROW'S OWN TREND's
// own pin battery (v0.976.199): the materials plan's own tick mass across
// the faces the field's own scan named first (the 'deficits: <slots>'
// family - the plan's own anonymous five-slot board the tick cadence
// prints) - the field's own chains byte-exact (THE CELL'S OWN WEIGHT
// 4949u the ninety-five faces' own total, THE BIRTH FIELD 2073u the
// thirty-nine faces' own total, THE FIELD'S OWN TOP THE COUNT 64 rode
// ONCE the face 379's own crest - THE STORM, THE FIELD'S OWN FLOOR THE
// COUNT 42 rode ONCE the face 359's own floor - THE NO-DROUGHT BIRTH the
// zero never rode), the field book THIRTY-ONE of THIRTY-SEVEN speaking
// (NINETEEN swings, TEN swells, TWO fades, the SIX honest silences - THE
// QUAD SILENCE RUN 353..356 THE RECORD + the end-pair 384/385) beside the
// whole-cache book EIGHTY-ONE of NINETY-THREE speaking (FIFTY swings,
// EIGHTEEN swells, THIRTEEN fades, TWELVE silences), THE FIVE-SWING RUN
// 360..364 THE RECORD THE FIELD RIDES (the quad 368..371, the triple
// 373..375, the pairs 357/358 + 380/381), THE SWELL TRIPLE 365..367, THE
// SWELL PAIRS 378/379 + 382/383, THE TWO FADE SOLOS 359/376, THE ROUND
// TRIP the W374 window the weight-12 mirror (58 -> 46 (-12) -> 58 (+12)),
// the bounds' own legs pins (the +21 rode ONE leg ONE boundary the
// boundary 359/360 - THE FLOOR'S OWN CLIMB, the -21 rode ONE leg ONE
// boundary the boundary 379/380 - THE STORM'S OWN DRAIN - the mirror
// weight the field prices), the storm windows W379 THE STORM'S OWN
// ARRIVAL + W380 THE CLIMB AND DRAIN, the last field word the face 386's
// own window the swell (55 -> 57 (+2) -> 63 (+6)), the whole-cache pins
// (the 4949u over the ninety-five faces, the whole-cache top the same
// storm 64 rode ONCE, the whole-cache floor the count 8 rode TWICE the
// faces 346/396's own eights, the W435 window the fade 59 -> 58 (-1) ->
// 49 (-9) MY WORD'S OWN FIRST LIVE READ, the W433/W434 windows the
// silences, the W420 window THE GAP-CROSSING FADE + the W421 window THE
// GAP-CROSSING SWING the absent 419 the windows cross, the W419 window
// never rides, the W415 weight-7 + the W423 weight-1 mirrors, the whole-
// cache bounds the +54 ONE leg ONE boundary 346/347 - THE EIGHT'S OWN
// CLIMB + the -49 ONE leg ONE boundary 345/346 - THE EIGHT'S OWN
// ARRIVAL), the whole-cache runs (the four quad swing runs 404..407 +
// 412..415 + 421..424 + 427..430, the pairs 344/345 + 347/348 + 387/388 +
// 390/391, the swell pairs 392/393 + 398/399, the fade pairs 395/396 +
// 425/426), the storm windows the whole cache prices beside, the
// whole-cache window count NINETY-THREE (the W419 window the absent
// face's own honest gap), the storm windows never split, the storm's own
// shape never re-summed - the REUSE LAW (deficitsCensus's own rows cell
// the fold rides - one-parser law, never a fork; the plan top's named
// board and the map-trip lines and the pulse header and the mem lines
// never ride - the lanes never merge; the torn row never rides - the
// census's own unparsed law; the deficit row's own zero a lawful count)
import assert from 'node:assert'
import { deficitsRowTrendConsistent, deficitsRowTrendRow } from '../../src/lib/deficitsrowtrend.mjs'
import { deficitsCensus } from '../../src/lib/deficitrow.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, this word prices the deficits row's own mass across the faces - the deficits row seat, co-existence by seat never by duplication)"

const HEAD = 'the deficits row trend (v0.976.199)'
const SWING = HEAD + ": the row's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the row's rise ran two steps deep - "
const SWELL_TAIL = " - the row's own swell " + TAIL
const FADE = HEAD + ": the row's fall ran two steps deep - "
const FADE_TAIL = " - the row's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the census's own
// rows arithmetic, THIRTY-NINE faces deep) - THE BIRTH FIELD 2073u the
// faces' own total, THE FIELD'S OWN TOP THE COUNT 64 rode ONCE (the
// face 379's own crest - THE STORM), THE FIELD'S OWN FLOOR THE COUNT
// 42 rode ONCE (the face 359's own floor) - THE NO-DROUGHT BIRTH the
// zero never rode
const P = {}
P[348] = 53
P[349] = 49
P[350] = 50
P[351] = 55
P[352] = 52
P[353] = 52
P[354] = 52
P[355] = 52
P[356] = 48
P[357] = 56
P[358] = 54
P[359] = 42
P[360] = 63
P[361] = 46
P[362] = 56
P[363] = 43
P[364] = 48
P[365] = 53
P[366] = 58
P[367] = 59
P[368] = 56
P[369] = 60
P[370] = 43
P[371] = 50
P[372] = 58
P[373] = 46
P[374] = 58
P[375] = 52
P[376] = 48
P[377] = 60
P[378] = 63
P[379] = 64
P[380] = 43
P[381] = 49
P[382] = 52
P[383] = 55
P[384] = 55
P[385] = 57
P[386] = 63
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 2073, "the birth field 2073u the hand-off holds - THE DEFICITS ROW'S OWN SEAT rides")
assert.equal(Math.max(...Object.values(P)), 64, "THE STORM the count 64 the face 379's own crest rides - the top rode ONCE")
assert.equal(Object.values(P).filter(v => v === 64).length, 1, 'the top rode ONCE the honest crest the book holds')
assert.equal(Math.min(...Object.values(P)), 42, "the floor the count 42 the face 359's own floor rides")
assert.equal(Object.values(P).filter(v => v === 42).length, 1, 'the floor rode ONCE the honest trough the book holds')
assert.equal(Object.values(P).filter(v => v === 0).length, 0, 'THE NO-DROUGHT BIRTH the zero never rode the thirty-nine faces')
const w = (f) => deficitsRowTrendRow({ back: { rows: P[f - 2] }, prev: { rows: P[f - 1] }, cur: { rows: P[f] } })

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
// classification (NINETEEN swings, TEN swells, TWO fades, the SIX
// honest silences - THIRTY-ONE of THIRTY-SEVEN speaking: the tick
// board's own cadence holds steps the climb lanes never hold)
const SWELLS = {
  351: '49 -> 50 (+1) -> 55 (+5)',
  365: '43 -> 48 (+5) -> 53 (+5)',
  366: '48 -> 53 (+5) -> 58 (+5)',
  367: '53 -> 58 (+5) -> 59 (+1)',
  372: '43 -> 50 (+7) -> 58 (+8)',
  378: '48 -> 60 (+12) -> 63 (+3)',
  379: '60 -> 63 (+3) -> 64 (+1)',
  382: '43 -> 49 (+6) -> 52 (+3)',
  383: '49 -> 52 (+3) -> 55 (+3)',
  386: '55 -> 57 (+2) -> 63 (+6)'
}
const FADES = {
  359: '56 -> 54 (-2) -> 42 (-12)',
  376: '58 -> 52 (-6) -> 48 (-4)'
}
const SWINGS = {
  350: '53 -> 49 (-4) -> 50 (+1)',
  352: '50 -> 55 (+5) -> 52 (-3)',
  357: '52 -> 48 (-4) -> 56 (+8)',
  358: '48 -> 56 (+8) -> 54 (-2)',
  360: '54 -> 42 (-12) -> 63 (+21)',
  361: '42 -> 63 (+21) -> 46 (-17)',
  362: '63 -> 46 (-17) -> 56 (+10)',
  363: '46 -> 56 (+10) -> 43 (-13)',
  364: '56 -> 43 (-13) -> 48 (+5)',
  368: '58 -> 59 (+1) -> 56 (-3)',
  369: '59 -> 56 (-3) -> 60 (+4)',
  370: '56 -> 60 (+4) -> 43 (-17)',
  371: '60 -> 43 (-17) -> 50 (+7)',
  373: '50 -> 58 (+8) -> 46 (-12)',
  374: '58 -> 46 (-12) -> 58 (+12)',
  375: '46 -> 58 (+12) -> 52 (-6)',
  377: '52 -> 48 (-4) -> 60 (+12)',
  380: '63 -> 64 (+1) -> 43 (-21)',
  381: '64 -> 43 (-21) -> 49 (+6)'
}
const SILENT = [353, 354, 355, 356, 384, 385]

// every named window byte-exact
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, `the W${f} swell byte-exact`)
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, `the W${f} fade byte-exact`)
}
for (const [f, arc] of Object.entries(SWINGS)) {
  assert.equal(w(Number(f)), SWING + arc + SWING_TAIL, `the W${f} swing byte-exact`)
}
for (const f of SILENT) {
  assert.equal(w(f), null, `the W${f} window the honest silence - the bars never invent`)
}

// the field's own tally - the book the hand priced (19 swings, 10
// swells, 2 fades, 6 silences - 31 of 37 speaking)
const tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) tally[tallyWindow(f, P)]++
assert.deepEqual(tally, { swing: 19, swell: 10, fade: 2, silence: 6 }, 'the field book THIRTY-ONE of THIRTY-SEVEN speaking')

// THE RUNS - the same-shape chains the book rides
const runOf = (shape, lo, hi) => {
  const faces = []
  for (let f = lo; f <= hi; f++) {
    if (tallyWindow(f, P) !== shape) return []
    faces.push(f)
  }
  return faces
}
// THE FIVE-SWING RUN 360..364 - THE RECORD THE FIELD RIDES
assert.deepEqual(runOf('swing', 360, 364), [360, 361, 362, 363, 364], 'THE FIVE-SWING RUN the faces 360..364 THE RECORD')
// the quad 368..371 and the triple 373..375 and the pairs 357/358 + 380/381
assert.deepEqual(runOf('swing', 368, 371), [368, 369, 370, 371], 'the quad swing run 368..371')
assert.deepEqual(runOf('swing', 373, 375), [373, 374, 375], 'the triple swing run 373..375')
assert.deepEqual(runOf('swing', 357, 358), [357, 358], 'the swing pair 357/358')
assert.deepEqual(runOf('swing', 380, 381), [380, 381], 'the swing pair 380/381')
// the run's own edges - the record never stretches
assert.notEqual(tallyWindow(359, P), 'swing', 'the run never stretches back (W359 the fade)')
assert.notEqual(tallyWindow(365, P), 'swing', 'the run never stretches forward (W365 the swell)')
// THE SWELL TRIPLE 365..367 + the pairs 378/379 + 382/383 (the solos beside)
assert.deepEqual(runOf('swell', 365, 367), [365, 366, 367], 'THE SWELL TRIPLE the faces 365..367')
assert.deepEqual(runOf('swell', 378, 379), [378, 379], 'the swell pair 378/379')
assert.deepEqual(runOf('swell', 382, 383), [382, 383], 'the swell pair 382/383')
assert.notEqual(tallyWindow(364, P), 'swell', 'the swell triple never stretches back (W364 the swing)')
assert.notEqual(tallyWindow(368, P), 'swell', 'the swell triple never stretches forward (W368 the swing)')
// THE TWO FADE SOLOS 359/376 (the fade run the field never rode)
assert.equal(tallyWindow(359, P), 'fade', 'the fade solo W359')
assert.equal(tallyWindow(376, P), 'fade', 'the fade solo W376')
assert.notEqual(tallyWindow(358, P), 'fade', 'the fade never chains back (W358 the swing)')
assert.notEqual(tallyWindow(360, P), 'fade', 'the fade never chains forward (W360 the swing)')
// THE QUAD SILENCE RUN 353..356 THE RECORD + the end-pair 384/385
assert.deepEqual(runOf('silence', 353, 356), [353, 354, 355, 356], 'THE QUAD SILENCE RUN the faces 353..356 THE RECORD')
assert.deepEqual(runOf('silence', 384, 385), [384, 385], 'the silence end-pair 384/385')
assert.notEqual(tallyWindow(352, P), 'silence', 'the silence run never stretches back (W352 the swing)')
assert.notEqual(tallyWindow(357, P), 'silence', 'the silence run never stretches forward (W357 the swing)')

// THE ROUND TRIP - the W374 window the weight-12 mirror (58 -> 46
// (-12) -> 58 (+12)) - THE FIELD'S OWN FULL ROUND TRIP
{
  const a = P[372], b = P[373], c = P[374]
  assert.equal(b - a, -12, 'the W374 window the first leg -12')
  assert.equal(c - b, 12, 'the W374 window the second leg +12')
  assert.equal(b - a, -(c - b), 'the weight-12 mirror the round trip rides')
  assert.equal(w(374), SWING + '58 -> 46 (-12) -> 58 (+12)' + SWING_TAIL, 'the W374 round trip byte-exact')
}
// the field's other swings never mirror (the round trip rode ONCE)
let fieldRt = 0
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f, P) !== 'swing') continue
  const a = P[f - 2], b = P[f - 1], c = P[f]
  if (b - a !== 0 && b - a === -(c - b)) fieldRt++
}
assert.equal(fieldRt, 1, 'the round trip rode ONCE the field holds')

// THE BOUNDS' OWN LEGS - the +21 the max rise rode ONE leg ONE
// boundary (the boundary 359/360 - THE FLOOR'S OWN CLIMB), the -21
// the max fall rode ONE leg ONE boundary (the boundary 379/380 -
// THE STORM'S OWN DRAIN) - the mirror weight the field prices
{
  let maxRise = null, maxFall = null, riseLegs = 0, fallLegs = 0
  for (let n = 348; n < 386; n++) {
    const d = P[n + 1] - P[n]
    if (d > 0) { if (!maxRise || d > maxRise) maxRise = d; if (d === 21) riseLegs++ }
    if (d < 0) { if (!maxFall || d < maxFall) maxFall = d; if (d === -21) fallLegs++ }
  }
  assert.equal(maxRise, 21, 'the max rise the +21 rides')
  assert.equal(maxFall, -21, 'the max fall the -21 rides')
  assert.equal(riseLegs, 1, 'the +21 rode ONE leg ONE boundary 359/360 - THE FLOOR\'S OWN CLIMB')
  assert.equal(fallLegs, 1, 'the -21 rode ONE leg ONE boundary 379/380 - THE STORM\'S OWN DRAIN')
  assert.equal(maxRise, -maxFall, 'THE MIRROR WEIGHT the field prices (the +21 and the -21 the same weight)')
  assert.equal(P[359], 42, 'the floor the climb departs from - 42 -> 63')
  assert.equal(P[379], 64, 'the storm the drain departs from - 64 -> 43')
}

// THE STORM WINDOWS - the W379 window the swell THE STORM'S OWN
// ARRIVAL + the W380 window the swing THE STORM'S OWN CLIMB AND
// DRAIN in ONE window
assert.equal(w(379), SWELL + '60 -> 63 (+3) -> 64 (+1)' + SWELL_TAIL, "the W379 window THE STORM'S OWN ARRIVAL byte-exact")
assert.equal(w(380), SWING + '63 -> 64 (+1) -> 43 (-21)' + SWING_TAIL, "the W380 window THE STORM'S OWN CLIMB AND DRAIN byte-exact")

// the last field word - the face 386's own window the swell (55 ->
// 57 (+2) -> 63 (+6) - the storm's own after-tail the exit prices)
assert.equal(w(386), SWELL + '55 -> 57 (+2) -> 63 (+6)' + SWELL_TAIL, 'the last field word the W386 swell byte-exact')

// THE WHOLE-CACHE SEAT - the ninety-five faces the cache holds
// (340..435 minus the absent 419 - the honest gap), the whole-cache
// book EIGHTY-ONE of NINETY-THREE speaking
const C = {}
C[340] = 45; C[341] = 59; C[342] = 54; C[343] = 45; C[344] = 60; C[345] = 57; C[346] = 8; C[347] = 62
C[348] = 53; C[349] = 49; C[350] = 50; C[351] = 55; C[352] = 52; C[353] = 52; C[354] = 52; C[355] = 52
C[356] = 48; C[357] = 56; C[358] = 54; C[359] = 42; C[360] = 63; C[361] = 46; C[362] = 56; C[363] = 43
C[364] = 48; C[365] = 53; C[366] = 58; C[367] = 59; C[368] = 56; C[369] = 60; C[370] = 43; C[371] = 50
C[372] = 58; C[373] = 46; C[374] = 58; C[375] = 52; C[376] = 48; C[377] = 60; C[378] = 63; C[379] = 64
C[380] = 43; C[381] = 49; C[382] = 52; C[383] = 55; C[384] = 55; C[385] = 57; C[386] = 63; C[387] = 54
C[388] = 59; C[389] = 63; C[390] = 47; C[391] = 56; C[392] = 57; C[393] = 58; C[394] = 50; C[395] = 49
C[396] = 8; C[397] = 52; C[398] = 55; C[399] = 60; C[400] = 47; C[401] = 39; C[402] = 45; C[403] = 56
C[404] = 38; C[405] = 59; C[406] = 41; C[407] = 56; C[408] = 57; C[409] = 45; C[410] = 45; C[411] = 61
C[412] = 49; C[413] = 54; C[414] = 47; C[415] = 54; C[416] = 58; C[417] = 58; C[418] = 55; C[420] = 53
C[421] = 58; C[422] = 57; C[423] = 58; C[424] = 55; C[425] = 54; C[426] = 44; C[427] = 47; C[428] = 40
C[429] = 59; C[430] = 56; C[431] = 48; C[432] = 59; C[433] = 59; C[434] = 58; C[435] = 49
const cachedFaces = Object.keys(C).map(Number).sort((a, b) => a - b)
assert.equal(cachedFaces.length, 95, 'the ninety-five faces the cache holds')
assert.equal(cachedFaces.includes(419), false, 'the absent 419 the honest gap the cache holds not')
let wholeSum = 0
for (const f of cachedFaces) wholeSum += C[f]
assert.equal(wholeSum, 4949, 'the whole-cache 4949u the ninety-five faces ride')
// the whole-cache extremes
assert.equal(Math.max(...Object.values(C)), 64, 'the whole-cache top the count 64 - THE SAME STORM the face 379 rides')
assert.equal(Object.values(C).filter(v => v === 64).length, 1, 'the whole-cache top rode ONCE')
assert.equal(Math.min(...Object.values(C)), 8, 'the whole-cache floor the count 8 the tick-starved faces ride')
assert.deepEqual(cachedFaces.filter(f => C[f] === 8), [346, 396], "the floor rode TWICE - the faces 346/396's own eights")
assert.equal(Object.values(C).filter(v => v === 0).length, 0, 'the whole cache the zero never rode - the no-drought cache')
// the newest adds
assert.equal(C[433], 59, "the face 433's own 59u rides")
assert.equal(C[434], 58, "the face 434's own 58u rides")
assert.equal(C[435], 49, "the face 435's own 49u the newest add rides")
// the whole-cache windows - NINETY-THREE over the cached sequence
// (the windows ride the CACHED SEQUENCE's own positions - the absent
// 419 the honest gap the windows cross, the face-number arithmetic
// never prices the gap)
const posOf = new Map(cachedFaces.map((f, i) => [f, i]))
const wc = (f) => {
  const i = posOf.get(f)
  return deficitsRowTrendRow({ back: { rows: C[cachedFaces[i - 2]] }, prev: { rows: C[cachedFaces[i - 1]] }, cur: { rows: C[cachedFaces[i]] } })
}
const wcShape = (f) => {
  const i = posOf.get(f)
  const a = C[cachedFaces[i - 2]], b = C[cachedFaces[i - 1]], c = C[cachedFaces[i]]
  const first = b - a, second = c - b
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}
let wholeWindows = 0
const wholeTally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let i = 2; i < cachedFaces.length; i++) {
  const f = cachedFaces[i]
  wholeWindows++
  wholeTally[wcShape(f)]++
}
assert.equal(wholeWindows, 93, 'NINETY-THREE windows the whole cache prices')
assert.deepEqual(wholeTally, { swing: 50, swell: 18, fade: 13, silence: 12 }, 'the whole-cache book EIGHTY-ONE of NINETY-THREE speaking')
// the whole-cache runs - the four quad swing runs the post field prices
const wholeRun = (shape, faces) => faces.every(f => wcShape(f) === shape)
assert.ok(wholeRun('swing', [404, 405, 406, 407]), 'the quad swing run 404..407')
assert.ok(wholeRun('swing', [412, 413, 414, 415]), 'the quad swing run 412..415')
assert.ok(wholeRun('swing', [421, 422, 423, 424]), 'the quad swing run 421..424')
assert.ok(wholeRun('swing', [427, 428, 429, 430]), 'the quad swing run 427..430')
assert.ok(wholeRun('swing', [344, 345]) && wholeRun('swing', [347, 348]) && wholeRun('swing', [387, 388]) && wholeRun('swing', [390, 391]), 'the swing pairs 344/345 + 347/348 + 387/388 + 390/391')
assert.ok(wholeRun('swell', [392, 393]) && wholeRun('swell', [398, 399]), 'the swell pairs 392/393 + 398/399')
assert.ok(wholeRun('fade', [395, 396]) && wholeRun('fade', [425, 426]), 'the fade pairs 395/396 + 425/426')
// the quad never stretches (the W403 swing breaks, the W408 swing breaks)
assert.ok(!wholeRun('swing', [403, 404, 405, 406, 407]) && !wholeRun('swing', [404, 405, 406, 407, 408]), 'the quad runs never stretch (the boundaries the tally prices)')
// the newest windows - MY WORD'S OWN FIRST LIVE READ + the silences
assert.equal(wc(435), FADE + '59 -> 58 (-1) -> 49 (-9)' + FADE_TAIL, 'the W435 window the fade MY WORD\'S OWN FIRST LIVE READ byte-exact')
assert.equal(wc(434), null, 'the W434 window the silence 59 -> 59 -> 58')
assert.equal(wc(433), null, 'the W433 window the silence 48 -> 59 -> 59')
assert.equal(wc(432), SWING + '56 -> 48 (-8) -> 59 (+11)' + SWING_TAIL, 'the W432 window the swing byte-exact')
assert.equal(wc(431), FADE + '59 -> 56 (-3) -> 48 (-8)' + FADE_TAIL, 'the W431 window the fade byte-exact')
// the gap-crossing windows - the absent 419 the windows cross
assert.equal(wc(420), FADE + '58 -> 55 (-3) -> 53 (-2)' + FADE_TAIL, 'the W420 window THE GAP-CROSSING FADE byte-exact')
assert.equal(wc(421), SWING + '55 -> 53 (-2) -> 58 (+5)' + SWING_TAIL, 'the W421 window THE GAP-CROSSING SWING byte-exact')
// the W419 window never rides (the absent face's own honest gap)
{
  let rode = false
  for (let i = 2; i < cachedFaces.length; i++) if (cachedFaces[i] === 419) rode = true
  assert.equal(rode, false, 'the W419 window never rides - the absent face the honest gap')
}
// the whole-cache mirrors - the W415 weight-7 + the W423 weight-1
assert.equal(wc(415), SWING + '54 -> 47 (-7) -> 54 (+7)' + SWING_TAIL, 'the W415 window the weight-7 mirror byte-exact')
assert.equal(wc(423), SWING + '58 -> 57 (-1) -> 58 (+1)' + SWING_TAIL, 'the W423 window the weight-1 mirror byte-exact')
// the whole-cache bounds - the +54 ONE leg ONE boundary (346/347 -
// THE EIGHT'S OWN CLIMB) + the -49 ONE leg ONE boundary (345/346 -
// THE EIGHT'S OWN ARRIVAL the near-half drain)
{
  let maxRise = null, maxFall = null, rise54 = 0, fall49 = 0
  for (let i = 1; i < cachedFaces.length; i++) {
    const d = C[cachedFaces[i]] - C[cachedFaces[i - 1]]
    if (d > 0) { if (!maxRise || d > maxRise) maxRise = d; if (d === 54) rise54++ }
    if (d < 0) { if (!maxFall || d < maxFall) maxFall = d; if (d === -49) fall49++ }
  }
  assert.equal(maxRise, 54, "the whole-cache max rise the +54 rides")
  assert.equal(rise54, 1, "the +54 rode ONE leg ONE boundary 346/347 - THE EIGHT'S OWN CLIMB 8 -> 62")
  assert.equal(maxFall, -49, "the whole-cache max fall the -49 rides")
  assert.equal(fall49, 1, "the -49 rode ONE leg ONE boundary 345/346 - THE EIGHT'S OWN ARRIVAL 57 -> 8")
  assert.equal(C[346], 8, 'the climb the boundary departs from - the eight rides')
  assert.equal(C[347], 62, 'the climb the boundary prices 8 -> 62')
  assert.equal(C[345], 57, 'the drain the boundary prices 57 -> 8')
}

// THE FENCE - the fold's own law (the word never rides a lie)
assert.equal(deficitsRowTrendRow(null), null, 'the null fold prices nothing')
assert.equal(deficitsRowTrendRow(undefined), null, 'the undefined fold prices nothing')
assert.equal(deficitsRowTrendRow('junk'), null, 'the string fold prices nothing')
assert.equal(deficitsRowTrendRow([]), null, 'the array fold prices nothing')
assert.equal(deficitsRowTrendRow({ back: { rows: 5 }, prev: { rows: 6 } }), null, 'the legless fold prices nothing')
assert.equal(deficitsRowTrendRow({ back: { rows: 5 }, prev: { rows: 6 }, cur: { rows: 7, junk: 'ok' } }), SWELL + '5 -> 6 (+1) -> 7 (+1)' + SWELL_TAIL, 'the extra keys never rejected - the fence keeps the read')
assert.equal(deficitsRowTrendConsistent(null), false, 'the null fold never consistent')
assert.equal(deficitsRowTrendConsistent({ back: { rows: 1.5 }, prev: { rows: 2 }, cur: { rows: 3 } }), false, 'the non-integer rows never consistent')
assert.equal(deficitsRowTrendConsistent({ back: { rows: -1 }, prev: { rows: 2 }, cur: { rows: 3 } }), false, 'the negative rows never consistent')
assert.equal(deficitsRowTrendConsistent({ back: { rows: 0 }, prev: { rows: 0 }, cur: { rows: 0 } }), true, 'the zero rows consistent - the lawful drought the fence keeps')
assert.equal(deficitsRowTrendRow({ back: { rows: 0 }, prev: { rows: 0 }, cur: { rows: 0 } }), null, 'the all-zero fold the honest silence')
assert.equal(deficitsRowTrendRow({ back: { rows: 5 }, prev: { rows: 5 }, cur: { rows: 9 } }), null, 'the held step the honest silence (the first leg)')
assert.equal(deficitsRowTrendRow({ back: { rows: 5 }, prev: { rows: 9 }, cur: { rows: 9 } }), null, 'the held step the honest silence (the second leg)')
// the lawful zero window - the zero face rides a lawful count
assert.equal(deficitsRowTrendRow({ back: { rows: 0 }, prev: { rows: 3 }, cur: { rows: 7 } }), SWELL + '0 -> 3 (+3) -> 7 (+4)' + SWELL_TAIL, 'the zero-back window the swell the lawful zero rides')

// THE BYTE-PIN - the row never speaks the shape's own verdict words
{
  const arcs = [...Object.values(SWELLS), ...Object.values(FADES), ...Object.values(SWINGS)]
  for (const arc of arcs) {
    const byte = HEAD + ': ... ' + arc
    for (const banned of [' return ', ' repeat ', ' stay ', ' run ', ' owns ', ' dynasty ', ' turn ']) {
      // the tail's own neighbor names ride by law - the VERDICT words
      // never ride the shape's own voice (the head + arc only)
      assert.equal(byte.includes(banned), false, `the byte-pin the word '${banned.trim()}' never rides the shape's own voice`)
    }
  }
}

// THE LANES NEVER MERGE - the census's own read the word rides (the
// one-parser law): the plan top's named board and the map-trip lines
// and the pulse header and the mem lines never ride; the torn row
// never rides - the census's own unparsed law
{
  const never = [
    'plan top: sand 157926/8 (0.0%) gravel 149380/0 (0.0%) ink_sac 31860/0 (0.0%) deepslate 27420/0 (0.0%) andesite 10725/40 (0.4%)',
    'F5 map trip: launch sand (pos 12) - the launch lens\'s own line',
    'F5 [F5] climb bridge: placed cobblestone below',
    'F5 [F5] climb diag: level 1 blocked-toward [12,64,-130] stone',
    'F5 mem: heap=512M/1024M old=64M ext=0M',
    'bots=19 spawned=19 alive=19/19',
    '   deficits: 100/5 (5.0%) 80/12 (15.0%) 60/30 (50.0%) 40/8 (20.0%) 20/4 (20.0%) bad'
  ]
  for (const l of never) {
    const c = deficitsCensus([l])
    if (l.startsWith('   deficits: 100/5 (5.0%) 80/12 (15.0%) 60/30 (50.0%) 40/8 (20.0%) 20/4 (20.0%) bad')) {
      assert.equal(c.rows, 0, 'the torn row never rides - the census counts unparsed, never rows')
      assert.equal(c.unparsed, 1, 'the torn row counted unparsed - the honest sweep')
    } else {
      assert.equal(c.rows, 0, `the lane never merges: '${l.slice(0, 40)}...' never rides`)
      assert.equal(c.unparsed, 0, `the lane never merges: '${l.slice(0, 40)}...' no unparsed - a different emitter`)
    }
  }
  // the row rides whole - the five-slot board the emitter prints
  const ok = deficitsCensus(['   deficits: 157926/8 (0.0%) 149380/0 (0.0%) 31860/0 (0.0%) 27420/0 (0.0%) 10725/40 (0.4%)'])
  assert.equal(ok.rows, 1, 'the row rides whole - the census\'s own read')
  assert.equal(deficitsRowTrendRow({ back: { rows: 0 }, prev: { rows: 0 }, cur: { rows: 1 } }), null, 'the zero-to-one window the held step the honest silence (the first leg)')
}
