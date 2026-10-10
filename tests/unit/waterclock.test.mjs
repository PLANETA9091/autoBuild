//
// waterclock.test.mjs - THE WATER LANE'S OWN CLOCK (v0.918.0)
//
// Face 192 (38087218197) tripled the rescue lane (45 starts, 36
// launches) and still lost 4 bots to the water while the deaths' own
// third book drained the closing third. The lane's own arms never rode
// a clock - this meter joins the water lane's two arm books (the
// rescue start + the transit launch) on the heartbeat rail, cuts the
// face's own thirds (the v0.733.0 law), and seats the strict majority.
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { waterClockBook, waterClockVerdict, waterClockRow, WATER_LANES, WATER_CLOCK_LEVERS } from '../../src/lib/waterclock.mjs'
import { rescueLedger } from '../../src/lib/rescue-ledger.mjs'
import { transitCensus } from '../../src/lib/transitcensus.mjs'

const hb = (n, ts) => `b] n=${n} ts=${ts}s rss=400M late=10ms mainLate=5ms`
const start = (bot, o2 = 10) => `${bot} [${bot}] water: drowning rescue start (drowning, oxygen ${o2})`
const launch = (bot, land = 'sand', x = -131, z = 390, d = 9) => `${bot} [${bot}] water: transit toward known land (${land}) at [${x},${z}] d=${d}`

test('the face-192 shape: the opening water owns the joined arms (the row byte-exact)', () => {
  const lines = [
    hb(1, 100),
    start('F7'), // early
    hb(2, 250),
    launch('F6'), // early
    hb(3, 260),
    launch('F6'), // early
    hb(4, 290),
    start('F6'), // early
    hb(5, 500),
    start('F14'), // mid
    hb(6, 550),
    launch('F6'), // mid
    hb(7, 850),
    start('F10'), // late
    hb(8, 900),
  ]
  const book = waterClockBook(lines)
  assert.equal(book.clockEnd, 900)
  assert.equal(book.stamps.length, 7)
  assert.equal(book.untimed, 0)
  assert.deepEqual(book.lanes, { start: 4, launch: 3 })
  const v = waterClockVerdict(book)
  assert.ok(v)
  assert.equal(v.timed, 7)
  assert.deepEqual(v.thirds, { early: 4, mid: 2, late: 1 })
  assert.deepEqual(v.seat, { cls: 'early', owns: 4 })
  assert.equal(v.burst, 2)
  assert.equal(v.burstShare, 0.286)
  assert.deepEqual(v.span, { first: 100, last: 850 })
  assert.deepEqual(v.perLane, {
    start: { early: 2, mid: 1, late: 1 },
    launch: { early: 2, mid: 1, late: 0 },
  })
  assert.deepEqual(v.perBot, {
    'start:F7': { early: 1, mid: 0, late: 0 },
    'launch:F6': { early: 2, mid: 1, late: 0 },
    'start:F6': { early: 1, mid: 0, late: 0 },
    'start:F14': { early: 0, mid: 1, late: 0 },
    'start:F10': { early: 0, mid: 0, late: 1 },
  })
  assert.equal(
    waterClockRow(v),
    "the water lane's own clock (v0.918.0): early 4 / mid 2 / late 1 of 7 timed arms - early owns 4 of 7 (57%) - THE OPENING WATER: the spawn's own geometry arms the lane - the closing third rides thin - the lanes' own legs: start 2/1/1, launch 2/1/0 - the burst's own share: 2 of 7 (29%)"
  )
})

test('THE THIRDS CUT: the v0.733.0 law - t < thirdS strict, the boundary rides the later third', () => {
  const lines = [
    hb(1, 299),
    start('F1'), // stamps 299 -> early
    hb(2, 300),
    start('F2'), // stamps 300 -> mid (the boundary's own law)
    hb(3, 599),
    start('F3'), // stamps 599 -> mid
    hb(4, 600),
    start('F4'), // stamps 600 -> late
    hb(5, 900),
    launch('F5'), // stamps 900 -> late
  ]
  const v = waterClockVerdict(waterClockBook(lines))
  assert.ok(v)
  assert.equal(v.clockEnd, 900)
  assert.equal(v.thirdS, 300)
  assert.deepEqual(v.thirds, { early: 1, mid: 2, late: 2 })
  assert.equal(v.seat, null) // a tie owns nothing - the storm-has-no-seat precedent
  assert.match(
    waterClockRow(v),
    / - no third owns the water - the arms spread across the clock - /
  )
})

test('THE STAMP LAW: an arm before the first heartbeat rides unplaced, never placed', () => {
  const lines = [
    start('F2'), // no hb yet -> ts null -> unplaced
    hb(1, 700),
    start('F3'), // stamps 700 -> late (thirdS 233.33)
  ]
  const book = waterClockBook(lines)
  assert.equal(book.untimed, 1)
  const v = waterClockVerdict(book)
  assert.ok(v)
  assert.equal(v.timed, 1)
  assert.equal(v.unplaced, 1)
  assert.deepEqual(v.thirds, { early: 0, mid: 0, late: 1 })
  assert.match(waterClockRow(v), / of 1 timed arm \(unplaced 1\)/)
})

test('THE HONEST SILENCE: no clock, no arms, all-unplaced - the verdict never invents', () => {
  // no heartbeat -> no rail -> no thirds
  assert.equal(waterClockVerdict(waterClockBook([start('F2')])), null)
  // arms exist but none timed -> the silence
  const book = waterClockBook([start('F2')])
  assert.equal(book.untimed, 1)
  assert.equal(waterClockVerdict(book), null)
  // an empty face
  assert.equal(waterClockVerdict(waterClockBook([])), null)
  assert.equal(waterClockVerdict(waterClockBook(undefined)), null)
  assert.equal(waterClockRow(null), null)
  assert.equal(waterClockRow({}), null)
  assert.equal(waterClockRow({ timed: 0, thirds: { early: 0, mid: 0, late: 0 } }), null)
})

test('THE COUNT LAW: the book\'s own counts ride the house\'s own parsers, never a fork', () => {
  const lines = [
    hb(1, 100),
    start('F7'),
    start('F6', 4),
    launch('F6', 'oak_log', -132, 400, 4),
  ]
  const book = waterClockBook(lines)
  assert.deepEqual(book.lanes, { start: 2, launch: 1 })
  // the house's own censuses read the same fixture - one parser each
  assert.equal(rescueLedger(lines).totals.starts, book.lanes.start)
  assert.equal(transitCensus(lines).launches.n, book.lanes.launch)
  assert.deepEqual(WATER_LANES, ['start', 'launch'])
  assert.ok(WATER_CLOCK_LEVERS.early.includes('THE OPENING WATER'))
  assert.ok(WATER_CLOCK_LEVERS.late.includes('THE CLOSING WATER'))
})

test('THE TAGLESS FENCE: a start without a bot tag names nobody - junk stays junk', () => {
  const lines = [
    hb(1, 600),
    'F [F] water: drowning rescue start (drowning, oxygen 10)', // no F\d+ tag
    start('F3'), // stamps 600 -> late
  ]
  const book = waterClockBook(lines)
  assert.equal(book.stamps.length, 1)
  assert.equal(book.lanes.start, 1)
})

test('THE JUNK BATTERY: junk never prices, never counts, never seats', () => {
  // non-string rows skipped end to end
  const book = waterClockBook([42, null, undefined, { line: true }, hb(1, 600), start('F2')])
  assert.equal(book.stamps.length, 1)
  assert.equal(book.clockEnd, 600)
  // junk verdicts read the silence
  assert.equal(waterClockVerdict(null), null)
  assert.equal(waterClockVerdict('nope'), null)
  assert.equal(waterClockVerdict({}), null)
  assert.equal(waterClockVerdict({ stamps: 'nope', clockEnd: 600 }), null)
  assert.equal(waterClockVerdict({ stamps: [{ lane: 'start', bot: 'F2', ts: 'junk' }], clockEnd: 600 }), null) // junk ts never prices, never counts
  assert.equal(waterClockVerdict({ stamps: [{ lane: 'start', bot: 'F2', ts: 0 }], clockEnd: 0 }), null) // no rail, no thirds
  assert.equal(waterClockVerdict({ stamps: [{ lane: 'start', bot: 'F2', ts: 0 }], clockEnd: -5 }), null)
})

test('THE SPREAD LAW: the burst share names a diffuse face honestly (no one-window tail)', () => {
  const lines = [
    hb(1, 100), start('F1'),
    hb(2, 350), launch('F2'),
    hb(3, 620), start('F3'),
    hb(4, 900),
  ]
  const v = waterClockVerdict(waterClockBook(lines))
  assert.ok(v)
  assert.deepEqual(v.thirds, { early: 1, mid: 1, late: 1 })
  assert.equal(v.seat, null)
  assert.equal(v.burst, 1)
  assert.equal(v.burstShare, 0.333) // the share rides the lib's own 3-decimal grain
  assert.ok(!waterClockRow(v).includes('one window priced the mass'))
})

test('THE CENSUS GUARD: the row rides the rescue lane beside its own price leg (WIRING)', async () => {
  const src = await readFile(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("import { waterClockBook, waterClockVerdict, waterClockRow } from '../../src/lib/waterclock.mjs'")) // the import
  const rc = src.indexOf('const rc = rescueClockCensus(lines)')
  const wcv = src.indexOf('const wcv = waterClockVerdict(waterClockBook(lines))')
  assert.ok(rc > 0 && wcv > rc) // the water clock rides beside the rescue lane's own price leg, never before it
})
