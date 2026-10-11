//
// dryclock.test.mjs - THE DRY READ'S OWN CLOCK (v0.924.0)
//
// Face 196's own read named the front in the house's own words: "the
// tithe's own clock is the front (the dry reads queued before the
// first bank)" - the v0.816.0 side row split the drought on the first
// bank's own binary and no row ever cut the face's own thirds. This
// meter stamps the located dry reads on the heartbeat rail (the starve
// clock's own stamp law) and seats the strict majority.
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { dryClockBook, dryClockVerdict, dryClockRow, DRY_CLOCK_LEVERS } from '../../src/lib/dryclock.mjs'

const hb = (n, ts) => `b] n=${n} ts=${ts}s rss=400M late=10ms mainLate=5ms`
const dry = (bot, chest) => `${bot} fuel commons: chest holds no fuel at [${chest}]`
const dryBare = (bot) => `${bot} fuel commons: chest holds no fuel`

test('the face-196 shape: the opening third owns the drought (the row byte-exact)', () => {
  // the drought's own read: 40 located reads, 33 before the first
  // bank (the prime rode 52% of the stream) - the opening crowd
  const lines = [
    hb(1, 100),
    dry('F7', '-117,70,417'),
    dry('F7', '-117,70,419'),
    dry('F6', '-117,70,421'),
    dry('F2', '-117,70,417'),
    dry('F4', '-117,70,419'),
    dry('F9', '-117,70,421'),
    dry('F17', '-117,70,417'),
    hb(2, 650),
    dry('F7', '-117,70,419'),
    hb(3, 801),
  ]
  const book = dryClockBook(lines)
  assert.equal(book.clockEnd, 801)
  assert.equal(book.stamps.length, 8)
  assert.equal(book.untimed, 0)
  assert.equal(book.bareForm, 0)
  const v = dryClockVerdict(book)
  assert.ok(v)
  assert.equal(v.timed, 8)
  // thirdS = 801/3 = 267: the seven 100-stamps ride early, the 650-stamp rides the late third (>= 534)
  assert.deepEqual(v.thirds, { early: 7, mid: 0, late: 1 })
  assert.deepEqual(v.seat, { cls: 'early', owns: 7 })
  assert.equal(v.chests, 3)
  assert.equal(v.bareForm, 0)
  assert.equal(v.burst, 7)
  assert.equal(v.burstShare, 0.875)
  assert.deepEqual(v.span, { first: 100, last: 650 })
  assert.deepEqual(v.perBot, {
    F2: { early: 1, mid: 0, late: 0 },
    F4: { early: 1, mid: 0, late: 0 },
    F6: { early: 1, mid: 0, late: 0 },
    F7: { early: 2, mid: 0, late: 1 },
    F9: { early: 1, mid: 0, late: 0 },
    F17: { early: 1, mid: 0, late: 0 },
  })
  assert.equal(
    dryClockRow(v),
    "the dry read's own clock (v0.924.0): early 7 / mid 0 / late 1 of 8 located dry reads - early owns 7 of 8 (88%) - THE OPENING DROUGHT: the dry reads crowd the face's first third - the pump's own prime is the front - the bots' own legs: F7 2/0/1 + F17 1/0/0 - the chests' own spread: 3 chest(s) - the burst's own share: 7 of 8 (88%) - one window priced the mass"
  )
})

test('THE THIRDS CUT: the v0.733.0 law - t < thirdS strict, the boundary rides the later third', () => {
  const lines = [
    hb(1, 299),
    dry('F1', '-1,60,1'), // stamps 299 -> early
    hb(2, 300),
    dry('F2', '-1,60,2'), // stamps 300 -> mid (the boundary's own law)
    hb(3, 599),
    dry('F3', '-1,60,3'), // stamps 599 -> mid
    hb(4, 600),
    dry('F4', '-1,60,4'), // stamps 600 -> late
    hb(5, 900),
    dry('F5', '-1,60,5'), // stamps 900 -> late
  ]
  const v = dryClockVerdict(dryClockBook(lines))
  assert.ok(v)
  assert.equal(v.clockEnd, 900)
  assert.equal(v.thirdS, 300)
  assert.deepEqual(v.thirds, { early: 1, mid: 2, late: 2 })
  assert.equal(v.seat, null) // a tie owns nothing - the storm-has-no-seat precedent
  assert.match(
    dryClockRow(v),
    / - no third owns the drought - the dry reads spread across the clock - /
  )
})

test('THE STAMP LAW: a read before the first heartbeat rides unplaced, never placed', () => {
  const lines = [
    dry('F2', '-1,60,1'), // no hb yet -> ts null -> unplaced
    hb(1, 700),
    dry('F3', '-1,60,2'), // stamps 700 -> late (thirdS 233.33)
  ]
  const book = dryClockBook(lines)
  assert.equal(book.untimed, 1)
  const v = dryClockVerdict(book)
  assert.ok(v)
  assert.equal(v.timed, 1)
  assert.equal(v.unplaced, 1)
  assert.deepEqual(v.thirds, { early: 0, mid: 0, late: 1 })
  // the tail law: the unplaced read's chest still counts (placed or not)
  assert.equal(v.chests, 2)
  assert.match(dryClockRow(v), / of 1 located dry read \(unplaced 1\)/)
})

test('THE BARE FORM RIDES OUT: the old faces\' shape never joins the located census', () => {
  const lines = [
    hb(1, 600),
    dryBare('F2'), // the bare form - no position, rides out
    dry('F3', '-1,60,2'),
  ]
  const book = dryClockBook(lines)
  assert.equal(book.stamps.length, 1)
  assert.equal(book.bareForm, 1)
  const v = dryClockVerdict(book)
  assert.ok(v)
  assert.equal(v.bareForm, 1)
  assert.match(dryClockRow(v), / - the bare form's own rides: 1 - /)
})

test('THE HONEST SILENCE: no clock, no reads, all-unlocated - the verdict never invents', () => {
  // no heartbeat -> no rail -> no thirds
  assert.equal(dryClockVerdict(dryClockBook([dry('F2', '-1,60,1')])), null)
  // reads exist but none timed -> the silence
  const book = dryClockBook([dry('F2', '-1,60,1')])
  assert.equal(book.untimed, 1)
  assert.equal(dryClockVerdict(book), null)
  // an empty face
  assert.equal(dryClockVerdict(dryClockBook([])), null)
  assert.equal(dryClockVerdict(dryClockBook(undefined)), null)
  assert.equal(dryClockRow(null), null)
  assert.equal(dryClockRow({}), null)
  assert.equal(dryClockRow({ timed: 0, thirds: { early: 0, mid: 0, late: 0 } }), null)
})

test('THE OTHER-BOOK LAW: the commons lane\'s own lines never ride another book\'s clock', () => {
  // the fuel commons' other verdicts (took / budget spent) are not dry
  // reads - the parser's own word is 'chest holds no fuel'
  const lines = [
    hb(1, 600),
    'F2 fuel commons: took 2 units (2 x coal) from a yard chest',
    'F2 fuel commons: budget spent (0/1 units)',
    'F2 fuel commons: no yard chest in range',
    dry('F3', '-1,60,1'),
  ]
  const book = dryClockBook(lines)
  assert.equal(book.stamps.length, 1)
})

test('THE BYTE LAW: the bots\' own legs ride count desc, the byte asc', () => {
  const lines = [
    hb(1, 100),
    dry('F12', '-1,60,1'),
    dry('F4', '-1,60,2'),
    dry('F12', '-1,60,3'),
    dry('F12', '-1,60,1'),
    hb(2, 600),
  ]
  const v = dryClockVerdict(dryClockBook(lines))
  assert.ok(v)
  assert.deepEqual(v.perBot.F12, { early: 3, mid: 0, late: 0 })
  assert.deepEqual(v.perBot.F4, { early: 1, mid: 0, late: 0 })
  const row = dryClockRow(v)
  // F12 owns 3, F4 owns 1 - the count law seats the legs, no byte tie
  assert.match(row, /the bots' own legs: F12 3\/0\/0 \+ F4 1\/0\/0/)
  // the byte law's own tie: equal counts, the lower byte rides first
  const tie = [
    hb(1, 100),
    dry('F9', '-1,60,1'),
    dry('F2', '-1,60,2'),
    hb(2, 600),
  ]
  const tv = dryClockVerdict(dryClockBook(tie))
  assert.match(dryClockRow(tv), /the bots' own legs: F2 1\/0\/0 \+ F9 1\/0\/0/)
})

test('THE CHESTS\' OWN SPREAD: the tail law - distinct chests count placed or unplaced', () => {
  const lines = [
    dry('F2', '-1,60,1'), // unplaced
    hb(1, 600),
    dry('F3', '-1,60,1'), // the same chest, placed
    dry('F4', '-1,60,2'),
  ]
  const v = dryClockVerdict(dryClockBook(lines))
  assert.ok(v)
  assert.equal(v.timed, 2)
  assert.equal(v.unplaced, 1)
  assert.equal(v.chests, 2)
})

test('THE JUNK BATTERY: junk never prices, never counts, never seats', () => {
  // non-string rows skipped end to end
  const book = dryClockBook([42, null, undefined, { line: true }, hb(1, 600), dry('F2', '-1,60,1')])
  assert.equal(book.stamps.length, 1)
  assert.equal(book.clockEnd, 600)
  // junk verdicts read the silence
  assert.equal(dryClockVerdict(null), null)
  assert.equal(dryClockVerdict('nope'), null)
  assert.equal(dryClockVerdict({}), null)
  assert.equal(dryClockVerdict({ stamps: 'nope', clockEnd: 600 }), null)
  assert.equal(dryClockVerdict({ stamps: [{ bot: 'F2', chest: '-1,60,1', ts: 'junk' }], clockEnd: 600 }), null) // junk ts never prices, never counts
  assert.equal(dryClockVerdict({ stamps: [{ bot: 'F2', chest: '-1,60,1', ts: 0 }], clockEnd: 0 }), null) // no rail, no thirds
  assert.equal(dryClockVerdict({ stamps: [{ bot: 'F2', chest: '-1,60,1', ts: 0 }], clockEnd: -5 }), null)
})

test('THE SPREAD LAW: the burst share names a diffuse face honestly (no one-window tail)', () => {
  const lines = [
    hb(1, 100), dry('F1', '-1,60,1'),
    hb(2, 350), dry('F2', '-1,60,2'),
    hb(3, 620), dry('F3', '-1,60,3'),
    hb(4, 900),
  ]
  const v = dryClockVerdict(dryClockBook(lines))
  assert.ok(v)
  assert.deepEqual(v.thirds, { early: 1, mid: 1, late: 1 })
  assert.equal(v.seat, null)
  assert.equal(v.burst, 1)
  assert.equal(v.burstShare, 0.333) // the share rides the lib's own 3-decimal grain
  assert.ok(!dryClockRow(v).includes('one window priced the mass'))
})

test('THE LEVERS: one table, the three thirds, the house\'s own words', () => {
  assert.match(DRY_CLOCK_LEVERS.early, /THE OPENING DROUGHT/)
  assert.match(DRY_CLOCK_LEVERS.mid, /THE NOON DROUGHT/)
  assert.match(DRY_CLOCK_LEVERS.late, /THE CLOSING DROUGHT/)
})

test('THE CENSUS GUARD: the row rides the drought lens beside the v0.816.0 side (WIRING)', async () => {
  const src = await readFile(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("import { dryClockBook, dryClockVerdict, dryClockRow } from '../../src/lib/dryclock.mjs'")) // the import
  const side = src.indexOf("the dry read's own side (v0.816.0)")
  const clock = src.indexOf("const drc = dryClockVerdict(dryClockBook(lines))")
  assert.ok(side > 0 && clock > side) // the clock rides beside the side row, never before it
})
