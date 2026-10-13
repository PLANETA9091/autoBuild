// (v0.974.14) THE RESIDENCY WORD - unit pins. The span law's own dose:
// overArmArea = the sum of every gauge's excess over the LIVE valve floor
// (M-gauge units - the storm's own currency through the valve), the ride's
// SHARE = the over-arm gauges' share of the face, and the composed
// residency word (a CELL beside the verdict/shape strings - the
// v0.974.9/974.10 strings stay byte-stable, pinned in valvemargin.test.mjs).
// The three-fire seat priced the word: the 0930/0941/1030 reads hand-priced
// the span-times-depth byte the row never carried ('18 gauges' / '97M past,
// 34 gauges ONE RUN').

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { valveMarginJoin } from '../../src/lib/valvemargin.mjs'

const mem = (rss, heapUsed = 120, heapLimit = 162) =>
  `   mem: heap=${heapUsed}M/${heapLimit}M old=103M ext=151M ab=148M rss=${rss}M cols=0 ents=0 evicted=0 path=4a/0q (max 6) stale=0`

test('junk battery: the residency rides the null family (no gauges, no word)', () => {
  assert.equal(valveMarginJoin(null), null)
  assert.equal(valveMarginJoin([]), null)
  assert.equal(valveMarginJoin(['junk', 42, null]), null)
})

test('the honest silence: a face the floor held prices NOTHING (residency empty, dose 0, share 0)', () => {
  const r = valveMarginJoin([mem(367), mem(375), mem(383)])
  assert.equal(r.overArmArea, 0)
  assert.equal(r.rideSharePct, 0)
  assert.equal(r.residency, '')
  assert.equal(r.verdict, 'the valve floor holds - rss peak 383M, 67M under the 450M valve floor')
})

test('the thin approach stays silent too (under the arm = no dose, the 281 recede class)', () => {
  const r = valveMarginJoin([mem(410), mem(440)])
  assert.equal(r.overValveCells, 0)
  assert.equal(r.overArmArea, 0)
  assert.equal(r.residency, '')
})

test('the dose arithmetic: three over-arm gauges ride 10+20+5 = 35 M-gauge(s), share 75% of 4', () => {
  const r = valveMarginJoin([mem(440), mem(460), mem(470), mem(455)])
  assert.equal(r.overValveCells, 3)
  assert.equal(r.overArmArea, 35)
  assert.equal(r.rideSharePct, 75)
  assert.equal(r.residency, "the arm's own dose 35 M-gauge(s) over the floor - the ride's share 75% of 4 gauge(s)")
})

test('the arm edge itself (rss = the floor) prices a zero excess into the dose', () => {
  const r = valveMarginJoin([mem(450), mem(449), mem(510)])
  assert.equal(r.overValveCells, 2)
  assert.equal(r.overArmArea, 60)
  assert.equal(r.rideSharePct, 66.7)
  assert.equal(r.residency, "the arm's own dose 60 M-gauge(s) over the floor - the ride's share 66.7% of 3 gauge(s)")
})

test('FACE 272 REAL-layout compact: the plateau 28-gauge ride dose-pins 165 M-gauge(s), share 51.9% - the cells only, the verdict/shape strings byte-stable', () => {
  const cells = [371, 372, 380, 380, 383, 384, 380, 386, 385, 387, 382, 382, 387, 388, 387, 387, 386, 386, 389, 393, 397, 419, 436, 443, 443, 444, 457, 459, 458, 458, 458, 458, 454, 455, 457, 457, 452, 458, 456, 454, 451, 454, 454, 458, 454, 454, 456, 458, 452, 458, 454, 459, 456, 456]
  const lines = cells.map((r) => mem(r))
  const r = valveMarginJoin(lines)
  assert.equal(r.n, 54)
  assert.equal(r.overValveCells, 28)
  assert.equal(r.overArmArea, 165)
  assert.equal(r.rideSharePct, 51.9)
  assert.equal(r.residency, "the arm's own dose 165 M-gauge(s) over the floor - the ride's share 51.9% of 54 gauge(s)")
  // the v0.974.9/974.10 words stay byte-stable beside the new cells
  assert.equal(r.shape, 'the ride is a PLATEAU - one run of 28 gauge(s) from gauge 27 of 54, never below the arm again (the pre-arm band peaked at 444M)')
  assert.equal(r.verdict, "the valve arm is RIDDEN - rss peak 459M rides 9M past the 450M valve floor (residency 28 gauge(s)) - the valve's own span owns the storm, the closest-approach book rode the wrong floor")
})

test('the stripes shape dose-pins too (two rides, two doses, one word)', () => {
  const r = valveMarginJoin([mem(371), mem(460), mem(380), mem(465), mem(390)])
  assert.equal(r.overArmRuns, 2)
  assert.equal(r.overArmArea, 10 + 15)
  assert.equal(r.rideSharePct, 40)
  assert.equal(r.residency, "the arm's own dose 25 M-gauge(s) over the floor - the ride's share 40% of 5 gauge(s)")
  assert.equal(r.shape, 'the ride rides 2 run(s), longest 1 gauge(s) (stripes, not a plateau)')
})

test('the one-run-returned ride dose-pins (the run that went home)', () => {
  const r = valveMarginJoin([mem(371), mem(470), mem(480), mem(390), mem(395)])
  assert.equal(r.overArmRuns, 1)
  assert.equal(r.overArmArea, 20 + 30)
  assert.equal(r.rideSharePct, 40)
  assert.equal(r.residency, "the arm's own dose 50 M-gauge(s) over the floor - the ride's share 40% of 5 gauge(s)")
})

test('a face that starts over the arm dose-pins full-share (every gauge rode)', () => {
  const r = valveMarginJoin([mem(460), mem(455), mem(458)])
  assert.equal(r.stepIndex, 1)
  assert.equal(r.overArmArea, 10 + 5 + 8)
  assert.equal(r.rideSharePct, 100)
  assert.equal(r.residency, "the arm's own dose 23 M-gauge(s) over the floor - the ride's share 100% of 3 gauge(s)")
})

test('the injectable floor rides the dose too (the knob moves the arm, the dose follows)', () => {
  const r = valveMarginJoin([mem(592), mem(580)], { valveFloorM: 600, stormFloorM: 700 })
  assert.equal(r.overValveCells, 0)
  assert.equal(r.overArmArea, 0)
  assert.equal(r.residency, '')
  const r2 = valveMarginJoin([mem(592), mem(580)], { valveFloorM: 560, stormFloorM: 700 })
  assert.equal(r2.overValveCells, 2)
  assert.equal(r2.overArmArea, 32 + 20)
  assert.equal(r2.residency, "the arm's own dose 52 M-gauge(s) over the floor - the ride's share 100% of 2 gauge(s)")
})

test('the -1 sentinel line never feeds the dose (the honest unknown prices nothing)', () => {
  const r = valveMarginJoin([
    '   mem: heap=133M/162M old=103M ext=151M ab=148M rss=-1M cols=0 ents=0 evicted=0 path=4a/0q (max 6) stale=0',
    mem(460)
  ])
  assert.equal(r.n, 1)
  assert.equal(r.overArmArea, 10)
  assert.equal(r.rideSharePct, 100)
})
