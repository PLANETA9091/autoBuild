// (v0.947.0) THE SHELTER SKIP'S OWN CAST - the shelter skip lane's own
// field book and bot-level seat (the count-seat precedent: each shelter
// skip line is one vote, THE LANE'S OWN POOL - the v0.942.0 bare/ARMED
// pool, the v0.945.0 lane pool, the v0.946.0 map-trip pool). The book
// rides the combat verb grammar by import (parseCombatLine,
// shootercensus.mjs - the one-parser law; the skip-class grammar stays
// shieldledger's own subject, zero re-classification). Strict-majority
// law (a tie owns nothing), byte-law riders (count desc, bot byte asc),
// the branch law fenced in the lib, the junk fences, the honest
// silences.
// THE NAME'S OWN DEDUP: shieldledger.mjs owns the skip-class grammar
// and the episode book, shootercensus.mjs owns the verb grammar, the
// outcome ledger joins the deaths - the lane's own BOT axis is this
// lib, all untouched.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  shelterSkipBook, shelterSkipCast, shelterSkipCastRow, shelterSkipRiders, shelterSkipRidersRow,
} from '../../src/lib/sheltercast.mjs'

// the frozen field lines (face 209's own skins, byte for byte) - the
// whole voice: the night gate skin x12, the ring-stock skin x2, the
// ring-incomplete skin x1
const FROZEN = [
  'F9 [F9] combat: shelter skip (open field: ring stock 0/8, ground earns nothing)',
  'F15 [F15] combat: shelter skip (open field: ring incomplete 3/8)',
  'F4 [F4] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=creeper@6.2)',
  'F4 [F4] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=creeper@4.9)',
  'F16 [F16] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=creeper@4.9)',
  'F4 [F4] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=creeper@3.4)',
  'F16 [F16] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=creeper@5.6)',
  'F4 [F4] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=creeper@3.8)',
  'F16 [F16] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=creeper@5.7)',
  'F4 [F4] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=creeper@4.1)',
  'F16 [F16] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=creeper@2.8)',
  'F4 [F4] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=creeper@5.7)',
  'F16 [F16] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=creeper@2.7)',
  'F14 [F14] combat: shelter skip (night=true armed=true hp=15.666666984558105 attackers=2 poison=off threat=drowned@2.8)',
  'F9 [F9] combat: shelter skip (open field: ring stock 0/2, ground earns nothing)',
]

test('the bill law: every skin the refuser speaks is one vote', () => {
  const book = shelterSkipBook([
    ...FROZEN,
    'F5 [F5] combat: shelter skip (no seal material, threat@2.1 too close to earn)',
    'F5 [F5] combat: shelter skip (no seal material, nothing expendable to drop)',
    'F6 [F6] combat: shelter skip (open field: ring not buildable [no ground])',
  ])
  const t = book.totals
  assert.equal(t.total, 18)
  assert.equal(t.ownerless, 0)
  assert.equal(t.totalBots.F5, 2)
  assert.equal(t.totalBots.F4, 6)
  assert.equal(Object.keys(t.totalBots).length, 7) // FROZEN's 5 + F5 + F6
})

test('the count law: the pool math holds, the orphans never vote', () => {
  const book = shelterSkipBook([
    ...FROZEN,
    'combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=zombie@3)',
    'F? [F?] combat: shelter skip (open field: ring incomplete 1/8)',
  ])
  assert.equal(book.totals.total, 15)
  assert.equal(book.totals.ownerless, 2)
  const summed = Object.values(book.bots).reduce((a, b) => a + b.total, 0)
  assert.equal(summed, 15)
  assert.equal(Object.keys(book.bots).length, 5)
})

test('the cast: a solo majority owns the seat', () => {
  const cast = shelterSkipCast(shelterSkipBook([
    'F5 [F5] combat: shelter skip (no seal material, nothing expendable to drop)',
    'F5 [F5] combat: shelter skip (no seal material, nothing expendable to drop)',
    'F5 [F5] combat: shelter skip (no seal material, threat@3.0 too close to earn)',
    'F5 [F5] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=zombie@3)',
    'F5 [F5] combat: shelter skip (open field: ring incomplete 1/8)',
    'F5 [F5] combat: shelter skip (open field: ring not buildable [no ground])',
    'F5 [F5] combat: shelter skip (open field: ring incomplete 2/8)',
    'F1 [F1] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=zombie@3)',
    'F2 [F2] combat: shelter skip (open field: ring stock 0/8, ground earns nothing)',
  ]).bots)
  assert.deepEqual(cast, { bot: 'F5', owns: 7, ofLines: 9, share: 0.778 })
})

test('the tie law: an under-half top owns nothing', () => {
  assert.equal(shelterSkipCast(shelterSkipBook(FROZEN).bots), null) // 6 of 15
})

test('the boundary law: exactly half owns nothing', () => {
  const bots = shelterSkipBook([
    'F1 [F1] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=zombie@3)',
    'F1 [F1] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=zombie@3)',
    'F2 [F2] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=zombie@3)',
    'F2 [F2] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=zombie@3)',
  ]).bots
  assert.equal(shelterSkipCast(bots), null)
})

test('the cast row: byte-exact, the plural law holds', () => {
  const row = shelterSkipCastRow({ bot: 'F5', owns: 7, ofLines: 9, share: 0.778 })
  assert.equal(row, "the shelter skip's own cast (v0.947.0): F5 owns 7 of 9 shelter skip refusals (77.8%) - THE NIGHT'S OWN SKIPPER: one bot's own refusals keep the shelter's own voice - the shield ladder priced the attempts, the cast names its refuser")
  const solo = shelterSkipCastRow({ bot: 'F5', owns: 1, ofLines: 1, share: 1 })
  assert.match(solo, /1 of 1 shelter skip refusal \(/)
})

test('the cast row: junk never prints a seat', () => {
  assert.equal(shelterSkipCastRow(null), null)
  assert.equal(shelterSkipCastRow({}), null)
  assert.equal(shelterSkipCastRow({ bot: '', owns: 1, ofLines: 1, share: 1 }), null)
  assert.equal(shelterSkipCastRow({ bot: 'F5', owns: 0, ofLines: 1, share: 0 }), null)
  assert.equal(shelterSkipCastRow({ bot: 'F5', owns: 2, ofLines: 1, share: 2 }), null)
  assert.equal(shelterSkipCastRow({ bot: 'F5', owns: 1, ofLines: 2, share: 'x' }), null)
})

test('the riders: byte law count desc + bot byte asc', () => {
  const r = shelterSkipRiders(shelterSkipBook(FROZEN).bots)
  assert.deepEqual({ leader: r.leader, leaderOwns: r.leaderOwns, runner: r.runner, runnerOwns: r.runnerOwns, ofLines: r.ofLines, pairOwns: r.pairOwns }, {
    leader: 'F4', leaderOwns: 6, runner: 'F16', runnerOwns: 5, ofLines: 15, pairOwns: 11,
  })
  assert.equal(r.share, 0.733)
})

test('the riders row: byte-exact', () => {
  const row = shelterSkipRidersRow(shelterSkipRiders(shelterSkipBook(FROZEN).bots))
  assert.equal(row, "the shelter skip's own riders (v0.947.0): no solo refuser owns the majority - F4 x6 + F16 x5 own 11 of 15 shelter skip refusals (73.3%) - THE SKIPPERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the nights the solo law refused to name")
})

test('the branch law: the owner case leaves the riders unprinted (fenced in the lib)', () => {
  const bots = shelterSkipBook([
    'F5 [F5] combat: shelter skip (no seal material, nothing expendable to drop)',
    'F5 [F5] combat: shelter skip (no seal material, nothing expendable to drop)',
    'F5 [F5] combat: shelter skip (no seal material, threat@3.0 too close to earn)',
    'F5 [F5] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=zombie@3)',
    'F1 [F1] combat: shelter skip (open field: ring incomplete 1/8)',
  ]).bots
  const cast = shelterSkipCast(bots)
  assert.equal(cast.bot, 'F5')
  assert.equal(shelterSkipRiders(bots), null)
  assert.equal(shelterSkipRidersRow({ leader: 'F5', leaderOwns: 4, runner: 'F1', runnerOwns: 1, ofLines: 5, pairOwns: 6, share: 1.2 }), null)
})

test('the riders: junk never invents a shape', () => {
  assert.equal(shelterSkipRiders(null), null)
  assert.equal(shelterSkipRiders({}), null)
  assert.equal(shelterSkipRiders({ F5: { total: 2 } }), null) // a solo book: no crowd
  assert.equal(shelterSkipRidersRow(null), null)
  assert.equal(shelterSkipRidersRow({}), null)
  assert.equal(shelterSkipRidersRow({ leader: 'F5', leaderOwns: 1, runner: 'F1', runnerOwns: 1, ofLines: 0, pairOwns: 2, share: 2 }), null)
})

test('the junk fences: the family verbs and the prose read nothing', () => {
  const t = shelterSkipBook([
    'F9 [F9] combat: shelter wall miss (open field: no diggable wall, ring next, drowned@5.9)',
    'F9 [F9] combat: shelter try (open field, threat=zombie@4)',
    'F9 [F9] combat: sheltering from zombie@2',
    'F9 [F9] combat: shelter ring try 1/8',
    'verdict flips: 1 - shelter: tries 5 / skips 15 / ring-tries 1 / wall-miss 3',
    'shelter skip lane (v0.947.0: the refuser voice)',
    'the shield ladder priced the attempts, the cast names its refuser',
    '--- SHIELD LADDER (v0.489.0: the shelter attempt\'s own book) ---',
    42, null, undefined, ['F1 [F1] combat: shelter skip (night=true)'],
  ]).totals
  assert.equal(t.total, 0)
})

test('the honest silence: a skip-free face stays silent', () => {
  const book = shelterSkipBook([])
  assert.equal(book.totals.total, 0)
  assert.equal(shelterSkipCast(book.bots), null)
  assert.equal(shelterSkipRiders(book.bots), null)
  assert.equal(shelterSkipBook('not an array'), null)
  assert.equal(shelterSkipBook(null), null)
})

test('the census-guard purity: read-time only, the input is never touched', () => {
  const lines = [
    'F1 [F1] combat: shelter skip (night=true armed=true hp=20 attackers=1 poison=off threat=zombie@3)',
    'F2 [F2] combat: shelter skip (open field: ring incomplete 1/8)',
  ]
  const snapshot = JSON.stringify(lines)
  const book = shelterSkipBook(lines)
  assert.equal(JSON.stringify(lines), snapshot)
  assert.equal(book.bots.F1.total, 1)
  const again = shelterSkipBook(lines)
  assert.deepEqual(again, book)
})

test('the face-209 END-TO-END: the frozen field speaks the crowd', () => {
  const book = shelterSkipBook(FROZEN)
  const cast = shelterSkipCast(book.bots)
  assert.equal(cast, null)
  const riders = shelterSkipRiders(book.bots)
  assert.equal(shelterSkipRidersRow(riders), "the shelter skip's own riders (v0.947.0): no solo refuser owns the majority - F4 x6 + F16 x5 own 11 of 15 shelter skip refusals (73.3%) - THE SKIPPERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the nights the solo law refused to name")
})
