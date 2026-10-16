// tests/unit/foodcommonsdockettrend.test.mjs - THE DOCKET'S OWN FOOD
// COMMONS TREND's own pin battery (v0.976.160): the field's own
// chains byte-exact (THE DOCKET BOOK'S OWN FOOD-COMMONS SEAT beside
// the docket's own fuel commons word - the empty reads and the plate
// lines and the walk-fail lines and the ladder lines the docket
// prints, THE CELL'S OWN WEIGHT 1618u the faces' own total - THE
// THIRD HEAVIEST WORD THE FIELD HOLDS, THE FIELD'S OWN TOP THE
// COUNT 92 the face 359's own top rode once - the top's own arrival
// the swing's own back rode, the +68 the max rise rode ONCE two
// legs, the -48 the max fall rode THREE steps SIX legs, THE FIELD'S
// OWN FLOOR THE COUNT 6 the face 379's own floor rode once, ZERO
// FACES NONE - THE SKIN NEVER DRIED), ALL THIRTY-SEVEN windows
// speaking (TWENTY-EIGHT swings, FIVE swells, FOUR fades, the ZERO
// honest silences - THE NEVER-SILENT BOOK THE SECOND THE FAMILY
// HOLDS), THE ONE-WINDOW ROUND TRIPS NONE, the byte-pin battery, the
// fence battery, the cell's own read, the one-parser ride over the
// REAL docket lines (the 'food commons:' verdicts the fleet19's own
// docket prints; the fuel commons' own raw docket mass the .159
// word's own cell never rides - the lanes never merge; the tunnel
// verdicts the .158 word's own cell never ride; the climb-refused
// class the .147 word's own cell never rides; the climb out skins
// the climb-out book's own cells never ride - the climb-out never
// commons; the bank trip grant lines the banktriptrend.mjs module's
// own book never rides; the no-colon junk never rides).
import { foodCommonsDockets, foodCommonsDocketTrendConsistent, foodCommonsDocketTrendRow } from '../../src/lib/foodcommonsdockettrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, this word prices the food commons' own raw docket mass across the faces - the food commons' own raw docket seat, co-existence by seat never by duplication)"

const HEAD = "the food commons docket's own trend (v0.976.160)"
const SWING = HEAD + ": the food commons docket's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the food commons docket's rise ran two steps deep - "
const SWELL_TAIL = " - the food commons docket's own swell " + TAIL
const FADE = HEAD + ": the food commons docket's fall ran two steps deep - "
const FADE_TAIL = " - the food commons docket's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the food commons
// docket regex's own arithmetic, THIRTY-NINE faces deep) - THE
// CELL'S OWN WEIGHT 1618u the faces' own total, THE FIELD'S OWN TOP
// THE COUNT 92 the face 359's own top rode once (the top's own
// arrival the swing's own back rode), the +68 the max rise rode ONCE
// two legs, the -48 the max fall rode THREE steps SIX legs, THE
// FIELD'S OWN FLOOR THE COUNT 6 the face 379's own floor rode once
// - ZERO FACES NONE - THE SKIN NEVER DRIED - ALL THIRTY-SEVEN
// windows speaking (TWENTY-EIGHT swings, FIVE swells, FOUR fades,
// the ZERO honest silences).
const P = {}
P[348] = 55
P[349] = 40
P[350] = 23
P[351] = 39
P[352] = 25
P[353] = 68
P[354] = 27
P[355] = 83
P[356] = 51
P[357] = 63
P[358] = 24
P[359] = 92
P[360] = 58
P[361] = 50
P[362] = 25
P[363] = 15
P[364] = 16
P[365] = 23
P[366] = 27
P[367] = 17
P[368] = 60
P[369] = 12
P[370] = 20
P[371] = 42
P[372] = 76
P[373] = 28
P[374] = 55
P[375] = 43
P[376] = 60
P[377] = 38
P[378] = 54
P[379] = 6
P[380] = 69
P[381] = 26
P[382] = 45
P[383] = 28
P[384] = 33
P[385] = 53
P[386] = 49
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 1618, 'the cell 1618u the witness holds')
const w = (f) => foodCommonsDocketTrendRow({ back: { foodCommonsDockets: P[f - 2] }, prev: { foodCommonsDockets: P[f - 1] }, cur: { foodCommonsDockets: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (twenty-eight swings, five swells, four fades, the
// ZERO honest silences - ALL THIRTY-SEVEN windows the book speaks,
// the never-silent book the second the family holds)
const SWINGS = {
  351: '40 -> 23 (-17) -> 39 (+16)',
  352: '23 -> 39 (+16) -> 25 (-14)',
  353: '39 -> 25 (-14) -> 68 (+43)',
  354: '25 -> 68 (+43) -> 27 (-41)',
  355: '68 -> 27 (-41) -> 83 (+56)',
  356: '27 -> 83 (+56) -> 51 (-32)',
  357: '83 -> 51 (-32) -> 63 (+12)',
  358: '51 -> 63 (+12) -> 24 (-39)',
  359: '63 -> 24 (-39) -> 92 (+68)',
  360: '24 -> 92 (+68) -> 58 (-34)',
  364: '25 -> 15 (-10) -> 16 (+1)',
  367: '23 -> 27 (+4) -> 17 (-10)',
  368: '27 -> 17 (-10) -> 60 (+43)',
  369: '17 -> 60 (+43) -> 12 (-48)',
  370: '60 -> 12 (-48) -> 20 (+8)',
  373: '42 -> 76 (+34) -> 28 (-48)',
  374: '76 -> 28 (-48) -> 55 (+27)',
  375: '28 -> 55 (+27) -> 43 (-12)',
  376: '55 -> 43 (-12) -> 60 (+17)',
  377: '43 -> 60 (+17) -> 38 (-22)',
  378: '60 -> 38 (-22) -> 54 (+16)',
  379: '38 -> 54 (+16) -> 6 (-48)',
  380: '54 -> 6 (-48) -> 69 (+63)',
  381: '6 -> 69 (+63) -> 26 (-43)',
  382: '69 -> 26 (-43) -> 45 (+19)',
  383: '26 -> 45 (+19) -> 28 (-17)',
  384: '45 -> 28 (-17) -> 33 (+5)',
  386: '33 -> 53 (+20) -> 49 (-4)'
}
const SWELLS = {
  365: '15 -> 16 (+1) -> 23 (+7)',
  366: '16 -> 23 (+7) -> 27 (+4)',
  371: '12 -> 20 (+8) -> 42 (+22)',
  372: '20 -> 42 (+22) -> 76 (+34)',
  385: '28 -> 33 (+5) -> 53 (+20)'
}
const FADES = {
  350: '55 -> 40 (-15) -> 23 (-17)',
  361: '92 -> 58 (-34) -> 50 (-8)',
  362: '58 -> 50 (-8) -> 25 (-25)',
  363: '50 -> 25 (-25) -> 15 (-10)'
}
const SILENCES = []

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
assert.deepEqual(tally, { swing: 28, swell: 5, fade: 4, silence: 0 })

// THE ONE-WINDOW ROUND TRIPS NONE - the book never trades one window
// deep (the tunnel docket's own round-trip-less book the .158 word
// beside, the family's own second)
for (let f = 350; f <= 386; f++) {
  assert.notEqual(P[f - 2], P[f], 'F' + f + ' a round trip the book never rides')
}

// landmark chains byte-exact full literals
// THE FIRST WINDOW THE FIELD SPEAKS (the faces 348/349 no window the
// carrier's own law) - the fade the book's own opener rode
assert.equal(w(350), FADE + '55 -> 40 (-15) -> 23 (-17)' + FADE_TAIL)
// THE TOP'S OWN ARRIVAL the swing's own back rode (the 92 the face
// 359's own top - no silent arrival the bank's own face 356 beside)
assert.equal(w(359), SWING + '63 -> 24 (-39) -> 92 (+68)' + SWING_TAIL)
// THE MAX RISE'S OWN SHARED LEG THE NEXT WINDOW'S FIRST (the face
// 360's own window)
assert.equal(w(360), SWING + '24 -> 92 (+68) -> 58 (-34)' + SWING_TAIL)
// THE LAST FADE (the face 363's own fade the book's own last fade)
assert.equal(w(363), FADE + '50 -> 25 (-25) -> 15 (-10)' + FADE_TAIL)
// THE HEAVIEST SWELL (the face 372's own window the +34 the book's
// own heaviest two-step ladder rode)
assert.equal(w(372), SWELL + '20 -> 42 (+22) -> 76 (+34)' + SWELL_TAIL)
// THE FLOOR'S OWN ARRIVAL the drain rode (the 6 the face 379's own
// floor) AND THE FLOOR'S OWN TRADE ONE WINDOW DEEP (the rebuild the
// +63 the face 380's own window rode)
assert.equal(w(379), SWING + '38 -> 54 (+16) -> 6 (-48)' + SWING_TAIL)
assert.equal(w(380), SWING + '54 -> 6 (-48) -> 69 (+63)' + SWING_TAIL)
// THE LAST SWELL (the face 385's own window the book's own last
// rise-then-rise) AND THE LAST WINDOW THE FIELD SPEAKS (the face
// 386's own swing the book's own last word)
assert.equal(w(385), SWELL + '28 -> 33 (+5) -> 53 (+20)' + SWELL_TAIL)
assert.equal(w(386), SWING + '33 -> 53 (+20) -> 49 (-4)' + SWING_TAIL)

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
assert.equal(foodCommonsDocketTrendConsistent(null), false)
assert.equal(foodCommonsDocketTrendConsistent(undefined), false)
assert.equal(foodCommonsDocketTrendConsistent('cell'), false)
assert.equal(foodCommonsDocketTrendConsistent([]), false)
assert.equal(foodCommonsDocketTrendConsistent({ back: { foodCommonsDockets: 0 }, prev: { foodCommonsDockets: 0 } }), false)
assert.equal(foodCommonsDocketTrendConsistent({ back: { foodCommonsDockets: 0 }, prev: { foodCommonsDockets: 0 }, cur: { foodCommonsDockets: 0 } }), true)
assert.equal(foodCommonsDocketTrendConsistent({ back: { foodCommonsDockets: -1 }, prev: { foodCommonsDockets: 0 }, cur: { foodCommonsDockets: 0 } }), false)
assert.equal(foodCommonsDocketTrendConsistent({ back: { foodCommonsDockets: 1.5 }, prev: { foodCommonsDockets: 0 }, cur: { foodCommonsDockets: 0 } }), false)
assert.equal(foodCommonsDocketTrendConsistent({ back: { foodCommonsDockets: '3' }, prev: { foodCommonsDockets: 0 }, cur: { foodCommonsDockets: 0 } }), false)
assert.equal(foodCommonsDocketTrendConsistent({ back: null, prev: { foodCommonsDockets: 0 }, cur: { foodCommonsDockets: 0 } }), false)
// the fence never rejects extra keys
assert.equal(foodCommonsDocketTrendConsistent({ back: { foodCommonsDockets: 0, busy: 1 }, prev: { foodCommonsDockets: 2, busy: 1 }, cur: { foodCommonsDockets: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(foodCommonsDocketTrendRow(null), null)
assert.equal(foodCommonsDocketTrendRow('x'), null)
assert.equal(foodCommonsDocketTrendRow({ back: { foodCommonsDockets: 1 }, prev: { foodCommonsDockets: 1 }, cur: { foodCommonsDockets: 1 } }), null)
assert.equal(foodCommonsDocketTrendRow({ back: { foodCommonsDockets: 1 }, prev: { foodCommonsDockets: 0 }, cur: { foodCommonsDockets: 0 } }), null)

// THE CELL'S OWN READ - foodCommonsDockets rides the REAL docket
// lines (the empty reads and the plate lines and the walk-fail lines
// and the ladder lines the sample rode)
assert.equal(foodCommonsDockets([
  'F3 food commons: chest holds no food',
  'F3 food commons: the plate stays empty (commons empty) - the next trip retries',
  'F12 food commons: chest walk failed (Took to long to decide path to goal!)',
  'F15 food commons: the plate stays empty (no chest reached) - the next trip retries',
  'F9 food commons: chest at [-110,71,402] the yard stands 21 levels up over 2b lateral - the walk ladder cannot climb, the plate rides (the tithe owns the refill)'
]), 5)
// the other lanes' docket lines never ride - the lanes never merge
assert.equal(foodCommonsDockets(['F4 fuel commons: budget spent (0/2 units)']), 0)
assert.equal(foodCommonsDockets(['F5 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(foodCommonsDockets(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(foodCommonsDockets(['F7 wood trip: 0 (climb refused)']), 0)
// the climb-out skins never ride - the climb-out never commons (the
// climb-out book's own cells)
assert.equal(foodCommonsDockets(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(foodCommonsDockets(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(foodCommonsDockets(['F5 food commons chest holds no food']), 0)
assert.equal(foodCommonsDockets(['F6 food commons']), 0)
assert.equal(foodCommonsDockets(['food commons: chest holds no food']), 0)
assert.equal(foodCommonsDockets(['F8 foodcommons: chest holds no food']), 0)
assert.equal(foodCommonsDockets(['F9 food commons-extra: chest holds no food']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F6 food commons: chest holds no food',
  'F4 food commons: the plate stays empty (commons empty) - the next trip retries',
  'F2 fuel commons: budget spent (0/2 units)'
]
assert.equal(foodCommonsDockets(lines), 2)
const fold = { back: { foodCommonsDockets: foodCommonsDockets(lines) }, prev: { foodCommonsDockets: 62 }, cur: { foodCommonsDockets: 81 } }
assert.equal(foodCommonsDocketTrendRow(fold), SWELL + '2 -> 62 (+60) -> 81 (+19)' + SWELL_TAIL)

console.log('foodcommonsdockettrend.test: all pins green')
