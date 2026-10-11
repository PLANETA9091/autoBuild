//
// standdownclock.test.mjs - THE STANDDOWN'S OWN CLOCK (v0.921.0)
//
// Face 193's own read named the front: the arms arrive in the closing
// third and the saves still don't hold (released 38 / frozen 16). The
// house priced the standdown's COST (the v0.431.0 durations) and its
// BLINDNESS (the v0.799.0 blind seat) - the freeze's own WHEN never
// rode a clock. This meter stamps every frozen-standdown end on the
// heartbeat rail (the water clock's own stamp law), cuts the face's
// own thirds (the v0.733.0 law), and seats the strict majority.
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { standdownClockBook, standdownClockVerdict, standdownClockRow, STANDDOWN_LEVERS } from '../../src/lib/standdownclock.mjs'
import { rescueLedger, rescueEndClass, rescueEndSeconds } from '../../src/lib/rescue-ledger.mjs'
import { parseRescueBlind } from '../../src/lib/rescueclock.mjs'

const hb = (n, ts) => `b] n=${n} ts=${ts}s rss=400M late=10ms mainLate=5ms`
const sd = (bot, { o = 4, dur = '0.7', bracketless = false } = {}) =>
  `${bot} [${bot}] water: rescue standing down (frozen physics - the walk gate reopens, the reconnect lane owns a dead client)` +
  (bracketless ? '' : ` [blind: ${o} passes, 0 shore scans hit, 0 standing probes - no ground truth ever gathered]`) +
  ` in ${dur}s`

test('the face-193 shape: the opening freeze owns the standdown book (the row byte-exact)', () => {
  const lines = [
    hb(1, 100),
    sd('F17', { o: 4, dur: '0.7' }), // early
    hb(2, 200),
    sd('F17', { o: 12, dur: '3.4' }), // early
    hb(3, 220),
    sd('F7', { o: 6, dur: '17.2' }), // early
    hb(4, 700),
    sd('F1', { o: 9, dur: '5.0' }), // late
    hb(5, 800),
    sd('F10', { dur: '2.1', bracketless: true }), // late, no bracket
    hb(6, 900),
  ]
  const book = standdownClockBook(lines)
  assert.equal(book.clockEnd, 900)
  assert.equal(book.stamps.length, 5)
  assert.equal(book.untimed, 0)
  assert.equal(book.stamps[4].blind, null) // the bracketless end rides a null blind honestly
  const v = standdownClockVerdict(book)
  assert.ok(v)
  assert.equal(v.timed, 5)
  assert.equal(v.unplaced, 0)
  assert.deepEqual(v.thirds, { early: 3, mid: 0, late: 2 })
  assert.deepEqual(v.seat, { cls: 'early', owns: 3 })
  assert.equal(v.burst, 2)
  assert.equal(v.burstShare, 0.4)
  assert.deepEqual(v.span, { first: 100, last: 800 })
  assert.deepEqual(v.perBot, {
    F17: { early: 2, mid: 0, late: 0 },
    F7: { early: 1, mid: 0, late: 0 },
    F1: { early: 0, mid: 0, late: 1 },
    F10: { early: 0, mid: 0, late: 1 },
  })
  assert.equal(v.frozenS, 28.4)
  assert.equal(v.frozenN, 5)
  assert.equal(v.blindPasses, 31)
  assert.equal(v.blindLines, 4)
  assert.equal(
    standdownClockRow(v),
    "the standdown's own clock (v0.921.0): early 3 / mid 0 / late 2 of 5 frozen standdowns - early owns 3 of 5 (60%) - THE OPENING FREEZE: the spawn's own water froze the first rescues - the bots' own legs: F17 2/0/0 + F1 0/0/1 - the frozen seconds' own bill: 28.4s of 5 - the blind walks' own passes: 31 of 4 - the burst's own share: 2 of 5 (40%)"
  )
})

test('THE THIRDS CUT: the v0.733.0 law - t < thirdS strict, the boundary rides the later third', () => {
  const lines = [
    hb(1, 299),
    sd('F1'), // stamps 299 -> early
    hb(2, 300),
    sd('F2'), // stamps 300 -> mid (the boundary's own law)
    hb(3, 599),
    sd('F3'), // stamps 599 -> mid
    hb(4, 600),
    sd('F4'), // stamps 600 -> late
    hb(5, 900),
    sd('F5'), // stamps 900 -> late
  ]
  const v = standdownClockVerdict(standdownClockBook(lines))
  assert.ok(v)
  assert.equal(v.clockEnd, 900)
  assert.equal(v.thirdS, 300)
  assert.deepEqual(v.thirds, { early: 1, mid: 2, late: 2 })
  assert.equal(v.seat, null) // a tie owns nothing - the storm-has-no-seat precedent
  assert.match(
    standdownClockRow(v),
    / - no third owns the freeze - the standdowns spread across the clock - /
  )
})

test('THE STAMP LAW: an end before the first heartbeat rides unplaced, never placed', () => {
  const lines = [
    sd('F2'), // no hb yet -> ts null -> unplaced
    hb(1, 700),
    sd('F3'), // stamps 700 -> late (thirdS 233.33)
  ]
  const book = standdownClockBook(lines)
  assert.equal(book.untimed, 1)
  const v = standdownClockVerdict(book)
  assert.ok(v)
  assert.equal(v.timed, 1)
  assert.equal(v.unplaced, 1)
  assert.deepEqual(v.thirds, { early: 0, mid: 0, late: 1 })
  assert.match(standdownClockRow(v), / of 1 frozen standdown \(unplaced 1\)/)
})

test('THE HONEST SILENCE: no clock, no ends, all-unplaced - the verdict never invents', () => {
  // no heartbeat -> no rail -> no thirds
  assert.equal(standdownClockVerdict(standdownClockBook([sd('F2')])), null)
  // ends exist but none timed -> the silence
  const book = standdownClockBook([sd('F2')])
  assert.equal(book.untimed, 1)
  assert.equal(standdownClockVerdict(book), null)
  // an empty face
  assert.equal(standdownClockVerdict(standdownClockBook([])), null)
  assert.equal(standdownClockVerdict(standdownClockBook(undefined)), null)
  assert.equal(standdownClockRow(null), null)
  assert.equal(standdownClockRow({}), null)
  assert.equal(standdownClockRow({ timed: 0, thirds: { early: 0, mid: 0, late: 0 } }), null)
})

test('THE COUNT LAW: the book\'s own counts ride the house\'s own classifiers, never a fork', () => {
  const lines = [
    hb(1, 100),
    'F17 [F17] water: drowning rescue start (drowning, oxygen 10)',
    sd('F17'),
    'F7 [F7] water: drowning rescue start (drowning, oxygen 8)',
    sd('F7', { o: 12 }),
    'F7 [F7] water: rescue released on shore (dry ground under both feet) in 4.2s', // another class - never counted
    'F9 [F9] water: drowning rescue start (drowning, oxygen 8)', // a start, not an end
  ]
  const book = standdownClockBook(lines)
  assert.equal(book.stamps.length, 2)
  // the house's own classifiers read the same fixture - one classifier
  assert.equal(rescueLedger(lines).totals.frozenStanddown, book.stamps.length)
  assert.equal(rescueEndClass(sd('F17')), 'frozenStanddown')
  assert.ok(STANDDOWN_LEVERS.early.includes('THE OPENING FREEZE'))
  assert.ok(STANDDOWN_LEVERS.late.includes('THE CLOSING FREEZE'))
})

test('THE TAGLESS FENCE: a standdown without a bot tag names nobody - junk stays junk', () => {
  const lines = [
    hb(1, 600),
    'F [F] water: rescue standing down (frozen physics - the walk gate reopens, the reconnect lane owns a dead client) [blind: 4 passes, 0 shore scans hit, 0 standing probes - no ground truth ever gathered] in 1.0s', // no F\d+ tag
    sd('F3'), // stamps 600 -> late
  ]
  const book = standdownClockBook(lines)
  assert.equal(book.stamps.length, 1)
  assert.equal(book.stamps[0].bot, 'F3')
})

test('THE JUNK BATTERY: junk never prices, never counts, never seats', () => {
  // non-string rows skipped end to end
  const book = standdownClockBook([42, null, undefined, { line: true }, hb(1, 600), sd('F2')])
  assert.equal(book.stamps.length, 1)
  assert.equal(book.clockEnd, 600)
  // junk verdicts read the silence
  assert.equal(standdownClockVerdict(null), null)
  assert.equal(standdownClockVerdict('nope'), null)
  assert.equal(standdownClockVerdict({}), null)
  assert.equal(standdownClockVerdict({ stamps: 'nope', clockEnd: 600 }), null)
  assert.equal(standdownClockVerdict({ stamps: [{ bot: 'F2', ts: 'junk' }], clockEnd: 600 }), null) // junk ts never prices, never counts
  assert.equal(standdownClockVerdict({ stamps: [{ bot: 'F2', ts: 0 }], clockEnd: 0 }), null) // no rail, no thirds
  assert.equal(standdownClockVerdict({ stamps: [{ bot: 'F2', ts: 0 }], clockEnd: -5 }), null)
})

test('THE TAIL LAW: the frozen seconds and the blind passes stay honest across the unplaced book', () => {
  const lines = [
    sd('F9', { o: 5, dur: '2.0' }), // no hb yet -> unplaced, but its price rides the tail
    hb(1, 600),
    sd('F2', { o: 3, dur: '1.0' }), // stamps 600 -> late
  ]
  const v = standdownClockVerdict(standdownClockBook(lines))
  assert.ok(v)
  assert.equal(v.timed, 1)
  assert.equal(v.unplaced, 1)
  assert.equal(v.frozenS, 3)
  assert.equal(v.frozenN, 2) // the tail counts both - placed or not
  assert.equal(v.blindPasses, 8)
  assert.equal(v.blindLines, 2)
  const row = standdownClockRow(v)
  assert.match(row, /the frozen seconds' own bill: 3s of 2/)
  assert.match(row, /the blind walks' own passes: 8 of 2/)
})

test('THE BYTE LAW: the legs\' tie reads byte-asc, and the burst tail names a concentrated window', () => {
  const lines = [
    hb(1, 100),
    hb(2, 700),
    sd('F7', { o: 1, dur: '1.0' }), // stamps 700 -> late
    hb(3, 710),
    sd('F10', { o: 2, dur: '1.1' }), // stamps 710 -> late
    hb(4, 720),
    sd('F1', { o: 3, dur: '1.2' }), // stamps 720 -> late
    hb(5, 900),
  ]
  const v = standdownClockVerdict(standdownClockBook(lines))
  assert.ok(v)
  assert.deepEqual(v.thirds, { early: 0, mid: 0, late: 3 })
  assert.deepEqual(v.seat, { cls: 'late', owns: 3 })
  assert.equal(v.burst, 3) // one 30s window carried all three
  assert.equal(v.burstShare, 1)
  const row = standdownClockRow(v)
  assert.match(row, /the bots' own legs: F1 0\/0\/1 \+ F10 0\/0\/1/) // count tie -> the byte law
  assert.ok(row.includes('one window priced the mass'))
  // the parsers ride verbatim - the same lines through the house's own eyes
  assert.equal(rescueEndSeconds('F7 [F7] water: rescue standing down (frozen physics - the walk gate reopens, the reconnect lane owns a dead client) in 1.0s'), 1.0)
  assert.equal(parseRescueBlind(sd('F7', { o: 1 })).passes, 1)
})

test('THE CENSUS GUARD: the row rides beside the water clock, never before it (WIRING)', async () => {
  const src = await readFile(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("import { standdownClockBook, standdownClockVerdict, standdownClockRow, standdownBotSeat, standdownBotSeatRow, standdownBotRiders, standdownBotRidersRow } from '../../src/lib/standdownclock.mjs'")) // the import (the band grew - the v0.931.0 bot seat rides the same line, the pin's own intent held)
  const wcv = src.indexOf('const wcv = waterClockVerdict(waterClockBook(lines))')
  const sdc = src.indexOf('const sdc = standdownClockVerdict(sdb)')
  assert.ok(wcv > 0 && sdc > wcv) // the standdown clock rides beside the water clock, never before it
})
