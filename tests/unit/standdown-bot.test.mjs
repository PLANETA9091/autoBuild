// (v0.931.0) THE STANDDOWN'S OWN BOT - the frozen-standdown book's bot
// axis joins the seat law family. Tests feed the face-198-shaped book
// (8 stamps, the face's own membership note 'all F6+F16' - the per-bot
// split unread, the law is the pin), the boundary law, the junk battery,
// and the decompose wiring pin (the CENSUS GUARD law).
import { standdownBotSeat, standdownBotSeatRow, standdownBotRiders, standdownBotRidersRow } from '../../src/lib/standdownclock.mjs'
import fs from 'node:fs'
import assert from 'node:assert'
import { test } from 'node:test'

// A face-198-shaped book: 8 stamps (the face's own count), the freeze's
// own duet F6+F16 - here a majority face (F6 x5 + F16 x3).
const FACE198SHAPE = {
  stamps: [
    { bot: 'F6', ts: 100, durS: 12, blind: null },
    { bot: 'F16', ts: 150, durS: 8, blind: null },
    { bot: 'F6', ts: 200, durS: 30, blind: { passes: 2, shoreHits: 0, probes: 1 } },
    { bot: 'F6', ts: 250, durS: 5, blind: null },
    { bot: 'F16', ts: 300, durS: 11, blind: null },
    { bot: 'F6', ts: 350, durS: 9, blind: null },
    { bot: 'F16', ts: 400, durS: 22, blind: null },
    { bot: 'F6', ts: null, durS: 7, blind: null } // the untimed stamp still names its bot
  ],
  clockEnd: 661,
  untimed: 1
}

test("the strict-majority seat shape (the fold reads the book's own stamps verbatim)", () => {
  // F6 owns 5 of 8 - above half, the seat's own face.
  const seat = standdownBotSeat(FACE198SHAPE)
  assert.deepEqual(seat, { bot: 'F6', owns: 5, ofStanddowns: 8, shareOfStanddowns: 0.625 })
})

test('the seat row byte-exact (the plural law on the unit word)', () => {
  assert.equal(
    standdownBotSeatRow(standdownBotSeat(FACE198SHAPE)),
    "the freeze's own bot (v0.931.0): F6 owns 5 of 8 frozen standdowns (62.5%) - THE STANDDOWN'S OWN BOT: one bot's own freezes own the standdown book - the churn's own front prices the freeze the thirds rode unnamed"
  )
  const solo = standdownBotSeat({ stamps: [{ bot: 'F16' }] })
  assert.equal(
    standdownBotSeatRow(solo),
    "the freeze's own bot (v0.931.0): F16 owns 1 of 1 frozen standdown (100.0%) - THE STANDDOWN'S OWN BOT: one bot's own freezes own the standdown book - the churn's own front prices the freeze the thirds rode unnamed"
  )
})

test("the boundary law: exactly half owns nothing - the two-way tie never seats", () => {
  // The face-198 duet's own tie: 4 vs 4 of 8 - exactly half each.
  const tie = { stamps: [{ bot: 'F6' }, { bot: 'F16' }, { bot: 'F6' }, { bot: 'F16' }, { bot: 'F6' }, { bot: 'F16' }, { bot: 'F6' }, { bot: 'F16' }] }
  assert.equal(standdownBotSeat(tie), null)
  assert.deepEqual(standdownBotSeat({ stamps: [{ bot: 'F6' }, { bot: 'F6' }, { bot: 'F16' }] }), { bot: 'F6', owns: 2, ofStanddowns: 3, shareOfStanddowns: 0.667 }) // 2 of 3 - the strict majority holds
  assert.equal(standdownBotSeat({ stamps: [{ bot: 'F6' }, { bot: 'F16' }] }), null) // 1 vs 1
})

test("the bare-stamps acceptance: the seat reads the rows without the book wrapper", () => {
  const seat = standdownBotSeat(FACE198SHAPE.stamps)
  assert.deepEqual(seat, { bot: 'F6', owns: 5, ofStanddowns: 8, shareOfStanddowns: 0.625 })
  assert.equal(standdownBotSeat([]), null)
})

test("the ts-independent law: the untimed stamp still names its bot (the tail law's own honesty)", () => {
  const withUntimed = { stamps: [{ bot: 'F6', ts: 100 }, { bot: 'F6', ts: null }, { bot: 'F16', ts: 200 }, { bot: 'F16', ts: 300 }] }
  assert.equal(standdownBotSeat(withUntimed), null) // 2 vs 2 - the tie holds with the untimed counted
  const untimedMajority = { stamps: [{ bot: 'F6', ts: null }, { bot: 'F6', ts: null }, { bot: 'F6', ts: 100 }, { bot: 'F16', ts: 200 }] }
  assert.deepEqual(standdownBotSeat(untimedMajority), { bot: 'F6', owns: 3, ofStanddowns: 4, shareOfStanddowns: 0.75 })
})

test("the byte law: the riders rank count desc, equal counts ride the bot's own byte asc; the duet flag holds", () => {
  // The unequal spread (no majority - F6 x3 of 6 meets the half exactly):
  // count desc owns the ranking.
  const spread = standdownBotRiders({ stamps: [{ bot: 'F6' }, { bot: 'F16' }, { bot: 'F6' }, { bot: 'F16' }, { bot: 'F6' }, { bot: 'F4' }] })
  assert.equal(spread.leader, 'F6')
  assert.equal(spread.runner, 'F16')
  assert.equal(spread.duet, false)
  assert.equal(spread.pairOwns, 5)
  // The equal-count tie: byte asc breaks it - and the byte order is the
  // TRUE byte order ('F16' < 'F6': '1' rides before '6'), the census's
  // own insertion order never owns the ranking.
  const duet = standdownBotRiders({ stamps: [{ bot: 'F6' }, { bot: 'F16' }] })
  assert.equal(duet.leader, 'F16')
  assert.equal(duet.runner, 'F6')
  assert.equal(duet.duet, true)
})

test("the riders row byte-exact on the spread book", () => {
  const r = standdownBotRiders({ stamps: [{ bot: 'F16' }, { bot: 'F6' }, { bot: 'F16' }, { bot: 'F6' }, { bot: 'F16' }, { bot: 'F6' }] })
  assert.equal(
    standdownBotRidersRow(r),
    "the freeze's own riders (v0.931.0): no solo bot owns the majority - F16 x3 + F6 x3 own 6 of 6 frozen standdowns (100.0%) - THE STANDDOWN'S OWN MIX: the seat's tie law held, the mix is the shape - the freeze's own bots rode raw beside the thirds' own seat"
  )
})

test("the branch law lives in the lib: the seat's owner exists - the mix reads null; the solo book reads the riders null", () => {
  assert.equal(standdownBotRiders(FACE198SHAPE), null) // F6 owns the majority
  assert.equal(standdownBotRiders({ stamps: [{ bot: 'F6' }] }), null) // fewer than two counted bots
})

test('the honest silences: the empty and junk books read the null', () => {
  assert.equal(standdownBotSeat(null), null)
  assert.equal(standdownBotSeat(undefined), null)
  assert.equal(standdownBotSeat('junk'), null)
  assert.equal(standdownBotSeat({}), null)
  assert.equal(standdownBotSeat({ stamps: null }), null)
  assert.equal(standdownBotSeat({ stamps: [] }), null)
  assert.equal(standdownBotRiders(null), null)
  assert.equal(standdownBotRiders('junk'), null)
  assert.equal(standdownBotRiders({ stamps: [] }), null)
})

test("the junk-cell law: a malformed stamp is skipped - the real stamps still tally", () => {
  const junky = {
    stamps: [
      null,
      'junk',
      { bot: 'G7' }, // the malformed bot key never joins
      { bot: 'F6', ts: 100 },
      { bot: 'F6', ts: 200 },
      { bot: 'F16', ts: 300 }
    ]
  }
  const seat = standdownBotSeat(junky)
  assert.deepEqual(seat, { bot: 'F6', owns: 2, ofStanddowns: 3, shareOfStanddowns: 0.667 })
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(standdownBotSeatRow(null), null)
  assert.equal(standdownBotSeatRow(undefined), null)
  assert.equal(standdownBotSeatRow('junk'), null)
  assert.equal(standdownBotSeatRow({}), null)
  assert.equal(standdownBotSeatRow({ bot: '', owns: 1, ofStanddowns: 1, shareOfStanddowns: 1 }), null)
  assert.equal(standdownBotSeatRow({ bot: 'F6', owns: 0, ofStanddowns: 5, shareOfStanddowns: 0 }), null)
  assert.equal(standdownBotSeatRow({ bot: 'F6', owns: 9, ofStanddowns: 5, shareOfStanddowns: 1.8 }), null) // owns > ofStanddowns
  assert.equal(standdownBotRidersRow(null), null)
  assert.equal(standdownBotRidersRow(undefined), null)
  assert.equal(standdownBotRidersRow('junk'), null)
  assert.equal(standdownBotRidersRow({}), null)
  assert.equal(standdownBotRidersRow({ leader: 'F6', leaderOwns: 1, runner: '', runnerOwns: 1, pairOwns: 2, ofStanddowns: 2, shareOfStanddowns: 1 }), null)
  assert.equal(standdownBotRidersRow({ leader: 'F6', leaderOwns: 1, runner: 'F16', runnerOwns: 1, pairOwns: 3, ofStanddowns: 2, shareOfStanddowns: 1.5 }), null) // pairOwns > ofStanddowns
})

test("WIRING: the standdown's own bot seat rides decompose beside the thirds verdict (v0.931.0)", () => {
  const src = fs.readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes('standdownBotSeat, standdownBotSeatRow, standdownBotRiders, standdownBotRidersRow'), 'the seat joins the decompose import band')
  const verdictAt = src.indexOf('standdownClockVerdict(sdb)')
  const seatAt = src.indexOf('standdownBotSeat(sdb)')
  assert.ok(verdictAt > 0 && seatAt > verdictAt, 'the seat rides beside the thirds verdict, never before it')
  const bookAt = src.indexOf('standdownClockBook(lines)')
  assert.ok(bookAt > 0 && bookAt < seatAt, 'one parse, zero re-reading: the seat reads the same book')
})
