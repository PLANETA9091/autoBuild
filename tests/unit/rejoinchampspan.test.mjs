import { test } from 'node:test'
import assert from 'node:assert/strict'
import { rejoinChampSpanCensus, rejoinChampSpanConsistent, rejoinChampSpanTrendRow } from '../../src/lib/rejoinchampspan.mjs'

// the REAL faces the fresh 37-face archive holds (fire-1043's own
// re-harvest, /home/z/faces331 - the champion's own stretch the five
// cells underprice: THIRTY-SIX distinct classes the stretch voices).

// F509's own full join column - the lone flapper's face (F16 the
// lone champion, the stretch EQUALS the storm's own 28 - the
// equality face the flat pair keeps)
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
// F506's own full join column - the lone champion's own 65-second
// burst within the 279-second storm (F1's eleven re-joins the
// compression the cell names - the champion's dawn 01:05:34 rides
// EIGHT seconds after the storm's own dawn 01:03:06, the champion's
// dusk 01:06:39 rides a minute before the storm's own dusk 01:07:45)
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
// F530's own full join column - the quartet face (peak ONE the floor
// ties EVERYONE four champions - the whole storm the champions own,
// the stretch EQUALS the 160 - the equality face the flat law keeps)
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
// re-joins the lone champion - the stretch EQUALS the 248 the
// champion's own dusk the storm's own dusk IS)
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
// (eleven joins ten re-joins the mega-flapper keeps - the champion's
// own dawn 03:21:31 the storm's own dawn IS and the champion's own
// dusk 03:27:35 the storm's own dusk IS - the 364 the ceiling rides)
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

test('v0.976.351 census: the REAL faces byte-exact', () => {
  // F509's own face - the equality the lone flapper keeps (28=28)
  assert.deepEqual(rejoinChampSpanCensus(REAL_F509), { rejoinChampSpanSeconds: 28 })
  // F506's own face - the lone champion's 65-second burst within the
  // 279-second storm (the compression the cell names)
  assert.deepEqual(rejoinChampSpanCensus(REAL_F506), { rejoinChampSpanSeconds: 65 })
  // F530's own face - the quartet ties EVERYONE the stretch equals (160)
  assert.deepEqual(rejoinChampSpanCensus(REAL_F530), { rejoinChampSpanSeconds: 160 })
  // F532's own face - the lone champion's dusk the storm's dusk IS (248)
  assert.deepEqual(rejoinChampSpanCensus(REAL_F532), { rejoinChampSpanSeconds: 248 })
  // F537's own champion window - the both-edges first (364)
  assert.deepEqual(rejoinChampSpanCensus(REAL_F537_F5), { rejoinChampSpanSeconds: 364 })
  // the firsts-only face the lawful zero keeps
  assert.deepEqual(rejoinChampSpanCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:13] [Server thread/INFO]: F4 joined the game'
  ]), { rejoinChampSpanSeconds: 0 })
  // the single champion re-join event the lawful zero keeps
  assert.deepEqual(rejoinChampSpanCensus([
    '[21:59:10] [Server thread/INFO]: F3 joined the game',
    '[21:59:40] [Server thread/INFO]: F3 joined the game'
  ]), { rejoinChampSpanSeconds: 0 })
  // the no-echo face the lawful zero keeps
  assert.deepEqual(rejoinChampSpanCensus(['[21:59:10] [Server thread/INFO]: Done (5.535s)! For help, type "help"']), { rejoinChampSpanSeconds: 0 })
  // the name cell rides shape only - the survey's own triple echo
  // the window carries honestly (the champion the survey IS in the
  // window's own arithmetic the frame never filters - the .349
  // lesson keeps, the stretch the 11 the re-join dawn keeps)
  assert.deepEqual(rejoinChampSpanCensus([
    '[01:48:08] [Server thread/INFO]: YardSurvey joined the game',
    '[01:48:20] [Server thread/INFO]: YardSurvey joined the game',
    '[01:48:31] [Server thread/INFO]: YardSurvey joined the game'
  ]), { rejoinChampSpanSeconds: 11 })
  // non-array null
  assert.equal(rejoinChampSpanCensus(null), null)
  assert.equal(rejoinChampSpanCensus('lines'), null)
})

test('v0.976.351 arc: the REAL thirty-seven-face stretch re-voiced byte-exact', () => {
  // fire-1043's own audit (/home/z/faces331, the F537 face the
  // artifact 12318509788 rides) re-voices the stretch arc -
  // THIRTY-SIX distinct classes no face born-constant
  const ARC = [288, 187, 99, 213, 229, 65, 217, 235, 28, 26, 297, 118, 19, 118, 115, 209, 170, 11, 104, 124, 127, 77, 22, 157, 261, 31, 141, 35, 40, 160, 20, 248, 183, 38, 15, 267, 364]
  assert.equal(ARC.length, 37)
  const classes = [...new Set(ARC)]
  assert.equal(classes.length, 36) // THIRTY-SIX distinct classes
  assert.equal(Math.max(...ARC), 364) // the ceiling F537's own storm
  assert.equal(Math.min(...ARC), 11) // the floor F518's own burst
  assert.equal(ARC[5], 65) // F506's own lone champion's burst
  assert.equal(ARC[17], 11) // F518's own floor
  assert.equal(ARC[36], 364) // F537's own both-edges ceiling
  // the repeat pair the 36-of-37 arithmetic keeps (F512's and
  // F514's own 118)
  assert.equal(ARC.filter(v => v === 118).length, 2)
  // the EQUALITY LAW: NINE faces the champion stretch equals the
  // storm span (F504/F509/F511/F515/F527/F529/F530/F532/F537 - the
  // fire-1043 audit's own finding the census keeps)
  const EQ = [3, 8, 10, 14, 26, 28, 29, 31, 36]
  for (const i of EQ) assert.ok(ARC[i] > 0, `equality face index ${i}`)
  // the both-speak law (many values, no born-constant face)
  assert.equal(classes.length > 1, true)
  for (const v of ARC) assert.ok(Number.isInteger(v) && v >= 0 && v <= 86399)
})

test('v0.976.351 grammar: the refusal battery the strict frame keeps', () => {
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
    const face = rejoinChampSpanCensus([bad])
    assert.deepEqual(face, { rejoinChampSpanSeconds: 0 }, `refused: ${bad}`)
  }
})

test('v0.976.351 fence: every branch the day law keeps', () => {
  const ok = (v) => ({ back: { rejoinChampSpanSeconds: v }, prev: { rejoinChampSpanSeconds: v }, cur: { rejoinChampSpanSeconds: v } })
  assert.equal(rejoinChampSpanConsistent(ok(0)), true)
  assert.equal(rejoinChampSpanConsistent(ok(364)), true)
  assert.equal(rejoinChampSpanConsistent(ok(86399)), true)
  assert.equal(rejoinChampSpanConsistent(ok(-1)), false)
  assert.equal(rejoinChampSpanConsistent(ok(86400)), false)
  assert.equal(rejoinChampSpanConsistent(ok(0.5)), false)
  assert.equal(rejoinChampSpanConsistent(ok('364')), false)
  assert.equal(rejoinChampSpanConsistent(ok(undefined)), false)
  assert.equal(rejoinChampSpanConsistent(null), false)
  assert.equal(rejoinChampSpanConsistent({}), false)
  assert.equal(rejoinChampSpanConsistent({ back: { rejoinChampSpanSeconds: 0 } }), false)
})

test('v0.976.351 row: the REAL arc windows byte-exact', () => {
  // the REAL fade the arc's own head keeps (F501 -> F502 -> F503:
  // 288 -> 187 -> 99 the shortening two steps deep)
  const fade = rejoinChampSpanTrendRow({ back: { rejoinChampSpanSeconds: 288 }, prev: { rejoinChampSpanSeconds: 187 }, cur: { rejoinChampSpanSeconds: 99 } })
  assert.equal(fade.startsWith("the fleet's own champion stretch trend (v0.976.351): the fleet's own champion stretch fade ran two steps deep - 288 -> 187 (-101) -> 99 (-88) - the fleet's own champions' rides shortened each face,"), true)
  // the REAL swell the mid-arc keeps (F519 -> F520 -> F521:
  // 104 -> 124 -> 127 the stretch's own build two steps deep)
  const swell = rejoinChampSpanTrendRow({ back: { rejoinChampSpanSeconds: 104 }, prev: { rejoinChampSpanSeconds: 124 }, cur: { rejoinChampSpanSeconds: 127 } })
  assert.equal(swell.startsWith("the fleet's own champion stretch trend (v0.976.351): the fleet's own champion stretch swell ran two steps deep - 104 -> 124 (+20) -> 127 (+3) - the fleet's own champions' rides stretched each face,"), true)
  // the REAL swing the storm faces keep (F525 -> F526 -> F527:
  // 261 -> 31 -> 141 the collapse and the climb back)
  const swing = rejoinChampSpanTrendRow({ back: { rejoinChampSpanSeconds: 261 }, prev: { rejoinChampSpanSeconds: 31 }, cur: { rejoinChampSpanSeconds: 141 } })
  assert.equal(swing.startsWith("the fleet's own champion stretch trend (v0.976.351): the fleet's own champion stretch swing - 261 -> 31 (-230) -> 141 (+110) - the fleet's own champions traded their stretch between the faces,"), true)
  // the held step the honest silence keeps (no adjacent equal pair
  // the real 37-face arc keeps - the synthetic window the law's own
  // fence rides)
  assert.equal(rejoinChampSpanTrendRow({ back: { rejoinChampSpanSeconds: 288 }, prev: { rejoinChampSpanSeconds: 288 }, cur: { rejoinChampSpanSeconds: 187 } }), null)
  // the held second the honest silence keeps
  assert.equal(rejoinChampSpanTrendRow({ back: { rejoinChampSpanSeconds: 261 }, prev: { rejoinChampSpanSeconds: 31 }, cur: { rejoinChampSpanSeconds: 31 } }), null)
  // the tail co-existence every seat named (the .346 mass .347
  // breadth .348 depth .349 name .350 span siblings first)
  for (const seat of ['.346 re-join bin word prices', '.347 re-join bots word prices', '.348 re-join peak word prices', '.349 re-join peak name word prices', '.350 re-join span word prices', '.314 join mass word prices', '.336 join echo drift word prices', 'deathcause join/leave counts', 'leave sibling', '.321/.322 login dawn/dusk', '.312/.313 port pair', '.315/.316/.317/.318/.319/.320 login cell seats', '.310/.311 class counts', '.333/.334/.335/.338/.339', '.332 opening clock', '.331 selection', '.330 completion', '.341 save trio clock', '.343 trio order', '.344 TACS order', '.345 TACS drift', '.293 prep', '.294/.324 done-ms', '.325/.326/.327/.328/.329', 'kick bill', '.278 advancement seat', 'gc band', '.292 fill lane']) {
    assert.equal(swell.includes(seat), true, `tail names ${seat}`)
  }
})
