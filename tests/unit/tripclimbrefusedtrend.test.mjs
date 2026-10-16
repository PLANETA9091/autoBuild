// tests/unit/tripclimbrefusedtrend.test.mjs - THE DOCKET'S OWN TRIP
// CLIMB-REFUSED TREND's own pin battery (v0.976.147): the field's own
// chains byte-exact (THE TRIP CLIMB-REFUSED'S OWN TRADE BOOK - the
// FAMILY'S OWN SWING HEAD TIED, THIRTY-TWO of THIRTY-SEVEN windows
// speaking, the docket DRIED ONCE - the face 355's own zero the
// field's own floor rode once and the face 356's own window the
// zero's own wake the round trip rode), the FIVE honest silences, the
// byte-pin battery, the fence battery, the cell's own read over the
// three lane skins (the bank and the wood and the food trips' own
// climb-refused verdicts one shape - the tool recovery's own skin a
// different carrier never priced), the one-parser ride (the same
// verdict lines the bank trip grant's own trend and the bank chain's
// own defer trend EXCLUDED by name - the cells never merge).
import { tripClimbRefusals, tripClimbRefusedTrendConsistent, tripClimbRefusedTrendRow } from '../../src/lib/tripclimbrefusedtrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, this word prices the docket's own trip climb-refused verdict mass across the faces - the bank book's own climb-refused seat, co-existence by seat never by duplication)"

const HEAD = "the trip climb-refused's own trend (v0.976.147)"
const SWING = HEAD + ": the trip climb-refused's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the trip climb-refused's rise ran two steps deep - "
const SWELL_TAIL = " - the trip climb-refused's own swell " + TAIL
const FADE = HEAD + ": the trip climb-refused's fall ran two steps deep - "
const FADE_TAIL = " - the trip climb-refused's own fade " + TAIL

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..386 (the
// climb-refused regex's own arithmetic, THIRTY-NINE faces deep) -
// THE CELL'S OWN WEIGHT 229u the faces' own total byte-true, THE
// FIELD'S OWN TOP the face 357's own count 13, the +8 the face 373's
// own window the max rise step's own single bound (the 2 -> 10), the
// -9 the face 369's own window the max fall step's own single bound
// (the 12 -> 3 the top's own payback), THE FIELD'S OWN FLOOR the
// ZERO the face 355's own zero rode once (THE DOCKET DRIED ONCE) -
// THE TRIP CLIMB-REFUSED'S OWN TRADE BOOK (THIRTY-TWO of
// THIRTY-SEVEN windows speaking: TWENTY-TWO swings, FOUR swells, SIX
// fades, the FIVE honest silences beside - the traded seat the
// dominant shape twice over).
const P = {}
P[348] = 3
P[349] = 6
P[350] = 5
P[351] = 5
P[352] = 4
P[353] = 2
P[354] = 7
P[355] = 0
P[356] = 7
P[357] = 13
P[358] = 8
P[359] = 2
P[360] = 4
P[361] = 8
P[362] = 8
P[363] = 8
P[364] = 5
P[365] = 9
P[366] = 7
P[367] = 6
P[368] = 12
P[369] = 3
P[370] = 4
P[371] = 3
P[372] = 2
P[373] = 10
P[374] = 7
P[375] = 6
P[376] = 10
P[377] = 5
P[378] = 6
P[379] = 8
P[380] = 5
P[381] = 1
P[382] = 5
P[383] = 4
P[384] = 5
P[385] = 11
P[386] = 5
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 229, 'the cell 229u the witness holds')
const w = (f) => tripClimbRefusedTrendRow({ back: { tripClimbRefusals: P[f - 2] }, prev: { tripClimbRefusals: P[f - 1] }, cur: { tripClimbRefusals: P[f] } })

// THE FIELD'S OWN TABLE - the priced windows the hand's own
// classification (twenty-two swings, four swells, six fades, the
// FIVE held windows the honest silences keep - the docket's own rest)
const SWINGS = {
  350: '3 -> 6 (+3) -> 5 (-1)',
  354: '4 -> 2 (-2) -> 7 (+5)',
  355: '2 -> 7 (+5) -> 0 (-7)',
  356: '7 -> 0 (-7) -> 7 (+7)',
  358: '7 -> 13 (+6) -> 8 (-5)',
  360: '8 -> 2 (-6) -> 4 (+2)',
  365: '8 -> 5 (-3) -> 9 (+4)',
  366: '5 -> 9 (+4) -> 7 (-2)',
  368: '7 -> 6 (-1) -> 12 (+6)',
  369: '6 -> 12 (+6) -> 3 (-9)',
  370: '12 -> 3 (-9) -> 4 (+1)',
  371: '3 -> 4 (+1) -> 3 (-1)',
  373: '3 -> 2 (-1) -> 10 (+8)',
  374: '2 -> 10 (+8) -> 7 (-3)',
  376: '7 -> 6 (-1) -> 10 (+4)',
  377: '6 -> 10 (+4) -> 5 (-5)',
  378: '10 -> 5 (-5) -> 6 (+1)',
  380: '6 -> 8 (+2) -> 5 (-3)',
  382: '5 -> 1 (-4) -> 5 (+4)',
  383: '1 -> 5 (+4) -> 4 (-1)',
  384: '5 -> 4 (-1) -> 5 (+1)',
  386: '5 -> 11 (+6) -> 5 (-6)'
}
const SWELLS = {
  357: '0 -> 7 (+7) -> 13 (+6)',
  361: '2 -> 4 (+2) -> 8 (+4)',
  379: '5 -> 6 (+1) -> 8 (+2)',
  385: '4 -> 5 (+1) -> 11 (+6)'
}
const FADES = {
  353: '5 -> 4 (-1) -> 2 (-2)',
  359: '13 -> 8 (-5) -> 2 (-6)',
  367: '9 -> 7 (-2) -> 6 (-1)',
  372: '4 -> 3 (-1) -> 2 (-1)',
  375: '10 -> 7 (-3) -> 6 (-1)',
  381: '8 -> 5 (-3) -> 1 (-4)'
}
const SILENCES = [351, 352, 362, 363, 364]

// landmark chains byte-exact full literals
// THE FACE 369 WINDOW THE SWING - THE TOP'S OWN PAYBACK (the max
// fall's own window)
assert.equal(w(369), SWING + '6 -> 12 (+6) -> 3 (-9)' + SWING_TAIL)
// THE FACE 356 WINDOW THE SWING - THE ZERO'S OWN WAKE (the round trip
// the drought's own exit rode)
assert.equal(w(356), SWING + '7 -> 0 (-7) -> 7 (+7)' + SWING_TAIL)
// THE FACE 357 CHAIN THE SWELL - THE DROUGHT'S OWN EXIT (the top's
// own build rode the zero's own wake)
assert.equal(w(357), SWELL + '0 -> 7 (+7) -> 13 (+6)' + SWELL_TAIL)
// THE FACE 359 CHAIN THE FADE - the top's own drain two steps deep
assert.equal(w(359), FADE + '13 -> 8 (-5) -> 2 (-6)' + FADE_TAIL)
// THE FACE 355 ZERO - the docket's own dry face (the lawful count the
// field exercised)
assert.equal(P[355], 0, 'F355 the zero the floor rode')
// THE FACE 373 WINDOW THE SWING - THE MAX RISE'S OWN WINDOW (the +8
// the single bound)
assert.equal(w(373), SWING + '3 -> 2 (-1) -> 10 (+8)' + SWING_TAIL)

// the whole field rides its table - every window byte-exact
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)

// the honest silences - the FIVE held windows of the priced field
for (const f of SILENCES) assert.equal(w(f), null, 'F' + f + ' held -> null')

// the tally - twenty-two swings, four swells, six fades, five
// silences = THIRTY-TWO speaking of THIRTY-SEVEN windows
let tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const r = w(f)
  if (r === null) { tally.silence++; continue }
  if (r.includes('own swing')) tally.swing++
  else if (r.includes('own swell')) tally.swell++
  else if (r.includes('own fade')) tally.fade++
}
assert.deepEqual(tally, { swing: 22, swell: 4, fade: 6, silence: 5 })

// THE BYTE-PIN - the row never speaks the shape's own verdict words
// nor the seats' own verdict word nor the dynasty's own
for (const r of [w(369), w(357), w(359)]) {
  for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
    assert.doesNotMatch(r, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  }
}

// THE FENCE - the fold's own image must prove itself
assert.equal(tripClimbRefusedTrendConsistent(null), false)
assert.equal(tripClimbRefusedTrendConsistent(undefined), false)
assert.equal(tripClimbRefusedTrendConsistent('cell'), false)
assert.equal(tripClimbRefusedTrendConsistent([]), false)
assert.equal(tripClimbRefusedTrendConsistent({ back: { tripClimbRefusals: 0 }, prev: { tripClimbRefusals: 0 } }), false)
assert.equal(tripClimbRefusedTrendConsistent({ back: { tripClimbRefusals: 0 }, prev: { tripClimbRefusals: 0 }, cur: { tripClimbRefusals: 0 } }), true)
assert.equal(tripClimbRefusedTrendConsistent({ back: { tripClimbRefusals: -1 }, prev: { tripClimbRefusals: 0 }, cur: { tripClimbRefusals: 0 } }), false)
assert.equal(tripClimbRefusedTrendConsistent({ back: { tripClimbRefusals: 1.5 }, prev: { tripClimbRefusals: 0 }, cur: { tripClimbRefusals: 0 } }), false)
assert.equal(tripClimbRefusedTrendConsistent({ back: { tripClimbRefusals: '3' }, prev: { tripClimbRefusals: 0 }, cur: { tripClimbRefusals: 0 } }), false)
assert.equal(tripClimbRefusedTrendConsistent({ back: null, prev: { tripClimbRefusals: 0 }, cur: { tripClimbRefusals: 0 } }), false)
// the fence never rejects extra keys - the family's own extra-key ride
assert.equal(tripClimbRefusedTrendConsistent({ back: { tripClimbRefusals: 0, busy: 1 }, prev: { tripClimbRefusals: 2, busy: 1 }, cur: { tripClimbRefusals: 1, busy: 1 }, meta: 'x' }), true)

// the row's own junk law - the fence's failures render nothing
assert.equal(tripClimbRefusedTrendRow(null), null)
assert.equal(tripClimbRefusedTrendRow('x'), null)
assert.equal(tripClimbRefusedTrendRow({ back: { tripClimbRefusals: 1 }, prev: { tripClimbRefusals: 1 }, cur: { tripClimbRefusals: 1 } }), null)

// THE CELL'S OWN READ - tripClimbRefusals rides the three lane skins
// one shape (the bank and the wood and the food trips' own
// climb-refused verdicts)
assert.equal(tripClimbRefusals(null), 0)
assert.equal(tripClimbRefusals(undefined), 0)
assert.equal(tripClimbRefusals('lines'), 0)
assert.equal(tripClimbRefusals([]), 0)
assert.equal(tripClimbRefusals(['F10 bank trip: 0 (climb refused - the pocket rides the next cadence window)']), 1)
assert.equal(tripClimbRefusals(['F15 wood trip: 0 (climb refused)']), 1)
assert.equal(tripClimbRefusals(['F14 food trip: 0 (climb refused)']), 1)
assert.equal(tripClimbRefusals([
  'F10 bank trip: 0 (climb refused - the pocket rides the next cadence window)',
  'F15 wood trip: 0 (climb refused)',
  'F14 food trip: 0 (climb refused)'
]), 3)
// the tool recovery's own skin a different carrier - never priced
assert.equal(tripClimbRefusals(['F5 tool recovery: climb refused - the underground attempt stands']), 0)
// the grants and the defers and the pocket defers never ride (the
// sibling seats' own exclusions hold beside)
assert.equal(tripClimbRefusals(['F6 bank trip: planned budget 42s']), 0)
assert.equal(tripClimbRefusals(['F6 bank trip: deferred (rescue owns the bot - the arm waits for the release, the budget never burns)']), 0)
assert.equal(tripClimbRefusals(['F6 bank trip: deferred night (tod=1234)']), 0)
assert.equal(tripClimbRefusals(['F6 final bank deferred: night']), 0)
assert.equal(tripClimbRefusals(['F6 bank trip: 0 (budget spent)']), 0)
// the wood trip's own why join a different anatomy - the bare fail
// line never rides (the count prices the verdict alone)
assert.equal(tripClimbRefusals(['F1 climb out (wood trip): failed - timeout (traversed 8)']), 0)
// the vertical doom's own skip skin never rides (a different book)
assert.equal(tripClimbRefusals(['F18 [F18] chest skip (vertical doom: the yard stands 27 levels up over 3b lateral - the walk ladder cannot climb)']), 0)
// junk-safe
assert.equal(tripClimbRefusals([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own count (the
// wire's own arithmetic: the same verdict lines run over each face's
// own lines, never a fork)
const lines = [
  'F10 bank trip: 0 (climb refused - the pocket rides the next cadence window)',
  'F15 wood trip: 0 (climb refused)',
  'F14 food trip: 0 (climb refused)',
  'F5 tool recovery: climb refused - the underground attempt stands'
]
const count = tripClimbRefusals(lines)
assert.equal(count, 3)
const fold = { back: { tripClimbRefusals: count }, prev: { tripClimbRefusals: 6 }, cur: { tripClimbRefusals: 6 } }
assert.equal(tripClimbRefusedTrendRow(fold), null, 'F403 window the held second step the honest silence')

console.log('tripclimbrefusedtrend.test: all pins green')
