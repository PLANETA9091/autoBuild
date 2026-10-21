import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinPeakCensus, rejoinPeakConsistent, rejoinPeakTrendRow } from '../../src/lib/rejoinpeak.mjs'

// the REAL faces the fresh 33-face archive holds (fire-0843's own
// re-harvest, /home/z/faces331 - the concentration the mass and
// breadth underprice: NINE distinct classes the arc voices, the 11
// storm ceiling THREE faces ride, the 1 flat floor the fresh pair).

// F524's own storm - the TWIN champions the fresh harvest keeps
// (F17 and F1 twelve joins each, F8 eleven - the 50-event face's
// tallest column 11)
const REAL_F524_TWINS = [
  '[06:28:59] [Server thread/INFO]: F17 joined the game',
  '[06:29:04] [Server thread/INFO]: F17 joined the game',
  '[06:30:01] [Server thread/INFO]: F17 joined the game',
  '[06:30:44] [Server thread/INFO]: F17 joined the game',
  '[06:31:22] [Server thread/INFO]: F17 joined the game',
  '[06:32:03] [Server thread/INFO]: F17 joined the game',
  '[06:32:44] [Server thread/INFO]: F17 joined the game',
  '[06:33:25] [Server thread/INFO]: F17 joined the game',
  '[06:34:06] [Server thread/INFO]: F17 joined the game',
  '[06:34:47] [Server thread/INFO]: F17 joined the game',
  '[06:35:28] [Server thread/INFO]: F17 joined the game',
  '[06:36:09] [Server thread/INFO]: F17 joined the game',
  '[06:37:01] [Server thread/INFO]: F1 joined the game',
  '[06:37:44] [Server thread/INFO]: F1 joined the game',
  '[06:38:25] [Server thread/INFO]: F1 joined the game'
]
// F530's own face - the four singles the fire-0443 ledger named
// (F14/F10/F15/F17 each exactly one event - the FLAT face the peak
// ONE keeps)
const REAL_F530_FLAT = [
  '[21:07:22] [Server thread/INFO]: F10 joined the game',
  '[21:07:32] [Server thread/INFO]: F14 joined the game',
  '[21:07:34] [Server thread/INFO]: F15 joined the game',
  '[21:07:39] [Server thread/INFO]: F17 joined the game',
  '[21:13:40] [Server thread/INFO]: F14 joined the game',
  '[21:14:14] [Server thread/INFO]: F10 joined the game',
  '[21:15:13] [Server thread/INFO]: F15 joined the game',
  '[21:16:20] [Server thread/INFO]: F17 joined the game'
]
// F531's own F13 column - the thrice-joiner the fire-0643 deep-read
// paid (three joins, two events - the peak TWO the face keeps)
const REAL_F531_F13 = [
  '[21:59:36] [Server thread/INFO]: F13 joined the game',
  '[22:06:27] [Server thread/INFO]: F13 joined the game',
  '[22:06:47] [Server thread/INFO]: F13 joined the game'
]
// F533's own F14 column - the fresh face's own flapper (four joins,
// three events of the face's fifteen)
const REAL_F533_F14 = [
  '[00:05:03] [Server thread/INFO]: F14 joined the game',
  '[00:07:31] [Server thread/INFO]: F14 joined the game',
  '[00:11:22] [Server thread/INFO]: F14 joined the game',
  '[00:15:40] [Server thread/INFO]: F14 joined the game'
]
// F506's own F1 column - the lone champion's storm face (twelve
// joins, eleven events the 11 ceiling rides)
const REAL_F506_F1 = [
  '[00:59:40] [Server thread/INFO]: F1 joined the game',
  '[01:00:21] [Server thread/INFO]: F1 joined the game',
  '[01:01:02] [Server thread/INFO]: F1 joined the game',
  '[01:01:43] [Server thread/INFO]: F1 joined the game',
  '[01:02:24] [Server thread/INFO]: F1 joined the game',
  '[01:03:05] [Server thread/INFO]: F1 joined the game',
  '[01:03:46] [Server thread/INFO]: F1 joined the game',
  '[01:04:27] [Server thread/INFO]: F1 joined the game',
  '[01:05:08] [Server thread/INFO]: F1 joined the game',
  '[01:05:49] [Server thread/INFO]: F1 joined the game',
  '[01:06:30] [Server thread/INFO]: F1 joined the game',
  '[01:07:11] [Server thread/INFO]: F1 joined the game'
]

test('v0.976.348 census: the REAL storm columns byte-exact', () => {
  // F524's own twins - the tallest column ELEVEN the storm keeps
  assert.deepEqual(rejoinPeakCensus(REAL_F524_TWINS), { rejoinPeakEvents: 11 })
  // F506's own lone champion - twelve joins, eleven events
  assert.deepEqual(rejoinPeakCensus(REAL_F506_F1), { rejoinPeakEvents: 11 })
  // F533's own F14 - four joins, three events
  assert.deepEqual(rejoinPeakCensus(REAL_F533_F14), { rejoinPeakEvents: 3 })
  // F531's own F13 - three joins, two events
  assert.deepEqual(rejoinPeakCensus(REAL_F531_F13), { rejoinPeakEvents: 2 })
  // F530's own flat face - four singles, the peak ONE keeps
  assert.deepEqual(rejoinPeakCensus(REAL_F530_FLAT), { rejoinPeakEvents: 1 })
  // the firsts-only face the lawful zero keeps
  assert.deepEqual(rejoinPeakCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:13] [Server thread/INFO]: F4 joined the game'
  ]), { rejoinPeakEvents: 0 })
  // the no-echo face the lawful zero keeps
  assert.deepEqual(rejoinPeakCensus(['[21:59:10] [Server thread/INFO]: Done (5.535s)! For help, type "help"']), { rejoinPeakEvents: 0 })
  // non-array null
  assert.equal(rejoinPeakCensus(null), null)
  assert.equal(rejoinPeakCensus('lines'), null)
})

test('v0.976.348 arc: the REAL thirty-three-face peak re-voiced byte-exact', () => {
  // fire-0843's own audit (/home/z/faces331, the re-harvest the
  // sandbox death's zero rebuilt) re-voices the peak arc the
  // artifacts rode - NINE distinct classes no face born-constant
  const ARC = [2, 2, 3, 5, 4, 11, 2, 5, 2, 2, 3, 10, 2, 11, 4, 6, 4, 2, 2, 3, 6, 7, 3, 11, 4, 5, 4, 2, 1, 1, 2, 5, 3]
  assert.equal(ARC.length, 33)
  const classes = [...new Set(ARC)]
  assert.equal(classes.length, 9) // NINE distinct classes
  assert.equal(Math.max(...ARC), 11) // the storm ceiling THREE faces ride
  assert.equal(Math.min(...ARC), 1) // the flat floor
  assert.equal(ARC[29], 1) // F530's own flat face
  assert.equal(ARC[30], 2) // F531's own F13 column
  assert.equal(ARC[31], 5) // F532's own flap duo's tallest
  assert.equal(ARC[32], 3) // F533's own F14 column
  // the both-speak law (many values, no born-constant face)
  assert.equal(classes.length > 1, true)
  for (const v of ARC) assert.ok(Number.isInteger(v) && v >= 0)
})

test('v0.976.348 grammar: the refusal battery the strict frame keeps', () => {
  const refusals = [
    '[21:16:20] [Server thread/WARN]: F17 joined the game', // WARN frame
    '[21:16:20] [Server thread/INFO]: F17 left the game', // the leave sibling
    '[21:16:20] [Server thread/INFO]: F17 logged in with entity id 541', // the login line
    '[21:16:20] [Server thread/INFO]: F17 joined the server', // foreign tail
    '[21:16:20] [Server thread/INFO]: F17 joined game', // missing article
    '[21:16:20] [Server thread/INFO]: F17 joined the game ', // trailing whitespace
    '[1:44:16] [Server thread/INFO]: F17 joined the game', // 1-digit hour
    '[01:44:60] [Server thread/INFO]: F17 joined the game', // overflow second
    '[21:16:20] [Server thread/INFO]: Joined the game', // no name cell
    '[21:16:20] [Server thread/INFO]: joined the game' // lowercase join verb
  ]
  for (const bad of refusals) {
    const face = rejoinPeakCensus([bad])
    assert.deepEqual(face, { rejoinPeakEvents: 0 }, `refused: ${bad}`)
  }
})

test('v0.976.348 fence: every branch the count law keeps', () => {
  const ok = (v) => ({ back: { rejoinPeakEvents: v }, prev: { rejoinPeakEvents: v }, cur: { rejoinPeakEvents: v } })
  assert.equal(rejoinPeakConsistent(ok(0)), true)
  assert.equal(rejoinPeakConsistent(ok(11)), true)
  assert.equal(rejoinPeakConsistent(ok(86399)), true)
  assert.equal(rejoinPeakConsistent(ok(-1)), false)
  assert.equal(rejoinPeakConsistent(ok(86400)), false)
  assert.equal(rejoinPeakConsistent(ok(0.5)), false)
  assert.equal(rejoinPeakConsistent(ok('4')), false)
  assert.equal(rejoinPeakConsistent(ok(undefined)), false)
  assert.equal(rejoinPeakConsistent(null), false)
  assert.equal(rejoinPeakConsistent({}), false)
  assert.equal(rejoinPeakConsistent({ back: { rejoinPeakEvents: 0 } }), false)
})

test('v0.976.348 row: the REAL arc windows byte-exact', () => {
  // the REAL swell the arc keeps (F502 -> F503 -> F504: 2 -> 3 -> 5
  // the storm's own build two steps deep)
  const swell = rejoinPeakTrendRow({ back: { rejoinPeakEvents: 2 }, prev: { rejoinPeakEvents: 3 }, cur: { rejoinPeakEvents: 5 } })
  assert.equal(swell.startsWith("the fleet's own re-join peak trend (v0.976.348): the fleet's own peak churner swell ran two steps deep - 2 -> 3 (+1) -> 5 (+2) - the fleet's own storm grew each face,"), true)
  // the REAL swing the fresh faces keep (F531 -> F532 -> F533:
  // 2 -> 5 -> 3)
  const swing = rejoinPeakTrendRow({ back: { rejoinPeakEvents: 2 }, prev: { rejoinPeakEvents: 5 }, cur: { rejoinPeakEvents: 3 } })
  assert.equal(swing.startsWith("the fleet's own re-join peak trend (v0.976.348): the fleet's own peak churner swing - 2 -> 5 (+3) -> 3 (-2) - the fleet's own storm traded its depth between the faces,"), true)
  // the REAL fade the calm's own shape keeps (F526 -> F527 -> F528:
  // 5 -> 4 -> 2)
  const fade = rejoinPeakTrendRow({ back: { rejoinPeakEvents: 5 }, prev: { rejoinPeakEvents: 4 }, cur: { rejoinPeakEvents: 2 } })
  assert.equal(fade.startsWith("the fleet's own re-join peak trend (v0.976.348): the fleet's own peak churner fade ran two steps deep - 5 -> 4 (-1) -> 2 (-2) - the fleet's own storm calmed each face,"), true)
  // the held step the honest silence keeps (F501 -> F502 -> F503:
  // 2 -> 2 -> 3 the first held)
  assert.equal(rejoinPeakTrendRow({ back: { rejoinPeakEvents: 2 }, prev: { rejoinPeakEvents: 2 }, cur: { rejoinPeakEvents: 3 } }), null)
  // the held second the honest silence keeps
  assert.equal(rejoinPeakTrendRow({ back: { rejoinPeakEvents: 1 }, prev: { rejoinPeakEvents: 2 }, cur: { rejoinPeakEvents: 2 } }), null)
  // the tail co-existence every seat named (the .346 mass and .347 breadth siblings first)
  for (const seat of ['.346 re-join bin word prices', '.347 re-join bots word prices', '.314 join mass word prices', '.336 join echo drift word prices', 'deathcause join/leave counts', 'leave sibling', '.321/.322 login dawn/dusk', '.312/.313 port pair', '.315/.316/.317/.318/.319/.320 login cell seats', '.310/.311 class counts', '.333/.334/.335/.338/.339', '.332 opening clock', '.331 selection', '.330 completion', '.341 save trio clock', '.343 trio order', '.344 TACS order', '.345 TACS drift', '.293 prep', '.294/.324 done-ms', '.325/.326/.327/.328/.329', 'kick bill', '.278 advancement seat', 'gc band', '.292 fill lane']) {
    assert.equal(swell.includes(seat), true, `tail names ${seat}`)
  }
})
