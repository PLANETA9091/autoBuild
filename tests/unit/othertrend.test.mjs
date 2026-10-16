// tests/unit/othertrend.test.mjs - THE OTHER'S OWN TREND's own pin
// battery (v0.976.127): the field's own chains byte-exact, the honest
// silences, the byte-pin battery, the fence battery, the skin's own
// read, the one-parser ride through the census's own sweep.byWhy cell
// (the same walk-fail lines the sum book and the four skin books hold
// - the cells never merge).
import { otherOfCensus, otherTrendConsistent, otherTrendRow } from '../../src/lib/othertrend.mjs'
import { walkFailCensus } from '../../src/lib/walkfail.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, this word prices the machine-unreachable other skin's own mass across the walks - the book's own fifth weight, co-existence by seat never by duplication)"

const HEAD = "the other's own trend (v0.976.127)"
const SWING = HEAD + ": the other's own swing - "
const FADE = HEAD + ": the other's fall ran two steps deep - "
const SWING_TAIL = " - the rise and the fall traded seats between the walks " + TAIL
const FADE_TAIL = " - the other's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// census's own arithmetic: 0, 0, 0, 0, 2, 1, 1, 1, 0, 1, 0, 0, 3, 0,
// 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 4, 0, 1, 1, 2, 0, 1, 0, 4, 2, 0, 0,
// 0, 0, 1, 1 - THE SKIN'S OWN WEIGHT 31 the faces' own total byte-true
// vs the fire-0700's own 31u witness, THE FIELD'S OWN TOP 4 THE FACE
// 368 COUNT (the top count three faces held - the face 368 the
// burst's own echo, the face 372 the rebuild's own echo, the face
// 380 the storm's own echo), the +4 the face 368's own 0 -> 4 the max
// step's own single bound, the -4 the face 369's own 4 -> 0 the top's
// own full payback) - the word born speaking FOURTEEN windows deep
// (thirteen swings + one fade) with the TWENTY-THREE honest silences
// beside - THE SKIN'S OWN VOICE.
const P = { 348: 0, 349: 0, 350: 0, 351: 0, 352: 2, 353: 1, 354: 1, 355: 1, 356: 0, 357: 1, 358: 0, 359: 0, 360: 3, 361: 0, 362: 0, 363: 0, 364: 1, 365: 0, 366: 0, 367: 0, 368: 4, 369: 0, 370: 0, 371: 0, 372: 4, 373: 0, 374: 1, 375: 1, 376: 2, 377: 0, 378: 1, 379: 0, 380: 4, 381: 2, 382: 0, 383: 0, 384: 0, 385: 1, 386: 1 }
const w = (f) => otherTrendRow({ back: { other: P[f - 2] }, prev: { other: P[f - 1] }, cur: { other: P[f] } })

// the field's own open floor - the FACE 350..352 the honest silences
assert.equal(w(350), null, 'F350 all held -> null')
assert.equal(w(351), null, 'F351 all held -> null')
assert.equal(w(352), null, 'F352 first held -> null')
// THE FACE 353 CHAIN THE SWING - the field's own first word
assert.equal(w(353), SWING + "0 -> 2 (+2) -> 1 (-1)" + SWING_TAIL)
// the FACE 354..356 the honest silences (the held pair plus the wait)
assert.equal(w(354), null, 'F354 second held -> null')
assert.equal(w(355), null, 'F355 all held -> null')
assert.equal(w(356), null, 'F356 second held -> null')
// THE FACE 357/358 CHAINS THE SWINGS (the whisper's own round trip
// and its echo)
assert.equal(w(357), SWING + "1 -> 0 (-1) -> 1 (+1)" + SWING_TAIL)
assert.equal(w(358), SWING + "0 -> 1 (+1) -> 0 (-1)" + SWING_TAIL)
// the FACE 359/360 the honest silences
assert.equal(w(359), null, 'F359 second held -> null')
assert.equal(w(360), null, 'F360 first held -> null')
// THE FACE 361 CHAIN THE SWING - THE SECOND WHISPER'S OWN ROUND TRIP
assert.equal(w(361), SWING + "0 -> 3 (+3) -> 0 (-3)" + SWING_TAIL)
// the FACE 362..364 the honest silences (the quiet's own ride)
assert.equal(w(362), null, 'F362 second held -> null')
assert.equal(w(363), null, 'F363 all held -> null')
assert.equal(w(364), null, 'F364 first held -> null')
// THE FACE 365 CHAIN THE SWING - the whisper's own round trip
assert.equal(w(365), SWING + "0 -> 1 (+1) -> 0 (-1)" + SWING_TAIL)
// the FACE 366..368 the honest silences (the burst's own approach)
assert.equal(w(366), null, 'F366 second held -> null')
assert.equal(w(367), null, 'F367 all held -> null')
assert.equal(w(368), null, 'F368 first held -> null')
// THE FACE 369 CHAIN THE SWING - THE BURST'S OWN FULL ROUND TRIP (THE
// FIELD'S OWN TOP RODE 4)
assert.equal(w(369), SWING + "0 -> 4 (+4) -> 0 (-4)" + SWING_TAIL)
// the FACE 370..372 the honest silences (the held pair plus the wait)
assert.equal(w(370), null, 'F370 second held -> null')
assert.equal(w(371), null, 'F371 all held -> null')
assert.equal(w(372), null, 'F372 first held -> null')
// THE FACE 373 CHAIN THE SWING - THE REBUILD'S OWN FULL ROUND TRIP
assert.equal(w(373), SWING + "0 -> 4 (+4) -> 0 (-4)" + SWING_TAIL)
// THE FACE 374 CHAIN THE SWING - the top's own second payback
assert.equal(w(374), SWING + "4 -> 0 (-4) -> 1 (+1)" + SWING_TAIL)
// the FACE 375/376 the honest silences
assert.equal(w(375), null, 'F375 second held -> null')
assert.equal(w(376), null, 'F376 all held -> null')
// the FACE 377..381 chains the swings (the flicker's own five-step
// trade incl. THE FACE 380 CHAIN THE SWING THE STORM'S OWN ECHO)
assert.equal(w(377), SWING + "1 -> 2 (+1) -> 0 (-2)" + SWING_TAIL)
assert.equal(w(378), SWING + "2 -> 0 (-2) -> 1 (+1)" + SWING_TAIL)
assert.equal(w(379), SWING + "0 -> 1 (+1) -> 0 (-1)" + SWING_TAIL)
assert.equal(w(380), SWING + "1 -> 0 (-1) -> 4 (+4)" + SWING_TAIL)
assert.equal(w(381), SWING + "0 -> 4 (+4) -> 2 (-2)" + SWING_TAIL)
// THE FACE 382 CHAIN THE FADE - THE DRAIN'S OWN WALK (the book's own
// only fade)
assert.equal(w(382), FADE + "4 -> 2 (-2) -> 0 (-2)" + FADE_TAIL)
// the FACE 383..386 the honest silences (the book's own quiet tail)
assert.equal(w(383), null, 'F383 second held -> null')
assert.equal(w(384), null, 'F384 all held -> null')
assert.equal(w(385), null, 'F385 first held -> null')
assert.equal(w(386), null, 'F386 second held -> null')

// the tally - thirteen swings + one fade, no swell = fourteen
// speaking of thirty-seven windows (THE SWELL NEVER RODE the priced
// windows - the trade-one-face-at-a-time book's own law)
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 13, swell: 0, fade: 1, silence: 23 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
const row = w(369)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  assert.doesNotMatch(row, new RegExp(`\\b${banned}\\b`), `byte-pin: ${banned}`)
}

// THE FENCE - the fold's own image must prove itself
assert.equal(otherTrendConsistent(null), false)
assert.equal(otherTrendConsistent(undefined), false)
assert.equal(otherTrendConsistent('skin'), false)
assert.equal(otherTrendConsistent([]), false)
assert.equal(otherTrendConsistent({ back: { other: 0 }, prev: { other: 0 } }), false)
assert.equal(otherTrendConsistent({ back: { other: 0 }, prev: { other: 0 }, cur: { other: 0 } }), true)
assert.equal(otherTrendConsistent({ back: { other: -1 }, prev: { other: 0 }, cur: { other: 0 } }), false)
assert.equal(otherTrendConsistent({ back: { other: 1.5 }, prev: { other: 0 }, cur: { other: 0 } }), false)
assert.equal(otherTrendConsistent({ back: { other: '3' }, prev: { other: 0 }, cur: { other: 0 } }), false)
assert.equal(otherTrendConsistent({ back: null, prev: { other: 0 }, cur: { other: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(otherTrendConsistent({ back: { other: 0, busy: 1 }, prev: { other: 2, busy: 1 }, cur: { other: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(otherTrendRow(null), null)
assert.equal(otherTrendRow('x'), null)
assert.equal(otherTrendRow({ back: { other: 1 }, prev: { other: 1 }, cur: { other: 1 } }), null)

// THE SKIN'S OWN READ - otherOfCensus rides the census's sweep.byWhy
// cell
const SKIN = 'machine-unreachable-other'
assert.equal(otherOfCensus(null), 0)
assert.equal(otherOfCensus(undefined), 0)
assert.equal(otherOfCensus([]), 0)
assert.equal(otherOfCensus({}), 0)
assert.equal(otherOfCensus({ sweep: null }), 0)
assert.equal(otherOfCensus({ sweep: [] }), 0)
assert.equal(otherOfCensus({ sweep: {} }), 0)
assert.equal(otherOfCensus({ sweep: { byWhy: null } }), 0)
assert.equal(otherOfCensus({ sweep: { byWhy: [] } }), 0)
assert.equal(otherOfCensus({ sweep: { byWhy: {} } }), 0)
assert.equal(otherOfCensus({ sweep: { byWhy: { [SKIN]: 4, 'machine-unreachable-walk-timeout': 6 } } }), 4)
assert.equal(otherOfCensus({ sweep: { byWhy: { 'machine-unreachable-walk-timeout': 6 } }, busy: 4 }), 0)
assert.equal(otherOfCensus({ sweep: { byWhy: { [SKIN]: -1 } } }), 0)
assert.equal(otherOfCensus({ sweep: { byWhy: { [SKIN]: 2.5 } } }), 0)
assert.equal(otherOfCensus({ sweep: { byWhy: { [SKIN]: '3' } } }), 0)

// THE ONE-PARSER RIDE - the SAME walk-fail lines' cells: the census's
// sweep.byWhy cell this word prices (the skin rides its own seat, the
// water-rescue's own cell a different cell the v0.976.126 word
// prices, the sum's machinesUnreachable cell a third cell the sweep
// verdict's own trend prices - the cells never merge). The other's
// own inner verbatim names no known class - the residual's own shape
// (an inner why that matches none of the known verbatims).
const lines = [
  'F14 sweep: 0 collected - machine unreachable (the yard held its own riddle) x2',
  'F10 sweep: 0 collected - busy x1, machine unreachable (water rescue: the o2 reset billed) x3'
]
const census = walkFailCensus(lines)
assert.equal(census.sweep.byWhy[SKIN], 2)
assert.equal(census.sweep.machinesUnreachable, 5)
assert.equal(census.sweep.busy, 1)
assert.equal(otherOfCensus(census), 2)
// the fold rides the census's own cell - the wire's own arithmetic
const fold = { back: { other: otherOfCensus(census) }, prev: { other: 0 }, cur: { other: 4 } }
assert.equal(otherTrendRow(fold), SWING + "2 -> 0 (-2) -> 4 (+4)" + SWING_TAIL)

console.log('othertrend.test: all pins green')
