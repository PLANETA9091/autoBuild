// tests/unit/walkfuelcommonstrend.test.mjs - THE WALK-LANE'S OWN FUEL
// COMMONS TREND's own pin battery (v0.976.143): the field's own chains
// byte-exact (THE FUEL COMMONS LANE'S OWN BREATH BOOK - the DENSEST
// BOOK THE FAMILY HOLDS, THIRTY-THREE of THIRTY-SEVEN windows
// speaking, the lane never dried), the FOUR honest silences, the
// byte-pin battery, the fence battery, the cell's own read, the
// one-parser ride through the census's own walk.byLane['fuel
// commons'] cell (the same walk-fail lines the walk total's own word
// and the why axis's own seven words hold - a different axis, the
// same census, the cells never merge; the ask book's own torch/smelt
// lanes a different book - the lane seats never merge).
import { walkFuelCommonsOfCensus, walkFuelCommonsTrendConsistent, walkFuelCommonsTrendRow } from '../../src/lib/walkfuelcommonstrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, this word prices the walk-lane's own fuel commons lane's own mass across the walks - the walk-lane book's own ninth worded seat - the lane axis's own first word - the lane axis's own heaviest cell, co-existence by seat never by duplication)"

const HEAD = "the walk fuel commons lane's own trend (v0.976.143)"
const SWING = HEAD + ": the walk fuel commons lane's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const SWELL = HEAD + ": the walk fuel commons lane's rise ran two steps deep - "
const SWELL_TAIL = " - the walk fuel commons lane's own swell " + TAIL
const FADE = HEAD + ": the walk fuel commons lane's fall ran two steps deep - "
const FADE_TAIL = " - the walk fuel commons lane's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own walk-lane lane arithmetic, THIRTY-NINE faces deep) -
// THE CELL'S OWN WEIGHT 770u the faces' own total byte-true vs the
// census's own 1604u sum's own near-half (770 + 503 + 331 = 1604 the
// lane axis's own three cells the sum closed whole), THE FIELD'S OWN
// TOP the face 355's own count 34, the +22 the face 360's own window
// the max rise step's own single bound (the 10 -> 32), the -16 the
// face 353's own window the max fall step's own single bound (the
// 30 -> 14), THE FIELD'S OWN FLOOR the face 353's own count 4 (the
// lane never dried - the field rode ZERO zero faces) - THE FUEL
// COMMONS LANE'S OWN BREATH BOOK (THIRTY-THREE of THIRTY-SEVEN
// windows speaking: TWENTY swings, SIX swells, SEVEN fades, the FOUR
// honest silences beside - the faces 369/370's own 25-hold and the
// faces 380/381's own 20-hold the book's own rests).
const P = {}
P[348] = 21
P[349] = 22
P[350] = 16
P[351] = 30
P[352] = 14
P[353] = 4
P[354] = 24
P[355] = 34
P[356] = 23
P[357] = 16
P[358] = 6
P[359] = 10
P[360] = 32
P[361] = 23
P[362] = 15
P[363] = 21
P[364] = 22
P[365] = 18
P[366] = 13
P[367] = 11
P[368] = 25
P[369] = 25
P[370] = 22
P[371] = 24
P[372] = 22
P[373] = 17
P[374] = 22
P[375] = 26
P[376] = 13
P[377] = 15
P[378] = 24
P[379] = 20
P[380] = 20
P[381] = 18
P[382] = 27
P[383] = 18
P[384] = 19
P[385] = 23
P[386] = 15
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 770, 'the cell 770u the witness holds')
const w = (f) => walkFuelCommonsTrendRow({ back: { walkFuelCommons: P[f - 2] }, prev: { walkFuelCommons: P[f - 1] }, cur: { walkFuelCommons: P[f] } })

// THE FIELD'S OWN TABLE - the priced windows the hand's own
// classification (twenty swings, six swells, seven fades, the FOUR
// held windows the honest silences keep - the family's own sparsest
// silence count)
const SWINGS = {
  350: '21 -> 22 (+1) -> 16 (-6)',
  351: '22 -> 16 (-6) -> 30 (+14)',
  352: '16 -> 30 (+14) -> 14 (-16)',
  354: '14 -> 4 (-10) -> 24 (+20)',
  356: '24 -> 34 (+10) -> 23 (-11)',
  359: '16 -> 6 (-10) -> 10 (+4)',
  361: '10 -> 32 (+22) -> 23 (-9)',
  363: '23 -> 15 (-8) -> 21 (+6)',
  365: '21 -> 22 (+1) -> 18 (-4)',
  368: '13 -> 11 (-2) -> 25 (+14)',
  371: '25 -> 22 (-3) -> 24 (+2)',
  372: '22 -> 24 (+2) -> 22 (-2)',
  374: '22 -> 17 (-5) -> 22 (+5)',
  376: '22 -> 26 (+4) -> 13 (-13)',
  377: '26 -> 13 (-13) -> 15 (+2)',
  379: '15 -> 24 (+9) -> 20 (-4)',
  382: '20 -> 18 (-2) -> 27 (+9)',
  383: '18 -> 27 (+9) -> 18 (-9)',
  384: '27 -> 18 (-9) -> 19 (+1)',
  386: '19 -> 23 (+4) -> 15 (-8)'
}
const SWELLS = {
  355: '4 -> 24 (+20) -> 34 (+10)',
  360: '6 -> 10 (+4) -> 32 (+22)',
  364: '15 -> 21 (+6) -> 22 (+1)',
  375: '17 -> 22 (+5) -> 26 (+4)',
  378: '13 -> 15 (+2) -> 24 (+9)',
  385: '18 -> 19 (+1) -> 23 (+4)'
}
const FADES = {
  353: '30 -> 14 (-16) -> 4 (-10)',
  357: '34 -> 23 (-11) -> 16 (-7)',
  358: '23 -> 16 (-7) -> 6 (-10)',
  362: '32 -> 23 (-9) -> 15 (-8)',
  366: '22 -> 18 (-4) -> 13 (-5)',
  367: '18 -> 13 (-5) -> 11 (-2)',
  373: '24 -> 22 (-2) -> 17 (-5)'
}
const SILENCES = [369, 370, 380, 381]

// landmark chains byte-exact full literals
// THE FACE 355 CHAIN THE SWELL - THE TOP'S OWN BUILD
assert.equal(w(355), SWELL + '4 -> 24 (+20) -> 34 (+10)' + SWELL_TAIL)
// THE FACE 360 CHAIN THE SWELL - THE MAX RISE'S OWN WINDOW
assert.equal(w(360), SWELL + '6 -> 10 (+4) -> 32 (+22)' + SWELL_TAIL)
// THE FACE 353 CHAIN THE FADE - THE FIELD'S OWN DEEPEST DRAIN (the
// floor's own ride)
assert.equal(w(353), FADE + '30 -> 14 (-16) -> 4 (-10)' + FADE_TAIL)
// THE FACE 357 CHAIN THE FADE - THE TOP'S OWN PAYBACK'S FIRST STEP
assert.equal(w(357), FADE + '34 -> 23 (-11) -> 16 (-7)' + FADE_TAIL)
// THE FACE 358 CHAIN THE FADE - THE TOP'S OWN PAYBACK'S LAST STEP
assert.equal(w(358), FADE + '23 -> 16 (-7) -> 6 (-10)' + FADE_TAIL)
// THE FACE 380 WINDOW THE HONEST SILENCE - the 20's own hold (the
// book's own rest)
assert.equal(w(380), null, 'F380 held -> null (the 20-hold)')

// the whole field rides its table - every window byte-exact
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// the honest silences - the FOUR held windows of the priced field
for (const f of SILENCES) assert.equal(w(f), null, 'F' + f + ' held -> null')

// the tally - twenty swings, six swells, seven fades, four silences
// = THIRTY-THREE speaking of THIRTY-SEVEN windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 20, swell: 6, fade: 7, silence: 4 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
for (const r of [w(355), w(353), w(360)]) {
  for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
    assert.doesNotMatch(r, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  }
}

// THE FENCE - the fold's own image must prove itself
assert.equal(walkFuelCommonsTrendConsistent(null), false)
assert.equal(walkFuelCommonsTrendConsistent(undefined), false)
assert.equal(walkFuelCommonsTrendConsistent('cell'), false)
assert.equal(walkFuelCommonsTrendConsistent([]), false)
assert.equal(walkFuelCommonsTrendConsistent({ back: { walkFuelCommons: 0 }, prev: { walkFuelCommons: 0 } }), false)
assert.equal(walkFuelCommonsTrendConsistent({ back: { walkFuelCommons: 0 }, prev: { walkFuelCommons: 0 }, cur: { walkFuelCommons: 0 } }), true)
assert.equal(walkFuelCommonsTrendConsistent({ back: { walkFuelCommons: -1 }, prev: { walkFuelCommons: 0 }, cur: { walkFuelCommons: 0 } }), false)
assert.equal(walkFuelCommonsTrendConsistent({ back: { walkFuelCommons: 1.5 }, prev: { walkFuelCommons: 0 }, cur: { walkFuelCommons: 0 } }), false)
assert.equal(walkFuelCommonsTrendConsistent({ back: { walkFuelCommons: '3' }, prev: { walkFuelCommons: 0 }, cur: { walkFuelCommons: 0 } }), false)
assert.equal(walkFuelCommonsTrendConsistent({ back: null, prev: { walkFuelCommons: 0 }, cur: { walkFuelCommons: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(walkFuelCommonsTrendConsistent({ back: { walkFuelCommons: 0, busy: 1 }, prev: { walkFuelCommons: 2, busy: 1 }, cur: { walkFuelCommons: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(walkFuelCommonsTrendRow(null), null)
assert.equal(walkFuelCommonsTrendRow('x'), null)
assert.equal(walkFuelCommonsTrendRow({ back: { walkFuelCommons: 1 }, prev: { walkFuelCommons: 1 }, cur: { walkFuelCommons: 1 } }), null)

// THE CELL'S OWN READ - walkFuelCommonsOfCensus rides the census's
// walk.byLane['fuel commons'] cell
assert.equal(walkFuelCommonsOfCensus(null), 0)
assert.equal(walkFuelCommonsOfCensus(undefined), 0)
assert.equal(walkFuelCommonsOfCensus([]), 0)
assert.equal(walkFuelCommonsOfCensus({}), 0)
assert.equal(walkFuelCommonsOfCensus({ walk: null }), 0)
assert.equal(walkFuelCommonsOfCensus({ walk: [] }), 0)
assert.equal(walkFuelCommonsOfCensus({ walk: {} }), 0)
assert.equal(walkFuelCommonsOfCensus({ walk: { total: 3 } }), 0)
assert.equal(walkFuelCommonsOfCensus({ walk: { byLane: null } }), 0)
assert.equal(walkFuelCommonsOfCensus({ walk: { byLane: [] } }), 0)
assert.equal(walkFuelCommonsOfCensus({ walk: { byLane: {} } }), 0)
assert.equal(walkFuelCommonsOfCensus({ walk: { byLane: { 'fuel commons': 3 } } }), 3)
assert.equal(walkFuelCommonsOfCensus({ busy: 4 }), 0)
assert.equal(walkFuelCommonsOfCensus({ walk: { byLane: { 'fuel commons': -1 } } }), 0)
assert.equal(walkFuelCommonsOfCensus({ walk: { byLane: { 'fuel commons': 2.5 } } }), 0)
assert.equal(walkFuelCommonsOfCensus({ walk: { byLane: { 'fuel commons': '3' } } }), 0)
// the why axis's own cell rides a different key - the cells never
// merge (the byWhy's own 'fuel commons'-named cell would be a
// different axis)
assert.equal(walkFuelCommonsOfCensus({ walk: { byWhy: { 'fuel commons': 3 } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// walk.byLane['fuel commons'] cell this word prices (the lane the
// line's own first prefix segment; the walk.total sum the walk
// total's own trend prices - a different cell, the same census, the
// cells never merge).
const lines = [
  'F12 fuel commons: chest walk failed (Took to long to decide (fuel commons walk @-119,380))',
  'F16 fuel commons: chest walk failed (No path (fuel commons walk @-128,396))'
]
const census = walkFailCensus(lines)
assert.equal(census.walk.total, 2)
assert.equal(census.walk.byLane['fuel commons'], 2)
assert.equal(census.walk.byWhy['decide-timeout'], 1)
assert.equal(census.walk.byWhy['no-path'], 1)
assert.equal(walkFuelCommonsOfCensus(census), 2)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { walkFuelCommons: walkFuelCommonsOfCensus(census) }, prev: { walkFuelCommons: 5 }, cur: { walkFuelCommons: 0 } }
assert.equal(walkFuelCommonsTrendRow(fold), SWING + '2 -> 5 (+3) -> 0 (-5)' + SWING_TAIL)

console.log('walkfuelcommonstrend.test: all pins green')
