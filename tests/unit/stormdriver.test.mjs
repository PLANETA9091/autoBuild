import { test } from 'node:test'
import assert from 'node:assert/strict'
import { stormDriverJoin, stormDriverSeat, STALL_ADJACENT_MS, STORM_DRIVER_WINDOW } from '../../src/lib/stormdriver.mjs'

// (v0.974.5) THE STORM DRIVER'S OWN JOIN - the socket loss ↔ mainLate
// stall lens's own tests. The fixtures keep the two emitters' line
// shapes byte-exact: the socket-loss certificate (sockloss.mjs's own
// regex population) and the heartbeat pulse gauge (heartbeat.mjs's
// `b] n=.. ts=..s rss=..M late=..ms mainLate=..ms` template).

const LOSS = (b, k) => `${b} [${b}] error: write ${k}`
const TWIN = (b, k) => `${b} [${b}] socket error: write ${k}`
const GAUGE = (n, ts, mainLate, rss = 400) => `b] n=${n} ts=${ts}s rss=${rss}M late=${20 + (n % 7)}ms mainLate=${mainLate}ms`
const FILLER = (i) => `F${(i % 15) + 2} [F${(i % 15) + 2}] water: pass ${i} head=dry shore=hit r=1`

test('stormDriverJoin: junk reads null (the junk convention)', () => {
  assert.equal(stormDriverJoin(null), null)
  assert.equal(stormDriverJoin(undefined), null)
  assert.equal(stormDriverJoin('a string'), null)
  assert.equal(stormDriverJoin(42), null)
  assert.equal(stormDriverJoin([FILLER(1), GAUGE(1, 30, 0), FILLER(2)]), null, 'a face with no socket loss reads null - the honest zero is the book row\'s own law')
})

test('stormDriverJoin: the stall-adjacent class - a loss whose window holds a mainLate past the fence', () => {
  const lines = [
    GAUGE(1, 30, 24750),
    FILLER(1), FILLER(2), FILLER(3),
    LOSS('F5', 'ECONNRESET')
  ]
  const j = stormDriverJoin(lines)
  assert.ok(j, 'the join opens on the storm face')
  assert.equal(j.n, 1)
  assert.equal(j.stall, 1, 'the loss rode a 24750ms gauge inside the window')
  assert.equal(j.calm, 0)
  assert.equal(j.ungauged, 0)
  assert.equal(j.maxStallLate, 24750)
  assert.equal(j.byKind.ECONNRESET, 1)
  assert.equal(j.stallKinds.ECONNRESET, 1)
  assert.match(j.verdict, /the stall rides the storm/)
})

test('stormDriverJoin: the calm class - gauges in the window, none past the fence', () => {
  const lines = [
    GAUGE(1, 30, 0),
    GAUGE(2, 45, 2006),
    FILLER(1),
    LOSS('F14', 'EPIPE')
  ]
  const j = stormDriverJoin(lines)
  assert.equal(j.stall, 0, '2006ms is the known CPU-starvation band, under the 5s fence')
  assert.equal(j.calm, 1)
  assert.equal(j.ungauged, 0)
  assert.equal(j.maxStallLate, 0)
  assert.match(j.verdict, /the driver seat stays empty/)
})

test('stormDriverJoin: the ungauged class - no gauge line in the window', () => {
  const lines = [
    FILLER(1), FILLER(2),
    LOSS('F2', 'ECONNRESET'),
    GAUGE(1, 30, 0) // AFTER the loss - the backward window never reads it
  ]
  const j = stormDriverJoin(lines)
  assert.equal(j.ungauged, 1, 'the gauge rides after the loss - the driver direction never sees it')
  assert.equal(j.stall, 0)
  assert.equal(j.calm, 0)
  assert.equal(j.verdict, null, 'all-ungauged with stall 0 reads the empty seat\'s honest null')
})

test('stormDriverJoin: the window is a line distance, not a vibes clock', () => {
  const gauge = GAUGE(1, 30, 24750)
  const lines = [gauge]
  for (let i = 0; i < STORM_DRIVER_WINDOW - 1; i++) lines.push(FILLER(i))
  lines.push(LOSS('F7', 'ECONNRESET'))
  assert.equal(stormDriverJoin(lines).stall, 1, 'the gap is exactly the window - the stall still rides')
  lines.splice(1, 0, FILLER(99))
  const j = stormDriverJoin(lines)
  assert.equal(j.stall, 0, 'one line past the window - the stall cannot reach')
  assert.equal(j.ungauged, 1, 'no gauge inside the window - the honest ungauged cell')
})

test('stormDriverJoin: the fence falls back on junk (the fence law)', () => {
  const lines = [GAUGE(1, 30, 4000), LOSS('F9', 'ECONNRESET')]
  assert.equal(stormDriverJoin(lines, { stallMs: NaN }).stall, 0, 'junk threshold falls back to the 5000 default - 4000 stays calm')
  assert.equal(stormDriverJoin(lines, { stallMs: 3000 }).stall, 1, 'a lower threshold arms the same reading')
  assert.equal(stormDriverJoin(lines, { stallMs: -5 }).stall, 0, 'negative threshold falls back, never arms')
  const w = stormDriverJoin(lines, { window: NaN })
  assert.equal(w.window, STORM_DRIVER_WINDOW, 'junk window falls back to the 20 default')
  assert.equal(stormDriverJoin(lines, { window: 0 }).ungauged, 1, 'a zero window sees no gauges - the ungauged cell, never a guessed reading')
})

test('stormDriverJoin: the twin line is the same loss\'s certificate, never a second loss', () => {
  const lines = [
    GAUGE(1, 30, 6000),
    LOSS('F10', 'ECONNRESET'), TWIN('F10', 'ECONNRESET')
  ]
  const j = stormDriverJoin(lines)
  assert.equal(j.n, 1, 'one certificate - the twin rides the sockloss book\'s own reconcile, not the join\'s population')
})

test('stormDriverJoin: the FACE 268 compact - the stall tail, then the calm beyond the window', () => {
  const lines = [
    GAUGE(1, 120, 24750),
    FILLER(1),
    LOSS('F5', 'ECONNRESET'), // rides the stall's own tail (peak-over-window semantics)
    GAUGE(2, 300, 150) // the stall decayed - but the tail's reach already covered F5
  ]
  for (let i = 2; i < 26; i++) lines.push(FILLER(i)) // the tail's reach expires past the window
  lines.push(GAUGE(3, 480, 210))
  lines.push(FILLER(30))
  lines.push(LOSS('F14', 'ECONNRESET')) // 2 lines past the calm gauge, 30 past the stall - calm
  lines.push(FILLER(31))
  lines.push(LOSS('F2', 'EPIPE')) // 4 past the calm gauge - calm
  const j = stormDriverJoin(lines)
  assert.equal(j.n, 3)
  assert.equal(j.stall, 1, 'F5 rides the 24750 tail; the late losses sit past the window')
  assert.equal(j.calm, 2)
  assert.equal(j.byKind.ECONNRESET, 2)
  assert.equal(j.byKind.EPIPE, 1)
  assert.equal(j.stallKinds.ECONNRESET, 1)
  assert.equal(j.stallKinds.EPIPE, undefined)
  assert.match(j.verdict, /the seat is mixed/, '1 of 3 is no majority - the tie law holds')
})

test('stormDriverSeat: the seat laws', () => {
  assert.equal(stormDriverSeat({ stall: 0, calm: 3, ungauged: 0, n: 3 }), 'the losses rode calm gauges - the driver seat stays empty')
  assert.match(stormDriverSeat({ stall: 0, calm: 1, ungauged: 14, n: 15 }), /ungauged 14 of 15.*unpriced/, 'the FACE 268 first-read lesson: ungauged dominance never reads the calm words')
  assert.match(stormDriverSeat({ stall: 1, calm: 0, ungauged: 14, n: 15 }), /mixed/, 'a stall finding keeps its own words - the numbers name the rest')
  assert.match(stormDriverSeat({ stall: 2, calm: 0, ungauged: 0, n: 3, maxStallLate: 24750 }), /the stall rides the storm/)
  assert.match(stormDriverSeat({ stall: 1, calm: 1, ungauged: 1, n: 3 }), /mixed/)
  assert.equal(stormDriverSeat({ stall: 0, calm: 0, ungauged: 0, n: 0 }), null, 'no losses - no seat')
  assert.equal(stormDriverSeat({ stall: 2, calm: 2, ungauged: 2, n: 3 }), null, 'the cells exceed the total - junk arithmetic never invents a verdict')
  assert.equal(stormDriverSeat({}), null, 'junk reads null')
  assert.match(stormDriverSeat({ stall: 3, calm: 0, ungauged: 0, n: 6, maxStallLate: 0 }), /mixed/, 'exactly half is the tie - the tie owns nothing')
  assert.match(stormDriverSeat({ stall: 4, calm: 0, ungauged: 0, n: 6, maxStallLate: 0 }), /peak mainLate 0ms/, 'a majority with a zero peak rides the words honestly')
})

test('stormDriverJoin: the constants ride the house\'s own fences', () => {
  assert.equal(STALL_ADJACENT_MS, 5000, 'the blackbox dump\'s own 5s freeze threshold')
  assert.equal(STORM_DRIVER_WINDOW, 20, 'the churn join\'s own 20-line window')
})
