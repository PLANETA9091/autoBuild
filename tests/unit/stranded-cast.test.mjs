// (v0.934.0) THE STRAND'S OWN CAST - the stranded book's bot-level seat
// (the v0.777.0 write-off cast's own sibling). The census's own
// attribution.stranded cells: [{bot, deliveredU, pocketU}, ...] - the mass
// axis is the POCKET leg (the never-delivered units); the delivered leg is
// the walk's own score, read but never fenced (the bill law: the pocket
// byte is the atom). Strict-majority law, byte-law riders, the branch law
// fenced in the lib's caller, the junk fences, the honest silences.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { strandedCast, strandedCastRow, strandedRiders, strandedRidersRow } from '../../src/lib/bankcensus.mjs'

const cell = (bot, pocketU, deliveredU = 0) => ({ bot, pocketU, deliveredU })

test('the bill law: the top walk owns the strand under the strict majority', () => {
  const cast = strandedCast([cell('F5', 130), cell('F7', 60), cell('F11', 40)])
  assert.deepEqual(cast, { bot: 'F5', units: 130, total: 230, share: 0.565 })
})

test("the under-half law's honest null: a minority top reads the silence", () => {
  assert.equal(strandedCast([cell('F5', 100), cell('F7', 100), cell('F11', 60)]), null)
})

test('the boundary law: an exact tie owns nothing', () => {
  assert.equal(strandedCast([cell('F5', 110), cell('F7', 110)]), null)
})

test('the seat row byte-exact', () => {
  const row = strandedCastRow(strandedCast([cell('F5', 130), cell('F7', 60), cell('F11', 40)]))
  assert.equal(row, "the strand's own cast (v0.934.0): F5 owns 130 of 230u (56.5%) - THE WALK'S OWN SOLO DEFICIT: one bot's own walk never delivered its pocket - the write-off's own cast (v0.777.0) names the deadline's collection, the strand's cast names the walk that never came")
})

test("the riders' byte law: count desc, then the name's own byte asc", () => {
  const r = strandedRiders([cell('F6', 60), cell('F16', 60), cell('F11', 30)])
  assert.deepEqual(r, { leader: 'F16', leaderUnits: 60, runner: 'F6', runnerUnits: 60, total: 150, pairUnits: 120, share: 0.8 })
})

test('the riders row byte-exact', () => {
  const row = strandedRidersRow(strandedRiders([cell('F6', 60), cell('F16', 60), cell('F11', 30)]))
  assert.equal(row, "the strand's own riders (v0.934.0): no solo walk owns the majority - F16 x60u + F6 x60u own 120 of 150u (80.0%) - THE STRAND'S OWN DUO: the cast's tie law held, the concentration is still real - the pair prices the walks the solo law refused to name")
})

test('the riders fence: fewer than two holders reads the silence', () => {
  assert.equal(strandedRiders([cell('F5', 130)]), null)
  assert.equal(strandedRiders([]), null)
})

test("the delivered leg is not the atom: the pocket byte seats, the score never fences", () => {
  const cast = strandedCast([cell('F5', 10, 999), cell('F7', 30, 0)])
  assert.deepEqual(cast, { bot: 'F7', units: 30, total: 40, share: 0.75 })
})

test('the junk battery: junk cells never seat, the real cells still tally', () => {
  const book = [
    null,
    'junk',
    42,
    {},
    { bot: 'F3' },
    { bot: 'F3', pocketU: 0 },
    { bot: 'F3', pocketU: -5 },
    { bot: 'F3', pocketU: '20' },
    { bot: '', pocketU: 20 },
    { pocketU: 20 },
    cell('F9', 200),
    cell('F2', 30),
  ]
  const cast = strandedCast(book)
  assert.deepEqual(cast, { bot: 'F9', units: 200, total: 230, share: 0.87 })
  const r = strandedRiders(book)
  assert.equal(r.leader, 'F9')
  assert.equal(r.runner, 'F2')
})

test('the missing and empty book: the honest silences', () => {
  for (const junk of [null, undefined, 'junk', 7, {}, []]) {
    assert.equal(strandedCast(junk), null)
    assert.equal(strandedRiders(junk), null)
  }
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(strandedCastRow(null), null)
  assert.equal(strandedCastRow(undefined), null)
  assert.equal(strandedCastRow('junk'), null)
  assert.equal(strandedCastRow({}), null)
  assert.equal(strandedCastRow({ bot: 'F5', units: 0, total: 5, share: 0 }), null)
  assert.equal(strandedCastRow({ bot: 'F5', units: 8, total: 5, share: 1.6 }), null)
  assert.equal(strandedRidersRow(null), null)
  assert.equal(strandedRidersRow('junk'), null)
  assert.equal(strandedRidersRow({}), null)
  assert.equal(strandedRidersRow({ leader: 'a', leaderUnits: 0, runner: 'b', runnerUnits: 5, total: 5, pairUnits: 5, share: 1 }), null)
  assert.equal(strandedRidersRow({ leader: 'a', leaderUnits: 3, runner: 'b', runnerUnits: 5, total: 5, pairUnits: 8, share: 1.6 }), null)
})

test('THE CENSUS GUARD: the strand cast rides the decompose seat beside the raw line (WIRING)', async () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes('strandedCast, strandedCastRow, strandedRiders, strandedRidersRow')) // the import rides the census's own line
  const raw = src.indexOf('stranded pockets (the walk never delivered)')
  const cast = src.indexOf('strandedCast(bankCensus.attribution.stranded)')
  const wo = src.indexOf("THE WRITE-OFF'S OWN CAST - the book's bot-level seat beside the")
  assert.ok(raw > 0 && cast > raw) // the cast rides beside its raw line, never before it
  assert.ok(wo > cast) // the strand's cast sits between its line and the write-off's cast (the order law)
  assert.ok(!src.includes("THE WALK'S OWN SOLO DEFICIT: one bot's own walk"), 'the prose lives only in the lib')
})
