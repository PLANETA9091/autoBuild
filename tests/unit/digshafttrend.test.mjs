// tests/unit/digshafttrend.test.mjs - THE DIG SHAFT LANE'S OWN
// TREND's own pin battery (v0.976.205): the fleet's core mining
// engine's own descent lane's own mass across the faces the field's
// own scan named first (the 'F<n> [F<n>] digShaft: <skin>' family) -
// the field's own chains byte-exact (THE CELL'S OWN WEIGHT 3866u the
// forty-three faces' own total, THE NO-DROUGHT BIRTH the zero never
// rode the forty-three faces, THE FIELD'S OWN TOP THE COUNT 190 rode
// ONCE the face 371's own crest - THE STORM, THE FIELD'S OWN FLOOR
// THE COUNT 2 rode ONCE the face 377's own floor), the FIELD BOOK
// FORTY-ONE of FORTY-ONE windows speaking (THIRTY swings, SIX swells,
// FIVE fades, the ZERO honest silences) beside the whole-cache book
// SIXTY-THREE of SIXTY-THREE speaking (FORTY-SIX swings, ELEVEN
// swells, SIX fades, the ZERO honest silences) - THE ALL-SPEAKING
// FAMILY'S OWN SEAT the pair rides, THE ELEVEN-SWING RUN 350..360 THE
// RECORD both books ride, THE EIGHT-SWING RUN 432..439 the whole
// cache beside, THE ZERO ROUND TRIPS, the bounds' own legs pins (the
// +168 rode ONE leg ONE boundary the boundary 381/382 - THE SECOND
// CREST'S OWN CLIMB, the -128 rode ONE leg ONE boundary the boundary
// 382/383 - THE SECOND CREST'S OWN DRAIN; both books the same legs
// ride), the last field word the face 389's own window the swing
// (100 -> 30 (-70) -> 124 (+94)), the whole-cache pins (the 5618u
// over the sixty-five faces, THE NO-DROUGHT CACHE the zero never rode
// the sixty-five faces, the W434..W439 swings and the W440 swell and
// the W441 swell 59 -> 111 (+52) -> 158 (+47) MY WORD'S OWN FIRST
// LIVE READ), the RAW LAW battery (every line the double-prefix shape
// prints rides whole - the lid and the refusal and the strike skins,
// the strike's own name never splits - the other lanes' lines and the
// torn and the colon-less and the bracket-mismatched and the bare
// forms never ride, the lanes never merge), the fence/byte-pin
// batteries
import assert from 'node:assert'
import { digShaftTrendConsistent, digShaftTrendRow } from '../../src/lib/digshafttrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, this word prices the dig shaft's own mass across the faces - the dig shaft seat, co-existence by seat never by duplication)"

const HEAD = 'the dig shaft trend (v0.976.205)'
const SWING = HEAD + ": the lane's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the lane's rise ran two steps deep - "
const SWELL_TAIL = " - the lane's own swell " + TAIL
const FADE = HEAD + ": the lane's fall ran two steps deep - "
const FADE_TAIL = " - the lane's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 347..389 (the raw count's
// own arithmetic, FORTY-THREE faces deep - the lane the cache's own
// dawn already mined) - THE BIRTH FIELD 3866u the faces' own total,
// THE NO-DROUGHT BIRTH the zero never rode, THE FIELD'S OWN TOP THE
// COUNT 190 rode ONCE (the face 371's own crest - THE STORM), THE
// FIELD'S OWN FLOOR THE COUNT 2 rode ONCE (the face 377's own floor)
const P = {}
P[347] = 41
P[348] = 61
P[349] = 70
P[350] = 25
P[351] = 127
P[352] = 115
P[353] = 161
P[354] = 78
P[355] = 145
P[356] = 81
P[357] = 93
P[358] = 90
P[359] = 168
P[360] = 133
P[361] = 81
P[362] = 63
P[363] = 77
P[364] = 128
P[365] = 83
P[366] = 92
P[367] = 93
P[368] = 112
P[369] = 128
P[370] = 70
P[371] = 190
P[372] = 125
P[373] = 67
P[374] = 17
P[375] = 106
P[376] = 95
P[377] = 2
P[378] = 68
P[379] = 19
P[380] = 131
P[381] = 18
P[382] = 186
P[383] = 58
P[384] = 80
P[385] = 82
P[386] = 53
P[387] = 100
P[388] = 30
P[389] = 124
let fieldSum = 0
for (let f = 347; f <= 389; f++) fieldSum += P[f]
assert.equal(Object.keys(P).length, 43, 'the forty-three faces the birth field holds')
assert.equal(fieldSum, 3866, "the birth field 3866u the raw count's own cell holds - THE DIG SHAFT'S OWN SEAT rides")
assert.equal(Math.max(...Object.values(P)), 190, "THE STORM the count 190 the face 371's own crest rides - the top rode ONCE")
assert.equal(Object.values(P).filter(v => v === 190).length, 1, 'the top rode ONCE the honest crest the book holds')
assert.equal(Math.min(...Object.values(P)), 2, "THE FIELD'S OWN FLOOR the count 2 the face 377's own floor rides")
assert.equal(Object.values(P).filter(v => v === 2).length, 1, 'the floor rode ONCE the honest trough the book holds')
assert.equal(Object.values(P).filter(v => v === 0).length, 0, 'THE NO-DROUGHT BIRTH the zero never rode the forty-three faces')
const w = (f) => digShaftTrendRow({ back: { digShafts: P[f - 2] }, prev: { digShafts: P[f - 1] }, cur: { digShafts: P[f] } })

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
// classification (SIX swells, FIVE fades - the byte-exact arcs)
const SWELLS = {
  349: '41 -> 61 (+20) -> 70 (+9)',
  364: '63 -> 77 (+14) -> 128 (+51)',
  367: '83 -> 92 (+9) -> 93 (+1)',
  368: '92 -> 93 (+1) -> 112 (+19)',
  369: '93 -> 112 (+19) -> 128 (+16)',
  385: '58 -> 80 (+22) -> 82 (+2)'
}
const FADES = {
  361: '168 -> 133 (-35) -> 81 (-52)',
  362: '133 -> 81 (-52) -> 63 (-18)',
  373: '190 -> 125 (-65) -> 67 (-58)',
  374: '125 -> 67 (-58) -> 17 (-50)',
  377: '106 -> 95 (-11) -> 2 (-93)'
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
assert.equal(swing, 30, 'THIRTY swings the field prices')
assert.equal(swell, 6, 'SIX swells the field prices')
assert.equal(fade, 5, 'FIVE fades the field prices')
assert.equal(silence, 0, 'the ZERO honest silences the field prices - the all-speaking book')
assert.equal(swing + swell + fade + silence, 41, 'the FORTY-ONE field windows ride')

// THE ELEVEN-SWING RUN 350..360 - THE RECORD BOTH BOOKS RIDE (the
// bounds never extend - the swell 349 and the fade 361 hold)
const isSwing = (f) => tallyWindow(f, P) === 'swing'
assert.ok([350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360].every(isSwing), 'THE ELEVEN-SWING RUN the faces 350..360 hold - THE RECORD')
assert.ok(!isSwing(349) && !isSwing(361), 'the run never extends - the honest bounds ride')

// THE SEVEN-SWING RUN 378..384 - the field's own second record beside
// (the bounds never extend - the fade 377 and the swell 385 hold)
assert.ok([378, 379, 380, 381, 382, 383, 384].every(isSwing), 'THE SEVEN-SWING RUN the faces 378..384 hold beside')
assert.ok(!isSwing(377) && !isSwing(385), 'the seven-run never extends - the honest bounds ride')

// THE ZERO ROUND TRIPS - the swings never mirrored (the field and the
// whole cache agree)
let roundTrips = 0
for (let f = 349; f <= 389; f++) {
  const first = P[f - 1] - P[f - 2], second = P[f] - P[f - 1]
  if (first !== 0 && second !== 0 && first > 0 !== second > 0 && first === -second) roundTrips++
}
assert.equal(roundTrips, 0, 'THE ZERO ROUND TRIPS the swings never mirrored')

// THE BOUNDS' OWN LEGS - the +168 and the -128 rode ONE leg ONE
// boundary each (THE SECOND CREST'S OWN CLIMB, THE SECOND CREST'S OWN
// DRAIN - both books the same legs ride)
let rises = [], falls = []
for (let f = 348; f <= 389; f++) {
  const d = P[f] - P[f - 1]
  if (d === 168) rises.push(f)
  if (d === -128) falls.push(f)
}
assert.equal(rises.length, 1, 'the +168 rode ONE leg')
assert.equal(falls.length, 1, 'the -128 rode ONE leg')
assert.deepEqual(rises, [382], "the +168 rode ONE leg ONE boundary the boundary 381/382 - THE SECOND CREST'S OWN CLIMB the 18u trough paid")
assert.deepEqual(falls, [383], "the -128 rode ONE leg ONE boundary the boundary 382/383 - THE SECOND CREST'S OWN DRAIN 186 -> 58")

// THE LAST FIELD WORD - the face 389's own window the swing
assert.equal(w(389), SWING + '100 -> 30 (-70) -> 124 (+94)' + SWING_TAIL, "the last field word the face 389's own window the swing rides")

// THE WHOLE-CACHE SEAT - the 5618u over the sixty-five faces (the
// span 347..441, the absent 390..416 span and the 419 and the 424 and
// the 428 the honest gaps the cache holds not), THE NO-DROUGHT CACHE
// the zero never rode the sixty-five faces
const W = {}
Object.assign(W, P)
W[417] = 106
W[418] = 49
W[420] = 131
W[421] = 36
W[422] = 148
W[423] = 29
W[425] = 52
W[426] = 83
W[427] = 79
W[429] = 97
W[430] = 109
W[431] = 137
W[432] = 73
W[433] = 80
W[434] = 36
W[435] = 83
W[436] = 31
W[437] = 42
W[438] = 23
W[439] = 59
W[440] = 111
W[441] = 158
const ww = (f) => digShaftTrendRow({ back: { digShafts: W[f - 2] }, prev: { digShafts: W[f - 1] }, cur: { digShafts: W[f] } })
let wholeSum = 0
for (const k of Object.keys(W)) wholeSum += W[k]
assert.equal(Object.keys(W).length, 65, 'the sixty-five faces the cache holds')
assert.equal(wholeSum, 5618, 'THE WHOLE-CACHE SEAT 5618u the sixty-five faces ride')
assert.equal(W[371], 190, "THE WHOLE-CACHE STORM the face 371's own 190u rode ONCE")
assert.equal(Object.values(W).filter(v => v === 190).length, 1, 'the whole-cache top rode ONCE')
assert.equal(W[377], 2, "THE WHOLE-CACHE FLOOR the face 377's own 2u rode ONCE")
assert.equal(Object.values(W).filter(v => v === 2).length, 1, 'the whole-cache floor rode ONCE')
assert.equal(Object.values(W).filter(v => v === 0).length, 0, 'THE NO-DROUGHT CACHE the zero never rode the sixty-five faces')

// THE WHOLE-CACHE BOOK - the gap-crossing tally over the ordered
// cached faces (the absent 390..416 span and the 419 and the 424 and
// the 428 the windows cross, the honest gaps)
const wFaces = Object.keys(W).map(Number).sort((a, b) => a - b)
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
assert.equal(wswing, 46, 'FORTY-SIX swings the whole cache prices')
assert.equal(wswell, 11, 'ELEVEN swells the whole cache prices')
assert.equal(wfade, 6, 'SIX fades the whole cache prices')
assert.equal(wsilence, 0, 'the ZERO honest silences the whole cache prices - the all-speaking book')
assert.equal(wswing + wswell + wfade + wsilence, 63, 'the SIXTY-THREE whole-cache windows ride')

// THE ELEVEN-SWING RUN - THE RECORD both books ride (the same run the
// field prices - the gap-crossing tally over the ordered cached
// faces), THE EIGHT-SWING RUN 432..439 the whole cache beside (the
// bounds never extend - the swell 431 and the swell 440 hold)
let wRun = [], wCur = []
for (let i = 2; i < wFaces.length; i++) {
  const k = clsArc(W[wFaces[i - 2]], W[wFaces[i - 1]], W[wFaces[i]])
  if (k === 'swing') { wCur.push(wFaces[i]); if (wCur.length > wRun.length) wRun = [...wCur] } else wCur = []
}
assert.equal(wRun.length, 11, 'THE ELEVEN-SWING RUN the whole cache holds - THE RECORD both books ride')
assert.deepEqual(wRun, [350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360], 'the eleven-swing run the same faces hold')
const eightRun = (from, to) => {
  for (let f = from; f <= to; f++) if (clsArc(W[f - 2], W[f - 1], W[f]) !== 'swing') return false
  return clsArc(W[from - 2 - 1], W[from - 2], W[from - 1]) !== 'swing' && clsArc(W[to - 1], W[to], W[to + 1]) !== 'swing'
}
assert.ok(eightRun(432, 439), 'THE EIGHT-SWING RUN the faces 432..439 hold - the whole cache beside (the swell 431 and the swell 440 the bounds hold)')

// THE WHOLE-CACHE BOUNDS' OWN LEGS - the same legs the field rides
// (the +168 and the -128 ONE leg ONE boundary each)
let wrises = [], wfalls = []
for (let i = 1; i < wFaces.length; i++) {
  const d = W[wFaces[i]] - W[wFaces[i - 1]]
  if (d === 168) wrises.push(`${wFaces[i - 1]}/${wFaces[i]}`)
  if (d === -128) wfalls.push(`${wFaces[i - 1]}/${wFaces[i]}`)
}
assert.equal(wrises.length, 1, 'the +168 rode ONE leg the whole cache holds')
assert.equal(wfalls.length, 1, 'the -128 rode ONE leg the whole cache holds')
assert.deepEqual(wrises, ['381/382'], "the +168 rode ONE leg ONE boundary the boundary 381/382 - THE SECOND CREST'S OWN CLIMB")
assert.deepEqual(wfalls, ['382/383'], "the -128 rode ONE leg ONE boundary the boundary 382/383 - THE SECOND CREST'S OWN DRAIN")

// THE NEWEST WINDOWS - the W434..W439 swings and the W440 swell and
// the W441 swell (MY WORD'S OWN FIRST LIVE READ the nearest-completed
// law holds)
assert.equal(ww(434), SWING + '73 -> 80 (+7) -> 36 (-44)' + SWING_TAIL, 'the W434 window the swing rides')
assert.equal(ww(435), SWING + '80 -> 36 (-44) -> 83 (+47)' + SWING_TAIL, 'the W435 window the swing rides')
assert.equal(ww(436), SWING + '36 -> 83 (+47) -> 31 (-52)' + SWING_TAIL, 'the W436 window the swing rides')
assert.equal(ww(437), SWING + '83 -> 31 (-52) -> 42 (+11)' + SWING_TAIL, 'the W437 window the swing rides')
assert.equal(ww(438), SWING + '31 -> 42 (+11) -> 23 (-19)' + SWING_TAIL, 'the W438 window the swing rides')
assert.equal(ww(439), SWING + '42 -> 23 (-19) -> 59 (+36)' + SWING_TAIL, 'the W439 window the swing rides')
assert.equal(ww(440), SWELL + '23 -> 59 (+36) -> 111 (+52)' + SWELL_TAIL, 'the W440 window the swell rides')
assert.equal(ww(441), SWELL + '59 -> 111 (+52) -> 158 (+47)' + SWELL_TAIL, "the W441 window the swell rides - MY WORD'S OWN FIRST LIVE READ")

// THE RAW LAW battery - every line the double-prefix shape prints
// rides whole (the lid and the refusal and the strike skins, the
// strike's own name never splits - the give-up and the health-pause
// skins the same prefix shape prices; the other lanes' lines and the
// torn and the colon-less and the bracket-mismatched and the bare
// forms never ride, the lanes never merge)
const dOf = (ls) => {
  let n = 0
  for (const l of ls) if (/^F(\d+) \[F\1\] digShaft: /.test(l)) n++
  return n
}
const L = (s) => dOf(s.split('\n'))
assert.equal(L('F2 [F2] digShaft: water table y=49 (region strike) - stopping above the aquifer, the tunnel owns this level (regions 3)'), 1, 'the lid skin rides')
assert.equal(L('F9 [F9] digShaft: water hazard 4.2b away (live 2) - refusing this column, the caller rotates'), 1, 'the refusal skin rides')
assert.equal(L('F2 [F2] digShaft: water strike at y=50 -> water table (regions 1); fluid below (-119, 43, 395) - moving sideways'), 1, 'the water strike skin rides')
assert.equal(L('F5 [F5] digShaft: bubble_column strike at y=61 -> water table (regions 2); fluid below (-100, 61, 380) - moving sideways'), 1, "the bubble_column strike skin rides - the strike's own name never splits")
assert.equal(L('F2 [F2] digShaft: giving up this shaft (6 fluid/drop sidesteps, no dig between) - the caller rotates'), 1, 'the give-up fluid/drop skin rides - the raw law no exclusion the shape needs')
assert.equal(L('F2 [F2] digShaft: giving up this shaft (3 sidesteps, undiggable floor) - the caller rotates'), 1, 'the give-up undiggable skin rides - the raw law')
assert.equal(L('F1 [F1] digShaft: health dropped 18.0 -> 7.5, pausing descent'), 1, 'the health-pause skin rides - the raw law')
assert.equal(L('F14 [F14] climb pounce probe: the signature declined (support=air, step=oak_leaves, head=air) - the well census continues'), 0, 'the pounce probe lane never rides')
assert.equal(L('F23 [F23] craft torches: skip (coal-dry, cap 4/4)'), 0, 'the torch skip lane never rides')
assert.equal(L('F1 [F1] vein sweep: 8 drop(s) in reach (11 dug)'), 0, 'the vein sweep lane never rides')
assert.equal(L('F16 [F16] water: pass 3 head=wet shore=none land=n/a y=62.0 o2=300 probes=4 at=[-119,62,395]'), 0, 'the water pass lane never rides')
assert.equal(L('[ProdTest1] digShaft: giving up this shaft (1 sidesteps, undiggable floor) - the caller rotates'), 0, "the bracket-tag smoke voice never rides - the fleet's own face voice the raw law prices")
assert.equal(L('F5 [F5] digShaft water table y=49 (region strike)'), 0, 'the colon-less form never rides')
assert.equal(L('F5 [F6] digShaft: water table y=49 (region strike)'), 0, 'the bracket-mismatched form never rides')
assert.equal(L('digShaft: water table y=49 (region strike)'), 0, 'the bare form never rides')
assert.equal(L('F5 [F5] digShaft:'), 0, 'the torn tail never rides')
assert.equal(L(''), 0, 'the empty line never rides')
assert.equal(L('F2 [F2] digShaft: water table y=49 (region strike) - stopping above the aquifer, the tunnel owns this level (regions 3)\nF9 [F9] digShaft: water hazard 4.2b away (live 2) - refusing this column, the caller rotates\nF5 [F5] digShaft: bubble_column strike at y=61 -> water table (regions 2); fluid below (-100, 61, 380) - moving sideways'), 3, 'the classified skins the count rides whole - the raw law')
assert.equal(L('F2 [F2] digShaft: water table y=49 (region strike) - stopping above the aquifer, the tunnel owns this level (regions 3)\nF14 [F14] climb pounce probe: the signature declined (support=air, step=oak_leaves, head=air) - the well census continues'), 1, 'the foreign row never rides even beside the classified line - the ownership boundary holds')

// THE FENCE - the fold proves itself or the word prices nothing
assert.equal(digShaftTrendRow(null), null, 'the null fold prices nothing')
assert.equal(digShaftTrendRow(undefined), null, 'the undefined fold prices nothing')
assert.equal(digShaftTrendRow('junk'), null, 'the junk fold prices nothing')
assert.equal(digShaftTrendRow([]), null, 'the array fold prices nothing')
assert.equal(digShaftTrendRow({}), null, 'the faceless fold prices nothing')
assert.equal(digShaftTrendRow({ back: { digShafts: 1 }, prev: { digShafts: 2 } }), null, 'the two-faced fold prices nothing')
assert.equal(digShaftTrendRow({ back: { digShafts: -1 }, prev: { digShafts: 2 }, cur: { digShafts: 3 } }), null, 'the negative face prices nothing')
assert.equal(digShaftTrendRow({ back: { digShafts: 1.5 }, prev: { digShafts: 2 }, cur: { digShafts: 3 } }), null, 'the fractional face prices nothing')
assert.equal(digShaftTrendRow({ back: { digShafts: '1' }, prev: { digShafts: 2 }, cur: { digShafts: 3 } }), null, 'the string face prices nothing')
assert.equal(digShaftTrendRow({ back: { digShafts: 1 }, prev: { digShafts: 1 }, cur: { digShafts: 1 }, extra: 'key' }), null, 'the held step prices the honest silence - the extra key never rejected')
assert.equal(digShaftTrendRow({ back: { digShafts: 0 }, prev: { digShafts: 0 }, cur: { digShafts: 0 }, extra: 'key' }), null, 'the lawful zero face rides the fence - the held zero the honest silence')
assert.equal(digShaftTrendConsistent({ back: { digShafts: 0 }, prev: { digShafts: 3 }, cur: { digShafts: 7 }, junk: 1 }), true, 'the fence the extra keys never rejects')
assert.equal(digShaftTrendConsistent(null), false, 'the null fold never proves itself')
assert.equal(digShaftTrendConsistent({ back: { digShafts: 0 }, prev: { digShafts: 3 } }), false, 'the two-faced fold never proves itself')
