//
// vein-cast.test.mjs - THE VEIN BOOK'S OWN CAST (v0.952.0)
//
// The count-seat family's own sibling on the v0.501.0 vein book's own
// WHO axis. The count law: the book's own line buckets sum to the
// bot's own vote; the measures (the drops/dug/u/walks/delta counters,
// the ore units, the seal keeps, the walked u) never vote - they price
// lines, they are not lines. THE DOUBLE-COUNT TRAP: the sub-slices
// (the gallery's own floor-lock/ore-detour classes, the dig-down's own
// support/lip classes) are the SAME lines' own splits - they never
// vote again. The strict-majority law: a bot owns the cast only above
// half the book's own lines, a tie owns nothing. The riders: the
// cast's silence's own companion, a measure never a verdict-owner.
// The branch law fenced in the lib: the cast's owner case leaves the
// riders silent. Junk never invents a seat - the honest silence's own
// row law.
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { veinLedger } from '../../src/lib/veinledger.mjs'
import {
  VEIN_LINE_BUCKETS,
  veinBotLines,
  veinCast,
  veinCastRow,
  veinRiders,
  veinRidersRow
} from '../../src/lib/veincast.mjs'

// The emitter's own canonical forms (veinledger.mjs's documented
// shapes, byte-exact) - every bucket at least once, the measures and
// the sub-slices riding their lines.
const FROZEN = [
  'F19 [F19] vein sweep: 3 drop(s) in reach (5 dug)',
  'F19 [F19] vein sweep: +12u walked from the drops (9 dug)',
  'F19 [F19] vein sweep: 4 ores dug beside the gallery (floor lock)',
  'F19 [F19] vein sweep: 2 ores dug beside the gallery (ore detour)',
  'F19 [F19] vein sweep: lip dig refused - sealed floor (air 0, dy -0.9)',
  'F5 [F5] vein sweep: support dig refused - sealed under the ledge (air 0, dist 3.1, seal 2)',
  'F5 [F5] vein sweep: ledge cut refused - the dy reads out of class (seal 3, dy 1.07, dist 3.1)',
  'F5 [F5] vein sweep: 7 deep drop(s) skipped (dy <-2.0 - the lip sphere cannot reach, the walk was a guaranteed spiral)',
  'F5 [F5] vein sweep: 3 drop(s) already inside the goal - the zero-displacement walk spared (the instant done the spin book reads as churn)',
  'F5 [F5] vein sweep: 4 drop goal(s) refused before the goto (no standable cell in the arrival sphere - the walk was a proven burn)',
  'F5 [F5] vein sweep: 2 above-plane walk(s) timed out on the wide goal (range 2) - the ledge family (the v0.341.0 class, the triage names it)',
  'F5 [F5] vein sweep: 3 below-plane walk(s) still failed on the wide goal (range 2) - the drop rests deeper than the lip',
  'F7 [F7] vein sweep: the drop walks picked nothing (pocket delta 0, 2 failed walk(s))',
  'F7 [F7] vein sweep: ore tier guard - 3 iron_ore, 2 copper_ore left for a stone pick (have wooden_pickaxe)',
  'F7 [F7] vein sweep: 5 support dig-down(s) - the failed ledge walk shook the drop loose',
  'F7 [F7] vein sweep: 2 lip dig-down(s) - the range-2 arrival left the drop outside the magnet',
  'F7 [F7] vein sweep: stance step armed - the ledge reads too high (dy 6, dist 2.4 - closing to the column)',
  'F7 [F7] vein sweep: high ledge stance landed - dist 1.5, the dig still refuses - the ledge reads too high, walked 0.9'
]

test('the count law: the line buckets sum, the measures never vote', () => {
  // F19's own frozen cell: 5 lines (terminal + yield + gallery x2 +
  // lip); its measures (drops 3, dug 14, u 12, ores 6) ride the same
  // lines - they never vote.
  const book = veinLedger(FROZEN)
  const f19 = book.bots.F19
  assert.equal(veinBotLines(f19), 5)
  assert.equal(f19.terminals + f19.yields + f19.gallery + f19.lipRefusals +
    f19.supportRefusals + f19.ledgeRefusals + f19.deepSkips + f19.spared +
    f19.goalRefusals + f19.aboveTimeouts + f19.belowFails + f19.pickedNothings +
    f19.tierGuards + f19.digDowns + f19.stanceArmed + f19.stanceLanded, 5)
  assert.equal(f19.total, 5)
  // the measures' own pins: priced, never counted
  assert.equal(f19.terminalDrops, 3)
  assert.equal(f19.terminalDug, 5)
  assert.equal(f19.yieldU, 12)
  assert.equal(f19.galleryOres, 6)
  assert.equal(f19.yieldDug, 9)
  // the buckets export is the law's own sixteen
  assert.deepEqual(VEIN_LINE_BUCKETS, [
    'terminals', 'yields', 'gallery', 'lipRefusals', 'supportRefusals',
    'ledgeRefusals', 'deepSkips', 'spared', 'goalRefusals',
    'aboveTimeouts', 'belowFails', 'pickedNothings', 'tierGuards',
    'digDowns', 'stanceArmed', 'stanceLanded'
  ])
})

test('the double-count trap: the gallery and the dig-down sub-slices vote once', () => {
  // two gallery lines: one floor lock, one ore detour - the gallery
  // bucket votes 2, the sub-slices are the SAME lines' own splits
  const book = veinLedger(FROZEN)
  const f19 = book.bots.F19
  assert.equal(f19.gallery, 2)
  assert.equal(f19.galleryFloorLock, 1)
  assert.equal(f19.galleryOreDetour, 1)
  // two dig-down lines: one support, one lip - the digDowns bucket
  // votes 2, the sub-slices never vote again
  const f7 = book.bots.F7
  assert.equal(f7.digDowns, 2)
  assert.equal(f7.digDownSupport, 1)
  assert.equal(f7.digDownLip, 1)
  assert.equal(veinBotLines(f7), 6)
})

test('END-TO-END: veinLedger(frozen) feeds the cast - the frozen crowd reads the silence', () => {
  const book = veinLedger(FROZEN)
  // F19=5 F5=6 F7=6 of 17 lines - F5 ties F7 at the top (6 each), the
  // top is under half, the cast reads the silence
  assert.equal(veinCast(book.bots), null)
  const r = veinRiders(book.bots)
  assert.equal(r.leader, 'F5')
  assert.equal(r.runner, 'F7')
  assert.equal(r.ofLines, 17)
  assert.equal(r.pairOwns, 12)
  assert.equal(r.share, 0.706)
})

test("the seat's owner case: the majority pocket owns the cast", () => {
  const bots = { F1: { terminals: 5, total: 5 }, F2: { terminals: 2, total: 2 }, F3: { terminals: 2, total: 2 } }
  const c = veinCast(bots)
  assert.equal(c.bot, 'F1')
  assert.equal(c.owns, 5)
  assert.equal(c.ofLines, 9)
  assert.equal(c.share, 0.556)
})

test('the tie law: an exact tie owns nothing', () => {
  const bots = { F1: { terminals: 4, total: 4 }, F2: { terminals: 4, total: 4 } }
  assert.equal(veinCast(bots), null)
})

test("the under-half law's honest null: a minority top reads the silence", () => {
  const bots = { F1: { terminals: 3, total: 3 }, F2: { terminals: 3, total: 3 }, F3: { terminals: 3, total: 3 } }
  assert.equal(veinCast(bots), null)
})

test('the junk fences: the missing book, the array, the junk cells, the zero-sum bot', () => {
  assert.equal(veinCast(null), null)
  assert.equal(veinCast(undefined), null)
  assert.equal(veinCast([{}]), null)
  assert.equal(veinCast('junk'), null)
  assert.equal(veinCast({}), null)
  const bots = {
    F1: null,
    F2: 'junk',
    F3: { terminals: -2, terminalDrops: 9 },
    F4: { terminals: 1.5 },
    F5: { terminals: 2 }
  }
  const c = veinCast(bots)
  assert.equal(c.bot, 'F5')
  assert.equal(c.ofLines, 2)
  assert.equal(veinBotLines(null), 0)
  assert.equal(veinBotLines(undefined), 0)
  assert.equal(veinBotLines([1]), 0)
  assert.equal(veinBotLines({ terminals: NaN }), 0)
  assert.equal(veinBotLines({ terminals: Infinity }), 0)
  assert.equal(veinBotLines({ terminals: 2.5 }), 0)
  assert.equal(veinBotLines({ terminals: -1 }), 0)
})

test('the cast row byte-exact + the plural law', () => {
  const row = veinCastRow({ bot: 'F19', owns: 33, ofLines: 64, share: 0.516 })
  assert.equal(row, "the vein book's own cast (v0.952.0): F19 owns 33 of 64 vein lane lines (51.6%) - THE VEIN'S OWN PROSPECTOR: one bot's own sweep keeps the mining engine's voice - the v0.501.0 book priced the anatomy, the cast names its prospector")
})

test('the singular law: one line reads the singular', () => {
  const row = veinCastRow({ bot: 'F1', owns: 1, ofLines: 1, share: 1 })
  assert.equal(row, "the vein book's own cast (v0.952.0): F1 owns 1 of 1 vein lane line (100.0%) - THE VEIN'S OWN PROSPECTOR: one bot's own sweep keeps the mining engine's voice - the v0.501.0 book priced the anatomy, the cast names its prospector")
})

test("the cast row's own guards: the junk shapes read null", () => {
  assert.equal(veinCastRow(null), null)
  assert.equal(veinCastRow(undefined), null)
  assert.equal(veinCastRow('junk'), null)
  assert.equal(veinCastRow({}), null)
  assert.equal(veinCastRow({ bot: '', owns: 1, ofLines: 1, share: 1 }), null)
  assert.equal(veinCastRow({ bot: 'F1', owns: 0, ofLines: 1, share: 0 }), null)
  assert.equal(veinCastRow({ bot: 'F1', owns: 2, ofLines: 1, share: 2 }), null)
  assert.equal(veinCastRow({ bot: 'F1', owns: 1, ofLines: 0, share: 1 }), null)
  assert.equal(veinCastRow({ bot: 'F1', owns: 1.5, ofLines: 3, share: 0.5 }), null)
  assert.equal(veinCastRow({ bot: 'F1', owns: 1, ofLines: 3, share: NaN }), null)
})

test('the byte law + the duet: counts equal, the name sorts first', () => {
  const bots = { F8: { yields: 2, total: 2 }, F19: { yields: 2, total: 2 }, F3: { yields: 2, total: 2 } }
  const r = veinRiders(bots)
  assert.equal(r.leader, 'F19')
  assert.equal(r.runner, 'F3')
  assert.equal(r.ofLines, 6)
  assert.equal(r.pairOwns, 4)
})

test('the branch law fenced in the lib: the cast\u0027s owner leaves the riders silent', () => {
  const bots = { F1: { yields: 5, total: 5 }, F2: { yields: 2, total: 2 }, F3: { yields: 2, total: 2 } }
  assert.ok(veinCast(bots))
  assert.equal(veinRiders(bots), null)
})

test("the riders' own fences: the solo pocket, the junk, the missing book", () => {
  assert.equal(veinRiders(null), null)
  assert.equal(veinRiders(undefined), null)
  assert.equal(veinRiders([{}]), null)
  assert.equal(veinRiders({}), null)
  assert.equal(veinRiders({ F1: { yields: 1, total: 1 } }), null)
  // F2 2 of 3 is the cast's own majority - the branch law keeps the riders silent
  assert.equal(veinRiders({ F1: { yields: 1, total: 1 }, F2: { yields: 2, total: 2 } }), null)
  // the 1-1 tie: the cast reads the silence, the riders price the duet
  const r = veinRiders({ F1: { yields: 1, total: 1 }, F2: { yields: 1, total: 1 } })
  assert.equal(r.leader, 'F1')
  assert.equal(r.runner, 'F2')
  assert.equal(r.ofLines, 2)
  assert.equal(r.pairOwns, 2)
  assert.equal(r.share, 1)
})

test('the riders row byte-exact + the guards', () => {
  const row = veinRidersRow({ leader: 'F19', leaderOwns: 22, runner: 'F5', runnerOwns: 10, ofLines: 64, pairOwns: 32, share: 0.5 })
  assert.equal(row, "the vein book's own riders (v0.952.0): no solo prospector owns the majority - F19 x22 + F5 x10 own 32 of 64 vein lane lines (50.0%) - THE PROSPECTORS' OWN CROWD: the cast's tie law held, the vein's crowd is still real - the pair prices the gallery the solo law refused to name")
  assert.equal(veinRidersRow(null), null)
  assert.equal(veinRidersRow('junk'), null)
  assert.equal(veinRidersRow({}), null)
  assert.equal(veinRidersRow({ leader: 'F19', leaderOwns: 0, runner: 'F5', runnerOwns: 10, ofLines: 64, pairOwns: 10, share: 0.1 }), null)
  assert.equal(veinRidersRow({ leader: 'F19', leaderOwns: 22, runner: 'F5', runnerOwns: 10, ofLines: 10, pairOwns: 32, share: 0.1 }), null)
})

test('the census-guard purity: read-time only, the input is never touched', () => {
  const snapshot = JSON.stringify(FROZEN)
  const book = veinLedger(FROZEN)
  veinCast(book.bots)
  veinRiders(book.bots)
  assert.equal(JSON.stringify(FROZEN), snapshot)
  const again = veinRiders(veinLedger(FROZEN).bots)
  assert.equal(again.ofLines, 17)
})

test('the face-212 END-TO-END: the live field speaks the tie', () => {
  // the live face-212 read (fire 2000's own verification): 64 lines
  // across 8 bots, F19 x22 + F5 x10 own 32 of 64 (50.0%) - the pair
  // sits EXACTLY at the tie line, the measure reads it honestly.
  // The frozen mini rides the same shape (the top pair over a tail).
  const frozen212 = [
    'F19 [F19] vein sweep: 2 drop(s) in reach (3 dug)',
    'F19 [F19] vein sweep: +4u walked from the drops (3 dug)',
    'F5 [F5] vein sweep: support dig refused - the support reads air (air null, dist 3.7)',
    'F3 [F3] vein sweep: lip dig refused - the lip reads stone (air 1, dy -0.9)'
  ]
  const book = veinLedger(frozen212)
  assert.equal(veinCast(book.bots), null)
  const r = veinRiders(book.bots)
  assert.equal(r.leader, 'F19')
  assert.equal(r.runner, 'F3')
  assert.equal(r.ofLines, 4)
  assert.equal(r.pairOwns, 3)
  assert.equal(r.share, 0.75)
})

test("the wiring: the decompose's branch prints the cast or the riders - never both", () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.equal(/const vlSeat = veinCast\(vl\.bots\)/.test(src), true)
  assert.equal(/if \(vlSeat\) console\.log\(`\s*\$\{veinCastRow\(vlSeat\)\}`\)/.test(src), true)
  assert.equal(/else \{\s*const vlRiders = veinRiders\(vl\.bots\)/.test(src), true)
  assert.equal(/if \(vlRiders\) console\.log\(`\s*\$\{veinRidersRow\(vlRiders\)\}`\)/.test(src), true)
})
