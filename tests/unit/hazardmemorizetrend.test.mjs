// tests/unit/hazardmemorizetrend.test.mjs - THE HAZARD MEMORIZE'S OWN
// TREND's own pin battery (v0.976.212): the water's live hazard
// board's own write mass across the faces the field's own scan named
// first (the 'water: hazard memorized at [x,y,z] (N live, fleet-wide)'
// family) - the field's own chains byte-exact (THE CELL'S OWN WEIGHT
// 4465u the one-hundred-seven faces' own total, THE BIRTH FIELD 2146u
// the fifty faces' own total, THE ALL-SPEAKING BIRTH the zero never
// rode - the field's own quietest face the count 1 the face 346
// holds, THE FIELD'S OWN TOP THE COUNT 109 rode ONCE the face 362's
// own crest - THE STORM, THE FIELD'S OWN FLOOR THE COUNT 1 rode ONCE
// the face 346's own floor, the whole-cache top THE COUNT 110 rode
// ONCE the face 411's own crest - THE WHOLE-CACHE STORM the field
// prices not, the whole-cache floor THE COUNT 0 rode ONCE the face
// 396's own quiet face - THE LONE DROUGHT), the FIELD BOOK
// FORTY-EIGHT of FORTY-EIGHT windows speaking (THIRTY-FOUR swings,
// SIX swells, EIGHT fades, the ZERO honest silences) beside the
// whole-cache book ONE-HUNDRED-FIVE of ONE-HUNDRED-FIVE speaking
// (SEVENTY-THREE swings, EIGHTEEN swells, FOURTEEN fades, the same
// ZERO silences - THE ALL-SPEAKING BOOK both books hold), THE
// NINE-SWING RUN 378..386 THE RECORD BOTH BOOKS SHARE (the bounds
// never extend - the fade W377 and the swell W387 hold) beside the
// fresh FIVE-SWING RUN 444..448 the newest windows hold, the ROUND
// TRIPS (the W349 the weight-8 mirror the field prices beside the
// W433 the weight-11 mirror the cache adds - THE BIGGEST), the
// bounds' own legs pins (the +65 rode ONE leg ONE boundary the
// boundary 361/362 - THE STORM'S OWN CLIMB 44 -> 109, the -62 rode
// ONE leg ONE boundary the boundary 341/342 - THE DEEP FALL 73 ->
// 11, the -77 the cache adds ONE leg ONE boundary the boundary
// 411/412 - THE CREST'S OWN DRAIN the crest paid whole 110 -> 33),
// the last field word the face 389's own window the swing (47 -> 36
// (-11) -> 68 (+32)), the whole-cache pins (the 4465u over the
// one-hundred-seven faces, the gap-crossing windows the
// array-position read prices - the absent 419 and the cancelled 421
// the honest gaps - and the W440/W441/W442 swings and the W443 swell
// and the W444..W448 five-swing run the freshest hold and the W448
// swing 47 -> 55 (+8) -> 21 (-34) MY WORD'S OWN FIRST LIVE READ),
// the CENSUS battery (hazardMemorizeCount the family's own FIRST
// census - the live memorize line rides whole, the DEATH-SPOT
// memorize line and the digShaft refusals and the route gates and
// the truncated forms never ride - the lanes never merge, the
// co-existence the water hazard board's own death-spot seat prices
// beside), the fence battery (the fold proves itself or the word
// prices nothing - the lawful zero the drought rides, the extra keys
// never rejected), the byte-pin battery (the tail rides byte-exact -
// the seat the family's own enumeration holds; the family's own
// banned words the row never speaks)
import assert from 'node:assert'
import { hazardMemorizeCount, hazardMemorizeTrendConsistent, hazardMemorizeTrendRow } from '../../src/lib/hazardmemorizetrend.mjs'
import { hazardBoardCensus } from '../../src/lib/waterhazard.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, this word prices the hazard memorize's own mass across the faces - the hazard memorize seat, co-existence by seat never by duplication)"

const HEAD = 'the hazard memorize trend (v0.976.212)'
const SWING = HEAD + ": the memorize's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the memorize's rise ran two steps deep - "
const SWELL_TAIL = " - the memorize's own swell " + TAIL
const FADE = HEAD + ": the memorize's fall ran two steps deep - "
const FADE_TAIL = " - the memorize's own fade " + TAIL

const tallyWindow = (f, T, order) => {
  const i = order.indexOf(f)
  const a = T[order[i - 2]], b = T[order[i - 1]], c = T[f]
  const first = b - a, second = c - b
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}

// THE FIELD'S OWN TABLE - the priced field 340..389 (the memorize
// cells' own arithmetic, FIFTY faces deep - the lane the rescue
// flail's own dawn already wrote) - THE BIRTH FIELD 2146u the faces'
// own total, THE ALL-SPEAKING BIRTH the zero never rode, THE FIELD'S
// OWN TOP THE COUNT 109 rode ONCE (the face 362's own crest - THE
// STORM), THE FIELD'S OWN FLOOR THE COUNT 1 rode ONCE (the face
// 346's own floor)
const P = {}
P[340] = 52
P[341] = 73
P[342] = 11
P[343] = 50
P[344] = 46
P[345] = 30
P[346] = 1
P[347] = 37
P[348] = 29
P[349] = 37
P[350] = 21
P[351] = 24
P[352] = 25
P[353] = 46
P[354] = 64
P[355] = 14
P[356] = 26
P[357] = 67
P[358] = 92
P[359] = 46
P[360] = 58
P[361] = 44
P[362] = 109
P[363] = 55
P[364] = 38
P[365] = 26
P[366] = 74
P[367] = 24
P[368] = 29
P[369] = 26
P[370] = 60
P[371] = 52
P[372] = 51
P[373] = 61
P[374] = 36
P[375] = 29
P[376] = 28
P[377] = 18
P[378] = 77
P[379] = 27
P[380] = 42
P[381] = 32
P[382] = 50
P[383] = 13
P[384] = 72
P[385] = 29
P[386] = 44
P[387] = 47
P[388] = 36
P[389] = 68

const pr = (f) => hazardMemorizeTrendRow({ back: { count: P[f - 2] }, prev: { count: P[f - 1] }, cur: { count: P[f] } })

// THE BIRTH FIELD - the fifty faces the all-speaking birth prices
const pKeys = Object.keys(P).map(Number).sort((a, b) => a - b)
let pSum = 0
for (const k of pKeys) pSum += P[k]
assert.equal(pKeys.length, 50, 'the fifty faces the field prices')
assert.equal(pSum, 2146, 'THE BIRTH FIELD 2146u the fifty faces ride')
assert.deepEqual(pKeys.filter(k => P[k] === 0), [], 'THE ALL-SPEAKING BIRTH the zero never rode - the drought the birth field never priced')
assert.equal(P[362], 109, "THE FIELD'S OWN TOP the face 362's own crest - THE STORM")
assert.equal(Object.values(P).filter(v => v === 109).length, 1, 'the field top rode ONCE')
assert.equal(P[346], 1, "THE FIELD'S OWN FLOOR the face 346's own 1")
assert.equal(Object.values(P).filter(v => v === 1).length, 1, 'the field floor rode ONCE')

// THE FIELD'S OWN BOOK - the tally over the ordered field
let pswing = 0, pswell = 0, pfade = 0, psilence = 0
const pSilences = []
for (let i = 2; i < pKeys.length; i++) {
  const k = tallyWindow(pKeys[i], P, pKeys)
  if (k === 'swing') pswing++
  else if (k === 'swell') pswell++
  else if (k === 'fade') pfade++
  else { psilence++; pSilences.push(pKeys[i]) }
}
assert.equal(pswing, 34, 'THIRTY-FOUR swings the field prices')
assert.equal(pswell, 6, 'SIX swells the field prices')
assert.equal(pfade, 8, 'EIGHT fades the field prices')
assert.equal(psilence, 0, 'the ZERO honest silences the field prices - THE ALL-SPEAKING BIRTH the held step never rode')
assert.deepEqual(pSilences, [], 'the silence list the field holds not')
assert.equal(pswing + pswell + pfade + psilence, 48, 'the FORTY-EIGHT field windows ride')
assert.equal(pswing + pswell + pfade, 48, 'the FORTY-EIGHT windows speak - the all-speaking birth')

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (SIX swells, EIGHT fades - the byte-exact arcs)
assert.equal(pr(342), SWING + '52 -> 73 (+21) -> 11 (-62)' + SWING_TAIL, 'the W342 window the swing rides')
assert.equal(pr(343), SWING + '73 -> 11 (-62) -> 50 (+39)' + SWING_TAIL, "the W343 window the swing rides - THE DEEP FALL's own window the fall prices")
assert.equal(pr(345), FADE + '50 -> 46 (-4) -> 30 (-16)' + FADE_TAIL, 'the W345 window the fade rides')
assert.equal(pr(346), FADE + '46 -> 30 (-16) -> 1 (-29)' + FADE_TAIL, "the W346 window the fade rides - the floor's own arrival the floor prices")
assert.equal(pr(347), SWING + '30 -> 1 (-29) -> 37 (+36)' + SWING_TAIL, 'the W347 window the swing rides - the floor paid whole')
assert.equal(pr(349), SWING + '37 -> 29 (-8) -> 37 (+8)' + SWING_TAIL, 'the W349 window the weight-8 mirror rides')
assert.equal(pr(355), SWING + '46 -> 64 (+18) -> 14 (-50)' + SWING_TAIL, 'the W355 window the swing rides')
assert.equal(pr(358), SWELL + '26 -> 67 (+41) -> 92 (+25)' + SWELL_TAIL, 'the W358 window the swell rides')
assert.equal(pr(362), SWING + '58 -> 44 (-14) -> 109 (+65)' + SWING_TAIL, "the W362 window the swing rides - THE STORM'S OWN CLIMB the crest prices")
assert.equal(pr(366), SWING + '38 -> 26 (-12) -> 74 (+48)' + SWING_TAIL, 'the W366 window the swing rides')
assert.equal(pr(368), SWING + '74 -> 24 (-50) -> 29 (+5)' + SWING_TAIL, 'the W368 window the swing rides')
assert.equal(pr(377), FADE + '29 -> 28 (-1) -> 18 (-10)' + FADE_TAIL, "the W377 window the fade rides - the nine-swing run's left bound the run holds not")
assert.equal(pr(378), SWING + '28 -> 18 (-10) -> 77 (+59)' + SWING_TAIL, 'the W378 window the swing rides - the nine-swing run opens')
assert.equal(pr(386), SWING + '72 -> 29 (-43) -> 44 (+15)' + SWING_TAIL, 'the W386 window the swing rides - the nine-swing run closes')
assert.equal(pr(387), SWELL + '29 -> 44 (+15) -> 47 (+3)' + SWELL_TAIL, "the W387 window the swell rides - the nine-swing run's right bound the run holds not")

// THE NINE-SWING RUN - THE RECORD BOTH BOOKS SHARE (the bounds never
// extend - the fade W377 and the swell W387 hold)
let pRun = [], pCur = []
for (let i = 2; i < pKeys.length; i++) {
  const k = tallyWindow(pKeys[i], P, pKeys)
  if (k === 'swing') { pCur.push(pKeys[i]); if (pCur.length > pRun.length) pRun = [...pCur] } else pCur = []
}
assert.equal(pRun.length, 9, 'THE NINE-SWING RUN the field holds - THE RECORD')
assert.deepEqual(pRun, [378, 379, 380, 381, 382, 383, 384, 385, 386], 'the nine-swing run the faces 378..386 hold')

// THE ROUND TRIP - the ONE mirror the field prices (the W349 the
// weight-8 mirror holds)
assert.equal(pr(349), SWING + '37 -> 29 (-8) -> 37 (+8)' + SWING_TAIL, 'the W349 window the weight-8 mirror rides')

// THE FIELD'S OWN BOUNDS' LEGS - the +65 and the -62 rode ONE leg ONE
// boundary each (THE STORM'S OWN CLIMB, THE DEEP FALL)
let pRises = [], pFalls = []
for (let i = 1; i < pKeys.length; i++) {
  const d = P[pKeys[i]] - P[pKeys[i - 1]]
  if (d === 65) pRises.push(`${pKeys[i - 1]}/${pKeys[i]}`)
  if (d === -62) pFalls.push(`${pKeys[i - 1]}/${pKeys[i]}`)
}
assert.equal(pRises.length, 1, 'the +65 rode ONE leg')
assert.deepEqual(pRises, ['361/362'], "the +65 rode ONE leg ONE boundary the boundary 361/362 - THE STORM'S OWN CLIMB 44 -> 109")
assert.equal(pFalls.length, 1, 'the -62 rode ONE leg')
assert.deepEqual(pFalls, ['341/342'], "the -62 rode ONE leg ONE boundary the boundary 341/342 - THE DEEP FALL 73 -> 11")

// THE LAST FIELD WORD - the face 389's own window the swing
assert.equal(pr(389), SWING + '47 -> 36 (-11) -> 68 (+32)' + SWING_TAIL, 'the last field word the face 389 own window the swing rides')

// THE WHOLE-CACHE TABLE - the cache's own arithmetic over the ordered
// cached faces (the span 340..448, the absent 419 and the cancelled
// 421 the honest gaps the cache holds not - the face numbers the runs
// consumed, the logs the cache never received; the windows the
// array-position read prices - the .206 honest fix the law rides) -
// THE CELL'S OWN WEIGHT 4465u, THE LONE DROUGHT the zero rode ONCE
const W = {}
W[340] = 52
W[341] = 73
W[342] = 11
W[343] = 50
W[344] = 46
W[345] = 30
W[346] = 1
W[347] = 37
W[348] = 29
W[349] = 37
W[350] = 21
W[351] = 24
W[352] = 25
W[353] = 46
W[354] = 64
W[355] = 14
W[356] = 26
W[357] = 67
W[358] = 92
W[359] = 46
W[360] = 58
W[361] = 44
W[362] = 109
W[363] = 55
W[364] = 38
W[365] = 26
W[366] = 74
W[367] = 24
W[368] = 29
W[369] = 26
W[370] = 60
W[371] = 52
W[372] = 51
W[373] = 61
W[374] = 36
W[375] = 29
W[376] = 28
W[377] = 18
W[378] = 77
W[379] = 27
W[380] = 42
W[381] = 32
W[382] = 50
W[383] = 13
W[384] = 72
W[385] = 29
W[386] = 44
W[387] = 47
W[388] = 36
W[389] = 68
W[390] = 22
W[391] = 43
W[392] = 13
W[393] = 55
W[394] = 54
W[395] = 28
W[396] = 0
W[397] = 50
W[398] = 24
W[399] = 26
W[400] = 40
W[401] = 46
W[402] = 29
W[403] = 19
W[404] = 47
W[405] = 57
W[406] = 37
W[407] = 15
W[408] = 30
W[409] = 43
W[410] = 56
W[411] = 110
W[412] = 33
W[413] = 67
W[414] = 31
W[415] = 48
W[416] = 23
W[417] = 51
W[418] = 66
W[420] = 70
W[422] = 57
W[423] = 73
W[424] = 20
W[425] = 23
W[426] = 56
W[427] = 32
W[428] = 28
W[429] = 11
W[430] = 50
W[431] = 26
W[432] = 37
W[433] = 26
W[434] = 34
W[435] = 41
W[436] = 9
W[437] = 25
W[438] = 79
W[439] = 41
W[440] = 47
W[441] = 25
W[442] = 42
W[443] = 56
W[444] = 52
W[445] = 73
W[446] = 47
W[447] = 55
W[448] = 21

const wFaces = Object.keys(W).map(Number).sort((a, b) => a - b)
const wr = (f) => {
  const i = wFaces.indexOf(f)
  return hazardMemorizeTrendRow({ back: { count: W[wFaces[i - 2]] }, prev: { count: W[wFaces[i - 1]] }, cur: { count: W[f] } })
}

let wSum = 0
for (const k of wFaces) wSum += W[k]
assert.equal(wFaces.length, 107, 'the one-hundred-seven faces the cache holds')
assert.equal(wSum, 4465, "THE CELL'S OWN WEIGHT 4465u the one-hundred-seven faces ride")
assert.deepEqual(wFaces.filter(f => W[f] === 0), [396], 'THE LONE DROUGHT the face 396 own quiet face the cache prices - the zero rode ONCE')
assert.equal(W[411], 110, "THE WHOLE-CACHE TOP the face 411's own crest - THE WHOLE-CACHE STORM the field prices not")
assert.equal(Object.values(W).filter(v => v === 110).length, 1, 'the whole-cache top rode ONCE')
assert.equal(Object.values(W).filter(v => v === 0).length, 1, 'the whole-cache floor THE COUNT 0 rode ONCE the same drought the floor prices')
assert.ok(!wFaces.includes(419), 'the absent 419 the honest gap the cache holds not')
assert.ok(!wFaces.includes(421), 'the cancelled 421 the honest gap the cache holds not')

// THE WHOLE-CACHE BOOK - the tally over the array-ordered faces
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
assert.equal(wswing, 73, 'SEVENTY-THREE swings the whole cache prices')
assert.equal(wswell, 18, 'EIGHTEEN swells the whole cache prices')
assert.equal(wfade, 14, 'FOURTEEN fades the whole cache prices')
assert.equal(wsilence, 0, 'the ZERO honest silences the whole cache prices - THE ALL-SPEAKING BOOK both books hold')
assert.deepEqual(wSilences, [], 'the silence list the cache holds not')
assert.equal(wswing + wswell + wfade + wsilence, 105, 'the ONE-HUNDRED-FIVE whole-cache windows ride')
assert.equal(wswing + wswell + wfade, 105, 'the ONE-HUNDRED-FIVE windows speak - the all-speaking book')

// THE NINE-SWING RUN - THE RECORD the cache shares (the SAME nine the
// field prices - no second nine the cache grew, the bounds never
// extend)
let wRun = [], wCur = []
const wRuns = []
for (let i = 2; i < wFaces.length; i++) {
  const k = clsArc(W[wFaces[i - 2]], W[wFaces[i - 1]], W[wFaces[i]])
  if (k === 'swing') { wCur.push(wFaces[i]); if (wCur.length > wRun.length) wRun = [...wCur] } else { if (wCur.length === 9) wRuns.push([...wCur]); wCur = [] }
}
if (wCur.length === 9) wRuns.push([...wCur])
assert.equal(wRun.length, 9, 'THE NINE-SWING RUN the whole cache holds - THE RECORD')
assert.deepEqual(wRuns.map(r => [r[0], r[r.length - 1]]), [[378, 386]], 'the SAME nine the faces 378..386 hold - no second nine the cache grew')
// THE FRESH FIVE-SWING RUN the newest windows hold beside
const fRuns = []
let fCur = []
for (let i = 2; i < wFaces.length; i++) {
  const k = clsArc(W[wFaces[i - 2]], W[wFaces[i - 1]], W[wFaces[i]])
  if (k === 'swing') { fCur.push(wFaces[i]) } else { if (fCur.length) fRuns.push([...fCur]); fCur = [] }
}
if (fCur.length) fRuns.push([...fCur])
assert.equal(fRuns[fRuns.length - 1].length, 5, 'the fresh FIVE-SWING RUN the newest run holds - five deep')
assert.deepEqual(fRuns[fRuns.length - 1], [444, 445, 446, 447, 448], 'the fresh FIVE-SWING RUN the faces 444..448 hold - the newest windows ride')

// THE ROUND TRIPS - the TWO mirrors the cache prices (the field's own
// W349 the weight-8 mirror beside the W433 the weight-11 mirror the
// cache adds - THE BIGGEST)
assert.equal(wr(349), SWING + '37 -> 29 (-8) -> 37 (+8)' + SWING_TAIL, 'the W349 the weight-8 mirror the cache shares')
assert.equal(wr(433), SWING + '26 -> 37 (+11) -> 26 (-11)' + SWING_TAIL, 'the W433 the weight-11 mirror the cache adds - THE BIGGEST')

// THE GAP-CROSSING WINDOWS - the array-position read the honest gaps
// bridge (the absent 419 and the cancelled 421 the cache holds not -
// the windows the nearest-completed law prices)
assert.equal(wr(420), SWELL + '51 -> 66 (+15) -> 70 (+4)' + SWELL_TAIL, 'the W420 window the gap-crossing swell rides - the absent 419 the array-position read bridges')
assert.equal(wr(422), SWING + '66 -> 70 (+4) -> 57 (-13)' + SWING_TAIL, 'the W422 window the gap-crossing swing rides - the cancelled 421 the array-position read bridges')
assert.equal(wr(423), SWING + '70 -> 57 (-13) -> 73 (+16)' + SWING_TAIL, 'the W423 window the gap-crossing swing rides')

// THE WHOLE-CACHE BOUNDS' OWN LEGS - the +65 and the -62 rode ONE leg
// ONE boundary each (the same legs the field prices) beside the -77
// the cache adds (THE CREST'S OWN DRAIN)
let wrises = [], wfalls = [], wdrains = []
for (let i = 1; i < wFaces.length; i++) {
  const d = W[wFaces[i]] - W[wFaces[i - 1]]
  if (d === 65) wrises.push(`${wFaces[i - 1]}/${wFaces[i]}`)
  if (d === -62) wfalls.push(`${wFaces[i - 1]}/${wFaces[i]}`)
  if (d === -77) wdrains.push(`${wFaces[i - 1]}/${wFaces[i]}`)
}
assert.equal(wrises.length, 1, 'the +65 rode ONE leg')
assert.deepEqual(wrises, ['361/362'], "the +65 rode ONE leg ONE boundary the boundary 361/362 - THE STORM'S OWN CLIMB the cache shares")
assert.equal(wfalls.length, 1, 'the -62 rode ONE leg')
assert.deepEqual(wfalls, ['341/342'], "the -62 rode ONE leg ONE boundary the boundary 341/342 - THE DEEP FALL the cache shares")
assert.equal(wdrains.length, 1, 'the -77 rode ONE leg')
assert.deepEqual(wdrains, ['411/412'], "the -77 rode ONE leg ONE boundary the boundary 411/412 - THE CREST'S OWN DRAIN the crest paid whole 110 -> 33")

// THE DROUGHT'S OWN WINDOWS - the zero the lawful count prices
assert.equal(wr(396), FADE + '54 -> 28 (-26) -> 0 (-28)' + FADE_TAIL, 'the W396 window the fade rides - THE LONE DROUGHT the zero rode the lawful zero prices')
assert.equal(wr(397), SWING + '28 -> 0 (-28) -> 50 (+50)' + SWING_TAIL, "the W397 window the swing rides - THE DROUGHT'S OWN CLIMB the zero paid whole 0 -> 50")

// THE WHOLE-CACHE STORM'S OWN WINDOWS - the crest the field prices not
assert.equal(wr(411), SWELL + '43 -> 56 (+13) -> 110 (+54)' + SWELL_TAIL, "the W411 window the swell rides - THE WHOLE-CACHE STORM's own climb the crest prices")
assert.equal(wr(412), SWING + '56 -> 110 (+54) -> 33 (-77)' + SWING_TAIL, "the W412 window the swing rides - THE CREST'S OWN DRAIN the crest paid whole 110 -> 33")

// THE NEWEST WINDOWS - the W440/W441/W442 swings and the W443 swell
// and the W444..W448 five-swing run (MY WORD'S OWN FIRST LIVE READ
// the nearest-completed law holds)
assert.equal(wr(440), SWING + '79 -> 41 (-38) -> 47 (+6)' + SWING_TAIL, 'the W440 window the swing rides')
assert.equal(wr(441), SWING + '41 -> 47 (+6) -> 25 (-22)' + SWING_TAIL, 'the W441 window the swing rides')
assert.equal(wr(442), SWING + '47 -> 25 (-22) -> 42 (+17)' + SWING_TAIL, 'the W442 window the swing rides')
assert.equal(wr(443), SWELL + '25 -> 42 (+17) -> 56 (+14)' + SWELL_TAIL, 'the W443 window the swell rides')
assert.equal(wr(444), SWING + '42 -> 56 (+14) -> 52 (-4)' + SWING_TAIL, 'the W444 window the swing rides - the fresh five-swing run opens')
assert.equal(wr(445), SWING + '56 -> 52 (-4) -> 73 (+21)' + SWING_TAIL, 'the W445 window the swing rides')
assert.equal(wr(446), SWING + '52 -> 73 (+21) -> 47 (-26)' + SWING_TAIL, 'the W446 window the swing rides')
assert.equal(wr(447), SWING + '73 -> 47 (-26) -> 55 (+8)' + SWING_TAIL, 'the W447 window the swing rides')
assert.equal(wr(448), SWING + '47 -> 55 (+8) -> 21 (-34)' + SWING_TAIL, "the W448 window the swing rides - MY WORD'S OWN FIRST LIVE READ")

// THE CENSUS battery - hazardMemorizeCount the family's own FIRST
// census (the live memorize line rides whole, the DEATH-SPOT memorize
// line and the digShaft refusals and the route gates and the
// truncated forms never ride - the lanes never merge)
const L = (s) => hazardMemorizeCount(typeof s === 'string' ? s.split('\n') : s)
assert.equal(L('F11 [F11] water: hazard memorized at [-126,62,392] (1 live, fleet-wide)'), 1, 'the live memorize rides')
assert.equal(L('F9 [F9] water: hazard memorized at [10,70,20] (5 live, fleet-wide)'), 1, 'the one-cell form rides the same skin')
assert.equal(L('F3 [F3] water: hazard memorized at [-100,-59,385] (2 live, fleet-wide)'), 1, 'the negative-coord form rides - the floor truth the grammar prices')
assert.equal(L('F9 [F9] water: death spot memorized as a hazard at [-126,62,390] (5 live, fleet-wide)'), 0, 'the DEATH-SPOT memorize never rides - the water hazard board own lane')
assert.equal(L('F9 [F9] digShaft: water hazard 3.2b away (live 5) - refusing this column, the caller rotates'), 0, 'the digShaft refusal never rides')
assert.equal(L("F9 [F9] route gate: home's route crosses live hazard water at [-126,62,390]"), 0, 'the route gate never rides')
assert.equal(L('F10 [F10] water: hazard memorized at [-131,52,396]'), 0, 'the truncated no-tail form never rides')
assert.equal(L('water: hazard memorized at [-126,62,392] (1 live, fleet-wide)'), 0, 'the bare form never rides')
assert.equal(L('F9 [F9] water: hazard memorized at [-126,62,392] (live, fleet-wide)'), 0, 'the count-less form never rides')
assert.equal(L('F9 [F9] water: hazard memorized at [-126,62,392] (1 live)'), 0, 'the torn fleet-wide tail never rides')
assert.equal(L('F5 [F6] water: hazard memorized at [-126,62,392] (3 live, fleet-wide)'), 1, 'the bracket-mismatched form the grammar prices - the tag the emitter own echo holds rides')
assert.equal(L('x F9 [F9] water: hazard memorized at [-126,62,392] (5 live, fleet-wide)'), 0, 'the prefixed junk never rides')
assert.equal(L(''), 0, 'the empty line never rides')
assert.equal(L('F2 [F2] water: hazard memorized at [-122,72,417] (3 live, fleet-wide)\nF9 [F9] water: hazard memorized at [10,70,20] (1 live, fleet-wide)'), 2, 'the memorizes the count rides whole')
assert.equal(L('F2 [F2] water: hazard memorized at [-122,72,417] (3 live, fleet-wide)\nF2 [F2] water: death spot memorized as a hazard at [-122,72,417] (4 live, fleet-wide)'), 1, 'the death-spot row never rides even beside the live memorize')
assert.equal(hazardMemorizeCount(null), 0, 'the null face counts nothing - the drought zero lawful')
assert.equal(hazardMemorizeCount(undefined), 0, 'the undefined face counts nothing')
assert.equal(hazardMemorizeCount(42), 0, 'the junk face counts nothing')
assert.equal(hazardMemorizeCount({}), 0, 'the object face counts nothing')
assert.equal(hazardMemorizeCount('F11 [F11] water: hazard memorized at [-126,62,392] (1 live, fleet-wide)'), 1, 'the string face the same count prices')

// THE CO-EXISTENCE battery - the seats price beside never merge (the
// water hazard board's own death-spot census the live line never
// prices, MY count the death-spot line never prices)
const board = hazardBoardCensus(['F9 [F9] water: hazard memorized at [-126,62,392] (5 live, fleet-wide)'])
assert.equal(board, null, 'the live memorize line the board own census prices not - the junk the board battery holds')
const board2 = hazardBoardCensus(['F9 [F9] water: death spot memorized as a hazard at [-126,62,390] (5 live, fleet-wide)'])
assert.ok(board2 && board2.memorizes === 1, 'the death-spot line the board own census prices - the lane the seats split')
assert.equal(L('F9 [F9] water: death spot memorized as a hazard at [-126,62,390] (5 live, fleet-wide)'), 0, 'the death-spot line MY count prices not - the same split the other side holds')

// THE FENCE - the fold proves itself or the word prices nothing
assert.equal(hazardMemorizeTrendRow(null), null, 'the null fold prices nothing')
assert.equal(hazardMemorizeTrendRow(undefined), null, 'the undefined fold prices nothing')
assert.equal(hazardMemorizeTrendRow('junk'), null, 'the junk fold prices nothing')
assert.equal(hazardMemorizeTrendRow([]), null, 'the array fold prices nothing')
assert.equal(hazardMemorizeTrendRow({}), null, 'the faceless fold prices nothing')
assert.equal(hazardMemorizeTrendRow({ back: { count: 1 }, prev: { count: 2 } }), null, 'the two-faced fold prices nothing')
assert.equal(hazardMemorizeTrendRow({ back: { count: -1 }, prev: { count: 2 }, cur: { count: 3 } }), null, 'the negative face prices nothing')
assert.equal(hazardMemorizeTrendRow({ back: { count: 1.5 }, prev: { count: 2 }, cur: { count: 3 } }), null, 'the fractional face prices nothing')
assert.equal(hazardMemorizeTrendRow({ back: { count: '1' }, prev: { count: 2 }, cur: { count: 3 } }), null, 'the string face prices nothing')
assert.equal(hazardMemorizeTrendRow({ back: { count: 1 }, prev: { count: 1 }, cur: { count: 1 }, extra: 'key' }), null, 'the held step prices the honest silence - the extra key never rejected')
assert.equal(hazardMemorizeTrendRow({ back: { count: 0 }, prev: { count: 0 }, cur: { count: 0 }, extra: 'key' }), null, 'the lawful zero face rides the fence - the held zero the honest silence')
assert.equal(hazardMemorizeTrendConsistent({ back: { count: 0 }, prev: { count: 3 }, cur: { count: 7 }, junk: 1 }), true, 'the fence the extra keys never rejects')
assert.equal(hazardMemorizeTrendConsistent(null), false, 'the null fold never proves itself')
assert.equal(hazardMemorizeTrendConsistent({ back: { count: 0 }, prev: { count: 3 } }), false, 'the two-faced fold never proves itself')

// THE BYTE-PIN BATTERY - the family's own banned words the row never
// speaks (byte-pin no return no repeat no stay no run no owns no
// dynasty no turn)
const bannedArcs = [SWING + '47 -> 55 (+8) -> 21 (-34)' + SWING_TAIL, SWELL + '25 -> 42 (+17) -> 56 (+14)' + SWELL_TAIL, FADE + '54 -> 28 (-26) -> 0 (-28)' + FADE_TAIL]
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  for (const row of bannedArcs) assert.doesNotMatch(row, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
}

// THE BYTE-PIN - the tail rides byte-exact (the seat the family's own
// enumeration holds)
const row = hazardMemorizeTrendRow({ back: { count: 1 }, prev: { count: 3 }, cur: { count: 2 } })
assert.ok(row.startsWith(HEAD), 'the head byte-exact')
assert.ok(row.endsWith('co-existence by seat never by duplication)'), 'the tail closes the seat law')
assert.ok(row.includes(TAIL), 'the tail rides byte-exact')
