// tests/unit/airbarglitchtrend.test.mjs - THE AIR-BAR GLITCH'S OWN
// TREND's own pin battery (v0.976.222): the oxygen bar's own
// ignored-glitch read mass across the faces the field's own scan named
// first (the 'F<n> [F<n>] water: air-bar glitch ignored (oxygen 0 on
// dry land at [x,y,z], N total)' family the water guard prints when
// the oxygen bar reads critical while the bot stands on dry land) -
// the strict grammar the field proved 20/20 zero mismatch (the
// bracket voice the family prints only, the bare form never rode the
// window - zero untagged lines the field holds, the survey's own
// zero-variant proof rides), the field's own chains byte-exact (THE
// CELL'S OWN WEIGHT 20u the eleven faces' own total - the faces
// 446..456 the artifact fetches re-spoke, the field proof 11/11
// census==raw zero mismatches - scripts/fieldread-airbarglitch-1230.mjs),
// THE TOP the count 14 rode ONCE (the F456's own crest - MY WORD'S
// OWN FIRST LIVE READ), THE FLOOR the count 0 rode EIGHT times (the
// faces 448..455's own droughts - THE QUIET SKIN THE BOOK HOLDS), THE
// BOOK ONE of NINE windows speaking (ONE fade, the ZERO swells, the
// ZERO swings, the EIGHT honest silences - the family's own quiet
// skin), the window pins (the W448 fade 4 -> 2 (-2) -> 0 (-2) the
// storm's own drain, the W456 the held first step the honest silence
// prices - THE CREST'S OWN SILENCE the 14 the held law keeps quiet),
// the bounds' own legs pins (+14 rode ONE leg ONE boundary 455/456 -
// THE CREST'S OWN CLIMB, -2 rode TWICE two boundaries 446/447 and
// 447/448 - THE STORM'S OWN WAKE the twin drain; the round trips the
// ZERO the book holds), the census battery (airBarGlitchCount the
// family's own count the fold rides - one-parser law never a fork,
// the .212 hazardMemorizeCount precedent - the bracket form rides
// whole, the override's own lines and the liar-ladder ratchet pages
// and the junk forms never ride), the fence battery (the fold proves
// itself or the word prices nothing - the lawful zero the fence
// keeps, the extra keys never rejected), the byte-pin battery (the
// tail rides byte-exact - the seat the family's own enumeration
// holds), the lanes-never-merge battery (the override's own lines and
// the liar ladder's own pages never ride the ignored fold)
import assert from 'node:assert'
import { airBarGlitchCount, airBarGlitchTrendConsistent, airBarGlitchTrendRow } from '../../src/lib/airbarglitchtrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, the ledger no-path save's own trend prices the ledger's no-path save's own mass across the faces, the tunnel steering's own trend prices the tunnel's steering verdict's own mass across the faces, the ledger dead-lid record's own trend prices the ledger's dead-lid record's own mass across the faces, the reloot heading's own trend prices the reloot heading's own mass across the faces, the ledger dead-lid save's own trend prices the ledger's dead-lid save's own mass across the faces, the plan top's own trend prices the plan top's own mass across the faces, the vertical doom skip's own trend prices the vertical doom skip's own mass across the faces, the bank views' own trend prices the bank views' own mass across the faces, this word prices the air-bar glitch's own mass across the faces - the air-bar glitch seat, co-existence by seat never by duplication)"

const HEAD = 'the air-bar glitch trend (v0.976.222)'
const SWING = HEAD + ": the ignored's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the ignored's rise ran two steps deep - "
const SWELL_TAIL = " - the ignored's own swell " + TAIL
const FADE = HEAD + ": the ignored's fall ran two steps deep - "
const FADE_TAIL = " - the ignored's own fade " + TAIL

const rowOf = (a, b, c) => {
  const d1 = b - a, d2 = c - b
  const arc = `${a} -> ${b} (${d1 >= 0 ? '+' : ''}${d1}) -> ${c} (${d2 >= 0 ? '+' : ''}${d2})`
  if (d1 === 0 || d2 === 0) return null
  if (d1 > 0 && d2 > 0) return SWELL + arc + SWELL_TAIL
  if (d1 < 0 && d2 < 0) return FADE + arc + FADE_TAIL
  return SWING + arc + SWING_TAIL
}
const foldOf = (a, b, c) => ({ back: { ignored: a }, prev: { ignored: b }, cur: { ignored: c } })

// === THE FIELD SERIES (the honest eleven-face window, byte-exact) ===
const SERIES = [[446, 4], [447, 2], [448, 0], [449, 0], [450, 0], [451, 0], [452, 0], [453, 0], [454, 0], [455, 0], [456, 14]]
const T = Object.fromEntries(SERIES)
assert.strictEqual(Object.values(T).reduce((s, v) => s + v, 0), 20) // THE CELL'S OWN WEIGHT 20u
assert.strictEqual(SERIES.length, 11)
assert.strictEqual(T[456], 14) // THE TOP rode ONCE - MY WORD'S OWN FIRST LIVE READ
let floors = 0
for (const [, v] of SERIES) { if (v === 0) floors++ }
assert.strictEqual(floors, 8) // THE FLOOR the zero rode EIGHT times (448..455)
// THE BOOK ONE of NINE windows speaking - ONE fade, the ZERO swells,
// the ZERO swings, the EIGHT honest silences
const wins = []
for (let i = 2; i < SERIES.length; i++) wins.push([SERIES[i][0], SERIES[i - 2][1], SERIES[i - 1][1], SERIES[i][1]])
assert.strictEqual(wins.length, 9)
let swells = 0, fades = 0, swings = 0, silences = 0
for (const [f, a, b, c] of wins) {
  const row = rowOf(a, b, c)
  const d1 = b - a, d2 = c - b
  if (d1 === 0 || d2 === 0) { silences++; assert.strictEqual(row, null); continue }
  if (d1 > 0 && d2 > 0) { swells++; assert.ok(row.startsWith(SWELL)); continue }
  if (d1 < 0 && d2 < 0) { fades++; assert.ok(row.startsWith(FADE)); continue }
  swings++; assert.ok(row.startsWith(SWING))
}
assert.strictEqual(fades, 1) // the W448 the storm's own drain
assert.strictEqual(swells, 0)
assert.strictEqual(swings, 0)
assert.strictEqual(silences, 8)
// the window pins byte-exact (the honest arc each window holds)
assert.deepStrictEqual(rowOf(T[446], T[447], T[448]), FADE + '4 -> 2 (-2) -> 0 (-2)' + FADE_TAIL) // W448 the book's own ONE speaking
assert.strictEqual(rowOf(T[447], T[448], T[449]), null) // W449 the held second step
assert.strictEqual(rowOf(T[448], T[449], T[450]), null) // W450 the drought
assert.strictEqual(rowOf(T[449], T[450], T[451]), null) // W451
assert.strictEqual(rowOf(T[450], T[451], T[452]), null) // W452
assert.strictEqual(rowOf(T[451], T[452], T[453]), null) // W453
assert.strictEqual(rowOf(T[452], T[453], T[454]), null) // W454
assert.strictEqual(rowOf(T[453], T[454], T[455]), null) // W455
assert.strictEqual(rowOf(T[454], T[455], T[456]), null) // W456 THE CREST'S OWN SILENCE - the held first step the 14 never breaks
// the bounds' own legs: +14 ONE leg ONE boundary 455/456 (THE CREST'S
// OWN CLIMB), -2 TWICE two boundaries 446/447 + 447/448 (THE STORM'S
// OWN WAKE the twin drain)
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
assert.strictEqual(maxRise, 14)
assert.strictEqual(riseRides, 1) // ONE leg ONE boundary 455/456
assert.strictEqual(maxFall, -2)
assert.strictEqual(fallRides, 2) // TWICE two boundaries 446/447 + 447/448
// the round trips the ZERO the book holds (the swings never mirrored)
let mirrors = 0
for (let i = 2; i < SERIES.length; i++) {
  const a = SERIES[i - 2][1], b = SERIES[i - 1][1], c = SERIES[i][1]
  if (b - a !== 0 && c - b === -(b - a)) mirrors++
}
assert.strictEqual(mirrors, 0)

// === THE CENSUS BATTERY (airBarGlitchCount the fold rides) ===
// the bracket form rides whole (the 38-total read the face prints)
const face456 = ['launching 19 bots for 600s -> targets sand, gravel, dirt, stone', 'F6 [F6] water: air-bar glitch ignored (oxygen 0 on dry land at [-130,56,396], 38 total)', 'F6 [F6] water: air-bar glitch ignored (oxygen 0 on dry land at [-130,50,396], 74 total)', 'b] n=1 ts=21s rss=252M late=5ms mainLate=0ms']
assert.strictEqual(airBarGlitchCount(face456), 2)
// the bare form the grammar keeps for the bare caller's own read
assert.strictEqual(airBarGlitchCount(['F6 water: air-bar glitch ignored (oxygen 0 on dry land at [-125,73,399], 1 total)']), 1)
// the junk never rides (the override's own lines and the liar-ladder
// ratchet pages and the prose skins the emitter never prints)
const junk = ['F6 [F6] water: air-bar glitch override - 24 consecutive critical-on-dry reads, believing the bar at [-130,50,396]', 'F6 [F6] water: liar ladder ratchets - confirmed no-op glitch page #1, the next override needs 16 fresh critical-on-dry reads', 'F6 [F6] water: air-bar glitch was ignored by the guard', 'F6 [F6] water: air-bar glitch ignored (oxygen 0 on wet land at [-130,56,396], 38 total)', 'F6 [F6] water: air-bar glitch ignored (oxygen 0 on dry land at [-130,56,396], many total)', 'F6 [F6] water: air-bar glitch ignored']
assert.strictEqual(airBarGlitchCount(junk), 0)
// the non-string lines never ride (the fold never invents)
assert.strictEqual(airBarGlitchCount([null, 42, undefined, {}]), 0)
assert.strictEqual(airBarGlitchCount('not an array'), 0)
// the zero a lawful count (the drought's own zero the fence keeps)
const dry = ['launching 19 bots for 600s -> targets sand, gravel, dirt, stone']
assert.strictEqual(airBarGlitchCount(dry), 0)

// === THE FENCE BATTERY (the fold proves itself or prices nothing) ===
assert.strictEqual(airBarGlitchTrendConsistent(null), false)
assert.strictEqual(airBarGlitchTrendConsistent(undefined), false)
assert.strictEqual(airBarGlitchTrendConsistent('no'), false)
assert.strictEqual(airBarGlitchTrendConsistent([1, 2]), false)
assert.strictEqual(airBarGlitchTrendConsistent({}), false)
assert.strictEqual(airBarGlitchTrendConsistent({ back: { ignored: 1 }, prev: { ignored: 2 } }), false)
assert.strictEqual(airBarGlitchTrendConsistent({ back: { ignored: 1 }, prev: { ignored: 2 }, cur: { ignored: '3' } }), false)
assert.strictEqual(airBarGlitchTrendConsistent({ back: { ignored: 1 }, prev: { ignored: 2 }, cur: { ignored: -1 } }), false)
assert.strictEqual(airBarGlitchTrendConsistent({ back: { ignored: 1.5 }, prev: { ignored: 2 }, cur: { ignored: 3 } }), false)
assert.strictEqual(airBarGlitchTrendConsistent({ back: { ignored: 0 }, prev: { ignored: 0 }, cur: { ignored: 0 } }), true) // the lawful zero
assert.strictEqual(airBarGlitchTrendConsistent({ back: { ignored: 1 }, prev: { ignored: 2 }, cur: { ignored: 3 }, extra: 'rides' }), true) // extra keys never rejected
// the row's own fence
assert.strictEqual(airBarGlitchTrendRow(null), null)
assert.strictEqual(airBarGlitchTrendRow({ back: { ignored: 1 }, prev: { ignored: 2 }, cur: { ignored: 'x' } }), null)
assert.strictEqual(airBarGlitchTrendRow({ back: { ignored: -1 }, prev: { ignored: 2 }, cur: { ignored: 3 } }), null)
// the held step the honest silence (the family's own held law)
assert.strictEqual(airBarGlitchTrendRow(foldOf(5, 5, 9)), null)
assert.strictEqual(airBarGlitchTrendRow(foldOf(5, 9, 9)), null)
assert.strictEqual(airBarGlitchTrendRow(foldOf(0, 0, 0)), null)

// === THE BYTE-PIN BATTERY (the tail rides byte-exact) ===
const sample = airBarGlitchTrendRow(foldOf(4, 2, 0))
assert.ok(sample.startsWith(HEAD + ':'))
assert.ok(sample.endsWith(TAIL))
assert.ok(sample.includes(" - the ignored's own fade "))
assert.ok(sample.includes(' - the air-bar glitch seat, co-existence by seat never by duplication)'))
const swingSample = airBarGlitchTrendRow(foldOf(0, 5, 2))
assert.ok(swingSample.startsWith(SWING + '0 -> 5 (+5) -> 2 (-3)'))
assert.ok(swingSample.endsWith(TAIL))
// the byte-pin law: no shape verdict words (no return, no repeat, no
// stay, no run) nor the seats' own verdict word (no owns) nor the
// dynasty's own (no dynasty, no turn)
for (const w of [' return', ' repeat', ' stay', ' run ', ' owns ', ' dynasty', ' turn ']) {
  assert.ok(!sample.includes(w), 'byte-pin leak: ' + w)
}

// === THE LANES-NEVER-MERGE BATTERY ===
// the override's own lines never ride the ignored fold - the ignored
// cell alone (the junk battery above holds the override's own line at
// zero); the fold the count feeds never invents from the ratchet
// pages or the prose
const lanesFace = ['F6 [F6] water: air-bar glitch override - 24 consecutive critical-on-dry reads, believing the bar at [-130,50,396]', 'F6 [F6] water: liar ladder abandons the glitch class - 2 confirmed no-op pages, the streak lane stands down (wet contact or a wet rescue re-arms)', 'F6 [F6] water: air-bar glitch ignored (oxygen 0 on dry land at [-134,73,396], 1 total)']
assert.strictEqual(airBarGlitchCount(lanesFace), 1) // the ignored line alone

console.log('airbarglitchtrend: all pins green')
