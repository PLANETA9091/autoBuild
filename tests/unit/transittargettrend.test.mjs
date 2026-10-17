// tests/unit/transittargettrend.test.mjs - THE TRANSIT TARGET'S OWN
// TREND's own pin battery (v0.976.210): the swim's shore book's own breadth
// across the faces the field's own scan named first (the transit
// census's own targets cell - the DISTINCT (x,z) shore keys the
// launch lines armed toward) - the field's own chains byte-exact (THE
// CELL'S OWN WEIGHT 186u the seventy faces' own total, THE BIRTH
// FIELD 98u the forty-three faces' own total, THE DROUGHT FIELD the
// zero rode TWELVE times, THE FIELD'S OWN TOP THE COUNT 8 rode ONCE
// the face 384's own crest - THE STORM), the FIELD BOOK TWENTY-NINE
// of FORTY-ONE windows speaking (TWENTY-THREE swings, FOUR swells,
// TWO fades, the TWELVE honest silences) beside the whole-cache book
// FIFTY of SIXTY-EIGHT speaking (FORTY-ONE swings, SEVEN swells, TWO
// fades, the EIGHTEEN honest silences), THE NINE-SWING RUN 356..364
// the field's own record + THE ELEVEN-SWING RUN 387..426 THE
// WHOLE-CACHE RECORD (the gap-crossing run), THE FIVE/NINE round
// trips (the field's biggest the W387 weight-5 mirror, the cache's
// biggest the W435 weight-8 mirror), the bounds' own legs pins (the
// field's +8 ONE leg ONE boundary the boundary 383/384 - THE STORM'S
// OWN CLIMB, the -6 ONE leg ONE boundary the boundary 363/364; the
// cache's +8 THREE legs, the -8 ONE leg ONE boundary the boundary
// 434/435), the last field word the face 389's own window the swing
// (5 -> 1 (-4) -> 3 (+2)), the whole-cache pins (the 186u over the
// seventy faces, the face 446's own 10 THE WHOLE-CACHE STORM rode
// ONCE MY WORD'S OWN FIRST LIVE READ THE CREST, the EIGHTEEN
// droughts, the W446 swell 6 -> 7 (+1) -> 10 (+3)), the REUSE LAW
// battery (the transit census's own targets cell the fold rides - the
// DISTINCT-key read the repeats never re-count, the census's own
// marker the fold keeps never a second grammar, the bare form never
// rides, the stall family and the launch mass never ride, the lanes
// never merge), the fence/byte-pin batteries
import assert from 'node:assert'
import { transitTargetTrendConsistent, transitTargetTrendRow } from '../../src/lib/transittargettrend.mjs'
import { transitCensus } from '../../src/lib/transitcensus.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, this word prices the transit target's own shore book across the faces - the transit target seat, co-existence by seat never by duplication)"

const HEAD = 'the transit target trend (v0.976.210)'
const SWING = HEAD + ": the shore book's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the shore book's rise ran two steps deep - "
const SWELL_TAIL = " - the shore book's own swell " + TAIL
const FADE = HEAD + ": the shore book's fall ran two steps deep - "
const FADE_TAIL = " - the shore book's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 347..389 (the shore book's
// own breadth arithmetic, FORTY-THREE faces deep) - THE BIRTH FIELD
// 98u the faces' own total, THE DROUGHT FIELD the zero rode TWELVE
// times (the faces 349/352/360/364/365/367/369/374/375/382/383/386's
// own quiet faces), THE FIELD'S OWN TOP THE COUNT 8 rode ONCE (the
// face 384's own crest - THE STORM)
const P = {}
P[347] = 1
P[348] = 3
P[349] = 0
P[350] = 2
P[351] = 2
P[352] = 0
P[353] = 1
P[354] = 2
P[355] = 3
P[356] = 1
P[357] = 4
P[358] = 1
P[359] = 5
P[360] = 0
P[361] = 4
P[362] = 3
P[363] = 6
P[364] = 0
P[365] = 0
P[366] = 3
P[367] = 0
P[368] = 2
P[369] = 0
P[370] = 3
P[371] = 6
P[372] = 4
P[373] = 4
P[374] = 0
P[375] = 0
P[376] = 2
P[377] = 4
P[378] = 2
P[379] = 2
P[380] = 5
P[381] = 1
P[382] = 0
P[383] = 0
P[384] = 8
P[385] = 5
P[386] = 0
P[387] = 5
P[388] = 1
P[389] = 3
let fieldSum = 0
for (let f = 347; f <= 389; f++) fieldSum += P[f]
assert.equal(fieldSum, 98, "the birth field 98u the hand-off holds - THE TRANSIT TARGET'S OWN SEAT rides")
assert.equal(Math.max(...Object.values(P)), 8, "THE STORM the count 8 the face 384's own crest rides - the top rode ONCE")
assert.equal(Object.values(P).filter(v => v === 8).length, 1, 'the top rode ONCE the honest crest the book holds')
assert.equal(Math.min(...Object.values(P)), 0, 'the floor the count 0 the drought field rides')
assert.equal(Object.values(P).filter(v => v === 0).length, 12, 'THE DROUGHT FIELD the zero rode TWELVE times the twelve quiet faces hold')
assert.equal(P[349], 0, "the field's own first drought face the zero rides")
assert.equal(P[384], 8, "THE STORM the face 384's own crest the count 8 rides")
const w = (f) => transitTargetTrendRow({ back: { targets: P[f - 2] }, prev: { targets: P[f - 1] }, cur: { targets: P[f] } })

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
// classification (FOUR swells, TWO fades - the byte-exact arcs)
const SWELLS = {
  354: '0 -> 1 (+1) -> 2 (+1)',
  355: '1 -> 2 (+1) -> 3 (+1)',
  371: '0 -> 3 (+3) -> 6 (+3)',
  377: '0 -> 2 (+2) -> 4 (+2)'
}
const FADES = {
  382: '5 -> 1 (-4) -> 0 (-1)',
  386: '8 -> 5 (-3) -> 0 (-5)'
}
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, 'the swell window ' + f + ' rides byte-exact')
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, 'the fade window ' + f + ' rides byte-exact')
}

// THE FIELD BOOK - the field's own tally
let swing = 0, swell = 0, fade = 0, silence = 0
for (let f = 349; f <= 389; f++) {
  const k = tallyWindow(f, P)
  if (k === 'swing') swing++
  else if (k === 'swell') swell++
  else if (k === 'fade') fade++
  else silence++
}
assert.equal(swing, 23, 'TWENTY-THREE swings the field prices')
assert.equal(swell, 4, 'FOUR swells the field prices')
assert.equal(fade, 2, 'TWO fades the field prices')
assert.equal(silence, 12, 'the TWELVE honest silences the drought field prices')
assert.equal(swing + swell + fade + silence, 41, 'the FORTY-ONE windows the field prices')

// THE NINE-SWING RUN 356..364 - THE FIELD'S OWN RECORD (the bounds
// never extend - the swell 355 and the silence 365 hold)
const isSwing = (f) => tallyWindow(f, P) === 'swing'
assert.ok([356, 357, 358, 359, 360, 361, 362, 363, 364].every(isSwing), 'THE NINE-SWING RUN the faces 356..364 hold - THE FIELD RECORD')
assert.ok(!isSwing(355) && !isSwing(365), 'the run never extends - the honest bounds ride')

// THE FIELD'S OWN ROUND TRIPS - the FIVE the drought mirrors price
let roundTrips = []
for (let f = 349; f <= 389; f++) {
  const first = P[f - 1] - P[f - 2], second = P[f] - P[f - 1]
  if (first !== 0 && second !== 0 && first > 0 !== second > 0 && first === -second) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [358, 367, 369, 378, 387], 'the FIVE round trips the drought mirrors hold')
assert.equal(w(387), SWING + '5 -> 0 (-5) -> 5 (+5)' + SWING_TAIL, "the field's biggest mirror the weight-5 window rides")

// THE BOUNDS' OWN LEGS - the +8 and the -6 rode ONE leg ONE boundary
// each (THE STORM'S OWN CLIMB, the drought's own drain)
let rises = [], falls = []
for (let f = 348; f <= 389; f++) {
  const d = P[f] - P[f - 1]
  if (d === 8) rises.push(f)
  if (d === -6) falls.push(f)
}
assert.equal(rises.length, 1, 'the +8 rode ONE leg')
assert.equal(falls.length, 1, 'the -6 rode ONE leg')
assert.deepEqual(rises, [384], "the +8 rode ONE leg ONE boundary the boundary 383/384 - THE STORM'S OWN CLIMB")
assert.deepEqual(falls, [364], 'the -6 rode ONE leg ONE boundary the boundary 363/364')

// THE LAST FIELD WORD - the face 389's own window the swing
assert.equal(w(389), SWING + '5 -> 1 (-4) -> 3 (+2)' + SWING_TAIL, "the last field word the face 389's own window the swing rides")

// THE WHOLE-CACHE SEAT - the 186u over the seventy faces (the span
// 347..446, the absent 390..416 span and the 419 and the 424 the
// honest gaps the cache holds not), the face 446's own 10 THE
// WHOLE-CACHE STORM rode ONCE, THE EIGHTEEN droughts the zero rode
const W = {}
Object.assign(W, P)
W[417] = 2
W[418] = 4
W[420] = 1
W[421] = 4
W[422] = 0
W[423] = 3
W[425] = 0
W[426] = 5
W[427] = 5
W[429] = 0
W[430] = 3
W[431] = 2
W[432] = 2
W[433] = 0
W[434] = 8
W[435] = 0
W[436] = 0
W[437] = 2
W[438] = 4
W[439] = 6
W[440] = 1
W[441] = 3
W[442] = 1
W[443] = 9
W[444] = 6
W[445] = 7
W[446] = 10
let wholeSum = 0
for (const k of Object.keys(W)) wholeSum += W[k]
assert.equal(Object.keys(W).length, 70, 'the seventy faces the cache holds')
assert.equal(wholeSum, 186, "THE WHOLE-CACHE SEAT 186u the seventy faces ride")
assert.equal(W[446], 10, "THE WHOLE-CACHE STORM the face 446's own 10 rode ONCE - MY WORD'S OWN FIRST LIVE READ THE CREST")
assert.equal(Object.values(W).filter(v => v === 10).length, 1, 'the whole-cache top rode ONCE')
assert.equal(Object.values(W).filter(v => v === 0).length, 18, 'THE EIGHTEEN droughts the zero rode - the twelve beside the six the cache adds')
assert.equal(W[443], 9, "the face 443's own 9 the newest span rides")

// THE WHOLE-CACHE BOOK - the gap-crossing tally over the ordered
// cached faces (the absent 390..416 span and the 419 and the 424 the
// windows cross, the honest gaps)
const wFaces = Object.keys(W).map(Number).sort((a, b) => a - b)
// the gap-crossing tally - the ARRAY-POSITION read the honest fix
// prices (the absent 390..416 span and the 419 and the 424 the
// windows cross - the face-number read the gap prices as a lie at
// every honest gap, the .206's own fix the law rides)
const clsArc = (a, b, c) => {
  const first = b - a, second = c - b
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}
let wswing = 0, wswell = 0, wfade = 0, wsilence = 0
for (let i = 2; i < wFaces.length; i++) {
  const k = clsArc(W[wFaces[i - 2]], W[wFaces[i - 1]], W[wFaces[i]])
  if (k === 'swing') wswing++
  else if (k === 'swell') wswell++
  else if (k === 'fade') wfade++
  else wsilence++
}
assert.equal(wswing, 41, 'FORTY-ONE swings the whole cache prices')
assert.equal(wswell, 7, 'SEVEN swells the whole cache prices')
assert.equal(wfade, 2, 'TWO fades the whole cache prices')
assert.equal(wsilence, 18, 'the EIGHTEEN honest silences the cache prices')
assert.equal(wswing + wswell + wfade + wsilence, 68, 'the SIXTY-EIGHT whole-cache windows ride')

// THE ELEVEN-SWING RUN - THE WHOLE-CACHE RECORD (the gap-crossing run
// over the ordered cached faces - the absent 390..416 span and the
// 419 the run crosses; the bounds never extend - the fade 386 and the
// silence 427 hold)
let wRun = [], wCur = []
for (let i = 2; i < wFaces.length; i++) {
  const k = clsArc(W[wFaces[i - 2]], W[wFaces[i - 1]], W[wFaces[i]])
  if (k === 'swing') { wCur.push(wFaces[i]); if (wCur.length > wRun.length) wRun = [...wCur] } else wCur = []
}
assert.equal(wRun.length, 11, 'THE ELEVEN-SWING RUN the whole cache holds - THE RECORD')
assert.deepEqual(wRun, [387, 388, 389, 417, 418, 420, 421, 422, 423, 425, 426], 'the eleven-swing run the gap-crossing faces hold')
const isWSwing = (f) => wRun.includes(f)
assert.ok(!isWSwing(386) && !isWSwing(427), 'the run never extends - the honest bounds ride')

// the window row over the whole-cache table (the W the newest span
// prices)
const ww = (a, b, c) => transitTargetTrendRow({ back: { targets: a }, prev: { targets: b }, cur: { targets: c } })

// THE WHOLE-CACHE ROUND TRIPS - the NINE (the field's five beside the
// cache's four - the biggest the W435 weight-8 mirror)
let wRoundTrips = []
for (let i = 2; i < wFaces.length; i++) {
  const a = W[wFaces[i - 2]], b = W[wFaces[i - 1]], c = W[wFaces[i]]
  const first = b - a, second = c - b
  if (first !== 0 && second !== 0 && first > 0 !== second > 0 && first === -second) wRoundTrips.push(wFaces[i])
}
assert.deepEqual(wRoundTrips, [358, 367, 369, 378, 387, 421, 425, 435, 442], 'the NINE round trips the books hold')
assert.equal(ww(W[433], W[434], W[435]), SWING + '0 -> 8 (+8) -> 0 (-8)' + SWING_TAIL, "the cache's biggest mirror the weight-8 window rides")

// THE WHOLE-CACHE BOUNDS - the +8 rode THREE legs (the boundaries
// 383/384 and 433/434 and 442/443), the -8 rode ONE leg ONE boundary
let wr = [], wf = []
for (let i = 1; i < wFaces.length; i++) {
  const d = W[wFaces[i]] - W[wFaces[i - 1]]
  if (d === 8) wr.push(wFaces[i])
  if (d === -8) wf.push(wFaces[i])
}
assert.deepEqual(wr, [384, 434, 443], 'the whole cache the +8 rode THREE legs')
assert.deepEqual(wf, [435], "the whole cache the -8 rode ONE leg ONE boundary the boundary 434/435 - the crest paid whole 8 -> 0")

// THE NEWEST WINDOWS - the W434/W435 swings and the W436/W437 silence
// pair and the W438/W439 swell pair and the W440..W445 swings and the
// W446 swell (MY WORD'S OWN FIRST LIVE READ - THE WHOLE-CACHE STORM)
assert.equal(ww(W[432], W[433], W[434]), SWING + '2 -> 0 (-2) -> 8 (+8)' + SWING_TAIL, 'the W434 window the swing rides')
assert.equal(ww(W[433], W[434], W[435]), SWING + '0 -> 8 (+8) -> 0 (-8)' + SWING_TAIL, 'the W435 window the swing rides - THE WEIGHT-8 MIRROR')
assert.equal(ww(W[434], W[435], W[436]), null, 'the W436 window the honest silence rides - the held zero')
assert.equal(ww(W[435], W[436], W[437]), null, 'the W437 window the honest silence rides')
assert.equal(ww(W[436], W[437], W[438]), SWELL + '0 -> 2 (+2) -> 4 (+2)' + SWELL_TAIL, 'the W438 window the swell rides')
assert.equal(ww(W[437], W[438], W[439]), SWELL + '2 -> 4 (+2) -> 6 (+2)' + SWELL_TAIL, 'the W439 window the swell rides')
assert.equal(ww(W[438], W[439], W[440]), SWING + '4 -> 6 (+2) -> 1 (-5)' + SWING_TAIL, 'the W440 window the swing rides')
assert.equal(ww(W[439], W[440], W[441]), SWING + '6 -> 1 (-5) -> 3 (+2)' + SWING_TAIL, 'the W441 window the swing rides')
assert.equal(ww(W[440], W[441], W[442]), SWING + '1 -> 3 (+2) -> 1 (-2)' + SWING_TAIL, 'the W442 window the swing rides - THE WEIGHT-2 MIRROR')
assert.equal(ww(W[441], W[442], W[443]), SWING + '3 -> 1 (-2) -> 9 (+8)' + SWING_TAIL, 'the W443 window the swing rides')
assert.equal(ww(W[442], W[443], W[444]), SWING + '1 -> 9 (+8) -> 6 (-3)' + SWING_TAIL, 'the W444 window the swing rides')
assert.equal(ww(W[443], W[444], W[445]), SWING + '9 -> 6 (-3) -> 7 (+1)' + SWING_TAIL, 'the W445 window the swing rides')
assert.equal(ww(W[444], W[445], W[446]), SWELL + '6 -> 7 (+1) -> 10 (+3)' + SWELL_TAIL, "the W446 window the swell rides - MY WORD'S OWN FIRST LIVE READ THE WHOLE-CACHE STORM")

// THE REUSE LAW battery - the transit census's own targets cell the
// fold rides (the DISTINCT-key read the repeats never re-count, the
// census's own marker the fold keeps - never a second grammar - the
// bare form never rides, the stall family and the launch mass never
// ride, the lanes never merge)
const targetOf = (ls) => transitCensus(ls).targets.length
const L = (s) => targetOf(s.split('\n'))
assert.equal(L('F10 [F10] water: transit toward known land (oak_log) at [-134,405] d=5'), 1, 'the launch line one shore rides')
assert.equal(L('F10 [F10] water: transit toward known land (oak_log) at [-134,405] d=5\nF10 [F10] water: transit toward known land (oak_log) at [-134,405] d=5'), 1, 'the re-arm the SAME key never re-counts - the DISTINCT read')
assert.equal(L('F10 [F10] water: transit toward known land (oak_log) at [-134,405] d=5\nF11 [F11] water: transit toward known land (sand) at [-134,406] d=9'), 2, 'two distinct keys two shores ride')
assert.equal(L('F10 [F10] water: transit toward known land (oak_log) at [-134,405] d=5\nF11 [F11] water: transit toward known land (oak_log) at [-134,405] d=5'), 1, 'two bots one key ONE shore - the key the breadth prices, the bots never split it')
assert.equal(L('F8 [F8] water: transit stalled (d=11 after 3 passes - the walls own this swim; the release takes over)'), 0, 'the stall line never rides')
assert.equal(L('F18 water: transit toward known land (sand) at [10,20] d=3'), 0, 'the bare form never rides - the census TAG the bracket form requires')
assert.equal(L('F12 [F12] water: transit toward known land (oak_log) at [-134,405]'), 0, 'the torn form never rides - the d the grammar holds')
assert.equal(L('F12 [F12] water: transit toward known land (oak_log) at [-134,405] d=notanumber'), 0, 'the broken depth never rides')
assert.equal(L('F12 [F12] combat: fighting skeleton (dist 11.1, hp 16.0, 1 nearby, sentry)'), 0, 'the combat lane never rides')
assert.equal(L('F17 [F17] climb pounce probe: the signature declined (support=air, step=oak_leaves, head=air) - the well census continues'), 0, 'the climb pounce probe lane never rides')
assert.equal(L('F20 [F20] water: breach sealed at [-10,40,200]'), 0, 'the water breach lane never rides')
assert.equal(L('F21 [F21] digShaft: water table lid at y=-40'), 0, 'the dig shaft lane never rides')
assert.equal(L(''), 0, 'the empty log the zero breadth rides')

// THE FENCE battery - the fold must prove itself (the word never
// rides a lie); the zero count lawful, extra keys never rejected
assert.equal(transitTargetTrendConsistent(null), false, 'the null fold fails the fence')
assert.equal(transitTargetTrendConsistent(undefined), false, 'the undefined fold fails the fence')
assert.equal(transitTargetTrendConsistent([]), false, 'the array fold fails the fence')
assert.equal(transitTargetTrendConsistent({}), false, 'the keyless fold fails the fence')
assert.equal(transitTargetTrendConsistent({ back: { targets: 1 }, prev: { targets: 2 } }), false, 'the two-face fold fails the fence')
assert.equal(transitTargetTrendConsistent({ back: { targets: 1 }, prev: { targets: 2 }, cur: { targets: 3 } }), true, 'the whole fold rides')
assert.equal(transitTargetTrendConsistent({ back: { targets: 0 }, prev: { targets: 0 }, cur: { targets: 0 } }), true, 'the zero fold rides lawful - the drought zeros the proof')
assert.equal(transitTargetTrendConsistent({ back: { targets: -1 }, prev: { targets: 2 }, cur: { targets: 3 } }), false, 'the negative face fails the fence')
assert.equal(transitTargetTrendConsistent({ back: { targets: 1.5 }, prev: { targets: 2 }, cur: { targets: 3 } }), false, 'the fractional face fails the fence')
assert.equal(transitTargetTrendConsistent({ back: { targets: '3' }, prev: { targets: 2 }, cur: { targets: 3 } }), false, 'the string face fails the fence')
assert.equal(transitTargetTrendConsistent({ back: { targets: 1 }, prev: { targets: 2 }, cur: { targets: 3 }, extra: 'keys' }), true, 'the extra keys never rejected')
assert.equal(transitTargetTrendRow(null), null, 'the null fold prices nothing')
assert.equal(transitTargetTrendRow({ back: { targets: 1 }, prev: { targets: 2 } }), null, 'the two-face fold prices nothing')
assert.equal(transitTargetTrendRow({ back: { targets: 2 }, prev: { targets: 2 }, cur: { targets: 2 } }), null, 'the held fold the honest silence prices')

// THE BYTE-PIN battery - the word's own frames byte-exact (no shape
// verdict words, no seat verdict word, no dynasty word)
const row = transitTargetTrendRow({ back: { targets: 1 }, prev: { targets: 2 }, cur: { targets: 3 } })
assert.ok(row.startsWith(HEAD + ':'), 'the head frame rides')
assert.ok(row.includes("the shore book's rise ran two steps deep"), 'the swell frame rides')
assert.ok(row.includes('1 -> 2 (+1) -> 3 (+1)'), 'the arc frame rides')
assert.ok(row.endsWith(TAIL), 'the tail frame rides byte-exact')
assert.ok(!row.includes('owns'), 'no seat verdict word - co-existence by seat never by duplication')
assert.ok(!row.includes('dynasty') && !row.includes('turn'), 'no dynasty word')
assert.ok(!row.includes('return') && !row.includes('repeat') && !row.includes('stay') && !row.includes('run '), 'no shape verdict words')
console.log('transittargettrend pins: all green')
