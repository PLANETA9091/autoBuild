// tests/unit/decidetimeouttrend.test.mjs - THE DECIDE-TIMEOUT'S OWN
// TREND's own pin battery (v0.976.122): the field's own chains
// byte-exact, the honest silences, the byte-pin battery, the fence
// battery, the skin's own read, the one-parser ride through the
// census's own sweep.byWhy cell (the same walk-fail lines the sweep
// verdict's own sum book holds - the cells never merge).
import { decideTimeoutOfCensus, decideTimeoutTrendConsistent, decideTimeoutTrendRow } from '../../src/lib/decidetimeouttrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, this word prices the machine-unreachable decide-timeout skin's own mass across the walks - the book's own heaviest skin, co-existence by seat never by duplication)"

const HEAD = "the decide-timeout's own trend (v0.976.122)"
const SWING = HEAD + ": the decide-timeout's own swing - "
const SWELL = HEAD + ": the decide-timeout's rise ran two steps deep - "
const FADE = HEAD + ": the decide-timeout's fall ran two steps deep - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const SWELL_TAIL = " - the decide-timeout's own swell " + TAIL
const FADE_TAIL = " - the decide-timeout's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own arithmetic: 5, 1, 8, 0, 37, 2, 32, 5, 4, 1, 0, 0, 44,
// 13, 9, 10, 8, 0, 0, 0, 93, 0, 9, 0, 15, 0, 0, 5, 8, 2, 9, 5, 0, 10,
// 5, 42, 2, 11, 2 - THE BOOK'S OWN WEIGHT 397 the skins' own total,
// THE FIELD'S OWN TOP 93 THE FACE 368 COUNT (the burst's own face),
// the +93 the face 369's own 0 -> 93 the burst's own arrival, the -93
// the face 369's own 93 -> 0 the burst's own full payback the round
// trip rode ONE face whole) - the word born speaking THIRTY windows
// deep (twenty-three swings + one swell + six fades) with the SEVEN
// honest silences beside - THE SKIN'S OWN VOICE.
const P = { 348: 5, 349: 1, 350: 8, 351: 0, 352: 37, 353: 2, 354: 32, 355: 5, 356: 4, 357: 1, 358: 0, 359: 0, 360: 44, 361: 13, 362: 9, 363: 10, 364: 8, 365: 0, 366: 0, 367: 0, 368: 93, 369: 0, 370: 9, 371: 0, 372: 15, 373: 0, 374: 0, 375: 5, 376: 8, 377: 2, 378: 9, 379: 5, 380: 0, 381: 10, 382: 5, 383: 42, 384: 2, 385: 11, 386: 2 }
const w = (f) => decideTimeoutTrendRow({ back: { decideTimeout: P[f - 2] }, prev: { decideTimeout: P[f - 1] }, cur: { decideTimeout: P[f] } })

// the storm's own flicker - the FACE 350..355 chains the swings
assert.equal(w(350), SWING + "5 -> 1 (-4) -> 8 (+7)" + SWING_TAIL)
assert.equal(w(351), SWING + "1 -> 8 (+7) -> 0 (-8)" + SWING_TAIL)
assert.equal(w(352), SWING + "8 -> 0 (-8) -> 37 (+37)" + SWING_TAIL)
assert.equal(w(353), SWING + "0 -> 37 (+37) -> 2 (-35)" + SWING_TAIL)
assert.equal(w(354), SWING + "37 -> 2 (-35) -> 32 (+30)" + SWING_TAIL)
assert.equal(w(355), SWING + "2 -> 32 (+30) -> 5 (-27)" + SWING_TAIL)
// the drain's own three-step walk - the FACE 356..358 chains the fades
assert.equal(w(356), FADE + "32 -> 5 (-27) -> 4 (-1)" + FADE_TAIL)
assert.equal(w(357), FADE + "5 -> 4 (-1) -> 1 (-3)" + FADE_TAIL)
assert.equal(w(358), FADE + "4 -> 1 (-3) -> 0 (-1)" + FADE_TAIL)
// the held pair - the FACE 359/360 the honest silences
assert.equal(w(359), null, 'F359 second held -> null')
assert.equal(w(360), null, 'F360 first held -> null')
// THE FACE 361 chain the swing (the 44 ride)
assert.equal(w(361), SWING + "0 -> 44 (+44) -> 13 (-31)" + SWING_TAIL)
// the FACE 362 the fade, the FACE 363/364 the swings
assert.equal(w(362), FADE + "44 -> 13 (-31) -> 9 (-4)" + FADE_TAIL)
assert.equal(w(363), SWING + "13 -> 9 (-4) -> 10 (+1)" + SWING_TAIL)
assert.equal(w(364), SWING + "9 -> 10 (+1) -> 8 (-2)" + SWING_TAIL)
// THE FACE 365 the fade (the walk to the drought's own floor)
assert.equal(w(365), FADE + "10 -> 8 (-2) -> 0 (-8)" + FADE_TAIL)
// the drought's own floor - the FACE 366..368 the held run (three
// honest silences)
assert.equal(w(366), null, 'F366 second held -> null')
assert.equal(w(367), null, 'F367 all held -> null')
assert.equal(w(368), null, 'F368 first held -> null')
// THE BURST'S OWN FULL ROUND TRIP - the FACE 369 chain the swing (the
// round trip rode ONE face whole)
assert.equal(w(369), SWING + "0 -> 93 (+93) -> 0 (-93)" + SWING_TAIL)
// the FACE 370..373 chains the swings
assert.equal(w(370), SWING + "93 -> 0 (-93) -> 9 (+9)" + SWING_TAIL)
assert.equal(w(371), SWING + "0 -> 9 (+9) -> 0 (-9)" + SWING_TAIL)
assert.equal(w(372), SWING + "9 -> 0 (-9) -> 15 (+15)" + SWING_TAIL)
assert.equal(w(373), SWING + "0 -> 15 (+15) -> 0 (-15)" + SWING_TAIL)
// the held pair - the FACE 374/375 the honest silences
assert.equal(w(374), null, 'F374 second held -> null')
assert.equal(w(375), null, 'F375 first held -> null')
// the rebuild's own build - THE FACE 376 chain the swell
assert.equal(w(376), SWELL + "0 -> 5 (+5) -> 8 (+3)" + SWELL_TAIL)
// the FACE 377..379 chains the swings
assert.equal(w(377), SWING + "5 -> 8 (+3) -> 2 (-6)" + SWING_TAIL)
assert.equal(w(378), SWING + "8 -> 2 (-6) -> 9 (+7)" + SWING_TAIL)
assert.equal(w(379), SWING + "2 -> 9 (+7) -> 5 (-4)" + SWING_TAIL)
// THE FACE 380 the fade (the walk back to the floor)
assert.equal(w(380), FADE + "9 -> 5 (-4) -> 0 (-5)" + FADE_TAIL)
// the storm's own return - the FACE 381..386 chains the swings (the
// 42 ride the word's own live window)
assert.equal(w(381), SWING + "5 -> 0 (-5) -> 10 (+10)" + SWING_TAIL)
assert.equal(w(382), SWING + "0 -> 10 (+10) -> 5 (-5)" + SWING_TAIL)
assert.equal(w(383), SWING + "10 -> 5 (-5) -> 42 (+37)" + SWING_TAIL)
assert.equal(w(384), SWING + "5 -> 42 (+37) -> 2 (-40)" + SWING_TAIL)
assert.equal(w(385), SWING + "42 -> 2 (-40) -> 11 (+9)" + SWING_TAIL)
assert.equal(w(386), SWING + "2 -> 11 (+9) -> 2 (-9)" + SWING_TAIL)

// the tally - twenty-three swings + one swell + six fades = thirty
// speaking of thirty-seven windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 23, swell: 1, fade: 6, silence: 7 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
const row = w(369)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  assert.doesNotMatch(row, new RegExp(`\\b${banned}\\b`), `byte-pin: ${banned}`)
}

// THE FENCE - the fold's own image must prove itself
assert.equal(decideTimeoutTrendConsistent(null), false)
assert.equal(decideTimeoutTrendConsistent(undefined), false)
assert.equal(decideTimeoutTrendConsistent('skin'), false)
assert.equal(decideTimeoutTrendConsistent([]), false)
assert.equal(decideTimeoutTrendConsistent({ back: { decideTimeout: 0 }, prev: { decideTimeout: 0 } }), false)
assert.equal(decideTimeoutTrendConsistent({ back: { decideTimeout: 0 }, prev: { decideTimeout: 0 }, cur: { decideTimeout: 0 } }), true)
assert.equal(decideTimeoutTrendConsistent({ back: { decideTimeout: -1 }, prev: { decideTimeout: 0 }, cur: { decideTimeout: 0 } }), false)
assert.equal(decideTimeoutTrendConsistent({ back: { decideTimeout: 1.5 }, prev: { decideTimeout: 0 }, cur: { decideTimeout: 0 } }), false)
assert.equal(decideTimeoutTrendConsistent({ back: { decideTimeout: '3' }, prev: { decideTimeout: 0 }, cur: { decideTimeout: 0 } }), false)
assert.equal(decideTimeoutTrendConsistent({ back: null, prev: { decideTimeout: 0 }, cur: { decideTimeout: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(decideTimeoutTrendConsistent({ back: { decideTimeout: 0, busy: 1 }, prev: { decideTimeout: 2, busy: 1 }, cur: { decideTimeout: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(decideTimeoutTrendRow(null), null)
assert.equal(decideTimeoutTrendRow('x'), null)
assert.equal(decideTimeoutTrendRow({ back: { decideTimeout: 1 }, prev: { decideTimeout: 1 }, cur: { decideTimeout: 1 } }), null)

// THE SKIN'S OWN READ - decideTimeoutOfCensus rides the census's
// sweep.byWhy cell
const SKIN = 'machine-unreachable-decide-timeout'
assert.equal(decideTimeoutOfCensus(null), 0)
assert.equal(decideTimeoutOfCensus(undefined), 0)
assert.equal(decideTimeoutOfCensus([]), 0)
assert.equal(decideTimeoutOfCensus({}), 0)
assert.equal(decideTimeoutOfCensus({ sweep: null }), 0)
assert.equal(decideTimeoutOfCensus({ sweep: [] }), 0)
assert.equal(decideTimeoutOfCensus({ sweep: {} }), 0)
assert.equal(decideTimeoutOfCensus({ sweep: { byWhy: null } }), 0)
assert.equal(decideTimeoutOfCensus({ sweep: { byWhy: [] } }), 0)
assert.equal(decideTimeoutOfCensus({ sweep: { byWhy: {} } }), 0)
assert.equal(decideTimeoutOfCensus({ sweep: { byWhy: { [SKIN]: 93, 'machine-unreachable-no-path': 3 } } }), 93)
assert.equal(decideTimeoutOfCensus({ sweep: { byWhy: { 'machine-unreachable-no-path': 3 } }, busy: 4 }), 0)
assert.equal(decideTimeoutOfCensus({ sweep: { byWhy: { [SKIN]: -1 } } }), 0)
assert.equal(decideTimeoutOfCensus({ sweep: { byWhy: { [SKIN]: 2.5 } } }), 0)
assert.equal(decideTimeoutOfCensus({ sweep: { byWhy: { [SKIN]: '3' } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// sweep.byWhy cell this word prices (the skin rides its own seat, the
// sum's machinesUnreachable cell a different cell the sweep verdict's
// own trend prices - the cells never merge).
const lines = [
  'F14 sweep: 0 collected - machine unreachable (Took to long to decide path to goal!) x2',
  'F10 sweep: 0 collected - busy x1, machine unreachable (No path to the goal!) x3'
]
const census = walkFailCensus(lines)
assert.equal(census.sweep.byWhy[SKIN], 2)
assert.equal(census.sweep.machinesUnreachable, 5)
assert.equal(census.sweep.busy, 1)
assert.equal(decideTimeoutOfCensus(census), 2)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { decideTimeout: decideTimeoutOfCensus(census) }, prev: { decideTimeout: 0 }, cur: { decideTimeout: 11 } }
assert.equal(decideTimeoutTrendRow(fold), SWING + "2 -> 0 (-2) -> 11 (+11)" + SWING_TAIL)

console.log('decidetimeouttrend.test: all pins green')
