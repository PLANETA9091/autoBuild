// tests/unit/furnacenowalkopentrend.test.mjs - THE FURNACE NO-WALK
// OPEN'S OWN TREND's own pin battery (v0.976.225): the smelting
// lane's no-walk opener mass across the faces the field's own scan
// named first (the '[F<n>] (furnace|blast_furnace) within reach -
// opening without a walk' family - the machine's own block name
// rides verbatim, the single bracket form the smelting lane's own
// tag holds) - the strict grammar the field proved 224/224 zero
// mismatch (the field proof 13/13 census==raw zero mismatches -
// scripts/fieldread-furnaceopen-1400.mjs, the faces 446..458 the
// artifact fetches re-spoke, the fire-1400 mapping the abg and brt
// and vdt anchors re-proved), the field's own chains byte-exact (THE
// CELL'S OWN WEIGHT 224u the thirteen faces' own total), THE TOP the
// count 42 rode ONCE (the F458's own crest - MY WORD'S OWN FIRST
// LIVE READ), THE FLOOR the count 1 rode ONCE (the F446's own
// drought - the zero never rode the window), THE BOOK ELEVEN of
// ELEVEN windows speaking (EIGHT swings, THREE swells, the ZERO
// fades, the ZERO honest silences - the family's own restless skin),
// the window pins byte-exact (the W448 swing 1 -> 20 (+19) -> 18
// (-2) ... the W458 swell 2 -> 6 (+4) -> 42 (+36) MY FIRST LIVE
// READ - THE FURNACE'S OWN RETURN), the bounds' own legs pins (+36
// rode ONE leg ONE boundary 457/458 - THE FURNACE'S OWN RETURN, -30
// rode ONCE 452/453 - THE STORM'S OWN DRAIN; the round trips the
// ZERO the book holds), the census battery (furnaceNoWalkOpenCount
// the family's own count the fold rides - the ONE-PARSER law: the
// SAME FURNACE_NOWALK_OPEN_RE the furnace put census holds, never a
// fork - the bracket form rides whole, the slot read-backs and the
// camp furnace lane and the smelt intent side and the junk forms
// never ride), the fence battery (the fold proves itself or the word
// prices nothing - the lawful zero the fence keeps, the extra keys
// never rejected), the byte-pin battery (the tail rides byte-exact -
// the seat the family's own enumeration holds), the lanes-never-
// merge battery (the read-backs and the camp furnace lines and the
// smelt intent lines never ride the opens fold)
import assert from 'node:assert'
import { furnaceNoWalkOpenCount, furnaceNoWalkOpenTrendConsistent, furnaceNoWalkOpenTrendRow } from '../../src/lib/furnacenowalkopentrend.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, the ledger no-path save's own trend prices the ledger's no-path save's own mass across the faces, the tunnel steering's own trend prices the tunnel's steering verdict's own mass across the faces, the ledger dead-lid record's own trend prices the ledger's dead-lid record's own mass across the faces, the reloot heading's own trend prices the reloot heading's own mass across the faces, the ledger dead-lid save's own trend prices the ledger's dead-lid save's own mass across the faces, the plan top's own trend prices the plan top's own mass across the faces, the vertical doom skip's own trend prices the vertical doom skip's own mass across the faces, the bank views' own trend prices the bank views' own mass across the faces, the air bar glitch's own trend prices the air bar glitch's own mass across the faces, the banked receipt's own trend prices the banked receipt's own mass across the faces, the water rescue lane's own trend prices the water rescue lane's own mass across the faces, this word prices the furnace no-walk open's own mass across the faces - the furnace no-walk open seat, co-existence by seat never by duplication)"

const HEAD = 'the furnace no-walk open trend (v0.976.225)'
const SWING = HEAD + ": the opens' own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the opens' rise ran two steps deep - "
const SWELL_TAIL = " - the opens' own swell " + TAIL
const FADE = HEAD + ": the opens' fall ran two steps deep - "
const FADE_TAIL = " - the opens' own fade " + TAIL

const rowOf = (a, b, c) => {
  const d1 = b - a, d2 = c - b
  const arc = `${a} -> ${b} (${d1 >= 0 ? '+' : ''}${d1}) -> ${c} (${d2 >= 0 ? '+' : ''}${d2})`
  if (d1 === 0 || d2 === 0) return null
  if (d1 > 0 && d2 > 0) return SWELL + arc + SWELL_TAIL
  if (d1 < 0 && d2 < 0) return FADE + arc + FADE_TAIL
  return SWING + arc + SWING_TAIL
}
const foldOf = (a, b, c) => ({ back: { opens: a }, prev: { opens: b }, cur: { opens: c } })

// === THE FIELD SERIES (the honest thirteen-face window, byte-exact) ===
const SERIES = [[446, 1], [447, 20], [448, 18], [449, 22], [450, 32], [451, 21], [452, 36], [453, 6], [454, 7], [455, 11], [456, 2], [457, 6], [458, 42]]
const T = Object.fromEntries(SERIES)
assert.strictEqual(Object.values(T).reduce((s, v) => s + v, 0), 224) // THE CELL'S OWN WEIGHT 224u
assert.strictEqual(SERIES.length, 13)
let speaking = 0
for (const [, v] of SERIES) { if (v > 0) speaking++ }
assert.strictEqual(speaking, 13) // the book: every face spoke - the restless skin
assert.strictEqual(T[458], 42) // THE TOP rode ONCE - MY WORD'S OWN FIRST LIVE READ
assert.strictEqual(T[446], 1) // THE FLOOR rode ONCE - the window's oldest edge
// THE BOOK ELEVEN of ELEVEN windows speaking - EIGHT swings, THREE
// swells, the ZERO fades, the ZERO honest silences
const wins = []
for (let i = 2; i < SERIES.length; i++) wins.push([SERIES[i][0], SERIES[i - 2][1], SERIES[i - 1][1], SERIES[i][1]])
assert.strictEqual(wins.length, 11)
let swells = 0, fades = 0, swings = 0, silences = 0
for (const [f, a, b, c] of wins) {
  const row = rowOf(a, b, c)
  const d1 = b - a, d2 = c - b
  if (d1 === 0 || d2 === 0) { silences++; assert.strictEqual(row, null); continue }
  if (d1 > 0 && d2 > 0) { swells++; assert.ok(row.startsWith(SWELL)); continue }
  if (d1 < 0 && d2 < 0) { fades++; assert.ok(row.startsWith(FADE)); continue }
  swings++; assert.ok(row.startsWith(SWING))
}
assert.strictEqual(swings, 8) // EIGHT swings - the family's own restless skin
assert.strictEqual(swells, 3) // THREE swells (W450, W455, W458)
assert.strictEqual(fades, 0) // the fade never rode the window
assert.strictEqual(silences, 0) // the held step never rode - the restless skin
// the window pins byte-exact (the head + the arc byte)
assert.strictEqual(rowOf(T[446], T[447], T[448]), SWING + '1 -> 20 (+19) -> 18 (-2)' + SWING_TAIL) // the W448 swing
assert.strictEqual(rowOf(T[450], T[451], T[452]), SWING + '32 -> 21 (-11) -> 36 (+15)' + SWING_TAIL) // the W452 swing
assert.strictEqual(rowOf(T[452], T[453], T[454]), SWING + '36 -> 6 (-30) -> 7 (+1)' + SWING_TAIL) // the W454 swing - THE STORM'S OWN DRAIN
assert.strictEqual(rowOf(T[448], T[449], T[450]), SWELL + '18 -> 22 (+4) -> 32 (+10)' + SWELL_TAIL) // the W450 swell
assert.strictEqual(rowOf(T[456], T[457], T[458]), SWELL + '2 -> 6 (+4) -> 42 (+36)' + SWELL_TAIL) // the W458 swell - MY FIRST LIVE READ
// THE BOUNDS' OWN LEGS: +36 ONE leg ONE boundary 457/458, -30 ONCE 452/453
const legs = []
for (let i = 1; i < SERIES.length; i++) legs.push([SERIES[i - 1][0], SERIES[i][0], SERIES[i][1] - SERIES[i - 1][1]])
let maxRise = null, maxFall = null
for (const [a, b, d] of legs) {
  if (maxRise === null || d > maxRise.d) maxRise = { d, b: a + '/' + b }
  if (maxFall === null || d < maxFall.d) maxFall = { d, b: a + '/' + b }
}
assert.strictEqual(maxRise.d, 36); assert.strictEqual(maxRise.b, '457/458') // THE FURNACE'S OWN RETURN
assert.strictEqual(maxFall.d, -30); assert.strictEqual(maxFall.b, '452/453') // THE STORM'S OWN DRAIN
let roundTrips = 0
for (const [f, a, b, c] of wins) {
  const d1 = b - a, d2 = c - b
  if (d1 !== 0 && d2 !== 0 && d1 === -d2) roundTrips++
}
assert.strictEqual(roundTrips, 0) // the round trips the ZERO the book holds

// === THE CENSUS BATTERY (furnaceNoWalkOpenCount - the strict grammar) ===
assert.strictEqual(furnaceNoWalkOpenCount([
  '[F8] furnace within reach - opening without a walk',
  '[F5] blast_furnace within reach - opening without a walk',
  '[F8] furnace within reach - opening without a walk'
]), 3) // the bracket voice rides whole - furnace and blast_furnace alike
assert.strictEqual(furnaceNoWalkOpenCount([]), 0) // the honest zero
assert.strictEqual(furnaceNoWalkOpenCount(null), 0) // the junk input
assert.strictEqual(furnaceNoWalkOpenCount([null, 42, undefined]), 0) // non-strings skipped
// the junk forms never ride (the grammar the bracket keeps)
assert.strictEqual(furnaceNoWalkOpenCount([
  'F8 [F8] furnace within reach - opening without a walk', // the doubled tag - tools.mjs's own wrapper, another lane
  'furnace within reach - opening without a walk', // the bare form - no bracket voice
  '[F8] furnace within reach - opening without a walk extra', // the trailing junk
  '[F8] furnace within reach - opening WITH a walk', // the wrong tail
  '[chest] furnace within reach - opening without a walk ok' // the wrong tail again
]), 0)

// === THE FENCE BATTERY ===
assert.strictEqual(furnaceNoWalkOpenTrendConsistent(foldOf(0, 0, 0)), true) // the lawful zero
assert.strictEqual(furnaceNoWalkOpenTrendConsistent(foldOf(1, 20, 18)), true)
assert.strictEqual(furnaceNoWalkOpenTrendConsistent(null), false)
assert.strictEqual(furnaceNoWalkOpenTrendConsistent(undefined), false)
assert.strictEqual(furnaceNoWalkOpenTrendConsistent([]), false)
assert.strictEqual(furnaceNoWalkOpenTrendConsistent({ back: { opens: 1 }, prev: { opens: 2 } }), false) // the cur missing
assert.strictEqual(furnaceNoWalkOpenTrendConsistent({ back: { opens: -1 }, prev: { opens: 2 }, cur: { opens: 3 } }), false) // the negative never proves
assert.strictEqual(furnaceNoWalkOpenTrendConsistent({ back: { opens: 1.5 }, prev: { opens: 2 }, cur: { opens: 3 } }), false) // the float never proves
assert.strictEqual(furnaceNoWalkOpenTrendConsistent({ back: { opens: 1 }, prev: { opens: 2 }, cur: { opens: 3 }, extra: 'rides' }), true) // extra keys never rejected

// === THE BYTE-PIN BATTERY (the row byte, the tail the seat holds) ===
assert.strictEqual(furnaceNoWalkOpenTrendRow(null), null) // the fence holds
assert.strictEqual(furnaceNoWalkOpenTrendRow(foldOf(5, 5, 9)), null) // the held first step - the honest silence
assert.strictEqual(furnaceNoWalkOpenTrendRow(foldOf(5, 9, 9)), null) // the held second step
const swellRow = furnaceNoWalkOpenTrendRow(foldOf(2, 6, 42))
assert.ok(swellRow.startsWith(SWELL + '2 -> 6 (+4) -> 42 (+36)')) // the arc byte
assert.ok(swellRow.endsWith(TAIL)) // the tail byte-exact
assert.ok(!swellRow.includes('owns')) // the seats' own verdict word never rides
assert.ok(!swellRow.includes('dynasty') && !swellRow.includes('turn')) // the dynasty's own never rides
const fadeRow = furnaceNoWalkOpenTrendRow(foldOf(36, 6, 2))
assert.ok(fadeRow.startsWith(FADE + '36 -> 6 (-30) -> 2 (-4)')) // the fade's arc byte
assert.ok(fadeRow.endsWith(TAIL))
const swingRow = furnaceNoWalkOpenTrendRow(foldOf(1, 20, 18))
assert.ok(swingRow.startsWith(SWING + '1 -> 20 (+19) -> 18 (-2)'))
assert.ok(swingRow.endsWith(TAIL))

// === THE LANES-NEVER-MERGE BATTERY ===
assert.strictEqual(furnaceNoWalkOpenCount([
  '[F16] furnace slots after put: input=raw_copper fuel=coal', // the read-back the fp pair holds
  '[F16] furnace slots after put: input=sand fuel=stick (pocket keeps 2)', // the pocket-keeps skin
  'F12 camp furnace: no build (machine near)', // the camp furnace lane
  'F3 [F3] smelting 3 x raw_copper in a blast_furnace (fuel: 1 x coal)', // the intent side
  'F6 fuel commons: chest holds no fuel at [1,2,3]', // the commons drought
  'F4 [F4] craft torches: skip (no coal: sticks 0 coals 0)' // the torch lane
]), 0) // the lanes never merge - the open cell alone

console.log('furnacenowalkopentrend battery: all pins green')
