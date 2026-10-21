import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinGapCensus, rejoinGapConsistent, rejoinGapTrendRow } from '../../src/lib/rejoingap.mjs'

// the REAL faces the 39-face archive holds (/home/z/faces331 - the
// storm's own longest inter-event silence the six cells underprice:
// THIRTY-ONE distinct classes the gap voices).

// F509's own full join column - the two-flapper's face (F16's two
// re-join events the single gap IS the storm - the gap EQUALS the
// 28 the equality face keeps)
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
// F506's own full join column - the 279-second storm the 148-second
// silence opens (F12's 01:03:06 echo to F1's 01:05:34 the storm's
// own dawn-breath the lone champion's burst waits beyond)
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
// peak ties EVERYONE - the storm's own tail 67-second breath the
// 15:13 to 16:20 pair rides)
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
// re-joins F17 three the duo owns - the 23:08:57 gap 87 the F13
// column's own second echo waits)
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
// champion window (the champion's OWN intra-window silence: the
// 03:21:31 to 03:25:42 pair the 251-second champion breath rides -
// the full-face gap 93 the fieldread arc keeps, the champion window
// 251 the column's own cell)
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
// events the 298-second storm rides - the 04:26:44 to 04:28:19 pair
// the 95-second MID-STORM breath the deep-read names, the F3 re-join
// the silence wakes)
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

test('v0.976.352 census: the REAL faces byte-exact', () => {
  // F509's own face - the equality the two-flapper keeps (28=28)
  assert.deepEqual(rejoinGapCensus(REAL_F509), { rejoinGapSeconds: 28 })
  // F506's own face - the 148-second dawn-breath the storm opens
  assert.deepEqual(rejoinGapCensus(REAL_F506), { rejoinGapSeconds: 148 })
  // F530's own face - the quartet's own tail breath (67)
  assert.deepEqual(rejoinGapCensus(REAL_F530), { rejoinGapSeconds: 67 })
  // F532's own face - the duo's own 87-second wait (87)
  assert.deepEqual(rejoinGapCensus(REAL_F532), { rejoinGapSeconds: 87 })
  // F537's own champion window - the 251-second champion breath
  // (03:21:31 to 03:25:42 the F5 column's own intra-champion silence)
  assert.deepEqual(rejoinGapCensus(REAL_F537_F5), { rejoinGapSeconds: 251 })
  // F539's own face - the fresh face the 95-second mid-storm breath
  // keeps (04:26:44 to 04:28:19 the F3 re-join wakes)
  assert.deepEqual(rejoinGapCensus(REAL_F539), { rejoinGapSeconds: 95 })
  // the firsts-only face the lawful zero keeps
  assert.deepEqual(rejoinGapCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:13] [Server thread/INFO]: F4 joined the game'
  ]), { rejoinGapSeconds: 0 })
  // the single re-join event the lawful zero keeps (no adjacent pair)
  assert.deepEqual(rejoinGapCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:40] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinGapSeconds: 0 })
  // the no-echo face the lawful zero keeps
  assert.deepEqual(rejoinGapCensus(['[21:59:10] [Server thread/INFO]: Done (5.535s)! For help, type "help"']), { rejoinGapSeconds: 0 })
  // the same-second re-join set the lawful zero keeps (two bots'
  // SECOND joins the same second rides - every re-join event one
  // second the gaps all zero - the span's own zero the twin law keeps)
  assert.deepEqual(rejoinGapCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:12] [Server thread/INFO]: F4 joined the game',
    '[22:05:05] [Server thread/INFO]: F3 joined the game',
    '[22:05:05] [Server thread/INFO]: F4 joined the game'
  ]), { rejoinGapSeconds: 0 })
  // the day-cyclic wrap the accounting keeps (23:59:00 to 00:01:00
  // the 120 the next-day dawn rides)
  assert.deepEqual(rejoinGapCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[23:59:00] [Server thread/INFO]: F3 joined the game',
    '[00:01:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinGapSeconds: 120 })
  // non-array null
  assert.equal(rejoinGapCensus(null), null)
  assert.equal(rejoinGapCensus('lines'), null)
})

test('v0.976.352 arc: the REAL thirty-nine-face gap re-voiced byte-exact', () => {
  // the fire rounds' own audit (/home/z/faces331, the F539 face the
  // artifact 12320702659 rides) re-voices the gap arc -
  // THIRTY-ONE distinct classes no face born-constant
  const ARC = [137, 88, 119, 67, 107, 148, 134, 64, 28, 144, 86, 127, 99, 42, 62, 170, 70, 144, 82, 56, 56, 56, 36, 38, 117, 42, 110, 95, 40, 67, 133, 87, 117, 41, 61, 61, 93, 105, 95]
  assert.equal(ARC.length, 39)
  const classes = [...new Set(ARC)]
  assert.equal(classes.length, 31) // THIRTY-ONE distinct classes
  assert.equal(Math.max(...ARC), 170) // the ceiling F516's own silence
  assert.equal(Math.min(...ARC), 28) // the floor F509's own single-gap storm
  assert.equal(ARC[5], 148) // F506's own dawn-breath
  assert.equal(ARC[15], 170) // F516's own ceiling
  assert.equal(ARC[36], 93) // F537's own 364-storm breath
  assert.equal(ARC[37], 105) // F538's own 236-storm breath
  assert.equal(ARC[38], 95) // F539's own fresh 298-storm breath
  // the repeat trio the 31-of-39 arithmetic keeps (F520's F521's
  // F522's own 56)
  assert.equal(ARC.filter(v => v === 56).length, 3)
  // the twin pairs (61 the F535/F536 pair, 42, 67, 95, 117, 144)
  for (const twin of [61, 42, 67, 95, 117, 144]) assert.equal(ARC.filter(v => v === twin).length, 2, `twin ${twin}`)
  // the EQUALITY LAW: TWO faces the single gap owns the whole storm
  // (F509's own 28=28 idx 8, F529's own 40=40 idx 28 - the
  // two-flapper faces)
  for (const i of [8, 28]) assert.ok(ARC[i] > 0, `equality face index ${i}`)
  assert.equal(ARC[8], 28)
  assert.equal(ARC[28], 40)
  // the both-speak law (many values, no born-constant face)
  assert.equal(classes.length > 1, true)
  for (const v of ARC) assert.ok(Number.isInteger(v) && v >= 0 && v <= 86399)
})

test('v0.976.352 grammar: the refusal battery the strict frame keeps', () => {
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
    const face = rejoinGapCensus([bad])
    assert.deepEqual(face, { rejoinGapSeconds: 0 }, `refused: ${bad}`)
  }
})

test('v0.976.352 fence: every branch the day law keeps', () => {
  const ok = (v) => ({ back: { rejoinGapSeconds: v }, prev: { rejoinGapSeconds: v }, cur: { rejoinGapSeconds: v } })
  assert.equal(rejoinGapConsistent(ok(0)), true)
  assert.equal(rejoinGapConsistent(ok(170)), true)
  assert.equal(rejoinGapConsistent(ok(86399)), true)
  assert.equal(rejoinGapConsistent(ok(-1)), false)
  assert.equal(rejoinGapConsistent(ok(86400)), false)
  assert.equal(rejoinGapConsistent(ok(0.5)), false)
  assert.equal(rejoinGapConsistent(ok('170')), false)
  assert.equal(rejoinGapConsistent(ok(undefined)), false)
  assert.equal(rejoinGapConsistent(null), false)
  assert.equal(rejoinGapConsistent({}), false)
  assert.equal(rejoinGapConsistent({ back: { rejoinGapSeconds: 0 } }), false)
})

test('v0.976.352 row: the REAL arc windows byte-exact', () => {
  // the REAL swell the arc's own head keeps (F504 -> F505 -> F506:
  // 67 -> 107 -> 148 the stretches two steps deep)
  const swell = rejoinGapTrendRow({ back: { rejoinGapSeconds: 67 }, prev: { rejoinGapSeconds: 107 }, cur: { rejoinGapSeconds: 148 } })
  assert.equal(swell.startsWith("the fleet's own re-join gap trend (v0.976.352): the fleet's own re-join gap swell ran two steps deep - 67 -> 107 (+40) -> 148 (+41) - the fleet's own storms' longest silences stretched each face,"), true)
  // the REAL fade the same head keeps (F506 -> F507 -> F508:
  // 148 -> 134 -> 64 the shortening two steps deep)
  const fade = rejoinGapTrendRow({ back: { rejoinGapSeconds: 148 }, prev: { rejoinGapSeconds: 134 }, cur: { rejoinGapSeconds: 64 } })
  assert.equal(fade.startsWith("the fleet's own re-join gap trend (v0.976.352): the fleet's own re-join gap fade ran two steps deep - 148 -> 134 (-14) -> 64 (-70) - the fleet's own storms' longest silences shortened each face,"), true)
  // the REAL swing the fresh tail keeps (F537 -> F538 -> F539:
  // 93 -> 105 -> 95 the build and the settle)
  const swing = rejoinGapTrendRow({ back: { rejoinGapSeconds: 93 }, prev: { rejoinGapSeconds: 105 }, cur: { rejoinGapSeconds: 95 } })
  assert.equal(swing.startsWith("the fleet's own re-join gap trend (v0.976.352): the fleet's own re-join gap swing - 93 -> 105 (+12) -> 95 (-10) - the fleet's own storms traded their longest silence between the faces,"), true)
  // the REAL held window the arc's own mid keeps (F521 -> F522 ->
  // F523: 56 -> 56 -> 36 the held first step the honest silence
  // keeps - the REAL held pair the .351 arc lacked this cell owns)
  assert.equal(rejoinGapTrendRow({ back: { rejoinGapSeconds: 56 }, prev: { rejoinGapSeconds: 56 }, cur: { rejoinGapSeconds: 36 } }), null)
  // the REAL held second the fresh pair keeps (F534 -> F535 -> F536:
  // 41 -> 61 -> 61 the held second step)
  assert.equal(rejoinGapTrendRow({ back: { rejoinGapSeconds: 41 }, prev: { rejoinGapSeconds: 61 }, cur: { rejoinGapSeconds: 61 } }), null)
  // the tail co-existence every seat named (the .346 mass .347
  // breadth .348 depth .349 name .350 span .351 champion siblings)
  for (const seat of ['.346 re-join bin word prices', '.347 re-join bots word prices', '.348 re-join peak word prices', '.349 re-join peak name word prices', '.350 re-join span word prices', '.351 champion stretch word prices', '.314 join mass word prices', '.336 join echo drift word prices', 'deathcause join/leave counts', 'leave sibling', '.321/.322 login dawn/dusk', '.312/.313 port pair', '.315/.316/.317/.318/.319/.320 login cell seats', '.310/.311 class counts', '.333/.334/.335/.338/.339', '.332 opening clock', '.331 selection', '.330 completion', '.341 save trio clock', '.343 trio order', '.344 TACS order', '.345 TACS drift', '.293 prep', '.294/.324 done-ms', '.325/.326/.327/.328/.329', 'kick bill', '.278 advancement seat', 'gc band', '.292 fill lane']) {
    assert.equal(swell.includes(seat), true, `tail names ${seat}`)
  }
})
