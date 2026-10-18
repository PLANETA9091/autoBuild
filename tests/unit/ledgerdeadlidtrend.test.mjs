// (v0.976.216) THE LEDGER DEAD-LID RECORD'S OWN TREND - the tests.
// The field table rides the faces the cache holds byte-honest (the
// honest reduced window: 407..414 and 448..451 - the absent 410 and
// 415..447 spans the sandbox wipe's own honest gaps; the census fold
// over the REAL fleet19 logs the field proof priced, 11/11 census ==
// raw zero mismatches, scripts/fieldproof-deadlid-0830.mjs).
import { test } from 'node:test'
import assert from 'node:assert'
import { ledgerDeadLidRecordTrendConsistent, ledgerDeadLidRecordTrendRow } from '../../src/lib/ledgerdeadlidtrend.mjs'
import { ledgerRecordBook } from '../../src/lib/ledgerbook.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, the ledger no-path save's own trend prices the ledger's no-path save's own mass across the faces, the tunnel steering's own trend prices the tunnel's steering verdict's own mass across the faces, this word prices the ledger's dead-lid record's own mass across the faces - the ledger dead-lid record seat, co-existence by seat never by duplication)"
const HEAD = 'the ledger dead-lid record trend (v0.976.216)'
const SWING = HEAD + ": the record's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the record's rise ran two steps deep - "
const SWELL_TAIL = " - the record's own swell " + TAIL
const FADE = HEAD + ": the record's fall ran two steps deep - "
const FADE_TAIL = " - the record's own fade " + TAIL

const rowOf = (b, p, c) => ledgerDeadLidRecordTrendRow({ back: { records: b }, prev: { records: p }, cur: { records: c } })
const classify = (b, p, c) => {
  const first = p - b, second = c - p
  if (first === 0 || second === 0) return 'silence'
  if (first > 0 && second > 0) return 'swell'
  if (first < 0 && second < 0) return 'fade'
  return 'swing'
}
const arcOf = (b, p, c) => `${b} -> ${p} (${p - b >= 0 ? '+' : ''}${p - b}) -> ${c} (${c - p >= 0 ? '+' : ''}${c - p})`

// ===== THE FENCE BATTERY =====
test('the fence prices nothing the fold cannot prove', () => {
  assert.strictEqual(ledgerDeadLidRecordTrendConsistent(null), false, 'null prices nothing')
  assert.strictEqual(ledgerDeadLidRecordTrendConsistent(undefined), false)
  assert.strictEqual(ledgerDeadLidRecordTrendConsistent('junk'), false)
  assert.strictEqual(ledgerDeadLidRecordTrendConsistent(42), false)
  assert.strictEqual(ledgerDeadLidRecordTrendConsistent([]), false, 'the array never proves')
  assert.strictEqual(ledgerDeadLidRecordTrendConsistent({}), false)
  assert.strictEqual(ledgerDeadLidRecordTrendConsistent({ back: { records: 1 }, prev: { records: 2 } }), false, 'the cur missing never proves')
  assert.strictEqual(ledgerDeadLidRecordTrendConsistent({ prev: { records: 2 }, cur: { records: 3 } }), false, 'the back missing never proves')
  assert.strictEqual(ledgerDeadLidRecordTrendConsistent({ back: { records: 1 }, prev: { records: 2 }, cur: { records: 3 } }), true)
  assert.strictEqual(ledgerDeadLidRecordTrendConsistent({ back: { records: 0 }, prev: { records: 0 }, cur: { records: 0 } }), true, 'the zero is lawful - the drought the fence keeps')
  assert.strictEqual(ledgerDeadLidRecordTrendConsistent({ back: { records: -1 }, prev: { records: 2 }, cur: { records: 3 } }), false, 'the negative count never proves')
  assert.strictEqual(ledgerDeadLidRecordTrendConsistent({ back: { records: 1.5 }, prev: { records: 2 }, cur: { records: 3 } }), false, 'the float never proves')
  assert.strictEqual(ledgerDeadLidRecordTrendConsistent({ back: { records: '3' }, prev: { records: 2 }, cur: { records: 3 } }), false, 'the string count never proves')
  assert.strictEqual(ledgerDeadLidRecordTrendConsistent({ back: { records: 1, junk: 'x' }, prev: { records: 2, junk: 'y' }, cur: { records: 3, junk: 'z' } }), true, 'extra keys never rejected - the fence prices the cell alone')
})

// ===== THE ROW BATTERY (synthetic shapes) =====
test('the row speaks the two-step shapes byte-exact, the held step the honest null', () => {
  assert.strictEqual(rowOf(1, 3, 7), SWELL + '1 -> 3 (+2) -> 7 (+4)' + SWELL_TAIL, 'the swell byte-exact')
  assert.strictEqual(rowOf(7, 3, 1), FADE + '7 -> 3 (-4) -> 1 (-2)' + FADE_TAIL, 'the fade byte-exact')
  assert.strictEqual(rowOf(3, 5, 3), SWING + '3 -> 5 (+2) -> 3 (-2)' + SWING_TAIL, 'the swing byte-exact')
  assert.strictEqual(rowOf(4, 4, 9), null, 'the held first step the honest null - the bars never invent')
  assert.strictEqual(rowOf(9, 4, 4), null, 'the held second step the honest null')
  assert.strictEqual(rowOf(5, 5, 5), null, 'the held both steps the honest null')
  assert.strictEqual(rowOf(0, 0, 0), null, 'the all-zero fold the honest null (lawful inputs)')
  assert.strictEqual(rowOf(0, 2, 5), SWELL + '0 -> 2 (+2) -> 5 (+3)' + SWELL_TAIL, 'the zero face rides a lawful count - the drought the row keeps')
  assert.strictEqual(rowOf(null), null, 'the fence null the row null')
  assert.strictEqual(rowOf({ back: { records: 1 }, prev: { records: 'x' }, cur: { records: 3 } }), null, 'the fence junk the row null')
})

// ===== THE FIELD'S OWN TABLE (the honest reduced window) =====
const SERIES = [[407, 3], [408, 5], [409, 3], [411, 3], [412, 12], [413, 1], [414, 0], [448, 3], [449, 3], [450, 0], [451, 3]]
const T = Object.fromEntries(SERIES)
const ORDER = SERIES.map(s => s[0])
const winOf = (f) => {
  const i = ORDER.indexOf(f)
  return [T[ORDER[i - 2]], T[ORDER[i - 1]], T[f]]
}
const tallyWindow = (f) => classify(...winOf(f))
const winArc = (f) => arcOf(...winOf(f))
const winRow = (f) => rowOf(...winOf(f))

test('the field table pins: 36u the eleven faces own total, the honest reduced window', () => {
  const sum = ORDER.reduce((a, f) => a + T[f], 0)
  assert.strictEqual(sum, 36, 'THE FIELD 36u the eleven faces own total')
  assert.strictEqual(ORDER.length, 11, 'the field eleven faces deep (407..414 + 448..451)')
  assert.deepStrictEqual(ORDER, [407, 408, 409, 411, 412, 413, 414, 448, 449, 450, 451], 'the honest gaps ride the ORDER - the absent 410 and 415..447 spans')
  const top = ORDER.filter(f => T[f] === 12)
  assert.deepStrictEqual(top, [412], 'THE FIELD OWN TOP THE COUNT 12 rode ONCE the face 412 own crest')
  const floor = ORDER.filter(f => T[f] === 0)
  assert.deepStrictEqual(floor, [414, 450], 'THE FIELD OWN FLOOR THE COUNT 0 rode TWICE - the faces 414 and 450 own droughts (the dead-lid family own sparse skin the honest face prices)')
})

test('the field book: FIVE of NINE windows speaking - four swings, zero swells, the one fade, the four honest silences', () => {
  const shapes = {}
  for (let i = 2; i < ORDER.length; i++) {
    const s = classify(T[ORDER[i - 2]], T[ORDER[i - 1]], T[ORDER[i]])
    shapes[s] = (shapes[s] || 0) + 1
  }
  assert.strictEqual(shapes.swing, 4, 'the field book FOUR swings')
  assert.strictEqual(shapes.swell, undefined, 'the field book ZERO swells')
  assert.strictEqual(shapes.fade, 1, 'the field book the ONE fade')
  assert.strictEqual(shapes.silence, 4, 'the field book the FOUR honest silences')
  assert.strictEqual(ORDER.length - 2, 9, 'nine windows whole')
  assert.strictEqual((shapes.swing || 0) + (shapes.swell || 0) + (shapes.fade || 0), 5, 'the field book FIVE of NINE windows speaking')
})

test('the field windows byte-exact: the swings and the fade and the silences', () => {
  // the weight-2 mirror
  assert.strictEqual(tallyWindow(409), 'swing', 'the W(407,408,409) the swing')
  assert.strictEqual(winArc(409), '3 -> 5 (+2) -> 3 (-2)', 'the W409 arc byte-exact')
  assert.strictEqual(winRow(409), SWING + '3 -> 5 (+2) -> 3 (-2)' + SWING_TAIL, 'the W409 row byte-exact')
  // the held pairs - the honest silences
  assert.strictEqual(tallyWindow(411), 'silence', 'the W(408,409,411) the held second step the honest silence')
  assert.strictEqual(winRow(411), null, 'the W411 row the honest null')
  assert.strictEqual(tallyWindow(412), 'silence', 'the W(409,411,412) the held first step the honest silence')
  assert.strictEqual(winRow(412), null, 'the W412 row the honest null')
  // the crest's own climb and drain
  assert.strictEqual(tallyWindow(413), 'swing', 'the W(411,412,413) the swing')
  assert.strictEqual(winArc(413), '3 -> 12 (+9) -> 1 (-11)', 'the W413 arc byte-exact - the crest climb and drain ride inside')
  // the deep fall
  assert.strictEqual(tallyWindow(414), 'fade', 'the W(412,413,414) the fade')
  assert.strictEqual(winArc(414), '12 -> 1 (-11) -> 0 (-1)', 'the W414 fade arc byte-exact')
  assert.strictEqual(winRow(414), FADE + '12 -> 1 (-11) -> 0 (-1)' + FADE_TAIL, 'the W414 row byte-exact - the only fade the field prices')
  // the gap-crossing windows (the absent 415..447 span the array-position read prices - the .206 honest fix the law rides)
  assert.strictEqual(tallyWindow(448), 'swing', 'the W(413,414,448) THE GAP-CROSSING SWING')
  assert.strictEqual(winArc(448), '1 -> 0 (-1) -> 3 (+3)', 'the W448 gap-crossing arc byte-exact')
  assert.strictEqual(tallyWindow(449), 'silence', 'the W(414,448,449) the gap-crossing held the honest silence')
  assert.strictEqual(winRow(449), null, 'the W449 row the honest null')
  assert.strictEqual(tallyWindow(450), 'silence', 'the W(448,449,450) the held first step the honest silence')
  assert.strictEqual(winRow(450), null, 'the W450 row the honest null')
  // MY WORD'S OWN FIRST LIVE READ - the newest face prices
  assert.strictEqual(tallyWindow(451), 'swing', 'the W(449,450,451) the newest window the swing')
  assert.strictEqual(winArc(451), '3 -> 0 (-3) -> 3 (+3)', 'the W451 arc byte-exact')
  assert.strictEqual(winRow(451), SWING + '3 -> 0 (-3) -> 3 (+3)' + SWING_TAIL, 'the W451 row byte-exact - MY FIRST LIVE READ')
})

test('the round trips: the TWO the field prices - the weight-3 mirrors', () => {
  const rts = []
  for (let i = 2; i < ORDER.length; i++) {
    const b = T[ORDER[i - 2]], c = T[ORDER[i]]
    if (b === c && classify(T[ORDER[i - 2]], T[ORDER[i - 1]], T[ORDER[i]]) !== 'silence') rts.push(ORDER[i])
  }
  assert.deepStrictEqual(rts, [409, 451], 'the field round trips the TWO - the weight-3 mirrors 3 -> 5 (+2) -> 3 (-2) and 3 -> 0 (-3) -> 3 (+3) the field prices (the no-path record own field priced the NONE the .213 seat prices beside - the lanes never merge)')
})

test("the bounds' own legs: the +9 and the -11 the same crest rides", () => {
  let maxRise = -Infinity, maxFall = Infinity, riseLegs = 0, fallLegs = 0
  for (let j = 1; j < ORDER.length; j++) {
    const leg = T[ORDER[j]] - T[ORDER[j - 1]]
    if (leg > maxRise) { maxRise = leg; riseLegs = 1 } else if (leg === maxRise) riseLegs++
    if (leg < maxFall) { maxFall = leg; fallLegs = 1 } else if (leg === maxFall) fallLegs++
  }
  assert.strictEqual(maxRise, 9, 'the +9 the max rise the field prices')
  assert.strictEqual(riseLegs, 1, 'the +9 rode ONE boundary - THE CREST OWN CLIMB the quiet paid whole 3 -> 12 (the boundary 411/412)')
  assert.strictEqual(maxFall, -11, 'the -11 the max fall the field prices')
  assert.strictEqual(fallLegs, 1, 'the -11 rode ONE boundary - THE CREST OWN DRAIN the crest paid whole 12 -> 1 (the boundary 412/413)')
})

// ===== THE REUSE LAW OVER THE REAL SHAPES (one-parser, never a fork) =====
test('the census fold rides the dead-lid record cell over the real emitter shapes', () => {
  // the REAL face 449 lines byte-honest (the held fleet19 log prices)
  const face449 = [
    'F12 [F12] dead-lid ledger: chest at [-149,72,400] cached for the fleet (1 live, ttl 15s)',
    'F9 [F9] dead-lid ledger: chest at [-150,72,384] cached for the fleet (2 live, ttl 15s)',
    "F14 [F14] dead-lid ledger: chest at [-150,72,384] cached for the fleet (1 live, ttl 90s (the repeat's own half-life))"
  ]
  const book = ledgerRecordBook(face449)
  assert.strictEqual(book.families['dead-lid'].records, 3, "the face 449's own cell rides whole (2 fresh + 1 escalated)")
  const fold = (ls) => ({ records: ledgerRecordBook(ls) ? ledgerRecordBook(ls).families['dead-lid'].records : 0 })
  assert.deepStrictEqual(fold(face449), { records: 3 }, 'the fold the word rides reads the SAME cell')
  // the escalated and fresh forms both ride
  assert.strictEqual(fold(["F8 [F8] dead-lid ledger: chest at [-147,81,411] cached for the fleet (1 live, ttl 15s)"]).records, 1, 'the fresh form rides')
  assert.strictEqual(fold(["F8 [F8] dead-lid ledger: chest at [-147,81,411] cached for the fleet (2 live, ttl 90s (the repeat's own half-life))"]).records, 1, 'the escalated form rides')
})

test('the lanes never merge: the dead-lid save and the sibling families never ride the record cell', () => {
  const fold = (ls) => {
    const b = ledgerRecordBook(ls)
    return b ? b.families['dead-lid'].records : 0
  }
  // the dead-lid SAVE never rides (the family's own OTHER cell)
  assert.strictEqual(fold(['F4 [F4] chest skip (dead lid cached 3s ago at [-143,73,405])']), 0, 'the dead-lid save never rides the record cell')
  // the no-path records never ride (the .213 seat)
  assert.strictEqual(fold(['F2 [F2] no-path ledger: chest at [1,2,3] cached for the fleet (1 live, ttl 15s)']), 0, 'the no-path record never rides')
  // the full-chest records never ride
  assert.strictEqual(fold(['F3 [F3] full-chest ledger: chest at [4,5,6] cached for the fleet (2 live, ttl 180s)']), 0, 'the full-chest record never rides')
  // the walk-intent records never ride (the .211 seat)
  assert.strictEqual(fold(['F5 [F5] walk-intent: chest at [7,8,9] held for the fleet (1 live, ttl 90s)']), 0, 'the walk-intent record never rides')
  // the no-path timeout-suffix shape never rides the dead-lid family (the dead-lid write carries no timeout suffix - the timeout IS the death)
  assert.strictEqual(fold(['F2 [F2] dead-lid ledger: chest at [1,2,3] cached for the fleet (1 live, ttl 15s, timeout verdict)']), 0, 'the timeout-suffix form never rides')
})

test('the junk battery: the truncated and the malformed never join the book', () => {
  const fold = (ls) => {
    const b = ledgerRecordBook(ls)
    return b ? b.families['dead-lid'].records : 0
  }
  assert.strictEqual(fold(['F12 [F12] dead-lid ledger: chest at [-143,73,405] cached for the fleet (1 live, ttl 15s']), 0, 'the truncated form never rides')
  assert.strictEqual(fold(['dead-lid ledger']), 0, 'the bare words never ride')
  assert.strictEqual(fold(['F [F] dead-lid ledger: chest at [1,2,3] cached for the fleet (1 live, ttl 15s)']), 0, 'the bot-less form never rides')
  assert.strictEqual(fold(['F12 [F12] dead-lid ledger: chest at [x,y,z] cached for the fleet (1 live, ttl 15s)']), 0, 'the non-numeric cell never rides')
  assert.strictEqual(fold(['other: log line']), 0, 'the alien line never rides')
})

// ===== THE BYTE-PIN: the row never speaks the verdict words =====
test('the byte-pin: the row never speaks the seats own verdict words', () => {
  const row = rowOf(3, 12, 1)
  for (const banned of ['owns', 'dynasty', 'return', 'repeat', 'stay']) {
    assert.ok(!row.includes(banned), `the row never speaks '${banned}' - co-existence by seat never by duplication`)
  }
  assert.ok(row.startsWith(HEAD), 'the row rides the head byte-exact')
  assert.ok(row.endsWith(TAIL), 'the row rides the tail byte-exact')
})
