// tests/unit/walknopathtrend.test.mjs - THE WALK-LANE'S OWN NO-PATH
// TREND's own pin battery (v0.976.137): the field's own chains
// byte-exact (THE TRADE BOOK - twenty-eight-window swing-heaviest
// word priced THIRTY-FIVE of THIRTY-SEVEN speaking), the two honest
// silences, the byte-pin battery, the fence battery, the cell's own
// read, the one-parser ride through the census's own
// walk.byWhy['no-path'] cell (the same walk-fail lines the walk
// total's own word and the walk decide-timeout's own word hold - the
// cells never merge).
import { walkNoPathOfCensus, walkNoPathTrendConsistent, walkNoPathTrendRow } from '../../src/lib/walknopathtrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, this word prices the walk-lane's own no-path mass across the walks - the walk-lane book's own fourth worded seat, co-existence by seat never by duplication)"

const HEAD = "the walk no-path's own trend (v0.976.137)"
const SWING = HEAD + ": the walk no-path's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const SWELL = HEAD + ": the walk no-path's rise ran two steps deep - "
const SWELL_TAIL = " - the walk no-path's own swell " + TAIL
const FADE = HEAD + ": the walk no-path's fall ran two steps deep - "
const FADE_TAIL = " - the walk no-path's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own walk-lane arithmetic, THIRTY-NINE faces deep) - THE
// CELL'S OWN WEIGHT 393u the faces' own total byte-true vs the
// fire-1200's own 393u witness, THE FIELD'S OWN TOP the face 355's
// own count 30, the +25 the max step's own single bound, the -15 the
// paybacks' own bound, THE FIELD'S OWN FLOOR the twos' own low - THE
// TRADE BOOK (the swing's own lane trades seats nearly every face,
// NOT ONE zero face).
const P = {}
P[348] = 8
P[349] = 16
P[350] = 6
P[351] = 12
P[352] = 7
P[353] = 6
P[354] = 5
P[355] = 30
P[356] = 15
P[357] = 2
P[358] = 3
P[359] = 6
P[360] = 12
P[361] = 8
P[362] = 12
P[363] = 10
P[364] = 18
P[365] = 3
P[366] = 9
P[367] = 9
P[368] = 12
P[369] = 7
P[370] = 9
P[371] = 15
P[372] = 14
P[373] = 5
P[374] = 7
P[375] = 10
P[376] = 11
P[377] = 9
P[378] = 18
P[379] = 9
P[380] = 11
P[381] = 8
P[382] = 17
P[383] = 10
P[384] = 2
P[385] = 14
P[386] = 8
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 393, 'the cell 393u the witness holds')
const w = (f) => walkNoPathTrendRow({ back: { walkNoPath: P[f - 2] }, prev: { walkNoPath: P[f - 1] }, cur: { walkNoPath: P[f] } })

// THE FIELD'S OWN TABLE - the priced windows the hand's own
// classification (twenty-five swings, five swells, five fades, the
// two held windows the honest silences keep)
const SWINGS = {
  350: '8 -> 16 (+8) -> 6 (-10)',
  351: '16 -> 6 (-10) -> 12 (+6)',
  352: '6 -> 12 (+6) -> 7 (-5)',
  355: '6 -> 5 (-1) -> 30 (+25)',
  356: '5 -> 30 (+25) -> 15 (-15)',
  358: '15 -> 2 (-13) -> 3 (+1)',
  361: '6 -> 12 (+6) -> 8 (-4)',
  362: '12 -> 8 (-4) -> 12 (+4)',
  363: '8 -> 12 (+4) -> 10 (-2)',
  364: '12 -> 10 (-2) -> 18 (+8)',
  365: '10 -> 18 (+8) -> 3 (-15)',
  366: '18 -> 3 (-15) -> 9 (+6)',
  369: '9 -> 12 (+3) -> 7 (-5)',
  370: '12 -> 7 (-5) -> 9 (+2)',
  372: '9 -> 15 (+6) -> 14 (-1)',
  374: '14 -> 5 (-9) -> 7 (+2)',
  377: '10 -> 11 (+1) -> 9 (-2)',
  378: '11 -> 9 (-2) -> 18 (+9)',
  379: '9 -> 18 (+9) -> 9 (-9)',
  380: '18 -> 9 (-9) -> 11 (+2)',
  381: '9 -> 11 (+2) -> 8 (-3)',
  382: '11 -> 8 (-3) -> 17 (+9)',
  383: '8 -> 17 (+9) -> 10 (-7)',
  385: '10 -> 2 (-8) -> 14 (+12)',
  386: '2 -> 14 (+12) -> 8 (-6)'
}
const SWELLS = {
  359: '2 -> 3 (+1) -> 6 (+3)',
  360: '3 -> 6 (+3) -> 12 (+6)',
  371: '7 -> 9 (+2) -> 15 (+6)',
  375: '5 -> 7 (+2) -> 10 (+3)',
  376: '7 -> 10 (+3) -> 11 (+1)'
}
const FADES = {
  353: '12 -> 7 (-5) -> 6 (-1)',
  354: '7 -> 6 (-1) -> 5 (-1)',
  357: '30 -> 15 (-15) -> 2 (-13)',
  373: '15 -> 14 (-1) -> 5 (-9)',
  384: '17 -> 10 (-7) -> 2 (-8)'
}

// landmark chains byte-exact full literals
// THE FACE 355 CHAIN THE SWING - THE SPIKE'S OWN FACE (the surge the
// field's own biggest rise)
assert.equal(w(355), SWING + '6 -> 5 (-1) -> 30 (+25)' + SWING_TAIL)
// THE FACE 356 CHAIN THE SWING - THE SPIKE'S OWN PAYBACK
assert.equal(w(356), SWING + '5 -> 30 (+25) -> 15 (-15)' + SWING_TAIL)
// THE FACE 359 CHAIN THE SWELL - THE FLOOR'S OWN EXIT
assert.equal(w(359), SWELL + '2 -> 3 (+1) -> 6 (+3)' + SWELL_TAIL)
// THE FACE 353 CHAIN THE FADE - THE FIRST TWO-STEP FALL
assert.equal(w(353), FADE + '12 -> 7 (-5) -> 6 (-1)' + FADE_TAIL)
// THE FACE 386 CHAIN THE SWING - THE TAIL'S OWN WINDOW
assert.equal(w(386), SWING + '2 -> 14 (+12) -> 8 (-6)' + SWING_TAIL)

// the whole field rides its table - every window byte-exact
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// the honest silences - the two held windows of the priced field
// (the face 367's own window the held second step, the face 368's
// own window the held first step)
assert.equal(w(367), null, 'F367 held -> null')
assert.equal(w(368), null, 'F368 held -> null')

// the tally - twenty-five swings, five swells, five fades, two
// silences = THIRTY-FIVE speaking of THIRTY-SEVEN windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 25, swell: 5, fade: 5, silence: 2 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
for (const r of [w(355), w(353), w(350)]) {
  for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
    assert.doesNotMatch(r, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  }
}

// THE FENCE - the fold's own image must prove itself
assert.equal(walkNoPathTrendConsistent(null), false)
assert.equal(walkNoPathTrendConsistent(undefined), false)
assert.equal(walkNoPathTrendConsistent('cell'), false)
assert.equal(walkNoPathTrendConsistent([]), false)
assert.equal(walkNoPathTrendConsistent({ back: { walkNoPath: 0 }, prev: { walkNoPath: 0 } }), false)
assert.equal(walkNoPathTrendConsistent({ back: { walkNoPath: 0 }, prev: { walkNoPath: 0 }, cur: { walkNoPath: 0 } }), true)
assert.equal(walkNoPathTrendConsistent({ back: { walkNoPath: -1 }, prev: { walkNoPath: 0 }, cur: { walkNoPath: 0 } }), false)
assert.equal(walkNoPathTrendConsistent({ back: { walkNoPath: 1.5 }, prev: { walkNoPath: 0 }, cur: { walkNoPath: 0 } }), false)
assert.equal(walkNoPathTrendConsistent({ back: { walkNoPath: '3' }, prev: { walkNoPath: 0 }, cur: { walkNoPath: 0 } }), false)
assert.equal(walkNoPathTrendConsistent({ back: null, prev: { walkNoPath: 0 }, cur: { walkNoPath: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(walkNoPathTrendConsistent({ back: { walkNoPath: 0, busy: 1 }, prev: { walkNoPath: 2, busy: 1 }, cur: { walkNoPath: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(walkNoPathTrendRow(null), null)
assert.equal(walkNoPathTrendRow('x'), null)
assert.equal(walkNoPathTrendRow({ back: { walkNoPath: 1 }, prev: { walkNoPath: 1 }, cur: { walkNoPath: 1 } }), null)

// THE CELL'S OWN READ - walkNoPathOfCensus rides the census's
// walk.byWhy['no-path'] cell
assert.equal(walkNoPathOfCensus(null), 0)
assert.equal(walkNoPathOfCensus(undefined), 0)
assert.equal(walkNoPathOfCensus([]), 0)
assert.equal(walkNoPathOfCensus({}), 0)
assert.equal(walkNoPathOfCensus({ walk: null }), 0)
assert.equal(walkNoPathOfCensus({ walk: [] }), 0)
assert.equal(walkNoPathOfCensus({ walk: {} }), 0)
assert.equal(walkNoPathOfCensus({ walk: { total: 3 } }), 0)
assert.equal(walkNoPathOfCensus({ walk: { byWhy: null } }), 0)
assert.equal(walkNoPathOfCensus({ walk: { byWhy: [] } }), 0)
assert.equal(walkNoPathOfCensus({ walk: { byWhy: {} } }), 0)
assert.equal(walkNoPathOfCensus({ walk: { byWhy: { 'no-path': 3 } } }), 3)
assert.equal(walkNoPathOfCensus({ busy: 4 }), 0)
assert.equal(walkNoPathOfCensus({ walk: { byWhy: { 'no-path': -1 } } }), 0)
assert.equal(walkNoPathOfCensus({ walk: { byWhy: { 'no-path': 2.5 } } }), 0)
assert.equal(walkNoPathOfCensus({ walk: { byWhy: { 'no-path': '3' } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// walk.byWhy['no-path'] cell this word prices (the walk.total sum the
// walk total's own trend prices - a different cell, the same census,
// the cells never merge; the machine-unreachable no-path SKIN the
// no-path's own trend prices - a different census cell).
const lines = [
  'F10 fuel commons: chest walk failed (No path to the goal!)',
  'F14 fuel commons: chest walk failed (The goal was changed by the re-task)'
]
const census = walkFailCensus(lines)
assert.equal(census.walk.total, 2)
assert.equal(census.walk.byWhy['no-path'], 1)
assert.equal(census.walk.byWhy['goal-churn'], 1)
assert.equal(walkNoPathOfCensus(census), 1)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { walkNoPath: walkNoPathOfCensus(census) }, prev: { walkNoPath: 8 }, cur: { walkNoPath: 16 } }
assert.equal(walkNoPathTrendRow(fold), SWELL + '1 -> 8 (+7) -> 16 (+8)' + SWELL_TAIL)

console.log('walknopathtrend.test: all pins green')
