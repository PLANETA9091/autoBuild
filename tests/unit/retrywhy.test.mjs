import { test } from 'node:test'
import assert from 'node:assert/strict'
import { emptyWhyRetries } from '../../src/lib/retrywhy.mjs'

// The face-187 read hand-priced the skin: 'F1 retry #1 in 4.5s ()' rode
// a DUPLICATE kick - and the seam read (fleet19 3793-3832) proved '()'
// reads strictly NO catch assignment: the session ended silent, the
// kick's kind never reached the catch's own if. The vocabulary regex
// was never the hole - the seam was. This seat prices the skin per face;
// the event-side wire's own before/after meter is THIS row.

const DUP = (bot) => `${bot} [${bot}] KICKED: {"type":"compound","value":{"translate":{"type":"string","value":"multiplayer.disconnect.duplicate_login"}}}`
const TIMEOUT = (bot) => `${bot} [${bot}] KICKED: {"type":"compound","value":{"translate":{"type":"string","value":"disconnect.timeout"}}}`
const KINDLESS = (bot) => `${bot} [${bot}] KICKED: {"type":"compound","value":{}}`
const SKIN = (bot, n, secs) => `${bot} retry #${n} in ${secs}s ()`
const WHYED = (bot, n, secs, why = 'kick/disconnect') => `${bot} retry #${n} in ${secs}s (${why})`

test('the face-187 shape: the skin riding a duplicate is dup-adjacent', () => {
  const r = emptyWhyRetries([DUP('F1'), SKIN('F1', 1, '4.5')])
  assert.ok(r)
  assert.equal(r.total, 1)
  assert.equal(r.dupAdjacent, 1, 'THE MISS\'s own subclass: the floor never lifted, the kind never arrived')
  assert.equal(r.otherAdjacent, 0)
  assert.equal(r.bare, 0)
  assert.deepEqual(r.byBot, { F1: 1 })
})

test('the bare seat: a skin with no kicked client in its seat', () => {
  const r = emptyWhyRetries([SKIN('F7', 1, '2.2'), 'F7 [F7] water: pass 0 head=dry'])
  assert.ok(r)
  assert.equal(r.total, 1)
  assert.equal(r.bare, 1, 'the silent end\'s own quiet death - no kick ever rode')
  assert.equal(r.dupAdjacent, 0)
  assert.equal(r.otherAdjacent, 0)
})

test('other-adjacent: the skin riding a non-duplicate kicked client', () => {
  const r = emptyWhyRetries([TIMEOUT('F10'), SKIN('F10', 1, '3.1')])
  assert.ok(r)
  assert.equal(r.total, 1)
  assert.equal(r.otherAdjacent, 1, 'the kick rode, the catch never saw it')
  assert.equal(r.dupAdjacent, 0)
})

test('the kindless kick rides adjacent as other (the v0.906.0 anchor)', () => {
  const r = emptyWhyRetries([KINDLESS('F13'), SKIN('F13', 1, '5.5')])
  assert.ok(r)
  assert.equal(r.total, 1)
  assert.equal(r.otherAdjacent, 1, 'no parsable byte - still a kicked client in the seat')
  assert.equal(r.dupAdjacent, 0)
  assert.equal(r.bare, 0)
})

test('the pending law: a whyed retry consumes the pending kick (the catch ran)', () => {
  const r = emptyWhyRetries([
    DUP('F2'), WHYED('F2', 1, '6.4'), SKIN('F2', 2, '2.0')
  ])
  assert.ok(r)
  assert.equal(r.total, 1)
  assert.equal(r.dupAdjacent, 0, 'the 6.4s whyed retry proved the catch ran - the kick\'s ride was taken')
  assert.equal(r.bare, 1, 'the later skin is the silent end\'s own, no kick in its seat')
})

test('the per-bot isolation: a bot\'s kick never rides another bot\'s skin', () => {
  const r = emptyWhyRetries([DUP('F1'), SKIN('F2', 1, '4.0'), SKIN('F1', 1, '4.5')])
  assert.ok(r)
  assert.equal(r.total, 2)
  assert.equal(r.dupAdjacent, 1, 'F1\'s skin rode F1\'s OWN kick')
  assert.equal(r.bare, 1, 'F2\'s skin found no F2 kick in its seat')
  assert.deepEqual(r.byBot, { F2: 1, F1: 1 })
})

test('byBot names the skin\'s own repeats', () => {
  const r = emptyWhyRetries([
    DUP('F1'), SKIN('F1', 1, '4.5'), SKIN('F1', 2, '3.9'),
    SKIN('F19', 1, '2.7')
  ])
  assert.ok(r)
  assert.equal(r.total, 3)
  assert.equal(r.dupAdjacent, 1)
  assert.equal(r.bare, 2, 'F1\'s second skin and F19\'s own - the pending kick was consumed')
  assert.deepEqual(r.byBot, { F1: 2, F19: 1 })
})

test('the honest silences: junk shapes and the skin-free face', () => {
  assert.equal(emptyWhyRetries(null), null)
  assert.equal(emptyWhyRetries(42), null)
  assert.equal(emptyWhyRetries([]), null)
  assert.equal(emptyWhyRetries([WHYED('F2', 1, '6.4')]), null, 'whyed retries are not the skin\'s customer')
  assert.equal(emptyWhyRetries([DUP('F1')]), null, 'a kick alone prices no skin - the seat reads the retry lines')
  assert.equal(emptyWhyRetries(['F1 retry #1 in someday ()']), null, 'a malformed delay is not the lane\'s own print')
  assert.equal(emptyWhyRetries([42, null, undefined]), null, 'non-string lines skip')
})

test('THE CENSUS GUARD: the face-187 ride-priced shape reads end to end', () => {
  const lines = [
    'F2 [F2] water: frozen client relog - ending the session',
    DUP('F1'), SKIN('F1', 1, '4.5'),
    DUP('F1'), WHYED('F1', 2, '6.4'),
    DUP('F13'), SKIN('F13', 1, '6.2')
  ]
  const r = emptyWhyRetries(lines)
  assert.ok(r)
  assert.equal(r.total, 2)
  assert.equal(r.dupAdjacent, 2, 'the 4.5s skin and F13\'s own - both dups rode silent ends')
  assert.equal(r.bare, 0)
  assert.deepEqual(r.byBot, { F1: 1, F13: 1 })
})
