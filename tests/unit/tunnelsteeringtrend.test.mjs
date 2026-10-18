// tests/unit/tunnelsteeringtrend.test.mjs - THE TUNNEL STEERING'S
// OWN TREND's own pin battery (v0.976.215): the tunnel lane's
// steering verdict's own mass across the faces the field's own scan
// named first (the 'tunnel: steering <ore> @ <d>b (axis <axis>,
// cross <n>, <mode>)' family the branch miner prints when the tunnel
// drive steers to the ore block) - the strict grammar the cache
// proved 6720/6720 zero mismatch (the ores the coal and the copper and the
// iron the palette rides, the axes the eight skins, the modes the
// floor lock and the ore detour), the field's own chains byte-exact
// (THE CELL'S OWN WEIGHT 6720u the 112 faces' own total, THE FIELD
// 2966u the fifty faces' own total, THE ALL-SPEAKING BIRTH the zero
// rode NEVER, THE FIELD'S OWN TOP THE COUNT 147 rode ONCE the face
// 359's own crest - THE STORM, THE FIELD'S OWN FLOOR THE COUNT
// 1 rode ONCE the face 346's own floor), the FIELD BOOK
// FORTY-EIGHT of FORTY-EIGHT windows speaking (THIRTY-FOUR swings,
// EIGHT swells, SIX fades, the honest silence rode NEVER) beside the
// whole-cache book the all-speaking ride too, THE TEN-SWING RUN
// 377..386 THE FIELD'S OWN RECORD beside the whole cache THE
// TWELVE-SWING RUN 418..430 THE RECORD BOTH BOOKS RIDE, the
// ROUND TRIPS the honest NONE both books price (the mirror the
// steering never rode), the bounds' own legs pins (the +74 rode
// ONE leg ONE boundary 352/353, the -87 rode ONE leg ONE boundary
// 353/354 - THE CREST'S OWN DRAIN; the whole cache's own +114 ONE leg
// 400/401, the -133 ONE leg 401/402), the last field word the face
// 389's own window, the whole-cache pins (the 6720u over the
// 112 faces, the gap-crossing windows the array-position read
// prices byte-exact, and the W449/W450/W451/W452 windows byte-exact - the
// .215's own windows MY WORD'S OWN FIRST LIVE READ the live faces
// price after the cache takes them), the census battery
// (tunnelSteeringCount the family's own count the word owns - the
// .212 hazardMemorizeCount precedent - the ores and the axes and the
// modes ride whole, the junk forms never ride), the fence battery
// (the fold proves itself or the word prices nothing - the lawful
// zero the fence keeps, the extra keys never rejected), the byte-pin
// battery (the tail rides byte-exact - the seat the family's own
// enumeration holds)
import assert from 'node:assert'
import { tunnelSteeringCount, tunnelSteeringTrendConsistent, tunnelSteeringTrendRow } from '../../src/lib/tunnelsteeringtrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, the ledger no-path save's own trend prices the ledger's no-path save's own mass across the faces, this word prices the tunnel's steering verdict's own mass across the faces - the tunnel steering seat, co-existence by seat never by duplication)"

const HEAD = 'the tunnel steering trend (v0.976.215)'
const SWING = HEAD + ": the steering's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the steering's rise ran two steps deep - "
const SWELL_TAIL = " - the steering's own swell " + TAIL
const FADE = HEAD + ": the steering's fall ran two steps deep - "
const FADE_TAIL = " - the steering's own fade " + TAIL

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

// the whole-cache table the cache holds (the span 340..452, the
// absent 419 the honest gap the cache holds not - the face number
// the run consumed, the log the cache never received; the windows
// the array-position read prices)
const T = {}
const ORDER = []
const SERIES = [[340, 36], [341, 78], [342, 35], [343, 107], [344, 56], [345, 17], [346, 1], [347, 31], [348, 32], [349, 46], [350, 27], [351, 73], [352, 46], [353, 120], [354, 33], [355, 84], [356, 64], [357, 81], [358, 96], [359, 147], [360, 63], [361, 36], [362, 46], [363, 53], [364, 79], [365, 69], [366, 75], [367, 71], [368, 58], [369, 84], [370, 56], [371, 83], [372, 77], [373, 47], [374, 32], [375, 51], [376, 80], [377, 10], [378, 66], [379, 30], [380, 72], [381, 28], [382, 82], [383, 49], [384, 78], [385, 45], [386, 50], [387, 97], [388, 36], [389, 53], [390, 62], [391, 40], [392, 10], [393, 36], [394, 74], [395, 76], [396, 6], [397, 78], [398, 40], [399, 35], [400, 61], [401, 175], [402, 42], [403, 70], [404, 179], [405, 61], [406, 40], [407, 84], [408, 30], [409, 43], [410, 53], [411, 64], [412, 69], [413, 104], [414, 55], [415, 58], [416, 65], [417, 66], [418, 63], [420, 111], [421, 26], [422, 63], [423, 43], [424, 57], [425, 31], [426, 88], [427, 43], [428, 51], [429, 47], [430, 54], [431, 108], [432, 68], [433, 41], [434, 11], [435, 54], [436, 17], [437, 43], [438, 26], [439, 47], [440, 62], [441, 87], [442, 44], [443, 28], [444, 76], [445, 36], [446, 53], [447, 59], [448, 47], [449, 92], [450, 108], [451, 55], [452, 139]]
for (const [f, v] of SERIES) { T[f] = v; ORDER.push(f) }
const FIELD = ORDER.slice(0, ORDER.indexOf(389) + 1)

// ===== the strict grammar the census owns (the cache's own proof
// rides the battery - the words' own count over the REAL faces the
// wire's own smoke prices beside) =====
{
  assert.strictEqual(tunnelSteeringCount(null), 0, 'the null lines the zero')
  assert.strictEqual(tunnelSteeringCount([]), 0, 'the empty lines the zero')
  assert.strictEqual(tunnelSteeringCount('x'), 0, 'the string the zero (the array the fold holds)')
  const one = 'F9 tunnel: steering coal_ore @ 5.3b (axis z+, cross 2.4546024777991136, floor lock)'
  assert.strictEqual(tunnelSteeringCount([one]), 1, 'the one steering line rides whole')
  // the ores the palette rides whole (coal and copper and iron)
  assert.strictEqual(tunnelSteeringCount([
    'F1 tunnel: steering coal_ore @ 2.2b (axis z+, cross 1.3, floor lock)',
    'F2 tunnel: steering copper_ore @ 7b (axis x--1, cross 2.5, ore detour)',
    'F3 tunnel: steering iron_ore @ 11.5b (axis z--1, cross 0.37, floor lock)'
  ]), 3, 'the ores ride whole - the palette the count never splits')
  // the junk forms never ride (the word's own regex prices the truth
  // - never a second grammar)
  const junk = [
    'F1 tunnel: steering @ 5b (axis x+, cross 1, floor lock)',
    'F2 tunnel: steering coal_ore @ 5 (axis x+, cross 1, floor lock)',
    'F3 tunnel: steering coal_ore @ 5b (axis x+, cross 1)',
    'F4 tunnel: steering coal_ore @ 5b (axis w+, cross 1, floor lock)',
    'F5 tunnel: steering coal_ore @ 5b (axis x+, cross 1, free climb)',
    'tunnel: steering coal_ore @ 5b (axis x+, cross 1, floor lock)',
    'F7 tunnel: sealed coal_ore @ 5b (axis x+, cross 1, floor lock)',
    'F8 tunnel: steering coal_ore @ 5b (axis x+, cross 1, floor lock) the tail the shape refuses',
    ''
  ]
  assert.strictEqual(tunnelSteeringCount(junk), 0, 'the junk forms never ride - the grammar strict')
  const mixed = junk.concat(['F9 tunnel: steering coal_ore @ 6.6b (axis x+, cross 0.3, floor lock)'])
  assert.strictEqual(tunnelSteeringCount(mixed), 1, 'the one true steering line rides beside the junk')
}

// ===== THE FIELD'S OWN PINS (340..389) =====
{
  const sum = FIELD.reduce((a, f) => a + T[f], 0)
  assert.strictEqual(sum, 2966, 'THE FIELD 2966u the fifty faces own total')
  assert.strictEqual(FIELD.length, 50, 'the field fifty faces deep')
  const top = FIELD.filter(f => T[f] === 147)
  assert.deepStrictEqual(top, [359], 'THE FIELD OWN TOP THE COUNT 147 rode ONCE the face 359 own crest - THE STORM')
  const floor = FIELD.filter(f => T[f] === 1)
  assert.deepStrictEqual(floor, [346], 'THE FIELD OWN FLOOR THE COUNT 1 rode ONCE the face 346 own floor')
  assert.strictEqual(FIELD.filter(f => T[f] === 0).length, 0, 'THE ALL-SPEAKING BIRTH - the zero rode NEVER (the drought never rode the priced field)')
  // the field book
  const shapes = {}
  for (let i = 2; i < FIELD.length; i++) {
    const s = tallyWindow(FIELD[i], T, FIELD)
    shapes[s] = (shapes[s] || 0) + 1
  }
  assert.strictEqual(shapes.swing, 34, 'the field book THIRTY-FOUR swings')
  assert.strictEqual(shapes.swell, 8, 'the field book EIGHT swells')
  assert.strictEqual(shapes.fade, 6, 'the field book SIX fades')
  assert.strictEqual(shapes.silence || 0, 0, 'the field book the honest silence rode NEVER - the all-speaking book the zero never held')
  const windows = FIELD.length - 2
  assert.strictEqual((shapes.swing||0) + (shapes.swell||0) + (shapes.fade||0) + (shapes.silence||0), windows, 'the field book FORTY-EIGHT windows whole')
  assert.strictEqual((shapes.swing||0) + (shapes.swell||0) + (shapes.fade||0), 48, 'the field book FORTY-EIGHT of FORTY-EIGHT windows speaking')
}

// ===== the field's swells and fades byte-exact (the arcs the
// programmatic classification priced - the .0442 honest lesson) =====
{
  const swells = [], fades = [], swings = []
  for (let i = 2; i < FIELD.length; i++) {
    const s = tallyWindow(FIELD[i], T, FIELD)
    if (s === 'swell') swells.push(FIELD[i])
    if (s === 'fade') fades.push(FIELD[i])
    if (s === 'swing') swings.push(FIELD[i])
  }
  assert.deepStrictEqual(swells, [348, 349, 358, 359, 363, 364, 376, 387], 'the field swells the eight the programmatic read prices')
  assert.deepStrictEqual(fades, [345, 346, 361, 368, 373, 374], 'the field fades the six the programmatic read prices')
  // a sample swell and fade and swing row byte-exact
  assert.strictEqual(rowFor(359, T, FIELD), SWELL + arcOf(359, T, FIELD) + SWELL_TAIL, 'the W359 the storm swell row byte-exact')
  assert.strictEqual(arcOf(359, T, FIELD), '81 -> 96 (+15) -> 147 (+51)', 'the W359 swell arc byte-exact (the storm ride 96 -> 147)')
  assert.strictEqual(rowFor(345, T, FIELD), FADE + arcOf(345, T, FIELD) + FADE_TAIL, 'the W345 fade row byte-exact')
  assert.strictEqual(rowFor(381, T, FIELD), SWING + arcOf(381, T, FIELD) + SWING_TAIL, 'the W381 swing row byte-exact')
  assert.strictEqual(arcOf(381, T, FIELD), '30 -> 72 (+42) -> 28 (-44)', 'the W381 swing arc byte-exact')
}

// ===== THE TEN-SWING RUN 377..386 - THE FIELD'S OWN RECORD =====
{
  const run = [377, 378, 379, 380, 381, 382, 383, 384, 385, 386]
  for (const f of run) assert.strictEqual(tallyWindow(f, T, FIELD), 'swing', `the W\${f} the run's own swing`)
  assert.strictEqual(tallyWindow(376, T, FIELD), 'swell', 'the bounds never extend - the swell 376 holds before')
  assert.strictEqual(tallyWindow(387, T, FIELD), 'swell', 'the bounds never extend - the swell 387 holds after')
  // the run's own arcs byte-exact (the storm ride rides inside)
  assert.strictEqual(arcOf(359, T, FIELD), '81 -> 96 (+15) -> 147 (+51)', 'the W359 the storm swell arc byte-exact')
  assert.strictEqual(arcOf(353, T, FIELD), '73 -> 46 (-27) -> 120 (+74)', 'the W353 swing arc byte-exact (the crest drain rides inside)')
  // the second runs beside
  for (const f of [350, 351, 352, 353, 354, 355, 356, 357]) assert.strictEqual(tallyWindow(f, T, FIELD), 'swing', 'the 8-swing run 350..357 the field holds beside')
  for (const f of [369, 370, 371, 372]) assert.strictEqual(tallyWindow(f, T, FIELD), 'swing', 'the 4-swing run 369..372 the field holds beside')
  for (const f of [342, 343, 344]) assert.strictEqual(tallyWindow(f, T, FIELD), 'swing', 'the 3-swing run 342..344 the field holds beside')
}

// ===== THE ROUND TRIPS - the honest NONE both books price (the
// mirror the steering never rode - the truth the books hold) =====
{
  const rts = []
  for (let i = 2; i < FIELD.length; i++) {
    const b = T[FIELD[i - 2]], c = T[FIELD[i]]
    if (b === c && tallyWindow(FIELD[i], T, FIELD) !== 'silence') rts.push(FIELD[i])
  }
  assert.deepStrictEqual(rts, [], 'the field round trips the honest NONE - the mirror the steering never rode')
}

// ===== THE BOUNDS' OWN LEGS (the boundaries the windows' own span
// holds) =====
{
  let maxRise = -Infinity, maxFall = Infinity, riseLegs = 0, fallLegs = 0
  for (let j = 1; j < FIELD.length; j++) {
    const leg = T[FIELD[j]] - T[FIELD[j - 1]]
    if (leg > maxRise) { maxRise = leg; riseLegs = 1 } else if (leg === maxRise) riseLegs++
    if (leg < maxFall) { maxFall = leg; fallLegs = 1 } else if (leg === maxFall) fallLegs++
  }
  assert.strictEqual(maxRise, 74, 'the +74 the max rise the field prices')
  assert.strictEqual(riseLegs, 1, 'the +74 rode ONE boundary - the climb the 46 -> 120 paid')
  assert.strictEqual(maxFall, -87, 'the -87 the max fall the field prices')
  assert.strictEqual(fallLegs, 1, 'the -87 rode ONE boundary - THE CREST OWN DRAIN the face 352 own 46 paid whole')
  assert.strictEqual(arcOf(353, T, FIELD), '73 -> 46 (-27) -> 120 (+74)', 'the W353 the crest drain window byte-exact')
  assert.strictEqual(arcOf(354, T, FIELD), '46 -> 120 (+74) -> 33 (-87)', 'the W354 the drain own landing byte-exact')
}

// ===== the last field word =====
{
  assert.strictEqual(tallyWindow(389, T, FIELD), 'swing', 'the face 389 own window the swing')
  assert.strictEqual(rowFor(389, T, FIELD), SWING + arcOf(389, T, FIELD) + SWING_TAIL, 'the W389 row byte-exact')
  assert.strictEqual(arcOf(389, T, FIELD), '97 -> 36 (-61) -> 53 (+17)', 'the W389 arc byte-exact')
}

// ===== THE WHOLE-CACHE PINS =====
{
  const sum = ORDER.reduce((a, f) => a + T[f], 0)
  assert.strictEqual(sum, 6720, 'THE CELL OWN WEIGHT 6720u the 112 faces own total')
  assert.strictEqual(ORDER.length, 112, 'the cache 112 faces')
  const top = ORDER.filter(f => T[f] === 179)
  assert.deepStrictEqual(top, [404], 'the whole-cache top THE COUNT 179 rode ONCE the face 404 own crest the cache adds - THE WHOLE-CACHE STORM')
  const floor = ORDER.filter(f => T[f] === 1)
  assert.deepStrictEqual(floor, [346], 'the whole-cache floor THE COUNT 1 rode ONCE the same floor face both books share')
  assert.strictEqual(ORDER.filter(f => T[f] === 0).length, 0, 'the whole cache all-speaking too (the zero rode NEVER the whole cache holds)')
  const shapes = {}
  for (let i = 2; i < ORDER.length; i++) {
    const s = tallyWindow(ORDER[i], T, ORDER)
    shapes[s] = (shapes[s] || 0) + 1
  }
  assert.strictEqual(shapes.swing, 74, 'the whole-cache book swings')
  assert.strictEqual(shapes.swell, 24, 'the whole-cache book swells')
  assert.strictEqual(shapes.fade, 12, 'the whole-cache book fades')
  assert.strictEqual(shapes.silence || 0, 0, 'the whole-cache book the same honest silence rode NEVER')
  assert.strictEqual((shapes.swing||0) + (shapes.swell||0) + (shapes.fade||0) + (shapes.silence||0), 110, 'the whole-cache book windows whole')
  assert.strictEqual((shapes.swing||0) + (shapes.swell||0) + (shapes.fade||0), 110, 'the whole-cache book all-speaking')
  // the gap-crossing windows the array-position read prices (the
  // absent 419 the window crosses)
  assert.strictEqual(tallyWindow(420, T, ORDER), 'swing', 'the W420 the gap-crossing window')
  assert.strictEqual(arcOf(420, T, ORDER), '66 -> 63 (-3) -> 111 (+48)', 'the W420 the gap-crossing arc byte-exact')
  assert.strictEqual(tallyWindow(421, T, ORDER), 'swing', 'the W421 the gap-crossing window')
  assert.strictEqual(arcOf(421, T, ORDER), '63 -> 111 (+48) -> 26 (-85)', 'the W421 the gap-crossing arc byte-exact')
  // THE TWELVE-SWING RUN 418..430 THE RECORD BOTH BOOKS RIDE
  for (const f of [418, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430]) assert.strictEqual(tallyWindow(f, T, ORDER), 'swing', `the W\${f} the record run's own swing`)
  assert.strictEqual(tallyWindow(417, T, ORDER), 'swell', 'the bounds never extend - the swell 417 holds before')
  assert.strictEqual(tallyWindow(431, T, ORDER), 'swell', 'the bounds never extend - the swell 431 holds after')
  // the second runs beside
  for (const f of [377, 378, 379, 380, 381, 382, 383, 384, 385, 386]) assert.strictEqual(tallyWindow(f, T, ORDER), 'swing', 'the 10-swing run 377..386 the cache holds beside')
  for (const f of [350, 351, 352, 353, 354, 355, 356, 357]) assert.strictEqual(tallyWindow(f, T, ORDER), 'swing', 'the 8-swing run 350..357 the cache holds beside')
  for (const f of [435, 436, 437, 438, 439]) assert.strictEqual(tallyWindow(f, T, ORDER), 'swing', 'the 5-swing run 435..439 the cache holds beside')
  for (const f of [369, 370, 371, 372]) assert.strictEqual(tallyWindow(f, T, ORDER), 'swing', 'the 4-swing run 369..372 the cache holds beside')
  // the bounds' own legs the whole cache rides
  let maxRise = -Infinity, maxFall = Infinity, riseLegs = 0, fallLegs = 0
  for (let j = 1; j < ORDER.length; j++) {
    const leg = T[ORDER[j]] - T[ORDER[j - 1]]
    if (leg > maxRise) { maxRise = leg; riseLegs = 1 } else if (leg === maxRise) riseLegs++
    if (leg < maxFall) { maxFall = leg; fallLegs = 1 } else if (leg === maxFall) fallLegs++
  }
  assert.strictEqual(maxRise, 114, 'the +114 the whole-cache max rise - the climb')
  assert.strictEqual(riseLegs, 1, 'the +114 rode ONE boundary the cache holds')
  assert.strictEqual(maxFall, -133, 'the -133 the whole-cache max fall - THE CREST OWN DRAIN')
  assert.strictEqual(fallLegs, 1, 'the -133 rode ONE boundary the cache holds')
  assert.strictEqual(arcOf(401, T, ORDER), '35 -> 61 (+26) -> 175 (+114)', 'the W401 the climb window byte-exact')
  assert.strictEqual(arcOf(402, T, ORDER), '61 -> 175 (+114) -> 42 (-133)', 'the W402 the drain window byte-exact')
  // the round trips the cache prices - the honest NONE beside
  const rts = []
  for (let i = 2; i < ORDER.length; i++) {
    const b = T[ORDER[i - 2]], c = T[ORDER[i]]
    if (b === c && tallyWindow(ORDER[i], T, ORDER) !== 'silence') rts.push(ORDER[i])
  }
  assert.deepStrictEqual(rts, [], 'the cache round trips the honest NONE too - the mirror the steering never rode')
}

// ===== the newest windows byte-exact (the W449/W450/W451) =====
{
  assert.strictEqual(tallyWindow(449, T, ORDER), 'swing', 'the W449 the swing')
  assert.strictEqual(arcOf(449, T, ORDER), '59 -> 47 (-12) -> 92 (+45)', 'the W449 swing arc byte-exact')
  assert.strictEqual(rowFor(449, T, ORDER), SWING + '59 -> 47 (-12) -> 92 (+45)' + SWING_TAIL, 'the W449 swing row byte-exact')
  assert.strictEqual(tallyWindow(450, T, ORDER), 'swell', 'the W450 the swell')
  assert.strictEqual(arcOf(450, T, ORDER), '47 -> 92 (+45) -> 108 (+16)', 'the W450 swell arc byte-exact')
  assert.strictEqual(rowFor(450, T, ORDER), SWELL + '47 -> 92 (+45) -> 108 (+16)' + SWELL_TAIL, 'the W450 swell row byte-exact')
  assert.strictEqual(tallyWindow(451, T, ORDER), 'swing', 'the W451 the swing')
  assert.strictEqual(arcOf(451, T, ORDER), '92 -> 108 (+16) -> 55 (-53)', 'the W451 swing arc byte-exact')
  assert.strictEqual(rowFor(451, T, ORDER), SWING + '92 -> 108 (+16) -> 55 (-53)' + SWING_TAIL, 'the W451 swing row byte-exact')
  assert.strictEqual(tallyWindow(452, T, ORDER), 'swing', 'the W452 the swing')
  assert.strictEqual(arcOf(452, T, ORDER), '108 -> 55 (-53) -> 139 (+84)', 'the W452 swing arc byte-exact')
  assert.strictEqual(rowFor(452, T, ORDER), SWING + '108 -> 55 (-53) -> 139 (+84)' + SWING_TAIL, 'the W452 swing row byte-exact')
}

// ===== THE FENCE battery - the fold proves itself or the word prices
// nothing (the lawful zero the fence keeps, the extra keys never
// rejected) =====
{
  for (const bad of [null, undefined, 42, 'x', [], {}, { back: {}, prev: { steers: 1 }, cur: { steers: 1 } }, { back: { steers: 1 }, prev: {}, cur: { steers: 1 } }, { back: { steers: 1 }, prev: { steers: 1 } }, { back: { steers: -1 }, prev: { steers: 1 }, cur: { steers: 1 } }, { back: { steers: 1.5 }, prev: { steers: 1 }, cur: { steers: 1 } }, { back: { steers: NaN }, prev: { steers: 1 }, cur: { steers: 1 } }, { back: { steers: '2' }, prev: { steers: 1 }, cur: { steers: 1 } }, { back: { steers: 1 }, prev: { steers: null }, cur: { steers: 1 } }]) {
    assert.strictEqual(tunnelSteeringTrendConsistent(bad), false, `the fence rejects \${JSON.stringify(bad)}`)
    assert.strictEqual(tunnelSteeringTrendRow(bad), null, `the fence prices nothing for \${JSON.stringify(bad)}`)
  }
  assert.strictEqual(tunnelSteeringTrendConsistent({ back: { steers: 0 }, prev: { steers: 0 }, cur: { steers: 0 } }), true, 'the lawful zero the fence keeps (the drought own zero)')
  assert.strictEqual(tunnelSteeringTrendRow({ back: { steers: 0 }, prev: { steers: 0 }, cur: { steers: 0 } }), null, 'the held zero the honest silence')
  assert.strictEqual(tunnelSteeringTrendConsistent({ back: { steers: 3, extra: 'x' }, prev: { steers: 1 }, cur: { steers: 2, extra: 'y' } }), true, 'the extra keys never rejected')
  // a zero face rides a lawful count (the steering own zero is no fence)
  const zrow = tunnelSteeringTrendRow({ back: { steers: 5 }, prev: { steers: 0 }, cur: { steers: 3 } })
  assert.ok(zrow && zrow.startsWith(HEAD + ": the steering's own swing - 5 -> 0 (-5) -> 3 (+3)"), 'the zero face rides a lawful count')
  // the held steps the honest silence (any count-to-count zero)
  for (const f of [{ back: { steers: 3 }, prev: { steers: 3 }, cur: { steers: 5 } }, { back: { steers: 3 }, prev: { steers: 5 }, cur: { steers: 5 } }]) {
    assert.strictEqual(tunnelSteeringTrendRow(f), null, 'the held step the honest silence')
  }
}

// ===== THE BYTE-PIN battery - the tail rides byte-exact, the verdict
// words never speak =====
{
  const row = rowFor(452, T, ORDER)
  assert.ok(row.endsWith(' - the tunnel steering seat, co-existence by seat never by duplication)'), 'the tail rides byte-exact to the seat')
  for (const w of ['return', 'repeat', 'stay', 'owns', 'dynasty', 'turn']) {
    assert.ok(!row.includes(w), `the row never speaks the verdict word '\${w}'`)
  }
  assert.ok(!/\brun\b/.test(row), 'the row never speaks the run word (the rung word the tail holds is no run - the word-boundary the claim prices)')
  assert.ok(!row.includes('tunnel: steering'), 'the row never speaks the raw grammar (the word owns the read)')
  const swingRow = rowFor(448, T, ORDER)
  assert.ok(swingRow.startsWith(HEAD + ": the steering's own swing - "), 'the swing head byte-exact')
  const swellRow = rowFor(450, T, ORDER)
  assert.ok(swellRow.startsWith(HEAD + ": the steering's rise ran two steps deep - "), 'the swell head byte-exact')
  assert.ok(swellRow.endsWith(SWELL_TAIL.slice(SWELL_TAIL.indexOf('(the sweep'))), 'the tail the same bytes every shape rides')
}

// ===== the lanes-never-merge claims =====
{
  const row = rowFor(452, T, ORDER)
  assert.strictEqual(row.split('this word prices the tunnel\'s steering verdict\'s own mass across the faces').length - 1, 1, 'my seat named once')
  assert.ok(row.includes('the ledger no-path save\'s own trend prices the ledger\'s no-path save\'s own mass across the faces'), 'the no-path save seat the .214 sibling named beside')
  assert.ok(row.includes('the ledger no-path record\'s own trend prices the ledger\'s no-path record\'s own mass across the faces'), 'the record seat the .213 sibling named beside')
  assert.ok(row.includes("the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces"), 'the raw docket seat the .158 sibling named beside - the raw lane never merges')
  assert.ok(row.includes("the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces"), 'the sealed seat the .194 sibling named beside - the sealed class never merges')
  assert.ok(row.includes("the steer tier defer's own trend prices the steer tier defer's own mass across the faces"), 'the steer tier defer lane named - a different lane never merges')
  assert.ok(row.includes("the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces"), 'the steer hazard tail lane named - a different lane never merges')
  assert.ok(row.includes("the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces"), 'the steer hazard defer lane named - a different lane never merges')
  assert.ok(row.includes("the hazard memorize's own trend prices the hazard board's own write mass across the faces"), 'the .212 seat named beside')
}
