// (v0.976.241) THE END-PHASE LIVE BOARD'S OWN MASS - the word's own pins.
// The census (the boards speak once, the last print wins), the fence
// (every face all three proven integers, the zero lawful), the row (the
// live mass's own two-step arc - the heal the runners' cleaner settle,
// the swell the parked class's own growth, the swing the trade; a held
// step the honest null, the three-face zero the lawful silence - the
// drained face). The near-miss lanes never ride: the doomed-goal
// ledger's own live cell, the bank arm census, the pre-position census,
// the mid-run record lines, the truncated tail, the un-parenthesised
// plural. The emitter grammar pin: the fleet19 templates must stand
// (the .237 word's own law).
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { endPhaseBoardCensus, endPhaseBoardCensusConsistent, endPhaseBoardCensusRow } from '../../src/lib/endphaseboardcensus.mjs'

const B = (nopath, fullchest, walkintent) => ({ nopath, fullchest, walkintent })

test('census: the F469 face byte-exact - the last print wins', () => {
  const lines = [
    'junk line',
    7,
    null,
    '',
    'no-path ledger: 2 live verdict(s) at end phase',
    'full-chest ledger: 0 live verdict(s) at end phase',
    'walk-intent board: 1 live intent(s) at end phase'
  ]
  assert.deepEqual(endPhaseBoardCensus(lines), B(2, 0, 1))
  // the boards speak once - a later print outvotes the closer
  const echoed = [
    'no-path ledger: 5 live verdict(s) at end phase',
    'walk-intent board: 3 live intent(s) at end phase',
    'no-path ledger: 2 live verdict(s) at end phase',
    'walk-intent board: 1 live intent(s) at end phase'
  ]
  assert.deepEqual(endPhaseBoardCensus(echoed), B(2, 0, 1))
})

test('census: the lawful zero - a face whose lines hold no board print', () => {
  assert.deepEqual(endPhaseBoardCensus([
    'F12 bank trip: shed 12u',
    'no-path ledger: 2 live verdict(s)',
    'F9 final climb: wet shift tunnel: 2 blocks in 3s'
  ]), B(0, 0, 0))
})

test('census: junk-safe - the non-array prices null, junk types skipped', () => {
  assert.equal(endPhaseBoardCensus(null), null)
  assert.equal(endPhaseBoardCensus(undefined), null)
  assert.equal(endPhaseBoardCensus('no-path ledger: 2 live verdict(s) at end phase'), null)
  assert.equal(endPhaseBoardCensus(42), null)
  assert.deepEqual(endPhaseBoardCensus([null, 9, 'no votes here']), B(0, 0, 0))
})

test('census: the near-miss lanes never ride', () => {
  const rejects = [
    'doomed-goal ledger: 228 recorded, 686 re-issues refused at the funnel, 29 re-dooms absorbed (the v0.96.0 backoff - the storm can no longer out-pace the ttl), 1 live at end phase (v0.72.0 spiral breaker)',
    'bank arm census: 3 bot(s) never armed a bank pass - their end pockets carried 139u (top F12=116u) - the arms\' silence is the face\'s own read',
    'pre-position census: armed 9, landed 2 (+302u), failed 10 (top why: surface refused x7) - the seat\'s own delivery, first priced',
    'no-path ledger: 2 live verdict(s)',
    'no-path ledger: 2 live verdicts at end phase',
    'no-path ledger: 2 live verdict(s) at end',
    'full-chest ledger: -1 live verdict(s) at end phase',
    'walk-intent board: 1.5 live intent(s) at end phase',
    'No-path ledger: 2 live verdict(s) at end phase',
    'no-path ledger: 2 live verdict(s) at end phase extra'
  ]
  const mass = endPhaseBoardCensus(rejects)
  assert.deepEqual(mass, B(0, 0, 0))
})

test('fence: every branch', () => {
  assert.equal(endPhaseBoardCensusConsistent({ back: B(1, 0, 0), prev: B(0, 2, 0), cur: B(0, 0, 3) }), true)
  // the zero lawful - the boards never spoke
  assert.equal(endPhaseBoardCensusConsistent({ back: B(0, 0, 0), prev: B(0, 0, 0), cur: B(0, 0, 0) }), true)
  // extra keys never rejected
  assert.equal(endPhaseBoardCensusConsistent({ back: { ...B(1, 1, 1), top: 'x' }, prev: B(0, 0, 0), cur: B(0, 0, 0) }), true)
  // a missing cell rejects the face
  assert.equal(endPhaseBoardCensusConsistent({ back: { nopath: 1, fullchest: 1 }, prev: B(0, 0, 0), cur: B(0, 0, 0) }), false)
  // the junk folds reject whole
  assert.equal(endPhaseBoardCensusConsistent(null), false)
  assert.equal(endPhaseBoardCensusConsistent(undefined), false)
  assert.equal(endPhaseBoardCensusConsistent([B(0, 0, 0), B(0, 0, 0), B(0, 0, 0)]), false)
  assert.equal(endPhaseBoardCensusConsistent('fold'), false)
  assert.equal(endPhaseBoardCensusConsistent({ back: B(-1, 0, 0), prev: B(0, 0, 0), cur: B(0, 0, 0) }), false)
  assert.equal(endPhaseBoardCensusConsistent({ back: B(1.5, 0, 0), prev: B(0, 0, 0), cur: B(0, 0, 0) }), false)
  assert.equal(endPhaseBoardCensusConsistent({ back: B(0, 0, 0), prev: null, cur: B(0, 0, 0) }), false)
})

const TAIL = "(the mid-run record lanes the record seats price, the doomed-goal ledger's own live cell the doom book's own prose carries, the exit watchdog's own verdict the runtime's own backstop holds - the boards' mass row alone, co-existence by seat never by duplication)"

test('row: the heal byte-exact - the live mass two steps down', () => {
  const e = { back: B(4, 1, 3), prev: B(2, 0, 1), cur: B(1, 0, 0) }
  assert.equal(endPhaseBoardCensusRow(e),
    'the end-phase live board trend (v0.976.241): the boards\' own heal ran two steps deep - 8 -> 3 (-5) -> 1 (-2) - the live mass\'s own fade, the cur face\'s own split nopath 1 / fullchest 0 / walkintent 0 ' + TAIL)
})

test('row: the swell byte-exact - the live mass two steps up', () => {
  const e = { back: B(1, 0, 0), prev: B(2, 1, 0), cur: B(3, 0, 2) }
  assert.equal(endPhaseBoardCensusRow(e),
    'the end-phase live board trend (v0.976.241): the boards\' own swell ran two steps deep - 1 -> 3 (+2) -> 5 (+2) - the live mass\'s own swell, the cur face\'s own split nopath 3 / fullchest 0 / walkintent 2 ' + TAIL)
})

test('row: the swing byte-exact + the held steps the honest null', () => {
  const e = { back: B(2, 2, 2), prev: B(0, 1, 1), cur: B(1, 0, 4) }
  assert.equal(endPhaseBoardCensusRow(e),
    'the end-phase live board trend (v0.976.241): the live mass\'s own swing - 6 -> 2 (-4) -> 5 (+3) - the heal and the swell traded seats between the faces, the cur face\'s own split nopath 1 / fullchest 0 / walkintent 4 ' + TAIL)
  // a held step prices no direction
  assert.equal(endPhaseBoardCensusRow({ back: B(2, 0, 0), prev: B(2, 0, 0), cur: B(5, 0, 0) }), null)
  assert.equal(endPhaseBoardCensusRow({ back: B(5, 0, 0), prev: B(2, 0, 0), cur: B(2, 0, 0) }), null)
  // the three-face zero - the runners drained, nothing to price
  assert.equal(endPhaseBoardCensusRow({ back: B(0, 0, 0), prev: B(0, 0, 0), cur: B(0, 0, 0) }), null)
  // the fence fail rides null
  assert.equal(endPhaseBoardCensusRow(null), null)
  assert.equal(endPhaseBoardCensusRow({ back: B(0, 0, 0), prev: B(0, 0), cur: B(0, 0, 0) }), null)
})

test('emitter grammar: the fleet19 templates must stand', () => {
  const src = readFileSync(fileURLToPath(new URL('../../testbed/fleet19.mjs', import.meta.url)), 'utf8')
  assert.ok(src.includes('no-path ledger: ${noPathLedger.length} live verdict(s) at end phase'), 'the no-path board emitter moved - the word\'s grammar must follow')
  assert.ok(src.includes('full-chest ledger: ${fullChestLedger.length} live verdict(s) at end phase'), 'the full-chest board emitter moved - the word\'s grammar must follow')
  assert.ok(src.includes('walk-intent board: ${walkIntents.length} live intent(s) at end phase'), 'the walk-intent board emitter moved - the word\'s grammar must follow')
})
