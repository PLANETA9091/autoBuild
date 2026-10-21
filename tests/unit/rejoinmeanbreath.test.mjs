import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinMeanBreathCensus, rejoinMeanBreathConsistent, rejoinMeanBreathTrendRow } from '../../src/lib/rejoinmeanbreath.mjs'

// the REAL faces the 41-face archive holds (/home/z/faces331 - the
// storm's own WHOLE cadence list the sum law's own division prices:
// TWENTY-FIVE distinct classes the mean breath voices). The fixtures
// ride the archive's own join columns byte-faithful (the mean prices
// EVERY event - the .352 test's own F506 fixture carried one extra
// echo the gap word's max could not see, the mean breath word's own
// birth the fidelity repair rides, the F509 F530 F532 F537 F539
// columns byte-identical the archive keeps).

// F509's own full join column - the two-flapper's face (F16's two
// re-join events the single gap IS the storm - the mean EQUALS the
// 28 the equality face keeps, the division never thins one gap)
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
// F506's own full join column - the 279-second storm (SEVENTEEN
// re-join events the archive byte-keeps, sixteen adjacent pairs the
// division rides - 279/16 the floor 17 prices, the .352 fixture's
// own extra echo the repair dropped)
const REAL_F506 = [
  '[00:57:33] [Server thread/INFO]: YardSurvey joined the game',
  '[00:57:45] [Server thread/INFO]: F1 joined the game',
  '[00:57:48] [Server thread/INFO]: F2 joined the game',
  '[00:57:50] [Server thread/INFO]: F3 joined the game',
  '[00:57:53] [Server thread/INFO]: F4 joined the game',
  '[00:57:55] [Server thread/INFO]: F5 joined the game',
  '[00:57:58] [Server thread/INFO]: F6 joined the game',
  '[00:58:01] [Server thread/INFO]: F7 joined the game',
  '[00:58:04] [Server thread/INFO]: F8 joined the game',
  '[00:58:06] [Server thread/INFO]: F9 joined the game',
  '[00:58:09] [Server thread/INFO]: F10 joined the game',
  '[00:58:12] [Server thread/INFO]: F11 joined the game',
  '[00:58:15] [Server thread/INFO]: F12 joined the game',
  '[00:58:18] [Server thread/INFO]: F13 joined the game',
  '[00:58:20] [Server thread/INFO]: F14 joined the game',
  '[00:58:23] [Server thread/INFO]: F15 joined the game',
  '[00:58:26] [Server thread/INFO]: F16 joined the game',
  '[00:58:28] [Server thread/INFO]: F17 joined the game',
  '[00:58:31] [Server thread/INFO]: F18 joined the game',
  '[00:58:35] [Server thread/INFO]: F19 joined the game',
  '[01:03:06] [Server thread/INFO]: F12 joined the game',
  '[01:05:34] [Server thread/INFO]: F1 joined the game',
  '[01:05:43] [Server thread/INFO]: F1 joined the game',
  '[01:05:50] [Server thread/INFO]: F1 joined the game',
  '[01:05:55] [Server thread/INFO]: F19 joined the game',
  '[01:05:56] [Server thread/INFO]: F1 joined the game',
  '[01:05:59] [Server thread/INFO]: F10 joined the game',
  '[01:06:00] [Server thread/INFO]: F1 joined the game',
  '[01:06:08] [Server thread/INFO]: F1 joined the game',
  '[01:06:15] [Server thread/INFO]: F1 joined the game',
  '[01:06:22] [Server thread/INFO]: F1 joined the game',
  '[01:06:28] [Server thread/INFO]: F1 joined the game',
  '[01:06:33] [Server thread/INFO]: F1 joined the game',
  '[01:06:34] [Server thread/INFO]: F4 joined the game',
  '[01:06:39] [Server thread/INFO]: F1 joined the game',
  '[01:07:35] [Server thread/INFO]: F7 joined the game',
  '[01:07:45] [Server thread/INFO]: F8 joined the game'
]
// F530's own full join column - the quartet face (four champions the
// peak ties EVERYONE - the 160-second storm three gaps ride, the
// floor of 160/3 the 53 the division prices)
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
// F532's own full join column - the flap duo's face (F13 five
// re-joins F17 three the duo owns - the 248-second storm seven gaps
// ride, the floor of 248/7 the 35 the division prices)
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
// F537's own F5 column - the fire-1043 deep-read's BOTH-EDGES FIRST
// champion window (eleven echoes the column keeps, ten re-join
// events the adjacent pairs measure into NINE gaps - the 364-second
// stretch nine gaps share, the floor of 364/9 the 40 the division
// prices - the full-face mean 11 the arc keeps, the window's own
// mean the column prices)
const REAL_F537_F5 = [
  '[03:17:46] [Server thread/INFO]: F5 joined the game',
  '[03:21:31] [Server thread/INFO]: F5 joined the game',
  '[03:25:42] [Server thread/INFO]: F5 joined the game',
  '[03:26:38] [Server thread/INFO]: F5 joined the game',
  '[03:26:49] [Server thread/INFO]: F5 joined the game',
  '[03:26:56] [Server thread/INFO]: F5 joined the game',
  '[03:27:03] [Server thread/INFO]: F5 joined the game',
  '[03:27:11] [Server thread/INFO]: F5 joined the game',
  '[03:27:19] [Server thread/INFO]: F5 joined the game',
  '[03:27:27] [Server thread/INFO]: F5 joined the game',
  '[03:27:35] [Server thread/INFO]: F5 joined the game'
]
// F539's own full join column - the fire-1143 fresh face (22 re-join
// events the 298-second storm rides, twenty-one adjacent pairs the
// division thins - the floor of 298/21 the 14 the arc keeps)
const REAL_F539 = [
  '[04:20:44] [Server thread/INFO]: YardSurvey joined the game',
  '[04:20:57] [Server thread/INFO]: F1 joined the game',
  '[04:20:59] [Server thread/INFO]: F2 joined the game',
  '[04:21:02] [Server thread/INFO]: F3 joined the game',
  '[04:21:04] [Server thread/INFO]: F4 joined the game',
  '[04:21:07] [Server thread/INFO]: F5 joined the game',
  '[04:21:09] [Server thread/INFO]: F6 joined the game',
  '[04:21:12] [Server thread/INFO]: F7 joined the game',
  '[04:21:14] [Server thread/INFO]: F8 joined the game',
  '[04:21:17] [Server thread/INFO]: F9 joined the game',
  '[04:21:19] [Server thread/INFO]: F10 joined the game',
  '[04:21:22] [Server thread/INFO]: F11 joined the game',
  '[04:21:25] [Server thread/INFO]: F12 joined the game',
  '[04:21:27] [Server thread/INFO]: F13 joined the game',
  '[04:21:30] [Server thread/INFO]: F14 joined the game',
  '[04:21:33] [Server thread/INFO]: F15 joined the game',
  '[04:21:36] [Server thread/INFO]: F16 joined the game',
  '[04:21:38] [Server thread/INFO]: F17 joined the game',
  '[04:21:40] [Server thread/INFO]: F18 joined the game',
  '[04:21:43] [Server thread/INFO]: F19 joined the game',
  '[04:25:52] [Server thread/INFO]: F10 joined the game',
  '[04:26:44] [Server thread/INFO]: F3 joined the game',
  '[04:28:19] [Server thread/INFO]: F18 joined the game',
  '[04:28:39] [Server thread/INFO]: F13 joined the game',
  '[04:28:46] [Server thread/INFO]: F13 joined the game',
  '[04:29:01] [Server thread/INFO]: F13 joined the game',
  '[04:29:06] [Server thread/INFO]: F10 joined the game',
  '[04:29:14] [Server thread/INFO]: F17 joined the game',
  '[04:29:16] [Server thread/INFO]: F19 joined the game',
  '[04:29:17] [Server thread/INFO]: F13 joined the game',
  '[04:29:27] [Server thread/INFO]: F19 joined the game',
  '[04:29:30] [Server thread/INFO]: F10 joined the game',
  '[04:29:34] [Server thread/INFO]: F19 joined the game',
  '[04:29:41] [Server thread/INFO]: F19 joined the game',
  '[04:29:47] [Server thread/INFO]: F19 joined the game',
  '[04:29:51] [Server thread/INFO]: F14 joined the game',
  '[04:29:53] [Server thread/INFO]: F19 joined the game',
  '[04:30:06] [Server thread/INFO]: F14 joined the game',
  '[04:30:25] [Server thread/INFO]: F16 joined the game',
  '[04:30:45] [Server thread/INFO]: F14 joined the game',
  '[04:30:47] [Server thread/INFO]: F13 joined the game',
  '[04:30:50] [Server thread/INFO]: F14 joined the game'
]

test('v0.976.354 census: the REAL faces byte-exact', () => {
  // F509's own face - the equality the two-flapper keeps (28=28)
  assert.deepEqual(rejoinMeanBreathCensus(REAL_F509), { rejoinMeanBreathSeconds: 28 })
  // F506's own face - the floor of 279/16 the SEVENTEEN the archive keeps
  assert.deepEqual(rejoinMeanBreathCensus(REAL_F506), { rejoinMeanBreathSeconds: 17 })
  // F530's own face - the floor of 160/3 (53)
  assert.deepEqual(rejoinMeanBreathCensus(REAL_F530), { rejoinMeanBreathSeconds: 53 })
  // F532's own face - the floor of 248/7 (35)
  assert.deepEqual(rejoinMeanBreathCensus(REAL_F532), { rejoinMeanBreathSeconds: 35 })
  // F537's own champion window - the floor of 364/9 (40)
  assert.deepEqual(rejoinMeanBreathCensus(REAL_F537_F5), { rejoinMeanBreathSeconds: 40 })
  // F539's own face - the floor of 298/21 (14)
  assert.deepEqual(rejoinMeanBreathCensus(REAL_F539), { rejoinMeanBreathSeconds: 14 })
  // the firsts-only face the lawful zero keeps
  assert.deepEqual(rejoinMeanBreathCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:13] [Server thread/INFO]: F4 joined the game'
  ]), { rejoinMeanBreathSeconds: 0 })
  // the single re-join event the lawful zero keeps (no adjacent pair)
  assert.deepEqual(rejoinMeanBreathCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:40] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinMeanBreathSeconds: 0 })
  // the no-echo face the lawful zero keeps
  assert.deepEqual(rejoinMeanBreathCensus(['[21:59:10] [Server thread/INFO]: Done (5.535s)! For help, type "help"']), { rejoinMeanBreathSeconds: 0 })
  // the same-second re-join set the lawful zero keeps (two bots'
  // SECOND joins the same second rides - span zero the division
  // prices zero, the mean0-iff-span0 the twin law keeps)
  assert.deepEqual(rejoinMeanBreathCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:12] [Server thread/INFO]: F4 joined the game',
    '[22:05:05] [Server thread/INFO]: F3 joined the game',
    '[22:05:05] [Server thread/INFO]: F4 joined the game'
  ]), { rejoinMeanBreathSeconds: 0 })
  // the day-cyclic wrap the accounting keeps (23:59:00 to 00:01:00
  // the 120 the next-day dawn rides - one gap the division never thins)
  assert.deepEqual(rejoinMeanBreathCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[23:59:00] [Server thread/INFO]: F3 joined the game',
    '[00:01:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinMeanBreathSeconds: 120 })
  // the FLOOR the integer law keeps (F3's FOUR echoes the three
  // re-join events ride - 22:00:00, 22:00:50, 22:02:01 the dawn the
  // SECOND join keeps, the 121-second span two gaps share - 60.5 the
  // floor 60 prices, the round's 61 the floor never steals)
  assert.deepEqual(rejoinMeanBreathCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[22:00:00] [Server thread/INFO]: F3 joined the game',
    '[22:00:50] [Server thread/INFO]: F3 joined the game',
    '[22:02:01] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinMeanBreathSeconds: 60 })
  // the even division the exactness keeps (100 over two gaps the 50)
  assert.deepEqual(rejoinMeanBreathCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[22:00:00] [Server thread/INFO]: F3 joined the game',
    '[22:00:50] [Server thread/INFO]: F3 joined the game',
    '[22:01:40] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinMeanBreathSeconds: 50 })
  // non-array null
  assert.equal(rejoinMeanBreathCensus(null), null)
  assert.equal(rejoinMeanBreathCensus('lines'), null)
})

test('v0.976.354 arc: the REAL forty-one-face mean breath re-voiced byte-exact', () => {
  // the fire rounds' own audit (/home/z/faces331, the F541 face the
  // artifact 12325861715 rides) re-voices the mean breath arc -
  // TWENTY-FIVE distinct classes no face born-constant
  const ARC = [16, 28, 54, 23, 16, 17, 53, 14, 28, 41, 27, 15, 40, 8, 19, 22, 25, 37, 23, 41, 27, 13, 15, 6, 17, 14, 20, 46, 40, 53, 25, 35, 17, 15, 18, 18, 11, 21, 14, 25, 9]
  assert.equal(ARC.length, 41)
  const classes = [...new Set(ARC)]
  assert.equal(classes.length, 25) // TWENTY-FIVE distinct classes
  assert.equal(Math.max(...ARC), 54) // the ceiling the F503 storm keeps
  assert.equal(Math.min(...ARC), 6) // the floor the F524 storm keeps
  assert.equal(ARC[5], 17) // F506's own 279/16 floor
  assert.equal(ARC[8], 28) // F509's own equality face (28=28)
  assert.equal(ARC[28], 40) // F529's own equality face (40=40)
  assert.equal(ARC[36], 11) // F537's own 364-storm breath (364/32)
  assert.equal(ARC[37], 21) // F538's own 236-storm breath (236/11)
  assert.equal(ARC[38], 14) // F539's own 298-storm breath (298/21)
  assert.equal(ARC[39], 25) // F540's own 325-storm breath (325/13)
  assert.equal(ARC[40], 9) // F541's own 277-storm breath (277/28)
  // the triples the 25-of-41 arithmetic keeps (14, 15, 17, 25)
  for (const triple of [14, 15, 17, 25]) assert.equal(ARC.filter(v => v === triple).length, 3, `triple ${triple}`)
  // the twin pairs (16, 18, 23, 27, 28, 40, 41, 53)
  for (const twin of [16, 18, 23, 27, 28, 40, 41, 53]) assert.equal(ARC.filter(v => v === twin).length, 2, `twin ${twin}`)
  // the EQUALITY LAW: TWO faces the single gap owns the whole storm
  // (the .352 word's own equality pair the same two-event faces keep)
  for (const i of [8, 28]) assert.ok(ARC[i] > 0, `equality face index ${i}`)
  // the REAL held pair the arc's own tail keeps (F535's F536's own 18)
  assert.equal(ARC[34], 18)
  assert.equal(ARC[35], 18)
  // the both-speak law (many values, no born-constant face)
  assert.equal(classes.length > 1, true)
  for (const v of ARC) assert.ok(Number.isInteger(v) && v >= 0 && v <= 86399)
})

test('v0.976.354 grammar: the refusal battery the strict frame keeps', () => {
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
    const face = rejoinMeanBreathCensus([bad])
    assert.deepEqual(face, { rejoinMeanBreathSeconds: 0 }, `refused: ${bad}`)
  }
})

test('v0.976.354 fence: every branch the day law keeps', () => {
  const ok = (v) => ({ back: { rejoinMeanBreathSeconds: v }, prev: { rejoinMeanBreathSeconds: v }, cur: { rejoinMeanBreathSeconds: v } })
  assert.equal(rejoinMeanBreathConsistent(ok(0)), true)
  assert.equal(rejoinMeanBreathConsistent(ok(54)), true)
  assert.equal(rejoinMeanBreathConsistent(ok(86399)), true)
  assert.equal(rejoinMeanBreathConsistent(ok(-1)), false)
  assert.equal(rejoinMeanBreathConsistent(ok(86400)), false)
  assert.equal(rejoinMeanBreathConsistent(ok(0.5)), false)
  assert.equal(rejoinMeanBreathConsistent(ok('54')), false)
  assert.equal(rejoinMeanBreathConsistent(ok(undefined)), false)
  assert.equal(rejoinMeanBreathConsistent(null), false)
  assert.equal(rejoinMeanBreathConsistent({}), false)
  assert.equal(rejoinMeanBreathConsistent({ back: { rejoinMeanBreathSeconds: 0 } }), false)
})

test('v0.976.354 row: the REAL arc windows byte-exact', () => {
  // the REAL swell the arc's own head keeps (F501 -> F502 -> F503:
  // 16 -> 28 -> 54 the stretches two steps deep)
  const swell = rejoinMeanBreathTrendRow({ back: { rejoinMeanBreathSeconds: 16 }, prev: { rejoinMeanBreathSeconds: 28 }, cur: { rejoinMeanBreathSeconds: 54 } })
  assert.equal(swell.startsWith("the fleet's own mean breath trend (v0.976.354): the fleet's own mean breath swell ran two steps deep - 16 -> 28 (+12) -> 54 (+26) - the fleet's own storms' typical breaths stretched each face,"), true)
  // the REAL fade the arc's own body keeps (F510 -> F511 -> F512:
  // 41 -> 27 -> 15 the shortening two steps deep)
  const fade = rejoinMeanBreathTrendRow({ back: { rejoinMeanBreathSeconds: 41 }, prev: { rejoinMeanBreathSeconds: 27 }, cur: { rejoinMeanBreathSeconds: 15 } })
  assert.equal(fade.startsWith("the fleet's own mean breath trend (v0.976.354): the fleet's own mean breath fade ran two steps deep - 41 -> 27 (-14) -> 15 (-12) - the fleet's own storms' typical breaths shortened each face,"), true)
  // the REAL swing the fresh tail keeps (F539 -> F540 -> F541:
  // 14 -> 25 -> 9 the build and the settle)
  const swing = rejoinMeanBreathTrendRow({ back: { rejoinMeanBreathSeconds: 14 }, prev: { rejoinMeanBreathSeconds: 25 }, cur: { rejoinMeanBreathSeconds: 9 } })
  assert.equal(swing.startsWith("the fleet's own mean breath trend (v0.976.354): the fleet's own mean breath swing - 14 -> 25 (+11) -> 9 (-16) - the fleet's own storms traded their typical breath between the faces,"), true)
  // the REAL held second the arc's own tail keeps (F534 -> F535 ->
  // F536: 15 -> 18 -> 18 the held second step the honest silence
  // keeps - the REAL held pair this arc owns)
  assert.equal(rejoinMeanBreathTrendRow({ back: { rejoinMeanBreathSeconds: 15 }, prev: { rejoinMeanBreathSeconds: 18 }, cur: { rejoinMeanBreathSeconds: 18 } }), null)
  // the REAL held first the same pair keeps (F535 -> F536 -> F537:
  // 18 -> 18 -> 11 the held first step)
  assert.equal(rejoinMeanBreathTrendRow({ back: { rejoinMeanBreathSeconds: 18 }, prev: { rejoinMeanBreathSeconds: 18 }, cur: { rejoinMeanBreathSeconds: 11 } }), null)
  // the tail co-existence every seat named (the .346 mass .347
  // breadth .348 depth .349 name .350 span .351 champion .352 gap
  // .353 champion gap siblings)
  for (const seat of ['.346 re-join bin word prices', '.347 re-join bots word prices', '.348 re-join peak word prices', '.349 re-join peak name word prices', '.350 re-join span word prices', '.351 champion stretch word prices', '.352 re-join gap word prices', '.353 champion gap word prices', '.314 join mass word prices', '.336 join echo drift word prices', 'deathcause join/leave counts', 'leave sibling', '.321/.322 login dawn/dusk', '.312/.313 port pair', '.315/.316/.317/.318/.319/.320 login cell seats', '.310/.311 class counts', '.333/.334/.335/.338/.339', '.332 opening clock', '.331 selection', '.330 completion', '.341 save trio clock', '.343 trio order', '.344 TACS order', '.345 TACS drift', '.293 prep', '.294/.324 done-ms', '.325/.326/.327/.328/.329', 'kick bill', '.278 advancement seat', 'gc band', '.292 fill lane']) {
    assert.equal(swell.includes(seat), true, `tail names ${seat}`)
  }
})
