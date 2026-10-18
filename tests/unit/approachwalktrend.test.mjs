// (v0.976.250) THE APPROACH WALK'S OWN VERDICT MASS - the word's own
// pins. THE EVIDENCE (the fleet faces' own logs): the miner's walk
// approach prints 'F6 [F6] approach: 1 segment(s) walked in 11.4s,
// goal now d=21.5 (inside the direct envelope)' and 'F6 [F6] approach:
// 6 segment(s) walked in 42.4s, goal now d=32.4 (still outside - a
// segment stalled (no position delta))' - the approachWalk summary
// read's own shape (one print per walk, only when a segment rode) -
// and no book owned the mass (the yard approach's own lane the
// yardapproachtrend seat prices, the fire-0142 seathunt named the
// seat FREE).
// The pins: the census parse byte-exact (the real lines whole, the
// outside skins stalled/clock/cap, the '?'-distance skin, the mass
// sums each walk a vote, the forged cap's refusal, the near-miss
// lanes' refusal incl. the v0.162.0 liar skin and the side-step
// prints and the yard sibling, the junk laws), the fence (the verdict
// arithmetic every branch, the junk laws), the row (the swell / the
// fade / the swing byte-exact, the held step's honest null, the
// three-face zero walks' lawful null, the junk fold's null), the
// face's own log block re-speaks the census whole and the emitter
// grammar (the approach.mjs template the word parses is the line the
// fleet prints - the deliberate-miss law: a near-miss census voice
// never rides).
import { test } from 'node:test'
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { approachWalkCensus, approachWalkTrendConsistent, approachWalkTrendRow } from '../../src/lib/approachwalktrend.mjs'

const TAIL = "(the yard approach's own lane keeps the yardapproachtrend seat, the walk nudge's own trend keeps the walknudgetrend seat, the climb family's own lanes keep their seats - the approach walk's verdict row alone, co-existence by seat never by duplication)"

test('the census: the real lines ride whole (byte-exact shapes, every skin)', () => {
  // run188's own face: the landed walk
  const inside = approachWalkCensus([
    'F6 [F6] approach: 1 segment(s) walked in 11.4s, goal now d=21.5 (inside the direct envelope)'
  ])
  assert.deepEqual(inside, { walks: 1, segs: 1, walkedIn: 1, outside: 0 })
  // run185's own face: the stall skin
  const stalled = approachWalkCensus([
    'F6 [F6] approach: 6 segment(s) walked in 42.4s, goal now d=32.4 (still outside - a segment stalled (no position delta))'
  ])
  assert.deepEqual(stalled, { walks: 1, segs: 6, walkedIn: 0, outside: 1 })
  // the clock skin and the '?'-distance skin (the emitter's own ternary)
  const clock = approachWalkCensus([
    'F9 [F9] approach: 1 segment(s) walked in 5.2s, goal now d=? (still outside - the approach clock is spent)'
  ])
  assert.deepEqual(clock, { walks: 1, segs: 1, walkedIn: 0, outside: 1 })
  // the cap skin (the honest-cap cure's own shape)
  const capped = approachWalkCensus([
    'F14 [F14] approach: 8 segment(s) walked in 55.9s, goal now d=33.7 (still outside - the segment cap spent (8 walked, d=33.7))'
  ])
  assert.deepEqual(capped, { walks: 1, segs: 8, walkedIn: 0, outside: 1 })
})

test('the census: the mass sums every summary (each walk a vote, across the bots)', () => {
  const c = approachWalkCensus([
    'F6 [F6] approach: 1 segment(s) walked in 11.4s, goal now d=21.5 (inside the direct envelope)',
    'F8 [F8] approach: 2 segment(s) walked in 26.4s, goal now d=23.4 (inside the direct envelope)',
    'F6 [F6] approach: 6 segment(s) walked in 42.4s, goal now d=32.4 (still outside - a segment stalled (no position delta))'
  ])
  assert.deepEqual(c, { walks: 3, segs: 9, walkedIn: 2, outside: 1 })
})

test('the census: the forged cap never rides, the junk laws hold', () => {
  // the cap skin's own N must equal the line's own segments cell (the
  // same variable prints both - 6 walked the segments cell holds, the
  // forged 8 the census refuses)
  assert.deepEqual(approachWalkCensus([
    'F6 [F6] approach: 6 segment(s) walked in 42.4s, goal now d=32.4 (still outside - the segment cap spent (8 walked, d=32.4))'
  ]), { walks: 0, segs: 0, walkedIn: 0, outside: 0 })
  // junk-safe: the empty and non-string faces hold the lawful zero, the
  // non-array junk prices null (the family's own law the census rides)
  assert.deepEqual(approachWalkCensus([]), { walks: 0, segs: 0, walkedIn: 0, outside: 0 })
  assert.equal(approachWalkCensus(null), null)
  assert.equal(approachWalkCensus('F6 [F6] approach: 1 segment(s) walked in 11.4s, goal now d=21.5 (inside the direct envelope)'), null)
  assert.deepEqual(approachWalkCensus([42, {}]), { walks: 0, segs: 0, walkedIn: 0, outside: 0 })
})

test('the census: near-misses never ride', () => {
  // the sibling 'yard approach:' frame never rides (the
  // yardapproachtrend seat's own lane)
  assert.deepEqual(approachWalkCensus(['F5 yard approach: skipped (chest unreachable)']), { walks: 0, segs: 0, walkedIn: 0, outside: 0 })
  // the side-step's own prints never ride (the raw lane's own words)
  assert.deepEqual(approachWalkCensus(['F6 [F6] approach: the stall side-step (right) moved the start (d now 32.9)']), { walks: 0, segs: 0, walkedIn: 0, outside: 0 })
  assert.deepEqual(approachWalkCensus(['F6 [F6] approach: the stall side-step (left) stalled too']), { walks: 0, segs: 0, walkedIn: 0, outside: 0 })
  // the v0.162.0 liar skin never rides (the self-contradiction the
  // honest-cap cure named - the grammar refuses it forever)
  assert.deepEqual(approachWalkCensus(['F14 [F14] approach: 8 segment(s) walked in 55.9s, goal now d=33.7 (still outside - inside the direct envelope)']), { walks: 0, segs: 0, walkedIn: 0, outside: 0 })
  // the zero-segments skin never rides (the emitter never prints it)
  assert.deepEqual(approachWalkCensus(['F6 [F6] approach: 0 segment(s) walked in 3.0s, goal now d=30.0 (still outside - the approach clock is spent)']), { walks: 0, segs: 0, walkedIn: 0, outside: 0 })
  // the integer secs skin never rides (the emitter's own toFixed(1))
  assert.deepEqual(approachWalkCensus(['F6 [F6] approach: 1 segment(s) walked in 11s, goal now d=21.5 (inside the direct envelope)']), { walks: 0, segs: 0, walkedIn: 0, outside: 0 })
  // the tag-mismatch prefix never rides (the backref law)
  assert.deepEqual(approachWalkCensus(['F6 [F7] approach: 1 segment(s) walked in 11.4s, goal now d=21.5 (inside the direct envelope)']), { walks: 0, segs: 0, walkedIn: 0, outside: 0 })
  // the truncated tail never rides
  assert.deepEqual(approachWalkCensus(['F6 [F6] approach: 1 segment(s) walked in 11.4s, goal now d=21.5']), { walks: 0, segs: 0, walkedIn: 0, outside: 0 })
  // the altered prose never rides
  assert.deepEqual(approachWalkCensus(['F6 [F6] approaches: 1 segment(s) walked in 11.4s, goal now d=21.5 (inside the direct envelope)']), { walks: 0, segs: 0, walkedIn: 0, outside: 0 })
})

test('the fence: every honest branch and every junk law rides', () => {
  const face = { walks: 3, segs: 9, walkedIn: 2, outside: 1 }
  assert.equal(approachWalkTrendConsistent({ back: face, prev: face, cur: face }), true)
  // zero counts are lawful (the lane-never-rode face the fence keeps)
  const zero = { walks: 0, segs: 0, walkedIn: 0, outside: 0 }
  assert.equal(approachWalkTrendConsistent({ back: zero, prev: zero, cur: zero }), true)
  // extra keys never rejected (the family's own extra-keys law)
  assert.equal(approachWalkTrendConsistent({ back: { ...face, note: 'x' }, prev: face, cur: face }), true)
  // the verdict arithmetic the fence holds (walkedIn + outside = walks)
  assert.equal(approachWalkTrendConsistent({ back: face, prev: { walks: 2, segs: 2, walkedIn: 2, outside: 1 }, cur: face }), false)
  // the junk laws: the null face, the missing face, the non-integer,
  // the negative
  assert.equal(approachWalkTrendConsistent(null), false)
  assert.equal(approachWalkTrendConsistent({}), false)
  assert.equal(approachWalkTrendConsistent({ back: face, prev: face }), false)
  assert.equal(approachWalkTrendConsistent({ back: face, prev: { walks: 1.5, segs: 2, walkedIn: 1, outside: 0 }, cur: face }), false)
  assert.equal(approachWalkTrendConsistent({ back: face, prev: { walks: -1, segs: 2, walkedIn: 0, outside: -1 }, cur: face }), false)
  assert.equal(approachWalkTrendConsistent({ back: 'x', prev: face, cur: face }), false)
  assert.equal(approachWalkTrendConsistent([face, face, face]), false)
})

test('the row: the swell and the fade byte-exact', () => {
  const swell = approachWalkTrendRow({
    back: { walks: 2, segs: 3, walkedIn: 0, outside: 2 },
    prev: { walks: 3, segs: 5, walkedIn: 1, outside: 2 },
    cur: { walks: 4, segs: 7, walkedIn: 3, outside: 1 }
  })
  assert.equal(swell, 'the approach walk trend (v0.976.250): the walked-in mass\'s own swell ran two steps deep - 0 -> 1 (+1) -> 3 (+2) - the walked-in mass\'s own swell, the walks rode 2 -> 3 -> 4, the outside rode 2 -> 2 -> 1, the segments rode 3 -> 5 -> 7 ' + TAIL)
  const fade = approachWalkTrendRow({
    back: { walks: 4, segs: 7, walkedIn: 3, outside: 1 },
    prev: { walks: 3, segs: 5, walkedIn: 1, outside: 2 },
    cur: { walks: 2, segs: 3, walkedIn: 0, outside: 2 }
  })
  assert.equal(fade, 'the approach walk trend (v0.976.250): the walked-in mass\'s own fade ran two steps deep - 3 -> 1 (-2) -> 0 (-1) - the walked-in mass\'s own fade, the walks rode 4 -> 3 -> 2, the outside rode 1 -> 2 -> 2, the segments rode 7 -> 5 -> 3 ' + TAIL)
})

test('the row: the swing rides, the held step is the honest null', () => {
  const swing = approachWalkTrendRow({
    back: { walks: 4, segs: 7, walkedIn: 3, outside: 1 },
    prev: { walks: 2, segs: 3, walkedIn: 0, outside: 2 },
    cur: { walks: 3, segs: 5, walkedIn: 2, outside: 1 }
  })
  assert.equal(swing, 'the approach walk trend (v0.976.250): the walked-in mass\'s own swing - 3 -> 0 (-3) -> 2 (+2) - the fade and the swell traded seats between the faces, the walks rode 4 -> 2 -> 3, the outside rode 1 -> 2 -> 1, the segments rode 7 -> 3 -> 5 ' + TAIL)
  // a held step prices no direction (the family's own held law)
  const f = { walks: 3, segs: 5, walkedIn: 2, outside: 1 }
  assert.equal(approachWalkTrendRow({ back: { ...f, walkedIn: 3, outside: 0 }, prev: f, cur: f }), null)
  assert.equal(approachWalkTrendRow({ back: f, prev: f, cur: { ...f, walkedIn: 4, outside: 0 } }), null)
  // the three-face zero walks mass prices nothing (the lane never rode)
  const zero = { walks: 0, segs: 0, walkedIn: 0, outside: 0 }
  assert.equal(approachWalkTrendRow({ back: zero, prev: zero, cur: zero }), null)
  // the junk fold prices null (the fence's own law the row inherits)
  assert.equal(approachWalkTrendRow(null), null)
  assert.equal(approachWalkTrendRow({}), null)
})

test('the face the word\'s own read re-speaks (the log block whole)', () => {
  // the fleet face's own log block: the summary lines ride among the
  // neighbours - the census the block holds: 3 walks, 9 segments, 2
  // landed, 1 outside; the block's own neighbour lines the near-miss
  // law keeps out (the yard sibling and the side-step prints the lane
  // carries)
  const lines = [
    'F6 [F6] approach: the stall side-step (right) moved the start (d now 32.9)',
    'F6 [F6] approach: 1 segment(s) walked in 11.4s, goal now d=21.5 (inside the direct envelope)',
    'F5 yard approach: skipped (chest unreachable)',
    'F8 [F8] approach: 2 segment(s) walked in 26.4s, goal now d=23.4 (inside the direct envelope)',
    'F6 [F6] approach: 6 segment(s) walked in 42.4s, goal now d=32.4 (still outside - a segment stalled (no position delta))'
  ]
  const c = approachWalkCensus(lines)
  assert.deepEqual(c, { walks: 3, segs: 9, walkedIn: 2, outside: 1 })
  // the face held into the next face the honest null prices (the
  // two-step shape the family keeps: the second leg 0 - no direction)
  const row = approachWalkTrendRow({ back: { walks: 3, segs: 9, walkedIn: 1, outside: 2 }, prev: c, cur: c })
  assert.ok(row === null, 'the held step the honest null prices')
})

test('the emitter grammar: the approach template the word parses rides the fleet\'s own print', () => {
  // the word parses the line the fleet ALREADY prints (the census
  // guard's own law: zero fleet wiring, zero new fleet log lines) -
  // the emitter's own shape the approach.mjs source holds must stay
  // the grammar the census parses (the deliberate-miss law: the parse
  // never forks a second voice)
  const src = readFileSync(new URL('../../src/lib/approach.mjs', import.meta.url), 'utf8')
  assert.ok(src.includes('approach: ${segmentsUsed.length} segment(s) walked in ${((Date.now() - started) / 1000).toFixed(1)}s, goal now d=${Number.isFinite(d) ? d.toFixed(1) : \'?\'}'), 'the approach emitter the word parses must stand')
})
