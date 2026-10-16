// tests/unit/walkgovernorrefusaltrend.test.mjs - THE WALK-LANE'S OWN
// GOVERNOR-REFUSAL TREND's own pin battery (v0.976.140): the field's
// own chains byte-exact (THE GOVERNOR'S OWN ON-OFF BOOK - FIVE round
// trips rode the priced windows, the word born speaking FOURTEEN of
// THIRTY-SEVEN), the TWENTY-THREE honest silences, the byte-pin
// battery, the fence battery, the cell's own read, the one-parser
// ride through the census's own walk.byWhy['governor-refusal'] cell
// (the same walk-fail lines the walk total's own word and the walk
// decide-timeout's own word and the walk no-path's own word and the
// walk walk-timeout's own word and the walk water-rescue's own word
// hold - the cells never merge; the machine-unreachable
// governor-refusal SKIN the sweep book's own governor-refusal word
// prices - a different census cell, the seats never merge).
import { walkGovernorRefusalOfCensus, walkGovernorRefusalTrendConsistent, walkGovernorRefusalTrendRow } from '../../src/lib/walkgovernorrefusaltrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, this word prices the walk-lane's own governor-refusal mass across the walks - the walk-lane book's own seventh worded seat, co-existence by seat never by duplication)"

const HEAD = "the walk governor-refusal's own trend (v0.976.140)"
const SWING = HEAD + ": the walk governor-refusal's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const SWELL = HEAD + ": the walk governor-refusal's rise ran two steps deep - "
const SWELL_TAIL = " - the walk governor-refusal's own swell " + TAIL
const FADE = HEAD + ": the walk governor-refusal's fall ran two steps deep - "
const FADE_TAIL = " - the walk governor-refusal's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own walk-lane arithmetic, THIRTY-NINE faces deep) - THE
// CELL'S OWN WEIGHT 48u the faces' own total byte-true vs the
// fire-1200's own 48u witness, THE FIELD'S OWN TOP the count 6 rode
// twice (the faces 365/374's own counts), the +-6 the max step's own
// bound rode four steps deep (the faces 366/374/375's own windows),
// THE FIELD'S OWN FLOOR the zeros' own twenty-five - THE GOVERNOR'S
// OWN ON-OFF BOOK (FIVE round trips rode the priced windows: the
// faces 351/358/375/380/385's own on-then-off chains).
const P = {}
P[348] = 3
P[349] = 0
P[350] = 3
P[351] = 0
P[352] = 0
P[353] = 0
P[354] = 0
P[355] = 0
P[356] = 0
P[357] = 3
P[358] = 0
P[359] = 0
P[360] = 0
P[361] = 0
P[362] = 0
P[363] = 0
P[364] = 5
P[365] = 6
P[366] = 0
P[367] = 0
P[368] = 0
P[369] = 0
P[370] = 3
P[371] = 3
P[372] = 3
P[373] = 0
P[374] = 6
P[375] = 0
P[376] = 0
P[377] = 0
P[378] = 0
P[379] = 2
P[380] = 0
P[381] = 4
P[382] = 1
P[383] = 0
P[384] = 3
P[385] = 0
P[386] = 3
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 48, 'the cell 48u the witness holds')
const w = (f) => walkGovernorRefusalTrendRow({ back: { walkGovernorRefusal: P[f - 2] }, prev: { walkGovernorRefusal: P[f - 1] }, cur: { walkGovernorRefusal: P[f] } })

// THE FIELD'S OWN TABLE - the priced windows the hand's own
// classification (twelve swings, one swell, one fade, the TWENTY-THREE
// held windows the honest silences keep)
const SWINGS = {
  350: '3 -> 0 (-3) -> 3 (+3)',
  351: '0 -> 3 (+3) -> 0 (-3)',
  358: '0 -> 3 (+3) -> 0 (-3)',
  366: '5 -> 6 (+1) -> 0 (-6)',
  374: '3 -> 0 (-3) -> 6 (+6)',
  375: '0 -> 6 (+6) -> 0 (-6)',
  380: '0 -> 2 (+2) -> 0 (-2)',
  381: '2 -> 0 (-2) -> 4 (+4)',
  382: '0 -> 4 (+4) -> 1 (-3)',
  384: '1 -> 0 (-1) -> 3 (+3)',
  385: '0 -> 3 (+3) -> 0 (-3)',
  386: '3 -> 0 (-3) -> 3 (+3)'
}
const SWELLS = {
  365: '0 -> 5 (+5) -> 6 (+1)'
}
const FADES = {
  383: '4 -> 1 (-3) -> 0 (-1)'
}
const SILENCES = [352, 353, 354, 355, 356, 357, 359, 360, 361, 362, 363, 364, 367, 368, 369, 370, 371, 372, 373, 376, 377, 378, 379]

// landmark chains byte-exact full literals
// THE FACE 365 CHAIN THE SWELL - THE TOP'S OWN FIRST ARRIVAL (the
// book's own only swell)
assert.equal(w(365), SWELL + '0 -> 5 (+5) -> 6 (+1)' + SWELL_TAIL)
// THE FACE 383 CHAIN THE FADE - THE BOOK'S OWN ONLY FADE
assert.equal(w(383), FADE + '4 -> 1 (-3) -> 0 (-1)' + FADE_TAIL)
// THE FACE 375 CHAIN THE SWING - THE ROUND TRIP THE TOP'S OWN BOUND
// RODE (the +6 and the -6 one window whole)
assert.equal(w(375), SWING + '0 -> 6 (+6) -> 0 (-6)' + SWING_TAIL)
// THE FACE 366 CHAIN THE SWING - THE TOP'S OWN PAYBACK (the -6 the
// fall's own bound)
assert.equal(w(366), SWING + '5 -> 6 (+1) -> 0 (-6)' + SWING_TAIL)
// THE FACE 386 CHAIN THE SWING - THE TAIL'S OWN WINDOW
assert.equal(w(386), SWING + '3 -> 0 (-3) -> 3 (+3)' + SWING_TAIL)
// THE FACE 357 WINDOW THE HONEST SILENCE - the 3's own arrival rode
// unspoken (the held 0 -> 0 first step the drought's own door kept)
assert.equal(w(357), null, 'F357 held -> null (the arrival rode in silent)')

// the whole field rides its table - every window byte-exact
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// the honest silences - the TWENTY-THREE held windows of the priced field
for (const f of SILENCES) assert.equal(w(f), null, 'F' + f + ' held -> null')

// the tally - twelve swings, one swell, one fade, twenty-three
// silences = FOURTEEN speaking of THIRTY-SEVEN windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 12, swell: 1, fade: 1, silence: 23 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
for (const r of [w(365), w(383), w(375)]) {
  for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
    assert.doesNotMatch(r, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  }
}

// THE FENCE - the fold's own image must prove itself
assert.equal(walkGovernorRefusalTrendConsistent(null), false)
assert.equal(walkGovernorRefusalTrendConsistent(undefined), false)
assert.equal(walkGovernorRefusalTrendConsistent('cell'), false)
assert.equal(walkGovernorRefusalTrendConsistent([]), false)
assert.equal(walkGovernorRefusalTrendConsistent({ back: { walkGovernorRefusal: 0 }, prev: { walkGovernorRefusal: 0 } }), false)
assert.equal(walkGovernorRefusalTrendConsistent({ back: { walkGovernorRefusal: 0 }, prev: { walkGovernorRefusal: 0 }, cur: { walkGovernorRefusal: 0 } }), true)
assert.equal(walkGovernorRefusalTrendConsistent({ back: { walkGovernorRefusal: -1 }, prev: { walkGovernorRefusal: 0 }, cur: { walkGovernorRefusal: 0 } }), false)
assert.equal(walkGovernorRefusalTrendConsistent({ back: { walkGovernorRefusal: 1.5 }, prev: { walkGovernorRefusal: 0 }, cur: { walkGovernorRefusal: 0 } }), false)
assert.equal(walkGovernorRefusalTrendConsistent({ back: { walkGovernorRefusal: '3' }, prev: { walkGovernorRefusal: 0 }, cur: { walkGovernorRefusal: 0 } }), false)
assert.equal(walkGovernorRefusalTrendConsistent({ back: null, prev: { walkGovernorRefusal: 0 }, cur: { walkGovernorRefusal: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(walkGovernorRefusalTrendConsistent({ back: { walkGovernorRefusal: 0, busy: 1 }, prev: { walkGovernorRefusal: 2, busy: 1 }, cur: { walkGovernorRefusal: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(walkGovernorRefusalTrendRow(null), null)
assert.equal(walkGovernorRefusalTrendRow('x'), null)
assert.equal(walkGovernorRefusalTrendRow({ back: { walkGovernorRefusal: 1 }, prev: { walkGovernorRefusal: 1 }, cur: { walkGovernorRefusal: 1 } }), null)

// THE CELL'S OWN READ - walkGovernorRefusalOfCensus rides the
// census's walk.byWhy['governor-refusal'] cell
assert.equal(walkGovernorRefusalOfCensus(null), 0)
assert.equal(walkGovernorRefusalOfCensus(undefined), 0)
assert.equal(walkGovernorRefusalOfCensus([]), 0)
assert.equal(walkGovernorRefusalOfCensus({}), 0)
assert.equal(walkGovernorRefusalOfCensus({ walk: null }), 0)
assert.equal(walkGovernorRefusalOfCensus({ walk: [] }), 0)
assert.equal(walkGovernorRefusalOfCensus({ walk: {} }), 0)
assert.equal(walkGovernorRefusalOfCensus({ walk: { total: 3 } }), 0)
assert.equal(walkGovernorRefusalOfCensus({ walk: { byWhy: null } }), 0)
assert.equal(walkGovernorRefusalOfCensus({ walk: { byWhy: [] } }), 0)
assert.equal(walkGovernorRefusalOfCensus({ walk: { byWhy: {} } }), 0)
assert.equal(walkGovernorRefusalOfCensus({ walk: { byWhy: { 'governor-refusal': 3 } } }), 3)
assert.equal(walkGovernorRefusalOfCensus({ busy: 4 }), 0)
assert.equal(walkGovernorRefusalOfCensus({ walk: { byWhy: { 'governor-refusal': -1 } } }), 0)
assert.equal(walkGovernorRefusalOfCensus({ walk: { byWhy: { 'governor-refusal': 2.5 } } }), 0)
assert.equal(walkGovernorRefusalOfCensus({ walk: { byWhy: { 'governor-refusal': '3' } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// walk.byWhy['governor-refusal'] cell this word prices (the
// walk.total sum the walk total's own trend prices - a different
// cell, the same census, the cells never merge; the machine-unreachable
// governor-refusal SKIN the sweep book's own governor-refusal word
// prices - a different census cell). The real line the face 374's own
// log rode.
const lines = [
  'F18 iron commune: chest walk failed (walk governor: bot churned 4 goals without progress - iron commune walk @-111,415 refused for 12s)',
  'F7 iron commune: chest walk failed (walk governor: bot churned 4 goals without progress - iron commune walk @-121,384 refused for 10s)'
]
const census = walkFailCensus(lines)
assert.equal(census.walk.total, 2)
assert.equal(census.walk.byWhy['governor-refusal'], 2)
assert.equal(walkGovernorRefusalOfCensus(census), 2)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { walkGovernorRefusal: walkGovernorRefusalOfCensus(census) }, prev: { walkGovernorRefusal: 5 }, cur: { walkGovernorRefusal: 0 } }
assert.equal(walkGovernorRefusalTrendRow(fold), SWING + '2 -> 5 (+3) -> 0 (-5)' + SWING_TAIL)

console.log('walkgovernorrefusaltrend.test: all pins green')
