// tests/unit/unparsedtrend.test.mjs - THE UNPARSED'S OWN TREND's
// own pin battery (v0.976.130): the field's own chains byte-exact,
// the honest silences, the byte-pin battery, the fence battery, the
// cell's own read, the one-parser ride through the census's own
// sweep.unparsed cell (the same walk-fail lines the sum book and
// the seven skin books hold - the cells never merge).
import { unparsedOfCensus, unparsedTrendConsistent, unparsedTrendRow } from '../../src/lib/unparsedtrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, this word prices the sweep's own unparsed junk mass across the walks - the book's own eighth weight, co-existence by seat never by duplication)"

const HEAD = "the unparsed's own trend (v0.976.130)"
const SWING = HEAD + ": the unparsed's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own arithmetic: all faces rode 0 except 360=2, 377=1,
// 383=1 - THE CELL'S OWN WEIGHT 4 the faces' own total, THE FIELD'S
// OWN TOP 2 THE FACE 360 COUNT (the top count one face held - the
// face 360 the junk's own pair), the +2 the max step's own single
// bound the face 361's own window rode, the -2 the same window's
// own full payback) - the word born speaking THREE windows deep
// (three swings - the round trips' own family) with the THIRTY-FOUR
// honest silences beside - THE CELL'S OWN VOICE.
const P = {}
for (let f = 348; f <= 386; f++) P[f] = 0
P[360] = 2
P[377] = 1
P[383] = 1
const w = (f) => unparsedTrendRow({ back: { unparsed: P[f - 2] }, prev: { unparsed: P[f - 1] }, cur: { unparsed: P[f] } })

// THE FACE 361 CHAIN THE SWING - THE PAIR'S OWN ROUND TRIP (the
// field's own biggest ride - the junk's own arrival paid back the
// very next walk)
assert.equal(w(361), SWING + "0 -> 2 (+2) -> 0 (-2)" + SWING_TAIL)
// THE FACE 378 CHAIN THE SWING - THE WHISPER'S OWN ROUND TRIP
assert.equal(w(378), SWING + "0 -> 1 (+1) -> 0 (-1)" + SWING_TAIL)
// THE FACE 384 CHAIN THE SWING - THE SECOND WHISPER
assert.equal(w(384), SWING + "0 -> 1 (+1) -> 0 (-1)" + SWING_TAIL)

// the honest silences - every other window of the priced field rode
// a held step (the sparse junk book's own law)
for (const f of [350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 379, 380, 381, 382, 383, 385, 386]) {
  assert.equal(w(f), null, 'F' + f + ' held -> null')
}

// the tally - three swings, no swell, no fade = three speaking of
// thirty-seven windows (THE SWELL NEVER RODE and THE FADE NEVER
// RODE - the round-trip book's own law)
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 3, swell: 0, fade: 0, silence: 34 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
const row = w(361)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  assert.doesNotMatch(row, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
}

// THE FENCE - the fold's own image must prove itself
assert.equal(unparsedTrendConsistent(null), false)
assert.equal(unparsedTrendConsistent(undefined), false)
assert.equal(unparsedTrendConsistent('cell'), false)
assert.equal(unparsedTrendConsistent([]), false)
assert.equal(unparsedTrendConsistent({ back: { unparsed: 0 }, prev: { unparsed: 0 } }), false)
assert.equal(unparsedTrendConsistent({ back: { unparsed: 0 }, prev: { unparsed: 0 }, cur: { unparsed: 0 } }), true)
assert.equal(unparsedTrendConsistent({ back: { unparsed: -1 }, prev: { unparsed: 0 }, cur: { unparsed: 0 } }), false)
assert.equal(unparsedTrendConsistent({ back: { unparsed: 1.5 }, prev: { unparsed: 0 }, cur: { unparsed: 0 } }), false)
assert.equal(unparsedTrendConsistent({ back: { unparsed: '3' }, prev: { unparsed: 0 }, cur: { unparsed: 0 } }), false)
assert.equal(unparsedTrendConsistent({ back: null, prev: { unparsed: 0 }, cur: { unparsed: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(unparsedTrendConsistent({ back: { unparsed: 0, busy: 1 }, prev: { unparsed: 2, busy: 1 }, cur: { unparsed: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(unparsedTrendRow(null), null)
assert.equal(unparsedTrendRow('x'), null)
assert.equal(unparsedTrendRow({ back: { unparsed: 1 }, prev: { unparsed: 1 }, cur: { unparsed: 1 } }), null)

// THE CELL'S OWN READ - unparsedOfCensus rides the census's
// sweep.unparsed cell
assert.equal(unparsedOfCensus(null), 0)
assert.equal(unparsedOfCensus(undefined), 0)
assert.equal(unparsedOfCensus([]), 0)
assert.equal(unparsedOfCensus({}), 0)
assert.equal(unparsedOfCensus({ sweep: null }), 0)
assert.equal(unparsedOfCensus({ sweep: [] }), 0)
assert.equal(unparsedOfCensus({ sweep: {} }), 0)
assert.equal(unparsedOfCensus({ sweep: { unparsed: 4 } }), 4)
assert.equal(unparsedOfCensus({ busy: 4 }), 0)
assert.equal(unparsedOfCensus({ sweep: { unparsed: -1 } }), 0)
assert.equal(unparsedOfCensus({ sweep: { unparsed: 2.5 } }), 0)
assert.equal(unparsedOfCensus({ sweep: { unparsed: '3' } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the
// census's sweep.unparsed cell this word prices (the junk rides its
// own seat - the skins' own cells different books the seven skin
// words price, the sum's machinesUnreachable cell a third the sweep
// verdict's own trend prices - the cells never merge). The junk's
// own shape: a histogram pair the comma-split walk could not close
// (the reason carried its own ', ' the xN tail never closed - never
// invented, never dropped).
const lines = [
  'F14 sweep: 0 collected - machine unreachable (walk governor: F14 churned 4 goals) x2',
  'F10 sweep: 0 collected - the reason that carried, its own comma and never closed x1'
]
const census = walkFailCensus(lines)
assert.equal(census.sweep.unparsed, 1)
assert.equal(census.sweep.machinesUnreachable, 2)
assert.equal(unparsedOfCensus(census), 1)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { unparsed: unparsedOfCensus(census) }, prev: { unparsed: 0 }, cur: { unparsed: 1 } }
assert.equal(unparsedTrendRow(fold), SWING + "1 -> 0 (-1) -> 1 (+1)" + SWING_TAIL)

console.log('unparsedtrend.test: all pins green')
