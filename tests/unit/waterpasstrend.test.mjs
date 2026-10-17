// tests/unit/waterpasstrend.test.mjs - THE WATER PASS LANE'S OWN
// TREND's own pin battery (v0.976.202): the water crossing's own pass
// telemetry mass across the faces the field's own scan named first
// (the 'water: pass' family - THE HEAVIEST UNPRICED VOICE THE CACHE
// HOLDS after the raw docket words) - the field's own chains byte-exact
// (THE CELL'S OWN WEIGHT 13698u the ninety-eight faces' own total, THE
// BIRTH FIELD 6296u the forty-three faces' own total, THE FIELD'S OWN
// TOP THE COUNT 367 rode ONCE the face 362's own crest - THE STORM,
// THE FIELD'S OWN FLOOR THE COUNT 38 rode ONCE the face 355's own
// floor - THE NO-DROUGHT BIRTH the zero never rode), the field book
// FORTY-ONE of FORTY-ONE speaking (TWENTY-FIVE swings, NINE swells,
// SEVEN fades, the ZERO honest silences) beside the whole-cache book
// NINETY-SIX of NINETY-SIX speaking (SIXTY swings, SEVENTEEN swells,
// NINETEEN fades, the ZERO honest silences - THE ALL-SPEAKING
// FAMILY'S OWN NEWEST AND BIGGEST SEAT), THE NINE-SWING RUN W379..W387
// THE RECORD THE BOOK RIDES (the six-swing runs W389..W394 +
// W412..W417 + W430..W435 and the five-swing run W359..W363 and the
// triples W342..W344 + W368..W370 and the swell triples W371..W373 +
// W409..W411 and the fade triple W349..W351 the runs beside), the
// storm windows (the W362 THE STORM'S OWN ARRIVAL + the W363 THE
// CREST AND DRAIN; the W411 THE NEAR-STORM'S OWN ARRIVAL + the W412
// THE CLIMB AND DRAIN), the floor's own windows (the W355/W356) and
// the drought's own (the W396/W397 - the face 396's own zero THE
// DROUGHT the whole cache's own single drought rode ONCE) and the
// near-floor's own (the W346/W347 - the face 346's own four), the
// bounds' own legs pins (the field's +246 ONE leg ONE boundary 361/362
// - THE STORM'S OWN CLIMB, the -166 ONE leg ONE boundary 384/385 -
// THE NEAR-CREST'S OWN DRAIN; the whole-cache +246 the same climb +
// the -263 ONE leg ONE boundary 411/412 - THE NEAR-STORM'S OWN DRAIN),
// the ZERO round trips (the swings never mirrored - the field and the
// whole cache agree), the gap-crossing windows W420/W421 (the absent
// 419 the windows cross - the W419 window never rides), the newest
// adds (the W436 fade 179 -> 126 (-53) -> 23 (-103), the W437 swing
// 126 -> 23 (-103) -> 88 (+65), the W438 swell 23 -> 88 (+65) -> 283
// (+195) MY WORD'S OWN FIRST LIVE READ - the face 438's own 283u the
// newest add rides)
// (the REUSE LAW - sentryCensus's own passes cell the fold rides -
// one-parser law, never a fork; the head skins and the shore skins and
// the land skins and the o2 shapes never split - the line's own count
// rides whole whatever the skin's name; the sentry's own within-face
// seats and the pin bill's own pass seat never ride - the pass count
// alone; the water rescue's own lanes and the waterline trend's own
// cell never ride - the lanes never merge; the passes' own zero a
// lawful count - the drought's own honest zero)
import assert from 'node:assert'
import { waterPassTrendConsistent, waterPassTrendRow } from '../../src/lib/waterpasstrend.mjs'
import { sentryCensus } from '../../src/lib/sentry.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, this word prices the water pass's own mass across the faces - the water pass seat, co-existence by seat never by duplication)"

const HEAD = 'the water pass trend (v0.976.202)'
const SWING = HEAD + ": the passes' own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the passes' rise ran two steps deep - "
const SWELL_TAIL = " - the passes' own swell " + TAIL
const FADE = HEAD + ": the passes' fall ran two steps deep - "
const FADE_TAIL = " - the passes' own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 347..389 (the sentry's own
// passes cells arithmetic, FORTY-THREE faces deep) - THE BIRTH FIELD
// 6296u the faces' own total
const P = {}
P[347] = 125; P[348] = 113; P[349] = 111; P[350] = 82; P[351] = 58; P[352] = 68; P[353] = 148; P[354] = 189
P[355] = 38; P[356] = 83; P[357] = 205; P[358] = 269; P[359] = 139; P[360] = 183; P[361] = 121; P[362] = 367
P[363] = 204; P[364] = 121; P[365] = 317; P[366] = 189; P[367] = 61; P[368] = 87; P[369] = 77; P[370] = 182
P[371] = 190; P[372] = 200; P[373] = 232; P[374] = 106; P[375] = 73; P[376] = 100; P[377] = 140; P[378] = 227
P[379] = 88; P[380] = 135; P[381] = 102; P[382] = 141; P[383] = 41; P[384] = 253; P[385] = 87; P[386] = 157
P[387] = 155; P[388] = 127; P[389] = 205
let fieldSum = 0
for (let f = 347; f <= 389; f++) fieldSum += P[f]
assert.equal(fieldSum, 6296, "the birth field 6296u the hand-off holds - THE WATER PASS'S OWN SEAT rides")
assert.equal(Math.max(...Object.values(P)), 367, "THE STORM the count 367 the face 362's own crest rides - the top rode ONCE")
assert.equal(Object.values(P).filter(v => v === 367).length, 1, 'the top rode ONCE the honest crest the book holds')
assert.equal(Math.min(...Object.values(P)), 38, "the floor the count 38 the face 355's own floor rides")
assert.equal(Object.values(P).filter(v => v === 38).length, 1, 'the floor rode ONCE the honest trough the book holds')
assert.equal(Object.values(P).filter(v => v === 0).length, 0, 'THE NO-DROUGHT BIRTH the zero never rode the forty-three faces')
const w = (f) => waterPassTrendRow({ back: { passes: P[f - 2] }, prev: { passes: P[f - 1] }, cur: { passes: P[f] } })

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
// classification (TWENTY-FIVE swings, NINE swells, SEVEN fades, the
// ZERO honest silences - FORTY-ONE of FORTY-ONE speaking: the
// all-speaking field book)
let fieldTally = { swing: 0, swell: 0, fade: 0, silence: 0 }
let fieldWindows = 0
for (let f = 349; f <= 389; f++) { fieldWindows++; fieldTally[tallyWindow(f, P)]++ }
assert.equal(fieldWindows, 41, 'FORTY-ONE windows the field prices')
assert.equal(fieldTally.swing, 25, 'TWENTY-FIVE swings the field book holds')
assert.equal(fieldTally.swell, 9, 'NINE swells the field book holds')
assert.equal(fieldTally.fade, 7, 'SEVEN fades the field book holds')
assert.equal(fieldTally.silence, 0, 'the ZERO honest silences - the all-speaking field book')
assert.equal(fieldTally.swing + fieldTally.swell + fieldTally.fade, 41, 'the all-speaking book FORTY-ONE of FORTY-ONE')

// THE NINE-SWING RUN the windows W379..W387 hold - THE RECORD THE BOOK
// RIDES (the five-swing run W359..W363, the triple W368..W370, the
// pairs W355/W356 + W365/W366, the solos W352/W374/W376/W389 the runs
// beside)
const runOf = (lo, hi, T, kind) => {
  for (let f = lo; f <= hi; f++) {
    if (tallyWindow(f, T) !== kind) return false
  }
  return true
}
assert.equal(runOf(379, 387, P, 'swing'), true, 'THE NINE-SWING RUN W379..W387 THE RECORD rides')
assert.equal(tallyWindow(378, P), 'swell', 'the nine-swing run opens beside the swell pair W377/W378 - the boundary holds')
assert.equal(tallyWindow(388, P), 'fade', 'the nine-swing run closes beside the fade solo W388 - the boundary holds')
assert.equal(runOf(359, 363, P, 'swing'), true, 'THE FIVE-SWING RUN W359..W363 rides')
assert.equal(runOf(368, 370, P, 'swing'), true, 'THE TRIPLE SWING RUN W368..W370 rides')
assert.equal(runOf(355, 356, P, 'swing'), true, 'THE SWING PAIR W355/W356 THE FLOOR rides')
assert.equal(runOf(365, 366, P, 'swing'), true, 'THE SWING PAIR W365/W366 rides')
assert.equal(runOf(353, 354, P, 'swell'), true, 'THE SWELL PAIR W353/W354 rides')
assert.equal(runOf(357, 358, P, 'swell'), true, 'THE SWELL PAIR W357/W358 rides')
assert.equal(runOf(371, 373, P, 'swell'), true, 'THE SWELL TRIPLE W371..W373 rides')
assert.equal(runOf(377, 378, P, 'swell'), true, 'THE SWELL PAIR W377/W378 rides')
assert.equal(runOf(349, 351, P, 'fade'), true, 'THE FADE TRIPLE W349..W351 rides')
assert.equal(tallyWindow(352, P), 'swing', 'the swing solo W352 rides')
assert.equal(tallyWindow(374, P), 'swing', 'the swing solo W374 rides')
assert.equal(tallyWindow(376, P), 'swing', 'the swing solo W376 rides')
assert.equal(tallyWindow(389, P), 'swing', 'the swing solo W389 the last field word rides')
assert.equal(tallyWindow(364, P), 'fade', 'the fade solo W364 the drain rides')
assert.equal(tallyWindow(367, P), 'fade', 'the fade solo W367 rides')
assert.equal(tallyWindow(375, P), 'fade', 'the fade solo W375 rides')
assert.equal(tallyWindow(388, P), 'fade', 'the fade solo W388 rides')
// the swell solo the field never rode (the nine swells ride in runs)
let fieldSwellSolo = 0
for (let f = 349; f <= 389; f++) {
  if (tallyWindow(f, P) !== 'swell') continue
  const prevKind = f > 349 ? tallyWindow(f - 1, P) : null
  const nextKind = f < 389 ? tallyWindow(f + 1, P) : null
  if (prevKind !== 'swell' && nextKind !== 'swell') fieldSwellSolo++
}
assert.equal(fieldSwellSolo, 0, 'no swell solo the field holds - the nine swells the runs ride')

// THE STORM WINDOWS - the W362 window the swing THE STORM'S OWN
// ARRIVAL + the W363 window the swing THE STORM'S OWN CREST AND DRAIN
// in ONE window; the floor's own windows beside
assert.equal(w(362), SWING + '183 -> 121 (-62) -> 367 (+246)' + SWING_TAIL, "the W362 window THE STORM'S OWN ARRIVAL byte-exact")
assert.equal(w(363), SWING + '121 -> 367 (+246) -> 204 (-163)' + SWING_TAIL, "the W363 window THE STORM'S OWN CREST AND DRAIN byte-exact")
assert.equal(w(364), FADE + '367 -> 204 (-163) -> 121 (-83)' + FADE_TAIL, "the W364 window the drain's own echo byte-exact")
assert.equal(w(355), SWING + '148 -> 189 (+41) -> 38 (-151)' + SWING_TAIL, "the W355 window THE FLOOR'S OWN ARRIVAL byte-exact")
assert.equal(w(356), SWING + '189 -> 38 (-151) -> 83 (+45)' + SWING_TAIL, "the W356 window THE FLOOR'S OWN CLIMB byte-exact")

// the last field word - the face 389's own window the swing (155 ->
// 127 (-28) -> 205 (+78))
assert.equal(w(389), SWING + '155 -> 127 (-28) -> 205 (+78)' + SWING_TAIL, 'the last field word the W389 swing byte-exact')

// THE BOUNDS' OWN LEGS - the field's own +246 the max rise rode ONE
// leg ONE boundary (the boundary 361/362 - THE STORM'S OWN CLIMB),
// the -166 the max fall rode ONE leg ONE boundary (the boundary
// 384/385 - THE NEAR-CREST'S OWN DRAIN 253 -> 87; the storm's own
// -163 the near-sibling beside)
{
  let maxRise = null, maxFall = null, riseLegs = 0, fallLegs = 0, stormDrainLegs = 0
  for (let n = 347; n < 389; n++) {
    const d = P[n + 1] - P[n]
    if (d > 0) { if (!maxRise || d > maxRise) maxRise = d; if (d === 246) riseLegs++ }
    if (d < 0) { if (!maxFall || d < maxFall) maxFall = d; if (d === -166) fallLegs++; if (d === -163) stormDrainLegs++ }
  }
  assert.equal(maxRise, 246, 'the max rise the +246 rides')
  assert.equal(maxFall, -166, 'the max fall the -166 rides')
  assert.equal(riseLegs, 1, "the +246 rode ONE leg ONE boundary 361/362 - THE STORM'S OWN CLIMB")
  assert.equal(fallLegs, 1, "the -166 rode ONE leg ONE boundary 384/385 - THE NEAR-CREST'S OWN DRAIN")
  assert.equal(stormDrainLegs, 1, "the storm's own -163 the near-sibling beside rode ONE leg 362/363")
  assert.equal(P[361], 121, "the climb departs from the face 361's own 121 -> 367")
  assert.equal(P[384], 253, "the near-crest's own drain departs from 253 -> 87")
  assert.equal(P[362], 367, "the storm's own drain departs from the crest 367 -> 204")
}

// THE ZERO ROUND TRIPS the field holds (the swings never mirrored)
let fieldRt = 0
for (let f = 349; f <= 389; f++) {
  if (tallyWindow(f, P) !== 'swing') continue
  const a = P[f - 2], b = P[f - 1], c = P[f]
  if (b - a !== 0 && b - a === -(c - b)) fieldRt++
}
assert.equal(fieldRt, 0, 'the round trips the field never rode - the swings never mirrored')

// THE WHOLE-CACHE SEAT - the ninety-eight faces the cache holds
// (340..438 minus the absent 419 - the honest gap), the whole-cache
// book NINETY-SIX of NINETY-SIX speaking
const C = {}
C[340] = 124; C[341] = 239; C[342] = 52; C[343] = 165; C[344] = 140; C[345] = 136; C[346] = 4; C[347] = 125
C[348] = 113; C[349] = 111; C[350] = 82; C[351] = 58; C[352] = 68; C[353] = 148; C[354] = 189; C[355] = 38
C[356] = 83; C[357] = 205; C[358] = 269; C[359] = 139; C[360] = 183; C[361] = 121; C[362] = 367; C[363] = 204
C[364] = 121; C[365] = 317; C[366] = 189; C[367] = 61; C[368] = 87; C[369] = 77; C[370] = 182; C[371] = 190
C[372] = 200; C[373] = 232; C[374] = 106; C[375] = 73; C[376] = 100; C[377] = 140; C[378] = 227; C[379] = 88
C[380] = 135; C[381] = 102; C[382] = 141; C[383] = 41; C[384] = 253; C[385] = 87; C[386] = 157; C[387] = 155
C[388] = 127; C[389] = 205; C[390] = 77; C[391] = 147; C[392] = 34; C[393] = 192; C[394] = 183; C[395] = 95
C[396] = 0; C[397] = 135; C[398] = 73; C[399] = 71; C[400] = 155; C[401] = 174; C[402] = 95; C[403] = 70
C[404] = 159; C[405] = 201; C[406] = 106; C[407] = 30; C[408] = 99; C[409] = 134; C[410] = 208; C[411] = 348
C[412] = 85; C[413] = 261; C[414] = 92; C[415] = 159; C[416] = 77; C[417] = 161; C[418] = 225; C[420] = 221
C[421] = 196; C[422] = 197; C[423] = 303; C[424] = 76; C[425] = 75; C[426] = 225; C[427] = 126; C[428] = 74
C[429] = 24; C[430] = 157; C[431] = 112; C[432] = 116; C[433] = 95; C[434] = 179; C[435] = 126; C[436] = 23
C[437] = 88; C[438] = 283
const cachedFaces = Object.keys(C).map(Number).sort((a, b) => a - b)
assert.equal(cachedFaces.length, 98, 'the ninety-eight faces the cache holds')
assert.equal(cachedFaces.includes(419), false, 'the absent 419 the honest gap the cache holds not')
let wholeSum = 0
for (const f of cachedFaces) wholeSum += C[f]
assert.equal(wholeSum, 13698, 'the whole-cache 13698u the ninety-eight faces ride')
// the whole-cache extremes
assert.equal(Math.max(...Object.values(C)), 367, 'the whole-cache top the count 367 - THE STORM the face 362 rides')
assert.equal(Object.values(C).filter(v => v === 367).length, 1, 'the whole-cache top rode ONCE')
assert.equal(Math.min(...Object.values(C)), 0, 'the whole-cache floor the count 0 - THE DROUGHT the face 396 rides')
assert.deepEqual(cachedFaces.filter(f => C[f] === 0), [396], "THE DROUGHT rode ONCE - the face 396's own zero the whole cache's own single drought")
assert.deepEqual(cachedFaces.filter(f => C[f] === 4), [346], "the near-floor the face 346's own four rode ONCE")
// the newest adds
assert.equal(C[434], 179, "the face 434's own 179u rides")
assert.equal(C[435], 126, "the face 435's own 126u rides")
assert.equal(C[436], 23, "the face 436's own 23u rides")
assert.equal(C[437], 88, "the face 437's own 88u rides")
assert.equal(C[438], 283, "the face 438's own 283u the newest add rides")

// the whole-cache windows - NINETY-SIX over the cached sequence (the
// windows ride the CACHED SEQUENCE's own positions - the absent 419
// the honest gap the windows cross, the face-number arithmetic never
// prices the gap)
const posOf = new Map(cachedFaces.map((f, i) => [f, i]))
const wc = (f) => {
  const i = posOf.get(f)
  return waterPassTrendRow({ back: { passes: C[cachedFaces[i - 2]] }, prev: { passes: C[cachedFaces[i - 1]] }, cur: { passes: C[cachedFaces[i]] } })
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
assert.equal(wholeWindows, 96, 'NINETY-SIX windows the whole cache prices')
assert.equal(wholeTally.swing, 60, 'SIXTY swings the whole-cache book holds')
assert.equal(wholeTally.swell, 17, 'SEVENTEEN swells the whole-cache book holds')
assert.equal(wholeTally.fade, 19, 'NINETEEN fades the whole-cache book holds')
assert.equal(wholeTally.silence, 0, 'the ZERO honest silences - THE ALL-SPEAKING FAMILY\'S OWN NEWEST AND BIGGEST SEAT')
assert.equal(wholeTally.swing + wholeTally.swell + wholeTally.fade, 96, 'the all-speaking book NINETY-SIX of NINETY-SIX')

// THE NINE-SWING RUN W379..W387 the whole cache rides beside - THE
// RECORD THE BOOK RIDES (the six-swing runs W389..W394 + W412..W417 +
// W430..W435 the runs beside)
const runOfCached = (lo, hi, kind) => {
  const a = posOf.get(lo), b = posOf.get(hi)
  if (a === undefined || b === undefined) return false
  for (let i = a; i <= b; i++) {
    if (wcShape(cachedFaces[i]) !== kind) return false
  }
  return true
}
assert.equal(runOfCached(379, 387, 'swing'), true, 'THE NINE-SWING RUN W379..W387 THE RECORD the whole cache rides')
assert.equal(wcShape(378), 'swell', 'the swell pair W377/W378 the run opens beside')
assert.equal(wcShape(388), 'fade', 'the fade solo W388 the run closes beside')
assert.equal(runOfCached(389, 394, 'swing'), true, 'THE SIX-SWING RUN W389..W394 rides')
assert.equal(runOfCached(412, 417, 'swing'), true, 'THE SIX-SWING RUN W412..W417 rides')
assert.equal(runOfCached(430, 435, 'swing'), true, 'THE SIX-SWING RUN W430..W435 rides')
assert.equal(runOfCached(359, 363, 'swing'), true, 'THE FIVE-SWING RUN W359..W363 the whole cache rides beside')
assert.equal(runOfCached(368, 370, 'swing'), true, 'THE TRIPLE SWING RUN W368..W370 the whole cache rides beside')
assert.equal(runOfCached(371, 373, 'swell'), true, 'THE SWELL TRIPLE W371..W373 the whole cache rides')
assert.equal(runOfCached(409, 411, 'swell'), true, 'THE SWELL TRIPLE W409..W411 the whole cache rides')
assert.equal(runOfCached(349, 351, 'fade'), true, 'THE FADE TRIPLE W349..W351 the whole cache rides')
// the gap-crossing windows the reads ride (the absent 419 the windows
// cross - the W419 window never rides)
assert.equal(wc(420), SWING + '161 -> 225 (+64) -> 221 (-4)' + SWING_TAIL, 'the W420 gap-crossing window byte-exact')
assert.equal(wc(421), FADE + '225 -> 221 (-4) -> 196 (-25)' + FADE_TAIL, 'the W421 gap-crossing window byte-exact')
assert.equal(cachedFaces.includes(419), false, 'the W419 window never rides - the absent face the honest gap holds not')

// THE STORM WINDOWS the whole cache prices beside - the W362 window
// the swing THE STORM'S OWN ARRIVAL + the W363 window the swing THE
// STORM'S OWN CREST AND DRAIN in ONE window; the near-storm beside
assert.equal(wc(362), SWING + '183 -> 121 (-62) -> 367 (+246)' + SWING_TAIL, "the W362 window THE STORM'S OWN ARRIVAL the whole cache rides byte-exact")
assert.equal(wc(363), SWING + '121 -> 367 (+246) -> 204 (-163)' + SWING_TAIL, "the W363 window THE STORM'S OWN CREST AND DRAIN the whole cache rides byte-exact")
assert.equal(wc(411), SWELL + '134 -> 208 (+74) -> 348 (+140)' + SWELL_TAIL, "the W411 window THE NEAR-STORM'S OWN ARRIVAL byte-exact")
assert.equal(wc(412), SWING + '208 -> 348 (+140) -> 85 (-263)' + SWING_TAIL, "the W412 window THE NEAR-STORM'S OWN CLIMB AND DRAIN byte-exact")
assert.equal(wc(413), SWING + '348 -> 85 (-263) -> 261 (+176)' + SWING_TAIL, "the W413 window the near-storm's own echo byte-exact")

// THE DROUGHT'S OWN WINDOWS - the W396 window the fade THE DROUGHT'S
// OWN ARRIVAL (the face 396's own zero the whole cache's own single
// drought) + the W397 window the swing THE DROUGHT'S OWN CLIMB; the
// near-floor's own windows beside (the W346 fade + the W347 climb)
assert.equal(wc(396), FADE + '183 -> 95 (-88) -> 0 (-95)' + FADE_TAIL, "the W396 window THE DROUGHT'S OWN ARRIVAL byte-exact")
assert.equal(wc(397), SWING + '95 -> 0 (-95) -> 135 (+135)' + SWING_TAIL, "the W397 window THE DROUGHT'S OWN CLIMB byte-exact")
assert.equal(wc(346), FADE + '140 -> 136 (-4) -> 4 (-132)' + FADE_TAIL, "the W346 window THE NEAR-DROUGHT'S OWN ARRIVAL byte-exact")
assert.equal(wc(347), SWING + '136 -> 4 (-132) -> 125 (+121)' + SWING_TAIL, "the W347 window the near-floor's own climb byte-exact")

// THE BOUNDS' OWN LEGS the whole cache prices - the +246 the max rise
// rode ONE leg ONE boundary (the boundary 361/362 - THE STORM'S OWN
// CLIMB), the -263 the max fall rode ONE leg ONE boundary (the
// boundary 411/412 - THE NEAR-STORM'S OWN DRAIN 348 -> 85)
{
  let maxRise = null, maxFall = null, riseLegs = 0, fallLegs = 0
  for (let i = 1; i < cachedFaces.length; i++) {
    const d = C[cachedFaces[i]] - C[cachedFaces[i - 1]]
    if (d > 0) { if (!maxRise || d > maxRise) maxRise = d; if (d === 246) riseLegs++ }
    if (d < 0) { if (!maxFall || d < maxFall) maxFall = d; if (d === -263) fallLegs++ }
  }
  assert.equal(maxRise, 246, 'the max rise the +246 rides')
  assert.equal(maxFall, -263, 'the max fall the -263 rides')
  assert.equal(riseLegs, 1, "the +246 rode ONE leg ONE boundary 361/362 - THE STORM'S OWN CLIMB")
  assert.equal(fallLegs, 1, "the -263 rode ONE leg ONE boundary 411/412 - THE NEAR-STORM'S OWN DRAIN")
  assert.equal(C[361], 121, "the climb departs from the face 361's own 121 -> 367")
  assert.equal(C[411], 348, "the drain departs from the near-storm's own crest 348 -> 85")
}

// the whole-cache round trips - the ZERO the book holds (the swings
// never mirrored - the field and the whole cache agree)
let wholeRt = 0
for (let i = 2; i < cachedFaces.length; i++) {
  if (wcShape(cachedFaces[i]) !== 'swing') continue
  const a = C[cachedFaces[i - 2]], b = C[cachedFaces[i - 1]], c = C[cachedFaces[i]]
  if (b - a !== 0 && b - a === -(c - b)) wholeRt++
}
assert.equal(wholeRt, 0, 'the round trips the whole cache never rode')

// THE NEWEST ADDS - the W436 window the fade, the W437 window the
// swing, the W438 window the swell MY WORD'S OWN FIRST LIVE READ
assert.equal(wc(436), FADE + '179 -> 126 (-53) -> 23 (-103)' + FADE_TAIL, 'the W436 window the fade byte-exact')
assert.equal(wc(437), SWING + '126 -> 23 (-103) -> 88 (+65)' + SWING_TAIL, 'the W437 window the swing byte-exact')
assert.equal(wc(438), SWELL + '23 -> 88 (+65) -> 283 (+195)' + SWELL_TAIL, "the W438 window MY WORD'S OWN FIRST LIVE READ byte-exact")

// the pairs the whole cache holds beside (the runs' own two-windows)
assert.equal(runOfCached(353, 354, 'swell'), true, 'the swell pair W353/W354 the whole cache rides')
assert.equal(runOfCached(357, 358, 'swell'), true, 'the swell pair W357/W358 rides')
assert.equal(runOfCached(377, 378, 'swell'), true, 'the swell pair W377/W378 rides')
assert.equal(runOfCached(345, 346, 'fade'), true, "the fade pair W345/W346 THE NEAR-DROUGHT'S OWN ARRIVAL rides")
assert.equal(runOfCached(395, 396, 'fade'), true, "the fade pair W395/W396 THE DROUGHT'S OWN ARRIVAL rides")
assert.equal(runOfCached(428, 429, 'fade'), true, 'the fade pair W428/W429 rides')
assert.equal(runOfCached(347, 348, 'swing'), true, 'the swing pair W347/W348 rides')
assert.equal(runOfCached(355, 356, 'swing'), true, 'the swing pair W355/W356 rides')
assert.equal(runOfCached(365, 366, 'swing'), true, 'the swing pair W365/W366 rides')
assert.equal(runOfCached(397, 398, 'swing'), true, 'the swing pair W397/W398 THE DROUGHT rides')
assert.equal(runOfCached(426, 427, 'swing'), true, 'the swing pair W426/W427 rides')
assert.equal(runOfCached(434, 435, 'swing'), true, 'the swing pair W434/W435 the newest rides')
// the solos the whole cache holds beside
assert.equal(wcShape(401), 'swell', 'the swell solo W401 rides')
assert.equal(wcShape(405), 'swell', 'the swell solo W405 rides')
assert.equal(wcShape(418), 'swell', 'the swell solo W418 rides')
assert.equal(wcShape(423), 'swell', 'the swell solo W423 rides')
assert.equal(wcShape(364), 'fade', 'the fade solo W364 rides')
assert.equal(wcShape(367), 'fade', 'the fade solo W367 rides')
assert.equal(wcShape(375), 'fade', 'the fade solo W375 rides')
assert.equal(wcShape(388), 'fade', 'the fade solo W388 rides')
assert.equal(wcShape(399), 'fade', 'the fade solo W399 rides')
assert.equal(wcShape(403), 'fade', 'the fade solo W403 rides')
assert.equal(wcShape(407), 'fade', 'the fade solo W407 rides')
assert.equal(wcShape(421), 'fade', 'the fade solo W421 rides')
assert.equal(wcShape(425), 'fade', 'the fade solo W425 rides')
assert.equal(wcShape(436), 'fade', 'the fade solo W436 rides')
assert.equal(wcShape(352), 'swing', 'the swing solo W352 rides')
assert.equal(wcShape(374), 'swing', 'the swing solo W374 rides')
assert.equal(wcShape(376), 'swing', 'the swing solo W376 rides')
assert.equal(wcShape(400), 'swing', 'the swing solo W400 rides')
assert.equal(wcShape(402), 'swing', 'the swing solo W402 rides')
assert.equal(wcShape(404), 'swing', 'the swing solo W404 rides')
assert.equal(wcShape(406), 'swing', 'the swing solo W406 rides')
assert.equal(wcShape(408), 'swing', 'the swing solo W408 rides')
assert.equal(wcShape(422), 'swing', 'the swing solo W422 rides')
assert.equal(wcShape(424), 'swing', 'the swing solo W424 rides')
assert.equal(wcShape(437), 'swing', 'the swing solo W437 rides')

// ---- THE REUSE LAW battery - sentryCensus's own passes cell the fold
// rides ---- the head skins and the shore skins and the land skins and
// the o2 shapes never split - the line's own count rides whole
// whatever the skin's name
{
  const lines = [
    'F10 [F10] water: pass 0 head=wet shore=none land=n/a y=46.0 o2=14 probes=0 at=[-129,46,401]',
    'F12 [F12] water: pass 4 head=dry shore=hit r=3 land=none y=62.1 o2=20 probes=0 at=[-151,62,396]',
    'F5 [F5] water: pass 7 head=dry shore=none land=birch_log d=5 y=50.4 o2=19 probes=0 at=[-115,50,397]',
    'F14 [F14] water: pass 0 head=wet shore=none land=n/a y=52.0 o2=reset(-1) probes=0 at=[-126,52,409]',
    'F14 [F14] water: pass 2 head=dry shore=none land=oak_log d=6 y=53.9 o2=? probes=0 at=[-129,54,412]'
  ]
  const c = sentryCensus(lines)
  assert.equal(c.passes, 5, "the four head/shore/land/o2 skins the line's own count rides whole (2 wet + 3 dry, the hit and the none shores, the na and the none and the ledgered lands, the value and the reset and the unknown o2)")
  assert.equal(c.unparsed, 0, 'the grammar strict - zero unparsed the shape holds')
  const row = waterPassTrendRow({ back: { passes: c.passes + 2 }, prev: { passes: c.passes + 1 }, cur: { passes: c.passes } })
  assert.equal(row, FADE + '7 -> 6 (-1) -> 5 (-1)' + FADE_TAIL, 'the fold rides the census\'s own passes cell - the word byte-exact over the real book')
}
// the water lane's own other seats never ride - the pass count alone
{
  const lines = [
    'F10 [F10] water: drowning rescue start (drowning, oxygen 14)',
    'F10 [F10] water: rescue blind live (pass 3, air=13, no ground truth yet - the climb flies on buoyancy alone)',
    'F10 [F10] water: transit toward known land (birch_log) at [-131,396] d=6',
    'F10 [F10] water: hazard memorized at [-131,52,396]',
    'F10 [F10] water: rescue released (pass 5, air=18, ground truth at last)'
  ]
  const c = sentryCensus(lines)
  assert.equal(c.passes, 0, 'the rescue verdicts and the transits and the hazards never ride - the pass seat alone')
  assert.equal(waterPassTrendRow({ back: { passes: 5 }, prev: { passes: 5 }, cur: { passes: c.passes } }), null, 'the held step the honest silence prices')
}
// the torn form rides the escape hatch - counted unparsed, never the
// passes cell, never silently dropped
{
  const lines = [
    'F10 [F10] water: pass 3 head=wet',
    'F10 [F10] water: pass 0 head=wet shore=none land=n/a y=51.0 o2=12 probes=0 at=[-135,51,424]'
  ]
  const c = sentryCensus(lines)
  assert.equal(c.passes, 1, 'the torn form never rides the passes cell - the grammar strict')
  assert.equal(c.unparsed, 1, 'the torn form rides the escape hatch - counted, never silently dropped')
}
// the single-prefix and the merged-word forms never ride - no such
// emitter voice (the water lane prints the double-prefix form only)
{
  const lines = [
    'F10 water: pass 1 head=wet shore=none land=n/a y=51.0 o2=12 probes=0 at=[-135,51,424]',
    'F10 [F10] waterpass: 1 head=wet shore=none land=n/a y=51.0 o2=12 probes=0 at=[-135,51,424]',
    'F10 [F9] water: pass 1 head=wet shore=none land=n/a y=51.0 o2=12 probes=0 at=[-135,51,424]'
  ]
  const c = sentryCensus(lines)
  assert.equal(c.passes, 0, 'the single-prefix and the merged-word and the mismatched-bracket forms never ride')
}

// ---- the fence batteries ----
assert.equal(waterPassTrendConsistent(null), false, 'the null fold the fence refuses')
assert.equal(waterPassTrendConsistent(undefined), false, 'the undefined fold the fence refuses')
assert.equal(waterPassTrendConsistent([]), false, 'the array fold the fence refuses')
assert.equal(waterPassTrendConsistent({}), false, 'the empty fold the fence refuses')
assert.equal(waterPassTrendConsistent({ back: { passes: 1 }, prev: { passes: 1 } }), false, 'the two-face fold the fence refuses')
assert.equal(waterPassTrendConsistent({ back: { passes: 1 }, prev: { passes: 1 }, cur: { passes: 1.5 } }), false, 'the fractional count the fence refuses')
assert.equal(waterPassTrendConsistent({ back: { passes: 1 }, prev: { passes: 1 }, cur: { passes: -1 } }), false, 'the negative count the fence refuses')
assert.equal(waterPassTrendConsistent({ back: { passes: 1 }, prev: { passes: 1 }, cur: { passes: '3' } }), false, 'the string count the fence refuses')
assert.equal(waterPassTrendConsistent({ back: { passes: 0 }, prev: { passes: 0 }, cur: { passes: 0 } }), true, 'the zero fold the fence keeps - the drought\'s own honest zero')
assert.equal(waterPassTrendConsistent({ back: { passes: 1, extra: 'x' }, prev: { passes: 2 }, cur: { passes: 3 } }), true, 'the extra keys never rejected')
assert.equal(waterPassTrendRow(null), null, 'the null fold prices nothing')
assert.equal(waterPassTrendRow({ back: { passes: 1 }, prev: { passes: 1 }, cur: { passes: 1 } }), null, 'the held fold the honest silence prices')
assert.equal(waterPassTrendRow({ back: { passes: 5 }, prev: { passes: 5 }, cur: { passes: 7 } }), null, 'the half-held fold (first leg zero) the silence prices')
assert.equal(waterPassTrendRow({ back: { passes: 5 }, prev: { passes: 7 }, cur: { passes: 7 } }), null, 'the half-held fold (second leg zero) the silence prices')
assert.equal(waterPassTrendRow({ back: { passes: 0 }, prev: { passes: 3 }, cur: { passes: 0 } }), SWING + '0 -> 3 (+3) -> 0 (-3)' + SWING_TAIL, 'the zero faces ride the lawful swing - the drought\'s own honest word')

// the word's own seats - the swell and the fade and the swing one
// shape one word (the branch law)
assert.equal(waterPassTrendRow({ back: { passes: 1 }, prev: { passes: 2 }, cur: { passes: 4 } }), SWELL + '1 -> 2 (+1) -> 4 (+2)' + SWELL_TAIL, 'the rise-then-rise the swell prices')
assert.equal(waterPassTrendRow({ back: { passes: 4 }, prev: { passes: 2 }, cur: { passes: 1 } }), FADE + '4 -> 2 (-2) -> 1 (-1)' + FADE_TAIL, 'the fall-then-fall the fade prices')
assert.equal(waterPassTrendRow({ back: { passes: 1 }, prev: { passes: 4 }, cur: { passes: 2 } }), SWING + '1 -> 4 (+3) -> 2 (-2)' + SWING_TAIL, 'the traded direction the swing prices')
