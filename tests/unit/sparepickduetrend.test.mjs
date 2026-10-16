// tests/unit/sparepickduetrend.test.mjs - THE SPARE PICK DUE'S OWN
// TREND's own pin battery (v0.976.168): the field's own chains
// byte-exact (THE SPARE PICK BOOK'S OWN DUE SEAT beside the raw
// docket words - the planks-available verdicts and the
// cobble-available verdicts the lane prints, THE CELL'S OWN WEIGHT
// 788u the thirty-nine faces' own total - THE FIRE-0142'S OWN
// BESIDE-SEAT the .166 word's own naming rode byte-true the hand-off
// the field re-verified 788u byte-exact, THE FIELD'S OWN TOP THE
// COUNT 24 the face 351's own top rode once - the top's own arrival
// the silence's own back rode, the +6 the max rise rode TWICE two
// legs, the -7 the max fall rode TWICE two legs, THE FIELD'S OWN
// FLOOR THE COUNT 17 rode FOUR faces, ZERO FACES NONE - THE SKIN
// NEVER DRIED), TWENTY-FOUR of THIRTY-SEVEN windows speaking
// (EIGHTEEN swings, FOUR swells, TWO fades, the THIRTEEN honest
// silences - SEVEN back-to-back pairs, SIX the held leg the two
// windows share, the face 367/368's own pair the moved boundary
// beside - THE FOUR-WINDOW SILENT RUN THE FAMILY'S FIRST the faces
// 366/367/368/369's own windows the two-step drift the run holds),
// THE TWO-WINDOW ROUND TRIPS TWICE (the faces 354/384's own windows
// - the pair NOT adjacent the whole field between), the byte-pin
// battery, the fence battery, the cell's own read, the one-parser
// ride over the REAL spare pick due lines (the raw mass the lane
// prints; the spare pick colon's own lines the .166 word's own cell
// never rides - the lanes never merge; the fuel anchor delivery's
// own lines the .167 word's own cell never rides; the fuel anchor
// scan's own lines the .161 word's own cell never rides; the camp
// furnace's own mass the .165 word's own cell never rides; the
// bank's own raw colon mass the .164 word's own cell never rides;
// the iron commune's own raw colon mass the .163 word's own cell
// never rides; the sword's own raw docket mass the .162 word's own
// cell never rides; the sword due's own lane the .162 word's own
// border the precedent rode; the food commons' raw docket mass the
// .160 word's own cell never rides; the fuel commons' own raw docket
// mass the .159 word's own cell never rides; the tunnel verdicts the
// .158 word's own cell never ride; the food trip dockets the .157
// word's own cell never ride; the climb-refused class the .147
// word's own cell never rides; the climb out skins the climb-out
// book's own cells never ride; the walk-lane census cells the walk
// book's own axes never ride; the no-colon junk never rides).
import { sparePickDues, sparePickDueTrendConsistent, sparePickDueTrendRow } from '../../src/lib/sparepickduetrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, this word prices the spare pick due's own mass across the faces - the spare pick due's own seat, co-existence by seat never by duplication)"

const HEAD = "the spare pick due's own trend (v0.976.168)"
const SWING = HEAD + ": the spare pick due's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the spare pick due's rise ran two steps deep - "
const SWELL_TAIL = " - the spare pick due's own swell " + TAIL
const FADE = HEAD + ": the spare pick due's fall ran two steps deep - "
const FADE_TAIL = " - the spare pick due's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the due regex's
// own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN WEIGHT
// 788u the faces' own total the .166's own naming byte-true, THE
// FIELD'S OWN TOP THE COUNT 24 the face 351's own top rode once, the
// +6 the max rise rode TWICE two legs (the face 355's own window's
// second leg and the face 356's own window's first leg the shared
// leg), the -7 the max fall rode TWICE two legs (the face 352's own
// window's second leg and the face 353's own window's first leg the
// shared leg), THE FIELD'S OWN FLOOR THE COUNT 17 rode FOUR faces,
// ZERO FACES NONE - THE SKIN NEVER DRIED.
const P = {}
P[348] = 20
P[349] = 19
P[350] = 19
P[351] = 24
P[352] = 17
P[353] = 18
P[354] = 17
P[355] = 23
P[356] = 21
P[357] = 17
P[358] = 19
P[359] = 23
P[360] = 21
P[361] = 22
P[362] = 18
P[363] = 18
P[364] = 17
P[365] = 22
P[366] = 22
P[367] = 21
P[368] = 21
P[369] = 18
P[370] = 19
P[371] = 20
P[372] = 23
P[373] = 21
P[374] = 18
P[375] = 20
P[376] = 20
P[377] = 21
P[378] = 23
P[379] = 18
P[380] = 22
P[381] = 22
P[382] = 23
P[383] = 18
P[384] = 23
P[385] = 20
P[386] = 20
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 788, 'the cell 788u the .166 hand-off holds')
const w = (f) => sparePickDueTrendRow({ back: { sparePickDues: P[f - 2] }, prev: { sparePickDues: P[f - 1] }, cur: { sparePickDues: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (EIGHTEEN swings, FOUR swells, TWO fades, the
// THIRTEEN honest silences)
const SWINGS = {
  352: '19 -> 24 (+5) -> 17 (-7)',
  353: '24 -> 17 (-7) -> 18 (+1)',
  354: '17 -> 18 (+1) -> 17 (-1)',
  355: '18 -> 17 (-1) -> 23 (+6)',
  356: '17 -> 23 (+6) -> 21 (-2)',
  358: '21 -> 17 (-4) -> 19 (+2)',
  360: '19 -> 23 (+4) -> 21 (-2)',
  361: '23 -> 21 (-2) -> 22 (+1)',
  362: '21 -> 22 (+1) -> 18 (-4)',
  365: '18 -> 17 (-1) -> 22 (+5)',
  370: '21 -> 18 (-3) -> 19 (+1)',
  373: '20 -> 23 (+3) -> 21 (-2)',
  375: '21 -> 18 (-3) -> 20 (+2)',
  379: '21 -> 23 (+2) -> 18 (-5)',
  380: '23 -> 18 (-5) -> 22 (+4)',
  383: '22 -> 23 (+1) -> 18 (-5)',
  384: '23 -> 18 (-5) -> 23 (+5)',
  385: '18 -> 23 (+5) -> 20 (-3)'
}
const SWELLS = {
  359: '17 -> 19 (+2) -> 23 (+4)',
  371: '18 -> 19 (+1) -> 20 (+1)',
  372: '19 -> 20 (+1) -> 23 (+3)',
  378: '20 -> 21 (+1) -> 23 (+2)'
}
const FADES = {
  357: '23 -> 21 (-2) -> 17 (-4)',
  374: '23 -> 21 (-2) -> 18 (-3)'
}
const SILENCES = [350, 351, 363, 364, 366, 367, 368, 369, 376, 377, 381, 382, 386]

for (const [f, arc] of Object.entries(SWINGS)) {
  assert.equal(w(+f), SWING + arc + SWING_TAIL, `the swing F${f} rides byte-exact`)
}
for (const [f, arc] of Object.entries(SWELLS)) {
  assert.equal(w(+f), SWELL + arc + SWELL_TAIL, `the swell F${f} rides byte-exact`)
}
for (const [f, arc] of Object.entries(FADES)) {
  assert.equal(w(+f), FADE + arc + FADE_TAIL, `the fade F${f} rides byte-exact`)
}
for (const f of SILENCES) {
  assert.equal(w(f), null, `the silence F${f} the honest null rides`)
}

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
assert.deepEqual(tally, { swing: 18, swell: 4, fade: 2, silence: 13 })

// THE TWO-WINDOW ROUND TRIPS TWICE - the pair NOT adjacent the whole
// field between (the faces 354/384's own windows)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [354, 384], 'the two round trips the book rides - the pair NOT adjacent')

// THE HELD LEGS - the seven held legs the thirteen silences ride
const heldLegs = []
for (let f = 350; f <= 386; f++) {
  if (P[f] === P[f - 1]) heldLegs.push(f)
}
assert.deepEqual(heldLegs, [350, 363, 366, 368, 376, 381, 386], 'the seven held legs the silences ride')

// THE SEVEN BACK-TO-BACK SILENCE PAIRS - six the held leg the two
// windows share, the face 367/368's own pair the moved boundary
// beside (the -1 step the run's own drift rides)
const sharedPairs = []
for (let f = 351; f <= 386; f++) {
  if (SILENCES.includes(f) && SILENCES.includes(f - 1)) sharedPairs.push([f - 1, f])
}
assert.deepEqual(sharedPairs, [[350, 351], [363, 364], [366, 367], [367, 368], [368, 369], [376, 377], [381, 382]], 'the seven back-to-back silence pairs - THE NEW MOST-PAIRED BOOK')
const heldLegShared = (a, b) => {
  const leg = P[a - 1] === P[a] // the boundary leg P[a-1]->P[a]
  return leg
}
const heldSharedPairs = sharedPairs.filter(([a, b]) => heldLegShared(a, b))
assert.deepEqual(heldSharedPairs, [[350, 351], [363, 364], [366, 367], [368, 369], [376, 377], [381, 382]], 'the six held-leg pairs - the .167 own six the record beside')
assert.equal(P[366] === P[367] + 1 && P[367] === P[368], true, 'the face 367/368 pair the moved boundary -1 the run drift rides')

// THE FOUR-WINDOW SILENT RUN THE FAMILY'S FIRST - the faces
// 366/367/368/369's own windows the two-step drift the run holds
assert.deepEqual(SILENCES.slice(4, 8), [366, 367, 368, 369], 'the four-window silent run')
assert.equal(P[365], 22 && P[366], 22 && P[367], 21 && P[368], 21 && P[369], 18, 'the run two-step drift 22 -> 22 -> 21 -> 21 -> 18')

// THE EIGHT ZERO FACES NONE - THE SKIN NEVER DRIED (the due never
// dries the fleet's own refill law holds)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.deepEqual(zeroFaces, [], 'zero faces none the skin never dried')

// landmark chains byte-exact full literals
// THE FIELD'S OWN OPENER - the face 350's own silence the field's
// own first word rode (the faces 348/349 no window the carrier's own
// law)
assert.equal(w(350), null)
// THE TOP'S OWN ARRIVAL THE SILENCE'S OWN BACK RODE (the face 351's
// own window the honest null the top beside)
assert.equal(w(351), null)
assert.equal(Math.max(...Object.values(P)), 24, 'the top the count 24 the field holds')
// THE MAX FALL'S OWN BOUND (the face 352's own swing the -7 the max
// fall step's own single bound rode - the top's own mass the drain
// rode)
assert.equal(w(352), SWING + '19 -> 24 (+5) -> 17 (-7)' + SWING_TAIL)
// THE MAX RISE'S OWN BOUND TWICE TWO LEGS (the face 355's own
// swing's second leg and the face 356's own swing's first leg the
// shared leg rode)
assert.equal(w(355), SWING + '18 -> 17 (-1) -> 23 (+6)' + SWING_TAIL)
assert.equal(w(356), SWING + '17 -> 23 (+6) -> 21 (-2)' + SWING_TAIL)
// THE ROUND TRIPS (the faces 354/384's own windows - the pair NOT
// adjacent the whole field between)
assert.equal(w(354), SWING + '17 -> 18 (+1) -> 17 (-1)' + SWING_TAIL)
assert.equal(w(384), SWING + '23 -> 18 (-5) -> 23 (+5)' + SWING_TAIL)
// THE FOUR-WINDOW SILENT RUN (the faces 366/367/368/369's own
// windows the honest nulls the held law keeps)
assert.equal(w(366), null)
assert.equal(w(367), null)
assert.equal(w(368), null)
assert.equal(w(369), null)
// THE LAST WORD (the face 386's own silence the book's own last word)
assert.equal(w(386), null)

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(sparePickDueTrendRow({ back: { sparePickDues: 1 }, prev: { sparePickDues: 2 }, cur: { sparePickDues: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(sparePickDueTrendRow({ back: { sparePickDues: 3 }, prev: { sparePickDues: 2 }, cur: { sparePickDues: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(sparePickDueTrendRow({ back: { sparePickDues: 1 }, prev: { sparePickDues: 3 }, cur: { sparePickDues: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(sparePickDueTrendRow({ back: { sparePickDues: 2 }, prev: { sparePickDues: 2 }, cur: { sparePickDues: 3 } }), null)
assert.equal(sparePickDueTrendRow({ back: { sparePickDues: 2 }, prev: { sparePickDues: 3 }, cur: { sparePickDues: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole
assert.equal(sparePickDueTrendRow({ back: { sparePickDues: 0 }, prev: { sparePickDues: 1 }, cur: { sparePickDues: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(sparePickDueTrendRow({ back: { sparePickDues: 0 }, prev: { sparePickDues: 0 }, cur: { sparePickDues: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(sparePickDueTrendRow(null), null)
assert.equal(sparePickDueTrendRow(undefined), null)
assert.equal(sparePickDueTrendRow('junk'), null)
assert.equal(sparePickDueTrendRow(42), null)
assert.equal(sparePickDueTrendRow([]), null)
assert.equal(sparePickDueTrendRow({}), null)
assert.equal(sparePickDueTrendRow({ back: { sparePickDues: 1 }, prev: { sparePickDues: 2 } }), null)
assert.equal(sparePickDueTrendRow({ back: { sparePickDues: 1 }, prev: { sparePickDues: 2 }, cur: {} }), null)
assert.equal(sparePickDueTrendRow({ back: { sparePickDues: 'x' }, prev: { sparePickDues: 2 }, cur: { sparePickDues: 3 } }), null)
assert.equal(sparePickDueTrendRow({ back: { sparePickDues: 1 }, prev: { sparePickDues: 2 }, cur: { sparePickDues: -1 } }), null)
assert.equal(sparePickDueTrendRow({ back: { sparePickDues: 1.5 }, prev: { sparePickDues: 2 }, cur: { sparePickDues: 3 } }), null)
assert.equal(sparePickDueTrendRow({ back: null, prev: { sparePickDues: 2 }, cur: { sparePickDues: 3 } }), null)
assert.equal(sparePickDueTrendRow({ back: { sparePickDues: 1 }, prev: [2], cur: { sparePickDues: 3 } }), null)
// the extra keys never reject (the fence never overreaches)
assert.equal(sparePickDueTrendRow({ back: { sparePickDues: 1, extra: 9 }, prev: { sparePickDues: 2, junk: 'x' }, cur: { sparePickDues: 3, deep: { a: 1 } } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
// the fence's own read
assert.equal(sparePickDueTrendConsistent({ back: { sparePickDues: 0 }, prev: { sparePickDues: 0 }, cur: { sparePickDues: 0 } }), true)
assert.equal(sparePickDueTrendConsistent({ back: { sparePickDues: 5 }, prev: { sparePickDues: 9 }, cur: { sparePickDues: 2 }, spare: true }), true)
assert.equal(sparePickDueTrendConsistent(null), false)
assert.equal(sparePickDueTrendConsistent({ back: { sparePickDues: 1 }, prev: { sparePickDues: 2 }, cur: { sparePickDues: NaN } }), false)

// THE CELL'S OWN READ - the real spare pick due lines ride (the raw
// mass the lane prints - every line the lane prints rides, no
// exclusion the lane needs)
assert.equal(sparePickDues([
  'F8 spare pick due: spare (planks available)',
  'F11 spare pick due: spare (planks available)',
  'F2 spare pick due: spare (planks available)',
  'F13 spare pick due: spare (planks available)'
]), 4)
assert.equal(sparePickDues([
  'F5 spare pick due: spare (cobble available)',
  'F9 spare pick due: spare (cobble available)',
  'F3 spare pick due: spare (planks available)'
]), 3)
// THE SPARE PICK COLON'S OWN LINES the .166 word's own book never
// rides here - the lanes never merge (the colon seat the .166 word's
// own cell holds, the due seat this word prices)
assert.equal(sparePickDues(['F8 spare pick: OK (wooden_pickaxe, holds 2)']), 0)
assert.equal(sparePickDues(['F1 spare pick: skip (no pickaxe materials (need 3 ingots / 3 cobble / 3 planks of ONE type))']), 0)
assert.equal(sparePickDues(['F9 spare pick: skip (no sticks and no planks for sticks)']), 0)
assert.equal(sparePickDues(['F4 spare pick: no table reachable or placeable']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(sparePickDues(['F4 bank trip: planned budget 300s']), 0)
assert.equal(sparePickDues(['F3 bank trip: deferred (budget exhausted)']), 0)
assert.equal(sparePickDues(['F5 final bank deferred: night (tod=18000)']), 0)
assert.equal(sparePickDues(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(sparePickDues(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(sparePickDues(['F5 food commons: chest holds no food']), 0)
assert.equal(sparePickDues(['F6 fuel commons: budget spent (0/2 units)']), 0)
assert.equal(sparePickDues(['F5 sword: OK (wooden_sword, holds 1)']), 0)
assert.equal(sparePickDues(['F5 sword due: refill scheduled (holds 0)']), 0)
assert.equal(sparePickDues(['F8 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here']), 0)
assert.equal(sparePickDues(['F6 bank: yard walk arrived in 0s (1 attempt)']), 0)
assert.equal(sparePickDues(['F6 camp furnace: no build (machine near)']), 0)
assert.equal(sparePickDues(['F5 fuel anchor: delivered 2 fuel overage (ok)']), 0)
assert.equal(sparePickDues(['F1 fuel anchor scan: the palette read empty x1 - the singular probe rescued the scan (chest at [-120,81,392])']), 0)
// the walk-lane census cells never ride
assert.equal(sparePickDues(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
// the climb out skins never ride - the climb-out never spares
assert.equal(sparePickDues(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
assert.equal(sparePickDues(['F12 climb out (bank): failed - wet wall']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(sparePickDues(['F6 spare pick due spare (planks available)']), 0)
assert.equal(sparePickDues(['F6 spare pick due']), 0)
assert.equal(sparePickDues(['spare pick due: spare (planks available)']), 0)
assert.equal(sparePickDues(['F8 spare pick due-extra: spare (planks available)']), 0)
assert.equal(sparePickDues(['F8 spare pick dues: spare (planks available)']), 0)

// the defensive reads
assert.equal(sparePickDues(null), 0)
assert.equal(sparePickDues(undefined), 0)
assert.equal(sparePickDues('junk'), 0)
assert.equal(sparePickDues(42), 0)
assert.equal(sparePickDues([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 spare pick due: spare (planks available)',
  'F9 spare pick due: spare (cobble available)',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(sparePickDues(lines), 2)
const fold = { back: { sparePickDues: sparePickDues(lines) }, prev: { sparePickDues: 21 }, cur: { sparePickDues: 18 } }
assert.equal(sparePickDueTrendRow(fold), SWING + '2 -> 21 (+19) -> 18 (-3)' + SWING_TAIL)

console.log('sparepickduetrend.test: all pins green')
