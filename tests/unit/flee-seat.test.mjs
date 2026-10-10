// (v0.921.0) THE TRAP'S OWN SEAT - the flee bearing histogram joins the
// seat law family. Tests feed the face-194 (38092578200) verbatim cells,
// the boundary law, the junk battery, and the decompose wiring pin (the
// CENSUS GUARD law).
import { fleeSeat, fleeSeatRow, fleeRiders, fleeRidersRow } from '../../src/lib/fleeseat.mjs'
import fs from 'node:fs'
import assert from 'node:assert'
import { test } from 'node:test'

// Face 194's own verbatim flee bearing cells (the decompose print's own
// numbers: F14(2,2) x18 + F14(3,1) x6 = 24 flee events, 2 distinct).
const FACE194 = { 'F14(2,2)': 18, 'F14(3,1)': 6 }

test('the strict-majority seat shape (face 194\'s own read)', () => {
  const seat = fleeSeat(FACE194)
  assert.deepEqual(seat, { key: 'F14(2,2)', owns: 18, ofFlees: 24, shareOfFlees: 0.75 })
})

test('the seat row byte-exact (face 194\'s own face)', () => {
  assert.equal(
    fleeSeatRow(fleeSeat(FACE194)),
    "the flee book's own cell (v0.921.0): F14(2,2) owns 18 of 24 flee(s) (75.0%) - THE TRAP'S OWN SEAT: one bot-bearing cell owns the flee book - the repeat is the trap (the v0.375.0 cure prices the diversity rule)"
  )
})

test('the boundary law: a cell at exactly half owns nothing (the tie law)', () => {
  assert.equal(fleeSeat({ 'F14(2,2)': 12, 'F9(3,1)': 12 }), null) // 12 vs 12 - the tie owns nothing
  assert.equal(fleeSeat({ 'F14(2,2)': 12, 'F9(3,1)': 6, 'F1(0,1)': 6 }), null) // 12 vs 12 - the spread owns nothing
})

test('the solo face: one cell owns the whole book (100%)', () => {
  const seat = fleeSeat({ 'F12(3,6)': 9 })
  assert.deepEqual(seat, { key: 'F12(3,6)', owns: 9, ofFlees: 9, shareOfFlees: 1 })
})

test('the byte law: the riders rank counts desc, equal counts ride the cell\'s own byte asc', () => {
  // The riders' own ranking (the scan's determinism): n desc first, the
  // byte asc breaks the tie. The seat stays silent (10 of 27 owns no
  // majority) - the riders' own face.
  const riders = fleeRiders({ 'F14(2,2)': 10, 'F9(3,1)': 9, 'F1(0,1)': 8 })
  assert.equal(riders.leader, 'F14(2,2)')
  assert.equal(riders.runner, 'F9(3,1)')
  assert.equal(riders.duet, false)
  // The equal-count tie: byte asc breaks it (F14(2,2) < F9(3,1)).
  const duet = fleeRiders({ 'F9(3,1)': 10, 'F14(2,2)': 10, 'F1(0,1)': 5 })
  assert.equal(duet.leader, 'F14(2,2)')
  assert.equal(duet.runner, 'F9(3,1)')
  assert.equal(duet.duet, true)
  // The seat's own scan never seats a two-way tie above half: the pair's
  // own mass always meets or beats the top (the storm-has-no-seat law).
  assert.equal(fleeSeat({ 'F14(2,2)': 10, 'F9(3,1)': 10, 'F1(0,1)': 5 }), null)
})

test('the honest silences: the empty and junk books read the null', () => {
  assert.equal(fleeSeat(null), null)
  assert.equal(fleeSeat(undefined), null)
  assert.equal(fleeSeat('junk'), null)
  assert.equal(fleeSeat([]), null)
  assert.equal(fleeSeat({}), null)
  assert.equal(fleeSeat({ junk: 5 }), null) // every cell malformed - the honest silence
  assert.equal(fleeSeat({ 'F14(2,2)': 0 }), null) // zero-sum book
})

test('the junk-cell law: non-finite, non-positive and malformed cells are skipped, the real cells still tally', () => {
  const seat = fleeSeat({ 'F14(2,2)': 18, junk: 5, 'F9(x)': 3, 'F1(1,1)': -2, 'F2(0,0)': Number.NaN })
  assert.deepEqual(seat, { key: 'F14(2,2)', owns: 18, ofFlees: 18, shareOfFlees: 1 })
})

test('the branch law: the riders speak only when the seat rode silent', () => {
  assert.equal(fleeRiders(FACE194), null) // the solo cell owns 75% - the seat's own face
  const riders = fleeRiders({ 'F14(2,2)': 12, 'F9(3,1)': 12 }) // the tie - the riders' own face
  assert.equal(riders.leader, 'F14(2,2)') // the byte law: equal counts, byte asc
  assert.equal(riders.runner, 'F9(3,1)')
  assert.equal(riders.duet, true)
  assert.equal(riders.pairN, 24)
})

test('the riders row byte-exact (the tie\'s own face)', () => {
  assert.equal(
    fleeRidersRow(fleeRiders({ 'F14(2,2)': 12, 'F9(3,1)': 12 })),
    "the flee book's own cell (v0.921.0): no solo cell owns the majority - F14(2,2) x12 + F9(3,1) x12 own 24 of 24 flee(s) (100.0%) - THE FLEE'S OWN MIX: the seat's tie law held, the repeats are the shape - the cells' own bearings price the trap the solo law refused to name"
  )
})

test('the honest silences for the riders: junk books and the solo face ride silent', () => {
  assert.equal(fleeRiders(null), null)
  assert.equal(fleeRiders(undefined), null)
  assert.equal(fleeRiders('junk'), null)
  assert.equal(fleeRiders({}), null)
  assert.equal(fleeRiders({ 'F14(2,2)': 9 }), null) // the solo face - the seat's own
})

test("the rows' junk battery: wrong shapes never print", () => {
  assert.equal(fleeSeatRow(null), null)
  assert.equal(fleeSeatRow(undefined), null)
  assert.equal(fleeSeatRow('junk'), null)
  assert.equal(fleeSeatRow({}), null)
  assert.equal(fleeSeatRow({ key: '', owns: 5, ofFlees: 5, shareOfFlees: 1 }), null)
  assert.equal(fleeSeatRow({ key: 'F14(2,2)', owns: 0, ofFlees: 5, shareOfFlees: 0 }), null)
  assert.equal(fleeSeatRow({ key: 'F14(2,2)', owns: 9, ofFlees: 5, shareOfFlees: 1.8 }), null) // owns > ofFlees
  assert.equal(fleeRidersRow(null), null)
  assert.equal(fleeRidersRow(undefined), null)
  assert.equal(fleeRidersRow('junk'), null)
  assert.equal(fleeRidersRow({}), null)
  assert.equal(fleeRidersRow({ leader: 'F14(2,2)', leaderN: 12, runner: '', runnerN: 12, pairN: 24, ofFlees: 24, shareOfFlees: 1 }), null)
  assert.equal(fleeRidersRow({ leader: 'F14(2,2)', leaderN: 12, runner: 'F9(3,1)', runnerN: 12, pairN: 30, ofFlees: 24, shareOfFlees: 1.25 }), null) // pairN > ofFlees
})

test("WIRING: the flee book's seat rides decompose beside the v0.375.0 prints (v0.921.0)", () => {
  const src = fs.readFileSync(new URL('../../scripts/fleet-mining/decompose.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes('fleeSeat, fleeSeatRow, fleeRiders, fleeRidersRow'), 'the seat joins the decompose import band')
  const histAt = src.indexOf("'  flee bearings repeated >=2:'")
  const seatAt = src.indexOf('fleeSeat(fleeBearing)')
  assert.ok(histAt > 0 && seatAt > histAt, 'the seat rides beside the histogram, never before it')
  const v375 = src.indexOf('(v0.375.0) THE TRAPPED-FLEE READ')
  assert.ok(v375 > 0 && seatAt > v375, 'the seat rides inside the trapped-flee block (the census\'s own scope)')
})
