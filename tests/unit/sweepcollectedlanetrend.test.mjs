import assert from 'node:assert'
import { sweepCollectedLaneCount, sweepCollectedLaneTrendConsistent, sweepCollectedLaneTrendRow } from '../../src/lib/sweepcollectedlanetrend.mjs'

// (v0.976.232) THE SWEEP COLLECTED LANE'S OWN TREND - the byte-pin
// battery: the nine faces the artifact fetches re-spoke, the windows
// and the bounds the field proof prices
// (scripts/fieldread-sweepcollected-1842.mjs, 9/9 census==raw zero
// mismatches).

// === THE CENSUS GRAMMAR (the strict law: the collected lane alone) ===
assert.strictEqual(sweepCollectedLaneCount(null), 0)
assert.strictEqual(sweepCollectedLaneCount(undefined), 0)
assert.strictEqual(sweepCollectedLaneCount('not an array'), 0)
assert.strictEqual(sweepCollectedLaneCount([42, null, {}]), 0)
assert.strictEqual(sweepCollectedLaneCount([]), 0)
// the THREE skins the lane prints ride (the lane law: every line the
// lane prints rides whole whatever the skin's name)
assert.strictEqual(sweepCollectedLaneCount(['F2 sweep: collected 2 (copper_ingot:2)']), 1) // the yield skin
assert.strictEqual(sweepCollectedLaneCount(['F3 sweep: collected 12 (stone:7 dirt:5)']), 1) // the multi-item top
assert.strictEqual(sweepCollectedLaneCount(['F11 sweep: 0 collected (15 idle-empty machines)']), 1) // the zero paren skin
assert.strictEqual(sweepCollectedLaneCount(['F5 sweep: 0 collected (1 idle-empty machine)']), 1) // the singular machine
assert.strictEqual(sweepCollectedLaneCount(['F1 sweep: 0 collected']), 1) // the bare zero
assert.strictEqual(sweepCollectedLaneCount(['F11 sweep: 0 collected - busy x1, machine unreachable (walk to a machine (sweep): timeout after 2935ms) x1']), 1) // the zero histogram skin
assert.strictEqual(sweepCollectedLaneCount(['F3 sweep: 0 collected - machine unreachable (Took to long to decide path to goal!) x5']), 1) // the decide-timeout skin
assert.strictEqual(sweepCollectedLaneCount(['F3 sweep: 0 collected - machine unreachable (No path to the goal!) x1, sweep deferred (the lanes hold) x1']), 1) // the defer histogram
// the sweep's OTHER lines never ride
assert.strictEqual(sweepCollectedLaneCount(['F11 sweeps 12 (torch lane 3 / smelt lane 9)']), 0) // the summary line the sweeptrend seat prices
assert.strictEqual(sweepCollectedLaneCount(['F9 [F9] vein sweep: the drop walk to [-142,56,420] failed - doomed goal (ledgered 44s ago at [-143,56,419]) - sweep drops refused (dy -2.0, range 2)']), 0) // the vein sweep lane
assert.strictEqual(sweepCollectedLaneCount(['F6 bank: chest unreachable (No path to the goal!) (51 blocks from yard) - walking back']), 0)
assert.strictEqual(sweepCollectedLaneCount(['F1 final bank: +132']), 0)
assert.strictEqual(sweepCollectedLaneCount(['F3 sweep deferred (the lanes hold)']), 0) // the defer lane's own print
// no bot tag never rides (the lane's own skin the emitter holds)
assert.strictEqual(sweepCollectedLaneCount(['sweep: 0 collected']), 0)
// two bot tags never ride, the prefix must be the line head (the byte law)
assert.strictEqual(sweepCollectedLaneCount(['  F1 sweep: 0 collected']), 0)
// the grammar's own edges: the count word and the collected word are
// the lane's own pair - no drift rides
assert.strictEqual(sweepCollectedLaneCount(['F2 sweep: collected']), 0) // the count never missing
assert.strictEqual(sweepCollectedLaneCount(['F2 sweep: 0 collectedx']), 0) // the word never drifts
assert.strictEqual(sweepCollectedLaneCount(['F2 sweep: 1 collected (stone:1)']), 0) // the count-first hybrid never prints - the zero form's own word the '0' pins
// uppercase bot tag never rides
assert.strictEqual(sweepCollectedLaneCount(['f2 sweep: 0 collected']), 0)

// === THE FENCE ===
assert.strictEqual(sweepCollectedLaneTrendConsistent(null), false)
assert.strictEqual(sweepCollectedLaneTrendConsistent(undefined), false)
assert.strictEqual(sweepCollectedLaneTrendConsistent('junk'), false)
assert.strictEqual(sweepCollectedLaneTrendConsistent([1, 2, 3]), false)
assert.strictEqual(sweepCollectedLaneTrendConsistent({}), false)
assert.strictEqual(sweepCollectedLaneTrendConsistent({ back: { collected: 1 }, prev: { collected: 2 } }), false)
assert.strictEqual(sweepCollectedLaneTrendConsistent({ back: { collected: 1 }, prev: { collected: 2 }, cur: { collected: 'x' } }), false)
assert.strictEqual(sweepCollectedLaneTrendConsistent({ back: { collected: -1 }, prev: { collected: 2 }, cur: { collected: 3 } }), false)
assert.strictEqual(sweepCollectedLaneTrendConsistent({ back: { collected: 1.5 }, prev: { collected: 2 }, cur: { collected: 3 } }), false)
assert.strictEqual(sweepCollectedLaneTrendConsistent({ back: { collected: 1 }, prev: { collected: 2 }, cur: { collected: 3 }, extra: 'ok' }), true)

// === THE ROW (the byte pins) ===
const TAIL_END = 'this word prices the sweep collected lane\'s own mass across the faces - the sweep collected lane seat, co-existence by seat never by duplication)'
const HEAD = 'the sweep collected lane trend (v0.976.232)'
const rowOf = (a, b, c) => sweepCollectedLaneTrendRow({ back: { collected: a }, prev: { collected: b }, cur: { collected: c } })
assert.strictEqual(rowOf(1, 2, 3).endsWith(TAIL_END), true)
assert.ok(rowOf(1, 2, 3).startsWith(HEAD + ": the lane's rise ran two steps deep - 1 -> 2 (+1) -> 3 (+1) - the sweep collected lane's own swell "))
assert.ok(rowOf(3, 2, 1).startsWith(HEAD + ": the lane's fall ran two steps deep - 3 -> 2 (-1) -> 1 (-1) - the sweep collected lane's own fade "))
assert.ok(rowOf(1, 3, 2).startsWith(HEAD + ": the sweep collected lane's own swing - 1 -> 3 (+2) -> 2 (-1) - the rise and the fall traded seats between the faces "))
// the held step - the honest silence
assert.strictEqual(rowOf(5, 5, 9), null)
assert.strictEqual(rowOf(5, 9, 9), null)
assert.strictEqual(rowOf(5, 5, 5), null)
assert.strictEqual(rowOf(0, 0, 0), null)
// junk never speaks
assert.strictEqual(sweepCollectedLaneTrendRow(null), null)
assert.strictEqual(sweepCollectedLaneTrendRow({ back: { collected: 1 }, prev: { collected: 2 } }), null)

// === THE SERIES BATTERY (the 9 faces byte-pinned, the field's own
// proof the fire-1842 walk prices) ===
const SERIES = [[455, 6], [456, 2], [457, 7], [458, 26], [459, 8], [460, 10], [461, 5], [462, 5], [463, 11]]
const T = Object.fromEntries(SERIES)
assert.strictEqual(Object.values(T).reduce((s, v) => s + v, 0), 80) // THE CELL'S OWN WEIGHT 80u
assert.strictEqual(SERIES.length, 9)
assert.strictEqual(T[458], 26) // THE TOP the F458 crest
assert.strictEqual(T[456], 2) // THE FLOOR the F456 trough

// THE BOOK FOUR of SEVEN windows speaking - FOUR swings, ONE swell,
// the ZERO fades, the TWO honest silences
const wins = []
for (let i = 2; i < SERIES.length; i++) wins.push([SERIES[i][0], SERIES[i - 2][1], SERIES[i - 1][1], SERIES[i][1]])
assert.strictEqual(wins.length, 7)
let swells = 0, fades = 0, swings = 0, silences = 0
for (const [f, a, b, c] of wins) {
  const row = rowOf(a, b, c)
  const d1 = b - a, d2 = c - b
  if (d1 === 0 || d2 === 0) { silences++; assert.strictEqual(row, null); continue }
  if (d1 > 0 && d2 > 0) { swells++; assert.ok(row.startsWith(HEAD + `: the lane's rise ran two steps deep - ${a} -> ${b} (+${d1}) -> ${c} (+${d2})`)); continue }
  if (d1 < 0 && d2 < 0) { fades++; assert.ok(row.startsWith(HEAD + `: the lane's fall ran two steps deep - ${a} -> ${b} (-${-d1}) -> ${c} (-${-d2})`)); continue }
  swings++; assert.ok(row.startsWith(HEAD + `: the sweep collected lane's own swing - ${a} -> ${b} (${d1 >= 0 ? '+' : ''}${d1}) -> ${c} (${d2 >= 0 ? '+' : ''}${d2})`))
}
assert.strictEqual(swings, 4) // the W456 and the W458 and the W459 and the W460 voices
assert.strictEqual(swells, 1) // the W457 burst's own climb
assert.strictEqual(fades, 0) // the ZERO fades
assert.strictEqual(silences, 2) // the W461 and the W462 honest silences

// THE BOUNDS' OWN LEGS: the +17 ONE leg ONE boundary 457/458, the
// -16 ONE leg ONE boundary 458/459 - the mirror pair the burst prices
let maxRise = 0, maxFall = 0, riseLegs = 0, fallLegs = 0
for (let i = 1; i < SERIES.length; i++) {
  const d = SERIES[i][1] - SERIES[i - 1][1]
  if (d > maxRise) { maxRise = d; riseLegs = 1 } else if (d === maxRise) riseLegs++
  if (d < maxFall) { maxFall = d; fallLegs = 1 } else if (d === maxFall) fallLegs++
}
assert.strictEqual(maxRise, 19)
assert.strictEqual(riseLegs, 1)
assert.strictEqual(maxFall, -18)
assert.strictEqual(fallLegs, 1)

// THE BIRTH WINDOW - the W462 held first step the silence prices (the
// word born silent, the bwp's own birth-silence precedent)
assert.strictEqual(rowOf(5, 5, 11), null)
// THE SWING - the W458 the crest's own payback
assert.ok(rowOf(7, 26, 8).startsWith(HEAD + ": the sweep collected lane's own swing - 7 -> 26 (+19) -> 8 (-18) - the rise and the fall traded seats between the faces "))
// THE SWELL - the W457 the burst's own climb
assert.ok(rowOf(2, 7, 26).startsWith(HEAD + ": the lane's rise ran two steps deep - 2 -> 7 (+5) -> 26 (+19) - the sweep collected lane's own swell "))

console.log('sweepcollectedlanetrend.test.mjs: ALL PINS GREEN')
