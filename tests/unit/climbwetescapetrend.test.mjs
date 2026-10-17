// tests/unit/climbwetescapetrend.test.mjs - THE CLIMB WET ESCAPE
// LANE'S OWN TREND's own pin battery (v0.976.198): the climb wet
// escape lane's own mass across the faces the F435's own face named
// first (the 'F<n> [F<n>] climb wet escape: <skin>' family - the wet
// climb's own escape receipts) - the field's own chains byte-exact
// (THE CELL'S OWN WEIGHT 2022u the fifty-nine faces' own total, THE
// BIRTH FIELD 1340u the forty-three faces' own total, THE FIELD'S OWN
// TOP THE COUNT 149 rode ONCE the face 373's own crest - THE STORM,
// THE FIELD'S OWN FLOOR THE COUNT 3 rode ONCE the face 369's own
// floor - THE NO-DROUGHT BIRTH the zero never rode), the ALL-SPEAKING
// BOOK FORTY-ONE of FORTY-ONE field windows speaking (TWENTY-SEVEN
// swings, SEVEN swells, SEVEN fades, the ZERO honest silences) beside
// the whole-cache book FORTY-NINE of FORTY-NINE speaking (THIRTY-FOUR
// swings, EIGHT swells, SEVEN fades), THE SEVEN-SWING RUN the faces
// 379..385 hold - THE RECORD THE BOOK RIDES, THE FADE PAIR 363/364,
// THE SWELL PAIRS 353/354 + 377/378, THE ZERO ROUND TRIPS (the swings
// never mirrored), the bounds' own legs pins (the +134 rode ONE leg
// ONE boundary the boundary 372/373 - THE STORM'S OWN CLIMB, the
// -124 rode ONE leg ONE boundary the boundary 373/374 - THE STORM'S
// OWN DRAIN), the last field word the face 389's own window the swing
// (56 -> 10 (-46) -> 25 (+15) - the mirror never mirrors), the
// whole-cache pins (the 2022u over the fifty-nine faces, the face
// 373's own 149u THE WHOLE-CACHE STORM rode ONCE, the whole cache the
// zero never rode, the W433 window the swing 4 -> 13 (+9) -> 8 (-5),
// the W434 window the swing 13 -> 8 (-5) -> 20 (+12), the W435 window
// the swell 8 -> 20 (+12) -> 41 (+21) MY WORD'S OWN FIRST LIVE READ),
// the skins-ride-whole battery (the THREE head skins + the walked
// counter the count rides whole - the .195's own law co-exists by
// seat; the climb diag lane never rides, the climb bridge lane never
// rides, the climb wet memo lane never rides, the bare and the torn
// and the single-prefix and the bracket-only forms never ride - the
// lanes never merge)
import assert from 'node:assert'
import { climbWetEscapes, climbWetEscapeTrendConsistent, climbWetEscapeTrendRow } from '../../src/lib/climbwetescapetrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, this word prices the climb wet escape's own mass across the faces - the climb wet escape seat, co-existence by seat never by duplication)"

const HEAD = 'the climb wet escape trend (v0.976.198)'
const SWING = HEAD + ": the escape's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the escape's rise ran two steps deep - "
const SWELL_TAIL = " - the escape's own swell " + TAIL
const FADE = HEAD + ": the escape's fall ran two steps deep - "
const FADE_TAIL = " - the escape's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 347..389 (the escape RE's
// own arithmetic, FORTY-THREE faces deep) - THE BIRTH FIELD 1340u the
// faces' own total, THE FIELD'S OWN TOP THE COUNT 149 rode ONCE (the
// face 373's own crest - THE STORM), THE FIELD'S OWN FLOOR THE COUNT
// 3 rode ONCE (the face 369's own floor) - THE NO-DROUGHT BIRTH the
// zero never rode
const P = {}
P[347] = 19
P[348] = 7
P[349] = 116
P[350] = 15
P[351] = 10
P[352] = 11
P[353] = 23
P[354] = 70
P[355] = 42
P[356] = 20
P[357] = 26
P[358] = 61
P[359] = 12
P[360] = 10
P[361] = 128
P[362] = 38
P[363] = 19
P[364] = 10
P[365] = 20
P[366] = 25
P[367] = 4
P[368] = 10
P[369] = 3
P[370] = 16
P[371] = 31
P[372] = 15
P[373] = 149
P[374] = 25
P[375] = 13
P[376] = 20
P[377] = 21
P[378] = 43
P[379] = 16
P[380] = 52
P[381] = 17
P[382] = 41
P[383] = 15
P[384] = 39
P[385] = 22
P[386] = 15
P[387] = 56
P[388] = 10
P[389] = 25
let fieldSum = 0
for (let f = 347; f <= 389; f++) fieldSum += P[f]
assert.equal(fieldSum, 1340, "the birth field 1340u the hand-off holds - THE CLIMB WET ESCAPE'S OWN SEAT rides")
assert.equal(Math.max(...Object.values(P)), 149, "THE STORM the count 149 the face 373's own crest rides - the top rode ONCE")
assert.equal(Object.values(P).filter(v => v === 149).length, 1, 'the top rode ONCE the honest crest the book holds')
assert.equal(Math.min(...Object.values(P)), 3, "the floor the count 3 the face 369's own floor rides")
assert.equal(Object.values(P).filter(v => v === 3).length, 1, 'the floor rode ONCE the honest trough the book holds')
assert.equal(Object.values(P).filter(v => v === 0).length, 0, 'THE NO-DROUGHT BIRTH the zero never rode the forty-three faces')
const w = (f) => climbWetEscapeTrendRow({ back: { climbWetEscapes: P[f - 2] }, prev: { climbWetEscapes: P[f - 1] }, cur: { climbWetEscapes: P[f] } })

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
// classification (TWENTY-SEVEN swings, SEVEN swells, SEVEN fades, the
// ZERO honest silences - FORTY-ONE of FORTY-ONE speaking: THE
// ALL-SPEAKING BOOK the wet churn never holds a step the escape lane
// prices)
const SWELLS = {
  353: '10 -> 11 (+1) -> 23 (+12)',
  354: '11 -> 23 (+12) -> 70 (+47)',
  358: '20 -> 26 (+6) -> 61 (+35)',
  366: '10 -> 20 (+10) -> 25 (+5)',
  371: '3 -> 16 (+13) -> 31 (+15)',
  377: '13 -> 20 (+7) -> 21 (+1)',
  378: '20 -> 21 (+1) -> 43 (+22)'
}
const FADES = {
  351: '116 -> 15 (-101) -> 10 (-5)',
  356: '70 -> 42 (-28) -> 20 (-22)',
  360: '61 -> 12 (-49) -> 10 (-2)',
  363: '128 -> 38 (-90) -> 19 (-19)',
  364: '38 -> 19 (-19) -> 10 (-9)',
  375: '149 -> 25 (-124) -> 13 (-12)',
  386: '39 -> 22 (-17) -> 15 (-7)'
}
const SEVEN_SWING_RUN = {
  379: '21 -> 43 (+22) -> 16 (-27)',
  380: '43 -> 16 (-27) -> 52 (+36)',
  381: '16 -> 52 (+36) -> 17 (-35)',
  382: '52 -> 17 (-35) -> 41 (+24)',
  383: '17 -> 41 (+24) -> 15 (-26)',
  384: '41 -> 15 (-26) -> 39 (+24)',
  385: '15 -> 39 (+24) -> 22 (-17)'
}
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, 'the swell window ' + f + ' rides byte-exact')
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, 'the fade window ' + f + ' rides byte-exact')
}
for (const [f, arc] of Object.entries(SEVEN_SWING_RUN)) {
  assert.equal(w(Number(f)), SWING + arc + SWING_TAIL, 'the seven-swing run window ' + f + ' rides byte-exact')
}

// THE ALL-SPEAKING BOOK - the field's own tally
let swing = 0, swell = 0, fade = 0, silence = 0
for (let f = 349; f <= 389; f++) {
  const k = tallyWindow(f, P)
  if (k === 'swing') swing++
  else if (k === 'swell') swell++
  else if (k === 'fade') fade++
  else silence++
}
assert.equal(swing, 27, 'TWENTY-SEVEN swings the field prices')
assert.equal(swell, 7, 'SEVEN swells the field prices')
assert.equal(fade, 7, 'SEVEN fades the field prices')
assert.equal(silence, 0, 'the ZERO honest silences - THE ALL-SPEAKING BOOK rides')

// THE SEVEN-SWING RUN 379..385 - THE RECORD THE BOOK RIDES (the
// quad 367..370 and the triples 372..374 and 387..389 and the pairs
// 349/350 and 361/362 the runs beside)
const isSwing = (f) => tallyWindow(f, P) === 'swing'
assert.ok([379, 380, 381, 382, 383, 384, 385].every(isSwing), 'THE SEVEN-SWING RUN the faces 379..385 hold - THE RECORD')
assert.ok([367, 368, 369, 370].every(isSwing), 'the quad 367..370 rides')
assert.ok([372, 373, 374].every(isSwing), 'the triple 372..374 rides')
assert.ok([387, 388, 389].every(isSwing), 'the triple 387..389 rides')
assert.ok(isSwing(349) && isSwing(350), 'the pair 349/350 rides')
assert.ok(isSwing(361) && isSwing(362), 'the pair 361/362 rides')
assert.ok(!isSwing(378) && !isSwing(386), 'the run never extends - the honest bounds ride')

// THE ZERO ROUND TRIPS - the swings never mirrored
let roundTrips = 0
for (let f = 349; f <= 389; f++) {
  const first = P[f - 1] - P[f - 2], second = P[f] - P[f - 1]
  if (first !== 0 && second !== 0 && first > 0 !== second > 0 && first === -second) roundTrips++
}
assert.equal(roundTrips, 0, 'THE ZERO ROUND TRIPS the swings never mirrored')

// THE BOUNDS' OWN LEGS - the +134 and the -124 rode ONE leg ONE
// boundary each (THE STORM'S OWN CLIMB, THE STORM'S OWN DRAIN)
let rises = [], falls = []
for (let f = 348; f <= 389; f++) {
  const d = P[f] - P[f - 1]
  if (d === 134) rises.push(f)
  if (d === -124) falls.push(f)
}
assert.equal(rises.length, 1, 'the +134 rode ONE leg')
assert.equal(falls.length, 1, 'the -124 rode ONE leg')
assert.deepEqual(rises, [373], "the +134 rode ONE leg ONE boundary the boundary 372/373 - THE STORM'S OWN CLIMB")
assert.deepEqual(falls, [374], "the -124 rode ONE leg ONE boundary the boundary 373/374 - THE STORM'S OWN DRAIN the top paid near-whole 149 -> 25")

// THE LAST FIELD WORD - the face 389's own window the swing (the
// mirror never mirrors)
assert.equal(w(389), SWING + '56 -> 10 (-46) -> 25 (+15)' + SWING_TAIL, "the last field word the face 389's own window the swing rides")

// THE WHOLE-CACHE SEAT - the 2022u over the fifty-nine faces (the
// span 347..435, the absent 390..416 span and the 419 and the 424 and
// the 428 the honest gaps the cache holds not), the face 373's own
// 149u THE WHOLE-CACHE STORM rode ONCE, the whole cache the zero
// never rode
const W = {}
Object.assign(W, P)
W[417] = 21
W[418] = 63
W[420] = 67
W[421] = 14
W[422] = 102
W[423] = 40
W[425] = 9
W[426] = 134
W[427] = 32
W[429] = 9
W[430] = 105
W[431] = 4
W[432] = 13
W[433] = 8
W[434] = 20
W[435] = 41
let wholeSum = 0
for (const k of Object.keys(W)) wholeSum += W[k]
assert.equal(Object.keys(W).length, 59, 'the fifty-nine faces the cache holds')
assert.equal(wholeSum, 2022, 'THE WHOLE-CACHE SEAT 2022u the fifty-nine faces ride')
assert.equal(W[373], 149, "THE WHOLE-CACHE STORM the face 373's own 149u rode ONCE")
assert.equal(Object.values(W).filter(v => v === 149).length, 1, 'the whole-cache top rode ONCE')
assert.equal(Object.values(W).filter(v => v === 0).length, 0, 'the whole cache the zero never rode - the no-drought cache')

// THE NEWEST WINDOWS - the W433 and the W434 and the W435 (MY WORD'S
// OWN FIRST LIVE READ the nearest-completed law holds)
const ww = (a, b, c) => climbWetEscapeTrendRow({ back: { climbWetEscapes: a }, prev: { climbWetEscapes: b }, cur: { climbWetEscapes: c } })
assert.equal(ww(W[431], W[432], W[433]), SWING + '4 -> 13 (+9) -> 8 (-5)' + SWING_TAIL, 'the W433 window the swing rides')
assert.equal(ww(W[432], W[433], W[434]), SWING + '13 -> 8 (-5) -> 20 (+12)' + SWING_TAIL, 'the W434 window the swing rides')
assert.equal(ww(W[433], W[434], W[435]), SWELL + '8 -> 20 (+12) -> 41 (+21)' + SWELL_TAIL, "the W435 window the swell rides - MY WORD'S OWN FIRST LIVE READ")

// THE CELL'S OWN READ - the strict grammar rides, the lanes never
// merge (the climb diag lane and the climb bridge lane and the climb
// wet memo lane and the water rescue's own lane never ride)
const L = (s) => climbWetEscapes(s.split('\n'))
assert.equal(L('F6 [F6] climb wet escape: 1 blocks walked (low-o2, walked 1/4)'), 1, 'the blocks-walked skin rides')
assert.equal(L('F6 [F6] climb wet escape: oxygen 6 at the floor - the escape yields, the rescue lane owns the air'), 1, 'the oxygen-at-the-floor skin rides')
assert.equal(L('F6 [F6] climb wet escape: oxygen unreadable (reset sentinel) at a wet head - the escape flies blind, the rescue lane owns the air'), 1, 'the oxygen-unreadable skin rides')
assert.equal(L('F12 [F12] climb wet escape: 8 blocks walked (budget, walked 2/4)'), 1, 'the walked counter rides inside whole')
assert.equal(L('F19 [F19] climb diag: blocked toward up'), 0, 'the climb diag lane never rides')
assert.equal(L('F2 [F2] climb bridge: placed cobblestone at [-100,64,400]'), 0, 'the climb bridge lane never rides')
assert.equal(L('F3 [F3] climb wet memo: the wall holds'), 0, 'the climb wet memo lane never rides')
assert.equal(L('F9 [F9] climb wet escape'), 0, 'the colon-less form never rides')
assert.equal(L('F9 climb wet escape: 3 blocks walked (stalled, walked 1/4)'), 0, 'the single-prefix form never rides')
assert.equal(L('[F9] climb wet escape: 3 blocks walked (stalled, walked 1/4)'), 0, 'the bracket-only form never rides')
assert.equal(L('climb wet escape: 3 blocks walked (stalled, walked 1/4)'), 0, 'the bare form never rides')
assert.equal(L('F9 [F9] climb wet escape: '), 0, 'the torn form never rides')
assert.equal(L('F9 [F9] walk nudge: approach'), 0, 'the walk nudge lane never rides')
assert.equal(L(''), 0, 'the empty line never rides')
assert.equal(L('F6 [F6] climb wet escape: 1 blocks walked (low-o2, walked 1/4)\nF6 [F6] climb wet escape: oxygen 6 at the floor - the escape yields, the rescue lane owns the air\nF6 [F6] climb wet escape: oxygen unreadable (reset sentinel) at a wet head - the escape flies blind, the rescue lane owns the air'), 3, 'the THREE head skins the count rides whole - the raw law')

// THE FENCE - the fold proves itself or the word prices nothing
assert.equal(climbWetEscapeTrendRow(null), null, 'the null fold prices nothing')
assert.equal(climbWetEscapeTrendRow(undefined), null, 'the undefined fold prices nothing')
assert.equal(climbWetEscapeTrendRow('junk'), null, 'the junk fold prices nothing')
assert.equal(climbWetEscapeTrendRow([]), null, 'the array fold prices nothing')
assert.equal(climbWetEscapeTrendRow({}), null, 'the faceless fold prices nothing')
assert.equal(climbWetEscapeTrendRow({ back: { climbWetEscapes: 1 }, prev: { climbWetEscapes: 2 } }), null, 'the two-faced fold prices nothing')
assert.equal(climbWetEscapeTrendRow({ back: { climbWetEscapes: -1 }, prev: { climbWetEscapes: 2 }, cur: { climbWetEscapes: 3 } }), null, 'the negative face prices nothing')
assert.equal(climbWetEscapeTrendRow({ back: { climbWetEscapes: 1.5 }, prev: { climbWetEscapes: 2 }, cur: { climbWetEscapes: 3 } }), null, 'the fractional face prices nothing')
assert.equal(climbWetEscapeTrendRow({ back: { climbWetEscapes: '1' }, prev: { climbWetEscapes: 2 }, cur: { climbWetEscapes: 3 } }), null, 'the string face prices nothing')
assert.equal(climbWetEscapeTrendRow({ back: { climbWetEscapes: 1 }, prev: { climbWetEscapes: 1 }, cur: { climbWetEscapes: 1 }, extra: 'key' }), null, 'the held step prices the honest silence - the extra key never rejected')
assert.equal(climbWetEscapeTrendRow({ back: { climbWetEscapes: 0 }, prev: { climbWetEscapes: 0 }, cur: { climbWetEscapes: 0 }, extra: 'key' }), null, 'the lawful zero face rides the fence - the held zero the honest silence')

// THE CLIMB WET ESCAPES read - the non-array never rides
assert.equal(climbWetEscapes(), 0, 'the missing lines ride zero')
assert.equal(climbWetEscapes(null), 0, 'the null lines ride zero')
assert.equal(climbWetEscapes('F6 [F6] climb wet escape: 1 blocks walked (low-o2, walked 1/4)'), 0, 'the bare string rides zero')
assert.equal(climbWetEscapes([42, null, undefined]), 0, 'the junk members never ride')
