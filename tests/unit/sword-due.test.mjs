// (v0.945.0) THE SWORD DUE'S OWN BOOK + CAST - the sword replace lane's
// own field book and bot-level seat (the count-seat precedent: each
// sword lane line is one vote, THE LANE'S OWN POOL - the v0.942.0
// bare/ARMED pool, the v0.943.0 both-skins pool). The book reads the
// emitter's exact byte shapes (the due ask's three tier skins, the craft
// verdict's four voices, the table rung's side voice, the bare exits),
// zero re-parsing. Strict-majority law (a tie owns nothing), byte-law
// riders (count desc, bot byte asc), the branch law fenced in the lib,
// the junk fences, the honest silences.
// THE NAME'S OWN DEDUP: the v0.494.0 armory census owns the weapon
// supply's armed/failed verdicts - the sword lane's own BOOK and BOT
// axis is this lane, both untouched.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import {
  swordDueBook, swordCast, swordCastRow, swordRiders, swordRidersRow,
} from '../../src/lib/sworddue.mjs'

// the frozen field lines (face 208's own skins, byte for byte) - the
// whole voice: the due ask, the double OK speak, the rung's side voice
const FROZEN = [
  'F9 sword due: planks available',
  'F9 sword: OK (wooden_sword)',
  'F9 sword: OK (wooden_sword, holds 1)',
  'F5 sword due: planks available',
  'F5 sword: OK (wooden_sword)',
  'F5 sword: OK (wooden_sword, holds 1)',
  'F1 sword due: planks available',
  'F1 sword: table crafted from planks (7 planks of one type)',
  'F1 sword: planks converted for the table rung (converted)',
  'F1 sword: OK (wooden_sword)',
  'F1 sword: OK (wooden_sword, holds 1)',
  'F2 sword due: planks available',
  'F2 sword: OK (wooden_sword)',
  'F2 sword: OK (wooden_sword, holds 1)',
]

test('the bill law: the book classifies every skin the emitter speaks', () => {
  const book = swordDueBook([
    ...FROZEN,
    'F3 sword due: iron available',
    'F3 sword: OK (iron_sword, holds 1)',
    'F4 sword due: cobble available',
    'F4 sword: failed (no table)',
    'F6 sword: skip (holds 1 sword(s))',
    'F7 sword: craft did not land (wooden_sword, holds 0)',
    'F8 sword: stick craft did not land',
    'F8 sword: no table reachable or placeable',
  ])
  const t = book.totals
  assert.equal(t.due, 6)
  assert.equal(t.iron, 1)
  assert.equal(t.cobble, 1)
  assert.equal(t.planks, 4)
  assert.equal(t.ok, 9)
  assert.equal(t.failed, 1)
  assert.equal(t.skip, 1)
  assert.equal(t.didNotLand, 1)
  assert.equal(t.tableCrafted, 1)
  assert.equal(t.converted, 1)
  assert.equal(t.stickMiss, 1)
  assert.equal(t.noTable, 1)
  assert.equal(t.total, 22)
  assert.equal(book.bots.F9.total, 3)
  assert.equal(book.bots.F1.total, 5)
})

test('the count law: the top armorer owns the cast under the strict majority', () => {
  assert.deepEqual(
    swordCast({ F5: { total: 6 }, F7: { total: 2 }, F2: { total: 2 } }),
    { bot: 'F5', owns: 6, ofLines: 10, share: 0.6 })
})

test("the under-half law's honest null: a minority armorer reads the silence", () => {
  assert.equal(swordCast({ F5: { total: 3 }, F7: { total: 2 }, F2: { total: 2 }, F1: { total: 1 } }), null)
})

test('the boundary law: an exact tie owns nothing', () => {
  assert.equal(swordCast({ F5: { total: 4 }, F7: { total: 4 } }), null)
})

test('the junk fences: the missing book, the array, the junk cells, the zero bot', () => {
  assert.equal(swordCast(null), null)
  assert.equal(swordCast([]), null)
  assert.equal(swordCast('junk'), null)
  assert.equal(swordCast({ F5: null, F7: 'junk' }), null)
  assert.equal(swordCast({ F5: { total: 0 } }), null)
  assert.equal(swordCast({ F5: { total: -3 } }), null)
  assert.equal(swordDueBook('junk'), null)
  assert.equal(swordDueBook(null), null)
})

test('the cast row byte-exact + the plural law', () => {
  assert.equal(
    swordCastRow({ bot: 'F5', owns: 6, ofLines: 10, share: 0.6 }),
    "the sword due's own cast (v0.945.0): F5 owns 6 of 10 sword lane lines (60.0%) - THE FORGE'S OWN ARMORER: one bot's own lane keeps the sword supply's own voice - the v0.67.0 emitter priced the ask, the cast names its armorer")
})

test('the singular law: one line reads the singular', () => {
  assert.equal(
    swordCastRow({ bot: 'F2', owns: 1, ofLines: 1, share: 1 }),
    "the sword due's own cast (v0.945.0): F2 owns 1 of 1 sword lane line (100.0%) - THE FORGE'S OWN ARMORER: one bot's own lane keeps the sword supply's own voice - the v0.67.0 emitter priced the ask, the cast names its armorer")
})

test('the byte law + the duet: counts equal, the name sorts first', () => {
  const r = swordRiders({ F18: { total: 5 }, F1: { total: 5 } })
  assert.deepEqual(r, {
    leader: 'F1', leaderOwns: 5, runner: 'F18', runnerOwns: 5,
    ofLines: 10, pairOwns: 10, share: 1,
  })
})

test('END-TO-END: swordDueBook(face-208 pool) feeds the cast - the crowd reads the silence', () => {
  // the face-208 pool's own shape: the three heavy builders ride the rung's
  // side voice, the other twelve bots speak the plain triple
  const heavy = bot => [
    `${bot} sword due: planks available`,
    `${bot} sword: table crafted from planks (7 planks of one type)`,
    `${bot} sword: planks converted for the table rung (converted)`,
    `${bot} sword: OK (wooden_sword)`,
    `${bot} sword: OK (wooden_sword, holds 1)`,
  ]
  const mid = bot => [
    `${bot} sword due: planks available`,
    `${bot} sword: table crafted from planks (7 planks of one type)`,
    `${bot} sword: OK (wooden_sword)`,
    `${bot} sword: OK (wooden_sword, holds 1)`,
  ]
  const plain = bot => [
    `${bot} sword due: planks available`,
    `${bot} sword: OK (wooden_sword)`,
    `${bot} sword: OK (wooden_sword, holds 1)`,
  ]
  const lines = [
    ...['F1', 'F11', 'F18'].flatMap(heavy),
    ...['F3', 'F4', 'F12'].flatMap(mid),
    ...['F2', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F13', 'F15', 'F16', 'F17', 'F19'].flatMap(plain),
  ]
  const book = swordDueBook(lines)
  assert.equal(book.totals.total, 63)
  assert.equal(book.bots.F1.total, 5)
  assert.equal(swordCast(book.bots), null)
  const r = swordRiders(book.bots)
  assert.deepEqual(r, {
    leader: 'F1', leaderOwns: 5, runner: 'F11', runnerOwns: 5,
    ofLines: 63, pairOwns: 10, share: 0.159,
  })
  assert.equal(
    swordRidersRow(r),
    "the sword due's own riders (v0.945.0): no solo armorer owns the majority - F1 x5 + F11 x5 own 10 of 63 sword lane lines (15.9%) - THE ARMORERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the lane the solo law refused to name")
})

test('the riders row byte-exact', () => {
  assert.equal(
    swordRidersRow({ leader: 'F5', leaderOwns: 4, runner: 'F9', runnerOwns: 2, ofLines: 18, pairOwns: 6, share: 0.333 }),
    "the sword due's own riders (v0.945.0): no solo armorer owns the majority - F5 x4 + F9 x2 own 6 of 18 sword lane lines (33.3%) - THE ARMORERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the lane the solo law refused to name")
})

test('the branch law fenced in the lib: the cast owner leaves the riders silent', () => {
  const bots = { F5: { total: 6 }, F7: { total: 2 }, F2: { total: 2 } }
  assert.ok(swordCast(bots))
  assert.equal(swordRiders(bots), null)
})

test("the rows' junk battery: junk never prints", () => {
  assert.equal(swordCastRow(null), null)
  assert.equal(swordCastRow('junk'), null)
  assert.equal(swordCastRow({ bot: 'F5', owns: 0, ofLines: 10, share: 0 }), null)
  assert.equal(swordCastRow({ bot: 'F5', owns: 11, ofLines: 10, share: 1.1 }), null)
  assert.equal(swordCastRow({ bot: 'F5', owns: 6, ofLines: 10, share: NaN }), null)
  assert.equal(swordRidersRow(null), null)
  assert.equal(swordRidersRow('junk'), null)
  assert.equal(swordRidersRow({ leader: 'F5', leaderOwns: 4, runner: 'F9', runnerOwns: 2, ofLines: 18, pairOwns: 99, share: 0.333 }), null)
  assert.equal(swordRidersRow({ leader: 'F5', leaderOwns: 0, runner: 'F9', runnerOwns: 2, ofLines: 18, pairOwns: 2, share: 0.111 }), null)
})

test("the sword-free face's carry-through: no sword lane lines, the honest silence", () => {
  const book = swordDueBook(['F4 camp furnace: no build (machine near)', 'F9 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare'])
  assert.equal(book.totals.total, 0)
  assert.deepEqual(book.bots, {})
  assert.equal(swordCast(book.bots), null)
  assert.equal(swordRiders(book.bots), null)
})

test('THE CENSUS GUARD WIRING: the decompose rides the lib beside the book - never before it', () => {
  const dec = readFileSync('scripts/fleet-mining/decompose.mjs', 'utf8')
  assert.ok(dec.includes("from '../../src/lib/sworddue.mjs'"), 'the sworddue import rides the decompose')
  assert.ok(dec.includes('swordCast(swd.bots)'), 'the cast reads the book bots map')
  assert.ok(dec.includes('swordRiders(swd.bots)'), 'the riders read the same map')
  const bookIdx = dec.indexOf('SWORD DUE BOOK')
  const castIdx = dec.indexOf('swordCast(swd.bots)')
  assert.ok(bookIdx >= 0 && castIdx > bookIdx, 'the cast prints beside the book - after its own raw rows (the order law)')
})
