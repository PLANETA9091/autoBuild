import assert from 'node:assert'
import { finalClimbLaneCount, finalClimbLaneTrendConsistent, finalClimbLaneTrendRow } from '../../src/lib/finalclimblanetrend.mjs'

// (v0.976.234) THE FINAL CLIMB LANE'S OWN TREND - the byte-pin
// battery: the eleven faces the artifact fetches re-spoke (the F465
// seat the zombie cancelled holds no face - the honest gap the
// series skips), the windows and the bounds the field proof prices
// (scripts/fieldread-finalclimb-2042.mjs, 11/11 census==raw zero
// mismatches).

// === THE CENSUS GRAMMAR (the strict law: the final climb lane alone) ===
assert.strictEqual(finalClimbLaneCount(null), 0)
assert.strictEqual(finalClimbLaneCount(undefined), 0)
assert.strictEqual(finalClimbLaneCount('not an array'), 0)
assert.strictEqual(finalClimbLaneCount([42, null, {}]), 0)
assert.strictEqual(finalClimbLaneCount([]), 0)
// the SIX skin classes the lane prints ride (the lane law: every line
// the lane prints rides whole whatever the skin's name)
assert.strictEqual(finalClimbLaneCount(['F1 final climb: OK +27 levels (8 steps, 29 dug, 12s)']), 1) // the OK verdict
assert.strictEqual(finalClimbLaneCount(['F13 final climb: funded +57s from the chain reserve (the crumbs starved the slice - the underground chain is worthless without the climb)']), 1) // the funded grant
assert.strictEqual(finalClimbLaneCount(['F5 final climb: no retry (slice left 3s < min 10s)']), 1) // the no-retry gate
assert.strictEqual(finalClimbLaneCount(['F7 final climb: no retry (no retry for \'wet-sentinel\')']), 1) // the named no-retry
assert.strictEqual(finalClimbLaneCount(['F9 final climb: retry (escalated retry after stalled, 30s fence)']), 1) // the retry escalation
assert.strictEqual(finalClimbLaneCount(['F3 final climb: the yard stands 12 levels up over 8b lateral - climbing toward the yard\'s level (the walk ladder cannot)']), 1) // the opener
assert.strictEqual(finalClimbLaneCount(['F18 final climb: failed - low-o2']), 1) // the failed verdict
assert.strictEqual(finalClimbLaneCount(['F2 final climb: failed - timeout (fenced at 85s - the chain keeps its reserve)']), 1)
assert.strictEqual(finalClimbLaneCount(['F4 final climb: failed - stalled [stage 3]']), 1) // the staged stalled
assert.strictEqual(finalClimbLaneCount(['F6 final climb: need 40s (8 levels at the v0.604.0 5.0s price, the deep-window margin) - funded +57s from the chain reserve (the crumbs starved the slice - the underground chain is worthless without the climb)']), 1) // the need-funded compound
// the climb's OTHER lines never ride
assert.strictEqual(finalClimbLaneCount(['F6 climb out (bank): arrived']), 0) // the climb out book a different lane
assert.strictEqual(finalClimbLaneCount(['F6 climb out (trip): walked out']), 0)
assert.strictEqual(finalClimbLaneCount(['F6 yard approach: skipped (budget)']), 0)
assert.strictEqual(finalClimbLaneCount(['F6 climb bridge: placed']), 0)
assert.strictEqual(finalClimbLaneCount(['F1 final bank: +132']), 0)
assert.strictEqual(finalClimbLaneCount(['F6 final climb census: 12 armed']), 0) // a census line never rides (the lane head pins the bot tag first)
// no bot tag never rides (the lane's own skin the emitter holds)
assert.strictEqual(finalClimbLaneCount(['final climb: OK +10 levels']), 0)
// two bot tags never ride, the prefix must be the line head (the byte law)
assert.strictEqual(finalClimbLaneCount(['  F1 final climb: OK +10 levels']), 0)
// uppercase bot tag never rides
assert.strictEqual(finalClimbLaneCount(['f1 final climb: failed - stalled']), 0)
// the open tail rides (the lane law - whatever the skin's name)
assert.strictEqual(finalClimbLaneCount(['F1 final climb: some future skin the machinery adds']), 1)

// === THE FENCE ===
assert.strictEqual(finalClimbLaneTrendConsistent(null), false)
assert.strictEqual(finalClimbLaneTrendConsistent(undefined), false)
assert.strictEqual(finalClimbLaneTrendConsistent('junk'), false)
assert.strictEqual(finalClimbLaneTrendConsistent([1, 2, 3]), false)
assert.strictEqual(finalClimbLaneTrendConsistent({}), false)
assert.strictEqual(finalClimbLaneTrendConsistent({ back: { climbs: 1 }, prev: { climbs: 2 } }), false)
assert.strictEqual(finalClimbLaneTrendConsistent({ back: { climbs: 1 }, prev: { climbs: 2 }, cur: { climbs: 'x' } }), false)
assert.strictEqual(finalClimbLaneTrendConsistent({ back: { climbs: -1 }, prev: { climbs: 2 }, cur: { climbs: 3 } }), false)
assert.strictEqual(finalClimbLaneTrendConsistent({ back: { climbs: 1.5 }, prev: { climbs: 2 }, cur: { climbs: 3 } }), false)
assert.strictEqual(finalClimbLaneTrendConsistent({ back: { climbs: 1 }, prev: { climbs: 2 }, cur: { climbs: 3 }, extra: 'ok' }), true)

// === THE ROW (the byte pins) ===
const TAIL_END = 'this word prices the final climb lane\'s own mass across the faces - the final climb lane seat, co-existence by seat never by duplication)'
const HEAD = 'the final climb lane trend (v0.976.234)'
const rowOf = (a, b, c) => finalClimbLaneTrendRow({ back: { climbs: a }, prev: { climbs: b }, cur: { climbs: c } })
assert.strictEqual(rowOf(1, 2, 3).endsWith(TAIL_END), true)
assert.ok(rowOf(1, 2, 3).startsWith(HEAD + ": the lane's rise ran two steps deep - 1 -> 2 (+1) -> 3 (+1) - the final climb lane's own swell "))
assert.ok(rowOf(3, 2, 1).startsWith(HEAD + ": the lane's fall ran two steps deep - 3 -> 2 (-1) -> 1 (-1) - the final climb lane's own fade "))
assert.ok(rowOf(1, 3, 2).startsWith(HEAD + ": the final climb lane's own swing - 1 -> 3 (+2) -> 2 (-1) - the rise and the fall traded seats between the faces "))
// the held step - the honest silence
assert.strictEqual(rowOf(5, 5, 9), null)
assert.strictEqual(rowOf(5, 9, 9), null)
assert.strictEqual(rowOf(5, 5, 5), null)
assert.strictEqual(rowOf(0, 0, 0), null)
// junk never speaks
assert.strictEqual(finalClimbLaneTrendRow(null), null)
assert.strictEqual(finalClimbLaneTrendRow({ back: { climbs: 1 }, prev: { climbs: 2 } }), null)

// === THE SERIES BATTERY (the 11 faces byte-pinned, the field's own
// proof the fire-2042 walk prices - the F465 seat the zombie
// cancelled holds no face, the honest gap the series skips) ===
const SERIES = [[455, 14], [456, 21], [457, 40], [458, 21], [459, 35], [460, 45], [461, 29], [462, 44], [463, 35], [464, 14], [466, 38]]
const T = Object.fromEntries(SERIES)
assert.strictEqual(Object.values(T).reduce((s, v) => s + v, 0), 336) // THE CELL'S OWN WEIGHT 336u
assert.strictEqual(SERIES.length, 11)
assert.strictEqual(T[460], 45) // THE TOP the F460 crest
assert.strictEqual(T[455], 14) // THE FLOOR rides twice
assert.strictEqual(T[464], 14)
assert.strictEqual(SERIES.filter(([, v]) => v === 14).length, 2) // the floor's own two rides
assert.strictEqual(SERIES.filter(([, v]) => v === 45).length, 1) // the top's own one ride

// THE BOOK NINE of NINE windows speaking - SIX swings, TWO swells,
// the ONE fade, the ZERO honest silences (the all-speaking family)
const wins = []
for (let i = 2; i < SERIES.length; i++) wins.push([SERIES[i][0], SERIES[i - 2][1], SERIES[i - 1][1], SERIES[i][1]])
assert.strictEqual(wins.length, 9)
let swells = 0, fades = 0, swings = 0, silences = 0
for (const [f, a, b, c] of wins) {
  const row = rowOf(a, b, c)
  const d1 = b - a, d2 = c - b
  if (d1 === 0 || d2 === 0) { silences++; assert.strictEqual(row, null); continue }
  if (d1 > 0 && d2 > 0) { swells++; assert.ok(row.startsWith(HEAD + `: the lane's rise ran two steps deep - ${a} -> ${b} (+${d1}) -> ${c} (+${d2})`)); continue }
  if (d1 < 0 && d2 < 0) { fades++; assert.ok(row.startsWith(HEAD + `: the lane's fall ran two steps deep - ${a} -> ${b} (-${-d1}) -> ${c} (-${-d2})`)); continue }
  swings++; assert.ok(row.startsWith(HEAD + `: the final climb lane's own swing - ${a} -> ${b} (${d1 >= 0 ? '+' : ''}${d1}) -> ${c} (${d2 >= 0 ? '+' : ''}${d2})`))
}
assert.strictEqual(swings, 6) // the W457 and the W458 and the W460 and the W461 and the W462 and the W464 voices
assert.strictEqual(swells, 2) // the W456 and the W459 climbs
assert.strictEqual(fades, 1) // the W463 drain
assert.strictEqual(silences, 0) // THE ALL-SPEAKING BOOK
assert.strictEqual(swings + swells + fades + silences, 9)

// THE BOUNDS' OWN LEGS: the +24 ONE leg ONE boundary 464/466 (the
// gap's own climb), the -21 ONE leg ONE boundary 463/464
let maxRise = 0, maxFall = 0, riseLegs = 0, fallLegs = 0
for (let i = 1; i < SERIES.length; i++) {
  const d = SERIES[i][1] - SERIES[i - 1][1]
  if (d > maxRise) { maxRise = d; riseLegs = 1 } else if (d === maxRise) riseLegs++
  if (d < maxFall) { maxFall = d; fallLegs = 1 } else if (d === maxFall) fallLegs++
}
assert.strictEqual(maxRise, 24)
assert.strictEqual(riseLegs, 1)
assert.strictEqual(maxFall, -21)
assert.strictEqual(fallLegs, 1)

// THE ROUND TRIP - the ONE the book holds (the +19/-19 mirror the
// W457 crest rides)
let roundTrips = 0
for (let i = 2; i < SERIES.length; i++) {
  const d1 = SERIES[i - 1][1] - SERIES[i - 2][1]
  const d2 = SERIES[i][1] - SERIES[i - 1][1]
  if (d1 > 0 && d2 === -d1) roundTrips++
  if (d1 < 0 && d2 === -d1) roundTrips++
}
assert.strictEqual(roundTrips, 1)

// THE BIRTH WINDOW - the W464 swing the word born speaking (the
// gap's own climb the F466 face prices)
assert.ok(rowOf(35, 14, 38).startsWith(HEAD + ": the final climb lane's own swing - 35 -> 14 (-21) -> 38 (+24) - the rise and the fall traded seats between the faces "))
// THE SWELL - the W456 the word's own first voice
assert.ok(rowOf(14, 21, 40).startsWith(HEAD + ": the lane's rise ran two steps deep - 14 -> 21 (+7) -> 40 (+19) - the final climb lane's own swell "))
// THE FADE - the W463 the drain
assert.ok(rowOf(44, 35, 14).startsWith(HEAD + ": the lane's fall ran two steps deep - 44 -> 35 (-9) -> 14 (-21) - the final climb lane's own fade "))

console.log('finalclimblanetrend.test.mjs: ALL PINS GREEN')
