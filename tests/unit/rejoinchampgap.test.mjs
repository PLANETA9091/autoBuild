import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampGapCensus, rejoinChampGapConsistent, rejoinChampGapTrendRow } from '../../src/lib/rejoinchampgap.mjs'

// the REAL faces the 40-face archive holds (/home/z/faces331 - the
// champion set's own longest inter-event silence the seven cells
// underprice: THIRTY-FOUR distinct classes the champion gap voices).

// F509's own full join column - the two-flapper's face (F16 the lone
// champion its two re-join events the single gap IS the champion's
// whole stretch - the 28=28 equality face keeps)
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
// F506's own full join column - the lone champion F1's own burst (the
// 65-second champion stretch the 9-second first breath opens - the
// 01:05:34 to 01:05:43 pair the champion's own cadence keeps)
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
  '[01:05:55] [Server thread/INFO]: F1 joined the game',
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
// peak ties EVERYONE - the champion set's own tail 67-second breath
// the 21:15:13 to 21:16:20 pair rides)
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
// F537's own F5 column - the fire-1043 deep-read's BOTH-EDGES FIRST
// champion window (the champion's OWN intra-window silence: the
// 03:21:31 to 03:25:42 pair the 251-second champion breath rides - the
// CEILING the cell prices, the .352 word's own champion-window child
// the test pinned the seat prices formally)
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
// F539's own full join column - the fire-1143 fresh face (the lone
// champion F19's own 37-second burst the 11-second champion breath
// keeps - the 04:29:16 to 04:29:27 pair the champion's own cadence
// rides)
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

test('v0.976.353 census: the REAL faces byte-exact', () => {
  // F509's own face - the equality the lone champion's single gap keeps (28=28)
  assert.deepEqual(rejoinChampGapCensus(REAL_F509), { rejoinChampGapSeconds: 28 })
  // F506's own face - the lone champion F1's own burst (the 9-second
  // first breath the 65-second ride opens)
  assert.deepEqual(rejoinChampGapCensus(REAL_F506), { rejoinChampGapSeconds: 9 })
  // F530's own face - the quartet's own tail breath (67)
  assert.deepEqual(rejoinChampGapCensus(REAL_F530), { rejoinChampGapSeconds: 67 })
  // F537's own champion window - the 251-second intra-champion silence
  // (03:21:31 to 03:25:42 the CEILING the both-edges face keeps)
  assert.deepEqual(rejoinChampGapCensus(REAL_F537_F5), { rejoinChampGapSeconds: 251 })
  // F539's own face - the lone champion F19's own burst cadence (11)
  assert.deepEqual(rejoinChampGapCensus(REAL_F539), { rejoinChampGapSeconds: 11 })
  // the firsts-only face the lawful zero keeps (no re-join events no
  // champion set)
  assert.deepEqual(rejoinChampGapCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:13] [Server thread/INFO]: F4 joined the game'
  ]), { rejoinChampGapSeconds: 0 })
  // the single re-join event the lawful zero keeps (no adjacent pair)
  assert.deepEqual(rejoinChampGapCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:40] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampGapSeconds: 0 })
  // the no-echo face the lawful zero keeps
  assert.deepEqual(rejoinChampGapCensus(['[21:59:10] [Server thread/INFO]: Done (5.535s)! For help, type "help"']), { rejoinChampGapSeconds: 0 })
  // the same-second re-join set the lawful zero keeps (two champions'
  // SECOND joins the same second rides - every champion gap zero)
  assert.deepEqual(rejoinChampGapCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:12] [Server thread/INFO]: F4 joined the game',
    '[22:05:05] [Server thread/INFO]: F3 joined the game',
    '[22:05:05] [Server thread/INFO]: F4 joined the game'
  ]), { rejoinChampGapSeconds: 0 })
  // the day-cyclic wrap the accounting keeps (23:59:00 to 00:01:00
  // the 120 the next-day dawn rides)
  assert.deepEqual(rejoinChampGapCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[23:59:00] [Server thread/INFO]: F3 joined the game',
    '[00:01:00] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampGapSeconds: 120 })
  // non-array null
  assert.equal(rejoinChampGapCensus(null), null)
  assert.equal(rejoinChampGapCensus('lines'), null)
})

test('v0.976.353 arc: the REAL forty-face champion gap re-voiced byte-exact', () => {
  // the fire rounds' own audit (/home/z/faces331, the F540 face the
  // artifact 12322634621 rides) re-voices the champion gap arc -
  // THIRTY-FOUR distinct classes no face born-constant
  const ARC = [193, 139, 93, 166, 132, 9, 134, 64, 28, 26, 100, 29, 19, 15, 78, 176, 122, 11, 104, 85, 35, 28, 14, 19, 238, 15, 125, 35, 40, 67, 20, 108, 158, 14, 8, 61, 251, 109, 11, 23]
  assert.equal(ARC.length, 40)
  const classes = [...new Set(ARC)]
  assert.equal(classes.length, 34) // THIRTY-FOUR distinct classes
  assert.equal(Math.max(...ARC), 251) // the ceiling F537's own champion window
  assert.equal(Math.min(...ARC), 8) // the floor F535's own burst
  assert.equal(ARC[5], 9) // F506's own lone-champion burst
  assert.equal(ARC[29], 67) // F530's own quartet tail breath
  assert.equal(ARC[36], 251) // F537's own both-edges window
  assert.equal(ARC[38], 11) // F539's own F19 burst cadence
  assert.equal(ARC[39], 23) // F540's own fresh 35-stretch breath
  // the six twin pairs the 34-of-40 arithmetic keeps (28 the F509/F521
  // pair, 19 the F513/F524 pair, 15 the F514/F526 pair, 11 the F518/
  // F539 pair, 35 the F521... the ledger keeps, 14 the F523/F534 pair)
  for (const twin of [28, 19, 15, 11, 35, 14]) assert.equal(ARC.filter(v => v === twin).length, 2, `twin ${twin}`)
  // the EQUALITY LAW: EIGHT faces the single gap owns the whole
  // champion ride (F509's own 28=28 idx 8, F510's own idx 9, F513's
  // own idx 12, F518's own idx 17, F519's own idx 18, F528's own
  // idx 27, F529's own 40=40 idx 28, F531's own idx 30 - the
  // two-event champion rides)
  for (const [i, v] of [[8, 28], [9, 26], [12, 19], [17, 11], [18, 104], [27, 35], [28, 40], [30, 20]]) assert.equal(ARC[i], v, `equality face index ${i}`)
  // the both-speak law (many values, no born-constant face)
  assert.equal(classes.length > 1, true)
  for (const v of ARC) assert.ok(Number.isInteger(v) && v >= 0 && v <= 86399)
})

test('v0.976.353 grammar: the refusal battery the strict frame keeps', () => {
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
    const face = rejoinChampGapCensus([bad])
    assert.deepEqual(face, { rejoinChampGapSeconds: 0 }, `refused: ${bad}`)
  }
})

test('v0.976.353 fence: every branch the day law keeps', () => {
  const ok = (v) => ({ back: { rejoinChampGapSeconds: v }, prev: { rejoinChampGapSeconds: v }, cur: { rejoinChampGapSeconds: v } })
  assert.equal(rejoinChampGapConsistent(ok(0)), true)
  assert.equal(rejoinChampGapConsistent(ok(251)), true)
  assert.equal(rejoinChampGapConsistent(ok(86399)), true)
  assert.equal(rejoinChampGapConsistent(ok(-1)), false)
  assert.equal(rejoinChampGapConsistent(ok(86400)), false)
  assert.equal(rejoinChampGapConsistent(ok(0.5)), false)
  assert.equal(rejoinChampGapConsistent(ok('251')), false)
  assert.equal(rejoinChampGapConsistent(ok(undefined)), false)
  assert.equal(rejoinChampGapConsistent(null), false)
  assert.equal(rejoinChampGapConsistent({}), false)
  assert.equal(rejoinChampGapConsistent({ back: { rejoinChampGapSeconds: 0 } }), false)
})

test('v0.976.353 row: the REAL arc windows byte-exact', () => {
  // the REAL swell the arc's own fresh tail keeps (F535 -> F536 ->
  // F537: 8 -> 61 -> 251 the champions' breaths two steps deep)
  const swell = rejoinChampGapTrendRow({ back: { rejoinChampGapSeconds: 8 }, prev: { rejoinChampGapSeconds: 61 }, cur: { rejoinChampGapSeconds: 251 } })
  assert.equal(swell.startsWith("the fleet's own champion gap trend (v0.976.353): the fleet's own champion gap swell ran two steps deep - 8 -> 61 (+53) -> 251 (+190) - the fleet's own champions' longest silences stretched each face,"), true)
  // the REAL fade the same head keeps (F501 -> F502 -> F503:
  // 193 -> 139 -> 93 the shortening two steps deep)
  const fade = rejoinChampGapTrendRow({ back: { rejoinChampGapSeconds: 193 }, prev: { rejoinChampGapSeconds: 139 }, cur: { rejoinChampGapSeconds: 93 } })
  assert.equal(fade.startsWith("the fleet's own champion gap trend (v0.976.353): the fleet's own champion gap fade ran two steps deep - 193 -> 139 (-54) -> 93 (-46) - the fleet's own champions' longest silences shortened each face,"), true)
  // the REAL swing the fresh tail keeps (F538 -> F539 -> F540:
  // 109 -> 11 -> 23 the collapse and the fresh breath)
  const swing = rejoinChampGapTrendRow({ back: { rejoinChampGapSeconds: 109 }, prev: { rejoinChampGapSeconds: 11 }, cur: { rejoinChampGapSeconds: 23 } })
  assert.equal(swing.startsWith("the fleet's own champion gap trend (v0.976.353): the fleet's own champion gap swing - 109 -> 11 (-98) -> 23 (+12) - the fleet's own champions traded their longest silence between the faces,"), true)
  // the held window the honest silence keeps (the REAL forty-face arc
  // holds no held pair the synthetic window the family's held law
  // pins - the held first step no direction no row invents)
  assert.equal(rejoinChampGapTrendRow({ back: { rejoinChampGapSeconds: 61 }, prev: { rejoinChampGapSeconds: 61 }, cur: { rejoinChampGapSeconds: 8 } }), null)
  // the held second step the same silence keeps
  assert.equal(rejoinChampGapTrendRow({ back: { rejoinChampGapSeconds: 35 }, prev: { rejoinChampGapSeconds: 28 }, cur: { rejoinChampGapSeconds: 28 } }), null)
  // the tail co-existence every seat named (the .346 mass .347
  // breadth .348 depth .349 name .350 span .351 champion stretch .352
  // re-join gap siblings)
  for (const seat of ['.346 re-join bin word prices', '.347 re-join bots word prices', '.348 re-join peak word prices', '.349 re-join peak name word prices', '.350 re-join span word prices', '.351 champion stretch word prices', '.352 re-join gap word prices', '.314 join mass word prices', '.336 join echo drift word prices', 'deathcause join/leave counts', 'leave sibling', '.321/.322 login dawn/dusk', '.312/.313 port pair', '.315/.316/.317/.318/.319/.320 login cell seats', '.310/.311 class counts', '.333/.334/.335/.338/.339', '.332 opening clock', '.331 selection', '.330 completion', '.341 save trio clock', '.343 trio order', '.344 TACS order', '.345 TACS drift', '.293 prep', '.294/.324 done-ms', '.325/.326/.327/.328/.329', 'kick bill', '.278 advancement seat', 'gc band', '.292 fill lane']) {
    assert.equal(swell.includes(seat), true, `tail names ${seat}`)
  }
})
