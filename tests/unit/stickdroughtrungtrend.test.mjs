// tests/unit/stickdroughtrungtrend.test.mjs - THE STICK-DROUGHT RUNG'S
// OWN TREND's own pin battery (v0.976.206): the stick drought's own
// rescue rung mass across the faces the field's own scan named first
// (the 'F<n> [F<n>] craft torches: stick-dry <skin>' family) - the
// field's own chains byte-exact (THE CELL'S OWN WEIGHT 5811u the
// one-hundred-one faces' own total, THE BIRTH FIELD 2900u the fifty
// faces' own total, THE NO-DROUGHT BIRTH the zero never rode the fifty
// faces beside the whole cache the zero never rode either - the
// family's own BIGGEST no-drought seat the pair rides, THE FIELD'S OWN
// TOP THE COUNT 75 rode ONCE the face 365's own crest - THE STORM, THE
// FIELD'S OWN FLOOR THE COUNT 36 rode ONCE the face 346's own floor),
// the FIELD BOOK FORTY-SIX of FORTY-EIGHT windows speaking (THIRTY-FIVE
// swings, FOUR swells, SEVEN fades, the TWO honest silences - the
// silence pair the faces 343/344 hold) beside the whole-cache book
// NINETY-FIVE of NINETY-NINE speaking (SIXTY-THREE swings, FIFTEEN
// swells, SEVENTEEN fades, the FOUR honest silences - the silence pairs
// the faces 343/344 and 408/409 hold), THE EIGHT-SWING RUN 374..381 THE
// RECORD both books ride, the ROUND TRIPS (the field ONE the W375
// mirror, the whole cache THREE the W375 beside the W426 and the W439),
// the bounds' own legs pins (the field's +22 rode ONE leg ONE boundary
// the boundary 346/347 - THE FLOOR'S OWN CLIMB, the -26 rode ONE leg
// ONE boundary the boundary 348/349 - THE FLOOR'S OWN REBOUND; the
// whole cache the +28 ONE leg ONE boundary 396/397 - THE FLOOR'S OWN
// CLIMB, the -33 ONE leg ONE boundary 395/396 - THE FLOOR'S OWN
// ARRIVAL), the last field word the face 389's own window the swing
// (53 -> 57 (+4) -> 56 (-1)), the whole-cache pins (the 5811u over the
// one-hundred-one faces, the whole-cache floor THE COUNT 35 rode ONCE
// the face 396's own floor, the W434 swing and the W435 swing and the
// W436/W437/W438 swells and the W439 swing and the W440 fade and the
// W441 swing 59 -> 49 (-10) -> 64 (+15) MY WORD'S OWN FIRST LIVE READ),
// the REUSE LAW battery (torchBook's own rung cells the fold rides -
// the two rung skins the count rides whole, the skip family and the
// resupply asks and the cap declines never ride - the .200 word's own
// seat beside, the lanes never merge), the fence battery
import assert from 'node:assert'
import { stickDroughtRungTrendConsistent, stickDroughtRungTrendRow } from '../../src/lib/stickdroughtrungtrend.mjs'
import { torchBook } from '../../src/lib/torchbook.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, this word prices the stick-drought rung's own mass across the faces - the stick-drought rung seat, co-existence by seat never by duplication)"

const HEAD = "the stick-drought rung trend (v0.976.206)"
const SWING = HEAD + ": the rungs' own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the rungs' rise ran two steps deep - "
const SWELL_TAIL = " - the rungs' own swell " + TAIL
const FADE = HEAD + ": the rungs' fall ran two steps deep - "
const FADE_TAIL = " - the rungs' own fade " + TAIL

const tallyWindow = (f, T) => {
  const a = T[f - 2], b = T[f - 1], c = T[f]
  const first = b - a, second = c - b
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}

// THE FIELD'S OWN TABLE - the priced field 340..389 (the rung cells'
// own arithmetic, FIFTY faces deep - the lane the cache's own dawn
// already climbed) - THE BIRTH FIELD 2900u the faces' own total, THE
// NO-DROUGHT BIRTH the zero never rode, THE FIELD'S OWN TOP THE COUNT
// 75 rode ONCE (the face 365's own crest - THE STORM), THE FIELD'S OWN
// FLOOR THE COUNT 36 rode ONCE (the face 346's own floor)
const P = {}
P[340] = 72
P[341] = 69
P[342] = 63
P[343] = 63
P[344] = 64
P[345] = 51
P[346] = 36
P[347] = 58
P[348] = 67
P[349] = 41
P[350] = 58
P[351] = 66
P[352] = 49
P[353] = 67
P[354] = 60
P[355] = 47
P[356] = 62
P[357] = 50
P[358] = 64
P[359] = 60
P[360] = 63
P[361] = 69
P[362] = 50
P[363] = 65
P[364] = 56
P[365] = 75
P[366] = 60
P[367] = 65
P[368] = 62
P[369] = 52
P[370] = 56
P[371] = 66
P[372] = 57
P[373] = 56
P[374] = 67
P[375] = 56
P[376] = 57
P[377] = 48
P[378] = 62
P[379] = 51
P[380] = 61
P[381] = 57
P[382] = 52
P[383] = 46
P[384] = 63
P[385] = 40
P[386] = 55
P[387] = 53
P[388] = 57
P[389] = 56

const pr = (f) => stickDroughtRungTrendRow({ back: { rungs: P[f - 2] }, prev: { rungs: P[f - 1] }, cur: { rungs: P[f] } })

// THE BIRTH FIELD - the fifty faces the no-drought birth prices
const pKeys = Object.keys(P).map(Number).sort((a, b) => a - b)
let pSum = 0
for (const k of pKeys) pSum += P[k]
assert.equal(pKeys.length, 50, 'the fifty faces the field prices')
assert.equal(pSum, 2900, 'THE BIRTH FIELD 2900u the fifty faces ride')
assert.equal(Object.values(P).filter(v => v === 0).length, 0, 'THE NO-DROUGHT BIRTH the zero never rode - the fifty faces')
assert.equal(P[365], 75, "THE FIELD'S OWN TOP the face 365's own crest - THE STORM")
assert.equal(Object.values(P).filter(v => v === 75).length, 1, 'the field top rode ONCE')
assert.equal(P[346], 36, "THE FIELD'S OWN FLOOR the face 346's own 36")
assert.equal(Object.values(P).filter(v => v === 36).length, 1, 'the field floor rode ONCE')

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
assert.equal(pswing, 35, 'THIRTY-FIVE swings the field prices')
assert.equal(pswell, 4, 'FOUR swells the field prices')
assert.equal(pfade, 7, 'SEVEN fades the field prices')
assert.equal(psilence, 2, 'the TWO honest silences the field prices - the held steps')
assert.deepEqual(pSilences, [343, 344], 'THE SILENCE PAIR the faces 343/344 hold')
assert.equal(pswing + pswell + pfade + psilence, 48, 'the FORTY-EIGHT field windows ride')
assert.equal(pswing + pswell + pfade, 46, 'the FORTY-SIX windows speak')

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (FOUR swells, SEVEN fades - the byte-exact arcs)
assert.equal(pr(342), FADE + '72 -> 69 (-3) -> 63 (-6)' + FADE_TAIL, 'the W342 window the fade rides')
assert.equal(pr(343), null, 'the W343 window the held second step the honest silence prices')
assert.equal(pr(344), null, 'the W344 window the held first step the honest silence prices')
assert.equal(pr(346), FADE + '64 -> 51 (-13) -> 36 (-15)' + FADE_TAIL, "the W346 window the floor's own arrival rides")
assert.equal(pr(348), SWELL + '36 -> 58 (+22) -> 67 (+9)' + SWELL_TAIL, "the W348 window the floor's own rebound rides - the +22 the biggest rise the field prices")
assert.equal(pr(351), SWELL + '41 -> 58 (+17) -> 66 (+8)' + SWELL_TAIL, 'the W351 window the swell rides')
assert.equal(pr(355), FADE + '67 -> 60 (-7) -> 47 (-13)' + FADE_TAIL, 'the W355 window the fade rides')
assert.equal(pr(361), SWELL + '60 -> 63 (+3) -> 69 (+6)' + SWELL_TAIL, 'the W361 window the swell rides')
assert.equal(pr(369), FADE + '65 -> 62 (-3) -> 52 (-10)' + FADE_TAIL, 'the W369 window the fade rides')
assert.equal(pr(371), SWELL + '52 -> 56 (+4) -> 66 (+10)' + SWELL_TAIL, 'the W371 window the swell rides')
assert.equal(pr(373), FADE + '66 -> 57 (-9) -> 56 (-1)' + FADE_TAIL, 'the W373 window the fade rides - the run bounds hold')
assert.equal(pr(382), FADE + '61 -> 57 (-4) -> 52 (-5)' + FADE_TAIL, 'the W382 window the fade rides - the run bounds hold')
assert.equal(pr(383), FADE + '57 -> 52 (-5) -> 46 (-6)' + FADE_TAIL, 'the W383 window the fade rides')

// THE EIGHT-SWING RUN - THE RECORD the field prices (the bounds never
// extend - the fade 373 and the fade 382 hold)
let pRun = [], pCur = []
for (let i = 2; i < pKeys.length; i++) {
  const k = tallyWindow(pKeys[i], P)
  if (k === 'swing') { pCur.push(pKeys[i]); if (pCur.length > pRun.length) pRun = [...pCur] } else pCur = []
}
assert.equal(pRun.length, 8, 'THE EIGHT-SWING RUN the field holds - THE RECORD')
assert.deepEqual(pRun, [374, 375, 376, 377, 378, 379, 380, 381], 'the eight-swing run the faces 374..381 hold')

// THE ROUND TRIP - the ONE mirror the field prices (the W375 window)
assert.equal(pr(375), SWING + '56 -> 67 (+11) -> 56 (-11)' + SWING_TAIL, 'the W375 window the round trip rides - the ONE mirror the field holds')

// THE FIELD'S OWN BOUNDS' LEGS - the +22 and the -26 rode ONE leg ONE
// boundary each (THE FLOOR'S OWN CLIMB, THE FLOOR'S OWN REBOUND)
let pRises = [], pFalls = []
for (let i = 1; i < pKeys.length; i++) {
  const d = P[pKeys[i]] - P[pKeys[i - 1]]
  if (d === 22) pRises.push(`${pKeys[i - 1]}/${pKeys[i]}`)
  if (d === -26) pFalls.push(`${pKeys[i - 1]}/${pKeys[i]}`)
}
assert.equal(pRises.length, 1, 'the +22 rode ONE leg')
assert.deepEqual(pRises, ['346/347'], "the +22 rode ONE leg ONE boundary the boundary 346/347 - THE FLOOR'S OWN CLIMB the 36u trough paid")
assert.equal(pFalls.length, 1, 'the -26 rode ONE leg')
assert.deepEqual(pFalls, ['348/349'], "the -26 rode ONE leg ONE boundary the boundary 348/349 - THE FLOOR'S OWN REBOUND")

// THE LAST FIELD WORD - the face 389's own window the swing
assert.equal(pr(389), SWING + '53 -> 57 (+4) -> 56 (-1)' + SWING_TAIL, 'the last field word the face 389 own window the swing rides')

// THE WHOLE-CACHE TABLE - the cache's own arithmetic over the ordered
// cached faces (the span 340..441, the absent 419 the honest gap) -
// THE CELL'S OWN WEIGHT 5811u, THE NO-DROUGHT the zero never rode
// either (the family's own BIGGEST no-drought seat)
const W = {}
W[340] = 72
W[341] = 69
W[342] = 63
W[343] = 63
W[344] = 64
W[345] = 51
W[346] = 36
W[347] = 58
W[348] = 67
W[349] = 41
W[350] = 58
W[351] = 66
W[352] = 49
W[353] = 67
W[354] = 60
W[355] = 47
W[356] = 62
W[357] = 50
W[358] = 64
W[359] = 60
W[360] = 63
W[361] = 69
W[362] = 50
W[363] = 65
W[364] = 56
W[365] = 75
W[366] = 60
W[367] = 65
W[368] = 62
W[369] = 52
W[370] = 56
W[371] = 66
W[372] = 57
W[373] = 56
W[374] = 67
W[375] = 56
W[376] = 57
W[377] = 48
W[378] = 62
W[379] = 51
W[380] = 61
W[381] = 57
W[382] = 52
W[383] = 46
W[384] = 63
W[385] = 40
W[386] = 55
W[387] = 53
W[388] = 57
W[389] = 56
W[390] = 47
W[391] = 62
W[392] = 46
W[393] = 55
W[394] = 57
W[395] = 68
W[396] = 35
W[397] = 63
W[398] = 60
W[399] = 51
W[400] = 66
W[401] = 52
W[402] = 47
W[403] = 55
W[404] = 59
W[405] = 73
W[406] = 55
W[407] = 52
W[408] = 52
W[409] = 58
W[410] = 67
W[411] = 64
W[412] = 51
W[413] = 71
W[414] = 70
W[415] = 50
W[416] = 51
W[417] = 59
W[418] = 65
W[420] = 64
W[421] = 62
W[422] = 57
W[423] = 60
W[424] = 58
W[425] = 56
W[426] = 58
W[427] = 52
W[428] = 55
W[429] = 62
W[430] = 52
W[431] = 69
W[432] = 56
W[433] = 59
W[434] = 43
W[435] = 47
W[436] = 49
W[437] = 59
W[438] = 60
W[439] = 59
W[440] = 49
W[441] = 64

const wr = (f) => stickDroughtRungTrendRow({ back: { rungs: W[f - 2] }, prev: { rungs: W[f - 1] }, cur: { rungs: W[f] } })
let wholeSum = 0
for (const k of Object.keys(W)) wholeSum += W[k]
assert.equal(Object.keys(W).length, 101, 'the one-hundred-one faces the cache holds')
assert.equal(wholeSum, 5811, 'THE WHOLE-CACHE SEAT 5811u the one-hundred-one faces ride')
assert.equal(Object.values(W).filter(v => v === 0).length, 0, 'THE NO-DROUGHT the whole cache prices - the zero never rode, the family own BIGGEST no-drought seat')
assert.equal(W[365], 75, "THE WHOLE-CACHE STORM the face 365's own 75 rode ONCE")
assert.equal(Object.values(W).filter(v => v === 75).length, 1, 'the whole-cache top rode ONCE')
assert.equal(W[396], 35, "THE WHOLE-CACHE FLOOR the face 396's own 35 rode ONCE - the water pass's own drought face the floor rides beside")
assert.equal(Object.values(W).filter(v => v === 35).length, 1, 'the whole-cache floor rode ONCE')

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
assert.equal(wswing, 63, 'SIXTY-THREE swings the whole cache prices')
assert.equal(wswell, 15, 'FIFTEEN swells the whole cache prices')
assert.equal(wfade, 17, 'SEVENTEEN fades the whole cache prices')
assert.equal(wsilence, 4, 'the FOUR honest silences the whole cache prices')
assert.deepEqual(wSilences, [343, 344, 408, 409], 'the silence pairs the faces 343/344 and 408/409 hold')
assert.equal(wswing + wswell + wfade + wsilence, 99, 'the NINETY-NINE whole-cache windows ride')
assert.equal(wswing + wswell + wfade, 95, 'the NINETY-FIVE windows speak')

// THE EIGHT-SWING RUN - THE RECORD both books ride (the same run the
// field prices - the gap-crossing tally over the ordered cached faces)
let wRun = [], wCur = []
for (let i = 2; i < wFaces.length; i++) {
  const k = clsArc(W[wFaces[i - 2]], W[wFaces[i - 1]], W[wFaces[i]])
  if (k === 'swing') { wCur.push(wFaces[i]); if (wCur.length > wRun.length) wRun = [...wCur] } else wCur = []
}
assert.equal(wRun.length, 8, 'THE EIGHT-SWING RUN the whole cache holds - THE RECORD')
assert.deepEqual(wRun, [374, 375, 376, 377, 378, 379, 380, 381], 'the eight-swing run the same faces hold')

// THE ROUND TRIPS - the THREE mirrors the whole cache prices (the W375
// beside the W426 and the W439)
assert.equal(wr(375), SWING + '56 -> 67 (+11) -> 56 (-11)' + SWING_TAIL, 'the W375 mirror the field shares')
assert.equal(wr(426), SWING + '58 -> 56 (-2) -> 58 (+2)' + SWING_TAIL, 'the W426 window the second mirror rides')
assert.equal(wr(439), SWING + '59 -> 60 (+1) -> 59 (-1)' + SWING_TAIL, 'the W439 window the third mirror rides')

// THE WHOLE-CACHE BOUNDS' OWN LEGS - the +28 and the -33 rode ONE leg
// ONE boundary each (THE FLOOR'S OWN CLIMB, THE FLOOR'S OWN ARRIVAL)
let wrises = [], wfalls = []
for (let i = 1; i < wFaces.length; i++) {
  const d = W[wFaces[i]] - W[wFaces[i - 1]]
  if (d === 28) wrises.push(`${wFaces[i - 1]}/${wFaces[i]}`)
  if (d === -33) wfalls.push(`${wFaces[i - 1]}/${wFaces[i]}`)
}
assert.equal(wrises.length, 1, 'the +28 rode ONE leg')
assert.deepEqual(wrises, ['396/397'], "the +28 rode ONE leg ONE boundary the boundary 396/397 - THE FLOOR'S OWN CLIMB the 35u trough paid")
assert.equal(wfalls.length, 1, 'the -33 rode ONE leg')
assert.deepEqual(wfalls, ['395/396'], "the -33 rode ONE leg ONE boundary the boundary 395/396 - THE FLOOR'S OWN ARRIVAL")

// THE NEWEST WINDOWS - the W434 swing and the W435 swing and the
// W436/W437/W438 swells and the W439 swing and the W440 fade and the
// W441 swing (MY WORD'S OWN FIRST LIVE READ the nearest-completed law
// holds)
assert.equal(wr(434), SWING + '56 -> 59 (+3) -> 43 (-16)' + SWING_TAIL, 'the W434 window the swing rides')
assert.equal(wr(435), SWING + '59 -> 43 (-16) -> 47 (+4)' + SWING_TAIL, 'the W435 window the swing rides')
assert.equal(wr(436), SWELL + '43 -> 47 (+4) -> 49 (+2)' + SWELL_TAIL, 'the W436 window the swell rides')
assert.equal(wr(437), SWELL + '47 -> 49 (+2) -> 59 (+10)' + SWELL_TAIL, 'the W437 window the swell rides')
assert.equal(wr(438), SWELL + '49 -> 59 (+10) -> 60 (+1)' + SWELL_TAIL, 'the W438 window the swell rides')
assert.equal(wr(439), SWING + '59 -> 60 (+1) -> 59 (-1)' + SWING_TAIL, 'the W439 window the swing rides')
assert.equal(wr(440), FADE + '60 -> 59 (-1) -> 49 (-10)' + FADE_TAIL, 'the W440 window the fade rides')
assert.equal(wr(441), SWING + '59 -> 49 (-10) -> 64 (+15)' + SWING_TAIL, "the W441 window the swing rides - MY WORD'S OWN FIRST LIVE READ")

// THE REUSE LAW battery - torchBook's own rung cells the fold rides
// (the two rung skins the count rides whole, the skip family and the
// resupply asks and the cap declines never ride - the .200 word's own
// seat beside, the lanes never merge)
const tbOf = (ls) => {
  const t = torchBook(ls)
  return t ? (t.totals.plankRungs + t.totals.logsRungs) : 0
}
const L = (s) => tbOf(s.split('\n'))
assert.equal(L('F2 [F2] craft torches: stick-dry but 14 planks held - one stick batch first'), 1, 'the plank rung rides')
assert.equal(L('F1 [F1] craft torches: stick-dry with logs held - one plank conversion first'), 1, 'the logs rung rides')
assert.equal(L('F9 [F9] craft torches: stick-dry but 0 planks held - one stick batch first'), 1, 'the zero-plank rung rides the same skin')
assert.equal(L('F2 [F2] craft torches: skip (no coal: sticks 4 coals 0)'), 0, 'the skip family never rides - the .200 word own seat')
assert.equal(L('F9 [F9] craft torches: skip (no spare sticks: sticks 0 coals 1)'), 0, 'the stick skip never rides')
assert.equal(L('F9 [F9] craft torches: skip (the pocket torch cap: held 12 of 12 - sticks 3 coals 9)'), 0, 'the cap decline never rides')
assert.equal(L('F2 [F2] craft torches: pocket coal dry (sticks 1) - the torch-coal resupply asks the commons (2 coal)'), 0, 'the resupply ask never rides - the torch lane own ask cell')
assert.equal(L('F5 [F5] craft torches: stick-dry but 14 planks held'), 0, 'the torn tail never rides')
assert.equal(L('F5 craft torches: stick-dry but 14 planks held - one stick batch first'), 0, 'the bare-prefix form never rides')
assert.equal(L('F5 [F6] craft torches: stick-dry but 14 planks held - one stick batch first'), 0, 'the bracket-mismatched form never rides')
assert.equal(L('craft torches: stick-dry but 14 planks held - one stick batch first'), 0, 'the bare form never rides')
assert.equal(L('F2 [F2] craft torches: stick-dry but planks held - one stick batch first'), 0, 'the count-less form never rides')
assert.equal(L(''), 0, 'the empty line never rides')
assert.equal(L('F2 [F2] craft torches: stick-dry but 14 planks held - one stick batch first\nF1 [F1] craft torches: stick-dry with logs held - one plank conversion first'), 2, 'the two rung skins the count rides whole')
assert.equal(L('F2 [F2] craft torches: stick-dry but 14 planks held - one stick batch first\nF2 [F2] craft torches: skip (no coal: sticks 4 coals 0)'), 1, 'the skip row never rides even beside the rung')

// THE FENCE - the fold proves itself or the word prices nothing
assert.equal(stickDroughtRungTrendRow(null), null, 'the null fold prices nothing')
assert.equal(stickDroughtRungTrendRow(undefined), null, 'the undefined fold prices nothing')
assert.equal(stickDroughtRungTrendRow('junk'), null, 'the junk fold prices nothing')
assert.equal(stickDroughtRungTrendRow([]), null, 'the array fold prices nothing')
assert.equal(stickDroughtRungTrendRow({}), null, 'the faceless fold prices nothing')
assert.equal(stickDroughtRungTrendRow({ back: { rungs: 1 }, prev: { rungs: 2 } }), null, 'the two-faced fold prices nothing')
assert.equal(stickDroughtRungTrendRow({ back: { rungs: -1 }, prev: { rungs: 2 }, cur: { rungs: 3 } }), null, 'the negative face prices nothing')
assert.equal(stickDroughtRungTrendRow({ back: { rungs: 1.5 }, prev: { rungs: 2 }, cur: { rungs: 3 } }), null, 'the fractional face prices nothing')
assert.equal(stickDroughtRungTrendRow({ back: { rungs: '1' }, prev: { rungs: 2 }, cur: { rungs: 3 } }), null, 'the string face prices nothing')
assert.equal(stickDroughtRungTrendRow({ back: { rungs: 1 }, prev: { rungs: 1 }, cur: { rungs: 1 }, extra: 'key' }), null, 'the held step prices the honest silence - the extra key never rejected')
assert.equal(stickDroughtRungTrendRow({ back: { rungs: 0 }, prev: { rungs: 0 }, cur: { rungs: 0 }, extra: 'key' }), null, 'the lawful zero face rides the fence - the held zero the honest silence')
assert.equal(stickDroughtRungTrendConsistent({ back: { rungs: 0 }, prev: { rungs: 3 }, cur: { rungs: 7 }, junk: 1 }), true, 'the fence the extra keys never rejects')
assert.equal(stickDroughtRungTrendConsistent(null), false, 'the null fold never proves itself')
assert.equal(stickDroughtRungTrendConsistent({ back: { rungs: 0 }, prev: { rungs: 3 } }), false, 'the two-faced fold never proves itself')

// THE BYTE-PIN - the tail rides byte-exact (the seat the family's own
// enumeration holds)
const row = stickDroughtRungTrendRow({ back: { rungs: 1 }, prev: { rungs: 3 }, cur: { rungs: 2 } })
assert.ok(row.startsWith(HEAD), 'the head byte-exact')
assert.ok(row.endsWith('co-existence by seat never by duplication)'), 'the tail closes the seat law')
assert.ok(row.includes(TAIL), 'the tail rides byte-exact')
