// (v0.974.9) THE VALVE MARGIN LENS - unit pins. The floors ride the code's
// own constants (ALLOC_VALVE_FLOOR_MB_DEFAULT from allocvalve.mjs,
// STORM_FLOOR_MB_DEFAULT from stormguard.mjs - imported, never
// re-declared); the gauges ride memhb.mjs's own MEM_HB_RE (one parser one
// truth). THE FLOOR FICTION LESSON pinned here: the worklogs priced three
// fires of 'closest approach' against a 600M number that lives only in
// stale doc comments (the pre-v0.115.0 floor) - 592M is 142M PAST the live
// 450M arm, not 8M under a 600M floor.

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { valveMarginJoin, VALVE_MARGIN_THIN_M } from '../../src/lib/valvemargin.mjs'
import { ALLOC_VALVE_FLOOR_MB_DEFAULT } from '../../src/lib/allocvalve.mjs'
import { STORM_FLOOR_MB_DEFAULT } from '../../src/lib/stormguard.mjs'
import { MEM_HB_RE } from '../../src/lib/memhb.mjs'

const mem = (rss, heapUsed = 120, heapLimit = 162) =>
  `   mem: heap=${heapUsed}M/${heapLimit}M old=103M ext=151M ab=148M rss=${rss}M cols=0 ents=0 evicted=0 path=4a/0q (max 6) stale=0`
const pulseGauge = (n, ts) => `[F1] b] n=${n} ts=${ts}s rss=200M late=5ms mainLate=120ms`

test('junk battery: non-array input reads null', () => {
  assert.equal(valveMarginJoin(null), null)
  assert.equal(valveMarginJoin(undefined), null)
  assert.equal(valveMarginJoin(42), null)
  assert.equal(valveMarginJoin('lines'), null)
  assert.equal(valveMarginJoin({ length: 3 }), null)
})

test('the honest silence: a face with no mem gauges reads null', () => {
  assert.equal(valveMarginJoin([]), null)
  assert.equal(valveMarginJoin([pulseGauge(1, 10), 'F1 [F1] error: write ECONNRESET', 'junk line']), null)
  assert.equal(valveMarginJoin([42, null, {}]), null)
})

test('the -1 sentinel line is not a reading (MEM_HB_RE cells are \\d+ - the honest unknown prices nothing)', () => {
  assert.equal(MEM_HB_RE.test('   mem: heap=133M/162M old=103M ext=151M ab=148M rss=-1M cols=0 ents=0 evicted=0 path=4a/0q (max 6) stale=0'), false)
  assert.equal(valveMarginJoin(['   mem: heap=133M/162M old=103M ext=151M ab=148M rss=-1M cols=0 ents=0 evicted=0 path=4a/0q (max 6) stale=0']), null)
})

test('the floor holds wide: the healthy band (run53 rss 367M) reads its margin', () => {
  const r = valveMarginJoin([mem(367), mem(375), mem(383)])
  assert.equal(r.n, 3)
  assert.equal(r.peak, 383)
  assert.equal(r.marginValve, 67)
  assert.equal(r.overValve, 0)
  assert.equal(r.overValveCells, 0)
  assert.equal(r.verdict, 'the valve floor holds - rss peak 383M, 67M under the 450M valve floor')
})

test('the thin tier: 40M of headroom reads the thin-approach words', () => {
  const r = valveMarginJoin([mem(410)])
  assert.equal(r.marginValve, 40)
  assert.equal(r.marginValve <= r.thinM, true)
  assert.equal(r.verdict, 'the valve floor holds thin - rss peak 410M, 40M under the 450M valve floor - the thin-approach class')
})

test('FACE 271 REAL-layout compact: peak 592M rides 142M PAST the live 450M arm (the floor-fiction correction pinned)', () => {
  const lines = [mem(418), mem(258), mem(592), mem(301), pulseGauge(1, 10)]
  const r = valveMarginJoin(lines)
  assert.equal(r.n, 4)
  assert.equal(r.peak, 592)
  assert.equal(r.valveFloorM, 450)
  assert.equal(r.marginValve, -142)
  assert.equal(r.overValve, 142)
  assert.equal(r.overValveCells, 1)
  assert.equal(r.stormFloorM, 1200)
  assert.equal(r.marginStorm, 608)
  assert.equal(r.verdict, "the valve arm is RIDDEN - rss peak 592M rides 142M past the 450M valve floor (residency 1 gauge(s)) - the valve's own span owns the storm, the closest-approach book rode the wrong floor")
})

test('the arm residency: two gauges at/over the arm count two cells', () => {
  const r = valveMarginJoin([mem(450), mem(449), mem(510)])
  assert.equal(r.overValveCells, 2)
  assert.equal(r.overValve, 60)
  assert.equal(r.peak, 510)
})

test('the euthanasia floor breach: peak past 1200M reads the OOM-cliff words', () => {
  const r = valveMarginJoin([mem(1250)])
  assert.equal(r.marginStorm, -50)
  assert.equal(r.verdict, "the euthanasia floor is BREACHED - rss peak 1250M rides 50M past the 1200M storm floor - the OOM cliff's own class")
})

test('peak picks the deepest gauge regardless of line order', () => {
  const r = valveMarginJoin([mem(510), mem(300), mem(592), mem(418)])
  assert.equal(r.peak, 592)
  assert.equal(r.overValve, 142)
})

test('the floors are injectable knobs - the defaults stay the book\u0027s own ruler', () => {
  const r = valveMarginJoin([mem(592)], { valveFloorM: 600, stormFloorM: 700 })
  assert.equal(r.marginValve, 8)
  assert.equal(r.marginStorm, 108)
  assert.equal(r.verdict, 'the valve floor holds thin - rss peak 592M, 8M under the 600M valve floor - the thin-approach class')
})

test('constants pin: the floors ride the code\u0027s own constants, never the stale comments', () => {
  assert.equal(ALLOC_VALVE_FLOOR_MB_DEFAULT, 450)
  assert.equal(STORM_FLOOR_MB_DEFAULT, 1200)
  assert.equal(VALVE_MARGIN_THIN_M, 50)
})

test('one parser one truth: the lens\u0027s population is MEM_HB_RE\u0027s own matches only', () => {
  const lines = [mem(592)]
  const direct = lines.filter((l) => MEM_HB_RE.test(l)).length
  const r = valveMarginJoin(lines)
  assert.equal(r.n, direct)
  assert.equal(MEM_HB_RE.test(mem(300)), true)
})
