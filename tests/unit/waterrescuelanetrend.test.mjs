// tests/unit/waterrescuelanetrend.test.mjs - THE WATER RESCUE LANE'S
// OWN TREND's own pin battery (v0.976.224 - THE .223 SEAT MINE: the
// banked receipt's own trend (0d20b69c) the fire before rode, this
// word the water rescue lane's own seat takes): the water guard's own
// rescue lane mass across the faces the field's own walk named first
// (the 'F<n> [F<n>] water: drowning rescue <skin>' + 'F<n> [F<n>]
// water: rescue <skin>' family the water guard's rescue lane prints
// while a bot drowns) - the strict grammar the field's own proof
// prices (the backreference bracket form, the seven skins and the
// [blind: ...] suffix skins the same lane holds - the pass cell and
// the hazard memorize cell and the shore pin cell and the transit
// target cell and the air bar glitch cell and the walk-lane's own
// water-rescue why-cell never ride, the field proof 23/23 census==raw
// zero mismatches - scripts/fieldread-waterrescuelane-1045.mjs), the
// field's own chains byte-exact (THE CELL'S OWN WEIGHT 2867u the
// twenty-three faces' own total, the faces 436..458 the artifact
// fetches re-spoke, THE NO-DROUGHT FIELD the zero never rode, THE
// FLOOR the count 25 rode ONCE the face 436's own floor, THE FIELD'S
// OWN TOP the count 279 rode ONCE the face 453's own crest - THE
// STORM), THE BOOK TWENTY-ONE of TWENTY-ONE windows speaking
// (THIRTEEN swings, SEVEN swells, ONE fade, the ZERO honest silences
// - the family's own restless skin), the window pins (the honest arc
// each window holds), the bounds' own legs pins (+152 rode ONE leg
// ONE boundary 437/438 - THE STORM'S OWN CLIMB, -189 rode ONE leg
// ONE boundary 453/454 - THE STORM'S OWN DRAIN the heaviest fall the
// record holds; the round trips the ZERO the book holds), the census
// battery (waterRescueLaneCount the family's own count the fold rides
// - the .223 bankedReceiptCount precedent the family's census rides,
// the seven skins ride whole, the junk forms never ride), the fence
// battery (the fold proves itself or the word prices nothing - the
// lawful zero the fence keeps, the extra keys never rejected), the
// byte-pin battery (the tail rides byte-exact - the seat the
// family's own enumeration holds), the lanes-never-merge battery
// (the pass and the hazard memorize and the shore pin and the transit
// target and the air bar glitch cells never ride the rescue fold)
import assert from 'node:assert'
import { waterRescueLaneCount, waterRescueLaneTrendConsistent, waterRescueLaneTrendRow } from '../../src/lib/waterrescuelanetrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, the ledger no-path save's own trend prices the ledger's no-path save's own mass across the faces, the tunnel steering's own trend prices the tunnel's steering verdict's own mass across the faces, the ledger dead-lid record's own trend prices the ledger's dead-lid record's own mass across the faces, the reloot heading's own trend prices the reloot heading's own mass across the faces, the ledger dead-lid save's own trend prices the ledger's dead-lid save's own mass across the faces, the plan top's own trend prices the plan top's own mass across the faces, the vertical doom skip's own trend prices the vertical doom skip's own mass across the faces, the bank views' own trend prices the bank views' own mass across the faces, the air bar glitch's own trend prices the air bar glitch's own mass across the faces, the banked receipt's own trend prices the banked receipt's own mass across the faces, this word prices the water rescue lane's own mass across the faces - the water rescue lane seat, co-existence by seat never by duplication)"

const HEAD = 'the water rescue lane trend (v0.976.224)'
const SWING = HEAD + ": the water rescue lane's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the water rescue lane's rise ran two steps deep - "
const SWELL_TAIL = " - the water rescue lane's own swell " + TAIL
const FADE = HEAD + ": the water rescue lane's fall ran two steps deep - "
const FADE_TAIL = " - the water rescue lane's own fade " + TAIL

const rowOf = (a, b, c) => {
  const d1 = b - a, d2 = c - b
  const arc = `${a} -> ${b} (${d1 >= 0 ? '+' : ''}${d1}) -> ${c} (${d2 >= 0 ? '+' : ''}${d2})`
  if (d1 === 0 || d2 === 0) return null
  if (d1 > 0 && d2 > 0) return SWELL + arc + SWELL_TAIL
  if (d1 < 0 && d2 < 0) return FADE + arc + FADE_TAIL
  return SWING + arc + SWING_TAIL
}
const foldOf = (a, b, c) => ({ back: { rescues: a }, prev: { rescues: b }, cur: { rescues: c } })

// === THE FIELD SERIES (the honest twenty-three-face window,
// byte-exact) ===
const SERIES = [[436,25],[437,77],[438,229],[439,125],[440,133],[441,81],[442,123],[443,168],[444,180],[445,213],[446,127],[447,155],[448,63],[449,118],[450,129],[451,32],[452,141],[453,279],[454,90],[455,80],[456,103],[457,106],[458,90]]
const T = Object.fromEntries(SERIES)
assert.strictEqual(Object.values(T).reduce((s, v) => s + v, 0), 2867) // THE CELL'S OWN WEIGHT 2867u
assert.strictEqual(SERIES.length, 23)
assert.strictEqual(T[436], 25) // THE FLOOR rode ONCE (the face 436's own floor)
assert.strictEqual(T[453], 279) // THE FIELD'S OWN TOP rode ONCE (the face 453's own crest - THE STORM)
assert.ok(Object.values(T).every(v => v > 0)) // THE NO-DROUGHT FIELD the zero never rode
// THE BOOK TWENTY-ONE of TWENTY-ONE windows speaking - THIRTEEN
// swings, SEVEN swells, ONE fade, the ZERO honest silences
const wins = []
for (let i = 2; i < SERIES.length; i++) wins.push([SERIES[i][0], SERIES[i - 2][1], SERIES[i - 1][1], SERIES[i][1]])
assert.strictEqual(wins.length, 21)
let swells = 0, fades = 0, swings = 0, silences = 0
for (const [f, a, b, c] of wins) {
  const row = rowOf(a, b, c)
  const d1 = b - a, d2 = c - b
  if (d1 === 0 || d2 === 0) { silences++; assert.strictEqual(row, null); continue }
  if (d1 > 0 && d2 > 0) { swells++; assert.ok(row.startsWith(SWELL)); continue }
  if (d1 < 0 && d2 < 0) { fades++; assert.ok(row.startsWith(FADE)); continue }
  swings++; assert.ok(row.startsWith(SWING))
}
assert.strictEqual(swells, 7)
assert.strictEqual(fades, 1)
assert.strictEqual(swings, 13)
assert.strictEqual(silences, 0)
// the window pins byte-exact (the honest arc each window holds)
assert.deepStrictEqual(rowOf(T[436], T[437], T[438]), SWELL + '25 -> 77 (+52) -> 229 (+152)' + SWELL_TAIL) // W438
assert.deepStrictEqual(rowOf(T[437], T[438], T[439]), SWING + '77 -> 229 (+152) -> 125 (-104)' + SWING_TAIL) // W439
assert.deepStrictEqual(rowOf(T[438], T[439], T[440]), SWING + '229 -> 125 (-104) -> 133 (+8)' + SWING_TAIL) // W440
assert.deepStrictEqual(rowOf(T[439], T[440], T[441]), SWING + '125 -> 133 (+8) -> 81 (-52)' + SWING_TAIL) // W441
assert.deepStrictEqual(rowOf(T[440], T[441], T[442]), SWING + '133 -> 81 (-52) -> 123 (+42)' + SWING_TAIL) // W442
assert.deepStrictEqual(rowOf(T[441], T[442], T[443]), SWELL + '81 -> 123 (+42) -> 168 (+45)' + SWELL_TAIL) // W443
assert.deepStrictEqual(rowOf(T[442], T[443], T[444]), SWELL + '123 -> 168 (+45) -> 180 (+12)' + SWELL_TAIL) // W444
assert.deepStrictEqual(rowOf(T[443], T[444], T[445]), SWELL + '168 -> 180 (+12) -> 213 (+33)' + SWELL_TAIL) // W445
assert.deepStrictEqual(rowOf(T[444], T[445], T[446]), SWING + '180 -> 213 (+33) -> 127 (-86)' + SWING_TAIL) // W446
assert.deepStrictEqual(rowOf(T[445], T[446], T[447]), SWING + '213 -> 127 (-86) -> 155 (+28)' + SWING_TAIL) // W447
assert.deepStrictEqual(rowOf(T[446], T[447], T[448]), SWING + '127 -> 155 (+28) -> 63 (-92)' + SWING_TAIL) // W448
assert.deepStrictEqual(rowOf(T[447], T[448], T[449]), SWING + '155 -> 63 (-92) -> 118 (+55)' + SWING_TAIL) // W449
assert.deepStrictEqual(rowOf(T[448], T[449], T[450]), SWELL + '63 -> 118 (+55) -> 129 (+11)' + SWELL_TAIL) // W450
assert.deepStrictEqual(rowOf(T[449], T[450], T[451]), SWING + '118 -> 129 (+11) -> 32 (-97)' + SWING_TAIL) // W451
assert.deepStrictEqual(rowOf(T[450], T[451], T[452]), SWING + '129 -> 32 (-97) -> 141 (+109)' + SWING_TAIL) // W452
assert.deepStrictEqual(rowOf(T[451], T[452], T[453]), SWELL + '32 -> 141 (+109) -> 279 (+138)' + SWELL_TAIL) // W453
assert.deepStrictEqual(rowOf(T[452], T[453], T[454]), SWING + '141 -> 279 (+138) -> 90 (-189)' + SWING_TAIL) // W454
assert.deepStrictEqual(rowOf(T[453], T[454], T[455]), FADE + '279 -> 90 (-189) -> 80 (-10)' + FADE_TAIL) // W455
assert.deepStrictEqual(rowOf(T[454], T[455], T[456]), SWING + '90 -> 80 (-10) -> 103 (+23)' + SWING_TAIL) // W456
assert.deepStrictEqual(rowOf(T[455], T[456], T[457]), SWELL + '80 -> 103 (+23) -> 106 (+3)' + SWELL_TAIL) // W457
assert.deepStrictEqual(rowOf(T[456], T[457], T[458]), SWING + '103 -> 106 (+3) -> 90 (-16)' + SWING_TAIL) // W458 THE FIELD'S OWN NEWEST WINDOW THE SCAN PRICES
// the bounds' own legs: +152 ONE leg ONE boundary 437/438 (THE
// STORM'S OWN CLIMB), -189 ONE leg ONE boundary 453/454 (THE STORM'S
// OWN DRAIN the heaviest fall the record holds)
const legs = SERIES.map(([, v]) => v)
let maxRise = 0, maxFall = 0, riseRides = 0, fallRides = 0
for (let i = 1; i < legs.length; i++) {
  const d = legs[i] - legs[i - 1]
  if (d > maxRise) maxRise = d
  if (d < maxFall) maxFall = d
}
for (let i = 1; i < legs.length; i++) {
  const d = legs[i] - legs[i - 1]
  if (d === maxRise) riseRides++
  if (d === maxFall) fallRides++
}
assert.strictEqual(maxRise, 152)
assert.strictEqual(riseRides, 1) // ONE leg ONE boundary 437/438
assert.strictEqual(maxFall, -189)
assert.strictEqual(fallRides, 1) // ONE leg ONE boundary 453/454
// the round trips the ZERO the book holds (the swings never mirrored)
let mirrors = 0
for (let i = 2; i < SERIES.length; i++) {
  const a = SERIES[i - 2][1], b = SERIES[i - 1][1], c = SERIES[i][1]
  if (b - a !== 0 && c - b === -(b - a)) mirrors++
}
assert.strictEqual(mirrors, 0)

// === THE CENSUS BATTERY (the word's own count the fold rides) ===
// the seven skins ride whole (the start and the blind live and the
// released and the standing down and the complete and the aborted and
// the timeout - the suffix skins the same lane holds)
const faceSample = [
  'F10 [F10] water: drowning rescue start (drowning, oxygen 15)',
  'F16 [F16] water: rescue blind live (pass 3, air=11, no ground truth yet - the climb flies on buoyancy alone)',
  'F5 [F5] water: rescue blind live (pass 2, air=reset(-1), no ground truth yet - the climb flies on buoyancy alone)',
  'F16 [F16] water: rescue released (surface-safe, open water - no land known; the walk gate reopens) in 5.0s',
  'F16 [F16] water: rescue standing down (frozen physics - the walk gate reopens, the reconnect lane owns a dead client) [blind: 2 passes, 1 shore scans hit, 3 standing probes - no ground truth ever gathered] in 12.3s',
  'F16 [F16] water: rescue complete in 7.2s',
  'F16 [F16] water: rescue complete (standing wet - shallow water is not drowning) in 4.0s',
  'F16 [F16] water: rescue aborted (dead mid-rescue - the hazard stays at the death spot) in 9.1s',
  'F16 [F16] water: rescue timeout (still wet, 3 passes, 2 probes, tail dry/dry/dry) in 30.0s',
  'F9 [F9] water: drowning rescue start (drowning, oxygen -1)'
]
assert.strictEqual(waterRescueLaneCount(faceSample), 10)
// the other emitters' lines never ride (the lanes never merge - the
// pass cell and the hazard memorize cell and the shore pin cell and
// the transit target cell and the air bar glitch cell and the
// walk-lane's own water-rescue why-cell and the no-carrier and
// wrong-bracket and junk forms)
const junk = [
  'F16 [F16] water: pass 0 head=wet shore=none land=n/a y=60.0 o2=15 probes=0 at=[-122,60,372]',
  'F16 [F16] water: hazard memorized at [-120,62,376] (1 live, fleet-wide)',
  'F16 [F16] water: shore pinned (r=2 after 8 passes - the shoreline owns this swim; the release takes over)',
  'F10 [F10] water: transit toward known land (birch_log) at [-131,396] d=6',
  'F16 [F16] water: air-bar glitch ignored (oxygen 0 on dry land at [-122,60,372], 3 total)',
  'F2 [F2] walk water-rescue: the walk-lane why-cell never rides the rescue fold',
  'F16 water: drowning rescue start (drowning, oxygen 15)',
  'water: rescue complete in 5.0s',
  'F16 [F17] water: rescue complete in 5.0s',
  'F16 [F16] water: rescued five bots',
  'F16 [F16] water: rescue',
  'F16 [F16] water: drowning rescue',
  'F16 [F16] water: rescue complete in 5.0s extra tail words ride whole'
]
assert.strictEqual(waterRescueLaneCount(junk.slice(0, 12)), 0) // the lanes and the junk forms never ride
assert.strictEqual(waterRescueLaneCount([junk[12]]), 1) // the open tail rides whole (the lane's own law)
// the zero a lawful count (the drought's own zero the fence keeps)
const dry = ['launching 19 bots for 600s -> targets sand, gravel, dirt, stone']
assert.strictEqual(waterRescueLaneCount(dry), 0)
// the census's own null pass (no lines, no read - the zero rides)
assert.strictEqual(waterRescueLaneCount(null), 0)
assert.strictEqual(waterRescueLaneCount(undefined), 0)
assert.strictEqual(waterRescueLaneCount('no lines'), 0)
assert.strictEqual(waterRescueLaneCount([42, {}]), 0)

// === THE FENCE BATTERY (the fold proves itself or prices nothing) ===
assert.strictEqual(waterRescueLaneTrendConsistent(null), false)
assert.strictEqual(waterRescueLaneTrendConsistent(undefined), false)
assert.strictEqual(waterRescueLaneTrendConsistent('no'), false)
assert.strictEqual(waterRescueLaneTrendConsistent([1, 2]), false)
assert.strictEqual(waterRescueLaneTrendConsistent({}), false)
assert.strictEqual(waterRescueLaneTrendConsistent({ back: { rescues: 1 }, prev: { rescues: 2 } }), false)
assert.strictEqual(waterRescueLaneTrendConsistent({ back: { rescues: 1 }, prev: { rescues: 2 }, cur: { rescues: '3' } }), false)
assert.strictEqual(waterRescueLaneTrendConsistent({ back: { rescues: 1 }, prev: { rescues: 2 }, cur: { rescues: -1 } }), false)
assert.strictEqual(waterRescueLaneTrendConsistent({ back: { rescues: 1.5 }, prev: { rescues: 2 }, cur: { rescues: 3 } }), false)
assert.strictEqual(waterRescueLaneTrendConsistent({ back: { rescues: 0 }, prev: { rescues: 0 }, cur: { rescues: 0 } }), true) // the lawful zero
assert.strictEqual(waterRescueLaneTrendConsistent({ back: { rescues: 1 }, prev: { rescues: 2 }, cur: { rescues: 3 }, extra: 'rides' }), true) // extra keys never rejected
// the row's own fence
assert.strictEqual(waterRescueLaneTrendRow(null), null)
assert.strictEqual(waterRescueLaneTrendRow({ back: { rescues: 1 }, prev: { rescues: 2 }, cur: { rescues: 'x' } }), null)
assert.strictEqual(waterRescueLaneTrendRow({ back: { rescues: -1 }, prev: { rescues: 2 }, cur: { rescues: 3 } }), null)
// the held step the honest silence (the family's own held law)
assert.strictEqual(waterRescueLaneTrendRow(foldOf(5, 5, 9)), null)
assert.strictEqual(waterRescueLaneTrendRow(foldOf(5, 9, 9)), null)
assert.strictEqual(waterRescueLaneTrendRow(foldOf(0, 0, 0)), null)

// === THE BYTE-PIN BATTERY (the tail rides byte-exact) ===
const sample = waterRescueLaneTrendRow(foldOf(25, 77, 229))
assert.ok(sample.startsWith(HEAD + ':'))
assert.ok(sample.endsWith(TAIL))
assert.ok(sample.includes(' - the water rescue lane seat, co-existence by seat never by duplication)'))
assert.ok(sample.startsWith(HEAD + ": the water rescue lane's rise ran two steps deep - 25 -> 77 (+52) -> 229 (+152) - the water rescue lane's own swell "))
// the byte-pin law: no shape verdict words (no return, no repeat, no
// stay, no run) nor the seats' own verdict word (no owns) nor the
// dynasty's own (no dynasty, no turn)
for (const w of [' return', ' repeat', ' stay', ' run ', ' owns ', ' dynasty', ' turn ']) {
  assert.ok(!sample.includes(w), 'byte-pin leak: ' + w)
}

// === THE LANES-NEVER-MERGE BATTERY ===
// the water guard's other cells never ride the rescue fold - the
// rescue lane alone (the junk battery above holds the other cells'
// own lines at zero); the fold the word's own count feeds never
// invents from the pass's own telemetry
const mixedFace = [
  'F16 [F16] water: pass 0 head=wet shore=none land=n/a y=60.0 o2=15 probes=0 at=[-122,60,372]',
  'F16 [F16] water: hazard memorized at [-120,62,376] (1 live, fleet-wide)',
  'F16 [F16] water: drowning rescue start (drowning, oxygen 15)',
  'F16 [F16] water: rescue released (surface-safe, open water - no land known; the walk gate reopens) in 5.0s'
]
assert.strictEqual(waterRescueLaneCount(mixedFace), 2) // the rescue lines alone

console.log('waterrescuelanetrend: all pins green')
