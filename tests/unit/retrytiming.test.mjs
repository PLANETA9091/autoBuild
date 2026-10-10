import { test } from 'node:test'
import assert from 'node:assert/strict'
import { duplicateRetryRides } from '../../src/lib/retrytiming.mjs'

// The duplicate floor (v0.904.0) lifts every duplicate_login relog's
// pre-phase delay to the 6000ms grace, and the reconnect lane prints
// the ride ('F2 retry #1 in 6.4s (kick/disconnect)') - but no fold ever
// joined the KICKED line to the bot's NEXT retry line. The face-187
// read priced the gap: 10 duplicate_login kicks (100.0%) and the
// floor's own field effect rode unread. The retimeter is that join.

const DUP = (bot) => `${bot} [${bot}] KICKED: {"type":"compound","value":{"translate":{"type":"string","value":"multiplayer.disconnect.duplicate_login"}}}`
const TIMEOUT = (bot) => `${bot} [${bot}] KICKED: {"type":"compound","value":{"translate":{"type":"string","value":"disconnect.timeout"}}}`
const RIDE = (bot, n, secs, why = 'kick/disconnect') => `${bot} retry #${n} in ${secs}s (${why})`

test('the lift\'s own proof: dup kicks riding above the grace', () => {
  const r = duplicateRetryRides([
    DUP('F2'), RIDE('F2', 1, '6.4'), 'F2 [F2] water: pass 0 head=dry',
    DUP('F10'), RIDE('F10', 1, '7.1')
  ])
  assert.ok(r)
  assert.equal(r.kicks, 2)
  assert.equal(r.rides, 2)
  assert.equal(r.above, 2)
  assert.equal(r.below, 0)
  assert.equal(r.unpriced, 0)
  assert.equal(r.minMs, 6400)
  assert.equal(r.maxMs, 7100)
  assert.deepEqual(r.byBotMiss, {})
})

test('THE MISS: a dup kick riding below the floor is the alarm (byBotMiss)', () => {
  const r = duplicateRetryRides([
    DUP('F1'), RIDE('F1', 1, '3.4', 'Timeout waiting for 4 ticks after 5200ms'),
    DUP('F13'), RIDE('F13', 2, '4.9'),
    DUP('F13'), RIDE('F13', 3, '6.2')
  ])
  assert.ok(r)
  assert.equal(r.kicks, 3)
  assert.equal(r.rides, 3)
  assert.equal(r.above, 1)
  assert.equal(r.below, 2)
  assert.deepEqual(r.byBotMiss, { F1: 1, F13: 1 }, 'the miss\'s own bots ride named')
  assert.equal(r.minMs, 3400)
  assert.equal(r.maxMs, 6200)
})

test('the per-bot isolation: a bot\'s kick never rides another bot\'s retry', () => {
  const r = duplicateRetryRides([
    DUP('F1'), RIDE('F2', 1, '7.5'), RIDE('F1', 1, '4.1')
  ])
  assert.ok(r)
  assert.equal(r.rides, 1)
  assert.equal(r.above, 0)
  assert.equal(r.below, 1, 'F1 rode its OWN 4.1s retry, not F2\'s 7.5s')
  assert.deepEqual(r.byBotMiss, { F1: 1 })
})

test('the ordering law: the NEXT retry after the kick rides, the earlier ones skip', () => {
  const r = duplicateRetryRides([
    RIDE('F1', 1, '1.5'), DUP('F1'), RIDE('F1', 2, '6.8'), RIDE('F1', 3, '9.9')
  ])
  assert.ok(r)
  assert.equal(r.rides, 1)
  assert.equal(r.above, 1, 'the 6.8s ride - the first retry AFTER the kick')
  assert.equal(r.minMs, 6800)
})

test('the unpriced seat: a dup kick with no next retry (the face\'s own end)', () => {
  const r = duplicateRetryRides([
    DUP('F19'), RIDE('F19', 1, '7.2'), DUP('F19'),
    't-0s alive=19/19 mined=2067 banked=1065'
  ])
  assert.ok(r)
  assert.equal(r.kicks, 2)
  assert.equal(r.rides, 1)
  assert.equal(r.above, 1)
  assert.equal(r.unpriced, 1, 'the second kick outlived the log')
})

test('non-duplicate kicks never price a ride (the legacy shape stays legacy)', () => {
  const r = duplicateRetryRides([
    TIMEOUT('F10'), RIDE('F10', 1, '2.1'),
    DUP('F10'), RIDE('F10', 2, '6.1')
  ])
  assert.ok(r)
  assert.equal(r.kicks, 1, 'the timeout is not the floor\'s customer')
  assert.equal(r.rides, 1)
  assert.equal(r.above, 1, 'the dup kick rode the NEXT retry, not the timeout\'s 2.1s')
})

test('the honest silences: junk shapes and the dup-free face', () => {
  assert.equal(duplicateRetryRides(null), null)
  assert.equal(duplicateRetryRides(42), null)
  assert.equal(duplicateRetryRides([]), null)
  assert.equal(duplicateRetryRides([RIDE('F2', 1, '6.4')]), null, 'relogs alone are not the floor\'s customer')
  const lone = duplicateRetryRides([DUP('F2')])
  assert.ok(lone, 'a lone dup kick IS the seat\'s customer - the unpriced seat speaks')
  assert.equal(lone.kicks, 1)
  assert.equal(lone.rides, 0)
  assert.equal(lone.unpriced, 1)
  assert.equal(lone.minMs, null)
  assert.equal(lone.maxMs, null)
})

test('the junk rides never price (malformed delays read unpriced)', () => {
  const r = duplicateRetryRides([
    DUP('F7'), 'F7 retry #1 in someday (kick/disconnect)', DUP('F7'), RIDE('F7', 2, '6.9')
  ])
  assert.ok(r)
  assert.equal(r.kicks, 2)
  assert.equal(r.rides, 1, 'the malformed delay never prices a ride')
  assert.equal(r.unpriced, 1)
  assert.equal(r.above, 1)
})

test('THE CENSUS GUARD: the face-187 shape rides end to end (custom floor)', () => {
  const lines = [
    'F2 [F2] water: frozen client relog - ending the session',
    DUP('F1'), RIDE('F1', 1, '7.4'),
    DUP('F13'), RIDE('F13', 1, '6.0'),
    DUP('F10'), RIDE('F10', 1, '5.9')
  ]
  const r = duplicateRetryRides(lines)
  assert.ok(r)
  assert.equal(r.kicks, 3)
  assert.equal(r.above, 2, '7.4s and the EXACT 6.0s floor ride above (>= the grace)')
  assert.equal(r.below, 1, '5.9s misses by 100ms - the meter\'s own honesty')
  const tight = duplicateRetryRides(lines, { dupFloorMs: 9000 })
  assert.equal(tight.above, 0, 'a 9000ms floor judges every ride below')
  assert.equal(tight.below, 3)
  assert.equal(duplicateRetryRides(lines, { dupFloorMs: Number.NaN }).above, 2, 'junk floor reads the 6000 default')
})
