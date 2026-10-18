import assert from 'node:assert'
import { pocketDumpCount, pocketDumpTrendConsistent, pocketDumpTrendRow } from '../../src/lib/pocketdumptrend.mjs'

// (v0.976.229) THE POCKET DUMP'S OWN TREND - the byte-pin battery: the
// seven faces the artifact fetches re-spoke, the windows and the
// bounds the field proof prices (scripts/fieldread-pocketdump-1630.mjs,
// 7/7 census==raw zero mismatches).

const seg = (name, mined, items) => `   ${name}=${mined}[${items}]`
const bare = (name, mined, items) => `${name}=${mined}[${items}]`

// === THE CENSUS GRAMMAR (the strict law: the dump lane alone) ===
assert.strictEqual(pocketDumpCount(null), 0)
assert.strictEqual(pocketDumpCount(undefined), 0)
assert.strictEqual(pocketDumpCount('not an array'), 0)
assert.strictEqual(pocketDumpCount([42, null, {}]), 0)
assert.strictEqual(pocketDumpCount([]), 0)
// the ONE shape the lane prints: three leading spaces, the bots the
// joiner rides, the top-3 items or the empty skin
assert.strictEqual(pocketDumpCount([seg('F1', 11, 'stick:6 dirt:4 cobblestone:3')]), 1)
assert.strictEqual(pocketDumpCount([seg('F1', 0, 'empty')]), 1)
// the negative drift skin rides (the 'F9=-17[empty]' precedent the
// collectGain comment names)
assert.strictEqual(pocketDumpCount([seg('F9', -17, 'empty')]), 1)
// the empty-bracket mined-positive skin rides (the F4=12[empty] the
// F456 face prints - the torn window the tick prices)
assert.strictEqual(pocketDumpCount([seg('F4', 12, 'empty')]), 1)
// nineteen bots the joiner rides - the F461 face's own first print
const full = '   ' + bare('F1', 0, 'empty') + ' | ' + bare('F2', 0, 'empty') + ' | ' + bare('F3', 0, 'empty') + ' | ' + bare('F4', 6, 'oak_log:2') + ' | ' + bare('F5', 4, 'oak_log:3')
assert.strictEqual(pocketDumpCount([full]), 1)
// the ONE-to-THREE item tops the slice prices
assert.strictEqual(pocketDumpCount([seg('F1', 5, 'oak_log:5')]), 1)
assert.strictEqual(pocketDumpCount([seg('F1', 5, 'oak_log:5 stick:2')]), 1)
assert.strictEqual(pocketDumpCount([seg('F1', 5, 'oak_log:5 stick:2 dirt:1')]), 1)
// FOUR items never ride (the reporter's own slice(0, 3) the emitter holds)
assert.strictEqual(pocketDumpCount([seg('F1', 5, 'oak_log:5 stick:2 dirt:1 clay:1')]), 0)
// the reporter's OTHER 3-space lines never ride
assert.strictEqual(pocketDumpCount(['   deficits: 19/19']), 0)
assert.strictEqual(pocketDumpCount(['   plan top: dirt (F4: 12u)']), 0)
assert.strictEqual(pocketDumpCount(['   mem: heap=100MB/200MB old=50MB/60MB']), 0)
assert.strictEqual(pocketDumpCount(['t-0s alive=19/19 mined=0 map=0p/0ch banked=0 smelted=0 pocket=0u/0s | x']), 0)
// no leading spaces never rides (the lane's own skin the emitter holds)
assert.strictEqual(pocketDumpCount(['F1=11[stick:6 dirt:4 cobblestone:3]']), 0)
// two leading spaces never ride, four never ride (the byte law)
assert.strictEqual(pocketDumpCount(['  ' + 'F1=11[stick:6 dirt:4 cobblestone:3]']), 0)
assert.strictEqual(pocketDumpCount(['    ' + 'F1=11[stick:6 dirt:4 cobblestone:3]']), 0)
// trailing junk never rides
assert.strictEqual(pocketDumpCount([seg('F1', 11, 'stick:6 dirt:4 cobblestone:3') + ' x']), 0)
// uppercase never rides
assert.strictEqual(pocketDumpCount([seg('F1', 11, 'STICK:6 dirt:4')]), 0)

// === THE FENCE ===
assert.strictEqual(pocketDumpTrendConsistent(null), false)
assert.strictEqual(pocketDumpTrendConsistent(undefined), false)
assert.strictEqual(pocketDumpTrendConsistent('junk'), false)
assert.strictEqual(pocketDumpTrendConsistent([1, 2, 3]), false)
assert.strictEqual(pocketDumpTrendConsistent({}), false)
assert.strictEqual(pocketDumpTrendConsistent({ back: { dumps: 1 }, prev: { dumps: 2 } }), false)
assert.strictEqual(pocketDumpTrendConsistent({ back: { dumps: 1 }, prev: { dumps: 2 }, cur: { dumps: 'x' } }), false)
assert.strictEqual(pocketDumpTrendConsistent({ back: { dumps: -1 }, prev: { dumps: 2 }, cur: { dumps: 3 } }), false)
assert.strictEqual(pocketDumpTrendConsistent({ back: { dumps: 1.5 }, prev: { dumps: 2 }, cur: { dumps: 3 } }), false)
assert.strictEqual(pocketDumpTrendConsistent({ back: { dumps: 1 }, prev: { dumps: 2 }, cur: { dumps: 3 }, extra: 'ok' }), true)

// === THE ROW (the byte pins) ===
const TAIL_END = 'this word prices the pocket dump\'s own mass across the faces - the pocket dump seat, co-existence by seat never by duplication)'
const HEAD = 'the pocket dump trend (v0.976.229)'
const SWING_HEAD = HEAD
const SWELL_HEAD = HEAD
const FADE_HEAD = HEAD
const rowOf = (a, b, c) => pocketDumpTrendRow({ back: { dumps: a }, prev: { dumps: b }, cur: { dumps: c } })
assert.strictEqual(rowOf(1, 2, 3).endsWith(TAIL_END), true)
assert.ok(rowOf(1, 2, 3).startsWith(HEAD + ": the pocket dump's rise ran two steps deep - 1 -> 2 (+1) -> 3 (+1) - the pocket dump's own swell "))
assert.ok(rowOf(3, 2, 1).startsWith(HEAD + ": the pocket dump's fall ran two steps deep - 3 -> 2 (-1) -> 1 (-1) - the pocket dump's own fade "))
assert.ok(rowOf(1, 3, 2).startsWith(HEAD + ": the pocket dump's own swing - 1 -> 3 (+2) -> 2 (-1) - the rise and the fall traded seats between the faces "))
// the held step - the honest silence
assert.strictEqual(rowOf(5, 5, 9), null)
assert.strictEqual(rowOf(5, 9, 9), null)
assert.strictEqual(rowOf(5, 5, 5), null)
assert.strictEqual(rowOf(0, 0, 0), null)
// junk never speaks
assert.strictEqual(pocketDumpTrendRow(null), null)
assert.strictEqual(pocketDumpTrendRow({ back: { dumps: 1 }, prev: { dumps: 2 } }), null)

// === THE SERIES BATTERY (the 7 faces byte-pinned, the field's own
// proof the fire-1630 walk prices) ===
const SERIES = [[455, 54], [456, 60], [457, 63], [458, 58], [459, 46], [460, 58], [461, 54]]
const T = Object.fromEntries(SERIES)
assert.strictEqual(Object.values(T).reduce((s, v) => s + v, 0), 393) // THE CELL'S OWN WEIGHT 393u
assert.strictEqual(SERIES.length, 7)
assert.strictEqual(T[457], 63) // THE TOP the F457 crest
assert.strictEqual(T[459], 46) // THE FLOOR the F459 trough

// THE BOOK FIVE of FIVE windows speaking - THREE swings, ONE swell,
// ONE fade, the ZERO honest silences
const wins = []
for (let i = 2; i < SERIES.length; i++) wins.push([SERIES[i][0], SERIES[i - 2][1], SERIES[i - 1][1], SERIES[i][1]])
assert.strictEqual(wins.length, 5)
let swells = 0, fades = 0, swings = 0, silences = 0
for (const [f, a, b, c] of wins) {
  const row = rowOf(a, b, c)
  const d1 = b - a, d2 = c - b
  if (d1 === 0 || d2 === 0) { silences++; assert.strictEqual(row, null); continue }
  if (d1 > 0 && d2 > 0) { swells++; assert.ok(row.startsWith(SWELL_HEAD + `: the pocket dump's rise ran two steps deep - ${a} -> ${b} (+${d1}) -> ${c} (+${d2})`)); continue }
  if (d1 < 0 && d2 < 0) { fades++; assert.ok(row.startsWith(FADE_HEAD + `: the pocket dump's fall ran two steps deep - ${a} -> ${b} (-${-d1}) -> ${c} (-${-d2})`)); continue }
  swings++; assert.ok(row.startsWith(SWING_HEAD + `: the pocket dump's own swing - ${a} -> ${b} (${d1 >= 0 ? '+' : ''}${d1}) -> ${c} (${d2 >= 0 ? '+' : ''}${d2})`))
}
assert.strictEqual(swings, 3) // THREE swings
assert.strictEqual(swells, 1) // ONE swell
assert.strictEqual(fades, 1) // ONE fade
assert.strictEqual(silences, 0) // the ZERO honest silences

// THE BOUNDS' OWN LEGS: the +12 ONE leg ONE boundary 459/460, the
// -12 ONE leg ONE boundary 458/459 - the mirror pair
let maxRise = 0, maxFall = 0, riseLegs = 0, fallLegs = 0
for (let i = 1; i < SERIES.length; i++) {
  const d = SERIES[i][1] - SERIES[i - 1][1]
  if (d > maxRise) { maxRise = d; riseLegs = 1 } else if (d === maxRise) riseLegs++
  if (d < maxFall) { maxFall = d; fallLegs = 1 } else if (d === maxFall) fallLegs++
}
assert.strictEqual(maxRise, 12)
assert.strictEqual(riseLegs, 1)
assert.strictEqual(maxFall, -12)
assert.strictEqual(fallLegs, 1)

// THE BIRTH WINDOW - the W460 swing the newest face prices
assert.ok(rowOf(46, 58, 54).startsWith(HEAD + ": the pocket dump's own swing - 46 -> 58 (+12) -> 54 (-4) - the rise and the fall traded seats between the faces "))

console.log('pocketdumptrend.test.mjs: ALL PINS GREEN')
