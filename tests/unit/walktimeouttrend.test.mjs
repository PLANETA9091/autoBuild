// tests/unit/walktimeouttrend.test.mjs - THE WALK-TIMEOUT'S OWN TREND's
// own pin battery (v0.976.125): the field's own chains byte-exact, the
// honest silences, the byte-pin battery, the fence battery, the skin's
// own read, the one-parser ride through the census's own sweep.byWhy
// cell (the same walk-fail lines the sweep verdict's own sum book, the
// decide-timeout's own skin book and the no-path's own skin book hold -
// the cells never merge).
import { walkTimeoutOfCensus, walkTimeoutTrendConsistent, walkTimeoutTrendRow } from '../../src/lib/walktimeouttrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, this word prices the machine-unreachable walk-timeout skin's own mass across the walks - the book's own third weight, co-existence by seat never by duplication)"

const HEAD = "the walk-timeout's own trend (v0.976.125)"
const SWING = HEAD + ": the walk-timeout's own swing - "
const SWELL = HEAD + ": the walk-timeout's rise ran two steps deep - "
const FADE = HEAD + ": the walk-timeout's fall ran two steps deep - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const SWELL_TAIL = " - the walk-timeout's own swell " + TAIL
const FADE_TAIL = " - the walk-timeout's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own arithmetic: 4, 1, 1, 1, 1, 4, 6, 4, 1, 2, 1, 3, 2, 3,
// 1, 1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 2, 0, 5, 1, 2, 0, 2, 0, 1, 4,
// 0, 5, 1 - THE SKIN'S OWN WEIGHT 62 the faces' own total byte-true
// vs the fire-0700's own 62u witness, THE FIELD'S OWN TOP 6 THE FACE
// 354 COUNT, the +3/+2 the face 354's own build the top's own two
// steps, the +5 the face 376's own 0 -> 5 the max step's own single
// bound) - the word born speaking TWENTY-FOUR windows deep
// (twenty-one swings + two swells + one fade) with the THIRTEEN honest
// silences beside - THE SKIN'S OWN VOICE.
const P = { 348: 4, 349: 1, 350: 1, 351: 1, 352: 1, 353: 4, 354: 6, 355: 4, 356: 1, 357: 2, 358: 1, 359: 3, 360: 2, 361: 3, 362: 1, 363: 1, 364: 0, 365: 0, 366: 0, 367: 0, 368: 1, 369: 0, 370: 2, 371: 0, 372: 0, 373: 0, 374: 2, 375: 0, 376: 5, 377: 1, 378: 2, 379: 0, 380: 2, 381: 0, 382: 1, 383: 4, 384: 0, 385: 5, 386: 1 }
const w = (f) => walkTimeoutTrendRow({ back: { walkTimeout: P[f - 2] }, prev: { walkTimeout: P[f - 1] }, cur: { walkTimeout: P[f] } })

// the drought's own hold - the FACE 350..353 the honest silences (the
// field opened held - the floor's own four-silence ride)
assert.equal(w(350), null, 'F350 second held -> null')
assert.equal(w(351), null, 'F351 all held -> null')
assert.equal(w(352), null, 'F352 all held -> null')
assert.equal(w(353), null, 'F353 first held -> null')
// THE FACE 354 CHAIN THE SWELL - THE BUILD'S OWN WALK (THE FIELD'S OWN
// TOP 6 the top's own two steps)
assert.equal(w(354), SWELL + "1 -> 4 (+3) -> 6 (+2)" + SWELL_TAIL)
// the FACE 355 the swing (the top's own payback traded)
assert.equal(w(355), SWING + "4 -> 6 (+2) -> 4 (-2)" + SWING_TAIL)
// THE FACE 356 CHAIN THE FADE (the drain's own walk down - the book's
// own only fade)
assert.equal(w(356), FADE + "6 -> 4 (-2) -> 1 (-3)" + FADE_TAIL)
// the FACE 357..362 the swings (the flicker's own six-step trade)
assert.equal(w(357), SWING + "4 -> 1 (-3) -> 2 (+1)" + SWING_TAIL)
assert.equal(w(358), SWING + "1 -> 2 (+1) -> 1 (-1)" + SWING_TAIL)
assert.equal(w(359), SWING + "2 -> 1 (-1) -> 3 (+2)" + SWING_TAIL)
assert.equal(w(360), SWING + "1 -> 3 (+2) -> 2 (-1)" + SWING_TAIL)
assert.equal(w(361), SWING + "3 -> 2 (-1) -> 3 (+1)" + SWING_TAIL)
assert.equal(w(362), SWING + "2 -> 3 (+1) -> 1 (-2)" + SWING_TAIL)
// the drought's own floor - the FACE 363..368 the held run (six
// honest silences the floor's own longest ride)
assert.equal(w(363), null, 'F363 second held -> null')
assert.equal(w(364), null, 'F364 first held -> null')
assert.equal(w(365), null, 'F365 second held -> null')
assert.equal(w(366), null, 'F366 all held -> null')
assert.equal(w(367), null, 'F367 all held -> null')
assert.equal(w(368), null, 'F368 first held -> null')
// THE FACE 369 CHAIN THE SWING - the whisper's own round trip
assert.equal(w(369), SWING + "0 -> 1 (+1) -> 0 (-1)" + SWING_TAIL)
// the FACE 370/371 the swings (the round trip's own echo)
assert.equal(w(370), SWING + "1 -> 0 (-1) -> 2 (+2)" + SWING_TAIL)
assert.equal(w(371), SWING + "0 -> 2 (+2) -> 0 (-2)" + SWING_TAIL)
// the held pair plus the wait - the FACE 372..374 the honest silences
assert.equal(w(372), null, 'F372 second held -> null')
assert.equal(w(373), null, 'F373 all held -> null')
assert.equal(w(374), null, 'F374 first held -> null')
// the FACE 375/376 the swings (the round trip's own second echo plus
// the rebound's own bound)
assert.equal(w(375), SWING + "0 -> 2 (+2) -> 0 (-2)" + SWING_TAIL)
assert.equal(w(376), SWING + "2 -> 0 (-2) -> 5 (+5)" + SWING_TAIL)
// THE FACE 377 CHAIN THE SWING - THE MAX STEP'S OWN RIDE (0 -> 5 the
// +5 the field's own single bound)
assert.equal(w(377), SWING + "0 -> 5 (+5) -> 1 (-4)" + SWING_TAIL)
// the FACE 378..382 the swings (the flicker's own five-step trade)
assert.equal(w(378), SWING + "5 -> 1 (-4) -> 2 (+1)" + SWING_TAIL)
assert.equal(w(379), SWING + "1 -> 2 (+1) -> 0 (-2)" + SWING_TAIL)
assert.equal(w(380), SWING + "2 -> 0 (-2) -> 2 (+2)" + SWING_TAIL)
assert.equal(w(381), SWING + "0 -> 2 (+2) -> 0 (-2)" + SWING_TAIL)
assert.equal(w(382), SWING + "2 -> 0 (-2) -> 1 (+1)" + SWING_TAIL)
// THE FACE 383 CHAIN THE SWELL - THE REBUILD'S OWN BUILD
assert.equal(w(383), SWELL + "0 -> 1 (+1) -> 4 (+3)" + SWELL_TAIL)
// the FACE 384 the swing, the FACE 385/386 the swings (the storm's
// own echo the word's own live window)
assert.equal(w(384), SWING + "1 -> 4 (+3) -> 0 (-4)" + SWING_TAIL)
assert.equal(w(385), SWING + "4 -> 0 (-4) -> 5 (+5)" + SWING_TAIL)
assert.equal(w(386), SWING + "0 -> 5 (+5) -> 1 (-4)" + SWING_TAIL)

// the tally - twenty-one swings + two swells + one fade = twenty-four
// speaking of thirty-seven windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 21, swell: 2, fade: 1, silence: 13 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
const row = w(377)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  assert.doesNotMatch(row, new RegExp(`\\b${banned}\\b`), `byte-pin: ${banned}`)
}

// THE FENCE - the fold's own image must prove itself
assert.equal(walkTimeoutTrendConsistent(null), false)
assert.equal(walkTimeoutTrendConsistent(undefined), false)
assert.equal(walkTimeoutTrendConsistent('skin'), false)
assert.equal(walkTimeoutTrendConsistent([]), false)
assert.equal(walkTimeoutTrendConsistent({ back: { walkTimeout: 0 }, prev: { walkTimeout: 0 } }), false)
assert.equal(walkTimeoutTrendConsistent({ back: { walkTimeout: 0 }, prev: { walkTimeout: 0 }, cur: { walkTimeout: 0 } }), true)
assert.equal(walkTimeoutTrendConsistent({ back: { walkTimeout: -1 }, prev: { walkTimeout: 0 }, cur: { walkTimeout: 0 } }), false)
assert.equal(walkTimeoutTrendConsistent({ back: { walkTimeout: 1.5 }, prev: { walkTimeout: 0 }, cur: { walkTimeout: 0 } }), false)
assert.equal(walkTimeoutTrendConsistent({ back: { walkTimeout: '3' }, prev: { walkTimeout: 0 }, cur: { walkTimeout: 0 } }), false)
assert.equal(walkTimeoutTrendConsistent({ back: null, prev: { walkTimeout: 0 }, cur: { walkTimeout: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(walkTimeoutTrendConsistent({ back: { walkTimeout: 0, busy: 1 }, prev: { walkTimeout: 2, busy: 1 }, cur: { walkTimeout: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(walkTimeoutTrendRow(null), null)
assert.equal(walkTimeoutTrendRow('x'), null)
assert.equal(walkTimeoutTrendRow({ back: { walkTimeout: 1 }, prev: { walkTimeout: 1 }, cur: { walkTimeout: 1 } }), null)

// THE SKIN'S OWN READ - walkTimeoutOfCensus rides the census's
// sweep.byWhy cell
const SKIN = 'machine-unreachable-walk-timeout'
assert.equal(walkTimeoutOfCensus(null), 0)
assert.equal(walkTimeoutOfCensus(undefined), 0)
assert.equal(walkTimeoutOfCensus([]), 0)
assert.equal(walkTimeoutOfCensus({}), 0)
assert.equal(walkTimeoutOfCensus({ sweep: null }), 0)
assert.equal(walkTimeoutOfCensus({ sweep: [] }), 0)
assert.equal(walkTimeoutOfCensus({ sweep: {} }), 0)
assert.equal(walkTimeoutOfCensus({ sweep: { byWhy: null } }), 0)
assert.equal(walkTimeoutOfCensus({ sweep: { byWhy: [] } }), 0)
assert.equal(walkTimeoutOfCensus({ sweep: { byWhy: {} } }), 0)
assert.equal(walkTimeoutOfCensus({ sweep: { byWhy: { [SKIN]: 6, 'machine-unreachable-decide-timeout': 44 } } }), 6)
assert.equal(walkTimeoutOfCensus({ sweep: { byWhy: { 'machine-unreachable-decide-timeout': 44 } }, busy: 4 }), 0)
assert.equal(walkTimeoutOfCensus({ sweep: { byWhy: { [SKIN]: -1 } } }), 0)
assert.equal(walkTimeoutOfCensus({ sweep: { byWhy: { [SKIN]: 2.5 } } }), 0)
assert.equal(walkTimeoutOfCensus({ sweep: { byWhy: { [SKIN]: '3' } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// sweep.byWhy cell this word prices (the skin rides its own seat, the
// decide-timeout's own cell a different cell the v0.976.122 word
// prices, the no-path's own cell a third cell the v0.976.123 word
// prices, the sum's machinesUnreachable cell a fourth cell the sweep
// verdict's own trend prices - the cells never merge). The
// walk-timeout's own inner verbatim "timeout after 15000ms" - the
// 15000ms the pin's fingerprint.
const lines = [
  'F14 sweep: 0 collected - machine unreachable (timeout after 15000ms) x2',
  'F10 sweep: 0 collected - busy x1, machine unreachable (No path to the goal!) x3'
]
const census = walkFailCensus(lines)
assert.equal(census.sweep.byWhy[SKIN], 2)
assert.equal(census.sweep.machinesUnreachable, 5)
assert.equal(census.sweep.busy, 1)
assert.equal(walkTimeoutOfCensus(census), 2)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { walkTimeout: walkTimeoutOfCensus(census) }, prev: { walkTimeout: 0 }, cur: { walkTimeout: 6 } }
assert.equal(walkTimeoutTrendRow(fold), SWING + "2 -> 0 (-2) -> 6 (+6)" + SWING_TAIL)

console.log('walktimeouttrend.test: all pins green')
