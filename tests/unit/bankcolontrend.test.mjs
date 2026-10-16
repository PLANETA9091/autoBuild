// tests/unit/bankcolontrend.test.mjs - THE BANK'S OWN RAW COLON
// TREND's own pin battery (v0.976.164): the field's own chains
// byte-exact (THE BANK BOOK'S OWN RAW COLON SEAT beside the raw
// docket words - the yard-walk arrival lines and the chest-unreachable
// verdicts and the smelt-hold lines and the smelt-hold skips and the
// nothing-to-deposit verdicts and the budget-exhausted verdicts and
// the no-chest lines the lane prints, THE CELL'S OWN WEIGHT 1298u the
// faces' own total - THE FIRE-0142'S OWN NAMED FOURTH the candidate
// naming rode byte-true, THE FIELD'S OWN TOP THE COUNT 56 the face
// 354's own top rode once - the top's own arrival the swell's own
// back rode, the -32 the max fall step's own single bound rode ONCE -
// THE PEAK'S OWN TRADE ONE WINDOW, THE FIELD'S OWN FLOOR THE COUNT 19
// rode TWICE - the faces 352/369's own floors, ZERO FACES NONE - THE
// SKIN NEVER DRIED), TWENTY-NINE of THIRTY-SEVEN windows speaking
// (NINETEEN swings, SEVEN swells, THREE fades, the EIGHT honest
// silences - FOUR back-to-back pairs the faces 351/352, 360/361,
// 371/372, 375/376's own windows hold - THE MOST-PAIRED BOOK THE
// FAMILY HOLDS), THE ONE-WINDOW ROUND TRIP ONCE (the face 367's own
// window), the byte-pin battery, the fence battery, the cell's own
// read, the one-parser ride over the REAL bank lines (the raw mass
// the lane prints; the bank trip grant lines the banktriptrend.mjs
// module's own book never rides; the bank chain's own defer lines
// the bankdefertrend.mjs module's own book never rides; the bank
// pocket's own night defers the bankpocketdefertrend.mjs module's
// own book never rides; the iron commune's own raw colon mass the
// .163 word's own cell never rides - the lanes never merge; the
// sword's own raw docket mass the .162 word's own cell never rides;
// the fuel anchor scan's own mass the .161 word's own cell never
// rides; the food commons' raw docket mass the .160 word's own cell
// never rides; the fuel commons' own raw docket mass the .159 word's
// own cell never rides; the tunnel verdicts the .158 word's own cell
// never ride; the food trip dockets the .157 word's own cell never
// ride; the climb-refused class the .147 word's own cell never
// rides; the climb out skins the climb-out book's own cells never
// ride; the walk-lane census cells the walk book's own axes never
// ride; the no-colon junk never rides).
import { bankColons, bankColonTrendConsistent, bankColonTrendRow } from '../../src/lib/bankcolontrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, this word prices the bank's own raw colon mass across the faces - the bank's own raw colon seat, co-existence by seat never by duplication)"

const HEAD = "the bank's own trend (v0.976.164)"
const SWING = HEAD + ": the bank's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the bank's rise ran two steps deep - "
const SWELL_TAIL = " - the bank's own swell " + TAIL
const FADE = HEAD + ": the bank's fall ran two steps deep - "
const FADE_TAIL = " - the bank's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the bank
// regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 1298u the faces' own total, THE FIELD'S OWN TOP THE COUNT
// 56 the face 354's own top rode once (the top's own arrival the
// swell's own back rode - the floor's own rebuild), the -32 the max
// fall rode ONCE (the peak's own trade one window - the face 369's
// own window's second leg), THE FIELD'S OWN FLOOR THE COUNT 19 rode
// TWICE (the faces 352/369's own floors) - ZERO FACES NONE - THE
// SKIN NEVER DRIED - TWENTY-NINE of THIRTY-SEVEN windows speaking
// (NINETEEN swings, SEVEN swells, THREE fades, the EIGHT honest
// silences - FOUR back-to-back pairs).
const P = {}
P[348] = 32
P[349] = 23
P[350] = 22
P[351] = 22
P[352] = 19
P[353] = 46
P[354] = 56
P[355] = 50
P[356] = 24
P[357] = 26
P[358] = 20
P[359] = 36
P[360] = 36
P[361] = 31
P[362] = 33
P[363] = 29
P[364] = 25
P[365] = 30
P[366] = 26
P[367] = 30
P[368] = 51
P[369] = 19
P[370] = 33
P[371] = 33
P[372] = 40
P[373] = 44
P[374] = 32
P[375] = 32
P[376] = 21
P[377] = 40
P[378] = 42
P[379] = 27
P[380] = 30
P[381] = 34
P[382] = 45
P[383] = 39
P[384] = 42
P[385] = 44
P[386] = 34
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 1298, 'the cell 1298u the witness holds')
const w = (f) => bankColonTrendRow({ back: { bankColons: P[f - 2] }, prev: { bankColons: P[f - 1] }, cur: { bankColons: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (nineteen swings, SEVEN swells, THREE fades, the
// EIGHT honest silences - the FOUR back-to-back pairs the faces
// 351/352, 360/361, 371/372, 375/376's own windows hold)
const SWINGS = {
  353: '22 -> 19 (-3) -> 46 (+27)',
  355: '46 -> 56 (+10) -> 50 (-6)',
  357: '50 -> 24 (-26) -> 26 (+2)',
  358: '24 -> 26 (+2) -> 20 (-6)',
  359: '26 -> 20 (-6) -> 36 (+16)',
  362: '36 -> 31 (-5) -> 33 (+2)',
  363: '31 -> 33 (+2) -> 29 (-4)',
  365: '29 -> 25 (-4) -> 30 (+5)',
  366: '25 -> 30 (+5) -> 26 (-4)',
  367: '30 -> 26 (-4) -> 30 (+4)',
  369: '30 -> 51 (+21) -> 19 (-32)',
  370: '51 -> 19 (-32) -> 33 (+14)',
  374: '40 -> 44 (+4) -> 32 (-12)',
  377: '32 -> 21 (-11) -> 40 (+19)',
  379: '40 -> 42 (+2) -> 27 (-15)',
  380: '42 -> 27 (-15) -> 30 (+3)',
  383: '34 -> 45 (+11) -> 39 (-6)',
  384: '45 -> 39 (-6) -> 42 (+3)',
  386: '42 -> 44 (+2) -> 34 (-10)'
}
const SWELLS = {
  354: '19 -> 46 (+27) -> 56 (+10)',
  368: '26 -> 30 (+4) -> 51 (+21)',
  373: '33 -> 40 (+7) -> 44 (+4)',
  378: '21 -> 40 (+19) -> 42 (+2)',
  381: '27 -> 30 (+3) -> 34 (+4)',
  382: '30 -> 34 (+4) -> 45 (+11)',
  385: '39 -> 42 (+3) -> 44 (+2)'
}
const FADES = {
  350: '32 -> 23 (-9) -> 22 (-1)',
  356: '56 -> 50 (-6) -> 24 (-26)',
  364: '33 -> 29 (-4) -> 25 (-4)'
}
const SILENCES = [351, 352, 360, 361, 371, 372, 375, 376]

// the field's own tally - the arithmetic the book's own breath holds
const tally = { swing: 0, swell: 0, fade: 0, silence: 0 }
for (let f = 350; f <= 386; f++) {
  const first = P[f - 1] - P[f - 2]
  const second = P[f] - P[f - 1]
  if (first === 0 || second === 0) { tally.silence++; continue }
  if (first > 0 && second > 0) tally.swell++
  else if (first < 0 && second < 0) tally.fade++
  else tally.swing++
}
assert.deepEqual(tally, { swing: 19, swell: 7, fade: 3, silence: 8 })

// THE ONE-WINDOW ROUND TRIP ONCE - the book trades one window deep
// once (the face 367's own window 30 -> 26 (-4) -> 30 (+4) - the
// .161's and the .163's own one the mirror beside)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f]) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [367], 'the one round trip the book rides')

// THE FOUR BACK-TO-BACK PAIRS - the EIGHT silences the four held
// legs ride (the ONE held leg the two windows share every pair)
const heldLegs = []
for (let f = 350; f <= 386; f++) {
  if (P[f] === P[f - 1]) heldLegs.push(f)
}
assert.deepEqual(heldLegs, [351, 360, 371, 375], 'the four held legs the eight silences ride')

// landmark chains byte-exact full literals
// THE FIELD'S OWN OPENER - the face 350's own fade the field's own
// first word rode (the faces 348/349 no window the carrier's own
// law)
assert.equal(w(350), FADE + '32 -> 23 (-9) -> 22 (-1)' + FADE_TAIL)
// THE FLOOR'S OWN TRADE the max rise's own bound the same window
// rode (the 19 the face 352's own floor - the +27 the face 353's
// own window's second leg)
assert.equal(w(353), SWING + '22 -> 19 (-3) -> 46 (+27)' + SWING_TAIL)
// THE TOP'S OWN ARRIVAL the floor's own rebuild the swell's own
// back rode (the 56 the face 354's own top - the +27 the same
// bound the window's first leg rode)
assert.equal(w(354), SWELL + '19 -> 46 (+27) -> 56 (+10)' + SWELL_TAIL)
// THE ROUND TRIP (the face 367's own window the book trades one
// window deep once)
assert.equal(w(367), SWING + '30 -> 26 (-4) -> 30 (+4)' + SWING_TAIL)
// THE SECOND BUILD (the face 368's own swell the +21 the build
// toward the peak rode)
assert.equal(w(368), SWELL + '26 -> 30 (+4) -> 51 (+21)' + SWELL_TAIL)
// THE PEAK'S OWN TRADE ONE WINDOW (the face 369's own window the
// -32 the max fall step's own single bound rode - the top's own
// mass the drain rode)
assert.equal(w(369), SWING + '30 -> 51 (+21) -> 19 (-32)' + SWING_TAIL)
// THE HONEST SILENCES THE FOUR PAIRS (the held steps priced no
// direction - the most-paired book the family holds)
assert.equal(w(351), null, 'F351 held (-1 then +0) -> null')
assert.equal(w(352), null, 'F352 held (+0) -> null')
assert.equal(w(371), null, 'F371 held (+0) -> null')
assert.equal(w(376), null, 'F376 held (+0) -> null')
// THE LAST FADE (the face 364's own fade the last the book speaks)
assert.equal(w(364), FADE + '33 -> 29 (-4) -> 25 (-4)' + FADE_TAIL)
// THE LAST WORD (the face 386's own swing the book's own last)
assert.equal(w(386), SWING + '42 -> 44 (+2) -> 34 (-10)' + SWING_TAIL)

// the whole book byte-exact - every window the field's own chain
for (const [f, arc] of Object.entries(SWINGS)) assert.equal(w(+f), SWING + arc + SWING_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(SWELLS)) assert.equal(w(+f), SWELL + arc + SWELL_TAIL, 'F' + f)
for (const [f, arc] of Object.entries(FADES)) assert.equal(w(+f), FADE + arc + FADE_TAIL, 'F' + f)
for (const f of SILENCES) assert.equal(w(f), null, 'F' + f + ' held -> null')

// THE BYTE-PIN BATTERY - the family's own banned words the row never
// speaks (byte-pin no return no repeat no stay no run no owns no
// dynasty no turn)
for (const banned of ['return', 'repeat', 'stay', 'run', 'owns', 'dynasty', 'turn']) {
  for (const [f, arc] of Object.entries(SWINGS)) assert.doesNotMatch(SWING + arc + SWING_TAIL, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  for (const [f, arc] of Object.entries(SWELLS)) assert.doesNotMatch(SWELL + arc + SWELL_TAIL, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
  for (const [f, arc] of Object.entries(FADES)) assert.doesNotMatch(FADE + arc + FADE_TAIL, new RegExp('\\b' + banned + '\\b'), 'byte-pin: ' + banned)
}

// THE FENCE BATTERY - the fold must prove itself or price nothing
assert.equal(bankColonTrendConsistent(null), false)
assert.equal(bankColonTrendConsistent(undefined), false)
assert.equal(bankColonTrendConsistent('cell'), false)
assert.equal(bankColonTrendConsistent([]), false)
assert.equal(bankColonTrendConsistent({ back: { bankColons: 0 }, prev: { bankColons: 0 } }), false)
assert.equal(bankColonTrendConsistent({ back: { bankColons: 0 }, prev: { bankColons: 0 }, cur: { bankColons: 0 } }), true)
assert.equal(bankColonTrendConsistent({ back: { bankColons: -1 }, prev: { bankColons: 0 }, cur: { bankColons: 0 } }), false)
assert.equal(bankColonTrendConsistent({ back: { bankColons: 1.5 }, prev: { bankColons: 0 }, cur: { bankColons: 0 } }), false)
assert.equal(bankColonTrendConsistent({ back: { bankColons: '3' }, prev: { bankColons: 0 }, cur: { bankColons: 0 } }), false)
assert.equal(bankColonTrendConsistent({ back: null, prev: { bankColons: 0 }, cur: { bankColons: 0 } }), false)
// the fence never rejects extra keys
assert.equal(bankColonTrendConsistent({ back: { bankColons: 0, busy: 1 }, prev: { bankColons: 2, busy: 1 }, cur: { bankColons: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(bankColonTrendRow(null), null)
assert.equal(bankColonTrendRow('x'), null)
assert.equal(bankColonTrendRow({ back: { bankColons: 1 }, prev: { bankColons: 1 }, cur: { bankColons: 1 } }), null)
assert.equal(bankColonTrendRow({ back: { bankColons: 1 }, prev: { bankColons: 0 }, cur: { bankColons: 0 } }), null)

// THE CELL'S OWN READ - bankColons rides the REAL bank lines (the
// yard-walk arrival lines and the chest-unreachable verdicts and the
// smelt-hold lines and the smelt-hold skips and the
// nothing-to-deposit verdicts and the budget-exhausted verdicts and
// the no-chest lines the field rode - every line the lane prints
// rides, no exclusion the lane needs)
assert.equal(bankColons([
  'F6 bank: yard walk arrived in 0s (1 attempt)',
  'F9 bank: yard walk arrived in 5s (1 attempt)',
  'F6 bank: chest unreachable (Took to long to decide path to goal!) (20 blocks from yard)',
  'F9 bank: holding 30s of 120s for the smelt leg - the walk home owns the rest (the smelt leg waits)',
  'F8 bank: holding 45s of 176s for the smelt leg',
  'F7 bank: smelt hold skipped - no fuel in pocket (coal 0)',
  'F9 bank: 0 (nothing to deposit)',
  'F6 bank: 0 (budget exhausted)',
  'F7 bank: no chest in range (35 blocks from yard) - walking back'
]), 9)
// THE BANK TRIP GRANT LINES the banktriptrend.mjs module's own book
// never rides - the 'F<n> bank trip: ' prefix a different lane
assert.equal(bankColons(['F4 bank trip: planned budget 300s']), 0)
assert.equal(bankColons(['F2 bank trip: fuel-tithe budget 120s']), 0)
// THE BANK CHAIN'S OWN DEFER LINES the bankdefertrend.mjs module's
// own book never rides
assert.equal(bankColons(['F3 bank trip: deferred (budget exhausted)']), 0)
// THE BANK POCKET'S OWN NIGHT DEFERS the bankpocketdefertrend.mjs
// module's own book never rides
assert.equal(bankColons(['F5 final bank deferred: night (tod=18000)']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(bankColons(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(bankColons(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(bankColons(['F5 food commons: chest holds no food']), 0)
assert.equal(bankColons(['F6 fuel commons: budget spent (0/2 units)']), 0)
assert.equal(bankColons(['F5 sword: OK (wooden_sword, holds 1)']), 0)
assert.equal(bankColons(['F8 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here']), 0)
assert.equal(bankColons(['F1 fuel anchor scan: the palette read empty x1 - the singular probe rescued the scan (chest at [-120,81,392])']), 0)
// the walk-lane census cells never ride
assert.equal(bankColons(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
// the climb out skins never ride - the climb-out never banks (the
// climb-out book's own cells)
assert.equal(bankColons(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(bankColons(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(bankColons(['F6 bank OK (the deposit landed)']), 0)
assert.equal(bankColons(['F6 bank']), 0)
assert.equal(bankColons(['bank: yard walk arrived']), 0)
assert.equal(bankColons(['F8 bank-extra: 1 units']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 bank: yard walk arrived in 0s (1 attempt)',
  'F9 bank: 0 (nothing to deposit)',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(bankColons(lines), 2)
const fold = { back: { bankColons: bankColons(lines) }, prev: { bankColons: 19 }, cur: { bankColons: 46 } }
assert.equal(bankColonTrendRow(fold), SWELL + '2 -> 19 (+17) -> 46 (+27)' + SWELL_TAIL)

console.log('bankcolontrend.test: all pins green')
