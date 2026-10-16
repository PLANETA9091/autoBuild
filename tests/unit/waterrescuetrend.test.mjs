// tests/unit/waterrescuetrend.test.mjs - THE WATER-RESCUE'S OWN TREND's
// own pin battery (v0.976.126): the field's own chains byte-exact, the
// honest silences, the byte-pin battery, the fence battery, the skin's
// own read, the one-parser ride through the census's own sweep.byWhy
// cell (the same walk-fail lines the sum book and the three skin books
// hold - the cells never merge).
import { waterRescueOfCensus, waterRescueTrendConsistent, waterRescueTrendRow } from '../../src/lib/waterrescuetrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, this word prices the machine-unreachable water-rescue skin's own mass across the walks - the book's own fourth weight, co-existence by seat never by duplication)"

const HEAD = "the water-rescue's own trend (v0.976.126)"
const SWING = HEAD + ": the water-rescue's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own arithmetic: 0, 0, 0, 0, 0, 0, 15, 0, 16, 0, 0, 11, 0,
// 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
// 0, 0, 0, 0 - THE SKIN'S OWN WEIGHT 46 the faces' own total byte-true
// vs the fire-0700's own 46u witness, THE FIELD'S OWN TOP 16 THE FACE
// 356 COUNT, the +16 the face 356's own 0 -> 16 the max step's own
// single bound, the -16 the face 357's own 16 -> 0 the top's own full
// payback) - THE SPARSE BOOK THAT BREATHES (the ghost's own precedent
// - the count fell to zero THIRTY-FIVE faces and rose again every
// time) - the word born speaking FIVE windows deep (five swings - the
// round trips' own family) with the THIRTY-TWO honest silences beside
// - THE SKIN'S OWN VOICE.
const P = { 348: 0, 349: 0, 350: 0, 351: 0, 352: 0, 353: 0, 354: 15, 355: 0, 356: 16, 357: 0, 358: 0, 359: 11, 360: 0, 361: 0, 362: 0, 363: 0, 364: 4, 365: 0, 366: 0, 367: 0, 368: 0, 369: 0, 370: 0, 371: 0, 372: 0, 373: 0, 374: 0, 375: 0, 376: 0, 377: 0, 378: 0, 379: 0, 380: 0, 381: 0, 382: 0, 383: 0, 384: 0, 385: 0, 386: 0 }
const w = (f) => waterRescueTrendRow({ back: { waterRescue: P[f - 2] }, prev: { waterRescue: P[f - 1] }, cur: { waterRescue: P[f] } })

// the floor's own open - the FACE 350..354 the honest silences (the
// drought's own five-silence ride before the first burst)
assert.equal(w(350), null, 'F350 all held -> null')
assert.equal(w(351), null, 'F351 all held -> null')
assert.equal(w(352), null, 'F352 all held -> null')
assert.equal(w(353), null, 'F353 all held -> null')
assert.equal(w(354), null, 'F354 first held -> null')
// THE FACE 355 CHAIN THE SWING - THE BURST'S OWN FULL ROUND TRIP (the
// spike's own full circle the same window held both ends)
assert.equal(w(355), SWING + "0 -> 15 (+15) -> 0 (-15)" + SWING_TAIL)
// THE FACE 356 CHAIN THE SWING - THE RELAY'S OWN HANDOFF (THE FIELD'S
// OWN TOP 16 the spike traded faces and came back bigger)
assert.equal(w(356), SWING + "15 -> 0 (-15) -> 16 (+16)" + SWING_TAIL)
// THE FACE 357 CHAIN THE SWING - THE TOP'S OWN FULL PAYBACK
assert.equal(w(357), SWING + "0 -> 16 (+16) -> 0 (-16)" + SWING_TAIL)
// the FACE 358/359 the honest silences (the drain's own landing)
assert.equal(w(358), null, 'F358 second held -> null')
assert.equal(w(359), null, 'F359 first held -> null')
// THE FACE 360 CHAIN THE SWING - THE SECOND BURST'S OWN ROUND TRIP
assert.equal(w(360), SWING + "0 -> 11 (+11) -> 0 (-11)" + SWING_TAIL)
// the FACE 361..364 the honest silences (the quiet's own four-silence
// ride)
assert.equal(w(361), null, 'F361 second held -> null')
assert.equal(w(362), null, 'F362 all held -> null')
assert.equal(w(363), null, 'F363 all held -> null')
assert.equal(w(364), null, 'F364 first held -> null')
// THE FACE 365 CHAIN THE SWING - THE WHISPER'S OWN ROUND TRIP
assert.equal(w(365), SWING + "0 -> 4 (+4) -> 0 (-4)" + SWING_TAIL)
// THE LONG DROUGHT - the FACE 366..386 the honest silences (the
// twenty-one-silence hold the book's own quietest stretch)
for (let f = 366; f <= 386; f++) {
  assert.equal(w(f), null, `F${f} the long drought -> null`)
}

// the tally - five swings, no swell, no fade = five speaking of
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
assert.deepEqual(tally, { swing: 5, swell: 0, fade: 0, silence: 32 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
const row = w(357)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  assert.doesNotMatch(row, new RegExp(`\\b${banned}\\b`), `byte-pin: ${banned}`)
}

// THE FENCE - the fold's own image must prove itself
assert.equal(waterRescueTrendConsistent(null), false)
assert.equal(waterRescueTrendConsistent(undefined), false)
assert.equal(waterRescueTrendConsistent('skin'), false)
assert.equal(waterRescueTrendConsistent([]), false)
assert.equal(waterRescueTrendConsistent({ back: { waterRescue: 0 }, prev: { waterRescue: 0 } }), false)
assert.equal(waterRescueTrendConsistent({ back: { waterRescue: 0 }, prev: { waterRescue: 0 }, cur: { waterRescue: 0 } }), true)
assert.equal(waterRescueTrendConsistent({ back: { waterRescue: -1 }, prev: { waterRescue: 0 }, cur: { waterRescue: 0 } }), false)
assert.equal(waterRescueTrendConsistent({ back: { waterRescue: 1.5 }, prev: { waterRescue: 0 }, cur: { waterRescue: 0 } }), false)
assert.equal(waterRescueTrendConsistent({ back: { waterRescue: '3' }, prev: { waterRescue: 0 }, cur: { waterRescue: 0 } }), false)
assert.equal(waterRescueTrendConsistent({ back: null, prev: { waterRescue: 0 }, cur: { waterRescue: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(waterRescueTrendConsistent({ back: { waterRescue: 0, busy: 1 }, prev: { waterRescue: 2, busy: 1 }, cur: { waterRescue: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(waterRescueTrendRow(null), null)
assert.equal(waterRescueTrendRow('x'), null)
assert.equal(waterRescueTrendRow({ back: { waterRescue: 1 }, prev: { waterRescue: 1 }, cur: { waterRescue: 1 } }), null)

// THE SKIN'S OWN READ - waterRescueOfCensus rides the census's
// sweep.byWhy cell
const SKIN = 'machine-unreachable-water-rescue'
assert.equal(waterRescueOfCensus(null), 0)
assert.equal(waterRescueOfCensus(undefined), 0)
assert.equal(waterRescueOfCensus([]), 0)
assert.equal(waterRescueOfCensus({}), 0)
assert.equal(waterRescueOfCensus({ sweep: null }), 0)
assert.equal(waterRescueOfCensus({ sweep: [] }), 0)
assert.equal(waterRescueOfCensus({ sweep: {} }), 0)
assert.equal(waterRescueOfCensus({ sweep: { byWhy: null } }), 0)
assert.equal(waterRescueOfCensus({ sweep: { byWhy: [] } }), 0)
assert.equal(waterRescueOfCensus({ sweep: { byWhy: {} } }), 0)
assert.equal(waterRescueOfCensus({ sweep: { byWhy: { [SKIN]: 16, 'machine-unreachable-walk-timeout': 6 } } }), 16)
assert.equal(waterRescueOfCensus({ sweep: { byWhy: { 'machine-unreachable-walk-timeout': 6 } }, busy: 4 }), 0)
assert.equal(waterRescueOfCensus({ sweep: { byWhy: { [SKIN]: -1 } } }), 0)
assert.equal(waterRescueOfCensus({ sweep: { byWhy: { [SKIN]: 2.5 } } }), 0)
assert.equal(waterRescueOfCensus({ sweep: { byWhy: { [SKIN]: '3' } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// sweep.byWhy cell this word prices (the skin rides its own seat, the
// walk-timeout's own cell a different cell the v0.976.125 word
// prices, the sum's machinesUnreachable cell a third cell the sweep
// verdict's own trend prices - the cells never merge). The
// water-rescue's own inner verbatim "water rescue" - the o2 reset's
// own class the field rode.
const lines = [
  'F14 sweep: 0 collected - machine unreachable (water rescue: the o2 reset billed) x2',
  'F10 sweep: 0 collected - busy x1, machine unreachable (timeout after 15000ms) x3'
]
const census = walkFailCensus(lines)
assert.equal(census.sweep.byWhy[SKIN], 2)
assert.equal(census.sweep.machinesUnreachable, 5)
assert.equal(census.sweep.busy, 1)
assert.equal(waterRescueOfCensus(census), 2)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { waterRescue: waterRescueOfCensus(census) }, prev: { waterRescue: 0 }, cur: { waterRescue: 15 } }
assert.equal(waterRescueTrendRow(fold), SWING + "2 -> 0 (-2) -> 15 (+15)" + SWING_TAIL)

console.log('waterrescuetrend.test: all pins green')
