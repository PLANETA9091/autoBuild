// tests/unit/climbouttoolrecoverytrend.test.mjs - THE CLIMB-OUT BOOK'S
// OWN TOOL-RECOVERY TREND's own pin battery (v0.976.149): the field's
// own chains byte-exact (THE CLIMB-OUT BOOK'S OWN SMALLEST SKIN - the
// bank 729u / trip 619u / wood trip 114u / food trip 73u skins the
// bigger skins beside - THE STALL'S OWN MASS the failed-stalled 44 of
// the failed 55, the OK verdicts 8 the wins beside, THE CELL'S OWN
// WEIGHT 63u the faces' own total, THE FIELD'S OWN TOP the count 5
// the face 366's own top rode once, the +4 the face 353's own
// window's second leg the max rise step's own single bound, the -3
// the face 350's own window's first leg the max fall step's own
// bound, THE FIELD'S OWN FLOOR THE ZERO rode ELEVEN faces deep - the
// face 383 the two droughts' own shared rest the pocket defer's own
// zero beside), TWENTY-THREE of THIRTY-SEVEN windows speaking
// (EIGHTEEN swings, FOUR swells, ONE fade, the FOURTEEN honest
// silences - THE SILENT-HEAVIEST BOOK THE FAMILY HOLDS), THE FOUR
// SWELLS ALL BORN OF ZERO (the rebuild's own shape every swell the
// zero's own child), the byte-pin battery, the fence battery, the
// cell's own read, the one-parser ride over the REAL tool-recovery
// climb-out lines (the 'climb out (tool recovery):' verdicts the
// fleet19's own skin prints; the strict 'tool recovery:' emissions a
// different cell - the cells never merge; the bank/trip/wood trip/
// food trip climb-out skins never ride; the no-colon junk never
// rides).
import { climbOutToolRecoveries, climbOutToolRecoveryTrendConsistent, climbOutToolRecoveryTrendRow } from '../../src/lib/climbouttoolrecoverytrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, this word prices the climb-out book's own tool-recovery skin mass across the faces - the climb-out book's own tool-recovery seat, co-existence by seat never by duplication)"

const HEAD = "the climb-out tool recovery's own trend (v0.976.149)"
const SWING = HEAD + ": the climb-out tool recovery's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the climb-out tool recovery's rise ran two steps deep - "
const SWELL_TAIL = " - the climb-out tool recovery's own swell " + TAIL
const FADE = HEAD + ": the climb-out tool recovery's fall ran two steps deep - "
const FADE_TAIL = " - the climb-out tool recovery's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the climb-out
// tool-recovery regex's own arithmetic, THIRTY-NINE faces deep) - THE
// CELL'S OWN WEIGHT 63u the faces' own total (THE CLIMB-OUT BOOK'S
// OWN SMALLEST SKIN the food trip's own 73u beside), THE FIELD'S OWN
// TOP the count 5 the face 366's own top rode once, the +4 the face
// 353's own window's second leg (the 0 -> 4 the rebuild), the -3 the
// face 350's own window's first leg (the 3 -> 0 the release), THE
// FIELD'S OWN FLOOR THE ZERO rode ELEVEN faces deep (the faces
// 350/352/360/361/363/364/369/372/374/379/383's own zeros - THE
// DROUGHT'S OWN ELEVEN, the face 383 the pocket defer's own zero the
// two droughts' own shared rest) - TWENTY-THREE of THIRTY-SEVEN
// windows speaking (EIGHTEEN swings, FOUR swells, ONE fade, the
// FOURTEEN honest silences - THE SILENT-HEAVIEST BOOK THE FAMILY
// HOLDS the stall's own weight the book pays every window).
const P = {}
P[348] = 1
P[349] = 3
P[350] = 0
P[351] = 1
P[352] = 0
P[353] = 4
P[354] = 4
P[355] = 3
P[356] = 3
P[357] = 1
P[358] = 2
P[359] = 2
P[360] = 0
P[361] = 0
P[362] = 1
P[363] = 0
P[364] = 0
P[365] = 1
P[366] = 5
P[367] = 2
P[368] = 2
P[369] = 0
P[370] = 1
P[371] = 2
P[372] = 0
P[373] = 1
P[374] = 0
P[375] = 2
P[376] = 3
P[377] = 2
P[378] = 2
P[379] = 0
P[380] = 1
P[381] = 4
P[382] = 2
P[383] = 0
P[384] = 3
P[385] = 2
P[386] = 3
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 63, 'the cell 63u the witness holds')
const w = (f) => climbOutToolRecoveryTrendRow({ back: { climbOutToolRecoveries: P[f - 2] }, prev: { climbOutToolRecoveries: P[f - 1] }, cur: { climbOutToolRecoveries: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (eighteen swings, four swells, one fade, the
// fourteen held windows the honest silences keep - THE FOUR SWELLS
// ALL BORN OF ZERO the rebuild's own shape)
const SWINGS = {
  350: '1 -> 3 (+2) -> 0 (-3)',
  351: '3 -> 0 (-3) -> 1 (+1)',
  352: '0 -> 1 (+1) -> 0 (-1)',
  353: '1 -> 0 (-1) -> 4 (+4)',
  358: '3 -> 1 (-2) -> 2 (+1)',
  363: '0 -> 1 (+1) -> 0 (-1)',
  367: '1 -> 5 (+4) -> 2 (-3)',
  370: '2 -> 0 (-2) -> 1 (+1)',
  372: '1 -> 2 (+1) -> 0 (-2)',
  373: '2 -> 0 (-2) -> 1 (+1)',
  374: '0 -> 1 (+1) -> 0 (-1)',
  375: '1 -> 0 (-1) -> 2 (+2)',
  377: '2 -> 3 (+1) -> 2 (-1)',
  380: '2 -> 0 (-2) -> 1 (+1)',
  382: '1 -> 4 (+3) -> 2 (-2)',
  384: '2 -> 0 (-2) -> 3 (+3)',
  385: '0 -> 3 (+3) -> 2 (-1)',
  386: '3 -> 2 (-1) -> 3 (+1)'
}
const SWELLS = {
  366: '0 -> 1 (+1) -> 5 (+4)',
  371: '0 -> 1 (+1) -> 2 (+1)',
  376: '0 -> 2 (+2) -> 3 (+1)',
  381: '0 -> 1 (+1) -> 4 (+3)'
}
const FADES = {
  383: '4 -> 2 (-2) -> 0 (-2)'
}
const SILENCES = [354, 355, 356, 357, 359, 360, 361, 362, 364, 365, 368, 369, 378, 379]

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
assert.deepEqual(tally, { swing: 18, swell: 4, fade: 1, silence: 14 })

// landmark chains byte-exact full literals
// THE FACE 366 WINDOW THE SWELL - THE TOP'S OWN REBUILD (0 -> 5 the
// field's own top the zero's own child)
assert.equal(w(366), SWELL + '0 -> 1 (+1) -> 5 (+4)' + SWELL_TAIL)
// THE FACE 353 WINDOW - THE MAX RISE STEP'S OWN SINGLE BOUND (+4)
assert.equal(w(353), SWING + '1 -> 0 (-1) -> 4 (+4)' + SWING_TAIL)
// THE FACE 350 WINDOW - THE MAX FALL STEP'S OWN BOUND (-3)
assert.equal(w(350), SWING + '1 -> 3 (+2) -> 0 (-3)' + SWING_TAIL)
// THE FACE 383 WINDOW THE FADE - THE FADE'S OWN SINGLE FACE (the
// drought's own arrival the pocket defer's own zero rests beside)
assert.equal(w(383), FADE + '4 -> 2 (-2) -> 0 (-2)' + FADE_TAIL)

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
assert.equal(climbOutToolRecoveryTrendConsistent(null), false)
assert.equal(climbOutToolRecoveryTrendConsistent(undefined), false)
assert.equal(climbOutToolRecoveryTrendConsistent('cell'), false)
assert.equal(climbOutToolRecoveryTrendConsistent([]), false)
assert.equal(climbOutToolRecoveryTrendConsistent({ back: { climbOutToolRecoveries: 0 }, prev: { climbOutToolRecoveries: 0 } }), false)
assert.equal(climbOutToolRecoveryTrendConsistent({ back: { climbOutToolRecoveries: 0 }, prev: { climbOutToolRecoveries: 0 }, cur: { climbOutToolRecoveries: 0 } }), true)
assert.equal(climbOutToolRecoveryTrendConsistent({ back: { climbOutToolRecoveries: -1 }, prev: { climbOutToolRecoveries: 0 }, cur: { climbOutToolRecoveries: 0 } }), false)
assert.equal(climbOutToolRecoveryTrendConsistent({ back: { climbOutToolRecoveries: 1.5 }, prev: { climbOutToolRecoveries: 0 }, cur: { climbOutToolRecoveries: 0 } }), false)
assert.equal(climbOutToolRecoveryTrendConsistent({ back: { climbOutToolRecoveries: '3' }, prev: { climbOutToolRecoveries: 0 }, cur: { climbOutToolRecoveries: 0 } }), false)
assert.equal(climbOutToolRecoveryTrendConsistent({ back: null, prev: { climbOutToolRecoveries: 0 }, cur: { climbOutToolRecoveries: 0 } }), false)
// the fence never rejects extra keys
assert.equal(climbOutToolRecoveryTrendConsistent({ back: { climbOutToolRecoveries: 0, busy: 1 }, prev: { climbOutToolRecoveries: 2, busy: 1 }, cur: { climbOutToolRecoveries: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(climbOutToolRecoveryTrendRow(null), null)
assert.equal(climbOutToolRecoveryTrendRow('x'), null)
assert.equal(climbOutToolRecoveryTrendRow({ back: { climbOutToolRecoveries: 1 }, prev: { climbOutToolRecoveries: 1 }, cur: { climbOutToolRecoveries: 1 } }), null)
assert.equal(climbOutToolRecoveryTrendRow({ back: { climbOutToolRecoveries: 1 }, prev: { climbOutToolRecoveries: 0 }, cur: { climbOutToolRecoveries: 0 } }), null)

// THE CELL'S OWN READ - climbOutToolRecoveries rides the REAL
// tool-recovery climb-out lines
assert.equal(climbOutToolRecoveries([
  'F5 climb out (tool recovery): OK +2 levels (2 steps, 1 dug, 18s)',
  'F11 climb out (tool recovery): failed - stalled'
]), 2)
// the other climb-out skins never ride - the cells never merge
assert.equal(climbOutToolRecoveries(['F3 climb out (bank): OK +1 levels (1 steps, 0 dug, 2s)']), 0)
assert.equal(climbOutToolRecoveries(['F4 climb out (trip): OK +6 levels (8 steps, 14 dug, 22s)']), 0)
assert.equal(climbOutToolRecoveries(['F5 climb out (trip): failed - low-o2 (traversed 4)']), 0)
assert.equal(climbOutToolRecoveries(['F6 climb out (wood trip): OK +2 levels (2 steps, 2 dug, 9s)']), 0)
assert.equal(climbOutToolRecoveries(['F7 climb out (food trip): failed - stalled']), 0)
// the strict 'tool recovery:' emissions never ride - a different
// cell (the toolrecovery.mjs module's own book)
assert.equal(climbOutToolRecoveries(['F2 tool recovery: no pickaxe - spare-pick craft first']), 0)
assert.equal(climbOutToolRecoveries(['F2 tool recovery: spare craft failed (no sticks and no planks for sticks) - re-running the bootstrap']), 0)
assert.equal(climbOutToolRecoveries(['F2 tool recovery: surfaced - the wood leg gathers where trees grow']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(climbOutToolRecoveries(['F5 climb out (tool recovery) failed - stalled']), 0)
assert.equal(climbOutToolRecoveries(['F6 climb out (tool recovery)']), 0)
assert.equal(climbOutToolRecoveries(['climb out (tool recovery): failed - stalled']), 0)
assert.equal(climbOutToolRecoveries(['F8 climbout (tool recovery): failed']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F5 climb out (tool recovery): failed - stalled',
  'F2 climb out (tool recovery): OK +3 levels (1 steps, 4 dug, 31s)'
]
assert.equal(climbOutToolRecoveries(lines), 2)
const fold = { back: { climbOutToolRecoveries: climbOutToolRecoveries(lines) }, prev: { climbOutToolRecoveries: 5 }, cur: { climbOutToolRecoveries: 0 } }
assert.equal(climbOutToolRecoveryTrendRow(fold), SWING + '2 -> 5 (+3) -> 0 (-5)' + SWING_TAIL)

console.log('climbouttoolrecoverytrend.test: all pins green')
