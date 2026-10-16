// tests/unit/reloottrend.test.mjs - THE RELOOT'S OWN TREND's own pin
// battery (v0.976.171): the field's own chains byte-exact (THE DEATH
// ECONOMY'S OWN WALK SEAT - the v0.200.0 plan's own field voice, THE
// CELL'S OWN WEIGHT 82u the thirty-nine faces' own total, THE
// FIELD'S OWN TOP THE COUNT 10 the face 382's own top rode once -
// the top's own arrival the swing rode, the +8 the max rise rode
// TWICE two legs the faces 382/383's own windows the shared leg, the
// -9 the max fall rode TWICE two legs the faces 383/384's own
// windows the shared leg - THE FACE 383'S OWN WINDOW THE TOP'S OWN
// ARRIVAL AND RELIEF THE SAME WINDOW TWO LEGS RIDE, THE FIELD'S OWN
// FLOOR THE COUNT ZERO rode FIVE faces - the dried skin rides
// light), TWENTY-THREE of THIRTY-SEVEN windows speaking (SEVENTEEN
// swings, TWO swells, FOUR fades, the FOURTEEN honest silences),
// THE ONE-WINDOW ROUND TRIPS FOUR (the faces 378/381/385/386's own
// windows, THE ADJACENT PAIR the faces 385/386's own windows hold,
// no three-run), the byte-pin battery, the fence
// battery, the cell's own read, the one-parser ride over the REAL
// reloot lines (the raw mass the lane prints; the death drop's own
// emissions the deathdropcensus book's own lane never ride - the
// death never walks, the walk never drops; the walk-lane census
// cells the walk book's own axes never ride; the no-colon junk never
// rides).
import { reloots, relootTrendConsistent, relootTrendRow } from '../../src/lib/reloottrend.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, this word prices the reloot's own mass across the faces - the reloot's own seat, co-existence by seat never by duplication)"

const HEAD = "the reloot's own trend (v0.976.171)"
const SWING = HEAD + ": the reloot's own swing - "
const SWING_TAIL = " - the rise and the fall traded seats between the faces " + TAIL
const SWELL = HEAD + ": the reloot's rise ran two steps deep - "
const SWELL_TAIL = " - the reloot's own swell " + TAIL
const FADE = HEAD + ": the reloot's fall ran two steps deep - "
const FADE_TAIL = " - the reloot's own fade " + TAIL

// THE FIELD'S OWN TABLE - the priced field 348..386 (the reloot
// regex's own arithmetic, THIRTY-NINE faces deep) - THE CELL'S OWN
// WEIGHT 82u the faces' own total.
const P = {}
P[348] = 2
P[349] = 1
P[350] = 5
P[351] = 2
P[352] = 0
P[353] = 0
P[354] = 3
P[355] = 1
P[356] = 2
P[357] = 2
P[358] = 2
P[359] = 4
P[360] = 3
P[361] = 2
P[362] = 2
P[363] = 0
P[364] = 0
P[365] = 2
P[366] = 3
P[367] = 1
P[368] = 1
P[369] = 1
P[370] = 3
P[371] = 2
P[372] = 1
P[373] = 0
P[374] = 4
P[375] = 1
P[376] = 2
P[377] = 3
P[378] = 2
P[379] = 2
P[380] = 5
P[381] = 2
P[382] = 10
P[383] = 1
P[384] = 2
P[385] = 1
P[386] = 2
let fieldSum = 0
for (let f = 348; f <= 386; f++) fieldSum += P[f]
assert.equal(fieldSum, 82, 'the cell 82u the walk lane\'s own light holds')
const w = (f) => relootTrendRow({ back: { reloots: P[f - 2] }, prev: { reloots: P[f - 1] }, cur: { reloots: P[f] } })

// THE FIELD'S OWN CHAINS - the priced windows the hand's own
// classification (SEVENTEEN swings, TWO swells, FOUR fades, the
// FOURTEEN honest silences)
const SWINGS = {
  350: '2 -> 1 (-1) -> 5 (+4)',
  351: '1 -> 5 (+4) -> 2 (-3)',
  355: '0 -> 3 (+3) -> 1 (-2)',
  356: '3 -> 1 (-2) -> 2 (+1)',
  360: '2 -> 4 (+2) -> 3 (-1)',
  367: '2 -> 3 (+1) -> 1 (-2)',
  371: '1 -> 3 (+2) -> 2 (-1)',
  374: '1 -> 0 (-1) -> 4 (+4)',
  375: '0 -> 4 (+4) -> 1 (-3)',
  376: '4 -> 1 (-3) -> 2 (+1)',
  378: '2 -> 3 (+1) -> 2 (-1)',
  381: '2 -> 5 (+3) -> 2 (-3)',
  382: '5 -> 2 (-3) -> 10 (+8)',
  383: '2 -> 10 (+8) -> 1 (-9)',
  384: '10 -> 1 (-9) -> 2 (+1)',
  385: '1 -> 2 (+1) -> 1 (-1)',
  386: '2 -> 1 (-1) -> 2 (+1)'
}
const SWELLS = {
  366: '0 -> 2 (+2) -> 3 (+1)',
  377: '1 -> 2 (+1) -> 3 (+1)'
}
const FADES = {
  352: '5 -> 2 (-3) -> 0 (-2)',
  361: '4 -> 3 (-1) -> 2 (-1)',
  372: '3 -> 2 (-1) -> 1 (-1)',
  373: '2 -> 1 (-1) -> 0 (-1)'
}
const SILENCES = [353, 354, 357, 358, 359, 362, 363, 364, 365, 368, 369, 370, 379, 380]

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
assert.deepEqual(tally, { swing: 17, swell: 2, fade: 4, silence: 14 })

// THE ONE-WINDOW ROUND TRIPS THREE (the faces 378/381/386's own
// windows - NO back-to-back run the book holds)
const roundTrips = []
for (let f = 350; f <= 386; f++) {
  if (P[f - 2] === P[f] && !(P[f - 1] === P[f - 2] || P[f] === P[f - 1])) roundTrips.push(f)
}
assert.deepEqual(roundTrips, [378, 381, 385, 386], 'the four round trips the book rides')
const rtRun = []
for (let i = 2; i < roundTrips.length; i++) {
  if (roundTrips[i] === roundTrips[i - 1] + 1 && roundTrips[i - 1] === roundTrips[i - 2] + 1) rtRun.push([roundTrips[i - 2], roundTrips[i - 1], roundTrips[i]])
}
assert.deepEqual(rtRun, [], 'no three-run of round trips the book holds')
// THE ADJACENT PAIR the faces 385/386's own windows hold (the
// mirrored trade the pair rides)
assert.equal(roundTrips[3] === roundTrips[2] + 1, true, 'the adjacent pair 385/386 the book holds')

// THE ZERO FACES FIVE - the dried skin rides light (the zero a
// lawful count the smelt lane's own zero precedent holds)
const zeroFaces = []
for (let f = 348; f <= 386; f++) { if (P[f] === 0) zeroFaces.push(f) }
assert.deepEqual(zeroFaces, [352, 353, 363, 364, 373], 'the five zero faces the dried skin')

// landmark chains byte-exact full literals
// THE FIELD'S OWN OPENER - the face 350's own swing the field's own
// first word rode (the faces 348/349 no window the carrier's own
// law)
assert.equal(w(350), SWING + '2 -> 1 (-1) -> 5 (+4)' + SWING_TAIL)
// THE TOP'S OWN ARRIVAL THE SWING RODE (the face 382's own window
// the +8 the max rise's own bound the second leg rode)
assert.equal(w(382), SWING + '5 -> 2 (-3) -> 10 (+8)' + SWING_TAIL)
assert.equal(Math.max(...Object.values(P)), 10, 'the top the count 10 the field holds')
// THE FACE 383'S OWN WINDOW THE TOP'S OWN ARRIVAL AND RELIEF THE
// SAME WINDOW TWO LEGS RIDE (the +8 the first leg, the -9 the
// second leg - the top's own whole trade one window holds)
assert.equal(w(383), SWING + '2 -> 10 (+8) -> 1 (-9)' + SWING_TAIL)
// THE SHARED LEGS (the +8 the faces 382/383's own windows ride, the
// -9 the faces 383/384's own windows ride - the same trade two
// windows ride)
assert.equal(w(384), SWING + '10 -> 1 (-9) -> 2 (+1)' + SWING_TAIL)
// THE ROUND TRIPS FOUR (the faces 378/381/385/386's own windows)
assert.equal(w(378), SWING + '2 -> 3 (+1) -> 2 (-1)' + SWING_TAIL)
assert.equal(w(381), SWING + '2 -> 5 (+3) -> 2 (-3)' + SWING_TAIL)
assert.equal(w(385), SWING + '1 -> 2 (+1) -> 1 (-1)' + SWING_TAIL)
assert.equal(w(386), SWING + '2 -> 1 (-1) -> 2 (+1)' + SWING_TAIL)
// THE TWO SWELLS (the faces 366/377's own windows)
assert.equal(w(366), SWELL + '0 -> 2 (+2) -> 3 (+1)' + SWELL_TAIL)
assert.equal(w(377), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
// THE FOUR FADES (the faces 352/361/372/373's own windows - the
// face 373's own fade the zero's own landing rode)
assert.equal(w(352), FADE + '5 -> 2 (-3) -> 0 (-2)' + FADE_TAIL)
assert.equal(w(361), FADE + '4 -> 3 (-1) -> 2 (-1)' + FADE_TAIL)
assert.equal(w(372), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(w(373), FADE + '2 -> 1 (-1) -> 0 (-1)' + FADE_TAIL)
// THE LAST WORD (the face 386's own swing the book's own last word)
assert.equal(w(386), SWING + '2 -> 1 (-1) -> 2 (+1)' + SWING_TAIL)

// THE BYTE-PIN BATTERY - the three shapes the branch law prices
assert.equal(relootTrendRow({ back: { reloots: 1 }, prev: { reloots: 2 }, cur: { reloots: 3 } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
assert.equal(relootTrendRow({ back: { reloots: 3 }, prev: { reloots: 2 }, cur: { reloots: 1 } }), FADE + '3 -> 2 (-1) -> 1 (-1)' + FADE_TAIL)
assert.equal(relootTrendRow({ back: { reloots: 1 }, prev: { reloots: 3 }, cur: { reloots: 2 } }), SWING + '1 -> 3 (+2) -> 2 (-1)' + SWING_TAIL)
// the honest silences the held law prices (a held step no direction)
assert.equal(relootTrendRow({ back: { reloots: 2 }, prev: { reloots: 2 }, cur: { reloots: 3 } }), null)
assert.equal(relootTrendRow({ back: { reloots: 2 }, prev: { reloots: 3 }, cur: { reloots: 3 } }), null)
// the zero a lawful count - the zeros ride the rows whole
assert.equal(relootTrendRow({ back: { reloots: 0 }, prev: { reloots: 1 }, cur: { reloots: 0 } }), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL)
assert.equal(relootTrendRow({ back: { reloots: 0 }, prev: { reloots: 0 }, cur: { reloots: 0 } }), null)

// THE FENCE BATTERY - the fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie)
assert.equal(relootTrendRow(null), null)
assert.equal(relootTrendRow(undefined), null)
assert.equal(relootTrendRow('junk'), null)
assert.equal(relootTrendRow(42), null)
assert.equal(relootTrendRow([]), null)
assert.equal(relootTrendRow({}), null)
assert.equal(relootTrendRow({ back: { reloots: 1 }, prev: { reloots: 2 } }), null)
assert.equal(relootTrendRow({ back: { reloots: 1 }, prev: { reloots: 2 }, cur: {} }), null)
assert.equal(relootTrendRow({ back: { reloots: 'x' }, prev: { reloots: 2 }, cur: { reloots: 3 } }), null)
assert.equal(relootTrendRow({ back: { reloots: 1 }, prev: { reloots: 2 }, cur: { reloots: -1 } }), null)
assert.equal(relootTrendRow({ back: { reloots: 1.5 }, prev: { reloots: 2 }, cur: { reloots: 3 } }), null)
assert.equal(relootTrendRow({ back: null, prev: { reloots: 2 }, cur: { reloots: 3 } }), null)
assert.equal(relootTrendRow({ back: { reloots: 1 }, prev: [2], cur: { reloots: 3 } }), null)
// the extra keys never reject (the fence never overreaches)
assert.equal(relootTrendRow({ back: { reloots: 1, extra: 9 }, prev: { reloots: 2, junk: 'x' }, cur: { reloots: 3, deep: { a: 1 } } }), SWELL + '1 -> 2 (+1) -> 3 (+1)' + SWELL_TAIL)
// the fence's own read
assert.equal(relootTrendConsistent({ back: { reloots: 0 }, prev: { reloots: 0 }, cur: { reloots: 0 } }), true)
assert.equal(relootTrendConsistent({ back: { reloots: 5 }, prev: { reloots: 9 }, cur: { reloots: 2 }, spare: true }), true)
assert.equal(relootTrendConsistent(null), false)
assert.equal(relootTrendConsistent({ back: { reloots: 1 }, prev: { reloots: 2 }, cur: { reloots: NaN } }), false)

// THE CELL'S OWN READ - the real reloot lines ride (the raw mass the
// lane prints - every line the lane prints rides, no exclusion the
// lane needs; the line kinds the walk lane speaks the cache prices)
assert.equal(reloots([
  'F12 reloot: walking to the own death spot [-160,59,407] (29b, budget 14s, window 283s, the unarmed escalation, the pile arm)',
  'F4 reloot: no-path retry at range 8 (budget 15s) - the dry rim inside the sphere counts as arrival',
  'F4 reloot: retry arrived in 7s - 19 item stack(s) within 8 (in read reach - the magnet takes what it can)',
  'F14 reloot: no walk (wet-spot) - the mouth\'s verdict, the loop top stays silent'
]), 4)
assert.equal(reloots([
  'F12 reloot: arrived in 0s - 0 item stack(s) in reach - nothing left (picked up or despawned)',
  'F2 reloot: walk failed',
  'F9 reloot: retry failed',
  'F1 reloot: write-off'
]), 4)
// THE DEATH DROP'S OWN EMISSIONS the deathdropcensus book's own lane
// never ride here - the lanes never merge (the death never walks,
// the walk never drops)
assert.equal(reloots(['F12 death drop: ~84u lost at [-195,59,405]']), 0)
// the other lanes' lines never ride - the lanes never merge
assert.equal(reloots(['F6 tool recovery: OK (stone_pickaxe)']), 0)
assert.equal(reloots(['F8 sword due: planks available']), 0)
assert.equal(reloots(['F8 spare pick due: spare (planks available)']), 0)
assert.equal(reloots(['F3 tunnel: 12 blocks (branch mine at the floor, steered, floor lock)']), 0)
assert.equal(reloots(['F5 food trip: famine (hunger 17, plate 0) - the commons walk']), 0)
assert.equal(reloots(['F6 fuel commons: budget spent (0/2 units)']), 0)
assert.equal(reloots(['F8 iron commune: chest holds 0 ingot(s) + 0 raw_iron - nothing to complete here']), 0)
assert.equal(reloots(['F6 bank: yard walk arrived in 0s (1 attempt)']), 0)
assert.equal(reloots(['F6 camp furnace: no build (machine near)']), 0)
assert.equal(reloots(['F1 fuel anchor scan: the palette read empty x1 - the singular probe rescued the scan (chest at [-120,81,392])']), 0)
assert.equal(reloots(['F12 walk iron commune: 3 walks, 0 done, 0 failed']), 0)
assert.equal(reloots(['F6 recovery brake: 1 consecutive failures - next attempt in 45s']), 0)
// the no-colon junk line never rides - the shape's own proof the RE
// demands
assert.equal(reloots(['F6 reloot walking to the own death spot [-160,59,407]']), 0)
assert.equal(reloots(['F6 reloot']), 0)
assert.equal(reloots(['reloot: walking to the own death spot']), 0)
assert.equal(reloots(['F8 reloot-extra: write-off']), 0)
assert.equal(reloots(['F8 reloots: write-off']), 0)

// the defensive reads
assert.equal(reloots(null), 0)
assert.equal(reloots(undefined), 0)
assert.equal(reloots('junk'), 0)
assert.equal(reloots(42), 0)
assert.equal(reloots([null, 42, {}]), 0)

// THE ONE-PARSER RIDE - the fold rides the read's own arithmetic
const lines = [
  'F7 reloot: walking to the own death spot [-76,63,377] (33b, budget 15s, window 290s, the unarmed escalation, the pile arm)',
  'F7 reloot: arrived in 12s - 3 item stack(s) in reach - the magnet takes what it can',
  'F4 tunnel: seal plan: anchor open, headroom clear - the seal-and-cross is unanchored'
]
assert.equal(reloots(lines), 2)
const fold = { back: { reloots: reloots(lines) }, prev: { reloots: 0 }, cur: { reloots: 1 } }
assert.equal(relootTrendRow(fold), SWING + '2 -> 0 (-2) -> 1 (+1)' + SWING_TAIL)

console.log('reloottrend.test: all pins green')
