// tests/unit/veinsweeptrend.test.mjs - THE VEIN SWEEP LANE'S OWN
// TREND's own pin battery (v0.976.204): the fleet's core mining engine's
// own line mass across the faces the field's own scan named first (the
// 'F<n> vein sweep: <skin>' family) - the field's own chains byte-exact
// (THE CELL'S OWN WEIGHT 11630u the one-hundred faces' own total, THE
// BIRTH FIELD 5929u the fifty faces' own total, THE NO-DROUGHT BIRTH
// the zero never rode the fifty faces, THE FIELD'S OWN TOP THE COUNT
// 227 rode ONCE the face 343's own crest - THE STORM, THE FIELD'S OWN
// FLOOR THE COUNT 4 rode ONCE the face 346's own floor), the FIELD BOOK
// FORTY-EIGHT of FORTY-EIGHT windows speaking (THIRTY-THREE swings, SIX
// swells, NINE fades, the ZERO honest silences) beside the whole-cache
// book NINETY-EIGHT of NINETY-EIGHT speaking (SIXTY-FIVE swings, TWELVE
// swells, TWENTY-ONE fades, the ZERO honest silences) - THE ALL-SPEAKING
// FAMILY'S OWN NEWEST AND BIGGEST SEAT the pair rides, THE EIGHT-SWING
// RUN 347..354 THE RECORD both books ride, THE ZERO ROUND TRIPS, the
// bounds' own legs pins (the field's +116 rode ONE leg ONE boundary the
// boundary 346/347 - THE FLOOR'S OWN CLIMB, the -102 rode ONE leg ONE
// boundary the boundary 384/385 - THE CREST'S OWN DRAIN; the whole
// cache the +217 ONE leg ONE boundary 396/397 - THE DROUGHT'S OWN CLIMB
// the zero paid, the -126 ONE leg ONE boundary 395/396 - THE DROUGHT'S
// OWN ARRIVAL), the last field word the face 389's own window the fade
// (185 -> 148 (-37) -> 94 (-54)), the whole-cache pins (the 11630u over
// the one-hundred faces, THE DROUGHT the zero rode ONCE the face 396's
// own zero - THE SAME FACE the water pass's own drought rides beside,
// the W396 arrival window and the W397 climb window byte-exact, the
// W434 fade and the W435/W436 swings and the W437 fade and the W438
// swing and the W439 swell and the W440 swing 97 -> 110 (+13) -> 98
// (-12) MY WORD'S OWN FIRST LIVE READ), the REUSE LAW battery
// (veinLedger's own totals cell the fold rides - the classes the census
// holds ride whole, the dropwalk fail lines the ownership boundary
// skips never ride, the stance emitter's dist-closing skin the
// unparsed trend prices beside never ride, the lanes never merge), the
// fence/byte-pin batteries
import assert from 'node:assert'
import { veinSweepTrendConsistent, veinSweepTrendRow } from '../../src/lib/veinsweeptrend.mjs'
import { veinLedger } from '../../src/lib/veinledger.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, this word prices the vein sweep's own mass across the faces - the vein sweep seat, co-existence by seat never by duplication)"

const HEAD = 'the vein sweep trend (v0.976.204)'
const SWING = HEAD + ": the lane's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the lane's rise ran two steps deep - "
const SWELL_TAIL = " - the lane's own swell " + TAIL
const FADE = HEAD + ": the lane's fall ran two steps deep - "
const FADE_TAIL = " - the lane's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 340..389 (the ledger cell's
// own arithmetic, FIFTY faces deep - the lane the cache's own dawn
// already mined) - THE BIRTH FIELD 5929u the faces' own total, THE
// NO-DROUGHT BIRTH the zero never rode, THE FIELD'S OWN TOP THE COUNT
// 227 rode ONCE (the face 343's own crest - THE STORM), THE FIELD'S OWN
// FLOOR THE COUNT 4 rode ONCE (the face 346's own floor)
const P = {}
P[340] = 123
P[341] = 159
P[342] = 150
P[343] = 227
P[344] = 128
P[345] = 73
P[346] = 4
P[347] = 120
P[348] = 51
P[349] = 104
P[350] = 78
P[351] = 116
P[352] = 75
P[353] = 120
P[354] = 108
P[355] = 97
P[356] = 123
P[357] = 101
P[358] = 133
P[359] = 165
P[360] = 114
P[361] = 131
P[362] = 113
P[363] = 141
P[364] = 89
P[365] = 178
P[366] = 184
P[367] = 142
P[368] = 126
P[369] = 91
P[370] = 115
P[371] = 211
P[372] = 176
P[373] = 166
P[374] = 95
P[375] = 105
P[376] = 116
P[377] = 29
P[378] = 104
P[379] = 88
P[380] = 82
P[381] = 86
P[382] = 75
P[383] = 100
P[384] = 183
P[385] = 81
P[386] = 126
P[387] = 185
P[388] = 148
P[389] = 94
let fieldSum = 0
for (let f = 340; f <= 389; f++) fieldSum += P[f]
assert.equal(Object.keys(P).length, 50, 'the fifty faces the birth field holds')
assert.equal(fieldSum, 5929, "the birth field 5929u the census's own cell holds - THE VEIN SWEEP'S OWN SEAT rides")
assert.equal(Math.max(...Object.values(P)), 227, "THE STORM the count 227 the face 343's own crest rides - the top rode ONCE")
assert.equal(Object.values(P).filter(v => v === 227).length, 1, 'the top rode ONCE the honest crest the book holds')
assert.equal(Math.min(...Object.values(P)), 4, "THE FIELD'S OWN FLOOR the count 4 the face 346's own floor rides")
assert.equal(Object.values(P).filter(v => v === 4).length, 1, 'the floor rode ONCE the honest trough the book holds')
assert.equal(Object.values(P).filter(v => v === 0).length, 0, 'THE NO-DROUGHT BIRTH the zero never rode the fifty faces')
const w = (f) => veinSweepTrendRow({ back: { vlines: P[f - 2] }, prev: { vlines: P[f - 1] }, cur: { vlines: P[f] } })

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
// classification (SIX swells, NINE fades - the byte-exact arcs)
const SWELLS = {
  359: '101 -> 133 (+32) -> 165 (+32)',
  366: '89 -> 178 (+89) -> 184 (+6)',
  371: '91 -> 115 (+24) -> 211 (+96)',
  376: '95 -> 105 (+10) -> 116 (+11)',
  384: '75 -> 100 (+25) -> 183 (+83)',
  387: '81 -> 126 (+45) -> 185 (+59)'
}
const FADES = {
  345: '227 -> 128 (-99) -> 73 (-55)',
  346: '128 -> 73 (-55) -> 4 (-69)',
  355: '120 -> 108 (-12) -> 97 (-11)',
  368: '184 -> 142 (-42) -> 126 (-16)',
  369: '142 -> 126 (-16) -> 91 (-35)',
  373: '211 -> 176 (-35) -> 166 (-10)',
  374: '176 -> 166 (-10) -> 95 (-71)',
  380: '104 -> 88 (-16) -> 82 (-6)',
  389: '185 -> 148 (-37) -> 94 (-54)'
}
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, 'the swell window ' + f + ' rides byte-exact')
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, 'the fade window ' + f + ' rides byte-exact')
}

// THE FIELD BOOK - the field's own tally
let swing = 0, swell = 0, fade = 0, silence = 0
for (let f = 342; f <= 389; f++) {
  const k = tallyWindow(f, P)
  if (k === 'swing') swing++
  else if (k === 'swell') swell++
  else if (k === 'fade') fade++
  else silence++
}
assert.equal(swing, 33, 'THIRTY-THREE swings the field prices')
assert.equal(swell, 6, 'SIX swells the field prices')
assert.equal(fade, 9, 'NINE fades the field prices')
assert.equal(silence, 0, 'the ZERO honest silences the field prices - the all-speaking book')
assert.equal(swing + swell + fade + silence, 48, 'the FORTY-EIGHT field windows ride')

// THE EIGHT-SWING RUN 347..354 - THE RECORD THE BOOKS RIDE (the bounds
// never extend - the fade 346 and the swell 355 hold)
const isSwing = (f) => tallyWindow(f, P) === 'swing'
assert.ok([347, 348, 349, 350, 351, 352, 353, 354].every(isSwing), 'THE EIGHT-SWING RUN the faces 347..354 hold - THE RECORD')
assert.ok(!isSwing(346) && !isSwing(355), 'the run never extends - the honest bounds ride')

// THE ZERO ROUND TRIPS - the swings never mirrored (the field and the
// whole cache agree)
let roundTrips = 0
for (let f = 342; f <= 389; f++) {
  const first = P[f - 1] - P[f - 2], second = P[f] - P[f - 1]
  if (first !== 0 && second !== 0 && first > 0 !== second > 0 && first === -second) roundTrips++
}
assert.equal(roundTrips, 0, 'THE ZERO ROUND TRIPS the swings never mirrored')

// THE BOUNDS' OWN LEGS - the +116 and the -102 rode ONE leg ONE
// boundary each (THE FLOOR'S OWN CLIMB, THE CREST'S OWN DRAIN)
let rises = [], falls = []
for (let f = 341; f <= 389; f++) {
  const d = P[f] - P[f - 1]
  if (d === 116) rises.push(f)
  if (d === -102) falls.push(f)
}
assert.equal(rises.length, 1, 'the +116 rode ONE leg')
assert.equal(falls.length, 1, 'the -102 rode ONE leg')
assert.deepEqual(rises, [347], "the +116 rode ONE leg ONE boundary the boundary 346/347 - THE FLOOR'S OWN CLIMB the 4u trough paid")
assert.deepEqual(falls, [385], "the -102 rode ONE leg ONE boundary the boundary 384/385 - THE CREST'S OWN DRAIN 183 -> 81")

// THE LAST FIELD WORD - the face 389's own window the fade
assert.equal(w(389), FADE + '185 -> 148 (-37) -> 94 (-54)' + FADE_TAIL, "the last field word the face 389's own window the fade rides")

// THE WHOLE-CACHE SEAT - the 11630u over the one-hundred faces (the
// span 340..440, the absent 419 the honest gap the cache holds not),
// THE DROUGHT the zero rode ONCE the face 396's own zero - THE SAME
// FACE the water pass's own drought rides beside
const W = {}
Object.assign(W, P)
W[390] = 103
W[391] = 96
W[392] = 64
W[393] = 93
W[394] = 150
W[395] = 126
W[396] = 0
W[397] = 217
W[398] = 157
W[399] = 109
W[400] = 128
W[401] = 66
W[402] = 122
W[403] = 85
W[404] = 195
W[405] = 205
W[406] = 112
W[407] = 139
W[408] = 77
W[409] = 63
W[410] = 151
W[411] = 104
W[412] = 77
W[413] = 142
W[414] = 128
W[415] = 103
W[416] = 95
W[417] = 192
W[418] = 156
W[420] = 161
W[421] = 74
W[422] = 109
W[423] = 116
W[424] = 83
W[425] = 107
W[426] = 116
W[427] = 160
W[428] = 112
W[429] = 150
W[430] = 133
W[431] = 114
W[432] = 109
W[433] = 89
W[434] = 48
W[435] = 103
W[436] = 82
W[437] = 75
W[438] = 97
W[439] = 110
W[440] = 98
const ww = (f) => veinSweepTrendRow({ back: { vlines: W[f - 2] }, prev: { vlines: W[f - 1] }, cur: { vlines: W[f] } })
let wholeSum = 0
for (const k of Object.keys(W)) wholeSum += W[k]
assert.equal(Object.keys(W).length, 100, 'the one-hundred faces the cache holds')
assert.equal(wholeSum, 11630, 'THE WHOLE-CACHE SEAT 11630u the one-hundred faces ride')
assert.equal(W[343], 227, "THE WHOLE-CACHE STORM the face 343's own 227u rode ONCE")
assert.equal(Object.values(W).filter(v => v === 227).length, 1, 'the whole-cache top rode ONCE')
assert.equal(W[396], 0, "THE DROUGHT the face 396's own zero rides - THE SAME FACE the water pass's own drought rides beside")
assert.equal(Object.values(W).filter(v => v === 0).length, 1, 'the whole cache the zero rode ONCE - the single drought')

// THE DROUGHT'S OWN WINDOWS - the W396 arrival and the W397 climb (the
// arrival leg and the climb leg the ONE window prices)
assert.equal(ww(396), FADE + '150 -> 126 (-24) -> 0 (-126)' + FADE_TAIL, "the W396 window the drought's own arrival rides")
assert.equal(ww(397), SWING + '126 -> 0 (-126) -> 217 (+217)' + SWING_TAIL, "the W397 window the drought's own climb rides - the +217 the biggest single leg the lane's own book holds")

// THE WHOLE-CACHE BOOK - the gap-crossing tally over the ordered
// cached faces (the absent 419 the windows cross, the honest gap)
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
assert.equal(wswing, 65, 'SIXTY-FIVE swings the whole cache prices')
assert.equal(wswell, 12, 'TWELVE swells the whole cache prices')
assert.equal(wfade, 21, 'TWENTY-ONE fades the whole cache prices')
assert.equal(wsilence, 0, 'the ZERO honest silences the whole cache prices - the all-speaking book')
assert.equal(wswing + wswell + wfade + wsilence, 98, 'the NINETY-EIGHT whole-cache windows ride')

// THE EIGHT-SWING RUN - THE RECORD both books ride (the same run the
// field prices - the gap-crossing tally over the ordered cached faces)
let wRun = [], wCur = []
for (let i = 2; i < wFaces.length; i++) {
  const k = clsArc(W[wFaces[i - 2]], W[wFaces[i - 1]], W[wFaces[i]])
  if (k === 'swing') { wCur.push(wFaces[i]); if (wCur.length > wRun.length) wRun = [...wCur] } else wCur = []
}
assert.equal(wRun.length, 8, 'THE EIGHT-SWING RUN the whole cache holds - THE RECORD')
assert.deepEqual(wRun, [347, 348, 349, 350, 351, 352, 353, 354], 'the eight-swing run the same faces hold')

// THE WHOLE-CACHE BOUNDS' OWN LEGS - the +217 and the -126 rode ONE leg
// ONE boundary each (THE DROUGHT'S OWN CLIMB, THE DROUGHT'S OWN ARRIVAL)
let wrises = [], wfalls = []
const wKeys = wFaces
for (let i = 1; i < wKeys.length; i++) {
  const d = W[wKeys[i]] - W[wKeys[i - 1]]
  if (d === 217) wrises.push(`${wKeys[i - 1]}/${wKeys[i]}`)
  if (d === -126) wfalls.push(`${wKeys[i - 1]}/${wKeys[i]}`)
}
assert.equal(wrises.length, 1, 'the +217 rode ONE leg')
assert.equal(wfalls.length, 1, 'the -126 rode ONE leg')
assert.deepEqual(wrises, ['396/397'], "the +217 rode ONE leg ONE boundary the boundary 396/397 - THE DROUGHT'S OWN CLIMB the zero paid")
assert.deepEqual(wfalls, ['395/396'], "the -126 rode ONE leg ONE boundary the boundary 395/396 - THE DROUGHT'S OWN ARRIVAL")

// THE NEWEST WINDOWS - the W434 fade and the W435/W436 swings and the
// W437 fade and the W438 swing and the W439 swell and the W440 swing
// (MY WORD'S OWN FIRST LIVE READ the nearest-completed law holds)
assert.equal(ww(434), FADE + '109 -> 89 (-20) -> 48 (-41)' + FADE_TAIL, 'the W434 window the fade rides')
assert.equal(ww(435), SWING + '89 -> 48 (-41) -> 103 (+55)' + SWING_TAIL, 'the W435 window the swing rides')
assert.equal(ww(436), SWING + '48 -> 103 (+55) -> 82 (-21)' + SWING_TAIL, 'the W436 window the swing rides')
assert.equal(ww(437), FADE + '103 -> 82 (-21) -> 75 (-7)' + FADE_TAIL, 'the W437 window the fade rides')
assert.equal(ww(438), SWING + '82 -> 75 (-7) -> 97 (+22)' + SWING_TAIL, 'the W438 window the swing rides')
assert.equal(ww(439), SWELL + '75 -> 97 (+22) -> 110 (+13)' + SWELL_TAIL, 'the W439 window the swell rides')
assert.equal(ww(440), SWING + '97 -> 110 (+13) -> 98 (-12)' + SWING_TAIL, "the W440 window the swing rides - MY WORD'S OWN FIRST LIVE READ")

// THE REUSE LAW battery - veinLedger's own totals cell the fold rides
// (the classes the census holds ride whole, the dropwalk fail lines the
// ownership boundary skips never ride, the stance emitter's
// dist-closing skin the unparsed trend prices beside never ride, the
// lanes never merge)
const vOf = (ls) => {
  const vl = veinLedger(ls)
  return vl ? vl.totals.total : 0
}
const L = (s) => vOf(s.split('\n'))
assert.equal(L('F1 [F1] vein sweep: 8 drop(s) in reach (11 dug)'), 1, 'the terminal skin rides')
assert.equal(L('F1 [F1] vein sweep: +7u walked from the drops (24 dug)'), 1, 'the walk-yield skin rides')
assert.equal(L('F19 vein sweep: 1 ores dug beside the gallery (floor lock)'), 1, 'the gallery bare-prefix skin rides')
assert.equal(L('F2 [F2] vein sweep: lip dig refused - sealed floor (air 0, dy -0.9)'), 1, 'the lip-refusal skin rides')
assert.equal(L('F10 [F10] vein sweep: support dig refused - below the ledge class (air 0, dist 4.1)'), 1, 'the support-refusal skin rides')
assert.equal(L('F12 [F12] vein sweep: support dig refused - sealed under the ledge (air 0, dist 3.1, seal 3)'), 1, 'the support-refusal seal skin rides')
assert.equal(L('F16 [F16] vein sweep: ledge cut refused - the stand-off exceeds the magnet (seal 3, dy 1, dist 1.6)'), 1, 'the ledge-refusal skin rides')
assert.equal(L('F19 [F19] vein sweep: 1 deep drop(s) skipped (dy < -2 - the lip sphere cannot reach, the walk was a guaranteed spiral)'), 1, 'the deep-skip skin rides')
assert.equal(L('F2 [F2] vein sweep: 2 drop(s) already inside the goal - the zero-displacement walk spared (the instant done the spin book reads as churn)'), 1, 'the spared skin rides')
assert.equal(L('F2 [F2] vein sweep: 1 drop goal(s) refused before the goto (no standable cell in the arrival sphere - the walk was a proven burn)'), 1, 'the goal-refusal skin rides')
assert.equal(L('F1 [F1] vein sweep: 4 above-plane walk(s) timed out on the wide goal (range 2) - the ledge family (the v0.189.0 class, the triage names it)'), 1, 'the above-plane skin rides')
assert.equal(L('F16 [F16] vein sweep: 1 below-plane walk(s) still failed on the wide goal (range 2) - the drop rests deeper than the lip'), 1, 'the below-plane skin rides')
assert.equal(L('F2 [F2] vein sweep: the drop walks picked nothing (pocket delta 0, 1 failed walk(s))'), 1, 'the picked-nothing skin rides')
assert.equal(L('F6 [F6] vein sweep: ore tier guard - 2 copper_ore left for a stone pick (have wooden_pickaxe)'), 1, 'the tier-guard skin rides')
assert.equal(L('F13 [F13] vein sweep: high ledge stance landed - dist 1.5, the dig still refuses - the ledge reads too high, walked 0.9'), 1, 'the stance-landed skin rides')
assert.equal(L('F10 [F10] vein sweep: 1 support dig-down(s) - the failed ledge walk shook the drop loose, the fall carries it to the magnet'), 1, 'the support dig-down skin rides')
assert.equal(L('F3 [F3] vein sweep: 1 lip dig-down(s) - the range-2 arrival left the drop outside the magnet, the last mile dug'), 1, 'the lip dig-down skin rides')
assert.equal(L('F2 [F2] vein sweep: the drop walk to [-119,43,395] failed - goal admission: no standable cell in the goal\'s arrival sphere - sweep drops refused (dy -0.4, range 1, walked 0.0)'), 0, 'the dropwalk fail line never rides - the ownership boundary')
assert.equal(L('F1 [F1] vein sweep: the drop walk to [-113,49,401] failed - sweep drops: timeout after 3000ms (dy 0.2, range 2, walked 3.1)'), 0, 'the dropwalk timeout line never rides - the dropwalk book\'s own cell')
assert.equal(L('F16 [F16] vein sweep: stance step armed - the stand-off exceeds the magnet (dist 2.0, closing 1)'), 0, 'the stance dist-closing skin never rides - the unparsed trend\'s own seat')
assert.equal(L('F14 [F14] climb pounce probe: the signature declined (support=air, step=oak_leaves, head=air) - the well census continues'), 0, 'the pounce probe lane never rides')
assert.equal(L('F23 [F23] craft torches: skip (coal-dry, cap 4/4)'), 0, 'the torch skip lane never rides')
assert.equal(L('F5 [F5] vein sweep: 3 drop(s) in reach'), 0, 'the torn tail never rides')
assert.equal(L('F5 vein sweep 8 drop(s) in reach (11 dug)'), 0, 'the colon-less form never rides')
assert.equal(L('F5 [F6] vein sweep: 8 drop(s) in reach (11 dug)'), 0, 'the bracket-mismatched form never rides')
assert.equal(L('vein sweep: 8 drop(s) in reach (11 dug)'), 0, 'the bare form never rides')
assert.equal(L(''), 0, 'the empty line never rides')
assert.equal(L('F1 [F1] vein sweep: 8 drop(s) in reach (11 dug)\nF1 [F1] vein sweep: +7u walked from the drops (24 dug)\nF19 vein sweep: 1 ores dug beside the gallery (floor lock)'), 3, 'the classified skins the count rides whole - the raw law')
assert.equal(L('F1 [F1] vein sweep: 8 drop(s) in reach (11 dug)\nF2 [F2] vein sweep: the drop walk to [-1,1,1] failed - sweep drops: timeout after 3000ms (dy 0, range 1, walked 0)'), 1, 'the dropwalk row never rides even beside the classified line - the ownership boundary holds')

// THE FENCE - the fold proves itself or the word prices nothing
assert.equal(veinSweepTrendRow(null), null, 'the null fold prices nothing')
assert.equal(veinSweepTrendRow(undefined), null, 'the undefined fold prices nothing')
assert.equal(veinSweepTrendRow('junk'), null, 'the junk fold prices nothing')
assert.equal(veinSweepTrendRow([]), null, 'the array fold prices nothing')
assert.equal(veinSweepTrendRow({}), null, 'the faceless fold prices nothing')
assert.equal(veinSweepTrendRow({ back: { vlines: 1 }, prev: { vlines: 2 } }), null, 'the two-faced fold prices nothing')
assert.equal(veinSweepTrendRow({ back: { vlines: -1 }, prev: { vlines: 2 }, cur: { vlines: 3 } }), null, 'the negative face prices nothing')
assert.equal(veinSweepTrendRow({ back: { vlines: 1.5 }, prev: { vlines: 2 }, cur: { vlines: 3 } }), null, 'the fractional face prices nothing')
assert.equal(veinSweepTrendRow({ back: { vlines: '1' }, prev: { vlines: 2 }, cur: { vlines: 3 } }), null, 'the string face prices nothing')
assert.equal(veinSweepTrendRow({ back: { vlines: 1 }, prev: { vlines: 1 }, cur: { vlines: 1 }, extra: 'key' }), null, 'the held step prices the honest silence - the extra key never rejected')
assert.equal(veinSweepTrendRow({ back: { vlines: 0 }, prev: { vlines: 0 }, cur: { vlines: 0 }, extra: 'key' }), null, 'the lawful zero face rides the fence - the held zero the honest silence')
assert.equal(veinSweepTrendConsistent({ back: { vlines: 0 }, prev: { vlines: 3 }, cur: { vlines: 7 }, junk: 1 }), true, 'the fence the extra keys never rejects')
assert.equal(veinSweepTrendConsistent(null), false, 'the null fold never proves itself')
assert.equal(veinSweepTrendConsistent({ back: { vlines: 0 }, prev: { vlines: 3 } }), false, 'the two-faced fold never proves itself')
