// tests/unit/bankviewstrend.test.mjs - THE BANK VIEWS' OWN TREND's own
// pin battery (v0.976.221): the direct deposit's own slot-view read
// mass across the faces the field's own scan named first (the 'F<n>
// [F<n>] direct deposit: <N> chest slots derived from the <N>-slot
// view' family deposit.mjs's own direct deposit prints when the bank
// chest's own window opens and the slots derive) - the strict grammar
// the field proved 353/353 zero mismatch (the bracket voice the family
// prints only, the bare form never rode the window - zero untagged
// lines the field holds, the survey's own zero-variant proof rides),
// the field's own chains byte-exact (THE CELL'S OWN WEIGHT 353u the
// twenty faces' own total - the sandbox wipe's own honest debt the
// window prices, the faces 436..455 the artifact fetches re-spoke, the
// absent 340..435 spans the wipe's own honest gaps the windows the
// array-position read prices, the field proof 20/20 census==raw zero
// mismatches - scripts/fieldread-bankviews-1043.mjs), THE F436 DROUGHT
// the zero the FLOOR rode ONCE (the zero a lawful count), THE TWIN
// CREST the count 40 rode TWICE (the faces 441 and 452's own crests),
// THE BOOK EIGHTEEN of EIGHTEEN windows speaking (FOURTEEN swings, TWO
// swells, TWO fades, the ZERO honest silences - the family's own
// restless skin), the window pins (the W438 swing 0 -> 10 (+10) -> 2
// (-8) ... the W454 fade 40 -> 5 (-35) -> 3 (-2), the W455 swing 5 ->
// 3 (-2) -> 15 (+12) MY WORD'S OWN FIRST LIVE READ), the bounds' own
// legs pins (+25 rode ONE leg ONE boundary 443/444 - the build's own
// climb, -35 rode TWICE two boundaries 441/442 and 452/453 - THE
// STORM'S OWN DRAIN the twin ride; the round trips the ZERO the book
// holds), the census battery (bankDocket's own views cell the fold
// rides - one-parser law never a fork, the .104 bank decide precedent
// - the bracket form rides whole, the junk forms never ride), the
// fence battery (the fold proves itself or the word prices nothing -
// the lawful zero the fence keeps, the extra keys never rejected), the
// byte-pin battery (the tail rides byte-exact - the seat the family's
// own enumeration holds), the lanes-never-merge battery (the bank's
// own door and pocket lines and the pre-position bank verdicts and the
// climb out pre-position verdicts never ride the views fold)
import assert from 'node:assert'
import { bankViewsTrendConsistent, bankViewsTrendRow } from '../../src/lib/bankviewstrend.mjs'
import { bankDocket } from '../../src/lib/bankdocket.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, the ledger no-path save's own trend prices the ledger's no-path save's own mass across the faces, the tunnel steering's own trend prices the tunnel's steering verdict's own mass across the faces, the ledger dead-lid record's own trend prices the ledger's dead-lid record's own mass across the faces, the reloot heading's own trend prices the reloot heading's own mass across the faces, the ledger dead-lid save's own trend prices the ledger's dead-lid save's own mass across the faces, the plan top's own trend prices the plan top's own mass across the faces, the vertical doom skip's own trend prices the vertical doom skip's own mass across the faces, this word prices the bank views' own mass across the faces - the bank views seat, co-existence by seat never by duplication)"

const HEAD = 'the bank views trend (v0.976.221)'
const SWING = HEAD + ": the views' own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the views' rise ran two steps deep - "
const SWELL_TAIL = " - the views' own swell " + TAIL
const FADE = HEAD + ": the views' fall ran two steps deep - "
const FADE_TAIL = " - the views' own fade " + TAIL

const rowOf = (a, b, c) => {
  const d1 = b - a, d2 = c - b
  const arc = `${a} -> ${b} (${d1 >= 0 ? '+' : ''}${d1}) -> ${c} (${d2 >= 0 ? '+' : ''}${d2})`
  if (d1 === 0 || d2 === 0) return null
  if (d1 > 0 && d2 > 0) return SWELL + arc + SWELL_TAIL
  if (d1 < 0 && d2 < 0) return FADE + arc + FADE_TAIL
  return SWING + arc + SWING_TAIL
}
const foldOf = (a, b, c) => ({ back: { views: a }, prev: { views: b }, cur: { views: c } })

// === THE FIELD SERIES (the honest twenty-face window, byte-exact) ===
const SERIES = [[436, 0], [437, 10], [438, 2], [439, 24], [440, 16], [441, 40], [442, 5], [443, 8], [444, 33], [445, 23], [446, 4], [447, 19], [448, 16], [449, 24], [450, 35], [451, 31], [452, 40], [453, 5], [454, 3], [455, 15]]
const T = Object.fromEntries(SERIES)
assert.strictEqual(Object.values(T).reduce((s, v) => s + v, 0), 353) // THE CELL'S OWN WEIGHT 353u
assert.strictEqual(SERIES.length, 20)
assert.strictEqual(T[436], 0) // THE F436 DROUGHT the FLOOR rode ONCE
assert.strictEqual(T[441], 40) // THE TWIN CREST rode TWICE
assert.strictEqual(T[452], 40)
// THE BOOK EIGHTEEN of EIGHTEEN windows speaking - FOURTEEN swings,
// TWO swells, TWO fades, the ZERO honest silences
const wins = []
for (let i = 2; i < SERIES.length; i++) wins.push([SERIES[i][0], SERIES[i - 2][1], SERIES[i - 1][1], SERIES[i][1]])
assert.strictEqual(wins.length, 18)
let swells = 0, fades = 0, swings = 0, silences = 0
for (const [f, a, b, c] of wins) {
  const row = rowOf(a, b, c)
  const d1 = b - a, d2 = c - b
  if (d1 === 0 || d2 === 0) { silences++; assert.strictEqual(row, null); continue }
  if (d1 > 0 && d2 > 0) { swells++; assert.ok(row.startsWith(SWELL)); continue }
  if (d1 < 0 && d2 < 0) { fades++; assert.ok(row.startsWith(FADE)); continue }
  swings++; assert.ok(row.startsWith(SWING))
}
assert.strictEqual(swells, 2)
assert.strictEqual(fades, 2)
assert.strictEqual(swings, 14)
assert.strictEqual(silences, 0)
// the window pins byte-exact (the honest arc each window holds)
assert.deepStrictEqual(rowOf(T[436], T[437], T[438]), SWING + '0 -> 10 (+10) -> 2 (-8)' + SWING_TAIL) // W438
assert.deepStrictEqual(rowOf(T[437], T[438], T[439]), SWING + '10 -> 2 (-8) -> 24 (+22)' + SWING_TAIL) // W439
assert.deepStrictEqual(rowOf(T[438], T[439], T[440]), SWING + '2 -> 24 (+22) -> 16 (-8)' + SWING_TAIL) // W440
assert.deepStrictEqual(rowOf(T[439], T[440], T[441]), SWING + '24 -> 16 (-8) -> 40 (+24)' + SWING_TAIL) // W441
assert.deepStrictEqual(rowOf(T[440], T[441], T[442]), SWING + '16 -> 40 (+24) -> 5 (-35)' + SWING_TAIL) // W442
assert.deepStrictEqual(rowOf(T[441], T[442], T[443]), SWING + '40 -> 5 (-35) -> 8 (+3)' + SWING_TAIL) // W443
assert.deepStrictEqual(rowOf(T[442], T[443], T[444]), SWELL + '5 -> 8 (+3) -> 33 (+25)' + SWELL_TAIL) // W444
assert.deepStrictEqual(rowOf(T[443], T[444], T[445]), SWING + '8 -> 33 (+25) -> 23 (-10)' + SWING_TAIL) // W445
assert.deepStrictEqual(rowOf(T[444], T[445], T[446]), FADE + '33 -> 23 (-10) -> 4 (-19)' + FADE_TAIL) // W446
assert.deepStrictEqual(rowOf(T[445], T[446], T[447]), SWING + '23 -> 4 (-19) -> 19 (+15)' + SWING_TAIL) // W447
assert.deepStrictEqual(rowOf(T[446], T[447], T[448]), SWING + '4 -> 19 (+15) -> 16 (-3)' + SWING_TAIL) // W448
assert.deepStrictEqual(rowOf(T[447], T[448], T[449]), SWING + '19 -> 16 (-3) -> 24 (+8)' + SWING_TAIL) // W449
assert.deepStrictEqual(rowOf(T[448], T[449], T[450]), SWELL + '16 -> 24 (+8) -> 35 (+11)' + SWELL_TAIL) // W450
assert.deepStrictEqual(rowOf(T[449], T[450], T[451]), SWING + '24 -> 35 (+11) -> 31 (-4)' + SWING_TAIL) // W451
assert.deepStrictEqual(rowOf(T[450], T[451], T[452]), SWING + '35 -> 31 (-4) -> 40 (+9)' + SWING_TAIL) // W452
assert.deepStrictEqual(rowOf(T[451], T[452], T[453]), SWING + '31 -> 40 (+9) -> 5 (-35)' + SWING_TAIL) // W453
assert.deepStrictEqual(rowOf(T[452], T[453], T[454]), FADE + '40 -> 5 (-35) -> 3 (-2)' + FADE_TAIL) // W454
assert.deepStrictEqual(rowOf(T[453], T[454], T[455]), SWING + '5 -> 3 (-2) -> 15 (+12)' + SWING_TAIL) // W455 MY WORD'S OWN FIRST LIVE READ
// the bounds' own legs: +25 ONE leg ONE boundary 443/444 (the build's
// own climb), -35 TWICE two boundaries 441/442 and 452/453 (THE
// STORM'S OWN DRAIN the twin ride)
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
assert.strictEqual(maxRise, 25)
assert.strictEqual(riseRides, 1) // ONE leg ONE boundary 443/444
assert.strictEqual(maxFall, -35)
assert.strictEqual(fallRides, 2) // TWICE two boundaries 441/442 + 452/453
// the round trips the ZERO the book holds (the swings never mirrored)
let mirrors = 0
for (let i = 2; i < SERIES.length; i++) {
  const a = SERIES[i - 2][1], b = SERIES[i - 1][1], c = SERIES[i][1]
  if (b - a !== 0 && c - b === -(b - a)) mirrors++
}
assert.strictEqual(mirrors, 0)

// === THE CENSUS BATTERY (bankDocket's own views cell the fold rides) ===
const visitsOf = (ls) => ls.filter(l => /bank(ed)?[: ]/i.test(l)).length > 0 ? ls.filter(l => /\bbank\b/.test(l)).length : 0
const viewsOf = (ls) => { const d = bankDocket(ls, visitsOf(ls)); return d ? d.views : null }
// the bracket form rides whole (the 27-of-63 read the face prints)
const face455 = ['launching 19 bots for 600s -> targets sand, gravel, dirt, stone', 'F2 [F2] direct deposit: 27 chest slots derived from the 63-slot view', 'F2 [F2] direct deposit: 12 chest slots derived from the 31-slot view', 'b] n=1 ts=21s rss=252M late=5ms mainLate=0ms']
assert.strictEqual(viewsOf(face455), 2)
// the docket's own loose reach rides (the cell's own law - the tail
// the loose read never checks; the field's own zero the strict proof
// holds: 353/353 census==raw, the prose skins the honest window never
// prints)
const loose = ['F2 [F2] direct deposit: 27 chest slots came from the 63-slot view', 'F2 [F2] the direct deposit: 27 chest slots derived from the 63-slot view']
assert.strictEqual(viewsOf(loose), 2)
// the other emitters' lines never ride (the lanes never merge - the
// bank lane and the pre-position bank verdicts and the climb-out
// pre-position verdicts and the prose that never names the read)
const junk = ['F2 [F2] bank: chest unreachable (Took to long to decide path to goal!) (18 blocks from yard) - walking back', 'F2 [F2] pre-position bank: +2', 'F2 [F2] climb out (pre-position): OK +2 levels (3 steps, 1 dug, 2.0s)', 'F2 [F2] direct deposit retry skipped - the pocket holds nothing']
assert.strictEqual(viewsOf(junk), 0)
// the zero a lawful count (the drought's own zero the fence keeps)
const dry = ['launching 19 bots for 600s -> targets sand, gravel, dirt, stone']
assert.strictEqual(viewsOf(dry), 0)

// === THE FENCE BATTERY (the fold proves itself or prices nothing) ===
assert.strictEqual(bankViewsTrendConsistent(null), false)
assert.strictEqual(bankViewsTrendConsistent(undefined), false)
assert.strictEqual(bankViewsTrendConsistent('no'), false)
assert.strictEqual(bankViewsTrendConsistent([1, 2]), false)
assert.strictEqual(bankViewsTrendConsistent({}), false)
assert.strictEqual(bankViewsTrendConsistent({ back: { views: 1 }, prev: { views: 2 } }), false)
assert.strictEqual(bankViewsTrendConsistent({ back: { views: 1 }, prev: { views: 2 }, cur: { views: '3' } }), false)
assert.strictEqual(bankViewsTrendConsistent({ back: { views: 1 }, prev: { views: 2 }, cur: { views: -1 } }), false)
assert.strictEqual(bankViewsTrendConsistent({ back: { views: 1.5 }, prev: { views: 2 }, cur: { views: 3 } }), false)
assert.strictEqual(bankViewsTrendConsistent({ back: { views: 0 }, prev: { views: 0 }, cur: { views: 0 } }), true) // the lawful zero
assert.strictEqual(bankViewsTrendConsistent({ back: { views: 1 }, prev: { views: 2 }, cur: { views: 3 }, extra: 'rides' }), true) // extra keys never rejected
// the row's own fence
assert.strictEqual(bankViewsTrendRow(null), null)
assert.strictEqual(bankViewsTrendRow({ back: { views: 1 }, prev: { views: 2 }, cur: { views: 'x' } }), null)
assert.strictEqual(bankViewsTrendRow({ back: { views: -1 }, prev: { views: 2 }, cur: { views: 3 } }), null)
// the held step the honest silence (the family's own held law)
assert.strictEqual(bankViewsTrendRow(foldOf(5, 5, 9)), null)
assert.strictEqual(bankViewsTrendRow(foldOf(5, 9, 9)), null)
assert.strictEqual(bankViewsTrendRow(foldOf(0, 0, 0)), null)

// === THE BYTE-PIN BATTERY (the tail rides byte-exact) ===
const sample = bankViewsTrendRow(foldOf(0, 10, 2))
assert.ok(sample.startsWith(HEAD + ':'))
assert.ok(sample.endsWith(TAIL))
assert.ok(sample.includes(' - the bank views seat, co-existence by seat never by duplication)'))
// the byte-pin law: no shape verdict words (no return, no repeat, no
// stay, no run) nor the seats' own verdict word (no owns) nor the
// dynasty's own (no dynasty, no turn)
for (const w of [' return', ' repeat', ' stay', ' run ', ' owns ', ' dynasty', ' turn ']) {
  assert.ok(!sample.includes(w), 'byte-pin leak: ' + w)
}

// === THE LANES-NEVER-MERGE BATTERY ===
// the bank's own door and pocket legs never ride the views fold - the
// views cell alone (the junk battery above holds the legs' own lines
// at zero); the fold the docket's views cell feeds never invents from
// the fallbacks or the plans or the deposit positives
const legsFace = ['F2 [F2] bank fallback: nothing to deposit', 'F2 [F2] bank fallback: +3 (budget exhausted)', 'F2 [F2] bank trip grant: trip 1 granted (2 units)', 'F2 [F2] direct deposit: 5 chest slots derived from the 12-slot view']
assert.strictEqual(viewsOf(legsFace), 1) // the views line alone

console.log('bankviewstrend: all pins green')
