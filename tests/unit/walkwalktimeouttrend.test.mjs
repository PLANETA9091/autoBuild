// tests/unit/walkwalktimeouttrend.test.mjs - THE WALK-LANE'S OWN
// WALK-TIMEOUT TREND's own pin battery (v0.976.138): the field's
// own chains byte-exact (the sparse book that breathes - TWENTY-TWO
// of THIRTY-SEVEN windows speak, six zero faces, the held run the
// faces 376/377/378/379's own 4-count hold rode), the tally, the
// byte-pin battery, the fence battery, the cell's own read, the
// one-parser ride through the census's own walk.byWhy['walk-timeout']
// cell (the same walk-fail lines the walk total's own word and the
// walk no-path's own word hold - the cells never merge).
import { walkWalkTimeoutOfCensus, walkWalkTimeoutTrendConsistent, walkWalkTimeoutTrendRow } from '../../src/lib/walkwalktimeouttrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, this word prices the walk-lane's own walk-timeout mass across the walks - the walk-lane book's own fifth worded seat, co-existence by seat never by duplication)"

const HEAD = "the walk walk-timeout's own trend (v0.976.138)"
const SWING = HEAD + ": the walk walk-timeout's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const SWELL = HEAD + ": the walk walk-timeout's rise ran two steps deep - "
const SWELL_TAIL = " - the walk walk-timeout's own swell " + TAIL
const FADE = HEAD + ": the walk walk-timeout's fall ran two steps deep - "
const FADE_TAIL = " - the walk walk-timeout's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own walk-lane arithmetic, THIRTY-NINE faces deep) - THE
// CELL'S OWN WEIGHT 108u the faces' own total byte-true vs the
// fire-1200's own 108u witness, THE FIELD'S OWN TOP the count 7 rode
// thrice, the +5 the max step's own single bound, the -7 the
// payback's own biggest fall, THE FIELD'S OWN FLOOR the zero (six
// faces rode it).
const P = {}
P[348] = 7
P[349] = 5
P[350] = 2
P[351] = 7
P[352] = 6
P[353] = 0
P[354] = 0
P[355] = 2
P[356] = 3
P[357] = 2
P[358] = 1
P[359] = 1
P[360] = 1
P[361] = 5
P[362] = 0
P[363] = 2
P[364] = 1
P[365] = 4
P[366] = 3
P[367] = 4
P[368] = 2
P[369] = 3
P[370] = 3
P[371] = 2
P[372] = 3
P[373] = 1
P[374] = 3
P[375] = 4
P[376] = 4
P[377] = 4
P[378] = 4
P[379] = 7
P[380] = 0
P[381] = 0
P[382] = 2
P[383] = 3
P[384] = 3
P[385] = 4
P[386] = 0
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 108, 'the cell 108u the witness holds')
const w = (f) => walkWalkTimeoutTrendRow({ back: { walkWalkTimeout: P[f - 2] }, prev: { walkWalkTimeout: P[f - 1] }, cur: { walkWalkTimeout: P[f] } })

// THE FIELD'S OWN TABLE - the priced windows the hand's own
// classification (sixteen swings, three swells, three fades,
// FIFTEEN honest silences)
const SWINGS = {
  351: '5 -> 2 (-3) -> 7 (+5)',
  352: '2 -> 7 (+5) -> 6 (-1)',
  357: '2 -> 3 (+1) -> 2 (-1)',
  362: '1 -> 5 (+4) -> 0 (-5)',
  363: '5 -> 0 (-5) -> 2 (+2)',
  364: '0 -> 2 (+2) -> 1 (-1)',
  365: '2 -> 1 (-1) -> 4 (+3)',
  366: '1 -> 4 (+3) -> 3 (-1)',
  367: '4 -> 3 (-1) -> 4 (+1)',
  368: '3 -> 4 (+1) -> 2 (-2)',
  369: '4 -> 2 (-2) -> 3 (+1)',
  372: '3 -> 2 (-1) -> 3 (+1)',
  373: '2 -> 3 (+1) -> 1 (-2)',
  374: '3 -> 1 (-2) -> 3 (+2)',
  380: '4 -> 7 (+3) -> 0 (-7)',
  386: '3 -> 4 (+1) -> 0 (-4)'
}
const SWELLS = {
  356: '0 -> 2 (+2) -> 3 (+1)',
  375: '1 -> 3 (+2) -> 4 (+1)',
  383: '0 -> 2 (+2) -> 3 (+1)'
}
const FADES = {
  350: '7 -> 5 (-2) -> 2 (-3)',
  353: '7 -> 6 (-1) -> 0 (-6)',
  358: '3 -> 2 (-1) -> 1 (-1)'
}

// landmark chains byte-exact full literals
// THE FACE 380 CHAIN THE SWING - THE SUMMIT'S OWN FULL PAYBACK (the
// top's own 7 fell to the floor's zero in one step)
assert.equal(w(380), SWING + '4 -> 7 (+3) -> 0 (-7)' + SWING_TAIL)
// THE FACE 353 CHAIN THE FADE - THE DRAIN'S OWN TWO-STEP WALK
assert.equal(w(353), FADE + '7 -> 6 (-1) -> 0 (-6)' + FADE_TAIL)
// THE FACE 356 CHAIN THE SWELL - THE FLOOR'S OWN EXIT (the zero's
// own birth)
assert.equal(w(356), SWELL + '0 -> 2 (+2) -> 3 (+1)' + SWELL_TAIL)
// THE FACE 351 CHAIN THE SWING - THE MAX STEP'S OWN RIDE (the +5)
assert.equal(w(351), SWING + '5 -> 2 (-3) -> 7 (+5)' + SWING_TAIL)
// THE FACE 386 CHAIN THE SWING - THE TAIL'S OWN WINDOW
assert.equal(w(386), SWING + '3 -> 4 (+1) -> 0 (-4)' + SWING_TAIL)

// the whole field rides its table - every window byte-exact
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// the tally - sixteen swings, three swells, three fades, FIFTEEN
// honest silences = TWENTY-TWO of THIRTY-SEVEN windows speak (the
// sparse book that breathes)
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 16, swell: 3, fade: 3, silence: 15 })

// THE HELD RUN - the faces 376/377/378/379's own 4-count hold rode
// four windows (the count held 4 across the faces 375..378 four
// faces deep); the silences' own floor rides beside
for (const f of [354, 355, 359, 360, 361, 370, 371, 376, 377, 378, 379, 381, 382, 384, 385]) {
  assert.equal(w(f), null, 'silence F' + f)
}

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
for (const r of [w(380), w(353), w(356), w(386)]) {
  for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
    assert.doesNotMatch(r, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  }
}

// THE FENCE - the fold's own image must prove itself
assert.equal(walkWalkTimeoutTrendConsistent(null), false)
assert.equal(walkWalkTimeoutTrendConsistent(undefined), false)
assert.equal(walkWalkTimeoutTrendConsistent('cell'), false)
assert.equal(walkWalkTimeoutTrendConsistent([]), false)
assert.equal(walkWalkTimeoutTrendConsistent({ back: { walkWalkTimeout: 0 }, prev: { walkWalkTimeout: 0 } }), false)
assert.equal(walkWalkTimeoutTrendConsistent({ back: { walkWalkTimeout: 0 }, prev: { walkWalkTimeout: 0 }, cur: { walkWalkTimeout: 0 } }), true)
assert.equal(walkWalkTimeoutTrendConsistent({ back: { walkWalkTimeout: -1 }, prev: { walkWalkTimeout: 0 }, cur: { walkWalkTimeout: 0 } }), false)
assert.equal(walkWalkTimeoutTrendConsistent({ back: { walkWalkTimeout: 1.5 }, prev: { walkWalkTimeout: 0 }, cur: { walkWalkTimeout: 0 } }), false)
assert.equal(walkWalkTimeoutTrendConsistent({ back: { walkWalkTimeout: '3' }, prev: { walkWalkTimeout: 0 }, cur: { walkWalkTimeout: 0 } }), false)
assert.equal(walkWalkTimeoutTrendConsistent({ back: null, prev: { walkWalkTimeout: 0 }, cur: { walkWalkTimeout: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(walkWalkTimeoutTrendConsistent({ back: { walkWalkTimeout: 0, busy: 1 }, prev: { walkWalkTimeout: 2, busy: 1 }, cur: { walkWalkTimeout: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(walkWalkTimeoutTrendRow(null), null)
assert.equal(walkWalkTimeoutTrendRow('x'), null)
assert.equal(walkWalkTimeoutTrendRow({ back: { walkWalkTimeout: 1 }, prev: { walkWalkTimeout: 1 }, cur: { walkWalkTimeout: 1 } }), null)

// THE CELL'S OWN READ - walkWalkTimeoutOfCensus rides the census's
// walk.byWhy['walk-timeout'] cell
assert.equal(walkWalkTimeoutOfCensus(null), 0)
assert.equal(walkWalkTimeoutOfCensus(undefined), 0)
assert.equal(walkWalkTimeoutOfCensus([]), 0)
assert.equal(walkWalkTimeoutOfCensus({}), 0)
assert.equal(walkWalkTimeoutOfCensus({ walk: null }), 0)
assert.equal(walkWalkTimeoutOfCensus({ walk: [] }), 0)
assert.equal(walkWalkTimeoutOfCensus({ walk: {} }), 0)
assert.equal(walkWalkTimeoutOfCensus({ walk: { total: 3 } }), 0)
assert.equal(walkWalkTimeoutOfCensus({ walk: { byWhy: null } }), 0)
assert.equal(walkWalkTimeoutOfCensus({ walk: { byWhy: [] } }), 0)
assert.equal(walkWalkTimeoutOfCensus({ walk: { byWhy: {} } }), 0)
assert.equal(walkWalkTimeoutOfCensus({ walk: { byWhy: { 'walk-timeout': 3 } } }), 3)
assert.equal(walkWalkTimeoutOfCensus({ busy: 4 }), 0)
assert.equal(walkWalkTimeoutOfCensus({ walk: { byWhy: { 'walk-timeout': -1 } } }), 0)
assert.equal(walkWalkTimeoutOfCensus({ walk: { byWhy: { 'walk-timeout': 2.5 } } }), 0)
assert.equal(walkWalkTimeoutOfCensus({ walk: { byWhy: { 'walk-timeout': '3' } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// walk.byWhy['walk-timeout'] cell this word prices (the no-path cell
// rides the same lines beside - the cells never merge; the
// machine-unreachable walk-timeout SKIN the walk-timeout's own trend
// prices - a different census cell).
const lines = [
  'F14 fuel commons: chest walk failed (timeout after 4500ms)',
  'F10 fuel commons: chest walk failed (No path to the goal!)'
]
const census = walkFailCensus(lines)
assert.equal(census.walk.total, 2)
assert.equal(census.walk.byWhy['walk-timeout'], 1)
assert.equal(census.walk.byWhy['no-path'], 1)
assert.equal(walkWalkTimeoutOfCensus(census), 1)
// the fold rides the census's own cell - the wire's own arithmetic
// (the swing: the rise and the fall traded seats)
const fold = { back: { walkWalkTimeout: walkWalkTimeoutOfCensus(census) }, prev: { walkWalkTimeout: 5 }, cur: { walkWalkTimeout: 2 } }
assert.equal(walkWalkTimeoutTrendRow(fold), SWING + '1 -> 5 (+4) -> 2 (-3)' + SWING_TAIL)
// the swell beside - the fold's own rise ran two steps deep
const foldSwell = { back: { walkWalkTimeout: walkWalkTimeoutOfCensus(census) }, prev: { walkWalkTimeout: 5 }, cur: { walkWalkTimeout: 30 } }
assert.equal(walkWalkTimeoutTrendRow(foldSwell), SWELL + '1 -> 5 (+4) -> 30 (+25)' + SWELL_TAIL)

console.log('walkwalktimeouttrend.test: all pins green')
