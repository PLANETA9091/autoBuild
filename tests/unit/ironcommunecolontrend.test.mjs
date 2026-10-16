// tests/unit/ironcommunecolontrend.test.mjs - THE IRON COMMUNE'S OWN
// RAW COLON TREND's own pin battery (v0.976.163): the field's own
// chains byte-exact (THE IRON COMMUNE BOOK'S OWN RAW COLON SEAT beside
// the raw docket words - the chest-hold verdicts and the chest-walk
// fail lines and the nudge lines and the budget lines and the
// ghost-click lines and the completion lines the lane prints, THE
// CELL'S OWN WEIGHT 1564u the faces' own total - THE FIRE-0142'S OWN
// NAMED THIRD the five lanes' whole pricing rode, THE FIELD'S OWN TOP
// THE COUNT 81 the face 368's own top rode once - the top's own
// arrival the swing's own back rode, the +56 the max rise rode TWICE
// two legs, the -58 the max fall rode TWICE two legs, THE FIELD'S OWN
// FLOOR THE COUNT 22 the face 358's own floor rode once, ZERO FACES
// NONE - THE SKIN NEVER DRIED), THIRTY-FIVE of THIRTY-SEVEN windows
// speaking (TWENTY-FIVE swings, THREE swells, SEVEN fades, the TWO
// honest silences - the faces 373/374's own windows the ONE held leg
// the two windows share), THE ONE-WINDOW ROUND TRIP (the face 367's
// own window), the byte-pin battery, the fence battery, the cell's
// own read, the one-parser ride over the REAL iron commune lines (the
// raw mass the lane prints; the walk-lane's own iron commune census
// cells the walk book's own axes never ride - the walk lane a
// different book; the bank's raw colon mass the fourth lane's own
// seat never rides here; the camp furnace's mass the fifth's own seat
// beside; the tunnel verdicts the .158 word's own cell never rides -
// the lanes never merge; the food trip verdicts the .157 word's own
// cell never rides; the food commons verdicts the .160 word's own
// cell never rides; the fuel commons' own raw docket mass the .159
// word's own cell never rides; the fuel anchor scan's mass the .161
// word's own cell never rides; the sword's own lines the .162 word's
// own cell never rides; the climb out skins the climb-out book's own
// cells never ride; the no-colon junk never rides).
import { ironCommuneColons, ironCommuneColonTrendConsistent, ironCommuneColonTrendRow } from '../../src/lib/ironcommunecolontrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, this word prices the iron commune's own raw colon mass across the faces - the iron commune's own raw colon seat, co-existence by seat never by duplication)"

const HEAD = "the iron commune's own trend (v0.976.163)"
const SWING = HEAD + ": the iron commune's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the iron commune's rise ran two steps deep - "
const SWELL_TAIL = " - the iron commune's own swell " + TAIL
const FADE = HEAD + ": the iron commune's fall ran two steps deep - "
const FADE_TAIL = " - the iron commune's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the iron commune
// regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 1564u the faces' own total, THE FIELD'S OWN TOP THE COUNT 81
// the face 368's own top rode once (the top's own arrival the swing's
// own back rode), the +56 the max rise rode TWICE two legs, the -58
// the max fall rode TWICE two legs, THE FIELD'S OWN FLOOR THE COUNT
// 22 the face 358's own floor rode once - ZERO FACES NONE - THE SKIN
// NEVER DRIED - THIRTY-FIVE of THIRTY-SEVEN windows speaking (TWENTY-
// FIVE swings, THREE swells, SEVEN fades, the TWO honest silences).
const P = {}
P[348] = 28
P[349] = 26
P[350] = 23
P[351] = 48
P[352] = 31
P[353] = 50
P[354] = 49
P[355] = 59
P[356] = 37
P[357] = 26
P[358] = 22
P[359] = 39
P[360] = 66
P[361] = 28
P[362] = 25
P[363] = 45
P[364] = 38
P[365] = 25
P[366] = 31
P[367] = 25
P[368] = 81
P[369] = 23
P[370] = 36
P[371] = 39
P[372] = 54
P[373] = 54
P[374] = 42
P[375] = 44
P[376] = 31
P[377] = 50
P[378] = 41
P[379] = 52
P[380] = 39
P[381] = 35
P[382] = 46
P[383] = 45
P[384] = 41
P[385] = 59
P[386] = 31
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 1564, 'the cell 1564u the witness holds')
const w = (f) => ironCommuneColonTrendRow({ back: { ironCommuneColons: P[f - 2] }, prev: { ironCommuneColons: P[f - 1] }, cur: { ironCommuneColons: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (twenty-five swings, three swells, seven fades, the
// two honest silences - the faces 373/374's own windows the ONE held
// leg the two windows share)
const SWINGS = {
  351: '26 -> 23 (-3) -> 48 (+25)',
  352: '23 -> 48 (+25) -> 31 (-17)',
  353: '48 -> 31 (-17) -> 50 (+19)',
  354: '31 -> 50 (+19) -> 49 (-1)',
  355: '50 -> 49 (-1) -> 59 (+10)',
  356: '49 -> 59 (+10) -> 37 (-22)',
  359: '26 -> 22 (-4) -> 39 (+17)',
  361: '39 -> 66 (+27) -> 28 (-38)',
  363: '28 -> 25 (-3) -> 45 (+20)',
  364: '25 -> 45 (+20) -> 38 (-7)',
  366: '38 -> 25 (-13) -> 31 (+6)',
  367: '25 -> 31 (+6) -> 25 (-6)',
  368: '31 -> 25 (-6) -> 81 (+56)',
  369: '25 -> 81 (+56) -> 23 (-58)',
  370: '81 -> 23 (-58) -> 36 (+13)',
  375: '54 -> 42 (-12) -> 44 (+2)',
  376: '42 -> 44 (+2) -> 31 (-13)',
  377: '44 -> 31 (-13) -> 50 (+19)',
  378: '31 -> 50 (+19) -> 41 (-9)',
  379: '50 -> 41 (-9) -> 52 (+11)',
  380: '41 -> 52 (+11) -> 39 (-13)',
  382: '39 -> 35 (-4) -> 46 (+11)',
  383: '35 -> 46 (+11) -> 45 (-1)',
  385: '45 -> 41 (-4) -> 59 (+18)',
  386: '41 -> 59 (+18) -> 31 (-28)'
}
const SWELLS = {
  360: '22 -> 39 (+17) -> 66 (+27)',
  371: '23 -> 36 (+13) -> 39 (+3)',
  372: '36 -> 39 (+3) -> 54 (+15)'
}
const FADES = {
  350: '28 -> 26 (-2) -> 23 (-3)',
  357: '59 -> 37 (-22) -> 26 (-11)',
  358: '37 -> 26 (-11) -> 22 (-4)',
  362: '66 -> 28 (-38) -> 25 (-3)',
  365: '45 -> 38 (-7) -> 25 (-13)',
  381: '52 -> 39 (-13) -> 35 (-4)',
  384: '46 -> 45 (-1) -> 41 (-4)'
}
const SILENCES = [373, 374]

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
assert.deepEqual(tally, { swing: 25, swell: 3, fade: 7, silence: 2 })

// THE ONE-WINDOW ROUND TRIP ONCE - the book trades one window deep
// once (the face 367's own round trip - the family's own round-trip
// books the climb-out food trip's own three and the food trip docket's
// own three beside)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f]) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [367], 'the one round trip the book rides')

// landmark chains byte-exact full literals
// THE FIRST WINDOW THE FIELD SPEAKS - the field's own first word the
// fade rode (the faces 348/349 no window the carrier's own law; the
// .161 word's own mirror beside)
assert.equal(w(350), FADE + '28 -> 26 (-2) -> 23 (-3)' + FADE_TAIL)
// THE FLOOR'S OWN ARRIVAL the fade's own back rode (the 22 the face
// 358's own floor - the back-to-back drain the pair rides beside)
assert.equal(w(358), FADE + '37 -> 26 (-11) -> 22 (-4)' + FADE_TAIL)
// THE FIRST SWELL (the face 360's own window the build to the 66)
assert.equal(w(360), SWELL + '22 -> 39 (+17) -> 66 (+27)' + SWELL_TAIL)
// THE ONE ROUND TRIP (the face 367's own window the book trades one
// window deep)
assert.equal(w(367), SWING + '25 -> 31 (+6) -> 25 (-6)' + SWING_TAIL)
// THE TOP'S OWN ARRIVAL the swing's own back rode (the 81 the face
// 368's own top - the trade-then-build the window's own shape - the
// +56 the max rise step's own single bound the same step rode)
assert.equal(w(368), SWING + '31 -> 25 (-6) -> 81 (+56)' + SWING_TAIL)
// THE MAX FALL'S OWN BOUND (the -58 the face 369's own window's
// second leg rode - the +56's own second ride the shared leg beside)
assert.equal(w(369), SWING + '25 -> 81 (+56) -> 23 (-58)' + SWING_TAIL)
// THE -58'S OWN SECOND RIDE (the shared leg the face 370's own
// window's first leg rode)
assert.equal(w(370), SWING + '81 -> 23 (-58) -> 36 (+13)' + SWING_TAIL)
// THE BACK-TO-BACK SWELL PAIR the faces 371/372's own windows hold
// (the two-step build the pair rides)
assert.equal(w(371), SWELL + '23 -> 36 (+13) -> 39 (+3)' + SWELL_TAIL)
assert.equal(w(372), SWELL + '36 -> 39 (+3) -> 54 (+15)' + SWELL_TAIL)
// THE TWO HONEST SILENCES the ONE held leg the two windows share (the
// faces 373/374's own windows - the 54 the held step the family's own
// second pair the .159 word's own mirror beside)
assert.equal(w(373), null)
assert.equal(w(374), null)
// THE LAST FADE (the face 384's own window the book's own last drain)
assert.equal(w(384), FADE + '46 -> 45 (-1) -> 41 (-4)' + FADE_TAIL)
// THE LAST WORD (the face 386's own swing the book's own last)
assert.equal(w(386), SWING + '41 -> 59 (+18) -> 31 (-28)' + SWING_TAIL)

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
assert.equal(ironCommuneColonTrendConsistent(null), false)
assert.equal(ironCommuneColonTrendConsistent(undefined), false)
assert.equal(ironCommuneColonTrendConsistent('cell'), false)
assert.equal(ironCommuneColonTrendConsistent([]), false)
assert.equal(ironCommuneColonTrendConsistent({ back: { ironCommuneColons: 0 }, prev: { ironCommuneColons: 0 } }), false)
assert.equal(ironCommuneColonTrendConsistent({ back: { ironCommuneColons: 0 }, prev: { ironCommuneColons: 0 }, cur: { ironCommuneColons: 0 } }), true)
assert.equal(ironCommuneColonTrendConsistent({ back: { ironCommuneColons: -1 }, prev: { ironCommuneColons: 0 }, cur: { ironCommuneColons: 0 } }), false)
assert.equal(ironCommuneColonTrendConsistent({ back: { ironCommuneColons: 1.5 }, prev: { ironCommuneColons: 0 }, cur: { ironCommuneColons: 0 } }), false)
assert.equal(ironCommuneColonTrendConsistent({ back: { ironCommuneColons: '3' }, prev: { ironCommuneColons: 0 }, cur: { ironCommuneColons: 0 } }), false)
assert.equal(ironCommuneColonTrendConsistent({ back: null, prev: { ironCommuneColons: 0 }, cur: { ironCommuneColons: 0 } }), false)
// the fence never rejects extra keys
assert.equal(ironCommuneColonTrendConsistent({ back: { ironCommuneColons: 0, busy: 1 }, prev: { ironCommuneColons: 2, busy: 1 }, cur: { ironCommuneColons: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(ironCommuneColonTrendRow(null), null)
assert.equal(ironCommuneColonTrendRow('x'), null)
assert.equal(ironCommuneColonTrendRow({ back: { ironCommuneColons: 1 }, prev: { ironCommuneColons: 1 }, cur: { ironCommuneColons: 1 } }), null)
assert.equal(ironCommuneColonTrendRow({ back: { ironCommuneColons: 1 }, prev: { ironCommuneColons: 0 }, cur: { ironCommuneColons: 0 } }), null)

// THE CELL'S OWN READ - ironCommuneColons rides the REAL iron commune
// lines (the chest-hold verdicts and the chest-walk fail lines and
// the nudge lines and the budget lines and the ghost-click lines and
// the completion lines the field rode - every line the lane prints
// rides, no exclusion the lane needs)
assert.equal(ironCommuneColons([
  'F4 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here',
  'F2 iron commune: chest holds 1 ingot(s) + 5 raw_iron - nothing to complete here',
  'F9 iron commune: chest walk failed (Took to long to decide path to goal!)',
  'F11 iron commune: chest walk failed (No path to the goal!)',
  'F9 iron commune: iron commune: path nudge inside the direct envelope',
  'F9 iron commune: iron commune: path nudge approach: 1 segment(s) walked in 15.3s, goal now d=7.9 (inside the direct envelope)',
  'F9 iron commune: iron commune: chest walk failed after the nudge (Took to long to decide path to goal!)',
  'F11 iron commune: budget spent (0/3 units)',
  'F2 iron commune: the clicks lied - no ore landed in the pocket (ghost clicks)',
  'F2 iron commune: the clicks lied - no ingot landed in the pocket (ghost clicks)',
  'F17 iron commune: the set is complete (3/3) - crafting the pick on the spot',
  'F5 iron commune: the pool funds the set (2 in chest) - the withdraw completes it'
]), 12)
// the other lanes' lines never ride - the lanes never merge
assert.equal(ironCommuneColons(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(ironCommuneColons(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(ironCommuneColons(['F5 food commons: chest holds no food']), 0)
assert.equal(ironCommuneColons(['F6 fuel commons: budget spent (0/2 units)']), 0)
assert.equal(ironCommuneColons(['F4 bank trip: planned budget 300s']), 0)
assert.equal(ironCommuneColons(['F7 wood trip: 0 (climb refused)']), 0)
assert.equal(ironCommuneColons(['F7 sword: OK (wooden_sword, holds 1)']), 0)
assert.equal(ironCommuneColons(['F7 sword due: planks available']), 0)
assert.equal(ironCommuneColons(['F1 fuel anchor scan: the palette read empty x1 - the singular probe rescued the scan (chest at [-120,81,392])']), 0)
// THE WALK-LANE'S OWN IRON COMMUNE CELLS the walk book's own axes
// never ride - the walk lane a different book
assert.equal(ironCommuneColons(['F6 walk iron commune: 3 walks (the lane census)']), 0)
// THE BANK'S RAW COLON MASS the fourth lane's own seat never rides
// here; the camp furnace's mass the fifth's own seat beside
assert.equal(ironCommuneColons(['F4 bank: deposited 12 raw_iron (the chain grant)']), 0)
assert.equal(ironCommuneColons(['F8 camp furnace: smelted 3 iron ingots (the chain)']), 0)
// the climb-out skins never ride - the climb-out never colons (the
// climb-out book's own cells)
assert.equal(ironCommuneColons(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(ironCommuneColons(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(ironCommuneColons(['F6 iron commune OK (3/3)']), 0)
assert.equal(ironCommuneColons(['F6 iron commune']), 0)
assert.equal(ironCommuneColons(['iron commune: chest holds 0 ingot(s)']), 0)
assert.equal(ironCommuneColons(['F8 iron commune-extra: 1 units']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here',
  'F2 iron commune: budget spent (0/3 units)',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(ironCommuneColons(lines), 2)
const fold = { back: { ironCommuneColons: ironCommuneColons(lines) }, prev: { ironCommuneColons: 39 }, cur: { ironCommuneColons: 66 } }
assert.equal(ironCommuneColonTrendRow(fold), SWELL + '2 -> 39 (+37) -> 66 (+27)' + SWELL_TAIL)

console.log('ironcommunecolontrend.test: all pins green')
