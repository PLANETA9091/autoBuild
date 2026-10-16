// tests/unit/walkdecidetimeouttrend.test.mjs - THE WALK-LANE'S OWN
// DECIDE-TIMEOUT TREND's own pin battery (v0.976.134): the field's
// own chains byte-exact (THE WHOLE-VOICE BOOK - ALL THIRTY-SEVEN
// windows speak), the tally, the byte-pin battery, the fence battery,
// the cell's own read, the one-parser ride through the census's own
// walk.byWhy['decide-timeout'] cell (the same walk-fail lines the
// walk total's own word and the walk goal-churn's own word hold - the
// cells never merge).
import { walkDecideTimeoutOfCensus, walkDecideTimeoutTrendConsistent, walkDecideTimeoutTrendRow } from '../../src/lib/walkdecidetimeouttrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, this word prices the walk-lane's own decide-timeout mass across the walks - the walk-lane book's own third worded seat, co-existence by seat never by duplication)"

const HEAD = "the walk decide-timeout's own trend (v0.976.134)"
const SWING = HEAD + ": the walk decide-timeout's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const SWELL = HEAD + ": the walk decide-timeout's rise ran two steps deep - "
const SWELL_TAIL = " - the walk decide-timeout's own swell " + TAIL
const FADE = HEAD + ": the walk decide-timeout's fall ran two steps deep - "
const FADE_TAIL = " - the walk decide-timeout's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own walk-lane arithmetic, THIRTY-NINE faces deep) - THE
// CELL'S OWN WEIGHT 886u the faces' own total byte-true vs the
// fire-1200's own 886u witness, THE FIELD'S OWN TOP the face 368's
// own count 74, the +69 the max step's own single bound, the -54 the
// payback's own biggest fall, THE FIELD'S OWN FLOOR the face 359's
// own count 1 - THE WHOLE-VOICE BOOK (NOT ONE zero face).
const P = {}
P[348] = 13
P[349] = 16
P[350] = 22
P[351] = 27
P[352] = 23
P[353] = 4
P[354] = 45
P[355] = 24
P[356] = 22
P[357] = 16
P[358] = 2
P[359] = 1
P[360] = 56
P[361] = 20
P[362] = 16
P[363] = 33
P[364] = 19
P[365] = 12
P[366] = 6
P[367] = 5
P[368] = 74
P[369] = 20
P[370] = 21
P[371] = 22
P[372] = 29
P[373] = 42
P[374] = 25
P[375] = 35
P[376] = 3
P[377] = 21
P[378] = 11
P[379] = 28
P[380] = 10
P[381] = 16
P[382] = 22
P[383] = 26
P[384] = 29
P[385] = 55
P[386] = 15
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 886, 'the cell 886u the witness holds')
const w = (f) => walkDecideTimeoutTrendRow({ back: { walkDecide: P[f - 2] }, prev: { walkDecide: P[f - 1] }, cur: { walkDecide: P[f] } })

// THE FIELD'S OWN TABLE - the priced windows the hand's own
// classification (nineteen swings, nine swells, nine fades - all
// thirty-seven windows speak)
const SWINGS = {
  352: '22 -> 27 (+5) -> 23 (-4)',
  354: '23 -> 4 (-19) -> 45 (+41)',
  355: '4 -> 45 (+41) -> 24 (-21)',
  360: '2 -> 1 (-1) -> 56 (+55)',
  361: '1 -> 56 (+55) -> 20 (-36)',
  363: '20 -> 16 (-4) -> 33 (+17)',
  364: '16 -> 33 (+17) -> 19 (-14)',
  368: '6 -> 5 (-1) -> 74 (+69)',
  369: '5 -> 74 (+69) -> 20 (-54)',
  370: '74 -> 20 (-54) -> 21 (+1)',
  374: '29 -> 42 (+13) -> 25 (-17)',
  375: '42 -> 25 (-17) -> 35 (+10)',
  376: '25 -> 35 (+10) -> 3 (-32)',
  377: '35 -> 3 (-32) -> 21 (+18)',
  378: '3 -> 21 (+18) -> 11 (-10)',
  379: '21 -> 11 (-10) -> 28 (+17)',
  380: '11 -> 28 (+17) -> 10 (-18)',
  381: '28 -> 10 (-18) -> 16 (+6)',
  386: '29 -> 55 (+26) -> 15 (-40)'
}
const SWELLS = {
  350: '13 -> 16 (+3) -> 22 (+6)',
  351: '16 -> 22 (+6) -> 27 (+5)',
  371: '20 -> 21 (+1) -> 22 (+1)',
  372: '21 -> 22 (+1) -> 29 (+7)',
  373: '22 -> 29 (+7) -> 42 (+13)',
  382: '10 -> 16 (+6) -> 22 (+6)',
  383: '16 -> 22 (+6) -> 26 (+4)',
  384: '22 -> 26 (+4) -> 29 (+3)',
  385: '26 -> 29 (+3) -> 55 (+26)'
}
const FADES = {
  353: '27 -> 23 (-4) -> 4 (-19)',
  356: '45 -> 24 (-21) -> 22 (-2)',
  357: '24 -> 22 (-2) -> 16 (-6)',
  358: '22 -> 16 (-6) -> 2 (-14)',
  359: '16 -> 2 (-14) -> 1 (-1)',
  362: '56 -> 20 (-36) -> 16 (-4)',
  365: '33 -> 19 (-14) -> 12 (-7)',
  366: '19 -> 12 (-7) -> 6 (-6)',
  367: '12 -> 6 (-6) -> 5 (-1)'
}

// landmark chains byte-exact full literals
// THE FACE 368 CHAIN THE SWING - THE STORM'S OWN FACE RODE TWO
// WINDOWS (the surge the field's own biggest rise, the payback the
// field's own biggest fall the next window rode)
assert.equal(w(368), SWING + '6 -> 5 (-1) -> 74 (+69)' + SWING_TAIL)
// THE FACE 350 CHAIN THE SWELL - THE FIRST TWO-STEP RISE
assert.equal(w(350), SWELL + '13 -> 16 (+3) -> 22 (+6)' + SWELL_TAIL)
// THE FACE 353 CHAIN THE FADE - THE FIRST TWO-STEP FALL
assert.equal(w(353), FADE + '27 -> 23 (-4) -> 4 (-19)' + FADE_TAIL)
// THE FACE 360 CHAIN THE SWING - THE FLOOR'S OWN EXIT
assert.equal(w(360), SWING + '2 -> 1 (-1) -> 56 (+55)' + SWING_TAIL)
// THE FACE 386 CHAIN THE SWING - THE TAIL'S OWN WINDOW
assert.equal(w(386), SWING + '29 -> 55 (+26) -> 15 (-40)' + SWING_TAIL)

// the whole field rides its table - every window byte-exact
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// the tally - nineteen swings, nine swells, nine fades, ZERO
// silences = ALL THIRTY-SEVEN windows speak (THE WHOLE-VOICE BOOK)
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 19, swell: 9, fade: 9, silence: 0 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
for (const r of [w(368), w(353), w(350)]) {
  for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
    assert.doesNotMatch(r, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  }
}

// THE FENCE - the fold's own image must prove itself
assert.equal(walkDecideTimeoutTrendConsistent(null), false)
assert.equal(walkDecideTimeoutTrendConsistent(undefined), false)
assert.equal(walkDecideTimeoutTrendConsistent('cell'), false)
assert.equal(walkDecideTimeoutTrendConsistent([]), false)
assert.equal(walkDecideTimeoutTrendConsistent({ back: { walkDecide: 0 }, prev: { walkDecide: 0 } }), false)
assert.equal(walkDecideTimeoutTrendConsistent({ back: { walkDecide: 0 }, prev: { walkDecide: 0 }, cur: { walkDecide: 0 } }), true)
assert.equal(walkDecideTimeoutTrendConsistent({ back: { walkDecide: -1 }, prev: { walkDecide: 0 }, cur: { walkDecide: 0 } }), false)
assert.equal(walkDecideTimeoutTrendConsistent({ back: { walkDecide: 1.5 }, prev: { walkDecide: 0 }, cur: { walkDecide: 0 } }), false)
assert.equal(walkDecideTimeoutTrendConsistent({ back: { walkDecide: '3' }, prev: { walkDecide: 0 }, cur: { walkDecide: 0 } }), false)
assert.equal(walkDecideTimeoutTrendConsistent({ back: null, prev: { walkDecide: 0 }, cur: { walkDecide: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(walkDecideTimeoutTrendConsistent({ back: { walkDecide: 0, busy: 1 }, prev: { walkDecide: 2, busy: 1 }, cur: { walkDecide: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(walkDecideTimeoutTrendRow(null), null)
assert.equal(walkDecideTimeoutTrendRow('x'), null)
assert.equal(walkDecideTimeoutTrendRow({ back: { walkDecide: 1 }, prev: { walkDecide: 1 }, cur: { walkDecide: 1 } }), null)

// THE CELL'S OWN READ - walkDecideTimeoutOfCensus rides the census's
// walk.byWhy['decide-timeout'] cell
assert.equal(walkDecideTimeoutOfCensus(null), 0)
assert.equal(walkDecideTimeoutOfCensus(undefined), 0)
assert.equal(walkDecideTimeoutOfCensus([]), 0)
assert.equal(walkDecideTimeoutOfCensus({}), 0)
assert.equal(walkDecideTimeoutOfCensus({ walk: null }), 0)
assert.equal(walkDecideTimeoutOfCensus({ walk: [] }), 0)
assert.equal(walkDecideTimeoutOfCensus({ walk: {} }), 0)
assert.equal(walkDecideTimeoutOfCensus({ walk: { total: 3 } }), 0)
assert.equal(walkDecideTimeoutOfCensus({ walk: { byWhy: null } }), 0)
assert.equal(walkDecideTimeoutOfCensus({ walk: { byWhy: [] } }), 0)
assert.equal(walkDecideTimeoutOfCensus({ walk: { byWhy: {} } }), 0)
assert.equal(walkDecideTimeoutOfCensus({ walk: { byWhy: { 'decide-timeout': 3 } } }), 3)
assert.equal(walkDecideTimeoutOfCensus({ busy: 4 }), 0)
assert.equal(walkDecideTimeoutOfCensus({ walk: { byWhy: { 'decide-timeout': -1 } } }), 0)
assert.equal(walkDecideTimeoutOfCensus({ walk: { byWhy: { 'decide-timeout': 2.5 } } }), 0)
assert.equal(walkDecideTimeoutOfCensus({ walk: { byWhy: { 'decide-timeout': '3' } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// walk.byWhy['decide-timeout'] cell this word prices (the walk.total
// sum the walk total's own trend prices - a different cell, the same
// census, the cells never merge; the machine-unreachable
// decide-timeout SKIN the decide-timeout's own trend prices - a
// different census cell).
const lines = [
  'F14 fuel commons: chest walk failed (Took to long to decide path to goal!)',
  'F10 fuel commons: chest walk failed (The goal was changed by the re-task)'
]
const census = walkFailCensus(lines)
assert.equal(census.walk.total, 2)
assert.equal(census.walk.byWhy['decide-timeout'], 1)
assert.equal(census.walk.byWhy['goal-churn'], 1)
assert.equal(walkDecideTimeoutOfCensus(census), 1)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { walkDecide: walkDecideTimeoutOfCensus(census) }, prev: { walkDecide: 2 }, cur: { walkDecide: 56 } }
assert.equal(walkDecideTimeoutTrendRow(fold), SWELL + '1 -> 2 (+1) -> 56 (+54)' + SWELL_TAIL)

console.log('walkdecidetimeouttrend.test: all pins green')
