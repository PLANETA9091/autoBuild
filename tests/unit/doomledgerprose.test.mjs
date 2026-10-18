// (v0.976.242) THE DOOMED-GOAL LEDGER'S OWN LIVE RESIDUE - the word's
// own pins. The census (the ledger speaks once, the last print wins),
// the fence (every face all four proven integers, the zero lawful), the
// row (the live residue's own two-step arc - the heal the spiral's
// cleaner settle, the swell the parked dooms' own growth, the swing the
// trade; a held step the honest null, the three-face zero the lawful
// silence - the spiral never parked). The near-miss lanes never ride:
// the mid-run refusal lines, the walk/bank refusal prose cells, the
// .241 boards' own ledger/board lines, the truncated tail, the
// un-parenthesised plural, the altered backoff prose. The emitter
// grammar pin: the fleet19 template must stand (the .237 word's own law).
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { doomLedgerProseCensus, doomLedgerProseCensusConsistent, doomLedgerProseCensusRow } from '../../src/lib/doomledgerprose.mjs'

const B = (recorded, refusals, absorbed, live) => ({ recorded, refusals, absorbed, live })
const F469 = 'doomed-goal ledger: 228 recorded, 686 re-issues refused at the funnel, 29 re-dooms absorbed (the v0.96.0 backoff - the storm can no longer out-pace the ttl), 1 live at end phase (v0.72.0 spiral breaker)'

test('census: the F469 face byte-exact - the last print wins', () => {
  const lines = [
    'junk line',
    7,
    null,
    '',
    F469
  ]
  assert.deepEqual(doomLedgerProseCensus(lines), B(228, 686, 29, 1))
  // the ledger speaks once - a later print outvotes the closer
  const echoed = [
    'doomed-goal ledger: 100 recorded, 200 re-issues refused at the funnel, 3 re-dooms absorbed (the v0.96.0 backoff - the storm can no longer out-pace the ttl), 5 live at end phase (v0.72.0 spiral breaker)',
    F469
  ]
  assert.deepEqual(doomLedgerProseCensus(echoed), B(228, 686, 29, 1))
})

test('census: the lawful zero - a face whose lines hold no ledger prose', () => {
  assert.deepEqual(doomLedgerProseCensus([
    'F12 bank trip: shed 12u',
    'no-path ledger: 2 live verdict(s) at end phase',
    'F9 final climb: wet shift tunnel: 2 blocks in 3s'
  ]), B(0, 0, 0, 0))
})

test('census: junk-safe - the non-array prices null, junk types skipped', () => {
  assert.equal(doomLedgerProseCensus(null), null)
  assert.equal(doomLedgerProseCensus(undefined), null)
  assert.equal(doomLedgerProseCensus(F469), null)
  assert.equal(doomLedgerProseCensus(42), null)
  assert.deepEqual(doomLedgerProseCensus([null, 9, 'no prose here']), B(0, 0, 0, 0))
})

test('census: the near-miss lanes never ride', () => {
  const rejects = [
    // the mid-run refusal line - the doom book's own lane
    'F5 walk doomed goal (ledgered 17s ago at [-96,66,396]) - path refused',
    // the walk/bank refusal prose cells
    'F9 bank refused: doomed goal (ledgered 3s ago at [1,2,3]) - walk refused',
    // the .241 boards' own lines - a different frame
    'no-path ledger: 2 live verdict(s) at end phase',
    'full-chest ledger: 0 live verdict(s) at end phase',
    'walk-intent board: 1 live intent(s) at end phase',
    // the truncated tail
    'doomed-goal ledger: 228 recorded, 686 re-issues refused at the funnel, 29 re-dooms absorbed',
    // the un-parenthesised plural + the altered backoff prose
    'doomed-goal ledger: 228 recorded, 686 re-issue refused at the funnel, 29 re-dooms absorbed (the v0.96.0 backoff - the storm can no longer out-pace the ttl), 1 live at end phase (v0.72.0 spiral breaker)',
    'doomed-goal ledger: 228 recorded, 686 re-issues refused at the funnel, 29 re-dooms absorbed (the v0.96.0 backoff - the storm can no longer out-pace the ttl), 1 live at end phase',
    'doomed-goal ledger: 228 recorded, 686 re-issues refused at the funnel, 29 re-dooms absorbed (the backoff), 1 live at end phase (v0.72.0 spiral breaker)',
    // the case flip, the alien count, the extra suffix
    'Doomed-goal ledger: 228 recorded, 686 re-issues refused at the funnel, 29 re-dooms absorbed (the v0.96.0 backoff - the storm can no longer out-pace the ttl), 1 live at end phase (v0.72.0 spiral breaker)',
    'doomed-goal ledger: 228.5 recorded, 686 re-issues refused at the funnel, 29 re-dooms absorbed (the v0.96.0 backoff - the storm can no longer out-pace the ttl), 1 live at end phase (v0.72.0 spiral breaker)',
    'doomed-goal ledger: 228 recorded, 686 re-issues refused at the funnel, 29 re-dooms absorbed (the v0.96.0 backoff - the storm can no longer out-pace the ttl), 1 live at end phase (v0.72.0 spiral breaker) extra'
  ]
  assert.deepEqual(doomLedgerProseCensus(rejects), B(0, 0, 0, 0))
})

test('fence: every branch', () => {
  assert.equal(doomLedgerProseCensusConsistent({ back: B(1, 2, 0, 3), prev: B(0, 0, 1, 0), cur: B(5, 6, 7, 1) }), true)
  // the zero lawful - the ledger never spoke
  assert.equal(doomLedgerProseCensusConsistent({ back: B(0, 0, 0, 0), prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), true)
  // extra keys never rejected
  assert.equal(doomLedgerProseCensusConsistent({ back: { ...B(1, 1, 1, 1), top: 'x' }, prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), true)
  // a missing cell rejects the face
  assert.equal(doomLedgerProseCensusConsistent({ back: { recorded: 1, refusals: 1, absorbed: 1 }, prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), false)
  // the junk folds reject whole
  assert.equal(doomLedgerProseCensusConsistent(null), false)
  assert.equal(doomLedgerProseCensusConsistent(undefined), false)
  assert.equal(doomLedgerProseCensusConsistent([B(0, 0, 0, 0), B(0, 0, 0, 0), B(0, 0, 0, 0)]), false)
  assert.equal(doomLedgerProseCensusConsistent('fold'), false)
  assert.equal(doomLedgerProseCensusConsistent({ back: B(-1, 0, 0, 0), prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), false)
  assert.equal(doomLedgerProseCensusConsistent({ back: B(1.5, 0, 0, 0), prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), false)
  assert.equal(doomLedgerProseCensusConsistent({ back: B(0, 0, 0, 0), prev: null, cur: B(0, 0, 0, 0) }), false)
})

const TAIL = "(the mid-run refusal lines the doom book's own lane prices, the .241 boards' own live cells the board word prices, the exit watchdog's own verdict the runtime's own backstop holds - the ledger's prose row alone, co-existence by seat never by duplication)"

test('row: the heal byte-exact - the live residue two steps down', () => {
  const e = { back: B(228, 686, 29, 3), prev: B(180, 500, 20, 1), cur: B(150, 400, 10, 0) }
  assert.equal(doomLedgerProseCensusRow(e),
    'the doomed-goal ledger prose trend (v0.976.242): the spiral\'s own heal ran two steps deep - 3 -> 1 (-2) -> 0 (-1) - the live residue\'s own fade, the cur face\'s own split records 150 / refusals 400 / absorbed 10 ' + TAIL)
})

test('row: the swell byte-exact - the live residue two steps up', () => {
  const e = { back: B(10, 20, 1, 0), prev: B(12, 25, 2, 2), cur: B(15, 30, 3, 4) }
  assert.equal(doomLedgerProseCensusRow(e),
    'the doomed-goal ledger prose trend (v0.976.242): the spiral\'s own swell ran two steps deep - 0 -> 2 (+2) -> 4 (+2) - the live residue\'s own swell, the cur face\'s own split records 15 / refusals 30 / absorbed 3 ' + TAIL)
})

test('row: the swing byte-exact + the held steps the honest null', () => {
  const e = { back: B(5, 8, 2, 2), prev: B(6, 9, 1, 0), cur: B(7, 10, 3, 1) }
  assert.equal(doomLedgerProseCensusRow(e),
    'the doomed-goal ledger prose trend (v0.976.242): the live residue\'s own swing - 2 -> 0 (-2) -> 1 (+1) - the heal and the swell traded seats between the faces, the cur face\'s own split records 7 / refusals 10 / absorbed 3 ' + TAIL)
  // a held step prices no direction
  assert.equal(doomLedgerProseCensusRow({ back: B(2, 0, 0, 1), prev: B(2, 0, 0, 1), cur: B(5, 0, 0, 0) }), null)
  assert.equal(doomLedgerProseCensusRow({ back: B(5, 0, 0, 0), prev: B(2, 0, 0, 1), cur: B(2, 0, 0, 1) }), null)
  // the three-face zero - the spiral never parked, nothing to price
  assert.equal(doomLedgerProseCensusRow({ back: B(0, 0, 0, 0), prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), null)
  // the fence fail rides null
  assert.equal(doomLedgerProseCensusRow(null), null)
  assert.equal(doomLedgerProseCensusRow({ back: B(0, 0, 0), prev: B(0, 0, 0, 0), cur: B(0, 0, 0, 0) }), null)
})

test('emitter grammar: the fleet19 template must stand', () => {
  const src = readFileSync(fileURLToPath(new URL('../../testbed/fleet19.mjs', import.meta.url)), 'utf8')
  assert.ok(src.includes('doomed-goal ledger: ${dgs.records} recorded, ${dgs.refusals} re-issues refused at the funnel, ${dgs.absorbed} re-dooms absorbed (the v0.96.0 backoff - the storm can no longer out-pace the ttl), ${dgs.live} live at end phase (v0.72.0 spiral breaker)'), 'the doom ledger emitter moved - the word\'s grammar must follow')
})
