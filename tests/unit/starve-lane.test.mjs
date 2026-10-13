//
// starve-lane.test.mjs - THE STARVE'S OWN LANE (v0.933.0)
//
// The starve book's own LANE axis - the v0.932.0 bot seat's own sibling.
// The v0.913.0 clock seated the SKY axis, the v0.932.0 seat the WHO
// axis; no row ever said WHICH LANE's own decide-timeouts own the book.
// The bill law reads the book's own stamps verbatim - the stamp's own
// lane byte the atom, zero re-parsing, one book, ZERO FOLD CHANGES (the
// lane byte has ridden the stamps since v0.913.0).
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { starveClockBook, starveLaneSeat, starveLaneSeatRow, starveLaneRiders, starveLaneRidersRow, starveBurstSeat, starveBurstSeatRow, starveGrandTotal, starveGrandTotalRow } from '../../src/lib/starveclock.mjs'

const hb = (n, ts) => `b] n=${n} ts=${ts}s rss=400M late=10ms mainLate=5ms`
const hop = (bot) => `${bot} [${bot}] hop: chest at [-100,60,400] d=10 zero: chest unreachable (Took to long to decide path to goal!)`
const walk = (bot, lane) => `${bot} ${lane}: chest walk failed (Took to long to decide path to goal!)`
const sweep = (bot, n) => `${bot} sweep: 0 collected - machine unreachable (Took to long to decide path to goal!) x${n}`
const walkBack = (bot) => `${bot} bank: chest unreachable (Took to long to decide path to goal!) (7 blocks from yard) - walking back`
const bankZero = (bot) => `${bot} bank: 0 (chest unreachable (Took to long to decide path to goal!))`

test('THE BILL LAW: the lane byte rides the fold verbatim - zero fold changes', () => {
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
  assert.deepEqual(book.lanes, { hop: 1, walk: 1, sweep: 2, bank: 2 })
  assert.equal(starveLaneSeat(book), null) // the under-half law: sweep 2 of 6 rides under half - the honest null
})

test('THE STRICT-MAJORITY SEAT: the seat shape on the fold (the deepEqual law)', () => {
  const lines = []
  for (let i = 0; i < 5; i++) lines.push(hb(i + 1, 100 + i), walk('F5', 'fuel commons'))
  lines.push(hb(9, 200), hop('F11'), hop('F11'), hop('F3'))
  const seat = starveLaneSeat(starveClockBook(lines))
  assert.deepEqual(seat, { lane: 'walk', owns: 5, ofStarves: 8, shareOfStarves: 0.625 })
})

test('THE SEAT ROW: byte-exact + the plural law', () => {
  assert.equal(
    starveLaneSeatRow({ lane: 'walk', owns: 5, ofStarves: 8, shareOfStarves: 0.625 }),
    "the starve's own lane (v0.933.0): walk owns 5 of 8 starves (62.5%) - THE STARVE'S OWN LANE: one lane's own decide-timeouts own the sky - the lane's own front prices the cure the thirds rode unnamed"
  )
  assert.equal(
    starveLaneSeatRow({ lane: 'bank', owns: 1, ofStarves: 1, shareOfStarves: 1 }),
    "the starve's own lane (v0.933.0): bank owns 1 of 1 starve (100.0%) - THE STARVE'S OWN LANE: one lane's own decide-timeouts own the sky - the lane's own front prices the cure the thirds rode unnamed"
  )
})

test('THE BOUNDARY LAW: exactly half owns nothing - 2 of 3 still seats', () => {
  const tie = { stamps: [{ lane: 'walk', ts: 10 }, { lane: 'walk', ts: 20 }, { lane: 'hop', ts: 30 }, { lane: 'hop', ts: 40 }], clockEnd: 900 }
  assert.equal(starveLaneSeat(tie), null) // the tie law - the storm has no seat
  const maj = { stamps: [{ lane: 'walk', ts: 10 }, { lane: 'walk', ts: 20 }, { lane: 'hop', ts: 30 }], clockEnd: 900 }
  assert.deepEqual(starveLaneSeat(maj), { lane: 'walk', owns: 2, ofStarves: 3, shareOfStarves: 0.667 })
})

test('THE BARE-STAMPS ACCEPTANCE: the census-or-bare law', () => {
  const bare = [{ lane: 'sweep', ts: 10 }, { lane: 'sweep', ts: 20 }, { lane: 'sweep', ts: 30 }, { lane: 'bank', ts: 40 }]
  assert.deepEqual(starveLaneSeat(bare), { lane: 'sweep', owns: 3, ofStarves: 4, shareOfStarves: 0.75 })
  assert.deepEqual(starveLaneRiders(bare), null) // the branch law holds on the bare form too
})

test('THE TS-INDEPENDENT UNTIMED LAW: an untimed stamp still names its lane', () => {
  const lines = [walk('F7', 'iron commune'), hb(1, 600)] // the starve rode before the first heartbeat
  const book = starveClockBook(lines)
  assert.equal(book.untimed, 1)
  assert.equal(book.stamps[0].lane, 'walk')
  assert.deepEqual(starveLaneSeat(book), { lane: 'walk', owns: 1, ofStarves: 1, shareOfStarves: 1 })
})

test('THE BYTE LAW: count desc, then the lane byte asc - the duet flag rides the equal-count tie', () => {
  const r = starveLaneRiders({ stamps: [{ lane: 'bank', ts: 10 }, { lane: 'bank', ts: 20 }, { lane: 'hop', ts: 30 }, { lane: 'hop', ts: 40 }], clockEnd: 900 })
  assert.deepEqual(r, {
    leader: 'bank', leaderOwns: 2, runner: 'hop', runnerOwns: 2,
    ofStarves: 4, pairOwns: 4, shareOfStarves: 1, duet: true,
  }) // 'bank' < 'hop' byte-wise
  const mix = { stamps: [{ lane: 'walk', ts: 10 }, { lane: 'walk', ts: 20 }, { lane: 'walk', ts: 30 }, { lane: 'bank', ts: 40 }, { lane: 'bank', ts: 50 }, { lane: 'hop', ts: 60 }, { lane: 'hop', ts: 70 }], clockEnd: 900 }
  const r2 = starveLaneRiders(mix)
  assert.equal(r2.leader, 'walk')
  assert.equal(r2.runner, 'bank') // the byte law beside the count law: 'bank' < 'hop' on the equal count
  assert.equal(r2.duet, false)
  assert.equal(r2.shareOfStarves, 0.714)
})

test('THE RIDERS ROW: byte-exact', () => {
  assert.equal(
    starveLaneRidersRow({ leader: 'bank', leaderOwns: 2, runner: 'hop', runnerOwns: 2, ofStarves: 4, pairOwns: 4, shareOfStarves: 1, duet: true }),
    "the starve's own lane mix (v0.933.0): no solo lane owns the majority - bank x2 + hop x2 own 4 of 4 starves (100.0%) - THE STARVE'S OWN LANE MIX: the seat's tie law held, the mix is the shape - the lanes' own spread prices the sky the solo law refused to seat"
  )
})

test("THE BRANCH LAW FENCED IN THE LIB: the seat's owner case leaves the riders silent", () => {
  const lines = []
  for (let i = 0; i < 5; i++) lines.push(hb(i + 1, 100 + i), walk('F5', 'fuel commons'))
  lines.push(hb(9, 300), hop('F11'))
  const book = starveClockBook(lines)
  assert.ok(starveLaneSeat(book))
  assert.equal(starveLaneRiders(book), null)
})

test('THE HONEST SILENCES: junk never invents a seat', () => {
  assert.equal(starveLaneSeat(null), null)
  assert.equal(starveLaneSeat(undefined), null)
  assert.equal(starveLaneSeat('nope'), null)
  assert.equal(starveLaneSeat({}), null)
  assert.equal(starveLaneSeat({ stamps: 'nope', clockEnd: 900 }), null)
  assert.equal(starveLaneSeat({ stamps: [], clockEnd: 900 }), null) // the zero-sum book
  assert.equal(starveLaneSeat([]), null) // the bare-empty form
  // a stamp without a well-formed lane byte never seats (the real stamps still tally)
  const junkLanes = { stamps: [{ lane: '', ts: 10 }, { ts: 20 }, { lane: 'walk', ts: 30 }, { lane: 'walk', ts: 40 }], clockEnd: 900 }
  assert.deepEqual(starveLaneSeat(junkLanes), { lane: 'walk', owns: 2, ofStarves: 2, shareOfStarves: 1 })
  assert.equal(starveLaneRiders(junkLanes), null) // fewer than two well-formed lanes
  // junk array cells skipped, the real cells still tally
  assert.deepEqual(starveLaneSeat([null, 42, 'junk', { lane: 'hop', ts: 10 }, { lane: 'hop', ts: 20 }]), { lane: 'hop', owns: 2, ofStarves: 2, shareOfStarves: 1 })
  assert.equal(starveLaneSeat([null, 42, { ts: 10 }]), null) // the junk-only bare form - the zero-sum silence
})

test("THE ROWS' JUNK BATTERY: rows read null on junk", () => {
  assert.equal(starveLaneSeatRow(null), null)
  assert.equal(starveLaneSeatRow(undefined), null)
  assert.equal(starveLaneSeatRow('nope'), null)
  assert.equal(starveLaneSeatRow({}), null)
  assert.equal(starveLaneSeatRow({ lane: '', owns: 5, ofStarves: 8, shareOfStarves: 0.625 }), null)
  assert.equal(starveLaneSeatRow({ lane: 'walk', owns: 0, ofStarves: 8, shareOfStarves: 0 }), null)
  assert.equal(starveLaneSeatRow({ lane: 'walk', owns: 9, ofStarves: 8, shareOfStarves: 1.125 }), null)
  assert.equal(starveLaneSeatRow({ lane: 'walk', owns: 5, ofStarves: 8 }), null)
  assert.equal(starveLaneRidersRow(null), null)
  assert.equal(starveLaneRidersRow({}), null)
  assert.equal(starveLaneRidersRow({ leader: 'bank', runner: 'hop', leaderOwns: 2, runnerOwns: 2, ofStarves: 4, pairOwns: 5, shareOfStarves: 1.25 }), null)
  assert.equal(starveLaneRidersRow({ leader: 'bank', runner: 'hop', leaderOwns: 2, runnerOwns: 2, ofStarves: 4, pairOwns: 4 }), null)
})

test('THE CENSUS GUARD: the lane block rides beside the bot block on the one-parse book (WIRING)', async () => {
  const src = await readFile(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("import { starveClockBook, starveClockVerdict, starveClockRow, starveBotSeat, starveBotSeatRow, starveBotRiders, starveBotRidersRow, starveLaneSeat, starveLaneSeatRow, starveLaneRiders, starveLaneRidersRow, starveBurstSeat, starveBurstSeatRow, starveGrandTotal, starveGrandTotalRow, starveGrandTotalFront, starveGrandTotalFrontRow, starveGrandTotalMix, starveGrandTotalMixRow } from '../../src/lib/starveclock.mjs'")) // the import
  const sb = src.indexOf('const svb = starveClockBook(lines)')
  const st = src.indexOf('const svt = starveBotSeat(svb)')
  const sl = src.indexOf('const svs = starveLaneSeat(svb)')
  assert.ok(sb > 0 && st > sb && sl > st) // one parse - the bot block first, the lane block beside it, never before
  assert.ok(src.includes("if (svs) console.log(`  ${starveLaneSeatRow(svs)}`)"))
  assert.ok(src.includes('const svm = starveLaneRiders(svb)'))
})
