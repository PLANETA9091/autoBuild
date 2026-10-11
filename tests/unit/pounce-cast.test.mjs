// (v0.940.0) THE POUNCE'S OWN CAST - the pounce book's bot-level seat
// (the count-seat precedent: each pounce event is one vote). The seat reads
// the book's OWN bots cells (pounceBook's totals, the cells the
// 'bots heaviest-first' row already reads), zero re-parsing. Strict-majority
// law (a tie owns nothing), byte-law riders (count desc, bot byte asc), the
// branch law fenced in the lib, the junk fences, the honest silences.
// THE NAME'S OWN DEDUP: the v0.498.0 book owns the anatomy, the v0.499.0
// assist ledger owns the handoff's aftermath - the cast is the book's own
// BOT axis, both untouched.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { pounceBook } from '../../src/lib/pouncebook.mjs'
import { pounceCast, pounceCastRow, pounceRiders, pounceRidersRow } from '../../src/lib/pouncecast.mjs'

// the frozen field lines (face 206's own skins, byte for byte)
const FROZEN = [
  'F19 [F19] climb pounce probe: the signature declined (support=dirt, step=grass_block, head=air) - the well census continues',
  'F19 [F19] climb pounce probe: the signature declined (support=dirt, step=grass_block, head=air) - the well census continues',
  'F19 [F19] climb pounce probe: the signature declined (support=dirt, step=dirt, head=air) - the well census continues',
  'F19 [F19] climb pounce probe: the signature declined (support=stone, step=stone, head=air) - the well census continues',
  'F7 [F7] climb pounce probe: the signature declined (support=dirt, step=grass_block, head=air) - the well census continues',
  'F7 [F7] climb pounce probe: the signature declined (support=dirt, step=dirt, head=air) - the well census continues',
  'F7 [F7] climb pounce probe: the guard declined (wet feet) - the ladder owns the level',
  'F9 [F9] climb pounce: did not rise (back 4t + jump 24t toward 0,-1) - the assist ladder owns it'
]

test('the count law: the top prober owns the cast under the strict majority', () => {
  assert.deepEqual(pounceCast({ F19: { total: 5 }, F7: { total: 2 }, F6: { total: 1 } }),
    { bot: 'F19', owns: 5, ofProbes: 8, share: 0.625 })
})

test('the under-half law\'s honest null: a minority prober reads the silence', () => {
  assert.equal(pounceCast({ F19: { total: 3 }, F7: { total: 2 }, F6: { total: 2 }, F1: { total: 1 } }), null)
})

test('the boundary law: an exact tie owns nothing', () => {
  assert.equal(pounceCast({ F19: { total: 4 }, F7: { total: 4 } }), null)
})

test('the book law: pounceBook(frozen) feeds the cast END-TO-END, the cells are the book\'s own totals', () => {
  const pb = pounceBook(FROZEN)
  assert.ok(pb && pb.totals.total === 8)
  const r = pounceRiders(pb.bots) // the exact 4/8 tie owns nothing, the crowd measure speaks
  assert.deepEqual(r, { leader: 'F19', leaderOwns: 4, runner: 'F7', runnerOwns: 3, ofProbes: 8, pairOwns: 7, share: 0.875 })
  assert.equal(pounceCast(pb.bots), null) // the tie law holds on the book's own cells
})

test('the face 206 shape: the 12-bot crowd reads the riders, never a solo', () => {
  const cells = { F19: { total: 4 }, F7: { total: 3 }, F6: { total: 3 }, F2: { total: 3 }, F18: { total: 3 }, F9: { total: 2 }, F8: { total: 2 }, F5: { total: 2 }, F3: { total: 2 }, F13: { total: 2 }, F1: { total: 2 }, F17: { total: 1 } }
  assert.equal(pounceCast(cells), null)
  assert.deepEqual(pounceRiders(cells), { leader: 'F19', leaderOwns: 4, runner: 'F18', runnerOwns: 3, ofProbes: 29, pairOwns: 7, share: 0.241 })
})

test('the seat row byte-exact (the plural law)', () => {
  const row = pounceCastRow(pounceCast({ F19: { total: 5 }, F7: { total: 2 }, F6: { total: 1 } }))
  assert.equal(row, "the pounce's own cast (v0.940.0): F19 owns 5 of 8 probes (62.5%) - THE WELL'S OWN PROBER: one bot's own pounce events keep the decline book's own voice - the v0.498.0 book priced the anatomy, the cast names its prober")
})

test('the singular law: one probe names one probe', () => {
  const row = pounceCastRow(pounceCast({ F9: { total: 1 } }))
  assert.equal(row, "the pounce's own cast (v0.940.0): F9 owns 1 of 1 probe (100.0%) - THE WELL'S OWN PROBER: one bot's own pounce events keep the decline book's own voice - the v0.498.0 book priced the anatomy, the cast names its prober")
})

test("the riders' byte law: count desc, then the name's own byte asc", () => {
  const r = pounceRiders({ F6: { total: 3 }, F16: { total: 3 }, F9: { total: 2 } })
  assert.deepEqual(r, { leader: 'F16', leaderOwns: 3, runner: 'F6', runnerOwns: 3, ofProbes: 8, pairOwns: 6, share: 0.75 })
})

test('the riders row byte-exact', () => {
  const row = pounceRidersRow(pounceRiders({ F6: { total: 3 }, F16: { total: 3 }, F9: { total: 2 } }))
  assert.equal(row, "the pounce's own riders (v0.940.0): no solo prober owns the majority - F16 x3 + F6 x3 own 6 of 8 probes (75.0%) - THE PROBERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the pounces the solo law refused to name")
})

test('the branch law fenced in the lib: a majority prober leaves the riders silent', () => {
  assert.equal(pounceRiders({ F19: { total: 5 }, F7: { total: 2 }, F6: { total: 1 } }), null)
  assert.equal(pounceRiders({ F9: { total: 1 } }), null)
})

test('the junk battery: junk books never seat, the real cells still tally', () => {
  for (const junk of [null, undefined, 'junk', 7, [], {}, { F5: 'junk' }, { F5: null }, { F5: {} }, { F5: { total: 0 } }, { F5: { total: -2 } }, { F5: { total: 1.5 } }, { F5: { total: Number.NaN } }, { '': { total: 3 } }]) {
    assert.equal(pounceCast(junk), null)
    assert.equal(pounceRiders(junk), null)
  }
  assert.deepEqual(pounceCast({ F9: { total: 2 }, F2: { total: 1 } }), { bot: 'F9', owns: 2, ofProbes: 3, share: 0.667 })
})

test('the pounce-free face: the honest silences carry through', () => {
  const pb = pounceBook(['F1 [F1] direct deposit: 27 chest slots derived from the 63-slot view'])
  assert.ok(pb && Object.keys(pb.bots).length === 0)
  assert.equal(pounceCast(pb.bots), null)
  assert.equal(pounceRiders(pb.bots), null)
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(pounceCastRow(null), null)
  assert.equal(pounceCastRow(undefined), null)
  assert.equal(pounceCastRow('junk'), null)
  assert.equal(pounceCastRow({}), null)
  assert.equal(pounceCastRow({ bot: 'F5', owns: 0, ofProbes: 5, share: 0 }), null)
  assert.equal(pounceCastRow({ bot: 'F5', owns: 8, ofProbes: 5, share: 1.6 }), null)
  assert.equal(pounceRidersRow(null), null)
  assert.equal(pounceRidersRow('junk'), null)
  assert.equal(pounceRidersRow({}), null)
  assert.equal(pounceRidersRow({ leader: 'a', leaderOwns: 0, runner: 'b', runnerOwns: 2, ofProbes: 5, pairOwns: 2, share: 0.4 }), null)
  assert.equal(pounceRidersRow({ leader: 'a', leaderOwns: 3, runner: 'b', runnerOwns: 2, ofProbes: 2, pairOwns: 5, share: 2.5 }), null)
})

test('THE CENSUS GUARD: the pounce cast rides the decompose block beside the v0.498.0 raw row (WIRING)', async () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("pounceCast, pounceCastRow, pounceRiders, pounceRidersRow } from '../../src/lib/pouncecast.mjs'")) // the import rides its own line
  const book = src.indexOf('--- POUNCE BOOK (v0.498.0')
  const cast = src.indexOf('pounceCast(pb.bots)')
  assert.ok(book > 0 && cast > book) // the cast rides beside the book's own row, never before it
  assert.ok(!src.includes("THE WELL'S OWN PROBER"), 'the prose lives only in the lib')
})
