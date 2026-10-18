// tests/unit/prepositionwalkhometrend.test.mjs - THE PRE-POSITION
// WALK-HOME'S OWN TREND's own pin battery (v0.976.226 - THE .225 SEAT
// THEIRS: the furnace no-walk open's own trend (62ed0e60) the fire
// before rode, this word the pre-position walk home's own seat
// takes): the fleet harness's own end-phase walk-home mass across the
// faces the field's own scan named first (the 'F<n> pre-position:
// <N>b from yard, t-<N>s - walking home' family the harness prints
// when the end-phase scheduler turns the bot home before the final
// bank) - the strict grammar the field proved zero mismatch (the
// field proof 24/24 census==raw zero mismatches -
// scripts/fieldread-prepositionwalkhome-1442.mjs, the faces 436..459
// the artifact fetches re-spoke), the field's own chains byte-exact
// (THE CELL'S OWN WEIGHT 407u the twenty-four faces' own total), THE TOP
// the count 38 rode ONCE (the face 454's own crest), THE FLOOR the
// count 8 rode ONCE (the face 444's own floor), THE BOOK
// TWENTY-TWO of TWENTY-TWO windows speaking (ELEVEN swings, FOUR swells, FIVE
// fades, TWO honest silences - the family's own skin), the
// window pins byte-exact (all 22 windows), the bounds' own legs
// pins (+20 rode TWO legs 437/438 + 452/453, -26 rode ONE leg
// 454/455; the round trips the ONE the book holds), the
// census battery (prePositionWalkHomeCount the family's own count the
// fold rides - the word owns the count, one parser never a second -
// the strict shape rides whole, the census summary and the climb-out
// skin and the hop lane's walking-home-instead skin and the junk
// forms never ride), the fence battery (the fold proves itself or the
// word prices nothing - the lawful zero the fence keeps, the extra
// keys never rejected), the byte-pin battery (the tail rides
// byte-exact - the seat the family's own enumeration holds), the
// lanes-never-merge battery (the summary lines and the climb-out
// skins and the hop lines never ride the walk-home fold)
import assert from 'node:assert'
import { prePositionWalkHomeCount, prePositionWalkHomeTrendConsistent, prePositionWalkHomeTrendRow } from '../../src/lib/prepositionwalkhometrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, the ledger no-path save's own trend prices the ledger's no-path save's own mass across the faces, the tunnel steering's own trend prices the tunnel's steering verdict's own mass across the faces, the ledger dead-lid record's own trend prices the ledger's dead-lid record's own mass across the faces, the reloot heading's own trend prices the reloot heading's own mass across the faces, the ledger dead-lid save's own trend prices the ledger's dead-lid save's own mass across the faces, the plan top's own trend prices the plan top's own mass across the faces, the vertical doom skip's own trend prices the vertical doom skip's own mass across the faces, the bank views' own trend prices the bank views' own mass across the faces, the air bar glitch's own trend prices the air bar glitch's own mass across the faces, the banked receipt's own trend prices the banked receipt's own mass across the faces, the water rescue lane's own trend prices the water rescue lane's own mass across the faces, the furnace no-walk open's own trend prices the furnace no-walk open's own mass across the faces, this word prices the pre-position walk home's own mass across the faces - the pre-position walk home seat, co-existence by seat never by duplication)"

const HEAD = 'the pre-position walk home trend (v0.976.226)'
const SWING = HEAD + ": the walk homes' own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the walk homes' rise ran two steps deep - "
const SWELL_TAIL = " - the walk homes' own swell " + TAIL
const FADE = HEAD + ": the walk homes' fall ran two steps deep - "
const FADE_TAIL = " - the walk homes' own fade " + TAIL

const rowOf = (a, b, c) => {
  const d1 = b - a, d2 = c - b
  const arc = `${a} -> ${b} (${d1 >= 0 ? '+' : ''}${d1}) -> ${c} (${d2 >= 0 ? '+' : ''}${d2})`
  if (d1 === 0 || d2 === 0) return null
  if (d1 > 0 && d2 > 0) return SWELL + arc + SWELL_TAIL
  if (d1 < 0 && d2 < 0) return FADE + arc + FADE_TAIL
  return SWING + arc + SWING_TAIL
}
const foldOf = (a, b, c) => ({ back: { walks: a }, prev: { walks: b }, cur: { walks: c } })

// === THE FIELD SERIES (the honest twenty-four-face window, byte-exact) ===
const SERIES = [[436,10],[437,15],[438,35],[439,14],[440,10],[441,12],[442,28],[443,11],[444,8],[445,14],[446,22],[447,21],[448,15],[449,16],[450,13],[451,12],[452,12],[453,32],[454,38],[455,12],[456,9],[457,20],[458,9],[459,19]]
const T = Object.fromEntries(SERIES)
assert.strictEqual(Object.values(T).reduce((s, v) => s + v, 0), 407) // THE CELL'S OWN WEIGHT 407u
assert.strictEqual(SERIES.length, 24)
let speaking = 0
for (const [, v] of SERIES) { if (v > 0) speaking++ }
assert.strictEqual(speaking, 24) // the book: the faces the skin prices
assert.strictEqual(T[454], 38) // THE TOP
assert.strictEqual(T[444], 8) // THE FLOOR
// THE BOOK TWENTY-TWO of TWENTY-TWO windows speaking - ELEVEN swings,
// FOUR swells, FIVE fades, TWO honest silences
const wins = []
for (let i = 2; i < SERIES.length; i++) wins.push([SERIES[i][0], SERIES[i - 2][1], SERIES[i - 1][1], SERIES[i][1]])
assert.strictEqual(wins.length, 22)
let swells = 0, fades = 0, swings = 0, silences = 0
for (const [f, a, b, c] of wins) {
  const row = rowOf(a, b, c)
  const d1 = b - a, d2 = c - b
  if (d1 === 0 || d2 === 0) { silences++; assert.strictEqual(row, null); continue }
  if (d1 > 0 && d2 > 0) { swells++; assert.ok(row.startsWith(SWELL)); continue }
  if (d1 < 0 && d2 < 0) { fades++; assert.ok(row.startsWith(FADE)); continue }
  swings++; assert.ok(row.startsWith(SWING))
}
assert.strictEqual(swings, 11) // ELEVEN swings - the family's own skin
assert.strictEqual(swells, 4) // FOUR swells
assert.strictEqual(fades, 5) // FIVE fades
assert.strictEqual(silences, 2) // TWO honest silences
// the window pins byte-exact (the head + the arc byte)
assert.strictEqual(rowOf(T[436], T[437], T[438]), SWELL + '10 -> 15 (+5) -> 35 (+20)' + SWELL_TAIL) // the W438 swell
assert.strictEqual(rowOf(T[437], T[438], T[439]), SWING + '15 -> 35 (+20) -> 14 (-21)' + SWING_TAIL) // the W439 swing
assert.strictEqual(rowOf(T[438], T[439], T[440]), FADE + '35 -> 14 (-21) -> 10 (-4)' + FADE_TAIL) // the W440 fade
assert.strictEqual(rowOf(T[439], T[440], T[441]), SWING + '14 -> 10 (-4) -> 12 (+2)' + SWING_TAIL) // the W441 swing
assert.strictEqual(rowOf(T[440], T[441], T[442]), SWELL + '10 -> 12 (+2) -> 28 (+16)' + SWELL_TAIL) // the W442 swell
assert.strictEqual(rowOf(T[441], T[442], T[443]), SWING + '12 -> 28 (+16) -> 11 (-17)' + SWING_TAIL) // the W443 swing
assert.strictEqual(rowOf(T[442], T[443], T[444]), FADE + '28 -> 11 (-17) -> 8 (-3)' + FADE_TAIL) // the W444 fade
assert.strictEqual(rowOf(T[443], T[444], T[445]), SWING + '11 -> 8 (-3) -> 14 (+6)' + SWING_TAIL) // the W445 swing
assert.strictEqual(rowOf(T[444], T[445], T[446]), SWELL + '8 -> 14 (+6) -> 22 (+8)' + SWELL_TAIL) // the W446 swell
assert.strictEqual(rowOf(T[445], T[446], T[447]), SWING + '14 -> 22 (+8) -> 21 (-1)' + SWING_TAIL) // the W447 swing
assert.strictEqual(rowOf(T[446], T[447], T[448]), FADE + '22 -> 21 (-1) -> 15 (-6)' + FADE_TAIL) // the W448 fade
assert.strictEqual(rowOf(T[447], T[448], T[449]), SWING + '21 -> 15 (-6) -> 16 (+1)' + SWING_TAIL) // the W449 swing
assert.strictEqual(rowOf(T[448], T[449], T[450]), SWING + '15 -> 16 (+1) -> 13 (-3)' + SWING_TAIL) // the W450 swing
assert.strictEqual(rowOf(T[449], T[450], T[451]), FADE + '16 -> 13 (-3) -> 12 (-1)' + FADE_TAIL) // the W451 fade
assert.strictEqual(rowOf(T[450], T[451], T[452]), null) // the W452 held step - the honest silence
assert.strictEqual(rowOf(T[451], T[452], T[453]), null) // the W453 held step - the honest silence
assert.strictEqual(rowOf(T[452], T[453], T[454]), SWELL + '12 -> 32 (+20) -> 38 (+6)' + SWELL_TAIL) // the W454 swell
assert.strictEqual(rowOf(T[453], T[454], T[455]), SWING + '32 -> 38 (+6) -> 12 (-26)' + SWING_TAIL) // the W455 swing
assert.strictEqual(rowOf(T[454], T[455], T[456]), FADE + '38 -> 12 (-26) -> 9 (-3)' + FADE_TAIL) // the W456 fade
assert.strictEqual(rowOf(T[455], T[456], T[457]), SWING + '12 -> 9 (-3) -> 20 (+11)' + SWING_TAIL) // the W457 swing
assert.strictEqual(rowOf(T[456], T[457], T[458]), SWING + '9 -> 20 (+11) -> 9 (-11)' + SWING_TAIL) // the W458 swing
assert.strictEqual(rowOf(T[457], T[458], T[459]), SWING + '20 -> 9 (-11) -> 19 (+10)' + SWING_TAIL) // the W459 swing MY WORD'S OWN FIRST WINDOW THE NEXT DISPATCH'S FACE PRICES
// THE BOUNDS' OWN LEGS: +20 rode TWO legs 437/438 + 452/453,
// -26 rode ONE leg 454/455
const legs = []
for (let i = 1; i < SERIES.length; i++) legs.push([SERIES[i - 1][0], SERIES[i][0], SERIES[i][1] - SERIES[i - 1][1]])
let maxRise = null, maxFall = null
for (const [a, b, d] of legs) {
  if (maxRise === null || d > maxRise.d) maxRise = { d, b: a + '/' + b }
  if (maxFall === null || d < maxFall.d) maxFall = { d, b: a + '/' + b }
}
const riseBounds = legs.filter(([, , d]) => d === 20).map(([a, b]) => a + '/' + b).join(' + ')
const fallBounds = legs.filter(([, , d]) => d === -26).map(([a, b]) => a + '/' + b).join(' + ')
assert.strictEqual(maxRise.d, 20); assert.strictEqual(riseBounds, '437/438 + 452/453') // the max rise rode TWO legs
assert.strictEqual(maxFall.d, -26); assert.strictEqual(fallBounds, '454/455') // the max fall rode ONE leg ONE boundary
let roundTrips = 0
for (const [f, a, b, c] of wins) {
  const d1 = b - a, d2 = c - b
  if (d1 !== 0 && d2 !== 0 && d1 === -d2) roundTrips++
}
assert.strictEqual(roundTrips, 1) // the round trips the ONE the book holds

// === THE CENSUS BATTERY (prePositionWalkHomeCount - the strict grammar) ===
assert.strictEqual(prePositionWalkHomeCount([
  "F5 pre-position: 56b from yard, t-183s - walking home",
  "F2 pre-position: 39b from yard, t-147s - walking home",
  "F1 pre-position: 40b from yard, t-143s - walking home"
]), 3) // the strict shape rides whole - the distance and the deadline read
assert.strictEqual(prePositionWalkHomeCount([]), 0) // the honest zero
assert.strictEqual(prePositionWalkHomeCount(null), 0) // the junk input
assert.strictEqual(prePositionWalkHomeCount([null, 42, undefined]), 0) // non-strings skipped
// the junk forms never ride (the grammar the shape keeps)
assert.strictEqual(prePositionWalkHomeCount([
  'pre-position census: armed 9, landed 7 (+303u), failed 2 (top why: nothing to deposit x1) - the seat\'s own delivery, first priced', // the census summary lane - bankcensus\'s own read
  'F2 climb out (pre-position): OK +4 levels (4 steps, 11 dug, 10s)', // the climb-out book\'s own skin - the .210 word\'s cell
  'F5 [F5] pre-position: 56b from yard, t-183s - walking home', // the doubled tag - no such print the lane holds
  'pre-position: 56b from yard, t-183s - walking home', // the bare form - no F prefix
  'F5 pre-position: 56b from yard, t-183s - walking home instead', // the wrong tail - the hop lane\'s skin
  'F5 pre-position: 56 blocks from yard, t-183s - walking home', // the wrong unit
  'F5 pre-position: 56b from yard - walking home', // the deadline read missing
  'F5 pre-position: -56b from yard, t-183s - walking home' // the negative
]), 0)

// === THE FENCE BATTERY ===
assert.strictEqual(prePositionWalkHomeTrendConsistent(foldOf(0, 0, 0)), true) // the lawful zero
assert.strictEqual(prePositionWalkHomeTrendConsistent(foldOf(10, 15, 35)), true)
assert.strictEqual(prePositionWalkHomeTrendConsistent(null), false)
assert.strictEqual(prePositionWalkHomeTrendConsistent(undefined), false)
assert.strictEqual(prePositionWalkHomeTrendConsistent([]), false)
assert.strictEqual(prePositionWalkHomeTrendConsistent({ back: { walks: 1 }, prev: { walks: 2 } }), false) // the cur missing
assert.strictEqual(prePositionWalkHomeTrendConsistent({ back: { walks: -1 }, prev: { walks: 2 }, cur: { walks: 3 } }), false) // the negative never proves
assert.strictEqual(prePositionWalkHomeTrendConsistent({ back: { walks: 1.5 }, prev: { walks: 2 }, cur: { walks: 3 } }), false) // the float never proves
assert.strictEqual(prePositionWalkHomeTrendConsistent({ back: { walks: 1 }, prev: { walks: 2 }, cur: { walks: 3 }, extra: 'rides' }), true) // extra keys never rejected

// === THE BYTE-PIN BATTERY (the row byte, the tail the seat holds) ===
assert.strictEqual(prePositionWalkHomeTrendRow(null), null) // the fence holds
assert.strictEqual(prePositionWalkHomeTrendRow(foldOf(5, 5, 9)), null) // the held first step - the honest silence
assert.strictEqual(prePositionWalkHomeTrendRow(foldOf(5, 9, 9)), null) // the held second step
const swellRow = prePositionWalkHomeTrendRow(foldOf(10, 15, 35))
assert.ok(swellRow.startsWith(SWELL)) // the swell's head byte
assert.ok(swellRow.endsWith(TAIL)) // the tail byte-exact
assert.ok(!swellRow.includes('owns')) // the seats' own verdict word never rides
assert.ok(!swellRow.includes('dynasty') && !swellRow.includes('turn')) // the dynasty's own never rides
const fadeRow = prePositionWalkHomeTrendRow(foldOf(35, 14, 10))
assert.ok(fadeRow.startsWith(FADE)) // the fade's head byte
assert.ok(fadeRow.endsWith(TAIL))
const swingRow = prePositionWalkHomeTrendRow(foldOf(15, 35, 14))
assert.ok(swingRow.startsWith(SWING)) // the swing's head byte
assert.ok(swingRow.endsWith(TAIL))

// === THE LANES-NEVER-MERGE BATTERY ===
assert.strictEqual(prePositionWalkHomeCount([
  'pre-position census: armed 10, landed 3 (+378u), failed 3 (top why: chest unreachable x2) - the seat\'s own delivery, first priced', // the summary lane
  'F1 climb out (pre-position): OK +6 levels (6 steps, 15 dug, 14s)', // the climb-out skin
  'F4 [F4] hop: chest at [-122,65,407] d=50 zero: chest beyond the hop search radius 48 - walking home instead', // the hop lane
  'F9 [F9] craft torches: skip (no coal: sticks 6 coals 0)', // the torch lane
  '[F8] furnace within reach - opening without a walk' // the smelting lane
]), 0) // the lanes never merge - the walk-home cell alone

console.log('prepositionwalkhometrend battery: all pins green')
