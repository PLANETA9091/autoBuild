// (v0.939.0) THE NUDGE APPROACH'S OWN CAST - the nudge family's own WHO
// axis. The family's field legs print the approach verdicts raw
// ('nudge approach verdicts: 34 per-bot: F8=5 F6=4 ...' - face 205's
// seventeen-bot row rode unseated): nobody ever said WHICH bot's own
// stalls keep asking the nudge. The bill law: one book - the verdicts'
// own lines (nudgeApproachBook's own grammar, zero re-parsing, the
// one-parser law); the count law: each verdict one vote (the event-
// seating precedent - the v0.935.0 firings, the v0.936.0 churn events,
// the v0.937.0 named firings); the atom is the COUNT, never the walked
// distance or the seconds (the walk's own score is read but never
// fenced); the strict-majority law (a tie owns nothing); the duo beside
// the seat's silence, byte law count desc + bot byte asc; the branch
// law fenced in the lib; the junk fences; the honest silences.
// END-TO-END: nudgeApproachBook(frozen log lines) feeds the cast.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { nudgeApproachBook, NUDGE_APPROACH_RE, nudgeCast, nudgeCastRow, nudgeDuo, nudgeDuoRow } from '../../src/lib/nudgebook.mjs'

const line = (bot, tail = '1 segment(s) walked in 12.8s, goal now d=9.9 (inside the direct envelope)') =>
  `${bot} fuel commons: path nudge approach: ${tail}`
const ev = (bot) => ({ bot })

test('nudgeApproachBook: the bill law - the verdicts\' own grammar folds the book', () => {
  const book = nudgeApproachBook([
    line('F2'),
    line('F3'),
    'F8 fuel commons: path nudge approach: the stall side-step (right) moved the start (d now 7.6)',
    line('F8'),
    'F2 fuel commons: some other byte entirely',
    'path nudge approach: no bot here',
  ])
  assert.equal(book.total, 4, 'the verdicts\' own lines only')
  assert.deepEqual(book.events.map(e => e.bot), ['F2', 'F3', 'F8', 'F8'])
})

test('nudgeApproachBook: the junk input fences', () => {
  assert.equal(nudgeApproachBook(null), null)
  assert.equal(nudgeApproachBook(42), null)
  const junk = nudgeApproachBook([null, 42, {}, 'no verdict here'])
  assert.equal(junk.total, 0, 'a face with no verdict lines reads the honest zero shape')
})

test('nudgeCast: the count law\'s seat shape - the leader above half owns the cast', () => {
  const cast = nudgeCast([ev('F8'), ev('F8'), ev('F8'), ev('F8'), ev('F6'), ev('F6'), ev('F6')])
  assert.ok(cast, '4 of 7 crosses the law')
  assert.equal(cast.bot, 'F8')
  assert.equal(cast.owns, 4)
  assert.equal(cast.ofApproaches, 7)
  assert.equal(cast.share, 57.143)
})

test('nudgeCast: the under-half silence + the boundary law', () => {
  assert.equal(nudgeCast([ev('F8'), ev('F8'), ev('F6'), ev('F6'), ev('F1')]), null, '2 of 5 is under half')
  assert.equal(nudgeCast([ev('F8'), ev('F8'), ev('F6'), ev('F6')]), null, 'a 2-2 tie owns nothing')
  const cast = nudgeCast([ev('F8'), ev('F8'), ev('F8'), ev('F6')])
  assert.ok(cast, '3 of 4 crosses the law')
  assert.equal(cast.share, 75)
})

test('nudgeCast: the seat row byte-exact + the plural law', () => {
  const cast = nudgeCast([ev('F8'), ev('F8'), ev('F8'), ev('F8'), ev('F6'), ev('F6'), ev('F6')])
  const row = nudgeCastRow(cast)
  assert.equal(row, 'the nudge approach\'s own cast (v0.939.0): F8 owns 4 of 7 approaches (57.143%) - THE ENVELOPE\'S OWN REPEAT APPROACHER: one bot\'s own stalls keep asking the nudge - the v0.147.0 approach priced the walk, the cast names its repeater')
})

test('nudgeCast: the singular law - one verdict reads the singular word', () => {
  const cast = nudgeCast([ev('F9')])
  assert.ok(cast, '1 of 1 owns the seat (the magnet\'s own precedent)')
  assert.equal(cast.share, 100)
  const row = nudgeCastRow(cast)
  assert.ok(row.includes('of 1 approach ('), 'the singular law: no plural on a one-verdict book')
})

test('nudgeCast: the byte law - equal counts read the bot byte ascending (the duet)', () => {
  const duo = nudgeDuo([ev('F9'), ev('F9'), ev('F7'), ev('F7')])
  assert.equal(duo.leader, 'F7', 'equal counts read the byte ascending: F7 < F9')
  assert.equal(duo.runner, 'F9')
})

test('nudgeDuo: the duo row byte-exact', () => {
  const duo = nudgeDuo([ev('F8'), ev('F8'), ev('F8'), ev('F6'), ev('F6'), ev('F6'), ev('F1')])
  const row = nudgeDuoRow(duo)
  assert.equal(row, 'the nudge approach\'s own duo (v0.939.0): no solo approacher owns the majority - F6 x3 + F8 x3 own 6 of 7 approaches (85.714%) - THE APPROACHERS\' OWN CROWD: the cast\'s tie law held, the crowd is still real - the duo prices the stalls the solo law refused to name')
})

test('nudgeDuo: the thin-book fence + the branch law fenced in the lib', () => {
  assert.equal(nudgeDuo([ev('F8'), ev('F8')]), null, 'a solo approacher\'s book reads no duo')
  assert.equal(nudgeDuo([]), null)
  const majority = [ev('F8'), ev('F8'), ev('F8'), ev('F8'), ev('F6'), ev('F6'), ev('F6')]
  assert.ok(nudgeCast(majority), 'the seat owns the majority')
  assert.equal(nudgeDuo(majority), null, 'the branch law: no duo beside a speaking seat')
})

test('nudgeCast: the walk\'s own score is not the atom (the mass-is-not-the-atom law)', () => {
  // the walked segments and the seconds ride the tail - the seat rides the COUNT
  const events = [ev('F7'), ev('F7'), ev('F7'), ev('F5')]
  const cast = nudgeCast(events)
  assert.equal(cast.bot, 'F7', '3 verdicts own the count seat no matter what the tails rode')
})

test('nudgeCast: the junk battery - junk never invents an approacher, good cells still tally', () => {
  assert.equal(nudgeCast(null), null)
  assert.equal(nudgeCast('junk'), null)
  assert.equal(nudgeCast([null, undefined, 42, {}, { bot: '' }, { bot: 7 }, []]), null)
  const mixed = [null, ev('F8'), 42, 'x', ev('F8'), ev('F6')]
  const cast = nudgeCast(mixed)
  assert.ok(cast, 'the good cells survived the junk')
  assert.equal(cast.owns, 2)
  assert.equal(cast.ofApproaches, 3)
})

test('nudgeCast: the honest silences + the row guards', () => {
  assert.equal(nudgeCast([]), null, 'an empty book reads the approach-free face\'s own silence')
  assert.equal(nudgeCastRow(null), null)
  assert.equal(nudgeDuoRow(null), null)
  assert.equal(nudgeCastRow({ bot: 'F8', owns: 0, ofApproaches: 7, share: 0 }), null, 'a zero-own seat reads the honest null row')
  assert.equal(nudgeCastRow({ bot: 'F8', owns: 9, ofApproaches: 7, share: 100 }), null, 'owns above the book is junk')
})

test('THE CENSUS GUARD WIRING: the book feeds the cast, the rows ride after the raw row', () => {
  // END-TO-END: the frozen face-205 grammar feeds the book, the book's
  // own cells feed the cast - zero re-parsing, the one-parser law.
  const lines = [
    line('F8', 'the stall side-step (right) moved the start (d now 7.6)'),
    line('F8', '2 segment(s) walked in 6.2s, goal now d=7.6 (inside the direct envelope)'),
    line('F6'),
    line('F6'),
    line('F6'),
    line('F1'),
  ]
  const book = nudgeApproachBook(lines)
  assert.equal(book.total, 6)
  const cast = nudgeCast(book.events)
  assert.equal(cast, null, 'F6 and F8 tie 3 of 6 - the boundary tie owns nothing')
  const duo = nudgeDuo(book.events)
  assert.equal(duo.leader, 'F6', 'the byte law picks F6 over F8 on the count lead')
  assert.equal(duo.runner, 'F8')
  assert.equal(duo.runnerOwns, 2)
  assert.equal(duo.pairOwns, 5, 'F6 x3 + F8 x2 own 5 of 6')
  // the wiring: the decompose import band carries the five names, the
  // cast block rides AFTER the raw verdicts row (the order law)
  const src = fs.readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("nudgeApproachBook, nudgeCast, nudgeCastRow, nudgeDuo, nudgeDuoRow } from '../../src/lib/nudgebook.mjs'"), 'the import band carries the cast family')
  const rawRowIdx = src.indexOf("'per-bot:', fmt(perBot(/path nudge approach:/))")
  const castIdx = src.indexOf('nudgeCast(nab.events)')
  assert.ok(rawRowIdx > -1 && castIdx > rawRowIdx, 'the order law: the cast rides after the raw row, never before it')
  assert.ok(!src.includes("console.log(`F"), 'CENSUS GUARD: the decompose never prints fleet log lines')
  // the grammar's own anatomy: the double-tag skin parses too
  assert.ok(NUDGE_APPROACH_RE.test('F9 [F9] fuel commons: path nudge approach: 1 segment(s) walked'), 'the double-tag anatomy joins the fold')
})
