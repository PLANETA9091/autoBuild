//
// starve-burst.test.mjs - THE BURST'S OWN SEAT (v0.974.28)
//
// The decide burst's own WHEN+WHO axes - the v0.932.0/0.933.0 axis seats'
// own sibling. The v0.913.0 clock priced the burst's SHARE (the densest
// 30s window over the timed stamps) and no row ever said WHEN the window
// rode or WHO rode it - the front stayed 'THE DECIDER'S CLOCK' unnamed
// since v0.769.0. The window law reads the clock's own sliding window
// verbatim (the earliest densest window owns); the window's own sky rides
// the v0.733.0 point cut + the strict-majority law at window level; the
// window's own bots ride the v0.932.0 bill law with the branch law fenced
// inside (botSeat or riders, never both).
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { starveClockBook, starveBurstSeat, starveBurstSeatRow } from '../../src/lib/starveclock.mjs'

const hb = (n, ts) => `b] n=${n} ts=${ts}s rss=400M late=10ms mainLate=5ms`
const hop = (bot) => `${bot} [${bot}] hop: chest at [-100,60,400] d=10 zero: chest unreachable (Took to long to decide path to goal!)`
const walk = (bot, lane) => `${bot} ${lane}: chest walk failed (Took to long to decide path to goal!)`
const st = (ts, bot, lane = 'walk') => ({ lane, ts, bot })

test('THE WINDOW LAW: the earliest densest window owns - the full seat shape', () => {
  const book = { stamps: [st(100, 'F5'), st(102, 'F5'), st(104, 'F5'), st(106, 'F5'), st(108, 'F5'), st(300, 'F11'), st(320, 'F11'), st(500, 'F3')], clockEnd: 900 }
  assert.deepEqual(starveBurstSeat(book), {
    window: { first: 100, last: 108, n: 5 },
    ofTimed: 8,
    shareOfTimed: 0.625,
    thirds: { early: 5, mid: 0, late: 0 },
    thirdSeat: { cls: 'early', owns: 5 },
    botSeat: { bot: 'F5', owns: 5, ofWindow: 5 },
    riders: null,
  })
})

test('THE TIE LAW: two windows of one width - the earliest start owns (the window\'s own axes)', () => {
  const book = { stamps: [st(100, 'F2'), st(110, 'F2'), st(400, 'F8'), st(410, 'F8'), st(700, 'F3')], clockEnd: 900 }
  const s = starveBurstSeat(book)
  assert.equal(s.window.first, 100) // the earliest densest window owns - no re-roll
  assert.equal(s.window.last, 110)
  assert.equal(s.window.n, 2)
  assert.equal(s.ofTimed, 5)
  assert.equal(s.shareOfTimed, 0.4)
  assert.deepEqual(s.thirds, { early: 2, mid: 0, late: 0 }) // the WINDOW's own sky, not the book's
  assert.deepEqual(s.thirdSeat, { cls: 'early', owns: 2 })
  assert.deepEqual(s.botSeat, { bot: 'F2', owns: 2, ofWindow: 2 }) // the WINDOW's own bots - F8's window lost the tie
  assert.equal(s.riders, null)
})

test("THE WINDOW'S OWN MIX: no third owns a straddling window, the bots' mix measures beside", () => {
  const book = { stamps: [st(290, 'F6'), st(295, 'F6'), st(305, 'F9'), st(310, 'F9'), st(700, 'F4')], clockEnd: 900 }
  const s = starveBurstSeat(book)
  assert.deepEqual(s.thirds, { early: 2, mid: 2, late: 0 })
  assert.equal(s.thirdSeat, null) // 2 > 2 is false - the tie owns nothing
  assert.equal(s.botSeat, null) // F6 x2 of 4 - half never seats
  assert.deepEqual(s.riders, { leader: 'F6', leaderOwns: 2, runner: 'F9', runnerOwns: 2, pairOwns: 4, ofWindow: 4, duet: true })
})

test("THE WINDOW'S OWN SKY: the mid seat inside a straddling window - both seats live", () => {
  // thirdS = 300: 290/295 early, 310/315/320 mid - one 30s window straddles the cut
  const book = { stamps: [st(290, 'F6'), st(295, 'F6'), st(310, 'F6'), st(315, 'F9'), st(320, 'F9')], clockEnd: 900 }
  assert.deepEqual(starveBurstSeat(book), {
    window: { first: 290, last: 320, n: 5 },
    ofTimed: 5,
    shareOfTimed: 1,
    thirds: { early: 2, mid: 3, late: 0 },
    thirdSeat: { cls: 'mid', owns: 3 },
    botSeat: { bot: 'F6', owns: 3, ofWindow: 5 },
    riders: null,
  })
})

test('THE BRANCH LAW + THE BYTE LAW: junk bots never tally, the real stamps still do; the unnamed honesty', () => {
  // junk bot bytes skipped - F5's x2 of 2 well-formed still seats
  const junkBots = { stamps: [st(100, 'x9'), st(102, 'g1'), st(104, 'F5'), st(106, 'F5')], clockEnd: 900 }
  assert.deepEqual(starveBurstSeat(junkBots).botSeat, { bot: 'F5', owns: 2, ofWindow: 2 })
  // an all-junk window reads the honest unnamed (the row's own word)
  const allJunk = { stamps: [st(100, 'g1'), st(102, 'g2')], clockEnd: 900 }
  const s = starveBurstSeat(allJunk)
  assert.equal(s.botSeat, null)
  assert.equal(s.riders, null)
  // the byte law beside the count law inside the window (F16 before F6 on the equal count)
  const byteLaw = { stamps: [st(100, 'F6'), st(102, 'F16'), st(104, 'F6'), st(106, 'F16')], clockEnd: 900 }
  const r = starveBurstSeat(byteLaw).riders
  assert.equal(r.leader, 'F16')
  assert.equal(r.runner, 'F6')
  assert.equal(r.duet, true)
})

test('THE HONEST SILENCES: junk never invents a rush hour', () => {
  assert.equal(starveBurstSeat(null), null)
  assert.equal(starveBurstSeat(undefined), null)
  assert.equal(starveBurstSeat('nope'), null)
  assert.equal(starveBurstSeat(42), null)
  assert.equal(starveBurstSeat({}), null)
  assert.equal(starveBurstSeat({ stamps: 'nope', clockEnd: 900 }), null)
  assert.equal(starveBurstSeat({ stamps: [], clockEnd: 900 }), null) // the zero-sum book
  assert.equal(starveBurstSeat({ stamps: [st(10, 'F5')] }), null) // no clock - no thirds without a clock
  assert.equal(starveBurstSeat({ stamps: [st(10, 'F5')], clockEnd: 0 }), null)
  assert.equal(starveBurstSeat({ stamps: [st(10, 'F5')], clockEnd: -5 }), null)
  assert.equal(starveBurstSeat({ stamps: [st(10, 'F5')], clockEnd: '900' }), null)
  assert.equal(starveBurstSeat({ stamps: [{ lane: 'hop', ts: null, bot: 'F5' }], clockEnd: 900 }), null) // the untimed mass rides no window
  // the bare stamps form rides no burst - the clock's rail is the book's own byte
  assert.equal(starveBurstSeat([null, 42, 'junk', st(10, 'F5')]), null)
})

test('THE PIPELINE PIN: the book-parsed stamps price the same seat (the stamp law end to end)', () => {
  const lines = [
    hb(1, 290), hop('F6'), walk('F6', 'iron commune'),
    hb(2, 310), hop('F9'), walk('F9', 'food'), walk('F6', 'food'),
    hb(3, 900),
  ]
  const book = starveClockBook(lines)
  assert.deepEqual(starveBurstSeat(book), {
    window: { first: 290, last: 310, n: 5 },
    ofTimed: 5,
    shareOfTimed: 1,
    thirds: { early: 2, mid: 3, late: 0 },
    thirdSeat: { cls: 'mid', owns: 3 },
    botSeat: { bot: 'F6', owns: 3, ofWindow: 5 },
    riders: null,
  })
})

test('THE ROW: byte-exact - the seat, the mix, the duet, the unnamed', () => {
  assert.equal(
    starveBurstSeatRow({ window: { first: 290, last: 320, n: 5 }, ofTimed: 5, shareOfTimed: 1, thirds: { early: 2, mid: 3, late: 0 }, thirdSeat: { cls: 'mid', owns: 3 }, botSeat: { bot: 'F6', owns: 3, ofWindow: 5 }, riders: null }),
    "the burst's own seat (v0.974.28): the window rode 5 of 5 timed starves (100%) ts 290..320s - the window's own sky: early 2 / mid 3 / late 0 - mid owns 3 of 5 (60%) - THE NOON RUSH: the decider's rush hour rode the face's middle third - F6 owns 3 of 5 - THE BURST'S OWN BOT: one bot's own asks priced the rush hour",
  )
  assert.equal(
    starveBurstSeatRow({ window: { first: 290, last: 310, n: 4 }, ofTimed: 5, shareOfTimed: 0.8, thirds: { early: 2, mid: 2, late: 0 }, thirdSeat: null, botSeat: null, riders: { leader: 'F6', leaderOwns: 2, runner: 'F9', runnerOwns: 2, pairOwns: 4, ofWindow: 4, duet: true } }),
    "the burst's own seat (v0.974.28): the window rode 4 of 5 timed starves (80%) ts 290..310s - the window's own sky: early 2 / mid 2 / late 0 - no third owns the window - the rush hour spread across the clock - F6 x2 + F9 x2 own 4 of 4 - THE BURST'S OWN MIX: the rush hour rode a crowd (the duet's own tie)",
  )
  assert.equal(
    starveBurstSeatRow({ window: { first: 100, last: 102, n: 2 }, ofTimed: 2, shareOfTimed: 1, thirds: { early: 2, mid: 0, late: 0 }, thirdSeat: { cls: 'early', owns: 2 }, botSeat: null, riders: null }),
    "the burst's own seat (v0.974.28): the window rode 2 of 2 timed starves (100%) ts 100..102s - the window's own sky: early 2 / mid 0 / late 0 - early owns 2 of 2 (100%) - THE OPENING RUSH: the decider's rush hour rode the face's first third - the spawn's own geometry prices the burst - the window's own bots rode unnamed",
  )
  const late = starveBurstSeatRow({ window: { first: 800, last: 810, n: 2 }, ofTimed: 9, shareOfTimed: 0.222, thirds: { early: 0, mid: 0, late: 2 }, thirdSeat: { cls: 'late', owns: 2 }, botSeat: { bot: 'F7', owns: 2, ofWindow: 2 }, riders: null })
  assert.ok(late.includes('THE CLOSING RUSH'))
})

test("THE ROWS' JUNK BATTERY: rows read null on junk", () => {
  assert.equal(starveBurstSeatRow(null), null)
  assert.equal(starveBurstSeatRow(undefined), null)
  assert.equal(starveBurstSeatRow('nope'), null)
  assert.equal(starveBurstSeatRow({}), null)
  assert.equal(starveBurstSeatRow({ window: { first: 10, last: 5, n: 1 }, ofTimed: 2, shareOfTimed: 0.5, thirds: { early: 1, mid: 0, late: 0 }, thirdSeat: null, botSeat: null, riders: null }), null) // last < first
  assert.equal(starveBurstSeatRow({ window: { first: 10, last: 20, n: 2 }, ofTimed: 1, shareOfTimed: 2, thirds: { early: 2, mid: 0, late: 0 }, thirdSeat: null, botSeat: null, riders: null }), null) // n > ofTimed
  assert.equal(starveBurstSeatRow({ window: { first: 10, last: 20, n: 2 }, ofTimed: 2, shareOfTimed: 1.5, thirds: { early: 2, mid: 0, late: 0 }, thirdSeat: null, botSeat: null, riders: null }), null) // share > 1
  assert.equal(starveBurstSeatRow({ window: { first: 10, last: 20, n: 2 }, ofTimed: 2, shareOfTimed: 1, thirds: { early: 1, mid: 0, late: 0 }, thirdSeat: null, botSeat: null, riders: null }), null) // the thirds' sum mismatch
  assert.equal(starveBurstSeatRow({ window: { first: 10, last: 20, n: 2 }, ofTimed: 2, shareOfTimed: 1, thirds: { early: 2, mid: 0, late: 0 }, thirdSeat: null, botSeat: { bot: 'F6', owns: 1, ofWindow: 2 }, riders: { leader: 'F2', leaderOwns: 1, runner: 'F8', runnerOwns: 1, pairOwns: 2, ofWindow: 2, duet: true } }), null) // the branch law's row fence - never both
  assert.equal(starveBurstSeatRow({ window: { first: 10, last: 20, n: 2 }, ofTimed: 2, shareOfTimed: 1, thirds: { early: 2, mid: 0, late: 0 }, thirdSeat: null, botSeat: { bot: 'bot6', owns: 1, ofWindow: 2 }, riders: null }), null) // the junk bot byte
  assert.equal(starveBurstSeatRow({ window: { first: 10, last: 20, n: 2 }, ofTimed: 2, shareOfTimed: 1, thirds: { early: 2, mid: 0, late: 0 }, thirdSeat: null, botSeat: null, riders: { leader: 'F2', leaderOwns: 1, runner: 'F8', runnerOwns: 1, pairOwns: 3, ofWindow: 2, duet: false } }), null) // the pair sum mismatch
})

test('THE CENSUS GUARD: the burst seat rides beside the clock rows in the one parse (WIRING)', async () => {
  const src = await readFile(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("starveBurstSeat, starveBurstSeatRow } from '../../src/lib/starveclock.mjs'")) // the import band's own growth (the v0.933.0 precedent)
  const sv = src.indexOf('const svc = starveClockVerdict(svb)')
  const st = src.indexOf('const svt = starveBotSeat(svb)')
  const svs = src.indexOf('const svs = starveLaneSeat(svb)')
  const sb = src.indexOf('const svburst = starveBurstSeat(svb)')
  assert.ok(sv > 0 && st > sv && svs > st && sb > svs) // one parse - the seat rides beside the clock's rows, never before them
  assert.ok(src.includes("if (svburst) console.log(`  ${starveBurstSeatRow(svburst)}`)"))
})

// THE FIRST DRAFT'S OWN LESSON (recorded not rewritten): the first draft's
// pins read the thirds and the bots over the WHOLE book - the fold's law
// prices the WINDOW's own sky and the WINDOW's own bots (the burst's own
// axes ARE the window's), and the bare stamps form rides no burst without
// the clock's rail. The lib's law held, the expectations were mine.
// Recorded here, the tests fixed to the true shape.
