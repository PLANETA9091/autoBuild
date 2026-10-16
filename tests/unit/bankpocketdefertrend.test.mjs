// tests/unit/bankpocketdefertrend.test.mjs - THE BANK POCKET'S OWN
// DEFER TREND's own pin battery (v0.976.148): the field's own chains
// byte-exact (THE BANK POCKET'S OWN BREATH BOOK - THE DENSEST BOOK
// THE FAMILY HOLDS the walk total's own thirty-five beside, THE SWING
// HEAD the food commons lane's own twenty-two beside, THIRTY-FIVE of
// THIRTY-SEVEN windows speaking, the drought's own SINGLE FACE the
// face 383's own zero rode once, the ONE-WINDOW ROUND TRIP the face
// 384's own window 13 -> 0 -> 13 both bounds rode whole), the TWO
// honest silences, the byte-pin battery, the fence battery, the
// cell's own read, the one-parser ride over the REAL pocket lines
// (the 'final bank deferred: night' ride-out the fleet19's own night
// hold prints; the bank trip defer shape the bank chain's own defer
// trend prices - a different cell, the cells never merge; the docket's
// own trip climb-refused verdicts a different cell; the grants and
// the budget-spent verdicts never ride).
import { bankPocketDefers, bankPocketDeferTrendConsistent, bankPocketDeferTrendRow } from '../../src/lib/bankpocketdefertrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, this word prices the bank pocket's own defer mass across the faces - the bank book's own pocket-defer seat, co-existence by seat never by duplication)"

const HEAD = "the bank pocket defer's own trend (v0.976.148)"
const SWING = HEAD + ": the bank pocket defer's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the bank pocket defer's rise ran two steps deep - "
const SWELL_TAIL = " - the bank pocket defer's own swell " + TAIL
const FADE = HEAD + ": the bank pocket defer's fall ran two steps deep - "
const FADE_TAIL = " - the bank pocket defer's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// pocket regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S
// OWN WEIGHT 361u the faces' own total (THE BANK BOOK'S OWN HEAVIEST
// CAUGHT BREATH the trip defer's own 52u the seventh beside), THE
// FIELD'S OWN TOP the count 15 rode TWICE (the faces 349/364's own
// tops), the +13 the face 384's own window's second leg (the 0 -> 13
// the rebuild), the -13 the face 384's own window's first leg (the
// 13 -> 0 the collapse - THE ONE-WINDOW ROUND TRIP both bounds one
// window deep the family's own second the food commons's own F369
// beside), THE FIELD'S OWN FLOOR the ZERO the face 383's own count
// rode once (THE DROUGHT'S OWN SINGLE FACE - the trip defer's own
// nine zero faces beside; the near-droughts the faces 360/366's own
// counts 1) - THIRTY-FIVE of THIRTY-SEVEN windows speaking (TWENTY-
// THREE swings, SEVEN swells, FIVE fades, the TWO honest silences).
const P = {}
P[348] = 11
P[349] = 15
P[350] = 12
P[351] = 6
P[352] = 9
P[353] = 12
P[354] = 6
P[355] = 13
P[356] = 14
P[357] = 10
P[358] = 13
P[359] = 10
P[360] = 1
P[361] = 11
P[362] = 10
P[363] = 13
P[364] = 15
P[365] = 8
P[366] = 1
P[367] = 11
P[368] = 6
P[369] = 10
P[370] = 14
P[371] = 11
P[372] = 5
P[373] = 10
P[374] = 2
P[375] = 12
P[376] = 9
P[377] = 3
P[378] = 5
P[379] = 11
P[380] = 12
P[381] = 13
P[382] = 13
P[383] = 0
P[384] = 13
P[385] = 2
P[386] = 9
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 361, 'the cell 361u the witness holds')
const w = (f) => bankPocketDeferTrendRow({ back: { bankPocketDefers: P[f - 2] }, prev: { bankPocketDefers: P[f - 1] }, cur: { bankPocketDefers: P[f] } })

// THE FIELD'S OWN TABLE - the priced windows the hand's own
// classification (twenty-three swings, seven swells, five fades, the
// TWO held windows the honest silences keep)
const SWINGS = {
  350: '11 -> 15 (+4) -> 12 (-3)',
  352: '12 -> 6 (-6) -> 9 (+3)',
  354: '9 -> 12 (+3) -> 6 (-6)',
  355: '12 -> 6 (-6) -> 13 (+7)',
  357: '13 -> 14 (+1) -> 10 (-4)',
  358: '14 -> 10 (-4) -> 13 (+3)',
  359: '10 -> 13 (+3) -> 10 (-3)',
  361: '10 -> 1 (-9) -> 11 (+10)',
  362: '1 -> 11 (+10) -> 10 (-1)',
  363: '11 -> 10 (-1) -> 13 (+3)',
  365: '13 -> 15 (+2) -> 8 (-7)',
  367: '8 -> 1 (-7) -> 11 (+10)',
  368: '1 -> 11 (+10) -> 6 (-5)',
  369: '11 -> 6 (-5) -> 10 (+4)',
  371: '10 -> 14 (+4) -> 11 (-3)',
  373: '11 -> 5 (-6) -> 10 (+5)',
  374: '5 -> 10 (+5) -> 2 (-8)',
  375: '10 -> 2 (-8) -> 12 (+10)',
  376: '2 -> 12 (+10) -> 9 (-3)',
  378: '9 -> 3 (-6) -> 5 (+2)',
  384: '13 -> 0 (-13) -> 13 (+13)',
  385: '0 -> 13 (+13) -> 2 (-11)',
  386: '13 -> 2 (-11) -> 9 (+7)'
}
const SWELLS = {
  353: '6 -> 9 (+3) -> 12 (+3)',
  356: '6 -> 13 (+7) -> 14 (+1)',
  364: '10 -> 13 (+3) -> 15 (+2)',
  370: '6 -> 10 (+4) -> 14 (+4)',
  379: '3 -> 5 (+2) -> 11 (+6)',
  380: '5 -> 11 (+6) -> 12 (+1)',
  381: '11 -> 12 (+1) -> 13 (+1)'
}
const FADES = {
  351: '15 -> 12 (-3) -> 6 (-6)',
  360: '13 -> 10 (-3) -> 1 (-9)',
  366: '15 -> 8 (-7) -> 1 (-7)',
  372: '14 -> 11 (-3) -> 5 (-6)',
  377: '12 -> 9 (-3) -> 3 (-6)'
}
const SILENCES = [382, 383]

// landmark chains byte-exact full literals
// THE FACE 384 WINDOW THE SWING - THE ONE-WINDOW ROUND TRIP (both
// bounds +-13 one window deep - the drought's own exit whole)
assert.equal(w(384), SWING + '13 -> 0 (-13) -> 13 (+13)' + SWING_TAIL)
// THE FACE 366 CHAIN THE FADE - THE TOP'S OWN TWO-STEP DRAIN (the
// F364 top's own payback the near-drought's own entry)
assert.equal(w(366), FADE + '15 -> 8 (-7) -> 1 (-7)' + FADE_TAIL)
// THE FACE 370 CHAIN THE SWELL - THE REBUILD'S OWN SYMMETRIC BUILD
// (the +4/+4 the two-step walk)
assert.equal(w(370), SWELL + '6 -> 10 (+4) -> 14 (+4)' + SWELL_TAIL)
// THE FACE 383 WINDOW THE HONEST SILENCE - the top's own held run
// then the drought's own arrival (the held 13 -> 13 first step the
// drought's own door kept)
assert.equal(w(383), null, 'F383 held -> null (the drought arrival)')

// the whole field rides its table - every window byte-exact
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// the honest silences - the TWO held windows of the priced field
for (const f of SILENCES) assert.equal(w(f), null, 'F' + f + ' held -> null')

// the tally - twenty-three swings, seven swells, five fades, two
// silences = THIRTY-FIVE speaking of THIRTY-SEVEN windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 23, swell: 7, fade: 5, silence: 2 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
for (const r of [w(384), w(366), w(370)]) {
  for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
    assert.doesNotMatch(r, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  }
}

// THE FENCE - the fold's own image must prove itself
assert.equal(bankPocketDeferTrendConsistent(null), false)
assert.equal(bankPocketDeferTrendConsistent(undefined), false)
assert.equal(bankPocketDeferTrendConsistent('cell'), false)
assert.equal(bankPocketDeferTrendConsistent([]), false)
assert.equal(bankPocketDeferTrendConsistent({ back: { bankPocketDefers: 0 }, prev: { bankPocketDefers: 0 } }), false)
assert.equal(bankPocketDeferTrendConsistent({ back: { bankPocketDefers: 0 }, prev: { bankPocketDefers: 0 }, cur: { bankPocketDefers: 0 } }), true)
assert.equal(bankPocketDeferTrendConsistent({ back: { bankPocketDefers: -1 }, prev: { bankPocketDefers: 0 }, cur: { bankPocketDefers: 0 } }), false)
assert.equal(bankPocketDeferTrendConsistent({ back: { bankPocketDefers: 1.5 }, prev: { bankPocketDefers: 0 }, cur: { bankPocketDefers: 0 } }), false)
assert.equal(bankPocketDeferTrendConsistent({ back: { bankPocketDefers: '3' }, prev: { bankPocketDefers: 0 }, cur: { bankPocketDefers: 0 } }), false)
assert.equal(bankPocketDeferTrendConsistent({ back: null, prev: { bankPocketDefers: 0 }, cur: { bankPocketDefers: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(bankPocketDeferTrendConsistent({ back: { bankPocketDefers: 0, busy: 1 }, prev: { bankPocketDefers: 2, busy: 1 }, cur: { bankPocketDefers: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(bankPocketDeferTrendRow(null), null)
assert.equal(bankPocketDeferTrendRow('x'), null)
assert.equal(bankPocketDeferTrendRow({ back: { bankPocketDefers: 1 }, prev: { bankPocketDefers: 1 }, cur: { bankPocketDefers: 1 } }), null)

// THE CELL'S OWN READ - bankPocketDefers rides the REAL pocket lines
// (the fleet19's own night hold emitter - one emitter, one shape)
assert.equal(bankPocketDefers(null), 0)
assert.equal(bankPocketDefers(undefined), 0)
assert.equal(bankPocketDefers('x'), 0)
assert.equal(bankPocketDefers([]), 0)
assert.equal(bankPocketDefers(['F5 final bank deferred: night (tod=12418) - the pocket rides out the dark alive (the v0.140.1 night hold)']), 1)
assert.equal(bankPocketDefers([
  'F3 final bank deferred: night (tod=12418) - the pocket rides out the dark alive (the v0.140.1 night hold)',
  'F7 final bank deferred: night (tod=12500) - the pocket rides out the dark alive (the v0.140.1 night hold)'
]), 2)
// the trip defers never ride - the cells never merge (the bank
// chain's own defer trend prices the trip defer shape)
assert.equal(bankPocketDefers(['F1 bank trip: deferred night (tod=12400)']), 0)
assert.equal(bankPocketDefers(['F1 bank trip: deferred (rescue owns the bot - the arm waits for the release, the budget never burns)']), 0)
// the climb-refused verdicts never ride - a different cell (the
// docket's own trip climb-refused trend prices them)
assert.equal(bankPocketDefers(['F2 bank trip: 0 (climb refused @-128,396)']), 0)
// the grants and the budget-spent verdicts never ride
assert.equal(bankPocketDefers(['F3 bank trip: planned budget 45s']), 0)
assert.equal(bankPocketDefers(['F4 bank spent: 12s of 45s budget']), 0)
// the no-tod junk line never rides - the shape's own proof the RE
// demands
assert.equal(bankPocketDefers(['F5 final bank deferred: night']), 0)
assert.equal(bankPocketDefers(['F6 final bank deferred: dawn (tod=100)']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F5 final bank deferred: night (tod=12418) - the pocket rides out the dark alive (the v0.140.1 night hold)',
  'F2 final bank deferred: night (tod=12418) - the pocket rides out the dark alive (the v0.140.1 night hold)'
]
assert.equal(bankPocketDefers(lines), 2)
const fold = { back: { bankPocketDefers: bankPocketDefers(lines) }, prev: { bankPocketDefers: 5 }, cur: { bankPocketDefers: 0 } }
assert.equal(bankPocketDeferTrendRow(fold), SWING + '2 -> 5 (+3) -> 0 (-5)' + SWING_TAIL)

console.log('bankpocketdefertrend.test: all pins green')
