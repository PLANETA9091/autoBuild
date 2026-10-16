// tests/unit/recoverybraketrend.test.mjs - THE RECOVERY BRAKE'S OWN
// TREND's own pin battery (v0.976.170): the field's own chains
// byte-exact (THE RECOVERY MACHINERY'S OWN BRAKE SEAT - the
// four-rung escalation ladder the lane speaks, THE CELL'S OWN
// WEIGHT 58u the thirty-nine faces' own total - THE LIGHTEST NAMED
// LANE THE FIELD HOLDS the .167's own 195u the record beside, THE
// FIELD'S OWN TOP THE COUNT 8 the face 380's own top rode once -
// the top's own arrival the silence's own back rode, the +6 the max
// rise rode ONCE, the -7 the max fall rode ONCE, THE FIELD'S OWN
// FLOOR THE COUNT ZERO rode TWENTY faces - THE DRIED SKIN THE
// MACHINERY'S OWN REST the zero a lawful count), NINETEEN of
// THIRTY-SEVEN windows speaking (FIFTEEN swings, THREE swells, ONE
// fade, the EIGHTEEN honest silences - THE SILENT-HEAVIEST BOOK THE
// FAMILY HOLDS), THE ONE-WINDOW ROUND TRIPS EIGHT - THE MOST
// ROUND-TRIP BOOK THE FAMILY HOLDS (THE THREE BACK-TO-BACK ROUND
// TRIPS THE FAMILY'S FIRST the faces 371/372/373's own windows),
// the byte-pin battery, the fence battery, the cell's own read, the
// one-parser ride over the REAL brake lines (the raw mass the lane
// prints; the tool recovery's own emissions the toolrecovery.mjs
// module's own book never rides - the brake never recovers, the
// recovery never brakes; the climb-out skins the climb-out book's
// own cells never ride; the walk-lane census cells the walk book's
// own axes never ride; the no-colon junk never rides).
import { recoveryBrakes, recoveryBrakeTrendConsistent, recoveryBrakeTrendRow } from '../../src/lib/recoverybraketrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, this word prices the recovery brake's own mass across the faces - the recovery brake's own seat, co-existence by seat never by duplication)"

const HEAD = "the recovery brake's own trend (v0.976.170)"
const SWING = HEAD + ": the recovery brake's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the recovery brake's rise ran two steps deep - "
const SWELL_TAIL = " - the recovery brake's own swell " + TAIL
const FADE = HEAD + ": the recovery brake's fall ran two steps deep - "
const FADE_TAIL = " - the recovery brake's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the brake
// regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 58u the faces' own total.
const P = {}
P[348] = 0
P[349] = 1
P[350] = 4
P[351] = 0
P[352] = 6
P[353] = 0
P[354] = 0
P[355] = 0
P[356] = 1
P[357] = 0
P[358] = 1
P[359] = 5
P[360] = 4
P[361] = 0
P[362] = 4
P[363] = 4
P[364] = 0
P[365] = 1
P[366] = 2
P[367] = 0
P[368] = 0
P[369] = 0
P[370] = 4
P[371] = 0
P[372] = 4
P[373] = 0
P[374] = 0
P[375] = 0
P[376] = 2
P[377] = 0
P[378] = 0
P[379] = 0
P[380] = 8
P[381] = 1
P[382] = 1
P[383] = 0
P[384] = 0
P[385] = 3
P[386] = 2
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 58, 'the cell 58u the lightest named lane holds')
const w = (f) => recoveryBrakeTrendRow({ back: { recoveryBrakes: P[f - 2] }, prev: { recoveryBrakes: P[f - 1] }, cur: { recoveryBrakes: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (FIFTEEN swings, THREE swells, ONE fade, the
// EIGHTEEN honest silences)
const SWINGS = {
  351: '1 -> 4 (+3) -> 0 (-4)',
  352: '4 -> 0 (-4) -> 6 (+6)',
  353: '0 -> 6 (+6) -> 0 (-6)',
  357: '0 -> 1 (+1) -> 0 (-1)',
  358: '1 -> 0 (-1) -> 1 (+1)',
  360: '1 -> 5 (+4) -> 4 (-1)',
  362: '4 -> 0 (-4) -> 4 (+4)',
  365: '4 -> 0 (-4) -> 1 (+1)',
  367: '1 -> 2 (+1) -> 0 (-2)',
  371: '0 -> 4 (+4) -> 0 (-4)',
  372: '4 -> 0 (-4) -> 4 (+4)',
  373: '0 -> 4 (+4) -> 0 (-4)',
  377: '0 -> 2 (+2) -> 0 (-2)',
  381: '0 -> 8 (+8) -> 1 (-7)',
  386: '0 -> 3 (+3) -> 2 (-1)'
}
const SWELLS = {
  350: '0 -> 1 (+1) -> 4 (+3)',
  359: '0 -> 1 (+1) -> 5 (+4)',
  366: '0 -> 1 (+1) -> 2 (+1)'
}
const FADES = {
  361: '5 -> 4 (-1) -> 0 (-4)'
}
const SILENCES = [354, 355, 356, 363, 364, 368, 369, 370, 374, 375, 376, 378, 379, 380, 382, 383, 384, 385]

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
assert.deepEqual(tally, { swing: 15, swell: 3, fade: 1, silence: 18 })

// THE ONE-WINDOW ROUND TRIPS EIGHT - THE MOST ROUND-TRIP BOOK THE
// FAMILY HOLDS (the .169's own six the record beside) - THE THREE
// BACK-TO-BACK ROUND TRIPS THE FAMILY'S FIRST the faces
// 371/372/373's own windows the run rides
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [353, 357, 358, 362, 371, 372, 373, 377], 'the eight round trips the book rides - THE MOST ROUND-TRIP BOOK')
const rtRun = []
for (let i = 2; i < roundTrips.length; i++) {
  if (roundTrips[i] === roundTrips[i - 1] + 1 && roundTrips[i - 1] === roundTrips[i - 2] + 1) rtRun.push([roundTrips[i - 2], roundTrips[i - 1], roundTrips[i]])
}
assert.deepEqual(rtRun, [[371, 372, 373]], 'the three back-to-back round trips the family\'s first')

// THE ZERO FACES TWENTY - THE DRIED SKIN THE MACHINERY'S OWN REST
// (the brake never speaks when the failures do not chain - the zero
// a lawful count the smelt lane's own zero precedent holds)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.deepEqual(zeroFaces, [348, 351, 353, 354, 355, 357, 361, 364, 367, 368, 369, 371, 373, 374, 375, 377, 378, 379, 383, 384], 'the twenty zero faces the machinery\'s honest rest')

// landmark chains byte-exact full literals
// THE FIELD'S OWN OPENER - the face 350's own swell the field's own
// first word rode (the faces 348/349 no window the carrier's own
// law)
assert.equal(w(350), SWELL + '0 -> 1 (+1) -> 4 (+3)' + SWELL_TAIL)
// THE TOP'S OWN ARRIVAL THE SILENCE'S OWN BACK RODE (the face 380's
// own window the honest null the top beside)
assert.equal(w(380), null)
assert.equal(Math.max(...Object.values(P)), 8, 'the top the count 8 the field holds')
// THE MAX RISE'S OWN BOUND ONCE (the face 352's own swing's second
// leg the 0 -> 6 the bound rode)
assert.equal(w(352), SWING + '4 -> 0 (-4) -> 6 (+6)' + SWING_TAIL)
// THE MAX FALL'S OWN BOUND ONCE (the face 381's own swing's second
// leg the 8 -> 1 the top's own relief rode)
assert.equal(w(381), SWING + '0 -> 8 (+8) -> 1 (-7)' + SWING_TAIL)
// THE ONE FADE (the face 361's own window the brake's own release
// the full drain rode)
assert.equal(w(361), FADE + '5 -> 4 (-1) -> 0 (-4)' + FADE_TAIL)
// THE THREE BACK-TO-BACK ROUND TRIPS (the faces 371/372/373's own
// windows the run rides)
assert.equal(w(371), SWING + '0 -> 4 (+4) -> 0 (-4)' + SWING_TAIL)
assert.equal(w(372), SWING + '4 -> 0 (-4) -> 4 (+4)' + SWING_TAIL)
assert.equal(w(373), SWING + '0 -> 4 (+4) -> 0 (-4)' + SWING_TAIL)
// THE LAST WORD (the face 386's own swing the book's own last word)
assert.equal(w(386), SWING + '0 -> 3 (+3) -> 2 (-1)' + SWING_TAIL)

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(recoveryBrakeTrendRow({ back: { recoveryBrakes: 1 }, prev: { recoveryBrakes: 2 }, cur: { recoveryBrakes: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(recoveryBrakeTrendRow({ back: { recoveryBrakes: 3 }, prev: { recoveryBrakes: 2 }, cur: { recoveryBrakes: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(recoveryBrakeTrendRow({ back: { recoveryBrakes: 1 }, prev: { recoveryBrakes: 3 }, cur: { recoveryBrakes: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(recoveryBrakeTrendRow({ back: { recoveryBrakes: 2 }, prev: { recoveryBrakes: 2 }, cur: { recoveryBrakes: 3 } }), null)
assert.equal(recoveryBrakeTrendRow({ back: { recoveryBrakes: 2 }, prev: { recoveryBrakes: 3 }, cur: { recoveryBrakes: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole
assert.equal(recoveryBrakeTrendRow({ back: { recoveryBrakes: 0 }, prev: { recoveryBrakes: 1 }, cur: { recoveryBrakes: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(recoveryBrakeTrendRow({ back: { recoveryBrakes: 0 }, prev: { recoveryBrakes: 0 }, cur: { recoveryBrakes: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(recoveryBrakeTrendRow(null), null)
assert.equal(recoveryBrakeTrendRow(undefined), null)
assert.equal(recoveryBrakeTrendRow('junk'), null)
assert.equal(recoveryBrakeTrendRow(42), null)
assert.equal(recoveryBrakeTrendRow([]), null)
assert.equal(recoveryBrakeTrendRow({}), null)
assert.equal(recoveryBrakeTrendRow({ back: { recoveryBrakes: 1 }, prev: { recoveryBrakes: 2 } }), null)
assert.equal(recoveryBrakeTrendRow({ back: { recoveryBrakes: 1 }, prev: { recoveryBrakes: 2 }, cur: {} }), null)
assert.equal(recoveryBrakeTrendRow({ back: { recoveryBrakes: 'x' }, prev: { recoveryBrakes: 2 }, cur: { recoveryBrakes: 3 } }), null)
assert.equal(recoveryBrakeTrendRow({ back: { recoveryBrakes: 1 }, prev: { recoveryBrakes: 2 }, cur: { recoveryBrakes: -1 } }), null)
assert.equal(recoveryBrakeTrendRow({ back: { recoveryBrakes: 1.5 }, prev: { recoveryBrakes: 2 }, cur: { recoveryBrakes: 3 } }), null)
assert.equal(recoveryBrakeTrendRow({ back: null, prev: { recoveryBrakes: 2 }, cur: { recoveryBrakes: 3 } }), null)
assert.equal(recoveryBrakeTrendRow({ back: { recoveryBrakes: 1 }, prev: [2], cur: { recoveryBrakes: 3 } }), null)
// the extra keys never reject (the fence never overreaches)
assert.equal(recoveryBrakeTrendRow({ back: { recoveryBrakes: 1, extra: 9 }, prev: { recoveryBrakes: 2, junk: 'x' }, cur: { recoveryBrakes: 3, deep: { a: 1 } } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
// the fence's own read
assert.equal(recoveryBrakeTrendConsistent({ back: { recoveryBrakes: 0 }, prev: { recoveryBrakes: 0 }, cur: { recoveryBrakes: 0 } }), true)
assert.equal(recoveryBrakeTrendConsistent({ back: { recoveryBrakes: 5 }, prev: { recoveryBrakes: 9 }, cur: { recoveryBrakes: 2 }, spare: true }), true)
assert.equal(recoveryBrakeTrendConsistent(null), false)
assert.equal(recoveryBrakeTrendConsistent({ back: { recoveryBrakes: 1 }, prev: { recoveryBrakes: 2 }, cur: { recoveryBrakes: NaN } }), false)

// THE CELL'S OWN READ - the real brake lines ride (the raw mass the
// lane prints - every line the lane prints rides, no exclusion the
// lane needs; the four-rung escalation ladder the cache prices)
assert.equal(recoveryBrakes([
  'F7 recovery brake: 1 consecutive failures - next attempt in 45s',
  'F11 recovery brake: 2 consecutive failures - next attempt in 90s',
  'F2 recovery brake: 3 consecutive failures - next attempt in 180s',
  'F13 recovery brake: 4 consecutive failures - next attempt in 300s'
]), 4)
assert.equal(recoveryBrakes([
  'F5 recovery brake: 1 consecutive failures - next attempt in 45s',
  'F9 recovery brake: 4 consecutive failures - next attempt in 300s'
]), 2)
// THE TOOL RECOVERY'S OWN EMISSIONS the toolrecovery.mjs module's
// own book never ride here - the lanes never merge (the brake never
// recovers, the recovery never brakes)
assert.equal(recoveryBrakes(['F6 tool recovery: no pickaxe - spare-pick craft first']), 0)
assert.equal(recoveryBrakes(['F6 tool recovery: OK (stone_pickaxe)']), 0)
assert.equal(recoveryBrakes(['F3 climb out (tool recovery): OK +2 levels (2 steps, 4 dug, 5s)']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(recoveryBrakes(['F8 sword due: planks available']), 0)
assert.equal(recoveryBrakes(['F8 spare pick due: spare (planks available)']), 0)
assert.equal(recoveryBrakes(['F5 sword: OK (wooden_sword, holds 1)']), 0)
assert.equal(recoveryBrakes(['F4 bank trip: planned budget 300s']), 0)
assert.equal(recoveryBrakes(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(recoveryBrakes(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(recoveryBrakes(['F6 fuel commons: budget spent (0/2 units)']), 0)
assert.equal(recoveryBrakes(['F8 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here']), 0)
assert.equal(recoveryBrakes(['F6 bank: yard walk arrived in 0s (1 attempt)']), 0)
assert.equal(recoveryBrakes(['F6 camp furnace: no build (machine near)']), 0)
assert.equal(recoveryBrakes(['F5 fuel anchor: delivered 2 fuel overage (ok)']), 0)
assert.equal(recoveryBrakes(['F1 fuel anchor scan: the palette read empty x1 - the singular probe rescued the scan (chest at [-120,81,392])']), 0)
assert.equal(recoveryBrakes(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
assert.equal(recoveryBrakes(['F3 climb out (trip): OK +10 levels (9 steps, 25 dug, 26s)']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(recoveryBrakes(['F6 recovery brake 1 consecutive failures - next attempt in 45s']), 0)
assert.equal(recoveryBrakes(['F6 recovery brake']), 0)
assert.equal(recoveryBrakes(['recovery brake: 1 consecutive failures - next attempt in 45s']), 0)
assert.equal(recoveryBrakes(['F8 recovery brake-extra: 1 consecutive failures - next attempt in 45s']), 0)
assert.equal(recoveryBrakes(['F8 recovery brakes: 1 consecutive failures - next attempt in 45s']), 0)

// the defensive reads
assert.equal(recoveryBrakes(null), 0)
assert.equal(recoveryBrakes(undefined), 0)
assert.equal(recoveryBrakes('junk'), 0)
assert.equal(recoveryBrakes(42), 0)
assert.equal(recoveryBrakes([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 recovery brake: 1 consecutive failures - next attempt in 45s',
  'F9 recovery brake: 2 consecutive failures - next attempt in 90s',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(recoveryBrakes(lines), 2)
const fold = { back: { recoveryBrakes: recoveryBrakes(lines) }, prev: { recoveryBrakes: 0 }, cur: { recoveryBrakes: 1 } }
assert.equal(recoveryBrakeTrendRow(fold), SWING + '2 -> 0 (-2) -> 1 (+1)' + SWING_TAIL)

console.log('recoverybraketrend.test: all pins green')
