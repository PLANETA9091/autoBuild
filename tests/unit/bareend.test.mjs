import { test } from 'node:test'
import assert from 'node:assert/strict'
import { bareEndJoin } from '../../src/lib/bareend.mjs'
import { emptyWhyRetries } from '../../src/lib/retrywhy.mjs'

// The v0.909.0 seat left the bare cell nameless - face 187 carried 9
// silent ends with NO kicked client in the seat. The join asks the
// bare cell's own question: the v0.806.0 book's socket-loss certificate
// ('F1 [F1] error: EPIPE' + its 'socket error:' twin) is one candidate
// ender - a client dead under the certificate can end the session
// without the catch ever firing. The partition is the meter BY
// CONSTRUCTION: bareCert + bareSilent = the seat's own bare cell.

const DUP = (bot) => `${bot} [${bot}] KICKED: {"type":"compound","value":{"translate":{"type":"string","value":"multiplayer.disconnect.duplicate_login"}}}`
const CERT = (bot, kind = 'EPIPE') => `${bot} [${bot}] error: ${kind}`
const TWIN = (bot, kind = 'EPIPE') => `${bot} [${bot}] socket error: ${kind}`
const RAW = (kind = 'EPIPE') => `Error: ${kind}`
const SKIN = (bot, n, secs) => `${bot} retry #${n} in ${secs}s ()`
const WHYED = (bot, n, secs, why = 'kick/disconnect') => `${bot} retry #${n} in ${secs}s (${why})`

test('cert-adjacent: the bare end riding the socket death\'s own shadow', () => {
  const r = bareEndJoin([CERT('F1'), TWIN('F1'), SKIN('F1', 1, '4.5')])
  assert.ok(r)
  assert.equal(r.bare, 1)
  assert.equal(r.bareCert, 1, 'the certificate armed the seat - the client died under it')
  assert.equal(r.bareSilent, 0)
  assert.deepEqual(r.byBot, { F1: 1 })
})

test('bare-silent: the end with no certificate and no kick in its seat', () => {
  const r = bareEndJoin([SKIN('F7', 1, '2.2')])
  assert.ok(r)
  assert.equal(r.bare, 1)
  assert.equal(r.bareCert, 0)
  assert.equal(r.bareSilent, 1, 'the face\'s quietest end - nothing yet names it')
})

test('THE RECONCILE LAW: bareCert + bareSilent = the v0.909.0 seat\'s own bare cell', () => {
  const lines = [
    CERT('F1'), SKIN('F1', 1, '4.5'),
    SKIN('F7', 1, '2.2'),
    DUP('F10'), SKIN('F10', 1, '3.3'),
    'F9 [F9] KICKED: {}', SKIN('F9', 1, '1.9')
  ]
  const be = bareEndJoin(lines)
  const ew = emptyWhyRetries(lines)
  assert.ok(be && ew)
  assert.equal(ew.bare, 2, 'the seat prices 2 bare skins')
  assert.equal(be.bareCert + be.bareSilent, ew.bare, 'the partition owns the bare cell by construction')
  assert.equal(be.bareCert, 1)
  assert.equal(be.bareSilent, 1)
})

test('a kick in the seat outranks the certificate - the skin is not this seat\'s customer', () => {
  const r = bareEndJoin([CERT('F2'), DUP('F2'), SKIN('F2', 1, '4.0')])
  assert.equal(r, null, 'the kick-adjacent skin belongs to the v0.909.0 row - the join reads silence')
})

test('the pending law: a whyed retry consumes the certificate (the catch ran)', () => {
  const r = bareEndJoin([CERT('F13'), WHYED('F13', 1, '6.4'), SKIN('F13', 2, '2.0')])
  assert.ok(r)
  assert.equal(r.bare, 1)
  assert.equal(r.bareCert, 0, 'the whyed retry took the seat - the later skin rides nothing')
  assert.equal(r.bareSilent, 1)
})

test('the per-bot isolation: a bot\'s certificate never rides another bot\'s skin', () => {
  const r = bareEndJoin([CERT('F1'), SKIN('F2', 1, '3.0'), SKIN('F1', 1, '4.5')])
  assert.ok(r)
  assert.equal(r.bare, 2)
  assert.equal(r.bareCert, 1, 'F1\'s skin rode F1\'s OWN certificate')
  assert.equal(r.bareSilent, 1, 'F2\'s skin found no F2 certificate in its seat')
  assert.deepEqual(r.byBot, { F2: 1, F1: 1 })
})

test('the raw stack never invents a bot (the v0.806.0 blind law)', () => {
  const r = bareEndJoin([RAW('ECONNRESET'), SKIN('F9', 1, '1.1')])
  assert.ok(r)
  assert.equal(r.bare, 1)
  assert.equal(r.bareCert, 0, 'the unattributed burst arms nothing - the blind law holds')
  assert.equal(r.bareSilent, 1)
})

test('the honest silences: junk shapes and the bare-free face', () => {
  assert.equal(bareEndJoin(null), null)
  assert.equal(bareEndJoin(42), null)
  assert.equal(bareEndJoin([]), null)
  assert.equal(bareEndJoin([WHYED('F2', 1, '6.4')]), null, 'whyed retries are not the bare seat\'s customer')
  assert.equal(bareEndJoin([CERT('F1')]), null, 'a certificate alone prices no skin')
  assert.equal(bareEndJoin(['F1 retry #1 in someday ()']), null, 'a malformed delay is not the lane\'s own print')
  assert.equal(bareEndJoin([42, null, undefined]), null, 'non-string lines skip')
})

test('THE CENSUS GUARD: the face-187 shape reads end to end (byBot seats)', () => {
  const lines = [
    'F2 [F2] water: frozen client relog - ending the session',
    DUP('F1'), SKIN('F1', 1, '4.5'),
    CERT('F10'), TWIN('F10'), SKIN('F10', 1, '3.7'),
    SKIN('F13', 1, '2.9')
  ]
  const r = bareEndJoin(lines)
  assert.ok(r)
  assert.equal(r.bare, 2, 'F1\'s skin is kick-adjacent (the seat\'s own) - F10 and F13 are the bare cell')
  assert.equal(r.bareCert, 1, 'F10 rode the certificate\'s shadow')
  assert.equal(r.bareSilent, 1, 'F13 is the face\'s own quietest end')
  assert.deepEqual(r.byBot, { F10: 1, F13: 1 })
})
