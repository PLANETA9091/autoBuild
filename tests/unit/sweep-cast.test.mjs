// (v0.938.0) THE SWEEP'S OWN CAST - the sweep census's bot-level seat
// (the count-seat precedent: each census line is one vote). The seat reads
// the census's OWN per-bot cells (the decompose's perBot(/ sweep: /) read),
// zero re-parsing. Strict-majority law (a tie owns nothing), byte-law
// riders (count desc, bot byte asc), the branch law fenced in the lib, the
// junk fences, the honest silences. THE NAME'S OWN DEDUP: v0.800.0's sweep
// book owns 'THE SWEEP'S OWN SEAT' (the close-class seat) - the cast is the
// census line's own BOT axis, the class seat untouched.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { sweepCast, sweepCastRow, sweepRiders, sweepRidersRow } from '../../src/lib/sweepcast.mjs'

test("the count law: the top sweeper owns the cast under the strict majority", () => {
  assert.deepEqual(sweepCast({ F13: 5, F18: 2, F8: 1 }), { bot: 'F13', owns: 5, ofLines: 8, share: 0.625 })
})

test("the under-half law's honest null: a minority watcher reads the silence", () => {
  assert.equal(sweepCast({ F13: 3, F18: 2, F8: 2, F1: 1 }), null)
})

test('the boundary law: an exact tie owns nothing', () => {
  assert.equal(sweepCast({ F13: 4, F18: 4 }), null)
})

test('the face 205 shape: a 15-bot crowd reads the riders, never a solo', () => {
  const cells = { F13: 30, F18: 26, F8: 24, F1: 20, F5: 18, F2: 12, F4: 12, F7: 11, F3: 7, F12: 7, F19: 3, F9: 1, F6: 1, F16: 1, F11: 1 }
  assert.equal(sweepCast(cells), null)
  assert.deepEqual(sweepRiders(cells), { leader: 'F13', leaderOwns: 30, runner: 'F18', runnerOwns: 26, ofLines: 174, pairOwns: 56, share: 0.322 })
})

test('the seat row byte-exact (the plural law)', () => {
  const row = sweepCastRow(sweepCast({ F13: 5, F18: 2, F8: 1 }))
  assert.equal(row, "the sweep's own cast (v0.938.0): F13 owns 5 of 8 census lines (62.5%) - THE HARVEST'S OWN WATCHER: one bot's own sweeps keep the census's own voice - the v0.228.0 census priced the classes, the cast names its watcher")
})

test('the singular law: one line names one census line', () => {
  const row = sweepCastRow(sweepCast({ F9: 1 }))
  assert.equal(row, "the sweep's own cast (v0.938.0): F9 owns 1 of 1 census line (100.0%) - THE HARVEST'S OWN WATCHER: one bot's own sweeps keep the census's own voice - the v0.228.0 census priced the classes, the cast names its watcher")
})

test("the riders' byte law: count desc, then the name's own byte asc", () => {
  const r = sweepRiders({ F6: 3, F16: 3, F9: 2 })
  assert.deepEqual(r, { leader: 'F16', leaderOwns: 3, runner: 'F6', runnerOwns: 3, ofLines: 8, pairOwns: 6, share: 0.75 })
})

test('the riders row byte-exact', () => {
  const row = sweepRidersRow(sweepRiders({ F6: 3, F16: 3, F9: 2 }))
  assert.equal(row, "the sweep's own riders (v0.938.0): no solo harvester owns the majority - F16 x3 + F6 x3 own 6 of 8 census lines (75.0%) - THE HARVESTERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the watches the solo law refused to name")
})

test('the branch law fenced in the lib: a majority watcher leaves the riders silent', () => {
  assert.equal(sweepRiders({ F13: 5, F18: 2, F8: 1 }), null)
  assert.equal(sweepRiders({ F9: 1 }), null)
})

test('the junk battery: junk cells never seat, the real cells still tally', () => {
  for (const junk of [null, undefined, 'junk', 7, [], {}, { F5: 'junk' }, { F5: 0 }, { F5: -2 }, { F5: 1.5 }, { F5: Number.NaN }, { '': 3 }]) {
    assert.equal(sweepCast(junk), null)
    assert.equal(sweepRiders(junk), null)
  }
  assert.deepEqual(sweepCast({ F9: 2, F2: 1 }), { bot: 'F9', owns: 2, ofLines: 3, share: 0.667 })
})

test('the sweep-free face: the honest silences carry through', () => {
  assert.equal(sweepCast({}), null)
  assert.equal(sweepRiders({}), null)
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(sweepCastRow(null), null)
  assert.equal(sweepCastRow(undefined), null)
  assert.equal(sweepCastRow('junk'), null)
  assert.equal(sweepCastRow({}), null)
  assert.equal(sweepCastRow({ bot: 'F5', owns: 0, ofLines: 5, share: 0 }), null)
  assert.equal(sweepCastRow({ bot: 'F5', owns: 8, ofLines: 5, share: 1.6 }), null)
  assert.equal(sweepRidersRow(null), null)
  assert.equal(sweepRidersRow('junk'), null)
  assert.equal(sweepRidersRow({}), null)
  assert.equal(sweepRidersRow({ leader: 'a', leaderOwns: 0, runner: 'b', runnerOwns: 2, ofLines: 5, pairOwns: 2, share: 0.4 }), null)
  assert.equal(sweepRidersRow({ leader: 'a', leaderOwns: 3, runner: 'b', runnerOwns: 2, ofLines: 2, pairOwns: 5, share: 2.5 }), null)
})

test('THE CENSUS GUARD: the sweep cast rides the decompose seat beside the v0.228.0 census row (WIRING)', async () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("sweepCast, sweepCastRow, sweepRiders, sweepRidersRow } from '../../src/lib/sweepcast.mjs'")) // the import rides its own line
  const census = src.indexOf("census lines:', count(/ sweep: /)")
  const cast = src.indexOf('sweepCast(swCells)')
  assert.ok(census > 0 && cast > census) // the cast rides beside the census row, never before it
  assert.ok(!src.includes("THE HARVEST'S OWN WATCHER"), 'the prose lives only in the lib')
})
