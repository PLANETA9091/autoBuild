// tests/unit/combatbandtrend.test.mjs - THE COMBAT BAND'S OWN
// TREND's own pin battery (v0.976.208): the shooter band's own mass across
// the faces the field's own scan named first (the 'F<n> [F<n>] combat:
// <skin>' family - the fight lines the combat band prints) - the
// field's own chains byte-exact (THE CELL'S OWN WEIGHT 5840u the
// sixty-seven faces' own total, THE BIRTH FIELD 3716u the forty-three
// faces' own total, THE DROUGHT QUAD the zero rode the faces
// 347/361/363/380 hold, THE FIELD'S OWN TOP THE COUNT 223 rode ONCE
// the face 360's own crest - THE STORM), the FIELD BOOK FORTY-ONE of
// FORTY-ONE windows speaking (TWENTY-NINE swings, FIVE swells, SEVEN
// fades, the ZERO honest silences - THE ALL-SPEAKING FAMILY'S OWN
// SEAT) beside the whole-cache book SIXTY-FIVE of SIXTY-FIVE speaking
// (the ALL-SPEAKING PAIR), THE SEVEN-SWING RUN 359..365 the field's
// own record + THE EIGHT-SWING RUN 427..435 THE WHOLE-CACHE RECORD
// (the absent 428 the run crosses), THE ONE ROUND TRIP the face 363's
// own weight-165 mirror both books price, the bounds' own legs pins
// (the +214 rode ONE leg ONE boundary the boundary 359/360 - THE
// STORM'S OWN CLIMB, the -223 rode ONE leg ONE boundary the boundary
// 360/361 - THE STORM'S OWN DRAIN the crest paid whole 223 -> 0 - both
// books the same legs ride), the last field word the face 389's own
// window the swing (20 -> 144 (+124) -> 112 (-32)), the whole-cache
// pins (the 5840u over the sixty-seven faces, the face 422's own 235u
// THE WHOLE-CACHE STORM rode ONCE, THE FIVE DROUGHTS the zero rode the
// quad beside the face 441's own newest zero, the W440/W441 fade pair,
// the W443 swell 0 -> 53 (+53) -> 157 (+104) MY WORD'S OWN FIRST LIVE
// READ), the REUSE LAW battery (the shooter census's own total cell
// the fold rides - the band's skins the count rides whole, the census's
// own marker the fold keeps never a second grammar, the other lanes
// never ride, the lanes never merge), the fence/byte-pin batteries
import assert from 'node:assert'
import { combatBandTrendConsistent, combatBandTrendRow } from '../../src/lib/combatbandtrend.mjs'
import { shooterCensus } from '../../src/lib/shootercensus.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, this word prices the combat band's own mass across the faces - the combat band seat, co-existence by seat never by duplication)"

const HEAD = 'the combat band trend (v0.976.208)'
const SWING = HEAD + ": the band's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the band's rise ran two steps deep - "
const SWELL_TAIL = " - the band's own swell " + TAIL
const FADE = HEAD + ": the band's fall ran two steps deep - "
const FADE_TAIL = " - the band's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 347..389 (the band census's
// own total arithmetic, FORTY-THREE faces deep) - THE BIRTH FIELD
// 3716u the faces' own total, THE DROUGHT QUAD the zero rode (the
// faces 347/361/363/380's own quiet faces), THE FIELD'S OWN TOP THE
// COUNT 223 rode ONCE (the face 360's own crest - THE STORM)
const P = {}
P[347] = 0
P[348] = 70
P[349] = 30
P[350] = 76
P[351] = 142
P[352] = 99
P[353] = 126
P[354] = 84
P[355] = 60
P[356] = 34
P[357] = 158
P[358] = 202
P[359] = 9
P[360] = 223
P[361] = 0
P[362] = 165
P[363] = 0
P[364] = 76
P[365] = 58
P[366] = 4
P[367] = 155
P[368] = 144
P[369] = 101
P[370] = 16
P[371] = 7
P[372] = 40
P[373] = 35
P[374] = 56
P[375] = 218
P[376] = 118
P[377] = 144
P[378] = 128
P[379] = 130
P[380] = 0
P[381] = 68
P[382] = 161
P[383] = 72
P[384] = 48
P[385] = 73
P[386] = 110
P[387] = 20
P[388] = 144
P[389] = 112
let fieldSum = 0
for (let f = 347; f <= 389; f++) fieldSum += P[f]
assert.equal(fieldSum, 3716, "the birth field 3716u the hand-off holds - THE COMBAT BAND'S OWN SEAT rides")
assert.equal(Math.max(...Object.values(P)), 223, "THE STORM the count 223 the face 360's own crest rides - the top rode ONCE")
assert.equal(Object.values(P).filter(v => v === 223).length, 1, 'the top rode ONCE the honest crest the book holds')
assert.equal(Math.min(...Object.values(P)), 0, 'the floor the count 0 the drought quad rides')
assert.equal(Object.values(P).filter(v => v === 0).length, 4, 'THE DROUGHT QUAD the zero rode FOUR times the faces 347/361/363/380 hold')
assert.equal(P[347], 0, "the field's own dawn face the zero rides")
assert.equal(P[361], 0, "THE STORM'S OWN DRAIN'S OWN FLOOR the face 361's own zero rides")
assert.equal(P[363], 0, "the mirror's own trough the face 363's own zero rides")
assert.equal(P[380], 0, "the quad's own fourth face the zero rides")
const w = (f) => combatBandTrendRow({ back: { combat: P[f - 2] }, prev: { combat: P[f - 1] }, cur: { combat: P[f] } })

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
// classification (FIVE swells, SEVEN fades - the byte-exact arcs)
const SWELLS = {
  351: '30 -> 76 (+46) -> 142 (+66)',
  358: '34 -> 158 (+124) -> 202 (+44)',
  375: '35 -> 56 (+21) -> 218 (+162)',
  382: '0 -> 68 (+68) -> 161 (+93)',
  386: '48 -> 73 (+25) -> 110 (+37)'
}
const FADES = {
  355: '126 -> 84 (-42) -> 60 (-24)',
  356: '84 -> 60 (-24) -> 34 (-26)',
  366: '76 -> 58 (-18) -> 4 (-54)',
  369: '155 -> 144 (-11) -> 101 (-43)',
  370: '144 -> 101 (-43) -> 16 (-85)',
  371: '101 -> 16 (-85) -> 7 (-9)',
  384: '161 -> 72 (-89) -> 48 (-24)'
}
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, 'the swell window ' + f + ' rides byte-exact')
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, 'the fade window ' + f + ' rides byte-exact')
}

// THE FIELD BOOK - the field's own tally - THE ALL-SPEAKING FAMILY
let swing = 0, swell = 0, fade = 0, silence = 0
for (let f = 349; f <= 389; f++) {
  const k = tallyWindow(f, P)
  if (k === 'swing') swing++
  else if (k === 'swell') swell++
  else if (k === 'fade') fade++
  else silence++
}
assert.equal(swing, 29, 'TWENTY-NINE swings the field prices')
assert.equal(swell, 5, 'FIVE swells the field prices')
assert.equal(fade, 7, 'SEVEN fades the field prices')
assert.equal(silence, 0, 'the ZERO honest silences the all-speaking family prices')
assert.equal(swing + swell + fade + silence, 41, 'the FORTY-ONE windows the field prices - ALL-SPEAKING')

// THE SEVEN-SWING RUN 359..365 - THE FIELD'S OWN RECORD (the bounds
// never extend - the swell 358 and the fade 366 hold)
const isSwing = (f) => tallyWindow(f, P) === 'swing'
assert.ok([359, 360, 361, 362, 363, 364, 365].every(isSwing), 'THE SEVEN-SWING RUN the faces 359..365 hold - THE FIELD RECORD')
assert.ok(!isSwing(358) && !isSwing(366), 'the run never extends - the honest bounds ride')

// THE ONE ROUND TRIP - the face 363's own window the weight-165 mirror
let roundTrips = []
for (let f = 349; f <= 389; f++) {
  const first = P[f - 1] - P[f - 2], second = P[f] - P[f - 1]
  if (first !== 0 && second !== 0 && first > 0 !== second > 0 && first === -second) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [363], "THE ONE ROUND TRIP the face 363's own mirror holds - both books price it")
assert.equal(w(363), SWING + '0 -> 165 (+165) -> 0 (-165)' + SWING_TAIL, "the mirror's own byte the weight-165 window rides")

// THE BOUNDS' OWN LEGS - the +214 and the -223 rode ONE leg ONE
// boundary each (THE STORM'S OWN CLIMB, THE STORM'S OWN DRAIN)
let rises = [], falls = []
for (let f = 348; f <= 389; f++) {
  const d = P[f] - P[f - 1]
  if (d === 214) rises.push(f)
  if (d === -223) falls.push(f)
}
assert.equal(rises.length, 1, 'the +214 rode ONE leg')
assert.equal(falls.length, 1, 'the -223 rode ONE leg')
assert.deepEqual(rises, [360], "the +214 rode ONE leg ONE boundary the boundary 359/360 - THE STORM'S OWN CLIMB")
assert.deepEqual(falls, [361], "the -223 rode ONE leg ONE boundary the boundary 360/361 - THE STORM'S OWN DRAIN the crest paid whole 223 -> 0")

// THE LAST FIELD WORD - the face 389's own window the swing
assert.equal(w(389), SWING + '20 -> 144 (+124) -> 112 (-32)' + SWING_TAIL, "the last field word the face 389's own window the swing rides")

// THE WHOLE-CACHE SEAT - the 5840u over the sixty-seven faces (the
// span 347..443, the absent 390..416 span and the 419 and the 424 and
// the 428 the honest gaps the cache holds not), the face 422's own
// 235u THE WHOLE-CACHE STORM rode ONCE, THE FIVE DROUGHTS the zero
// rode (the quad beside the face 441's own newest zero)
const W = {}
Object.assign(W, P)
W[417] = 16
W[418] = 28
W[420] = 37
W[421] = 128
W[422] = 235
W[423] = 215
W[425] = 75
W[426] = 46
W[427] = 57
W[429] = 21
W[430] = 115
W[431] = 50
W[432] = 167
W[433] = 79
W[434] = 216
W[435] = 98
W[436] = 63
W[437] = 104
W[438] = 130
W[439] = 27
W[440] = 7
W[441] = 0
W[442] = 53
W[443] = 157
let wholeSum = 0
for (const k of Object.keys(W)) wholeSum += W[k]
assert.equal(Object.keys(W).length, 67, 'the sixty-seven faces the cache holds')
assert.equal(wholeSum, 5840, "THE WHOLE-CACHE SEAT 5840u the sixty-seven faces ride")
assert.equal(W[422], 235, "THE WHOLE-CACHE STORM the face 422's own 235u rode ONCE")
assert.equal(Object.values(W).filter(v => v === 235).length, 1, 'the whole-cache top rode ONCE')
assert.equal(W[441], 0, "the whole-cache floor the face 441's own newest zero rides")
assert.equal(Object.values(W).filter(v => v === 0).length, 5, 'THE FIVE DROUGHTS the zero rode - the quad beside the face 441')
assert.equal(W[443], 157, "the face 443's own 157u the newest face rides")

// THE WHOLE-CACHE BOOK - the gap-crossing tally over the ordered
// cached faces (the absent 390..416 span and the 419 and the 424 and
// the 428 the windows cross, the honest gaps) - ALL-SPEAKING
const wFaces = Object.keys(W).map(Number).sort((a, b) => a - b)
// the gap-crossing tally - the ARRAY-POSITION read the honest fix
// prices (the absent 390..416 span and the 419 and the 424 and the 428
// the windows cross - the face-number read the gap prices as a lie at
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
assert.equal(wswing, 42, 'FORTY-TWO swings the whole cache prices')
assert.equal(wswell, 10, 'TEN swells the whole cache prices')
assert.equal(wfade, 13, 'THIRTEEN fades the whole cache prices')
assert.equal(wsilence, 0, 'the ZERO honest silences the all-speaking cache prices')
assert.equal(wswing + wswell + wfade + wsilence, 65, 'the SIXTY-FIVE whole-cache windows ride - ALL-SPEAKING')

// THE EIGHT-SWING RUN - THE WHOLE-CACHE RECORD (the gap-crossing run
// over the ordered cached faces - the absent 428 the run crosses; the
// bounds never extend - the swell 426 and the fade 436 hold)
let wRun = [], wCur = []
for (let i = 2; i < wFaces.length; i++) {
  const k = clsArc(W[wFaces[i - 2]], W[wFaces[i - 1]], W[wFaces[i]])
  if (k === 'swing') { wCur.push(wFaces[i]); if (wCur.length > wRun.length) wRun = [...wCur] } else wCur = []
}
assert.equal(wRun.length, 8, 'THE EIGHT-SWING RUN the whole cache holds - THE RECORD')
assert.deepEqual(wRun, [427, 429, 430, 431, 432, 433, 434, 435], 'the eight-swing run the gap-crossing faces hold')
const isWSwing = (f) => wRun.includes(f)
assert.ok(!isWSwing(426) && !isWSwing(436), 'the run never extends - the honest bounds ride')

// THE WHOLE-CACHE ROUND TRIPS - the ONE the same mirror both books
// price (the face 363's own window the weight-165 mirror)
let wRoundTrips = []
for (let i = 2; i < wFaces.length; i++) {
  const a = W[wFaces[i - 2]], b = W[wFaces[i - 1]], c = W[wFaces[i]]
  const first = b - a, second = c - b
  if (first !== 0 && second !== 0 && first > 0 !== second > 0 && first === -second) wRoundTrips.push(wFaces[i])
}
assert.deepEqual(wRoundTrips, [363], 'the ONE round trip the same mirror both books price - the records never merge')

// THE WHOLE-CACHE BOUNDS - the same legs both books ride (the same
// storm the field and the whole cache price)
let wr = [], wf = []
for (let i = 1; i < wFaces.length; i++) {
  const d = W[wFaces[i]] - W[wFaces[i - 1]]
  if (d === 214) wr.push(wFaces[i])
  if (d === -223) wf.push(wFaces[i])
}
assert.deepEqual(wr, [360], "the whole cache the +214 the same ONE leg ONE boundary rides - THE STORM'S OWN CLIMB")
assert.deepEqual(wf, [361], "the whole cache the -223 the same ONE leg ONE boundary rides - THE STORM'S OWN DRAIN")

// THE NEWEST WINDOWS - the W434/W435 swings and the W436 fade and the
// W437 swing and the W438 swell and the W439 swing and the W440/W441
// fade pair (the face 441's own zero the drain prices) and the W442
// swing and the W443 swell (MY WORD'S OWN FIRST LIVE READ the
// nearest-completed law holds)
const ww = (a, b, c) => combatBandTrendRow({ back: { combat: a }, prev: { combat: b }, cur: { combat: c } })
assert.equal(ww(W[432], W[433], W[434]), SWING + '167 -> 79 (-88) -> 216 (+137)' + SWING_TAIL, 'the W434 window the swing rides')
assert.equal(ww(W[433], W[434], W[435]), SWING + '79 -> 216 (+137) -> 98 (-118)' + SWING_TAIL, 'the W435 window the swing rides')
assert.equal(ww(W[434], W[435], W[436]), FADE + '216 -> 98 (-118) -> 63 (-35)' + FADE_TAIL, 'the W436 window the fade rides')
assert.equal(ww(W[435], W[436], W[437]), SWING + '98 -> 63 (-35) -> 104 (+41)' + SWING_TAIL, 'the W437 window the swing rides')
assert.equal(ww(W[436], W[437], W[438]), SWELL + '63 -> 104 (+41) -> 130 (+26)' + SWELL_TAIL, 'the W438 window the swell rides')
assert.equal(ww(W[437], W[438], W[439]), SWING + '104 -> 130 (+26) -> 27 (-103)' + SWING_TAIL, 'the W439 window the swing rides')
assert.equal(ww(W[438], W[439], W[440]), FADE + '130 -> 27 (-103) -> 7 (-20)' + FADE_TAIL, 'the W440 window the fade rides')
assert.equal(ww(W[439], W[440], W[441]), FADE + '27 -> 7 (-20) -> 0 (-7)' + FADE_TAIL, 'the W441 window the fade rides - THE FADE PAIR the drought zero the drain prices')
assert.equal(ww(W[440], W[441], W[442]), SWING + '7 -> 0 (-7) -> 53 (+53)' + SWING_TAIL, 'the W442 window the swing rides')
assert.equal(ww(W[441], W[442], W[443]), SWELL + '0 -> 53 (+53) -> 157 (+104)' + SWELL_TAIL, "the W443 window the swell rides - MY WORD'S OWN FIRST LIVE READ")

// THE REUSE LAW battery - the shooter census's own total cell the fold
// rides (the band's skins the count rides whole, the census's own
// marker the fold keeps - never a second grammar - the other lanes
// never ride, the lanes never merge)
const bandOf = (ls) => shooterCensus(ls).total
const L = (s) => bandOf(s.split('\n'))
assert.equal(L('F12 [F12] combat: fighting skeleton (dist 11.1, hp 16.0, 1 nearby, sentry)'), 1, 'the fighting-open skin rides')
assert.equal(L('F12 [F12] combat: fight ended vs skeleton (threat gone, hp 16.0 -> 8.0, swings 1, weapon wooden_sword, 1 rounds)'), 1, 'the fight-ended skin rides')
assert.equal(L('F11 [F11] combat: fight ended vs drowned (mob down, hp 15.3 -> 15.0, swings 7, weapon wooden_sword, 7 rounds)'), 1, 'the mob-down fight-ended skin rides')
assert.equal(L('F5 [F5] combat: flee toward shore (1,0 step 2) vs drowned (the yard reads)'), 1, 'the flee-bearing skin rides')
assert.equal(L('F9 [F9] combat: drift return wait vs drowned (@5.6) - the swimmer always comes back'), 1, 'the drift-return skin rides')
assert.equal(L('F7 [F7] combat: flee bearing rotated 90deg (the second hostile vetoes the yard target) vs zombie (the yard reads)'), 1, 'the flee-rotation skin rides')
assert.equal(L('F18 combat: fighting zombie'), 1, 'the single-prefix form the census marker rides - the census grammar the fold keeps never a second (the cache holds zero such lines the survey proof prices)')
assert.equal(L('F17 [F17] climb pounce probe: the signature declined (support=air, step=oak_leaves, head=air) - the well census continues'), 0, 'the climb pounce probe lane never rides')
assert.equal(L('F20 [F20] water: breach sealed at [-10,40,200]'), 0, 'the water lane never rides')
assert.equal(L('F21 [F21] digShaft: water table lid at y=-40'), 0, 'the dig shaft lane never rides')
assert.equal(L('F22 [F22] craft torches: pocket coal dry (sticks 4) - the torch-coal resupply asks the commons (2 coal)'), 0, 'the torch resupply lane never rides')
assert.equal(L('F23 [F23] vein sweep: 12 blocks swept'), 0, 'the vein sweep lane never rides')
assert.equal(L('F17 [F17] combat'), 0, 'the colon-less form never rides')
assert.equal(L('F17 [F17] combat:'), 0, 'the space-less colon form never rides')
assert.equal(L('combat: fighting zombie'), 1, 'the bare form the census marker rides - the census grammar the fold keeps never a second grammar (the cache holds zero such lines the survey proof prices)')
assert.equal(L('F14 [F14] the combat: fighting zombie'), 1, 'the embedded-prefix form the census marker rides the same - the word-boundary law the census prices (the cache holds zero such lines the survey proof prices)')
assert.equal(L(''), 0, 'the empty line never rides')
assert.equal(L('F12 [F12] combat: fighting skeleton (dist 11.1, hp 16.0, 1 nearby, sentry)\nF12 [F12] combat: fight ended vs skeleton (threat gone, hp 16.0 -> 8.0, swings 1, weapon wooden_sword, 1 rounds)\nF11 [F11] combat: fight ended vs drowned (mob down, hp 15.3 -> 15.0, swings 7, weapon wooden_sword, 7 rounds)'), 3, 'the THREE skins the count rides whole - the raw law')

// THE FENCE - the fold proves itself or the word prices nothing
assert.equal(combatBandTrendRow(null), null, 'the null fold prices nothing')
assert.equal(combatBandTrendRow(undefined), null, 'the undefined fold prices nothing')
assert.equal(combatBandTrendRow('junk'), null, 'the junk fold prices nothing')
assert.equal(combatBandTrendRow([]), null, 'the array fold prices nothing')
assert.equal(combatBandTrendRow({}), null, 'the faceless fold prices nothing')
assert.equal(combatBandTrendRow({ back: { combat: 1 }, prev: { combat: 2 } }), null, 'the two-faced fold prices nothing')
assert.equal(combatBandTrendRow({ back: { combat: -1 }, prev: { combat: 2 }, cur: { combat: 3 } }), null, 'the negative face prices nothing')
assert.equal(combatBandTrendRow({ back: { combat: 1.5 }, prev: { combat: 2 }, cur: { combat: 3 } }), null, 'the fractional face prices nothing')
assert.equal(combatBandTrendRow({ back: { combat: '1' }, prev: { combat: 2 }, cur: { combat: 3 } }), null, 'the string face prices nothing')
assert.equal(combatBandTrendRow({ back: { combat: 1 }, prev: { combat: 1 }, cur: { combat: 1 }, extra: 'key' }), null, 'the held step prices the honest silence - the extra key never rejected')
assert.equal(combatBandTrendRow({ back: { combat: 0 }, prev: { combat: 0 }, cur: { combat: 0 }, extra: 'key' }), null, 'the lawful zero face rides the fence - the held zero the honest silence')
assert.equal(combatBandTrendRow({ back: { combat: 5 }, prev: { combat: 5 }, cur: { combat: 9 } }), null, 'the held first step prices the honest silence')
assert.equal(combatBandTrendRow({ back: { combat: 5 }, prev: { combat: 9 }, cur: { combat: 9 } }), null, 'the held second step prices the honest silence')
assert.equal(combatBandTrendConsistent({ back: { combat: 0 }, prev: { combat: 3 }, cur: { combat: 7 }, junk: 1 }), true, 'the fence the extra keys never rejects')
assert.equal(combatBandTrendConsistent(null), false, 'the null fold never proves itself')
assert.equal(combatBandTrendConsistent({ back: { combat: 0 }, prev: { combat: 3 } }), false, 'the two-faced fold never proves itself')
