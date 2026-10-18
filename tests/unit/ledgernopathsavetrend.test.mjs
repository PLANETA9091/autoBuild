// tests/unit/ledgernopathsavetrend.test.mjs - THE LEDGER NO-PATH
// SAVE'S OWN TREND's own pin battery (v0.976.214): the no-path
// ledger's own save mass across the faces the field's own scan named
// first (the 'chest skip (no path cached Xs ago at [x,y,z])' family -
// the save the hop prints when a bot's chest goal rides the cache the
// consult already holds) - the field's own chains byte-exact (THE
// CELL'S OWN WEIGHT 3052u the seventy-five faces' own total, THE
// FIELD 1708u the forty-three faces' own total, THE ALL-SPEAKING
// BIRTH the zero rode NEVER, THE FIELD'S OWN TOP THE COUNT 110 rode
// ONCE the face 368's own crest - THE STORM the record seat's own
// crest face the field shares, THE FIELD'S OWN FLOOR THE COUNT 4 rode
// ONCE the face 376's own floor), the FIELD BOOK THIRTY-NINE of
// FORTY-ONE windows speaking (TWENTY-FIVE swings, SIX swells, EIGHT
// fades, the TWO honest silences - the silence pair the faces 359/360
// hold) beside the whole-cache book SEVENTY-ONE of SEVENTY-THREE
// speaking (FORTY-FOUR swings, FOURTEEN swells, THIRTEEN fades, the
// same TWO honest silences), THE TEN-SWING RUN 372..381 THE FIELD'S
// OWN RECORD beside the whole cache THE SAME TEN-SWING RUN THE RECORD
// BOTH BOOKS RIDE, the second runs beside (the five-swing 423..428,
// the three-swing 384..386 and 430..432, the gap-crossing three-swing
// 388..389..417), the ROUND TRIPS (the ONE both books price - the W353
// the weight-33 mirror - the record seat's own field priced the NONE,
// the save's field prices the ONE - the lanes never merge), the
// bounds' own legs pins (the +96 rode ONE leg ONE boundary 367/368 -
// THE STORM'S OWN CLIMB the quiet paid whole 14 -> 110, the -104 rode
// ONE leg ONE boundary 368/369 - THE STORM'S OWN DRAIN the crest paid
// whole 110 -> 6; the whole cache's own +120 ONE leg 423/425 - THE
// GAP-CROSSING CLIMB the 14 -> 134, the -114 ONE leg 425/426 - THE
// CREST'S OWN DRAIN the 134 -> 20), the last field word the face
// 389's own window the swing (33 -> 59 (+26) -> 15 (-44)), the
// whole-cache pins (the 3052u over the seventy-five faces, the
// gap-crossing windows the array-position read prices byte-exact, and
// the W447..W450 windows byte-exact incl. the W449 swell 22 -> 30
// (+8) -> 46 (+16) and the W450 swell 30 -> 46 (+16) -> 65 (+19) MY
// WORD'S OWN FIRST LIVE READ), the REUSE LAW battery
// (ledgerRecordBook's own no-path family cell the fold rides - the
// save's own count rides whole, the record side and the walk-intent
// records and the full-chest records and the dead-lid records never
// ride - the lanes never merge), the fence battery (the fold proves
// itself or the word prices nothing - the lawful zero the fence
// keeps, the extra keys never rejected), the byte-pin battery (the
// tail rides byte-exact - the seat the family's own enumeration
// holds)
import assert from 'node:assert'
import { ledgerNoPathSaveTrendConsistent, ledgerNoPathSaveTrendRow } from '../../src/lib/ledgernopathsavetrend.mjs'
import { ledgerRecordBook } from '../../src/lib/ledgerbook.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, this word prices the ledger's no-path save's own mass across the faces - the ledger no-path save seat, co-existence by seat never by duplication)"

const HEAD = 'the ledger no-path save trend (v0.976.214)'
const SWING = HEAD + ": the save's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the save's rise ran two steps deep - "
const SWELL_TAIL = " - the save's own swell " + TAIL
const FADE = HEAD + ": the save's fall ran two steps deep - "
const FADE_TAIL = " - the save's own fade " + TAIL

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
  const a = T[order[i - 2]], b = T[order[i - 1]], c = T[f]
  const d1 = b - a, d2 = c - b
  return `${a} -> ${b} (${d1 >= 0 ? '+' : ''}${d1}) -> ${c} (${d2 >= 0 ? '+' : ''}${d2})`
}
const rowFor = (f, T, order) => {
  const s = tallyWindow(f, T, order)
  const arc = arcOf(f, T, order)
  if (s === 'silence') return null
  if (s === 'swell') return SWELL + arc + SWELL_TAIL
  if (s === 'fade') return FADE + arc + FADE_TAIL
  return SWING + arc + SWING_TAIL
}

// the whole-cache table the cache holds (the span 347..450, the
// absent 390..416 span and the 419 and the 424 the honest gaps the
// cache holds not - the face numbers the runs consumed, the logs the
// cache never received; the windows the array-position read prices)
const T = {}
const ORDER = []
const SERIES = [[347, 29], [348, 25], [349, 14], [350, 37], [351, 33], [352, 13], [353, 33], [354, 106], [355, 54], [356, 32], [357, 12], [358, 10], [359, 10], [360, 36], [361, 9], [362, 42], [363, 66], [364, 33], [365, 29], [366, 12], [367, 14], [368, 110], [369, 6], [370, 35], [371, 58], [372, 41], [373, 96], [374, 37], [375, 52], [376, 4], [377, 42], [378, 38], [379, 55], [380, 17], [381, 49], [382, 52], [383, 76], [384, 39], [385, 108], [386, 37], [387, 33], [388, 59], [389, 15], [417, 26], [418, 62], [420, 14], [421, 32], [422, 69], [423, 14], [425, 134], [426, 20], [427, 108], [428, 22], [429, 19], [430, 62], [431, 7], [432, 48], [433, 71], [434, 88], [435, 36], [436, 25], [437, 14], [438, 62], [439, 25], [440, 20], [441, 11], [442, 23], [443, 45], [444, 9], [445, 36], [446, 79], [447, 22], [448, 30], [449, 46], [450, 65]]
for (const [f, v] of SERIES) { T[f] = v; ORDER.push(f) }
const FIELD = ORDER.slice(0, ORDER.indexOf(389) + 1)

// ===== THE FIELD'S OWN PINS (347..389) =====
{
  const sum = FIELD.reduce((a, f) => a + T[f], 0)
  assert.strictEqual(sum, 1708, 'THE FIELD 1708u the forty-three faces own total')
  assert.strictEqual(FIELD.length, 43, 'the field forty-three faces deep')
  const top = FIELD.filter(f => T[f] === 110)
  assert.deepStrictEqual(top, [368], 'THE FIELD OWN TOP THE COUNT 110 rode ONCE the face 368 own crest - THE STORM the record seat own crest face the field shares')
  const floor = FIELD.filter(f => T[f] === 4)
  assert.deepStrictEqual(floor, [376], 'THE FIELD OWN FLOOR THE COUNT 4 rode ONCE the face 376 own floor')
  assert.strictEqual(FIELD.filter(f => T[f] === 0).length, 0, 'THE ALL-SPEAKING BIRTH - the zero rode NEVER (the drought never rode the priced field)')
  // the field book
  const shapes = {}
  for (let i = 2; i < FIELD.length; i++) {
    const s = tallyWindow(FIELD[i], T, FIELD)
    shapes[s] = (shapes[s] || 0) + 1
  }
  assert.strictEqual(shapes.swing, 25, 'the field book TWENTY-FIVE swings')
  assert.strictEqual(shapes.swell, 6, 'the field book SIX swells')
  assert.strictEqual(shapes.fade, 8, 'the field book EIGHT fades')
  assert.strictEqual(shapes.silence, 2, 'the field book the TWO honest silences')
  const windows = FIELD.length - 2
  assert.strictEqual(shapes.swing + shapes.swell + shapes.fade + shapes.silence, windows, 'the field book FORTY-ONE windows whole')
  assert.strictEqual(shapes.swing + shapes.swell + shapes.fade, 39, 'the field book THIRTY-NINE of FORTY-ONE windows speaking')
  // the honest silences the faces 359/360 hold
  assert.strictEqual(tallyWindow(359, T, FIELD), 'silence', 'the W359 the honest silence')
  assert.strictEqual(tallyWindow(360, T, FIELD), 'silence', 'the W360 the honest silence')
  assert.strictEqual(rowFor(359, T, FIELD), null, 'the W359 row the honest null')
  assert.strictEqual(rowFor(360, T, FIELD), null, 'the W360 row the honest null')
}

// ===== THE FIELD'S OWN SWELLS BYTE-EXACT (the six) =====
{
  assert.strictEqual(tallyWindow(354, T, FIELD), 'swell')
  assert.strictEqual(rowFor(354, T, FIELD), SWELL + arcOf(354, T, FIELD) + SWELL_TAIL, 'the W354 swell row byte-exact')
  assert.strictEqual(arcOf(354, T, FIELD), '13 -> 33 (+20) -> 106 (+73)', 'the W354 swell arc byte-exact')
  assert.strictEqual(arcOf(363, T, FIELD), '9 -> 42 (+33) -> 66 (+24)', 'the W363 swell arc byte-exact')
  assert.strictEqual(tallyWindow(363, T, FIELD), 'swell')
  assert.strictEqual(arcOf(368, T, FIELD), '12 -> 14 (+2) -> 110 (+96)', 'the W368 swell arc byte-exact (the climb inside)')
  assert.strictEqual(tallyWindow(368, T, FIELD), 'swell')
  assert.strictEqual(arcOf(371, T, FIELD), '6 -> 35 (+29) -> 58 (+23)', 'the W371 swell arc byte-exact')
  assert.strictEqual(arcOf(382, T, FIELD), '17 -> 49 (+32) -> 52 (+3)', 'the W382 swell arc byte-exact')
  assert.strictEqual(arcOf(383, T, FIELD), '49 -> 52 (+3) -> 76 (+24)', 'the W383 swell arc byte-exact')
}

// ===== THE FIELD'S OWN FADES BYTE-EXACT (the eight) =====
{
  assert.strictEqual(tallyWindow(349, T, FIELD), 'fade')
  assert.strictEqual(rowFor(349, T, FIELD), FADE + arcOf(349, T, FIELD) + FADE_TAIL, 'the W349 row byte-exact')
  assert.strictEqual(arcOf(349, T, FIELD), '29 -> 25 (-4) -> 14 (-11)', 'the W349 fade arc byte-exact')
  assert.strictEqual(arcOf(352, T, FIELD), '37 -> 33 (-4) -> 13 (-20)', 'the W352 fade arc byte-exact')
  assert.strictEqual(arcOf(356, T, FIELD), '106 -> 54 (-52) -> 32 (-22)', 'the W356 fade arc byte-exact')
  assert.strictEqual(arcOf(357, T, FIELD), '54 -> 32 (-22) -> 12 (-20)', 'the W357 fade arc byte-exact')
  assert.strictEqual(arcOf(358, T, FIELD), '32 -> 12 (-20) -> 10 (-2)', 'the W358 fade arc byte-exact')
  assert.strictEqual(arcOf(365, T, FIELD), '66 -> 33 (-33) -> 29 (-4)', 'the W365 fade arc byte-exact')
  assert.strictEqual(arcOf(366, T, FIELD), '33 -> 29 (-4) -> 12 (-17)', 'the W366 fade arc byte-exact')
  assert.strictEqual(arcOf(387, T, FIELD), '108 -> 37 (-71) -> 33 (-4)', 'the W387 fade arc byte-exact')
}

// ===== THE TEN-SWING RUN 372..381 - THE FIELD'S OWN RECORD =====
{
  const run = [372, 373, 374, 375, 376, 377, 378, 379, 380, 381]
  for (const f of run) assert.strictEqual(tallyWindow(f, T, FIELD), 'swing', `the W${f} the run's own swing`)
  assert.strictEqual(tallyWindow(371, T, FIELD), 'swell', 'the bounds never extend - the swell 371 holds before')
  assert.strictEqual(tallyWindow(382, T, FIELD), 'swell', 'the bounds never extend - the swell 382 holds after')
  // the run's own arcs byte-exact (the floor's own steps ride inside)
  assert.strictEqual(arcOf(376, T, FIELD), '37 -> 52 (+15) -> 4 (-48)', 'the W376 swing arc byte-exact')
  assert.strictEqual(arcOf(377, T, FIELD), '52 -> 4 (-48) -> 42 (+38)', 'the W377 swing arc byte-exact')
  assert.strictEqual(arcOf(381, T, FIELD), '55 -> 17 (-38) -> 49 (+32)', 'the W381 swing arc byte-exact')
  // the second run beside
  for (const f of [384, 385, 386]) assert.strictEqual(tallyWindow(f, T, FIELD), 'swing', 'the three-swing run 384..386 the field holds beside')
}

// ===== THE ROUND TRIPS - the ONE both books price (the W353 the
// weight-33 mirror - the record seat's own field priced the NONE, the
// save's field prices the ONE - the lanes never merge) =====
{
  const rts = []
  for (let i = 2; i < FIELD.length; i++) {
    const b = T[FIELD[i - 2]], c = T[FIELD[i]]
    if (b === c && tallyWindow(FIELD[i], T, FIELD) !== 'silence') rts.push(FIELD[i])
  }
  assert.deepStrictEqual(rts, [353], 'the field round trips the ONE - the W353 the cache prices')
  assert.strictEqual(arcOf(353, T, FIELD), '33 -> 13 (-20) -> 33 (+20)', 'the W353 the weight-33 mirror byte-exact')
  assert.strictEqual(tallyWindow(353, T, FIELD), 'swing')
}

// ===== THE BOUNDS' OWN LEGS (the boundaries the windows' own span
// holds - the +96 the boundary 367/368 rides once the window legs
// price twice: the W368's own second leg and the W369's own first leg
// the same boundary the array carries) =====
{
  let maxRise = -Infinity, maxFall = Infinity, riseLegs = 0, fallLegs = 0
  for (let j = 1; j < FIELD.length; j++) {
    const leg = T[FIELD[j]] - T[FIELD[j - 1]]
    if (leg > maxRise) { maxRise = leg; riseLegs = 1 } else if (leg === maxRise) riseLegs++
    if (leg < maxFall) { maxFall = leg; fallLegs = 1 } else if (leg === maxFall) fallLegs++
  }
  assert.strictEqual(maxRise, 96, 'the +96 the max rise the field prices')
  assert.strictEqual(riseLegs, 1, 'the +96 rode ONE boundary - THE STORM OWN CLIMB the quiet paid whole 14 -> 110')
  assert.strictEqual(maxFall, -104, 'the -104 the max fall the field prices')
  assert.strictEqual(fallLegs, 1, 'the -104 rode ONE boundary - THE STORM OWN DRAIN the crest paid whole 110 -> 6')
  assert.strictEqual(arcOf(368, T, FIELD), '12 -> 14 (+2) -> 110 (+96)', 'the W368 the climb window byte-exact')
  assert.strictEqual(arcOf(369, T, FIELD), '14 -> 110 (+96) -> 6 (-104)', 'the W369 the drain window byte-exact')
}

// ===== the last field word =====
{
  assert.strictEqual(tallyWindow(389, T, FIELD), 'swing', 'the face 389 own window the swing')
  assert.strictEqual(rowFor(389, T, FIELD), SWING + arcOf(389, T, FIELD) + SWING_TAIL, 'the W389 row byte-exact')
  assert.strictEqual(arcOf(389, T, FIELD), '33 -> 59 (+26) -> 15 (-44)', 'the W389 arc byte-exact')
}

// ===== THE WHOLE-CACHE PINS =====
{
  const sum = ORDER.reduce((a, f) => a + T[f], 0)
  assert.strictEqual(sum, 3052, 'THE CELL OWN WEIGHT 3052u the seventy-five faces own total')
  assert.strictEqual(ORDER.length, 75, 'the cache seventy-five faces')
  const top = ORDER.filter(f => T[f] === 134)
  assert.deepStrictEqual(top, [425], 'the whole-cache top THE COUNT 134 rode ONCE the face 425 own crest the cache adds')
  const floor = ORDER.filter(f => T[f] === 4)
  assert.deepStrictEqual(floor, [376], 'the whole-cache floor THE COUNT 4 rode ONCE the same floor')
  assert.strictEqual(ORDER.filter(f => T[f] === 0).length, 0, 'the whole cache all-speaking too (the zero rode NEVER the whole cache holds)')
  const shapes = {}
  for (let i = 2; i < ORDER.length; i++) {
    const s = tallyWindow(ORDER[i], T, ORDER)
    shapes[s] = (shapes[s] || 0) + 1
  }
  assert.strictEqual(shapes.swing, 44, 'the whole-cache book FORTY-FOUR swings')
  assert.strictEqual(shapes.swell, 14, 'the whole-cache book FOURTEEN swells')
  assert.strictEqual(shapes.fade, 13, 'the whole-cache book THIRTEEN fades')
  assert.strictEqual(shapes.silence, 2, 'the whole-cache book the SAME TWO honest silences')
  assert.strictEqual(shapes.swing + shapes.swell + shapes.fade + shapes.silence, 73, 'the whole-cache book SEVENTY-THREE windows whole')
  assert.strictEqual(shapes.swing + shapes.swell + shapes.fade, 71, 'the whole-cache book SEVENTY-ONE of SEVENTY-THREE windows speaking')
  // the honest silences the cache holds: the field's own pair only
  for (const f of [359, 360]) assert.strictEqual(tallyWindow(f, T, ORDER), 'silence', `the W${f} the honest silence the cache holds`)
  // the gap-crossing windows the array-position read prices (the
  // absent 390..416 span the windows cross)
  assert.strictEqual(tallyWindow(417, T, ORDER), 'swing', 'the W417 the gap-crossing swing')
  assert.strictEqual(arcOf(417, T, ORDER), '59 -> 15 (-44) -> 26 (+11)', 'the W417 the gap-crossing swing byte-exact')
  assert.strictEqual(tallyWindow(418, T, ORDER), 'swell', 'the W418 the gap-crossing swell')
  assert.strictEqual(arcOf(418, T, ORDER), '15 -> 26 (+11) -> 62 (+36)', 'the W418 the gap-crossing swell byte-exact')
  assert.strictEqual(tallyWindow(420, T, ORDER), 'swing', 'the W420 the gap-crossing swing')
  assert.strictEqual(arcOf(420, T, ORDER), '26 -> 62 (+36) -> 14 (-48)', 'the W420 the gap-crossing swing byte-exact')
  assert.strictEqual(tallyWindow(421, T, ORDER), 'swing', 'the W421 the gap-crossing swing')
  assert.strictEqual(arcOf(421, T, ORDER), '62 -> 14 (-48) -> 32 (+18)', 'the W421 the gap-crossing swing byte-exact')
  // THE TEN-SWING RUN 372..381 THE RECORD BOTH BOOKS RIDE
  for (const f of [372, 373, 374, 375, 376, 377, 378, 379, 380, 381]) assert.strictEqual(tallyWindow(f, T, ORDER), 'swing', `the W${f} the record run's own swing`)
  assert.strictEqual(tallyWindow(371, T, ORDER), 'swell', 'the bounds never extend - the swell 371 holds before')
  assert.strictEqual(tallyWindow(382, T, ORDER), 'swell', 'the bounds never extend - the swell 382 holds after')
  // THE FIVE-SWING RUN 423..428 the cache holds beside
  for (const f of [423, 425, 426, 427, 428]) assert.strictEqual(tallyWindow(f, T, ORDER), 'swing', `the W${f} the second run's own swing`)
  assert.strictEqual(tallyWindow(422, T, ORDER), 'swell', 'the bounds never extend - the swell 422 holds before')
  assert.strictEqual(tallyWindow(429, T, ORDER), 'fade', 'the bounds never extend - the fade 429 holds after')
  // the gap-crossing three-swing run 388..389..417 the cache rides
  for (const f of [388, 389, 417]) assert.strictEqual(tallyWindow(f, T, ORDER), 'swing', 'the gap-crossing three-swing run the cache rides')
  // the three-swing run 430..432 beside
  for (const f of [430, 431, 432]) assert.strictEqual(tallyWindow(f, T, ORDER), 'swing', 'the three-swing run 430..432 the cache holds beside')
  // the bounds' own legs the whole cache rides (the boundaries the
  // spans hold - the +120 the boundary 423/425, the -114 the boundary
  // 425/426)
  let maxRise = -Infinity, maxFall = Infinity, riseLegs = 0, fallLegs = 0
  for (let j = 1; j < ORDER.length; j++) {
    const leg = T[ORDER[j]] - T[ORDER[j - 1]]
    if (leg > maxRise) { maxRise = leg; riseLegs = 1 } else if (leg === maxRise) riseLegs++
    if (leg < maxFall) { maxFall = leg; fallLegs = 1 } else if (leg === maxFall) fallLegs++
  }
  assert.strictEqual(maxRise, 120, 'the +120 the whole-cache max rise - THE GAP-CROSSING CLIMB')
  assert.strictEqual(riseLegs, 1, 'the +120 rode ONE boundary the cache holds')
  assert.strictEqual(maxFall, -114, 'the -114 the whole-cache max fall - THE CREST OWN DRAIN')
  assert.strictEqual(fallLegs, 1, 'the -114 rode ONE boundary the cache holds')
  assert.strictEqual(arcOf(425, T, ORDER), '69 -> 14 (-55) -> 134 (+120)', 'the W425 the climb window byte-exact')
  assert.strictEqual(arcOf(426, T, ORDER), '14 -> 134 (+120) -> 20 (-114)', 'the W426 the drain window byte-exact')
}

// ===== the newest windows byte-exact (the W447..W449) + the W450
// swell MY WORD'S OWN FIRST LIVE READ =====
{
  assert.strictEqual(arcOf(447, T, ORDER), '36 -> 79 (+43) -> 22 (-57)', 'the W447 swing byte-exact')
  assert.strictEqual(tallyWindow(447, T, ORDER), 'swing')
  assert.strictEqual(tallyWindow(448, T, ORDER), 'swing', 'the W448 the swing')
  assert.strictEqual(arcOf(448, T, ORDER), '79 -> 22 (-57) -> 30 (+8)', 'the W448 swing byte-exact')
  assert.strictEqual(rowFor(449, T, ORDER), SWELL + '22 -> 30 (+8) -> 46 (+16)' + SWELL_TAIL, 'the W449 swell row byte-exact')
  // the W450 swell - MY WORD'S OWN FIRST LIVE READ
  assert.strictEqual(arcOf(450, T, ORDER), '30 -> 46 (+16) -> 65 (+19)', 'the W450 the swell arc byte-exact')
  assert.strictEqual(tallyWindow(450, T, ORDER), 'swell', 'the W450 the swell MY WORD OWN FIRST LIVE READ')
  assert.strictEqual(rowFor(450, T, ORDER), SWELL + '30 -> 46 (+16) -> 65 (+19)' + SWELL_TAIL, 'the W450 swell row byte-exact')
}

// ===== THE REUSE LAW battery - ledgerRecordBook's own no-path family
// cell the fold rides (one-parser law, never a fork) =====
{
  // the save's own count rides whole (the shapes the emitter prints:
  // the fresh skip, the aged skip - the line's own count rides whole
  // whatever the age and the distance hold)
  const lines1 = [
    'F1 [F1] no-path ledger: chest at [-10,64,20] cached for the fleet (3 live, ttl 15s)',
    'F2 [F2] no-path ledger: chest at [-10,64,20] cached for the fleet (1 live, ttl 90s (the repeat\'s own half-life))',
    'F3 [F3] no-path ledger: chest at [12,64,-22] cached for the fleet (2 live, ttl 15s, timeout verdict)',
    'F1 [F1] chest skip (no path cached 30s ago at [-10,64,20])',
    'F2 [F2] chest skip (no path cached 12s ago at [12,64,-22])'
  ]
  const b1 = ledgerRecordBook(lines1)
  assert.ok(b1, 'the book rides the real shapes')
  assert.strictEqual(b1.families['no-path'].saves, 2, 'the save own count rides whole (the record side never rides)')
  assert.strictEqual(b1.families['no-path'].records, 3, 'the record family own cell the census holds - the save seat prices beside never merge')
  // the co-existence by seat: the sibling families the same book holds
  const lines2 = [
    'F1 [F1] no-path ledger: chest at [-10,64,20] cached for the fleet (3 live, ttl 15s)',
    'F4 [F4] walk-intent: chest at [30,64,10] held for the fleet (1 live, ttl 90s)',
    'F5 [F5] full-chest ledger: chest at [40,64,0] cached for the fleet (2 live, ttl 15s)',
    'F6 [F6] dead-lid ledger: chest at [50,64,0] cached for the fleet (1 live, ttl 15s)',
    'F7 [F7] chest skip (no path cached 5s ago at [-10,64,20])',
    'F8 [F8] chest skip (walk in flight by F4 cached 8s ago at [30,64,10])'
  ]
  const b2 = ledgerRecordBook(lines2)
  assert.strictEqual(b2.families['no-path'].saves, 1, 'the no-path save rides whole beside the siblings')
  assert.strictEqual(b2.families['walk-intent'].records, 1, 'the walk-intent record the .211 seat prices beside - co-existence')
  assert.strictEqual(b2.families['walk-intent'].saves, 1, 'the walk-intent save the census holds - MY cell never rides it (the lanes never merge)')
  assert.strictEqual(b2.families['full-chest'].records, 1, 'the full-chest record the sibling beside')
  assert.strictEqual(b2.families['dead-lid'].records, 1, 'the dead-lid record the sibling beside')
  // the junk forms never ride (the census own regex prices the truth -
  // never a second grammar)
  const junk = [
    'F1 [F1] no-path ledger: chest at [10,64] cached for the fleet (3 live, ttl 15s)',
    'no-path ledger: chest at [10,64,20] cached for the fleet (3 live, ttl 15s)',
    'F1 [F1] chest skip (no path cached ago at [10,64,20])',
    'F1 [F1] chest skip (no path cached 30s ago at [10,64])',
    'F1 [F1] chest skip (vertical doom: the yard stands 5 levels up over 3b lateral - the walk ladder cannot climb)',
    'F1 [F1] chest skip (doomed goal cached 30s ago at [10,64,20])',
    ''
  ]
  assert.strictEqual(ledgerRecordBook(junk), null, 'the all-junk book the fold refuses - the census own fence prices nothing')
  const b3 = ledgerRecordBook(junk.concat(['F2 [F2] chest skip (no path cached 9s ago at [11,64,21])']))
  assert.ok(b3, 'the book rides the truth beside the junk')
  assert.strictEqual(b3.families['no-path'].saves, 1, 'the junk forms never ride - the grammar strict (the one true save alone)')
  assert.strictEqual(b3.families['no-path'].records, 0, 'the record cell the junk book holds zero - the save seat prices beside never merge')
  // the fold rides the census own cell (the wire's own read)
  const npsOf = (ls) => {
    const b = ledgerRecordBook(ls)
    return { saves: b ? b.families['no-path'].saves : 0 }
  }
  const fold = { back: npsOf(lines1), prev: npsOf(lines2), cur: npsOf(junk) }
  assert.strictEqual(fold.back.saves, 2, 'the fold back the census own cell')
  assert.strictEqual(fold.prev.saves, 1, 'the fold prev the census own cell')
  assert.strictEqual(fold.cur.saves, 0, 'the fold cur the census own cell - the zero lawful')
  const row = ledgerNoPathSaveTrendRow(fold)
  assert.ok(row && row.startsWith(HEAD + ": the save's fall ran two steps deep - 2 -> 1 (-1) -> 0 (-1)"), 'the fold row the census own read rides (the fade the drain prices)')
}

// ===== THE FENCE battery - the fold proves itself or the word prices
// nothing (the lawful zero the fence keeps, the extra keys never
// rejected) =====
{
  for (const bad of [null, undefined, 42, 'x', [], {}, { back: {}, prev: { saves: 1 }, cur: { saves: 1 } }, { back: { saves: 1 }, prev: {}, cur: { saves: 1 } }, { back: { saves: 1 }, prev: { saves: 1 } }, { back: { saves: -1 }, prev: { saves: 1 }, cur: { saves: 1 } }, { back: { saves: 1.5 }, prev: { saves: 1 }, cur: { saves: 1 } }, { back: { saves: NaN }, prev: { saves: 1 }, cur: { saves: 1 } }, { back: { saves: '2' }, prev: { saves: 1 }, cur: { saves: 1 } }, { back: { saves: 1 }, prev: { saves: null }, cur: { saves: 1 } }]) {
    assert.strictEqual(ledgerNoPathSaveTrendConsistent(bad), false, `the fence rejects ${JSON.stringify(bad)}`)
    assert.strictEqual(ledgerNoPathSaveTrendRow(bad), null, `the fence prices nothing for ${JSON.stringify(bad)}`)
  }
  assert.strictEqual(ledgerNoPathSaveTrendConsistent({ back: { saves: 0 }, prev: { saves: 0 }, cur: { saves: 0 } }), true, 'the lawful zero the fence keeps (the drought own zero)')
  assert.strictEqual(ledgerNoPathSaveTrendRow({ back: { saves: 0 }, prev: { saves: 0 }, cur: { saves: 0 } }), null, 'the held zero the honest silence')
  assert.strictEqual(ledgerNoPathSaveTrendConsistent({ back: { saves: 3, extra: 'x' }, prev: { saves: 1 }, cur: { saves: 2, extra: 'y' } }), true, 'the extra keys never rejected')
  // a zero face rides a lawful count (the save own zero is no fence)
  const zrow = ledgerNoPathSaveTrendRow({ back: { saves: 5 }, prev: { saves: 0 }, cur: { saves: 3 } })
  assert.ok(zrow && zrow.startsWith(HEAD + ": the save's own swing - 5 -> 0 (-5) -> 3 (+3)"), 'the zero face rides a lawful count')
  // the held steps the honest silence (any count-to-count zero)
  for (const f of [{ back: { saves: 3 }, prev: { saves: 3 }, cur: { saves: 5 } }, { back: { saves: 3 }, prev: { saves: 5 }, cur: { saves: 5 } }]) {
    assert.strictEqual(ledgerNoPathSaveTrendRow(f), null, 'the held step the honest silence')
  }
}

// ===== THE BYTE-PIN battery - the tail rides byte-exact, the verdict
// words never speak =====
{
  const row = rowFor(450, T, ORDER)
  assert.ok(row.endsWith(' - the ledger no-path save seat, co-existence by seat never by duplication)'), 'the tail rides byte-exact to the seat')
  assert.strictEqual(row, SWELL + '30 -> 46 (+16) -> 65 (+19)' + SWELL_TAIL, 'the swell row the family own enumeration holds')
  for (const w of ['return', 'repeat', 'stay', 'owns', 'dynasty', 'turn']) {
    assert.ok(!row.includes(w), `the row never speaks the verdict word '${w}'`)
  }
  assert.ok(!/\brun\b/.test(row), 'the row never speaks the run word (the rung word the tail holds is no run - the word-boundary the claim prices)')
  const swingRow = rowFor(448, T, ORDER)
  assert.ok(swingRow.startsWith(HEAD + ": the save's own swing - "), 'the swing head byte-exact')
  const fadeRow = rowFor(356, T, ORDER)
  assert.ok(fadeRow.startsWith(HEAD + ": the save's fall ran two steps deep - "), 'the fade head byte-exact')
  assert.ok(fadeRow.endsWith(SWELL_TAIL.slice(SWELL_TAIL.indexOf('(the sweep'))), 'the tail the same bytes every shape rides')
}

// ===== the lanes-never-merge claims =====
{
  const row = rowFor(450, T, ORDER)
  assert.strictEqual(row.split('this word prices the ledger\'s no-path save\'s own mass across the faces').length - 1, 1, 'my seat named once')
  assert.ok(row.includes('the ledger no-path record\'s own trend prices the ledger\'s no-path record\'s own mass across the faces'), 'the record seat the .213 sibling named beside')
  assert.ok(row.includes('the walk-intent record\'s own trend prices the walk-intent record\'s own mass across the faces'), 'the walk-intent record seat the .211 sibling named beside')
  assert.ok(row.includes('the no-path\'s own trend prices the machine-unreachable no-path skin\'s own mass across the walks'), 'the machine-unreachable no-path skin named - a different lane never merges')
  assert.ok(row.includes('the walk no-path\'s own trend prices the walk-lane\'s own no-path mass across the walks'), 'the walk-lane no-path named - a different lane never merges')
  assert.ok(row.includes('the hazard memorize\'s own trend prices the hazard board\'s own write mass across the faces'), 'the .212 seat named beside')
  assert.ok(!row.includes('chest skip ('), 'the row never speaks the raw grammar (the census owns the read)')
}
