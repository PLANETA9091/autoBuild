// tests/unit/sworddockettrend.test.mjs - THE SWORD'S OWN RAW DOCKET
// TREND's own pin battery (v0.976.162): the field's own chains
// byte-exact (THE SWORD BOOK'S OWN RAW DOCKET SEAT beside the docket
// book's own words - the craft verdicts and the outer verdicts and
// the fail lines and the stick miss lines and the no-table lines and
// the table rung lines the lane prints, THE CELL'S OWN WEIGHT 1697u
// the faces' own total - THE FIELD'S OWN UNPRICED HEAVIEST the
// fire-0142's own candidate naming rode, THE FIELD'S OWN TOP THE
// COUNT 57 the face 359's own top rode once - the top's own arrival
// the swell's own back rode, the +19 the max rise step's own single
// bound rode TWICE two legs, the -15 the max fall step's own single
// bound rode ONCE two legs, THE FIELD'S OWN FLOOR THE COUNT 29 the
// field's own edge face 348 rode, ZERO FACES NONE - THE SKIN NEVER
// DRIED), ALL THIRTY-SEVEN windows speaking (TWENTY-EIGHT swings,
// EIGHT swells, ONE fade, the ZERO honest silences) - THE
// NEVER-SILENT BOOK THE THIRD THE FAMILY HOLDS, THE ONE-WINDOW ROUND
// TRIPS TWO (the faces 351/384's own windows), the byte-pin battery,
// the fence battery, the cell's own read, the one-parser ride over
// the REAL sword lines (the raw mass the lane prints; the arms
// lane's own anatomy the armorycensus.mjs module's own census never
// rides - the class the mass never merges; the sword due's own lane
// the sibling seat never rides - the lane's own name the space the
// shape demands; the docket's own tunnel verdicts the .158 word's
// own cell never rides - the lanes never merge; the docket's own
// food trip verdicts the .157 word's own cell never rides; the
// docket's own food commons verdicts the .160 word's own cell never
// rides; the fuel commons' own raw docket mass the .159 word's own
// cell never rides; the climb-refused class the .147 word's own cell
// never rides; the climb out skins the climb-out book's own cells
// never ride - the climb-out never swords; the bank trip grant lines
// the banktriptrend.mjs module's own book never rides; the
// no-colon junk never rides).
import { swordDockets, swordDocketTrendConsistent, swordDocketTrendRow } from '../../src/lib/sworddockettrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, this word prices the sword's own raw docket mass across the faces - the sword's own raw docket seat, co-existence by seat never by duplication)"

const HEAD = "the sword docket's own trend (v0.976.162)"
const SWING = HEAD + ": the sword docket's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the sword docket's rise ran two steps deep - "
const SWELL_TAIL = " - the sword docket's own swell " + TAIL
const FADE = HEAD + ": the sword docket's fall ran two steps deep - "
const FADE_TAIL = " - the sword docket's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the sword
// regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 1697u the faces' own total, THE FIELD'S OWN TOP THE COUNT
// 57 the face 359's own top rode once (the top's own arrival the
// swell's own back rode), the +19 the max rise rode TWICE two legs,
// the -15 the max fall rode ONCE two legs, THE FIELD'S OWN FLOOR THE
// COUNT 29 the field's own edge face 348 rode - ZERO FACES NONE -
// THE SKIN NEVER DRIED - ALL THIRTY-SEVEN windows speaking (TWENTY-
// EIGHT swings, EIGHT swells, ONE fade, the ZERO honest silences).
const P = {}
P[348] = 29
P[349] = 44
P[350] = 30
P[351] = 44
P[352] = 34
P[353] = 47
P[354] = 44
P[355] = 51
P[356] = 39
P[357] = 49
P[358] = 51
P[359] = 57
P[360] = 43
P[361] = 40
P[362] = 41
P[363] = 45
P[364] = 35
P[365] = 46
P[366] = 48
P[367] = 45
P[368] = 46
P[369] = 50
P[370] = 41
P[371] = 49
P[372] = 38
P[373] = 46
P[374] = 36
P[375] = 38
P[376] = 46
P[377] = 31
P[378] = 50
P[379] = 38
P[380] = 46
P[381] = 47
P[382] = 51
P[383] = 44
P[384] = 51
P[385] = 38
P[386] = 49
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 1697, 'the cell 1697u the witness holds')
const w = (f) => swordDocketTrendRow({ back: { swordDockets: P[f - 2] }, prev: { swordDockets: P[f - 1] }, cur: { swordDockets: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (twenty-eight swings, eight swells, ONE fade, the
// ZERO honest silences - the never-silent book the third)
const SWINGS = {
  350: '29 -> 44 (+15) -> 30 (-14)',
  351: '44 -> 30 (-14) -> 44 (+14)',
  352: '30 -> 44 (+14) -> 34 (-10)',
  353: '44 -> 34 (-10) -> 47 (+13)',
  354: '34 -> 47 (+13) -> 44 (-3)',
  355: '47 -> 44 (-3) -> 51 (+7)',
  356: '44 -> 51 (+7) -> 39 (-12)',
  357: '51 -> 39 (-12) -> 49 (+10)',
  360: '51 -> 57 (+6) -> 43 (-14)',
  362: '43 -> 40 (-3) -> 41 (+1)',
  364: '41 -> 45 (+4) -> 35 (-10)',
  365: '45 -> 35 (-10) -> 46 (+11)',
  367: '46 -> 48 (+2) -> 45 (-3)',
  368: '48 -> 45 (-3) -> 46 (+1)',
  370: '46 -> 50 (+4) -> 41 (-9)',
  371: '50 -> 41 (-9) -> 49 (+8)',
  372: '41 -> 49 (+8) -> 38 (-11)',
  373: '49 -> 38 (-11) -> 46 (+8)',
  374: '38 -> 46 (+8) -> 36 (-10)',
  375: '46 -> 36 (-10) -> 38 (+2)',
  377: '38 -> 46 (+8) -> 31 (-15)',
  378: '46 -> 31 (-15) -> 50 (+19)',
  379: '31 -> 50 (+19) -> 38 (-12)',
  380: '50 -> 38 (-12) -> 46 (+8)',
  383: '47 -> 51 (+4) -> 44 (-7)',
  384: '51 -> 44 (-7) -> 51 (+7)',
  385: '44 -> 51 (+7) -> 38 (-13)',
  386: '51 -> 38 (-13) -> 49 (+11)'
}
const SWELLS = {
  358: '39 -> 49 (+10) -> 51 (+2)',
  359: '49 -> 51 (+2) -> 57 (+6)',
  363: '40 -> 41 (+1) -> 45 (+4)',
  366: '35 -> 46 (+11) -> 48 (+2)',
  369: '45 -> 46 (+1) -> 50 (+4)',
  376: '36 -> 38 (+2) -> 46 (+8)',
  381: '38 -> 46 (+8) -> 47 (+1)',
  382: '46 -> 47 (+1) -> 51 (+4)'
}
const FADES = {
  361: '57 -> 43 (-14) -> 40 (-3)'
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
assert.deepEqual(tally, { swing: 28, swell: 8, fade: 1, silence: 0 })

// THE ONE-WINDOW ROUND TRIPS TWO - the book trades one window deep
// twice (the face 351's own round trip the floor's own return rode,
// the face 384's own round trip the second beside - the family's own
// round-trip books the climb-out food trip's own three and the food
// trip docket's own three beside)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f]) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [351, 384], 'the two round trips the book rides')

// landmark chains byte-exact full literals
// THE FIRST WINDOW THE FIELD SPEAKS - the field's own opener the
// floor's own window rode (the faces 348/349 no window the carrier's
// own law; the 29 the face 348's own edge the field's own floor)
assert.equal(w(350), SWING + '29 -> 44 (+15) -> 30 (-14)' + SWING_TAIL)
// THE FLOOR'S OWN RETURN the book's own first round trip rode (the
// 44 the face 351's own window traded one window deep)
assert.equal(w(351), SWING + '44 -> 30 (-14) -> 44 (+14)' + SWING_TAIL)
// THE TOP'S OWN ARRIVAL the swell's own back rode (the 57 the face
// 359's own top - the two-step build the window's own shape)
assert.equal(w(359), SWELL + '49 -> 51 (+2) -> 57 (+6)' + SWELL_TAIL)
// THE TOP'S OWN DRAIN-AND-FADE (the face 361's own fade the top's
// own mass the two-step drain rode - THE LAST FADE THE BOOK SPEAKS)
assert.equal(w(361), FADE + '57 -> 43 (-14) -> 40 (-3)' + FADE_TAIL)
// THE MAX FALL'S OWN BOUND the window's second leg rode (the -15 the
// face 377's own window)
assert.equal(w(377), SWING + '38 -> 46 (+8) -> 31 (-15)' + SWING_TAIL)
// THE MAX RISE'S OWN REBUILD (the +19 the face 378's own window's
// second leg rode - the drain-and-surcharge the window's own shape)
assert.equal(w(378), SWING + '46 -> 31 (-15) -> 50 (+19)' + SWING_TAIL)
// THE +19'S OWN SECOND RIDE (the shared leg the face 379's own
// window's first leg rode)
assert.equal(w(379), SWING + '31 -> 50 (+19) -> 38 (-12)' + SWING_TAIL)
// THE SECOND ROUND TRIP (the face 384's own window the book trades
// one window deep the second time)
assert.equal(w(384), SWING + '51 -> 44 (-7) -> 51 (+7)' + SWING_TAIL)
// THE LAST SWELL (the face 382's own window the book's own last
// build)
assert.equal(w(382), SWELL + '46 -> 47 (+1) -> 51 (+4)' + SWELL_TAIL)
// THE LAST WORD (the face 386's own swing the book's own last)
assert.equal(w(386), SWING + '51 -> 38 (-13) -> 49 (+11)' + SWING_TAIL)
// THE ZERO HONEST SILENCES - no window the field holds held a step
// (the never-silent book the third the family holds)
assert.equal(SILENCES.length, 0)

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
assert.equal(swordDocketTrendConsistent(null), false)
assert.equal(swordDocketTrendConsistent(undefined), false)
assert.equal(swordDocketTrendConsistent('cell'), false)
assert.equal(swordDocketTrendConsistent([]), false)
assert.equal(swordDocketTrendConsistent({ back: { swordDockets: 0 }, prev: { swordDockets: 0 } }), false)
assert.equal(swordDocketTrendConsistent({ back: { swordDockets: 0 }, prev: { swordDockets: 0 }, cur: { swordDockets: 0 } }), true)
assert.equal(swordDocketTrendConsistent({ back: { swordDockets: -1 }, prev: { swordDockets: 0 }, cur: { swordDockets: 0 } }), false)
assert.equal(swordDocketTrendConsistent({ back: { swordDockets: 1.5 }, prev: { swordDockets: 0 }, cur: { swordDockets: 0 } }), false)
assert.equal(swordDocketTrendConsistent({ back: { swordDockets: '3' }, prev: { swordDockets: 0 }, cur: { swordDockets: 0 } }), false)
assert.equal(swordDocketTrendConsistent({ back: null, prev: { swordDockets: 0 }, cur: { swordDockets: 0 } }), false)
// the fence never rejects extra keys
assert.equal(swordDocketTrendConsistent({ back: { swordDockets: 0, busy: 1 }, prev: { swordDockets: 2, busy: 1 }, cur: { swordDockets: 1, busy: 1 }, meta: 'x' }), true)

// THE ROW'S OWN NULLS - the fold that cannot prove itself prices
// nothing; the held fold prices no direction
assert.equal(swordDocketTrendRow(null), null)
assert.equal(swordDocketTrendRow('x'), null)
assert.equal(swordDocketTrendRow({ back: { swordDockets: 1 }, prev: { swordDockets: 1 }, cur: { swordDockets: 1 } }), null)
assert.equal(swordDocketTrendRow({ back: { swordDockets: 1 }, prev: { swordDockets: 0 }, cur: { swordDockets: 0 } }), null)

// THE CELL'S OWN READ - swordDockets rides the REAL sword lines (the
// craft verdicts and the outer verdicts and the fail lines and the
// stick miss lines and the no-table lines and the table rung lines
// the field rode - every line the lane prints rides, no exclusion
// the lane needs)
assert.equal(swordDockets([
  'F7 sword: OK (wooden_sword, holds 1)',
  'F7 sword: OK (wooden_sword)',
  'F5 sword: failed (no table)',
  'F1 sword: stick craft did not land',
  'F3 sword: no table reachable or placeable',
  'F5 sword: planks converted for the table rung (converted)',
  'F5 sword: table crafted from planks (10 planks of one type)',
  'F2 sword: craft did not land (stone_sword, holds 0)'
]), 8)
// the other lanes' lines never ride - the lanes never merge
assert.equal(swordDockets(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(swordDockets(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(swordDockets(['F5 food commons: chest holds no food']), 0)
assert.equal(swordDockets(['F6 fuel commons: budget spent (0/2 units)']), 0)
assert.equal(swordDockets(['F4 bank trip: planned budget 300s']), 0)
assert.equal(swordDockets(['F7 wood trip: 0 (climb refused)']), 0)
assert.equal(swordDockets(['F17 iron commune: the set is complete (6/3) - crafting the pick on the spot']), 0)
assert.equal(swordDockets(['F1 fuel anchor scan: the palette read empty x1 - the singular probe rescued the scan (chest at [-120,81,392])']), 0)
// THE SWORD DUE'S OWN LANE the sibling seat never rides - the lane's
// own name the space the shape demands
assert.equal(swordDockets(['F7 sword due: planks available']), 0)
assert.equal(swordDockets(['F13 sword due: refill paused (the pocket holds the blade)']), 0)
// the arms lane's own anatomy the armorycensus.mjs module's own
// census classes ride the same raw mass - the raw law every line
// rides (the skip and the storm lines the census names too)
assert.equal(swordDockets(['F2 sword: skip (the pocket holds the blade)']), 1)
assert.equal(swordDockets(['F6 sword: storm cooldown 2000ms left (2 consecutive timeouts) - refusing']), 1)
// the climb-out skins never ride - the climb-out never swords (the
// climb-out book's own cells)
assert.equal(swordDockets(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(swordDockets(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(swordDockets(['F6 sword OK (wooden_sword)']), 0)
assert.equal(swordDockets(['F6 sword']), 0)
assert.equal(swordDockets(['sword: OK (wooden_sword)']), 0)
assert.equal(swordDockets(['F8 sword-extra: 1 units']), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 sword: OK (wooden_sword, holds 1)',
  'F2 sword: skip (the pocket holds the blade)',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(swordDockets(lines), 2)
const fold = { back: { swordDockets: swordDockets(lines) }, prev: { swordDockets: 39 }, cur: { swordDockets: 51 } }
assert.equal(swordDocketTrendRow(fold), SWELL + '2 -> 39 (+37) -> 51 (+12)' + SWELL_TAIL)

console.log('sworddockettrend.test: all pins green')
