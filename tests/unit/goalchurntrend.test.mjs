// tests/unit/goalchurntrend.test.mjs - THE GOAL-CHURN'S OWN TREND's
// own pin battery (v0.976.129): the field's own chains byte-exact,
// the honest silences, the byte-pin battery, the fence battery, the
// skin's own read, the one-parser ride through the census's own
// sweep.byWhy cell (the same walk-fail lines the sum book and the six
// skin books hold - the cells never merge).
import { goalChurnOfCensus, goalChurnTrendConsistent, goalChurnTrendRow } from '../../src/lib/goalchurntrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, this word prices the machine-unreachable goal-churn skin's own mass across the walks - the book's own seventh weight, co-existence by seat never by duplication)"

const HEAD = "the goal-churn's own trend (v0.976.129)"
const SWING = HEAD + ": the goal-churn's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own arithmetic: 0, 0, 3, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0,
// 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
// 1, 0, 1 - THE SKIN'S OWN WEIGHT 13 the faces' own total byte-true
// vs the fire-0700's own 13u witness, THE FIELD'S OWN TOP 3 the faces
// 350/372 counts, the +3 the max step's own single bound, the -3 the
// round trips' own full payback) - THE ROUND-TRIP BOOK THAT BREATHES
// - the word born speaking SIX windows deep (six swings - the round
// trips' own family) with the THIRTY-ONE honest silences beside -
// THE SKIN'S OWN VOICE.
const P = { 348: 0, 349: 0, 350: 3, 351: 0, 352: 0, 353: 0, 354: 2, 355: 0, 356: 0, 357: 0, 358: 0, 359: 0, 360: 1, 361: 0, 362: 0, 363: 0, 364: 1, 365: 0, 366: 0, 367: 0, 368: 0, 369: 0, 370: 0, 371: 0, 372: 3, 373: 0, 374: 0, 375: 0, 376: 0, 377: 0, 378: 0, 379: 0, 380: 0, 381: 0, 382: 0, 383: 1, 384: 1, 385: 0, 386: 1 }
const w = (f) => goalChurnTrendRow({ back: { goalChurn: P[f - 2] }, prev: { goalChurn: P[f - 1] }, cur: { goalChurn: P[f] } })

// the floor's own open - the FACE 350 the honest silence (the held
// first step before the first round trip)
assert.equal(w(350), null, 'F350 first held -> null')
// THE FACE 351 CHAIN THE SWING - THE ROUND TRIP RODE ONE FACE WHOLE
// (the max step's own single bound the same window held both ends)
assert.equal(w(351), SWING + "0 -> 3 (+3) -> 0 (-3)" + SWING_TAIL)
// the FACE 352/353 the honest silences (the landing's own pair)
assert.equal(w(352), null, 'F352 second held -> null')
assert.equal(w(353), null, 'F353 all held -> null')
// the FACE 354 the honest silence (the held first step)
assert.equal(w(354), null, 'F354 first held -> null')
// THE FACE 355 CHAIN THE SWING - THE SECOND ROUND TRIP
assert.equal(w(355), SWING + "0 -> 2 (+2) -> 0 (-2)" + SWING_TAIL)
// the FACE 356..360 the honest silences (the long quiet's own
// five-silence ride and the held arrival)
for (let f = 356; f <= 360; f++) {
  assert.equal(w(f), null, `F${f} the long quiet -> null`)
}
// THE FACE 361 CHAIN THE SWING - THE WHISPER'S OWN ROUND TRIP
assert.equal(w(361), SWING + "0 -> 1 (+1) -> 0 (-1)" + SWING_TAIL)
// the FACE 362/363 the honest silences
assert.equal(w(362), null, 'F362 second held -> null')
assert.equal(w(363), null, 'F363 all held -> null')
// the FACE 364 the honest silence (the held first step)
assert.equal(w(364), null, 'F364 first held -> null')
// THE FACE 365 CHAIN THE SWING - THE SECOND WHISPER
assert.equal(w(365), SWING + "0 -> 1 (+1) -> 0 (-1)" + SWING_TAIL)
// the FACE 366..372 the honest silences (the long quiet's own
// seven-silence ride and the held arrival)
for (let f = 366; f <= 372; f++) {
  assert.equal(w(f), null, `F${f} the long quiet -> null`)
}
// THE FACE 373 CHAIN THE SWING - THE THIRD ROUND TRIP RODE ONE FACE
// WHOLE (the max step's own second ride)
assert.equal(w(373), SWING + "0 -> 3 (+3) -> 0 (-3)" + SWING_TAIL)
// the FACE 374..383 the honest silences (the long drought's own
// ten-silence ride and the held pair's own open)
for (let f = 374; f <= 383; f++) {
  assert.equal(w(f), null, `F${f} the long drought -> null`)
}
// the FACE 384 the honest silence (the held second step - the pair's
// own hold)
assert.equal(w(384), null, 'F384 second held -> null')
// the FACE 385 the honest silence (the held first step)
assert.equal(w(385), null, 'F385 first held -> null')
// THE FACE 386 CHAIN THE SWING - THE RETURN'S OWN WHISPER
assert.equal(w(386), SWING + "1 -> 0 (-1) -> 1 (+1)" + SWING_TAIL)

// the tally - six swings, no swell, no fade = six speaking of
// thirty-seven windows (THE SWELL NEVER RODE and THE FADE NEVER RODE
// the priced windows - the round-trip book's own law)
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 6, swell: 0, fade: 0, silence: 31 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
const row = w(351)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  assert.doesNotMatch(row, new RegExp(`\\b${banned}\\b`), `byte-pin: ${banned}`)
}

// THE FENCE - the fold's own image must prove itself
assert.equal(goalChurnTrendConsistent(null), false)
assert.equal(goalChurnTrendConsistent(undefined), false)
assert.equal(goalChurnTrendConsistent('skin'), false)
assert.equal(goalChurnTrendConsistent([]), false)
assert.equal(goalChurnTrendConsistent({ back: { goalChurn: 0 }, prev: { goalChurn: 0 } }), false)
assert.equal(goalChurnTrendConsistent({ back: { goalChurn: 0 }, prev: { goalChurn: 0 }, cur: { goalChurn: 0 } }), true)
assert.equal(goalChurnTrendConsistent({ back: { goalChurn: -1 }, prev: { goalChurn: 0 }, cur: { goalChurn: 0 } }), false)
assert.equal(goalChurnTrendConsistent({ back: { goalChurn: 1.5 }, prev: { goalChurn: 0 }, cur: { goalChurn: 0 } }), false)
assert.equal(goalChurnTrendConsistent({ back: { goalChurn: '3' }, prev: { goalChurn: 0 }, cur: { goalChurn: 0 } }), false)
assert.equal(goalChurnTrendConsistent({ back: null, prev: { goalChurn: 0 }, cur: { goalChurn: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(goalChurnTrendConsistent({ back: { goalChurn: 0, busy: 1 }, prev: { goalChurn: 2, busy: 1 }, cur: { goalChurn: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(goalChurnTrendRow(null), null)
assert.equal(goalChurnTrendRow('x'), null)
assert.equal(goalChurnTrendRow({ back: { goalChurn: 1 }, prev: { goalChurn: 1 }, cur: { goalChurn: 1 } }), null)

// THE SKIN'S OWN READ - goalChurnOfCensus rides the census's
// sweep.byWhy cell
const SKIN = 'machine-unreachable-goal-churn'
assert.equal(goalChurnOfCensus(null), 0)
assert.equal(goalChurnOfCensus(undefined), 0)
assert.equal(goalChurnOfCensus([]), 0)
assert.equal(goalChurnOfCensus({}), 0)
assert.equal(goalChurnOfCensus({ sweep: null }), 0)
assert.equal(goalChurnOfCensus({ sweep: [] }), 0)
assert.equal(goalChurnOfCensus({ sweep: {} }), 0)
assert.equal(goalChurnOfCensus({ sweep: { byWhy: null } }), 0)
assert.equal(goalChurnOfCensus({ sweep: { byWhy: [] } }), 0)
assert.equal(goalChurnOfCensus({ sweep: { byWhy: {} } }), 0)
assert.equal(goalChurnOfCensus({ sweep: { byWhy: { [SKIN]: 3, 'machine-unreachable-walk-timeout': 6 } } }), 3)
assert.equal(goalChurnOfCensus({ sweep: { byWhy: { 'machine-unreachable-walk-timeout': 6 } }, busy: 4 }), 0)
assert.equal(goalChurnOfCensus({ sweep: { byWhy: { [SKIN]: -1 } } }), 0)
assert.equal(goalChurnOfCensus({ sweep: { byWhy: { [SKIN]: 2.5 } } }), 0)
assert.equal(goalChurnOfCensus({ sweep: { byWhy: { [SKIN]: '3' } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// sweep.byWhy cell this word prices (the skin rides its own seat, the
// walk-timeout's own cell a different cell the v0.976.125 word
// prices, the sum's machinesUnreachable cell a third cell the sweep
// verdict's own trend prices - the cells never merge). The
// goal-churn's own inner verbatim "The goal was changed" - the
// re-tasking's own prose the churn's own hand spoke.
const lines = [
  'F14 sweep: 0 collected - machine unreachable (The goal was changed x2 mid-walk) x2',
  'F10 sweep: 0 collected - busy x1, machine unreachable (timeout after 15000ms) x3'
]
const census = walkFailCensus(lines)
assert.equal(census.sweep.byWhy[SKIN], 2)
assert.equal(census.sweep.machinesUnreachable, 5)
assert.equal(census.sweep.busy, 1)
assert.equal(goalChurnOfCensus(census), 2)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { goalChurn: goalChurnOfCensus(census) }, prev: { goalChurn: 0 }, cur: { goalChurn: 3 } }
assert.equal(goalChurnTrendRow(fold), SWING + "2 -> 0 (-2) -> 3 (+3)" + SWING_TAIL)

console.log('goalchurntrend.test: all pins green')
