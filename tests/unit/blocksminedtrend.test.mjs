// (v0.976.247) THE BLOCKS MINED'S OWN PRODUCTIVITY METER - the word's own
// pins. THE EVIDENCE (the F473 face's own read, the run 39156167132 the
// .245 tree rode): the final report prints 'blocks mined: 1860 in ~600s =
// 3.10 blocks/s (186/min)' (the fleet's own productivity meter, one print
// per face) and no book owned the mass - the loot ledger's own accounting
// prices where the yield ended up, the map coverage's own top prices the
// scanned mass, the final body's own survivor mass prices the roster -
// the mined mass itself rode unread (the F473 face held 1860 blocks at
// 3.10/s).
// The pins: the census parse byte-exact (the F473 line whole, the
// 300s-class window cell, the LAST-PRINT-WINS law, the near-miss lanes'
// refusal incl. the forged arithmetic, the junk laws), the fence (every
// honest branch, the junk laws), the row (the swell / the fade / the
// swing byte-exact, the held step's honest null, the three-face zero's
// lawful null, the junk fold's null), the F473 face's own report block
// re-speaks the census whole and the emitter grammar (the fleet19
// template the word parses is the line the fleet prints - the
// deliberate-miss law: a near-miss census voice never rides).
import { test } from 'node:test'
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { blocksMinedCensus, blocksMinedTrendConsistent, blocksMinedTrendRow } from '../../src/lib/blocksminedtrend.mjs'

const TAIL = "(the loot ledger's own accounting prices the banked mass's own yield across the faces, the map coverage's own top prices the scanned mass's own census across the faces, the final body's own survivor mass keeps the roster's alive cell across the faces - the blocks mined's mass row alone, co-existence by seat never by duplication)"

test('the census: the F473 line rides whole (byte-exact shape)', () => {
  const c = blocksMinedCensus([
    'blocks mined: 1860 in ~600s = 3.10 blocks/s (186/min)'
  ])
  assert.deepEqual(c, { mined: 1860, secs: 600, bps: 310, permin: 186 })
})

test('the census: the 300s-class face rides whole (the window cell)', () => {
  // the 300s-class face the bank-census fixture's own log carries: the
  // window cell the face's own deadline holds, the meter the same law
  // rides (1011/300 = 3.37, the per-min tail 202 the minute rounding
  // holds)
  const c = blocksMinedCensus([
    'blocks mined: 1011 in ~300s = 3.37 blocks/s (202/min)'
  ])
  assert.deepEqual(c, { mined: 1011, secs: 300, bps: 337, permin: 202 })
})

test('the census: LAST-PRINT-WINS (the last print the freshest state holds)', () => {
  const c = blocksMinedCensus([
    'blocks mined: 1200 in ~600s = 2.00 blocks/s (120/min)',
    'blocks mined: 1860 in ~600s = 3.10 blocks/s (186/min)'
  ])
  assert.deepEqual(c, { mined: 1860, secs: 600, bps: 310, permin: 186 })
})

test('the census: near-misses and junk never ride', () => {
  // the bot-tagged prefix never rides (the fleet-level frame's own law)
  assert.deepEqual(blocksMinedCensus(['F6 [F6] blocks mined: 1860 in ~600s = 3.10 blocks/s (186/min)']), { mined: 0, secs: 0, bps: 0, permin: 0 })
  // the truncated tail never rides
  assert.deepEqual(blocksMinedCensus(['blocks mined: 1860 in ~600s = 3.10 blocks/s']), { mined: 0, secs: 0, bps: 0, permin: 0 })
  assert.deepEqual(blocksMinedCensus(['blocks mined: 1860 in ~600s']), { mined: 0, secs: 0, bps: 0, permin: 0 })
  // the one-decimal rate never rides (the emitter's own two-decimal print)
  assert.deepEqual(blocksMinedCensus(['blocks mined: 1860 in ~600s = 3.1 blocks/s (186/min)']), { mined: 0, secs: 0, bps: 0, permin: 0 })
  // the missing '~' never rides
  assert.deepEqual(blocksMinedCensus(['blocks mined: 1860 in 600s = 3.10 blocks/s (186/min)']), { mined: 0, secs: 0, bps: 0, permin: 0 })
  // the altered unit prose never rides
  assert.deepEqual(blocksMinedCensus(['blocks mined: 1860 in ~600s = 3.10 block/s (186/min)']), { mined: 0, secs: 0, bps: 0, permin: 0 })
  // the forged rate never rides (the emitter's own arithmetic the census
  // holds - 1860/600 prints 3.10, never 9.99)
  assert.deepEqual(blocksMinedCensus(['blocks mined: 1860 in ~600s = 9.99 blocks/s (186/min)']), { mined: 0, secs: 0, bps: 0, permin: 0 })
  // the forged per-min tail never rides (1500/600 rounds to 150, never 999)
  assert.deepEqual(blocksMinedCensus(['blocks mined: 1500 in ~600s = 2.50 blocks/s (999/min)']), { mined: 0, secs: 0, bps: 0, permin: 0 })
  // junk-safe: the empty and non-string faces hold the lawful zero, the
  // non-array junk prices null (the family's own law the census rides)
  assert.deepEqual(blocksMinedCensus([]), { mined: 0, secs: 0, bps: 0, permin: 0 })
  assert.equal(blocksMinedCensus(null), null)
  assert.equal(blocksMinedCensus('blocks mined: 1860 in ~600s = 3.10 blocks/s (186/min)'), null)
  assert.deepEqual(blocksMinedCensus([42, {}]), { mined: 0, secs: 0, bps: 0, permin: 0 })
})

test('the fence: every honest branch and every junk law rides', () => {
  const face = { mined: 1860, secs: 600, bps: 310, permin: 186 }
  assert.equal(blocksMinedTrendConsistent({ back: face, prev: face, cur: face }), true)
  // zero counts are lawful (the meter-never-printed face the fence keeps)
  const zero = { mined: 0, secs: 0, bps: 0, permin: 0 }
  assert.equal(blocksMinedTrendConsistent({ back: zero, prev: zero, cur: zero }), true)
  // extra keys never rejected (the family's own extra-keys law)
  assert.equal(blocksMinedTrendConsistent({ back: { ...face, note: 'x' }, prev: face, cur: face }), true)
  // the junk laws: the null face, the missing face, the non-integer, the negative
  assert.equal(blocksMinedTrendConsistent(null), false)
  assert.equal(blocksMinedTrendConsistent({}), false)
  assert.equal(blocksMinedTrendConsistent({ back: face, prev: face }), false)
  assert.equal(blocksMinedTrendConsistent({ back: face, prev: { mined: 1.5, secs: 0, bps: 0, permin: 0 }, cur: face }), false)
  assert.equal(blocksMinedTrendConsistent({ back: face, prev: { mined: -1, secs: 0, bps: 0, permin: 0 }, cur: face }), false)
  assert.equal(blocksMinedTrendConsistent({ back: 'x', prev: face, cur: face }), false)
  assert.equal(blocksMinedTrendConsistent([face, face, face]), false)
})

test('the row: the swell and the fade byte-exact', () => {
  const swell = blocksMinedTrendRow({ back: { mined: 1200, secs: 600, bps: 200, permin: 120 }, prev: { mined: 1500, secs: 600, bps: 250, permin: 150 }, cur: { mined: 1860, secs: 600, bps: 310, permin: 186 } })
  assert.equal(swell, 'the blocks mined trend (v0.976.247): the dig mass\'s own swell ran two steps deep - 1200 -> 1500 (+300) -> 1860 (+360) - the mined mass\'s own swell, the rate rode 2.00 -> 2.50 -> 3.10, the window rode 600 -> 600 -> 600 ' + TAIL)
  const fade = blocksMinedTrendRow({ back: { mined: 1860, secs: 600, bps: 310, permin: 186 }, prev: { mined: 1500, secs: 600, bps: 250, permin: 150 }, cur: { mined: 900, secs: 300, bps: 300, permin: 180 } })
  assert.equal(fade, 'the blocks mined trend (v0.976.247): the dig mass\'s own fade ran two steps deep - 1860 -> 1500 (-360) -> 900 (-600) - the mined mass\'s own fade, the rate rode 3.10 -> 2.50 -> 3.00, the window rode 600 -> 600 -> 300 ' + TAIL)
})

test('the row: the swing rides, the held step is the honest null', () => {
  const swing = blocksMinedTrendRow({ back: { mined: 1860, secs: 600, bps: 310, permin: 186 }, prev: { mined: 1200, secs: 600, bps: 200, permin: 120 }, cur: { mined: 1500, secs: 600, bps: 250, permin: 150 } })
  assert.equal(swing, 'the blocks mined trend (v0.976.247): the mined mass\'s own swing - 1860 -> 1200 (-660) -> 1500 (+300) - the fade and the swell traded seats between the faces, the rate rode 3.10 -> 2.00 -> 2.50, the window rode 600 -> 600 -> 600 ' + TAIL)
  // a held step prices no direction (the family's own held law)
  assert.equal(blocksMinedTrendRow({ back: { mined: 1200, secs: 600, bps: 200, permin: 120 }, prev: { mined: 1500, secs: 600, bps: 250, permin: 150 }, cur: { mined: 1500, secs: 600, bps: 250, permin: 150 } }), null)
  assert.equal(blocksMinedTrendRow({ back: { mined: 1500, secs: 600, bps: 250, permin: 150 }, prev: { mined: 1500, secs: 600, bps: 250, permin: 150 }, cur: { mined: 1860, secs: 600, bps: 310, permin: 186 } }), null)
  // the three-face zero mass prices nothing (the meter never printed)
  const zero = { mined: 0, secs: 0, bps: 0, permin: 0 }
  assert.equal(blocksMinedTrendRow({ back: zero, prev: zero, cur: zero }), null)
  // the junk fold prices null (the fence's own law the row inherits)
  assert.equal(blocksMinedTrendRow(null), null)
  assert.equal(blocksMinedTrendRow({}), null)
})

test('the F473 face the word\'s own read re-speaks (the report block whole)', () => {
  // the F473 face's own final-report block (the run 39156167132 the
  // .245 tree rode): the meter line rides among its neighbours - the
  // census the face holds: mined 1860, the window 600, the rate 3.10,
  // the per-min 186; the face's own neighbour lines the near-miss law
  // keeps out (the server guard and the pickaxe tiers and the loot
  // ledger lines the log carries)
  const lines = [
    'server guard: losses=0 (window 0/10) relogins=20 probe=n/a dead=no revives=0 restarts=0',
    'pickaxe tiers at end: wooden_pickaxe,stone_pickaxe,iron_pickaxe -> wooden=22 stone=4 iron=0',
    'blocks mined: 1860 in ~600s = 3.10 blocks/s (186/min)',
    'loot ledger: mined=1860 banked=427 smelted=1 pocket=986u/152s accounted=1414 unaccounted=446 surplus=0u conversion=76.0%'
  ]
  const c = blocksMinedCensus(lines)
  assert.deepEqual(c, { mined: 1860, secs: 600, bps: 310, permin: 186 })
  // the F473 -> the next face's own row the fold prices: the mass held
  // into the next face the honest null prices (the two-step shape the
  // family keeps: the second leg 0 - no direction)
  const row = blocksMinedTrendRow({ back: { mined: 1200, secs: 600, bps: 200, permin: 120 }, prev: c, cur: c })
  assert.ok(row === null, 'the held step the honest null prices')
})

test('the emitter grammar: the fleet template the word parses rides the fleet\'s own print', () => {
  // the word parses the line the fleet ALREADY prints (the census guard's
  // own law: zero fleet wiring, zero new fleet log lines) - the emitter's
  // own shape the fleet19 source holds must stay the grammar the census
  // parses (the deliberate-miss law: the parse never forks a second voice)
  const fleetSrc = readFileSync(new URL('../../testbed/fleet19.mjs', import.meta.url), 'utf8')
  assert.ok(fleetSrc.includes('blocks mined: ${s.mined} in ~${secs}s = ${(s.mined / secs).toFixed(2)} blocks/s (${((s.mined / secs) * 60).toFixed(0)}/min)'), 'the fleet19 blocks mined emitter the word parses must stand')
})
