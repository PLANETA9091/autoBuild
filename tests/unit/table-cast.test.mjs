// (v0.949.0) THE TABLE GATE'S OWN CAST - the v0.495.0 table gate book's
// bot-level seat (the count-seat precedent: each table gate line is one
// vote). The seat reads the book's OWN bots cells (tableGate's bots map,
// the cells the class totals already read), zero re-parsing - the line
// buckets sum to the bot's own vote, the measures (rungPlanks,
// stickHolds, timeoutMs) never vote, and the otherAttempts sub-slice
// never votes again (the same attempt line already voted once through
// attempts - the double-count trap pinned). Strict-majority law (a tie
// owns nothing), byte-law riders (count desc, bot byte asc), the branch
// law fenced in the lib, the junk fences, the honest silences.
// THE NAME'S OWN DEDUP: the v0.495.0 book owns the gate's anatomy - the
// cast is the book's own BOT axis, both untouched.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { tableGate } from '../../src/lib/tablegate.mjs'
import {
  tableBotLines, tableCast, tableCastRow, tableRiders, tableRidersRow,
} from '../../src/lib/tablecast.mjs'

// the frozen field lines (face 42's own gate lane, byte for byte): the
// three droughts rescued by the plank rung, the clean gates, and F3's
// [upgrade] machinery (the timeout tax, the all-variants verdict)
const FROZEN = [
  'F16 [toolupgrade] craft crafting_table: no craftable recipe variant (ingredients missing?)',
  'F16 [toolupgrade] plank rung: converted 1->5 same-type planks (need 4, from oak_log)',
  'F16 [toolupgrade] spare table: crafted',
  'F9 [toolupgrade] craft crafting_table: no craftable recipe variant (ingredients missing?)',
  'F9 [toolupgrade] plank rung: converted 1->5 same-type planks (need 4, from oak_log)',
  'F9 [toolupgrade] spare table: crafted',
  'F17 [toolupgrade] spare table: crafted',
  'F15 [toolupgrade] craft crafting_table: no craftable recipe variant (ingredients missing?)',
  'F15 [toolupgrade] plank rung: converted 1->4 same-type planks (need 4, from oak_log)',
  'F15 [toolupgrade] spare table: crafted',
  'F3 [toolupgrade] [upgrade] craft crafting_table: variant#2 attempt0 failed: craft crafting_table: timeout after 7000ms',
  'F3 [toolupgrade] [upgrade] craft crafting_table: variant#2 attempt1 failed: craft crafting_table: timeout after 7000ms',
  'F3 [toolupgrade] [upgrade] craft crafting_table: all 1 variant(s) failed, last: craft crafting_table: timeout after 7000ms',
  'F13 [toolupgrade] spare table: crafted',
  'F19 [toolupgrade] spare table: crafted'
]

test('the count law: the line buckets sum, the measures and the sub-slice never vote', () => {
  // F3's own face-42 cell shape: the attempts vote once - the
  // otherAttempts slice is the no-timeout sub-class of the SAME lines.
  assert.equal(tableBotLines({
    ok: 0, failed: 0, droughts: 0, rungs: 0, sticks: 0,
    attempts: 2, timeoutMs: 14000, otherAttempts: 0, allFails: 1,
  }), 3)
  // The measures price lines, they are not lines.
  assert.equal(tableBotLines({
    ok: 2, rungPlanks: 7, stickHolds: 5, timeoutMs: 9000,
  }), 2)
  // The junk buckets read the honest zero.
  assert.equal(tableBotLines(null), 0)
  assert.equal(tableBotLines('junk'), 0)
  assert.equal(tableBotLines([1]), 0)
  assert.equal(tableBotLines({ ok: -3, rungs: 1.5, attempts: Number.NaN }), 0)
})

test('END-TO-END: tableGate(frozen) feeds the cast - the face-42 crowd reads the silence', () => {
  const book = tableGate(FROZEN)
  assert.equal(book.totals.ok, 6)
  assert.equal(book.totals.droughts, 3)
  assert.equal(book.totals.attempts, 2)
  assert.equal(book.totals.timeoutMs, 14000)
  assert.equal(book.totals.total, 15)
  // The four-way tie at 3 (F15/F16/F3/F9) - the strict-majority law
  // reads the honest silence.
  assert.equal(tableCast(book.bots), null)
})

test('the seat\u0027s owner case: the majority pocket owns the cast', () => {
  assert.deepEqual(
    tableCast({
      F4: { ok: 3 },
      F7: { ok: 1 },
      F2: { ok: 1 },
    }),
    { bot: 'F4', owns: 3, ofLines: 5, share: 0.6 })
})

test('the tie law: an exact tie owns nothing', () => {
  assert.equal(tableCast({ F4: { ok: 2 }, F7: { ok: 2 } }), null)
})

test('the under-half law\u0027s honest null: a minority top reads the silence', () => {
  assert.equal(tableCast({
    F4: { ok: 3 }, F7: { ok: 2 }, F2: { ok: 2 },
  }), null)
})

test('the junk fences: the missing book, the array, the junk cells, the zero-sum bot', () => {
  assert.equal(tableCast(null), null)
  assert.equal(tableCast([]), null)
  assert.equal(tableCast('junk'), null)
  assert.equal(tableCast({ F4: null, F7: 'junk' }), null)
  assert.equal(tableCast({ F4: { ok: -3 } }), null)
  assert.equal(tableCast({ F4: { timeoutMs: 45 } }), null)
})

test('the cast row byte-exact + the plural law', () => {
  assert.equal(
    tableCastRow({ bot: 'F4', owns: 6, ofLines: 10, share: 0.6 }),
    "the table gate's own cast (v0.949.0): F4 owns 6 of 10 table gate lines (60.0%) - THE TOOL CHAIN'S OWN CARPENTER: one bot's own pocket keeps the tool chain's zero-point - the v0.495.0 book priced the anatomy, the cast names its carpenter")
})

test('the singular law: one line reads the singular', () => {
  assert.equal(
    tableCastRow({ bot: 'F2', owns: 1, ofLines: 1, share: 1 }),
    "the table gate's own cast (v0.949.0): F2 owns 1 of 1 table gate line (100.0%) - THE TOOL CHAIN'S OWN CARPENTER: one bot's own pocket keeps the tool chain's zero-point - the v0.495.0 book priced the anatomy, the cast names its carpenter")
})

test('the cast row\u0027s own guards: the junk shapes read null', () => {
  assert.equal(tableCastRow(null), null)
  assert.equal(tableCastRow({ bot: 'F4', owns: 0, ofLines: 10, share: 0 }), null)
  assert.equal(tableCastRow({ bot: 'F4', owns: 11, ofLines: 10, share: 1.1 }), null)
  assert.equal(tableCastRow({ bot: 'F4', owns: 6, ofLines: 10, share: Number.NaN }), null)
  assert.equal(tableCastRow({ bot: '', owns: 1, ofLines: 1, share: 1 }), null)
})

test('the byte law + the duet: counts equal, the name sorts first', () => {
  const r = tableRiders({ F4: { ok: 2 }, F12: { ok: 2 } })
  assert.deepEqual(r, {
    leader: 'F12', leaderOwns: 2, runner: 'F4', runnerOwns: 2,
    ofLines: 4, pairOwns: 4, share: 1,
  })
  assert.equal(
    tableRidersRow(r),
    "the table gate's own riders (v0.949.0): no solo carpenter owns the majority - F12 x2 + F4 x2 own 4 of 4 table gate lines (100.0%) - THE CARPENTERS' OWN CROWD: the cast's tie law held, the gate's crowd is still real - the pair prices the gates the solo law refused to name")
})

test('the branch law fenced in the lib: the cast\u0027s owner leaves the riders silent', () => {
  assert.equal(tableRiders({
    F4: { ok: 6 }, F7: { ok: 1 }, F2: { ok: 1 },
  }), null)
})

test('the riders\u0027 own fences: the solo pocket, the junk, the missing book', () => {
  assert.equal(tableRiders({ F4: { ok: 2 } }), null)
  assert.equal(tableRiders(null), null)
  assert.equal(tableRiders('junk'), null)
  assert.equal(tableRidersRow(null), null)
  assert.equal(tableRidersRow({ leader: 'F4', leaderOwns: 0 }), null)
})

test('the census-guard purity: read-time only, the input is never touched', () => {
  const snapshot = JSON.stringify(FROZEN)
  const book = tableGate(FROZEN)
  const cast = tableCast(book.bots)
  const riders = tableRiders(book.bots)
  assert.equal(JSON.stringify(FROZEN), snapshot)
  assert.equal(cast, null)
  assert.equal(riders != null, true)
  const again = tableRiders(tableGate(FROZEN).bots)
  assert.deepEqual(again, riders)
})

test('the face-42 END-TO-END: the frozen field speaks the crowd', () => {
  const book = tableGate(FROZEN)
  const cast = tableCast(book.bots)
  assert.equal(cast, null)
  const riders = tableRiders(book.bots)
  assert.deepEqual(riders, {
    leader: 'F15', leaderOwns: 3, runner: 'F16', runnerOwns: 3,
    ofLines: 15, pairOwns: 6, share: 0.4,
  })
  assert.equal(
    tableRidersRow(riders),
    "the table gate's own riders (v0.949.0): no solo carpenter owns the majority - F15 x3 + F16 x3 own 6 of 15 table gate lines (40.0%) - THE CARPENTERS' OWN CROWD: the cast's tie law held, the gate's crowd is still real - the pair prices the gates the solo law refused to name")
})

test("the wiring: the decompose's branch prints the cast or the riders - never both", () => {
  const src = readWiring()
  assert.equal(src.includes('tableCast('), true)
  assert.equal(src.includes('tableRiders('), true)
  // the branch law's own shape: the riders ride the cast's else
  assert.equal(/const tcSeat = tableCast\(tg\.bots\)/.test(src), true)
  assert.equal(/if \(tcSeat\) console\.log\(`\s*\$\{tableCastRow\(tcSeat\)\}`\)/.test(src), true)
  assert.equal(/else \{\s*const tcRiders = tableRiders\(tg\.bots\)/.test(src), true)
})

function readWiring () {
  // eslint-disable-next-line no-undef
  return readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
}
