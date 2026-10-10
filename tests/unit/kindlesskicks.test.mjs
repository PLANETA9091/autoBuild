import { test } from 'node:test'
import assert from 'node:assert/strict'
import { kindlessKickCensus } from '../../src/lib/kindlesskicks.mjs'
import { kickKindCensus, KICK_KIND_RE } from '../../src/lib/kickkinds.mjs'
import { frozenCensus } from '../../src/lib/frozencensus.mjs'

// Face 185 (run 38069268290) carried 4 kindless kicks beside its 5
// duplicate_login kinds - KICKED lines the kind census refused, counted
// by hand in the read ('duplicate_login 5 of 5 kicks (100.0%), 11
// relogs, 4 bare kicks'). The kindless seat prices that class per face:
// the anchored lines the kind regex cannot read. NOT the socket join's
// bare side (v0.812.0 - the kick whose socket never died); the
// kindless seat is the kinds census's own refusal.

const DUP = (bot) => `${bot} [${bot}] KICKED: {"type":"compound","value":{"translate":{"type":"string","value":"multiplayer.disconnect.duplicate_login"}}}`
const TIMEOUT = (bot) => `${bot} [${bot}] KICKED: {"type":"compound","value":{"translate":{"type":"string","value":"disconnect.timeout"}}}`

test('the kindless seat speaks: the formless shape the v0.730.0 test itself carried', () => {
  const ks = kindlessKickCensus(['F6 [F6] KICKED: some other transport shape entirely'])
  assert.ok(ks, 'the seat opens on the census\'s own refusal')
  assert.equal(ks.n, 1)
  assert.deepEqual(ks.byBot, { F6: 1 })
})

test('the kind lines never sit in the kindless seat (both known byte forms)', () => {
  assert.equal(kindlessKickCensus([DUP('F9')]), null, 'the duplicate byte is a kind, not kindless')
  assert.equal(kindlessKickCensus([TIMEOUT('F10')]), null, 'the timeout byte is a kind, not kindless')
  assert.equal(kindlessKickCensus([DUP('F3'), TIMEOUT('F4'), DUP('F3')]), null, 'an all-kind face reads the honest silence')
})

test('the mixed face: the seat counts only the refused lines, the partition reconciles', () => {
  // face 185's own shape: 5 kinds + 4 kindless = 9 kicked clients
  const lines = [
    DUP('F1'), DUP('F3'), DUP('F3'), DUP('F14'), DUP('F5'),
    'F6 [F6] KICKED: some other transport shape entirely',
    'F6 [F6] KICKED: {"type":"compound","value":{"reason":{"type":"string","value":"server_full"}}}',
    TIMEOUT('F10').slice(0, -1), // the truncated byte - the census reads the byte or nothing
    'F10 [F10] KICKED: You died!' // the vanilla formless drop
  ]
  const ks = kindlessKickCensus(lines)
  const kk = kickKindCensus(lines)
  const fc = frozenCensus(lines)
  assert.ok(ks)
  assert.equal(ks.n, 4, 'four kindless kicks - face 185\'s own count')
  assert.deepEqual(ks.byBot, { F6: 2, F10: 2 })
  assert.equal(kk.n, 5, 'the kinds row owns its five')
  assert.equal(kk.n + ks.n, 9, 'the partition reconciles BY CONSTRUCTION')
  assert.equal(fc.dupKicks.n, 5, 'the frozen census\'s dup sweep rides its own class')
})

test('the truncated translate byte IS kindless - the census reads the byte or nothing', () => {
  const truncated = 'F9 [F9] KICKED: {"type":"compound","value":{"translate":{"type":"string","value":"disconnect.timeout"}}'
  assert.equal(KICK_KIND_RE.test(truncated), false, 'the kind regex refuses the truncated byte')
  const ks = kindlessKickCensus([truncated])
  assert.ok(ks, 'the seat takes the census\'s own refusals')
  assert.deepEqual(ks.byBot, { F9: 1 })
})

test('the honest silences: null shapes and the junk lines', () => {
  assert.equal(kindlessKickCensus(null), null)
  assert.equal(kindlessKickCensus(42), null)
  assert.equal(kindlessKickCensus({}), null)
  assert.equal(kindlessKickCensus([]), null)
  assert.equal(kindlessKickCensus(['F1 [F1] water: pass 0 head=dry']), null, 'a kick-free face reads silence')
  assert.equal(kindlessKickCensus([null, 7, undefined, { s: 'F1 [F1] KICKED: x' }]), null, 'non-string lines skip - the object\'s KICKED is not the log\'s')
  const mixed = kindlessKickCensus([null, 'F2 [F2] KICKED: formless', 7])
  assert.ok(mixed, 'the junk does not blind the seat')
  assert.equal(mixed.n, 1)
})

test('the byBot aggregation rides the bot\'s own anchor', () => {
  const ks = kindlessKickCensus([
    'F14 [F14] KICKED: one',
    'F14 [F14] KICKED: two',
    'F3 [F3] KICKED: three',
    'F14 [F14] water: frozen client relog - not a kick',
    'the fleet relogged: F14 KICKED: not the anchor shape',
    'F7 [F8] KICKED: the name pair does not match - the log\'s own corruption, skipped'
  ])
  assert.ok(ks)
  assert.equal(ks.n, 3)
  assert.deepEqual(ks.byBot, { F14: 2, F3: 1 })
})

test('THE CENSUS GUARD: the kindless seat never counts the fleet\'s other lines', () => {
  const calm = [
    'launching 19 bots for 600s -> targets sand, gravel, dirt, stone',
    'b] n=1 ts=21s rss=253M late=6ms mainLate=0ms',
    't-536s alive=19/19 mined=108 map=334p/9ch banked=0 smelted=0 pocket=84u/25s',
    'F14 [F14] water: frozen client relog (frozen while head-wet (1 verdict)) - ending the session',
    'F12 [F12] bank: yard walk waited out the rescue (cleared=true)',
    'F5 [F5] smelted 3 (iron:3) rescued=0'
  ]
  assert.equal(kindlessKickCensus(calm), null, 'a calm face\'s full slice reads silence')
})

test('the WIRING: the exported KICK_KIND_RE is the same one truth the census rides', () => {
  assert.equal(typeof KICK_KIND_RE.test, 'function')
  assert.equal(KICK_KIND_RE.test(DUP('F9')), true, 'the kind regex reads the dup byte')
  assert.equal(KICK_KIND_RE.test('F6 [F6] KICKED: some other transport shape entirely'), false, 'and refuses the kindless shape - the seat\'s own input')
  // the partition law on a mixed face, restated through the two folds
  const lines = [DUP('F1'), 'F6 [F6] KICKED: formless']
  const kk = kickKindCensus(lines)
  const ks = kindlessKickCensus(lines)
  assert.equal(kk.n + ks.n, 2)
  assert.equal(kk.n, 1)
  assert.equal(ks.n, 1)
})
