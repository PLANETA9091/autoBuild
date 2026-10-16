// tests/unit/climboutbanktrend.test.mjs - THE CLIMB-OUT BOOK'S OWN
// BANK TREND's own pin battery (v0.976.150): the field's own chains
// byte-exact (THE CLIMB-OUT BOOK'S OWN HEAVIEST SKIN - the trip's own
// 619u the second beside, the wood trip's 114u the third, the food
// trip's 73u the fourth, the tool recovery's 63u the smallest the
// climb-out tool recovery word's own cell beside, THE CELL'S OWN
// WEIGHT 729u the faces' own total, THE FIELD'S OWN TOP the count 34
// the face 356's own top rode once - THE TOP'S OWN SILENT ARRIVAL the
// held first step priced the window's silence the top the window's
// second leg, the +21 the face 384's own window's second leg the max
// rise step's own single bound, the -23 the face 369's own window's
// second leg the max fall step's own bound, THE FIELD'S OWN FLOOR THE
// COUNT 8 rode TWICE the faces 379/383's own rests - THE BANK SKIN
// NEVER DRIED zero faces NONE whole the fuel commons lane's own
// never-dried book the companion), THIRTY-ONE of THIRTY-SEVEN windows
// speaking (TWENTY-FOUR swings - THE FAMILY'S OWN SWING HEAD THE NEW
// HEAVIEST - THREE swells, FOUR fades, the SIX honest silences), THE
// TWO ONE-WINDOW ROUND TRIPS THE FIRST BOOK RIDES TWO (the face
// 357's own window and the face 361's own window - every prior book
// rode ONE), the byte-pin battery, the fence battery, the cell's own
// read, the one-parser ride over the REAL bank climb-out lines (the
// 'climb out (bank):' verdicts the fleet19's own skin prints; the
// trip/wood trip/food trip/tool recovery climb-out skins never ride;
// the strict 'tool recovery:' emissions a different cell - the cells
// never merge; the no-colon junk never rides).
import { climbOutBanks, climbOutBankTrendConsistent, climbOutBankTrendRow } from '../../src/lib/climboutbanktrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, this word prices the climb-out book's own bank skin mass across the faces - the climb-out book's own bank seat, co-existence by seat never by duplication)"

const HEAD = "the climb-out bank's own trend (v0.976.150)"
const SWING = HEAD + ": the climb-out bank's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the climb-out bank's rise ran two steps deep - "
const SWELL_TAIL = " - the climb-out bank's own swell " + TAIL
const FADE = HEAD + ": the climb-out bank's fall ran two steps deep - "
const FADE_TAIL = " - the climb-out bank's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the climb-out
// bank regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S
// OWN WEIGHT 729u the faces' own total (THE CLIMB-OUT BOOK'S OWN
// HEAVIEST SKIN), THE FIELD'S OWN TOP the count 34 the face 356's own
// top rode once (THE TOP'S OWN SILENT ARRIVAL the held first step
// priced the window's silence the top the window's second leg), the
// +21 the face 384's own window's second leg (the 8 -> 29 the surge),
// the -23 the face 369's own window's second leg (the 33 -> 10 the
// payback), THE FIELD'S OWN FLOOR THE COUNT 8 rode TWICE (the faces
// 379/383's own rests - THE BANK SKIN NEVER DRIED) - THIRTY-ONE of
// THIRTY-SEVEN windows speaking (TWENTY-FOUR swings THE FAMILY'S OWN
// SWING HEAD THE NEW HEAVIEST, THREE swells, FOUR fades, the SIX
// honest silences).
const P = {}
P[348] = 13
P[349] = 23
P[350] = 17
P[351] = 11
P[352] = 24
P[353] = 17
P[354] = 21
P[355] = 21
P[356] = 34
P[357] = 21
P[358] = 25
P[359] = 17
P[360] = 13
P[361] = 17
P[362] = 17
P[363] = 18
P[364] = 18
P[365] = 29
P[366] = 14
P[367] = 19
P[368] = 33
P[369] = 10
P[370] = 15
P[371] = 18
P[372] = 10
P[373] = 28
P[374] = 16
P[375] = 23
P[376] = 33
P[377] = 16
P[378] = 15
P[379] = 8
P[380] = 16
P[381] = 11
P[382] = 15
P[383] = 8
P[384] = 29
P[385] = 17
P[386] = 19
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 729, 'the cell 729u the witness holds')
const w = (f) => climbOutBankTrendRow({ back: { climbOutBanks: P[f - 2] }, prev: { climbOutBanks: P[f - 1] }, cur: { climbOutBanks: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (twenty-four swings, three swells, four fades, the
// six held windows the honest silences keep - THE TWO ONE-WINDOW
// ROUND TRIPS the faces 357/361's own windows ride)
const SWINGS = {
  350: '13 -> 23 (+10) -> 17 (-6)',
  352: '17 -> 11 (-6) -> 24 (+13)',
  353: '11 -> 24 (+13) -> 17 (-7)',
  354: '24 -> 17 (-7) -> 21 (+4)',
  357: '21 -> 34 (+13) -> 21 (-13)',
  358: '34 -> 21 (-13) -> 25 (+4)',
  359: '21 -> 25 (+4) -> 17 (-8)',
  361: '17 -> 13 (-4) -> 17 (+4)',
  366: '18 -> 29 (+11) -> 14 (-15)',
  367: '29 -> 14 (-15) -> 19 (+5)',
  369: '19 -> 33 (+14) -> 10 (-23)',
  370: '33 -> 10 (-23) -> 15 (+5)',
  372: '15 -> 18 (+3) -> 10 (-8)',
  373: '18 -> 10 (-8) -> 28 (+18)',
  374: '10 -> 28 (+18) -> 16 (-12)',
  375: '28 -> 16 (-12) -> 23 (+7)',
  377: '23 -> 33 (+10) -> 16 (-17)',
  380: '15 -> 8 (-7) -> 16 (+8)',
  381: '8 -> 16 (+8) -> 11 (-5)',
  382: '16 -> 11 (-5) -> 15 (+4)',
  383: '11 -> 15 (+4) -> 8 (-7)',
  384: '15 -> 8 (-7) -> 29 (+21)',
  385: '8 -> 29 (+21) -> 17 (-12)',
  386: '29 -> 17 (-12) -> 19 (+2)'
}
const SWELLS = {
  368: '14 -> 19 (+5) -> 33 (+14)',
  371: '10 -> 15 (+5) -> 18 (+3)',
  376: '16 -> 23 (+7) -> 33 (+10)'
}
const FADES = {
  351: '23 -> 17 (-6) -> 11 (-6)',
  360: '25 -> 17 (-8) -> 13 (-4)',
  378: '33 -> 16 (-17) -> 15 (-1)',
  379: '16 -> 15 (-1) -> 8 (-7)'
}
const SILENCES = [355, 356, 362, 363, 364, 365]

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
assert.deepEqual(tally, { swing: 24, swell: 3, fade: 4, silence: 6 })

// landmark chains byte-exact full literals
// THE FACE 384 WINDOW THE MAX RISE STEP'S OWN SINGLE BOUND (+21 the
// 8 -> 29 the surge)
assert.equal(w(384), SWING + '15 -> 8 (-7) -> 29 (+21)' + SWING_TAIL)
// THE FACE 369 WINDOW THE MAX FALL STEP'S OWN BOUND (-23 the
// 33 -> 10 the payback)
assert.equal(w(369), SWING + '19 -> 33 (+14) -> 10 (-23)' + SWING_TAIL)
// THE FACE 357 WINDOW THE FIRST ONE-WINDOW ROUND TRIP (21 -> 34 ->
// 21 both bounds one window deep)
assert.equal(w(357), SWING + '21 -> 34 (+13) -> 21 (-13)' + SWING_TAIL)
// THE FACE 361 WINDOW THE SECOND ONE-WINDOW ROUND TRIP (17 -> 13 ->
// 17 the book's own two the family's one beside)
assert.equal(w(361), SWING + '17 -> 13 (-4) -> 17 (+4)' + SWING_TAIL)
// THE FACE 356 WINDOW THE TOP'S OWN SILENT ARRIVAL (the held first
// step priced the window's silence the top the window's second leg
// 21 -> 34 - the held law kept quiet)
assert.equal(w(356), null)

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
assert.equal(climbOutBankTrendConsistent(null), false)
assert.equal(climbOutBankTrendConsistent(undefined), false)
assert.equal(climbOutBankTrendConsistent('cell'), false)
assert.equal(climbOutBankTrendConsistent([]), false)
assert.equal(climbOutBankTrendConsistent({ back: { climbOutBanks: 0 }, prev: { climbOutBanks: 0 } }), false)
assert.equal(climbOutBankTrendConsistent({ back: { climbOutBanks: 0 }, prev: { climbOutBanks: 0 }, cur: { climbOutBanks: 0 } }), true)
assert.equal(climbOutBankTrendConsistent({ back: { climbOutBanks: -1 }, prev: { climbOutBanks: 0 }, cur: { climbOutBanks: 0 } }), false)
assert.equal(climbOutBankTrendConsistent({ back: { climbOutBanks: 1.5 }, prev: { climbOutBanks: 0 }, cur: { climbOutBanks: 0 } }), false)
assert.equal(climbOutBankTrendConsistent({ back: { climbOutBanks: '3' }, prev: { climbOutBanks: 0 }, cur: { climbOutBanks: 0 } }), false)
assert.equal(climbOutBankTrendConsistent({ back: null, prev: { climbOutBanks: 0 }, cur: { climbOutBanks: 0 } }), false)
// the fence never rejects extra keys
assert.equal(climbOutBankTrendConsistent({ back: { climbOutBanks: 0, busy: 1 }, prev: { climbOutBanks: 2, busy: 1 }, cur: { climbOutBanks: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(climbOutBankTrendRow(null), null)
assert.equal(climbOutBankTrendRow('x'), null)
assert.equal(climbOutBankTrendRow({ back: { climbOutBanks: 1 }, prev: { climbOutBanks: 1 }, cur: { climbOutBanks: 1 } }), null)
assert.equal(climbOutBankTrendRow({ back: { climbOutBanks: 1 }, prev: { climbOutBanks: 0 }, cur: { climbOutBanks: 0 } }), null)

// THE CELL'S OWN READ - climbOutBanks rides the REAL bank climb-out
// lines
assert.equal(climbOutBanks([
  'F4 climb out (bank): the yard stands 29 levels up over 23b lateral - the climb raises its target to the yard\'s level',
  'F6 climb out (bank): OK +6 levels (5 steps, 9 dug, 10s)',
  'F4 climb out (bank): failed - stalled',
  'F4 climb out (bank): retry (escalated retry after stalled, fenced to 90s of the 128s the chain has left)'
]), 4)
// the other climb-out skins never ride - the cells never merge
assert.equal(climbOutBanks(['F4 climb out (tool recovery): failed - stalled']), 0)
assert.equal(climbOutBanks(['F3 climb out (trip): OK +6 levels (8 steps, 14 dug, 22s)']), 0)
assert.equal(climbOutBanks(['F5 climb out (wood trip): OK +10 levels (9 steps, 20 dug, 24s)']), 0)
assert.equal(climbOutBanks(['F7 climb out (food trip): failed - stalled']), 0)
assert.equal(climbOutBanks(['F5 climb out (trip): failed - low-o2 (traversed 4)']), 0)
// the strict 'tool recovery:' emissions never ride - a different
// cell (the toolrecovery.mjs module's own book)
assert.equal(climbOutBanks(['F2 tool recovery: no pickaxe - spare-pick craft first']), 0)
assert.equal(climbOutBanks(['F2 tool recovery: surfaced - the wood leg gathers where trees grow']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(climbOutBanks(['F5 climb out (bank) failed - stalled']), 0)
assert.equal(climbOutBanks(['F6 climb out (bank)']), 0)
assert.equal(climbOutBanks(['climb out (bank): failed - stalled']), 0)
assert.equal(climbOutBanks(['F8 climbout (bank): failed']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F6 climb out (bank): OK +6 levels (5 steps, 9 dug, 10s)',
  'F4 climb out (bank): failed - stalled'
]
assert.equal(climbOutBanks(lines), 2)
const fold = { back: { climbOutBanks: climbOutBanks(lines) }, prev: { climbOutBanks: 21 }, cur: { climbOutBanks: 34 } }
assert.equal(climbOutBankTrendRow(fold), SWELL + '2 -> 21 (+19) -> 34 (+13)' + SWELL_TAIL)

console.log('climboutbanktrend.test: all pins green')
