import assert from 'node:assert'
import { bankWalkPathEventCount, bankWalkPathEventTrendConsistent, bankWalkPathEventTrendRow } from '../../src/lib/bankwalkpatheventtrend.mjs'

// (v0.976.230) THE BANK WALK PATH EVENT'S OWN TREND - the byte-pin
// battery: the eight faces the artifact fetches re-spoke, the windows
// and the bounds the field proof prices
// (scripts/fieldread-bankwalkpath-1742.mjs, 8/8 census==raw zero
// mismatches).

const ev = (name, reason) => `${name} bank walk path event: ${reason}`

// === THE CENSUS GRAMMAR (the strict law: the path event lane alone) ===
assert.strictEqual(bankWalkPathEventCount(null), 0)
assert.strictEqual(bankWalkPathEventCount(undefined), 0)
assert.strictEqual(bankWalkPathEventCount('not an array'), 0)
assert.strictEqual(bankWalkPathEventCount([42, null, {}]), 0)
assert.strictEqual(bankWalkPathEventCount([]), 0)
// the ONE shape the lane prints: the bot tag, the event word, the
// reason tail
assert.strictEqual(bankWalkPathEventCount([ev('F7', 'block_updated')]), 1)
assert.strictEqual(bankWalkPathEventCount([ev('F3', 'stuck')]), 1)
// the explicit path_stop skin rides (the spy's own stop word)
assert.strictEqual(bankWalkPathEventCount([ev('F9', 'path_stop (explicit)')]), 1)
// the pathfinder's own other reset reasons ride (the lane law: every
// line the lane prints rides whole whatever the skin's name)
assert.strictEqual(bankWalkPathEventCount([ev('F2', 'chunk_loaded')]), 1)
assert.strictEqual(bankWalkPathEventCount([ev('F5', 'goal_moved')]), 1)
// the bank walk's OTHER lines never ride
assert.strictEqual(bankWalkPathEventCount(['F6 retry #1 in 4.7s (Timeout waiting for 4 ticks after 5200ms)']), 0)
assert.strictEqual(bankWalkPathEventCount(['F6 yard approach: skipped (budget)']), 0)
assert.strictEqual(bankWalkPathEventCount(['F6 bank: chest unreachable (No path to the goal!) (51 blocks from yard) - walking back']), 0)
assert.strictEqual(bankWalkPathEventCount(['F6 banked 12 items at (-135,71,407) (direct)']), 0)
// no bot tag never rides (the lane's own skin the emitter holds)
assert.strictEqual(bankWalkPathEventCount(['bank walk path event: stuck']), 0)
// two bot tags never ride, the prefix must be the line head (the byte law)
assert.strictEqual(bankWalkPathEventCount(['  ' + ev('F1', 'stuck')]), 0)
assert.strictEqual(bankWalkPathEventCount([ev('F1', 'stuck') + ' x']), 1) // the open tail rides (the lane law)
// uppercase bot tag never rides
assert.strictEqual(bankWalkPathEventCount([ev('f1', 'stuck')]), 0)

// === THE FENCE ===
assert.strictEqual(bankWalkPathEventTrendConsistent(null), false)
assert.strictEqual(bankWalkPathEventTrendConsistent(undefined), false)
assert.strictEqual(bankWalkPathEventTrendConsistent('junk'), false)
assert.strictEqual(bankWalkPathEventTrendConsistent([1, 2, 3]), false)
assert.strictEqual(bankWalkPathEventTrendConsistent({}), false)
assert.strictEqual(bankWalkPathEventTrendConsistent({ back: { events: 1 }, prev: { events: 2 } }), false)
assert.strictEqual(bankWalkPathEventTrendConsistent({ back: { events: 1 }, prev: { events: 2 }, cur: { events: 'x' } }), false)
assert.strictEqual(bankWalkPathEventTrendConsistent({ back: { events: -1 }, prev: { events: 2 }, cur: { events: 3 } }), false)
assert.strictEqual(bankWalkPathEventTrendConsistent({ back: { events: 1.5 }, prev: { events: 2 }, cur: { events: 3 } }), false)
assert.strictEqual(bankWalkPathEventTrendConsistent({ back: { events: 1 }, prev: { events: 2 }, cur: { events: 3 }, extra: 'ok' }), true)

// === THE ROW (the byte pins) ===
const TAIL_END = 'this word prices the bank walk path event\'s own mass across the faces - the bank walk path event seat, co-existence by seat never by duplication)'
const HEAD = 'the bank walk path event trend (v0.976.230)'
const rowOf = (a, b, c) => bankWalkPathEventTrendRow({ back: { events: a }, prev: { events: b }, cur: { events: c } })
assert.strictEqual(rowOf(1, 2, 3).endsWith(TAIL_END), true)
assert.ok(rowOf(1, 2, 3).startsWith(HEAD + ": the event's rise ran two steps deep - 1 -> 2 (+1) -> 3 (+1) - the bank walk path event's own swell "))
assert.ok(rowOf(3, 2, 1).startsWith(HEAD + ": the event's fall ran two steps deep - 3 -> 2 (-1) -> 1 (-1) - the bank walk path event's own fade "))
assert.ok(rowOf(1, 3, 2).startsWith(HEAD + ": the bank walk path event's own swing - 1 -> 3 (+2) -> 2 (-1) - the rise and the fall traded seats between the faces "))
// the held step - the honest silence
assert.strictEqual(rowOf(5, 5, 9), null)
assert.strictEqual(rowOf(5, 9, 9), null)
assert.strictEqual(rowOf(5, 5, 5), null)
assert.strictEqual(rowOf(0, 0, 0), null)
// junk never speaks
assert.strictEqual(bankWalkPathEventTrendRow(null), null)
assert.strictEqual(bankWalkPathEventTrendRow({ back: { events: 1 }, prev: { events: 2 } }), null)

// === THE SERIES BATTERY (the 8 faces byte-pinned, the field's own
// proof the fire-1742 walk prices) ===
const SERIES = [[455, 58], [456, 1], [457, 1], [458, 26], [459, 0], [460, 0], [461, 0], [462, 22]]
const T = Object.fromEntries(SERIES)
assert.strictEqual(Object.values(T).reduce((s, v) => s + v, 0), 108) // THE CELL'S OWN WEIGHT 108u
assert.strictEqual(SERIES.length, 8)
assert.strictEqual(T[455], 58) // THE TOP the F455 crest
assert.strictEqual(T[459], 0) // THE FLOOR the drought rides
assert.strictEqual(T[460], 0)
assert.strictEqual(T[461], 0)

// THE BOOK ONE of SIX windows speaking - ONE swing, the ZERO
// swells, the ZERO fades, the FIVE honest silences
const wins = []
for (let i = 2; i < SERIES.length; i++) wins.push([SERIES[i][0], SERIES[i - 2][1], SERIES[i - 1][1], SERIES[i][1]])
assert.strictEqual(wins.length, 6)
let swells = 0, fades = 0, swings = 0, silences = 0
for (const [f, a, b, c] of wins) {
  const row = rowOf(a, b, c)
  const d1 = b - a, d2 = c - b
  if (d1 === 0 || d2 === 0) { silences++; assert.strictEqual(row, null); continue }
  if (d1 > 0 && d2 > 0) { swells++; assert.ok(row.startsWith(HEAD + `: the event's rise ran two steps deep - ${a} -> ${b} (+${d1}) -> ${c} (+${d2})`)); continue }
  if (d1 < 0 && d2 < 0) { fades++; assert.ok(row.startsWith(HEAD + `: the event's fall ran two steps deep - ${a} -> ${b} (-${-d1}) -> ${c} (-${-d2})`)); continue }
  swings++; assert.ok(row.startsWith(HEAD + `: the bank walk path event's own swing - ${a} -> ${b} (${d1 >= 0 ? '+' : ''}${d1}) -> ${c} (${d2 >= 0 ? '+' : ''}${d2})`))
}
assert.strictEqual(swings, 1) // ONE swing - the W458 voice
assert.strictEqual(swells, 0) // the ZERO swells
assert.strictEqual(fades, 0) // the ZERO fades
assert.strictEqual(silences, 5) // the FIVE honest silences

// THE BOUNDS' OWN LEGS: the +25 ONE leg ONE boundary 457/458, the
// -57 ONE leg ONE boundary 455/456
let maxRise = 0, maxFall = 0, riseLegs = 0, fallLegs = 0
for (let i = 1; i < SERIES.length; i++) {
  const d = SERIES[i][1] - SERIES[i - 1][1]
  if (d > maxRise) { maxRise = d; riseLegs = 1 } else if (d === maxRise) riseLegs++
  if (d < maxFall) { maxFall = d; fallLegs = 1 } else if (d === maxFall) fallLegs++
}
assert.strictEqual(maxRise, 25)
assert.strictEqual(riseLegs, 1)
assert.strictEqual(maxFall, -57)
assert.strictEqual(fallLegs, 1)

// THE BIRTH WINDOW - the W461 held first step the silence prices (the
// word born silent, the llr's own crest-silence precedent)
assert.strictEqual(rowOf(0, 0, 22), null)
// THE SWING - the W458 the book's only voice
assert.ok(rowOf(1, 26, 0).startsWith(HEAD + ": the bank walk path event's own swing - 1 -> 26 (+25) -> 0 (-26) - the rise and the fall traded seats between the faces "))

console.log('bankwalkpatheventtrend.test.mjs: ALL PINS GREEN')
