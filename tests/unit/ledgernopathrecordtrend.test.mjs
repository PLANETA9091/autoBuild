// tests/unit/ledgernopathrecordtrend.test.mjs - THE LEDGER NO-PATH
// RECORD'S OWN TREND's own pin battery (v0.976.213): the no-path
// ledger's own write mass across the faces the field's own scan named
// first (the 'no-path ledger: chest at [x,y,z] cached for the fleet
// (N live, ttl 15s|90s...)' family) - the field's own chains
// byte-exact (THE CELL'S OWN WEIGHT 1859u the seventy-two faces' own
// total, THE FIELD 1101u the forty-three faces' own total, THE
// ALL-SPEAKING BIRTH the zero rode NEVER, THE FIELD'S OWN TOP THE
// COUNT 74 rode ONCE the face 368's own crest - THE STORM the
// walk-intent record's own crest the field shares, THE FIELD'S OWN
// FLOOR THE COUNT 2 rode ONCE the face 376's own floor), the FIELD
// BOOK THIRTY-SEVEN of FORTY-ONE windows speaking (TWENTY-FIVE
// swings, FIVE swells, SEVEN fades, the FOUR honest silences - the
// silence pair the faces 359/360 hold and the pair 382/383 hold)
// beside the whole-cache book SIXTY-THREE of SEVENTY speaking
// (FORTY-FOUR swings, NINE swells, TEN fades, the SEVEN honest
// silences), THE EIGHT-SWING RUN 374..381 THE FIELD'S OWN RECORD
// beside the whole cache THE EIGHT-SWING PAIR 374..381 and 423..432
// THE WHOLE-CACHE RECORD BOTH RUNS RIDE, the ROUND TRIPS (the NONE
// the field prices beside the W426 the weight-12 mirror the cache
// prices), the bounds' own legs pins (the +66 rode ONE leg ONE
// boundary the boundary 367/368 - THE STORM'S OWN CLIMB the quiet
// paid whole 8 -> 74, the -67 rode ONE leg ONE boundary the boundary
// 368/369 - THE STORM'S OWN DRAIN the crest paid whole 74 -> 7), the
// last field word the face 389's own window the swing (21 -> 37
// (+16) -> 9 (-28)), the whole-cache pins (the 1859u over the
// seventy-two faces, the gap-crossing windows the array-position read
// prices - the absent 390..416 span and the 419 and the 424 the
// honest gaps - and the W440..W447 windows byte-exact and the W448
// held 61 -> 16 (-45) -> 16 (0) MY WORD'S OWN FIRST LIVE READ the
// honest silence), the REUSE LAW battery (ledgerRecordBook's own
// no-path family cell the fold rides - the record's own count rides
// whole, the skip family and the walk-intent records and the
// full-chest records and the dead-lid records never ride - the lanes
// never merge), the fence battery (the fold proves itself or the word
// prices nothing - the lawful zero the fence keeps, the extra keys
// never rejected), the byte-pin battery (the tail rides byte-exact -
// the seat the family's own enumeration holds)
import assert from 'node:assert'
import { ledgerNoPathRecordTrendConsistent, ledgerNoPathRecordTrendRow } from '../../src/lib/ledgernopathrecordtrend.mjs'
import { ledgerRecordBook } from '../../src/lib/ledgerbook.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, this word prices the ledger's no-path record's own mass across the faces - the ledger no-path record seat, co-existence by seat never by duplication)"

const HEAD = 'the ledger no-path record trend (v0.976.213)'
const SWING = HEAD + ": the record's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the record's rise ran two steps deep - "
const SWELL_TAIL = " - the record's own swell " + TAIL
const FADE = HEAD + ": the record's fall ran two steps deep - "
const FADE_TAIL = " - the record's own fade " + TAIL

const tallyWindow = (f, T, order) => {
  const i = order.indexOf(f)
  const a = T[order[i - 2]], b = T[order[i - 1]], c = T[f]
  const first = b - a, second = c - b
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}
const arcOf = (f, T, order) => {
  const i = order.indexOf(f)
  const s = (n) => (n >= 0 ? `+${n}` : `${n}`)
  return `${T[order[i - 2]]} -> ${T[order[i - 1]]} (${s(T[order[i - 1]] - T[order[i - 2]])}) -> ${T[f]} (${s(T[f] - T[order[i - 1]])})`
}
const rowFor = (f, T, order) => ledgerNoPathRecordTrendRow({
  back: { records: T[order[order.indexOf(f) - 2]] },
  prev: { records: T[order[order.indexOf(f) - 1]] },
  cur: { records: T[f] }
})

// THE WHOLE-CACHE TABLE - the seventy-two faces the cache holds (the
// span 347..448; the absent 390..416 span and the 419 and the 424 the
// honest gaps - the face numbers the runs consumed, the logs the
// cache never received; the windows the array-position read prices)
const T = {}
const ORDER = []
const SERIES = [[347, 22], [348, 14], [349, 10], [350, 20], [351, 29], [352, 13], [353, 20], [354, 48], [355, 31], [356, 24], [357, 12], [358, 10], [359, 10], [360, 31], [361, 7], [362, 28], [363, 23], [364, 25], [365, 19], [366, 9], [367, 8], [368, 74], [369, 7], [370, 19], [371, 36], [372, 40], [373, 53], [374, 26], [375, 35], [376, 2], [377, 40], [378, 19], [379, 31], [380, 14], [381, 33], [382, 33], [383, 46], [384, 21], [385, 66], [386, 26], [387, 21], [388, 37], [389, 9], [417, 9], [418, 46], [420, 6], [421, 28], [422, 38], [423, 12], [425, 54], [426, 12], [427, 48], [429, 18], [430, 42], [431, 5], [432, 34], [433, 62], [434, 53], [435, 20], [436, 17], [437, 7], [438, 37], [439, 13], [440, 22], [441, 10], [442, 17], [443, 23], [444, 7], [445, 25], [446, 61], [447, 16], [448, 16]]
for (const [f, v] of SERIES) { T[f] = v; ORDER.push(f) }
const FIELD = ORDER.slice(0, ORDER.indexOf(389) + 1)

// ===== THE FIELD'S OWN PINS (347..389) =====
{
  const sum = FIELD.reduce((a, f) => a + T[f], 0)
  assert.strictEqual(sum, 1101, 'THE FIELD 1101u the forty-three faces own total')
  assert.strictEqual(FIELD.length, 43, 'the field forty-three faces deep')
  const top = FIELD.filter(f => T[f] === 74)
  assert.deepStrictEqual(top, [368], 'THE FIELD OWN TOP THE COUNT 74 rode ONCE the face 368 own crest - THE STORM')
  const floor = FIELD.filter(f => T[f] === 2)
  assert.deepStrictEqual(floor, [376], 'THE FIELD OWN FLOOR THE COUNT 2 rode ONCE the face 376 own floor')
  assert.strictEqual(FIELD.filter(f => T[f] === 0).length, 0, 'THE ALL-SPEAKING BIRTH - the zero rode NEVER (the drought never rode the priced field)')
  // the field book
  const shapes = {}
  for (let i = 2; i < FIELD.length; i++) {
    const s = tallyWindow(FIELD[i], T, FIELD)
    shapes[s] = (shapes[s] || 0) + 1
  }
  assert.strictEqual(shapes.swing, 25, 'the field book TWENTY-FIVE swings')
  assert.strictEqual(shapes.swell, 5, 'the field book FIVE swells')
  assert.strictEqual(shapes.fade, 7, 'the field book SEVEN fades')
  assert.strictEqual(shapes.silence, 4, 'the field book the FOUR honest silences')
  const windows = FIELD.length - 2
  assert.strictEqual(shapes.swing + shapes.swell + shapes.fade + shapes.silence, windows, 'the field book FORTY-ONE windows whole')
  assert.strictEqual(shapes.swing + shapes.swell + shapes.fade, 37, 'the field book THIRTY-SEVEN of FORTY-ONE windows speaking')
  // the honest silences the faces 359/360 hold and the pair 382/383 hold
  assert.strictEqual(tallyWindow(359, T, FIELD), 'silence', 'the W359 the honest silence')
  assert.strictEqual(tallyWindow(360, T, FIELD), 'silence', 'the W360 the honest silence')
  assert.strictEqual(tallyWindow(382, T, FIELD), 'silence', 'the W382 the honest silence')
  assert.strictEqual(tallyWindow(383, T, FIELD), 'silence', 'the W383 the honest silence')
  assert.strictEqual(rowFor(359, T, FIELD), null, 'the W359 row the honest null')
  assert.strictEqual(rowFor(383, T, FIELD), null, 'the W383 row the honest null')
}

// ===== THE FIELD'S OWN SWELLS BYTE-EXACT (the five) =====
{
  assert.strictEqual(tallyWindow(351, T, FIELD), 'swell')
  assert.strictEqual(rowFor(351, T, FIELD), SWELL + arcOf(351, T, FIELD) + SWELL_TAIL, 'the W351 swell 10 -> 20 (+10) -> 29 (+9)')
  assert.strictEqual(arcOf(351, T, FIELD), '10 -> 20 (+10) -> 29 (+9)', 'the W351 arc byte-exact')
  assert.strictEqual(arcOf(354, T, FIELD), '13 -> 20 (+7) -> 48 (+28)', 'the W354 swell arc byte-exact')
  assert.strictEqual(tallyWindow(354, T, FIELD), 'swell')
  assert.strictEqual(arcOf(371, T, FIELD), '7 -> 19 (+12) -> 36 (+17)', 'the W371 swell arc byte-exact')
  assert.strictEqual(arcOf(372, T, FIELD), '19 -> 36 (+17) -> 40 (+4)', 'the W372 swell arc byte-exact')
  assert.strictEqual(arcOf(373, T, FIELD), '36 -> 40 (+4) -> 53 (+13)', 'the W373 swell arc byte-exact')
}

// ===== THE FIELD'S OWN FADES BYTE-EXACT (the seven) =====
{
  assert.strictEqual(arcOf(349, T, FIELD), '22 -> 14 (-8) -> 10 (-4)', 'the W349 fade arc byte-exact')
  assert.strictEqual(tallyWindow(349, T, FIELD), 'fade')
  assert.strictEqual(rowFor(349, T, FIELD), FADE + arcOf(349, T, FIELD) + FADE_TAIL, 'the W349 row byte-exact')
  assert.strictEqual(arcOf(356, T, FIELD), '48 -> 31 (-17) -> 24 (-7)', 'the W356 fade arc byte-exact')
  assert.strictEqual(arcOf(357, T, FIELD), '31 -> 24 (-7) -> 12 (-12)', 'the W357 fade arc byte-exact')
  assert.strictEqual(arcOf(358, T, FIELD), '24 -> 12 (-12) -> 10 (-2)', 'the W358 fade arc byte-exact')
  assert.strictEqual(arcOf(366, T, FIELD), '25 -> 19 (-6) -> 9 (-10)', 'the W366 fade arc byte-exact')
  assert.strictEqual(arcOf(367, T, FIELD), '19 -> 9 (-10) -> 8 (-1)', 'the W367 fade arc byte-exact')
  assert.strictEqual(arcOf(387, T, FIELD), '66 -> 26 (-40) -> 21 (-5)', 'the W387 fade arc byte-exact')
}

// ===== THE EIGHT-SWING RUN 374..381 - THE FIELD'S OWN RECORD =====
{
  const run = [374, 375, 376, 377, 378, 379, 380, 381]
  for (const f of run) assert.strictEqual(tallyWindow(f, T, FIELD), 'swing', `the W${f} the run's own swing`)
  assert.strictEqual(tallyWindow(373, T, FIELD), 'swell', 'the bounds never extend - the swell 373 holds before')
  assert.strictEqual(tallyWindow(382, T, FIELD), 'silence', 'the bounds never extend - the held 382 holds after')
  // the run's own arcs byte-exact (the storm's own climb and drain ride inside)
  assert.strictEqual(arcOf(376, T, FIELD), '26 -> 35 (+9) -> 2 (-33)', 'the W376 swing arc byte-exact')
  assert.strictEqual(arcOf(377, T, FIELD), '35 -> 2 (-33) -> 40 (+38)', 'the W377 swing arc byte-exact')
  assert.strictEqual(arcOf(381, T, FIELD), '31 -> 14 (-17) -> 33 (+19)', 'the W381 swing arc byte-exact')
  // the second runs beside
  for (const f of [361, 362, 363, 364, 365]) assert.strictEqual(tallyWindow(f, T, FIELD), 'swing', 'the five-swing run 361..365 the field holds beside')
  for (const f of [368, 369, 370]) assert.strictEqual(tallyWindow(f, T, FIELD), 'swing', 'the three-swing run 368..370 the field holds beside')
  for (const f of [384, 385, 386]) assert.strictEqual(tallyWindow(f, T, FIELD), 'swing', 'the three-swing run 384..386 the field holds beside')
}

// ===== THE ROUND TRIPS - the NONE the field prices =====
{
  const rts = []
  for (let i = 2; i < FIELD.length; i++) {
    const b = T[FIELD[i - 2]], c = T[FIELD[i]]
    if (b === c && tallyWindow(FIELD[i], T, FIELD) !== 'silence') rts.push(FIELD[i])
  }
  assert.deepStrictEqual(rts, [], 'the field round trips the NONE - the lanes never merge (the walk-intent record own field priced ONE the W381 the weight-19 mirror)')
}

// ===== THE BOUNDS' OWN LEGS (the boundaries the windows' own span
// holds - the +66 the boundary 367/368 rides once the window legs
// price twice: the W368's own second leg and the W369's own first leg
// the same boundary the array carries) =====
{
  let maxRise = -Infinity, maxFall = Infinity, riseLegs = 0, fallLegs = 0
  for (let j = 1; j < FIELD.length; j++) {
    const leg = T[FIELD[j]] - T[FIELD[j - 1]]
    if (leg > maxRise) { maxRise = leg; riseLegs = 1 } else if (leg === maxRise) riseLegs++
    if (leg < maxFall) { maxFall = leg; fallLegs = 1 } else if (leg === maxFall) fallLegs++
  }
  assert.strictEqual(maxRise, 66, 'the +66 the max rise the field prices')
  assert.strictEqual(riseLegs, 1, 'the +66 rode ONE boundary - THE STORM OWN CLIMB the quiet paid whole 8 -> 74')
  assert.strictEqual(maxFall, -67, 'the -67 the max fall the field prices')
  assert.strictEqual(fallLegs, 1, 'the -67 rode ONE boundary - THE STORM OWN DRAIN the crest paid whole 74 -> 7')
  assert.strictEqual(arcOf(368, T, FIELD), '9 -> 8 (-1) -> 74 (+66)', 'the W368 the climb window byte-exact')
  assert.strictEqual(tallyWindow(368, T, FIELD), 'swing')
  assert.strictEqual(arcOf(369, T, FIELD), '8 -> 74 (+66) -> 7 (-67)', 'the W369 the drain window byte-exact')
}

// ===== the last field word =====
{
  assert.strictEqual(tallyWindow(389, T, FIELD), 'swing', 'the face 389 own window the swing')
  assert.strictEqual(rowFor(389, T, FIELD), SWING + arcOf(389, T, FIELD) + SWING_TAIL, 'the W389 row byte-exact')
  assert.strictEqual(arcOf(389, T, FIELD), '21 -> 37 (+16) -> 9 (-28)', 'the W389 arc byte-exact')
}

// ===== THE WHOLE-CACHE PINS =====
{
  const sum = ORDER.reduce((a, f) => a + T[f], 0)
  assert.strictEqual(sum, 1859, 'THE CELL OWN WEIGHT 1859u the seventy-two faces own total')
  assert.strictEqual(ORDER.length, 72, 'the cache seventy-two faces')
  const top = ORDER.filter(f => T[f] === 74)
  assert.deepStrictEqual(top, [368], 'the whole-cache top THE COUNT 74 rode ONCE the same face the storm prices')
  const floor = ORDER.filter(f => T[f] === 2)
  assert.deepStrictEqual(floor, [376], 'the whole-cache floor THE COUNT 2 rode ONCE the same floor')
  const shapes = {}
  for (let i = 2; i < ORDER.length; i++) {
    const s = tallyWindow(ORDER[i], T, ORDER)
    shapes[s] = (shapes[s] || 0) + 1
  }
  assert.strictEqual(shapes.swing, 44, 'the whole-cache book FORTY-FOUR swings')
  assert.strictEqual(shapes.swell, 9, 'the whole-cache book NINE swells')
  assert.strictEqual(shapes.fade, 10, 'the whole-cache book TEN fades')
  assert.strictEqual(shapes.silence, 7, 'the whole-cache book the SEVEN honest silences')
  assert.strictEqual(shapes.swing + shapes.swell + shapes.fade + shapes.silence, 70, 'the whole-cache book SEVENTY windows whole')
  assert.strictEqual(shapes.swing + shapes.swell + shapes.fade, 63, 'the whole-cache book SIXTY-THREE of SEVENTY windows speaking')
  // the honest silences the cache holds: the field's own four beside the gap-crossing pair W417/W418 and the W448 held
  for (const f of [359, 360, 382, 383, 417, 418, 448]) assert.strictEqual(tallyWindow(f, T, ORDER), 'silence', `the W${f} the honest silence the cache holds`)
  // the gap-crossing windows the array-position read prices (the
  // absent 390..416 span the windows cross)
  assert.strictEqual(arcOf(417, T, ORDER), '37 -> 9 (-28) -> 9 (+0)', 'the W417 the gap-crossing silence byte-exact (the held second step the gap rides)')
  assert.strictEqual(arcOf(418, T, ORDER), '9 -> 9 (+0) -> 46 (+37)', 'the W418 the gap-crossing silence byte-exact (the held first step)')
  assert.strictEqual(arcOf(420, T, ORDER), '9 -> 46 (+37) -> 6 (-40)', 'the W420 the gap-crossing swing byte-exact')
  // THE EIGHT-SWING PAIR 374..381 and 423..432 - THE WHOLE-CACHE RECORD BOTH RUNS RIDE
  for (const f of [423, 425, 426, 427, 429, 430, 431, 432]) assert.strictEqual(tallyWindow(f, T, ORDER), 'swing', `the W${f} the second run's own swing`)
  assert.strictEqual(tallyWindow(422, T, ORDER), 'swell', 'the bounds never extend - the swell 422 holds before')
  assert.strictEqual(tallyWindow(433, T, ORDER), 'swell', 'the bounds never extend - the swell 433 holds after')
  for (const f of [438, 439, 440, 441, 442]) assert.strictEqual(tallyWindow(f, T, ORDER), 'swing', 'the five-swing run 438..442 the cache adds')
  // THE ROUND TRIP the cache prices - the W426 the weight-12 mirror
  assert.strictEqual(arcOf(426, T, ORDER), '12 -> 54 (+42) -> 12 (-42)', 'the W426 the weight-12 mirror byte-exact')
  assert.strictEqual(tallyWindow(426, T, ORDER), 'swing')
  const rts = []
  for (let i = 2; i < ORDER.length; i++) {
    if (T[ORDER[i - 2]] === T[ORDER[i]] && tallyWindow(ORDER[i], T, ORDER) !== 'silence') rts.push(ORDER[i])
  }
  assert.deepStrictEqual(rts, [426], 'the whole-cache round trips the ONE - the W426 the cache prices')
  // the bounds' own legs the whole cache shares (the boundaries the
  // spans hold - the +66 the boundary 367/368, the -67 the boundary
  // 368/369)
  let maxRise = -Infinity, maxFall = Infinity, riseLegs = 0, fallLegs = 0
  for (let j = 1; j < ORDER.length; j++) {
    const leg = T[ORDER[j]] - T[ORDER[j - 1]]
    if (leg > maxRise) { maxRise = leg; riseLegs = 1 } else if (leg === maxRise) riseLegs++
    if (leg < maxFall) { maxFall = leg; fallLegs = 1 } else if (leg === maxFall) fallLegs++
  }
  assert.strictEqual(maxRise, 66, 'the +66 the whole-cache max rise - the same boundary both books ride')
  assert.strictEqual(riseLegs, 1, 'the +66 rode ONE boundary the cache holds too')
  assert.strictEqual(maxFall, -67, 'the -67 the whole-cache max fall - the same boundary both books ride')
  assert.strictEqual(fallLegs, 1, 'the -67 rode ONE boundary the cache holds too')
}

// ===== the newest windows byte-exact (the W440..W447) + the W448 held =====
{
  assert.strictEqual(arcOf(440, T, ORDER), '37 -> 13 (-24) -> 22 (+9)', 'the W440 swing byte-exact')
  assert.strictEqual(arcOf(441, T, ORDER), '13 -> 22 (+9) -> 10 (-12)', 'the W441 swing byte-exact')
  assert.strictEqual(arcOf(442, T, ORDER), '22 -> 10 (-12) -> 17 (+7)', 'the W442 swing byte-exact')
  assert.strictEqual(arcOf(443, T, ORDER), '10 -> 17 (+7) -> 23 (+6)', 'the W443 swell byte-exact')
  assert.strictEqual(arcOf(444, T, ORDER), '17 -> 23 (+6) -> 7 (-16)', 'the W444 fade byte-exact')
  assert.strictEqual(arcOf(445, T, ORDER), '23 -> 7 (-16) -> 25 (+18)', 'the W445 swing byte-exact')
  assert.strictEqual(rowFor(446, T, ORDER), SWELL + '7 -> 25 (+18) -> 61 (+36)' + SWELL_TAIL, 'the W446 swell row byte-exact')
  assert.strictEqual(rowFor(447, T, ORDER), SWING + '25 -> 61 (+36) -> 16 (-45)' + SWING_TAIL, 'the W447 swing row byte-exact')
  // the W448 held - MY WORD'S OWN FIRST LIVE READ the honest silence
  assert.strictEqual(arcOf(448, T, ORDER), '61 -> 16 (-45) -> 16 (+0)', 'the W448 the held arc byte-exact')
  assert.strictEqual(tallyWindow(448, T, ORDER), 'silence', 'the W448 the honest silence - MY WORD OWN FIRST LIVE READ')
  assert.strictEqual(rowFor(448, T, ORDER), null, 'the W448 row the honest null - the fade own second step the floor flat breath prices')
}

// ===== THE REUSE LAW battery - ledgerRecordBook's own no-path family
// cell the fold rides (one-parser law, never a fork) =====
{
  // the record's own count rides whole (the ttl forms the emitter
  // prints: the fresh 15s, the escalated 90s half-life, the timeout
  // verdict suffix - the line's own count rides whole whatever the
  // radius and the live crowd hold)
  const lines1 = [
    'F1 [F1] no-path ledger: chest at [-10,64,20] cached for the fleet (3 live, ttl 15s)',
    'F2 [F2] no-path ledger: chest at [-10,64,20] cached for the fleet (1 live, ttl 90s (the repeat\'s own half-life))',
    'F3 [F3] no-path ledger: chest at [12,64,-22] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F1 [F1] chest skip (no path cached 30s ago at [-10,64,20])'
  ]
  const b1 = ledgerRecordBook(lines1)
  assert.ok(b1, 'the book rides the real shapes')
  assert.strictEqual(b1.families['no-path'].records, 3, 'the record own count rides whole (the skip never rides)')
  assert.strictEqual(b1.families['no-path'].saves, 1, 'the skip family own cell the census holds - the record seat prices beside never merge')
  // the co-existence by seat: the sibling families the same book holds
  const lines2 = [
    'F1 [F1] no-path ledger: chest at [-10,64,20] cached for the fleet (3 live, ttl 15s)',
    'F4 [F4] walk-intent: chest at [30,64,10] held for the fleet (1 live, ttl 90s)',
    'F5 [F5] full-chest ledger: chest at [40,64,0] cached for the fleet (2 live, ttl 15s)',
    'F6 [F6] dead-lid ledger: chest at [50,64,0] cached for the fleet (1 live, ttl 15s)'
  ]
  const b2 = ledgerRecordBook(lines2)
  assert.strictEqual(b2.families['no-path'].records, 1, 'the no-path record rides whole beside the siblings')
  assert.strictEqual(b2.families['walk-intent'].records, 1, 'the walk-intent record the .211 seat prices beside - co-existence')
  assert.strictEqual(b2.families['full-chest'].records, 1, 'the full-chest record the sibling beside')
  assert.strictEqual(b2.families['dead-lid'].records, 1, 'the dead-lid record the sibling beside')
  // the junk forms never ride (the census own regex prices the truth -
  // never a second grammar)
  const junk = [
    'F1 [F1] no-path ledger: chest at [10,64] cached for the fleet (3 live, ttl 15s)',
    'no-path ledger: chest at [10,64,20] cached for the fleet (3 live, ttl 15s)',
    'F1 [F1] no-path ledger: chest at [10,64,20] cached for the fleet (ttl 15s)',
    'F1 [F1] no-path ledger: chest at [10,64,20] cached for the fleet (3 live, ttl 15s',
    'F1 [F1] no-path ledger: chest at [10,64,20] cached for the fleet (3 live, ttl 30s)',
    'F1 [F1] no-path ledger: chest cached for the fleet',
    ''
  ]
  assert.strictEqual(ledgerRecordBook(junk), null, 'the all-junk book the fold refuses - the census own fence prices nothing')
  const b3 = ledgerRecordBook(junk.concat(['F2 [F2] no-path ledger: chest at [11,64,21] cached for the fleet (2 live, ttl 15s)']))
  assert.ok(b3, 'the book rides the truth beside the junk')
  assert.strictEqual(b3.families['no-path'].records, 1, 'the junk forms never ride - the grammar strict (the one true record alone)')
  // the fold rides the census own cell (the wire's own read)
  const npOf = (ls) => {
    const b = ledgerRecordBook(ls)
    return { records: b ? b.families['no-path'].records : 0 }
  }
  const fold = { back: npOf(lines1), prev: npOf(lines2), cur: npOf(junk) }
  assert.strictEqual(fold.back.records, 3, 'the fold back the census own cell')
  assert.strictEqual(fold.prev.records, 1, 'the fold prev the census own cell')
  assert.strictEqual(fold.cur.records, 0, 'the fold cur the census own cell - the zero lawful')
  const row = ledgerNoPathRecordTrendRow(fold)
  assert.ok(row && row.startsWith(HEAD + ": the record's fall ran two steps deep - 3 -> 1 (-2) -> 0 (-1)"), 'the fold row the census own read rides (the fade the drain prices)')
}

// ===== THE FENCE battery - the fold proves itself or the word prices
// nothing (the lawful zero the fence keeps, the extra keys never
// rejected) =====
{
  for (const bad of [null, undefined, 42, 'x', [], {}, { back: {}, prev: { records: 1 }, cur: { records: 1 } }, { back: { records: 1 }, prev: {}, cur: { records: 1 } }, { back: { records: 1 }, prev: { records: 1 } }, { back: { records: -1 }, prev: { records: 1 }, cur: { records: 1 } }, { back: { records: 1.5 }, prev: { records: 1 }, cur: { records: 1 } }, { back: { records: NaN }, prev: { records: 1 }, cur: { records: 1 } }, { back: { records: '2' }, prev: { records: 1 }, cur: { records: 1 } }, { back: { records: 1 }, prev: { records: null }, cur: { records: 1 } }]) {
    assert.strictEqual(ledgerNoPathRecordTrendConsistent(bad), false, `the fence rejects ${JSON.stringify(bad)}`)
    assert.strictEqual(ledgerNoPathRecordTrendRow(bad), null, `the fence prices nothing for ${JSON.stringify(bad)}`)
  }
  assert.strictEqual(ledgerNoPathRecordTrendConsistent({ back: { records: 0 }, prev: { records: 0 }, cur: { records: 0 } }), true, 'the lawful zero the fence keeps (the drought own zero)')
  assert.strictEqual(ledgerNoPathRecordTrendRow({ back: { records: 0 }, prev: { records: 0 }, cur: { records: 0 } }), null, 'the held zero the honest silence')
  assert.strictEqual(ledgerNoPathRecordTrendConsistent({ back: { records: 3, extra: 'x' }, prev: { records: 1 }, cur: { records: 2, extra: 'y' } }), true, 'the extra keys never rejected')
  // a zero face rides a lawful count (the record own zero is no fence)
  const zrow = ledgerNoPathRecordTrendRow({ back: { records: 5 }, prev: { records: 0 }, cur: { records: 3 } })
  assert.ok(zrow && zrow.startsWith(HEAD + ": the record's own swing - 5 -> 0 (-5) -> 3 (+3)"), 'the zero face rides a lawful count')
  // the held steps the honest silence (any count-to-count zero)
  for (const f of [{ back: { records: 3 }, prev: { records: 3 }, cur: { records: 5 } }, { back: { records: 3 }, prev: { records: 5 }, cur: { records: 5 } }]) {
    assert.strictEqual(ledgerNoPathRecordTrendRow(f), null, 'the held step the honest silence')
  }
}

// ===== THE BYTE-PIN battery - the tail rides byte-exact, the verdict
// words never speak =====
{
  const row = rowFor(446, T, ORDER)
  assert.ok(row.endsWith(' - the ledger no-path record seat, co-existence by seat never by duplication)'), 'the tail rides byte-exact to the seat')
  assert.strictEqual(row, SWELL + '7 -> 25 (+18) -> 61 (+36)' + SWELL_TAIL, 'the swell row the family own enumeration holds')
  for (const w of ['return', 'repeat', 'stay', 'owns', 'dynasty', 'turn']) {
    assert.ok(!row.includes(w), `the row never speaks the verdict word '${w}'`)
  }
  assert.ok(!/\brun\b/.test(row), 'the row never speaks the run word (the rung word the tail holds is no run - the word-boundary the claim prices)')
  const swingRow = rowFor(447, T, ORDER)
  assert.ok(swingRow.startsWith(HEAD + ": the record's own swing - "), 'the swing head byte-exact')
  const fadeRow = rowFor(437, T, ORDER)
  assert.ok(fadeRow.startsWith(HEAD + ": the record's fall ran two steps deep - "), 'the fade head byte-exact')
  assert.ok(fadeRow.endsWith(SWELL_TAIL.slice(SWELL_TAIL.indexOf('(the sweep'))), 'the tail the same bytes every shape rides')
}

// ===== the lanes-never-merge claims =====
{
  const row = rowFor(446, T, ORDER)
  assert.strictEqual(row.split('this word prices the ledger\'s no-path record\'s own mass across the faces').length - 1, 1, 'my seat named once')
  assert.ok(row.includes('the walk-intent record\'s own trend prices the walk-intent record\'s own mass across the faces'), 'the walk-intent record seat the .211 sibling named beside')
  assert.ok(row.includes('the no-path\'s own trend prices the machine-unreachable no-path skin\'s own mass across the walks'), 'the machine-unreachable no-path skin named - a different lane never merges')
  assert.ok(row.includes('the walk no-path\'s own trend prices the walk-lane\'s own no-path mass across the walks'), 'the walk-lane no-path named - a different lane never merges')
  assert.ok(row.includes('the transit target\'s own trend prices the transit target\'s own shore book across the faces'), 'the .210 seat named beside')
  assert.ok(!row.includes('no-path ledger:'), 'the row never speaks the raw grammar (the census owns the read)')
}
