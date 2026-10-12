import { test } from 'node:test'
import assert from 'node:assert/strict'
import { stormDriverJoin, stormDriverSeat, STALL_ADJACENT_MS } from '../../src/lib/stormdriver.mjs'

// (v0.974.6) THE STORM DRIVER'S OWN JOIN - the freshest-witness reach's
// own tests. The fixtures keep the two emitters' line shapes byte-exact:
// the socket-loss certificate (sockloss.mjs's own regex population) and
// the heartbeat pulse gauge (heartbeat.mjs's `b] n=.. ts=..s rss=..M
// late=..ms mainLate=..ms` template). The v0.974.6 reach law: the join
// is UNBOUNDED in lines - a loss's freshest preceding gauge IS its stall
// witness (in process time a gauge is never more than one ~15-20s
// cadence back; the line distance is a noise proxy measured moot on
// FACE 268's 330-line gauge silence that swallowed the whole burst).

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

test('stormDriverJoin: the stall-adjacent class - the freshest gauge past the fence', () => {
  const lines = [
    GAUGE(1, 30, 24750),
    FILLER(1), FILLER(2), FILLER(3),
    LOSS('F5', 'ECONNRESET')
  ]
  const j = stormDriverJoin(lines)
  assert.ok(j, 'the join opens on the storm face')
  assert.equal(j.n, 1)
  assert.equal(j.stall, 1, 'the freshest gauge read 24750ms - the stall rides')
  assert.equal(j.calm, 0)
  assert.equal(j.ungauged, 0)
  assert.equal(j.maxStallLate, 24750)
  assert.equal(j.byKind.ECONNRESET, 1)
  assert.equal(j.stallKinds.ECONNRESET, 1)
  assert.match(j.verdict, /the stall rides the storm/)
})

test('stormDriverJoin: the calm class - the freshest gauge under the fence', () => {
  const lines = [
    GAUGE(1, 30, 0),
    GAUGE(2, 45, 784),
    FILLER(1),
    LOSS('F14', 'EPIPE')
  ]
  const j = stormDriverJoin(lines)
  assert.equal(j.stall, 0, '784ms is the FACE 268 burst\'s own pre-reading - under the 5s fence')
  assert.equal(j.calm, 1)
  assert.equal(j.ungauged, 0)
  assert.equal(j.maxStallLate, 0)
  assert.match(j.verdict, /the driver seat stays empty/)
})

test('stormDriverJoin: the ungauged class - no gauge precedes the loss', () => {
  const lines = [
    FILLER(1), FILLER(2),
    LOSS('F2', 'ECONNRESET'),
    GAUGE(1, 30, 0) // AFTER the loss - the freshest PRECEDING gauge never sees it
  ]
  const j = stormDriverJoin(lines)
  assert.equal(j.ungauged, 1, 'no gauge precedes the loss - the honest ungauged cell')
  assert.equal(j.stall, 0)
  assert.equal(j.calm, 0)
  assert.equal(j.verdict, null, 'all-ungauged with stall 0 reads the honest null')
})

test('stormDriverJoin: the reach is unbounded in lines (the v0.974.6 reach law)', () => {
  const lines = [GAUGE(1, 30, 24750)]
  for (let i = 0; i < 500; i++) lines.push(FILLER(i))
  lines.push(LOSS('F7', 'ECONNRESET'))
  const j = stormDriverJoin(lines)
  assert.equal(j.stall, 1, '500 lines back - in process time one cadence; the freshest witness reads')
  assert.equal(j.calm, 0)
  assert.equal(j.ungauged, 0)
})

test('stormDriverJoin: the freshest gauge wins, never the stale high one', () => {
  const lines = [
    GAUGE(1, 30, 24750), // the old stall
    FILLER(1),
    GAUGE(2, 60, 210), // the decay - the freshest witness
    FILLER(2),
    LOSS('F9', 'ECONNRESET')
  ]
  const j = stormDriverJoin(lines)
  assert.equal(j.stall, 0, 'the freshest gauge read 210ms - the stale 24750 never reaches forward')
  assert.equal(j.calm, 1)
  assert.equal(j.maxStallLate, 0)
})

test('stormDriverJoin: the fence falls back on junk (the fence law)', () => {
  const lines = [GAUGE(1, 30, 4000), LOSS('F9', 'ECONNRESET')]
  assert.equal(stormDriverJoin(lines, { stallMs: NaN }).stall, 0, 'junk threshold falls back to the 5000 default - 4000 stays calm')
  assert.equal(stormDriverJoin(lines, { stallMs: 3000 }).stall, 1, 'a lower threshold arms the same reading')
  assert.equal(stormDriverJoin(lines, { stallMs: -5 }).stall, 0, 'negative threshold falls back, never arms')
  assert.equal(stormDriverJoin(lines, { stallMs: 5000 }).stallMs, 5000)
})

test('stormDriverJoin: the twin line is the same loss\'s certificate, never a second loss', () => {
  const lines = [
    GAUGE(1, 30, 6000),
    LOSS('F10', 'ECONNRESET'), TWIN('F10', 'ECONNRESET')
  ]
  const j = stormDriverJoin(lines)
  assert.equal(j.n, 1, 'one certificate - the twin rides the sockloss book\'s own reconcile, not the join\'s population')
})

test('stormDriverJoin: the FACE 268 compact - the whole burst inside one gauge silence, all calm', () => {
  // the measured shape: gauge n=26 @ts=521 mainLate=784 -> 15 losses in
  // one 330-line silence -> gauge n=27 @ts=541 mainLate=205; the burst
  // lived BETWEEN gauges, the main thread calm at both bookends.
  const lines = [
    GAUGE(25, 501, 446),
    FILLER(1),
    GAUGE(26, 521, 784),
    FILLER(2), FILLER(3),
    LOSS('F5', 'ECONNRESET'),
    FILLER(4), FILLER(5),
    LOSS('F14', 'ECONNRESET'),
    FILLER(6),
    LOSS('F2', 'EPIPE'),
    GAUGE(27, 541, 205)
  ]
  const j = stormDriverJoin(lines)
  assert.equal(j.n, 3)
  assert.equal(j.stall, 0, 'every loss\'s freshest gauge read 784ms - the driver seat stays empty')
  assert.equal(j.calm, 3)
  assert.equal(j.ungauged, 0)
  assert.equal(j.byKind.ECONNRESET, 2)
  assert.equal(j.byKind.EPIPE, 1)
  assert.match(j.verdict, /the losses rode calm gauges/, 'all three witnessed calm - the plain calm words')
})

test('stormDriverJoin: the mixed face - one loss pre-gauge, one post-gauge', () => {
  const lines = [
    LOSS('F5', 'ECONNRESET'), // before any gauge - ungauged
    GAUGE(1, 30, 784),
    LOSS('F2', 'EPIPE') // freshest gauge 784 - calm
  ]
  const j = stormDriverJoin(lines)
  assert.equal(j.n, 2)
  assert.equal(j.ungauged, 1)
  assert.equal(j.calm, 1)
  assert.match(j.verdict, /calm 1 \/ ungauged 1/, 'the ungauged share rides named, never silently')
})

test('stormDriverSeat: the seat laws', () => {
  assert.equal(stormDriverSeat({ stall: 0, calm: 3, ungauged: 0, n: 3 }), 'the losses rode calm gauges - the driver seat stays empty')
  assert.match(stormDriverSeat({ stall: 0, calm: 1, ungauged: 14, n: 15 }), /calm 1 \/ ungauged 14/, 'the ungauged share rides named in the calm words')
  assert.match(stormDriverSeat({ stall: 1, calm: 0, ungauged: 14, n: 15 }), /mixed/, 'a stall finding keeps its own words - the numbers name the rest')
  assert.match(stormDriverSeat({ stall: 2, calm: 0, ungauged: 0, n: 3, maxStallLate: 24750 }), /the stall rides the storm/)
  assert.match(stormDriverSeat({ stall: 1, calm: 1, ungauged: 1, n: 3 }), /mixed/)
  assert.equal(stormDriverSeat({ stall: 0, calm: 0, ungauged: 0, n: 0 }), null, 'no losses - no seat')
  assert.equal(stormDriverSeat({ stall: 2, calm: 2, ungauged: 2, n: 3 }), null, 'the cells exceed the total - junk arithmetic never invents a verdict')
  assert.equal(stormDriverSeat({}), null, 'junk reads null')
  assert.match(stormDriverSeat({ stall: 3, calm: 0, ungauged: 0, n: 6, maxStallLate: 0 }), /mixed/, 'exactly half is the tie - the tie owns nothing')
  assert.match(stormDriverSeat({ stall: 4, calm: 0, ungauged: 0, n: 6, maxStallLate: 0 }), /peak mainLate 0ms/, 'a majority with a zero peak rides the words honestly')
})

test('stormDriverJoin: the constant rides the house\'s own fence', () => {
  assert.equal(STALL_ADJACENT_MS, 5000, 'the blackbox dump\'s own 5s freeze threshold')
})
