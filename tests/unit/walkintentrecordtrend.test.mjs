// tests/unit/walkintentrecordtrend.test.mjs - THE WALK-INTENT RECORD'S
// OWN TREND's own pin battery (v0.976.210): the intent board's own
// write mass across the faces the field's own scan named first (the
// 'walk-intent: chest at [x,y,z] held for the fleet (N live, ttl 90s)'
// family) - the field's own chains byte-exact (THE CELL'S OWN WEIGHT
// 5023u the one-hundred-five faces' own total, THE BIRTH FIELD 2486u
// the fifty faces' own total, THE NEAR-NO-DROUGHT BIRTH the zero rode
// ONCE the face 346's own quiet face, THE FIELD'S OWN TOP THE COUNT
// 114 rode ONCE the face 368's own crest - THE STORM, THE FIELD'S OWN
// FLOOR THE COUNT 17 rode ONCE the face 376's own floor, the
// whole-cache top THE COUNT 114 rode ONCE the same face the storm
// prices, the whole-cache floor THE COUNT 17 rode ONCE the same
// floor, the twin droughts 346/396 the cache prices), the FIELD BOOK
// FORTY-SIX of FORTY-EIGHT windows speaking (TWENTY-SEVEN swings,
// SEVEN swells, TWELVE fades, the TWO honest silences - the silence
// pair the faces 366/367 hold) beside the whole-cache book
// ONE-HUNDRED-ONE of ONE-HUNDRED-THREE speaking (SIXTY-SEVEN swings,
// FIFTEEN swells, NINETEEN fades, the same TWO honest silences), THE
// FIVE-SWING RUN 377..381 THE FIELD'S OWN RECORD (the second five
// 385..389 beside) beside the whole cache THE SEVEN-SWING PAIR
// 385..391 and 406..412 THE WHOLE-CACHE RECORD BOTH RUNS RIDE, the
// ROUND TRIPS (the W381 the weight-19 mirror the field prices beside
// the W408 the weight-26 mirror the cache adds), the bounds' own legs
// pins (the +66 rode ONE leg ONE boundary the boundary 346/347 - THE
// DROUGHT'S OWN CLIMB the zero paid whole 0 -> 66, the -62 rode ONE
// leg ONE boundary the boundary 368/369 - THE STORM'S OWN DRAIN the
// crest paid whole 114 -> 52), the last field word the face 389's own
// window the swing (58 -> 55 (-3) -> 60 (+5)), the whole-cache pins
// (the 5023u over the one-hundred-five faces, the gap-crossing
// windows the array-position read prices - the absent 419 and the
// cancelled 421 the honest gaps - and the W440..W443 swings and the
// W444 fade and the W445 swing and the W446 swell 24 -> 57 (+33) ->
// 91 (+34) MY WORD'S OWN FIRST LIVE READ), the REUSE LAW battery
// (ledgerRecordBook's own walk-intent family cell the fold rides -
// the record's own count rides whole, the skip family and the
// no-path records and the full-chest records and the dead-lid records
// never ride - the lanes never merge), the fence battery (the fold
// proves itself or the word prices nothing - the lawful zero the
// drought rides, the extra keys never rejected), the byte-pin battery
// (the tail rides byte-exact - the seat the family's own enumeration
// holds)
import assert from 'node:assert'
import { walkIntentRecordTrendConsistent, walkIntentRecordTrendRow } from '../../src/lib/walkintentrecordtrend.mjs'
import { ledgerRecordBook } from '../../src/lib/ledgerbook.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, this word prices the walk-intent record's own mass across the faces - the walk-intent record seat, co-existence by seat never by duplication)"

const HEAD = 'the walk-intent record trend (v0.976.211)'
const SWING = HEAD + ": the record's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the record's rise ran two steps deep - "
const SWELL_TAIL = " - the record's own swell " + TAIL
const FADE = HEAD + ": the record's fall ran two steps deep - "
const FADE_TAIL = " - the record's own fade " + TAIL

const tallyWindow = (f, T, order) => {
  const i = order.indexOf(f)
  const a = T[order[i - 2]], b = T[order[i - 1]], c = T[f]
  const first = b - a, second = c - b
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}

// THE FIELD'S OWN TABLE - the priced field 340..389 (the record cells'
// own arithmetic, FIFTY faces deep - the lane the board's own dawn
// already wrote) - THE BIRTH FIELD 2486u the faces' own total, THE
// NEAR-NO-DROUGHT BIRTH the zero rode ONCE (the face 346's own quiet
// face), THE FIELD'S OWN TOP THE COUNT 114 rode ONCE (the face 368's
// own crest - THE STORM), THE FIELD'S OWN FLOOR THE COUNT 17 rode
// ONCE (the face 376's own floor)
const P = {}
P[340] = 28
P[341] = 85
P[342] = 82
P[343] = 27
P[344] = 26
P[345] = 22
P[346] = 0
P[347] = 66
P[348] = 52
P[349] = 28
P[350] = 36
P[351] = 65
P[352] = 31
P[353] = 42
P[354] = 69
P[355] = 63
P[356] = 43
P[357] = 34
P[358] = 18
P[359] = 42
P[360] = 77
P[361] = 21
P[362] = 43
P[363] = 56
P[364] = 54
P[365] = 29
P[366] = 29
P[367] = 54
P[368] = 114
P[369] = 52
P[370] = 41
P[371] = 61
P[372] = 70
P[373] = 64
P[374] = 66
P[375] = 59
P[376] = 17
P[377] = 65
P[378] = 39
P[379] = 50
P[380] = 31
P[381] = 50
P[382] = 69
P[383] = 59
P[384] = 43
P[385] = 91
P[386] = 50
P[387] = 58
P[388] = 55
P[389] = 60

const pr = (f) => walkIntentRecordTrendRow({ back: { records: P[f - 2] }, prev: { records: P[f - 1] }, cur: { records: P[f] } })

// THE BIRTH FIELD - the fifty faces the near-no-drought birth prices
const pKeys = Object.keys(P).map(Number).sort((a, b) => a - b)
let pSum = 0
for (const k of pKeys) pSum += P[k]
assert.equal(pKeys.length, 50, 'the fifty faces the field prices')
assert.equal(pSum, 2486, 'THE BIRTH FIELD 2486u the fifty faces ride')
assert.deepEqual(pKeys.filter(k => P[k] === 0), [346], 'THE NEAR-NO-DROUGHT BIRTH the zero rode ONCE - the face 346 quiet face the board never wrote')
assert.equal(P[368], 114, "THE FIELD'S OWN TOP the face 368's own crest - THE STORM")
assert.equal(Object.values(P).filter(v => v === 114).length, 1, 'the field top rode ONCE')
assert.equal(P[376], 17, "THE FIELD'S OWN FLOOR the face 376's own 17")
assert.equal(Object.values(P).filter(v => v === 17).length, 1, 'the field floor rode ONCE')

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
assert.equal(pswing, 27, 'TWENTY-SEVEN swings the field prices')
assert.equal(pswell, 7, 'SEVEN swells the field prices')
assert.equal(pfade, 12, 'TWELVE fades the field prices')
assert.equal(psilence, 2, 'the TWO honest silences the field prices - the held steps')
assert.deepEqual(pSilences, [366, 367], 'the silence pair the faces 366/367 hold - the held steps the board own flat breath prices')
assert.equal(pswing + pswell + pfade + psilence, 48, 'the FORTY-EIGHT field windows ride')
assert.equal(pswing + pswell + pfade, 46, 'the FORTY-SIX windows speak')

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (SEVEN swells, TWELVE fades - the byte-exact arcs)
assert.equal(pr(342), SWING + '28 -> 85 (+57) -> 82 (-3)' + SWING_TAIL, 'the W342 window the swing rides')
assert.equal(pr(343), FADE + '85 -> 82 (-3) -> 27 (-55)' + FADE_TAIL, 'the W343 window the fade rides')
assert.equal(pr(345), FADE + '27 -> 26 (-1) -> 22 (-4)' + FADE_TAIL, 'the W345 window the fade rides')
assert.equal(pr(346), FADE + '26 -> 22 (-4) -> 0 (-22)' + FADE_TAIL, 'the W346 window the fade rides - THE DROUGHT the zero rode the lawful zero prices')
assert.equal(pr(347), SWING + '22 -> 0 (-22) -> 66 (+66)' + SWING_TAIL, "the W347 window the swing rides - THE DROUGHT'S OWN CLIMB the zero paid whole 0 -> 66")
assert.equal(pr(348), SWING + '0 -> 66 (+66) -> 52 (-14)' + SWING_TAIL, 'the W348 window the swing rides - the zero the record lawful rides')
assert.equal(pr(351), SWELL + '28 -> 36 (+8) -> 65 (+29)' + SWELL_TAIL, 'the W351 window the swell rides')
assert.equal(pr(354), SWELL + '31 -> 42 (+11) -> 69 (+27)' + SWELL_TAIL, 'the W354 window the swell rides')
assert.equal(pr(358), FADE + '43 -> 34 (-9) -> 18 (-16)' + FADE_TAIL, 'the W358 window the fade rides')
assert.equal(pr(360), SWELL + '18 -> 42 (+24) -> 77 (+35)' + SWELL_TAIL, 'the W360 window the swell rides')
assert.equal(pr(363), SWELL + '21 -> 43 (+22) -> 56 (+13)' + SWELL_TAIL, 'the W363 window the swell rides')
assert.equal(pr(365), FADE + '56 -> 54 (-2) -> 29 (-25)' + FADE_TAIL, 'the W365 window the fade rides')
assert.equal(pr(366), null, 'the W366 window the held second step the honest silence prices')
assert.equal(pr(367), null, 'the W367 window the held first step the honest silence prices')
assert.equal(pr(368), SWELL + '29 -> 54 (+25) -> 114 (+60)' + SWELL_TAIL, "the W368 window the swell rides - THE STORM'S OWN CLIMB the crest prices")
assert.equal(pr(369), SWING + '54 -> 114 (+60) -> 52 (-62)' + SWING_TAIL, "the W369 window the swing rides - THE STORM'S OWN DRAIN the crest paid whole 114 -> 52")
assert.equal(pr(372), SWELL + '41 -> 61 (+20) -> 70 (+9)' + SWELL_TAIL, 'the W372 window the swell rides')
assert.equal(pr(376), FADE + '66 -> 59 (-7) -> 17 (-42)' + FADE_TAIL, "the W376 window the fade rides - the floor's own arrival the floor prices")
assert.equal(pr(382), SWELL + '31 -> 50 (+19) -> 69 (+19)' + SWELL_TAIL, 'the W382 window the swell rides - the five-swing run the right bound holds')
assert.equal(pr(384), FADE + '69 -> 59 (-10) -> 43 (-16)' + FADE_TAIL, 'the W384 window the fade rides')

// THE FIVE-SWING RUN - THE FIELD'S OWN RECORD the field prices (the
// bounds never extend - the swing 376 and the swing 382 hold; the
// second five-swing run 385..389 the field holds beside, the records
// never merge)
let pRun = [], pCur = []
for (let i = 2; i < pKeys.length; i++) {
  const k = tallyWindow(pKeys[i], P, pKeys)
  if (k === 'swing') { pCur.push(pKeys[i]); if (pCur.length > pRun.length) pRun = [...pCur] } else pCur = []
}
assert.equal(pRun.length, 5, 'THE FIVE-SWING RUN the field holds - THE RECORD')
assert.deepEqual(pRun, [377, 378, 379, 380, 381], 'the five-swing run the faces 377..381 hold')

// THE ROUND TRIP - the ONE mirror the field prices (the W381 the
// weight-19 mirror holds)
assert.equal(pr(381), SWING + '50 -> 31 (-19) -> 50 (+19)' + SWING_TAIL, 'the W381 window the weight-19 mirror rides')

// THE FIELD'S OWN BOUNDS' LEGS - the +66 and the -62 rode ONE leg ONE
// boundary each (THE DROUGHT'S OWN CLIMB, THE STORM'S OWN DRAIN)
let pRises = [], pFalls = []
for (let i = 1; i < pKeys.length; i++) {
  const d = P[pKeys[i]] - P[pKeys[i - 1]]
  if (d === 66) pRises.push(`${pKeys[i - 1]}/${pKeys[i]}`)
  if (d === -62) pFalls.push(`${pKeys[i - 1]}/${pKeys[i]}`)
}
assert.equal(pRises.length, 1, 'the +66 rode ONE leg')
assert.deepEqual(pRises, ['346/347'], "the +66 rode ONE leg ONE boundary the boundary 346/347 - THE DROUGHT'S OWN CLIMB the zero paid whole 0 -> 66")
assert.equal(pFalls.length, 1, 'the -62 rode ONE leg')
assert.deepEqual(pFalls, ['368/369'], "the -62 rode ONE leg ONE boundary the boundary 368/369 - THE STORM'S OWN DRAIN the crest paid whole 114 -> 52")

// THE LAST FIELD WORD - the face 389's own window the swing
assert.equal(pr(389), SWING + '58 -> 55 (-3) -> 60 (+5)' + SWING_TAIL, 'the last field word the face 389 own window the swing rides')

// THE WHOLE-CACHE TABLE - the cache's own arithmetic over the ordered
// cached faces (the span 340..446, the absent 419 and the cancelled
// 421 the honest gaps the cache holds not - the face numbers the runs
// consumed, the logs the cache never received; the windows the
// array-position read prices - the .206 honest fix the law rides) -
// THE CELL'S OWN WEIGHT 5023u, the twin droughts the zero rode TWICE
const W = {}
W[340] = 28
W[341] = 85
W[342] = 82
W[343] = 27
W[344] = 26
W[345] = 22
W[346] = 0
W[347] = 66
W[348] = 52
W[349] = 28
W[350] = 36
W[351] = 65
W[352] = 31
W[353] = 42
W[354] = 69
W[355] = 63
W[356] = 43
W[357] = 34
W[358] = 18
W[359] = 42
W[360] = 77
W[361] = 21
W[362] = 43
W[363] = 56
W[364] = 54
W[365] = 29
W[366] = 29
W[367] = 54
W[368] = 114
W[369] = 52
W[370] = 41
W[371] = 61
W[372] = 70
W[373] = 64
W[374] = 66
W[375] = 59
W[376] = 17
W[377] = 65
W[378] = 39
W[379] = 50
W[380] = 31
W[381] = 50
W[382] = 69
W[383] = 59
W[384] = 43
W[385] = 91
W[386] = 50
W[387] = 58
W[388] = 55
W[389] = 60
W[390] = 23
W[391] = 54
W[392] = 73
W[393] = 27
W[394] = 40
W[395] = 24
W[396] = 0
W[397] = 40
W[398] = 55
W[399] = 41
W[400] = 48
W[401] = 19
W[402] = 38
W[403] = 25
W[404] = 32
W[405] = 58
W[406] = 37
W[407] = 63
W[408] = 37
W[409] = 45
W[410] = 30
W[411] = 77
W[412] = 67
W[413] = 51
W[414] = 42
W[415] = 58
W[416] = 60
W[417] = 55
W[418] = 80
W[420] = 34
W[422] = 59
W[423] = 30
W[424] = 46
W[425] = 82
W[426] = 23
W[427] = 67
W[428] = 36
W[429] = 58
W[430] = 60
W[431] = 18
W[432] = 57
W[433] = 85
W[434] = 77
W[435] = 35
W[436] = 30
W[437] = 28
W[438] = 59
W[439] = 31
W[440] = 41
W[441] = 29
W[442] = 46
W[443] = 35
W[444] = 24
W[445] = 57
W[446] = 91

const wFaces = Object.keys(W).map(Number).sort((a, b) => a - b)
const wr = (f) => {
  const i = wFaces.indexOf(f)
  return walkIntentRecordTrendRow({ back: { records: W[wFaces[i - 2]] }, prev: { records: W[wFaces[i - 1]] }, cur: { records: W[f] } })
}

let wSum = 0
for (const k of wFaces) wSum += W[k]
assert.equal(wFaces.length, 105, 'the one-hundred-five faces the cache holds')
assert.equal(wSum, 5023, "THE CELL'S OWN WEIGHT 5023u the one-hundred-five faces ride")
assert.deepEqual(wFaces.filter(f => W[f] === 0), [346, 396], 'the TWIN DROUGHTS the faces 346/396 own quiet faces the cache prices')
assert.equal(W[368], 114, "THE WHOLE-CACHE TOP the same face's own crest - THE WHOLE-CACHE STORM the field's own crest the cache shares")
assert.equal(Object.values(W).filter(v => v === 114).length, 1, 'the whole-cache top rode ONCE')
assert.equal(Object.values(W).filter(v => v === 17).length, 1, "the whole-cache floor THE COUNT 17 rode ONCE the same floor the cache shares")
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
assert.equal(wswing, 67, 'SIXTY-SEVEN swings the whole cache prices')
assert.equal(wswell, 15, 'FIFTEEN swells the whole cache prices')
assert.equal(wfade, 19, 'NINETEEN fades the whole cache prices')
assert.equal(wsilence, 2, 'the TWO honest silences the whole cache prices')
assert.deepEqual(wSilences, [366, 367], 'the same silence pair the cache shares')
assert.equal(wswing + wswell + wfade + wsilence, 103, 'the ONE-HUNDRED-THREE whole-cache windows ride')
assert.equal(wswing + wswell + wfade, 101, 'the ONE-HUNDRED-ONE windows speak')

// THE SEVEN-SWING PAIR - THE WHOLE-CACHE RECORD BOTH RUNS RIDE (the
// runs 385..391 and 406..412 the cache prices twice - the pair the
// record holds, the bounds never extend)
let wRun = [], wCur = []
const wRuns = []
for (let i = 2; i < wFaces.length; i++) {
  const k = clsArc(W[wFaces[i - 2]], W[wFaces[i - 1]], W[wFaces[i]])
  if (k === 'swing') { wCur.push(wFaces[i]); if (wCur.length > wRun.length) wRun = [...wCur] } else { if (wCur.length === 7) wRuns.push([...wCur]); wCur = [] }
}
if (wCur.length === 7) wRuns.push([...wCur])
assert.equal(wRun.length, 7, 'THE SEVEN-SWING RUN the whole cache holds - THE RECORD')
assert.deepEqual(wRuns.map(r => [r[0], r[r.length - 1]]), [[385, 391], [406, 412]], 'the seven-swing pair the faces 385..391 and 406..412 hold - THE RECORD BOTH RUNS RIDE')

// THE ROUND TRIPS - the TWO mirrors the cache prices (the field's own
// W381 the weight-19 mirror beside the W408 the weight-26 mirror the
// cache adds)
assert.equal(wr(381), SWING + '50 -> 31 (-19) -> 50 (+19)' + SWING_TAIL, 'the W381 the weight-19 mirror the cache shares')
assert.equal(wr(408), SWING + '37 -> 63 (+26) -> 37 (-26)' + SWING_TAIL, 'the W408 the weight-26 mirror the cache adds')

// THE GAP-CROSSING WINDOWS - the array-position read the honest gaps
// bridge (the absent 419 and the cancelled 421 the cache holds not -
// the windows the nearest-completed law prices)
assert.equal(wr(420), SWING + '55 -> 80 (+25) -> 34 (-46)' + SWING_TAIL, 'the W420 window the gap-crossing swing rides - the absent 419 the array-position read bridges')
assert.equal(wr(422), SWING + '80 -> 34 (-46) -> 59 (+25)' + SWING_TAIL, 'the W422 window the gap-crossing swing rides - the cancelled 421 the array-position read bridges')
assert.equal(wr(423), SWING + '34 -> 59 (+25) -> 30 (-29)' + SWING_TAIL, 'the W423 window the gap-crossing swing rides')

// THE WHOLE-CACHE BOUNDS' OWN LEGS - the +66 and the -62 rode ONE leg
// ONE boundary each (the same legs the field prices)
let wrises = [], wfalls = []
for (let i = 1; i < wFaces.length; i++) {
  const d = W[wFaces[i]] - W[wFaces[i - 1]]
  if (d === 66) wrises.push(`${wFaces[i - 1]}/${wFaces[i]}`)
  if (d === -62) wfalls.push(`${wFaces[i - 1]}/${wFaces[i]}`)
}
assert.equal(wrises.length, 1, 'the +66 rode ONE leg')
assert.deepEqual(wrises, ['346/347'], "the +66 rode ONE leg ONE boundary the boundary 346/347 - THE DROUGHT'S OWN CLIMB the cache shares")
assert.equal(wfalls.length, 1, 'the -62 rode ONE leg')
assert.deepEqual(wfalls, ['368/369'], "the -62 rode ONE leg ONE boundary the boundary 368/369 - THE STORM'S OWN DRAIN the cache shares")

// THE NEWEST WINDOWS - the W440..W443 swings and the W444 fade and
// the W445 swing and the W446 swell (MY WORD'S OWN FIRST LIVE READ
// the nearest-completed law holds)
assert.equal(wr(440), SWING + '59 -> 31 (-28) -> 41 (+10)' + SWING_TAIL, 'the W440 window the swing rides')
assert.equal(wr(441), SWING + '31 -> 41 (+10) -> 29 (-12)' + SWING_TAIL, 'the W441 window the swing rides')
assert.equal(wr(442), SWING + '41 -> 29 (-12) -> 46 (+17)' + SWING_TAIL, 'the W442 window the swing rides')
assert.equal(wr(443), SWING + '29 -> 46 (+17) -> 35 (-11)' + SWING_TAIL, 'the W443 window the swing rides')
assert.equal(wr(444), FADE + '46 -> 35 (-11) -> 24 (-11)' + FADE_TAIL, 'the W444 window the fade rides')
assert.equal(wr(445), SWING + '35 -> 24 (-11) -> 57 (+33)' + SWING_TAIL, 'the W445 window the swing rides')
assert.equal(wr(446), SWELL + '24 -> 57 (+33) -> 91 (+34)' + SWELL_TAIL, "the W446 window the swell rides - MY WORD'S OWN FIRST LIVE READ")

// THE REUSE LAW battery - ledgerRecordBook's own walk-intent family
// cell the fold rides (the record's own count rides whole, the skip
// family and the no-path records and the full-chest records and the
// dead-lid records never ride - the lanes never merge)
const wiOf = (ls) => {
  const b = ledgerRecordBook(ls)
  return b ? b.families['walk-intent'].records : 0
}
const L = (s) => wiOf(s.split('\n'))
assert.equal(L('F2 [F2] walk-intent: chest at [-122,72,417] held for the fleet (3 live, ttl 90s)'), 1, 'the record rides')
assert.equal(L('F9 [F9] walk-intent: chest at [10,70,20] held for the fleet (1 live, ttl 90s)'), 1, 'the one-live record rides the same skin')
assert.equal(L('F2 [F2] chest skip (walk in flight by F3 cached 12s ago at [-122,72,417])'), 0, 'the skip family never rides - the same family other cell')
assert.equal(L('F2 [F2] no-path ledger: chest at [-122,72,417] cached for the fleet (2 live, ttl 15s)'), 0, 'the no-path records never ride')
assert.equal(L('F2 [F2] chest skip (full cached 45s ago at [-122,72,417])'), 0, 'the full-chest records never ride')
assert.equal(L('F2 [F2] chest skip (open lost cached 31s ago at [-122,72,417])'), 0, 'the dead-lid records never ride')
assert.equal(L('F5 [F5] walk-intent: chest at [-122,72,417] held for the fleet (3 live, ttl 180s)'), 0, 'the torn ttl never rides')
assert.equal(L('F5 walk-intent: chest at [-122,72,417] held for the fleet (3 live, ttl 90s)'), 0, 'the bare-prefix form never rides')
assert.equal(L('F5 [F6] walk-intent: chest at [-122,72,417] held for the fleet (3 live, ttl 90s)'), 1, 'the bracket-mismatched form the census own marker prices - the grammar the census holds rides, never a second grammar')
assert.equal(L('walk-intent: chest at [-122,72,417] held for the fleet (3 live, ttl 90s)'), 0, 'the bare form never rides')
assert.equal(L('F2 [F2] walk-intent: chest at [-122,72] held for the fleet (3 live, ttl 90s)'), 0, 'the two-coord form never rides')
assert.equal(L('F2 [F2] walk-intent: chest at [-122,72,417] held for the fleet (live, ttl 90s)'), 0, 'the count-less form never rides')
assert.equal(L(''), 0, 'the empty line never rides')
assert.equal(L('F2 [F2] walk-intent: chest at [-122,72,417] held for the fleet (3 live, ttl 90s)\nF9 [F9] walk-intent: chest at [10,70,20] held for the fleet (1 live, ttl 90s)'), 2, 'the records the count rides whole')
assert.equal(L('F2 [F2] walk-intent: chest at [-122,72,417] held for the fleet (3 live, ttl 90s)\nF2 [F2] chest skip (walk in flight by F3 cached 12s ago at [-122,72,417])'), 1, 'the skip row never rides even beside the record')

// THE FENCE - the fold proves itself or the word prices nothing
assert.equal(walkIntentRecordTrendRow(null), null, 'the null fold prices nothing')
assert.equal(walkIntentRecordTrendRow(undefined), null, 'the undefined fold prices nothing')
assert.equal(walkIntentRecordTrendRow('junk'), null, 'the junk fold prices nothing')
assert.equal(walkIntentRecordTrendRow([]), null, 'the array fold prices nothing')
assert.equal(walkIntentRecordTrendRow({}), null, 'the faceless fold prices nothing')
assert.equal(walkIntentRecordTrendRow({ back: { records: 1 }, prev: { records: 2 } }), null, 'the two-faced fold prices nothing')
assert.equal(walkIntentRecordTrendRow({ back: { records: -1 }, prev: { records: 2 }, cur: { records: 3 } }), null, 'the negative face prices nothing')
assert.equal(walkIntentRecordTrendRow({ back: { records: 1.5 }, prev: { records: 2 }, cur: { records: 3 } }), null, 'the fractional face prices nothing')
assert.equal(walkIntentRecordTrendRow({ back: { records: '1' }, prev: { records: 2 }, cur: { records: 3 } }), null, 'the string face prices nothing')
assert.equal(walkIntentRecordTrendRow({ back: { records: 1 }, prev: { records: 1 }, cur: { records: 1 }, extra: 'key' }), null, 'the held step prices the honest silence - the extra key never rejected')
assert.equal(walkIntentRecordTrendRow({ back: { records: 0 }, prev: { records: 0 }, cur: { records: 0 }, extra: 'key' }), null, 'the lawful zero face rides the fence - the held zero the honest silence')
assert.equal(walkIntentRecordTrendConsistent({ back: { records: 0 }, prev: { records: 3 }, cur: { records: 7 }, junk: 1 }), true, 'the fence the extra keys never rejects')
assert.equal(walkIntentRecordTrendConsistent(null), false, 'the null fold never proves itself')
assert.equal(walkIntentRecordTrendConsistent({ back: { records: 0 }, prev: { records: 3 } }), false, 'the two-faced fold never proves itself')

// THE BYTE-PIN - the tail rides byte-exact (the seat the family's own
// enumeration holds)
const row = walkIntentRecordTrendRow({ back: { records: 1 }, prev: { records: 3 }, cur: { records: 2 } })
assert.ok(row.startsWith(HEAD), 'the head byte-exact')
assert.ok(row.endsWith('co-existence by seat never by duplication)'), 'the tail closes the seat law')
assert.ok(row.includes(TAIL), 'the tail rides byte-exact')

