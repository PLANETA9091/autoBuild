//
// starveclock.test.mjs - THE STARVE'S OWN CLOCK (v0.913.0)
//
// Face 191 (38084058429) walked the bank lane 100 visit-lines deep and
// banked ZERO - the door leg rode decide-timeouts, and the crowded-sky
// row named the front (the pathfinder's starve owns the refusals). The
// sky's own bytes sat split across THREE clock books since v0.413.0 and
// no row ever joined them on one timeline. This meter joins the house's
// four lanes (hop + walk + sweep + bank) on the heartbeat rail, cuts the
// face's own thirds (the v0.733.0 law), and seats the strict majority.
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { starveClockBook, starveClockVerdict, starveClockRow, STARVE_LANES } from '../../src/lib/starveclock.mjs'

const hb = (n, ts) => `b] n=${n} ts=${ts}s rss=400M late=10ms mainLate=5ms`
const hop = (bot, ts) => `${bot} [${bot}] hop: chest at [-100,60,400] d=10 zero: chest unreachable (Took to long to decide path to goal!)`
const walk = (bot, lane) => `${bot} ${lane}: chest walk failed (Took to long to decide path to goal!)`
const sweep = (bot, n) => `${bot} sweep: 0 collected - machine unreachable (Took to long to decide path to goal!) x${n}`
const walkBack = (bot) => `${bot} bank: chest unreachable (Took to long to decide path to goal!) (7 blocks from yard) - walking back`
const bankZero = (bot) => `${bot} bank: 0 (chest unreachable (Took to long to decide path to goal!))`

test('the face-191 shape: the late third owns the joined sky (the row byte-exact)', () => {
  const lines = [
    hb(1, 100),
    hop('F2'),
    hb(2, 600),
    walk('F2', 'fuel commons'),
    sweep('F2', 2),
    walkBack('F9'),
    bankZero('F6'),
    hb(3, 741),
  ]
  const book = starveClockBook(lines)
  assert.equal(book.clockEnd, 741)
  assert.equal(book.stamps.length, 6)
  assert.equal(book.untimed, 0)
  assert.deepEqual(book.lanes, { hop: 1, walk: 1, sweep: 2, bank: 2 })
  const v = starveClockVerdict(book)
  assert.ok(v)
  assert.equal(v.timed, 6)
  assert.deepEqual(v.thirds, { early: 1, mid: 0, late: 5 })
  assert.deepEqual(v.seat, { cls: 'late', owns: 5 })
  assert.equal(v.burst, 5)
  assert.equal(v.burstShare, 0.833)
  assert.deepEqual(v.span, { first: 100, last: 600 })
  assert.deepEqual(v.perLane, {
    hop: { early: 1, mid: 0, late: 0 },
    walk: { early: 0, mid: 0, late: 1 },
    sweep: { early: 0, mid: 0, late: 2 },
    bank: { early: 0, mid: 0, late: 2 },
  })
  assert.equal(
    starveClockRow(v),
    "the starve's own clock (v0.913.0): early 1 / mid 0 / late 5 of 6 timed starves - late owns 5 of 6 (83%) - THE CLOSING SKY: the starves crowd the deadline's own third - arm the walks before it - the burst's own share: 5 of 6 (83%) - one window priced the mass"
  )
})

test('THE THIRDS CUT: the v0.733.0 law - t < thirdS strict, the boundary rides the later third', () => {
  const lines = [
    hb(1, 299),
    hop('F1'), // stamps 299 -> early
    hb(2, 300),
    hop('F2'), // stamps 300 -> mid (the boundary's own law)
    hb(3, 599),
    hop('F3'), // stamps 599 -> mid
    hb(4, 600),
    hop('F4'), // stamps 600 -> late
    hb(5, 900),
    hop('F5'), // stamps 900 -> late
  ]
  const v = starveClockVerdict(starveClockBook(lines))
  assert.ok(v)
  assert.equal(v.clockEnd, 900)
  assert.equal(v.thirdS, 300)
  assert.deepEqual(v.thirds, { early: 1, mid: 2, late: 2 })
  assert.equal(v.seat, null) // a tie owns nothing - the storm-has-no-seat precedent
  assert.match(
    starveClockRow(v),
    / - no third owns the sky - the starves spread across the clock - /
  )
})

test('THE STAMP LAW: a starve before the first heartbeat rides unplaced, never placed', () => {
  const lines = [
    walk('F2', 'iron commune'), // no hb yet -> ts null -> unplaced
    hb(1, 700),
    walk('F3', 'food commons'), // stamps 700 -> late (thirdS 233.33)
  ]
  const book = starveClockBook(lines)
  assert.equal(book.untimed, 1)
  const v = starveClockVerdict(book)
  assert.ok(v)
  assert.equal(v.timed, 1)
  assert.equal(v.unplaced, 1)
  assert.deepEqual(v.thirds, { early: 0, mid: 0, late: 1 })
  assert.match(starveClockRow(v), / of 1 timed starve \(unplaced 1\)/)
})

test('THE HONEST SILENCE: no clock, no starves, all-unplaced - the verdict never invents', () => {
  // no heartbeat -> no rail -> no thirds
  assert.equal(starveClockVerdict(starveClockBook([walk('F2', 'fuel commons')])), null)
  // starves exist but none timed -> the silence
  const book = starveClockBook([walk('F2', 'fuel commons')])
  assert.equal(book.untimed, 1)
  assert.equal(starveClockVerdict(book), null)
  // an empty face
  assert.equal(starveClockVerdict(starveClockBook([])), null)
  assert.equal(starveClockVerdict(starveClockBook(undefined)), null)
  assert.equal(starveClockRow(null), null)
  assert.equal(starveClockRow({}), null)
  assert.equal(starveClockRow({ timed: 0, thirds: { early: 0, mid: 0, late: 0 } }), null)
})

test('THE SWEEP PAIR: n attempts stamp n times (the cohort is the currency)', () => {
  const lines = [hb(1, 700), sweep('F2', 3)]
  const book = starveClockBook(lines)
  assert.equal(book.stamps.length, 3)
  assert.deepEqual(book.lanes, { sweep: 3 })
})

test('THE LANES JOIN ON THE RAIL, NEVER ON THE COUNT: all four lanes one book', () => {
  const lines = [
    hb(1, 650),
    hop('F2'),
    walk('F2', 'fuel commons'),
    sweep('F2', 1),
    walkBack('F9'),
    bankZero('F6'),
  ]
  const book = starveClockBook(lines)
  assert.equal(book.stamps.length, 5)
  assert.deepEqual(book.lanes, { hop: 1, walk: 1, sweep: 1, bank: 2 })
  assert.deepEqual(STARVE_LANES, ['hop', 'walk', 'sweep', 'bank'])
  const v = starveClockVerdict(book)
  assert.ok(v)
  // every stamp rode the same anchor -> one burst window owns them all
  assert.equal(v.burst, 5)
  assert.equal(v.burstShare, 1)
  assert.match(starveClockRow(v), /one window priced the mass/)
})

test('THE JUNK BATTERY: junk never prices, never counts, never seats', () => {
  // non-string rows skipped end to end
  const book = starveClockBook([42, null, undefined, { line: true }, hb(1, 600), hop('F2')])
  assert.equal(book.stamps.length, 1)
  assert.equal(book.clockEnd, 600)
  // junk verdicts read the silence
  assert.equal(starveClockVerdict(null), null)
  assert.equal(starveClockVerdict('nope'), null)
  assert.equal(starveClockVerdict({}), null)
  assert.equal(starveClockVerdict({ stamps: 'nope', clockEnd: 600 }), null)
  assert.equal(starveClockVerdict({ stamps: [{ lane: 'hop', ts: 'junk' }], clockEnd: 600 }), null) // junk ts never prices, never counts
  assert.equal(starveClockVerdict({ stamps: [{ lane: 'hop', ts: 0 }], clockEnd: 0 }), null) // no rail, no thirds
  assert.equal(starveClockVerdict({ stamps: [{ lane: 'hop', ts: 0 }], clockEnd: -5 }), null)
})

test('THE SPREAD LAW: the burst share names a diffuse face honestly (no one-window tail)', () => {
  const lines = [
    hb(1, 100), hop('F1'),
    hb(2, 350), hop('F2'),
    hb(3, 620), hop('F3'),
    hb(4, 900),
  ]
  const v = starveClockVerdict(starveClockBook(lines))
  assert.ok(v)
  assert.deepEqual(v.thirds, { early: 1, mid: 1, late: 1 })
  assert.equal(v.seat, null)
  assert.equal(v.burst, 1)
  assert.equal(v.burstShare, 0.333) // the share rides the lib's own 3-decimal grain
  assert.ok(!starveClockRow(v).includes('one window priced the mass'))
})

test('THE CENSUS GUARD: the row rides the walk-fail lens beside the decide weather (WIRING)', async () => {
  const src = await readFile(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("import { starveClockBook, starveClockVerdict, starveClockRow, starveBotSeat, starveBotSeatRow, starveBotRiders, starveBotRidersRow } from '../../src/lib/starveclock.mjs'")) // the import (the v0.932.0 band's own growth - the intents held)
  const wx = src.indexOf('const dw = decideWeather(lines)')
  const sb = src.indexOf('const svb = starveClockBook(lines)')
  const sv = src.indexOf('const svc = starveClockVerdict(svb)')
  assert.ok(wx > 0 && sb > wx && sv > sb) // one parse - the book computed once, the clock rides beside the weather row, never before it
  const st = src.indexOf('const svt = starveBotSeat(svb)')
  assert.ok(st > sv) // the seat rides beside the clock row, never before it (the v0.932.0 growth)
})
