// (v0.976.245) THE CLIMB RUN-UP'S OWN GALLERY OPENING - the word's own
// pins. THE EVIDENCE (the F471 face's own read, the run 39152257685 the
// .242 tree rode): the miner's own run-up walk prints 'F19 [F19] climb
// run-up: gallery opened toward 0,1 (digs 1) - the rise re-judges from
// the L-mouth' (one call site, the walkedIn gate holds) and no book
// owned the mass - the climb family's own seats price the neighbours
// (the climb bridge's own placement trend, the climb diag's own trend,
// the climb wet escape's own trend, the climb pounce probe's own trend,
// the wet wall yield's own trend) - the run-up's own gallery opening rode
// unread (the F471 face held 3 openings, the digs 1/1/0).
// The pins: the census parse byte-exact (the F471 lines whole, the mass
// sums, the lastDigs/peakDigs cells, the near-miss lanes' refusal, the
// junk laws), the fence (every honest branch, the junk laws), the row
// (the swell / the fade / the swing byte-exact, the held step's honest
// null, the three-face zero's lawful null, the junk fold's null), the
// F471 face's own three lines re-speak the census whole and the emitter
// grammar (the miner template the word parses is the line the fleet
// prints - the deliberate-miss law: a near-miss census voice never
// rides).
import { test } from 'node:test'
import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { climbRunUpCensus, climbRunUpTrendConsistent, climbRunUpTrendRow } from '../../src/lib/climbrunuptrend.mjs'

const TAIL = "(the climb bridge's own placement trend prices the climb bridge's own placement mass across the faces, the climb diag's own trend prices the diagonal's own read across the faces, the climb wet escape's own trend prices the wet lane's own mass across the faces, the climb pounce probe's own trend prices the probe lane's own mass across the faces, the wet wall yield's own trend prices the water's wall front's own yield mass across the faces - the climb run-up's mass row alone, co-existence by seat never by duplication)"

test('the census: the F471 line rides whole (byte-exact shape)', () => {
  const lines = [
    'F4 [F4] climb bridge: the pocket is empty - the pit donates a dirt at [-118,64,416] - the fill refunds it',
    'F19 [F19] climb run-up: gallery opened toward 0,1 (digs 1) - the rise re-judges from the L-mouth',
    'F4 [F4] climb diag: level at y=64 blocked toward 0,1 (dug=0)'
  ]
  const c = climbRunUpCensus(lines)
  assert.deepEqual(c, { openings: 1, digs: 1, lastDigs: 1, peakDigs: 1 })
})

test('the census: the negative bearing rides whole (the 0,-1 cell)', () => {
  const c = climbRunUpCensus([
    'F9 [F9] climb run-up: gallery opened toward 0,-1 (digs 0) - the rise re-judges from the L-mouth'
  ])
  assert.deepEqual(c, { openings: 1, digs: 0, lastDigs: 0, peakDigs: 0 })
})

test('the census: the mass sums, the last print owns the lastDigs cell, the peak rides the high-water', () => {
  const c = climbRunUpCensus([
    'F19 [F19] climb run-up: gallery opened toward 0,1 (digs 1) - the rise re-judges from the L-mouth',
    'F1 [F1] climb run-up: gallery opened toward 1,0 (digs 1) - the rise re-judges from the L-mouth',
    'F9 [F9] climb run-up: gallery opened toward 0,-1 (digs 0) - the rise re-judges from the L-mouth'
  ])
  assert.deepEqual(c, { openings: 3, digs: 2, lastDigs: 0, peakDigs: 1 })
})

test('the census: near-misses and junk never ride', () => {
  // the siblings' own writes - their own seats price those lanes
  assert.deepEqual(climbRunUpCensus(['F4 [F4] climb bridge: the pocket is empty - the pit donates a dirt at [-118,64,416] - the fill refunds it']), { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 })
  assert.deepEqual(climbRunUpCensus(['F4 [F4] climb diag: level at y=64 blocked toward 0,1 (dug=0)']), { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 })
  assert.deepEqual(climbRunUpCensus(['F15 [F15] climb wet escape: 1 blocks walked (low-o2, walked 1/4)']), { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 })
  assert.deepEqual(climbRunUpCensus(['F19 [F19] climb pounce probe: the signature declined (support=dirt, step=grass_block, head=air) - the well census continues']), { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 })
  // the truncated tail never rides (the strict grammar's own fence)
  assert.deepEqual(climbRunUpCensus(['F19 [F19] climb run-up: gallery opened toward 0,1 (digs 1)']), { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 })
  assert.deepEqual(climbRunUpCensus(['F19 [F19] climb run-up: gallery opened toward 0,1']), { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 })
  assert.deepEqual(climbRunUpCensus(['F19 [F19] climb run-up: gallery opened']), { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 })
  // the un-parenthesised digs cell never rides
  assert.deepEqual(climbRunUpCensus(['F19 [F19] climb run-up: gallery opened toward 0,1 digs 1 - the rise re-judges from the L-mouth']), { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 })
  // the altered tail prose never rides
  assert.deepEqual(climbRunUpCensus(['F19 [F19] climb run-up: gallery opened toward 0,1 (digs 1) - the rise re-judges from the mouth']), { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 })
  // the wrong frame never rides
  assert.deepEqual(climbRunUpCensus(['F19 [F19] climb run-ups: gallery opened toward 0,1 (digs 1) - the rise re-judges from the L-mouth']), { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 })
  // the bot tags must agree (the climb lane's own backref law)
  assert.deepEqual(climbRunUpCensus(['F19 [F9] climb run-up: gallery opened toward 0,1 (digs 1) - the rise re-judges from the L-mouth']), { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 })
  // junk-safe: the empty and non-string faces hold the lawful zero, the
  // non-array junk prices null (the family's own law the census rides)
  assert.deepEqual(climbRunUpCensus([]), { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 })
  assert.equal(climbRunUpCensus(null), null)
  assert.equal(climbRunUpCensus('F19 [F19] climb run-up: gallery opened toward 0,1 (digs 1) - the rise re-judges from the L-mouth'), null)
  assert.deepEqual(climbRunUpCensus([42, {}]), { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 })
})

test('the fence: every honest branch and every junk law rides', () => {
  const face = { openings: 3, digs: 2, lastDigs: 0, peakDigs: 1 }
  assert.equal(climbRunUpTrendConsistent({ back: face, prev: face, cur: face }), true)
  // zero counts are lawful (the lane-never-fired face the fence keeps)
  assert.equal(climbRunUpTrendConsistent({ back: { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 }, prev: { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 }, cur: { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 } }), true)
  // extra keys never rejected (the family's own extra-keys law)
  assert.equal(climbRunUpTrendConsistent({ back: { ...face, note: 'x' }, prev: face, cur: face }), true)
  // the junk laws: the null face, the missing face, the non-integer, the negative
  assert.equal(climbRunUpTrendConsistent(null), false)
  assert.equal(climbRunUpTrendConsistent({}), false)
  assert.equal(climbRunUpTrendConsistent({ back: face, prev: face }), false)
  assert.equal(climbRunUpTrendConsistent({ back: face, prev: { openings: 1.5, digs: 0, lastDigs: 0, peakDigs: 0 }, cur: face }), false)
  assert.equal(climbRunUpTrendConsistent({ back: face, prev: { openings: -1, digs: 0, lastDigs: 0, peakDigs: 0 }, cur: face }), false)
  assert.equal(climbRunUpTrendConsistent({ back: 'x', prev: face, cur: face }), false)
  assert.equal(climbRunUpTrendConsistent([face, face, face]), false)
})

test('the row: the swell and the fade byte-exact', () => {
  const swell = climbRunUpTrendRow({ back: { openings: 1, digs: 1, lastDigs: 1, peakDigs: 1 }, prev: { openings: 2, digs: 2, lastDigs: 0, peakDigs: 2 }, cur: { openings: 4, digs: 3, lastDigs: 1, peakDigs: 2 } })
  assert.equal(swell, 'the climb run-up trend (v0.976.245): the gallery\'s own swell ran two steps deep - 1 -> 2 (+1) -> 4 (+2) - the openings mass\'s own swell, the dig mass rode 1 -> 2 -> 3, the peak rode 1 -> 2 -> 2 ' + TAIL)
  const fade = climbRunUpTrendRow({ back: { openings: 5, digs: 4, lastDigs: 1, peakDigs: 2 }, prev: { openings: 3, digs: 2, lastDigs: 0, peakDigs: 1 }, cur: { openings: 1, digs: 0, lastDigs: 0, peakDigs: 0 } })
  assert.equal(fade, 'the climb run-up trend (v0.976.245): the gallery\'s own fade ran two steps deep - 5 -> 3 (-2) -> 1 (-2) - the openings mass\'s own fade, the dig mass rode 4 -> 2 -> 0, the peak rode 2 -> 1 -> 0 ' + TAIL)
})

test('the row: the swing rides, the held step is the honest null', () => {
  const swing = climbRunUpTrendRow({ back: { openings: 4, digs: 3, lastDigs: 1, peakDigs: 2 }, prev: { openings: 1, digs: 0, lastDigs: 0, peakDigs: 0 }, cur: { openings: 3, digs: 2, lastDigs: 1, peakDigs: 1 } })
  assert.equal(swing, 'the climb run-up trend (v0.976.245): the openings mass\'s own swing - 4 -> 1 (-3) -> 3 (+2) - the fade and the swell traded seats between the faces, the dig mass rode 3 -> 0 -> 2, the peak rode 2 -> 0 -> 1 ' + TAIL)
  // a held step prices no direction (the family's own held law)
  assert.equal(climbRunUpTrendRow({ back: { openings: 1, digs: 1, lastDigs: 1, peakDigs: 1 }, prev: { openings: 2, digs: 2, lastDigs: 0, peakDigs: 2 }, cur: { openings: 2, digs: 3, lastDigs: 1, peakDigs: 2 } }), null)
  assert.equal(climbRunUpTrendRow({ back: { openings: 2, digs: 2, lastDigs: 0, peakDigs: 2 }, prev: { openings: 2, digs: 3, lastDigs: 1, peakDigs: 2 }, cur: { openings: 4, digs: 3, lastDigs: 1, peakDigs: 2 } }), null)
  // the three-face zero mass prices nothing (the lane never fired)
  assert.equal(climbRunUpTrendRow({ back: { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 }, prev: { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 }, cur: { openings: 0, digs: 0, lastDigs: 0, peakDigs: 0 } }), null)
  // the junk fold prices null (the fence's own law the row inherits)
  assert.equal(climbRunUpTrendRow(null), null)
  assert.equal(climbRunUpTrendRow({}), null)
})

test('the F471 face the word\'s own read re-speaks (the three lines whole)', () => {
  // the F471 face's own three run-up prints (the run 39152257685 the
  // .242 tree rode): the F19 0,1 (digs 1), the F1 1,0 (digs 1), the F9
  // 0,-1 (digs 0) - the census the face holds: 3 openings, the dig mass
  // 2, the last cell 0, the peak 1; the face's own sibling lanes the
  // near-miss law keeps out (the bridge and the diag lines the log
  // carries)
  const lines = [
    'F4 [F4] climb bridge: the pocket is empty - the pit donates a dirt at [-118,64,416] - the fill refunds it',
    'F19 [F19] climb run-up: gallery opened toward 0,1 (digs 1) - the rise re-judges from the L-mouth',
    'F4 [F4] climb diag: level at y=64 blocked toward 0,1 (dug=0)',
    'F1 [F1] climb run-up: gallery opened toward 1,0 (digs 1) - the rise re-judges from the L-mouth',
    'F15 [F15] climb wet escape: 1 blocks walked (low-o2, walked 1/4)',
    'F9 [F9] climb run-up: gallery opened toward 0,-1 (digs 0) - the rise re-judges from the L-mouth'
  ]
  const c = climbRunUpCensus(lines)
  assert.deepEqual(c, { openings: 3, digs: 2, lastDigs: 0, peakDigs: 1 })
  // the F471 -> the next face's own row the fold prices: the mass held
  // into the next face the honest null prices (the two-step shape the
  // family keeps: the first leg +2, the second leg 0 - no direction)
  const row = climbRunUpTrendRow({ back: { openings: 1, digs: 1, lastDigs: 0, peakDigs: 1 }, prev: c, cur: c })
  assert.ok(row === null, 'the held step the honest null prices')
})

test('the emitter grammar: the miner template the word parses rides the fleet\'s own print', () => {
  // the word parses the line the fleet ALREADY prints (the census guard's
  // own law: zero fleet wiring, zero new fleet log lines) - the emitter's
  // own shape the miner source holds must stay the grammar the census
  // parses (the deliberate-miss law: the parse never forks a second voice)
  const minerSrc = readFileSync(new URL('../../src/bots/miner.mjs', import.meta.url), 'utf8')
  assert.ok(minerSrc.includes('climb run-up: gallery opened toward ${d.x},${d.z} (digs ${plan.digs.length}) - the rise re-judges from the L-mouth'), 'the miner climb run-up emitter the word parses must stand')
})
