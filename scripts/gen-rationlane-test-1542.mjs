#!/usr/bin/env node
// (fire 1542) THE RATION LANE TEST'S OWN GENERATOR - the battery the
// seat's own law keeps: the series byte-pin, the book, every window
// byte-exact, the bounds, the round trips, the census junk wall, the
// fence, the byte-pin law, the lanes-never-merge wall.
import { readFileSync, writeFileSync } from 'node:fs'

const modSrc = readFileSync('src/lib/rationlanetrend.mjs', 'utf8')
const m = modSrc.match(/const tail = ("(?:[^"\\]|\\.)*")\n/)
if (!m) { console.error('tail literal extract failed'); process.exit(1) }
const TAIL = m[1] // the exact double-quoted literal, byte-true

const test = `import assert from 'node:assert'
import { rationLaneCount, rationLaneTrendConsistent, rationLaneTrendRow } from '../../src/lib/rationlanetrend.mjs'

const TAIL = ${TAIL}

const HEAD = 'the ration lane trend (v0.976.228)'
const SWING = HEAD + ": the ration lane's own swing - "
const SWING_TAIL = ' - the rise and the fall traded seats between the faces ' + TAIL
const SWELL = HEAD + ": the ration lane's rise ran two steps deep - "
const SWELL_TAIL = " - the ration lane's own swell " + TAIL
const FADE = HEAD + ": the ration lane's fall ran two steps deep - "
const FADE_TAIL = " - the ration lane's own fade " + TAIL

const rowOf = (a, b, c) => rationLaneTrendRow({ back: { eats: a }, prev: { eats: b }, cur: { eats: c } })

// === THE SERIES BATTERY (the 25 faces byte-pinned, the field's own
// proof the derive-1542 walk prices) ===
const SERIES = [[436,10],[437,14],[438,22],[439,6],[440,0],[441,6],[442,26],[443,12],[444,8],[445,8],[446,26],[447,20],[448,2],[449,20],[450,2],[451,16],[452,0],[453,20],[454,20],[455,4],[456,12],[457,16],[458,24],[459,19],[460,24]]
const T = Object.fromEntries(SERIES)
assert.strictEqual(Object.values(T).reduce((s, v) => s + v, 0), 337) // THE CELL'S OWN WEIGHT 337u
assert.strictEqual(SERIES.length, 25)
let speaking = 0
for (const [, v] of SERIES) { speaking++ } // every face the window speaks (the zero a lawful cell)
assert.strictEqual(speaking, 25) // the book: the faces the skin prices
assert.strictEqual(T[442], 26 && T[446], 26) // THE TOP the twin crest
assert.strictEqual(T[442], 26)
assert.strictEqual(T[446], 26)
assert.strictEqual(T[440], 0 && T[452], 0) // THE FLOOR the twin drought
assert.strictEqual(T[440], 0)
assert.strictEqual(T[452], 0)

// THE BOOK TWENTY-THREE of TWENTY-THREE windows speaking - TWELVE
// swings, FOUR swells, THREE fades, FOUR honest silences
const wins = []
for (let i = 2; i < SERIES.length; i++) wins.push([SERIES[i][0], SERIES[i - 2][1], SERIES[i - 1][1], SERIES[i][1]])
assert.strictEqual(wins.length, 23)
let swells = 0, fades = 0, swings = 0, silences = 0
for (const [f, a, b, c] of wins) {
  const row = rowOf(a, b, c)
  const d1 = b - a, d2 = c - b
  if (d1 === 0 || d2 === 0) { silences++; assert.strictEqual(row, null); continue }
  if (d1 > 0 && d2 > 0) { swells++; assert.ok(row.startsWith(SWELL)); continue }
  if (d1 < 0 && d2 < 0) { fades++; assert.ok(row.startsWith(FADE)); continue }
  swings++; assert.ok(row.startsWith(SWING))
}
assert.strictEqual(swings, 12) // TWELVE swings - the family's own skin
assert.strictEqual(swells, 4) // FOUR swells
assert.strictEqual(fades, 3) // THREE fades
assert.strictEqual(silences, 4) // FOUR honest silences

// the window pins byte-exact (the head + the arc byte)
assert.strictEqual(rowOf(T[436], T[437], T[438]), SWELL + '10 -> 14 (+4) -> 22 (+8)' + SWELL_TAIL) // the W438 swell
assert.strictEqual(rowOf(T[437], T[438], T[439]), SWING + '14 -> 22 (+8) -> 6 (-16)' + SWING_TAIL) // the W439 swing
assert.strictEqual(rowOf(T[438], T[439], T[440]), FADE + '22 -> 6 (-16) -> 0 (-6)' + FADE_TAIL) // the W440 fade
assert.strictEqual(rowOf(T[439], T[440], T[441]), SWING + '6 -> 0 (-6) -> 6 (+6)' + SWING_TAIL) // the W441 swing the round trip rides
assert.strictEqual(rowOf(T[440], T[441], T[442]), SWELL + '0 -> 6 (+6) -> 26 (+20)' + SWELL_TAIL) // the W442 swell
assert.strictEqual(rowOf(T[441], T[442], T[443]), SWING + '6 -> 26 (+20) -> 12 (-14)' + SWING_TAIL) // the W443 swing
assert.strictEqual(rowOf(T[442], T[443], T[444]), FADE + '26 -> 12 (-14) -> 8 (-4)' + FADE_TAIL) // the W444 fade
assert.strictEqual(rowOf(T[443], T[444], T[445]), null) // the W445 held second step - the honest silence
assert.strictEqual(rowOf(T[444], T[445], T[446]), null) // the W446 held first step - the honest silence
assert.strictEqual(rowOf(T[445], T[446], T[447]), SWING + '8 -> 26 (+18) -> 20 (-6)' + SWING_TAIL) // the W447 swing
assert.strictEqual(rowOf(T[446], T[447], T[448]), FADE + '26 -> 20 (-6) -> 2 (-18)' + FADE_TAIL) // the W448 fade
assert.strictEqual(rowOf(T[447], T[448], T[449]), SWING + '20 -> 2 (-18) -> 20 (+18)' + SWING_TAIL) // the W449 swing the round trip rides
assert.strictEqual(rowOf(T[448], T[449], T[450]), SWING + '2 -> 20 (+18) -> 2 (-18)' + SWING_TAIL) // the W450 swing the mirror rides
assert.strictEqual(rowOf(T[449], T[450], T[451]), SWING + '20 -> 2 (-18) -> 16 (+14)' + SWING_TAIL) // the W451 swing
assert.strictEqual(rowOf(T[450], T[451], T[452]), SWING + '2 -> 16 (+14) -> 0 (-16)' + SWING_TAIL) // the W452 swing
assert.strictEqual(rowOf(T[451], T[452], T[453]), SWING + '16 -> 0 (-16) -> 20 (+20)' + SWING_TAIL) // the W453 swing
assert.strictEqual(rowOf(T[452], T[453], T[454]), null) // the W454 held second step - the honest silence
assert.strictEqual(rowOf(T[453], T[454], T[455]), null) // the W455 held first step - the honest silence
assert.strictEqual(rowOf(T[454], T[455], T[456]), SWING + '20 -> 4 (-16) -> 12 (+8)' + SWING_TAIL) // the W456 swing
assert.strictEqual(rowOf(T[455], T[456], T[457]), SWELL + '4 -> 12 (+8) -> 16 (+4)' + SWELL_TAIL) // the W457 swell
assert.strictEqual(rowOf(T[456], T[457], T[458]), SWELL + '12 -> 16 (+4) -> 24 (+8)' + SWELL_TAIL) // the W458 swell
assert.strictEqual(rowOf(T[457], T[458], T[459]), SWING + '16 -> 24 (+8) -> 19 (-5)' + SWING_TAIL) // the W459 swing
assert.strictEqual(rowOf(T[458], T[459], T[460]), SWING + '24 -> 19 (-5) -> 24 (+5)' + SWING_TAIL) // the W460 swing MY WORD'S OWN BIRTH WINDOW THE ROUND TRIP THE NEWEST FACE RIDES

// THE BOUNDS' OWN LEGS: +20 rode TWO legs 441/442 + 452/453,
// -18 rode TWO legs 447/448 + 449/450
const legs = []
for (let i = 1; i < SERIES.length; i++) legs.push([SERIES[i - 1][0], SERIES[i][0], SERIES[i][1] - SERIES[i - 1][1]])
let maxRise = null, maxFall = null
for (const [a, b, d] of legs) {
  if (maxRise === null || d > maxRise.d) maxRise = { d, b: a + '/' + b }
  if (maxFall === null || d < maxFall.d) maxFall = { d, b: a + '/' + b }
}
const riseBounds = legs.filter(([, , d]) => d === 20).map(([a, b]) => a + '/' + b).join(' + ')
const fallBounds = legs.filter(([, , d]) => d === -18).map(([a, b]) => a + '/' + b).join(' + ')
assert.strictEqual(maxRise.d, 20); assert.strictEqual(riseBounds, '441/442 + 452/453') // the max rise rode TWO legs
assert.strictEqual(maxFall.d, -18); assert.strictEqual(fallBounds, '447/448 + 449/450') // the max fall rode TWO legs
let roundTrips = 0
for (const [f, a, b, c] of wins) {
  const d1 = b - a, d2 = c - b
  if (d1 !== 0 && d2 !== 0 && d1 === -d2) roundTrips++
}
assert.strictEqual(roundTrips, 4) // the round trips the FOUR the book holds (W441, W449, W450, W460)

// === THE CENSUS BATTERY (rationLaneCount - the strict grammar) ===
assert.strictEqual(rationLaneCount([
  'F1 [F1] ration: eating apple (hunger 17, hp 20, health-guard)',
  'F1 [F1] ration: ate apple (hunger 17 -> 20, hp 20 -> 20)',
  'F2 [F2] ration: failed rotten_flesh (hunger 20 -> 20, hp 13.8 -> 7.4)',
  'F3 [F3] ration: eating rotten_flesh (hunger ?, hp ?, hunger-guard+health-guard)',
  'F4 [F4] ration: eating rotten_flesh (hunger 20, hp 13.833334922790527, health-guard)',
  'F5 [F5] ration: ate apple (hunger ? -> 20, hp ? -> 20)'
]), 6) // the strict shapes ride whole - the ask and the outcome and the failed and the '?' skin
assert.strictEqual(rationLaneCount([]), 0) // the honest zero
assert.strictEqual(rationLaneCount(null), 0) // the junk input
assert.strictEqual(rationLaneCount([null, 42, undefined]), 0) // non-strings skipped
// the junk forms never ride (the grammar the shape keeps)
assert.strictEqual(rationLaneCount([
  'F1 [F1] ration: eating apple (hunger 17, hp 20, fed)', // the not-due verdict the ask never prints
  'F1 [F1] ration: eating apple (hunger 17, hp 20, hunger-guard', // the close missing
  'F1 [F1] ration: eating apple (hunger 17, hp 20)', // the reason seat missing
  'F1 [F1] ration: eating Apple (hunger 17, hp 20, hunger-guard)', // the item grammar lowercase holds
  'F1 [F1] ration: ate apple (hunger 17 -> 18, hp 20 -> 20) extra', // the suffix never rides
  'F1 ration: ate apple (hunger 17 -> 18, hp 20 -> 20)', // the bare form - no bracket tag
  'F1 [F1] ration: devoured apple (hunger 17 -> 18, hp 20 -> 20)', // the wrong verb
  'F1 [F1] ration: ate apple (hunger 17 -> 18, hp 20)', // the outcome arrow missing
  'F1 [F1] ration: eating apple (hunger seventeen, hp 20, hunger-guard)', // the word form
  'F1 [F1] ration: eating apple (hunger 17, hp 20, hunger-guard) ' // the trailing space
]), 0)

// === THE FENCE BATTERY ===
assert.strictEqual(rationLaneTrendConsistent({ back: { eats: 0 }, prev: { eats: 0 }, cur: { eats: 0 } }), true) // the lawful zero
assert.strictEqual(rationLaneTrendConsistent({ back: { eats: 10 }, prev: { eats: 14 }, cur: { eats: 22 } }), true)
assert.strictEqual(rationLaneTrendConsistent(null), false)
assert.strictEqual(rationLaneTrendConsistent(undefined), false)
assert.strictEqual(rationLaneTrendConsistent([]), false)
assert.strictEqual(rationLaneTrendConsistent({ back: { eats: 1 }, prev: { eats: 2 } }), false) // the cur missing
assert.strictEqual(rationLaneTrendConsistent({ back: { eats: -1 }, prev: { eats: 2 }, cur: { eats: 3 } }), false) // the negative never proves
assert.strictEqual(rationLaneTrendConsistent({ back: { eats: 1.5 }, prev: { eats: 2 }, cur: { eats: 3 } }), false) // the float never proves
assert.strictEqual(rationLaneTrendConsistent({ back: { eats: 1 }, prev: { eats: 2 }, cur: { eats: 3 }, extra: 'rides' }), true) // extra keys never rejected

// === THE BYTE-PIN BATTERY (the row byte, the tail the seat holds) ===
assert.strictEqual(rationLaneTrendRow(null), null) // the fence holds
assert.strictEqual(rationLaneTrendRow({ back: { eats: 5 }, prev: { eats: 5 }, cur: { eats: 9 } }), null) // the held first step - the honest silence
assert.strictEqual(rationLaneTrendRow({ back: { eats: 5 }, prev: { eats: 9 }, cur: { eats: 9 } }), null) // the held second step
const swellRow = rationLaneTrendRow({ back: { eats: 0 }, prev: { eats: 6 }, cur: { eats: 26 } })
assert.ok(swellRow.startsWith(SWELL)) // the swell's head byte
assert.ok(swellRow.endsWith(TAIL)) // the tail byte-exact
assert.ok(!swellRow.includes('owns')) // the seats' own verdict word never rides
assert.ok(!swellRow.includes('dynasty') && !swellRow.includes('turn')) // the dynasty's own never rides
assert.ok(swellRow.includes("the liar-ladder ratchet's own trend prices the liar-ladder ratchet's own mass across the faces")) // the newest sibling the tail names
assert.ok(swellRow.endsWith('the ration lane seat, co-existence by seat never by duplication)')) // the seat's own close the chain keeps
const fadeRow = rationLaneTrendRow({ back: { eats: 26 }, prev: { eats: 20 }, cur: { eats: 2 } })
assert.ok(fadeRow.startsWith(FADE)) // the fade's head byte
assert.ok(fadeRow.endsWith(TAIL))
const swingRow = rationLaneTrendRow({ back: { eats: 14 }, prev: { eats: 22 }, cur: { eats: 6 } })
assert.ok(swingRow.startsWith(SWING)) // the swing's head byte
assert.ok(swingRow.endsWith(TAIL))

// === THE LANES-NEVER-MERGE BATTERY ===
assert.strictEqual(rationLaneCount([
  'F9 [F9] craft torches: skip (no coal: sticks 6 coals 0)', // the torch lane
  '[F8] furnace within reach - opening without a walk', // the smelting lane
  'F5 retry #1 in 5.1s (kick/disconnect)', // the reconnect retry lane
  '[F8] took 1 x stone (1/1)', // the smelt took lane the tooktrend seat prices
  'F2 [F2] food commons: chest at [-120,64,380] holds 3 stacks', // the food commons lane
  'F1 [F1] fuel commons: took 12 units (bread) from a yard chest', // the fuel commons took cell
  ' F1=4[oak_planks:12 stick:6 oak_log:6]', // the inventory dump lane
  'F3 bank: +7', // the bank delta lane
  'ration: eating apple (hunger 17, hp 20, hunger-guard)' // the bare form never rides
]), 0) // the lanes never merge - the ration lane cell alone

console.log('rationlanetrend battery: all pins green')
`

writeFileSync('tests/unit/rationlanetrend.test.mjs', test)
console.log('test written: tests/unit/rationlanetrend.test.mjs', test.length, 'bytes')
