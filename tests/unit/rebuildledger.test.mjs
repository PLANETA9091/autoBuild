// (v0.976.184) THE LEDGER REBUILDER'S OWN WALL - the tool's own laws as
// pins: the record shape, the LAST-OCCURRENCE LAW (the newest decision
// wins - the cancelled pair's first POST never outvotes the re-dispatch),
// the bounds (a junk line never joins), the sort, the body's provenance,
// and the REAL ride over the worklog's own record shapes (the three
// byte-forms the file carries: the dispatch line, the HTTP 204 line, the
// COMPLETED SUCCESS line). Light: no server, no fleet, no wall.

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parseLedgerRecords, ledgerBody } from '../../scripts/fleet-mining/rebuild-ledger.mjs'

test('parseLedgerRecords: the empty honest read', () => {
  assert.deepEqual(parseLedgerRecords('').faces, [])
  assert.equal(parseLedgerRecords('').torn, 0)
  assert.deepEqual(parseLedgerRecords(null).faces, [])
  assert.deepEqual(parseLedgerRecords(undefined).faces, [])
  assert.deepEqual(parseLedgerRecords(42).faces, [])
})

test('parseLedgerRecords: ONE record rides whole', () => {
  const r = parseLedgerRecords('FACE 423 = 39001848316 dispatched BY ME (HTTP 204) on 3a28c09c')
  assert.equal(r.faces.length, 1)
  assert.equal(r.faces[0].face, 423)
  assert.equal(r.faces[0].run, '39001848316')
  assert.equal(r.torn, 0)
})

test('parseLedgerRecords: the worklog three byte-forms ride', () => {
  // the dispatch line, the HTTP 204 line, the COMPLETED SUCCESS line -
  // the three shapes the real file prints (fire-1142/-1242's own lines)
  const text = [
    '- FACE 422 = 38998939955 COMPLETED SUCCESS and read whole (the artifacts cached)',
    '- FACE 423 = 39001848316 dispatched per the one-active law (POST HTTP 204, 39001848316)',
    '- DISPATCH: ... FACE 393 = 38844982425 HTTP 204 in_progress on 285035bf v0.976.129',
  ].join('\n')
  const r = parseLedgerRecords(text)
  assert.equal(r.faces.length, 3)
  assert.deepEqual(r.faces.map(f => f.face), [393, 422, 423])
  assert.deepEqual(r.faces.map(f => f.run), ['38844982425', '38998939955', '39001848316'])
})

test('parseLedgerRecords: THE LAST-OCCURRENCE LAW - the re-dispatch outvotes the cancelled POST', () => {
  // the LEDGER LAW's own case: face 352's cancelled run recorded first,
  // the honest re-dispatch last - the LAST one wins
  const text = [
    '- FACE 352 = 38650900000 dispatched (the cancelled pair\'s first POST)',
    '- FACE 352 = 38650948407 dispatched BY ME (HTTP 204) on the honest tree',
  ].join('\n')
  const r = parseLedgerRecords(text)
  assert.equal(r.faces.length, 1)
  assert.equal(r.faces[0].face, 352)
  assert.equal(r.faces[0].run, '38650948407')
})

test('parseLedgerRecords: the read record after the dispatch record outvotes (same face)', () => {
  const text = [
    '- FACE 422 = 38998939955 dispatched (HTTP 204)',
    '- FACE 422 = 38998939955 COMPLETED SUCCESS and read whole',
  ].join('\n')
  const r = parseLedgerRecords(text)
  assert.equal(r.faces.length, 1)
  assert.equal(r.faces[0].run, '38998939955')
})

test('parseLedgerRecords: the sort rides ascending across the whole span', () => {
  const text = 'FACE 421 = 38994603887 in flight\nFACE 348 = 38632163799 queued\nFACE 390 = 38831677777 done'
  const r = parseLedgerRecords(text)
  assert.deepEqual(r.faces.map(f => f.face), [348, 390, 421])
})

test('parseLedgerRecords: the junk never joins - the torn sweep counts', () => {
  // a two-digit run id, a one-digit face, a word-face line, a 14-digit run
  const text = [
    'FACE 7 = 1234567890 x', // ok: face 7 rides the lower bound
    'FACE 6 = 1234567890', // torn: face under the floor (the head rides, the bounds refuse)
    'FACE 423 = 123456789', // torn: run under 10 digits (the head rides, the bounds refuse)
    'FACE 423 = 12345678901234', // torn: run over 13 digits (the head rides, the bounds refuse)
    'FACE 1000 = 1234567890', // invisible: a 4-digit face never carries the record head
    'FACEBOOK = 1234567890', // no match: the word never rides
    'FACE 423 = 39001848316', // the honest record beside the junk
  ].join('\n')
  const r = parseLedgerRecords(text)
  assert.equal(r.faces.length, 2) // face 7 + face 423
  assert.deepEqual(r.faces.map(f => f.face), [7, 423])
  assert.equal(r.torn, 3)
})

test('parseLedgerRecords: the real field span rides (the worklog\'s own co-sign, 344..423 sample)', () => {
  // the REAL records the fire-1242 ledger law rode byte-true: the field's
  // own ends + the storm faces + the whole-cache's newest adds
  const text = [
    'FACE 344 = 38610807532',
    'FACE 348 = 38632163799',
    'FACE 355 = 38660557004 dispatched BY ME (HTTP 204) on 246bb0ce master v0.976.75',
    'FACE 370 = 38726642423',
    'FACE 386 = 38811973154',
    'FACE 421 = 38994603887',
    'FACE 422 = 38998939955 COMPLETED SUCCESS',
    'FACE 423 = 39001848316',
  ].join('\n')
  const r = parseLedgerRecords(text)
  assert.equal(r.faces.length, 8)
  assert.equal(r.faces[0].face, 344)
  assert.equal(r.faces[0].run, '38610807532')
  assert.equal(r.faces[2].run, '38660557004') // the LEDGER LAW's own honest source
  assert.equal(r.faces[3].run, '38726642423')
  assert.equal(r.faces[7].run, '39001848316')
})

test('ledgerBody: the provenance law - the source, the stamp, the count ride', () => {
  const records = parseLedgerRecords('FACE 424 = 39006558004\nFACE 423 = 39001848316')
  const body = ledgerBody(records, '/home/z/my-project/worklog.md')
  assert.equal(body.source, '/home/z/my-project/worklog.md')
  assert.equal(body.count, 2)
  assert.equal(body.torn, 0)
  assert.deepEqual(body.faces, [
    { face: 423, run: '39001848316' },
    { face: 424, run: '39006558004' },
  ])
  assert.match(body.generated, /^\d{4}-\d{2}-\d{2}T/)
})

test('ledgerBody: the torn count rides the body (the honest sweep is visible)', () => {
  const records = parseLedgerRecords('FACE 423 = 39001848316\nFACE 423 = 12')
  const body = ledgerBody(records, 'wl.md')
  assert.equal(body.torn, 1)
  assert.equal(body.count, 1)
})
