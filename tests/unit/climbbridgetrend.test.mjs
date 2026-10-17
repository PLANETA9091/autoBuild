// tests/unit/climbbridgetrend.test.mjs - THE CLIMB BRIDGE LANE'S OWN
// PLACEMENT TREND's own pin battery (v0.976.196): the climb bridge
// lane's own placement mass across the faces the field's own scan
// named first (the 'F<n> [F<n>] climb bridge: <skin>' family rode
// F433 SIX HUNDRED THIRTY-ONE strong - THE BIGGEST UNPRICED VOICE
// THE CACHE HOLDS) - the field's own chains byte-exact (THE CELL'S
// OWN WEIGHT 25068u the ninety-three faces' own total, THE BIRTH
// FIELD 9953u the thirty-nine faces' own total, THE FIELD'S OWN TOP
// THE COUNT 711 rode ONCE the face 385's own crest - THE STORM, THE
// FIELD'S OWN FLOOR THE COUNT 73 rode ONCE the face 358's own floor
// - THE NO-DROUGHT BIRTH the zero never rode), the ALL-SPEAKING BOOK
// THIRTY-SEVEN of THIRTY-SEVEN field windows speaking (TWENTY-EIGHT
// swings, FOUR swells, FIVE fades, the ZERO honest silences) beside
// the whole-cache book NINETY-ONE of NINETY-ONE speaking, THE
// TEN-SWING RUN the faces 372..381 hold - THE RECORD THE BOOK RIDES,
// THE SWELL PAIR the faces 382/383, THE FADE PAIR the faces 366/367,
// THE ZERO ROUND TRIPS (the swings never mirrored), the bounds' own
// legs pins (the +584 rode TWO legs ONE boundary the boundary 367/368
// - THE STORM'S OWN CLIMB, the -550 rode TWO legs ONE boundary the
// boundary 368/369 - THE STORM'S OWN DRAIN; the whole-cache +646 the
// boundary 426/427 and the -713 the boundary 427/428 beside), the
// last field word the face 386's own window the swing (166 -> 711
// (+545) -> 198 (-513) - the climb AND drain in ONE window), the
// whole-cache pins (the 25068u over the ninety-three faces, the face
// 427's own 878u THE WHOLE-CACHE STORM rode ONCE, the face 346's own
// 3u the pre-field floor rode ONCE, the W433 window the swell 142 ->
// 204 (+62) -> 631 (+427) MY WORD'S OWN FIRST LIVE READ the
// nearest-completed law holds - the absent 419 the honest gap rides,
// the W420 window THE GAP-CROSSING FADE, the swell triple the faces
// 406..408 hold, the W427 window THE STORM'S OWN ARRIVAL, the W428
// window the climb AND drain), the skins-ride-whole battery (the
// HUNDRED FIFTY-FIVE skins the count rides whole - the .195's own
// law co-exists by seat; the climb diag lane never rides, the
// climb-out book lanes never ride, the bare and the torn and the
// single-prefix forms never ride - the lanes never merge)
import assert from 'node:assert'
import { climbBridges, climbBridgeTrendConsistent, climbBridgeTrendRow } from '../../src/lib/climbbridgetrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, this word prices the climb bridge's own placement mass across the faces - the climb bridge seat, co-existence by seat never by duplication)"

const HEAD = 'the climb bridge trend (v0.976.196)'
const SWING = HEAD + ": the bridge's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the bridge's rise ran two steps deep - "
const SWELL_TAIL = " - the bridge's own swell " + TAIL
const FADE = HEAD + ": the bridge's fall ran two steps deep - "
const FADE_TAIL = " - the bridge's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the bridge RE's
// own arithmetic, THIRTY-NINE faces deep) - THE BIRTH FIELD 9953u the
// faces' own total, THE FIELD'S OWN TOP THE COUNT 711 rode ONCE (the
// face 385's own crest - THE STORM), THE FIELD'S OWN FLOOR THE COUNT
// 73 rode ONCE (the face 358's own floor) - THE NO-DROUGHT BIRTH the
// zero never rode
const P = {}
P[348] = 242
P[349] = 192
P[350] = 142
P[351] = 223
P[352] = 158
P[353] = 96
P[354] = 596
P[355] = 181
P[356] = 344
P[357] = 160
P[358] = 73
P[359] = 151
P[360] = 163
P[361] = 158
P[362] = 240
P[363] = 162
P[364] = 211
P[365] = 166
P[366] = 129
P[367] = 121
P[368] = 705
P[369] = 155
P[370] = 167
P[371] = 263
P[372] = 196
P[373] = 553
P[374] = 296
P[375] = 332
P[376] = 243
P[377] = 421
P[378] = 240
P[379] = 329
P[380] = 116
P[381] = 137
P[382] = 202
P[383] = 615
P[384] = 166
P[385] = 711
P[386] = 198
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 9953, "the birth field 9953u the hand-off holds - THE CLIMB BRIDGE'S OWN PLACEMENT SEAT rides")
assert.equal(Math.max(...Object.values(P)), 711, "THE STORM the count 711 the face 385's own crest rides - the top rode ONCE")
assert.equal(Object.values(P).filter(v => v === 711).length, 1, 'the top rode ONCE the honest crest the book holds')
assert.equal(Math.min(...Object.values(P)), 73, "the floor the count 73 the face 358's own floor rides")
assert.equal(Object.values(P).filter(v => v === 73).length, 1, 'the floor rode ONCE the honest trough the book holds')
assert.equal(Object.values(P).filter(v => v === 0).length, 0, 'THE NO-DROUGHT BIRTH the zero never rode the thirty-nine faces')
const w = (f) => climbBridgeTrendRow({ back: { climbBridges: P[f - 2] }, prev: { climbBridges: P[f - 1] }, cur: { climbBridges: P[f] } })

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
// classification (TWENTY-EIGHT swings, FOUR swells, FIVE fades, the
// ZERO honest silences - THIRTY-SEVEN of THIRTY-SEVEN speaking: THE
// ALL-SPEAKING BOOK the vertical churn never holds a step the climb
// lane prices)
const SWELLS = {
  360: '73 -> 151 (+78) -> 163 (+12)',
  371: '155 -> 167 (+12) -> 263 (+96)',
  382: '116 -> 137 (+21) -> 202 (+65)',
  383: '137 -> 202 (+65) -> 615 (+413)'
}
const FADES = {
  350: '242 -> 192 (-50) -> 142 (-50)',
  353: '223 -> 158 (-65) -> 96 (-62)',
  358: '344 -> 160 (-184) -> 73 (-87)',
  366: '211 -> 166 (-45) -> 129 (-37)',
  367: '166 -> 129 (-37) -> 121 (-8)'
}
const SWINGS = {
  351: '192 -> 142 (-50) -> 223 (+81)',
  352: '142 -> 223 (+81) -> 158 (-65)',
  354: '158 -> 96 (-62) -> 596 (+500)',
  355: '96 -> 596 (+500) -> 181 (-415)',
  356: '596 -> 181 (-415) -> 344 (+163)',
  357: '181 -> 344 (+163) -> 160 (-184)',
  359: '160 -> 73 (-87) -> 151 (+78)',
  361: '151 -> 163 (+12) -> 158 (-5)',
  362: '163 -> 158 (-5) -> 240 (+82)',
  363: '158 -> 240 (+82) -> 162 (-78)',
  364: '240 -> 162 (-78) -> 211 (+49)',
  365: '162 -> 211 (+49) -> 166 (-45)',
  368: '129 -> 121 (-8) -> 705 (+584)',
  369: '121 -> 705 (+584) -> 155 (-550)',
  370: '705 -> 155 (-550) -> 167 (+12)',
  372: '167 -> 263 (+96) -> 196 (-67)',
  373: '263 -> 196 (-67) -> 553 (+357)',
  374: '196 -> 553 (+357) -> 296 (-257)',
  375: '553 -> 296 (-257) -> 332 (+36)',
  376: '296 -> 332 (+36) -> 243 (-89)',
  377: '332 -> 243 (-89) -> 421 (+178)',
  378: '243 -> 421 (+178) -> 240 (-181)',
  379: '421 -> 240 (-181) -> 329 (+89)',
  380: '240 -> 329 (+89) -> 116 (-213)',
  381: '329 -> 116 (-213) -> 137 (+21)',
  384: '202 -> 615 (+413) -> 166 (-449)',
  385: '615 -> 166 (-449) -> 711 (+545)',
  386: '166 -> 711 (+545) -> 198 (-513)'
}
const tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) tally[tallyWindow(f, P)]++
assert.deepEqual(tally, { swing: 28, swell: 4, fade: 5, silence: 0 }, "the birth field's own breath the THIRTY-SEVEN windows hold - THIRTY-SEVEN speaking THE ALL-SPEAKING BOOK")
assert.equal(tally.swing, 28, 'TWENTY-EIGHT swings the vertical churn rides')
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, `the swell F\${f} the arc rides`)
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, `the fade F\${f} the arc rides`)
}
for (const [f, arc] of Object.entries(SWINGS)) {
  assert.equal(w(Number(f)), SWING + arc + SWING_TAIL, `the swing F\${f} the arc rides`)
}
for (let f = 350; f <= 386; f++) {
  assert.notEqual(tallyWindow(f, P), 'silence', `the window F\${f} never holds - THE ALL-SPEAKING BOOK the row never needs the null`)
}

// THE TEN-SWING RUN - the faces 372..381's own windows (the swings
// chain ten deep - THE RECORD THE BOOK RIDES, the five 361..365 and
// the quad 354..357 and the triple 368..370 the runs beside)
const swingRun = []
let run = []
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f, P) === 'swing') run.push(f)
  else { if (run.length > swingRun.length) swingRun.splice(0, swingRun.length, ...run); run = [] }
}
if (run.length > swingRun.length) swingRun.splice(0, swingRun.length, ...run)
assert.deepEqual(swingRun, [372, 373, 374, 375, 376, 377, 378, 379, 380, 381], 'the longest swing run the faces 372..381 hold - the TEN the record rides')

// THE SWELL PAIR the faces 382/383 hold (the solos 360/371 beside -
// the quad the record the whole-cache's triple the post field prices
// beside); THE FADE PAIR the faces 366/367 hold (the solos
// 350/353/358 beside)
const swellRun = []
run = []
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f, P) === 'swell') run.push(f)
  else { if (run.length > swellRun.length) swellRun.splice(0, swellRun.length, ...run); run = [] }
}
if (run.length > swellRun.length) swellRun.splice(0, swellRun.length, ...run)
assert.deepEqual(swellRun, [382, 383], 'the longest field swell run the faces 382/383 hold - the PAIR the swell seat rides')
const fadeRun = []
run = []
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f, P) === 'fade') run.push(f)
  else { if (run.length > fadeRun.length) fadeRun.splice(0, fadeRun.length, ...run); run = [] }
}
if (run.length > fadeRun.length) fadeRun.splice(0, fadeRun.length, ...run)
assert.deepEqual(fadeRun, [366, 367], 'the longest fade run the faces 366/367 hold - the PAIR the drain seat rides')

// THE ZERO ROUND TRIPS - the swings never mirrored (the big-mass
// lanes' own honest spread the .191 and the .195 books price beside)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  const a = P[f - 2], b = P[f - 1], c = P[f]
  const first = b - a, second = c - b
  if (first !== 0 && second !== 0 && first === -second) roundTrips.push([f, first, second])
}
assert.deepEqual(roundTrips, [], 'THE ZERO ROUND TRIPS the swings never mirrored the honest spread rides')

// THE BOUNDS' OWN LEGS - the +584 the max rise rode TWO legs ONE
// boundary (the boundary 367/368 - THE STORM'S OWN CLIMB the crest
// 705 the climb prices), the -550 the max fall rode TWO legs ONE
// boundary (the boundary 368/369 - THE STORM'S OWN DRAIN the top
// paid near-whole 705 -> 155)
let maxRise = -Infinity; let maxFall = Infinity
const riseLegs = []; const fallLegs = []
for (let f = 350; f <= 386; f++) {
  const second = P[f] - P[f - 1]
  if (second > maxRise) maxRise = second
  if (second < maxFall) maxFall = second
}
for (let f = 350; f <= 386; f++) {
  const second = P[f] - P[f - 1]
  if (second === maxRise) riseLegs.push(f - 1 + '/' + f)
  if (second === maxFall) fallLegs.push(f - 1 + '/' + f)
}
assert.equal(maxRise, 584, 'the max rise +584 the crest climb prices')
assert.deepEqual(riseLegs, ['367/368'], "the +584 rode ONE second-leg boundary the boundary 367/368 - THE STORM'S OWN CLIMB")
assert.equal(w(368).includes('129 -> 121 (-8) -> 705 (+584)'), true, "the climb's own second leg the W368 window rides")
assert.equal(w(369).includes('121 -> 705 (+584)'), true, 'the same step the W369 window rides as the first leg - TWO legs ONE boundary')
assert.equal(maxFall, -550, 'the max fall -550 the crest drain prices')
assert.deepEqual(fallLegs, ['368/369'], "the -550 rode ONE second-leg boundary the boundary 368/369 - THE STORM'S OWN DRAIN the top paid near-whole rides")
assert.equal(w(369), SWING + '121 -> 705 (+584) -> 155 (-550)' + SWING_TAIL, "THE STORM'S OWN CLIMB AND DRAIN the W369 window the whole storm rides")

// THE LAST FIELD WORD - the face 386's own window the swing (166 ->
// 711 (+545) -> 198 (-513) - the climb AND drain in ONE window, the
// 545 the 513 the near-mirror never mirrors)
assert.equal(w(386), SWING + '166 -> 711 (+545) -> 198 (-513)' + SWING_TAIL, "the last field word the swing the storm's own climb AND drain rides")

// THE WHOLE-CACHE SEAT - 25068u the ninety-three faces the cache
// holds (the birth 9953u the thirty-nine faces, the pre-field 1754u
// the eight faces 340..347 beside, the post field 13361u the
// forty-six faces 387..433 beside; the absent 419 the honest gap
// rides)
const Q = {}
Q[340] = 116
Q[341] = 373
Q[342] = 617
Q[343] = 140
Q[344] = 105
Q[345] = 204
Q[346] = 3
Q[347] = 206
Q[348] = 242
Q[349] = 192
Q[350] = 142
Q[351] = 223
Q[352] = 158
Q[353] = 96
Q[354] = 596
Q[355] = 181
Q[356] = 344
Q[357] = 160
Q[358] = 73
Q[359] = 151
Q[360] = 163
Q[361] = 158
Q[362] = 240
Q[363] = 162
Q[364] = 211
Q[365] = 166
Q[366] = 129
Q[367] = 121
Q[368] = 705
Q[369] = 155
Q[370] = 167
Q[371] = 263
Q[372] = 196
Q[373] = 553
Q[374] = 296
Q[375] = 332
Q[376] = 243
Q[377] = 421
Q[378] = 240
Q[379] = 329
Q[380] = 116
Q[381] = 137
Q[382] = 202
Q[383] = 615
Q[384] = 166
Q[385] = 711
Q[386] = 198
Q[387] = 185
Q[388] = 245
Q[389] = 268
Q[390] = 181
Q[391] = 502
Q[392] = 549
Q[393] = 131
Q[394] = 174
Q[395] = 181
Q[396] = 5
Q[397] = 198
Q[398] = 671
Q[399] = 99
Q[400] = 225
Q[401] = 64
Q[402] = 147
Q[403] = 163
Q[404] = 80
Q[405] = 159
Q[406] = 172
Q[407] = 239
Q[408] = 454
Q[409] = 258
Q[410] = 232
Q[411] = 250
Q[412] = 594
Q[413] = 190
Q[414] = 252
Q[415] = 454
Q[416] = 543
Q[417] = 223
Q[418] = 211
Q[420] = 139
Q[421] = 240
Q[422] = 219
Q[423] = 474
Q[424] = 526
Q[425] = 499
Q[426] = 232
Q[427] = 878
Q[428] = 165
Q[429] = 119
Q[430] = 584
Q[431] = 142
Q[432] = 204
Q[433] = 631
let cacheSum = 0
for (const k of Object.keys(Q)) cacheSum += Q[k]
assert.equal(Object.keys(Q).length, 93, 'the ninety-three faces the cache holds - the honest gap the absent 419 rides')
assert.equal(cacheSum, 25068, 'the whole-cache seat 25068u the hand-off holds')
assert.equal(Q[427], 878, "THE WHOLE-CACHE STORM the face 427's own 878u the crest rides - the whole-cache top the ONCE the book holds")
assert.equal(Object.values(Q).filter(v => v === 878).length, 1, 'the whole-cache top 878 rode ONCE the honest crest rides')
assert.equal(Q[346], 3, "the floor the face 346's own 3u rides - the whole-cache floor the ONCE the book holds")
assert.equal(Object.values(Q).filter(v => v === 3).length, 1, 'the whole-cache floor 3 rode ONCE the honest trough rides')
assert.equal(Q[433], 631, "the face 433's own 631u the newest add rides - the end-phase's own climb swell the W433 window prices")

// THE POST WINDOWS - the nearest-completed law holds (the absent 419
// the honest gap rides - the W420 window the gap the ride holds)
const W = (a, b, c) => climbBridgeTrendRow({ back: { climbBridges: Q[a] }, prev: { climbBridges: Q[b] }, cur: { climbBridges: Q[c] } })
assert.equal(W(386, 387, 388), SWING + '198 -> 185 (-13) -> 245 (+60)' + SWING_TAIL, "the W388 window the swing the post field's own door rides")
assert.equal(W(404, 405, 406), SWELL + '80 -> 159 (+79) -> 172 (+13)' + SWELL_TAIL, 'the W406 window the swell the triple rides')
assert.equal(W(405, 406, 407), SWELL + '159 -> 172 (+13) -> 239 (+67)' + SWELL_TAIL, 'the W407 window the swell rides')
assert.equal(W(406, 407, 408), SWELL + '172 -> 239 (+67) -> 454 (+215)' + SWELL_TAIL, "THE SWELL TRIPLE the faces 406..408 hold - the swell seat's own whole-cache record rides")
assert.equal(W(416, 417, 418), FADE + '543 -> 223 (-320) -> 211 (-12)' + FADE_TAIL, 'the W418 window the fade rides')
assert.equal(W(417, 418, 420), FADE + '223 -> 211 (-12) -> 139 (-72)' + FADE_TAIL, 'THE GAP-CROSSING FADE the W420 window rides - the absent 419 the window crosses the honest gap the ride holds')
assert.equal(W(418, 420, 421), SWING + '211 -> 139 (-72) -> 240 (+101)' + SWING_TAIL, 'the W421 window the swing the gap the ride holds')
assert.equal(W(425, 426, 427), SWING + '499 -> 232 (-267) -> 878 (+646)' + SWING_TAIL, "THE STORM'S OWN ARRIVAL the W427 window the climb to the crest rides")
assert.equal(W(426, 427, 428), SWING + '232 -> 878 (+646) -> 165 (-713)' + SWING_TAIL, "THE STORM'S OWN CLIMB AND DRAIN the W428 window the +646 the whole-cache max rise and the -713 the whole-cache max fall the ONE window prices")
assert.equal(W(429, 430, 431), SWING + '119 -> 584 (+465) -> 142 (-442)' + SWING_TAIL, 'the W431 window the swing rides')
assert.equal(W(430, 431, 432), SWING + '584 -> 142 (-442) -> 204 (+62)' + SWING_TAIL, 'the W432 window the swing rides')
assert.equal(W(431, 432, 433), SWELL + '142 -> 204 (+62) -> 631 (+427)' + SWELL_TAIL, "MY WORD'S OWN FIRST LIVE READ - the W433 window the end-phase's own climb swell the newest add prices")

// THE SKINS-RIDE-WHOLE BATTERY - the line's own count rides whole
// whatever the skin's name (the .195's own law co-exists by seat);
// the real cache lines the cell prices byte-true
const SKINS = [
  'F5 [F5] climb bridge: placed cobblestone at [-108,66,410] (support) - the step re-judges',
  'F5 [F5] climb bridge: placed cobblestone at [-99,64,402] (pit) - the step re-judges',
  'F5 [F5] climb bridge: placed cobblestone at [-99,64,402] (self) - the step re-judges',
  'F5 [F5] climb bridge: placed dirt at [-109,66,414] (support) - the step re-judges',
  'F5 [F5] climb bridge: the support fill\'s cell holds a leaf_litter at [-3,67,401] - the plant clears first',
  'F5 [F5] climb bridge: the support fill at [-3,67,401] defers - the bot\'s own box holds the cell (the entity-collision law)',
  'F5 [F5] climb bridge: the self fill waited and grounded - the re-plan reads the support fill',
  'F5 [F5] climb bridge: unavailable (no placeable block in the pocket)',
  'F5 [F5] climb bridge: the pocket is empty - the pit donates a grass_block at [-108,66,410] - the fill refunds it'
]
for (const l of SKINS) {
  assert.equal(climbBridges([l]), 1, `the skin rides whole - the count never splits: \${l.slice(0, 60)}`)
}
assert.equal(climbBridges(SKINS), 9, 'the nine skins the mass sums whole the cells ride')

// THE FIXED-GRAMMAR BATTERY - the variants and torn and bare forms
// never ride (the emitter prints the double-prefix voice only - the
// grammar strict, zero non-shape lines the whole cache holds)
assert.equal(climbBridges(['F5 climb bridge: placed cobblestone at [-108,66,410] (support) - the step re-judges']), 0, 'the single-prefix form never rides - the bot\'s own name the emitter prints')
assert.equal(climbBridges(['[F5] climb bridge: placed cobblestone at [-108,66,410] (support) - the step re-judges']), 0, 'the bracket-only form never rides - no such emitter voice')
assert.equal(climbBridges(['F5 [F5] climbbridge: placed cobblestone at [-108,66,410] (support) - the step re-judges']), 0, 'the merged-word form never rides - the grammar strict')
assert.equal(climbBridges(['F5 [F5] climb bridge: placed cobblestone at [-108,66,410] (support) - the step re-judges']), 1, 'the shape-based grammar rides whatever tail the emitter prints - no torn exclusion the fence invents')
assert.equal(climbBridges(['F5 [F5] climb brid: placed cobblestone at [-108,66,410] (support) - the step re-judges']), 0, 'the truncated prefix never rides - the grammar strict')
assert.equal(climbBridges(['F5 [F5] climb bridge placed cobblestone at [-108,66,410] (support) - the step re-judges']), 0, 'the colon-less form never rides - the grammar strict')
assert.equal(climbBridges(['climb bridge: placed cobblestone at [-108,66,410] (support) - the step re-judges']), 0, 'the bare form never rides - no such emitter voice')

// THE LANES NEVER MERGE - the one-parser claims (the climb diag lane
// never rides, the climb-out book lanes never ride, the walk-intent
// chest lane never rides, the census prose never rides)
assert.equal(climbBridges(['F12 [F12] climb diag: level at y=70 blocked toward 1,0 (dug=3)']), 0, 'the climb diag line never rides - a different lane the sibling emitter owns, the lanes never merge')
assert.equal(climbBridges(['F12 [F12] climb diag: level at y=70 blocked toward 1,0 (dug=3, wet) at [12,70,5] water (stop)']), 0, 'the climb diag wet skin never rides - the lanes never merge')
assert.equal(climbBridges(['pre-position census: armed 16, landed 1 (+44u), failed 29 (top why: surface refused x21; climb-outs: stalled x17, stopped x2, rescue owns the bot x1, timeout x1) - the seat\'s own delivery, first priced']), 0, 'the pre-position census line never rides - the climb-out book\'s own lane prices it, the lanes never merge')
assert.equal(climbBridges(['F15 [F15] walk-intent: chest at [-115,81,414] held for the fleet (1 live, ttl 90s)']), 0, 'the walk-intent line never rides - the ledger book\'s own lane prices it, the lanes never merge')
assert.equal(climbBridges(['F3 [F3] climb-out pre-position: the climb-out stalled']), 0, 'the climb-out line never rides - the climb-out book\'s own lanes price it, the lanes never merge')

// THE CELL'S OWN READ - the one-parser ride over the REAL bridge
// receipts (the F432's own tail, the F433's own end-phase churn, the
// mixed skins the count rides whole)
const F432_LINES = [
  'F18 [F18] climb bridge: the pocket is empty - the pit donates a grass_block at [-92,65,394] - the fill refunds it',
  'F18 [F18] climb bridge: the self fill waited and grounded - the re-plan reads the support fill',
  'F18 [F18] climb bridge: placed dirt at [-88,66,394] (support) - the step re-judges'
]
const F433_LINES = [
  'F5 [F5] climb bridge: the pocket is empty - the pit donates a grass_block at [-108,66,410] - the fill refunds it',
  'F5 [F5] climb bridge: the pocket is empty - the pit donates a grass_block at [-109,65,410] - the fill refunds it',
  'F5 [F5] climb bridge: the self fill waited and grounded - the re-plan reads the support fill',
  'F5 [F5] climb bridge: placed dirt at [-109,66,414] (support) - the step re-judges',
  'F5 [F5] climb bridge: the self fill waited and grounded - the re-plan reads the support fill'
]
assert.equal(climbBridges(F432_LINES), 3, 'the F432 receipts the cell prices byte-true')
assert.equal(climbBridges(F433_LINES), 5, 'the F433 receipts the cell prices byte-true - the end-phase churn the newest add rides')
assert.equal(climbBridges([...F432_LINES, ...F433_LINES]), 8, 'the mass sums whole the cells ride')
assert.equal(climbBridges([]), 0, 'the empty lines the zero rides')
assert.equal(climbBridges(undefined), 0, 'the undefined lines the zero rides - the fence never lies')
assert.equal(climbBridges(['no lines here', 42, null]), 0, 'the junk lines the zero rides')

// THE FENCE BATTERY - the fold must prove itself (the fence law: the
// word never rides a lie); extra keys never rejected (the fence never
// invents exclusions)
assert.equal(climbBridgeTrendRow(null), null, 'the null fold the fence refuses')
assert.equal(climbBridgeTrendRow(undefined), null, 'the undefined fold the fence refuses')
assert.equal(climbBridgeTrendRow('junk'), null, 'the junk fold the fence refuses')
assert.equal(climbBridgeTrendRow([]), null, 'the array fold the fence refuses')
assert.equal(climbBridgeTrendRow({}), null, 'the empty fold the fence refuses')
assert.equal(climbBridgeTrendRow({ back: { climbBridges: 1 }, prev: { climbBridges: 2 } }), null, 'the missing face the fence refuses')
assert.equal(climbBridgeTrendRow({ back: { climbBridges: 1 }, prev: { climbBridges: 2 }, cur: { climbBridges: 1.5 } }), null, 'the non-integer the fence refuses')
assert.equal(climbBridgeTrendRow({ back: { climbBridges: 1 }, prev: { climbBridges: 2 }, cur: { climbBridges: -1 } }), null, 'the negative the fence refuses')
assert.equal(climbBridgeTrendRow({ back: { climbBridges: '1' }, prev: { climbBridges: 2 }, cur: { climbBridges: 3 } }), null, 'the string count the fence refuses')
assert.equal(climbBridgeTrendConsistent({ back: { climbBridges: 0 }, prev: { climbBridges: 0 }, cur: { climbBridges: 0 } }), true, 'the zero fold rides - the no-drought birth\'s own zero the lawful count')
assert.equal(climbBridgeTrendRow({ back: { climbBridges: 4, extra: 'x' }, prev: { climbBridges: 4, extra: 'y' }, cur: { climbBridges: 9, extra: 'z' } }), null, 'the held fold prices no direction - the honest silence the row never invents')
assert.equal(climbBridgeTrendRow({ back: { climbBridges: 0, extra: 'x' }, prev: { climbBridges: 5, extra: 'y' }, cur: { climbBridges: 9, extra: 'z' } }), SWELL + '0 -> 5 (+5) -> 9 (+4)' + SWELL_TAIL, 'the extra keys never rejected - the fence never invents exclusions')

// THE BYTE-PIN BATTERY - the row never speaks the shape's own verdict
// words nor the seats' own verdict word nor the dynasty's own
// (co-existence by seat never by duplication)
const voices = [
  climbBridgeTrendRow({ back: { climbBridges: 1 }, prev: { climbBridges: 2 }, cur: { climbBridges: 3 } }),
  climbBridgeTrendRow({ back: { climbBridges: 3 }, prev: { climbBridges: 2 }, cur: { climbBridges: 1 } }),
  climbBridgeTrendRow({ back: { climbBridges: 1 }, prev: { climbBridges: 3 }, cur: { climbBridges: 2 } })
]
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  for (const v of voices) {
    assert.equal(v.includes(banned), false, `the byte-pin holds - the \${banned} word never rides the row`)
  }
}
for (const v of voices) {
  assert.equal(v.endsWith('co-existence by seat never by duplication)'), true, 'the tail\'s own close the byte rides')
  assert.equal(v.includes("the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces"), true, 'the .193 sibling the tail names - the grain lane beside')
  assert.equal(v.includes("the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces"), true, 'the .194 sibling the tail names - the tunnel sealed lane beside')
  assert.equal(v.includes("the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces"), true, 'the .195 sibling the tail names - the walk nudge lane beside')
  assert.equal(v.includes("this word prices the climb bridge's own placement mass across the faces - the climb bridge seat"), true, 'the word\'s own naming the tail holds')
}

console.log('climbbridgetrend: all pins green')
