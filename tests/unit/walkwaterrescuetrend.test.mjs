// tests/unit/walkwaterrescuetrend.test.mjs - THE WALK-LANE'S OWN
// WATER-RESCUE TREND's own pin battery (v0.976.139): the field's own
// chains byte-exact (THE WATER'S OWN PULSE BOOK - SEVEN round trips
// rode the priced windows, the word born speaking TWENTY-TWO of
// THIRTY-SEVEN), the FIFTEEN honest silences, the byte-pin battery,
// the fence battery, the cell's own read, the one-parser ride through
// the census's own walk.byWhy['water-rescue'] cell (the same
// walk-fail lines the walk total's own word and the walk
// decide-timeout's own word and the walk no-path's own word and the
// walk walk-timeout's own word hold - the cells never merge; the
// machine-unreachable water-rescue SKIN the sweep book's own
// water-rescue word prices - a different census cell, the seats never
// merge).
import { walkWaterRescueOfCensus, walkWaterRescueTrendConsistent, walkWaterRescueTrendRow } from '../../src/lib/walkwaterrescuetrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, this word prices the walk-lane's own water-rescue mass across the walks - the walk-lane book's own sixth worded seat, co-existence by seat never by duplication)"

const HEAD = "the walk water-rescue's own trend (v0.976.139)"
const SWING = HEAD + ": the walk water-rescue's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const SWELL = HEAD + ": the walk water-rescue's rise ran two steps deep - "
const SWELL_TAIL = " - the walk water-rescue's own swell " + TAIL
const FADE = HEAD + ": the walk water-rescue's fall ran two steps deep - "
const FADE_TAIL = " - the walk water-rescue's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own walk-lane arithmetic, THIRTY-NINE faces deep) - THE
// CELL'S OWN WEIGHT 62u the faces' own total byte-true vs the
// fire-1200's own 62u witness, THE FIELD'S OWN TOP the face 356's own
// count 7, the +7 the face 356's own window the max step's own single
// bound (the surge the top's own arrival rode - and the window itself
// rode honest-silent, the held 0 -> 0 first step the drought's own
// door kept; the word spoke the surge only when the arc completed in
// the face 357's own window), the -6 the face 357's own window the
// payback's own bound, THE FIELD'S OWN FLOOR the zeros' own eighteen -
// THE WATER'S OWN PULSE BOOK (SEVEN round trips rode the priced
// windows: the faces 350/352/354/375/379/383/386's own
// spike-and-drain chains).
const P = {}
P[348] = 0
P[349] = 2
P[350] = 0
P[351] = 1
P[352] = 0
P[353] = 5
P[354] = 0
P[355] = 0
P[356] = 7
P[357] = 1
P[358] = 1
P[359] = 3
P[360] = 1
P[361] = 1
P[362] = 0
P[363] = 4
P[364] = 3
P[365] = 1
P[366] = 0
P[367] = 0
P[368] = 0
P[369] = 3
P[370] = 5
P[371] = 0
P[372] = 6
P[373] = 2
P[374] = 3
P[375] = 0
P[376] = 0
P[377] = 0
P[378] = 5
P[379] = 0
P[380] = 0
P[381] = 0
P[382] = 3
P[383] = 0
P[384] = 2
P[385] = 3
P[386] = 0
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 62, 'the cell 62u the witness holds')
const w = (f) => walkWaterRescueTrendRow({ back: { walkWaterRescue: P[f - 2] }, prev: { walkWaterRescue: P[f - 1] }, cur: { walkWaterRescue: P[f] } })

// THE FIELD'S OWN TABLE - the priced windows the hand's own
// classification (eighteen swings, two swells, two fades, the FIFTEEN
// held windows the honest silences keep)
const SWINGS = {
  350: '0 -> 2 (+2) -> 0 (-2)',
  351: '2 -> 0 (-2) -> 1 (+1)',
  352: '0 -> 1 (+1) -> 0 (-1)',
  353: '1 -> 0 (-1) -> 5 (+5)',
  354: '0 -> 5 (+5) -> 0 (-5)',
  357: '0 -> 7 (+7) -> 1 (-6)',
  360: '1 -> 3 (+2) -> 1 (-2)',
  363: '1 -> 0 (-1) -> 4 (+4)',
  364: '0 -> 4 (+4) -> 3 (-1)',
  371: '3 -> 5 (+2) -> 0 (-5)',
  372: '5 -> 0 (-5) -> 6 (+6)',
  373: '0 -> 6 (+6) -> 2 (-4)',
  374: '6 -> 2 (-4) -> 3 (+1)',
  375: '2 -> 3 (+1) -> 0 (-3)',
  379: '0 -> 5 (+5) -> 0 (-5)',
  383: '0 -> 3 (+3) -> 0 (-3)',
  384: '3 -> 0 (-3) -> 2 (+2)',
  386: '2 -> 3 (+1) -> 0 (-3)'
}
const SWELLS = {
  370: '0 -> 3 (+3) -> 5 (+2)',
  385: '0 -> 2 (+2) -> 3 (+1)'
}
const FADES = {
  365: '4 -> 3 (-1) -> 1 (-2)',
  366: '3 -> 1 (-2) -> 0 (-1)'
}
const SILENCES = [355, 356, 358, 359, 361, 362, 367, 368, 369, 376, 377, 378, 380, 381, 382]

// landmark chains byte-exact full literals
// THE FACE 357 CHAIN THE SWING - THE TOP'S OWN WINDOW (the surge and
// the payback one window whole - the max step's own single bound)
assert.equal(w(357), SWING + '0 -> 7 (+7) -> 1 (-6)' + SWING_TAIL)
// THE FACE 354 CHAIN THE SWING - THE PULSE'S OWN SPIKE-AND-DRAIN
assert.equal(w(354), SWING + '0 -> 5 (+5) -> 0 (-5)' + SWING_TAIL)
// THE FACE 370 CHAIN THE SWELL - THE FIRST SWELL
assert.equal(w(370), SWELL + '0 -> 3 (+3) -> 5 (+2)' + SWELL_TAIL)
// THE FACE 365 CHAIN THE FADE - THE FIRST FADE
assert.equal(w(365), FADE + '4 -> 3 (-1) -> 1 (-2)' + FADE_TAIL)
// THE FACE 386 CHAIN THE SWING - THE TAIL'S OWN WINDOW
assert.equal(w(386), SWING + '2 -> 3 (+1) -> 0 (-3)' + SWING_TAIL)
// THE FACE 356 WINDOW THE HONEST SILENCE - the top's own arrival rode
// unspeken (the held 0 -> 0 first step the drought's own door kept)
assert.equal(w(356), null, 'F356 held -> null (the top rode in silent)')

// the whole field rides its table - every window byte-exact
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// the honest silences - the FIFTEEN held windows of the priced field
for (const f of SILENCES) assert.equal(w(f), null, 'F' + f + ' held -> null')

// the tally - eighteen swings, two swells, two fades, fifteen
// silences = TWENTY-TWO speaking of THIRTY-SEVEN windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 18, swell: 2, fade: 2, silence: 15 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
for (const r of [w(357), w(365), w(370)]) {
  for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
    assert.doesNotMatch(r, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  }
}

// THE FENCE - the fold's own image must prove itself
assert.equal(walkWaterRescueTrendConsistent(null), false)
assert.equal(walkWaterRescueTrendConsistent(undefined), false)
assert.equal(walkWaterRescueTrendConsistent('cell'), false)
assert.equal(walkWaterRescueTrendConsistent([]), false)
assert.equal(walkWaterRescueTrendConsistent({ back: { walkWaterRescue: 0 }, prev: { walkWaterRescue: 0 } }), false)
assert.equal(walkWaterRescueTrendConsistent({ back: { walkWaterRescue: 0 }, prev: { walkWaterRescue: 0 }, cur: { walkWaterRescue: 0 } }), true)
assert.equal(walkWaterRescueTrendConsistent({ back: { walkWaterRescue: -1 }, prev: { walkWaterRescue: 0 }, cur: { walkWaterRescue: 0 } }), false)
assert.equal(walkWaterRescueTrendConsistent({ back: { walkWaterRescue: 1.5 }, prev: { walkWaterRescue: 0 }, cur: { walkWaterRescue: 0 } }), false)
assert.equal(walkWaterRescueTrendConsistent({ back: { walkWaterRescue: '3' }, prev: { walkWaterRescue: 0 }, cur: { walkWaterRescue: 0 } }), false)
assert.equal(walkWaterRescueTrendConsistent({ back: null, prev: { walkWaterRescue: 0 }, cur: { walkWaterRescue: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(walkWaterRescueTrendConsistent({ back: { walkWaterRescue: 0, busy: 1 }, prev: { walkWaterRescue: 2, busy: 1 }, cur: { walkWaterRescue: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(walkWaterRescueTrendRow(null), null)
assert.equal(walkWaterRescueTrendRow('x'), null)
assert.equal(walkWaterRescueTrendRow({ back: { walkWaterRescue: 1 }, prev: { walkWaterRescue: 1 }, cur: { walkWaterRescue: 1 } }), null)

// THE CELL'S OWN READ - walkWaterRescueOfCensus rides the census's
// walk.byWhy['water-rescue'] cell
assert.equal(walkWaterRescueOfCensus(null), 0)
assert.equal(walkWaterRescueOfCensus(undefined), 0)
assert.equal(walkWaterRescueOfCensus([]), 0)
assert.equal(walkWaterRescueOfCensus({}), 0)
assert.equal(walkWaterRescueOfCensus({ walk: null }), 0)
assert.equal(walkWaterRescueOfCensus({ walk: [] }), 0)
assert.equal(walkWaterRescueOfCensus({ walk: {} }), 0)
assert.equal(walkWaterRescueOfCensus({ walk: { total: 3 } }), 0)
assert.equal(walkWaterRescueOfCensus({ walk: { byWhy: null } }), 0)
assert.equal(walkWaterRescueOfCensus({ walk: { byWhy: [] } }), 0)
assert.equal(walkWaterRescueOfCensus({ walk: { byWhy: {} } }), 0)
assert.equal(walkWaterRescueOfCensus({ walk: { byWhy: { 'water-rescue': 3 } } }), 3)
assert.equal(walkWaterRescueOfCensus({ busy: 4 }), 0)
assert.equal(walkWaterRescueOfCensus({ walk: { byWhy: { 'water-rescue': -1 } } }), 0)
assert.equal(walkWaterRescueOfCensus({ walk: { byWhy: { 'water-rescue': 2.5 } } }), 0)
assert.equal(walkWaterRescueOfCensus({ walk: { byWhy: { 'water-rescue': '3' } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// walk.byWhy['water-rescue'] cell this word prices (the walk.total
// sum the walk total's own trend prices - a different cell, the same
// census, the cells never merge; the machine-unreachable
// water-rescue SKIN the sweep book's own water-rescue word prices -
// a different census cell).
const lines = [
  'F12 fuel commons: chest walk failed (water rescue in progress (fuel commons walk @-119,380 refused))',
  'F16 iron commune: chest walk failed (water rescue in progress (iron commune walk @-128,396 refused))'
]
const census = walkFailCensus(lines)
assert.equal(census.walk.total, 2)
assert.equal(census.walk.byWhy['water-rescue'], 2)
assert.equal(walkWaterRescueOfCensus(census), 2)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { walkWaterRescue: walkWaterRescueOfCensus(census) }, prev: { walkWaterRescue: 5 }, cur: { walkWaterRescue: 0 } }
assert.equal(walkWaterRescueTrendRow(fold), SWING + '2 -> 5 (+3) -> 0 (-5)' + SWING_TAIL)

console.log('walkwaterrescuetrend.test: all pins green')
