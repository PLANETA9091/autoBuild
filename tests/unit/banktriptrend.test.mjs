// tests/unit/banktriptrend.test.mjs - THE BANK CHAIN'S OWN GRANT
// TREND's own pin battery (v0.976.142): the field's own chains
// byte-exact (THE BANK CHAIN'S OWN DENSE TRADE BOOK - the grant mass
// never touched zero the priced field whole, the word born speaking
// THIRTY-FIVE of THIRTY-SEVEN), the TWO honest silences (the held
// run the 6-count two windows deep), the byte-pin battery, the fence
// battery, the cell's own read (two emitters, one shape - the
// planned grants and the fuel-tithe grants; the deferred lines and
// the climb-refused verdicts different shapes, never priced), the
// one-parser ride over the real face lines.
import { bankTripGrants, bankTripTrendConsistent, bankTripTrendRow } from '../../src/lib/banktriptrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, this word prices the bank chain's own grant mass across the faces - the bank book's own grant seat, co-existence by seat never by duplication)"

const HEAD = "the bank trip grant's own trend (v0.976.142)"
const SWING = HEAD + ": the bank trip grant's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the bank trip grant's rise ran two steps deep - "
const SWELL_TAIL = " - the bank trip grant's own swell " + TAIL
const FADE = HEAD + ": the bank trip grant's fall ran two steps deep - "
const FADE_TAIL = " - the bank trip grant's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// grant regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S
// OWN WEIGHT 343u the faces' own total, THE FIELD'S OWN TOP the face
// 367's own count 14, the +9 the storm's own rise rode twice (the
// faces 380/384's own seconds), the -11 the max step's own bound rode
// twice (the face 383's own second and the face 384's own first - the
// same transition two windows deep), THE FIELD'S OWN FLOOR the count
// 2 the faces 379/383's own storm bottoms - AND THE ZERO NEVER RODE
// (the dense law's bank sibling).
const P = {}
P[348] = 8
P[349] = 7
P[350] = 6
P[351] = 5
P[352] = 11
P[353] = 13
P[354] = 7
P[355] = 13
P[356] = 11
P[357] = 13
P[358] = 12
P[359] = 11
P[360] = 10
P[361] = 9
P[362] = 6
P[363] = 6
P[364] = 8
P[365] = 11
P[366] = 10
P[367] = 14
P[368] = 12
P[369] = 8
P[370] = 7
P[371] = 9
P[372] = 5
P[373] = 9
P[374] = 6
P[375] = 10
P[376] = 11
P[377] = 4
P[378] = 11
P[379] = 2
P[380] = 11
P[381] = 7
P[382] = 13
P[383] = 2
P[384] = 11
P[385] = 5
P[386] = 9
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 343, 'the cell 343u the field holds')
const w = (f) => bankTripTrendRow({ back: { bankTripGrants: P[f - 2] }, prev: { bankTripGrants: P[f - 1] }, cur: { bankTripGrants: P[f] } })

// THE FIELD'S OWN TABLE - the priced windows the hand's own
// classification (twenty-four swings, three swells, eight fades, the
// TWO held windows the honest silences keep)
const SWINGS = {
  352: '6 -> 5 (-1) -> 11 (+6)',
  354: '11 -> 13 (+2) -> 7 (-6)',
  355: '13 -> 7 (-6) -> 13 (+6)',
  356: '7 -> 13 (+6) -> 11 (-2)',
  357: '13 -> 11 (-2) -> 13 (+2)',
  358: '11 -> 13 (+2) -> 12 (-1)',
  366: '8 -> 11 (+3) -> 10 (-1)',
  367: '11 -> 10 (-1) -> 14 (+4)',
  368: '10 -> 14 (+4) -> 12 (-2)',
  371: '8 -> 7 (-1) -> 9 (+2)',
  372: '7 -> 9 (+2) -> 5 (-4)',
  373: '9 -> 5 (-4) -> 9 (+4)',
  374: '5 -> 9 (+4) -> 6 (-3)',
  375: '9 -> 6 (-3) -> 10 (+4)',
  377: '10 -> 11 (+1) -> 4 (-7)',
  378: '11 -> 4 (-7) -> 11 (+7)',
  379: '4 -> 11 (+7) -> 2 (-9)',
  380: '11 -> 2 (-9) -> 11 (+9)',
  381: '2 -> 11 (+9) -> 7 (-4)',
  382: '11 -> 7 (-4) -> 13 (+6)',
  383: '7 -> 13 (+6) -> 2 (-11)',
  384: '13 -> 2 (-11) -> 11 (+9)',
  385: '2 -> 11 (+9) -> 5 (-6)',
  386: '11 -> 5 (-6) -> 9 (+4)'
}
const SWELLS = {
  353: '5 -> 11 (+6) -> 13 (+2)',
  365: '6 -> 8 (+2) -> 11 (+3)',
  376: '6 -> 10 (+4) -> 11 (+1)'
}
const FADES = {
  350: '8 -> 7 (-1) -> 6 (-1)',
  351: '7 -> 6 (-1) -> 5 (-1)',
  359: '13 -> 12 (-1) -> 11 (-1)',
  360: '12 -> 11 (-1) -> 10 (-1)',
  361: '11 -> 10 (-1) -> 9 (-1)',
  362: '10 -> 9 (-1) -> 6 (-3)',
  369: '14 -> 12 (-2) -> 8 (-4)',
  370: '12 -> 8 (-4) -> 7 (-1)'
}
const SILENCES = [363, 364]

// landmark chains byte-exact full literals
// THE FACE 380 CHAIN THE SWING - THE STORM'S OWN ROUND TRIP (the -9
// and the +9 one window whole, the 2 -> 11 rebuild)
assert.equal(w(380), SWING + '11 -> 2 (-9) -> 11 (+9)' + SWING_TAIL)
// THE FACE 383 CHAIN THE SWING - THE -11 THE MAX STEP'S OWN BOUND
assert.equal(w(383), SWING + '7 -> 13 (+6) -> 2 (-11)' + SWING_TAIL)
// THE FACE 353 CHAIN THE SWELL - THE FIRST SWELL
assert.equal(w(353), SWELL + '5 -> 11 (+6) -> 13 (+2)' + SWELL_TAIL)
// THE FACE 350 CHAIN THE FADE - THE FIRST FADE
assert.equal(w(350), FADE + '8 -> 7 (-1) -> 6 (-1)' + FADE_TAIL)
// THE FACE 367 CHAIN THE SWING - THE TOP'S OWN WINDOW (the count 14
// the field's own top the arrival rode)
assert.equal(w(367), SWING + '11 -> 10 (-1) -> 14 (+4)' + SWING_TAIL)
// THE FACE 364 WINDOW THE HONEST SILENCE - the held run's own second
// (the held 6 -> 6 first step the cadence's own door kept)
assert.equal(w(364), null, 'F364 held -> null (the held run)')
// THE FACE 386 CHAIN THE SWING - THE TAIL'S OWN WINDOW
assert.equal(w(386), SWING + '11 -> 5 (-6) -> 9 (+4)' + SWING_TAIL)

// the whole field rides its table - every window byte-exact
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// the honest silences - the TWO held windows of the priced field
for (const f of SILENCES) assert.equal(w(f), null, 'F' + f + ' held -> null')

// the tally - twenty-four swings, three swells, eight fades, two
// silences = THIRTY-FIVE speaking of THIRTY-SEVEN windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 24, swell: 3, fade: 8, silence: 2 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
for (const r of [w(380), w(353), w(350)]) {
  for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
    assert.doesNotMatch(r, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  }
}

// THE FENCE - the fold's own image must prove itself
assert.equal(bankTripTrendConsistent(null), false)
assert.equal(bankTripTrendConsistent(undefined), false)
assert.equal(bankTripTrendConsistent('cell'), false)
assert.equal(bankTripTrendConsistent([]), false)
assert.equal(bankTripTrendConsistent({ back: { bankTripGrants: 0 }, prev: { bankTripGrants: 0 } }), false)
assert.equal(bankTripTrendConsistent({ back: { bankTripGrants: 0 }, prev: { bankTripGrants: 0 }, cur: { bankTripGrants: 0 } }), true)
assert.equal(bankTripTrendConsistent({ back: { bankTripGrants: -1 }, prev: { bankTripGrants: 0 }, cur: { bankTripGrants: 0 } }), false)
assert.equal(bankTripTrendConsistent({ back: { bankTripGrants: 1.5 }, prev: { bankTripGrants: 0 }, cur: { bankTripGrants: 0 } }), false)
assert.equal(bankTripTrendConsistent({ back: { bankTripGrants: '3' }, prev: { bankTripGrants: 0 }, cur: { bankTripGrants: 0 } }), false)
assert.equal(bankTripTrendConsistent({ back: null, prev: { bankTripGrants: 0 }, cur: { bankTripGrants: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(bankTripTrendConsistent({ back: { bankTripGrants: 0, busy: 1 }, prev: { bankTripGrants: 2, busy: 1 }, cur: { bankTripGrants: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(bankTripTrendRow(null), null)
assert.equal(bankTripTrendRow('x'), null)
assert.equal(bankTripTrendRow({ back: { bankTripGrants: 1 }, prev: { bankTripGrants: 1 }, cur: { bankTripGrants: 1 } }), null)

// THE CELL'S OWN READ - bankTripGrants rides the grant shape (two
// emitters, one shape: the planned grants and the fuel-tithe grants;
// the deferred lines and the climb-refused verdicts different shapes,
// never priced; the zero-grant read a lawful count).
assert.equal(bankTripGrants(null), 0)
assert.equal(bankTripGrants(undefined), 0)
assert.equal(bankTripGrants('lines'), 0)
assert.equal(bankTripGrants({}), 0)
assert.equal(bankTripGrants([]), 0)
assert.equal(bankTripGrants(['junk line', 'F1 walk failed']), 0)
assert.equal(bankTripGrants(['F7 bank trip: planned budget 204s']), 1)
assert.equal(bankTripGrants(['F17 bank trip: fuel-tithe budget 176s']), 1)
assert.equal(bankTripGrants(['F9 bank trip: deferred (rescue owns the bot - the arm waits for the release, the budget never burns)']), 0)
assert.equal(bankTripGrants(['F6 bank trip: 0 (climb refused - the pocket rides the next cadence window)']), 0)
assert.equal(bankTripGrants(['bank trip: planned budget 204s']), 0)
assert.equal(bankTripGrants(['F7 bank trip: planned budget 204']), 0)
assert.equal(bankTripGrants(['F7 bank trip: planned budget abc']), 0)

// THE ONE-PARSER RIDE - the real face lines the cache holds: the two
// emitters count, the other bank shapes never ride.
const lines = [
  'F7 bank trip: planned budget 204s',
  'F17 bank trip: fuel-tithe budget 176s',
  'F9 bank trip: deferred (rescue owns the bot - the arm waits for the release, the budget never burns)',
  'F6 bank trip: 0 (climb refused - the pocket rides the next cadence window)'
]
assert.equal(bankTripGrants(lines), 2)
// the fold rides the read's own count - the wire's own arithmetic
const fold = { back: { bankTripGrants: bankTripGrants(lines) }, prev: { bankTripGrants: 7 }, cur: { bankTripGrants: 0 } }
assert.equal(bankTripTrendRow(fold), SWING + '2 -> 7 (+5) -> 0 (-7)' + SWING_TAIL)

console.log('banktriptrend.test: all pins green')
