// tests/unit/walkfoodcommonstrend.test.mjs - THE WALK-LANE'S OWN FOOD
// COMMONS TREND's own pin battery (v0.976.146): the field's own chains
// byte-exact (THE FOOD COMMONS LANE'S OWN BREATH BOOK - THE FAMILY'S
// OWN SWING HEAD, THIRTY-THREE of THIRTY-SEVEN windows speaking, the
// lane DRIED - the faces 366/367's own back-to-back dry pair the
// drought's own honest witness, the spike's own ONE-WINDOW ROUND
// TRIP the face 369's own window the family never priced), the FOUR
// honest silences, the byte-pin battery, the fence battery, the
// cell's own read, the one-parser ride through the census's own
// walk.byLane['food commons'] cell (the same walk-fail lines the
// walk total's own word, the why axis's own seven words and the fuel
// commons / iron commune lane words hold - a different cell of the
// same axis, the same census, the cells never merge; the ask book's
// own torch/smelt lanes a different book - the lane seats never
// merge).
import { walkFoodCommonsOfCensus, walkFoodCommonsTrendConsistent, walkFoodCommonsTrendRow } from '../../src/lib/walkfoodcommonstrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, this word prices the walk-lane's own food commons lane's own mass across the walks - the walk-lane book's own eleventh worded seat - the lane axis's own third word - the lane axis's own last cell the axis closes whole, co-existence by seat never by duplication)"

const HEAD = "the walk food commons lane's own trend (v0.976.146)"
const SWING = HEAD + ": the walk food commons lane's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const SWELL = HEAD + ": the walk food commons lane's rise ran two steps deep - "
const SWELL_TAIL = " - the walk food commons lane's own swell " + TAIL
const FADE = HEAD + ": the walk food commons lane's fall ran two steps deep - "
const FADE_TAIL = " - the walk food commons lane's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own walk-lane lane arithmetic, THIRTY-NINE faces deep) -
// THE CELL'S OWN WEIGHT 331u the faces' own total byte-true vs the
// census's own 1604u sum's own last cell (770 + 503 + 331 = 1604 the
// lane axis's own three cells the sum closed whole - THIS READ THE
// ANATOMY'S OWN CLOSURE COMPLETES), THE FIELD'S OWN TOP the face
// 368's own count 32, the +32 the face 368's own window's second leg
// the max rise step's own single bound (the 0 -> 32 the spike), the
// -32 the face 369's own window's second leg the max fall step's own
// bound (the 32 -> 0 the payback - THE ONE-WINDOW ROUND TRIP THE
// FAMILY NEVER PRICED the face 369's own window rode both bounds one
// window deep), THE FIELD'S OWN FLOOR the ZERO the faces 366/367's
// own back-to-back dry pair rode (THE FOOD COMMONS' OWN DROUGHT -
// the iron commune's own dry pair the 358/359 faces rode beside, the
// fuel commons lane's own field never priced a zero) and the face
// 369's own zero the spike's own launch pad and the face 379's own
// zero the storm's own bottom - THE FOOD COMMONS LANE'S OWN BREATH
// BOOK (THIRTY-THREE of THIRTY-SEVEN windows speaking: TWENTY-TWO
// swings, FIVE swells, SIX fades, the FOUR honest silences beside -
// THE FAMILY'S OWN SWING HEAD the twenty-two trades the heaviest
// trade book the lane axis holds, the DENSEST book tied the fuel
// commons's thirty-three speaking windows beside).
const P = {}
P[348] = 5
P[349] = 12
P[350] = 10
P[351] = 5
P[352] = 13
P[353] = 3
P[354] = 6
P[355] = 10
P[356] = 13
P[357] = 8
P[358] = 1
P[359] = 4
P[360] = 25
P[361] = 6
P[362] = 6
P[363] = 3
P[364] = 7
P[365] = 3
P[366] = 0
P[367] = 0
P[368] = 32
P[369] = 0
P[370] = 3
P[371] = 8
P[372] = 25
P[373] = 15
P[374] = 8
P[375] = 5
P[376] = 8
P[377] = 4
P[378] = 6
P[379] = 0
P[380] = 18
P[381] = 6
P[382] = 5
P[383] = 9
P[384] = 6
P[385] = 27
P[386] = 6
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 331, 'the cell 331u the witness holds')
const w = (f) => walkFoodCommonsTrendRow({ back: { walkFoodCommons: P[f - 2] }, prev: { walkFoodCommons: P[f - 1] }, cur: { walkFoodCommons: P[f] } })

// THE FIELD'S OWN TABLE - the priced windows the hand's own
// classification (twenty-two swings, five swells, six fades, the
// FOUR held windows the honest silences keep - the top's own silent
// arrival and the drought's own holds beside)
const SWINGS = {
  350: '5 -> 12 (+7) -> 10 (-2)',
  352: '10 -> 5 (-5) -> 13 (+8)',
  353: '5 -> 13 (+8) -> 3 (-10)',
  354: '13 -> 3 (-10) -> 6 (+3)',
  357: '10 -> 13 (+3) -> 8 (-5)',
  359: '8 -> 1 (-7) -> 4 (+3)',
  361: '4 -> 25 (+21) -> 6 (-19)',
  364: '6 -> 3 (-3) -> 7 (+4)',
  365: '3 -> 7 (+4) -> 3 (-4)',
  369: '0 -> 32 (+32) -> 0 (-32)',
  370: '32 -> 0 (-32) -> 3 (+3)',
  373: '8 -> 25 (+17) -> 15 (-10)',
  376: '8 -> 5 (-3) -> 8 (+3)',
  377: '5 -> 8 (+3) -> 4 (-4)',
  378: '8 -> 4 (-4) -> 6 (+2)',
  379: '4 -> 6 (+2) -> 0 (-6)',
  380: '6 -> 0 (-6) -> 18 (+18)',
  381: '0 -> 18 (+18) -> 6 (-12)',
  383: '6 -> 5 (-1) -> 9 (+4)',
  384: '5 -> 9 (+4) -> 6 (-3)',
  385: '9 -> 6 (-3) -> 27 (+21)',
  386: '6 -> 27 (+21) -> 6 (-21)'
}
const SWELLS = {
  355: '3 -> 6 (+3) -> 10 (+4)',
  356: '6 -> 10 (+4) -> 13 (+3)',
  360: '1 -> 4 (+3) -> 25 (+21)',
  371: '0 -> 3 (+3) -> 8 (+5)',
  372: '3 -> 8 (+5) -> 25 (+17)'
}
const FADES = {
  351: '12 -> 10 (-2) -> 5 (-5)',
  358: '13 -> 8 (-5) -> 1 (-7)',
  366: '7 -> 3 (-4) -> 0 (-3)',
  374: '25 -> 15 (-10) -> 8 (-7)',
  375: '15 -> 8 (-7) -> 5 (-3)',
  382: '18 -> 6 (-12) -> 5 (-1)'
}
const SILENCES = [362, 363, 367, 368]

// landmark chains byte-exact full literals
// THE FACE 369 WINDOW THE SWING - THE ONE-WINDOW ROUND TRIP THE
// FAMILY NEVER PRICED (both bounds +-32 one window deep - the spike
// and the vanish traded seats within one window)
assert.equal(w(369), SWING + '0 -> 32 (+32) -> 0 (-32)' + SWING_TAIL)
// THE FACE 366 CHAIN THE FADE - THE DROUGHT'S OWN ENTRY (the dry
// pair's own first face)
assert.equal(w(366), FADE + '7 -> 3 (-4) -> 0 (-3)' + FADE_TAIL)
// THE FACE 372 CHAIN THE SWELL - THE REBUILD'S OWN BIG LEG (the dry
// pair's own wake the rebuild rode)
assert.equal(w(372), SWELL + '3 -> 8 (+5) -> 25 (+17)' + SWELL_TAIL)
// THE FACE 368 WINDOW THE HONEST SILENCE - THE TOP'S OWN SILENT
// ARRIVAL (the held double-zero priced the window's silence, the 32
// the window's second leg the held law kept quiet)
assert.equal(w(368), null, 'F368 held -> null (the top silent arrival)')

// the whole field rides its table - every window byte-exact
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// the honest silences - the FOUR held windows of the priced field
for (const f of SILENCES) assert.equal(w(f), null, 'F' + f + ' held -> null')

// the tally - twenty-two swings, five swells, six fades, four
// silences = THIRTY-THREE speaking of THIRTY-SEVEN windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 22, swell: 5, fade: 6, silence: 4 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
for (const r of [w(369), w(366), w(372)]) {
  for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
    assert.doesNotMatch(r, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  }
}

// THE FENCE - the fold's own image must prove itself
assert.equal(walkFoodCommonsTrendConsistent(null), false)
assert.equal(walkFoodCommonsTrendConsistent(undefined), false)
assert.equal(walkFoodCommonsTrendConsistent('cell'), false)
assert.equal(walkFoodCommonsTrendConsistent([]), false)
assert.equal(walkFoodCommonsTrendConsistent({ back: { walkFoodCommons: 0 }, prev: { walkFoodCommons: 0 } }), false)
assert.equal(walkFoodCommonsTrendConsistent({ back: { walkFoodCommons: 0 }, prev: { walkFoodCommons: 0 }, cur: { walkFoodCommons: 0 } }), true)
assert.equal(walkFoodCommonsTrendConsistent({ back: { walkFoodCommons: -1 }, prev: { walkFoodCommons: 0 }, cur: { walkFoodCommons: 0 } }), false)
assert.equal(walkFoodCommonsTrendConsistent({ back: { walkFoodCommons: 1.5 }, prev: { walkFoodCommons: 0 }, cur: { walkFoodCommons: 0 } }), false)
assert.equal(walkFoodCommonsTrendConsistent({ back: { walkFoodCommons: '3' }, prev: { walkFoodCommons: 0 }, cur: { walkFoodCommons: 0 } }), false)
assert.equal(walkFoodCommonsTrendConsistent({ back: null, prev: { walkFoodCommons: 0 }, cur: { walkFoodCommons: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(walkFoodCommonsTrendConsistent({ back: { walkFoodCommons: 0, busy: 1 }, prev: { walkFoodCommons: 2, busy: 1 }, cur: { walkFoodCommons: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(walkFoodCommonsTrendRow(null), null)
assert.equal(walkFoodCommonsTrendRow('x'), null)
assert.equal(walkFoodCommonsTrendRow({ back: { walkFoodCommons: 1 }, prev: { walkFoodCommons: 1 }, cur: { walkFoodCommons: 1 } }), null)

// THE CELL'S OWN READ - walkFoodCommonsOfCensus rides the census's
// walk.byLane['food commons'] cell
assert.equal(walkFoodCommonsOfCensus(null), 0)
assert.equal(walkFoodCommonsOfCensus(undefined), 0)
assert.equal(walkFoodCommonsOfCensus([]), 0)
assert.equal(walkFoodCommonsOfCensus({}), 0)
assert.equal(walkFoodCommonsOfCensus({ walk: null }), 0)
assert.equal(walkFoodCommonsOfCensus({ walk: [] }), 0)
assert.equal(walkFoodCommonsOfCensus({ walk: {} }), 0)
assert.equal(walkFoodCommonsOfCensus({ walk: { total: 3 } }), 0)
assert.equal(walkFoodCommonsOfCensus({ walk: { byLane: null } }), 0)
assert.equal(walkFoodCommonsOfCensus({ walk: { byLane: [] } }), 0)
assert.equal(walkFoodCommonsOfCensus({ walk: { byLane: {} } }), 0)
assert.equal(walkFoodCommonsOfCensus({ walk: { byLane: { 'food commons': 3 } } }), 3)
assert.equal(walkFoodCommonsOfCensus({ busy: 4 }), 0)
assert.equal(walkFoodCommonsOfCensus({ walk: { byLane: { 'food commons': -1 } } }), 0)
assert.equal(walkFoodCommonsOfCensus({ walk: { byLane: { 'food commons': 2.5 } } }), 0)
assert.equal(walkFoodCommonsOfCensus({ walk: { byLane: { 'food commons': '3' } } }), 0)
// the sibling lanes' own cells ride different keys - the cells never
// merge (the byLane's own 'fuel commons' cell the fuel commons
// lane's own word prices; the 'iron commune' cell the iron commune
// lane's own word prices)
assert.equal(walkFoodCommonsOfCensus({ walk: { byLane: { 'fuel commons': 3 } } }), 0)
assert.equal(walkFoodCommonsOfCensus({ walk: { byLane: { 'iron commune': 3 } } }), 0)
// the why axis's own cell rides a different key - the cells never
// merge (the byWhy's own 'food commons'-named cell would be a
// different axis)
assert.equal(walkFoodCommonsOfCensus({ walk: { byWhy: { 'food commons': 3 } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// walk.byLane['food commons'] cell this word prices (the lane the
// line's own last prefix segment; the walk.total sum the walk
// total's own trend prices - a different cell, the same census, the
// cells never merge).
const lines = [
  'F12 food commons: chest walk failed (Took to long to decide path to goal!)',
  'F16 food commons: chest walk failed (No path (food commons walk @-128,396))'
]
const census = walkFailCensus(lines)
assert.equal(census.walk.total, 2)
assert.equal(census.walk.byLane['food commons'], 2)
assert.equal(census.walk.byWhy['decide-timeout'], 1)
assert.equal(census.walk.byWhy['no-path'], 1)
assert.equal(walkFoodCommonsOfCensus(census), 2)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { walkFoodCommons: walkFoodCommonsOfCensus(census) }, prev: { walkFoodCommons: 5 }, cur: { walkFoodCommons: 0 } }
assert.equal(walkFoodCommonsTrendRow(fold), SWING + '2 -> 5 (+3) -> 0 (-5)' + SWING_TAIL)

console.log('walkfoodcommonstrend.test: all pins green')
