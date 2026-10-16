// tests/unit/walktotaltrend.test.mjs - THE WALK-LANE'S OWN SUM
// TREND's own pin battery (v0.976.133): the field's own chains
// byte-exact (the dense book that never fell silent - THIRTY-FIVE
// speaking windows of THIRTY-SEVEN), the two honest silences, the
// byte-pin battery, the fence battery, the cell's own read, the
// one-parser ride through the census's own walk.total cell (the same
// walk-fail lines the walk goal-churn's own word and the sweep book
// hold - the cells never merge).
import { walkTotalOfCensus, walkTotalTrendConsistent, walkTotalTrendRow } from '../../src/lib/walktotaltrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, this word prices the walk-lane's own sum mass across the walks - the walk-lane book's own second worded seat, co-existence by seat never by duplication)"

const HEAD = "the walk total's own trend (v0.976.133)"
const SWING = HEAD + ": the walk total's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const SWELL = HEAD + ": the walk total's rise ran two steps deep - "
const SWELL_TAIL = " - the walk total's own swell " + TAIL
const FADE = HEAD + ": the walk total's fall ran two steps deep - "
const FADE_TAIL = " - the walk total's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own walk-lane arithmetic, THIRTY-NINE faces deep) - THE
// CELL'S OWN WEIGHT 1604u the faces' own total byte-true vs the
// fire-1200's own 1604u witness, THE FIELD'S OWN TOP the face 368's
// own count 91, the +70 the max step's own single bound, the count
// rode zero NO face - THE DENSE BOOK THAT NEVER FELL SILENT.
const P = {}
P[348] = 31
P[349] = 39
P[350] = 36
P[351] = 47
P[352] = 39
P[353] = 15
P[354] = 50
P[355] = 56
P[356] = 47
P[357] = 27
P[358] = 7
P[359] = 14
P[360] = 78
P[361] = 35
P[362] = 28
P[363] = 49
P[364] = 46
P[365] = 27
P[366] = 18
P[367] = 21
P[368] = 91
P[369] = 34
P[370] = 44
P[371] = 42
P[372] = 69
P[373] = 50
P[374] = 44
P[375] = 49
P[376] = 27
P[377] = 37
P[378] = 38
P[379] = 46
P[380] = 48
P[381] = 38
P[382] = 49
P[383] = 39
P[384] = 39
P[385] = 79
P[386] = 31
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 1604, 'the cell 1604u the witness holds')
const w = (f) => walkTotalTrendRow({ back: { walkTotal: P[f - 2] }, prev: { walkTotal: P[f - 1] }, cur: { walkTotal: P[f] } })

// THE FIELD'S OWN TABLE - the priced windows the hand's own
// classification (twenty-two swings, six swells, seven fades, the
// two held windows the honest silences keep)
const SWINGS = {
  350: '31 -> 39 (+8) -> 36 (-3)',
  351: '39 -> 36 (-3) -> 47 (+11)',
  352: '36 -> 47 (+11) -> 39 (-8)',
  354: '39 -> 15 (-24) -> 50 (+35)',
  356: '50 -> 56 (+6) -> 47 (-9)',
  359: '27 -> 7 (-20) -> 14 (+7)',
  361: '14 -> 78 (+64) -> 35 (-43)',
  363: '35 -> 28 (-7) -> 49 (+21)',
  364: '28 -> 49 (+21) -> 46 (-3)',
  367: '27 -> 18 (-9) -> 21 (+3)',
  369: '21 -> 91 (+70) -> 34 (-57)',
  370: '91 -> 34 (-57) -> 44 (+10)',
  371: '34 -> 44 (+10) -> 42 (-2)',
  372: '44 -> 42 (-2) -> 69 (+27)',
  373: '42 -> 69 (+27) -> 50 (-19)',
  375: '50 -> 44 (-6) -> 49 (+5)',
  376: '44 -> 49 (+5) -> 27 (-22)',
  377: '49 -> 27 (-22) -> 37 (+10)',
  381: '46 -> 48 (+2) -> 38 (-10)',
  382: '48 -> 38 (-10) -> 49 (+11)',
  383: '38 -> 49 (+11) -> 39 (-10)',
  386: '39 -> 79 (+40) -> 31 (-48)'
}
const SWELLS = {
  355: '15 -> 50 (+35) -> 56 (+6)',
  360: '7 -> 14 (+7) -> 78 (+64)',
  368: '18 -> 21 (+3) -> 91 (+70)',
  378: '27 -> 37 (+10) -> 38 (+1)',
  379: '37 -> 38 (+1) -> 46 (+8)',
  380: '38 -> 46 (+8) -> 48 (+2)'
}
const FADES = {
  353: '47 -> 39 (-8) -> 15 (-24)',
  357: '56 -> 47 (-9) -> 27 (-20)',
  358: '47 -> 27 (-20) -> 7 (-20)',
  362: '78 -> 35 (-43) -> 28 (-7)',
  365: '49 -> 46 (-3) -> 27 (-19)',
  366: '46 -> 27 (-19) -> 18 (-9)',
  374: '69 -> 50 (-19) -> 44 (-6)'
}

// landmark chains byte-exact full literals
// THE FACE 368 CHAIN THE SWELL - THE STORM'S OWN FACE RODE TWO
// WINDOWS (the surge the field's own biggest rise, the payback the
// field's own biggest fall the next window rode)
assert.equal(w(368), SWELL + '18 -> 21 (+3) -> 91 (+70)' + SWELL_TAIL)
// THE FACE 355 CHAIN THE SWELL - THE FIRST TWO-STEP RISE
assert.equal(w(355), SWELL + '15 -> 50 (+35) -> 56 (+6)' + SWELL_TAIL)
// THE FACE 353 CHAIN THE FADE - THE FIRST TWO-STEP FALL
assert.equal(w(353), FADE + '47 -> 39 (-8) -> 15 (-24)' + FADE_TAIL)
// THE FACE 350 CHAIN THE SWING - THE FIRST WINDOW
assert.equal(w(350), SWING + '31 -> 39 (+8) -> 36 (-3)' + SWING_TAIL)
// THE FACE 369 CHAIN THE SWING - THE PAYBACK'S OWN BIGGEST FALL
assert.equal(w(369), SWING + '21 -> 91 (+70) -> 34 (-57)' + SWING_TAIL)
// THE FACE 386 CHAIN THE SWING - THE TAIL'S OWN WINDOW
assert.equal(w(386), SWING + '39 -> 79 (+40) -> 31 (-48)' + SWING_TAIL)

// the whole field rides its table - every window byte-exact
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// the honest silences - the two held windows of the priced field
// (the face 384's own window the held second step, the face 385's
// own window the held first step)
assert.equal(w(384), null, 'F384 held -> null')
assert.equal(w(385), null, 'F385 held -> null')

// the tally - twenty-two swings, six swells, seven fades, two
// silences = THIRTY-FIVE speaking of THIRTY-SEVEN windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 22, swell: 6, fade: 7, silence: 2 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
for (const r of [w(368), w(353), w(350)]) {
  for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
    assert.doesNotMatch(r, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  }
}

// THE FENCE - the fold's own image must prove itself
assert.equal(walkTotalTrendConsistent(null), false)
assert.equal(walkTotalTrendConsistent(undefined), false)
assert.equal(walkTotalTrendConsistent('cell'), false)
assert.equal(walkTotalTrendConsistent([]), false)
assert.equal(walkTotalTrendConsistent({ back: { walkTotal: 0 }, prev: { walkTotal: 0 } }), false)
assert.equal(walkTotalTrendConsistent({ back: { walkTotal: 0 }, prev: { walkTotal: 0 }, cur: { walkTotal: 0 } }), true)
assert.equal(walkTotalTrendConsistent({ back: { walkTotal: -1 }, prev: { walkTotal: 0 }, cur: { walkTotal: 0 } }), false)
assert.equal(walkTotalTrendConsistent({ back: { walkTotal: 1.5 }, prev: { walkTotal: 0 }, cur: { walkTotal: 0 } }), false)
assert.equal(walkTotalTrendConsistent({ back: { walkTotal: '3' }, prev: { walkTotal: 0 }, cur: { walkTotal: 0 } }), false)
assert.equal(walkTotalTrendConsistent({ back: null, prev: { walkTotal: 0 }, cur: { walkTotal: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(walkTotalTrendConsistent({ back: { walkTotal: 0, busy: 1 }, prev: { walkTotal: 2, busy: 1 }, cur: { walkTotal: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(walkTotalTrendRow(null), null)
assert.equal(walkTotalTrendRow('x'), null)
assert.equal(walkTotalTrendRow({ back: { walkTotal: 1 }, prev: { walkTotal: 1 }, cur: { walkTotal: 1 } }), null)

// THE CELL'S OWN READ - walkTotalOfCensus rides the census's
// walk.total cell
assert.equal(walkTotalOfCensus(null), 0)
assert.equal(walkTotalOfCensus(undefined), 0)
assert.equal(walkTotalOfCensus([]), 0)
assert.equal(walkTotalOfCensus({}), 0)
assert.equal(walkTotalOfCensus({ walk: null }), 0)
assert.equal(walkTotalOfCensus({ walk: [] }), 0)
assert.equal(walkTotalOfCensus({ walk: {} }), 0)
assert.equal(walkTotalOfCensus({ walk: { byWhy: {} } }), 0)
assert.equal(walkTotalOfCensus({ walk: { total: 3 } }), 3)
assert.equal(walkTotalOfCensus({ busy: 4 }), 0)
assert.equal(walkTotalOfCensus({ walk: { total: -1 } }), 0)
assert.equal(walkTotalOfCensus({ walk: { total: 2.5 } }), 0)
assert.equal(walkTotalOfCensus({ walk: { total: '3' } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the
// census's walk.total sum this word prices (the walk goal-churn's
// own cell the walk goal-churn's own trend prices - a different
// cell, the same census, the cells never merge).
const lines = [
  'F14 fuel commons: chest walk failed (The goal was changed by the re-task)',
  'F10 fuel commons: chest walk failed (No path to the goal!)'
]
const census = walkFailCensus(lines)
assert.equal(census.walk.total, 2)
assert.equal(census.walk.byWhy['goal-churn'], 1)
assert.equal(census.walk.byWhy['no-path'], 1)
assert.equal(walkTotalOfCensus(census), 2)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { walkTotal: walkTotalOfCensus(census) }, prev: { walkTotal: 31 }, cur: { walkTotal: 39 } }
assert.equal(walkTotalTrendRow(fold), SWELL + '2 -> 31 (+29) -> 39 (+8)' + SWELL_TAIL)

console.log('walktotaltrend.test: all pins green')
