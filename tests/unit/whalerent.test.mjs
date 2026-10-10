import { test } from 'node:test'
import assert from 'node:assert/strict'
import { whaleRentRow, WHALE_RENT_SEATS } from '../../src/lib/whalerent.mjs'
import { LOOP_WHALE_LAUNCHES } from '../../src/lib/transitloop.mjs'

// The v0.754.0 rotation row named the disguise but never the STOPPING
// point: face 189 (38078750669) ran F18's 115-launch zero-gain loop to the
// face's own end with the aquifer's give-up classes silent all face. The
// rent arms the give-up off the existing rows' own bars (whale + seats +
// zero gains, running totals) and prices what rode past it - the launches
// AND the rescue starts the governor would have kept.

const LAUNCH = (bot, land, x, z, d) =>
  `${bot} [${bot}] water: transit toward known land (${land}) at [${x},${z}] d=${d}`
const STALL = (bot, d, passes) =>
  `${bot} [${bot}] water: transit stalled (d=${d} after ${passes} passes - the walls own this swim; the release takes over)`
const RSTART = (bot, o2 = 4) =>
  `${bot} [${bot}] water: drowning rescue start (drowning, oxygen ${o2})`
const NOISE = 'F5 [F5] iron: commune deposit (iron_ingot x2)'

test('THE PRIZE: the whale loop arms its own give-up and the rent prices the rest', () => {
  const lines = [
    // seat A: 10 launches, one paired zero-gain stall (the evidence seeds)
    ...Array.from({ length: 10 }, () => LAUNCH('F18', 'oak_log', -128, 399, 2)),
    STALL('F18', 2, 15),
    // seat B: 10 launches (the rotation's second seat exists early)
    ...Array.from({ length: 10 }, () => LAUNCH('F18', 'birch_log', -129, 403, 3)),
    // a rescue start BEFORE the arm - the whole-loop bill owns it, not the rent
    RSTART('F18', 12),
    // launches 21..50: the bar (50) crosses ON launch 50 - seats 2, gains
    // paired zero - THE ARM
    ...Array.from({ length: 30 }, (_, i) =>
      LAUNCH('F18', i % 2 ? 'birch_log' : 'oak_log', i % 2 ? -129 : -128, i % 2 ? 403 : 399, 2)),
    // the rent window: 65 launches, one more zero-gain stall, 2 rescue starts
    ...Array.from({ length: 65 }, (_, i) =>
      LAUNCH('F18', i % 2 ? 'oak_log' : 'birch_log', i % 2 ? -128 : -129, i % 2 ? 399 : 403, 2)),
    STALL('F18', 2, 18),
    RSTART('F18', 6),
    RSTART('F18', 9)
  ]
  const r = whaleRentRow(lines)
  assert.ok(r, 'the row fires')
  assert.match(r, /armed at launch 50 of 115/)
  assert.match(r, /65 launch\(es\) rode past the arm \(57% of the loop/)
  assert.match(r, /2 rescue start\(s\) in tow/, 'only the window\'s own dives ride the rent')
  assert.match(r, /the carousel's own prize$/)
})

test('the arm reads the RUNNING totals - the first launch past the bar owns the number', () => {
  const lines = [
    ...Array.from({ length: 9 }, () => LAUNCH('F3', 'sand', -132, 393, 8)),
    STALL('F3', 8, 20),
    ...Array.from({ length: 9 }, () => LAUNCH('F3', 'gravel', -100, 405, 6)),
    // 41 more launches -> the 50th launch is line 51 of the loop; the arm
    // must say 50, not the face's own end
    ...Array.from({ length: 97 }, (_, i) =>
      LAUNCH('F3', i % 2 ? 'sand' : 'gravel', i % 2 ? -132 : -100, i % 2 ? 393 : 405, 8)),
    STALL('F3', 8, 22)
  ]
  const r = whaleRentRow(lines)
  assert.ok(r)
  assert.match(r, /armed at launch 50 of 115 \(seat 2/)
  assert.match(r, /65 launch\(es\) rode past the arm/)
})

test('a paying loop is never rent - the whale verdict\'s own max-gain law', () => {
  const lines = [
    ...Array.from({ length: 10 }, () => LAUNCH('F9', 'oak_log', -118, 405, 10)),
    STALL('F9', 4, 12), // gained +6 - the loop PAID
    ...Array.from({ length: 10 }, () => LAUNCH('F9', 'sand', -132, 393, 8)),
    ...Array.from({ length: 95 }, () => LAUNCH('F9', 'oak_log', -118, 405, 3))
  ]
  assert.equal(whaleRentRow(lines), null, 'a loop that bought ground never rents')
})

test('the single-seat whale stays the pinned seat\'s own subject', () => {
  const lines = [
    ...Array.from({ length: 10 }, () => LAUNCH('F2', 'oak_log', -128, 399, 2)),
    STALL('F2', 2, 15),
    ...Array.from({ length: 104 }, () => LAUNCH('F2', 'oak_log', -128, 399, 2)),
    STALL('F2', 2, 18)
  ]
  assert.equal(whaleRentRow(lines), null,
    `one seat needs >= ${WHALE_RENT_SEATS} - the v0.446 cadence + the v0.722 pinbill own that read`)
})

test('the arm never fired (the bar crossed after the last launch) - the honest silence', () => {
  const lines = [
    // 60 launches first, THEN the only stall - the zero-gain evidence
    // completes with no launch left to arm on
    ...Array.from({ length: 30 }, () => LAUNCH('F6', 'oak_log', -106, 392, 4)),
    ...Array.from({ length: 30 }, () => LAUNCH('F6', 'dirt', -108, 394, 5)),
    STALL('F6', 4, 30)
  ]
  assert.equal(whaleRentRow(lines), null, 'a brake between launches never armed')
})

test('rent 0 - the arm fired at the loop\'s own end and saved nothing', () => {
  const lines = [
    ...Array.from({ length: 10 }, () => LAUNCH('F8', 'oak_log', -128, 399, 2)),
    STALL('F8', 2, 15),
    ...Array.from({ length: 10 }, () => LAUNCH('F8', 'birch_log', -129, 403, 3)),
    ...Array.from({ length: 30 }, () => LAUNCH('F8', 'oak_log', -128, 399, 2))
  ]
  // 50 launches total, arm at 50, nothing after -> null
  assert.equal(whaleRentRow(lines), null, 'an arm at the end prices an empty rent')
})

test('no whale, no row - the silence law holds below the bar', () => {
  const lines = [
    ...Array.from({ length: 20 }, () => LAUNCH('F12', 'oak_log', -128, 399, 2)),
    STALL('F12', 2, 15),
    ...Array.from({ length: 20 }, () => LAUNCH('F12', 'birch_log', -129, 403, 3))
  ]
  assert.equal(whaleRentRow(lines), null,
    `${LOOP_WHALE_LAUNCHES} launches is the bar - the small loops stay data`)
})

test('the biggest rent owns the row - the rent\'s own sort', () => {
  const lines = [
    // F4: a whale with a small rent (arm at 100)
    ...Array.from({ length: 10 }, () => LAUNCH('F4', 'oak_log', -122, 399, 2)),
    STALL('F4', 2, 15),
    ...Array.from({ length: 10 }, () => LAUNCH('F4', 'birch_log', -129, 403, 3)),
    ...Array.from({ length: 80 }, () => LAUNCH('F4', 'oak_log', -122, 399, 2)),
    // F9: a whale with the bigger rent (115 launches, arm at 50, rent 65
    // vs F4's 100-launch rent of 50)
    ...Array.from({ length: 10 }, () => LAUNCH('F9', 'sand', -132, 393, 8)),
    STALL('F9', 8, 20),
    ...Array.from({ length: 10 }, () => LAUNCH('F9', 'gravel', -100, 405, 6)),
    ...Array.from({ length: 95 }, () => LAUNCH('F9', 'sand', -132, 393, 8)),
    STALL('F9', 8, 22)
  ]
  const r = whaleRentRow(lines)
  assert.ok(r)
  assert.match(r, /F9/, 'the larger rent wins the row (65 vs 50)')
  assert.match(r, /armed at launch 50 of 115/)
})

test('junk-safe: non-input and the launch-free face read the honest shapes', () => {
  assert.equal(whaleRentRow(null), null)
  assert.equal(whaleRentRow(undefined), null)
  assert.equal(whaleRentRow(42), null)
  assert.equal(whaleRentRow([NOISE, 'garbage line', '']), null)
  assert.equal(whaleRentRow(''), null)
})

test('the raw-blob input rides the same lane as the array', () => {
  const lines = [
    ...Array.from({ length: 10 }, () => LAUNCH('F18', 'oak_log', -128, 399, 2)),
    STALL('F18', 2, 15),
    ...Array.from({ length: 10 }, () => LAUNCH('F18', 'birch_log', -129, 403, 3)),
    ...Array.from({ length: 45 }, () => LAUNCH('F18', 'oak_log', -128, 399, 2)),
    ...Array.from({ length: 40 }, () => LAUNCH('F18', 'birch_log', -129, 403, 3)),
    RSTART('F18', 3)
  ]
  const fromBlob = whaleRentRow(lines.join('\n'))
  const fromArr = whaleRentRow(lines)
  assert.ok(fromBlob && fromArr)
  assert.equal(fromBlob, fromArr, 'one lens, one verdict - the input shape never owns the read')
})
