// tests/unit/smeltbandstrend.test.mjs - THE SMELT BANDS LANE'S OWN
// TREND's own pin battery (v0.976.201): the smelt unreachable bands' own
// carries mass across the faces the F435's own face named first (the
// 'smelt unreachable bands: <band> carries <n> of <total> unreachable
// refusals (<pct>%) - <verdict>' family - the walk-leg tax the bands'
// own voice prices) - the field's own chains byte-exact (THE CELL'S
// OWN WEIGHT 571u the sixty-one faces' own total, THE BIRTH FIELD 375u
// the forty-three faces' own total, THE FIELD'S OWN TOP THE COUNT 21
// rode ONCE the face 364's own crest - THE STORM, the non-zero floor
// THE COUNT 3 rode TWICE the faces 348/384's own floors, THE ZERO rode
// FIVE times - THE FIVE DROUGHTS), the FIELD BOOK THIRTY-SEVEN of
// FORTY-ONE windows speaking (TWENTY-SIX swings, TWO swells, NINE
// fades, the FOUR honest silences) beside the whole-cache book
// FIFTY-THREE of FIFTY-NINE speaking (THIRTY-SEVEN swings, TWO swells,
// FOURTEEN fades, the SIX honest silences), THE TWELVE-SWING RUN the
// faces 368..379 hold - THE RECORD THE BOOK RIDES, THE ONE ROUND TRIP
// the face 369's own window the weight-7 mirror, the bounds' own legs
// pins (the +16 rode ONE leg ONE boundary the boundary 363/364 - THE
// STORM'S OWN CLIMB, the -19 rode ONE leg ONE boundary the boundary
// 354/355 - THE STORM'S OWN DRAIN), the last field word the face
// 389's own window the swing (8 -> 16 (+8) -> 6 (-10)), the
// whole-cache pins (the 571u over the sixty-one faces, the face 433's
// own 28u THE WHOLE-CACHE STORM rode ONCE, the whole cache the zero
// rode EIGHT times - THE EIGHT DROUGHTS, the W433 window the swing
// 5 -> 4 (-1) -> 28 (+24), the W434 window the swing 4 -> 28 (+24) ->
// 9 (-19), the W435 window the swing 28 -> 9 (-19) -> 27 (+18), the
// W436 window the swing 9 -> 27 (+18) -> 10 (-17), the W437 window the
// fade 27 -> 10 (-17) -> 0 (-10) MY WORD'S OWN FIRST LIVE READ), the
// skins-ride-whole battery (the TWO band skins + the verdict prose the
// carries rides whole - the .195's own law co-exists by seat; the smelt
// unreachable owner and why and cross lanes never ride, the smelt
// refusal census never rides, the no-band and the bare and the torn
// forms never ride - the lanes never merge)
import assert from 'node:assert'
import { smeltBands, smeltBandsTrendConsistent, smeltBandsTrendRow } from '../../src/lib/smeltbandstrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, this word prices the smelt bands' own carries mass across the faces - the smelt bands seat, co-existence by seat never by duplication)"

const HEAD = 'the smelt bands trend (v0.976.201)'
const SWING = HEAD + ": the carries' own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the carries' rise ran two steps deep - "
const SWELL_TAIL = " - the carries' own swell " + TAIL
const FADE = HEAD + ": the carries' fall ran two steps deep - "
const FADE_TAIL = " - the carries' own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 347..389 (the bands RE's
// own arithmetic, FORTY-THREE faces deep) - THE BIRTH FIELD 375u the
// faces' own total, THE FIELD'S OWN TOP THE COUNT 21 rode ONCE (the
// face 364's own crest - THE STORM), the non-zero floor THE COUNT 3
// rode TWICE (the faces 348/384's own floors), THE ZERO rode FIVE
// times (THE FIVE DROUGHTS the faces 349/350/355/358/359 hold)
const P = {}
P[347] = 8
P[348] = 3
P[349] = 0
P[350] = 0
P[351] = 14
P[352] = 10
P[353] = 8
P[354] = 19
P[355] = 0
P[356] = 8
P[357] = 6
P[358] = 0
P[359] = 0
P[360] = 8
P[361] = 16
P[362] = 10
P[363] = 5
P[364] = 21
P[365] = 10
P[366] = 5
P[367] = 4
P[368] = 11
P[369] = 4
P[370] = 16
P[371] = 12
P[372] = 13
P[373] = 11
P[374] = 12
P[375] = 4
P[376] = 7
P[377] = 6
P[378] = 14
P[379] = 11
P[380] = 6
P[381] = 14
P[382] = 12
P[383] = 8
P[384] = 3
P[385] = 9
P[386] = 17
P[387] = 8
P[388] = 16
P[389] = 6
let fieldSum = 0
for (let f = 347; f <= 389; f++) fieldSum += P[f]
assert.equal(fieldSum, 375, "the birth field 375u the hand-off holds - THE SMELT BANDS' OWN SEAT rides")
assert.equal(Math.max(...Object.values(P)), 21, "THE STORM the count 21 the face 364's own crest rides - the top rode ONCE")
assert.equal(Object.values(P).filter(v => v === 21).length, 1, 'the top rode ONCE the honest crest the book holds')
assert.equal(Math.min(...Object.values(P).filter(v => v > 0)), 3, "the non-zero floor the count 3 the faces 348/384's own floors ride")
assert.equal(Object.values(P).filter(v => v === 3).length, 2, 'the non-zero floor rode TWICE the honest troughs the book holds')
assert.equal(Object.values(P).filter(v => v === 0).length, 5, 'THE FIVE DROUGHTS the zero rode the faces 349/350/355/358/359 hold')
const w = (f) => smeltBandsTrendRow({ back: { smeltBands: P[f - 2] }, prev: { smeltBands: P[f - 1] }, cur: { smeltBands: P[f] } })

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
// classification (TWO swells, NINE fades - the byte-exact arcs)
const SWELLS = {
  361: '0 -> 8 (+8) -> 16 (+8)',
  386: '3 -> 9 (+6) -> 17 (+8)'
}
const FADES = {
  349: '8 -> 3 (-5) -> 0 (-3)',
  353: '14 -> 10 (-4) -> 8 (-2)',
  358: '8 -> 6 (-2) -> 0 (-6)',
  363: '16 -> 10 (-6) -> 5 (-5)',
  366: '21 -> 10 (-11) -> 5 (-5)',
  367: '10 -> 5 (-5) -> 4 (-1)',
  380: '14 -> 11 (-3) -> 6 (-5)',
  383: '14 -> 12 (-2) -> 8 (-4)',
  384: '12 -> 8 (-4) -> 3 (-5)'
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
assert.equal(swing, 26, 'TWENTY-SIX swings the field prices')
assert.equal(swell, 2, 'TWO swells the field prices')
assert.equal(fade, 9, 'NINE fades the field prices')
assert.equal(silence, 4, 'the FOUR honest silences the field prices')

// THE TWELVE-SWING RUN 368..379 - THE RECORD THE BOOK RIDES (the
// .198's own seven-swing run the record was, this word's own twelve
// the record takes; the bounds never extend - the fades 367/380 hold)
const isSwing = (f) => tallyWindow(f, P) === 'swing'
assert.ok([368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379].every(isSwing), 'THE TWELVE-SWING RUN the faces 368..379 hold - THE RECORD')
assert.ok(!isSwing(367) && !isSwing(380), 'the run never extends - the honest bounds ride')
assert.ok(!isSwing(350) && !isSwing(351), 'the silence pair 350/351 the droughts own stall holds')
assert.ok(!isSwing(359) && !isSwing(360), 'the silence pair 359/360 the droughts own stall holds')

// THE ONE ROUND TRIP - the face 369's own window the weight-7 mirror
let roundTrips = []
for (let f = 349; f <= 389; f++) {
  const first = P[f - 1] - P[f - 2], second = P[f] - P[f - 1]
  if (first !== 0 && second !== 0 && first > 0 !== second > 0 && first === -second) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [369], "THE ONE ROUND TRIP the face 369's own window the weight-7 mirror (4 -> 11 (+7) -> 4 (-7)) rides")

// THE BOUNDS' OWN LEGS - the +16 and the -19 rode ONE leg ONE
// boundary each (THE STORM'S OWN CLIMB, THE STORM'S OWN DRAIN)
let rises = [], falls = []
for (let f = 348; f <= 389; f++) {
  const d = P[f] - P[f - 1]
  if (d === 16) rises.push(f)
  if (d === -19) falls.push(f)
}
assert.equal(rises.length, 1, 'the +16 rode ONE leg')
assert.equal(falls.length, 1, 'the -19 rode ONE leg')
assert.deepEqual(rises, [364], "the +16 rode ONE leg ONE boundary the boundary 363/364 - THE STORM'S OWN CLIMB")
assert.deepEqual(falls, [355], "the -19 rode ONE leg ONE boundary the boundary 354/355 - THE STORM'S OWN DRAIN the crest paid whole 19 -> 0")

// THE LAST FIELD WORD - the face 389's own window the swing
assert.equal(w(389), SWING + '8 -> 16 (+8) -> 6 (-10)' + SWING_TAIL, "the last field word the face 389's own window the swing rides")

// THE WHOLE-CACHE SEAT - the 571u over the sixty-one faces (the span
// 347..437, the absent 390..416 span and the 419 and the 424 and the
// 428 the honest gaps the cache holds not), the face 433's own 28u
// THE WHOLE-CACHE STORM rode ONCE, the whole cache the zero rode
// EIGHT times - THE EIGHT DROUGHTS
const W = {}
Object.assign(W, P)
W[417] = 4
W[418] = 27
W[420] = 3
W[421] = 0
W[422] = 13
W[423] = 5
W[425] = 19
W[426] = 19
W[427] = 16
W[429] = 0
W[430] = 7
W[431] = 5
W[432] = 4
W[433] = 28
W[434] = 9
W[435] = 27
W[436] = 10
W[437] = 0
let wholeSum = 0
for (const k of Object.keys(W)) wholeSum += W[k]
assert.equal(Object.keys(W).length, 61, 'the sixty-one faces the cache holds')
assert.equal(wholeSum, 571, 'THE WHOLE-CACHE SEAT 571u the sixty-one faces ride')
assert.equal(W[433], 28, "THE WHOLE-CACHE STORM the face 433's own 28u rode ONCE")
assert.equal(Object.values(W).filter(v => v === 28).length, 1, 'the whole-cache top rode ONCE')
assert.equal(Object.values(W).filter(v => v === 0).length, 8, 'THE EIGHT DROUGHTS the zero rode the whole cache')

// THE WHOLE-CACHE BOOK - the gap-crossing tally over the ordered
// cached faces (the absent 419 the windows cross, the honest gaps)
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
assert.equal(wswing, 37, 'THIRTY-SEVEN swings the whole cache prices')
assert.equal(wswell, 2, 'TWO swells the whole cache prices')
assert.equal(wfade, 14, 'FOURTEEN fades the whole cache prices')
assert.equal(wsilence, 6, 'the SIX honest silences the whole cache prices')
assert.equal(wswing + wswell + wfade + wsilence, 59, 'the FIFTY-NINE whole-cache windows ride')

// THE WHOLE-CACHE BOUNDS - the +24 and the -24 rode ONE leg ONE
// boundary each (THE WHOLE-CACHE STORM'S OWN CLIMB, THE GAP-CROSSING
// DRAIN the absent 419 the leg crosses)
let wr = [], wf = []
for (let i = 1; i < wFaces.length; i++) {
  const d = W[wFaces[i]] - W[wFaces[i - 1]]
  if (d === 24) wr.push(wFaces[i - 1] + '/' + wFaces[i])
  if (d === -24) wf.push(wFaces[i - 1] + '/' + wFaces[i])
}
assert.deepEqual(wr, ['432/433'], "the +24 rode ONE leg ONE boundary the boundary 432/433 - THE WHOLE-CACHE STORM'S OWN CLIMB 4 -> 28")
assert.deepEqual(wf, ['418/420'], "the -24 rode ONE leg ONE boundary the boundary 418/420 - THE GAP-CROSSING DRAIN 27 -> 3 the absent 419 the leg crosses")

// THE NEWEST WINDOWS - the W433..W436 the swings and the W437 the
// fade (MY WORD'S OWN FIRST LIVE READ the nearest-completed law holds)
const ww = (a, b, c) => smeltBandsTrendRow({ back: { smeltBands: a }, prev: { smeltBands: b }, cur: { smeltBands: c } })
assert.equal(ww(W[431], W[432], W[433]), SWING + '5 -> 4 (-1) -> 28 (+24)' + SWING_TAIL, 'the W433 window the swing rides')
assert.equal(ww(W[432], W[433], W[434]), SWING + '4 -> 28 (+24) -> 9 (-19)' + SWING_TAIL, 'the W434 window the swing rides')
assert.equal(ww(W[433], W[434], W[435]), SWING + '28 -> 9 (-19) -> 27 (+18)' + SWING_TAIL, 'the W435 window the swing rides')
assert.equal(ww(W[434], W[435], W[436]), SWING + '9 -> 27 (+18) -> 10 (-17)' + SWING_TAIL, 'the W436 window the swing rides')
assert.equal(ww(W[435], W[436], W[437]), FADE + '27 -> 10 (-17) -> 0 (-10)' + FADE_TAIL, "the W437 window the fade rides - MY WORD'S OWN FIRST LIVE READ")

// THE CELL'S OWN READ - the strict grammar rides, the lanes never
// merge (the smelt unreachable owner and why and cross lanes never
// ride, the smelt refusal census never rides, the torch book's own
// seats never ride)
const L = (s) => smeltBands(s.split('\n'))
assert.equal(L('smelt unreachable bands: mid carries 10 of 10 unreachable refusals (100.0%) - the walk died in the near field: no band owns the wall - the reach reads mixed'), 10, 'the mid skin rides')
assert.equal(L('smelt unreachable bands: far carries 27 of 29 unreachable refusals (93.1%) - the walk died deep: the lattice\'s reach is the wall - the budget is the front'), 27, 'the far skin rides')
assert.equal(L('smelt unreachable bands: mid carries 8 of 9 unreachable refusals (88.9%) - the walk died in the near field: no band owns the wall - the reach reads mixed'), 8, 'the mid skin the face 347\'s own line rides')
assert.equal(L('smelt unreachable bands: mid carries 12 of 23 unreachable refusals (52.2%) - the walk died in the near field: no band owns the wall - the reach reads mixed'), 12, 'the carries count rides whole whatever the total rides')
assert.equal(L('smelt unreachable owner: mid 10 of 10'), 0, 'the smelt unreachable owner lane never rides')
assert.equal(L('smelt unreachable why: the walk died'), 0, 'the smelt unreachable why lane never rides')
assert.equal(L('smelt unreachable cross: the reach reads mixed'), 0, 'the smelt unreachable cross lane never rides')
assert.equal(L('smelt refusal census: no fuel 2, machine unreachable 1 of 3 refused attempts - the smelt chain names its tax'), 0, 'the smelt refusal census never rides')
assert.equal(L('smelt unreachable bands'), 0, 'the colon-less form never rides')
assert.equal(L('smelt unreachable bands: no band (top mid 5 of 9, 55.6%) - the reach reads mixed, the cures point different ways'), 0, 'the no-band skin never rides - zero occurrences the whole cache holds')
assert.equal(L('smelt unreachable bands: mid carries of unreachable refusals (%) - the walk died'), 0, 'the torn form never rides')
assert.equal(L('smelt unreachable bands: mid carries 10 of 10 unreachable refusals (100.0%) - '), 0, 'the torn prose never rides')
assert.equal(L('[F9] smelt unreachable bands: mid carries 10 of 10 unreachable refusals (100.0%) - the walk died in the near field: no band owns the wall - the reach reads mixed'), 0, 'the bracket-prefixed form never rides - the census voice prints the bare prefix only')
assert.equal(L('F9 [F9] smelt unreachable bands: mid carries 10 of 10 unreachable refusals (100.0%) - the walk died in the near field: no band owns the wall - the reach reads mixed'), 0, 'the double-prefix form never rides - the census voice prints the single prefix only')
assert.equal(L('craft torches: skip (no coal: sticks 6 coals 0)'), 0, 'the torch book\'s own lane never rides')
assert.equal(L(''), 0, 'the empty line never rides')
assert.equal(L('smelt unreachable bands: mid carries 10 of 10 unreachable refusals (100.0%) - the walk died in the near field: no band owns the wall - the reach reads mixed\nsmelt unreachable bands: far carries 27 of 29 unreachable refusals (93.1%) - the walk died deep: the lattice\'s reach is the wall - the budget is the front'), 37, 'the TWO band skins the carries rides whole - the raw law')

// THE FENCE - the fold proves itself or the word prices nothing
assert.equal(smeltBandsTrendRow(null), null, 'the null fold prices nothing')
assert.equal(smeltBandsTrendRow(undefined), null, 'the undefined fold prices nothing')
assert.equal(smeltBandsTrendRow('junk'), null, 'the junk fold prices nothing')
assert.equal(smeltBandsTrendRow([]), null, 'the array fold prices nothing')
assert.equal(smeltBandsTrendRow({}), null, 'the faceless fold prices nothing')
assert.equal(smeltBandsTrendRow({ back: { smeltBands: 1 }, prev: { smeltBands: 2 } }), null, 'the two-faced fold prices nothing')
assert.equal(smeltBandsTrendRow({ back: { smeltBands: -1 }, prev: { smeltBands: 2 }, cur: { smeltBands: 3 } }), null, 'the negative face prices nothing')
assert.equal(smeltBandsTrendRow({ back: { smeltBands: 1.5 }, prev: { smeltBands: 2 }, cur: { smeltBands: 3 } }), null, 'the fractional face prices nothing')
assert.equal(smeltBandsTrendRow({ back: { smeltBands: '1' }, prev: { smeltBands: 2 }, cur: { smeltBands: 3 } }), null, 'the string face prices nothing')
assert.equal(smeltBandsTrendRow({ back: { smeltBands: 1 }, prev: { smeltBands: 1 }, cur: { smeltBands: 1 }, extra: 'key' }), null, 'the held step prices the honest silence - the extra key never rejected')
assert.equal(smeltBandsTrendRow({ back: { smeltBands: 0 }, prev: { smeltBands: 0 }, cur: { smeltBands: 0 }, extra: 'key' }), null, 'the lawful zero face rides the fence - the held zero the honest silence')
assert.equal(smeltBandsTrendConsistent({ back: { smeltBands: 0 }, prev: { smeltBands: 3 }, cur: { smeltBands: 7 }, junk: 1 }), true, 'the fence the extra keys never rejects')
assert.equal(smeltBandsTrendConsistent(null), false, 'the null fold never proves itself')
assert.equal(smeltBandsTrendConsistent({ back: { smeltBands: 0 }, prev: { smeltBands: 3 } }), false, 'the two-faced fold never proves itself')

// THE SMELT BANDS read - the non-array never rides
assert.equal(smeltBands(), 0, 'the missing lines ride zero')
assert.equal(smeltBands(null), 0, 'the null lines ride zero')
assert.equal(smeltBands('smelt unreachable bands: mid carries 10 of 10 unreachable refusals (100.0%) - the walk died in the near field: no band owns the wall - the reach reads mixed'), 0, 'the bare string rides zero')
assert.equal(smeltBands([42, null, undefined]), 0, 'the junk members never ride')
