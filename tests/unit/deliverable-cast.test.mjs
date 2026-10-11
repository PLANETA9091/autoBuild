// (v0.935.0) THE EARLY TRIPS' OWN CAST - the deliverability arm's bot-level
// seat (the count-seat precedent: each firing is one vote). The census's own
// deliverable.events cells: [{bot, term, pocketU, rateUPerS, needS, limitS}, ...]
// - the atom is the bot's own firing COUNT, never the pocket mass (the mass
// rode the v0.758.0 seat, the count rides here). Strict-majority law
// (a tie owns nothing), byte-law riders (count desc, bot byte asc), the
// branch law fenced in the lib, the junk fences, the honest silences.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { deliverableCast, deliverableCastRow, deliverableRiders, deliverableRidersRow } from '../../src/lib/deliverability.mjs'

const ev = (bot, term = 'clamp') => ({ bot, term, pocketU: 100, rateUPerS: 0.3, needS: 900, limitS: 600 })

test('the count law: the top firer owns the cast under the strict majority', () => {
  const cast = deliverableCast([ev('F5'), ev('F5'), ev('F5'), ev('F7'), ev('F11')])
  assert.deepEqual(cast, { bot: 'F5', owns: 3, ofTrips: 5, share: 0.6 })
})

test("the under-half law's honest null: a minority firer reads the silence", () => {
  assert.equal(deliverableCast([ev('F5'), ev('F5'), ev('F7'), ev('F7'), ev('F11')]), null)
})

test('the boundary law: an exact tie owns nothing', () => {
  assert.equal(deliverableCast([ev('F5'), ev('F5'), ev('F7'), ev('F7')]), null)
})

test('the seat row byte-exact (the plural law)', () => {
  const row = deliverableCastRow(deliverableCast([ev('F5'), ev('F5'), ev('F5'), ev('F7'), ev('F11')]))
  assert.equal(row, "the early trips' own cast (v0.935.0): F5 owns 3 of 5 early trips (60.0%) - THE POCKET'S OWN REPEAT OFFENDER: one bot's own pocket keeps firing the arm - the v0.385.0 arm priced the split, the cast names its repeater")
})

test('the singular law: one firing names one trip', () => {
  const row = deliverableCastRow(deliverableCast([ev('F3', 'clock')]))
  assert.equal(row, "the early trips' own cast (v0.935.0): F3 owns 1 of 1 early trip (100.0%) - THE POCKET'S OWN REPEAT OFFENDER: one bot's own pocket keeps firing the arm - the v0.385.0 arm priced the split, the cast names its repeater")
})

test("the riders' byte law: count desc, then the name's own byte asc", () => {
  const r = deliverableRiders([ev('F6'), ev('F6'), ev('F16'), ev('F16'), ev('F11')])
  assert.deepEqual(r, { leader: 'F16', leaderOwns: 2, runner: 'F6', runnerOwns: 2, ofTrips: 5, pairOwns: 4, share: 0.8 })
})

test('the riders row byte-exact', () => {
  const row = deliverableRidersRow(deliverableRiders([ev('F6'), ev('F6'), ev('F16'), ev('F16'), ev('F11')]))
  assert.equal(row, "the early trips' own riders (v0.935.0): no solo pocket owns the majority - F16 x2 + F6 x2 own 4 of 5 early trips (80.0%) - THE REPEAT OFFENDERS' OWN CROWD: the cast's tie law held, the crowd is still real - the pair prices the pockets the solo law refused to name")
})

test('the branch law fenced in the lib: a majority leader leaves the riders silent', () => {
  assert.equal(deliverableRiders([ev('F5'), ev('F5'), ev('F5'), ev('F7'), ev('F11')]), null)
  assert.equal(deliverableRiders([ev('F5')]), null)
})

test('the junk battery: junk cells never vote, the real cells still tally', () => {
  const book = [null, 'junk', 42, {}, { term: 'clamp' }, { bot: '' }, { bot: 7 }, ev('F9'), ev('F9'), ev('F2')]
  const cast = deliverableCast(book)
  assert.deepEqual(cast, { bot: 'F9', owns: 2, ofTrips: 3, share: 0.667 })
  // THE FIRST RUN'S OWN LESSON (tests mine, lib clean): this book is F9 x2 of 3 -
  // a 66.7% majority - so the branch law's own fence correctly silences the
  // riders (a leader already holding the majority reads the honest null);
  // recorded not rewritten.
  assert.equal(deliverableRiders(book), null)
})

test('the missing and empty book: the honest silences', () => {
  for (const junk of [null, undefined, 'junk', 7, {}, []]) {
    assert.equal(deliverableCast(junk), null)
    assert.equal(deliverableRiders(junk), null)
  }
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(deliverableCastRow(null), null)
  assert.equal(deliverableCastRow(undefined), null)
  assert.equal(deliverableCastRow('junk'), null)
  assert.equal(deliverableCastRow({}), null)
  assert.equal(deliverableCastRow({ bot: 'F5', owns: 0, ofTrips: 5, share: 0 }), null)
  assert.equal(deliverableCastRow({ bot: 'F5', owns: 8, ofTrips: 5, share: 1.6 }), null)
  assert.equal(deliverableRidersRow(null), null)
  assert.equal(deliverableRidersRow('junk'), null)
  assert.equal(deliverableRidersRow({}), null)
  assert.equal(deliverableRidersRow({ leader: 'a', leaderOwns: 0, runner: 'b', runnerOwns: 2, ofTrips: 5, pairOwns: 2, share: 0.4 }), null)
  assert.equal(deliverableRidersRow({ leader: 'a', leaderOwns: 3, runner: 'b', runnerOwns: 2, ofTrips: 2, pairOwns: 5, share: 2.5 }), null)
})

test('THE CENSUS GUARD: the trip cast rides the decompose seat beside the v0.385.0 arm (WIRING)', async () => {
  const src = readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("deliverableCast, deliverableCastRow, deliverableRiders, deliverableRidersRow } from '../../src/lib/deliverability.mjs'")) // the import rides its own band line
  const arm = src.indexOf('deliverability arm (v0.385.0)')
  const cast = src.indexOf('deliverableCast(bankCensus.deliverable.events)')
  assert.ok(arm > 0 && cast > arm) // the cast rides beside the arm, never before it
  assert.ok(!src.includes("THE POCKET'S OWN REPEAT OFFENDER: one bot's own pocket"), 'the prose lives only in the lib')
})
