// (v0.941.0) THE SHAFT LOCK'S OWN CAST - the shaft lock's own WHO axis.
// The trip voice roster (v0.450.0) prints the shaft-lock cast raw
// ('shaft-lock cast: F10 F12 ... (6 bot(s) the shaft gate held)' - face
// 207's six-bot roster rode unseated): nobody ever said WHICH bot's own
// trips the gate keeps underground. The bill law: one book - the shaft
// skips' own lines (shaftLockBook's own grammar, zero re-parsing, the
// one-parser law; the emitter's exact byte shape, the unreachable skip
// and the launch never ride); the count law: each lock one vote (the
// event-seating precedent - the v0.935.0 firings, the v0.936.0 churn
// events, the v0.937.0 named firings, the v0.939.0 verdicts); the atom
// is the COUNT, never the starved target or the bot's own pocket; the
// strict-majority law (a tie owns nothing); the duo beside the seat's
// silence, byte law count desc + bot byte asc; the branch law fenced in
// the lib; the junk fences; the honest silences.
// END-TO-END: shaftLockBook(frozen log lines) feeds the cast.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { shaftLockBook, SHAFT_LOCK_RE, shaftCast, shaftCastRow, shaftDuo, shaftDuoRow } from '../../src/lib/shaftcast.mjs'

const lock = (bot) => `${bot} map trip skipped: cannot leave the shaft`
const ev = (bot) => ({ bot })

test('shaftLockBook: the bill law - the locks\' own grammar folds the book', () => {
  const book = shaftLockBook([
    lock('F16'),
    lock('F12'),
    'F17 map trip skipped: sand,gravel unreachable',
    'F10 map trip: launched 3 sand targets',
    lock('F16'),
    'F2 fuel commons: some other byte entirely',
    'map trip skipped: cannot leave the shaft',
  ])
  assert.equal(book.total, 3, 'the locks\' own lines only')
  assert.deepEqual(book.events.map(e => e.bot), ['F16', 'F12', 'F16'])
})

test('shaftLockBook: the junk input fences', () => {
  assert.equal(shaftLockBook(null), null)
  assert.equal(shaftLockBook(42), null)
  const junk = shaftLockBook([null, 42, {}, 'no lock here'])
  assert.equal(junk.total, 0, 'a face with no lock lines reads the honest zero shape')
})

test('shaftCast: the count law\'s seat shape - the leader above half owns the cast', () => {
  const cast = shaftCast([ev('F16'), ev('F16'), ev('F16'), ev('F16'), ev('F12'), ev('F12'), ev('F12')])
  assert.ok(cast, '4 of 7 crosses the law')
  assert.equal(cast.bot, 'F16')
  assert.equal(cast.owns, 4)
  assert.equal(cast.ofLocks, 7)
  assert.equal(cast.share, 57.143)
})

test('shaftCast: the under-half silence + the boundary law', () => {
  assert.equal(shaftCast([ev('F16'), ev('F16'), ev('F12'), ev('F12'), ev('F1')]), null, '2 of 5 is under half')
  assert.equal(shaftCast([ev('F16'), ev('F16'), ev('F12'), ev('F12')]), null, 'a 2-2 tie owns nothing')
  const cast = shaftCast([ev('F16'), ev('F16'), ev('F16'), ev('F12')])
  assert.ok(cast, '3 of 4 crosses the law')
  assert.equal(cast.share, 75)
})

test('shaftCast: the seat row byte-exact + the plural law', () => {
  const cast = shaftCast([ev('F16'), ev('F16'), ev('F16'), ev('F16'), ev('F12'), ev('F12'), ev('F12')])
  const row = shaftCastRow(cast)
  assert.equal(row, 'the shaft lock\'s own cast (v0.941.0): F16 owns 4 of 7 locks (57.143%) - THE GATE\'S OWN REPEAT HOSTAGE: one bot\'s own trips the shaft gate keeps underground - the v0.450.0 roster priced the cast, the cast prices the gate\'s own repeater')
})

test('shaftCast: the singular law - one lock reads the singular word', () => {
  const cast = shaftCast([ev('F9')])
  assert.ok(cast, '1 of 1 owns the seat (the magnet\'s own precedent)')
  assert.equal(cast.share, 100)
  const row = shaftCastRow(cast)
  assert.ok(row.includes('of 1 lock ('), 'the singular law: no plural on a one-lock book')
})

test('shaftCast: the byte law - equal counts read the bot byte ascending (the duet)', () => {
  const duo = shaftDuo([ev('F12'), ev('F12'), ev('F16'), ev('F16')])
  assert.equal(duo.leader, 'F12', 'equal counts read the byte ascending: F12 < F16')
  assert.equal(duo.runner, 'F16')
})

test('shaftDuo: the duo row byte-exact', () => {
  const duo = shaftDuo([ev('F16'), ev('F16'), ev('F16'), ev('F12'), ev('F12'), ev('F12'), ev('F1')])
  const row = shaftDuoRow(duo)
  assert.equal(row, 'the shaft lock\'s own duo (v0.941.0): no solo hostage owns the majority - F12 x3 + F16 x3 own 6 of 7 locks (85.714%) - THE HOSTAGES\' OWN CROWD: the cast\'s tie law held, the underground economy\'s tax is still real - the duo prices the trips the solo law refused to name')
})

test('shaftDuo: the thin-book fence + the branch law fenced in the lib', () => {
  assert.equal(shaftDuo([ev('F16'), ev('F16')]), null, 'a solo hostage\'s book reads no duo')
  assert.equal(shaftDuo([]), null)
  const majority = [ev('F16'), ev('F16'), ev('F16'), ev('F16'), ev('F12'), ev('F12'), ev('F12')]
  assert.ok(shaftCast(majority), 'the seat owns the majority')
  assert.equal(shaftDuo(majority), null, 'the branch law: no duo beside a speaking seat')
})

test('shaftLockBook: the whole-line law - only the shaft skip enters the book (the target list is read but never fenced)', () => {
  // the unreachable skip embeds a target list and the launch rides its
  // own shape - the atom is the lock COUNT, never the target or the bot
  const book = shaftLockBook([
    'F17 map trip skipped: sand,gravel unreachable',
    'F10 map trip: launched 3 sand targets',
    'F12 map trip skipped: cannot leave the shaft  ',
    'F6 map trip skipped: cannot leave the shaft',
  ])
  assert.equal(book.total, 2, 'only the gate\'s own verdict rides')
  assert.deepEqual(book.events.map(e => e.bot), ['F12', 'F6'])
  assert.ok(SHAFT_LOCK_RE.test('F12 map trip skipped: cannot leave the shaft'), 'the emitter\'s exact byte shape')
  assert.ok(!SHAFT_LOCK_RE.test('F17 map trip skipped: sand,gravel unreachable'), 'the target-list skip never rides')
})

test('shaftCast: the junk battery - junk never invents a hostage, good cells still tally', () => {
  assert.equal(shaftCast(null), null)
  assert.equal(shaftCast('junk'), null)
  assert.equal(shaftCast([null, undefined, 42, {}, { bot: '' }, { bot: 7 }, []]), null)
  const mixed = [null, ev('F16'), 42, 'x', ev('F16'), ev('F12')]
  const cast = shaftCast(mixed)
  assert.ok(cast, 'the good cells survived the junk')
  assert.equal(cast.owns, 2)
  assert.equal(cast.ofLocks, 3)
})

test('shaftCast: the honest silences + the row guards', () => {
  assert.equal(shaftCast([]), null, 'an empty book reads the lock-free face\'s own silence')
  assert.equal(shaftCastRow(null), null)
  assert.equal(shaftDuoRow(null), null)
  assert.equal(shaftCastRow({ bot: 'F16', owns: 0, ofLocks: 7, share: 0 }), null, 'a zero-own seat reads the honest null row')
  assert.equal(shaftCastRow({ bot: 'F16', owns: 9, ofLocks: 7, share: 100 }), null, 'owns above the book is junk')
})

test('THE CENSUS GUARD WIRING: the book feeds the cast, the rows ride after the raw roster row', () => {
  // END-TO-END: the frozen face-207 grammar feeds the book, the book's
  // own cells feed the cast - zero re-parsing, the one-parser law.
  const lines = [
    lock('F16'),
    lock('F16'),
    lock('F16'),
    lock('F12'),
    lock('F12'),
    lock('F12'),
    lock('F14'),
    lock('F10'),
    lock('F19'),
    lock('F13'),
    'F17 map trip skipped: sand,gravel unreachable',
    'F10 map trip: launched 3 sand targets',
  ]
  const book = shaftLockBook(lines)
  assert.equal(book.total, 10, 'the eleven locks minus the unreachable skip')
  const cast = shaftCast(book.events)
  assert.equal(cast, null, 'F16 and F12 tie 3 of 10 - the boundary tie owns nothing')
  const duo = shaftDuo(book.events)
  assert.equal(duo.leader, 'F12', 'the byte law picks F12 over F16 on the count lead')
  assert.equal(duo.runner, 'F16')
  assert.equal(duo.pairOwns, 6, 'F12 x3 + F16 x3 own 6 of 10')
  // the wiring: the decompose import band carries the five names, the
  // cast block rides AFTER the raw roster row (the order law)
  const src = fs.readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes("shaftLockBook, shaftCast, shaftCastRow, shaftDuo, shaftDuoRow } from '../../src/lib/shaftcast.mjs'"), 'the import band carries the cast family')
  const rawRowIdx = src.indexOf("shaft-lock cast: ${v.shaftRoster")
  const castIdx = src.indexOf('shaftCast(slb.events)')
  assert.ok(rawRowIdx > -1 && castIdx > rawRowIdx, 'the order law: the cast rides after the raw roster row, never before it')
  assert.ok(!src.includes("console.log(`F"), 'CENSUS GUARD: the decompose never prints fleet log lines')
  // the grammar's own anatomy: the roster's own summary never rides the book
  assert.ok(!SHAFT_LOCK_RE.test('shaft-lock cast: F16 F12 (2 bot(s) the shaft gate held)'), 'the roster summary is not a lock line')
})
