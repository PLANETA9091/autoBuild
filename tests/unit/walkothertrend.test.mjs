// tests/unit/walkothertrend.test.mjs - THE WALK-LANE'S OWN OTHER
// TREND's own pin battery (v0.976.141): the field's own chains
// byte-exact (THE OTHER'S OWN FLICKER BOOK - TWO round trips rode one
// window whole + the top's own burst the three-step drain, the word
// born speaking EIGHTEEN of THIRTY-SEVEN), the NINETEEN honest
// silences, the byte-pin battery, the fence battery, the cell's own
// read, the one-parser ride through the census's own
// walk.byWhy['other'] cell (the same walk-fail lines the walk total's
// own word and the walk decide-timeout's own word and the walk
// no-path's own word and the walk walk-timeout's own word and the
// walk water-rescue's own word hold - the cells never merge; the walk
// governor-refusal's own word holds the same lines' governor cell -
// the cells never merge; the machine-unreachable other SKIN the sweep
// book's own other word
// prices - a different census cell, the seats never merge).
import { walkOtherOfCensus, walkOtherTrendConsistent, walkOtherTrendRow } from '../../src/lib/walkothertrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, this word prices the walk-lane's own other mass across the walks - the walk-lane book's own eighth worded seat, co-existence by seat never by duplication)"

const HEAD = "the walk other's own trend (v0.976.141)"
const SWING = HEAD + ": the walk other's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const SWELL = HEAD + ": the walk other's rise ran two steps deep - "
const SWELL_TAIL = " - the walk other's own swell " + TAIL
const FADE = HEAD + ": the walk other's fall ran two steps deep - "
const FADE_TAIL = " - the walk other's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own walk-lane arithmetic, THIRTY-NINE faces deep) - THE
// CELL'S OWN WEIGHT 93u the faces' own total byte-true vs the
// fire-1200's own 93u witness, THE FIELD'S OWN TOP the face 380's own
// count 27 (the burst's own face), the +27 the face 380's own window
// the max step's own single bound (the surge the top's own arrival
// rode - and the window itself rode honest-silent, the held 0 -> 0
// first step the drought's own door kept; the word spoke the burst
// only when the arc continued in the face 381's own window), the -18
// the face 381's own window the payback's own biggest bound, THE
// FIELD'S OWN FLOOR the zeros' own twenty-three - THE OTHER'S OWN
// FLICKER BOOK (TWO round trips rode one window whole: the faces
// 373/377's own spike-and-drain chains; the top's own fall ran three
// steps deep 27 -> 9 -> 3 -> 0 the drain's own three-step walk).
const P = {}
P[348] = 0
P[349] = 0
P[350] = 3
P[351] = 0
P[352] = 3
P[353] = 0
P[354] = 0
P[355] = 0
P[356] = 0
P[357] = 3
P[358] = 0
P[359] = 3
P[360] = 6
P[361] = 1
P[362] = 0
P[363] = 0
P[364] = 0
P[365] = 1
P[366] = 0
P[367] = 3
P[368] = 3
P[369] = 0
P[370] = 2
P[371] = 0
P[372] = 14
P[373] = 0
P[374] = 0
P[375] = 0
P[376] = 9
P[377] = 0
P[378] = 0
P[379] = 0
P[380] = 27
P[381] = 9
P[382] = 3
P[383] = 0
P[384] = 0
P[385] = 0
P[386] = 3
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 93, 'the cell 93u the witness holds')
const w = (f) => walkOtherTrendRow({ back: { walkOther: P[f - 2] }, prev: { walkOther: P[f - 1] }, cur: { walkOther: P[f] } })

// THE FIELD'S OWN TABLE - the priced windows the hand's own
// classification (fourteen swings, one swell, three fades, the
// NINETEEN held windows the honest silences keep)
const SWINGS = {
  351: '0 -> 3 (+3) -> 0 (-3)',
  352: '3 -> 0 (-3) -> 3 (+3)',
  353: '0 -> 3 (+3) -> 0 (-3)',
  358: '0 -> 3 (+3) -> 0 (-3)',
  359: '3 -> 0 (-3) -> 3 (+3)',
  361: '3 -> 6 (+3) -> 1 (-5)',
  366: '0 -> 1 (+1) -> 0 (-1)',
  367: '1 -> 0 (-1) -> 3 (+3)',
  370: '3 -> 0 (-3) -> 2 (+2)',
  371: '0 -> 2 (+2) -> 0 (-2)',
  372: '2 -> 0 (-2) -> 14 (+14)',
  373: '0 -> 14 (+14) -> 0 (-14)',
  377: '0 -> 9 (+9) -> 0 (-9)',
  381: '0 -> 27 (+27) -> 9 (-18)'
}
const SWELLS = {
  360: '0 -> 3 (+3) -> 6 (+3)'
}
const FADES = {
  362: '6 -> 1 (-5) -> 0 (-1)',
  382: '27 -> 9 (-18) -> 3 (-6)',
  383: '9 -> 3 (-6) -> 0 (-3)'
}
const SILENCES = [350, 354, 355, 356, 357, 363, 364, 365, 368, 369, 374, 375, 376, 378, 379, 380, 384, 385, 386]

// landmark chains byte-exact full literals
// THE FACE 381 CHAIN THE SWING - THE TOP'S OWN WINDOW (the burst and
// the payback's own first leg one window whole - the max step's own
// single bound rode the prior window's honest silence)
assert.equal(w(381), SWING + '0 -> 27 (+27) -> 9 (-18)' + SWING_TAIL)
// THE FACE 373 CHAIN THE SWING - THE ROUND TRIP RODE ONE WINDOW WHOLE
assert.equal(w(373), SWING + '0 -> 14 (+14) -> 0 (-14)' + SWING_TAIL)
// THE FACE 377 CHAIN THE SWING - THE SECOND ROUND TRIP ONE WINDOW WHOLE
assert.equal(w(377), SWING + '0 -> 9 (+9) -> 0 (-9)' + SWING_TAIL)
// THE FACE 360 CHAIN THE SWELL - THE ONLY SWELL
assert.equal(w(360), SWELL + '0 -> 3 (+3) -> 6 (+3)' + SWELL_TAIL)
// THE FACE 383 CHAIN THE FADE - THE DRAIN'S OWN LAST STEP
assert.equal(w(383), FADE + '9 -> 3 (-6) -> 0 (-3)' + FADE_TAIL)
// THE FACE 382 CHAIN THE FADE - THE DRAIN'S OWN FIRST STEP
assert.equal(w(382), FADE + '27 -> 9 (-18) -> 3 (-6)' + FADE_TAIL)
// THE FACE 380 WINDOW THE HONEST SILENCE - the top's own arrival rode
// unspeken (the held 0 -> 0 first step the drought's own door kept)
assert.equal(w(380), null, 'F380 held -> null (the top rode in silent)')

// the whole field rides its table - every window byte-exact
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// the honest silences - the NINETEEN held windows of the priced field
for (const f of SILENCES) assert.equal(w(f), null, 'F' + f + ' held -> null')

// the tally - fourteen swings, one swell, three fades, nineteen
// silences = EIGHTEEN speaking of THIRTY-SEVEN windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 14, swell: 1, fade: 3, silence: 19 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
for (const r of [w(381), w(383), w(360)]) {
  for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
    assert.doesNotMatch(r, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  }
}

// THE FENCE - the fold's own image must prove itself
assert.equal(walkOtherTrendConsistent(null), false)
assert.equal(walkOtherTrendConsistent(undefined), false)
assert.equal(walkOtherTrendConsistent('cell'), false)
assert.equal(walkOtherTrendConsistent([]), false)
assert.equal(walkOtherTrendConsistent({ back: { walkOther: 0 }, prev: { walkOther: 0 } }), false)
assert.equal(walkOtherTrendConsistent({ back: { walkOther: 0 }, prev: { walkOther: 0 }, cur: { walkOther: 0 } }), true)
assert.equal(walkOtherTrendConsistent({ back: { walkOther: -1 }, prev: { walkOther: 0 }, cur: { walkOther: 0 } }), false)
assert.equal(walkOtherTrendConsistent({ back: { walkOther: 1.5 }, prev: { walkOther: 0 }, cur: { walkOther: 0 } }), false)
assert.equal(walkOtherTrendConsistent({ back: { walkOther: '3' }, prev: { walkOther: 0 }, cur: { walkOther: 0 } }), false)
assert.equal(walkOtherTrendConsistent({ back: null, prev: { walkOther: 0 }, cur: { walkOther: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(walkOtherTrendConsistent({ back: { walkOther: 0, busy: 1 }, prev: { walkOther: 2, busy: 1 }, cur: { walkOther: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(walkOtherTrendRow(null), null)
assert.equal(walkOtherTrendRow('x'), null)
assert.equal(walkOtherTrendRow({ back: { walkOther: 1 }, prev: { walkOther: 1 }, cur: { walkOther: 1 } }), null)

// THE CELL'S OWN READ - walkOtherOfCensus rides the census's
// walk.byWhy['other'] cell
assert.equal(walkOtherOfCensus(null), 0)
assert.equal(walkOtherOfCensus(undefined), 0)
assert.equal(walkOtherOfCensus([]), 0)
assert.equal(walkOtherOfCensus({}), 0)
assert.equal(walkOtherOfCensus({ walk: null }), 0)
assert.equal(walkOtherOfCensus({ walk: [] }), 0)
assert.equal(walkOtherOfCensus({ walk: {} }), 0)
assert.equal(walkOtherOfCensus({ walk: { total: 3 } }), 0)
assert.equal(walkOtherOfCensus({ walk: { byWhy: null } }), 0)
assert.equal(walkOtherOfCensus({ walk: { byWhy: [] } }), 0)
assert.equal(walkOtherOfCensus({ walk: { byWhy: {} } }), 0)
assert.equal(walkOtherOfCensus({ walk: { byWhy: { other: 3 } } }), 3)
assert.equal(walkOtherOfCensus({ busy: 4 }), 0)
assert.equal(walkOtherOfCensus({ walk: { byWhy: { other: -1 } } }), 0)
assert.equal(walkOtherOfCensus({ walk: { byWhy: { other: 2.5 } } }), 0)
assert.equal(walkOtherOfCensus({ walk: { byWhy: { other: '3' } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// walk.byWhy['other'] cell this word prices (the walk.total sum the
// walk total's own trend prices - a different cell, the same census,
// the cells never merge; the machine-unreachable other SKIN the sweep
// book's own other word prices - a different census cell). The
// generic's own lines: the why vocabulary's own name refused - the
// shapes nobody parsed land in 'other', never dropped.
const lines = [
  'F12 fuel commons: chest walk failed (mystery shape (fuel commons walk @-119,380))',
  'F16 iron commune: chest walk failed (another shape (iron commune walk @-128,396))'
]
const census = walkFailCensus(lines)
assert.equal(census.walk.total, 2)
assert.equal(census.walk.byWhy['other'], 2)
assert.equal(walkOtherOfCensus(census), 2)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { walkOther: walkOtherOfCensus(census) }, prev: { walkOther: 5 }, cur: { walkOther: 0 } }
assert.equal(walkOtherTrendRow(fold), SWING + '2 -> 5 (+3) -> 0 (-5)' + SWING_TAIL)

console.log('walkothertrend.test: all pins green')
