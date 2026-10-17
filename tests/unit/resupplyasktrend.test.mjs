// tests/unit/resupplyasktrend.test.mjs - THE RESUPPLY ASK'S OWN
// TREND's own pin battery (v0.976.207): the torch-coal resupply ask's
// own mass across the faces the field's own scan named first (the
// 'craft torches: pocket' family) - the field's own chains byte-exact
// (THE CELL'S OWN WEIGHT 3470u the one-hundred-three faces' own total,
// THE BIRTH FIELD 1710u the fifty faces' own total, THE NO-DROUGHT
// BIRTH the zero never rode the fifty faces beside the whole cache the
// zero never rode either - the family's own BIGGEST no-drought seat
// the pair rides - the eighth seat, THE FIELD'S OWN TOP THE COUNT 48
// rode ONCE the face 343's own crest - THE STORM, THE FIELD'S OWN
// FLOOR THE COUNT 12 rode ONCE the face 346's own floor, the
// whole-cache top THE COUNT 51 rode ONCE the face 431's own crest -
// THE WHOLE-CACHE STORM, the whole-cache floor THE COUNT 12 rode TWICE
// the faces 346/396's own floors), the FIELD BOOK FORTY-ONE of
// FORTY-EIGHT windows speaking (THIRTY-TWO swings, FOUR swells, FIVE
// fades, the SEVEN honest silences - the silence pairs the faces
// 357/358 and 363/364 and 372/373 hold beside the W342 solo) beside
// the whole-cache book NINETY-TWO of ONE-HUNDRED-ONE speaking
// (SIXTY-SIX swings, ELEVEN swells, FIFTEEN fades, the NINE honest
// silences - the W406/W407 pair the cache adds), THE THIRTEEN-SWING
// RUN 374..386 THE RECORD both books ride, the ROUND TRIPS (the THREE
// the same windows both books price - the W380 weight-14 mirror beside
// the W385/W386 back-to-back mirror pair), the bounds' own legs pins
// (the field's +23 rode ONE leg ONE boundary the boundary 342/343 -
// THE STORM'S OWN CLIMB, the -18 rode ONE leg ONE boundary the
// boundary 345/346 - THE FLOOR'S OWN ARRIVAL; the whole cache the +25
// ONE leg ONE boundary 430/431 - THE WHOLE-CACHE STORM'S OWN CLIMB,
// the -28 ONE leg ONE boundary 395/396 - THE FLOOR'S OWN ARRIVAL the
// same boundary the stick-drought rung's own leg prices beside), the
// last field word the face 389's own window the swing (41 -> 28 (-13)
// -> 47 (+19)), the whole-cache pins (the 3470u over the
// one-hundred-three faces, the W436..W439 swings and the W440/W441
// swells and the W442 swing and the W443 fade 47 -> 31 (-16) -> 30
// (-1) MY WORD'S OWN FIRST LIVE READ), the REUSE LAW battery
// (torchBook's own resupplyAsks cell the fold rides - the ask's own
// count rides whole, the skip family and the rung family and the
// sweep receipts never ride - the .200 and the .206 and the .89 words'
// own seats beside, the lanes never merge), the fence battery
import assert from 'node:assert'
import { resupplyAskTrendConsistent, resupplyAskTrendRow } from '../../src/lib/resupplyasktrend.mjs'
import { torchBook } from '../../src/lib/torchbook.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, this word prices the resupply ask's own mass across the faces - the resupply ask seat, co-existence by seat never by duplication)"

const HEAD = 'the resupply ask trend (v0.976.207)'
const SWING = HEAD + ": the ask's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the ask's rise ran two steps deep - "
const SWELL_TAIL = " - the ask's own swell " + TAIL
const FADE = HEAD + ": the ask's fall ran two steps deep - "
const FADE_TAIL = " - the ask's own fade " + TAIL

const tallyWindow = (f, T) => {
  const a = T[f - 2], b = T[f - 1], c = T[f]
  const first = b - a, second = c - b
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}

// THE FIELD'S OWN TABLE - the priced field 340..389 (the ask cells'
// own arithmetic, FIFTY faces deep - the lane the cache's own dawn
// already asked) - THE BIRTH FIELD 1710u the faces' own total, THE
// NO-DROUGHT BIRTH the zero never rode, THE FIELD'S OWN TOP THE COUNT
// 48 rode ONCE (the face 343's own crest - THE STORM), THE FIELD'S OWN
// FLOOR THE COUNT 12 rode ONCE (the face 346's own floor)
const P = {}
P[340] = 32
P[341] = 32
P[342] = 25
P[343] = 48
P[344] = 32
P[345] = 30
P[346] = 12
P[347] = 32
P[348] = 36
P[349] = 35
P[350] = 25
P[351] = 36
P[352] = 33
P[353] = 42
P[354] = 34
P[355] = 45
P[356] = 38
P[357] = 38
P[358] = 37
P[359] = 41
P[360] = 39
P[361] = 33
P[362] = 31
P[363] = 31
P[364] = 29
P[365] = 34
P[366] = 35
P[367] = 37
P[368] = 27
P[369] = 40
P[370] = 33
P[371] = 37
P[372] = 37
P[373] = 26
P[374] = 34
P[375] = 33
P[376] = 41
P[377] = 24
P[378] = 42
P[379] = 29
P[380] = 42
P[381] = 32
P[382] = 41
P[383] = 29
P[384] = 33
P[385] = 29
P[386] = 33
P[387] = 41
P[388] = 28
P[389] = 47

const pr = (f) => resupplyAskTrendRow({ back: { asks: P[f - 2] }, prev: { asks: P[f - 1] }, cur: { asks: P[f] } })

// THE BIRTH FIELD - the fifty faces the no-drought birth prices
const pKeys = Object.keys(P).map(Number).sort((a, b) => a - b)
let pSum = 0
for (const k of pKeys) pSum += P[k]
assert.equal(pKeys.length, 50, 'the fifty faces the field prices')
assert.equal(pSum, 1710, 'THE BIRTH FIELD 1710u the fifty faces ride')
assert.equal(Object.values(P).filter(v => v === 0).length, 0, 'THE NO-DROUGHT BIRTH the zero never rode - the fifty faces')
assert.equal(P[343], 48, "THE FIELD'S OWN TOP the face 343's own crest - THE STORM")
assert.equal(Object.values(P).filter(v => v === 48).length, 1, 'the field top rode ONCE')
assert.equal(P[346], 12, "THE FIELD'S OWN FLOOR the face 346's own 12")
assert.equal(Object.values(P).filter(v => v === 12).length, 1, 'the field floor rode ONCE')

// THE FIELD'S OWN BOOK - the tally over the ordered field
let pswing = 0, pswell = 0, pfade = 0, psilence = 0
const pSilences = []
for (let i = 2; i < pKeys.length; i++) {
  const k = tallyWindow(pKeys[i], P)
  if (k === 'swing') pswing++
  else if (k === 'swell') pswell++
  else if (k === 'fade') pfade++
  else { psilence++; pSilences.push(pKeys[i]) }
}
assert.equal(pswing, 32, 'THIRTY-TWO swings the field prices')
assert.equal(pswell, 4, 'FOUR swells the field prices')
assert.equal(pfade, 5, 'FIVE fades the field prices')
assert.equal(psilence, 7, 'the SEVEN honest silences the field prices - the held steps')
assert.deepEqual(pSilences, [342, 357, 358, 363, 364, 372, 373], 'the silence pairs the faces 357/358 and 363/364 and 372/373 hold beside the W342 solo')
assert.equal(pswing + pswell + pfade + psilence, 48, 'the FORTY-EIGHT field windows ride')
assert.equal(pswing + pswell + pfade, 41, 'the FORTY-ONE windows speak')

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (FOUR swells, FIVE fades - the byte-exact arcs)
assert.equal(pr(342), null, 'the W342 window the held first step the honest silence prices')
assert.equal(pr(345), FADE + '48 -> 32 (-16) -> 30 (-2)' + FADE_TAIL, "the W345 window the storm's own drain rides")
assert.equal(pr(346), FADE + '32 -> 30 (-2) -> 12 (-18)' + FADE_TAIL, "the W346 window the floor's own arrival rides - the -18 the biggest fall the field prices")
assert.equal(pr(348), SWELL + '12 -> 32 (+20) -> 36 (+4)' + SWELL_TAIL, "the W348 window the floor's own rebound rides")
assert.equal(pr(350), FADE + '36 -> 35 (-1) -> 25 (-10)' + FADE_TAIL, 'the W350 window the fade rides')
assert.equal(pr(357), null, 'the W357 window the held second step the honest silence prices')
assert.equal(pr(358), null, 'the W358 window the held first step the honest silence prices')
assert.equal(pr(361), FADE + '41 -> 39 (-2) -> 33 (-6)' + FADE_TAIL, 'the W361 window the fade rides')
assert.equal(pr(362), FADE + '39 -> 33 (-6) -> 31 (-2)' + FADE_TAIL, 'the W362 window the fade rides')
assert.equal(pr(363), null, 'the W363 window the held second step the honest silence prices')
assert.equal(pr(364), null, 'the W364 window the held first step the honest silence prices')
assert.equal(pr(366), SWELL + '29 -> 34 (+5) -> 35 (+1)' + SWELL_TAIL, 'the W366 window the swell rides')
assert.equal(pr(367), SWELL + '34 -> 35 (+1) -> 37 (+2)' + SWELL_TAIL, 'the W367 window the swell rides')
assert.equal(pr(372), null, 'the W372 window the held second step the honest silence prices')
assert.equal(pr(373), null, 'the W373 window the held first step the honest silence prices')
assert.equal(pr(387), SWELL + '29 -> 33 (+4) -> 41 (+8)' + SWELL_TAIL, 'the W387 window the swell rides - the run bounds hold')

// THE THIRTEEN-SWING RUN - THE RECORD the field prices (the bounds
// never extend - the silence 373 and the swell 387 hold)
let pRun = [], pCur = []
for (let i = 2; i < pKeys.length; i++) {
  const k = tallyWindow(pKeys[i], P)
  if (k === 'swing') { pCur.push(pKeys[i]); if (pCur.length > pRun.length) pRun = [...pCur] } else pCur = []
}
assert.equal(pRun.length, 13, 'THE THIRTEEN-SWING RUN the field holds - THE RECORD')
assert.deepEqual(pRun, [374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386], 'the thirteen-swing run the faces 374..386 hold')

// THE ROUND TRIPS - the THREE mirrors the field prices (the W380
// weight-14 mirror beside the W385/W386 back-to-back mirror pair)
assert.equal(pr(380), SWING + '42 -> 29 (-13) -> 42 (+13)' + SWING_TAIL, 'the W380 window the weight-14 mirror rides')
assert.equal(pr(385), SWING + '29 -> 33 (+4) -> 29 (-4)' + SWING_TAIL, 'the W385 window the first back-to-back mirror rides')
assert.equal(pr(386), SWING + '33 -> 29 (-4) -> 33 (+4)' + SWING_TAIL, 'the W386 window the second back-to-back mirror rides')

// THE FIELD'S OWN BOUNDS' LEGS - the +23 and the -18 rode ONE leg ONE
// boundary each (THE STORM'S OWN CLIMB, THE FLOOR'S OWN ARRIVAL)
let pRises = [], pFalls = []
for (let i = 1; i < pKeys.length; i++) {
  const d = P[pKeys[i]] - P[pKeys[i - 1]]
  if (d === 23) pRises.push(`${pKeys[i - 1]}/${pKeys[i]}`)
  if (d === -18) pFalls.push(`${pKeys[i - 1]}/${pKeys[i]}`)
}
assert.equal(pRises.length, 1, 'the +23 rode ONE leg')
assert.deepEqual(pRises, ['342/343'], "the +23 rode ONE leg ONE boundary the boundary 342/343 - THE STORM'S OWN CLIMB")
assert.equal(pFalls.length, 1, 'the -18 rode ONE leg')
assert.deepEqual(pFalls, ['345/346'], "the -18 rode ONE leg ONE boundary the boundary 345/346 - THE FLOOR'S OWN ARRIVAL the crest paid 48 -> 12")

// THE LAST FIELD WORD - the face 389's own window the swing
assert.equal(pr(389), SWING + '41 -> 28 (-13) -> 47 (+19)' + SWING_TAIL, 'the last field word the face 389 own window the swing rides')

// THE WHOLE-CACHE TABLE - the cache's own arithmetic over the ordered
// cached faces (the span 340..443, the absent 419 the honest gap) -
// THE CELL'S OWN WEIGHT 3470u, THE NO-DROUGHT the zero never rode
// either (the family's own BIGGEST no-drought seat - the eighth)
const W = {}
W[340] = 32
W[341] = 32
W[342] = 25
W[343] = 48
W[344] = 32
W[345] = 30
W[346] = 12
W[347] = 32
W[348] = 36
W[349] = 35
W[350] = 25
W[351] = 36
W[352] = 33
W[353] = 42
W[354] = 34
W[355] = 45
W[356] = 38
W[357] = 38
W[358] = 37
W[359] = 41
W[360] = 39
W[361] = 33
W[362] = 31
W[363] = 31
W[364] = 29
W[365] = 34
W[366] = 35
W[367] = 37
W[368] = 27
W[369] = 40
W[370] = 33
W[371] = 37
W[372] = 37
W[373] = 26
W[374] = 34
W[375] = 33
W[376] = 41
W[377] = 24
W[378] = 42
W[379] = 29
W[380] = 42
W[381] = 32
W[382] = 41
W[383] = 29
W[384] = 33
W[385] = 29
W[386] = 33
W[387] = 41
W[388] = 28
W[389] = 47
W[390] = 39
W[391] = 29
W[392] = 21
W[393] = 32
W[394] = 36
W[395] = 40
W[396] = 12
W[397] = 33
W[398] = 24
W[399] = 32
W[400] = 31
W[401] = 48
W[402] = 35
W[403] = 32
W[404] = 44
W[405] = 36
W[406] = 36
W[407] = 41
W[408] = 28
W[409] = 34
W[410] = 35
W[411] = 42
W[412] = 31
W[413] = 40
W[414] = 33
W[415] = 25
W[416] = 28
W[417] = 41
W[418] = 33
W[420] = 45
W[421] = 31
W[422] = 35
W[423] = 30
W[424] = 26
W[425] = 22
W[426] = 41
W[427] = 26
W[428] = 39
W[429] = 35
W[430] = 26
W[431] = 51
W[432] = 32
W[433] = 28
W[434] = 23
W[435] = 32
W[436] = 19
W[437] = 35
W[438] = 27
W[439] = 37
W[440] = 41
W[441] = 47
W[442] = 31
W[443] = 30

const wr = (f) => resupplyAskTrendRow({ back: { asks: W[f - 2] }, prev: { asks: W[f - 1] }, cur: { asks: W[f] } })
let wholeSum = 0
for (const k of Object.keys(W)) wholeSum += W[k]
assert.equal(Object.keys(W).length, 103, 'the one-hundred-three faces the cache holds')
assert.equal(wholeSum, 3470, 'THE WHOLE-CACHE SEAT 3470u the one-hundred-three faces ride')
assert.equal(Object.values(W).filter(v => v === 0).length, 0, 'THE NO-DROUGHT the whole cache prices - the zero never rode, the family own BIGGEST no-drought seat - the eighth')
assert.equal(W[431], 51, "THE WHOLE-CACHE STORM the face 431's own 51 rode ONCE")
assert.equal(Object.values(W).filter(v => v === 51).length, 1, 'the whole-cache top rode ONCE')
assert.equal(W[346], 12, "THE WHOLE-CACHE FLOOR the face 346's own 12")
assert.equal(W[396], 12, "THE WHOLE-CACHE FLOOR the face 396's own 12 - the water pass's own drought face the floor shares beside")
assert.equal(Object.values(W).filter(v => v === 12).length, 2, 'the whole-cache floor rode TWICE')

// THE WHOLE-CACHE BOOK - the gap-crossing tally over the ordered
// cached faces (the absent 419 the windows cross, the honest gap -
// the tally rides the ARRAY POSITIONS, never the face numbers: the
// gap the positions cross, the face-number read the gap prices as a
// lie)
const wFaces = Object.keys(W).map(Number).sort((a, b) => a - b)
const clsArc = (a, b, c) => {
  const first = b - a, second = c - b
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}
let wswing = 0, wswell = 0, wfade = 0, wsilence = 0
const wSilences = []
for (let i = 2; i < wFaces.length; i++) {
  const k = clsArc(W[wFaces[i - 2]], W[wFaces[i - 1]], W[wFaces[i]])
  if (k === 'swing') wswing++
  else if (k === 'swell') wswell++
  else if (k === 'fade') wfade++
  else { wsilence++; wSilences.push(wFaces[i]) }
}
assert.equal(wswing, 66, 'SIXTY-SIX swings the whole cache prices')
assert.equal(wswell, 11, 'ELEVEN swells the whole cache prices')
assert.equal(wfade, 15, 'FIFTEEN fades the whole cache prices')
assert.equal(wsilence, 9, 'the NINE honest silences the whole cache prices')
assert.deepEqual(wSilences, [342, 357, 358, 363, 364, 372, 373, 406, 407], 'the field silences beside the W406/W407 pair the cache adds')
assert.equal(wswing + wswell + wfade + wsilence, 101, 'the ONE-HUNDRED-ONE whole-cache windows ride')
assert.equal(wswing + wswell + wfade, 92, 'the NINETY-TWO windows speak')

// THE THIRTEEN-SWING RUN - THE RECORD both books ride (the same run
// the field prices - the gap-crossing tally over the ordered faces)
let wRun = [], wCur = []
for (let i = 2; i < wFaces.length; i++) {
  const k = clsArc(W[wFaces[i - 2]], W[wFaces[i - 1]], W[wFaces[i]])
  if (k === 'swing') { wCur.push(wFaces[i]); if (wCur.length > wRun.length) wRun = [...wCur] } else wCur = []
}
assert.equal(wRun.length, 13, 'THE THIRTEEN-SWING RUN the whole cache holds - THE RECORD')
assert.deepEqual(wRun, [374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386], 'the thirteen-swing run the same faces hold')

// THE ROUND TRIPS - the THREE mirrors both books price (the same
// windows the field holds)
assert.equal(wr(380), SWING + '42 -> 29 (-13) -> 42 (+13)' + SWING_TAIL, 'the W380 weight-14 mirror the cache shares')
assert.equal(wr(385), SWING + '29 -> 33 (+4) -> 29 (-4)' + SWING_TAIL, 'the W385 mirror the cache shares')
assert.equal(wr(386), SWING + '33 -> 29 (-4) -> 33 (+4)' + SWING_TAIL, 'the W386 mirror the cache shares')

// THE WHOLE-CACHE BOUNDS' OWN LEGS - the +25 and the -28 rode ONE leg
// ONE boundary each (THE WHOLE-CACHE STORM'S OWN CLIMB, THE FLOOR'S
// OWN ARRIVAL)
let wrises = [], wfalls = []
for (let i = 1; i < wFaces.length; i++) {
  const d = W[wFaces[i]] - W[wFaces[i - 1]]
  if (d === 25) wrises.push(`${wFaces[i - 1]}/${wFaces[i]}`)
  if (d === -28) wfalls.push(`${wFaces[i - 1]}/${wFaces[i]}`)
}
assert.equal(wrises.length, 1, 'the +25 rode ONE leg')
assert.deepEqual(wrises, ['430/431'], "the +25 rode ONE leg ONE boundary the boundary 430/431 - THE WHOLE-CACHE STORM'S OWN CLIMB")
assert.equal(wfalls.length, 1, 'the -28 rode ONE leg')
assert.deepEqual(wfalls, ['395/396'], "the -28 rode ONE leg ONE boundary the boundary 395/396 - THE FLOOR'S OWN ARRIVAL the same boundary the stick-drought rung's own leg prices beside")

// THE NEWEST WINDOWS - the W436..W439 swings and the W440/W441 swells
// and the W442 swing and the W443 fade (MY WORD'S OWN FIRST LIVE READ
// the nearest-completed law holds)
assert.equal(wr(436), SWING + '23 -> 32 (+9) -> 19 (-13)' + SWING_TAIL, 'the W436 window the swing rides')
assert.equal(wr(437), SWING + '32 -> 19 (-13) -> 35 (+16)' + SWING_TAIL, 'the W437 window the swing rides')
assert.equal(wr(438), SWING + '19 -> 35 (+16) -> 27 (-8)' + SWING_TAIL, 'the W438 window the swing rides')
assert.equal(wr(439), SWING + '35 -> 27 (-8) -> 37 (+10)' + SWING_TAIL, 'the W439 window the swing rides')
assert.equal(wr(440), SWELL + '27 -> 37 (+10) -> 41 (+4)' + SWELL_TAIL, 'the W440 window the swell rides')
assert.equal(wr(441), SWELL + '37 -> 41 (+4) -> 47 (+6)' + SWELL_TAIL, 'the W441 window the swell rides')
assert.equal(wr(442), SWING + '41 -> 47 (+6) -> 31 (-16)' + SWING_TAIL, 'the W442 window the swing rides')
assert.equal(wr(443), FADE + '47 -> 31 (-16) -> 30 (-1)' + FADE_TAIL, "the W443 window the fade rides - MY WORD'S OWN FIRST LIVE READ")

// THE REUSE LAW battery - torchBook's own resupplyAsks cell the fold
// rides (the ask's own count rides whole, the skip family and the rung
// family and the sweep receipts never ride - the .200 and the .206 and
// the .89 words' own seats beside, the lanes never merge)
const tbOf = (ls) => {
  const t = torchBook(ls)
  return t ? t.totals.resupplyAsks : 0
}
const L = (s) => tbOf(s.split('\n'))
assert.equal(L('F2 [F2] craft torches: pocket coal dry (sticks 1) - the torch-coal resupply asks the commons (2 coal)'), 1, 'the ask rides')
assert.equal(L('F9 [F9] craft torches: pocket coal dry (sticks 0) - the torch-coal resupply asks the commons (4 coal)'), 1, 'the zero-stick ask rides the same skin')
assert.equal(L('F2 [F2] craft torches: skip (no coal: sticks 4 coals 0)'), 0, 'the skip family never rides - the .200 word own seat')
assert.equal(L('F9 [F9] craft torches: skip (no spare sticks: sticks 0 coals 1)'), 0, 'the stick skip never rides')
assert.equal(L('F9 [F9] craft torches: skip (the pocket torch cap: held 12 of 12 - sticks 3 coals 9)'), 0, 'the cap decline never rides')
assert.equal(L('F2 [F2] craft torches: stick-dry but 14 planks held - one stick batch first'), 0, 'the plank rung never rides - the .206 word own seat')
assert.equal(L('F1 [F1] craft torches: stick-dry with logs held - one plank conversion first'), 0, 'the logs rung never rides')
assert.equal(L('F5 [F5] craft torches: pocket coal dry (sticks 1) - the torch-coal resupply asks the commons'), 0, 'the torn tail never rides')
assert.equal(L('F5 craft torches: pocket coal dry (sticks 1) - the torch-coal resupply asks the commons (2 coal)'), 0, 'the bare-prefix form never rides')
assert.equal(L('F5 [F6] craft torches: pocket coal dry (sticks 1) - the torch-coal resupply asks the commons (2 coal)'), 0, 'the bracket-mismatched form never rides')
assert.equal(L('craft torches: pocket coal dry (sticks 1) - the torch-coal resupply asks the commons (2 coal)'), 0, 'the bare form never rides')
assert.equal(L('F2 [F2] craft torches: pocket coal dry - the torch-coal resupply asks the commons (2 coal)'), 0, 'the count-less form never rides')
assert.equal(L(''), 0, 'the empty line never rides')
assert.equal(L('F2 [F2] craft torches: pocket coal dry (sticks 1) - the torch-coal resupply asks the commons (2 coal)\nF9 [F9] craft torches: pocket coal dry (sticks 0) - the torch-coal resupply asks the commons (4 coal)'), 2, 'the asks the count rides whole')
assert.equal(L('F2 [F2] craft torches: pocket coal dry (sticks 1) - the torch-coal resupply asks the commons (2 coal)\nF2 [F2] craft torches: skip (no coal: sticks 4 coals 0)'), 1, 'the skip row never rides even beside the ask')

// THE FENCE - the fold proves itself or the word prices nothing
assert.equal(resupplyAskTrendRow(null), null, 'the null fold prices nothing')
assert.equal(resupplyAskTrendRow(undefined), null, 'the undefined fold prices nothing')
assert.equal(resupplyAskTrendRow('junk'), null, 'the junk fold prices nothing')
assert.equal(resupplyAskTrendRow([]), null, 'the array fold prices nothing')
assert.equal(resupplyAskTrendRow({}), null, 'the faceless fold prices nothing')
assert.equal(resupplyAskTrendRow({ back: { asks: 1 }, prev: { asks: 2 } }), null, 'the two-faced fold prices nothing')
assert.equal(resupplyAskTrendRow({ back: { asks: -1 }, prev: { asks: 2 }, cur: { asks: 3 } }), null, 'the negative face prices nothing')
assert.equal(resupplyAskTrendRow({ back: { asks: 1.5 }, prev: { asks: 2 }, cur: { asks: 3 } }), null, 'the fractional face prices nothing')
assert.equal(resupplyAskTrendRow({ back: { asks: '1' }, prev: { asks: 2 }, cur: { asks: 3 } }), null, 'the string face prices nothing')
assert.equal(resupplyAskTrendRow({ back: { asks: 1 }, prev: { asks: 1 }, cur: { asks: 1 }, extra: 'key' }), null, 'the held step prices the honest silence - the extra key never rejected')
assert.equal(resupplyAskTrendRow({ back: { asks: 0 }, prev: { asks: 0 }, cur: { asks: 0 }, extra: 'key' }), null, 'the lawful zero face rides the fence - the held zero the honest silence')
assert.equal(resupplyAskTrendConsistent({ back: { asks: 0 }, prev: { asks: 3 }, cur: { asks: 7 }, junk: 1 }), true, 'the fence the extra keys never rejects')
assert.equal(resupplyAskTrendConsistent(null), false, 'the null fold never proves itself')
assert.equal(resupplyAskTrendConsistent({ back: { asks: 0 }, prev: { asks: 3 } }), false, 'the two-faced fold never proves itself')

// THE BYTE-PIN - the tail rides byte-exact (the seat the family's own
// enumeration holds)
const row = resupplyAskTrendRow({ back: { asks: 1 }, prev: { asks: 3 }, cur: { asks: 2 } })
assert.ok(row.startsWith(HEAD), 'the head byte-exact')
assert.ok(row.endsWith('co-existence by seat never by duplication)'), 'the tail closes the seat law')
assert.ok(row.includes(TAIL), 'the tail rides byte-exact')
