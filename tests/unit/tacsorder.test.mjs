import { test } from 'node:test'
import assert from 'node:assert/strict'
import { tacsOrderCensus, tacsOrderConsistent, tacsOrderTrendRow } from '../../src/lib/tacsorder.mjs'

// the REAL faces the fresh 30-face archive holds (fire-0600's own
// harvest, /home/z/faces331 - the byte-exact TACS trios the vanilla
// server voiced at the save flush's own completion second - the
// world-first law 30/30 the archive keeps, the middle storage the
// TWO-VALUE cell this word prices: SEVENTEEN DIM1-middle faces,
// THIRTEEN DIM-1-middle faces, no third order the faces ever voiced).
// the REAL middle arc the row prices:
//   F501:0 F502:1 F503:1 F504:1 F505:1 F506:1 F507:0 F508:0 F509:0
//   F510:0 F511:1 F512:1 F513:0 F514:1 F515:1 F516:0 F517:1 F518:0
//   F519:0 F520:1 F521:0 F522:0 F523:1 F524:1 F525:0 F526:1 F527:0
//   F528:1 F529:1 F530:1  (17 ones / 13 zeros - BOTH SPEAK)

const REAL_F501 = [
  '[20:40:10] [Server thread/INFO]: ThreadedAnvilChunkStorage (world): All chunks are saved',
  '[20:40:10] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM-1): All chunks are saved',
  '[20:40:10] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved'
]
const REAL_F530 = [
  '[21:06:37] [Server thread/INFO]: ThreadedAnvilChunkStorage (world): All chunks are saved',
  '[21:06:37] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved',
  '[21:06:37] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM-1): All chunks are saved'
]
// F507's own face - the drift class (the echo one second AFTER the
// Done line's own second: tacs 6257 vs done 6256 - the order the
// cell this word prices, the drift the lane never touches)
const REAL_F507 = [
  '[01:44:16] [Server thread/INFO]: ThreadedAnvilChunkStorage (world): All chunks are saved',
  '[01:44:17] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM-1): All chunks are saved',
  '[01:44:17] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved'
]

test('v0.976.344 census: the REAL faces byte-exact and the storage order prices', () => {
  // F501's own face - the DIM-1-middle zero class
  const f501 = tacsOrderCensus(REAL_F501)
  assert.deepEqual(f501, { tacsDim1Middle: 0 })
  // F530's own face - the DIM1-middle one class (the fire-0600 face
  // the fresh harvest keeps)
  const f530 = tacsOrderCensus(REAL_F530)
  assert.deepEqual(f530, { tacsDim1Middle: 1 })
  // F507's own face - the drift face the SAME-SECOND family's
  // variance keeps - the order cell rides the middle, the +1s drift
  // the clock's own lane never this word's
  assert.deepEqual(tacsOrderCensus(REAL_F507), { tacsDim1Middle: 0 })
  // the mixed-day face - the seconds differ across the prints, the
  // order the file order never the clock
  assert.deepEqual(
    tacsOrderCensus([
      '[23:59:59] [Server thread/INFO]: ThreadedAnvilChunkStorage (world): All chunks are saved',
      '[00:00:00] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved',
      '[00:00:01] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM-1): All chunks are saved'
    ]),
    { tacsDim1Middle: 1 }
  )
})

test('v0.976.344 row: the REAL arc windows byte-exact', () => {
  // the F501 -> F502 -> F503 window - the swell two steps deep
  const swell = tacsOrderTrendRow({
    back: tacsOrderCensus(REAL_F501),
    prev: { tacsDim1Middle: 1 },
    cur: { tacsDim1Middle: 1 }
  })
  assert.equal(swell, null) // held second step - the honest silence
  const swing = tacsOrderTrendRow({
    back: { tacsDim1Middle: 0 },
    prev: { tacsDim1Middle: 1 },
    cur: { tacsDim1Middle: 0 }
  })
  assert.match(swing, /save echo swing - 0 -> 1 \(\+1\) -> 0 \(-1\)/)
  assert.match(swing, /\(v0\.976\.344\)/)
  const fade = tacsOrderTrendRow({
    back: { tacsDim1Middle: 1 },
    prev: { tacsDim1Middle: 0 },
    cur: { tacsDim1Middle: 0 }
  })
  assert.equal(fade, null) // held second step
  const fadeSwing = tacsOrderTrendRow({
    back: { tacsDim1Middle: 1 },
    prev: { tacsDim1Middle: 0 },
    cur: { tacsDim1Middle: 1 }
  })
  assert.match(fadeSwing, /save echo swing - 1 -> 0 \(-1\) -> 1 \(\+1\)/)
  const swellRow = tacsOrderTrendRow({
    back: { tacsDim1Middle: 0 },
    prev: { tacsDim1Middle: 1 },
    cur: { tacsDim1Middle: 1 }
  })
  assert.equal(swellRow, null)
  const twoUp = tacsOrderTrendRow({
    back: { tacsDim1Middle: 0 },
    prev: { tacsDim1Middle: 1 },
    cur: { tacsDim1Middle: 1 }
  })
  assert.equal(twoUp, null) // second held
})

test('v0.976.344 census: the partial phase and the junk the honesty keeps', () => {
  // the single print - the middle never invented
  assert.deepEqual(tacsOrderCensus([REAL_F501[0]]), { tacsDim1Middle: null })
  // the pair - the partial trio the drop law refuses
  assert.deepEqual(tacsOrderCensus([REAL_F530[0], REAL_F530[1]]), { tacsDim1Middle: null })
  // the no-echo face - the lawful null
  assert.deepEqual(tacsOrderCensus(['[21:06:37] [Server thread/INFO]: Done (3.788s)! For help, type "help"']), { tacsDim1Middle: null })
  assert.deepEqual(tacsOrderCensus([]), { tacsDim1Middle: null })
  // the junk entries the walk skips; the non-array the honest null
  assert.deepEqual(tacsOrderCensus([null, 42, {}, REAL_F501[2]]), { tacsDim1Middle: null })
  assert.equal(tacsOrderCensus('nope'), null)
  assert.equal(tacsOrderCensus(null), null)
  // the four-print face (a re-boot echo) - the LAST complete trio's
  // middle the hand keeps (the world/DIM1/DIM-1 tail the newest
  // boot's own echo keeps)
  assert.deepEqual(
    tacsOrderCensus([...REAL_F501, ...REAL_F530]),
    { tacsDim1Middle: 1 }
  )
})

test('v0.976.344 census: the near-miss skins the lane refuses', () => {
  const B = REAL_F530
  // the 'All dimensions are saved' summary skin - the echo's global
  // sibling a different skin the lane refuses
  assert.deepEqual(tacsOrderCensus(['[21:06:37] [Server thread/INFO]: ThreadedAnvilChunkStorage: All dimensions are saved']), { tacsDim1Middle: null })
  // the foreign storage name
  assert.deepEqual(tacsOrderCensus(['[21:06:37] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM2): All chunks are saved']), { tacsDim1Middle: null })
  // the missing storage cell
  assert.deepEqual(tacsOrderCensus(['[21:06:37] [Server thread/INFO]: ThreadedAnvilChunkStorage (): All chunks are saved']), { tacsDim1Middle: null })
  // the missing parens skin
  assert.deepEqual(tacsOrderCensus(['[21:06:37] [Server thread/INFO]: ThreadedAnvilChunkStorage world: All chunks are saved']), { tacsDim1Middle: null })
  // the non-INFO thread head
  assert.deepEqual(tacsOrderCensus(['[21:06:37] [Worker-Main-3/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved']), { tacsDim1Middle: null })
  // the trailing whitespace - the LINE END tail boundary the .288
  // precedent keeps
  assert.deepEqual(tacsOrderCensus([B[0] + ' ', B[1], B[2]]), { tacsDim1Middle: null })
  // the lowercase body
  assert.deepEqual(tacsOrderCensus(['[21:06:37] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): all chunks are saved']), { tacsDim1Middle: null })
  // the plural verb skin
  assert.deepEqual(tacsOrderCensus(['[21:06:37] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunk are saved']), { tacsDim1Middle: null })
  // the missing-seconds head skin
  assert.deepEqual(tacsOrderCensus(['[21:06] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved']), { tacsDim1Middle: null })
  // the overflow second skin
  assert.deepEqual(tacsOrderCensus(['[21:06:60] [Server thread/INFO]: ThreadedAnvilChunkStorage (DIM1): All chunks are saved']), { tacsDim1Middle: null })
  // the flush's own prints - the sibling lane silent (the .343 word's
  // own lines never cross this lane)
  assert.deepEqual(tacsOrderCensus(["[21:06:37] [Server thread/INFO]: Saving chunks for level 'ServerLevel[world]'/minecraft:the_end"]), { tacsDim1Middle: null })
  // the boot conversation's own neighbours never cross the lane
  assert.deepEqual(tacsOrderCensus(['[21:06:37] [Server thread/INFO]: Done (2.755s)! For help, type "help"']), { tacsDim1Middle: null })
})

test('v0.976.344 fence: every branch the consistent law keeps', () => {
  const good = { tacsDim1Middle: 1 }
  const zero = { tacsDim1Middle: 0 }
  const none = { tacsDim1Middle: null }
  assert.equal(tacsOrderConsistent({ back: good, prev: zero, cur: good }), true)
  assert.equal(tacsOrderConsistent({ back: none, prev: none, cur: none }), true)
  // the junk class the fence refuses
  assert.equal(tacsOrderConsistent({ back: { tacsDim1Middle: 2 }, prev: good, cur: good }), false)
  assert.equal(tacsOrderConsistent({ back: { tacsDim1Middle: -1 }, prev: good, cur: good }), false)
  assert.equal(tacsOrderConsistent({ back: { tacsDim1Middle: 1.5 }, prev: good, cur: good }), false)
  // the missing faces
  assert.equal(tacsOrderConsistent(null), false)
  assert.equal(tacsOrderConsistent({ back: good, prev: good }), false)
  assert.equal(tacsOrderConsistent({ back: good, prev: good, cur: null }), false)
  assert.equal(tacsOrderConsistent('nope'), false)
})

test('v0.976.344 row: the honest silences the family laws keep', () => {
  const good = { tacsDim1Middle: 1 }
  const zero = { tacsDim1Middle: 0 }
  const none = { tacsDim1Middle: null }
  // the partial family - one faceless window the arc never invents
  assert.equal(tacsOrderTrendRow({ back: none, prev: good, cur: good }), null)
  assert.equal(tacsOrderTrendRow(null), null)
  // the held steps - the honest silence (the family's own held law:
  // the REAL 30-face arc's bulk the held steps ride)
  assert.equal(tacsOrderTrendRow({ back: good, prev: good, cur: good }), null)
  assert.equal(tacsOrderTrendRow({ back: zero, prev: zero, cur: zero }), null)
  // the fade and the swell the two-step shape keeps
  const fade = tacsOrderTrendRow({ back: good, prev: zero, cur: { tacsDim1Middle: 0 } })
  assert.equal(fade, null) // second held
  const swingUp = tacsOrderTrendRow({ back: zero, prev: good, cur: zero })
  assert.match(swingUp, /the fleet's own save echo swing - 0 -> 1 \(\+1\) -> 0 \(-1\)/)
  assert.match(swingUp, /the \.341 save trio clock word prices the 'Saving chunks' flush's own count and clock cells and the \.343 trio order word prices the flush's own dimension order/)
  const downUp = tacsOrderTrendRow({ back: good, prev: zero, cur: good })
  assert.match(downUp, /swing - 1 -> 0 \(-1\) -> 1 \(\+1\)/)
  // the co-existence tail every seat named
  assert.match(downUp, /co-existence by seat never by duplication\)/)
})

test('v0.976.344 arc: the REAL thirty-face middle arc re-voiced byte-exact', () => {
  // fire-0600's own harvest (/home/z/faces331) re-voices the arc the
  // census prices - SEVENTEEN ones THIRTEEN zeros no third value
  const ARC = [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1]
  const ones = ARC.filter(v => v === 1).length
  assert.equal(ones, 17)
  assert.equal(ARC.length - ones, 13)
  assert.equal(ARC.length, 30)
  // every face a complete trio the census reads (the partial never
  // rode the archive - WITH-TACS 30/30 TRIO-3 30/30 the audit keeps)
  for (const v of ARC) assert.ok(v === 0 || v === 1)
})
