// tests/unit/torchskiptrend.test.mjs - THE TORCH SKIP'S OWN TREND's
// own pin battery (v0.976.200): the torch craft's own refusal book
// mass across the faces the field's own scan named first (the 'craft
// torches: skip' family - THE BIGGEST UNPRICED VOICE THE CACHE HOLDS)
// - the field's own chains byte-exact (THE CELL'S OWN WEIGHT 17481u
// the ninety-six faces' own total, THE BIRTH FIELD 7317u the
// thirty-nine faces' own total, THE FIELD'S OWN TOP THE COUNT 335
// rode ONCE the face 359's own crest - THE STORM, THE FIELD'S OWN
// FLOOR THE COUNT 81 rode ONCE the face 377's own floor - THE
// NO-DROUGHT BIRTH the zero never rode), the field book THIRTY-SEVEN
// of THIRTY-SEVEN speaking (TWENTY-SIX swings, SEVEN swells, FOUR
// fades, the ZERO honest silences - the fifth all-speaking book the
// family holds) beside the whole-cache book NINETY-FOUR of NINETY-FOUR
// speaking (SIXTY-FIVE swings, FIFTEEN swells, FOURTEEN fades, the
// ZERO honest silences - THE ALL-SPEAKING FAMILY'S OWN NEWEST AND
// BIGGEST SEAT), THE TEN-SWING RUN W377..W386 THE FIELD'S OWN RECORD
// (the quad W354..W357, the triple W368..W370, the pairs W350/W351 +
// W372/W373) beside THE THIRTEEN-SWING RUN W417..W430 THE WHOLE-CACHE
// RECORD THE GAP-CROSSING RUN (the absent 419 the run crosses), the
// storm windows (the W359 THE STORM'S OWN ARRIVAL + the W360 THE
// CREST AND DRAIN; the W401 THE WHOLE-CACHE STORM'S OWN ARRIVAL +
// the W402 THE CLIMB AND DRAIN), the bounds' own legs pins (the
// field's +176 ONE leg ONE boundary 379/380 - THE STORM'S OWN CLIMB,
// the -175 TWO legs TWO boundaries 353/354 + 380/381 - THE NEAR-MIRROR;
// the whole-cache +200 ONE leg ONE boundary 342/343 + the -200 ONE leg
// ONE boundary 401/402 - THE MIRROR WEIGHT), the ZERO round trips (the
// swings never mirrored - the field and the whole cache agree), the
// newest adds (the W434/W435 swings + the W436 fade 143 -> 140 (-3) ->
// 104 (-36) MY WORD'S OWN FIRST LIVE READ), the near-storm beside
// (the W431 swell 144 -> 169 (+25) -> 327 (+158), the W432 swing the
// near-mirror) - the REUSE LAW (torchBook's own totals cells the fold
// rides - one-parser law, never a fork; the coal/stick/cap skins never
// split - the line's own count rides whole whatever the skin's name;
// the stick-dry rungs and the resupply asks and the terminals and the
// no-lands and the errors and the streak lines never ride - the torch
// book's own other seats; the torch lane trend's own ask book never
// rides - the lanes never merge; the skip's own zero a lawful count)
import assert from 'node:assert'
import { torchSkipTrendConsistent, torchSkipTrendRow } from '../../src/lib/torchskiptrend.mjs'
import { torchBook } from '../../src/lib/torchbook.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, this word prices the torch skip's own mass across the faces - the torch skip seat, co-existence by seat never by duplication)"

const HEAD = 'the torch skip trend (v0.976.200)'
const SWING = HEAD + ": the skip's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the skip's rise ran two steps deep - "
const SWELL_TAIL = " - the skip's own swell " + TAIL
const FADE = HEAD + ": the skip's fall ran two steps deep - "
const FADE_TAIL = " - the skip's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the torchBook's
// own skip cells arithmetic, THIRTY-NINE faces deep) - THE BIRTH FIELD
// 7317u the faces' own total
const P = {}
P[348] = 138
P[349] = 158
P[350] = 131
P[351] = 183
P[352] = 190
P[353] = 298
P[354] = 123
P[355] = 214
P[356] = 195
P[357] = 230
P[358] = 234
P[359] = 335
P[360] = 212
P[361] = 173
P[362] = 174
P[363] = 188
P[364] = 176
P[365] = 172
P[366] = 215
P[367] = 219
P[368] = 164
P[369] = 222
P[370] = 193
P[371] = 176
P[372] = 247
P[373] = 144
P[374] = 122
P[375] = 150
P[376] = 229
P[377] = 81
P[378] = 173
P[379] = 116
P[380] = 292
P[381] = 117
P[382] = 267
P[383] = 134
P[384] = 195
P[385] = 167
P[386] = 170
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 7317, "the birth field 7317u the hand-off holds - THE TORCH SKIP'S OWN SEAT rides")
assert.equal(Math.max(...Object.values(P)), 335, "THE STORM the count 335 the face 359's own crest rides - the top rode ONCE")
assert.equal(Object.values(P).filter(v => v === 335).length, 1, 'the top rode ONCE the honest crest the book holds')
assert.equal(Math.min(...Object.values(P)), 81, "the floor the count 81 the face 377's own floor rides")
assert.equal(Object.values(P).filter(v => v === 81).length, 1, 'the floor rode ONCE the honest trough the book holds')
assert.equal(Object.values(P).filter(v => v === 0).length, 0, 'THE NO-DROUGHT BIRTH the zero never rode the thirty-nine faces')
const w = (f) => torchSkipTrendRow({ back: { skips: P[f - 2] }, prev: { skips: P[f - 1] }, cur: { skips: P[f] } })

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
// classification (TWENTY-SIX swings, SEVEN swells, FOUR fades, the
// ZERO honest silences - THIRTY-SEVEN of THIRTY-SEVEN speaking: the
// fifth all-speaking book the family holds)
let fieldTally = { swing: 0, swell: 0, fade: 0, silence: 0 }
let fieldWindows = 0
for (let f = 350; f <= 386; f++) { fieldWindows++; fieldTally[tallyWindow(f, P)]++ }
assert.equal(fieldWindows, 37, 'THIRTY-SEVEN windows the field prices')
assert.equal(fieldTally.swing, 26, 'TWENTY-SIX swings the field book holds')
assert.equal(fieldTally.swell, 7, 'SEVEN swells the field book holds')
assert.equal(fieldTally.fade, 4, 'FOUR fades the field book holds')
assert.equal(fieldTally.silence, 0, 'the ZERO honest silences - the all-speaking field book')
assert.equal(fieldTally.swing + fieldTally.swell + fieldTally.fade, 37, 'the all-speaking book THIRTY-SEVEN of THIRTY-SEVEN')

// THE TEN-SWING RUN the windows W377..W386 hold - THE FIELD'S OWN
// RECORD (the quad W354..W357, the triple W368..W370, the pairs
// W350/W351 and W372/W373 the runs beside)
const runOf = (lo, hi, T, kind) => {
  for (let f = lo; f <= hi; f++) {
    if (tallyWindow(f, T) !== kind) return false
  }
  return true
}
assert.equal(runOf(377, 386, P, 'swing'), true, 'THE TEN-SWING RUN W377..W386 THE FIELD\'S OWN RECORD rides')
assert.equal(tallyWindow(376, P), 'swell', 'the ten-swing run opens beside the swell pair W376 - the boundary holds')
assert.equal(runOf(354, 357, P, 'swing'), true, 'THE QUAD SWING RUN W354..W357 rides')
assert.equal(runOf(368, 370, P, 'swing'), true, 'THE TRIPLE SWING RUN W368..W370 rides')
assert.equal(runOf(350, 351, P, 'swing'), true, 'THE SWING PAIR W350/W351 rides')
assert.equal(runOf(372, 373, P, 'swing'), true, 'THE SWING PAIR W372/W373 rides')
assert.equal(runOf(352, 353, P, 'swell'), true, 'THE SWELL PAIR W352/W353 rides')
assert.equal(runOf(358, 359, P, 'swell'), true, "THE SWELL PAIR W358/W359 THE STORM'S OWN ARRIVAL rides")
assert.equal(tallyWindow(363, P), 'swell', 'the swell solo W363 rides')
assert.equal(tallyWindow(367, P), 'swell', 'the swell solo W367 rides')
assert.equal(tallyWindow(376, P), 'swell', 'the swell solo W376 rides')
assert.equal(tallyWindow(361, P), 'fade', 'the fade solo W361 rides')
assert.equal(tallyWindow(365, P), 'fade', 'the fade solo W365 rides')
assert.equal(tallyWindow(371, P), 'fade', 'the fade solo W371 rides')
assert.equal(tallyWindow(374, P), 'fade', 'the fade solo W374 rides')
// the fade run the field never rode (the four solos never join)
let fieldFadePair = 0
for (let f = 350; f < 386; f++) if (tallyWindow(f, P) === 'fade' && tallyWindow(f + 1, P) === 'fade') fieldFadePair++
assert.equal(fieldFadePair, 0, 'no fade pair the field holds - the four solos the book rides')

// THE STORM WINDOWS - the W359 window the swell THE STORM'S OWN
// ARRIVAL + the W360 window the swing THE STORM'S OWN CREST AND DRAIN
// in ONE window; the floor's own windows beside
assert.equal(w(359), SWELL + '230 -> 234 (+4) -> 335 (+101)' + SWELL_TAIL, "the W359 window THE STORM'S OWN ARRIVAL byte-exact")
assert.equal(w(360), SWING + '234 -> 335 (+101) -> 212 (-123)' + SWING_TAIL, "the W360 window THE STORM'S OWN CREST AND DRAIN byte-exact")
assert.equal(w(377), SWING + '150 -> 229 (+79) -> 81 (-148)' + SWING_TAIL, "the W377 window THE FLOOR'S OWN ARRIVAL byte-exact")
assert.equal(w(378), SWING + '229 -> 81 (-148) -> 173 (+92)' + SWING_TAIL, "the W378 window THE FLOOR'S OWN CLIMB byte-exact")

// the last field word - the face 386's own window the swing (195 ->
// 167 (-28) -> 170 (+3))
assert.equal(w(386), SWING + '195 -> 167 (-28) -> 170 (+3)' + SWING_TAIL, 'the last field word the W386 swing byte-exact')

// THE BOUNDS' OWN LEGS - the field's own +176 the max rise rode ONE
// leg ONE boundary (the boundary 379/380 - THE STORM'S OWN CLIMB),
// the -175 the max fall rode TWO legs TWO boundaries (the boundaries
// 353/354 and 380/381 - THE NEAR-MIRROR the field prices)
{
  let maxRise = null, maxFall = null, riseLegs = 0, fallLegs = 0
  for (let n = 348; n < 386; n++) {
    const d = P[n + 1] - P[n]
    if (d > 0) { if (!maxRise || d > maxRise) maxRise = d; if (d === 176) riseLegs++ }
    if (d < 0) { if (!maxFall || d < maxFall) maxFall = d; if (d === -175) fallLegs++ }
  }
  assert.equal(maxRise, 176, 'the max rise the +176 rides')
  assert.equal(maxFall, -175, 'the max fall the -175 rides')
  assert.equal(riseLegs, 1, "the +176 rode ONE leg ONE boundary 379/380 - THE STORM'S OWN CLIMB")
  assert.equal(fallLegs, 2, 'the -175 rode TWO legs TWO boundaries 353/354 + 380/381 - THE NEAR-MIRROR')
  assert.equal(P[379], 116, 'the climb departs from the storm\'s own near-floor 116 -> 292')
  assert.equal(P[380], 292, 'the climb lands 292 the storm\'s own echo rides')
  assert.equal(P[353], 298, 'the first fall departs from 298 -> 123')
  assert.equal(P[380], 292, 'the second fall departs from 292 -> 117')
}

// THE ZERO ROUND TRIPS the field holds (the swings never mirrored)
let fieldRt = 0
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f, P) !== 'swing') continue
  const a = P[f - 2], b = P[f - 1], c = P[f]
  if (b - a !== 0 && b - a === -(c - b)) fieldRt++
}
assert.equal(fieldRt, 0, 'the round trips the field never rode - the swings never mirrored')

// THE WHOLE-CACHE SEAT - the ninety-six faces the cache holds
// (340..436 minus the absent 419 - the honest gap), the whole-cache
// book NINETY-FOUR of NINETY-FOUR speaking
const C = {}
C[340] = 121; C[341] = 193; C[342] = 111; C[343] = 311; C[344] = 168; C[345] = 126; C[346] = 20; C[347] = 140
C[348] = 138; C[349] = 158; C[350] = 131; C[351] = 183; C[352] = 190; C[353] = 298; C[354] = 123; C[355] = 214
C[356] = 195; C[357] = 230; C[358] = 234; C[359] = 335; C[360] = 212; C[361] = 173; C[362] = 174; C[363] = 188
C[364] = 176; C[365] = 172; C[366] = 215; C[367] = 219; C[368] = 164; C[369] = 222; C[370] = 193; C[371] = 176
C[372] = 247; C[373] = 144; C[374] = 122; C[375] = 150; C[376] = 229; C[377] = 81; C[378] = 173; C[379] = 116
C[380] = 292; C[381] = 117; C[382] = 267; C[383] = 134; C[384] = 195; C[385] = 167; C[386] = 170; C[387] = 286
C[388] = 133; C[389] = 254; C[390] = 233; C[391] = 172; C[392] = 93; C[393] = 131; C[394] = 194; C[395] = 209
C[396] = 32; C[397] = 202; C[398] = 155; C[399] = 122; C[400] = 176; C[401] = 364; C[402] = 164; C[403] = 172
C[404] = 302; C[405] = 196; C[406] = 154; C[407] = 247; C[408] = 117; C[409] = 162; C[410] = 191; C[411] = 194
C[412] = 168; C[413] = 276; C[414] = 215; C[415] = 162; C[416] = 155; C[417] = 237; C[418] = 193; C[420] = 234
C[421] = 176; C[422] = 224; C[423] = 129; C[424] = 157; C[425] = 103; C[426] = 201; C[427] = 112; C[428] = 243
C[429] = 144; C[430] = 169; C[431] = 327; C[432] = 170; C[433] = 137; C[434] = 143; C[435] = 140; C[436] = 104
const cachedFaces = Object.keys(C).map(Number).sort((a, b) => a - b)
assert.equal(cachedFaces.length, 96, 'the ninety-six faces the cache holds')
assert.equal(cachedFaces.includes(419), false, 'the absent 419 the honest gap the cache holds not')
let wholeSum = 0
for (const f of cachedFaces) wholeSum += C[f]
assert.equal(wholeSum, 17481, 'the whole-cache 17481u the ninety-six faces ride')
// the whole-cache extremes
assert.equal(Math.max(...Object.values(C)), 364, 'the whole-cache top the count 364 - THE WHOLE-CACHE STORM the face 401 rides')
assert.equal(Object.values(C).filter(v => v === 364).length, 1, 'the whole-cache top rode ONCE')
assert.equal(Math.min(...Object.values(C)), 20, 'the whole-cache floor the count 20 the craft-starved face rides')
assert.deepEqual(cachedFaces.filter(f => C[f] === 20), [346], "the floor rode ONCE - the face 346's own twenty")
assert.equal(Object.values(C).filter(v => v === 0).length, 0, 'the whole cache the zero never rode - the no-drought cache')
// the newest adds
assert.equal(C[434], 143, "the face 434's own 143u rides")
assert.equal(C[435], 140, "the face 435's own 140u rides")
assert.equal(C[436], 104, "the face 436's own 104u the newest add rides")

// the whole-cache windows - NINETY-FOUR over the cached sequence (the
// windows ride the CACHED SEQUENCE's own positions - the absent 419
// the honest gap the windows cross, the face-number arithmetic never
// prices the gap)
const posOf = new Map(cachedFaces.map((f, i) => [f, i]))
const wc = (f) => {
  const i = posOf.get(f)
  return torchSkipTrendRow({ back: { skips: C[cachedFaces[i - 2]] }, prev: { skips: C[cachedFaces[i - 1]] }, cur: { skips: C[cachedFaces[i]] } })
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
assert.equal(wholeWindows, 94, 'NINETY-FOUR windows the whole cache prices')
assert.equal(wholeTally.swing, 65, 'SIXTY-FIVE swings the whole-cache book holds')
assert.equal(wholeTally.swell, 15, 'FIFTEEN swells the whole-cache book holds')
assert.equal(wholeTally.fade, 14, 'FOURTEEN fades the whole-cache book holds')
assert.equal(wholeTally.silence, 0, 'the ZERO honest silences - THE ALL-SPEAKING FAMILY\'S OWN NEWEST AND BIGGEST SEAT')
assert.equal(wholeTally.swing + wholeTally.swell + wholeTally.fade, 94, 'the all-speaking book NINETY-FOUR of NINETY-FOUR')

// THE THIRTEEN-SWING RUN the windows W417..W430 hold - THE WHOLE-CACHE
// RECORD THE GAP-CROSSING RUN (the absent 419 the run crosses); the
// ten-swing run W377..W386 the field's own record beside
const runOfCached = (lo, hi, kind) => {
  const a = posOf.get(lo), b = posOf.get(hi)
  if (a === undefined || b === undefined) return false
  for (let i = a; i <= b; i++) {
    if (wcShape(cachedFaces[i]) !== kind) return false
  }
  return true
}
assert.equal(runOfCached(417, 430, 'swing'), true, 'THE THIRTEEN-SWING RUN W417..W430 THE GAP-CROSSING RUN rides')
assert.equal(wcShape(416), 'fade', 'the fade pair W415/W416 the run opens beside')
assert.equal(wcShape(431), 'swell', 'the near-storm W431 the run closes beside')
assert.equal(runOfCached(377, 386, 'swing'), true, 'THE TEN-SWING RUN W377..W386 the whole cache rides beside')
// the gap-crossing windows the run rides
assert.equal(wc(420), SWING + '237 -> 193 (-44) -> 234 (+41)' + SWING_TAIL, 'the W420 gap-crossing window byte-exact')
assert.equal(wc(421), SWING + '193 -> 234 (+41) -> 176 (-58)' + SWING_TAIL, 'the W421 gap-crossing window byte-exact')
assert.equal(cachedFaces.includes(419), false, 'the W419 window never rides - the absent face the honest gap holds not')

// THE STORM WINDOWS the whole cache prices beside - the W401 window
// the swell THE WHOLE-CACHE STORM'S OWN ARRIVAL + the W402 window the
// swing THE WHOLE-CACHE STORM'S OWN CLIMB AND DRAIN in ONE window
assert.equal(wc(401), SWELL + '122 -> 176 (+54) -> 364 (+188)' + SWELL_TAIL, "the W401 window THE WHOLE-CACHE STORM'S OWN ARRIVAL byte-exact")
assert.equal(wc(402), SWING + '176 -> 364 (+188) -> 164 (-200)' + SWING_TAIL, "the W402 window THE WHOLE-CACHE STORM'S OWN CLIMB AND DRAIN byte-exact")
assert.equal(wc(403), SWING + '364 -> 164 (-200) -> 172 (+8)' + SWING_TAIL, 'the W403 window the drain\'s own echo byte-exact')

// THE BOUNDS' OWN LEGS the whole cache prices - the +200 the max rise
// rode ONE leg ONE boundary (the boundary 342/343 - THE TWO HUNDRED'S
// OWN CLIMB 111 -> 311), the -200 the max fall rode ONE leg ONE
// boundary (the boundary 401/402 - THE WHOLE-CACHE STORM'S OWN DRAIN
// 364 -> 164) - THE MIRROR WEIGHT the whole cache prices
{
  let maxRise = null, maxFall = null, riseLegs = 0, fallLegs = 0
  for (let i = 1; i < cachedFaces.length; i++) {
    const d = C[cachedFaces[i]] - C[cachedFaces[i - 1]]
    if (d > 0) { if (!maxRise || d > maxRise) maxRise = d; if (d === 200) riseLegs++ }
    if (d < 0) { if (!maxFall || d < maxFall) maxFall = d; if (d === -200) fallLegs++ }
  }
  assert.equal(maxRise, 200, 'the max rise the +200 rides')
  assert.equal(maxFall, -200, 'the max fall the -200 rides')
  assert.equal(riseLegs, 1, "the +200 rode ONE leg ONE boundary 342/343 - THE TWO HUNDRED'S OWN CLIMB")
  assert.equal(fallLegs, 1, "the -200 rode ONE leg ONE boundary 401/402 - THE WHOLE-CACHE STORM'S OWN DRAIN")
  assert.equal(maxRise, -maxFall, 'THE MIRROR WEIGHT the whole cache prices (the +200 and the -200 the same weight)')
  assert.equal(C[342], 111, 'the climb departs from the face 342\'s own 111 -> 311')
  assert.equal(C[401], 364, 'the drain departs from the storm\'s own crest 364 -> 164')
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

// the near-storm beside - the face 431's own 327u the W431 window the
// swell rides, the W432 window the swing the near-mirror prices, the
// W433 fade the echo closes
assert.equal(C[431], 327, "the face 431's own 327u the near-storm rides")
assert.equal(wc(431), SWELL + '144 -> 169 (+25) -> 327 (+158)' + SWELL_TAIL, 'the W431 window the near-storm\'s own arrival byte-exact')
assert.equal(wc(432), SWING + '169 -> 327 (+158) -> 170 (-157)' + SWING_TAIL, 'the W432 window the near-storm\'s own climb and drain byte-exact')
assert.equal(wc(433), FADE + '327 -> 170 (-157) -> 137 (-33)' + FADE_TAIL, 'the W433 window the near-storm\'s own echo byte-exact')

// THE NEWEST ADDS - the W434/W435 windows the swings, the W436 window
// the fade MY WORD'S OWN FIRST LIVE READ
assert.equal(wc(434), SWING + '170 -> 137 (-33) -> 143 (+6)' + SWING_TAIL, 'the W434 window the swing byte-exact')
assert.equal(wc(435), SWING + '137 -> 143 (+6) -> 140 (-3)' + SWING_TAIL, 'the W435 window the swing byte-exact')
assert.equal(wc(436), FADE + '143 -> 140 (-3) -> 104 (-36)' + FADE_TAIL, 'the W436 window MY WORD\'S OWN FIRST LIVE READ byte-exact')

// the pairs the whole cache holds beside (the runs' own two-windows)
assert.equal(runOfCached(352, 353, 'swell'), true, 'the swell pair W352/W353 the whole cache rides')
assert.equal(runOfCached(394, 395, 'swell'), true, 'the swell pair W394/W395 rides')
assert.equal(runOfCached(410, 411, 'swell'), true, 'the swell pair W410/W411 rides')
assert.equal(runOfCached(345, 346, 'fade'), true, "the fade pair W345/W346 THE FLOOR'S OWN ARRIVAL rides")
assert.equal(runOfCached(391, 392, 'fade'), true, 'the fade pair W391/W392 rides')
assert.equal(runOfCached(415, 416, 'fade'), true, 'the fade pair W415/W416 rides')
assert.equal(runOfCached(372, 373, 'swing'), true, 'the swing pair W372/W373 rides')
assert.equal(runOfCached(402, 403, 'swing'), true, "the swing pair W402/W403 THE STORM'S OWN pair rides")
assert.equal(runOfCached(434, 435, 'swing'), true, 'the swing pair W434/W435 the newest rides')

// ---- THE REUSE LAW battery - torchBook's own cells the fold rides ----
// the coal skin and the stick skin and the cap skin never split - the
// line's own count rides whole whatever the skin's name
{
  const lines = [
    'F9 [F9] craft torches: skip (no coal: sticks 4 coals 0)',
    'F1 [F1] craft torches: skip (no spare sticks: sticks 0 coals 1)',
    'F2 [F2] craft torches: skip (the pocket torch cap: held 12 of 12 - sticks 3 coals 9)',
    'F9 [F9] craft torches: skip (no coal: sticks 2 coals 0)'
  ]
  const tb = torchBook(lines)
  const t = tb.totals
  const skips = (t.coalSkips || 0) + (t.stickSkips || 0) + (t.capDeclines || 0)
  assert.equal(skips, 4, 'the three skins the line\'s own count rides whole (2 coal + 1 stick + 1 cap)')
  const row = torchSkipTrendRow({ back: { skips: skips + 2 }, prev: { skips: skips + 1 }, cur: { skips } })
  assert.equal(row, FADE + '6 -> 5 (-1) -> 4 (-1)' + FADE_TAIL, 'the fold rides the census\'s own cells - the word byte-exact over the real book')
}
// the torch book's own other seats never ride - the skip seat alone
{
  const lines = [
    'F9 [F9] craft torches: stick-dry with logs held - one plank conversion first',
    'F9 [F9] craft torches: stick-dry but 10 planks held - one stick batch first',
    'F9 [F9] craft torches: pocket coal dry (sticks 1) - the torch-coal resupply asks the commons (2 coal)',
    'F9 [F9] craft torches: 1 batch(es) -> 4 torches (sticks 3 coals 9)',
    'F9 [F9] craft torches: craft did not land (held 0 torch(es))',
    'F9 [F9] craft torches: failed: the craft table grew legs',
    'F9 [F9] torch: the placement did not land (dry) x1 - the streak names itself once, a landing re-arms it'
  ]
  const tb = torchBook(lines)
  const t = tb.totals
  const skips = (t.coalSkips || 0) + (t.stickSkips || 0) + (t.capDeclines || 0)
  assert.equal(skips, 0, 'the rungs and the asks and the terminals and the no-lands and the errors and the streaks never ride - the skip seat alone')
  assert.equal(torchSkipTrendRow({ back: { skips: 5 }, prev: { skips: 5 }, cur: { skips } }), null, 'the held step the honest silence prices')
}

// ---- the fence batteries ----
assert.equal(torchSkipTrendConsistent(null), false, 'the null fold the fence refuses')
assert.equal(torchSkipTrendConsistent(undefined), false, 'the undefined fold the fence refuses')
assert.equal(torchSkipTrendConsistent([]), false, 'the array fold the fence refuses')
assert.equal(torchSkipTrendConsistent({}), false, 'the empty fold the fence refuses')
assert.equal(torchSkipTrendConsistent({ back: { skips: 1 }, prev: { skips: 1 } }), false, 'the two-face fold the fence refuses')
assert.equal(torchSkipTrendConsistent({ back: { skips: 1 }, prev: { skips: 1 }, cur: { skips: 1.5 } }), false, 'the fractional count the fence refuses')
assert.equal(torchSkipTrendConsistent({ back: { skips: 1 }, prev: { skips: 1 }, cur: { skips: -1 } }), false, 'the negative count the fence refuses')
assert.equal(torchSkipTrendConsistent({ back: { skips: 1 }, prev: { skips: 1 }, cur: { skips: '3' } }), false, 'the string count the fence refuses')
assert.equal(torchSkipTrendConsistent({ back: { skips: 0 }, prev: { skips: 0 }, cur: { skips: 0 } }), true, 'the zero fold the fence keeps - the no-drought birth\'s own honest zero')
assert.equal(torchSkipTrendConsistent({ back: { skips: 1, extra: 'x' }, prev: { skips: 2 }, cur: { skips: 3 } }), true, 'the extra keys never rejected')
assert.equal(torchSkipTrendRow(null), null, 'the null fold prices nothing')
assert.equal(torchSkipTrendRow({ back: { skips: 1 }, prev: { skips: 1 }, cur: { skips: 1 } }), null, 'the held fold the honest silence prices')
assert.equal(torchSkipTrendRow({ back: { skips: 5 }, prev: { skips: 5 }, cur: { skips: 7 } }), null, 'the half-held fold (first leg zero) the silence prices')
assert.equal(torchSkipTrendRow({ back: { skips: 5 }, prev: { skips: 7 }, cur: { skips: 7 } }), null, 'the half-held fold (second leg zero) the silence prices')
assert.equal(torchSkipTrendRow({ back: { skips: 0 }, prev: { skips: 3 }, cur: { skips: 0 } }), SWING + '0 -> 3 (+3) -> 0 (-3)' + SWING_TAIL, 'the zero faces ride the lawful swing - the drought\'s own honest word')

// the word's own seats - the swell and the fade and the swing one
// shape one word (the branch law)
assert.equal(torchSkipTrendRow({ back: { skips: 1 }, prev: { skips: 2 }, cur: { skips: 4 } }), SWELL + '1 -> 2 (+1) -> 4 (+2)' + SWELL_TAIL, 'the rise-then-rise the swell prices')
assert.equal(torchSkipTrendRow({ back: { skips: 4 }, prev: { skips: 2 }, cur: { skips: 1 } }), FADE + '4 -> 2 (-2) -> 1 (-1)' + FADE_TAIL, 'the fall-then-fall the fade prices')
assert.equal(torchSkipTrendRow({ back: { skips: 1 }, prev: { skips: 4 }, cur: { skips: 2 } }), SWING + '1 -> 4 (+3) -> 2 (-2)' + SWING_TAIL, 'the traded direction the swing prices')
