// tests/unit/walkgoalchurntrend.test.mjs - THE WALK-LANE'S OWN
// GOAL-CHURN TREND's own pin battery (v0.976.131): the field's own
// chains byte-exact, the honest silences, the byte-pin battery, the
// fence battery, the cell's own read, the one-parser ride through
// the census's own walk.byWhy cell (the same walk-fail lines the
// sweep book and the ledger's own books hold - the cells never
// merge).
import { walkGoalChurnOfCensus, walkGoalChurnTrendConsistent, walkGoalChurnTrendRow } from '../../src/lib/walkgoalchurntrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, this word prices the walk-lane's own goal-churn mass across the walks - the walk-lane book's own first worded seat, co-existence by seat never by duplication)"

const HEAD = "the walk goal-churn's own trend (v0.976.131)"
const SWING = HEAD + ": the walk goal-churn's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own walk-lane arithmetic: all faces rode 0 except
// 360=2, 369=1, 370=1, 377=3, 381=1, 382=1, 385=3, 386=2 - THE
// CELL'S OWN WEIGHT 14 the faces' own total, THE FIELD'S OWN TOP 3
// THE FACES 377/385 COUNTS (the top count two faces held), the +3
// the max step's own single bound the face 378's own window rode,
// the -3 the same window's own full payback) - the word born
// speaking THREE windows deep (three swings - the round trips' own
// family) with the THIRTY-FOUR honest silences beside - THE CELL'S
// OWN VOICE.
const P = {}
for (let f = 348; f <= 386; f++) P[f] = 0
P[360] = 2
P[369] = 1
P[370] = 1
P[377] = 3
P[381] = 1
P[382] = 1
P[385] = 3
P[386] = 2
const w = (f) => walkGoalChurnTrendRow({ back: { goalChurn: P[f - 2] }, prev: { goalChurn: P[f - 1] }, cur: { goalChurn: P[f] } })

// THE FACE 361 CHAIN THE SWING - THE PAIR'S OWN ROUND TRIP
assert.equal(w(361), SWING + "0 -> 2 (+2) -> 0 (-2)" + SWING_TAIL)
// THE FACE 378 CHAIN THE SWING - THE ROUND TRIP RODE ONE FACE WHOLE
// (the field's own biggest ride)
assert.equal(w(378), SWING + "0 -> 3 (+3) -> 0 (-3)" + SWING_TAIL)
// THE FACE 386 CHAIN THE SWING - THE TAIL'S OWN PARTIAL PAYBACK
assert.equal(w(386), SWING + "0 -> 3 (+3) -> 2 (-1)" + SWING_TAIL)

// the honest silences - every other window of the priced field rode
// a held step (the sparse round-trip book's own law)
for (const f of [350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 379, 380, 381, 382, 383, 384, 385]) {
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
assert.equal(walkGoalChurnTrendConsistent(null), false)
assert.equal(walkGoalChurnTrendConsistent(undefined), false)
assert.equal(walkGoalChurnTrendConsistent('cell'), false)
assert.equal(walkGoalChurnTrendConsistent([]), false)
assert.equal(walkGoalChurnTrendConsistent({ back: { goalChurn: 0 }, prev: { goalChurn: 0 } }), false)
assert.equal(walkGoalChurnTrendConsistent({ back: { goalChurn: 0 }, prev: { goalChurn: 0 }, cur: { goalChurn: 0 } }), true)
assert.equal(walkGoalChurnTrendConsistent({ back: { goalChurn: -1 }, prev: { goalChurn: 0 }, cur: { goalChurn: 0 } }), false)
assert.equal(walkGoalChurnTrendConsistent({ back: { goalChurn: 1.5 }, prev: { goalChurn: 0 }, cur: { goalChurn: 0 } }), false)
assert.equal(walkGoalChurnTrendConsistent({ back: { goalChurn: '3' }, prev: { goalChurn: 0 }, cur: { goalChurn: 0 } }), false)
assert.equal(walkGoalChurnTrendConsistent({ back: null, prev: { goalChurn: 0 }, cur: { goalChurn: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(walkGoalChurnTrendConsistent({ back: { goalChurn: 0, busy: 1 }, prev: { goalChurn: 2, busy: 1 }, cur: { goalChurn: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(walkGoalChurnTrendRow(null), null)
assert.equal(walkGoalChurnTrendRow('x'), null)
assert.equal(walkGoalChurnTrendRow({ back: { goalChurn: 1 }, prev: { goalChurn: 1 }, cur: { goalChurn: 1 } }), null)

// THE CELL'S OWN READ - walkGoalChurnOfCensus rides the census's
// walk.byWhy['goal-churn'] cell
assert.equal(walkGoalChurnOfCensus(null), 0)
assert.equal(walkGoalChurnOfCensus(undefined), 0)
assert.equal(walkGoalChurnOfCensus([]), 0)
assert.equal(walkGoalChurnOfCensus({}), 0)
assert.equal(walkGoalChurnOfCensus({ walk: null }), 0)
assert.equal(walkGoalChurnOfCensus({ walk: [] }), 0)
assert.equal(walkGoalChurnOfCensus({ walk: {} }), 0)
assert.equal(walkGoalChurnOfCensus({ walk: { total: 3 } }), 0)
assert.equal(walkGoalChurnOfCensus({ walk: { byWhy: null } }), 0)
assert.equal(walkGoalChurnOfCensus({ walk: { byWhy: [] } }), 0)
assert.equal(walkGoalChurnOfCensus({ walk: { byWhy: {} } }), 0)
assert.equal(walkGoalChurnOfCensus({ walk: { byWhy: { 'goal-churn': 3 } } }), 3)
assert.equal(walkGoalChurnOfCensus({ busy: 4 }), 0)
assert.equal(walkGoalChurnOfCensus({ walk: { byWhy: { 'goal-churn': -1 } } }), 0)
assert.equal(walkGoalChurnOfCensus({ walk: { byWhy: { 'goal-churn': 2.5 } } }), 0)
assert.equal(walkGoalChurnOfCensus({ walk: { byWhy: { 'goal-churn': '3' } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the
// census's walk.byWhy['goal-churn'] cell this word prices (the raw
// lane's own churn the re-task's own hand spoke - the sweep book's
// machine-unreachable goal-churn skin a different cell the
// goal-churn's own trend prices, the commons ledger's own walkFail
// cell a third the starvation's own walk-fail's own trend prices -
// the cells never merge).
const lines = [
  'F14 fuel commons: chest walk failed (The goal was changed by the re-task)',
  'F10 fuel commons: chest walk failed (No path to the goal!)'
]
const census = walkFailCensus(lines)
assert.equal(census.walk.total, 2)
assert.equal(census.walk.byWhy['goal-churn'], 1)
assert.equal(census.walk.byWhy['no-path'], 1)
assert.equal(walkGoalChurnOfCensus(census), 1)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { goalChurn: walkGoalChurnOfCensus(census) }, prev: { goalChurn: 0 }, cur: { goalChurn: 1 } }
assert.equal(walkGoalChurnTrendRow(fold), SWING + "1 -> 0 (-1) -> 1 (+1)" + SWING_TAIL)

console.log('walkgoalchurntrend.test: all pins green')
