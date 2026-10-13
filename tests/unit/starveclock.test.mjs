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
import { starveClockBook, starveClockVerdict, starveClockRow, STARVE_LANES, starveGrandTotal, starveGrandTotalRow, starveGrandTotalFront, starveGrandTotalFrontRow, starveGrandTotalMix, starveGrandTotalMixRow } from '../../src/lib/starveclock.mjs'

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
  assert.ok(src.includes("import { starveClockBook, starveClockVerdict, starveClockRow, starveBotSeat, starveBotSeatRow, starveBotRiders, starveBotRidersRow, starveLaneSeat, starveLaneSeatRow, starveLaneRiders, starveLaneRidersRow, starveBurstSeat, starveBurstSeatRow, starveGrandTotal, starveGrandTotalRow, starveGrandTotalFront, starveGrandTotalFrontRow, starveGrandTotalMix, starveGrandTotalMixRow, starveBurstLead, starveBurstLeadRow } from '../../src/lib/starveclock.mjs'")) // the import (the v0.976.1 band's own growth re-measured - the v0.975.5 precedent, the missed-pin's own cure)
  const wx = src.indexOf('const dw = decideWeather(lines)')
  const sb = src.indexOf('const svb = starveClockBook(lines)')
  const sv = src.indexOf('const svc = starveClockVerdict(svb)')
  assert.ok(wx > 0 && sb > wx && sv > sb) // one parse - the book computed once, the clock rides beside the weather row, never before it
  const st = src.indexOf('const svt = starveBotSeat(svb)')
  assert.ok(st > sv) // the seat rides beside the clock row, never before it (the v0.932.0 growth)
  // (v0.975.5) the grand total's own hoist law: the lets ride the bank
  // docket's own birth site, each leg assigned at its own byte's site,
  // the total prints after its last leg (the commons block's own close)
  const bd = src.indexOf('const bd = bankDocket(lines, bankVisitLines)')
  const lets = src.indexOf('let starveGrandHop = null')
  const bankLeg = src.indexOf('starveGrandBank = bd && bd.door ? bd.door.decideTimeouts : null')
  const hopLeg = src.indexOf('starveGrandHop = dw && dw.hop ? dw.hop.zeros : null')
  const walkLeg = src.indexOf('starveGrandWalk = cl && cl.totals ? cl.totals.walkFail : null')
  const total = src.indexOf('const sgt = starveGrandTotal(starveGrandHop, starveGrandWalk, starveGrandBank)')
  assert.ok(bd > 0 && lets > bd && bankLeg > lets) // the lets ride the docket's own site, the bank leg assigned at its own birth
  assert.ok(hopLeg > wx) // the hop leg at the weather's own birth site
  assert.ok(walkLeg > hopLeg) // the walk leg at the commons ledger's own birth site (the last leg)
  assert.ok(total > walkLeg) // the total prints after its last leg
  assert.ok(src.includes('const sgtf = starveGrandTotalFront(sgt)'))
  assert.ok(src.includes('if (sgtf) console.log(`  ${starveGrandTotalFrontRow(sgtf)}`)'))
  assert.ok(src.includes('if (sgtm) console.log(`  ${starveGrandTotalMixRow(sgtm)}`)'))
  const sgtfIdx = src.indexOf('const sgtf = starveGrandTotalFront(sgt)')
  const sgtmIdx = src.indexOf('const sgtm = starveGrandTotalMix(sgt)')
  assert.ok(sgtfIdx > total && sgtmIdx > sgtfIdx) // the front rides beside the total, the mix inside the front's own else (the branch law's own shape)
  // the prose lives in the lib, never duplicated in the mine
  assert.equal(src.includes("the A* starvation's own grand total"), false)
  assert.equal(src.includes("the three lanes' own mass"), false)
  assert.equal(src.includes("THE DECIDER'S OWN SEAT"), false)
  assert.equal(src.includes("THE MASS'S OWN CROWD"), false)
})

// (v0.975.5) THE STARVATION'S OWN GRAND TOTAL - the three lanes' own
// mass joined; the reads' hand sum owned (face 296's 165, face 297's
// 37, face 299's 131 - the field's own verdicts).
test('v0.975.5 the grand total sums the three lanes (all legs or the silence)', () => {
  const g = starveGrandTotal(45, 24, 62)
  assert.ok(g)
  assert.deepEqual(g, { hop: 45, walkFail: 24, bankDecide: 62, total: 131 })
  // the zero leg stands (a lane can ride clean), the all-zero face reads the silence
  assert.deepEqual(starveGrandTotal(0, 12, 3), { hop: 0, walkFail: 12, bankDecide: 3, total: 15 })
  assert.equal(starveGrandTotal(0, 0, 0), null)
  // any missing or junk leg reads the lanes never assembled
  for (const junk of [[null, 1, 1], [1, null, 1], [1, 1, null], [undefined, 1, 1], [1, 'x', 1], [1, 1, NaN], [-1, 1, 1], [1, -2, 1], [1, 1, -3]]) {
    assert.equal(starveGrandTotal(...junk), null, `the total must stay silent on ${JSON.stringify(junk)}`)
  }
})

test('v0.975.5 the grand total row speaks byte-exact and junk never prints', () => {
  const row = starveGrandTotalRow({ hop: 45, walkFail: 24, bankDecide: 62, total: 131 })
  assert.equal(row, 'the A* starvation\'s own grand total (v0.975.5): 131 starve(s) - hop 45 + walk-fail 24 + bank decide 62 (the three lanes\' own mass, the decider\'s own front)')
  // the sum law rides the row too (the legs must own their total)
  assert.equal(starveGrandTotalRow({ hop: 1, walkFail: 1, bankDecide: 1, total: 4 }), null)
  for (const junk of [undefined, null, 42, 'str', {}, { hop: 1, walkFail: 1, bankDecide: 1 }, { hop: 'x', walkFail: 1, bankDecide: 1, total: 3 }, { hop: -1, walkFail: 1, bankDecide: 1, total: 1 }, { hop: 0, walkFail: 0, bankDecide: 0, total: 0 }]) {
    assert.equal(starveGrandTotalRow(junk), null, `the row must stay silent on ${JSON.stringify(junk)}`)
  }
})

// (v0.975.7) THE GRAND TOTAL'S OWN FRONT - WHICH lane's own mass owns
// the sum (the strict-majority seat, the v0.933.0 law applied to the
// sum's own fold); the mix companion rides the seat's silence (the
// branch law lives in the lib).
test('v0.975.7 the grand total front seats the strict-majority lane (a tie or a spread owns nothing)', () => {
  // the seat: one lane over half the total (face 300's own byte: walk-fail 8 of 8)
  assert.deepEqual(starveGrandTotalFront({ hop: 0, walkFail: 8, bankDecide: 0, total: 8 }), { lane: 'walk-fail', owns: 8, ofTotal: 8, shareOfTotal: 1 })
  assert.deepEqual(starveGrandTotalFront({ hop: 0, walkFail: 12, bankDecide: 3, total: 15 }), { lane: 'walk-fail', owns: 12, ofTotal: 15, shareOfTotal: 0.8 })
  assert.deepEqual(starveGrandTotalFront({ hop: 8, walkFail: 4, bankDecide: 0, total: 12 }), { lane: 'hop', owns: 8, ofTotal: 12, shareOfTotal: 0.667 })
  // the tie law: exactly half owns nothing (2 of 4, 5 of 15 thirds, face 299's 62 of 131)
  assert.equal(starveGrandTotalFront({ hop: 2, walkFail: 2, bankDecide: 0, total: 4 }), null)
  assert.equal(starveGrandTotalFront({ hop: 5, walkFail: 5, bankDecide: 5, total: 15 }), null)
  assert.equal(starveGrandTotalFront({ hop: 45, walkFail: 24, bankDecide: 62, total: 131 }), null)
  // the sum law rides the seat too (the legs must own their total)
  assert.equal(starveGrandTotalFront({ hop: 1, walkFail: 1, bankDecide: 1, total: 4 }), null)
  for (const junk of [undefined, null, 42, 'str', {}, { hop: 1, walkFail: 1, bankDecide: 1 }, { hop: 'x', walkFail: 1, bankDecide: 1, total: 3 }, { hop: -1, walkFail: 1, bankDecide: 1, total: 1 }, { hop: 0, walkFail: 0, bankDecide: 0, total: 0 }]) {
    assert.equal(starveGrandTotalFront(junk), null, `the seat must stay silent on ${JSON.stringify(junk)}`)
  }
})

test('v0.975.7 the mix rides the seat\'s silence (the branch law) and names the pair', () => {
  // the branch law: the seat's owner exists - the mix never prints (face 300's own byte)
  assert.equal(starveGrandTotalMix({ hop: 0, walkFail: 8, bankDecide: 0, total: 8 }), null)
  assert.equal(starveGrandTotalMix({ hop: 0, walkFail: 12, bankDecide: 3, total: 15 }), null)
  // the mix: count desc + the lane's own byte asc (face 296's own byte: 68/74/23)
  assert.deepEqual(starveGrandTotalMix({ hop: 68, walkFail: 74, bankDecide: 23, total: 165 }), { leader: 'walk-fail', leaderOwns: 74, runner: 'hop', runnerOwns: 68, ofTotal: 165, pairOwns: 142, shareOfTotal: 0.861, duet: false })
  // face 299's own byte: bank decide leads the mix
  assert.deepEqual(starveGrandTotalMix({ hop: 45, walkFail: 24, bankDecide: 62, total: 131 }), { leader: 'bank decide', leaderOwns: 62, runner: 'hop', runnerOwns: 45, ofTotal: 131, pairOwns: 107, shareOfTotal: 0.817, duet: false })
  // the duet flag: the three-way tie rides the name-asc pair (bank decide + hop)
  assert.deepEqual(starveGrandTotalMix({ hop: 5, walkFail: 5, bankDecide: 5, total: 15 }), { leader: 'bank decide', leaderOwns: 5, runner: 'hop', runnerOwns: 5, ofTotal: 15, pairOwns: 10, shareOfTotal: 0.667, duet: true })
  // the sum law rides the mix too
  assert.equal(starveGrandTotalMix({ hop: 1, walkFail: 1, bankDecide: 1, total: 4 }), null)
  for (const junk of [undefined, null, 42, 'str', {}, { hop: 1, walkFail: 1, bankDecide: 1 }, { hop: 'x', walkFail: 1, bankDecide: 1, total: 3 }, { hop: -1, walkFail: 1, bankDecide: 1, total: 1 }, { hop: 0, walkFail: 0, bankDecide: 0, total: 0 }]) {
    assert.equal(starveGrandTotalMix(junk), null, `the mix must stay silent on ${JSON.stringify(junk)}`)
  }
})

test('v0.975.7 the front and mix rows speak byte-exact and junk never prints', () => {
  // face 300's own field word
  assert.equal(starveGrandTotalFrontRow({ lane: 'walk-fail', owns: 8, ofTotal: 8, shareOfTotal: 1 }), 'the grand total\'s own front (v0.975.7): walk-fail owns 8 of 8 starves (100.0%) - THE DECIDER\'S OWN SEAT: one lane\'s own mass owns the grand total - the lane\'s own front prices the cure the sum rode unnamed')
  // the singular grain
  assert.equal(starveGrandTotalFrontRow({ lane: 'hop', owns: 8, ofTotal: 12, shareOfTotal: 0.667 }), 'the grand total\'s own front (v0.975.7): hop owns 8 of 12 starves (66.7%) - THE DECIDER\'S OWN SEAT: one lane\'s own mass owns the grand total - the lane\'s own front prices the cure the sum rode unnamed')
  assert.equal(starveGrandTotalFrontRow({ lane: 'hop', owns: 1, ofTotal: 1, shareOfTotal: 1 }), 'the grand total\'s own front (v0.975.7): hop owns 1 of 1 starve (100.0%) - THE DECIDER\'S OWN SEAT: one lane\'s own mass owns the grand total - the lane\'s own front prices the cure the sum rode unnamed')
  for (const junk of [undefined, null, 42, 'str', {}, { lane: 'hop', owns: 1, ofTotal: 1 }, { lane: '', owns: 1, ofTotal: 1, shareOfTotal: 1 }, { lane: 'hop', owns: 0, ofTotal: 1, shareOfTotal: 0 }, { lane: 'hop', owns: 2, ofTotal: 1, shareOfTotal: 2 }, { lane: 'hop', owns: 'x', ofTotal: 1, shareOfTotal: 1 }]) {
    assert.equal(starveGrandTotalFrontRow(junk), null, `the front row must stay silent on ${JSON.stringify(junk)}`)
  }
  // face 296's own mix word
  assert.equal(starveGrandTotalMixRow({ leader: 'walk-fail', leaderOwns: 74, runner: 'hop', runnerOwns: 68, ofTotal: 165, pairOwns: 142, shareOfTotal: 0.861, duet: false }), 'the grand total\'s own mix (v0.975.7): no solo lane owns the majority - walk-fail x74 + hop x68 own 142 of 165 starves (86.1%) - THE MASS\'S OWN CROWD: the seat\'s tie law held, the mix is the shape - the lanes\' own spread prices the sky the solo law refused to seat')
  // the duet's own word
  assert.equal(starveGrandTotalMixRow({ leader: 'bank decide', leaderOwns: 5, runner: 'hop', runnerOwns: 5, ofTotal: 15, pairOwns: 10, shareOfTotal: 0.667, duet: true }), 'the grand total\'s own mix (v0.975.7): no solo lane owns the majority - bank decide x5 + hop x5 own 10 of 15 starves (66.7%) - THE MASS\'S OWN CROWD: the seat\'s tie law held, the mix is the shape (the duet\'s own tie) - the lanes\' own spread prices the sky the solo law refused to seat')
  for (const junk of [undefined, null, 42, 'str', {}, { leader: 'hop', leaderOwns: 1, runner: 'walk-fail', runnerOwns: 1, ofTotal: 2 }, { leader: '', leaderOwns: 1, runner: 'walk-fail', runnerOwns: 1, ofTotal: 2, pairOwns: 2, shareOfTotal: 1, duet: false }, { leader: 'hop', leaderOwns: 0, runner: 'walk-fail', runnerOwns: 1, ofTotal: 2, pairOwns: 1, shareOfTotal: 0.5, duet: false }, { leader: 'hop', leaderOwns: 1, runner: 'walk-fail', runnerOwns: 1, ofTotal: 2, pairOwns: 3, shareOfTotal: 1.5, duet: false }, { leader: 'hop', leaderOwns: 1, runner: 'walk-fail', runnerOwns: 1, ofTotal: 2, pairOwns: 2, shareOfTotal: 1, duet: 'yes' }]) {
    assert.equal(starveGrandTotalMixRow(junk), null, `the mix row must stay silent on ${JSON.stringify(junk)}`)
  }
})
