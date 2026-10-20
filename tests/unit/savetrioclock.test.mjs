import { test } from 'node:test'
import assert from 'node:assert/strict'
import { saveTrioCensus, saveTrioConsistent, saveTrioTrendRow } from '../../src/lib/savetrioclock.mjs'

// the REAL faces the fixture and the fresh artifacts hold (the
// byte-exact save trio the vanilla server voiced at the boot
// conversation's own completion second - the SAME-SECOND LAW the
// four faces keep: the trio's own prints and the Done line's own
// second ride the same second every face holds; the dimension cells
// ride shape only, the ORDER the faces vary: F526's own face rode
// overworld -> the_end -> the_nether the variance proof keeps).
// the REAL trio arc the row prices:
//   run68 20948, F525 62442, F526 64692, F527 67777

const REAL_F525 = [
  '[17:20:42] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:overworld',
  '[17:20:42] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:the_nether',
  '[17:20:42] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:the_end'
]
const REAL_F526 = [
  '[17:58:12] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:overworld',
  '[17:58:12] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:the_end',
  '[17:58:12] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:the_nether'
]
const REAL_F527 = [
  '[18:49:37] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:overworld',
  '[18:49:37] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:the_nether',
  '[18:49:37] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:the_end'
]
const REAL_RUN68 = [
  '[05:49:08] [Server thread/INFO]: Done (5.023s)! For help, type "help"',
  '[05:49:08] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:overworld',
  '[05:49:08] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:the_nether',
  '[05:49:08] [Server thread/INFO]: Saving chunks for level \'ServerLevel[world]\'/minecraft:the_end',
  '[05:49:08] [Server thread/INFO]: ThreadedAnvilChunkStorage (world): All chunks are saved'
]

test('v0.976.341 census: the REAL faces byte-exact and the trio cells price', () => {
  // F525's own face - the fire-0130 lane's own run the harvest re-rides
  const f525 = saveTrioCensus(REAL_F525)
  assert.deepEqual(f525, { saveTrioCount: 3, saveTrioClock: 62442 })
  // F526's own face - the ORDER variance proof (overworld -> the_end
  // -> the_nether) the count and the clock never touch
  const f526 = saveTrioCensus(REAL_F526)
  assert.deepEqual(f526, { saveTrioCount: 3, saveTrioClock: 64692 })
  // F527's own face - the fire-0200 ride's own face
  const f527 = saveTrioCensus(REAL_F527)
  assert.deepEqual(f527, { saveTrioCount: 3, saveTrioClock: 67777 })
  // run68's own face - the house fixture (the Done line and the TACS
  // line ride the same face the trio lane refuses both)
  const r68 = saveTrioCensus(REAL_RUN68)
  assert.deepEqual(r68, { saveTrioCount: 3, saveTrioClock: 20948 })
})

test('v0.976.341 row: the REAL three-face swell arc byte-exact', () => {
  const row = saveTrioTrendRow({ back: saveTrioCensus(REAL_F525), prev: saveTrioCensus(REAL_F526), cur: saveTrioCensus(REAL_F527) })
  assert.equal(row, "the fleet's own save trio trend (v0.976.341): the fleet's own save trio swell ran two steps deep - 62442 -> 64692 (+2250) -> 67777 (+3085) - the boot's own save flush rode later each face, (the boot conversation's own completion sibling the same second keeps: the .330 Done clock word prices the Done line's own clock cell - the SAME-SECOND LAW the four REAL faces keep, the trio's own print second the Done line's own second the flush's own breath rides - and the .294/.324 done-ms hands price the Done line's own ms cell and the .332 opening clock word prices the boot conversation's own first second and the .331 selection clock word prices the spawn pick's own second and the .293 prep hand prices the 'Time elapsed' segment's own ms cell and the spawn-set family .325/.326/.327/.328/.329 the set lane's own cells keep and the login family's thirteen hands the .314 headcount keeps and the .337 boot quiet word prices the open-to-dawn outer span and the .340 pick reach word prices the select-to-dawn reach and the loss lane the .333/.334/.335/.338/.339 words price (the edges the span the ride the shape - the loss conversation the trio's own boot second precedes) and the .336 join echo drift seat and the .310/.311 class counts and the leave sibling and the deathcause/dupclock seats and the kick bill and the .278 advancement seat and the gc band and the .292 fill lane - the save trio's row alone, co-existence by seat never by duplication)")
})

test('v0.976.341 census: the partial trio and the no-trio face the honesty keeps', () => {
  // the single print - the count the console voiced
  assert.deepEqual(saveTrioCensus([REAL_F525[0]]), { saveTrioCount: 1, saveTrioClock: 62442 })
  // the pair - two dims the flush voiced
  assert.deepEqual(saveTrioCensus([REAL_F526[0], REAL_F526[2]]), { saveTrioCount: 2, saveTrioClock: 64692 })
  // the no-trio face - the lawful zero the clock keeps null
  assert.deepEqual(saveTrioCensus(['[17:20:42] [Server thread/INFO]: Done (3.788s)! For help, type "help"']), { saveTrioCount: 0, saveTrioClock: null })
  assert.deepEqual(saveTrioCensus([]), { saveTrioCount: 0, saveTrioClock: null })
  // the junk entries the walk skips; the non-array the honest null
  assert.deepEqual(saveTrioCensus([null, 42, {}, REAL_F527[1]]), { saveTrioCount: 1, saveTrioClock: 67777 })
  assert.equal(saveTrioCensus('nope'), null)
  assert.equal(saveTrioCensus(null), null)
})

test('v0.976.341 census: the near-miss skins the lane refuses', () => {
  const B = REAL_F525
  // the TACS completion line - the save's own echo a different emitter rides
  assert.deepEqual(saveTrioCensus(["[17:20:42] [Server thread/INFO]: ThreadedAnvilChunkStorage (world): All chunks are saved"]), { saveTrioCount: 0, saveTrioClock: null })
  // the dimensions-are-saved summary line
  assert.deepEqual(saveTrioCensus(["[17:20:42] [Server thread/INFO]: ThreadedAnvilChunkStorage: All dimensions are saved"]), { saveTrioCount: 0, saveTrioClock: null })
  // the foreign level name - the byte-locked cell the near-miss refuses
  assert.deepEqual(saveTrioCensus(["[17:20:42] [Server thread/INFO]: Saving chunks for level 'ServerLevel[dim2]'/minecraft:overworld"]), { saveTrioCount: 0, saveTrioClock: null })
  // the missing quote skin
  assert.deepEqual(saveTrioCensus(["[17:20:42] [Server thread/INFO]: Saving chunks for level ServerLevel[world]/minecraft:overworld"]), { saveTrioCount: 0, saveTrioClock: null })
  // the wrong dimension skin
  assert.deepEqual(saveTrioCensus(["[17:20:42] [Server thread/INFO]: Saving chunks for level 'ServerLevel[world]'/minecraft:overworld_extra"]), { saveTrioCount: 0, saveTrioClock: null })
  // the non-INFO thread head
  assert.deepEqual(saveTrioCensus(["[17:20:42] [Worker-Main-3/INFO]: Saving chunks for level 'ServerLevel[world]'/minecraft:overworld"]), { saveTrioCount: 0, saveTrioClock: null })
  // the trailing whitespace - the LINE END tail boundary the .288 precedent keeps
  assert.deepEqual(saveTrioCensus([B[0] + ' ']), { saveTrioCount: 0, saveTrioClock: null })
  // the lowercase body
  assert.deepEqual(saveTrioCensus(["[17:20:42] [Server thread/INFO]: saving chunks for level 'ServerLevel[world]'/minecraft:overworld"]), { saveTrioCount: 0, saveTrioClock: null })
  // the missing-seconds head skin
  assert.deepEqual(saveTrioCensus(["[17:20] [Server thread/INFO]: Saving chunks for level 'ServerLevel[world]'/minecraft:overworld"]), { saveTrioCount: 0, saveTrioClock: null })
  // the boot conversation's own neighbours never cross the lane
  assert.deepEqual(saveTrioCensus(["[17:20:42] [Server thread/INFO]: Done (3.788s)! For help, type \"help\""]), { saveTrioCount: 0, saveTrioClock: null })
})

test('v0.976.341 fence: every branch the consistent law keeps', () => {
  const good = { saveTrioCount: 3, saveTrioClock: 62442 }
  const zero = { saveTrioCount: 0, saveTrioClock: null }
  assert.equal(saveTrioConsistent({ back: good, prev: good, cur: good }), true)
  assert.equal(saveTrioConsistent({ back: zero, prev: zero, cur: zero }), true)
  // the clock null with a live count - the lie the fence refuses
  assert.equal(saveTrioConsistent({ back: { saveTrioCount: 3, saveTrioClock: null }, prev: good, cur: good }), false)
  // the clock with the zero count - the invented second the fence refuses
  assert.equal(saveTrioConsistent({ back: { saveTrioCount: 0, saveTrioClock: 62442 }, prev: good, cur: good }), false)
  // the out-of-domain clock
  assert.equal(saveTrioConsistent({ back: { saveTrioCount: 1, saveTrioClock: 86400 }, prev: good, cur: good }), false)
  assert.equal(saveTrioConsistent({ back: { saveTrioCount: 1, saveTrioClock: -1 }, prev: good, cur: good }), false)
  assert.equal(saveTrioConsistent({ back: { saveTrioCount: 1, saveTrioClock: 1.5 }, prev: good, cur: good }), false)
  // the negative count
  assert.equal(saveTrioConsistent({ back: { saveTrioCount: -1, saveTrioClock: 0 }, prev: good, cur: good }), false)
  // the missing faces
  assert.equal(saveTrioConsistent(null), false)
  assert.equal(saveTrioConsistent({ back: good, prev: good }), false)
  assert.equal(saveTrioConsistent({ back: good, prev: good, cur: null }), false)
})

test('v0.976.341 row: the honest silences the family laws keep', () => {
  const good = { saveTrioCount: 3, saveTrioClock: 62442 }
  const zero = { saveTrioCount: 0, saveTrioClock: null }
  // the never-voiced silence - all three counts zero
  assert.equal(saveTrioTrendRow({ back: zero, prev: zero, cur: zero }), null)
  // the partial family - one faceless clock the arc never invents
  assert.equal(saveTrioTrendRow({ back: zero, prev: good, cur: good }), null)
  // the inconsistent trio - no row
  assert.equal(saveTrioTrendRow(null), null)
  // the held step - the honest silence (the family's own held law)
  assert.equal(saveTrioTrendRow({ back: good, prev: good, cur: { saveTrioCount: 3, saveTrioClock: 62442 } }), null)
  assert.equal(saveTrioTrendRow({ back: good, prev: { saveTrioCount: 3, saveTrioClock: 62442 }, cur: good }), null)
  // the fade and the swing the two-step shape keeps
  const fade = saveTrioTrendRow({ back: { saveTrioCount: 3, saveTrioClock: 67777 }, prev: { saveTrioCount: 3, saveTrioClock: 64692 }, cur: { saveTrioCount: 3, saveTrioClock: 62442 } })
  assert.match(fade, /save trio fade ran two steps deep - 67777 -> 64692 \(-3085\) -> 62442 \(-2250\)/)
  const swing = saveTrioTrendRow({ back: { saveTrioCount: 3, saveTrioClock: 62442 }, prev: { saveTrioCount: 3, saveTrioClock: 67777 }, cur: { saveTrioCount: 3, saveTrioClock: 64692 } })
  assert.match(swing, /save trio swing - 62442 -> 67777 \(\+5335\) -> 64692 \(-3085\)/)
})
