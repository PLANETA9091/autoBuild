// (v0.942.0) THE SEAL-AND-CROSS FRONTIER'S OWN CAST - the water-lock
// census's bot-level seat (the count-seat precedent: each census line is
// one vote). The book reads the emitter's exact byte shape (fleet19.mjs's
// water-lock census line, one parser per emitter, zero re-parsing of any
// other lens's read). Strict-majority law (a tie owns nothing), byte-law
// riders (count desc, bot byte asc), the branch law fenced in the lib,
// the junk fences, the honest silences. THE NAME'S OWN DEDUP: the
// v0.242.0 preflight owns the emitter, the v0.244.0 arm census owns the
// stance verdicts - the lines' own BOOK and BOT axis is THIS census.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { waterLockBook, WATER_LOCK_RE, waterLockCast, waterLockCastRow, waterLockRiders, waterLockRidersRow } from '../../src/lib/waterlockbook.mjs'

// the frozen field lines (face 206's own skins, byte for byte)
const FROZEN = [
  'F1 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare',
  'F9 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare',
  'F9 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare',
  'F9 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare',
  'F19 tunnel: water-lock census: water at step 1, 1 sealable in pocket (top dirt) - the seal-and-cross frontier is ARMED',
  'F19 tunnel: water-lock census: water at step 1, 1 sealable in pocket (top dirt) - the seal-and-cross frontier is ARMED',
  'F17 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare',
  'F17 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare',
  'F16 tunnel: water-lock census: water at step 1, 75 sealable in pocket (top cobblestone) - the seal-and-cross frontier is ARMED'
]

test('the bill law: the emitter\'s exact byte shape folds into the book', () => {
  const book = waterLockBook(FROZEN)
  assert.equal(book.totals.total, 9)
  assert.equal(book.totals.bare, 6)
  assert.equal(book.totals.armed, 3)
  assert.equal(book.totals.blocks, 77) // 1+1+75
  assert.deepEqual(book.bots.F9, { total: 3, bare: 3, armed: 0, blocks: 0 })
  assert.deepEqual(book.bots.F16, { total: 1, bare: 0, armed: 1, blocks: 75 })
})

test('the count law: the top keeper owns the cast under the strict majority', () => {
  const book = waterLockBook(['F9 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare',
    'F9 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare',
    'F9 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare',
    'F9 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare',
    'F1 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare',
    'F1 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare',
    'F1 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare'])
  assert.deepEqual(waterLockCast(book.bots), { bot: 'F9', owns: 4, ofLines: 7, share: 0.571 })
})

test("the under-half law's honest null: a minority keeper reads the silence", () => {
  assert.equal(waterLockCast({ F9: { total: 3 }, F19: { total: 2 }, F17: { total: 2 }, F16: { total: 1 }, F1: { total: 1 } }), null)
})

test('the boundary law: an exact tie owns nothing', () => {
  assert.equal(waterLockCast({ F9: { total: 2 }, F17: { total: 2 } }), null)
})

test('the face 206 shape: the 5-bot crowd reads the riders, never a solo', () => {
  const book = waterLockBook(FROZEN)
  assert.equal(waterLockCast(book.bots), null) // F9 3/9 is under-half
  assert.deepEqual(waterLockRiders(book.bots), { leader: 'F9', leaderOwns: 3, runner: 'F17', runnerOwns: 2, ofLines: 9, pairOwns: 5, share: 0.556 })
})

test('the seat row byte-exact (the plural law)', () => {
  const row = waterLockCastRow(waterLockCast({ F9: { total: 4 }, F1: { total: 3 } }))
  assert.equal(row, "the seal-and-cross's own cast (v0.942.0): F9 owns 4 of 7 census lines (57.1%) - THE FRONTIER'S OWN KEEPER: one bot's own water-locks keep the seal census's own voice - the v0.244.0 arm priced the verdicts, the cast names its keeper")
})

test('the singular law: one line names one census line', () => {
  const row = waterLockCastRow(waterLockCast({ F9: { total: 1 } }))
  assert.equal(row, "the seal-and-cross's own cast (v0.942.0): F9 owns 1 of 1 census line (100.0%) - THE FRONTIER'S OWN KEEPER: one bot's own water-locks keep the seal census's own voice - the v0.244.0 arm priced the verdicts, the cast names its keeper")
})

test("the riders' byte law: count desc, then the name's own byte asc", () => {
  const r = waterLockRiders({ F19: { total: 2 }, F17: { total: 2 }, F9: { total: 1 } })
  assert.deepEqual(r, { leader: 'F17', leaderOwns: 2, runner: 'F19', runnerOwns: 2, ofLines: 5, pairOwns: 4, share: 0.8 })
})

test('the riders row byte-exact', () => {
  const row = waterLockRidersRow(waterLockRiders({ F19: { total: 2 }, F17: { total: 2 }, F9: { total: 1 } }))
  assert.equal(row, "the seal-and-cross's own riders (v0.942.0): no solo keeper owns the majority - F17 x2 + F19 x2 own 4 of 5 census lines (80.0%) - THE KEEPERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the locks the solo law refused to name")
})

test('the branch law fenced in the lib: a majority keeper leaves the riders silent', () => {
  assert.equal(waterLockRiders({ F9: { total: 4 }, F1: { total: 3 } }), null)
  assert.equal(waterLockRiders({ F9: { total: 1 } }), null)
})

test('the junk battery: junk lines and books never seat, the real cells still tally', () => {
  const junk = waterLockBook([null, undefined, 7, '', 'junk line', 'F9 water-lock census: no tunnel prefix', 'F9 tunnel: water-lock census: lava at step x, 0 sealable in pocket - the seal-and-cross frontier is bare', 'F9 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the wrong tail'])
  assert.equal(junk.totals.total, 0)
  assert.equal(waterLockCast(junk.bots), null)
  assert.equal(waterLockRiders(junk.bots), null)
  for (const book of [null, undefined, 'junk', 7, [], {}]) {
    assert.equal(waterLockCast(book), null)
    assert.equal(waterLockRiders(book), null)
  }
  for (const cell of [{ F5: 'junk' }, { F5: null }, { F5: {} }, { F5: { total: 0 } }, { F5: { total: -2 } }, { F5: { total: 1.5 } }, { '': { total: 3 } }]) {
    assert.equal(waterLockCast(cell), null)
    assert.equal(waterLockRiders(cell), null)
  }
  assert.ok(WATER_LOCK_RE.test('F9 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare'))
  assert.deepEqual(waterLockCast({ F9: { total: 2 }, F2: { total: 1 } }), { bot: 'F9', owns: 2, ofLines: 3, share: 0.667 })
})

test('the lock-free face: the honest silences carry through', () => {
  const book = waterLockBook(['F1 [F1] direct deposit: 27 chest slots derived from the 63-slot view'])
  assert.equal(book.totals.total, 0)
  assert.equal(waterLockCast(book.bots), null)
  assert.equal(waterLockRiders(book.bots), null)
  assert.equal(waterLockCast(null), null)
  assert.equal(waterLockRiders(null), null)
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(waterLockCastRow(null), null)
  assert.equal(waterLockCastRow(undefined), null)
  assert.equal(waterLockCastRow('junk'), null)
  assert.equal(waterLockCastRow({}), null)
  assert.equal(waterLockCastRow({ bot: 'F5', owns: 0, ofLines: 5, share: 0 }), null)
  assert.equal(waterLockCastRow({ bot: 'F5', owns: 8, ofLines: 5, share: 1.6 }), null)
  assert.equal(waterLockRidersRow(null), null)
  assert.equal(waterLockRidersRow('junk'), null)
  assert.equal(waterLockRidersRow({}), null)
  assert.equal(waterLockRidersRow({ leader: 'a', leaderOwns: 0, runner: 'b', runnerOwns: 2, ofLines: 5, pairOwns: 2, share: 0.4 }), null)
  assert.equal(waterLockRidersRow({ leader: 'a', leaderOwns: 3, runner: 'b', runnerOwns: 2, ofLines: 2, pairOwns: 5, share: 2.5 }), null)
})

test('THE CENSUS GUARD: the water-lock book rides the decompose beside its own raw row (WIRING)', async () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("waterLockBook, waterLockCast, waterLockCastRow, waterLockRiders, waterLockRidersRow } from '../../src/lib/waterlockbook.mjs'")) // the import rides its own line
  const book = src.indexOf('--- WATER-LOCK BOOK (v0.942.0')
  const cast = src.indexOf('waterLockCast(wlBook.bots)')
  assert.ok(book > 0 && cast > book) // the cast rides beside the book's own raw row, never before it
  assert.ok(!src.includes("THE FRONTIER'S OWN KEEPER"), 'the prose lives only in the lib')
})
