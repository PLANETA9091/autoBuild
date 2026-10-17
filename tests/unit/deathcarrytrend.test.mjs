// tests/unit/deathcarrytrend.test.mjs - THE DEATH CARRY'S OWN TREND's
// own pin battery (v0.976.174): the field's own chains byte-exact
// (THE DEATH ECONOMY'S OWN CARRY SEAT beside the raw lane words - the
// one-prose lane the v0.649.0 carry voice speaks, every line the same
// verdict the stake and the age the only vary, THE CELL'S OWN WEIGHT
// 22u the thirty-nine faces' own total - the worklog's own naming
// rode byte-true, the bank fallback's own 189u the seat beside, THE
// LIGHTEST NAMED LANE THE FIELD HOLDS, THE FIELD'S OWN TOP THE COUNT
// 2 rode FOUR faces, the +2 the max rise rode FOUR legs TWO shared
// pairs, the -2 the max fall rode SIX legs THREE shared pairs, THE
// FIELD'S OWN FLOOR THE COUNT ZERO rode TWENTY-ONE faces - the
// .170's own twenty the mirror beside, 21 the new record), FOURTEEN
// of THIRTY-SEVEN windows speaking (FOURTEEN swings, THE LONE SWELL,
// THE LONE FADE, the TWENTY-ONE honest silences - THE SILENT-HEAVIEST
// BOOK THE FAMILY HOLDS 21 the new record, THE ONE-SWELL ONE-FADE
// BOOK THE FAMILY'S FIRST, THE NINE ONE-WINDOW ROUND TRIPS EVERY ONE
// MIRRORED the faces 350/355/357/363/369/370/371/378/386's own
// windows - THE MOST ROUND-TRIP BOOK THE FAMILY HOLDS the .170's own
// eight the record beside, THE THREE BACK-TO-BACK ROUND TRIPS THE
// SECOND the faces 369/370/371's own windows the run rides 0 -> 1 ->
// 0 -> 1 -> 0, THE SIX-SILENCE RUN the faces 380..385's own
// windows the plateau the count 1 six faces deep, THE FIVE-ZERO RUNS
// TWO the faces 357..361 and 363..367's own zeros, the bookends the
// same mirrored trade hold), the byte-pin battery, the fence
// battery, the cell's own read, the one-parser ride over the REAL
// death carry lines (the raw mass the lane prints; the reloot's own
// lines the .171 word's own cell never ride - the carry's own kIN the
// relootCarry shape shares but the VOICE a different lane, the lanes
// never merge; the wiring pins the deathcarry-wiring test's own seams
// never ride here; the death drop's own emissions the deathdropcensus
// book's own lane never ride; the death census's own rows the
// deathcensus book's own cells never ride; the respawn bootstrap's
// own lines never ride; the rebuild's own second voice never ride;
// the final bank's own lines the .172 word's own cell never ride;
// the bank fallback's own lines the .173 word's own cell never ride;
// the bank colon's own lines the .164 word's own cell never ride; the
// no-colon junk never rides).
import { deathCarrys, deathCarryTrendConsistent, deathCarryTrendRow } from '../../src/lib/deathcarrytrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, this word prices the death carry's own mass across the faces - the death carry's own seat, co-existence by seat never by duplication)"

const HEAD = "the death carry's own trend (v0.976.174)"
const SWING = HEAD + ": the death carry's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the death carry's rise ran two steps deep - "
const SWELL_TAIL = " - the death carry's own swell " + TAIL
const FADE = HEAD + ": the death carry's fall ran two steps deep - "
const FADE_TAIL = " - the death carry's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the death carry
// regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 22u the faces' own total, THE FIELD'S OWN TOP THE COUNT 2
// rode FOUR faces (the faces 351/354/374/377's own tops), THE
// FIELD'S OWN FLOOR THE COUNT ZERO rode TWENTY-ONE faces.
const P = {}
P[348] = 1
P[349] = 0
P[350] = 1
P[351] = 2
P[352] = 0
P[353] = 0
P[354] = 2
P[355] = 0
P[356] = 1
P[357] = 0
P[358] = 0
P[359] = 0
P[360] = 0
P[361] = 0
P[362] = 1
P[363] = 0
P[364] = 0
P[365] = 0
P[366] = 0
P[367] = 0
P[368] = 1
P[369] = 0
P[370] = 1
P[371] = 0
P[372] = 0
P[373] = 0
P[374] = 2
P[375] = 1
P[376] = 0
P[377] = 2
P[378] = 0
P[379] = 1
P[380] = 1
P[381] = 1
P[382] = 1
P[383] = 1
P[384] = 1
P[385] = 0
P[386] = 1
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 22, 'the cell 22u the field holds')
const w = (f) => deathCarryTrendRow({ back: { deathCarrys: P[f - 2] }, prev: { deathCarrys: P[f - 1] }, cur: { deathCarrys: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (FOURTEEN swings, THE LONE SWELL, THE LONE FADE,
// the TWENTY-ONE honest silences)
const SWINGS = {
  350: '1 -> 0 (-1) -> 1 (+1)',
  352: '1 -> 2 (+1) -> 0 (-2)',
  355: '0 -> 2 (+2) -> 0 (-2)',
  356: '2 -> 0 (-2) -> 1 (+1)',
  357: '0 -> 1 (+1) -> 0 (-1)',
  363: '0 -> 1 (+1) -> 0 (-1)',
  369: '0 -> 1 (+1) -> 0 (-1)',
  370: '1 -> 0 (-1) -> 1 (+1)',
  371: '0 -> 1 (+1) -> 0 (-1)',
  375: '0 -> 2 (+2) -> 1 (-1)',
  377: '1 -> 0 (-1) -> 2 (+2)',
  378: '0 -> 2 (+2) -> 0 (-2)',
  379: '2 -> 0 (-2) -> 1 (+1)',
  386: '1 -> 0 (-1) -> 1 (+1)'
}
const SWELLS = { 351: '0 -> 1 (+1) -> 2 (+1)' }
const FADES = { 376: '2 -> 1 (-1) -> 0 (-1)' }
const SILENCES = [353, 354, 358, 359, 360, 361, 362, 364, 365, 366, 367, 368, 372, 373, 374, 380, 381, 382, 383, 384, 385]

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
assert.deepEqual(tally, { swing: 14, swell: 1, fade: 1, silence: 21 })

// THE NINE ONE-WINDOW ROUND TRIPS EVERY ONE MIRRORED - the climb and
// the return the same size each trip rides (the .170's own eight the
// record beside - NINE the new record the field holds)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [350, 355, 357, 363, 369, 370, 371, 378, 386], 'the nine round trips the book rides')
for (const f of roundTrips) {
  const first = P[f - 1] - P[f - 2]
  const second = P[f] - P[f - 1]
  assert.equal(first + second, 0, `the trip F${f} the mirrored bounds the sum zero rides`)
  assert.notEqual(first, 0, `the trip F${f} the climb never held rides`)
}

// THE THREE BACK-TO-BACK ROUND TRIPS THE SECOND - the faces
// 369/370/371's own windows the run rides 0 -> 1 -> 0 -> 1 -> 0 (the
// .170's own faces 371/372/373 the first beside)
assert.deepEqual(roundTrips.filter(f => f >= 369 && f <= 371), [369, 370, 371], 'the three-run the second the family holds')
assert.equal(P[367], 0, 'the run the count 0 the launch rides')
assert.equal(P[368], 1, 'the run the count 1 the climb rides')
assert.equal(P[369], 0, 'the run the count 0 the return rides')
assert.equal(P[370], 1, 'the run the count 1 the re-climb rides')
assert.equal(P[371], 0, 'the run the count 0 the re-return rides')

// THE SIX-SILENCE RUN - the faces 380..385's own windows the
// plateau the count 1 six faces deep
assert.deepEqual(SILENCES.filter(f => f >= 380 && f <= 385), [380, 381, 382, 383, 384, 385], 'the six-silence run the plateau holds')
for (let f = 379; f <= 384; f++) assert.equal(P[f], 1, `the plateau the count 1 the face ${f} rides`)

// THE FIVE-ZERO RUNS TWO - the faces 357..361 and 363..367's own
// zeros the droughts hold
for (let f = 357; f <= 361; f++) assert.equal(P[f], 0, `the drought the count 0 the face ${f} rides`)
for (let f = 363; f <= 367; f++) assert.equal(P[f], 0, `the drought the count 0 the face ${f} rides`)

// THE ZERO FACES - THE FLOOR rode TWENTY-ONE faces (the .170's own
// twenty the mirror beside, 21 the new record)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.deepEqual(zeroFaces, [349, 352, 353, 355, 357, 358, 359, 360, 361, 363, 364, 365, 366, 367, 369, 371, 372, 373, 376, 378, 385], 'the twenty-one zero faces the record rides')

// THE TOP rode FOUR faces
const topFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 2) topFaces.push(f) }
assert.deepEqual(topFaces, [351, 354, 374, 377], 'the top the count 2 the four faces ride')

// landmark chains byte-exact full literals
// THE BOOKENDS THE SAME MIRRORED TRADE HOLD (the opener the swing,
// the last word the swing - the book born swinging)
assert.equal(w(350), SWING + '1 -> 0 (-1) -> 1 (+1)' + SWING_TAIL)
assert.equal(w(386), SWING + '1 -> 0 (-1) -> 1 (+1)' + SWING_TAIL)
// THE LONE SWELL (the face 351's own window the two-step build)
assert.equal(w(351), SWELL + '0 -> 1 (+1) -> 2 (+1)' + SWELL_TAIL)
// THE LONE FADE (the face 376's own window the two-step drain)
assert.equal(w(376), FADE + '2 -> 1 (-1) -> 0 (-1)' + FADE_TAIL)
// THE MIRRORED ±2 TRIPS (the faces 355/378's own windows the max
// bounds the trips hold)
assert.equal(w(355), SWING + '0 -> 2 (+2) -> 0 (-2)' + SWING_TAIL)
assert.equal(w(378), SWING + '0 -> 2 (+2) -> 0 (-2)' + SWING_TAIL)
// THE MAX RISE'S OWN BOUND FOUR LEGS TWO SHARED PAIRS (the boundary
// 353/354 the pair 354/355 holds, the boundary 373/374 the pair
// 374/375 holds)
assert.equal(P[354] - P[353], 2, 'the max rise the +2 the shared leg rides')
assert.equal(P[374] - P[373], 2, 'the max rise the +2 the shared leg rides')
// THE MAX FALL'S OWN BOUND SIX LEGS THREE SHARED PAIRS (the
// boundaries 351/352, 354/355, 377/378 the pairs 352/353, 355/356,
// 378/379 hold)
assert.equal(P[352] - P[351], -2, 'the max fall the -2 the shared leg rides')
assert.equal(P[355] - P[354], -2, 'the max fall the -2 the shared leg rides')
assert.equal(P[378] - P[377], -2, 'the max fall the -2 the shared leg rides')
// THE TOP'S OWN ARRIVAL (the face 351's own swell the top beside)
assert.equal(Math.max(...Object.values(P)), 2, 'the top the count 2 the field holds')
assert.equal(Math.min(...Object.values(P)), 0, 'the floor the count 0 the field holds')

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(deathCarryTrendRow({ back: { deathCarrys: 1 }, prev: { deathCarrys: 2 }, cur: { deathCarrys: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(deathCarryTrendRow({ back: { deathCarrys: 3 }, prev: { deathCarrys: 2 }, cur: { deathCarrys: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(deathCarryTrendRow({ back: { deathCarrys: 1 }, prev: { deathCarrys: 3 }, cur: { deathCarrys: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(deathCarryTrendRow({ back: { deathCarrys: 2 }, prev: { deathCarrys: 2 }, cur: { deathCarrys: 3 } }), null)
assert.equal(deathCarryTrendRow({ back: { deathCarrys: 2 }, prev: { deathCarrys: 3 }, cur: { deathCarrys: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole
assert.equal(deathCarryTrendRow({ back: { deathCarrys: 0 }, prev: { deathCarrys: 1 }, cur: { deathCarrys: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(deathCarryTrendRow({ back: { deathCarrys: 0 }, prev: { deathCarrys: 0 }, cur: { deathCarrys: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(deathCarryTrendRow(null), null)
assert.equal(deathCarryTrendRow(undefined), null)
assert.equal(deathCarryTrendRow('junk'), null)
assert.equal(deathCarryTrendRow(42), null)
assert.equal(deathCarryTrendRow([]), null)
assert.equal(deathCarryTrendRow({}), null)
assert.equal(deathCarryTrendRow({ back: { deathCarrys: 1 }, prev: { deathCarrys: 2 } }), null)
assert.equal(deathCarryTrendRow({ back: { deathCarrys: 1 }, prev: { deathCarrys: 2 }, cur: {} }), null)
assert.equal(deathCarryTrendRow({ back: { deathCarrys: 'x' }, prev: { deathCarrys: 2 }, cur: { deathCarrys: 3 } }), null)
assert.equal(deathCarryTrendRow({ back: { deathCarrys: 1 }, prev: { deathCarrys: 2 }, cur: { deathCarrys: -1 } }), null)
assert.equal(deathCarryTrendRow({ back: { deathCarrys: 1.5 }, prev: { deathCarrys: 2 }, cur: { deathCarrys: 3 } }), null)
assert.equal(deathCarryTrendRow({ back: null, prev: { deathCarrys: 2 }, cur: { deathCarrys: 3 } }), null)
assert.equal(deathCarryTrendRow({ back: { deathCarrys: 1 }, prev: [2], cur: { deathCarrys: 3 } }), null)
// the extra keys never reject (the fence never overreaches)
assert.equal(deathCarryTrendRow({ back: { deathCarrys: 1, extra: 9 }, prev: { deathCarrys: 2, junk: 'x' }, cur: { deathCarrys: 3, deep: { a: 1 } } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
// the fence's own read
assert.equal(deathCarryTrendConsistent({ back: { deathCarrys: 0 }, prev: { deathCarrys: 0 }, cur: { deathCarrys: 0 } }), true)
assert.equal(deathCarryTrendConsistent({ back: { deathCarrys: 5 }, prev: { deathCarrys: 9 }, cur: { deathCarrys: 2 }, spare: true }), true)
assert.equal(deathCarryTrendConsistent(null), false)
assert.equal(deathCarryTrendConsistent({ back: { deathCarrys: 1 }, prev: { deathCarrys: 2 }, cur: { deathCarrys: NaN } }), false)

// THE CELL'S OWN READ - the real death carry lines ride (the raw mass
// the lane prints - every line the lane prints rides, no exclusion
// the lane needs; the one-prose lane the stake and the age the only
// vary - the ~0u stake an honest read, the unknown stake rides)
assert.equal(deathCarrys([
  'F1 death carry: the un-attempted stake rides the rebuild (stake ~0u, age 44s) - the lane re-arms on the fresh pass',
  'F10 death carry: the un-attempted stake rides the rebuild (stake ~238u, age 35s) - the lane re-arms on the fresh pass',
  'F11 death carry: the un-attempted stake rides the rebuild (stake ~118u, age 24s) - the lane re-arms on the fresh pass'
]), 3)
assert.equal(deathCarrys([
  'F17 death carry: the un-attempted stake rides the rebuild (stake unknown, age 12s) - the lane re-arms on the fresh pass',
  'F16 death carry: the un-attempted stake rides the rebuild (stake ~176u, age 80s) - the lane re-arms on the fresh pass'
]), 2)
// THE RELOOT'S OWN LINES the .171 word's own cell never ride here -
// the carry's own kIN the relootCarry shape shares but the VOICE a
// different lane, the lanes never merge
assert.equal(deathCarrys(['F3 reloot: walking to the own death spot [-100,64,300]']), 0)
assert.equal(deathCarrys(['F1 reloot: no walk (unarmed) - the empty pocket bootstraps first, the read re-arms (a delay, not a verdict)']), 0)
assert.equal(deathCarrys(['F15 reloot: no walk (no-stake)']), 0)
// THE DEATH DROP'S OWN EMISSIONS the deathdropcensus book's own lane
// never ride
assert.equal(deathCarrys(['F5 death drop: 33u at [-99,64,301]']), 0)
// THE DEATH CENSUS'S OWN ROWS the deathcensus book's own cells never ride
assert.equal(deathCarrys(['death census: 21 deaths - Zombie x7 (33.3%), Drowned x5']), 0)
// THE RESPAWN BOOTSTRAP'S OWN LINES never ride (a different prefix)
assert.equal(deathCarrys(['F11 respawn bootstrap deferred: night (tod=12447) - digging in until dawn (the v0.140.1 night hold)']), 0)
// THE REBUILD'S OWN SECOND VOICE never ride
assert.equal(deathCarrys(['F7 respawned without tools - re-bootstrapping (attempt 1)']), 0)
// THE FINAL BANK'S OWN LINES the .172 word's own cell never ride
assert.equal(deathCarrys(['F1 final bank: +234']), 0)
// THE BANK FALLBACK'S OWN LINES the .173 word's own cell never ride
assert.equal(deathCarrys(['F6 bank fallback: none (nothing to deposit)']), 0)
// THE BANK COLON'S OWN LINES the .164 word's own cell never ride
assert.equal(deathCarrys(['F6 bank: yard walk arrived in 0s (1 attempt)']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(deathCarrys(['F4 bank trip: planned budget 300s']), 0)
assert.equal(deathCarrys(['F7 recovery brake: 1 consecutive failures - next attempt in 45s']), 0)
assert.equal(deathCarrys(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(deathCarrys(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
// the no-colon junk never rides
assert.equal(deathCarrys(['death carry: the un-attempted stake rides the rebuild']), 0)
assert.equal(deathCarrys(['F7death carry: the un-attempted stake rides the rebuild']), 0)
assert.equal(deathCarrys(['DF7 death carry: the un-attempted stake rides the rebuild']), 0)
// the junk battery - the read never lies about its inputs
assert.equal(deathCarrys(null), 0)
assert.equal(deathCarrys(undefined), 0)
assert.equal(deathCarrys('junk'), 0)
assert.equal(deathCarrys(42), 0)
assert.equal(deathCarrys({}), 0)
assert.equal(deathCarrys([null, undefined, 42, {}]), 0)
assert.equal(deathCarrys(['F1 death carry: the un-attempted stake rides the rebuild (stake ~0u, age 44s) - the lane re-arms on the fresh pass', null, 42]), 1)

console.log('deathcarrytrend: all pins green')
