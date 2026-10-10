// The doom-emptied window's own depth (v0.904.0) - the second leg's re-selection
// deepens once before the honest refusal.
//
// Face 184 (the v0.902.0 veto's own first face) priced the window's shallowness:
// the second leg's family spoke 5 lines - delivered 0 (THE ZERO DELIVERY row's
// debut) / refused 4 / failed 1 (the failed one a genuine 'No path', the
// doomed-goal consult label GONE from the second leg's book) - and the consult's
// whole face carried ZERO second-leg labels. But every refused re-selection
// emptied its k-nearest window whole while the map held 242 sand records: the
// reads are k=4 (board-less) / k=6 (board) windows, and the storm's kill
// clusters write their fresh graves exactly on the shores the trips target
// (face 184's three clustered kill sites sat on the sand shore) - a 3-site
// blast covers a 4-deep window. The cure: the re-selection's window deepens
// once (k 4/6 -> 16). These tests pin the depth's own arithmetic at the pure
// surface (firstUsableRecord over synthetic nearestK windows), the constant's
// law, the wire pins (only the second leg's re-selection deepens) and the
// census's honest refusal (the depth never manufactures a candidate).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import { TRIP_DEEP_K, secondLegDecision, secondLegCensus, parseMapTrip } from '../../src/lib/maptrip.mjs'
import { firstUsableRecord } from '../../src/fleet/worldmap.mjs'

const rec = (x, z, y = 64) => ({ x, y, z })

test('the depth law: a shallow window empties where a deep one answers', () => {
  // 16 records; the nearest 4 ride the blast (the storm's own shore), the 5th is clean
  const records = [rec(-140, 391), rec(-141, 392), rec(-139, 393), rec(-140, 394), rec(-128, 402), rec(-126, 404)]
  const blast = p => p.x <= -139 // the clustered kill sites' own veto shape
  assert.equal(firstUsableRecord(records.slice(0, 4), { isBlocked: blast }), null) // the k=4 window: refused
  assert.equal(firstUsableRecord(records, { isBlocked: blast }), records[4]) // the deep window answers the 5th
})

test('the depth never manufactures a candidate: an all-doomed deep window stays the honest null', () => {
  const allDoomed = [rec(-140, 391), rec(-141, 392), rec(-139, 393), rec(-140, 394), rec(-139, 395), rec(-140, 396)]
  const blast = p => p.x <= -139
  assert.equal(firstUsableRecord(allDoomed, { isBlocked: blast }), null) // even 16-deep refuses honestly
  // the decision contract rides unchanged: no candidate -> the honest refusal
  assert.deepEqual(secondLegDecision({ firstLegError: 'unreachable', shouldStopNow: false, hasCandidate: false }), { leg: 'none', why: 'no-candidate' })
})

test('the constant law: 16 is the deep read both bases agree on', () => {
  assert.equal(TRIP_DEEP_K, 16) // 4x the board-less base (4), ~2.7x the board base (6)
  assert.ok(TRIP_DEEP_K > 6, 'the deep read must escape the board path\'s own base too')
})

test('WIRE PIN: only the second leg\'s re-selection deepens', () => {
  const miner = fs.readFileSync(new URL('../../src/bots/miner.mjs', import.meta.url), 'utf8')
  // the re-selection rides the deepen flag (the v0.902.0 extraSkip beside it)
  assert.ok(miner.includes('mapTargetFor(findNames, { maxDistance, verify: false, extraSkip: doomTrip, deepen: true })'), 'the second leg\'s re-selection deepens')
  // the first leg's own call never passes deepen (its nearest law is its own)
  assert.ok(miner.includes('const target = mapTargetFor(findNames, { maxDistance, verify: false })'), 'the first leg\'s call keeps its shape')
  // both selection paths read the deepen-conditional k
  assert.ok(miner.includes('k: k ?? 6'), 'the board path deepens from its base 6')
  assert.ok(miner.includes('k: k ?? 4'), 'the board-less path deepens from its base 4')
})

test('CENSUS GUARD: the deep window\'s honest refusal still rides the refused form', () => {
  // when even k=16 empties the re-selection, the caller logs the standing
  // refused form - no new wire shape, the census keeps counting it
  assert.equal(parseMapTrip('F5 map trip second leg skipped: no candidate left'), null) // never a launch/skip
  const c = secondLegCensus(['F5 map trip second leg skipped: no candidate left'])
  assert.equal(c.refused, 1)
  assert.equal(c.n, 1)
})
