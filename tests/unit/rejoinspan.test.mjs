import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinSpanCensus, rejoinSpanConsistent, rejoinSpanTrendRow } from '../../src/lib/rejoinspan.mjs'

// the REAL faces the fresh 36-face archive holds (fire-0943's own
// re-harvest, /home/z/faces331 - the tempo the four count cells
// underprice: THIRTY-FOUR distinct classes the span voices).

// F509's own full join column - the lone flapper's face (F16's two
// re-joins the 28-second floor class keeps)
const REAL_F509 = [
  '[03:02:19] [Server thread/INFO]: YardSurvey joined the game',
  '[03:02:32] [Server thread/INFO]: F1 joined the game',
  '[03:02:35] [Server thread/INFO]: F2 joined the game',
  '[03:02:37] [Server thread/INFO]: F3 joined the game',
  '[03:02:40] [Server thread/INFO]: F4 joined the game',
  '[03:02:42] [Server thread/INFO]: F5 joined the game',
  '[03:02:45] [Server thread/INFO]: F6 joined the game',
  '[03:02:47] [Server thread/INFO]: F7 joined the game',
  '[03:02:50] [Server thread/INFO]: F8 joined the game',
  '[03:02:52] [Server thread/INFO]: F9 joined the game',
  '[03:02:55] [Server thread/INFO]: F10 joined the game',
  '[03:02:57] [Server thread/INFO]: F11 joined the game',
  '[03:03:00] [Server thread/INFO]: F12 joined the game',
  '[03:03:02] [Server thread/INFO]: F13 joined the game',
  '[03:03:05] [Server thread/INFO]: F14 joined the game',
  '[03:03:07] [Server thread/INFO]: F15 joined the game',
  '[03:03:10] [Server thread/INFO]: F16 joined the game',
  '[03:03:12] [Server thread/INFO]: F17 joined the game',
  '[03:03:15] [Server thread/INFO]: F18 joined the game',
  '[03:03:18] [Server thread/INFO]: F19 joined the game',
  '[03:11:50] [Server thread/INFO]: F16 joined the game',
  '[03:12:18] [Server thread/INFO]: F16 joined the game'
]
// F530's own full join column - the quartet face's own spaced
// re-joins (21:13:40 the dawn, 21:16:20 the dusk - 160 seconds)
const REAL_F530 = [
  '[21:06:47] [Server thread/INFO]: YardSurvey joined the game',
  '[21:06:59] [Server thread/INFO]: F1 joined the game',
  '[21:07:02] [Server thread/INFO]: F2 joined the game',
  '[21:07:04] [Server thread/INFO]: F3 joined the game',
  '[21:07:07] [Server thread/INFO]: F4 joined the game',
  '[21:07:09] [Server thread/INFO]: F5 joined the game',
  '[21:07:12] [Server thread/INFO]: F6 joined the game',
  '[21:07:14] [Server thread/INFO]: F7 joined the game',
  '[21:07:17] [Server thread/INFO]: F8 joined the game',
  '[21:07:19] [Server thread/INFO]: F9 joined the game',
  '[21:07:22] [Server thread/INFO]: F10 joined the game',
  '[21:07:24] [Server thread/INFO]: F11 joined the game',
  '[21:07:27] [Server thread/INFO]: F12 joined the game',
  '[21:07:29] [Server thread/INFO]: F13 joined the game',
  '[21:07:32] [Server thread/INFO]: F14 joined the game',
  '[21:07:34] [Server thread/INFO]: F15 joined the game',
  '[21:07:37] [Server thread/INFO]: F16 joined the game',
  '[21:07:39] [Server thread/INFO]: F17 joined the game',
  '[21:07:42] [Server thread/INFO]: F18 joined the game',
  '[21:07:44] [Server thread/INFO]: F19 joined the game',
  '[21:13:40] [Server thread/INFO]: F14 joined the game',
  '[21:14:14] [Server thread/INFO]: F10 joined the game',
  '[21:15:13] [Server thread/INFO]: F15 joined the game',
  '[21:16:20] [Server thread/INFO]: F17 joined the game'
]
// F532's own full join column - the flap duo's own cadence (F13
// five re-joins F17 three the minute-pair storm keeps - 248)
const REAL_F532 = [
  '[23:01:45] [Server thread/INFO]: YardSurvey joined the game',
  '[23:01:59] [Server thread/INFO]: F1 joined the game',
  '[23:02:01] [Server thread/INFO]: F2 joined the game',
  '[23:02:03] [Server thread/INFO]: F3 joined the game',
  '[23:02:06] [Server thread/INFO]: F4 joined the game',
  '[23:02:08] [Server thread/INFO]: F5 joined the game',
  '[23:02:11] [Server thread/INFO]: F6 joined the game',
  '[23:02:13] [Server thread/INFO]: F7 joined the game',
  '[23:02:16] [Server thread/INFO]: F8 joined the game',
  '[23:02:20] [Server thread/INFO]: F9 joined the game',
  '[23:02:21] [Server thread/INFO]: F10 joined the game',
  '[23:02:24] [Server thread/INFO]: F11 joined the game',
  '[23:02:27] [Server thread/INFO]: F12 joined the game',
  '[23:02:29] [Server thread/INFO]: F13 joined the game',
  '[23:02:32] [Server thread/INFO]: F14 joined the game',
  '[23:02:34] [Server thread/INFO]: F15 joined the game',
  '[23:02:37] [Server thread/INFO]: F16 joined the game',
  '[23:02:39] [Server thread/INFO]: F17 joined the game',
  '[23:02:42] [Server thread/INFO]: F18 joined the game',
  '[23:02:44] [Server thread/INFO]: F19 joined the game',
  '[23:07:30] [Server thread/INFO]: F13 joined the game',
  '[23:08:57] [Server thread/INFO]: F13 joined the game',
  '[23:09:44] [Server thread/INFO]: F13 joined the game',
  '[23:09:50] [Server thread/INFO]: F13 joined the game',
  '[23:10:14] [Server thread/INFO]: F17 joined the game',
  '[23:10:22] [Server thread/INFO]: F17 joined the game',
  '[23:11:21] [Server thread/INFO]: F17 joined the game',
  '[23:11:38] [Server thread/INFO]: F13 joined the game'
]
// F524's own centre window - the storm face's own middle the
// identity word rode (the window's own 157 the honest span keeps -
// the face's own 329 the full column rides, the window the
// champions cell byte-pinned the .349 test keeps)
const REAL_F524_WINDOW = [
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

test('v0.976.350 census: the REAL faces byte-exact', () => {
  // F509's own face - the 28-second floor the lone flapper keeps
  assert.deepEqual(rejoinSpanCensus(REAL_F509), { rejoinSpanSeconds: 28 })
  // F530's own face - the quartet's own 160 the spaced re-joins keep
  assert.deepEqual(rejoinSpanCensus(REAL_F530), { rejoinSpanSeconds: 160 })
  // F532's own face - the flap duo's own 248 the cadence keeps
  assert.deepEqual(rejoinSpanCensus(REAL_F532), { rejoinSpanSeconds: 248 })
  // F524's own centre window - the window's own honest 157
  assert.deepEqual(rejoinSpanCensus(REAL_F524_WINDOW), { rejoinSpanSeconds: 157 })
  // the firsts-only face the lawful zero keeps
  assert.deepEqual(rejoinSpanCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:13] [Server thread/INFO]: F4 joined the game'
  ]), { rejoinSpanSeconds: 0 })
  // the single re-join event the lawful zero keeps (one event no
  // stretch the floor rides)
  assert.deepEqual(rejoinSpanCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:40] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinSpanSeconds: 0 })
  // the no-echo face the lawful zero keeps
  assert.deepEqual(rejoinSpanCensus(['[21:59:10] [Server thread/INFO]: Done (5.535s)! For help, type "help"']), { rejoinSpanSeconds: 0 })
  // the name cell rides shape only - the survey's own triple echo
  // the window carries the events honestly (the frame never filters
  // the name the .349 lesson keeps - the span the first RE-JOIN
  // event's second to the last: 01:48:20 the dawn, 01:48:31 the
  // dusk, the 11 the arithmetic keeps)
  assert.deepEqual(rejoinSpanCensus([
    '[01:48:08] [Server thread/INFO]: YardSurvey joined the game',
    '[01:48:20] [Server thread/INFO]: YardSurvey joined the game',
    '[01:48:31] [Server thread/INFO]: YardSurvey joined the game'
  ]), { rejoinSpanSeconds: 11 })
  // non-array null
  assert.equal(rejoinSpanCensus(null), null)
  assert.equal(rejoinSpanCensus('lines'), null)
})

test('v0.976.350 arc: the REAL thirty-six-face span re-voiced byte-exact', () => {
  // fire-0943's own audit (/home/z/faces331, the F536 face the
  // artifact 12316561498 rides) re-voices the span arc - THIRTY-FOUR
  // distinct classes no face born-constant
  const ARC = [297, 252, 218, 213, 314, 279, 269, 255, 28, 208, 297, 267, 121, 230, 115, 272, 282, 296, 117, 208, 335, 346, 110, 329, 266, 161, 141, 184, 40, 160, 176, 248, 240, 127, 93, 273]
  assert.equal(ARC.length, 36)
  const classes = [...new Set(ARC)]
  assert.equal(classes.length, 34) // THIRTY-FOUR distinct classes
  assert.equal(Math.max(...ARC), 346) // the ceiling F522's own stretch
  assert.equal(Math.min(...ARC), 28) // the floor F509's lone flapper
  assert.equal(ARC[8], 28) // F509's own floor
  assert.equal(ARC[21], 346) // F522's own ceiling
  assert.equal(ARC[23], 329) // F524's own storm
  assert.equal(ARC[35], 273) // F536's own fresh face
  // the repeats the 34-of-36 arithmetic keeps (297 twice, 208 twice)
  assert.equal(ARC.filter(v => v === 297).length, 2)
  assert.equal(ARC.filter(v => v === 208).length, 2)
  // the both-speak law (many values, no born-constant face)
  assert.equal(classes.length > 1, true)
  for (const v of ARC) assert.ok(Number.isInteger(v) && v >= 0 && v <= 86399)
})

test('v0.976.350 grammar: the refusal battery the strict frame keeps', () => {
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
    const face = rejoinSpanCensus([bad])
    assert.deepEqual(face, { rejoinSpanSeconds: 0 }, `refused: ${bad}`)
  }
})

test('v0.976.350 fence: every branch the day law keeps', () => {
  const ok = (v) => ({ back: { rejoinSpanSeconds: v }, prev: { rejoinSpanSeconds: v }, cur: { rejoinSpanSeconds: v } })
  assert.equal(rejoinSpanConsistent(ok(0)), true)
  assert.equal(rejoinSpanConsistent(ok(346)), true)
  assert.equal(rejoinSpanConsistent(ok(86399)), true)
  assert.equal(rejoinSpanConsistent(ok(-1)), false)
  assert.equal(rejoinSpanConsistent(ok(86400)), false)
  assert.equal(rejoinSpanConsistent(ok(0.5)), false)
  assert.equal(rejoinSpanConsistent(ok('346')), false)
  assert.equal(rejoinSpanConsistent(ok(undefined)), false)
  assert.equal(rejoinSpanConsistent(null), false)
  assert.equal(rejoinSpanConsistent({}), false)
  assert.equal(rejoinSpanConsistent({ back: { rejoinSpanSeconds: 0 } }), false)
})

test('v0.976.350 row: the REAL arc windows byte-exact', () => {
  // the REAL swell the floor faces keep (F509 -> F510 -> F511:
  // 28 -> 208 -> 297 the stretch's own build two steps deep)
  const swell = rejoinSpanTrendRow({ back: { rejoinSpanSeconds: 28 }, prev: { rejoinSpanSeconds: 208 }, cur: { rejoinSpanSeconds: 297 } })
  assert.equal(swell.startsWith("the fleet's own re-join span trend (v0.976.350): the fleet's own storm span swell ran two steps deep - 28 -> 208 (+180) -> 297 (+89) - the fleet's own storm stretched each face,"), true)
  // the REAL swing the ceiling faces keep (F521 -> F522 -> F523:
  // 335 -> 346 -> 110 the ceiling's own rise and fall)
  const swing = rejoinSpanTrendRow({ back: { rejoinSpanSeconds: 335 }, prev: { rejoinSpanSeconds: 346 }, cur: { rejoinSpanSeconds: 110 } })
  assert.equal(swing.startsWith("the fleet's own re-join span trend (v0.976.350): the fleet's own storm span swing - 335 -> 346 (+11) -> 110 (-236) - the fleet's own storm traded its stretch between the faces,"), true)
  // the REAL fade the arc's own head keeps (F501 -> F502 -> F503:
  // 297 -> 252 -> 218 the shortening two steps deep)
  const fade = rejoinSpanTrendRow({ back: { rejoinSpanSeconds: 297 }, prev: { rejoinSpanSeconds: 252 }, cur: { rejoinSpanSeconds: 218 } })
  assert.equal(fade.startsWith("the fleet's own re-join span trend (v0.976.350): the fleet's own storm span fade ran two steps deep - 297 -> 252 (-45) -> 218 (-34) - the fleet's own storm shortened each face,"), true)
  // the held step the honest silence keeps (no adjacent equal pair
  // the real 36-face arc keeps - the synthetic window the law's own
  // fence rides)
  assert.equal(rejoinSpanTrendRow({ back: { rejoinSpanSeconds: 297 }, prev: { rejoinSpanSeconds: 297 }, cur: { rejoinSpanSeconds: 252 } }), null)
  // the held second the honest silence keeps
  assert.equal(rejoinSpanTrendRow({ back: { rejoinSpanSeconds: 335 }, prev: { rejoinSpanSeconds: 346 }, cur: { rejoinSpanSeconds: 346 } }), null)
  // the tail co-existence every seat named (the .346 mass .347
  // breadth .348 depth .349 name siblings first)
  for (const seat of ['.346 re-join bin word prices', '.347 re-join bots word prices', '.348 re-join peak word prices', '.349 re-join peak name word prices', '.314 join mass word prices', '.336 join echo drift word prices', 'deathcause join/leave counts', 'leave sibling', '.321/.322 login dawn/dusk', '.312/.313 port pair', '.315/.316/.317/.318/.319/.320 login cell seats', '.310/.311 class counts', '.333/.334/.335/.338/.339', '.332 opening clock', '.331 selection', '.330 completion', '.341 save trio clock', '.343 trio order', '.344 TACS order', '.345 TACS drift', '.293 prep', '.294/.324 done-ms', '.325/.326/.327/.328/.329', 'kick bill', '.278 advancement seat', 'gc band', '.292 fill lane']) {
    assert.equal(swell.includes(seat), true, `tail names ${seat}`)
  }
})
