// tests/unit/toolrecoverytrend.test.mjs - THE TOOL RECOVERY'S OWN
// TREND's own pin battery (v0.976.153): the field's own chains
// byte-exact (THE STRICT 'TOOL RECOVERY:' EMITTER'S OWN SEAT - the
// toolrecovery.mjs module's own book, THE CELL'S OWN WEIGHT 682u the
// faces' own total, the anatomy byte-true the no-pickaxe triggers
// 230 / the spare craft failures 113 / the surfaced outcomes 115 /
// the other reasons 224, THE FIELD'S OWN TOP the count 48 the face
// 359's own top rode once - THE TOP'S OWN SILENT ARRIVAL the held
// first step priced the window's silence the top the window's second
// leg, the +40 the face 359's own window's second leg the max rise
// step's own single bound, the -30 the face 378's own window's second
// leg the max fall step's own bound, THE FIELD'S OWN FLOOR THE ZERO
// rode TWICE the faces 364/369's own drought pair), THIRTY-THREE of
// THIRTY-SEVEN windows speaking (TWENTY-THREE swings, THREE swells,
// SEVEN fades, the FOUR honest silences), THE THREE ONE-WINDOW ROUND
// TRIPS THE FIRST BOOK RIDES THREE (the face 350's own window, the
// face 370's own window 24 -> 0 -> 24 THE COLLAPSE-AND-REBUILD WHOLE,
// the face 386's own window - every prior book rode ONE or TWO), the
// byte-pin battery, the fence battery, the cell's own read, the
// one-parser ride over the REAL strict tool recovery lines (the
// 'tool recovery:' emissions the toolrecovery.mjs module's own book
// prints; the climb-out tool-recovery skin the .149 word's own cell
// never rides; the climb out (bank/trip/wood trip/food trip) skins
// never ride; the no-colon junk never rides).
import { toolRecoveries, toolRecoveryTrendConsistent, toolRecoveryTrendRow } from '../../src/lib/toolrecoverytrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, this word prices the strict 'tool recovery:' emitter's own mass across the faces - the tool recovery's own seat, co-existence by seat never by duplication)"

const HEAD = "the tool recovery's own trend (v0.976.153)"
const SWING = HEAD + ": the tool recovery's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the tool recovery's rise ran two steps deep - "
const SWELL_TAIL = " - the tool recovery's own swell " + TAIL
const FADE = HEAD + ": the tool recovery's fall ran two steps deep - "
const FADE_TAIL = " - the tool recovery's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the strict tool
// recovery regex's own arithmetic, THIRTY-NINE faces deep) - THE
// CELL'S OWN WEIGHT 682u the faces' own total (the anatomy byte-true:
// the no-pickaxe triggers 230 / the spare craft failures 113 / the
// surfaced outcomes 115 / the other reasons 224), THE FIELD'S OWN TOP
// the count 48 the face 359's own top rode once (THE TOP'S OWN
// SILENT ARRIVAL the held first step priced the window's silence the
// top the window's second leg), the +40 the face 359's own window's
// second leg (the 8 -> 48 the burst), the -30 the face 378's own
// window's second leg (the 42 -> 12 the storm's own drain), THE
// FIELD'S OWN FLOOR THE ZERO rode TWICE (the faces 364/369's own
// drought pair five apart) - THIRTY-THREE of THIRTY-SEVEN windows
// speaking (TWENTY-THREE swings, THREE swells, SEVEN fades, the FOUR
// honest silences) - THE THREE ONE-WINDOW ROUND TRIPS THE FIRST BOOK
// RIDES THREE.
const P = {}
P[348] = 16
P[349] = 24
P[350] = 16
P[351] = 4
P[352] = 28
P[353] = 20
P[354] = 16
P[355] = 12
P[356] = 20
P[357] = 8
P[358] = 8
P[359] = 48
P[360] = 28
P[361] = 8
P[362] = 20
P[363] = 16
P[364] = 0
P[365] = 8
P[366] = 28
P[367] = 12
P[368] = 24
P[369] = 0
P[370] = 24
P[371] = 8
P[372] = 20
P[373] = 16
P[374] = 8
P[375] = 8
P[376] = 24
P[377] = 42
P[378] = 12
P[379] = 8
P[380] = 40
P[381] = 20
P[382] = 32
P[383] = 4
P[384] = 12
P[385] = 28
P[386] = 12
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 682, 'the cell 682u the witness holds')
const w = (f) => toolRecoveryTrendRow({ back: { toolRecoveries: P[f - 2] }, prev: { toolRecoveries: P[f - 1] }, cur: { toolRecoveries: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (twenty-three swings, three swells, seven fades, the
// four held windows the honest silences keep - THE THREE ONE-WINDOW
// ROUND TRIPS the faces 350/370/386's own windows ride)
const SWINGS = {
  350: '16 -> 24 (+8) -> 16 (-8)',
  352: '16 -> 4 (-12) -> 28 (+24)',
  353: '4 -> 28 (+24) -> 20 (-8)',
  356: '16 -> 12 (-4) -> 20 (+8)',
  357: '12 -> 20 (+8) -> 8 (-12)',
  360: '8 -> 48 (+40) -> 28 (-20)',
  362: '28 -> 8 (-20) -> 20 (+12)',
  363: '8 -> 20 (+12) -> 16 (-4)',
  365: '16 -> 0 (-16) -> 8 (+8)',
  367: '8 -> 28 (+20) -> 12 (-16)',
  368: '28 -> 12 (-16) -> 24 (+12)',
  369: '12 -> 24 (+12) -> 0 (-24)',
  370: '24 -> 0 (-24) -> 24 (+24)',
  371: '0 -> 24 (+24) -> 8 (-16)',
  372: '24 -> 8 (-16) -> 20 (+12)',
  373: '8 -> 20 (+12) -> 16 (-4)',
  378: '24 -> 42 (+18) -> 12 (-30)',
  380: '12 -> 8 (-4) -> 40 (+32)',
  381: '8 -> 40 (+32) -> 20 (-20)',
  382: '40 -> 20 (-20) -> 32 (+12)',
  383: '20 -> 32 (+12) -> 4 (-28)',
  384: '32 -> 4 (-28) -> 12 (+8)',
  386: '12 -> 28 (+16) -> 12 (-16)'
}
const SWELLS = {
  366: '0 -> 8 (+8) -> 28 (+20)',
  377: '8 -> 24 (+16) -> 42 (+18)',
  385: '4 -> 12 (+8) -> 28 (+16)'
}
const FADES = {
  351: '24 -> 16 (-8) -> 4 (-12)',
  354: '28 -> 20 (-8) -> 16 (-4)',
  355: '20 -> 16 (-4) -> 12 (-4)',
  361: '48 -> 28 (-20) -> 8 (-20)',
  364: '20 -> 16 (-4) -> 0 (-16)',
  374: '20 -> 16 (-4) -> 8 (-8)',
  379: '42 -> 12 (-30) -> 8 (-4)'
}
const SILENCES = [358, 359, 375, 376]

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
assert.deepEqual(tally, { swing: 23, swell: 3, fade: 7, silence: 4 })

// landmark chains byte-exact full literals
// THE FACE 370 WINDOW THE COLLAPSE-AND-REBUILD WHOLE (24 -> 0 -> 24
// the drought rode mid-trip the full trade one window deep)
assert.equal(w(370), SWING + '24 -> 0 (-24) -> 24 (+24)' + SWING_TAIL)
// THE FACE 378 WINDOW THE MAX FALL STEP'S OWN BOUND (-30 the
// 42 -> 12 the storm's own drain)
assert.equal(w(378), SWING + '24 -> 42 (+18) -> 12 (-30)' + SWING_TAIL)
// THE FACE 359 WINDOW THE TOP'S OWN SILENT ARRIVAL (the held first
// step priced the window's silence the top the window's second leg
// 8 -> 48 - the held law kept quiet)
assert.equal(w(359), null)
// THE FACE 350 WINDOW THE FIRST ONE-WINDOW ROUND TRIP
assert.equal(w(350), SWING + '16 -> 24 (+8) -> 16 (-8)' + SWING_TAIL)
// THE FACE 386 WINDOW THE THIRD ONE-WINDOW ROUND TRIP
assert.equal(w(386), SWING + '12 -> 28 (+16) -> 12 (-16)' + SWING_TAIL)
// THE FACE 364 WINDOW THE FIRST DROUGHT ARRIVAL (the fade the zero
// the drought's own first visit)
assert.equal(w(364), FADE + '20 -> 16 (-4) -> 0 (-16)' + FADE_TAIL)

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
assert.equal(toolRecoveryTrendConsistent(null), false)
assert.equal(toolRecoveryTrendConsistent(undefined), false)
assert.equal(toolRecoveryTrendConsistent('cell'), false)
assert.equal(toolRecoveryTrendConsistent([]), false)
assert.equal(toolRecoveryTrendConsistent({ back: { toolRecoveries: 0 }, prev: { toolRecoveries: 0 } }), false)
assert.equal(toolRecoveryTrendConsistent({ back: { toolRecoveries: 0 }, prev: { toolRecoveries: 0 }, cur: { toolRecoveries: 0 } }), true)
assert.equal(toolRecoveryTrendConsistent({ back: { toolRecoveries: -1 }, prev: { toolRecoveries: 0 }, cur: { toolRecoveries: 0 } }), false)
assert.equal(toolRecoveryTrendConsistent({ back: { toolRecoveries: 1.5 }, prev: { toolRecoveries: 0 }, cur: { toolRecoveries: 0 } }), false)
assert.equal(toolRecoveryTrendConsistent({ back: { toolRecoveries: '3' }, prev: { toolRecoveries: 0 }, cur: { toolRecoveries: 0 } }), false)
assert.equal(toolRecoveryTrendConsistent({ back: null, prev: { toolRecoveries: 0 }, cur: { toolRecoveries: 0 } }), false)
// the fence never rejects extra keys
assert.equal(toolRecoveryTrendConsistent({ back: { toolRecoveries: 0, busy: 1 }, prev: { toolRecoveries: 2, busy: 1 }, cur: { toolRecoveries: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(toolRecoveryTrendRow(null), null)
assert.equal(toolRecoveryTrendRow('x'), null)
assert.equal(toolRecoveryTrendRow({ back: { toolRecoveries: 1 }, prev: { toolRecoveries: 1 }, cur: { toolRecoveries: 1 } }), null)
assert.equal(toolRecoveryTrendRow({ back: { toolRecoveries: 1 }, prev: { toolRecoveries: 0 }, cur: { toolRecoveries: 0 } }), null)

// THE CELL'S OWN READ - toolRecoveries rides the REAL strict tool
// recovery lines
assert.equal(toolRecoveries([
  'F6 tool recovery: no pickaxe - spare-pick craft first',
  'F6 tool recovery: spare craft failed (no table) - re-running the bootstrap',
  'F9 tool recovery: no pickaxe - spare-pick craft first',
  'F9 tool recovery: spare craft failed (no pickaxe materials (need 3 ingots / 3 cobble / 3 planks of ONE type))',
  'F9 tool recovery: surfaced - the wood leg gathers where trees grow'
]), 5)
// the climb-out tool-recovery skin never rides - the .149 word's own
// cell the cells never merge
assert.equal(toolRecoveries(['F6 climb out (tool recovery): failed - stalled']), 0)
assert.equal(toolRecoveries(['F6 climb out (tool recovery): OK +2 levels (2 steps, 1 dug, 18s)']), 0)
// the other climb-out skins never ride - the cells never merge
assert.equal(toolRecoveries(['F4 climb out (bank): OK +6 levels (5 steps, 9 dug, 10s)']), 0)
assert.equal(toolRecoveries(['F3 climb out (trip): OK +6 levels (8 steps, 14 dug, 22s)']), 0)
assert.equal(toolRecoveries(['F5 climb out (wood trip): OK +10 levels (9 steps, 20 dug, 24s)']), 0)
assert.equal(toolRecoveries(['F7 climb out (food trip): failed - stalled']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(toolRecoveries(['F6 tool recovery no pickaxe - spare-pick craft first']), 0)
assert.equal(toolRecoveries(['F6 tool recovery']), 0)
assert.equal(toolRecoveries(['tool recovery: no pickaxe - spare-pick craft first']), 0)
assert.equal(toolRecoveries(['F8 toolrecovery: no pickaxe']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F6 tool recovery: no pickaxe - spare-pick craft first',
  'F9 tool recovery: surfaced - the wood leg gathers where trees grow'
]
assert.equal(toolRecoveries(lines), 2)
const fold = { back: { toolRecoveries: toolRecoveries(lines) }, prev: { toolRecoveries: 48 }, cur: { toolRecoveries: 28 } }
assert.equal(toolRecoveryTrendRow(fold), SWING + '2 -> 48 (+46) -> 28 (-20)' + SWING_TAIL)

console.log('toolrecoverytrend.test: all pins green')
