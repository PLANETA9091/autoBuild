// tests/unit/tunneldockettrend.test.mjs - THE DOCKET'S OWN TUNNEL
// TREND's own pin battery (v0.976.158): the field's own chains
// byte-exact (THE DOCKET BOOK'S OWN TUNNEL SEAT beside the docket's
// own food trip word - the blocks lines and the seal plan lines and
// the water-lock census lines and the steering lines the docket
// prints, THE CELL'S OWN WEIGHT 7911u the faces' own total - THE
// HEAVIEST WORD THE FIELD HOLDS, THE FIELD'S OWN TOP THE COUNT 458
// the face 359's own top rode once - the top's own arrival the
// swing's own back rode, the +205 the max rise step's own bound rode
// TWO steps FOUR legs, the -264 the max fall step's own single bound
// rode ONCE two legs, THE FIELD'S OWN FLOOR THE COUNT 21 the face
// 377's own floor rode once, ZERO FACES NONE - THE SKIN NEVER
// DRIED), ALL THIRTY-SEVEN windows speaking (TWENTY-SEVEN swings,
// SIX swells, FOUR fades, the ZERO honest silences - THE
// NEVER-SILENT BOOK THE FAMILY HOLDS), THE ONE-WINDOW ROUND TRIPS
// NONE, the byte-pin battery, the fence battery, the cell's own
// read, the one-parser ride over the REAL docket lines (the
// 'tunnel:' verdicts the fleet19's own docket prints; the docket's
// own food trip verdicts the .157 word's own cell never rides - the
// lanes never merge; the climb-refused class the .147 word's own
// cell never rides; the climb out skins the climb-out book's own
// cells never ride - the climb-out never tunnels; the bank trip
// grant lines the banktriptrend.mjs module's own book never rides;
// the no-colon junk never rides).
import { tunnelDockets, tunnelDocketTrendConsistent, tunnelDocketTrendRow } from '../../src/lib/tunneldockettrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, this word prices the docket's own tunnel verdict mass across the faces - the docket's own tunnel seat, co-existence by seat never by duplication)"

const HEAD = "the tunnel docket's own trend (v0.976.158)"
const SWING = HEAD + ": the tunnel docket's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the tunnel docket's rise ran two steps deep - "
const SWELL_TAIL = " - the tunnel docket's own swell " + TAIL
const FADE = HEAD + ": the tunnel docket's fall ran two steps deep - "
const FADE_TAIL = " - the tunnel docket's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the tunnel
// docket regex's own arithmetic, THIRTY-NINE faces deep) - THE
// CELL'S OWN WEIGHT 7911u the faces' own total, THE FIELD'S OWN TOP
// THE COUNT 458 the face 359's own top rode once (the top's own
// arrival the swing's own back rode), the +205 the max rise rode TWO
// steps FOUR legs, the -264 the max fall rode ONCE two legs, THE
// FIELD'S OWN FLOOR THE COUNT 21 the face 377's own floor rode once
// - ZERO FACES NONE - THE SKIN NEVER DRIED - ALL THIRTY-SEVEN
// windows speaking (TWENTY-SEVEN swings, SIX swells, FOUR fades, the
// ZERO honest silences).
const P = {}
P[348] = 117
P[349] = 157
P[350] = 116
P[351] = 177
P[352] = 206
P[353] = 364
P[354] = 100
P[355] = 219
P[356] = 193
P[357] = 328
P[358] = 294
P[359] = 458
P[360] = 235
P[361] = 139
P[362] = 185
P[363] = 213
P[364] = 231
P[365] = 189
P[366] = 223
P[367] = 255
P[368] = 178
P[369] = 251
P[370] = 196
P[371] = 288
P[372] = 242
P[373] = 167
P[374] = 105
P[375] = 137
P[376] = 259
P[377] = 21
P[378] = 226
P[379] = 121
P[380] = 326
P[381] = 84
P[382] = 266
P[383] = 102
P[384] = 222
P[385] = 169
P[386] = 152
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 7911, 'the cell 7911u the witness holds')
const w = (f) => tunnelDocketTrendRow({ back: { tunnelDockets: P[f - 2] }, prev: { tunnelDockets: P[f - 1] }, cur: { tunnelDockets: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (twenty-seven swings, six swells, four fades, the
// ZERO honest silences - ALL THIRTY-SEVEN windows the book speaks,
// the never-silent book the family holds)
const SWINGS = {
  350: '117 -> 157 (+40) -> 116 (-41)',
  351: '157 -> 116 (-41) -> 177 (+61)',
  354: '206 -> 364 (+158) -> 100 (-264)',
  355: '364 -> 100 (-264) -> 219 (+119)',
  356: '100 -> 219 (+119) -> 193 (-26)',
  357: '219 -> 193 (-26) -> 328 (+135)',
  358: '193 -> 328 (+135) -> 294 (-34)',
  359: '328 -> 294 (-34) -> 458 (+164)',
  360: '294 -> 458 (+164) -> 235 (-223)',
  362: '235 -> 139 (-96) -> 185 (+46)',
  365: '213 -> 231 (+18) -> 189 (-42)',
  366: '231 -> 189 (-42) -> 223 (+34)',
  368: '223 -> 255 (+32) -> 178 (-77)',
  369: '255 -> 178 (-77) -> 251 (+73)',
  370: '178 -> 251 (+73) -> 196 (-55)',
  371: '251 -> 196 (-55) -> 288 (+92)',
  372: '196 -> 288 (+92) -> 242 (-46)',
  375: '167 -> 105 (-62) -> 137 (+32)',
  377: '137 -> 259 (+122) -> 21 (-238)',
  378: '259 -> 21 (-238) -> 226 (+205)',
  379: '21 -> 226 (+205) -> 121 (-105)',
  380: '226 -> 121 (-105) -> 326 (+205)',
  381: '121 -> 326 (+205) -> 84 (-242)',
  382: '326 -> 84 (-242) -> 266 (+182)',
  383: '84 -> 266 (+182) -> 102 (-164)',
  384: '266 -> 102 (-164) -> 222 (+120)',
  385: '102 -> 222 (+120) -> 169 (-53)'
}
const SWELLS = {
  352: '116 -> 177 (+61) -> 206 (+29)',
  353: '177 -> 206 (+29) -> 364 (+158)',
  363: '139 -> 185 (+46) -> 213 (+28)',
  364: '185 -> 213 (+28) -> 231 (+18)',
  367: '189 -> 223 (+34) -> 255 (+32)',
  376: '105 -> 137 (+32) -> 259 (+122)'
}
const FADES = {
  361: '458 -> 235 (-223) -> 139 (-96)',
  373: '288 -> 242 (-46) -> 167 (-75)',
  374: '242 -> 167 (-75) -> 105 (-62)',
  386: '222 -> 169 (-53) -> 152 (-17)'
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
assert.deepEqual(tally, { swing: 27, swell: 6, fade: 4, silence: 0 })

// THE ONE-WINDOW ROUND TRIPS NONE - the book never trades one window
// deep (the climb-out food trip's own three beside, the food trip
// docket's own three beside)
for (let f = 350; f <= 386; f++) {
  assert.notEqual(P[f - 2], P[f], 'F' + f + ' a round trip the book never rides')
}

// landmark chains byte-exact full literals
// THE FIRST WINDOW THE FIELD SPEAKS (the faces 348/349 no window the
// carrier's own law)
assert.equal(w(350), SWING + '117 -> 157 (+40) -> 116 (-41)' + SWING_TAIL)
// THE MAX FALL'S OWN DRAIN the window's second leg rode (the -264
// the face 354's own window) AND THE SHARED LEG THE NEXT WINDOW'S
// FIRST (the face 355's own window)
assert.equal(w(354), SWING + '206 -> 364 (+158) -> 100 (-264)' + SWING_TAIL)
assert.equal(w(355), SWING + '364 -> 100 (-264) -> 219 (+119)' + SWING_TAIL)
// THE TOP'S OWN ARRIVAL the swing's own back rode (the 458 the face
// 359's own top - no silent arrival the bank's own face 356 beside)
assert.equal(w(359), SWING + '328 -> 294 (-34) -> 458 (+164)' + SWING_TAIL)
// THE TOP'S OWN DRAIN-AND-FADE (the face 361's own fade the top's
// own mass the two-step drain rode)
assert.equal(w(361), FADE + '458 -> 235 (-223) -> 139 (-96)' + FADE_TAIL)
// THE LAST SWELL (the face 376's own window the book's own last
// rise-then-rise)
assert.equal(w(376), SWELL + '105 -> 137 (+32) -> 259 (+122)' + SWELL_TAIL)
// THE FLOOR'S OWN ARRIVAL the drain rode (the 21 the face 377's own
// floor) AND THE FLOOR'S OWN TRADE ONE WINDOW DEEP (the rebuild the
// +205 the max rise's own bound the face 378's own window rode)
assert.equal(w(377), SWING + '137 -> 259 (+122) -> 21 (-238)' + SWING_TAIL)
assert.equal(w(378), SWING + '259 -> 21 (-238) -> 226 (+205)' + SWING_TAIL)
// THE +205'S OWN SECOND RIDE (the mirror step the face 380's own
// window's second leg rode)
assert.equal(w(380), SWING + '226 -> 121 (-105) -> 326 (+205)' + SWING_TAIL)
// THE LAST FADE (the face 386's own fade the book's own last word)
assert.equal(w(386), FADE + '222 -> 169 (-53) -> 152 (-17)' + FADE_TAIL)

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
assert.equal(tunnelDocketTrendConsistent(null), false)
assert.equal(tunnelDocketTrendConsistent(undefined), false)
assert.equal(tunnelDocketTrendConsistent('cell'), false)
assert.equal(tunnelDocketTrendConsistent([]), false)
assert.equal(tunnelDocketTrendConsistent({ back: { tunnelDockets: 0 }, prev: { tunnelDockets: 0 } }), false)
assert.equal(tunnelDocketTrendConsistent({ back: { tunnelDockets: 0 }, prev: { tunnelDockets: 0 }, cur: { tunnelDockets: 0 } }), true)
assert.equal(tunnelDocketTrendConsistent({ back: { tunnelDockets: -1 }, prev: { tunnelDockets: 0 }, cur: { tunnelDockets: 0 } }), false)
assert.equal(tunnelDocketTrendConsistent({ back: { tunnelDockets: 1.5 }, prev: { tunnelDockets: 0 }, cur: { tunnelDockets: 0 } }), false)
assert.equal(tunnelDocketTrendConsistent({ back: { tunnelDockets: '3' }, prev: { tunnelDockets: 0 }, cur: { tunnelDockets: 0 } }), false)
assert.equal(tunnelDocketTrendConsistent({ back: null, prev: { tunnelDockets: 0 }, cur: { tunnelDockets: 0 } }), false)
// the fence never rejects extra keys
assert.equal(tunnelDocketTrendConsistent({ back: { tunnelDockets: 0, busy: 1 }, prev: { tunnelDockets: 2, busy: 1 }, cur: { tunnelDockets: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(tunnelDocketTrendRow(null), null)
assert.equal(tunnelDocketTrendRow('x'), null)
assert.equal(tunnelDocketTrendRow({ back: { tunnelDockets: 1 }, prev: { tunnelDockets: 1 }, cur: { tunnelDockets: 1 } }), null)
assert.equal(tunnelDocketTrendRow({ back: { tunnelDockets: 1 }, prev: { tunnelDockets: 0 }, cur: { tunnelDockets: 0 } }), null)

// THE CELL'S OWN READ - tunnelDockets rides the REAL docket lines
// (the blocks lines and the seal plan lines and the water-lock
// census lines and the steering lines the sample rode)
assert.equal(tunnelDockets([
  'F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)',
  'F3 tunnel: 0 blocks x3 - sealed or flooded, cooling down 15s',
  'F12 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored',
  'F15 tunnel: water-lock census: water at step 1, 72 sealable in pocket (top cobblestone) - the seal-and-cross frontier is ARMED',
  'F9 tunnel: steering coal_ore @ 6.6b (axis x+, cross 0.30000000000001137, floor lock)'
]), 5)
// the other lanes' docket lines never ride - the lanes never merge
assert.equal(tunnelDockets(['F4 bank trip: planned budget 300s']), 0)
assert.equal(tunnelDockets(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(tunnelDockets(['F7 wood trip: 0 (climb refused)']), 0)
assert.equal(tunnelDockets(['F6 fuel commons: budget spent (0/2 units)']), 0)
// the climb-out skins never ride - the climb-out never tunnels (the
// climb-out book's own cells)
assert.equal(tunnelDockets(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(tunnelDockets(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(tunnelDockets(['F5 tunnel 12 blocks']), 0)
assert.equal(tunnelDockets(['F6 tunnel']), 0)
assert.equal(tunnelDockets(['tunnel: 12 blocks']), 0)
assert.equal(tunnelDockets(['F8 tunnel-extra: 1 blocks']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F6 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored',
  'F2 food trip: famine (hunger 17, plate 0) - the commons walk'
]
assert.equal(tunnelDockets(lines), 2)
const fold = { back: { tunnelDockets: tunnelDockets(lines) }, prev: { tunnelDockets: 137 }, cur: { tunnelDockets: 152 } }
assert.equal(tunnelDocketTrendRow(fold), SWELL + '2 -> 137 (+135) -> 152 (+15)' + SWELL_TAIL)

console.log('tunneldockettrend.test: all pins green')
