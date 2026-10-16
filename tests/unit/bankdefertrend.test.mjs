// tests/unit/bankdefertrend.test.mjs - THE BANK CHAIN'S OWN DEFER
// TREND's own pin battery (v0.976.144): the field's own chains
// byte-exact (THE BANK DEFER'S OWN FLICKER BOOK - the word born
// speaking EIGHTEEN of THIRTY-SEVEN), the NINETEEN honest silences,
// the byte-pin battery, the fence battery, the cell's own read (two
// emitters, one shape - the rescue defers and the night defers; the
// grants and the climb-refused verdicts and the 'final bank
// deferred: night' pocket defers different shapes, never priced),
// the one-parser ride over the real face lines.
import { bankTripDefers, bankDeferTrendConsistent, bankDeferTrendRow } from '../../src/lib/bankdefertrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the walk fuel commons's own trend prices the walk-lane's own fuel commons lane's mass across the walks, this word prices the bank chain's own defer mass across the faces - the bank book's own defer seat, co-existence by seat never by duplication)"

const HEAD = "the bank trip defer's own trend (v0.976.144)"
const SWING = HEAD + ": the bank trip defer's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the bank trip defer's rise ran two steps deep - "
const SWELL_TAIL = " - the bank trip defer's own swell " + TAIL
const FADE = HEAD + ": the bank trip defer's fall ran two steps deep - "
const FADE_TAIL = " - the bank trip defer's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// defer regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S
// OWN WEIGHT 52u the faces' own total, THE FIELD'S OWN TOP the face
// 362's own count 4 whose arrival rode a SILENT window (the word
// spoke the top's own payback the face 363's own window), the +3 the
// max rise step's own single bound (the face 353's own second), the
// -3 the max fall step's own bound rode four steps deep (the face
// 377's own second and the face 383's own second, the face 378's own
// first and the face 384's own first), THE FIELD'S OWN FLOOR the
// zeros' own nine faces - the flicker book the defer mass's own
// breath.
const P = {}
P[348] = 2
P[349] = 2
P[350] = 1
P[351] = 0
P[352] = 0
P[353] = 3
P[354] = 1
P[355] = 0
P[356] = 1
P[357] = 1
P[358] = 2
P[359] = 1
P[360] = 1
P[361] = 1
P[362] = 4
P[363] = 2
P[364] = 1
P[365] = 2
P[366] = 0
P[367] = 0
P[368] = 2
P[369] = 2
P[370] = 2
P[371] = 1
P[372] = 2
P[373] = 2
P[374] = 1
P[375] = 1
P[376] = 3
P[377] = 0
P[378] = 1
P[379] = 2
P[380] = 1
P[381] = 0
P[382] = 3
P[383] = 0
P[384] = 2
P[385] = 2
P[386] = 0
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 52, 'the cell 52u the field holds')
const w = (f) => bankDeferTrendRow({ back: { bankTripDefers: P[f - 2] }, prev: { bankTripDefers: P[f - 1] }, cur: { bankTripDefers: P[f] } })

// THE FIELD'S OWN TABLE - the priced windows the hand's own
// classification (thirteen swings, one swell, four fades, the
// NINETEEN held windows the honest silences keep)
const SWINGS = {
  354: '0 -> 3 (+3) -> 1 (-2)',
  356: '1 -> 0 (-1) -> 1 (+1)',
  359: '1 -> 2 (+1) -> 1 (-1)',
  363: '1 -> 4 (+3) -> 2 (-2)',
  365: '2 -> 1 (-1) -> 2 (+1)',
  366: '1 -> 2 (+1) -> 0 (-2)',
  372: '2 -> 1 (-1) -> 2 (+1)',
  377: '1 -> 3 (+2) -> 0 (-3)',
  378: '3 -> 0 (-3) -> 1 (+1)',
  380: '1 -> 2 (+1) -> 1 (-1)',
  382: '1 -> 0 (-1) -> 3 (+3)',
  383: '0 -> 3 (+3) -> 0 (-3)',
  384: '3 -> 0 (-3) -> 2 (+2)'
}
const SWELLS = {
  379: '0 -> 1 (+1) -> 2 (+1)'
}
const FADES = {
  351: '2 -> 1 (-1) -> 0 (-1)',
  355: '3 -> 1 (-2) -> 0 (-1)',
  364: '4 -> 2 (-2) -> 1 (-1)',
  381: '2 -> 1 (-1) -> 0 (-1)'
}
const SILENCES = [350, 352, 353, 357, 358, 360, 361, 362, 367, 368, 369, 370, 371, 373, 374, 375, 376, 385, 386]

// landmark chains byte-exact full literals
// THE FACE 363 CHAIN THE SWING - THE TOP'S OWN PAYBACK (the count 4
// the field's own top whose arrival rode the F362 held window - the
// word spoke the top only when the arc continued)
assert.equal(w(363), SWING + '1 -> 4 (+3) -> 2 (-2)' + SWING_TAIL)
// THE FACE 383 CHAIN THE SWING - THE ROUND TRIP (the 0 -> 3 -> 0 the
// spike-and-drain one window whole)
assert.equal(w(383), SWING + '0 -> 3 (+3) -> 0 (-3)' + SWING_TAIL)
// THE FACE 384 CHAIN THE SWING - THE DRAIN'S OWN REBUILD (the
// 3 -> 0 -> 2 the churn's own second face)
assert.equal(w(384), SWING + '3 -> 0 (-3) -> 2 (+2)' + SWING_TAIL)
// THE FACE 379 CHAIN THE SWELL - THE ONLY SWELL (the rebuild's own
// two-step walk)
assert.equal(w(379), SWELL + '0 -> 1 (+1) -> 2 (+1)' + SWELL_TAIL)
// THE FACE 351 CHAIN THE FADE - THE FIRST FADE
assert.equal(w(351), FADE + '2 -> 1 (-1) -> 0 (-1)' + FADE_TAIL)
// THE FACE 362 WINDOW THE HONEST SILENCE - the top's own silent
// arrival (the held 1 -> 1 first step the drought's own door kept)
assert.equal(w(362), null, 'F362 held -> null (the top rides silent)')
// THE FACE 386 WINDOW THE HONEST SILENCE - the field's own last
assert.equal(w(386), null, 'F386 held -> null (the field rides out)')

// the whole field rides its table - every window byte-exact
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// the honest silences - the NINETEEN held windows of the priced field
for (const f of SILENCES) assert.equal(w(f), null, 'F' + f + ' held -> null')

// the tally - thirteen swings, one swell, four fades, nineteen
// silences = EIGHTEEN speaking of THIRTY-SEVEN windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 13, swell: 1, fade: 4, silence: 19 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
for (const r of [w(363), w(379), w(351)]) {
  for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
    assert.doesNotMatch(r, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  }
}

// THE FENCE - the fold's own image must prove itself
assert.equal(bankDeferTrendConsistent(null), false)
assert.equal(bankDeferTrendConsistent(undefined), false)
assert.equal(bankDeferTrendConsistent('cell'), false)
assert.equal(bankDeferTrendConsistent([]), false)
assert.equal(bankDeferTrendConsistent({ back: { bankTripDefers: 0 }, prev: { bankTripDefers: 0 } }), false)
assert.equal(bankDeferTrendConsistent({ back: { bankTripDefers: 0 }, prev: { bankTripDefers: 0 }, cur: { bankTripDefers: 0 } }), true)
assert.equal(bankDeferTrendConsistent({ back: { bankTripDefers: -1 }, prev: { bankTripDefers: 0 }, cur: { bankTripDefers: 0 } }), false)
assert.equal(bankDeferTrendConsistent({ back: { bankTripDefers: 1.5 }, prev: { bankTripDefers: 0 }, cur: { bankTripDefers: 0 } }), false)
assert.equal(bankDeferTrendConsistent({ back: { bankTripDefers: '3' }, prev: { bankTripDefers: 0 }, cur: { bankTripDefers: 0 } }), false)
assert.equal(bankDeferTrendConsistent({ back: null, prev: { bankTripDefers: 0 }, cur: { bankTripDefers: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(bankDeferTrendConsistent({ back: { bankTripDefers: 0, busy: 1 }, prev: { bankTripDefers: 2, busy: 1 }, cur: { bankTripDefers: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(bankDeferTrendRow(null), null)
assert.equal(bankDeferTrendRow('x'), null)
assert.equal(bankDeferTrendRow({ back: { bankTripDefers: 1 }, prev: { bankTripDefers: 1 }, cur: { bankTripDefers: 1 } }), null)

// THE CELL'S OWN READ - bankTripDefers rides the defer shape (two
// emitters, one shape: the rescue defers and the night defers; the
// grants and the climb-refused verdicts and the 'final bank
// deferred: night' pocket defers different shapes, never priced; the
// zero-defer read a lawful count).
assert.equal(bankTripDefers(null), 0)
assert.equal(bankTripDefers(undefined), 0)
assert.equal(bankTripDefers('lines'), 0)
assert.equal(bankTripDefers({}), 0)
assert.equal(bankTripDefers([]), 0)
assert.equal(bankTripDefers(['junk line', 'F1 walk failed']), 0)
assert.equal(bankTripDefers(['F9 bank trip: deferred (rescue owns the bot - the arm waits for the release, the budget never burns)']), 1)
assert.equal(bankTripDefers(['F12 bank trip: deferred night (tod=12400) - the yard walk rides out the dark alive (the v0.140.1 night hold extends to the mid-run trips)']), 1)
assert.equal(bankTripDefers(['F7 bank trip: planned budget 204s']), 0)
assert.equal(bankTripDefers(['F17 bank trip: fuel-tithe budget 176s']), 0)
assert.equal(bankTripDefers(['F6 bank trip: 0 (climb refused - the pocket rides the next cadence window)']), 0)
assert.equal(bankTripDefers(['F5 final bank deferred: night (tod=12400) - the pocket rides out the dark alive (the v0.140.1 night hold)']), 0)
assert.equal(bankTripDefers(['bank trip: deferred night (tod=12400)']), 0)

// THE ONE-PARSER RIDE - the real face lines the cache holds: the two
// emitters count, the other bank shapes never ride.
const lines = [
  'F9 bank trip: deferred (rescue owns the bot - the arm waits for the release, the budget never burns)',
  'F12 bank trip: deferred night (tod=12400) - the yard walk rides out the dark alive (the v0.140.1 night hold extends to the mid-run trips)',
  'F7 bank trip: planned budget 204s',
  'F6 bank trip: 0 (climb refused - the pocket rides the next cadence window)',
  'F5 final bank deferred: night (tod=12400) - the pocket rides out the dark alive (the v0.140.1 night hold)'
]
assert.equal(bankTripDefers(lines), 2)
// the fold rides the read's own count - the wire's own arithmetic
const fold = { back: { bankTripDefers: bankTripDefers(lines) }, prev: { bankTripDefers: 0 }, cur: { bankTripDefers: 1 } }
assert.equal(bankDeferTrendRow(fold), SWING + '2 -> 0 (-2) -> 1 (+1)' + SWING_TAIL)

console.log('bankdefertrend.test: all pins green')
