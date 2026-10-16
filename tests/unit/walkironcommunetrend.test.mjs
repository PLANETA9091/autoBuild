// tests/unit/walkironcommunetrend.test.mjs - THE WALK-LANE'S OWN IRON
// COMMUNE TREND's own pin battery (v0.976.145): the field's own chains
// byte-exact (THE IRON COMMUNE LANE'S OWN BREATH BOOK - the SWING BOOK
// THE FAMILY HOLDS, THIRTY-TWO of THIRTY-SEVEN windows speaking, the
// lane DRIED TWICE - the faces 358/359's own back-to-back dry pair the
// drought's own honest witness), the FIVE honest silences, the
// byte-pin battery, the fence battery, the cell's own read, the
// one-parser ride through the census's own walk.byLane['iron
// commune'] cell (the same walk-fail lines the walk total's own word,
// the why axis's own seven words and the fuel commons lane's own word
// hold - a different cell of the same axis, the same census, the
// cells never merge; the ask book's own torch/smelt lanes a different
// book - the lane seats never merge).
import { walkIronCommuneOfCensus, walkIronCommuneTrendConsistent, walkIronCommuneTrendRow } from '../../src/lib/walkironcommunetrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, this word prices the walk-lane's own iron commune lane's own mass across the walks - the walk-lane book's own tenth worded seat - the lane axis's own second word - the lane axis's own middle cell, co-existence by seat never by duplication)"

const HEAD = "the walk iron commune lane's own trend (v0.976.145)"
const SWING = HEAD + ": the walk iron commune lane's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const SWELL = HEAD + ": the walk iron commune lane's rise ran two steps deep - "
const SWELL_TAIL = " - the walk iron commune lane's own swell " + TAIL
const FADE = HEAD + ": the walk iron commune lane's fall ran two steps deep - "
const FADE_TAIL = " - the walk iron commune lane's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own walk-lane lane arithmetic, THIRTY-NINE faces deep) -
// THE CELL'S OWN WEIGHT 503u the faces' own total byte-true vs the
// census's own 1604u sum's own near-third (770 + 503 + 331 = 1604 the
// lane axis's own three cells the sum closed whole), THE FIELD'S OWN
// TOP the face 368's own count 34, the +24 the face 368's own window
// the max rise step's own single bound (the 10 -> 34), the -25 the
// face 369's own window the max fall step's own single bound (the
// 34 -> 9 - the top's own payback the SINGLE-WINDOW TRADE the fuel
// commons lane's own top never rode), THE FIELD'S OWN FLOOR the ZERO
// the faces 358/359's own back-to-back dry pair rode twice (THE LANE
// DRIED TWICE - the fuel commons lane's own field never priced a
// zero; this drought the field's own honest witness) - THE IRON
// COMMUNE LANE'S OWN BREATH BOOK (THIRTY-TWO of THIRTY-SEVEN windows
// speaking: TWENTY-ONE swings, FIVE swells, SIX fades, the FIVE
// honest silences beside - the traded seat the lane's own dominant
// shape).
const P = {}
P[348] = 5
P[349] = 5
P[350] = 10
P[351] = 12
P[352] = 12
P[353] = 8
P[354] = 20
P[355] = 12
P[356] = 11
P[357] = 3
P[358] = 0
P[359] = 0
P[360] = 21
P[361] = 6
P[362] = 7
P[363] = 25
P[364] = 17
P[365] = 6
P[366] = 5
P[367] = 10
P[368] = 34
P[369] = 9
P[370] = 19
P[371] = 10
P[372] = 22
P[373] = 18
P[374] = 14
P[375] = 18
P[376] = 6
P[377] = 18
P[378] = 8
P[379] = 26
P[380] = 10
P[381] = 14
P[382] = 17
P[383] = 12
P[384] = 14
P[385] = 29
P[386] = 10
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 503, 'the cell 503u the witness holds')
const w = (f) => walkIronCommuneTrendRow({ back: { walkIronCommune: P[f - 2] }, prev: { walkIronCommune: P[f - 1] }, cur: { walkIronCommune: P[f] } })

// THE FIELD'S OWN TABLE - the priced windows the hand's own
// classification (twenty-one swings, five swells, six fades, the FIVE
// held windows the honest silences keep - the drought's own holds
// beside the early holds)
const SWINGS = {
  354: '12 -> 8 (-4) -> 20 (+12)',
  355: '8 -> 20 (+12) -> 12 (-8)',
  361: '0 -> 21 (+21) -> 6 (-15)',
  362: '21 -> 6 (-15) -> 7 (+1)',
  364: '7 -> 25 (+18) -> 17 (-8)',
  367: '6 -> 5 (-1) -> 10 (+5)',
  369: '10 -> 34 (+24) -> 9 (-25)',
  370: '34 -> 9 (-25) -> 19 (+10)',
  371: '9 -> 19 (+10) -> 10 (-9)',
  372: '19 -> 10 (-9) -> 22 (+12)',
  373: '10 -> 22 (+12) -> 18 (-4)',
  375: '18 -> 14 (-4) -> 18 (+4)',
  376: '14 -> 18 (+4) -> 6 (-12)',
  377: '18 -> 6 (-12) -> 18 (+12)',
  378: '6 -> 18 (+12) -> 8 (-10)',
  379: '18 -> 8 (-10) -> 26 (+18)',
  380: '8 -> 26 (+18) -> 10 (-16)',
  381: '26 -> 10 (-16) -> 14 (+4)',
  383: '14 -> 17 (+3) -> 12 (-5)',
  384: '17 -> 12 (-5) -> 14 (+2)',
  386: '14 -> 29 (+15) -> 10 (-19)'
}
const SWELLS = {
  351: '5 -> 10 (+5) -> 12 (+2)',
  363: '6 -> 7 (+1) -> 25 (+18)',
  368: '5 -> 10 (+5) -> 34 (+24)',
  382: '10 -> 14 (+4) -> 17 (+3)',
  385: '12 -> 14 (+2) -> 29 (+15)'
}
const FADES = {
  356: '20 -> 12 (-8) -> 11 (-1)',
  357: '12 -> 11 (-1) -> 3 (-8)',
  358: '11 -> 3 (-8) -> 0 (-3)',
  365: '25 -> 17 (-8) -> 6 (-11)',
  366: '17 -> 6 (-11) -> 5 (-1)',
  374: '22 -> 18 (-4) -> 14 (-4)'
}
const SILENCES = [350, 352, 353, 359, 360]

// landmark chains byte-exact full literals
// THE FACE 368 CHAIN THE SWELL - THE TOP'S OWN BUILD (the max rise's
// own window)
assert.equal(w(368), SWELL + '5 -> 10 (+5) -> 34 (+24)' + SWELL_TAIL)
// THE FACE 369 WINDOW THE SWING - THE TOP'S OWN PAYBACK (the max
// fall's own window - the single-window trade)
assert.equal(w(369), SWING + '10 -> 34 (+24) -> 9 (-25)' + SWING_TAIL)
// THE FACE 358 CHAIN THE FADE - THE DROUGHT'S OWN ENTRY (the dry
// pair's own first face)
assert.equal(w(358), FADE + '11 -> 3 (-8) -> 0 (-3)' + FADE_TAIL)
// THE FACE 361 CHAIN THE SWING - THE DROUGHT'S OWN EXIT (the zero's
// own wake the lawful count rode)
assert.equal(w(361), SWING + '0 -> 21 (+21) -> 6 (-15)' + SWING_TAIL)
// THE FACE 360 WINDOW THE HONEST SILENCE - the dry pair's own hold
// (the drought's own wake, the surge waited a window)
assert.equal(w(360), null, 'F360 held -> null (the drought wake)')

// the whole field rides its table - every window byte-exact
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// the honest silences - the FIVE held windows of the priced field
for (const f of SILENCES) assert.equal(w(f), null, 'F' + f + ' held -> null')

// the tally - twenty-one swings, five swells, six fades, five
// silences = THIRTY-TWO speaking of THIRTY-SEVEN windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 21, swell: 5, fade: 6, silence: 5 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
for (const r of [w(368), w(369), w(358)]) {
  for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
    assert.doesNotMatch(r, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  }
}

// THE FENCE - the fold's own image must prove itself
assert.equal(walkIronCommuneTrendConsistent(null), false)
assert.equal(walkIronCommuneTrendConsistent(undefined), false)
assert.equal(walkIronCommuneTrendConsistent('cell'), false)
assert.equal(walkIronCommuneTrendConsistent([]), false)
assert.equal(walkIronCommuneTrendConsistent({ back: { walkIronCommune: 0 }, prev: { walkIronCommune: 0 } }), false)
assert.equal(walkIronCommuneTrendConsistent({ back: { walkIronCommune: 0 }, prev: { walkIronCommune: 0 }, cur: { walkIronCommune: 0 } }), true)
assert.equal(walkIronCommuneTrendConsistent({ back: { walkIronCommune: -1 }, prev: { walkIronCommune: 0 }, cur: { walkIronCommune: 0 } }), false)
assert.equal(walkIronCommuneTrendConsistent({ back: { walkIronCommune: 1.5 }, prev: { walkIronCommune: 0 }, cur: { walkIronCommune: 0 } }), false)
assert.equal(walkIronCommuneTrendConsistent({ back: { walkIronCommune: '3' }, prev: { walkIronCommune: 0 }, cur: { walkIronCommune: 0 } }), false)
assert.equal(walkIronCommuneTrendConsistent({ back: null, prev: { walkIronCommune: 0 }, cur: { walkIronCommune: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(walkIronCommuneTrendConsistent({ back: { walkIronCommune: 0, busy: 1 }, prev: { walkIronCommune: 2, busy: 1 }, cur: { walkIronCommune: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(walkIronCommuneTrendRow(null), null)
assert.equal(walkIronCommuneTrendRow('x'), null)
assert.equal(walkIronCommuneTrendRow({ back: { walkIronCommune: 1 }, prev: { walkIronCommune: 1 }, cur: { walkIronCommune: 1 } }), null)

// THE CELL'S OWN READ - walkIronCommuneOfCensus rides the census's
// walk.byLane['iron commune'] cell
assert.equal(walkIronCommuneOfCensus(null), 0)
assert.equal(walkIronCommuneOfCensus(undefined), 0)
assert.equal(walkIronCommuneOfCensus([]), 0)
assert.equal(walkIronCommuneOfCensus({}), 0)
assert.equal(walkIronCommuneOfCensus({ walk: null }), 0)
assert.equal(walkIronCommuneOfCensus({ walk: [] }), 0)
assert.equal(walkIronCommuneOfCensus({ walk: {} }), 0)
assert.equal(walkIronCommuneOfCensus({ walk: { total: 3 } }), 0)
assert.equal(walkIronCommuneOfCensus({ walk: { byLane: null } }), 0)
assert.equal(walkIronCommuneOfCensus({ walk: { byLane: [] } }), 0)
assert.equal(walkIronCommuneOfCensus({ walk: { byLane: {} } }), 0)
assert.equal(walkIronCommuneOfCensus({ walk: { byLane: { 'iron commune': 3 } } }), 3)
assert.equal(walkIronCommuneOfCensus({ busy: 4 }), 0)
assert.equal(walkIronCommuneOfCensus({ walk: { byLane: { 'iron commune': -1 } } }), 0)
assert.equal(walkIronCommuneOfCensus({ walk: { byLane: { 'iron commune': 2.5 } } }), 0)
assert.equal(walkIronCommuneOfCensus({ walk: { byLane: { 'iron commune': '3' } } }), 0)
// the sibling lane's own cell rides a different key - the cells never
// merge (the byLane's own 'fuel commons' cell the fuel commons lane's
// own word prices; the food commons cell beside)
assert.equal(walkIronCommuneOfCensus({ walk: { byLane: { 'fuel commons': 3 } } }), 0)
assert.equal(walkIronCommuneOfCensus({ walk: { byLane: { 'food commons': 3 } } }), 0)
// the why axis's own cell rides a different key - the cells never
// merge (the byWhy's own 'iron commune'-named cell would be a
// different axis)
assert.equal(walkIronCommuneOfCensus({ walk: { byWhy: { 'iron commune': 3 } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// walk.byLane['iron commune'] cell this word prices (the lane the
// line's own last prefix segment; the walk.total sum the walk
// total's own trend prices - a different cell, the same census, the
// cells never merge).
const lines = [
  'F12 iron commune: chest walk failed (Took to long to decide path to goal!)',
  'F16 iron commune: chest walk failed (No path (iron commune walk @-128,396))'
]
const census = walkFailCensus(lines)
assert.equal(census.walk.total, 2)
assert.equal(census.walk.byLane['iron commune'], 2)
assert.equal(census.walk.byWhy['decide-timeout'], 1)
assert.equal(census.walk.byWhy['no-path'], 1)
assert.equal(walkIronCommuneOfCensus(census), 2)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { walkIronCommune: walkIronCommuneOfCensus(census) }, prev: { walkIronCommune: 5 }, cur: { walkIronCommune: 0 } }
assert.equal(walkIronCommuneTrendRow(fold), SWING + '2 -> 5 (+3) -> 0 (-5)' + SWING_TAIL)

console.log('walkironcommunetrend.test: all pins green')
