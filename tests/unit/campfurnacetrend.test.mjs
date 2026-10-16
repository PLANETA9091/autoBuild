// tests/unit/campfurnacetrend.test.mjs - THE CAMP FURNACE'S OWN
// TREND's own pin battery (v0.976.165): the field's own chains
// byte-exact (THE CAMP FURNACE BOOK'S OWN RAW SEAT beside the raw
// docket words - the no-build verdicts and the doomed-ledger lines
// and the envelope lines and the craft lines and the BUILT lines the
// lane prints, THE CELL'S OWN WEIGHT 1164u the faces' own total -
// THE FIRE-0142'S OWN NAMED FIFTH the candidate naming rode
// byte-true, THE FIELD'S OWN TOP THE COUNT 47 the face 372's own top
// rode once - the top's own arrival the swell's own back rode, the
// +24 the max rise step's own single bound rode ONCE - the face 359's
// own window's second leg, the -26 the max fall step's own single
// bound rode ONCE - THE PEAK'S OWN TRADE ONE WINDOW the face 369's
// own window's second leg, THE FIELD'S OWN FLOOR THE COUNT 16 the
// face 369's own floor rode once, ZERO FACES NONE - THE SKIN NEVER
// DRIED), ALL THIRTY-SEVEN windows speaking (TWENTY-EIGHT swings,
// FOUR swells, FIVE fades, the ZERO honest silences - THE
// NEVER-SILENT BOOK THE FOURTH THE FAMILY HOLDS), ROUND TRIPS NONE,
// the byte-pin battery, the fence battery, the cell's own read, the
// one-parser ride over the REAL camp furnace lines (the raw mass the
// lane prints; the smelt lane's own trend v0.976.90 a different book
// never rides; the bank trip grant lines the banktriptrend.mjs
// module's own book never rides; the bank chain's own defer lines the
// bankdefertrend.mjs module's own book never rides; the bank pocket's
// own night defers the bankpocketdefertrend.mjs module's own book
// never rides; the bank's own raw colon mass the .164 word's own cell
// never rides - the lanes never merge; the iron commune's own raw
// colon mass the .163 word's own cell never rides; the sword's own
// raw docket mass the .162 word's own cell never rides; the fuel
// anchor scan's own mass the .161 word's own cell never rides; the
// food commons' raw docket mass the .160 word's own cell never rides;
// the fuel commons' own raw docket mass the .159 word's own cell
// never rides; the tunnel verdicts the .158 word's own cell never
// ride; the food trip dockets the .157 word's own cell never ride;
// the climb-refused class the .147 word's own cell never rides; the
// climb out skins the climb-out book's own cells never ride; the
// walk-lane census cells the walk book's own axes never ride; the
// no-colon junk never rides).
import { campFurnaces, campFurnaceTrendConsistent, campFurnaceTrendRow } from '../../src/lib/campfurnacetrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, this word prices the camp furnace's own mass across the faces - the camp furnace's own seat, co-existence by seat never by duplication)"

const HEAD = "the camp furnace's own trend (v0.976.165)"
const SWING = HEAD + ": the camp furnace's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the camp furnace's rise ran two steps deep - "
const SWELL_TAIL = " - the camp furnace's own swell " + TAIL
const FADE = HEAD + ": the camp furnace's fall ran two steps deep - "
const FADE_TAIL = " - the camp furnace's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the camp furnace
// regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 1164u the faces' own total, THE FIELD'S OWN TOP THE COUNT 47
// the face 372's own top rode once (the top's own arrival the swell's
// own back rode), the +24 the max rise rode ONCE (the face 359's own
// window's second leg), the -26 the max fall rode ONCE (THE PEAK'S
// OWN TRADE ONE WINDOW - the face 369's own window's second leg), THE
// FIELD'S OWN FLOOR THE COUNT 16 the face 369's own floor rode once -
// ZERO FACES NONE - THE SKIN NEVER DRIED - ALL THIRTY-SEVEN windows
// speaking (TWENTY-EIGHT swings, FOUR swells, FIVE fades, the ZERO
// honest silences - THE NEVER-SILENT BOOK THE FOURTH THE FAMILY
// HOLDS).
const P = {}
P[348] = 34
P[349] = 18
P[350] = 17
P[351] = 26
P[352] = 23
P[353] = 38
P[354] = 32
P[355] = 44
P[356] = 33
P[357] = 34
P[358] = 21
P[359] = 45
P[360] = 44
P[361] = 34
P[362] = 18
P[363] = 23
P[364] = 26
P[365] = 25
P[366] = 20
P[367] = 19
P[368] = 42
P[369] = 16
P[370] = 26
P[371] = 28
P[372] = 47
P[373] = 29
P[374] = 42
P[375] = 23
P[376] = 36
P[377] = 31
P[378] = 38
P[379] = 19
P[380] = 39
P[381] = 23
P[382] = 27
P[383] = 34
P[384] = 26
P[385] = 36
P[386] = 28
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 1164, 'the cell 1164u the witness holds')
const w = (f) => campFurnaceTrendRow({ back: { campFurnaces: P[f - 2] }, prev: { campFurnaces: P[f - 1] }, cur: { campFurnaces: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (TWENTY-EIGHT swings, FOUR swells, FIVE fades, the
// ZERO honest silences - THE NEVER-SILENT BOOK THE FOURTH THE FAMILY
// HOLDS)
const SWINGS = {
  351: '18 -> 17 (-1) -> 26 (+9)',
  352: '17 -> 26 (+9) -> 23 (-3)',
  353: '26 -> 23 (-3) -> 38 (+15)',
  354: '23 -> 38 (+15) -> 32 (-6)',
  355: '38 -> 32 (-6) -> 44 (+12)',
  356: '32 -> 44 (+12) -> 33 (-11)',
  357: '44 -> 33 (-11) -> 34 (+1)',
  358: '33 -> 34 (+1) -> 21 (-13)',
  359: '34 -> 21 (-13) -> 45 (+24)',
  360: '21 -> 45 (+24) -> 44 (-1)',
  363: '34 -> 18 (-16) -> 23 (+5)',
  365: '23 -> 26 (+3) -> 25 (-1)',
  368: '20 -> 19 (-1) -> 42 (+23)',
  369: '19 -> 42 (+23) -> 16 (-26)',
  370: '42 -> 16 (-26) -> 26 (+10)',
  373: '28 -> 47 (+19) -> 29 (-18)',
  374: '47 -> 29 (-18) -> 42 (+13)',
  375: '29 -> 42 (+13) -> 23 (-19)',
  376: '42 -> 23 (-19) -> 36 (+13)',
  377: '23 -> 36 (+13) -> 31 (-5)',
  378: '36 -> 31 (-5) -> 38 (+7)',
  379: '31 -> 38 (+7) -> 19 (-19)',
  380: '38 -> 19 (-19) -> 39 (+20)',
  381: '19 -> 39 (+20) -> 23 (-16)',
  382: '39 -> 23 (-16) -> 27 (+4)',
  384: '27 -> 34 (+7) -> 26 (-8)',
  385: '34 -> 26 (-8) -> 36 (+10)',
  386: '26 -> 36 (+10) -> 28 (-8)'
}
const SWELLS = {
  364: '18 -> 23 (+5) -> 26 (+3)',
  371: '16 -> 26 (+10) -> 28 (+2)',
  372: '26 -> 28 (+2) -> 47 (+19)',
  383: '23 -> 27 (+4) -> 34 (+7)'
}
const FADES = {
  350: '34 -> 18 (-16) -> 17 (-1)',
  361: '45 -> 44 (-1) -> 34 (-10)',
  362: '44 -> 34 (-10) -> 18 (-16)',
  366: '26 -> 25 (-1) -> 20 (-5)',
  367: '25 -> 20 (-5) -> 19 (-1)'
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
assert.deepEqual(tally, { swing: 28, swell: 4, fade: 5, silence: 0 })

// ROUND TRIPS NONE - the book never trades back to its own count
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f]) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [], 'round trips none the book rides')

// THE NEVER-SILENT BOOK - no held leg the book rides (the zero
// silences the field's own arithmetic holds)
const heldLegs = []
for (let f = 350; f <= 386; f++) {
  if (P[f] === P[f - 1]) heldLegs.push(f)
}
assert.deepEqual(heldLegs, [], 'the never-silent book the no held legs ride')

// landmark chains byte-exact full literals
// THE FIELD'S OWN OPENER - the face 350's own fade the field's own
// first word rode (the faces 348/349 no window the carrier's own law)
assert.equal(w(350), FADE + '34 -> 18 (-16) -> 17 (-1)' + FADE_TAIL)
// THE MAX RISE'S OWN BOUND (the +24 the face 359's own window's
// second leg rode - the 21 -> 45)
assert.equal(w(359), SWING + '34 -> 21 (-13) -> 45 (+24)' + SWING_TAIL)
// THE PEAK'S OWN BUILD (the face 368's own swing the +23 the build
// toward the peak rode)
assert.equal(w(368), SWING + '20 -> 19 (-1) -> 42 (+23)' + SWING_TAIL)
// THE PEAK'S OWN TRADE ONE WINDOW (the face 369's own window the
// -26 the max fall step's own single bound rode - the top's own mass
// the drain rode, the floor's own ride the same window holds - the
// .163's and the .164's own F369 mirrors beside)
assert.equal(w(369), SWING + '19 -> 42 (+23) -> 16 (-26)' + SWING_TAIL)
// THE TOP'S OWN ARRIVAL (the face 372's own swell the 47 the top's
// own count rode - the faces 371/372's own pair the back-to-back
// build beside)
assert.equal(w(372), SWELL + '26 -> 28 (+2) -> 47 (+19)' + SWELL_TAIL)
// THE LAST WORD (the face 386's own swing the book's own last)
assert.equal(w(386), SWING + '26 -> 36 (+10) -> 28 (-8)' + SWING_TAIL)

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
assert.equal(campFurnaceTrendConsistent(null), false)
assert.equal(campFurnaceTrendConsistent(undefined), false)
assert.equal(campFurnaceTrendConsistent('cell'), false)
assert.equal(campFurnaceTrendConsistent([]), false)
assert.equal(campFurnaceTrendConsistent({ back: { campFurnaces: 0 }, prev: { campFurnaces: 0 } }), false)
assert.equal(campFurnaceTrendConsistent({ back: { campFurnaces: 0 }, prev: { campFurnaces: 0 }, cur: { campFurnaces: 0 } }), true)
assert.equal(campFurnaceTrendConsistent({ back: { campFurnaces: -1 }, prev: { campFurnaces: 0 }, cur: { campFurnaces: 0 } }), false)
assert.equal(campFurnaceTrendConsistent({ back: { campFurnaces: 1.5 }, prev: { campFurnaces: 0 }, cur: { campFurnaces: 0 } }), false)
assert.equal(campFurnaceTrendConsistent({ back: { campFurnaces: '3' }, prev: { campFurnaces: 0 }, cur: { campFurnaces: 0 } }), false)
assert.equal(campFurnaceTrendConsistent({ back: null, prev: { campFurnaces: 0 }, cur: { campFurnaces: 0 } }), false)
// the fence never rejects extra keys
assert.equal(campFurnaceTrendConsistent({ back: { campFurnaces: 0, busy: 1 }, prev: { campFurnaces: 2, busy: 1 }, cur: { campFurnaces: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(campFurnaceTrendRow(null), null)
assert.equal(campFurnaceTrendRow('x'), null)
assert.equal(campFurnaceTrendRow({ back: { campFurnaces: 1 }, prev: { campFurnaces: 1 }, cur: { campFurnaces: 1 } }), null)
assert.equal(campFurnaceTrendRow({ back: { campFurnaces: 1 }, prev: { campFurnaces: 0 }, cur: { campFurnaces: 0 } }), null)

// THE CELL'S OWN READ - campFurnaces rides the REAL camp furnace
// lines (the no-build verdicts and the doomed-ledger lines and the
// envelope lines and the craft lines and the BUILT lines the field
// rode - every line the lane prints rides, no exclusion the lane
// needs)
assert.equal(campFurnaces([
  'F6 camp furnace: no build (machine near)',
  'F9 camp furnace: no build (cobble 0/8)',
  'F8 camp furnace: no build (cobble 6/8)',
  'F7 camp furnace: no build (nothing to smelt)',
  'F5 camp furnace: no build (no table and planks 0/4)',
  'F6 camp furnace: 12 near machine(s) all doomed-ledgered - the bay reads as empty, the camp ladder decides on its own merits',
  'F5 camp furnace: 9 near machine(s) beyond the 24b direct envelope (nearest d=23.7) - 1 inside the envelope keep the veto',
  'F9 camp furnace: 9 near machine(s) all beyond the 24b direct envelope (nearest d=27.8) - the bay reads as empty, the camp ladder decides on its own merits',
  'F4 camp furnace: craft-table (67 cobble + 5 planks - table first)',
  'F3 camp furnace: craft-planks (9 log(s) in pocket - craft planks (largest same-type stack 1/4))',
  'F2 camp furnace: craft-furnace (86 cobble + table in reach - craft the furnace)',
  'F1 camp furnace: BUILT (furnace at -149,64,417) in 9s'
]), 12)
// THE SMELT LANE'S OWN LINES the smelt lane's own trend v0.976.90's
// own book never rides here - a different book the camp furnace's
// own lines never join
assert.equal(campFurnaces(['F9 smelt: the unasked visit logged']), 0)
// THE BANK TRIP GRANT LINES the banktriptrend.mjs module's own book
// never rides - the 'F<n> bank trip: ' prefix a different lane
assert.equal(campFurnaces(['F4 bank trip: planned budget 300s']), 0)
assert.equal(campFurnaces(['F2 bank trip: fuel-tithe budget 120s']), 0)
// THE BANK CHAIN'S OWN DEFER LINES the bankdefertrend.mjs module's
// own book never rides
assert.equal(campFurnaces(['F3 bank trip: deferred (budget exhausted)']), 0)
// THE BANK POCKET'S OWN NIGHT DEFERS the bankpocketdefertrend.mjs
// module's own book never rides
assert.equal(campFurnaces(['F5 final bank deferred: night (tod=18000)']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(campFurnaces(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(campFurnaces(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(campFurnaces(['F5 food commons: chest holds no food']), 0)
assert.equal(campFurnaces(['F6 fuel commons: budget spent (0/2 units)']), 0)
assert.equal(campFurnaces(['F5 sword: OK (wooden_sword, holds 1)']), 0)
assert.equal(campFurnaces(['F8 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here']), 0)
assert.equal(campFurnaces(['F6 bank: yard walk arrived in 0s (1 attempt)']), 0)
assert.equal(campFurnaces(['F1 fuel anchor scan: the palette read empty x1 - the singular probe rescued the scan (chest at [-120,81,392])']), 0)
// the walk-lane census cells never ride
assert.equal(campFurnaces(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
// the climb out skins never ride - the climb-out never builds (the
// climb-out book's own cells)
assert.equal(campFurnaces(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(campFurnaces(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(campFurnaces(['F6 camp furnace OK (built)']), 0)
assert.equal(campFurnaces(['F6 camp furnace']), 0)
assert.equal(campFurnaces(['camp furnace: no build (machine near)']), 0)
assert.equal(campFurnaces(['F8 camp furnace-extra: no build (machine near)']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 camp furnace: no build (machine near)',
  'F9 camp furnace: BUILT (furnace at -103,66,426) in 7s',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(campFurnaces(lines), 2)
const fold = { back: { campFurnaces: campFurnaces(lines) }, prev: { campFurnaces: 44 }, cur: { campFurnaces: 33 } }
assert.equal(campFurnaceTrendRow(fold), SWING + '2 -> 44 (+42) -> 33 (-11)' + SWING_TAIL)

console.log('campfurnacetrend.test: all pins green')
