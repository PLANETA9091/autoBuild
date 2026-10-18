// (v0.976.248) THE MATERIALS DUMP'S OWN STOCKPILE MASS - the tests.
// The F473 face's own read (run 39156167132, the 505daabe tree) the
// fieldproof prices: kinds=20 units=1860 top=stone=778; the swell
// triangle 466->467->468 rode 1707 -> 2252 (+545) -> 2572 (+320); the
// swing triangle 467->468->473 rode 2252 -> 2572 (+320) -> 1860 (-712).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { materialsDumpCensus, materialsDumpTrendConsistent, materialsDumpTrendRow } from '../../src/lib/materialsdumptrend.mjs'

const F473 = 'materials: {"oak_log":159,"grass_block":93,"dirt":289,"stone":778,"granite":30,"birch_log":50,"cobblestone":15,"sand":19,"coal_ore":104,"iron_ore":20,"andesite":80,"copper_ore":28,"diorite":99,"birch_leaves":25,"oak_leaves":55,"gravel":5,"sandstone":8,"crafting_table":1,"lapis_ore":1,"smooth_stone":1}'
const F466 = 'materials: {"oak_log":182,"grass_block":90,"dirt":333,"diorite":106,"coal_ore":98,"birch_leaves":77,"oak_leaves":94,"birch_log":55,"stone":463,"copper_ore":28,"sand":119,"iron_ore":5,"granite":25,"sandstone":23,"cobblestone":3,"crafting_table":4,"andesite":1,"clay":1}'
const F467 = 'materials: {"birch_log":45,"oak_log":168,"stone":976,"dirt":256,"granite":170,"gravel":39,"sand":104,"grass_block":68,"oak_leaves":28,"coal_ore":63,"andesite":89,"copper_ore":43,"iron_ore":16,"birch_leaves":6,"diorite":138,"cobblestone":6,"lapis_ore":2,"sandstone":32,"smooth_stone":2,"crafting_table":1}'
const F468 = 'materials: {"oak_log":249,"grass_block":106,"dirt":337,"stone":1134,"diorite":144,"coal_ore":92,"birch_log":44,"granite":85,"iron_ore":11,"andesite":71,"oak_leaves":33,"sand":129,"gravel":58,"crafting_table":1,"copper_ore":34,"cobblestone":3,"sandstone":26,"chest":2,"smooth_stone":11,"stone_bricks":2}'

test('01 the F473 dump line rides byte-exact - the stockpile mass the fieldproof prices', () => {
  const c = materialsDumpCensus(['noise before', F473, 'noise after'])
  assert.deepEqual(c, { kinds: 20, units: 1860, topUnits: 778 })
})

test('02 the mass sums every dump - the empty-object skin the lawful zero holds', () => {
  // the empty skin votes zero, the F466 dump rides beside it
  const c = materialsDumpCensus(['materials: {}', F466])
  assert.deepEqual(c, { kinds: 18, units: 1707, topUnits: 463 })
  // the F466 line alone
  const s = materialsDumpCensus([F466])
  assert.deepEqual(s, { kinds: 18, units: 1707, topUnits: 463 })
  // the empty skin alone - the zero speaks
  const z = materialsDumpCensus(['materials: {}'])
  assert.deepEqual(z, { kinds: 0, units: 0, topUnits: 0 })
})

test('03 the near-miss lanes never ride', () => {
  const probes = [
    'materials plan: 31 resources the base needs',           // the .238 header prose
    'plan progress: 1/31 resources complete',                // the .238 seat
    '  plan top: sand 11/157926 (0.007%) ...',               // the plantop lane
    'materials: { "oak_log": 159, "stone": 778 }',           // the pretty skin
    'materials: {"oak_log":159,"stone":778',                 // the truncated tail
    'materials: {"oak_log":159,"stone":778}',                // ok line, kept
    'materials: ["oak_log",159]',                            // the array skin
    'materials: {"Oak_Log":159}',                            // the upper-case keys
    'materials: {"oak_log":-159}',                           // the negative value
    'materials: {"oak_log":15.9}',                           // the dotted value
    'materials:{"oak_log":159}',                             // the missing space
    'material: {"oak_log":159}',                             // the altered frame
    'materials: {"oak_log":0159}',                           // the leading zero
    'materials: {}extra'                                     // the trailing junk
  ]
  const c = materialsDumpCensus(probes)
  assert.deepEqual(c, { kinds: 2, units: 937, topUnits: 778 })
})

test('04 the fence - every branch', () => {
  const ok = { back: { kinds: 18, units: 1707, topUnits: 463 }, prev: { kinds: 20, units: 2252, topUnits: 976 }, cur: { kinds: 20, units: 2572, topUnits: 1134 } }
  assert.equal(materialsDumpTrendConsistent(ok), true)
  assert.equal(materialsDumpTrendConsistent(null), false)
  assert.equal(materialsDumpTrendConsistent(undefined), false)
  assert.equal(materialsDumpTrendConsistent(42), false)
  assert.equal(materialsDumpTrendConsistent([ok.back, ok.prev, ok.cur]), false)
  assert.equal(materialsDumpTrendConsistent({ ...ok, prev: null }), false)
  assert.equal(materialsDumpTrendConsistent({ ...ok, cur: { kinds: 1, units: 2 } }), false)
  assert.equal(materialsDumpTrendConsistent({ ...ok, back: { kinds: -1, units: 0, topUnits: 0 } }), false)
  assert.equal(materialsDumpTrendConsistent({ ...ok, prev: { kinds: 1.5, units: 0, topUnits: 0 } }), false)
  // the zero face lawful, extra keys never rejected
  const z = { back: { kinds: 0, units: 0, topUnits: 0, extra: 'rides' }, prev: ok.prev, cur: ok.cur }
  assert.equal(materialsDumpTrendConsistent(z), true)
})

test('05 the swell - byte-exact (F466 -> F467 -> F468)', () => {
  const row = materialsDumpTrendRow({
    back: materialsDumpCensus([F466]),
    prev: materialsDumpCensus([F467]),
    cur: materialsDumpCensus([F468])
  })
  assert.equal(row, 'the materials dump trend (v0.976.248): the stockpile\'s own swell ran two steps deep - 1707 -> 2252 (+545) -> 2572 (+320) - the units mass\'s own swell, the width rode 18 -> 20 -> 20, the peak rode 463 -> 976 -> 1134 (the plan progress trend prices the plan\'s own completion fraction across the faces, the materials plan header the deficit row\'s own lane prices, the plan top the plantoptrend\'s own lane prices, the map trip the maptrip\'s own seat prices, the loot ledger the final report\'s own banked read prices - the materials dump\'s mass row alone, co-existence by seat never by duplication)')
})

test('06 the swing - byte-exact (F467 -> F468 -> F473)', () => {
  const row = materialsDumpTrendRow({
    back: materialsDumpCensus([F467]),
    prev: materialsDumpCensus([F468]),
    cur: materialsDumpCensus([F473])
  })
  assert.equal(row, 'the materials dump trend (v0.976.248): the units mass\'s own swing - 2252 -> 2572 (+320) -> 1860 (-712) - the fade and the swell traded seats between the faces, the width rode 20 -> 20 -> 20, the peak rode 976 -> 1134 -> 778 (the plan progress trend prices the plan\'s own completion fraction across the faces, the materials plan header the deficit row\'s own lane prices, the plan top the plantoptrend\'s own lane prices, the map trip the maptrip\'s own seat prices, the loot ledger the final report\'s own banked read prices - the materials dump\'s mass row alone, co-existence by seat never by duplication)')
})

test('07 the fade - byte-exact, and the held steps the honest nulls keep', () => {
  const fade = materialsDumpTrendRow({ back: { kinds: 20, units: 3000, topUnits: 1000 }, prev: { kinds: 20, units: 2000, topUnits: 800 }, cur: { kinds: 20, units: 1000, topUnits: 600 } })
  assert.match(fade, /^the materials dump trend \(v0\.976\.248\): the stockpile's own fade ran two steps deep - 3000 -> 2000 \(-1000\) -> 1000 \(-1000\)/)
  // a held step - no direction, the honest silence
  assert.equal(materialsDumpTrendRow({ back: { kinds: 0, units: 0, topUnits: 0 }, prev: { kinds: 0, units: 0, topUnits: 0 }, cur: { kinds: 0, units: 0, topUnits: 0 } }), null)
  assert.equal(materialsDumpTrendRow({ back: { kinds: 5, units: 100, topUnits: 50 }, prev: { kinds: 5, units: 100, topUnits: 50 }, cur: { kinds: 5, units: 200, topUnits: 60 } }), null)
  assert.equal(materialsDumpTrendRow({ back: { kinds: 5, units: 100, topUnits: 50 }, prev: { kinds: 5, units: 200, topUnits: 60 }, cur: { kinds: 5, units: 200, topUnits: 60 } }), null)
  assert.equal(materialsDumpTrendRow(null), null)
})

test('08 the emitter grammar the fleet19 template must stand', () => {
  // JSON.stringify's compact law: the key order preserved, no spaces,
  // the parse round-trip the census reads
  const byName = { oak_log: 159, stone: 778, clay: 1 }
  const line = `materials: ${JSON.stringify(byName)}`
  assert.equal(line, 'materials: {"oak_log":159,"stone":778,"clay":1}')
  assert.deepEqual(materialsDumpCensus([line]), { kinds: 3, units: 938, topUnits: 778 })
  // the zero count the byName histogram may hold - the pair rides
  const z = `materials: ${JSON.stringify({ oak_log: 0 })}`
  assert.deepEqual(materialsDumpCensus([z]), { kinds: 1, units: 0, topUnits: 0 })
  // junk lines the census never dies on
  assert.deepEqual(materialsDumpCensus(null), null)
  assert.deepEqual(materialsDumpCensus([undefined, 42, null]), { kinds: 0, units: 0, topUnits: 0 })
  assert.deepEqual(materialsDumpCensus([]), { kinds: 0, units: 0, topUnits: 0 })
})

test('09 the SERIES the field recorded - the four-face arc the cached faces hold', () => {
  const faces = [F466, F467, F468, F473].map(l => materialsDumpCensus([l]))
  const units = faces.map(f => f.units)
  const kinds = faces.map(f => f.kinds)
  const peaks = faces.map(f => f.topUnits)
  assert.deepEqual(units, [1707, 2252, 2572, 1860])
  assert.deepEqual(kinds, [18, 20, 20, 20])
  assert.deepEqual(peaks, [463, 976, 1134, 778])
  // the two windows the row prices: 466->468 the swell, 467->473 the swing
  const swell = materialsDumpTrendRow({ back: faces[0], prev: faces[1], cur: faces[2] })
  const swing = materialsDumpTrendRow({ back: faces[1], prev: faces[2], cur: faces[3] })
  assert.match(swell, /the stockpile's own swell ran two steps deep/)
  assert.match(swing, /the units mass's own swing/)
})
