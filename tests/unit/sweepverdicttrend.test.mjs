// tests/unit/sweepverdicttrend.test.mjs - THE SWEEP VERDICT'S OWN
// TREND's own pin battery (v0.976.121): the field's own chains
// byte-exact, the honest silences, the byte-pin battery, the fence
// battery, the verdict's own read, the one-parser ride through the
// census's own sweep cell (the same walk-fail lines the walk lane's
// own book holds - the cells never merge).
import { sweepVerdictOfCensus, sweepVerdictTrendConsistent, sweepVerdictTrendRow } from '../../src/lib/sweepverdicttrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, this word prices the sweep's machine-unreachable verdict mass across the walks, co-existence by seat never by duplication)"

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own arithmetic: 10, 2, 21, 1, 42, 7, 56, 13, 31, 16, 4,
// 14, 63, 27, 15, 12, 26, 0, 0, 0, 99, 0, 11, 6, 28, 0, 3, 6, 22, 5,
// 17, 6, 7, 18, 16, 58, 3, 22, 12 - THE COUNT LEFT ZERO FIVE faces
// deep, THE FIELD'S OWN TOP 99 THE FACE 368 COUNT, the +99 the face
// 369's own 0 -> 99 the burst's own arrival, the -99 the face 370's
// own 99 -> 0 the burst's own full payback the round trip rode two
// faces whole) - the word born speaking THIRTY-FOUR windows deep
// (twenty-seven swings + four swells + three fades) with the THREE
// honest silences beside - THE STORM'S OWN VOICE.
const P = { 348: 10, 349: 2, 350: 21, 351: 1, 352: 42, 353: 7, 354: 56, 355: 13, 356: 31, 357: 16, 358: 4, 359: 14, 360: 63, 361: 27, 362: 15, 363: 12, 364: 26, 365: 0, 366: 0, 367: 0, 368: 99, 369: 0, 370: 11, 371: 6, 372: 28, 373: 0, 374: 3, 375: 6, 376: 22, 377: 5, 378: 17, 379: 6, 380: 7, 381: 18, 382: 16, 383: 58, 384: 3, 385: 22, 386: 12 }
const w = (f) => sweepVerdictTrendRow({ back: { sweepVerdict: P[f - 2] }, prev: { sweepVerdict: P[f - 1] }, cur: { sweepVerdict: P[f] } })

// the birth ride and the storm's own flicker - the FACE 350..357
// chains the swings
assert.equal(w(350), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 10 -> 2 (-8) -> 21 (+19) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(351), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 2 -> 21 (+19) -> 1 (-20) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(352), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 21 -> 1 (-20) -> 42 (+41) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(353), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 1 -> 42 (+41) -> 7 (-35) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(354), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 42 -> 7 (-35) -> 56 (+49) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(355), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 7 -> 56 (+49) -> 13 (-43) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(356), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 56 -> 13 (-43) -> 31 (+18) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(357), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 13 -> 31 (+18) -> 16 (-15) - the rise and the fall traded seats between the walks " + TAIL)
// the FACE 358 chain the fade
assert.equal(w(358), "the sweep verdict's own trend (v0.976.121): the sweep verdict's fall ran two steps deep - 31 -> 16 (-15) -> 4 (-12) - the sweep verdict's own fade " + TAIL)
assert.equal(w(359), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 16 -> 4 (-12) -> 14 (+10) - the rise and the fall traded seats between the walks " + TAIL)
// THE FACE 360 chain the swell
assert.equal(w(360), "the sweep verdict's own trend (v0.976.121): the sweep verdict's rise ran two steps deep - 4 -> 14 (+10) -> 63 (+49) - the sweep verdict's own swell " + TAIL)
assert.equal(w(361), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 14 -> 63 (+49) -> 27 (-36) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(362), "the sweep verdict's own trend (v0.976.121): the sweep verdict's fall ran two steps deep - 63 -> 27 (-36) -> 15 (-12) - the sweep verdict's own fade " + TAIL)
assert.equal(w(363), "the sweep verdict's own trend (v0.976.121): the sweep verdict's fall ran two steps deep - 27 -> 15 (-12) -> 12 (-3) - the sweep verdict's own fade " + TAIL)
assert.equal(w(364), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 15 -> 12 (-3) -> 26 (+14) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(365), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 12 -> 26 (+14) -> 0 (-26) - the rise and the fall traded seats between the walks " + TAIL)
// the drought's own floor - the FACE 366..368 the held run (three
// honest silences)
assert.equal(w(366), null, 'F366 second held -> null')
assert.equal(w(367), null, 'F367 all held -> null')
assert.equal(w(368), null, 'F368 first held -> null')
// THE BURST'S OWN FULL ROUND TRIP - the FACE 369 chain the swing
assert.equal(w(369), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 0 -> 99 (+99) -> 0 (-99) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(370), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 99 -> 0 (-99) -> 11 (+11) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(371), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 0 -> 11 (+11) -> 6 (-5) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(372), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 11 -> 6 (-5) -> 28 (+22) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(373), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 6 -> 28 (+22) -> 0 (-28) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(374), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 28 -> 0 (-28) -> 3 (+3) - the rise and the fall traded seats between the walks " + TAIL)
// the rebuild's own build - the FACE 375/376 chains the swells
assert.equal(w(375), "the sweep verdict's own trend (v0.976.121): the sweep verdict's rise ran two steps deep - 0 -> 3 (+3) -> 6 (+3) - the sweep verdict's own swell " + TAIL)
assert.equal(w(376), "the sweep verdict's own trend (v0.976.121): the sweep verdict's rise ran two steps deep - 3 -> 6 (+3) -> 22 (+16) - the sweep verdict's own swell " + TAIL)
assert.equal(w(377), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 6 -> 22 (+16) -> 5 (-17) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(378), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 22 -> 5 (-17) -> 17 (+12) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(379), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 5 -> 17 (+12) -> 6 (-11) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(380), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 17 -> 6 (-11) -> 7 (+1) - the rise and the fall traded seats between the walks " + TAIL)
// THE FACE 381 chain the swell
assert.equal(w(381), "the sweep verdict's own trend (v0.976.121): the sweep verdict's rise ran two steps deep - 6 -> 7 (+1) -> 18 (+11) - the sweep verdict's own swell " + TAIL)
// the storm's own flicker - the FACE 382..386 chains the swings (the
// 58 ride the word's own live window)
assert.equal(w(382), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 7 -> 18 (+11) -> 16 (-2) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(383), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 18 -> 16 (-2) -> 58 (+42) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(384), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 16 -> 58 (+42) -> 3 (-55) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(385), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 58 -> 3 (-55) -> 22 (+19) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(w(386), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 3 -> 22 (+19) -> 12 (-10) - the rise and the fall traded seats between the walks " + TAIL)

// the tally - twenty-seven swings + four swells + three fades =
// thirty-four speaking of thirty-seven windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 27, swell: 4, fade: 3, silence: 3 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
const row = w(369)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  assert.doesNotMatch(row, new RegExp(`\\b${banned}\\b`), `byte-pin: ${banned}`)
}

// THE FENCE - the fold's own image must prove itself
assert.equal(sweepVerdictTrendConsistent(null), false)
assert.equal(sweepVerdictTrendConsistent(undefined), false)
assert.equal(sweepVerdictTrendConsistent('verdict'), false)
assert.equal(sweepVerdictTrendConsistent([]), false)
assert.equal(sweepVerdictTrendConsistent({ back: { sweepVerdict: 0 }, prev: { sweepVerdict: 0 } }), false)
assert.equal(sweepVerdictTrendConsistent({ back: { sweepVerdict: 0 }, prev: { sweepVerdict: 0 }, cur: { sweepVerdict: 0 } }), true)
assert.equal(sweepVerdictTrendConsistent({ back: { sweepVerdict: -1 }, prev: { sweepVerdict: 0 }, cur: { sweepVerdict: 0 } }), false)
assert.equal(sweepVerdictTrendConsistent({ back: { sweepVerdict: 1.5 }, prev: { sweepVerdict: 0 }, cur: { sweepVerdict: 0 } }), false)
assert.equal(sweepVerdictTrendConsistent({ back: { sweepVerdict: '3' }, prev: { sweepVerdict: 0 }, cur: { sweepVerdict: 0 } }), false)
assert.equal(sweepVerdictTrendConsistent({ back: null, prev: { sweepVerdict: 0 }, cur: { sweepVerdict: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(sweepVerdictTrendConsistent({ back: { sweepVerdict: 0, busy: 1 }, prev: { sweepVerdict: 2, busy: 1 }, cur: { sweepVerdict: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(sweepVerdictTrendRow(null), null)
assert.equal(sweepVerdictTrendRow('x'), null)
assert.equal(sweepVerdictTrendRow({ back: { sweepVerdict: 1 }, prev: { sweepVerdict: 1 }, cur: { sweepVerdict: 1 } }), null)

// THE VERDICT'S OWN READ - sweepVerdictOfCensus rides the census's
// sweep cell
assert.equal(sweepVerdictOfCensus(null), 0)
assert.equal(sweepVerdictOfCensus(undefined), 0)
assert.equal(sweepVerdictOfCensus([]), 0)
assert.equal(sweepVerdictOfCensus({}), 0)
assert.equal(sweepVerdictOfCensus({ sweep: null }), 0)
assert.equal(sweepVerdictOfCensus({ sweep: [] }), 0)
assert.equal(sweepVerdictOfCensus({ sweep: {} }), 0)
assert.equal(sweepVerdictOfCensus({ sweep: { machinesUnreachable: 99, busy: 4 } }), 99)
assert.equal(sweepVerdictOfCensus({ sweep: { machinesUnreachable: -1 } }), 0)
assert.equal(sweepVerdictOfCensus({ sweep: { machinesUnreachable: 2.5 } }), 0)
assert.equal(sweepVerdictOfCensus({ sweep: { machinesUnreachable: '3' } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// sweep.machinesUnreachable cell this word prices (the verdict
// histogram's machine unreachable pairs sum their skins - the
// census's own counting law).
const lines = [
  'F14 sweep: 0 collected - machine unreachable (Took to long to decide path to goal!) x2',
  'F10 sweep: 0 collected - busy x1, machine unreachable (No path to the goal!) x3',
  'F15 sweep: 0 collected (15 idle-empty machines)'
]
const census = walkFailCensus(lines)
assert.equal(census.sweep.machinesUnreachable, 5)
assert.equal(census.sweep.busy, 1)
assert.equal(sweepVerdictOfCensus(census), 5)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { sweepVerdict: sweepVerdictOfCensus(census) }, prev: { sweepVerdict: 0 }, cur: { sweepVerdict: 11 } }
assert.equal(sweepVerdictTrendRow(fold), "the sweep verdict's own trend (v0.976.121): the sweep verdict's own swing - 5 -> 0 (-5) -> 11 (+11) - the rise and the fall traded seats between the walks " + TAIL)

console.log('sweepverdicttrend.test: all pins green')
