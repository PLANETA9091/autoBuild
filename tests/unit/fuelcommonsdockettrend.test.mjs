// tests/unit/fuelcommonsdockettrend.test.mjs - THE FUEL COMMONS' OWN
// RAW DOCKET TREND's own pin battery (v0.976.159): the field's own
// chains byte-exact (THE FUEL COMMONS BOOK'S OWN RAW DOCKET SEAT
// beside the docket book's own words - the anchor chest lines and the
// budget lines and the path nudge lines the lane prints, THE CELL'S
// OWN WEIGHT 10426u the faces' own total - THE FIELD'S OWN UNPRICED
// HEAVIEST the .158 word's own naming rode, THE FIELD'S OWN TOP THE
// COUNT 447 the face 359's own top rode once - the top's own arrival
// the swing's own back rode, the +179 the max rise step's own single
// bound rode TWICE two legs, the -142 the max fall step's own single
// bound rode ONCE two legs, THE FIELD'S OWN FLOOR THE COUNT 168 the
// face 377's own floor rode once, ZERO FACES NONE - THE SKIN NEVER
// DRIED), THIRTY-FIVE of THIRTY-SEVEN windows speaking (TWENTY-FIVE
// swings, SIX swells, FOUR fades, the TWO honest silences - the
// back-to-back pair the faces 357/358's own windows hold), THE
// ONE-WINDOW ROUND TRIPS NONE, the byte-pin battery, the fence
// battery, the cell's own read, the one-parser ride over the REAL
// fuel commons lines (the raw mass the lane prints; the walk-lane's
// own fuel commons lane the walk book's own cell never rides - the
// walk never dockets; the docket's own tunnel verdicts the .158
// word's own cell never rides - the lanes never merge; the docket's
// own food trip verdicts the .157 word's own cell never rides; the
// climb-refused class the .147 word's own cell never rides; the climb
// out skins the climb-out book's own cells never ride - the
// climb-out never commons; the bank trip grant lines the
// banktriptrend.mjs module's own book never rides; the no-colon junk
// never rides).
import { fuelCommonsDockets, fuelCommonsDocketTrendConsistent, fuelCommonsDocketTrendRow } from '../../src/lib/fuelcommonsdockettrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, this word prices the fuel commons' own raw docket mass across the faces - the fuel commons' own raw docket seat, co-existence by seat never by duplication)"

const HEAD = "the fuel commons docket's own trend (v0.976.159)"
const SWING = HEAD + ": the fuel commons docket's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the fuel commons docket's rise ran two steps deep - "
const SWELL_TAIL = " - the fuel commons docket's own swell " + TAIL
const FADE = HEAD + ": the fuel commons docket's fall ran two steps deep - "
const FADE_TAIL = " - the fuel commons docket's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the fuel commons
// regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 10426u the faces' own total, THE FIELD'S OWN TOP THE COUNT
// 447 the face 359's own top rode once (the top's own arrival the
// swing's own back rode), the +179 the max rise rode TWICE two legs,
// the -142 the max fall rode ONCE two legs, THE FIELD'S OWN FLOOR THE
// COUNT 168 the face 377's own floor rode once - ZERO FACES NONE -
// THE SKIN NEVER DRIED - THIRTY-FIVE of THIRTY-SEVEN windows speaking
// (TWENTY-FIVE swings, SIX swells, FOUR fades, the TWO honest
// silences).
const P = {}
P[348] = 299
P[349] = 225
P[350] = 202
P[351] = 325
P[352] = 196
P[353] = 328
P[354] = 245
P[355] = 381
P[356] = 301
P[357] = 301
P[358] = 277
P[359] = 447
P[360] = 322
P[361] = 243
P[362] = 210
P[363] = 216
P[364] = 205
P[365] = 207
P[366] = 280
P[367] = 287
P[368] = 248
P[369] = 266
P[370] = 233
P[371] = 297
P[372] = 302
P[373] = 191
P[374] = 261
P[375] = 270
P[376] = 310
P[377] = 168
P[378] = 347
P[379] = 225
P[380] = 366
P[381] = 248
P[382] = 296
P[383] = 215
P[384] = 206
P[385] = 213
P[386] = 267
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 10426, 'the cell 10426u the witness holds')
const w = (f) => fuelCommonsDocketTrendRow({ back: { fuelCommonsDockets: P[f - 2] }, prev: { fuelCommonsDockets: P[f - 1] }, cur: { fuelCommonsDockets: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (twenty-five swings, six swells, four fades, the TWO
// honest silences - the back-to-back pair the faces 357/358's own
// windows hold)
const SWINGS = {
  351: '225 -> 202 (-23) -> 325 (+123)',
  352: '202 -> 325 (+123) -> 196 (-129)',
  353: '325 -> 196 (-129) -> 328 (+132)',
  354: '196 -> 328 (+132) -> 245 (-83)',
  355: '328 -> 245 (-83) -> 381 (+136)',
  356: '245 -> 381 (+136) -> 301 (-80)',
  359: '301 -> 277 (-24) -> 447 (+170)',
  360: '277 -> 447 (+170) -> 322 (-125)',
  363: '243 -> 210 (-33) -> 216 (+6)',
  364: '210 -> 216 (+6) -> 205 (-11)',
  365: '216 -> 205 (-11) -> 207 (+2)',
  368: '280 -> 287 (+7) -> 248 (-39)',
  369: '287 -> 248 (-39) -> 266 (+18)',
  370: '248 -> 266 (+18) -> 233 (-33)',
  371: '266 -> 233 (-33) -> 297 (+64)',
  373: '297 -> 302 (+5) -> 191 (-111)',
  374: '302 -> 191 (-111) -> 261 (+70)',
  377: '270 -> 310 (+40) -> 168 (-142)',
  378: '310 -> 168 (-142) -> 347 (+179)',
  379: '168 -> 347 (+179) -> 225 (-122)',
  380: '347 -> 225 (-122) -> 366 (+141)',
  381: '225 -> 366 (+141) -> 248 (-118)',
  382: '366 -> 248 (-118) -> 296 (+48)',
  383: '248 -> 296 (+48) -> 215 (-81)',
  385: '215 -> 206 (-9) -> 213 (+7)'
}
const SWELLS = {
  366: '205 -> 207 (+2) -> 280 (+73)',
  367: '207 -> 280 (+73) -> 287 (+7)',
  372: '233 -> 297 (+64) -> 302 (+5)',
  375: '191 -> 261 (+70) -> 270 (+9)',
  376: '261 -> 270 (+9) -> 310 (+40)',
  386: '206 -> 213 (+7) -> 267 (+54)'
}
const FADES = {
  350: '299 -> 225 (-74) -> 202 (-23)',
  361: '447 -> 322 (-125) -> 243 (-79)',
  362: '322 -> 243 (-79) -> 210 (-33)',
  384: '296 -> 215 (-81) -> 206 (-9)'
}
const SILENCES = [357, 358]

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
assert.deepEqual(tally, { swing: 25, swell: 6, fade: 4, silence: 2 })

// THE ONE-WINDOW ROUND TRIPS NONE - the book never trades one window
// deep (the tunnel docket's own none beside, the climb-out food
// trip's own three beside)
for (let f = 350; f <= 386; f++) {
  assert.notEqual(P[f - 2], P[f], 'F' + f + ' a round trip the book never rides')
}

// landmark chains byte-exact full literals
// THE FIRST WINDOW THE FIELD SPEAKS - the field's own first word the
// FADE rode (the faces 348/349 no window the carrier's own law)
assert.equal(w(350), FADE + '299 -> 225 (-74) -> 202 (-23)' + FADE_TAIL)
// THE TOP'S OWN ARRIVAL the swing's own back rode (the 447 the face
// 359's own top - the trade-then-surcharge the window's own shape)
assert.equal(w(359), SWING + '301 -> 277 (-24) -> 447 (+170)' + SWING_TAIL)
// THE TOP'S OWN DRAIN-AND-FADE (the face 361's own fade the top's own
// mass the two-step drain rode)
assert.equal(w(361), FADE + '447 -> 322 (-125) -> 243 (-79)' + FADE_TAIL)
// THE FLOOR'S OWN ARRIVAL the drain rode (the 168 the face 377's own
// floor - the max fall's own bound the window's second leg rode)
assert.equal(w(377), SWING + '270 -> 310 (+40) -> 168 (-142)' + SWING_TAIL)
// THE FLOOR'S OWN TRADE ONE WINDOW DEEP (the rebuild the +179 the max
// rise's own bound the face 378's own window rode)
assert.equal(w(378), SWING + '310 -> 168 (-142) -> 347 (+179)' + SWING_TAIL)
// THE +179'S OWN SECOND RIDE (the shared leg the face 379's own
// window's first leg rode)
assert.equal(w(379), SWING + '168 -> 347 (+179) -> 225 (-122)' + SWING_TAIL)
// THE LAST FADE (the face 384's own fade the last the book speaks)
assert.equal(w(384), FADE + '296 -> 215 (-81) -> 206 (-9)' + FADE_TAIL)
// THE LAST SWELL (the face 386's own window the book's own last word)
assert.equal(w(386), SWELL + '206 -> 213 (+7) -> 267 (+54)' + SWELL_TAIL)
// THE TWO HONEST SILENCES - the back-to-back pair (the face 357's own
// half-hold the drain rode first, the face 358's own half-hold the
// drain rode second)
assert.equal(w(357), null, 'F357 held -> null')
assert.equal(w(358), null, 'F358 held -> null')

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
assert.equal(fuelCommonsDocketTrendConsistent(null), false)
assert.equal(fuelCommonsDocketTrendConsistent(undefined), false)
assert.equal(fuelCommonsDocketTrendConsistent('cell'), false)
assert.equal(fuelCommonsDocketTrendConsistent([]), false)
assert.equal(fuelCommonsDocketTrendConsistent({ back: { fuelCommonsDockets: 0 }, prev: { fuelCommonsDockets: 0 } }), false)
assert.equal(fuelCommonsDocketTrendConsistent({ back: { fuelCommonsDockets: 0 }, prev: { fuelCommonsDockets: 0 }, cur: { fuelCommonsDockets: 0 } }), true)
assert.equal(fuelCommonsDocketTrendConsistent({ back: { fuelCommonsDockets: -1 }, prev: { fuelCommonsDockets: 0 }, cur: { fuelCommonsDockets: 0 } }), false)
assert.equal(fuelCommonsDocketTrendConsistent({ back: { fuelCommonsDockets: 1.5 }, prev: { fuelCommonsDockets: 0 }, cur: { fuelCommonsDockets: 0 } }), false)
assert.equal(fuelCommonsDocketTrendConsistent({ back: { fuelCommonsDockets: '3' }, prev: { fuelCommonsDockets: 0 }, cur: { fuelCommonsDockets: 0 } }), false)
assert.equal(fuelCommonsDocketTrendConsistent({ back: null, prev: { fuelCommonsDockets: 0 }, cur: { fuelCommonsDockets: 0 } }), false)
// the fence never rejects extra keys
assert.equal(fuelCommonsDocketTrendConsistent({ back: { fuelCommonsDockets: 0, busy: 1 }, prev: { fuelCommonsDockets: 2, busy: 1 }, cur: { fuelCommonsDockets: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(fuelCommonsDocketTrendRow(null), null)
assert.equal(fuelCommonsDocketTrendRow('x'), null)
assert.equal(fuelCommonsDocketTrendRow({ back: { fuelCommonsDockets: 1 }, prev: { fuelCommonsDockets: 1 }, cur: { fuelCommonsDockets: 1 } }), null)
assert.equal(fuelCommonsDocketTrendRow({ back: { fuelCommonsDockets: 1 }, prev: { fuelCommonsDockets: 0 }, cur: { fuelCommonsDockets: 0 } }), null)

// THE CELL'S OWN READ - fuelCommonsDockets rides the REAL fuel
// commons lines (the anchor chest lines and the budget lines and the
// path nudge lines the sample rode - every line the lane prints
// rides, no exclusion the lane needs)
assert.equal(fuelCommonsDockets([
  'F2 fuel commons: the anchor chest is read first',
  'F6 fuel commons: budget spent (0/2 units)',
  'F2 fuel commons: path nudge inside the direct envelope',
  'F2 fuel commons: path nudge approach: the stall side-step (right) moved the start (d now 6.7)',
  'F2 fuel commons: path nudge approach: 2 segment(s) walked in 9.1s, goal now d=6.7 (inside the direct envelope)'
]), 5)
// the other lanes' lines never ride - the lanes never merge
assert.equal(fuelCommonsDockets(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(fuelCommonsDockets(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(fuelCommonsDockets(['F4 bank trip: planned budget 300s']), 0)
assert.equal(fuelCommonsDockets(['F7 wood trip: 0 (climb refused)']), 0)
// the climb-out skins never ride - the climb-out never commons (the
// climb-out book's own cells)
assert.equal(fuelCommonsDockets(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(fuelCommonsDockets(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(fuelCommonsDockets(['F6 fuel commons budget spent (0/2 units)']), 0)
assert.equal(fuelCommonsDockets(['F6 fuel commons']), 0)
assert.equal(fuelCommonsDockets(['fuel commons: budget spent']), 0)
assert.equal(fuelCommonsDockets(['F8 fuel commons-extra: 1 units']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F6 fuel commons: budget spent (0/2 units)',
  'F2 fuel commons: the anchor chest is read first',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(fuelCommonsDockets(lines), 2)
const fold = { back: { fuelCommonsDockets: fuelCommonsDockets(lines) }, prev: { fuelCommonsDockets: 301 }, cur: { fuelCommonsDockets: 277 } }
assert.equal(fuelCommonsDocketTrendRow(fold), SWING + '2 -> 301 (+299) -> 277 (-24)' + SWING_TAIL)

console.log('fuelcommonsdockettrend.test: all pins green')
