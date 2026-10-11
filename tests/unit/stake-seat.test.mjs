// (v0.930.0) THE STAKES' OWN SEAT - the death drops' bot axis joins the
// seat law family. Tests feed the face-198-shaped book (628u over 7 loss
// rows - the face's own totals: 'stakes: 7 death drop(s) ... 628u at
// stake' - the per-bot split unread, the law is the pin), the boundary
// law, the junk battery, and the decompose wiring pin (the CENSUS GUARD
// law).
import { stakeSeat, stakeSeatRow, stakeRiders, stakeRidersRow } from '../../src/lib/deathdropcensus.mjs'
import fs from 'node:fs'
import assert from 'node:assert'
import { test } from 'node:test'

// A face-198-shaped book: 7 loss rows, 628u dropped (the face's own
// totals), a majority owner (the seat's own face).
const FACE198SHAPE = [
  { bot: 'F3', u: 325, kind: 'loss' },
  { bot: 'F11', u: 120, kind: 'loss' },
  { bot: 'F6', u: 90, kind: 'loss' },
  { bot: 'F14', u: 40, kind: 'loss' },
  { bot: 'F12', u: 30, kind: 'loss' },
  { bot: 'F16', u: 20, kind: 'loss' },
  { bot: 'F4', u: 3, kind: 'loss' }
]

test("the strict-majority seat shape (the fold reads the census's own drops rows verbatim)", () => {
  // F3 owns 325 of 628 - above half, the seat's own face.
  const seat = stakeSeat({ drops: FACE198SHAPE })
  assert.deepEqual(seat, { bot: 'F3', owns: 325, ofU: 628, shareOfU: 0.518 })
})

test('the seat row byte-exact', () => {
  assert.equal(
    stakeSeatRow(stakeSeat({ drops: FACE198SHAPE })),
    "the stakes' own bot (v0.930.0): F3 owns 325 of 628 dropped u (51.8%) - THE STAKES' OWN SEAT: one bot's own deaths own the death drops' own u - the drain's WHO axis prices the spread the thirds rode unnamed"
  )
})

test("the boundary law: exactly half owns nothing - the two-way tie never seats", () => {
  // The two-way tie: 100 vs 100 of 200 - exactly half each.
  const tie = [{ bot: 'F11', u: 100, kind: 'loss' }, { bot: 'F6', u: 100, kind: 'loss' }]
  assert.equal(stakeSeat({ drops: tie }), null)
  // The spread's own tie: the top's mass meets the rest exactly.
  assert.equal(stakeSeat({ drops: [{ bot: 'F3', u: 200 }, { bot: 'F11', u: 100 }, { bot: 'F6', u: 100 }] }), null) // 200 vs 200
  assert.equal(stakeSeat({ drops: [{ bot: 'F3', u: 3 }, { bot: 'F11', u: 3 }, { bot: 'F6', u: 1 }] }), null) // 3 vs 4
})

test("the bare-array acceptance (the v0.928.0 magnet's own shape): the seat reads the rows without the census wrapper", () => {
  const seat = stakeSeat(FACE198SHAPE)
  assert.deepEqual(seat, { bot: 'F3', owns: 325, ofU: 628, shareOfU: 0.518 })
  assert.equal(stakeSeat([]), null)
})

test("the empty form stakes nothing: u=0 rows never join the mass book, the real rows still tally", () => {
  const withEmpty = [
    { bot: 'F3', u: 0, kind: 'empty' },
    { bot: 'F3', u: 200, kind: 'loss' },
    { bot: 'F11', u: 100, kind: 'loss' }
  ]
  const seat = stakeSeat({ drops: withEmpty })
  assert.deepEqual(seat, { bot: 'F3', owns: 200, ofU: 300, shareOfU: 0.667 })
})

test("the byte law: the riders rank u desc, equal u rides the bot's own byte asc; the duet flag holds", () => {
  // The equal-u tie: byte asc breaks it (F11 < F6 - the census's own
  // insertion order never owns the ranking).
  const duet = stakeRiders({ drops: [{ bot: 'F6', u: 100 }, { bot: 'F11', u: 100 }] })
  assert.equal(duet.leader, 'F11')
  assert.equal(duet.runner, 'F6')
  assert.equal(duet.duet, true)
  // The unequal spread (no majority - the leader's own mass meets the
  // half exactly): u desc owns the ranking.
  const spread = stakeRiders({ drops: [{ bot: 'F11', u: 120 }, { bot: 'F3', u: 210 }, { bot: 'F6', u: 90 }] })
  assert.equal(spread.leader, 'F3')
  assert.equal(spread.runner, 'F11')
  assert.equal(spread.duet, false)
  assert.equal(spread.pairOwns, 330)
})

test("the riders row byte-exact on the spread book", () => {
  const r = stakeRiders({ drops: [{ bot: 'F11', u: 120 }, { bot: 'F3', u: 210 }, { bot: 'F6', u: 90 }] })
  assert.equal(
    stakeRidersRow(r),
    "the stakes' own riders (v0.930.0): no solo bot owns the majority - F3 x210 + F11 x120 own 330 of 420 dropped u (78.6%) - THE STAKES' OWN MIX: the seat's tie law held, the mix is the shape - the drops' own u spread the thirds priced, the WHO rode unnamed"
  )
})

test("the branch law lives in the lib: the seat's owner exists - the mix reads null; the solo book reads the riders null", () => {
  assert.equal(stakeRiders({ drops: FACE198SHAPE }), null) // F3 owns the majority
  assert.equal(stakeRiders({ drops: [{ bot: 'F3', u: 628 }] }), null) // fewer than two counted bots
})

test('the honest silences: the empty and junk books read the null', () => {
  assert.equal(stakeSeat(null), null)
  assert.equal(stakeSeat(undefined), null)
  assert.equal(stakeSeat('junk'), null)
  assert.equal(stakeSeat({}), null)
  assert.equal(stakeSeat({ drops: null }), null)
  assert.equal(stakeSeat({ drops: [] }), null)
  assert.equal(stakeSeat({ drops: [{ bot: 'F3', u: 0 }] }), null) // the zero-sum book
  assert.equal(stakeRiders(null), null)
  assert.equal(stakeRiders('junk'), null)
  assert.equal(stakeRiders({ drops: [] }), null)
})

test("the junk-cell law: a malformed row is skipped - the real rows still tally", () => {
  const junky = [
    null,
    'junk',
    { bot: 'G7', u: 50 }, // the malformed bot key never joins
    { bot: 'F3' }, // no mass
    { bot: 'F3', u: 'many' }, // the non-finite mass never joins
    { bot: 'F3', u: -5 }, // the non-positive mass never joins
    { bot: 'F3', u: 200, kind: 'loss' },
    { bot: 'F11', u: 100, kind: 'loss' }
  ]
  const seat = stakeSeat({ drops: junky })
  assert.deepEqual(seat, { bot: 'F3', owns: 200, ofU: 300, shareOfU: 0.667 })
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(stakeSeatRow(null), null)
  assert.equal(stakeSeatRow(undefined), null)
  assert.equal(stakeSeatRow('junk'), null)
  assert.equal(stakeSeatRow({}), null)
  assert.equal(stakeSeatRow({ bot: '', owns: 1, ofU: 1, shareOfU: 1 }), null)
  assert.equal(stakeSeatRow({ bot: 'F16', owns: 0, ofU: 5, shareOfU: 0 }), null)
  assert.equal(stakeSeatRow({ bot: 'F16', owns: 9, ofU: 5, shareOfU: 1.8 }), null) // owns > ofU
  assert.equal(stakeRidersRow(null), null)
  assert.equal(stakeRidersRow(undefined), null)
  assert.equal(stakeRidersRow('junk'), null)
  assert.equal(stakeRidersRow({}), null)
  assert.equal(stakeRidersRow({ leader: 'F12', leaderOwns: 1, runner: '', runnerOwns: 1, pairOwns: 2, ofU: 2, shareOfU: 1 }), null)
  assert.equal(stakeRidersRow({ leader: 'F12', leaderOwns: 1, runner: 'F16', runnerOwns: 1, pairOwns: 3, ofU: 2, shareOfU: 1.5 }), null) // pairOwns > ofU
})

test("WIRING: the stakes' own seat rides decompose beside the stakes print (v0.930.0)", () => {
  const src = fs.readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes('stakeSeat, stakeSeatRow, stakeRiders, stakeRidersRow'), 'the seat joins the decompose import band')
  const stakesAt = src.indexOf('death drop(s) across')
  const seatAt = src.indexOf('stakeSeat(dc)')
  const armJoinAt = src.indexOf('arm join: armed')
  assert.ok(stakesAt > 0 && seatAt > stakesAt, 'the seat rides beside the stakes print, never before it')
  assert.ok(armJoinAt > seatAt, 'the seat block rides before the arm join print')
})
