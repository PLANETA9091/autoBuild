// tests/unit/climbdiagtrend.test.mjs - THE CLIMB DIAG LANE'S OWN
// TREND's own pin battery (v0.976.197): the climb diag lane's own mass
// across the faces the field's own scan named first (the 'F<n> [F<n>]
// climb diag: <skin>' family - the vertical grind's own diagnosis
// receipts) - the field's own chains byte-exact (THE CELL'S OWN WEIGHT
// 6201u the fifty-eight faces' own total, THE BIRTH FIELD 3778u the
// thirty-nine faces' own total, THE FIELD'S OWN TOP THE COUNT 300 rode
// ONCE the face 354's own crest - THE STORM, THE FIELD'S OWN FLOOR THE
// COUNT 42 rode ONCE the face 353's own floor - THE NO-DROUGHT BIRTH
// the zero never rode), the ALL-SPEAKING BOOK THIRTY-SEVEN of
// THIRTY-SEVEN field windows speaking (TWENTY-FOUR swings, SIX swells,
// SEVEN fades, the ZERO honest silences) beside the whole-cache book
// FORTY-EIGHT of FORTY-EIGHT speaking, THE FIVE-SWING RUN the faces
// 377..381 hold - THE RECORD THE BOOK RIDES, THE FADE TRIPLE
// 358..360, THE FADE PAIR 375/376, THE SWELL PAIRS 365/366 + 382/383,
// THE ZERO ROUND TRIPS (the swings never mirrored), the bounds' own
// legs pins (the +258 rode ONE leg ONE boundary the boundary 353/354
// - THE STORM'S OWN CLIMB, the -241 rode ONE leg ONE boundary the
// boundary 354/355 - THE STORM'S OWN DRAIN), the last field word the
// face 386's own window the swing (64 -> 218 (+154) -> 74 (-144) - the
// near-mirror never mirrors), the whole-cache pins (the 6201u over the
// fifty-eight faces, the face 427's own 311u THE WHOLE-CACHE STORM
// rode ONCE, the whole cache the zero never rode, the W433 window the
// swell 55 -> 104 (+49) -> 211 (+107) MY WORD'S OWN FIRST LIVE READ,
// the W434 window the swing THE NEWEST WINDOW, the W422 window THE
// GAP-CROSSING SWING, the pre-field face 347's own 108u), the
// skins-ride-whole battery (the TWO head skins + the refusal suffixes
// the count rides whole - the .195's own law co-exists by seat; the
// climb bridge lane never rides, the climb-out book lanes never ride,
// the bare and the torn and the single-prefix forms never ride - the
// lanes never merge)
import assert from 'node:assert'
import { climbDiags, climbDiagTrendConsistent, climbDiagTrendRow } from '../../src/lib/climbdiagtrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, this word prices the climb diag's own mass across the faces - the climb diag seat, co-existence by seat never by duplication)"

const HEAD = 'the climb diag trend (v0.976.197)'
const SWING = HEAD + ": the diag's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the diag's rise ran two steps deep - "
const SWELL_TAIL = " - the diag's own swell " + TAIL
const FADE = HEAD + ": the diag's fall ran two steps deep - "
const FADE_TAIL = " - the diag's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the diag RE's
// own arithmetic, THIRTY-NINE faces deep) - THE BIRTH FIELD 3778u the
// faces' own total, THE FIELD'S OWN TOP THE COUNT 300 rode ONCE (the
// face 354's own crest - THE STORM), THE FIELD'S OWN FLOOR THE COUNT
// 42 rode ONCE (the face 353's own floor) - THE NO-DROUGHT BIRTH the
// zero never rode
const P = {}
P[348] = 68
P[349] = 63
P[350] = 58
P[351] = 109
P[352] = 63
P[353] = 42
P[354] = 300
P[355] = 59
P[356] = 99
P[357] = 73
P[358] = 59
P[359] = 56
P[360] = 45
P[361] = 79
P[362] = 105
P[363] = 59
P[364] = 63
P[365] = 90
P[366] = 106
P[367] = 49
P[368] = 235
P[369] = 45
P[370] = 71
P[371] = 92
P[372] = 78
P[373] = 215
P[374] = 97
P[375] = 91
P[376] = 88
P[377] = 136
P[378] = 97
P[379] = 143
P[380] = 57
P[381] = 64
P[382] = 78
P[383] = 190
P[384] = 64
P[385] = 218
P[386] = 74
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 3778, "the birth field 3778u the hand-off holds - THE CLIMB DIAG'S OWN SEAT rides")
assert.equal(Math.max(...Object.values(P)), 300, "THE STORM the count 300 the face 354's own crest rides - the top rode ONCE")
assert.equal(Object.values(P).filter(v => v === 300).length, 1, 'the top rode ONCE the honest crest the book holds')
assert.equal(Math.min(...Object.values(P)), 42, "the floor the count 42 the face 353's own floor rides")
assert.equal(Object.values(P).filter(v => v === 42).length, 1, 'the floor rode ONCE the honest trough the book holds')
assert.equal(Object.values(P).filter(v => v === 0).length, 0, 'THE NO-DROUGHT BIRTH the zero never rode the thirty-nine faces')
const w = (f) => climbDiagTrendRow({ back: { climbDiags: P[f - 2] }, prev: { climbDiags: P[f - 1] }, cur: { climbDiags: P[f] } })

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
// classification (TWENTY-FOUR swings, SIX swells, SEVEN fades, the
// ZERO honest silences - THIRTY-SEVEN of THIRTY-SEVEN speaking: THE
// ALL-SPEAKING BOOK the vertical churn never holds a step the climb
// lane prices)
const SWELLS = {
  362: '45 -> 79 (+34) -> 105 (+26)',
  365: '59 -> 63 (+4) -> 90 (+27)',
  366: '63 -> 90 (+27) -> 106 (+16)',
  371: '45 -> 71 (+26) -> 92 (+21)',
  382: '57 -> 64 (+7) -> 78 (+14)',
  383: '64 -> 78 (+14) -> 190 (+112)'
}
const FADES = {
  350: '68 -> 63 (-5) -> 58 (-5)',
  353: '109 -> 63 (-46) -> 42 (-21)',
  358: '99 -> 73 (-26) -> 59 (-14)',
  359: '73 -> 59 (-14) -> 56 (-3)',
  360: '59 -> 56 (-3) -> 45 (-11)',
  375: '215 -> 97 (-118) -> 91 (-6)',
  376: '97 -> 91 (-6) -> 88 (-3)'
}
const SWINGS = {
  351: '63 -> 58 (-5) -> 109 (+51)',
  352: '58 -> 109 (+51) -> 63 (-46)',
  354: '63 -> 42 (-21) -> 300 (+258)',
  355: '42 -> 300 (+258) -> 59 (-241)',
  356: '300 -> 59 (-241) -> 99 (+40)',
  357: '59 -> 99 (+40) -> 73 (-26)',
  361: '56 -> 45 (-11) -> 79 (+34)',
  363: '79 -> 105 (+26) -> 59 (-46)',
  364: '105 -> 59 (-46) -> 63 (+4)',
  367: '90 -> 106 (+16) -> 49 (-57)',
  368: '106 -> 49 (-57) -> 235 (+186)',
  369: '49 -> 235 (+186) -> 45 (-190)',
  370: '235 -> 45 (-190) -> 71 (+26)',
  372: '71 -> 92 (+21) -> 78 (-14)',
  373: '92 -> 78 (-14) -> 215 (+137)',
  374: '78 -> 215 (+137) -> 97 (-118)',
  377: '91 -> 88 (-3) -> 136 (+48)',
  378: '88 -> 136 (+48) -> 97 (-39)',
  379: '136 -> 97 (-39) -> 143 (+46)',
  380: '97 -> 143 (+46) -> 57 (-86)',
  381: '143 -> 57 (-86) -> 64 (+7)',
  384: '78 -> 190 (+112) -> 64 (-126)',
  385: '190 -> 64 (-126) -> 218 (+154)',
  386: '64 -> 218 (+154) -> 74 (-144)'
}
const T = P
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) tally[tallyWindow(f, T)]++
assert.equal(tally.swing, 24, 'the TWENTY-FOUR swings the field prices')
assert.equal(tally.swell, 6, 'the SIX swells the field prices')
assert.equal(tally.fade, 7, 'the SEVEN fades the field prices')
assert.equal(tally.silence, 0, 'the ZERO honest silences - THE ALL-SPEAKING BOOK THIRTY-SEVEN of THIRTY-SEVEN the vertical churn never holds a step')
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, `the W${f} window the swell the arc byte-exact`)
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, `the W${f} window the fade the arc byte-exact`)
}
for (const [f, arc] of Object.entries(SWINGS)) {
  assert.equal(w(Number(f)), SWING + arc + SWING_TAIL, `the W${f} window the swing the arc byte-exact`)
}
// THE LAST FIELD WORD - the face 386's own window the swing, the
// near-mirror never mirrors (the +154 the -144 price beside)
assert.equal(w(386), SWING + '64 -> 218 (+154) -> 74 (-144)' + SWING_TAIL, "the last field word the face 386's own window the swing - the near-mirror never mirrors the honest spread rides")

// THE RUNS - THE FIVE-SWING RUN the faces 377..381 hold - THE RECORD
// THE BOOK RIDES (the quads 354..357 and 367..370 and the triples
// 372..374 and 384..386 and the pairs 351/352 and 363/364 the runs
// beside); THE FADE TRIPLE the faces 358..360 hold, THE FADE PAIR the
// faces 375/376 hold; THE SWELL PAIRS the faces 365/366 and 382/383
// hold (the solos 362/371 beside)
const kinds = {}
for (let f = 350; f <= 386; f++) kinds[f] = tallyWindow(f, T)
const runOf = (f) => { let n = 0; let g = f; while (kinds[g] === kinds[f]) { n++; g++ } return n }
assert.equal(runOf(377), 5, 'THE FIVE-SWING RUN the faces 377..381 hold - THE RECORD THE BOOK RIDES')
assert.equal(runOf(354), 4, 'the quad 354..357 the run beside')
assert.equal(runOf(367), 4, 'the quad 367..370 the run beside')
assert.equal(runOf(372), 3, 'the triple 372..374 the run beside')
assert.equal(runOf(384), 3, 'the triple 384..386 the run beside')
assert.equal(runOf(351), 2, 'the pair 351/352 the run beside')
assert.equal(runOf(363), 2, 'the pair 363/364 the run beside')
assert.equal(runOf(358), 3, 'THE FADE TRIPLE the faces 358..360 hold')
assert.equal(runOf(375), 2, 'THE FADE PAIR the faces 375/376 hold')
assert.equal(runOf(365), 2, 'THE SWELL PAIR the faces 365/366 hold')
assert.equal(runOf(382), 2, 'THE SWELL PAIR the faces 382/383 hold')
assert.equal(runOf(362), 1, 'the swell solo 362 the seat beside')
assert.equal(runOf(371), 1, 'the swell solo 371 the seat beside')

// THE ZERO ROUND TRIPS - the swings never mirrored (the big-mass
// lanes' own honest spread the .191 and the .195 and the .196 books
// price beside)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  const d1 = T[f - 1] - T[f - 2], d2 = T[f] - T[f - 1]
  if (d1 !== 0 && d1 === -d2) roundTrips.push(f)
}
assert.equal(roundTrips.length, 0, 'THE ZERO ROUND TRIPS the swings never mirrored - the honest spread the book holds')

// THE BOUNDS' OWN LEGS - the +258 the max rise rode ONE leg ONE
// boundary (the boundary 353/354 - THE STORM'S OWN CLIMB), the -241
// the max fall rode ONE leg ONE boundary (the boundary 354/355 - THE
// STORM'S OWN DRAIN the top paid near-whole 300 -> 59)
let maxRise = 0, riseB = [], maxFall = 0, fallB = []
for (let f = 349; f <= 386; f++) {
  const d = T[f] - T[f - 1]
  if (d > maxRise) { maxRise = d; riseB = [`${f - 1}/${f}`] } else if (d === maxRise) riseB.push(`${f - 1}/${f}`)
  if (d < maxFall) { maxFall = d; fallB = [`${f - 1}/${f}`] } else if (d === maxFall) fallB.push(`${f - 1}/${f}`)
}
assert.equal(maxRise, 258, "THE STORM'S OWN CLIMB the +258 the max rise rides")
assert.equal(riseB.join('+'), '353/354', 'the max rise rode ONE leg ONE boundary the boundary 353/354')
assert.equal(maxFall, -241, "THE STORM'S OWN DRAIN the -241 the max fall rides - the top paid near-whole 300 -> 59")
assert.equal(fallB.join('+'), '354/355', 'the max fall rode ONE leg ONE boundary the boundary 354/355')
assert.equal(w(354), SWING + '63 -> 42 (-21) -> 300 (+258)' + SWING_TAIL, "THE STORM'S OWN ARRIVAL the W354 window the climb to the crest rides")
assert.equal(w(355), SWING + '42 -> 300 (+258) -> 59 (-241)' + SWING_TAIL, "THE STORM'S OWN CLIMB AND DRAIN the W355 window the +258 the max rise and the -241 the max fall the ONE window prices")

// THE WHOLE-CACHE SEAT - the priced cache the hand-off holds (the
// fifty-eight faces the span 347..434 - the absent 390..416 span and
// the 419 and the 424 and the 428 the honest gaps the cache holds
// not) - THE CELL'S OWN WEIGHT 6201u, THE WHOLE-CACHE TOP THE COUNT
// 311 rode ONCE (the face 427's own crest - THE WHOLE-CACHE STORM the
// tseal's own storm face the crest prices beside), the whole cache
// the zero never rode - the no-drought cache
const Q = {}
Q[347] = 108
for (let f = 348; f <= 389; f++) Q[f] = P[f]
Q[387] = 58
Q[388] = 91
Q[389] = 112
Q[417] = 117
Q[418] = 78
Q[420] = 44
Q[421] = 92
Q[422] = 87
Q[423] = 199
Q[425] = 208
Q[426] = 92
Q[427] = 311
Q[429] = 56
Q[430] = 243
Q[431] = 55
Q[432] = 104
Q[433] = 211
Q[434] = 157
let wholeSum = 0
let wholeFaces = 0
for (const v of Object.values(Q)) { wholeSum += v; wholeFaces++ }
assert.equal(wholeFaces, 58, 'the fifty-eight faces the cache holds the honest count rides')
assert.equal(wholeSum, 6201, "THE CELL'S OWN WEIGHT 6201u the whole-cache seat rides")
const qvals = Object.values(Q)
assert.equal(Math.max(...qvals), 311, "THE WHOLE-CACHE STORM the count 311 the face 427's own crest rides")
assert.equal(qvals.filter(v => v === 311).length, 1, 'the whole-cache top rode ONCE the honest crest rides')
assert.equal(Math.min(...qvals), 42, "the whole-cache floor the count 42 the face 353's own floor rides - the whole cache the zero never rode")
assert.equal(qvals.filter(v => v === 0).length, 0, 'THE NO-DROUGHT CACHE the zero never rode the fifty-eight faces')
assert.equal(Q[347], 108, "the pre-field face 347's own 108u rides")
assert.equal(Q[433], 211, "the face 433's own 211u the newest-but-one add rides")
assert.equal(Q[434], 157, "the face 434's own 157u THE NEWEST ADD rides")

// THE WHOLE-CACHE BOOK - FORTY-EIGHT of FORTY-EIGHT windows speaking
// (THIRTY-ONE swings, EIGHT swells, NINE fades, the ZERO honest
// silences) - the third all-speaking book the family holds beside the
// .194's own 37/37 and the .196's own pair
const qw = (a, b, c) => climbDiagTrendRow({ back: { climbDiags: Q[a] }, prev: { climbDiags: Q[b] }, cur: { climbDiags: Q[c] } })
const qtally = { swing: 0, swell: 0, fade: 0, silence: 0 }
let windows = 0
const qkinds = {}
for (let f = 349; f <= 434; f++) {
  if (Q[f] === undefined || Q[f - 1] === undefined || Q[f - 2] === undefined) continue
  const first = Q[f - 1] - Q[f - 2], second = Q[f] - Q[f - 1]
  const k = first === 0 || second === 0 ? 'silence' : first > 0 && second > 0 ? 'swell' : first < 0 && second < 0 ? 'fade' : 'swing'
  qtally[k]++
  qkinds[f] = k
  windows++
}
assert.equal(windows, 48, 'the forty-eight windows the whole-cache book holds')
assert.equal(qtally.swing, 31, 'the THIRTY-ONE swings the whole cache prices')
assert.equal(qtally.swell, 8, 'the EIGHT swells the whole cache prices')
assert.equal(qtally.fade, 9, 'the NINE fades the whole cache prices')
assert.equal(qtally.silence, 0, 'the ZERO honest silences - FORTY-EIGHT of FORTY-EIGHT speaking THE ALL-SPEAKING BOOK the whole cache holds')

// THE POST WINDOWS - the nearest-completed law holds (the absent
// 390..416 span and the 419 and the 424 and the 428 the honest gaps
// the ride holds - the W422 window the gap the ride crosses)
assert.equal(qw(387, 388, 389), SWELL + '58 -> 91 (+33) -> 112 (+21)' + SWELL_TAIL, "the W389 window the swell the post field's own door rides")
assert.equal(qw(420, 421, 422), SWING + '44 -> 92 (+48) -> 87 (-5)' + SWING_TAIL, 'THE GAP-CROSSING SWING the W422 window rides - the absent 419 the windows the honest gaps the ride holds')
assert.equal(qw(421, 422, 423), SWING + '92 -> 87 (-5) -> 199 (+112)' + SWING_TAIL, 'the W423 window the swing rides')
assert.equal(qw(425, 426, 427), SWING + '208 -> 92 (-116) -> 311 (+219)' + SWING_TAIL, "THE STORM'S OWN ARRIVAL the W427 window the climb to the whole-cache crest rides")
assert.equal(qw(429, 430, 431), SWING + '56 -> 243 (+187) -> 55 (-188)' + SWING_TAIL, 'the W431 window the swing rides')
assert.equal(qw(430, 431, 432), SWING + '243 -> 55 (-188) -> 104 (+49)' + SWING_TAIL, 'the W432 window the swing rides')
assert.equal(qw(431, 432, 433), SWELL + '55 -> 104 (+49) -> 211 (+107)' + SWELL_TAIL, "MY WORD'S OWN FIRST LIVE READ - the W433 window the swell the newest-but-one add prices")
assert.equal(qw(432, 433, 434), SWING + '104 -> 211 (+107) -> 157 (-54)' + SWING_TAIL, 'THE NEWEST WINDOW the W434 the swing the face 434 prices - the nearest-completed law holds')

// THE SKINS-RIDE-WHOLE BATTERY - the line's own count rides whole
// whatever the skin's name (the .195's own law co-exists by seat);
// the real cache lines the cell prices byte-true
const SKINS = [
  'F13 [F13] climb diag: level at y=66 blocked toward 0,-1 (dug=0)',
  'F10 [F10] climb diag: level at y=61 blocked toward -1,0 (dug=59, wet) at [-1,1,0] water (stop)',
  'F11 [F11] climb diag: level at y=58 blocked toward 0,-1 (dug=51) dig failed at [-152,60,398] sand (held=wooden_shovel, airborne, post=water STILL THERE (server unseen))',
  'F8 [F8] climb diag: level at y=42 did not rise (food=17, dug=1) feet=air support=air step=stone head=air',
  'F1 [F1] climb diag: level at y=56 did not rise (food=20, dug=14) feet=air support=diorite step=air head=air'
]
for (const l of SKINS) {
  assert.equal(climbDiags([l]), 1, `the skin rides whole - the count never splits: ${l.slice(0, 60)}`)
}
assert.equal(climbDiags(SKINS), 5, 'the five skins the mass sums whole the cells ride')

// THE FIXED-GRAMMAR BATTERY - the variants and torn and bare forms
// never ride (the emitter prints the double-prefix voice only - the
// grammar strict, zero non-shape lines the whole cache holds)
assert.equal(climbDiags(['F13 climb diag: level at y=66 blocked toward 0,-1 (dug=0)']), 0, "the single-prefix form never rides - the bot's own name the emitter prints")
assert.equal(climbDiags(['[F13] climb diag: level at y=66 blocked toward 0,-1 (dug=0)']), 0, 'the bracket-only form never rides - no such emitter voice')
assert.equal(climbDiags(['F13 [F13] climbdiag: level at y=66 blocked toward 0,-1 (dug=0)']), 0, 'the merged-word form never rides - the grammar strict')
assert.equal(climbDiags(['F13 [F13] climb diag level at y=66 blocked toward 0,-1 (dug=0)']), 0, 'the colon-less form never rides - the grammar strict')
assert.equal(climbDiags(['F13 [F13] climb di: level at y=66 blocked toward 0,-1 (dug=0)']), 0, 'the truncated prefix never rides - the grammar strict')
assert.equal(climbDiags(['climb diag: level at y=66 blocked toward 0,-1 (dug=0)']), 0, 'the bare form never rides - no such emitter voice')
assert.equal(climbDiags(['F13 [F13] climb diag: level at y=66 blocked toward 0,-1 (dug=0)']), 1, 'the shape-based grammar rides whatever tail the emitter prints - no torn exclusion the fence invents')

// THE LANES NEVER MERGE - the one-parser claims (the climb bridge
// lane never rides, the climb-out book lanes never ride, the
// walk-intent chest lane never rides, the census prose never rides)
assert.equal(climbDiags(['F5 [F5] climb bridge: placed cobblestone at [-108,66,410] (support) - the step re-judges']), 0, "the climb bridge line never rides - a different lane the sibling emitter owns, the lanes never merge")
assert.equal(climbDiags(['pre-position census: armed 16, landed 1 (+44u), failed 29 (top why: surface refused x21; climb-outs: stalled x17) - the seat\'s own delivery, first priced']), 0, "the pre-position census line never rides - the climb-out book's own lane prices it, the lanes never merge")
assert.equal(climbDiags(['F15 [F15] walk-intent: chest at [-115,81,414] held for the fleet (1 live, ttl 90s)']), 0, "the walk-intent line never rides - the ledger book's own lane prices it, the lanes never merge")
assert.equal(climbDiags(['F3 [F3] climb-out pre-position: the climb-out stalled']), 0, "the climb-out line never rides - the climb-out book's own lanes price it, the lanes never merge")

// THE CELL'S OWN READ - the one-parser ride over the REAL diag
// receipts (the F433's own grind, the F434's own newest face, the
// mixed skins the count rides whole)
const F433_LINES = [
  'F5 [F5] climb diag: level at y=68 blocked toward 0,1 (dug=1)',
  'F5 [F5] climb diag: level at y=67 blocked toward -1,0 (dug=1)',
  'F5 [F5] climb diag: level at y=68 blocked toward 0,-1 (dug=1)'
]
const F434_LINES = [
  'F1 [F1] climb diag: level at y=65 blocked toward 1,0 (dug=1)',
  'F1 [F1] climb diag: level at y=65 blocked toward 0,1 (dug=2)',
  'F1 [F1] climb diag: level at y=65 blocked toward -1,0 (dug=3)',
  'F8 [F8] climb diag: level at y=42 did not rise (food=17, dug=1) feet=air support=air step=stone head=air'
]
assert.equal(climbDiags(F433_LINES), 3, 'the F433 receipts the cell prices byte-true')
assert.equal(climbDiags(F434_LINES), 4, 'the F434 receipts the cell prices byte-true - the newest face the add rides')
assert.equal(climbDiags([...F433_LINES, ...F434_LINES]), 7, 'the mass sums whole the cells ride')
assert.equal(climbDiags([]), 0, 'the empty lines the zero rides')
assert.equal(climbDiags(undefined), 0, 'the undefined lines the zero rides - the fence never lies')
assert.equal(climbDiags(['no lines here', 42, null]), 0, 'the junk lines the zero rides')

// THE FENCE BATTERY - the fold must prove itself (the fence law: the
// word never rides a lie); extra keys never rejected (the fence never
// invents exclusions)
assert.equal(climbDiagTrendRow(null), null, 'the null fold the fence refuses')
assert.equal(climbDiagTrendRow(undefined), null, 'the undefined fold the fence refuses')
assert.equal(climbDiagTrendRow('junk'), null, 'the junk fold the fence refuses')
assert.equal(climbDiagTrendRow([]), null, 'the array fold the fence refuses')
assert.equal(climbDiagTrendRow({}), null, 'the empty fold the fence refuses')
assert.equal(climbDiagTrendRow({ back: { climbDiags: 1 }, prev: { climbDiags: 2 } }), null, 'the missing face the fence refuses')
assert.equal(climbDiagTrendRow({ back: { climbDiags: 1 }, prev: { climbDiags: 2 }, cur: { climbDiags: 1.5 } }), null, 'the non-integer the fence refuses')
assert.equal(climbDiagTrendRow({ back: { climbDiags: 1 }, prev: { climbDiags: 2 }, cur: { climbDiags: -1 } }), null, 'the negative the fence refuses')
assert.equal(climbDiagTrendRow({ back: { climbDiags: '1' }, prev: { climbDiags: 2 }, cur: { climbDiags: 3 } }), null, 'the string count the fence refuses')
assert.equal(climbDiagTrendConsistent({ back: { climbDiags: 0 }, prev: { climbDiags: 0 }, cur: { climbDiags: 0 } }), true, "the zero fold rides - the no-drought birth's own zero the lawful count")
assert.equal(climbDiagTrendRow({ back: { climbDiags: 4, extra: 'x' }, prev: { climbDiags: 4, extra: 'y' }, cur: { climbDiags: 9, extra: 'z' } }), null, 'the held fold prices no direction - the honest silence the row never invents')
assert.equal(climbDiagTrendRow({ back: { climbDiags: 0, extra: 'x' }, prev: { climbDiags: 5, extra: 'y' }, cur: { climbDiags: 9, extra: 'z' } }), SWELL + '0 -> 5 (+5) -> 9 (+4)' + SWELL_TAIL, 'the extra keys never rejected - the fence never invents exclusions')

// THE BYTE-PIN BATTERY - the row never speaks the shape's own verdict
// words nor the seats' own verdict word nor the dynasty's own
// (co-existence by seat never by duplication)
const voices = [
  climbDiagTrendRow({ back: { climbDiags: 1 }, prev: { climbDiags: 2 }, cur: { climbDiags: 3 } }),
  climbDiagTrendRow({ back: { climbDiags: 3 }, prev: { climbDiags: 2 }, cur: { climbDiags: 1 } }),
  climbDiagTrendRow({ back: { climbDiags: 1 }, prev: { climbDiags: 3 }, cur: { climbDiags: 2 } })
]
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  for (const v of voices) {
    assert.equal(v.includes(banned), false, `the byte-pin holds - the ${banned} word never rides the row`)
  }
}
for (const v of voices) {
  assert.equal(v.endsWith('co-existence by seat never by duplication)'), true, "the tail's own close the byte rides")
  assert.equal(v.includes("the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces"), true, 'the .194 sibling the tail names - the tunnel sealed lane beside')
  assert.equal(v.includes("the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces"), true, 'the .195 sibling the tail names - the walk nudge lane beside')
  assert.equal(v.includes("the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces"), true, 'the .196 sibling the tail names - the climb bridge lane beside')
  assert.equal(v.includes("this word prices the climb diag's own mass across the faces - the climb diag seat"), true, "the word's own naming the tail holds")
}

console.log('climbdiagtrend: all pins green')
