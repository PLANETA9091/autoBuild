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
import { valveMarginJoin, valveSilentCross, valveSilentCrossRow, valveSpokenArm, valveSpokenArmRow, VALVE_MARGIN_THIN_M } from '../../src/lib/valvemargin.mjs'
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

test('THE ARM RIDE\u0027S OWN SHAPE - FACE 272 REAL-layout compact: one plateau run of 28 from gauge 27 of 54, pre-arm peak 444M', () => {
  const cells = [371, 372, 380, 380, 383, 384, 380, 386, 385, 387, 382, 382, 387, 388, 387, 387, 386, 386, 389, 393, 397, 419, 436, 443, 443, 444, 457, 459, 458, 458, 458, 458, 454, 455, 457, 457, 452, 458, 456, 454, 451, 454, 454, 458, 454, 454, 456, 458, 452, 458, 454, 459, 456, 456]
  const lines = cells.map((r) => mem(r))
  const r = valveMarginJoin(lines)
  assert.equal(r.n, 54)
  assert.equal(r.peak, 459)
  assert.equal(r.overValveCells, 28)
  assert.equal(r.overArmRuns, 1)
  assert.equal(r.overArmLongest, 28)
  assert.equal(r.stepIndex, 27)
  assert.equal(r.preArmPeak, 444)
  assert.equal(r.shape, 'the ride is a PLATEAU - one run of 28 gauge(s) from gauge 27 of 54, never below the arm again (the pre-arm band peaked at 444M)')
  assert.equal(r.verdict, "the valve arm is RIDDEN - rss peak 459M rides 9M past the 450M valve floor (residency 28 gauge(s)) - the valve's own span owns the storm, the closest-approach book rode the wrong floor")
})

test('the shape stays a CELL - the v0.974.9 verdict words ride byte-stable for every shape', () => {
  const r = valveMarginJoin([mem(371), mem(460), mem(380), mem(465), mem(390)])
  assert.equal(r.overArmRuns, 2)
  assert.equal(r.shape, 'the ride rides 2 run(s), longest 1 gauge(s) (stripes, not a plateau)')
  assert.equal(r.verdict, "the valve arm is RIDDEN - rss peak 465M rides 15M past the 450M valve floor (residency 2 gauge(s)) - the valve's own span owns the storm, the closest-approach book rode the wrong floor")
})

test('one run that returns below the arm reads the returned words (no plateau claim)', () => {
  const r = valveMarginJoin([mem(371), mem(470), mem(480), mem(390), mem(395)])
  assert.equal(r.overArmRuns, 1)
  assert.equal(r.stepIndex, 2)
  assert.equal(r.preArmPeak, 371)
  assert.equal(r.shape, 'the ride is one run of 2 gauge(s) from gauge 2 of 5 (returned below the arm at the tail)')
})

test('a face that starts over the arm rides no preArmPeak (the honest unknown)', () => {
  const r = valveMarginJoin([mem(460), mem(455), mem(458)])
  assert.equal(r.stepIndex, 1)
  assert.equal(r.preArmPeak, null)
  assert.equal(r.shape, 'the ride is a PLATEAU - one run of 3 gauge(s) from gauge 1 of 3, never below the arm again')
})

test('the clean face reads no shape (the floor holds - nothing rides)', () => {
  const r = valveMarginJoin([mem(371), mem(380), mem(383)])
  assert.equal(r.shape, '')
  assert.equal(r.stepIndex, null)
  assert.equal(r.preArmPeak, null)
})

test("the silent cross's own cell (v0.976.3) - the record's own call prices from the two halves", () => {
  // the ridden plateau + the silent voice: the cross stands (FACE 303's
  // own shape in miniature - the arm rode, the valve never spoke)
  const vm = valveMarginJoin([mem(435), mem(457), mem(459), mem(455)])
  assert.equal(vm.overValveCells, 3)
  assert.equal(vm.overArmArea, 21)
  assert.equal(vm.rideSharePct, 75)
  const c = valveSilentCross(vm, { closes: 0, opens: 0 })
  assert.equal(c.cross, true)
  assert.equal(c.gauges, 3)
  assert.equal(c.dose, 21)
  assert.equal(c.sharePct, 75)
  assert.equal(c.paceMPerGauge, 7) // (v0.976.4) the pace's own byte - 21/3, the exact pace prints the integer
  const row = valveSilentCrossRow(vm, { closes: 0, opens: 0 })
  assert.equal(row, 'THE SILENT CROSS - the arm rode 3 gauge(s) and the valve never spoke (0 CLOSED, 0 OPEN) - the climb\'s own pace 7 M-gauge(s) per gauge of residency - the rate anchor\'s slow-creep blind spot priced (the residency rode the lens, the valve rode nothing)')
})

test("the silent cross's own honest silence (v0.976.3) - the speaking face and the unridden face price nothing", () => {
  // the valve spoke - no cross (the spans are opendeaf's read, the row
  // names only the silence)
  const vm = valveMarginJoin([mem(435), mem(457), mem(459), mem(455)])
  const spoken = valveSilentCross(vm, { closes: 2, opens: 1 })
  assert.deepEqual(spoken, { cross: false, gauges: 0, dose: 0, sharePct: 0, paceMPerGauge: 0 })
  assert.equal(valveSilentCrossRow(vm, { closes: 2, opens: 1 }), null)
  // the floor held - no cross (the unridden face's own honest null)
  const clean = valveMarginJoin([mem(371), mem(380), mem(383)])
  const unridden = valveSilentCross(clean, { closes: 0, opens: 0 })
  assert.equal(unridden.cross, false)
  assert.equal(valveSilentCrossRow(clean, { closes: 0, opens: 0 }), null)
})

test("the silent cross's own fence (v0.976.3) - the cross never rides a lie", () => {
  const vm = valveMarginJoin([mem(435), mem(457), mem(459), mem(455)])
  // the junk halves price the honest empty (never forged)
  assert.equal(valveSilentCross(null, { closes: 0, opens: 0 }).cross, false)
  assert.equal(valveSilentCross(vm, null).cross, false)
  assert.equal(valveSilentCross('vm', 'voice').cross, false)
  // a count the face cannot own lies (more over-gauges than gauges)
  assert.equal(valveSilentCross({ ...vm, overValveCells: 9, n: 4 }, { closes: 0, opens: 0 }).cross, false)
  // a negative voice lies
  assert.equal(valveSilentCross(vm, { closes: -1, opens: 0 }).cross, false)
  // a vm without its own share lies
  const noShare = { ...vm }
  delete noShare.rideSharePct
  assert.equal(valveSilentCross(noShare, { closes: 0, opens: 0 }).cross, false)
})

test("the cross's own rate (v0.976.4) - the climb's own pace byte on FACE 303's own shape", () => {
  // FACE 303's own cross: the arm rode 23 gauge(s), the dose 342 M-gauge(s)
  // - the pace 342/23 rounds to 14.9 (the share's own grain)
  const vm = { n: 52, overValveCells: 23, overArmArea: 342, rideSharePct: 44.2 }
  const c = valveSilentCross(vm, { closes: 0, opens: 0 })
  assert.deepEqual(c, { cross: true, gauges: 23, dose: 342, sharePct: 44.2, paceMPerGauge: 14.9 })
  assert.equal(
    valveSilentCrossRow(vm, { closes: 0, opens: 0 }),
    'THE SILENT CROSS - the arm rode 23 gauge(s) and the valve never spoke (0 CLOSED, 0 OPEN) - the climb\'s own pace 14.9 M-gauge(s) per gauge of residency - the rate anchor\'s slow-creep blind spot priced (the residency rode the lens, the valve rode nothing)',
  )
})

test("the pace's own honest silence (v0.976.4) - the rate never rides the empty cell", () => {
  // the speaking face and the unridden face: the pace rides zero (the
  // rate prices nothing the cross does not own)
  const vm = valveMarginJoin([mem(435), mem(457), mem(459), mem(455)])
  assert.equal(valveSilentCross(vm, { closes: 1, opens: 0 }).paceMPerGauge, 0)
  const clean = valveMarginJoin([mem(371), mem(380), mem(383)])
  assert.equal(valveSilentCross(clean, { closes: 0, opens: 0 }).paceMPerGauge, 0)
  assert.equal(valveSilentCross(null, { closes: 0, opens: 0 }).paceMPerGauge, 0)
  assert.equal(valveSilentCross(vm, null).paceMPerGauge, 0)
})

test("the arm's own answer (v0.976.6) - the silent cross's own mirror on FACE 304's own shape", () => {
  // FACE 304's own spoken face in miniature: the arm ridden 9 gauge(s),
  // the dose 63 M-gauge(s), the share 20.5%, the valve spoke once - the
  // dose the voice answered prices the pace 63/9 = 7 (the same grain)
  const vm = { n: 44, overValveCells: 9, overArmArea: 63, rideSharePct: 20.5 }
  const c = valveSpokenArm(vm, { closes: 1, opens: 1 })
  assert.deepEqual(c, { spoken: true, gauges: 9, dose: 63, sharePct: 20.5, paceMPerGauge: 7, closes: 1, opens: 1 })
  assert.equal(
    valveSpokenArmRow(vm, { closes: 1, opens: 1 }),
    "THE ARM'S OWN ANSWER - the arm rode 9 gauge(s) and the valve spoke (1 close(s), 1 open(s)) - the climb's own pace 7 M-gauge(s) per gauge of residency - the dose the voice answered (the valve's own span stays opendeaf's read, the lens only names the answer)",
  )
  // the folded shape rides the same cell (the joined vm's own arithmetic)
  const joined = valveMarginJoin([mem(435), mem(457), mem(459), mem(455)])
  const c2 = valveSpokenArm(joined, { closes: 2, opens: 0 })
  assert.equal(c2.spoken, true)
  assert.equal(c2.gauges, 3)
  assert.equal(c2.dose, 21)
  assert.equal(c2.paceMPerGauge, 7)
  assert.equal(c2.closes, 2)
  assert.equal(c2.opens, 0)
})

test("the arm's own answer's honest silence (v0.976.6) - the silent voice, the unridden face, the junk halves", () => {
  // the silent voice - the silent cross's own seat, never doubled here
  const vm = valveMarginJoin([mem(435), mem(457), mem(459), mem(455)])
  const silent = valveSpokenArm(vm, { closes: 0, opens: 0 })
  assert.deepEqual(silent, { spoken: false, gauges: 0, dose: 0, sharePct: 0, paceMPerGauge: 0, closes: 0, opens: 0 })
  assert.equal(valveSpokenArmRow(vm, { closes: 0, opens: 0 }), null)
  // the unridden face prices nothing (no dose, no answer - the valve
  // may speak without the arm ridden)
  const clean = valveMarginJoin([mem(371), mem(380), mem(383)])
  assert.equal(valveSpokenArm(clean, { closes: 1, opens: 1 }).spoken, false)
  assert.equal(valveSpokenArmRow(clean, { closes: 1, opens: 1 }), null)
  // the junk halves price the honest empty
  assert.equal(valveSpokenArm(null, { closes: 1, opens: 1 }).spoken, false)
  assert.equal(valveSpokenArm(vm, null).spoken, false)
  assert.equal(valveSpokenArm('vm', 'voice').spoken, false)
  assert.equal(valveSpokenArmRow(null, { closes: 1, opens: 1 }), null)
})

test("the arm's own answer's fence (v0.976.6) - the answer never rides a lie", () => {
  const vm = valveMarginJoin([mem(435), mem(457), mem(459), mem(455)])
  // a count the face cannot own lies
  assert.equal(valveSpokenArm({ ...vm, overValveCells: 9, n: 4 }, { closes: 1, opens: 1 }).spoken, false)
  // a negative voice lies
  assert.equal(valveSpokenArm(vm, { closes: -1, opens: 1 }).spoken, false)
  assert.equal(valveSpokenArm(vm, { closes: 1, opens: -1 }).spoken, false)
  // a vm without its own share lies
  const noShare = { ...vm }
  delete noShare.rideSharePct
  assert.equal(valveSpokenArm(noShare, { closes: 1, opens: 1 }).spoken, false)
  // a non-integer voice lies
  assert.equal(valveSpokenArm(vm, { closes: 1.5, opens: 0 }).spoken, false)
})
