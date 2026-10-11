//
// starve-bot.test.mjs - THE STARVE'S OWN BOT (v0.932.0)
//
// The starve book's own WHO axis - the v0.931.0 standdown bot seat's own
// sibling. The v0.913.0 clock seated the SKY axis (which third owns the
// starves); no row ever said WHOSE A* starves own the book. The bill law
// reads the book's own stamps verbatim - the stamp's own bot byte the
// atom, zero re-parsing, one book; the fold now carries the bot byte
// additively ({lane, ts} never moved, the verdict reads untouched).
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { starveClockBook, starveBotSeat, starveBotSeatRow, starveBotRiders, starveBotRidersRow } from '../../src/lib/starveclock.mjs'

const hb = (n, ts) => `b] n=${n} ts=${ts}s rss=400M late=10ms mainLate=5ms`
const hop = (bot) => `${bot} [${bot}] hop: chest at [-100,60,400] d=10 zero: chest unreachable (Took to long to decide path to goal!)`
const walk = (bot, lane) => `${bot} ${lane}: chest walk failed (Took to long to decide path to goal!)`
const sweep = (bot, n) => `${bot} sweep: 0 collected - machine unreachable (Took to long to decide path to goal!) x${n}`
const walkBack = (bot) => `${bot} bank: chest unreachable (Took to long to decide path to goal!) (7 blocks from yard) - walking back`
const bankZero = (bot) => `${bot} bank: 0 (chest unreachable (Took to long to decide path to goal!))`

test('THE BILL LAW: the fold carries the bot byte additively - the {lane, ts} shape never moved', () => {
  const lines = [
    hb(1, 100),
    hop('F2'),
    walk('F2', 'fuel commons'),
    sweep('F2', 2),
    walkBack('F9'),
    bankZero('F6'),
    hb(2, 741),
  ]
  const book = starveClockBook(lines)
  assert.equal(book.stamps.length, 6)
  for (const s of book.stamps) {
    assert.ok('lane' in s && 'ts' in s && 'bot' in s) // the additive law
  }
  assert.deepEqual(book.lanes, { hop: 1, walk: 1, sweep: 2, bank: 2 })
  const seat = starveBotSeat(book)
  assert.deepEqual(seat, { bot: 'F2', owns: 4, ofStarves: 6, shareOfStarves: 0.667 })
})

test('THE STRICT-MAJORITY SEAT: the seat shape on the fold (the deepEqual law)', () => {
  const lines = []
  for (let i = 0; i < 5; i++) lines.push(hb(i + 1, 100 + i), hop('F5'))
  lines.push(hb(9, 200), walk('F11', 'iron commune'), walk('F11', 'fuel commons'), walk('F3', 'food'))
  const seat = starveBotSeat(starveClockBook(lines))
  assert.deepEqual(seat, { bot: 'F5', owns: 5, ofStarves: 8, shareOfStarves: 0.625 })
})

test('THE SEAT ROW: byte-exact + the plural law', () => {
  assert.equal(
    starveBotSeatRow({ bot: 'F5', owns: 5, ofStarves: 8, shareOfStarves: 0.625 }),
    "the starve's own bot (v0.932.0): F5 owns 5 of 8 starves (62.5%) - THE STARVE'S OWN BOT: one bot's own A* starves own the sky - the pathfinder's own WHO axis prices the crowd the thirds rode unnamed"
  )
  assert.equal(
    starveBotSeatRow({ bot: 'F7', owns: 1, ofStarves: 1, shareOfStarves: 1 }),
    "the starve's own bot (v0.932.0): F7 owns 1 of 1 starve (100.0%) - THE STARVE'S OWN BOT: one bot's own A* starves own the sky - the pathfinder's own WHO axis prices the crowd the thirds rode unnamed"
  )
})

test('THE BOUNDARY LAW: exactly half owns nothing - 2 of 3 still seats', () => {
  const tie = { stamps: [{ lane: 'hop', ts: 10, bot: 'F4' }, { lane: 'hop', ts: 20, bot: 'F4' }, { lane: 'walk', ts: 30, bot: 'F8' }, { lane: 'walk', ts: 40, bot: 'F8' }], clockEnd: 900 }
  assert.equal(starveBotSeat(tie), null) // the tie law - the storm has no seat
  const maj = { stamps: [{ lane: 'hop', ts: 10, bot: 'F4' }, { lane: 'hop', ts: 20, bot: 'F4' }, { lane: 'walk', ts: 30, bot: 'F8' }], clockEnd: 900 }
  assert.deepEqual(starveBotSeat(maj), { bot: 'F4', owns: 2, ofStarves: 3, shareOfStarves: 0.667 })
})

test('THE BARE-STAMPS ACCEPTANCE: the census-or-bare law', () => {
  const bare = [{ lane: 'hop', ts: 10, bot: 'F6' }, { lane: 'hop', ts: 20, bot: 'F6' }, { lane: 'walk', ts: 30, bot: 'F6' }, { lane: 'walk', ts: 40, bot: 'F9' }]
  assert.deepEqual(starveBotSeat(bare), { bot: 'F6', owns: 3, ofStarves: 4, shareOfStarves: 0.75 })
  assert.deepEqual(starveBotRiders(bare), null) // the branch law holds on the bare form too
})

test('THE TS-INDEPENDENT UNTIMED LAW: an untimed stamp still names its bot', () => {
  const lines = [hop('F7'), hb(1, 600)] // the starve rode before the first heartbeat
  const book = starveClockBook(lines)
  assert.equal(book.untimed, 1)
  assert.equal(book.stamps[0].ts, null)
  assert.equal(book.stamps[0].bot, 'F7')
  assert.deepEqual(starveBotSeat(book), { bot: 'F7', owns: 1, ofStarves: 1, shareOfStarves: 1 })
})

test('THE BYTE LAW: the true byte order reads F16 before F6 - the duet flag rides the equal-count tie', () => {
  const lines = [hb(1, 100), sweep('F16', 2), sweep('F6', 2), hb(2, 900)]
  const r = starveBotRiders(starveClockBook(lines))
  assert.deepEqual(r, {
    leader: 'F16', leaderOwns: 2, runner: 'F6', runnerOwns: 2,
    ofStarves: 4, pairOwns: 4, shareOfStarves: 1, duet: true,
  })
  const mix = { stamps: [{ lane: 'walk', ts: 10, bot: 'F3' }, { lane: 'walk', ts: 20, bot: 'F3' }, { lane: 'walk', ts: 30, bot: 'F3' }, { lane: 'walk', ts: 40, bot: 'F11' }, { lane: 'walk', ts: 50, bot: 'F11' }, { lane: 'walk', ts: 60, bot: 'F6' }, { lane: 'walk', ts: 70, bot: 'F6' }], clockEnd: 900 }
  const r2 = starveBotRiders(mix)
  assert.equal(r2.leader, 'F3')
  assert.equal(r2.runner, 'F11') // the byte law beside the count law: F11 rides before F6 on the equal count
  assert.equal(r2.duet, false)
  assert.equal(r2.shareOfStarves, 0.714)
})

test('THE RIDERS ROW: byte-exact', () => {
  assert.equal(
    starveBotRidersRow({ leader: 'F16', leaderOwns: 2, runner: 'F6', runnerOwns: 2, ofStarves: 4, pairOwns: 4, shareOfStarves: 1, duet: true }),
    "the starve's own riders (v0.932.0): no solo bot owns the majority - F16 x2 + F6 x2 own 4 of 4 starves (100.0%) - THE STARVE'S OWN MIX: the seat's tie law held, the mix is the shape - the starves' own spread prices the sky the solo law refused to seat"
  )
})

test("THE BRANCH LAW FENCED IN THE LIB: the seat's owner case leaves the riders silent", () => {
  const lines = []
  for (let i = 0; i < 5; i++) lines.push(hb(i + 1, 100 + i), hop('F5'))
  lines.push(hb(9, 300), walk('F11', 'iron commune'))
  const book = starveClockBook(lines)
  assert.ok(starveBotSeat(book))
  assert.equal(starveBotRiders(book), null)
})

test('THE HONEST SILENCES: junk never invents a seat', () => {
  assert.equal(starveBotSeat(null), null)
  assert.equal(starveBotSeat(undefined), null)
  assert.equal(starveBotSeat('nope'), null)
  assert.equal(starveBotSeat({}), null)
  assert.equal(starveBotSeat({ stamps: 'nope', clockEnd: 900 }), null)
  assert.equal(starveBotSeat({ stamps: [], clockEnd: 900 }), null) // the zero-sum book
  assert.equal(starveBotSeat([{ lane: 'hop', ts: 10 }]), null) // the bare-empty form
  // a stamp without a well-formed bot byte never seats (the real stamps still tally)
  const junkBots = { stamps: [{ lane: 'hop', ts: 10, bot: 'bot6' }, { lane: 'walk', ts: 20, bot: '' }, { lane: 'walk', ts: 30 }, { lane: 'walk', ts: 40, bot: 'F5' }], clockEnd: 900 }
  assert.deepEqual(starveBotSeat(junkBots), { bot: 'F5', owns: 1, ofStarves: 1, shareOfStarves: 1 })
  assert.equal(starveBotRiders(junkBots), null) // fewer than two well-formed bots
  // junk array cells skipped, the real cells still tally (F3 x2 of 2 - the strict majority seats)
  assert.deepEqual(starveBotSeat([null, 42, 'junk', { lane: 'walk', ts: 10, bot: 'F3' }, { lane: 'walk', ts: 20, bot: 'F3' }]), { bot: 'F3', owns: 2, ofStarves: 2, shareOfStarves: 1 })
  assert.equal(starveBotSeat([null, 42, 'junk', { lane: 'walk', ts: 10, bot: 'bot9' }]), null) // the junk-only bare form - the zero-sum silence
})

test("THE ROWS' JUNK BATTERY: rows read null on junk", () => {
  assert.equal(starveBotSeatRow(null), null)
  assert.equal(starveBotSeatRow(undefined), null)
  assert.equal(starveBotSeatRow('nope'), null)
  assert.equal(starveBotSeatRow({}), null)
  assert.equal(starveBotSeatRow({ bot: 'bot6', owns: 5, ofStarves: 8, shareOfStarves: 0.625 }), null)
  assert.equal(starveBotSeatRow({ bot: 'F5', owns: 0, ofStarves: 8, shareOfStarves: 0 }), null)
  assert.equal(starveBotSeatRow({ bot: 'F5', owns: 9, ofStarves: 8, shareOfStarves: 1.125 }), null)
  assert.equal(starveBotSeatRow({ bot: 'F5', owns: 5, ofStarves: 8 }), null)
  assert.equal(starveBotRidersRow(null), null)
  assert.equal(starveBotRidersRow({}), null)
  assert.equal(starveBotRidersRow({ leader: 'F16', runner: 'F6', leaderOwns: 2, runnerOwns: 2, ofStarves: 4, pairOwns: 5, shareOfStarves: 1.25 }), null)
  assert.equal(starveBotRidersRow({ leader: 'F16', runner: 'F6', leaderOwns: 2, runnerOwns: 2, ofStarves: 4, pairOwns: 4 }), null)
})

test('THE CENSUS GUARD: the seat rides the one-parse book beside the clock row (WIRING)', async () => {
  const src = await readFile(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("import { starveClockBook, starveClockVerdict, starveClockRow, starveBotSeat, starveBotSeatRow, starveBotRiders, starveBotRidersRow } from '../../src/lib/starveclock.mjs'")) // the import
  const wx = src.indexOf('const dw = decideWeather(lines)')
  const sb = src.indexOf('const svb = starveClockBook(lines)')
  const sv = src.indexOf('const svc = starveClockVerdict(svb)')
  assert.ok(wx > 0 && sb > wx && sv > sb) // one parse - the book computed once, the clock rides beside the weather row
  const st = src.indexOf('const svt = starveBotSeat(svb)')
  assert.ok(st > sv) // the seat rides beside the clock row, never before it
  assert.ok(src.includes("if (svt) console.log(`  ${starveBotSeatRow(svt)}`)"))
  assert.ok(src.includes('const svr = starveBotRiders(svb)'))
})

// THE FIRST RUN'S OWN LESSON (recorded not rewritten): the junk-array test
// above first expected the honest null on F3 x2 of 2 - the first draft
// misread the strict-majority law (x2 of 2 is 100%, NOT half - the majority
// seats; exactly half is the tie that owns nothing). The lib's law held,
// the expectation was mine. Recorded here, the test fixed to the true
// seat shape - the boundary law's own field witness inside the junk
// battery (the tie case lives in THE BOUNDARY LAW test above).
