// tests/unit/smeltunreachabletrend.test.mjs - THE SMELT UNREACHABLE'S
// OWN TREND's own pin battery (v0.976.116): the field's own chains
// byte-exact, the honest silences, the byte-pin battery, the fence
// battery, the class's own read, the one-parser ride through the
// anatomy's own segs cell (the machine skin the ledger's own whys
// cell never holds - the cells never merge, the same refusal lines).
import { smeltUnreachableOfAnatomy, smeltUnreachableTrendConsistent, smeltUnreachableTrendRow } from '../../src/lib/smeltunreachabletrend.mjs'
import { smeltRefusalAnatomy } from '../../src/lib/smelthold.mjs'
import { smeltLedger } from '../../src/lib/smeltledger.mjs'
import assert from 'node:assert'

const TAIL = "(the sweep's own seat prices which close class the book holds within one face, the chest's own close prices the yard's own drought within one face, the rent's own seat prices the last mile's own band within one face, the dry read's own clock prices the dry reads' own thirds within one face, the tithe's own clock prices the inflow's own thirds within one face, the starvation's own grand total prices the decide lanes' own sum, the sweeps' own trend prices the sweeps' own mass across the walks, the torch lane's own trend prices the ask's own lane's mass across the walks, the smelt lane's own trend prices the unasked visit's own lane's mass across the walks, the asks' own trend prices the request book's own mass across the walks, the delivered's own trend prices the yield book's own mass across the walks, the budget's own trend prices the wall book's own mass across the walks, the exhaust's own trend prices the tail book's own mass across the walks, the ghost's own trend prices the lie book's own mass across the walks, the no chest's own trend prices the range book's own mass across the walks, the clip's own trend prices the clips' own mass across the walks, the batch's own trend prices the batch's own census across the walks, the announced's own trend prices the batch's own size across the walks, the asked's own trend prices the clips' own demand across the walks, the refusal's own trend prices the refusal's own book across the walks, the debt's own trend prices the debt's own mass across the walks, the no fuel's own trend prices the fuel drought's own class across the walks, the no smelt's own trend prices the input drought's own class across the walks, the completions' own trend prices the completions' own mass across the walks, the took's own trend prices the took's own census across the walks, the payback's own trend prices the payback's own census across the walks, the payback unit's own trend prices the payback's own size across the walks, this word prices the smelt refusal anatomy's unreachable class across the walks, co-existence by seat never by duplication)"

// THE FIELD'S OWN CHAINS BYTE-EXACT - the priced field 348..382 (the
// anatomy's own arithmetic: 4, 2, 1, 15, 12, 16, 33, 1, 14, 7, 0,
// 1, 11, 20, 11, 6, 23, 17, 5, 7, 13, 5, 18, 23, 23, 18, 16, 5,
// 10, 7, 14, 12, 8, 18, 16 - the count left zero ONCE the face 358
// the drought the walk's own truce, THE FIELD'S OWN TOP 33 THE FACE
// 354 COUNT, the +17 the field's own biggest single step THE TWIN
// the face 354's own 16 -> 33 and the face 364's own 6 -> 23, the
// -32 the field's own biggest fall the face 355's own collapse) -
// the word born speaking THIRTY-ONE windows deep (nineteen swings +
// five swells + seven fades) with the TWO honest silences beside.
const P = { 348: 4, 349: 2, 350: 1, 351: 15, 352: 12, 353: 16, 354: 33, 355: 1, 356: 14, 357: 7, 358: 0, 359: 1, 360: 11, 361: 20, 362: 11, 363: 6, 364: 23, 365: 17, 366: 5, 367: 7, 368: 13, 369: 5, 370: 18, 371: 23, 372: 23, 373: 18, 374: 16, 375: 5, 376: 10, 377: 7, 378: 14, 379: 12, 380: 8, 381: 18, 382: 16 }
const w = (f) => smeltUnreachableTrendRow({ back: { smeltUnreachable: P[f - 2] }, prev: { smeltUnreachable: P[f - 1] }, cur: { smeltUnreachable: P[f] } })
const chains = {}
for (let f = 350; f <= 382; f++) chains[f] = w(f)

// the FACE 350 chain the fade - the word's own birth ride
assert.equal(chains[350], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's fall ran two steps deep - 4 -> 2 (-2) -> 1 (-1) - the smelt unreachable's own fade " + TAIL)
// the FACE 351..353 chains the swings
assert.equal(chains[351], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 2 -> 1 (-1) -> 15 (+14) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[352], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 1 -> 15 (+14) -> 12 (-3) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[353], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 15 -> 12 (-3) -> 16 (+4) - the rise and the fall traded seats between the walks " + TAIL)
// THE SWELL - the FACE 354 chain (the twin's own first step, the
// +17 the field's own biggest single step, THE FIELD'S OWN TOP 33)
assert.equal(chains[354], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's rise ran two steps deep - 12 -> 16 (+4) -> 33 (+17) - the smelt unreachable's own swell " + TAIL)
// the collapse's own round trip - the FACE 355 chain the swing (the
// -32 the field's own biggest fall)
assert.equal(chains[355], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 16 -> 33 (+17) -> 1 (-32) - the rise and the fall traded seats between the walks " + TAIL)
// the FACE 356/357 chains the swings
assert.equal(chains[356], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 33 -> 1 (-32) -> 14 (+13) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[357], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 1 -> 14 (+13) -> 7 (-7) - the rise and the fall traded seats between the walks " + TAIL)
// THE DROUGHT - the FACE 358 chain the fade (the field's own only
// zero)
assert.equal(chains[358], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's fall ran two steps deep - 14 -> 7 (-7) -> 0 (-7) - the smelt unreachable's own fade " + TAIL)
// the drought's own exit - the FACE 359 chain the swing (the zero a
// lawful count)
assert.equal(chains[359], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 7 -> 0 (-7) -> 1 (+1) - the rise and the fall traded seats between the walks " + TAIL)
// THE SWELLS - the FACE 360/361 chains (the rebuild's own build)
assert.equal(chains[360], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's rise ran two steps deep - 0 -> 1 (+1) -> 11 (+10) - the smelt unreachable's own swell " + TAIL)
assert.equal(chains[361], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's rise ran two steps deep - 1 -> 11 (+10) -> 20 (+9) - the smelt unreachable's own swell " + TAIL)
// the full round trip - the FACE 362 chain the swing
assert.equal(chains[362], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 11 -> 20 (+9) -> 11 (-9) - the rise and the fall traded seats between the walks " + TAIL)
// the FACE 363 chain the fade
assert.equal(chains[363], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's fall ran two steps deep - 20 -> 11 (-9) -> 6 (-5) - the smelt unreachable's own fade " + TAIL)
// the twin's own second step - the FACE 364 chain the swing (the
// second +17)
assert.equal(chains[364], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 11 -> 6 (-5) -> 23 (+17) - the rise and the fall traded seats between the walks " + TAIL)
// the FACE 365..367 chains
assert.equal(chains[365], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 6 -> 23 (+17) -> 17 (-6) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[366], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's fall ran two steps deep - 23 -> 17 (-6) -> 5 (-12) - the smelt unreachable's own fade " + TAIL)
assert.equal(chains[367], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 17 -> 5 (-12) -> 7 (+2) - the rise and the fall traded seats between the walks " + TAIL)
// THE SWELL - the FACE 368 chain
assert.equal(chains[368], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's rise ran two steps deep - 5 -> 7 (+2) -> 13 (+6) - the smelt unreachable's own swell " + TAIL)
// the FACE 369/370 chains the swings
assert.equal(chains[369], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 7 -> 13 (+6) -> 5 (-8) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[370], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 13 -> 5 (-8) -> 18 (+13) - the rise and the fall traded seats between the walks " + TAIL)
// THE SWELL - the FACE 371 chain
assert.equal(chains[371], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's rise ran two steps deep - 5 -> 18 (+13) -> 23 (+5) - the smelt unreachable's own swell " + TAIL)
// the summit's own wait - the FACE 372/373 held pair (the honest
// silences)
assert.equal(chains[372], null)
assert.equal(chains[373], null)
// the FACE 374/375 chains the fades
assert.equal(chains[374], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's fall ran two steps deep - 23 -> 18 (-5) -> 16 (-2) - the smelt unreachable's own fade " + TAIL)
assert.equal(chains[375], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's fall ran two steps deep - 18 -> 16 (-2) -> 5 (-11) - the smelt unreachable's own fade " + TAIL)
// the FACE 376..379 chains the swings
assert.equal(chains[376], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 16 -> 5 (-11) -> 10 (+5) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[377], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 5 -> 10 (+5) -> 7 (-3) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[378], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 10 -> 7 (-3) -> 14 (+7) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(chains[379], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 7 -> 14 (+7) -> 12 (-2) - the rise and the fall traded seats between the walks " + TAIL)
// the FACE 380 chain the fade
assert.equal(chains[380], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's fall ran two steps deep - 14 -> 12 (-2) -> 8 (-4) - the smelt unreachable's own fade " + TAIL)
// the FACE 381 chain the swing
assert.equal(chains[381], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 12 -> 8 (-4) -> 18 (+10) - the rise and the fall traded seats between the walks " + TAIL)
// THE WORD'S OWN LIVE WINDOW - the FACE 382 chain the swing
assert.equal(chains[382], "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 8 -> 18 (+10) -> 16 (-2) - the rise and the fall traded seats between the walks " + TAIL)
// the tally: nineteen swings + five swells + seven fades = thirty-
// one speaking, the two honest silences beside
let speaking = 0
for (let f = 350; f <= 382; f++) if (chains[f] !== null) speaking++
assert.equal(speaking, 31)
assert.equal(chains[372], null)
assert.equal(chains[373], null)

// the held steps ride the same law (the clean trio beside the
// field's own held pair)
assert.equal(smeltUnreachableTrendRow({ back: { smeltUnreachable: 2 }, prev: { smeltUnreachable: 2 }, cur: { smeltUnreachable: 3 } }), null)
assert.equal(smeltUnreachableTrendRow({ back: { smeltUnreachable: 2 }, prev: { smeltUnreachable: 3 }, cur: { smeltUnreachable: 3 } }), null)
assert.equal(smeltUnreachableTrendRow({ back: { smeltUnreachable: 3 }, prev: { smeltUnreachable: 3 }, cur: { smeltUnreachable: 0 } }), null)
assert.equal(smeltUnreachableTrendRow({ back: { smeltUnreachable: 0 }, prev: { smeltUnreachable: 0 }, cur: { smeltUnreachable: 0 } }), null)

// THE BYTE-PIN BATTERY - the trend row never speaks the shape's
// own verdict words (no return, no repeat, no stay, no run) nor
// the seats' own verdict word (no owns) nor the dynasty's own
// (no dynasty, no turn) - across every branch
for (const row of [chains[350], chains[354], chains[355], chains[358], chains[359], chains[362], chains[364], chains[371], chains[375], chains[382]]) {
  assert.ok(!row.includes('return'))
  assert.ok(!row.includes('repeat'))
  assert.ok(!row.includes('stay'))
  assert.ok(!row.includes('run '))
  assert.ok(!row.includes('owns '))
  assert.ok(!row.includes('dynasty'))
  assert.ok(!row.includes('turn'))
  assert.ok(row.includes('co-existence by seat never by duplication'))
}

// THE FENCE BATTERY - a fold that cannot prove itself prices
// nothing (the fence law: the word never rides a lie); the ZERO
// count is lawful (the smelt lane's own zero precedent v0.976.90
// - the field's own face 358 the proof)
assert.equal(smeltUnreachableTrendRow(null), null)
assert.equal(smeltUnreachableTrendRow(undefined), null)
assert.equal(smeltUnreachableTrendRow('machine unreachable'), null)
assert.equal(smeltUnreachableTrendRow([1, 2, 3]), null)
assert.equal(smeltUnreachableTrendRow({ back: { smeltUnreachable: 1.5 }, prev: { smeltUnreachable: 0 }, cur: { smeltUnreachable: 0 } }), null)
assert.equal(smeltUnreachableTrendRow({ back: { smeltUnreachable: -1 }, prev: { smeltUnreachable: 0 }, cur: { smeltUnreachable: 0 } }), null)
assert.equal(smeltUnreachableTrendRow({ back: { smeltUnreachable: 1 }, prev: { smeltUnreachable: '2' }, cur: { smeltUnreachable: 0 } }), null)
assert.equal(smeltUnreachableTrendRow({ back: { smeltUnreachable: 1 }, prev: { smeltUnreachable: 2 } }), null)
assert.equal(smeltUnreachableTrendRow({ back: null, prev: { smeltUnreachable: 2 }, cur: { smeltUnreachable: 0 } }), null)
assert.equal(smeltUnreachableTrendRow({ back: { smeltUnreachable: 1 }, prev: { smeltUnreachable: 0 }, cur: { smeltUnreachable: 1 } }), "the smelt unreachable's own trend (v0.976.116): the smelt unreachable's own swing - 1 -> 0 (-1) -> 1 (+1) - the rise and the fall traded seats between the walks " + TAIL)
assert.equal(smeltUnreachableTrendConsistent({ back: { smeltUnreachable: 0 }, prev: { smeltUnreachable: 0 }, cur: { smeltUnreachable: 0 } }), true)
assert.equal(smeltUnreachableTrendConsistent({ back: { smeltUnreachable: 0 }, prev: { smeltUnreachable: 0 }, cur: { smeltUnreachable: 0.5 } }), false)

// THE FENCE NEVER REJECTS EXTRA KEYS - the family's own ride law
assert.equal(smeltUnreachableTrendRow({ back: { smeltUnreachable: 8, extra: true }, prev: { smeltUnreachable: 18 }, cur: { smeltUnreachable: 16 } }), chains[382])
assert.equal(smeltUnreachableTrendConsistent({ back: { smeltUnreachable: 0 }, prev: { smeltUnreachable: 0 }, cur: { smeltUnreachable: 0 }, extra: 7 }), true)

// THE CLASS'S OWN READ - the anatomy's segs.unreachable cell; a
// multi-skin refusal rides each of its voices; the unknown shapes
// read zero (the zero a lawful count)
assert.equal(smeltUnreachableOfAnatomy(smeltRefusalAnatomy(['F2 smelt: 0 (raw_copper@blast_furnace: machine unreachable (No path to the goal!))'])), 1)
assert.equal(smeltUnreachableOfAnatomy(smeltRefusalAnatomy(['F2 smelt: 0 (nothing to smelt)', 'F2 smelt: 0 (cobblestone@furnace: no fuel)', 'F2 smelt: 0 (cobblestone@furnace: busy; oak_log@furnace: busy cold)'])), 0)
assert.equal(smeltUnreachableOfAnatomy({}), 0)
assert.equal(smeltUnreachableOfAnatomy(undefined), 0)
assert.equal(smeltUnreachableOfAnatomy(null), 0)
assert.equal(smeltUnreachableOfAnatomy(42), 0)
assert.equal(smeltUnreachableOfAnatomy([]), 0)
assert.equal(smeltUnreachableOfAnatomy({ segs: null }), 0)
assert.equal(smeltUnreachableOfAnatomy({ segs: {} }), 0)
assert.equal(smeltUnreachableOfAnatomy({ segs: { unreachable: -2 } }), 0)
assert.equal(smeltUnreachableOfAnatomy({ segs: { unreachable: 1.5 } }), 0)

// THE MULTI-SKIN VOICE RIDE - a compound refusal rides each of its
// voices (the anatomy's own counting law: the no fuel AND the
// unreachable both price the one line's own segments)
const ms = smeltRefusalAnatomy(['F2 smelt: 0 (cobblestone@furnace: no fuel; oak_log@furnace: machine unreachable (No path to the goal!))'])
assert.equal(ms.segs['no-fuel'], 1)
assert.equal(ms.segs.unreachable, 1)
assert.equal(ms.multi, 1)

// THE CLASS EXCLUSIVITY - the nothing, the no fuel, the busy and
// the timeout classes never join the unreachable's own count
const cls = smeltRefusalAnatomy([
  'F2 smelt: 0 (nothing to smelt)',
  'F9 smelt: 0 (cobblestone@furnace: no fuel)',
  'F8 smelt: 0 (cobblestone@furnace: busy; oak_log@furnace: busy cold)',
  'F19 smelt: 0 (timeout; sand@furnace: no fuel)'
])
assert.equal(cls.segs.nothing, 1)
assert.equal(cls.segs['no-fuel'], 2)
assert.equal(cls.segs.busy, 2)
assert.equal(cls.segs.timeout, 1)
assert.equal(cls.segs.unreachable, 0)

// ONE-PARSER RIDE - the SAME refusal lines ride TWO cells and the
// cells never merge: the ledger's own whys cell never holds the
// machine skin (SMELT_REFUSAL_RE stops at the FIRST closing paren -
// the nested parens break the match), the anatomy's own segs cell
// holds the class verbatim (the last-paren anchor) - the blindness
// the seat's own reason, the same corpus the proof
const corpus = [
  'F2 smelt: 0 (nothing to smelt)',
  'F2 smelt: 0 (cobblestone@furnace: no fuel)',
  'F2 smelt: 0 (cobblestone@furnace: no fuel; oak_log@furnace: machine unreachable (No path to the goal!))',
  'F2 smelt: 0 (raw_copper@blast_furnace: machine unreachable (No path to the goal!))',
  'F2 smelt: 0 (oak_log@furnace: machine unreachable (visit budget spent (walk slice)))',
  'F2 smelt: 0 (cobblestone@furnace: machine unreachable (walk governor: bot churned 4 goals without progress - walk to furnace refused for 12s))',
  'F2 smelt: 0 (cobblestone@furnace: busy; sand@furnace: machine unreachable (Took to long to decide path to goal!))'
]
const led = smeltLedger(corpus)
const ana = smeltRefusalAnatomy(corpus)
assert.equal(led.refusals, 2)
assert.equal(noLedgerMachineSkin(led.refusalWhys), true)
assert.equal(ana.refusals, 7)
assert.equal(ana.segs.unreachable, 5)
assert.equal(ana.multi, 2)
assert.equal(smeltUnreachableOfAnatomy(ana), 5)

// noLedgerMachineSkin - the ledger's whys hold no machine-unreachable
// key (the whys cell's own blindness, asserted the honest way)
function noLedgerMachineSkin (whys) {
  for (const k in whys) {
    if (Object.prototype.hasOwnProperty.call(whys, k) && k.includes('machine unreachable')) return false
  }
  return true
}

// THE CARRIER'S OWN RIDE - three anatomy folds through the SAME
// parser ride the row byte-exact (the F382 live window's own shape
// 8 -> 18 -> 16 the word's own birth window rides)
const mk = (n, seed) => {
  const lines = []
  for (let i = 0; i < n; i++) lines.push(`F${(i % 19) + 1} smelt: 0 (b${(i + seed) % 19}@furnace: machine unreachable (No path to the goal!))`)
  return lines
}
const foldA = (lines) => smeltUnreachableOfAnatomy(smeltRefusalAnatomy(lines))
const ride = smeltUnreachableTrendRow({ back: { smeltUnreachable: foldA(mk(8, 0)) }, prev: { smeltUnreachable: foldA(mk(18, 3)) }, cur: { smeltUnreachable: foldA(mk(16, 7)) } })
assert.equal(ride, chains[382])
assert.equal(foldA(mk(0, 0)), 0)
