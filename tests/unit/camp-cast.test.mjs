// (v0.943.0) THE CAMP BUILD'S OWN CAST - the camp build book's bot-level
// seat (the count-seat precedent: each camp furnace line is one vote).
// The seat reads the book's OWN bots cells (campBuild's bots map, the
// cells the class totals already read), zero re-parsing - the fourteen
// line buckets sum to the bot's own vote, the measures (buildSecs,
// planksLogs, timeoutMs, stormCooldownMs) and the sameTypeShort flag
// never vote (they price lines, they are not lines). Strict-majority law
// (a tie owns nothing), byte-law riders (count desc, bot byte asc), the
// branch law fenced in the lib, the junk fences, the honest silences.
// THE NAME'S OWN DEDUP: the v0.497.0 book owns the build anatomy - the
// cast is the book's own BOT axis, both untouched.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { campBuild } from '../../src/lib/campbuild.mjs'
import {
  campBotLines, campCast, campCastRow, campRiders, campRidersRow,
} from '../../src/lib/campcast.mjs'

// the frozen field lines (face 208's own skins, byte for byte): the
// builds, the table-first orders, the plank decision, the cobble floor,
// the leg-clock skip, the reuse and the other refusal
const FROZEN = [
  'F7 camp furnace: craft-table (30 cobble + 7 planks - table first)',
  'F7 camp furnace: BUILT (furnace at -134,60,421) in 12s',
  'F2 camp furnace: BUILT (furnace at -102,57,412) in 6s',
  'F4 camp furnace: craft-planks (2 log(s) in pocket - craft planks (largest same-type stack 3/4))',
  'F4 camp furnace: craft-table (114 cobble + 7 planks - table first)',
  'F4 camp furnace: BUILT (furnace at -95,16,419) in 11s',
  'F1 camp furnace: no build (cobble 0/8)',
  'F3 camp furnace: build skipped - the leg clock (21s) cannot afford a 18s craft-table build + the 5s put (43 cobble + 5 planks - table first)',
  'F6 camp furnace: no build (machine near)',
  'F17 camp furnace: no build (machine near)',
  'F12 camp furnace: no build (no table and planks 3/4)',
]

test('the count law: the top builder owns the cast under the strict majority', () => {
  assert.deepEqual(
    campCast({
      F4: { built: 3, reuse: 2, tableFirst: 1 },
      F7: { built: 1, reuse: 1 },
      F2: { built: 2 },
    }),
    { bot: 'F4', owns: 6, ofLines: 10, share: 0.6 })
})

test('the measures never vote: the line buckets sum, the prices stay out', () => {
  assert.equal(campBotLines({
    built: 2, buildSecs: 45, planksLogs: 7, timeoutMs: 1234,
    stormCooldownMs: 4000, sameTypeShort: 3,
  }), 2)
})

test('END-TO-END: campBuild(frozen) feeds the cast - the face-208 crowd reads the silence', () => {
  const book = campBuild(FROZEN)
  assert.equal(book.totals.built, 3)
  assert.equal(book.totals.total, 10)
  assert.equal(campCast(book.bots), null)
})

test("the under-half law's honest null: a minority builder reads the silence", () => {
  assert.equal(campCast({
    F4: { built: 3, tableFirst: 1 },
    F7: { built: 2 },
    F2: { built: 2 },
    F1: { reuse: 1 },
  }), null)
})

test('the boundary law: an exact tie owns nothing', () => {
  assert.equal(campCast({ F4: { built: 4 }, F7: { built: 4 } }), null)
})

test('the junk fences: the missing book, the array, the junk cells, the zero-sum bot', () => {
  assert.equal(campCast(null), null)
  assert.equal(campCast([]), null)
  assert.equal(campCast('junk'), null)
  assert.equal(campCast({ F4: null, F7: 'junk' }), null)
  assert.equal(campCast({ F4: { built: -3 } }), null)
  assert.equal(campCast({ F4: { buildSecs: 45 } }), null)
})

test('the cast row byte-exact + the plural law', () => {
  assert.equal(
    campCastRow({ bot: 'F4', owns: 6, ofLines: 10, share: 0.6 }),
    "the camp build's own cast (v0.943.0): F4 owns 6 of 10 camp furnace lines (60.0%) - THE FOUNDRY'S OWN BUILDER: one bot's own pockets keep the build book's own voice - the v0.497.0 book priced the anatomy, the cast names its builder")
})

test('the singular law: one line reads the singular', () => {
  assert.equal(
    campCastRow({ bot: 'F2', owns: 1, ofLines: 1, share: 1 }),
    "the camp build's own cast (v0.943.0): F2 owns 1 of 1 camp furnace line (100.0%) - THE FOUNDRY'S OWN BUILDER: one bot's own pockets keep the build book's own voice - the v0.497.0 book priced the anatomy, the cast names its builder")
})

test('the byte law + the duet: counts equal, the name sorts first', () => {
  const r = campRiders({ F4: { built: 2 }, F12: { built: 2 } })
  assert.deepEqual(r, {
    leader: 'F12', leaderOwns: 2, runner: 'F4', runnerOwns: 2,
    ofLines: 4, pairOwns: 4, share: 1,
  })
})

test('END-TO-END riders: the face-208 crowd shape - the pair prices the builds', () => {
  const book = campBuild(FROZEN)
  // (the book's own count law: the F3 leg-clock skip's 'craft-table' skin
  // rides the hyphen the CAMP_SKIPPED_RE's [a-z_]+ refuses - the book's
  // own counted population is 10, the cast never re-parses)
  assert.deepEqual(campRiders(book.bots), {
    leader: 'F4', leaderOwns: 3, runner: 'F7', runnerOwns: 2,
    ofLines: 10, pairOwns: 5, share: 0.5,
  })
  assert.equal(
    campRidersRow(campRiders(book.bots)),
    "the camp build's own riders (v0.943.0): no solo builder owns the majority - F4 x3 + F7 x2 own 5 of 10 camp furnace lines (50.0%) - THE BUILDERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the builds the solo law refused to name")
})

test('the riders row byte-exact', () => {
  assert.equal(
    campRidersRow({ leader: 'F12', leaderOwns: 4, runner: 'F15', runnerOwns: 2, ofLines: 11, pairOwns: 6, share: 0.545 }),
    "the camp build's own riders (v0.943.0): no solo builder owns the majority - F12 x4 + F15 x2 own 6 of 11 camp furnace lines (54.5%) - THE BUILDERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the builds the solo law refused to name")
})

test('the branch law fenced in the lib: the cast owner leaves the riders silent', () => {
  const bots = { F4: { built: 6 }, F7: { built: 2 }, F2: { built: 2 } }
  assert.ok(campCast(bots))
  assert.equal(campRiders(bots), null)
})

test("the rows' junk battery: junk never prints", () => {
  assert.equal(campCastRow(null), null)
  assert.equal(campCastRow('junk'), null)
  assert.equal(campCastRow({ bot: 'F4', owns: 0, ofLines: 10, share: 0 }), null)
  assert.equal(campCastRow({ bot: 'F4', owns: 11, ofLines: 10, share: 1.1 }), null)
  assert.equal(campCastRow({ bot: 'F4', owns: 6, ofLines: 10, share: NaN }), null)
  assert.equal(campRidersRow(null), null)
  assert.equal(campRidersRow('junk'), null)
  assert.equal(campRidersRow({ leader: 'F4', leaderOwns: 3, runner: 'F7', runnerOwns: 2, ofLines: 11, pairOwns: 99, share: 0.455 }), null)
  assert.equal(campRidersRow({ leader: '', leaderOwns: 3, runner: 'F7', runnerOwns: 2, ofLines: 11, pairOwns: 5, share: 0.455 }), null)
})

test("the camp-free face's carry-through: no camp furnace lines, the honest silence", () => {
  const book = campBuild(['F4 armory: sword armed', 'F9 tunnel: water-lock census: water at step 1, 0 sealable in pocket - the seal-and-cross frontier is bare'])
  assert.deepEqual(book.bots, {})
  assert.equal(campCast(book.bots), null)
  assert.equal(campRiders(book.bots), null)
})

test('THE CENSUS GUARD WIRING: the decompose rides the lib beside the book - never before it', () => {
  const dec = readFileSync('scripts/fleet-mining/decompose.mjs', 'utf8')
  assert.ok(dec.includes("from '../../src/lib/campcast.mjs'"), 'the campcast import rides the decompose')
  assert.ok(dec.includes('campCast(cb.bots)'), 'the cast reads the book bots map')
  assert.ok(dec.includes('campRiders(cb.bots)'), 'the riders read the same map')
  const campIdx = dec.indexOf('CAMP BUILD BOOK')
  const castIdx = dec.indexOf('campCast(cb.bots)')
  assert.ok(campIdx >= 0 && castIdx > campIdx, 'the cast prints beside the book - after its own raw rows (the order law)')
})
