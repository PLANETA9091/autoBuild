// (v0.946.0) THE MAP TRIP'S OWN CAST - the map trip lane's own field
// book and bot-level seat (the count-seat precedent: each map trip line
// is one vote, THE LANE'S OWN POOL - the v0.942.0 bare/ARMED pool, the
// v0.943.0 both-skins pool, the v0.945.0 lane pool). The book reads the
// emitter's exact byte shapes (the launch, the skip skins, the second
// leg family, the night defer, the catch exit) - the launch/skip/
// second-leg REs ride by import from maptrip.mjs (the one-parser law),
// zero re-parsing. Strict-majority law (a tie owns nothing), byte-law
// riders (count desc, bot byte asc), the branch law fenced in the lib,
// the junk fences, the honest silences.
// THE NAME'S OWN DEDUP: maptrip.mjs owns the lane's RUNTIME machinery
// and the WHY-side seat (tripAskSeat, v0.801.0) - the lane's own BOOK
// and BOT axis is this lib, both untouched.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  mapTripCastBook, mapTripCast, mapTripCastRow, mapTripRiders, mapTripRidersRow,
} from '../../src/lib/maptripcast.mjs'

// the frozen field lines (face 209's own skins, byte for byte) - the
// whole voice: 7 launches, 8 shaft-locked skips, 6 unreachable skips,
// 1 second-leg delivery, 6 second-leg failures
const FROZEN = [
  'F3 map trip skipped: cannot leave the shaft',
  'F3 map trip skipped: cannot leave the shaft',
  'F9 map trip: sand',
  'F9 map trip skipped: cannot leave the shaft',
  'F8 map trip: sand',
  'F7 map trip: sand',
  'F6 map trip skipped: cannot leave the shaft',
  'F4 map trip: sand',
  'F2 map trip skipped: sand,gravel unreachable',
  'F2 map trip second leg failed: No path to the goal!',
  'F19 map trip skipped: sand,gravel unreachable',
  'F19 map trip skipped: cannot leave the shaft',
  'F19 map trip second leg failed: No path to the goal!',
  'F18 map trip skipped: sand,gravel unreachable',
  'F18 map trip second leg failed: No path to the goal!',
  'F17 map trip: sand',
  'F17 map trip second leg: sand',
  'F16 map trip skipped: sand,gravel unreachable',
  'F16 map trip second leg failed: Took to long to decide path to goal!',
  'F14 map trip: sand',
  'F14 map trip skipped: cannot leave the shaft',
  'F12 map trip skipped: sand,gravel unreachable',
  'F12 map trip second leg failed: Took to long to decide path to goal!',
  'F11 map trip skipped: sand,gravel unreachable',
  'F11 map trip skipped: cannot leave the shaft',
  'F11 map trip second leg failed: No path to the goal!',
  'F10 map trip skipped: cannot leave the shaft',
  'F1 map trip: sand',
]

test('the bill law: the book classifies every skin the emitter speaks', () => {
  const t = mapTripCastBook([
    ...FROZEN,
    'F5 map trip deferred: night (tod=18000)',
    'F5 map trip failed: pathfind blew up',
    'F5 map trip second leg deferred: deadline',
    'F5 map trip second leg skipped: no candidate left',
  ]).totals
  assert.equal(t.total, 32)
  assert.equal(t.launch, 7)
  assert.equal(t.skipShaft, 8)
  assert.equal(t.skipUnreachable, 6)
  assert.equal(t.skipOther, 0)
  assert.equal(t.secondDelivered, 1)
  assert.equal(t.secondDeferred, 1)
  assert.equal(t.secondRefused, 1)
  assert.equal(t.secondFailed, 6)
  assert.equal(t.nightDefer, 1)
  assert.equal(t.catchFail, 1)
  assert.equal(t.totalBots.F5, 4)
  assert.equal(Object.keys(t.totalBots).length, 17) // FROZEN's 16 + F5
})

test('the count law: each line one vote, the pool math holds', () => {
  const book = mapTripCastBook(FROZEN)
  const t = book.totals
  assert.equal(t.total, 28)
  const summed = Object.values(book.bots).reduce((a, b) => a + b.total, 0)
  assert.equal(summed, t.total)
  assert.equal(book.bots.F19.total, 3)
  assert.equal(book.bots.F11.total, 3)
  assert.equal(book.bots.F3.total, 2)
  assert.equal(book.bots.F17.total, 2)
  assert.equal(book.bots.F1.total, 1)
  assert.equal(Object.keys(book.bots).length, 16)
})

test('the target law: the launches and the unreachable skips name their targets', () => {
  const t = mapTripCastBook(FROZEN).totals
  assert.equal(t.launchTargets.sand, 8) // 7 launches + 1 second-leg delivery
  assert.equal(t.unreachableTargets.sand, 6)
  assert.equal(t.unreachableTargets.gravel, 6)
})

test('the cast: a solo majority owns the seat', () => {
  const cast = mapTripCast(mapTripCastBook([
    'F5 map trip: sand', 'F5 map trip: sand', 'F5 map trip: sand',
    'F5 map trip skipped: cannot leave the shaft',
    'F5 map trip second leg: sand',
    'F5 map trip second leg failed: No path to the goal!',
    'F5 map trip second leg failed: No path to the goal!',
    'F1 map trip: gravel',
    'F2 map trip skipped: cannot leave the shaft',
  ]).bots)
  assert.deepEqual(cast, { bot: 'F5', owns: 7, ofLines: 9, share: 0.778 })
})

test('the tie law: an under-half top owns nothing', () => {
  assert.equal(mapTripCast(mapTripCastBook(FROZEN).bots), null) // 3 of 28
})

test('the boundary law: exactly half owns nothing', () => {
  const bots = mapTripCastBook([
    'F1 map trip: sand', 'F1 map trip: sand', 'F1 map trip: sand', 'F1 map trip: sand',
    'F2 map trip: sand', 'F2 map trip: sand', 'F2 map trip: sand', 'F2 map trip: sand',
  ]).bots
  assert.equal(mapTripCast(bots), null)
})

test('the cast row: byte-exact, the plural law holds', () => {
  const row = mapTripCastRow({ bot: 'F5', owns: 7, ofLines: 9, share: 0.778 })
  assert.equal(row, "the map trip's own cast (v0.946.0): F5 owns 7 of 9 map trip lines (77.8%) - THE FLEET'S OWN MAPPING SEAT: one bot's own trips keep the map's own voice - the v0.801.0 seat priced the ask, the cast names its walker")
  const solo = mapTripCastRow({ bot: 'F5', owns: 1, ofLines: 1, share: 1 })
  assert.match(solo, /1 of 1 map trip line \(/)
})

test('the cast row: junk never prints a seat', () => {
  assert.equal(mapTripCastRow(null), null)
  assert.equal(mapTripCastRow({}), null)
  assert.equal(mapTripCastRow({ bot: '', owns: 1, ofLines: 1, share: 1 }), null)
  assert.equal(mapTripCastRow({ bot: 'F5', owns: 0, ofLines: 1, share: 0 }), null)
  assert.equal(mapTripCastRow({ bot: 'F5', owns: 2, ofLines: 1, share: 2 }), null)
  assert.equal(mapTripCastRow({ bot: 'F5', owns: 1, ofLines: 2, share: 'x' }), null)
})

test('the riders: byte law count desc + bot byte asc', () => {
  const r = mapTripRiders(mapTripCastBook(FROZEN).bots)
  assert.deepEqual({ leader: r.leader, leaderOwns: r.leaderOwns, runner: r.runner, runnerOwns: r.runnerOwns, ofLines: r.ofLines, pairOwns: r.pairOwns }, {
    leader: 'F11', leaderOwns: 3, runner: 'F19', runnerOwns: 3, ofLines: 28, pairOwns: 6,
  })
  assert.equal(r.share, 0.214)
})

test('the riders row: byte-exact', () => {
  const row = mapTripRidersRow(mapTripRiders(mapTripCastBook(FROZEN).bots))
  assert.equal(row, "the map trip's own riders (v0.946.0): no solo mapper owns the majority - F11 x3 + F19 x3 own 6 of 28 map trip lines (21.4%) - THE MAPPERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the lane the solo law refused to name")
})

test('the branch law: the owner case leaves the riders unprinted (fenced in the lib)', () => {
  const bots = mapTripCastBook([
    'F5 map trip: sand', 'F5 map trip: sand', 'F5 map trip: sand',
    'F5 map trip skipped: cannot leave the shaft',
    'F5 map trip: gravel',
    'F1 map trip: gravel',
  ]).bots
  const cast = mapTripCast(bots)
  assert.equal(cast.bot, 'F5')
  assert.equal(mapTripRiders(bots), null)
  assert.equal(mapTripRidersRow({ leader: 'F5', leaderOwns: 5, runner: 'F1', runnerOwns: 1, ofLines: 6, pairOwns: 7, share: 1.167 }), null)
})

test('the riders: junk never invents a shape', () => {
  assert.equal(mapTripRiders(null), null)
  assert.equal(mapTripRiders({}), null)
  assert.equal(mapTripRiders({ F5: { total: 2 } }), null) // a solo book: no crowd
  assert.equal(mapTripRidersRow(null), null)
  assert.equal(mapTripRidersRow({}), null)
  assert.equal(mapTripRidersRow({ leader: 'F5', leaderOwns: 1, runner: 'F1', runnerOwns: 1, ofLines: 0, pairOwns: 2, share: 2 }), null)
})

test('the junk fences: the other lanes and the prose read nothing', () => {
  const t = mapTripCastBook([
    'map trips: 28',
    '--- MAP-TRIP CENSUS (v0.415.0: the plan\'s launch economics) ---',
    'MAP TRIP GAP (v0.445.0: the stuck resource\'s knowledge-delivery read)',
    'sand: demanded by the trip lane 13x (launches 7, unreachable skips 6, shaft-locked 8)',
    'F9 wood trip: famine (sticks 3 planks 3 logs 0) - gathering',
    'F9 food trip: famine (hunger 17, plate 0) - the commons walk',
    'F7 bank trip: pockets full budget 120s',
    'F9 map trip deferred: night (tod=18000.5)',
    'F9 map trip: Sand',
    'F9 map trip skipped:',
    'the map holds 581 sand position(s) - the delivery leg, not the knowledge leg, is the lever',
    42, null, undefined, ['F1 map trip: sand'],
  ]).totals
  assert.equal(t.total, 0)
})

test('the honest silence: a trip-free face stays silent', () => {
  const book = mapTripCastBook([])
  assert.equal(book.totals.total, 0)
  assert.equal(mapTripCast(book.bots), null)
  assert.equal(mapTripRiders(book.bots), null)
  assert.equal(mapTripCastBook('not an array'), null)
  assert.equal(mapTripCastBook(null), null)
})

test('the census-guard purity: read-time only, the input is never touched', () => {
  const lines = ['F1 map trip: sand', 'F2 map trip skipped: cannot leave the shaft']
  const snapshot = JSON.stringify(lines)
  const book = mapTripCastBook(lines)
  assert.equal(JSON.stringify(lines), snapshot)
  assert.equal(book.bots.F1.launch, 1)
  const again = mapTripCastBook(lines)
  assert.deepEqual(again, book)
})

test('the face-209 END-TO-END: the frozen field speaks the crowd', () => {
  const book = mapTripCastBook(FROZEN)
  const cast = mapTripCast(book.bots)
  assert.equal(cast, null)
  const riders = mapTripRiders(book.bots)
  assert.equal(mapTripRidersRow(riders), "the map trip's own riders (v0.946.0): no solo mapper owns the majority - F11 x3 + F19 x3 own 6 of 28 map trip lines (21.4%) - THE MAPPERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the lane the solo law refused to name")
})
