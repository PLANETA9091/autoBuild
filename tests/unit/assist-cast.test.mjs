import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  RISE_ASSIST_RE,
  RISE_ASSIST_BILL_RE,
  riseAssistBook,
  riseAssistCast,
  riseAssistCastRow,
  riseAssistDuo,
  riseAssistDuoRow
} from '../../src/lib/assistcast.mjs'

// (v0.943.0) THE RISE ASSIST'S OWN CAST - the assist lane's bot-level seat.
// The emitter's exact byte shapes (the two skins), the count law (each line
// one vote, the waterlock bare/ARMED one-pool precedent), the strict-majority
// law, the duo beside the seat's silence, the branch law fenced in the lib,
// the junk fences, the honest silences, the wiring (book feeds the cast).

test('riseAssistBook: the emitter\'s exact byte shapes ride, both skins', () => {
  const lines = [
    'F3 [F3] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)',
    'F15 [F15] climb rise assist: repositioned to -129,64,416 - the loop re-judges',
    'F2 [F2] climb rise assist: assist did not complete (goto: Took to long to decide path to goal!)',
    'F9 [F9] climb rise assist: assist did not complete (goto: No path to the goal!)'
  ]
  const book = riseAssistBook(lines)
  assert.equal(book.total, 4)
  assert.equal(book.bills, 3)
  assert.equal(book.voices, 1)
  assert.deepEqual(book.events.map(e => e.bot), ['F3', 'F15', 'F2', 'F9'])
  assert.deepEqual(book.events.map(e => e.kind), ['bill', 'voice', 'bill', 'bill'])
})

test('riseAssistBook: junk never rides, a good line still tallies', () => {
  const book = riseAssistBook([
    'F3 [F3] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)',
    'climb rise assist: assist did not complete (goto: no bot tag)',
    'F3 climb rise assist: repositioned to 1,2,3 - the loop re-judges',
    'F3 [F3] climb rise assist: some future skin the grammar never rode',
    'F3 [F3] climb rise assist: repositioned to not coordinates - the loop re-judges',
    '',
    null,
    42
  ])
  assert.equal(book.total, 1)
  assert.equal(book.events[0].bot, 'F3')
  assert.equal(book.events[0].kind, 'bill')
})

test('riseAssistBook: honest silences - junk input null, empty face zero', () => {
  assert.equal(riseAssistBook(null), null)
  assert.equal(riseAssistBook(42), null)
  const empty = riseAssistBook(['b] n=1 ts=21s rss=254M', 'F1 [F1] craft torches: stick-dry'])
  assert.deepEqual(empty, { events: [], total: 0, bills: 0, voices: 0 })
})

test('riseAssistCast: the count law - the strict-majority seat', () => {
  const book = riseAssistBook([
    'F13 [F13] climb rise assist: repositioned to -152,64,428 - the loop re-judges',
    'F13 [F13] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)',
    'F13 [F13] climb rise assist: repositioned to -149,64,414 - the loop re-judges',
    'F15 [F15] climb rise assist: repositioned to -129,64,416 - the loop re-judges',
    'F15 [F15] climb rise assist: repositioned to -129,64,411 - the loop re-judges'
  ])
  const seat = riseAssistCast(book.events)
  assert.deepEqual(seat, { bot: 'F13', owns: 3, ofAssists: 5, share: 60 })
})

test('riseAssistCast: the boundary law - exactly half owns nothing', () => {
  const book = riseAssistBook([
    'F13 [F13] climb rise assist: repositioned to -152,64,428 - the loop re-judges',
    'F13 [F13] climb rise assist: repositioned to -149,64,414 - the loop re-judges',
    'F15 [F15] climb rise assist: repositioned to -129,64,416 - the loop re-judges',
    'F15 [F15] climb rise assist: repositioned to -129,64,411 - the loop re-judges'
  ])
  assert.equal(riseAssistCast(book.events), null)
})

test('riseAssistCast: the branch law - a majority leader reads the honest null duo', () => {
  const book = riseAssistBook([
    'F13 [F13] climb rise assist: repositioned to -152,64,428 - the loop re-judges',
    'F13 [F13] climb rise assist: repositioned to -149,64,414 - the loop re-judges',
    'F13 [F13] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)',
    'F15 [F15] climb rise assist: repositioned to -129,64,416 - the loop re-judges'
  ])
  assert.ok(riseAssistCast(book.events))
  assert.equal(riseAssistDuo(book.events), null)
})

test('riseAssistDuo: the tie law held - the crowd is the shape (byte law count desc + bot asc)', () => {
  const book = riseAssistBook([
    'F15 [F15] climb rise assist: repositioned to -129,64,416 - the loop re-judges',
    'F15 [F15] climb rise assist: repositioned to -129,64,411 - the loop re-judges',
    'F13 [F13] climb rise assist: repositioned to -152,64,428 - the loop re-judges',
    'F13 [F13] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)',
    'F3 [F3] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)'
  ])
  const duo = riseAssistDuo(book.events)
  assert.deepEqual(duo, { leader: 'F13', leaderOwns: 2, runner: 'F15', runnerOwns: 2, ofAssists: 5, pairOwns: 4, share: 80 })
  assert.equal(riseAssistDuo([
    'F13 [F13] climb rise assist: repositioned to -152,64,428 - the loop re-judges'
  ]), null)
})

test('riseAssistCastRow: the byte-exact seat row (singular + plural laws)', () => {
  const row = riseAssistCastRow({ bot: 'F13', owns: 3, ofAssists: 5, share: 60 })
  assert.equal(row, 'the rise assist\'s own cast (v0.943.0): F13 owns 3 of 5 assists (60%) - THE CLIMB\'S OWN REPEAT RIDER: one bot\'s own climbs keep asking for the assist lane - the raw per-bot row priced the split, the cast names the lane\'s own repeater')
  const one = riseAssistCastRow({ bot: 'F2', owns: 1, ofAssists: 1, share: 100 })
  assert.match(one, /owns 1 of 1 assist \(100%\)/)
  assert.equal(riseAssistCastRow(null), null)
  assert.equal(riseAssistCastRow({ bot: '', owns: 1, ofAssists: 1, share: 100 }), null)
  assert.equal(riseAssistCastRow({ bot: 'F2', owns: 2, ofAssists: 1, share: 100 }), null)
  assert.equal(riseAssistCastRow({ bot: 'F2', owns: 1, ofAssists: 1, share: 'x' }), null)
})

test('riseAssistDuoRow: the byte-exact duo row (the plural law + the junk battery)', () => {
  const row = riseAssistDuoRow({ leader: 'F13', leaderOwns: 2, runner: 'F15', runnerOwns: 2, ofAssists: 5, pairOwns: 4, share: 80 })
  assert.equal(row, 'the rise assist\'s own riders (v0.943.0): no solo assistant owns the majority - F13 x2 + F15 x2 own 4 of 5 assists (80%) - THE ASSISTANTS\' OWN CROWD: the cast\'s tie law held, the lane\'s spread is still real - the duo prices the assists the solo law refused to name')
  assert.equal(riseAssistDuoRow(null), null)
  assert.equal(riseAssistDuoRow({ leader: 'F13', leaderOwns: 0, runner: 'F15', runnerOwns: 1, ofAssists: 1, pairOwns: 1, share: 100 }), null)
  assert.equal(riseAssistDuoRow({ leader: 'F13', leaderOwns: 2, runner: 'F15', runnerOwns: 2, ofAssists: 5, pairOwns: 6, share: 80 }), null)
  assert.equal(riseAssistDuoRow({ leader: 'F13', leaderOwns: 2, runner: '', runnerOwns: 2, ofAssists: 5, pairOwns: 4, share: 80 }), null)
})

test('THE WIRING: the book feeds the cast - the whole chain end-to-end (the face-208 crowd shape)', () => {
  const log = [
    'launching 19 bots for 600s -> targets sand, gravel, dirt, stone',
    'F15 [F15] climb rise assist: repositioned to -129,64,416 - the loop re-judges',
    'F15 [F15] climb rise assist: repositioned to -129,64,411 - the loop re-judges',
    'F3 [F3] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)',
    'F3 [F3] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)',
    'F13 [F13] climb rise assist: repositioned to -152,64,428 - the loop re-judges',
    'F13 [F13] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)',
    'F11 [F11] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)',
    'F12 [F12] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)',
    'F14 [F14] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)',
    'F8 [F8] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)',
    'F2 [F2] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)',
    'F9 [F9] climb rise assist: assist did not complete (goto: No path to the goal!)',
    'F9 [F9] climb rise assist: repositioned to -110,66,402 - the loop re-judges',
    'b] n=49 ts=981s rss=407M late=200ms mainLate=0ms'
  ]
  const book = riseAssistBook(log)
  assert.equal(book.total, 13)
  assert.equal(book.bills, 9)
  assert.equal(book.voices, 4)
  const seat = riseAssistCast(book.events)
  assert.equal(seat, null)
  const duo = riseAssistDuo(book.events)
  assert.ok(duo)
  assert.equal(duo.leader, 'F13')
  assert.equal(duo.runner, 'F15')
  assert.equal(riseAssistDuoRow(duo), 'the rise assist\'s own riders (v0.943.0): no solo assistant owns the majority - F13 x2 + F15 x2 own 4 of 13 assists (30.769%) - THE ASSISTANTS\' OWN CROWD: the cast\'s tie law held, the lane\'s spread is still real - the duo prices the assists the solo law refused to name')
})

test('the regex grammar itself: the two skins are the whole gate', () => {
  assert.ok(RISE_ASSIST_RE.test('F3 [F3] climb rise assist: assist did not complete (goto: climb rise assist: timeout after 4500ms)'))
  assert.ok(RISE_ASSIST_RE.test('F15 [F15] climb rise assist: repositioned to -129,64,416 - the loop re-judges'))
  assert.ok(RISE_ASSIST_RE.test('F15 [F15] climb rise assist: repositioned to 129,64,416 - the loop re-judges'))
  assert.ok(RISE_ASSIST_BILL_RE.test('F2 [F2] climb rise assist: assist did not complete (goto: Took to long to decide path to goal!)'))
  assert.ok(!RISE_ASSIST_BILL_RE.test('F15 [F15] climb rise assist: repositioned to -129,64,416 - the loop re-judges'))
  assert.ok(!RISE_ASSIST_RE.test('F3 climb rise assist: assist did not complete (goto: no bracket tag)'))
  assert.ok(!RISE_ASSIST_RE.test('F3 [F3] climb rise assist: repositioned to -129,64,416 - the loop re-judged'))
})
