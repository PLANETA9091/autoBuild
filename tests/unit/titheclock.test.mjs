//
// titheclock.test.mjs - THE TITHE'S OWN CLOCK (v0.927.0)
//
// The dry read's own clock (v0.924.0) priced the drought's WHEN and its
// own head named the front: "the pump's own prime is the front". This
// meter stamps the pump's own arms (the fuel tithe inflow lines) on the
// heartbeat rail (the dry clock's own stamp law), cuts the thirds and
// names the prime's own third.
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { titheClockBook, titheClockVerdict, titheClockRow, TITHE_CLOCK_LEVERS } from '../../src/lib/titheclock.mjs'
import { parseTitheInflowTagged } from '../../src/lib/titheledger.mjs'

const hb = (n, ts) => `b] n=${n} ts=${ts}s rss=400M late=10ms mainLate=5ms`
const arm = (bot, a, d, u, dry) =>
  `${bot} fuel tithe inflow: attempted ${a}, delivered ${d}${u != null ? ` (${u}u)` : ''}, dry ${dry}`
const FEED = arm('F5', 4, 1, 4, 3)
const DRY = arm('F2', 2, 0, null, 2)

test('the tag reader: the house grammar prices the cells, the F-head names the bot', () => {
  const tagged = parseTitheInflowTagged('F7 [a1b2c3] fuel tithe inflow: attempted 3, delivered 0, dry 3 - the opens fired far 2 of 3 - the walk\'s landed verdict lied: the geometry is the front')
  assert.ok(tagged)
  assert.equal(tagged.bot, 'F7')
  assert.equal(tagged.attempted, 3)
  assert.equal(tagged.delivered, 0)
  assert.equal(tagged.units, 0)
  assert.equal(tagged.dry, 3)
  assert.equal(tagged.open, 'far')
  const bare = parseTitheInflowTagged(FEED)
  assert.equal(bare.bot, 'F5')
  const untagged = parseTitheInflowTagged('fuel tithe inflow: attempted 2, delivered 0, dry 2')
  assert.ok(untagged)
  assert.equal(untagged.bot, null) // the fleet-bare form reads nobody honestly
  assert.equal(parseTitheInflowTagged('F2 fuel tithe inflow: the line lied'), null) // the torn line never rides
  assert.equal(parseTitheInflowTagged('F2 fuel commons: chest holds no fuel at [-1,60,1]'), null) // another book's line
})

test('the face\'s shape: the arms crowd the opening third and the prime rides early (the row byte-exact)', () => {
  const lines = [
    hb(1, 100),
    arm('F7', 4, 0, null, 4), // dry arm, early
    arm('F16', 4, 0, null, 4), // dry arm, early
    arm('F7', 4, 1, 4, 3), // THE PRIME, early
    hb(2, 650),
    arm('F16', 4, 1, 3, 3), // late (thirdS 267 -> 650 >= 534)
    hb(3, 801),
  ]
  const book = titheClockBook(lines)
  assert.equal(book.clockEnd, 801)
  assert.equal(book.stamps.length, 4)
  assert.equal(book.untimed, 0)
  assert.equal(book.torn, 0)
  const v = titheClockVerdict(book)
  assert.ok(v)
  assert.equal(v.timed, 4)
  assert.deepEqual(v.thirds, { early: 3, mid: 0, late: 1 })
  assert.deepEqual(v.seat, { cls: 'early', owns: 3 })
  assert.equal(Math.round((3 / 4) * 100), 75) // early owns above half - the strict seat
  assert.ok(v.seat.owns > v.timed - v.seat.owns)
  assert.deepEqual(v.prime, { rode: true, third: 'early', ts: 100 })
  assert.equal(v.neverPrimed, false)
  assert.deepEqual(v.mass, { attempted: 16, delivered: 2, units: 7, dry: 14 })
  assert.deepEqual(v.span, { first: 100, last: 650 })
  assert.equal(
    titheClockRow(v),
    "the tithe's own clock (v0.927.0): early 3 / mid 0 / late 1 of 4 tithe inflow lines - early owns 3 of 4 (75%) - THE OPENING TITHE: the pump's arms crowd the face's first third - the pump primes where the drought opens (the dry clock's own join) - the prime's own third: early (first delivery t=100s) - the bots' own legs: F16 1/0/1 + F7 2/0/0 - the book's own mass: delivered 7u, dry 14 open(s) of 16 attempted - the burst's own share: 3 of 4 (75%) - one window priced the mass"
  )
})

test('THE THIRDS CUT: the v0.733.0 law - t < thirdS strict, the boundary rides the later third', () => {
  const lines = [
    hb(1, 299),
    arm('F1', 4, 0, null, 4), // 299 -> early
    hb(2, 300),
    arm('F2', 4, 0, null, 4), // 300 -> mid (the boundary's own law)
    hb(3, 599),
    arm('F3', 4, 0, null, 4), // 599 -> mid
    hb(4, 600),
    arm('F4', 4, 0, null, 4), // 600 -> late
    hb(5, 900),
    arm('F5', 4, 0, null, 4), // 900 -> late
  ]
  const v = titheClockVerdict(titheClockBook(lines))
  assert.ok(v)
  assert.equal(v.clockEnd, 900)
  assert.equal(v.thirdS, 300)
  assert.deepEqual(v.thirds, { early: 1, mid: 2, late: 2 })
  assert.equal(v.seat, null) // a tie owns nothing - the storm-has-no-seat precedent
  assert.match(
    titheClockRow(v),
    / - no third owns the tithe - the pump's arms spread across the clock - /
  )
})

test('THE PRIME\'S OWN THIRD: the first delivered arm names the third - or the honest never', () => {
  // the prime rode mid, the dry arms crowded early - the prime names
  // its own third regardless of the seat's owner
  const lines = [
    hb(1, 100),
    arm('F2', 4, 0, null, 4),
    arm('F3', 4, 0, null, 4),
    hb(2, 400),
    arm('F2', 4, 2, 9, 2), // the prime at 400 -> mid (thirdS 400: 400 is NOT < 400, 400 < 800)
    hb(3, 1200),
  ]
  const v = titheClockVerdict(titheClockBook(lines))
  assert.ok(v)
  assert.deepEqual(v.prime, { rode: true, third: 'mid', ts: 400 })
  assert.match(titheClockRow(v), / - the prime's own third: mid \(first delivery t=400s\)/)
  // the pump never delivered - the honest never
  const dryFace = [
    hb(1, 300),
    arm('F2', 4, 0, null, 4),
    hb(2, 900),
  ]
  const dv = titheClockVerdict(titheClockBook(dryFace))
  assert.ok(dv)
  assert.equal(dv.neverPrimed, true)
  assert.deepEqual(dv.prime, { rode: false, third: null, ts: null })
  assert.match(titheClockRow(dv), / - the prime never rode \(the pump never delivered\)/)
  // the prime rode before the rail - rode untimed, the honest null third
  const ghostFace = [
    arm('F2', 4, 1, 4, 3), // the prime, no heartbeat yet
    hb(1, 600),
    arm('F3', 4, 0, null, 4),
    hb(2, 900),
  ]
  const gv = titheClockVerdict(titheClockBook(ghostFace))
  assert.ok(gv)
  assert.equal(gv.neverPrimed, false)
  assert.deepEqual(gv.prime, { rode: true, third: null, ts: null })
  assert.match(titheClockRow(gv), / - the prime rode untimed \(before the rail\)/)
})

test('THE STAMP LAW: an arm before the first heartbeat rides unplaced, never placed', () => {
  const lines = [
    arm('F2', 4, 0, null, 4), // no hb yet -> ts null -> unplaced
    hb(1, 700),
    arm('F3', 4, 0, null, 4), // 700 -> late (thirdS 233.33)
  ]
  const book = titheClockBook(lines)
  assert.equal(book.untimed, 1)
  const v = titheClockVerdict(book)
  assert.ok(v)
  assert.equal(v.timed, 1)
  assert.equal(v.unplaced, 1)
  assert.deepEqual(v.thirds, { early: 0, mid: 0, late: 1 })
  // the tail law: the unplaced arm's mass still counts (placed or not)
  assert.deepEqual(v.mass, { attempted: 8, delivered: 0, units: 0, dry: 8 })
  assert.match(titheClockRow(v), / of 1 tithe inflow line \(unplaced 1\)/)
})

test('THE HONEST SILENCE: no clock, no arms, all-unplaced - the verdict never invents', () => {
  // no heartbeat -> no rail -> no thirds
  assert.equal(titheClockVerdict(titheClockBook([arm('F2', 4, 0, null, 4)])), null)
  // arms exist but none timed -> the silence
  const book = titheClockBook([arm('F2', 4, 0, null, 4)])
  assert.equal(book.untimed, 1)
  assert.equal(titheClockVerdict(book), null)
  // an empty face
  assert.equal(titheClockVerdict(titheClockBook([])), null)
  assert.equal(titheClockVerdict(titheClockBook(undefined)), null)
  assert.equal(titheClockRow(null), null)
  assert.equal(titheClockRow({}), null)
  assert.equal(titheClockRow({ timed: 0, thirds: { early: 0, mid: 0, late: 0 } }), null)
})

test('THE OTHER-BOOK LAW: the grain and the commons lanes never ride the pump\'s clock', () => {
  // the grain rides the fleet report, the commons' verdicts are not
  // tithe arms - the parser's own word is 'fuel tithe inflow:'
  const lines = [
    hb(1, 600),
    'F2 smelt fuel commons grain: asked 4, delivered 4 (4u over 2 opens), dry 0',
    'F2 fuel commons: took 2 units (2 x coal) from a yard chest',
    'F2 fuel commons: budget spent (0/1 units)',
    arm('F3', 4, 1, 4, 3),
  ]
  const book = titheClockBook(lines)
  assert.equal(book.stamps.length, 1)
  assert.equal(book.torn, 0)
})

test('THE TORN SWEEP: a line that starts like a member but failed the grammar rides the tail', () => {
  const lines = [
    hb(1, 600),
    'F2 fuel tithe inflow: attempted', // torn - counted, never priced
    'F9 smelt fuel commons grain: asked', // torn
    arm('F3', 4, 1, 4, 3),
  ]
  const book = titheClockBook(lines)
  assert.equal(book.stamps.length, 1)
  assert.equal(book.torn, 2)
  const v = titheClockVerdict(book)
  assert.ok(v)
  assert.equal(v.torn, 2)
  assert.match(titheClockRow(v), / - the torn sweep: 2 - /)
})

test('THE BYTE LAW: the bots\' own legs ride count desc, the byte asc', () => {
  const lines = [
    hb(1, 100),
    arm('F12', 4, 0, null, 4),
    arm('F4', 4, 0, null, 4),
    arm('F12', 4, 0, null, 4),
    arm('F12', 4, 0, null, 4),
    hb(2, 600),
  ]
  const v = titheClockVerdict(titheClockBook(lines))
  assert.ok(v)
  assert.deepEqual(v.perBot.F12, { early: 3, mid: 0, late: 0 })
  assert.deepEqual(v.perBot.F4, { early: 1, mid: 0, late: 0 })
  const row = titheClockRow(v)
  // F12 owns 3, F4 owns 1 - the count law seats the legs, no byte tie
  assert.match(row, /the bots' own legs: F12 3\/0\/0 \+ F4 1\/0\/0/)
  // the byte law's own tie: equal counts, the lower byte rides first
  const tie = [
    hb(1, 100),
    arm('F9', 4, 0, null, 4),
    arm('F2', 4, 0, null, 4),
    hb(2, 600),
  ]
  const tv = titheClockVerdict(titheClockBook(tie))
  assert.match(titheClockRow(tv), /the bots' own legs: F2 1\/0\/0 \+ F9 1\/0\/0/)
})

test('THE UNTAGGED ARM PRICES HONESTLY: the cells join the book, the leg names nobody', () => {
  const lines = [
    hb(1, 100),
    'fuel tithe inflow: attempted 4, delivered 1 (4u), dry 3', // the fleet-bare form
    arm('F7', 4, 0, null, 4),
    hb(2, 600),
  ]
  const v = titheClockVerdict(titheClockBook(lines))
  assert.ok(v)
  assert.equal(v.timed, 2)
  assert.deepEqual(v.mass, { attempted: 8, delivered: 1, units: 4, dry: 7 })
  assert.deepEqual(v.perBot, {
    '?': { early: 1, mid: 0, late: 0 },
    F7: { early: 1, mid: 0, late: 0 },
  })
  // the byte law's own sort: '?' (0x3F) rides before F7 (0x46)
  assert.match(titheClockRow(v), /the bots' own legs: \? 1\/0\/0 \+ F7 1\/0\/0/)
})

test('THE JUNK BATTERY: junk never prices, never counts, never seats', () => {
  // non-string rows skipped end to end
  const book = titheClockBook([42, null, undefined, { line: true }, hb(1, 600), arm('F2', 4, 0, null, 4)])
  assert.equal(book.stamps.length, 1)
  assert.equal(book.clockEnd, 600)
  // junk verdicts read the silence
  assert.equal(titheClockVerdict(null), null)
  assert.equal(titheClockVerdict('nope'), null)
  assert.equal(titheClockVerdict({}), null)
  assert.equal(titheClockVerdict({ stamps: 'nope', clockEnd: 600 }), null)
  assert.equal(titheClockVerdict({ stamps: [{ bot: 'F2', attempted: 4, delivered: 0, dry: 4, ts: 'junk' }], clockEnd: 600 }), null) // junk ts never prices, never counts
  assert.equal(titheClockVerdict({ stamps: [{ bot: 'F2', attempted: 4, delivered: 0, dry: 4, ts: 0 }], clockEnd: 0 }), null) // no rail, no thirds
  assert.equal(titheClockVerdict({ stamps: [{ bot: 'F2', attempted: 4, delivered: 0, dry: 4, ts: 0 }], clockEnd: -5 }), null)
})

test('THE SPREAD LAW: the burst share names a diffuse face honestly (no one-window tail)', () => {
  const lines = [
    hb(1, 100), arm('F1', 4, 0, null, 4),
    hb(2, 350), arm('F2', 4, 0, null, 4),
    hb(3, 620), arm('F3', 4, 0, null, 4),
    hb(4, 900),
  ]
  const v = titheClockVerdict(titheClockBook(lines))
  assert.ok(v)
  assert.deepEqual(v.thirds, { early: 1, mid: 1, late: 1 })
  assert.equal(v.seat, null)
  assert.equal(v.burst, 1)
  assert.equal(v.burstShare, 0.333) // the share rides the lib's own 3-decimal grain
  assert.ok(!titheClockRow(v).includes('one window priced the mass'))
})

test('THE LEVERS: one table, the three thirds, the house\'s own words', () => {
  assert.match(TITHE_CLOCK_LEVERS.early, /THE OPENING TITHE/)
  assert.match(TITHE_CLOCK_LEVERS.mid, /THE NOON TITHE/)
  assert.match(TITHE_CLOCK_LEVERS.late, /THE CLOSING TITHE/)
})

test('THE CENSUS GUARD: the row rides the pump beside the v0.924.0 dry clock (WIRING)', async () => {
  const src = await readFile(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("import { titheClockBook, titheClockVerdict, titheClockRow } from '../../src/lib/titheclock.mjs'")) // the import
  const dry = src.indexOf('const drc = dryClockVerdict(dryClockBook(lines))')
  const tithe = src.indexOf('const tcv = titheClockVerdict(titheClockBook(lines))')
  assert.ok(dry > 0 && tithe > dry) // the pump's clock rides beside the drought's clock, never before it
})
