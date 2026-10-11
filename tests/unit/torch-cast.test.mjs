//
// torch-cast.test.mjs - THE TORCH LANE'S OWN CAST (v0.950.0)
//
// The count-seat family's own sibling on the v0.500.0 torch book's
// own WHO axis. The count law: the book's own line buckets sum to the
// bot's own vote; the measures (the sticks/coals counters, the planks,
// the ask-coal, the batches/torches/metal, the held torches, the xN
// multiplier) never vote - they price lines, they are not lines. The
// strict-majority law: a bot owns the cast only above half the book's
// own lines, a tie owns nothing. The riders: the cast's silence's own
// companion, a measure never a verdict-owner. The branch law fenced
// in the lib: the cast's owner case leaves the riders silent. Junk
// never invents a seat - the honest silence's own row law.
//
// Pure read-time tooling: the census-guard's own purity pin rides the
// family (the input is never touched).
//
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { torchBook } from '../../src/lib/torchbook.mjs'
import {
  TORCH_LINE_BUCKETS,
  torchBotLines,
  torchCast,
  torchCastRow,
  torchRiders,
  torchRidersRow
} from '../../src/lib/torchcast.mjs'

// The emitter's own canonical forms (torchbook.mjs's documented
// shapes) - every bucket at least once, every measure riding its line.
const FROZEN = [
  'F19 [F19] craft torches: skip (no coal: sticks 4 coals 0)',
  'F19 [F19] craft torches: skip (no coal: sticks 3 coals 0)',
  'F8 [F8] craft torches: skip (no spare sticks: sticks 0 coals 1)',
  'F19 [F19] craft torches: skip (the pocket torch cap: held 12 of 12 - sticks 3 coals 9)',
  'F8 [F8] craft torches: the metal fuel reserve holds all 4 coal for the furnace (18 raw metal held)',
  'F19 [F19] craft torches: stick-dry with logs held - one plank conversion first',
  'F8 [F8] craft torches: stick-dry but 10 planks held - one stick batch first',
  'F19 [F19] craft torches: pocket coal dry (sticks 1) - the torch-coal resupply asks the commons (2 coal)',
  'F8 [F8] craft torches: 1 batch(es) -> 4 torches (sticks 3 coals 9)',
  'F19 [F19] craft torches: 1 batch(es) -> 4 torches (sticks 3 coals 16, the metal reserve keeps 3)',
  'F8 [F8] craft torches: craft did not land (held 0 torch(es))',
  'F19 [F19] craft torches: failed: no crafting table nearby',
  'F8 [F8] torch: the placement did not land (dry) x4 - the streak names itself once, a landing re-arms it',
  'F3 [F3] craft torches: skip (no coal: sticks 2 coals 0)',
  'F3 [F3] craft torches: pocket coal dry (sticks 2) - the torch-coal resupply asks the commons (1 coal)'
]

test('the count law: the line buckets sum, the measures never vote', () => {
  // F19's own frozen cell: 7 lines (2 coal + cap + logs rung + resupply
  // + terminal + error); its measures (sticks 7, coals 0, ask-coal 2,
  // batches 1, torches 4, metal 3) ride the same lines - they never vote.
  const book = torchBook(FROZEN)
  const f19 = book.bots.F19
  assert.equal(torchBotLines(f19), 7)
  assert.equal(f19.coalSkips + f19.stickSkips + f19.capDeclines + f19.reserveDeclines +
    f19.logsRungs + f19.plankRungs + f19.resupplyAsks + f19.terminals +
    f19.noLands + f19.errors + f19.streaks, 7)
  assert.equal(f19.total, 7)
  // the measures' own pins: priced, never counted
  assert.equal(f19.coalSkipSticks, 7)
  assert.equal(f19.coalSkipCoals, 0)
  assert.equal(f19.resupplyAskCoal, 2)
  assert.equal(f19.terminalBatches, 1)
  assert.equal(f19.terminalTorches, 4)
  assert.equal(f19.terminalMetalKept, 3)
  // the buckets export is the law's own eleven
  assert.deepEqual(TORCH_LINE_BUCKETS, [
    'coalSkips', 'stickSkips', 'capDeclines', 'reserveDeclines',
    'logsRungs', 'plankRungs', 'resupplyAsks', 'terminals',
    'noLands', 'errors', 'streaks'
  ])
})

test('the double-count trap: the streak xN multiplier and the terminal measures vote once', () => {
  // one streak line rides x4 - the line votes once, the x4 never votes
  const book = torchBook(FROZEN)
  assert.equal(book.bots.F8.streaks, 1)
  assert.equal(book.bots.F8.streakX, 4)
  assert.equal(torchBotLines(book.bots.F8), 6)
  // one terminal line rides 1 batch -> 4 torches (+keep 3) - one vote
  assert.equal(book.bots.F8.terminals, 1)
  assert.equal(book.bots.F8.terminalBatches, 1)
  assert.equal(book.bots.F8.terminalTorches, 4)
  assert.equal(book.bots.F8.noLandHeld, 0)
})

test('END-TO-END: torchBook(frozen) feeds the cast - the frozen crowd reads the silence', () => {
  const book = torchBook(FROZEN)
  // F19=7 F8=6 F3=2 of 15 lines - F19 under half, the cast reads the silence
  assert.equal(torchCast(book.bots), null)
  const r = torchRiders(book.bots)
  assert.equal(r.leader, 'F19')
  assert.equal(r.leaderOwns, 7)
  assert.equal(r.runner, 'F8')
  assert.equal(r.runnerOwns, 6)
  assert.equal(r.ofLines, 15)
  assert.equal(r.pairOwns, 13)
  assert.equal(r.share, 0.867)
})

test("the seat's owner case: the majority pocket owns the cast", () => {
  // 5 of 9 - above half, the cast owns
  const bots = { F1: { coalSkips: 5, total: 5 }, F2: { coalSkips: 2, total: 2 }, F3: { coalSkips: 2, total: 2 } }
  const c = torchCast(bots)
  assert.equal(c.bot, 'F1')
  assert.equal(c.owns, 5)
  assert.equal(c.ofLines, 9)
  assert.equal(c.share, 0.556)
})

test('the tie law: an exact tie owns nothing', () => {
  const bots = { F1: { coalSkips: 4, total: 4 }, F2: { coalSkips: 4, total: 4 } }
  assert.equal(torchCast(bots), null)
})

test("the under-half law's honest null: a minority top reads the silence", () => {
  const bots = { F1: { coalSkips: 3, total: 3 }, F2: { coalSkips: 3, total: 3 }, F3: { coalSkips: 3, total: 3 } }
  assert.equal(torchCast(bots), null)
})

test('the junk fences: the missing book, the array, the junk cells, the zero-sum bot', () => {
  assert.equal(torchCast(null), null)
  assert.equal(torchCast(undefined), null)
  assert.equal(torchCast([{}]), null)
  assert.equal(torchCast('junk'), null)
  assert.equal(torchCast({}), null)
  // junk cells never vote, the clean pocket beside them does
  const bots = {
    F1: null,
    F2: 'junk',
    F3: { coalSkips: -2, terminalTorches: 9 },
    F4: { coalSkips: 1.5 },
    F5: { coalSkips: 2 }
  }
  const c = torchCast(bots)
  assert.equal(c.bot, 'F5')
  assert.equal(c.ofLines, 2)
  assert.equal(torchBotLines(null), 0)
  assert.equal(torchBotLines(undefined), 0)
  assert.equal(torchBotLines([1]), 0)
  assert.equal(torchBotLines({ coalSkips: NaN }), 0)
  assert.equal(torchBotLines({ coalSkips: Infinity }), 0)
  assert.equal(torchBotLines({ coalSkips: 2.5 }), 0)
  assert.equal(torchBotLines({ coalSkips: -1 }), 0)
})

test('the cast row byte-exact + the plural law', () => {
  const row = torchCastRow({ bot: 'F19', owns: 140, ofLines: 271, share: 0.517 })
  assert.equal(row, "the torch lane's own cast (v0.950.0): F19 owns 140 of 271 torch lane lines (51.7%) - THE LIGHT'S OWN LAMPLIGHTER: one bot's own pocket keeps the light supply's voice - the v0.500.0 book priced the chain, the cast names its lamplighter")
})

test('the singular law: one line reads the singular', () => {
  const row = torchCastRow({ bot: 'F1', owns: 1, ofLines: 1, share: 1 })
  assert.equal(row, "the torch lane's own cast (v0.950.0): F1 owns 1 of 1 torch lane line (100.0%) - THE LIGHT'S OWN LAMPLIGHTER: one bot's own pocket keeps the light supply's voice - the v0.500.0 book priced the chain, the cast names its lamplighter")
})

test("the cast row's own guards: the junk shapes read null", () => {
  assert.equal(torchCastRow(null), null)
  assert.equal(torchCastRow(undefined), null)
  assert.equal(torchCastRow('junk'), null)
  assert.equal(torchCastRow({}), null)
  assert.equal(torchCastRow({ bot: '', owns: 1, ofLines: 1, share: 1 }), null)
  assert.equal(torchCastRow({ bot: 'F1', owns: 0, ofLines: 1, share: 0 }), null)
  assert.equal(torchCastRow({ bot: 'F1', owns: 2, ofLines: 1, share: 2 }), null)
  assert.equal(torchCastRow({ bot: 'F1', owns: 1, ofLines: 0, share: 1 }), null)
  assert.equal(torchCastRow({ bot: 'F1', owns: 1.5, ofLines: 3, share: 0.5 }), null)
  assert.equal(torchCastRow({ bot: 'F1', owns: 1, ofLines: 3, share: NaN }), null)
})

test('the byte law + the duet: counts equal, the name sorts first', () => {
  const bots = { F8: { coalSkips: 2, total: 2 }, F19: { coalSkips: 2, total: 2 }, F3: { coalSkips: 2, total: 2 } }
  const r = torchRiders(bots)
  assert.equal(r.leader, 'F19')
  assert.equal(r.runner, 'F3')
  assert.equal(r.ofLines, 6)
  assert.equal(r.pairOwns, 4)
})

test('the branch law fenced in the lib: the cast\u0027s owner leaves the riders silent', () => {
  const bots = { F1: { coalSkips: 5, total: 5 }, F2: { coalSkips: 2, total: 2 }, F3: { coalSkips: 2, total: 2 } }
  assert.ok(torchCast(bots))
  assert.equal(torchRiders(bots), null)
})

test("the riders' own fences: the solo pocket, the junk, the missing book", () => {
  assert.equal(torchRiders(null), null)
  assert.equal(torchRiders(undefined), null)
  assert.equal(torchRiders([{}]), null)
  assert.equal(torchRiders({}), null)
  assert.equal(torchRiders({ F1: { coalSkips: 1, total: 1 } }), null)
  // F2 2 of 3 is the cast's own majority - the branch law keeps the riders silent
  assert.equal(torchRiders({ F1: { coalSkips: 1, total: 1 }, F2: { coalSkips: 2, total: 2 } }), null)
  // the 1-1 tie: the cast reads the silence, the riders price the duet
  const r = torchRiders({ F1: { coalSkips: 1, total: 1 }, F2: { coalSkips: 1, total: 1 } })
  assert.equal(r.leader, 'F1')
  assert.equal(r.runner, 'F2')
  assert.equal(r.ofLines, 2)
  assert.equal(r.pairOwns, 2)
  assert.equal(r.share, 1)
})

test('the riders row byte-exact + the guards', () => {
  const row = torchRidersRow({ leader: 'F19', leaderOwns: 24, runner: 'F8', runnerOwns: 23, ofLines: 271, pairOwns: 47, share: 0.173 })
  assert.equal(row, "the torch lane's own riders (v0.950.0): no solo lamplighter owns the majority - F19 x24 + F8 x23 own 47 of 271 torch lane lines (17.3%) - THE LAMPLIGHTERS' OWN CROWD: the cast's tie law held, the light's crowd is still real - the pair prices the dark the solo law refused to name")
  assert.equal(torchRidersRow(null), null)
  assert.equal(torchRidersRow('junk'), null)
  assert.equal(torchRidersRow({}), null)
  assert.equal(torchRidersRow({ leader: 'F19', leaderOwns: 0, runner: 'F8', runnerOwns: 23, ofLines: 271, pairOwns: 23, share: 0.1 }), null)
  assert.equal(torchRidersRow({ leader: 'F19', leaderOwns: 24, runner: 'F8', runnerOwns: 23, ofLines: 10, pairOwns: 47, share: 0.1 }), null)
})

test('the census-guard purity: read-time only, the input is never touched', () => {
  const snapshot = JSON.stringify(FROZEN)
  const book = torchBook(FROZEN)
  torchCast(book.bots)
  torchRiders(book.bots)
  assert.equal(JSON.stringify(FROZEN), snapshot)
  // the book's own bots map rides untouched too
  const again = torchRiders(torchBook(FROZEN).bots)
  assert.equal(again.ofLines, 15)
})

test('the face-212 END-TO-END: the live field speaks the crowd', () => {
  // the live face-212 read (fire 1930's own FIRST READ): 271 lines
  // across 19 bots, F19 x24 + F8 x23 - the flat crowd, the riders law.
  // The frozen mini rides the same shape (a flat top pair, a tail).
  const frozen212 = [
    'F19 [F19] craft torches: skip (no coal: sticks 4 coals 0)',
    'F8 [F8] craft torches: skip (no coal: sticks 4 coals 0)',
    'F3 [F3] craft torches: 1 batch(es) -> 4 torches (sticks 3 coals 9)'
  ]
  const book = torchBook(frozen212)
  assert.equal(torchCast(book.bots), null)
  const r = torchRiders(book.bots)
  assert.equal(r.leader, 'F19')
  assert.equal(r.runner, 'F3')
  assert.equal(r.ofLines, 3)
})

test("the wiring: the decompose's branch prints the cast or the riders - never both", () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.equal(/const tlSeat = torchCast\(tb\.bots\)/.test(src), true)
  assert.equal(/if \(tlSeat\) console\.log\(`\s*\$\{torchCastRow\(tlSeat\)\}`\)/.test(src), true)
  assert.equal(/else \{\s*const tlRiders = torchRiders\(tb\.bots\)/.test(src), true)
  assert.equal(/if \(tlRiders\) console\.log\(`\s*\$\{torchRidersRow\(tlRiders\)\}`\)/.test(src), true)
})
