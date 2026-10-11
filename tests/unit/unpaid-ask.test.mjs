// (v0.951.0) THE UNPAID ASK'S OWN SEAT - the granted side's own WHO axis
// (the v0.803.0 ask book's own sibling). The census's own budget cells:
// {bot, flowPricedS, needsS, grantedS, clamped, ...} - the bill law: a
// clamped budget's own unpaid = needsS - grantedS; an unclamped budget's
// own granted clock IS its flow-priced window (unpaid = max(0, need -
// flowPricedS)); a granted above the need never invents a deficit (the
// negative clamp's own fence). Strict-majority law, byte-law riders, the
// branch law fenced in the lib's caller, the junk fences, the honest
// silences - the free-clock face stays silent.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { budgetUnpaidOf, budgetUnpaidSeat, budgetUnpaidSeatRow, budgetUnpaidRiders, budgetUnpaidRidersRow } from '../../src/lib/bankcensus.mjs'

const clamped = (bot, need, granted) => ({ bot, needsS: need, flowPricedS: 248, grantedS: granted, clamped: true })
const free = (bot, need, flowPricedS) => ({ bot, needsS: need, flowPricedS, grantedS: null, clamped: false })

test('the bill law: a clamped budget owes its need minus its granted clock', () => {
  assert.equal(budgetUnpaidOf(clamped('F18', 4940, 300)), 4640)
  assert.equal(budgetUnpaidOf(clamped('F2', 2641, 185)), 2456)
})

test("the free clock's own law: an unclamped budget's granted clock is its flow-priced window", () => {
  assert.equal(budgetUnpaidOf(free('F1', 2000, 1900)), 100)
  assert.equal(budgetUnpaidOf(free('F1', 2000, 248)), 1752)
})

test("the negative clamp's own fence: a granted above the need never invents a deficit", () => {
  assert.equal(budgetUnpaidOf(clamped('F5', 300, 400)), 0)
  assert.equal(budgetUnpaidOf(free('F5', 100, 248)), 0)
})

test('the junk battery: junk cells and junk clocks read the honest zero', () => {
  assert.equal(budgetUnpaidOf(null), 0)
  assert.equal(budgetUnpaidOf(undefined), 0)
  assert.equal(budgetUnpaidOf('junk'), 0)
  assert.equal(budgetUnpaidOf(42), 0)
  assert.equal(budgetUnpaidOf({}), 0)
  assert.equal(budgetUnpaidOf({ bot: 'F3' }), 0)
  assert.equal(budgetUnpaidOf({ bot: 'F3', needsS: 0, grantedS: 0 }), 0)
  assert.equal(budgetUnpaidOf({ bot: 'F3', needsS: -5, grantedS: 0 }), 0)
  assert.equal(budgetUnpaidOf({ bot: 'F3', needsS: '20', grantedS: 0 }), 0)
  assert.equal(budgetUnpaidOf({ bot: 'F3', needsS: 100, grantedS: -1 }), 0)
  assert.equal(budgetUnpaidOf({ bot: 'F3', needsS: 100, grantedS: null, flowPricedS: 'junk' }), 0)
})

test('the seat law: the top deficit owns the unpaid book under the strict majority', () => {
  const seat = budgetUnpaidSeat([clamped('F18', 4940, 300), clamped('F13', 900, 300), clamped('F1', 400, 300)])
  assert.deepEqual(seat, { bot: 'F18', owns: 4640, ofUnpaid: 5340, shareOfUnpaid: 0.869 })
})

test("the under-half law's honest null: a minority deficit reads the silence", () => {
  assert.equal(budgetUnpaidSeat([clamped('F18', 4940, 300), clamped('F13', 4546, 300), clamped('F1', 4564, 300), clamped('F10', 3837, 300), clamped('F6', 3721, 300), clamped('F2', 2456, 185), clamped('F16', 4490, 300)]), null)
})

test('the boundary law: an exact tie owns nothing', () => {
  assert.equal(budgetUnpaidSeat([clamped('F5', 600, 300), clamped('F7', 600, 300)]), null)
})

test('the free-clock face stays silent: zero deficits price nothing', () => {
  assert.equal(budgetUnpaidSeat([free('F1', 100, 248), free('F2', 50, 248)]), null)
  assert.equal(budgetUnpaidRiders([free('F1', 100, 248), free('F2', 50, 248)]), null)
})

test('the face-212 shape: the clamp owned every budget and the crowd held', () => {
  const book = [
    clamped('F16', 4790, 300), clamped('F13', 4846, 300), clamped('F1', 4864, 300),
    clamped('F10', 4137, 300), clamped('F18', 4940, 300), clamped('F6', 4021, 300),
    clamped('F2', 2641, 185),
  ]
  const seat = budgetUnpaidSeat(book)
  assert.equal(seat, null) // the tie law held: F18 4640 of 28254 never owns the majority
  const r = budgetUnpaidRiders(book)
  assert.deepEqual(r, { leader: 'F18', leaderOwns: 4640, runner: 'F1', runnerOwns: 4564, ofUnpaid: 28254, pairOwns: 9204, shareOfUnpaid: 0.326 })
})

test('the riders row byte-exact (the face-212 shape)', () => {
  const book = [clamped('F18', 4940, 300), clamped('F1', 4864, 300), clamped('F2', 2641, 185)]
  const row = budgetUnpaidRidersRow(budgetUnpaidRiders(book))
  assert.equal(row, "the unpaid ask's own riders (v0.951.0): no solo victim owns the majority - F18 x4640s + F1 x4564s own 9204s of 11660s unpaid bank ask (78.9%) - THE VICTIMS' OWN CROWD: the seat's tie law held, the refusal is the shape - the bots' own deficits price the clamp the solo law refused to seat")
})

test('the seat row byte-exact', () => {
  const row = budgetUnpaidSeatRow(budgetUnpaidSeat([clamped('F18', 4940, 300), clamped('F13', 900, 300), clamped('F1', 400, 300)]))
  assert.equal(row, "the unpaid ask's own seat (v0.951.0): F18 owns 4640s of 5340s unpaid bank ask (86.9%) - THE CLAMP'S OWN VICTIM: one bot's own deficit owns the unpaid book - the v0.803.0 ask book priced the need, the unpaid book names the refusal")
})

test("the riders' byte law: unpaid desc, then the name's own byte asc", () => {
  const r = budgetUnpaidRiders([clamped('F6', 600, 300), clamped('F16', 600, 300), clamped('F11', 300, 300)])
  assert.deepEqual(r, { leader: 'F16', leaderOwns: 300, runner: 'F6', runnerOwns: 300, ofUnpaid: 600, pairOwns: 600, shareOfUnpaid: 1 })
})

test('the riders fence: fewer than two counted bots reads the silence', () => {
  assert.equal(budgetUnpaidRiders([clamped('F18', 4940, 300)]), null)
  assert.equal(budgetUnpaidRiders([]), null)
})

test('the missing and empty book: the honest silences', () => {
  for (const junk of [null, undefined, 'junk', 7, {}]) {
    assert.equal(budgetUnpaidSeat(junk), null)
    assert.equal(budgetUnpaidRiders(junk), null)
  }
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(budgetUnpaidSeatRow(null), null)
  assert.equal(budgetUnpaidSeatRow(undefined), null)
  assert.equal(budgetUnpaidSeatRow('junk'), null)
  assert.equal(budgetUnpaidSeatRow({}), null)
  assert.equal(budgetUnpaidSeatRow({ bot: 'F18', owns: 0, ofUnpaid: 5, shareOfUnpaid: 0 }), null)
  assert.equal(budgetUnpaidSeatRow({ bot: 'F18', owns: 8, ofUnpaid: 5, shareOfUnpaid: 1.6 }), null)
  assert.equal(budgetUnpaidRidersRow(null), null)
  assert.equal(budgetUnpaidRidersRow('junk'), null)
  assert.equal(budgetUnpaidRidersRow({}), null)
  assert.equal(budgetUnpaidRidersRow({ leader: 'a', leaderOwns: 0, runner: 'b', runnerOwns: 5, ofUnpaid: 5, pairOwns: 5, shareOfUnpaid: 1 }), null)
  assert.equal(budgetUnpaidRidersRow({ leader: 'a', leaderOwns: 3, runner: 'b', runnerOwns: 5, ofUnpaid: 5, pairOwns: 8, shareOfUnpaid: 1.6 }), null)
})

test('THE CENSUS GUARD: the unpaid seat rides the decompose beside the ask book (WIRING)', async () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes('budgetUnpaidSeat, budgetUnpaidSeatRow, budgetUnpaidRiders, budgetUnpaidRidersRow')) // the import rides the census's own line
  const ask = src.indexOf("THE ASK BOOK'S OWN SEAT - the seat, else the riders")
  const unpaid = src.indexOf("THE UNPAID ASK'S OWN SEAT - the granted side's own WHO axis")
  assert.ok(ask > 0 && unpaid > ask) // the unpaid book rides beside the ask book, never before it (the order law)
  assert.ok(src.indexOf('budgetUnpaidSeat(bankCensus.budgets)') > src.indexOf('budgetAskSeat(bankCensus.budgets)'))
  assert.ok(!src.includes("THE CLAMP'S OWN VICTIM: one bot's own deficit"), 'the prose lives only in the lib')
})
