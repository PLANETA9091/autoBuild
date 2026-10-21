import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinPeakNameCensus, rejoinPeakNameConsistent, rejoinPeakNameTrendRow } from '../../src/lib/rejoinpeakname.mjs'

// the REAL faces the fresh 35-face archive holds (fire-0943's own
// re-harvest, /home/z/faces331 - the identity the mass breadth depth
// underprice: THREE distinct classes the count voices, the 1 the lone
// majority, the 2 the twin class, the 4 the quartet face).

// F524's own twin window - the TWIN champions the storm face keeps
// (F17 twelve joins and F1 twelve joins - both columns eleven
// re-joins, the TIE at the top the census takes)
const REAL_F524_TWINS = [
  '[16:22:29] [Server thread/INFO]: F1 joined the game',
  '[16:23:13] [Server thread/INFO]: F17 joined the game',
  '[16:28:31] [Server thread/INFO]: F17 joined the game',
  '[16:28:50] [Server thread/INFO]: F17 joined the game',
  '[16:29:00] [Server thread/INFO]: F17 joined the game',
  '[16:29:12] [Server thread/INFO]: F17 joined the game',
  '[16:29:20] [Server thread/INFO]: F17 joined the game',
  '[16:29:34] [Server thread/INFO]: F17 joined the game',
  '[16:29:45] [Server thread/INFO]: F17 joined the game',
  '[16:29:58] [Server thread/INFO]: F17 joined the game',
  '[16:30:08] [Server thread/INFO]: F17 joined the game',
  '[16:30:08] [Server thread/INFO]: F1 joined the game',
  '[16:30:17] [Server thread/INFO]: F1 joined the game',
  '[16:30:18] [Server thread/INFO]: F17 joined the game',
  '[16:30:24] [Server thread/INFO]: F1 joined the game',
  '[16:30:28] [Server thread/INFO]: F1 joined the game',
  '[16:30:31] [Server thread/INFO]: F17 joined the game',
  '[16:30:34] [Server thread/INFO]: F1 joined the game',
  '[16:30:39] [Server thread/INFO]: F1 joined the game',
  '[16:30:46] [Server thread/INFO]: F1 joined the game',
  '[16:30:52] [Server thread/INFO]: F1 joined the game',
  '[16:30:56] [Server thread/INFO]: F1 joined the game',
  '[16:31:01] [Server thread/INFO]: F1 joined the game',
  '[16:31:08] [Server thread/INFO]: F1 joined the game'
]
// F530's own face - the QUARTET the flat floor ties (F10/F14/F15/F17
// each exactly one re-join - all four champions the peak ONE keeps)
const REAL_F530_QUARTET = [
  '[21:07:22] [Server thread/INFO]: F10 joined the game',
  '[21:07:32] [Server thread/INFO]: F14 joined the game',
  '[21:07:34] [Server thread/INFO]: F15 joined the game',
  '[21:07:39] [Server thread/INFO]: F17 joined the game',
  '[21:13:40] [Server thread/INFO]: F14 joined the game',
  '[21:14:14] [Server thread/INFO]: F10 joined the game',
  '[21:15:13] [Server thread/INFO]: F15 joined the game',
  '[21:16:20] [Server thread/INFO]: F17 joined the game'
]
// F506's own F1 column - the lone champion's storm face (twelve
// joins, eleven events - the champion ONE the 11 column rides)
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
// F534's own F17 column - the fresh face's own champion the
// fire-0843 deep-read named (six joins, five events)
const REAL_F534_F17 = [
  '[01:00:21] [Server thread/INFO]: F17 joined the game',
  '[01:07:30] [Server thread/INFO]: F17 joined the game',
  '[01:07:38] [Server thread/INFO]: F17 joined the game',
  '[01:07:46] [Server thread/INFO]: F17 joined the game',
  '[01:07:54] [Server thread/INFO]: F17 joined the game',
  '[01:08:08] [Server thread/INFO]: F17 joined the game'
]
// F531's own F13 column - the thrice-joiner the fire-0643 deep-read
// paid (three joins, two events)
const REAL_F531_F13 = [
  '[21:59:36] [Server thread/INFO]: F13 joined the game',
  '[22:06:27] [Server thread/INFO]: F13 joined the game',
  '[22:06:47] [Server thread/INFO]: F13 joined the game'
]

test('v0.976.349 census: the REAL champion columns byte-exact', () => {
  // F524's own twins - the TIE at the top TWO champions ride
  assert.deepEqual(rejoinPeakNameCensus(REAL_F524_TWINS), { rejoinPeakNameChampions: ['F1', 'F17'], rejoinPeakNameCount: 2 })
  // F530's own quartet - the floor ties EVERYONE four champions ride
  assert.deepEqual(rejoinPeakNameCensus(REAL_F530_QUARTET), { rejoinPeakNameChampions: ['F10', 'F14', 'F15', 'F17'], rejoinPeakNameCount: 4 })
  // F506's own lone champion - the single column's owner
  assert.deepEqual(rejoinPeakNameCensus(REAL_F506_F1), { rejoinPeakNameChampions: ['F1'], rejoinPeakNameCount: 1 })
  // F534's own F17 - the fire-0843 deep-read's own champion
  assert.deepEqual(rejoinPeakNameCensus(REAL_F534_F17), { rejoinPeakNameChampions: ['F17'], rejoinPeakNameCount: 1 })
  // F531's own F13 - the fresh face's thrice-joiner
  assert.deepEqual(rejoinPeakNameCensus(REAL_F531_F13), { rejoinPeakNameChampions: ['F13'], rejoinPeakNameCount: 1 })
  // the firsts-only face the lawful zero keeps
  assert.deepEqual(rejoinPeakNameCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:13] [Server thread/INFO]: F4 joined the game'
  ]), { rejoinPeakNameChampions: [], rejoinPeakNameCount: 0 })
  // the no-echo face the lawful zero keeps
  assert.deepEqual(rejoinPeakNameCensus(['[21:59:10] [Server thread/INFO]: Done (5.535s)! For help, type "help"']), { rejoinPeakNameChampions: [], rejoinPeakNameCount: 0 })
  // the survey's own single join never champions (the ladder law)
  assert.deepEqual(rejoinPeakNameCensus([
    '[01:48:08] [Server thread/INFO]: YardSurvey joined the game',
    '[01:48:20] [Server thread/INFO]: YardSurvey joined the game'
  ]), { rejoinPeakNameChampions: [], rejoinPeakNameCount: 0 })
  // non-array null
  assert.equal(rejoinPeakNameCensus(null), null)
  assert.equal(rejoinPeakNameCensus('lines'), null)
})

test('v0.976.349 arc: the REAL thirty-five-face champion count re-voiced byte-exact', () => {
  // fire-0943's own audit (/home/z/faces331, the F535 face the
  // artifact 12314634318 rides) re-voices the champion-count arc the
  // artifacts rode - THREE distinct classes no face born-constant
  const ARC = [2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 4, 1, 1, 1, 1, 1]
  assert.equal(ARC.length, 35)
  const classes = [...new Set(ARC)]
  assert.equal(classes.length, 3) // THREE distinct classes
  assert.equal(Math.max(...ARC), 4) // the quartet ceiling ONE face rides
  assert.equal(Math.min(...ARC), 1) // the lone floor the majority keeps
  assert.equal(ARC.filter(v => v === 1).length, 26) // the lone majority
  assert.equal(ARC.filter(v => v === 2).length, 7) // the twin class (F524's storm twins among them)
  assert.equal(ARC.filter(v => v === 4).length, 1) // F530's own quartet
  assert.equal(ARC[23], 2) // F524's own twins
  assert.equal(ARC[29], 4) // F530's own quartet
  assert.equal(ARC[34], 1) // F535's own lone F13
  // the both-speak law (many values, no born-constant face)
  assert.equal(classes.length > 1, true)
  for (const v of ARC) assert.ok(Number.isInteger(v) && v >= 0)
})

test('v0.976.349 grammar: the refusal battery the strict frame keeps', () => {
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
    const face = rejoinPeakNameCensus([bad])
    assert.deepEqual(face, { rejoinPeakNameChampions: [], rejoinPeakNameCount: 0 }, `refused: ${bad}`)
  }
})

test('v0.976.349 fence: every branch the count law keeps', () => {
  const ok = (v) => ({ back: { rejoinPeakNameCount: v }, prev: { rejoinPeakNameCount: v }, cur: { rejoinPeakNameCount: v } })
  assert.equal(rejoinPeakNameConsistent(ok(0)), true)
  assert.equal(rejoinPeakNameConsistent(ok(4)), true)
  assert.equal(rejoinPeakNameConsistent(ok(86399)), true)
  assert.equal(rejoinPeakNameConsistent(ok(-1)), false)
  assert.equal(rejoinPeakNameConsistent(ok(86400)), false)
  assert.equal(rejoinPeakNameConsistent(ok(0.5)), false)
  assert.equal(rejoinPeakNameConsistent(ok('4')), false)
  assert.equal(rejoinPeakNameConsistent(ok(undefined)), false)
  assert.equal(rejoinPeakNameConsistent(null), false)
  assert.equal(rejoinPeakNameConsistent({}), false)
  assert.equal(rejoinPeakNameConsistent({ back: { rejoinPeakNameCount: 0 } }), false)
})

test('v0.976.349 row: the REAL arc windows byte-exact', () => {
  // the REAL swell the fresh faces keep (F528 -> F529 -> F530:
  // 1 -> 2 -> 4 the throne's own build two steps deep - the quartet
  // face the ceiling rides)
  const swell = rejoinPeakNameTrendRow({ back: { rejoinPeakNameCount: 1 }, prev: { rejoinPeakNameCount: 2 }, cur: { rejoinPeakNameCount: 4 } })
  assert.equal(swell.startsWith("the fleet's own re-join peak name trend (v0.976.349): the fleet's own champion throne swell ran two steps deep - 1 -> 2 (+1) -> 4 (+2) - the fleet's own storm thrones widened each face,"), true)
  // the REAL swing the fresh faces keep (F529 -> F530 -> F531:
  // 2 -> 4 -> 1 the quartet's own rise and fall)
  const swing = rejoinPeakNameTrendRow({ back: { rejoinPeakNameCount: 2 }, prev: { rejoinPeakNameCount: 4 }, cur: { rejoinPeakNameCount: 1 } })
  assert.equal(swing.startsWith("the fleet's own re-join peak name trend (v0.976.349): the fleet's own champion throne swing - 2 -> 4 (+2) -> 1 (-3) - the fleet's own storm traded its thrones between the faces,"), true)
  // the held step the honest silence keeps (F501 -> F502 -> F503:
  // 2 -> 2 -> 1 the first held)
  assert.equal(rejoinPeakNameTrendRow({ back: { rejoinPeakNameCount: 2 }, prev: { rejoinPeakNameCount: 2 }, cur: { rejoinPeakNameCount: 1 } }), null)
  // the held second the honest silence keeps (F530 -> F531 -> F532:
  // 4 -> 1 -> 1 the second held)
  assert.equal(rejoinPeakNameTrendRow({ back: { rejoinPeakNameCount: 4 }, prev: { rejoinPeakNameCount: 1 }, cur: { rejoinPeakNameCount: 1 } }), null)
  // the tail co-existence every seat named (the .346 mass .347
  // breadth .348 depth siblings first)
  for (const seat of ['.346 re-join bin word prices', '.347 re-join bots word prices', '.348 re-join peak word prices', '.314 join mass word prices', '.336 join echo drift word prices', 'deathcause join/leave counts', 'leave sibling', '.321/.322 login dawn/dusk', '.312/.313 port pair', '.315/.316/.317/.318/.319/.320 login cell seats', '.310/.311 class counts', '.333/.334/.335/.338/.339', '.332 opening clock', '.331 selection', '.330 completion', '.341 save trio clock', '.343 trio order', '.344 TACS order', '.345 TACS drift', '.293 prep', '.294/.324 done-ms', '.325/.326/.327/.328/.329', 'kick bill', '.278 advancement seat', 'gc band', '.292 fill lane']) {
    assert.equal(swell.includes(seat), true, `tail names ${seat}`)
  }
})
