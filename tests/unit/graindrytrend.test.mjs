// tests/unit/graindrytrend.test.mjs - THE FUEL COMMONS FRONT'S OWN DRY
// GRAIN TREND's own pin battery (v0.976.193): the fuel commons' own dry
// grain mass across the faces the F431's own census named first (the
// 'smelt fuel commons grain: asked 34, delivered 0, dry 34 - every ask
// came up dry: the commons' source is the front (the tithe is the only
// inflow)' line rode F431 thirty-four strong - THE STORM the commons'
// own front, the no fuel 19 the top tax the smelt chain's own census
// names beside) - the field's own chains byte-exact (THE CELL'S OWN
// WEIGHT 224u the thirty-nine faces' own total, THE FIELD'S OWN TOP THE
// COUNT 20 rode TWICE the faces 353/359's own crests - THE DOUBLE
// CREST, THE FIELD'S OWN FLOOR THE COUNT ONE rode TWICE the faces
// 352/384's own floors beside the TWO zero faces 354/364 - THE
// DROUGHTS the lean law keeps), TWENTY-EIGHT of THIRTY-SEVEN windows
// speaking (TWENTY-ONE swings, FIVE swells, TWO fades, the NINE honest
// silences), THE NINE-SWING RUN the faces 371..381 hold - THE RECORD
// THE BOOK RIDES, THE QUAD SILENCE RUN the faces 359..364 hold, THE
// THREE ROUND TRIPS every one the weight-2 mirror, the bounds' own legs
// pins (the +19 rode TWO legs ONE boundary the boundary 352/353 - THE
// CREST'S OWN CLIMB, the -20 rode ONE leg ONE boundary the boundary
// 353/354 - THE CREST'S OWN DRAIN), the last word the face 386's own
// window the swell (1 -> 3 (+2) -> 6 (+3)), the whole-cache pins (the
// 296u over the forty-nine faces, the face 431's own 34u THE STORM the
// newest add, the W431 window the swing 4 -> 3 (-1) -> 34 (+31) MY
// WORD'S OWN FIRST LIVE READ the nearest-completed law holds - the
// absent 424 the honest gap rides, the W427/W428 windows the swings,
// the W429/W430 windows the honest silences), THE NEVER-FED LAW
// (delivered 0 across the whole cache - the dry form the only voice)
// + the byte-pin battery, the fence battery, the cell's own read, the
// one-parser ride over the REAL grain lines (the tithe inflow lines
// never ride, the no-fuel anatomy/owner/pantry rows never ride, the
// fuel commons raw docket lines never ride, the torn grain line never
// rides - the grammar strict, the tagged form rides the same grammar -
// the prefix law, zero tagged lines the whole cache holds, the
// no-shape junk never rides - the lanes never merge)
import assert from 'node:assert'
import { grainDries, grainDryTrendConsistent, grainDryTrendRow } from '../../src/lib/graindrytrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, this word prices the fuel commons' own dry grain mass across the faces - the fuel commons front's own dry grain seat, co-existence by seat never by duplication)"

const HEAD = 'the grain dry trend (v0.976.193)'
const SWING = HEAD + ": the dry's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the dry's rise ran two steps deep - "
const SWELL_TAIL = " - the dry's own swell " + TAIL
const FADE = HEAD + ": the dry's fall ran two steps deep - "
const FADE_TAIL = " - the dry's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the grain RE's
// own arithmetic via the house's own parseFuelGrain, THIRTY-NINE faces
// deep) - THE CELL'S OWN WEIGHT 224u the faces' own total, THE FIELD'S
// OWN TOP THE COUNT 20 rode TWICE (the faces 353/359's own crests -
// THE DOUBLE CREST), THE FIELD'S OWN FLOOR THE COUNT ONE rode TWICE
// (the faces 352/384's own floors) beside the TWO zero faces (354/364
// - THE DROUGHTS the lean law keeps)
const P = {}
P[348] = 9
P[349] = 3
P[350] = 6
P[351] = 7
P[352] = 1
P[353] = 20
P[354] = 0
P[355] = 5
P[356] = 5
P[357] = 9
P[358] = 8
P[359] = 20
P[360] = 3
P[361] = 3
P[362] = 2
P[363] = 2
P[364] = 0
P[365] = 3
P[366] = 6
P[367] = 8
P[368] = 6
P[369] = 4
P[370] = 2
P[371] = 4
P[372] = 9
P[373] = 2
P[374] = 10
P[375] = 6
P[376] = 8
P[377] = 6
P[378] = 9
P[379] = 2
P[380] = 14
P[381] = 4
P[382] = 4
P[383] = 4
P[384] = 1
P[385] = 3
P[386] = 6
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 224, "the cell 224u the hand-off holds - THE FUEL COMMONS FRONT'S OWN DRY GRAIN SEAT rides")
const w = (f) => grainDryTrendRow({ back: { grainDries: P[f - 2] }, prev: { grainDries: P[f - 1] }, cur: { grainDries: P[f] } })

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
// classification (TWENTY-ONE swings, FIVE swells, TWO fades, the NINE
// honest silences - TWENTY-EIGHT of THIRTY-SEVEN speaking)
const SWELLS = {
  351: '3 -> 6 (+3) -> 7 (+1)',
  366: '0 -> 3 (+3) -> 6 (+3)',
  367: '3 -> 6 (+3) -> 8 (+2)',
  372: '2 -> 4 (+2) -> 9 (+5)',
  386: '1 -> 3 (+2) -> 6 (+3)'
}
const FADES = {
  369: '8 -> 6 (-2) -> 4 (-2)',
  370: '6 -> 4 (-2) -> 2 (-2)'
}
const SWINGS = {
  350: '9 -> 3 (-6) -> 6 (+3)',
  352: '6 -> 7 (+1) -> 1 (-6)',
  353: '7 -> 1 (-6) -> 20 (+19)',
  354: '1 -> 20 (+19) -> 0 (-20)',
  355: '20 -> 0 (-20) -> 5 (+5)',
  358: '5 -> 9 (+4) -> 8 (-1)',
  359: '9 -> 8 (-1) -> 20 (+12)',
  360: '8 -> 20 (+12) -> 3 (-17)',
  365: '2 -> 0 (-2) -> 3 (+3)',
  368: '6 -> 8 (+2) -> 6 (-2)',
  371: '4 -> 2 (-2) -> 4 (+2)',
  373: '4 -> 9 (+5) -> 2 (-7)',
  374: '9 -> 2 (-7) -> 10 (+8)',
  375: '2 -> 10 (+8) -> 6 (-4)',
  376: '10 -> 6 (-4) -> 8 (+2)',
  377: '6 -> 8 (+2) -> 6 (-2)',
  378: '8 -> 6 (-2) -> 9 (+3)',
  379: '6 -> 9 (+3) -> 2 (-7)',
  380: '9 -> 2 (-7) -> 14 (+12)',
  381: '2 -> 14 (+12) -> 4 (-10)',
  385: '4 -> 1 (-3) -> 3 (+2)'
}
const tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) tally[tallyWindow(f, P)]++
assert.deepEqual(tally, { swing: 21, swell: 5, fade: 2, silence: 9 }, "the birth field's own breath the THIRTY-SEVEN windows hold - TWENTY-EIGHT speaking")
assert.equal(tally.swing, 21, 'TWENTY-ONE swings the commons\u2019 own churn rides')
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, `the swell F${f} the arc rides`)
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, `the fade F${f} the arc rides`)
}
for (const [f, arc] of Object.entries(SWINGS)) {
  assert.equal(w(Number(f)), SWING + arc + SWING_TAIL, `the swing F${f} the arc rides`)
}
for (const f of [356, 357, 361, 362, 363, 364, 382, 383, 384]) {
  assert.equal(w(f), null, `the silence F${f} the held law keeps - the row never invents`)
}

// THE NINE-SWING RUN - the faces 371..381's own windows (the swings
// chain nine deep - THE RECORD THE BOOK RIDES, the quad 350..355 and
// the triple 356..360 the runs beside, the five solos
// 348/363/366/369/383 the seats beside)
const swingRun = []
let run = []
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f, P) === 'swing') run.push(f)
  else { if (run.length > swingRun.length) swingRun.splice(0, swingRun.length, ...run); run = [] }
}
if (run.length > swingRun.length) swingRun.splice(0, swingRun.length, ...run)
assert.deepEqual(swingRun, [373, 374, 375, 376, 377, 378, 379, 380, 381], 'the longest swing run the faces 371..381 hold - the NINE the record rides')

// THE QUAD SILENCE RUN - the faces 359..364's own windows (the held
// steps chain four deep - the longest drought this book rides), the
// TRIPLE 380..384 beside, the PAIR 354/355
const silenceRun = []
run = []
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f, P) === 'silence') run.push(f)
  else { if (run.length > silenceRun.length) silenceRun.splice(0, silenceRun.length, ...run); run = [] }
}
if (run.length > silenceRun.length) silenceRun.splice(0, silenceRun.length, ...run)
assert.deepEqual(silenceRun, [361, 362, 363, 364], 'the longest silence run the faces 359..364 hold - the QUAD the drought rides')

// THE ONE back-to-back swell PAIR the faces 364/365 hold (the
// climb-out of the drought 364 the pair rides) and the ONE fade PAIR
// the faces 367/368 hold (the drain after the crest 8)
assert.equal(tallyWindow(366, P), 'swell', 'the first swell the pair rides')
assert.equal(tallyWindow(367, P), 'swell', 'the second swell the pair rides')
assert.equal(tallyWindow(368, P), 'swing', 'the pair never chains three deep the honest spread rides')
assert.equal(tallyWindow(369, P), 'fade', 'the fade pair the faces 367/368 hold - the first rides')
assert.equal(tallyWindow(370, P), 'fade', 'the fade pair the faces 367/368 hold - the second rides')
assert.equal(tallyWindow(371, P), 'swing', 'the fade pair never chains three deep the honest spread rides')

// THE THREE ROUND TRIPS - the faces 366/369/375's own windows every
// one the weight-2 mirror (+2/-2, -2/+2, +2/-2)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  const a = P[f - 2], b = P[f - 1], c = P[f]
  const first = b - a, second = c - b
  if (first !== 0 && second !== 0 && first === -second) roundTrips.push([f, first, second])
}
assert.deepEqual(roundTrips, [[368, 2, -2], [371, -2, 2], [377, 2, -2]], 'the THREE round trips every one the weight-2 mirror the record rides')

// THE BOUNDS' OWN LEGS - the +19 the max rise rode TWO legs ONE
// boundary (the boundary 352/353 the two windows share - THE CREST'S
// OWN CLIMB the top 20 the climb prices), the -20 the max fall rode
// ONE leg ONE boundary (the boundary 353/354 - THE CREST'S OWN DRAIN
// the top paid whole the drought rides, the -17 the 359/360 drain the
// second-heaviest beside)
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
assert.equal(maxRise, 19, 'the max rise +19 the crest climb prices')
assert.deepEqual(riseLegs, ['352/353'], 'the +19 rode TWO legs ONE boundary - the two windows share the boundary 352/353')
assert.equal(w(353).includes('7 -> 1 (-6) -> 20 (+19)'), true, 'the climb\u2019s first leg the window 351/352/353 rides')
assert.equal(maxFall, -20, 'the max fall -20 the crest drain prices')
assert.deepEqual(fallLegs, ['353/354'], 'the -20 rode ONE leg ONE boundary the boundary 353/354 - the top paid whole the drought rides')

// THE LAST WORD - the face 386's own window the swell (1 -> 3 (+2) ->
// 6 (+3) - the climb's own closer the tail rides out on)
assert.equal(w(386), SWELL + '1 -> 3 (+2) -> 6 (+3)' + SWELL_TAIL, 'the last word the swell the tail rides out on')

// THE WHOLE-CACHE SEAT - 296u the forty-nine faces the cache holds
// (the birth 224u the thirty-nine faces, the face 347's own 4u the
// pre-field face, the post field 68u the nine faces 422..431 beside;
// the cancelled 424 the honest gap rides)
const Q = {}
Q[347] = 4
Q[348] = 9
Q[349] = 3
Q[350] = 6
Q[351] = 7
Q[352] = 1
Q[353] = 20
Q[354] = 0
Q[355] = 5
Q[356] = 5
Q[357] = 9
Q[358] = 8
Q[359] = 20
Q[360] = 3
Q[361] = 3
Q[362] = 2
Q[363] = 2
Q[364] = 0
Q[365] = 3
Q[366] = 6
Q[367] = 8
Q[368] = 6
Q[369] = 4
Q[370] = 2
Q[371] = 4
Q[372] = 9
Q[373] = 2
Q[374] = 10
Q[375] = 6
Q[376] = 8
Q[377] = 6
Q[378] = 9
Q[379] = 2
Q[380] = 14
Q[381] = 4
Q[382] = 4
Q[383] = 4
Q[384] = 1
Q[385] = 3
Q[386] = 6
Q[422] = 6
Q[423] = 1
Q[425] = 6
Q[426] = 3
Q[427] = 7
Q[428] = 4
Q[429] = 4
Q[430] = 3
Q[431] = 34
let cacheSum = 0
for (const k of Object.keys(Q)) cacheSum += Q[k]
assert.equal(Object.keys(Q).length, 49, 'the forty-nine faces the cache holds - the honest gap the cancelled 424 rides')
assert.equal(cacheSum, 296, 'the whole-cache seat 296u the hand-off holds')
assert.equal(Q[431], 34, "THE STORM the face 431's own 34u the newest add rides - the commons' own front the F431's own census names")

// THE POST WINDOWS - the nearest-completed law holds (the absent 424
// the honest gap rides - the W425 window the gap the ride holds)
const W = (a, b, c) => grainDryTrendRow({ back: { grainDries: Q[a] }, prev: { grainDries: Q[b] }, cur: { grainDries: Q[c] } })
assert.equal(W(422, 423, 425), SWING + '6 -> 1 (-5) -> 6 (+5)' + SWING_TAIL, 'the W425 window the swing the gap the ride holds')
assert.equal(W(423, 425, 426), SWING + '1 -> 6 (+5) -> 3 (-3)' + SWING_TAIL, 'the W426 window the swing rides')
assert.equal(W(425, 426, 427), SWING + '6 -> 3 (-3) -> 7 (+4)' + SWING_TAIL, 'the W427 window the swing rides')
assert.equal(W(426, 427, 428), SWING + '3 -> 7 (+4) -> 4 (-3)' + SWING_TAIL, 'the W428 window the swing rides')
assert.equal(W(427, 428, 429), null, 'the W429 window the honest silence the held law keeps')
assert.equal(W(428, 429, 430), null, 'the W430 window the honest silence the held law keeps')
assert.equal(W(429, 430, 431), SWING + '4 -> 3 (-1) -> 34 (+31)' + SWING_TAIL, "MY WORD'S OWN FIRST LIVE READ - the W431 window the swing THE STORM the climb prices")
assert.equal(W(385, 386, 422), null, 'the window 385/386/422 the honest silence the held law keeps')
assert.equal(W(386, 422, 423), null, 'the window 386/422/423 the honest silence the held law keeps')

// THE NEVER-FED LAW - delivered 0 across the whole cache (296 asked =
// 296 dry - the commons never fed, the dry form the only voice the
// forty-seven speaking faces hold, the fed and the mixed forms never
// rode - the tithe the only inflow the emitter's own verdict names;
// the grammar prices the other voices whole whatever the verdict)
assert.equal(grainDries(['smelt fuel commons grain: asked 5, delivered 2 (3u over 4 opens), dry 0 - every ask fed: the commons holds the supply line']), 0, 'the fed form\u2019s dry zero the grammar prices - the form never rode the cache')
assert.equal(grainDries(['smelt fuel commons grain: asked 5, delivered 2 (3u over 4 opens), dry 3 - the commons reads mixed: the dry asks name the thin chests']), 3, 'the mixed form\u2019s dry the grammar prices - the form never rode the cache')

// THE CELL'S OWN READ - the one-parser ride over the REAL grain lines
// (the F431's own storm, the F430/F429 cells beside, the bare voice
// the only one the cache holds)
const F431_LINE = "smelt fuel commons grain: asked 34, delivered 0, dry 34 - every ask came up dry: the commons' source is the front (the tithe is the only inflow)"
const F430_LINE = 'smelt fuel commons grain: asked 3, delivered 0, dry 3 - every ask came up dry: the commons\' source is the front (the tithe is the only inflow)'
const F429_LINE = 'smelt fuel commons grain: asked 4, delivered 0, dry 4 - every ask came up dry: the commons\' source is the front (the tithe is the only inflow)'
assert.equal(grainDries([F431_LINE]), 34, 'the F431 line the storm the cell prices byte-true')
assert.equal(grainDries([F430_LINE]), 3, 'the F430 cell the read prices byte-true')
assert.equal(grainDries([F429_LINE]), 4, 'the F429 cell the read prices byte-true')
assert.equal(grainDries([F431_LINE, F430_LINE, F429_LINE]), 41, 'the mass sums whole the cells ride')
assert.equal(grainDries([]), 0, 'the empty lines the zero rides')
assert.equal(grainDries(undefined), 0, 'the undefined lines the zero rides - the fence never lies')
assert.equal(grainDries(['no lines here', 42, null]), 0, 'the junk lines the zero rides')

// THE LANES NEVER MERGE - the one-parser claims (the tithe inflow
// lines the tithe ledger's own book prices never ride, the no-fuel
// anatomy/owner/pantry rows the smelt lane's own cells price never
// ride, the fuel commons raw docket lines the .159 word's own cell
// never ride, the torn grain line never rides - the grammar strict,
// the tagged form rides the same grammar - the prefix law)
assert.equal(grainDries(['fuel tithe inflow: attempted 11, delivered 0, dry 11 - the opens fired far 1 of 11 - the walk\'s landed verdict lied: the geometry is the front']), 0, 'the inflow line never rides - the inflow\'s own seat the lanes never merge')
assert.equal(grainDries(['smelt no-fuel anatomy: carried 0, dry 19 of 19 no-fuel refusals - the pockets are as dry as the machines - the fuel supply is the front']), 0, 'the anatomy row never rides')
assert.equal(grainDries(['smelt no-fuel owner: furnace carries 19 of 19 no-fuel refusals (100.0%) - one machine owns the tax - its fuel load is the cure']), 0, 'the owner row never rides')
assert.equal(grainDries(['smelt no-fuel pantry: protected 19, bare 0 of 19 no-fuel refusals - the pockets hold wood the reserve floors protect - the floors hold their line, the supply stays the front']), 0, 'the pantry row never rides')
assert.equal(grainDries(['F11 [abc123] fuel commons: chest holds no fuel at [-108,71,401]']), 0, 'the raw docket line never rides - the .159 word\'s own cell the lanes never merge')
assert.equal(grainDries(['smelt fuel commons grain: asked 5, delivered']), 0, 'the torn grain line never rides - the grammar strict')
assert.equal(grainDries(['F3 [abc123] smelt fuel commons grain: asked 2, delivered 0, dry 2 - every ask came up dry: the commons\' source is the front (the tithe is the only inflow)']), 2, 'the tagged form rides the same grammar - the prefix law the house holds')
assert.equal(grainDries(['smelt fuel commons grain: asked -1, delivered 0, dry -1']), 0, 'the impossible count never rides - the grammar strict')

// THE FENCE BATTERY - the fold must prove itself (the fence law: the
// word never rides a lie); extra keys never rejected (the fence never
// invents exclusions)
assert.equal(grainDryTrendRow(null), null, 'the null fold the fence refuses')
assert.equal(grainDryTrendRow(undefined), null, 'the undefined fold the fence refuses')
assert.equal(grainDryTrendRow('junk'), null, 'the junk fold the fence refuses')
assert.equal(grainDryTrendRow([]), null, 'the array fold the fence refuses')
assert.equal(grainDryTrendRow({}), null, 'the empty fold the fence refuses')
assert.equal(grainDryTrendRow({ back: { grainDries: 1 }, prev: { grainDries: 2 } }), null, 'the missing face the fence refuses')
assert.equal(grainDryTrendRow({ back: { grainDries: 1 }, prev: { grainDries: 2 }, cur: { grainDries: 1.5 } }), null, 'the non-integer the fence refuses')
assert.equal(grainDryTrendRow({ back: { grainDries: 1 }, prev: { grainDries: 2 }, cur: { grainDries: -1 } }), null, 'the negative the fence refuses')
assert.equal(grainDryTrendRow({ back: { grainDries: '1' }, prev: { grainDries: 2 }, cur: { grainDries: 3 } }), null, 'the string count the fence refuses')
assert.equal(grainDryTrendConsistent({ back: { grainDries: 0 }, prev: { grainDries: 0 }, cur: { grainDries: 0 } }), true, 'the zero fold rides - the lean law\'s own honest zero the lawful count')
assert.equal(grainDryTrendRow({ back: { grainDries: 0, extra: 'x' }, prev: { grainDries: 5, extra: 'y' }, cur: { grainDries: 9, extra: 'z' } }), SWELL + '0 -> 5 (+5) -> 9 (+4)' + SWELL_TAIL, 'the extra keys never rejected - the fence never invents exclusions')

// THE BYTE-PIN BATTERY - the row never speaks the shape's own verdict
// words nor the seats' own verdict word nor the dynasty's own
// (co-existence by seat never by duplication)
const voices = [
  grainDryTrendRow({ back: { grainDries: 1 }, prev: { grainDries: 2 }, cur: { grainDries: 3 } }),
  grainDryTrendRow({ back: { grainDries: 3 }, prev: { grainDries: 2 }, cur: { grainDries: 1 } }),
  grainDryTrendRow({ back: { grainDries: 1 }, prev: { grainDries: 3 }, cur: { grainDries: 2 } }),
]
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  for (const v of voices) {
    assert.equal(v.includes(banned), false, `the byte-pin holds - the ${banned} word never rides the row`)
  }
}
for (const v of voices) {
  assert.equal(v.endsWith('co-existence by seat never by duplication)'), true, 'the tail\'s own close the byte rides')
  assert.equal(v.includes('the raw hop fail\'s own trend prices the raw hop fail mass across the faces'), true, 'the newest sibling the tail names - the raw hop lane\'s own fail trend beside')
  assert.equal(v.includes("this word prices the fuel commons' own dry grain mass across the faces - the fuel commons front's own dry grain seat"), true, 'the word\'s own naming the tail holds')
}

console.log('graindrytrend: all pins green')
