// tests/unit/rawhopfailtrend.test.mjs - THE RAW HOP LANE'S OWN FAIL
// TREND's own pin battery (v0.976.191): the raw hop lane's own fail
// mass across the faces the F429's own log named first (the 'F<n>
// [F<n>] raw hop failed: raw walk <why> - pathfinder retry' lines rode
// F429 fifty-five strong while the banks stood at 16.6% - the walk tax
// the end-phase's own raw controls price) - the field's own chains
// byte-exact (THE CELL'S OWN WEIGHT 1797u the thirty-nine faces' own
// total, THE FIELD'S OWN TOP THE COUNT 110 rode ONCE the face 368's
// own crest - THE STORM, THE FIELD'S OWN FLOOR THE COUNT 12 rode ONCE
// the face 376's own floor - THE NO-DROUGHT BOOK the zero never rode
// the whole cache), THIRTY-ONE of THIRTY-SEVEN windows speaking
// (SEVENTEEN swings, SIX swells, EIGHT fades, the SIX honest
// silences - THE THREE back-to-back silence PAIRS the faces 353/354,
// 364/365, 373/374 hold), THE TRIPLE FADE RUN the faces 356/357/358
// hold + the PAIR 375/376 + the five solo seats, the SIX swells never
// chain, THE ZERO ROUND TRIPS the book holds, the bounds' own legs
// pins (the +58 rode TWO legs ONE boundary the boundary 368/369 - THE
// STORM'S OWN CLIMB, the -60 rode TWO legs ONE boundary the boundary
// 369/370 - THE STORM'S OWN DRAIN), the last word the face 386's own
// window the swing (39 -> 88 (+49) -> 48 (-40)), the whole-cache pins
// (the 2254u over the forty-eight faces, the face 430's own 59u the
// newest add, the W430 window the swell 30 -> 55 (+25) -> 59 (+4) MY
// WORD'S OWN FIRST LIVE READ the nearest-completed law holds - the
// absent 428 the honest gap rides, the W429/W428/W427 windows the
// swings)
// + the byte-pin battery, the fence battery, the cell's own read, the
// one-parser ride over the REAL raw hop lines (the hop decide-timeout
// zeros the hop census's own book prices never ride, the walk-fail
// bucket prose never rides, the bare skin never rides - no such
// emitter voice, the no-shape junk never rides - the lanes never
// merge)
import assert from 'node:assert'
import { rawHopFails, rawHopFailTrendConsistent, rawHopFailTrendRow } from '../../src/lib/rawhopfailtrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, this word prices the raw hop fail mass across the faces - the raw hop lane's own fail seat, co-existence by seat never by duplication)"

const HEAD = 'the raw hop fail trend (v0.976.191)'
const SWING = HEAD + ": the fail's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the fail's rise ran two steps deep - "
const SWELL_TAIL = " - the fail's own swell " + TAIL
const FADE = HEAD + ": the fail's fall ran two steps deep - "
const FADE_TAIL = " - the fail's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the raw hop RE's
// own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN WEIGHT
// 1797u the faces' own total, THE FIELD'S OWN TOP THE COUNT 110 rode
// ONCE (the face 368's own crest - THE STORM), THE FIELD'S OWN FLOOR
// THE COUNT 12 rode ONCE (the face 376's own floor) - THE NO-DROUGHT
// BOOK the zero never rode
const P = {}
P[348] = 46
P[349] = 25
P[350] = 32
P[351] = 58
P[352] = 28
P[353] = 28
P[354] = 68
P[355] = 55
P[356] = 41
P[357] = 25
P[358] = 14
P[359] = 27
P[360] = 70
P[361] = 20
P[362] = 40
P[363] = 50
P[364] = 50
P[365] = 28
P[366] = 27
P[367] = 52
P[368] = 110
P[369] = 50
P[370] = 37
P[371] = 58
P[372] = 64
P[373] = 64
P[374] = 58
P[375] = 52
P[376] = 12
P[377] = 59
P[378] = 34
P[379] = 49
P[380] = 28
P[381] = 45
P[382] = 60
P[383] = 58
P[384] = 39
P[385] = 88
P[386] = 48
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 1797, "the cell 1797u the hand-off holds - THE RAW HOP LANE'S OWN FAIL SEAT rides")
const w = (f) => rawHopFailTrendRow({ back: { rawHopFails: P[f - 2] }, prev: { rawHopFails: P[f - 1] }, cur: { rawHopFails: P[f] } })

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
// classification (SEVENTEEN swings, SIX swells, EIGHT fades, the SIX
// honest silences - THIRTY-ONE of THIRTY-SEVEN speaking)
const SWELLS = {
  351: '25 -> 32 (+7) -> 58 (+26)',
  360: '14 -> 27 (+13) -> 70 (+43)',
  363: '20 -> 40 (+20) -> 50 (+10)',
  368: '27 -> 52 (+25) -> 110 (+58)',
  372: '37 -> 58 (+21) -> 64 (+6)',
  382: '28 -> 45 (+17) -> 60 (+15)'
}
const FADES = {
  356: '68 -> 55 (-13) -> 41 (-14)',
  357: '55 -> 41 (-14) -> 25 (-16)',
  358: '41 -> 25 (-16) -> 14 (-11)',
  366: '50 -> 28 (-22) -> 27 (-1)',
  370: '110 -> 50 (-60) -> 37 (-13)',
  375: '64 -> 58 (-6) -> 52 (-6)',
  376: '58 -> 52 (-6) -> 12 (-40)',
  384: '60 -> 58 (-2) -> 39 (-19)'
}
const SWINGS = {
  350: '46 -> 25 (-21) -> 32 (+7)',
  352: '32 -> 58 (+26) -> 28 (-30)',
  355: '28 -> 68 (+40) -> 55 (-13)',
  359: '25 -> 14 (-11) -> 27 (+13)',
  361: '27 -> 70 (+43) -> 20 (-50)',
  362: '70 -> 20 (-50) -> 40 (+20)',
  367: '28 -> 27 (-1) -> 52 (+25)',
  369: '52 -> 110 (+58) -> 50 (-60)',
  371: '50 -> 37 (-13) -> 58 (+21)',
  377: '52 -> 12 (-40) -> 59 (+47)',
  378: '12 -> 59 (+47) -> 34 (-25)',
  379: '59 -> 34 (-25) -> 49 (+15)',
  380: '34 -> 49 (+15) -> 28 (-21)',
  381: '49 -> 28 (-21) -> 45 (+17)',
  383: '45 -> 60 (+15) -> 58 (-2)',
  385: '58 -> 39 (-19) -> 88 (+49)',
  386: '39 -> 88 (+49) -> 48 (-40)'
}
const tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) tally[tallyWindow(f, P)]++
assert.deepEqual(tally, { swing: 17, swell: 6, fade: 8, silence: 6 }, "the birth field's own breath the THIRTY-SEVEN windows hold - THIRTY-ONE speaking")
assert.equal(tally.swing, 17, 'SEVENTEEN swings the raw hop\u2019s own churn rides')
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(Number(f)), SWELL + arc + SWELL_TAIL, `the swell F${f} the arc rides`)
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(Number(f)), FADE + arc + FADE_TAIL, `the fade F${f} the arc rides`)
}
for (const [f, arc] of Object.entries(SWINGS)) {
  assert.equal(w(Number(f)), SWING + arc + SWING_TAIL, `the swing F${f} the arc rides`)
}
for (const f of [353, 354, 364, 365, 373, 374]) {
  assert.equal(w(f), null, `the silence F${f} the held law keeps - the row never invents`)
}

// THE THREE BACK-TO-BACK SILENCE PAIRS - the faces 353/354, 364/365,
// 373/374's own windows (the held steps chain in twos - the breath's
// own rest the book rides)
const silenceRun = []
let run = []
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f, P) === 'silence') run.push(f)
  else { if (run.length > silenceRun.length) silenceRun.splice(0, silenceRun.length, ...run); run = [] }
}
if (run.length > silenceRun.length) silenceRun.splice(0, silenceRun.length, ...run)
assert.deepEqual(silenceRun, [353, 354], 'the longest silence run the faces 353/354 hold - the PAIR the breath rides')
assert.deepEqual([353, 354, 364, 365, 373, 374].every((f, i, a) => i % 2 === 1 ? a[i - 1] === f - 1 : true), true, 'the THREE silence pairs chain in twos the seats ride')

// THE TRIPLE FADE RUN - the faces 356/357/358's own windows (the
// fades chain in threes - the storm's own drain the chain rides, the
// sweep defer's own TRIPLE round-trip run the mirror beside) + the
// PAIR the faces 375/376 hold + the five solo seats 366/370/384
// beside - the EIGHT fades the book holds
const fadeRun = []
run = []
for (let f = 350; f <= 386; f++) {
  if (tallyWindow(f, P) === 'fade') run.push(f)
  else { if (run.length > fadeRun.length) fadeRun.splice(0, fadeRun.length, ...run); run = [] }
}
if (run.length > fadeRun.length) fadeRun.splice(0, fadeRun.length, ...run)
assert.deepEqual(fadeRun, [356, 357, 358], 'the TRIPLE FADE RUN the faces 356/357/358 hold - the fades chain in threes the book rides')
assert.equal(tally.fade, 8, 'the EIGHT fades the book holds - the triple + the pair 375/376 + the five solos')

// THE SIX SWELLS NEVER CHAIN - the zero back-to-back swell pairs the
// honest spread rides (the storm 368's own arrival the crest climb
// prices)
let swellChain = false
for (let f = 351; f <= 386; f++) {
  if (tallyWindow(f, P) === 'swell' && tallyWindow(f - 1, P) === 'swell') swellChain = true
}
assert.equal(swellChain, false, 'the ZERO back-to-back swell pairs the six swells never chain')

// THE ZERO ROUND TRIPS - the swings never mirrored (the sweep defer's
// own EIGHT the record the mirror beside - the legs never returned
// the same weight the raw hop's own churn prices)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [], 'the birth field holds ZERO round trips - the swings never mirrored')

// THE TOP THE COUNT 110 - rode ONCE the face 368's own crest holds
// (THE STORM the book holds)
assert.equal(Math.max(...Object.values(P)), 110, 'the birth top the count 110 the storm rides')
let topRode = 0
const topFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 110) { topRode++; topFaces.push(f) } }
assert.equal(topRode, 1, 'the top rode ONCE the crest holds')
assert.deepEqual(topFaces, [368], 'the face 368 the storm\u2019s own seat rides')

// THE NO-DROUGHT BOOK - the zero never rode (THE FIELD'S OWN FLOOR
// THE COUNT 12 rode ONCE the face 376's own floor holds)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.equal(zeroFaces.length, 0, 'THE NO-DROUGHT BOOK the zero never rode the birth holds')
assert.equal(Math.min(...Object.values(P)), 12, 'the birth floor the count 12 the honest floor rides')
const floorFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 12) floorFaces.push(f) }
assert.deepEqual(floorFaces, [376], 'the face 376 the floor\u2019s own seat rides')

// THE BOUNDS - the +58 the max rise rode TWO legs ONE boundary (the
// boundary 368/369 - THE STORM'S OWN CLIMB the crest 110 the climb
// prices), the -60 the max fall rode TWO legs ONE boundary (the
// boundary 369/370 - THE STORM'S OWN DRAIN the fall from the crest)
const steps = []
for (let f = 350; f <= 386; f++) { steps.push(P[f - 1] - P[f - 2]); steps.push(P[f] - P[f - 1]) }
assert.equal(Math.max(...steps), 58, 'the birth max rise +58 the bound holds')
assert.equal(Math.min(...steps), -60, 'the birth max fall -60 the bound holds')
assert.equal(steps.filter(s => s === 58).length, 2, 'the +58 rode TWO legs ONE boundary the storm\u2019s own climb holds')
assert.equal(steps.filter(s => s === -60).length, 2, 'the -60 rode TWO legs ONE boundary the storm\u2019s own drain holds')
assert.equal(P[368] - P[367], 58, 'the storm\u2019s own climb the boundary 368/369 rides - the crest 110 the climb prices')
assert.equal(P[369] - P[368], -60, 'the storm\u2019s own drain the boundary 369/370 rides - the fall from the crest the drain prices')

// THE LAST WORD - the face 386's own window the swing (the storm
// echo's own closer the tail rides out on)
assert.equal(w(386), SWING + '39 -> 88 (+49) -> 48 (-40)' + SWING_TAIL, 'the last word the swing rides')

// THE WHOLE-CACHE SEAT 2254u - the face 430's own 59u the newest add
// rides (the W430 window the swell the nearest-completed law holds -
// the absent 428 the honest gap rides; the W429/W428/W427 windows the
// swings the mirror beside; the face 347's own 65u the pre-field face
// beside; the cancelled 424 the honest gap rides)
const E = {}
E[347] = 65
E[422] = 54
E[423] = 26
E[425] = 80
E[426] = 22
E[427] = 66
E[428] = 30
E[429] = 55
E[430] = 59
let postSum = 0
for (const f of [422, 423, 425, 426, 427, 428, 429, 430]) postSum += E[f]
assert.equal(1797 + 65 + postSum, 2254, "the whole-cache 2254u the face 430's own 59u the newest add rides")
assert.equal(E[427], 66, "the face 427's own 66u the read byte-true holds")
assert.equal(E[425], 80, "the face 425's own 80u the mirror beside rides")
const ew = (f, T) => rawHopFailTrendRow({ back: { rawHopFails: T[f - 2] }, prev: { rawHopFails: T[f - 1] }, cur: { rawHopFails: T[f] } })
// the W427 window the swing 80 -> 22 (-58) -> 66 (+44) the storm
// drain's own echo rides
assert.equal(ew(427, E), SWING + '80 -> 22 (-58) -> 66 (+44)' + SWING_TAIL, 'the W427 window the swing rides')
// the W428 window the swing 22 -> 66 (+44) -> 30 (-36) the mirror
// beside
assert.equal(ew(428, E), SWING + '22 -> 66 (+44) -> 30 (-36)' + SWING_TAIL, 'the W428 window the swing rides')
// the W429 window the swing 66 -> 30 (-36) -> 55 (+25) the mirror
// beside
assert.equal(ew(429, E), SWING + '66 -> 30 (-36) -> 55 (+25)' + SWING_TAIL, 'the W429 window the swing rides')
// the W430 window the nearest-completed law holds (the absent 428 the
// honest gap rides - no face no read) - the triple built whole: back
// 428, prev 429, cur 430
assert.equal(rawHopFailTrendRow({ back: { rawHopFails: E[428] }, prev: { rawHopFails: E[429] }, cur: { rawHopFails: E[430] } }), SWELL + '30 -> 55 (+25) -> 59 (+4)' + SWELL_TAIL, 'the W430 window the swell rides - MY WORD\u2019S OWN FIRST LIVE READ the nearest-completed law holds')

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(rawHopFailTrendRow({ back: { rawHopFails: 1 }, prev: { rawHopFails: 2 }, cur: { rawHopFails: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(rawHopFailTrendRow({ back: { rawHopFails: 3 }, prev: { rawHopFails: 2 }, cur: { rawHopFails: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(rawHopFailTrendRow({ back: { rawHopFails: 1 }, prev: { rawHopFails: 3 }, cur: { rawHopFails: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(rawHopFailTrendRow({ back: { rawHopFails: 2 }, prev: { rawHopFails: 2 }, cur: { rawHopFails: 3 } }), null)
assert.equal(rawHopFailTrendRow({ back: { rawHopFails: 2 }, prev: { rawHopFails: 3 }, cur: { rawHopFails: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole (the
// no-drought book the zero never rode the field - the rows' own
// arithmetic the zero seats price)
assert.equal(rawHopFailTrendRow({ back: { rawHopFails: 0 }, prev: { rawHopFails: 1 }, cur: { rawHopFails: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(rawHopFailTrendRow({ back: { rawHopFails: 0 }, prev: { rawHopFails: 0 }, cur: { rawHopFails: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(rawHopFailTrendRow(null), null)
assert.equal(rawHopFailTrendRow(undefined), null)
assert.equal(rawHopFailTrendRow('junk'), null)
assert.equal(rawHopFailTrendRow(42), null)
assert.equal(rawHopFailTrendRow([]), null)
assert.equal(rawHopFailTrendRow({}), null)
assert.equal(rawHopFailTrendRow({ back: { rawHopFails: 1 }, prev: { rawHopFails: 2 } }), null)
assert.equal(rawHopFailTrendRow({ back: { rawHopFails: 1 }, cur: { rawHopFails: 2 } }), null)
assert.equal(rawHopFailTrendRow({ prev: { rawHopFails: 1 }, cur: { rawHopFails: 2 } }), null)
assert.equal(rawHopFailTrendRow({ back: { rawHopFails: 1 }, prev: { rawHopFails: 2 }, cur: { rawHopFails: -1 } }), null)
assert.equal(rawHopFailTrendRow({ back: { rawHopFails: 1.5 }, prev: { rawHopFails: 2 }, cur: { rawHopFails: 3 } }), null)
assert.equal(rawHopFailTrendRow({ back: { other: 1 }, prev: { rawHopFails: 2 }, cur: { rawHopFails: 3 } }), null)
assert.equal(rawHopFailTrendConsistent({ back: { rawHopFails: 0 }, prev: { rawHopFails: 0 }, cur: { rawHopFails: 0 } }), true)
assert.equal(rawHopFailTrendConsistent({ back: { rawHopFails: 5 }, prev: { rawHopFails: 9 }, cur: { rawHopFails: 2 }, spare: true }), true)
assert.equal(rawHopFailTrendConsistent(null), false)
assert.equal(rawHopFailTrendConsistent(undefined), false)
assert.equal(rawHopFailTrendConsistent('junk'), false)
assert.equal(rawHopFailTrendConsistent([]), false)
assert.equal(rawHopFailTrendConsistent({ back: { rawHopFails: 1 }, prev: { rawHopFails: 2 }, cur: { rawHopFails: NaN } }), false)

// THE CELL'S OWN READ - the real raw hop lines ride (the
// DOUBLE-PREFIX voice the raw hop lane prints only - every line the
// shape prints rides, no exclusion the shape needs; the three why
// kinds the shape holds the why tokens never split - the line's own
// count rides whole whatever the why's name)
assert.equal(rawHopFails([
  'F3 [F3] raw hop failed: raw walk stalled after 2035ms (d=6.6) - pathfinder retry',
  'F4 [F4] raw hop failed: raw walk: no net progress for 8078ms (best d=4.9) - pathfinder retry',
  'F14 [F14] raw hop failed: raw walk timeout after 15617ms (d=10.2) - pathfinder retry'
]), 3)
assert.equal(rawHopFails([
  'F9 [F9] raw hop failed: raw walk timeout after 20315ms (d=21.5) - pathfinder retry'
]), 1)
// the integer-d skin the shape holds (the RE's own arithmetic the
// decimal and the integer both ride)
assert.equal(rawHopFails([
  'F7 [F7] raw hop failed: raw walk stalled after 900ms (d=4) - pathfinder retry',
  'F7 [F7] raw hop failed: raw walk: no net progress for 5000ms (best d=12) - pathfinder retry'
]), 2)
// THE HOP DECIDE-TIMEOUT ZEROS the hop census's own book prices never
// ride - the A* hop lane's own seat (the lanes never merge)
assert.equal(rawHopFails(['F12 [F12] hop: chest at [-143,68,411] d=23 zero: chest unreachable (Took to long to decide path to goal!)']), 0)
// the walk-fail bucket prose never rides (the bucket lens the
// walkfail's own book prices beside)
assert.equal(rawHopFails(["the walk-fail's own anatomy: raw hop failed (the lanes hold) x1"]), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(rawHopFails(['F14 final bank budget: flow-priced 300676s (fleet bankable pocket 2088u (raw 2533u) at 0.0u/s needs 300676s) - clamped to 300s (the kill margin)']), 0)
assert.equal(rawHopFails(['[F1] sweep deferred (the lanes hold) - the 12s cooldown outlives the census clock (2 machine(s) untried, the next pass owns them)']), 0)
assert.equal(rawHopFails(['write-off whys: night carries 690u of 1052u (65.6%) - the dark holds the walks - the dusk bank is the front']), 0)
// the bare skin never rides - no such emitter voice (the raw hop lane
// prints the double-prefix form only - zero untagged lines the whole
// cache holds)
assert.equal(rawHopFails(['F6 raw hop failed: raw walk stalled after 1000ms (d=5.0) - pathfinder retry']), 0)
assert.equal(rawHopFails(['[F6] raw hop failed: raw walk stalled after 1000ms (d=5.0) - pathfinder retry']), 0)
// the no-shape junk line never rides - the shape's own proof the RE
// demands
assert.equal(rawHopFails(['F6 [F6] raw hop failed: raw walk']), 0)
assert.equal(rawHopFails(['F6 [F6] raw hop failed']), 0)
assert.equal(rawHopFails(['F6 [F6] raw hop failed: pathfinder retry']), 0)
assert.equal(rawHopFails(['F6 [F6] raw hop failed: raw walk stalled after 1000ms (d=x) - pathfinder retry']), 0)
assert.equal(rawHopFails(['F6 [F6] raw hop failed: raw walk stalled after 1000ms - pathfinder retry']), 0)
assert.equal(rawHopFails(['F6 [F6] raw hop failed: raw walk: no net progress for 5000ms (d=4.9) - pathfinder retry']), 0)
assert.equal(rawHopFails(['F6 [F6] raw hop failed: raw walk: no net progress for 5000ms (best d=4.9)']), 0)
assert.equal(rawHopFails(['F6 [F6] raw hop failed: raw walk timeout after 1000ms (d=5.0) - pathfinder fallback']), 0)

// the defensive reads
assert.equal(rawHopFails(null), 0)
assert.equal(rawHopFails(undefined), 0)
assert.equal(rawHopFails('junk'), 0)
assert.equal(rawHopFails(42), 0)
assert.equal(rawHopFails([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F3 [F3] raw hop failed: raw walk stalled after 2035ms (d=6.6) - pathfinder retry',
  'F4 [F4] raw hop failed: raw walk: no net progress for 8078ms (best d=4.9) - pathfinder retry',
  'F5 [F5] raw hop failed: raw walk: no net progress for 8154ms (best d=6.0) - pathfinder retry',
  'F14 [F14] raw hop failed: raw walk timeout after 15617ms (d=10.2) - pathfinder retry',
  'F9 [F9] raw hop failed: raw walk timeout after 20315ms (d=21.5) - pathfinder retry'
]
assert.equal(rawHopFails(lines), 5)
const fold = { back: { rawHopFails: rawHopFails(lines) }, prev: { rawHopFails: 30 }, cur: { rawHopFails: 55 } }
assert.equal(rawHopFailTrendRow(fold), SWELL + '5 -> 30 (+25) -> 55 (+25)' + SWELL_TAIL)

console.log('rawhopfailtrend.test: all pins green')
