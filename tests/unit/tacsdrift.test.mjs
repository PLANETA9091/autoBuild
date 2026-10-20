import { test } from 'node:test'
import assert from 'node:assert/strict'
import { tacsDriftCensus, tacsDriftConsistent, tacsDriftTrendRow } from '../../src/lib/tacsdrift.mjs'

// the REAL faces the fresh 30-face archive holds (fire-0600's own
// harvest, /home/z/faces331 - the byte-exact Done clocks and TACS
// echo trios the vanilla server voiced - the drift cell the .344
// ledger names, the fire-0630 fieldread ALL GATES GREEN keeps:
// FIELDPROOF 30/30 RAW-MIRROR 30/30 DUAL 4 drift / 26 same-second,
// the F531 fresh face the same-second class rides).
// the REAL drift arc the row prices:
//   F501:0 F502:0 F503:0 F504:0 F505:0 F506:0 F507:1 F508:0 F509:0
//   F510:0 F511:0 F512:0 F513:0 F514:0 F515:0 F516:0 F517:0 F518:0
//   F519:1 F520:0 F521:0 F522:0 F523:1 F524:0 F525:1 F526:0 F527:0
//   F528:0 F529:0 F530:0  (4 ones / 26 zeros - BOTH SPEAK)

const DONE_F501 = '[20:40:10] [Server thread/INFO]: Done (4.801s)! For help, type "help"'
const REAL_F501 = [
  DONE_F501,
  '[20:40:10] [Server thread/INFO]: ThreadedAnvilChunkStorage (world): All chunks are saved',
  '[20:40:10] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM-1): All chunks are saved',
  '[20:40:10] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved'
]
// F507's own face - the DRIFT class (the echo one second AFTER the
// Done line's own second: done 01:44:16 / echo 01:44:17 all three
// prints ride - the fieldread RAW-MIRROR the face keeps)
const DONE_F507 = '[01:44:16] [Server thread/INFO]: Done (2.836s)! For help, type "help"'
const REAL_F507 = [
  DONE_F507,
  '[01:44:17] [Server thread/INFO]: ThreadedAnvilChunkStorage (world): All chunks are saved',
  '[01:44:17] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM-1): All chunks are saved',
  '[01:44:17] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved'
]
// F519's own face - the drift class the same family keeps
const DONE_F519 = '[10:35:38] [Server thread/INFO]: Done (3.111s)! For help, type "help"'
const REAL_F519 = [
  DONE_F519,
  '[10:35:39] [Server thread/INFO]: ThreadedAnvilChunkStorage (world): All chunks are saved',
  '[10:35:39] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM-1): All chunks are saved',
  '[10:35:39] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved'
]
// F531's own face - the fresh fleet face the trio-order word's run
// keeps (fire-0630's own artifact read: Done 21:58:39 / echo
// 21:58:39 - the same-second class, the nether-middle order the
// .343 census prices)
const DONE_F531 = '[21:58:39] [Server thread/INFO]: Done (5.535s)! For help, type "help"'
const REAL_F531 = [
  DONE_F531,
  '[21:58:39] [Server thread/INFO]: ThreadedAnvilChunkStorage (world): All chunks are saved',
  '[21:58:39] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM-1): All chunks are saved',
  '[21:58:39] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved',
  '[21:58:39] [Server thread/INFO]: ThreadedAnvilChunkStorage: All dimensions are saved'
]

test('v0.976.345 census: the REAL faces byte-exact and the drift cell prices', () => {
  // F501's own face - the same-second zero class
  assert.deepEqual(tacsDriftCensus(REAL_F501), { tacsDrift: 0 })
  // F507's own face - the DRIFT one class (the echo one second after
  // the Done clock - the family variance the fresh archive keeps)
  assert.deepEqual(tacsDriftCensus(REAL_F507), { tacsDrift: 1 })
  // F519's own face - the drift class the same family keeps
  assert.deepEqual(tacsDriftCensus(REAL_F519), { tacsDrift: 1 })
  // F531's own face - the fresh fleet face the same-second class
  // rides (the 'All dimensions are saved' summary skin the tail
  // carries - the near-miss the lane refuses, the census never reads)
  assert.deepEqual(tacsDriftCensus(REAL_F531), { tacsDrift: 0 })
})

test('v0.976.345 census: the drift arc the REAL thirty faces re-voice', () => {
  // the fire-0630 fieldread arc byte-exact: FOUR drift faces
  // (F507/F519/F523/F525) the +1s class keeps, TWENTY-SIX same-second
  // faces - BOTH values speak, the seat LIVE, the born-constant
  // decline never rides. the four drift faces re-voiced byte-exact
  // (F507 above, the three below the same +1s class):
  assert.deepEqual(tacsDriftCensus([
    DONE_F519,
    '[10:35:39] [Server thread/INFO]: ThreadedAnvilChunkStorage (world): All chunks are saved',
    '[10:35:39] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved',
    '[10:35:39] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM-1): All chunks are saved'
  ]), { tacsDrift: 1 })
  // the order the storage cell rides never touches the drift - the
  // DIM1-middle skin the same drift second keeps (the cells two
  // lanes one echo)
  const swapped = tacsDriftCensus([
    DONE_F507,
    '[01:44:17] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved',
    '[01:44:17] [Server thread/INFO]: ThreadedAnvilChunkStorage (world): All chunks are saved',
    '[01:44:17] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM-1): All chunks are saved'
  ])
  assert.deepEqual(swapped, { tacsDrift: 1 })
})

test('v0.976.345 census: the refusal battery and the honest nulls', () => {
  // non-array the never-read
  assert.equal(tacsDriftCensus(null), null)
  assert.equal(tacsDriftCensus('world'), null)
  assert.equal(tacsDriftCensus(42), null)
  // no Done line - the reference clock never spoke, the drift never
  // invented
  assert.deepEqual(tacsDriftCensus(REAL_F501.slice(1)), { tacsDrift: null })
  // the echo absent - the set empty the never-read
  assert.deepEqual(tacsDriftCensus([DONE_F501]), { tacsDrift: null })
  // the split set the faces never voice (the .344 test's own F507
  // skin rode the world print one second early - a set the archive
  // keeps never - the census prices it null honest, the never-read
  // the only shape the null keeps)
  assert.deepEqual(tacsDriftCensus([
    DONE_F507,
    '[01:44:16] [Server thread/INFO]: ThreadedAnvilChunkStorage (world): All chunks are saved',
    '[01:44:17] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM-1): All chunks are saved',
    '[01:44:17] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved'
  ]), { tacsDrift: null })
  // the summary skin alone never prices - the near-miss the lane
  // refuses (the .344 refusal battery the frame re-rides)
  assert.deepEqual(tacsDriftCensus([
    DONE_F501,
    '[20:40:10] [Server thread/INFO]: ThreadedAnvilChunkStorage: All dimensions are saved'
  ]), { tacsDrift: null })
  // the second-echo boot the newest boot's own read keeps - the last
  // Done clock the reference (the .333 LAST-PRINT-WINS law the hand
  // inherits)
  assert.deepEqual(tacsDriftCensus([
    DONE_F501,
    ...REAL_F501.slice(1),
    DONE_F507,
    ...REAL_F507.slice(1)
  ]), { tacsDrift: 1 })
})

test('v0.976.345 fence: the class cell own law (null honest else 0/1)', () => {
  assert.equal(tacsDriftConsistent(null), false)
  assert.equal(tacsDriftConsistent('x'), false)
  assert.equal(tacsDriftConsistent({}), false)
  assert.equal(tacsDriftConsistent({ back: { tacsDrift: 0 }, prev: { tacsDrift: 1 } }), false)
  assert.equal(tacsDriftConsistent({ back: { tacsDrift: 0 }, prev: { tacsDrift: 1 }, cur: { tacsDrift: 2 } }), false)
  assert.equal(tacsDriftConsistent({ back: { tacsDrift: null }, prev: { tacsDrift: 1 }, cur: { tacsDrift: 0 } }), true)
  assert.equal(tacsDriftConsistent({ back: { tacsDrift: 1 }, prev: { tacsDrift: 1 }, cur: { tacsDrift: 1 } }), true)
  assert.equal(tacsDriftConsistent({ back: { tacsDrift: 0 }, prev: { tacsDrift: 1 }, cur: { tacsDrift: null } }), true)
})

test('v0.976.345 row: the swing the two-value domain voices byte-exact', () => {
  const swing = tacsDriftTrendRow({
    back: { tacsDrift: 0 },
    prev: { tacsDrift: 1 },
    cur: { tacsDrift: 0 }
  })
  assert.ok(swing && swing.includes('TACS drift trend (v0.976.345)'))
  assert.ok(swing.includes('0 -> 1 (+1) -> 0 (-1)'))
  assert.ok(swing.includes('the fleet\'s own echo swing'))
  assert.ok(swing.includes('co-existence by seat never by duplication'))
  assert.ok(swing.includes('the .344 tacs order word prices the echo\'s own middle storage cell'))
  // the mirror swing - the F519 -> F520 -> F521 class the arc keeps
  const mirror = tacsDriftTrendRow({
    back: { tacsDrift: 1 },
    prev: { tacsDrift: 0 },
    cur: { tacsDrift: 1 }
  })
  assert.ok(mirror && mirror.includes('1 -> 0 (-1) -> 1 (+1)'))
})

test('v0.976.345 row: the held law and the never-read silence', () => {
  // the held arc - no direction the row never invents (the 26-face
  // same-second family the arc keeps)
  assert.equal(tacsDriftTrendRow({
    back: { tacsDrift: 0 },
    prev: { tacsDrift: 0 },
    cur: { tacsDrift: 0 }
  }), null)
  assert.equal(tacsDriftTrendRow({
    back: { tacsDrift: 1 },
    prev: { tacsDrift: 1 },
    cur: { tacsDrift: 0 }
  }), null)
  // the never-read face the window carries - the honest silence
  assert.equal(tacsDriftTrendRow({
    back: { tacsDrift: null },
    prev: { tacsDrift: 1 },
    cur: { tacsDrift: 0 }
  }), null)
  // the inconsistent envelope the fence refuses
  assert.equal(tacsDriftTrendRow(null), null)
  assert.equal(tacsDriftTrendRow({ back: { tacsDrift: 0 }, prev: { tacsDrift: 2 }, cur: { tacsDrift: 1 } }), null)
})
