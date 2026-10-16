// tests/unit/fuelanchorscantrend.test.mjs - THE FUEL ANCHOR SCAN'S
// OWN TREND's own pin battery (v0.976.161): the field's own chains
// byte-exact (THE FUEL COMMONS BOOK'S OWN SCAN SEAT beside the raw
// docket words - the returned-empty verdicts and the colon verdicts
// and the bare-empty verdicts the probe prints, THE CELL'S OWN WEIGHT
// 3370u the faces' own total - THE FIRE-0142'S OWN NAMED HEAVIEST the
// five lanes' own whole pricing rode, THE FIELD'S OWN TOP THE COUNT
// 128 the face 353's own top rode once - the top's own arrival the
// swing's own back rode the +58 the max rise's own bound the same
// step, the -50 the max fall step's own single bound rode ONCE two
// legs, THE FIELD'S OWN FLOOR THE COUNT 58 rode TWICE the faces
// 364/377's own floors, ZERO FACES NONE - THE SKIN NEVER DRIED),
// THIRTY-THREE of THIRTY-SEVEN windows speaking (TWENTY-FIVE swings,
// FIVE swells, THREE fades, the FOUR honest silences - TWO
// back-to-back pairs the faces 357/358's own and the faces 385/386's
// own windows hold, the family's own first two-pair book), THE
// ONE-WINDOW ROUND TRIP ONCE (the face 351's own window), the
// byte-pin battery, the fence battery, the cell's own read, the
// one-parser ride over the REAL anchor scan lines (all THREE line
// kinds ride; the 'F<n> fuel anchor: ' delivery verdicts a different
// lane never ride - the scan never delivers; the fuel commons' own
// raw docket mass the .159 word's own cell never rides - the scan
// never commons; the docket's own food commons verdicts the .160
// word's own cell never rides; the sword's own lines the sworddue
// census never rides; the climb out skins never ride; the no-colon
// junk never rides).
import { fuelAnchorScans, fuelAnchorScanTrendConsistent, fuelAnchorScanTrendRow } from '../../src/lib/fuelanchorscantrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons' own raw docket trend prices the food commons' own raw docket mass across the faces, this word prices the fuel anchor scan's own mass across the faces - the fuel anchor scan's own seat, co-existence by seat never by duplication)"

const HEAD = "the fuel anchor scan's own trend (v0.976.161)"
const SWING = HEAD + ": the fuel anchor scan's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the fuel anchor scan's rise ran two steps deep - "
const SWELL_TAIL = " - the fuel anchor scan's own swell " + TAIL
const FADE = HEAD + ": the fuel anchor scan's fall ran two steps deep - "
const FADE_TAIL = " - the fuel anchor scan's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the fuel anchor
// scan regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S
// OWN WEIGHT 3370u the faces' own total, THE FIELD'S OWN TOP THE
// COUNT 128 the face 353's own top rode once (the top's own arrival
// the swing's own back rode), the -50 the max fall rode ONCE two
// legs, THE FIELD'S OWN FLOOR THE COUNT 58 rode TWICE the faces
// 364/377's own floors - ZERO FACES NONE - THE SKIN NEVER DRIED -
// THIRTY-THREE of THIRTY-SEVEN windows speaking (TWENTY-FIVE swings,
// FIVE swells, THREE fades, the FOUR honest silences).
const P = {}
P[348] = 94
P[349] = 84
P[350] = 62
P[351] = 84
P[352] = 70
P[353] = 128
P[354] = 94
P[355] = 104
P[356] = 98
P[357] = 98
P[358] = 86
P[359] = 122
P[360] = 88
P[361] = 80
P[362] = 70
P[363] = 74
P[364] = 58
P[365] = 78
P[366] = 80
P[367] = 88
P[368] = 68
P[369] = 96
P[370] = 80
P[371] = 94
P[372] = 104
P[373] = 60
P[374] = 86
P[375] = 96
P[376] = 108
P[377] = 58
P[378] = 112
P[379] = 64
P[380] = 118
P[381] = 82
P[382] = 92
P[383] = 72
P[384] = 74
P[385] = 74
P[386] = 92
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 3370, 'the cell 3370u the witness holds')
const w = (f) => fuelAnchorScanTrendRow({ back: { fuelAnchorScans: P[f - 2] }, prev: { fuelAnchorScans: P[f - 1] }, cur: { fuelAnchorScans: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (twenty-five swings, five swells, three fades, the
// FOUR honest silences - the two back-to-back pairs the faces
// 357/358's own and the faces 385/386's own windows hold)
const SWINGS = {
  351: '84 -> 62 (-22) -> 84 (+22)',
  352: '62 -> 84 (+22) -> 70 (-14)',
  353: '84 -> 70 (-14) -> 128 (+58)',
  354: '70 -> 128 (+58) -> 94 (-34)',
  355: '128 -> 94 (-34) -> 104 (+10)',
  356: '94 -> 104 (+10) -> 98 (-6)',
  359: '98 -> 86 (-12) -> 122 (+36)',
  360: '86 -> 122 (+36) -> 88 (-34)',
  363: '80 -> 70 (-10) -> 74 (+4)',
  364: '70 -> 74 (+4) -> 58 (-16)',
  365: '74 -> 58 (-16) -> 78 (+20)',
  368: '80 -> 88 (+8) -> 68 (-20)',
  369: '88 -> 68 (-20) -> 96 (+28)',
  370: '68 -> 96 (+28) -> 80 (-16)',
  371: '96 -> 80 (-16) -> 94 (+14)',
  373: '94 -> 104 (+10) -> 60 (-44)',
  374: '104 -> 60 (-44) -> 86 (+26)',
  377: '96 -> 108 (+12) -> 58 (-50)',
  378: '108 -> 58 (-50) -> 112 (+54)',
  379: '58 -> 112 (+54) -> 64 (-48)',
  380: '112 -> 64 (-48) -> 118 (+54)',
  381: '64 -> 118 (+54) -> 82 (-36)',
  382: '118 -> 82 (-36) -> 92 (+10)',
  383: '82 -> 92 (+10) -> 72 (-20)',
  384: '92 -> 72 (-20) -> 74 (+2)'
}
const SWELLS = {
  366: '58 -> 78 (+20) -> 80 (+2)',
  367: '78 -> 80 (+2) -> 88 (+8)',
  372: '80 -> 94 (+14) -> 104 (+10)',
  375: '60 -> 86 (+26) -> 96 (+10)',
  376: '86 -> 96 (+10) -> 108 (+12)'
}
const FADES = {
  350: '94 -> 84 (-10) -> 62 (-22)',
  361: '122 -> 88 (-34) -> 80 (-8)',
  362: '88 -> 80 (-8) -> 70 (-10)'
}
const SILENCES = [357, 358, 385, 386]

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
assert.deepEqual(tally, { swing: 25, swell: 5, fade: 3, silence: 4 })

// THE ONE-WINDOW ROUND TRIP THE BOOK RIDES ONCE - the face 351's own
// window (84 -> 62 (-22) -> 84 (+22)) - every other swing window the
// book never trades one window deep (the .159 word's own none beside)
let roundTrips = 0
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f]) roundTrips++
}
assert.equal(roundTrips, 1, 'the one round trip the book rides')
assert.equal(P[349], P[351], 'the face 351 round trip the witness holds')

// landmark chains byte-exact full literals
// THE FIRST WINDOW THE FIELD SPEAKS - the field's own first word the
// FADE rode (the faces 348/349 no window the carrier's own law)
assert.equal(w(350), FADE + '94 -> 84 (-10) -> 62 (-22)' + FADE_TAIL)
// THE ONE-WINDOW ROUND TRIP (the face 351's own window)
assert.equal(w(351), SWING + '84 -> 62 (-22) -> 84 (+22)' + SWING_TAIL)
// THE TOP'S OWN ARRIVAL the swing's own back rode (the 128 the face
// 353's own top - the +58 the max rise's own bound the same step)
assert.equal(w(353), SWING + '84 -> 70 (-14) -> 128 (+58)' + SWING_TAIL)
// THE FIRST FLOOR'S OWN ARRIVAL the drain rode (the 58 the face 364's
// own floor)
assert.equal(w(364), SWING + '70 -> 74 (+4) -> 58 (-16)' + SWING_TAIL)
// THE LAST FADE (the face 362's own fade the last the book speaks)
assert.equal(w(362), FADE + '88 -> 80 (-8) -> 70 (-10)' + FADE_TAIL)
// THE LAST SWELL (the face 376's own window the book's own last
// rise-then-rise)
assert.equal(w(376), SWELL + '86 -> 96 (+10) -> 108 (+12)' + SWELL_TAIL)
// THE SECOND FLOOR'S OWN ARRIVAL the max fall's own bound rode (the
// 58 the face 377's own floor) AND THE FLOOR'S OWN TRADE ONE WINDOW
// DEEP (the rebuild the face 378's own window rode)
assert.equal(w(377), SWING + '96 -> 108 (+12) -> 58 (-50)' + SWING_TAIL)
assert.equal(w(378), SWING + '108 -> 58 (-50) -> 112 (+54)' + SWING_TAIL)
// THE FOUR HONEST SILENCES - the two back-to-back pairs (the drain
// rode first the face 357's own, the drain rode second the face
// 358's own; the rise rode first the face 385's own, the rise rode
// second the face 386's own)
assert.equal(w(357), null, 'F357 held -> null')
assert.equal(w(358), null, 'F358 held -> null')
assert.equal(w(385), null, 'F385 held -> null')
assert.equal(w(386), null, 'F386 held -> null')

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
assert.equal(fuelAnchorScanTrendConsistent(null), false)
assert.equal(fuelAnchorScanTrendConsistent(undefined), false)
assert.equal(fuelAnchorScanTrendConsistent('cell'), false)
assert.equal(fuelAnchorScanTrendConsistent([]), false)
assert.equal(fuelAnchorScanTrendConsistent({ back: { fuelAnchorScans: 0 }, prev: { fuelAnchorScans: 0 } }), false)
assert.equal(fuelAnchorScanTrendConsistent({ back: { fuelAnchorScans: 0 }, prev: { fuelAnchorScans: 0 }, cur: { fuelAnchorScans: 0 } }), true)
assert.equal(fuelAnchorScanTrendConsistent({ back: { fuelAnchorScans: -1 }, prev: { fuelAnchorScans: 0 }, cur: { fuelAnchorScans: 0 } }), false)
assert.equal(fuelAnchorScanTrendConsistent({ back: { fuelAnchorScans: 1.5 }, prev: { fuelAnchorScans: 0 }, cur: { fuelAnchorScans: 0 } }), false)
assert.equal(fuelAnchorScanTrendConsistent({ back: { fuelAnchorScans: '3' }, prev: { fuelAnchorScans: 0 }, cur: { fuelAnchorScans: 0 } }), false)
assert.equal(fuelAnchorScanTrendConsistent({ back: null, prev: { fuelAnchorScans: 0 }, cur: { fuelAnchorScans: 0 } }), false)
// the fence never rejects extra keys
assert.equal(fuelAnchorScanTrendConsistent({ back: { fuelAnchorScans: 0, busy: 1 }, prev: { fuelAnchorScans: 2, busy: 1 }, cur: { fuelAnchorScans: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(fuelAnchorScanTrendRow(null), null)
assert.equal(fuelAnchorScanTrendRow('x'), null)
assert.equal(fuelAnchorScanTrendRow({ back: { fuelAnchorScans: 1 }, prev: { fuelAnchorScans: 1 }, cur: { fuelAnchorScans: 1 } }), null)
assert.equal(fuelAnchorScanTrendRow({ back: { fuelAnchorScans: 1 }, prev: { fuelAnchorScans: 0 }, cur: { fuelAnchorScans: 0 } }), null)

// THE CELL'S OWN READ - fuelAnchorScans rides the REAL anchor scan
// lines (all THREE line kinds the probe prints ride - the
// returned-empty verdicts, the colon verdicts, the bare-empty
// verdicts)
assert.equal(fuelAnchorScans([
  'F2 fuel anchor scan returned empty (attempt 1/2) at [-139,64,414] yard d=13 - the palette empty-return class, the singular probe rides first',
  'F2 fuel anchor scan: the palette read empty x1 - the singular probe rescued the scan (chest at [-142,70,411])',
  'F5 fuel anchor scan empty x2 - the singular probe found nothing either'
]), 3)
// the 'F<n> fuel anchor: ' delivery verdicts never ride - the scan
// never delivers (the delivery lane the beside-seat)
assert.equal(fuelAnchorScans([
  'F19 fuel anchor: 0 delivered at arrival (the sub-doom gate: the anchor stands 16 up over 25b lateral - the near window owns the delivery) - the final-leg seat retries',
  'F14 fuel anchor: skipped - the final leg clock (13.5s) cannot afford the walk while the pocket holds 14 over the bound',
  'F8 fuel anchor: the arrival lied (d=14 > 4) - one bounded re-approach rides'
]), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(fuelAnchorScans(['F6 fuel commons: budget spent (0/2 units)']), 0)
assert.equal(fuelAnchorScans(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(fuelAnchorScans(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(fuelAnchorScans(['F4 bank trip: planned budget 300s']), 0)
assert.equal(fuelAnchorScans(['F2 sword: OK (wooden_sword)']), 0)
assert.equal(fuelAnchorScans(['F4 camp furnace: no build (machine near)']), 0)
assert.equal(fuelAnchorScans(['F4 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here']), 0)
// the climb-out skins never ride - the climb-out never scans (the
// climb-out book's own cells)
assert.equal(fuelAnchorScans(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(fuelAnchorScans(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands (the scan needs the colon or the space suffix)
assert.equal(fuelAnchorScans(['F8 fuel anchor scanx: 1 units']), 0)
assert.equal(fuelAnchorScans(['F6 fuel anchor scan']), 0)
assert.equal(fuelAnchorScans(['fuel anchor scan: the palette read empty x1']), 0)
assert.equal(fuelAnchorScans(['F8 fuel anchor scansx: 1']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F2 fuel anchor scan: the palette read empty x1 - the singular probe rescued the scan (chest at [-142,70,411])',
  'F5 fuel anchor scan empty x2 - the singular probe found nothing either',
  'F19 fuel anchor: 0 delivered at arrival (the sub-doom gate) - the final-leg seat retries'
]
assert.equal(fuelAnchorScans(lines), 2)
const fold = { back: { fuelAnchorScans: fuelAnchorScans(lines) }, prev: { fuelAnchorScans: 108 }, cur: { fuelAnchorScans: 58 } }
assert.equal(fuelAnchorScanTrendRow(fold), SWING + '2 -> 108 (+106) -> 58 (-50)' + SWING_TAIL)

console.log('fuelanchorscantrend.test: all pins green')
