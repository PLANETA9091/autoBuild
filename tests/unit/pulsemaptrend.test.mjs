// (v0.976.260) THE PULSE MAP CELL'S OWN GROWTH MASS - the word's own pins.
// The real lines ride byte-exact (the field's own faces: F467 run
// 39131684179, F474 run 39160949802, F475 run 39164157313, F478 run
// 39174346168, F479 run 39178460638 - the storm duck word's own first
// live face rode the same log the map cell pulsed).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { pulseMapCensus, pulseMapConsistent, pulseMapTrendRow } from '../../src/lib/pulsemaptrend.mjs'

// the REAL face lines (the cached faces' own last tick dockets - the
// map cell the fleet19 tick line prints, one read per tick)
const F467 = 't-0s alive=19/19 mined=2252 map=1220p/20ch banked=539 smelted=2 pocket=1580u/212s | sand=88 gravel=32 dirt=160 stone=0'
const F474 = 't-0s alive=19/19 mined=1886 map=1476p/25ch banked=1458 smelted=11 pocket=814u/205s | sand=47 gravel=2 dirt=194 stone=0'
const F475 = 't-0s alive=19/19 mined=1625 map=1328p/27ch banked=228 smelted=16 pocket=1153u/193s | sand=23 gravel=1 dirt=191 stone=1'
const F478 = 't-0s alive=19/19 mined=2401 map=1163p/18ch banked=1104 smelted=25 pocket=1404u/256s | sand=75 gravel=12 dirt=428 stone=0'
const F479 = 't-0s alive=19/19 mined=1978 map=1181p/21ch banked=313 smelted=4 pocket=1989u/272s | sand=38 gravel=7 dirt=377 stone=1'
// the F479 face's own early pulse (the map grew 319p -> 1181p the face rode)
const F479_EARLY = 't-536s alive=19/19 mined=92 map=319p/9ch banked=0 smelted=0 pocket=58u/17s | sand=0 gravel=0 dirt=0 stone=0'
// the pre-scan skin (the map cell's own lawful zero ride)
const ZERO_SKIN = 't-10s alive=19/19 mined=0 map=0p/0ch banked=0 smelted=0 pocket=0u/0s | sand=0 gravel=0 dirt=0 stone=0'

test('the real face lines ride byte-exact', () => {
  assert.deepEqual(pulseMapCensus([F467]), { positions: 1220, chunks: 20 })
  assert.deepEqual(pulseMapCensus([F474]), { positions: 1476, chunks: 25 })
  assert.deepEqual(pulseMapCensus([F475]), { positions: 1328, chunks: 27 })
  assert.deepEqual(pulseMapCensus([F478]), { positions: 1163, chunks: 18 })
  assert.deepEqual(pulseMapCensus([F479]), { positions: 1181, chunks: 21 })
  // the living arc (the face's own early pulse - the cells the growth prices)
  assert.deepEqual(pulseMapCensus([F479_EARLY]), { positions: 319, chunks: 9 })
  // the pre-scan skin (the zero lawful)
  assert.deepEqual(pulseMapCensus([ZERO_SKIN]), { positions: 0, chunks: 0 })
})

test('LAST-PRINT-WINS - the last print the freshest read the face held', () => {
  assert.deepEqual(pulseMapCensus([F479_EARLY, F479]), { positions: 1181, chunks: 21 })
  assert.deepEqual(pulseMapCensus([F479, F479_EARLY]), { positions: 319, chunks: 9 })
})

test('the lawful zero - the never-scanned face keeps the healthy-looking zeros', () => {
  assert.deepEqual(pulseMapCensus(['bots=19 spawned=19', 'worldmap: 1181 positions, 21 chunks scanned, top: oak_log=351 sand=280']), { positions: 0, chunks: 0 })
  assert.deepEqual(pulseMapCensus([]), { positions: 0, chunks: 0 })
})

test('the near-miss lanes never ride - the neighbours own their lanes', () => {
  // the report tail's own end mass (the .252 word's own seat)
  assert.deepEqual(pulseMapCensus(['worldmap: 1181 positions, 21 chunks scanned, top: oak_log=351 sand=280 coal_ore=265 copper_ore=146 birch_log=101']), { positions: 0, chunks: 0 })
  // the SHORT skin (smokeread's own lane)
  assert.deepEqual(pulseMapCensus(['worldmap: 5 positions, 2 chunks']), { positions: 0, chunks: 0 })
  // the autosave's own merge line
  assert.deepEqual(pulseMapCensus(['worldmap autosave: merged 40 positions into 1181']), { positions: 0, chunks: 0 })
  // the bot-tagged prefix (the tick never rides it)
  assert.deepEqual(pulseMapCensus(['[F4] t-10s alive=19/19 mined=0 map=5p/2ch banked=0 smelted=0 pocket=0u/0s | sand=0']), { positions: 0, chunks: 0 })
  // the pretty spacing (the emitter never prints it)
  assert.deepEqual(pulseMapCensus(['t-10s alive=19/19 mined=0 map=5 p / 2ch banked=0 smelted=0 pocket=0u/0s | sand=0']), { positions: 0, chunks: 0 })
  // the missing 'p/' boundary
  assert.deepEqual(pulseMapCensus(['t-10s alive=19/19 mined=0 map=5p2ch banked=0 smelted=0 pocket=0u/0s | sand=0']), { positions: 0, chunks: 0 })
  // the missing 'ch' tail
  assert.deepEqual(pulseMapCensus(['t-10s alive=19/19 mined=0 map=5p/2 banked=0 smelted=0 pocket=0u/0s | sand=0']), { positions: 0, chunks: 0 })
  // the leading zero (the .248 house law - the emitter never prints it)
  assert.deepEqual(pulseMapCensus(['t-10s alive=19/19 mined=0 map=05p/2ch banked=0 smelted=0 pocket=0u/0s | sand=0']), { positions: 0, chunks: 0 })
  assert.deepEqual(pulseMapCensus(['t-10s alive=19/19 mined=0 map=5p/02ch banked=0 smelted=0 pocket=0u/0s | sand=0']), { positions: 0, chunks: 0 })
  // the negative count (the sign never rides)
  assert.deepEqual(pulseMapCensus(['t-10s alive=19/19 mined=0 map=-5p/2ch banked=0 smelted=0 pocket=0u/0s | sand=0']), { positions: 0, chunks: 0 })
  // the altered cell (a prose skin the template never printed)
  assert.deepEqual(pulseMapCensus(['t-10s alive=19/19 mined=0 map=about 5 positions / 2 chunks banked=0 smelted=0 pocket=0u/0s | sand=0']), { positions: 0, chunks: 0 })
  // the truncated header (the map cell gone)
  assert.deepEqual(pulseMapCensus(['t-10s alive=19/19 mined=0 banked=0 smelted=0 pocket=0u/0s | sand=0']), { positions: 0, chunks: 0 })
  // the wrong frame (the partial report line)
  assert.deepEqual(pulseMapCensus(['map=5p/2ch']), { positions: 0, chunks: 0 })
})

test('the junk input never crashes the census', () => {
  assert.equal(pulseMapCensus(null), null)
  assert.equal(pulseMapCensus(undefined), null)
  assert.equal(pulseMapCensus('t-10s alive=19/19 mined=0 map=5p/2ch'), null)
  assert.equal(pulseMapCensus(42), null)
  // the non-string lines ride past
  assert.deepEqual(pulseMapCensus([42, null, {}, F479]), { positions: 1181, chunks: 21 })
})

test('the fence every branch - the fold proves itself or prices nothing', () => {
  const ok = { back: { positions: 1220, chunks: 20 }, prev: { positions: 1476, chunks: 25 }, cur: { positions: 1328, chunks: 27 } }
  assert.equal(pulseMapConsistent(ok), true)
  assert.equal(pulseMapConsistent(null), false)
  assert.equal(pulseMapConsistent(undefined), false)
  assert.equal(pulseMapConsistent([ok]), false)
  assert.equal(pulseMapConsistent('fold'), false)
  assert.equal(pulseMapConsistent({ ...ok, prev: null }), false)
  assert.equal(pulseMapConsistent({ ...ok, cur: { positions: 1 } }), false)
  assert.equal(pulseMapConsistent({ back: { positions: 1, chunks: 0 }, prev: { positions: -1, chunks: 0 }, cur: { positions: 1, chunks: 0 } }), false)
  assert.equal(pulseMapConsistent({ back: { positions: 1.5, chunks: 0 }, prev: { positions: 1, chunks: 0 }, cur: { positions: 1, chunks: 0 } }), false)
  assert.equal(pulseMapConsistent({ back: { positions: 0, chunks: 0 }, prev: { positions: 0, chunks: 0 }, cur: { positions: 0, chunks: 0 } }), true)
  // the extra keys never rejected
  assert.equal(pulseMapConsistent({ ...ok, back: { ...ok.back, extra: 'ride' } }), true)
})

test('the fade byte-exact - the knowledge weather ran two steps down (W474-475-478)', () => {
  const row = pulseMapTrendRow({ back: { positions: 1476, chunks: 25 }, prev: { positions: 1328, chunks: 27 }, cur: { positions: 1163, chunks: 18 } })
  assert.equal(row, 'the pulse map trend (v0.976.260): the knowledge weather\'s own fade ran two steps deep - 1476 -> 1328 (-148) -> 1163 (-165) - the positions mass\'s own fade, the chunks rode 25 -> 27 -> 18 (the worldmap tail\'s own end mass keeps the report seat (the .252 word), the maptrip\'s own header parse keeps the trip gap\'s input, the autosave\'s own merge line keeps its own lane - the pulse map\'s row alone, co-existence by seat never by duplication)')
})

test('the swell byte-exact - the scan surge priced', () => {
  const row = pulseMapTrendRow({ back: { positions: 319, chunks: 9 }, prev: { positions: 900, chunks: 15 }, cur: { positions: 1181, chunks: 21 } })
  assert.equal(row, 'the pulse map trend (v0.976.260): the knowledge weather\'s own swell ran two steps deep - 319 -> 900 (+581) -> 1181 (+281) - the positions mass\'s own swell, the chunks rode 9 -> 15 -> 21 (the worldmap tail\'s own end mass keeps the report seat (the .252 word), the maptrip\'s own header parse keeps the trip gap\'s input, the autosave\'s own merge line keeps its own lane - the pulse map\'s row alone, co-existence by seat never by duplication)')
})

test('the swing byte-exact - the fade and the swell traded seats (W467-474-475)', () => {
  const row = pulseMapTrendRow({ back: { positions: 1220, chunks: 20 }, prev: { positions: 1476, chunks: 25 }, cur: { positions: 1328, chunks: 27 } })
  assert.equal(row, 'the pulse map trend (v0.976.260): the knowledge weather\'s own swing - 1220 -> 1476 (+256) -> 1328 (-148) - the fade and the swell traded seats between the faces, the chunks rode 20 -> 25 -> 27 (the worldmap tail\'s own end mass keeps the report seat (the .252 word), the maptrip\'s own header parse keeps the trip gap\'s input, the autosave\'s own merge line keeps its own lane - the pulse map\'s row alone, co-existence by seat never by duplication)')
  // the second real swing (W475-478-479)
  const row2 = pulseMapTrendRow({ back: { positions: 1328, chunks: 27 }, prev: { positions: 1163, chunks: 18 }, cur: { positions: 1181, chunks: 21 } })
  assert.equal(row2, 'the pulse map trend (v0.976.260): the knowledge weather\'s own swing - 1328 -> 1163 (-165) -> 1181 (+18) - the fade and the swell traded seats between the faces, the chunks rode 27 -> 18 -> 21 (the worldmap tail\'s own end mass keeps the report seat (the .252 word), the maptrip\'s own header parse keeps the trip gap\'s input, the autosave\'s own merge line keeps its own lane - the pulse map\'s row alone, co-existence by seat never by duplication)')
})

test('the honest nulls - the held step and the three-face zero and the fence fail', () => {
  // the held first step (no direction - the family's own held law)
  assert.equal(pulseMapTrendRow({ back: { positions: 1181, chunks: 21 }, prev: { positions: 1181, chunks: 21 }, cur: { positions: 1300, chunks: 22 } }), null)
  // the held second step
  assert.equal(pulseMapTrendRow({ back: { positions: 1181, chunks: 21 }, prev: { positions: 1300, chunks: 22 }, cur: { positions: 1300, chunks: 22 } }), null)
  // the three-face zero (the scan never rode the whole arc - the lawful silence)
  assert.equal(pulseMapTrendRow({ back: { positions: 0, chunks: 0 }, prev: { positions: 0, chunks: 0 }, cur: { positions: 0, chunks: 0 } }), null)
  // the fence fail
  assert.equal(pulseMapTrendRow({ back: { positions: 1, chunks: 0 }, prev: { positions: -1, chunks: 0 }, cur: { positions: 1, chunks: 0 } }), null)
  assert.equal(pulseMapTrendRow(null), null)
})

test('the emitter grammar - the fleet19 tick template must stand', () => {
  // the tick line's own map cell template: map=${mapRep.positions}p/${mapRep.chunksScanned}ch
  // (testbed/fleet19.mjs's tick console.log - the census's own seat)
  const tick = (pos, ch) => `t-${Math.max(0, 0).toFixed(0)}s alive=${19}/${19} mined=${0} map=${pos}p/${ch}ch banked=${0} smelted=${0} pocket=${0}u/${0}s | ${'sand=0'}`
  assert.deepEqual(pulseMapCensus([tick(5, 2)]), { positions: 5, chunks: 2 })
  assert.deepEqual(pulseMapCensus([tick(1181, 21)]), { positions: 1181, chunks: 21 })
  // the map cell's own cross-check: the F479 face's last pulse (1181p/21ch)
  // names the same cells the report tail's end read held (the .252 word's
  // own face rode the same numbers - the seats co-exist, the cells distinct)
  assert.deepEqual(pulseMapCensus([F479]), { positions: 1181, chunks: 21 })
})
