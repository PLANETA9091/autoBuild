// tests/unit/governorrefusaltrend.test.mjs - THE GOVERNOR-REFUSAL'S
// OWN TREND's own pin battery (v0.976.128): the field's own chains
// byte-exact, the honest silences, the byte-pin battery, the fence
// battery, the skin's own read, the one-parser ride through the
// census's own sweep.byWhy cell (the same walk-fail lines the sum
// book and the five skin books hold - the cells never merge).
import { governorRefusalOfCensus, governorRefusalTrendConsistent, governorRefusalTrendRow } from '../../src/lib/governorrefusaltrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, this word prices the machine-unreachable governor-refusal skin's own mass across the walks - the book's own sixth weight, co-existence by seat never by duplication)"

const HEAD = "the governor-refusal's own trend (v0.976.128)"
const SWING = HEAD + ": the governor-refusal's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const SWELL = HEAD + ": the governor-refusal's rise ran two steps deep - "
const SWELL_TAIL = " - the governor-refusal's own swell " + TAIL
const FADE = HEAD + ": the governor-refusal's fall ran two steps deep - "
const FADE_TAIL = " - the governor-refusal's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own arithmetic: 1, 0, 2, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 2,
// 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0,
// 1, 0, 2, 2 - THE SKIN'S OWN WEIGHT 21 the faces' own total byte-true
// vs the fire-0700's own 21u witness, THE FIELD'S OWN TOP 2 the
// twos' own ceiling, the +2 the max step's own single bound, the -2
// the paybacks' own bound) - THE WHISPER BOOK THAT BREATHES - the
// word born speaking TWELVE windows deep (ten swings + one swell +
// one fade) with the TWENTY-FIVE honest silences beside - THE SKIN'S
// OWN VOICE.
const P = { 348: 1, 349: 0, 350: 2, 351: 0, 352: 0, 353: 0, 354: 0, 355: 0, 356: 2, 357: 0, 358: 1, 359: 0, 360: 0, 361: 2, 362: 2, 363: 1, 364: 0, 365: 0, 366: 0, 367: 0, 368: 0, 369: 0, 370: 0, 371: 1, 372: 2, 373: 0, 374: 0, 375: 0, 376: 0, 377: 1, 378: 0, 379: 0, 380: 1, 381: 0, 382: 0, 383: 1, 384: 0, 385: 2, 386: 2 }
const w = (f) => governorRefusalTrendRow({ back: { governorRefusal: P[f - 2] }, prev: { governorRefusal: P[f - 1] }, cur: { governorRefusal: P[f] } })

// THE FACE 350 CHAIN THE SWING - THE WORD'S OWN BIRTH RIDE
assert.equal(w(350), SWING + "1 -> 0 (-1) -> 2 (+2)" + SWING_TAIL)
// THE FACE 351 CHAIN THE SWING - THE ROUND TRIP RODE ONE FACE WHOLE
assert.equal(w(351), SWING + "0 -> 2 (+2) -> 0 (-2)" + SWING_TAIL)
// the FACE 352..356 the honest silences (the drought's own five-ride
// and the held arrival)
assert.equal(w(352), null, 'F352 second held -> null')
assert.equal(w(353), null, 'F353 all held -> null')
assert.equal(w(354), null, 'F354 all held -> null')
assert.equal(w(355), null, 'F355 all held -> null')
assert.equal(w(356), null, 'F356 first held -> null')
// THE FACE 357 CHAIN THE SWING - THE SECOND ROUND TRIP
assert.equal(w(357), SWING + "0 -> 2 (+2) -> 0 (-2)" + SWING_TAIL)
// THE FACE 358 CHAIN THE SWING
assert.equal(w(358), SWING + "2 -> 0 (-2) -> 1 (+1)" + SWING_TAIL)
// THE FACE 359 CHAIN THE SWING - THE WHISPER'S OWN ROUND TRIP
assert.equal(w(359), SWING + "0 -> 1 (+1) -> 0 (-1)" + SWING_TAIL)
// the FACE 360..363 the honest silences (the held pair and the
// arrival's own echo)
assert.equal(w(360), null, 'F360 second held -> null')
assert.equal(w(361), null, 'F361 first held -> null')
assert.equal(w(362), null, 'F362 second held -> null')
assert.equal(w(363), null, 'F363 first held -> null')
// THE FACE 364 CHAIN THE FADE - THE DRAIN'S OWN WALK (the book's own
// only fade)
assert.equal(w(364), FADE + "2 -> 1 (-1) -> 0 (-1)" + FADE_TAIL)
// the FACE 365..371 the honest silences (the long quiet's own
// seven-silence ride)
for (let f = 365; f <= 371; f++) {
  assert.equal(w(f), null, `F${f} the long quiet -> null`)
}
// THE FACE 372 CHAIN THE SWELL - THE REBUILD'S OWN BUILD (the book's
// own only swell)
assert.equal(w(372), SWELL + "0 -> 1 (+1) -> 2 (+1)" + SWELL_TAIL)
// THE FACE 373 CHAIN THE SWING - THE BUILD'S OWN PAYBACK
assert.equal(w(373), SWING + "1 -> 2 (+1) -> 0 (-2)" + SWING_TAIL)
// the FACE 374..377 the honest silences
for (let f = 374; f <= 377; f++) {
  assert.equal(w(f), null, `F${f} the quiet -> null`)
}
// THE FACE 378 CHAIN THE SWING - THE WHISPER'S OWN ROUND TRIP
assert.equal(w(378), SWING + "0 -> 1 (+1) -> 0 (-1)" + SWING_TAIL)
// the FACE 379/380 the honest silences
assert.equal(w(379), null, 'F379 second held -> null')
assert.equal(w(380), null, 'F380 first held -> null')
// THE FACE 381 CHAIN THE SWING - THE WHISPER'S OWN ROUND TRIP
assert.equal(w(381), SWING + "0 -> 1 (+1) -> 0 (-1)" + SWING_TAIL)
// the FACE 382/383 the honest silences
assert.equal(w(382), null, 'F382 second held -> null')
assert.equal(w(383), null, 'F383 first held -> null')
// THE FACE 384 CHAIN THE SWING - THE WHISPER'S OWN ROUND TRIP
assert.equal(w(384), SWING + "0 -> 1 (+1) -> 0 (-1)" + SWING_TAIL)
// THE FACE 385 CHAIN THE SWING - THE STORM'S OWN RETURN
assert.equal(w(385), SWING + "1 -> 0 (-1) -> 2 (+2)" + SWING_TAIL)
// the FACE 386 the honest silence (the held arrival)
assert.equal(w(386), null, 'F386 second held -> null')

// the tally - ten swings, one swell, one fade = twelve speaking of
// thirty-seven windows (the whisper book's own law - the twos' own
// ceiling, the count never left the single digits)
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 10, swell: 1, fade: 1, silence: 25 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
const row = w(350)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  assert.doesNotMatch(row, new RegExp(`\\b${banned}\\b`), `byte-pin: ${banned}`)
}

// THE FENCE - the fold's own image must prove itself
assert.equal(governorRefusalTrendConsistent(null), false)
assert.equal(governorRefusalTrendConsistent(undefined), false)
assert.equal(governorRefusalTrendConsistent('skin'), false)
assert.equal(governorRefusalTrendConsistent([]), false)
assert.equal(governorRefusalTrendConsistent({ back: { governorRefusal: 0 }, prev: { governorRefusal: 0 } }), false)
assert.equal(governorRefusalTrendConsistent({ back: { governorRefusal: 0 }, prev: { governorRefusal: 0 }, cur: { governorRefusal: 0 } }), true)
assert.equal(governorRefusalTrendConsistent({ back: { governorRefusal: -1 }, prev: { governorRefusal: 0 }, cur: { governorRefusal: 0 } }), false)
assert.equal(governorRefusalTrendConsistent({ back: { governorRefusal: 1.5 }, prev: { governorRefusal: 0 }, cur: { governorRefusal: 0 } }), false)
assert.equal(governorRefusalTrendConsistent({ back: { governorRefusal: '3' }, prev: { governorRefusal: 0 }, cur: { governorRefusal: 0 } }), false)
assert.equal(governorRefusalTrendConsistent({ back: null, prev: { governorRefusal: 0 }, cur: { governorRefusal: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(governorRefusalTrendConsistent({ back: { governorRefusal: 0, busy: 1 }, prev: { governorRefusal: 2, busy: 1 }, cur: { governorRefusal: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(governorRefusalTrendRow(null), null)
assert.equal(governorRefusalTrendRow('x'), null)
assert.equal(governorRefusalTrendRow({ back: { governorRefusal: 1 }, prev: { governorRefusal: 1 }, cur: { governorRefusal: 1 } }), null)

// THE SKIN'S OWN READ - governorRefusalOfCensus rides the census's
// sweep.byWhy cell
const SKIN = 'machine-unreachable-governor-refusal'
assert.equal(governorRefusalOfCensus(null), 0)
assert.equal(governorRefusalOfCensus(undefined), 0)
assert.equal(governorRefusalOfCensus([]), 0)
assert.equal(governorRefusalOfCensus({}), 0)
assert.equal(governorRefusalOfCensus({ sweep: null }), 0)
assert.equal(governorRefusalOfCensus({ sweep: [] }), 0)
assert.equal(governorRefusalOfCensus({ sweep: {} }), 0)
assert.equal(governorRefusalOfCensus({ sweep: { byWhy: null } }), 0)
assert.equal(governorRefusalOfCensus({ sweep: { byWhy: [] } }), 0)
assert.equal(governorRefusalOfCensus({ sweep: { byWhy: {} } }), 0)
assert.equal(governorRefusalOfCensus({ sweep: { byWhy: { [SKIN]: 2, 'machine-unreachable-walk-timeout': 6 } } }), 2)
assert.equal(governorRefusalOfCensus({ sweep: { byWhy: { 'machine-unreachable-walk-timeout': 6 } }, busy: 4 }), 0)
assert.equal(governorRefusalOfCensus({ sweep: { byWhy: { [SKIN]: -1 } } }), 0)
assert.equal(governorRefusalOfCensus({ sweep: { byWhy: { [SKIN]: 2.5 } } }), 0)
assert.equal(governorRefusalOfCensus({ sweep: { byWhy: { [SKIN]: '3' } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// sweep.byWhy cell this word prices (the skin rides its own seat, the
// walk-timeout's own cell a different cell the v0.976.125 word
// prices, the sum's machinesUnreachable cell a third cell the sweep
// verdict's own trend prices - the cells never merge). The
// governor-refusal's own inner verbatim "walk governor:" - the
// prose refusal the walk governor's own lane spoke.
const lines = [
  'F14 sweep: 0 collected - machine unreachable (walk governor: the lanes held the walk) x2',
  'F10 sweep: 0 collected - busy x1, machine unreachable (timeout after 15000ms) x3'
]
const census = walkFailCensus(lines)
assert.equal(census.sweep.byWhy[SKIN], 2)
assert.equal(census.sweep.machinesUnreachable, 5)
assert.equal(census.sweep.busy, 1)
assert.equal(governorRefusalOfCensus(census), 2)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { governorRefusal: governorRefusalOfCensus(census) }, prev: { governorRefusal: 0 }, cur: { governorRefusal: 2 } }
assert.equal(governorRefusalTrendRow(fold), SWING + "2 -> 0 (-2) -> 2 (+2)" + SWING_TAIL)

console.log('governorrefusaltrend.test: all pins green')
