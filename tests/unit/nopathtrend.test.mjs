// tests/unit/nopathtrend.test.mjs - THE NO-PATH'S OWN TREND's own pin
// battery (v0.976.123): the field's own chains byte-exact, the honest
// silences, the byte-pin battery, the fence battery, the skin's own
// read, the one-parser ride through the census's own sweep.byWhy cell
// (the same walk-fail lines the sweep verdict's own sum book and the
// decide-timeout's own skin book hold - the cells never merge).
import { noPathOfCensus, noPathTrendConsistent, noPathTrendRow } from '../../src/lib/nopathtrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, this word prices the machine-unreachable no-path skin's own mass across the walks - the book's own second weight, co-existence by seat never by duplication)"

const HEAD = "the no-path's own trend (v0.976.123)"
const SWING = HEAD + ": the no-path's own swing - "
const SWELL = HEAD + ": the no-path's rise ran two steps deep - "
const FADE = HEAD + ": the no-path's fall ran two steps deep - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const SWELL_TAIL = " - the no-path's own swell " + TAIL
const FADE_TAIL = " - the no-path's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own arithmetic: 0, 0, 7, 0, 2, 0, 0, 3, 8, 12, 2, 0, 13,
// 9, 3, 0, 12, 0, 0, 0, 1, 0, 0, 5, 4, 0, 0, 0, 7, 1, 5, 1, 0, 6,
// 10, 10, 0, 3, 5 - THE SKIN'S OWN WEIGHT 129 the faces' own total,
// THE FIELD'S OWN TOP 13 THE FACE 360 COUNT, the +13 the face 360's
// own 0 -> 13 the top's own single step, the -12 the face 365's own
// 12 -> 0 the round trip's own payback) - the word born speaking
// TWENTY-FOUR windows deep (fifteen swings + four swells + five
// fades) with the THIRTEEN honest silences beside - THE SKIN'S OWN
// VOICE.
const P = { 348: 0, 349: 0, 350: 7, 351: 0, 352: 2, 353: 0, 354: 0, 355: 3, 356: 8, 357: 12, 358: 2, 359: 0, 360: 13, 361: 9, 362: 3, 363: 0, 364: 12, 365: 0, 366: 0, 367: 0, 368: 1, 369: 0, 370: 0, 371: 5, 372: 4, 373: 0, 374: 0, 375: 0, 376: 7, 377: 1, 378: 5, 379: 1, 380: 0, 381: 6, 382: 10, 383: 10, 384: 0, 385: 3, 386: 5 }
const w = (f) => noPathTrendRow({ back: { noPath: P[f - 2] }, prev: { noPath: P[f - 1] }, cur: { noPath: P[f] } })

// the drought's own hold - the FACE 350 the honest silence (the field
// opened at zero zero seven - a rise alone is no word)
assert.equal(w(350), null, 'F350 first held -> null')
// the flicker's own three-step trade - the FACE 351..353 chains the
// swings
assert.equal(w(351), SWING + "0 -> 7 (+7) -> 0 (-7)" + SWING_TAIL)
assert.equal(w(352), SWING + "7 -> 0 (-7) -> 2 (+2)" + SWING_TAIL)
assert.equal(w(353), SWING + "0 -> 2 (+2) -> 0 (-2)" + SWING_TAIL)
// the held pair - the FACE 354/355 the honest silences
assert.equal(w(354), null, 'F354 second held -> null')
assert.equal(w(355), null, 'F355 first held -> null')
// the build's own two-step walk - the FACE 356/357 chains the swells
assert.equal(w(356), SWELL + "0 -> 3 (+3) -> 8 (+5)" + SWELL_TAIL)
assert.equal(w(357), SWELL + "3 -> 8 (+5) -> 12 (+4)" + SWELL_TAIL)
// the FACE 358 the swing (the build's own payback traded)
assert.equal(w(358), SWING + "8 -> 12 (+4) -> 2 (-10)" + SWING_TAIL)
// THE FACE 359 CHAIN THE FADE (the drain's own walk to the floor)
assert.equal(w(359), FADE + "12 -> 2 (-10) -> 0 (-2)" + FADE_TAIL)
// THE FACE 360 CHAIN THE SWING - THE FIELD'S OWN TOP 13 (the swing's
// own step the top's own arrival)
assert.equal(w(360), SWING + "2 -> 0 (-2) -> 13 (+13)" + SWING_TAIL)
// the FACE 361 the swing, the FACE 362/363 the fades (the walk down
// to the floor)
assert.equal(w(361), SWING + "0 -> 13 (+13) -> 9 (-4)" + SWING_TAIL)
assert.equal(w(362), FADE + "13 -> 9 (-4) -> 3 (-6)" + FADE_TAIL)
assert.equal(w(363), FADE + "9 -> 3 (-6) -> 0 (-3)" + FADE_TAIL)
// the FACE 364 the swing
assert.equal(w(364), SWING + "3 -> 0 (-3) -> 12 (+12)" + SWING_TAIL)
// THE FACE 365 CHAIN THE SWING - THE ROUND TRIP RODE ONE FACE WHOLE
// (the spike's own full circle the same face held both ends)
assert.equal(w(365), SWING + "0 -> 12 (+12) -> 0 (-12)" + SWING_TAIL)
// the drought's own floor - the FACE 366..368 the held run (three
// honest silences)
assert.equal(w(366), null, 'F366 second held -> null')
assert.equal(w(367), null, 'F367 all held -> null')
assert.equal(w(368), null, 'F368 first held -> null')
// THE FACE 369 CHAIN THE SWING - the whisper's own round trip
assert.equal(w(369), SWING + "0 -> 1 (+1) -> 0 (-1)" + SWING_TAIL)
// the held pair - the FACE 370/371 the honest silences
assert.equal(w(370), null, 'F370 second held -> null')
assert.equal(w(371), null, 'F371 first held -> null')
// the FACE 372 the swing, the FACE 373 the fade
assert.equal(w(372), SWING + "0 -> 5 (+5) -> 4 (-1)" + SWING_TAIL)
assert.equal(w(373), FADE + "5 -> 4 (-1) -> 0 (-4)" + FADE_TAIL)
// the held pair - the FACE 374..376 the honest silences (the wait
// before the rebuild)
assert.equal(w(374), null, 'F374 second held -> null')
assert.equal(w(375), null, 'F375 all held -> null')
assert.equal(w(376), null, 'F376 first held -> null')
// the FACE 377..379 chains the swings
assert.equal(w(377), SWING + "0 -> 7 (+7) -> 1 (-6)" + SWING_TAIL)
assert.equal(w(378), SWING + "7 -> 1 (-6) -> 5 (+4)" + SWING_TAIL)
assert.equal(w(379), SWING + "1 -> 5 (+4) -> 1 (-4)" + SWING_TAIL)
// THE FACE 380 the fade (the walk back to the floor)
assert.equal(w(380), FADE + "5 -> 1 (-4) -> 0 (-1)" + FADE_TAIL)
// the FACE 381 the swing
assert.equal(w(381), SWING + "1 -> 0 (-1) -> 6 (+6)" + SWING_TAIL)
// THE FACE 382 CHAIN THE SWELL - THE REBUILD'S OWN BUILD
assert.equal(w(382), SWELL + "0 -> 6 (+6) -> 10 (+4)" + SWELL_TAIL)
// the held pair - the FACE 383/384 the honest silences (the rebuild's
// own plateau)
assert.equal(w(383), null, 'F383 second held -> null')
assert.equal(w(384), null, 'F384 first held -> null')
// the FACE 385 the swing, THE FACE 386 CHAIN THE SWELL (the
// rebuild's own third step the word's own live window)
assert.equal(w(385), SWING + "10 -> 0 (-10) -> 3 (+3)" + SWING_TAIL)
assert.equal(w(386), SWELL + "0 -> 3 (+3) -> 5 (+2)" + SWELL_TAIL)

// the tally - fifteen swings + four swells + five fades = twenty-four
// speaking of thirty-seven windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 15, swell: 4, fade: 5, silence: 13 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
const row = w(365)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  assert.doesNotMatch(row, new RegExp(`\\b${banned}\\b`), `byte-pin: ${banned}`)
}

// THE FENCE - the fold's own image must prove itself
assert.equal(noPathTrendConsistent(null), false)
assert.equal(noPathTrendConsistent(undefined), false)
assert.equal(noPathTrendConsistent('skin'), false)
assert.equal(noPathTrendConsistent([]), false)
assert.equal(noPathTrendConsistent({ back: { noPath: 0 }, prev: { noPath: 0 } }), false)
assert.equal(noPathTrendConsistent({ back: { noPath: 0 }, prev: { noPath: 0 }, cur: { noPath: 0 } }), true)
assert.equal(noPathTrendConsistent({ back: { noPath: -1 }, prev: { noPath: 0 }, cur: { noPath: 0 } }), false)
assert.equal(noPathTrendConsistent({ back: { noPath: 1.5 }, prev: { noPath: 0 }, cur: { noPath: 0 } }), false)
assert.equal(noPathTrendConsistent({ back: { noPath: '3' }, prev: { noPath: 0 }, cur: { noPath: 0 } }), false)
assert.equal(noPathTrendConsistent({ back: null, prev: { noPath: 0 }, cur: { noPath: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(noPathTrendConsistent({ back: { noPath: 0, busy: 1 }, prev: { noPath: 2, busy: 1 }, cur: { noPath: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(noPathTrendRow(null), null)
assert.equal(noPathTrendRow('x'), null)
assert.equal(noPathTrendRow({ back: { noPath: 1 }, prev: { noPath: 1 }, cur: { noPath: 1 } }), null)

// THE SKIN'S OWN READ - noPathOfCensus rides the census's sweep.byWhy
// cell
const SKIN = 'machine-unreachable-no-path'
assert.equal(noPathOfCensus(null), 0)
assert.equal(noPathOfCensus(undefined), 0)
assert.equal(noPathOfCensus([]), 0)
assert.equal(noPathOfCensus({}), 0)
assert.equal(noPathOfCensus({ sweep: null }), 0)
assert.equal(noPathOfCensus({ sweep: [] }), 0)
assert.equal(noPathOfCensus({ sweep: {} }), 0)
assert.equal(noPathOfCensus({ sweep: { byWhy: null } }), 0)
assert.equal(noPathOfCensus({ sweep: { byWhy: [] } }), 0)
assert.equal(noPathOfCensus({ sweep: { byWhy: {} } }), 0)
assert.equal(noPathOfCensus({ sweep: { byWhy: { [SKIN]: 13, 'machine-unreachable-decide-timeout': 44 } } }), 13)
assert.equal(noPathOfCensus({ sweep: { byWhy: { 'machine-unreachable-decide-timeout': 44 } }, busy: 4 }), 0)
assert.equal(noPathOfCensus({ sweep: { byWhy: { [SKIN]: -1 } } }), 0)
assert.equal(noPathOfCensus({ sweep: { byWhy: { [SKIN]: 2.5 } } }), 0)
assert.equal(noPathOfCensus({ sweep: { byWhy: { [SKIN]: '3' } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// sweep.byWhy cell this word prices (the skin rides its own seat, the
// decide-timeout's own cell a different cell the v0.976.122 word
// prices, the sum's machinesUnreachable cell a third cell the sweep
// verdict's own trend prices - the cells never merge).
const lines = [
  'F14 sweep: 0 collected - machine unreachable (No path to the goal!) x3',
  'F10 sweep: 0 collected - busy x1, machine unreachable (Took to long to decide path to goal!) x2'
]
const census = walkFailCensus(lines)
assert.equal(census.sweep.byWhy[SKIN], 3)
assert.equal(census.sweep.machinesUnreachable, 5)
assert.equal(census.sweep.busy, 1)
assert.equal(noPathOfCensus(census), 3)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { noPath: noPathOfCensus(census) }, prev: { noPath: 0 }, cur: { noPath: 13 } }
assert.equal(noPathTrendRow(fold), SWING + "3 -> 0 (-3) -> 13 (+13)" + SWING_TAIL)

console.log('nopathtrend.test: all pins green')
