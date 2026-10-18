// (v0.976.218) THE LEDGER DEAD-LID SAVE'S OWN TREND - the tests.
// The field table rides the faces the cache holds byte-honest (the
// honest window: 407..414 and 448..453 - the absent 410 and 415..447
// spans the sandbox wipe's own honest gaps; the census fold over the
// REAL fleet19 logs the field proof priced, 13/13 census == raw zero
// mismatches, scripts/fieldproof-deadlidsave-1000.mjs).
import { test } from 'node:test'
import assert from 'node:assert'
import { ledgerDeadLidSaveTrendConsistent, ledgerDeadLidSaveTrendRow } from '../../src/lib/ledgerdeadlidsavetrend.mjs'
import { ledgerRecordBook } from '../../src/lib/ledgerbook.mjs'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, the smelt unreachable's own trend prices the machine skin's own unreachable class across the walks, the busy's own trend prices the machine's own occupied class across the walks, the smelt timeout's own trend prices the smelt refusal anatomy's timeout class across the walks, the smelt other's own trend prices the smelt refusal anatomy's other class across the walks, the sweep verdict's own trend prices the sweep's machine-unreachable verdict mass across the walks, the decide-timeout's own trend prices the machine-unreachable decide-timeout skin's own mass across the walks, the no-path's own trend prices the machine-unreachable no-path skin's own mass across the walks, the walk-timeout's own trend prices the machine-unreachable walk-timeout skin's own mass across the walks, the water-rescue's own trend prices the machine-unreachable water-rescue skin's own mass across the walks, the other's own trend prices the machine-unreachable other skin's own mass across the walks, the governor-refusal's own trend prices the machine-unreachable governor-refusal skin's own mass across the walks, the goal-churn's own trend prices the machine-unreachable goal-churn skin's own mass across the walks, the unparsed's own trend prices the sweep's own unparsed junk mass across the walks, the walk goal-churn's own trend prices the walk-lane's own goal-churn mass across the walks, the walk total's own trend prices the walk-lane's own sum mass across the walks, the walk decide-timeout's own trend prices the walk-lane's own decide-timeout mass across the walks, the walk no-path's own trend prices the walk-lane's own no-path mass across the walks, the walk walk-timeout's own trend prices the walk-lane's own walk-timeout mass across the walks, the walk water-rescue's own trend prices the walk-lane's own water-rescue mass across the walks, the walk governor-refusal's own trend prices the walk-lane's own governor-refusal mass across the walks, the walk other's own trend prices the walk-lane's own other mass across the walks, the bank trip grant's own trend prices the bank chain's own grant mass across the faces, the walk fuel commons lane's own trend prices the walk-lane's own fuel commons lane's own mass across the walks, the bank chain's own defer trend prices the bank chain's own defer mass across the faces, the walk iron commune lane's own trend prices the walk-lane's own iron commune lane's own mass across the walks, the walk food commons lane's own trend prices the walk-lane's own food commons lane's own mass across the walks, the docket's own trip climb-refused trend prices the docket's own trip climb-refused verdict mass across the faces, the bank pocket's own defer trend prices the bank pocket's own defer mass across the faces, the climb-out tool recovery's own trend prices the climb-out book's own tool-recovery skin mass across the faces, the climb-out bank's own trend prices the climb-out book's own bank skin mass across the faces, the climb-out trip's own trend prices the climb-out book's own trip skin mass across the faces, the climb-out wood trip's own trend prices the climb-out book's own wood-trip skin mass across the faces, the climb-out food trip's own trend prices the climb-out book's own food-trip skin mass across the faces, the food trip docket's own trend prices the docket's own food trip verdict mass across the faces, the tunnel docket's own trend prices the docket's own tunnel verdict mass across the faces, the fuel commons docket's own trend prices the fuel commons' own raw docket mass across the faces, the food commons docket's own trend prices the food commons' own raw docket mass across the faces, the fuel anchor scan's own trend prices the fuel anchor scan's own mass across the faces, the sword docket's own trend prices the sword's own raw docket mass across the faces, the iron commune's own raw colon trend prices the iron commune's own raw colon mass across the faces, the bank's own raw colon trend prices the bank's own raw colon mass across the faces, the camp furnace's own trend prices the camp furnace's own mass across the faces, the spare pick's own colon trend prices the spare pick's own colon mass across the faces, the fuel anchor delivery's own trend prices the fuel anchor delivery's own mass across the faces, the spare pick due's own trend prices the spare pick due's own mass across the faces, the sword due's own trend prices the sword due's own mass across the faces, the recovery brake's own trend prices the recovery brake's own mass across the faces, the reloot's own trend prices the reloot's own mass across the faces, the final bank's own trend prices the final bank's own mass across the faces, the bank fallback's own trend prices the bank fallback's own mass across the faces, the death carry's own trend prices the death carry's own mass across the faces, the yard approach's own trend prices the yard approach's own mass across the faces, the tool upgrade due's own trend prices the tool upgrade due's own mass across the faces, the bank fallback's own nothing-to-deposit trend prices the bank fallback's own nothing-to-deposit mass across the faces, the steer tier defer's own trend prices the steer tier defer's own mass across the faces, the steer hazard tail's own trend prices the steer hazard tail's own mass across the faces, the bank fallback's own budget-exhausted trend prices the bank fallback's own budget-exhausted mass across the faces, the steer hazard defer's own trend prices the steer hazard defer's own mass across the faces, the bank fallback's own chest-unreachable trend prices the bank fallback's own chest-unreachable mass across the faces, the climb-out pre-position's own trend prices the climb-out book's own pre-position skin mass across the faces, the reconnect retry's own trend prices the link-stability front's own retry mass across the faces, the wet-wall yield's own trend prices the water's wall front's own yield mass across the faces, the bank budget clamp's own trend prices the bank chains crater front's own budget seat mass across the faces, the dusk bank front's own whys trend prices the write-off whys' own front mass across the faces, the sweep defer's own trend prices the sweep defer mass across the faces, the raw hop fail's own trend prices the raw hop fail mass across the faces, the smelt dry gamble's own trend prices the smelt dry gamble mass across the faces, the fuel commons' own dry grain trend prices the fuel commons' own dry grain mass across the faces, the tunnel sealed's own trend prices the tunnel's own sealed-or-flooded mass across the faces, the smelt machine walk's own nudge trend prices the walk nudge's own mass across the faces, the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the climb diag's own mass across the faces, the climb wet escape's own trend prices the climb wet escape's own mass across the faces, the deficits row's own trend prices the deficits row's own mass across the faces, the torch skip's own trend prices the torch skip's own mass across the faces, the smelt bands' own trend prices the smelt bands' own carries mass across the faces, the water pass's own trend prices the water pass's own mass across the faces, the pounce probe's own trend prices the pounce probe's own decline mass across the faces, the vein sweep's own trend prices the vein sweep's own mass across the faces, the dig shaft's own trend prices the dig shaft's own mass across the faces, the stick-drought rung's own trend prices the stick-drought rung's own mass across the faces, the resupply ask's own trend prices the resupply ask's own mass across the faces, the combat band's own trend prices the combat band's own mass across the faces, the transit launch's own trend prices the transit launch's own mass across the faces, the transit target's own trend prices the transit target's own shore book across the faces, the walk-intent record's own trend prices the walk-intent record's own mass across the faces, the hazard memorize's own trend prices the hazard board's own write mass across the faces, the ledger no-path record's own trend prices the ledger's no-path record's own mass across the faces, the ledger no-path save's own trend prices the ledger's no-path save's own mass across the faces, the tunnel steering's own trend prices the tunnel's steering verdict's own mass across the faces, the ledger dead-lid record's own trend prices the ledger's dead-lid record's own mass across the faces, this word prices the ledger's dead-lid save's own mass across the faces - the ledger dead-lid save seat, co-existence by seat never by duplication)"
const HEAD = 'the ledger dead-lid save trend (v0.976.218)'
const SWING = HEAD + ": the save's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the save's rise ran two steps deep - "
const SWELL_TAIL = " - the save's own swell " + TAIL
const FADE = HEAD + ": the save's fall ran two steps deep - "
const FADE_TAIL = " - the save's own fade " + TAIL

const rowOf = (b, p, c) => ledgerDeadLidSaveTrendRow({ back: { saves: b }, prev: { saves: p }, cur: { saves: c } })
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
  assert.strictEqual(ledgerDeadLidSaveTrendConsistent(null), false, 'null prices nothing')
  assert.strictEqual(ledgerDeadLidSaveTrendConsistent(undefined), false)
  assert.strictEqual(ledgerDeadLidSaveTrendConsistent('junk'), false)
  assert.strictEqual(ledgerDeadLidSaveTrendConsistent(42), false)
  assert.strictEqual(ledgerDeadLidSaveTrendConsistent([]), false, 'the array never proves')
  assert.strictEqual(ledgerDeadLidSaveTrendConsistent({}), false)
  assert.strictEqual(ledgerDeadLidSaveTrendConsistent({ back: { saves: 1 }, prev: { saves: 2 } }), false, 'the cur missing never proves')
  assert.strictEqual(ledgerDeadLidSaveTrendConsistent({ prev: { saves: 2 }, cur: { saves: 3 } }), false, 'the back missing never proves')
  assert.strictEqual(ledgerDeadLidSaveTrendConsistent({ back: { saves: 1 }, prev: { saves: 2 }, cur: { saves: 3 } }), true)
  assert.strictEqual(ledgerDeadLidSaveTrendConsistent({ back: { saves: 0 }, prev: { saves: 0 }, cur: { saves: 0 } }), true, 'the zero is lawful - the drought the fence keeps')
  assert.strictEqual(ledgerDeadLidSaveTrendConsistent({ back: { saves: -1 }, prev: { saves: 2 }, cur: { saves: 3 } }), false, 'the negative count never proves')
  assert.strictEqual(ledgerDeadLidSaveTrendConsistent({ back: { saves: 1.5 }, prev: { saves: 2 }, cur: { saves: 3 } }), false, 'the float never proves')
  assert.strictEqual(ledgerDeadLidSaveTrendConsistent({ back: { saves: '3' }, prev: { saves: 2 }, cur: { saves: 3 } }), false, 'the string count never proves')
  assert.strictEqual(ledgerDeadLidSaveTrendConsistent({ back: { saves: 1, junk: 'x' }, prev: { saves: 2, junk: 'y' }, cur: { saves: 3, junk: 'z' } }), true, 'extra keys never rejected - the fence prices the cell alone')
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
  assert.strictEqual(rowOf({ back: { saves: 1 }, prev: { saves: 'x' }, cur: { saves: 3 } }), null, 'the fence junk the row null')
})

// ===== THE FIELD'S OWN TABLE (the honest window) =====
const SERIES = [[407, 0], [408, 2], [409, 0], [411, 0], [412, 2], [413, 0], [414, 0], [448, 0], [449, 0], [450, 0], [451, 1], [452, 0], [453, 0]]
const T = Object.fromEntries(SERIES)
const ORDER = SERIES.map(s => s[0])
const winOf = (f) => {
  const i = ORDER.indexOf(f)
  return [T[ORDER[i - 2]], T[ORDER[i - 1]], T[f]]
}
const tallyWindow = (f) => classify(...winOf(f))
const winArc = (f) => arcOf(...winOf(f))
const winRow = (f) => rowOf(...winOf(f))

test('the field table pins: 5u the thirteen faces own total, the honest window', () => {
  const sum = ORDER.reduce((a, f) => a + T[f], 0)
  assert.strictEqual(sum, 5, 'THE FIELD 5u the thirteen faces own total - THE SPARSEST SIBLING THE BOOK HOLDS')
  assert.strictEqual(ORDER.length, 13, 'the field thirteen faces deep (407..414 + 448..453)')
  assert.deepStrictEqual(ORDER, [407, 408, 409, 411, 412, 413, 414, 448, 449, 450, 451, 452, 453], 'the honest gaps ride the ORDER - the absent 410 and 415..447 spans')
  const top = ORDER.filter(f => T[f] === 2)
  assert.deepStrictEqual(top, [408, 412], 'THE FIELD OWN TOP THE COUNT 2 rode TWICE - the faces 408 and 412 own crests the weight-2 mirrors ride')
  const floor = ORDER.filter(f => T[f] === 0)
  assert.strictEqual(floor.length, 10, 'THE FIELD OWN FLOOR THE COUNT 0 rode TEN TIMES - the droughts the family own sparsest skin the honest face prices')
})

test('the field book: THREE of ELEVEN windows speaking - three swings, zero swells, zero fades, the eight honest silences', () => {
  const shapes = {}
  for (let i = 2; i < ORDER.length; i++) {
    const s = classify(T[ORDER[i - 2]], T[ORDER[i - 1]], T[ORDER[i]])
    shapes[s] = (shapes[s] || 0) + 1
  }
  assert.strictEqual(shapes.swing, 3, 'the field book THREE swings')
  assert.strictEqual(shapes.swell, undefined, 'the field book ZERO swells')
  assert.strictEqual(shapes.fade, undefined, 'the field book ZERO fades')
  assert.strictEqual(shapes.silence, 8, 'the field book the EIGHT honest silences')
  assert.strictEqual(ORDER.length - 2, 11, 'eleven windows whole')
  assert.strictEqual((shapes.swing || 0) + (shapes.swell || 0) + (shapes.fade || 0), 3, 'the field book THREE of ELEVEN windows speaking')
})

test('the field windows byte-exact: the swings and the silences', () => {
  // the weight-2 mirror
  assert.strictEqual(tallyWindow(409), 'swing', 'the W(407,408,409) the swing')
  assert.strictEqual(winArc(409), '0 -> 2 (+2) -> 0 (-2)', 'the W409 arc byte-exact')
  assert.strictEqual(winRow(409), SWING + '0 -> 2 (+2) -> 0 (-2)' + SWING_TAIL, 'the W409 row byte-exact')
  // the held pairs - the honest silences
  assert.strictEqual(tallyWindow(411), 'silence', 'the W(408,409,411) the held second step the honest silence')
  assert.strictEqual(winRow(411), null, 'the W411 row the honest null')
  assert.strictEqual(tallyWindow(412), 'silence', 'the W(409,411,412) the held first step the honest silence')
  assert.strictEqual(winRow(412), null, 'the W412 row the honest null')
  // the weight-2 mirror's own twin
  assert.strictEqual(tallyWindow(413), 'swing', 'the W(411,412,413) the swing')
  assert.strictEqual(winArc(413), '0 -> 2 (+2) -> 0 (-2)', 'the W413 arc byte-exact - the twin mirror rides')
  assert.strictEqual(winRow(413), SWING + '0 -> 2 (+2) -> 0 (-2)' + SWING_TAIL, 'the W413 row byte-exact')
  // the drought span the gap-crossing windows price (the absent 415..447 span the array-position read prices - the .206 honest fix the law rides)
  assert.strictEqual(tallyWindow(448), 'silence', 'the W(413,414,448) the gap-crossing all-zero held the honest silence')
  assert.strictEqual(winRow(448), null, 'the W448 row the honest null')
  assert.strictEqual(tallyWindow(449), 'silence', 'the W(414,448,449) the honest silence')
  assert.strictEqual(tallyWindow(450), 'silence', 'the W(448,449,450) the honest silence')
  assert.strictEqual(winRow(450), null, 'the W450 row the honest null')
  assert.strictEqual(tallyWindow(451), 'silence', 'the W(449,450,451) the held first step the honest silence')
  assert.strictEqual(winRow(451), null, 'the W451 row the honest null')
  // MY WORD'S OWN FIRST LIVE READ - the newest swing the field prices
  assert.strictEqual(tallyWindow(452), 'swing', 'the W(450,451,452) the newest swing')
  assert.strictEqual(winArc(452), '0 -> 1 (+1) -> 0 (-1)', 'the W452 arc byte-exact')
  assert.strictEqual(winRow(452), SWING + '0 -> 1 (+1) -> 0 (-1)' + SWING_TAIL, 'the W452 row byte-exact - MY FIRST LIVE READ')
  // the newest window the held second step the honest silence prices
  assert.strictEqual(tallyWindow(453), 'silence', 'the W(451,452,453) the held second step the honest silence')
  assert.strictEqual(winRow(453), null, 'the W453 row the honest null')
})

test('the round trips: the THREE the weight mirrors ride - every speaking window a round trip', () => {
  const rts = []
  for (let i = 2; i < ORDER.length; i++) {
    const b = T[ORDER[i - 2]], c = T[ORDER[i]]
    if (b === c && classify(T[ORDER[i - 2]], T[ORDER[i - 1]], T[ORDER[i]]) !== 'silence') rts.push(ORDER[i])
  }
  assert.deepStrictEqual(rts, [409, 413, 452], 'the field round trips the THREE - the weight-2 twins 0 -> 2 (+2) -> 0 (-2) and the weight-1 mirror 0 -> 1 (+1) -> 0 (-1) the field prices (the record word own TWO the .216 seat prices beside - the lanes never merge)')
})

test("the bounds' own legs: the +2 and the -2 the twins ride TWICE each", () => {
  let maxRise = -Infinity, maxFall = Infinity, riseLegs = 0, fallLegs = 0
  const riseB = [], fallB = []
  for (let j = 1; j < ORDER.length; j++) {
    const leg = T[ORDER[j]] - T[ORDER[j - 1]]
    if (leg > maxRise) { maxRise = leg; riseLegs = 1; riseB.length = 0; riseB.push(`${ORDER[j - 1]}/${ORDER[j]}`) } else if (leg === maxRise) { riseLegs++; riseB.push(`${ORDER[j - 1]}/${ORDER[j]}`) }
    if (leg < maxFall) { maxFall = leg; fallLegs = 1; fallB.length = 0; fallB.push(`${ORDER[j - 1]}/${ORDER[j]}`) } else if (leg === maxFall) { fallLegs++; fallB.push(`${ORDER[j - 1]}/${ORDER[j]}`) }
  }
  assert.strictEqual(maxRise, 2, 'the +2 the max rise the field prices')
  assert.strictEqual(riseLegs, 2, 'the +2 rode TWO boundaries - THE TWINS OWN CLIMB the quiet paid whole 0 -> 2 twice')
  assert.deepStrictEqual(riseB, ['407/408', '411/412'], 'the climb boundaries byte-exact')
  assert.strictEqual(maxFall, -2, 'the -2 the max fall the field prices')
  assert.strictEqual(fallLegs, 2, 'the -2 rode TWO boundaries - THE TWINS OWN DRAIN the crest paid whole 2 -> 0 twice')
  assert.deepStrictEqual(fallB, ['408/409', '412/413'], 'the drain boundaries byte-exact')
})

// ===== THE REUSE LAW OVER THE REAL SHAPES (one-parser, never a fork) =====
test('the census fold rides the dead-lid save cell over the real emitter shapes', () => {
  // the REAL face-451-era lines byte-honest (the held fleet19 log prices)
  const face451 = [
    'F6 [F6] chest skip (dead lid cached 2s ago at [-150,72,384])',
    'F4 [F4] chest skip (dead lid cached 7s ago at [-143,73,405])',
    'F12 [F12] dead-lid ledger: chest at [-149,72,400] cached for the fleet (1 live, ttl 15s)'
  ]
  const book = ledgerRecordBook(face451)
  assert.strictEqual(book.families['dead-lid'].saves, 2, "the face's own save cell rides whole (the two consult-skips)")
  assert.strictEqual(book.families['dead-lid'].records, 1, 'the record beside co-exists - the census prices both cells')
  const fold = (ls) => ({ saves: ledgerRecordBook(ls) ? ledgerRecordBook(ls).families['dead-lid'].saves : 0 })
  assert.deepStrictEqual(fold(face451), { saves: 2 }, 'the fold the word rides reads the SAME cell')
  // the age forms both ride
  assert.strictEqual(fold(['F8 [F8] chest skip (dead lid cached 1s ago at [-147,81,411])']).saves, 1, 'the fresh age rides')
  assert.strictEqual(fold(['F8 [F8] chest skip (dead lid cached 89s ago at [-147,81,411])']).saves, 1, 'the old age rides')
})

test('the lanes never merge: the dead-lid record and the sibling families never ride the save cell', () => {
  const fold = (ls) => {
    const b = ledgerRecordBook(ls)
    return b ? b.families['dead-lid'].saves : 0
  }
  // the dead-lid RECORD never rides (the family's own OTHER cell - the .216 seat)
  assert.strictEqual(fold(['F12 [F12] dead-lid ledger: chest at [-149,72,400] cached for the fleet (1 live, ttl 15s)']), 0, 'the dead-lid record never rides the save cell')
  // the no-path records never ride (the .213 seat)
  assert.strictEqual(fold(['F2 [F2] no-path ledger: chest at [1,2,3] cached for the fleet (1 live, ttl 15s)']), 0, 'the no-path record never rides')
  // the no-path saves never ride (the .214 seat)
  assert.strictEqual(fold(['F4 [F4] chest skip (no path cached 3s ago at [-143,73,405])']), 0, 'the no-path save never rides')
  // the full-chest records never ride
  assert.strictEqual(fold(['F3 [F3] full-chest ledger: chest at [4,5,6] cached for the fleet (2 live, ttl 180s)']), 0, 'the full-chest record never rides')
  // the walk-intent records never ride (the .211 seat)
  assert.strictEqual(fold(['F5 [F5] walk-intent: chest at [7,8,9] held for the fleet (1 live, ttl 90s)']), 0, 'the walk-intent record never rides')
  // the full-chest skip never rides (the out-of-scope skip the book holds out)
  assert.strictEqual(fold(['F7 [F7] chest skip (full chest cached 3s ago at [-143,73,405])']), 0, 'the full-chest skip never rides')
})

test('the junk battery: the truncated and the malformed never join the book', () => {
  const fold = (ls) => {
    const b = ledgerRecordBook(ls)
    return b ? b.families['dead-lid'].saves : 0
  }
  assert.strictEqual(fold(['F4 [F4] chest skip (dead lid cached 3s ago at [-143,73,405]']), 0, 'the truncated form never rides')
  assert.strictEqual(fold(['chest skip']), 0, 'the bare words never ride')
  assert.strictEqual(fold(['F [F] chest skip (dead lid cached 3s ago at [-143,73,405])']), 0, 'the bot-less form never rides')
  assert.strictEqual(fold(['F4 [F4] chest skip (dead lid cached xs ago at [-143,73,405])']), 0, 'the non-numeric age never rides')
  assert.strictEqual(fold(['F4 [F4] chest skip (dead lid cached 3s ago at [x,y,z])']), 0, 'the non-numeric cell never rides')
  assert.strictEqual(fold(['other: log line']), 0, 'the alien line never rides')
})

// ===== THE BYTE-PIN: the row never speaks the verdict words =====
test('the byte-pin: the row never speaks the seats own verdict words', () => {
  const row = rowOf(0, 2, 0)
  for (const banned of ['owns', 'dynasty', 'return', 'repeat', 'stay']) {
    assert.ok(!row.includes(banned), `the row never speaks '${banned}' - co-existence by seat never by duplication`)
  }
  assert.ok(row.startsWith(HEAD), 'the row rides the head byte-exact')
  assert.ok(row.endsWith(TAIL), 'the row rides the tail byte-exact')
})
