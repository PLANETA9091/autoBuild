// (v0.976.252) THE KNOWLEDGE MAP'S OWN END MASS - the word's own pins.
// The real lines ride byte-exact (the field's own faces: F467 run
// 39131684179, F474 run 39160949802, F475 the fire-0442 read's own face).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { worldmapTailCensus, worldmapTailConsistent, worldmapTailTrendRow } from '../../src/lib/worldmaptailtrend.mjs'

// the REAL face lines (the cached faces' own bytes)
const F467 = 'worldmap: 1220 positions, 20 chunks scanned, top: sand=387 oak_log=232 coal_ore=205 copper_ore=152 gravel=102'
const F474 = 'worldmap: 1476 positions, 25 chunks scanned, top: sand=521 coal_ore=359 copper_ore=213 oak_log=185 gravel=98'
const F475 = 'worldmap: 1328 positions, 27 chunks scanned, top: sand=402 oak_log=328 coal_ore=196 gravel=132 copper_ore=120'

test('the real face lines ride byte-exact', () => {
  assert.deepEqual(worldmapTailCensus([F467]), { positions: 1220, chunks: 20 })
  assert.deepEqual(worldmapTailCensus([F474]), { positions: 1476, chunks: 25 })
  assert.deepEqual(worldmapTailCensus([F475]), { positions: 1328, chunks: 27 })
  // single-pair top skin (the emitter's own minimal shape)
  assert.deepEqual(worldmapTailCensus(['worldmap: 5 positions, 2 chunks scanned, top: sand=7']), { positions: 5, chunks: 2 })
})

test('LAST-PRINT-WINS - the last print the freshest state the face held', () => {
  assert.deepEqual(worldmapTailCensus([F474, F475]), { positions: 1328, chunks: 27 })
  assert.deepEqual(worldmapTailCensus([F475, F474]), { positions: 1476, chunks: 25 })
})

test('the lawful zero - the never-scanned face keeps the healthy-looking zeros', () => {
  assert.deepEqual(worldmapTailCensus(['bots=19 spawned=19', 'plan progress: 2/31 resources complete']), { positions: 0, chunks: 0 })
  assert.deepEqual(worldmapTailCensus([]), { positions: 0, chunks: 0 })
})

test('the near-miss lanes never ride - the neighbours own their lanes', () => {
  // the autosave's own merge line (the maptrip.test's own named lane)
  assert.deepEqual(worldmapTailCensus(['[worldmap] autosave: merged 12 from disk, 1130 positions on file']), { positions: 0, chunks: 0 })
  // the pulse's own map cell (the periodic pulse's own frame)
  assert.deepEqual(worldmapTailCensus(['t-0s alive=19/19 mined=1625 map=1328p/27ch banked=228 smelted=16 pocket=1152u/193s | sand=23 gravel=1 dirt=190 stone=1']), { positions: 0, chunks: 0 })
  // the SHORT skin (the smokeread.mjs module's own lane)
  assert.deepEqual(worldmapTailCensus(['worldmap: 1130 positions, 17 chunks']), { positions: 0, chunks: 0 })
  // the bot-tagged prefix
  assert.deepEqual(worldmapTailCensus(['F6 [F6] worldmap: 5 positions, 2 chunks scanned, top: sand=7']), { positions: 0, chunks: 0 })
  // the missing boundary (no ' scanned')
  assert.deepEqual(worldmapTailCensus(['worldmap: 5 positions, 2 chunks top: sand=7']), { positions: 0, chunks: 0 })
  // the missing top
  assert.deepEqual(worldmapTailCensus(['worldmap: 5 positions, 2 chunks scanned']), { positions: 0, chunks: 0 })
  // the truncated top (the boundary present, the pairs absent)
  assert.deepEqual(worldmapTailCensus(['worldmap: 5 positions, 2 chunks scanned, top:']), { positions: 0, chunks: 0 })
  // the junk after the pairs
  assert.deepEqual(worldmapTailCensus(['worldmap: 5 positions, 2 chunks scanned, top: sand=7 junk here']), { positions: 0, chunks: 0 })
  // the junk count cell
  assert.deepEqual(worldmapTailCensus(['worldmap: 5 positions, 2 chunks scanned, top: sand=x']), { positions: 0, chunks: 0 })
  // the leading zero (the .248 house law)
  assert.deepEqual(worldmapTailCensus(['worldmap: 01 positions, 2 chunks scanned, top: sand=7']), { positions: 0, chunks: 0 })
  assert.deepEqual(worldmapTailCensus(['worldmap: 5 positions, 02 chunks scanned, top: sand=7']), { positions: 0, chunks: 0 })
  // the negative count
  assert.deepEqual(worldmapTailCensus(['worldmap: -5 positions, 2 chunks scanned, top: sand=7']), { positions: 0, chunks: 0 })
  // the altered prose
  assert.deepEqual(worldmapTailCensus(['worldmap: 5 positions, 2 chunks scan, top: sand=7']), { positions: 0, chunks: 0 })
  assert.deepEqual(worldmapTailCensus(['worldmap: 5 position, 2 chunks scanned, top: sand=7']), { positions: 0, chunks: 0 })
  // the wrong frame entirely
  assert.deepEqual(worldmapTailCensus(['pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=1 stone=2 iron=3']), { positions: 0, chunks: 0 })
  // the junk inputs
  assert.deepEqual(worldmapTailCensus([null, undefined, 42, {}]), { positions: 0, chunks: 0 })
})

test('the census guard - the input itself not an array reads null', () => {
  assert.equal(worldmapTailCensus(null), null)
  assert.equal(worldmapTailCensus(undefined), null)
  assert.equal(worldmapTailCensus('worldmap: 5 positions, 2 chunks scanned, top: sand=7'), null)
  assert.equal(worldmapTailCensus(42), null)
})

test('the fence - every branch', () => {
  const ok = { back: { positions: 1, chunks: 1 }, prev: { positions: 2, chunks: 2 }, cur: { positions: 3, chunks: 3 } }
  assert.equal(worldmapTailConsistent(ok), true)
  // the zero lawful - the never-scanned face
  assert.equal(worldmapTailConsistent({ back: { positions: 0, chunks: 0 }, prev: { positions: 0, chunks: 0 }, cur: { positions: 0, chunks: 0 } }), true)
  // extra keys never rejected
  assert.equal(worldmapTailConsistent({ ...ok, extra: 'rides' }), true)
  // the missing face
  assert.equal(worldmapTailConsistent({ back: { positions: 1, chunks: 1 }, prev: { positions: 2, chunks: 2 } }), false)
  // the negative cell
  assert.equal(worldmapTailConsistent({ ...ok, cur: { positions: -1, chunks: 3 } }), false)
  // the non-integer cell
  assert.equal(worldmapTailConsistent({ ...ok, cur: { positions: 1.5, chunks: 3 } }), false)
  // the junk folds
  assert.equal(worldmapTailConsistent(null), false)
  assert.equal(worldmapTailConsistent(undefined), false)
  assert.equal(worldmapTailConsistent([ok]), false)
  assert.equal(worldmapTailConsistent('fold'), false)
})

test('the row shapes - swell/fade/swing byte-exact', () => {
  const swell = worldmapTailTrendRow({ back: { positions: 100, chunks: 10 }, prev: { positions: 200, chunks: 20 }, cur: { positions: 300, chunks: 30 } })
  assert.equal(swell, "the worldmap tail trend (v0.976.252): the knowledge's own swell ran two steps deep - 100 -> 200 (+100) -> 300 (+100) - the positions mass's own swell, the chunks rode 10 -> 20 -> 30 (the map trip lane keeps its own seat, the pulse's own map cell keeps its own lane, the autosave's own merge line keeps its own lane, the plan progress's own completion census keeps the .238 word's seat - the worldmap tail's row alone, co-existence by seat never by duplication)")
  const fade = worldmapTailTrendRow({ back: { positions: 300, chunks: 30 }, prev: { positions: 200, chunks: 20 }, cur: { positions: 100, chunks: 10 } })
  assert.equal(fade, "the worldmap tail trend (v0.976.252): the knowledge's own fade ran two steps deep - 300 -> 200 (-100) -> 100 (-100) - the positions mass's own fade, the chunks rode 30 -> 20 -> 10 (the map trip lane keeps its own seat, the pulse's own map cell keeps its own lane, the autosave's own merge line keeps its own lane, the plan progress's own completion census keeps the .238 word's seat - the worldmap tail's row alone, co-existence by seat never by duplication)")
  const swing = worldmapTailTrendRow({ back: { positions: 100, chunks: 10 }, prev: { positions: 300, chunks: 20 }, cur: { positions: 200, chunks: 30 } })
  assert.equal(swing, "the worldmap tail trend (v0.976.252): the knowledge's own swing - 100 -> 300 (+200) -> 200 (-100) - the fade and the swell traded seats between the faces, the chunks rode 10 -> 20 -> 30 (the map trip lane keeps its own seat, the pulse's own map cell keeps its own lane, the autosave's own merge line keeps its own lane, the plan progress's own completion census keeps the .238 word's seat - the worldmap tail's row alone, co-existence by seat never by duplication)")
})

test('the honest nulls - the held step and the three-face zero', () => {
  // a held step prices no direction
  assert.equal(worldmapTailTrendRow({ back: { positions: 100, chunks: 1 }, prev: { positions: 100, chunks: 2 }, cur: { positions: 300, chunks: 3 } }), null)
  assert.equal(worldmapTailTrendRow({ back: { positions: 100, chunks: 1 }, prev: { positions: 300, chunks: 2 }, cur: { positions: 300, chunks: 3 } }), null)
  // the three-face zero - the map never rode the whole arc
  assert.equal(worldmapTailTrendRow({ back: { positions: 0, chunks: 0 }, prev: { positions: 0, chunks: 0 }, cur: { positions: 0, chunks: 0 } }), null)
  // the fence keeps the lie out
  assert.equal(worldmapTailTrendRow({ back: { positions: 1, chunks: 1 } }), null)
  assert.equal(worldmapTailTrendRow(null), null)
})

test('THE FIELD WINDOW - W474 the real arc 467->474->475 prices the swing', () => {
  const row = worldmapTailTrendRow({
    back: worldmapTailCensus([F467]),
    prev: worldmapTailCensus([F474]),
    cur: worldmapTailCensus([F475])
  })
  assert.equal(row, "the worldmap tail trend (v0.976.252): the knowledge's own swing - 1220 -> 1476 (+256) -> 1328 (-148) - the fade and the swell traded seats between the faces, the chunks rode 20 -> 25 -> 27 (the map trip lane keeps its own seat, the pulse's own map cell keeps its own lane, the autosave's own merge line keeps its own lane, the plan progress's own completion census keeps the .238 word's seat - the worldmap tail's row alone, co-existence by seat never by duplication)")
})

test('the emitter grammar - the fleet19 template must stand', () => {
  // the emitter's own join shape: `worldmap: ${p} positions, ${c} chunks scanned, top: ${pairs.join(' ')}`
  // - the census's RE must accept the template's exact output shape
  const templateLine = (p, c, pairs) => `worldmap: ${p} positions, ${c} chunks scanned, top: ${pairs.map(([n, k]) => `${n}=${k}`).join(' ')}`
  for (const line of [
    templateLine(1, 1, [['sand', 1]]),
    templateLine(1476, 25, [['sand', 521], ['coal_ore', 359], ['copper_ore', 213], ['oak_log', 185], ['gravel', 98]]),
    templateLine(1328, 27, [['sand', 402], ['oak_log', 328], ['coal_ore', 196], ['gravel', 132], ['copper_ore', 120]])
  ]) {
    assert.deepEqual(worldmapTailCensus([line]) !== null, true, `template line must ride: ${line}`)
  }
})
