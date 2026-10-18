// (v0.976.244) THE DEATH SPOT MEMORIZE'S OWN TREND - the word's own pins.
// THE EVIDENCE (the fleet window 457..469 the artifact fetches re-spoke):
// the miner's own death read prints 'F18 [F18] water: death spot
// memorized as a hazard at [-122,45,397] (9 live, fleet-wide)' (the
// v0.201.0 record read, one call site) and no book owned the mass - the
// hazard memorize trend's own seat RESERVED the lane by name (the
// exclusion note + the test pin the reservation prices twice), the
// water rescue lane's own census and the reloot arm's own seat the
// neighbouring lanes price - the memorize census itself rode unread.
// The pins: the census parse byte-exact (the F469 and the F457 lines
// whole, the mass sums, the live/peak cells, the near-miss lanes'
// refusal, the junk laws), the fence (every honest branch, the junk
// laws), the row (the swell / the fade / the swing byte-exact, the held
// step's honest null, the three-face zero's lawful null, the junk
// fold's null), the SERIES the field recorded (the 12 faces 75u, the
// book 5 swings / 2 swells / 0 fades / 4 honest silences, the TOP 16,
// the FLOOR 1, the bounds +14/-12, the round trips the honest ZERO) and
// the emitter grammar (the miner template the word parses is the line
// the fleet prints - the deliberate-miss law: a near-miss census voice
// never rides).
import { test } from 'node:test'
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { deathSpotMemorizeCensus, deathSpotMemorizeTrendConsistent, deathSpotMemorizeTrendRow } from '../../src/lib/deathspotmemorizetrend.mjs'

const TAIL = "(the hazard memorize's own seat prices the hazard board's own write, the water rescue lane's own seat prices the rescue's own mass, the reloot arm's own seat prices the own death spot's walk - the death spot memorize's mass row alone, co-existence by seat never by duplication)"

test('the census: the F469 line rides whole (byte-exact shape)', () => {
  const lines = [
    'F9 [F9] water: hazard memorized at [-126,62,386] (2 live, fleet-wide)',
    'F18 [F18] water: death spot memorized as a hazard at [-122,45,397] (9 live, fleet-wide)',
    'F9 reloot: walking to the own death spot [-114,61,367] - the arm\'s own walk a different lane'
  ]
  const c = deathSpotMemorizeCensus(lines)
  assert.deepEqual(c, { memorizes: 1, live: 9, peak: 9 })
})

test('the census: the F457 line rides whole (the live cell the print holds)', () => {
  const c = deathSpotMemorizeCensus([
    'F1 [F1] water: death spot memorized as a hazard at [-123,62,380] (5 live, fleet-wide)'
  ])
  assert.deepEqual(c, { memorizes: 1, live: 5, peak: 5 })
})

test('the census: the mass sums, the last print owns the live cell, the peak rides the high-water', () => {
  const c = deathSpotMemorizeCensus([
    'F1 [F1] water: death spot memorized as a hazard at [-123,62,380] (5 live, fleet-wide)',
    'F8 [F8] water: death spot memorized as a hazard at [-138,64,398] (14 live, fleet-wide)',
    'F12 [F12] water: death spot memorized as a hazard at [-148,64,413] (7 live, fleet-wide)'
  ])
  assert.deepEqual(c, { memorizes: 3, live: 7, peak: 14 })
})

test('the census: near-misses and junk never ride', () => {
  // the sibling's own write - the hazardmemorizetrend seat's own lane
  assert.deepEqual(deathSpotMemorizeCensus(['F2 [F2] water: hazard memorized at [-122,72,417] (3 live, fleet-wide)']), { memorizes: 0, live: 0, peak: 0 })
  // the reloot arm's own walk - the sealdeath seat's own lane
  assert.deepEqual(deathSpotMemorizeCensus(['F10 reloot: walking to the own death spot [-114,61,367] - the arm walks']), { memorizes: 0, live: 0, peak: 0 })
  // the doom book's own death prose - a different lane
  assert.deepEqual(deathSpotMemorizeCensus(['F4 [F4] aborted (dead - the hazard stays at the death spot)']), { memorizes: 0, live: 0, peak: 0 })
  // the truncated tail never rides (the strict grammar's own fence)
  assert.deepEqual(deathSpotMemorizeCensus(['F18 [F18] water: death spot memorized as a hazard at [-122,45,397] (9 live)']), { memorizes: 0, live: 0, peak: 0 })
  assert.deepEqual(deathSpotMemorizeCensus(['F18 [F18] water: death spot memorized as a hazard at [-122,45,397]']), { memorizes: 0, live: 0, peak: 0 })
  assert.deepEqual(deathSpotMemorizeCensus(['F18 [F18] water: death spot memorized as a hazard']), { memorizes: 0, live: 0, peak: 0 })
  // the un-parenthesised live cell never rides
  assert.deepEqual(deathSpotMemorizeCensus(['F18 [F18] water: death spot memorized as a hazard at [-122,45,397] 9 live, fleet-wide']), { memorizes: 0, live: 0, peak: 0 })
  // the bot tags must agree (the wrl lane's own backref law)
  assert.deepEqual(deathSpotMemorizeCensus(['F18 [F19] water: death spot memorized as a hazard at [-122,45,397] (9 live, fleet-wide)']), { memorizes: 0, live: 0, peak: 0 })
  // the wrong frame never rides
  assert.deepEqual(deathSpotMemorizeCensus(['F18 [F18] water: death spots memorized as a hazard at [-122,45,397] (9 live, fleet-wide)']), { memorizes: 0, live: 0, peak: 0 })
  // junk-safe: the empty and non-string faces hold the lawful zero, the
  // non-array junk prices null (the .240 word's own law the census rides)
  assert.deepEqual(deathSpotMemorizeCensus([]), { memorizes: 0, live: 0, peak: 0 })
  assert.equal(deathSpotMemorizeCensus(null), null)
  assert.equal(deathSpotMemorizeCensus('F18 [F18] water: death spot memorized as a hazard at [-122,45,397] (9 live, fleet-wide)'), null)
  assert.deepEqual(deathSpotMemorizeCensus([42, {}]), { memorizes: 0, live: 0, peak: 0 })
})

test('the fence: every honest branch and every junk law rides', () => {
  const face = { memorizes: 8, live: 9, peak: 16 }
  assert.equal(deathSpotMemorizeTrendConsistent({ back: face, prev: face, cur: face }), true)
  // zero counts are lawful (the lane-never-fired face the fence keeps)
  assert.equal(deathSpotMemorizeTrendConsistent({ back: { memorizes: 0, live: 0, peak: 0 }, prev: { memorizes: 0, live: 0, peak: 0 }, cur: { memorizes: 0, live: 0, peak: 0 } }), true)
  // extra keys never rejected (the family's own extra-keys law)
  assert.equal(deathSpotMemorizeTrendConsistent({ back: { ...face, note: 'x' }, prev: face, cur: face }), true)
  // the junk laws: the null face, the missing face, the non-integer, the negative
  assert.equal(deathSpotMemorizeTrendConsistent(null), false)
  assert.equal(deathSpotMemorizeTrendConsistent({}), false)
  assert.equal(deathSpotMemorizeTrendConsistent({ back: face, prev: face }), false)
  assert.equal(deathSpotMemorizeTrendConsistent({ back: face, prev: { memorizes: 1.5, live: 0, peak: 0 }, cur: face }), false)
  assert.equal(deathSpotMemorizeTrendConsistent({ back: face, prev: { memorizes: -1, live: 0, peak: 0 }, cur: face }), false)
  assert.equal(deathSpotMemorizeTrendConsistent({ back: 'x', prev: face, cur: face }), false)
  assert.equal(deathSpotMemorizeTrendConsistent([face, face, face]), false)
})

test('the row: the swell and the fade byte-exact', () => {
  const swell = deathSpotMemorizeTrendRow({ back: { memorizes: 4, live: 5, peak: 5 }, prev: { memorizes: 5, live: 6, peak: 14 }, cur: { memorizes: 8, live: 8, peak: 16 } })
  assert.equal(swell, 'the death spot memorize trend (v0.976.244): the memorize\'s own swell ran two steps deep - 4 -> 5 (+1) -> 8 (+3) - the memorize mass\'s own swell, the live ledger rode 5 -> 6 -> 8, the peak rode 5 -> 14 -> 16 ' + TAIL)
  const fade = deathSpotMemorizeTrendRow({ back: { memorizes: 5, live: 3, peak: 4 }, prev: { memorizes: 3, live: 2, peak: 3 }, cur: { memorizes: 1, live: 1, peak: 2 } })
  assert.equal(fade, 'the death spot memorize trend (v0.976.244): the memorize\'s own fade ran two steps deep - 5 -> 3 (-2) -> 1 (-2) - the memorize mass\'s own fade, the live ledger rode 3 -> 2 -> 1, the peak rode 4 -> 3 -> 2 ' + TAIL)
})

test('the row: the swing rides, the held step is the honest null', () => {
  // the W458 swing the field recorded: 7 -> 4 (-3) -> 5 (+1)
  const swing = deathSpotMemorizeTrendRow({ back: { memorizes: 7, live: 7, peak: 7 }, prev: { memorizes: 4, live: 5, peak: 5 }, cur: { memorizes: 5, live: 6, peak: 14 } })
  assert.equal(swing, 'the death spot memorize trend (v0.976.244): the memorize mass\'s own swing - 7 -> 4 (-3) -> 5 (+1) - the fade and the swell traded seats between the faces, the live ledger rode 7 -> 5 -> 6, the peak rode 7 -> 5 -> 14 ' + TAIL)
  // a held step prices no direction (the family's own held law)
  assert.equal(deathSpotMemorizeTrendRow({ back: { memorizes: 1, live: 5, peak: 5 }, prev: { memorizes: 2, live: 2, peak: 2 }, cur: { memorizes: 2, live: 8, peak: 8 } }), null)
  assert.equal(deathSpotMemorizeTrendRow({ back: { memorizes: 2, live: 2, peak: 2 }, prev: { memorizes: 2, live: 8, peak: 8 }, cur: { memorizes: 16, live: 13, peak: 15 } }), null)
  // the three-face zero mass prices nothing (the lane never fired)
  assert.equal(deathSpotMemorizeTrendRow({ back: { memorizes: 0, live: 0, peak: 0 }, prev: { memorizes: 0, live: 0, peak: 0 }, cur: { memorizes: 0, live: 0, peak: 0 } }), null)
  // the junk fold prices null (the fence's own law the row inherits)
  assert.equal(deathSpotMemorizeTrendRow(null), null)
  assert.equal(deathSpotMemorizeTrendRow({}), null)
})

test('the SERIES: the field the window 457..469 recorded re-speaks', () => {
  // the census states the 12 faces hold (the artifact fetches re-spoke,
  // the fieldread proof 12/12 census==raw zero mismatches rides the
  // scripts/fieldread-deathspot-0142.mjs walk): [memorizes, live, peak]
  const series = [
    [457, 7, 7, 7], [458, 4, 5, 5], [459, 5, 6, 14], [460, 8, 8, 16],
    [461, 10, 10, 10], [462, 1, 5, 5], [463, 2, 2, 2], [464, 2, 8, 8],
    [466, 16, 13, 15], [467, 4, 3, 16], [468, 8, 9, 12], [469, 8, 5, 16]
  ]
  const total = series.reduce((s, f) => s + f[1], 0)
  assert.equal(total, 75, 'the window\'s own mass the census sums')
  const counts = series.map(f => f[1])
  assert.equal(Math.max(...counts), 16, 'the TOP the F466 crest rides')
  assert.equal(Math.min(...counts), 1, 'the FLOOR the F462 trough rides')
  // the book: 11 windows - the 5 swings (W458, W461, W462, W466, W467),
  // the 2 swells (W459, W460), the 0 fades, the 4 honest silences
  // (W463, W464, W468, W469 - the held steps the family's own held law
  // keeps), 7 of 11 speaking; the round trips the honest ZERO (no
  // window returns to its back face - the book prices none)
  const rows = []
  for (let i = 0; i + 2 < series.length; i++) {
    const f = (n) => ({ memorizes: series[n][1], live: series[n][2], peak: series[n][3] })
    rows.push(deathSpotMemorizeTrendRow({ back: f(i), prev: f(i + 1), cur: f(i + 2) }))
  }
  const speaking = rows.filter(r => r !== null)
  assert.equal(speaking.length, 7, 'the book\'s own speaking windows')
  assert.equal(speaking.filter(r => r.includes('own swing')).length, 5, 'the five swings the book holds')
  assert.equal(speaking.filter(r => r.includes('own swell')).length, 2, 'the two swells the book holds')
  assert.equal(speaking.filter(r => r.includes('own fade')).length, 0, 'the zero fades the book holds')
  // the bounds: +14 the leg the W464 and the W466 rides (2 -> 16 twice),
  // -12 the leg the W466 rides (16 -> 4)
  assert.ok(speaking.some(r => r.includes('2 -> 16 (+14) -> 4 (-12)')), 'the W466 double bound the arc prices')
  // the round trips the honest zero: no speaking window's arc returns
  assert.ok(!speaking.some(r => /(\d+) -> \d+ \([+-]\d+\) -> \1 /.test(r)), 'the round trips the book prices none')
})

test('the emitter grammar: the miner template the word parses rides the fleet\'s own print', () => {
  // the word parses the line the fleet ALREADY prints (the census guard's
  // own law: zero fleet wiring, zero new fleet log lines) - the emitter's
  // own shape the miner source holds must stay the grammar the census
  // parses (the deliberate-miss law: the parse never forks a second voice)
  const minerSrc = readFileSync(new URL('../../src/bots/miner.mjs', import.meta.url), 'utf8')
  assert.ok(minerSrc.includes('water: death spot memorized as a hazard at [${Math.floor(dp.x)},${Math.floor(dp.y)},${Math.floor(dp.z)}] (${live} live, fleet-wide)'), 'the miner death-spot memorize emitter the word parses must stand')
})
